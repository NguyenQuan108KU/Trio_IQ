using DG.Tweening;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using UnityEngine;

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

    private void Start()
    {
        slots = GetComponentsInChildren<Slot>();
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
                GameManager.Instance.textPoint.text = GameManager.Instance.point.ToString();
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
                //ProgressBrain.instance.AddTrayMatch();
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
        // đảm bảo thứ tự trái – giữa – phải
        items = items.OrderBy(i => i.transform.position.x).ToList();

        for (int i = 0; i < items.Count; i++)
        {
            items[i].GetComponent<SpriteRenderer>().sortingOrder = i;
        }

        DragItem center = items[1];
        Vector3 centerPos = center.transform.position;

        float smallOffset = 0.15f; // 👈 khoảng cách nhỏ giữa các item
        //.Instance.PlaySFX(AudioManager.Instance.finish);

        Sequence seq = DOTween.Sequence();

        for (int i = 0; i < items.Count; i++)
        {
            var item = items[i];
            item.transform.DOKill();

            // offset nhỏ quanh tâm
            float offsetX = (i - 1) * smallOffset; // -offset, 0, +offset
            Vector3 targetPos = centerPos + new Vector3(offsetX, 0, 0);

            seq.Join(
                item.transform.DOMove(targetPos, moveTime)
                    .SetEase(Ease.OutBack)
            );
        }
        seq.OnComplete(() =>
        {
            foreach (var item in items)
                item.transform.SetParent(null, true);

            FlyToTargetAndDisappear(items, centerPos);
        });

    }
    void FlyToTargetAndDisappear(List<DragItem> items, Vector3 centerPos)
    {
        float flyTime = 0.4f;
        Transform targetParent = GameManager.Instance.target.transform;
        Transform targettext = GameManager.Instance.text_target.transform;

        foreach (var item in items)
        {
            item.transform.DOKill();

            Vector3 startScale = item.transform.lossyScale;
            Vector3 targetScale = startScale * 0.35f;

            Vector3 targetPos = GameManager.Instance.target.transform.position;

            Sequence seq = DOTween.Sequence();

            seq.Append(
                item.transform.DOMove(targetPos, flyTime)
                    .SetEase(Ease.OutCubic)
            );

            seq.Insert(
                flyTime * 0.2f,
                item.transform.DOScale(targetScale, flyTime * 0.8f)
                    .SetEase(Ease.InQuad)
            );

            seq.AppendCallback(() =>
            {
                // 💥 Nhún cha của target
                if (targetParent != null)
                {
                    targetParent.DOKill();
                    targetParent.DOPunchScale(
                        Vector3.one * 0.15f,  0.2f, 6, 0.6f                 
                    );
                }
                if (targettext != null)
                {
                    targettext.DOKill();
                    targettext.DOPunchScale(
                        Vector3.one * 0.15f, 0.2f, 6, 0.6f
                    );
                }
                Destroy(item.gameObject);
                CloseTray();
            });
        }
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
        seq.AppendCallback(() =>
        {
            AudioManager.Instance.PlaySFX(AudioManager.Instance.closeBox);
        });
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
            if (sr != null)
                sr.sortingOrder = -5;
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
