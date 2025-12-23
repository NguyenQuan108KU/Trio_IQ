using UnityEngine;
using DG.Tweening;
using System.Linq;
using System.Collections.Generic;

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
                MoveToCenter(g.Take(3).ToList());
                //ProgressBrain.instance.AddTrayMatch();
                //AudioManager.Instance.PlaySFX(AudioManager.Instance.match);
                //CloseBox();
                return;
            }
        }
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

            SpawnDisk(items, centerPos);
        });
    }
    void SpawnDisk(List<DragItem> items, Vector3 centerPos)
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

        foreach (var item in items)
        {
            item.transform.DOKill();

            Vector3 startScale = item.transform.lossyScale;
            Vector3 targetScale = startScale * 0.35f;

            Vector3 offset = item.transform.position - centerPos;
            Vector3 targetPos = disk.transform.position + offset * 0.6f;

            Sequence seq = DOTween.Sequence();
            seq.Append(
                item.transform.DOJump(
                    targetPos,
                    jumpPower,
                    jumpCount,
                    flyTime
                ).SetEase(Ease.InOutSine)   
            );
            seq.Insert(
                flyTime * 0.2f,
                item.transform.DOScale(targetScale, flyTime * 0.8f)
                    .SetEase(Ease.InQuad)
            );

            seq.AppendInterval(attachDelay);

            seq.AppendCallback(() =>
            {
                item.transform.SetParent(disk.transform, true);
                item.transform.localScale = Vector3.one * 0.35f;
                disk.AddItem(item.transform);
                CloseTray();
            });
        }
    }
    public void CloseTray()
    {
        GameObject soldOut = Instantiate(soldOutPrefabs);

        Transform t = soldOut.transform;
        t.SetParent(this.transform, false);

        SpriteRenderer sr = soldOut.GetComponent<SpriteRenderer>();

        Vector3 startLocalPos = new Vector3(0f, 0.4f, 0f);  // cao hơn
        Vector3 endLocalPos = new Vector3(0f, 0.1f, 0f);

        t.localPosition = startLocalPos;
        t.localScale = Vector3.one * 0.75f;

        if (sr != null)
            sr.color = new Color(1f, 1f, 1f, 0f);

        Sequence seq = DOTween.Sequence();

        // Fade + scale in
        if (sr != null)
            seq.Append(sr.DOFade(1f, 0.25f));

        seq.Join(t.DOScale(1f, 0.25f).SetEase(Ease.OutBack));

        // Rơi + nảy
        seq.Join(
            t.DOLocalMove(endLocalPos, 0.45f)
             .SetEase(Ease.OutBounce)
        );
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
