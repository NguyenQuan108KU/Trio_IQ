using DG.Tweening;
using System.Collections;
using UnityEngine;

public class EffectStep : IMatchStep
{
    private GameObject effectPrefab;
    private float moveDuration = 0.35f;

    public EffectStep(GameObject firePrefab)
    {
        this.effectPrefab = firePrefab;
    }

    public IEnumerator Execute(MatchContext ctx)
    {
        if (effectPrefab == null || ctx.tray == null)
            yield break;

        Transform leftItem = ctx.tray.transform.GetChild(1);
        Transform rightItem = ctx.tray.transform.GetChild(2);

        Vector3 leftStartPos = leftItem.localPosition;
        Vector3 rightStartPos = rightItem.localPosition;

        Vector3 leftStartScale = leftItem.localScale;         
        Vector3 rightStartScale = rightItem.localScale;

        float centerX = 0f;
        float gap = 0.65f;
        float targetScale = 0.9f;

        Vector3 leftTargetPos = new Vector3(centerX - gap, leftStartPos.y, leftStartPos.z);
        Vector3 rightTargetPos = new Vector3(centerX + gap, rightStartPos.y, rightStartPos.z);

        // Move + scale cùng lúc
        leftItem.DOLocalMove(leftTargetPos, moveDuration).SetEase(Ease.OutQuad);
        rightItem.DOLocalMove(rightTargetPos, moveDuration).SetEase(Ease.OutQuad);

        leftItem.DOScale(leftStartScale * targetScale, moveDuration).SetEase(Ease.OutQuad);
        rightItem.DOScale(rightStartScale * targetScale, moveDuration).SetEase(Ease.OutQuad);

        // Spawn effect
        GameObject effect = Object.Instantiate(effectPrefab, ctx.tray.transform);
        AudioManager.instance.PlaySFX(AudioManager.instance.itemCollected);
        effect.transform.localPosition = new Vector3(0f, 0.2f, 0);

        yield return new WaitForSeconds(0.5f);

        Object.Destroy(effect);
    }
}
