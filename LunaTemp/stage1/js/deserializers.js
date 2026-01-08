var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i664 = root || request.c( 'UnityEngine.JointSpring' )
  var i665 = data
  i664.spring = i665[0]
  i664.damper = i665[1]
  i664.targetPosition = i665[2]
  return i664
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i666 = root || request.c( 'UnityEngine.JointMotor' )
  var i667 = data
  i666.m_TargetVelocity = i667[0]
  i666.m_Force = i667[1]
  i666.m_FreeSpin = i667[2]
  return i666
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i668 = root || request.c( 'UnityEngine.JointLimits' )
  var i669 = data
  i668.m_Min = i669[0]
  i668.m_Max = i669[1]
  i668.m_Bounciness = i669[2]
  i668.m_BounceMinVelocity = i669[3]
  i668.m_ContactDistance = i669[4]
  i668.minBounce = i669[5]
  i668.maxBounce = i669[6]
  return i668
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i670 = root || request.c( 'UnityEngine.JointDrive' )
  var i671 = data
  i670.m_PositionSpring = i671[0]
  i670.m_PositionDamper = i671[1]
  i670.m_MaximumForce = i671[2]
  i670.m_UseAcceleration = i671[3]
  return i670
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i672 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i673 = data
  i672.m_Spring = i673[0]
  i672.m_Damper = i673[1]
  return i672
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i674 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i675 = data
  i674.m_Limit = i675[0]
  i674.m_Bounciness = i675[1]
  i674.m_ContactDistance = i675[2]
  return i674
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i676 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i677 = data
  i676.m_ExtremumSlip = i677[0]
  i676.m_ExtremumValue = i677[1]
  i676.m_AsymptoteSlip = i677[2]
  i676.m_AsymptoteValue = i677[3]
  i676.m_Stiffness = i677[4]
  return i676
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i678 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i679 = data
  i678.m_LowerAngle = i679[0]
  i678.m_UpperAngle = i679[1]
  return i678
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i680 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i681 = data
  i680.m_MotorSpeed = i681[0]
  i680.m_MaximumMotorTorque = i681[1]
  return i680
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i682 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i683 = data
  i682.m_DampingRatio = i683[0]
  i682.m_Frequency = i683[1]
  i682.m_Angle = i683[2]
  return i682
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i684 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i685 = data
  i684.m_LowerTranslation = i685[0]
  i684.m_UpperTranslation = i685[1]
  return i684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i687 = data
  i686.position = new pc.Vec3( i687[0], i687[1], i687[2] )
  i686.scale = new pc.Vec3( i687[3], i687[4], i687[5] )
  i686.rotation = new pc.Quat(i687[6], i687[7], i687[8], i687[9])
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i689 = data
  i688.color = new pc.Color(i689[0], i689[1], i689[2], i689[3])
  request.r(i689[4], i689[5], 0, i688, 'sprite')
  i688.flipX = !!i689[6]
  i688.flipY = !!i689[7]
  i688.drawMode = i689[8]
  i688.size = new pc.Vec2( i689[9], i689[10] )
  i688.tileMode = i689[11]
  i688.adaptiveModeThreshold = i689[12]
  i688.maskInteraction = i689[13]
  i688.spriteSortPoint = i689[14]
  i688.enabled = !!i689[15]
  request.r(i689[16], i689[17], 0, i688, 'sharedMaterial')
  var i691 = i689[18]
  var i690 = []
  for(var i = 0; i < i691.length; i += 2) {
  request.r(i691[i + 0], i691[i + 1], 2, i690, '')
  }
  i688.sharedMaterials = i690
  i688.receiveShadows = !!i689[19]
  i688.shadowCastingMode = i689[20]
  i688.sortingLayerID = i689[21]
  i688.sortingOrder = i689[22]
  i688.lightmapIndex = i689[23]
  i688.lightmapSceneIndex = i689[24]
  i688.lightmapScaleOffset = new pc.Vec4( i689[25], i689[26], i689[27], i689[28] )
  i688.lightProbeUsage = i689[29]
  i688.reflectionProbeUsage = i689[30]
  return i688
}

Deserializers["DragItem"] = function (request, data, root) {
  var i694 = root || request.c( 'DragItem' )
  var i695 = data
  i694.focusOutlineSize = i695[0]
  i694.outlineTweenTime = i695[1]
  i694.itemType = i695[2]
  i694.lockItem = !!i695[3]
  return i694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i697 = data
  i696.usedByComposite = !!i697[0]
  i696.autoTiling = !!i697[1]
  i696.size = new pc.Vec2( i697[2], i697[3] )
  i696.edgeRadius = i697[4]
  i696.enabled = !!i697[5]
  i696.isTrigger = !!i697[6]
  i696.usedByEffector = !!i697[7]
  i696.density = i697[8]
  i696.offset = new pc.Vec2( i697[9], i697[10] )
  request.r(i697[11], i697[12], 0, i696, 'material')
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i699 = data
  i698.bodyType = i699[0]
  request.r(i699[1], i699[2], 0, i698, 'material')
  i698.simulated = !!i699[3]
  i698.useAutoMass = !!i699[4]
  i698.mass = i699[5]
  i698.drag = i699[6]
  i698.angularDrag = i699[7]
  i698.gravityScale = i699[8]
  i698.collisionDetectionMode = i699[9]
  i698.sleepMode = i699[10]
  i698.constraints = i699[11]
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i701 = data
  i700.name = i701[0]
  i700.tagId = i701[1]
  i700.enabled = !!i701[2]
  i700.isStatic = !!i701[3]
  i700.layer = i701[4]
  return i700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i702 = root || new pc.UnityMaterial()
  var i703 = data
  i702.name = i703[0]
  request.r(i703[1], i703[2], 0, i702, 'shader')
  i702.renderQueue = i703[3]
  i702.enableInstancing = !!i703[4]
  var i705 = i703[5]
  var i704 = []
  for(var i = 0; i < i705.length; i += 1) {
    i704.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i705[i + 0]) );
  }
  i702.floatParameters = i704
  var i707 = i703[6]
  var i706 = []
  for(var i = 0; i < i707.length; i += 1) {
    i706.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i707[i + 0]) );
  }
  i702.colorParameters = i706
  var i709 = i703[7]
  var i708 = []
  for(var i = 0; i < i709.length; i += 1) {
    i708.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i709[i + 0]) );
  }
  i702.vectorParameters = i708
  var i711 = i703[8]
  var i710 = []
  for(var i = 0; i < i711.length; i += 1) {
    i710.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i711[i + 0]) );
  }
  i702.textureParameters = i710
  var i713 = i703[9]
  var i712 = []
  for(var i = 0; i < i713.length; i += 1) {
    i712.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i713[i + 0]) );
  }
  i702.materialFlags = i712
  return i702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i717 = data
  i716.name = i717[0]
  i716.value = i717[1]
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i721 = data
  i720.name = i721[0]
  i720.value = new pc.Color(i721[1], i721[2], i721[3], i721[4])
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i725 = data
  i724.name = i725[0]
  i724.value = new pc.Vec4( i725[1], i725[2], i725[3], i725[4] )
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i729 = data
  i728.name = i729[0]
  request.r(i729[1], i729[2], 0, i728, 'value')
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i733 = data
  i732.name = i733[0]
  i732.enabled = !!i733[1]
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i735 = data
  i734.name = i735[0]
  i734.width = i735[1]
  i734.height = i735[2]
  i734.mipmapCount = i735[3]
  i734.anisoLevel = i735[4]
  i734.filterMode = i735[5]
  i734.hdr = !!i735[6]
  i734.format = i735[7]
  i734.wrapMode = i735[8]
  i734.alphaIsTransparency = !!i735[9]
  i734.alphaSource = i735[10]
  i734.graphicsFormat = i735[11]
  i734.sRGBTexture = !!i735[12]
  i734.desiredColorSpace = i735[13]
  i734.wrapU = i735[14]
  i734.wrapV = i735[15]
  return i734
}

Deserializers["Disk"] = function (request, data, root) {
  var i736 = root || request.c( 'Disk' )
  var i737 = data
  i736.requiredCount = i737[0]
  i736.moveDistance = i737[1]
  i736.moveTime = i737[2]
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i739 = data
  request.r(i739[0], i739[1], 0, i738, 'animatorController')
  request.r(i739[2], i739[3], 0, i738, 'avatar')
  i738.updateMode = i739[4]
  i738.hasTransformHierarchy = !!i739[5]
  i738.applyRootMotion = !!i739[6]
  var i741 = i739[7]
  var i740 = []
  for(var i = 0; i < i741.length; i += 2) {
  request.r(i741[i + 0], i741[i + 1], 2, i740, '')
  }
  i738.humanBones = i740
  i738.enabled = !!i739[8]
  return i738
}

Deserializers["Tray"] = function (request, data, root) {
  var i744 = root || request.c( 'Tray' )
  var i745 = data
  i744.spacing = i745[0]
  i744.moveTime = i745[1]
  request.r(i745[2], i745[3], 0, i744, 'diskPrefab')
  request.r(i745[4], i745[5], 0, i744, 'diskTransform')
  i744.shrinkTime = i745[6]
  i744.itemToDiskTime = i745[7]
  i744.attachDelay = i745[8]
  i744.followSmooth = i745[9]
  i744.isCompleted = !!i745[10]
  var i747 = i745[11]
  var i746 = []
  for(var i = 0; i < i747.length; i += 2) {
  request.r(i747[i + 0], i747[i + 1], 2, i746, '')
  }
  i744.slots = i746
  request.r(i745[12], i745[13], 0, i744, 'fireObject')
  i744.isSpecial = !!i745[14]
  i744.diskItemScale = new pc.Vec3( i745[15], i745[16], i745[17] )
  return i744
}

Deserializers["Slot"] = function (request, data, root) {
  var i750 = root || request.c( 'Slot' )
  var i751 = data
  request.r(i751[0], i751[1], 0, i750, 'anchor')
  request.r(i751[2], i751[3], 0, i750, 'currentItem')
  i750.isLocked = !!i751[4]
  return i750
}

Deserializers["PackTarget"] = function (request, data, root) {
  var i752 = root || request.c( 'PackTarget' )
  var i753 = data
  i752.packType = i753[0]
  request.r(i753[1], i753[2], 0, i752, 'attachPoint')
  i752.slotIndex = i753[3]
  i752.capacity = i753[4]
  i752.currentCount = i753[5]
  i752.isFull = !!i753[6]
  request.r(i753[7], i753[8], 0, i752, 'packSprite')
  return i752
}

Deserializers["HandHint"] = function (request, data, root) {
  var i754 = root || request.c( 'HandHint' )
  var i755 = data
  request.r(i755[0], i755[1], 0, i754, 'previewRenderer')
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i757 = data
  i756.name = i757[0]
  i756.index = i757[1]
  i756.startup = !!i757[2]
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i759 = data
  i758.aspect = i759[0]
  i758.orthographic = !!i759[1]
  i758.orthographicSize = i759[2]
  i758.backgroundColor = new pc.Color(i759[3], i759[4], i759[5], i759[6])
  i758.nearClipPlane = i759[7]
  i758.farClipPlane = i759[8]
  i758.fieldOfView = i759[9]
  i758.depth = i759[10]
  i758.clearFlags = i759[11]
  i758.cullingMask = i759[12]
  i758.rect = i759[13]
  request.r(i759[14], i759[15], 0, i758, 'targetTexture')
  i758.usePhysicalProperties = !!i759[16]
  i758.focalLength = i759[17]
  i758.sensorSize = new pc.Vec2( i759[18], i759[19] )
  i758.lensShift = new pc.Vec2( i759[20], i759[21] )
  i758.gateFit = i759[22]
  i758.commandBufferCount = i759[23]
  i758.cameraType = i759[24]
  i758.enabled = !!i759[25]
  return i758
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i760 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i761 = data
  request.r(i761[0], i761[1], 0, i760, 'm_FirstSelected')
  i760.m_sendNavigationEvents = !!i761[2]
  i760.m_DragThreshold = i761[3]
  return i760
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i762 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i763 = data
  i762.m_HorizontalAxis = i763[0]
  i762.m_VerticalAxis = i763[1]
  i762.m_SubmitButton = i763[2]
  i762.m_CancelButton = i763[3]
  i762.m_InputActionsPerSecond = i763[4]
  i762.m_RepeatDelay = i763[5]
  i762.m_ForceModuleActive = !!i763[6]
  i762.m_SendPointerHoverToParent = !!i763[7]
  return i762
}

Deserializers["TrayManager"] = function (request, data, root) {
  var i764 = root || request.c( 'TrayManager' )
  var i765 = data
  i764.spacing = i765[0]
  i764.visibleCount = i765[1]
  i764.moveTime = i765[2]
  var i767 = i765[3]
  var i766 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i767.length; i += 2) {
  request.r(i767[i + 0], i767[i + 1], 1, i766, '')
  }
  i764.listTray = i766
  i764.curve = new pc.AnimationCurve( { keys_flow: i765[4] } )
  i764.canCountIdle = !!i765[5]
  i764.spawnHeightMultiplier = i765[6]
  i764.isFirstTutorial = !!i765[7]
  i764.tutorialDelay = i765[8]
  i764.idleTimer = i765[9]
  i764.tutorialEnabled = !!i765[10]
  request.r(i765[11], i765[12], 0, i764, 'manualTray')
  request.r(i765[13], i765[14], 0, i764, 'manualItem')
  i764.justEndedInteract = !!i765[15]
  var i769 = i765[16]
  var i768 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i769.length; i += 2) {
  request.r(i769[i + 0], i769[i + 1], 1, i768, '')
  }
  i764.spriteLibrary = i768
  i764.step = i765[17]
  request.r(i765[18], i765[19], 0, i764, 'specialSpawnPoint')
  request.r(i765[20], i765[21], 0, i764, 'specialTray')
  i764.specialTrayScale = new pc.Vec3( i765[22], i765[23], i765[24] )
  i764.specialTrayLocalPos = new pc.Vec3( i765[25], i765[26], i765[27] )
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i775 = data
  i774.frontSortingLayerID = i775[0]
  i774.frontSortingOrder = i775[1]
  i774.backSortingLayerID = i775[2]
  i774.backSortingOrder = i775[3]
  i774.alphaCutoff = i775[4]
  request.r(i775[5], i775[6], 0, i774, 'sprite')
  i774.tileMode = i775[7]
  i774.isCustomRangeActive = !!i775[8]
  i774.spriteSortPoint = i775[9]
  i774.enabled = !!i775[10]
  request.r(i775[11], i775[12], 0, i774, 'sharedMaterial')
  var i777 = i775[13]
  var i776 = []
  for(var i = 0; i < i777.length; i += 2) {
  request.r(i777[i + 0], i777[i + 1], 2, i776, '')
  }
  i774.sharedMaterials = i776
  i774.receiveShadows = !!i775[14]
  i774.shadowCastingMode = i775[15]
  i774.sortingLayerID = i775[16]
  i774.sortingOrder = i775[17]
  i774.lightmapIndex = i775[18]
  i774.lightmapSceneIndex = i775[19]
  i774.lightmapScaleOffset = new pc.Vec4( i775[20], i775[21], i775[22], i775[23] )
  i774.lightProbeUsage = i775[24]
  i774.reflectionProbeUsage = i775[25]
  return i774
}

Deserializers["ConveyorBelt"] = function (request, data, root) {
  var i778 = root || request.c( 'ConveyorBelt' )
  var i779 = data
  i778.speed = i779[0]
  i778.spacing = i779[1]
  i778.leftLimit = i779[2]
  i778.removeFirstCount = i779[3]
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i781 = data
  i780.pivot = new pc.Vec2( i781[0], i781[1] )
  i780.anchorMin = new pc.Vec2( i781[2], i781[3] )
  i780.anchorMax = new pc.Vec2( i781[4], i781[5] )
  i780.sizeDelta = new pc.Vec2( i781[6], i781[7] )
  i780.anchoredPosition3D = new pc.Vec3( i781[8], i781[9], i781[10] )
  i780.rotation = new pc.Quat(i781[11], i781[12], i781[13], i781[14])
  i780.scale = new pc.Vec3( i781[15], i781[16], i781[17] )
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i783 = data
  i782.planeDistance = i783[0]
  i782.referencePixelsPerUnit = i783[1]
  i782.isFallbackOverlay = !!i783[2]
  i782.renderMode = i783[3]
  i782.renderOrder = i783[4]
  i782.sortingLayerName = i783[5]
  i782.sortingOrder = i783[6]
  i782.scaleFactor = i783[7]
  request.r(i783[8], i783[9], 0, i782, 'worldCamera')
  i782.overrideSorting = !!i783[10]
  i782.pixelPerfect = !!i783[11]
  i782.targetDisplay = i783[12]
  i782.overridePixelPerfect = !!i783[13]
  i782.enabled = !!i783[14]
  return i782
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i784 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i785 = data
  i784.m_UiScaleMode = i785[0]
  i784.m_ReferencePixelsPerUnit = i785[1]
  i784.m_ScaleFactor = i785[2]
  i784.m_ReferenceResolution = new pc.Vec2( i785[3], i785[4] )
  i784.m_ScreenMatchMode = i785[5]
  i784.m_MatchWidthOrHeight = i785[6]
  i784.m_PhysicalUnit = i785[7]
  i784.m_FallbackScreenDPI = i785[8]
  i784.m_DefaultSpriteDPI = i785[9]
  i784.m_DynamicPixelsPerUnit = i785[10]
  i784.m_PresetInfoIsWorld = !!i785[11]
  return i784
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i786 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i787 = data
  i786.m_IgnoreReversedGraphics = !!i787[0]
  i786.m_BlockingObjects = i787[1]
  i786.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i787[2] )
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i789 = data
  i788.cullTransparentMesh = !!i789[0]
  return i788
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i790 = root || request.c( 'UnityEngine.UI.Image' )
  var i791 = data
  request.r(i791[0], i791[1], 0, i790, 'm_Sprite')
  i790.m_Type = i791[2]
  i790.m_PreserveAspect = !!i791[3]
  i790.m_FillCenter = !!i791[4]
  i790.m_FillMethod = i791[5]
  i790.m_FillAmount = i791[6]
  i790.m_FillClockwise = !!i791[7]
  i790.m_FillOrigin = i791[8]
  i790.m_UseSpriteMesh = !!i791[9]
  i790.m_PixelsPerUnitMultiplier = i791[10]
  i790.m_Maskable = !!i791[11]
  request.r(i791[12], i791[13], 0, i790, 'm_Material')
  i790.m_Color = new pc.Color(i791[14], i791[15], i791[16], i791[17])
  i790.m_RaycastTarget = !!i791[18]
  i790.m_RaycastPadding = new pc.Vec4( i791[19], i791[20], i791[21], i791[22] )
  return i790
}

Deserializers["EndCart_Win"] = function (request, data, root) {
  var i792 = root || request.c( 'EndCart_Win' )
  var i793 = data
  request.r(i793[0], i793[1], 0, i792, 'confettiLeft')
  request.r(i793[2], i793[3], 0, i792, 'confettiRight')
  request.r(i793[4], i793[5], 0, i792, 'winText')
  request.r(i793[6], i793[7], 0, i792, 'chest')
  request.r(i793[8], i793[9], 0, i792, 'button')
  i792.textDelay = i793[10]
  i792.chestDelay = i793[11]
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i795 = data
  request.r(i795[0], i795[1], 0, i794, 'additionalVertexStreams')
  i794.enabled = !!i795[2]
  request.r(i795[3], i795[4], 0, i794, 'sharedMaterial')
  var i797 = i795[5]
  var i796 = []
  for(var i = 0; i < i797.length; i += 2) {
  request.r(i797[i + 0], i797[i + 1], 2, i796, '')
  }
  i794.sharedMaterials = i796
  i794.receiveShadows = !!i795[6]
  i794.shadowCastingMode = i795[7]
  i794.sortingLayerID = i795[8]
  i794.sortingOrder = i795[9]
  i794.lightmapIndex = i795[10]
  i794.lightmapSceneIndex = i795[11]
  i794.lightmapScaleOffset = new pc.Vec4( i795[12], i795[13], i795[14], i795[15] )
  i794.lightProbeUsage = i795[16]
  i794.reflectionProbeUsage = i795[17]
  return i794
}

Deserializers["Spine.Unity.SkeletonAnimation"] = function (request, data, root) {
  var i798 = root || request.c( 'Spine.Unity.SkeletonAnimation' )
  var i799 = data
  i798.loop = !!i799[0]
  i798.timeScale = i799[1]
  request.r(i799[2], i799[3], 0, i798, 'skeletonDataAsset')
  i798.initialSkinName = i799[4]
  i798.fixPrefabOverrideViaMeshFilter = i799[5]
  i798.initialFlipX = !!i799[6]
  i798.initialFlipY = !!i799[7]
  i798.updateWhenInvisible = i799[8]
  i798.zSpacing = i799[9]
  i798.useClipping = !!i799[10]
  i798.immutableTriangles = !!i799[11]
  i798.pmaVertexColors = !!i799[12]
  i798.clearStateOnDisable = !!i799[13]
  i798.tintBlack = !!i799[14]
  i798.singleSubmesh = !!i799[15]
  i798.fixDrawOrder = !!i799[16]
  i798.addNormals = !!i799[17]
  i798.calculateTangents = !!i799[18]
  i798.maskInteraction = i799[19]
  i798.maskMaterials = request.d('Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials', i799[20], i798.maskMaterials)
  i798.disableRenderingOnOverride = !!i799[21]
  i798.updateTiming = i799[22]
  i798.unscaledTime = !!i799[23]
  i798._animationName = i799[24]
  var i801 = i799[25]
  var i800 = []
  for(var i = 0; i < i801.length; i += 1) {
    i800.push( i801[i + 0] );
  }
  i798.separatorSlotNames = i800
  i798.physicsPositionInheritanceFactor = new pc.Vec2( i799[26], i799[27] )
  i798.physicsRotationInheritanceFactor = i799[28]
  request.r(i799[29], i799[30], 0, i798, 'physicsMovementRelativeTo')
  return i798
}

Deserializers["Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials"] = function (request, data, root) {
  var i802 = root || request.c( 'Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials' )
  var i803 = data
  var i805 = i803[0]
  var i804 = []
  for(var i = 0; i < i805.length; i += 2) {
  request.r(i805[i + 0], i805[i + 1], 2, i804, '')
  }
  i802.materialsMaskDisabled = i804
  var i807 = i803[1]
  var i806 = []
  for(var i = 0; i < i807.length; i += 2) {
  request.r(i807[i + 0], i807[i + 1], 2, i806, '')
  }
  i802.materialsInsideMask = i806
  var i809 = i803[2]
  var i808 = []
  for(var i = 0; i < i809.length; i += 2) {
  request.r(i809[i + 0], i809[i + 1], 2, i808, '')
  }
  i802.materialsOutsideMask = i808
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i813 = data
  request.r(i813[0], i813[1], 0, i812, 'sharedMesh')
  return i812
}

Deserializers["Button"] = function (request, data, root) {
  var i814 = root || request.c( 'Button' )
  var i815 = data
  return i814
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i816 = root || request.c( 'UnityEngine.UI.Button' )
  var i817 = data
  i816.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i817[0], i816.m_OnClick)
  i816.m_Navigation = request.d('UnityEngine.UI.Navigation', i817[1], i816.m_Navigation)
  i816.m_Transition = i817[2]
  i816.m_Colors = request.d('UnityEngine.UI.ColorBlock', i817[3], i816.m_Colors)
  i816.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i817[4], i816.m_SpriteState)
  i816.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i817[5], i816.m_AnimationTriggers)
  i816.m_Interactable = !!i817[6]
  request.r(i817[7], i817[8], 0, i816, 'm_TargetGraphic')
  return i816
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i818 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i819 = data
  i818.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i819[0], i818.m_PersistentCalls)
  return i818
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i820 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i821 = data
  var i823 = i821[0]
  var i822 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i823.length; i += 1) {
    i822.add(request.d('UnityEngine.Events.PersistentCall', i823[i + 0]));
  }
  i820.m_Calls = i822
  return i820
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i826 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i827 = data
  request.r(i827[0], i827[1], 0, i826, 'm_Target')
  i826.m_TargetAssemblyTypeName = i827[2]
  i826.m_MethodName = i827[3]
  i826.m_Mode = i827[4]
  i826.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i827[5], i826.m_Arguments)
  i826.m_CallState = i827[6]
  return i826
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i828 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i829 = data
  request.r(i829[0], i829[1], 0, i828, 'm_ObjectArgument')
  i828.m_ObjectArgumentAssemblyTypeName = i829[2]
  i828.m_IntArgument = i829[3]
  i828.m_FloatArgument = i829[4]
  i828.m_StringArgument = i829[5]
  i828.m_BoolArgument = !!i829[6]
  return i828
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i830 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i831 = data
  i830.m_Mode = i831[0]
  i830.m_WrapAround = !!i831[1]
  request.r(i831[2], i831[3], 0, i830, 'm_SelectOnUp')
  request.r(i831[4], i831[5], 0, i830, 'm_SelectOnDown')
  request.r(i831[6], i831[7], 0, i830, 'm_SelectOnLeft')
  request.r(i831[8], i831[9], 0, i830, 'm_SelectOnRight')
  return i830
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i832 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i833 = data
  i832.m_NormalColor = new pc.Color(i833[0], i833[1], i833[2], i833[3])
  i832.m_HighlightedColor = new pc.Color(i833[4], i833[5], i833[6], i833[7])
  i832.m_PressedColor = new pc.Color(i833[8], i833[9], i833[10], i833[11])
  i832.m_SelectedColor = new pc.Color(i833[12], i833[13], i833[14], i833[15])
  i832.m_DisabledColor = new pc.Color(i833[16], i833[17], i833[18], i833[19])
  i832.m_ColorMultiplier = i833[20]
  i832.m_FadeDuration = i833[21]
  return i832
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i834 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i835 = data
  request.r(i835[0], i835[1], 0, i834, 'm_HighlightedSprite')
  request.r(i835[2], i835[3], 0, i834, 'm_PressedSprite')
  request.r(i835[4], i835[5], 0, i834, 'm_SelectedSprite')
  request.r(i835[6], i835[7], 0, i834, 'm_DisabledSprite')
  return i834
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i836 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i837 = data
  i836.m_NormalTrigger = i837[0]
  i836.m_HighlightedTrigger = i837[1]
  i836.m_PressedTrigger = i837[2]
  i836.m_SelectedTrigger = i837[3]
  i836.m_DisabledTrigger = i837[4]
  return i836
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i838 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i839 = data
  i838.m_hasFontAssetChanged = !!i839[0]
  request.r(i839[1], i839[2], 0, i838, 'm_baseMaterial')
  i838.m_maskOffset = new pc.Vec4( i839[3], i839[4], i839[5], i839[6] )
  i838.m_text = i839[7]
  i838.m_isRightToLeft = !!i839[8]
  request.r(i839[9], i839[10], 0, i838, 'm_fontAsset')
  request.r(i839[11], i839[12], 0, i838, 'm_sharedMaterial')
  var i841 = i839[13]
  var i840 = []
  for(var i = 0; i < i841.length; i += 2) {
  request.r(i841[i + 0], i841[i + 1], 2, i840, '')
  }
  i838.m_fontSharedMaterials = i840
  request.r(i839[14], i839[15], 0, i838, 'm_fontMaterial')
  var i843 = i839[16]
  var i842 = []
  for(var i = 0; i < i843.length; i += 2) {
  request.r(i843[i + 0], i843[i + 1], 2, i842, '')
  }
  i838.m_fontMaterials = i842
  i838.m_fontColor32 = UnityEngine.Color32.ConstructColor(i839[17], i839[18], i839[19], i839[20])
  i838.m_fontColor = new pc.Color(i839[21], i839[22], i839[23], i839[24])
  i838.m_enableVertexGradient = !!i839[25]
  i838.m_colorMode = i839[26]
  i838.m_fontColorGradient = request.d('TMPro.VertexGradient', i839[27], i838.m_fontColorGradient)
  request.r(i839[28], i839[29], 0, i838, 'm_fontColorGradientPreset')
  request.r(i839[30], i839[31], 0, i838, 'm_spriteAsset')
  i838.m_tintAllSprites = !!i839[32]
  request.r(i839[33], i839[34], 0, i838, 'm_StyleSheet')
  i838.m_TextStyleHashCode = i839[35]
  i838.m_overrideHtmlColors = !!i839[36]
  i838.m_faceColor = UnityEngine.Color32.ConstructColor(i839[37], i839[38], i839[39], i839[40])
  i838.m_fontSize = i839[41]
  i838.m_fontSizeBase = i839[42]
  i838.m_fontWeight = i839[43]
  i838.m_enableAutoSizing = !!i839[44]
  i838.m_fontSizeMin = i839[45]
  i838.m_fontSizeMax = i839[46]
  i838.m_fontStyle = i839[47]
  i838.m_HorizontalAlignment = i839[48]
  i838.m_VerticalAlignment = i839[49]
  i838.m_textAlignment = i839[50]
  i838.m_characterSpacing = i839[51]
  i838.m_wordSpacing = i839[52]
  i838.m_lineSpacing = i839[53]
  i838.m_lineSpacingMax = i839[54]
  i838.m_paragraphSpacing = i839[55]
  i838.m_charWidthMaxAdj = i839[56]
  i838.m_enableWordWrapping = !!i839[57]
  i838.m_wordWrappingRatios = i839[58]
  i838.m_overflowMode = i839[59]
  request.r(i839[60], i839[61], 0, i838, 'm_linkedTextComponent')
  request.r(i839[62], i839[63], 0, i838, 'parentLinkedComponent')
  i838.m_enableKerning = !!i839[64]
  i838.m_enableExtraPadding = !!i839[65]
  i838.checkPaddingRequired = !!i839[66]
  i838.m_isRichText = !!i839[67]
  i838.m_parseCtrlCharacters = !!i839[68]
  i838.m_isOrthographic = !!i839[69]
  i838.m_isCullingEnabled = !!i839[70]
  i838.m_horizontalMapping = i839[71]
  i838.m_verticalMapping = i839[72]
  i838.m_uvLineOffset = i839[73]
  i838.m_geometrySortingOrder = i839[74]
  i838.m_IsTextObjectScaleStatic = !!i839[75]
  i838.m_VertexBufferAutoSizeReduction = !!i839[76]
  i838.m_useMaxVisibleDescender = !!i839[77]
  i838.m_pageToDisplay = i839[78]
  i838.m_margin = new pc.Vec4( i839[79], i839[80], i839[81], i839[82] )
  i838.m_isUsingLegacyAnimationComponent = !!i839[83]
  i838.m_isVolumetricText = !!i839[84]
  i838.m_Maskable = !!i839[85]
  request.r(i839[86], i839[87], 0, i838, 'm_Material')
  i838.m_Color = new pc.Color(i839[88], i839[89], i839[90], i839[91])
  i838.m_RaycastTarget = !!i839[92]
  i838.m_RaycastPadding = new pc.Vec4( i839[93], i839[94], i839[95], i839[96] )
  return i838
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i844 = root || request.c( 'TMPro.VertexGradient' )
  var i845 = data
  i844.topLeft = new pc.Color(i845[0], i845[1], i845[2], i845[3])
  i844.topRight = new pc.Color(i845[4], i845[5], i845[6], i845[7])
  i844.bottomLeft = new pc.Color(i845[8], i845[9], i845[10], i845[11])
  i844.bottomRight = new pc.Color(i845[12], i845[13], i845[14], i845[15])
  return i844
}

Deserializers["AudioManager"] = function (request, data, root) {
  var i846 = root || request.c( 'AudioManager' )
  var i847 = data
  request.r(i847[0], i847[1], 0, i846, 'bgmSource')
  request.r(i847[2], i847[3], 0, i846, 'sfxSource')
  request.r(i847[4], i847[5], 0, i846, 'bgm')
  request.r(i847[6], i847[7], 0, i846, 'drag')
  request.r(i847[8], i847[9], 0, i846, 'drog')
  request.r(i847[10], i847[11], 0, i846, 'lose')
  request.r(i847[12], i847[13], 0, i846, 'pop')
  request.r(i847[14], i847[15], 0, i846, 'wood')
  request.r(i847[16], i847[17], 0, i846, 'win')
  request.r(i847[18], i847[19], 0, i846, 'warningTick')
  request.r(i847[20], i847[21], 0, i846, 'match')
  request.r(i847[22], i847[23], 0, i846, 'sake')
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i849 = data
  request.r(i849[0], i849[1], 0, i848, 'clip')
  request.r(i849[2], i849[3], 0, i848, 'outputAudioMixerGroup')
  i848.playOnAwake = !!i849[4]
  i848.loop = !!i849[5]
  i848.time = i849[6]
  i848.volume = i849[7]
  i848.pitch = i849[8]
  i848.enabled = !!i849[9]
  return i848
}

Deserializers["GameManager"] = function (request, data, root) {
  var i850 = root || request.c( 'GameManager' )
  var i851 = data
  request.r(i851[0], i851[1], 0, i850, 'pointText')
  i850.point = i851[2]
  request.r(i851[3], i851[4], 0, i850, 'ECWin')
  i850.startTimer = !!i851[5]
  i850.ticketCount = i851[6]
  i850.isClickToLog = !!i851[7]
  i850.clicksToLog = i851[8]
  i850.isMatch = !!i851[9]
  i850.clickCount = i851[10]
  i850.isClick = !!i851[11]
  i850.finishGame = !!i851[12]
  i850.startGame = !!i851[13]
  i850.isCheckWin = !!i851[14]
  i850.isCheckLose = !!i851[15]
  i850.isClickStore = !!i851[16]
  return i850
}

Deserializers["PackManager"] = function (request, data, root) {
  var i852 = root || request.c( 'PackManager' )
  var i853 = data
  request.r(i853[0], i853[1], 0, i852, 'packRoot')
  var i855 = i853[2]
  var i854 = new (System.Collections.Generic.List$1(Bridge.ns('PackTarget')))
  for(var i = 0; i < i855.length; i += 2) {
  request.r(i855[i + 0], i855[i + 1], 1, i854, '')
  }
  i852.packPrefabs = i854
  var i857 = i853[3]
  var i856 = new (System.Collections.Generic.List$1(Bridge.ns('PackTarget')))
  for(var i = 0; i < i857.length; i += 2) {
  request.r(i857[i + 0], i857[i + 1], 1, i856, '')
  }
  i852.activePacks = i856
  var i859 = i853[4]
  var i858 = new (System.Collections.Generic.List$1(Bridge.ns('PackTarget')))
  for(var i = 0; i < i859.length; i += 2) {
  request.r(i859[i + 0], i859[i + 1], 1, i858, '')
  }
  i852.packs = i858
  request.r(i853[5], i853[6], 0, i852, 'redSlider')
  request.r(i853[7], i853[8], 0, i852, 'yellowSlider')
  request.r(i853[9], i853[10], 0, i852, 'greenSlider')
  var i861 = i853[11]
  var i860 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i861.length; i += 2) {
  request.r(i861[i + 0], i861[i + 1], 1, i860, '')
  }
  i852.packSprites = i860
  return i852
}

Deserializers["TutorialManager"] = function (request, data, root) {
  var i864 = root || request.c( 'TutorialManager' )
  var i865 = data
  request.r(i865[0], i865[1], 0, i864, 'handPrefab')
  return i864
}

Deserializers["CountdownTimer"] = function (request, data, root) {
  var i866 = root || request.c( 'CountdownTimer' )
  var i867 = data
  request.r(i867[0], i867[1], 0, i866, 'timerText')
  i866.startSeconds = i867[2]
  i866.warningTime = i867[3]
  i866.warningColor = new pc.Color(i867[4], i867[5], i867[6], i867[7])
  i866.pulseScale = i867[8]
  i866.pulseSpeed = i867[9]
  request.r(i867[10], i867[11], 0, i866, 'backgroundWarning')
  request.r(i867[12], i867[13], 0, i866, 'timeUpPanel')
  i866.hasStarted = !!i867[14]
  i866.bgMinAlpha = i867[15]
  i866.bgMaxAlpha = i867[16]
  i866.bgBlinkSpeed = i867[17]
  request.r(i867[18], i867[19], 0, i866, 'ECLose')
  i866.timerPA = i867[20]
  i866.isShowPA = !!i867[21]
  return i866
}

Deserializers["ScalePopLoop"] = function (request, data, root) {
  var i868 = root || request.c( 'ScalePopLoop' )
  var i869 = data
  i868.minScale = new pc.Vec3( i869[0], i869[1], i869[2] )
  i868.maxScale = new pc.Vec3( i869[3], i869[4], i869[5] )
  i868.duration = i869[6]
  i868.ease = i869[7]
  return i868
}

Deserializers["NotiBox"] = function (request, data, root) {
  var i870 = root || request.c( 'NotiBox' )
  var i871 = data
  request.r(i871[0], i871[1], 0, i870, 'box')
  request.r(i871[2], i871[3], 0, i870, 'bg')
  i870.delay = i871[4]
  i870.animTime = i871[5]
  return i870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i873 = data
  i872.m_Alpha = i873[0]
  i872.m_Interactable = !!i873[1]
  i872.m_BlocksRaycasts = !!i873[2]
  i872.m_IgnoreParentGroups = !!i873[3]
  i872.enabled = !!i873[4]
  return i872
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i874 = root || request.c( 'UnityEngine.UI.Slider' )
  var i875 = data
  request.r(i875[0], i875[1], 0, i874, 'm_FillRect')
  request.r(i875[2], i875[3], 0, i874, 'm_HandleRect')
  i874.m_Direction = i875[4]
  i874.m_MinValue = i875[5]
  i874.m_MaxValue = i875[6]
  i874.m_WholeNumbers = !!i875[7]
  i874.m_Value = i875[8]
  i874.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i875[9], i874.m_OnValueChanged)
  i874.m_Navigation = request.d('UnityEngine.UI.Navigation', i875[10], i874.m_Navigation)
  i874.m_Transition = i875[11]
  i874.m_Colors = request.d('UnityEngine.UI.ColorBlock', i875[12], i874.m_Colors)
  i874.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i875[13], i874.m_SpriteState)
  i874.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i875[14], i874.m_AnimationTriggers)
  i874.m_Interactable = !!i875[15]
  request.r(i875[16], i875[17], 0, i874, 'm_TargetGraphic')
  return i874
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i876 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i877 = data
  i876.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i877[0], i876.m_PersistentCalls)
  return i876
}

Deserializers["ItemSlider"] = function (request, data, root) {
  var i878 = root || request.c( 'ItemSlider' )
  var i879 = data
  request.r(i879[0], i879[1], 0, i878, 'slider')
  request.r(i879[2], i879[3], 0, i878, 'sliderHandle')
  return i878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i881 = data
  i880.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i881[0], i880.main)
  i880.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i881[1], i880.colorBySpeed)
  i880.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i881[2], i880.colorOverLifetime)
  i880.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i881[3], i880.emission)
  i880.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i881[4], i880.rotationBySpeed)
  i880.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i881[5], i880.rotationOverLifetime)
  i880.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i881[6], i880.shape)
  i880.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i881[7], i880.sizeBySpeed)
  i880.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i881[8], i880.sizeOverLifetime)
  i880.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i881[9], i880.textureSheetAnimation)
  i880.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i881[10], i880.velocityOverLifetime)
  i880.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i881[11], i880.noise)
  i880.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i881[12], i880.inheritVelocity)
  i880.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i881[13], i880.forceOverLifetime)
  i880.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i881[14], i880.limitVelocityOverLifetime)
  i880.useAutoRandomSeed = !!i881[15]
  i880.randomSeed = i881[16]
  return i880
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i882 = root || new pc.ParticleSystemMain()
  var i883 = data
  i882.duration = i883[0]
  i882.loop = !!i883[1]
  i882.prewarm = !!i883[2]
  i882.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i883[3], i882.startDelay)
  i882.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i883[4], i882.startLifetime)
  i882.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i883[5], i882.startSpeed)
  i882.startSize3D = !!i883[6]
  i882.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i883[7], i882.startSizeX)
  i882.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i883[8], i882.startSizeY)
  i882.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i883[9], i882.startSizeZ)
  i882.startRotation3D = !!i883[10]
  i882.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i883[11], i882.startRotationX)
  i882.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i883[12], i882.startRotationY)
  i882.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i883[13], i882.startRotationZ)
  i882.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i883[14], i882.startColor)
  i882.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i883[15], i882.gravityModifier)
  i882.simulationSpace = i883[16]
  request.r(i883[17], i883[18], 0, i882, 'customSimulationSpace')
  i882.simulationSpeed = i883[19]
  i882.useUnscaledTime = !!i883[20]
  i882.scalingMode = i883[21]
  i882.playOnAwake = !!i883[22]
  i882.maxParticles = i883[23]
  i882.emitterVelocityMode = i883[24]
  i882.stopAction = i883[25]
  return i882
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i884 = root || new pc.MinMaxCurve()
  var i885 = data
  i884.mode = i885[0]
  i884.curveMin = new pc.AnimationCurve( { keys_flow: i885[1] } )
  i884.curveMax = new pc.AnimationCurve( { keys_flow: i885[2] } )
  i884.curveMultiplier = i885[3]
  i884.constantMin = i885[4]
  i884.constantMax = i885[5]
  return i884
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i886 = root || new pc.MinMaxGradient()
  var i887 = data
  i886.mode = i887[0]
  i886.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i887[1], i886.gradientMin)
  i886.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i887[2], i886.gradientMax)
  i886.colorMin = new pc.Color(i887[3], i887[4], i887[5], i887[6])
  i886.colorMax = new pc.Color(i887[7], i887[8], i887[9], i887[10])
  return i886
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i889 = data
  i888.mode = i889[0]
  var i891 = i889[1]
  var i890 = []
  for(var i = 0; i < i891.length; i += 1) {
    i890.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i891[i + 0]) );
  }
  i888.colorKeys = i890
  var i893 = i889[2]
  var i892 = []
  for(var i = 0; i < i893.length; i += 1) {
    i892.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i893[i + 0]) );
  }
  i888.alphaKeys = i892
  return i888
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i897 = data
  i896.color = new pc.Color(i897[0], i897[1], i897[2], i897[3])
  i896.time = i897[4]
  return i896
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i901 = data
  i900.alpha = i901[0]
  i900.time = i901[1]
  return i900
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i902 = root || new pc.ParticleSystemColorBySpeed()
  var i903 = data
  i902.enabled = !!i903[0]
  i902.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i903[1], i902.color)
  i902.range = new pc.Vec2( i903[2], i903[3] )
  return i902
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i904 = root || new pc.ParticleSystemColorOverLifetime()
  var i905 = data
  i904.enabled = !!i905[0]
  i904.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i905[1], i904.color)
  return i904
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i906 = root || new pc.ParticleSystemEmitter()
  var i907 = data
  i906.enabled = !!i907[0]
  i906.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i907[1], i906.rateOverTime)
  i906.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i907[2], i906.rateOverDistance)
  var i909 = i907[3]
  var i908 = []
  for(var i = 0; i < i909.length; i += 1) {
    i908.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i909[i + 0]) );
  }
  i906.bursts = i908
  return i906
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i912 = root || new pc.ParticleSystemBurst()
  var i913 = data
  i912.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i913[0], i912.count)
  i912.cycleCount = i913[1]
  i912.minCount = i913[2]
  i912.maxCount = i913[3]
  i912.repeatInterval = i913[4]
  i912.time = i913[5]
  return i912
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i914 = root || new pc.ParticleSystemRotationBySpeed()
  var i915 = data
  i914.enabled = !!i915[0]
  i914.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i915[1], i914.x)
  i914.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i915[2], i914.y)
  i914.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i915[3], i914.z)
  i914.separateAxes = !!i915[4]
  i914.range = new pc.Vec2( i915[5], i915[6] )
  return i914
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i916 = root || new pc.ParticleSystemRotationOverLifetime()
  var i917 = data
  i916.enabled = !!i917[0]
  i916.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i917[1], i916.x)
  i916.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i917[2], i916.y)
  i916.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i917[3], i916.z)
  i916.separateAxes = !!i917[4]
  return i916
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i918 = root || new pc.ParticleSystemShape()
  var i919 = data
  i918.enabled = !!i919[0]
  i918.shapeType = i919[1]
  i918.randomDirectionAmount = i919[2]
  i918.sphericalDirectionAmount = i919[3]
  i918.randomPositionAmount = i919[4]
  i918.alignToDirection = !!i919[5]
  i918.radius = i919[6]
  i918.radiusMode = i919[7]
  i918.radiusSpread = i919[8]
  i918.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i919[9], i918.radiusSpeed)
  i918.radiusThickness = i919[10]
  i918.angle = i919[11]
  i918.length = i919[12]
  i918.boxThickness = new pc.Vec3( i919[13], i919[14], i919[15] )
  i918.meshShapeType = i919[16]
  request.r(i919[17], i919[18], 0, i918, 'mesh')
  request.r(i919[19], i919[20], 0, i918, 'meshRenderer')
  request.r(i919[21], i919[22], 0, i918, 'skinnedMeshRenderer')
  i918.useMeshMaterialIndex = !!i919[23]
  i918.meshMaterialIndex = i919[24]
  i918.useMeshColors = !!i919[25]
  i918.normalOffset = i919[26]
  i918.arc = i919[27]
  i918.arcMode = i919[28]
  i918.arcSpread = i919[29]
  i918.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i919[30], i918.arcSpeed)
  i918.donutRadius = i919[31]
  i918.position = new pc.Vec3( i919[32], i919[33], i919[34] )
  i918.rotation = new pc.Vec3( i919[35], i919[36], i919[37] )
  i918.scale = new pc.Vec3( i919[38], i919[39], i919[40] )
  return i918
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i920 = root || new pc.ParticleSystemSizeBySpeed()
  var i921 = data
  i920.enabled = !!i921[0]
  i920.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i921[1], i920.x)
  i920.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i921[2], i920.y)
  i920.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i921[3], i920.z)
  i920.separateAxes = !!i921[4]
  i920.range = new pc.Vec2( i921[5], i921[6] )
  return i920
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i922 = root || new pc.ParticleSystemSizeOverLifetime()
  var i923 = data
  i922.enabled = !!i923[0]
  i922.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i923[1], i922.x)
  i922.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i923[2], i922.y)
  i922.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i923[3], i922.z)
  i922.separateAxes = !!i923[4]
  return i922
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i924 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i925 = data
  i924.enabled = !!i925[0]
  i924.mode = i925[1]
  i924.animation = i925[2]
  i924.numTilesX = i925[3]
  i924.numTilesY = i925[4]
  i924.useRandomRow = !!i925[5]
  i924.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i925[6], i924.frameOverTime)
  i924.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i925[7], i924.startFrame)
  i924.cycleCount = i925[8]
  i924.rowIndex = i925[9]
  i924.flipU = i925[10]
  i924.flipV = i925[11]
  i924.spriteCount = i925[12]
  var i927 = i925[13]
  var i926 = []
  for(var i = 0; i < i927.length; i += 2) {
  request.r(i927[i + 0], i927[i + 1], 2, i926, '')
  }
  i924.sprites = i926
  return i924
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i930 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i931 = data
  i930.enabled = !!i931[0]
  i930.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i931[1], i930.x)
  i930.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i931[2], i930.y)
  i930.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i931[3], i930.z)
  i930.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i931[4], i930.radial)
  i930.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i931[5], i930.speedModifier)
  i930.space = i931[6]
  i930.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i931[7], i930.orbitalX)
  i930.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i931[8], i930.orbitalY)
  i930.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i931[9], i930.orbitalZ)
  i930.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i931[10], i930.orbitalOffsetX)
  i930.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i931[11], i930.orbitalOffsetY)
  i930.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i931[12], i930.orbitalOffsetZ)
  return i930
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i932 = root || new pc.ParticleSystemNoise()
  var i933 = data
  i932.enabled = !!i933[0]
  i932.separateAxes = !!i933[1]
  i932.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i933[2], i932.strengthX)
  i932.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i933[3], i932.strengthY)
  i932.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i933[4], i932.strengthZ)
  i932.frequency = i933[5]
  i932.damping = !!i933[6]
  i932.octaveCount = i933[7]
  i932.octaveMultiplier = i933[8]
  i932.octaveScale = i933[9]
  i932.quality = i933[10]
  i932.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i933[11], i932.scrollSpeed)
  i932.scrollSpeedMultiplier = i933[12]
  i932.remapEnabled = !!i933[13]
  i932.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i933[14], i932.remapX)
  i932.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i933[15], i932.remapY)
  i932.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i933[16], i932.remapZ)
  i932.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i933[17], i932.positionAmount)
  i932.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i933[18], i932.rotationAmount)
  i932.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i933[19], i932.sizeAmount)
  return i932
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i934 = root || new pc.ParticleSystemInheritVelocity()
  var i935 = data
  i934.enabled = !!i935[0]
  i934.mode = i935[1]
  i934.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i935[2], i934.curve)
  return i934
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i936 = root || new pc.ParticleSystemForceOverLifetime()
  var i937 = data
  i936.enabled = !!i937[0]
  i936.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i937[1], i936.x)
  i936.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i937[2], i936.y)
  i936.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i937[3], i936.z)
  i936.space = i937[4]
  i936.randomized = !!i937[5]
  return i936
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i938 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i939 = data
  i938.enabled = !!i939[0]
  i938.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i939[1], i938.limit)
  i938.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i939[2], i938.limitX)
  i938.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i939[3], i938.limitY)
  i938.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i939[4], i938.limitZ)
  i938.dampen = i939[5]
  i938.separateAxes = !!i939[6]
  i938.space = i939[7]
  i938.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i939[8], i938.drag)
  i938.multiplyDragByParticleSize = !!i939[9]
  i938.multiplyDragByParticleVelocity = !!i939[10]
  return i938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i940 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i941 = data
  request.r(i941[0], i941[1], 0, i940, 'mesh')
  i940.meshCount = i941[2]
  i940.activeVertexStreamsCount = i941[3]
  i940.alignment = i941[4]
  i940.renderMode = i941[5]
  i940.sortMode = i941[6]
  i940.lengthScale = i941[7]
  i940.velocityScale = i941[8]
  i940.cameraVelocityScale = i941[9]
  i940.normalDirection = i941[10]
  i940.sortingFudge = i941[11]
  i940.minParticleSize = i941[12]
  i940.maxParticleSize = i941[13]
  i940.pivot = new pc.Vec3( i941[14], i941[15], i941[16] )
  request.r(i941[17], i941[18], 0, i940, 'trailMaterial')
  i940.applyActiveColorSpace = !!i941[19]
  i940.enabled = !!i941[20]
  request.r(i941[21], i941[22], 0, i940, 'sharedMaterial')
  var i943 = i941[23]
  var i942 = []
  for(var i = 0; i < i943.length; i += 2) {
  request.r(i943[i + 0], i943[i + 1], 2, i942, '')
  }
  i940.sharedMaterials = i942
  i940.receiveShadows = !!i941[24]
  i940.shadowCastingMode = i941[25]
  i940.sortingLayerID = i941[26]
  i940.sortingOrder = i941[27]
  i940.lightmapIndex = i941[28]
  i940.lightmapSceneIndex = i941[29]
  i940.lightmapScaleOffset = new pc.Vec4( i941[30], i941[31], i941[32], i941[33] )
  i940.lightProbeUsage = i941[34]
  i940.reflectionProbeUsage = i941[35]
  return i940
}

Deserializers["EndCart_Lose"] = function (request, data, root) {
  var i944 = root || request.c( 'EndCart_Lose' )
  var i945 = data
  request.r(i945[0], i945[1], 0, i944, 'actionButton')
  request.r(i945[2], i945[3], 0, i944, 'emoji')
  request.r(i945[4], i945[5], 0, i944, 'logo')
  request.r(i945[6], i945[7], 0, i944, 'icon')
  request.r(i945[8], i945[9], 0, i944, 'praticle')
  i944.buttonScaleTime = i945[10]
  i944.itemStartScale = i945[11]
  i944.itemPopScale = i945[12]
  i944.itemInTime = i945[13]
  i944.itemSettleTime = i945[14]
  i944.itemFinalScale = i945[15]
  i944.emojiFinalScale = i945[16]
  i944.otherItemFinalScale = i945[17]
  return i944
}

Deserializers["RotateLoop"] = function (request, data, root) {
  var i946 = root || request.c( 'RotateLoop' )
  var i947 = data
  i946.rotateSpeed = i947[0]
  return i946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i949 = data
  i948.ambientIntensity = i949[0]
  i948.reflectionIntensity = i949[1]
  i948.ambientMode = i949[2]
  i948.ambientLight = new pc.Color(i949[3], i949[4], i949[5], i949[6])
  i948.ambientSkyColor = new pc.Color(i949[7], i949[8], i949[9], i949[10])
  i948.ambientGroundColor = new pc.Color(i949[11], i949[12], i949[13], i949[14])
  i948.ambientEquatorColor = new pc.Color(i949[15], i949[16], i949[17], i949[18])
  i948.fogColor = new pc.Color(i949[19], i949[20], i949[21], i949[22])
  i948.fogEndDistance = i949[23]
  i948.fogStartDistance = i949[24]
  i948.fogDensity = i949[25]
  i948.fog = !!i949[26]
  request.r(i949[27], i949[28], 0, i948, 'skybox')
  i948.fogMode = i949[29]
  var i951 = i949[30]
  var i950 = []
  for(var i = 0; i < i951.length; i += 1) {
    i950.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i951[i + 0]) );
  }
  i948.lightmaps = i950
  i948.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i949[31], i948.lightProbes)
  i948.lightmapsMode = i949[32]
  i948.mixedBakeMode = i949[33]
  i948.environmentLightingMode = i949[34]
  i948.ambientProbe = new pc.SphericalHarmonicsL2(i949[35])
  i948.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i949[36])
  i948.useReferenceAmbientProbe = !!i949[37]
  request.r(i949[38], i949[39], 0, i948, 'customReflection')
  request.r(i949[40], i949[41], 0, i948, 'defaultReflection')
  i948.defaultReflectionMode = i949[42]
  i948.defaultReflectionResolution = i949[43]
  i948.sunLightObjectId = i949[44]
  i948.pixelLightCount = i949[45]
  i948.defaultReflectionHDR = !!i949[46]
  i948.hasLightDataAsset = !!i949[47]
  i948.hasManualGenerate = !!i949[48]
  return i948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i955 = data
  request.r(i955[0], i955[1], 0, i954, 'lightmapColor')
  request.r(i955[2], i955[3], 0, i954, 'lightmapDirection')
  return i954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i956 = root || new UnityEngine.LightProbes()
  var i957 = data
  return i956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i964 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i965 = data
  var i967 = i965[0]
  var i966 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i967.length; i += 1) {
    i966.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i967[i + 0]));
  }
  i964.ShaderCompilationErrors = i966
  i964.name = i965[1]
  i964.guid = i965[2]
  var i969 = i965[3]
  var i968 = []
  for(var i = 0; i < i969.length; i += 1) {
    i968.push( i969[i + 0] );
  }
  i964.shaderDefinedKeywords = i968
  var i971 = i965[4]
  var i970 = []
  for(var i = 0; i < i971.length; i += 1) {
    i970.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i971[i + 0]) );
  }
  i964.passes = i970
  var i973 = i965[5]
  var i972 = []
  for(var i = 0; i < i973.length; i += 1) {
    i972.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i973[i + 0]) );
  }
  i964.usePasses = i972
  var i975 = i965[6]
  var i974 = []
  for(var i = 0; i < i975.length; i += 1) {
    i974.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i975[i + 0]) );
  }
  i964.defaultParameterValues = i974
  request.r(i965[7], i965[8], 0, i964, 'unityFallbackShader')
  i964.readDepth = !!i965[9]
  i964.isCreatedByShaderGraph = !!i965[10]
  i964.disableBatching = !!i965[11]
  i964.compiled = !!i965[12]
  return i964
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i979 = data
  i978.shaderName = i979[0]
  i978.errorMessage = i979[1]
  return i978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i982 = root || new pc.UnityShaderPass()
  var i983 = data
  i982.id = i983[0]
  i982.subShaderIndex = i983[1]
  i982.name = i983[2]
  i982.passType = i983[3]
  i982.grabPassTextureName = i983[4]
  i982.usePass = !!i983[5]
  i982.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i983[6], i982.zTest)
  i982.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i983[7], i982.zWrite)
  i982.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i983[8], i982.culling)
  i982.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i983[9], i982.blending)
  i982.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i983[10], i982.alphaBlending)
  i982.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i983[11], i982.colorWriteMask)
  i982.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i983[12], i982.offsetUnits)
  i982.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i983[13], i982.offsetFactor)
  i982.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i983[14], i982.stencilRef)
  i982.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i983[15], i982.stencilReadMask)
  i982.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i983[16], i982.stencilWriteMask)
  i982.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i983[17], i982.stencilOp)
  i982.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i983[18], i982.stencilOpFront)
  i982.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i983[19], i982.stencilOpBack)
  var i985 = i983[20]
  var i984 = []
  for(var i = 0; i < i985.length; i += 1) {
    i984.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i985[i + 0]) );
  }
  i982.tags = i984
  var i987 = i983[21]
  var i986 = []
  for(var i = 0; i < i987.length; i += 1) {
    i986.push( i987[i + 0] );
  }
  i982.passDefinedKeywords = i986
  var i989 = i983[22]
  var i988 = []
  for(var i = 0; i < i989.length; i += 1) {
    i988.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i989[i + 0]) );
  }
  i982.passDefinedKeywordGroups = i988
  var i991 = i983[23]
  var i990 = []
  for(var i = 0; i < i991.length; i += 1) {
    i990.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i991[i + 0]) );
  }
  i982.variants = i990
  var i993 = i983[24]
  var i992 = []
  for(var i = 0; i < i993.length; i += 1) {
    i992.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i993[i + 0]) );
  }
  i982.excludedVariants = i992
  i982.hasDepthReader = !!i983[25]
  return i982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i995 = data
  i994.val = i995[0]
  i994.name = i995[1]
  return i994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i997 = data
  i996.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i997[0], i996.src)
  i996.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i997[1], i996.dst)
  i996.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i997[2], i996.op)
  return i996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i999 = data
  i998.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i999[0], i998.pass)
  i998.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i999[1], i998.fail)
  i998.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i999[2], i998.zFail)
  i998.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i999[3], i998.comp)
  return i998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1003 = data
  i1002.name = i1003[0]
  i1002.value = i1003[1]
  return i1002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1007 = data
  var i1009 = i1007[0]
  var i1008 = []
  for(var i = 0; i < i1009.length; i += 1) {
    i1008.push( i1009[i + 0] );
  }
  i1006.keywords = i1008
  i1006.hasDiscard = !!i1007[1]
  return i1006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1013 = data
  i1012.passId = i1013[0]
  i1012.subShaderIndex = i1013[1]
  var i1015 = i1013[2]
  var i1014 = []
  for(var i = 0; i < i1015.length; i += 1) {
    i1014.push( i1015[i + 0] );
  }
  i1012.keywords = i1014
  i1012.vertexProgram = i1013[3]
  i1012.fragmentProgram = i1013[4]
  i1012.exportedForWebGl2 = !!i1013[5]
  i1012.readDepth = !!i1013[6]
  return i1012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1019 = data
  request.r(i1019[0], i1019[1], 0, i1018, 'shader')
  i1018.pass = i1019[2]
  return i1018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1023 = data
  i1022.name = i1023[0]
  i1022.type = i1023[1]
  i1022.value = new pc.Vec4( i1023[2], i1023[3], i1023[4], i1023[5] )
  i1022.textureValue = i1023[6]
  i1022.shaderPropertyFlag = i1023[7]
  return i1022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1025 = data
  i1024.name = i1025[0]
  request.r(i1025[1], i1025[2], 0, i1024, 'texture')
  i1024.aabb = i1025[3]
  i1024.vertices = i1025[4]
  i1024.triangles = i1025[5]
  i1024.textureRect = UnityEngine.Rect.MinMaxRect(i1025[6], i1025[7], i1025[8], i1025[9])
  i1024.packedRect = UnityEngine.Rect.MinMaxRect(i1025[10], i1025[11], i1025[12], i1025[13])
  i1024.border = new pc.Vec4( i1025[14], i1025[15], i1025[16], i1025[17] )
  i1024.transparency = i1025[18]
  i1024.bounds = i1025[19]
  i1024.pixelsPerUnit = i1025[20]
  i1024.textureWidth = i1025[21]
  i1024.textureHeight = i1025[22]
  i1024.nativeSize = new pc.Vec2( i1025[23], i1025[24] )
  i1024.pivot = new pc.Vec2( i1025[25], i1025[26] )
  i1024.textureRectOffset = new pc.Vec2( i1025[27], i1025[28] )
  return i1024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1027 = data
  i1026.name = i1027[0]
  return i1026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1029 = data
  i1028.name = i1029[0]
  i1028.wrapMode = i1029[1]
  i1028.isLooping = !!i1029[2]
  i1028.length = i1029[3]
  var i1031 = i1029[4]
  var i1030 = []
  for(var i = 0; i < i1031.length; i += 1) {
    i1030.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1031[i + 0]) );
  }
  i1028.curves = i1030
  var i1033 = i1029[5]
  var i1032 = []
  for(var i = 0; i < i1033.length; i += 1) {
    i1032.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1033[i + 0]) );
  }
  i1028.events = i1032
  i1028.halfPrecision = !!i1029[6]
  i1028._frameRate = i1029[7]
  i1028.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1029[8], i1028.localBounds)
  i1028.hasMuscleCurves = !!i1029[9]
  var i1035 = i1029[10]
  var i1034 = []
  for(var i = 0; i < i1035.length; i += 1) {
    i1034.push( i1035[i + 0] );
  }
  i1028.clipMuscleConstant = i1034
  i1028.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1029[11], i1028.clipBindingConstant)
  return i1028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1039 = data
  i1038.path = i1039[0]
  i1038.hash = i1039[1]
  i1038.componentType = i1039[2]
  i1038.property = i1039[3]
  i1038.keys = i1039[4]
  var i1041 = i1039[5]
  var i1040 = []
  for(var i = 0; i < i1041.length; i += 1) {
    i1040.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1041[i + 0]) );
  }
  i1038.objectReferenceKeys = i1040
  return i1038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1045 = data
  i1044.time = i1045[0]
  request.r(i1045[1], i1045[2], 0, i1044, 'value')
  return i1044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1049 = data
  i1048.functionName = i1049[0]
  i1048.floatParameter = i1049[1]
  i1048.intParameter = i1049[2]
  i1048.stringParameter = i1049[3]
  request.r(i1049[4], i1049[5], 0, i1048, 'objectReferenceParameter')
  i1048.time = i1049[6]
  return i1048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1051 = data
  i1050.center = new pc.Vec3( i1051[0], i1051[1], i1051[2] )
  i1050.extends = new pc.Vec3( i1051[3], i1051[4], i1051[5] )
  return i1050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1055 = data
  var i1057 = i1055[0]
  var i1056 = []
  for(var i = 0; i < i1057.length; i += 1) {
    i1056.push( i1057[i + 0] );
  }
  i1054.genericBindings = i1056
  var i1059 = i1055[1]
  var i1058 = []
  for(var i = 0; i < i1059.length; i += 1) {
    i1058.push( i1059[i + 0] );
  }
  i1054.pptrCurveMapping = i1058
  return i1054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1060 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1061 = data
  i1060.name = i1061[0]
  i1060.ascent = i1061[1]
  i1060.originalLineHeight = i1061[2]
  i1060.fontSize = i1061[3]
  var i1063 = i1061[4]
  var i1062 = []
  for(var i = 0; i < i1063.length; i += 1) {
    i1062.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1063[i + 0]) );
  }
  i1060.characterInfo = i1062
  request.r(i1061[5], i1061[6], 0, i1060, 'texture')
  i1060.originalFontSize = i1061[7]
  return i1060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1067 = data
  i1066.index = i1067[0]
  i1066.advance = i1067[1]
  i1066.bearing = i1067[2]
  i1066.glyphWidth = i1067[3]
  i1066.glyphHeight = i1067[4]
  i1066.minX = i1067[5]
  i1066.maxX = i1067[6]
  i1066.minY = i1067[7]
  i1066.maxY = i1067[8]
  i1066.uvBottomLeftX = i1067[9]
  i1066.uvBottomLeftY = i1067[10]
  i1066.uvBottomRightX = i1067[11]
  i1066.uvBottomRightY = i1067[12]
  i1066.uvTopLeftX = i1067[13]
  i1066.uvTopLeftY = i1067[14]
  i1066.uvTopRightX = i1067[15]
  i1066.uvTopRightY = i1067[16]
  return i1066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1069 = data
  i1068.name = i1069[0]
  var i1071 = i1069[1]
  var i1070 = []
  for(var i = 0; i < i1071.length; i += 1) {
    i1070.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1071[i + 0]) );
  }
  i1068.layers = i1070
  var i1073 = i1069[2]
  var i1072 = []
  for(var i = 0; i < i1073.length; i += 1) {
    i1072.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1073[i + 0]) );
  }
  i1068.parameters = i1072
  i1068.animationClips = i1069[3]
  i1068.avatarUnsupported = i1069[4]
  return i1068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1077 = data
  i1076.name = i1077[0]
  i1076.defaultWeight = i1077[1]
  i1076.blendingMode = i1077[2]
  i1076.avatarMask = i1077[3]
  i1076.syncedLayerIndex = i1077[4]
  i1076.syncedLayerAffectsTiming = !!i1077[5]
  i1076.syncedLayers = i1077[6]
  i1076.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1077[7], i1076.stateMachine)
  return i1076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1079 = data
  i1078.id = i1079[0]
  i1078.name = i1079[1]
  i1078.path = i1079[2]
  var i1081 = i1079[3]
  var i1080 = []
  for(var i = 0; i < i1081.length; i += 1) {
    i1080.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1081[i + 0]) );
  }
  i1078.states = i1080
  var i1083 = i1079[4]
  var i1082 = []
  for(var i = 0; i < i1083.length; i += 1) {
    i1082.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1083[i + 0]) );
  }
  i1078.machines = i1082
  var i1085 = i1079[5]
  var i1084 = []
  for(var i = 0; i < i1085.length; i += 1) {
    i1084.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1085[i + 0]) );
  }
  i1078.entryStateTransitions = i1084
  var i1087 = i1079[6]
  var i1086 = []
  for(var i = 0; i < i1087.length; i += 1) {
    i1086.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1087[i + 0]) );
  }
  i1078.exitStateTransitions = i1086
  var i1089 = i1079[7]
  var i1088 = []
  for(var i = 0; i < i1089.length; i += 1) {
    i1088.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1089[i + 0]) );
  }
  i1078.anyStateTransitions = i1088
  i1078.defaultStateId = i1079[8]
  return i1078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1093 = data
  i1092.id = i1093[0]
  i1092.name = i1093[1]
  i1092.cycleOffset = i1093[2]
  i1092.cycleOffsetParameter = i1093[3]
  i1092.cycleOffsetParameterActive = !!i1093[4]
  i1092.mirror = !!i1093[5]
  i1092.mirrorParameter = i1093[6]
  i1092.mirrorParameterActive = !!i1093[7]
  i1092.motionId = i1093[8]
  i1092.nameHash = i1093[9]
  i1092.fullPathHash = i1093[10]
  i1092.speed = i1093[11]
  i1092.speedParameter = i1093[12]
  i1092.speedParameterActive = !!i1093[13]
  i1092.tag = i1093[14]
  i1092.tagHash = i1093[15]
  i1092.writeDefaultValues = !!i1093[16]
  var i1095 = i1093[17]
  var i1094 = []
  for(var i = 0; i < i1095.length; i += 2) {
  request.r(i1095[i + 0], i1095[i + 1], 2, i1094, '')
  }
  i1092.behaviours = i1094
  var i1097 = i1093[18]
  var i1096 = []
  for(var i = 0; i < i1097.length; i += 1) {
    i1096.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1097[i + 0]) );
  }
  i1092.transitions = i1096
  return i1092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1103 = data
  i1102.fullPath = i1103[0]
  i1102.canTransitionToSelf = !!i1103[1]
  i1102.duration = i1103[2]
  i1102.exitTime = i1103[3]
  i1102.hasExitTime = !!i1103[4]
  i1102.hasFixedDuration = !!i1103[5]
  i1102.interruptionSource = i1103[6]
  i1102.offset = i1103[7]
  i1102.orderedInterruption = !!i1103[8]
  i1102.destinationStateId = i1103[9]
  i1102.isExit = !!i1103[10]
  i1102.mute = !!i1103[11]
  i1102.solo = !!i1103[12]
  var i1105 = i1103[13]
  var i1104 = []
  for(var i = 0; i < i1105.length; i += 1) {
    i1104.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1105[i + 0]) );
  }
  i1102.conditions = i1104
  return i1102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1111 = data
  i1110.destinationStateId = i1111[0]
  i1110.isExit = !!i1111[1]
  i1110.mute = !!i1111[2]
  i1110.solo = !!i1111[3]
  var i1113 = i1111[4]
  var i1112 = []
  for(var i = 0; i < i1113.length; i += 1) {
    i1112.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1113[i + 0]) );
  }
  i1110.conditions = i1112
  return i1110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1116 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1117 = data
  i1116.defaultBool = !!i1117[0]
  i1116.defaultFloat = i1117[1]
  i1116.defaultInt = i1117[2]
  i1116.name = i1117[3]
  i1116.nameHash = i1117[4]
  i1116.type = i1117[5]
  return i1116
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1119 = data
  i1118.name = i1119[0]
  i1118.bytes64 = i1119[1]
  i1118.data = i1119[2]
  return i1118
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i1120 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i1121 = data
  var i1123 = i1121[0]
  var i1122 = []
  for(var i = 0; i < i1123.length; i += 2) {
  request.r(i1123[i + 0], i1123[i + 1], 2, i1122, '')
  }
  i1120.atlasAssets = i1122
  i1120.scale = i1121[1]
  request.r(i1121[2], i1121[3], 0, i1120, 'skeletonJSON')
  i1120.isUpgradingBlendModeMaterials = !!i1121[4]
  i1120.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i1121[5], i1120.blendModeMaterials)
  var i1125 = i1121[6]
  var i1124 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i1125.length; i += 2) {
  request.r(i1125[i + 0], i1125[i + 1], 1, i1124, '')
  }
  i1120.skeletonDataModifiers = i1124
  var i1127 = i1121[7]
  var i1126 = []
  for(var i = 0; i < i1127.length; i += 1) {
    i1126.push( i1127[i + 0] );
  }
  i1120.fromAnimation = i1126
  var i1129 = i1121[8]
  var i1128 = []
  for(var i = 0; i < i1129.length; i += 1) {
    i1128.push( i1129[i + 0] );
  }
  i1120.toAnimation = i1128
  i1120.duration = i1121[9]
  i1120.defaultMix = i1121[10]
  request.r(i1121[11], i1121[12], 0, i1120, 'controller')
  return i1120
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i1132 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i1133 = data
  i1132.applyAdditiveMaterial = !!i1133[0]
  var i1135 = i1133[1]
  var i1134 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1135.length; i += 1) {
    i1134.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1135[i + 0]));
  }
  i1132.additiveMaterials = i1134
  var i1137 = i1133[2]
  var i1136 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1137.length; i += 1) {
    i1136.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1137[i + 0]));
  }
  i1132.multiplyMaterials = i1136
  var i1139 = i1133[3]
  var i1138 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1139.length; i += 1) {
    i1138.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1139[i + 0]));
  }
  i1132.screenMaterials = i1138
  i1132.requiresBlendModeMaterials = !!i1133[4]
  return i1132
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i1142 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i1143 = data
  i1142.pageName = i1143[0]
  request.r(i1143[1], i1143[2], 0, i1142, 'material')
  return i1142
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i1146 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i1147 = data
  request.r(i1147[0], i1147[1], 0, i1146, 'atlasFile')
  var i1149 = i1147[2]
  var i1148 = []
  for(var i = 0; i < i1149.length; i += 2) {
  request.r(i1149[i + 0], i1149[i + 1], 2, i1148, '')
  }
  i1146.materials = i1148
  i1146.textureLoadingMode = i1147[3]
  request.r(i1147[4], i1147[5], 0, i1146, 'onDemandTextureLoader')
  return i1146
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1150 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1151 = data
  request.r(i1151[0], i1151[1], 0, i1150, 'atlas')
  i1150.normalStyle = i1151[2]
  i1150.normalSpacingOffset = i1151[3]
  i1150.boldStyle = i1151[4]
  i1150.boldSpacing = i1151[5]
  i1150.italicStyle = i1151[6]
  i1150.tabSize = i1151[7]
  i1150.hashCode = i1151[8]
  request.r(i1151[9], i1151[10], 0, i1150, 'material')
  i1150.materialHashCode = i1151[11]
  i1150.m_Version = i1151[12]
  i1150.m_SourceFontFileGUID = i1151[13]
  request.r(i1151[14], i1151[15], 0, i1150, 'm_SourceFontFile_EditorRef')
  request.r(i1151[16], i1151[17], 0, i1150, 'm_SourceFontFile')
  i1150.m_AtlasPopulationMode = i1151[18]
  i1150.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1151[19], i1150.m_FaceInfo)
  var i1153 = i1151[20]
  var i1152 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1153.length; i += 1) {
    i1152.add(request.d('UnityEngine.TextCore.Glyph', i1153[i + 0]));
  }
  i1150.m_GlyphTable = i1152
  var i1155 = i1151[21]
  var i1154 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1155.length; i += 1) {
    i1154.add(request.d('TMPro.TMP_Character', i1155[i + 0]));
  }
  i1150.m_CharacterTable = i1154
  var i1157 = i1151[22]
  var i1156 = []
  for(var i = 0; i < i1157.length; i += 2) {
  request.r(i1157[i + 0], i1157[i + 1], 2, i1156, '')
  }
  i1150.m_AtlasTextures = i1156
  i1150.m_AtlasTextureIndex = i1151[23]
  i1150.m_IsMultiAtlasTexturesEnabled = !!i1151[24]
  i1150.m_ClearDynamicDataOnBuild = !!i1151[25]
  var i1159 = i1151[26]
  var i1158 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1159.length; i += 1) {
    i1158.add(request.d('UnityEngine.TextCore.GlyphRect', i1159[i + 0]));
  }
  i1150.m_UsedGlyphRects = i1158
  var i1161 = i1151[27]
  var i1160 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1161.length; i += 1) {
    i1160.add(request.d('UnityEngine.TextCore.GlyphRect', i1161[i + 0]));
  }
  i1150.m_FreeGlyphRects = i1160
  i1150.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1151[28], i1150.m_fontInfo)
  i1150.m_AtlasWidth = i1151[29]
  i1150.m_AtlasHeight = i1151[30]
  i1150.m_AtlasPadding = i1151[31]
  i1150.m_AtlasRenderMode = i1151[32]
  var i1163 = i1151[33]
  var i1162 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1163.length; i += 1) {
    i1162.add(request.d('TMPro.TMP_Glyph', i1163[i + 0]));
  }
  i1150.m_glyphInfoList = i1162
  i1150.m_KerningTable = request.d('TMPro.KerningTable', i1151[34], i1150.m_KerningTable)
  i1150.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1151[35], i1150.m_FontFeatureTable)
  var i1165 = i1151[36]
  var i1164 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1165.length; i += 2) {
  request.r(i1165[i + 0], i1165[i + 1], 1, i1164, '')
  }
  i1150.fallbackFontAssets = i1164
  var i1167 = i1151[37]
  var i1166 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1167.length; i += 2) {
  request.r(i1167[i + 0], i1167[i + 1], 1, i1166, '')
  }
  i1150.m_FallbackFontAssetTable = i1166
  i1150.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1151[38], i1150.m_CreationSettings)
  var i1169 = i1151[39]
  var i1168 = []
  for(var i = 0; i < i1169.length; i += 1) {
    i1168.push( request.d('TMPro.TMP_FontWeightPair', i1169[i + 0]) );
  }
  i1150.m_FontWeightTable = i1168
  var i1171 = i1151[40]
  var i1170 = []
  for(var i = 0; i < i1171.length; i += 1) {
    i1170.push( request.d('TMPro.TMP_FontWeightPair', i1171[i + 0]) );
  }
  i1150.fontWeights = i1170
  return i1150
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1172 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1173 = data
  i1172.m_FaceIndex = i1173[0]
  i1172.m_FamilyName = i1173[1]
  i1172.m_StyleName = i1173[2]
  i1172.m_PointSize = i1173[3]
  i1172.m_Scale = i1173[4]
  i1172.m_UnitsPerEM = i1173[5]
  i1172.m_LineHeight = i1173[6]
  i1172.m_AscentLine = i1173[7]
  i1172.m_CapLine = i1173[8]
  i1172.m_MeanLine = i1173[9]
  i1172.m_Baseline = i1173[10]
  i1172.m_DescentLine = i1173[11]
  i1172.m_SuperscriptOffset = i1173[12]
  i1172.m_SuperscriptSize = i1173[13]
  i1172.m_SubscriptOffset = i1173[14]
  i1172.m_SubscriptSize = i1173[15]
  i1172.m_UnderlineOffset = i1173[16]
  i1172.m_UnderlineThickness = i1173[17]
  i1172.m_StrikethroughOffset = i1173[18]
  i1172.m_StrikethroughThickness = i1173[19]
  i1172.m_TabWidth = i1173[20]
  return i1172
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1176 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1177 = data
  i1176.m_Index = i1177[0]
  i1176.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1177[1], i1176.m_Metrics)
  i1176.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1177[2], i1176.m_GlyphRect)
  i1176.m_Scale = i1177[3]
  i1176.m_AtlasIndex = i1177[4]
  i1176.m_ClassDefinitionType = i1177[5]
  return i1176
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1178 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1179 = data
  i1178.m_Width = i1179[0]
  i1178.m_Height = i1179[1]
  i1178.m_HorizontalBearingX = i1179[2]
  i1178.m_HorizontalBearingY = i1179[3]
  i1178.m_HorizontalAdvance = i1179[4]
  return i1178
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1180 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1181 = data
  i1180.m_X = i1181[0]
  i1180.m_Y = i1181[1]
  i1180.m_Width = i1181[2]
  i1180.m_Height = i1181[3]
  return i1180
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1184 = root || request.c( 'TMPro.TMP_Character' )
  var i1185 = data
  i1184.m_ElementType = i1185[0]
  i1184.m_Unicode = i1185[1]
  i1184.m_GlyphIndex = i1185[2]
  i1184.m_Scale = i1185[3]
  return i1184
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1190 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1191 = data
  i1190.Name = i1191[0]
  i1190.PointSize = i1191[1]
  i1190.Scale = i1191[2]
  i1190.CharacterCount = i1191[3]
  i1190.LineHeight = i1191[4]
  i1190.Baseline = i1191[5]
  i1190.Ascender = i1191[6]
  i1190.CapHeight = i1191[7]
  i1190.Descender = i1191[8]
  i1190.CenterLine = i1191[9]
  i1190.SuperscriptOffset = i1191[10]
  i1190.SubscriptOffset = i1191[11]
  i1190.SubSize = i1191[12]
  i1190.Underline = i1191[13]
  i1190.UnderlineThickness = i1191[14]
  i1190.strikethrough = i1191[15]
  i1190.strikethroughThickness = i1191[16]
  i1190.TabWidth = i1191[17]
  i1190.Padding = i1191[18]
  i1190.AtlasWidth = i1191[19]
  i1190.AtlasHeight = i1191[20]
  return i1190
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1194 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1195 = data
  i1194.id = i1195[0]
  i1194.x = i1195[1]
  i1194.y = i1195[2]
  i1194.width = i1195[3]
  i1194.height = i1195[4]
  i1194.xOffset = i1195[5]
  i1194.yOffset = i1195[6]
  i1194.xAdvance = i1195[7]
  i1194.scale = i1195[8]
  return i1194
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1196 = root || request.c( 'TMPro.KerningTable' )
  var i1197 = data
  var i1199 = i1197[0]
  var i1198 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1199.length; i += 1) {
    i1198.add(request.d('TMPro.KerningPair', i1199[i + 0]));
  }
  i1196.kerningPairs = i1198
  return i1196
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1202 = root || request.c( 'TMPro.KerningPair' )
  var i1203 = data
  i1202.xOffset = i1203[0]
  i1202.m_FirstGlyph = i1203[1]
  i1202.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1203[2], i1202.m_FirstGlyphAdjustments)
  i1202.m_SecondGlyph = i1203[3]
  i1202.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1203[4], i1202.m_SecondGlyphAdjustments)
  i1202.m_IgnoreSpacingAdjustments = !!i1203[5]
  return i1202
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1204 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1205 = data
  var i1207 = i1205[0]
  var i1206 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1207.length; i += 1) {
    i1206.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1207[i + 0]));
  }
  i1204.m_GlyphPairAdjustmentRecords = i1206
  return i1204
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1210 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1211 = data
  i1210.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1211[0], i1210.m_FirstAdjustmentRecord)
  i1210.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1211[1], i1210.m_SecondAdjustmentRecord)
  i1210.m_FeatureLookupFlags = i1211[2]
  return i1210
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1214 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1215 = data
  i1214.sourceFontFileName = i1215[0]
  i1214.sourceFontFileGUID = i1215[1]
  i1214.pointSizeSamplingMode = i1215[2]
  i1214.pointSize = i1215[3]
  i1214.padding = i1215[4]
  i1214.packingMode = i1215[5]
  i1214.atlasWidth = i1215[6]
  i1214.atlasHeight = i1215[7]
  i1214.characterSetSelectionMode = i1215[8]
  i1214.characterSequence = i1215[9]
  i1214.referencedFontAssetGUID = i1215[10]
  i1214.referencedTextAssetGUID = i1215[11]
  i1214.fontStyle = i1215[12]
  i1214.fontStyleModifier = i1215[13]
  i1214.renderMode = i1215[14]
  i1214.includeFontFeatures = !!i1215[15]
  return i1214
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1218 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1219 = data
  request.r(i1219[0], i1219[1], 0, i1218, 'regularTypeface')
  request.r(i1219[2], i1219[3], 0, i1218, 'italicTypeface')
  return i1218
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1220 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1221 = data
  i1220.useSafeMode = !!i1221[0]
  i1220.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1221[1], i1220.safeModeOptions)
  i1220.timeScale = i1221[2]
  i1220.unscaledTimeScale = i1221[3]
  i1220.useSmoothDeltaTime = !!i1221[4]
  i1220.maxSmoothUnscaledTime = i1221[5]
  i1220.rewindCallbackMode = i1221[6]
  i1220.showUnityEditorReport = !!i1221[7]
  i1220.logBehaviour = i1221[8]
  i1220.drawGizmos = !!i1221[9]
  i1220.defaultRecyclable = !!i1221[10]
  i1220.defaultAutoPlay = i1221[11]
  i1220.defaultUpdateType = i1221[12]
  i1220.defaultTimeScaleIndependent = !!i1221[13]
  i1220.defaultEaseType = i1221[14]
  i1220.defaultEaseOvershootOrAmplitude = i1221[15]
  i1220.defaultEasePeriod = i1221[16]
  i1220.defaultAutoKill = !!i1221[17]
  i1220.defaultLoopType = i1221[18]
  i1220.debugMode = !!i1221[19]
  i1220.debugStoreTargetId = !!i1221[20]
  i1220.showPreviewPanel = !!i1221[21]
  i1220.storeSettingsLocation = i1221[22]
  i1220.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1221[23], i1220.modules)
  i1220.createASMDEF = !!i1221[24]
  i1220.showPlayingTweens = !!i1221[25]
  i1220.showPausedTweens = !!i1221[26]
  return i1220
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1222 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1223 = data
  i1222.logBehaviour = i1223[0]
  i1222.nestedTweenFailureBehaviour = i1223[1]
  return i1222
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1224 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1225 = data
  i1224.showPanel = !!i1225[0]
  i1224.audioEnabled = !!i1225[1]
  i1224.physicsEnabled = !!i1225[2]
  i1224.physics2DEnabled = !!i1225[3]
  i1224.spriteEnabled = !!i1225[4]
  i1224.uiEnabled = !!i1225[5]
  i1224.textMeshProEnabled = !!i1225[6]
  i1224.tk2DEnabled = !!i1225[7]
  i1224.deAudioEnabled = !!i1225[8]
  i1224.deUnityExtendedEnabled = !!i1225[9]
  i1224.epoOutlineEnabled = !!i1225[10]
  return i1224
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1226 = root || request.c( 'TMPro.TMP_Settings' )
  var i1227 = data
  i1226.m_enableWordWrapping = !!i1227[0]
  i1226.m_enableKerning = !!i1227[1]
  i1226.m_enableExtraPadding = !!i1227[2]
  i1226.m_enableTintAllSprites = !!i1227[3]
  i1226.m_enableParseEscapeCharacters = !!i1227[4]
  i1226.m_EnableRaycastTarget = !!i1227[5]
  i1226.m_GetFontFeaturesAtRuntime = !!i1227[6]
  i1226.m_missingGlyphCharacter = i1227[7]
  i1226.m_warningsDisabled = !!i1227[8]
  request.r(i1227[9], i1227[10], 0, i1226, 'm_defaultFontAsset')
  i1226.m_defaultFontAssetPath = i1227[11]
  i1226.m_defaultFontSize = i1227[12]
  i1226.m_defaultAutoSizeMinRatio = i1227[13]
  i1226.m_defaultAutoSizeMaxRatio = i1227[14]
  i1226.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1227[15], i1227[16] )
  i1226.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1227[17], i1227[18] )
  i1226.m_autoSizeTextContainer = !!i1227[19]
  i1226.m_IsTextObjectScaleStatic = !!i1227[20]
  var i1229 = i1227[21]
  var i1228 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1229.length; i += 2) {
  request.r(i1229[i + 0], i1229[i + 1], 1, i1228, '')
  }
  i1226.m_fallbackFontAssets = i1228
  i1226.m_matchMaterialPreset = !!i1227[22]
  request.r(i1227[23], i1227[24], 0, i1226, 'm_defaultSpriteAsset')
  i1226.m_defaultSpriteAssetPath = i1227[25]
  i1226.m_enableEmojiSupport = !!i1227[26]
  i1226.m_MissingCharacterSpriteUnicode = i1227[27]
  i1226.m_defaultColorGradientPresetsPath = i1227[28]
  request.r(i1227[29], i1227[30], 0, i1226, 'm_defaultStyleSheet')
  i1226.m_StyleSheetsResourcePath = i1227[31]
  request.r(i1227[32], i1227[33], 0, i1226, 'm_leadingCharacters')
  request.r(i1227[34], i1227[35], 0, i1226, 'm_followingCharacters')
  i1226.m_UseModernHangulLineBreakingRules = !!i1227[36]
  return i1226
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1230 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1231 = data
  i1230.m_GlyphIndex = i1231[0]
  i1230.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1231[1], i1230.m_GlyphValueRecord)
  return i1230
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1232 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1233 = data
  i1232.m_XPlacement = i1233[0]
  i1232.m_YPlacement = i1233[1]
  i1232.m_XAdvance = i1233[2]
  i1232.m_YAdvance = i1233[3]
  return i1232
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1234 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1235 = data
  request.r(i1235[0], i1235[1], 0, i1234, 'spriteSheet')
  var i1237 = i1235[2]
  var i1236 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1237.length; i += 1) {
    i1236.add(request.d('TMPro.TMP_Sprite', i1237[i + 0]));
  }
  i1234.spriteInfoList = i1236
  var i1239 = i1235[3]
  var i1238 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1239.length; i += 2) {
  request.r(i1239[i + 0], i1239[i + 1], 1, i1238, '')
  }
  i1234.fallbackSpriteAssets = i1238
  i1234.hashCode = i1235[4]
  request.r(i1235[5], i1235[6], 0, i1234, 'material')
  i1234.materialHashCode = i1235[7]
  i1234.m_Version = i1235[8]
  i1234.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1235[9], i1234.m_FaceInfo)
  var i1241 = i1235[10]
  var i1240 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1241.length; i += 1) {
    i1240.add(request.d('TMPro.TMP_SpriteCharacter', i1241[i + 0]));
  }
  i1234.m_SpriteCharacterTable = i1240
  var i1243 = i1235[11]
  var i1242 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1243.length; i += 1) {
    i1242.add(request.d('TMPro.TMP_SpriteGlyph', i1243[i + 0]));
  }
  i1234.m_SpriteGlyphTable = i1242
  return i1234
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1246 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1247 = data
  i1246.name = i1247[0]
  i1246.hashCode = i1247[1]
  i1246.unicode = i1247[2]
  i1246.pivot = new pc.Vec2( i1247[3], i1247[4] )
  request.r(i1247[5], i1247[6], 0, i1246, 'sprite')
  i1246.id = i1247[7]
  i1246.x = i1247[8]
  i1246.y = i1247[9]
  i1246.width = i1247[10]
  i1246.height = i1247[11]
  i1246.xOffset = i1247[12]
  i1246.yOffset = i1247[13]
  i1246.xAdvance = i1247[14]
  i1246.scale = i1247[15]
  return i1246
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1252 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1253 = data
  i1252.m_Name = i1253[0]
  i1252.m_HashCode = i1253[1]
  i1252.m_ElementType = i1253[2]
  i1252.m_Unicode = i1253[3]
  i1252.m_GlyphIndex = i1253[4]
  i1252.m_Scale = i1253[5]
  return i1252
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1256 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1257 = data
  request.r(i1257[0], i1257[1], 0, i1256, 'sprite')
  i1256.m_Index = i1257[2]
  i1256.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1257[3], i1256.m_Metrics)
  i1256.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1257[4], i1256.m_GlyphRect)
  i1256.m_Scale = i1257[5]
  i1256.m_AtlasIndex = i1257[6]
  i1256.m_ClassDefinitionType = i1257[7]
  return i1256
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1258 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1259 = data
  var i1261 = i1259[0]
  var i1260 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1261.length; i += 1) {
    i1260.add(request.d('TMPro.TMP_Style', i1261[i + 0]));
  }
  i1258.m_StyleList = i1260
  return i1258
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1264 = root || request.c( 'TMPro.TMP_Style' )
  var i1265 = data
  i1264.m_Name = i1265[0]
  i1264.m_HashCode = i1265[1]
  i1264.m_OpeningDefinition = i1265[2]
  i1264.m_ClosingDefinition = i1265[3]
  i1264.m_OpeningTagArray = i1265[4]
  i1264.m_ClosingTagArray = i1265[5]
  i1264.m_OpeningTagUnicodeArray = i1265[6]
  i1264.m_ClosingTagUnicodeArray = i1265[7]
  return i1264
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1266 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1267 = data
  var i1269 = i1267[0]
  var i1268 = []
  for(var i = 0; i < i1269.length; i += 1) {
    i1268.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1269[i + 0]) );
  }
  i1266.files = i1268
  i1266.componentToPrefabIds = i1267[1]
  return i1266
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1272 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1273 = data
  i1272.path = i1273[0]
  request.r(i1273[1], i1273[2], 0, i1272, 'unityObject')
  return i1272
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1274 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1275 = data
  var i1277 = i1275[0]
  var i1276 = []
  for(var i = 0; i < i1277.length; i += 1) {
    i1276.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1277[i + 0]) );
  }
  i1274.scriptsExecutionOrder = i1276
  var i1279 = i1275[1]
  var i1278 = []
  for(var i = 0; i < i1279.length; i += 1) {
    i1278.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1279[i + 0]) );
  }
  i1274.sortingLayers = i1278
  var i1281 = i1275[2]
  var i1280 = []
  for(var i = 0; i < i1281.length; i += 1) {
    i1280.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1281[i + 0]) );
  }
  i1274.cullingLayers = i1280
  i1274.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1275[3], i1274.timeSettings)
  i1274.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1275[4], i1274.physicsSettings)
  i1274.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1275[5], i1274.physics2DSettings)
  i1274.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1275[6], i1274.qualitySettings)
  i1274.enableRealtimeShadows = !!i1275[7]
  i1274.enableAutoInstancing = !!i1275[8]
  i1274.enableStaticBatching = !!i1275[9]
  i1274.enableDynamicBatching = !!i1275[10]
  i1274.lightmapEncodingQuality = i1275[11]
  i1274.desiredColorSpace = i1275[12]
  var i1283 = i1275[13]
  var i1282 = []
  for(var i = 0; i < i1283.length; i += 1) {
    i1282.push( i1283[i + 0] );
  }
  i1274.allTags = i1282
  return i1274
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1286 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1287 = data
  i1286.name = i1287[0]
  i1286.value = i1287[1]
  return i1286
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1290 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1291 = data
  i1290.id = i1291[0]
  i1290.name = i1291[1]
  i1290.value = i1291[2]
  return i1290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1294 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1295 = data
  i1294.id = i1295[0]
  i1294.name = i1295[1]
  return i1294
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1296 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1297 = data
  i1296.fixedDeltaTime = i1297[0]
  i1296.maximumDeltaTime = i1297[1]
  i1296.timeScale = i1297[2]
  i1296.maximumParticleTimestep = i1297[3]
  return i1296
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1298 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1299 = data
  i1298.gravity = new pc.Vec3( i1299[0], i1299[1], i1299[2] )
  i1298.defaultSolverIterations = i1299[3]
  i1298.bounceThreshold = i1299[4]
  i1298.autoSyncTransforms = !!i1299[5]
  i1298.autoSimulation = !!i1299[6]
  var i1301 = i1299[7]
  var i1300 = []
  for(var i = 0; i < i1301.length; i += 1) {
    i1300.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1301[i + 0]) );
  }
  i1298.collisionMatrix = i1300
  return i1298
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1304 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1305 = data
  i1304.enabled = !!i1305[0]
  i1304.layerId = i1305[1]
  i1304.otherLayerId = i1305[2]
  return i1304
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1306 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1307 = data
  request.r(i1307[0], i1307[1], 0, i1306, 'material')
  i1306.gravity = new pc.Vec2( i1307[2], i1307[3] )
  i1306.positionIterations = i1307[4]
  i1306.velocityIterations = i1307[5]
  i1306.velocityThreshold = i1307[6]
  i1306.maxLinearCorrection = i1307[7]
  i1306.maxAngularCorrection = i1307[8]
  i1306.maxTranslationSpeed = i1307[9]
  i1306.maxRotationSpeed = i1307[10]
  i1306.baumgarteScale = i1307[11]
  i1306.baumgarteTOIScale = i1307[12]
  i1306.timeToSleep = i1307[13]
  i1306.linearSleepTolerance = i1307[14]
  i1306.angularSleepTolerance = i1307[15]
  i1306.defaultContactOffset = i1307[16]
  i1306.autoSimulation = !!i1307[17]
  i1306.queriesHitTriggers = !!i1307[18]
  i1306.queriesStartInColliders = !!i1307[19]
  i1306.callbacksOnDisable = !!i1307[20]
  i1306.reuseCollisionCallbacks = !!i1307[21]
  i1306.autoSyncTransforms = !!i1307[22]
  var i1309 = i1307[23]
  var i1308 = []
  for(var i = 0; i < i1309.length; i += 1) {
    i1308.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1309[i + 0]) );
  }
  i1306.collisionMatrix = i1308
  return i1306
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1312 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1313 = data
  i1312.enabled = !!i1313[0]
  i1312.layerId = i1313[1]
  i1312.otherLayerId = i1313[2]
  return i1312
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1315 = data
  var i1317 = i1315[0]
  var i1316 = []
  for(var i = 0; i < i1317.length; i += 1) {
    i1316.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1317[i + 0]) );
  }
  i1314.qualityLevels = i1316
  var i1319 = i1315[1]
  var i1318 = []
  for(var i = 0; i < i1319.length; i += 1) {
    i1318.push( i1319[i + 0] );
  }
  i1314.names = i1318
  i1314.shadows = i1315[2]
  i1314.anisotropicFiltering = i1315[3]
  i1314.antiAliasing = i1315[4]
  i1314.lodBias = i1315[5]
  i1314.shadowCascades = i1315[6]
  i1314.shadowDistance = i1315[7]
  i1314.shadowmaskMode = i1315[8]
  i1314.shadowProjection = i1315[9]
  i1314.shadowResolution = i1315[10]
  i1314.softParticles = !!i1315[11]
  i1314.softVegetation = !!i1315[12]
  i1314.activeColorSpace = i1315[13]
  i1314.desiredColorSpace = i1315[14]
  i1314.masterTextureLimit = i1315[15]
  i1314.maxQueuedFrames = i1315[16]
  i1314.particleRaycastBudget = i1315[17]
  i1314.pixelLightCount = i1315[18]
  i1314.realtimeReflectionProbes = !!i1315[19]
  i1314.shadowCascade2Split = i1315[20]
  i1314.shadowCascade4Split = new pc.Vec3( i1315[21], i1315[22], i1315[23] )
  i1314.streamingMipmapsActive = !!i1315[24]
  i1314.vSyncCount = i1315[25]
  i1314.asyncUploadBufferSize = i1315[26]
  i1314.asyncUploadTimeSlice = i1315[27]
  i1314.billboardsFaceCameraPosition = !!i1315[28]
  i1314.shadowNearPlaneOffset = i1315[29]
  i1314.streamingMipmapsMemoryBudget = i1315[30]
  i1314.maximumLODLevel = i1315[31]
  i1314.streamingMipmapsAddAllCameras = !!i1315[32]
  i1314.streamingMipmapsMaxLevelReduction = i1315[33]
  i1314.streamingMipmapsRenderersPerFrame = i1315[34]
  i1314.resolutionScalingFixedDPIFactor = i1315[35]
  i1314.streamingMipmapsMaxFileIORequests = i1315[36]
  i1314.currentQualityLevel = i1315[37]
  return i1314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1324 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1325 = data
  i1324.mode = i1325[0]
  i1324.parameter = i1325[1]
  i1324.threshold = i1325[2]
  return i1324
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1326 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1327 = data
  i1326.xPlacement = i1327[0]
  i1326.yPlacement = i1327[1]
  i1326.xAdvance = i1327[2]
  i1326.yAdvance = i1327[3]
  return i1326
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"frontSortingLayerID":0,"frontSortingOrder":1,"backSortingLayerID":2,"backSortingOrder":3,"alphaCutoff":4,"sprite":5,"tileMode":7,"isCustomRangeActive":8,"spriteSortPoint":9,"enabled":10,"sharedMaterial":11,"sharedMaterials":13,"receiveShadows":14,"shadowCastingMode":15,"sortingLayerID":16,"sortingOrder":17,"lightmapIndex":18,"lightmapSceneIndex":19,"lightmapScaleOffset":20,"lightProbeUsage":24,"reflectionProbeUsage":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"disableBatching":11,"compiled":12},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"64":[65],"66":[65],"67":[65],"68":[65],"69":[65],"70":[65],"71":[72],"73":[18],"74":[75],"76":[75],"77":[75],"78":[75],"79":[75],"80":[75],"81":[75],"82":[7],"83":[7],"84":[7],"85":[7],"86":[7],"87":[7],"88":[7],"89":[7],"90":[7],"91":[7],"92":[7],"93":[7],"94":[7],"95":[18],"96":[33],"97":[98],"99":[98],"27":[26],"100":[101],"102":[18],"103":[18],"104":[105],"106":[107],"108":[33,36],"109":[110],"111":[107],"112":[113],"114":[107],"115":[107],"116":[117],"118":[117],"119":[107],"120":[121],"122":[1],"123":[121],"124":[26],"125":[26],"29":[27],"31":[30,26],"126":[26],"28":[27],"127":[26],"128":[26],"129":[26],"130":[26],"131":[26],"132":[26],"133":[26],"134":[26],"135":[26],"136":[30,26],"137":[26],"138":[26],"139":[26],"52":[26],"140":[30,26],"141":[26],"142":[21],"143":[21],"22":[21],"144":[21],"145":[18],"146":[18],"147":[148],"149":[18],"150":[151],"152":[26],"153":[30,26],"34":[33],"110":[30,26],"154":[10,33],"107":[33],"155":[33,36],"156":[75],"157":[7],"158":[151],"159":[117],"160":[26],"161":[33,26],"40":[26,30],"162":[26],"163":[30,26],"164":[33],"165":[30,26],"166":[26],"167":[121]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Material","UnityEngine.MonoBehaviour","DragItem","UnityEngine.BoxCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Shader","Disk","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","Tray","UnityEngine.GameObject","Slot","UnityEngine.Texture2D","PackTarget","HandHint","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","TrayManager","UnityEngine.SpriteMask","ConveyorBelt","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","EndCart_Win","UnityEngine.MeshRenderer","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonDataAsset","UnityEngine.MeshFilter","Button","UnityEngine.UI.Button","GameManager","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","AudioManager","UnityEngine.AudioSource","UnityEngine.AudioClip","PackManager","ItemSlider","TutorialManager","CountdownTimer","ScalePopLoop","NotiBox","UnityEngine.CanvasGroup","UnityEngine.UI.Slider","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","EndCart_Lose","RotateLoop","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.Font","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","AutoFlip","Book","CameraAutoSize","CheckSize","Spine.Unity.Examples.BasicPlatformerController","UnityEngine.CharacterController","Spine.Unity.Examples.SkeletonGhost","Spine.Unity.SkeletonRenderer","Spine.Unity.Examples.RenderExistingMesh","Spine.Unity.Examples.SkeletonGraphicRenderTexture","Spine.Unity.SkeletonGraphic","Spine.Unity.Examples.SkeletonRenderTexture","Spine.Unity.Examples.SkeletonRenderTextureFadeout","Spine.Unity.Examples.SkeletonRenderTextureBase","Spine.Unity.Examples.SkeletonRagdoll","Spine.Unity.Examples.SkeletonRagdoll2D","Spine.Unity.Examples.SkeletonUtilityEyeConstraint","Spine.Unity.SkeletonUtilityBone","Spine.Unity.Examples.SkeletonUtilityGroundConstraint","Spine.Unity.Examples.SpineGauge","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonMecanim","Spine.Unity.SkeletonPartsRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.62f3";

Deserializers.productName = "Prj_Demo";

Deserializers.lunaInitializationTime = "12/18/2025 04:11:57";

Deserializers.lunaDaysRunning = "21.3";

Deserializers.lunaVersion = "6.4.0";

Deserializers.lunaSHA = "6639120529aa36186c6141b5c3fb20246c28bff0";

Deserializers.creativeName = "DoubleMatch";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1797";

Deserializers.runtimeAnalysisExcludedMethodsCount = "5474";

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

Deserializers.buildID = "9d2f4429-6b17-455d-bb70-11e79bf238d5";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

