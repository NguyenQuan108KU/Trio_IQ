using System.Collections.Generic;
using System.Linq;
using UnityEngine;
using DG.Tweening;

public class TrayManager : MonoBehaviour
{
    public float spacing = 1.2f;
    public int visibleCount = 4;


    public float moveTime = 0.5f;

    [Header("Tray Prefabs / Pool")]
    public List<GameObject> listTray;

    private List<Transform> activeTrays = new List<Transform>();
    private Queue<GameObject> trayPool = new Queue<GameObject>();
    public AnimationCurve curve;

    private float trayHeight;
    private float step;
    int sorting = 0;

    void Start()
    {
       
        StartCoroutine(InitializeRoutine());
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
        float spawnY = startY + step;

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

        int totalSlots = Mathf.Max(visibleCount, activeTrays.Count);
        float startY = (totalSlots - 1) * step * 0.5f;


        int startSlot = (activeTrays.Count < visibleCount) ? (visibleCount - activeTrays.Count) : 0;

        for (int i = 0; i < activeTrays.Count; i++)
        {
            int slotIndex = startSlot + i;
            float targetY = startY - slotIndex * step;

            Vector3 pos = activeTrays[i].localPosition;
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


        float overshootRatio = 0.2f;   
        float fallPart = 0.8f;         
        float bounceUpPart = 0.25f;
        float settlePart = 0.25f;

        for (int i = 0; i < activeTrays.Count; i++)
        {
            int slotIndex = startSlot + i;
            float targetY = startY - slotIndex * step;

            Transform tray = activeTrays[i];
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
            activeTrays.Add(child);

       
        activeTrays = activeTrays.OrderByDescending(t => t.localPosition.y).ToList();
    }
}
