using System.Collections.Generic;
using UnityEngine;

public interface ITrayLayout
{
    void Apply(List<Transform> trays, TrayConfig config);
}
