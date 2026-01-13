using UnityEngine;
using System.Collections;

public class TimeManager : MonoBehaviour
{
    public int startSeconds = 30;
    public int warningTime = 5;

    private int timeLeft;
    private Coroutine timerCo;
    private bool isFinished;

    private void OnEnable()
    {
        GameEvent.StartTimer.AddListener(StartTimer);
        GameEvent.StopTimer.AddListener(StopTimer);
    }

    private void OnDisable()
    {
        GameEvent.StartTimer.RemoveListener(StartTimer);
        GameEvent.StopTimer.RemoveListener(StopTimer);
    }

    void StartTimer()
    {
        StopTimer();

        timeLeft = startSeconds;
        isFinished = false;

        timerCo = StartCoroutine(TimerRoutine());
    }

    IEnumerator TimerRoutine()
    {
        while (timeLeft > 0)
        {
            GameEvent.OnTimerTick.Invoke(timeLeft);

            if (timeLeft <= warningTime)
                GameEvent.OnTimerWarning.Invoke();

            yield return new WaitForSeconds(1f);
            timeLeft--;
        }

        GameEvent.OnTimerTick.Invoke(0);
        OnTimeUp();
    }

    void OnTimeUp()
    {
        if (isFinished) return;
        isFinished = true;

        StopTimer();
        GameEvent.OnGameEnd.Invoke();
        GameEvent.OnShowEndCard.Invoke(EndCardType.Lose);
        GameEvent.LockItem?.Invoke();
    }

    void StopTimer()
    {
        if (timerCo != null)
        {
            StopCoroutine(timerCo);
            timerCo = null;
        }
    }
}
