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
    public float itemToDiskTime = 0.1f;
    public float attachDelay = 0.15f;   // item chậm theo disk
    public float followSmooth = 0.25f;  // độ mượt

    // Made very small so items become extremely tiny when attached to disk.
    public Vector3 diskItemScale = new Vector3(0.03f, 0.03f, 0.03f);


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
            if (g.Count() >= 5)
            {
                MoveToCenter(g.Take(5).ToList());
                ProgressBrain.instance.AddTrayMatch();
                return;
            }
        }
    }

    void MoveToCenter(List<DragItem> items)
    {
        DragItem center = items[2];
        Vector3 centerPos = center.transform.position;

        float startX = -(items.Count - 1) * spacing * 0.5f;

        Sequence seq = DOTween.Sequence();

        for (int i = 0; i < items.Count; i++)
        {
            items[i].GetComponent<SpriteRenderer>().sortingOrder = i;
            Vector3 target =
                centerPos + new Vector3(startX + i * spacing, 0, 0);

            seq.Join(
                items[i].transform.DOMove(target, moveTime)
                    .SetEase(Ease.OutBack)
            );
        }

   
        seq.OnComplete(() =>
        {
           
            foreach (var item in items)
            {
                item.transform.SetParent(null, true);
        
            }

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

        float spacingRatio = 0.6f;
        float jumpPower = 1.0f;          // độ cao nhảy
        int jumpCount = 1;               // 1 lần nhảy (bay lên rồi rơi)
        Vector3 targetScale = new Vector3(0.35f, 0.35f, 0.35f);

        foreach (var item in items)
        {
            item.transform.DOKill();

            Vector3 startPos = item.transform.position;
            Vector3 offset = startPos - centerPos;
            Vector3 compressedOffset = offset * spacingRatio;
            Vector3 targetPos = disk.transform.position + compressedOffset;

            Sequence seq = DOTween.Sequence();

            
            seq.Join(
                item.transform.DOJump(
                    targetPos,
                    jumpPower,
                    jumpCount,
                    itemToDiskTime
                ).SetEase(Ease.InOutQuad)
            );

            // 🔹 THU NHỎ SONG SONG
            seq.Join(
                item.transform.DOScale(targetScale, itemToDiskTime)
                    .SetEase(Ease.OutQuad)
            );

            seq.AppendInterval(attachDelay);

            seq.AppendCallback(() =>
            {
                item.transform.SetParent(disk.transform, true);
                item.transform.localScale = targetScale;
                disk.AddItem(item.transform);
            });
        }

        Disappear();
    }
    public void Disappear()
    {
        transform.DOKill();

        TrayManager manager = GetComponentInParent<TrayManager>();

        // 1️⃣ GỌI DỒN XUỐNG NGAY (TẠO GAP)
        if (manager != null)
        {
            manager.CompleteTray(transform);
        }
        else
        {
            Debug.LogWarning("TrayManager not found in parents.");
        }

        // 2️⃣ SEQUENCE CHỈ LO ANIMATION CỦA TRAY NÀY
        Sequence seq = DOTween.Sequence();

        // KHỰNG NHẸ
        //seq.AppendInterval(0.25f);

        // THU NHỎ
        seq.Append(
            transform.DOScale(Vector3.zero, 0.18f)
                .SetEase(Ease.InOutCubic)
        );

        seq.OnComplete(() =>
        {
            Destroy(gameObject);
        });
    }
}
