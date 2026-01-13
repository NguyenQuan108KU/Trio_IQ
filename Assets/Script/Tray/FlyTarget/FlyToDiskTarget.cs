using UnityEngine;

public class FlyToDiskTarget : IFlyTarget
{
    Transform disk;

    public FlyToDiskTarget(Transform disk)
    {
        this.disk = disk;
    }

    public bool IsValid(MatchContext ctx)
    {
        return disk != null;
    }

    public Transform GetAttachPoint(DragItem item, MatchContext ctx)
    {
        return disk;
    }

    public void OnArrived(int count) { }
}
