using DG.Tweening;
using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BounceCollapseTray : ITrayCollapse
{
    public void Collapse(Transform tray, System.Action onComplete)
    {
        if (tray == null) return;

        tray.DOKill();

        Vector3 dropPos = tray.position + Vector3.down;

        Sequence seq = DOTween.Sequence();

        seq.Append(tray.DOMove(dropPos, 0.25f))
           .Append(tray.DOMoveY(dropPos.y + 0.4f, 0.15f))
           .Append(tray.DOMoveY(dropPos.y, 0.15f))
           .Append(tray.DOMoveY(dropPos.y + 0.15f, 0.1f))
           .Append(tray.DOMoveY(dropPos.y, 0.1f))
           .Append(tray.DOMoveY(dropPos.y + 0.05f, 0.08f))
           .Append(tray.DOMoveY(dropPos.y, 0.08f))
           .Append(tray.DOScale(0f, 0.2f).SetEase(Ease.InBack));

        seq.OnComplete(() => onComplete?.Invoke());
    }
}
