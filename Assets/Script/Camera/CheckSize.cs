using UnityEngine;

[RequireComponent(typeof(Camera))]
public class CheckSize : MonoBehaviour
{
    [Header("Camera Size")]
    public float size16by9 = 4.6f;   // 16:9
    public float size18by9 = 5.0f;   // 18:9
    public float sizeLong = 5.6f;   // 20:9+
    public float sizeOrthographic;

    [Header("Disk")]
    public Transform diskTransform;
    public Vector3 diskPos16by9 = new Vector3(3.55f, 2.87f, 0f);
    public Vector3 diskPosLong = new Vector3(1.15f, 3.6f, 0f);

    public GameObject trayTransform;
    public Vector3 trayOrthographic;
    public Transform trayDefault;
    //public Transform trayManager;
    //public GameObject button_doc;
    //public GameObject target;
    //public GameObject timer;
    //public GameObject logoGame;
    //public GameObject buttonGame;

    private Camera cam;
    private float lastAspect;

    void Awake()
    {
        cam = GetComponent<Camera>();
        UpdateCamera();
    }
    void Update()
    {
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
            //cam.orthographicSize = size16by9;
            cam.orthographicSize = sizeOrthographic;
            if(trayDefault != null)
                trayTransform.transform.position = new Vector3(3.32f, 1.5f, 0f);
            //-1.9, -4.85
            //button_doc.SetActive(false);
            //trayManager.transform.position = new Vector3(0, -0.75f, 0);
            //target.GetComponent<RectTransform>().anchoredPosition = new Vector2(173, -127);
            //timer.GetComponent<RectTransform>().anchoredPosition = new Vector2(-281, -127);
            //diskTransform.transform.position = new Vector3(0, 3.3f, 0);
            //logoGame.GetComponent<RectTransform>().anchoredPosition = new Vector2(-1071f, -440);
            //buttonGame.GetComponent<RectTransform>().anchoredPosition = new Vector2(1079f, -503);
            //if (diskTransform)
            //diskTransform.position = diskPos16by9;

            return;
        }

        float ratio = 1f / cam.aspect;

        if (ratio < 1.8f)
        {
            cam.orthographicSize = size16by9;
            if (trayDefault != null)
                trayTransform.transform.position = new Vector3(1.28f, 2.56f, 0f);
            //button_doc.SetActive(true);
            //trayManager.transform.position = new Vector3(0, -0.25f, 0);
            //button_doc.GetComponent<RectTransform>().anchoredPosition = new Vector3(0, -1295f, 0);
            //target.GetComponent<RectTransform>().anchoredPosition = new Vector2(111, -87);
            //timer.GetComponent<RectTransform>().anchoredPosition = new Vector2(-281, -87);
            //diskTransform.transform.position = new Vector3(0.15f, 3.48f, 0);
            //if (diskTransform)
            //diskTransform.position = diskPos16by9;
        }
        else
        {
            cam.orthographicSize = sizeLong;
            if (trayDefault != null)
                trayTransform.transform.localPosition = new Vector3(1.28f, 2.56f, 0f);
            //button_doc.SetActive(true);
            //trayManager.transform.position = new Vector3(0, 0, 0);
            //button_doc.GetComponent<RectTransform>().anchoredPosition = new Vector2(0, -1522);
            //diskTransform.transform.position = new Vector3(0.15f, 4f, 0);
            //target.GetComponent<RectTransform>().anchoredPosition = new Vector2(111, -204);
            //timer.GetComponent<RectTransform>().anchoredPosition = new Vector2(-281, -204);
            //if (diskTransform)
            //diskTransform.position = diskPosLong;
        }
    }

}
