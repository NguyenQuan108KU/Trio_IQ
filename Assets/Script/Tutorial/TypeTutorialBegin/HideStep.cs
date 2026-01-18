using System.Collections;
using UnityEngine;
using DG.Tweening;
public enum HideMode
{
    Instant,    
    ScaleDown   
}
public class HideStep : ITutorialBeginStep
{
    GameObject box;
    GameObject background;
    HideMode mode;
    float duration;

    public HideStep(
        GameObject boxOrText,
        GameObject background = null,
        HideMode mode = HideMode.Instant,
        float duration = 0.25f)
    {
        this.box = boxOrText;
        this.background = background;
        this.mode = mode;
        this.duration = duration;
    }
    public IEnumerator Execute(TutorialContext context)
    {
        if (background != null)
            background.SetActive(false);

        if (box == null)
            yield break;

        box.transform.DOKill();

        if (mode == HideMode.Instant)
        {
            box.SetActive(false);
            yield break;
        }
        if(mode == HideMode.ScaleDown)
        {
        yield return box.transform
            .DOScale(Vector3.zero, duration)
            .SetEase(Ease.InCubic)
            .WaitForCompletion();

        box.SetActive(false);
        box.transform.localScale = Vector3.one;
        GameEvent.UnLockItem?.Invoke();
        }
    }
}
