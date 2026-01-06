using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;

public class TicketManager : MonoBehaviour
{
    public static TicketManager instance;
    [Header("Tickets")]
    public List<Transform> tickets = new List<Transform>();

    [Header("Anim")]
    public float moveTime = 0.25f;

    [Header("Scale")]
    public Vector3 bigScale = new Vector3(0.19f, 0.19f, 0.19f);
    public Vector3 smallScale = new Vector3(0.12f, 0.12f, 0.12f);

    [Header("Layout")]
    public float slotX;
    public float slotY;

    Vector3 bigSlot;
    public List<Vector3> smallSlots = new List<Vector3>();

    [Header("FX")]
    public ParticleSystem removeFxPrefab;


    // ================= START =================
    void Awake()
    {
        if(instance == null)
            instance = this;
        else
            Destroy(instance);

        BuildSlots();
        SetupInitialTickets();
    }
    private void Update()
    {
        
    }
    void SetupInitialTickets()
    {
        for (int i = 0; i < tickets.Count; i++)
        {
            Transform t = tickets[i];

            t.DOKill();

            if (i == 0)
            {
                t.localPosition = bigSlot;
                t.localScale = bigScale;
            }
            else
            {
                int slotIndex = i - 1;
                if (slotIndex >= smallSlots.Count) break;

                t.localPosition = smallSlots[slotIndex];
                t.localScale = smallScale;
            }
        }
    }
    void BuildSlots()
    {
        bigSlot = tickets[0].localPosition;

        smallSlots.Clear();

        // Hàng ngang trên
        for (int i = 1; i <= 3; i++)
        {
            smallSlots.Add(tickets[i].transform.localPosition);
        }

        // Các hàng dọc bên dưới
        for (int i = 4; i <= tickets.Count - 1; i++)
        {
            smallSlots.Add(tickets[i].transform.localPosition);
        }
    }


    public void AddTicket(Transform ticket)
    {
        ticket.SetParent(transform, false);
        ticket.localPosition = Vector3.zero;
        ticket.localRotation = Quaternion.identity;
        ticket.localScale = Vector3.zero;

        tickets.Add(ticket);

        ticket.DOScale(smallScale, 0.2f)
              .SetEase(Ease.OutBack);

        Relayout();
    }
    void PlayRemoveFX(Transform ticket)
    {
        if (removeFxPrefab == null) return;

        ParticleSystem fx = Instantiate(
            removeFxPrefab,
            ticket.position,
            Quaternion.identity,
            ticket 
        );

        fx.transform.localPosition = Vector3.zero; // đúng tâm ticket
        fx.Play();
    }


    public void RemoveTicket(Transform ticket)
    {
        if (!tickets.Contains(ticket)) return;

        tickets.Remove(ticket);
        //PlayRemoveFX(ticket);
        ticket.DOScale(0f, 0.5f)
              .SetEase(Ease.InBack)
              .OnComplete(() =>
              {
                  Destroy(ticket.gameObject);
                  Relayout();
              });
    }

    void Relayout()
    {
        for (int i = 0; i < tickets.Count; i++)
        {
            Transform t = tickets[i];
            t.DOKill();

            if (i == 0)
            {
                t.DOLocalMove(bigSlot, moveTime).SetEase(Ease.OutCubic);
                t.DOScale(bigScale, moveTime).SetEase(Ease.OutCubic);
            }
            else
            {
                int slotIndex = i - 1;
                if (slotIndex >= smallSlots.Count)
                    continue;
                t.DOLocalMove(smallSlots[slotIndex], moveTime).SetEase(Ease.OutCubic);
                t.DOScale(smallScale, moveTime).SetEase(Ease.OutCubic);
            }
        }
    }
    public Transform FindTicketBySprite(Sprite sprite)
    {
        if (sprite == null) return null;

        foreach (var t in tickets)
        {
            if (t == null) continue;

            TicketIcon icon = t.GetComponentInChildren<TicketIcon>();
            if (icon == null) continue;

            SpriteRenderer sr = icon.GetComponent<SpriteRenderer>();
            if (sr == null || sr.sprite == null) continue;

            if (sr.sprite == sprite)   
                return t;
        }
        return null;
    }


}
