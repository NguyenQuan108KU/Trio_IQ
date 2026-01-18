using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class TutorialBeginRunner : MonoBehaviour
{
    public TutorialContext context;

    public void Run(List<ITutorialBeginStep> steps)
    {
        StartCoroutine(RunCo(steps));
    }

    IEnumerator RunCo(List<ITutorialBeginStep> steps)
    {
        foreach (var step in steps)
        {
            yield return step.Execute(context);
        }
    }
}
