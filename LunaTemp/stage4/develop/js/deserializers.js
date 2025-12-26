var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i592 = root || request.c( 'UnityEngine.JointSpring' )
  var i593 = data
  i592.spring = i593[0]
  i592.damper = i593[1]
  i592.targetPosition = i593[2]
  return i592
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i594 = root || request.c( 'UnityEngine.JointMotor' )
  var i595 = data
  i594.m_TargetVelocity = i595[0]
  i594.m_Force = i595[1]
  i594.m_FreeSpin = i595[2]
  return i594
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i596 = root || request.c( 'UnityEngine.JointLimits' )
  var i597 = data
  i596.m_Min = i597[0]
  i596.m_Max = i597[1]
  i596.m_Bounciness = i597[2]
  i596.m_BounceMinVelocity = i597[3]
  i596.m_ContactDistance = i597[4]
  i596.minBounce = i597[5]
  i596.maxBounce = i597[6]
  return i596
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i598 = root || request.c( 'UnityEngine.JointDrive' )
  var i599 = data
  i598.m_PositionSpring = i599[0]
  i598.m_PositionDamper = i599[1]
  i598.m_MaximumForce = i599[2]
  i598.m_UseAcceleration = i599[3]
  return i598
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i600 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i601 = data
  i600.m_Spring = i601[0]
  i600.m_Damper = i601[1]
  return i600
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i602 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i603 = data
  i602.m_Limit = i603[0]
  i602.m_Bounciness = i603[1]
  i602.m_ContactDistance = i603[2]
  return i602
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i604 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i605 = data
  i604.m_ExtremumSlip = i605[0]
  i604.m_ExtremumValue = i605[1]
  i604.m_AsymptoteSlip = i605[2]
  i604.m_AsymptoteValue = i605[3]
  i604.m_Stiffness = i605[4]
  return i604
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i606 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i607 = data
  i606.m_LowerAngle = i607[0]
  i606.m_UpperAngle = i607[1]
  return i606
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i608 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i609 = data
  i608.m_MotorSpeed = i609[0]
  i608.m_MaximumMotorTorque = i609[1]
  return i608
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i610 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i611 = data
  i610.m_DampingRatio = i611[0]
  i610.m_Frequency = i611[1]
  i610.m_Angle = i611[2]
  return i610
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i612 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i613 = data
  i612.m_LowerTranslation = i613[0]
  i612.m_UpperTranslation = i613[1]
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

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i647 = data
  i646.name = i647[0]
  i646.width = i647[1]
  i646.height = i647[2]
  i646.mipmapCount = i647[3]
  i646.anisoLevel = i647[4]
  i646.filterMode = i647[5]
  i646.hdr = !!i647[6]
  i646.format = i647[7]
  i646.wrapMode = i647[8]
  i646.alphaIsTransparency = !!i647[9]
  i646.alphaSource = i647[10]
  i646.graphicsFormat = i647[11]
  i646.sRGBTexture = !!i647[12]
  i646.desiredColorSpace = i647[13]
  i646.wrapU = i647[14]
  i646.wrapV = i647[15]
  return i646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i649 = data
  i648.position = new pc.Vec3( i649[0], i649[1], i649[2] )
  i648.scale = new pc.Vec3( i649[3], i649[4], i649[5] )
  i648.rotation = new pc.Quat(i649[6], i649[7], i649[8], i649[9])
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

Deserializers["HandHint"] = function (request, data, root) {
  var i666 = root || request.c( 'HandHint' )
  var i667 = data
  request.r(i667[0], i667[1], 0, i666, 'previewRenderer')
  return i666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i669 = data
  i668.name = i669[0]
  i668.index = i669[1]
  i668.startup = !!i669[2]
  return i668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i671 = data
  i670.aspect = i671[0]
  i670.orthographic = !!i671[1]
  i670.orthographicSize = i671[2]
  i670.backgroundColor = new pc.Color(i671[3], i671[4], i671[5], i671[6])
  i670.nearClipPlane = i671[7]
  i670.farClipPlane = i671[8]
  i670.fieldOfView = i671[9]
  i670.depth = i671[10]
  i670.clearFlags = i671[11]
  i670.cullingMask = i671[12]
  i670.rect = i671[13]
  request.r(i671[14], i671[15], 0, i670, 'targetTexture')
  i670.usePhysicalProperties = !!i671[16]
  i670.focalLength = i671[17]
  i670.sensorSize = new pc.Vec2( i671[18], i671[19] )
  i670.lensShift = new pc.Vec2( i671[20], i671[21] )
  i670.gateFit = i671[22]
  i670.commandBufferCount = i671[23]
  i670.cameraType = i671[24]
  i670.enabled = !!i671[25]
  return i670
}

Deserializers["CheckSize"] = function (request, data, root) {
  var i672 = root || request.c( 'CheckSize' )
  var i673 = data
  i672.size16by9 = i673[0]
  i672.size18by9 = i673[1]
  i672.sizeLong = i673[2]
  request.r(i673[3], i673[4], 0, i672, 'diskTransform')
  i672.diskPos16by9 = new pc.Vec3( i673[5], i673[6], i673[7] )
  i672.diskPosLong = new pc.Vec3( i673[8], i673[9], i673[10] )
  request.r(i673[11], i673[12], 0, i672, 'trayManager')
  request.r(i673[13], i673[14], 0, i672, 'button_doc')
  request.r(i673[15], i673[16], 0, i672, 'target')
  request.r(i673[17], i673[18], 0, i672, 'timer')
  request.r(i673[19], i673[20], 0, i672, 'logoGame')
  request.r(i673[21], i673[22], 0, i672, 'buttonGame')
  return i672
}

Deserializers["GameManager"] = function (request, data, root) {
  var i674 = root || request.c( 'GameManager' )
  var i675 = data
  i674.isClickToLog = !!i675[0]
  i674.clicksToLog = i675[1]
  i674.isTimer = !!i675[2]
  i674.time = i675[3]
  i674.clickCount = i675[4]
  i674.isClick = !!i675[5]
  i674.finishGame = !!i675[6]
  request.r(i675[7], i675[8], 0, i674, 'textPoint')
  i674.point = i675[9]
  request.r(i675[10], i675[11], 0, i674, 'tutGame')
  request.r(i675[12], i675[13], 0, i674, 'target')
  request.r(i675[14], i675[15], 0, i674, 'text_target')
  i674.totalTime = i675[16]
  return i674
}

Deserializers["TutorialManager"] = function (request, data, root) {
  var i676 = root || request.c( 'TutorialManager' )
  var i677 = data
  request.r(i677[0], i677[1], 0, i676, 'handPrefab')
  return i676
}

Deserializers["AudioManager"] = function (request, data, root) {
  var i678 = root || request.c( 'AudioManager' )
  var i679 = data
  request.r(i679[0], i679[1], 0, i678, 'bgmSource')
  request.r(i679[2], i679[3], 0, i678, 'sfxSource')
  request.r(i679[4], i679[5], 0, i678, 'bgm')
  request.r(i679[6], i679[7], 0, i678, 'finish')
  request.r(i679[8], i679[9], 0, i678, 'drog')
  request.r(i679[10], i679[11], 0, i678, 'match')
  request.r(i679[12], i679[13], 0, i678, 'pop')
  request.r(i679[14], i679[15], 0, i678, 'lose')
  request.r(i679[16], i679[17], 0, i678, 'drag')
  request.r(i679[18], i679[19], 0, i678, 'closeBox')
  request.r(i679[20], i679[21], 0, i678, 'normalTick')
  request.r(i679[22], i679[23], 0, i678, 'warningTick')
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i681 = data
  request.r(i681[0], i681[1], 0, i680, 'clip')
  request.r(i681[2], i681[3], 0, i680, 'outputAudioMixerGroup')
  i680.playOnAwake = !!i681[4]
  i680.loop = !!i681[5]
  i680.time = i681[6]
  i680.volume = i681[7]
  i680.pitch = i681[8]
  i680.enabled = !!i681[9]
  return i680
}

Deserializers["TrayManager"] = function (request, data, root) {
  var i682 = root || request.c( 'TrayManager' )
  var i683 = data
  i682.spacing = i683[0]
  i682.visibleCount = i683[1]
  i682.moveTime = i683[2]
  request.r(i683[3], i683[4], 0, i682, 'win')
  var i685 = i683[5]
  var i684 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i685.length; i += 2) {
  request.r(i685[i + 0], i685[i + 1], 1, i684, '')
  }
  i682.listTray = i684
  var i687 = i683[6]
  var i686 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i687.length; i += 2) {
  request.r(i687[i + 0], i687[i + 1], 1, i686, '')
  }
  i682.activeTrays = i686
  i682.idleTime = i683[7]
  i682.hintDelay = i683[8]
  i682.isTutorialShowing = !!i683[9]
  i682.isFirstTutorial = !!i683[10]
  request.r(i683[11], i683[12], 0, i682, 'manualTray')
  request.r(i683[13], i683[14], 0, i682, 'manualItem')
  i682.columns = i683[15]
  i682.rows = i683[16]
  i682.stepX = i683[17]
  i682.stepY = i683[18]
  return i682
}

Deserializers["Tray"] = function (request, data, root) {
  var i692 = root || request.c( 'Tray' )
  var i693 = data
  i692.spacing = i693[0]
  i692.moveTime = i693[1]
  request.r(i693[2], i693[3], 0, i692, 'diskPrefab')
  request.r(i693[4], i693[5], 0, i692, 'diskTransform')
  i692.shrinkTime = i693[6]
  i692.itemToDiskTime = i693[7]
  i692.attachDelay = i693[8]
  i692.followSmooth = i693[9]
  i692.diskItemScale = new pc.Vec3( i693[10], i693[11], i693[12] )
  request.r(i693[13], i693[14], 0, i692, 'soldOutPrefabs')
  var i695 = i693[15]
  var i694 = []
  for(var i = 0; i < i695.length; i += 2) {
  request.r(i695[i + 0], i695[i + 1], 2, i694, '')
  }
  i692.listItem = i694
  i692.maxSlot = i693[16]
  i692.isCompleted = !!i693[17]
  var i697 = i693[18]
  var i696 = []
  for(var i = 0; i < i697.length; i += 2) {
  request.r(i697[i + 0], i697[i + 1], 2, i696, '')
  }
  i692.slots = i696
  i692.isClosed = !!i693[19]
  request.r(i693[20], i693[21], 0, i692, 'fireEffectPrefab')
  i692.fireEffectTime = i693[22]
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i703 = data
  i702.usedByComposite = !!i703[0]
  i702.autoTiling = !!i703[1]
  i702.size = new pc.Vec2( i703[2], i703[3] )
  i702.edgeRadius = i703[4]
  i702.enabled = !!i703[5]
  i702.isTrigger = !!i703[6]
  i702.usedByEffector = !!i703[7]
  i702.density = i703[8]
  i702.offset = new pc.Vec2( i703[9], i703[10] )
  request.r(i703[11], i703[12], 0, i702, 'material')
  return i702
}

Deserializers["Slot"] = function (request, data, root) {
  var i704 = root || request.c( 'Slot' )
  var i705 = data
  request.r(i705[0], i705[1], 0, i704, 'anchor')
  request.r(i705[2], i705[3], 0, i704, 'currentItem')
  request.r(i705[4], i705[5], 0, i704, 'tray')
  return i704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i707 = data
  i706.bodyType = i707[0]
  request.r(i707[1], i707[2], 0, i706, 'material')
  i706.simulated = !!i707[3]
  i706.useAutoMass = !!i707[4]
  i706.mass = i707[5]
  i706.drag = i707[6]
  i706.angularDrag = i707[7]
  i706.gravityScale = i707[8]
  i706.collisionDetectionMode = i707[9]
  i706.sleepMode = i707[10]
  i706.constraints = i707[11]
  return i706
}

Deserializers["DragItem"] = function (request, data, root) {
  var i708 = root || request.c( 'DragItem' )
  var i709 = data
  i708.isLocked = !!i709[0]
  i708.focusOutlineSize = i709[1]
  i708.outlineTweenTime = i709[2]
  return i708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i711 = data
  i710.pivot = new pc.Vec2( i711[0], i711[1] )
  i710.anchorMin = new pc.Vec2( i711[2], i711[3] )
  i710.anchorMax = new pc.Vec2( i711[4], i711[5] )
  i710.sizeDelta = new pc.Vec2( i711[6], i711[7] )
  i710.anchoredPosition3D = new pc.Vec3( i711[8], i711[9], i711[10] )
  i710.rotation = new pc.Quat(i711[11], i711[12], i711[13], i711[14])
  i710.scale = new pc.Vec3( i711[15], i711[16], i711[17] )
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i713 = data
  i712.planeDistance = i713[0]
  i712.referencePixelsPerUnit = i713[1]
  i712.isFallbackOverlay = !!i713[2]
  i712.renderMode = i713[3]
  i712.renderOrder = i713[4]
  i712.sortingLayerName = i713[5]
  i712.sortingOrder = i713[6]
  i712.scaleFactor = i713[7]
  request.r(i713[8], i713[9], 0, i712, 'worldCamera')
  i712.overrideSorting = !!i713[10]
  i712.pixelPerfect = !!i713[11]
  i712.targetDisplay = i713[12]
  i712.overridePixelPerfect = !!i713[13]
  i712.enabled = !!i713[14]
  return i712
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i714 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i715 = data
  i714.m_UiScaleMode = i715[0]
  i714.m_ReferencePixelsPerUnit = i715[1]
  i714.m_ScaleFactor = i715[2]
  i714.m_ReferenceResolution = new pc.Vec2( i715[3], i715[4] )
  i714.m_ScreenMatchMode = i715[5]
  i714.m_MatchWidthOrHeight = i715[6]
  i714.m_PhysicalUnit = i715[7]
  i714.m_FallbackScreenDPI = i715[8]
  i714.m_DefaultSpriteDPI = i715[9]
  i714.m_DynamicPixelsPerUnit = i715[10]
  i714.m_PresetInfoIsWorld = !!i715[11]
  return i714
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i716 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i717 = data
  i716.m_IgnoreReversedGraphics = !!i717[0]
  i716.m_BlockingObjects = i717[1]
  i716.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i717[2] )
  return i716
}

Deserializers["CountdownTimer"] = function (request, data, root) {
  var i718 = root || request.c( 'CountdownTimer' )
  var i719 = data
  request.r(i719[0], i719[1], 0, i718, 'timerText')
  i718.startSeconds = i719[2]
  i718.warningTime = i719[3]
  i718.warningColor = new pc.Color(i719[4], i719[5], i719[6], i719[7])
  i718.pulseScale = i719[8]
  i718.pulseSpeed = i719[9]
  request.r(i719[10], i719[11], 0, i718, 'backgroundWarning')
  request.r(i719[12], i719[13], 0, i718, 'timeUpPanel')
  i718.hasStarted = !!i719[14]
  i718.bgMinAlpha = i719[15]
  i718.bgMaxAlpha = i719[16]
  i718.bgBlinkSpeed = i719[17]
  request.r(i719[18], i719[19], 0, i718, 'wwin')
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i721 = data
  i720.cullTransparentMesh = !!i721[0]
  return i720
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i722 = root || request.c( 'UnityEngine.UI.Image' )
  var i723 = data
  request.r(i723[0], i723[1], 0, i722, 'm_Sprite')
  i722.m_Type = i723[2]
  i722.m_PreserveAspect = !!i723[3]
  i722.m_FillCenter = !!i723[4]
  i722.m_FillMethod = i723[5]
  i722.m_FillAmount = i723[6]
  i722.m_FillClockwise = !!i723[7]
  i722.m_FillOrigin = i723[8]
  i722.m_UseSpriteMesh = !!i723[9]
  i722.m_PixelsPerUnitMultiplier = i723[10]
  i722.m_Maskable = !!i723[11]
  request.r(i723[12], i723[13], 0, i722, 'm_Material')
  i722.m_Color = new pc.Color(i723[14], i723[15], i723[16], i723[17])
  i722.m_RaycastTarget = !!i723[18]
  i722.m_RaycastPadding = new pc.Vec4( i723[19], i723[20], i723[21], i723[22] )
  return i722
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i724 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i725 = data
  i724.m_hasFontAssetChanged = !!i725[0]
  request.r(i725[1], i725[2], 0, i724, 'm_baseMaterial')
  i724.m_maskOffset = new pc.Vec4( i725[3], i725[4], i725[5], i725[6] )
  i724.m_text = i725[7]
  i724.m_isRightToLeft = !!i725[8]
  request.r(i725[9], i725[10], 0, i724, 'm_fontAsset')
  request.r(i725[11], i725[12], 0, i724, 'm_sharedMaterial')
  var i727 = i725[13]
  var i726 = []
  for(var i = 0; i < i727.length; i += 2) {
  request.r(i727[i + 0], i727[i + 1], 2, i726, '')
  }
  i724.m_fontSharedMaterials = i726
  request.r(i725[14], i725[15], 0, i724, 'm_fontMaterial')
  var i729 = i725[16]
  var i728 = []
  for(var i = 0; i < i729.length; i += 2) {
  request.r(i729[i + 0], i729[i + 1], 2, i728, '')
  }
  i724.m_fontMaterials = i728
  i724.m_fontColor32 = UnityEngine.Color32.ConstructColor(i725[17], i725[18], i725[19], i725[20])
  i724.m_fontColor = new pc.Color(i725[21], i725[22], i725[23], i725[24])
  i724.m_enableVertexGradient = !!i725[25]
  i724.m_colorMode = i725[26]
  i724.m_fontColorGradient = request.d('TMPro.VertexGradient', i725[27], i724.m_fontColorGradient)
  request.r(i725[28], i725[29], 0, i724, 'm_fontColorGradientPreset')
  request.r(i725[30], i725[31], 0, i724, 'm_spriteAsset')
  i724.m_tintAllSprites = !!i725[32]
  request.r(i725[33], i725[34], 0, i724, 'm_StyleSheet')
  i724.m_TextStyleHashCode = i725[35]
  i724.m_overrideHtmlColors = !!i725[36]
  i724.m_faceColor = UnityEngine.Color32.ConstructColor(i725[37], i725[38], i725[39], i725[40])
  i724.m_fontSize = i725[41]
  i724.m_fontSizeBase = i725[42]
  i724.m_fontWeight = i725[43]
  i724.m_enableAutoSizing = !!i725[44]
  i724.m_fontSizeMin = i725[45]
  i724.m_fontSizeMax = i725[46]
  i724.m_fontStyle = i725[47]
  i724.m_HorizontalAlignment = i725[48]
  i724.m_VerticalAlignment = i725[49]
  i724.m_textAlignment = i725[50]
  i724.m_characterSpacing = i725[51]
  i724.m_wordSpacing = i725[52]
  i724.m_lineSpacing = i725[53]
  i724.m_lineSpacingMax = i725[54]
  i724.m_paragraphSpacing = i725[55]
  i724.m_charWidthMaxAdj = i725[56]
  i724.m_enableWordWrapping = !!i725[57]
  i724.m_wordWrappingRatios = i725[58]
  i724.m_overflowMode = i725[59]
  request.r(i725[60], i725[61], 0, i724, 'm_linkedTextComponent')
  request.r(i725[62], i725[63], 0, i724, 'parentLinkedComponent')
  i724.m_enableKerning = !!i725[64]
  i724.m_enableExtraPadding = !!i725[65]
  i724.checkPaddingRequired = !!i725[66]
  i724.m_isRichText = !!i725[67]
  i724.m_parseCtrlCharacters = !!i725[68]
  i724.m_isOrthographic = !!i725[69]
  i724.m_isCullingEnabled = !!i725[70]
  i724.m_horizontalMapping = i725[71]
  i724.m_verticalMapping = i725[72]
  i724.m_uvLineOffset = i725[73]
  i724.m_geometrySortingOrder = i725[74]
  i724.m_IsTextObjectScaleStatic = !!i725[75]
  i724.m_VertexBufferAutoSizeReduction = !!i725[76]
  i724.m_useMaxVisibleDescender = !!i725[77]
  i724.m_pageToDisplay = i725[78]
  i724.m_margin = new pc.Vec4( i725[79], i725[80], i725[81], i725[82] )
  i724.m_isUsingLegacyAnimationComponent = !!i725[83]
  i724.m_isVolumetricText = !!i725[84]
  i724.m_Maskable = !!i725[85]
  request.r(i725[86], i725[87], 0, i724, 'm_Material')
  i724.m_Color = new pc.Color(i725[88], i725[89], i725[90], i725[91])
  i724.m_RaycastTarget = !!i725[92]
  i724.m_RaycastPadding = new pc.Vec4( i725[93], i725[94], i725[95], i725[96] )
  return i724
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i730 = root || request.c( 'TMPro.VertexGradient' )
  var i731 = data
  i730.topLeft = new pc.Color(i731[0], i731[1], i731[2], i731[3])
  i730.topRight = new pc.Color(i731[4], i731[5], i731[6], i731[7])
  i730.bottomLeft = new pc.Color(i731[8], i731[9], i731[10], i731[11])
  i730.bottomRight = new pc.Color(i731[12], i731[13], i731[14], i731[15])
  return i730
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i732 = root || request.c( 'UnityEngine.UI.Button' )
  var i733 = data
  i732.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i733[0], i732.m_OnClick)
  i732.m_Navigation = request.d('UnityEngine.UI.Navigation', i733[1], i732.m_Navigation)
  i732.m_Transition = i733[2]
  i732.m_Colors = request.d('UnityEngine.UI.ColorBlock', i733[3], i732.m_Colors)
  i732.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i733[4], i732.m_SpriteState)
  i732.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i733[5], i732.m_AnimationTriggers)
  i732.m_Interactable = !!i733[6]
  request.r(i733[7], i733[8], 0, i732, 'm_TargetGraphic')
  return i732
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i734 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i735 = data
  i734.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i735[0], i734.m_PersistentCalls)
  return i734
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i736 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i737 = data
  var i739 = i737[0]
  var i738 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i739.length; i += 1) {
    i738.add(request.d('UnityEngine.Events.PersistentCall', i739[i + 0]));
  }
  i736.m_Calls = i738
  return i736
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i742 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i743 = data
  request.r(i743[0], i743[1], 0, i742, 'm_Target')
  i742.m_TargetAssemblyTypeName = i743[2]
  i742.m_MethodName = i743[3]
  i742.m_Mode = i743[4]
  i742.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i743[5], i742.m_Arguments)
  i742.m_CallState = i743[6]
  return i742
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i744 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i745 = data
  request.r(i745[0], i745[1], 0, i744, 'm_ObjectArgument')
  i744.m_ObjectArgumentAssemblyTypeName = i745[2]
  i744.m_IntArgument = i745[3]
  i744.m_FloatArgument = i745[4]
  i744.m_StringArgument = i745[5]
  i744.m_BoolArgument = !!i745[6]
  return i744
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i746 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i747 = data
  i746.m_Mode = i747[0]
  i746.m_WrapAround = !!i747[1]
  request.r(i747[2], i747[3], 0, i746, 'm_SelectOnUp')
  request.r(i747[4], i747[5], 0, i746, 'm_SelectOnDown')
  request.r(i747[6], i747[7], 0, i746, 'm_SelectOnLeft')
  request.r(i747[8], i747[9], 0, i746, 'm_SelectOnRight')
  return i746
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i748 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i749 = data
  i748.m_NormalColor = new pc.Color(i749[0], i749[1], i749[2], i749[3])
  i748.m_HighlightedColor = new pc.Color(i749[4], i749[5], i749[6], i749[7])
  i748.m_PressedColor = new pc.Color(i749[8], i749[9], i749[10], i749[11])
  i748.m_SelectedColor = new pc.Color(i749[12], i749[13], i749[14], i749[15])
  i748.m_DisabledColor = new pc.Color(i749[16], i749[17], i749[18], i749[19])
  i748.m_ColorMultiplier = i749[20]
  i748.m_FadeDuration = i749[21]
  return i748
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i750 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i751 = data
  request.r(i751[0], i751[1], 0, i750, 'm_HighlightedSprite')
  request.r(i751[2], i751[3], 0, i750, 'm_PressedSprite')
  request.r(i751[4], i751[5], 0, i750, 'm_SelectedSprite')
  request.r(i751[6], i751[7], 0, i750, 'm_DisabledSprite')
  return i750
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i752 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i753 = data
  i752.m_NormalTrigger = i753[0]
  i752.m_HighlightedTrigger = i753[1]
  i752.m_PressedTrigger = i753[2]
  i752.m_SelectedTrigger = i753[3]
  i752.m_DisabledTrigger = i753[4]
  return i752
}

Deserializers["ScalePopLoop"] = function (request, data, root) {
  var i754 = root || request.c( 'ScalePopLoop' )
  var i755 = data
  i754.minScale = new pc.Vec3( i755[0], i755[1], i755[2] )
  i754.maxScale = new pc.Vec3( i755[3], i755[4], i755[5] )
  i754.duration = i755[6]
  i754.ease = i755[7]
  return i754
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i756 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i757 = data
  request.r(i757[0], i757[1], 0, i756, 'm_FirstSelected')
  i756.m_sendNavigationEvents = !!i757[2]
  i756.m_DragThreshold = i757[3]
  return i756
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i758 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i759 = data
  i758.m_HorizontalAxis = i759[0]
  i758.m_VerticalAxis = i759[1]
  i758.m_SubmitButton = i759[2]
  i758.m_CancelButton = i759[3]
  i758.m_InputActionsPerSecond = i759[4]
  i758.m_RepeatDelay = i759[5]
  i758.m_ForceModuleActive = !!i759[6]
  i758.m_SendPointerHoverToParent = !!i759[7]
  return i758
}

Deserializers["DiskTransform"] = function (request, data, root) {
  var i760 = root || request.c( 'DiskTransform' )
  var i761 = data
  return i760
}

Deserializers["EndCart_Lose"] = function (request, data, root) {
  var i762 = root || request.c( 'EndCart_Lose' )
  var i763 = data
  request.r(i763[0], i763[1], 0, i762, 'actionButton')
  request.r(i763[2], i763[3], 0, i762, 'emoji')
  request.r(i763[4], i763[5], 0, i762, 'logo')
  request.r(i763[6], i763[7], 0, i762, 'praticle')
  i762.buttonScaleTime = i763[8]
  i762.itemStartScale = i763[9]
  i762.itemPopScale = i763[10]
  i762.itemInTime = i763[11]
  i762.itemSettleTime = i763[12]
  i762.itemFinalScale = i763[13]
  i762.emojiFinalScale = i763[14]
  i762.otherItemFinalScale = i763[15]
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i765 = data
  i764.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i765[0], i764.main)
  i764.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i765[1], i764.colorBySpeed)
  i764.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i765[2], i764.colorOverLifetime)
  i764.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i765[3], i764.emission)
  i764.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i765[4], i764.rotationBySpeed)
  i764.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i765[5], i764.rotationOverLifetime)
  i764.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i765[6], i764.shape)
  i764.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i765[7], i764.sizeBySpeed)
  i764.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i765[8], i764.sizeOverLifetime)
  i764.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i765[9], i764.textureSheetAnimation)
  i764.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i765[10], i764.velocityOverLifetime)
  i764.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i765[11], i764.noise)
  i764.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i765[12], i764.inheritVelocity)
  i764.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i765[13], i764.forceOverLifetime)
  i764.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i765[14], i764.limitVelocityOverLifetime)
  i764.useAutoRandomSeed = !!i765[15]
  i764.randomSeed = i765[16]
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i766 = root || new pc.ParticleSystemMain()
  var i767 = data
  i766.duration = i767[0]
  i766.loop = !!i767[1]
  i766.prewarm = !!i767[2]
  i766.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[3], i766.startDelay)
  i766.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[4], i766.startLifetime)
  i766.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[5], i766.startSpeed)
  i766.startSize3D = !!i767[6]
  i766.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[7], i766.startSizeX)
  i766.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[8], i766.startSizeY)
  i766.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[9], i766.startSizeZ)
  i766.startRotation3D = !!i767[10]
  i766.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[11], i766.startRotationX)
  i766.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[12], i766.startRotationY)
  i766.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[13], i766.startRotationZ)
  i766.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i767[14], i766.startColor)
  i766.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[15], i766.gravityModifier)
  i766.simulationSpace = i767[16]
  request.r(i767[17], i767[18], 0, i766, 'customSimulationSpace')
  i766.simulationSpeed = i767[19]
  i766.useUnscaledTime = !!i767[20]
  i766.scalingMode = i767[21]
  i766.playOnAwake = !!i767[22]
  i766.maxParticles = i767[23]
  i766.emitterVelocityMode = i767[24]
  i766.stopAction = i767[25]
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i768 = root || new pc.MinMaxCurve()
  var i769 = data
  i768.mode = i769[0]
  i768.curveMin = new pc.AnimationCurve( { keys_flow: i769[1] } )
  i768.curveMax = new pc.AnimationCurve( { keys_flow: i769[2] } )
  i768.curveMultiplier = i769[3]
  i768.constantMin = i769[4]
  i768.constantMax = i769[5]
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i770 = root || new pc.MinMaxGradient()
  var i771 = data
  i770.mode = i771[0]
  i770.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i771[1], i770.gradientMin)
  i770.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i771[2], i770.gradientMax)
  i770.colorMin = new pc.Color(i771[3], i771[4], i771[5], i771[6])
  i770.colorMax = new pc.Color(i771[7], i771[8], i771[9], i771[10])
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i773 = data
  i772.mode = i773[0]
  var i775 = i773[1]
  var i774 = []
  for(var i = 0; i < i775.length; i += 1) {
    i774.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i775[i + 0]) );
  }
  i772.colorKeys = i774
  var i777 = i773[2]
  var i776 = []
  for(var i = 0; i < i777.length; i += 1) {
    i776.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i777[i + 0]) );
  }
  i772.alphaKeys = i776
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i781 = data
  i780.color = new pc.Color(i781[0], i781[1], i781[2], i781[3])
  i780.time = i781[4]
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i785 = data
  i784.alpha = i785[0]
  i784.time = i785[1]
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i786 = root || new pc.ParticleSystemColorBySpeed()
  var i787 = data
  i786.enabled = !!i787[0]
  i786.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i787[1], i786.color)
  i786.range = new pc.Vec2( i787[2], i787[3] )
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i788 = root || new pc.ParticleSystemColorOverLifetime()
  var i789 = data
  i788.enabled = !!i789[0]
  i788.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i789[1], i788.color)
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i790 = root || new pc.ParticleSystemEmitter()
  var i791 = data
  i790.enabled = !!i791[0]
  i790.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[1], i790.rateOverTime)
  i790.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[2], i790.rateOverDistance)
  var i793 = i791[3]
  var i792 = []
  for(var i = 0; i < i793.length; i += 1) {
    i792.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i793[i + 0]) );
  }
  i790.bursts = i792
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i796 = root || new pc.ParticleSystemBurst()
  var i797 = data
  i796.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[0], i796.count)
  i796.cycleCount = i797[1]
  i796.minCount = i797[2]
  i796.maxCount = i797[3]
  i796.repeatInterval = i797[4]
  i796.time = i797[5]
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i798 = root || new pc.ParticleSystemRotationBySpeed()
  var i799 = data
  i798.enabled = !!i799[0]
  i798.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i799[1], i798.x)
  i798.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i799[2], i798.y)
  i798.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i799[3], i798.z)
  i798.separateAxes = !!i799[4]
  i798.range = new pc.Vec2( i799[5], i799[6] )
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i800 = root || new pc.ParticleSystemRotationOverLifetime()
  var i801 = data
  i800.enabled = !!i801[0]
  i800.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i801[1], i800.x)
  i800.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i801[2], i800.y)
  i800.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i801[3], i800.z)
  i800.separateAxes = !!i801[4]
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i802 = root || new pc.ParticleSystemShape()
  var i803 = data
  i802.enabled = !!i803[0]
  i802.shapeType = i803[1]
  i802.randomDirectionAmount = i803[2]
  i802.sphericalDirectionAmount = i803[3]
  i802.randomPositionAmount = i803[4]
  i802.alignToDirection = !!i803[5]
  i802.radius = i803[6]
  i802.radiusMode = i803[7]
  i802.radiusSpread = i803[8]
  i802.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[9], i802.radiusSpeed)
  i802.radiusThickness = i803[10]
  i802.angle = i803[11]
  i802.length = i803[12]
  i802.boxThickness = new pc.Vec3( i803[13], i803[14], i803[15] )
  i802.meshShapeType = i803[16]
  request.r(i803[17], i803[18], 0, i802, 'mesh')
  request.r(i803[19], i803[20], 0, i802, 'meshRenderer')
  request.r(i803[21], i803[22], 0, i802, 'skinnedMeshRenderer')
  i802.useMeshMaterialIndex = !!i803[23]
  i802.meshMaterialIndex = i803[24]
  i802.useMeshColors = !!i803[25]
  i802.normalOffset = i803[26]
  i802.arc = i803[27]
  i802.arcMode = i803[28]
  i802.arcSpread = i803[29]
  i802.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[30], i802.arcSpeed)
  i802.donutRadius = i803[31]
  i802.position = new pc.Vec3( i803[32], i803[33], i803[34] )
  i802.rotation = new pc.Vec3( i803[35], i803[36], i803[37] )
  i802.scale = new pc.Vec3( i803[38], i803[39], i803[40] )
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i804 = root || new pc.ParticleSystemSizeBySpeed()
  var i805 = data
  i804.enabled = !!i805[0]
  i804.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[1], i804.x)
  i804.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[2], i804.y)
  i804.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[3], i804.z)
  i804.separateAxes = !!i805[4]
  i804.range = new pc.Vec2( i805[5], i805[6] )
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i806 = root || new pc.ParticleSystemSizeOverLifetime()
  var i807 = data
  i806.enabled = !!i807[0]
  i806.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[1], i806.x)
  i806.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[2], i806.y)
  i806.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[3], i806.z)
  i806.separateAxes = !!i807[4]
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i808 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i809 = data
  i808.enabled = !!i809[0]
  i808.mode = i809[1]
  i808.animation = i809[2]
  i808.numTilesX = i809[3]
  i808.numTilesY = i809[4]
  i808.useRandomRow = !!i809[5]
  i808.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[6], i808.frameOverTime)
  i808.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[7], i808.startFrame)
  i808.cycleCount = i809[8]
  i808.rowIndex = i809[9]
  i808.flipU = i809[10]
  i808.flipV = i809[11]
  i808.spriteCount = i809[12]
  var i811 = i809[13]
  var i810 = []
  for(var i = 0; i < i811.length; i += 2) {
  request.r(i811[i + 0], i811[i + 1], 2, i810, '')
  }
  i808.sprites = i810
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i814 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i815 = data
  i814.enabled = !!i815[0]
  i814.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i815[1], i814.x)
  i814.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i815[2], i814.y)
  i814.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i815[3], i814.z)
  i814.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i815[4], i814.radial)
  i814.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i815[5], i814.speedModifier)
  i814.space = i815[6]
  i814.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i815[7], i814.orbitalX)
  i814.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i815[8], i814.orbitalY)
  i814.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i815[9], i814.orbitalZ)
  i814.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i815[10], i814.orbitalOffsetX)
  i814.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i815[11], i814.orbitalOffsetY)
  i814.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i815[12], i814.orbitalOffsetZ)
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i816 = root || new pc.ParticleSystemNoise()
  var i817 = data
  i816.enabled = !!i817[0]
  i816.separateAxes = !!i817[1]
  i816.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[2], i816.strengthX)
  i816.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[3], i816.strengthY)
  i816.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[4], i816.strengthZ)
  i816.frequency = i817[5]
  i816.damping = !!i817[6]
  i816.octaveCount = i817[7]
  i816.octaveMultiplier = i817[8]
  i816.octaveScale = i817[9]
  i816.quality = i817[10]
  i816.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[11], i816.scrollSpeed)
  i816.scrollSpeedMultiplier = i817[12]
  i816.remapEnabled = !!i817[13]
  i816.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[14], i816.remapX)
  i816.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[15], i816.remapY)
  i816.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[16], i816.remapZ)
  i816.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[17], i816.positionAmount)
  i816.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[18], i816.rotationAmount)
  i816.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[19], i816.sizeAmount)
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i818 = root || new pc.ParticleSystemInheritVelocity()
  var i819 = data
  i818.enabled = !!i819[0]
  i818.mode = i819[1]
  i818.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[2], i818.curve)
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i820 = root || new pc.ParticleSystemForceOverLifetime()
  var i821 = data
  i820.enabled = !!i821[0]
  i820.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i821[1], i820.x)
  i820.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i821[2], i820.y)
  i820.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i821[3], i820.z)
  i820.space = i821[4]
  i820.randomized = !!i821[5]
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i822 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i823 = data
  i822.enabled = !!i823[0]
  i822.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i823[1], i822.limit)
  i822.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i823[2], i822.limitX)
  i822.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i823[3], i822.limitY)
  i822.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i823[4], i822.limitZ)
  i822.dampen = i823[5]
  i822.separateAxes = !!i823[6]
  i822.space = i823[7]
  i822.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i823[8], i822.drag)
  i822.multiplyDragByParticleSize = !!i823[9]
  i822.multiplyDragByParticleVelocity = !!i823[10]
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i825 = data
  request.r(i825[0], i825[1], 0, i824, 'mesh')
  i824.meshCount = i825[2]
  i824.activeVertexStreamsCount = i825[3]
  i824.alignment = i825[4]
  i824.renderMode = i825[5]
  i824.sortMode = i825[6]
  i824.lengthScale = i825[7]
  i824.velocityScale = i825[8]
  i824.cameraVelocityScale = i825[9]
  i824.normalDirection = i825[10]
  i824.sortingFudge = i825[11]
  i824.minParticleSize = i825[12]
  i824.maxParticleSize = i825[13]
  i824.pivot = new pc.Vec3( i825[14], i825[15], i825[16] )
  request.r(i825[17], i825[18], 0, i824, 'trailMaterial')
  i824.applyActiveColorSpace = !!i825[19]
  i824.enabled = !!i825[20]
  request.r(i825[21], i825[22], 0, i824, 'sharedMaterial')
  var i827 = i825[23]
  var i826 = []
  for(var i = 0; i < i827.length; i += 2) {
  request.r(i827[i + 0], i827[i + 1], 2, i826, '')
  }
  i824.sharedMaterials = i826
  i824.receiveShadows = !!i825[24]
  i824.shadowCastingMode = i825[25]
  i824.sortingLayerID = i825[26]
  i824.sortingOrder = i825[27]
  i824.lightmapIndex = i825[28]
  i824.lightmapSceneIndex = i825[29]
  i824.lightmapScaleOffset = new pc.Vec4( i825[30], i825[31], i825[32], i825[33] )
  i824.lightProbeUsage = i825[34]
  i824.reflectionProbeUsage = i825[35]
  return i824
}

Deserializers["Button"] = function (request, data, root) {
  var i828 = root || request.c( 'Button' )
  var i829 = data
  return i828
}

Deserializers["RotateLoop"] = function (request, data, root) {
  var i830 = root || request.c( 'RotateLoop' )
  var i831 = data
  i830.rotateSpeed = i831[0]
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i833 = data
  i832.ambientIntensity = i833[0]
  i832.reflectionIntensity = i833[1]
  i832.ambientMode = i833[2]
  i832.ambientLight = new pc.Color(i833[3], i833[4], i833[5], i833[6])
  i832.ambientSkyColor = new pc.Color(i833[7], i833[8], i833[9], i833[10])
  i832.ambientGroundColor = new pc.Color(i833[11], i833[12], i833[13], i833[14])
  i832.ambientEquatorColor = new pc.Color(i833[15], i833[16], i833[17], i833[18])
  i832.fogColor = new pc.Color(i833[19], i833[20], i833[21], i833[22])
  i832.fogEndDistance = i833[23]
  i832.fogStartDistance = i833[24]
  i832.fogDensity = i833[25]
  i832.fog = !!i833[26]
  request.r(i833[27], i833[28], 0, i832, 'skybox')
  i832.fogMode = i833[29]
  var i835 = i833[30]
  var i834 = []
  for(var i = 0; i < i835.length; i += 1) {
    i834.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i835[i + 0]) );
  }
  i832.lightmaps = i834
  i832.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i833[31], i832.lightProbes)
  i832.lightmapsMode = i833[32]
  i832.mixedBakeMode = i833[33]
  i832.environmentLightingMode = i833[34]
  i832.ambientProbe = new pc.SphericalHarmonicsL2(i833[35])
  i832.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i833[36])
  i832.useReferenceAmbientProbe = !!i833[37]
  request.r(i833[38], i833[39], 0, i832, 'customReflection')
  request.r(i833[40], i833[41], 0, i832, 'defaultReflection')
  i832.defaultReflectionMode = i833[42]
  i832.defaultReflectionResolution = i833[43]
  i832.sunLightObjectId = i833[44]
  i832.pixelLightCount = i833[45]
  i832.defaultReflectionHDR = !!i833[46]
  i832.hasLightDataAsset = !!i833[47]
  i832.hasManualGenerate = !!i833[48]
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i839 = data
  request.r(i839[0], i839[1], 0, i838, 'lightmapColor')
  request.r(i839[2], i839[3], 0, i838, 'lightmapDirection')
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i840 = root || new UnityEngine.LightProbes()
  var i841 = data
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i849 = data
  var i851 = i849[0]
  var i850 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i851.length; i += 1) {
    i850.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i851[i + 0]));
  }
  i848.ShaderCompilationErrors = i850
  i848.name = i849[1]
  i848.guid = i849[2]
  var i853 = i849[3]
  var i852 = []
  for(var i = 0; i < i853.length; i += 1) {
    i852.push( i853[i + 0] );
  }
  i848.shaderDefinedKeywords = i852
  var i855 = i849[4]
  var i854 = []
  for(var i = 0; i < i855.length; i += 1) {
    i854.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i855[i + 0]) );
  }
  i848.passes = i854
  var i857 = i849[5]
  var i856 = []
  for(var i = 0; i < i857.length; i += 1) {
    i856.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i857[i + 0]) );
  }
  i848.usePasses = i856
  var i859 = i849[6]
  var i858 = []
  for(var i = 0; i < i859.length; i += 1) {
    i858.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i859[i + 0]) );
  }
  i848.defaultParameterValues = i858
  request.r(i849[7], i849[8], 0, i848, 'unityFallbackShader')
  i848.readDepth = !!i849[9]
  i848.isCreatedByShaderGraph = !!i849[10]
  i848.disableBatching = !!i849[11]
  i848.compiled = !!i849[12]
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i863 = data
  i862.shaderName = i863[0]
  i862.errorMessage = i863[1]
  return i862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i868 = root || new pc.UnityShaderPass()
  var i869 = data
  i868.id = i869[0]
  i868.subShaderIndex = i869[1]
  i868.name = i869[2]
  i868.passType = i869[3]
  i868.grabPassTextureName = i869[4]
  i868.usePass = !!i869[5]
  i868.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i869[6], i868.zTest)
  i868.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i869[7], i868.zWrite)
  i868.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i869[8], i868.culling)
  i868.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i869[9], i868.blending)
  i868.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i869[10], i868.alphaBlending)
  i868.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i869[11], i868.colorWriteMask)
  i868.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i869[12], i868.offsetUnits)
  i868.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i869[13], i868.offsetFactor)
  i868.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i869[14], i868.stencilRef)
  i868.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i869[15], i868.stencilReadMask)
  i868.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i869[16], i868.stencilWriteMask)
  i868.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i869[17], i868.stencilOp)
  i868.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i869[18], i868.stencilOpFront)
  i868.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i869[19], i868.stencilOpBack)
  var i871 = i869[20]
  var i870 = []
  for(var i = 0; i < i871.length; i += 1) {
    i870.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i871[i + 0]) );
  }
  i868.tags = i870
  var i873 = i869[21]
  var i872 = []
  for(var i = 0; i < i873.length; i += 1) {
    i872.push( i873[i + 0] );
  }
  i868.passDefinedKeywords = i872
  var i875 = i869[22]
  var i874 = []
  for(var i = 0; i < i875.length; i += 1) {
    i874.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i875[i + 0]) );
  }
  i868.passDefinedKeywordGroups = i874
  var i877 = i869[23]
  var i876 = []
  for(var i = 0; i < i877.length; i += 1) {
    i876.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i877[i + 0]) );
  }
  i868.variants = i876
  var i879 = i869[24]
  var i878 = []
  for(var i = 0; i < i879.length; i += 1) {
    i878.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i879[i + 0]) );
  }
  i868.excludedVariants = i878
  i868.hasDepthReader = !!i869[25]
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i881 = data
  i880.val = i881[0]
  i880.name = i881[1]
  return i880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i883 = data
  i882.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i883[0], i882.src)
  i882.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i883[1], i882.dst)
  i882.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i883[2], i882.op)
  return i882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i885 = data
  i884.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i885[0], i884.pass)
  i884.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i885[1], i884.fail)
  i884.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i885[2], i884.zFail)
  i884.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i885[3], i884.comp)
  return i884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i889 = data
  i888.name = i889[0]
  i888.value = i889[1]
  return i888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i893 = data
  var i895 = i893[0]
  var i894 = []
  for(var i = 0; i < i895.length; i += 1) {
    i894.push( i895[i + 0] );
  }
  i892.keywords = i894
  i892.hasDiscard = !!i893[1]
  return i892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i899 = data
  i898.passId = i899[0]
  i898.subShaderIndex = i899[1]
  var i901 = i899[2]
  var i900 = []
  for(var i = 0; i < i901.length; i += 1) {
    i900.push( i901[i + 0] );
  }
  i898.keywords = i900
  i898.vertexProgram = i899[3]
  i898.fragmentProgram = i899[4]
  i898.exportedForWebGl2 = !!i899[5]
  i898.readDepth = !!i899[6]
  return i898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i905 = data
  request.r(i905[0], i905[1], 0, i904, 'shader')
  i904.pass = i905[2]
  return i904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i909 = data
  i908.name = i909[0]
  i908.type = i909[1]
  i908.value = new pc.Vec4( i909[2], i909[3], i909[4], i909[5] )
  i908.textureValue = i909[6]
  i908.shaderPropertyFlag = i909[7]
  return i908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i911 = data
  i910.name = i911[0]
  request.r(i911[1], i911[2], 0, i910, 'texture')
  i910.aabb = i911[3]
  i910.vertices = i911[4]
  i910.triangles = i911[5]
  i910.textureRect = UnityEngine.Rect.MinMaxRect(i911[6], i911[7], i911[8], i911[9])
  i910.packedRect = UnityEngine.Rect.MinMaxRect(i911[10], i911[11], i911[12], i911[13])
  i910.border = new pc.Vec4( i911[14], i911[15], i911[16], i911[17] )
  i910.transparency = i911[18]
  i910.bounds = i911[19]
  i910.pixelsPerUnit = i911[20]
  i910.textureWidth = i911[21]
  i910.textureHeight = i911[22]
  i910.nativeSize = new pc.Vec2( i911[23], i911[24] )
  i910.pivot = new pc.Vec2( i911[25], i911[26] )
  i910.textureRectOffset = new pc.Vec2( i911[27], i911[28] )
  return i910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i913 = data
  i912.name = i913[0]
  return i912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i915 = data
  i914.name = i915[0]
  i914.wrapMode = i915[1]
  i914.isLooping = !!i915[2]
  i914.length = i915[3]
  var i917 = i915[4]
  var i916 = []
  for(var i = 0; i < i917.length; i += 1) {
    i916.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i917[i + 0]) );
  }
  i914.curves = i916
  var i919 = i915[5]
  var i918 = []
  for(var i = 0; i < i919.length; i += 1) {
    i918.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i919[i + 0]) );
  }
  i914.events = i918
  i914.halfPrecision = !!i915[6]
  i914._frameRate = i915[7]
  i914.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i915[8], i914.localBounds)
  i914.hasMuscleCurves = !!i915[9]
  var i921 = i915[10]
  var i920 = []
  for(var i = 0; i < i921.length; i += 1) {
    i920.push( i921[i + 0] );
  }
  i914.clipMuscleConstant = i920
  i914.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i915[11], i914.clipBindingConstant)
  return i914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i925 = data
  i924.path = i925[0]
  i924.hash = i925[1]
  i924.componentType = i925[2]
  i924.property = i925[3]
  i924.keys = i925[4]
  var i927 = i925[5]
  var i926 = []
  for(var i = 0; i < i927.length; i += 1) {
    i926.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i927[i + 0]) );
  }
  i924.objectReferenceKeys = i926
  return i924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i931 = data
  i930.time = i931[0]
  request.r(i931[1], i931[2], 0, i930, 'value')
  return i930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i935 = data
  i934.functionName = i935[0]
  i934.floatParameter = i935[1]
  i934.intParameter = i935[2]
  i934.stringParameter = i935[3]
  request.r(i935[4], i935[5], 0, i934, 'objectReferenceParameter')
  i934.time = i935[6]
  return i934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i937 = data
  i936.center = new pc.Vec3( i937[0], i937[1], i937[2] )
  i936.extends = new pc.Vec3( i937[3], i937[4], i937[5] )
  return i936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i940 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i941 = data
  var i943 = i941[0]
  var i942 = []
  for(var i = 0; i < i943.length; i += 1) {
    i942.push( i943[i + 0] );
  }
  i940.genericBindings = i942
  var i945 = i941[1]
  var i944 = []
  for(var i = 0; i < i945.length; i += 1) {
    i944.push( i945[i + 0] );
  }
  i940.pptrCurveMapping = i944
  return i940
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i947 = data
  i946.name = i947[0]
  i946.ascent = i947[1]
  i946.originalLineHeight = i947[2]
  i946.fontSize = i947[3]
  var i949 = i947[4]
  var i948 = []
  for(var i = 0; i < i949.length; i += 1) {
    i948.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i949[i + 0]) );
  }
  i946.characterInfo = i948
  request.r(i947[5], i947[6], 0, i946, 'texture')
  i946.originalFontSize = i947[7]
  return i946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i953 = data
  i952.index = i953[0]
  i952.advance = i953[1]
  i952.bearing = i953[2]
  i952.glyphWidth = i953[3]
  i952.glyphHeight = i953[4]
  i952.minX = i953[5]
  i952.maxX = i953[6]
  i952.minY = i953[7]
  i952.maxY = i953[8]
  i952.uvBottomLeftX = i953[9]
  i952.uvBottomLeftY = i953[10]
  i952.uvBottomRightX = i953[11]
  i952.uvBottomRightY = i953[12]
  i952.uvTopLeftX = i953[13]
  i952.uvTopLeftY = i953[14]
  i952.uvTopRightX = i953[15]
  i952.uvTopRightY = i953[16]
  return i952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i955 = data
  i954.name = i955[0]
  var i957 = i955[1]
  var i956 = []
  for(var i = 0; i < i957.length; i += 1) {
    i956.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i957[i + 0]) );
  }
  i954.layers = i956
  var i959 = i955[2]
  var i958 = []
  for(var i = 0; i < i959.length; i += 1) {
    i958.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i959[i + 0]) );
  }
  i954.parameters = i958
  i954.animationClips = i955[3]
  i954.avatarUnsupported = i955[4]
  return i954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i963 = data
  i962.name = i963[0]
  i962.defaultWeight = i963[1]
  i962.blendingMode = i963[2]
  i962.avatarMask = i963[3]
  i962.syncedLayerIndex = i963[4]
  i962.syncedLayerAffectsTiming = !!i963[5]
  i962.syncedLayers = i963[6]
  i962.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i963[7], i962.stateMachine)
  return i962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i964 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i965 = data
  i964.id = i965[0]
  i964.name = i965[1]
  i964.path = i965[2]
  var i967 = i965[3]
  var i966 = []
  for(var i = 0; i < i967.length; i += 1) {
    i966.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i967[i + 0]) );
  }
  i964.states = i966
  var i969 = i965[4]
  var i968 = []
  for(var i = 0; i < i969.length; i += 1) {
    i968.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i969[i + 0]) );
  }
  i964.machines = i968
  var i971 = i965[5]
  var i970 = []
  for(var i = 0; i < i971.length; i += 1) {
    i970.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i971[i + 0]) );
  }
  i964.entryStateTransitions = i970
  var i973 = i965[6]
  var i972 = []
  for(var i = 0; i < i973.length; i += 1) {
    i972.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i973[i + 0]) );
  }
  i964.exitStateTransitions = i972
  var i975 = i965[7]
  var i974 = []
  for(var i = 0; i < i975.length; i += 1) {
    i974.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i975[i + 0]) );
  }
  i964.anyStateTransitions = i974
  i964.defaultStateId = i965[8]
  return i964
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i979 = data
  i978.id = i979[0]
  i978.name = i979[1]
  i978.cycleOffset = i979[2]
  i978.cycleOffsetParameter = i979[3]
  i978.cycleOffsetParameterActive = !!i979[4]
  i978.mirror = !!i979[5]
  i978.mirrorParameter = i979[6]
  i978.mirrorParameterActive = !!i979[7]
  i978.motionId = i979[8]
  i978.nameHash = i979[9]
  i978.fullPathHash = i979[10]
  i978.speed = i979[11]
  i978.speedParameter = i979[12]
  i978.speedParameterActive = !!i979[13]
  i978.tag = i979[14]
  i978.tagHash = i979[15]
  i978.writeDefaultValues = !!i979[16]
  var i981 = i979[17]
  var i980 = []
  for(var i = 0; i < i981.length; i += 2) {
  request.r(i981[i + 0], i981[i + 1], 2, i980, '')
  }
  i978.behaviours = i980
  var i983 = i979[18]
  var i982 = []
  for(var i = 0; i < i983.length; i += 1) {
    i982.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i983[i + 0]) );
  }
  i978.transitions = i982
  return i978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i989 = data
  i988.fullPath = i989[0]
  i988.canTransitionToSelf = !!i989[1]
  i988.duration = i989[2]
  i988.exitTime = i989[3]
  i988.hasExitTime = !!i989[4]
  i988.hasFixedDuration = !!i989[5]
  i988.interruptionSource = i989[6]
  i988.offset = i989[7]
  i988.orderedInterruption = !!i989[8]
  i988.destinationStateId = i989[9]
  i988.isExit = !!i989[10]
  i988.mute = !!i989[11]
  i988.solo = !!i989[12]
  var i991 = i989[13]
  var i990 = []
  for(var i = 0; i < i991.length; i += 1) {
    i990.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i991[i + 0]) );
  }
  i988.conditions = i990
  return i988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i997 = data
  i996.destinationStateId = i997[0]
  i996.isExit = !!i997[1]
  i996.mute = !!i997[2]
  i996.solo = !!i997[3]
  var i999 = i997[4]
  var i998 = []
  for(var i = 0; i < i999.length; i += 1) {
    i998.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i999[i + 0]) );
  }
  i996.conditions = i998
  return i996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1003 = data
  i1002.defaultBool = !!i1003[0]
  i1002.defaultFloat = i1003[1]
  i1002.defaultInt = i1003[2]
  i1002.name = i1003[3]
  i1002.nameHash = i1003[4]
  i1002.type = i1003[5]
  return i1002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1005 = data
  i1004.name = i1005[0]
  i1004.bytes64 = i1005[1]
  i1004.data = i1005[2]
  return i1004
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1006 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1007 = data
  request.r(i1007[0], i1007[1], 0, i1006, 'atlas')
  i1006.normalStyle = i1007[2]
  i1006.normalSpacingOffset = i1007[3]
  i1006.boldStyle = i1007[4]
  i1006.boldSpacing = i1007[5]
  i1006.italicStyle = i1007[6]
  i1006.tabSize = i1007[7]
  i1006.hashCode = i1007[8]
  request.r(i1007[9], i1007[10], 0, i1006, 'material')
  i1006.materialHashCode = i1007[11]
  i1006.m_Version = i1007[12]
  i1006.m_SourceFontFileGUID = i1007[13]
  request.r(i1007[14], i1007[15], 0, i1006, 'm_SourceFontFile_EditorRef')
  request.r(i1007[16], i1007[17], 0, i1006, 'm_SourceFontFile')
  i1006.m_AtlasPopulationMode = i1007[18]
  i1006.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1007[19], i1006.m_FaceInfo)
  var i1009 = i1007[20]
  var i1008 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1009.length; i += 1) {
    i1008.add(request.d('UnityEngine.TextCore.Glyph', i1009[i + 0]));
  }
  i1006.m_GlyphTable = i1008
  var i1011 = i1007[21]
  var i1010 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1011.length; i += 1) {
    i1010.add(request.d('TMPro.TMP_Character', i1011[i + 0]));
  }
  i1006.m_CharacterTable = i1010
  var i1013 = i1007[22]
  var i1012 = []
  for(var i = 0; i < i1013.length; i += 2) {
  request.r(i1013[i + 0], i1013[i + 1], 2, i1012, '')
  }
  i1006.m_AtlasTextures = i1012
  i1006.m_AtlasTextureIndex = i1007[23]
  i1006.m_IsMultiAtlasTexturesEnabled = !!i1007[24]
  i1006.m_ClearDynamicDataOnBuild = !!i1007[25]
  var i1015 = i1007[26]
  var i1014 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1015.length; i += 1) {
    i1014.add(request.d('UnityEngine.TextCore.GlyphRect', i1015[i + 0]));
  }
  i1006.m_UsedGlyphRects = i1014
  var i1017 = i1007[27]
  var i1016 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1017.length; i += 1) {
    i1016.add(request.d('UnityEngine.TextCore.GlyphRect', i1017[i + 0]));
  }
  i1006.m_FreeGlyphRects = i1016
  i1006.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1007[28], i1006.m_fontInfo)
  i1006.m_AtlasWidth = i1007[29]
  i1006.m_AtlasHeight = i1007[30]
  i1006.m_AtlasPadding = i1007[31]
  i1006.m_AtlasRenderMode = i1007[32]
  var i1019 = i1007[33]
  var i1018 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1019.length; i += 1) {
    i1018.add(request.d('TMPro.TMP_Glyph', i1019[i + 0]));
  }
  i1006.m_glyphInfoList = i1018
  i1006.m_KerningTable = request.d('TMPro.KerningTable', i1007[34], i1006.m_KerningTable)
  i1006.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1007[35], i1006.m_FontFeatureTable)
  var i1021 = i1007[36]
  var i1020 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1021.length; i += 2) {
  request.r(i1021[i + 0], i1021[i + 1], 1, i1020, '')
  }
  i1006.fallbackFontAssets = i1020
  var i1023 = i1007[37]
  var i1022 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1023.length; i += 2) {
  request.r(i1023[i + 0], i1023[i + 1], 1, i1022, '')
  }
  i1006.m_FallbackFontAssetTable = i1022
  i1006.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1007[38], i1006.m_CreationSettings)
  var i1025 = i1007[39]
  var i1024 = []
  for(var i = 0; i < i1025.length; i += 1) {
    i1024.push( request.d('TMPro.TMP_FontWeightPair', i1025[i + 0]) );
  }
  i1006.m_FontWeightTable = i1024
  var i1027 = i1007[40]
  var i1026 = []
  for(var i = 0; i < i1027.length; i += 1) {
    i1026.push( request.d('TMPro.TMP_FontWeightPair', i1027[i + 0]) );
  }
  i1006.fontWeights = i1026
  return i1006
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1028 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1029 = data
  i1028.m_FaceIndex = i1029[0]
  i1028.m_FamilyName = i1029[1]
  i1028.m_StyleName = i1029[2]
  i1028.m_PointSize = i1029[3]
  i1028.m_Scale = i1029[4]
  i1028.m_UnitsPerEM = i1029[5]
  i1028.m_LineHeight = i1029[6]
  i1028.m_AscentLine = i1029[7]
  i1028.m_CapLine = i1029[8]
  i1028.m_MeanLine = i1029[9]
  i1028.m_Baseline = i1029[10]
  i1028.m_DescentLine = i1029[11]
  i1028.m_SuperscriptOffset = i1029[12]
  i1028.m_SuperscriptSize = i1029[13]
  i1028.m_SubscriptOffset = i1029[14]
  i1028.m_SubscriptSize = i1029[15]
  i1028.m_UnderlineOffset = i1029[16]
  i1028.m_UnderlineThickness = i1029[17]
  i1028.m_StrikethroughOffset = i1029[18]
  i1028.m_StrikethroughThickness = i1029[19]
  i1028.m_TabWidth = i1029[20]
  return i1028
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1032 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1033 = data
  i1032.m_Index = i1033[0]
  i1032.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1033[1], i1032.m_Metrics)
  i1032.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1033[2], i1032.m_GlyphRect)
  i1032.m_Scale = i1033[3]
  i1032.m_AtlasIndex = i1033[4]
  i1032.m_ClassDefinitionType = i1033[5]
  return i1032
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1034 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1035 = data
  i1034.m_Width = i1035[0]
  i1034.m_Height = i1035[1]
  i1034.m_HorizontalBearingX = i1035[2]
  i1034.m_HorizontalBearingY = i1035[3]
  i1034.m_HorizontalAdvance = i1035[4]
  return i1034
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1036 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1037 = data
  i1036.m_X = i1037[0]
  i1036.m_Y = i1037[1]
  i1036.m_Width = i1037[2]
  i1036.m_Height = i1037[3]
  return i1036
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1040 = root || request.c( 'TMPro.TMP_Character' )
  var i1041 = data
  i1040.m_ElementType = i1041[0]
  i1040.m_Unicode = i1041[1]
  i1040.m_GlyphIndex = i1041[2]
  i1040.m_Scale = i1041[3]
  return i1040
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1046 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1047 = data
  i1046.Name = i1047[0]
  i1046.PointSize = i1047[1]
  i1046.Scale = i1047[2]
  i1046.CharacterCount = i1047[3]
  i1046.LineHeight = i1047[4]
  i1046.Baseline = i1047[5]
  i1046.Ascender = i1047[6]
  i1046.CapHeight = i1047[7]
  i1046.Descender = i1047[8]
  i1046.CenterLine = i1047[9]
  i1046.SuperscriptOffset = i1047[10]
  i1046.SubscriptOffset = i1047[11]
  i1046.SubSize = i1047[12]
  i1046.Underline = i1047[13]
  i1046.UnderlineThickness = i1047[14]
  i1046.strikethrough = i1047[15]
  i1046.strikethroughThickness = i1047[16]
  i1046.TabWidth = i1047[17]
  i1046.Padding = i1047[18]
  i1046.AtlasWidth = i1047[19]
  i1046.AtlasHeight = i1047[20]
  return i1046
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1050 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1051 = data
  i1050.id = i1051[0]
  i1050.x = i1051[1]
  i1050.y = i1051[2]
  i1050.width = i1051[3]
  i1050.height = i1051[4]
  i1050.xOffset = i1051[5]
  i1050.yOffset = i1051[6]
  i1050.xAdvance = i1051[7]
  i1050.scale = i1051[8]
  return i1050
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1052 = root || request.c( 'TMPro.KerningTable' )
  var i1053 = data
  var i1055 = i1053[0]
  var i1054 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1055.length; i += 1) {
    i1054.add(request.d('TMPro.KerningPair', i1055[i + 0]));
  }
  i1052.kerningPairs = i1054
  return i1052
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1058 = root || request.c( 'TMPro.KerningPair' )
  var i1059 = data
  i1058.xOffset = i1059[0]
  i1058.m_FirstGlyph = i1059[1]
  i1058.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1059[2], i1058.m_FirstGlyphAdjustments)
  i1058.m_SecondGlyph = i1059[3]
  i1058.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1059[4], i1058.m_SecondGlyphAdjustments)
  i1058.m_IgnoreSpacingAdjustments = !!i1059[5]
  return i1058
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1060 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1061 = data
  var i1063 = i1061[0]
  var i1062 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1063.length; i += 1) {
    i1062.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1063[i + 0]));
  }
  i1060.m_GlyphPairAdjustmentRecords = i1062
  return i1060
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1066 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1067 = data
  i1066.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1067[0], i1066.m_FirstAdjustmentRecord)
  i1066.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1067[1], i1066.m_SecondAdjustmentRecord)
  i1066.m_FeatureLookupFlags = i1067[2]
  return i1066
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1070 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1071 = data
  i1070.sourceFontFileName = i1071[0]
  i1070.sourceFontFileGUID = i1071[1]
  i1070.pointSizeSamplingMode = i1071[2]
  i1070.pointSize = i1071[3]
  i1070.padding = i1071[4]
  i1070.packingMode = i1071[5]
  i1070.atlasWidth = i1071[6]
  i1070.atlasHeight = i1071[7]
  i1070.characterSetSelectionMode = i1071[8]
  i1070.characterSequence = i1071[9]
  i1070.referencedFontAssetGUID = i1071[10]
  i1070.referencedTextAssetGUID = i1071[11]
  i1070.fontStyle = i1071[12]
  i1070.fontStyleModifier = i1071[13]
  i1070.renderMode = i1071[14]
  i1070.includeFontFeatures = !!i1071[15]
  return i1070
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1074 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1075 = data
  request.r(i1075[0], i1075[1], 0, i1074, 'regularTypeface')
  request.r(i1075[2], i1075[3], 0, i1074, 'italicTypeface')
  return i1074
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1076 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1077 = data
  i1076.useSafeMode = !!i1077[0]
  i1076.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1077[1], i1076.safeModeOptions)
  i1076.timeScale = i1077[2]
  i1076.unscaledTimeScale = i1077[3]
  i1076.useSmoothDeltaTime = !!i1077[4]
  i1076.maxSmoothUnscaledTime = i1077[5]
  i1076.rewindCallbackMode = i1077[6]
  i1076.showUnityEditorReport = !!i1077[7]
  i1076.logBehaviour = i1077[8]
  i1076.drawGizmos = !!i1077[9]
  i1076.defaultRecyclable = !!i1077[10]
  i1076.defaultAutoPlay = i1077[11]
  i1076.defaultUpdateType = i1077[12]
  i1076.defaultTimeScaleIndependent = !!i1077[13]
  i1076.defaultEaseType = i1077[14]
  i1076.defaultEaseOvershootOrAmplitude = i1077[15]
  i1076.defaultEasePeriod = i1077[16]
  i1076.defaultAutoKill = !!i1077[17]
  i1076.defaultLoopType = i1077[18]
  i1076.debugMode = !!i1077[19]
  i1076.debugStoreTargetId = !!i1077[20]
  i1076.showPreviewPanel = !!i1077[21]
  i1076.storeSettingsLocation = i1077[22]
  i1076.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1077[23], i1076.modules)
  i1076.createASMDEF = !!i1077[24]
  i1076.showPlayingTweens = !!i1077[25]
  i1076.showPausedTweens = !!i1077[26]
  return i1076
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1078 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1079 = data
  i1078.logBehaviour = i1079[0]
  i1078.nestedTweenFailureBehaviour = i1079[1]
  return i1078
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1080 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1081 = data
  i1080.showPanel = !!i1081[0]
  i1080.audioEnabled = !!i1081[1]
  i1080.physicsEnabled = !!i1081[2]
  i1080.physics2DEnabled = !!i1081[3]
  i1080.spriteEnabled = !!i1081[4]
  i1080.uiEnabled = !!i1081[5]
  i1080.textMeshProEnabled = !!i1081[6]
  i1080.tk2DEnabled = !!i1081[7]
  i1080.deAudioEnabled = !!i1081[8]
  i1080.deUnityExtendedEnabled = !!i1081[9]
  i1080.epoOutlineEnabled = !!i1081[10]
  return i1080
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1082 = root || request.c( 'TMPro.TMP_Settings' )
  var i1083 = data
  i1082.m_enableWordWrapping = !!i1083[0]
  i1082.m_enableKerning = !!i1083[1]
  i1082.m_enableExtraPadding = !!i1083[2]
  i1082.m_enableTintAllSprites = !!i1083[3]
  i1082.m_enableParseEscapeCharacters = !!i1083[4]
  i1082.m_EnableRaycastTarget = !!i1083[5]
  i1082.m_GetFontFeaturesAtRuntime = !!i1083[6]
  i1082.m_missingGlyphCharacter = i1083[7]
  i1082.m_warningsDisabled = !!i1083[8]
  request.r(i1083[9], i1083[10], 0, i1082, 'm_defaultFontAsset')
  i1082.m_defaultFontAssetPath = i1083[11]
  i1082.m_defaultFontSize = i1083[12]
  i1082.m_defaultAutoSizeMinRatio = i1083[13]
  i1082.m_defaultAutoSizeMaxRatio = i1083[14]
  i1082.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1083[15], i1083[16] )
  i1082.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1083[17], i1083[18] )
  i1082.m_autoSizeTextContainer = !!i1083[19]
  i1082.m_IsTextObjectScaleStatic = !!i1083[20]
  var i1085 = i1083[21]
  var i1084 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1085.length; i += 2) {
  request.r(i1085[i + 0], i1085[i + 1], 1, i1084, '')
  }
  i1082.m_fallbackFontAssets = i1084
  i1082.m_matchMaterialPreset = !!i1083[22]
  request.r(i1083[23], i1083[24], 0, i1082, 'm_defaultSpriteAsset')
  i1082.m_defaultSpriteAssetPath = i1083[25]
  i1082.m_enableEmojiSupport = !!i1083[26]
  i1082.m_MissingCharacterSpriteUnicode = i1083[27]
  i1082.m_defaultColorGradientPresetsPath = i1083[28]
  request.r(i1083[29], i1083[30], 0, i1082, 'm_defaultStyleSheet')
  i1082.m_StyleSheetsResourcePath = i1083[31]
  request.r(i1083[32], i1083[33], 0, i1082, 'm_leadingCharacters')
  request.r(i1083[34], i1083[35], 0, i1082, 'm_followingCharacters')
  i1082.m_UseModernHangulLineBreakingRules = !!i1083[36]
  return i1082
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1086 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1087 = data
  i1086.m_GlyphIndex = i1087[0]
  i1086.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1087[1], i1086.m_GlyphValueRecord)
  return i1086
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1088 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1089 = data
  i1088.m_XPlacement = i1089[0]
  i1088.m_YPlacement = i1089[1]
  i1088.m_XAdvance = i1089[2]
  i1088.m_YAdvance = i1089[3]
  return i1088
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1090 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1091 = data
  request.r(i1091[0], i1091[1], 0, i1090, 'spriteSheet')
  var i1093 = i1091[2]
  var i1092 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1093.length; i += 1) {
    i1092.add(request.d('TMPro.TMP_Sprite', i1093[i + 0]));
  }
  i1090.spriteInfoList = i1092
  var i1095 = i1091[3]
  var i1094 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1095.length; i += 2) {
  request.r(i1095[i + 0], i1095[i + 1], 1, i1094, '')
  }
  i1090.fallbackSpriteAssets = i1094
  i1090.hashCode = i1091[4]
  request.r(i1091[5], i1091[6], 0, i1090, 'material')
  i1090.materialHashCode = i1091[7]
  i1090.m_Version = i1091[8]
  i1090.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1091[9], i1090.m_FaceInfo)
  var i1097 = i1091[10]
  var i1096 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1097.length; i += 1) {
    i1096.add(request.d('TMPro.TMP_SpriteCharacter', i1097[i + 0]));
  }
  i1090.m_SpriteCharacterTable = i1096
  var i1099 = i1091[11]
  var i1098 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1099.length; i += 1) {
    i1098.add(request.d('TMPro.TMP_SpriteGlyph', i1099[i + 0]));
  }
  i1090.m_SpriteGlyphTable = i1098
  return i1090
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1102 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1103 = data
  i1102.name = i1103[0]
  i1102.hashCode = i1103[1]
  i1102.unicode = i1103[2]
  i1102.pivot = new pc.Vec2( i1103[3], i1103[4] )
  request.r(i1103[5], i1103[6], 0, i1102, 'sprite')
  i1102.id = i1103[7]
  i1102.x = i1103[8]
  i1102.y = i1103[9]
  i1102.width = i1103[10]
  i1102.height = i1103[11]
  i1102.xOffset = i1103[12]
  i1102.yOffset = i1103[13]
  i1102.xAdvance = i1103[14]
  i1102.scale = i1103[15]
  return i1102
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1108 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1109 = data
  i1108.m_Name = i1109[0]
  i1108.m_HashCode = i1109[1]
  i1108.m_ElementType = i1109[2]
  i1108.m_Unicode = i1109[3]
  i1108.m_GlyphIndex = i1109[4]
  i1108.m_Scale = i1109[5]
  return i1108
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1112 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1113 = data
  request.r(i1113[0], i1113[1], 0, i1112, 'sprite')
  i1112.m_Index = i1113[2]
  i1112.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1113[3], i1112.m_Metrics)
  i1112.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1113[4], i1112.m_GlyphRect)
  i1112.m_Scale = i1113[5]
  i1112.m_AtlasIndex = i1113[6]
  i1112.m_ClassDefinitionType = i1113[7]
  return i1112
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1114 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1115 = data
  var i1117 = i1115[0]
  var i1116 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1117.length; i += 1) {
    i1116.add(request.d('TMPro.TMP_Style', i1117[i + 0]));
  }
  i1114.m_StyleList = i1116
  return i1114
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1120 = root || request.c( 'TMPro.TMP_Style' )
  var i1121 = data
  i1120.m_Name = i1121[0]
  i1120.m_HashCode = i1121[1]
  i1120.m_OpeningDefinition = i1121[2]
  i1120.m_ClosingDefinition = i1121[3]
  i1120.m_OpeningTagArray = i1121[4]
  i1120.m_ClosingTagArray = i1121[5]
  i1120.m_OpeningTagUnicodeArray = i1121[6]
  i1120.m_ClosingTagUnicodeArray = i1121[7]
  return i1120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1122 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1123 = data
  var i1125 = i1123[0]
  var i1124 = []
  for(var i = 0; i < i1125.length; i += 1) {
    i1124.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1125[i + 0]) );
  }
  i1122.files = i1124
  i1122.componentToPrefabIds = i1123[1]
  return i1122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1128 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1129 = data
  i1128.path = i1129[0]
  request.r(i1129[1], i1129[2], 0, i1128, 'unityObject')
  return i1128
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1130 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1131 = data
  var i1133 = i1131[0]
  var i1132 = []
  for(var i = 0; i < i1133.length; i += 1) {
    i1132.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1133[i + 0]) );
  }
  i1130.scriptsExecutionOrder = i1132
  var i1135 = i1131[1]
  var i1134 = []
  for(var i = 0; i < i1135.length; i += 1) {
    i1134.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1135[i + 0]) );
  }
  i1130.sortingLayers = i1134
  var i1137 = i1131[2]
  var i1136 = []
  for(var i = 0; i < i1137.length; i += 1) {
    i1136.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1137[i + 0]) );
  }
  i1130.cullingLayers = i1136
  i1130.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1131[3], i1130.timeSettings)
  i1130.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1131[4], i1130.physicsSettings)
  i1130.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1131[5], i1130.physics2DSettings)
  i1130.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1131[6], i1130.qualitySettings)
  i1130.enableRealtimeShadows = !!i1131[7]
  i1130.enableAutoInstancing = !!i1131[8]
  i1130.enableStaticBatching = !!i1131[9]
  i1130.enableDynamicBatching = !!i1131[10]
  i1130.lightmapEncodingQuality = i1131[11]
  i1130.desiredColorSpace = i1131[12]
  var i1139 = i1131[13]
  var i1138 = []
  for(var i = 0; i < i1139.length; i += 1) {
    i1138.push( i1139[i + 0] );
  }
  i1130.allTags = i1138
  return i1130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1143 = data
  i1142.name = i1143[0]
  i1142.value = i1143[1]
  return i1142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1147 = data
  i1146.id = i1147[0]
  i1146.name = i1147[1]
  i1146.value = i1147[2]
  return i1146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1151 = data
  i1150.id = i1151[0]
  i1150.name = i1151[1]
  return i1150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1153 = data
  i1152.fixedDeltaTime = i1153[0]
  i1152.maximumDeltaTime = i1153[1]
  i1152.timeScale = i1153[2]
  i1152.maximumParticleTimestep = i1153[3]
  return i1152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1154 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1155 = data
  i1154.gravity = new pc.Vec3( i1155[0], i1155[1], i1155[2] )
  i1154.defaultSolverIterations = i1155[3]
  i1154.bounceThreshold = i1155[4]
  i1154.autoSyncTransforms = !!i1155[5]
  i1154.autoSimulation = !!i1155[6]
  var i1157 = i1155[7]
  var i1156 = []
  for(var i = 0; i < i1157.length; i += 1) {
    i1156.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1157[i + 0]) );
  }
  i1154.collisionMatrix = i1156
  return i1154
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1160 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1161 = data
  i1160.enabled = !!i1161[0]
  i1160.layerId = i1161[1]
  i1160.otherLayerId = i1161[2]
  return i1160
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1162 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1163 = data
  request.r(i1163[0], i1163[1], 0, i1162, 'material')
  i1162.gravity = new pc.Vec2( i1163[2], i1163[3] )
  i1162.positionIterations = i1163[4]
  i1162.velocityIterations = i1163[5]
  i1162.velocityThreshold = i1163[6]
  i1162.maxLinearCorrection = i1163[7]
  i1162.maxAngularCorrection = i1163[8]
  i1162.maxTranslationSpeed = i1163[9]
  i1162.maxRotationSpeed = i1163[10]
  i1162.baumgarteScale = i1163[11]
  i1162.baumgarteTOIScale = i1163[12]
  i1162.timeToSleep = i1163[13]
  i1162.linearSleepTolerance = i1163[14]
  i1162.angularSleepTolerance = i1163[15]
  i1162.defaultContactOffset = i1163[16]
  i1162.autoSimulation = !!i1163[17]
  i1162.queriesHitTriggers = !!i1163[18]
  i1162.queriesStartInColliders = !!i1163[19]
  i1162.callbacksOnDisable = !!i1163[20]
  i1162.reuseCollisionCallbacks = !!i1163[21]
  i1162.autoSyncTransforms = !!i1163[22]
  var i1165 = i1163[23]
  var i1164 = []
  for(var i = 0; i < i1165.length; i += 1) {
    i1164.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1165[i + 0]) );
  }
  i1162.collisionMatrix = i1164
  return i1162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1169 = data
  i1168.enabled = !!i1169[0]
  i1168.layerId = i1169[1]
  i1168.otherLayerId = i1169[2]
  return i1168
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1171 = data
  var i1173 = i1171[0]
  var i1172 = []
  for(var i = 0; i < i1173.length; i += 1) {
    i1172.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1173[i + 0]) );
  }
  i1170.qualityLevels = i1172
  var i1175 = i1171[1]
  var i1174 = []
  for(var i = 0; i < i1175.length; i += 1) {
    i1174.push( i1175[i + 0] );
  }
  i1170.names = i1174
  i1170.shadows = i1171[2]
  i1170.anisotropicFiltering = i1171[3]
  i1170.antiAliasing = i1171[4]
  i1170.lodBias = i1171[5]
  i1170.shadowCascades = i1171[6]
  i1170.shadowDistance = i1171[7]
  i1170.shadowmaskMode = i1171[8]
  i1170.shadowProjection = i1171[9]
  i1170.shadowResolution = i1171[10]
  i1170.softParticles = !!i1171[11]
  i1170.softVegetation = !!i1171[12]
  i1170.activeColorSpace = i1171[13]
  i1170.desiredColorSpace = i1171[14]
  i1170.masterTextureLimit = i1171[15]
  i1170.maxQueuedFrames = i1171[16]
  i1170.particleRaycastBudget = i1171[17]
  i1170.pixelLightCount = i1171[18]
  i1170.realtimeReflectionProbes = !!i1171[19]
  i1170.shadowCascade2Split = i1171[20]
  i1170.shadowCascade4Split = new pc.Vec3( i1171[21], i1171[22], i1171[23] )
  i1170.streamingMipmapsActive = !!i1171[24]
  i1170.vSyncCount = i1171[25]
  i1170.asyncUploadBufferSize = i1171[26]
  i1170.asyncUploadTimeSlice = i1171[27]
  i1170.billboardsFaceCameraPosition = !!i1171[28]
  i1170.shadowNearPlaneOffset = i1171[29]
  i1170.streamingMipmapsMemoryBudget = i1171[30]
  i1170.maximumLODLevel = i1171[31]
  i1170.streamingMipmapsAddAllCameras = !!i1171[32]
  i1170.streamingMipmapsMaxLevelReduction = i1171[33]
  i1170.streamingMipmapsRenderersPerFrame = i1171[34]
  i1170.resolutionScalingFixedDPIFactor = i1171[35]
  i1170.streamingMipmapsMaxFileIORequests = i1171[36]
  i1170.currentQualityLevel = i1171[37]
  return i1170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1180 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1181 = data
  i1180.mode = i1181[0]
  i1180.parameter = i1181[1]
  i1180.threshold = i1181[2]
  return i1180
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1182 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1183 = data
  i1182.xPlacement = i1183[0]
  i1182.yPlacement = i1183[1]
  i1182.xAdvance = i1183[2]
  i1182.yAdvance = i1183[3]
  return i1182
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"disableBatching":11,"compiled":12},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"52":[53],"54":[53],"55":[53],"56":[53],"57":[53],"58":[53],"59":[60],"61":[11],"62":[63],"64":[63],"65":[63],"66":[63],"67":[63],"68":[63],"69":[63],"70":[26],"71":[26],"72":[26],"73":[26],"74":[26],"75":[26],"76":[26],"77":[26],"78":[26],"79":[26],"80":[26],"81":[26],"82":[26],"83":[11],"84":[85],"86":[87],"88":[87],"28":[27],"89":[11],"13":[11],"90":[91],"92":[93],"94":[85,95],"96":[97],"98":[93],"99":[100],"101":[93],"102":[93],"103":[104],"105":[104],"106":[93],"107":[108],"109":[2],"110":[108],"111":[27],"112":[27],"31":[28],"34":[33,27],"113":[27],"30":[28],"114":[27],"115":[27],"116":[27],"117":[27],"118":[27],"119":[27],"120":[27],"121":[27],"122":[27],"123":[33,27],"124":[27],"125":[27],"126":[27],"127":[27],"128":[33,27],"129":[27],"130":[38],"131":[38],"39":[38],"132":[38],"133":[11],"134":[11],"135":[136],"137":[11],"138":[139],"140":[27],"141":[33,27],"142":[85],"97":[33,27],"143":[7,85],"93":[85],"144":[85,95],"145":[63],"146":[26],"147":[139],"148":[104],"149":[27],"150":[85,27],"16":[27,33],"151":[27],"152":[33,27],"153":[85],"154":[33,27],"155":[27],"156":[108]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Material","UnityEngine.MonoBehaviour","Disk","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.Texture2D","HandHint","UnityEngine.Camera","UnityEngine.AudioListener","CheckSize","UnityEngine.GameObject","GameManager","TMPro.TextMeshProUGUI","TutorialManager","AudioManager","UnityEngine.AudioSource","UnityEngine.AudioClip","TrayManager","Tray","DragItem","UnityEngine.BoxCollider2D","Slot","UnityEngine.Rigidbody2D","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","CountdownTimer","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","TMPro.TMP_FontAsset","UnityEngine.UI.Button","ScalePopLoop","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","DiskTransform","EndCart_Lose","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","Button","RotateLoop","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.Font","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","CameraAutoSize","Spine.Unity.Examples.BasicPlatformerController","UnityEngine.CharacterController","Spine.Unity.Examples.SkeletonGhost","Spine.Unity.SkeletonRenderer","Spine.Unity.Examples.RenderExistingMesh","UnityEngine.MeshFilter","Spine.Unity.Examples.SkeletonGraphicRenderTexture","Spine.Unity.SkeletonGraphic","Spine.Unity.Examples.SkeletonRenderTexture","Spine.Unity.Examples.SkeletonRenderTextureFadeout","Spine.Unity.Examples.SkeletonRenderTextureBase","Spine.Unity.Examples.SkeletonRagdoll","Spine.Unity.Examples.SkeletonRagdoll2D","Spine.Unity.Examples.SkeletonUtilityEyeConstraint","Spine.Unity.SkeletonUtilityBone","Spine.Unity.Examples.SkeletonUtilityGroundConstraint","Spine.Unity.Examples.SpineGauge","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","Spine.Unity.SkeletonPartsRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.62f3";

Deserializers.productName = "Prj_Demo";

Deserializers.lunaInitializationTime = "12/18/2025 04:11:57";

Deserializers.lunaDaysRunning = "8.3";

Deserializers.lunaVersion = "6.4.0";

Deserializers.lunaSHA = "6639120529aa36186c6141b5c3fb20246c28bff0";

Deserializers.creativeName = "Grill_Sort_Demo01";

Deserializers.lunaAppID = "35714";

Deserializers.projectId = "01007caba134ace46b9e4290577324b9";

Deserializers.packagesInfo = "com.unity.textmeshpro: 3.0.9\ncom.unity.timeline: 1.8.9\ncom.unity.ugui: 2.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "True";

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "1686";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4544";

Deserializers.runtimeAnalysisExcludedModules = "physics3d";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.2DProject";

Deserializers.disableAntiAliasing = false;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "d3c4786e-2110-4dd4-b3a1-668623928a48";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

