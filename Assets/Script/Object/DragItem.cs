using UnityEngine;
using DG.Tweening;
public enum ItemType
{
    Yellow,
    Red,
    Blue,
    Green
}
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
    public ItemType itemType;
    public bool isLockItem;
    public bool onTimer;
    Material mat;
    public bool isTimer;

    private void OnEnable()
    {
        GameEvent.LockItem.AddListener(LockItem);
        GameEvent.UnLockItem.AddListener(UnLockItem);
    }
    private void OnDisable()
    {
        GameEvent.LockItem.RemoveListener(LockItem);
       GameEvent.UnLockItem.RemoveListener(UnLockItem);
    }
    private void Awake()
    {
        cam = Camera.main;
        sr = GetComponent<SpriteRenderer>();
        startScale = transform.localScale;
        //outline = transform.GetChild(0).gameObject;
        //outline.SetActive(false);
    }
    private void Start()
    {
        SpriteRenderer spriteRenderer = GetComponent<SpriteRenderer>();
        mat = spriteRenderer.material;
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
            TrayManager.instance.OnUserEndInteract();
            AudioManager.instance.PlaySFX(AudioManager.instance.drog);
        }

    }
    void TryPick()
    {
        if (!isTimer)
        {
            GameEvent.StartTimer?.Invoke();
            isTimer = true;
        }
        GameManager.instance.startGame = true;
        if (!GameManager.instance.startTimer)
        {
            //CountdownTimer.instance.StartCountdown();
        }
        if (!onTimer)
        {
            onTimer = true;
            GameEvent.TimeOut?.Invoke();

        }
        if (isLockItem) return;
        if (GameManager.instance.finishGame) return;
        if(!GameManager.instance.startGame) return;
        TrayManager.instance.OnUserBeginInteract();
        Vector2 mouseWorld = cam.ScreenToWorldPoint(Input.mousePosition);
        if(IsInBlockZone(mouseWorld))
        {
            return;
        }
        Collider2D[] hits = Physics2D.OverlapPointAll(mouseWorld);
        foreach (var hit in hits)
        {
            if (hit.gameObject == gameObject)
            {
                ShowOutline();
                currentDrag = this;
                GameManager.instance.OnGlobalClick();
                tween?.Kill();
                startPos = transform.position;
                startParent = transform.parent;

                startSlot = startParent ? startParent.GetComponent<Slot>() : null;

                offset = transform.position - (Vector3)mouseWorld;
                sr.sortingOrder = 10;
                //outline.GetComponent<SpriteRenderer>().sortingOrder = 9;
                //ShowOutline(true);
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
        currentDrag = null;
        //ShowOutline(false);
        Vector2 mouseWorld = cam.ScreenToWorldPoint(Input.mousePosition);

        if (IsInBlockZone(mouseWorld))
        {
            Return();
            return;
        }
        HideOutline();
        PackTarget pack = FindPackUnderItem();
        if (pack != null && pack.CanAccept(this))
        {
            MoveToPack(pack);
            return;
        }
        Slot slot = FindNearestSlot();
        //PlayDropScale();

        if (slot != null && slot.CanAcceptItem() && (slot.IsEmpty() || slot.transform == startParent))
            Snap(slot);
        else
            Return();
    }
    void Snap(Slot slot)
    {
        Slot oldSlot = startParent ? startParent.GetComponent<Slot>() : null;
        if (oldSlot != null && oldSlot != slot)
        {
            oldSlot.SetItem(null);
        }

        transform.SetParent(slot.transform);
        GameEvent.OnSpawnDisk?.Invoke();

        tween = transform.DOLocalMove(
            slot.anchor.localPosition,
            0.25f
        )
        .SetEase(Ease.OutBack)
        .OnComplete(() =>
        {
            sr.sortingOrder = 1;
            slot.SetItem(this);

            Tray tray = slot.GetComponentInParent<Tray>();
            if (tray != null)
                tray.CheckMatch();
        });
    }

    void Return()
    {
        HideOutline();
        if (startSlot == null || startSlot.anchor == null)
            return;

        transform.SetParent(startSlot.transform);

        tween = transform.DOLocalMove(
                    startSlot.anchor.localPosition,
                    0.5f
                )
                .SetEase(Ease.OutQuad)
                .OnComplete(() =>
                {
                    sr.sortingOrder = 1;
                    //outline.GetComponent<SpriteRenderer>().sortingOrder = -1;
                });
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
    //void ShowOutline(bool show)
    //{
    //    if (outline != null)
    //        outline.SetActive(show);
    //}
    bool IsInBlockZone(Vector2 worldPos)
    {
        Collider2D[] hits = Physics2D.OverlapPointAll(worldPos);

        foreach (var hit in hits)
        {
            if (hit.CompareTag("BlockDrag") || hit.CompareTag("IceTray"))
                return true;
        }

        return false;
    }
    public Sprite GetSprite()
    {
        return sr.sprite;
    }
    public void OnPacked()
    {
        isLockItem = true;
        sr.sortingOrder = 0;
        //outline.SetActive(false);
    }
    PackTarget FindPackUnderMouse(Vector2 worldPos)
    {
        Collider2D[] hits = Physics2D.OverlapPointAll(worldPos);

        foreach (var hit in hits)
        {
            PackTarget pack = hit.GetComponent<PackTarget>();
            if (pack != null)
                return pack;
        }

        return null;
    }
    PackTarget FindPackUnderItem()
    {
        Collider2D[] hits = Physics2D.OverlapPointAll(transform.position);

        foreach (var hit in hits)
        {
            PackTarget pack = hit.GetComponent<PackTarget>();
            if (pack != null)
                return pack;
        }

        return null;
    }
    void MoveToPack(PackTarget pack)
    {
        currentDrag = null;
        isLockItem = true;

        tween?.Kill();
        transform.DOKill(true); 

        //ShowOutline(false);

        Vector3 targetPos = pack.attachPoint.position;
        transform.localScale = startScale;

        Sequence seq = DOTween.Sequence();

        seq.Join(
            transform.DOMove(targetPos, 0.3f)
                .SetEase(Ease.InOutQuad)
        );

        seq.Join(
            transform.DOScale(startScale * 0.3f, 0.3f)
                .SetEase(Ease.InQuad)
        );

        seq.OnComplete(() =>
        {
            gameObject.SetActive(false);
            pack.AcceptItem(this);
        });
    }
    public void ShowOutline()
    {
        mat.SetFloat("_OuterOutlineFade", 1);        mat.SetFloat("_OuterOutlineWidth", 0.05f);
    }
    public void HideOutline()
    {
        mat.SetFloat("_OuterOutlineFade", 0);        mat.SetFloat("_OuterOutlineWidth", 0);
    }
    public void LockItem() =>  isLockItem = true;
    public void UnLockItem() => isLockItem = false;

}
