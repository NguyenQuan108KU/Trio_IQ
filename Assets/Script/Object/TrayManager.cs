using DG.Tweening;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using UnityEngine;
using UnityEngine.UIElements;

public class TrayManager : MonoBehaviour
{
    public static TrayManager instance;
    public float spacing = 1.2f;
    public int visibleCount = 4;
    public float moveTime = 0.5f;
    public GameObject win;

    [Header("Tray Prefabs / Pool")]
    public List<GameObject> listTray;

    public List<Transform> activeTrays = new List<Transform>();
    private Queue<GameObject> trayPool = new Queue<GameObject>();

    private float trayHeight;
    private float step;
    int sorting = 0;

    [Header("Grid Settings")]
    [SerializeField] int columns = 3;   // số object theo X
    [SerializeField] int rows = 8;      // số object theo Y
    [SerializeField] float stepX = 2f;  // khoảng cách ngang
    [SerializeField] float stepY = 2f;  // khoảng cách dọc
    bool isGameEnded = false;

    public float idleTime = 0f;
    public float hintDelay = 3f;
    public bool isTutorialShowing = false;
    bool isInteracting = false;

    [Header("Tutorial State")]
    public bool isFirstTutorial = true;

    private DragItem cachedItem;
    private Tray cachedTray;
    private Slot cachedSlot;

    [Header("Tutorial Manual Override")]
    public Tray manualTray = null;
    public DragItem manualItem = null;

    private void Awake()
    {
        if (instance == null)
            instance = this;
        else
            Destroy(gameObject);
    }
    void Start()
    {
        StartCoroutine(InitializeRoutine());
    }


    private void Update()
    {
        if (isGameEnded) return;

        int notClosedCount = 0;
        Tray lastOpenTray = null;

        for (int i = 0; i < activeTrays.Count; i++)
        {
            Tray tray = activeTrays[i].GetComponent<Tray>();
            if (tray == null) continue;

            if (!tray.isClosed)
            {
                notClosedCount++;
                lastOpenTray = tray;

                if (notClosedCount > 1)
                    return; // còn >= 2 tray mở
            }
        }

        // ✅ chỉ còn 1 tray → đóng + win
        if (notClosedCount == 1 && lastOpenTray != null)
        {
            isGameEnded = true;           // 🔒 chặn Update NGAY
            lastOpenTray.CloseTray();     // animation đóng khay
            StartCoroutine(WaitCloseTrayThenWin());
        }
    }



    IEnumerator EndGameDelay()
    {
        yield return new WaitForSeconds(0.5f);
        GameManager.Instance.EndGame();
    }

    IEnumerator WaitCloseTrayThenWin()
    {
        yield return new WaitForSeconds(0.55f); // ⏳ thời gian CloseTray

        if (CountdownTimer.instance != null)
        {
            CountdownTimer.instance.ActiveEndCartWin();
            CountdownTimer.instance.StopCountdown();
        }

        GameManager.Instance.finishGame = true;

        yield return new WaitForSeconds(0.5f); // ⏳ cho UI hiện
        //GameManager.Instance.EndGame();
    }


    public void OnUserBeginInteract()
    {
        isInteracting = true;
        idleTime = 0f;

        // Turn off the fixed-first-tutorial mode on the player's first interaction
        if (isFirstTutorial)
            isFirstTutorial = false;

        if (isTutorialShowing)
        {
            isTutorialShowing = false;
            TutorialManager.instance?.HideHint();
        }
    }


    public void OnUserEndInteract()
    {
        isInteracting = false;
        idleTime = 0f; //  bắt đầu đếm 3s từ đây
    }


    public void ResetIdle()
    {
        idleTime = 0f;
    }

    System.Collections.IEnumerator InitializeRoutine()
    {
        InitActiveTraysFromScene();
        InitPool();
        yield return new WaitForEndOfFrame();
        CacheSize();
        AlignInstant();

        // Cache a fixed tutorial target for the very first tutorial (if possible)
        CacheFirstTutorialTarget();

        // If still in first tutorial mode, show the cached tutorial after a small delay
        if (isFirstTutorial)
        {
            // small delay to ensure everything is ready (mimics previous behavior)
            Invoke(nameof(ShowTutorialHint), 0.2f);
            isTutorialShowing = true;
        }
    }

    void InitPool()
    {
        if (listTray == null) return;

        foreach (var tray in listTray)
            trayPool.Enqueue(tray);
    }

    void CacheSize()
    {

        if (activeTrays.Count > 0)
        {
            SpriteRenderer sr = activeTrays[0].GetComponent<SpriteRenderer>();
            if (sr != null)
            {
                trayHeight = sr.bounds.size.y;
                step = trayHeight + spacing;
                return;
            }
        }

        if (listTray != null && listTray.Count > 0)
        {
            SpriteRenderer srPrefab = listTray[0].GetComponent<SpriteRenderer>();
            if (srPrefab != null)
            {

                trayHeight = (srPrefab.sprite != null) ? srPrefab.sprite.bounds.size.y : srPrefab.bounds.size.y;
                step = trayHeight + spacing;
                return;
            }
        }


        trayHeight = 1f;
        step = trayHeight + spacing;
    }

    void SpawnTrayAtTop()
    {
        if (trayPool.Count == 0)
        {

            return;
        }
        GameObject prefab = trayPool.Dequeue();

        GameObject tray = Instantiate(prefab, transform);
        tray.GetComponent<SpriteRenderer>().sortingOrder = sorting--;

        float startY = (activeTrays.Count) * step * 0.5f;
        float spawnY = startY + step - 0.5f;

        tray.transform.localPosition = new Vector3(0, spawnY, 0);

        activeTrays.Insert(0, tray.transform);
    }
    public void CompleteTray(Transform completedTray)
    {
        if (!activeTrays.Contains(completedTray)) return;

        int index = activeTrays.IndexOf(completedTray);


        activeTrays.RemoveAt(index);


        completedTray.SetParent(null, true);

        float fallTime = moveTime;
        float shrinkTime = 0.35f;

        completedTray.DOKill();

        Sequence seq = DOTween.Sequence();


        seq.AppendCallback(() =>
        {
            SpawnTrayAtTop();
            AlignAnimated();
        });


        seq.AppendInterval(fallTime);


        seq.Append(
            completedTray.DOScale(0f, shrinkTime)
                .SetEase(Ease.InBack)
        );


        seq.OnComplete(() =>
        {
            Destroy(completedTray.gameObject);
        });
    }
    void AlignInstant()
    {
        if (activeTrays.Count == 0) return;

        int maxSlots = columns * rows;
        int count = Mathf.Min(activeTrays.Count, maxSlots);

        // Căn giữa grid
        float startX = (columns - 1) * stepX * 0.5f;
        float startY = (rows - 1) * stepY * 0.5f;

        for (int i = 0; i < count; i++)
        {
            int col = i % columns;        // X
            int row = i / columns;        // Y

            float targetX = -startX + col * stepX;
            float targetY = startY - row * stepY;

            Vector3 pos = activeTrays[i].localPosition;
            pos.x = targetX;
            pos.y = targetY;
            activeTrays[i].localPosition = pos;
        }
    }

    public void AlignAnimated()
    {
        if (activeTrays.Count == 0) return;

        int totalSlots = Mathf.Max(visibleCount, activeTrays.Count);
        float startY = (totalSlots - 1) * step * 0.5f;

        int startSlot = (activeTrays.Count < visibleCount)
            ? (visibleCount - activeTrays.Count)
            : 0;

        for (int i = 0; i < activeTrays.Count; i++)
        {
            int slotIndex = startSlot + i;
            float targetY = startY - slotIndex * step;

            Transform tray = activeTrays[i];
            tray.DOKill();

            float currentY = tray.localPosition.y;


            if (currentY > targetY + 0.01f)
            {
                float y = targetY;

                Sequence seq = DOTween.Sequence();
                seq.Append(
                    tray.DOLocalMoveY(y, 0.25f)
                        .SetEase(Ease.InCubic)
                );
                seq.Append(
                    tray.DOLocalMoveY(y  + 0.4f, 0.15f)
                        .SetEase(Ease.OutCubic)
                );

                seq.Append(
                    tray.DOLocalMoveY(y, 0.15f)
                        .SetEase(Ease.InCubic)
                );


                seq.Append(
                    tray.DOLocalMoveY(y + 0.15f, 0.1f)
                        .SetEase(Ease.OutCubic)
                );

                seq.Append(
                    tray.DOLocalMoveY(y, 0.1f)
                        .SetEase(Ease.InCubic)
                );
                seq.Append(
                    tray.DOLocalMoveY(y + 0.05f, 0.08f)
                        .SetEase(Ease.OutCubic)
                );
                seq.Append(
                    tray.DOLocalMoveY(y, 0.08f)
                        .SetEase(Ease.InCubic)
                );
            }
            else
            {
                tray.DOLocalMoveY(targetY, 0.25f)
                    .SetEase(Ease.OutQuad);
            }
        }
    }
    void InitActiveTraysFromScene()
    {
        activeTrays.Clear();
        int indexOrder = 0;
        foreach (Transform child in transform)
        {
            indexOrder++;
            child.GetComponent<SpriteRenderer>().sortingOrder = indexOrder;
            activeTrays.Add(child);
        }
        activeTrays = activeTrays.OrderByDescending(t => t.localPosition.y).ToList();
    }
    //Lấy danh sách tất cả các tray có số lượng item lớn nhất 
    public List<Tray> GetTraysWithMaxSameItem()
    {
        int max = 0;
        List<Tray> result = new List<Tray>();

        foreach (Transform trayTf in activeTrays)
        {
            Tray tray = trayTf.GetComponent<Tray>();
            if (tray == null) continue;
            int count = tray.GetMaxSameItemCount();
            if (count < 2) continue;

            if (count > max)
            {
                max = count;
                result.Clear();
                result.Add(tray);
            }
            else if (count == max)
            {
                result.Add(tray);
            }
        }
        return result;
    }
    //Chọn ngẫu nhiên 1 tray
    public (Tray tray, Slot slot)? GetRandomTrayEmptySlot()
    {
        var trays = GetTraysWithMaxSameItem();

        var validTrays = trays
            .Where(t => !t.isCompleted && t.GetEmptySlot() != null)
            .ToList();

        if (validTrays.Count == 0)
            return null;

        Tray tray = validTrays[Random.Range(0, validTrays.Count)];
        Slot slot = tray.GetEmptySlot();

        return (tray, slot);
    }
    public (Tray tray, Slot slot, DragItem item)? GetRandomTraySlotAndItem()
    {
        var traySlot = GetRandomTrayEmptySlot();
        if (!traySlot.HasValue)
            return null;

        Tray tray = traySlot.Value.tray;
        Slot slot = traySlot.Value.slot;

        DragItem item = tray.GetAnyMatchingItem();
        if (item == null)
            return null;

        return (tray, slot, item);
    }
    public void ShowTutorialHint()
    {
        if (manualTray != null && manualItem != null)
        {
            if (!manualTray.isCompleted)
            {
                Slot targetSlot = manualTray.GetEmptySlot();
                Slot fromSlot = manualItem.GetComponentInParent<Slot>();

                if (targetSlot != null && fromSlot != null)
                {
                    TutorialManager.instance.ShowHandHint(fromSlot, targetSlot, manualItem);
                    return; // ⛔ dừng tại đây, KHÔNG chạy code cũ
                }
            }
        }
        // If it's the first tutorial session and we have a cached triple, show that fixed hint.
        if (isFirstTutorial)
        {
            // ensure cache exists
            if (cachedTray == null || cachedSlot == null || cachedItem == null)
            {
                CacheFirstTutorialTarget();
            }

            if (cachedTray != null && cachedSlot != null && cachedItem != null)
            {
                Slot fromSlot = cachedItem.GetComponentInParent<Slot>();
                if (fromSlot != null)
                {
                    TutorialManager.instance.ShowHandHint(fromSlot, cachedSlot, cachedItem);
                    return;
                }
            }
        }

        // ===== 1. Thử nước đi hợp lệ (>=2 item) =====
        var traySlot = GetRandomTrayEmptySlot();
        if (traySlot.HasValue)
        {
            Tray targetTray = traySlot.Value.tray;
            Slot emptySlot = traySlot.Value.slot;

            DragItem item = GetItemFromOtherTray(targetTray);
            if (item != null)
            {
                Slot fromSlot = item.GetComponentInParent<Slot>();
                if (fromSlot != null)
                {
                    TutorialManager.instance.ShowHandHint(fromSlot, emptySlot, item);
                    return; // ✅ xong
                }
            }
        }

        // ===== 2. FALLBACK: tray chỉ có 1 item =====
        var fallback = GetFallbackTrayAndSlot();
        if (!fallback.HasValue)
            return;

        Tray fallbackTray = fallback.Value.tray;
        Slot fallbackSlot = fallback.Value.slot;

        DragItem fallbackItem = GetAnyItemFromOtherTray(fallbackTray);
        if (fallbackItem == null)
            return;

        Slot fromFallbackSlot = fallbackItem.GetComponentInParent<Slot>();
        if (fromFallbackSlot == null)
            return;

        TutorialManager.instance.ShowHandHint(fromFallbackSlot, fallbackSlot, fallbackItem);
    }
    public (Tray tray, Slot slot)? GetFallbackTrayAndSlot()
    {
        foreach (Transform trayTf in activeTrays)
        {
            Tray tray = trayTf.GetComponent<Tray>();
            if (tray == null) continue;
            if (tray.isCompleted) continue;

            if (tray.GetComponentsInChildren<DragItem>().Length >= 1 &&
                tray.GetEmptySlot() != null)
            {
                return (tray, tray.GetEmptySlot());
            }
        }
        return null;
    }
    public DragItem GetAnyItemFromOtherTray(Tray excludeTray)
    {
        List<DragItem> items = new List<DragItem>();

        foreach (Transform trayTf in activeTrays)
        {
            Tray tray = trayTf.GetComponent<Tray>();
            if (tray == null) continue;
            if (tray == excludeTray) continue;
            if (tray.isCompleted) continue;

            items.AddRange(tray.GetComponentsInChildren<DragItem>());
        }

        if (items.Count == 0)
            return null;

        return items[Random.Range(0, items.Count)];
    }

    public void NotifyUserInteraction()
    {
        idleTime = 0f;

        if (isTutorialShowing)
        {
            isTutorialShowing = false;
            TutorialManager.instance.HideHint();
        }
    }
    public DragItem GetItemFromOtherTray(Tray targetTray)
    {
        string key = targetTray.GetMainItemKey();
        if (string.IsNullOrEmpty(key))
            return null;

        List<DragItem> candidates = new List<DragItem>();

        foreach (Transform trayTf in activeTrays)
        {
            Tray tray = trayTf.GetComponent<Tray>();
            if (tray == null) continue;
            if (tray == targetTray) continue;
            if (tray.isCompleted) continue;

            foreach (var item in tray.GetComponentsInChildren<DragItem>())
            {
                var sr = item.GetComponent<SpriteRenderer>();
                string itemKey = sr != null && sr.sprite != null
                    ? sr.sprite.name
                    : item.gameObject.name;

                if (itemKey == key)
                    candidates.Add(item);
            }
        }

        if (candidates.Count == 0)
            return null;

        return candidates[Random.Range(0, candidates.Count)];
    }

    //Hàm mặc định
    void CacheFirstTutorialTarget()
    {
        if (!isFirstTutorial) return;

        var traySlot = GetRandomTrayEmptySlot();
        if (!traySlot.HasValue) return;

        cachedTray = traySlot.Value.tray;
        cachedSlot = traySlot.Value.slot;

        cachedItem = GetItemFromOtherTray(cachedTray);
    }

}
