using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class VerticalSpecialTrayLayout : ITrayLayout
{
    public void Apply(List<Transform> trays, TrayConfig config)
    {
        if (trays == null || trays.Count == 0)
            return;
        trays[0].localPosition = config.firstTrayPosition;

        float startY = (trays.Count - 2) * config.spacingY * 0.5f;

        for (int i = 1; i < trays.Count; i++)
        {
            trays[i].localPosition = new Vector3(0,startY - (i - 1) * config.spacingY, 0);
        }
    }
}
