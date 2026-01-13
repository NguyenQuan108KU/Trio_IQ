using DG.Tweening;
using UnityEngine;

public class Anim : MonoBehaviour
{
    [Header("Anim Settings")]
    public RectTransform objectAnim;
    public float speedScale = 0.12f;
    public float scaleAmount = 1.15f;

    private Vector3 originScale;

    [Header("---------- Nugget ----------")]
    public float scaleNughet = 1.1f;
    public float speedReturn = 0.1f;

    void Awake()
    {
        CacheOriginScale();
    }

    void OnEnable()
    {
        CacheOriginScale();
    }

    void CacheOriginScale()
    {
        if (objectAnim != null)
            originScale = objectAnim.localScale;
    }

    public virtual void DotPunch()
    {
        if (objectAnim == null) return;

        // Kill tất cả tween gắn với objectAnim
        DOTween.Kill(objectAnim);

        // Reset scale an toàn
        objectAnim.localScale = originScale;

        Sequence seq = DOTween.Sequence();

        seq.Append(
            objectAnim.DOScale(originScale * scaleAmount, speedScale)
                .SetEase(Ease.OutQuad)
        );

        seq.Append(
            objectAnim.DOScale(originScale, speedScale)
                .SetEase(Ease.OutBack)
        );
    }

    public virtual void DotNudge()
    {
        if (objectAnim == null) return;

        // Kill tween cũ
        DOTween.Kill(objectAnim);

        // Reset scale
        objectAnim.localScale = originScale;

        objectAnim
            .DOScale(originScale * scaleNughet, speedReturn)
            .SetEase(Ease.OutQuad)
            .OnComplete(() =>
            {
                if (objectAnim != null)
                {
                    objectAnim
                        .DOScale(originScale, speedReturn)
                        .SetEase(Ease.InQuad);
                }
            });
    }
}
