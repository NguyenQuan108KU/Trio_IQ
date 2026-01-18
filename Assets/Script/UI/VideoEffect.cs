using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Video;

public class VideoEffect : MonoBehaviour
{
    [Header("References")]
    public VideoPlayer videoPlayer;
    public RectTransform rawImageRect;

    [Header("Config")]
    public float lifeTime = 1f;
    public bool autoPlayOnEnable = true;

    void Awake()
    {
        if (videoPlayer == null)
            videoPlayer = GetComponentInChildren<VideoPlayer>();

        // Khi video chạy xong thì tự hủy
        //videoPlayer.loopPointReached += OnVideoFinished;
    }
    private void Update()
    {
           // Play();
    }
    void OnEnable()
    {
        if (autoPlayOnEnable)
        {
            Play();
        }
    }
    public void Play()
    {
        videoPlayer.time = 0;
        videoPlayer.Play();

        // fallback nếu video không bắn event
        //Invoke(nameof(DestroySelf), lifeTime);
    }
    void OnVideoFinished(VideoPlayer vp)
    {
        DestroySelf();
    }

    void DestroySelf()
    {
        CancelInvoke();
        Destroy(gameObject);
    }

    public void SetPosition(Vector2 screenPos)
    {
        rawImageRect.position = screenPos;
    }
}
