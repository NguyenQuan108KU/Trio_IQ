using System.Collections;
using UnityEngine;
using UnityEngine.UI;

public class WaitClickStep : ITutorialBeginStep
{
    public IEnumerator Execute(TutorialContext context)
    {
        yield return new WaitUntil(IsClicked);
    }

    bool IsClicked()
    {
        if (Input.GetMouseButtonDown(0))
            return true;
        return false;
    }
}
