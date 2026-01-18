using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEngine;

public class Target : MonoBehaviour
{
    public TextMeshProUGUI targetText;
    public bool isFinished;
    public float timeDelay;
    public int target;
    public int maxPoint;
    public int point;
    private void OnEnable()
    {
        GameEvent.OnAddPoint.AddListener(AddPoint);
    }
    private void OnDisable()
    {
        GameEvent.OnAddPoint.RemoveListener(AddPoint);
    }
    public void AddPoint()
    {
        if (isFinished) return;
        target += point;
        targetText.text = target.ToString();
        if (target >= maxPoint)
        {
            isFinished = true;
            GameEvent.LockItem?.Invoke();
            StartCoroutine(ShowEndCard());
        }
    }
    private IEnumerator ShowEndCard()
    {
        yield return new WaitForSeconds(timeDelay);
        GameEvent.OnShowEndCard.Invoke(EndCardType.Win);
        
    }
}
