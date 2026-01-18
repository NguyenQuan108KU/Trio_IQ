using DG.Tweening;
using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEngine;

public class SetText : Anim
{
    public static SetText instance;
    private void Awake()
    {
        if (instance == null)
            instance = this;
        else
            Destroy(gameObject);
    }
    [Header("Text Settings")]
    public TMP_Text ageText;
    public int age;

    [Header("Point")]
    public int pointUp;
    public int pointDown;

    [Header("Timer")]
    public float maxTimer;
    public float countTimer;

    public GameObject anchor;
    private void Start()
    {
        ageText.text = age.ToString();
        countTimer = maxTimer;
    }
    private void Update()
    {
        if (!GameManager.instance.startGame) return;
        countTimer -= Time.deltaTime;
        if(countTimer <= 0 && !GameManager.instance.finishGame)
        {
            countTimer = maxTimer;
            UpAge();
        }
    }
    public override void DotPunch()
    {
        base.DotPunch();
    }
    public override void DotNudge()
    {
        base.DotNudge();
        AudioManager.instance.PlaySFX(AudioManager.instance.drag);
        DownAge();
        countTimer = maxTimer;
    }
    public void UpAge()
    {
        age += pointUp;
        ageText.text = age.ToString();
    }
    public void DownAge()
    {
        age -= pointDown;
        ageText.text = age.ToString();
        if(age <= 0)
        {
            GameManager.instance.FinishGame();
        }
    }
}
