using DG.Tweening;
using UnityEngine;

public class HandHint : MonoBehaviour
{
    [Header("Preview")]
    public SpriteRenderer previewRenderer;
    private Sequence seq;

    public void Play(Slot fromSlot, Slot toSlot, DragItem item)
    {
        seq?.Kill();
        SetPreviewSprite(item);
        Vector3 fromWorld = fromSlot.transform.position;
        Vector3 toWorld = toSlot.transform.position;

        // reset về fromSlot
        transform.SetParent(fromSlot.transform, false);
        transform.localPosition = Vector3.zero;
        transform.localRotation = Quaternion.identity;
        transform.localScale = Vector3.one;
        gameObject.SetActive(true);

        seq = DOTween.Sequence();

        // bay tới slot đích
        seq.Append(
            transform.DOMove(toWorld, 1.1f)
                     .SetEase(Ease.InOutQuad)
        );

        // tới nơi → biến mất ngay
        seq.AppendCallback(() =>
        {
            gameObject.SetActive(false);
        });

        // chờ chút
        seq.AppendInterval(0.2f);

        // reset về slot đầu → hiện lại
        seq.AppendCallback(() =>
        {
            transform.SetParent(fromSlot.transform, false);
            transform.localPosition = Vector3.zero;
            gameObject.SetActive(true);
        });

        seq.AppendInterval(0.15f);

        seq.SetLoops(-1);
    }
    void SetPreviewSprite(DragItem item)
    {
        if (previewRenderer == null) return;

        var itemSR = item.GetComponent<SpriteRenderer>();
        if (itemSR == null) return;

        previewRenderer.sprite = itemSR.sprite;

        Color c = itemSR.color;
        c.a = 0.6f; // 👈 80% opacity
        previewRenderer.color = c;
    }

    public void Stop()
    {
        seq?.Kill();
        gameObject.SetActive(false);
    }

    private void OnDestroy()
    {
        seq?.Kill();
    }
}
