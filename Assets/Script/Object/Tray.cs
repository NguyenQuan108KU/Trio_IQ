using UnityEngine;
using DG.Tweening;
using System.Linq;
using System.Collections.Generic;
using TMPro;
using System.Net.Sockets;

public class Tray : MonoBehaviour
{
    public float spacing = 0.2f;      // khoảng cách giữa item
    public float moveTime = 0.2f;
    public GameObject diskPrefab;
    public Transform diskTransform;
    public float shrinkTime = 0.1f;
    public float itemToDiskTime = 0.1f;
    public float attachDelay = 0.15f;   // item chậm theo disk
    public float followSmooth = 0.25f;  
    public bool isCompleted = false;
    public Slot[] slots;
    public GameObject fireObject;
    public bool isSpecial;
    private void Start()
    {
        slots = GetComponentsInChildren<Slot>();
    }
    public Vector3 diskItemScale = new Vector3(0.03f, 0.03f, 0.03f);
    public void CheckMatch()
    {
        DragItem[] items = GetComponentsInChildren<DragItem>();

        var groups = items.GroupBy(i =>
        {
            var sr = i.GetComponent<SpriteRenderer>();
            return sr != null && sr.sprite != null
                ? sr.sprite.name
                : i.gameObject.name;
        });

        foreach (var g in groups)
        {
            if (g.Count() < 5) continue;

            var matchedItems = g.Take(5).ToList();
            //GameManager.instance.ticketCount += 1;
            //if(GameManager.instance.ticketCount == 5 && GameManager.instance.isMatch)
            //{
            //    Luna.Unity.LifeCycle.GameEnded();
            //    GameManager.instance.isClickStore = true;   
            //}
            //ItemType type = matchedItems[0].itemType;

            //PackTarget targetPack =
            //    PackManager.instance.GetPackInScene(type);

            //if (targetPack != null)
            //{
            for(int i = 0; i < matchedItems.Count; i++)
            {
                matchedItems[i].lockItem = true;
                matchedItems[i].GetComponent<SpriteRenderer>().sortingOrder = 3;
            }
                GameManager.instance.AddPoint(1);
                MatchItem(matchedItems);
                //MoveToPackLikeDisk(matchedItems, targetPack);
            //}
            return;
        }
    }
    bool IsValidForTween(DragItem item)
    {
        return item != null && item.gameObject != null && item.transform != null;
    }
    void MatchItem(List<DragItem> matchedItems)
    {
        GameObject firePre = Instantiate(fireObject, transform);
        firePre.transform.localPosition = new Vector3(0, 2.5f, 0);

        AudioManager.instance.PlaySFX(AudioManager.instance.match);

        float delay = 0.5f;
        int finishedBounce = 0;
        int total = matchedItems.Count;

        foreach (var item in matchedItems)
        {
            if (item == null) continue;

            Transform t = item.transform;
            Vector3 originScale = t.localScale;

            string prefix = "";
            var sr0 = item.GetComponent<SpriteRenderer>();
            if (sr0 != null && sr0.sprite != null && sr0.sprite.name.Length >= 2)
                prefix = sr0.sprite.name.Substring(0, 2);

            item.gameObject.SetActive(false);

            DOVirtual.DelayedCall(delay, () =>
            {
                if (item == null) return;

                item.gameObject.SetActive(true);

                // 🔥 LẤY LẠI SR SAU KHI ACTIVE
                SpriteRenderer sr = item.GetComponent<SpriteRenderer>();
                if (sr != null && !string.IsNullOrEmpty(prefix))
                {
                    Sprite newSprite = TrayManager.instance.GetSpriteByPrefix(prefix);
                    if (newSprite != null)
                        sr.sprite = newSprite;
                }

                t.localScale = originScale;
                t.DOKill();

                t.DOScale(originScale * 1.12f, 0.25f)
                 .SetEase(Ease.OutBack)
                 .OnComplete(() =>
                 {
                     t.DOScale(originScale, 0.22f)
                      .SetEase(Ease.InOutSine)
                      .OnComplete(() =>
                      {
                          finishedBounce++;
                          if (finishedBounce == total)
                          {
                              GatherLikeDisk(matchedItems);
                          }
                      });
                 });
            });
        }
    }

    void GatherLikeDisk(List<DragItem> items)
    {
        if (items == null || items.Count < 5) return;

        DragItem center = items[items.Count / 2];
        if (center == null) return;

        Vector3 centerPos = center.transform.position;

        Sequence gatherSeq = DOTween.Sequence();

        for (int i = 0; i < items.Count; i++)
        {
            DragItem item = items[i];
            if (item == null) continue;

            gatherSeq.Join(
                item.transform.DOMove(centerPos, moveTime)
                    .SetEase(Ease.InOutSine)
                    .SetLink(item.gameObject)
            );
        }

        gatherSeq.OnComplete(() =>
        {
            FlyDiskUp(items);
        });
    }
    void FlyDiskUp(List<DragItem> items)
    {
        bool isFillSlider = false;
        float flyTime = 0.7f;
        float jumpPower = 0.45f;
        Vector3 minScaleRatio = Vector3.one * 0.5f; 
        foreach (var item in items)
        {
            if (item == null) continue;

            SpriteRenderer sr = item.GetComponent<SpriteRenderer>();
            if (sr == null || sr.sprite == null) continue;

            //Transform ticket = TicketManager.instance.FindTicketBySprite(sr.sprite);
            Transform ticket = PackManager.instance.FindPackBySprite(sr.sprite);
            if (ticket == null)
            {
                Destroy(item.gameObject);
                continue;
            }
            item.transform.DOKill();

            Vector3 originScale = item.transform.localScale;
            Vector3 targetScale = Vector3.Scale(originScale, minScaleRatio);

            Sequence seq = DOTween.Sequence();
            // bay
            seq.Join(
                item.transform.DOJump(
                    ticket.position,
                    jumpPower,
                    1,
                    flyTime
                ).SetEase(Ease.Linear)
            );
            // thu nhỏ dần
            seq.Join(
                item.transform.DOScale(
                    targetScale,
                    flyTime
                ).SetEase(Ease.OutQuad)
            );

            seq.OnComplete(() =>
            {
                //AudioManager.Instance.PlaySFX(AudioManager.Instance.sake);
                //TicketManager.instance.RemoveTicket(ticket);
                Destroy(item.gameObject);
                Disappear();
                if(isFillSlider) return;
                isFillSlider = true;
                PackManager.instance.OnPackFilled(ticket.GetComponent<PackTarget>());
            });
        }
    }
    void MoveToPackLikeDisk(List<DragItem> items, PackTarget pack)
    {
        if (items == null || items.Count < 5) return;
        if (pack == null || pack.attachPoint == null) return;

        Transform packAttach = pack.attachPoint;

        for (int i = 0; i < items.Count; i++)
        {
            var sr = items[i].GetComponent<SpriteRenderer>();
            if (sr != null) sr.sortingOrder = i;
        }

        DragItem center = items[2];
        if (center == null) return;

        Vector3 centerPos = center.transform.position;
        float startX = -(items.Count - 1) * spacing * 0.5f;

        Sequence gatherSeq = DOTween.Sequence()
            .SetLink(gameObject);

   
        for (int i = 0; i < items.Count; i++)
        {
            DragItem item = items[i];
            if (item == null) continue;

            Vector3 targetPos =
                centerPos + new Vector3(startX + i * spacing, 0, 0);
            gatherSeq.Join(
                item.transform.DOMove(targetPos, moveTime)
                    .SetEase(Ease.OutBack)
                    .SetLink(item.gameObject)
            );
        }
        AudioManager.instance.PlaySFX(AudioManager.instance.match);
        gatherSeq.OnComplete(() =>
        {
            int finishedCount = 0;
            int total = items.Count;

            for (int i = 0; i < items.Count; i++)
            {
                DragItem item = items[i];
                if (item == null) continue;
                item.transform.DOKill();
                Vector3 offset = item.transform.position - centerPos;
                Vector3 targetPos = packAttach.position + offset * 0.3f;
                Sequence seq = DOTween.Sequence()
                    .SetLink(item.gameObject);
                seq.Join(
                    item.transform.DOJump(
                        targetPos,
                        1f,
                        1,
                        itemToDiskTime
                    ).SetEase(Ease.InOutQuad)
                );
                seq.Join(
                    item.transform.DOScale(
                        diskItemScale,
                        itemToDiskTime
                    )
                );
                seq.OnComplete(() =>
                {
                    if (item != null)
                    {
                        item.transform.DOKill();
                        Destroy(item.gameObject);
                    }

                    finishedCount++;
                    if (finishedCount == total)
                    {
                        isCompleted = true;
                        DOVirtual.DelayedCall(0.05f, () =>
                        {
                            if (this == null) return;
                            Disappear();
                            pack.AddItems(total);
                        }).SetLink(gameObject);
                    }
                });
            }
        });
    }
    void MoveToCenter(List<DragItem> items)
    {
        if (items == null || items.Count < 3) return;

        DragItem center = items[2];
        if (!IsValidForTween(center)) return;

        Vector3 centerPos = center.transform.position;

        float startX = -(items.Count - 1) * spacing * 0.5f;

        Sequence seq = DOTween.Sequence();

        for (int i = 0; i < items.Count; i++)
        {
            var itm = items[i];
            if (!IsValidForTween(itm)) continue;

            var sr = itm.GetComponent<SpriteRenderer>();
            if (sr != null) sr.sortingOrder = i;

            Vector3 target =
                centerPos + new Vector3(startX + i * spacing, 0, 0);

            // capture the target position and create a move tween that uses the item's transform directly.
            // We SetLink immediately to the item's GameObject to avoid DOTween trying to operate on a destroyed transform.
            var moveTween = itm.transform.DOMove(target, moveTime)
                .SetEase(Ease.OutBack)
                .SetLink(itm.gameObject);

            seq.Join(moveTween);
        }


        seq.OnComplete(() =>
        {

            foreach (var item in items)
            {
                if (item == null) continue;
                item.transform.SetParent(null, true);

            }

            SpawnDisk(items, centerPos);
        });

    }
    void SpawnDisk(List<DragItem> items, Vector3 centerPos)
    {
        // safe access to DiskTransform singleton; fallback to centerPos if not available
        Vector3 spawnPos = DiskTransform.instance != null && DiskTransform.instance.transform != null
            ? DiskTransform.instance.transform.position
            : centerPos;

        GameObject diskObj = Instantiate(
            diskPrefab,
            spawnPos,
            Quaternion.identity
        );

        Disk disk = diskObj != null ? diskObj.GetComponent<Disk>() : null;

        float spacingRatio = 0.6f;
        float jumpPower = 1.0f;          // độ cao nhảy
        int jumpCount = 1;               // 1 lần nhảy (bay lên rồi rơi)
        Vector3 targetScale = new Vector3(0.35f, 0.35f, 0.35f);

        // master sequence that waits for all item-to-disk sequences
        Sequence master = DOTween.Sequence();

        foreach (var item in items)
        {
            if (!IsValidForTween(item)) continue;

            var it = item;

            it.transform.DOKill();

            // capture start and target positions immediately
            Vector3 startPos = it.transform.position;
            Vector3 offset = startPos - centerPos;
            Vector3 compressedOffset = offset * spacingRatio;

            Vector3 diskPos = (diskObj != null && diskObj.transform != null) ? diskObj.transform.position : spawnPos;
            Vector3 targetPos = diskPos + compressedOffset;

            Sequence seq = DOTween.Sequence();

            var jumpTween = it.transform.DOJump(
                    targetPos,
                    jumpPower,
                    jumpCount,
                    itemToDiskTime
                ).SetEase(Ease.InOutQuad);

            var scaleTween = it.transform.DOScale(targetScale, itemToDiskTime)
                    .SetEase(Ease.OutQuad);

            // Link both tweens / sequence to the item so they get killed if item is destroyed.
            jumpTween.SetLink(it.gameObject);
            scaleTween.SetLink(it.gameObject);
            seq.SetLink(it.gameObject);

            seq.Join(jumpTween);
            seq.Join(scaleTween);

            seq.AppendInterval(attachDelay);

            seq.AppendCallback(() =>
            {
                if (it == null) return;
                if (disk != null && disk.transform != null)
                {
                    it.transform.SetParent(disk.transform, true);
                }
                it.transform.localScale = targetScale;
                if (disk != null)
                {
                    disk.AddItem(it.transform);
                }
            });

            // join child into master
            master.Join(seq);
        }

        // disappear only after all item sequences complete
        master.OnComplete(() =>
        {
            Disappear();
        });
    }
    public void Disappear()
    {
        DOTween.Kill(transform);

        Sequence seq = DOTween.Sequence()
            .SetLink(gameObject);

        seq.AppendCallback(() =>
        {
            TrayManager manager = GetComponentInParent<TrayManager>();
            if (manager != null)
                manager.CompleteTray(transform);
        });
        seq.OnComplete(() =>
        {
            DOTween.Kill(transform);
            Destroy(gameObject);
        });
    }
    public Slot GetEmptySlot()
    {
        foreach (Slot slot in slots)
        {
            if (slot.IsEmpty())
                return slot;
        }
        return null;
    }
    public string GetMainItemKey()
    {
        DragItem[] items = GetComponentsInChildren<DragItem>();
        if (items.Length == 0) return null;

        return items
            .GroupBy(i =>
            {
                var sr = i.GetComponent<SpriteRenderer>();
                return sr != null && sr.sprite != null
                    ? sr.sprite.name
                    : i.gameObject.name;
            })
            .OrderByDescending(g => g.Count())
            .First()
            .Key;
    }
}
