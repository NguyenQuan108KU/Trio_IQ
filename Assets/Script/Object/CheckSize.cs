using UnityEngine;

[RequireComponent(typeof(Camera))]
public class CheckSize : MonoBehaviour
{
    [Header("Camera Size")]
    public float size16by9 = 4.6f;   // 16:9
    public float size18by9 = 5.0f;   // 18:9
    public float sizeLong = 5.6f;   // 20:9+

    [Header("Disk")]
    public Transform diskTransform;
    public Vector3 diskPos16by9 = new Vector3(3.55f, 2.87f, 0f);
    public Vector3 diskPosLong = new Vector3(1.15f, 3.6f, 0f);

    private Camera cam;
    private float lastAspect;

    void Awake()
    {
        cam = GetComponent<Camera>();
        UpdateCamera();
    }

    void Update()
    {
        // aspect đổi → layout đổi (Editor + WebGL + Luna đều OK)
        if (Mathf.Abs(cam.aspect - lastAspect) > 0.01f)
        {
            UpdateCamera();
        }
    }

    void UpdateCamera()
    {
        lastAspect = cam.aspect;

        bool isPortrait = cam.aspect < 1f;

        if (!isPortrait)
        {
            cam.orthographicSize = size16by9;

            if (diskTransform)
                diskTransform.position = diskPos16by9;

            return;
        }

        float ratio = 1f / cam.aspect;

        if (ratio < 1.8f)
        {
            cam.orthographicSize = size16by9;

            if (diskTransform)
                diskTransform.position = diskPos16by9;
        }
        else
        {
            cam.orthographicSize = sizeLong;

            if (diskTransform)
                diskTransform.position = diskPosLong;
        }
    }

}
