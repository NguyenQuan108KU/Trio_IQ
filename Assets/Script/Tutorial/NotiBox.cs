using UnityEngine;
using DG.Tweening;

public class NotiBox : MonoBehaviour
{
    [Header("Refs")]
    public RectTransform box;
    public CanvasGroup bg; // có thể null

    [Header("Timing")]
    public float delay = 3f;
    public float animTime = 2f;
    Vector3 boxOriginScale;
    Tween delayTween;
    Sequence seq;

    public bool isNotiBook;
    public GameObject tut;
    void Awake()
    {
        boxOriginScale = box.localScale;
    }
    private void Update()
    {
        if (GameManager.instance.startGame && !isNotiBook)
        {
            gameObject.SetActive(false);  
        }
    }
    void OnEnable()
    {
        if (!isNotiBook) return; 
        box.localScale = boxOriginScale;
        if (bg != null)
        {
            bg.alpha = 1f;
            bg.blocksRaycasts = true;
        }
        delayTween = DOVirtual.DelayedCall(delay, Hide)
            .SetLink(gameObject, LinkBehaviour.KillOnDisable);
    }
    void Hide()
    {
        seq?.Kill();

        seq = DOTween.Sequence()
            .SetLink(gameObject, LinkBehaviour.KillOnDisable);

        seq.Join(
            box.DOScale(0f, animTime)
               .SetEase(Ease.InOutSine)
        );
        if (bg != null)
        {
            seq.Join(bg.DOFade(0f, animTime));
        }
        seq.OnComplete(() =>
        {
            if (bg != null)
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
