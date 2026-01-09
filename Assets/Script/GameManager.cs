using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEngine;

public class GameManager : MonoBehaviour
{
    public static GameManager instance;
    [Header("Point")]
    public TextMeshProUGUI pointText;
    public int point;
    public GameObject ECWin;
    public bool startTimer;
    public int ticketCount;
    [Header("Click")]
    [LunaPlaygroundField("Enable Click", 0, "Click")]
    public bool isClickToLog;
    [SerializeField]
    [LunaPlaygroundField("Count Click", 0, "Click")]
    public int clicksToLog = 15;

    // ================== TIMER (THÊM) ==================
    //[Header("Timer")]
    //[LunaPlaygroundField("Enable Timer", 0, "Timer")]
    //public bool isTimer;

    //[LunaPlaygroundField("Audio", 0, "Audio")]
    //public bool audio;

    [Header("Match")]
    [LunaPlaygroundField("Enable Match", 0, "Match")]
    public bool isMatch;


    public int clickCount = 0;
    public bool isClick;
    public bool finishGame = false;
    public bool startGame = false;
    public bool isCheckWin;
    public bool isCheckLose;
    public bool isClickStore;

    private void Awake()
    {
        if (instance == null)
        {
            instance = this;
        }
        else
        {
            Destroy(gameObject);
        }

    }
    private void Update()
    {
        if (Input.GetMouseButtonDown(0) && isClickStore)
        {
            Luna.Unity.Playable.InstallFullGame();
        }
        if (startTimer)
            CountdownTimer.instance.showPA();
    }
    public void AddPoint(int p)
    {
        point += p;
        pointText.text = point.ToString();
        //if(point == 5)
        //{
        //    isCheckWin = true;
        //    CountdownTimer.instance.StopCountdown();
        //    GameManager.instance.finishGame = true;
        //    AudioManager.instance.PlaySFX(AudioManager.instance.win);
        //    AudioManager.instance.StopBGM();
        //}
    }
    public void FinishGame()
    {
        isCheckWin = true;
        GameManager.instance.ECWin.SetActive(true);
        GameManager.instance.finishGame = true;
        AudioManager.instance.PlaySFX(AudioManager.instance.win);
        AudioManager.instance.PlaySFX(AudioManager.instance.excell);
    }
    public void OnGlobalClick()
    {
        if (!isClickToLog || finishGame) return;

        clickCount++;
        if (clickCount >= clicksToLog)
        {
            if (!isClick)
            {
                isClick = true;
                Luna.Unity.LifeCycle.GameEnded();
            }
            Luna.Unity.Playable.InstallFullGame();
        }
    }



    public void InstallGame()
    {
        Luna.Unity.Playable.InstallFullGame();
    }
    public void EndGame()
    {
        Luna.Unity.LifeCycle.GameEnded();
    }
}
