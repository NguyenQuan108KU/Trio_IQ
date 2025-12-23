using UnityEngine;
using DG.Tweening;
using System.Collections.Generic;

public class Disk : MonoBehaviour
{
    public int requiredCount = 3;
    public float moveDistance = 0.5f;
    public float moveTime = 0.9f;

    private bool moved = false;
    private List<Transform> items = new List<Transform>();
    public void AddItem(Transform item)
    {
        if (items.Contains(item)) return;
        items.Add(item);
        if (items.Count == requiredCount && !moved)
        {
            moved = true;
            MoveDisk();
        }
    }

    void MoveDisk()
    {
        Debug.Log("ậnnasa");
        Vector3 target = transform.position + Vector3.right * moveDistance;

        transform.DOMove(target, 2.8f)   // 0.6 units / giây
            .SetSpeedBased()
            .SetEase(Ease.OutQuart)
            .OnComplete(() =>
            {
                Destroy(gameObject);
            });
    }



}
