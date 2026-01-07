var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i558 = root || request.c( 'UnityEngine.JointSpring' )
  var i559 = data
  i558.spring = i559[0]
  i558.damper = i559[1]
  i558.targetPosition = i559[2]
  return i558
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i560 = root || request.c( 'UnityEngine.JointMotor' )
  var i561 = data
  i560.m_TargetVelocity = i561[0]
  i560.m_Force = i561[1]
  i560.m_FreeSpin = i561[2]
  return i560
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i562 = root || request.c( 'UnityEngine.JointLimits' )
  var i563 = data
  i562.m_Min = i563[0]
  i562.m_Max = i563[1]
  i562.m_Bounciness = i563[2]
  i562.m_BounceMinVelocity = i563[3]
  i562.m_ContactDistance = i563[4]
  i562.minBounce = i563[5]
  i562.maxBounce = i563[6]
  return i562
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i564 = root || request.c( 'UnityEngine.JointDrive' )
  var i565 = data
  i564.m_PositionSpring = i565[0]
  i564.m_PositionDamper = i565[1]
  i564.m_MaximumForce = i565[2]
  i564.m_UseAcceleration = i565[3]
  return i564
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i566 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i567 = data
  i566.m_Spring = i567[0]
  i566.m_Damper = i567[1]
  return i566
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i568 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i569 = data
  i568.m_Limit = i569[0]
  i568.m_Bounciness = i569[1]
  i568.m_ContactDistance = i569[2]
  return i568
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i570 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i571 = data
  i570.m_ExtremumSlip = i571[0]
  i570.m_ExtremumValue = i571[1]
  i570.m_AsymptoteSlip = i571[2]
  i570.m_AsymptoteValue = i571[3]
  i570.m_Stiffness = i571[4]
  return i570
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i572 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i573 = data
  i572.m_LowerAngle = i573[0]
  i572.m_UpperAngle = i573[1]
  return i572
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i574 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i575 = data
  i574.m_MotorSpeed = i575[0]
  i574.m_MaximumMotorTorque = i575[1]
  return i574
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i576 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i577 = data
  i576.m_DampingRatio = i577[0]
  i576.m_Frequency = i577[1]
  i576.m_Angle = i577[2]
  return i576
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i578 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i579 = data
  i578.m_LowerTranslation = i579[0]
  i578.m_UpperTranslation = i579[1]
  return i578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i581 = data
  i580.position = new pc.Vec3( i581[0], i581[1], i581[2] )
  i580.scale = new pc.Vec3( i581[3], i581[4], i581[5] )
  i580.rotation = new pc.Quat(i581[6], i581[7], i581[8], i581[9])
  return i580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i583 = data
  i582.color = new pc.Color(i583[0], i583[1], i583[2], i583[3])
  request.r(i583[4], i583[5], 0, i582, 'sprite')
  i582.flipX = !!i583[6]
  i582.flipY = !!i583[7]
  i582.drawMode = i583[8]
  i582.size = new pc.Vec2( i583[9], i583[10] )
  i582.tileMode = i583[11]
  i582.adaptiveModeThreshold = i583[12]
  i582.maskInteraction = i583[13]
  i582.spriteSortPoint = i583[14]
  i582.enabled = !!i583[15]
  request.r(i583[16], i583[17], 0, i582, 'sharedMaterial')
  var i585 = i583[18]
  var i584 = []
  for(var i = 0; i < i585.length; i += 2) {
  request.r(i585[i + 0], i585[i + 1], 2, i584, '')
  }
  i582.sharedMaterials = i584
  i582.receiveShadows = !!i583[19]
  i582.shadowCastingMode = i583[20]
  i582.sortingLayerID = i583[21]
  i582.sortingOrder = i583[22]
  i582.lightmapIndex = i583[23]
  i582.lightmapSceneIndex = i583[24]
  i582.lightmapScaleOffset = new pc.Vec4( i583[25], i583[26], i583[27], i583[28] )
  i582.lightProbeUsage = i583[29]
  i582.reflectionProbeUsage = i583[30]
  return i582
}

Deserializers["DragItem"] = function (request, data, root) {
  var i588 = root || request.c( 'DragItem' )
  var i589 = data
  i588.focusOutlineSize = i589[0]
  i588.outlineTweenTime = i589[1]
  i588.itemType = i589[2]
  i588.lockItem = !!i589[3]
  return i588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i591 = data
  i590.usedByComposite = !!i591[0]
  i590.autoTiling = !!i591[1]
  i590.size = new pc.Vec2( i591[2], i591[3] )
  i590.edgeRadius = i591[4]
  i590.enabled = !!i591[5]
  i590.isTrigger = !!i591[6]
  i590.usedByEffector = !!i591[7]
  i590.density = i591[8]
  i590.offset = new pc.Vec2( i591[9], i591[10] )
  request.r(i591[11], i591[12], 0, i590, 'material')
  return i590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i593 = data
  i592.bodyType = i593[0]
  request.r(i593[1], i593[2], 0, i592, 'material')
  i592.simulated = !!i593[3]
  i592.useAutoMass = !!i593[4]
  i592.mass = i593[5]
  i592.drag = i593[6]
  i592.angularDrag = i593[7]
  i592.gravityScale = i593[8]
  i592.collisionDetectionMode = i593[9]
  i592.sleepMode = i593[10]
  i592.constraints = i593[11]
  return i592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i595 = data
  i594.name = i595[0]
  i594.tagId = i595[1]
  i594.enabled = !!i595[2]
  i594.isStatic = !!i595[3]
  i594.layer = i595[4]
  return i594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i596 = root || new pc.UnityMaterial()
  var i597 = data
  i596.name = i597[0]
  request.r(i597[1], i597[2], 0, i596, 'shader')
  i596.renderQueue = i597[3]
  i596.enableInstancing = !!i597[4]
  var i599 = i597[5]
  var i598 = []
  for(var i = 0; i < i599.length; i += 1) {
    i598.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i599[i + 0]) );
  }
  i596.floatParameters = i598
  var i601 = i597[6]
  var i600 = []
  for(var i = 0; i < i601.length; i += 1) {
    i600.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i601[i + 0]) );
  }
  i596.colorParameters = i600
  var i603 = i597[7]
  var i602 = []
  for(var i = 0; i < i603.length; i += 1) {
    i602.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i603[i + 0]) );
  }
  i596.vectorParameters = i602
  var i605 = i597[8]
  var i604 = []
  for(var i = 0; i < i605.length; i += 1) {
    i604.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i605[i + 0]) );
  }
  i596.textureParameters = i604
  var i607 = i597[9]
  var i606 = []
  for(var i = 0; i < i607.length; i += 1) {
    i606.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i607[i + 0]) );
  }
  i596.materialFlags = i606
  return i596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i611 = data
  i610.name = i611[0]
  i610.value = i611[1]
  return i610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i615 = data
  i614.name = i615[0]
  i614.value = new pc.Color(i615[1], i615[2], i615[3], i615[4])
  return i614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i619 = data
  i618.name = i619[0]
  i618.value = new pc.Vec4( i619[1], i619[2], i619[3], i619[4] )
  return i618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i623 = data
  i622.name = i623[0]
  request.r(i623[1], i623[2], 0, i622, 'value')
  return i622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i627 = data
  i626.name = i627[0]
  i626.enabled = !!i627[1]
  return i626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i629 = data
  i628.name = i629[0]
  i628.width = i629[1]
  i628.height = i629[2]
  i628.mipmapCount = i629[3]
  i628.anisoLevel = i629[4]
  i628.filterMode = i629[5]
  i628.hdr = !!i629[6]
  i628.format = i629[7]
  i628.wrapMode = i629[8]
  i628.alphaIsTransparency = !!i629[9]
  i628.alphaSource = i629[10]
  i628.graphicsFormat = i629[11]
  i628.sRGBTexture = !!i629[12]
  i628.desiredColorSpace = i629[13]
  i628.wrapU = i629[14]
  i628.wrapV = i629[15]
  return i628
}

Deserializers["Disk"] = function (request, data, root) {
  var i630 = root || request.c( 'Disk' )
  var i631 = data
  i630.requiredCount = i631[0]
  i630.moveDistance = i631[1]
  i630.moveTime = i631[2]
  return i630
}

Deserializers["Tray"] = function (request, data, root) {
  var i632 = root || request.c( 'Tray' )
  var i633 = data
  i632.spacing = i633[0]
  i632.moveTime = i633[1]
  request.r(i633[2], i633[3], 0, i632, 'diskPrefab')
  request.r(i633[4], i633[5], 0, i632, 'diskTransform')
  i632.shrinkTime = i633[6]
  i632.itemToDiskTime = i633[7]
  i632.attachDelay = i633[8]
  i632.followSmooth = i633[9]
  i632.isCompleted = !!i633[10]
  var i635 = i633[11]
  var i634 = []
  for(var i = 0; i < i635.length; i += 2) {
  request.r(i635[i + 0], i635[i + 1], 2, i634, '')
  }
  i632.slots = i634
  request.r(i633[12], i633[13], 0, i632, 'fireObject')
  i632.isSpecial = !!i633[14]
  i632.diskItemScale = new pc.Vec3( i633[15], i633[16], i633[17] )
  return i632
}

Deserializers["Slot"] = function (request, data, root) {
  var i638 = root || request.c( 'Slot' )
  var i639 = data
  request.r(i639[0], i639[1], 0, i638, 'anchor')
  request.r(i639[2], i639[3], 0, i638, 'currentItem')
  i638.isLocked = !!i639[4]
  return i638
}

Deserializers["PackTarget"] = function (request, data, root) {
  var i640 = root || request.c( 'PackTarget' )
  var i641 = data
  i640.packType = i641[0]
  request.r(i641[1], i641[2], 0, i640, 'attachPoint')
  i640.slotIndex = i641[3]
  i640.capacity = i641[4]
  i640.currentCount = i641[5]
  i640.isFull = !!i641[6]
  return i640
}

Deserializers["HandHint"] = function (request, data, root) {
  var i642 = root || request.c( 'HandHint' )
  var i643 = data
  request.r(i643[0], i643[1], 0, i642, 'previewRenderer')
  return i642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i645 = data
  i644.name = i645[0]
  i644.index = i645[1]
  i644.startup = !!i645[2]
  return i644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i647 = data
  i646.aspect = i647[0]
  i646.orthographic = !!i647[1]
  i646.orthographicSize = i647[2]
  i646.backgroundColor = new pc.Color(i647[3], i647[4], i647[5], i647[6])
  i646.nearClipPlane = i647[7]
  i646.farClipPlane = i647[8]
  i646.fieldOfView = i647[9]
  i646.depth = i647[10]
  i646.clearFlags = i647[11]
  i646.cullingMask = i647[12]
  i646.rect = i647[13]
  request.r(i647[14], i647[15], 0, i646, 'targetTexture')
  i646.usePhysicalProperties = !!i647[16]
  i646.focalLength = i647[17]
  i646.sensorSize = new pc.Vec2( i647[18], i647[19] )
  i646.lensShift = new pc.Vec2( i647[20], i647[21] )
  i646.gateFit = i647[22]
  i646.commandBufferCount = i647[23]
  i646.cameraType = i647[24]
  i646.enabled = !!i647[25]
  return i646
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i648 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i649 = data
  request.r(i649[0], i649[1], 0, i648, 'm_FirstSelected')
  i648.m_sendNavigationEvents = !!i649[2]
  i648.m_DragThreshold = i649[3]
  return i648
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i650 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i651 = data
  i650.m_HorizontalAxis = i651[0]
  i650.m_VerticalAxis = i651[1]
  i650.m_SubmitButton = i651[2]
  i650.m_CancelButton = i651[3]
  i650.m_InputActionsPerSecond = i651[4]
  i650.m_RepeatDelay = i651[5]
  i650.m_ForceModuleActive = !!i651[6]
  i650.m_SendPointerHoverToParent = !!i651[7]
  return i650
}

Deserializers["TrayManager"] = function (request, data, root) {
  var i652 = root || request.c( 'TrayManager' )
  var i653 = data
  i652.spacing = i653[0]
  i652.visibleCount = i653[1]
  i652.moveTime = i653[2]
  var i655 = i653[3]
  var i654 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i655.length; i += 2) {
  request.r(i655[i + 0], i655[i + 1], 1, i654, '')
  }
  i652.listTray = i654
  i652.curve = new pc.AnimationCurve( { keys_flow: i653[4] } )
  i652.canCountIdle = !!i653[5]
  i652.spawnHeightMultiplier = i653[6]
  i652.isFirstTutorial = !!i653[7]
  i652.tutorialDelay = i653[8]
  i652.idleTimer = i653[9]
  i652.tutorialEnabled = !!i653[10]
  request.r(i653[11], i653[12], 0, i652, 'manualTray')
  request.r(i653[13], i653[14], 0, i652, 'manualItem')
  i652.justEndedInteract = !!i653[15]
  i652.step = i653[16]
  request.r(i653[17], i653[18], 0, i652, 'specialSpawnPoint')
  request.r(i653[19], i653[20], 0, i652, 'specialTray')
  i652.specialTrayScale = new pc.Vec3( i653[21], i653[22], i653[23] )
  i652.specialTrayLocalPos = new pc.Vec3( i653[24], i653[25], i653[26] )
  return i652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i659 = data
  i658.frontSortingLayerID = i659[0]
  i658.frontSortingOrder = i659[1]
  i658.backSortingLayerID = i659[2]
  i658.backSortingOrder = i659[3]
  i658.alphaCutoff = i659[4]
  request.r(i659[5], i659[6], 0, i658, 'sprite')
  i658.tileMode = i659[7]
  i658.isCustomRangeActive = !!i659[8]
  i658.spriteSortPoint = i659[9]
  i658.enabled = !!i659[10]
  request.r(i659[11], i659[12], 0, i658, 'sharedMaterial')
  var i661 = i659[13]
  var i660 = []
  for(var i = 0; i < i661.length; i += 2) {
  request.r(i661[i + 0], i661[i + 1], 2, i660, '')
  }
  i658.sharedMaterials = i660
  i658.receiveShadows = !!i659[14]
  i658.shadowCastingMode = i659[15]
  i658.sortingLayerID = i659[16]
  i658.sortingOrder = i659[17]
  i658.lightmapIndex = i659[18]
  i658.lightmapSceneIndex = i659[19]
  i658.lightmapScaleOffset = new pc.Vec4( i659[20], i659[21], i659[22], i659[23] )
  i658.lightProbeUsage = i659[24]
  i658.reflectionProbeUsage = i659[25]
  return i658
}

Deserializers["ConveyorBelt"] = function (request, data, root) {
  var i662 = root || request.c( 'ConveyorBelt' )
  var i663 = data
  i662.speed = i663[0]
  i662.spacing = i663[1]
  i662.leftLimit = i663[2]
  i662.removeFirstCount = i663[3]
  request.r(i663[4], i663[5], 0, i662, 'tutorial')
  return i662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i665 = data
  i664.pivot = new pc.Vec2( i665[0], i665[1] )
  i664.anchorMin = new pc.Vec2( i665[2], i665[3] )
  i664.anchorMax = new pc.Vec2( i665[4], i665[5] )
  i664.sizeDelta = new pc.Vec2( i665[6], i665[7] )
  i664.anchoredPosition3D = new pc.Vec3( i665[8], i665[9], i665[10] )
  i664.rotation = new pc.Quat(i665[11], i665[12], i665[13], i665[14])
  i664.scale = new pc.Vec3( i665[15], i665[16], i665[17] )
  return i664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i667 = data
  i666.planeDistance = i667[0]
  i666.referencePixelsPerUnit = i667[1]
  i666.isFallbackOverlay = !!i667[2]
  i666.renderMode = i667[3]
  i666.renderOrder = i667[4]
  i666.sortingLayerName = i667[5]
  i666.sortingOrder = i667[6]
  i666.scaleFactor = i667[7]
  request.r(i667[8], i667[9], 0, i666, 'worldCamera')
  i666.overrideSorting = !!i667[10]
  i666.pixelPerfect = !!i667[11]
  i666.targetDisplay = i667[12]
  i666.overridePixelPerfect = !!i667[13]
  i666.enabled = !!i667[14]
  return i666
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i668 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i669 = data
  i668.m_UiScaleMode = i669[0]
  i668.m_ReferencePixelsPerUnit = i669[1]
  i668.m_ScaleFactor = i669[2]
  i668.m_ReferenceResolution = new pc.Vec2( i669[3], i669[4] )
  i668.m_ScreenMatchMode = i669[5]
  i668.m_MatchWidthOrHeight = i669[6]
  i668.m_PhysicalUnit = i669[7]
  i668.m_FallbackScreenDPI = i669[8]
  i668.m_DefaultSpriteDPI = i669[9]
  i668.m_DynamicPixelsPerUnit = i669[10]
  i668.m_PresetInfoIsWorld = !!i669[11]
  return i668
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i670 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i671 = data
  i670.m_IgnoreReversedGraphics = !!i671[0]
  i670.m_BlockingObjects = i671[1]
  i670.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i671[2] )
  return i670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i673 = data
  i672.cullTransparentMesh = !!i673[0]
  return i672
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i674 = root || request.c( 'UnityEngine.UI.Image' )
  var i675 = data
  request.r(i675[0], i675[1], 0, i674, 'm_Sprite')
  i674.m_Type = i675[2]
  i674.m_PreserveAspect = !!i675[3]
  i674.m_FillCenter = !!i675[4]
  i674.m_FillMethod = i675[5]
  i674.m_FillAmount = i675[6]
  i674.m_FillClockwise = !!i675[7]
  i674.m_FillOrigin = i675[8]
  i674.m_UseSpriteMesh = !!i675[9]
  i674.m_PixelsPerUnitMultiplier = i675[10]
  request.r(i675[11], i675[12], 0, i674, 'm_Material')
  i674.m_Maskable = !!i675[13]
  i674.m_Color = new pc.Color(i675[14], i675[15], i675[16], i675[17])
  i674.m_RaycastTarget = !!i675[18]
  i674.m_RaycastPadding = new pc.Vec4( i675[19], i675[20], i675[21], i675[22] )
  return i674
}

Deserializers["EndCart_Win"] = function (request, data, root) {
  var i676 = root || request.c( 'EndCart_Win' )
  var i677 = data
  request.r(i677[0], i677[1], 0, i676, 'confettiLeft')
  request.r(i677[2], i677[3], 0, i676, 'confettiRight')
  request.r(i677[4], i677[5], 0, i676, 'winText')
  request.r(i677[6], i677[7], 0, i676, 'chest')
  request.r(i677[8], i677[9], 0, i676, 'button')
  i676.textDelay = i677[10]
  i676.chestDelay = i677[11]
  return i676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i679 = data
  request.r(i679[0], i679[1], 0, i678, 'additionalVertexStreams')
  i678.enabled = !!i679[2]
  request.r(i679[3], i679[4], 0, i678, 'sharedMaterial')
  var i681 = i679[5]
  var i680 = []
  for(var i = 0; i < i681.length; i += 2) {
  request.r(i681[i + 0], i681[i + 1], 2, i680, '')
  }
  i678.sharedMaterials = i680
  i678.receiveShadows = !!i679[6]
  i678.shadowCastingMode = i679[7]
  i678.sortingLayerID = i679[8]
  i678.sortingOrder = i679[9]
  i678.lightmapIndex = i679[10]
  i678.lightmapSceneIndex = i679[11]
  i678.lightmapScaleOffset = new pc.Vec4( i679[12], i679[13], i679[14], i679[15] )
  i678.lightProbeUsage = i679[16]
  i678.reflectionProbeUsage = i679[17]
  return i678
}

Deserializers["Spine.Unity.SkeletonAnimation"] = function (request, data, root) {
  var i682 = root || request.c( 'Spine.Unity.SkeletonAnimation' )
  var i683 = data
  i682.loop = !!i683[0]
  i682.timeScale = i683[1]
  request.r(i683[2], i683[3], 0, i682, 'skeletonDataAsset')
  i682.initialSkinName = i683[4]
  i682.fixPrefabOverrideViaMeshFilter = i683[5]
  i682.initialFlipX = !!i683[6]
  i682.initialFlipY = !!i683[7]
  i682.updateWhenInvisible = i683[8]
  i682.zSpacing = i683[9]
  i682.useClipping = !!i683[10]
  i682.immutableTriangles = !!i683[11]
  i682.pmaVertexColors = !!i683[12]
  i682.clearStateOnDisable = !!i683[13]
  i682.tintBlack = !!i683[14]
  i682.singleSubmesh = !!i683[15]
  i682.fixDrawOrder = !!i683[16]
  i682.addNormals = !!i683[17]
  i682.calculateTangents = !!i683[18]
  i682.maskInteraction = i683[19]
  i682.maskMaterials = request.d('Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials', i683[20], i682.maskMaterials)
  i682.disableRenderingOnOverride = !!i683[21]
  i682.updateTiming = i683[22]
  i682.unscaledTime = !!i683[23]
  i682._animationName = i683[24]
  var i685 = i683[25]
  var i684 = []
  for(var i = 0; i < i685.length; i += 1) {
    i684.push( i685[i + 0] );
  }
  i682.separatorSlotNames = i684
  i682.physicsPositionInheritanceFactor = new pc.Vec2( i683[26], i683[27] )
  i682.physicsRotationInheritanceFactor = i683[28]
  request.r(i683[29], i683[30], 0, i682, 'physicsMovementRelativeTo')
  return i682
}

Deserializers["Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials"] = function (request, data, root) {
  var i686 = root || request.c( 'Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials' )
  var i687 = data
  var i689 = i687[0]
  var i688 = []
  for(var i = 0; i < i689.length; i += 2) {
  request.r(i689[i + 0], i689[i + 1], 2, i688, '')
  }
  i686.materialsMaskDisabled = i688
  var i691 = i687[1]
  var i690 = []
  for(var i = 0; i < i691.length; i += 2) {
  request.r(i691[i + 0], i691[i + 1], 2, i690, '')
  }
  i686.materialsInsideMask = i690
  var i693 = i687[2]
  var i692 = []
  for(var i = 0; i < i693.length; i += 2) {
  request.r(i693[i + 0], i693[i + 1], 2, i692, '')
  }
  i686.materialsOutsideMask = i692
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i697 = data
  request.r(i697[0], i697[1], 0, i696, 'sharedMesh')
  return i696
}

Deserializers["Button"] = function (request, data, root) {
  var i698 = root || request.c( 'Button' )
  var i699 = data
  return i698
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i700 = root || request.c( 'UnityEngine.UI.Button' )
  var i701 = data
  i700.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i701[0], i700.m_OnClick)
  i700.m_Navigation = request.d('UnityEngine.UI.Navigation', i701[1], i700.m_Navigation)
  i700.m_Transition = i701[2]
  i700.m_Colors = request.d('UnityEngine.UI.ColorBlock', i701[3], i700.m_Colors)
  i700.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i701[4], i700.m_SpriteState)
  i700.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i701[5], i700.m_AnimationTriggers)
  i700.m_Interactable = !!i701[6]
  request.r(i701[7], i701[8], 0, i700, 'm_TargetGraphic')
  return i700
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i702 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i703 = data
  i702.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i703[0], i702.m_PersistentCalls)
  return i702
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i704 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i705 = data
  var i707 = i705[0]
  var i706 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i707.length; i += 1) {
    i706.add(request.d('UnityEngine.Events.PersistentCall', i707[i + 0]));
  }
  i704.m_Calls = i706
  return i704
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i710 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i711 = data
  request.r(i711[0], i711[1], 0, i710, 'm_Target')
  i710.m_TargetAssemblyTypeName = i711[2]
  i710.m_MethodName = i711[3]
  i710.m_Mode = i711[4]
  i710.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i711[5], i710.m_Arguments)
  i710.m_CallState = i711[6]
  return i710
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i712 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i713 = data
  request.r(i713[0], i713[1], 0, i712, 'm_ObjectArgument')
  i712.m_ObjectArgumentAssemblyTypeName = i713[2]
  i712.m_IntArgument = i713[3]
  i712.m_FloatArgument = i713[4]
  i712.m_StringArgument = i713[5]
  i712.m_BoolArgument = !!i713[6]
  return i712
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i714 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i715 = data
  i714.m_Mode = i715[0]
  i714.m_WrapAround = !!i715[1]
  request.r(i715[2], i715[3], 0, i714, 'm_SelectOnUp')
  request.r(i715[4], i715[5], 0, i714, 'm_SelectOnDown')
  request.r(i715[6], i715[7], 0, i714, 'm_SelectOnLeft')
  request.r(i715[8], i715[9], 0, i714, 'm_SelectOnRight')
  return i714
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i716 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i717 = data
  i716.m_NormalColor = new pc.Color(i717[0], i717[1], i717[2], i717[3])
  i716.m_HighlightedColor = new pc.Color(i717[4], i717[5], i717[6], i717[7])
  i716.m_PressedColor = new pc.Color(i717[8], i717[9], i717[10], i717[11])
  i716.m_SelectedColor = new pc.Color(i717[12], i717[13], i717[14], i717[15])
  i716.m_DisabledColor = new pc.Color(i717[16], i717[17], i717[18], i717[19])
  i716.m_ColorMultiplier = i717[20]
  i716.m_FadeDuration = i717[21]
  return i716
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i718 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i719 = data
  request.r(i719[0], i719[1], 0, i718, 'm_HighlightedSprite')
  request.r(i719[2], i719[3], 0, i718, 'm_PressedSprite')
  request.r(i719[4], i719[5], 0, i718, 'm_SelectedSprite')
  request.r(i719[6], i719[7], 0, i718, 'm_DisabledSprite')
  return i718
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i720 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i721 = data
  i720.m_NormalTrigger = i721[0]
  i720.m_HighlightedTrigger = i721[1]
  i720.m_PressedTrigger = i721[2]
  i720.m_SelectedTrigger = i721[3]
  i720.m_DisabledTrigger = i721[4]
  return i720
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i722 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i723 = data
  i722.m_hasFontAssetChanged = !!i723[0]
  request.r(i723[1], i723[2], 0, i722, 'm_baseMaterial')
  i722.m_maskOffset = new pc.Vec4( i723[3], i723[4], i723[5], i723[6] )
  i722.m_text = i723[7]
  i722.m_isRightToLeft = !!i723[8]
  request.r(i723[9], i723[10], 0, i722, 'm_fontAsset')
  request.r(i723[11], i723[12], 0, i722, 'm_sharedMaterial')
  var i725 = i723[13]
  var i724 = []
  for(var i = 0; i < i725.length; i += 2) {
  request.r(i725[i + 0], i725[i + 1], 2, i724, '')
  }
  i722.m_fontSharedMaterials = i724
  request.r(i723[14], i723[15], 0, i722, 'm_fontMaterial')
  var i727 = i723[16]
  var i726 = []
  for(var i = 0; i < i727.length; i += 2) {
  request.r(i727[i + 0], i727[i + 1], 2, i726, '')
  }
  i722.m_fontMaterials = i726
  i722.m_fontColor32 = UnityEngine.Color32.ConstructColor(i723[17], i723[18], i723[19], i723[20])
  i722.m_fontColor = new pc.Color(i723[21], i723[22], i723[23], i723[24])
  i722.m_enableVertexGradient = !!i723[25]
  i722.m_colorMode = i723[26]
  i722.m_fontColorGradient = request.d('TMPro.VertexGradient', i723[27], i722.m_fontColorGradient)
  request.r(i723[28], i723[29], 0, i722, 'm_fontColorGradientPreset')
  request.r(i723[30], i723[31], 0, i722, 'm_spriteAsset')
  i722.m_tintAllSprites = !!i723[32]
  request.r(i723[33], i723[34], 0, i722, 'm_StyleSheet')
  i722.m_TextStyleHashCode = i723[35]
  i722.m_overrideHtmlColors = !!i723[36]
  i722.m_faceColor = UnityEngine.Color32.ConstructColor(i723[37], i723[38], i723[39], i723[40])
  i722.m_fontSize = i723[41]
  i722.m_fontSizeBase = i723[42]
  i722.m_fontWeight = i723[43]
  i722.m_enableAutoSizing = !!i723[44]
  i722.m_fontSizeMin = i723[45]
  i722.m_fontSizeMax = i723[46]
  i722.m_fontStyle = i723[47]
  i722.m_HorizontalAlignment = i723[48]
  i722.m_VerticalAlignment = i723[49]
  i722.m_textAlignment = i723[50]
  i722.m_characterSpacing = i723[51]
  i722.m_wordSpacing = i723[52]
  i722.m_lineSpacing = i723[53]
  i722.m_lineSpacingMax = i723[54]
  i722.m_paragraphSpacing = i723[55]
  i722.m_charWidthMaxAdj = i723[56]
  i722.m_enableWordWrapping = !!i723[57]
  i722.m_wordWrappingRatios = i723[58]
  i722.m_overflowMode = i723[59]
  request.r(i723[60], i723[61], 0, i722, 'm_linkedTextComponent')
  request.r(i723[62], i723[63], 0, i722, 'parentLinkedComponent')
  i722.m_enableKerning = !!i723[64]
  i722.m_enableExtraPadding = !!i723[65]
  i722.checkPaddingRequired = !!i723[66]
  i722.m_isRichText = !!i723[67]
  i722.m_parseCtrlCharacters = !!i723[68]
  i722.m_isOrthographic = !!i723[69]
  i722.m_isCullingEnabled = !!i723[70]
  i722.m_horizontalMapping = i723[71]
  i722.m_verticalMapping = i723[72]
  i722.m_uvLineOffset = i723[73]
  i722.m_geometrySortingOrder = i723[74]
  i722.m_IsTextObjectScaleStatic = !!i723[75]
  i722.m_VertexBufferAutoSizeReduction = !!i723[76]
  i722.m_useMaxVisibleDescender = !!i723[77]
  i722.m_pageToDisplay = i723[78]
  i722.m_margin = new pc.Vec4( i723[79], i723[80], i723[81], i723[82] )
  i722.m_isUsingLegacyAnimationComponent = !!i723[83]
  i722.m_isVolumetricText = !!i723[84]
  request.r(i723[85], i723[86], 0, i722, 'm_Material')
  i722.m_Maskable = !!i723[87]
  i722.m_Color = new pc.Color(i723[88], i723[89], i723[90], i723[91])
  i722.m_RaycastTarget = !!i723[92]
  i722.m_RaycastPadding = new pc.Vec4( i723[93], i723[94], i723[95], i723[96] )
  return i722
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i728 = root || request.c( 'TMPro.VertexGradient' )
  var i729 = data
  i728.topLeft = new pc.Color(i729[0], i729[1], i729[2], i729[3])
  i728.topRight = new pc.Color(i729[4], i729[5], i729[6], i729[7])
  i728.bottomLeft = new pc.Color(i729[8], i729[9], i729[10], i729[11])
  i728.bottomRight = new pc.Color(i729[12], i729[13], i729[14], i729[15])
  return i728
}

Deserializers["AudioManager"] = function (request, data, root) {
  var i730 = root || request.c( 'AudioManager' )
  var i731 = data
  request.r(i731[0], i731[1], 0, i730, 'bgmSource')
  request.r(i731[2], i731[3], 0, i730, 'sfxSource')
  request.r(i731[4], i731[5], 0, i730, 'bgm')
  request.r(i731[6], i731[7], 0, i730, 'drag')
  request.r(i731[8], i731[9], 0, i730, 'drog')
  request.r(i731[10], i731[11], 0, i730, 'lose')
  request.r(i731[12], i731[13], 0, i730, 'pop')
  request.r(i731[14], i731[15], 0, i730, 'wood')
  request.r(i731[16], i731[17], 0, i730, 'win')
  request.r(i731[18], i731[19], 0, i730, 'warningTick')
  request.r(i731[20], i731[21], 0, i730, 'match')
  request.r(i731[22], i731[23], 0, i730, 'sake')
  return i730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i733 = data
  request.r(i733[0], i733[1], 0, i732, 'clip')
  request.r(i733[2], i733[3], 0, i732, 'outputAudioMixerGroup')
  i732.playOnAwake = !!i733[4]
  i732.loop = !!i733[5]
  i732.time = i733[6]
  i732.volume = i733[7]
  i732.pitch = i733[8]
  i732.enabled = !!i733[9]
  return i732
}

Deserializers["GameManager"] = function (request, data, root) {
  var i734 = root || request.c( 'GameManager' )
  var i735 = data
  request.r(i735[0], i735[1], 0, i734, 'pointText')
  i734.point = i735[2]
  request.r(i735[3], i735[4], 0, i734, 'ECWin')
  i734.startTimer = !!i735[5]
  i734.ticketCount = i735[6]
  i734.isClickToLog = !!i735[7]
  i734.clicksToLog = i735[8]
  i734.isMatch = !!i735[9]
  i734.clickCount = i735[10]
  i734.isClick = !!i735[11]
  i734.finishGame = !!i735[12]
  i734.startGame = !!i735[13]
  i734.isCheckWin = !!i735[14]
  i734.isCheckLose = !!i735[15]
  i734.isClickStore = !!i735[16]
  return i734
}

Deserializers["PackManager"] = function (request, data, root) {
  var i736 = root || request.c( 'PackManager' )
  var i737 = data
  request.r(i737[0], i737[1], 0, i736, 'packRoot')
  var i739 = i737[2]
  var i738 = new (System.Collections.Generic.List$1(Bridge.ns('PackTarget')))
  for(var i = 0; i < i739.length; i += 2) {
  request.r(i739[i + 0], i739[i + 1], 1, i738, '')
  }
  i736.packPrefabs = i738
  var i741 = i737[3]
  var i740 = new (System.Collections.Generic.List$1(Bridge.ns('PackTarget')))
  for(var i = 0; i < i741.length; i += 2) {
  request.r(i741[i + 0], i741[i + 1], 1, i740, '')
  }
  i736.activePacks = i740
  var i743 = i737[4]
  var i742 = new (System.Collections.Generic.List$1(Bridge.ns('PackTarget')))
  for(var i = 0; i < i743.length; i += 2) {
  request.r(i743[i + 0], i743[i + 1], 1, i742, '')
  }
  i736.packs = i742
  return i736
}

Deserializers["TutorialManager"] = function (request, data, root) {
  var i746 = root || request.c( 'TutorialManager' )
  var i747 = data
  request.r(i747[0], i747[1], 0, i746, 'handPrefab')
  return i746
}

Deserializers["ScalePopLoop"] = function (request, data, root) {
  var i748 = root || request.c( 'ScalePopLoop' )
  var i749 = data
  i748.minScale = new pc.Vec3( i749[0], i749[1], i749[2] )
  i748.maxScale = new pc.Vec3( i749[3], i749[4], i749[5] )
  i748.duration = i749[6]
  i748.ease = i749[7]
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i751 = data
  i750.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i751[0], i750.main)
  i750.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i751[1], i750.colorBySpeed)
  i750.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i751[2], i750.colorOverLifetime)
  i750.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i751[3], i750.emission)
  i750.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i751[4], i750.rotationBySpeed)
  i750.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i751[5], i750.rotationOverLifetime)
  i750.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i751[6], i750.shape)
  i750.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i751[7], i750.sizeBySpeed)
  i750.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i751[8], i750.sizeOverLifetime)
  i750.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i751[9], i750.textureSheetAnimation)
  i750.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i751[10], i750.velocityOverLifetime)
  i750.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i751[11], i750.noise)
  i750.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i751[12], i750.inheritVelocity)
  i750.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i751[13], i750.forceOverLifetime)
  i750.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i751[14], i750.limitVelocityOverLifetime)
  i750.useAutoRandomSeed = !!i751[15]
  i750.randomSeed = i751[16]
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i752 = root || new pc.ParticleSystemMain()
  var i753 = data
  i752.duration = i753[0]
  i752.loop = !!i753[1]
  i752.prewarm = !!i753[2]
  i752.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i753[3], i752.startDelay)
  i752.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i753[4], i752.startLifetime)
  i752.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i753[5], i752.startSpeed)
  i752.startSize3D = !!i753[6]
  i752.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i753[7], i752.startSizeX)
  i752.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i753[8], i752.startSizeY)
  i752.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i753[9], i752.startSizeZ)
  i752.startRotation3D = !!i753[10]
  i752.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i753[11], i752.startRotationX)
  i752.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i753[12], i752.startRotationY)
  i752.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i753[13], i752.startRotationZ)
  i752.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i753[14], i752.startColor)
  i752.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i753[15], i752.gravityModifier)
  i752.simulationSpace = i753[16]
  request.r(i753[17], i753[18], 0, i752, 'customSimulationSpace')
  i752.simulationSpeed = i753[19]
  i752.useUnscaledTime = !!i753[20]
  i752.scalingMode = i753[21]
  i752.playOnAwake = !!i753[22]
  i752.maxParticles = i753[23]
  i752.emitterVelocityMode = i753[24]
  i752.stopAction = i753[25]
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i754 = root || new pc.MinMaxCurve()
  var i755 = data
  i754.mode = i755[0]
  i754.curveMin = new pc.AnimationCurve( { keys_flow: i755[1] } )
  i754.curveMax = new pc.AnimationCurve( { keys_flow: i755[2] } )
  i754.curveMultiplier = i755[3]
  i754.constantMin = i755[4]
  i754.constantMax = i755[5]
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i756 = root || new pc.MinMaxGradient()
  var i757 = data
  i756.mode = i757[0]
  i756.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i757[1], i756.gradientMin)
  i756.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i757[2], i756.gradientMax)
  i756.colorMin = new pc.Color(i757[3], i757[4], i757[5], i757[6])
  i756.colorMax = new pc.Color(i757[7], i757[8], i757[9], i757[10])
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i759 = data
  i758.mode = i759[0]
  var i761 = i759[1]
  var i760 = []
  for(var i = 0; i < i761.length; i += 1) {
    i760.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i761[i + 0]) );
  }
  i758.colorKeys = i760
  var i763 = i759[2]
  var i762 = []
  for(var i = 0; i < i763.length; i += 1) {
    i762.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i763[i + 0]) );
  }
  i758.alphaKeys = i762
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i767 = data
  i766.color = new pc.Color(i767[0], i767[1], i767[2], i767[3])
  i766.time = i767[4]
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i771 = data
  i770.alpha = i771[0]
  i770.time = i771[1]
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i772 = root || new pc.ParticleSystemColorBySpeed()
  var i773 = data
  i772.enabled = !!i773[0]
  i772.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i773[1], i772.color)
  i772.range = new pc.Vec2( i773[2], i773[3] )
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i774 = root || new pc.ParticleSystemColorOverLifetime()
  var i775 = data
  i774.enabled = !!i775[0]
  i774.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i775[1], i774.color)
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i776 = root || new pc.ParticleSystemEmitter()
  var i777 = data
  i776.enabled = !!i777[0]
  i776.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i777[1], i776.rateOverTime)
  i776.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i777[2], i776.rateOverDistance)
  var i779 = i777[3]
  var i778 = []
  for(var i = 0; i < i779.length; i += 1) {
    i778.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i779[i + 0]) );
  }
  i776.bursts = i778
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i782 = root || new pc.ParticleSystemBurst()
  var i783 = data
  i782.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i783[0], i782.count)
  i782.cycleCount = i783[1]
  i782.minCount = i783[2]
  i782.maxCount = i783[3]
  i782.repeatInterval = i783[4]
  i782.time = i783[5]
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i784 = root || new pc.ParticleSystemRotationBySpeed()
  var i785 = data
  i784.enabled = !!i785[0]
  i784.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i785[1], i784.x)
  i784.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i785[2], i784.y)
  i784.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i785[3], i784.z)
  i784.separateAxes = !!i785[4]
  i784.range = new pc.Vec2( i785[5], i785[6] )
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i786 = root || new pc.ParticleSystemRotationOverLifetime()
  var i787 = data
  i786.enabled = !!i787[0]
  i786.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i787[1], i786.x)
  i786.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i787[2], i786.y)
  i786.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i787[3], i786.z)
  i786.separateAxes = !!i787[4]
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i788 = root || new pc.ParticleSystemShape()
  var i789 = data
  i788.enabled = !!i789[0]
  i788.shapeType = i789[1]
  i788.randomDirectionAmount = i789[2]
  i788.sphericalDirectionAmount = i789[3]
  i788.randomPositionAmount = i789[4]
  i788.alignToDirection = !!i789[5]
  i788.radius = i789[6]
  i788.radiusMode = i789[7]
  i788.radiusSpread = i789[8]
  i788.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[9], i788.radiusSpeed)
  i788.radiusThickness = i789[10]
  i788.angle = i789[11]
  i788.length = i789[12]
  i788.boxThickness = new pc.Vec3( i789[13], i789[14], i789[15] )
  i788.meshShapeType = i789[16]
  request.r(i789[17], i789[18], 0, i788, 'mesh')
  request.r(i789[19], i789[20], 0, i788, 'meshRenderer')
  request.r(i789[21], i789[22], 0, i788, 'skinnedMeshRenderer')
  i788.useMeshMaterialIndex = !!i789[23]
  i788.meshMaterialIndex = i789[24]
  i788.useMeshColors = !!i789[25]
  i788.normalOffset = i789[26]
  i788.arc = i789[27]
  i788.arcMode = i789[28]
  i788.arcSpread = i789[29]
  i788.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[30], i788.arcSpeed)
  i788.donutRadius = i789[31]
  i788.position = new pc.Vec3( i789[32], i789[33], i789[34] )
  i788.rotation = new pc.Vec3( i789[35], i789[36], i789[37] )
  i788.scale = new pc.Vec3( i789[38], i789[39], i789[40] )
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i790 = root || new pc.ParticleSystemSizeBySpeed()
  var i791 = data
  i790.enabled = !!i791[0]
  i790.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[1], i790.x)
  i790.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[2], i790.y)
  i790.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[3], i790.z)
  i790.separateAxes = !!i791[4]
  i790.range = new pc.Vec2( i791[5], i791[6] )
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i792 = root || new pc.ParticleSystemSizeOverLifetime()
  var i793 = data
  i792.enabled = !!i793[0]
  i792.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[1], i792.x)
  i792.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[2], i792.y)
  i792.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[3], i792.z)
  i792.separateAxes = !!i793[4]
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i794 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i795 = data
  i794.enabled = !!i795[0]
  i794.mode = i795[1]
  i794.animation = i795[2]
  i794.numTilesX = i795[3]
  i794.numTilesY = i795[4]
  i794.useRandomRow = !!i795[5]
  i794.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[6], i794.frameOverTime)
  i794.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[7], i794.startFrame)
  i794.cycleCount = i795[8]
  i794.rowIndex = i795[9]
  i794.flipU = i795[10]
  i794.flipV = i795[11]
  i794.spriteCount = i795[12]
  var i797 = i795[13]
  var i796 = []
  for(var i = 0; i < i797.length; i += 2) {
  request.r(i797[i + 0], i797[i + 1], 2, i796, '')
  }
  i794.sprites = i796
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i800 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i801 = data
  i800.enabled = !!i801[0]
  i800.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i801[1], i800.x)
  i800.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i801[2], i800.y)
  i800.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i801[3], i800.z)
  i800.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i801[4], i800.radial)
  i800.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i801[5], i800.speedModifier)
  i800.space = i801[6]
  i800.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i801[7], i800.orbitalX)
  i800.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i801[8], i800.orbitalY)
  i800.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i801[9], i800.orbitalZ)
  i800.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i801[10], i800.orbitalOffsetX)
  i800.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i801[11], i800.orbitalOffsetY)
  i800.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i801[12], i800.orbitalOffsetZ)
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i802 = root || new pc.ParticleSystemNoise()
  var i803 = data
  i802.enabled = !!i803[0]
  i802.separateAxes = !!i803[1]
  i802.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[2], i802.strengthX)
  i802.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[3], i802.strengthY)
  i802.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[4], i802.strengthZ)
  i802.frequency = i803[5]
  i802.damping = !!i803[6]
  i802.octaveCount = i803[7]
  i802.octaveMultiplier = i803[8]
  i802.octaveScale = i803[9]
  i802.quality = i803[10]
  i802.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[11], i802.scrollSpeed)
  i802.scrollSpeedMultiplier = i803[12]
  i802.remapEnabled = !!i803[13]
  i802.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[14], i802.remapX)
  i802.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[15], i802.remapY)
  i802.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[16], i802.remapZ)
  i802.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[17], i802.positionAmount)
  i802.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[18], i802.rotationAmount)
  i802.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[19], i802.sizeAmount)
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i804 = root || new pc.ParticleSystemInheritVelocity()
  var i805 = data
  i804.enabled = !!i805[0]
  i804.mode = i805[1]
  i804.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[2], i804.curve)
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i806 = root || new pc.ParticleSystemForceOverLifetime()
  var i807 = data
  i806.enabled = !!i807[0]
  i806.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[1], i806.x)
  i806.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[2], i806.y)
  i806.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[3], i806.z)
  i806.space = i807[4]
  i806.randomized = !!i807[5]
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i808 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i809 = data
  i808.enabled = !!i809[0]
  i808.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[1], i808.limit)
  i808.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[2], i808.limitX)
  i808.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[3], i808.limitY)
  i808.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[4], i808.limitZ)
  i808.dampen = i809[5]
  i808.separateAxes = !!i809[6]
  i808.space = i809[7]
  i808.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[8], i808.drag)
  i808.multiplyDragByParticleSize = !!i809[9]
  i808.multiplyDragByParticleVelocity = !!i809[10]
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i811 = data
  request.r(i811[0], i811[1], 0, i810, 'mesh')
  i810.meshCount = i811[2]
  i810.activeVertexStreamsCount = i811[3]
  i810.alignment = i811[4]
  i810.renderMode = i811[5]
  i810.sortMode = i811[6]
  i810.lengthScale = i811[7]
  i810.velocityScale = i811[8]
  i810.cameraVelocityScale = i811[9]
  i810.normalDirection = i811[10]
  i810.sortingFudge = i811[11]
  i810.minParticleSize = i811[12]
  i810.maxParticleSize = i811[13]
  i810.pivot = new pc.Vec3( i811[14], i811[15], i811[16] )
  request.r(i811[17], i811[18], 0, i810, 'trailMaterial')
  i810.applyActiveColorSpace = !!i811[19]
  i810.enabled = !!i811[20]
  request.r(i811[21], i811[22], 0, i810, 'sharedMaterial')
  var i813 = i811[23]
  var i812 = []
  for(var i = 0; i < i813.length; i += 2) {
  request.r(i813[i + 0], i813[i + 1], 2, i812, '')
  }
  i810.sharedMaterials = i812
  i810.receiveShadows = !!i811[24]
  i810.shadowCastingMode = i811[25]
  i810.sortingLayerID = i811[26]
  i810.sortingOrder = i811[27]
  i810.lightmapIndex = i811[28]
  i810.lightmapSceneIndex = i811[29]
  i810.lightmapScaleOffset = new pc.Vec4( i811[30], i811[31], i811[32], i811[33] )
  i810.lightProbeUsage = i811[34]
  i810.reflectionProbeUsage = i811[35]
  return i810
}

Deserializers["NotiBox"] = function (request, data, root) {
  var i814 = root || request.c( 'NotiBox' )
  var i815 = data
  request.r(i815[0], i815[1], 0, i814, 'box')
  request.r(i815[2], i815[3], 0, i814, 'bg')
  i814.delay = i815[4]
  i814.animTime = i815[5]
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i817 = data
  i816.m_Alpha = i817[0]
  i816.m_Interactable = !!i817[1]
  i816.m_BlocksRaycasts = !!i817[2]
  i816.m_IgnoreParentGroups = !!i817[3]
  i816.enabled = !!i817[4]
  return i816
}

Deserializers["EndCart_Lose"] = function (request, data, root) {
  var i818 = root || request.c( 'EndCart_Lose' )
  var i819 = data
  request.r(i819[0], i819[1], 0, i818, 'actionButton')
  request.r(i819[2], i819[3], 0, i818, 'emoji')
  request.r(i819[4], i819[5], 0, i818, 'logo')
  request.r(i819[6], i819[7], 0, i818, 'icon')
  request.r(i819[8], i819[9], 0, i818, 'praticle')
  i818.buttonScaleTime = i819[10]
  i818.itemStartScale = i819[11]
  i818.itemPopScale = i819[12]
  i818.itemInTime = i819[13]
  i818.itemSettleTime = i819[14]
  i818.itemFinalScale = i819[15]
  i818.emojiFinalScale = i819[16]
  i818.otherItemFinalScale = i819[17]
  return i818
}

Deserializers["RotateLoop"] = function (request, data, root) {
  var i820 = root || request.c( 'RotateLoop' )
  var i821 = data
  i820.rotateSpeed = i821[0]
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i823 = data
  i822.ambientIntensity = i823[0]
  i822.reflectionIntensity = i823[1]
  i822.ambientMode = i823[2]
  i822.ambientLight = new pc.Color(i823[3], i823[4], i823[5], i823[6])
  i822.ambientSkyColor = new pc.Color(i823[7], i823[8], i823[9], i823[10])
  i822.ambientGroundColor = new pc.Color(i823[11], i823[12], i823[13], i823[14])
  i822.ambientEquatorColor = new pc.Color(i823[15], i823[16], i823[17], i823[18])
  i822.fogColor = new pc.Color(i823[19], i823[20], i823[21], i823[22])
  i822.fogEndDistance = i823[23]
  i822.fogStartDistance = i823[24]
  i822.fogDensity = i823[25]
  i822.fog = !!i823[26]
  request.r(i823[27], i823[28], 0, i822, 'skybox')
  i822.fogMode = i823[29]
  var i825 = i823[30]
  var i824 = []
  for(var i = 0; i < i825.length; i += 1) {
    i824.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i825[i + 0]) );
  }
  i822.lightmaps = i824
  i822.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i823[31], i822.lightProbes)
  i822.lightmapsMode = i823[32]
  i822.mixedBakeMode = i823[33]
  i822.environmentLightingMode = i823[34]
  i822.ambientProbe = new pc.SphericalHarmonicsL2(i823[35])
  i822.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i823[36])
  i822.useReferenceAmbientProbe = !!i823[37]
  request.r(i823[38], i823[39], 0, i822, 'customReflection')
  request.r(i823[40], i823[41], 0, i822, 'defaultReflection')
  i822.defaultReflectionMode = i823[42]
  i822.defaultReflectionResolution = i823[43]
  i822.sunLightObjectId = i823[44]
  i822.pixelLightCount = i823[45]
  i822.defaultReflectionHDR = !!i823[46]
  i822.hasLightDataAsset = !!i823[47]
  i822.hasManualGenerate = !!i823[48]
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i829 = data
  request.r(i829[0], i829[1], 0, i828, 'lightmapColor')
  request.r(i829[2], i829[3], 0, i828, 'lightmapDirection')
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i830 = root || new UnityEngine.LightProbes()
  var i831 = data
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i839 = data
  var i841 = i839[0]
  var i840 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i841.length; i += 1) {
    i840.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i841[i + 0]));
  }
  i838.ShaderCompilationErrors = i840
  i838.name = i839[1]
  i838.guid = i839[2]
  var i843 = i839[3]
  var i842 = []
  for(var i = 0; i < i843.length; i += 1) {
    i842.push( i843[i + 0] );
  }
  i838.shaderDefinedKeywords = i842
  var i845 = i839[4]
  var i844 = []
  for(var i = 0; i < i845.length; i += 1) {
    i844.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i845[i + 0]) );
  }
  i838.passes = i844
  var i847 = i839[5]
  var i846 = []
  for(var i = 0; i < i847.length; i += 1) {
    i846.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i847[i + 0]) );
  }
  i838.usePasses = i846
  var i849 = i839[6]
  var i848 = []
  for(var i = 0; i < i849.length; i += 1) {
    i848.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i849[i + 0]) );
  }
  i838.defaultParameterValues = i848
  request.r(i839[7], i839[8], 0, i838, 'unityFallbackShader')
  i838.readDepth = !!i839[9]
  i838.hasDepthOnlyPass = !!i839[10]
  i838.isCreatedByShaderGraph = !!i839[11]
  i838.disableBatching = !!i839[12]
  i838.compiled = !!i839[13]
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i853 = data
  i852.shaderName = i853[0]
  i852.errorMessage = i853[1]
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i856 = root || new pc.UnityShaderPass()
  var i857 = data
  i856.id = i857[0]
  i856.subShaderIndex = i857[1]
  i856.name = i857[2]
  i856.passType = i857[3]
  i856.grabPassTextureName = i857[4]
  i856.usePass = !!i857[5]
  i856.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i857[6], i856.zTest)
  i856.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i857[7], i856.zWrite)
  i856.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i857[8], i856.culling)
  i856.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i857[9], i856.blending)
  i856.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i857[10], i856.alphaBlending)
  i856.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i857[11], i856.colorWriteMask)
  i856.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i857[12], i856.offsetUnits)
  i856.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i857[13], i856.offsetFactor)
  i856.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i857[14], i856.stencilRef)
  i856.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i857[15], i856.stencilReadMask)
  i856.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i857[16], i856.stencilWriteMask)
  i856.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i857[17], i856.stencilOp)
  i856.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i857[18], i856.stencilOpFront)
  i856.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i857[19], i856.stencilOpBack)
  var i859 = i857[20]
  var i858 = []
  for(var i = 0; i < i859.length; i += 1) {
    i858.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i859[i + 0]) );
  }
  i856.tags = i858
  var i861 = i857[21]
  var i860 = []
  for(var i = 0; i < i861.length; i += 1) {
    i860.push( i861[i + 0] );
  }
  i856.passDefinedKeywords = i860
  var i863 = i857[22]
  var i862 = []
  for(var i = 0; i < i863.length; i += 1) {
    i862.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i863[i + 0]) );
  }
  i856.passDefinedKeywordGroups = i862
  var i865 = i857[23]
  var i864 = []
  for(var i = 0; i < i865.length; i += 1) {
    i864.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i865[i + 0]) );
  }
  i856.variants = i864
  var i867 = i857[24]
  var i866 = []
  for(var i = 0; i < i867.length; i += 1) {
    i866.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i867[i + 0]) );
  }
  i856.excludedVariants = i866
  i856.hasDepthReader = !!i857[25]
  return i856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i869 = data
  i868.val = i869[0]
  i868.name = i869[1]
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i871 = data
  i870.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i871[0], i870.src)
  i870.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i871[1], i870.dst)
  i870.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i871[2], i870.op)
  return i870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i873 = data
  i872.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i873[0], i872.pass)
  i872.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i873[1], i872.fail)
  i872.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i873[2], i872.zFail)
  i872.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i873[3], i872.comp)
  return i872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i877 = data
  i876.name = i877[0]
  i876.value = i877[1]
  return i876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i881 = data
  var i883 = i881[0]
  var i882 = []
  for(var i = 0; i < i883.length; i += 1) {
    i882.push( i883[i + 0] );
  }
  i880.keywords = i882
  i880.hasDiscard = !!i881[1]
  return i880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i887 = data
  i886.passId = i887[0]
  i886.subShaderIndex = i887[1]
  var i889 = i887[2]
  var i888 = []
  for(var i = 0; i < i889.length; i += 1) {
    i888.push( i889[i + 0] );
  }
  i886.keywords = i888
  i886.vertexProgram = i887[3]
  i886.fragmentProgram = i887[4]
  i886.exportedForWebGl2 = !!i887[5]
  i886.readDepth = !!i887[6]
  return i886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i893 = data
  request.r(i893[0], i893[1], 0, i892, 'shader')
  i892.pass = i893[2]
  return i892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i897 = data
  i896.name = i897[0]
  i896.type = i897[1]
  i896.value = new pc.Vec4( i897[2], i897[3], i897[4], i897[5] )
  i896.textureValue = i897[6]
  i896.shaderPropertyFlag = i897[7]
  return i896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i899 = data
  i898.name = i899[0]
  request.r(i899[1], i899[2], 0, i898, 'texture')
  i898.aabb = i899[3]
  i898.vertices = i899[4]
  i898.triangles = i899[5]
  i898.textureRect = UnityEngine.Rect.MinMaxRect(i899[6], i899[7], i899[8], i899[9])
  i898.packedRect = UnityEngine.Rect.MinMaxRect(i899[10], i899[11], i899[12], i899[13])
  i898.border = new pc.Vec4( i899[14], i899[15], i899[16], i899[17] )
  i898.transparency = i899[18]
  i898.bounds = i899[19]
  i898.pixelsPerUnit = i899[20]
  i898.textureWidth = i899[21]
  i898.textureHeight = i899[22]
  i898.nativeSize = new pc.Vec2( i899[23], i899[24] )
  i898.pivot = new pc.Vec2( i899[25], i899[26] )
  i898.textureRectOffset = new pc.Vec2( i899[27], i899[28] )
  return i898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i901 = data
  i900.name = i901[0]
  return i900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i903 = data
  i902.name = i903[0]
  i902.ascent = i903[1]
  i902.originalLineHeight = i903[2]
  i902.fontSize = i903[3]
  var i905 = i903[4]
  var i904 = []
  for(var i = 0; i < i905.length; i += 1) {
    i904.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i905[i + 0]) );
  }
  i902.characterInfo = i904
  request.r(i903[5], i903[6], 0, i902, 'texture')
  i902.originalFontSize = i903[7]
  return i902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i909 = data
  i908.index = i909[0]
  i908.advance = i909[1]
  i908.bearing = i909[2]
  i908.glyphWidth = i909[3]
  i908.glyphHeight = i909[4]
  i908.minX = i909[5]
  i908.maxX = i909[6]
  i908.minY = i909[7]
  i908.maxY = i909[8]
  i908.uvBottomLeftX = i909[9]
  i908.uvBottomLeftY = i909[10]
  i908.uvBottomRightX = i909[11]
  i908.uvBottomRightY = i909[12]
  i908.uvTopLeftX = i909[13]
  i908.uvTopLeftY = i909[14]
  i908.uvTopRightX = i909[15]
  i908.uvTopRightY = i909[16]
  return i908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i911 = data
  i910.name = i911[0]
  i910.bytes64 = i911[1]
  i910.data = i911[2]
  return i910
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i912 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i913 = data
  var i915 = i913[0]
  var i914 = []
  for(var i = 0; i < i915.length; i += 2) {
  request.r(i915[i + 0], i915[i + 1], 2, i914, '')
  }
  i912.atlasAssets = i914
  i912.scale = i913[1]
  request.r(i913[2], i913[3], 0, i912, 'skeletonJSON')
  i912.isUpgradingBlendModeMaterials = !!i913[4]
  i912.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i913[5], i912.blendModeMaterials)
  var i917 = i913[6]
  var i916 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i917.length; i += 2) {
  request.r(i917[i + 0], i917[i + 1], 1, i916, '')
  }
  i912.skeletonDataModifiers = i916
  var i919 = i913[7]
  var i918 = []
  for(var i = 0; i < i919.length; i += 1) {
    i918.push( i919[i + 0] );
  }
  i912.fromAnimation = i918
  var i921 = i913[8]
  var i920 = []
  for(var i = 0; i < i921.length; i += 1) {
    i920.push( i921[i + 0] );
  }
  i912.toAnimation = i920
  i912.duration = i913[9]
  i912.defaultMix = i913[10]
  request.r(i913[11], i913[12], 0, i912, 'controller')
  return i912
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i924 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i925 = data
  i924.applyAdditiveMaterial = !!i925[0]
  var i927 = i925[1]
  var i926 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i927.length; i += 1) {
    i926.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i927[i + 0]));
  }
  i924.additiveMaterials = i926
  var i929 = i925[2]
  var i928 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i929.length; i += 1) {
    i928.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i929[i + 0]));
  }
  i924.multiplyMaterials = i928
  var i931 = i925[3]
  var i930 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i931.length; i += 1) {
    i930.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i931[i + 0]));
  }
  i924.screenMaterials = i930
  i924.requiresBlendModeMaterials = !!i925[4]
  return i924
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i934 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i935 = data
  i934.pageName = i935[0]
  request.r(i935[1], i935[2], 0, i934, 'material')
  return i934
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i938 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i939 = data
  request.r(i939[0], i939[1], 0, i938, 'atlasFile')
  var i941 = i939[2]
  var i940 = []
  for(var i = 0; i < i941.length; i += 2) {
  request.r(i941[i + 0], i941[i + 1], 2, i940, '')
  }
  i938.materials = i940
  i938.textureLoadingMode = i939[3]
  request.r(i939[4], i939[5], 0, i938, 'onDemandTextureLoader')
  return i938
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i942 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i943 = data
  request.r(i943[0], i943[1], 0, i942, 'atlas')
  i942.normalStyle = i943[2]
  i942.normalSpacingOffset = i943[3]
  i942.boldStyle = i943[4]
  i942.boldSpacing = i943[5]
  i942.italicStyle = i943[6]
  i942.tabSize = i943[7]
  i942.hashCode = i943[8]
  request.r(i943[9], i943[10], 0, i942, 'material')
  i942.materialHashCode = i943[11]
  i942.m_Version = i943[12]
  i942.m_SourceFontFileGUID = i943[13]
  request.r(i943[14], i943[15], 0, i942, 'm_SourceFontFile_EditorRef')
  request.r(i943[16], i943[17], 0, i942, 'm_SourceFontFile')
  i942.m_AtlasPopulationMode = i943[18]
  i942.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i943[19], i942.m_FaceInfo)
  var i945 = i943[20]
  var i944 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i945.length; i += 1) {
    i944.add(request.d('UnityEngine.TextCore.Glyph', i945[i + 0]));
  }
  i942.m_GlyphTable = i944
  var i947 = i943[21]
  var i946 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i947.length; i += 1) {
    i946.add(request.d('TMPro.TMP_Character', i947[i + 0]));
  }
  i942.m_CharacterTable = i946
  var i949 = i943[22]
  var i948 = []
  for(var i = 0; i < i949.length; i += 2) {
  request.r(i949[i + 0], i949[i + 1], 2, i948, '')
  }
  i942.m_AtlasTextures = i948
  i942.m_AtlasTextureIndex = i943[23]
  i942.m_IsMultiAtlasTexturesEnabled = !!i943[24]
  i942.m_ClearDynamicDataOnBuild = !!i943[25]
  var i951 = i943[26]
  var i950 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i951.length; i += 1) {
    i950.add(request.d('UnityEngine.TextCore.GlyphRect', i951[i + 0]));
  }
  i942.m_UsedGlyphRects = i950
  var i953 = i943[27]
  var i952 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i953.length; i += 1) {
    i952.add(request.d('UnityEngine.TextCore.GlyphRect', i953[i + 0]));
  }
  i942.m_FreeGlyphRects = i952
  i942.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i943[28], i942.m_fontInfo)
  i942.m_AtlasWidth = i943[29]
  i942.m_AtlasHeight = i943[30]
  i942.m_AtlasPadding = i943[31]
  i942.m_AtlasRenderMode = i943[32]
  var i955 = i943[33]
  var i954 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i955.length; i += 1) {
    i954.add(request.d('TMPro.TMP_Glyph', i955[i + 0]));
  }
  i942.m_glyphInfoList = i954
  i942.m_KerningTable = request.d('TMPro.KerningTable', i943[34], i942.m_KerningTable)
  i942.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i943[35], i942.m_FontFeatureTable)
  var i957 = i943[36]
  var i956 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i957.length; i += 2) {
  request.r(i957[i + 0], i957[i + 1], 1, i956, '')
  }
  i942.fallbackFontAssets = i956
  var i959 = i943[37]
  var i958 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i959.length; i += 2) {
  request.r(i959[i + 0], i959[i + 1], 1, i958, '')
  }
  i942.m_FallbackFontAssetTable = i958
  i942.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i943[38], i942.m_CreationSettings)
  var i961 = i943[39]
  var i960 = []
  for(var i = 0; i < i961.length; i += 1) {
    i960.push( request.d('TMPro.TMP_FontWeightPair', i961[i + 0]) );
  }
  i942.m_FontWeightTable = i960
  var i963 = i943[40]
  var i962 = []
  for(var i = 0; i < i963.length; i += 1) {
    i962.push( request.d('TMPro.TMP_FontWeightPair', i963[i + 0]) );
  }
  i942.fontWeights = i962
  return i942
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i964 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i965 = data
  i964.m_FaceIndex = i965[0]
  i964.m_FamilyName = i965[1]
  i964.m_StyleName = i965[2]
  i964.m_PointSize = i965[3]
  i964.m_Scale = i965[4]
  i964.m_UnitsPerEM = i965[5]
  i964.m_LineHeight = i965[6]
  i964.m_AscentLine = i965[7]
  i964.m_CapLine = i965[8]
  i964.m_MeanLine = i965[9]
  i964.m_Baseline = i965[10]
  i964.m_DescentLine = i965[11]
  i964.m_SuperscriptOffset = i965[12]
  i964.m_SuperscriptSize = i965[13]
  i964.m_SubscriptOffset = i965[14]
  i964.m_SubscriptSize = i965[15]
  i964.m_UnderlineOffset = i965[16]
  i964.m_UnderlineThickness = i965[17]
  i964.m_StrikethroughOffset = i965[18]
  i964.m_StrikethroughThickness = i965[19]
  i964.m_TabWidth = i965[20]
  return i964
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i968 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i969 = data
  i968.m_Index = i969[0]
  i968.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i969[1], i968.m_Metrics)
  i968.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i969[2], i968.m_GlyphRect)
  i968.m_Scale = i969[3]
  i968.m_AtlasIndex = i969[4]
  i968.m_ClassDefinitionType = i969[5]
  return i968
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i970 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i971 = data
  i970.m_Width = i971[0]
  i970.m_Height = i971[1]
  i970.m_HorizontalBearingX = i971[2]
  i970.m_HorizontalBearingY = i971[3]
  i970.m_HorizontalAdvance = i971[4]
  return i970
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i972 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i973 = data
  i972.m_X = i973[0]
  i972.m_Y = i973[1]
  i972.m_Width = i973[2]
  i972.m_Height = i973[3]
  return i972
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i976 = root || request.c( 'TMPro.TMP_Character' )
  var i977 = data
  i976.m_ElementType = i977[0]
  i976.m_Unicode = i977[1]
  i976.m_GlyphIndex = i977[2]
  i976.m_Scale = i977[3]
  return i976
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i982 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i983 = data
  i982.Name = i983[0]
  i982.PointSize = i983[1]
  i982.Scale = i983[2]
  i982.CharacterCount = i983[3]
  i982.LineHeight = i983[4]
  i982.Baseline = i983[5]
  i982.Ascender = i983[6]
  i982.CapHeight = i983[7]
  i982.Descender = i983[8]
  i982.CenterLine = i983[9]
  i982.SuperscriptOffset = i983[10]
  i982.SubscriptOffset = i983[11]
  i982.SubSize = i983[12]
  i982.Underline = i983[13]
  i982.UnderlineThickness = i983[14]
  i982.strikethrough = i983[15]
  i982.strikethroughThickness = i983[16]
  i982.TabWidth = i983[17]
  i982.Padding = i983[18]
  i982.AtlasWidth = i983[19]
  i982.AtlasHeight = i983[20]
  return i982
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i986 = root || request.c( 'TMPro.TMP_Glyph' )
  var i987 = data
  i986.id = i987[0]
  i986.x = i987[1]
  i986.y = i987[2]
  i986.width = i987[3]
  i986.height = i987[4]
  i986.xOffset = i987[5]
  i986.yOffset = i987[6]
  i986.xAdvance = i987[7]
  i986.scale = i987[8]
  return i986
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i988 = root || request.c( 'TMPro.KerningTable' )
  var i989 = data
  var i991 = i989[0]
  var i990 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i991.length; i += 1) {
    i990.add(request.d('TMPro.KerningPair', i991[i + 0]));
  }
  i988.kerningPairs = i990
  return i988
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i994 = root || request.c( 'TMPro.KerningPair' )
  var i995 = data
  i994.xOffset = i995[0]
  i994.m_FirstGlyph = i995[1]
  i994.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i995[2], i994.m_FirstGlyphAdjustments)
  i994.m_SecondGlyph = i995[3]
  i994.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i995[4], i994.m_SecondGlyphAdjustments)
  i994.m_IgnoreSpacingAdjustments = !!i995[5]
  return i994
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i996 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i997 = data
  var i999 = i997[0]
  var i998 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i999.length; i += 1) {
    i998.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i999[i + 0]));
  }
  i996.m_GlyphPairAdjustmentRecords = i998
  return i996
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1002 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1003 = data
  i1002.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1003[0], i1002.m_FirstAdjustmentRecord)
  i1002.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1003[1], i1002.m_SecondAdjustmentRecord)
  i1002.m_FeatureLookupFlags = i1003[2]
  return i1002
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1006 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1007 = data
  i1006.sourceFontFileName = i1007[0]
  i1006.sourceFontFileGUID = i1007[1]
  i1006.pointSizeSamplingMode = i1007[2]
  i1006.pointSize = i1007[3]
  i1006.padding = i1007[4]
  i1006.packingMode = i1007[5]
  i1006.atlasWidth = i1007[6]
  i1006.atlasHeight = i1007[7]
  i1006.characterSetSelectionMode = i1007[8]
  i1006.characterSequence = i1007[9]
  i1006.referencedFontAssetGUID = i1007[10]
  i1006.referencedTextAssetGUID = i1007[11]
  i1006.fontStyle = i1007[12]
  i1006.fontStyleModifier = i1007[13]
  i1006.renderMode = i1007[14]
  i1006.includeFontFeatures = !!i1007[15]
  return i1006
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1010 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1011 = data
  request.r(i1011[0], i1011[1], 0, i1010, 'regularTypeface')
  request.r(i1011[2], i1011[3], 0, i1010, 'italicTypeface')
  return i1010
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1012 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1013 = data
  i1012.useSafeMode = !!i1013[0]
  i1012.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1013[1], i1012.safeModeOptions)
  i1012.timeScale = i1013[2]
  i1012.unscaledTimeScale = i1013[3]
  i1012.useSmoothDeltaTime = !!i1013[4]
  i1012.maxSmoothUnscaledTime = i1013[5]
  i1012.rewindCallbackMode = i1013[6]
  i1012.showUnityEditorReport = !!i1013[7]
  i1012.logBehaviour = i1013[8]
  i1012.drawGizmos = !!i1013[9]
  i1012.defaultRecyclable = !!i1013[10]
  i1012.defaultAutoPlay = i1013[11]
  i1012.defaultUpdateType = i1013[12]
  i1012.defaultTimeScaleIndependent = !!i1013[13]
  i1012.defaultEaseType = i1013[14]
  i1012.defaultEaseOvershootOrAmplitude = i1013[15]
  i1012.defaultEasePeriod = i1013[16]
  i1012.defaultAutoKill = !!i1013[17]
  i1012.defaultLoopType = i1013[18]
  i1012.debugMode = !!i1013[19]
  i1012.debugStoreTargetId = !!i1013[20]
  i1012.showPreviewPanel = !!i1013[21]
  i1012.storeSettingsLocation = i1013[22]
  i1012.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1013[23], i1012.modules)
  i1012.createASMDEF = !!i1013[24]
  i1012.showPlayingTweens = !!i1013[25]
  i1012.showPausedTweens = !!i1013[26]
  return i1012
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1014 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1015 = data
  i1014.logBehaviour = i1015[0]
  i1014.nestedTweenFailureBehaviour = i1015[1]
  return i1014
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1016 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1017 = data
  i1016.showPanel = !!i1017[0]
  i1016.audioEnabled = !!i1017[1]
  i1016.physicsEnabled = !!i1017[2]
  i1016.physics2DEnabled = !!i1017[3]
  i1016.spriteEnabled = !!i1017[4]
  i1016.uiEnabled = !!i1017[5]
  i1016.textMeshProEnabled = !!i1017[6]
  i1016.tk2DEnabled = !!i1017[7]
  i1016.deAudioEnabled = !!i1017[8]
  i1016.deUnityExtendedEnabled = !!i1017[9]
  i1016.epoOutlineEnabled = !!i1017[10]
  return i1016
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1018 = root || request.c( 'TMPro.TMP_Settings' )
  var i1019 = data
  i1018.m_enableWordWrapping = !!i1019[0]
  i1018.m_enableKerning = !!i1019[1]
  i1018.m_enableExtraPadding = !!i1019[2]
  i1018.m_enableTintAllSprites = !!i1019[3]
  i1018.m_enableParseEscapeCharacters = !!i1019[4]
  i1018.m_EnableRaycastTarget = !!i1019[5]
  i1018.m_GetFontFeaturesAtRuntime = !!i1019[6]
  i1018.m_missingGlyphCharacter = i1019[7]
  i1018.m_warningsDisabled = !!i1019[8]
  request.r(i1019[9], i1019[10], 0, i1018, 'm_defaultFontAsset')
  i1018.m_defaultFontAssetPath = i1019[11]
  i1018.m_defaultFontSize = i1019[12]
  i1018.m_defaultAutoSizeMinRatio = i1019[13]
  i1018.m_defaultAutoSizeMaxRatio = i1019[14]
  i1018.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1019[15], i1019[16] )
  i1018.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1019[17], i1019[18] )
  i1018.m_autoSizeTextContainer = !!i1019[19]
  i1018.m_IsTextObjectScaleStatic = !!i1019[20]
  var i1021 = i1019[21]
  var i1020 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1021.length; i += 2) {
  request.r(i1021[i + 0], i1021[i + 1], 1, i1020, '')
  }
  i1018.m_fallbackFontAssets = i1020
  i1018.m_matchMaterialPreset = !!i1019[22]
  request.r(i1019[23], i1019[24], 0, i1018, 'm_defaultSpriteAsset')
  i1018.m_defaultSpriteAssetPath = i1019[25]
  i1018.m_enableEmojiSupport = !!i1019[26]
  i1018.m_MissingCharacterSpriteUnicode = i1019[27]
  i1018.m_defaultColorGradientPresetsPath = i1019[28]
  request.r(i1019[29], i1019[30], 0, i1018, 'm_defaultStyleSheet')
  i1018.m_StyleSheetsResourcePath = i1019[31]
  request.r(i1019[32], i1019[33], 0, i1018, 'm_leadingCharacters')
  request.r(i1019[34], i1019[35], 0, i1018, 'm_followingCharacters')
  i1018.m_UseModernHangulLineBreakingRules = !!i1019[36]
  return i1018
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1022 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1023 = data
  i1022.m_GlyphIndex = i1023[0]
  i1022.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1023[1], i1022.m_GlyphValueRecord)
  return i1022
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1024 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1025 = data
  i1024.m_XPlacement = i1025[0]
  i1024.m_YPlacement = i1025[1]
  i1024.m_XAdvance = i1025[2]
  i1024.m_YAdvance = i1025[3]
  return i1024
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1026 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1027 = data
  request.r(i1027[0], i1027[1], 0, i1026, 'spriteSheet')
  var i1029 = i1027[2]
  var i1028 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1029.length; i += 1) {
    i1028.add(request.d('TMPro.TMP_Sprite', i1029[i + 0]));
  }
  i1026.spriteInfoList = i1028
  var i1031 = i1027[3]
  var i1030 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1031.length; i += 2) {
  request.r(i1031[i + 0], i1031[i + 1], 1, i1030, '')
  }
  i1026.fallbackSpriteAssets = i1030
  i1026.hashCode = i1027[4]
  request.r(i1027[5], i1027[6], 0, i1026, 'material')
  i1026.materialHashCode = i1027[7]
  i1026.m_Version = i1027[8]
  i1026.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1027[9], i1026.m_FaceInfo)
  var i1033 = i1027[10]
  var i1032 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1033.length; i += 1) {
    i1032.add(request.d('TMPro.TMP_SpriteCharacter', i1033[i + 0]));
  }
  i1026.m_SpriteCharacterTable = i1032
  var i1035 = i1027[11]
  var i1034 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1035.length; i += 1) {
    i1034.add(request.d('TMPro.TMP_SpriteGlyph', i1035[i + 0]));
  }
  i1026.m_SpriteGlyphTable = i1034
  return i1026
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1038 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1039 = data
  i1038.name = i1039[0]
  i1038.hashCode = i1039[1]
  i1038.unicode = i1039[2]
  i1038.pivot = new pc.Vec2( i1039[3], i1039[4] )
  request.r(i1039[5], i1039[6], 0, i1038, 'sprite')
  i1038.id = i1039[7]
  i1038.x = i1039[8]
  i1038.y = i1039[9]
  i1038.width = i1039[10]
  i1038.height = i1039[11]
  i1038.xOffset = i1039[12]
  i1038.yOffset = i1039[13]
  i1038.xAdvance = i1039[14]
  i1038.scale = i1039[15]
  return i1038
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1044 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1045 = data
  i1044.m_Name = i1045[0]
  i1044.m_HashCode = i1045[1]
  i1044.m_ElementType = i1045[2]
  i1044.m_Unicode = i1045[3]
  i1044.m_GlyphIndex = i1045[4]
  i1044.m_Scale = i1045[5]
  return i1044
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1048 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1049 = data
  request.r(i1049[0], i1049[1], 0, i1048, 'sprite')
  i1048.m_Index = i1049[2]
  i1048.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1049[3], i1048.m_Metrics)
  i1048.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1049[4], i1048.m_GlyphRect)
  i1048.m_Scale = i1049[5]
  i1048.m_AtlasIndex = i1049[6]
  i1048.m_ClassDefinitionType = i1049[7]
  return i1048
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1050 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1051 = data
  var i1053 = i1051[0]
  var i1052 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1053.length; i += 1) {
    i1052.add(request.d('TMPro.TMP_Style', i1053[i + 0]));
  }
  i1050.m_StyleList = i1052
  return i1050
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1056 = root || request.c( 'TMPro.TMP_Style' )
  var i1057 = data
  i1056.m_Name = i1057[0]
  i1056.m_HashCode = i1057[1]
  i1056.m_OpeningDefinition = i1057[2]
  i1056.m_ClosingDefinition = i1057[3]
  i1056.m_OpeningTagArray = i1057[4]
  i1056.m_ClosingTagArray = i1057[5]
  i1056.m_OpeningTagUnicodeArray = i1057[6]
  i1056.m_ClosingTagUnicodeArray = i1057[7]
  return i1056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1059 = data
  var i1061 = i1059[0]
  var i1060 = []
  for(var i = 0; i < i1061.length; i += 1) {
    i1060.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1061[i + 0]) );
  }
  i1058.files = i1060
  i1058.componentToPrefabIds = i1059[1]
  return i1058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1065 = data
  i1064.path = i1065[0]
  request.r(i1065[1], i1065[2], 0, i1064, 'unityObject')
  return i1064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1067 = data
  var i1069 = i1067[0]
  var i1068 = []
  for(var i = 0; i < i1069.length; i += 1) {
    i1068.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1069[i + 0]) );
  }
  i1066.scriptsExecutionOrder = i1068
  var i1071 = i1067[1]
  var i1070 = []
  for(var i = 0; i < i1071.length; i += 1) {
    i1070.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1071[i + 0]) );
  }
  i1066.sortingLayers = i1070
  var i1073 = i1067[2]
  var i1072 = []
  for(var i = 0; i < i1073.length; i += 1) {
    i1072.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1073[i + 0]) );
  }
  i1066.cullingLayers = i1072
  i1066.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1067[3], i1066.timeSettings)
  i1066.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1067[4], i1066.physicsSettings)
  i1066.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1067[5], i1066.physics2DSettings)
  i1066.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1067[6], i1066.qualitySettings)
  i1066.enableRealtimeShadows = !!i1067[7]
  i1066.enableAutoInstancing = !!i1067[8]
  i1066.enableStaticBatching = !!i1067[9]
  i1066.enableDynamicBatching = !!i1067[10]
  i1066.lightmapEncodingQuality = i1067[11]
  i1066.desiredColorSpace = i1067[12]
  var i1075 = i1067[13]
  var i1074 = []
  for(var i = 0; i < i1075.length; i += 1) {
    i1074.push( i1075[i + 0] );
  }
  i1066.allTags = i1074
  return i1066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1079 = data
  i1078.name = i1079[0]
  i1078.value = i1079[1]
  return i1078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1083 = data
  i1082.id = i1083[0]
  i1082.name = i1083[1]
  i1082.value = i1083[2]
  return i1082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1087 = data
  i1086.id = i1087[0]
  i1086.name = i1087[1]
  return i1086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1089 = data
  i1088.fixedDeltaTime = i1089[0]
  i1088.maximumDeltaTime = i1089[1]
  i1088.timeScale = i1089[2]
  i1088.maximumParticleTimestep = i1089[3]
  return i1088
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1091 = data
  i1090.gravity = new pc.Vec3( i1091[0], i1091[1], i1091[2] )
  i1090.defaultSolverIterations = i1091[3]
  i1090.bounceThreshold = i1091[4]
  i1090.autoSyncTransforms = !!i1091[5]
  i1090.autoSimulation = !!i1091[6]
  var i1093 = i1091[7]
  var i1092 = []
  for(var i = 0; i < i1093.length; i += 1) {
    i1092.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1093[i + 0]) );
  }
  i1090.collisionMatrix = i1092
  return i1090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1096 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1097 = data
  i1096.enabled = !!i1097[0]
  i1096.layerId = i1097[1]
  i1096.otherLayerId = i1097[2]
  return i1096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1099 = data
  request.r(i1099[0], i1099[1], 0, i1098, 'material')
  i1098.gravity = new pc.Vec2( i1099[2], i1099[3] )
  i1098.positionIterations = i1099[4]
  i1098.velocityIterations = i1099[5]
  i1098.velocityThreshold = i1099[6]
  i1098.maxLinearCorrection = i1099[7]
  i1098.maxAngularCorrection = i1099[8]
  i1098.maxTranslationSpeed = i1099[9]
  i1098.maxRotationSpeed = i1099[10]
  i1098.baumgarteScale = i1099[11]
  i1098.baumgarteTOIScale = i1099[12]
  i1098.timeToSleep = i1099[13]
  i1098.linearSleepTolerance = i1099[14]
  i1098.angularSleepTolerance = i1099[15]
  i1098.defaultContactOffset = i1099[16]
  i1098.autoSimulation = !!i1099[17]
  i1098.queriesHitTriggers = !!i1099[18]
  i1098.queriesStartInColliders = !!i1099[19]
  i1098.callbacksOnDisable = !!i1099[20]
  i1098.reuseCollisionCallbacks = !!i1099[21]
  i1098.autoSyncTransforms = !!i1099[22]
  var i1101 = i1099[23]
  var i1100 = []
  for(var i = 0; i < i1101.length; i += 1) {
    i1100.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1101[i + 0]) );
  }
  i1098.collisionMatrix = i1100
  return i1098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1104 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1105 = data
  i1104.enabled = !!i1105[0]
  i1104.layerId = i1105[1]
  i1104.otherLayerId = i1105[2]
  return i1104
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1107 = data
  var i1109 = i1107[0]
  var i1108 = []
  for(var i = 0; i < i1109.length; i += 1) {
    i1108.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1109[i + 0]) );
  }
  i1106.qualityLevels = i1108
  var i1111 = i1107[1]
  var i1110 = []
  for(var i = 0; i < i1111.length; i += 1) {
    i1110.push( i1111[i + 0] );
  }
  i1106.names = i1110
  i1106.shadows = i1107[2]
  i1106.anisotropicFiltering = i1107[3]
  i1106.antiAliasing = i1107[4]
  i1106.lodBias = i1107[5]
  i1106.shadowCascades = i1107[6]
  i1106.shadowDistance = i1107[7]
  i1106.shadowmaskMode = i1107[8]
  i1106.shadowProjection = i1107[9]
  i1106.shadowResolution = i1107[10]
  i1106.softParticles = !!i1107[11]
  i1106.softVegetation = !!i1107[12]
  i1106.activeColorSpace = i1107[13]
  i1106.desiredColorSpace = i1107[14]
  i1106.masterTextureLimit = i1107[15]
  i1106.maxQueuedFrames = i1107[16]
  i1106.particleRaycastBudget = i1107[17]
  i1106.pixelLightCount = i1107[18]
  i1106.realtimeReflectionProbes = !!i1107[19]
  i1106.shadowCascade2Split = i1107[20]
  i1106.shadowCascade4Split = new pc.Vec3( i1107[21], i1107[22], i1107[23] )
  i1106.streamingMipmapsActive = !!i1107[24]
  i1106.vSyncCount = i1107[25]
  i1106.asyncUploadBufferSize = i1107[26]
  i1106.asyncUploadTimeSlice = i1107[27]
  i1106.billboardsFaceCameraPosition = !!i1107[28]
  i1106.shadowNearPlaneOffset = i1107[29]
  i1106.streamingMipmapsMemoryBudget = i1107[30]
  i1106.maximumLODLevel = i1107[31]
  i1106.streamingMipmapsAddAllCameras = !!i1107[32]
  i1106.streamingMipmapsMaxLevelReduction = i1107[33]
  i1106.streamingMipmapsRenderersPerFrame = i1107[34]
  i1106.resolutionScalingFixedDPIFactor = i1107[35]
  i1106.streamingMipmapsMaxFileIORequests = i1107[36]
  i1106.currentQualityLevel = i1107[37]
  return i1106
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1114 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1115 = data
  i1114.xPlacement = i1115[0]
  i1114.yPlacement = i1115[1]
  i1114.xAdvance = i1115[2]
  i1114.yAdvance = i1115[3]
  return i1114
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"frontSortingLayerID":0,"frontSortingOrder":1,"backSortingLayerID":2,"backSortingOrder":3,"alphaCutoff":4,"sprite":5,"tileMode":7,"isCustomRangeActive":8,"spriteSortPoint":9,"enabled":10,"sharedMaterial":11,"sharedMaterials":13,"receiveShadows":14,"shadowCastingMode":15,"sortingLayerID":16,"sortingOrder":17,"lightmapIndex":18,"lightmapSceneIndex":19,"lightmapScaleOffset":20,"lightProbeUsage":24,"reflectionProbeUsage":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"59":[60],"61":[60],"62":[60],"63":[60],"64":[60],"65":[60],"66":[67],"68":[16],"69":[70],"71":[70],"72":[70],"73":[70],"74":[70],"75":[70],"76":[70],"77":[7],"78":[7],"79":[7],"80":[7],"81":[7],"82":[7],"83":[7],"84":[7],"85":[7],"86":[7],"87":[7],"88":[7],"89":[7],"90":[16],"91":[31],"92":[93],"94":[93],"25":[24],"95":[96],"97":[16],"98":[16],"99":[100],"101":[102],"103":[31,34],"104":[105],"106":[102],"107":[108],"109":[102],"110":[102],"111":[112],"113":[112],"114":[102],"115":[116],"117":[1],"118":[116],"119":[24],"120":[24],"27":[25],"29":[28,24],"121":[24],"26":[25],"122":[24],"123":[24],"124":[24],"125":[24],"126":[24],"127":[24],"128":[24],"129":[24],"130":[24],"131":[28,24],"132":[24],"133":[24],"134":[24],"135":[24],"136":[28,24],"137":[24],"138":[19],"139":[19],"20":[19],"140":[19],"141":[16],"142":[16],"143":[144],"145":[16],"146":[147],"148":[24],"149":[28,24],"32":[31],"105":[28,24],"150":[151,31],"102":[31],"152":[31,34],"153":[70],"154":[7],"155":[147],"156":[112],"157":[24],"158":[31,24],"38":[24,28],"159":[24],"160":[28,24],"161":[31],"162":[28,24],"163":[24],"164":[116]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Material","UnityEngine.MonoBehaviour","DragItem","UnityEngine.BoxCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Shader","Disk","Tray","UnityEngine.GameObject","Slot","UnityEngine.Texture2D","PackTarget","HandHint","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","TrayManager","UnityEngine.SpriteMask","ConveyorBelt","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","EndCart_Win","UnityEngine.MeshRenderer","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonDataAsset","UnityEngine.MeshFilter","Button","UnityEngine.UI.Button","GameManager","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","AudioManager","UnityEngine.AudioSource","UnityEngine.AudioClip","PackManager","TutorialManager","ScalePopLoop","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","NotiBox","UnityEngine.CanvasGroup","EndCart_Lose","RotateLoop","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.Font","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","AutoFlip","Book","CameraAutoSize","CheckSize","Spine.Unity.Examples.BasicPlatformerController","UnityEngine.CharacterController","Spine.Unity.Examples.SkeletonGhost","Spine.Unity.SkeletonRenderer","Spine.Unity.Examples.RenderExistingMesh","Spine.Unity.Examples.SkeletonGraphicRenderTexture","Spine.Unity.SkeletonGraphic","Spine.Unity.Examples.SkeletonRenderTexture","Spine.Unity.Examples.SkeletonRenderTextureFadeout","Spine.Unity.Examples.SkeletonRenderTextureBase","Spine.Unity.Examples.SkeletonRagdoll","Spine.Unity.Examples.SkeletonRagdoll2D","Spine.Unity.Examples.SkeletonUtilityEyeConstraint","Spine.Unity.SkeletonUtilityBone","Spine.Unity.Examples.SkeletonUtilityGroundConstraint","Spine.Unity.Examples.SpineGauge","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonPartsRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.62f3";

Deserializers.productName = "Prj_Demo";

Deserializers.lunaInitializationTime = "12/18/2025 04:11:57";

Deserializers.lunaDaysRunning = "20.2";

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

Deserializers.runtimeAnalysisExcludedMethodsCount = "5460";

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

Deserializers.buildID = "295aeb32-df35-4e99-abf3-04df76ede59f";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

