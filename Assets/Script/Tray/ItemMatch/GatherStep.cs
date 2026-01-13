using DG.Tweening;
using System.Collections;
using UnityEngine;

public class GatherStep : IMatchStep
{
    float moveTime;
    float spacing;

    public GatherStep(float moveTime, float spacing)
    {
        this.moveTime = moveTime;
        this.spacing = spacing;
    }

    public IEnumerator Execute(MatchContext ctx)
    {
        if (ctx.items == null || ctx.items.Count < 2)
            yield break;

        Vector3 centerPos =
            ctx.items[ctx.items.Count / 2].transform.position;

        Sequence seq = DOTween.Sequence();

        int count = ctx.items.Count;

        for (int i = 0; i < count; i++)
        {
            var item = ctx.items[i];
            if (item == null) continue;

            // spacing = 0  → gộp chồng
            // spacing > 0  → có khoảng cách
            float offsetX = (i - (count - 1) / 2f) * spacing;
            Vector3 targetPos = centerPos + Vector3.right * offsetX;

            seq.Join(
                item.transform
                    .DOMove(targetPos, moveTime)
                    .SetEase(Ease.InOutSine)
            );
        }

        yield return seq.WaitForCompletion();
    }
}
