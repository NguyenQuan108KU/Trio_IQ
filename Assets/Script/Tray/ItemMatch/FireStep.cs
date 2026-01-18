using System.Collections;
using UnityEngine;

public class FireStep : IMatchStep
{
    private GameObject firePrefab;

    public FireStep(GameObject firePrefab)
    {
        this.firePrefab = firePrefab;
    }

    public IEnumerator Execute(MatchContext ctx)
    {
        if (firePrefab == null || ctx.tray == null)
            yield break;
        GameObject fire = Object.Instantiate(firePrefab, ctx.tray.transform);
        fire.transform.localPosition = new Vector3(0, 2.7f, 0);
        AudioManager.instance.PlaySFX(AudioManager.instance.match);
        yield return new WaitForSeconds(0.3f);
    }
}
