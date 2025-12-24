using UnityEngine;

public class TutorialManager : MonoBehaviour
{
    public static TutorialManager instance;

    public GameObject handPrefab;
    private GameObject currentHand;

    private void Awake()
    {
        if (instance == null)
            instance = this;
        else
            Destroy(gameObject);
    }

    /// <summary>
    /// Sinh tay chỉ từ item → slot
    /// </summary>
    public void ShowHandHint(Slot fromSlot, Slot toSlot, DragItem item)
    {
        HideHint();

        currentHand = Instantiate(handPrefab);
        currentHand.transform.SetParent(null);

        HandHint hand = currentHand.GetComponent<HandHint>();
        hand.Play(fromSlot, toSlot, item);
    }


    public void HideHint()
    {
        if (currentHand != null)
        {
            var hand = currentHand.GetComponent<HandHint>();
            if (hand != null)
                hand.Stop();

            Destroy(currentHand);
            currentHand = null;
        }
    }
}
