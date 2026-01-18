using DG.Tweening;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class FlyNormal : IMatchStep
{
    private IFlyTarget target;
    private GameObject diskPrefab;
    private GameObject effectScorePrefabs;
    public GameObject foodTrailPrefabs;

    public FlyNormal(IFlyTarget target, GameObject diskPrefab, GameObject effectScore, GameObject foodTrailPrefabs)
    {
        this.target = target;
        this.diskPrefab = diskPrefab;
        this.effectScorePrefabs = effectScore;
        this.foodTrailPrefabs = foodTrailPrefabs;   
    }

    public IEnumerator Execute(MatchContext ctx)
    {
        if (ctx == null || ctx.items == null)
            yield break;

        //if (!target.IsValid(ctx))
        //    yield break;
        List<DragItem> items = ctx.items;

        Vector3 centerPos = items[1].transform.position;
        GameObject effectScore = Object.Instantiate(effectScorePrefabs, items[1].transform);
        GameObject foodTrail = Object.Instantiate(foodTrailPrefabs, items[1].transform);
        float spacing = 0.2f;
        float moveTime = 0.5f;
        float startX = -(items.Count - 1) * spacing * 0.5f;

        Sequence moveSeq = DOTween.Sequence();

        for (int i = 0; i < items.Count; i++)
        {
            DragItem it = items[i];
            if (!IsValidForTween(it)) continue;

            var sr = it.GetComponent<SpriteRenderer>();
            if (sr) sr.sortingOrder = i;

            Vector3 targetPos = centerPos + new Vector3(startX + i * spacing, 0, 0);
            moveSeq.Join(
                it.transform.DOMove(targetPos, moveTime)
                    .SetEase(Ease.OutBack)
                    .SetLink(it.gameObject)
            );
        }

        yield return moveSeq.WaitForCompletion();

        foreach (var it in items)
        {
            if (it == null) continue;

            Slot slot = it.GetComponentInParent<Slot>();
            if (slot != null)
            {
                if (slot.currentItem == it)
                {
                    slot.currentItem = null;
                    slot.isLocked = false;
                }
            }
            it.transform.SetParent(null, true);
        }

        Vector3 spawnPos = DiskTransform.instance? DiskTransform.instance.transform.position: centerPos;
        GameObject diskObj = Object.Instantiate(diskPrefab, spawnPos, Quaternion.identity);
        Disk disk = diskObj.GetComponent<Disk>();
        float spacingRatio = 0.6f;
        //float jumpPower = 1f;
        float flyTime = 0.7f;
        float attachDelay = 0.15f;
        Vector3 targetScale = Vector3.one * 0.23f;

        Sequence flySeq = DOTween.Sequence();

        foreach (var it in items)
        {
            if (!IsValidForTween(it)) continue;

            Vector3 offset = it.transform.position - centerPos;
            Vector3 targetPos = diskObj.transform.position + offset * spacingRatio;

            Sequence one = DOTween.Sequence();
            one.Join(it.transform.DOMove(targetPos, flyTime).SetEase(Ease.OutCubic));
            one.Join(it.transform.DOScale(targetScale, flyTime));
            one.AppendInterval(attachDelay);
            GameEvent.OnSpawnDisk?.Invoke();
            one.AppendCallback(() =>
            {
                if (!it || !disk) return;
                it.transform.SetParent(disk.transform, true);
                disk.AddItem(it.transform);
            });

            flySeq.Join(one);
        }

        yield return flySeq.WaitForCompletion();
        target.OnArrived(items.Count);
    }

    bool IsValidForTween(DragItem item)
    {
        return item != null && item.transform != null;
    }
}
