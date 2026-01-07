using UnityEngine;
using DG.Tweening;

public class NotiBox : MonoBehaviour
{
    [Header("Refs")]
    public RectTransform box;
    public CanvasGroup bg;

    [Header("Timing")]
    public float delay = 3f;
    public float animTime = 2f;

    Vector3 boxOriginScale;

    Tween delayTween;
    Sequence seq;

    void Awake()
    {
        boxOriginScale = box.localScale;
    }

    void OnEnable()
    {
        // Reset trạng thái
        box.localScale = boxOriginScale;
        bg.alpha = 1f;
        bg.blocksRaycasts = true;

        // 🔒 Delay được link với GameObject
        delayTween = DOVirtual.DelayedCall(delay, Hide)
            .SetLink(gameObject, LinkBehaviour.KillOnDisable);
    }

    void Hide()
    {
        // Kill tween cũ nếu có
        seq?.Kill();

        seq = DOTween.Sequence()
            .SetLink(gameObject, LinkBehaviour.KillOnDisable);

        seq.Join(
            box.DOScale(0f, animTime)
               .SetEase(Ease.InOutSine)
        );

        seq.Join(
            bg.DOFade(0f, animTime)
        );

        seq.OnComplete(() =>
        {
            bg.blocksRaycasts = false;
            if (GameManager.instance != null)
                GameManager.instance.startGame = true;
            gameObject.SetActive(false);
        });
    }

    void OnDisable()
    {
        seq?.Kill();
        delayTween?.Kill();
    }
}
