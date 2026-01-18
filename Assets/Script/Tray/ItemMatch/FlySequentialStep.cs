using DG.Tweening;
using System.Collections;
using System.Linq;
using UnityEngine;

public class FlySequentialStep : IMatchStep
{
    IFlyTarget target;

    float flyTime = 0.6f;
    float delayEach = 0.1f;
    float spacingRatio = 0.25f;
    Vector3 targetScale = new Vector3(0.3f, 0.3f, 0.3f);

    public FlySequentialStep(IFlyTarget target)
    {
        this.target = target;
    }

    public IEnumerator Execute(MatchContext ctx)
    {
        if (!target.IsValid(ctx))
            yield break;
        
        int total = ctx.items.Count(i => i != null);
        if (total == 0) yield break;

        int finished = 0;

        Vector3 centerPos =
            ctx.items[ctx.items.Count / 2].transform.position;

        int index = 0;

        foreach (var item in ctx.items)
        {
            if (item == null) continue;
            int i = index++;
            item.transform.DOKill();
            item.transform.SetParent(null, true);
            // Offset giống code cũ
            Transform attach = target.GetAttachPoint(item, ctx);
            Vector3 targetPos = attach.position;
            Sequence seq = DOTween.Sequence();

            // Delay để bay lần lượt
            seq.AppendInterval(i * delayEach);

            // Move
            seq.Append(
                item.transform.DOMove(targetPos, flyTime)
                    .SetEase(Ease.InOutQuad)
            );

            // Scale
            seq.Join(
                item.transform.DOScale(targetScale, flyTime)
                    .SetEase(Ease.OutQuad)
            );

            seq.OnComplete(() =>
            {
                if (item != null)
                    Object.Destroy(item.gameObject);

                finished++;
                target.OnArrived(1);
            });
            seq.SetLink(item.gameObject);
        }
        yield return new WaitForSeconds(
            flyTime + delayEach * total
        );
    }
}
