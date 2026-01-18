using UnityEngine;
using DG.Tweening;

public class TicketFlipUI : MonoBehaviour
{
    public float flipTime = 0.8f;
    public Vector2 moveOffset = new Vector2(-350f, 300f);
    public float endScale = 0.2f;

    RectTransform rect;

    void Awake()
    {
        rect = GetComponent<RectTransform>();
        rect.pivot = new Vector2(1, 0); // góc dưới phải
    }

    public void Play()
    {
        rect.DOKill();

        Sequence seq = DOTween.Sequence();

        // 1️⃣ lật mép (ép mỏng lại)
        seq.Append(
            rect.DOScaleX(0f, flipTime * 0.4f)
                .SetEase(Ease.InQuad)
        );

        // 2️⃣ bật sang trái + bay
        seq.AppendCallback(() =>
        {
            Vector3 s = rect.localScale;
            s.x = -1f; // FLIP
            rect.localScale = s;
        });

        seq.Join(
            rect.DOAnchorPos(
                rect.anchoredPosition + moveOffset,
                flipTime
            ).SetEase(Ease.OutQuad)
        );

        // 3️⃣ thu nhỏ & biến mất
        seq.Join(
            rect.DOScale(endScale, flipTime)
                .SetEase(Ease.InQuad)
        );

        seq.OnComplete(() =>
        {
            Destroy(gameObject);
        });
    }

    void Update()
    {
        if (Input.GetMouseButtonDown(0))
            Play();
    }
}
