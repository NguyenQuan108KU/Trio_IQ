using UnityEngine;

public interface ITrayCollapse
{
    void Collapse(Transform tray, System.Action onComplete);
}
