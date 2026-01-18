using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public interface ITutorialBeginStep
{
    IEnumerator Execute(TutorialContext context);
}
