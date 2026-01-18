using UnityEngine;

public class Slot : MonoBehaviour
{
    public Transform anchor;
    public DragItem currentItem;
    [Header("Lock")]
    public bool isLocked;
    public bool isReserved;

    private void Awake()
    {
        EnsureCurrentItem();
    }
    void EnsureCurrentItem()
    {
        if (currentItem == null)
        {
            currentItem = GetComponentInChildren<DragItem>();
            if (currentItem != null)
            {
                currentItem.transform.SetParent(transform);
            }
        }
    }
    public bool CanAcceptItem()
    {
        return !isLocked;
    }
    public bool IsEmpty()
    {
        if (currentItem == null)
            return true;
        else
            return false;
    }

    public void SetItem(DragItem item)
    {
        currentItem = item;
    }
    public void Reserve()
    {
        isReserved = true;
    }

    public void Release()
    {
        isReserved = false;
    }
}
