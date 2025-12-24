using UnityEngine;
using UnityEngine.UI;
using TMPro;
using DG.Tweening;

public class EndCart_Lose : MonoBehaviour
{
    public TMP_Text titleText;
    public GameObject actionButton;
    public GameObject emoji;

    [Header("Anim")]
    public float textFadeTime = 0.3f;
    public float buttonDelay = 0.2f;
    public float buttonScaleTime = 0.35f;
    [Header("Emoji Anim")]
    public float emojiDelay = 0.15f;
    public float emojiFadeTime = 0.25f;
    public float emojiScaleTime = 0.35f;


    private Tween buttonPulse;

    void Awake()
    {
        // initial compact state
        titleText.transform.localScale = Vector3.one * 0.6f;
        emoji.transform.localScale = Vector3.one * 0.6f;

        titleText.alpha = 1f; // KHÔNG fade
        actionButton.transform.localScale = Vector3.zero;
    }



    public void Show()
    {
        gameObject.SetActive(true);

        DOTween.KillAll();
        buttonPulse?.Kill();

        titleText.transform.localScale = Vector3.one * 0.6f;
        emoji.transform.localScale = Vector3.one * 0.6f;
        actionButton.transform.localScale = Vector3.zero;

        // đợi 1 frame
        DOVirtual.DelayedCall(0.01f, () =>
        {
            Sequence seq = DOTween.Sequence();

            // TEXT POP
            seq.Append(
                titleText.transform
                    .DOScale(1.05f, 0.22f)
                    .SetEase(Ease.OutQuad)
            );
            seq.Append(
                titleText.transform
                    .DOScale(1f, 0.1f)
            );

            // EMOJI POP
            seq.AppendInterval(0.08f);
            //seq.Append(
            //    emoji.transform
            //        .DOScale(1f, 0.15f)
            //        .SetEase(Ease.OutBack)
            //);
            seq.Append(
                emoji.transform
                    .DOScale(1f, 0.12f)
            );
          
            // BUTTON
            seq.AppendInterval(0.15f);
            seq.Append(
                actionButton.transform
                    .DOScale(1f, buttonScaleTime)
                    .SetEase(Ease.OutBack)
            );

            seq.OnComplete(StartButtonPulse);
        });
    }



    void StartButtonPulse()
    {
        buttonPulse?.Kill();

        buttonPulse = actionButton.transform
            .DOScale(1.5f, 0.7f)     // TO hơn
            .SetEase(Ease.InOutQuad)
            .SetLoops(-1, LoopType.Yoyo);
    }


    public void Hide()
    {
        buttonPulse?.Kill();

        Sequence seq = DOTween.Sequence();
        seq.Append(titleText.DOFade(0f, 0.2f));
        seq.Join(actionButton.transform.DOScale(0f, 0.2f));

        if (emoji != null)
        {
            var img = emoji.GetComponent<Image>();
            seq.Join(emoji.transform.DOScale(0f, 0.2f));
            if (img != null)
                seq.Join(img.DOFade(0f, 0.2f));
        }

        seq.OnComplete(() => gameObject.SetActive(false));
    }

}
