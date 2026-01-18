using UnityEngine;

public class FlyToTicketTarget : IFlyTarget
{
    public Transform GetAttachPoint(DragItem item, MatchContext ctx)
    {
        //return TicketManager.Instance.GetTicketBySprite(item.sprite);
        return null;
    }

    public bool IsValid(MatchContext ctx) => true;

    public void OnArrived(int count)
    {
        //TicketManager.Instance.Add(count);
    }
}
