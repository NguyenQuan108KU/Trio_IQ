using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class TutorialManager : MonoBehaviour
{
    public static TutorialManager instance;

    public GameObject handPrefab;
    private GameObject currentHand;

    public GameObject tut;
    public float timer;
    public float countTimer;

    void Awake()
    {
        if (instance == null) instance = this;
        else Destroy(gameObject);
    }
    private void Start()
    {
        countTimer = timer;
    }
    private void Update()
    {
        if (tut == null) return;
        countTimer -= Time.deltaTime;
        if (countTimer < 0 && tut != null)
        {
            tut.gameObject.SetActive(true);
        }
        if (Input.GetMouseButtonDown(0))
        {
            tut.gameObject.SetActive(false);
            countTimer = timer;
        }
    }

    public void ShowHandHint(Slot fromSlot, Slot toSlot, DragItem item)
    {
        HideHint();

        currentHand = Instantiate(handPrefab);
        HandHint hand = currentHand.GetComponent<HandHint>();
        hand.Play(fromSlot, toSlot, item);
    }

    public void HideHint()
    {
        if (currentHand != null)
        {
            var hand = currentHand.GetComponent<HandHint>();
            if (hand != null) hand.Stop();

            Destroy(currentHand);
            currentHand = null;
        }
    }
    public bool IsShowing => currentHand != null;
}

