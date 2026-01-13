using UnityEngine;
using DG.Tweening;
using TMPro;

public class PackTarget : MonoBehaviour
{
    public ItemType packType;
    public Transform attachPoint;

    [Header("Slot Info")]
    public int slotIndex;

    [Header("Capacity")]
    public int capacity;
    public int currentCount = 3;
    public bool isFull = false;
    public TextMeshProUGUI sumText;

    [Header("Sprite")]
    public SpriteRenderer packSprite;
    private void Start()
    {
        capacity = currentCount;
    }

    public void AddItems(int count)
    {
        if (isFull) return;

        capacity -= count;
        sumText.text = capacity.ToString();
        if (capacity <= 0 )
        {
            isFull = true;
            enabled = false;
            PackManager.instance.OnPackFilled(this);
        }
        else
        {
            Punch();
        }
    }
    void Punch()
    {
        if (!this || !gameObject) return;

        transform.DOKill();
        transform
            .DOPunchScale(Vector3.one * 0.03f, 0.25f, 1, 0.7f)
            .SetUpdate(true)
            .SetLink(gameObject);
    }

    public void FlyUp(System.Action onComplete)
    {
        if (!this || !gameObject) return;

        transform.DOKill();

        Sequence seq = DOTween.Sequence()
            .SetUpdate(true)
            .SetLink(gameObject);

        seq.Append(
            transform.DOPunchScale(Vector3.one * 0.03f, 0.25f, 1, 0.7f)
        );

        seq.AppendInterval(0.2f);

        seq.Append(
            transform.DOMoveY(transform.position.y + 6f, 0.8f)
                .SetEase(Ease.InQuad)
                .SetUpdate(true)
        );

        seq.OnComplete(() =>
        {
            if (this != null)
                onComplete?.Invoke();
        });
    }

    public void FlyToSliderTarget(System.Action onComplete = null)
    {
        if (!this || !gameObject) return;
        RectTransform uiTarget =
            PackManager.instance.GetSliderTarget(packType) as RectTransform;
        if (uiTarget == null) return;

        transform.DOKill();

        Vector3 worldPos = ConvertUIToWorld(uiTarget);
        float flyTime = 0.35f;
        float minScale = 0.055f;
        Vector3 originScale = transform.localScale;

        Sequence seq = DOTween.Sequence()
            .SetUpdate(true)
            .SetLink(gameObject)
        .SetUpdate(true);
        seq.Append(
            transform.DOScale(originScale * 0.9f, 0.07f)
                .SetEase(Ease.OutQuad)
                  .SetUpdate(true)
        );
        seq.Append(
            transform.DOScale(originScale * 1.05f, 0.07f)
                .SetEase(Ease.OutQuad)
                .SetUpdate(true)
        );
        seq.Append(
            transform.DOMove(worldPos, flyTime)
                .SetEase(Ease.InQuad)
                  .SetUpdate(true)
        );

        seq.Join(
            transform.DOScale(minScale, flyTime)
                .SetEase(Ease.InQuad)
                  .SetUpdate(true)
        );
       
        seq.OnComplete(() =>
        {
            PackManager.instance.OnPackArrivedToSlider(packType);
            Destroy(gameObject);
            onComplete?.Invoke();
        });
    }

    Vector3 ConvertUIToWorld(RectTransform ui)
    {
        Canvas canvas = ui.GetComponentInParent<Canvas>();
        Camera cam = canvas.renderMode == RenderMode.ScreenSpaceOverlay
            ? null
            : canvas.worldCamera;

        Vector3 screenPos =
            RectTransformUtility.WorldToScreenPoint(cam, ui.position);

        screenPos.z = Mathf.Abs(Camera.main.transform.position.z);

        return Camera.main.ScreenToWorldPoint(screenPos);
    }

    public SpriteRenderer GetSpriteRenderer()
    {
        return GetComponentInChildren<SpriteRenderer>();
    }
    public bool CanAccept(DragItem item)
    {
        return item.GetSprite() == packSprite.sprite;
    }

    public void AcceptItem(DragItem item)
    {
        item.OnPacked();
        if (isFull) return;
        AddItems(1);

    }
}
