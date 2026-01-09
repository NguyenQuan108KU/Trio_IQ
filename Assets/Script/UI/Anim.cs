using DG.Tweening;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Anim : MonoBehaviour
{
    [Header("Anim Settings")]
    public RectTransform objectAnim;
    public float speedScale;
    public float scaleAmount;
    Vector3 originScale;

    [Header("---------- Nuget ----------")]
    public float scaleNughet;
    public float speedReturn;

    void Awake()
    {
        if (objectAnim != null)
            originScale = objectAnim.localScale;
    }
    public virtual void DotPunch()
    {
        if (objectAnim == null) return;

        objectAnim.DOKill();
        objectAnim.localScale = originScale;

        Sequence seq = DOTween.Sequence()
            .SetLink(objectAnim.gameObject);

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

        objectAnim.DOKill();
        objectAnim.localScale = originScale;
        objectAnim.DOScale(originScale * scaleNughet, speedReturn)
            .SetEase(Ease.OutQuad)
            .OnComplete(() =>
            {
                objectAnim.DOScale(originScale, speedReturn)
                    .SetEase(Ease.InQuad);
            });
    }

}
