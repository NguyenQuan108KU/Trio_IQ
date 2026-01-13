using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class VerticalTrayLayout : ITrayLayout
{
    public void Apply(List<Transform> trays, TrayConfig config)
    {
        float startY = (trays.Count - 1) * config.spacingY * 0.5f;

        for (int i = 0; i < trays.Count; i++)
        {
            trays[i].localPosition = new Vector3(0, startY - i * config.spacingY, 0);
        }
    }
}
