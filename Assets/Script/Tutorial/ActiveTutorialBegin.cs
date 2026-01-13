using System.Collections;
using System.Collections.Generic;
using UnityEngine;
public enum TutorialCase
{
    Case1,
    Case2
}

public class ActiveTutorialBegin : MonoBehaviour
{
    public TutorialCase tutorialCase;
    public TutorialBeginRunner runner;

    void Start()
    {
        if (runner == null)
        {
            return;
        }

        runner.Run(BuildSteps());
    }

    List<ITutorialBeginStep> BuildSteps()
    {
        var ctx = runner.context;

        switch (tutorialCase)
        {
            case TutorialCase.Case1:
                return new List<ITutorialBeginStep>()
                {
                    new ShowStep(LockType.Lock),
                    new DelayStep(3f),
                    new HideStep(ctx.box, ctx.background, HideMode.ScaleDown, 0.3f),
                };

            case TutorialCase.Case2:
                return new List<ITutorialBeginStep>()
                {
                    new ShowStep(LockType.UnLock),
                    new WaitClickStep(),
                    new HideStep(ctx.text),
                };
        }

        return null;
    }
}

