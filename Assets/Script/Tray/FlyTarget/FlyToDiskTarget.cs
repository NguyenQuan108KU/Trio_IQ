using DG.Tweening;
using System.Collections.Generic;
using UnityEngine;

public class FlyToDiskTarget : IFlyTarget
{
    GameObject diskPrefabs;
    Transform disPosition;
    public FlyToDiskTarget(Transform disk)
    {
        this.disPosition = disk;
    }

    public bool IsValid(MatchContext ctx)
    {
        return diskPrefabs != null;
    }

    public Transform GetAttachPoint(DragItem item, MatchContext ctx)
    {
        return diskPrefabs.transform;
    }

    public void OnArrived(int count) { }

}
