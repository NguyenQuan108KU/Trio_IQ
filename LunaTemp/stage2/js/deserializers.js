var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i628 = root || request.c( 'UnityEngine.JointSpring' )
  var i629 = data
  i628.spring = i629[0]
  i628.damper = i629[1]
  i628.targetPosition = i629[2]
  return i628
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i630 = root || request.c( 'UnityEngine.JointMotor' )
  var i631 = data
  i630.m_TargetVelocity = i631[0]
  i630.m_Force = i631[1]
  i630.m_FreeSpin = i631[2]
  return i630
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i632 = root || request.c( 'UnityEngine.JointLimits' )
  var i633 = data
  i632.m_Min = i633[0]
  i632.m_Max = i633[1]
  i632.m_Bounciness = i633[2]
  i632.m_BounceMinVelocity = i633[3]
  i632.m_ContactDistance = i633[4]
  i632.minBounce = i633[5]
  i632.maxBounce = i633[6]
  return i632
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i634 = root || request.c( 'UnityEngine.JointDrive' )
  var i635 = data
  i634.m_PositionSpring = i635[0]
  i634.m_PositionDamper = i635[1]
  i634.m_MaximumForce = i635[2]
  i634.m_UseAcceleration = i635[3]
  return i634
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i636 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i637 = data
  i636.m_Spring = i637[0]
  i636.m_Damper = i637[1]
  return i636
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i638 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i639 = data
  i638.m_Limit = i639[0]
  i638.m_Bounciness = i639[1]
  i638.m_ContactDistance = i639[2]
  return i638
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i640 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i641 = data
  i640.m_ExtremumSlip = i641[0]
  i640.m_ExtremumValue = i641[1]
  i640.m_AsymptoteSlip = i641[2]
  i640.m_AsymptoteValue = i641[3]
  i640.m_Stiffness = i641[4]
  return i640
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i642 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i643 = data
  i642.m_LowerAngle = i643[0]
  i642.m_UpperAngle = i643[1]
  return i642
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i644 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i645 = data
  i644.m_MotorSpeed = i645[0]
  i644.m_MaximumMotorTorque = i645[1]
  return i644
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i646 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i647 = data
  i646.m_DampingRatio = i647[0]
  i646.m_Frequency = i647[1]
  i646.m_Angle = i647[2]
  return i646
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i648 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i649 = data
  i648.m_LowerTranslation = i649[0]
  i648.m_UpperTranslation = i649[1]
  return i648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i650 = root || new pc.UnityMaterial()
  var i651 = data
  i650.name = i651[0]
  request.r(i651[1], i651[2], 0, i650, 'shader')
  i650.renderQueue = i651[3]
  i650.enableInstancing = !!i651[4]
  var i653 = i651[5]
  var i652 = []
  for(var i = 0; i < i653.length; i += 1) {
    i652.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i653[i + 0]) );
  }
  i650.floatParameters = i652
  var i655 = i651[6]
  var i654 = []
  for(var i = 0; i < i655.length; i += 1) {
    i654.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i655[i + 0]) );
  }
  i650.colorParameters = i654
  var i657 = i651[7]
  var i656 = []
  for(var i = 0; i < i657.length; i += 1) {
    i656.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i657[i + 0]) );
  }
  i650.vectorParameters = i656
  var i659 = i651[8]
  var i658 = []
  for(var i = 0; i < i659.length; i += 1) {
    i658.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i659[i + 0]) );
  }
  i650.textureParameters = i658
  var i661 = i651[9]
  var i660 = []
  for(var i = 0; i < i661.length; i += 1) {
    i660.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i661[i + 0]) );
  }
  i650.materialFlags = i660
  return i650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i665 = data
  i664.name = i665[0]
  i664.value = i665[1]
  return i664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i669 = data
  i668.name = i669[0]
  i668.value = new pc.Color(i669[1], i669[2], i669[3], i669[4])
  return i668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i673 = data
  i672.name = i673[0]
  i672.value = new pc.Vec4( i673[1], i673[2], i673[3], i673[4] )
  return i672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i677 = data
  i676.name = i677[0]
  request.r(i677[1], i677[2], 0, i676, 'value')
  return i676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i681 = data
  i680.name = i681[0]
  i680.enabled = !!i681[1]
  return i680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i683 = data
  i682.name = i683[0]
  i682.width = i683[1]
  i682.height = i683[2]
  i682.mipmapCount = i683[3]
  i682.anisoLevel = i683[4]
  i682.filterMode = i683[5]
  i682.hdr = !!i683[6]
  i682.format = i683[7]
  i682.wrapMode = i683[8]
  i682.alphaIsTransparency = !!i683[9]
  i682.alphaSource = i683[10]
  i682.graphicsFormat = i683[11]
  i682.sRGBTexture = !!i683[12]
  i682.desiredColorSpace = i683[13]
  i682.wrapU = i683[14]
  i682.wrapV = i683[15]
  return i682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i685 = data
  i684.position = new pc.Vec3( i685[0], i685[1], i685[2] )
  i684.scale = new pc.Vec3( i685[3], i685[4], i685[5] )
  i684.rotation = new pc.Quat(i685[6], i685[7], i685[8], i685[9])
  return i684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i687 = data
  i686.color = new pc.Color(i687[0], i687[1], i687[2], i687[3])
  request.r(i687[4], i687[5], 0, i686, 'sprite')
  i686.flipX = !!i687[6]
  i686.flipY = !!i687[7]
  i686.drawMode = i687[8]
  i686.size = new pc.Vec2( i687[9], i687[10] )
  i686.tileMode = i687[11]
  i686.adaptiveModeThreshold = i687[12]
  i686.maskInteraction = i687[13]
  i686.spriteSortPoint = i687[14]
  i686.enabled = !!i687[15]
  request.r(i687[16], i687[17], 0, i686, 'sharedMaterial')
  var i689 = i687[18]
  var i688 = []
  for(var i = 0; i < i689.length; i += 2) {
  request.r(i689[i + 0], i689[i + 1], 2, i688, '')
  }
  i686.sharedMaterials = i688
  i686.receiveShadows = !!i687[19]
  i686.shadowCastingMode = i687[20]
  i686.sortingLayerID = i687[21]
  i686.sortingOrder = i687[22]
  i686.lightmapIndex = i687[23]
  i686.lightmapSceneIndex = i687[24]
  i686.lightmapScaleOffset = new pc.Vec4( i687[25], i687[26], i687[27], i687[28] )
  i686.lightProbeUsage = i687[29]
  i686.reflectionProbeUsage = i687[30]
  return i686
}

Deserializers["Disk"] = function (request, data, root) {
  var i692 = root || request.c( 'Disk' )
  var i693 = data
  i692.requiredCount = i693[0]
  i692.moveDistance = i693[1]
  i692.moveTime = i693[2]
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i695 = data
  i694.name = i695[0]
  i694.tagId = i695[1]
  i694.enabled = !!i695[2]
  i694.isStatic = !!i695[3]
  i694.layer = i695[4]
  return i694
}

Deserializers["Tray"] = function (request, data, root) {
  var i696 = root || request.c( 'Tray' )
  var i697 = data
  i696.spacing = i697[0]
  i696.moveTime = i697[1]
  request.r(i697[2], i697[3], 0, i696, 'diskPrefab')
  request.r(i697[4], i697[5], 0, i696, 'diskTransform')
  i696.shrinkTime = i697[6]
  i696.itemToDiskTime = i697[7]
  i696.attachDelay = i697[8]
  i696.followSmooth = i697[9]
  i696.diskItemScale = new pc.Vec3( i697[10], i697[11], i697[12] )
  return i696
}

Deserializers["Slot"] = function (request, data, root) {
  var i698 = root || request.c( 'Slot' )
  var i699 = data
  request.r(i699[0], i699[1], 0, i698, 'anchor')
  request.r(i699[2], i699[3], 0, i698, 'currentItem')
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i701 = data
  i700.usedByComposite = !!i701[0]
  i700.autoTiling = !!i701[1]
  i700.size = new pc.Vec2( i701[2], i701[3] )
  i700.edgeRadius = i701[4]
  i700.enabled = !!i701[5]
  i700.isTrigger = !!i701[6]
  i700.usedByEffector = !!i701[7]
  i700.density = i701[8]
  i700.offset = new pc.Vec2( i701[9], i701[10] )
  request.r(i701[11], i701[12], 0, i700, 'material')
  return i700
}

Deserializers["DragItem"] = function (request, data, root) {
  var i702 = root || request.c( 'DragItem' )
  var i703 = data
  return i702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i705 = data
  i704.bodyType = i705[0]
  request.r(i705[1], i705[2], 0, i704, 'material')
  i704.simulated = !!i705[3]
  i704.useAutoMass = !!i705[4]
  i704.mass = i705[5]
  i704.drag = i705[6]
  i704.angularDrag = i705[7]
  i704.gravityScale = i705[8]
  i704.collisionDetectionMode = i705[9]
  i704.sleepMode = i705[10]
  i704.constraints = i705[11]
  return i704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i707 = data
  i706.name = i707[0]
  i706.index = i707[1]
  i706.startup = !!i707[2]
  return i706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i709 = data
  i708.aspect = i709[0]
  i708.orthographic = !!i709[1]
  i708.orthographicSize = i709[2]
  i708.backgroundColor = new pc.Color(i709[3], i709[4], i709[5], i709[6])
  i708.nearClipPlane = i709[7]
  i708.farClipPlane = i709[8]
  i708.fieldOfView = i709[9]
  i708.depth = i709[10]
  i708.clearFlags = i709[11]
  i708.cullingMask = i709[12]
  i708.rect = i709[13]
  request.r(i709[14], i709[15], 0, i708, 'targetTexture')
  i708.usePhysicalProperties = !!i709[16]
  i708.focalLength = i709[17]
  i708.sensorSize = new pc.Vec2( i709[18], i709[19] )
  i708.lensShift = new pc.Vec2( i709[20], i709[21] )
  i708.gateFit = i709[22]
  i708.commandBufferCount = i709[23]
  i708.cameraType = i709[24]
  i708.enabled = !!i709[25]
  return i708
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i710 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i711 = data
  request.r(i711[0], i711[1], 0, i710, 'm_FirstSelected')
  i710.m_sendNavigationEvents = !!i711[2]
  i710.m_DragThreshold = i711[3]
  return i710
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i712 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i713 = data
  i712.m_HorizontalAxis = i713[0]
  i712.m_VerticalAxis = i713[1]
  i712.m_SubmitButton = i713[2]
  i712.m_CancelButton = i713[3]
  i712.m_InputActionsPerSecond = i713[4]
  i712.m_RepeatDelay = i713[5]
  i712.m_ForceModuleActive = !!i713[6]
  i712.m_SendPointerHoverToParent = !!i713[7]
  return i712
}

Deserializers["TrayManager"] = function (request, data, root) {
  var i714 = root || request.c( 'TrayManager' )
  var i715 = data
  i714.spacing = i715[0]
  i714.visibleCount = i715[1]
  i714.moveTime = i715[2]
  var i717 = i715[3]
  var i716 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i717.length; i += 2) {
  request.r(i717[i + 0], i717[i + 1], 1, i716, '')
  }
  i714.listTray = i716
  i714.curve = new pc.AnimationCurve( { keys_flow: i715[4] } )
  return i714
}

Deserializers["DiskTransform"] = function (request, data, root) {
  var i720 = root || request.c( 'DiskTransform' )
  var i721 = data
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i723 = data
  i722.frontSortingLayerID = i723[0]
  i722.frontSortingOrder = i723[1]
  i722.backSortingLayerID = i723[2]
  i722.backSortingOrder = i723[3]
  i722.alphaCutoff = i723[4]
  request.r(i723[5], i723[6], 0, i722, 'sprite')
  i722.tileMode = i723[7]
  i722.isCustomRangeActive = !!i723[8]
  i722.spriteSortPoint = i723[9]
  i722.enabled = !!i723[10]
  request.r(i723[11], i723[12], 0, i722, 'sharedMaterial')
  var i725 = i723[13]
  var i724 = []
  for(var i = 0; i < i725.length; i += 2) {
  request.r(i725[i + 0], i725[i + 1], 2, i724, '')
  }
  i722.sharedMaterials = i724
  i722.receiveShadows = !!i723[14]
  i722.shadowCastingMode = i723[15]
  i722.sortingLayerID = i723[16]
  i722.sortingOrder = i723[17]
  i722.lightmapIndex = i723[18]
  i722.lightmapSceneIndex = i723[19]
  i722.lightmapScaleOffset = new pc.Vec4( i723[20], i723[21], i723[22], i723[23] )
  i722.lightProbeUsage = i723[24]
  i722.reflectionProbeUsage = i723[25]
  return i722
}

Deserializers["ConveyorBelt"] = function (request, data, root) {
  var i726 = root || request.c( 'ConveyorBelt' )
  var i727 = data
  i726.speed = i727[0]
  i726.spacing = i727[1]
  i726.leftLimit = i727[2]
  i726.removeFirstCount = i727[3]
  request.r(i727[4], i727[5], 0, i726, 'tutorial')
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i729 = data
  i728.pivot = new pc.Vec2( i729[0], i729[1] )
  i728.anchorMin = new pc.Vec2( i729[2], i729[3] )
  i728.anchorMax = new pc.Vec2( i729[4], i729[5] )
  i728.sizeDelta = new pc.Vec2( i729[6], i729[7] )
  i728.anchoredPosition3D = new pc.Vec3( i729[8], i729[9], i729[10] )
  i728.rotation = new pc.Quat(i729[11], i729[12], i729[13], i729[14])
  i728.scale = new pc.Vec3( i729[15], i729[16], i729[17] )
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i731 = data
  i730.planeDistance = i731[0]
  i730.referencePixelsPerUnit = i731[1]
  i730.isFallbackOverlay = !!i731[2]
  i730.renderMode = i731[3]
  i730.renderOrder = i731[4]
  i730.sortingLayerName = i731[5]
  i730.sortingOrder = i731[6]
  i730.scaleFactor = i731[7]
  request.r(i731[8], i731[9], 0, i730, 'worldCamera')
  i730.overrideSorting = !!i731[10]
  i730.pixelPerfect = !!i731[11]
  i730.targetDisplay = i731[12]
  i730.overridePixelPerfect = !!i731[13]
  i730.enabled = !!i731[14]
  return i730
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i732 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i733 = data
  i732.m_UiScaleMode = i733[0]
  i732.m_ReferencePixelsPerUnit = i733[1]
  i732.m_ScaleFactor = i733[2]
  i732.m_ReferenceResolution = new pc.Vec2( i733[3], i733[4] )
  i732.m_ScreenMatchMode = i733[5]
  i732.m_MatchWidthOrHeight = i733[6]
  i732.m_PhysicalUnit = i733[7]
  i732.m_FallbackScreenDPI = i733[8]
  i732.m_DefaultSpriteDPI = i733[9]
  i732.m_DynamicPixelsPerUnit = i733[10]
  i732.m_PresetInfoIsWorld = !!i733[11]
  return i732
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i734 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i735 = data
  i734.m_IgnoreReversedGraphics = !!i735[0]
  i734.m_BlockingObjects = i735[1]
  i734.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i735[2] )
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i737 = data
  i736.cullTransparentMesh = !!i737[0]
  return i736
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i738 = root || request.c( 'UnityEngine.UI.Image' )
  var i739 = data
  request.r(i739[0], i739[1], 0, i738, 'm_Sprite')
  i738.m_Type = i739[2]
  i738.m_PreserveAspect = !!i739[3]
  i738.m_FillCenter = !!i739[4]
  i738.m_FillMethod = i739[5]
  i738.m_FillAmount = i739[6]
  i738.m_FillClockwise = !!i739[7]
  i738.m_FillOrigin = i739[8]
  i738.m_UseSpriteMesh = !!i739[9]
  i738.m_PixelsPerUnitMultiplier = i739[10]
  request.r(i739[11], i739[12], 0, i738, 'm_Material')
  i738.m_Maskable = !!i739[13]
  i738.m_Color = new pc.Color(i739[14], i739[15], i739[16], i739[17])
  i738.m_RaycastTarget = !!i739[18]
  i738.m_RaycastPadding = new pc.Vec4( i739[19], i739[20], i739[21], i739[22] )
  return i738
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i740 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i741 = data
  i740.m_hasFontAssetChanged = !!i741[0]
  request.r(i741[1], i741[2], 0, i740, 'm_baseMaterial')
  i740.m_maskOffset = new pc.Vec4( i741[3], i741[4], i741[5], i741[6] )
  i740.m_text = i741[7]
  i740.m_isRightToLeft = !!i741[8]
  request.r(i741[9], i741[10], 0, i740, 'm_fontAsset')
  request.r(i741[11], i741[12], 0, i740, 'm_sharedMaterial')
  var i743 = i741[13]
  var i742 = []
  for(var i = 0; i < i743.length; i += 2) {
  request.r(i743[i + 0], i743[i + 1], 2, i742, '')
  }
  i740.m_fontSharedMaterials = i742
  request.r(i741[14], i741[15], 0, i740, 'm_fontMaterial')
  var i745 = i741[16]
  var i744 = []
  for(var i = 0; i < i745.length; i += 2) {
  request.r(i745[i + 0], i745[i + 1], 2, i744, '')
  }
  i740.m_fontMaterials = i744
  i740.m_fontColor32 = UnityEngine.Color32.ConstructColor(i741[17], i741[18], i741[19], i741[20])
  i740.m_fontColor = new pc.Color(i741[21], i741[22], i741[23], i741[24])
  i740.m_enableVertexGradient = !!i741[25]
  i740.m_colorMode = i741[26]
  i740.m_fontColorGradient = request.d('TMPro.VertexGradient', i741[27], i740.m_fontColorGradient)
  request.r(i741[28], i741[29], 0, i740, 'm_fontColorGradientPreset')
  request.r(i741[30], i741[31], 0, i740, 'm_spriteAsset')
  i740.m_tintAllSprites = !!i741[32]
  request.r(i741[33], i741[34], 0, i740, 'm_StyleSheet')
  i740.m_TextStyleHashCode = i741[35]
  i740.m_overrideHtmlColors = !!i741[36]
  i740.m_faceColor = UnityEngine.Color32.ConstructColor(i741[37], i741[38], i741[39], i741[40])
  i740.m_fontSize = i741[41]
  i740.m_fontSizeBase = i741[42]
  i740.m_fontWeight = i741[43]
  i740.m_enableAutoSizing = !!i741[44]
  i740.m_fontSizeMin = i741[45]
  i740.m_fontSizeMax = i741[46]
  i740.m_fontStyle = i741[47]
  i740.m_HorizontalAlignment = i741[48]
  i740.m_VerticalAlignment = i741[49]
  i740.m_textAlignment = i741[50]
  i740.m_characterSpacing = i741[51]
  i740.m_wordSpacing = i741[52]
  i740.m_lineSpacing = i741[53]
  i740.m_lineSpacingMax = i741[54]
  i740.m_paragraphSpacing = i741[55]
  i740.m_charWidthMaxAdj = i741[56]
  i740.m_enableWordWrapping = !!i741[57]
  i740.m_wordWrappingRatios = i741[58]
  i740.m_overflowMode = i741[59]
  request.r(i741[60], i741[61], 0, i740, 'm_linkedTextComponent')
  request.r(i741[62], i741[63], 0, i740, 'parentLinkedComponent')
  i740.m_enableKerning = !!i741[64]
  i740.m_enableExtraPadding = !!i741[65]
  i740.checkPaddingRequired = !!i741[66]
  i740.m_isRichText = !!i741[67]
  i740.m_parseCtrlCharacters = !!i741[68]
  i740.m_isOrthographic = !!i741[69]
  i740.m_isCullingEnabled = !!i741[70]
  i740.m_horizontalMapping = i741[71]
  i740.m_verticalMapping = i741[72]
  i740.m_uvLineOffset = i741[73]
  i740.m_geometrySortingOrder = i741[74]
  i740.m_IsTextObjectScaleStatic = !!i741[75]
  i740.m_VertexBufferAutoSizeReduction = !!i741[76]
  i740.m_useMaxVisibleDescender = !!i741[77]
  i740.m_pageToDisplay = i741[78]
  i740.m_margin = new pc.Vec4( i741[79], i741[80], i741[81], i741[82] )
  i740.m_isUsingLegacyAnimationComponent = !!i741[83]
  i740.m_isVolumetricText = !!i741[84]
  request.r(i741[85], i741[86], 0, i740, 'm_Material')
  i740.m_Maskable = !!i741[87]
  i740.m_Color = new pc.Color(i741[88], i741[89], i741[90], i741[91])
  i740.m_RaycastTarget = !!i741[92]
  i740.m_RaycastPadding = new pc.Vec4( i741[93], i741[94], i741[95], i741[96] )
  return i740
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i746 = root || request.c( 'TMPro.VertexGradient' )
  var i747 = data
  i746.topLeft = new pc.Color(i747[0], i747[1], i747[2], i747[3])
  i746.topRight = new pc.Color(i747[4], i747[5], i747[6], i747[7])
  i746.bottomLeft = new pc.Color(i747[8], i747[9], i747[10], i747[11])
  i746.bottomRight = new pc.Color(i747[12], i747[13], i747[14], i747[15])
  return i746
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i748 = root || request.c( 'UnityEngine.UI.Button' )
  var i749 = data
  i748.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i749[0], i748.m_OnClick)
  i748.m_Navigation = request.d('UnityEngine.UI.Navigation', i749[1], i748.m_Navigation)
  i748.m_Transition = i749[2]
  i748.m_Colors = request.d('UnityEngine.UI.ColorBlock', i749[3], i748.m_Colors)
  i748.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i749[4], i748.m_SpriteState)
  i748.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i749[5], i748.m_AnimationTriggers)
  i748.m_Interactable = !!i749[6]
  request.r(i749[7], i749[8], 0, i748, 'm_TargetGraphic')
  return i748
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i750 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i751 = data
  i750.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i751[0], i750.m_PersistentCalls)
  return i750
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i752 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i753 = data
  var i755 = i753[0]
  var i754 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i755.length; i += 1) {
    i754.add(request.d('UnityEngine.Events.PersistentCall', i755[i + 0]));
  }
  i752.m_Calls = i754
  return i752
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i758 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i759 = data
  request.r(i759[0], i759[1], 0, i758, 'm_Target')
  i758.m_TargetAssemblyTypeName = i759[2]
  i758.m_MethodName = i759[3]
  i758.m_Mode = i759[4]
  i758.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i759[5], i758.m_Arguments)
  i758.m_CallState = i759[6]
  return i758
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i760 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i761 = data
  i760.m_Mode = i761[0]
  i760.m_WrapAround = !!i761[1]
  request.r(i761[2], i761[3], 0, i760, 'm_SelectOnUp')
  request.r(i761[4], i761[5], 0, i760, 'm_SelectOnDown')
  request.r(i761[6], i761[7], 0, i760, 'm_SelectOnLeft')
  request.r(i761[8], i761[9], 0, i760, 'm_SelectOnRight')
  return i760
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i762 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i763 = data
  i762.m_NormalColor = new pc.Color(i763[0], i763[1], i763[2], i763[3])
  i762.m_HighlightedColor = new pc.Color(i763[4], i763[5], i763[6], i763[7])
  i762.m_PressedColor = new pc.Color(i763[8], i763[9], i763[10], i763[11])
  i762.m_SelectedColor = new pc.Color(i763[12], i763[13], i763[14], i763[15])
  i762.m_DisabledColor = new pc.Color(i763[16], i763[17], i763[18], i763[19])
  i762.m_ColorMultiplier = i763[20]
  i762.m_FadeDuration = i763[21]
  return i762
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i764 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i765 = data
  request.r(i765[0], i765[1], 0, i764, 'm_HighlightedSprite')
  request.r(i765[2], i765[3], 0, i764, 'm_PressedSprite')
  request.r(i765[4], i765[5], 0, i764, 'm_SelectedSprite')
  request.r(i765[6], i765[7], 0, i764, 'm_DisabledSprite')
  return i764
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i766 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i767 = data
  i766.m_NormalTrigger = i767[0]
  i766.m_HighlightedTrigger = i767[1]
  i766.m_PressedTrigger = i767[2]
  i766.m_SelectedTrigger = i767[3]
  i766.m_DisabledTrigger = i767[4]
  return i766
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i768 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i769 = data
  request.r(i769[0], i769[1], 0, i768, 'm_ObjectArgument')
  i768.m_ObjectArgumentAssemblyTypeName = i769[2]
  i768.m_IntArgument = i769[3]
  i768.m_FloatArgument = i769[4]
  i768.m_StringArgument = i769[5]
  i768.m_BoolArgument = !!i769[6]
  return i768
}

Deserializers["ScalePopLoop"] = function (request, data, root) {
  var i770 = root || request.c( 'ScalePopLoop' )
  var i771 = data
  i770.minScale = new pc.Vec3( i771[0], i771[1], i771[2] )
  i770.maxScale = new pc.Vec3( i771[3], i771[4], i771[5] )
  i770.duration = i771[6]
  i770.ease = i771[7]
  return i770
}

Deserializers["ProgressBrain"] = function (request, data, root) {
  var i772 = root || request.c( 'ProgressBrain' )
  var i773 = data
  request.r(i773[0], i773[1], 0, i772, 'brain')
  request.r(i773[2], i773[3], 0, i772, 'startPoint')
  request.r(i773[4], i773[5], 0, i772, 'endPoint')
  request.r(i773[6], i773[7], 0, i772, 'endcartWin')
  i772.maxScore = i773[8]
  i772.scorePerTray = i773[9]
  i772.currentScore = i773[10]
  i772.moveTime = i773[11]
  i772.idleDelay = i773[12]
  i772.drainInterval = i773[13]
  i772.drainAmount = i773[14]
  i772.index = i773[15]
  request.r(i773[16], i773[17], 0, i772, 'text')
  return i772
}

Deserializers["EndCart_Win"] = function (request, data, root) {
  var i774 = root || request.c( 'EndCart_Win' )
  var i775 = data
  request.r(i775[0], i775[1], 0, i774, 'confettiLeft')
  request.r(i775[2], i775[3], 0, i774, 'confettiRight')
  request.r(i775[4], i775[5], 0, i774, 'winText')
  request.r(i775[6], i775[7], 0, i774, 'chest')
  request.r(i775[8], i775[9], 0, i774, 'button')
  i774.textDelay = i775[10]
  i774.chestDelay = i775[11]
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i777 = data
  i776.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i777[0], i776.main)
  i776.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i777[1], i776.colorBySpeed)
  i776.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i777[2], i776.colorOverLifetime)
  i776.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i777[3], i776.emission)
  i776.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i777[4], i776.rotationBySpeed)
  i776.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i777[5], i776.rotationOverLifetime)
  i776.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i777[6], i776.shape)
  i776.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i777[7], i776.sizeBySpeed)
  i776.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i777[8], i776.sizeOverLifetime)
  i776.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i777[9], i776.textureSheetAnimation)
  i776.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i777[10], i776.velocityOverLifetime)
  i776.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i777[11], i776.noise)
  i776.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i777[12], i776.inheritVelocity)
  i776.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i777[13], i776.forceOverLifetime)
  i776.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i777[14], i776.limitVelocityOverLifetime)
  i776.useAutoRandomSeed = !!i777[15]
  i776.randomSeed = i777[16]
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i778 = root || new pc.ParticleSystemMain()
  var i779 = data
  i778.duration = i779[0]
  i778.loop = !!i779[1]
  i778.prewarm = !!i779[2]
  i778.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i779[3], i778.startDelay)
  i778.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i779[4], i778.startLifetime)
  i778.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i779[5], i778.startSpeed)
  i778.startSize3D = !!i779[6]
  i778.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i779[7], i778.startSizeX)
  i778.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i779[8], i778.startSizeY)
  i778.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i779[9], i778.startSizeZ)
  i778.startRotation3D = !!i779[10]
  i778.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i779[11], i778.startRotationX)
  i778.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i779[12], i778.startRotationY)
  i778.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i779[13], i778.startRotationZ)
  i778.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i779[14], i778.startColor)
  i778.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i779[15], i778.gravityModifier)
  i778.simulationSpace = i779[16]
  request.r(i779[17], i779[18], 0, i778, 'customSimulationSpace')
  i778.simulationSpeed = i779[19]
  i778.useUnscaledTime = !!i779[20]
  i778.scalingMode = i779[21]
  i778.playOnAwake = !!i779[22]
  i778.maxParticles = i779[23]
  i778.emitterVelocityMode = i779[24]
  i778.stopAction = i779[25]
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i780 = root || new pc.MinMaxCurve()
  var i781 = data
  i780.mode = i781[0]
  i780.curveMin = new pc.AnimationCurve( { keys_flow: i781[1] } )
  i780.curveMax = new pc.AnimationCurve( { keys_flow: i781[2] } )
  i780.curveMultiplier = i781[3]
  i780.constantMin = i781[4]
  i780.constantMax = i781[5]
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i782 = root || new pc.MinMaxGradient()
  var i783 = data
  i782.mode = i783[0]
  i782.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i783[1], i782.gradientMin)
  i782.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i783[2], i782.gradientMax)
  i782.colorMin = new pc.Color(i783[3], i783[4], i783[5], i783[6])
  i782.colorMax = new pc.Color(i783[7], i783[8], i783[9], i783[10])
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i785 = data
  i784.mode = i785[0]
  var i787 = i785[1]
  var i786 = []
  for(var i = 0; i < i787.length; i += 1) {
    i786.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i787[i + 0]) );
  }
  i784.colorKeys = i786
  var i789 = i785[2]
  var i788 = []
  for(var i = 0; i < i789.length; i += 1) {
    i788.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i789[i + 0]) );
  }
  i784.alphaKeys = i788
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i793 = data
  i792.color = new pc.Color(i793[0], i793[1], i793[2], i793[3])
  i792.time = i793[4]
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i797 = data
  i796.alpha = i797[0]
  i796.time = i797[1]
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i798 = root || new pc.ParticleSystemColorBySpeed()
  var i799 = data
  i798.enabled = !!i799[0]
  i798.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i799[1], i798.color)
  i798.range = new pc.Vec2( i799[2], i799[3] )
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i800 = root || new pc.ParticleSystemColorOverLifetime()
  var i801 = data
  i800.enabled = !!i801[0]
  i800.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i801[1], i800.color)
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i802 = root || new pc.ParticleSystemEmitter()
  var i803 = data
  i802.enabled = !!i803[0]
  i802.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[1], i802.rateOverTime)
  i802.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[2], i802.rateOverDistance)
  var i805 = i803[3]
  var i804 = []
  for(var i = 0; i < i805.length; i += 1) {
    i804.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i805[i + 0]) );
  }
  i802.bursts = i804
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i808 = root || new pc.ParticleSystemBurst()
  var i809 = data
  i808.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[0], i808.count)
  i808.cycleCount = i809[1]
  i808.minCount = i809[2]
  i808.maxCount = i809[3]
  i808.repeatInterval = i809[4]
  i808.time = i809[5]
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i810 = root || new pc.ParticleSystemRotationBySpeed()
  var i811 = data
  i810.enabled = !!i811[0]
  i810.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[1], i810.x)
  i810.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[2], i810.y)
  i810.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[3], i810.z)
  i810.separateAxes = !!i811[4]
  i810.range = new pc.Vec2( i811[5], i811[6] )
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i812 = root || new pc.ParticleSystemRotationOverLifetime()
  var i813 = data
  i812.enabled = !!i813[0]
  i812.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[1], i812.x)
  i812.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[2], i812.y)
  i812.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[3], i812.z)
  i812.separateAxes = !!i813[4]
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i814 = root || new pc.ParticleSystemShape()
  var i815 = data
  i814.enabled = !!i815[0]
  i814.shapeType = i815[1]
  i814.randomDirectionAmount = i815[2]
  i814.sphericalDirectionAmount = i815[3]
  i814.randomPositionAmount = i815[4]
  i814.alignToDirection = !!i815[5]
  i814.radius = i815[6]
  i814.radiusMode = i815[7]
  i814.radiusSpread = i815[8]
  i814.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i815[9], i814.radiusSpeed)
  i814.radiusThickness = i815[10]
  i814.angle = i815[11]
  i814.length = i815[12]
  i814.boxThickness = new pc.Vec3( i815[13], i815[14], i815[15] )
  i814.meshShapeType = i815[16]
  request.r(i815[17], i815[18], 0, i814, 'mesh')
  request.r(i815[19], i815[20], 0, i814, 'meshRenderer')
  request.r(i815[21], i815[22], 0, i814, 'skinnedMeshRenderer')
  i814.useMeshMaterialIndex = !!i815[23]
  i814.meshMaterialIndex = i815[24]
  i814.useMeshColors = !!i815[25]
  i814.normalOffset = i815[26]
  i814.arc = i815[27]
  i814.arcMode = i815[28]
  i814.arcSpread = i815[29]
  i814.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i815[30], i814.arcSpeed)
  i814.donutRadius = i815[31]
  i814.position = new pc.Vec3( i815[32], i815[33], i815[34] )
  i814.rotation = new pc.Vec3( i815[35], i815[36], i815[37] )
  i814.scale = new pc.Vec3( i815[38], i815[39], i815[40] )
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i816 = root || new pc.ParticleSystemSizeBySpeed()
  var i817 = data
  i816.enabled = !!i817[0]
  i816.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[1], i816.x)
  i816.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[2], i816.y)
  i816.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[3], i816.z)
  i816.separateAxes = !!i817[4]
  i816.range = new pc.Vec2( i817[5], i817[6] )
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i818 = root || new pc.ParticleSystemSizeOverLifetime()
  var i819 = data
  i818.enabled = !!i819[0]
  i818.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[1], i818.x)
  i818.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[2], i818.y)
  i818.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[3], i818.z)
  i818.separateAxes = !!i819[4]
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i820 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i821 = data
  i820.enabled = !!i821[0]
  i820.mode = i821[1]
  i820.animation = i821[2]
  i820.numTilesX = i821[3]
  i820.numTilesY = i821[4]
  i820.useRandomRow = !!i821[5]
  i820.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i821[6], i820.frameOverTime)
  i820.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i821[7], i820.startFrame)
  i820.cycleCount = i821[8]
  i820.rowIndex = i821[9]
  i820.flipU = i821[10]
  i820.flipV = i821[11]
  i820.spriteCount = i821[12]
  var i823 = i821[13]
  var i822 = []
  for(var i = 0; i < i823.length; i += 2) {
  request.r(i823[i + 0], i823[i + 1], 2, i822, '')
  }
  i820.sprites = i822
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i826 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i827 = data
  i826.enabled = !!i827[0]
  i826.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[1], i826.x)
  i826.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[2], i826.y)
  i826.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[3], i826.z)
  i826.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[4], i826.radial)
  i826.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[5], i826.speedModifier)
  i826.space = i827[6]
  i826.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[7], i826.orbitalX)
  i826.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[8], i826.orbitalY)
  i826.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[9], i826.orbitalZ)
  i826.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[10], i826.orbitalOffsetX)
  i826.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[11], i826.orbitalOffsetY)
  i826.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[12], i826.orbitalOffsetZ)
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i828 = root || new pc.ParticleSystemNoise()
  var i829 = data
  i828.enabled = !!i829[0]
  i828.separateAxes = !!i829[1]
  i828.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i829[2], i828.strengthX)
  i828.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i829[3], i828.strengthY)
  i828.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i829[4], i828.strengthZ)
  i828.frequency = i829[5]
  i828.damping = !!i829[6]
  i828.octaveCount = i829[7]
  i828.octaveMultiplier = i829[8]
  i828.octaveScale = i829[9]
  i828.quality = i829[10]
  i828.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i829[11], i828.scrollSpeed)
  i828.scrollSpeedMultiplier = i829[12]
  i828.remapEnabled = !!i829[13]
  i828.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i829[14], i828.remapX)
  i828.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i829[15], i828.remapY)
  i828.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i829[16], i828.remapZ)
  i828.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i829[17], i828.positionAmount)
  i828.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i829[18], i828.rotationAmount)
  i828.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i829[19], i828.sizeAmount)
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i830 = root || new pc.ParticleSystemInheritVelocity()
  var i831 = data
  i830.enabled = !!i831[0]
  i830.mode = i831[1]
  i830.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i831[2], i830.curve)
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i832 = root || new pc.ParticleSystemForceOverLifetime()
  var i833 = data
  i832.enabled = !!i833[0]
  i832.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i833[1], i832.x)
  i832.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i833[2], i832.y)
  i832.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i833[3], i832.z)
  i832.space = i833[4]
  i832.randomized = !!i833[5]
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i834 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i835 = data
  i834.enabled = !!i835[0]
  i834.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i835[1], i834.limit)
  i834.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i835[2], i834.limitX)
  i834.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i835[3], i834.limitY)
  i834.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i835[4], i834.limitZ)
  i834.dampen = i835[5]
  i834.separateAxes = !!i835[6]
  i834.space = i835[7]
  i834.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i835[8], i834.drag)
  i834.multiplyDragByParticleSize = !!i835[9]
  i834.multiplyDragByParticleVelocity = !!i835[10]
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i837 = data
  request.r(i837[0], i837[1], 0, i836, 'mesh')
  i836.meshCount = i837[2]
  i836.activeVertexStreamsCount = i837[3]
  i836.alignment = i837[4]
  i836.renderMode = i837[5]
  i836.sortMode = i837[6]
  i836.lengthScale = i837[7]
  i836.velocityScale = i837[8]
  i836.cameraVelocityScale = i837[9]
  i836.normalDirection = i837[10]
  i836.sortingFudge = i837[11]
  i836.minParticleSize = i837[12]
  i836.maxParticleSize = i837[13]
  i836.pivot = new pc.Vec3( i837[14], i837[15], i837[16] )
  request.r(i837[17], i837[18], 0, i836, 'trailMaterial')
  i836.applyActiveColorSpace = !!i837[19]
  i836.enabled = !!i837[20]
  request.r(i837[21], i837[22], 0, i836, 'sharedMaterial')
  var i839 = i837[23]
  var i838 = []
  for(var i = 0; i < i839.length; i += 2) {
  request.r(i839[i + 0], i839[i + 1], 2, i838, '')
  }
  i836.sharedMaterials = i838
  i836.receiveShadows = !!i837[24]
  i836.shadowCastingMode = i837[25]
  i836.sortingLayerID = i837[26]
  i836.sortingOrder = i837[27]
  i836.lightmapIndex = i837[28]
  i836.lightmapSceneIndex = i837[29]
  i836.lightmapScaleOffset = new pc.Vec4( i837[30], i837[31], i837[32], i837[33] )
  i836.lightProbeUsage = i837[34]
  i836.reflectionProbeUsage = i837[35]
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i841 = data
  request.r(i841[0], i841[1], 0, i840, 'additionalVertexStreams')
  i840.enabled = !!i841[2]
  request.r(i841[3], i841[4], 0, i840, 'sharedMaterial')
  var i843 = i841[5]
  var i842 = []
  for(var i = 0; i < i843.length; i += 2) {
  request.r(i843[i + 0], i843[i + 1], 2, i842, '')
  }
  i840.sharedMaterials = i842
  i840.receiveShadows = !!i841[6]
  i840.shadowCastingMode = i841[7]
  i840.sortingLayerID = i841[8]
  i840.sortingOrder = i841[9]
  i840.lightmapIndex = i841[10]
  i840.lightmapSceneIndex = i841[11]
  i840.lightmapScaleOffset = new pc.Vec4( i841[12], i841[13], i841[14], i841[15] )
  i840.lightProbeUsage = i841[16]
  i840.reflectionProbeUsage = i841[17]
  return i840
}

Deserializers["Spine.Unity.SkeletonAnimation"] = function (request, data, root) {
  var i844 = root || request.c( 'Spine.Unity.SkeletonAnimation' )
  var i845 = data
  i844.loop = !!i845[0]
  i844.timeScale = i845[1]
  request.r(i845[2], i845[3], 0, i844, 'skeletonDataAsset')
  i844.initialSkinName = i845[4]
  i844.fixPrefabOverrideViaMeshFilter = i845[5]
  i844.initialFlipX = !!i845[6]
  i844.initialFlipY = !!i845[7]
  i844.updateWhenInvisible = i845[8]
  i844.zSpacing = i845[9]
  i844.useClipping = !!i845[10]
  i844.immutableTriangles = !!i845[11]
  i844.pmaVertexColors = !!i845[12]
  i844.clearStateOnDisable = !!i845[13]
  i844.tintBlack = !!i845[14]
  i844.singleSubmesh = !!i845[15]
  i844.fixDrawOrder = !!i845[16]
  i844.addNormals = !!i845[17]
  i844.calculateTangents = !!i845[18]
  i844.maskInteraction = i845[19]
  i844.maskMaterials = request.d('Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials', i845[20], i844.maskMaterials)
  i844.disableRenderingOnOverride = !!i845[21]
  i844.updateTiming = i845[22]
  i844.unscaledTime = !!i845[23]
  i844._animationName = i845[24]
  var i847 = i845[25]
  var i846 = []
  for(var i = 0; i < i847.length; i += 1) {
    i846.push( i847[i + 0] );
  }
  i844.separatorSlotNames = i846
  i844.physicsPositionInheritanceFactor = new pc.Vec2( i845[26], i845[27] )
  i844.physicsRotationInheritanceFactor = i845[28]
  request.r(i845[29], i845[30], 0, i844, 'physicsMovementRelativeTo')
  return i844
}

Deserializers["Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials"] = function (request, data, root) {
  var i848 = root || request.c( 'Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials' )
  var i849 = data
  var i851 = i849[0]
  var i850 = []
  for(var i = 0; i < i851.length; i += 2) {
  request.r(i851[i + 0], i851[i + 1], 2, i850, '')
  }
  i848.materialsMaskDisabled = i850
  var i853 = i849[1]
  var i852 = []
  for(var i = 0; i < i853.length; i += 2) {
  request.r(i853[i + 0], i853[i + 1], 2, i852, '')
  }
  i848.materialsInsideMask = i852
  var i855 = i849[2]
  var i854 = []
  for(var i = 0; i < i855.length; i += 2) {
  request.r(i855[i + 0], i855[i + 1], 2, i854, '')
  }
  i848.materialsOutsideMask = i854
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i859 = data
  request.r(i859[0], i859[1], 0, i858, 'sharedMesh')
  return i858
}

Deserializers["Button"] = function (request, data, root) {
  var i860 = root || request.c( 'Button' )
  var i861 = data
  return i860
}

Deserializers["AudioManager"] = function (request, data, root) {
  var i862 = root || request.c( 'AudioManager' )
  var i863 = data
  request.r(i863[0], i863[1], 0, i862, 'bgmSource')
  request.r(i863[2], i863[3], 0, i862, 'sfxSource')
  request.r(i863[4], i863[5], 0, i862, 'bgm')
  request.r(i863[6], i863[7], 0, i862, 'drag')
  request.r(i863[8], i863[9], 0, i862, 'drog')
  request.r(i863[10], i863[11], 0, i862, 'lose')
  request.r(i863[12], i863[13], 0, i862, 'pop')
  return i862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i865 = data
  request.r(i865[0], i865[1], 0, i864, 'clip')
  request.r(i865[2], i865[3], 0, i864, 'outputAudioMixerGroup')
  i864.playOnAwake = !!i865[4]
  i864.loop = !!i865[5]
  i864.time = i865[6]
  i864.volume = i865[7]
  i864.pitch = i865[8]
  i864.enabled = !!i865[9]
  return i864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i867 = data
  request.r(i867[0], i867[1], 0, i866, 'animatorController')
  request.r(i867[2], i867[3], 0, i866, 'avatar')
  i866.updateMode = i867[4]
  i866.hasTransformHierarchy = !!i867[5]
  i866.applyRootMotion = !!i867[6]
  var i869 = i867[7]
  var i868 = []
  for(var i = 0; i < i869.length; i += 2) {
  request.r(i869[i + 0], i869[i + 1], 2, i868, '')
  }
  i866.humanBones = i868
  i866.enabled = !!i867[8]
  return i866
}

Deserializers["Tutorial"] = function (request, data, root) {
  var i872 = root || request.c( 'Tutorial' )
  var i873 = data
  i872.moveUpDistance = i873[0]
  i872.moveTime = i873[1]
  i872.delay = i873[2]
  return i872
}

Deserializers["GameManager"] = function (request, data, root) {
  var i874 = root || request.c( 'GameManager' )
  var i875 = data
  return i874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i877 = data
  i876.ambientIntensity = i877[0]
  i876.reflectionIntensity = i877[1]
  i876.ambientMode = i877[2]
  i876.ambientLight = new pc.Color(i877[3], i877[4], i877[5], i877[6])
  i876.ambientSkyColor = new pc.Color(i877[7], i877[8], i877[9], i877[10])
  i876.ambientGroundColor = new pc.Color(i877[11], i877[12], i877[13], i877[14])
  i876.ambientEquatorColor = new pc.Color(i877[15], i877[16], i877[17], i877[18])
  i876.fogColor = new pc.Color(i877[19], i877[20], i877[21], i877[22])
  i876.fogEndDistance = i877[23]
  i876.fogStartDistance = i877[24]
  i876.fogDensity = i877[25]
  i876.fog = !!i877[26]
  request.r(i877[27], i877[28], 0, i876, 'skybox')
  i876.fogMode = i877[29]
  var i879 = i877[30]
  var i878 = []
  for(var i = 0; i < i879.length; i += 1) {
    i878.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i879[i + 0]) );
  }
  i876.lightmaps = i878
  i876.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i877[31], i876.lightProbes)
  i876.lightmapsMode = i877[32]
  i876.mixedBakeMode = i877[33]
  i876.environmentLightingMode = i877[34]
  i876.ambientProbe = new pc.SphericalHarmonicsL2(i877[35])
  i876.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i877[36])
  i876.useReferenceAmbientProbe = !!i877[37]
  request.r(i877[38], i877[39], 0, i876, 'customReflection')
  request.r(i877[40], i877[41], 0, i876, 'defaultReflection')
  i876.defaultReflectionMode = i877[42]
  i876.defaultReflectionResolution = i877[43]
  i876.sunLightObjectId = i877[44]
  i876.pixelLightCount = i877[45]
  i876.defaultReflectionHDR = !!i877[46]
  i876.hasLightDataAsset = !!i877[47]
  i876.hasManualGenerate = !!i877[48]
  return i876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i883 = data
  request.r(i883[0], i883[1], 0, i882, 'lightmapColor')
  request.r(i883[2], i883[3], 0, i882, 'lightmapDirection')
  return i882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i884 = root || new UnityEngine.LightProbes()
  var i885 = data
  return i884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i893 = data
  var i895 = i893[0]
  var i894 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i895.length; i += 1) {
    i894.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i895[i + 0]));
  }
  i892.ShaderCompilationErrors = i894
  i892.name = i893[1]
  i892.guid = i893[2]
  var i897 = i893[3]
  var i896 = []
  for(var i = 0; i < i897.length; i += 1) {
    i896.push( i897[i + 0] );
  }
  i892.shaderDefinedKeywords = i896
  var i899 = i893[4]
  var i898 = []
  for(var i = 0; i < i899.length; i += 1) {
    i898.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i899[i + 0]) );
  }
  i892.passes = i898
  var i901 = i893[5]
  var i900 = []
  for(var i = 0; i < i901.length; i += 1) {
    i900.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i901[i + 0]) );
  }
  i892.usePasses = i900
  var i903 = i893[6]
  var i902 = []
  for(var i = 0; i < i903.length; i += 1) {
    i902.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i903[i + 0]) );
  }
  i892.defaultParameterValues = i902
  request.r(i893[7], i893[8], 0, i892, 'unityFallbackShader')
  i892.readDepth = !!i893[9]
  i892.hasDepthOnlyPass = !!i893[10]
  i892.isCreatedByShaderGraph = !!i893[11]
  i892.disableBatching = !!i893[12]
  i892.compiled = !!i893[13]
  return i892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i907 = data
  i906.shaderName = i907[0]
  i906.errorMessage = i907[1]
  return i906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i910 = root || new pc.UnityShaderPass()
  var i911 = data
  i910.id = i911[0]
  i910.subShaderIndex = i911[1]
  i910.name = i911[2]
  i910.passType = i911[3]
  i910.grabPassTextureName = i911[4]
  i910.usePass = !!i911[5]
  i910.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i911[6], i910.zTest)
  i910.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i911[7], i910.zWrite)
  i910.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i911[8], i910.culling)
  i910.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i911[9], i910.blending)
  i910.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i911[10], i910.alphaBlending)
  i910.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i911[11], i910.colorWriteMask)
  i910.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i911[12], i910.offsetUnits)
  i910.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i911[13], i910.offsetFactor)
  i910.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i911[14], i910.stencilRef)
  i910.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i911[15], i910.stencilReadMask)
  i910.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i911[16], i910.stencilWriteMask)
  i910.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i911[17], i910.stencilOp)
  i910.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i911[18], i910.stencilOpFront)
  i910.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i911[19], i910.stencilOpBack)
  var i913 = i911[20]
  var i912 = []
  for(var i = 0; i < i913.length; i += 1) {
    i912.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i913[i + 0]) );
  }
  i910.tags = i912
  var i915 = i911[21]
  var i914 = []
  for(var i = 0; i < i915.length; i += 1) {
    i914.push( i915[i + 0] );
  }
  i910.passDefinedKeywords = i914
  var i917 = i911[22]
  var i916 = []
  for(var i = 0; i < i917.length; i += 1) {
    i916.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i917[i + 0]) );
  }
  i910.passDefinedKeywordGroups = i916
  var i919 = i911[23]
  var i918 = []
  for(var i = 0; i < i919.length; i += 1) {
    i918.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i919[i + 0]) );
  }
  i910.variants = i918
  var i921 = i911[24]
  var i920 = []
  for(var i = 0; i < i921.length; i += 1) {
    i920.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i921[i + 0]) );
  }
  i910.excludedVariants = i920
  i910.hasDepthReader = !!i911[25]
  return i910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i923 = data
  i922.val = i923[0]
  i922.name = i923[1]
  return i922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i925 = data
  i924.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i925[0], i924.src)
  i924.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i925[1], i924.dst)
  i924.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i925[2], i924.op)
  return i924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i927 = data
  i926.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i927[0], i926.pass)
  i926.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i927[1], i926.fail)
  i926.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i927[2], i926.zFail)
  i926.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i927[3], i926.comp)
  return i926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i931 = data
  i930.name = i931[0]
  i930.value = i931[1]
  return i930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i935 = data
  var i937 = i935[0]
  var i936 = []
  for(var i = 0; i < i937.length; i += 1) {
    i936.push( i937[i + 0] );
  }
  i934.keywords = i936
  i934.hasDiscard = !!i935[1]
  return i934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i940 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i941 = data
  i940.passId = i941[0]
  i940.subShaderIndex = i941[1]
  var i943 = i941[2]
  var i942 = []
  for(var i = 0; i < i943.length; i += 1) {
    i942.push( i943[i + 0] );
  }
  i940.keywords = i942
  i940.vertexProgram = i941[3]
  i940.fragmentProgram = i941[4]
  i940.exportedForWebGl2 = !!i941[5]
  i940.readDepth = !!i941[6]
  return i940
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i947 = data
  request.r(i947[0], i947[1], 0, i946, 'shader')
  i946.pass = i947[2]
  return i946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i951 = data
  i950.name = i951[0]
  i950.type = i951[1]
  i950.value = new pc.Vec4( i951[2], i951[3], i951[4], i951[5] )
  i950.textureValue = i951[6]
  i950.shaderPropertyFlag = i951[7]
  return i950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i953 = data
  i952.name = i953[0]
  request.r(i953[1], i953[2], 0, i952, 'texture')
  i952.aabb = i953[3]
  i952.vertices = i953[4]
  i952.triangles = i953[5]
  i952.textureRect = UnityEngine.Rect.MinMaxRect(i953[6], i953[7], i953[8], i953[9])
  i952.packedRect = UnityEngine.Rect.MinMaxRect(i953[10], i953[11], i953[12], i953[13])
  i952.border = new pc.Vec4( i953[14], i953[15], i953[16], i953[17] )
  i952.transparency = i953[18]
  i952.bounds = i953[19]
  i952.pixelsPerUnit = i953[20]
  i952.textureWidth = i953[21]
  i952.textureHeight = i953[22]
  i952.nativeSize = new pc.Vec2( i953[23], i953[24] )
  i952.pivot = new pc.Vec2( i953[25], i953[26] )
  i952.textureRectOffset = new pc.Vec2( i953[27], i953[28] )
  return i952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i955 = data
  i954.name = i955[0]
  return i954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i957 = data
  i956.name = i957[0]
  i956.wrapMode = i957[1]
  i956.isLooping = !!i957[2]
  i956.length = i957[3]
  var i959 = i957[4]
  var i958 = []
  for(var i = 0; i < i959.length; i += 1) {
    i958.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i959[i + 0]) );
  }
  i956.curves = i958
  var i961 = i957[5]
  var i960 = []
  for(var i = 0; i < i961.length; i += 1) {
    i960.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i961[i + 0]) );
  }
  i956.events = i960
  i956.halfPrecision = !!i957[6]
  i956._frameRate = i957[7]
  i956.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i957[8], i956.localBounds)
  i956.hasMuscleCurves = !!i957[9]
  var i963 = i957[10]
  var i962 = []
  for(var i = 0; i < i963.length; i += 1) {
    i962.push( i963[i + 0] );
  }
  i956.clipMuscleConstant = i962
  i956.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i957[11], i956.clipBindingConstant)
  return i956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i967 = data
  i966.path = i967[0]
  i966.hash = i967[1]
  i966.componentType = i967[2]
  i966.property = i967[3]
  i966.keys = i967[4]
  var i969 = i967[5]
  var i968 = []
  for(var i = 0; i < i969.length; i += 1) {
    i968.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i969[i + 0]) );
  }
  i966.objectReferenceKeys = i968
  return i966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i973 = data
  i972.time = i973[0]
  request.r(i973[1], i973[2], 0, i972, 'value')
  return i972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i977 = data
  i976.functionName = i977[0]
  i976.floatParameter = i977[1]
  i976.intParameter = i977[2]
  i976.stringParameter = i977[3]
  request.r(i977[4], i977[5], 0, i976, 'objectReferenceParameter')
  i976.time = i977[6]
  return i976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i979 = data
  i978.center = new pc.Vec3( i979[0], i979[1], i979[2] )
  i978.extends = new pc.Vec3( i979[3], i979[4], i979[5] )
  return i978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i983 = data
  var i985 = i983[0]
  var i984 = []
  for(var i = 0; i < i985.length; i += 1) {
    i984.push( i985[i + 0] );
  }
  i982.genericBindings = i984
  var i987 = i983[1]
  var i986 = []
  for(var i = 0; i < i987.length; i += 1) {
    i986.push( i987[i + 0] );
  }
  i982.pptrCurveMapping = i986
  return i982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i989 = data
  i988.name = i989[0]
  i988.ascent = i989[1]
  i988.originalLineHeight = i989[2]
  i988.fontSize = i989[3]
  var i991 = i989[4]
  var i990 = []
  for(var i = 0; i < i991.length; i += 1) {
    i990.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i991[i + 0]) );
  }
  i988.characterInfo = i990
  request.r(i989[5], i989[6], 0, i988, 'texture')
  i988.originalFontSize = i989[7]
  return i988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i995 = data
  i994.index = i995[0]
  i994.advance = i995[1]
  i994.bearing = i995[2]
  i994.glyphWidth = i995[3]
  i994.glyphHeight = i995[4]
  i994.minX = i995[5]
  i994.maxX = i995[6]
  i994.minY = i995[7]
  i994.maxY = i995[8]
  i994.uvBottomLeftX = i995[9]
  i994.uvBottomLeftY = i995[10]
  i994.uvBottomRightX = i995[11]
  i994.uvBottomRightY = i995[12]
  i994.uvTopLeftX = i995[13]
  i994.uvTopLeftY = i995[14]
  i994.uvTopRightX = i995[15]
  i994.uvTopRightY = i995[16]
  return i994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i997 = data
  i996.name = i997[0]
  var i999 = i997[1]
  var i998 = []
  for(var i = 0; i < i999.length; i += 1) {
    i998.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i999[i + 0]) );
  }
  i996.layers = i998
  var i1001 = i997[2]
  var i1000 = []
  for(var i = 0; i < i1001.length; i += 1) {
    i1000.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1001[i + 0]) );
  }
  i996.parameters = i1000
  i996.animationClips = i997[3]
  i996.avatarUnsupported = i997[4]
  return i996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1005 = data
  i1004.name = i1005[0]
  i1004.defaultWeight = i1005[1]
  i1004.blendingMode = i1005[2]
  i1004.avatarMask = i1005[3]
  i1004.syncedLayerIndex = i1005[4]
  i1004.syncedLayerAffectsTiming = !!i1005[5]
  i1004.syncedLayers = i1005[6]
  i1004.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1005[7], i1004.stateMachine)
  return i1004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1007 = data
  i1006.id = i1007[0]
  i1006.name = i1007[1]
  i1006.path = i1007[2]
  var i1009 = i1007[3]
  var i1008 = []
  for(var i = 0; i < i1009.length; i += 1) {
    i1008.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1009[i + 0]) );
  }
  i1006.states = i1008
  var i1011 = i1007[4]
  var i1010 = []
  for(var i = 0; i < i1011.length; i += 1) {
    i1010.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1011[i + 0]) );
  }
  i1006.machines = i1010
  var i1013 = i1007[5]
  var i1012 = []
  for(var i = 0; i < i1013.length; i += 1) {
    i1012.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1013[i + 0]) );
  }
  i1006.entryStateTransitions = i1012
  var i1015 = i1007[6]
  var i1014 = []
  for(var i = 0; i < i1015.length; i += 1) {
    i1014.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1015[i + 0]) );
  }
  i1006.exitStateTransitions = i1014
  var i1017 = i1007[7]
  var i1016 = []
  for(var i = 0; i < i1017.length; i += 1) {
    i1016.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1017[i + 0]) );
  }
  i1006.anyStateTransitions = i1016
  i1006.defaultStateId = i1007[8]
  return i1006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1021 = data
  i1020.id = i1021[0]
  i1020.name = i1021[1]
  i1020.cycleOffset = i1021[2]
  i1020.cycleOffsetParameter = i1021[3]
  i1020.cycleOffsetParameterActive = !!i1021[4]
  i1020.mirror = !!i1021[5]
  i1020.mirrorParameter = i1021[6]
  i1020.mirrorParameterActive = !!i1021[7]
  i1020.motionId = i1021[8]
  i1020.nameHash = i1021[9]
  i1020.fullPathHash = i1021[10]
  i1020.speed = i1021[11]
  i1020.speedParameter = i1021[12]
  i1020.speedParameterActive = !!i1021[13]
  i1020.tag = i1021[14]
  i1020.tagHash = i1021[15]
  i1020.writeDefaultValues = !!i1021[16]
  var i1023 = i1021[17]
  var i1022 = []
  for(var i = 0; i < i1023.length; i += 2) {
  request.r(i1023[i + 0], i1023[i + 1], 2, i1022, '')
  }
  i1020.behaviours = i1022
  var i1025 = i1021[18]
  var i1024 = []
  for(var i = 0; i < i1025.length; i += 1) {
    i1024.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1025[i + 0]) );
  }
  i1020.transitions = i1024
  return i1020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1031 = data
  i1030.fullPath = i1031[0]
  i1030.canTransitionToSelf = !!i1031[1]
  i1030.duration = i1031[2]
  i1030.exitTime = i1031[3]
  i1030.hasExitTime = !!i1031[4]
  i1030.hasFixedDuration = !!i1031[5]
  i1030.interruptionSource = i1031[6]
  i1030.offset = i1031[7]
  i1030.orderedInterruption = !!i1031[8]
  i1030.destinationStateId = i1031[9]
  i1030.isExit = !!i1031[10]
  i1030.mute = !!i1031[11]
  i1030.solo = !!i1031[12]
  var i1033 = i1031[13]
  var i1032 = []
  for(var i = 0; i < i1033.length; i += 1) {
    i1032.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1033[i + 0]) );
  }
  i1030.conditions = i1032
  return i1030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1039 = data
  i1038.destinationStateId = i1039[0]
  i1038.isExit = !!i1039[1]
  i1038.mute = !!i1039[2]
  i1038.solo = !!i1039[3]
  var i1041 = i1039[4]
  var i1040 = []
  for(var i = 0; i < i1041.length; i += 1) {
    i1040.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1041[i + 0]) );
  }
  i1038.conditions = i1040
  return i1038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1045 = data
  i1044.defaultBool = !!i1045[0]
  i1044.defaultFloat = i1045[1]
  i1044.defaultInt = i1045[2]
  i1044.name = i1045[3]
  i1044.nameHash = i1045[4]
  i1044.type = i1045[5]
  return i1044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1047 = data
  i1046.name = i1047[0]
  i1046.bytes64 = i1047[1]
  i1046.data = i1047[2]
  return i1046
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1048 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1049 = data
  request.r(i1049[0], i1049[1], 0, i1048, 'atlas')
  i1048.normalStyle = i1049[2]
  i1048.normalSpacingOffset = i1049[3]
  i1048.boldStyle = i1049[4]
  i1048.boldSpacing = i1049[5]
  i1048.italicStyle = i1049[6]
  i1048.tabSize = i1049[7]
  i1048.hashCode = i1049[8]
  request.r(i1049[9], i1049[10], 0, i1048, 'material')
  i1048.materialHashCode = i1049[11]
  i1048.m_Version = i1049[12]
  i1048.m_SourceFontFileGUID = i1049[13]
  request.r(i1049[14], i1049[15], 0, i1048, 'm_SourceFontFile_EditorRef')
  request.r(i1049[16], i1049[17], 0, i1048, 'm_SourceFontFile')
  i1048.m_AtlasPopulationMode = i1049[18]
  i1048.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1049[19], i1048.m_FaceInfo)
  var i1051 = i1049[20]
  var i1050 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1051.length; i += 1) {
    i1050.add(request.d('UnityEngine.TextCore.Glyph', i1051[i + 0]));
  }
  i1048.m_GlyphTable = i1050
  var i1053 = i1049[21]
  var i1052 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1053.length; i += 1) {
    i1052.add(request.d('TMPro.TMP_Character', i1053[i + 0]));
  }
  i1048.m_CharacterTable = i1052
  var i1055 = i1049[22]
  var i1054 = []
  for(var i = 0; i < i1055.length; i += 2) {
  request.r(i1055[i + 0], i1055[i + 1], 2, i1054, '')
  }
  i1048.m_AtlasTextures = i1054
  i1048.m_AtlasTextureIndex = i1049[23]
  i1048.m_IsMultiAtlasTexturesEnabled = !!i1049[24]
  i1048.m_ClearDynamicDataOnBuild = !!i1049[25]
  var i1057 = i1049[26]
  var i1056 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1057.length; i += 1) {
    i1056.add(request.d('UnityEngine.TextCore.GlyphRect', i1057[i + 0]));
  }
  i1048.m_UsedGlyphRects = i1056
  var i1059 = i1049[27]
  var i1058 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1059.length; i += 1) {
    i1058.add(request.d('UnityEngine.TextCore.GlyphRect', i1059[i + 0]));
  }
  i1048.m_FreeGlyphRects = i1058
  i1048.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1049[28], i1048.m_fontInfo)
  i1048.m_AtlasWidth = i1049[29]
  i1048.m_AtlasHeight = i1049[30]
  i1048.m_AtlasPadding = i1049[31]
  i1048.m_AtlasRenderMode = i1049[32]
  var i1061 = i1049[33]
  var i1060 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1061.length; i += 1) {
    i1060.add(request.d('TMPro.TMP_Glyph', i1061[i + 0]));
  }
  i1048.m_glyphInfoList = i1060
  i1048.m_KerningTable = request.d('TMPro.KerningTable', i1049[34], i1048.m_KerningTable)
  i1048.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1049[35], i1048.m_FontFeatureTable)
  var i1063 = i1049[36]
  var i1062 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1063.length; i += 2) {
  request.r(i1063[i + 0], i1063[i + 1], 1, i1062, '')
  }
  i1048.fallbackFontAssets = i1062
  var i1065 = i1049[37]
  var i1064 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1065.length; i += 2) {
  request.r(i1065[i + 0], i1065[i + 1], 1, i1064, '')
  }
  i1048.m_FallbackFontAssetTable = i1064
  i1048.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1049[38], i1048.m_CreationSettings)
  var i1067 = i1049[39]
  var i1066 = []
  for(var i = 0; i < i1067.length; i += 1) {
    i1066.push( request.d('TMPro.TMP_FontWeightPair', i1067[i + 0]) );
  }
  i1048.m_FontWeightTable = i1066
  var i1069 = i1049[40]
  var i1068 = []
  for(var i = 0; i < i1069.length; i += 1) {
    i1068.push( request.d('TMPro.TMP_FontWeightPair', i1069[i + 0]) );
  }
  i1048.fontWeights = i1068
  return i1048
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1070 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1071 = data
  i1070.m_FaceIndex = i1071[0]
  i1070.m_FamilyName = i1071[1]
  i1070.m_StyleName = i1071[2]
  i1070.m_PointSize = i1071[3]
  i1070.m_Scale = i1071[4]
  i1070.m_UnitsPerEM = i1071[5]
  i1070.m_LineHeight = i1071[6]
  i1070.m_AscentLine = i1071[7]
  i1070.m_CapLine = i1071[8]
  i1070.m_MeanLine = i1071[9]
  i1070.m_Baseline = i1071[10]
  i1070.m_DescentLine = i1071[11]
  i1070.m_SuperscriptOffset = i1071[12]
  i1070.m_SuperscriptSize = i1071[13]
  i1070.m_SubscriptOffset = i1071[14]
  i1070.m_SubscriptSize = i1071[15]
  i1070.m_UnderlineOffset = i1071[16]
  i1070.m_UnderlineThickness = i1071[17]
  i1070.m_StrikethroughOffset = i1071[18]
  i1070.m_StrikethroughThickness = i1071[19]
  i1070.m_TabWidth = i1071[20]
  return i1070
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1074 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1075 = data
  i1074.m_Index = i1075[0]
  i1074.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1075[1], i1074.m_Metrics)
  i1074.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1075[2], i1074.m_GlyphRect)
  i1074.m_Scale = i1075[3]
  i1074.m_AtlasIndex = i1075[4]
  i1074.m_ClassDefinitionType = i1075[5]
  return i1074
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1076 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1077 = data
  i1076.m_Width = i1077[0]
  i1076.m_Height = i1077[1]
  i1076.m_HorizontalBearingX = i1077[2]
  i1076.m_HorizontalBearingY = i1077[3]
  i1076.m_HorizontalAdvance = i1077[4]
  return i1076
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1078 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1079 = data
  i1078.m_X = i1079[0]
  i1078.m_Y = i1079[1]
  i1078.m_Width = i1079[2]
  i1078.m_Height = i1079[3]
  return i1078
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1082 = root || request.c( 'TMPro.TMP_Character' )
  var i1083 = data
  i1082.m_ElementType = i1083[0]
  i1082.m_Unicode = i1083[1]
  i1082.m_GlyphIndex = i1083[2]
  i1082.m_Scale = i1083[3]
  return i1082
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1088 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1089 = data
  i1088.Name = i1089[0]
  i1088.PointSize = i1089[1]
  i1088.Scale = i1089[2]
  i1088.CharacterCount = i1089[3]
  i1088.LineHeight = i1089[4]
  i1088.Baseline = i1089[5]
  i1088.Ascender = i1089[6]
  i1088.CapHeight = i1089[7]
  i1088.Descender = i1089[8]
  i1088.CenterLine = i1089[9]
  i1088.SuperscriptOffset = i1089[10]
  i1088.SubscriptOffset = i1089[11]
  i1088.SubSize = i1089[12]
  i1088.Underline = i1089[13]
  i1088.UnderlineThickness = i1089[14]
  i1088.strikethrough = i1089[15]
  i1088.strikethroughThickness = i1089[16]
  i1088.TabWidth = i1089[17]
  i1088.Padding = i1089[18]
  i1088.AtlasWidth = i1089[19]
  i1088.AtlasHeight = i1089[20]
  return i1088
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1092 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1093 = data
  i1092.id = i1093[0]
  i1092.x = i1093[1]
  i1092.y = i1093[2]
  i1092.width = i1093[3]
  i1092.height = i1093[4]
  i1092.xOffset = i1093[5]
  i1092.yOffset = i1093[6]
  i1092.xAdvance = i1093[7]
  i1092.scale = i1093[8]
  return i1092
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1094 = root || request.c( 'TMPro.KerningTable' )
  var i1095 = data
  var i1097 = i1095[0]
  var i1096 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1097.length; i += 1) {
    i1096.add(request.d('TMPro.KerningPair', i1097[i + 0]));
  }
  i1094.kerningPairs = i1096
  return i1094
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1100 = root || request.c( 'TMPro.KerningPair' )
  var i1101 = data
  i1100.xOffset = i1101[0]
  i1100.m_FirstGlyph = i1101[1]
  i1100.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1101[2], i1100.m_FirstGlyphAdjustments)
  i1100.m_SecondGlyph = i1101[3]
  i1100.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1101[4], i1100.m_SecondGlyphAdjustments)
  i1100.m_IgnoreSpacingAdjustments = !!i1101[5]
  return i1100
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1102 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1103 = data
  var i1105 = i1103[0]
  var i1104 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1105.length; i += 1) {
    i1104.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1105[i + 0]));
  }
  i1102.m_GlyphPairAdjustmentRecords = i1104
  return i1102
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1108 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1109 = data
  i1108.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1109[0], i1108.m_FirstAdjustmentRecord)
  i1108.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1109[1], i1108.m_SecondAdjustmentRecord)
  i1108.m_FeatureLookupFlags = i1109[2]
  return i1108
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1112 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1113 = data
  i1112.sourceFontFileName = i1113[0]
  i1112.sourceFontFileGUID = i1113[1]
  i1112.pointSizeSamplingMode = i1113[2]
  i1112.pointSize = i1113[3]
  i1112.padding = i1113[4]
  i1112.packingMode = i1113[5]
  i1112.atlasWidth = i1113[6]
  i1112.atlasHeight = i1113[7]
  i1112.characterSetSelectionMode = i1113[8]
  i1112.characterSequence = i1113[9]
  i1112.referencedFontAssetGUID = i1113[10]
  i1112.referencedTextAssetGUID = i1113[11]
  i1112.fontStyle = i1113[12]
  i1112.fontStyleModifier = i1113[13]
  i1112.renderMode = i1113[14]
  i1112.includeFontFeatures = !!i1113[15]
  return i1112
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1116 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1117 = data
  request.r(i1117[0], i1117[1], 0, i1116, 'regularTypeface')
  request.r(i1117[2], i1117[3], 0, i1116, 'italicTypeface')
  return i1116
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1118 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1119 = data
  i1118.m_GlyphIndex = i1119[0]
  i1118.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1119[1], i1118.m_GlyphValueRecord)
  return i1118
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1120 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1121 = data
  i1120.m_XPlacement = i1121[0]
  i1120.m_YPlacement = i1121[1]
  i1120.m_XAdvance = i1121[2]
  i1120.m_YAdvance = i1121[3]
  return i1120
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i1122 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i1123 = data
  var i1125 = i1123[0]
  var i1124 = []
  for(var i = 0; i < i1125.length; i += 2) {
  request.r(i1125[i + 0], i1125[i + 1], 2, i1124, '')
  }
  i1122.atlasAssets = i1124
  i1122.scale = i1123[1]
  request.r(i1123[2], i1123[3], 0, i1122, 'skeletonJSON')
  i1122.isUpgradingBlendModeMaterials = !!i1123[4]
  i1122.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i1123[5], i1122.blendModeMaterials)
  var i1127 = i1123[6]
  var i1126 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i1127.length; i += 2) {
  request.r(i1127[i + 0], i1127[i + 1], 1, i1126, '')
  }
  i1122.skeletonDataModifiers = i1126
  var i1129 = i1123[7]
  var i1128 = []
  for(var i = 0; i < i1129.length; i += 1) {
    i1128.push( i1129[i + 0] );
  }
  i1122.fromAnimation = i1128
  var i1131 = i1123[8]
  var i1130 = []
  for(var i = 0; i < i1131.length; i += 1) {
    i1130.push( i1131[i + 0] );
  }
  i1122.toAnimation = i1130
  i1122.duration = i1123[9]
  i1122.defaultMix = i1123[10]
  request.r(i1123[11], i1123[12], 0, i1122, 'controller')
  return i1122
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i1134 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i1135 = data
  i1134.applyAdditiveMaterial = !!i1135[0]
  var i1137 = i1135[1]
  var i1136 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1137.length; i += 1) {
    i1136.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1137[i + 0]));
  }
  i1134.additiveMaterials = i1136
  var i1139 = i1135[2]
  var i1138 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1139.length; i += 1) {
    i1138.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1139[i + 0]));
  }
  i1134.multiplyMaterials = i1138
  var i1141 = i1135[3]
  var i1140 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1141.length; i += 1) {
    i1140.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1141[i + 0]));
  }
  i1134.screenMaterials = i1140
  i1134.requiresBlendModeMaterials = !!i1135[4]
  return i1134
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i1144 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i1145 = data
  i1144.pageName = i1145[0]
  request.r(i1145[1], i1145[2], 0, i1144, 'material')
  return i1144
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i1148 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i1149 = data
  request.r(i1149[0], i1149[1], 0, i1148, 'atlasFile')
  var i1151 = i1149[2]
  var i1150 = []
  for(var i = 0; i < i1151.length; i += 2) {
  request.r(i1151[i + 0], i1151[i + 1], 2, i1150, '')
  }
  i1148.materials = i1150
  i1148.textureLoadingMode = i1149[3]
  request.r(i1149[4], i1149[5], 0, i1148, 'onDemandTextureLoader')
  return i1148
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1152 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1153 = data
  i1152.useSafeMode = !!i1153[0]
  i1152.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1153[1], i1152.safeModeOptions)
  i1152.timeScale = i1153[2]
  i1152.unscaledTimeScale = i1153[3]
  i1152.useSmoothDeltaTime = !!i1153[4]
  i1152.maxSmoothUnscaledTime = i1153[5]
  i1152.rewindCallbackMode = i1153[6]
  i1152.showUnityEditorReport = !!i1153[7]
  i1152.logBehaviour = i1153[8]
  i1152.drawGizmos = !!i1153[9]
  i1152.defaultRecyclable = !!i1153[10]
  i1152.defaultAutoPlay = i1153[11]
  i1152.defaultUpdateType = i1153[12]
  i1152.defaultTimeScaleIndependent = !!i1153[13]
  i1152.defaultEaseType = i1153[14]
  i1152.defaultEaseOvershootOrAmplitude = i1153[15]
  i1152.defaultEasePeriod = i1153[16]
  i1152.defaultAutoKill = !!i1153[17]
  i1152.defaultLoopType = i1153[18]
  i1152.debugMode = !!i1153[19]
  i1152.debugStoreTargetId = !!i1153[20]
  i1152.showPreviewPanel = !!i1153[21]
  i1152.storeSettingsLocation = i1153[22]
  i1152.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1153[23], i1152.modules)
  i1152.createASMDEF = !!i1153[24]
  i1152.showPlayingTweens = !!i1153[25]
  i1152.showPausedTweens = !!i1153[26]
  return i1152
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1154 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1155 = data
  i1154.logBehaviour = i1155[0]
  i1154.nestedTweenFailureBehaviour = i1155[1]
  return i1154
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1156 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1157 = data
  i1156.showPanel = !!i1157[0]
  i1156.audioEnabled = !!i1157[1]
  i1156.physicsEnabled = !!i1157[2]
  i1156.physics2DEnabled = !!i1157[3]
  i1156.spriteEnabled = !!i1157[4]
  i1156.uiEnabled = !!i1157[5]
  i1156.textMeshProEnabled = !!i1157[6]
  i1156.tk2DEnabled = !!i1157[7]
  i1156.deAudioEnabled = !!i1157[8]
  i1156.deUnityExtendedEnabled = !!i1157[9]
  i1156.epoOutlineEnabled = !!i1157[10]
  return i1156
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1158 = root || request.c( 'TMPro.TMP_Settings' )
  var i1159 = data
  i1158.m_enableWordWrapping = !!i1159[0]
  i1158.m_enableKerning = !!i1159[1]
  i1158.m_enableExtraPadding = !!i1159[2]
  i1158.m_enableTintAllSprites = !!i1159[3]
  i1158.m_enableParseEscapeCharacters = !!i1159[4]
  i1158.m_EnableRaycastTarget = !!i1159[5]
  i1158.m_GetFontFeaturesAtRuntime = !!i1159[6]
  i1158.m_missingGlyphCharacter = i1159[7]
  i1158.m_warningsDisabled = !!i1159[8]
  request.r(i1159[9], i1159[10], 0, i1158, 'm_defaultFontAsset')
  i1158.m_defaultFontAssetPath = i1159[11]
  i1158.m_defaultFontSize = i1159[12]
  i1158.m_defaultAutoSizeMinRatio = i1159[13]
  i1158.m_defaultAutoSizeMaxRatio = i1159[14]
  i1158.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1159[15], i1159[16] )
  i1158.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1159[17], i1159[18] )
  i1158.m_autoSizeTextContainer = !!i1159[19]
  i1158.m_IsTextObjectScaleStatic = !!i1159[20]
  var i1161 = i1159[21]
  var i1160 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1161.length; i += 2) {
  request.r(i1161[i + 0], i1161[i + 1], 1, i1160, '')
  }
  i1158.m_fallbackFontAssets = i1160
  i1158.m_matchMaterialPreset = !!i1159[22]
  request.r(i1159[23], i1159[24], 0, i1158, 'm_defaultSpriteAsset')
  i1158.m_defaultSpriteAssetPath = i1159[25]
  i1158.m_enableEmojiSupport = !!i1159[26]
  i1158.m_MissingCharacterSpriteUnicode = i1159[27]
  i1158.m_defaultColorGradientPresetsPath = i1159[28]
  request.r(i1159[29], i1159[30], 0, i1158, 'm_defaultStyleSheet')
  i1158.m_StyleSheetsResourcePath = i1159[31]
  request.r(i1159[32], i1159[33], 0, i1158, 'm_leadingCharacters')
  request.r(i1159[34], i1159[35], 0, i1158, 'm_followingCharacters')
  i1158.m_UseModernHangulLineBreakingRules = !!i1159[36]
  return i1158
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1162 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1163 = data
  request.r(i1163[0], i1163[1], 0, i1162, 'spriteSheet')
  var i1165 = i1163[2]
  var i1164 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1165.length; i += 1) {
    i1164.add(request.d('TMPro.TMP_Sprite', i1165[i + 0]));
  }
  i1162.spriteInfoList = i1164
  var i1167 = i1163[3]
  var i1166 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1167.length; i += 2) {
  request.r(i1167[i + 0], i1167[i + 1], 1, i1166, '')
  }
  i1162.fallbackSpriteAssets = i1166
  i1162.hashCode = i1163[4]
  request.r(i1163[5], i1163[6], 0, i1162, 'material')
  i1162.materialHashCode = i1163[7]
  i1162.m_Version = i1163[8]
  i1162.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1163[9], i1162.m_FaceInfo)
  var i1169 = i1163[10]
  var i1168 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1169.length; i += 1) {
    i1168.add(request.d('TMPro.TMP_SpriteCharacter', i1169[i + 0]));
  }
  i1162.m_SpriteCharacterTable = i1168
  var i1171 = i1163[11]
  var i1170 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1171.length; i += 1) {
    i1170.add(request.d('TMPro.TMP_SpriteGlyph', i1171[i + 0]));
  }
  i1162.m_SpriteGlyphTable = i1170
  return i1162
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1174 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1175 = data
  i1174.name = i1175[0]
  i1174.hashCode = i1175[1]
  i1174.unicode = i1175[2]
  i1174.pivot = new pc.Vec2( i1175[3], i1175[4] )
  request.r(i1175[5], i1175[6], 0, i1174, 'sprite')
  i1174.id = i1175[7]
  i1174.x = i1175[8]
  i1174.y = i1175[9]
  i1174.width = i1175[10]
  i1174.height = i1175[11]
  i1174.xOffset = i1175[12]
  i1174.yOffset = i1175[13]
  i1174.xAdvance = i1175[14]
  i1174.scale = i1175[15]
  return i1174
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1180 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1181 = data
  i1180.m_Name = i1181[0]
  i1180.m_HashCode = i1181[1]
  i1180.m_ElementType = i1181[2]
  i1180.m_Unicode = i1181[3]
  i1180.m_GlyphIndex = i1181[4]
  i1180.m_Scale = i1181[5]
  return i1180
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1184 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1185 = data
  request.r(i1185[0], i1185[1], 0, i1184, 'sprite')
  i1184.m_Index = i1185[2]
  i1184.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1185[3], i1184.m_Metrics)
  i1184.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1185[4], i1184.m_GlyphRect)
  i1184.m_Scale = i1185[5]
  i1184.m_AtlasIndex = i1185[6]
  i1184.m_ClassDefinitionType = i1185[7]
  return i1184
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1186 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1187 = data
  var i1189 = i1187[0]
  var i1188 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1189.length; i += 1) {
    i1188.add(request.d('TMPro.TMP_Style', i1189[i + 0]));
  }
  i1186.m_StyleList = i1188
  return i1186
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1192 = root || request.c( 'TMPro.TMP_Style' )
  var i1193 = data
  i1192.m_Name = i1193[0]
  i1192.m_HashCode = i1193[1]
  i1192.m_OpeningDefinition = i1193[2]
  i1192.m_ClosingDefinition = i1193[3]
  i1192.m_OpeningTagArray = i1193[4]
  i1192.m_ClosingTagArray = i1193[5]
  i1192.m_OpeningTagUnicodeArray = i1193[6]
  i1192.m_ClosingTagUnicodeArray = i1193[7]
  return i1192
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1194 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1195 = data
  var i1197 = i1195[0]
  var i1196 = []
  for(var i = 0; i < i1197.length; i += 1) {
    i1196.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1197[i + 0]) );
  }
  i1194.files = i1196
  i1194.componentToPrefabIds = i1195[1]
  return i1194
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1200 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1201 = data
  i1200.path = i1201[0]
  request.r(i1201[1], i1201[2], 0, i1200, 'unityObject')
  return i1200
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1202 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1203 = data
  var i1205 = i1203[0]
  var i1204 = []
  for(var i = 0; i < i1205.length; i += 1) {
    i1204.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1205[i + 0]) );
  }
  i1202.scriptsExecutionOrder = i1204
  var i1207 = i1203[1]
  var i1206 = []
  for(var i = 0; i < i1207.length; i += 1) {
    i1206.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1207[i + 0]) );
  }
  i1202.sortingLayers = i1206
  var i1209 = i1203[2]
  var i1208 = []
  for(var i = 0; i < i1209.length; i += 1) {
    i1208.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1209[i + 0]) );
  }
  i1202.cullingLayers = i1208
  i1202.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1203[3], i1202.timeSettings)
  i1202.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1203[4], i1202.physicsSettings)
  i1202.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1203[5], i1202.physics2DSettings)
  i1202.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1203[6], i1202.qualitySettings)
  i1202.enableRealtimeShadows = !!i1203[7]
  i1202.enableAutoInstancing = !!i1203[8]
  i1202.enableStaticBatching = !!i1203[9]
  i1202.enableDynamicBatching = !!i1203[10]
  i1202.lightmapEncodingQuality = i1203[11]
  i1202.desiredColorSpace = i1203[12]
  var i1211 = i1203[13]
  var i1210 = []
  for(var i = 0; i < i1211.length; i += 1) {
    i1210.push( i1211[i + 0] );
  }
  i1202.allTags = i1210
  return i1202
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1214 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1215 = data
  i1214.name = i1215[0]
  i1214.value = i1215[1]
  return i1214
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1218 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1219 = data
  i1218.id = i1219[0]
  i1218.name = i1219[1]
  i1218.value = i1219[2]
  return i1218
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1222 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1223 = data
  i1222.id = i1223[0]
  i1222.name = i1223[1]
  return i1222
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1224 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1225 = data
  i1224.fixedDeltaTime = i1225[0]
  i1224.maximumDeltaTime = i1225[1]
  i1224.timeScale = i1225[2]
  i1224.maximumParticleTimestep = i1225[3]
  return i1224
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1226 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1227 = data
  i1226.gravity = new pc.Vec3( i1227[0], i1227[1], i1227[2] )
  i1226.defaultSolverIterations = i1227[3]
  i1226.bounceThreshold = i1227[4]
  i1226.autoSyncTransforms = !!i1227[5]
  i1226.autoSimulation = !!i1227[6]
  var i1229 = i1227[7]
  var i1228 = []
  for(var i = 0; i < i1229.length; i += 1) {
    i1228.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1229[i + 0]) );
  }
  i1226.collisionMatrix = i1228
  return i1226
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1232 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1233 = data
  i1232.enabled = !!i1233[0]
  i1232.layerId = i1233[1]
  i1232.otherLayerId = i1233[2]
  return i1232
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1234 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1235 = data
  request.r(i1235[0], i1235[1], 0, i1234, 'material')
  i1234.gravity = new pc.Vec2( i1235[2], i1235[3] )
  i1234.positionIterations = i1235[4]
  i1234.velocityIterations = i1235[5]
  i1234.velocityThreshold = i1235[6]
  i1234.maxLinearCorrection = i1235[7]
  i1234.maxAngularCorrection = i1235[8]
  i1234.maxTranslationSpeed = i1235[9]
  i1234.maxRotationSpeed = i1235[10]
  i1234.baumgarteScale = i1235[11]
  i1234.baumgarteTOIScale = i1235[12]
  i1234.timeToSleep = i1235[13]
  i1234.linearSleepTolerance = i1235[14]
  i1234.angularSleepTolerance = i1235[15]
  i1234.defaultContactOffset = i1235[16]
  i1234.autoSimulation = !!i1235[17]
  i1234.queriesHitTriggers = !!i1235[18]
  i1234.queriesStartInColliders = !!i1235[19]
  i1234.callbacksOnDisable = !!i1235[20]
  i1234.reuseCollisionCallbacks = !!i1235[21]
  i1234.autoSyncTransforms = !!i1235[22]
  var i1237 = i1235[23]
  var i1236 = []
  for(var i = 0; i < i1237.length; i += 1) {
    i1236.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1237[i + 0]) );
  }
  i1234.collisionMatrix = i1236
  return i1234
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1240 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1241 = data
  i1240.enabled = !!i1241[0]
  i1240.layerId = i1241[1]
  i1240.otherLayerId = i1241[2]
  return i1240
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1242 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1243 = data
  var i1245 = i1243[0]
  var i1244 = []
  for(var i = 0; i < i1245.length; i += 1) {
    i1244.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1245[i + 0]) );
  }
  i1242.qualityLevels = i1244
  var i1247 = i1243[1]
  var i1246 = []
  for(var i = 0; i < i1247.length; i += 1) {
    i1246.push( i1247[i + 0] );
  }
  i1242.names = i1246
  i1242.shadows = i1243[2]
  i1242.anisotropicFiltering = i1243[3]
  i1242.antiAliasing = i1243[4]
  i1242.lodBias = i1243[5]
  i1242.shadowCascades = i1243[6]
  i1242.shadowDistance = i1243[7]
  i1242.shadowmaskMode = i1243[8]
  i1242.shadowProjection = i1243[9]
  i1242.shadowResolution = i1243[10]
  i1242.softParticles = !!i1243[11]
  i1242.softVegetation = !!i1243[12]
  i1242.activeColorSpace = i1243[13]
  i1242.desiredColorSpace = i1243[14]
  i1242.masterTextureLimit = i1243[15]
  i1242.maxQueuedFrames = i1243[16]
  i1242.particleRaycastBudget = i1243[17]
  i1242.pixelLightCount = i1243[18]
  i1242.realtimeReflectionProbes = !!i1243[19]
  i1242.shadowCascade2Split = i1243[20]
  i1242.shadowCascade4Split = new pc.Vec3( i1243[21], i1243[22], i1243[23] )
  i1242.streamingMipmapsActive = !!i1243[24]
  i1242.vSyncCount = i1243[25]
  i1242.asyncUploadBufferSize = i1243[26]
  i1242.asyncUploadTimeSlice = i1243[27]
  i1242.billboardsFaceCameraPosition = !!i1243[28]
  i1242.shadowNearPlaneOffset = i1243[29]
  i1242.streamingMipmapsMemoryBudget = i1243[30]
  i1242.maximumLODLevel = i1243[31]
  i1242.streamingMipmapsAddAllCameras = !!i1243[32]
  i1242.streamingMipmapsMaxLevelReduction = i1243[33]
  i1242.streamingMipmapsRenderersPerFrame = i1243[34]
  i1242.resolutionScalingFixedDPIFactor = i1243[35]
  i1242.streamingMipmapsMaxFileIORequests = i1243[36]
  i1242.currentQualityLevel = i1243[37]
  return i1242
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1252 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1253 = data
  i1252.mode = i1253[0]
  i1252.parameter = i1253[1]
  i1252.threshold = i1253[2]
  return i1252
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1254 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1255 = data
  i1254.xPlacement = i1255[0]
  i1254.yPlacement = i1255[1]
  i1254.xAdvance = i1255[2]
  i1254.yAdvance = i1255[3]
  return i1254
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"frontSortingLayerID":0,"frontSortingOrder":1,"backSortingLayerID":2,"backSortingOrder":3,"alphaCutoff":4,"sprite":5,"tileMode":7,"isCustomRangeActive":8,"spriteSortPoint":9,"enabled":10,"sharedMaterial":11,"sharedMaterials":13,"receiveShadows":14,"shadowCastingMode":15,"sortingLayerID":16,"sortingOrder":17,"lightmapIndex":18,"lightmapSceneIndex":19,"lightmapScaleOffset":20,"lightProbeUsage":24,"reflectionProbeUsage":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"56":[57],"58":[57],"59":[57],"60":[57],"61":[57],"62":[57],"63":[64],"65":[14],"66":[67],"68":[67],"69":[67],"70":[67],"71":[67],"72":[67],"73":[67],"74":[12],"75":[12],"76":[12],"77":[12],"78":[12],"79":[12],"80":[12],"81":[12],"82":[12],"83":[12],"84":[12],"85":[12],"86":[12],"87":[14],"88":[38],"89":[90],"91":[90],"24":[23],"92":[93],"94":[23],"95":[27,23],"39":[38],"96":[27,23],"97":[46,38],"98":[38],"99":[38,41],"100":[67],"101":[12],"102":[93],"103":[104],"105":[106],"107":[2],"108":[106],"109":[23],"110":[23],"26":[24],"28":[27,23],"111":[23],"25":[24],"112":[23],"113":[23],"114":[23],"115":[23],"116":[23],"117":[23],"118":[23],"119":[23],"120":[23],"121":[27,23],"122":[23],"123":[23],"124":[23],"125":[23],"126":[27,23],"127":[23],"128":[17],"129":[17],"18":[17],"130":[17],"131":[14],"132":[14],"133":[134],"135":[14],"136":[23],"137":[38,23],"29":[23,27],"138":[23],"139":[27,23],"140":[38],"141":[27,23],"142":[23],"143":[106]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Material","UnityEngine.MonoBehaviour","Disk","Tray","UnityEngine.GameObject","Slot","DragItem","UnityEngine.BoxCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","TrayManager","DiskTransform","UnityEngine.SpriteMask","ConveyorBelt","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.UI.Button","GameManager","ScalePopLoop","ProgressBrain","EndCart_Win","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.MeshRenderer","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonDataAsset","UnityEngine.MeshFilter","Button","AudioManager","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","Tutorial","UnityEngine.Font","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonMecanim","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.62f3";

Deserializers.productName = "Prj_Demo";

Deserializers.lunaInitializationTime = "12/18/2025 04:11:57";

Deserializers.lunaDaysRunning = "0.3";

Deserializers.lunaVersion = "7.0.0";

Deserializers.lunaSHA = "3bcc3e343f23b4c67e768a811a8d088c7f7adbc5";

Deserializers.creativeName = "";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1818";

Deserializers.runtimeAnalysisExcludedMethodsCount = "5478";

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

Deserializers.buildID = "a34cf354-ab0b-42ed-8fbf-74a1cd1c9502";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

