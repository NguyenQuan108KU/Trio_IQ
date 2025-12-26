if ( TRACE ) { TRACE( JSON.parse( '["AudioManager#init","AudioManager#Awake","AudioManager#Start","AudioManager#PlayBGM","AudioManager#PlaySFX","AudioManager#ToggleSound","Button#OnEnable","Button#OnDisable","Button#OnDestroy","Button#ScaleUp","CheckSize#init","CheckSize#Awake","CheckSize#Update","CheckSize#UpdateCamera","CountdownTimer#init","CountdownTimer#Awake","CountdownTimer#Start","CountdownTimer#StartCountdown","CountdownTimer#CountdownRoutine","CountdownTimer#UpdateText","CountdownTimer#BackgroundBlink","CountdownTimer#StopBackgroundBlink","CountdownTimer#ScaleTo","CountdownTimer#OnTimeUp","CountdownTimer#StopCountdown","CountdownTimer#ActiveEndCartWin","DG.Tweening.DOTweenCYInstruction.WaitForCompletion#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForCompletion#ctor","DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops#ctor","DG.Tweening.DOTweenCYInstruction.WaitForKill#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForKill#ctor","DG.Tweening.DOTweenCYInstruction.WaitForPosition#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForPosition#ctor","DG.Tweening.DOTweenCYInstruction.WaitForRewind#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForRewind#ctor","DG.Tweening.DOTweenCYInstruction.WaitForStart#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForStart#ctor","DG.Tweening.DOTweenModuleAudio#DOFade","DG.Tweening.DOTweenModuleAudio#DOPitch","DG.Tweening.DOTweenModuleAudio#DOSetFloat","DG.Tweening.DOTweenModuleAudio#DOComplete","DG.Tweening.DOTweenModuleAudio#DOKill","DG.Tweening.DOTweenModuleAudio#DOFlip","DG.Tweening.DOTweenModuleAudio#DOGoto","DG.Tweening.DOTweenModuleAudio#DOPause","DG.Tweening.DOTweenModuleAudio#DOPlay","DG.Tweening.DOTweenModuleAudio#DOPlayBackwards","DG.Tweening.DOTweenModuleAudio#DOPlayForward","DG.Tweening.DOTweenModuleAudio#DORestart","DG.Tweening.DOTweenModuleAudio#DORewind","DG.Tweening.DOTweenModuleAudio#DOSmoothRewind","DG.Tweening.DOTweenModuleAudio#DOTogglePause","DG.Tweening.DOTweenModulePhysics#DOMove","DG.Tweening.DOTweenModulePhysics#DOMoveX","DG.Tweening.DOTweenModulePhysics#DOMoveY","DG.Tweening.DOTweenModulePhysics#DOMoveZ","DG.Tweening.DOTweenModulePhysics#DORotate","DG.Tweening.DOTweenModulePhysics#DOLookAt","DG.Tweening.DOTweenModulePhysics#DOJump","DG.Tweening.DOTweenModulePhysics#DOPath","DG.Tweening.DOTweenModulePhysics#DOPath$1","DG.Tweening.DOTweenModulePhysics#DOLocalPath","DG.Tweening.DOTweenModulePhysics#DOLocalPath$1","DG.Tweening.DOTweenModulePhysics2D#DOMove","DG.Tweening.DOTweenModulePhysics2D#DOMoveX","DG.Tweening.DOTweenModulePhysics2D#DOMoveY","DG.Tweening.DOTweenModulePhysics2D#DORotate","DG.Tweening.DOTweenModulePhysics2D#DOJump","DG.Tweening.DOTweenModulePhysics2D#DOPath","DG.Tweening.DOTweenModulePhysics2D#DOPath$1","DG.Tweening.DOTweenModulePhysics2D#DOLocalPath","DG.Tweening.DOTweenModulePhysics2D#DOLocalPath$1","DG.Tweening.DOTweenModuleSprite#DOColor","DG.Tweening.DOTweenModuleSprite#DOFade","DG.Tweening.DOTweenModuleSprite#DOGradientColor","DG.Tweening.DOTweenModuleSprite#DOBlendableColor","DG.Tweening.DOTweenModuleUI#DOFade","DG.Tweening.DOTweenModuleUI#DOFade$1","DG.Tweening.DOTweenModuleUI#DOFade$2","DG.Tweening.DOTweenModuleUI#DOFade$3","DG.Tweening.DOTweenModuleUI#DOFade$4","DG.Tweening.DOTweenModuleUI#DOColor","DG.Tweening.DOTweenModuleUI#DOColor$1","DG.Tweening.DOTweenModuleUI#DOColor$2","DG.Tweening.DOTweenModuleUI#DOColor$3","DG.Tweening.DOTweenModuleUI#DOFillAmount","DG.Tweening.DOTweenModuleUI#DOGradientColor","DG.Tweening.DOTweenModuleUI#DOFlexibleSize","DG.Tweening.DOTweenModuleUI#DOMinSize","DG.Tweening.DOTweenModuleUI#DOPreferredSize","DG.Tweening.DOTweenModuleUI#DOScale","DG.Tweening.DOTweenModuleUI#DOAnchorPos","DG.Tweening.DOTweenModuleUI#DOAnchorPosX","DG.Tweening.DOTweenModuleUI#DOAnchorPosY","DG.Tweening.DOTweenModuleUI#DOAnchorPos3D","DG.Tweening.DOTweenModuleUI#DOAnchorPos3DX","DG.Tweening.DOTweenModuleUI#DOAnchorPos3DY","DG.Tweening.DOTweenModuleUI#DOAnchorPos3DZ","DG.Tweening.DOTweenModuleUI#DOAnchorMax","DG.Tweening.DOTweenModuleUI#DOAnchorMin","DG.Tweening.DOTweenModuleUI#DOPivot","DG.Tweening.DOTweenModuleUI#DOPivotX","DG.Tweening.DOTweenModuleUI#DOPivotY","DG.Tweening.DOTweenModuleUI#DOSizeDelta","DG.Tweening.DOTweenModuleUI#DOPunchAnchorPos","DG.Tweening.DOTweenModuleUI#DOShakeAnchorPos","DG.Tweening.DOTweenModuleUI#DOShakeAnchorPos$1","DG.Tweening.DOTweenModuleUI#DOJumpAnchorPos","DG.Tweening.DOTweenModuleUI#DONormalizedPos","DG.Tweening.DOTweenModuleUI#DOHorizontalNormalizedPos","DG.Tweening.DOTweenModuleUI#DOVerticalNormalizedPos","DG.Tweening.DOTweenModuleUI#DOValue","DG.Tweening.DOTweenModuleUI#DOCounter","DG.Tweening.DOTweenModuleUI#DOText","DG.Tweening.DOTweenModuleUI#DOBlendableColor","DG.Tweening.DOTweenModuleUI#DOBlendableColor$1","DG.Tweening.DOTweenModuleUI#DOBlendableColor$2","DG.Tweening.DOTweenModuleUI#DOShapeCircle","DG.Tweening.DOTweenModuleUI.Utils#SwitchToRectTransform","DG.Tweening.DOTweenModuleUnityVersion#DOGradientColor","DG.Tweening.DOTweenModuleUnityVersion#DOGradientColor$1","DG.Tweening.DOTweenModuleUnityVersion#WaitForCompletion","DG.Tweening.DOTweenModuleUnityVersion#WaitForRewind","DG.Tweening.DOTweenModuleUnityVersion#WaitForKill","DG.Tweening.DOTweenModuleUnityVersion#WaitForElapsedLoops","DG.Tweening.DOTweenModuleUnityVersion#WaitForPosition","DG.Tweening.DOTweenModuleUnityVersion#WaitForStart","DG.Tweening.DOTweenModuleUnityVersion#DOOffset","DG.Tweening.DOTweenModuleUnityVersion#DOTiling","DG.Tweening.DOTweenModuleUtils#Init","DG.Tweening.DOTweenModuleUtils#Preserver","DG.Tweening.DOTweenModuleUtils.Physics#SetOrientationOnPath","DG.Tweening.DOTweenModuleUtils.Physics#HasRigidbody2D","DG.Tweening.DOTweenModuleUtils.Physics#HasRigidbody","DG.Tweening.DOTweenModuleUtils.Physics#CreateDOTweenPathTween","Disk#init","Disk#AddItem","Disk#MoveDisk","DiskTransform#Awake","DragItem#init","DragItem#Awake","DragItem#Update","DragItem#TryPick","DragItem#Drag","DragItem#Drop","DragItem#Snap","DragItem#Return","DragItem#FindNearestSlot","DragItem#PlayDropScale","DragItem#ShowOutline","EndCart_Lose#init","EndCart_Lose#Awake","EndCart_Lose#InitState","EndCart_Lose#SetItemInit","EndCart_Lose#Show","EndCart_Lose#JoinItemAnim","EndCart_Lose#StartButtonPulse","EndCart_Lose#Hide","EndCart_Lose#HideItem","GameManager#init","GameManager#Awake","GameManager#Update","GameManager#StartTimer","GameManager#TimerRoutine","GameManager#StopTimer","GameManager#OnGlobalClick","GameManager#InstallGame","GameManager#EndGame","HandHint#Play","HandHint#SetPreviewSprite","HandHint#Stop","HandHint#OnDestroy","ProgressBrain#init","ProgressBrain#Awake","ProgressBrain#Update","ProgressBrain#AddTrayMatch","ProgressBrain#ReduceScore","ProgressBrain#ResetIdleTimer","ProgressBrain#UpdateBrainPosition","ProgressBrain#ActiveWin","RotateLoop#init","RotateLoop#Update","ScalePopLoop#init","ScalePopLoop#OnEnable","ScalePopLoop#Play","ScalePopLoop#OnDisable","Slot#Awake","Slot#OnValidate","Slot#CanAcceptItem","Slot#EnsureCurrentItem","Slot#IsEmpty","Slot#SetItem","Tray#init","Tray#Start","Tray#CheckMatch","Tray#PlayFireThenMerge","Tray#MoveToCenter","Tray#FlyToTargetAndDisappear","Tray#CloseTray","Tray#GetMaxSameItemCount","Tray#GetEmptySlot","Tray#GetAnyMatchingItem","Tray#GetMainItemKey","TrayManager#init","TrayManager#Awake","TrayManager#Start","TrayManager#Update","TrayManager#EndGameDelay","TrayManager#WaitCloseTrayThenWin","TrayManager#OnUserBeginInteract","TrayManager#OnUserEndInteract","TrayManager#ResetIdle","TrayManager#InitializeRoutine","TrayManager#InitPool","TrayManager#CacheSize","TrayManager#SpawnTrayAtTop","TrayManager#CompleteTray","TrayManager#AlignInstant","TrayManager#AlignAnimated","TrayManager#InitActiveTraysFromScene","TrayManager#GetTraysWithMaxSameItem","TrayManager#GetRandomTrayEmptySlot","TrayManager#GetRandomTraySlotAndItem","TrayManager#ShowTutorialHint","TrayManager#GetFallbackTrayAndSlot","TrayManager#GetAnyItemFromOtherTray","TrayManager#NotifyUserInteraction","TrayManager#GetItemFromOtherTray","TrayManager#CacheFirstTutorialTarget","TutorialManager#Awake","TutorialManager#ShowHandHint","TutorialManager#HideHint"]' ) ); }
/**
 * @version 1.0.9491.32597
 * @copyright anton
 * @compiler Bridge.NET 17.9.42-luna
 */
Bridge.assembly("UnityScriptsCompiler", function ($asm, globals) {
    "use strict";

    /*AudioManager start.*/
    Bridge.define("AudioManager", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                Instance: null
            }
        },
        fields: {
            bgmSource: null,
            sfxSource: null,
            bgm: null,
            finish: null,
            drog: null,
            match: null,
            pop: null,
            lose: null,
            drag: null,
            closeBox: null,
            normalTick: null,
            warningTick: null,
            soundOn: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "AudioManager#init", this ); }

                this.soundOn = true;
            }
        },
        methods: {
            /*AudioManager.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "AudioManager#Awake", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(AudioManager.Instance, null)) {
                    AudioManager.Instance = this;
                    UnityEngine.Object.DontDestroyOnLoad(this.gameObject);
                } else {
                    UnityEngine.MonoBehaviour.Destroy(this.gameObject);
                    return;
                }
            },
            /*AudioManager.Awake end.*/

            /*AudioManager.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "AudioManager#Start", this ); }

                //PlayBGM();
            },
            /*AudioManager.Start end.*/

            /*AudioManager.PlayBGM start.*/
            PlayBGM: function () {
if ( TRACE ) { TRACE( "AudioManager#PlayBGM", this ); }

                if (!this.soundOn) {
                    return;
                }

                this.bgmSource.clip = this.bgm;
                this.bgmSource.loop = true;
                this.bgmSource.Play();
            },
            /*AudioManager.PlayBGM end.*/

            /*AudioManager.PlaySFX start.*/
            PlaySFX: function (clip) {
if ( TRACE ) { TRACE( "AudioManager#PlaySFX", this ); }

                if (!this.soundOn || clip == null) {
                    return;
                }
                this.sfxSource.PlayOneShot(clip);
            },
            /*AudioManager.PlaySFX end.*/

            /*AudioManager.ToggleSound start.*/
            ToggleSound: function () {
if ( TRACE ) { TRACE( "AudioManager#ToggleSound", this ); }

                this.soundOn = !this.soundOn;

                if (this.soundOn) {
                    this.bgmSource.Play();
                } else {
                    this.bgmSource.Stop();
                }
            },
            /*AudioManager.ToggleSound end.*/


        }
    });
    /*AudioManager end.*/

    /*Button start.*/
    Bridge.define("Button", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            scaleTween: null
        },
        methods: {
            /*Button.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "Button#OnEnable", this ); }

                // button active sẵn nhưng nhỏ
                this.transform.localScale = pc.Vec3.ZERO.clone();
            },
            /*Button.OnEnable end.*/

            /*Button.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "Button#OnDisable", this ); }

                DG.Tweening.ShortcutExtensions.DOKill(this.transform);
            },
            /*Button.OnDisable end.*/

            /*Button.OnDestroy start.*/
            OnDestroy: function () {
if ( TRACE ) { TRACE( "Button#OnDestroy", this ); }

                DG.Tweening.ShortcutExtensions.DOKill(this.transform);
            },
            /*Button.OnDestroy end.*/

            /*Button.ScaleUp start.*/
            ScaleUp: function () {
if ( TRACE ) { TRACE( "Button#ScaleUp", this ); }

                DG.Tweening.ShortcutExtensions.DOKill(this.transform);

                this.scaleTween = DG.Tweening.TweenSettingsExtensions.SetLink(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOScale$1(this.transform, new pc.Vec3( 1, 1, 1 ), 0.4), DG.Tweening.Ease.OutBack), this.gameObject); // 🔑 auto kill khi destroy
            },
            /*Button.ScaleUp end.*/


        }
    });
    /*Button end.*/

    /*CheckSize start.*/
    Bridge.define("CheckSize", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            size16by9: 0,
            size18by9: 0,
            sizeLong: 0,
            diskTransform: null,
            diskPos16by9: null,
            diskPosLong: null,
            trayManager: null,
            button_doc: null,
            target: null,
            timer: null,
            logoGame: null,
            buttonGame: null,
            cam: null,
            lastAspect: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "CheckSize#init", this ); }

                this.diskPos16by9 = new UnityEngine.Vector3();
                this.diskPosLong = new UnityEngine.Vector3();
                this.size16by9 = 4.6;
                this.size18by9 = 5.0;
                this.sizeLong = 5.6;
                this.diskPos16by9 = new pc.Vec3( 3.55, 2.87, 0.0 );
                this.diskPosLong = new pc.Vec3( 1.15, 3.6, 0.0 );
            }
        },
        methods: {
            /*CheckSize.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "CheckSize#Awake", this ); }

                this.cam = this.GetComponent(UnityEngine.Camera);
                this.UpdateCamera();
            },
            /*CheckSize.Awake end.*/

            /*CheckSize.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "CheckSize#Update", this ); }

                // aspect đổi → layout đổi (Editor + WebGL + Luna đều OK)
                if (Math.abs(this.cam.aspect - this.lastAspect) > 0.01) {
                    this.UpdateCamera();
                }
            },
            /*CheckSize.Update end.*/

            /*CheckSize.UpdateCamera start.*/
            UpdateCamera: function () {
if ( TRACE ) { TRACE( "CheckSize#UpdateCamera", this ); }

                this.lastAspect = this.cam.aspect;

                var isPortrait = this.cam.aspect < 1.0;

                if (!isPortrait) {
                    //cam.orthographicSize = size16by9;
                    this.cam.orthographicSize = 4.2;
                    this.button_doc.SetActive(false);
                    this.trayManager.transform.position = new pc.Vec3( 0, -0.75, 0 );
                    this.target.GetComponent(UnityEngine.RectTransform).anchoredPosition = new pc.Vec2( 173, -127 );
                    this.timer.GetComponent(UnityEngine.RectTransform).anchoredPosition = new pc.Vec2( -281, -127 );
                    this.diskTransform.transform.position = new pc.Vec3( 0, 3.3, 0 );
                    //logoGame.GetComponent<RectTransform>().anchoredPosition = new Vector2(-1071f, -440);
                    //buttonGame.GetComponent<RectTransform>().anchoredPosition = new Vector2(1079f, -503);
                    //if (diskTransform)
                    //diskTransform.position = diskPos16by9;

                    return;
                }

                var ratio = 1.0 / this.cam.aspect;

                if (ratio < 1.8) {
                    this.cam.orthographicSize = this.size16by9;

                    this.button_doc.SetActive(true);
                    this.trayManager.transform.position = new pc.Vec3( 0, -0.25, 0 );
                    this.button_doc.GetComponent(UnityEngine.RectTransform).anchoredPosition = UnityEngine.Vector2.FromVector3(new pc.Vec3( 0, -1295.0, 0 ));
                    this.target.GetComponent(UnityEngine.RectTransform).anchoredPosition = new pc.Vec2( 111, -87 );
                    this.timer.GetComponent(UnityEngine.RectTransform).anchoredPosition = new pc.Vec2( -281, -87 );
                    this.diskTransform.transform.position = new pc.Vec3( 0.15, 3.48, 0 );
                    //if (diskTransform)
                    //diskTransform.position = diskPos16by9;
                } else {
                    this.cam.orthographicSize = this.sizeLong;
                    this.button_doc.SetActive(true);
                    this.trayManager.transform.position = new pc.Vec3( 0, 0, 0 );
                    this.button_doc.GetComponent(UnityEngine.RectTransform).anchoredPosition = new pc.Vec2( 0, -1522 );
                    this.diskTransform.transform.position = new pc.Vec3( 0.15, 4.0, 0 );
                    this.target.GetComponent(UnityEngine.RectTransform).anchoredPosition = new pc.Vec2( 111, -204 );
                    this.timer.GetComponent(UnityEngine.RectTransform).anchoredPosition = new pc.Vec2( -281, -204 );
                    //if (diskTransform)
                    //diskTransform.position = diskPosLong;
                }
            },
            /*CheckSize.UpdateCamera end.*/


        }
    });
    /*CheckSize end.*/

    /*CountdownTimer start.*/
    Bridge.define("CountdownTimer", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                instance: null
            }
        },
        fields: {
            timerText: null,
            startSeconds: 0,
            warningTime: 0,
            warningColor: null,
            pulseScale: 0,
            pulseSpeed: 0,
            countdownCo: null,
            pulseCo: null,
            originalScale: null,
            originalColor: null,
            backgroundWarning: null,
            timeUpPanel: null,
            hasStarted: false,
            bgMinAlpha: 0,
            bgMaxAlpha: 0,
            bgBlinkSpeed: 0,
            bgBlinkCo: null,
            bgImage: null,
            bgOriginalColor: null,
            wwin: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "CountdownTimer#init", this ); }

                this.warningColor = new UnityEngine.Color();
                this.originalScale = new UnityEngine.Vector3();
                this.originalColor = new UnityEngine.Color();
                this.bgOriginalColor = new UnityEngine.Color();
                this.startSeconds = 60;
                this.warningTime = 5;
                this.warningColor = new pc.Color( 1, 0, 0, 1 );
                this.pulseScale = 1.3;
                this.pulseSpeed = 0.5;
                this.hasStarted = false;
                this.bgMinAlpha = 0.25;
                this.bgMaxAlpha = 1.0;
                this.bgBlinkSpeed = 4.0;
            }
        },
        methods: {
            /*CountdownTimer.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "CountdownTimer#Awake", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(CountdownTimer.instance, null)) {
                    CountdownTimer.instance = this;
                } else {
                    UnityEngine.MonoBehaviour.Destroy(this.gameObject);
                }

            },
            /*CountdownTimer.Awake end.*/

            /*CountdownTimer.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "CountdownTimer#Start", this ); }

                this.originalScale = this.timerText.transform$1.localScale.$clone();
                this.originalColor = this.timerText.color.$clone();

                // cache background image and hide it initially
                if (UnityEngine.GameObject.op_Inequality(this.backgroundWarning, null)) {
                    this.bgImage = this.backgroundWarning.GetComponent(UnityEngine.UI.Image);
                    if (UnityEngine.MonoBehaviour.op_Inequality(this.bgImage, null)) {
                        this.bgOriginalColor = this.bgImage.color.$clone();
                    }
                    this.backgroundWarning.SetActive(false);
                }

                //StartCountdown();
            },
            /*CountdownTimer.Start end.*/

            /*CountdownTimer.StartCountdown start.*/
            StartCountdown: function () {
if ( TRACE ) { TRACE( "CountdownTimer#StartCountdown", this ); }

                // stop any previous blink
                this.StopBackgroundBlink();

                if (this.countdownCo != null) {
                    this.StopCoroutine$2(this.countdownCo);
                }

                this.countdownCo = this.StartCoroutine$1(this.CountdownRoutine());
            },
            /*CountdownTimer.StartCountdown end.*/

            /*CountdownTimer.CountdownRoutine start.*/
            CountdownRoutine: function () {
if ( TRACE ) { TRACE( "CountdownTimer#CountdownRoutine", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    timeLeft,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    timeLeft = this.startSeconds;

                                        // ensure hidden at start
                                        if (UnityEngine.GameObject.op_Inequality(this.backgroundWarning, null)) {
                                            this.backgroundWarning.SetActive(false);
                                        }
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( timeLeft > 0 ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    this.UpdateText(timeLeft);

                                        //play warning behavior when in warning period
                                        if (timeLeft <= this.warningTime) {
                                            AudioManager.Instance.PlaySFX(AudioManager.Instance.warningTick);

                                            this.timerText.color = this.warningColor.$clone();

                                            if (UnityEngine.GameObject.op_Inequality(this.backgroundWarning, null) && this.bgBlinkCo == null) {
                                                this.backgroundWarning.SetActive(true);
                                                // ensure original color cached
                                                if (UnityEngine.MonoBehaviour.op_Inequality(this.bgImage, null)) {
                                                    this.bgOriginalColor = this.bgImage.color.$clone();
                                                }
                                                this.bgBlinkCo = this.StartCoroutine$1(this.BackgroundBlink());
                                            }
                                        } else {
                                            // restore normal state if not in warning
                                            this.timerText.color = this.originalColor.$clone();
                                            if (this.bgBlinkCo != null) {
                                                this.StopBackgroundBlink();
                                            }
                                        }

                                        $enumerator.current = new UnityEngine.WaitForSeconds(1.0);
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    timeLeft = (timeLeft - 1) | 0;

                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    this.UpdateText(0);
                                        this.OnTimeUp();

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*CountdownTimer.CountdownRoutine end.*/

            /*CountdownTimer.UpdateText start.*/
            UpdateText: function (totalSeconds) {
if ( TRACE ) { TRACE( "CountdownTimer#UpdateText", this ); }

                //AudioManager.Instance.PlaySFX(AudioManager.Instance.pop);
                var minutes = (Bridge.Int.div(totalSeconds, 60)) | 0;
                var seconds = totalSeconds % 60;
                this.timerText.text = System.String.format("{0:00}:{1:00}", Bridge.box(minutes, System.Int32), Bridge.box(seconds, System.Int32));
            },
            /*CountdownTimer.UpdateText end.*/

            /*CountdownTimer.BackgroundBlink start.*/
            BackgroundBlink: function () {
if ( TRACE ) { TRACE( "CountdownTimer#BackgroundBlink", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    visible,
                    c,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if (UnityEngine.MonoBehaviour.op_Equality(this.bgImage, null)) {
                                            $step = 1;
                                            continue;
                                        } 
                                        $step = 2;
                                        continue;
                                }
                                case 1: {
                                    return false;
                                }
                                case 2: {
                                    visible = false;
                                    $step = 3;
                                    continue;
                                }
                                case 3: {
                                    if ( true ) {
                                            $step = 4;
                                            continue;
                                        } 
                                        $step = 6;
                                        continue;
                                }
                                case 4: {
                                    visible = !visible;

                                        c = this.bgOriginalColor.$clone();
                                        c.a = visible ? this.bgMaxAlpha : this.bgMinAlpha;
                                        this.bgImage.color = c.$clone();

                                        $enumerator.current = new UnityEngine.WaitForSeconds(1.0);
                                        $step = 5;
                                        return true;
                                }
                                case 5: {
                                    
                                        $step = 3;
                                        continue;
                                }
                                case 6: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*CountdownTimer.BackgroundBlink end.*/

            /*CountdownTimer.StopBackgroundBlink start.*/
            StopBackgroundBlink: function () {
if ( TRACE ) { TRACE( "CountdownTimer#StopBackgroundBlink", this ); }

                if (this.bgBlinkCo != null) {
                    this.StopCoroutine$2(this.bgBlinkCo);
                    this.bgBlinkCo = null;
                }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.bgImage, null)) {
                    this.bgImage.color = this.bgOriginalColor.$clone();
                }

                if (UnityEngine.GameObject.op_Inequality(this.backgroundWarning, null)) {
                    this.backgroundWarning.SetActive(false);
                }
            },
            /*CountdownTimer.StopBackgroundBlink end.*/

            /*CountdownTimer.ScaleTo start.*/
            ScaleTo: function (target) {
if ( TRACE ) { TRACE( "CountdownTimer#ScaleTo", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    start,
                    t,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    start = this.timerText.transform$1.localScale.$clone();
                                        t = 0.0;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( t < this.pulseSpeed ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    t += UnityEngine.Time.deltaTime;
                                        this.timerText.transform$1.localScale = new pc.Vec3().lerp( start, target, t / this.pulseSpeed );
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*CountdownTimer.ScaleTo end.*/

            /*CountdownTimer.OnTimeUp start.*/
            OnTimeUp: function () {
if ( TRACE ) { TRACE( "CountdownTimer#OnTimeUp", this ); }

                var $t;
                // stop blink when time up
                this.StopBackgroundBlink();

                this.timerText.text = "00:00";

                if (UnityEngine.GameObject.op_Inequality(this.timeUpPanel, null)) {
                    AudioManager.Instance.PlaySFX(AudioManager.Instance.lose);
                    UnityEngine.MonoBehaviour.op_Inequality(($t = this.timeUpPanel.GetComponent(EndCart_Lose)), null) ? $t.Show() : null;
                    GameManager.Instance.finishGame = true;
                    //GameManager.Instance.EndGame();
                }
            },
            /*CountdownTimer.OnTimeUp end.*/

            /*CountdownTimer.StopCountdown start.*/
            StopCountdown: function () {
if ( TRACE ) { TRACE( "CountdownTimer#StopCountdown", this ); }

                if (this.countdownCo != null) {
                    this.StopCoroutine$2(this.countdownCo);
                    this.countdownCo = null;
                }

                this.StopBackgroundBlink();
            },
            /*CountdownTimer.StopCountdown end.*/

            /*CountdownTimer.ActiveEndCartWin start.*/
            ActiveEndCartWin: function () {
if ( TRACE ) { TRACE( "CountdownTimer#ActiveEndCartWin", this ); }

                var $t;
                UnityEngine.MonoBehaviour.op_Inequality(($t = this.wwin.GetComponent(EndCart_Lose)), null) ? $t.Show() : null;
            },
            /*CountdownTimer.ActiveEndCartWin end.*/


        }
    });
    /*CountdownTimer end.*/

    /*DG.Tweening.DOTweenCYInstruction start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction");
    /*DG.Tweening.DOTweenCYInstruction end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForCompletion", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForCompletion#keepWaiting#get", this ); }

                    return this.t.active && !DG.Tweening.TweenExtensions.IsComplete(this.t);
                }
            }
        },
        ctors: {
            ctor: function (tween) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForCompletion#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null,
            elapsedLoops: 0
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops#keepWaiting#get", this ); }

                    return this.t.active && DG.Tweening.TweenExtensions.CompletedLoops(this.t) < this.elapsedLoops;
                }
            }
        },
        ctors: {
            ctor: function (tween, elapsedLoops) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
                this.elapsedLoops = elapsedLoops;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForKill start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForKill", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForKill#keepWaiting#get", this ); }

                    return this.t.active;
                }
            }
        },
        ctors: {
            ctor: function (tween) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForKill#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForKill end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForPosition", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null,
            position: 0
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForPosition#keepWaiting#get", this ); }

                    return this.t.active && this.t.position * (((DG.Tweening.TweenExtensions.CompletedLoops(this.t) + 1) | 0)) < this.position;
                }
            }
        },
        ctors: {
            ctor: function (tween, position) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForPosition#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
                this.position = position;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForRewind", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForRewind#keepWaiting#get", this ); }

                    return this.t.active && (!this.t.playedOnce || this.t.position * (((DG.Tweening.TweenExtensions.CompletedLoops(this.t) + 1) | 0)) > 0);
                }
            }
        },
        ctors: {
            ctor: function (tween) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForRewind#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForStart start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForStart", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForStart#keepWaiting#get", this ); }

                    return this.t.active && !this.t.playedOnce;
                }
            }
        },
        ctors: {
            ctor: function (tween) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForStart#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForStart end.*/

    /*DG.Tweening.DOTweenModuleAudio start.*/
    Bridge.define("DG.Tweening.DOTweenModuleAudio", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleAudio.DOFade:static start.*/
                /**
                 * Tweens an AudioSource's volume to the given value.
                 Also stores the AudioSource as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.AudioSource}           target      
                 * @param   {number}                            endValue    The end value to reach (0 to 1)
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOFade", this ); }

                    if (endValue < 0) {
                        endValue = 0;
                    } else {
                        if (endValue > 1) {
                            endValue = 1;
                        }
                    }
                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.volume;
                    }, function (x) {
                        target.volume = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleAudio.DOFade:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPitch:static start.*/
                /**
                 * Tweens an AudioSource's pitch to the given value.
                 Also stores the AudioSource as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.AudioSource}           target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPitch: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOPitch", this ); }

                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.pitch;
                    }, function (x) {
                        target.pitch = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPitch:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOSetFloat:static start.*/
                /**
                 * Tweens an AudioMixer's exposed float to the given value.
                 Also stores the AudioMixer as the tween's target so it can be used for filtered operations.
                 Note that you need to manually expose a float in an AudioMixerGroup in order to be able to tween it from an AudioMixer.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}      target       
                 * @param   {string}                            floatName    Name given to the exposed float to set
                 * @param   {number}                            endValue     The end value to reach
                 * @param   {number}                            duration     The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOSetFloat: function (target, floatName, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOSetFloat", this ); }

                    var t = DG.Tweening.DOTween.To$4(function () {
                        var currVal = { };
                        target.GetFloat(floatName, currVal);
                        return currVal.v;
                    }, function (x) {
                        target.SetFloat(floatName, x);
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleAudio.DOSetFloat:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOComplete:static start.*/
                /**
                 * Completes all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens completed
                 (meaning the tweens that don't have infinite loops and were not already complete)
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target           
                 * @param   {boolean}                         withCallbacks    For Sequences only: if TRUE also internal Sequence callbacks will be fired,
                 otherwise they will be ignored
                 * @return  {number}
                 */
                DOComplete: function (target, withCallbacks) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOComplete", this ); }

                    if (withCallbacks === void 0) { withCallbacks = false; }
                    return DG.Tweening.DOTween.Complete(target, withCallbacks);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOComplete:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOKill:static start.*/
                /**
                 * Kills all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens killed.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target      
                 * @param   {boolean}                         complete    If TRUE completes the tween before killing it
                 * @return  {number}
                 */
                DOKill: function (target, complete) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOKill", this ); }

                    if (complete === void 0) { complete = false; }
                    return DG.Tweening.DOTween.Kill(target, complete);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOKill:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOFlip:static start.*/
                /**
                 * Flips the direction (backwards if it was going forward or viceversa) of all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens flipped.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOFlip: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOFlip", this ); }

                    return DG.Tweening.DOTween.Flip(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOFlip:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOGoto:static start.*/
                /**
                 * Sends to the given position all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens involved.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target     
                 * @param   {number}                          to         Time position to reach
                 (if higher than the whole tween duration the tween will simply reach its end)
                 * @param   {boolean}                         andPlay    If TRUE will play the tween after reaching the given position, otherwise it will pause it
                 * @return  {number}
                 */
                DOGoto: function (target, to, andPlay) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOGoto", this ); }

                    if (andPlay === void 0) { andPlay = false; }
                    return DG.Tweening.DOTween.Goto(target, to, andPlay);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOGoto:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPause:static start.*/
                /**
                 * Pauses all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens paused.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOPause: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOPause", this ); }

                    return DG.Tweening.DOTween.Pause(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPause:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPlay:static start.*/
                /**
                 * Plays all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens played.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOPlay: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOPlay", this ); }

                    return DG.Tweening.DOTween.Play(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPlay:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPlayBackwards:static start.*/
                /**
                 * Plays backwards all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens played.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOPlayBackwards: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOPlayBackwards", this ); }

                    return DG.Tweening.DOTween.PlayBackwards(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPlayBackwards:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPlayForward:static start.*/
                /**
                 * Plays forward all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens played.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOPlayForward: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOPlayForward", this ); }

                    return DG.Tweening.DOTween.PlayForward(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPlayForward:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DORestart:static start.*/
                /**
                 * Restarts all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens restarted.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DORestart: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DORestart", this ); }

                    return DG.Tweening.DOTween.Restart(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DORestart:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DORewind:static start.*/
                /**
                 * Rewinds all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens rewinded.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DORewind: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DORewind", this ); }

                    return DG.Tweening.DOTween.Rewind(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DORewind:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOSmoothRewind:static start.*/
                /**
                 * Smoothly rewinds all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens rewinded.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOSmoothRewind: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOSmoothRewind", this ); }

                    return DG.Tweening.DOTween.SmoothRewind(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOSmoothRewind:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOTogglePause:static start.*/
                /**
                 * Toggles the paused state (plays if it was paused, pauses if it was playing) of all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens involved.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOTogglePause: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOTogglePause", this ); }

                    return DG.Tweening.DOTween.TogglePause(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOTogglePause:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleAudio end.*/

    /*DG.Tweening.DOTweenModulePhysics start.*/
    Bridge.define("DG.Tweening.DOTweenModulePhysics", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModulePhysics.DOMove:static start.*/
                /**
                 * Tweens a Rigidbody's position to the given value.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target      
                 * @param   {UnityEngine.Vector3}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMove: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOMove", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$13(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOMove:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOMoveX:static start.*/
                /**
                 * Tweens a Rigidbody's X position to the given value.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMoveX: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOMoveX", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( endValue, 0, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.X, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOMoveX:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOMoveY:static start.*/
                /**
                 * Tweens a Rigidbody's Y position to the given value.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMoveY: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOMoveY", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( 0, endValue, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.Y, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOMoveY:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOMoveZ:static start.*/
                /**
                 * Tweens a Rigidbody's Z position to the given value.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMoveZ: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOMoveZ", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( 0, 0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.Z, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOMoveZ:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DORotate:static start.*/
                /**
                 * Tweens a Rigidbody's rotation to the given value.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target      
                 * @param   {UnityEngine.Vector3}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {DG.Tweening.RotateMode}            mode        Rotation mode
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DORotate: function (target, endValue, duration, mode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DORotate", this ); }

                    if (mode === void 0) { mode = 0; }
                    var t = DG.Tweening.DOTween.To$9(function () {
                        return target.rotation;
                    }, Bridge.fn.cacheBind(target, target.MoveRotation), endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions), t, target);
                    t.plugOptions.rotateMode = mode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DORotate:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOLookAt:static start.*/
                /**
                 * Tweens a Rigidbody's rotation so that it will look towards the given position.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target            
                 * @param   {UnityEngine.Vector3}               towards           The position to look at
                 * @param   {number}                            duration          The duration of the tween
                 * @param   {DG.Tweening.AxisConstraint}        axisConstraint    Eventual axis constraint for the rotation
                 * @param   {?UnityEngine.Vector3}              up                The vector that defines in which direction up is (default: Vector3.up)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOLookAt: function (target, towards, duration, axisConstraint, up) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOLookAt", this ); }

                    if (axisConstraint === void 0) { axisConstraint = 0; }
                    if (up === void 0) { up = null; }
                    var t = DG.Tweening.Core.Extensions.SetSpecialStartupMode(DG.Tweening.Core.TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions), DG.Tweening.DOTween.To$9(function () {
                        return target.rotation;
                    }, Bridge.fn.cacheBind(target, target.MoveRotation), towards.$clone(), duration), target), DG.Tweening.Core.Enums.SpecialStartupMode.SetLookAt);
                    t.plugOptions.axisConstraint = axisConstraint;
                    t.plugOptions.up = (pc.Vec3.equals( up, null )) ? pc.Vec3.UP.clone() : System.Nullable.getValue(up);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOLookAt:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOJump:static start.*/
                /**
                 * Tweens a Rigidbody's position to the given value, while also applying a jump effect along the Y axis.
                 Returns a Sequence instead of a Tweener.
                 Also stores the Rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}    target       
                 * @param   {UnityEngine.Vector3}      endValue     The end value to reach
                 * @param   {number}                   jumpPower    Power of the jump (the max height of the jump is represented by this plus the final Y offset)
                 * @param   {number}                   numJumps     Total number of jumps
                 * @param   {number}                   duration     The duration of the tween
                 * @param   {boolean}                  snapping     If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Sequence}
                 */
                DOJump: function (target, endValue, jumpPower, numJumps, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOJump", this ); }

                    if (snapping === void 0) { snapping = false; }
                    if (numJumps < 1) {
                        numJumps = 1;
                    }
                    var startPosY = 0;
                    var offsetY = -1;
                    var offsetYSet = false;
                    var s = DG.Tweening.DOTween.Sequence();
                    var yTween = DG.Tweening.TweenSettingsExtensions.OnStart(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetRelative(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( 0, jumpPower, 0 ), duration / (Bridge.Int.mul(numJumps, 2))), DG.Tweening.AxisConstraint.Y, snapping), DG.Tweening.Ease.OutQuad)), Bridge.Int.mul(numJumps, 2), DG.Tweening.LoopType.Yoyo), function () {
                        startPosY = target.position.y;
                    });
                    DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( endValue.x, 0, 0 ), duration), DG.Tweening.AxisConstraint.X, snapping), DG.Tweening.Ease.Linear)), DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( 0, 0, endValue.z ), duration), DG.Tweening.AxisConstraint.Z, snapping), DG.Tweening.Ease.Linear)), yTween), target), DG.Tweening.DOTween.defaultEaseType);
                    DG.Tweening.TweenSettingsExtensions.OnUpdate(DG.Tweening.Tween, yTween, function () {
                        if (!offsetYSet) {
                            offsetYSet = true;
                            offsetY = s.isRelative ? endValue.y : endValue.y - startPosY;
                        }
                        var pos = target.position.$clone();
                        pos.y += DG.Tweening.DOVirtual.EasedValue(0, offsetY, DG.Tweening.TweenExtensions.ElapsedPercentage(yTween), DG.Tweening.Ease.OutQuad);
                        target.MovePosition(pos);
                    });
                    return s;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOJump:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOPath:static start.*/
                /**
                 * Tweens a Rigidbody's position through the given path waypoints, using the chosen path algorithm.
                 Also stores the Rigidbody as the tween's target so it can be used for filtered operations.
                 <p>NOTE: to tween a rigidbody correctly it should be set to kinematic at least while being tweened.</p><p>BEWARE: doesn't work on Windows Phone store (waiting for Unity to fix their own bug).
                 If you plan to publish there you should use a regular transform.DOPath.</p>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target        
                 * @param   {Array.<UnityEngine.Vector3>}       path          The waypoints to go through
                 * @param   {number}                            duration      The duration of the tween
                 * @param   {DG.Tweening.PathType}              pathType      The type of path: Linear (straight path), CatmullRom (curved CatmullRom path) or CubicBezier (curved with control points)
                 * @param   {DG.Tweening.PathMode}              pathMode      The path mode: 3D, side-scroller 2D, top-down 2D
                 * @param   {number}                            resolution    The resolution of the path (useless in case of Linear paths): higher resolutions make for more detailed curved paths but are more expensive.
                 Defaults to 10, but a value of 5 is usually enough if you don't have dramatic long curves between waypoints
                 * @param   {?UnityEngine.Color}                gizmoColor    The color of the path (shown when gizmos are active in the Play panel and the tween is running)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPath: function (target, path, duration, pathType, pathMode, resolution, gizmoColor) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOPath", this ); }

                    if (pathType === void 0) { pathType = 0; }
                    if (pathMode === void 0) { pathMode = 1; }
                    if (resolution === void 0) { resolution = 10; }
                    if (gizmoColor === void 0) { gizmoColor = null; }
                    if (resolution < 1) {
                        resolution = 1;
                    }
                    var t = DG.Tweening.TweenSettingsExtensions.SetUpdate$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new DG.Tweening.Plugins.Core.PathCore.Path.$ctor1(pathType, path, resolution, System.Nullable.lift1("$clone", gizmoColor)), duration), target), DG.Tweening.UpdateType.Fixed);

                    t.plugOptions.isRigidbody = true;
                    t.plugOptions.mode = pathMode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOPath:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOPath$1:static start.*/
                DOPath$1: function (target, path, duration, pathMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOPath$1", this ); }

                    if (pathMode === void 0) { pathMode = 1; }
                    var t = DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), path, duration), target);

                    t.plugOptions.isRigidbody = true;
                    t.plugOptions.mode = pathMode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOPath$1:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOLocalPath:static start.*/
                /**
                 * Tweens a Rigidbody's localPosition through the given path waypoints, using the chosen path algorithm.
                 Also stores the Rigidbody as the tween's target so it can be used for filtered operations
                 <p>NOTE: to tween a rigidbody correctly it should be set to kinematic at least while being tweened.</p><p>BEWARE: doesn't work on Windows Phone store (waiting for Unity to fix their own bug).
                 If you plan to publish there you should use a regular transform.DOLocalPath.</p>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target        
                 * @param   {Array.<UnityEngine.Vector3>}       path          The waypoint to go through
                 * @param   {number}                            duration      The duration of the tween
                 * @param   {DG.Tweening.PathType}              pathType      The type of path: Linear (straight path), CatmullRom (curved CatmullRom path) or CubicBezier (curved with control points)
                 * @param   {DG.Tweening.PathMode}              pathMode      The path mode: 3D, side-scroller 2D, top-down 2D
                 * @param   {number}                            resolution    The resolution of the path: higher resolutions make for more detailed curved paths but are more expensive.
                 Defaults to 10, but a value of 5 is usually enough if you don't have dramatic long curves between waypoints
                 * @param   {?UnityEngine.Color}                gizmoColor    The color of the path (shown when gizmos are active in the Play panel and the tween is running)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOLocalPath: function (target, path, duration, pathType, pathMode, resolution, gizmoColor) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOLocalPath", this ); }

                    if (pathType === void 0) { pathType = 0; }
                    if (pathMode === void 0) { pathMode = 1; }
                    if (resolution === void 0) { resolution = 10; }
                    if (gizmoColor === void 0) { gizmoColor = null; }
                    if (resolution < 1) {
                        resolution = 1;
                    }
                    var trans = target.transform;
                    var t = DG.Tweening.TweenSettingsExtensions.SetUpdate$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return trans.localPosition;
                    }, function (x) {
                        target.MovePosition(UnityEngine.Component.op_Equality(trans.parent, null) ? x.$clone() : trans.parent.TransformPoint$1(x));
                    }, new DG.Tweening.Plugins.Core.PathCore.Path.$ctor1(pathType, path, resolution, System.Nullable.lift1("$clone", gizmoColor)), duration), target), DG.Tweening.UpdateType.Fixed);

                    t.plugOptions.isRigidbody = true;
                    t.plugOptions.mode = pathMode;
                    t.plugOptions.useLocalPosition = true;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOLocalPath:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOLocalPath$1:static start.*/
                DOLocalPath$1: function (target, path, duration, pathMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOLocalPath$1", this ); }

                    if (pathMode === void 0) { pathMode = 1; }
                    var trans = target.transform;
                    var t = DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return trans.localPosition;
                    }, function (x) {
                        target.MovePosition(UnityEngine.Component.op_Equality(trans.parent, null) ? x.$clone() : trans.parent.TransformPoint$1(x));
                    }, path, duration), target);

                    t.plugOptions.isRigidbody = true;
                    t.plugOptions.mode = pathMode;
                    t.plugOptions.useLocalPosition = true;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOLocalPath$1:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModulePhysics end.*/

    /*DG.Tweening.DOTweenModulePhysics2D start.*/
    Bridge.define("DG.Tweening.DOTweenModulePhysics2D", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModulePhysics2D.DOMove:static start.*/
                /**
                 * Tweens a Rigidbody2D's position to the given value.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}           target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMove: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOMove", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOMove:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOMoveX:static start.*/
                /**
                 * Tweens a Rigidbody2D's X position to the given value.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}           target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMoveX: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOMoveX", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec2( endValue, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.X, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOMoveX:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOMoveY:static start.*/
                /**
                 * Tweens a Rigidbody2D's Y position to the given value.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}           target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMoveY: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOMoveY", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec2( 0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.Y, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOMoveY:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DORotate:static start.*/
                /**
                 * Tweens a Rigidbody2D's rotation to the given value.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}           target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DORotate: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DORotate", this ); }

                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.rotation;
                    }, Bridge.fn.cacheBind(target, target.MoveRotation), endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DORotate:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOJump:static start.*/
                /**
                 * Tweens a Rigidbody2D's position to the given value, while also applying a jump effect along the Y axis.
                 Returns a Sequence instead of a Tweener.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations.
                 <p>IMPORTANT: a rigidbody2D can't be animated in a jump arc using MovePosition, so the tween will directly set the position</p>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}    target       
                 * @param   {UnityEngine.Vector2}        endValue     The end value to reach
                 * @param   {number}                     jumpPower    Power of the jump (the max height of the jump is represented by this plus the final Y offset)
                 * @param   {number}                     numJumps     Total number of jumps
                 * @param   {number}                     duration     The duration of the tween
                 * @param   {boolean}                    snapping     If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Sequence}
                 */
                DOJump: function (target, endValue, jumpPower, numJumps, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOJump", this ); }

                    if (snapping === void 0) { snapping = false; }
                    if (numJumps < 1) {
                        numJumps = 1;
                    }
                    var startPosY = 0;
                    var offsetY = -1;
                    var offsetYSet = false;
                    var s = DG.Tweening.DOTween.Sequence();
                    var yTween = DG.Tweening.TweenSettingsExtensions.OnStart(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetRelative(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, function (x) {
                        target.position = x.$clone();
                    }, new pc.Vec2( 0, jumpPower ), duration / (Bridge.Int.mul(numJumps, 2))), DG.Tweening.AxisConstraint.Y, snapping), DG.Tweening.Ease.OutQuad)), Bridge.Int.mul(numJumps, 2), DG.Tweening.LoopType.Yoyo), function () {
                        startPosY = target.position.y;
                    });
                    DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, function (x) {
                        target.position = x.$clone();
                    }, new pc.Vec2( endValue.x, 0 ), duration), DG.Tweening.AxisConstraint.X, snapping), DG.Tweening.Ease.Linear)), yTween), target), DG.Tweening.DOTween.defaultEaseType);
                    DG.Tweening.TweenSettingsExtensions.OnUpdate(DG.Tweening.Tween, yTween, function () {
                        if (!offsetYSet) {
                            offsetYSet = true;
                            offsetY = s.isRelative ? endValue.y : endValue.y - startPosY;
                        }
                        var pos = UnityEngine.Vector3.FromVector2(target.position.$clone());
                        pos.y += DG.Tweening.DOVirtual.EasedValue(0, offsetY, DG.Tweening.TweenExtensions.ElapsedPercentage(yTween), DG.Tweening.Ease.OutQuad);
                        target.MovePosition$1(pos);
                    });
                    return s;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOJump:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOPath:static start.*/
                /**
                 * Tweens a Rigidbody2D's position through the given path waypoints, using the chosen path algorithm.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations.
                 <p>NOTE: to tween a Rigidbody2D correctly it should be set to kinematic at least while being tweened.</p><p>BEWARE: doesn't work on Windows Phone store (waiting for Unity to fix their own bug).
                 If you plan to publish there you should use a regular transform.DOPath.</p>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}           target        
                 * @param   {Array.<UnityEngine.Vector2>}       path          The waypoints to go through
                 * @param   {number}                            duration      The duration of the tween
                 * @param   {DG.Tweening.PathType}              pathType      The type of path: Linear (straight path), CatmullRom (curved CatmullRom path) or CubicBezier (curved with control points)
                 * @param   {DG.Tweening.PathMode}              pathMode      The path mode: 3D, side-scroller 2D, top-down 2D
                 * @param   {number}                            resolution    The resolution of the path (useless in case of Linear paths): higher resolutions make for more detailed curved paths but are more expensive.
                 Defaults to 10, but a value of 5 is usually enough if you don't have dramatic long curves between waypoints
                 * @param   {?UnityEngine.Color}                gizmoColor    The color of the path (shown when gizmos are active in the Play panel and the tween is running)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPath: function (target, path, duration, pathType, pathMode, resolution, gizmoColor) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOPath", this ); }

                    if (pathType === void 0) { pathType = 0; }
                    if (pathMode === void 0) { pathMode = 1; }
                    if (resolution === void 0) { resolution = 10; }
                    if (gizmoColor === void 0) { gizmoColor = null; }
                    if (resolution < 1) {
                        resolution = 1;
                    }
                    var len = path.length;
                    var path3D = System.Array.init(len, function (){
                        return new UnityEngine.Vector3();
                    }, UnityEngine.Vector3);
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        path3D[i] = UnityEngine.Vector3.FromVector2(path[i].$clone());
                    }
                    var t = DG.Tweening.TweenSettingsExtensions.SetUpdate$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return UnityEngine.Vector3.FromVector2(target.position);
                    }, function (x) {
                        target.MovePosition$1(x);
                    }, new DG.Tweening.Plugins.Core.PathCore.Path.$ctor1(pathType, path3D, resolution, System.Nullable.lift1("$clone", gizmoColor)), duration), target), DG.Tweening.UpdateType.Fixed);

                    t.plugOptions.isRigidbody2D = true;
                    t.plugOptions.mode = pathMode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOPath:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOPath$1:static start.*/
                DOPath$1: function (target, path, duration, pathMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOPath$1", this ); }

                    if (pathMode === void 0) { pathMode = 1; }
                    var t = DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return UnityEngine.Vector3.FromVector2(target.position);
                    }, function (x) {
                        target.MovePosition$1(x);
                    }, path, duration), target);

                    t.plugOptions.isRigidbody2D = true;
                    t.plugOptions.mode = pathMode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOPath$1:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOLocalPath:static start.*/
                /**
                 * Tweens a Rigidbody2D's localPosition through the given path waypoints, using the chosen path algorithm.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations
                 <p>NOTE: to tween a Rigidbody2D correctly it should be set to kinematic at least while being tweened.</p><p>BEWARE: doesn't work on Windows Phone store (waiting for Unity to fix their own bug).
                 If you plan to publish there you should use a regular transform.DOLocalPath.</p>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}           target        
                 * @param   {Array.<UnityEngine.Vector2>}       path          The waypoint to go through
                 * @param   {number}                            duration      The duration of the tween
                 * @param   {DG.Tweening.PathType}              pathType      The type of path: Linear (straight path), CatmullRom (curved CatmullRom path) or CubicBezier (curved with control points)
                 * @param   {DG.Tweening.PathMode}              pathMode      The path mode: 3D, side-scroller 2D, top-down 2D
                 * @param   {number}                            resolution    The resolution of the path: higher resolutions make for more detailed curved paths but are more expensive.
                 Defaults to 10, but a value of 5 is usually enough if you don't have dramatic long curves between waypoints
                 * @param   {?UnityEngine.Color}                gizmoColor    The color of the path (shown when gizmos are active in the Play panel and the tween is running)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOLocalPath: function (target, path, duration, pathType, pathMode, resolution, gizmoColor) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOLocalPath", this ); }

                    if (pathType === void 0) { pathType = 0; }
                    if (pathMode === void 0) { pathMode = 1; }
                    if (resolution === void 0) { resolution = 10; }
                    if (gizmoColor === void 0) { gizmoColor = null; }
                    if (resolution < 1) {
                        resolution = 1;
                    }
                    var len = path.length;
                    var path3D = System.Array.init(len, function (){
                        return new UnityEngine.Vector3();
                    }, UnityEngine.Vector3);
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        path3D[i] = UnityEngine.Vector3.FromVector2(path[i].$clone());
                    }
                    var trans = target.transform;
                    var t = DG.Tweening.TweenSettingsExtensions.SetUpdate$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return trans.localPosition;
                    }, function (x) {
                        target.MovePosition$1(UnityEngine.Component.op_Equality(trans.parent, null) ? x.$clone() : trans.parent.TransformPoint$1(x));
                    }, new DG.Tweening.Plugins.Core.PathCore.Path.$ctor1(pathType, path3D, resolution, System.Nullable.lift1("$clone", gizmoColor)), duration), target), DG.Tweening.UpdateType.Fixed);

                    t.plugOptions.isRigidbody2D = true;
                    t.plugOptions.mode = pathMode;
                    t.plugOptions.useLocalPosition = true;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOLocalPath:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOLocalPath$1:static start.*/
                DOLocalPath$1: function (target, path, duration, pathMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOLocalPath$1", this ); }

                    if (pathMode === void 0) { pathMode = 1; }
                    var trans = target.transform;
                    var t = DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return trans.localPosition;
                    }, function (x) {
                        target.MovePosition$1(UnityEngine.Component.op_Equality(trans.parent, null) ? x.$clone() : trans.parent.TransformPoint$1(x));
                    }, path, duration), target);

                    t.plugOptions.isRigidbody2D = true;
                    t.plugOptions.mode = pathMode;
                    t.plugOptions.useLocalPosition = true;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOLocalPath$1:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModulePhysics2D end.*/

    /*DG.Tweening.DOTweenModuleSprite start.*/
    Bridge.define("DG.Tweening.DOTweenModuleSprite", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleSprite.DOColor:static start.*/
                /**
                 * Tweens a SpriteRenderer's color to the given value.
                 Also stores the spriteRenderer as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleSprite
                 * @memberof DG.Tweening.DOTweenModuleSprite
                 * @param   {UnityEngine.SpriteRenderer}        target      
                 * @param   {UnityEngine.Color}                 endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOColor: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleSprite#DOColor", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleSprite.DOColor:static end.*/

                /*DG.Tweening.DOTweenModuleSprite.DOFade:static start.*/
                /**
                 * Tweens a Material's alpha color to the given value.
                 Also stores the spriteRenderer as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleSprite
                 * @memberof DG.Tweening.DOTweenModuleSprite
                 * @param   {UnityEngine.SpriteRenderer}        target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleSprite#DOFade", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleSprite.DOFade:static end.*/

                /*DG.Tweening.DOTweenModuleSprite.DOGradientColor:static start.*/
                /**
                 * Tweens a SpriteRenderer's color using the given gradient
                 (NOTE 1: only uses the colors of the gradient, not the alphas - NOTE 2: creates a Sequence, not a Tweener).
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleSprite
                 * @memberof DG.Tweening.DOTweenModuleSprite
                 * @param   {UnityEngine.SpriteRenderer}    target      
                 * @param   {pc.ColorGradient}              gradient    The gradient to use
                 * @param   {number}                        duration    The duration of the tween
                 * @return  {DG.Tweening.Sequence}
                 */
                DOGradientColor: function (target, gradient, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleSprite#DOGradientColor", this ); }

                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0) {
                            target.color = c.color.$clone();
                            continue;
                        }
                        var colorDuration = i === ((len - 1) | 0) ? duration - DG.Tweening.TweenExtensions.Duration(s, false) : duration * (i === 0 ? c.time : c.time - colors[((i - 1) | 0)].time);
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.DOTweenModuleSprite.DOColor(target, c.color.$clone(), colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleSprite.DOGradientColor:static end.*/

                /*DG.Tweening.DOTweenModuleSprite.DOBlendableColor:static start.*/
                /**
                 * Tweens a SpriteRenderer's color to the given value,
                 in a way that allows other DOBlendableColor tweens to work together on the same target,
                 instead than fight each other as multiple DOColor would do.
                 Also stores the SpriteRenderer as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleSprite
                 * @memberof DG.Tweening.DOTweenModuleSprite
                 * @param   {UnityEngine.SpriteRenderer}    target      
                 * @param   {UnityEngine.Color}             endValue    The value to tween to
                 * @param   {number}                        duration    The duration of the tween
                 * @return  {DG.Tweening.Tweener}
                 */
                DOBlendableColor: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleSprite#DOBlendableColor", this ); }

                    var $t;
                    endValue = ($t = target.color, new pc.Color( endValue.r - $t.r, endValue.g - $t.g, endValue.b - $t.b, endValue.a - $t.a ));
                    var to = new pc.Color( 0, 0, 0, 0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var diff = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + diff.$clone().r, $t1.g + diff.$clone().g, $t1.b + diff.$clone().b, $t1.a + diff.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleSprite.DOBlendableColor:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleSprite end.*/

    /*DG.Tweening.DOTweenModuleUI start.*/
    Bridge.define("DG.Tweening.DOTweenModuleUI", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUI.DOFade:static start.*/
                /**
                 * Tweens a CanvasGroup's alpha color to the given value.
                 Also stores the canvasGroup as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.CanvasGroup}           target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade", this ); }

                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.alpha;
                    }, function (x) {
                        target.alpha = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$1:static start.*/
                /**
                 * Tweens an Graphic's alpha color to the given value.
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Graphic}            target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade$1: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade$1", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$2:static start.*/
                /**
                 * Tweens an Image's alpha color to the given value.
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Image}              target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade$2: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade$2", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$2:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$3:static start.*/
                /**
                 * Tweens a Outline's effectColor alpha to the given value.
                 Also stores the Outline as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Outline}            target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade$3: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade$3", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.effectColor;
                    }, function (x) {
                        target.effectColor = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$3:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$4:static start.*/
                /**
                 * Tweens a Text's alpha color to the given value.
                 Also stores the Text as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Text}               target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade$4: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade$4", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$4:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor:static start.*/
                /**
                 * Tweens an Graphic's color to the given value.
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Graphic}            target      
                 * @param   {UnityEngine.Color}                 endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOColor: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOColor", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor$1:static start.*/
                /**
                 * Tweens an Image's color to the given value.
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Image}              target      
                 * @param   {UnityEngine.Color}                 endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOColor$1: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOColor$1", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor$2:static start.*/
                /**
                 * Tweens a Outline's effectColor to the given value.
                 Also stores the Outline as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Outline}            target      
                 * @param   {UnityEngine.Color}                 endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOColor$2: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOColor$2", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.effectColor;
                    }, function (x) {
                        target.effectColor = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor$2:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor$3:static start.*/
                /**
                 * Tweens a Text's color to the given value.
                 Also stores the Text as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Text}               target      
                 * @param   {UnityEngine.Color}                 endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOColor$3: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOColor$3", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor$3:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFillAmount:static start.*/
                /**
                 * Tweens an Image's fillAmount to the given value.
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Image}              target      
                 * @param   {number}                            endValue    The end value to reach (0 to 1)
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFillAmount: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFillAmount", this ); }

                    if (endValue > 1) {
                        endValue = 1;
                    } else {
                        if (endValue < 0) {
                            endValue = 0;
                        }
                    }
                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.fillAmount;
                    }, function (x) {
                        target.fillAmount = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFillAmount:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOGradientColor:static start.*/
                /**
                 * Tweens an Image's colors using the given gradient
                 (NOTE 1: only uses the colors of the gradient, not the alphas - NOTE 2: creates a Sequence, not a Tweener).
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Image}    target      
                 * @param   {pc.ColorGradient}        gradient    The gradient to use
                 * @param   {number}                  duration    The duration of the tween
                 * @return  {DG.Tweening.Sequence}
                 */
                DOGradientColor: function (target, gradient, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOGradientColor", this ); }

                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0) {
                            target.color = c.color.$clone();
                            continue;
                        }
                        var colorDuration = i === ((len - 1) | 0) ? duration - DG.Tweening.TweenExtensions.Duration(s, false) : duration * (i === 0 ? c.time : c.time - colors[((i - 1) | 0)].time);
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.DOTweenModuleUI.DOColor$1(target, c.color.$clone(), colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUI.DOGradientColor:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFlexibleSize:static start.*/
                /**
                 * Tweens an LayoutElement's flexibleWidth/Height to the given value.
                 Also stores the LayoutElement as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.LayoutElement}      target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFlexibleSize: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFlexibleSize", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.flexibleWidth, target.flexibleHeight );
                    }, function (x) {
                        target.flexibleWidth = x.x;
                        target.flexibleHeight = x.y;
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFlexibleSize:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOMinSize:static start.*/
                /**
                 * Tweens an LayoutElement's minWidth/Height to the given value.
                 Also stores the LayoutElement as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.LayoutElement}      target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMinSize: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOMinSize", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.minWidth, target.minHeight );
                    }, function (x) {
                        target.minWidth = x.x;
                        target.minHeight = x.y;
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOMinSize:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPreferredSize:static start.*/
                /**
                 * Tweens an LayoutElement's preferredWidth/Height to the given value.
                 Also stores the LayoutElement as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.LayoutElement}      target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPreferredSize: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPreferredSize", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.preferredWidth, target.preferredHeight );
                    }, function (x) {
                        target.preferredWidth = x.x;
                        target.preferredHeight = x.y;
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPreferredSize:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOScale:static start.*/
                /**
                 * Tweens a Outline's effectDistance to the given value.
                 Also stores the Outline as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Outline}            target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOScale: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOScale", this ); }

                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.effectDistance;
                    }, function (x) {
                        target.effectDistance = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOScale:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPos: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosX:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition X to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPosX: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPosX", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( endValue, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.X, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosX:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosY:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition Y to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPosY: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPosY", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( 0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.Y, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosY:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3D:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition3D to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector3}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPos3D: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos3D", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$13(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3D:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DX:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition3D X to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPos3DX: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos3DX", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, new pc.Vec3( endValue, 0, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.X, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DX:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DY:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition3D Y to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPos3DY: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos3DY", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, new pc.Vec3( 0, endValue, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.Y, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DY:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DZ:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition3D Z to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPos3DZ: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos3DZ", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, new pc.Vec3( 0, 0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.Z, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DZ:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorMax:static start.*/
                /**
                 * Tweens a RectTransform's anchorMax to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorMax: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorMax", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchorMax;
                    }, function (x) {
                        target.anchorMax = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorMax:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorMin:static start.*/
                /**
                 * Tweens a RectTransform's anchorMin to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorMin: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorMin", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchorMin;
                    }, function (x) {
                        target.anchorMin = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorMin:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPivot:static start.*/
                /**
                 * Tweens a RectTransform's pivot to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPivot: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPivot", this ); }

                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.pivot;
                    }, function (x) {
                        target.pivot = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPivot:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPivotX:static start.*/
                /**
                 * Tweens a RectTransform's pivot X to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPivotX: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPivotX", this ); }

                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.pivot;
                    }, function (x) {
                        target.pivot = x.$clone();
                    }, new pc.Vec2( endValue, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.X), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPivotX:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPivotY:static start.*/
                /**
                 * Tweens a RectTransform's pivot Y to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPivotY: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPivotY", this ); }

                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.pivot;
                    }, function (x) {
                        target.pivot = x.$clone();
                    }, new pc.Vec2( 0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.Y), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPivotY:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOSizeDelta:static start.*/
                /**
                 * Tweens a RectTransform's sizeDelta to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOSizeDelta: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOSizeDelta", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.sizeDelta;
                    }, function (x) {
                        target.sizeDelta = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOSizeDelta:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPunchAnchorPos:static start.*/
                /**
                 * Punches a RectTransform's anchoredPosition towards the given direction and then back to the starting one
                 as if it was connected to the starting position via an elastic.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}    target        
                 * @param   {UnityEngine.Vector2}          punch         The direction and strength of the punch (added to the RectTransform's current position)
                 * @param   {number}                       duration      The duration of the tween
                 * @param   {number}                       vibrato       Indicates how much will the punch vibrate
                 * @param   {number}                       elasticity    Represents how much (0 to 1) the vector will go beyond the starting position when bouncing backwards.
                 1 creates a full oscillation between the punch direction and the opposite direction,
                 while 0 oscillates only between the punch and the start position
                 * @param   {boolean}                      snapping      If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Tweener}
                 */
                DOPunchAnchorPos: function (target, punch, duration, vibrato, elasticity, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPunchAnchorPos", this ); }

                    if (vibrato === void 0) { vibrato = 10; }
                    if (elasticity === void 0) { elasticity = 1.0; }
                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetOptions$11(DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.DOTween.Punch(function () {
                        return UnityEngine.Vector3.FromVector2(target.anchoredPosition);
                    }, function (x) {
                        target.anchoredPosition = UnityEngine.Vector2.FromVector3(x.$clone());
                    }, UnityEngine.Vector3.FromVector2(punch.$clone()), duration, vibrato, elasticity), target), snapping);
                },
                /*DG.Tweening.DOTweenModuleUI.DOPunchAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos:static start.*/
                /**
                 * Shakes a RectTransform's anchoredPosition with the given values.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}          target            
                 * @param   {number}                             duration          The duration of the tween
                 * @param   {number}                             strength          The shake strength
                 * @param   {number}                             vibrato           Indicates how much will the shake vibrate
                 * @param   {number}                             randomness        Indicates how much the shake will be random (0 to 180 - values higher than 90 kind of suck, so beware). 
                 Setting it to 0 will shake along a single direction.
                 * @param   {boolean}                            snapping          If TRUE the tween will smoothly snap all values to integers
                 * @param   {boolean}                            fadeOut           If TRUE the shake will automatically fadeOut smoothly within the tween's duration, otherwise it will not
                 * @param   {DG.Tweening.ShakeRandomnessMode}    randomnessMode    Randomness mode
                 * @return  {DG.Tweening.Tweener}
                 */
                DOShakeAnchorPos: function (target, duration, strength, vibrato, randomness, snapping, fadeOut, randomnessMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOShakeAnchorPos", this ); }

                    if (strength === void 0) { strength = 100.0; }
                    if (vibrato === void 0) { vibrato = 10; }
                    if (randomness === void 0) { randomness = 90.0; }
                    if (snapping === void 0) { snapping = false; }
                    if (fadeOut === void 0) { fadeOut = true; }
                    if (randomnessMode === void 0) { randomnessMode = 0; }
                    return DG.Tweening.TweenSettingsExtensions.SetOptions$11(DG.Tweening.Core.Extensions.SetSpecialStartupMode(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.DOTween.Shake(function () {
                        return UnityEngine.Vector3.FromVector2(target.anchoredPosition);
                    }, function (x) {
                        target.anchoredPosition = UnityEngine.Vector2.FromVector3(x.$clone());
                    }, duration, strength, vibrato, randomness, true, fadeOut, randomnessMode), target), DG.Tweening.Core.Enums.SpecialStartupMode.SetShake), snapping);
                },
                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos$1:static start.*/
                /**
                 * Shakes a RectTransform's anchoredPosition with the given values.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}          target            
                 * @param   {number}                             duration          The duration of the tween
                 * @param   {UnityEngine.Vector2}                strength          The shake strength on each axis
                 * @param   {number}                             vibrato           Indicates how much will the shake vibrate
                 * @param   {number}                             randomness        Indicates how much the shake will be random (0 to 180 - values higher than 90 kind of suck, so beware). 
                 Setting it to 0 will shake along a single direction.
                 * @param   {boolean}                            snapping          If TRUE the tween will smoothly snap all values to integers
                 * @param   {boolean}                            fadeOut           If TRUE the shake will automatically fadeOut smoothly within the tween's duration, otherwise it will not
                 * @param   {DG.Tweening.ShakeRandomnessMode}    randomnessMode    Randomness mode
                 * @return  {DG.Tweening.Tweener}
                 */
                DOShakeAnchorPos$1: function (target, duration, strength, vibrato, randomness, snapping, fadeOut, randomnessMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOShakeAnchorPos$1", this ); }

                    if (vibrato === void 0) { vibrato = 10; }
                    if (randomness === void 0) { randomness = 90.0; }
                    if (snapping === void 0) { snapping = false; }
                    if (fadeOut === void 0) { fadeOut = true; }
                    if (randomnessMode === void 0) { randomnessMode = 0; }
                    return DG.Tweening.TweenSettingsExtensions.SetOptions$11(DG.Tweening.Core.Extensions.SetSpecialStartupMode(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.DOTween.Shake$1(function () {
                        return UnityEngine.Vector3.FromVector2(target.anchoredPosition);
                    }, function (x) {
                        target.anchoredPosition = UnityEngine.Vector2.FromVector3(x.$clone());
                    }, duration, UnityEngine.Vector3.FromVector2(strength.$clone()), vibrato, randomness, fadeOut, randomnessMode), target), DG.Tweening.Core.Enums.SpecialStartupMode.SetShake), snapping);
                },
                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOJumpAnchorPos:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition to the given value, while also applying a jump effect along the Y axis.
                 Returns a Sequence instead of a Tweener.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}    target       
                 * @param   {UnityEngine.Vector2}          endValue     The end value to reach
                 * @param   {number}                       jumpPower    Power of the jump (the max height of the jump is represented by this plus the final Y offset)
                 * @param   {number}                       numJumps     Total number of jumps
                 * @param   {number}                       duration     The duration of the tween
                 * @param   {boolean}                      snapping     If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Sequence}
                 */
                DOJumpAnchorPos: function (target, endValue, jumpPower, numJumps, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOJumpAnchorPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    if (numJumps < 1) {
                        numJumps = 1;
                    }
                    var startPosY = 0;
                    var offsetY = -1;
                    var offsetYSet = false;

                    // Separate Y Tween so we can elaborate elapsedPercentage on that insted of on the Sequence
                    // (in case users add a delay or other elements to the Sequence)
                    var s = DG.Tweening.DOTween.Sequence();
                    var yTween = DG.Tweening.TweenSettingsExtensions.OnStart(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetRelative(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( 0, jumpPower ), duration / (Bridge.Int.mul(numJumps, 2))), DG.Tweening.AxisConstraint.Y, snapping), DG.Tweening.Ease.OutQuad)), Bridge.Int.mul(numJumps, 2), DG.Tweening.LoopType.Yoyo), function () {
                        startPosY = target.anchoredPosition.y;
                    });
                    DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( endValue.x, 0 ), duration), DG.Tweening.AxisConstraint.X, snapping), DG.Tweening.Ease.Linear)), yTween), target), DG.Tweening.DOTween.defaultEaseType);
                    DG.Tweening.TweenSettingsExtensions.OnUpdate(DG.Tweening.Sequence, s, function () {
                        if (!offsetYSet) {
                            offsetYSet = true;
                            offsetY = s.isRelative ? endValue.y : endValue.y - startPosY;
                        }
                        var pos = target.anchoredPosition.$clone();
                        pos.y += DG.Tweening.DOVirtual.EasedValue(0, offsetY, DG.Tweening.TweenExtensions.ElapsedDirectionalPercentage(s), DG.Tweening.Ease.OutQuad);
                        target.anchoredPosition = pos.$clone();
                    });
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUI.DOJumpAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DONormalizedPos:static start.*/
                /**
                 * Tweens a ScrollRect's horizontal/verticalNormalizedPosition to the given value.
                 Also stores the ScrollRect as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.ScrollRect}    target      
                 * @param   {UnityEngine.Vector2}          endValue    The end value to reach
                 * @param   {number}                       duration    The duration of the tween
                 * @param   {boolean}                      snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Tweener}
                 */
                DONormalizedPos: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DONormalizedPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.horizontalNormalizedPosition, target.verticalNormalizedPosition );
                    }, function (x) {
                        target.horizontalNormalizedPosition = x.x;
                        target.verticalNormalizedPosition = x.y;
                    }, endValue.$clone(), duration), snapping), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DONormalizedPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOHorizontalNormalizedPos:static start.*/
                /**
                 * Tweens a ScrollRect's horizontalNormalizedPosition to the given value.
                 Also stores the ScrollRect as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.ScrollRect}    target      
                 * @param   {number}                       endValue    The end value to reach
                 * @param   {number}                       duration    The duration of the tween
                 * @param   {boolean}                      snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Tweener}
                 */
                DOHorizontalNormalizedPos: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOHorizontalNormalizedPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$2(DG.Tweening.DOTween.To$4(function () {
                        return target.horizontalNormalizedPosition;
                    }, function (x) {
                        target.horizontalNormalizedPosition = x;
                    }, endValue, duration), snapping), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOHorizontalNormalizedPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOVerticalNormalizedPos:static start.*/
                /**
                 * Tweens a ScrollRect's verticalNormalizedPosition to the given value.
                 Also stores the ScrollRect as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.ScrollRect}    target      
                 * @param   {number}                       endValue    The end value to reach
                 * @param   {number}                       duration    The duration of the tween
                 * @param   {boolean}                      snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Tweener}
                 */
                DOVerticalNormalizedPos: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOVerticalNormalizedPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$2(DG.Tweening.DOTween.To$4(function () {
                        return target.verticalNormalizedPosition;
                    }, function (x) {
                        target.verticalNormalizedPosition = x;
                    }, endValue, duration), snapping), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOVerticalNormalizedPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOValue:static start.*/
                /**
                 * Tweens a Slider's value to the given value.
                 Also stores the Slider as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Slider}             target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOValue: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOValue", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.value;
                    }, function (x) {
                        target.value = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$2(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOValue:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOCounter:static start.*/
                /**
                 * Tweens a Text's text from one integer to another, with options for thousands separators
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Text}                 target                   
                 * @param   {number}                              fromValue                The value to start from
                 * @param   {number}                              endValue                 The end value to reach
                 * @param   {number}                              duration                 The duration of the tween
                 * @param   {boolean}                             addThousandsSeparator    If TRUE (default) also adds thousands separators
                 * @param   {System.Globalization.CultureInfo}    culture                  The {@link } to use (InvariantCulture if NULL)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOCounter: function (target, fromValue, endValue, duration, addThousandsSeparator, culture) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOCounter", this ); }

                    if (addThousandsSeparator === void 0) { addThousandsSeparator = true; }
                    if (culture === void 0) { culture = null; }
                    var v = fromValue;
                    var cInfo = !addThousandsSeparator ? null : culture || System.Globalization.CultureInfo.invariantCulture;
                    var t = DG.Tweening.DOTween.To$2(function () {
                        return v;
                    }, function (x) {
                        v = x;
                        target.text = addThousandsSeparator ? System.Int32.format(v, "N0", cInfo) : Bridge.toString(v);
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Int32,System.Int32,DG.Tweening.Plugins.Options.NoOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOCounter:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOText:static start.*/
                /**
                 * Tweens a Text's text to the given value.
                 Also stores the Text as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Text}               target             
                 * @param   {string}                            endValue           The end string to tween to
                 * @param   {number}                            duration           The duration of the tween
                 * @param   {boolean}                           richTextEnabled    If TRUE (default), rich text will be interpreted correctly while animated,
                 otherwise all tags will be considered as normal text
                 * @param   {DG.Tweening.ScrambleMode}          scrambleMode       The type of scramble mode to use, if any
                 * @param   {string}                            scrambleChars      A string containing the characters to use for scrambling.
                 Use as many characters as possible (minimum 10) because DOTween uses a fast scramble mode which gives better results with more characters.
                 Leave it to NULL (default) to use default ones
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOText: function (target, endValue, duration, richTextEnabled, scrambleMode, scrambleChars) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOText", this ); }

                    if (richTextEnabled === void 0) { richTextEnabled = true; }
                    if (scrambleMode === void 0) { scrambleMode = 0; }
                    if (scrambleChars === void 0) { scrambleChars = null; }
                    if (endValue == null) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogWarning("You can't pass a NULL string to DOText: an empty string will be used instead to avoid errors");
                        }
                        endValue = "";
                    }
                    var t = DG.Tweening.DOTween.To$5(function () {
                        return target.text;
                    }, function (x) {
                        target.text = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$3(t, richTextEnabled, scrambleMode, scrambleChars), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOText:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor:static start.*/
                /**
                 * Tweens a Graphic's color to the given value,
                 in a way that allows other DOBlendableColor tweens to work together on the same target,
                 instead than fight each other as multiple DOColor would do.
                 Also stores the Graphic as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Graphic}    target      
                 * @param   {UnityEngine.Color}         endValue    The value to tween to
                 * @param   {number}                    duration    The duration of the tween
                 * @return  {DG.Tweening.Tweener}
                 */
                DOBlendableColor: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOBlendableColor", this ); }

                    var $t;
                    endValue = ($t = target.color, new pc.Color( endValue.r - $t.r, endValue.g - $t.g, endValue.b - $t.b, endValue.a - $t.a ));
                    var to = new pc.Color( 0, 0, 0, 0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var diff = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + diff.$clone().r, $t1.g + diff.$clone().g, $t1.b + diff.$clone().b, $t1.a + diff.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$1:static start.*/
                /**
                 * Tweens a Image's color to the given value,
                 in a way that allows other DOBlendableColor tweens to work together on the same target,
                 instead than fight each other as multiple DOColor would do.
                 Also stores the Image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Image}    target      
                 * @param   {UnityEngine.Color}       endValue    The value to tween to
                 * @param   {number}                  duration    The duration of the tween
                 * @return  {DG.Tweening.Tweener}
                 */
                DOBlendableColor$1: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOBlendableColor$1", this ); }

                    var $t;
                    endValue = ($t = target.color, new pc.Color( endValue.r - $t.r, endValue.g - $t.g, endValue.b - $t.b, endValue.a - $t.a ));
                    var to = new pc.Color( 0, 0, 0, 0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var diff = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + diff.$clone().r, $t1.g + diff.$clone().g, $t1.b + diff.$clone().b, $t1.a + diff.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$2:static start.*/
                /**
                 * Tweens a Text's color BY the given value,
                 in a way that allows other DOBlendableColor tweens to work together on the same target,
                 instead than fight each other as multiple DOColor would do.
                 Also stores the Text as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Text}    target      
                 * @param   {UnityEngine.Color}      endValue    The value to tween to
                 * @param   {number}                 duration    The duration of the tween
                 * @return  {DG.Tweening.Tweener}
                 */
                DOBlendableColor$2: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOBlendableColor$2", this ); }

                    var $t;
                    endValue = ($t = target.color, new pc.Color( endValue.r - $t.r, endValue.g - $t.g, endValue.b - $t.b, endValue.a - $t.a ));
                    var to = new pc.Color( 0, 0, 0, 0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var diff = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + diff.$clone().r, $t1.g + diff.$clone().g, $t1.b + diff.$clone().b, $t1.a + diff.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$2:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOShapeCircle:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition so that it draws a circle around the given center.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations.<p />
                 IMPORTANT: SetFrom(value) requires a {@link } instead of a float, where the X property represents the "from degrees value"
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target             
                 * @param   {UnityEngine.Vector2}               center             Circle-center/pivot around which to rotate (in UI anchoredPosition coordinates)
                 * @param   {number}                            endValueDegrees    The end value degrees to reach (to rotate counter-clockwise pass a negative value)
                 * @param   {number}                            duration           The duration of the tween
                 * @param   {boolean}                           relativeCenter     If TRUE the {@link } coordinates will be considered as relative to the target's current anchoredPosition
                 * @param   {boolean}                           snapping           If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOShapeCircle: function (target, center, endValueDegrees, duration, relativeCenter, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOShapeCircle", this ); }

                    if (relativeCenter === void 0) { relativeCenter = false; }
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To(UnityEngine.Vector2, UnityEngine.Vector2, DG.Tweening.Plugins.CircleOptions, DG.Tweening.Plugins.CirclePlugin.Get(), function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, center.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$7(t, endValueDegrees, relativeCenter, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOShapeCircle:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUI end.*/

    /*DG.Tweening.DOTweenModuleUI+Utils start.*/
    Bridge.define("DG.Tweening.DOTweenModuleUI.Utils", {
        $kind: 1002,
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUI+Utils.SwitchToRectTransform:static start.*/
                /**
                 * Converts the anchoredPosition of the first RectTransform to the second RectTransform,
                 taking into consideration offset, anchors and pivot, and returns the new anchoredPosition
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI.Utils
                 * @memberof DG.Tweening.DOTweenModuleUI.Utils
                 * @param   {UnityEngine.RectTransform}    from    
                 * @param   {UnityEngine.RectTransform}    to
                 * @return  {UnityEngine.Vector2}
                 */
                SwitchToRectTransform: function (from, to) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI.Utils#SwitchToRectTransform", this ); }

                    var localPoint = { v : new UnityEngine.Vector2() };
                    var fromPivotDerivedOffset = new pc.Vec2( from.rect.width * 0.5 + from.rect.xMin, from.rect.height * 0.5 + from.rect.yMin );
                    var screenP = UnityEngine.RectTransformUtility.WorldToScreenPoint(null, from.position);
                    screenP = screenP.$clone().add( fromPivotDerivedOffset.$clone() );
                    UnityEngine.RectTransformUtility.ScreenPointToLocalPointInRectangle(to, screenP, null, localPoint);
                    var pivotDerivedOffset = new pc.Vec2( to.rect.width * 0.5 + to.rect.xMin, to.rect.height * 0.5 + to.rect.yMin );
                    return to.anchoredPosition.$clone().add( localPoint.v ).sub( pivotDerivedOffset );
                },
                /*DG.Tweening.DOTweenModuleUI+Utils.SwitchToRectTransform:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUI+Utils end.*/

    /*DG.Tweening.DOTweenModuleUnityVersion start.*/
    /** @namespace DG.Tweening */

    /**
     * Shortcuts/functions that are not strictly related to specific Modules
     but are available only on some Unity versions
     *
     * @static
     * @abstract
     * @public
     * @class DG.Tweening.DOTweenModuleUnityVersion
     */
    Bridge.define("DG.Tweening.DOTweenModuleUnityVersion", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor:static start.*/
                /**
                 * Tweens a Material's color using the given gradient
                 (NOTE 1: only uses the colors of the gradient, not the alphas - NOTE 2: creates a Sequence, not a Tweener).
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {UnityEngine.Material}    target      
                 * @param   {pc.ColorGradient}        gradient    The gradient to use
                 * @param   {number}                  duration    The duration of the tween
                 * @return  {DG.Tweening.Sequence}
                 */
                DOGradientColor: function (target, gradient, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#DOGradientColor", this ); }

                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0) {
                            target.color = c.color.$clone();
                            continue;
                        }
                        var colorDuration = i === ((len - 1) | 0) ? duration - DG.Tweening.TweenExtensions.Duration(s, false) : duration * (i === 0 ? c.time : c.time - colors[((i - 1) | 0)].time);
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.ShortcutExtensions.DOColor$3(target, c.color.$clone(), colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor$1:static start.*/
                /**
                 * Tweens a Material's named color property using the given gradient
                 (NOTE 1: only uses the colors of the gradient, not the alphas - NOTE 2: creates a Sequence, not a Tweener).
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {UnityEngine.Material}    target      
                 * @param   {pc.ColorGradient}        gradient    The gradient to use
                 * @param   {string}                  property    The name of the material property to tween (like _Tint or _SpecColor)
                 * @param   {number}                  duration    The duration of the tween
                 * @return  {DG.Tweening.Sequence}
                 */
                DOGradientColor$1: function (target, gradient, property, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#DOGradientColor$1", this ); }

                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0) {
                            target.SetColor$1(property, c.color);
                            continue;
                        }
                        var colorDuration = i === ((len - 1) | 0) ? duration - DG.Tweening.TweenExtensions.Duration(s, false) : duration * (i === 0 ? c.time : c.time - colors[((i - 1) | 0)].time);
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.ShortcutExtensions.DOColor$4(target, c.color.$clone(), property, colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor$1:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForCompletion:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed or complete.
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForCompletion(true);</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForCompletion: function (t, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForCompletion", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForCompletion(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForCompletion:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForRewind:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed or rewinded.
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForRewind();</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForRewind: function (t, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForRewind", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForRewind(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForRewind:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForKill:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed.
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForKill();</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForKill: function (t, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForKill", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForKill(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForKill:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForElapsedLoops:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed or has gone through the given amount of loops.
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForElapsedLoops(2);</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {number}                                elapsedLoops                    Elapsed loops to wait for
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForElapsedLoops: function (t, elapsedLoops, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForElapsedLoops", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops(t, elapsedLoops);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForElapsedLoops:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForPosition:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed
                 or has reached the given time position (loops included, delays excluded).
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForPosition(2.5f);</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {number}                                position                        Position (loops included, delays excluded) to wait for
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForPosition: function (t, position, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForPosition", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForPosition(t, position);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForPosition:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForStart:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed or started
                 (meaning when the tween is set in a playing state the first time, after any eventual delay).
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForStart();</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForStart: function (t, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForStart", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForStart(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForStart:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.DOOffset:static start.*/
                /**
                 * Tweens a Material's named texture offset property with the given ID to the given value.
                 Also stores the material as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {UnityEngine.Material}              target        
                 * @param   {UnityEngine.Vector2}               endValue      The end value to reach
                 * @param   {number}                            propertyID    The ID of the material property to tween (also called nameID in Unity's manual)
                 * @param   {number}                            duration      The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOOffset: function (target, endValue, propertyID, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#DOOffset", this ); }

                    if (!target.HasProperty(propertyID)) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogMissingMaterialProperty(propertyID);
                        }
                        return null;
                    }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.GetTextureOffset(propertyID);
                    }, function (x) {
                        target.SetTextureOffset(propertyID, x);
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOOffset:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.DOTiling:static start.*/
                /**
                 * Tweens a Material's named texture scale property with the given ID to the given value.
                 Also stores the material as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {UnityEngine.Material}              target        
                 * @param   {UnityEngine.Vector2}               endValue      The end value to reach
                 * @param   {number}                            propertyID    The ID of the material property to tween (also called nameID in Unity's manual)
                 * @param   {number}                            duration      The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOTiling: function (target, endValue, propertyID, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#DOTiling", this ); }

                    if (!target.HasProperty(propertyID)) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogMissingMaterialProperty(propertyID);
                        }
                        return null;
                    }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.GetTextureScale(propertyID);
                    }, function (x) {
                        target.SetTextureScale(propertyID, x);
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOTiling:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUnityVersion end.*/

    /*DG.Tweening.DOTweenModuleUtils start.*/
    /**
     * Utility functions that deal with available Modules.
     Modules defines:
     - DOTAUDIO
     - DOTPHYSICS
     - DOTPHYSICS2D
     - DOTSPRITE
     - DOTUI
     Extra defines set and used for implementation of external assets:
     - DOTWEEN_TMP ► TextMesh Pro
     - DOTWEEN_TK2D ► 2D Toolkit
     *
     * @static
     * @abstract
     * @public
     * @class DG.Tweening.DOTweenModuleUtils
     */
    Bridge.define("DG.Tweening.DOTweenModuleUtils", {
        statics: {
            fields: {
                _initialized: false
            },
            methods: {
                /*DG.Tweening.DOTweenModuleUtils.Init:static start.*/
                /**
                 * Called via Reflection by DOTweenComponent on Awake
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUtils
                 * @memberof DG.Tweening.DOTweenModuleUtils
                 * @return  {void}
                 */
                Init: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils#Init", this ); }

                    if (DG.Tweening.DOTweenModuleUtils._initialized) {
                        return;
                    }

                    DG.Tweening.DOTweenModuleUtils._initialized = true;
                    DG.Tweening.Core.DOTweenExternalCommand.addSetOrientationOnPath(DG.Tweening.DOTweenModuleUtils.Physics.SetOrientationOnPath);

                },
                /*DG.Tweening.DOTweenModuleUtils.Init:static end.*/

                /*DG.Tweening.DOTweenModuleUtils.Preserver:static start.*/
                Preserver: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils#Preserver", this ); }

                    var loadedAssemblies = System.AppDomain.getAssemblies();
                    var mi = Bridge.Reflection.getMembers(UnityEngine.MonoBehaviour, 8, 284, "Stub");
                },
                /*DG.Tweening.DOTweenModuleUtils.Preserver:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUtils end.*/

    /*DG.Tweening.DOTweenModuleUtils+Physics start.*/
    Bridge.define("DG.Tweening.DOTweenModuleUtils.Physics", {
        $kind: 1002,
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUtils+Physics.SetOrientationOnPath:static start.*/
                SetOrientationOnPath: function (options, t, newRot, trans) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils.Physics#SetOrientationOnPath", this ); }

                    if (options.isRigidbody) {
                        Bridge.cast(t.target, UnityEngine.Rigidbody).rotation = newRot.$clone();
                    } else {
                        trans.rotation = newRot.$clone();
                    }
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.SetOrientationOnPath:static end.*/

                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody2D:static start.*/
                HasRigidbody2D: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils.Physics#HasRigidbody2D", this ); }

                    return UnityEngine.Component.op_Inequality(target.GetComponent(UnityEngine.Rigidbody2D), null);
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody2D:static end.*/

                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody:static start.*/
                HasRigidbody: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils.Physics#HasRigidbody", this ); }

                    return UnityEngine.Component.op_Inequality(target.GetComponent(UnityEngine.Rigidbody), null);
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody:static end.*/

                /*DG.Tweening.DOTweenModuleUtils+Physics.CreateDOTweenPathTween:static start.*/
                CreateDOTweenPathTween: function (target, tweenRigidbody, isLocal, path, duration, pathMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils.Physics#CreateDOTweenPathTween", this ); }

                    var t = null;
                    var rBodyFoundAndTweened = false;
                    if (tweenRigidbody) {
                        var rBody = target.GetComponent(UnityEngine.Rigidbody);
                        if (UnityEngine.Component.op_Inequality(rBody, null)) {
                            rBodyFoundAndTweened = true;
                            t = isLocal ? DG.Tweening.DOTweenModulePhysics.DOLocalPath$1(rBody, path, duration, pathMode) : DG.Tweening.DOTweenModulePhysics.DOPath$1(rBody, path, duration, pathMode);
                        }
                    }
                    if (!rBodyFoundAndTweened && tweenRigidbody) {
                        var rBody2D = target.GetComponent(UnityEngine.Rigidbody2D);
                        if (UnityEngine.Component.op_Inequality(rBody2D, null)) {
                            rBodyFoundAndTweened = true;
                            t = isLocal ? DG.Tweening.DOTweenModulePhysics2D.DOLocalPath$1(rBody2D, path, duration, pathMode) : DG.Tweening.DOTweenModulePhysics2D.DOPath$1(rBody2D, path, duration, pathMode);
                        }
                    }
                    if (!rBodyFoundAndTweened) {
                        t = isLocal ? DG.Tweening.ShortcutExtensions.DOLocalPath(target.transform, path, duration, pathMode) : DG.Tweening.ShortcutExtensions.DOPath(target.transform, path, duration, pathMode);
                    }
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.CreateDOTweenPathTween:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUtils+Physics end.*/

    /*Disk start.*/
    Bridge.define("Disk", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            requiredCount: 0,
            moveDistance: 0,
            moveTime: 0,
            moved: false,
            items: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Disk#init", this ); }

                this.requiredCount = 3;
                this.moveDistance = 0.5;
                this.moveTime = 0.9;
                this.moved = false;
                this.items = new (System.Collections.Generic.List$1(UnityEngine.Transform)).ctor();
            }
        },
        methods: {
            /*Disk.AddItem start.*/
            AddItem: function (item) {
if ( TRACE ) { TRACE( "Disk#AddItem", this ); }

                if (this.items.contains(item)) {
                    return;
                }
                this.items.add(item);
                if (this.items.Count === this.requiredCount && !this.moved) {
                    this.moved = true;
                    this.MoveDisk();
                }
            },
            /*Disk.AddItem end.*/

            /*Disk.MoveDisk start.*/
            MoveDisk: function () {
if ( TRACE ) { TRACE( "Disk#MoveDisk", this ); }

                UnityEngine.Debug.Log$1("\u1eadnnasa");
                var target = this.transform.position.$clone().add( pc.Vec3.RIGHT.clone().clone().scale( this.moveDistance ) );
                DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.SetSpeedBased(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOMove(this.transform, target.$clone(), 2.8)), DG.Tweening.Ease.OutQuart), Bridge.fn.bind(this, function () {
                    UnityEngine.MonoBehaviour.Destroy(this.gameObject);
                }));
            },
            /*Disk.MoveDisk end.*/


        }
    });
    /*Disk end.*/

    /*DiskTransform start.*/
    Bridge.define("DiskTransform", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                instance: null
            }
        },
        methods: {
            /*DiskTransform.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "DiskTransform#Awake", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(DiskTransform.instance, null)) {
                    DiskTransform.instance = this;
                } else {
                    UnityEngine.MonoBehaviour.Destroy(this.gameObject);
                }
            },
            /*DiskTransform.Awake end.*/


        }
    });
    /*DiskTransform end.*/

    /*DragItem start.*/
    Bridge.define("DragItem", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                currentDrag: null
            }
        },
        fields: {
            offset: null,
            startPos: null,
            startParent: null,
            cam: null,
            tween: null,
            sr: null,
            startScale: null,
            startSlot: null,
            isLocked: false,
            focusOutlineSize: 0,
            outlineTweenTime: 0,
            outline: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "DragItem#init", this ); }

                this.offset = new UnityEngine.Vector3();
                this.startPos = new UnityEngine.Vector3();
                this.startScale = new UnityEngine.Vector3();
                this.isLocked = false;
                this.focusOutlineSize = 1.0;
                this.outlineTweenTime = 0.12;
            }
        },
        methods: {
            /*DragItem.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "DragItem#Awake", this ); }

                this.cam = UnityEngine.Camera.main;
                this.sr = this.GetComponent(UnityEngine.SpriteRenderer);
                this.startScale = this.transform.localScale.$clone();
                this.outline = this.transform.GetChild(0).gameObject;
                this.outline.SetActive(false); // mặc định tắt
            },
            /*DragItem.Awake end.*/

            /*DragItem.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "DragItem#Update", this ); }

                if (UnityEngine.Input.GetMouseButtonDown(0)) {
                    if (!CountdownTimer.instance.hasStarted) {
                        CountdownTimer.instance.hasStarted = true;
                        CountdownTimer.instance.StartCountdown();
                    }
                    this.TryPick();
                }

                if (UnityEngine.Input.GetMouseButton(0) && UnityEngine.MonoBehaviour.op_Equality(DragItem.currentDrag, this)) {

                    this.Drag();
                }

                if (UnityEngine.Input.GetMouseButtonUp(0) && UnityEngine.MonoBehaviour.op_Equality(DragItem.currentDrag, this)) {
                    this.Drop();
                }
            },
            /*DragItem.Update end.*/

            /*DragItem.TryPick start.*/
            TryPick: function () {
if ( TRACE ) { TRACE( "DragItem#TryPick", this ); }

                var $t;
                if (GameManager.Instance.tutGame.activeSelf) {
                    GameManager.Instance.tutGame.SetActive(false);
                }
                if (this.isLocked || GameManager.Instance.finishGame) {
                    return;
                }
                if (this.isLocked || GameManager.Instance.finishGame) {
                    return;
                }

                TrayManager.instance.OnUserBeginInteract(); // ✅ ĐÚNG
                var mouseWorld = UnityEngine.Vector2.FromVector3(this.cam.ScreenToWorldPoint(UnityEngine.Input.mousePosition));
                var hits = UnityEngine.Physics2D.OverlapPointAll(mouseWorld);
                $t = Bridge.getEnumerator(hits);
                try {
                    while ($t.moveNext()) {
                        var hit = $t.Current;
                        if (UnityEngine.GameObject.op_Equality(hit.gameObject, this.gameObject)) {
                            DragItem.currentDrag = this;
                            AudioManager.Instance.PlaySFX(AudioManager.Instance.drag);
                            this.tween != null ? DG.Tweening.TweenExtensions.Kill(this.tween) : null;
                            this.startPos = this.transform.position.$clone();
                            this.startParent = this.transform.parent;
                            this.startSlot = UnityEngine.Object.op_Implicit(this.startParent) ? this.startParent.GetComponent(Slot) : null;
                            this.offset = this.transform.position.$clone().sub( UnityEngine.Vector3.FromVector2(mouseWorld) );
                            this.sr.sortingOrder = 10;
                            this.outline.GetComponent(UnityEngine.SpriteRenderer).sortingOrder = 9;
                            this.ShowOutline(true);
                            return;
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*DragItem.TryPick end.*/

            /*DragItem.Drag start.*/
            Drag: function () {
if ( TRACE ) { TRACE( "DragItem#Drag", this ); }

                var mouseWorld = this.cam.ScreenToWorldPoint(UnityEngine.Input.mousePosition);
                mouseWorld.z = 0;
                this.transform.position = mouseWorld.$clone().add( this.offset );
            },
            /*DragItem.Drag end.*/

            /*DragItem.Drop start.*/
            Drop: function () {
if ( TRACE ) { TRACE( "DragItem#Drop", this ); }

                TrayManager.instance.OnUserEndInteract();
                this.sr.sortingOrder = 0;
                this.outline.GetComponent(UnityEngine.SpriteRenderer).sortingOrder = -1;
                this.ShowOutline(false);
                this.PlayDropScale();

                var slot = this.FindNearestSlot();

                if (UnityEngine.MonoBehaviour.op_Inequality(slot, null) && slot.CanAcceptItem() && (slot.IsEmpty() || UnityEngine.Component.op_Equality(slot.transform, this.startParent))) {
                    this.Snap(slot);
                } else {
                    this.Return();
                }
                DragItem.currentDrag = null;
            },
            /*DragItem.Drop end.*/

            /*DragItem.Snap start.*/
            Snap: function (slot) {
if ( TRACE ) { TRACE( "DragItem#Snap", this ); }

                var oldSlot = UnityEngine.Object.op_Implicit(this.startParent) ? this.startParent.GetComponent(Slot) : null;
                if (UnityEngine.MonoBehaviour.op_Inequality(oldSlot, null)) {
                    oldSlot.SetItem(null);
                }

                this.transform.SetParent(slot.transform);

                this.tween = DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOLocalMove(this.transform, slot.anchor.localPosition.$clone(), 0.25), DG.Tweening.Ease.OutBack), Bridge.fn.bind(this, function () {
                    slot.SetItem(this);

                    var tray = slot.GetComponentInParent(Tray);
                    if (UnityEngine.MonoBehaviour.op_Inequality(tray, null)) {
                        tray.CheckMatch();
                    }
                }));
            },
            /*DragItem.Snap end.*/

            /*DragItem.Return start.*/
            Return: function () {
if ( TRACE ) { TRACE( "DragItem#Return", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(this.startSlot, null) || UnityEngine.Component.op_Equality(this.startSlot.anchor, null)) {
                    return;
                }

                this.transform.SetParent(this.startSlot.transform);

                this.tween = DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOLocalMove(this.transform, this.startSlot.anchor.localPosition.$clone(), 0.5), DG.Tweening.Ease.OutQuad);
            },
            /*DragItem.Return end.*/

            /*DragItem.FindNearestSlot start.*/
            FindNearestSlot: function () {
if ( TRACE ) { TRACE( "DragItem#FindNearestSlot", this ); }

                var $t;
                var slots = UnityEngine.Object.FindObjectsOfType(Slot);
                var min = 1.0;
                var best = null;

                $t = Bridge.getEnumerator(slots);
                try {
                    while ($t.moveNext()) {
                        var s = $t.Current;
                        if (UnityEngine.Component.op_Equality(s.anchor, null)) {
                            continue;
                        }

                        // Skip occupied slots except the one we started from
                        if (!s.IsEmpty() && UnityEngine.Component.op_Inequality(s.transform, this.startParent)) {
                            continue;
                        }

                        var d = UnityEngine.Vector2.FromVector3(this.transform.position.$clone()).sub( UnityEngine.Vector2.FromVector3(s.anchor.position) ).length();
                        if (d < min) {
                            min = d;
                            best = s;
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                return best;
            },
            /*DragItem.FindNearestSlot end.*/

            /*DragItem.PlayDropScale start.*/
            PlayDropScale: function () {
if ( TRACE ) { TRACE( "DragItem#PlayDropScale", this ); }

                this.tween != null ? DG.Tweening.TweenExtensions.Kill(this.tween) : null;

                this.transform.localScale = this.startScale.$clone();
                DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOScale$1(this.transform, this.startScale.$clone().clone().scale( 0.85 ), 0.1), DG.Tweening.Ease.InOutQuad), Bridge.fn.bind(this, function () {
                    DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOScale$1(this.transform, this.startScale.$clone(), 0.12), DG.Tweening.Ease.OutBack);
                }));
            },
            /*DragItem.PlayDropScale end.*/

            /*DragItem.ShowOutline start.*/
            ShowOutline: function (show) {
if ( TRACE ) { TRACE( "DragItem#ShowOutline", this ); }

                if (UnityEngine.GameObject.op_Inequality(this.outline, null)) {
                    this.outline.SetActive(show);
                }
            },
            /*DragItem.ShowOutline end.*/


        }
    });
    /*DragItem end.*/

    /*EndCart_Lose start.*/
    Bridge.define("EndCart_Lose", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            actionButton: null,
            emoji: null,
            logo: null,
            praticle: null,
            buttonScaleTime: 0,
            itemStartScale: 0,
            itemPopScale: 0,
            itemInTime: 0,
            itemSettleTime: 0,
            buttonPulse: null,
            itemFinalScale: 0,
            emojiFinalScale: 0,
            otherItemFinalScale: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "EndCart_Lose#init", this ); }

                this.buttonScaleTime = 0.35;
                this.itemStartScale = 0.4;
                this.itemPopScale = 1.0;
                this.itemInTime = 0.25;
                this.itemSettleTime = 0.05;
                this.itemFinalScale = 0.85;
                this.emojiFinalScale = 0.45;
                this.otherItemFinalScale = 0.85;
            }
        },
        methods: {
            /*EndCart_Lose.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "EndCart_Lose#Awake", this ); }

                this.InitState();
            },
            /*EndCart_Lose.Awake end.*/

            /*EndCart_Lose.InitState start.*/
            InitState: function () {
if ( TRACE ) { TRACE( "EndCart_Lose#InitState", this ); }

                this.SetItemInit(this.emoji);
                this.SetItemInit(this.logo);
                //SetItemInit(icon);

                if (UnityEngine.GameObject.op_Inequality(this.praticle, null)) {
                    this.praticle.SetActive(false);
                }

                this.actionButton.transform.localScale = pc.Vec3.ZERO.clone();
            },
            /*EndCart_Lose.InitState end.*/

            /*EndCart_Lose.SetItemInit start.*/
            SetItemInit: function (go) {
if ( TRACE ) { TRACE( "EndCart_Lose#SetItemInit", this ); }

                if (UnityEngine.GameObject.op_Equality(go, null)) {
                    return;
                }
                go.transform.localScale = new pc.Vec3( 1, 1, 1 ).clone().scale( this.itemStartScale );
                go.SetActive(false);
            },
            /*EndCart_Lose.SetItemInit end.*/

            /*EndCart_Lose.Show start.*/
            Show: function () {
if ( TRACE ) { TRACE( "EndCart_Lose#Show", this ); }

                this.gameObject.SetActive(true);

                DG.Tweening.DOTween.KillAll();
                this.buttonPulse != null ? DG.Tweening.TweenExtensions.Kill(this.buttonPulse) : null;

                this.InitState();

                DG.Tweening.DOVirtual.DelayedCall(0.01, Bridge.fn.bind(this, function () {
                    var seq = DG.Tweening.DOTween.Sequence();

                    // ===== ITEMS + PARTICLE (CÙNG LÚC) =====
                    DG.Tweening.TweenSettingsExtensions.AppendCallback(seq, Bridge.fn.bind(this, function () {
                        if (UnityEngine.Object.op_Implicit(this.emoji)) {
                            this.emoji.SetActive(true);
                        }
                        if (UnityEngine.Object.op_Implicit(this.logo)) {
                            this.logo.SetActive(true);
                        }
                        //if (icon) icon.SetActive(true);
                        if (UnityEngine.Object.op_Implicit(this.praticle)) {
                            this.praticle.SetActive(true);
                        }
                    }));

                    this.JoinItemAnim(seq, this.emoji, this.emojiFinalScale);
                    this.JoinItemAnim(seq, this.logo, this.otherItemFinalScale);
                    //JoinItemAnim(seq, icon, otherItemFinalScale);


                    // ===== BUTTON SAU =====
                    DG.Tweening.TweenSettingsExtensions.AppendInterval(seq, this.itemInTime + this.itemSettleTime + 0.1);
                    DG.Tweening.TweenSettingsExtensions.Append(seq, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOScale(this.actionButton.transform, 1.0, this.buttonScaleTime), DG.Tweening.Ease.OutBack));
                    DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Sequence, seq, Bridge.fn.cacheBind(this, this.StartButtonPulse));
                }));
            },
            /*EndCart_Lose.Show end.*/

            /*EndCart_Lose.JoinItemAnim start.*/
            JoinItemAnim: function (mainSeq, go, finalScale) {
if ( TRACE ) { TRACE( "EndCart_Lose#JoinItemAnim", this ); }

                if (UnityEngine.GameObject.op_Equality(go, null)) {
                    return;
                }

                DG.Tweening.TweenSettingsExtensions.Join(mainSeq, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOScale(go.transform, finalScale, this.itemInTime), DG.Tweening.Ease.OutCubic));
            },
            /*EndCart_Lose.JoinItemAnim end.*/

            /*EndCart_Lose.StartButtonPulse start.*/
            StartButtonPulse: function () {
if ( TRACE ) { TRACE( "EndCart_Lose#StartButtonPulse", this ); }

                this.buttonPulse != null ? DG.Tweening.TweenExtensions.Kill(this.buttonPulse) : null;
                this.buttonPulse = DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOScale(this.actionButton.transform, 1.15, 0.6), DG.Tweening.Ease.InOutQuad), -1, DG.Tweening.LoopType.Yoyo);
            },
            /*EndCart_Lose.StartButtonPulse end.*/

            /*EndCart_Lose.Hide start.*/
            Hide: function () {
if ( TRACE ) { TRACE( "EndCart_Lose#Hide", this ); }

                this.buttonPulse != null ? DG.Tweening.TweenExtensions.Kill(this.buttonPulse) : null;

                var seq = DG.Tweening.DOTween.Sequence();
                DG.Tweening.TweenSettingsExtensions.Join(seq, DG.Tweening.ShortcutExtensions.DOScale(this.actionButton.transform, 0.0, 0.2));

                this.HideItem(seq, this.emoji);
                this.HideItem(seq, this.logo);
                //HideItem(seq, icon);

                if (UnityEngine.GameObject.op_Inequality(this.praticle, null)) {
                    this.praticle.SetActive(false);
                }
                DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Sequence, seq, Bridge.fn.bind(this, function () {
                    this.gameObject.SetActive(false);
                }));
            },
            /*EndCart_Lose.Hide end.*/

            /*EndCart_Lose.HideItem start.*/
            HideItem: function (seq, go) {
if ( TRACE ) { TRACE( "EndCart_Lose#HideItem", this ); }

                if (UnityEngine.GameObject.op_Equality(go, null)) {
                    return;
                }
                DG.Tweening.TweenSettingsExtensions.Join(seq, DG.Tweening.ShortcutExtensions.DOScale(go.transform, 0.0, 0.2));
            },
            /*EndCart_Lose.HideItem end.*/


        }
    });
    /*EndCart_Lose end.*/

    /*GameManager start.*/
    Bridge.define("GameManager", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                Instance: null
            }
        },
        fields: {
            isClickToLog: false,
            clicksToLog: 0,
            isTimer: false,
            time: 0,
            clickCount: 0,
            isClick: false,
            finishGame: false,
            textPoint: null,
            point: 0,
            tutGame: null,
            target: null,
            text_target: null,
            totalTime: 0,
            currentTime: 0,
            lastIsTimer: false,
            timerCo: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "GameManager#init", this ); }

                this.clicksToLog = 15;
                this.time = 30;
                this.clickCount = 0;
                this.finishGame = false;
                this.point = 0;
            }
        },
        methods: {
            /*GameManager.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "GameManager#Awake", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(GameManager.Instance, null)) {
                    GameManager.Instance = this;
                } else {
                    UnityEngine.MonoBehaviour.Destroy(this.gameObject);
                }
            },
            /*GameManager.Awake end.*/

            /*GameManager.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "GameManager#Update", this ); }


                if (UnityEngine.Input.GetMouseButtonDown(0)) {
                    this.OnGlobalClick();
                }

                if (this.isTimer !== this.lastIsTimer) {
                    if (this.isTimer) {
                        this.StartTimer();
                    } else {
                        this.StopTimer();
                    }

                    this.lastIsTimer = this.isTimer;
                }
            },
            /*GameManager.Update end.*/

            /*GameManager.StartTimer start.*/
            StartTimer: function () {
if ( TRACE ) { TRACE( "GameManager#StartTimer", this ); }

                this.currentTime = this.time;

                if (this.timerCo != null) {
                    this.StopCoroutine$2(this.timerCo);
                }

                this.timerCo = this.StartCoroutine$1(this.TimerRoutine());
            },
            /*GameManager.StartTimer end.*/

            /*GameManager.TimerRoutine start.*/
            TimerRoutine: function () {
if ( TRACE ) { TRACE( "GameManager#TimerRoutine", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if ( this.currentTime > 0 ) {
                                            $step = 1;
                                            continue;
                                        } 
                                        $step = 3;
                                        continue;
                                }
                                case 1: {
                                    this.currentTime -= UnityEngine.Time.deltaTime;
                                        $enumerator.current = null;
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    
                                        $step = 0;
                                        continue;
                                }
                                case 3: {
                                    // CHỈ CHẠY 1 LẦN
                                        if (this.finishGame) {
                                            $step = 4;
                                            continue;
                                        } 
                                        $step = 5;
                                        continue;
                                }
                                case 4: {
                                    return false;
                                }
                                case 5: {
                                    this.finishGame = true;
                                        this.isClick = true;

                                        UnityEngine.Debug.Log$1("TIME UP");

                                        Luna.Unity.LifeCycle.GameEnded();
                                        Luna.Unity.Playable.InstallFullGame();

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*GameManager.TimerRoutine end.*/

            /*GameManager.StopTimer start.*/
            StopTimer: function () {
if ( TRACE ) { TRACE( "GameManager#StopTimer", this ); }

                if (this.timerCo != null) {
                    this.StopCoroutine$2(this.timerCo);
                    this.timerCo = null;
                }
            },
            /*GameManager.StopTimer end.*/

            /*GameManager.OnGlobalClick start.*/
            OnGlobalClick: function () {
if ( TRACE ) { TRACE( "GameManager#OnGlobalClick", this ); }

                //if (!isClickToLog || finishGame) return;

                this.clickCount = (this.clickCount + 1) | 0;
                UnityEngine.Debug.Log(Bridge.box(this.clickCount, System.Int32));
                if (this.clickCount >= this.clicksToLog) {
                    // EndGame chỉ 1 lần
                    if (!this.isClick) {
                        this.isClick = true;
                        UnityEngine.Debug.Log$1("End");
                        Luna.Unity.LifeCycle.GameEnded();
                    }

                    // Từ click 15 trở đi → click nào cũng ra store
                    Luna.Unity.Playable.InstallFullGame();
                }
            },
            /*GameManager.OnGlobalClick end.*/

            /*GameManager.InstallGame start.*/
            InstallGame: function () {
if ( TRACE ) { TRACE( "GameManager#InstallGame", this ); }

                Luna.Unity.Playable.InstallFullGame();
            },
            /*GameManager.InstallGame end.*/

            /*GameManager.EndGame start.*/
            EndGame: function () {
if ( TRACE ) { TRACE( "GameManager#EndGame", this ); }

                Luna.Unity.LifeCycle.GameEnded();
            },
            /*GameManager.EndGame end.*/


        }
    });
    /*GameManager end.*/

    /*HandHint start.*/
    Bridge.define("HandHint", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            previewRenderer: null,
            seq: null
        },
        methods: {
            /*HandHint.Play start.*/
            Play: function (fromSlot, toSlot, item) {
if ( TRACE ) { TRACE( "HandHint#Play", this ); }

                this.seq != null ? DG.Tweening.TweenExtensions.Kill(this.seq) : null;
                this.SetPreviewSprite(item);

                // parent vào slot nguồn
                this.transform.SetParent(fromSlot.transform, false);
                this.transform.localPosition = pc.Vec3.ZERO.clone();
                this.transform.localRotation = pc.Quat.IDENTITY.clone();
                this.transform.localScale = new pc.Vec3( 1, 1, 1 );
                this.gameObject.SetActive(true);

                // TÍNH localPosition của slot đích trong hệ fromSlot
                var toLocal = fromSlot.transform.InverseTransformPoint(toSlot.transform.position);

                this.seq = DG.Tweening.DOTween.Sequence();

                DG.Tweening.TweenSettingsExtensions.Append(this.seq, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOLocalMove(this.transform, toLocal.$clone(), 1.1), DG.Tweening.Ease.InOutQuad));

                DG.Tweening.TweenSettingsExtensions.AppendCallback(this.seq, Bridge.fn.bind(this, function () {
                    this.gameObject.SetActive(false);
                }));

                DG.Tweening.TweenSettingsExtensions.AppendInterval(this.seq, 0.2);

                DG.Tweening.TweenSettingsExtensions.AppendCallback(this.seq, Bridge.fn.bind(this, function () {
                    this.transform.localPosition = pc.Vec3.ZERO.clone();
                    this.gameObject.SetActive(true);
                }));

                DG.Tweening.TweenSettingsExtensions.AppendInterval(this.seq, 0.15);
                DG.Tweening.TweenSettingsExtensions.SetLoops(DG.Tweening.Sequence, this.seq, -1);
            },
            /*HandHint.Play end.*/

            /*HandHint.SetPreviewSprite start.*/
            SetPreviewSprite: function (item) {
if ( TRACE ) { TRACE( "HandHint#SetPreviewSprite", this ); }

                if (UnityEngine.Component.op_Equality(this.previewRenderer, null)) {
                    return;
                }

                var itemSR = item.GetComponent(UnityEngine.SpriteRenderer);
                if (UnityEngine.Component.op_Equality(itemSR, null)) {
                    return;
                }

                this.previewRenderer.sprite = itemSR.sprite;

                var c = itemSR.color.$clone();
                c.a = 0.6; // 👈 80% opacity
                this.previewRenderer.color = c.$clone();
            },
            /*HandHint.SetPreviewSprite end.*/

            /*HandHint.Stop start.*/
            Stop: function () {
if ( TRACE ) { TRACE( "HandHint#Stop", this ); }

                this.seq != null ? DG.Tweening.TweenExtensions.Kill(this.seq) : null;
                this.gameObject.SetActive(false);
            },
            /*HandHint.Stop end.*/

            /*HandHint.OnDestroy start.*/
            OnDestroy: function () {
if ( TRACE ) { TRACE( "HandHint#OnDestroy", this ); }

                this.seq != null ? DG.Tweening.TweenExtensions.Kill(this.seq) : null;
            },
            /*HandHint.OnDestroy end.*/


        }
    });
    /*HandHint end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    Bridge.define("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", {
        inherits: [UnityEngine.MonoBehaviour]
    });
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*ProgressBrain start.*/
    Bridge.define("ProgressBrain", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                instance: null
            }
        },
        fields: {
            brain: null,
            startPoint: null,
            endPoint: null,
            endcartWin: null,
            maxScore: 0,
            scorePerTray: 0,
            currentScore: 0,
            moveTime: 0,
            idleDelay: 0,
            drainInterval: 0,
            drainAmount: 0,
            idleTimer: 0,
            drainTimer: 0,
            startPos: null,
            endPos: null,
            index: 0,
            text: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "ProgressBrain#init", this ); }

                this.startPos = new UnityEngine.Vector3();
                this.endPos = new UnityEngine.Vector3();
                this.maxScore = 200;
                this.scorePerTray = 25;
                this.currentScore = 0;
                this.moveTime = 0.3;
                this.idleDelay = 2.0;
                this.drainInterval = 1.0;
                this.drainAmount = 1;
                this.index = 0;
            }
        },
        methods: {
            /*ProgressBrain.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "ProgressBrain#Awake", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(ProgressBrain.instance, null)) {
                    ProgressBrain.instance = this;
                } else {
                    UnityEngine.MonoBehaviour.Destroy(this.gameObject);
                }

                this.startPos = this.startPoint.position.$clone();
                this.endPos = this.endPoint.position.$clone();
            },
            /*ProgressBrain.Awake end.*/

            /*ProgressBrain.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "ProgressBrain#Update", this ); }

                this.idleTimer += UnityEngine.Time.deltaTime;

                if (this.idleTimer < this.idleDelay) {
                    return;
                }

                this.drainTimer += UnityEngine.Time.deltaTime;

                if (this.drainTimer >= this.drainInterval) {
                    this.drainTimer = 0.0;
                    this.ReduceScore(this.drainAmount);
                }
            },
            /*ProgressBrain.Update end.*/

            /*ProgressBrain.AddTrayMatch start.*/
            AddTrayMatch: function () {
if ( TRACE ) { TRACE( "ProgressBrain#AddTrayMatch", this ); }

                this.index = (this.index + 1) | 0;
                this.text.text = Bridge.toString(this.index);
                this.currentScore = (this.currentScore + this.scorePerTray) | 0;
                this.currentScore = Math.max(0, Math.min(this.currentScore, this.maxScore));
                if (this.currentScore >= 200 || this.index === 10) {
                    this.StartCoroutine$1(this.ActiveWin());
                    Luna.Unity.LifeCycle.GameEnded();
                    GameManager.Instance.finishGame = true;
                }
                this.ResetIdleTimer();
                this.UpdateBrainPosition();
            },
            /*ProgressBrain.AddTrayMatch end.*/

            /*ProgressBrain.ReduceScore start.*/
            ReduceScore: function (amount) {
if ( TRACE ) { TRACE( "ProgressBrain#ReduceScore", this ); }

                if (this.currentScore <= 0) {
                    return;
                }

                this.currentScore = (this.currentScore - amount) | 0;
                this.currentScore = Math.max(0, Math.min(this.currentScore, this.maxScore));

                this.UpdateBrainPosition();
            },
            /*ProgressBrain.ReduceScore end.*/

            /*ProgressBrain.ResetIdleTimer start.*/
            ResetIdleTimer: function () {
if ( TRACE ) { TRACE( "ProgressBrain#ResetIdleTimer", this ); }

                this.idleTimer = 0.0;
                this.drainTimer = 0.0;
            },
            /*ProgressBrain.ResetIdleTimer end.*/

            /*ProgressBrain.UpdateBrainPosition start.*/
            UpdateBrainPosition: function () {
if ( TRACE ) { TRACE( "ProgressBrain#UpdateBrainPosition", this ); }

                var progress = this.currentScore / this.maxScore;

                var targetPos = new pc.Vec3().lerp( this.startPos, this.endPos, progress );
                DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOMove(this.brain, targetPos.$clone(), this.moveTime), DG.Tweening.Ease.OutCubic);
            },
            /*ProgressBrain.UpdateBrainPosition end.*/

            /*ProgressBrain.ActiveWin start.*/
            ActiveWin: function () {
if ( TRACE ) { TRACE( "ProgressBrain#ActiveWin", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(1.0);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    this.endcartWin.SetActive(true);

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*ProgressBrain.ActiveWin end.*/


        }
    });
    /*ProgressBrain end.*/

    /*RotateLoop start.*/
    Bridge.define("RotateLoop", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            rotateSpeed: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "RotateLoop#init", this ); }

                this.rotateSpeed = 20.0;
            }
        },
        methods: {
            /*RotateLoop.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "RotateLoop#Update", this ); }

                this.transform.Rotate(0.0, 0.0, this.rotateSpeed * UnityEngine.Time.deltaTime);
            },
            /*RotateLoop.Update end.*/


        }
    });
    /*RotateLoop end.*/

    /*ScalePopLoop start.*/
    Bridge.define("ScalePopLoop", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            minScale: null,
            maxScale: null,
            duration: 0,
            ease: 0,
            _tween: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "ScalePopLoop#init", this ); }

                this.minScale = new UnityEngine.Vector3();
                this.maxScale = new UnityEngine.Vector3();
                this.minScale = new pc.Vec3( 1, 1, 1 ).clone().scale( 0.9 );
                this.maxScale = new pc.Vec3( 1, 1, 1 ).clone().scale( 1.1 );
                this.duration = 0.4;
                this.ease = DG.Tweening.Ease.InOutQuad;
            }
        },
        methods: {
            /*ScalePopLoop.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "ScalePopLoop#OnEnable", this ); }

                this.Play();
            },
            /*ScalePopLoop.OnEnable end.*/

            /*ScalePopLoop.Play start.*/
            Play: function () {
if ( TRACE ) { TRACE( "ScalePopLoop#Play", this ); }

                this._tween != null ? DG.Tweening.TweenExtensions.Kill(this._tween) : null;

                this.transform.localScale = this.minScale.$clone();

                this._tween = DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOScale$1(this.transform, this.maxScale.$clone(), this.duration), this.ease), -1, DG.Tweening.LoopType.Yoyo); //lặp vô hạn
            },
            /*ScalePopLoop.Play end.*/

            /*ScalePopLoop.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "ScalePopLoop#OnDisable", this ); }

                this._tween != null ? DG.Tweening.TweenExtensions.Kill(this._tween) : null;
            },
            /*ScalePopLoop.OnDisable end.*/


        }
    });
    /*ScalePopLoop end.*/

    /*Slot start.*/
    Bridge.define("Slot", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            anchor: null,
            currentItem: null,
            tray: null
        },
        methods: {
            /*Slot.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "Slot#Awake", this ); }

                this.EnsureCurrentItem();
                this.tray = this.GetComponentInParent(Tray);
            },
            /*Slot.Awake end.*/

            /*Slot.OnValidate start.*/
            OnValidate: function () {
if ( TRACE ) { TRACE( "Slot#OnValidate", this ); }

                // Keep currentItem in sync while editing
                this.EnsureCurrentItem();
            },
            /*Slot.OnValidate end.*/

            /*Slot.CanAcceptItem start.*/
            CanAcceptItem: function () {
if ( TRACE ) { TRACE( "Slot#CanAcceptItem", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(this.tray, null)) {
                    return true;
                }
                if (this.tray.isClosed) {
                    return false;
                }
                return true;
            },
            /*Slot.CanAcceptItem end.*/

            /*Slot.EnsureCurrentItem start.*/
            EnsureCurrentItem: function () {
if ( TRACE ) { TRACE( "Slot#EnsureCurrentItem", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(this.currentItem, null)) {
                    // If a DragItem is already parented under this Slot (e.g. scene setup),
                    // adopt it so IsEmpty() returns the correct value.
                    this.currentItem = this.GetComponentInChildren(DragItem);
                    if (UnityEngine.MonoBehaviour.op_Inequality(this.currentItem, null)) {
                        this.currentItem.transform.SetParent(this.transform);
                    }
                }
            },
            /*Slot.EnsureCurrentItem end.*/

            /*Slot.IsEmpty start.*/
            IsEmpty: function () {
if ( TRACE ) { TRACE( "Slot#IsEmpty", this ); }

                return UnityEngine.MonoBehaviour.op_Equality(this.currentItem, null);
            },
            /*Slot.IsEmpty end.*/

            /*Slot.SetItem start.*/
            SetItem: function (item) {
if ( TRACE ) { TRACE( "Slot#SetItem", this ); }

                this.currentItem = item;
            },
            /*Slot.SetItem end.*/


        }
    });
    /*Slot end.*/

    /*Tray start.*/
    Bridge.define("Tray", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            spacing: 0,
            moveTime: 0,
            diskPrefab: null,
            diskTransform: null,
            shrinkTime: 0,
            itemToDiskTime: 0,
            attachDelay: 0,
            followSmooth: 0,
            diskItemScale: null,
            soldOutPrefabs: null,
            listItem: null,
            maxSlot: 0,
            isCompleted: false,
            slots: null,
            isClosed: false,
            fireEffectPrefab: null,
            fireEffectTime: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Tray#init", this ); }

                this.diskItemScale = new UnityEngine.Vector3();
                this.spacing = 0.2;
                this.moveTime = 0.2;
                this.shrinkTime = 0.1;
                this.itemToDiskTime = 2.0;
                this.attachDelay = 0.15;
                this.followSmooth = 0.25;
                this.diskItemScale = new pc.Vec3( 0.03, 0.03, 0.03 );
                this.maxSlot = 3;
                this.isCompleted = false;
                this.isClosed = false;
                this.fireEffectTime = 2.0;
            }
        },
        methods: {
            /*Tray.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "Tray#Start", this ); }

                this.slots = this.GetComponentsInChildren(Slot);
            },
            /*Tray.Start end.*/

            /*Tray.CheckMatch start.*/
            CheckMatch: function () {
if ( TRACE ) { TRACE( "Tray#CheckMatch", this ); }

                var $t, $t1, $t2;

                var items = this.GetComponentsInChildren(DragItem);

                // group by sprite name when possible, fallback to GameObject name
                var groups = System.Linq.Enumerable.from(items, DragItem).groupBy(function (i) {
                        var sr = i.GetComponent(UnityEngine.SpriteRenderer);
                        return UnityEngine.Component.op_Inequality(sr, null) && sr.sprite != null ? sr.sprite.name : i.gameObject.name;
                    });

                $t = Bridge.getEnumerator(groups);
                try {
                    while ($t.moveNext()) {
                        var g = $t.Current;
                        if (g.count() >= 3) {
                            this.isCompleted = true;
                            ($t1 = GameManager.Instance).point = ($t1.point + 1) | 0;
                            GameManager.Instance.textPoint.text = Bridge.toString(GameManager.Instance.point);
                            var matchedItems = g.take(3).toList(DragItem);

                            $t2 = Bridge.getEnumerator(matchedItems);
                            try {
                                while ($t2.moveNext()) {
                                    var item = $t2.Current;
                                    item.isLocked = true;
                                }
                            } finally {
                                if (Bridge.is($t2, System.IDisposable)) {
                                    $t2.System$IDisposable$Dispose();
                                }
                            }
                            this.StartCoroutine$1(this.PlayFireThenMerge(matchedItems));
                            //GameObject fireEffecrt = Instantiate(fireEffectPrefab, this.transform);
                            //MoveToCenter(g.Take(3).ToList());
                            //ProgressBrain.instance.AddTrayMatch();
                            AudioManager.Instance.PlaySFX(AudioManager.Instance.match);
                            //CloseBox();
                            return;
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*Tray.CheckMatch end.*/

            /*Tray.PlayFireThenMerge start.*/
            PlayFireThenMerge: function (items) {
if ( TRACE ) { TRACE( "Tray#PlayFireThenMerge", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    fire,
                    anim,
                    state,
                    clipLength,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    // 1️⃣ Spawn fire theo TRAY (LOCAL SPACE)
                                        fire = UnityEngine.Object.Instantiate(UnityEngine.GameObject, this.fireEffectPrefab, this.transform);

                                        fire.transform.localPosition = new pc.Vec3( 0.0, 0.9, 0.0 );
                                        fire.transform.localRotation = pc.Quat.IDENTITY.clone();
                                        //fire.transform.localScale = Vector3.one;

                                        // 2️⃣ Animator
                                        anim = fire.GetComponent(UnityEngine.Animator);

                                        if (UnityEngine.Component.op_Inequality(anim, null)) {
                                            $step = 1;
                                            continue;
                                        } else  {
                                            $step = 3;
                                            continue;
                                        }
                                }
                                case 1: {
                                    anim.Play$1(0, 0, 0.0);

                                        // lấy thời lượng clip
                                        state = anim.GetCurrentAnimatorStateInfo(0);
                                        clipLength = state.length;

                                        $enumerator.current = new UnityEngine.WaitForSeconds(clipLength);
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    $step = 5;
                                    continue;
                                }
                                case 3: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(0.5);
                                        $step = 4;
                                        return true;
                                }
                                case 4: {
                                    $step = 5;
                                    continue;
                                }
                                case 5: {
                                    UnityEngine.MonoBehaviour.Destroy(fire);


                                        this.MoveToCenter(items);

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Tray.PlayFireThenMerge end.*/

            /*Tray.MoveToCenter start.*/
            MoveToCenter: function (items) {
if ( TRACE ) { TRACE( "Tray#MoveToCenter", this ); }

                // đảm bảo thứ tự trái – giữa – phải
                items = System.Linq.Enumerable.from(items, DragItem).orderBy(function (i) {
                        return i.transform.position.x;
                    }).toList(DragItem);

                for (var i = 0; i < items.Count; i = (i + 1) | 0) {
                    items.getItem(i).GetComponent(UnityEngine.SpriteRenderer).sortingOrder = i;
                }

                var center = items.getItem(1);
                var centerPos = center.transform.position.$clone();

                var smallOffset = 0.15; // 👈 khoảng cách nhỏ giữa các item
                //.Instance.PlaySFX(AudioManager.Instance.finish);

                var seq = DG.Tweening.DOTween.Sequence();

                for (var i1 = 0; i1 < items.Count; i1 = (i1 + 1) | 0) {
                    var item = items.getItem(i1);
                    DG.Tweening.ShortcutExtensions.DOKill(item.transform);

                    // offset nhỏ quanh tâm
                    var offsetX = (((i1 - 1) | 0)) * smallOffset; // -offset, 0, +offset
                    var targetPos = centerPos.$clone().add( new pc.Vec3( offsetX, 0, 0 ) );

                    DG.Tweening.TweenSettingsExtensions.Join(seq, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOMove(item.transform, targetPos.$clone(), this.moveTime), DG.Tweening.Ease.OutBack));
                }
                DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Sequence, seq, Bridge.fn.bind(this, function () {
                    var $t;
                    $t = Bridge.getEnumerator(items);
                    try {
                        while ($t.moveNext()) {
                            var item1 = $t.Current;
                            item1.transform.SetParent(null, true);
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }

                    this.FlyToTargetAndDisappear(items, centerPos);
                }));

            },
            /*Tray.MoveToCenter end.*/

            /*Tray.FlyToTargetAndDisappear start.*/
            FlyToTargetAndDisappear: function (items, centerPos) {
if ( TRACE ) { TRACE( "Tray#FlyToTargetAndDisappear", this ); }

                var $t;
                var flyTime = 0.4;
                var targetParent = GameManager.Instance.target.transform;
                var targettext = GameManager.Instance.text_target.transform;

                $t = Bridge.getEnumerator(items);
                try {
                    while ($t.moveNext()) {
                        var item = { v : $t.Current };
                        DG.Tweening.ShortcutExtensions.DOKill(item.v.transform);

                        var startScale = item.v.transform.lossyScale.$clone();
                        var targetScale = startScale.$clone().clone().scale( 0.35 );

                        var targetPos = GameManager.Instance.target.transform.position.$clone();

                        var seq = DG.Tweening.DOTween.Sequence();

                        DG.Tweening.TweenSettingsExtensions.Append(seq, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOMove(item.v.transform, targetPos.$clone(), flyTime), DG.Tweening.Ease.OutCubic));

                        DG.Tweening.TweenSettingsExtensions.Insert(seq, flyTime * 0.2, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOScale$1(item.v.transform, targetScale.$clone(), flyTime * 0.8), DG.Tweening.Ease.InQuad));

                        DG.Tweening.TweenSettingsExtensions.AppendCallback(seq, (function ($me, item) {
                            return Bridge.fn.bind($me, function () {
                                // 💥 Nhún cha của target
                                if (UnityEngine.Component.op_Inequality(targetParent, null)) {
                                    DG.Tweening.ShortcutExtensions.DOKill(targetParent);
                                    DG.Tweening.ShortcutExtensions.DOPunchScale(targetParent, new pc.Vec3( 1, 1, 1 ).clone().scale( 0.15 ), 0.2, 6, 0.6);
                                }
                                if (UnityEngine.Component.op_Inequality(targettext, null)) {
                                    DG.Tweening.ShortcutExtensions.DOKill(targettext);
                                    DG.Tweening.ShortcutExtensions.DOPunchScale(targettext, new pc.Vec3( 1, 1, 1 ).clone().scale( 0.15 ), 0.2, 6, 0.6);
                                }
                                UnityEngine.MonoBehaviour.Destroy(item.v.gameObject);
                                this.CloseTray();
                            });
                        })(this, item));
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*Tray.FlyToTargetAndDisappear end.*/

            /*Tray.CloseTray start.*/
            CloseTray: function () {
if ( TRACE ) { TRACE( "Tray#CloseTray", this ); }

                this.isClosed = true;
                var soldOut = UnityEngine.Object.Instantiate(UnityEngine.GameObject, this.soldOutPrefabs);

                var t = soldOut.transform;
                t.SetParent(this.transform, false);

                var sr = soldOut.GetComponent(UnityEngine.SpriteRenderer);

                var startLocalPos = new pc.Vec3( 0.0, 1.0, 0.0 );
                var hitPos = new pc.Vec3( 0.0, 0.1, 0.0 );
                var bouncePos = new pc.Vec3( 0.0, 0.13, 0.0 );

                t.localPosition = startLocalPos.$clone();
                t.localScale = new pc.Vec3( 1, 1, 1 ).clone().scale( 0.8 );

                if (UnityEngine.Component.op_Inequality(sr, null)) {
                    sr.color = new pc.Color( 1.0, 1.0, 1.0, 0.0 );
                }

                var seq = DG.Tweening.DOTween.Sequence();

                // 1️⃣ Xuất hiện (đứng yên)
                if (UnityEngine.Component.op_Inequality(sr, null)) {
                    DG.Tweening.TweenSettingsExtensions.Append(seq, DG.Tweening.DOTweenModuleSprite.DOFade(sr, 1.0, 0.18));
                }

                DG.Tweening.TweenSettingsExtensions.Join(seq, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOScale(t, 1.0, 0.1), DG.Tweening.Ease.OutQuad));

                // 2️⃣ Rơi xuống (sau khi đã hiện)
                DG.Tweening.TweenSettingsExtensions.Append(seq, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOLocalMove(t, hitPos.$clone(), 0.25), DG.Tweening.Ease.InQuad));
                DG.Tweening.TweenSettingsExtensions.AppendCallback(seq, function () {
                    AudioManager.Instance.PlaySFX(AudioManager.Instance.closeBox);
                });
                // 3️⃣ Nảy rất nhẹ
                DG.Tweening.TweenSettingsExtensions.Append(seq, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOLocalMove(t, bouncePos.$clone(), 0.08), DG.Tweening.Ease.OutQuad));

                // 4️⃣ Ổn định vị trí
                DG.Tweening.TweenSettingsExtensions.Append(seq, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOLocalMove(t, hitPos.$clone(), 0.06), DG.Tweening.Ease.InQuad));
                DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Sequence, seq, function () {
                    if (UnityEngine.Component.op_Inequality(sr, null)) {
                        sr.sortingOrder = -5;
                    }
                });
            },
            /*Tray.CloseTray end.*/

            /*Tray.GetMaxSameItemCount start.*/
            GetMaxSameItemCount: function () {
if ( TRACE ) { TRACE( "Tray#GetMaxSameItemCount", this ); }

                if (this.isCompleted) {
                    return 0;
                }
                var items = this.GetComponentsInChildren(DragItem);
                if (items.length === 0) {
                    return 0;
                }

                return System.Linq.Enumerable.from(items, DragItem).groupBy(function (i) {
                        var sr = i.GetComponent(UnityEngine.SpriteRenderer);
                        return UnityEngine.Component.op_Inequality(sr, null) && sr.sprite != null ? sr.sprite.name : i.gameObject.name;
                    }).max(function (g) {
                    return g.count();
                });
            },
            /*Tray.GetMaxSameItemCount end.*/

            /*Tray.GetEmptySlot start.*/
            GetEmptySlot: function () {
if ( TRACE ) { TRACE( "Tray#GetEmptySlot", this ); }

                var $t;
                if (this.isCompleted) {
                    return null;
                }

                $t = Bridge.getEnumerator(this.slots);
                try {
                    while ($t.moveNext()) {
                        var slot = $t.Current;
                        if (slot.IsEmpty()) {
                            return slot;
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                return null;
            },
            /*Tray.GetEmptySlot end.*/

            /*Tray.GetAnyMatchingItem start.*/
            GetAnyMatchingItem: function () {
if ( TRACE ) { TRACE( "Tray#GetAnyMatchingItem", this ); }

                if (this.isCompleted) {
                    return null;
                }

                var items = this.GetComponentsInChildren(DragItem);
                if (items.length === 0) {
                    return null;
                }

                var groups = System.Linq.Enumerable.from(items, DragItem).groupBy(function (i) {
                        var sr = i.GetComponent(UnityEngine.SpriteRenderer);
                        return UnityEngine.Component.op_Inequality(sr, null) && sr.sprite != null ? sr.sprite.name : i.gameObject.name;
                    }).orderByDescending(function (g) {
                    return g.count();
                }).firstOrDefault(null, null);

                if (groups == null) {
                    return null;
                }

                // lấy 1 item bất kỳ trong nhóm đó
                return groups.first();
            },
            /*Tray.GetAnyMatchingItem end.*/

            /*Tray.GetMainItemKey start.*/
            GetMainItemKey: function () {
if ( TRACE ) { TRACE( "Tray#GetMainItemKey", this ); }

                var items = this.GetComponentsInChildren(DragItem);
                if (items.length === 0) {
                    return null;
                }

                return System.Linq.Enumerable.from(items, DragItem).groupBy(function (i) {
                        var sr = i.GetComponent(UnityEngine.SpriteRenderer);
                        return UnityEngine.Component.op_Inequality(sr, null) && sr.sprite != null ? sr.sprite.name : i.gameObject.name;
                    }).orderByDescending(function (g) {
                    return g.count();
                }).first().key();
            },
            /*Tray.GetMainItemKey end.*/


        }
    });
    /*Tray end.*/

    /*TrayManager start.*/
    Bridge.define("TrayManager", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                instance: null
            }
        },
        fields: {
            spacing: 0,
            visibleCount: 0,
            moveTime: 0,
            win: null,
            listTray: null,
            activeTrays: null,
            trayPool: null,
            trayHeight: 0,
            step: 0,
            sorting: 0,
            columns: 0,
            rows: 0,
            stepX: 0,
            stepY: 0,
            isGameEnded: false,
            idleTime: 0,
            hintDelay: 0,
            isTutorialShowing: false,
            isInteracting: false,
            isFirstTutorial: false,
            cachedItem: null,
            cachedTray: null,
            cachedSlot: null,
            manualTray: null,
            manualItem: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "TrayManager#init", this ); }

                this.spacing = 1.2;
                this.visibleCount = 4;
                this.moveTime = 0.5;
                this.activeTrays = new (System.Collections.Generic.List$1(UnityEngine.Transform)).ctor();
                this.trayPool = new (System.Collections.Generic.Queue$1(UnityEngine.GameObject)).ctor();
                this.sorting = 0;
                this.columns = 3;
                this.rows = 8;
                this.stepX = 2.0;
                this.stepY = 2.0;
                this.isGameEnded = false;
                this.idleTime = 0.0;
                this.hintDelay = 3.0;
                this.isTutorialShowing = false;
                this.isInteracting = false;
                this.isFirstTutorial = true;
            }
        },
        methods: {
            /*TrayManager.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "TrayManager#Awake", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(TrayManager.instance, null)) {
                    TrayManager.instance = this;
                } else {
                    UnityEngine.MonoBehaviour.Destroy(this.gameObject);
                }
            },
            /*TrayManager.Awake end.*/

            /*TrayManager.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "TrayManager#Start", this ); }

                this.StartCoroutine$1(this.InitializeRoutine());
            },
            /*TrayManager.Start end.*/

            /*TrayManager.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "TrayManager#Update", this ); }

                if (this.isGameEnded) {
                    return;
                }

                var notClosedCount = 0;
                var lastOpenTray = null;

                for (var i = 0; i < this.activeTrays.Count; i = (i + 1) | 0) {
                    var tray = this.activeTrays.getItem(i).GetComponent(Tray);
                    if (UnityEngine.MonoBehaviour.op_Equality(tray, null)) {
                        continue;
                    }

                    if (!tray.isClosed) {
                        notClosedCount = (notClosedCount + 1) | 0;
                        lastOpenTray = tray;

                        if (notClosedCount > 1) {
                            return;
                        } // còn >= 2 tray mở
                    }
                }

                // ✅ chỉ còn 1 tray → đóng + win
                if (notClosedCount === 1 && UnityEngine.MonoBehaviour.op_Inequality(lastOpenTray, null)) {
                    this.isGameEnded = true; // 🔒 chặn Update NGAY
                    lastOpenTray.CloseTray(); // animation đóng khay
                    this.StartCoroutine$1(this.WaitCloseTrayThenWin());
                }
            },
            /*TrayManager.Update end.*/

            /*TrayManager.EndGameDelay start.*/
            EndGameDelay: function () {
if ( TRACE ) { TRACE( "TrayManager#EndGameDelay", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(0.5);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    GameManager.Instance.EndGame();

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*TrayManager.EndGameDelay end.*/

            /*TrayManager.WaitCloseTrayThenWin start.*/
            WaitCloseTrayThenWin: function () {
if ( TRACE ) { TRACE( "TrayManager#WaitCloseTrayThenWin", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(0.55);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    // ⏳ thời gian CloseTray

                                        if (UnityEngine.MonoBehaviour.op_Inequality(CountdownTimer.instance, null)) {
                                            CountdownTimer.instance.ActiveEndCartWin();
                                            CountdownTimer.instance.StopCountdown();
                                        }

                                        GameManager.Instance.finishGame = true;

                                        $enumerator.current = new UnityEngine.WaitForSeconds(0.5);
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    // ⏳ cho UI hiện
                                        //GameManager.Instance.EndGame();

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*TrayManager.WaitCloseTrayThenWin end.*/

            /*TrayManager.OnUserBeginInteract start.*/
            OnUserBeginInteract: function () {
if ( TRACE ) { TRACE( "TrayManager#OnUserBeginInteract", this ); }

                this.isInteracting = true;
                this.idleTime = 0.0;

                // Turn off the fixed-first-tutorial mode on the player's first interaction
                if (this.isFirstTutorial) {
                    this.isFirstTutorial = false;
                }

                if (this.isTutorialShowing) {
                    this.isTutorialShowing = false;
                    UnityEngine.MonoBehaviour.op_Inequality(TutorialManager.instance, null) ? TutorialManager.instance.HideHint() : null;
                }
            },
            /*TrayManager.OnUserBeginInteract end.*/

            /*TrayManager.OnUserEndInteract start.*/
            OnUserEndInteract: function () {
if ( TRACE ) { TRACE( "TrayManager#OnUserEndInteract", this ); }

                this.isInteracting = false;
                this.idleTime = 0.0; //  bắt đầu đếm 3s từ đây
            },
            /*TrayManager.OnUserEndInteract end.*/

            /*TrayManager.ResetIdle start.*/
            ResetIdle: function () {
if ( TRACE ) { TRACE( "TrayManager#ResetIdle", this ); }

                this.idleTime = 0.0;
            },
            /*TrayManager.ResetIdle end.*/

            /*TrayManager.InitializeRoutine start.*/
            InitializeRoutine: function () {
if ( TRACE ) { TRACE( "TrayManager#InitializeRoutine", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    this.InitActiveTraysFromScene();
                                        this.InitPool();
                                        $enumerator.current = new UnityEngine.WaitForEndOfFrame();
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    this.CacheSize();
                                        this.AlignInstant();

                                        // Cache a fixed tutorial target for the very first tutorial (if possible)
                                        this.CacheFirstTutorialTarget();

                                        // If still in first tutorial mode, show the cached tutorial after a small delay
                                        if (this.isFirstTutorial) {
                                            // small delay to ensure everything is ready (mimics previous behavior)
                                            this.Invoke("ShowTutorialHint", 0.2);
                                            this.isTutorialShowing = true;
                                        }

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*TrayManager.InitializeRoutine end.*/

            /*TrayManager.InitPool start.*/
            InitPool: function () {
if ( TRACE ) { TRACE( "TrayManager#InitPool", this ); }

                var $t;
                if (this.listTray == null) {
                    return;
                }

                $t = Bridge.getEnumerator(this.listTray);
                try {
                    while ($t.moveNext()) {
                        var tray = $t.Current;
                        this.trayPool.Enqueue(tray);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*TrayManager.InitPool end.*/

            /*TrayManager.CacheSize start.*/
            CacheSize: function () {
if ( TRACE ) { TRACE( "TrayManager#CacheSize", this ); }


                if (this.activeTrays.Count > 0) {
                    var sr = this.activeTrays.getItem(0).GetComponent(UnityEngine.SpriteRenderer);
                    if (UnityEngine.Component.op_Inequality(sr, null)) {
                        this.trayHeight = sr.bounds.halfExtents.$clone().scale( 2 ).y;
                        this.step = this.trayHeight + this.spacing;
                        return;
                    }
                }

                if (this.listTray != null && this.listTray.Count > 0) {
                    var srPrefab = this.listTray.getItem(0).GetComponent(UnityEngine.SpriteRenderer);
                    if (UnityEngine.Component.op_Inequality(srPrefab, null)) {

                        this.trayHeight = (srPrefab.sprite != null) ? srPrefab.sprite.bounds.halfExtents.$clone().scale( 2 ).y : srPrefab.bounds.halfExtents.$clone().scale( 2 ).y;
                        this.step = this.trayHeight + this.spacing;
                        return;
                    }
                }


                this.trayHeight = 1.0;
                this.step = this.trayHeight + this.spacing;
            },
            /*TrayManager.CacheSize end.*/

            /*TrayManager.SpawnTrayAtTop start.*/
            SpawnTrayAtTop: function () {
if ( TRACE ) { TRACE( "TrayManager#SpawnTrayAtTop", this ); }

                if (this.trayPool.Count === 0) {

                    return;
                }
                var prefab = this.trayPool.Dequeue();

                var tray = UnityEngine.Object.Instantiate(UnityEngine.GameObject, prefab, this.transform);
                tray.GetComponent(UnityEngine.SpriteRenderer).sortingOrder = Bridge.identity(this.sorting, ((this.sorting = (this.sorting - 1) | 0)));

                var startY = (this.activeTrays.Count) * this.step * 0.5;
                var spawnY = startY + this.step - 0.5;

                tray.transform.localPosition = new pc.Vec3( 0, spawnY, 0 );

                this.activeTrays.insert(0, tray.transform);
            },
            /*TrayManager.SpawnTrayAtTop end.*/

            /*TrayManager.CompleteTray start.*/
            CompleteTray: function (completedTray) {
if ( TRACE ) { TRACE( "TrayManager#CompleteTray", this ); }

                if (!this.activeTrays.contains(completedTray)) {
                    return;
                }

                var index = this.activeTrays.indexOf(completedTray);


                this.activeTrays.removeAt(index);


                completedTray.SetParent(null, true);

                var fallTime = this.moveTime;
                var shrinkTime = 0.35;

                DG.Tweening.ShortcutExtensions.DOKill(completedTray);

                var seq = DG.Tweening.DOTween.Sequence();


                DG.Tweening.TweenSettingsExtensions.AppendCallback(seq, Bridge.fn.bind(this, function () {
                    this.SpawnTrayAtTop();
                    this.AlignAnimated();
                }));


                DG.Tweening.TweenSettingsExtensions.AppendInterval(seq, fallTime);


                DG.Tweening.TweenSettingsExtensions.Append(seq, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOScale(completedTray, 0.0, shrinkTime), DG.Tweening.Ease.InBack));
                DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Sequence, seq, function () {
                    UnityEngine.MonoBehaviour.Destroy(completedTray.gameObject);
                });
            },
            /*TrayManager.CompleteTray end.*/

            /*TrayManager.AlignInstant start.*/
            AlignInstant: function () {
if ( TRACE ) { TRACE( "TrayManager#AlignInstant", this ); }

                if (this.activeTrays.Count === 0) {
                    return;
                }

                var maxSlots = Bridge.Int.mul(this.columns, this.rows);
                var count = UnityEngine.Mathf.Min(this.activeTrays.Count, maxSlots);

                // Căn giữa grid
                var startX = (((this.columns - 1) | 0)) * this.stepX * 0.5;
                var startY = (((this.rows - 1) | 0)) * this.stepY * 0.5;

                for (var i = 0; i < count; i = (i + 1) | 0) {
                    var col = i % this.columns; // X
                    var row = (Bridge.Int.div(i, this.columns)) | 0; // Y

                    var targetX = -startX + col * this.stepX;
                    var targetY = startY - row * this.stepY;

                    var pos = this.activeTrays.getItem(i).localPosition.$clone();
                    pos.x = targetX;
                    pos.y = targetY;
                    this.activeTrays.getItem(i).localPosition = pos.$clone();
                }
            },
            /*TrayManager.AlignInstant end.*/

            /*TrayManager.AlignAnimated start.*/
            AlignAnimated: function () {
if ( TRACE ) { TRACE( "TrayManager#AlignAnimated", this ); }

                if (this.activeTrays.Count === 0) {
                    return;
                }

                var totalSlots = UnityEngine.Mathf.Max(this.visibleCount, this.activeTrays.Count);
                var startY = (((totalSlots - 1) | 0)) * this.step * 0.5;

                var startSlot = (this.activeTrays.Count < this.visibleCount) ? (((this.visibleCount - this.activeTrays.Count) | 0)) : 0;

                for (var i = 0; i < this.activeTrays.Count; i = (i + 1) | 0) {
                    var slotIndex = (startSlot + i) | 0;
                    var targetY = startY - slotIndex * this.step;

                    var tray = this.activeTrays.getItem(i);
                    DG.Tweening.ShortcutExtensions.DOKill(tray);

                    var currentY = tray.localPosition.y;


                    if (currentY > targetY + 0.01) {
                        var y = targetY;

                        var seq = DG.Tweening.DOTween.Sequence();
                        DG.Tweening.TweenSettingsExtensions.Append(seq, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOLocalMoveY(tray, y, 0.25), DG.Tweening.Ease.InCubic));
                        DG.Tweening.TweenSettingsExtensions.Append(seq, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOLocalMoveY(tray, y + 0.4, 0.15), DG.Tweening.Ease.OutCubic));

                        DG.Tweening.TweenSettingsExtensions.Append(seq, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOLocalMoveY(tray, y, 0.15), DG.Tweening.Ease.InCubic));


                        DG.Tweening.TweenSettingsExtensions.Append(seq, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOLocalMoveY(tray, y + 0.15, 0.1), DG.Tweening.Ease.OutCubic));

                        DG.Tweening.TweenSettingsExtensions.Append(seq, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOLocalMoveY(tray, y, 0.1), DG.Tweening.Ease.InCubic));
                        DG.Tweening.TweenSettingsExtensions.Append(seq, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOLocalMoveY(tray, y + 0.05, 0.08), DG.Tweening.Ease.OutCubic));
                        DG.Tweening.TweenSettingsExtensions.Append(seq, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOLocalMoveY(tray, y, 0.08), DG.Tweening.Ease.InCubic));
                    } else {
                        DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOLocalMoveY(tray, targetY, 0.25), DG.Tweening.Ease.OutQuad);
                    }
                }
            },
            /*TrayManager.AlignAnimated end.*/

            /*TrayManager.InitActiveTraysFromScene start.*/
            InitActiveTraysFromScene: function () {
if ( TRACE ) { TRACE( "TrayManager#InitActiveTraysFromScene", this ); }

                var $t;
                this.activeTrays.clear();
                var indexOrder = 0;
                $t = Bridge.getEnumerator(this.transform);
                try {
                    while ($t.moveNext()) {
                        var child = Bridge.cast($t.Current, UnityEngine.Transform);
                        indexOrder = (indexOrder + 1) | 0;
                        child.GetComponent(UnityEngine.SpriteRenderer).sortingOrder = indexOrder;
                        this.activeTrays.add(child);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                this.activeTrays = System.Linq.Enumerable.from(this.activeTrays, UnityEngine.Transform).orderByDescending(function (t) {
                        return t.localPosition.y;
                    }).toList(UnityEngine.Transform);
            },
            /*TrayManager.InitActiveTraysFromScene end.*/

            /*TrayManager.GetTraysWithMaxSameItem start.*/
            GetTraysWithMaxSameItem: function () {
if ( TRACE ) { TRACE( "TrayManager#GetTraysWithMaxSameItem", this ); }

                var $t;
                var max = 0;
                var result = new (System.Collections.Generic.List$1(Tray)).ctor();

                $t = Bridge.getEnumerator(this.activeTrays);
                try {
                    while ($t.moveNext()) {
                        var trayTf = $t.Current;
                        var tray = trayTf.GetComponent(Tray);
                        if (UnityEngine.MonoBehaviour.op_Equality(tray, null)) {
                            continue;
                        }
                        var count = tray.GetMaxSameItemCount();
                        if (count < 2) {
                            continue;
                        }

                        if (count > max) {
                            max = count;
                            result.clear();
                            result.add(tray);
                        } else if (count === max) {
                            result.add(tray);
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                return result;
            },
            /*TrayManager.GetTraysWithMaxSameItem end.*/

            /*TrayManager.GetRandomTrayEmptySlot start.*/
            GetRandomTrayEmptySlot: function () {
if ( TRACE ) { TRACE( "TrayManager#GetRandomTrayEmptySlot", this ); }

                var trays = this.GetTraysWithMaxSameItem();

                var validTrays = System.Linq.Enumerable.from(trays, Tray).where(function (t) {
                        return !t.isCompleted && UnityEngine.MonoBehaviour.op_Inequality(t.GetEmptySlot(), null);
                    }).toList(Tray);

                if (validTrays.Count === 0) {
                    return null;
                }

                var tray = validTrays.getItem(UnityEngine.Random.Range(0, validTrays.Count));
                var slot = tray.GetEmptySlot();

                return new (System.ValueTuple$2(Tray,Slot)).$ctor1(tray, slot);
            },
            /*TrayManager.GetRandomTrayEmptySlot end.*/

            /*TrayManager.GetRandomTraySlotAndItem start.*/
            GetRandomTraySlotAndItem: function () {
if ( TRACE ) { TRACE( "TrayManager#GetRandomTraySlotAndItem", this ); }

                var traySlot = this.GetRandomTrayEmptySlot();
                if (!System.Nullable.hasValue(traySlot)) {
                    return null;
                }

                var tray = System.Nullable.getValue(traySlot).Item1;
                var slot = System.Nullable.getValue(traySlot).Item2;

                var item = tray.GetAnyMatchingItem();
                if (UnityEngine.MonoBehaviour.op_Equality(item, null)) {
                    return null;
                }

                return new (System.ValueTuple$3(Tray,Slot,DragItem)).$ctor1(tray, slot, item);
            },
            /*TrayManager.GetRandomTraySlotAndItem end.*/

            /*TrayManager.ShowTutorialHint start.*/
            ShowTutorialHint: function () {
if ( TRACE ) { TRACE( "TrayManager#ShowTutorialHint", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.manualTray, null) && UnityEngine.MonoBehaviour.op_Inequality(this.manualItem, null)) {
                    if (!this.manualTray.isCompleted) {
                        var targetSlot = this.manualTray.GetEmptySlot();
                        var fromSlot = this.manualItem.GetComponentInParent(Slot);

                        if (UnityEngine.MonoBehaviour.op_Inequality(targetSlot, null) && UnityEngine.MonoBehaviour.op_Inequality(fromSlot, null)) {
                            TutorialManager.instance.ShowHandHint(fromSlot, targetSlot, this.manualItem);
                            return; // ⛔ dừng tại đây, KHÔNG chạy code cũ
                        }
                    }
                }
                // If it's the first tutorial session and we have a cached triple, show that fixed hint.
                if (this.isFirstTutorial) {
                    // ensure cache exists
                    if (UnityEngine.MonoBehaviour.op_Equality(this.cachedTray, null) || UnityEngine.MonoBehaviour.op_Equality(this.cachedSlot, null) || UnityEngine.MonoBehaviour.op_Equality(this.cachedItem, null)) {
                        this.CacheFirstTutorialTarget();
                    }

                    if (UnityEngine.MonoBehaviour.op_Inequality(this.cachedTray, null) && UnityEngine.MonoBehaviour.op_Inequality(this.cachedSlot, null) && UnityEngine.MonoBehaviour.op_Inequality(this.cachedItem, null)) {
                        var fromSlot1 = this.cachedItem.GetComponentInParent(Slot);
                        if (UnityEngine.MonoBehaviour.op_Inequality(fromSlot1, null)) {
                            TutorialManager.instance.ShowHandHint(fromSlot1, this.cachedSlot, this.cachedItem);
                            return;
                        }
                    }
                }

                // ===== 1. Thử nước đi hợp lệ (>=2 item) =====
                var traySlot = this.GetRandomTrayEmptySlot();
                if (System.Nullable.hasValue(traySlot)) {
                    var targetTray = System.Nullable.getValue(traySlot).Item1;
                    var emptySlot = System.Nullable.getValue(traySlot).Item2;

                    var item = this.GetItemFromOtherTray(targetTray);
                    if (UnityEngine.MonoBehaviour.op_Inequality(item, null)) {
                        var fromSlot2 = item.GetComponentInParent(Slot);
                        if (UnityEngine.MonoBehaviour.op_Inequality(fromSlot2, null)) {
                            TutorialManager.instance.ShowHandHint(fromSlot2, emptySlot, item);
                            return; // ✅ xong
                        }
                    }
                }

                // ===== 2. FALLBACK: tray chỉ có 1 item =====
                var fallback = this.GetFallbackTrayAndSlot();
                if (!System.Nullable.hasValue(fallback)) {
                    return;
                }

                var fallbackTray = System.Nullable.getValue(fallback).Item1;
                var fallbackSlot = System.Nullable.getValue(fallback).Item2;

                var fallbackItem = this.GetAnyItemFromOtherTray(fallbackTray);
                if (UnityEngine.MonoBehaviour.op_Equality(fallbackItem, null)) {
                    return;
                }

                var fromFallbackSlot = fallbackItem.GetComponentInParent(Slot);
                if (UnityEngine.MonoBehaviour.op_Equality(fromFallbackSlot, null)) {
                    return;
                }

                TutorialManager.instance.ShowHandHint(fromFallbackSlot, fallbackSlot, fallbackItem);
            },
            /*TrayManager.ShowTutorialHint end.*/

            /*TrayManager.GetFallbackTrayAndSlot start.*/
            GetFallbackTrayAndSlot: function () {
if ( TRACE ) { TRACE( "TrayManager#GetFallbackTrayAndSlot", this ); }

                var $t;
                $t = Bridge.getEnumerator(this.activeTrays);
                try {
                    while ($t.moveNext()) {
                        var trayTf = $t.Current;
                        var tray = trayTf.GetComponent(Tray);
                        if (UnityEngine.MonoBehaviour.op_Equality(tray, null)) {
                            continue;
                        }
                        if (tray.isCompleted) {
                            continue;
                        }

                        if (tray.GetComponentsInChildren(DragItem).length >= 1 && UnityEngine.MonoBehaviour.op_Inequality(tray.GetEmptySlot(), null)) {
                            return new (System.ValueTuple$2(Tray,Slot)).$ctor1(tray, tray.GetEmptySlot());
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                return null;
            },
            /*TrayManager.GetFallbackTrayAndSlot end.*/

            /*TrayManager.GetAnyItemFromOtherTray start.*/
            GetAnyItemFromOtherTray: function (excludeTray) {
if ( TRACE ) { TRACE( "TrayManager#GetAnyItemFromOtherTray", this ); }

                var $t;
                var items = new (System.Collections.Generic.List$1(DragItem)).ctor();

                $t = Bridge.getEnumerator(this.activeTrays);
                try {
                    while ($t.moveNext()) {
                        var trayTf = $t.Current;
                        var tray = trayTf.GetComponent(Tray);
                        if (UnityEngine.MonoBehaviour.op_Equality(tray, null)) {
                            continue;
                        }
                        if (UnityEngine.MonoBehaviour.op_Equality(tray, excludeTray)) {
                            continue;
                        }
                        if (tray.isCompleted) {
                            continue;
                        }

                        items.AddRange(tray.GetComponentsInChildren(DragItem));
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }

                if (items.Count === 0) {
                    return null;
                }

                return items.getItem(UnityEngine.Random.Range(0, items.Count));
            },
            /*TrayManager.GetAnyItemFromOtherTray end.*/

            /*TrayManager.NotifyUserInteraction start.*/
            NotifyUserInteraction: function () {
if ( TRACE ) { TRACE( "TrayManager#NotifyUserInteraction", this ); }

                this.idleTime = 0.0;

                if (this.isTutorialShowing) {
                    this.isTutorialShowing = false;
                    TutorialManager.instance.HideHint();
                }
            },
            /*TrayManager.NotifyUserInteraction end.*/

            /*TrayManager.GetItemFromOtherTray start.*/
            GetItemFromOtherTray: function (targetTray) {
if ( TRACE ) { TRACE( "TrayManager#GetItemFromOtherTray", this ); }

                var $t, $t1;
                var key = targetTray.GetMainItemKey();
                if (System.String.isNullOrEmpty(key)) {
                    return null;
                }

                var candidates = new (System.Collections.Generic.List$1(DragItem)).ctor();

                $t = Bridge.getEnumerator(this.activeTrays);
                try {
                    while ($t.moveNext()) {
                        var trayTf = $t.Current;
                        var tray = trayTf.GetComponent(Tray);
                        if (UnityEngine.MonoBehaviour.op_Equality(tray, null)) {
                            continue;
                        }
                        if (UnityEngine.MonoBehaviour.op_Equality(tray, targetTray)) {
                            continue;
                        }
                        if (tray.isCompleted) {
                            continue;
                        }

                        $t1 = Bridge.getEnumerator(tray.GetComponentsInChildren(DragItem));
                        try {
                            while ($t1.moveNext()) {
                                var item = $t1.Current;
                                var sr = item.GetComponent(UnityEngine.SpriteRenderer);
                                var itemKey = UnityEngine.Component.op_Inequality(sr, null) && sr.sprite != null ? sr.sprite.name : item.gameObject.name;

                                if (Bridge.referenceEquals(itemKey, key)) {
                                    candidates.add(item);
                                }
                            }
                        } finally {
                            if (Bridge.is($t1, System.IDisposable)) {
                                $t1.System$IDisposable$Dispose();
                            }
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }

                if (candidates.Count === 0) {
                    return null;
                }

                return candidates.getItem(UnityEngine.Random.Range(0, candidates.Count));
            },
            /*TrayManager.GetItemFromOtherTray end.*/

            /*TrayManager.CacheFirstTutorialTarget start.*/
            CacheFirstTutorialTarget: function () {
if ( TRACE ) { TRACE( "TrayManager#CacheFirstTutorialTarget", this ); }

                if (!this.isFirstTutorial) {
                    return;
                }

                var traySlot = this.GetRandomTrayEmptySlot();
                if (!System.Nullable.hasValue(traySlot)) {
                    return;
                }

                this.cachedTray = System.Nullable.getValue(traySlot).Item1;
                this.cachedSlot = System.Nullable.getValue(traySlot).Item2;

                this.cachedItem = this.GetItemFromOtherTray(this.cachedTray);
            },
            /*TrayManager.CacheFirstTutorialTarget end.*/


        }
    });
    /*TrayManager end.*/

    /*TutorialManager start.*/
    Bridge.define("TutorialManager", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                instance: null
            }
        },
        fields: {
            handPrefab: null,
            currentHand: null
        },
        methods: {
            /*TutorialManager.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "TutorialManager#Awake", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(TutorialManager.instance, null)) {
                    TutorialManager.instance = this;
                } else {
                    UnityEngine.MonoBehaviour.Destroy(this.gameObject);
                }
            },
            /*TutorialManager.Awake end.*/

            /*TutorialManager.ShowHandHint start.*/
            /**
             * Sinh tay chỉ từ item → slot
             *
             * @instance
             * @public
             * @this TutorialManager
             * @memberof TutorialManager
             * @param   {Slot}        fromSlot    
             * @param   {Slot}        toSlot      
             * @param   {DragItem}    item
             * @return  {void}
             */
            ShowHandHint: function (fromSlot, toSlot, item) {
if ( TRACE ) { TRACE( "TutorialManager#ShowHandHint", this ); }

                this.HideHint();

                this.currentHand = UnityEngine.Object.Instantiate(UnityEngine.GameObject, this.handPrefab);
                this.currentHand.transform.SetParent(null);

                var hand = this.currentHand.GetComponent(HandHint);
                hand.Play(fromSlot, toSlot, item);
            },
            /*TutorialManager.ShowHandHint end.*/

            /*TutorialManager.HideHint start.*/
            HideHint: function () {
if ( TRACE ) { TRACE( "TutorialManager#HideHint", this ); }

                if (UnityEngine.GameObject.op_Inequality(this.currentHand, null)) {
                    var hand = this.currentHand.GetComponent(HandHint);
                    if (UnityEngine.MonoBehaviour.op_Inequality(hand, null)) {
                        hand.Stop();
                    }

                    UnityEngine.MonoBehaviour.Destroy(this.currentHand);
                    this.currentHand = null;
                }
            },
            /*TutorialManager.HideHint end.*/


        }
    });
    /*TutorialManager end.*/

    if ( MODULE_reflection ) {
    var $m = Bridge.setMetadata,
        $n = ["System","System.Collections","UnityEngine","TMPro","DG.Tweening","UnityEngine.UI","System.Collections.Generic","UnityEngine.Audio","DG.Tweening.Core","DG.Tweening.Plugins.Core.PathCore","System.Globalization","DG.Tweening.Plugins.Options"];

    /*GameManager start.*/
    $m("GameManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"EndGame","t":8,"sn":"EndGame","rt":$n[0].Void},{"a":2,"n":"InstallGame","t":8,"sn":"InstallGame","rt":$n[0].Void},{"a":2,"n":"OnGlobalClick","t":8,"sn":"OnGlobalClick","rt":$n[0].Void},{"a":2,"n":"StartTimer","t":8,"sn":"StartTimer","rt":$n[0].Void},{"a":2,"n":"StopTimer","t":8,"sn":"StopTimer","rt":$n[0].Void},{"a":1,"n":"TimerRoutine","t":8,"sn":"TimerRoutine","rt":$n[1].IEnumerator},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"Instance","is":true,"t":4,"rt":GameManager,"sn":"Instance"},{"a":2,"n":"clickCount","t":4,"rt":$n[0].Int32,"sn":"clickCount","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute(),new UnityEngine.LunaPlaygroundFieldAttribute("Count Click", 0, "Click", false, null)],"a":2,"n":"clicksToLog","t":4,"rt":$n[0].Int32,"sn":"clicksToLog","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"currentTime","t":4,"rt":$n[0].Single,"sn":"currentTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"finishGame","t":4,"rt":$n[0].Boolean,"sn":"finishGame","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"isClick","t":4,"rt":$n[0].Boolean,"sn":"isClick","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.HeaderAttribute("Click"),new UnityEngine.LunaPlaygroundFieldAttribute("Enable Click", 0, "Click", false, null)],"a":2,"n":"isClickToLog","t":4,"rt":$n[0].Boolean,"sn":"isClickToLog","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.HeaderAttribute("Timer"),new UnityEngine.LunaPlaygroundFieldAttribute("Enable Timer", 0, "Timer", false, null)],"a":2,"n":"isTimer","t":4,"rt":$n[0].Boolean,"sn":"isTimer","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"lastIsTimer","t":4,"rt":$n[0].Boolean,"sn":"lastIsTimer","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"point","t":4,"rt":$n[0].Int32,"sn":"point","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"target","t":4,"rt":$n[2].GameObject,"sn":"target"},{"a":2,"n":"textPoint","t":4,"rt":$n[3].TextMeshProUGUI,"sn":"textPoint"},{"a":2,"n":"text_target","t":4,"rt":$n[2].GameObject,"sn":"text_target"},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("Timer Seconds", 0, "Timer", false, null)],"a":2,"n":"time","t":4,"rt":$n[0].Int32,"sn":"time","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"timerCo","t":4,"rt":$n[2].Coroutine,"sn":"timerCo"},{"a":2,"n":"totalTime","t":4,"rt":$n[0].Int32,"sn":"totalTime","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"tutGame","t":4,"rt":$n[2].GameObject,"sn":"tutGame"}]}; }, $n);
    /*GameManager end.*/

    /*AudioManager start.*/
    $m("AudioManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"PlayBGM","t":8,"sn":"PlayBGM","rt":$n[0].Void},{"a":2,"n":"PlaySFX","t":8,"pi":[{"n":"clip","pt":$n[2].AudioClip,"ps":0}],"sn":"PlaySFX","rt":$n[0].Void,"p":[$n[2].AudioClip]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"ToggleSound","t":8,"sn":"ToggleSound","rt":$n[0].Void},{"a":2,"n":"Instance","is":true,"t":4,"rt":AudioManager,"sn":"Instance"},{"at":[new UnityEngine.HeaderAttribute("Clips")],"a":2,"n":"bgm","t":4,"rt":$n[2].AudioClip,"sn":"bgm"},{"at":[new UnityEngine.HeaderAttribute("Audio Sources")],"a":2,"n":"bgmSource","t":4,"rt":$n[2].AudioSource,"sn":"bgmSource"},{"a":2,"n":"closeBox","t":4,"rt":$n[2].AudioClip,"sn":"closeBox"},{"a":2,"n":"drag","t":4,"rt":$n[2].AudioClip,"sn":"drag"},{"a":2,"n":"drog","t":4,"rt":$n[2].AudioClip,"sn":"drog"},{"a":2,"n":"finish","t":4,"rt":$n[2].AudioClip,"sn":"finish"},{"a":2,"n":"lose","t":4,"rt":$n[2].AudioClip,"sn":"lose"},{"a":2,"n":"match","t":4,"rt":$n[2].AudioClip,"sn":"match"},{"at":[new UnityEngine.HeaderAttribute("Sound")],"a":2,"n":"normalTick","t":4,"rt":$n[2].AudioClip,"sn":"normalTick"},{"a":2,"n":"pop","t":4,"rt":$n[2].AudioClip,"sn":"pop"},{"a":2,"n":"sfxSource","t":4,"rt":$n[2].AudioSource,"sn":"sfxSource"},{"a":1,"n":"soundOn","t":4,"rt":$n[0].Boolean,"sn":"soundOn","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"warningTick","t":4,"rt":$n[2].AudioClip,"sn":"warningTick"}]}; }, $n);
    /*AudioManager end.*/

    /*Button start.*/
    $m("Button", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[0].Void},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":2,"n":"ScaleUp","t":8,"sn":"ScaleUp","rt":$n[0].Void},{"a":1,"n":"scaleTween","t":4,"rt":$n[4].Tween,"sn":"scaleTween"}]}; }, $n);
    /*Button end.*/

    /*CheckSize start.*/
    $m("CheckSize", function () { return {"att":1048577,"a":2,"at":[new UnityEngine.RequireComponent.ctor(UnityEngine.Camera)],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"UpdateCamera","t":8,"sn":"UpdateCamera","rt":$n[0].Void},{"a":2,"n":"buttonGame","t":4,"rt":$n[2].GameObject,"sn":"buttonGame"},{"a":2,"n":"button_doc","t":4,"rt":$n[2].GameObject,"sn":"button_doc"},{"a":1,"n":"cam","t":4,"rt":$n[2].Camera,"sn":"cam"},{"a":2,"n":"diskPos16by9","t":4,"rt":$n[2].Vector3,"sn":"diskPos16by9"},{"a":2,"n":"diskPosLong","t":4,"rt":$n[2].Vector3,"sn":"diskPosLong"},{"at":[new UnityEngine.HeaderAttribute("Disk")],"a":2,"n":"diskTransform","t":4,"rt":$n[2].Transform,"sn":"diskTransform"},{"a":1,"n":"lastAspect","t":4,"rt":$n[0].Single,"sn":"lastAspect","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"logoGame","t":4,"rt":$n[2].GameObject,"sn":"logoGame"},{"at":[new UnityEngine.HeaderAttribute("Camera Size")],"a":2,"n":"size16by9","t":4,"rt":$n[0].Single,"sn":"size16by9","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"size18by9","t":4,"rt":$n[0].Single,"sn":"size18by9","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"sizeLong","t":4,"rt":$n[0].Single,"sn":"sizeLong","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"target","t":4,"rt":$n[2].GameObject,"sn":"target"},{"a":2,"n":"timer","t":4,"rt":$n[2].GameObject,"sn":"timer"},{"a":2,"n":"trayManager","t":4,"rt":$n[2].Transform,"sn":"trayManager"}]}; }, $n);
    /*CheckSize end.*/

    /*CountdownTimer start.*/
    $m("CountdownTimer", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"ActiveEndCartWin","t":8,"sn":"ActiveEndCartWin","rt":$n[0].Void},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"BackgroundBlink","t":8,"sn":"BackgroundBlink","rt":$n[1].IEnumerator},{"a":1,"n":"CountdownRoutine","t":8,"sn":"CountdownRoutine","rt":$n[1].IEnumerator},{"a":1,"n":"OnTimeUp","t":8,"sn":"OnTimeUp","rt":$n[0].Void},{"a":1,"n":"ScaleTo","t":8,"pi":[{"n":"target","pt":$n[2].Vector3,"ps":0}],"sn":"ScaleTo","rt":$n[1].IEnumerator,"p":[$n[2].Vector3]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"StartCountdown","t":8,"sn":"StartCountdown","rt":$n[0].Void},{"a":1,"n":"StopBackgroundBlink","t":8,"sn":"StopBackgroundBlink","rt":$n[0].Void},{"a":2,"n":"StopCountdown","t":8,"sn":"StopCountdown","rt":$n[0].Void},{"a":1,"n":"UpdateText","t":8,"pi":[{"n":"totalSeconds","pt":$n[0].Int32,"ps":0}],"sn":"UpdateText","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":2,"n":"backgroundWarning","t":4,"rt":$n[2].GameObject,"sn":"backgroundWarning"},{"a":1,"n":"bgBlinkCo","t":4,"rt":$n[2].Coroutine,"sn":"bgBlinkCo"},{"a":2,"n":"bgBlinkSpeed","t":4,"rt":$n[0].Single,"sn":"bgBlinkSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"bgImage","t":4,"rt":$n[5].Image,"sn":"bgImage"},{"a":2,"n":"bgMaxAlpha","t":4,"rt":$n[0].Single,"sn":"bgMaxAlpha","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Background Blink")],"a":2,"n":"bgMinAlpha","t":4,"rt":$n[0].Single,"sn":"bgMinAlpha","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"bgOriginalColor","t":4,"rt":$n[2].Color,"sn":"bgOriginalColor"},{"a":1,"n":"countdownCo","t":4,"rt":$n[2].Coroutine,"sn":"countdownCo"},{"a":2,"n":"hasStarted","t":4,"rt":$n[0].Boolean,"sn":"hasStarted","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"instance","is":true,"t":4,"rt":CountdownTimer,"sn":"instance"},{"a":1,"n":"originalColor","t":4,"rt":$n[2].Color,"sn":"originalColor"},{"a":1,"n":"originalScale","t":4,"rt":$n[2].Vector3,"sn":"originalScale"},{"a":1,"n":"pulseCo","t":4,"rt":$n[2].Coroutine,"sn":"pulseCo"},{"a":2,"n":"pulseScale","t":4,"rt":$n[0].Single,"sn":"pulseScale","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"pulseSpeed","t":4,"rt":$n[0].Single,"sn":"pulseSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"startSeconds","t":4,"rt":$n[0].Int32,"sn":"startSeconds","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"timeUpPanel","t":4,"rt":$n[2].GameObject,"sn":"timeUpPanel"},{"a":2,"n":"timerText","t":4,"rt":$n[3].TMP_Text,"sn":"timerText"},{"a":2,"n":"warningColor","t":4,"rt":$n[2].Color,"sn":"warningColor"},{"at":[new UnityEngine.HeaderAttribute("Warning Effect")],"a":2,"n":"warningTime","t":4,"rt":$n[0].Int32,"sn":"warningTime","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"wwin","t":4,"rt":$n[2].GameObject,"sn":"wwin"}]}; }, $n);
    /*CountdownTimer end.*/

    /*Disk start.*/
    $m("Disk", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"AddItem","t":8,"pi":[{"n":"item","pt":$n[2].Transform,"ps":0}],"sn":"AddItem","rt":$n[0].Void,"p":[$n[2].Transform]},{"a":1,"n":"MoveDisk","t":8,"sn":"MoveDisk","rt":$n[0].Void},{"a":1,"n":"items","t":4,"rt":$n[6].List$1(UnityEngine.Transform),"sn":"items"},{"a":2,"n":"moveDistance","t":4,"rt":$n[0].Single,"sn":"moveDistance","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"moveTime","t":4,"rt":$n[0].Single,"sn":"moveTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"moved","t":4,"rt":$n[0].Boolean,"sn":"moved","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"requiredCount","t":4,"rt":$n[0].Int32,"sn":"requiredCount","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*Disk end.*/

    /*DiskTransform start.*/
    $m("DiskTransform", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"instance","is":true,"t":4,"rt":DiskTransform,"sn":"instance"}]}; }, $n);
    /*DiskTransform end.*/

    /*DragItem start.*/
    $m("DragItem", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"Drag","t":8,"sn":"Drag","rt":$n[0].Void},{"a":1,"n":"Drop","t":8,"sn":"Drop","rt":$n[0].Void},{"a":1,"n":"FindNearestSlot","t":8,"sn":"FindNearestSlot","rt":Slot},{"a":1,"n":"PlayDropScale","t":8,"sn":"PlayDropScale","rt":$n[0].Void},{"a":1,"n":"Return","t":8,"sn":"Return","rt":$n[0].Void},{"a":1,"n":"ShowOutline","t":8,"pi":[{"n":"show","pt":$n[0].Boolean,"ps":0}],"sn":"ShowOutline","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":1,"n":"Snap","t":8,"pi":[{"n":"slot","pt":Slot,"ps":0}],"sn":"Snap","rt":$n[0].Void,"p":[Slot]},{"a":1,"n":"TryPick","t":8,"sn":"TryPick","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"cam","t":4,"rt":$n[2].Camera,"sn":"cam"},{"a":1,"n":"currentDrag","is":true,"t":4,"rt":DragItem,"sn":"currentDrag"},{"at":[new UnityEngine.HeaderAttribute("Outline")],"a":2,"n":"focusOutlineSize","t":4,"rt":$n[0].Single,"sn":"focusOutlineSize","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"isLocked","t":4,"rt":$n[0].Boolean,"sn":"isLocked","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"offset","t":4,"rt":$n[2].Vector3,"sn":"offset"},{"a":1,"n":"outline","t":4,"rt":$n[2].GameObject,"sn":"outline"},{"a":2,"n":"outlineTweenTime","t":4,"rt":$n[0].Single,"sn":"outlineTweenTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"sr","t":4,"rt":$n[2].SpriteRenderer,"sn":"sr"},{"a":1,"n":"startParent","t":4,"rt":$n[2].Transform,"sn":"startParent"},{"a":1,"n":"startPos","t":4,"rt":$n[2].Vector3,"sn":"startPos"},{"a":1,"n":"startScale","t":4,"rt":$n[2].Vector3,"sn":"startScale"},{"a":1,"n":"startSlot","t":4,"rt":Slot,"sn":"startSlot"},{"a":1,"n":"tween","t":4,"rt":$n[4].Tween,"sn":"tween"}]}; }, $n);
    /*DragItem end.*/

    /*EndCart_Lose start.*/
    $m("EndCart_Lose", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"Hide","t":8,"sn":"Hide","rt":$n[0].Void},{"a":1,"n":"HideItem","t":8,"pi":[{"n":"seq","pt":$n[4].Sequence,"ps":0},{"n":"go","pt":$n[2].GameObject,"ps":1}],"sn":"HideItem","rt":$n[0].Void,"p":[$n[4].Sequence,$n[2].GameObject]},{"a":1,"n":"InitState","t":8,"sn":"InitState","rt":$n[0].Void},{"a":1,"n":"JoinItemAnim","t":8,"pi":[{"n":"mainSeq","pt":$n[4].Sequence,"ps":0},{"n":"go","pt":$n[2].GameObject,"ps":1},{"n":"finalScale","pt":$n[0].Single,"ps":2}],"sn":"JoinItemAnim","rt":$n[0].Void,"p":[$n[4].Sequence,$n[2].GameObject,$n[0].Single]},{"a":1,"n":"SetItemInit","t":8,"pi":[{"n":"go","pt":$n[2].GameObject,"ps":0}],"sn":"SetItemInit","rt":$n[0].Void,"p":[$n[2].GameObject]},{"a":2,"n":"Show","t":8,"sn":"Show","rt":$n[0].Void},{"a":1,"n":"StartButtonPulse","t":8,"sn":"StartButtonPulse","rt":$n[0].Void},{"a":2,"n":"actionButton","t":4,"rt":$n[2].GameObject,"sn":"actionButton"},{"a":1,"n":"buttonPulse","t":4,"rt":$n[4].Tween,"sn":"buttonPulse"},{"at":[new UnityEngine.HeaderAttribute("Anim")],"a":2,"n":"buttonScaleTime","t":4,"rt":$n[0].Single,"sn":"buttonScaleTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"emoji","t":4,"rt":$n[2].GameObject,"sn":"emoji"},{"at":[new UnityEngine.HeaderAttribute("Item Final Scale")],"a":2,"n":"emojiFinalScale","t":4,"rt":$n[0].Single,"sn":"emojiFinalScale","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Item Anim")],"a":2,"n":"itemFinalScale","t":4,"rt":$n[0].Single,"sn":"itemFinalScale","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"itemInTime","t":4,"rt":$n[0].Single,"sn":"itemInTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"itemPopScale","t":4,"rt":$n[0].Single,"sn":"itemPopScale","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"itemSettleTime","t":4,"rt":$n[0].Single,"sn":"itemSettleTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Item Anim")],"a":2,"n":"itemStartScale","t":4,"rt":$n[0].Single,"sn":"itemStartScale","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"logo","t":4,"rt":$n[2].GameObject,"sn":"logo"},{"a":2,"n":"otherItemFinalScale","t":4,"rt":$n[0].Single,"sn":"otherItemFinalScale","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"praticle","t":4,"rt":$n[2].GameObject,"sn":"praticle"}]}; }, $n);
    /*EndCart_Lose end.*/

    /*HandHint start.*/
    $m("HandHint", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[0].Void},{"a":2,"n":"Play","t":8,"pi":[{"n":"fromSlot","pt":Slot,"ps":0},{"n":"toSlot","pt":Slot,"ps":1},{"n":"item","pt":DragItem,"ps":2}],"sn":"Play","rt":$n[0].Void,"p":[Slot,Slot,DragItem]},{"a":1,"n":"SetPreviewSprite","t":8,"pi":[{"n":"item","pt":DragItem,"ps":0}],"sn":"SetPreviewSprite","rt":$n[0].Void,"p":[DragItem]},{"a":2,"n":"Stop","t":8,"sn":"Stop","rt":$n[0].Void},{"at":[new UnityEngine.HeaderAttribute("Preview")],"a":2,"n":"previewRenderer","t":4,"rt":$n[2].SpriteRenderer,"sn":"previewRenderer"},{"a":1,"n":"seq","t":4,"rt":$n[4].Sequence,"sn":"seq"}]}; }, $n);
    /*HandHint end.*/

    /*ProgressBrain start.*/
    $m("ProgressBrain", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"ActiveWin","t":8,"sn":"ActiveWin","rt":$n[1].IEnumerator},{"a":2,"n":"AddTrayMatch","t":8,"sn":"AddTrayMatch","rt":$n[0].Void},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"ReduceScore","t":8,"pi":[{"n":"amount","pt":$n[0].Int32,"ps":0}],"sn":"ReduceScore","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":1,"n":"ResetIdleTimer","t":8,"sn":"ResetIdleTimer","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"UpdateBrainPosition","t":8,"sn":"UpdateBrainPosition","rt":$n[0].Void},{"a":2,"n":"brain","t":4,"rt":$n[2].Transform,"sn":"brain"},{"a":2,"n":"currentScore","t":4,"rt":$n[0].Int32,"sn":"currentScore","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"drainAmount","t":4,"rt":$n[0].Int32,"sn":"drainAmount","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"drainInterval","t":4,"rt":$n[0].Single,"sn":"drainInterval","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"drainTimer","t":4,"rt":$n[0].Single,"sn":"drainTimer","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"endPoint","t":4,"rt":$n[2].Transform,"sn":"endPoint"},{"a":1,"n":"endPos","t":4,"rt":$n[2].Vector3,"sn":"endPos"},{"a":2,"n":"endcartWin","t":4,"rt":$n[2].GameObject,"sn":"endcartWin"},{"a":2,"n":"idleDelay","t":4,"rt":$n[0].Single,"sn":"idleDelay","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"idleTimer","t":4,"rt":$n[0].Single,"sn":"idleTimer","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"index","t":4,"rt":$n[0].Int32,"sn":"index","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"instance","is":true,"t":4,"rt":ProgressBrain,"sn":"instance"},{"a":2,"n":"maxScore","t":4,"rt":$n[0].Int32,"sn":"maxScore","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"moveTime","t":4,"rt":$n[0].Single,"sn":"moveTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"scorePerTray","t":4,"rt":$n[0].Int32,"sn":"scorePerTray","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"startPoint","t":4,"rt":$n[2].Transform,"sn":"startPoint"},{"a":1,"n":"startPos","t":4,"rt":$n[2].Vector3,"sn":"startPos"},{"a":2,"n":"text","t":4,"rt":$n[3].TextMeshProUGUI,"sn":"text"}]}; }, $n);
    /*ProgressBrain end.*/

    /*RotateLoop start.*/
    $m("RotateLoop", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"rotateSpeed","t":4,"rt":$n[0].Single,"sn":"rotateSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*RotateLoop end.*/

    /*ScalePopLoop start.*/
    $m("ScalePopLoop", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":1,"n":"Play","t":8,"sn":"Play","rt":$n[0].Void},{"a":1,"n":"_tween","t":4,"rt":$n[4].Tween,"sn":"_tween"},{"a":2,"n":"duration","t":4,"rt":$n[0].Single,"sn":"duration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"ease","t":4,"rt":$n[4].Ease,"sn":"ease","box":function ($v) { return Bridge.box($v, DG.Tweening.Ease, System.Enum.toStringFn(DG.Tweening.Ease));}},{"a":2,"n":"maxScale","t":4,"rt":$n[2].Vector3,"sn":"maxScale"},{"a":2,"n":"minScale","t":4,"rt":$n[2].Vector3,"sn":"minScale"}]}; }, $n);
    /*ScalePopLoop end.*/

    /*Slot start.*/
    $m("Slot", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"CanAcceptItem","t":8,"sn":"CanAcceptItem","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"EnsureCurrentItem","t":8,"sn":"EnsureCurrentItem","rt":$n[0].Void},{"a":2,"n":"IsEmpty","t":8,"sn":"IsEmpty","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"OnValidate","t":8,"sn":"OnValidate","rt":$n[0].Void},{"a":2,"n":"SetItem","t":8,"pi":[{"n":"item","pt":DragItem,"ps":0}],"sn":"SetItem","rt":$n[0].Void,"p":[DragItem]},{"a":2,"n":"anchor","t":4,"rt":$n[2].Transform,"sn":"anchor"},{"a":2,"n":"currentItem","t":4,"rt":DragItem,"sn":"currentItem"},{"a":2,"n":"tray","t":4,"rt":Tray,"sn":"tray"}]}; }, $n);
    /*Slot end.*/

    /*Tray start.*/
    $m("Tray", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"CheckMatch","t":8,"sn":"CheckMatch","rt":$n[0].Void},{"a":2,"n":"CloseTray","t":8,"sn":"CloseTray","rt":$n[0].Void},{"a":1,"n":"FlyToTargetAndDisappear","t":8,"pi":[{"n":"items","pt":$n[6].List$1(DragItem),"ps":0},{"n":"centerPos","pt":$n[2].Vector3,"ps":1}],"sn":"FlyToTargetAndDisappear","rt":$n[0].Void,"p":[$n[6].List$1(DragItem),$n[2].Vector3]},{"a":2,"n":"GetAnyMatchingItem","t":8,"sn":"GetAnyMatchingItem","rt":DragItem},{"a":2,"n":"GetEmptySlot","t":8,"sn":"GetEmptySlot","rt":Slot},{"a":2,"n":"GetMainItemKey","t":8,"sn":"GetMainItemKey","rt":$n[0].String},{"a":2,"n":"GetMaxSameItemCount","t":8,"sn":"GetMaxSameItemCount","rt":$n[0].Int32,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"MoveToCenter","t":8,"pi":[{"n":"items","pt":$n[6].List$1(DragItem),"ps":0}],"sn":"MoveToCenter","rt":$n[0].Void,"p":[$n[6].List$1(DragItem)]},{"a":1,"n":"PlayFireThenMerge","t":8,"pi":[{"n":"items","pt":$n[6].List$1(DragItem),"ps":0}],"sn":"PlayFireThenMerge","rt":$n[1].IEnumerator,"p":[$n[6].List$1(DragItem)]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"attachDelay","t":4,"rt":$n[0].Single,"sn":"attachDelay","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"diskItemScale","t":4,"rt":$n[2].Vector3,"sn":"diskItemScale"},{"a":2,"n":"diskPrefab","t":4,"rt":$n[2].GameObject,"sn":"diskPrefab"},{"a":2,"n":"diskTransform","t":4,"rt":$n[2].Transform,"sn":"diskTransform"},{"at":[new UnityEngine.HeaderAttribute("Match Effect")],"a":2,"n":"fireEffectPrefab","t":4,"rt":$n[2].GameObject,"sn":"fireEffectPrefab"},{"a":2,"n":"fireEffectTime","t":4,"rt":$n[0].Single,"sn":"fireEffectTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"followSmooth","t":4,"rt":$n[0].Single,"sn":"followSmooth","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"isClosed","t":4,"rt":$n[0].Boolean,"sn":"isClosed","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"isCompleted","t":4,"rt":$n[0].Boolean,"sn":"isCompleted","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"itemToDiskTime","t":4,"rt":$n[0].Single,"sn":"itemToDiskTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"listItem","t":4,"rt":System.Array.type(UnityEngine.GameObject),"sn":"listItem"},{"a":2,"n":"maxSlot","t":4,"rt":$n[0].Int32,"sn":"maxSlot","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"moveTime","t":4,"rt":$n[0].Single,"sn":"moveTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"shrinkTime","t":4,"rt":$n[0].Single,"sn":"shrinkTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"slots","t":4,"rt":System.Array.type(Slot),"sn":"slots"},{"a":2,"n":"soldOutPrefabs","t":4,"rt":$n[2].GameObject,"sn":"soldOutPrefabs"},{"a":2,"n":"spacing","t":4,"rt":$n[0].Single,"sn":"spacing","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*Tray end.*/

    /*TrayManager start.*/
    $m("TrayManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"AlignAnimated","t":8,"sn":"AlignAnimated","rt":$n[0].Void},{"a":1,"n":"AlignInstant","t":8,"sn":"AlignInstant","rt":$n[0].Void},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"CacheFirstTutorialTarget","t":8,"sn":"CacheFirstTutorialTarget","rt":$n[0].Void},{"a":1,"n":"CacheSize","t":8,"sn":"CacheSize","rt":$n[0].Void},{"a":2,"n":"CompleteTray","t":8,"pi":[{"n":"completedTray","pt":$n[2].Transform,"ps":0}],"sn":"CompleteTray","rt":$n[0].Void,"p":[$n[2].Transform]},{"a":1,"n":"EndGameDelay","t":8,"sn":"EndGameDelay","rt":$n[1].IEnumerator},{"a":2,"n":"GetAnyItemFromOtherTray","t":8,"pi":[{"n":"excludeTray","pt":Tray,"ps":0}],"sn":"GetAnyItemFromOtherTray","rt":DragItem,"p":[Tray]},{"a":2,"n":"GetFallbackTrayAndSlot","t":8,"sn":"GetFallbackTrayAndSlot","rt":$n[0].Nullable$1(System.ValueTuple$2(Tray,Slot))},{"a":2,"n":"GetItemFromOtherTray","t":8,"pi":[{"n":"targetTray","pt":Tray,"ps":0}],"sn":"GetItemFromOtherTray","rt":DragItem,"p":[Tray]},{"a":2,"n":"GetRandomTrayEmptySlot","t":8,"sn":"GetRandomTrayEmptySlot","rt":$n[0].Nullable$1(System.ValueTuple$2(Tray,Slot))},{"a":2,"n":"GetRandomTraySlotAndItem","t":8,"sn":"GetRandomTraySlotAndItem","rt":$n[0].Nullable$1(System.ValueTuple$3(Tray,Slot,DragItem))},{"a":2,"n":"GetTraysWithMaxSameItem","t":8,"sn":"GetTraysWithMaxSameItem","rt":$n[6].List$1(Tray)},{"a":1,"n":"InitActiveTraysFromScene","t":8,"sn":"InitActiveTraysFromScene","rt":$n[0].Void},{"a":1,"n":"InitPool","t":8,"sn":"InitPool","rt":$n[0].Void},{"a":1,"n":"InitializeRoutine","t":8,"sn":"InitializeRoutine","rt":$n[1].IEnumerator},{"a":2,"n":"NotifyUserInteraction","t":8,"sn":"NotifyUserInteraction","rt":$n[0].Void},{"a":2,"n":"OnUserBeginInteract","t":8,"sn":"OnUserBeginInteract","rt":$n[0].Void},{"a":2,"n":"OnUserEndInteract","t":8,"sn":"OnUserEndInteract","rt":$n[0].Void},{"a":2,"n":"ResetIdle","t":8,"sn":"ResetIdle","rt":$n[0].Void},{"a":2,"n":"ShowTutorialHint","t":8,"sn":"ShowTutorialHint","rt":$n[0].Void},{"a":1,"n":"SpawnTrayAtTop","t":8,"sn":"SpawnTrayAtTop","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"WaitCloseTrayThenWin","t":8,"sn":"WaitCloseTrayThenWin","rt":$n[1].IEnumerator},{"a":2,"n":"activeTrays","t":4,"rt":$n[6].List$1(UnityEngine.Transform),"sn":"activeTrays"},{"a":1,"n":"cachedItem","t":4,"rt":DragItem,"sn":"cachedItem"},{"a":1,"n":"cachedSlot","t":4,"rt":Slot,"sn":"cachedSlot"},{"a":1,"n":"cachedTray","t":4,"rt":Tray,"sn":"cachedTray"},{"at":[new UnityEngine.HeaderAttribute("Grid Settings"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"columns","t":4,"rt":$n[0].Int32,"sn":"columns","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"hintDelay","t":4,"rt":$n[0].Single,"sn":"hintDelay","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"idleTime","t":4,"rt":$n[0].Single,"sn":"idleTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"instance","is":true,"t":4,"rt":TrayManager,"sn":"instance"},{"at":[new UnityEngine.HeaderAttribute("Tutorial State")],"a":2,"n":"isFirstTutorial","t":4,"rt":$n[0].Boolean,"sn":"isFirstTutorial","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"isGameEnded","t":4,"rt":$n[0].Boolean,"sn":"isGameEnded","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"isInteracting","t":4,"rt":$n[0].Boolean,"sn":"isInteracting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"isTutorialShowing","t":4,"rt":$n[0].Boolean,"sn":"isTutorialShowing","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.HeaderAttribute("Tray Prefabs / Pool")],"a":2,"n":"listTray","t":4,"rt":$n[6].List$1(UnityEngine.GameObject),"sn":"listTray"},{"a":2,"n":"manualItem","t":4,"rt":DragItem,"sn":"manualItem"},{"at":[new UnityEngine.HeaderAttribute("Tutorial Manual Override")],"a":2,"n":"manualTray","t":4,"rt":Tray,"sn":"manualTray"},{"a":2,"n":"moveTime","t":4,"rt":$n[0].Single,"sn":"moveTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"rows","t":4,"rt":$n[0].Int32,"sn":"rows","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"sorting","t":4,"rt":$n[0].Int32,"sn":"sorting","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"spacing","t":4,"rt":$n[0].Single,"sn":"spacing","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"step","t":4,"rt":$n[0].Single,"sn":"step","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"stepX","t":4,"rt":$n[0].Single,"sn":"stepX","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"stepY","t":4,"rt":$n[0].Single,"sn":"stepY","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"trayHeight","t":4,"rt":$n[0].Single,"sn":"trayHeight","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"trayPool","t":4,"rt":$n[6].Queue$1(UnityEngine.GameObject),"sn":"trayPool"},{"a":2,"n":"visibleCount","t":4,"rt":$n[0].Int32,"sn":"visibleCount","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"win","t":4,"rt":$n[2].GameObject,"sn":"win"}]}; }, $n);
    /*TrayManager end.*/

    /*TutorialManager start.*/
    $m("TutorialManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"HideHint","t":8,"sn":"HideHint","rt":$n[0].Void},{"a":2,"n":"ShowHandHint","t":8,"pi":[{"n":"fromSlot","pt":Slot,"ps":0},{"n":"toSlot","pt":Slot,"ps":1},{"n":"item","pt":DragItem,"ps":2}],"sn":"ShowHandHint","rt":$n[0].Void,"p":[Slot,Slot,DragItem]},{"a":1,"n":"currentHand","t":4,"rt":$n[2].GameObject,"sn":"currentHand"},{"a":2,"n":"handPrefab","t":4,"rt":$n[2].GameObject,"sn":"handPrefab"},{"a":2,"n":"instance","is":true,"t":4,"rt":TutorialManager,"sn":"instance"}]}; }, $n);
    /*TutorialManager end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    $m("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*DG.Tweening.DOTweenModuleAudio start.*/
    $m("DG.Tweening.DOTweenModuleAudio", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOComplete","is":true,"t":8,"pi":[{"n":"target","pt":$n[7].AudioMixer,"ps":0},{"n":"withCallbacks","dv":false,"o":true,"pt":$n[0].Boolean,"ps":1}],"sn":"DOComplete","rt":$n[0].Int32,"p":[$n[7].AudioMixer,$n[0].Boolean],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].AudioSource,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade","rt":$n[8].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[2].AudioSource,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFlip","is":true,"t":8,"pi":[{"n":"target","pt":$n[7].AudioMixer,"ps":0}],"sn":"DOFlip","rt":$n[0].Int32,"p":[$n[7].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOGoto","is":true,"t":8,"pi":[{"n":"target","pt":$n[7].AudioMixer,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"andPlay","dv":false,"o":true,"pt":$n[0].Boolean,"ps":2}],"sn":"DOGoto","rt":$n[0].Int32,"p":[$n[7].AudioMixer,$n[0].Single,$n[0].Boolean],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOKill","is":true,"t":8,"pi":[{"n":"target","pt":$n[7].AudioMixer,"ps":0},{"n":"complete","dv":false,"o":true,"pt":$n[0].Boolean,"ps":1}],"sn":"DOKill","rt":$n[0].Int32,"p":[$n[7].AudioMixer,$n[0].Boolean],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOPause","is":true,"t":8,"pi":[{"n":"target","pt":$n[7].AudioMixer,"ps":0}],"sn":"DOPause","rt":$n[0].Int32,"p":[$n[7].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOPitch","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].AudioSource,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOPitch","rt":$n[8].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[2].AudioSource,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOPlay","is":true,"t":8,"pi":[{"n":"target","pt":$n[7].AudioMixer,"ps":0}],"sn":"DOPlay","rt":$n[0].Int32,"p":[$n[7].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOPlayBackwards","is":true,"t":8,"pi":[{"n":"target","pt":$n[7].AudioMixer,"ps":0}],"sn":"DOPlayBackwards","rt":$n[0].Int32,"p":[$n[7].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOPlayForward","is":true,"t":8,"pi":[{"n":"target","pt":$n[7].AudioMixer,"ps":0}],"sn":"DOPlayForward","rt":$n[0].Int32,"p":[$n[7].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DORestart","is":true,"t":8,"pi":[{"n":"target","pt":$n[7].AudioMixer,"ps":0}],"sn":"DORestart","rt":$n[0].Int32,"p":[$n[7].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DORewind","is":true,"t":8,"pi":[{"n":"target","pt":$n[7].AudioMixer,"ps":0}],"sn":"DORewind","rt":$n[0].Int32,"p":[$n[7].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOSetFloat","is":true,"t":8,"pi":[{"n":"target","pt":$n[7].AudioMixer,"ps":0},{"n":"floatName","pt":$n[0].String,"ps":1},{"n":"endValue","pt":$n[0].Single,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3}],"sn":"DOSetFloat","rt":$n[8].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[7].AudioMixer,$n[0].String,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOSmoothRewind","is":true,"t":8,"pi":[{"n":"target","pt":$n[7].AudioMixer,"ps":0}],"sn":"DOSmoothRewind","rt":$n[0].Int32,"p":[$n[7].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOTogglePause","is":true,"t":8,"pi":[{"n":"target","pt":$n[7].AudioMixer,"ps":0}],"sn":"DOTogglePause","rt":$n[0].Int32,"p":[$n[7].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*DG.Tweening.DOTweenModuleAudio end.*/

    /*DG.Tweening.DOTweenModulePhysics start.*/
    $m("DG.Tweening.DOTweenModulePhysics", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOJump","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody,"ps":0},{"n":"endValue","pt":$n[2].Vector3,"ps":1},{"n":"jumpPower","pt":$n[0].Single,"ps":2},{"n":"numJumps","pt":$n[0].Int32,"ps":3},{"n":"duration","pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOJump","rt":$n[4].Sequence,"p":[$n[2].Rigidbody,$n[2].Vector3,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean]},{"a":4,"n":"DOLocalPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody,"ps":0},{"n":"path","pt":$n[9].Path,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathMode","dv":1,"o":true,"pt":$n[4].PathMode,"ps":3}],"sn":"DOLocalPath$1","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[2].Rigidbody,$n[9].Path,$n[0].Single,$n[4].PathMode]},{"a":2,"n":"DOLocalPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody,"ps":0},{"n":"path","pt":System.Array.type(UnityEngine.Vector3),"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathType","dv":0,"o":true,"pt":$n[4].PathType,"ps":3},{"n":"pathMode","dv":1,"o":true,"pt":$n[4].PathMode,"ps":4},{"n":"resolution","dv":10,"o":true,"pt":$n[0].Int32,"ps":5},{"n":"gizmoColor","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Color),"ps":6}],"sn":"DOLocalPath","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[2].Rigidbody,System.Array.type(UnityEngine.Vector3),$n[0].Single,$n[4].PathType,$n[4].PathMode,$n[0].Int32,$n[0].Nullable$1(UnityEngine.Color)]},{"a":2,"n":"DOLookAt","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody,"ps":0},{"n":"towards","pt":$n[2].Vector3,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"axisConstraint","dv":0,"o":true,"pt":$n[4].AxisConstraint,"ps":3},{"n":"up","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Vector3),"ps":4}],"sn":"DOLookAt","rt":$n[8].TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions),"p":[$n[2].Rigidbody,$n[2].Vector3,$n[0].Single,$n[4].AxisConstraint,$n[0].Nullable$1(UnityEngine.Vector3)]},{"a":2,"n":"DOMove","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody,"ps":0},{"n":"endValue","pt":$n[2].Vector3,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMove","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].Rigidbody,$n[2].Vector3,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMoveX","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMoveX","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].Rigidbody,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMoveY","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMoveY","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].Rigidbody,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMoveZ","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMoveZ","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].Rigidbody,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":4,"n":"DOPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody,"ps":0},{"n":"path","pt":$n[9].Path,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathMode","dv":1,"o":true,"pt":$n[4].PathMode,"ps":3}],"sn":"DOPath$1","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[2].Rigidbody,$n[9].Path,$n[0].Single,$n[4].PathMode]},{"a":2,"n":"DOPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody,"ps":0},{"n":"path","pt":System.Array.type(UnityEngine.Vector3),"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathType","dv":0,"o":true,"pt":$n[4].PathType,"ps":3},{"n":"pathMode","dv":1,"o":true,"pt":$n[4].PathMode,"ps":4},{"n":"resolution","dv":10,"o":true,"pt":$n[0].Int32,"ps":5},{"n":"gizmoColor","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Color),"ps":6}],"sn":"DOPath","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[2].Rigidbody,System.Array.type(UnityEngine.Vector3),$n[0].Single,$n[4].PathType,$n[4].PathMode,$n[0].Int32,$n[0].Nullable$1(UnityEngine.Color)]},{"a":2,"n":"DORotate","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody,"ps":0},{"n":"endValue","pt":$n[2].Vector3,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"mode","dv":0,"o":true,"pt":$n[4].RotateMode,"ps":3}],"sn":"DORotate","rt":$n[8].TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions),"p":[$n[2].Rigidbody,$n[2].Vector3,$n[0].Single,$n[4].RotateMode]}]}; }, $n);
    /*DG.Tweening.DOTweenModulePhysics end.*/

    /*DG.Tweening.DOTweenModulePhysics2D start.*/
    $m("DG.Tweening.DOTweenModulePhysics2D", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOJump","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[2].Vector2,"ps":1},{"n":"jumpPower","pt":$n[0].Single,"ps":2},{"n":"numJumps","pt":$n[0].Int32,"ps":3},{"n":"duration","pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOJump","rt":$n[4].Sequence,"p":[$n[2].Rigidbody2D,$n[2].Vector2,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean]},{"a":4,"n":"DOLocalPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody2D,"ps":0},{"n":"path","pt":$n[9].Path,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathMode","dv":1,"o":true,"pt":$n[4].PathMode,"ps":3}],"sn":"DOLocalPath$1","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[2].Rigidbody2D,$n[9].Path,$n[0].Single,$n[4].PathMode]},{"a":2,"n":"DOLocalPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody2D,"ps":0},{"n":"path","pt":System.Array.type(UnityEngine.Vector2),"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathType","dv":0,"o":true,"pt":$n[4].PathType,"ps":3},{"n":"pathMode","dv":1,"o":true,"pt":$n[4].PathMode,"ps":4},{"n":"resolution","dv":10,"o":true,"pt":$n[0].Int32,"ps":5},{"n":"gizmoColor","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Color),"ps":6}],"sn":"DOLocalPath","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[2].Rigidbody2D,System.Array.type(UnityEngine.Vector2),$n[0].Single,$n[4].PathType,$n[4].PathMode,$n[0].Int32,$n[0].Nullable$1(UnityEngine.Color)]},{"a":2,"n":"DOMove","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[2].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMove","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].Rigidbody2D,$n[2].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMoveX","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMoveX","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].Rigidbody2D,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMoveY","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMoveY","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].Rigidbody2D,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":4,"n":"DOPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody2D,"ps":0},{"n":"path","pt":$n[9].Path,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathMode","dv":1,"o":true,"pt":$n[4].PathMode,"ps":3}],"sn":"DOPath$1","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[2].Rigidbody2D,$n[9].Path,$n[0].Single,$n[4].PathMode]},{"a":2,"n":"DOPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody2D,"ps":0},{"n":"path","pt":System.Array.type(UnityEngine.Vector2),"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathType","dv":0,"o":true,"pt":$n[4].PathType,"ps":3},{"n":"pathMode","dv":1,"o":true,"pt":$n[4].PathMode,"ps":4},{"n":"resolution","dv":10,"o":true,"pt":$n[0].Int32,"ps":5},{"n":"gizmoColor","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Color),"ps":6}],"sn":"DOPath","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[2].Rigidbody2D,System.Array.type(UnityEngine.Vector2),$n[0].Single,$n[4].PathType,$n[4].PathMode,$n[0].Int32,$n[0].Nullable$1(UnityEngine.Color)]},{"a":2,"n":"DORotate","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DORotate","rt":$n[8].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[2].Rigidbody2D,$n[0].Single,$n[0].Single]}]}; }, $n);
    /*DG.Tweening.DOTweenModulePhysics2D end.*/

    /*DG.Tweening.DOTweenModuleSprite start.*/
    $m("DG.Tweening.DOTweenModuleSprite", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].SpriteRenderer,"ps":0},{"n":"endValue","pt":$n[2].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOBlendableColor","rt":$n[4].Tweener,"p":[$n[2].SpriteRenderer,$n[2].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].SpriteRenderer,"ps":0},{"n":"endValue","pt":$n[2].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor","rt":$n[8].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[2].SpriteRenderer,$n[2].Color,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].SpriteRenderer,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade","rt":$n[8].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[2].SpriteRenderer,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].SpriteRenderer,"ps":0},{"n":"gradient","pt":pc.ColorGradient,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOGradientColor","rt":$n[4].Sequence,"p":[$n[2].SpriteRenderer,pc.ColorGradient,$n[0].Single]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleSprite end.*/

    /*DG.Tweening.DOTweenModuleUI start.*/
    $m("DG.Tweening.DOTweenModuleUI", function () { return {"nested":[$n[4].DOTweenModuleUI.Utils],"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOAnchorMax","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"endValue","pt":$n[2].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorMax","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].RectTransform,$n[2].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorMin","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"endValue","pt":$n[2].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorMin","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].RectTransform,$n[2].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"endValue","pt":$n[2].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].RectTransform,$n[2].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos3D","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"endValue","pt":$n[2].Vector3,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos3D","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].RectTransform,$n[2].Vector3,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos3DX","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos3DX","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos3DY","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos3DY","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos3DZ","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos3DZ","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPosX","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPosX","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPosY","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPosY","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[5].Graphic,"ps":0},{"n":"endValue","pt":$n[2].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOBlendableColor","rt":$n[4].Tweener,"p":[$n[5].Graphic,$n[2].Color,$n[0].Single]},{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[5].Image,"ps":0},{"n":"endValue","pt":$n[2].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOBlendableColor$1","rt":$n[4].Tweener,"p":[$n[5].Image,$n[2].Color,$n[0].Single]},{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[5].Text,"ps":0},{"n":"endValue","pt":$n[2].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOBlendableColor$2","rt":$n[4].Tweener,"p":[$n[5].Text,$n[2].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[5].Graphic,"ps":0},{"n":"endValue","pt":$n[2].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor","rt":$n[8].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[5].Graphic,$n[2].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[5].Image,"ps":0},{"n":"endValue","pt":$n[2].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor$1","rt":$n[8].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[5].Image,$n[2].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[5].Outline,"ps":0},{"n":"endValue","pt":$n[2].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor$2","rt":$n[8].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[5].Outline,$n[2].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[5].Text,"ps":0},{"n":"endValue","pt":$n[2].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor$3","rt":$n[8].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[5].Text,$n[2].Color,$n[0].Single]},{"a":2,"n":"DOCounter","is":true,"t":8,"pi":[{"n":"target","pt":$n[5].Text,"ps":0},{"n":"fromValue","pt":$n[0].Int32,"ps":1},{"n":"endValue","pt":$n[0].Int32,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3},{"n":"addThousandsSeparator","dv":true,"o":true,"pt":$n[0].Boolean,"ps":4},{"n":"culture","dv":null,"o":true,"pt":$n[10].CultureInfo,"ps":5}],"sn":"DOCounter","rt":$n[8].TweenerCore$3(System.Int32,System.Int32,DG.Tweening.Plugins.Options.NoOptions),"p":[$n[5].Text,$n[0].Int32,$n[0].Int32,$n[0].Single,$n[0].Boolean,$n[10].CultureInfo]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].CanvasGroup,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade","rt":$n[8].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[2].CanvasGroup,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[5].Graphic,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade$1","rt":$n[8].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[5].Graphic,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[5].Image,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade$2","rt":$n[8].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[5].Image,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[5].Outline,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade$3","rt":$n[8].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[5].Outline,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[5].Text,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade$4","rt":$n[8].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[5].Text,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFillAmount","is":true,"t":8,"pi":[{"n":"target","pt":$n[5].Image,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFillAmount","rt":$n[8].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[5].Image,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFlexibleSize","is":true,"t":8,"pi":[{"n":"target","pt":$n[5].LayoutElement,"ps":0},{"n":"endValue","pt":$n[2].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOFlexibleSize","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[5].LayoutElement,$n[2].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[5].Image,"ps":0},{"n":"gradient","pt":pc.ColorGradient,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOGradientColor","rt":$n[4].Sequence,"p":[$n[5].Image,pc.ColorGradient,$n[0].Single]},{"a":2,"n":"DOHorizontalNormalizedPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[5].ScrollRect,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOHorizontalNormalizedPos","rt":$n[4].Tweener,"p":[$n[5].ScrollRect,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOJumpAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"endValue","pt":$n[2].Vector2,"ps":1},{"n":"jumpPower","pt":$n[0].Single,"ps":2},{"n":"numJumps","pt":$n[0].Int32,"ps":3},{"n":"duration","pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOJumpAnchorPos","rt":$n[4].Sequence,"p":[$n[2].RectTransform,$n[2].Vector2,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMinSize","is":true,"t":8,"pi":[{"n":"target","pt":$n[5].LayoutElement,"ps":0},{"n":"endValue","pt":$n[2].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMinSize","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[5].LayoutElement,$n[2].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DONormalizedPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[5].ScrollRect,"ps":0},{"n":"endValue","pt":$n[2].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DONormalizedPos","rt":$n[4].Tweener,"p":[$n[5].ScrollRect,$n[2].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOPivot","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"endValue","pt":$n[2].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOPivot","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].RectTransform,$n[2].Vector2,$n[0].Single]},{"a":2,"n":"DOPivotX","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOPivotX","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].RectTransform,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOPivotY","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOPivotY","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].RectTransform,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOPreferredSize","is":true,"t":8,"pi":[{"n":"target","pt":$n[5].LayoutElement,"ps":0},{"n":"endValue","pt":$n[2].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOPreferredSize","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[5].LayoutElement,$n[2].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOPunchAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"punch","pt":$n[2].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"vibrato","dv":10,"o":true,"pt":$n[0].Int32,"ps":3},{"n":"elasticity","dv":1.0,"o":true,"pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOPunchAnchorPos","rt":$n[4].Tweener,"p":[$n[2].RectTransform,$n[2].Vector2,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOScale","is":true,"t":8,"pi":[{"n":"target","pt":$n[5].Outline,"ps":0},{"n":"endValue","pt":$n[2].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOScale","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[5].Outline,$n[2].Vector2,$n[0].Single]},{"a":2,"n":"DOShakeAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"duration","pt":$n[0].Single,"ps":1},{"n":"strength","dv":100.0,"o":true,"pt":$n[0].Single,"ps":2},{"n":"vibrato","dv":10,"o":true,"pt":$n[0].Int32,"ps":3},{"n":"randomness","dv":90.0,"o":true,"pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5},{"n":"fadeOut","dv":true,"o":true,"pt":$n[0].Boolean,"ps":6},{"n":"randomnessMode","dv":0,"o":true,"pt":$n[4].ShakeRandomnessMode,"ps":7}],"sn":"DOShakeAnchorPos","rt":$n[4].Tweener,"p":[$n[2].RectTransform,$n[0].Single,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean,$n[0].Boolean,$n[4].ShakeRandomnessMode]},{"a":2,"n":"DOShakeAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"duration","pt":$n[0].Single,"ps":1},{"n":"strength","pt":$n[2].Vector2,"ps":2},{"n":"vibrato","dv":10,"o":true,"pt":$n[0].Int32,"ps":3},{"n":"randomness","dv":90.0,"o":true,"pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5},{"n":"fadeOut","dv":true,"o":true,"pt":$n[0].Boolean,"ps":6},{"n":"randomnessMode","dv":0,"o":true,"pt":$n[4].ShakeRandomnessMode,"ps":7}],"sn":"DOShakeAnchorPos$1","rt":$n[4].Tweener,"p":[$n[2].RectTransform,$n[0].Single,$n[2].Vector2,$n[0].Int32,$n[0].Single,$n[0].Boolean,$n[0].Boolean,$n[4].ShakeRandomnessMode]},{"a":2,"n":"DOShapeCircle","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"center","pt":$n[2].Vector2,"ps":1},{"n":"endValueDegrees","pt":$n[0].Single,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3},{"n":"relativeCenter","dv":false,"o":true,"pt":$n[0].Boolean,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOShapeCircle","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.CircleOptions),"p":[$n[2].RectTransform,$n[2].Vector2,$n[0].Single,$n[0].Single,$n[0].Boolean,$n[0].Boolean]},{"a":2,"n":"DOSizeDelta","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"endValue","pt":$n[2].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOSizeDelta","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].RectTransform,$n[2].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOText","is":true,"t":8,"pi":[{"n":"target","pt":$n[5].Text,"ps":0},{"n":"endValue","pt":$n[0].String,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"richTextEnabled","dv":true,"o":true,"pt":$n[0].Boolean,"ps":3},{"n":"scrambleMode","dv":0,"o":true,"pt":$n[4].ScrambleMode,"ps":4},{"n":"scrambleChars","dv":null,"o":true,"pt":$n[0].String,"ps":5}],"sn":"DOText","rt":$n[8].TweenerCore$3(System.String,System.String,DG.Tweening.Plugins.Options.StringOptions),"p":[$n[5].Text,$n[0].String,$n[0].Single,$n[0].Boolean,$n[4].ScrambleMode,$n[0].String]},{"a":2,"n":"DOValue","is":true,"t":8,"pi":[{"n":"target","pt":$n[5].Slider,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOValue","rt":$n[8].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[5].Slider,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOVerticalNormalizedPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[5].ScrollRect,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOVerticalNormalizedPos","rt":$n[4].Tweener,"p":[$n[5].ScrollRect,$n[0].Single,$n[0].Single,$n[0].Boolean]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUI end.*/

    /*DG.Tweening.DOTweenModuleUI+Utils start.*/
    $m("DG.Tweening.DOTweenModuleUI.Utils", function () { return {"td":$n[4].DOTweenModuleUI,"att":1048962,"a":2,"s":true,"m":[{"a":2,"n":"SwitchToRectTransform","is":true,"t":8,"pi":[{"n":"from","pt":$n[2].RectTransform,"ps":0},{"n":"to","pt":$n[2].RectTransform,"ps":1}],"sn":"SwitchToRectTransform","rt":$n[2].Vector2,"p":[$n[2].RectTransform,$n[2].RectTransform]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUI+Utils end.*/

    /*DG.Tweening.DOTweenModuleUnityVersion start.*/
    $m("DG.Tweening.DOTweenModuleUnityVersion", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Material,"ps":0},{"n":"gradient","pt":pc.ColorGradient,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOGradientColor","rt":$n[4].Sequence,"p":[$n[2].Material,pc.ColorGradient,$n[0].Single]},{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Material,"ps":0},{"n":"gradient","pt":pc.ColorGradient,"ps":1},{"n":"property","pt":$n[0].String,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3}],"sn":"DOGradientColor$1","rt":$n[4].Sequence,"p":[$n[2].Material,pc.ColorGradient,$n[0].String,$n[0].Single]},{"a":2,"n":"DOOffset","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Material,"ps":0},{"n":"endValue","pt":$n[2].Vector2,"ps":1},{"n":"propertyID","pt":$n[0].Int32,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3}],"sn":"DOOffset","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].Material,$n[2].Vector2,$n[0].Int32,$n[0].Single]},{"a":2,"n":"DOTiling","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Material,"ps":0},{"n":"endValue","pt":$n[2].Vector2,"ps":1},{"n":"propertyID","pt":$n[0].Int32,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3}],"sn":"DOTiling","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].Material,$n[2].Vector2,$n[0].Int32,$n[0].Single]},{"a":2,"n":"WaitForCompletion","is":true,"t":8,"pi":[{"n":"t","pt":$n[4].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":1}],"sn":"WaitForCompletion","rt":$n[2].CustomYieldInstruction,"p":[$n[4].Tween,$n[0].Boolean]},{"a":2,"n":"WaitForElapsedLoops","is":true,"t":8,"pi":[{"n":"t","pt":$n[4].Tween,"ps":0},{"n":"elapsedLoops","pt":$n[0].Int32,"ps":1},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":2}],"sn":"WaitForElapsedLoops","rt":$n[2].CustomYieldInstruction,"p":[$n[4].Tween,$n[0].Int32,$n[0].Boolean]},{"a":2,"n":"WaitForKill","is":true,"t":8,"pi":[{"n":"t","pt":$n[4].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":1}],"sn":"WaitForKill","rt":$n[2].CustomYieldInstruction,"p":[$n[4].Tween,$n[0].Boolean]},{"a":2,"n":"WaitForPosition","is":true,"t":8,"pi":[{"n":"t","pt":$n[4].Tween,"ps":0},{"n":"position","pt":$n[0].Single,"ps":1},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":2}],"sn":"WaitForPosition","rt":$n[2].CustomYieldInstruction,"p":[$n[4].Tween,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"WaitForRewind","is":true,"t":8,"pi":[{"n":"t","pt":$n[4].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":1}],"sn":"WaitForRewind","rt":$n[2].CustomYieldInstruction,"p":[$n[4].Tween,$n[0].Boolean]},{"a":2,"n":"WaitForStart","is":true,"t":8,"pi":[{"n":"t","pt":$n[4].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":1}],"sn":"WaitForStart","rt":$n[2].CustomYieldInstruction,"p":[$n[4].Tween,$n[0].Boolean]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUnityVersion end.*/

    /*DG.Tweening.DOTweenCYInstruction start.*/
    $m("DG.Tweening.DOTweenCYInstruction", function () { return {"nested":[$n[4].DOTweenCYInstruction.WaitForCompletion,$n[4].DOTweenCYInstruction.WaitForRewind,$n[4].DOTweenCYInstruction.WaitForKill,$n[4].DOTweenCYInstruction.WaitForElapsedLoops,$n[4].DOTweenCYInstruction.WaitForPosition,$n[4].DOTweenCYInstruction.WaitForStart],"att":1048961,"a":2,"s":true}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForCompletion", function () { return {"td":$n[4].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[4].Tween],"pi":[{"n":"tween","pt":$n[4].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[4].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForRewind", function () { return {"td":$n[4].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[4].Tween],"pi":[{"n":"tween","pt":$n[4].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[4].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForKill start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForKill", function () { return {"td":$n[4].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[4].Tween],"pi":[{"n":"tween","pt":$n[4].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[4].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForKill end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops", function () { return {"td":$n[4].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[4].Tween,$n[0].Int32],"pi":[{"n":"tween","pt":$n[4].Tween,"ps":0},{"n":"elapsedLoops","pt":$n[0].Int32,"ps":1}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"elapsedLoops","t":4,"rt":$n[0].Int32,"sn":"elapsedLoops","ro":true,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"t","t":4,"rt":$n[4].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForPosition", function () { return {"td":$n[4].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[4].Tween,$n[0].Single],"pi":[{"n":"tween","pt":$n[4].Tween,"ps":0},{"n":"position","pt":$n[0].Single,"ps":1}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"position","t":4,"rt":$n[0].Single,"sn":"position","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"t","t":4,"rt":$n[4].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForStart start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForStart", function () { return {"td":$n[4].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[4].Tween],"pi":[{"n":"tween","pt":$n[4].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[4].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForStart end.*/

    /*DG.Tweening.DOTweenModuleUtils start.*/
    $m("DG.Tweening.DOTweenModuleUtils", function () { return {"nested":[$n[4].DOTweenModuleUtils.Physics],"att":1048961,"a":2,"s":true,"m":[{"at":[new UnityEngine.Scripting.PreserveAttribute()],"a":2,"n":"Init","is":true,"t":8,"sn":"Init","rt":$n[0].Void},{"at":[new UnityEngine.Scripting.PreserveAttribute()],"a":1,"n":"Preserver","is":true,"t":8,"sn":"Preserver","rt":$n[0].Void},{"a":1,"n":"_initialized","is":true,"t":4,"rt":$n[0].Boolean,"sn":"_initialized","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUtils end.*/

    /*DG.Tweening.DOTweenModuleUtils+Physics start.*/
    $m("DG.Tweening.DOTweenModuleUtils.Physics", function () { return {"td":$n[4].DOTweenModuleUtils,"att":1048962,"a":2,"s":true,"m":[{"at":[new UnityEngine.Scripting.PreserveAttribute()],"a":2,"n":"CreateDOTweenPathTween","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].MonoBehaviour,"ps":0},{"n":"tweenRigidbody","pt":$n[0].Boolean,"ps":1},{"n":"isLocal","pt":$n[0].Boolean,"ps":2},{"n":"path","pt":$n[9].Path,"ps":3},{"n":"duration","pt":$n[0].Single,"ps":4},{"n":"pathMode","pt":$n[4].PathMode,"ps":5}],"sn":"CreateDOTweenPathTween","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[2].MonoBehaviour,$n[0].Boolean,$n[0].Boolean,$n[9].Path,$n[0].Single,$n[4].PathMode]},{"at":[new UnityEngine.Scripting.PreserveAttribute()],"a":2,"n":"HasRigidbody","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Component,"ps":0}],"sn":"HasRigidbody","rt":$n[0].Boolean,"p":[$n[2].Component],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"HasRigidbody2D","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Component,"ps":0}],"sn":"HasRigidbody2D","rt":$n[0].Boolean,"p":[$n[2].Component],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"SetOrientationOnPath","is":true,"t":8,"pi":[{"n":"options","pt":$n[11].PathOptions,"ps":0},{"n":"t","pt":$n[4].Tween,"ps":1},{"n":"newRot","pt":$n[2].Quaternion,"ps":2},{"n":"trans","pt":$n[2].Transform,"ps":3}],"sn":"SetOrientationOnPath","rt":$n[0].Void,"p":[$n[11].PathOptions,$n[4].Tween,$n[2].Quaternion,$n[2].Transform]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUtils+Physics end.*/

    }});
