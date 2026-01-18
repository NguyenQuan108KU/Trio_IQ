using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UIElements;
public enum LockType
{
    Lock,
    UnLock
}
public class ShowStep : ITutorialBeginStep
{
    LockType lockType;
    public ShowStep(LockType mode)
    {
        this.lockType = mode;
    }
    public IEnumerator Execute(TutorialContext context)
    {
        switch (lockType)
        {
            case LockType.Lock:
                GameEvent.LockItem?.Invoke();
                break;

            case LockType.UnLock:
                //GameEvent.UnLockItem?.Invoke();
                break;
        }

        yield break;
    }
}
