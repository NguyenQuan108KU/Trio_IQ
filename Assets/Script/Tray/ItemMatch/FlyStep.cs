using DG.Tweening;
using System.Collections;
using UnityEngine;

public class FlyStep : IMatchStep
{
    float flyTime = 0.7f;
    float jumpPower = 1f;
    Vector3 targetScale = new Vector3(0.4f, 0.4f, 0.4f);
    IFlyTarget target;
    public FlyStep(IFlyTarget target)
    {
        this.target = target;
    }
    public IEnumerator Execute(MatchContext ctx)
    {
        if (!target.IsValid(ctx)) yield break;

        int finished = 0;
        int total = ctx.items.Count;

        Vector3 centerPos = ctx.items[ctx.items.Count / 2].transform.position;

        foreach (var item in ctx.items)
        {
            if (item == null) continue;

            Vector3 offset = item.transform.position - centerPos;
            Transform attach = target.GetAttachPoint(item, ctx);
            Vector3 targetPos = attach.position + offset * 0.3f;

            Sequence seq = DOTween.Sequence();
            seq.Join(item.transform.DOJump(targetPos, jumpPower, 1, flyTime).SetEase(Ease.Linear));
            seq.Join(item.transform.DOScale(targetScale, flyTime));

            seq.OnComplete(() =>
            {
                Object.Destroy(item.gameObject);
                finished++;

                if (finished == total)
                    target.OnArrived(total);
            });
        }
        yield return new WaitForSeconds(flyTime);
    }
}
