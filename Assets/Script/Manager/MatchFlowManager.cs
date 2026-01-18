using System.Collections;
using System.Collections.Generic;
using UnityEngine;
public class MatchFlowManager : MonoBehaviour
{
    public MatchConfig config;
    public Transform targetPosition;
    private List<IMatchStep> steps;

    private bool isRunning;
    public PackTarget parkTarget;
    [Header("-------------- Fire Prefabs --------------")]
    public GameObject firePrefabs;
    [Header("-------------- Effect Prefabs --------------")]
    public GameObject effctPrefabs;
    [Header("-------------- Disk Prefabs --------------")]
    public GameObject diskPrefabs;
    public GameObject disTransform;
    public GameObject effectScore;
    public GameObject foodTrail;
    [Header("-------------- GatherStep --------------")]
    public float moveTime;
    public float spacingItem;

    [Header("---------- Fly To Text Target -----------")]
    public GameObject textAgeTransform;
    [Header("---------- Close Box -----------")]
    public GameObject lidPrefab;
    public float closeTime;
    [Header("---------- Text perfect -----------")]
    public List<GameObject> textLists = new List<GameObject>();  
    public List<AudioClip> audioLists = new List<AudioClip>();

    private void OnEnable()
    {
        GameEvent.OnTrayMatched.AddListener(OnTrayMatched);
    }

    private void OnDisable()
    {
        GameEvent.OnTrayMatched.RemoveListener(OnTrayMatched);
    }

    void OnTrayMatched(Tray tray, List<DragItem> matchedItems)
    {
        AudioManager.instance.PlaySFX(AudioManager.instance.match);
        //if (isRunning) return;
        if (matchedItems == null || matchedItems.Count < 3) return;

        //isRunning = true;

        MatchContext ctx = new MatchContext
        {tray = tray, items = matchedItems, root = transform, config = config, target = targetPosition };
        Setup(config);
        Run(ctx);
    }
    void Setup(MatchConfig config)
    {
        steps = new List<IMatchStep>();

        if (config.useFire)
            steps.Add(new FireStep(firePrefabs));
        if (config.useEffect)
            steps.Add(new EffectStep(effctPrefabs));
        if (config.useBlink)
            steps.Add(new BlinkBounceStep());
        if (config.useGather)
            steps.Add(new GatherStep(moveTime, spacingItem));
        if (config.useCloseBox)
            steps.Add(new CloseBoxStep(lidPrefab, closeTime));
        if(config.useTextPerfect)
            steps.Add(new PerfectStep(textLists, audioLists));
        if (config.flyType == FlyType.Pack)
        {
            steps.Add(new FlyStep(
                new FlyToPackTarget()
            ));
            steps.Add(new DisappearTrayStep());
        }
        else if (config.flyType == FlyType.Disk)
        {
            steps.Add(new FlyNormal(
                new FlyToDiskTarget(disTransform.transform), diskPrefabs, effectScore, foodTrail
            ));
        }
        else if (config.flyType == FlyType.Ticket)
        {
            steps.Add(new FlyNormal(
                new FlyToTicketTarget(), diskPrefabs, effectScore, foodTrail
            ));
        }
        else if(config.flyType == FlyType.Text)
        {
            steps.Add(new FlySequentialStep(
                new FlyToTextTarget(textAgeTransform.transform)
            ));
            steps.Add(new DisappearTrayStep());
        }
    }

    void Run(MatchContext ctx)
    {
        StartCoroutine(RunFlow(ctx));
    }

    IEnumerator RunFlow(MatchContext ctx)
    {
        foreach (var step in steps)
            yield return step.Execute(ctx);

        //isRunning = false;
    }

}
