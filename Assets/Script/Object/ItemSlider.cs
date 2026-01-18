using UnityEngine;
using UnityEngine.UI;
using DG.Tweening;
public class ItemSlider : MonoBehaviour
{
    public Slider slider;
    public RectTransform sliderHandle;

    Vector3 originScale;

    void Awake()
    {
        if (sliderHandle != null)
            originScale = sliderHandle.localScale;
    }

    public void PunchHandle()
    {
        if (sliderHandle == null) return;

        sliderHandle.DOKill();
        sliderHandle.localScale = originScale;

        Sequence seq = DOTween.Sequence()
            .SetLink(sliderHandle.gameObject);

        seq.Append(
            sliderHandle.DOScale(originScale * 1.15f, 0.1f)
                .SetEase(Ease.OutQuad)
        );

        seq.Append(
            sliderHandle.DOScale(originScale, 0.12f)
                .SetEase(Ease.OutBack)
        );
    }
}
