using DG.Tweening;
using System.Collections;
using UnityEngine;

public class BlinkBounceStep : IMatchStep
{
    float delay = 0.5f;

    public IEnumerator Execute(MatchContext ctx)
    {
        int finished = 0;
        int total = ctx.items.Count;

        foreach (var item in ctx.items)
        {
            if (item == null) continue;

            item.isLockItem = true;
            //item.GetComponent<SpriteRenderer>().sortingOrder = 3;

            Transform t = item.transform;
            Vector3 originScale = t.localScale;

            item.gameObject.SetActive(false);

            DOVirtual.DelayedCall(delay, () =>
            {
                if (item == null) return;

                item.gameObject.SetActive(true);
                t.localScale = originScale;
                t.DOKill();

                t.DOScale(originScale * 1.12f, 0.25f)
                 .SetEase(Ease.OutBack)
                 .OnComplete(() =>
                 {
                     t.DOScale(originScale, 0.22f)
                      .SetEase(Ease.InOutSine)
                      .OnComplete(() =>
                      {
                          finished++;
                      });
                 });
            });
        }
        yield return new WaitUntil(() => finished >= total);
    }
}
