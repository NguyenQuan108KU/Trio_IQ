using System.Collections;
using System.Collections.Generic;
using UnityEngine;
public enum EndCardType
{
    Win,
    Lose,
    Booter
}
public class EndCardManager : MonoBehaviour
{
    public GameObject winEC;
    public GameObject loseEC;
    public GameObject booster;
    private void OnEnable()
    {
        GameEvent.OnShowEndCard.AddListener(OnShowEndCard);
    }

    private void OnDisable()
    {
        GameEvent.OnShowEndCard.RemoveListener(OnShowEndCard);
    }

    private void OnShowEndCard(EndCardType type)
    {
        gameObject.SetActive(true);
        winEC.SetActive(type == EndCardType.Win);
        loseEC.SetActive(type == EndCardType.Lose);
        Luna.Unity.LifeCycle.GameEnded();
    }
}
