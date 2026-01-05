using UnityEngine;

public class AudioManager : MonoBehaviour
{
    public static AudioManager Instance;

    [Header("Audio Sources")]
    public AudioSource bgmSource;
    public AudioSource sfxSource;

    [Header("Clips")]
    public AudioClip bgm;
    public AudioClip drag;
    public AudioClip drog;
    public AudioClip lose;
    public AudioClip pop;
    public AudioClip wood;
    public AudioClip win;
    public AudioClip warningTick;
    public AudioClip match;

    bool soundOn = true;

    void Awake()
    {
        if (Instance == null)
        {
            Instance = this;
            DontDestroyOnLoad(gameObject);
        }
        else
        {
            Destroy(gameObject);
            return;
        }
    }

    void Start()
    {
        if(GameManager.instance.audio)
            PlayBGM();
    }

    public void PlayBGM()
    {
        if (!soundOn) return;

        bgmSource.clip = bgm;
        bgmSource.loop = true;
        bgmSource.Play();
    }

    public void PlaySFX(AudioClip clip)
    {
        if (!soundOn || clip == null) return;
        sfxSource.PlayOneShot(clip);
    }

    public void ToggleSound()
    {
        soundOn = !soundOn;

        if (soundOn) bgmSource.Play();
        else bgmSource.Stop();
    }
    public void StopBGM()
    {
        if (bgmSource == null) return;
        bgmSource.Stop();
    }

}
