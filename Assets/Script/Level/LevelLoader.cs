using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class LevelLoader : MonoBehaviour
{
    public TextAsset levelData;
    void Start()
    {
        string json = levelData.text;
    }

}
