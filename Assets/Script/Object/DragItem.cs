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
    private Material mat;

    private void Awake()
    {
        cam = Camera.main;
        sr = GetComponent<SpriteRenderer>();
        startScale = transform.localScale;
        mat = GetComponent<SpriteRenderer>().material;
    }

    private void Update()
    {
        if (Input.GetMouseButtonDown(0))
        {
            TryPick();
           
            AudioManager.Instance.PlaySFX(AudioManager.Instance.drag);
        }

        if (Input.GetMouseButton(0) && currentDrag == this)
        {
            Drag();
           
        }

        if (Input.GetMouseButtonUp(0) && currentDrag == this)
        {
            Drop();
        
            AudioManager.Instance.PlaySFX(AudioManager.Instance.drog);
        }
    }

    void TryPick()
    {
        Vector2 mouseWorld = cam.ScreenToWorldPoint(Input.mousePosition);

        Collider2D[] hits = Physics2D.OverlapPointAll(mouseWorld);
        startParent = transform.parent;
        startSlot = startParent ? startParent.GetComponent<Slot>() : null;
        foreach (var hit in hits)
        {
            if (hit.gameObject == gameObject)
            {
                currentDrag = this;

                tween?.Kill();
                startPos = transform.position;
                startParent = transform.parent;

                offset = transform.position - (Vector3)mouseWorld;
                sr.sortingOrder = 10;
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
        currentDrag = null;

        PlayDropScale(); 

        Slot slot = FindNearestSlot();

        if (slot != null && (slot.IsEmpty() || slot.transform == startParent))
            Snap(slot);
        else
            Return();
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

            // Skip occupied slots except the one we started from (so returning is allowed)
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
}
