using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GameManager : MonoBehaviour
{
    public static GameManager Instance;
    [SerializeField]
    [LunaPlaygroundField("Count Click", 0, "Click")]
    public int clicksToLog = 20;

    public int clickCount = 0;
    public bool isClick;
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
