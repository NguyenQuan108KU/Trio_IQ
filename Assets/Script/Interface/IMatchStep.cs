using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public interface IMatchStep
{
    IEnumerator Execute(MatchContext ctx);
}
