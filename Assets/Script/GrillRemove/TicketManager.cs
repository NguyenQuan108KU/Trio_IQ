using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;

public class TicketManager : MonoBehaviour
{
    [Header("Tickets")]
    public List<Transform> tickets = new List<Transform>();

    [Header("Anim")]
    public float moveTime = 0.25f;

    [Header("Scale")]
    public Vector3 bigScale = new Vector3(0.185f, 0.185f, 0.185f);
    public Vector3 smallScale = new Vector3(0.11f, 0.11f, 0.11f);

    [Header("Layout")]
    public float slotX;
    public float slotY;

    Vector3 bigSlot;
    public List<Vector3> smallSlots = new List<Vector3>();

    // ================= START =================
    void Awake()
    {
        BuildSlots();
        SetupInitialTickets();
    }
    private void Update()
    {
        if (Input.GetMouseButtonDown(0))
        {
            RemoveTicket(tickets[0]);
        }
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

    public void RemoveTicket(Transform ticket)
    {
        if (!tickets.Contains(ticket)) return;

        tickets.Remove(ticket);

        ticket.DOScale(0f, 0.2f)
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
                t.DOScale(bigScale, moveTime).SetEase(Ease.OutBack);
            }
            else
            {
                int slotIndex = i - 1;
                if (slotIndex >= smallSlots.Count)
                    continue;
                t.DOLocalMove(smallSlots[slotIndex], moveTime).SetEase(Ease.OutCubic);
                t.DOScale(smallScale, moveTime).SetEase(Ease.OutBack);
            }
        }
    }

}
