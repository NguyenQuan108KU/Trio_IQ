var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i650 = root || request.c( 'UnityEngine.JointSpring' )
  var i651 = data
  i650.spring = i651[0]
  i650.damper = i651[1]
  i650.targetPosition = i651[2]
  return i650
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i652 = root || request.c( 'UnityEngine.JointMotor' )
  var i653 = data
  i652.m_TargetVelocity = i653[0]
  i652.m_Force = i653[1]
  i652.m_FreeSpin = i653[2]
  return i652
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i654 = root || request.c( 'UnityEngine.JointLimits' )
  var i655 = data
  i654.m_Min = i655[0]
  i654.m_Max = i655[1]
  i654.m_Bounciness = i655[2]
  i654.m_BounceMinVelocity = i655[3]
  i654.m_ContactDistance = i655[4]
  i654.minBounce = i655[5]
  i654.maxBounce = i655[6]
  return i654
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i656 = root || request.c( 'UnityEngine.JointDrive' )
  var i657 = data
  i656.m_PositionSpring = i657[0]
  i656.m_PositionDamper = i657[1]
  i656.m_MaximumForce = i657[2]
  i656.m_UseAcceleration = i657[3]
  return i656
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i658 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i659 = data
  i658.m_Spring = i659[0]
  i658.m_Damper = i659[1]
  return i658
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i660 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i661 = data
  i660.m_Limit = i661[0]
  i660.m_Bounciness = i661[1]
  i660.m_ContactDistance = i661[2]
  return i660
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i662 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i663 = data
  i662.m_ExtremumSlip = i663[0]
  i662.m_ExtremumValue = i663[1]
  i662.m_AsymptoteSlip = i663[2]
  i662.m_AsymptoteValue = i663[3]
  i662.m_Stiffness = i663[4]
  return i662
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i664 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i665 = data
  i664.m_LowerAngle = i665[0]
  i664.m_UpperAngle = i665[1]
  return i664
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i666 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i667 = data
  i666.m_MotorSpeed = i667[0]
  i666.m_MaximumMotorTorque = i667[1]
  return i666
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i668 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i669 = data
  i668.m_DampingRatio = i669[0]
  i668.m_Frequency = i669[1]
  i668.m_Angle = i669[2]
  return i668
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i670 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i671 = data
  i670.m_LowerTranslation = i671[0]
  i670.m_UpperTranslation = i671[1]
  return i670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i673 = data
  i672.position = new pc.Vec3( i673[0], i673[1], i673[2] )
  i672.scale = new pc.Vec3( i673[3], i673[4], i673[5] )
  i672.rotation = new pc.Quat(i673[6], i673[7], i673[8], i673[9])
  return i672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i675 = data
  i674.color = new pc.Color(i675[0], i675[1], i675[2], i675[3])
  request.r(i675[4], i675[5], 0, i674, 'sprite')
  i674.flipX = !!i675[6]
  i674.flipY = !!i675[7]
  i674.drawMode = i675[8]
  i674.size = new pc.Vec2( i675[9], i675[10] )
  i674.tileMode = i675[11]
  i674.adaptiveModeThreshold = i675[12]
  i674.maskInteraction = i675[13]
  i674.spriteSortPoint = i675[14]
  i674.enabled = !!i675[15]
  request.r(i675[16], i675[17], 0, i674, 'sharedMaterial')
  var i677 = i675[18]
  var i676 = []
  for(var i = 0; i < i677.length; i += 2) {
  request.r(i677[i + 0], i677[i + 1], 2, i676, '')
  }
  i674.sharedMaterials = i676
  i674.receiveShadows = !!i675[19]
  i674.shadowCastingMode = i675[20]
  i674.sortingLayerID = i675[21]
  i674.sortingOrder = i675[22]
  i674.lightmapIndex = i675[23]
  i674.lightmapSceneIndex = i675[24]
  i674.lightmapScaleOffset = new pc.Vec4( i675[25], i675[26], i675[27], i675[28] )
  i674.lightProbeUsage = i675[29]
  i674.reflectionProbeUsage = i675[30]
  return i674
}

Deserializers["DragItem"] = function (request, data, root) {
  var i680 = root || request.c( 'DragItem' )
  var i681 = data
  i680.focusOutlineSize = i681[0]
  i680.outlineTweenTime = i681[1]
  i680.itemType = i681[2]
  i680.lockItem = !!i681[3]
  return i680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i683 = data
  i682.usedByComposite = !!i683[0]
  i682.autoTiling = !!i683[1]
  i682.size = new pc.Vec2( i683[2], i683[3] )
  i682.edgeRadius = i683[4]
  i682.enabled = !!i683[5]
  i682.isTrigger = !!i683[6]
  i682.usedByEffector = !!i683[7]
  i682.density = i683[8]
  i682.offset = new pc.Vec2( i683[9], i683[10] )
  request.r(i683[11], i683[12], 0, i682, 'material')
  return i682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i685 = data
  i684.bodyType = i685[0]
  request.r(i685[1], i685[2], 0, i684, 'material')
  i684.simulated = !!i685[3]
  i684.useAutoMass = !!i685[4]
  i684.mass = i685[5]
  i684.drag = i685[6]
  i684.angularDrag = i685[7]
  i684.gravityScale = i685[8]
  i684.collisionDetectionMode = i685[9]
  i684.sleepMode = i685[10]
  i684.constraints = i685[11]
  return i684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i687 = data
  i686.name = i687[0]
  i686.tagId = i687[1]
  i686.enabled = !!i687[2]
  i686.isStatic = !!i687[3]
  i686.layer = i687[4]
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i688 = root || new pc.UnityMaterial()
  var i689 = data
  i688.name = i689[0]
  request.r(i689[1], i689[2], 0, i688, 'shader')
  i688.renderQueue = i689[3]
  i688.enableInstancing = !!i689[4]
  var i691 = i689[5]
  var i690 = []
  for(var i = 0; i < i691.length; i += 1) {
    i690.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i691[i + 0]) );
  }
  i688.floatParameters = i690
  var i693 = i689[6]
  var i692 = []
  for(var i = 0; i < i693.length; i += 1) {
    i692.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i693[i + 0]) );
  }
  i688.colorParameters = i692
  var i695 = i689[7]
  var i694 = []
  for(var i = 0; i < i695.length; i += 1) {
    i694.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i695[i + 0]) );
  }
  i688.vectorParameters = i694
  var i697 = i689[8]
  var i696 = []
  for(var i = 0; i < i697.length; i += 1) {
    i696.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i697[i + 0]) );
  }
  i688.textureParameters = i696
  var i699 = i689[9]
  var i698 = []
  for(var i = 0; i < i699.length; i += 1) {
    i698.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i699[i + 0]) );
  }
  i688.materialFlags = i698
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i703 = data
  i702.name = i703[0]
  i702.value = i703[1]
  return i702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i707 = data
  i706.name = i707[0]
  i706.value = new pc.Color(i707[1], i707[2], i707[3], i707[4])
  return i706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i711 = data
  i710.name = i711[0]
  i710.value = new pc.Vec4( i711[1], i711[2], i711[3], i711[4] )
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i715 = data
  i714.name = i715[0]
  request.r(i715[1], i715[2], 0, i714, 'value')
  return i714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i719 = data
  i718.name = i719[0]
  i718.enabled = !!i719[1]
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i721 = data
  i720.name = i721[0]
  i720.width = i721[1]
  i720.height = i721[2]
  i720.mipmapCount = i721[3]
  i720.anisoLevel = i721[4]
  i720.filterMode = i721[5]
  i720.hdr = !!i721[6]
  i720.format = i721[7]
  i720.wrapMode = i721[8]
  i720.alphaIsTransparency = !!i721[9]
  i720.alphaSource = i721[10]
  i720.graphicsFormat = i721[11]
  i720.sRGBTexture = !!i721[12]
  i720.desiredColorSpace = i721[13]
  i720.wrapU = i721[14]
  i720.wrapV = i721[15]
  return i720
}

Deserializers["Disk"] = function (request, data, root) {
  var i722 = root || request.c( 'Disk' )
  var i723 = data
  i722.requiredCount = i723[0]
  i722.moveDistance = i723[1]
  i722.moveTime = i723[2]
  return i722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i725 = data
  request.r(i725[0], i725[1], 0, i724, 'animatorController')
  request.r(i725[2], i725[3], 0, i724, 'avatar')
  i724.updateMode = i725[4]
  i724.hasTransformHierarchy = !!i725[5]
  i724.applyRootMotion = !!i725[6]
  var i727 = i725[7]
  var i726 = []
  for(var i = 0; i < i727.length; i += 2) {
  request.r(i727[i + 0], i727[i + 1], 2, i726, '')
  }
  i724.humanBones = i726
  i724.enabled = !!i725[8]
  return i724
}

Deserializers["Tray"] = function (request, data, root) {
  var i730 = root || request.c( 'Tray' )
  var i731 = data
  i730.spacing = i731[0]
  i730.moveTime = i731[1]
  request.r(i731[2], i731[3], 0, i730, 'diskPrefab')
  request.r(i731[4], i731[5], 0, i730, 'diskTransform')
  i730.shrinkTime = i731[6]
  i730.itemToDiskTime = i731[7]
  i730.attachDelay = i731[8]
  i730.followSmooth = i731[9]
  i730.isCompleted = !!i731[10]
  var i733 = i731[11]
  var i732 = []
  for(var i = 0; i < i733.length; i += 2) {
  request.r(i733[i + 0], i733[i + 1], 2, i732, '')
  }
  i730.slots = i732
  request.r(i731[12], i731[13], 0, i730, 'fireObject')
  i730.isSpecial = !!i731[14]
  i730.diskItemScale = new pc.Vec3( i731[15], i731[16], i731[17] )
  return i730
}

Deserializers["Slot"] = function (request, data, root) {
  var i736 = root || request.c( 'Slot' )
  var i737 = data
  request.r(i737[0], i737[1], 0, i736, 'anchor')
  request.r(i737[2], i737[3], 0, i736, 'currentItem')
  i736.isLocked = !!i737[4]
  return i736
}

Deserializers["HandHint"] = function (request, data, root) {
  var i738 = root || request.c( 'HandHint' )
  var i739 = data
  request.r(i739[0], i739[1], 0, i738, 'previewRenderer')
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i741 = data
  i740.name = i741[0]
  i740.index = i741[1]
  i740.startup = !!i741[2]
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i743 = data
  i742.aspect = i743[0]
  i742.orthographic = !!i743[1]
  i742.orthographicSize = i743[2]
  i742.backgroundColor = new pc.Color(i743[3], i743[4], i743[5], i743[6])
  i742.nearClipPlane = i743[7]
  i742.farClipPlane = i743[8]
  i742.fieldOfView = i743[9]
  i742.depth = i743[10]
  i742.clearFlags = i743[11]
  i742.cullingMask = i743[12]
  i742.rect = i743[13]
  request.r(i743[14], i743[15], 0, i742, 'targetTexture')
  i742.usePhysicalProperties = !!i743[16]
  i742.focalLength = i743[17]
  i742.sensorSize = new pc.Vec2( i743[18], i743[19] )
  i742.lensShift = new pc.Vec2( i743[20], i743[21] )
  i742.gateFit = i743[22]
  i742.commandBufferCount = i743[23]
  i742.cameraType = i743[24]
  i742.enabled = !!i743[25]
  return i742
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i744 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i745 = data
  request.r(i745[0], i745[1], 0, i744, 'm_FirstSelected')
  i744.m_sendNavigationEvents = !!i745[2]
  i744.m_DragThreshold = i745[3]
  return i744
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i746 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i747 = data
  i746.m_HorizontalAxis = i747[0]
  i746.m_VerticalAxis = i747[1]
  i746.m_SubmitButton = i747[2]
  i746.m_CancelButton = i747[3]
  i746.m_InputActionsPerSecond = i747[4]
  i746.m_RepeatDelay = i747[5]
  i746.m_ForceModuleActive = !!i747[6]
  i746.m_SendPointerHoverToParent = !!i747[7]
  return i746
}

Deserializers["TrayManager"] = function (request, data, root) {
  var i748 = root || request.c( 'TrayManager' )
  var i749 = data
  i748.spacing = i749[0]
  i748.visibleCount = i749[1]
  i748.moveTime = i749[2]
  var i751 = i749[3]
  var i750 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i751.length; i += 2) {
  request.r(i751[i + 0], i751[i + 1], 1, i750, '')
  }
  i748.listTray = i750
  i748.curve = new pc.AnimationCurve( { keys_flow: i749[4] } )
  i748.canCountIdle = !!i749[5]
  i748.spawnHeightMultiplier = i749[6]
  i748.isFirstTutorial = !!i749[7]
  i748.tutorialDelay = i749[8]
  i748.idleTimer = i749[9]
  i748.tutorialEnabled = !!i749[10]
  request.r(i749[11], i749[12], 0, i748, 'manualTray')
  request.r(i749[13], i749[14], 0, i748, 'manualItem')
  i748.justEndedInteract = !!i749[15]
  i748.step = i749[16]
  request.r(i749[17], i749[18], 0, i748, 'specialSpawnPoint')
  request.r(i749[19], i749[20], 0, i748, 'specialTray')
  i748.specialTrayScale = new pc.Vec3( i749[21], i749[22], i749[23] )
  i748.specialTrayLocalPos = new pc.Vec3( i749[24], i749[25], i749[26] )
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i755 = data
  i754.frontSortingLayerID = i755[0]
  i754.frontSortingOrder = i755[1]
  i754.backSortingLayerID = i755[2]
  i754.backSortingOrder = i755[3]
  i754.alphaCutoff = i755[4]
  request.r(i755[5], i755[6], 0, i754, 'sprite')
  i754.tileMode = i755[7]
  i754.isCustomRangeActive = !!i755[8]
  i754.spriteSortPoint = i755[9]
  i754.enabled = !!i755[10]
  request.r(i755[11], i755[12], 0, i754, 'sharedMaterial')
  var i757 = i755[13]
  var i756 = []
  for(var i = 0; i < i757.length; i += 2) {
  request.r(i757[i + 0], i757[i + 1], 2, i756, '')
  }
  i754.sharedMaterials = i756
  i754.receiveShadows = !!i755[14]
  i754.shadowCastingMode = i755[15]
  i754.sortingLayerID = i755[16]
  i754.sortingOrder = i755[17]
  i754.lightmapIndex = i755[18]
  i754.lightmapSceneIndex = i755[19]
  i754.lightmapScaleOffset = new pc.Vec4( i755[20], i755[21], i755[22], i755[23] )
  i754.lightProbeUsage = i755[24]
  i754.reflectionProbeUsage = i755[25]
  return i754
}

Deserializers["ConveyorBelt"] = function (request, data, root) {
  var i758 = root || request.c( 'ConveyorBelt' )
  var i759 = data
  i758.speed = i759[0]
  i758.spacing = i759[1]
  i758.leftLimit = i759[2]
  i758.removeFirstCount = i759[3]
  request.r(i759[4], i759[5], 0, i758, 'tutorial')
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i761 = data
  i760.pivot = new pc.Vec2( i761[0], i761[1] )
  i760.anchorMin = new pc.Vec2( i761[2], i761[3] )
  i760.anchorMax = new pc.Vec2( i761[4], i761[5] )
  i760.sizeDelta = new pc.Vec2( i761[6], i761[7] )
  i760.anchoredPosition3D = new pc.Vec3( i761[8], i761[9], i761[10] )
  i760.rotation = new pc.Quat(i761[11], i761[12], i761[13], i761[14])
  i760.scale = new pc.Vec3( i761[15], i761[16], i761[17] )
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i763 = data
  i762.planeDistance = i763[0]
  i762.referencePixelsPerUnit = i763[1]
  i762.isFallbackOverlay = !!i763[2]
  i762.renderMode = i763[3]
  i762.renderOrder = i763[4]
  i762.sortingLayerName = i763[5]
  i762.sortingOrder = i763[6]
  i762.scaleFactor = i763[7]
  request.r(i763[8], i763[9], 0, i762, 'worldCamera')
  i762.overrideSorting = !!i763[10]
  i762.pixelPerfect = !!i763[11]
  i762.targetDisplay = i763[12]
  i762.overridePixelPerfect = !!i763[13]
  i762.enabled = !!i763[14]
  return i762
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i764 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i765 = data
  i764.m_UiScaleMode = i765[0]
  i764.m_ReferencePixelsPerUnit = i765[1]
  i764.m_ScaleFactor = i765[2]
  i764.m_ReferenceResolution = new pc.Vec2( i765[3], i765[4] )
  i764.m_ScreenMatchMode = i765[5]
  i764.m_MatchWidthOrHeight = i765[6]
  i764.m_PhysicalUnit = i765[7]
  i764.m_FallbackScreenDPI = i765[8]
  i764.m_DefaultSpriteDPI = i765[9]
  i764.m_DynamicPixelsPerUnit = i765[10]
  i764.m_PresetInfoIsWorld = !!i765[11]
  return i764
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i766 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i767 = data
  i766.m_IgnoreReversedGraphics = !!i767[0]
  i766.m_BlockingObjects = i767[1]
  i766.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i767[2] )
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i769 = data
  i768.cullTransparentMesh = !!i769[0]
  return i768
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i770 = root || request.c( 'UnityEngine.UI.Image' )
  var i771 = data
  request.r(i771[0], i771[1], 0, i770, 'm_Sprite')
  i770.m_Type = i771[2]
  i770.m_PreserveAspect = !!i771[3]
  i770.m_FillCenter = !!i771[4]
  i770.m_FillMethod = i771[5]
  i770.m_FillAmount = i771[6]
  i770.m_FillClockwise = !!i771[7]
  i770.m_FillOrigin = i771[8]
  i770.m_UseSpriteMesh = !!i771[9]
  i770.m_PixelsPerUnitMultiplier = i771[10]
  request.r(i771[11], i771[12], 0, i770, 'm_Material')
  i770.m_Maskable = !!i771[13]
  i770.m_Color = new pc.Color(i771[14], i771[15], i771[16], i771[17])
  i770.m_RaycastTarget = !!i771[18]
  i770.m_RaycastPadding = new pc.Vec4( i771[19], i771[20], i771[21], i771[22] )
  return i770
}

Deserializers["EndCart_Win"] = function (request, data, root) {
  var i772 = root || request.c( 'EndCart_Win' )
  var i773 = data
  request.r(i773[0], i773[1], 0, i772, 'confettiLeft')
  request.r(i773[2], i773[3], 0, i772, 'confettiRight')
  request.r(i773[4], i773[5], 0, i772, 'winText')
  request.r(i773[6], i773[7], 0, i772, 'chest')
  request.r(i773[8], i773[9], 0, i772, 'button')
  i772.textDelay = i773[10]
  i772.chestDelay = i773[11]
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i775 = data
  request.r(i775[0], i775[1], 0, i774, 'additionalVertexStreams')
  i774.enabled = !!i775[2]
  request.r(i775[3], i775[4], 0, i774, 'sharedMaterial')
  var i777 = i775[5]
  var i776 = []
  for(var i = 0; i < i777.length; i += 2) {
  request.r(i777[i + 0], i777[i + 1], 2, i776, '')
  }
  i774.sharedMaterials = i776
  i774.receiveShadows = !!i775[6]
  i774.shadowCastingMode = i775[7]
  i774.sortingLayerID = i775[8]
  i774.sortingOrder = i775[9]
  i774.lightmapIndex = i775[10]
  i774.lightmapSceneIndex = i775[11]
  i774.lightmapScaleOffset = new pc.Vec4( i775[12], i775[13], i775[14], i775[15] )
  i774.lightProbeUsage = i775[16]
  i774.reflectionProbeUsage = i775[17]
  return i774
}

Deserializers["Spine.Unity.SkeletonAnimation"] = function (request, data, root) {
  var i778 = root || request.c( 'Spine.Unity.SkeletonAnimation' )
  var i779 = data
  i778.loop = !!i779[0]
  i778.timeScale = i779[1]
  request.r(i779[2], i779[3], 0, i778, 'skeletonDataAsset')
  i778.initialSkinName = i779[4]
  i778.fixPrefabOverrideViaMeshFilter = i779[5]
  i778.initialFlipX = !!i779[6]
  i778.initialFlipY = !!i779[7]
  i778.updateWhenInvisible = i779[8]
  i778.zSpacing = i779[9]
  i778.useClipping = !!i779[10]
  i778.immutableTriangles = !!i779[11]
  i778.pmaVertexColors = !!i779[12]
  i778.clearStateOnDisable = !!i779[13]
  i778.tintBlack = !!i779[14]
  i778.singleSubmesh = !!i779[15]
  i778.fixDrawOrder = !!i779[16]
  i778.addNormals = !!i779[17]
  i778.calculateTangents = !!i779[18]
  i778.maskInteraction = i779[19]
  i778.maskMaterials = request.d('Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials', i779[20], i778.maskMaterials)
  i778.disableRenderingOnOverride = !!i779[21]
  i778.updateTiming = i779[22]
  i778.unscaledTime = !!i779[23]
  i778._animationName = i779[24]
  var i781 = i779[25]
  var i780 = []
  for(var i = 0; i < i781.length; i += 1) {
    i780.push( i781[i + 0] );
  }
  i778.separatorSlotNames = i780
  i778.physicsPositionInheritanceFactor = new pc.Vec2( i779[26], i779[27] )
  i778.physicsRotationInheritanceFactor = i779[28]
  request.r(i779[29], i779[30], 0, i778, 'physicsMovementRelativeTo')
  return i778
}

Deserializers["Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials"] = function (request, data, root) {
  var i782 = root || request.c( 'Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials' )
  var i783 = data
  var i785 = i783[0]
  var i784 = []
  for(var i = 0; i < i785.length; i += 2) {
  request.r(i785[i + 0], i785[i + 1], 2, i784, '')
  }
  i782.materialsMaskDisabled = i784
  var i787 = i783[1]
  var i786 = []
  for(var i = 0; i < i787.length; i += 2) {
  request.r(i787[i + 0], i787[i + 1], 2, i786, '')
  }
  i782.materialsInsideMask = i786
  var i789 = i783[2]
  var i788 = []
  for(var i = 0; i < i789.length; i += 2) {
  request.r(i789[i + 0], i789[i + 1], 2, i788, '')
  }
  i782.materialsOutsideMask = i788
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i793 = data
  request.r(i793[0], i793[1], 0, i792, 'sharedMesh')
  return i792
}

Deserializers["Button"] = function (request, data, root) {
  var i794 = root || request.c( 'Button' )
  var i795 = data
  return i794
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i796 = root || request.c( 'UnityEngine.UI.Button' )
  var i797 = data
  i796.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i797[0], i796.m_OnClick)
  i796.m_Navigation = request.d('UnityEngine.UI.Navigation', i797[1], i796.m_Navigation)
  i796.m_Transition = i797[2]
  i796.m_Colors = request.d('UnityEngine.UI.ColorBlock', i797[3], i796.m_Colors)
  i796.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i797[4], i796.m_SpriteState)
  i796.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i797[5], i796.m_AnimationTriggers)
  i796.m_Interactable = !!i797[6]
  request.r(i797[7], i797[8], 0, i796, 'm_TargetGraphic')
  return i796
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i798 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i799 = data
  i798.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i799[0], i798.m_PersistentCalls)
  return i798
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i800 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i801 = data
  var i803 = i801[0]
  var i802 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i803.length; i += 1) {
    i802.add(request.d('UnityEngine.Events.PersistentCall', i803[i + 0]));
  }
  i800.m_Calls = i802
  return i800
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i806 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i807 = data
  request.r(i807[0], i807[1], 0, i806, 'm_Target')
  i806.m_TargetAssemblyTypeName = i807[2]
  i806.m_MethodName = i807[3]
  i806.m_Mode = i807[4]
  i806.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i807[5], i806.m_Arguments)
  i806.m_CallState = i807[6]
  return i806
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i808 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i809 = data
  request.r(i809[0], i809[1], 0, i808, 'm_ObjectArgument')
  i808.m_ObjectArgumentAssemblyTypeName = i809[2]
  i808.m_IntArgument = i809[3]
  i808.m_FloatArgument = i809[4]
  i808.m_StringArgument = i809[5]
  i808.m_BoolArgument = !!i809[6]
  return i808
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i810 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i811 = data
  i810.m_Mode = i811[0]
  i810.m_WrapAround = !!i811[1]
  request.r(i811[2], i811[3], 0, i810, 'm_SelectOnUp')
  request.r(i811[4], i811[5], 0, i810, 'm_SelectOnDown')
  request.r(i811[6], i811[7], 0, i810, 'm_SelectOnLeft')
  request.r(i811[8], i811[9], 0, i810, 'm_SelectOnRight')
  return i810
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i812 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i813 = data
  i812.m_NormalColor = new pc.Color(i813[0], i813[1], i813[2], i813[3])
  i812.m_HighlightedColor = new pc.Color(i813[4], i813[5], i813[6], i813[7])
  i812.m_PressedColor = new pc.Color(i813[8], i813[9], i813[10], i813[11])
  i812.m_SelectedColor = new pc.Color(i813[12], i813[13], i813[14], i813[15])
  i812.m_DisabledColor = new pc.Color(i813[16], i813[17], i813[18], i813[19])
  i812.m_ColorMultiplier = i813[20]
  i812.m_FadeDuration = i813[21]
  return i812
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i814 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i815 = data
  request.r(i815[0], i815[1], 0, i814, 'm_HighlightedSprite')
  request.r(i815[2], i815[3], 0, i814, 'm_PressedSprite')
  request.r(i815[4], i815[5], 0, i814, 'm_SelectedSprite')
  request.r(i815[6], i815[7], 0, i814, 'm_DisabledSprite')
  return i814
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i816 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i817 = data
  i816.m_NormalTrigger = i817[0]
  i816.m_HighlightedTrigger = i817[1]
  i816.m_PressedTrigger = i817[2]
  i816.m_SelectedTrigger = i817[3]
  i816.m_DisabledTrigger = i817[4]
  return i816
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i818 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i819 = data
  i818.m_hasFontAssetChanged = !!i819[0]
  request.r(i819[1], i819[2], 0, i818, 'm_baseMaterial')
  i818.m_maskOffset = new pc.Vec4( i819[3], i819[4], i819[5], i819[6] )
  i818.m_text = i819[7]
  i818.m_isRightToLeft = !!i819[8]
  request.r(i819[9], i819[10], 0, i818, 'm_fontAsset')
  request.r(i819[11], i819[12], 0, i818, 'm_sharedMaterial')
  var i821 = i819[13]
  var i820 = []
  for(var i = 0; i < i821.length; i += 2) {
  request.r(i821[i + 0], i821[i + 1], 2, i820, '')
  }
  i818.m_fontSharedMaterials = i820
  request.r(i819[14], i819[15], 0, i818, 'm_fontMaterial')
  var i823 = i819[16]
  var i822 = []
  for(var i = 0; i < i823.length; i += 2) {
  request.r(i823[i + 0], i823[i + 1], 2, i822, '')
  }
  i818.m_fontMaterials = i822
  i818.m_fontColor32 = UnityEngine.Color32.ConstructColor(i819[17], i819[18], i819[19], i819[20])
  i818.m_fontColor = new pc.Color(i819[21], i819[22], i819[23], i819[24])
  i818.m_enableVertexGradient = !!i819[25]
  i818.m_colorMode = i819[26]
  i818.m_fontColorGradient = request.d('TMPro.VertexGradient', i819[27], i818.m_fontColorGradient)
  request.r(i819[28], i819[29], 0, i818, 'm_fontColorGradientPreset')
  request.r(i819[30], i819[31], 0, i818, 'm_spriteAsset')
  i818.m_tintAllSprites = !!i819[32]
  request.r(i819[33], i819[34], 0, i818, 'm_StyleSheet')
  i818.m_TextStyleHashCode = i819[35]
  i818.m_overrideHtmlColors = !!i819[36]
  i818.m_faceColor = UnityEngine.Color32.ConstructColor(i819[37], i819[38], i819[39], i819[40])
  i818.m_fontSize = i819[41]
  i818.m_fontSizeBase = i819[42]
  i818.m_fontWeight = i819[43]
  i818.m_enableAutoSizing = !!i819[44]
  i818.m_fontSizeMin = i819[45]
  i818.m_fontSizeMax = i819[46]
  i818.m_fontStyle = i819[47]
  i818.m_HorizontalAlignment = i819[48]
  i818.m_VerticalAlignment = i819[49]
  i818.m_textAlignment = i819[50]
  i818.m_characterSpacing = i819[51]
  i818.m_wordSpacing = i819[52]
  i818.m_lineSpacing = i819[53]
  i818.m_lineSpacingMax = i819[54]
  i818.m_paragraphSpacing = i819[55]
  i818.m_charWidthMaxAdj = i819[56]
  i818.m_enableWordWrapping = !!i819[57]
  i818.m_wordWrappingRatios = i819[58]
  i818.m_overflowMode = i819[59]
  request.r(i819[60], i819[61], 0, i818, 'm_linkedTextComponent')
  request.r(i819[62], i819[63], 0, i818, 'parentLinkedComponent')
  i818.m_enableKerning = !!i819[64]
  i818.m_enableExtraPadding = !!i819[65]
  i818.checkPaddingRequired = !!i819[66]
  i818.m_isRichText = !!i819[67]
  i818.m_parseCtrlCharacters = !!i819[68]
  i818.m_isOrthographic = !!i819[69]
  i818.m_isCullingEnabled = !!i819[70]
  i818.m_horizontalMapping = i819[71]
  i818.m_verticalMapping = i819[72]
  i818.m_uvLineOffset = i819[73]
  i818.m_geometrySortingOrder = i819[74]
  i818.m_IsTextObjectScaleStatic = !!i819[75]
  i818.m_VertexBufferAutoSizeReduction = !!i819[76]
  i818.m_useMaxVisibleDescender = !!i819[77]
  i818.m_pageToDisplay = i819[78]
  i818.m_margin = new pc.Vec4( i819[79], i819[80], i819[81], i819[82] )
  i818.m_isUsingLegacyAnimationComponent = !!i819[83]
  i818.m_isVolumetricText = !!i819[84]
  request.r(i819[85], i819[86], 0, i818, 'm_Material')
  i818.m_Maskable = !!i819[87]
  i818.m_Color = new pc.Color(i819[88], i819[89], i819[90], i819[91])
  i818.m_RaycastTarget = !!i819[92]
  i818.m_RaycastPadding = new pc.Vec4( i819[93], i819[94], i819[95], i819[96] )
  return i818
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i824 = root || request.c( 'TMPro.VertexGradient' )
  var i825 = data
  i824.topLeft = new pc.Color(i825[0], i825[1], i825[2], i825[3])
  i824.topRight = new pc.Color(i825[4], i825[5], i825[6], i825[7])
  i824.bottomLeft = new pc.Color(i825[8], i825[9], i825[10], i825[11])
  i824.bottomRight = new pc.Color(i825[12], i825[13], i825[14], i825[15])
  return i824
}

Deserializers["AudioManager"] = function (request, data, root) {
  var i826 = root || request.c( 'AudioManager' )
  var i827 = data
  request.r(i827[0], i827[1], 0, i826, 'bgmSource')
  request.r(i827[2], i827[3], 0, i826, 'sfxSource')
  request.r(i827[4], i827[5], 0, i826, 'bgm')
  request.r(i827[6], i827[7], 0, i826, 'drag')
  request.r(i827[8], i827[9], 0, i826, 'drog')
  request.r(i827[10], i827[11], 0, i826, 'lose')
  request.r(i827[12], i827[13], 0, i826, 'pop')
  request.r(i827[14], i827[15], 0, i826, 'wood')
  request.r(i827[16], i827[17], 0, i826, 'win')
  request.r(i827[18], i827[19], 0, i826, 'warningTick')
  request.r(i827[20], i827[21], 0, i826, 'match')
  request.r(i827[22], i827[23], 0, i826, 'sake')
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i829 = data
  request.r(i829[0], i829[1], 0, i828, 'clip')
  request.r(i829[2], i829[3], 0, i828, 'outputAudioMixerGroup')
  i828.playOnAwake = !!i829[4]
  i828.loop = !!i829[5]
  i828.time = i829[6]
  i828.volume = i829[7]
  i828.pitch = i829[8]
  i828.enabled = !!i829[9]
  return i828
}

Deserializers["GameManager"] = function (request, data, root) {
  var i830 = root || request.c( 'GameManager' )
  var i831 = data
  request.r(i831[0], i831[1], 0, i830, 'pointText')
  i830.point = i831[2]
  request.r(i831[3], i831[4], 0, i830, 'ECWin')
  i830.startTimer = !!i831[5]
  i830.ticketCount = i831[6]
  i830.isClickToLog = !!i831[7]
  i830.clicksToLog = i831[8]
  i830.isMatch = !!i831[9]
  i830.clickCount = i831[10]
  i830.isClick = !!i831[11]
  i830.finishGame = !!i831[12]
  i830.startGame = !!i831[13]
  i830.isCheckWin = !!i831[14]
  i830.isCheckLose = !!i831[15]
  i830.isClickStore = !!i831[16]
  return i830
}

Deserializers["PackManager"] = function (request, data, root) {
  var i832 = root || request.c( 'PackManager' )
  var i833 = data
  request.r(i833[0], i833[1], 0, i832, 'packRoot')
  var i835 = i833[2]
  var i834 = new (System.Collections.Generic.List$1(Bridge.ns('PackTarget')))
  for(var i = 0; i < i835.length; i += 2) {
  request.r(i835[i + 0], i835[i + 1], 1, i834, '')
  }
  i832.packPrefabs = i834
  var i837 = i833[3]
  var i836 = new (System.Collections.Generic.List$1(Bridge.ns('PackTarget')))
  for(var i = 0; i < i837.length; i += 2) {
  request.r(i837[i + 0], i837[i + 1], 1, i836, '')
  }
  i832.activePacks = i836
  var i839 = i833[4]
  var i838 = new (System.Collections.Generic.List$1(Bridge.ns('PackTarget')))
  for(var i = 0; i < i839.length; i += 2) {
  request.r(i839[i + 0], i839[i + 1], 1, i838, '')
  }
  i832.packs = i838
  return i832
}

Deserializers["PackTarget"] = function (request, data, root) {
  var i842 = root || request.c( 'PackTarget' )
  var i843 = data
  i842.packType = i843[0]
  request.r(i843[1], i843[2], 0, i842, 'attachPoint')
  i842.slotIndex = i843[3]
  i842.capacity = i843[4]
  i842.currentCount = i843[5]
  i842.isFull = !!i843[6]
  return i842
}

Deserializers["TutorialManager"] = function (request, data, root) {
  var i844 = root || request.c( 'TutorialManager' )
  var i845 = data
  request.r(i845[0], i845[1], 0, i844, 'handPrefab')
  return i844
}

Deserializers["ScalePopLoop"] = function (request, data, root) {
  var i846 = root || request.c( 'ScalePopLoop' )
  var i847 = data
  i846.minScale = new pc.Vec3( i847[0], i847[1], i847[2] )
  i846.maxScale = new pc.Vec3( i847[3], i847[4], i847[5] )
  i846.duration = i847[6]
  i846.ease = i847[7]
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i849 = data
  i848.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i849[0], i848.main)
  i848.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i849[1], i848.colorBySpeed)
  i848.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i849[2], i848.colorOverLifetime)
  i848.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i849[3], i848.emission)
  i848.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i849[4], i848.rotationBySpeed)
  i848.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i849[5], i848.rotationOverLifetime)
  i848.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i849[6], i848.shape)
  i848.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i849[7], i848.sizeBySpeed)
  i848.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i849[8], i848.sizeOverLifetime)
  i848.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i849[9], i848.textureSheetAnimation)
  i848.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i849[10], i848.velocityOverLifetime)
  i848.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i849[11], i848.noise)
  i848.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i849[12], i848.inheritVelocity)
  i848.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i849[13], i848.forceOverLifetime)
  i848.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i849[14], i848.limitVelocityOverLifetime)
  i848.useAutoRandomSeed = !!i849[15]
  i848.randomSeed = i849[16]
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i850 = root || new pc.ParticleSystemMain()
  var i851 = data
  i850.duration = i851[0]
  i850.loop = !!i851[1]
  i850.prewarm = !!i851[2]
  i850.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i851[3], i850.startDelay)
  i850.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i851[4], i850.startLifetime)
  i850.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i851[5], i850.startSpeed)
  i850.startSize3D = !!i851[6]
  i850.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i851[7], i850.startSizeX)
  i850.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i851[8], i850.startSizeY)
  i850.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i851[9], i850.startSizeZ)
  i850.startRotation3D = !!i851[10]
  i850.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i851[11], i850.startRotationX)
  i850.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i851[12], i850.startRotationY)
  i850.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i851[13], i850.startRotationZ)
  i850.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i851[14], i850.startColor)
  i850.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i851[15], i850.gravityModifier)
  i850.simulationSpace = i851[16]
  request.r(i851[17], i851[18], 0, i850, 'customSimulationSpace')
  i850.simulationSpeed = i851[19]
  i850.useUnscaledTime = !!i851[20]
  i850.scalingMode = i851[21]
  i850.playOnAwake = !!i851[22]
  i850.maxParticles = i851[23]
  i850.emitterVelocityMode = i851[24]
  i850.stopAction = i851[25]
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i852 = root || new pc.MinMaxCurve()
  var i853 = data
  i852.mode = i853[0]
  i852.curveMin = new pc.AnimationCurve( { keys_flow: i853[1] } )
  i852.curveMax = new pc.AnimationCurve( { keys_flow: i853[2] } )
  i852.curveMultiplier = i853[3]
  i852.constantMin = i853[4]
  i852.constantMax = i853[5]
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i854 = root || new pc.MinMaxGradient()
  var i855 = data
  i854.mode = i855[0]
  i854.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i855[1], i854.gradientMin)
  i854.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i855[2], i854.gradientMax)
  i854.colorMin = new pc.Color(i855[3], i855[4], i855[5], i855[6])
  i854.colorMax = new pc.Color(i855[7], i855[8], i855[9], i855[10])
  return i854
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i857 = data
  i856.mode = i857[0]
  var i859 = i857[1]
  var i858 = []
  for(var i = 0; i < i859.length; i += 1) {
    i858.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i859[i + 0]) );
  }
  i856.colorKeys = i858
  var i861 = i857[2]
  var i860 = []
  for(var i = 0; i < i861.length; i += 1) {
    i860.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i861[i + 0]) );
  }
  i856.alphaKeys = i860
  return i856
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i865 = data
  i864.color = new pc.Color(i865[0], i865[1], i865[2], i865[3])
  i864.time = i865[4]
  return i864
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i869 = data
  i868.alpha = i869[0]
  i868.time = i869[1]
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i870 = root || new pc.ParticleSystemColorBySpeed()
  var i871 = data
  i870.enabled = !!i871[0]
  i870.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i871[1], i870.color)
  i870.range = new pc.Vec2( i871[2], i871[3] )
  return i870
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i872 = root || new pc.ParticleSystemColorOverLifetime()
  var i873 = data
  i872.enabled = !!i873[0]
  i872.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i873[1], i872.color)
  return i872
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i874 = root || new pc.ParticleSystemEmitter()
  var i875 = data
  i874.enabled = !!i875[0]
  i874.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i875[1], i874.rateOverTime)
  i874.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i875[2], i874.rateOverDistance)
  var i877 = i875[3]
  var i876 = []
  for(var i = 0; i < i877.length; i += 1) {
    i876.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i877[i + 0]) );
  }
  i874.bursts = i876
  return i874
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i880 = root || new pc.ParticleSystemBurst()
  var i881 = data
  i880.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i881[0], i880.count)
  i880.cycleCount = i881[1]
  i880.minCount = i881[2]
  i880.maxCount = i881[3]
  i880.repeatInterval = i881[4]
  i880.time = i881[5]
  return i880
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i882 = root || new pc.ParticleSystemRotationBySpeed()
  var i883 = data
  i882.enabled = !!i883[0]
  i882.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i883[1], i882.x)
  i882.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i883[2], i882.y)
  i882.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i883[3], i882.z)
  i882.separateAxes = !!i883[4]
  i882.range = new pc.Vec2( i883[5], i883[6] )
  return i882
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i884 = root || new pc.ParticleSystemRotationOverLifetime()
  var i885 = data
  i884.enabled = !!i885[0]
  i884.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i885[1], i884.x)
  i884.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i885[2], i884.y)
  i884.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i885[3], i884.z)
  i884.separateAxes = !!i885[4]
  return i884
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i886 = root || new pc.ParticleSystemShape()
  var i887 = data
  i886.enabled = !!i887[0]
  i886.shapeType = i887[1]
  i886.randomDirectionAmount = i887[2]
  i886.sphericalDirectionAmount = i887[3]
  i886.randomPositionAmount = i887[4]
  i886.alignToDirection = !!i887[5]
  i886.radius = i887[6]
  i886.radiusMode = i887[7]
  i886.radiusSpread = i887[8]
  i886.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i887[9], i886.radiusSpeed)
  i886.radiusThickness = i887[10]
  i886.angle = i887[11]
  i886.length = i887[12]
  i886.boxThickness = new pc.Vec3( i887[13], i887[14], i887[15] )
  i886.meshShapeType = i887[16]
  request.r(i887[17], i887[18], 0, i886, 'mesh')
  request.r(i887[19], i887[20], 0, i886, 'meshRenderer')
  request.r(i887[21], i887[22], 0, i886, 'skinnedMeshRenderer')
  i886.useMeshMaterialIndex = !!i887[23]
  i886.meshMaterialIndex = i887[24]
  i886.useMeshColors = !!i887[25]
  i886.normalOffset = i887[26]
  i886.arc = i887[27]
  i886.arcMode = i887[28]
  i886.arcSpread = i887[29]
  i886.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i887[30], i886.arcSpeed)
  i886.donutRadius = i887[31]
  i886.position = new pc.Vec3( i887[32], i887[33], i887[34] )
  i886.rotation = new pc.Vec3( i887[35], i887[36], i887[37] )
  i886.scale = new pc.Vec3( i887[38], i887[39], i887[40] )
  return i886
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i888 = root || new pc.ParticleSystemSizeBySpeed()
  var i889 = data
  i888.enabled = !!i889[0]
  i888.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i889[1], i888.x)
  i888.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i889[2], i888.y)
  i888.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i889[3], i888.z)
  i888.separateAxes = !!i889[4]
  i888.range = new pc.Vec2( i889[5], i889[6] )
  return i888
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i890 = root || new pc.ParticleSystemSizeOverLifetime()
  var i891 = data
  i890.enabled = !!i891[0]
  i890.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i891[1], i890.x)
  i890.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i891[2], i890.y)
  i890.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i891[3], i890.z)
  i890.separateAxes = !!i891[4]
  return i890
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i892 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i893 = data
  i892.enabled = !!i893[0]
  i892.mode = i893[1]
  i892.animation = i893[2]
  i892.numTilesX = i893[3]
  i892.numTilesY = i893[4]
  i892.useRandomRow = !!i893[5]
  i892.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i893[6], i892.frameOverTime)
  i892.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i893[7], i892.startFrame)
  i892.cycleCount = i893[8]
  i892.rowIndex = i893[9]
  i892.flipU = i893[10]
  i892.flipV = i893[11]
  i892.spriteCount = i893[12]
  var i895 = i893[13]
  var i894 = []
  for(var i = 0; i < i895.length; i += 2) {
  request.r(i895[i + 0], i895[i + 1], 2, i894, '')
  }
  i892.sprites = i894
  return i892
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i898 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i899 = data
  i898.enabled = !!i899[0]
  i898.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i899[1], i898.x)
  i898.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i899[2], i898.y)
  i898.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i899[3], i898.z)
  i898.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i899[4], i898.radial)
  i898.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i899[5], i898.speedModifier)
  i898.space = i899[6]
  i898.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i899[7], i898.orbitalX)
  i898.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i899[8], i898.orbitalY)
  i898.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i899[9], i898.orbitalZ)
  i898.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i899[10], i898.orbitalOffsetX)
  i898.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i899[11], i898.orbitalOffsetY)
  i898.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i899[12], i898.orbitalOffsetZ)
  return i898
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i900 = root || new pc.ParticleSystemNoise()
  var i901 = data
  i900.enabled = !!i901[0]
  i900.separateAxes = !!i901[1]
  i900.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i901[2], i900.strengthX)
  i900.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i901[3], i900.strengthY)
  i900.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i901[4], i900.strengthZ)
  i900.frequency = i901[5]
  i900.damping = !!i901[6]
  i900.octaveCount = i901[7]
  i900.octaveMultiplier = i901[8]
  i900.octaveScale = i901[9]
  i900.quality = i901[10]
  i900.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i901[11], i900.scrollSpeed)
  i900.scrollSpeedMultiplier = i901[12]
  i900.remapEnabled = !!i901[13]
  i900.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i901[14], i900.remapX)
  i900.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i901[15], i900.remapY)
  i900.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i901[16], i900.remapZ)
  i900.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i901[17], i900.positionAmount)
  i900.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i901[18], i900.rotationAmount)
  i900.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i901[19], i900.sizeAmount)
  return i900
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i902 = root || new pc.ParticleSystemInheritVelocity()
  var i903 = data
  i902.enabled = !!i903[0]
  i902.mode = i903[1]
  i902.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i903[2], i902.curve)
  return i902
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i904 = root || new pc.ParticleSystemForceOverLifetime()
  var i905 = data
  i904.enabled = !!i905[0]
  i904.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i905[1], i904.x)
  i904.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i905[2], i904.y)
  i904.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i905[3], i904.z)
  i904.space = i905[4]
  i904.randomized = !!i905[5]
  return i904
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i906 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i907 = data
  i906.enabled = !!i907[0]
  i906.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i907[1], i906.limit)
  i906.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i907[2], i906.limitX)
  i906.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i907[3], i906.limitY)
  i906.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i907[4], i906.limitZ)
  i906.dampen = i907[5]
  i906.separateAxes = !!i907[6]
  i906.space = i907[7]
  i906.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i907[8], i906.drag)
  i906.multiplyDragByParticleSize = !!i907[9]
  i906.multiplyDragByParticleVelocity = !!i907[10]
  return i906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i909 = data
  request.r(i909[0], i909[1], 0, i908, 'mesh')
  i908.meshCount = i909[2]
  i908.activeVertexStreamsCount = i909[3]
  i908.alignment = i909[4]
  i908.renderMode = i909[5]
  i908.sortMode = i909[6]
  i908.lengthScale = i909[7]
  i908.velocityScale = i909[8]
  i908.cameraVelocityScale = i909[9]
  i908.normalDirection = i909[10]
  i908.sortingFudge = i909[11]
  i908.minParticleSize = i909[12]
  i908.maxParticleSize = i909[13]
  i908.pivot = new pc.Vec3( i909[14], i909[15], i909[16] )
  request.r(i909[17], i909[18], 0, i908, 'trailMaterial')
  i908.applyActiveColorSpace = !!i909[19]
  i908.enabled = !!i909[20]
  request.r(i909[21], i909[22], 0, i908, 'sharedMaterial')
  var i911 = i909[23]
  var i910 = []
  for(var i = 0; i < i911.length; i += 2) {
  request.r(i911[i + 0], i911[i + 1], 2, i910, '')
  }
  i908.sharedMaterials = i910
  i908.receiveShadows = !!i909[24]
  i908.shadowCastingMode = i909[25]
  i908.sortingLayerID = i909[26]
  i908.sortingOrder = i909[27]
  i908.lightmapIndex = i909[28]
  i908.lightmapSceneIndex = i909[29]
  i908.lightmapScaleOffset = new pc.Vec4( i909[30], i909[31], i909[32], i909[33] )
  i908.lightProbeUsage = i909[34]
  i908.reflectionProbeUsage = i909[35]
  return i908
}

Deserializers["NotiBox"] = function (request, data, root) {
  var i912 = root || request.c( 'NotiBox' )
  var i913 = data
  request.r(i913[0], i913[1], 0, i912, 'box')
  request.r(i913[2], i913[3], 0, i912, 'bg')
  i912.delay = i913[4]
  i912.animTime = i913[5]
  return i912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i915 = data
  i914.m_Alpha = i915[0]
  i914.m_Interactable = !!i915[1]
  i914.m_BlocksRaycasts = !!i915[2]
  i914.m_IgnoreParentGroups = !!i915[3]
  i914.enabled = !!i915[4]
  return i914
}

Deserializers["EndCart_Lose"] = function (request, data, root) {
  var i916 = root || request.c( 'EndCart_Lose' )
  var i917 = data
  request.r(i917[0], i917[1], 0, i916, 'actionButton')
  request.r(i917[2], i917[3], 0, i916, 'emoji')
  request.r(i917[4], i917[5], 0, i916, 'logo')
  request.r(i917[6], i917[7], 0, i916, 'icon')
  request.r(i917[8], i917[9], 0, i916, 'praticle')
  i916.buttonScaleTime = i917[10]
  i916.itemStartScale = i917[11]
  i916.itemPopScale = i917[12]
  i916.itemInTime = i917[13]
  i916.itemSettleTime = i917[14]
  i916.itemFinalScale = i917[15]
  i916.emojiFinalScale = i917[16]
  i916.otherItemFinalScale = i917[17]
  return i916
}

Deserializers["RotateLoop"] = function (request, data, root) {
  var i918 = root || request.c( 'RotateLoop' )
  var i919 = data
  i918.rotateSpeed = i919[0]
  return i918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i921 = data
  i920.ambientIntensity = i921[0]
  i920.reflectionIntensity = i921[1]
  i920.ambientMode = i921[2]
  i920.ambientLight = new pc.Color(i921[3], i921[4], i921[5], i921[6])
  i920.ambientSkyColor = new pc.Color(i921[7], i921[8], i921[9], i921[10])
  i920.ambientGroundColor = new pc.Color(i921[11], i921[12], i921[13], i921[14])
  i920.ambientEquatorColor = new pc.Color(i921[15], i921[16], i921[17], i921[18])
  i920.fogColor = new pc.Color(i921[19], i921[20], i921[21], i921[22])
  i920.fogEndDistance = i921[23]
  i920.fogStartDistance = i921[24]
  i920.fogDensity = i921[25]
  i920.fog = !!i921[26]
  request.r(i921[27], i921[28], 0, i920, 'skybox')
  i920.fogMode = i921[29]
  var i923 = i921[30]
  var i922 = []
  for(var i = 0; i < i923.length; i += 1) {
    i922.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i923[i + 0]) );
  }
  i920.lightmaps = i922
  i920.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i921[31], i920.lightProbes)
  i920.lightmapsMode = i921[32]
  i920.mixedBakeMode = i921[33]
  i920.environmentLightingMode = i921[34]
  i920.ambientProbe = new pc.SphericalHarmonicsL2(i921[35])
  i920.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i921[36])
  i920.useReferenceAmbientProbe = !!i921[37]
  request.r(i921[38], i921[39], 0, i920, 'customReflection')
  request.r(i921[40], i921[41], 0, i920, 'defaultReflection')
  i920.defaultReflectionMode = i921[42]
  i920.defaultReflectionResolution = i921[43]
  i920.sunLightObjectId = i921[44]
  i920.pixelLightCount = i921[45]
  i920.defaultReflectionHDR = !!i921[46]
  i920.hasLightDataAsset = !!i921[47]
  i920.hasManualGenerate = !!i921[48]
  return i920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i927 = data
  request.r(i927[0], i927[1], 0, i926, 'lightmapColor')
  request.r(i927[2], i927[3], 0, i926, 'lightmapDirection')
  return i926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i928 = root || new UnityEngine.LightProbes()
  var i929 = data
  return i928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i937 = data
  var i939 = i937[0]
  var i938 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i939.length; i += 1) {
    i938.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i939[i + 0]));
  }
  i936.ShaderCompilationErrors = i938
  i936.name = i937[1]
  i936.guid = i937[2]
  var i941 = i937[3]
  var i940 = []
  for(var i = 0; i < i941.length; i += 1) {
    i940.push( i941[i + 0] );
  }
  i936.shaderDefinedKeywords = i940
  var i943 = i937[4]
  var i942 = []
  for(var i = 0; i < i943.length; i += 1) {
    i942.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i943[i + 0]) );
  }
  i936.passes = i942
  var i945 = i937[5]
  var i944 = []
  for(var i = 0; i < i945.length; i += 1) {
    i944.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i945[i + 0]) );
  }
  i936.usePasses = i944
  var i947 = i937[6]
  var i946 = []
  for(var i = 0; i < i947.length; i += 1) {
    i946.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i947[i + 0]) );
  }
  i936.defaultParameterValues = i946
  request.r(i937[7], i937[8], 0, i936, 'unityFallbackShader')
  i936.readDepth = !!i937[9]
  i936.hasDepthOnlyPass = !!i937[10]
  i936.isCreatedByShaderGraph = !!i937[11]
  i936.disableBatching = !!i937[12]
  i936.compiled = !!i937[13]
  return i936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i951 = data
  i950.shaderName = i951[0]
  i950.errorMessage = i951[1]
  return i950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i954 = root || new pc.UnityShaderPass()
  var i955 = data
  i954.id = i955[0]
  i954.subShaderIndex = i955[1]
  i954.name = i955[2]
  i954.passType = i955[3]
  i954.grabPassTextureName = i955[4]
  i954.usePass = !!i955[5]
  i954.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i955[6], i954.zTest)
  i954.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i955[7], i954.zWrite)
  i954.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i955[8], i954.culling)
  i954.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i955[9], i954.blending)
  i954.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i955[10], i954.alphaBlending)
  i954.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i955[11], i954.colorWriteMask)
  i954.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i955[12], i954.offsetUnits)
  i954.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i955[13], i954.offsetFactor)
  i954.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i955[14], i954.stencilRef)
  i954.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i955[15], i954.stencilReadMask)
  i954.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i955[16], i954.stencilWriteMask)
  i954.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i955[17], i954.stencilOp)
  i954.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i955[18], i954.stencilOpFront)
  i954.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i955[19], i954.stencilOpBack)
  var i957 = i955[20]
  var i956 = []
  for(var i = 0; i < i957.length; i += 1) {
    i956.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i957[i + 0]) );
  }
  i954.tags = i956
  var i959 = i955[21]
  var i958 = []
  for(var i = 0; i < i959.length; i += 1) {
    i958.push( i959[i + 0] );
  }
  i954.passDefinedKeywords = i958
  var i961 = i955[22]
  var i960 = []
  for(var i = 0; i < i961.length; i += 1) {
    i960.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i961[i + 0]) );
  }
  i954.passDefinedKeywordGroups = i960
  var i963 = i955[23]
  var i962 = []
  for(var i = 0; i < i963.length; i += 1) {
    i962.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i963[i + 0]) );
  }
  i954.variants = i962
  var i965 = i955[24]
  var i964 = []
  for(var i = 0; i < i965.length; i += 1) {
    i964.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i965[i + 0]) );
  }
  i954.excludedVariants = i964
  i954.hasDepthReader = !!i955[25]
  return i954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i967 = data
  i966.val = i967[0]
  i966.name = i967[1]
  return i966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i969 = data
  i968.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i969[0], i968.src)
  i968.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i969[1], i968.dst)
  i968.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i969[2], i968.op)
  return i968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i971 = data
  i970.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i971[0], i970.pass)
  i970.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i971[1], i970.fail)
  i970.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i971[2], i970.zFail)
  i970.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i971[3], i970.comp)
  return i970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i975 = data
  i974.name = i975[0]
  i974.value = i975[1]
  return i974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i979 = data
  var i981 = i979[0]
  var i980 = []
  for(var i = 0; i < i981.length; i += 1) {
    i980.push( i981[i + 0] );
  }
  i978.keywords = i980
  i978.hasDiscard = !!i979[1]
  return i978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i985 = data
  i984.passId = i985[0]
  i984.subShaderIndex = i985[1]
  var i987 = i985[2]
  var i986 = []
  for(var i = 0; i < i987.length; i += 1) {
    i986.push( i987[i + 0] );
  }
  i984.keywords = i986
  i984.vertexProgram = i985[3]
  i984.fragmentProgram = i985[4]
  i984.exportedForWebGl2 = !!i985[5]
  i984.readDepth = !!i985[6]
  return i984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i991 = data
  request.r(i991[0], i991[1], 0, i990, 'shader')
  i990.pass = i991[2]
  return i990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i995 = data
  i994.name = i995[0]
  i994.type = i995[1]
  i994.value = new pc.Vec4( i995[2], i995[3], i995[4], i995[5] )
  i994.textureValue = i995[6]
  i994.shaderPropertyFlag = i995[7]
  return i994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i997 = data
  i996.name = i997[0]
  request.r(i997[1], i997[2], 0, i996, 'texture')
  i996.aabb = i997[3]
  i996.vertices = i997[4]
  i996.triangles = i997[5]
  i996.textureRect = UnityEngine.Rect.MinMaxRect(i997[6], i997[7], i997[8], i997[9])
  i996.packedRect = UnityEngine.Rect.MinMaxRect(i997[10], i997[11], i997[12], i997[13])
  i996.border = new pc.Vec4( i997[14], i997[15], i997[16], i997[17] )
  i996.transparency = i997[18]
  i996.bounds = i997[19]
  i996.pixelsPerUnit = i997[20]
  i996.textureWidth = i997[21]
  i996.textureHeight = i997[22]
  i996.nativeSize = new pc.Vec2( i997[23], i997[24] )
  i996.pivot = new pc.Vec2( i997[25], i997[26] )
  i996.textureRectOffset = new pc.Vec2( i997[27], i997[28] )
  return i996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i999 = data
  i998.name = i999[0]
  return i998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1001 = data
  i1000.name = i1001[0]
  i1000.wrapMode = i1001[1]
  i1000.isLooping = !!i1001[2]
  i1000.length = i1001[3]
  var i1003 = i1001[4]
  var i1002 = []
  for(var i = 0; i < i1003.length; i += 1) {
    i1002.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1003[i + 0]) );
  }
  i1000.curves = i1002
  var i1005 = i1001[5]
  var i1004 = []
  for(var i = 0; i < i1005.length; i += 1) {
    i1004.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1005[i + 0]) );
  }
  i1000.events = i1004
  i1000.halfPrecision = !!i1001[6]
  i1000._frameRate = i1001[7]
  i1000.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1001[8], i1000.localBounds)
  i1000.hasMuscleCurves = !!i1001[9]
  var i1007 = i1001[10]
  var i1006 = []
  for(var i = 0; i < i1007.length; i += 1) {
    i1006.push( i1007[i + 0] );
  }
  i1000.clipMuscleConstant = i1006
  i1000.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1001[11], i1000.clipBindingConstant)
  return i1000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1011 = data
  i1010.path = i1011[0]
  i1010.hash = i1011[1]
  i1010.componentType = i1011[2]
  i1010.property = i1011[3]
  i1010.keys = i1011[4]
  var i1013 = i1011[5]
  var i1012 = []
  for(var i = 0; i < i1013.length; i += 1) {
    i1012.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1013[i + 0]) );
  }
  i1010.objectReferenceKeys = i1012
  return i1010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1017 = data
  i1016.time = i1017[0]
  request.r(i1017[1], i1017[2], 0, i1016, 'value')
  return i1016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1021 = data
  i1020.functionName = i1021[0]
  i1020.floatParameter = i1021[1]
  i1020.intParameter = i1021[2]
  i1020.stringParameter = i1021[3]
  request.r(i1021[4], i1021[5], 0, i1020, 'objectReferenceParameter')
  i1020.time = i1021[6]
  return i1020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1023 = data
  i1022.center = new pc.Vec3( i1023[0], i1023[1], i1023[2] )
  i1022.extends = new pc.Vec3( i1023[3], i1023[4], i1023[5] )
  return i1022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1027 = data
  var i1029 = i1027[0]
  var i1028 = []
  for(var i = 0; i < i1029.length; i += 1) {
    i1028.push( i1029[i + 0] );
  }
  i1026.genericBindings = i1028
  var i1031 = i1027[1]
  var i1030 = []
  for(var i = 0; i < i1031.length; i += 1) {
    i1030.push( i1031[i + 0] );
  }
  i1026.pptrCurveMapping = i1030
  return i1026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1033 = data
  i1032.name = i1033[0]
  i1032.ascent = i1033[1]
  i1032.originalLineHeight = i1033[2]
  i1032.fontSize = i1033[3]
  var i1035 = i1033[4]
  var i1034 = []
  for(var i = 0; i < i1035.length; i += 1) {
    i1034.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1035[i + 0]) );
  }
  i1032.characterInfo = i1034
  request.r(i1033[5], i1033[6], 0, i1032, 'texture')
  i1032.originalFontSize = i1033[7]
  return i1032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1039 = data
  i1038.index = i1039[0]
  i1038.advance = i1039[1]
  i1038.bearing = i1039[2]
  i1038.glyphWidth = i1039[3]
  i1038.glyphHeight = i1039[4]
  i1038.minX = i1039[5]
  i1038.maxX = i1039[6]
  i1038.minY = i1039[7]
  i1038.maxY = i1039[8]
  i1038.uvBottomLeftX = i1039[9]
  i1038.uvBottomLeftY = i1039[10]
  i1038.uvBottomRightX = i1039[11]
  i1038.uvBottomRightY = i1039[12]
  i1038.uvTopLeftX = i1039[13]
  i1038.uvTopLeftY = i1039[14]
  i1038.uvTopRightX = i1039[15]
  i1038.uvTopRightY = i1039[16]
  return i1038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1040 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1041 = data
  i1040.name = i1041[0]
  var i1043 = i1041[1]
  var i1042 = []
  for(var i = 0; i < i1043.length; i += 1) {
    i1042.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1043[i + 0]) );
  }
  i1040.layers = i1042
  var i1045 = i1041[2]
  var i1044 = []
  for(var i = 0; i < i1045.length; i += 1) {
    i1044.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1045[i + 0]) );
  }
  i1040.parameters = i1044
  i1040.animationClips = i1041[3]
  i1040.avatarUnsupported = i1041[4]
  return i1040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1049 = data
  i1048.name = i1049[0]
  i1048.defaultWeight = i1049[1]
  i1048.blendingMode = i1049[2]
  i1048.avatarMask = i1049[3]
  i1048.syncedLayerIndex = i1049[4]
  i1048.syncedLayerAffectsTiming = !!i1049[5]
  i1048.syncedLayers = i1049[6]
  i1048.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1049[7], i1048.stateMachine)
  return i1048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1051 = data
  i1050.id = i1051[0]
  i1050.name = i1051[1]
  i1050.path = i1051[2]
  var i1053 = i1051[3]
  var i1052 = []
  for(var i = 0; i < i1053.length; i += 1) {
    i1052.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1053[i + 0]) );
  }
  i1050.states = i1052
  var i1055 = i1051[4]
  var i1054 = []
  for(var i = 0; i < i1055.length; i += 1) {
    i1054.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1055[i + 0]) );
  }
  i1050.machines = i1054
  var i1057 = i1051[5]
  var i1056 = []
  for(var i = 0; i < i1057.length; i += 1) {
    i1056.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1057[i + 0]) );
  }
  i1050.entryStateTransitions = i1056
  var i1059 = i1051[6]
  var i1058 = []
  for(var i = 0; i < i1059.length; i += 1) {
    i1058.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1059[i + 0]) );
  }
  i1050.exitStateTransitions = i1058
  var i1061 = i1051[7]
  var i1060 = []
  for(var i = 0; i < i1061.length; i += 1) {
    i1060.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1061[i + 0]) );
  }
  i1050.anyStateTransitions = i1060
  i1050.defaultStateId = i1051[8]
  return i1050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1065 = data
  i1064.id = i1065[0]
  i1064.name = i1065[1]
  i1064.cycleOffset = i1065[2]
  i1064.cycleOffsetParameter = i1065[3]
  i1064.cycleOffsetParameterActive = !!i1065[4]
  i1064.mirror = !!i1065[5]
  i1064.mirrorParameter = i1065[6]
  i1064.mirrorParameterActive = !!i1065[7]
  i1064.motionId = i1065[8]
  i1064.nameHash = i1065[9]
  i1064.fullPathHash = i1065[10]
  i1064.speed = i1065[11]
  i1064.speedParameter = i1065[12]
  i1064.speedParameterActive = !!i1065[13]
  i1064.tag = i1065[14]
  i1064.tagHash = i1065[15]
  i1064.writeDefaultValues = !!i1065[16]
  var i1067 = i1065[17]
  var i1066 = []
  for(var i = 0; i < i1067.length; i += 2) {
  request.r(i1067[i + 0], i1067[i + 1], 2, i1066, '')
  }
  i1064.behaviours = i1066
  var i1069 = i1065[18]
  var i1068 = []
  for(var i = 0; i < i1069.length; i += 1) {
    i1068.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1069[i + 0]) );
  }
  i1064.transitions = i1068
  return i1064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1075 = data
  i1074.fullPath = i1075[0]
  i1074.canTransitionToSelf = !!i1075[1]
  i1074.duration = i1075[2]
  i1074.exitTime = i1075[3]
  i1074.hasExitTime = !!i1075[4]
  i1074.hasFixedDuration = !!i1075[5]
  i1074.interruptionSource = i1075[6]
  i1074.offset = i1075[7]
  i1074.orderedInterruption = !!i1075[8]
  i1074.destinationStateId = i1075[9]
  i1074.isExit = !!i1075[10]
  i1074.mute = !!i1075[11]
  i1074.solo = !!i1075[12]
  var i1077 = i1075[13]
  var i1076 = []
  for(var i = 0; i < i1077.length; i += 1) {
    i1076.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1077[i + 0]) );
  }
  i1074.conditions = i1076
  return i1074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1083 = data
  i1082.destinationStateId = i1083[0]
  i1082.isExit = !!i1083[1]
  i1082.mute = !!i1083[2]
  i1082.solo = !!i1083[3]
  var i1085 = i1083[4]
  var i1084 = []
  for(var i = 0; i < i1085.length; i += 1) {
    i1084.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1085[i + 0]) );
  }
  i1082.conditions = i1084
  return i1082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1089 = data
  i1088.defaultBool = !!i1089[0]
  i1088.defaultFloat = i1089[1]
  i1088.defaultInt = i1089[2]
  i1088.name = i1089[3]
  i1088.nameHash = i1089[4]
  i1088.type = i1089[5]
  return i1088
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1091 = data
  i1090.name = i1091[0]
  i1090.bytes64 = i1091[1]
  i1090.data = i1091[2]
  return i1090
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i1092 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i1093 = data
  var i1095 = i1093[0]
  var i1094 = []
  for(var i = 0; i < i1095.length; i += 2) {
  request.r(i1095[i + 0], i1095[i + 1], 2, i1094, '')
  }
  i1092.atlasAssets = i1094
  i1092.scale = i1093[1]
  request.r(i1093[2], i1093[3], 0, i1092, 'skeletonJSON')
  i1092.isUpgradingBlendModeMaterials = !!i1093[4]
  i1092.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i1093[5], i1092.blendModeMaterials)
  var i1097 = i1093[6]
  var i1096 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i1097.length; i += 2) {
  request.r(i1097[i + 0], i1097[i + 1], 1, i1096, '')
  }
  i1092.skeletonDataModifiers = i1096
  var i1099 = i1093[7]
  var i1098 = []
  for(var i = 0; i < i1099.length; i += 1) {
    i1098.push( i1099[i + 0] );
  }
  i1092.fromAnimation = i1098
  var i1101 = i1093[8]
  var i1100 = []
  for(var i = 0; i < i1101.length; i += 1) {
    i1100.push( i1101[i + 0] );
  }
  i1092.toAnimation = i1100
  i1092.duration = i1093[9]
  i1092.defaultMix = i1093[10]
  request.r(i1093[11], i1093[12], 0, i1092, 'controller')
  return i1092
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i1104 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i1105 = data
  i1104.applyAdditiveMaterial = !!i1105[0]
  var i1107 = i1105[1]
  var i1106 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1107.length; i += 1) {
    i1106.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1107[i + 0]));
  }
  i1104.additiveMaterials = i1106
  var i1109 = i1105[2]
  var i1108 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1109.length; i += 1) {
    i1108.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1109[i + 0]));
  }
  i1104.multiplyMaterials = i1108
  var i1111 = i1105[3]
  var i1110 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1111.length; i += 1) {
    i1110.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1111[i + 0]));
  }
  i1104.screenMaterials = i1110
  i1104.requiresBlendModeMaterials = !!i1105[4]
  return i1104
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i1114 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i1115 = data
  i1114.pageName = i1115[0]
  request.r(i1115[1], i1115[2], 0, i1114, 'material')
  return i1114
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i1118 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i1119 = data
  request.r(i1119[0], i1119[1], 0, i1118, 'atlasFile')
  var i1121 = i1119[2]
  var i1120 = []
  for(var i = 0; i < i1121.length; i += 2) {
  request.r(i1121[i + 0], i1121[i + 1], 2, i1120, '')
  }
  i1118.materials = i1120
  i1118.textureLoadingMode = i1119[3]
  request.r(i1119[4], i1119[5], 0, i1118, 'onDemandTextureLoader')
  return i1118
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1122 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1123 = data
  request.r(i1123[0], i1123[1], 0, i1122, 'atlas')
  i1122.normalStyle = i1123[2]
  i1122.normalSpacingOffset = i1123[3]
  i1122.boldStyle = i1123[4]
  i1122.boldSpacing = i1123[5]
  i1122.italicStyle = i1123[6]
  i1122.tabSize = i1123[7]
  i1122.hashCode = i1123[8]
  request.r(i1123[9], i1123[10], 0, i1122, 'material')
  i1122.materialHashCode = i1123[11]
  i1122.m_Version = i1123[12]
  i1122.m_SourceFontFileGUID = i1123[13]
  request.r(i1123[14], i1123[15], 0, i1122, 'm_SourceFontFile_EditorRef')
  request.r(i1123[16], i1123[17], 0, i1122, 'm_SourceFontFile')
  i1122.m_AtlasPopulationMode = i1123[18]
  i1122.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1123[19], i1122.m_FaceInfo)
  var i1125 = i1123[20]
  var i1124 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1125.length; i += 1) {
    i1124.add(request.d('UnityEngine.TextCore.Glyph', i1125[i + 0]));
  }
  i1122.m_GlyphTable = i1124
  var i1127 = i1123[21]
  var i1126 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1127.length; i += 1) {
    i1126.add(request.d('TMPro.TMP_Character', i1127[i + 0]));
  }
  i1122.m_CharacterTable = i1126
  var i1129 = i1123[22]
  var i1128 = []
  for(var i = 0; i < i1129.length; i += 2) {
  request.r(i1129[i + 0], i1129[i + 1], 2, i1128, '')
  }
  i1122.m_AtlasTextures = i1128
  i1122.m_AtlasTextureIndex = i1123[23]
  i1122.m_IsMultiAtlasTexturesEnabled = !!i1123[24]
  i1122.m_ClearDynamicDataOnBuild = !!i1123[25]
  var i1131 = i1123[26]
  var i1130 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1131.length; i += 1) {
    i1130.add(request.d('UnityEngine.TextCore.GlyphRect', i1131[i + 0]));
  }
  i1122.m_UsedGlyphRects = i1130
  var i1133 = i1123[27]
  var i1132 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1133.length; i += 1) {
    i1132.add(request.d('UnityEngine.TextCore.GlyphRect', i1133[i + 0]));
  }
  i1122.m_FreeGlyphRects = i1132
  i1122.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1123[28], i1122.m_fontInfo)
  i1122.m_AtlasWidth = i1123[29]
  i1122.m_AtlasHeight = i1123[30]
  i1122.m_AtlasPadding = i1123[31]
  i1122.m_AtlasRenderMode = i1123[32]
  var i1135 = i1123[33]
  var i1134 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1135.length; i += 1) {
    i1134.add(request.d('TMPro.TMP_Glyph', i1135[i + 0]));
  }
  i1122.m_glyphInfoList = i1134
  i1122.m_KerningTable = request.d('TMPro.KerningTable', i1123[34], i1122.m_KerningTable)
  i1122.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1123[35], i1122.m_FontFeatureTable)
  var i1137 = i1123[36]
  var i1136 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1137.length; i += 2) {
  request.r(i1137[i + 0], i1137[i + 1], 1, i1136, '')
  }
  i1122.fallbackFontAssets = i1136
  var i1139 = i1123[37]
  var i1138 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1139.length; i += 2) {
  request.r(i1139[i + 0], i1139[i + 1], 1, i1138, '')
  }
  i1122.m_FallbackFontAssetTable = i1138
  i1122.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1123[38], i1122.m_CreationSettings)
  var i1141 = i1123[39]
  var i1140 = []
  for(var i = 0; i < i1141.length; i += 1) {
    i1140.push( request.d('TMPro.TMP_FontWeightPair', i1141[i + 0]) );
  }
  i1122.m_FontWeightTable = i1140
  var i1143 = i1123[40]
  var i1142 = []
  for(var i = 0; i < i1143.length; i += 1) {
    i1142.push( request.d('TMPro.TMP_FontWeightPair', i1143[i + 0]) );
  }
  i1122.fontWeights = i1142
  return i1122
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1144 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1145 = data
  i1144.m_FaceIndex = i1145[0]
  i1144.m_FamilyName = i1145[1]
  i1144.m_StyleName = i1145[2]
  i1144.m_PointSize = i1145[3]
  i1144.m_Scale = i1145[4]
  i1144.m_UnitsPerEM = i1145[5]
  i1144.m_LineHeight = i1145[6]
  i1144.m_AscentLine = i1145[7]
  i1144.m_CapLine = i1145[8]
  i1144.m_MeanLine = i1145[9]
  i1144.m_Baseline = i1145[10]
  i1144.m_DescentLine = i1145[11]
  i1144.m_SuperscriptOffset = i1145[12]
  i1144.m_SuperscriptSize = i1145[13]
  i1144.m_SubscriptOffset = i1145[14]
  i1144.m_SubscriptSize = i1145[15]
  i1144.m_UnderlineOffset = i1145[16]
  i1144.m_UnderlineThickness = i1145[17]
  i1144.m_StrikethroughOffset = i1145[18]
  i1144.m_StrikethroughThickness = i1145[19]
  i1144.m_TabWidth = i1145[20]
  return i1144
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1148 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1149 = data
  i1148.m_Index = i1149[0]
  i1148.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1149[1], i1148.m_Metrics)
  i1148.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1149[2], i1148.m_GlyphRect)
  i1148.m_Scale = i1149[3]
  i1148.m_AtlasIndex = i1149[4]
  i1148.m_ClassDefinitionType = i1149[5]
  return i1148
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1150 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1151 = data
  i1150.m_Width = i1151[0]
  i1150.m_Height = i1151[1]
  i1150.m_HorizontalBearingX = i1151[2]
  i1150.m_HorizontalBearingY = i1151[3]
  i1150.m_HorizontalAdvance = i1151[4]
  return i1150
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1152 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1153 = data
  i1152.m_X = i1153[0]
  i1152.m_Y = i1153[1]
  i1152.m_Width = i1153[2]
  i1152.m_Height = i1153[3]
  return i1152
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1156 = root || request.c( 'TMPro.TMP_Character' )
  var i1157 = data
  i1156.m_ElementType = i1157[0]
  i1156.m_Unicode = i1157[1]
  i1156.m_GlyphIndex = i1157[2]
  i1156.m_Scale = i1157[3]
  return i1156
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1162 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1163 = data
  i1162.Name = i1163[0]
  i1162.PointSize = i1163[1]
  i1162.Scale = i1163[2]
  i1162.CharacterCount = i1163[3]
  i1162.LineHeight = i1163[4]
  i1162.Baseline = i1163[5]
  i1162.Ascender = i1163[6]
  i1162.CapHeight = i1163[7]
  i1162.Descender = i1163[8]
  i1162.CenterLine = i1163[9]
  i1162.SuperscriptOffset = i1163[10]
  i1162.SubscriptOffset = i1163[11]
  i1162.SubSize = i1163[12]
  i1162.Underline = i1163[13]
  i1162.UnderlineThickness = i1163[14]
  i1162.strikethrough = i1163[15]
  i1162.strikethroughThickness = i1163[16]
  i1162.TabWidth = i1163[17]
  i1162.Padding = i1163[18]
  i1162.AtlasWidth = i1163[19]
  i1162.AtlasHeight = i1163[20]
  return i1162
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1166 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1167 = data
  i1166.id = i1167[0]
  i1166.x = i1167[1]
  i1166.y = i1167[2]
  i1166.width = i1167[3]
  i1166.height = i1167[4]
  i1166.xOffset = i1167[5]
  i1166.yOffset = i1167[6]
  i1166.xAdvance = i1167[7]
  i1166.scale = i1167[8]
  return i1166
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1168 = root || request.c( 'TMPro.KerningTable' )
  var i1169 = data
  var i1171 = i1169[0]
  var i1170 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1171.length; i += 1) {
    i1170.add(request.d('TMPro.KerningPair', i1171[i + 0]));
  }
  i1168.kerningPairs = i1170
  return i1168
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1174 = root || request.c( 'TMPro.KerningPair' )
  var i1175 = data
  i1174.xOffset = i1175[0]
  i1174.m_FirstGlyph = i1175[1]
  i1174.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1175[2], i1174.m_FirstGlyphAdjustments)
  i1174.m_SecondGlyph = i1175[3]
  i1174.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1175[4], i1174.m_SecondGlyphAdjustments)
  i1174.m_IgnoreSpacingAdjustments = !!i1175[5]
  return i1174
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1176 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1177 = data
  var i1179 = i1177[0]
  var i1178 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1179.length; i += 1) {
    i1178.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1179[i + 0]));
  }
  i1176.m_GlyphPairAdjustmentRecords = i1178
  return i1176
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1182 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1183 = data
  i1182.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1183[0], i1182.m_FirstAdjustmentRecord)
  i1182.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1183[1], i1182.m_SecondAdjustmentRecord)
  i1182.m_FeatureLookupFlags = i1183[2]
  return i1182
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1186 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1187 = data
  i1186.sourceFontFileName = i1187[0]
  i1186.sourceFontFileGUID = i1187[1]
  i1186.pointSizeSamplingMode = i1187[2]
  i1186.pointSize = i1187[3]
  i1186.padding = i1187[4]
  i1186.packingMode = i1187[5]
  i1186.atlasWidth = i1187[6]
  i1186.atlasHeight = i1187[7]
  i1186.characterSetSelectionMode = i1187[8]
  i1186.characterSequence = i1187[9]
  i1186.referencedFontAssetGUID = i1187[10]
  i1186.referencedTextAssetGUID = i1187[11]
  i1186.fontStyle = i1187[12]
  i1186.fontStyleModifier = i1187[13]
  i1186.renderMode = i1187[14]
  i1186.includeFontFeatures = !!i1187[15]
  return i1186
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1190 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1191 = data
  request.r(i1191[0], i1191[1], 0, i1190, 'regularTypeface')
  request.r(i1191[2], i1191[3], 0, i1190, 'italicTypeface')
  return i1190
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1192 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1193 = data
  i1192.useSafeMode = !!i1193[0]
  i1192.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1193[1], i1192.safeModeOptions)
  i1192.timeScale = i1193[2]
  i1192.unscaledTimeScale = i1193[3]
  i1192.useSmoothDeltaTime = !!i1193[4]
  i1192.maxSmoothUnscaledTime = i1193[5]
  i1192.rewindCallbackMode = i1193[6]
  i1192.showUnityEditorReport = !!i1193[7]
  i1192.logBehaviour = i1193[8]
  i1192.drawGizmos = !!i1193[9]
  i1192.defaultRecyclable = !!i1193[10]
  i1192.defaultAutoPlay = i1193[11]
  i1192.defaultUpdateType = i1193[12]
  i1192.defaultTimeScaleIndependent = !!i1193[13]
  i1192.defaultEaseType = i1193[14]
  i1192.defaultEaseOvershootOrAmplitude = i1193[15]
  i1192.defaultEasePeriod = i1193[16]
  i1192.defaultAutoKill = !!i1193[17]
  i1192.defaultLoopType = i1193[18]
  i1192.debugMode = !!i1193[19]
  i1192.debugStoreTargetId = !!i1193[20]
  i1192.showPreviewPanel = !!i1193[21]
  i1192.storeSettingsLocation = i1193[22]
  i1192.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1193[23], i1192.modules)
  i1192.createASMDEF = !!i1193[24]
  i1192.showPlayingTweens = !!i1193[25]
  i1192.showPausedTweens = !!i1193[26]
  return i1192
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1194 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1195 = data
  i1194.logBehaviour = i1195[0]
  i1194.nestedTweenFailureBehaviour = i1195[1]
  return i1194
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1196 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1197 = data
  i1196.showPanel = !!i1197[0]
  i1196.audioEnabled = !!i1197[1]
  i1196.physicsEnabled = !!i1197[2]
  i1196.physics2DEnabled = !!i1197[3]
  i1196.spriteEnabled = !!i1197[4]
  i1196.uiEnabled = !!i1197[5]
  i1196.textMeshProEnabled = !!i1197[6]
  i1196.tk2DEnabled = !!i1197[7]
  i1196.deAudioEnabled = !!i1197[8]
  i1196.deUnityExtendedEnabled = !!i1197[9]
  i1196.epoOutlineEnabled = !!i1197[10]
  return i1196
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1198 = root || request.c( 'TMPro.TMP_Settings' )
  var i1199 = data
  i1198.m_enableWordWrapping = !!i1199[0]
  i1198.m_enableKerning = !!i1199[1]
  i1198.m_enableExtraPadding = !!i1199[2]
  i1198.m_enableTintAllSprites = !!i1199[3]
  i1198.m_enableParseEscapeCharacters = !!i1199[4]
  i1198.m_EnableRaycastTarget = !!i1199[5]
  i1198.m_GetFontFeaturesAtRuntime = !!i1199[6]
  i1198.m_missingGlyphCharacter = i1199[7]
  i1198.m_warningsDisabled = !!i1199[8]
  request.r(i1199[9], i1199[10], 0, i1198, 'm_defaultFontAsset')
  i1198.m_defaultFontAssetPath = i1199[11]
  i1198.m_defaultFontSize = i1199[12]
  i1198.m_defaultAutoSizeMinRatio = i1199[13]
  i1198.m_defaultAutoSizeMaxRatio = i1199[14]
  i1198.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1199[15], i1199[16] )
  i1198.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1199[17], i1199[18] )
  i1198.m_autoSizeTextContainer = !!i1199[19]
  i1198.m_IsTextObjectScaleStatic = !!i1199[20]
  var i1201 = i1199[21]
  var i1200 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1201.length; i += 2) {
  request.r(i1201[i + 0], i1201[i + 1], 1, i1200, '')
  }
  i1198.m_fallbackFontAssets = i1200
  i1198.m_matchMaterialPreset = !!i1199[22]
  request.r(i1199[23], i1199[24], 0, i1198, 'm_defaultSpriteAsset')
  i1198.m_defaultSpriteAssetPath = i1199[25]
  i1198.m_enableEmojiSupport = !!i1199[26]
  i1198.m_MissingCharacterSpriteUnicode = i1199[27]
  i1198.m_defaultColorGradientPresetsPath = i1199[28]
  request.r(i1199[29], i1199[30], 0, i1198, 'm_defaultStyleSheet')
  i1198.m_StyleSheetsResourcePath = i1199[31]
  request.r(i1199[32], i1199[33], 0, i1198, 'm_leadingCharacters')
  request.r(i1199[34], i1199[35], 0, i1198, 'm_followingCharacters')
  i1198.m_UseModernHangulLineBreakingRules = !!i1199[36]
  return i1198
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1202 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1203 = data
  i1202.m_GlyphIndex = i1203[0]
  i1202.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1203[1], i1202.m_GlyphValueRecord)
  return i1202
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1204 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1205 = data
  i1204.m_XPlacement = i1205[0]
  i1204.m_YPlacement = i1205[1]
  i1204.m_XAdvance = i1205[2]
  i1204.m_YAdvance = i1205[3]
  return i1204
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1206 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1207 = data
  request.r(i1207[0], i1207[1], 0, i1206, 'spriteSheet')
  var i1209 = i1207[2]
  var i1208 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1209.length; i += 1) {
    i1208.add(request.d('TMPro.TMP_Sprite', i1209[i + 0]));
  }
  i1206.spriteInfoList = i1208
  var i1211 = i1207[3]
  var i1210 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1211.length; i += 2) {
  request.r(i1211[i + 0], i1211[i + 1], 1, i1210, '')
  }
  i1206.fallbackSpriteAssets = i1210
  i1206.hashCode = i1207[4]
  request.r(i1207[5], i1207[6], 0, i1206, 'material')
  i1206.materialHashCode = i1207[7]
  i1206.m_Version = i1207[8]
  i1206.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1207[9], i1206.m_FaceInfo)
  var i1213 = i1207[10]
  var i1212 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1213.length; i += 1) {
    i1212.add(request.d('TMPro.TMP_SpriteCharacter', i1213[i + 0]));
  }
  i1206.m_SpriteCharacterTable = i1212
  var i1215 = i1207[11]
  var i1214 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1215.length; i += 1) {
    i1214.add(request.d('TMPro.TMP_SpriteGlyph', i1215[i + 0]));
  }
  i1206.m_SpriteGlyphTable = i1214
  return i1206
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1218 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1219 = data
  i1218.name = i1219[0]
  i1218.hashCode = i1219[1]
  i1218.unicode = i1219[2]
  i1218.pivot = new pc.Vec2( i1219[3], i1219[4] )
  request.r(i1219[5], i1219[6], 0, i1218, 'sprite')
  i1218.id = i1219[7]
  i1218.x = i1219[8]
  i1218.y = i1219[9]
  i1218.width = i1219[10]
  i1218.height = i1219[11]
  i1218.xOffset = i1219[12]
  i1218.yOffset = i1219[13]
  i1218.xAdvance = i1219[14]
  i1218.scale = i1219[15]
  return i1218
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1224 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1225 = data
  i1224.m_Name = i1225[0]
  i1224.m_HashCode = i1225[1]
  i1224.m_ElementType = i1225[2]
  i1224.m_Unicode = i1225[3]
  i1224.m_GlyphIndex = i1225[4]
  i1224.m_Scale = i1225[5]
  return i1224
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1228 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1229 = data
  request.r(i1229[0], i1229[1], 0, i1228, 'sprite')
  i1228.m_Index = i1229[2]
  i1228.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1229[3], i1228.m_Metrics)
  i1228.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1229[4], i1228.m_GlyphRect)
  i1228.m_Scale = i1229[5]
  i1228.m_AtlasIndex = i1229[6]
  i1228.m_ClassDefinitionType = i1229[7]
  return i1228
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1230 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1231 = data
  var i1233 = i1231[0]
  var i1232 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1233.length; i += 1) {
    i1232.add(request.d('TMPro.TMP_Style', i1233[i + 0]));
  }
  i1230.m_StyleList = i1232
  return i1230
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1236 = root || request.c( 'TMPro.TMP_Style' )
  var i1237 = data
  i1236.m_Name = i1237[0]
  i1236.m_HashCode = i1237[1]
  i1236.m_OpeningDefinition = i1237[2]
  i1236.m_ClosingDefinition = i1237[3]
  i1236.m_OpeningTagArray = i1237[4]
  i1236.m_ClosingTagArray = i1237[5]
  i1236.m_OpeningTagUnicodeArray = i1237[6]
  i1236.m_ClosingTagUnicodeArray = i1237[7]
  return i1236
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1238 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1239 = data
  var i1241 = i1239[0]
  var i1240 = []
  for(var i = 0; i < i1241.length; i += 1) {
    i1240.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1241[i + 0]) );
  }
  i1238.files = i1240
  i1238.componentToPrefabIds = i1239[1]
  return i1238
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1244 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1245 = data
  i1244.path = i1245[0]
  request.r(i1245[1], i1245[2], 0, i1244, 'unityObject')
  return i1244
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1246 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1247 = data
  var i1249 = i1247[0]
  var i1248 = []
  for(var i = 0; i < i1249.length; i += 1) {
    i1248.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1249[i + 0]) );
  }
  i1246.scriptsExecutionOrder = i1248
  var i1251 = i1247[1]
  var i1250 = []
  for(var i = 0; i < i1251.length; i += 1) {
    i1250.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1251[i + 0]) );
  }
  i1246.sortingLayers = i1250
  var i1253 = i1247[2]
  var i1252 = []
  for(var i = 0; i < i1253.length; i += 1) {
    i1252.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1253[i + 0]) );
  }
  i1246.cullingLayers = i1252
  i1246.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1247[3], i1246.timeSettings)
  i1246.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1247[4], i1246.physicsSettings)
  i1246.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1247[5], i1246.physics2DSettings)
  i1246.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1247[6], i1246.qualitySettings)
  i1246.enableRealtimeShadows = !!i1247[7]
  i1246.enableAutoInstancing = !!i1247[8]
  i1246.enableStaticBatching = !!i1247[9]
  i1246.enableDynamicBatching = !!i1247[10]
  i1246.lightmapEncodingQuality = i1247[11]
  i1246.desiredColorSpace = i1247[12]
  var i1255 = i1247[13]
  var i1254 = []
  for(var i = 0; i < i1255.length; i += 1) {
    i1254.push( i1255[i + 0] );
  }
  i1246.allTags = i1254
  return i1246
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1258 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1259 = data
  i1258.name = i1259[0]
  i1258.value = i1259[1]
  return i1258
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1262 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1263 = data
  i1262.id = i1263[0]
  i1262.name = i1263[1]
  i1262.value = i1263[2]
  return i1262
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1266 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1267 = data
  i1266.id = i1267[0]
  i1266.name = i1267[1]
  return i1266
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1268 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1269 = data
  i1268.fixedDeltaTime = i1269[0]
  i1268.maximumDeltaTime = i1269[1]
  i1268.timeScale = i1269[2]
  i1268.maximumParticleTimestep = i1269[3]
  return i1268
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1270 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1271 = data
  i1270.gravity = new pc.Vec3( i1271[0], i1271[1], i1271[2] )
  i1270.defaultSolverIterations = i1271[3]
  i1270.bounceThreshold = i1271[4]
  i1270.autoSyncTransforms = !!i1271[5]
  i1270.autoSimulation = !!i1271[6]
  var i1273 = i1271[7]
  var i1272 = []
  for(var i = 0; i < i1273.length; i += 1) {
    i1272.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1273[i + 0]) );
  }
  i1270.collisionMatrix = i1272
  return i1270
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1276 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1277 = data
  i1276.enabled = !!i1277[0]
  i1276.layerId = i1277[1]
  i1276.otherLayerId = i1277[2]
  return i1276
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1278 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1279 = data
  request.r(i1279[0], i1279[1], 0, i1278, 'material')
  i1278.gravity = new pc.Vec2( i1279[2], i1279[3] )
  i1278.positionIterations = i1279[4]
  i1278.velocityIterations = i1279[5]
  i1278.velocityThreshold = i1279[6]
  i1278.maxLinearCorrection = i1279[7]
  i1278.maxAngularCorrection = i1279[8]
  i1278.maxTranslationSpeed = i1279[9]
  i1278.maxRotationSpeed = i1279[10]
  i1278.baumgarteScale = i1279[11]
  i1278.baumgarteTOIScale = i1279[12]
  i1278.timeToSleep = i1279[13]
  i1278.linearSleepTolerance = i1279[14]
  i1278.angularSleepTolerance = i1279[15]
  i1278.defaultContactOffset = i1279[16]
  i1278.autoSimulation = !!i1279[17]
  i1278.queriesHitTriggers = !!i1279[18]
  i1278.queriesStartInColliders = !!i1279[19]
  i1278.callbacksOnDisable = !!i1279[20]
  i1278.reuseCollisionCallbacks = !!i1279[21]
  i1278.autoSyncTransforms = !!i1279[22]
  var i1281 = i1279[23]
  var i1280 = []
  for(var i = 0; i < i1281.length; i += 1) {
    i1280.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1281[i + 0]) );
  }
  i1278.collisionMatrix = i1280
  return i1278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1284 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1285 = data
  i1284.enabled = !!i1285[0]
  i1284.layerId = i1285[1]
  i1284.otherLayerId = i1285[2]
  return i1284
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1286 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1287 = data
  var i1289 = i1287[0]
  var i1288 = []
  for(var i = 0; i < i1289.length; i += 1) {
    i1288.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1289[i + 0]) );
  }
  i1286.qualityLevels = i1288
  var i1291 = i1287[1]
  var i1290 = []
  for(var i = 0; i < i1291.length; i += 1) {
    i1290.push( i1291[i + 0] );
  }
  i1286.names = i1290
  i1286.shadows = i1287[2]
  i1286.anisotropicFiltering = i1287[3]
  i1286.antiAliasing = i1287[4]
  i1286.lodBias = i1287[5]
  i1286.shadowCascades = i1287[6]
  i1286.shadowDistance = i1287[7]
  i1286.shadowmaskMode = i1287[8]
  i1286.shadowProjection = i1287[9]
  i1286.shadowResolution = i1287[10]
  i1286.softParticles = !!i1287[11]
  i1286.softVegetation = !!i1287[12]
  i1286.activeColorSpace = i1287[13]
  i1286.desiredColorSpace = i1287[14]
  i1286.masterTextureLimit = i1287[15]
  i1286.maxQueuedFrames = i1287[16]
  i1286.particleRaycastBudget = i1287[17]
  i1286.pixelLightCount = i1287[18]
  i1286.realtimeReflectionProbes = !!i1287[19]
  i1286.shadowCascade2Split = i1287[20]
  i1286.shadowCascade4Split = new pc.Vec3( i1287[21], i1287[22], i1287[23] )
  i1286.streamingMipmapsActive = !!i1287[24]
  i1286.vSyncCount = i1287[25]
  i1286.asyncUploadBufferSize = i1287[26]
  i1286.asyncUploadTimeSlice = i1287[27]
  i1286.billboardsFaceCameraPosition = !!i1287[28]
  i1286.shadowNearPlaneOffset = i1287[29]
  i1286.streamingMipmapsMemoryBudget = i1287[30]
  i1286.maximumLODLevel = i1287[31]
  i1286.streamingMipmapsAddAllCameras = !!i1287[32]
  i1286.streamingMipmapsMaxLevelReduction = i1287[33]
  i1286.streamingMipmapsRenderersPerFrame = i1287[34]
  i1286.resolutionScalingFixedDPIFactor = i1287[35]
  i1286.streamingMipmapsMaxFileIORequests = i1287[36]
  i1286.currentQualityLevel = i1287[37]
  return i1286
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1296 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1297 = data
  i1296.mode = i1297[0]
  i1296.parameter = i1297[1]
  i1296.threshold = i1297[2]
  return i1296
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1298 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1299 = data
  i1298.xPlacement = i1299[0]
  i1298.yPlacement = i1299[1]
  i1298.xAdvance = i1299[2]
  i1298.yAdvance = i1299[3]
  return i1298
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"frontSortingLayerID":0,"frontSortingOrder":1,"backSortingLayerID":2,"backSortingOrder":3,"alphaCutoff":4,"sprite":5,"tileMode":7,"isCustomRangeActive":8,"spriteSortPoint":9,"enabled":10,"sharedMaterial":11,"sharedMaterials":13,"receiveShadows":14,"shadowCastingMode":15,"sortingLayerID":16,"sortingOrder":17,"lightmapIndex":18,"lightmapSceneIndex":19,"lightmapScaleOffset":20,"lightProbeUsage":24,"reflectionProbeUsage":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"61":[62],"63":[62],"64":[62],"65":[62],"66":[62],"67":[62],"68":[69],"70":[17],"71":[72],"73":[72],"74":[72],"75":[72],"76":[72],"77":[72],"78":[72],"79":[7],"80":[7],"81":[7],"82":[7],"83":[7],"84":[7],"85":[7],"86":[7],"87":[7],"88":[7],"89":[7],"90":[7],"91":[7],"92":[17],"93":[32],"94":[95],"96":[95],"26":[25],"97":[98],"99":[17],"100":[17],"101":[102],"103":[104],"105":[32,35],"106":[107],"108":[104],"109":[110],"111":[104],"112":[104],"113":[114],"115":[114],"116":[104],"117":[118],"119":[1],"120":[118],"121":[25],"122":[25],"28":[26],"30":[29,25],"123":[25],"27":[26],"124":[25],"125":[25],"126":[25],"127":[25],"128":[25],"129":[25],"130":[25],"131":[25],"132":[25],"133":[29,25],"134":[25],"135":[25],"136":[25],"137":[25],"138":[29,25],"139":[25],"140":[20],"141":[20],"21":[20],"142":[20],"143":[17],"144":[17],"145":[146],"147":[17],"148":[149],"150":[25],"151":[29,25],"33":[32],"107":[29,25],"152":[10,32],"104":[32],"153":[32,35],"154":[72],"155":[7],"156":[149],"157":[114],"158":[25],"159":[32,25],"39":[25,29],"160":[25],"161":[29,25],"162":[32],"163":[29,25],"164":[25],"165":[118]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Material","UnityEngine.MonoBehaviour","DragItem","UnityEngine.BoxCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Shader","Disk","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","Tray","UnityEngine.GameObject","Slot","UnityEngine.Texture2D","HandHint","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","TrayManager","UnityEngine.SpriteMask","ConveyorBelt","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","EndCart_Win","UnityEngine.MeshRenderer","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonDataAsset","UnityEngine.MeshFilter","Button","UnityEngine.UI.Button","GameManager","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","AudioManager","UnityEngine.AudioSource","UnityEngine.AudioClip","PackManager","PackTarget","TutorialManager","ScalePopLoop","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","NotiBox","UnityEngine.CanvasGroup","EndCart_Lose","RotateLoop","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.Font","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","AutoFlip","Book","CameraAutoSize","CheckSize","Spine.Unity.Examples.BasicPlatformerController","UnityEngine.CharacterController","Spine.Unity.Examples.SkeletonGhost","Spine.Unity.SkeletonRenderer","Spine.Unity.Examples.RenderExistingMesh","Spine.Unity.Examples.SkeletonGraphicRenderTexture","Spine.Unity.SkeletonGraphic","Spine.Unity.Examples.SkeletonRenderTexture","Spine.Unity.Examples.SkeletonRenderTextureFadeout","Spine.Unity.Examples.SkeletonRenderTextureBase","Spine.Unity.Examples.SkeletonRagdoll","Spine.Unity.Examples.SkeletonRagdoll2D","Spine.Unity.Examples.SkeletonUtilityEyeConstraint","Spine.Unity.SkeletonUtilityBone","Spine.Unity.Examples.SkeletonUtilityGroundConstraint","Spine.Unity.Examples.SpineGauge","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonMecanim","Spine.Unity.SkeletonPartsRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.62f3";

Deserializers.productName = "Prj_Demo";

Deserializers.lunaInitializationTime = "12/18/2025 04:11:57";

Deserializers.lunaDaysRunning = "20.3";

Deserializers.lunaVersion = "7.0.0";

Deserializers.lunaSHA = "3bcc3e343f23b4c67e768a811a8d088c7f7adbc5";

Deserializers.creativeName = "TicketRemove";

Deserializers.lunaAppID = "35714";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1806";

Deserializers.runtimeAnalysisExcludedMethodsCount = "5462";

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

Deserializers.buildID = "e82b9b77-0d05-40ea-9ee8-eb1d82d53a7f";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

