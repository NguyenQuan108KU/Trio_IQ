using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class FlyToTextTarget : IFlyTarget
{
    TextAgeScale textAge;
    Transform textTransform;
    public FlyToTextTarget(Transform textTransform)
    {
        this.textTransform = textTransform; 
    }

    public bool IsValid(MatchContext ctx)
    {
        textAge = TextAgeScale.instance;
        return textAge != null && textAge.textTransform != null;
    }
    public Transform GetAttachPoint(DragItem item, MatchContext ctx)
    {
        return textTransform;
    }


    public void OnArrived(int count)
    {
        textAge.DotNudge();
        GameEvent.DownScore?.Invoke();
        AudioManager.instance.PlaySFX(AudioManager.instance.drag);
    }
}
