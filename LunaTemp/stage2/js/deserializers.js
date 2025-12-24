var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i590 = root || request.c( 'UnityEngine.JointSpring' )
  var i591 = data
  i590.spring = i591[0]
  i590.damper = i591[1]
  i590.targetPosition = i591[2]
  return i590
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i592 = root || request.c( 'UnityEngine.JointMotor' )
  var i593 = data
  i592.m_TargetVelocity = i593[0]
  i592.m_Force = i593[1]
  i592.m_FreeSpin = i593[2]
  return i592
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i594 = root || request.c( 'UnityEngine.JointLimits' )
  var i595 = data
  i594.m_Min = i595[0]
  i594.m_Max = i595[1]
  i594.m_Bounciness = i595[2]
  i594.m_BounceMinVelocity = i595[3]
  i594.m_ContactDistance = i595[4]
  i594.minBounce = i595[5]
  i594.maxBounce = i595[6]
  return i594
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i596 = root || request.c( 'UnityEngine.JointDrive' )
  var i597 = data
  i596.m_PositionSpring = i597[0]
  i596.m_PositionDamper = i597[1]
  i596.m_MaximumForce = i597[2]
  i596.m_UseAcceleration = i597[3]
  return i596
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i598 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i599 = data
  i598.m_Spring = i599[0]
  i598.m_Damper = i599[1]
  return i598
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i600 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i601 = data
  i600.m_Limit = i601[0]
  i600.m_Bounciness = i601[1]
  i600.m_ContactDistance = i601[2]
  return i600
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i602 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i603 = data
  i602.m_ExtremumSlip = i603[0]
  i602.m_ExtremumValue = i603[1]
  i602.m_AsymptoteSlip = i603[2]
  i602.m_AsymptoteValue = i603[3]
  i602.m_Stiffness = i603[4]
  return i602
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i604 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i605 = data
  i604.m_LowerAngle = i605[0]
  i604.m_UpperAngle = i605[1]
  return i604
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i606 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i607 = data
  i606.m_MotorSpeed = i607[0]
  i606.m_MaximumMotorTorque = i607[1]
  return i606
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i608 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i609 = data
  i608.m_DampingRatio = i609[0]
  i608.m_Frequency = i609[1]
  i608.m_Angle = i609[2]
  return i608
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i610 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i611 = data
  i610.m_LowerTranslation = i611[0]
  i610.m_UpperTranslation = i611[1]
  return i610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i613 = data
  i612.name = i613[0]
  i612.width = i613[1]
  i612.height = i613[2]
  i612.mipmapCount = i613[3]
  i612.anisoLevel = i613[4]
  i612.filterMode = i613[5]
  i612.hdr = !!i613[6]
  i612.format = i613[7]
  i612.wrapMode = i613[8]
  i612.alphaIsTransparency = !!i613[9]
  i612.alphaSource = i613[10]
  i612.graphicsFormat = i613[11]
  i612.sRGBTexture = !!i613[12]
  i612.desiredColorSpace = i613[13]
  i612.wrapU = i613[14]
  i612.wrapV = i613[15]
  return i612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i614 = root || new pc.UnityMaterial()
  var i615 = data
  i614.name = i615[0]
  request.r(i615[1], i615[2], 0, i614, 'shader')
  i614.renderQueue = i615[3]
  i614.enableInstancing = !!i615[4]
  var i617 = i615[5]
  var i616 = []
  for(var i = 0; i < i617.length; i += 1) {
    i616.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i617[i + 0]) );
  }
  i614.floatParameters = i616
  var i619 = i615[6]
  var i618 = []
  for(var i = 0; i < i619.length; i += 1) {
    i618.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i619[i + 0]) );
  }
  i614.colorParameters = i618
  var i621 = i615[7]
  var i620 = []
  for(var i = 0; i < i621.length; i += 1) {
    i620.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i621[i + 0]) );
  }
  i614.vectorParameters = i620
  var i623 = i615[8]
  var i622 = []
  for(var i = 0; i < i623.length; i += 1) {
    i622.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i623[i + 0]) );
  }
  i614.textureParameters = i622
  var i625 = i615[9]
  var i624 = []
  for(var i = 0; i < i625.length; i += 1) {
    i624.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i625[i + 0]) );
  }
  i614.materialFlags = i624
  return i614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i629 = data
  i628.name = i629[0]
  i628.value = i629[1]
  return i628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i633 = data
  i632.name = i633[0]
  i632.value = new pc.Color(i633[1], i633[2], i633[3], i633[4])
  return i632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i637 = data
  i636.name = i637[0]
  i636.value = new pc.Vec4( i637[1], i637[2], i637[3], i637[4] )
  return i636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i641 = data
  i640.name = i641[0]
  request.r(i641[1], i641[2], 0, i640, 'value')
  return i640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i645 = data
  i644.name = i645[0]
  i644.enabled = !!i645[1]
  return i644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i647 = data
  i646.position = new pc.Vec3( i647[0], i647[1], i647[2] )
  i646.scale = new pc.Vec3( i647[3], i647[4], i647[5] )
  i646.rotation = new pc.Quat(i647[6], i647[7], i647[8], i647[9])
  return i646
}

Deserializers["HandHint"] = function (request, data, root) {
  var i648 = root || request.c( 'HandHint' )
  var i649 = data
  request.r(i649[0], i649[1], 0, i648, 'previewRenderer')
  return i648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i651 = data
  i650.color = new pc.Color(i651[0], i651[1], i651[2], i651[3])
  request.r(i651[4], i651[5], 0, i650, 'sprite')
  i650.flipX = !!i651[6]
  i650.flipY = !!i651[7]
  i650.drawMode = i651[8]
  i650.size = new pc.Vec2( i651[9], i651[10] )
  i650.tileMode = i651[11]
  i650.adaptiveModeThreshold = i651[12]
  i650.maskInteraction = i651[13]
  i650.spriteSortPoint = i651[14]
  i650.enabled = !!i651[15]
  request.r(i651[16], i651[17], 0, i650, 'sharedMaterial')
  var i653 = i651[18]
  var i652 = []
  for(var i = 0; i < i653.length; i += 2) {
  request.r(i653[i + 0], i653[i + 1], 2, i652, '')
  }
  i650.sharedMaterials = i652
  i650.receiveShadows = !!i651[19]
  i650.shadowCastingMode = i651[20]
  i650.sortingLayerID = i651[21]
  i650.sortingOrder = i651[22]
  i650.lightmapIndex = i651[23]
  i650.lightmapSceneIndex = i651[24]
  i650.lightmapScaleOffset = new pc.Vec4( i651[25], i651[26], i651[27], i651[28] )
  i650.lightProbeUsage = i651[29]
  i650.reflectionProbeUsage = i651[30]
  return i650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i657 = data
  i656.name = i657[0]
  i656.tagId = i657[1]
  i656.enabled = !!i657[2]
  i656.isStatic = !!i657[3]
  i656.layer = i657[4]
  return i656
}

Deserializers["Disk"] = function (request, data, root) {
  var i658 = root || request.c( 'Disk' )
  var i659 = data
  i658.requiredCount = i659[0]
  i658.moveDistance = i659[1]
  i658.moveTime = i659[2]
  return i658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i661 = data
  request.r(i661[0], i661[1], 0, i660, 'animatorController')
  request.r(i661[2], i661[3], 0, i660, 'avatar')
  i660.updateMode = i661[4]
  i660.hasTransformHierarchy = !!i661[5]
  i660.applyRootMotion = !!i661[6]
  var i663 = i661[7]
  var i662 = []
  for(var i = 0; i < i663.length; i += 2) {
  request.r(i663[i + 0], i663[i + 1], 2, i662, '')
  }
  i660.humanBones = i662
  i660.enabled = !!i661[8]
  return i660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i667 = data
  i666.name = i667[0]
  i666.index = i667[1]
  i666.startup = !!i667[2]
  return i666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i669 = data
  i668.aspect = i669[0]
  i668.orthographic = !!i669[1]
  i668.orthographicSize = i669[2]
  i668.backgroundColor = new pc.Color(i669[3], i669[4], i669[5], i669[6])
  i668.nearClipPlane = i669[7]
  i668.farClipPlane = i669[8]
  i668.fieldOfView = i669[9]
  i668.depth = i669[10]
  i668.clearFlags = i669[11]
  i668.cullingMask = i669[12]
  i668.rect = i669[13]
  request.r(i669[14], i669[15], 0, i668, 'targetTexture')
  i668.usePhysicalProperties = !!i669[16]
  i668.focalLength = i669[17]
  i668.sensorSize = new pc.Vec2( i669[18], i669[19] )
  i668.lensShift = new pc.Vec2( i669[20], i669[21] )
  i668.gateFit = i669[22]
  i668.commandBufferCount = i669[23]
  i668.cameraType = i669[24]
  i668.enabled = !!i669[25]
  return i668
}

Deserializers["GameManager"] = function (request, data, root) {
  var i670 = root || request.c( 'GameManager' )
  var i671 = data
  i670.clicksToLog = i671[0]
  i670.clickCount = i671[1]
  i670.isClick = !!i671[2]
  i670.finishGame = !!i671[3]
  request.r(i671[4], i671[5], 0, i670, 'textPoint')
  i670.point = i671[6]
  request.r(i671[7], i671[8], 0, i670, 'tutGame')
  return i670
}

Deserializers["TutorialManager"] = function (request, data, root) {
  var i672 = root || request.c( 'TutorialManager' )
  var i673 = data
  request.r(i673[0], i673[1], 0, i672, 'handPrefab')
  return i672
}

Deserializers["AudioManager"] = function (request, data, root) {
  var i674 = root || request.c( 'AudioManager' )
  var i675 = data
  request.r(i675[0], i675[1], 0, i674, 'bgmSource')
  request.r(i675[2], i675[3], 0, i674, 'sfxSource')
  request.r(i675[4], i675[5], 0, i674, 'bgm')
  request.r(i675[6], i675[7], 0, i674, 'finish')
  request.r(i675[8], i675[9], 0, i674, 'drog')
  request.r(i675[10], i675[11], 0, i674, 'match')
  request.r(i675[12], i675[13], 0, i674, 'pop')
  request.r(i675[14], i675[15], 0, i674, 'lose')
  request.r(i675[16], i675[17], 0, i674, 'normalTick')
  request.r(i675[18], i675[19], 0, i674, 'warningTick')
  return i674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i677 = data
  request.r(i677[0], i677[1], 0, i676, 'clip')
  request.r(i677[2], i677[3], 0, i676, 'outputAudioMixerGroup')
  i676.playOnAwake = !!i677[4]
  i676.loop = !!i677[5]
  i676.time = i677[6]
  i676.volume = i677[7]
  i676.pitch = i677[8]
  i676.enabled = !!i677[9]
  return i676
}

Deserializers["TrayManager"] = function (request, data, root) {
  var i678 = root || request.c( 'TrayManager' )
  var i679 = data
  i678.spacing = i679[0]
  i678.visibleCount = i679[1]
  i678.moveTime = i679[2]
  var i681 = i679[3]
  var i680 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i681.length; i += 2) {
  request.r(i681[i + 0], i681[i + 1], 1, i680, '')
  }
  i678.listTray = i680
  var i683 = i679[4]
  var i682 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i683.length; i += 2) {
  request.r(i683[i + 0], i683[i + 1], 1, i682, '')
  }
  i678.activeTrays = i682
  i678.idleTime = i679[5]
  i678.hintDelay = i679[6]
  i678.isTutorialShowing = !!i679[7]
  i678.isFirstTutorial = !!i679[8]
  i678.columns = i679[9]
  i678.rows = i679[10]
  i678.stepX = i679[11]
  i678.stepY = i679[12]
  return i678
}

Deserializers["Tray"] = function (request, data, root) {
  var i688 = root || request.c( 'Tray' )
  var i689 = data
  i688.spacing = i689[0]
  i688.moveTime = i689[1]
  request.r(i689[2], i689[3], 0, i688, 'diskPrefab')
  request.r(i689[4], i689[5], 0, i688, 'diskTransform')
  i688.shrinkTime = i689[6]
  i688.itemToDiskTime = i689[7]
  i688.attachDelay = i689[8]
  i688.followSmooth = i689[9]
  i688.diskItemScale = new pc.Vec3( i689[10], i689[11], i689[12] )
  request.r(i689[13], i689[14], 0, i688, 'soldOutPrefabs')
  var i691 = i689[15]
  var i690 = []
  for(var i = 0; i < i691.length; i += 2) {
  request.r(i691[i + 0], i691[i + 1], 2, i690, '')
  }
  i688.listItem = i690
  i688.maxSlot = i689[16]
  i688.isCompleted = !!i689[17]
  var i693 = i689[18]
  var i692 = []
  for(var i = 0; i < i693.length; i += 2) {
  request.r(i693[i + 0], i693[i + 1], 2, i692, '')
  }
  i688.slots = i692
  i688.isClosed = !!i689[19]
  request.r(i689[20], i689[21], 0, i688, 'fireEffectPrefab')
  i688.fireEffectTime = i689[22]
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i699 = data
  i698.usedByComposite = !!i699[0]
  i698.autoTiling = !!i699[1]
  i698.size = new pc.Vec2( i699[2], i699[3] )
  i698.edgeRadius = i699[4]
  i698.enabled = !!i699[5]
  i698.isTrigger = !!i699[6]
  i698.usedByEffector = !!i699[7]
  i698.density = i699[8]
  i698.offset = new pc.Vec2( i699[9], i699[10] )
  request.r(i699[11], i699[12], 0, i698, 'material')
  return i698
}

Deserializers["Slot"] = function (request, data, root) {
  var i700 = root || request.c( 'Slot' )
  var i701 = data
  request.r(i701[0], i701[1], 0, i700, 'anchor')
  request.r(i701[2], i701[3], 0, i700, 'currentItem')
  request.r(i701[4], i701[5], 0, i700, 'tray')
  return i700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i703 = data
  i702.bodyType = i703[0]
  request.r(i703[1], i703[2], 0, i702, 'material')
  i702.simulated = !!i703[3]
  i702.useAutoMass = !!i703[4]
  i702.mass = i703[5]
  i702.drag = i703[6]
  i702.angularDrag = i703[7]
  i702.gravityScale = i703[8]
  i702.collisionDetectionMode = i703[9]
  i702.sleepMode = i703[10]
  i702.constraints = i703[11]
  return i702
}

Deserializers["DragItem"] = function (request, data, root) {
  var i704 = root || request.c( 'DragItem' )
  var i705 = data
  i704.isLocked = !!i705[0]
  i704.focusOutlineSize = i705[1]
  i704.outlineTweenTime = i705[2]
  return i704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i707 = data
  i706.pivot = new pc.Vec2( i707[0], i707[1] )
  i706.anchorMin = new pc.Vec2( i707[2], i707[3] )
  i706.anchorMax = new pc.Vec2( i707[4], i707[5] )
  i706.sizeDelta = new pc.Vec2( i707[6], i707[7] )
  i706.anchoredPosition3D = new pc.Vec3( i707[8], i707[9], i707[10] )
  i706.rotation = new pc.Quat(i707[11], i707[12], i707[13], i707[14])
  i706.scale = new pc.Vec3( i707[15], i707[16], i707[17] )
  return i706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i709 = data
  i708.planeDistance = i709[0]
  i708.referencePixelsPerUnit = i709[1]
  i708.isFallbackOverlay = !!i709[2]
  i708.renderMode = i709[3]
  i708.renderOrder = i709[4]
  i708.sortingLayerName = i709[5]
  i708.sortingOrder = i709[6]
  i708.scaleFactor = i709[7]
  request.r(i709[8], i709[9], 0, i708, 'worldCamera')
  i708.overrideSorting = !!i709[10]
  i708.pixelPerfect = !!i709[11]
  i708.targetDisplay = i709[12]
  i708.overridePixelPerfect = !!i709[13]
  i708.enabled = !!i709[14]
  return i708
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i710 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i711 = data
  i710.m_UiScaleMode = i711[0]
  i710.m_ReferencePixelsPerUnit = i711[1]
  i710.m_ScaleFactor = i711[2]
  i710.m_ReferenceResolution = new pc.Vec2( i711[3], i711[4] )
  i710.m_ScreenMatchMode = i711[5]
  i710.m_MatchWidthOrHeight = i711[6]
  i710.m_PhysicalUnit = i711[7]
  i710.m_FallbackScreenDPI = i711[8]
  i710.m_DefaultSpriteDPI = i711[9]
  i710.m_DynamicPixelsPerUnit = i711[10]
  i710.m_PresetInfoIsWorld = !!i711[11]
  return i710
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i712 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i713 = data
  i712.m_IgnoreReversedGraphics = !!i713[0]
  i712.m_BlockingObjects = i713[1]
  i712.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i713[2] )
  return i712
}

Deserializers["CountdownTimer"] = function (request, data, root) {
  var i714 = root || request.c( 'CountdownTimer' )
  var i715 = data
  request.r(i715[0], i715[1], 0, i714, 'timerText')
  i714.startSeconds = i715[2]
  i714.warningTime = i715[3]
  i714.warningColor = new pc.Color(i715[4], i715[5], i715[6], i715[7])
  i714.pulseScale = i715[8]
  i714.pulseSpeed = i715[9]
  request.r(i715[10], i715[11], 0, i714, 'backgroundWarning')
  request.r(i715[12], i715[13], 0, i714, 'timeUpPanel')
  i714.hasStarted = !!i715[14]
  return i714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i717 = data
  i716.cullTransparentMesh = !!i717[0]
  return i716
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i718 = root || request.c( 'UnityEngine.UI.Image' )
  var i719 = data
  request.r(i719[0], i719[1], 0, i718, 'm_Sprite')
  i718.m_Type = i719[2]
  i718.m_PreserveAspect = !!i719[3]
  i718.m_FillCenter = !!i719[4]
  i718.m_FillMethod = i719[5]
  i718.m_FillAmount = i719[6]
  i718.m_FillClockwise = !!i719[7]
  i718.m_FillOrigin = i719[8]
  i718.m_UseSpriteMesh = !!i719[9]
  i718.m_PixelsPerUnitMultiplier = i719[10]
  i718.m_Maskable = !!i719[11]
  request.r(i719[12], i719[13], 0, i718, 'm_Material')
  i718.m_Color = new pc.Color(i719[14], i719[15], i719[16], i719[17])
  i718.m_RaycastTarget = !!i719[18]
  i718.m_RaycastPadding = new pc.Vec4( i719[19], i719[20], i719[21], i719[22] )
  return i718
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i720 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i721 = data
  i720.m_hasFontAssetChanged = !!i721[0]
  request.r(i721[1], i721[2], 0, i720, 'm_baseMaterial')
  i720.m_maskOffset = new pc.Vec4( i721[3], i721[4], i721[5], i721[6] )
  i720.m_text = i721[7]
  i720.m_isRightToLeft = !!i721[8]
  request.r(i721[9], i721[10], 0, i720, 'm_fontAsset')
  request.r(i721[11], i721[12], 0, i720, 'm_sharedMaterial')
  var i723 = i721[13]
  var i722 = []
  for(var i = 0; i < i723.length; i += 2) {
  request.r(i723[i + 0], i723[i + 1], 2, i722, '')
  }
  i720.m_fontSharedMaterials = i722
  request.r(i721[14], i721[15], 0, i720, 'm_fontMaterial')
  var i725 = i721[16]
  var i724 = []
  for(var i = 0; i < i725.length; i += 2) {
  request.r(i725[i + 0], i725[i + 1], 2, i724, '')
  }
  i720.m_fontMaterials = i724
  i720.m_fontColor32 = UnityEngine.Color32.ConstructColor(i721[17], i721[18], i721[19], i721[20])
  i720.m_fontColor = new pc.Color(i721[21], i721[22], i721[23], i721[24])
  i720.m_enableVertexGradient = !!i721[25]
  i720.m_colorMode = i721[26]
  i720.m_fontColorGradient = request.d('TMPro.VertexGradient', i721[27], i720.m_fontColorGradient)
  request.r(i721[28], i721[29], 0, i720, 'm_fontColorGradientPreset')
  request.r(i721[30], i721[31], 0, i720, 'm_spriteAsset')
  i720.m_tintAllSprites = !!i721[32]
  request.r(i721[33], i721[34], 0, i720, 'm_StyleSheet')
  i720.m_TextStyleHashCode = i721[35]
  i720.m_overrideHtmlColors = !!i721[36]
  i720.m_faceColor = UnityEngine.Color32.ConstructColor(i721[37], i721[38], i721[39], i721[40])
  i720.m_fontSize = i721[41]
  i720.m_fontSizeBase = i721[42]
  i720.m_fontWeight = i721[43]
  i720.m_enableAutoSizing = !!i721[44]
  i720.m_fontSizeMin = i721[45]
  i720.m_fontSizeMax = i721[46]
  i720.m_fontStyle = i721[47]
  i720.m_HorizontalAlignment = i721[48]
  i720.m_VerticalAlignment = i721[49]
  i720.m_textAlignment = i721[50]
  i720.m_characterSpacing = i721[51]
  i720.m_wordSpacing = i721[52]
  i720.m_lineSpacing = i721[53]
  i720.m_lineSpacingMax = i721[54]
  i720.m_paragraphSpacing = i721[55]
  i720.m_charWidthMaxAdj = i721[56]
  i720.m_enableWordWrapping = !!i721[57]
  i720.m_wordWrappingRatios = i721[58]
  i720.m_overflowMode = i721[59]
  request.r(i721[60], i721[61], 0, i720, 'm_linkedTextComponent')
  request.r(i721[62], i721[63], 0, i720, 'parentLinkedComponent')
  i720.m_enableKerning = !!i721[64]
  i720.m_enableExtraPadding = !!i721[65]
  i720.checkPaddingRequired = !!i721[66]
  i720.m_isRichText = !!i721[67]
  i720.m_parseCtrlCharacters = !!i721[68]
  i720.m_isOrthographic = !!i721[69]
  i720.m_isCullingEnabled = !!i721[70]
  i720.m_horizontalMapping = i721[71]
  i720.m_verticalMapping = i721[72]
  i720.m_uvLineOffset = i721[73]
  i720.m_geometrySortingOrder = i721[74]
  i720.m_IsTextObjectScaleStatic = !!i721[75]
  i720.m_VertexBufferAutoSizeReduction = !!i721[76]
  i720.m_useMaxVisibleDescender = !!i721[77]
  i720.m_pageToDisplay = i721[78]
  i720.m_margin = new pc.Vec4( i721[79], i721[80], i721[81], i721[82] )
  i720.m_isUsingLegacyAnimationComponent = !!i721[83]
  i720.m_isVolumetricText = !!i721[84]
  i720.m_Maskable = !!i721[85]
  request.r(i721[86], i721[87], 0, i720, 'm_Material')
  i720.m_Color = new pc.Color(i721[88], i721[89], i721[90], i721[91])
  i720.m_RaycastTarget = !!i721[92]
  i720.m_RaycastPadding = new pc.Vec4( i721[93], i721[94], i721[95], i721[96] )
  return i720
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i726 = root || request.c( 'TMPro.VertexGradient' )
  var i727 = data
  i726.topLeft = new pc.Color(i727[0], i727[1], i727[2], i727[3])
  i726.topRight = new pc.Color(i727[4], i727[5], i727[6], i727[7])
  i726.bottomLeft = new pc.Color(i727[8], i727[9], i727[10], i727[11])
  i726.bottomRight = new pc.Color(i727[12], i727[13], i727[14], i727[15])
  return i726
}

Deserializers["ScalePopLoop"] = function (request, data, root) {
  var i728 = root || request.c( 'ScalePopLoop' )
  var i729 = data
  i728.minScale = new pc.Vec3( i729[0], i729[1], i729[2] )
  i728.maxScale = new pc.Vec3( i729[3], i729[4], i729[5] )
  i728.duration = i729[6]
  i728.ease = i729[7]
  return i728
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i730 = root || request.c( 'UnityEngine.UI.Button' )
  var i731 = data
  i730.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i731[0], i730.m_OnClick)
  i730.m_Navigation = request.d('UnityEngine.UI.Navigation', i731[1], i730.m_Navigation)
  i730.m_Transition = i731[2]
  i730.m_Colors = request.d('UnityEngine.UI.ColorBlock', i731[3], i730.m_Colors)
  i730.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i731[4], i730.m_SpriteState)
  i730.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i731[5], i730.m_AnimationTriggers)
  i730.m_Interactable = !!i731[6]
  request.r(i731[7], i731[8], 0, i730, 'm_TargetGraphic')
  return i730
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i732 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i733 = data
  i732.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i733[0], i732.m_PersistentCalls)
  return i732
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i734 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i735 = data
  var i737 = i735[0]
  var i736 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i737.length; i += 1) {
    i736.add(request.d('UnityEngine.Events.PersistentCall', i737[i + 0]));
  }
  i734.m_Calls = i736
  return i734
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i740 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i741 = data
  request.r(i741[0], i741[1], 0, i740, 'm_Target')
  i740.m_TargetAssemblyTypeName = i741[2]
  i740.m_MethodName = i741[3]
  i740.m_Mode = i741[4]
  i740.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i741[5], i740.m_Arguments)
  i740.m_CallState = i741[6]
  return i740
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i742 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i743 = data
  i742.m_Mode = i743[0]
  i742.m_WrapAround = !!i743[1]
  request.r(i743[2], i743[3], 0, i742, 'm_SelectOnUp')
  request.r(i743[4], i743[5], 0, i742, 'm_SelectOnDown')
  request.r(i743[6], i743[7], 0, i742, 'm_SelectOnLeft')
  request.r(i743[8], i743[9], 0, i742, 'm_SelectOnRight')
  return i742
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i744 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i745 = data
  i744.m_NormalColor = new pc.Color(i745[0], i745[1], i745[2], i745[3])
  i744.m_HighlightedColor = new pc.Color(i745[4], i745[5], i745[6], i745[7])
  i744.m_PressedColor = new pc.Color(i745[8], i745[9], i745[10], i745[11])
  i744.m_SelectedColor = new pc.Color(i745[12], i745[13], i745[14], i745[15])
  i744.m_DisabledColor = new pc.Color(i745[16], i745[17], i745[18], i745[19])
  i744.m_ColorMultiplier = i745[20]
  i744.m_FadeDuration = i745[21]
  return i744
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i746 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i747 = data
  request.r(i747[0], i747[1], 0, i746, 'm_HighlightedSprite')
  request.r(i747[2], i747[3], 0, i746, 'm_PressedSprite')
  request.r(i747[4], i747[5], 0, i746, 'm_SelectedSprite')
  request.r(i747[6], i747[7], 0, i746, 'm_DisabledSprite')
  return i746
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i748 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i749 = data
  i748.m_NormalTrigger = i749[0]
  i748.m_HighlightedTrigger = i749[1]
  i748.m_PressedTrigger = i749[2]
  i748.m_SelectedTrigger = i749[3]
  i748.m_DisabledTrigger = i749[4]
  return i748
}

Deserializers["UIButtonPulse"] = function (request, data, root) {
  var i750 = root || request.c( 'UIButtonPulse' )
  var i751 = data
  i750.scaleUp = i751[0]
  i750.duration = i751[1]
  return i750
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i752 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i753 = data
  request.r(i753[0], i753[1], 0, i752, 'm_FirstSelected')
  i752.m_sendNavigationEvents = !!i753[2]
  i752.m_DragThreshold = i753[3]
  return i752
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i754 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i755 = data
  i754.m_HorizontalAxis = i755[0]
  i754.m_VerticalAxis = i755[1]
  i754.m_SubmitButton = i755[2]
  i754.m_CancelButton = i755[3]
  i754.m_InputActionsPerSecond = i755[4]
  i754.m_RepeatDelay = i755[5]
  i754.m_ForceModuleActive = !!i755[6]
  i754.m_SendPointerHoverToParent = !!i755[7]
  return i754
}

Deserializers["DiskTransform"] = function (request, data, root) {
  var i756 = root || request.c( 'DiskTransform' )
  var i757 = data
  return i756
}

Deserializers["EndCart_Lose"] = function (request, data, root) {
  var i758 = root || request.c( 'EndCart_Lose' )
  var i759 = data
  request.r(i759[0], i759[1], 0, i758, 'titleText')
  request.r(i759[2], i759[3], 0, i758, 'actionButton')
  request.r(i759[4], i759[5], 0, i758, 'emoji')
  i758.textFadeTime = i759[6]
  i758.buttonDelay = i759[7]
  i758.buttonScaleTime = i759[8]
  i758.emojiDelay = i759[9]
  i758.emojiFadeTime = i759[10]
  i758.emojiScaleTime = i759[11]
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i761 = data
  i760.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i761[0], i760.main)
  i760.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i761[1], i760.colorBySpeed)
  i760.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i761[2], i760.colorOverLifetime)
  i760.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i761[3], i760.emission)
  i760.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i761[4], i760.rotationBySpeed)
  i760.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i761[5], i760.rotationOverLifetime)
  i760.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i761[6], i760.shape)
  i760.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i761[7], i760.sizeBySpeed)
  i760.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i761[8], i760.sizeOverLifetime)
  i760.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i761[9], i760.textureSheetAnimation)
  i760.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i761[10], i760.velocityOverLifetime)
  i760.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i761[11], i760.noise)
  i760.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i761[12], i760.inheritVelocity)
  i760.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i761[13], i760.forceOverLifetime)
  i760.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i761[14], i760.limitVelocityOverLifetime)
  i760.useAutoRandomSeed = !!i761[15]
  i760.randomSeed = i761[16]
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i762 = root || new pc.ParticleSystemMain()
  var i763 = data
  i762.duration = i763[0]
  i762.loop = !!i763[1]
  i762.prewarm = !!i763[2]
  i762.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[3], i762.startDelay)
  i762.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[4], i762.startLifetime)
  i762.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[5], i762.startSpeed)
  i762.startSize3D = !!i763[6]
  i762.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[7], i762.startSizeX)
  i762.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[8], i762.startSizeY)
  i762.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[9], i762.startSizeZ)
  i762.startRotation3D = !!i763[10]
  i762.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[11], i762.startRotationX)
  i762.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[12], i762.startRotationY)
  i762.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[13], i762.startRotationZ)
  i762.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i763[14], i762.startColor)
  i762.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[15], i762.gravityModifier)
  i762.simulationSpace = i763[16]
  request.r(i763[17], i763[18], 0, i762, 'customSimulationSpace')
  i762.simulationSpeed = i763[19]
  i762.useUnscaledTime = !!i763[20]
  i762.scalingMode = i763[21]
  i762.playOnAwake = !!i763[22]
  i762.maxParticles = i763[23]
  i762.emitterVelocityMode = i763[24]
  i762.stopAction = i763[25]
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i764 = root || new pc.MinMaxCurve()
  var i765 = data
  i764.mode = i765[0]
  i764.curveMin = new pc.AnimationCurve( { keys_flow: i765[1] } )
  i764.curveMax = new pc.AnimationCurve( { keys_flow: i765[2] } )
  i764.curveMultiplier = i765[3]
  i764.constantMin = i765[4]
  i764.constantMax = i765[5]
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i766 = root || new pc.MinMaxGradient()
  var i767 = data
  i766.mode = i767[0]
  i766.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i767[1], i766.gradientMin)
  i766.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i767[2], i766.gradientMax)
  i766.colorMin = new pc.Color(i767[3], i767[4], i767[5], i767[6])
  i766.colorMax = new pc.Color(i767[7], i767[8], i767[9], i767[10])
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i769 = data
  i768.mode = i769[0]
  var i771 = i769[1]
  var i770 = []
  for(var i = 0; i < i771.length; i += 1) {
    i770.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i771[i + 0]) );
  }
  i768.colorKeys = i770
  var i773 = i769[2]
  var i772 = []
  for(var i = 0; i < i773.length; i += 1) {
    i772.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i773[i + 0]) );
  }
  i768.alphaKeys = i772
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i777 = data
  i776.color = new pc.Color(i777[0], i777[1], i777[2], i777[3])
  i776.time = i777[4]
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i781 = data
  i780.alpha = i781[0]
  i780.time = i781[1]
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i782 = root || new pc.ParticleSystemColorBySpeed()
  var i783 = data
  i782.enabled = !!i783[0]
  i782.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i783[1], i782.color)
  i782.range = new pc.Vec2( i783[2], i783[3] )
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i784 = root || new pc.ParticleSystemColorOverLifetime()
  var i785 = data
  i784.enabled = !!i785[0]
  i784.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i785[1], i784.color)
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i786 = root || new pc.ParticleSystemEmitter()
  var i787 = data
  i786.enabled = !!i787[0]
  i786.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i787[1], i786.rateOverTime)
  i786.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i787[2], i786.rateOverDistance)
  var i789 = i787[3]
  var i788 = []
  for(var i = 0; i < i789.length; i += 1) {
    i788.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i789[i + 0]) );
  }
  i786.bursts = i788
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i792 = root || new pc.ParticleSystemBurst()
  var i793 = data
  i792.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[0], i792.count)
  i792.cycleCount = i793[1]
  i792.minCount = i793[2]
  i792.maxCount = i793[3]
  i792.repeatInterval = i793[4]
  i792.time = i793[5]
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i794 = root || new pc.ParticleSystemRotationBySpeed()
  var i795 = data
  i794.enabled = !!i795[0]
  i794.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[1], i794.x)
  i794.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[2], i794.y)
  i794.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[3], i794.z)
  i794.separateAxes = !!i795[4]
  i794.range = new pc.Vec2( i795[5], i795[6] )
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i796 = root || new pc.ParticleSystemRotationOverLifetime()
  var i797 = data
  i796.enabled = !!i797[0]
  i796.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[1], i796.x)
  i796.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[2], i796.y)
  i796.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[3], i796.z)
  i796.separateAxes = !!i797[4]
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i798 = root || new pc.ParticleSystemShape()
  var i799 = data
  i798.enabled = !!i799[0]
  i798.shapeType = i799[1]
  i798.randomDirectionAmount = i799[2]
  i798.sphericalDirectionAmount = i799[3]
  i798.randomPositionAmount = i799[4]
  i798.alignToDirection = !!i799[5]
  i798.radius = i799[6]
  i798.radiusMode = i799[7]
  i798.radiusSpread = i799[8]
  i798.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i799[9], i798.radiusSpeed)
  i798.radiusThickness = i799[10]
  i798.angle = i799[11]
  i798.length = i799[12]
  i798.boxThickness = new pc.Vec3( i799[13], i799[14], i799[15] )
  i798.meshShapeType = i799[16]
  request.r(i799[17], i799[18], 0, i798, 'mesh')
  request.r(i799[19], i799[20], 0, i798, 'meshRenderer')
  request.r(i799[21], i799[22], 0, i798, 'skinnedMeshRenderer')
  i798.useMeshMaterialIndex = !!i799[23]
  i798.meshMaterialIndex = i799[24]
  i798.useMeshColors = !!i799[25]
  i798.normalOffset = i799[26]
  i798.arc = i799[27]
  i798.arcMode = i799[28]
  i798.arcSpread = i799[29]
  i798.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i799[30], i798.arcSpeed)
  i798.donutRadius = i799[31]
  i798.position = new pc.Vec3( i799[32], i799[33], i799[34] )
  i798.rotation = new pc.Vec3( i799[35], i799[36], i799[37] )
  i798.scale = new pc.Vec3( i799[38], i799[39], i799[40] )
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i800 = root || new pc.ParticleSystemSizeBySpeed()
  var i801 = data
  i800.enabled = !!i801[0]
  i800.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i801[1], i800.x)
  i800.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i801[2], i800.y)
  i800.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i801[3], i800.z)
  i800.separateAxes = !!i801[4]
  i800.range = new pc.Vec2( i801[5], i801[6] )
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i802 = root || new pc.ParticleSystemSizeOverLifetime()
  var i803 = data
  i802.enabled = !!i803[0]
  i802.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[1], i802.x)
  i802.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[2], i802.y)
  i802.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[3], i802.z)
  i802.separateAxes = !!i803[4]
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i804 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i805 = data
  i804.enabled = !!i805[0]
  i804.mode = i805[1]
  i804.animation = i805[2]
  i804.numTilesX = i805[3]
  i804.numTilesY = i805[4]
  i804.useRandomRow = !!i805[5]
  i804.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[6], i804.frameOverTime)
  i804.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[7], i804.startFrame)
  i804.cycleCount = i805[8]
  i804.rowIndex = i805[9]
  i804.flipU = i805[10]
  i804.flipV = i805[11]
  i804.spriteCount = i805[12]
  var i807 = i805[13]
  var i806 = []
  for(var i = 0; i < i807.length; i += 2) {
  request.r(i807[i + 0], i807[i + 1], 2, i806, '')
  }
  i804.sprites = i806
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i810 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i811 = data
  i810.enabled = !!i811[0]
  i810.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[1], i810.x)
  i810.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[2], i810.y)
  i810.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[3], i810.z)
  i810.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[4], i810.radial)
  i810.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[5], i810.speedModifier)
  i810.space = i811[6]
  i810.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[7], i810.orbitalX)
  i810.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[8], i810.orbitalY)
  i810.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[9], i810.orbitalZ)
  i810.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[10], i810.orbitalOffsetX)
  i810.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[11], i810.orbitalOffsetY)
  i810.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[12], i810.orbitalOffsetZ)
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i812 = root || new pc.ParticleSystemNoise()
  var i813 = data
  i812.enabled = !!i813[0]
  i812.separateAxes = !!i813[1]
  i812.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[2], i812.strengthX)
  i812.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[3], i812.strengthY)
  i812.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[4], i812.strengthZ)
  i812.frequency = i813[5]
  i812.damping = !!i813[6]
  i812.octaveCount = i813[7]
  i812.octaveMultiplier = i813[8]
  i812.octaveScale = i813[9]
  i812.quality = i813[10]
  i812.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[11], i812.scrollSpeed)
  i812.scrollSpeedMultiplier = i813[12]
  i812.remapEnabled = !!i813[13]
  i812.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[14], i812.remapX)
  i812.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[15], i812.remapY)
  i812.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[16], i812.remapZ)
  i812.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[17], i812.positionAmount)
  i812.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[18], i812.rotationAmount)
  i812.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[19], i812.sizeAmount)
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i814 = root || new pc.ParticleSystemInheritVelocity()
  var i815 = data
  i814.enabled = !!i815[0]
  i814.mode = i815[1]
  i814.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i815[2], i814.curve)
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i816 = root || new pc.ParticleSystemForceOverLifetime()
  var i817 = data
  i816.enabled = !!i817[0]
  i816.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[1], i816.x)
  i816.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[2], i816.y)
  i816.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[3], i816.z)
  i816.space = i817[4]
  i816.randomized = !!i817[5]
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i818 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i819 = data
  i818.enabled = !!i819[0]
  i818.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[1], i818.limit)
  i818.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[2], i818.limitX)
  i818.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[3], i818.limitY)
  i818.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[4], i818.limitZ)
  i818.dampen = i819[5]
  i818.separateAxes = !!i819[6]
  i818.space = i819[7]
  i818.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[8], i818.drag)
  i818.multiplyDragByParticleSize = !!i819[9]
  i818.multiplyDragByParticleVelocity = !!i819[10]
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i821 = data
  request.r(i821[0], i821[1], 0, i820, 'mesh')
  i820.meshCount = i821[2]
  i820.activeVertexStreamsCount = i821[3]
  i820.alignment = i821[4]
  i820.renderMode = i821[5]
  i820.sortMode = i821[6]
  i820.lengthScale = i821[7]
  i820.velocityScale = i821[8]
  i820.cameraVelocityScale = i821[9]
  i820.normalDirection = i821[10]
  i820.sortingFudge = i821[11]
  i820.minParticleSize = i821[12]
  i820.maxParticleSize = i821[13]
  i820.pivot = new pc.Vec3( i821[14], i821[15], i821[16] )
  request.r(i821[17], i821[18], 0, i820, 'trailMaterial')
  i820.applyActiveColorSpace = !!i821[19]
  i820.enabled = !!i821[20]
  request.r(i821[21], i821[22], 0, i820, 'sharedMaterial')
  var i823 = i821[23]
  var i822 = []
  for(var i = 0; i < i823.length; i += 2) {
  request.r(i823[i + 0], i823[i + 1], 2, i822, '')
  }
  i820.sharedMaterials = i822
  i820.receiveShadows = !!i821[24]
  i820.shadowCastingMode = i821[25]
  i820.sortingLayerID = i821[26]
  i820.sortingOrder = i821[27]
  i820.lightmapIndex = i821[28]
  i820.lightmapSceneIndex = i821[29]
  i820.lightmapScaleOffset = new pc.Vec4( i821[30], i821[31], i821[32], i821[33] )
  i820.lightProbeUsage = i821[34]
  i820.reflectionProbeUsage = i821[35]
  return i820
}

Deserializers["Button"] = function (request, data, root) {
  var i824 = root || request.c( 'Button' )
  var i825 = data
  return i824
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i826 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i827 = data
  request.r(i827[0], i827[1], 0, i826, 'm_ObjectArgument')
  i826.m_ObjectArgumentAssemblyTypeName = i827[2]
  i826.m_IntArgument = i827[3]
  i826.m_FloatArgument = i827[4]
  i826.m_StringArgument = i827[5]
  i826.m_BoolArgument = !!i827[6]
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i829 = data
  i828.ambientIntensity = i829[0]
  i828.reflectionIntensity = i829[1]
  i828.ambientMode = i829[2]
  i828.ambientLight = new pc.Color(i829[3], i829[4], i829[5], i829[6])
  i828.ambientSkyColor = new pc.Color(i829[7], i829[8], i829[9], i829[10])
  i828.ambientGroundColor = new pc.Color(i829[11], i829[12], i829[13], i829[14])
  i828.ambientEquatorColor = new pc.Color(i829[15], i829[16], i829[17], i829[18])
  i828.fogColor = new pc.Color(i829[19], i829[20], i829[21], i829[22])
  i828.fogEndDistance = i829[23]
  i828.fogStartDistance = i829[24]
  i828.fogDensity = i829[25]
  i828.fog = !!i829[26]
  request.r(i829[27], i829[28], 0, i828, 'skybox')
  i828.fogMode = i829[29]
  var i831 = i829[30]
  var i830 = []
  for(var i = 0; i < i831.length; i += 1) {
    i830.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i831[i + 0]) );
  }
  i828.lightmaps = i830
  i828.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i829[31], i828.lightProbes)
  i828.lightmapsMode = i829[32]
  i828.mixedBakeMode = i829[33]
  i828.environmentLightingMode = i829[34]
  i828.ambientProbe = new pc.SphericalHarmonicsL2(i829[35])
  i828.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i829[36])
  i828.useReferenceAmbientProbe = !!i829[37]
  request.r(i829[38], i829[39], 0, i828, 'customReflection')
  request.r(i829[40], i829[41], 0, i828, 'defaultReflection')
  i828.defaultReflectionMode = i829[42]
  i828.defaultReflectionResolution = i829[43]
  i828.sunLightObjectId = i829[44]
  i828.pixelLightCount = i829[45]
  i828.defaultReflectionHDR = !!i829[46]
  i828.hasLightDataAsset = !!i829[47]
  i828.hasManualGenerate = !!i829[48]
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i835 = data
  request.r(i835[0], i835[1], 0, i834, 'lightmapColor')
  request.r(i835[2], i835[3], 0, i834, 'lightmapDirection')
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i836 = root || new UnityEngine.LightProbes()
  var i837 = data
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i845 = data
  var i847 = i845[0]
  var i846 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i847.length; i += 1) {
    i846.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i847[i + 0]));
  }
  i844.ShaderCompilationErrors = i846
  i844.name = i845[1]
  i844.guid = i845[2]
  var i849 = i845[3]
  var i848 = []
  for(var i = 0; i < i849.length; i += 1) {
    i848.push( i849[i + 0] );
  }
  i844.shaderDefinedKeywords = i848
  var i851 = i845[4]
  var i850 = []
  for(var i = 0; i < i851.length; i += 1) {
    i850.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i851[i + 0]) );
  }
  i844.passes = i850
  var i853 = i845[5]
  var i852 = []
  for(var i = 0; i < i853.length; i += 1) {
    i852.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i853[i + 0]) );
  }
  i844.usePasses = i852
  var i855 = i845[6]
  var i854 = []
  for(var i = 0; i < i855.length; i += 1) {
    i854.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i855[i + 0]) );
  }
  i844.defaultParameterValues = i854
  request.r(i845[7], i845[8], 0, i844, 'unityFallbackShader')
  i844.readDepth = !!i845[9]
  i844.isCreatedByShaderGraph = !!i845[10]
  i844.disableBatching = !!i845[11]
  i844.compiled = !!i845[12]
  return i844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i859 = data
  i858.shaderName = i859[0]
  i858.errorMessage = i859[1]
  return i858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i864 = root || new pc.UnityShaderPass()
  var i865 = data
  i864.id = i865[0]
  i864.subShaderIndex = i865[1]
  i864.name = i865[2]
  i864.passType = i865[3]
  i864.grabPassTextureName = i865[4]
  i864.usePass = !!i865[5]
  i864.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i865[6], i864.zTest)
  i864.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i865[7], i864.zWrite)
  i864.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i865[8], i864.culling)
  i864.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i865[9], i864.blending)
  i864.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i865[10], i864.alphaBlending)
  i864.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i865[11], i864.colorWriteMask)
  i864.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i865[12], i864.offsetUnits)
  i864.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i865[13], i864.offsetFactor)
  i864.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i865[14], i864.stencilRef)
  i864.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i865[15], i864.stencilReadMask)
  i864.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i865[16], i864.stencilWriteMask)
  i864.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i865[17], i864.stencilOp)
  i864.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i865[18], i864.stencilOpFront)
  i864.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i865[19], i864.stencilOpBack)
  var i867 = i865[20]
  var i866 = []
  for(var i = 0; i < i867.length; i += 1) {
    i866.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i867[i + 0]) );
  }
  i864.tags = i866
  var i869 = i865[21]
  var i868 = []
  for(var i = 0; i < i869.length; i += 1) {
    i868.push( i869[i + 0] );
  }
  i864.passDefinedKeywords = i868
  var i871 = i865[22]
  var i870 = []
  for(var i = 0; i < i871.length; i += 1) {
    i870.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i871[i + 0]) );
  }
  i864.passDefinedKeywordGroups = i870
  var i873 = i865[23]
  var i872 = []
  for(var i = 0; i < i873.length; i += 1) {
    i872.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i873[i + 0]) );
  }
  i864.variants = i872
  var i875 = i865[24]
  var i874 = []
  for(var i = 0; i < i875.length; i += 1) {
    i874.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i875[i + 0]) );
  }
  i864.excludedVariants = i874
  i864.hasDepthReader = !!i865[25]
  return i864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i877 = data
  i876.val = i877[0]
  i876.name = i877[1]
  return i876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i879 = data
  i878.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i879[0], i878.src)
  i878.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i879[1], i878.dst)
  i878.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i879[2], i878.op)
  return i878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i881 = data
  i880.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i881[0], i880.pass)
  i880.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i881[1], i880.fail)
  i880.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i881[2], i880.zFail)
  i880.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i881[3], i880.comp)
  return i880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i885 = data
  i884.name = i885[0]
  i884.value = i885[1]
  return i884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i889 = data
  var i891 = i889[0]
  var i890 = []
  for(var i = 0; i < i891.length; i += 1) {
    i890.push( i891[i + 0] );
  }
  i888.keywords = i890
  i888.hasDiscard = !!i889[1]
  return i888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i895 = data
  i894.passId = i895[0]
  i894.subShaderIndex = i895[1]
  var i897 = i895[2]
  var i896 = []
  for(var i = 0; i < i897.length; i += 1) {
    i896.push( i897[i + 0] );
  }
  i894.keywords = i896
  i894.vertexProgram = i895[3]
  i894.fragmentProgram = i895[4]
  i894.exportedForWebGl2 = !!i895[5]
  i894.readDepth = !!i895[6]
  return i894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i901 = data
  request.r(i901[0], i901[1], 0, i900, 'shader')
  i900.pass = i901[2]
  return i900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i905 = data
  i904.name = i905[0]
  i904.type = i905[1]
  i904.value = new pc.Vec4( i905[2], i905[3], i905[4], i905[5] )
  i904.textureValue = i905[6]
  i904.shaderPropertyFlag = i905[7]
  return i904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i907 = data
  i906.name = i907[0]
  request.r(i907[1], i907[2], 0, i906, 'texture')
  i906.aabb = i907[3]
  i906.vertices = i907[4]
  i906.triangles = i907[5]
  i906.textureRect = UnityEngine.Rect.MinMaxRect(i907[6], i907[7], i907[8], i907[9])
  i906.packedRect = UnityEngine.Rect.MinMaxRect(i907[10], i907[11], i907[12], i907[13])
  i906.border = new pc.Vec4( i907[14], i907[15], i907[16], i907[17] )
  i906.transparency = i907[18]
  i906.bounds = i907[19]
  i906.pixelsPerUnit = i907[20]
  i906.textureWidth = i907[21]
  i906.textureHeight = i907[22]
  i906.nativeSize = new pc.Vec2( i907[23], i907[24] )
  i906.pivot = new pc.Vec2( i907[25], i907[26] )
  i906.textureRectOffset = new pc.Vec2( i907[27], i907[28] )
  return i906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i909 = data
  i908.name = i909[0]
  return i908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i911 = data
  i910.name = i911[0]
  i910.wrapMode = i911[1]
  i910.isLooping = !!i911[2]
  i910.length = i911[3]
  var i913 = i911[4]
  var i912 = []
  for(var i = 0; i < i913.length; i += 1) {
    i912.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i913[i + 0]) );
  }
  i910.curves = i912
  var i915 = i911[5]
  var i914 = []
  for(var i = 0; i < i915.length; i += 1) {
    i914.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i915[i + 0]) );
  }
  i910.events = i914
  i910.halfPrecision = !!i911[6]
  i910._frameRate = i911[7]
  i910.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i911[8], i910.localBounds)
  i910.hasMuscleCurves = !!i911[9]
  var i917 = i911[10]
  var i916 = []
  for(var i = 0; i < i917.length; i += 1) {
    i916.push( i917[i + 0] );
  }
  i910.clipMuscleConstant = i916
  i910.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i911[11], i910.clipBindingConstant)
  return i910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i921 = data
  i920.path = i921[0]
  i920.hash = i921[1]
  i920.componentType = i921[2]
  i920.property = i921[3]
  i920.keys = i921[4]
  var i923 = i921[5]
  var i922 = []
  for(var i = 0; i < i923.length; i += 1) {
    i922.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i923[i + 0]) );
  }
  i920.objectReferenceKeys = i922
  return i920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i927 = data
  i926.time = i927[0]
  request.r(i927[1], i927[2], 0, i926, 'value')
  return i926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i931 = data
  i930.functionName = i931[0]
  i930.floatParameter = i931[1]
  i930.intParameter = i931[2]
  i930.stringParameter = i931[3]
  request.r(i931[4], i931[5], 0, i930, 'objectReferenceParameter')
  i930.time = i931[6]
  return i930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i933 = data
  i932.center = new pc.Vec3( i933[0], i933[1], i933[2] )
  i932.extends = new pc.Vec3( i933[3], i933[4], i933[5] )
  return i932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i937 = data
  var i939 = i937[0]
  var i938 = []
  for(var i = 0; i < i939.length; i += 1) {
    i938.push( i939[i + 0] );
  }
  i936.genericBindings = i938
  var i941 = i937[1]
  var i940 = []
  for(var i = 0; i < i941.length; i += 1) {
    i940.push( i941[i + 0] );
  }
  i936.pptrCurveMapping = i940
  return i936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i943 = data
  i942.name = i943[0]
  i942.ascent = i943[1]
  i942.originalLineHeight = i943[2]
  i942.fontSize = i943[3]
  var i945 = i943[4]
  var i944 = []
  for(var i = 0; i < i945.length; i += 1) {
    i944.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i945[i + 0]) );
  }
  i942.characterInfo = i944
  request.r(i943[5], i943[6], 0, i942, 'texture')
  i942.originalFontSize = i943[7]
  return i942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i949 = data
  i948.index = i949[0]
  i948.advance = i949[1]
  i948.bearing = i949[2]
  i948.glyphWidth = i949[3]
  i948.glyphHeight = i949[4]
  i948.minX = i949[5]
  i948.maxX = i949[6]
  i948.minY = i949[7]
  i948.maxY = i949[8]
  i948.uvBottomLeftX = i949[9]
  i948.uvBottomLeftY = i949[10]
  i948.uvBottomRightX = i949[11]
  i948.uvBottomRightY = i949[12]
  i948.uvTopLeftX = i949[13]
  i948.uvTopLeftY = i949[14]
  i948.uvTopRightX = i949[15]
  i948.uvTopRightY = i949[16]
  return i948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i951 = data
  i950.name = i951[0]
  var i953 = i951[1]
  var i952 = []
  for(var i = 0; i < i953.length; i += 1) {
    i952.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i953[i + 0]) );
  }
  i950.layers = i952
  var i955 = i951[2]
  var i954 = []
  for(var i = 0; i < i955.length; i += 1) {
    i954.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i955[i + 0]) );
  }
  i950.parameters = i954
  i950.animationClips = i951[3]
  i950.avatarUnsupported = i951[4]
  return i950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i959 = data
  i958.name = i959[0]
  i958.defaultWeight = i959[1]
  i958.blendingMode = i959[2]
  i958.avatarMask = i959[3]
  i958.syncedLayerIndex = i959[4]
  i958.syncedLayerAffectsTiming = !!i959[5]
  i958.syncedLayers = i959[6]
  i958.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i959[7], i958.stateMachine)
  return i958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i961 = data
  i960.id = i961[0]
  i960.name = i961[1]
  i960.path = i961[2]
  var i963 = i961[3]
  var i962 = []
  for(var i = 0; i < i963.length; i += 1) {
    i962.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i963[i + 0]) );
  }
  i960.states = i962
  var i965 = i961[4]
  var i964 = []
  for(var i = 0; i < i965.length; i += 1) {
    i964.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i965[i + 0]) );
  }
  i960.machines = i964
  var i967 = i961[5]
  var i966 = []
  for(var i = 0; i < i967.length; i += 1) {
    i966.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i967[i + 0]) );
  }
  i960.entryStateTransitions = i966
  var i969 = i961[6]
  var i968 = []
  for(var i = 0; i < i969.length; i += 1) {
    i968.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i969[i + 0]) );
  }
  i960.exitStateTransitions = i968
  var i971 = i961[7]
  var i970 = []
  for(var i = 0; i < i971.length; i += 1) {
    i970.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i971[i + 0]) );
  }
  i960.anyStateTransitions = i970
  i960.defaultStateId = i961[8]
  return i960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i975 = data
  i974.id = i975[0]
  i974.name = i975[1]
  i974.cycleOffset = i975[2]
  i974.cycleOffsetParameter = i975[3]
  i974.cycleOffsetParameterActive = !!i975[4]
  i974.mirror = !!i975[5]
  i974.mirrorParameter = i975[6]
  i974.mirrorParameterActive = !!i975[7]
  i974.motionId = i975[8]
  i974.nameHash = i975[9]
  i974.fullPathHash = i975[10]
  i974.speed = i975[11]
  i974.speedParameter = i975[12]
  i974.speedParameterActive = !!i975[13]
  i974.tag = i975[14]
  i974.tagHash = i975[15]
  i974.writeDefaultValues = !!i975[16]
  var i977 = i975[17]
  var i976 = []
  for(var i = 0; i < i977.length; i += 2) {
  request.r(i977[i + 0], i977[i + 1], 2, i976, '')
  }
  i974.behaviours = i976
  var i979 = i975[18]
  var i978 = []
  for(var i = 0; i < i979.length; i += 1) {
    i978.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i979[i + 0]) );
  }
  i974.transitions = i978
  return i974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i985 = data
  i984.fullPath = i985[0]
  i984.canTransitionToSelf = !!i985[1]
  i984.duration = i985[2]
  i984.exitTime = i985[3]
  i984.hasExitTime = !!i985[4]
  i984.hasFixedDuration = !!i985[5]
  i984.interruptionSource = i985[6]
  i984.offset = i985[7]
  i984.orderedInterruption = !!i985[8]
  i984.destinationStateId = i985[9]
  i984.isExit = !!i985[10]
  i984.mute = !!i985[11]
  i984.solo = !!i985[12]
  var i987 = i985[13]
  var i986 = []
  for(var i = 0; i < i987.length; i += 1) {
    i986.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i987[i + 0]) );
  }
  i984.conditions = i986
  return i984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i993 = data
  i992.destinationStateId = i993[0]
  i992.isExit = !!i993[1]
  i992.mute = !!i993[2]
  i992.solo = !!i993[3]
  var i995 = i993[4]
  var i994 = []
  for(var i = 0; i < i995.length; i += 1) {
    i994.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i995[i + 0]) );
  }
  i992.conditions = i994
  return i992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i999 = data
  i998.defaultBool = !!i999[0]
  i998.defaultFloat = i999[1]
  i998.defaultInt = i999[2]
  i998.name = i999[3]
  i998.nameHash = i999[4]
  i998.type = i999[5]
  return i998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1001 = data
  i1000.name = i1001[0]
  i1000.bytes64 = i1001[1]
  i1000.data = i1001[2]
  return i1000
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1002 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1003 = data
  request.r(i1003[0], i1003[1], 0, i1002, 'atlas')
  i1002.normalStyle = i1003[2]
  i1002.normalSpacingOffset = i1003[3]
  i1002.boldStyle = i1003[4]
  i1002.boldSpacing = i1003[5]
  i1002.italicStyle = i1003[6]
  i1002.tabSize = i1003[7]
  i1002.hashCode = i1003[8]
  request.r(i1003[9], i1003[10], 0, i1002, 'material')
  i1002.materialHashCode = i1003[11]
  i1002.m_Version = i1003[12]
  i1002.m_SourceFontFileGUID = i1003[13]
  request.r(i1003[14], i1003[15], 0, i1002, 'm_SourceFontFile_EditorRef')
  request.r(i1003[16], i1003[17], 0, i1002, 'm_SourceFontFile')
  i1002.m_AtlasPopulationMode = i1003[18]
  i1002.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1003[19], i1002.m_FaceInfo)
  var i1005 = i1003[20]
  var i1004 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1005.length; i += 1) {
    i1004.add(request.d('UnityEngine.TextCore.Glyph', i1005[i + 0]));
  }
  i1002.m_GlyphTable = i1004
  var i1007 = i1003[21]
  var i1006 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1007.length; i += 1) {
    i1006.add(request.d('TMPro.TMP_Character', i1007[i + 0]));
  }
  i1002.m_CharacterTable = i1006
  var i1009 = i1003[22]
  var i1008 = []
  for(var i = 0; i < i1009.length; i += 2) {
  request.r(i1009[i + 0], i1009[i + 1], 2, i1008, '')
  }
  i1002.m_AtlasTextures = i1008
  i1002.m_AtlasTextureIndex = i1003[23]
  i1002.m_IsMultiAtlasTexturesEnabled = !!i1003[24]
  i1002.m_ClearDynamicDataOnBuild = !!i1003[25]
  var i1011 = i1003[26]
  var i1010 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1011.length; i += 1) {
    i1010.add(request.d('UnityEngine.TextCore.GlyphRect', i1011[i + 0]));
  }
  i1002.m_UsedGlyphRects = i1010
  var i1013 = i1003[27]
  var i1012 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1013.length; i += 1) {
    i1012.add(request.d('UnityEngine.TextCore.GlyphRect', i1013[i + 0]));
  }
  i1002.m_FreeGlyphRects = i1012
  i1002.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1003[28], i1002.m_fontInfo)
  i1002.m_AtlasWidth = i1003[29]
  i1002.m_AtlasHeight = i1003[30]
  i1002.m_AtlasPadding = i1003[31]
  i1002.m_AtlasRenderMode = i1003[32]
  var i1015 = i1003[33]
  var i1014 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1015.length; i += 1) {
    i1014.add(request.d('TMPro.TMP_Glyph', i1015[i + 0]));
  }
  i1002.m_glyphInfoList = i1014
  i1002.m_KerningTable = request.d('TMPro.KerningTable', i1003[34], i1002.m_KerningTable)
  i1002.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1003[35], i1002.m_FontFeatureTable)
  var i1017 = i1003[36]
  var i1016 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1017.length; i += 2) {
  request.r(i1017[i + 0], i1017[i + 1], 1, i1016, '')
  }
  i1002.fallbackFontAssets = i1016
  var i1019 = i1003[37]
  var i1018 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1019.length; i += 2) {
  request.r(i1019[i + 0], i1019[i + 1], 1, i1018, '')
  }
  i1002.m_FallbackFontAssetTable = i1018
  i1002.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1003[38], i1002.m_CreationSettings)
  var i1021 = i1003[39]
  var i1020 = []
  for(var i = 0; i < i1021.length; i += 1) {
    i1020.push( request.d('TMPro.TMP_FontWeightPair', i1021[i + 0]) );
  }
  i1002.m_FontWeightTable = i1020
  var i1023 = i1003[40]
  var i1022 = []
  for(var i = 0; i < i1023.length; i += 1) {
    i1022.push( request.d('TMPro.TMP_FontWeightPair', i1023[i + 0]) );
  }
  i1002.fontWeights = i1022
  return i1002
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1024 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1025 = data
  i1024.m_FaceIndex = i1025[0]
  i1024.m_FamilyName = i1025[1]
  i1024.m_StyleName = i1025[2]
  i1024.m_PointSize = i1025[3]
  i1024.m_Scale = i1025[4]
  i1024.m_UnitsPerEM = i1025[5]
  i1024.m_LineHeight = i1025[6]
  i1024.m_AscentLine = i1025[7]
  i1024.m_CapLine = i1025[8]
  i1024.m_MeanLine = i1025[9]
  i1024.m_Baseline = i1025[10]
  i1024.m_DescentLine = i1025[11]
  i1024.m_SuperscriptOffset = i1025[12]
  i1024.m_SuperscriptSize = i1025[13]
  i1024.m_SubscriptOffset = i1025[14]
  i1024.m_SubscriptSize = i1025[15]
  i1024.m_UnderlineOffset = i1025[16]
  i1024.m_UnderlineThickness = i1025[17]
  i1024.m_StrikethroughOffset = i1025[18]
  i1024.m_StrikethroughThickness = i1025[19]
  i1024.m_TabWidth = i1025[20]
  return i1024
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1028 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1029 = data
  i1028.m_Index = i1029[0]
  i1028.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1029[1], i1028.m_Metrics)
  i1028.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1029[2], i1028.m_GlyphRect)
  i1028.m_Scale = i1029[3]
  i1028.m_AtlasIndex = i1029[4]
  i1028.m_ClassDefinitionType = i1029[5]
  return i1028
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1030 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1031 = data
  i1030.m_Width = i1031[0]
  i1030.m_Height = i1031[1]
  i1030.m_HorizontalBearingX = i1031[2]
  i1030.m_HorizontalBearingY = i1031[3]
  i1030.m_HorizontalAdvance = i1031[4]
  return i1030
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1032 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1033 = data
  i1032.m_X = i1033[0]
  i1032.m_Y = i1033[1]
  i1032.m_Width = i1033[2]
  i1032.m_Height = i1033[3]
  return i1032
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1036 = root || request.c( 'TMPro.TMP_Character' )
  var i1037 = data
  i1036.m_ElementType = i1037[0]
  i1036.m_Unicode = i1037[1]
  i1036.m_GlyphIndex = i1037[2]
  i1036.m_Scale = i1037[3]
  return i1036
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1042 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1043 = data
  i1042.Name = i1043[0]
  i1042.PointSize = i1043[1]
  i1042.Scale = i1043[2]
  i1042.CharacterCount = i1043[3]
  i1042.LineHeight = i1043[4]
  i1042.Baseline = i1043[5]
  i1042.Ascender = i1043[6]
  i1042.CapHeight = i1043[7]
  i1042.Descender = i1043[8]
  i1042.CenterLine = i1043[9]
  i1042.SuperscriptOffset = i1043[10]
  i1042.SubscriptOffset = i1043[11]
  i1042.SubSize = i1043[12]
  i1042.Underline = i1043[13]
  i1042.UnderlineThickness = i1043[14]
  i1042.strikethrough = i1043[15]
  i1042.strikethroughThickness = i1043[16]
  i1042.TabWidth = i1043[17]
  i1042.Padding = i1043[18]
  i1042.AtlasWidth = i1043[19]
  i1042.AtlasHeight = i1043[20]
  return i1042
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1046 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1047 = data
  i1046.id = i1047[0]
  i1046.x = i1047[1]
  i1046.y = i1047[2]
  i1046.width = i1047[3]
  i1046.height = i1047[4]
  i1046.xOffset = i1047[5]
  i1046.yOffset = i1047[6]
  i1046.xAdvance = i1047[7]
  i1046.scale = i1047[8]
  return i1046
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1048 = root || request.c( 'TMPro.KerningTable' )
  var i1049 = data
  var i1051 = i1049[0]
  var i1050 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1051.length; i += 1) {
    i1050.add(request.d('TMPro.KerningPair', i1051[i + 0]));
  }
  i1048.kerningPairs = i1050
  return i1048
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1054 = root || request.c( 'TMPro.KerningPair' )
  var i1055 = data
  i1054.xOffset = i1055[0]
  i1054.m_FirstGlyph = i1055[1]
  i1054.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1055[2], i1054.m_FirstGlyphAdjustments)
  i1054.m_SecondGlyph = i1055[3]
  i1054.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1055[4], i1054.m_SecondGlyphAdjustments)
  i1054.m_IgnoreSpacingAdjustments = !!i1055[5]
  return i1054
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1056 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1057 = data
  var i1059 = i1057[0]
  var i1058 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1059.length; i += 1) {
    i1058.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1059[i + 0]));
  }
  i1056.m_GlyphPairAdjustmentRecords = i1058
  return i1056
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1062 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1063 = data
  i1062.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1063[0], i1062.m_FirstAdjustmentRecord)
  i1062.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1063[1], i1062.m_SecondAdjustmentRecord)
  i1062.m_FeatureLookupFlags = i1063[2]
  return i1062
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1066 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1067 = data
  i1066.sourceFontFileName = i1067[0]
  i1066.sourceFontFileGUID = i1067[1]
  i1066.pointSizeSamplingMode = i1067[2]
  i1066.pointSize = i1067[3]
  i1066.padding = i1067[4]
  i1066.packingMode = i1067[5]
  i1066.atlasWidth = i1067[6]
  i1066.atlasHeight = i1067[7]
  i1066.characterSetSelectionMode = i1067[8]
  i1066.characterSequence = i1067[9]
  i1066.referencedFontAssetGUID = i1067[10]
  i1066.referencedTextAssetGUID = i1067[11]
  i1066.fontStyle = i1067[12]
  i1066.fontStyleModifier = i1067[13]
  i1066.renderMode = i1067[14]
  i1066.includeFontFeatures = !!i1067[15]
  return i1066
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1070 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1071 = data
  request.r(i1071[0], i1071[1], 0, i1070, 'regularTypeface')
  request.r(i1071[2], i1071[3], 0, i1070, 'italicTypeface')
  return i1070
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1072 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1073 = data
  i1072.useSafeMode = !!i1073[0]
  i1072.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1073[1], i1072.safeModeOptions)
  i1072.timeScale = i1073[2]
  i1072.unscaledTimeScale = i1073[3]
  i1072.useSmoothDeltaTime = !!i1073[4]
  i1072.maxSmoothUnscaledTime = i1073[5]
  i1072.rewindCallbackMode = i1073[6]
  i1072.showUnityEditorReport = !!i1073[7]
  i1072.logBehaviour = i1073[8]
  i1072.drawGizmos = !!i1073[9]
  i1072.defaultRecyclable = !!i1073[10]
  i1072.defaultAutoPlay = i1073[11]
  i1072.defaultUpdateType = i1073[12]
  i1072.defaultTimeScaleIndependent = !!i1073[13]
  i1072.defaultEaseType = i1073[14]
  i1072.defaultEaseOvershootOrAmplitude = i1073[15]
  i1072.defaultEasePeriod = i1073[16]
  i1072.defaultAutoKill = !!i1073[17]
  i1072.defaultLoopType = i1073[18]
  i1072.debugMode = !!i1073[19]
  i1072.debugStoreTargetId = !!i1073[20]
  i1072.showPreviewPanel = !!i1073[21]
  i1072.storeSettingsLocation = i1073[22]
  i1072.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1073[23], i1072.modules)
  i1072.createASMDEF = !!i1073[24]
  i1072.showPlayingTweens = !!i1073[25]
  i1072.showPausedTweens = !!i1073[26]
  return i1072
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1074 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1075 = data
  i1074.logBehaviour = i1075[0]
  i1074.nestedTweenFailureBehaviour = i1075[1]
  return i1074
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1076 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1077 = data
  i1076.showPanel = !!i1077[0]
  i1076.audioEnabled = !!i1077[1]
  i1076.physicsEnabled = !!i1077[2]
  i1076.physics2DEnabled = !!i1077[3]
  i1076.spriteEnabled = !!i1077[4]
  i1076.uiEnabled = !!i1077[5]
  i1076.textMeshProEnabled = !!i1077[6]
  i1076.tk2DEnabled = !!i1077[7]
  i1076.deAudioEnabled = !!i1077[8]
  i1076.deUnityExtendedEnabled = !!i1077[9]
  i1076.epoOutlineEnabled = !!i1077[10]
  return i1076
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1078 = root || request.c( 'TMPro.TMP_Settings' )
  var i1079 = data
  i1078.m_enableWordWrapping = !!i1079[0]
  i1078.m_enableKerning = !!i1079[1]
  i1078.m_enableExtraPadding = !!i1079[2]
  i1078.m_enableTintAllSprites = !!i1079[3]
  i1078.m_enableParseEscapeCharacters = !!i1079[4]
  i1078.m_EnableRaycastTarget = !!i1079[5]
  i1078.m_GetFontFeaturesAtRuntime = !!i1079[6]
  i1078.m_missingGlyphCharacter = i1079[7]
  i1078.m_warningsDisabled = !!i1079[8]
  request.r(i1079[9], i1079[10], 0, i1078, 'm_defaultFontAsset')
  i1078.m_defaultFontAssetPath = i1079[11]
  i1078.m_defaultFontSize = i1079[12]
  i1078.m_defaultAutoSizeMinRatio = i1079[13]
  i1078.m_defaultAutoSizeMaxRatio = i1079[14]
  i1078.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1079[15], i1079[16] )
  i1078.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1079[17], i1079[18] )
  i1078.m_autoSizeTextContainer = !!i1079[19]
  i1078.m_IsTextObjectScaleStatic = !!i1079[20]
  var i1081 = i1079[21]
  var i1080 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1081.length; i += 2) {
  request.r(i1081[i + 0], i1081[i + 1], 1, i1080, '')
  }
  i1078.m_fallbackFontAssets = i1080
  i1078.m_matchMaterialPreset = !!i1079[22]
  request.r(i1079[23], i1079[24], 0, i1078, 'm_defaultSpriteAsset')
  i1078.m_defaultSpriteAssetPath = i1079[25]
  i1078.m_enableEmojiSupport = !!i1079[26]
  i1078.m_MissingCharacterSpriteUnicode = i1079[27]
  i1078.m_defaultColorGradientPresetsPath = i1079[28]
  request.r(i1079[29], i1079[30], 0, i1078, 'm_defaultStyleSheet')
  i1078.m_StyleSheetsResourcePath = i1079[31]
  request.r(i1079[32], i1079[33], 0, i1078, 'm_leadingCharacters')
  request.r(i1079[34], i1079[35], 0, i1078, 'm_followingCharacters')
  i1078.m_UseModernHangulLineBreakingRules = !!i1079[36]
  return i1078
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1082 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1083 = data
  i1082.m_GlyphIndex = i1083[0]
  i1082.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1083[1], i1082.m_GlyphValueRecord)
  return i1082
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1084 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1085 = data
  i1084.m_XPlacement = i1085[0]
  i1084.m_YPlacement = i1085[1]
  i1084.m_XAdvance = i1085[2]
  i1084.m_YAdvance = i1085[3]
  return i1084
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1086 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1087 = data
  request.r(i1087[0], i1087[1], 0, i1086, 'spriteSheet')
  var i1089 = i1087[2]
  var i1088 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1089.length; i += 1) {
    i1088.add(request.d('TMPro.TMP_Sprite', i1089[i + 0]));
  }
  i1086.spriteInfoList = i1088
  var i1091 = i1087[3]
  var i1090 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1091.length; i += 2) {
  request.r(i1091[i + 0], i1091[i + 1], 1, i1090, '')
  }
  i1086.fallbackSpriteAssets = i1090
  i1086.hashCode = i1087[4]
  request.r(i1087[5], i1087[6], 0, i1086, 'material')
  i1086.materialHashCode = i1087[7]
  i1086.m_Version = i1087[8]
  i1086.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1087[9], i1086.m_FaceInfo)
  var i1093 = i1087[10]
  var i1092 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1093.length; i += 1) {
    i1092.add(request.d('TMPro.TMP_SpriteCharacter', i1093[i + 0]));
  }
  i1086.m_SpriteCharacterTable = i1092
  var i1095 = i1087[11]
  var i1094 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1095.length; i += 1) {
    i1094.add(request.d('TMPro.TMP_SpriteGlyph', i1095[i + 0]));
  }
  i1086.m_SpriteGlyphTable = i1094
  return i1086
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1098 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1099 = data
  i1098.name = i1099[0]
  i1098.hashCode = i1099[1]
  i1098.unicode = i1099[2]
  i1098.pivot = new pc.Vec2( i1099[3], i1099[4] )
  request.r(i1099[5], i1099[6], 0, i1098, 'sprite')
  i1098.id = i1099[7]
  i1098.x = i1099[8]
  i1098.y = i1099[9]
  i1098.width = i1099[10]
  i1098.height = i1099[11]
  i1098.xOffset = i1099[12]
  i1098.yOffset = i1099[13]
  i1098.xAdvance = i1099[14]
  i1098.scale = i1099[15]
  return i1098
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1104 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1105 = data
  i1104.m_Name = i1105[0]
  i1104.m_HashCode = i1105[1]
  i1104.m_ElementType = i1105[2]
  i1104.m_Unicode = i1105[3]
  i1104.m_GlyphIndex = i1105[4]
  i1104.m_Scale = i1105[5]
  return i1104
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1108 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1109 = data
  request.r(i1109[0], i1109[1], 0, i1108, 'sprite')
  i1108.m_Index = i1109[2]
  i1108.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1109[3], i1108.m_Metrics)
  i1108.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1109[4], i1108.m_GlyphRect)
  i1108.m_Scale = i1109[5]
  i1108.m_AtlasIndex = i1109[6]
  i1108.m_ClassDefinitionType = i1109[7]
  return i1108
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1110 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1111 = data
  var i1113 = i1111[0]
  var i1112 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1113.length; i += 1) {
    i1112.add(request.d('TMPro.TMP_Style', i1113[i + 0]));
  }
  i1110.m_StyleList = i1112
  return i1110
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1116 = root || request.c( 'TMPro.TMP_Style' )
  var i1117 = data
  i1116.m_Name = i1117[0]
  i1116.m_HashCode = i1117[1]
  i1116.m_OpeningDefinition = i1117[2]
  i1116.m_ClosingDefinition = i1117[3]
  i1116.m_OpeningTagArray = i1117[4]
  i1116.m_ClosingTagArray = i1117[5]
  i1116.m_OpeningTagUnicodeArray = i1117[6]
  i1116.m_ClosingTagUnicodeArray = i1117[7]
  return i1116
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1119 = data
  var i1121 = i1119[0]
  var i1120 = []
  for(var i = 0; i < i1121.length; i += 1) {
    i1120.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1121[i + 0]) );
  }
  i1118.files = i1120
  i1118.componentToPrefabIds = i1119[1]
  return i1118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1124 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1125 = data
  i1124.path = i1125[0]
  request.r(i1125[1], i1125[2], 0, i1124, 'unityObject')
  return i1124
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1127 = data
  var i1129 = i1127[0]
  var i1128 = []
  for(var i = 0; i < i1129.length; i += 1) {
    i1128.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1129[i + 0]) );
  }
  i1126.scriptsExecutionOrder = i1128
  var i1131 = i1127[1]
  var i1130 = []
  for(var i = 0; i < i1131.length; i += 1) {
    i1130.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1131[i + 0]) );
  }
  i1126.sortingLayers = i1130
  var i1133 = i1127[2]
  var i1132 = []
  for(var i = 0; i < i1133.length; i += 1) {
    i1132.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1133[i + 0]) );
  }
  i1126.cullingLayers = i1132
  i1126.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1127[3], i1126.timeSettings)
  i1126.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1127[4], i1126.physicsSettings)
  i1126.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1127[5], i1126.physics2DSettings)
  i1126.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1127[6], i1126.qualitySettings)
  i1126.enableRealtimeShadows = !!i1127[7]
  i1126.enableAutoInstancing = !!i1127[8]
  i1126.enableStaticBatching = !!i1127[9]
  i1126.enableDynamicBatching = !!i1127[10]
  i1126.lightmapEncodingQuality = i1127[11]
  i1126.desiredColorSpace = i1127[12]
  var i1135 = i1127[13]
  var i1134 = []
  for(var i = 0; i < i1135.length; i += 1) {
    i1134.push( i1135[i + 0] );
  }
  i1126.allTags = i1134
  return i1126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1138 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1139 = data
  i1138.name = i1139[0]
  i1138.value = i1139[1]
  return i1138
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1143 = data
  i1142.id = i1143[0]
  i1142.name = i1143[1]
  i1142.value = i1143[2]
  return i1142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1147 = data
  i1146.id = i1147[0]
  i1146.name = i1147[1]
  return i1146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1148 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1149 = data
  i1148.fixedDeltaTime = i1149[0]
  i1148.maximumDeltaTime = i1149[1]
  i1148.timeScale = i1149[2]
  i1148.maximumParticleTimestep = i1149[3]
  return i1148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1151 = data
  i1150.gravity = new pc.Vec3( i1151[0], i1151[1], i1151[2] )
  i1150.defaultSolverIterations = i1151[3]
  i1150.bounceThreshold = i1151[4]
  i1150.autoSyncTransforms = !!i1151[5]
  i1150.autoSimulation = !!i1151[6]
  var i1153 = i1151[7]
  var i1152 = []
  for(var i = 0; i < i1153.length; i += 1) {
    i1152.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1153[i + 0]) );
  }
  i1150.collisionMatrix = i1152
  return i1150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1156 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1157 = data
  i1156.enabled = !!i1157[0]
  i1156.layerId = i1157[1]
  i1156.otherLayerId = i1157[2]
  return i1156
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1159 = data
  request.r(i1159[0], i1159[1], 0, i1158, 'material')
  i1158.gravity = new pc.Vec2( i1159[2], i1159[3] )
  i1158.positionIterations = i1159[4]
  i1158.velocityIterations = i1159[5]
  i1158.velocityThreshold = i1159[6]
  i1158.maxLinearCorrection = i1159[7]
  i1158.maxAngularCorrection = i1159[8]
  i1158.maxTranslationSpeed = i1159[9]
  i1158.maxRotationSpeed = i1159[10]
  i1158.baumgarteScale = i1159[11]
  i1158.baumgarteTOIScale = i1159[12]
  i1158.timeToSleep = i1159[13]
  i1158.linearSleepTolerance = i1159[14]
  i1158.angularSleepTolerance = i1159[15]
  i1158.defaultContactOffset = i1159[16]
  i1158.autoSimulation = !!i1159[17]
  i1158.queriesHitTriggers = !!i1159[18]
  i1158.queriesStartInColliders = !!i1159[19]
  i1158.callbacksOnDisable = !!i1159[20]
  i1158.reuseCollisionCallbacks = !!i1159[21]
  i1158.autoSyncTransforms = !!i1159[22]
  var i1161 = i1159[23]
  var i1160 = []
  for(var i = 0; i < i1161.length; i += 1) {
    i1160.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1161[i + 0]) );
  }
  i1158.collisionMatrix = i1160
  return i1158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1165 = data
  i1164.enabled = !!i1165[0]
  i1164.layerId = i1165[1]
  i1164.otherLayerId = i1165[2]
  return i1164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1166 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1167 = data
  var i1169 = i1167[0]
  var i1168 = []
  for(var i = 0; i < i1169.length; i += 1) {
    i1168.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1169[i + 0]) );
  }
  i1166.qualityLevels = i1168
  var i1171 = i1167[1]
  var i1170 = []
  for(var i = 0; i < i1171.length; i += 1) {
    i1170.push( i1171[i + 0] );
  }
  i1166.names = i1170
  i1166.shadows = i1167[2]
  i1166.anisotropicFiltering = i1167[3]
  i1166.antiAliasing = i1167[4]
  i1166.lodBias = i1167[5]
  i1166.shadowCascades = i1167[6]
  i1166.shadowDistance = i1167[7]
  i1166.shadowmaskMode = i1167[8]
  i1166.shadowProjection = i1167[9]
  i1166.shadowResolution = i1167[10]
  i1166.softParticles = !!i1167[11]
  i1166.softVegetation = !!i1167[12]
  i1166.activeColorSpace = i1167[13]
  i1166.desiredColorSpace = i1167[14]
  i1166.masterTextureLimit = i1167[15]
  i1166.maxQueuedFrames = i1167[16]
  i1166.particleRaycastBudget = i1167[17]
  i1166.pixelLightCount = i1167[18]
  i1166.realtimeReflectionProbes = !!i1167[19]
  i1166.shadowCascade2Split = i1167[20]
  i1166.shadowCascade4Split = new pc.Vec3( i1167[21], i1167[22], i1167[23] )
  i1166.streamingMipmapsActive = !!i1167[24]
  i1166.vSyncCount = i1167[25]
  i1166.asyncUploadBufferSize = i1167[26]
  i1166.asyncUploadTimeSlice = i1167[27]
  i1166.billboardsFaceCameraPosition = !!i1167[28]
  i1166.shadowNearPlaneOffset = i1167[29]
  i1166.streamingMipmapsMemoryBudget = i1167[30]
  i1166.maximumLODLevel = i1167[31]
  i1166.streamingMipmapsAddAllCameras = !!i1167[32]
  i1166.streamingMipmapsMaxLevelReduction = i1167[33]
  i1166.streamingMipmapsRenderersPerFrame = i1167[34]
  i1166.resolutionScalingFixedDPIFactor = i1167[35]
  i1166.streamingMipmapsMaxFileIORequests = i1167[36]
  i1166.currentQualityLevel = i1167[37]
  return i1166
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1176 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1177 = data
  i1176.mode = i1177[0]
  i1176.parameter = i1177[1]
  i1176.threshold = i1177[2]
  return i1176
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1178 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1179 = data
  i1178.xPlacement = i1179[0]
  i1178.yPlacement = i1179[1]
  i1178.xAdvance = i1179[2]
  i1178.yAdvance = i1179[3]
  return i1178
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"disableBatching":11,"compiled":12},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"51":[52],"53":[52],"54":[52],"55":[52],"56":[52],"57":[52],"58":[59],"60":[11],"61":[62],"63":[62],"64":[62],"65":[62],"66":[62],"67":[62],"68":[62],"69":[25],"70":[25],"71":[25],"72":[25],"73":[25],"74":[25],"75":[25],"76":[25],"77":[25],"78":[25],"79":[25],"80":[25],"81":[25],"82":[11],"83":[84],"85":[86],"87":[86],"27":[26],"88":[89],"90":[91],"92":[84,93],"94":[95],"96":[91],"97":[98],"99":[91],"100":[91],"101":[102],"103":[102],"104":[91],"105":[106],"107":[5],"108":[106],"109":[26],"110":[26],"30":[27],"33":[32,26],"111":[26],"29":[27],"112":[26],"113":[26],"114":[26],"115":[26],"116":[26],"117":[26],"118":[26],"119":[26],"120":[26],"121":[32,26],"122":[26],"123":[26],"124":[26],"125":[26],"126":[32,26],"127":[26],"128":[38],"129":[38],"39":[38],"130":[38],"131":[11],"132":[11],"133":[134],"135":[11],"136":[137],"138":[26],"139":[32,26],"140":[84],"95":[32,26],"141":[9,84],"91":[84],"142":[84,93],"143":[62],"144":[25],"145":[137],"146":[102],"147":[26],"148":[84,26],"14":[26,32],"149":[26],"150":[32,26],"151":[84],"152":[32,26],"153":[26],"154":[106]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MonoBehaviour","HandHint","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Material","Disk","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.Camera","UnityEngine.AudioListener","GameManager","TMPro.TextMeshProUGUI","UnityEngine.GameObject","TutorialManager","AudioManager","UnityEngine.AudioSource","UnityEngine.AudioClip","TrayManager","Tray","UnityEngine.BoxCollider2D","Slot","DragItem","UnityEngine.Rigidbody2D","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","CountdownTimer","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","TMPro.TMP_FontAsset","ScalePopLoop","UnityEngine.UI.Button","UIButtonPulse","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","DiskTransform","EndCart_Lose","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","Button","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.Font","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Spine.Unity.Examples.BasicPlatformerController","UnityEngine.CharacterController","Spine.Unity.Examples.SkeletonGhost","Spine.Unity.SkeletonRenderer","Spine.Unity.Examples.RenderExistingMesh","UnityEngine.MeshFilter","Spine.Unity.Examples.SkeletonGraphicRenderTexture","Spine.Unity.SkeletonGraphic","Spine.Unity.Examples.SkeletonRenderTexture","Spine.Unity.Examples.SkeletonRenderTextureFadeout","Spine.Unity.Examples.SkeletonRenderTextureBase","Spine.Unity.Examples.SkeletonRagdoll","Spine.Unity.Examples.SkeletonRagdoll2D","Spine.Unity.Examples.SkeletonUtilityEyeConstraint","Spine.Unity.SkeletonUtilityBone","Spine.Unity.Examples.SkeletonUtilityGroundConstraint","Spine.Unity.Examples.SpineGauge","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","Spine.Unity.SkeletonPartsRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.62f3";

Deserializers.productName = "Prj_Demo";

Deserializers.lunaInitializationTime = "12/18/2025 04:11:57";

Deserializers.lunaDaysRunning = "6.3";

Deserializers.lunaVersion = "6.4.0";

Deserializers.lunaSHA = "6639120529aa36186c6141b5c3fb20246c28bff0";

Deserializers.creativeName = "GrillDemo";

Deserializers.lunaAppID = "35346";

Deserializers.projectId = "01007caba134ace46b9e4290577324b9";

Deserializers.packagesInfo = "com.unity.textmeshpro: 3.0.9\ncom.unity.timeline: 1.8.9\ncom.unity.ugui: 2.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "1692";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4559";

Deserializers.runtimeAnalysisExcludedModules = "physics3d";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.2DProject";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "d16b2261-4e53-47f8-9a44-d629950444f6";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

