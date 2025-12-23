using DG.Tweening;
using System.Collections.Generic;
using System.Linq;
using UnityEngine;
using UnityEngine.UIElements;

public class TrayManager : MonoBehaviour
{
    public float spacing = 1.2f;
    public int visibleCount = 4;
    public float moveTime = 0.5f;

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

    void Start()
    {
       
        StartCoroutine(InitializeRoutine());
        //Debug.Log("Count: " + GetTraysWithMaxSameItem().Count);
        Debug.Log("Count: " + GetRandomTrayEmptyPos());
    }

    System.Collections.IEnumerator InitializeRoutine()
    {
        InitActiveTraysFromScene();
        InitPool();
        yield return new WaitForEndOfFrame();
        CacheSize();
        AlignInstant();
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
    public Vector3? GetRandomTrayEmptyPos()
    {
        var trays = GetTraysWithMaxSameItem();

        if (trays == null || trays.Count == 0)
            return null;

        // chỉ lấy tray còn slot trống
        var validTrays = trays
            .Where(t => !t.isCompleted && t.GetEmptySlot() != null)
            .ToList();

        if (validTrays.Count == 0)
            return null;

        Tray tray = validTrays[Random.Range(0, validTrays.Count)];
        return tray.GetEmptySlot().transform.position;
    }

}
