using UnityEngine;
using TMPro;
using System.Collections;

public class CountdownTimer : MonoBehaviour
{
    public static CountdownTimer instance;
    public TMP_Text timerText;
    public int startSeconds = 30;

    [Header("Warning Effect")]
    public int warningTime = 5;
    public Color warningColor = Color.red;
    public float pulseScale = 1.3f;
    public float pulseSpeed = 0.5f;

    private Coroutine countdownCo;
    private Coroutine pulseCo;
    private Vector3 originalScale;
    private Color originalColor;

    public GameObject backgroundWarning;
    public GameObject timeUpPanel;
    public bool hasStarted = false;


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
    void Start()
    {
        originalScale = timerText.transform.localScale;
        originalColor = timerText.color;
        //StartCountdown();
    }

    public void StartCountdown()
    {
        if (countdownCo != null)
            StopCoroutine(countdownCo);

        countdownCo = StartCoroutine(CountdownRoutine());
    }

    IEnumerator CountdownRoutine()
    {
        int timeLeft = startSeconds;

        while (timeLeft > 0)
        {
            UpdateText(timeLeft);

            // 🔊 phát âm thanh
            if (timeLeft <= warningTime)
            {
                AudioManager.Instance.PlaySFX(AudioManager.Instance.warningTick);

                timerText.color = warningColor;
                backgroundWarning.SetActive(true);
            }
            yield return new WaitForSeconds(1f);
            timeLeft--;
        }

        UpdateText(0);
        OnTimeUp();
    }



    void UpdateText(int totalSeconds)
    {
        //AudioManager.Instance.PlaySFX(AudioManager.Instance.pop);
        int minutes = totalSeconds / 60;
        int seconds = totalSeconds % 60;
        timerText.text = $"{minutes:00}:{seconds:00}";
    }

    //IEnumerator PulseText()
    //{
    //    while (true)
    //    {
    //        // to lên
    //        yield return ScaleTo(originalScale * pulseScale);
    //        // nhỏ lại
    //        yield return ScaleTo(originalScale);
    //    }
    //}

    IEnumerator ScaleTo(Vector3 target)
    {
        Vector3 start = timerText.transform.localScale;
        float t = 0f;

        while (t < pulseSpeed)
        {
            t += Time.deltaTime;
            timerText.transform.localScale = Vector3.Lerp(start, target, t / pulseSpeed);
            yield return null;
        }
    }

    void OnTimeUp()
    {
        timerText.text = "00:00";

        if (timeUpPanel != null)
        {
            AudioManager.Instance.PlaySFX(AudioManager.Instance.lose);
            timeUpPanel.GetComponent<EndCart_Lose>()?.Show();
            GameManager.Instance.finishGame = true;
            GameManager.Instance.InstallGame();
            GameManager.Instance.EndGame();
        }
    }


}
