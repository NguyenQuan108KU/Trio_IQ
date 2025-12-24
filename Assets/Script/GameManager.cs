using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEngine;

public class GameManager : MonoBehaviour
{
    public static GameManager Instance;
    [SerializeField]
    [LunaPlaygroundField("Count Click", 0, "Click")]
    public int clicksToLog = 15;

    public int clickCount = 0;
    public bool isClick;
    public bool finishGame = false;
    public TextMeshProUGUI textPoint;
    public int point = 0;
    public GameObject tutGame;
    private void Awake()
    {
        if(Instance == null)
            Instance = this;
        else
            Destroy(gameObject);
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
