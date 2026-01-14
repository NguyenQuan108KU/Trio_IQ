using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Events;

public static class GameEvent
{
    //Match
    public static UnityEvent<Tray, List<DragItem>> OnTrayMatched = new UnityEvent<Tray, List<DragItem>>();

    //Target
    public static UnityEvent OnAddPoint = new UnityEvent();
    public static UnityEvent<EndCardType> OnShowEndCard = new UnityEvent<EndCardType>();

    //Timer
    public static UnityEvent StartTimer = new UnityEvent();
    public static UnityEvent StopTimer = new UnityEvent();
    public static UnityEvent<int> OnTimerTick = new UnityEvent<int>(); // update UI
    public static UnityEvent OnTimerWarning = new UnityEvent();

    //Lock
    public static UnityEvent LockItem = new UnityEvent();
    public static UnityEvent UnLockItem = new UnityEvent();

    //GameEnd
    public static UnityEvent OnGameEnd = new UnityEvent();

    //Start Game
    public static UnityEvent TimeOut = new UnityEvent();
    
    //DownScore
    public static UnityEvent DownScore = new UnityEvent();

    //Slider
    public static UnityEvent SliderValue = new UnityEvent();

}
