using System.Collections;
using UnityEngine;

public class DelayStep : ITutorialBeginStep
{
    float time;

    public DelayStep(float time)
    {
        this.time = time;
    }

    public IEnumerator Execute(TutorialContext context)
    {
        yield return new WaitForSeconds(time);
    }
}
