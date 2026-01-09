using UnityEngine;
using System.Collections.Generic;
using System.Linq;
using DG.Tweening;
using UnityEngine.UI;

public class PackManager : MonoBehaviourSingleton<PackManager>
{
    [Header("Pack Slots")]
    public Transform packRoot;

    [Header("Pack Prefabs (1 prefab / type)")]
    public List<PackTarget> packPrefabs;

    public List<PackTarget> activePacks = new List<PackTarget>();
    public List<PackTarget> packs = new List<PackTarget>();

    [Header("Pack Sliders")]
    public ItemSlider redSlider;
    public ItemSlider yellowSlider;
    public ItemSlider greenSlider;

    private Vector3[] slotPositions;
    [Header("Pack Sprites")]
    public List<Sprite> packSprites;
    int spriteIndex = 0;


    void Start()
    {
        activePacks = packRoot
            .GetComponentsInChildren<PackTarget>()
            .OrderBy(p => p.transform.position.x)
            .ToList();

        slotPositions = new Vector3[activePacks.Count];

        for (int i = 0; i < activePacks.Count; i++)
        {
            activePacks[i].slotIndex = i;
            slotPositions[i] = activePacks[i].transform.position;
        }
    }

    public PackTarget GetPackInScene(ItemType type)
    {
        return activePacks.FirstOrDefault(
            p => p.packType == type && !p.isFull
        );
    }

    public Transform GetSliderTarget(ItemType type)
    {
        switch (type)
        {
            case ItemType.Red:
                return redSlider.sliderHandle;

            case ItemType.Yellow:
                return yellowSlider.sliderHandle;

            case ItemType.Green:
                return greenSlider.sliderHandle;
        }

        return null;
    }

    /// <summary>
    /// Được gọi khi pack hoàn thành
    /// </summary>
    public void OnPackFilled(PackTarget pack)
    {
        int slotIndex = pack.slotIndex;
        Vector3 slotPos = pack.transform.position;
        ItemType type = pack.packType;

        Transform sliderTarget = GetSliderTarget(type);
        if (sliderTarget == null) return;
        pack.FlyToSliderTarget(() =>
        {
            RemoveAndShiftPacks(pack);
            Destroy(pack.gameObject);
        });
    }

    void SpawnSameTypePack(ItemType type, int slotIndex, Vector3 slotPos)
    {
        PackTarget prefab = packPrefabs
            .FirstOrDefault(p => p.packType == type);

        if (prefab == null) return;

        PackTarget newPack = Instantiate(
            prefab,
            slotPos + Vector3.up * 6f,
            Quaternion.identity,
            packRoot
        );

        newPack.slotIndex = slotIndex;
        activePacks.Add(newPack);

        newPack.transform
            .DOMoveY(slotPos.y, 0.6f)
            .SetEase(Ease.OutQuad);
    }

    public Slider GetSliderByType(ItemType type)
    {
        switch (type)
        {
            case ItemType.Red:
                return redSlider.slider;

            case ItemType.Yellow:
                return yellowSlider.slider;

            case ItemType.Green:
                return greenSlider.slider;
        }

        return null;
    }

    public void OnPackArrivedToSlider(ItemType type)
    {
        Slider slider = GetSliderByType(type);
        if (slider == null) return;

        slider.value = Mathf.Min(slider.value + 1f, slider.maxValue);

        ItemSlider itemSlider = null;

        switch (type)
        {
            case ItemType.Red: itemSlider = redSlider; break;
            case ItemType.Yellow: itemSlider = yellowSlider; break;
            case ItemType.Green: itemSlider = greenSlider; break;
        }

        if (itemSlider != null)
        {
            itemSlider.PunchHandle();
        }
        CheckWinCondition();
    }


    public Transform FindPackBySprite(Sprite sprite)
    {
        if (sprite == null) return null;

        foreach (PackTarget pack in packs)
        {
            if (pack == null) continue;

            SpriteRenderer sr = null;

            foreach (Transform child in pack.transform)
            {
                sr = child.GetComponent<SpriteRenderer>();
                if (sr != null && sr.sprite != null)
                    break;
            }

            if (sr == null) continue;

            if (sr.sprite == sprite)
                return pack.transform;
        }

        return null;
    }

    public void RemoveAndShiftPacks(PackTarget removedPack)
    {
        Debug.Log($"Removing pack at slot {removedPack.slotIndex}");
        activePacks.Remove(removedPack);

        activePacks = activePacks
            .OrderBy(p => p.slotIndex)
            .ToList();

        for (int i = 0; i < activePacks.Count; i++)
        {
            PackTarget pack = activePacks[i];
            pack.slotIndex = i;
            pack.transform.DOKill();
            pack.transform
                .DOMove(slotPositions[i], 0.25f)
                .SetEase(Ease.OutQuad);
        }

        SpawnPackAtLastSlot();
    }

    void SpawnPackAtLastSlot()
    {
        int index = activePacks.Count;

        if (index >= slotPositions.Length) return;

        PackTarget prefab =
            packPrefabs[Random.Range(0, packPrefabs.Count)];

        PackTarget newPack = Instantiate(
            prefab,
            slotPositions[index] + Vector3.up * 5f,
            Quaternion.identity,
            packRoot
        );

        if (newPack.packSprite != null && packSprites.Count > 0)
        {
            newPack.packSprite.sprite = packSprites[spriteIndex];
            spriteIndex = (spriteIndex + 1) % packSprites.Count;
        }

        newPack.slotIndex = index;
        activePacks.Add(newPack);
        packs.Add(newPack);

        newPack.transform
            .DOMove(slotPositions[index], 0.35f)
            .SetEase(Ease.OutQuad);
    }

    void CheckWinCondition()
    {
        float yellow = yellowSlider.slider.value;
        float red = redSlider.slider.value;
        float green = greenSlider.slider.value;
        Debug.Log($"Yellow: {yellow}, Red: {red}, Green: {green}");
        if (yellow == 3 && red == 1 && green == 1)
        {
            if (!GameManager.instance.finishGame && !GameManager.instance.isCheckLose)
            {
                GameManager.instance.isCheckWin = true;
                GameManager.instance.ECWin.SetActive(true);
                GameManager.instance.finishGame = true;
                AudioManager.instance.StopBGM();
                AudioManager.instance.PlaySFX(AudioManager.instance.win);
                Luna.Unity.LifeCycle.GameEnded();
            }
        }
    }
}
