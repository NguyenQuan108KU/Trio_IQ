using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEngine;
public enum TargetType
{
    IQ,
    Age
}
public class UpdateTarget : MonoBehaviour
{
    public TargetType targetType;
    [Header("---------- Timer ----------")]
    public float maxTimer;
    public float countTimer;
    bool isRunning;


    [Header("----------- Age ----------")]
    public TMP_Text ageText;
    public int age;
    public int pointUp;
    public int pointDown;
    private void OnEnable()
    {
        GameEvent.TimeOut.AddListener(StartTimer);
        GameEvent.DownScore.AddListener(DownPoint);
    }
    private void OnDisable()
    {
        GameEvent.TimeOut.RemoveListener(StartTimer);
        GameEvent.DownScore.RemoveListener(DownPoint);
    }
    private void Start()
    {
        ageText.text = age.ToString();
    }
    void StartTimer()
    {
        isRunning = true;
        countTimer = maxTimer;
    }

    void Update()
    {
        if (!isRunning) return;

        countTimer -= Time.deltaTime;

        if (countTimer <= 0)
        {
            countTimer = maxTimer;
            UpPoint();
        }
    }
    public void UpPoint()
    {
        age += pointUp;
        ageText.text = age.ToString();
    }
    public void DownPoint()
    {
        countTimer = maxTimer;

        age = Mathf.Max(0, age - pointDown);
        ageText.text = age.ToString();

        if (age == 0)
        {
            isRunning = false;
            GameManager.instance.finishGame = true;
            GameEvent.OnShowEndCard?.Invoke(EndCardType.Win);

            if (AudioManager.instance != null)
            {
                AudioManager.instance.PlaySFX(AudioManager.instance.excell);
                AudioManager.instance.PlaySFX(AudioManager.instance.win);
            }
        }
    }

}
