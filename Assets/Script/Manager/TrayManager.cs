using DG.Tweening;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using UnityEngine;

public class TrayManager : MonoBehaviourSingleton<TrayManager>
{
    public float spacing = 1.2f;
    public int visibleCount = 4;
    public float moveTime = 0.5f;
    [Header("--------------- List Tray ----------")]
    public List<GameObject> listTrayPrepare = new List<GameObject>();
    public List<Transform> listTrayValiable = new List<Transform>();
    List<float> listBaseY = new List<float>();
    private Queue<GameObject> trayPool = new Queue<GameObject>();
    [Header("---------- Load Tray ----------")]
    public TrayConfig levelConfig;
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

    [SerializeField] float startY;   // Y của tray trên cùng

    void Start()
    {
        InitTray();
        ApplyLayout(levelConfig);
        CacheInitialBaseY();
        //SetUpTray();
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
    void CacheInitialBaseY()
    {
        listBaseY.Clear();

        foreach (var tray in listTrayValiable)
        {
            listBaseY.Add(tray.localPosition.y);
        }
    }

    public IEnumerator SetUpTutorial()
    {
        yield return new WaitForSeconds(3f);
        ShowTutorial();
    }
    //Set up layout các Tray
    public void InitTray()
    {
        //Đưa các tray vào listTrayPrepare để sập xuống
        if (listTrayPrepare == null) return;
        foreach (var tray in listTrayPrepare)
        {
            if (tray == null) continue;
            trayPool.Enqueue(tray); 
        }

        //Lấy các tray hiện tại để sắp xếp
        foreach (Transform child in transform)
        {
            Tray tray = child.GetComponent<Tray>();
            if (tray == null)  continue;
            listTrayValiable.Add(child);
        }
    }
    void ApplyLayout(TrayConfig config)
    {
        if (config == null) return;

        ITrayLayout layout = null;

        if (config.layoutType == TrayLayoutType.Vertical)
            layout = new VerticalTrayLayout();
        else if (config.layoutType == TrayLayoutType.Grid)
            layout = new GridTrayLayout();
        else if (config.layoutType == TrayLayoutType.VerticalSpecial)
            layout = new VerticalSpecialTrayLayout();

        if (layout == null) return;

        layout.Apply(listTrayValiable, config);
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

        foreach (Transform tf in listTrayValiable)
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

        foreach (Transform trayTf in listTrayValiable)
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

    void SpawnTrayAtTop()
    {
        if (trayPool.Count == 0)
            return;

        GameObject prefab = trayPool.Dequeue();
        if (prefab == null)
            return;

        GameObject tray = Instantiate(prefab, transform);

        var sr = tray.GetComponent<SpriteRenderer>();
        if (sr != null)
            sr.sortingOrder = sorting--;

        // Spawn tại vị trí tray đặc biệt
        if (specialSpawnPoint != null)
        {
            tray.transform.localPosition = specialSpawnPoint.localPosition;
        }
        else
        {
            float newBaseY;

            if (listBaseY.Count > 0)
                newBaseY = listBaseY[0] + spacing + 1.0f;   // tray trên cùng
            else
                newBaseY = startY;

            tray.transform.localPosition = new Vector3(0f, newBaseY, 0f);

            listTrayValiable.Insert(0, tray.transform);
            listBaseY.Insert(0, newBaseY);
        }
    }

    void SpawnTraySpecial()
    {
        if (trayPool.Count == 0) return;

        GameObject prefab = trayPool.Dequeue();
        if (prefab == null) return;

        GameObject tray = Instantiate(prefab, transform);
        foreach (var drag in tray.GetComponentsInChildren<DragItem>())
        {
            drag.isLockItem = true; 
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
            drag.isLockItem = false;
        }
        foreach (var slot in tray.GetComponentsInChildren<Slot>())
        {
            slot.isLocked = false;
        }

        listTrayValiable.Insert(0, tray);

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
        int totalSlots = Mathf.Max(visibleCount, listTrayValiable.Count);
        float startY = (totalSlots - 1) * step * 0.5f;

        float y = startY - index * step;
        return new Vector3(0f, y, 0f);
    }
    public void CompleteTray(Transform completedTray)
    {
        if (!IsAlive(completedTray)) return;

        int index = listTrayValiable.IndexOf(completedTray);
        if (index < 0) return;

        // LẤY BASE Y LOGIC (KHÔNG DÙNG localPosition)
        float removedBaseY = listBaseY[index];

        // REMOVE KHỎI DATA
        listTrayValiable.RemoveAt(index);
        listBaseY.RemoveAt(index);

        completedTray.SetParent(null, true);

        Vector3 dropPos = completedTray.position + Vector3.down;

        completedTray.DOKill(true);

        Sequence seq = DOTween.Sequence();

        // spawn + align
        seq.AppendCallback(() =>
        {
            SpawnTrayAtTop();                 // hàm này PHẢI add cả baseY
            AlignAnimated(index);      // align theo baseY
        });

        // animation rơi & bounce (GIỮ NGUYÊN LOGIC CŨ)
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

    public void AlignAnimated(int removedIndex)
    {
        for (int i = 0; i < listTrayValiable.Count; i++)
        {
            // chỉ tray nằm TRÊN tray bị remove
            if (i > removedIndex)
                continue;

            float targetBaseY = GetSlotLocalPos(i).y;
            listBaseY[i] = targetBaseY;

            Transform tray = listTrayValiable[i];
            tray.DOKill(true);

            Sequence seq = DOTween.Sequence();

            // 1️⃣ Rơi xuống vị trí mới
            seq.Append(
                tray.DOLocalMoveY(targetBaseY, moveTime * 0.6f).SetEase(Ease.InQuad));
            seq.Append(tray.DOLocalMoveY(targetBaseY + 0.4f, 0.15f).SetEase(Ease.OutCubic) );
            seq.Append(tray.DOLocalMoveY(targetBaseY, 0.15f).SetEase(Ease.InCubic));
            seq.Append(tray.DOLocalMoveY(targetBaseY + 0.15f, 0.1f) .SetEase(Ease.OutCubic));
            seq.Append(tray.DOLocalMoveY(targetBaseY, 0.1f).SetEase(Ease.InCubic));
            seq.Append(tray.DOLocalMoveY(targetBaseY + 0.05f, 0.08f).SetEase(Ease.OutCubic));
            seq.Append(tray.DOLocalMoveY(targetBaseY, 0.08f).SetEase(Ease.InCubic)
            );
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
