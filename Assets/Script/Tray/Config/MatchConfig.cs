using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[CreateAssetMenu(fileName = "LevelMatchConfig",menuName = "Game/Match/Level Match Config")]
public class MatchConfig : ScriptableObject
{
    [Header("Steps")]
    public bool useFire = true;
    public bool useEffect = true;
    public bool useBlink = true;
    public bool useGather = true;
    public bool useFlyToTarget = true;
    public bool useCloseBox = true;
    public bool useTextPerfect = true;

    [Header("Target")]
    public FlyType flyType;
}
public enum FlyType
{
    Pack,
    Disk,
    Ticket,
    Text,
    CloseBox
}
