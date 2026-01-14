using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using DG.Tweening;

public class SliderUI : MonoBehaviour
{
    public Slider slider;
    public float duration = 0.3f;

    private Tween sliderTween;

    private void OnEnable()
    {
        GameEvent.SliderValue.AddListener(AddValue);
    }

    private void OnDisable()
    {
        GameEvent.SliderValue.RemoveListener(AddValue);
        sliderTween?.Kill();
    }

    public void AddValue()
    {
        float targetValue = Mathf.Min(slider.value + 1f, slider.maxValue);

        sliderTween?.Kill();
        sliderTween = slider.DOValue(targetValue, duration);
    }
}
