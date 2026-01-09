using DG.Tweening;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using UnityEngine;

public class TrayManager : MonoBehaviour
{
    public static TrayManager instance;
    public float spacing = 1.2f;
    public int visibleCount = 4;


    public float moveTime = 0.5f;

    [Header("Tray Prefabs / Pool")]
    public List<GameObject> listTray;

    private List<Transform> activeTrays = new List<Transform>();
    private Queue<GameObject> trayPool = new Queue<GameObject>();
    public AnimationCurve curve;

    private float trayHeight;
    [SerializeField] private float step = 1.5335f;
    int sorting = 0;
    public bool canCountIdle = false;


    [Header("Spawn Settings")] 
    public float spawnHeightMultiplier = 1f;

    [Header("Tutorial")]
    public bool isFirstTutorial = true;
    public float tutorialDelay = 4f;

    public float idleTimer;
    public bool tutorialEnabled;

    // manual first tutorial
    public Tray manualTray;
    public DragItem manualItem;
    public bool justEndedInteract;
    [SerializeField] Transform specialSpawnPoint;
    [Header("Special Tray")]
    [SerializeField] Transform specialTray;
    [SerializeField] Vector3 specialTrayScale = new Vector3(0.198f, 0.23f, 1f);
    [SerializeField] Vector3 specialTrayLocalPos;
    [Header("Sprite Library")]
    public List<Sprite> spriteLibrary;
    private void Awake()
    {
        if (instance == null)
            instance = this;
        else
            Destroy(instance);
    }

    void Start()
    {
       
        StartCoroutine(InitializeRoutine());
        
    }
    void Update()
    {
        if (Input.GetMouseButton(0))
        {
            idleTimer = 0f;
        }
        if (!canCountIdle) return;
        if (!tutorialEnabled) return;
        if (TutorialManager.instance.IsShowing) return;

        idleTimer += Time.deltaTime;

        if (idleTimer < tutorialDelay) return;

        if (ShowTutorial())
        {
            idleTimer = 0f;
        }

    }

    public bool ShowTutorial()
    {
        if (GameManager.instance.finishGame) return false;
        if (isFirstTutorial && manualTray != null && manualItem != null)
        {
            if (!manualTray.isCompleted)
            {
                Slot toSlot = manualTray.GetEmptySlot();
                Slot fromSlot = manualItem.GetComponentInParent<Slot>();

                if (toSlot == null || fromSlot == null)
                    return false;

                if (!fromSlot.gameObject.activeInHierarchy ||
                    !toSlot.gameObject.activeInHierarchy)
                    return false;

                TutorialManager.instance.ShowHandHint(fromSlot, toSlot, manualItem);
                isFirstTutorial = false;
                return true;
            }
        }

        var data = GetRandomValidMove();
        if (!data.HasValue) return false;

        if (!data.Value.fromSlot.gameObject.activeInHierarchy ||
            !data.Value.toSlot.gameObject.activeInHierarchy)
            return false;

        TutorialManager.instance.ShowHandHint(
            data.Value.fromSlot,
            data.Value.toSlot,
            data.Value.item
        );
        return true;
    }

    public void OnUserBeginInteract()
    {
        canCountIdle = false;
        idleTimer = 0f;

        if (TutorialManager.instance.IsShowing)
            TutorialManager.instance.HideHint();
    }

    public void OnUserEndInteract()
    {
        idleTimer = 0f;
        canCountIdle = true; // ⬅️ CHỈ TỪ LÚC NHẢ CHUỘT MỚI ĐẾM
        justEndedInteract = true;
    }

    (DragItem item, Slot fromSlot, Slot toSlot)? GetRandomValidMove()
    {
        List<Tray> trays = new List<Tray>();

        foreach (Transform tf in activeTrays)
        {
            if (tf == null) continue;
            Tray tray = tf.GetComponent<Tray>();
            if (tray == null || tray.isCompleted) continue;
            if (tray.GetEmptySlot() == null) continue;

            trays.Add(tray);
        }

        if (trays.Count == 0) return null;

        Tray targetTray = trays[Random.Range(0, trays.Count)];
        Slot toSlot = targetTray.GetEmptySlot();

        DragItem item = GetItemFromOtherTray(targetTray);
        if (item == null) return null;

        Slot fromSlot = item.GetComponentInParent<Slot>();
        if (fromSlot == null) return null;

        return (item, fromSlot, toSlot);
    }
    public void NotifyUserInteraction()
    {
        if (TutorialManager.instance.IsShowing)
            TutorialManager.instance.HideHint();
    }
    public DragItem GetItemFromOtherTray(Tray targetTray)
    {
        if (targetTray == null) return null;

        string key = targetTray.GetMainItemKey();
        if (string.IsNullOrEmpty(key))
            return null;

        List<DragItem> candidates = new List<DragItem>();

        foreach (Transform trayTf in activeTrays)
        {
            if (trayTf == null) continue;
            Tray tray = trayTf.GetComponent<Tray>();
            if (tray == null) continue;
            if (tray == targetTray) continue;
            if (tray.isCompleted) continue;

            foreach (var item in tray.GetComponentsInChildren<DragItem>())
            {
                if (item == null) continue;
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

    private static bool IsAlive(Transform t) => t != null && t.gameObject != null;

    System.Collections.IEnumerator InitializeRoutine()
    {
        InitActiveTraysFromScene();
        InitPool();
        yield return new WaitForEndOfFrame();
        AlignInstant();
        yield return new WaitForSeconds(3.0f);
        ShowTutorial();
    }
    void InitPool()
    {
        if (listTray == null) return;

        foreach (var tray in listTray)
            if (tray != null)
                trayPool.Enqueue(tray);
    }
    void SpawnTrayAtTop()
    {
        if (trayPool.Count == 0) return;

        GameObject prefab = trayPool.Dequeue();
        if (prefab == null) return;

        GameObject tray = Instantiate(prefab, transform);

        var sr = tray.GetComponent<SpriteRenderer>();
        if (sr != null) sr.sortingOrder = sorting--;

        // Spawn tại vị trí tray đặc biệt
        if (specialSpawnPoint != null)
        {
            tray.transform.localPosition = specialSpawnPoint.localPosition;
        }
        else
        {
            float startY = (activeTrays.Count) * step * 0.5f;
            float spawnY = startY + step * spawnHeightMultiplier;
            tray.transform.localPosition = new Vector3(0, spawnY, 0);
        }

        activeTrays.Insert(0, tray.transform);
    }
    void SpawnTraySpecial()
    {
        if (trayPool.Count == 0) return;

        GameObject prefab = trayPool.Dequeue();
        if (prefab == null) return;

        GameObject tray = Instantiate(prefab, transform);
        foreach (var drag in tray.GetComponentsInChildren<DragItem>())
        {
            drag.lockItem = true; 
        }
        foreach (var slot in tray.GetComponentsInChildren<Slot>())
        {
            slot.isLocked = true;
        }

        var sr = tray.GetComponent<SpriteRenderer>();
        if (sr != null) sr.sortingOrder = sorting--;

        Transform t = tray.transform;

        Vector3 landPos = new Vector3(0.8f, 3.183f, 0f);
        Vector3 spawnPos = landPos + Vector3.up * 0.6f;

        Vector3 targetScale = new Vector3(0.198f, 0.22f, 1f);

        t.localPosition = spawnPos;
        t.localScale = targetScale;

        Sequence seq = DOTween.Sequence();

        // Rơi nhanh
        seq.Append(
            t.DOLocalMoveY(landPos.y, 0.22f)
             .SetEase(Ease.InCubic)
        );

        // Nảy nhẹ 1 lần
        seq.Append(
            t.DOLocalMoveY(landPos.y + 0.08f, 0.1f)
             .SetEase(Ease.OutQuad)
        );

        seq.Append(
            t.DOLocalMoveY(landPos.y, 0.1f)
             .SetEase(Ease.InQuad)
        );

        seq.OnComplete(() =>
        {
            t.localPosition = landPos;
            specialTray = t;
        });
    }


    void PromoteSpecialTrayToMain()
    {
        if (specialTray == null) return;

        Transform tray = specialTray;
        tray.SetParent(transform, false);
        foreach (var drag in tray.GetComponentsInChildren<DragItem>())
        {
            drag.lockItem = false;
        }
        foreach (var slot in tray.GetComponentsInChildren<Slot>())
        {
            slot.isLocked = false;
        }

        activeTrays.Insert(0, tray);

        Vector3 targetScale = new Vector3(0.345f, 0.345f, 0.345f);
        tray.localScale = targetScale;

        Vector3 targetPos = GetSlotLocalPos(0);

        tray.DOLocalMove(targetPos, 0.35f)     
            .SetDelay(0.04f)                   
            .SetEase(Ease.OutQuart);           

        specialTray = null;
    }


    Vector3 GetSlotLocalPos(int index)
    {
        int totalSlots = Mathf.Max(visibleCount, activeTrays.Count);
        float startY = (totalSlots - 1) * step * 0.5f;

        float y = startY - index * step;
        return new Vector3(0f, y, 0f);
    }


    public void CompleteTray(Transform completedTray)
    {
        if (!IsAlive(completedTray)) return;
        if (!activeTrays.Contains(completedTray)) return;

        activeTrays.Remove(completedTray);
        completedTray.SetParent(null, true);

        Vector3 dropPos = completedTray.position + Vector3.down;

        try { completedTray.DOKill(); } catch { }

        Sequence seq = DOTween.Sequence();

        // spawn + align giữ nguyên
        seq.AppendCallback(() =>
        {
            //PromoteSpecialTrayToMain();
            SpawnTrayAtTop();
            AlignAnimated();
            //SpawnTraySpecial();
        });

        seq.Append(completedTray.DOMove(dropPos, 0.25f))
           .AppendCallback(() =>
           {
               AudioManager.instance.PlaySFX(AudioManager.instance.wood); 
           })
           .Append(completedTray.DOMoveY(dropPos.y + 0.4f, 0.15f).SetEase(Ease.OutCubic))
           .Append(completedTray.DOMoveY(dropPos.y, 0.15f).SetEase(Ease.InCubic))
           .Append(completedTray.DOMoveY(dropPos.y + 0.15f, 0.1f).SetEase(Ease.OutCubic))
           .Append(completedTray.DOMoveY(dropPos.y, 0.1f).SetEase(Ease.InCubic))
           .Append(completedTray.DOMoveY(dropPos.y + 0.05f, 0.08f).SetEase(Ease.OutCubic))
           .Append(completedTray.DOMoveY(dropPos.y, 0.08f).SetEase(Ease.InCubic));

        // thu nhỏ biến mất
        seq.Append(
            completedTray.DOScale(0f, 0.2f)
                .SetEase(Ease.InBack)
        );
        seq.OnComplete(() =>
        {
            if (IsAlive(completedTray))
                Destroy(completedTray.gameObject);
        });
    }
    void AlignInstant()
    {
        activeTrays = activeTrays.Where(t => IsAlive(t)).ToList();
        if (activeTrays.Count == 0) return;

        int normalVisibleCount = visibleCount;

        // ❗ Nếu có tray nhỏ thì trừ 1 slot
        if (specialTray != null)
            normalVisibleCount -= 1;

        int totalSlots = Mathf.Max(normalVisibleCount, activeTrays.Count);
        float startY = (totalSlots - 1) * step * 0.5f;

        int startSlot = (activeTrays.Count < normalVisibleCount)
            ? (normalVisibleCount - activeTrays.Count)
            : 0;

        for (int i = 0; i < activeTrays.Count; i++)
        {
            if (!IsAlive(activeTrays[i])) continue;

            int slotIndex = startSlot + i;
            float targetY = startY - slotIndex * step;

            Vector3 pos = activeTrays[i].localPosition;
            pos.y = targetY;
            activeTrays[i].localPosition = pos;
        }
    }
    public void AlignAnimated()
    {
        // Clean up null entries first
        activeTrays = activeTrays.Where(t => IsAlive(t)).ToList();

        if (activeTrays.Count == 0) return;

        int totalSlots = Mathf.Max(visibleCount, activeTrays.Count);
        float startY = (totalSlots - 1) * step * 0.5f;

        int startSlot = (activeTrays.Count < visibleCount)
            ? (visibleCount - activeTrays.Count)
            : 0;


        float overshootRatio = 0.2f;
        float fallPart = 0.8f;
        float bounceUpPart = 0.25f;
        float settlePart = 0.25f;

        for (int i = 0; i < activeTrays.Count; i++)
        {
            Transform tray = activeTrays[i];
            if (!IsAlive(tray)) continue;

            int slotIndex = startSlot + i;
            float targetY = startY - slotIndex * step;

            tray.DOKill();

            float currentY = tray.localPosition.y;
            float delta = currentY - targetY;


            if (delta > 0.01f)
            {

                float strength = Mathf.Clamp01(delta / step);

                float overshoot = step * overshootRatio * strength;
                float fallTime = moveTime * fallPart * strength;
                float bounceUpTime = moveTime * bounceUpPart * strength;
                float settleTime = moveTime * settlePart * strength;

                Sequence seq = DOTween.Sequence();

                seq.Append(
                    tray.DOLocalMoveY(targetY, fallTime).SetEase(Ease.InQuad)
                );

                seq.Append(
                    tray.DOLocalMoveY(targetY + overshoot, bounceUpTime)
                        .SetEase(Ease.OutQuad)
                );

                seq.Append(
                    tray.DOLocalMoveY(targetY, settleTime)
                        .SetEase(Ease.OutCubic)
                );
            }
            else
            {
                tray.DOLocalMoveY(targetY, moveTime).SetEase(Ease.OutQuad);
            }
        }
    }

    void InitActiveTraysFromScene()
    {
        activeTrays.Clear();

        foreach (Transform child in transform)
        {
            if (child == null) continue;

            if (child == specialTray)
                continue;

            activeTrays.Add(child);
        }

        activeTrays = activeTrays
            .Where(t => IsAlive(t))
            .OrderByDescending(t => t.localPosition.y)
            .ToList();

        if (specialTray != null)
        {
            specialTray.localPosition = specialTrayLocalPos;
            specialTray.localScale = specialTrayScale;
        }
    }
    public Sprite GetSpriteByPrefix(string prefix)
    {
        Debug.Log("aaa: " + prefix);
        Debug.Log("Count: " + spriteLibrary.Count());
        foreach (var sp in spriteLibrary)
        {
            if (sp == null) continue;

            if (sp.name.Length >= 2 &&
                sp.name.Substring(0, 2) == prefix)
            {
                return sp;
            }
        }
        return null;
    }
}
