using System.Collections;

public class DisappearTrayStep : IMatchStep
{
    public IEnumerator Execute(MatchContext ctx)
    {
        if (ctx.tray == null)
            yield break;

        ctx.tray.Disappear();
        yield return null;
    }
}
