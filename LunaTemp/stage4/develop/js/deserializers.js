var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i680 = root || request.c( 'UnityEngine.JointSpring' )
  var i681 = data
  i680.spring = i681[0]
  i680.damper = i681[1]
  i680.targetPosition = i681[2]
  return i680
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i682 = root || request.c( 'UnityEngine.JointMotor' )
  var i683 = data
  i682.m_TargetVelocity = i683[0]
  i682.m_Force = i683[1]
  i682.m_FreeSpin = i683[2]
  return i682
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i684 = root || request.c( 'UnityEngine.JointLimits' )
  var i685 = data
  i684.m_Min = i685[0]
  i684.m_Max = i685[1]
  i684.m_Bounciness = i685[2]
  i684.m_BounceMinVelocity = i685[3]
  i684.m_ContactDistance = i685[4]
  i684.minBounce = i685[5]
  i684.maxBounce = i685[6]
  return i684
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i686 = root || request.c( 'UnityEngine.JointDrive' )
  var i687 = data
  i686.m_PositionSpring = i687[0]
  i686.m_PositionDamper = i687[1]
  i686.m_MaximumForce = i687[2]
  i686.m_UseAcceleration = i687[3]
  return i686
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i688 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i689 = data
  i688.m_Spring = i689[0]
  i688.m_Damper = i689[1]
  return i688
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i690 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i691 = data
  i690.m_Limit = i691[0]
  i690.m_Bounciness = i691[1]
  i690.m_ContactDistance = i691[2]
  return i690
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i692 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i693 = data
  i692.m_ExtremumSlip = i693[0]
  i692.m_ExtremumValue = i693[1]
  i692.m_AsymptoteSlip = i693[2]
  i692.m_AsymptoteValue = i693[3]
  i692.m_Stiffness = i693[4]
  return i692
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i694 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i695 = data
  i694.m_LowerAngle = i695[0]
  i694.m_UpperAngle = i695[1]
  return i694
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i696 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i697 = data
  i696.m_MotorSpeed = i697[0]
  i696.m_MaximumMotorTorque = i697[1]
  return i696
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i698 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i699 = data
  i698.m_DampingRatio = i699[0]
  i698.m_Frequency = i699[1]
  i698.m_Angle = i699[2]
  return i698
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i700 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i701 = data
  i700.m_LowerTranslation = i701[0]
  i700.m_UpperTranslation = i701[1]
  return i700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i703 = data
  i702.position = new pc.Vec3( i703[0], i703[1], i703[2] )
  i702.scale = new pc.Vec3( i703[3], i703[4], i703[5] )
  i702.rotation = new pc.Quat(i703[6], i703[7], i703[8], i703[9])
  return i702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i705 = data
  i704.color = new pc.Color(i705[0], i705[1], i705[2], i705[3])
  request.r(i705[4], i705[5], 0, i704, 'sprite')
  i704.flipX = !!i705[6]
  i704.flipY = !!i705[7]
  i704.drawMode = i705[8]
  i704.size = new pc.Vec2( i705[9], i705[10] )
  i704.tileMode = i705[11]
  i704.adaptiveModeThreshold = i705[12]
  i704.maskInteraction = i705[13]
  i704.spriteSortPoint = i705[14]
  i704.enabled = !!i705[15]
  request.r(i705[16], i705[17], 0, i704, 'sharedMaterial')
  var i707 = i705[18]
  var i706 = []
  for(var i = 0; i < i707.length; i += 2) {
  request.r(i707[i + 0], i707[i + 1], 2, i706, '')
  }
  i704.sharedMaterials = i706
  i704.receiveShadows = !!i705[19]
  i704.shadowCastingMode = i705[20]
  i704.sortingLayerID = i705[21]
  i704.sortingOrder = i705[22]
  i704.lightmapIndex = i705[23]
  i704.lightmapSceneIndex = i705[24]
  i704.lightmapScaleOffset = new pc.Vec4( i705[25], i705[26], i705[27], i705[28] )
  i704.lightProbeUsage = i705[29]
  i704.reflectionProbeUsage = i705[30]
  return i704
}

Deserializers["DragItem"] = function (request, data, root) {
  var i710 = root || request.c( 'DragItem' )
  var i711 = data
  i710.focusOutlineSize = i711[0]
  i710.outlineTweenTime = i711[1]
  i710.itemType = i711[2]
  i710.isLockItem = !!i711[3]
  i710.onTimer = !!i711[4]
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i713 = data
  i712.usedByComposite = !!i713[0]
  i712.autoTiling = !!i713[1]
  i712.size = new pc.Vec2( i713[2], i713[3] )
  i712.edgeRadius = i713[4]
  i712.enabled = !!i713[5]
  i712.isTrigger = !!i713[6]
  i712.usedByEffector = !!i713[7]
  i712.density = i713[8]
  i712.offset = new pc.Vec2( i713[9], i713[10] )
  request.r(i713[11], i713[12], 0, i712, 'material')
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i715 = data
  i714.bodyType = i715[0]
  request.r(i715[1], i715[2], 0, i714, 'material')
  i714.simulated = !!i715[3]
  i714.useAutoMass = !!i715[4]
  i714.mass = i715[5]
  i714.drag = i715[6]
  i714.angularDrag = i715[7]
  i714.gravityScale = i715[8]
  i714.collisionDetectionMode = i715[9]
  i714.sleepMode = i715[10]
  i714.constraints = i715[11]
  return i714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i717 = data
  i716.name = i717[0]
  i716.tagId = i717[1]
  i716.enabled = !!i717[2]
  i716.isStatic = !!i717[3]
  i716.layer = i717[4]
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i718 = root || new pc.UnityMaterial()
  var i719 = data
  i718.name = i719[0]
  request.r(i719[1], i719[2], 0, i718, 'shader')
  i718.renderQueue = i719[3]
  i718.enableInstancing = !!i719[4]
  var i721 = i719[5]
  var i720 = []
  for(var i = 0; i < i721.length; i += 1) {
    i720.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i721[i + 0]) );
  }
  i718.floatParameters = i720
  var i723 = i719[6]
  var i722 = []
  for(var i = 0; i < i723.length; i += 1) {
    i722.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i723[i + 0]) );
  }
  i718.colorParameters = i722
  var i725 = i719[7]
  var i724 = []
  for(var i = 0; i < i725.length; i += 1) {
    i724.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i725[i + 0]) );
  }
  i718.vectorParameters = i724
  var i727 = i719[8]
  var i726 = []
  for(var i = 0; i < i727.length; i += 1) {
    i726.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i727[i + 0]) );
  }
  i718.textureParameters = i726
  var i729 = i719[9]
  var i728 = []
  for(var i = 0; i < i729.length; i += 1) {
    i728.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i729[i + 0]) );
  }
  i718.materialFlags = i728
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i733 = data
  i732.name = i733[0]
  i732.value = i733[1]
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i737 = data
  i736.name = i737[0]
  i736.value = new pc.Color(i737[1], i737[2], i737[3], i737[4])
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i741 = data
  i740.name = i741[0]
  i740.value = new pc.Vec4( i741[1], i741[2], i741[3], i741[4] )
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i745 = data
  i744.name = i745[0]
  request.r(i745[1], i745[2], 0, i744, 'value')
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i749 = data
  i748.name = i749[0]
  i748.enabled = !!i749[1]
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i751 = data
  i750.name = i751[0]
  i750.width = i751[1]
  i750.height = i751[2]
  i750.mipmapCount = i751[3]
  i750.anisoLevel = i751[4]
  i750.filterMode = i751[5]
  i750.hdr = !!i751[6]
  i750.format = i751[7]
  i750.wrapMode = i751[8]
  i750.alphaIsTransparency = !!i751[9]
  i750.alphaSource = i751[10]
  i750.graphicsFormat = i751[11]
  i750.sRGBTexture = !!i751[12]
  i750.desiredColorSpace = i751[13]
  i750.wrapU = i751[14]
  i750.wrapV = i751[15]
  return i750
}

Deserializers["Disk"] = function (request, data, root) {
  var i752 = root || request.c( 'Disk' )
  var i753 = data
  i752.requiredCount = i753[0]
  i752.moveDistance = i753[1]
  i752.moveTime = i753[2]
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i755 = data
  request.r(i755[0], i755[1], 0, i754, 'animatorController')
  request.r(i755[2], i755[3], 0, i754, 'avatar')
  i754.updateMode = i755[4]
  i754.hasTransformHierarchy = !!i755[5]
  i754.applyRootMotion = !!i755[6]
  var i757 = i755[7]
  var i756 = []
  for(var i = 0; i < i757.length; i += 2) {
  request.r(i757[i + 0], i757[i + 1], 2, i756, '')
  }
  i754.humanBones = i756
  i754.enabled = !!i755[8]
  return i754
}

Deserializers["Tray"] = function (request, data, root) {
  var i760 = root || request.c( 'Tray' )
  var i761 = data
  i760.spacing = i761[0]
  i760.moveTime = i761[1]
  request.r(i761[2], i761[3], 0, i760, 'diskPrefab')
  request.r(i761[4], i761[5], 0, i760, 'diskTransform')
  i760.shrinkTime = i761[6]
  i760.itemToDiskTime = i761[7]
  i760.attachDelay = i761[8]
  i760.followSmooth = i761[9]
  i760.isCompleted = !!i761[10]
  var i763 = i761[11]
  var i762 = []
  for(var i = 0; i < i763.length; i += 2) {
  request.r(i763[i + 0], i763[i + 1], 2, i762, '')
  }
  i760.slots = i762
  request.r(i761[12], i761[13], 0, i760, 'fireObject')
  i760.isSpecial = !!i761[14]
  i760.spacingItemCenter = i761[15]
  request.r(i761[16], i761[17], 0, i760, 'targetTransform')
  i760.diskItemScale = new pc.Vec3( i761[18], i761[19], i761[20] )
  return i760
}

Deserializers["Slot"] = function (request, data, root) {
  var i766 = root || request.c( 'Slot' )
  var i767 = data
  request.r(i767[0], i767[1], 0, i766, 'anchor')
  request.r(i767[2], i767[3], 0, i766, 'currentItem')
  i766.isLocked = !!i767[4]
  return i766
}

Deserializers["PackTarget"] = function (request, data, root) {
  var i768 = root || request.c( 'PackTarget' )
  var i769 = data
  i768.packType = i769[0]
  request.r(i769[1], i769[2], 0, i768, 'attachPoint')
  i768.slotIndex = i769[3]
  i768.capacity = i769[4]
  i768.currentCount = i769[5]
  i768.isFull = !!i769[6]
  request.r(i769[7], i769[8], 0, i768, 'sumText')
  request.r(i769[9], i769[10], 0, i768, 'packSprite')
  return i768
}

Deserializers["EndCart_Lose"] = function (request, data, root) {
  var i770 = root || request.c( 'EndCart_Lose' )
  var i771 = data
  request.r(i771[0], i771[1], 0, i770, 'actionButton')
  request.r(i771[2], i771[3], 0, i770, 'emoji')
  request.r(i771[4], i771[5], 0, i770, 'logo')
  request.r(i771[6], i771[7], 0, i770, 'icon')
  request.r(i771[8], i771[9], 0, i770, 'praticle')
  i770.buttonScaleTime = i771[10]
  i770.itemStartScale = i771[11]
  i770.itemPopScale = i771[12]
  i770.itemInTime = i771[13]
  i770.itemSettleTime = i771[14]
  i770.itemFinalScale = i771[15]
  i770.emojiFinalScale = i771[16]
  i770.otherItemFinalScale = i771[17]
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i773 = data
  i772.pivot = new pc.Vec2( i773[0], i773[1] )
  i772.anchorMin = new pc.Vec2( i773[2], i773[3] )
  i772.anchorMax = new pc.Vec2( i773[4], i773[5] )
  i772.sizeDelta = new pc.Vec2( i773[6], i773[7] )
  i772.anchoredPosition3D = new pc.Vec3( i773[8], i773[9], i773[10] )
  i772.rotation = new pc.Quat(i773[11], i773[12], i773[13], i773[14])
  i772.scale = new pc.Vec3( i773[15], i773[16], i773[17] )
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i775 = data
  i774.planeDistance = i775[0]
  i774.referencePixelsPerUnit = i775[1]
  i774.isFallbackOverlay = !!i775[2]
  i774.renderMode = i775[3]
  i774.renderOrder = i775[4]
  i774.sortingLayerName = i775[5]
  i774.sortingOrder = i775[6]
  i774.scaleFactor = i775[7]
  request.r(i775[8], i775[9], 0, i774, 'worldCamera')
  i774.overrideSorting = !!i775[10]
  i774.pixelPerfect = !!i775[11]
  i774.targetDisplay = i775[12]
  i774.overridePixelPerfect = !!i775[13]
  i774.enabled = !!i775[14]
  return i774
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i776 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i777 = data
  i776.m_UiScaleMode = i777[0]
  i776.m_ReferencePixelsPerUnit = i777[1]
  i776.m_ScaleFactor = i777[2]
  i776.m_ReferenceResolution = new pc.Vec2( i777[3], i777[4] )
  i776.m_ScreenMatchMode = i777[5]
  i776.m_MatchWidthOrHeight = i777[6]
  i776.m_PhysicalUnit = i777[7]
  i776.m_FallbackScreenDPI = i777[8]
  i776.m_DefaultSpriteDPI = i777[9]
  i776.m_DynamicPixelsPerUnit = i777[10]
  i776.m_PresetInfoIsWorld = !!i777[11]
  return i776
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i778 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i779 = data
  i778.m_IgnoreReversedGraphics = !!i779[0]
  i778.m_BlockingObjects = i779[1]
  i778.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i779[2] )
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i781 = data
  i780.cullTransparentMesh = !!i781[0]
  return i780
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i782 = root || request.c( 'UnityEngine.UI.Image' )
  var i783 = data
  request.r(i783[0], i783[1], 0, i782, 'm_Sprite')
  i782.m_Type = i783[2]
  i782.m_PreserveAspect = !!i783[3]
  i782.m_FillCenter = !!i783[4]
  i782.m_FillMethod = i783[5]
  i782.m_FillAmount = i783[6]
  i782.m_FillClockwise = !!i783[7]
  i782.m_FillOrigin = i783[8]
  i782.m_UseSpriteMesh = !!i783[9]
  i782.m_PixelsPerUnitMultiplier = i783[10]
  i782.m_Maskable = !!i783[11]
  request.r(i783[12], i783[13], 0, i782, 'm_Material')
  i782.m_Color = new pc.Color(i783[14], i783[15], i783[16], i783[17])
  i782.m_RaycastTarget = !!i783[18]
  i782.m_RaycastPadding = new pc.Vec4( i783[19], i783[20], i783[21], i783[22] )
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i785 = data
  i784.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i785[0], i784.main)
  i784.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i785[1], i784.colorBySpeed)
  i784.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i785[2], i784.colorOverLifetime)
  i784.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i785[3], i784.emission)
  i784.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i785[4], i784.rotationBySpeed)
  i784.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i785[5], i784.rotationOverLifetime)
  i784.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i785[6], i784.shape)
  i784.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i785[7], i784.sizeBySpeed)
  i784.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i785[8], i784.sizeOverLifetime)
  i784.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i785[9], i784.textureSheetAnimation)
  i784.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i785[10], i784.velocityOverLifetime)
  i784.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i785[11], i784.noise)
  i784.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i785[12], i784.inheritVelocity)
  i784.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i785[13], i784.forceOverLifetime)
  i784.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i785[14], i784.limitVelocityOverLifetime)
  i784.useAutoRandomSeed = !!i785[15]
  i784.randomSeed = i785[16]
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i786 = root || new pc.ParticleSystemMain()
  var i787 = data
  i786.duration = i787[0]
  i786.loop = !!i787[1]
  i786.prewarm = !!i787[2]
  i786.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i787[3], i786.startDelay)
  i786.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i787[4], i786.startLifetime)
  i786.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i787[5], i786.startSpeed)
  i786.startSize3D = !!i787[6]
  i786.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i787[7], i786.startSizeX)
  i786.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i787[8], i786.startSizeY)
  i786.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i787[9], i786.startSizeZ)
  i786.startRotation3D = !!i787[10]
  i786.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i787[11], i786.startRotationX)
  i786.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i787[12], i786.startRotationY)
  i786.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i787[13], i786.startRotationZ)
  i786.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i787[14], i786.startColor)
  i786.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i787[15], i786.gravityModifier)
  i786.simulationSpace = i787[16]
  request.r(i787[17], i787[18], 0, i786, 'customSimulationSpace')
  i786.simulationSpeed = i787[19]
  i786.useUnscaledTime = !!i787[20]
  i786.scalingMode = i787[21]
  i786.playOnAwake = !!i787[22]
  i786.maxParticles = i787[23]
  i786.emitterVelocityMode = i787[24]
  i786.stopAction = i787[25]
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i788 = root || new pc.MinMaxCurve()
  var i789 = data
  i788.mode = i789[0]
  i788.curveMin = new pc.AnimationCurve( { keys_flow: i789[1] } )
  i788.curveMax = new pc.AnimationCurve( { keys_flow: i789[2] } )
  i788.curveMultiplier = i789[3]
  i788.constantMin = i789[4]
  i788.constantMax = i789[5]
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i790 = root || new pc.MinMaxGradient()
  var i791 = data
  i790.mode = i791[0]
  i790.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i791[1], i790.gradientMin)
  i790.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i791[2], i790.gradientMax)
  i790.colorMin = new pc.Color(i791[3], i791[4], i791[5], i791[6])
  i790.colorMax = new pc.Color(i791[7], i791[8], i791[9], i791[10])
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i793 = data
  i792.mode = i793[0]
  var i795 = i793[1]
  var i794 = []
  for(var i = 0; i < i795.length; i += 1) {
    i794.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i795[i + 0]) );
  }
  i792.colorKeys = i794
  var i797 = i793[2]
  var i796 = []
  for(var i = 0; i < i797.length; i += 1) {
    i796.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i797[i + 0]) );
  }
  i792.alphaKeys = i796
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i801 = data
  i800.color = new pc.Color(i801[0], i801[1], i801[2], i801[3])
  i800.time = i801[4]
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i805 = data
  i804.alpha = i805[0]
  i804.time = i805[1]
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i806 = root || new pc.ParticleSystemColorBySpeed()
  var i807 = data
  i806.enabled = !!i807[0]
  i806.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i807[1], i806.color)
  i806.range = new pc.Vec2( i807[2], i807[3] )
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i808 = root || new pc.ParticleSystemColorOverLifetime()
  var i809 = data
  i808.enabled = !!i809[0]
  i808.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i809[1], i808.color)
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i810 = root || new pc.ParticleSystemEmitter()
  var i811 = data
  i810.enabled = !!i811[0]
  i810.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[1], i810.rateOverTime)
  i810.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[2], i810.rateOverDistance)
  var i813 = i811[3]
  var i812 = []
  for(var i = 0; i < i813.length; i += 1) {
    i812.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i813[i + 0]) );
  }
  i810.bursts = i812
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i816 = root || new pc.ParticleSystemBurst()
  var i817 = data
  i816.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[0], i816.count)
  i816.cycleCount = i817[1]
  i816.minCount = i817[2]
  i816.maxCount = i817[3]
  i816.repeatInterval = i817[4]
  i816.time = i817[5]
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i818 = root || new pc.ParticleSystemRotationBySpeed()
  var i819 = data
  i818.enabled = !!i819[0]
  i818.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[1], i818.x)
  i818.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[2], i818.y)
  i818.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[3], i818.z)
  i818.separateAxes = !!i819[4]
  i818.range = new pc.Vec2( i819[5], i819[6] )
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i820 = root || new pc.ParticleSystemRotationOverLifetime()
  var i821 = data
  i820.enabled = !!i821[0]
  i820.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i821[1], i820.x)
  i820.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i821[2], i820.y)
  i820.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i821[3], i820.z)
  i820.separateAxes = !!i821[4]
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i822 = root || new pc.ParticleSystemShape()
  var i823 = data
  i822.enabled = !!i823[0]
  i822.shapeType = i823[1]
  i822.randomDirectionAmount = i823[2]
  i822.sphericalDirectionAmount = i823[3]
  i822.randomPositionAmount = i823[4]
  i822.alignToDirection = !!i823[5]
  i822.radius = i823[6]
  i822.radiusMode = i823[7]
  i822.radiusSpread = i823[8]
  i822.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i823[9], i822.radiusSpeed)
  i822.radiusThickness = i823[10]
  i822.angle = i823[11]
  i822.length = i823[12]
  i822.boxThickness = new pc.Vec3( i823[13], i823[14], i823[15] )
  i822.meshShapeType = i823[16]
  request.r(i823[17], i823[18], 0, i822, 'mesh')
  request.r(i823[19], i823[20], 0, i822, 'meshRenderer')
  request.r(i823[21], i823[22], 0, i822, 'skinnedMeshRenderer')
  i822.useMeshMaterialIndex = !!i823[23]
  i822.meshMaterialIndex = i823[24]
  i822.useMeshColors = !!i823[25]
  i822.normalOffset = i823[26]
  i822.arc = i823[27]
  i822.arcMode = i823[28]
  i822.arcSpread = i823[29]
  i822.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i823[30], i822.arcSpeed)
  i822.donutRadius = i823[31]
  i822.position = new pc.Vec3( i823[32], i823[33], i823[34] )
  i822.rotation = new pc.Vec3( i823[35], i823[36], i823[37] )
  i822.scale = new pc.Vec3( i823[38], i823[39], i823[40] )
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i824 = root || new pc.ParticleSystemSizeBySpeed()
  var i825 = data
  i824.enabled = !!i825[0]
  i824.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i825[1], i824.x)
  i824.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i825[2], i824.y)
  i824.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i825[3], i824.z)
  i824.separateAxes = !!i825[4]
  i824.range = new pc.Vec2( i825[5], i825[6] )
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i826 = root || new pc.ParticleSystemSizeOverLifetime()
  var i827 = data
  i826.enabled = !!i827[0]
  i826.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[1], i826.x)
  i826.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[2], i826.y)
  i826.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[3], i826.z)
  i826.separateAxes = !!i827[4]
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i828 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i829 = data
  i828.enabled = !!i829[0]
  i828.mode = i829[1]
  i828.animation = i829[2]
  i828.numTilesX = i829[3]
  i828.numTilesY = i829[4]
  i828.useRandomRow = !!i829[5]
  i828.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i829[6], i828.frameOverTime)
  i828.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i829[7], i828.startFrame)
  i828.cycleCount = i829[8]
  i828.rowIndex = i829[9]
  i828.flipU = i829[10]
  i828.flipV = i829[11]
  i828.spriteCount = i829[12]
  var i831 = i829[13]
  var i830 = []
  for(var i = 0; i < i831.length; i += 2) {
  request.r(i831[i + 0], i831[i + 1], 2, i830, '')
  }
  i828.sprites = i830
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i834 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i835 = data
  i834.enabled = !!i835[0]
  i834.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i835[1], i834.x)
  i834.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i835[2], i834.y)
  i834.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i835[3], i834.z)
  i834.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i835[4], i834.radial)
  i834.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i835[5], i834.speedModifier)
  i834.space = i835[6]
  i834.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i835[7], i834.orbitalX)
  i834.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i835[8], i834.orbitalY)
  i834.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i835[9], i834.orbitalZ)
  i834.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i835[10], i834.orbitalOffsetX)
  i834.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i835[11], i834.orbitalOffsetY)
  i834.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i835[12], i834.orbitalOffsetZ)
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i836 = root || new pc.ParticleSystemNoise()
  var i837 = data
  i836.enabled = !!i837[0]
  i836.separateAxes = !!i837[1]
  i836.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i837[2], i836.strengthX)
  i836.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i837[3], i836.strengthY)
  i836.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i837[4], i836.strengthZ)
  i836.frequency = i837[5]
  i836.damping = !!i837[6]
  i836.octaveCount = i837[7]
  i836.octaveMultiplier = i837[8]
  i836.octaveScale = i837[9]
  i836.quality = i837[10]
  i836.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i837[11], i836.scrollSpeed)
  i836.scrollSpeedMultiplier = i837[12]
  i836.remapEnabled = !!i837[13]
  i836.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i837[14], i836.remapX)
  i836.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i837[15], i836.remapY)
  i836.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i837[16], i836.remapZ)
  i836.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i837[17], i836.positionAmount)
  i836.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i837[18], i836.rotationAmount)
  i836.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i837[19], i836.sizeAmount)
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i838 = root || new pc.ParticleSystemInheritVelocity()
  var i839 = data
  i838.enabled = !!i839[0]
  i838.mode = i839[1]
  i838.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i839[2], i838.curve)
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i840 = root || new pc.ParticleSystemForceOverLifetime()
  var i841 = data
  i840.enabled = !!i841[0]
  i840.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i841[1], i840.x)
  i840.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i841[2], i840.y)
  i840.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i841[3], i840.z)
  i840.space = i841[4]
  i840.randomized = !!i841[5]
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i842 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i843 = data
  i842.enabled = !!i843[0]
  i842.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i843[1], i842.limit)
  i842.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i843[2], i842.limitX)
  i842.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i843[3], i842.limitY)
  i842.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i843[4], i842.limitZ)
  i842.dampen = i843[5]
  i842.separateAxes = !!i843[6]
  i842.space = i843[7]
  i842.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i843[8], i842.drag)
  i842.multiplyDragByParticleSize = !!i843[9]
  i842.multiplyDragByParticleVelocity = !!i843[10]
  return i842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i845 = data
  request.r(i845[0], i845[1], 0, i844, 'mesh')
  i844.meshCount = i845[2]
  i844.activeVertexStreamsCount = i845[3]
  i844.alignment = i845[4]
  i844.renderMode = i845[5]
  i844.sortMode = i845[6]
  i844.lengthScale = i845[7]
  i844.velocityScale = i845[8]
  i844.cameraVelocityScale = i845[9]
  i844.normalDirection = i845[10]
  i844.sortingFudge = i845[11]
  i844.minParticleSize = i845[12]
  i844.maxParticleSize = i845[13]
  i844.pivot = new pc.Vec3( i845[14], i845[15], i845[16] )
  request.r(i845[17], i845[18], 0, i844, 'trailMaterial')
  i844.applyActiveColorSpace = !!i845[19]
  i844.enabled = !!i845[20]
  request.r(i845[21], i845[22], 0, i844, 'sharedMaterial')
  var i847 = i845[23]
  var i846 = []
  for(var i = 0; i < i847.length; i += 2) {
  request.r(i847[i + 0], i847[i + 1], 2, i846, '')
  }
  i844.sharedMaterials = i846
  i844.receiveShadows = !!i845[24]
  i844.shadowCastingMode = i845[25]
  i844.sortingLayerID = i845[26]
  i844.sortingOrder = i845[27]
  i844.lightmapIndex = i845[28]
  i844.lightmapSceneIndex = i845[29]
  i844.lightmapScaleOffset = new pc.Vec4( i845[30], i845[31], i845[32], i845[33] )
  i844.lightProbeUsage = i845[34]
  i844.reflectionProbeUsage = i845[35]
  return i844
}

Deserializers["Button"] = function (request, data, root) {
  var i848 = root || request.c( 'Button' )
  var i849 = data
  return i848
}

Deserializers["RotateLoop"] = function (request, data, root) {
  var i850 = root || request.c( 'RotateLoop' )
  var i851 = data
  i850.rotateSpeed = i851[0]
  return i850
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i852 = root || request.c( 'UnityEngine.UI.Button' )
  var i853 = data
  i852.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i853[0], i852.m_OnClick)
  i852.m_Navigation = request.d('UnityEngine.UI.Navigation', i853[1], i852.m_Navigation)
  i852.m_Transition = i853[2]
  i852.m_Colors = request.d('UnityEngine.UI.ColorBlock', i853[3], i852.m_Colors)
  i852.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i853[4], i852.m_SpriteState)
  i852.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i853[5], i852.m_AnimationTriggers)
  i852.m_Interactable = !!i853[6]
  request.r(i853[7], i853[8], 0, i852, 'm_TargetGraphic')
  return i852
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i854 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i855 = data
  i854.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i855[0], i854.m_PersistentCalls)
  return i854
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i856 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i857 = data
  var i859 = i857[0]
  var i858 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i859.length; i += 1) {
    i858.add(request.d('UnityEngine.Events.PersistentCall', i859[i + 0]));
  }
  i856.m_Calls = i858
  return i856
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i862 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i863 = data
  request.r(i863[0], i863[1], 0, i862, 'm_Target')
  i862.m_TargetAssemblyTypeName = i863[2]
  i862.m_MethodName = i863[3]
  i862.m_Mode = i863[4]
  i862.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i863[5], i862.m_Arguments)
  i862.m_CallState = i863[6]
  return i862
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i864 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i865 = data
  request.r(i865[0], i865[1], 0, i864, 'm_ObjectArgument')
  i864.m_ObjectArgumentAssemblyTypeName = i865[2]
  i864.m_IntArgument = i865[3]
  i864.m_FloatArgument = i865[4]
  i864.m_StringArgument = i865[5]
  i864.m_BoolArgument = !!i865[6]
  return i864
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i866 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i867 = data
  i866.m_Mode = i867[0]
  i866.m_WrapAround = !!i867[1]
  request.r(i867[2], i867[3], 0, i866, 'm_SelectOnUp')
  request.r(i867[4], i867[5], 0, i866, 'm_SelectOnDown')
  request.r(i867[6], i867[7], 0, i866, 'm_SelectOnLeft')
  request.r(i867[8], i867[9], 0, i866, 'm_SelectOnRight')
  return i866
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i868 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i869 = data
  i868.m_NormalColor = new pc.Color(i869[0], i869[1], i869[2], i869[3])
  i868.m_HighlightedColor = new pc.Color(i869[4], i869[5], i869[6], i869[7])
  i868.m_PressedColor = new pc.Color(i869[8], i869[9], i869[10], i869[11])
  i868.m_SelectedColor = new pc.Color(i869[12], i869[13], i869[14], i869[15])
  i868.m_DisabledColor = new pc.Color(i869[16], i869[17], i869[18], i869[19])
  i868.m_ColorMultiplier = i869[20]
  i868.m_FadeDuration = i869[21]
  return i868
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i870 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i871 = data
  request.r(i871[0], i871[1], 0, i870, 'm_HighlightedSprite')
  request.r(i871[2], i871[3], 0, i870, 'm_PressedSprite')
  request.r(i871[4], i871[5], 0, i870, 'm_SelectedSprite')
  request.r(i871[6], i871[7], 0, i870, 'm_DisabledSprite')
  return i870
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i872 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i873 = data
  i872.m_NormalTrigger = i873[0]
  i872.m_HighlightedTrigger = i873[1]
  i872.m_PressedTrigger = i873[2]
  i872.m_SelectedTrigger = i873[3]
  i872.m_DisabledTrigger = i873[4]
  return i872
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i874 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i875 = data
  i874.m_hasFontAssetChanged = !!i875[0]
  request.r(i875[1], i875[2], 0, i874, 'm_baseMaterial')
  i874.m_maskOffset = new pc.Vec4( i875[3], i875[4], i875[5], i875[6] )
  i874.m_text = i875[7]
  i874.m_isRightToLeft = !!i875[8]
  request.r(i875[9], i875[10], 0, i874, 'm_fontAsset')
  request.r(i875[11], i875[12], 0, i874, 'm_sharedMaterial')
  var i877 = i875[13]
  var i876 = []
  for(var i = 0; i < i877.length; i += 2) {
  request.r(i877[i + 0], i877[i + 1], 2, i876, '')
  }
  i874.m_fontSharedMaterials = i876
  request.r(i875[14], i875[15], 0, i874, 'm_fontMaterial')
  var i879 = i875[16]
  var i878 = []
  for(var i = 0; i < i879.length; i += 2) {
  request.r(i879[i + 0], i879[i + 1], 2, i878, '')
  }
  i874.m_fontMaterials = i878
  i874.m_fontColor32 = UnityEngine.Color32.ConstructColor(i875[17], i875[18], i875[19], i875[20])
  i874.m_fontColor = new pc.Color(i875[21], i875[22], i875[23], i875[24])
  i874.m_enableVertexGradient = !!i875[25]
  i874.m_colorMode = i875[26]
  i874.m_fontColorGradient = request.d('TMPro.VertexGradient', i875[27], i874.m_fontColorGradient)
  request.r(i875[28], i875[29], 0, i874, 'm_fontColorGradientPreset')
  request.r(i875[30], i875[31], 0, i874, 'm_spriteAsset')
  i874.m_tintAllSprites = !!i875[32]
  request.r(i875[33], i875[34], 0, i874, 'm_StyleSheet')
  i874.m_TextStyleHashCode = i875[35]
  i874.m_overrideHtmlColors = !!i875[36]
  i874.m_faceColor = UnityEngine.Color32.ConstructColor(i875[37], i875[38], i875[39], i875[40])
  i874.m_fontSize = i875[41]
  i874.m_fontSizeBase = i875[42]
  i874.m_fontWeight = i875[43]
  i874.m_enableAutoSizing = !!i875[44]
  i874.m_fontSizeMin = i875[45]
  i874.m_fontSizeMax = i875[46]
  i874.m_fontStyle = i875[47]
  i874.m_HorizontalAlignment = i875[48]
  i874.m_VerticalAlignment = i875[49]
  i874.m_textAlignment = i875[50]
  i874.m_characterSpacing = i875[51]
  i874.m_wordSpacing = i875[52]
  i874.m_lineSpacing = i875[53]
  i874.m_lineSpacingMax = i875[54]
  i874.m_paragraphSpacing = i875[55]
  i874.m_charWidthMaxAdj = i875[56]
  i874.m_enableWordWrapping = !!i875[57]
  i874.m_wordWrappingRatios = i875[58]
  i874.m_overflowMode = i875[59]
  request.r(i875[60], i875[61], 0, i874, 'm_linkedTextComponent')
  request.r(i875[62], i875[63], 0, i874, 'parentLinkedComponent')
  i874.m_enableKerning = !!i875[64]
  i874.m_enableExtraPadding = !!i875[65]
  i874.checkPaddingRequired = !!i875[66]
  i874.m_isRichText = !!i875[67]
  i874.m_parseCtrlCharacters = !!i875[68]
  i874.m_isOrthographic = !!i875[69]
  i874.m_isCullingEnabled = !!i875[70]
  i874.m_horizontalMapping = i875[71]
  i874.m_verticalMapping = i875[72]
  i874.m_uvLineOffset = i875[73]
  i874.m_geometrySortingOrder = i875[74]
  i874.m_IsTextObjectScaleStatic = !!i875[75]
  i874.m_VertexBufferAutoSizeReduction = !!i875[76]
  i874.m_useMaxVisibleDescender = !!i875[77]
  i874.m_pageToDisplay = i875[78]
  i874.m_margin = new pc.Vec4( i875[79], i875[80], i875[81], i875[82] )
  i874.m_isUsingLegacyAnimationComponent = !!i875[83]
  i874.m_isVolumetricText = !!i875[84]
  i874.m_Maskable = !!i875[85]
  request.r(i875[86], i875[87], 0, i874, 'm_Material')
  i874.m_Color = new pc.Color(i875[88], i875[89], i875[90], i875[91])
  i874.m_RaycastTarget = !!i875[92]
  i874.m_RaycastPadding = new pc.Vec4( i875[93], i875[94], i875[95], i875[96] )
  return i874
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i880 = root || request.c( 'TMPro.VertexGradient' )
  var i881 = data
  i880.topLeft = new pc.Color(i881[0], i881[1], i881[2], i881[3])
  i880.topRight = new pc.Color(i881[4], i881[5], i881[6], i881[7])
  i880.bottomLeft = new pc.Color(i881[8], i881[9], i881[10], i881[11])
  i880.bottomRight = new pc.Color(i881[12], i881[13], i881[14], i881[15])
  return i880
}

Deserializers["HandHint"] = function (request, data, root) {
  var i882 = root || request.c( 'HandHint' )
  var i883 = data
  request.r(i883[0], i883[1], 0, i882, 'previewRenderer')
  return i882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i885 = data
  i884.name = i885[0]
  i884.index = i885[1]
  i884.startup = !!i885[2]
  return i884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i887 = data
  i886.aspect = i887[0]
  i886.orthographic = !!i887[1]
  i886.orthographicSize = i887[2]
  i886.backgroundColor = new pc.Color(i887[3], i887[4], i887[5], i887[6])
  i886.nearClipPlane = i887[7]
  i886.farClipPlane = i887[8]
  i886.fieldOfView = i887[9]
  i886.depth = i887[10]
  i886.clearFlags = i887[11]
  i886.cullingMask = i887[12]
  i886.rect = i887[13]
  request.r(i887[14], i887[15], 0, i886, 'targetTexture')
  i886.usePhysicalProperties = !!i887[16]
  i886.focalLength = i887[17]
  i886.sensorSize = new pc.Vec2( i887[18], i887[19] )
  i886.lensShift = new pc.Vec2( i887[20], i887[21] )
  i886.gateFit = i887[22]
  i886.commandBufferCount = i887[23]
  i886.cameraType = i887[24]
  i886.enabled = !!i887[25]
  return i886
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i888 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i889 = data
  request.r(i889[0], i889[1], 0, i888, 'm_FirstSelected')
  i888.m_sendNavigationEvents = !!i889[2]
  i888.m_DragThreshold = i889[3]
  return i888
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i890 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i891 = data
  i890.m_HorizontalAxis = i891[0]
  i890.m_VerticalAxis = i891[1]
  i890.m_SubmitButton = i891[2]
  i890.m_CancelButton = i891[3]
  i890.m_InputActionsPerSecond = i891[4]
  i890.m_RepeatDelay = i891[5]
  i890.m_ForceModuleActive = !!i891[6]
  i890.m_SendPointerHoverToParent = !!i891[7]
  return i890
}

Deserializers["TrayManager"] = function (request, data, root) {
  var i892 = root || request.c( 'TrayManager' )
  var i893 = data
  i892.spacing = i893[0]
  i892.visibleCount = i893[1]
  i892.moveTime = i893[2]
  var i895 = i893[3]
  var i894 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i895.length; i += 2) {
  request.r(i895[i + 0], i895[i + 1], 1, i894, '')
  }
  i892.listTrayPrepare = i894
  var i897 = i893[4]
  var i896 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i897.length; i += 2) {
  request.r(i897[i + 0], i897[i + 1], 1, i896, '')
  }
  i892.listTrayValiable = i896
  request.r(i893[5], i893[6], 0, i892, 'levelConfig')
  i892.canCountIdle = !!i893[7]
  i892.spawnHeightMultiplier = i893[8]
  i892.isFirstTutorial = !!i893[9]
  i892.tutorialDelay = i893[10]
  i892.idleTimer = i893[11]
  i892.tutorialEnabled = !!i893[12]
  request.r(i893[13], i893[14], 0, i892, 'manualTray')
  request.r(i893[15], i893[16], 0, i892, 'manualItem')
  i892.justEndedInteract = !!i893[17]
  var i899 = i893[18]
  var i898 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i899.length; i += 2) {
  request.r(i899[i + 0], i899[i + 1], 1, i898, '')
  }
  i892.spriteLibrary = i898
  i892.step = i893[19]
  request.r(i893[20], i893[21], 0, i892, 'specialSpawnPoint')
  request.r(i893[22], i893[23], 0, i892, 'specialTray')
  i892.specialTrayScale = new pc.Vec3( i893[24], i893[25], i893[26] )
  i892.specialTrayLocalPos = new pc.Vec3( i893[27], i893[28], i893[29] )
  i892.startY = i893[30]
  return i892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i907 = data
  i906.frontSortingLayerID = i907[0]
  i906.frontSortingOrder = i907[1]
  i906.backSortingLayerID = i907[2]
  i906.backSortingOrder = i907[3]
  i906.alphaCutoff = i907[4]
  request.r(i907[5], i907[6], 0, i906, 'sprite')
  i906.tileMode = i907[7]
  i906.isCustomRangeActive = !!i907[8]
  i906.spriteSortPoint = i907[9]
  i906.enabled = !!i907[10]
  request.r(i907[11], i907[12], 0, i906, 'sharedMaterial')
  var i909 = i907[13]
  var i908 = []
  for(var i = 0; i < i909.length; i += 2) {
  request.r(i909[i + 0], i909[i + 1], 2, i908, '')
  }
  i906.sharedMaterials = i908
  i906.receiveShadows = !!i907[14]
  i906.shadowCastingMode = i907[15]
  i906.sortingLayerID = i907[16]
  i906.sortingOrder = i907[17]
  i906.lightmapIndex = i907[18]
  i906.lightmapSceneIndex = i907[19]
  i906.lightmapScaleOffset = new pc.Vec4( i907[20], i907[21], i907[22], i907[23] )
  i906.lightProbeUsage = i907[24]
  i906.reflectionProbeUsage = i907[25]
  return i906
}

Deserializers["ConveyorBelt"] = function (request, data, root) {
  var i910 = root || request.c( 'ConveyorBelt' )
  var i911 = data
  i910.speed = i911[0]
  i910.spacing = i911[1]
  i910.leftLimit = i911[2]
  i910.removeFirstCount = i911[3]
  return i910
}

Deserializers["EndCart_Win"] = function (request, data, root) {
  var i912 = root || request.c( 'EndCart_Win' )
  var i913 = data
  request.r(i913[0], i913[1], 0, i912, 'confettiLeft')
  request.r(i913[2], i913[3], 0, i912, 'confettiRight')
  request.r(i913[4], i913[5], 0, i912, 'winText')
  request.r(i913[6], i913[7], 0, i912, 'chest')
  request.r(i913[8], i913[9], 0, i912, 'button')
  i912.textDelay = i913[10]
  i912.chestDelay = i913[11]
  return i912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i915 = data
  request.r(i915[0], i915[1], 0, i914, 'additionalVertexStreams')
  i914.enabled = !!i915[2]
  request.r(i915[3], i915[4], 0, i914, 'sharedMaterial')
  var i917 = i915[5]
  var i916 = []
  for(var i = 0; i < i917.length; i += 2) {
  request.r(i917[i + 0], i917[i + 1], 2, i916, '')
  }
  i914.sharedMaterials = i916
  i914.receiveShadows = !!i915[6]
  i914.shadowCastingMode = i915[7]
  i914.sortingLayerID = i915[8]
  i914.sortingOrder = i915[9]
  i914.lightmapIndex = i915[10]
  i914.lightmapSceneIndex = i915[11]
  i914.lightmapScaleOffset = new pc.Vec4( i915[12], i915[13], i915[14], i915[15] )
  i914.lightProbeUsage = i915[16]
  i914.reflectionProbeUsage = i915[17]
  return i914
}

Deserializers["Spine.Unity.SkeletonAnimation"] = function (request, data, root) {
  var i918 = root || request.c( 'Spine.Unity.SkeletonAnimation' )
  var i919 = data
  i918.loop = !!i919[0]
  i918.timeScale = i919[1]
  request.r(i919[2], i919[3], 0, i918, 'skeletonDataAsset')
  i918.initialSkinName = i919[4]
  i918.fixPrefabOverrideViaMeshFilter = i919[5]
  i918.initialFlipX = !!i919[6]
  i918.initialFlipY = !!i919[7]
  i918.updateWhenInvisible = i919[8]
  i918.zSpacing = i919[9]
  i918.useClipping = !!i919[10]
  i918.immutableTriangles = !!i919[11]
  i918.pmaVertexColors = !!i919[12]
  i918.clearStateOnDisable = !!i919[13]
  i918.tintBlack = !!i919[14]
  i918.singleSubmesh = !!i919[15]
  i918.fixDrawOrder = !!i919[16]
  i918.addNormals = !!i919[17]
  i918.calculateTangents = !!i919[18]
  i918.maskInteraction = i919[19]
  i918.maskMaterials = request.d('Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials', i919[20], i918.maskMaterials)
  i918.disableRenderingOnOverride = !!i919[21]
  i918.updateTiming = i919[22]
  i918.unscaledTime = !!i919[23]
  i918._animationName = i919[24]
  var i921 = i919[25]
  var i920 = []
  for(var i = 0; i < i921.length; i += 1) {
    i920.push( i921[i + 0] );
  }
  i918.separatorSlotNames = i920
  i918.physicsPositionInheritanceFactor = new pc.Vec2( i919[26], i919[27] )
  i918.physicsRotationInheritanceFactor = i919[28]
  request.r(i919[29], i919[30], 0, i918, 'physicsMovementRelativeTo')
  return i918
}

Deserializers["Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials"] = function (request, data, root) {
  var i922 = root || request.c( 'Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials' )
  var i923 = data
  var i925 = i923[0]
  var i924 = []
  for(var i = 0; i < i925.length; i += 2) {
  request.r(i925[i + 0], i925[i + 1], 2, i924, '')
  }
  i922.materialsMaskDisabled = i924
  var i927 = i923[1]
  var i926 = []
  for(var i = 0; i < i927.length; i += 2) {
  request.r(i927[i + 0], i927[i + 1], 2, i926, '')
  }
  i922.materialsInsideMask = i926
  var i929 = i923[2]
  var i928 = []
  for(var i = 0; i < i929.length; i += 2) {
  request.r(i929[i + 0], i929[i + 1], 2, i928, '')
  }
  i922.materialsOutsideMask = i928
  return i922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i933 = data
  request.r(i933[0], i933[1], 0, i932, 'sharedMesh')
  return i932
}

Deserializers["AudioManager"] = function (request, data, root) {
  var i934 = root || request.c( 'AudioManager' )
  var i935 = data
  request.r(i935[0], i935[1], 0, i934, 'bgmSource')
  request.r(i935[2], i935[3], 0, i934, 'sfxSource')
  request.r(i935[4], i935[5], 0, i934, 'bgm')
  request.r(i935[6], i935[7], 0, i934, 'drag')
  request.r(i935[8], i935[9], 0, i934, 'drog')
  request.r(i935[10], i935[11], 0, i934, 'lose')
  request.r(i935[12], i935[13], 0, i934, 'pop')
  request.r(i935[14], i935[15], 0, i934, 'wood')
  request.r(i935[16], i935[17], 0, i934, 'win')
  request.r(i935[18], i935[19], 0, i934, 'warningTick')
  request.r(i935[20], i935[21], 0, i934, 'match')
  request.r(i935[22], i935[23], 0, i934, 'sake')
  request.r(i935[24], i935[25], 0, i934, 'excell')
  return i934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i937 = data
  request.r(i937[0], i937[1], 0, i936, 'clip')
  request.r(i937[2], i937[3], 0, i936, 'outputAudioMixerGroup')
  i936.playOnAwake = !!i937[4]
  i936.loop = !!i937[5]
  i936.time = i937[6]
  i936.volume = i937[7]
  i936.pitch = i937[8]
  i936.enabled = !!i937[9]
  return i936
}

Deserializers["GameManager"] = function (request, data, root) {
  var i938 = root || request.c( 'GameManager' )
  var i939 = data
  request.r(i939[0], i939[1], 0, i938, 'pointText')
  i938.point = i939[2]
  request.r(i939[3], i939[4], 0, i938, 'ECWin')
  i938.startTimer = !!i939[5]
  i938.ticketCount = i939[6]
  i938.isClickToLog = !!i939[7]
  i938.clicksToLog = i939[8]
  i938.isMatch = !!i939[9]
  i938.clickCount = i939[10]
  i938.isClick = !!i939[11]
  i938.finishGame = !!i939[12]
  i938.startGame = !!i939[13]
  i938.isCheckWin = !!i939[14]
  i938.isCheckLose = !!i939[15]
  i938.isClickStore = !!i939[16]
  return i938
}

Deserializers["PackManager"] = function (request, data, root) {
  var i940 = root || request.c( 'PackManager' )
  var i941 = data
  request.r(i941[0], i941[1], 0, i940, 'packRoot')
  var i943 = i941[2]
  var i942 = new (System.Collections.Generic.List$1(Bridge.ns('PackTarget')))
  for(var i = 0; i < i943.length; i += 2) {
  request.r(i943[i + 0], i943[i + 1], 1, i942, '')
  }
  i940.packPrefabs = i942
  var i945 = i941[3]
  var i944 = new (System.Collections.Generic.List$1(Bridge.ns('PackTarget')))
  for(var i = 0; i < i945.length; i += 2) {
  request.r(i945[i + 0], i945[i + 1], 1, i944, '')
  }
  i940.activePacks = i944
  var i947 = i941[4]
  var i946 = new (System.Collections.Generic.List$1(Bridge.ns('PackTarget')))
  for(var i = 0; i < i947.length; i += 2) {
  request.r(i947[i + 0], i947[i + 1], 1, i946, '')
  }
  i940.packs = i946
  request.r(i941[5], i941[6], 0, i940, 'redSlider')
  request.r(i941[7], i941[8], 0, i940, 'yellowSlider')
  request.r(i941[9], i941[10], 0, i940, 'greenSlider')
  var i949 = i941[11]
  var i948 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i949.length; i += 2) {
  request.r(i949[i + 0], i949[i + 1], 1, i948, '')
  }
  i940.packSprites = i948
  return i940
}

Deserializers["EndCardManager"] = function (request, data, root) {
  var i952 = root || request.c( 'EndCardManager' )
  var i953 = data
  request.r(i953[0], i953[1], 0, i952, 'winEC')
  request.r(i953[2], i953[3], 0, i952, 'loseEC')
  return i952
}

Deserializers["TutorialManager"] = function (request, data, root) {
  var i954 = root || request.c( 'TutorialManager' )
  var i955 = data
  request.r(i955[0], i955[1], 0, i954, 'handPrefab')
  return i954
}

Deserializers["CountdownTimer"] = function (request, data, root) {
  var i956 = root || request.c( 'CountdownTimer' )
  var i957 = data
  request.r(i957[0], i957[1], 0, i956, 'timerText')
  i956.startSeconds = i957[2]
  i956.warningTime = i957[3]
  i956.warningColor = new pc.Color(i957[4], i957[5], i957[6], i957[7])
  i956.pulseScale = i957[8]
  i956.pulseSpeed = i957[9]
  request.r(i957[10], i957[11], 0, i956, 'backgroundWarning')
  request.r(i957[12], i957[13], 0, i956, 'timeUpPanel')
  i956.hasStarted = !!i957[14]
  i956.bgMinAlpha = i957[15]
  i956.bgMaxAlpha = i957[16]
  i956.bgBlinkSpeed = i957[17]
  request.r(i957[18], i957[19], 0, i956, 'ECLose')
  i956.timerPA = i957[20]
  i956.isShowPA = !!i957[21]
  return i956
}

Deserializers["ScalePopLoop"] = function (request, data, root) {
  var i958 = root || request.c( 'ScalePopLoop' )
  var i959 = data
  i958.minScale = new pc.Vec3( i959[0], i959[1], i959[2] )
  i958.maxScale = new pc.Vec3( i959[3], i959[4], i959[5] )
  i958.duration = i959[6]
  i958.ease = i959[7]
  request.r(i959[8], i959[9], 0, i958, 'tut')
  return i958
}

Deserializers["NotiBox"] = function (request, data, root) {
  var i960 = root || request.c( 'NotiBox' )
  var i961 = data
  request.r(i961[0], i961[1], 0, i960, 'box')
  request.r(i961[2], i961[3], 0, i960, 'bg')
  i960.delay = i961[4]
  i960.animTime = i961[5]
  i960.isNotiBook = !!i961[6]
  request.r(i961[7], i961[8], 0, i960, 'tut')
  return i960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i963 = data
  i962.m_Alpha = i963[0]
  i962.m_Interactable = !!i963[1]
  i962.m_BlocksRaycasts = !!i963[2]
  i962.m_IgnoreParentGroups = !!i963[3]
  i962.enabled = !!i963[4]
  return i962
}

Deserializers["TextAgeScale"] = function (request, data, root) {
  var i964 = root || request.c( 'TextAgeScale' )
  var i965 = data
  request.r(i965[0], i965[1], 0, i964, 'textTransform')
  i964.speedScale = i965[2]
  i964.scaleAmount = i965[3]
  i964.scaleNughet = i965[4]
  i964.speedReturn = i965[5]
  return i964
}

Deserializers["UpdateTarget"] = function (request, data, root) {
  var i966 = root || request.c( 'UpdateTarget' )
  var i967 = data
  i966.targetType = i967[0]
  i966.maxTimer = i967[1]
  i966.countTimer = i967[2]
  request.r(i967[3], i967[4], 0, i966, 'ageText')
  i966.age = i967[5]
  i966.pointUp = i967[6]
  i966.pointDown = i967[7]
  return i966
}

Deserializers["TMPro.TextMeshPro"] = function (request, data, root) {
  var i968 = root || request.c( 'TMPro.TextMeshPro' )
  var i969 = data
  i968._SortingLayer = i969[0]
  i968._SortingLayerID = i969[1]
  i968._SortingOrder = i969[2]
  i968.m_hasFontAssetChanged = !!i969[3]
  request.r(i969[4], i969[5], 0, i968, 'm_renderer')
  i968.m_maskType = i969[6]
  i968.m_text = i969[7]
  i968.m_isRightToLeft = !!i969[8]
  request.r(i969[9], i969[10], 0, i968, 'm_fontAsset')
  request.r(i969[11], i969[12], 0, i968, 'm_sharedMaterial')
  var i971 = i969[13]
  var i970 = []
  for(var i = 0; i < i971.length; i += 2) {
  request.r(i971[i + 0], i971[i + 1], 2, i970, '')
  }
  i968.m_fontSharedMaterials = i970
  request.r(i969[14], i969[15], 0, i968, 'm_fontMaterial')
  var i973 = i969[16]
  var i972 = []
  for(var i = 0; i < i973.length; i += 2) {
  request.r(i973[i + 0], i973[i + 1], 2, i972, '')
  }
  i968.m_fontMaterials = i972
  i968.m_fontColor32 = UnityEngine.Color32.ConstructColor(i969[17], i969[18], i969[19], i969[20])
  i968.m_fontColor = new pc.Color(i969[21], i969[22], i969[23], i969[24])
  i968.m_enableVertexGradient = !!i969[25]
  i968.m_colorMode = i969[26]
  i968.m_fontColorGradient = request.d('TMPro.VertexGradient', i969[27], i968.m_fontColorGradient)
  request.r(i969[28], i969[29], 0, i968, 'm_fontColorGradientPreset')
  request.r(i969[30], i969[31], 0, i968, 'm_spriteAsset')
  i968.m_tintAllSprites = !!i969[32]
  request.r(i969[33], i969[34], 0, i968, 'm_StyleSheet')
  i968.m_TextStyleHashCode = i969[35]
  i968.m_overrideHtmlColors = !!i969[36]
  i968.m_faceColor = UnityEngine.Color32.ConstructColor(i969[37], i969[38], i969[39], i969[40])
  i968.m_fontSize = i969[41]
  i968.m_fontSizeBase = i969[42]
  i968.m_fontWeight = i969[43]
  i968.m_enableAutoSizing = !!i969[44]
  i968.m_fontSizeMin = i969[45]
  i968.m_fontSizeMax = i969[46]
  i968.m_fontStyle = i969[47]
  i968.m_HorizontalAlignment = i969[48]
  i968.m_VerticalAlignment = i969[49]
  i968.m_textAlignment = i969[50]
  i968.m_characterSpacing = i969[51]
  i968.m_wordSpacing = i969[52]
  i968.m_lineSpacing = i969[53]
  i968.m_lineSpacingMax = i969[54]
  i968.m_paragraphSpacing = i969[55]
  i968.m_charWidthMaxAdj = i969[56]
  i968.m_enableWordWrapping = !!i969[57]
  i968.m_wordWrappingRatios = i969[58]
  i968.m_overflowMode = i969[59]
  request.r(i969[60], i969[61], 0, i968, 'm_linkedTextComponent')
  request.r(i969[62], i969[63], 0, i968, 'parentLinkedComponent')
  i968.m_enableKerning = !!i969[64]
  i968.m_enableExtraPadding = !!i969[65]
  i968.checkPaddingRequired = !!i969[66]
  i968.m_isRichText = !!i969[67]
  i968.m_parseCtrlCharacters = !!i969[68]
  i968.m_isOrthographic = !!i969[69]
  i968.m_isCullingEnabled = !!i969[70]
  i968.m_horizontalMapping = i969[71]
  i968.m_verticalMapping = i969[72]
  i968.m_uvLineOffset = i969[73]
  i968.m_geometrySortingOrder = i969[74]
  i968.m_IsTextObjectScaleStatic = !!i969[75]
  i968.m_VertexBufferAutoSizeReduction = !!i969[76]
  i968.m_useMaxVisibleDescender = !!i969[77]
  i968.m_pageToDisplay = i969[78]
  i968.m_margin = new pc.Vec4( i969[79], i969[80], i969[81], i969[82] )
  i968.m_isUsingLegacyAnimationComponent = !!i969[83]
  i968.m_isVolumetricText = !!i969[84]
  i968.m_Maskable = !!i969[85]
  request.r(i969[86], i969[87], 0, i968, 'm_Material')
  i968.m_Color = new pc.Color(i969[88], i969[89], i969[90], i969[91])
  i968.m_RaycastTarget = !!i969[92]
  i968.m_RaycastPadding = new pc.Vec4( i969[93], i969[94], i969[95], i969[96] )
  return i968
}

Deserializers["MatchFlowManager"] = function (request, data, root) {
  var i974 = root || request.c( 'MatchFlowManager' )
  var i975 = data
  request.r(i975[0], i975[1], 0, i974, 'config')
  request.r(i975[2], i975[3], 0, i974, 'targetPosition')
  request.r(i975[4], i975[5], 0, i974, 'parkTarget')
  i974.moveTime = i975[6]
  i974.spacingItem = i975[7]
  request.r(i975[8], i975[9], 0, i974, 'textAgeTransform')
  request.r(i975[10], i975[11], 0, i974, 'lidPrefab')
  i974.closeTime = i975[12]
  return i974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i977 = data
  i976.ambientIntensity = i977[0]
  i976.reflectionIntensity = i977[1]
  i976.ambientMode = i977[2]
  i976.ambientLight = new pc.Color(i977[3], i977[4], i977[5], i977[6])
  i976.ambientSkyColor = new pc.Color(i977[7], i977[8], i977[9], i977[10])
  i976.ambientGroundColor = new pc.Color(i977[11], i977[12], i977[13], i977[14])
  i976.ambientEquatorColor = new pc.Color(i977[15], i977[16], i977[17], i977[18])
  i976.fogColor = new pc.Color(i977[19], i977[20], i977[21], i977[22])
  i976.fogEndDistance = i977[23]
  i976.fogStartDistance = i977[24]
  i976.fogDensity = i977[25]
  i976.fog = !!i977[26]
  request.r(i977[27], i977[28], 0, i976, 'skybox')
  i976.fogMode = i977[29]
  var i979 = i977[30]
  var i978 = []
  for(var i = 0; i < i979.length; i += 1) {
    i978.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i979[i + 0]) );
  }
  i976.lightmaps = i978
  i976.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i977[31], i976.lightProbes)
  i976.lightmapsMode = i977[32]
  i976.mixedBakeMode = i977[33]
  i976.environmentLightingMode = i977[34]
  i976.ambientProbe = new pc.SphericalHarmonicsL2(i977[35])
  i976.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i977[36])
  i976.useReferenceAmbientProbe = !!i977[37]
  request.r(i977[38], i977[39], 0, i976, 'customReflection')
  request.r(i977[40], i977[41], 0, i976, 'defaultReflection')
  i976.defaultReflectionMode = i977[42]
  i976.defaultReflectionResolution = i977[43]
  i976.sunLightObjectId = i977[44]
  i976.pixelLightCount = i977[45]
  i976.defaultReflectionHDR = !!i977[46]
  i976.hasLightDataAsset = !!i977[47]
  i976.hasManualGenerate = !!i977[48]
  return i976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i983 = data
  request.r(i983[0], i983[1], 0, i982, 'lightmapColor')
  request.r(i983[2], i983[3], 0, i982, 'lightmapDirection')
  return i982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i984 = root || new UnityEngine.LightProbes()
  var i985 = data
  return i984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i993 = data
  var i995 = i993[0]
  var i994 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i995.length; i += 1) {
    i994.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i995[i + 0]));
  }
  i992.ShaderCompilationErrors = i994
  i992.name = i993[1]
  i992.guid = i993[2]
  var i997 = i993[3]
  var i996 = []
  for(var i = 0; i < i997.length; i += 1) {
    i996.push( i997[i + 0] );
  }
  i992.shaderDefinedKeywords = i996
  var i999 = i993[4]
  var i998 = []
  for(var i = 0; i < i999.length; i += 1) {
    i998.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i999[i + 0]) );
  }
  i992.passes = i998
  var i1001 = i993[5]
  var i1000 = []
  for(var i = 0; i < i1001.length; i += 1) {
    i1000.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1001[i + 0]) );
  }
  i992.usePasses = i1000
  var i1003 = i993[6]
  var i1002 = []
  for(var i = 0; i < i1003.length; i += 1) {
    i1002.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1003[i + 0]) );
  }
  i992.defaultParameterValues = i1002
  request.r(i993[7], i993[8], 0, i992, 'unityFallbackShader')
  i992.readDepth = !!i993[9]
  i992.isCreatedByShaderGraph = !!i993[10]
  i992.disableBatching = !!i993[11]
  i992.compiled = !!i993[12]
  return i992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1007 = data
  i1006.shaderName = i1007[0]
  i1006.errorMessage = i1007[1]
  return i1006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1010 = root || new pc.UnityShaderPass()
  var i1011 = data
  i1010.id = i1011[0]
  i1010.subShaderIndex = i1011[1]
  i1010.name = i1011[2]
  i1010.passType = i1011[3]
  i1010.grabPassTextureName = i1011[4]
  i1010.usePass = !!i1011[5]
  i1010.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1011[6], i1010.zTest)
  i1010.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1011[7], i1010.zWrite)
  i1010.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1011[8], i1010.culling)
  i1010.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1011[9], i1010.blending)
  i1010.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1011[10], i1010.alphaBlending)
  i1010.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1011[11], i1010.colorWriteMask)
  i1010.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1011[12], i1010.offsetUnits)
  i1010.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1011[13], i1010.offsetFactor)
  i1010.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1011[14], i1010.stencilRef)
  i1010.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1011[15], i1010.stencilReadMask)
  i1010.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1011[16], i1010.stencilWriteMask)
  i1010.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1011[17], i1010.stencilOp)
  i1010.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1011[18], i1010.stencilOpFront)
  i1010.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1011[19], i1010.stencilOpBack)
  var i1013 = i1011[20]
  var i1012 = []
  for(var i = 0; i < i1013.length; i += 1) {
    i1012.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1013[i + 0]) );
  }
  i1010.tags = i1012
  var i1015 = i1011[21]
  var i1014 = []
  for(var i = 0; i < i1015.length; i += 1) {
    i1014.push( i1015[i + 0] );
  }
  i1010.passDefinedKeywords = i1014
  var i1017 = i1011[22]
  var i1016 = []
  for(var i = 0; i < i1017.length; i += 1) {
    i1016.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1017[i + 0]) );
  }
  i1010.passDefinedKeywordGroups = i1016
  var i1019 = i1011[23]
  var i1018 = []
  for(var i = 0; i < i1019.length; i += 1) {
    i1018.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1019[i + 0]) );
  }
  i1010.variants = i1018
  var i1021 = i1011[24]
  var i1020 = []
  for(var i = 0; i < i1021.length; i += 1) {
    i1020.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1021[i + 0]) );
  }
  i1010.excludedVariants = i1020
  i1010.hasDepthReader = !!i1011[25]
  return i1010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1023 = data
  i1022.val = i1023[0]
  i1022.name = i1023[1]
  return i1022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1025 = data
  i1024.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1025[0], i1024.src)
  i1024.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1025[1], i1024.dst)
  i1024.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1025[2], i1024.op)
  return i1024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1027 = data
  i1026.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1027[0], i1026.pass)
  i1026.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1027[1], i1026.fail)
  i1026.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1027[2], i1026.zFail)
  i1026.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1027[3], i1026.comp)
  return i1026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1031 = data
  i1030.name = i1031[0]
  i1030.value = i1031[1]
  return i1030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1035 = data
  var i1037 = i1035[0]
  var i1036 = []
  for(var i = 0; i < i1037.length; i += 1) {
    i1036.push( i1037[i + 0] );
  }
  i1034.keywords = i1036
  i1034.hasDiscard = !!i1035[1]
  return i1034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1040 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1041 = data
  i1040.passId = i1041[0]
  i1040.subShaderIndex = i1041[1]
  var i1043 = i1041[2]
  var i1042 = []
  for(var i = 0; i < i1043.length; i += 1) {
    i1042.push( i1043[i + 0] );
  }
  i1040.keywords = i1042
  i1040.vertexProgram = i1041[3]
  i1040.fragmentProgram = i1041[4]
  i1040.exportedForWebGl2 = !!i1041[5]
  i1040.readDepth = !!i1041[6]
  return i1040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1047 = data
  request.r(i1047[0], i1047[1], 0, i1046, 'shader')
  i1046.pass = i1047[2]
  return i1046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1051 = data
  i1050.name = i1051[0]
  i1050.type = i1051[1]
  i1050.value = new pc.Vec4( i1051[2], i1051[3], i1051[4], i1051[5] )
  i1050.textureValue = i1051[6]
  i1050.shaderPropertyFlag = i1051[7]
  return i1050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1053 = data
  i1052.name = i1053[0]
  request.r(i1053[1], i1053[2], 0, i1052, 'texture')
  i1052.aabb = i1053[3]
  i1052.vertices = i1053[4]
  i1052.triangles = i1053[5]
  i1052.textureRect = UnityEngine.Rect.MinMaxRect(i1053[6], i1053[7], i1053[8], i1053[9])
  i1052.packedRect = UnityEngine.Rect.MinMaxRect(i1053[10], i1053[11], i1053[12], i1053[13])
  i1052.border = new pc.Vec4( i1053[14], i1053[15], i1053[16], i1053[17] )
  i1052.transparency = i1053[18]
  i1052.bounds = i1053[19]
  i1052.pixelsPerUnit = i1053[20]
  i1052.textureWidth = i1053[21]
  i1052.textureHeight = i1053[22]
  i1052.nativeSize = new pc.Vec2( i1053[23], i1053[24] )
  i1052.pivot = new pc.Vec2( i1053[25], i1053[26] )
  i1052.textureRectOffset = new pc.Vec2( i1053[27], i1053[28] )
  return i1052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1055 = data
  i1054.name = i1055[0]
  return i1054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1057 = data
  i1056.name = i1057[0]
  i1056.wrapMode = i1057[1]
  i1056.isLooping = !!i1057[2]
  i1056.length = i1057[3]
  var i1059 = i1057[4]
  var i1058 = []
  for(var i = 0; i < i1059.length; i += 1) {
    i1058.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1059[i + 0]) );
  }
  i1056.curves = i1058
  var i1061 = i1057[5]
  var i1060 = []
  for(var i = 0; i < i1061.length; i += 1) {
    i1060.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1061[i + 0]) );
  }
  i1056.events = i1060
  i1056.halfPrecision = !!i1057[6]
  i1056._frameRate = i1057[7]
  i1056.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1057[8], i1056.localBounds)
  i1056.hasMuscleCurves = !!i1057[9]
  var i1063 = i1057[10]
  var i1062 = []
  for(var i = 0; i < i1063.length; i += 1) {
    i1062.push( i1063[i + 0] );
  }
  i1056.clipMuscleConstant = i1062
  i1056.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1057[11], i1056.clipBindingConstant)
  return i1056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1067 = data
  i1066.path = i1067[0]
  i1066.hash = i1067[1]
  i1066.componentType = i1067[2]
  i1066.property = i1067[3]
  i1066.keys = i1067[4]
  var i1069 = i1067[5]
  var i1068 = []
  for(var i = 0; i < i1069.length; i += 1) {
    i1068.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1069[i + 0]) );
  }
  i1066.objectReferenceKeys = i1068
  return i1066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1073 = data
  i1072.time = i1073[0]
  request.r(i1073[1], i1073[2], 0, i1072, 'value')
  return i1072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1077 = data
  i1076.functionName = i1077[0]
  i1076.floatParameter = i1077[1]
  i1076.intParameter = i1077[2]
  i1076.stringParameter = i1077[3]
  request.r(i1077[4], i1077[5], 0, i1076, 'objectReferenceParameter')
  i1076.time = i1077[6]
  return i1076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1079 = data
  i1078.center = new pc.Vec3( i1079[0], i1079[1], i1079[2] )
  i1078.extends = new pc.Vec3( i1079[3], i1079[4], i1079[5] )
  return i1078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1083 = data
  var i1085 = i1083[0]
  var i1084 = []
  for(var i = 0; i < i1085.length; i += 1) {
    i1084.push( i1085[i + 0] );
  }
  i1082.genericBindings = i1084
  var i1087 = i1083[1]
  var i1086 = []
  for(var i = 0; i < i1087.length; i += 1) {
    i1086.push( i1087[i + 0] );
  }
  i1082.pptrCurveMapping = i1086
  return i1082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1089 = data
  i1088.name = i1089[0]
  i1088.ascent = i1089[1]
  i1088.originalLineHeight = i1089[2]
  i1088.fontSize = i1089[3]
  var i1091 = i1089[4]
  var i1090 = []
  for(var i = 0; i < i1091.length; i += 1) {
    i1090.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1091[i + 0]) );
  }
  i1088.characterInfo = i1090
  request.r(i1089[5], i1089[6], 0, i1088, 'texture')
  i1088.originalFontSize = i1089[7]
  return i1088
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1095 = data
  i1094.index = i1095[0]
  i1094.advance = i1095[1]
  i1094.bearing = i1095[2]
  i1094.glyphWidth = i1095[3]
  i1094.glyphHeight = i1095[4]
  i1094.minX = i1095[5]
  i1094.maxX = i1095[6]
  i1094.minY = i1095[7]
  i1094.maxY = i1095[8]
  i1094.uvBottomLeftX = i1095[9]
  i1094.uvBottomLeftY = i1095[10]
  i1094.uvBottomRightX = i1095[11]
  i1094.uvBottomRightY = i1095[12]
  i1094.uvTopLeftX = i1095[13]
  i1094.uvTopLeftY = i1095[14]
  i1094.uvTopRightX = i1095[15]
  i1094.uvTopRightY = i1095[16]
  return i1094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1096 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1097 = data
  i1096.name = i1097[0]
  var i1099 = i1097[1]
  var i1098 = []
  for(var i = 0; i < i1099.length; i += 1) {
    i1098.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1099[i + 0]) );
  }
  i1096.layers = i1098
  var i1101 = i1097[2]
  var i1100 = []
  for(var i = 0; i < i1101.length; i += 1) {
    i1100.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1101[i + 0]) );
  }
  i1096.parameters = i1100
  i1096.animationClips = i1097[3]
  i1096.avatarUnsupported = i1097[4]
  return i1096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1104 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1105 = data
  i1104.name = i1105[0]
  i1104.defaultWeight = i1105[1]
  i1104.blendingMode = i1105[2]
  i1104.avatarMask = i1105[3]
  i1104.syncedLayerIndex = i1105[4]
  i1104.syncedLayerAffectsTiming = !!i1105[5]
  i1104.syncedLayers = i1105[6]
  i1104.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1105[7], i1104.stateMachine)
  return i1104
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1107 = data
  i1106.id = i1107[0]
  i1106.name = i1107[1]
  i1106.path = i1107[2]
  var i1109 = i1107[3]
  var i1108 = []
  for(var i = 0; i < i1109.length; i += 1) {
    i1108.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1109[i + 0]) );
  }
  i1106.states = i1108
  var i1111 = i1107[4]
  var i1110 = []
  for(var i = 0; i < i1111.length; i += 1) {
    i1110.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1111[i + 0]) );
  }
  i1106.machines = i1110
  var i1113 = i1107[5]
  var i1112 = []
  for(var i = 0; i < i1113.length; i += 1) {
    i1112.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1113[i + 0]) );
  }
  i1106.entryStateTransitions = i1112
  var i1115 = i1107[6]
  var i1114 = []
  for(var i = 0; i < i1115.length; i += 1) {
    i1114.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1115[i + 0]) );
  }
  i1106.exitStateTransitions = i1114
  var i1117 = i1107[7]
  var i1116 = []
  for(var i = 0; i < i1117.length; i += 1) {
    i1116.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1117[i + 0]) );
  }
  i1106.anyStateTransitions = i1116
  i1106.defaultStateId = i1107[8]
  return i1106
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1120 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1121 = data
  i1120.id = i1121[0]
  i1120.name = i1121[1]
  i1120.cycleOffset = i1121[2]
  i1120.cycleOffsetParameter = i1121[3]
  i1120.cycleOffsetParameterActive = !!i1121[4]
  i1120.mirror = !!i1121[5]
  i1120.mirrorParameter = i1121[6]
  i1120.mirrorParameterActive = !!i1121[7]
  i1120.motionId = i1121[8]
  i1120.nameHash = i1121[9]
  i1120.fullPathHash = i1121[10]
  i1120.speed = i1121[11]
  i1120.speedParameter = i1121[12]
  i1120.speedParameterActive = !!i1121[13]
  i1120.tag = i1121[14]
  i1120.tagHash = i1121[15]
  i1120.writeDefaultValues = !!i1121[16]
  var i1123 = i1121[17]
  var i1122 = []
  for(var i = 0; i < i1123.length; i += 2) {
  request.r(i1123[i + 0], i1123[i + 1], 2, i1122, '')
  }
  i1120.behaviours = i1122
  var i1125 = i1121[18]
  var i1124 = []
  for(var i = 0; i < i1125.length; i += 1) {
    i1124.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1125[i + 0]) );
  }
  i1120.transitions = i1124
  return i1120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1130 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1131 = data
  i1130.fullPath = i1131[0]
  i1130.canTransitionToSelf = !!i1131[1]
  i1130.duration = i1131[2]
  i1130.exitTime = i1131[3]
  i1130.hasExitTime = !!i1131[4]
  i1130.hasFixedDuration = !!i1131[5]
  i1130.interruptionSource = i1131[6]
  i1130.offset = i1131[7]
  i1130.orderedInterruption = !!i1131[8]
  i1130.destinationStateId = i1131[9]
  i1130.isExit = !!i1131[10]
  i1130.mute = !!i1131[11]
  i1130.solo = !!i1131[12]
  var i1133 = i1131[13]
  var i1132 = []
  for(var i = 0; i < i1133.length; i += 1) {
    i1132.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1133[i + 0]) );
  }
  i1130.conditions = i1132
  return i1130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1138 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1139 = data
  i1138.destinationStateId = i1139[0]
  i1138.isExit = !!i1139[1]
  i1138.mute = !!i1139[2]
  i1138.solo = !!i1139[3]
  var i1141 = i1139[4]
  var i1140 = []
  for(var i = 0; i < i1141.length; i += 1) {
    i1140.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1141[i + 0]) );
  }
  i1138.conditions = i1140
  return i1138
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1144 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1145 = data
  i1144.defaultBool = !!i1145[0]
  i1144.defaultFloat = i1145[1]
  i1144.defaultInt = i1145[2]
  i1144.name = i1145[3]
  i1144.nameHash = i1145[4]
  i1144.type = i1145[5]
  return i1144
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1147 = data
  i1146.name = i1147[0]
  i1146.bytes64 = i1147[1]
  i1146.data = i1147[2]
  return i1146
}

Deserializers["TrayConfig"] = function (request, data, root) {
  var i1148 = root || request.c( 'TrayConfig' )
  var i1149 = data
  i1148.layoutType = i1149[0]
  i1148.columnCount = i1149[1]
  i1148.spacingX = i1149[2]
  i1148.spacingY = i1149[3]
  i1148.firstTrayPosition = new pc.Vec3( i1149[4], i1149[5], i1149[6] )
  return i1148
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i1150 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i1151 = data
  var i1153 = i1151[0]
  var i1152 = []
  for(var i = 0; i < i1153.length; i += 2) {
  request.r(i1153[i + 0], i1153[i + 1], 2, i1152, '')
  }
  i1150.atlasAssets = i1152
  i1150.scale = i1151[1]
  request.r(i1151[2], i1151[3], 0, i1150, 'skeletonJSON')
  i1150.isUpgradingBlendModeMaterials = !!i1151[4]
  i1150.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i1151[5], i1150.blendModeMaterials)
  var i1155 = i1151[6]
  var i1154 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i1155.length; i += 2) {
  request.r(i1155[i + 0], i1155[i + 1], 1, i1154, '')
  }
  i1150.skeletonDataModifiers = i1154
  var i1157 = i1151[7]
  var i1156 = []
  for(var i = 0; i < i1157.length; i += 1) {
    i1156.push( i1157[i + 0] );
  }
  i1150.fromAnimation = i1156
  var i1159 = i1151[8]
  var i1158 = []
  for(var i = 0; i < i1159.length; i += 1) {
    i1158.push( i1159[i + 0] );
  }
  i1150.toAnimation = i1158
  i1150.duration = i1151[9]
  i1150.defaultMix = i1151[10]
  request.r(i1151[11], i1151[12], 0, i1150, 'controller')
  return i1150
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i1162 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i1163 = data
  i1162.applyAdditiveMaterial = !!i1163[0]
  var i1165 = i1163[1]
  var i1164 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1165.length; i += 1) {
    i1164.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1165[i + 0]));
  }
  i1162.additiveMaterials = i1164
  var i1167 = i1163[2]
  var i1166 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1167.length; i += 1) {
    i1166.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1167[i + 0]));
  }
  i1162.multiplyMaterials = i1166
  var i1169 = i1163[3]
  var i1168 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1169.length; i += 1) {
    i1168.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1169[i + 0]));
  }
  i1162.screenMaterials = i1168
  i1162.requiresBlendModeMaterials = !!i1163[4]
  return i1162
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i1172 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i1173 = data
  i1172.pageName = i1173[0]
  request.r(i1173[1], i1173[2], 0, i1172, 'material')
  return i1172
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i1176 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i1177 = data
  request.r(i1177[0], i1177[1], 0, i1176, 'atlasFile')
  var i1179 = i1177[2]
  var i1178 = []
  for(var i = 0; i < i1179.length; i += 2) {
  request.r(i1179[i + 0], i1179[i + 1], 2, i1178, '')
  }
  i1176.materials = i1178
  i1176.textureLoadingMode = i1177[3]
  request.r(i1177[4], i1177[5], 0, i1176, 'onDemandTextureLoader')
  return i1176
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1180 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1181 = data
  request.r(i1181[0], i1181[1], 0, i1180, 'atlas')
  i1180.normalStyle = i1181[2]
  i1180.normalSpacingOffset = i1181[3]
  i1180.boldStyle = i1181[4]
  i1180.boldSpacing = i1181[5]
  i1180.italicStyle = i1181[6]
  i1180.tabSize = i1181[7]
  i1180.hashCode = i1181[8]
  request.r(i1181[9], i1181[10], 0, i1180, 'material')
  i1180.materialHashCode = i1181[11]
  i1180.m_Version = i1181[12]
  i1180.m_SourceFontFileGUID = i1181[13]
  request.r(i1181[14], i1181[15], 0, i1180, 'm_SourceFontFile_EditorRef')
  request.r(i1181[16], i1181[17], 0, i1180, 'm_SourceFontFile')
  i1180.m_AtlasPopulationMode = i1181[18]
  i1180.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1181[19], i1180.m_FaceInfo)
  var i1183 = i1181[20]
  var i1182 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1183.length; i += 1) {
    i1182.add(request.d('UnityEngine.TextCore.Glyph', i1183[i + 0]));
  }
  i1180.m_GlyphTable = i1182
  var i1185 = i1181[21]
  var i1184 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1185.length; i += 1) {
    i1184.add(request.d('TMPro.TMP_Character', i1185[i + 0]));
  }
  i1180.m_CharacterTable = i1184
  var i1187 = i1181[22]
  var i1186 = []
  for(var i = 0; i < i1187.length; i += 2) {
  request.r(i1187[i + 0], i1187[i + 1], 2, i1186, '')
  }
  i1180.m_AtlasTextures = i1186
  i1180.m_AtlasTextureIndex = i1181[23]
  i1180.m_IsMultiAtlasTexturesEnabled = !!i1181[24]
  i1180.m_ClearDynamicDataOnBuild = !!i1181[25]
  var i1189 = i1181[26]
  var i1188 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1189.length; i += 1) {
    i1188.add(request.d('UnityEngine.TextCore.GlyphRect', i1189[i + 0]));
  }
  i1180.m_UsedGlyphRects = i1188
  var i1191 = i1181[27]
  var i1190 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1191.length; i += 1) {
    i1190.add(request.d('UnityEngine.TextCore.GlyphRect', i1191[i + 0]));
  }
  i1180.m_FreeGlyphRects = i1190
  i1180.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1181[28], i1180.m_fontInfo)
  i1180.m_AtlasWidth = i1181[29]
  i1180.m_AtlasHeight = i1181[30]
  i1180.m_AtlasPadding = i1181[31]
  i1180.m_AtlasRenderMode = i1181[32]
  var i1193 = i1181[33]
  var i1192 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1193.length; i += 1) {
    i1192.add(request.d('TMPro.TMP_Glyph', i1193[i + 0]));
  }
  i1180.m_glyphInfoList = i1192
  i1180.m_KerningTable = request.d('TMPro.KerningTable', i1181[34], i1180.m_KerningTable)
  i1180.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1181[35], i1180.m_FontFeatureTable)
  var i1195 = i1181[36]
  var i1194 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1195.length; i += 2) {
  request.r(i1195[i + 0], i1195[i + 1], 1, i1194, '')
  }
  i1180.fallbackFontAssets = i1194
  var i1197 = i1181[37]
  var i1196 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1197.length; i += 2) {
  request.r(i1197[i + 0], i1197[i + 1], 1, i1196, '')
  }
  i1180.m_FallbackFontAssetTable = i1196
  i1180.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1181[38], i1180.m_CreationSettings)
  var i1199 = i1181[39]
  var i1198 = []
  for(var i = 0; i < i1199.length; i += 1) {
    i1198.push( request.d('TMPro.TMP_FontWeightPair', i1199[i + 0]) );
  }
  i1180.m_FontWeightTable = i1198
  var i1201 = i1181[40]
  var i1200 = []
  for(var i = 0; i < i1201.length; i += 1) {
    i1200.push( request.d('TMPro.TMP_FontWeightPair', i1201[i + 0]) );
  }
  i1180.fontWeights = i1200
  return i1180
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1202 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1203 = data
  i1202.m_FaceIndex = i1203[0]
  i1202.m_FamilyName = i1203[1]
  i1202.m_StyleName = i1203[2]
  i1202.m_PointSize = i1203[3]
  i1202.m_Scale = i1203[4]
  i1202.m_UnitsPerEM = i1203[5]
  i1202.m_LineHeight = i1203[6]
  i1202.m_AscentLine = i1203[7]
  i1202.m_CapLine = i1203[8]
  i1202.m_MeanLine = i1203[9]
  i1202.m_Baseline = i1203[10]
  i1202.m_DescentLine = i1203[11]
  i1202.m_SuperscriptOffset = i1203[12]
  i1202.m_SuperscriptSize = i1203[13]
  i1202.m_SubscriptOffset = i1203[14]
  i1202.m_SubscriptSize = i1203[15]
  i1202.m_UnderlineOffset = i1203[16]
  i1202.m_UnderlineThickness = i1203[17]
  i1202.m_StrikethroughOffset = i1203[18]
  i1202.m_StrikethroughThickness = i1203[19]
  i1202.m_TabWidth = i1203[20]
  return i1202
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1206 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1207 = data
  i1206.m_Index = i1207[0]
  i1206.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1207[1], i1206.m_Metrics)
  i1206.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1207[2], i1206.m_GlyphRect)
  i1206.m_Scale = i1207[3]
  i1206.m_AtlasIndex = i1207[4]
  i1206.m_ClassDefinitionType = i1207[5]
  return i1206
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1208 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1209 = data
  i1208.m_Width = i1209[0]
  i1208.m_Height = i1209[1]
  i1208.m_HorizontalBearingX = i1209[2]
  i1208.m_HorizontalBearingY = i1209[3]
  i1208.m_HorizontalAdvance = i1209[4]
  return i1208
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1210 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1211 = data
  i1210.m_X = i1211[0]
  i1210.m_Y = i1211[1]
  i1210.m_Width = i1211[2]
  i1210.m_Height = i1211[3]
  return i1210
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1214 = root || request.c( 'TMPro.TMP_Character' )
  var i1215 = data
  i1214.m_ElementType = i1215[0]
  i1214.m_Unicode = i1215[1]
  i1214.m_GlyphIndex = i1215[2]
  i1214.m_Scale = i1215[3]
  return i1214
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1220 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1221 = data
  i1220.Name = i1221[0]
  i1220.PointSize = i1221[1]
  i1220.Scale = i1221[2]
  i1220.CharacterCount = i1221[3]
  i1220.LineHeight = i1221[4]
  i1220.Baseline = i1221[5]
  i1220.Ascender = i1221[6]
  i1220.CapHeight = i1221[7]
  i1220.Descender = i1221[8]
  i1220.CenterLine = i1221[9]
  i1220.SuperscriptOffset = i1221[10]
  i1220.SubscriptOffset = i1221[11]
  i1220.SubSize = i1221[12]
  i1220.Underline = i1221[13]
  i1220.UnderlineThickness = i1221[14]
  i1220.strikethrough = i1221[15]
  i1220.strikethroughThickness = i1221[16]
  i1220.TabWidth = i1221[17]
  i1220.Padding = i1221[18]
  i1220.AtlasWidth = i1221[19]
  i1220.AtlasHeight = i1221[20]
  return i1220
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1224 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1225 = data
  i1224.id = i1225[0]
  i1224.x = i1225[1]
  i1224.y = i1225[2]
  i1224.width = i1225[3]
  i1224.height = i1225[4]
  i1224.xOffset = i1225[5]
  i1224.yOffset = i1225[6]
  i1224.xAdvance = i1225[7]
  i1224.scale = i1225[8]
  return i1224
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1226 = root || request.c( 'TMPro.KerningTable' )
  var i1227 = data
  var i1229 = i1227[0]
  var i1228 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1229.length; i += 1) {
    i1228.add(request.d('TMPro.KerningPair', i1229[i + 0]));
  }
  i1226.kerningPairs = i1228
  return i1226
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1232 = root || request.c( 'TMPro.KerningPair' )
  var i1233 = data
  i1232.xOffset = i1233[0]
  i1232.m_FirstGlyph = i1233[1]
  i1232.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1233[2], i1232.m_FirstGlyphAdjustments)
  i1232.m_SecondGlyph = i1233[3]
  i1232.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1233[4], i1232.m_SecondGlyphAdjustments)
  i1232.m_IgnoreSpacingAdjustments = !!i1233[5]
  return i1232
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1234 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1235 = data
  var i1237 = i1235[0]
  var i1236 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1237.length; i += 1) {
    i1236.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1237[i + 0]));
  }
  i1234.m_GlyphPairAdjustmentRecords = i1236
  return i1234
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1240 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1241 = data
  i1240.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1241[0], i1240.m_FirstAdjustmentRecord)
  i1240.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1241[1], i1240.m_SecondAdjustmentRecord)
  i1240.m_FeatureLookupFlags = i1241[2]
  return i1240
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1244 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1245 = data
  i1244.sourceFontFileName = i1245[0]
  i1244.sourceFontFileGUID = i1245[1]
  i1244.pointSizeSamplingMode = i1245[2]
  i1244.pointSize = i1245[3]
  i1244.padding = i1245[4]
  i1244.packingMode = i1245[5]
  i1244.atlasWidth = i1245[6]
  i1244.atlasHeight = i1245[7]
  i1244.characterSetSelectionMode = i1245[8]
  i1244.characterSequence = i1245[9]
  i1244.referencedFontAssetGUID = i1245[10]
  i1244.referencedTextAssetGUID = i1245[11]
  i1244.fontStyle = i1245[12]
  i1244.fontStyleModifier = i1245[13]
  i1244.renderMode = i1245[14]
  i1244.includeFontFeatures = !!i1245[15]
  return i1244
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1248 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1249 = data
  request.r(i1249[0], i1249[1], 0, i1248, 'regularTypeface')
  request.r(i1249[2], i1249[3], 0, i1248, 'italicTypeface')
  return i1248
}

Deserializers["MatchConfig"] = function (request, data, root) {
  var i1250 = root || request.c( 'MatchConfig' )
  var i1251 = data
  i1250.useFire = !!i1251[0]
  request.r(i1251[1], i1251[2], 0, i1250, 'firePrefab')
  i1250.useBlink = !!i1251[3]
  i1250.useGather = !!i1251[4]
  i1250.useFlyToTarget = !!i1251[5]
  i1250.useCloseBox = !!i1251[6]
  i1250.flyType = i1251[7]
  return i1250
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1252 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1253 = data
  i1252.useSafeMode = !!i1253[0]
  i1252.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1253[1], i1252.safeModeOptions)
  i1252.timeScale = i1253[2]
  i1252.unscaledTimeScale = i1253[3]
  i1252.useSmoothDeltaTime = !!i1253[4]
  i1252.maxSmoothUnscaledTime = i1253[5]
  i1252.rewindCallbackMode = i1253[6]
  i1252.showUnityEditorReport = !!i1253[7]
  i1252.logBehaviour = i1253[8]
  i1252.drawGizmos = !!i1253[9]
  i1252.defaultRecyclable = !!i1253[10]
  i1252.defaultAutoPlay = i1253[11]
  i1252.defaultUpdateType = i1253[12]
  i1252.defaultTimeScaleIndependent = !!i1253[13]
  i1252.defaultEaseType = i1253[14]
  i1252.defaultEaseOvershootOrAmplitude = i1253[15]
  i1252.defaultEasePeriod = i1253[16]
  i1252.defaultAutoKill = !!i1253[17]
  i1252.defaultLoopType = i1253[18]
  i1252.debugMode = !!i1253[19]
  i1252.debugStoreTargetId = !!i1253[20]
  i1252.showPreviewPanel = !!i1253[21]
  i1252.storeSettingsLocation = i1253[22]
  i1252.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1253[23], i1252.modules)
  i1252.createASMDEF = !!i1253[24]
  i1252.showPlayingTweens = !!i1253[25]
  i1252.showPausedTweens = !!i1253[26]
  return i1252
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1254 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1255 = data
  i1254.logBehaviour = i1255[0]
  i1254.nestedTweenFailureBehaviour = i1255[1]
  return i1254
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1256 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1257 = data
  i1256.showPanel = !!i1257[0]
  i1256.audioEnabled = !!i1257[1]
  i1256.physicsEnabled = !!i1257[2]
  i1256.physics2DEnabled = !!i1257[3]
  i1256.spriteEnabled = !!i1257[4]
  i1256.uiEnabled = !!i1257[5]
  i1256.textMeshProEnabled = !!i1257[6]
  i1256.tk2DEnabled = !!i1257[7]
  i1256.deAudioEnabled = !!i1257[8]
  i1256.deUnityExtendedEnabled = !!i1257[9]
  i1256.epoOutlineEnabled = !!i1257[10]
  return i1256
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1258 = root || request.c( 'TMPro.TMP_Settings' )
  var i1259 = data
  i1258.m_enableWordWrapping = !!i1259[0]
  i1258.m_enableKerning = !!i1259[1]
  i1258.m_enableExtraPadding = !!i1259[2]
  i1258.m_enableTintAllSprites = !!i1259[3]
  i1258.m_enableParseEscapeCharacters = !!i1259[4]
  i1258.m_EnableRaycastTarget = !!i1259[5]
  i1258.m_GetFontFeaturesAtRuntime = !!i1259[6]
  i1258.m_missingGlyphCharacter = i1259[7]
  i1258.m_warningsDisabled = !!i1259[8]
  request.r(i1259[9], i1259[10], 0, i1258, 'm_defaultFontAsset')
  i1258.m_defaultFontAssetPath = i1259[11]
  i1258.m_defaultFontSize = i1259[12]
  i1258.m_defaultAutoSizeMinRatio = i1259[13]
  i1258.m_defaultAutoSizeMaxRatio = i1259[14]
  i1258.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1259[15], i1259[16] )
  i1258.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1259[17], i1259[18] )
  i1258.m_autoSizeTextContainer = !!i1259[19]
  i1258.m_IsTextObjectScaleStatic = !!i1259[20]
  var i1261 = i1259[21]
  var i1260 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1261.length; i += 2) {
  request.r(i1261[i + 0], i1261[i + 1], 1, i1260, '')
  }
  i1258.m_fallbackFontAssets = i1260
  i1258.m_matchMaterialPreset = !!i1259[22]
  request.r(i1259[23], i1259[24], 0, i1258, 'm_defaultSpriteAsset')
  i1258.m_defaultSpriteAssetPath = i1259[25]
  i1258.m_enableEmojiSupport = !!i1259[26]
  i1258.m_MissingCharacterSpriteUnicode = i1259[27]
  i1258.m_defaultColorGradientPresetsPath = i1259[28]
  request.r(i1259[29], i1259[30], 0, i1258, 'm_defaultStyleSheet')
  i1258.m_StyleSheetsResourcePath = i1259[31]
  request.r(i1259[32], i1259[33], 0, i1258, 'm_leadingCharacters')
  request.r(i1259[34], i1259[35], 0, i1258, 'm_followingCharacters')
  i1258.m_UseModernHangulLineBreakingRules = !!i1259[36]
  return i1258
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1262 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1263 = data
  i1262.m_GlyphIndex = i1263[0]
  i1262.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1263[1], i1262.m_GlyphValueRecord)
  return i1262
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1264 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1265 = data
  i1264.m_XPlacement = i1265[0]
  i1264.m_YPlacement = i1265[1]
  i1264.m_XAdvance = i1265[2]
  i1264.m_YAdvance = i1265[3]
  return i1264
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1266 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1267 = data
  request.r(i1267[0], i1267[1], 0, i1266, 'spriteSheet')
  var i1269 = i1267[2]
  var i1268 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1269.length; i += 1) {
    i1268.add(request.d('TMPro.TMP_Sprite', i1269[i + 0]));
  }
  i1266.spriteInfoList = i1268
  var i1271 = i1267[3]
  var i1270 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1271.length; i += 2) {
  request.r(i1271[i + 0], i1271[i + 1], 1, i1270, '')
  }
  i1266.fallbackSpriteAssets = i1270
  i1266.hashCode = i1267[4]
  request.r(i1267[5], i1267[6], 0, i1266, 'material')
  i1266.materialHashCode = i1267[7]
  i1266.m_Version = i1267[8]
  i1266.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1267[9], i1266.m_FaceInfo)
  var i1273 = i1267[10]
  var i1272 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1273.length; i += 1) {
    i1272.add(request.d('TMPro.TMP_SpriteCharacter', i1273[i + 0]));
  }
  i1266.m_SpriteCharacterTable = i1272
  var i1275 = i1267[11]
  var i1274 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1275.length; i += 1) {
    i1274.add(request.d('TMPro.TMP_SpriteGlyph', i1275[i + 0]));
  }
  i1266.m_SpriteGlyphTable = i1274
  return i1266
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1278 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1279 = data
  i1278.name = i1279[0]
  i1278.hashCode = i1279[1]
  i1278.unicode = i1279[2]
  i1278.pivot = new pc.Vec2( i1279[3], i1279[4] )
  request.r(i1279[5], i1279[6], 0, i1278, 'sprite')
  i1278.id = i1279[7]
  i1278.x = i1279[8]
  i1278.y = i1279[9]
  i1278.width = i1279[10]
  i1278.height = i1279[11]
  i1278.xOffset = i1279[12]
  i1278.yOffset = i1279[13]
  i1278.xAdvance = i1279[14]
  i1278.scale = i1279[15]
  return i1278
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1284 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1285 = data
  i1284.m_Name = i1285[0]
  i1284.m_HashCode = i1285[1]
  i1284.m_ElementType = i1285[2]
  i1284.m_Unicode = i1285[3]
  i1284.m_GlyphIndex = i1285[4]
  i1284.m_Scale = i1285[5]
  return i1284
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1288 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1289 = data
  request.r(i1289[0], i1289[1], 0, i1288, 'sprite')
  i1288.m_Index = i1289[2]
  i1288.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1289[3], i1288.m_Metrics)
  i1288.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1289[4], i1288.m_GlyphRect)
  i1288.m_Scale = i1289[5]
  i1288.m_AtlasIndex = i1289[6]
  i1288.m_ClassDefinitionType = i1289[7]
  return i1288
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1290 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1291 = data
  var i1293 = i1291[0]
  var i1292 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1293.length; i += 1) {
    i1292.add(request.d('TMPro.TMP_Style', i1293[i + 0]));
  }
  i1290.m_StyleList = i1292
  return i1290
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1296 = root || request.c( 'TMPro.TMP_Style' )
  var i1297 = data
  i1296.m_Name = i1297[0]
  i1296.m_HashCode = i1297[1]
  i1296.m_OpeningDefinition = i1297[2]
  i1296.m_ClosingDefinition = i1297[3]
  i1296.m_OpeningTagArray = i1297[4]
  i1296.m_ClosingTagArray = i1297[5]
  i1296.m_OpeningTagUnicodeArray = i1297[6]
  i1296.m_ClosingTagUnicodeArray = i1297[7]
  return i1296
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1298 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1299 = data
  var i1301 = i1299[0]
  var i1300 = []
  for(var i = 0; i < i1301.length; i += 1) {
    i1300.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1301[i + 0]) );
  }
  i1298.files = i1300
  i1298.componentToPrefabIds = i1299[1]
  return i1298
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1304 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1305 = data
  i1304.path = i1305[0]
  request.r(i1305[1], i1305[2], 0, i1304, 'unityObject')
  return i1304
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1306 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1307 = data
  var i1309 = i1307[0]
  var i1308 = []
  for(var i = 0; i < i1309.length; i += 1) {
    i1308.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1309[i + 0]) );
  }
  i1306.scriptsExecutionOrder = i1308
  var i1311 = i1307[1]
  var i1310 = []
  for(var i = 0; i < i1311.length; i += 1) {
    i1310.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1311[i + 0]) );
  }
  i1306.sortingLayers = i1310
  var i1313 = i1307[2]
  var i1312 = []
  for(var i = 0; i < i1313.length; i += 1) {
    i1312.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1313[i + 0]) );
  }
  i1306.cullingLayers = i1312
  i1306.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1307[3], i1306.timeSettings)
  i1306.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1307[4], i1306.physicsSettings)
  i1306.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1307[5], i1306.physics2DSettings)
  i1306.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1307[6], i1306.qualitySettings)
  i1306.enableRealtimeShadows = !!i1307[7]
  i1306.enableAutoInstancing = !!i1307[8]
  i1306.enableStaticBatching = !!i1307[9]
  i1306.enableDynamicBatching = !!i1307[10]
  i1306.lightmapEncodingQuality = i1307[11]
  i1306.desiredColorSpace = i1307[12]
  var i1315 = i1307[13]
  var i1314 = []
  for(var i = 0; i < i1315.length; i += 1) {
    i1314.push( i1315[i + 0] );
  }
  i1306.allTags = i1314
  return i1306
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1318 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1319 = data
  i1318.name = i1319[0]
  i1318.value = i1319[1]
  return i1318
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1322 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1323 = data
  i1322.id = i1323[0]
  i1322.name = i1323[1]
  i1322.value = i1323[2]
  return i1322
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1326 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1327 = data
  i1326.id = i1327[0]
  i1326.name = i1327[1]
  return i1326
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1328 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1329 = data
  i1328.fixedDeltaTime = i1329[0]
  i1328.maximumDeltaTime = i1329[1]
  i1328.timeScale = i1329[2]
  i1328.maximumParticleTimestep = i1329[3]
  return i1328
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1331 = data
  i1330.gravity = new pc.Vec3( i1331[0], i1331[1], i1331[2] )
  i1330.defaultSolverIterations = i1331[3]
  i1330.bounceThreshold = i1331[4]
  i1330.autoSyncTransforms = !!i1331[5]
  i1330.autoSimulation = !!i1331[6]
  var i1333 = i1331[7]
  var i1332 = []
  for(var i = 0; i < i1333.length; i += 1) {
    i1332.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1333[i + 0]) );
  }
  i1330.collisionMatrix = i1332
  return i1330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1336 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1337 = data
  i1336.enabled = !!i1337[0]
  i1336.layerId = i1337[1]
  i1336.otherLayerId = i1337[2]
  return i1336
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1339 = data
  request.r(i1339[0], i1339[1], 0, i1338, 'material')
  i1338.gravity = new pc.Vec2( i1339[2], i1339[3] )
  i1338.positionIterations = i1339[4]
  i1338.velocityIterations = i1339[5]
  i1338.velocityThreshold = i1339[6]
  i1338.maxLinearCorrection = i1339[7]
  i1338.maxAngularCorrection = i1339[8]
  i1338.maxTranslationSpeed = i1339[9]
  i1338.maxRotationSpeed = i1339[10]
  i1338.baumgarteScale = i1339[11]
  i1338.baumgarteTOIScale = i1339[12]
  i1338.timeToSleep = i1339[13]
  i1338.linearSleepTolerance = i1339[14]
  i1338.angularSleepTolerance = i1339[15]
  i1338.defaultContactOffset = i1339[16]
  i1338.autoSimulation = !!i1339[17]
  i1338.queriesHitTriggers = !!i1339[18]
  i1338.queriesStartInColliders = !!i1339[19]
  i1338.callbacksOnDisable = !!i1339[20]
  i1338.reuseCollisionCallbacks = !!i1339[21]
  i1338.autoSyncTransforms = !!i1339[22]
  var i1341 = i1339[23]
  var i1340 = []
  for(var i = 0; i < i1341.length; i += 1) {
    i1340.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1341[i + 0]) );
  }
  i1338.collisionMatrix = i1340
  return i1338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1345 = data
  i1344.enabled = !!i1345[0]
  i1344.layerId = i1345[1]
  i1344.otherLayerId = i1345[2]
  return i1344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1346 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1347 = data
  var i1349 = i1347[0]
  var i1348 = []
  for(var i = 0; i < i1349.length; i += 1) {
    i1348.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1349[i + 0]) );
  }
  i1346.qualityLevels = i1348
  var i1351 = i1347[1]
  var i1350 = []
  for(var i = 0; i < i1351.length; i += 1) {
    i1350.push( i1351[i + 0] );
  }
  i1346.names = i1350
  i1346.shadows = i1347[2]
  i1346.anisotropicFiltering = i1347[3]
  i1346.antiAliasing = i1347[4]
  i1346.lodBias = i1347[5]
  i1346.shadowCascades = i1347[6]
  i1346.shadowDistance = i1347[7]
  i1346.shadowmaskMode = i1347[8]
  i1346.shadowProjection = i1347[9]
  i1346.shadowResolution = i1347[10]
  i1346.softParticles = !!i1347[11]
  i1346.softVegetation = !!i1347[12]
  i1346.activeColorSpace = i1347[13]
  i1346.desiredColorSpace = i1347[14]
  i1346.masterTextureLimit = i1347[15]
  i1346.maxQueuedFrames = i1347[16]
  i1346.particleRaycastBudget = i1347[17]
  i1346.pixelLightCount = i1347[18]
  i1346.realtimeReflectionProbes = !!i1347[19]
  i1346.shadowCascade2Split = i1347[20]
  i1346.shadowCascade4Split = new pc.Vec3( i1347[21], i1347[22], i1347[23] )
  i1346.streamingMipmapsActive = !!i1347[24]
  i1346.vSyncCount = i1347[25]
  i1346.asyncUploadBufferSize = i1347[26]
  i1346.asyncUploadTimeSlice = i1347[27]
  i1346.billboardsFaceCameraPosition = !!i1347[28]
  i1346.shadowNearPlaneOffset = i1347[29]
  i1346.streamingMipmapsMemoryBudget = i1347[30]
  i1346.maximumLODLevel = i1347[31]
  i1346.streamingMipmapsAddAllCameras = !!i1347[32]
  i1346.streamingMipmapsMaxLevelReduction = i1347[33]
  i1346.streamingMipmapsRenderersPerFrame = i1347[34]
  i1346.resolutionScalingFixedDPIFactor = i1347[35]
  i1346.streamingMipmapsMaxFileIORequests = i1347[36]
  i1346.currentQualityLevel = i1347[37]
  return i1346
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1356 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1357 = data
  i1356.mode = i1357[0]
  i1356.parameter = i1357[1]
  i1356.threshold = i1357[2]
  return i1356
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1358 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1359 = data
  i1358.xPlacement = i1359[0]
  i1358.yPlacement = i1359[1]
  i1358.xAdvance = i1359[2]
  i1358.yAdvance = i1359[3]
  return i1358
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"frontSortingLayerID":0,"frontSortingOrder":1,"backSortingLayerID":2,"backSortingOrder":3,"alphaCutoff":4,"sprite":5,"tileMode":7,"isCustomRangeActive":8,"spriteSortPoint":9,"enabled":10,"sharedMaterial":11,"sharedMaterials":13,"receiveShadows":14,"shadowCastingMode":15,"sortingLayerID":16,"sortingOrder":17,"lightmapIndex":18,"lightmapSceneIndex":19,"lightmapScaleOffset":20,"lightProbeUsage":24,"reflectionProbeUsage":25},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"disableBatching":11,"compiled":12},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"69":[70],"71":[70],"72":[70],"73":[70],"74":[70],"75":[70],"76":[77],"78":[33],"79":[80],"81":[80],"82":[80],"83":[80],"84":[80],"85":[80],"86":[80],"87":[7],"88":[7],"89":[7],"90":[7],"91":[7],"92":[7],"93":[7],"94":[7],"95":[7],"96":[7],"97":[7],"98":[7],"99":[7],"100":[33],"101":[42],"102":[103],"104":[103],"19":[18],"105":[106],"107":[33],"108":[33],"109":[18],"110":[111],"112":[113],"114":[42,45],"115":[116],"117":[113],"118":[119],"120":[113],"121":[113],"122":[123],"124":[123],"125":[113],"126":[127],"128":[1],"129":[127],"130":[18],"131":[18],"22":[19],"24":[23,18],"132":[18],"21":[19],"133":[18],"134":[18],"135":[18],"136":[18],"137":[18],"138":[18],"139":[18],"140":[18],"141":[18],"142":[23,18],"143":[18],"144":[18],"145":[18],"146":[18],"147":[23,18],"148":[18],"149":[35],"150":[35],"36":[35],"151":[35],"152":[33],"153":[33],"154":[155],"156":[33],"157":[158],"159":[18],"160":[23,18],"43":[42],"116":[23,18],"161":[11,42],"113":[42],"162":[42,45],"163":[80],"164":[7],"165":[158],"166":[123],"167":[18],"59":[42,18],"30":[18,23],"168":[18],"169":[23,18],"170":[42],"171":[23,18],"172":[18],"173":[127]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Material","UnityEngine.MonoBehaviour","DragItem","UnityEngine.BoxCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Shader","UnityEngine.Texture2D","Disk","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","Tray","UnityEngine.GameObject","Slot","PackTarget","EndCart_Lose","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","Button","RotateLoop","UnityEngine.UI.Button","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","HandHint","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","TrayManager","TrayConfig","UnityEngine.SpriteMask","ConveyorBelt","EndCart_Win","UnityEngine.MeshRenderer","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonDataAsset","UnityEngine.MeshFilter","GameManager","AudioManager","UnityEngine.AudioSource","UnityEngine.AudioClip","PackManager","EndCardManager","TutorialManager","CountdownTimer","ScalePopLoop","NotiBox","UnityEngine.CanvasGroup","TextAgeScale","UpdateTarget","TMPro.TextMeshPro","MatchFlowManager","MatchConfig","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.Font","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","AutoFlip","Book","CameraAutoSize","CheckSize","UIRangeSliderNamespace.UIRangeSlider","Spine.Unity.Examples.BasicPlatformerController","UnityEngine.CharacterController","Spine.Unity.Examples.SkeletonGhost","Spine.Unity.SkeletonRenderer","Spine.Unity.Examples.RenderExistingMesh","Spine.Unity.Examples.SkeletonGraphicRenderTexture","Spine.Unity.SkeletonGraphic","Spine.Unity.Examples.SkeletonRenderTexture","Spine.Unity.Examples.SkeletonRenderTextureFadeout","Spine.Unity.Examples.SkeletonRenderTextureBase","Spine.Unity.Examples.SkeletonRagdoll","Spine.Unity.Examples.SkeletonRagdoll2D","Spine.Unity.Examples.SkeletonUtilityEyeConstraint","Spine.Unity.SkeletonUtilityBone","Spine.Unity.Examples.SkeletonUtilityGroundConstraint","Spine.Unity.Examples.SpineGauge","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonMecanim","Spine.Unity.SkeletonPartsRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","TMPro.TextContainer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.62f3";

Deserializers.productName = "Prj_Demo";

Deserializers.lunaInitializationTime = "12/18/2025 04:11:57";

Deserializers.lunaDaysRunning = "26.1";

Deserializers.lunaVersion = "6.4.0";

Deserializers.lunaSHA = "6639120529aa36186c6141b5c3fb20246c28bff0";

Deserializers.creativeName = "BrainAge";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1818";

Deserializers.runtimeAnalysisExcludedMethodsCount = "5553";

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

Deserializers.buildID = "6c296d17-0afc-45d9-9ff4-260b76d6394f";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

