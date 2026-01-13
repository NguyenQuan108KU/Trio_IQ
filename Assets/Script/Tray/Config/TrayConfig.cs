using System.Collections.Generic;
using UnityEngine;

public enum TrayLayoutType
{
    Vertical,
    Grid,
    VerticalSpecial
}

[CreateAssetMenu(menuName = "Game/LevelConfig")]
public class TrayConfig : ScriptableObject
{
    public TrayLayoutType layoutType;
    public int columnCount;
    public float spacingX;
    public float spacingY;
    public Vector3 firstTrayPosition;  //SpecialTray
}
