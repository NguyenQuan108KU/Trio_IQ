using TMPro;
using UnityEngine;
using UnityEngine.UI;
using System.Collections;

public class TimerUI : MonoBehaviour
{
    public TMP_Text timerText;
    public Color warningColor = Color.red;

    public GameObject backgroundWarning;
    public float bgMinAlpha = 0.3f;
    public float bgMaxAlpha = 1f;

    private Image bgImage;
    private Color originalColor;
    private Coroutine blinkCo;

    private void Awake()
    {
        originalColor = timerText.color;

        if (backgroundWarning != null)
        {
            bgImage = backgroundWarning.GetComponent<Image>();
            backgroundWarning.SetActive(false);
        }
    }

    private void OnEnable()
    {
        GameEvent.OnTimerTick.AddListener(UpdateText);
        GameEvent.OnTimerWarning.AddListener(OnWarning);
        GameEvent.OnGameEnd.AddListener(StopWarning);
    }

    private void OnDisable()
    {
        GameEvent.OnTimerTick.RemoveListener(UpdateText);
        GameEvent.OnTimerWarning.RemoveListener(OnWarning);
        GameEvent.OnGameEnd.RemoveListener(StopWarning);
    }

    void UpdateText(int seconds)
    {
        int m = seconds / 60;
        int s = seconds % 60;
        timerText.text = $"{m:00}:{s:00}";
    }

    void OnWarning()
    {
        timerText.color = warningColor;

        if (blinkCo == null && bgImage != null)
        {
            backgroundWarning.SetActive(true);
            blinkCo = StartCoroutine(Blink());
        }
    }

    IEnumerator Blink()
    {
        bool visible = false;

        while (true)
        {
            visible = !visible;
            Color c = bgImage.color;
            c.a = visible ? bgMaxAlpha : bgMinAlpha;
            bgImage.color = c;
            yield return new WaitForSeconds(0.5f);
        }
    }
    void StopWarning()
    {
        if (blinkCo != null)
        {
            StopCoroutine(blinkCo);
            blinkCo = null;
        }

        if (bgImage != null)
            backgroundWarning.SetActive(false);

        timerText.color = originalColor;
    }

}