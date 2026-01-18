using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ProjectionCamera : MonoBehaviour
{
    public float portraitSize;
    public float landscapeSize;
    private Camera cam;
    private int lastWidth;
    private int lastHeight;
    void Awake()
    {
        cam = GetComponent<Camera>();
        ApplySize();
    }
    private void Update()
    {
        if (lastWidth != Screen.width || lastHeight != Screen.height)
        {
            ApplySize();
        }
    }
    public void ApplySize()
    {
        lastWidth = Screen.width;
        lastHeight = Screen.height;
        bool isPortrait = Screen.height > Screen.width;
        if (isPortrait)
            cam.orthographicSize = portraitSize;
        else
            cam.orthographicSize = landscapeSize;
    }
}
