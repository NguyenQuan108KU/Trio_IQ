using DG.Tweening;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using UnityEngine;

public class PlateManager : MonoBehaviour
{
    public List<Plate> disks = new List<Plate>();
    public Slot[] slots;
    public bool isRefilling = false;
    bool hasHandledEmpty = false;
    private int currentDiskIndex = 0;
    private int refillingCounter = 0;
    private void OnEnable()
    {
        GameEvent.OnSpawnDisk.AddListener(NotifySlotChanged);
    }
    private void OnDisable()
    {
        GameEvent.OnSpawnDisk.RemoveListener(NotifySlotChanged);
    }
    private void Start()
    {
        InitPlate();
        int maxOrder = disks.Count;

        for (int i = 0; i < disks.Count; i++)
        {
            var sr = disks[i].GetComponent<SpriteRenderer>();
            if (sr == null) continue;

            sr.sortingOrder = maxOrder - i;
        }

    }
    public void InitPlate()
    {
        for (int d = 0; d < disks.Count; d++)
        {
            Plate disk = disks[d];
            if (d == 0)
            {
                foreach (var item in disk.items)
                {
                    var sr = item.GetComponent<SpriteRenderer>();
                    if (sr != null)
                    {
                        Color c = sr.color;
                        c.a = 0.6f;
                        sr.color = c;
                    }

                    item.isLockItem = true;
                }
            }
            else
            {
                disk.HideAllItems();
            }
        }
    }
    public bool HasAnyItemInSlot()
    {
        foreach (Slot slot in slots)
        {
            if (!slot.IsEmpty())
                return true;
        }
        return false;
    }
    public void NotifySlotChanged()
    {
        if (isRefilling) return;

        if (HasAnyItemInSlot())
        {
            hasHandledEmpty = false;
            return;
        }

        if (hasHandledEmpty) return;

        hasHandledEmpty = true;
        TryHandleAfterMatch();
    }
    public void RefillFromDisk(Plate diskItem)
    {
        if (diskItem == null || diskItem.IsEmpty())
            return;
        //Sort disk items theo X (trái → phải)
        var diskItems = diskItem.items.OrderBy(i => i.transform.position.x).ToList();

        //Sort slots theo X (trái → phải)
        var orderedSlots = slots.Where(s => s != null && s.anchor != null).OrderBy(s => s.anchor.position.x).ToList();

        float moveTime = 0.35f;  
        float scaleTime = 0.18f;   
        float delayStep = 0.04f;  

        bool diskWillBeEmpty = false;
        int animIndex = 0;
        isRefilling = true;
        refillingCounter = 0;

        // Map theo vị trí X
        foreach (DragItem item in diskItems)
        {
            item.isLockItem = false;
            for (int i = 0; i < slots.Count(); i++)
            {
                slots[i].isLocked = false;
            }
            if (item == null || item.transform == null)
                continue;
            Slot slot = FindBestSlotByX(orderedSlots, item.transform.position.x);
            if (slot == null)
                continue;
            slot.Reserve();

            // prepare one animation -> increment counter
            refillingCounter++;

            diskItem.RemoveItem(item);
            diskWillBeEmpty = diskItem.IsEmpty();

            item.transform.DOKill();

            Vector3 startScale = item.transform.localScale;
            item.transform.SetParent(slot.transform, true);
            item.transform.localScale = startScale;

            SpriteRenderer sr = item.GetComponent<SpriteRenderer>();
            if (sr != null)
            {
                Color c = sr.color;
                c.a = 1f;
                sr.color = c;
            }

            float delay = animIndex * delayStep;
            animIndex++;

            Sequence seq = DOTween.Sequence();
            seq.AppendInterval(delay);

            seq.Append(
                item.transform.DOLocalMove(
                    slot.anchor.localPosition,
                    moveTime
                ).SetEase(Ease.OutCubic)
                 .SetTarget(item.transform)
            );

            seq.Join(
                item.transform.DOScale(Vector3.one, scaleTime)
                    .SetEase(Ease.OutBack, 0.8f)
                    .SetTarget(item.transform)
            );

            seq.OnComplete(() =>
            {
                if (item == null || item.transform == null)
                {
                    refillingCounter--;
                    if (refillingCounter <= 0)
                    {
                        isRefilling = false;
                        currentDiskIndex++;
                        Plate nextDisk = CurrentDisk;
                        if (nextDisk != null)
                            nextDisk.ShowItemsInListOrder();
                    }
                    for(int i = 0; i < slots.Count(); i++)
                    {
                        slots[i].isLocked = false;    
                    }
                    return;
                }

                item.transform.localPosition = Vector3.zero;
                slot.SetItem(item);
                item.transform.localScale = Vector3.one; 
                if (diskWillBeEmpty)
                {
                    diskItem.FadeAndDestroy();
                }
                refillingCounter--;
                if (refillingCounter <= 0)
                {
                    isRefilling = false;
                    currentDiskIndex++;
                    Plate nextDisk = CurrentDisk;
                    if (nextDisk != null)
                        nextDisk.ShowItemsInListOrder();
                }
            });
        }

        if (refillingCounter == 0)
        {
            isRefilling = false;
            currentDiskIndex++;
            Plate nextDisk = CurrentDisk;
            if (nextDisk != null)
                nextDisk.ShowItemsInListOrder();
        }
    }
    Slot FindBestSlotByX(List<Slot> orderedSlots, float itemX)
    {
        Slot best = null;
        float bestDist = float.MaxValue;

        foreach (Slot s in orderedSlots)
        {
            if (s.currentItem != null) continue;

            float dx = Mathf.Abs(s.anchor.position.x - itemX);
            if (dx < bestDist)
            {
                bestDist = dx;
                best = s;
            }
        }

        return best;
    }
    public Plate CurrentDisk
    {
        get
        {
            if (disks == null || currentDiskIndex < 0 || currentDiskIndex >= disks.Count)
                return null;
            return disks[currentDiskIndex];
        }
    }
    public void TryHandleAfterMatch()
    {
        Plate disk = CurrentDisk;
        if (disk != null)
        {
            RefillFromDisk(disk);
        }
        else
        {
            //CloseTray();
        }
    }
}
