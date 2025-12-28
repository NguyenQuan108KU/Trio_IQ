using DG.Tweening;
using System.Collections.Generic;
using System.Linq;
using UnityEngine;

public class Plate : MonoBehaviour
{
    public List<DragItem> items = new();
    public float fadeTime = 0.25f;
    public float scaleTime = 0.25f;

    private void Start()
    {
        foreach (var item in items)
        {
            item.diskX = item.transform.localPosition.x;
        }
    }
    public DragItem GetFirstItem()
    {
        if (items.Count == 0) return null;
        return items[0];
    }
    public void HideAllItems()
    {
        foreach (var item in items)
        {
            var sr = item.GetComponent<SpriteRenderer>();
            if (sr != null)
            {
                Color c = sr.color;
                c.a = 0f;
                sr.color = c;
            }
            item.isLocked = true;
        }
    }

    public void ShowItemsInListOrder(float fadeTime = 0.2f, float delayStep = 0.08f)
    {
        Sequence seq = DOTween.Sequence();

        for (int i = 0; i < items.Count; i++)
        {
            DragItem item = items[i];
            if (item == null) continue;

            SpriteRenderer sr = item.GetComponent<SpriteRenderer>();
            if (sr == null) continue;

            sr.DOKill();
            Color c = sr.color;
            c.a = 0f;
            sr.color = c;

            item.isLocked = true;

            seq.Append(
                sr.DOFade(0.6f, fadeTime)
                  .OnComplete(() =>
                  {
                      item.isLocked = false;
                  })
            );

            seq.AppendInterval(delayStep);
        }
    }



    public void RemoveItem(DragItem item)
    {
        items.Remove(item);
    }

    public bool IsEmpty()
    {
        return items.Count == 0;
    }
    public void FadeAndDestroy()
    {
        SpriteRenderer[] srs = GetComponentsInChildren<SpriteRenderer>();

        Sequence seq = DOTween.Sequence();

        foreach (var sr in srs)
        {
            seq.Join(
                sr.DOFade(0f, fadeTime)
            );
        }

        seq.Join(
            transform.DOScale(0.8f, scaleTime)
                .SetEase(Ease.InBack)
        );

        seq.OnComplete(() =>
        {
            Destroy(gameObject);
        });
    }
}
