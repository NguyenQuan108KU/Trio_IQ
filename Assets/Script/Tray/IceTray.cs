using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class IceTray : MonoBehaviour
{
    public List<Sprite> listSpriteIce = new List<Sprite>();
    private int totalSprite;
    private SpriteRenderer sr;
    private void Awake()
    {
        sr = GetComponent<SpriteRenderer>();    
    }
    private void OnEnable()
    {
        GameEvent.OnRemoveIce.AddListener(OnRemoveIce);
    }
    private void OnDisable()
    {
        GameEvent.OnRemoveIce.RemoveListener(OnRemoveIce);
    }
    public void OnRemoveIce()
    {
        totalSprite++;
        if(totalSprite >= listSpriteIce.Count)
        {
            Destroy(gameObject);
            return;
        }
        sr.sprite = listSpriteIce[totalSprite];
    }
}
