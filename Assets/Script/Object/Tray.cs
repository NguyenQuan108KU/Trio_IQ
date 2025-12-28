using DG.Tweening;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using UnityEditorInternal.VersionControl;
using UnityEngine;
using static UnityEditor.Progress;

public class Tray : MonoBehaviour
{
    public float spacing = 0.2f;      // khoảng cách giữa item
    public float moveTime = 0.2f;
    public GameObject diskPrefab;
    public Transform diskTransform;
    public float shrinkTime = 0.1f;
    public float itemToDiskTime = 2f;
    public float attachDelay = 0.15f;   // item chậm theo disk
    public float followSmooth = 0.25f;  // độ mượt
    public Vector3 diskItemScale = new Vector3(0.03f, 0.03f, 0.03f);
    public GameObject soldOutPrefabs;
    public GameObject[] listItem;
    public int maxSlot = 3;
    public bool isCompleted = false;
    public Slot[] slots;
    public bool isClosed = false;
    [Header("Match Effect")]
    public GameObject fireEffectPrefab;
    public float fireEffectTime = 2f; // thời gian animation lửa
    public bool isInTutorialArea = false;

    public Plate diskItem;

    public List<Plate> disks = new();

    // disk đang dùng
    private int currentDiskIndex = 0;
    private void Start()
    {
        slots = GetComponentsInChildren<Slot>();

        for (int d = 0; d < disks.Count; d++)
        {
            Plate disk = disks[d];

            if (d == 0)
            {
                foreach (var item in disk.items)
                {
                    var sr = item.GetComponent<SpriteRenderer>();
                    if (sr != null)
                    {
                        Color c = sr.color;
                        c.a = 0.6f;          
                        sr.color = c;
                    }

                    item.isLocked = false;
                }
            }
            else
            {
                disk.HideAllItems();
            }
        }
    }

    public void CheckMatch()
    {
   
        DragItem[] items = GetComponentsInChildren<DragItem>();

        // group by sprite name when possible, fallback to GameObject name
        var groups = items.GroupBy(i =>
        {
            var sr = i.GetComponent<SpriteRenderer>();
            return sr != null && sr.sprite != null
                ? sr.sprite.name
                : i.gameObject.name;
        });

        foreach (var g in groups)
        {
            if (g.Count() >= 3)
            {
                isCompleted = true;
                GameManager.Instance.point += 1;
                //GameManager.Instance.textPoint.text = GameManager.Instance.point.ToString();
                var matchedItems = g.Take(3).ToList();

                foreach (var item in matchedItems)
                {
                    item.isLocked = true;
                }
                StartCoroutine(
                PlayFireThenMerge(matchedItems)
            );
                //GameObject fireEffecrt = Instantiate(fireEffectPrefab, this.transform);
                //MoveToCenter(g.Take(3).ToList());
                ProgressBrain.instance.AddTrayMatch();
                AudioManager.Instance.PlaySFX(AudioManager.Instance.match);
                //CloseBox();
                return;
            }
        }
    }
    IEnumerator PlayFireThenMerge(List<DragItem> items)
    {
        // 1️⃣ Spawn fire theo TRAY (LOCAL SPACE)
        GameObject fire = Instantiate(
            fireEffectPrefab,
            transform // parent luôn là Tray
        );

        fire.transform.localPosition = new Vector3(0f, 0.9f, 0f);
        fire.transform.localRotation = Quaternion.identity;
        //fire.transform.localScale = Vector3.one;

        // 2️⃣ Animator
        Animator anim = fire.GetComponent<Animator>();

        if (anim != null)
        {
            anim.Play(0, 0, 0f);

            // lấy thời lượng clip
            AnimatorStateInfo state = anim.GetCurrentAnimatorStateInfo(0);
            float clipLength = state.length;

            yield return new WaitForSeconds(clipLength);
        }
        else
        {
            yield return new WaitForSeconds(0.5f);
        }


        Destroy(fire);

        
        MoveToCenter(items);
    }
    void MoveToCenter(List<DragItem> items)
    {
        // 🔥 ÉP TẤT CẢ ITEM CHUNG 1 PARENT (TRAY)
        foreach (var item in items)
            item.transform.SetParent(transform, true);

        items = items.OrderBy(i => i.transform.position.x).ToList();

        for (int i = 0; i < items.Count; i++)
            items[i].GetComponent<SpriteRenderer>().sortingOrder = i + 1;

        DragItem center = items[1];

        Vector3 centerLocalPos = center.transform.localPosition;

        float smallOffset = 0.3f;
        Sequence seq = DOTween.Sequence();

        for (int i = 0; i < items.Count; i++)
        {
            var item = items[i];
            item.transform.DOKill();

            float offsetX = (i - 1) * smallOffset;
            Vector3 targetLocalPos =
                centerLocalPos + new Vector3(offsetX, 0, 0);

            seq.Join(
                item.transform.DOLocalMove(targetLocalPos, moveTime)
                    .SetEase(Ease.OutBack)
            );
        }

        seq.OnComplete(() =>
        {
            SpawnDisk(items);
        });
    }



    void SpawnDisk(List<DragItem> items)
    {
        GameObject diskObj = Instantiate(
            diskPrefab,
            DiskTransform.instance.transform.position,
            Quaternion.identity
        );

        Disk disk = diskObj.GetComponent<Disk>();

        float jumpPower = 0.5f;
        int jumpCount = 1;
        float flyTime = 0.4f;

        // 🔥 TÍNH TÂM THẾ GIỚI CỦA NHÓM
        Vector3 groupCenter = Vector3.zero;
        foreach (var item in items)
            groupCenter += item.transform.position;
        groupCenter /= items.Count;

        Sequence groupSeq = DOTween.Sequence();

        for (int i = 0; i < items.Count; i++)
        {
            var item = items[i];
            item.transform.DOKill();

            // 🔥 offset GIỮ NGUYÊN HÌNH DẠNG
            Vector3 offsetFromCenter = item.transform.position - groupCenter;

            Vector3 worldScale = item.transform.lossyScale;

            // tách khỏi Tray
            item.transform.SetParent(null, true);
            item.transform.localScale = worldScale;

            Vector3 targetPos = disk.transform.position + offsetFromCenter * 0.6f;

            groupSeq.Join(
                item.transform.DOJump(
                    targetPos,
                    jumpPower,
                    jumpCount,
                    flyTime
                ).SetEase(Ease.InOutSine)
            );

            groupSeq.Join(
                item.transform.DOScale(worldScale * 0.35f, flyTime)
                    .SetEase(Ease.InQuad)
            );
        }

        groupSeq.AppendInterval(attachDelay);

        groupSeq.OnComplete(() =>
        {
            foreach (var item in items)
            {
                item.transform.SetParent(disk.transform, true);
                item.transform.localScale = Vector3.one * 0.35f;
                disk.AddItem(item.transform);
            }

            TryHandleAfterMatch();
        });
    }


    public void CloseTray()
    {
        isClosed = true;
        GameObject soldOut = Instantiate(soldOutPrefabs);

        Transform t = soldOut.transform;
        t.SetParent(this.transform, false);

        SpriteRenderer sr = soldOut.GetComponent<SpriteRenderer>();

        Vector3 startLocalPos = new Vector3(0f, 1f, 0f);
        Vector3 hitPos = new Vector3(0f, 0.1f, 0f);
        Vector3 bouncePos = new Vector3(0f, 0.13f, 0f);

        t.localPosition = startLocalPos;
        t.localScale = Vector3.one * 0.8f;

        if (sr != null)
            sr.color = new Color(1f, 1f, 1f, 0f);

        Sequence seq = DOTween.Sequence();

        // 1️⃣ Xuất hiện (đứng yên)
        if (sr != null)
            seq.Append(sr.DOFade(1f, 0.18f));

        seq.Join(
            t.DOScale(1f, 0.1f)
             .SetEase(Ease.OutQuad)
        );

        // 2️⃣ Rơi xuống (sau khi đã hiện)
        seq.Append(
            t.DOLocalMove(hitPos, 0.25f)
             .SetEase(Ease.InQuad)
        );
        //seq.AppendCallback(() =>
        //{
        //    AudioManager.Instance.PlaySFX(AudioManager.Instance.closeBox);
        //});
        // 3️⃣ Nảy rất nhẹ
        seq.Append(
            t.DOLocalMove(bouncePos, 0.08f)
             .SetEase(Ease.OutQuad)
        );

        // 4️⃣ Ổn định vị trí
        seq.Append(
            t.DOLocalMove(hitPos, 0.06f)
             .SetEase(Ease.InQuad)
        );
        seq.OnComplete(() =>
        {
            AudioManager.Instance.PlaySFX(AudioManager.Instance.closeBox);
            
        });
    }
    //Lấy số lượng item cùng loại
    public int GetMaxSameItemCount()
    {
        if (isCompleted) return 0;
        DragItem[] items = GetComponentsInChildren<DragItem>();
        if (items.Length == 0) return 0;

        return items
            .GroupBy(i =>
            {
                var sr = i.GetComponent<SpriteRenderer>();
                return sr != null && sr.sprite != null
                    ? sr.sprite.name
                    : i.gameObject.name;
            })
            .Max(g => g.Count());
    }
    public Slot GetEmptySlot()
    {
        if (isCompleted) return null;

        foreach (Slot slot in slots)
        {
            if (slot.IsEmpty())
                return slot;
        }
        return null;
    }
    public DragItem GetAnyMatchingItem()
    {
        if (isCompleted) return null;

        DragItem[] items = GetComponentsInChildren<DragItem>();
        if (items.Length == 0) return null;

        var groups = items
            .GroupBy(i =>
            {
                var sr = i.GetComponent<SpriteRenderer>();
                return sr != null && sr.sprite != null
                    ? sr.sprite.name
                    : i.gameObject.name;
            })
            .OrderByDescending(g => g.Count())
            .FirstOrDefault();

        if (groups == null)
            return null;

        // lấy 1 item bất kỳ trong nhóm đó
        return groups.First();
    }
    public string GetMainItemKey()
    {
        DragItem[] items = GetComponentsInChildren<DragItem>();
        if (items.Length == 0) return null;

        return items
            .GroupBy(i =>
            {
                var sr = i.GetComponent<SpriteRenderer>();
                return sr != null && sr.sprite != null
                    ? sr.sprite.name
                    : i.gameObject.name;
            })
            .OrderByDescending(g => g.Count())
            .First()
            .Key;
    }

    public void RefillFromDisk(Plate diskItem)
    {
        if (diskItem == null || diskItem.IsEmpty()) return;

        // 🔥 1. SORT ITEM TRÊN DISK (TRÁI → PHẢI)
        var orderedItems = diskItem.items
            .OrderBy(i => i.transform.position.x)
            .ToList();

        float moveTime = 0.38f;
        float delayStep = 0.08f;
        float scaleTime = 0.32f;

        int index = 0;
        bool diskWillBeEmpty = false;

        foreach (Slot slot in slots) // giữ nguyên thứ tự slot
        {
            // ❗ slot trống = currentItem == null
            if (slot.currentItem == null) continue;
            if (index >= orderedItems.Count) break;

            DragItem item = orderedItems[index];
            index++;

            diskItem.RemoveItem(item);
            diskWillBeEmpty = diskItem.IsEmpty();
            item.transform.DOKill();


            Vector3 startLocalScale = item.transform.localScale;

            // set parent sớm – giữ world
            item.transform.SetParent(slot.transform, true);
            item.transform.localScale = startLocalScale;

            int completed = 0;

            SpriteRenderer sr = item.GetComponent<SpriteRenderer>();
            if (sr != null)
            {
                Color c = sr.color;
                c.a = 1f; // 255
                sr.color = c;
            }

            float delay = (index - 1) * delayStep;

            Sequence seq = DOTween.Sequence();
            seq.AppendInterval(delay);

            seq.Append(
                item.transform.DOLocalMove(
                    slot.anchor.localPosition,
                    moveTime
                ).SetEase(Ease.OutCubic)
            );

            seq.Join(
                item.transform.DOScale(Vector3.one, scaleTime)
                    .SetEase(Ease.OutBack, 0.8f)
            );

            seq.OnComplete(() =>
            {
                item.transform.localPosition = Vector3.zero;
                slot.SetItem(item);
                item.startScale = Vector3.one; // hoặc item.transform.localScale
                if (diskWillBeEmpty)
                {
                    diskItem.FadeAndDestroy();
                }
            });
        }
        currentDiskIndex++;
        Plate nextDisk = CurrentDisk;
        if (nextDisk != null)
        {
            nextDisk.ShowItemsInListOrder();
        }
    }
    public Plate CurrentDisk
    {
        get
        {
            if (currentDiskIndex > disks.Count)
                return null;
            return disks[currentDiskIndex];
        }
    }


    public void TryHandleAfterMatch()
    {
        Plate disk = CurrentDisk;
  
        if (disk != null)
        {
            RefillFromDisk(disk);
        }
        else
        {
            CloseTray(); // ✅ hết disk thật sự
        }
    }
    private void OnTriggerEnter2D(Collider2D other)
    {
        if (other.CompareTag("TutorialArea"))
        {
            isInTutorialArea = true;
        }
    }

    private void OnTriggerExit2D(Collider2D other)
    {
        if (other.CompareTag("TutorialArea"))
        {
            isInTutorialArea = false;
        }
    }
    //public bool HasEmptySlot()
    //{
    //    return GetComponentsInChildren<DragItem>().Length < maxSlot;
    //}

    //public void Disappear()
    //{
    //    transform.DOKill();

    //    TrayManager manager = GetComponentInParent<TrayManager>();
    //    Sequence seq = DOTween.Sequence();
    //    seq.Append(
    //        transform.DOScale(Vector3.zero, 0.18f)
    //            .SetEase(Ease.InOutCubic)
    //    );
    //    seq.OnComplete(() =>
    //    {
    //        Destroy(gameObject);
    //    });
    //}
}
