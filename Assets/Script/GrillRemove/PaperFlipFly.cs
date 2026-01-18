using UnityEngine;
using DG.Tweening;

public class PaperFlipFly : MonoBehaviour
{
    public float flipTime = 0.6f;

    public Vector3 rotateAngle = new Vector3(0, 0, -140f);
    public Vector3 moveOffset = new Vector3(2.5f, 1.5f, 0f);
    public float scaleEnd = 0.2f;
    private void Update()
    {
        if(Input.GetKeyDown(KeyCode.Space))
        {
            Play();
        }
    }
    public void Play()
    {
        transform.DOKill();

        Sequence seq = DOTween.Sequence();
        seq.Join(
            transform.DORotate(rotateAngle, flipTime)
                     .SetEase(Ease.OutCubic)
        );

        seq.Join(
            transform.DOMove(transform.position + moveOffset, flipTime)
                     .SetEase(Ease.OutQuad)
        );

        seq.Join(
            transform.DOScale(scaleEnd, flipTime)
                     .SetEase(Ease.InQuad)
        );

        seq.OnComplete(() =>
        {
            Destroy(gameObject);
        });
    }
}
