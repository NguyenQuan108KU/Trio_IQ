using System.Collections;
using UnityEngine;
using DG.Tweening;

public class CloseBoxStep : IMatchStep
{
    private GameObject lidPrefab;
    private float appearTime;
    private float closeTime;

    public CloseBoxStep(
        GameObject lidPrefab,
        float appearTime = 0.08f,
        float closeTime = 0.35f)
    {
        this.lidPrefab = lidPrefab;
        this.appearTime = appearTime;
        this.closeTime = closeTime;
    }

    public IEnumerator Execute(MatchContext ctx)
    {
        Transform tray = ctx.tray.transform;

        GameObject lid = GameObject.Instantiate(lidPrefab, tray);

        // Spawn ẩn
        lid.transform.localPosition = new Vector3(0f, 0.8f, 0f);
        lid.transform.localRotation = Quaternion.identity;
        lid.transform.localScale = Vector3.zero;

        Sequence seq = DOTween.Sequence();

        seq.Append(
            lid.transform.DOScale(Vector3.one, appearTime)
                .SetEase(Ease.OutCubic)
        );
        seq.AppendCallback(() =>
        {
            AudioManager.instance.PlaySFX(AudioManager.instance.closeBox);
        });

        seq.Append(
            lid.transform.DOLocalMove(new Vector3(0f, 0.1f, 0f), closeTime)
                .SetEase(Ease.OutQuart)
        );


        yield return seq.WaitForCompletion();
    }
}
