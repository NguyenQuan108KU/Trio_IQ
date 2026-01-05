using UnityEngine;

public class Slot : MonoBehaviour
{
    public Transform anchor;
    public DragItem currentItem;

    private void Awake()
    {
        EnsureCurrentItem();
    }

#if UNITY_EDITOR
    private void OnValidate()
    {
        // Keep currentItem in sync while editing
        EnsureCurrentItem();
    }
#endif

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
}
