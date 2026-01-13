using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;
using UnityEngine.Timeline;

public class PerfectStep : IMatchStep
{
    private List<GameObject> textList;
    private List<AudioClip> audioClipList;

    public PerfectStep(List<GameObject> textList, List<AudioClip> audioList)
    {
        this.textList = textList;
        this.audioClipList = audioList;
    }

    public IEnumerator Execute(MatchContext ctx)
    {
        if (textList == null || textList.Count == 0 || ctx.tray == null)
            yield break;

        int index = Random.Range(0, textList.Count);

        GameObject text = Object.Instantiate(textList[index], ctx.tray.transform);
        AudioManager.instance.PlaySFX(audioClipList[0]);

        text.transform.localPosition = new Vector3(0f, 0.85f, 0f);

        text.transform.localScale = Vector3.zero;

        SpriteRenderer sr = text.GetComponent<SpriteRenderer>();
        if (sr == null)
            yield break;

        Color c = sr.color;
        c.a = 1f;
        sr.color = c;

        float scaleTime = 0.25f;
        float moveTime = 0.7f;

        Sequence seq = DOTween.Sequence();

        seq.Append(
            text.transform.DOScale(0.7f, scaleTime)
                .SetEase(Ease.OutBack)
        );

        seq.Append(
            text.transform.DOLocalMoveY(3f, moveTime)
                .SetEase(Ease.OutCubic)
        );
        seq.Join(
            sr.DOFade(0f, moveTime)
        );

        yield return seq.WaitForCompletion();

        Object.Destroy(text);
    }

}
