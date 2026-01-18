using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GridWithCenterLayout : ITrayLayout
{
    public void Apply(List<Transform> trays, TrayConfig config)
    {
        int colCount = config.columnCount;
        int totalSlot = colCount * colCount;

        int trayIndex = 0;

        for (int i = 0; i < totalSlot; i++)
        {
            if (i == totalSlot / 2)
                continue;

            int row = i / colCount;
            int col = i % colCount;

            Vector3 pos = Vector3.zero;
            pos.x = col * config.spacingX;
            pos.y = -row * config.spacingY;

            trays[trayIndex].localPosition = pos;
            trayIndex++;
        }
    }
}
