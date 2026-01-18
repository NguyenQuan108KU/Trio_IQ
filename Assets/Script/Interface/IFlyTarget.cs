using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public interface IFlyTarget
{
    bool IsValid(MatchContext ctx);
    Transform GetAttachPoint(DragItem item, MatchContext ctx);
    void OnArrived(int count);
}
