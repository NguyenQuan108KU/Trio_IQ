using DG.Tweening;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class TextAgeScale : MonoBehaviourSingleton<TextAgeScale>
{
    [Header("Anim Settings")]
    public Transform textTransform;
    public float speedScale = 0.12f;
    public float scaleAmount = 1.15f;
    private Vector3 originScale;

    [Header("---------- Nugget ----------")]
    public float scaleNughet = 1.1f;
    public float speedReturn = 0.1f;

    protected override void Awake()
    {
        base.Awake();         
        CacheOriginScale();
    }

    void OnEnable()
    {
        CacheOriginScale();
    }

    void CacheOriginScale()
    {
        if (textTransform != null)
            originScale = textTransform.localScale;
    }

    public virtual void DotPunch()
    {
        if (textTransform == null) return;
        DOTween.Kill(textTransform);
        textTransform.localScale = originScale;
        Sequence seq = DOTween.Sequence();
        seq.Append(
            textTransform.DOScale(originScale * scaleAmount, speedScale)
                .SetEase(Ease.OutQuad)
        );
        seq.Append(
            textTransform.DOScale(originScale, speedScale)
                .SetEase(Ease.OutBack)
        );
    }
    public virtual void DotNudge()
    {
        if (textTransform == null) return;
        DOTween.Kill(textTransform);
        textTransform.localScale = originScale;
        textTransform
            .DOScale(originScale * scaleNughet, speedReturn)
            .SetEase(Ease.OutQuad)
            .OnComplete(() =>
            {
                if (textTransform != null)
                {
                    textTransform
                        .DOScale(originScale, speedReturn)
                        .SetEase(Ease.InQuad);
                }
            });
    }
    public virtual void UpdateText()
    {
        
    }
}
