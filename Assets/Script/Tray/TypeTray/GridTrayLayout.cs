using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GridTrayLayout : ITrayLayout
{
    public void Apply(List<Transform> trays, TrayConfig config)
    {
        for (int i = 0; i < trays.Count; i++)
        {
            int row = i / config.columnCount;
            int col = i % config.columnCount;

            Vector3 pos = new Vector3();
            pos.x += col * config.spacingX;
            pos.y -= row * config.spacingY;
            trays[i].localPosition = pos;
        }
    }
}
