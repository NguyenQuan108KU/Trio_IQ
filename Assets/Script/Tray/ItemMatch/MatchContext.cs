using System.Collections.Generic;
using UnityEngine;

public class MatchContext
{
    public Tray tray;
    public List<DragItem> items;
    public Transform root;
    public MatchConfig config;
    public Transform target;
    public System.Action onComplete;
}
