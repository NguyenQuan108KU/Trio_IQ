using UnityEngine;
using DG.Tweening;

public class DragItem : MonoBehaviour
{
    private static DragItem currentDrag;

    private Vector3 offset;
    private Vector3 startPos;
    private Transform startParent;
    private Camera cam;
    private Tween tween;
    private SpriteRenderer sr;
    private Vector3 startScale;
    private Slot startSlot;
    

    [Header("Outline")]
    public float focusOutlineSize = 1f;
    public float outlineTweenTime = 0.12f;
    private GameObject outline;
    private void Awake()
    {
        cam = Camera.main;
        sr = GetComponent<SpriteRenderer>();
        startScale = transform.localScale;
        outline = transform.GetChild(0).gameObject;
        outline.SetActive(false); // mặc định tắt
    }

    private void Update()
    {
        if (Input.GetMouseButtonDown(0))
        {
            TryPick();
        }

        if (Input.GetMouseButton(0) && currentDrag == this)
        {
            Drag();
        }

        if (Input.GetMouseButtonUp(0) && currentDrag == this)
        {
            Drop();
        }
    }

    void TryPick()
    {
        Vector2 mouseWorld = cam.ScreenToWorldPoint(Input.mousePosition);

        Collider2D[] hits = Physics2D.OverlapPointAll(mouseWorld);
        foreach (var hit in hits)
        {
            if (hit.gameObject == gameObject)
            {
                currentDrag = this;
                AudioManager.Instance.PlaySFX(AudioManager.Instance.drag);
                tween?.Kill();
                startPos = transform.position;
                startParent = transform.parent;

                startSlot = startParent ? startParent.GetComponent<Slot>() : null;

                offset = transform.position - (Vector3)mouseWorld;
                sr.sortingOrder = 10;
                outline.GetComponent<SpriteRenderer>().sortingOrder = 9;
                ShowOutline(true);
                return;
            }
        }
    }
    void Drag()
    {
        Vector3 mouseWorld = cam.ScreenToWorldPoint(Input.mousePosition);
        mouseWorld.z = 0;
        transform.position = mouseWorld + offset;
    }

    void Drop()
    {
        sr.sortingOrder = 0;
        outline.GetComponent<SpriteRenderer>().sortingOrder = -1;
        ShowOutline(false);
        PlayDropScale();

        Slot slot = FindNearestSlot();

        if (slot != null && (slot.IsEmpty() || slot.transform == startParent))
        {
            AudioManager.Instance.PlaySFX(AudioManager.Instance.drog);
            GameManager.Instance.clickCount++;

            Snap(slot);
        }
        else
        {
            Return();
        }

        if (GameManager.Instance.clickCount >= GameManager.Instance.clicksToLog && !GameManager.Instance.isClick)
        {
            Debug.Log("Finish");
            GameManager.Instance.isClick = true;
            Luna.Unity.Playable.InstallFullGame();
        }

        currentDrag = null;
    }



    void Snap(Slot slot)
    {
        Slot oldSlot = startParent ? startParent.GetComponent<Slot>() : null;
        if (oldSlot != null)
            oldSlot.SetItem(null);

        transform.SetParent(slot.transform);

        tween = transform.DOLocalMove(
                    slot.anchor.localPosition,
                    0.25f
                )
                .SetEase(Ease.OutBack)
                .OnComplete(() =>
                {
                    slot.SetItem(this);

                    Tray tray = slot.GetComponentInParent<Tray>();
                    if (tray != null)
                        tray.CheckMatch();
                });
    }

    void Return()
    {
        if (startSlot == null || startSlot.anchor == null)
            return;

        transform.SetParent(startSlot.transform);

        tween = transform.DOLocalMove(
                    startSlot.anchor.localPosition,
                    0.5f
                )
                .SetEase(Ease.OutQuad);
    }

    Slot FindNearestSlot()
    {
        Slot[] slots = FindObjectsOfType<Slot>();
        float min = 1f;
        Slot best = null;

        foreach (var s in slots)
        {
            if (s.anchor == null) continue;

            // Skip occupied slots except the one we started from
            if (!s.IsEmpty() && s.transform != startParent) continue;

            float d = Vector2.Distance(transform.position, s.anchor.position);
            if (d < min)
            {
                min = d;
                best = s;
            }
        }
        return best;
    }

    void PlayDropScale()
    {
        tween?.Kill();

        transform.localScale = startScale;

        transform.DOScale(startScale * 0.85f, 0.1f)
            .SetEase(Ease.InOutQuad)
            .OnComplete(() =>
            {
                transform.DOScale(startScale, 0.12f)
                    .SetEase(Ease.OutBack);
            });
    }
    void ShowOutline(bool show)
    {
        if (outline != null)
            outline.SetActive(show);
    }

}
