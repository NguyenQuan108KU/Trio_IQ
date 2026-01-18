using UnityEngine;

public class FlyToPackTarget : IFlyTarget
{
    PackTarget pack;

    public bool IsValid(MatchContext ctx)
    {
        var item = ctx.items[0];
        pack = PackManager.instance.GetPackInScene(item.itemType);

        return pack != null && pack.attachPoint != null;
    }

    public Transform GetAttachPoint(DragItem item, MatchContext ctx)
    {
        return pack.attachPoint;
    }

    public void OnArrived(int count)
    {
        //pack.AddItems(count);
    }
}
