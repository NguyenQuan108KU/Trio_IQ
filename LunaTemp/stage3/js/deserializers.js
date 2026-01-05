var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i546 = root || request.c( 'UnityEngine.JointSpring' )
  var i547 = data
  i546.spring = i547[0]
  i546.damper = i547[1]
  i546.targetPosition = i547[2]
  return i546
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i548 = root || request.c( 'UnityEngine.JointMotor' )
  var i549 = data
  i548.m_TargetVelocity = i549[0]
  i548.m_Force = i549[1]
  i548.m_FreeSpin = i549[2]
  return i548
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i550 = root || request.c( 'UnityEngine.JointLimits' )
  var i551 = data
  i550.m_Min = i551[0]
  i550.m_Max = i551[1]
  i550.m_Bounciness = i551[2]
  i550.m_BounceMinVelocity = i551[3]
  i550.m_ContactDistance = i551[4]
  i550.minBounce = i551[5]
  i550.maxBounce = i551[6]
  return i550
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i552 = root || request.c( 'UnityEngine.JointDrive' )
  var i553 = data
  i552.m_PositionSpring = i553[0]
  i552.m_PositionDamper = i553[1]
  i552.m_MaximumForce = i553[2]
  i552.m_UseAcceleration = i553[3]
  return i552
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i554 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i555 = data
  i554.m_Spring = i555[0]
  i554.m_Damper = i555[1]
  return i554
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i556 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i557 = data
  i556.m_Limit = i557[0]
  i556.m_Bounciness = i557[1]
  i556.m_ContactDistance = i557[2]
  return i556
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i558 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i559 = data
  i558.m_ExtremumSlip = i559[0]
  i558.m_ExtremumValue = i559[1]
  i558.m_AsymptoteSlip = i559[2]
  i558.m_AsymptoteValue = i559[3]
  i558.m_Stiffness = i559[4]
  return i558
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i560 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i561 = data
  i560.m_LowerAngle = i561[0]
  i560.m_UpperAngle = i561[1]
  return i560
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i562 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i563 = data
  i562.m_MotorSpeed = i563[0]
  i562.m_MaximumMotorTorque = i563[1]
  return i562
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i564 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i565 = data
  i564.m_DampingRatio = i565[0]
  i564.m_Frequency = i565[1]
  i564.m_Angle = i565[2]
  return i564
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i566 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i567 = data
  i566.m_LowerTranslation = i567[0]
  i566.m_UpperTranslation = i567[1]
  return i566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i569 = data
  i568.position = new pc.Vec3( i569[0], i569[1], i569[2] )
  i568.scale = new pc.Vec3( i569[3], i569[4], i569[5] )
  i568.rotation = new pc.Quat(i569[6], i569[7], i569[8], i569[9])
  return i568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i571 = data
  i570.color = new pc.Color(i571[0], i571[1], i571[2], i571[3])
  request.r(i571[4], i571[5], 0, i570, 'sprite')
  i570.flipX = !!i571[6]
  i570.flipY = !!i571[7]
  i570.drawMode = i571[8]
  i570.size = new pc.Vec2( i571[9], i571[10] )
  i570.tileMode = i571[11]
  i570.adaptiveModeThreshold = i571[12]
  i570.maskInteraction = i571[13]
  i570.spriteSortPoint = i571[14]
  i570.enabled = !!i571[15]
  request.r(i571[16], i571[17], 0, i570, 'sharedMaterial')
  var i573 = i571[18]
  var i572 = []
  for(var i = 0; i < i573.length; i += 2) {
  request.r(i573[i + 0], i573[i + 1], 2, i572, '')
  }
  i570.sharedMaterials = i572
  i570.receiveShadows = !!i571[19]
  i570.shadowCastingMode = i571[20]
  i570.sortingLayerID = i571[21]
  i570.sortingOrder = i571[22]
  i570.lightmapIndex = i571[23]
  i570.lightmapSceneIndex = i571[24]
  i570.lightmapScaleOffset = new pc.Vec4( i571[25], i571[26], i571[27], i571[28] )
  i570.lightProbeUsage = i571[29]
  i570.reflectionProbeUsage = i571[30]
  return i570
}

Deserializers["DragItem"] = function (request, data, root) {
  var i576 = root || request.c( 'DragItem' )
  var i577 = data
  i576.focusOutlineSize = i577[0]
  i576.outlineTweenTime = i577[1]
  i576.itemType = i577[2]
  return i576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i579 = data
  i578.usedByComposite = !!i579[0]
  i578.autoTiling = !!i579[1]
  i578.size = new pc.Vec2( i579[2], i579[3] )
  i578.edgeRadius = i579[4]
  i578.enabled = !!i579[5]
  i578.isTrigger = !!i579[6]
  i578.usedByEffector = !!i579[7]
  i578.density = i579[8]
  i578.offset = new pc.Vec2( i579[9], i579[10] )
  request.r(i579[11], i579[12], 0, i578, 'material')
  return i578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i581 = data
  i580.bodyType = i581[0]
  request.r(i581[1], i581[2], 0, i580, 'material')
  i580.simulated = !!i581[3]
  i580.useAutoMass = !!i581[4]
  i580.mass = i581[5]
  i580.drag = i581[6]
  i580.angularDrag = i581[7]
  i580.gravityScale = i581[8]
  i580.collisionDetectionMode = i581[9]
  i580.sleepMode = i581[10]
  i580.constraints = i581[11]
  return i580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i583 = data
  i582.name = i583[0]
  i582.tagId = i583[1]
  i582.enabled = !!i583[2]
  i582.isStatic = !!i583[3]
  i582.layer = i583[4]
  return i582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i584 = root || new pc.UnityMaterial()
  var i585 = data
  i584.name = i585[0]
  request.r(i585[1], i585[2], 0, i584, 'shader')
  i584.renderQueue = i585[3]
  i584.enableInstancing = !!i585[4]
  var i587 = i585[5]
  var i586 = []
  for(var i = 0; i < i587.length; i += 1) {
    i586.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i587[i + 0]) );
  }
  i584.floatParameters = i586
  var i589 = i585[6]
  var i588 = []
  for(var i = 0; i < i589.length; i += 1) {
    i588.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i589[i + 0]) );
  }
  i584.colorParameters = i588
  var i591 = i585[7]
  var i590 = []
  for(var i = 0; i < i591.length; i += 1) {
    i590.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i591[i + 0]) );
  }
  i584.vectorParameters = i590
  var i593 = i585[8]
  var i592 = []
  for(var i = 0; i < i593.length; i += 1) {
    i592.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i593[i + 0]) );
  }
  i584.textureParameters = i592
  var i595 = i585[9]
  var i594 = []
  for(var i = 0; i < i595.length; i += 1) {
    i594.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i595[i + 0]) );
  }
  i584.materialFlags = i594
  return i584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i599 = data
  i598.name = i599[0]
  i598.value = i599[1]
  return i598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i603 = data
  i602.name = i603[0]
  i602.value = new pc.Color(i603[1], i603[2], i603[3], i603[4])
  return i602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i607 = data
  i606.name = i607[0]
  i606.value = new pc.Vec4( i607[1], i607[2], i607[3], i607[4] )
  return i606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i611 = data
  i610.name = i611[0]
  request.r(i611[1], i611[2], 0, i610, 'value')
  return i610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i615 = data
  i614.name = i615[0]
  i614.enabled = !!i615[1]
  return i614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i617 = data
  i616.name = i617[0]
  i616.width = i617[1]
  i616.height = i617[2]
  i616.mipmapCount = i617[3]
  i616.anisoLevel = i617[4]
  i616.filterMode = i617[5]
  i616.hdr = !!i617[6]
  i616.format = i617[7]
  i616.wrapMode = i617[8]
  i616.alphaIsTransparency = !!i617[9]
  i616.alphaSource = i617[10]
  i616.graphicsFormat = i617[11]
  i616.sRGBTexture = !!i617[12]
  i616.desiredColorSpace = i617[13]
  i616.wrapU = i617[14]
  i616.wrapV = i617[15]
  return i616
}

Deserializers["Disk"] = function (request, data, root) {
  var i618 = root || request.c( 'Disk' )
  var i619 = data
  i618.requiredCount = i619[0]
  i618.moveDistance = i619[1]
  i618.moveTime = i619[2]
  return i618
}

Deserializers["Tray"] = function (request, data, root) {
  var i620 = root || request.c( 'Tray' )
  var i621 = data
  i620.spacing = i621[0]
  i620.moveTime = i621[1]
  request.r(i621[2], i621[3], 0, i620, 'diskPrefab')
  request.r(i621[4], i621[5], 0, i620, 'diskTransform')
  i620.shrinkTime = i621[6]
  i620.itemToDiskTime = i621[7]
  i620.attachDelay = i621[8]
  i620.followSmooth = i621[9]
  i620.isCompleted = !!i621[10]
  var i623 = i621[11]
  var i622 = []
  for(var i = 0; i < i623.length; i += 2) {
  request.r(i623[i + 0], i623[i + 1], 2, i622, '')
  }
  i620.slots = i622
  i620.diskItemScale = new pc.Vec3( i621[12], i621[13], i621[14] )
  return i620
}

Deserializers["Slot"] = function (request, data, root) {
  var i626 = root || request.c( 'Slot' )
  var i627 = data
  request.r(i627[0], i627[1], 0, i626, 'anchor')
  request.r(i627[2], i627[3], 0, i626, 'currentItem')
  return i626
}

Deserializers["HandHint"] = function (request, data, root) {
  var i628 = root || request.c( 'HandHint' )
  var i629 = data
  request.r(i629[0], i629[1], 0, i628, 'previewRenderer')
  return i628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i631 = data
  i630.name = i631[0]
  i630.index = i631[1]
  i630.startup = !!i631[2]
  return i630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i633 = data
  i632.aspect = i633[0]
  i632.orthographic = !!i633[1]
  i632.orthographicSize = i633[2]
  i632.backgroundColor = new pc.Color(i633[3], i633[4], i633[5], i633[6])
  i632.nearClipPlane = i633[7]
  i632.farClipPlane = i633[8]
  i632.fieldOfView = i633[9]
  i632.depth = i633[10]
  i632.clearFlags = i633[11]
  i632.cullingMask = i633[12]
  i632.rect = i633[13]
  request.r(i633[14], i633[15], 0, i632, 'targetTexture')
  i632.usePhysicalProperties = !!i633[16]
  i632.focalLength = i633[17]
  i632.sensorSize = new pc.Vec2( i633[18], i633[19] )
  i632.lensShift = new pc.Vec2( i633[20], i633[21] )
  i632.gateFit = i633[22]
  i632.commandBufferCount = i633[23]
  i632.cameraType = i633[24]
  i632.enabled = !!i633[25]
  return i632
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i634 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i635 = data
  request.r(i635[0], i635[1], 0, i634, 'm_FirstSelected')
  i634.m_sendNavigationEvents = !!i635[2]
  i634.m_DragThreshold = i635[3]
  return i634
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i636 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i637 = data
  i636.m_HorizontalAxis = i637[0]
  i636.m_VerticalAxis = i637[1]
  i636.m_SubmitButton = i637[2]
  i636.m_CancelButton = i637[3]
  i636.m_InputActionsPerSecond = i637[4]
  i636.m_RepeatDelay = i637[5]
  i636.m_ForceModuleActive = !!i637[6]
  i636.m_SendPointerHoverToParent = !!i637[7]
  return i636
}

Deserializers["TrayManager"] = function (request, data, root) {
  var i638 = root || request.c( 'TrayManager' )
  var i639 = data
  i638.spacing = i639[0]
  i638.visibleCount = i639[1]
  i638.moveTime = i639[2]
  var i641 = i639[3]
  var i640 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i641.length; i += 2) {
  request.r(i641[i + 0], i641[i + 1], 1, i640, '')
  }
  i638.listTray = i640
  i638.curve = new pc.AnimationCurve( { keys_flow: i639[4] } )
  i638.canCountIdle = !!i639[5]
  i638.spawnHeightMultiplier = i639[6]
  i638.isFirstTutorial = !!i639[7]
  i638.tutorialDelay = i639[8]
  i638.idleTimer = i639[9]
  i638.tutorialEnabled = !!i639[10]
  request.r(i639[11], i639[12], 0, i638, 'manualTray')
  request.r(i639[13], i639[14], 0, i638, 'manualItem')
  i638.justEndedInteract = !!i639[15]
  i638.step = i639[16]
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i645 = data
  i644.frontSortingLayerID = i645[0]
  i644.frontSortingOrder = i645[1]
  i644.backSortingLayerID = i645[2]
  i644.backSortingOrder = i645[3]
  i644.alphaCutoff = i645[4]
  request.r(i645[5], i645[6], 0, i644, 'sprite')
  i644.tileMode = i645[7]
  i644.isCustomRangeActive = !!i645[8]
  i644.spriteSortPoint = i645[9]
  i644.enabled = !!i645[10]
  request.r(i645[11], i645[12], 0, i644, 'sharedMaterial')
  var i647 = i645[13]
  var i646 = []
  for(var i = 0; i < i647.length; i += 2) {
  request.r(i647[i + 0], i647[i + 1], 2, i646, '')
  }
  i644.sharedMaterials = i646
  i644.receiveShadows = !!i645[14]
  i644.shadowCastingMode = i645[15]
  i644.sortingLayerID = i645[16]
  i644.sortingOrder = i645[17]
  i644.lightmapIndex = i645[18]
  i644.lightmapSceneIndex = i645[19]
  i644.lightmapScaleOffset = new pc.Vec4( i645[20], i645[21], i645[22], i645[23] )
  i644.lightProbeUsage = i645[24]
  i644.reflectionProbeUsage = i645[25]
  return i644
}

Deserializers["ConveyorBelt"] = function (request, data, root) {
  var i648 = root || request.c( 'ConveyorBelt' )
  var i649 = data
  i648.speed = i649[0]
  i648.spacing = i649[1]
  i648.leftLimit = i649[2]
  i648.removeFirstCount = i649[3]
  request.r(i649[4], i649[5], 0, i648, 'tutorial')
  return i648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i651 = data
  i650.pivot = new pc.Vec2( i651[0], i651[1] )
  i650.anchorMin = new pc.Vec2( i651[2], i651[3] )
  i650.anchorMax = new pc.Vec2( i651[4], i651[5] )
  i650.sizeDelta = new pc.Vec2( i651[6], i651[7] )
  i650.anchoredPosition3D = new pc.Vec3( i651[8], i651[9], i651[10] )
  i650.rotation = new pc.Quat(i651[11], i651[12], i651[13], i651[14])
  i650.scale = new pc.Vec3( i651[15], i651[16], i651[17] )
  return i650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i653 = data
  i652.planeDistance = i653[0]
  i652.referencePixelsPerUnit = i653[1]
  i652.isFallbackOverlay = !!i653[2]
  i652.renderMode = i653[3]
  i652.renderOrder = i653[4]
  i652.sortingLayerName = i653[5]
  i652.sortingOrder = i653[6]
  i652.scaleFactor = i653[7]
  request.r(i653[8], i653[9], 0, i652, 'worldCamera')
  i652.overrideSorting = !!i653[10]
  i652.pixelPerfect = !!i653[11]
  i652.targetDisplay = i653[12]
  i652.overridePixelPerfect = !!i653[13]
  i652.enabled = !!i653[14]
  return i652
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i654 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i655 = data
  i654.m_UiScaleMode = i655[0]
  i654.m_ReferencePixelsPerUnit = i655[1]
  i654.m_ScaleFactor = i655[2]
  i654.m_ReferenceResolution = new pc.Vec2( i655[3], i655[4] )
  i654.m_ScreenMatchMode = i655[5]
  i654.m_MatchWidthOrHeight = i655[6]
  i654.m_PhysicalUnit = i655[7]
  i654.m_FallbackScreenDPI = i655[8]
  i654.m_DefaultSpriteDPI = i655[9]
  i654.m_DynamicPixelsPerUnit = i655[10]
  i654.m_PresetInfoIsWorld = !!i655[11]
  return i654
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i656 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i657 = data
  i656.m_IgnoreReversedGraphics = !!i657[0]
  i656.m_BlockingObjects = i657[1]
  i656.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i657[2] )
  return i656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i659 = data
  i658.cullTransparentMesh = !!i659[0]
  return i658
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i660 = root || request.c( 'UnityEngine.UI.Image' )
  var i661 = data
  request.r(i661[0], i661[1], 0, i660, 'm_Sprite')
  i660.m_Type = i661[2]
  i660.m_PreserveAspect = !!i661[3]
  i660.m_FillCenter = !!i661[4]
  i660.m_FillMethod = i661[5]
  i660.m_FillAmount = i661[6]
  i660.m_FillClockwise = !!i661[7]
  i660.m_FillOrigin = i661[8]
  i660.m_UseSpriteMesh = !!i661[9]
  i660.m_PixelsPerUnitMultiplier = i661[10]
  request.r(i661[11], i661[12], 0, i660, 'm_Material')
  i660.m_Maskable = !!i661[13]
  i660.m_Color = new pc.Color(i661[14], i661[15], i661[16], i661[17])
  i660.m_RaycastTarget = !!i661[18]
  i660.m_RaycastPadding = new pc.Vec4( i661[19], i661[20], i661[21], i661[22] )
  return i660
}

Deserializers["EndCart_Win"] = function (request, data, root) {
  var i662 = root || request.c( 'EndCart_Win' )
  var i663 = data
  request.r(i663[0], i663[1], 0, i662, 'confettiLeft')
  request.r(i663[2], i663[3], 0, i662, 'confettiRight')
  request.r(i663[4], i663[5], 0, i662, 'winText')
  request.r(i663[6], i663[7], 0, i662, 'chest')
  request.r(i663[8], i663[9], 0, i662, 'button')
  i662.textDelay = i663[10]
  i662.chestDelay = i663[11]
  return i662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i665 = data
  request.r(i665[0], i665[1], 0, i664, 'additionalVertexStreams')
  i664.enabled = !!i665[2]
  request.r(i665[3], i665[4], 0, i664, 'sharedMaterial')
  var i667 = i665[5]
  var i666 = []
  for(var i = 0; i < i667.length; i += 2) {
  request.r(i667[i + 0], i667[i + 1], 2, i666, '')
  }
  i664.sharedMaterials = i666
  i664.receiveShadows = !!i665[6]
  i664.shadowCastingMode = i665[7]
  i664.sortingLayerID = i665[8]
  i664.sortingOrder = i665[9]
  i664.lightmapIndex = i665[10]
  i664.lightmapSceneIndex = i665[11]
  i664.lightmapScaleOffset = new pc.Vec4( i665[12], i665[13], i665[14], i665[15] )
  i664.lightProbeUsage = i665[16]
  i664.reflectionProbeUsage = i665[17]
  return i664
}

Deserializers["Spine.Unity.SkeletonAnimation"] = function (request, data, root) {
  var i668 = root || request.c( 'Spine.Unity.SkeletonAnimation' )
  var i669 = data
  i668.loop = !!i669[0]
  i668.timeScale = i669[1]
  request.r(i669[2], i669[3], 0, i668, 'skeletonDataAsset')
  i668.initialSkinName = i669[4]
  i668.fixPrefabOverrideViaMeshFilter = i669[5]
  i668.initialFlipX = !!i669[6]
  i668.initialFlipY = !!i669[7]
  i668.updateWhenInvisible = i669[8]
  i668.zSpacing = i669[9]
  i668.useClipping = !!i669[10]
  i668.immutableTriangles = !!i669[11]
  i668.pmaVertexColors = !!i669[12]
  i668.clearStateOnDisable = !!i669[13]
  i668.tintBlack = !!i669[14]
  i668.singleSubmesh = !!i669[15]
  i668.fixDrawOrder = !!i669[16]
  i668.addNormals = !!i669[17]
  i668.calculateTangents = !!i669[18]
  i668.maskInteraction = i669[19]
  i668.maskMaterials = request.d('Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials', i669[20], i668.maskMaterials)
  i668.disableRenderingOnOverride = !!i669[21]
  i668.updateTiming = i669[22]
  i668.unscaledTime = !!i669[23]
  i668._animationName = i669[24]
  var i671 = i669[25]
  var i670 = []
  for(var i = 0; i < i671.length; i += 1) {
    i670.push( i671[i + 0] );
  }
  i668.separatorSlotNames = i670
  i668.physicsPositionInheritanceFactor = new pc.Vec2( i669[26], i669[27] )
  i668.physicsRotationInheritanceFactor = i669[28]
  request.r(i669[29], i669[30], 0, i668, 'physicsMovementRelativeTo')
  return i668
}

Deserializers["Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials"] = function (request, data, root) {
  var i672 = root || request.c( 'Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials' )
  var i673 = data
  var i675 = i673[0]
  var i674 = []
  for(var i = 0; i < i675.length; i += 2) {
  request.r(i675[i + 0], i675[i + 1], 2, i674, '')
  }
  i672.materialsMaskDisabled = i674
  var i677 = i673[1]
  var i676 = []
  for(var i = 0; i < i677.length; i += 2) {
  request.r(i677[i + 0], i677[i + 1], 2, i676, '')
  }
  i672.materialsInsideMask = i676
  var i679 = i673[2]
  var i678 = []
  for(var i = 0; i < i679.length; i += 2) {
  request.r(i679[i + 0], i679[i + 1], 2, i678, '')
  }
  i672.materialsOutsideMask = i678
  return i672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i683 = data
  request.r(i683[0], i683[1], 0, i682, 'sharedMesh')
  return i682
}

Deserializers["Button"] = function (request, data, root) {
  var i684 = root || request.c( 'Button' )
  var i685 = data
  return i684
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i686 = root || request.c( 'UnityEngine.UI.Button' )
  var i687 = data
  i686.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i687[0], i686.m_OnClick)
  i686.m_Navigation = request.d('UnityEngine.UI.Navigation', i687[1], i686.m_Navigation)
  i686.m_Transition = i687[2]
  i686.m_Colors = request.d('UnityEngine.UI.ColorBlock', i687[3], i686.m_Colors)
  i686.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i687[4], i686.m_SpriteState)
  i686.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i687[5], i686.m_AnimationTriggers)
  i686.m_Interactable = !!i687[6]
  request.r(i687[7], i687[8], 0, i686, 'm_TargetGraphic')
  return i686
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i688 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i689 = data
  i688.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i689[0], i688.m_PersistentCalls)
  return i688
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i690 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i691 = data
  var i693 = i691[0]
  var i692 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i693.length; i += 1) {
    i692.add(request.d('UnityEngine.Events.PersistentCall', i693[i + 0]));
  }
  i690.m_Calls = i692
  return i690
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i696 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i697 = data
  request.r(i697[0], i697[1], 0, i696, 'm_Target')
  i696.m_TargetAssemblyTypeName = i697[2]
  i696.m_MethodName = i697[3]
  i696.m_Mode = i697[4]
  i696.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i697[5], i696.m_Arguments)
  i696.m_CallState = i697[6]
  return i696
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i698 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i699 = data
  request.r(i699[0], i699[1], 0, i698, 'm_ObjectArgument')
  i698.m_ObjectArgumentAssemblyTypeName = i699[2]
  i698.m_IntArgument = i699[3]
  i698.m_FloatArgument = i699[4]
  i698.m_StringArgument = i699[5]
  i698.m_BoolArgument = !!i699[6]
  return i698
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i700 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i701 = data
  i700.m_Mode = i701[0]
  i700.m_WrapAround = !!i701[1]
  request.r(i701[2], i701[3], 0, i700, 'm_SelectOnUp')
  request.r(i701[4], i701[5], 0, i700, 'm_SelectOnDown')
  request.r(i701[6], i701[7], 0, i700, 'm_SelectOnLeft')
  request.r(i701[8], i701[9], 0, i700, 'm_SelectOnRight')
  return i700
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i702 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i703 = data
  i702.m_NormalColor = new pc.Color(i703[0], i703[1], i703[2], i703[3])
  i702.m_HighlightedColor = new pc.Color(i703[4], i703[5], i703[6], i703[7])
  i702.m_PressedColor = new pc.Color(i703[8], i703[9], i703[10], i703[11])
  i702.m_SelectedColor = new pc.Color(i703[12], i703[13], i703[14], i703[15])
  i702.m_DisabledColor = new pc.Color(i703[16], i703[17], i703[18], i703[19])
  i702.m_ColorMultiplier = i703[20]
  i702.m_FadeDuration = i703[21]
  return i702
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i704 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i705 = data
  request.r(i705[0], i705[1], 0, i704, 'm_HighlightedSprite')
  request.r(i705[2], i705[3], 0, i704, 'm_PressedSprite')
  request.r(i705[4], i705[5], 0, i704, 'm_SelectedSprite')
  request.r(i705[6], i705[7], 0, i704, 'm_DisabledSprite')
  return i704
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i706 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i707 = data
  i706.m_NormalTrigger = i707[0]
  i706.m_HighlightedTrigger = i707[1]
  i706.m_PressedTrigger = i707[2]
  i706.m_SelectedTrigger = i707[3]
  i706.m_DisabledTrigger = i707[4]
  return i706
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i708 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i709 = data
  i708.m_hasFontAssetChanged = !!i709[0]
  request.r(i709[1], i709[2], 0, i708, 'm_baseMaterial')
  i708.m_maskOffset = new pc.Vec4( i709[3], i709[4], i709[5], i709[6] )
  i708.m_text = i709[7]
  i708.m_isRightToLeft = !!i709[8]
  request.r(i709[9], i709[10], 0, i708, 'm_fontAsset')
  request.r(i709[11], i709[12], 0, i708, 'm_sharedMaterial')
  var i711 = i709[13]
  var i710 = []
  for(var i = 0; i < i711.length; i += 2) {
  request.r(i711[i + 0], i711[i + 1], 2, i710, '')
  }
  i708.m_fontSharedMaterials = i710
  request.r(i709[14], i709[15], 0, i708, 'm_fontMaterial')
  var i713 = i709[16]
  var i712 = []
  for(var i = 0; i < i713.length; i += 2) {
  request.r(i713[i + 0], i713[i + 1], 2, i712, '')
  }
  i708.m_fontMaterials = i712
  i708.m_fontColor32 = UnityEngine.Color32.ConstructColor(i709[17], i709[18], i709[19], i709[20])
  i708.m_fontColor = new pc.Color(i709[21], i709[22], i709[23], i709[24])
  i708.m_enableVertexGradient = !!i709[25]
  i708.m_colorMode = i709[26]
  i708.m_fontColorGradient = request.d('TMPro.VertexGradient', i709[27], i708.m_fontColorGradient)
  request.r(i709[28], i709[29], 0, i708, 'm_fontColorGradientPreset')
  request.r(i709[30], i709[31], 0, i708, 'm_spriteAsset')
  i708.m_tintAllSprites = !!i709[32]
  request.r(i709[33], i709[34], 0, i708, 'm_StyleSheet')
  i708.m_TextStyleHashCode = i709[35]
  i708.m_overrideHtmlColors = !!i709[36]
  i708.m_faceColor = UnityEngine.Color32.ConstructColor(i709[37], i709[38], i709[39], i709[40])
  i708.m_fontSize = i709[41]
  i708.m_fontSizeBase = i709[42]
  i708.m_fontWeight = i709[43]
  i708.m_enableAutoSizing = !!i709[44]
  i708.m_fontSizeMin = i709[45]
  i708.m_fontSizeMax = i709[46]
  i708.m_fontStyle = i709[47]
  i708.m_HorizontalAlignment = i709[48]
  i708.m_VerticalAlignment = i709[49]
  i708.m_textAlignment = i709[50]
  i708.m_characterSpacing = i709[51]
  i708.m_wordSpacing = i709[52]
  i708.m_lineSpacing = i709[53]
  i708.m_lineSpacingMax = i709[54]
  i708.m_paragraphSpacing = i709[55]
  i708.m_charWidthMaxAdj = i709[56]
  i708.m_enableWordWrapping = !!i709[57]
  i708.m_wordWrappingRatios = i709[58]
  i708.m_overflowMode = i709[59]
  request.r(i709[60], i709[61], 0, i708, 'm_linkedTextComponent')
  request.r(i709[62], i709[63], 0, i708, 'parentLinkedComponent')
  i708.m_enableKerning = !!i709[64]
  i708.m_enableExtraPadding = !!i709[65]
  i708.checkPaddingRequired = !!i709[66]
  i708.m_isRichText = !!i709[67]
  i708.m_parseCtrlCharacters = !!i709[68]
  i708.m_isOrthographic = !!i709[69]
  i708.m_isCullingEnabled = !!i709[70]
  i708.m_horizontalMapping = i709[71]
  i708.m_verticalMapping = i709[72]
  i708.m_uvLineOffset = i709[73]
  i708.m_geometrySortingOrder = i709[74]
  i708.m_IsTextObjectScaleStatic = !!i709[75]
  i708.m_VertexBufferAutoSizeReduction = !!i709[76]
  i708.m_useMaxVisibleDescender = !!i709[77]
  i708.m_pageToDisplay = i709[78]
  i708.m_margin = new pc.Vec4( i709[79], i709[80], i709[81], i709[82] )
  i708.m_isUsingLegacyAnimationComponent = !!i709[83]
  i708.m_isVolumetricText = !!i709[84]
  request.r(i709[85], i709[86], 0, i708, 'm_Material')
  i708.m_Maskable = !!i709[87]
  i708.m_Color = new pc.Color(i709[88], i709[89], i709[90], i709[91])
  i708.m_RaycastTarget = !!i709[92]
  i708.m_RaycastPadding = new pc.Vec4( i709[93], i709[94], i709[95], i709[96] )
  return i708
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i714 = root || request.c( 'TMPro.VertexGradient' )
  var i715 = data
  i714.topLeft = new pc.Color(i715[0], i715[1], i715[2], i715[3])
  i714.topRight = new pc.Color(i715[4], i715[5], i715[6], i715[7])
  i714.bottomLeft = new pc.Color(i715[8], i715[9], i715[10], i715[11])
  i714.bottomRight = new pc.Color(i715[12], i715[13], i715[14], i715[15])
  return i714
}

Deserializers["AudioManager"] = function (request, data, root) {
  var i716 = root || request.c( 'AudioManager' )
  var i717 = data
  request.r(i717[0], i717[1], 0, i716, 'bgmSource')
  request.r(i717[2], i717[3], 0, i716, 'sfxSource')
  request.r(i717[4], i717[5], 0, i716, 'bgm')
  request.r(i717[6], i717[7], 0, i716, 'drag')
  request.r(i717[8], i717[9], 0, i716, 'drog')
  request.r(i717[10], i717[11], 0, i716, 'lose')
  request.r(i717[12], i717[13], 0, i716, 'pop')
  request.r(i717[14], i717[15], 0, i716, 'wood')
  request.r(i717[16], i717[17], 0, i716, 'win')
  request.r(i717[18], i717[19], 0, i716, 'warningTick')
  request.r(i717[20], i717[21], 0, i716, 'match')
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i719 = data
  request.r(i719[0], i719[1], 0, i718, 'clip')
  request.r(i719[2], i719[3], 0, i718, 'outputAudioMixerGroup')
  i718.playOnAwake = !!i719[4]
  i718.loop = !!i719[5]
  i718.time = i719[6]
  i718.volume = i719[7]
  i718.pitch = i719[8]
  i718.enabled = !!i719[9]
  return i718
}

Deserializers["GameManager"] = function (request, data, root) {
  var i720 = root || request.c( 'GameManager' )
  var i721 = data
  request.r(i721[0], i721[1], 0, i720, 'pointText')
  i720.point = i721[2]
  request.r(i721[3], i721[4], 0, i720, 'ECWin')
  i720.startTimer = !!i721[5]
  i720.isClickToLog = !!i721[6]
  i720.clicksToLog = i721[7]
  i720.isTimer = !!i721[8]
  i720.audio = !!i721[9]
  i720.clickCount = i721[10]
  i720.isClick = !!i721[11]
  i720.finishGame = !!i721[12]
  i720.startGame = !!i721[13]
  i720.isCheckWin = !!i721[14]
  i720.isCheckLose = !!i721[15]
  return i720
}

Deserializers["TutorialManager"] = function (request, data, root) {
  var i722 = root || request.c( 'TutorialManager' )
  var i723 = data
  request.r(i723[0], i723[1], 0, i722, 'handPrefab')
  return i722
}

Deserializers["ScalePopLoop"] = function (request, data, root) {
  var i724 = root || request.c( 'ScalePopLoop' )
  var i725 = data
  i724.minScale = new pc.Vec3( i725[0], i725[1], i725[2] )
  i724.maxScale = new pc.Vec3( i725[3], i725[4], i725[5] )
  i724.duration = i725[6]
  i724.ease = i725[7]
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i727 = data
  i726.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i727[0], i726.main)
  i726.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i727[1], i726.colorBySpeed)
  i726.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i727[2], i726.colorOverLifetime)
  i726.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i727[3], i726.emission)
  i726.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i727[4], i726.rotationBySpeed)
  i726.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i727[5], i726.rotationOverLifetime)
  i726.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i727[6], i726.shape)
  i726.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i727[7], i726.sizeBySpeed)
  i726.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i727[8], i726.sizeOverLifetime)
  i726.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i727[9], i726.textureSheetAnimation)
  i726.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i727[10], i726.velocityOverLifetime)
  i726.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i727[11], i726.noise)
  i726.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i727[12], i726.inheritVelocity)
  i726.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i727[13], i726.forceOverLifetime)
  i726.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i727[14], i726.limitVelocityOverLifetime)
  i726.useAutoRandomSeed = !!i727[15]
  i726.randomSeed = i727[16]
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i728 = root || new pc.ParticleSystemMain()
  var i729 = data
  i728.duration = i729[0]
  i728.loop = !!i729[1]
  i728.prewarm = !!i729[2]
  i728.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i729[3], i728.startDelay)
  i728.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i729[4], i728.startLifetime)
  i728.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i729[5], i728.startSpeed)
  i728.startSize3D = !!i729[6]
  i728.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i729[7], i728.startSizeX)
  i728.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i729[8], i728.startSizeY)
  i728.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i729[9], i728.startSizeZ)
  i728.startRotation3D = !!i729[10]
  i728.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i729[11], i728.startRotationX)
  i728.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i729[12], i728.startRotationY)
  i728.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i729[13], i728.startRotationZ)
  i728.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i729[14], i728.startColor)
  i728.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i729[15], i728.gravityModifier)
  i728.simulationSpace = i729[16]
  request.r(i729[17], i729[18], 0, i728, 'customSimulationSpace')
  i728.simulationSpeed = i729[19]
  i728.useUnscaledTime = !!i729[20]
  i728.scalingMode = i729[21]
  i728.playOnAwake = !!i729[22]
  i728.maxParticles = i729[23]
  i728.emitterVelocityMode = i729[24]
  i728.stopAction = i729[25]
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i730 = root || new pc.MinMaxCurve()
  var i731 = data
  i730.mode = i731[0]
  i730.curveMin = new pc.AnimationCurve( { keys_flow: i731[1] } )
  i730.curveMax = new pc.AnimationCurve( { keys_flow: i731[2] } )
  i730.curveMultiplier = i731[3]
  i730.constantMin = i731[4]
  i730.constantMax = i731[5]
  return i730
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i732 = root || new pc.MinMaxGradient()
  var i733 = data
  i732.mode = i733[0]
  i732.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i733[1], i732.gradientMin)
  i732.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i733[2], i732.gradientMax)
  i732.colorMin = new pc.Color(i733[3], i733[4], i733[5], i733[6])
  i732.colorMax = new pc.Color(i733[7], i733[8], i733[9], i733[10])
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i735 = data
  i734.mode = i735[0]
  var i737 = i735[1]
  var i736 = []
  for(var i = 0; i < i737.length; i += 1) {
    i736.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i737[i + 0]) );
  }
  i734.colorKeys = i736
  var i739 = i735[2]
  var i738 = []
  for(var i = 0; i < i739.length; i += 1) {
    i738.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i739[i + 0]) );
  }
  i734.alphaKeys = i738
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i743 = data
  i742.color = new pc.Color(i743[0], i743[1], i743[2], i743[3])
  i742.time = i743[4]
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i747 = data
  i746.alpha = i747[0]
  i746.time = i747[1]
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i748 = root || new pc.ParticleSystemColorBySpeed()
  var i749 = data
  i748.enabled = !!i749[0]
  i748.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i749[1], i748.color)
  i748.range = new pc.Vec2( i749[2], i749[3] )
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i750 = root || new pc.ParticleSystemColorOverLifetime()
  var i751 = data
  i750.enabled = !!i751[0]
  i750.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i751[1], i750.color)
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i752 = root || new pc.ParticleSystemEmitter()
  var i753 = data
  i752.enabled = !!i753[0]
  i752.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i753[1], i752.rateOverTime)
  i752.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i753[2], i752.rateOverDistance)
  var i755 = i753[3]
  var i754 = []
  for(var i = 0; i < i755.length; i += 1) {
    i754.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i755[i + 0]) );
  }
  i752.bursts = i754
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i758 = root || new pc.ParticleSystemBurst()
  var i759 = data
  i758.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[0], i758.count)
  i758.cycleCount = i759[1]
  i758.minCount = i759[2]
  i758.maxCount = i759[3]
  i758.repeatInterval = i759[4]
  i758.time = i759[5]
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i760 = root || new pc.ParticleSystemRotationBySpeed()
  var i761 = data
  i760.enabled = !!i761[0]
  i760.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i761[1], i760.x)
  i760.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i761[2], i760.y)
  i760.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i761[3], i760.z)
  i760.separateAxes = !!i761[4]
  i760.range = new pc.Vec2( i761[5], i761[6] )
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i762 = root || new pc.ParticleSystemRotationOverLifetime()
  var i763 = data
  i762.enabled = !!i763[0]
  i762.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[1], i762.x)
  i762.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[2], i762.y)
  i762.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[3], i762.z)
  i762.separateAxes = !!i763[4]
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i764 = root || new pc.ParticleSystemShape()
  var i765 = data
  i764.enabled = !!i765[0]
  i764.shapeType = i765[1]
  i764.randomDirectionAmount = i765[2]
  i764.sphericalDirectionAmount = i765[3]
  i764.randomPositionAmount = i765[4]
  i764.alignToDirection = !!i765[5]
  i764.radius = i765[6]
  i764.radiusMode = i765[7]
  i764.radiusSpread = i765[8]
  i764.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i765[9], i764.radiusSpeed)
  i764.radiusThickness = i765[10]
  i764.angle = i765[11]
  i764.length = i765[12]
  i764.boxThickness = new pc.Vec3( i765[13], i765[14], i765[15] )
  i764.meshShapeType = i765[16]
  request.r(i765[17], i765[18], 0, i764, 'mesh')
  request.r(i765[19], i765[20], 0, i764, 'meshRenderer')
  request.r(i765[21], i765[22], 0, i764, 'skinnedMeshRenderer')
  i764.useMeshMaterialIndex = !!i765[23]
  i764.meshMaterialIndex = i765[24]
  i764.useMeshColors = !!i765[25]
  i764.normalOffset = i765[26]
  i764.arc = i765[27]
  i764.arcMode = i765[28]
  i764.arcSpread = i765[29]
  i764.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i765[30], i764.arcSpeed)
  i764.donutRadius = i765[31]
  i764.position = new pc.Vec3( i765[32], i765[33], i765[34] )
  i764.rotation = new pc.Vec3( i765[35], i765[36], i765[37] )
  i764.scale = new pc.Vec3( i765[38], i765[39], i765[40] )
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i766 = root || new pc.ParticleSystemSizeBySpeed()
  var i767 = data
  i766.enabled = !!i767[0]
  i766.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[1], i766.x)
  i766.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[2], i766.y)
  i766.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[3], i766.z)
  i766.separateAxes = !!i767[4]
  i766.range = new pc.Vec2( i767[5], i767[6] )
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i768 = root || new pc.ParticleSystemSizeOverLifetime()
  var i769 = data
  i768.enabled = !!i769[0]
  i768.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i769[1], i768.x)
  i768.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i769[2], i768.y)
  i768.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i769[3], i768.z)
  i768.separateAxes = !!i769[4]
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i770 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i771 = data
  i770.enabled = !!i771[0]
  i770.mode = i771[1]
  i770.animation = i771[2]
  i770.numTilesX = i771[3]
  i770.numTilesY = i771[4]
  i770.useRandomRow = !!i771[5]
  i770.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i771[6], i770.frameOverTime)
  i770.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i771[7], i770.startFrame)
  i770.cycleCount = i771[8]
  i770.rowIndex = i771[9]
  i770.flipU = i771[10]
  i770.flipV = i771[11]
  i770.spriteCount = i771[12]
  var i773 = i771[13]
  var i772 = []
  for(var i = 0; i < i773.length; i += 2) {
  request.r(i773[i + 0], i773[i + 1], 2, i772, '')
  }
  i770.sprites = i772
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i776 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i777 = data
  i776.enabled = !!i777[0]
  i776.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i777[1], i776.x)
  i776.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i777[2], i776.y)
  i776.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i777[3], i776.z)
  i776.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i777[4], i776.radial)
  i776.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i777[5], i776.speedModifier)
  i776.space = i777[6]
  i776.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i777[7], i776.orbitalX)
  i776.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i777[8], i776.orbitalY)
  i776.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i777[9], i776.orbitalZ)
  i776.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i777[10], i776.orbitalOffsetX)
  i776.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i777[11], i776.orbitalOffsetY)
  i776.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i777[12], i776.orbitalOffsetZ)
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i778 = root || new pc.ParticleSystemNoise()
  var i779 = data
  i778.enabled = !!i779[0]
  i778.separateAxes = !!i779[1]
  i778.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i779[2], i778.strengthX)
  i778.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i779[3], i778.strengthY)
  i778.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i779[4], i778.strengthZ)
  i778.frequency = i779[5]
  i778.damping = !!i779[6]
  i778.octaveCount = i779[7]
  i778.octaveMultiplier = i779[8]
  i778.octaveScale = i779[9]
  i778.quality = i779[10]
  i778.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i779[11], i778.scrollSpeed)
  i778.scrollSpeedMultiplier = i779[12]
  i778.remapEnabled = !!i779[13]
  i778.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i779[14], i778.remapX)
  i778.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i779[15], i778.remapY)
  i778.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i779[16], i778.remapZ)
  i778.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i779[17], i778.positionAmount)
  i778.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i779[18], i778.rotationAmount)
  i778.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i779[19], i778.sizeAmount)
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i780 = root || new pc.ParticleSystemInheritVelocity()
  var i781 = data
  i780.enabled = !!i781[0]
  i780.mode = i781[1]
  i780.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i781[2], i780.curve)
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i782 = root || new pc.ParticleSystemForceOverLifetime()
  var i783 = data
  i782.enabled = !!i783[0]
  i782.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i783[1], i782.x)
  i782.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i783[2], i782.y)
  i782.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i783[3], i782.z)
  i782.space = i783[4]
  i782.randomized = !!i783[5]
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i784 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i785 = data
  i784.enabled = !!i785[0]
  i784.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i785[1], i784.limit)
  i784.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i785[2], i784.limitX)
  i784.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i785[3], i784.limitY)
  i784.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i785[4], i784.limitZ)
  i784.dampen = i785[5]
  i784.separateAxes = !!i785[6]
  i784.space = i785[7]
  i784.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i785[8], i784.drag)
  i784.multiplyDragByParticleSize = !!i785[9]
  i784.multiplyDragByParticleVelocity = !!i785[10]
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i787 = data
  request.r(i787[0], i787[1], 0, i786, 'mesh')
  i786.meshCount = i787[2]
  i786.activeVertexStreamsCount = i787[3]
  i786.alignment = i787[4]
  i786.renderMode = i787[5]
  i786.sortMode = i787[6]
  i786.lengthScale = i787[7]
  i786.velocityScale = i787[8]
  i786.cameraVelocityScale = i787[9]
  i786.normalDirection = i787[10]
  i786.sortingFudge = i787[11]
  i786.minParticleSize = i787[12]
  i786.maxParticleSize = i787[13]
  i786.pivot = new pc.Vec3( i787[14], i787[15], i787[16] )
  request.r(i787[17], i787[18], 0, i786, 'trailMaterial')
  i786.applyActiveColorSpace = !!i787[19]
  i786.enabled = !!i787[20]
  request.r(i787[21], i787[22], 0, i786, 'sharedMaterial')
  var i789 = i787[23]
  var i788 = []
  for(var i = 0; i < i789.length; i += 2) {
  request.r(i789[i + 0], i789[i + 1], 2, i788, '')
  }
  i786.sharedMaterials = i788
  i786.receiveShadows = !!i787[24]
  i786.shadowCastingMode = i787[25]
  i786.sortingLayerID = i787[26]
  i786.sortingOrder = i787[27]
  i786.lightmapIndex = i787[28]
  i786.lightmapSceneIndex = i787[29]
  i786.lightmapScaleOffset = new pc.Vec4( i787[30], i787[31], i787[32], i787[33] )
  i786.lightProbeUsage = i787[34]
  i786.reflectionProbeUsage = i787[35]
  return i786
}

Deserializers["NotiBox"] = function (request, data, root) {
  var i790 = root || request.c( 'NotiBox' )
  var i791 = data
  request.r(i791[0], i791[1], 0, i790, 'box')
  request.r(i791[2], i791[3], 0, i790, 'bg')
  i790.delay = i791[4]
  i790.animTime = i791[5]
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i793 = data
  i792.m_Alpha = i793[0]
  i792.m_Interactable = !!i793[1]
  i792.m_BlocksRaycasts = !!i793[2]
  i792.m_IgnoreParentGroups = !!i793[3]
  i792.enabled = !!i793[4]
  return i792
}

Deserializers["EndCart_Lose"] = function (request, data, root) {
  var i794 = root || request.c( 'EndCart_Lose' )
  var i795 = data
  request.r(i795[0], i795[1], 0, i794, 'actionButton')
  request.r(i795[2], i795[3], 0, i794, 'emoji')
  request.r(i795[4], i795[5], 0, i794, 'logo')
  request.r(i795[6], i795[7], 0, i794, 'icon')
  request.r(i795[8], i795[9], 0, i794, 'praticle')
  i794.buttonScaleTime = i795[10]
  i794.itemStartScale = i795[11]
  i794.itemPopScale = i795[12]
  i794.itemInTime = i795[13]
  i794.itemSettleTime = i795[14]
  i794.itemFinalScale = i795[15]
  i794.emojiFinalScale = i795[16]
  i794.otherItemFinalScale = i795[17]
  return i794
}

Deserializers["RotateLoop"] = function (request, data, root) {
  var i796 = root || request.c( 'RotateLoop' )
  var i797 = data
  i796.rotateSpeed = i797[0]
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i799 = data
  i798.ambientIntensity = i799[0]
  i798.reflectionIntensity = i799[1]
  i798.ambientMode = i799[2]
  i798.ambientLight = new pc.Color(i799[3], i799[4], i799[5], i799[6])
  i798.ambientSkyColor = new pc.Color(i799[7], i799[8], i799[9], i799[10])
  i798.ambientGroundColor = new pc.Color(i799[11], i799[12], i799[13], i799[14])
  i798.ambientEquatorColor = new pc.Color(i799[15], i799[16], i799[17], i799[18])
  i798.fogColor = new pc.Color(i799[19], i799[20], i799[21], i799[22])
  i798.fogEndDistance = i799[23]
  i798.fogStartDistance = i799[24]
  i798.fogDensity = i799[25]
  i798.fog = !!i799[26]
  request.r(i799[27], i799[28], 0, i798, 'skybox')
  i798.fogMode = i799[29]
  var i801 = i799[30]
  var i800 = []
  for(var i = 0; i < i801.length; i += 1) {
    i800.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i801[i + 0]) );
  }
  i798.lightmaps = i800
  i798.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i799[31], i798.lightProbes)
  i798.lightmapsMode = i799[32]
  i798.mixedBakeMode = i799[33]
  i798.environmentLightingMode = i799[34]
  i798.ambientProbe = new pc.SphericalHarmonicsL2(i799[35])
  i798.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i799[36])
  i798.useReferenceAmbientProbe = !!i799[37]
  request.r(i799[38], i799[39], 0, i798, 'customReflection')
  request.r(i799[40], i799[41], 0, i798, 'defaultReflection')
  i798.defaultReflectionMode = i799[42]
  i798.defaultReflectionResolution = i799[43]
  i798.sunLightObjectId = i799[44]
  i798.pixelLightCount = i799[45]
  i798.defaultReflectionHDR = !!i799[46]
  i798.hasLightDataAsset = !!i799[47]
  i798.hasManualGenerate = !!i799[48]
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i805 = data
  request.r(i805[0], i805[1], 0, i804, 'lightmapColor')
  request.r(i805[2], i805[3], 0, i804, 'lightmapDirection')
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i806 = root || new UnityEngine.LightProbes()
  var i807 = data
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i815 = data
  var i817 = i815[0]
  var i816 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i817.length; i += 1) {
    i816.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i817[i + 0]));
  }
  i814.ShaderCompilationErrors = i816
  i814.name = i815[1]
  i814.guid = i815[2]
  var i819 = i815[3]
  var i818 = []
  for(var i = 0; i < i819.length; i += 1) {
    i818.push( i819[i + 0] );
  }
  i814.shaderDefinedKeywords = i818
  var i821 = i815[4]
  var i820 = []
  for(var i = 0; i < i821.length; i += 1) {
    i820.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i821[i + 0]) );
  }
  i814.passes = i820
  var i823 = i815[5]
  var i822 = []
  for(var i = 0; i < i823.length; i += 1) {
    i822.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i823[i + 0]) );
  }
  i814.usePasses = i822
  var i825 = i815[6]
  var i824 = []
  for(var i = 0; i < i825.length; i += 1) {
    i824.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i825[i + 0]) );
  }
  i814.defaultParameterValues = i824
  request.r(i815[7], i815[8], 0, i814, 'unityFallbackShader')
  i814.readDepth = !!i815[9]
  i814.hasDepthOnlyPass = !!i815[10]
  i814.isCreatedByShaderGraph = !!i815[11]
  i814.disableBatching = !!i815[12]
  i814.compiled = !!i815[13]
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i829 = data
  i828.shaderName = i829[0]
  i828.errorMessage = i829[1]
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i832 = root || new pc.UnityShaderPass()
  var i833 = data
  i832.id = i833[0]
  i832.subShaderIndex = i833[1]
  i832.name = i833[2]
  i832.passType = i833[3]
  i832.grabPassTextureName = i833[4]
  i832.usePass = !!i833[5]
  i832.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i833[6], i832.zTest)
  i832.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i833[7], i832.zWrite)
  i832.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i833[8], i832.culling)
  i832.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i833[9], i832.blending)
  i832.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i833[10], i832.alphaBlending)
  i832.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i833[11], i832.colorWriteMask)
  i832.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i833[12], i832.offsetUnits)
  i832.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i833[13], i832.offsetFactor)
  i832.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i833[14], i832.stencilRef)
  i832.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i833[15], i832.stencilReadMask)
  i832.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i833[16], i832.stencilWriteMask)
  i832.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i833[17], i832.stencilOp)
  i832.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i833[18], i832.stencilOpFront)
  i832.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i833[19], i832.stencilOpBack)
  var i835 = i833[20]
  var i834 = []
  for(var i = 0; i < i835.length; i += 1) {
    i834.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i835[i + 0]) );
  }
  i832.tags = i834
  var i837 = i833[21]
  var i836 = []
  for(var i = 0; i < i837.length; i += 1) {
    i836.push( i837[i + 0] );
  }
  i832.passDefinedKeywords = i836
  var i839 = i833[22]
  var i838 = []
  for(var i = 0; i < i839.length; i += 1) {
    i838.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i839[i + 0]) );
  }
  i832.passDefinedKeywordGroups = i838
  var i841 = i833[23]
  var i840 = []
  for(var i = 0; i < i841.length; i += 1) {
    i840.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i841[i + 0]) );
  }
  i832.variants = i840
  var i843 = i833[24]
  var i842 = []
  for(var i = 0; i < i843.length; i += 1) {
    i842.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i843[i + 0]) );
  }
  i832.excludedVariants = i842
  i832.hasDepthReader = !!i833[25]
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i845 = data
  i844.val = i845[0]
  i844.name = i845[1]
  return i844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i847 = data
  i846.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i847[0], i846.src)
  i846.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i847[1], i846.dst)
  i846.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i847[2], i846.op)
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i849 = data
  i848.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i849[0], i848.pass)
  i848.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i849[1], i848.fail)
  i848.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i849[2], i848.zFail)
  i848.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i849[3], i848.comp)
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i853 = data
  i852.name = i853[0]
  i852.value = i853[1]
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i857 = data
  var i859 = i857[0]
  var i858 = []
  for(var i = 0; i < i859.length; i += 1) {
    i858.push( i859[i + 0] );
  }
  i856.keywords = i858
  i856.hasDiscard = !!i857[1]
  return i856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i863 = data
  i862.passId = i863[0]
  i862.subShaderIndex = i863[1]
  var i865 = i863[2]
  var i864 = []
  for(var i = 0; i < i865.length; i += 1) {
    i864.push( i865[i + 0] );
  }
  i862.keywords = i864
  i862.vertexProgram = i863[3]
  i862.fragmentProgram = i863[4]
  i862.exportedForWebGl2 = !!i863[5]
  i862.readDepth = !!i863[6]
  return i862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i869 = data
  request.r(i869[0], i869[1], 0, i868, 'shader')
  i868.pass = i869[2]
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i873 = data
  i872.name = i873[0]
  i872.type = i873[1]
  i872.value = new pc.Vec4( i873[2], i873[3], i873[4], i873[5] )
  i872.textureValue = i873[6]
  i872.shaderPropertyFlag = i873[7]
  return i872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i875 = data
  i874.name = i875[0]
  request.r(i875[1], i875[2], 0, i874, 'texture')
  i874.aabb = i875[3]
  i874.vertices = i875[4]
  i874.triangles = i875[5]
  i874.textureRect = UnityEngine.Rect.MinMaxRect(i875[6], i875[7], i875[8], i875[9])
  i874.packedRect = UnityEngine.Rect.MinMaxRect(i875[10], i875[11], i875[12], i875[13])
  i874.border = new pc.Vec4( i875[14], i875[15], i875[16], i875[17] )
  i874.transparency = i875[18]
  i874.bounds = i875[19]
  i874.pixelsPerUnit = i875[20]
  i874.textureWidth = i875[21]
  i874.textureHeight = i875[22]
  i874.nativeSize = new pc.Vec2( i875[23], i875[24] )
  i874.pivot = new pc.Vec2( i875[25], i875[26] )
  i874.textureRectOffset = new pc.Vec2( i875[27], i875[28] )
  return i874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i877 = data
  i876.name = i877[0]
  return i876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i879 = data
  i878.name = i879[0]
  i878.ascent = i879[1]
  i878.originalLineHeight = i879[2]
  i878.fontSize = i879[3]
  var i881 = i879[4]
  var i880 = []
  for(var i = 0; i < i881.length; i += 1) {
    i880.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i881[i + 0]) );
  }
  i878.characterInfo = i880
  request.r(i879[5], i879[6], 0, i878, 'texture')
  i878.originalFontSize = i879[7]
  return i878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i885 = data
  i884.index = i885[0]
  i884.advance = i885[1]
  i884.bearing = i885[2]
  i884.glyphWidth = i885[3]
  i884.glyphHeight = i885[4]
  i884.minX = i885[5]
  i884.maxX = i885[6]
  i884.minY = i885[7]
  i884.maxY = i885[8]
  i884.uvBottomLeftX = i885[9]
  i884.uvBottomLeftY = i885[10]
  i884.uvBottomRightX = i885[11]
  i884.uvBottomRightY = i885[12]
  i884.uvTopLeftX = i885[13]
  i884.uvTopLeftY = i885[14]
  i884.uvTopRightX = i885[15]
  i884.uvTopRightY = i885[16]
  return i884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i887 = data
  i886.name = i887[0]
  i886.bytes64 = i887[1]
  i886.data = i887[2]
  return i886
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i888 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i889 = data
  var i891 = i889[0]
  var i890 = []
  for(var i = 0; i < i891.length; i += 2) {
  request.r(i891[i + 0], i891[i + 1], 2, i890, '')
  }
  i888.atlasAssets = i890
  i888.scale = i889[1]
  request.r(i889[2], i889[3], 0, i888, 'skeletonJSON')
  i888.isUpgradingBlendModeMaterials = !!i889[4]
  i888.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i889[5], i888.blendModeMaterials)
  var i893 = i889[6]
  var i892 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i893.length; i += 2) {
  request.r(i893[i + 0], i893[i + 1], 1, i892, '')
  }
  i888.skeletonDataModifiers = i892
  var i895 = i889[7]
  var i894 = []
  for(var i = 0; i < i895.length; i += 1) {
    i894.push( i895[i + 0] );
  }
  i888.fromAnimation = i894
  var i897 = i889[8]
  var i896 = []
  for(var i = 0; i < i897.length; i += 1) {
    i896.push( i897[i + 0] );
  }
  i888.toAnimation = i896
  i888.duration = i889[9]
  i888.defaultMix = i889[10]
  request.r(i889[11], i889[12], 0, i888, 'controller')
  return i888
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i900 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i901 = data
  i900.applyAdditiveMaterial = !!i901[0]
  var i903 = i901[1]
  var i902 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i903.length; i += 1) {
    i902.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i903[i + 0]));
  }
  i900.additiveMaterials = i902
  var i905 = i901[2]
  var i904 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i905.length; i += 1) {
    i904.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i905[i + 0]));
  }
  i900.multiplyMaterials = i904
  var i907 = i901[3]
  var i906 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i907.length; i += 1) {
    i906.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i907[i + 0]));
  }
  i900.screenMaterials = i906
  i900.requiresBlendModeMaterials = !!i901[4]
  return i900
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i910 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i911 = data
  i910.pageName = i911[0]
  request.r(i911[1], i911[2], 0, i910, 'material')
  return i910
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i914 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i915 = data
  request.r(i915[0], i915[1], 0, i914, 'atlasFile')
  var i917 = i915[2]
  var i916 = []
  for(var i = 0; i < i917.length; i += 2) {
  request.r(i917[i + 0], i917[i + 1], 2, i916, '')
  }
  i914.materials = i916
  i914.textureLoadingMode = i915[3]
  request.r(i915[4], i915[5], 0, i914, 'onDemandTextureLoader')
  return i914
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i918 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i919 = data
  request.r(i919[0], i919[1], 0, i918, 'atlas')
  i918.normalStyle = i919[2]
  i918.normalSpacingOffset = i919[3]
  i918.boldStyle = i919[4]
  i918.boldSpacing = i919[5]
  i918.italicStyle = i919[6]
  i918.tabSize = i919[7]
  i918.hashCode = i919[8]
  request.r(i919[9], i919[10], 0, i918, 'material')
  i918.materialHashCode = i919[11]
  i918.m_Version = i919[12]
  i918.m_SourceFontFileGUID = i919[13]
  request.r(i919[14], i919[15], 0, i918, 'm_SourceFontFile_EditorRef')
  request.r(i919[16], i919[17], 0, i918, 'm_SourceFontFile')
  i918.m_AtlasPopulationMode = i919[18]
  i918.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i919[19], i918.m_FaceInfo)
  var i921 = i919[20]
  var i920 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i921.length; i += 1) {
    i920.add(request.d('UnityEngine.TextCore.Glyph', i921[i + 0]));
  }
  i918.m_GlyphTable = i920
  var i923 = i919[21]
  var i922 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i923.length; i += 1) {
    i922.add(request.d('TMPro.TMP_Character', i923[i + 0]));
  }
  i918.m_CharacterTable = i922
  var i925 = i919[22]
  var i924 = []
  for(var i = 0; i < i925.length; i += 2) {
  request.r(i925[i + 0], i925[i + 1], 2, i924, '')
  }
  i918.m_AtlasTextures = i924
  i918.m_AtlasTextureIndex = i919[23]
  i918.m_IsMultiAtlasTexturesEnabled = !!i919[24]
  i918.m_ClearDynamicDataOnBuild = !!i919[25]
  var i927 = i919[26]
  var i926 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i927.length; i += 1) {
    i926.add(request.d('UnityEngine.TextCore.GlyphRect', i927[i + 0]));
  }
  i918.m_UsedGlyphRects = i926
  var i929 = i919[27]
  var i928 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i929.length; i += 1) {
    i928.add(request.d('UnityEngine.TextCore.GlyphRect', i929[i + 0]));
  }
  i918.m_FreeGlyphRects = i928
  i918.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i919[28], i918.m_fontInfo)
  i918.m_AtlasWidth = i919[29]
  i918.m_AtlasHeight = i919[30]
  i918.m_AtlasPadding = i919[31]
  i918.m_AtlasRenderMode = i919[32]
  var i931 = i919[33]
  var i930 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i931.length; i += 1) {
    i930.add(request.d('TMPro.TMP_Glyph', i931[i + 0]));
  }
  i918.m_glyphInfoList = i930
  i918.m_KerningTable = request.d('TMPro.KerningTable', i919[34], i918.m_KerningTable)
  i918.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i919[35], i918.m_FontFeatureTable)
  var i933 = i919[36]
  var i932 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i933.length; i += 2) {
  request.r(i933[i + 0], i933[i + 1], 1, i932, '')
  }
  i918.fallbackFontAssets = i932
  var i935 = i919[37]
  var i934 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i935.length; i += 2) {
  request.r(i935[i + 0], i935[i + 1], 1, i934, '')
  }
  i918.m_FallbackFontAssetTable = i934
  i918.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i919[38], i918.m_CreationSettings)
  var i937 = i919[39]
  var i936 = []
  for(var i = 0; i < i937.length; i += 1) {
    i936.push( request.d('TMPro.TMP_FontWeightPair', i937[i + 0]) );
  }
  i918.m_FontWeightTable = i936
  var i939 = i919[40]
  var i938 = []
  for(var i = 0; i < i939.length; i += 1) {
    i938.push( request.d('TMPro.TMP_FontWeightPair', i939[i + 0]) );
  }
  i918.fontWeights = i938
  return i918
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i940 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i941 = data
  i940.m_FaceIndex = i941[0]
  i940.m_FamilyName = i941[1]
  i940.m_StyleName = i941[2]
  i940.m_PointSize = i941[3]
  i940.m_Scale = i941[4]
  i940.m_UnitsPerEM = i941[5]
  i940.m_LineHeight = i941[6]
  i940.m_AscentLine = i941[7]
  i940.m_CapLine = i941[8]
  i940.m_MeanLine = i941[9]
  i940.m_Baseline = i941[10]
  i940.m_DescentLine = i941[11]
  i940.m_SuperscriptOffset = i941[12]
  i940.m_SuperscriptSize = i941[13]
  i940.m_SubscriptOffset = i941[14]
  i940.m_SubscriptSize = i941[15]
  i940.m_UnderlineOffset = i941[16]
  i940.m_UnderlineThickness = i941[17]
  i940.m_StrikethroughOffset = i941[18]
  i940.m_StrikethroughThickness = i941[19]
  i940.m_TabWidth = i941[20]
  return i940
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i944 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i945 = data
  i944.m_Index = i945[0]
  i944.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i945[1], i944.m_Metrics)
  i944.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i945[2], i944.m_GlyphRect)
  i944.m_Scale = i945[3]
  i944.m_AtlasIndex = i945[4]
  i944.m_ClassDefinitionType = i945[5]
  return i944
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i946 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i947 = data
  i946.m_Width = i947[0]
  i946.m_Height = i947[1]
  i946.m_HorizontalBearingX = i947[2]
  i946.m_HorizontalBearingY = i947[3]
  i946.m_HorizontalAdvance = i947[4]
  return i946
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i948 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i949 = data
  i948.m_X = i949[0]
  i948.m_Y = i949[1]
  i948.m_Width = i949[2]
  i948.m_Height = i949[3]
  return i948
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i952 = root || request.c( 'TMPro.TMP_Character' )
  var i953 = data
  i952.m_ElementType = i953[0]
  i952.m_Unicode = i953[1]
  i952.m_GlyphIndex = i953[2]
  i952.m_Scale = i953[3]
  return i952
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i958 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i959 = data
  i958.Name = i959[0]
  i958.PointSize = i959[1]
  i958.Scale = i959[2]
  i958.CharacterCount = i959[3]
  i958.LineHeight = i959[4]
  i958.Baseline = i959[5]
  i958.Ascender = i959[6]
  i958.CapHeight = i959[7]
  i958.Descender = i959[8]
  i958.CenterLine = i959[9]
  i958.SuperscriptOffset = i959[10]
  i958.SubscriptOffset = i959[11]
  i958.SubSize = i959[12]
  i958.Underline = i959[13]
  i958.UnderlineThickness = i959[14]
  i958.strikethrough = i959[15]
  i958.strikethroughThickness = i959[16]
  i958.TabWidth = i959[17]
  i958.Padding = i959[18]
  i958.AtlasWidth = i959[19]
  i958.AtlasHeight = i959[20]
  return i958
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i962 = root || request.c( 'TMPro.TMP_Glyph' )
  var i963 = data
  i962.id = i963[0]
  i962.x = i963[1]
  i962.y = i963[2]
  i962.width = i963[3]
  i962.height = i963[4]
  i962.xOffset = i963[5]
  i962.yOffset = i963[6]
  i962.xAdvance = i963[7]
  i962.scale = i963[8]
  return i962
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i964 = root || request.c( 'TMPro.KerningTable' )
  var i965 = data
  var i967 = i965[0]
  var i966 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i967.length; i += 1) {
    i966.add(request.d('TMPro.KerningPair', i967[i + 0]));
  }
  i964.kerningPairs = i966
  return i964
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i970 = root || request.c( 'TMPro.KerningPair' )
  var i971 = data
  i970.xOffset = i971[0]
  i970.m_FirstGlyph = i971[1]
  i970.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i971[2], i970.m_FirstGlyphAdjustments)
  i970.m_SecondGlyph = i971[3]
  i970.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i971[4], i970.m_SecondGlyphAdjustments)
  i970.m_IgnoreSpacingAdjustments = !!i971[5]
  return i970
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i972 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i973 = data
  var i975 = i973[0]
  var i974 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i975.length; i += 1) {
    i974.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i975[i + 0]));
  }
  i972.m_GlyphPairAdjustmentRecords = i974
  return i972
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i978 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i979 = data
  i978.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i979[0], i978.m_FirstAdjustmentRecord)
  i978.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i979[1], i978.m_SecondAdjustmentRecord)
  i978.m_FeatureLookupFlags = i979[2]
  return i978
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i982 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i983 = data
  i982.sourceFontFileName = i983[0]
  i982.sourceFontFileGUID = i983[1]
  i982.pointSizeSamplingMode = i983[2]
  i982.pointSize = i983[3]
  i982.padding = i983[4]
  i982.packingMode = i983[5]
  i982.atlasWidth = i983[6]
  i982.atlasHeight = i983[7]
  i982.characterSetSelectionMode = i983[8]
  i982.characterSequence = i983[9]
  i982.referencedFontAssetGUID = i983[10]
  i982.referencedTextAssetGUID = i983[11]
  i982.fontStyle = i983[12]
  i982.fontStyleModifier = i983[13]
  i982.renderMode = i983[14]
  i982.includeFontFeatures = !!i983[15]
  return i982
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i986 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i987 = data
  request.r(i987[0], i987[1], 0, i986, 'regularTypeface')
  request.r(i987[2], i987[3], 0, i986, 'italicTypeface')
  return i986
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i988 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i989 = data
  i988.useSafeMode = !!i989[0]
  i988.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i989[1], i988.safeModeOptions)
  i988.timeScale = i989[2]
  i988.unscaledTimeScale = i989[3]
  i988.useSmoothDeltaTime = !!i989[4]
  i988.maxSmoothUnscaledTime = i989[5]
  i988.rewindCallbackMode = i989[6]
  i988.showUnityEditorReport = !!i989[7]
  i988.logBehaviour = i989[8]
  i988.drawGizmos = !!i989[9]
  i988.defaultRecyclable = !!i989[10]
  i988.defaultAutoPlay = i989[11]
  i988.defaultUpdateType = i989[12]
  i988.defaultTimeScaleIndependent = !!i989[13]
  i988.defaultEaseType = i989[14]
  i988.defaultEaseOvershootOrAmplitude = i989[15]
  i988.defaultEasePeriod = i989[16]
  i988.defaultAutoKill = !!i989[17]
  i988.defaultLoopType = i989[18]
  i988.debugMode = !!i989[19]
  i988.debugStoreTargetId = !!i989[20]
  i988.showPreviewPanel = !!i989[21]
  i988.storeSettingsLocation = i989[22]
  i988.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i989[23], i988.modules)
  i988.createASMDEF = !!i989[24]
  i988.showPlayingTweens = !!i989[25]
  i988.showPausedTweens = !!i989[26]
  return i988
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i990 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i991 = data
  i990.logBehaviour = i991[0]
  i990.nestedTweenFailureBehaviour = i991[1]
  return i990
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i992 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i993 = data
  i992.showPanel = !!i993[0]
  i992.audioEnabled = !!i993[1]
  i992.physicsEnabled = !!i993[2]
  i992.physics2DEnabled = !!i993[3]
  i992.spriteEnabled = !!i993[4]
  i992.uiEnabled = !!i993[5]
  i992.textMeshProEnabled = !!i993[6]
  i992.tk2DEnabled = !!i993[7]
  i992.deAudioEnabled = !!i993[8]
  i992.deUnityExtendedEnabled = !!i993[9]
  i992.epoOutlineEnabled = !!i993[10]
  return i992
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i994 = root || request.c( 'TMPro.TMP_Settings' )
  var i995 = data
  i994.m_enableWordWrapping = !!i995[0]
  i994.m_enableKerning = !!i995[1]
  i994.m_enableExtraPadding = !!i995[2]
  i994.m_enableTintAllSprites = !!i995[3]
  i994.m_enableParseEscapeCharacters = !!i995[4]
  i994.m_EnableRaycastTarget = !!i995[5]
  i994.m_GetFontFeaturesAtRuntime = !!i995[6]
  i994.m_missingGlyphCharacter = i995[7]
  i994.m_warningsDisabled = !!i995[8]
  request.r(i995[9], i995[10], 0, i994, 'm_defaultFontAsset')
  i994.m_defaultFontAssetPath = i995[11]
  i994.m_defaultFontSize = i995[12]
  i994.m_defaultAutoSizeMinRatio = i995[13]
  i994.m_defaultAutoSizeMaxRatio = i995[14]
  i994.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i995[15], i995[16] )
  i994.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i995[17], i995[18] )
  i994.m_autoSizeTextContainer = !!i995[19]
  i994.m_IsTextObjectScaleStatic = !!i995[20]
  var i997 = i995[21]
  var i996 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i997.length; i += 2) {
  request.r(i997[i + 0], i997[i + 1], 1, i996, '')
  }
  i994.m_fallbackFontAssets = i996
  i994.m_matchMaterialPreset = !!i995[22]
  request.r(i995[23], i995[24], 0, i994, 'm_defaultSpriteAsset')
  i994.m_defaultSpriteAssetPath = i995[25]
  i994.m_enableEmojiSupport = !!i995[26]
  i994.m_MissingCharacterSpriteUnicode = i995[27]
  i994.m_defaultColorGradientPresetsPath = i995[28]
  request.r(i995[29], i995[30], 0, i994, 'm_defaultStyleSheet')
  i994.m_StyleSheetsResourcePath = i995[31]
  request.r(i995[32], i995[33], 0, i994, 'm_leadingCharacters')
  request.r(i995[34], i995[35], 0, i994, 'm_followingCharacters')
  i994.m_UseModernHangulLineBreakingRules = !!i995[36]
  return i994
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i998 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i999 = data
  i998.m_GlyphIndex = i999[0]
  i998.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i999[1], i998.m_GlyphValueRecord)
  return i998
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1000 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1001 = data
  i1000.m_XPlacement = i1001[0]
  i1000.m_YPlacement = i1001[1]
  i1000.m_XAdvance = i1001[2]
  i1000.m_YAdvance = i1001[3]
  return i1000
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1002 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1003 = data
  request.r(i1003[0], i1003[1], 0, i1002, 'spriteSheet')
  var i1005 = i1003[2]
  var i1004 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1005.length; i += 1) {
    i1004.add(request.d('TMPro.TMP_Sprite', i1005[i + 0]));
  }
  i1002.spriteInfoList = i1004
  var i1007 = i1003[3]
  var i1006 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1007.length; i += 2) {
  request.r(i1007[i + 0], i1007[i + 1], 1, i1006, '')
  }
  i1002.fallbackSpriteAssets = i1006
  i1002.hashCode = i1003[4]
  request.r(i1003[5], i1003[6], 0, i1002, 'material')
  i1002.materialHashCode = i1003[7]
  i1002.m_Version = i1003[8]
  i1002.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1003[9], i1002.m_FaceInfo)
  var i1009 = i1003[10]
  var i1008 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1009.length; i += 1) {
    i1008.add(request.d('TMPro.TMP_SpriteCharacter', i1009[i + 0]));
  }
  i1002.m_SpriteCharacterTable = i1008
  var i1011 = i1003[11]
  var i1010 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1011.length; i += 1) {
    i1010.add(request.d('TMPro.TMP_SpriteGlyph', i1011[i + 0]));
  }
  i1002.m_SpriteGlyphTable = i1010
  return i1002
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1014 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1015 = data
  i1014.name = i1015[0]
  i1014.hashCode = i1015[1]
  i1014.unicode = i1015[2]
  i1014.pivot = new pc.Vec2( i1015[3], i1015[4] )
  request.r(i1015[5], i1015[6], 0, i1014, 'sprite')
  i1014.id = i1015[7]
  i1014.x = i1015[8]
  i1014.y = i1015[9]
  i1014.width = i1015[10]
  i1014.height = i1015[11]
  i1014.xOffset = i1015[12]
  i1014.yOffset = i1015[13]
  i1014.xAdvance = i1015[14]
  i1014.scale = i1015[15]
  return i1014
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1020 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1021 = data
  i1020.m_Name = i1021[0]
  i1020.m_HashCode = i1021[1]
  i1020.m_ElementType = i1021[2]
  i1020.m_Unicode = i1021[3]
  i1020.m_GlyphIndex = i1021[4]
  i1020.m_Scale = i1021[5]
  return i1020
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1024 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1025 = data
  request.r(i1025[0], i1025[1], 0, i1024, 'sprite')
  i1024.m_Index = i1025[2]
  i1024.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1025[3], i1024.m_Metrics)
  i1024.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1025[4], i1024.m_GlyphRect)
  i1024.m_Scale = i1025[5]
  i1024.m_AtlasIndex = i1025[6]
  i1024.m_ClassDefinitionType = i1025[7]
  return i1024
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1026 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1027 = data
  var i1029 = i1027[0]
  var i1028 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1029.length; i += 1) {
    i1028.add(request.d('TMPro.TMP_Style', i1029[i + 0]));
  }
  i1026.m_StyleList = i1028
  return i1026
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1032 = root || request.c( 'TMPro.TMP_Style' )
  var i1033 = data
  i1032.m_Name = i1033[0]
  i1032.m_HashCode = i1033[1]
  i1032.m_OpeningDefinition = i1033[2]
  i1032.m_ClosingDefinition = i1033[3]
  i1032.m_OpeningTagArray = i1033[4]
  i1032.m_ClosingTagArray = i1033[5]
  i1032.m_OpeningTagUnicodeArray = i1033[6]
  i1032.m_ClosingTagUnicodeArray = i1033[7]
  return i1032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1035 = data
  var i1037 = i1035[0]
  var i1036 = []
  for(var i = 0; i < i1037.length; i += 1) {
    i1036.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1037[i + 0]) );
  }
  i1034.files = i1036
  i1034.componentToPrefabIds = i1035[1]
  return i1034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1040 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1041 = data
  i1040.path = i1041[0]
  request.r(i1041[1], i1041[2], 0, i1040, 'unityObject')
  return i1040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1043 = data
  var i1045 = i1043[0]
  var i1044 = []
  for(var i = 0; i < i1045.length; i += 1) {
    i1044.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1045[i + 0]) );
  }
  i1042.scriptsExecutionOrder = i1044
  var i1047 = i1043[1]
  var i1046 = []
  for(var i = 0; i < i1047.length; i += 1) {
    i1046.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1047[i + 0]) );
  }
  i1042.sortingLayers = i1046
  var i1049 = i1043[2]
  var i1048 = []
  for(var i = 0; i < i1049.length; i += 1) {
    i1048.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1049[i + 0]) );
  }
  i1042.cullingLayers = i1048
  i1042.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1043[3], i1042.timeSettings)
  i1042.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1043[4], i1042.physicsSettings)
  i1042.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1043[5], i1042.physics2DSettings)
  i1042.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1043[6], i1042.qualitySettings)
  i1042.enableRealtimeShadows = !!i1043[7]
  i1042.enableAutoInstancing = !!i1043[8]
  i1042.enableStaticBatching = !!i1043[9]
  i1042.enableDynamicBatching = !!i1043[10]
  i1042.lightmapEncodingQuality = i1043[11]
  i1042.desiredColorSpace = i1043[12]
  var i1051 = i1043[13]
  var i1050 = []
  for(var i = 0; i < i1051.length; i += 1) {
    i1050.push( i1051[i + 0] );
  }
  i1042.allTags = i1050
  return i1042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1055 = data
  i1054.name = i1055[0]
  i1054.value = i1055[1]
  return i1054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1059 = data
  i1058.id = i1059[0]
  i1058.name = i1059[1]
  i1058.value = i1059[2]
  return i1058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1063 = data
  i1062.id = i1063[0]
  i1062.name = i1063[1]
  return i1062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1065 = data
  i1064.fixedDeltaTime = i1065[0]
  i1064.maximumDeltaTime = i1065[1]
  i1064.timeScale = i1065[2]
  i1064.maximumParticleTimestep = i1065[3]
  return i1064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1067 = data
  i1066.gravity = new pc.Vec3( i1067[0], i1067[1], i1067[2] )
  i1066.defaultSolverIterations = i1067[3]
  i1066.bounceThreshold = i1067[4]
  i1066.autoSyncTransforms = !!i1067[5]
  i1066.autoSimulation = !!i1067[6]
  var i1069 = i1067[7]
  var i1068 = []
  for(var i = 0; i < i1069.length; i += 1) {
    i1068.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1069[i + 0]) );
  }
  i1066.collisionMatrix = i1068
  return i1066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1073 = data
  i1072.enabled = !!i1073[0]
  i1072.layerId = i1073[1]
  i1072.otherLayerId = i1073[2]
  return i1072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1075 = data
  request.r(i1075[0], i1075[1], 0, i1074, 'material')
  i1074.gravity = new pc.Vec2( i1075[2], i1075[3] )
  i1074.positionIterations = i1075[4]
  i1074.velocityIterations = i1075[5]
  i1074.velocityThreshold = i1075[6]
  i1074.maxLinearCorrection = i1075[7]
  i1074.maxAngularCorrection = i1075[8]
  i1074.maxTranslationSpeed = i1075[9]
  i1074.maxRotationSpeed = i1075[10]
  i1074.baumgarteScale = i1075[11]
  i1074.baumgarteTOIScale = i1075[12]
  i1074.timeToSleep = i1075[13]
  i1074.linearSleepTolerance = i1075[14]
  i1074.angularSleepTolerance = i1075[15]
  i1074.defaultContactOffset = i1075[16]
  i1074.autoSimulation = !!i1075[17]
  i1074.queriesHitTriggers = !!i1075[18]
  i1074.queriesStartInColliders = !!i1075[19]
  i1074.callbacksOnDisable = !!i1075[20]
  i1074.reuseCollisionCallbacks = !!i1075[21]
  i1074.autoSyncTransforms = !!i1075[22]
  var i1077 = i1075[23]
  var i1076 = []
  for(var i = 0; i < i1077.length; i += 1) {
    i1076.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1077[i + 0]) );
  }
  i1074.collisionMatrix = i1076
  return i1074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1080 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1081 = data
  i1080.enabled = !!i1081[0]
  i1080.layerId = i1081[1]
  i1080.otherLayerId = i1081[2]
  return i1080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1083 = data
  var i1085 = i1083[0]
  var i1084 = []
  for(var i = 0; i < i1085.length; i += 1) {
    i1084.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1085[i + 0]) );
  }
  i1082.qualityLevels = i1084
  var i1087 = i1083[1]
  var i1086 = []
  for(var i = 0; i < i1087.length; i += 1) {
    i1086.push( i1087[i + 0] );
  }
  i1082.names = i1086
  i1082.shadows = i1083[2]
  i1082.anisotropicFiltering = i1083[3]
  i1082.antiAliasing = i1083[4]
  i1082.lodBias = i1083[5]
  i1082.shadowCascades = i1083[6]
  i1082.shadowDistance = i1083[7]
  i1082.shadowmaskMode = i1083[8]
  i1082.shadowProjection = i1083[9]
  i1082.shadowResolution = i1083[10]
  i1082.softParticles = !!i1083[11]
  i1082.softVegetation = !!i1083[12]
  i1082.activeColorSpace = i1083[13]
  i1082.desiredColorSpace = i1083[14]
  i1082.masterTextureLimit = i1083[15]
  i1082.maxQueuedFrames = i1083[16]
  i1082.particleRaycastBudget = i1083[17]
  i1082.pixelLightCount = i1083[18]
  i1082.realtimeReflectionProbes = !!i1083[19]
  i1082.shadowCascade2Split = i1083[20]
  i1082.shadowCascade4Split = new pc.Vec3( i1083[21], i1083[22], i1083[23] )
  i1082.streamingMipmapsActive = !!i1083[24]
  i1082.vSyncCount = i1083[25]
  i1082.asyncUploadBufferSize = i1083[26]
  i1082.asyncUploadTimeSlice = i1083[27]
  i1082.billboardsFaceCameraPosition = !!i1083[28]
  i1082.shadowNearPlaneOffset = i1083[29]
  i1082.streamingMipmapsMemoryBudget = i1083[30]
  i1082.maximumLODLevel = i1083[31]
  i1082.streamingMipmapsAddAllCameras = !!i1083[32]
  i1082.streamingMipmapsMaxLevelReduction = i1083[33]
  i1082.streamingMipmapsRenderersPerFrame = i1083[34]
  i1082.resolutionScalingFixedDPIFactor = i1083[35]
  i1082.streamingMipmapsMaxFileIORequests = i1083[36]
  i1082.currentQualityLevel = i1083[37]
  return i1082
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1090 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1091 = data
  i1090.xPlacement = i1091[0]
  i1090.yPlacement = i1091[1]
  i1090.xAdvance = i1091[2]
  i1090.yAdvance = i1091[3]
  return i1090
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"frontSortingLayerID":0,"frontSortingOrder":1,"backSortingLayerID":2,"backSortingOrder":3,"alphaCutoff":4,"sprite":5,"tileMode":7,"isCustomRangeActive":8,"spriteSortPoint":9,"enabled":10,"sharedMaterial":11,"sharedMaterials":13,"receiveShadows":14,"shadowCastingMode":15,"sortingLayerID":16,"sortingOrder":17,"lightmapIndex":18,"lightmapSceneIndex":19,"lightmapScaleOffset":20,"lightProbeUsage":24,"reflectionProbeUsage":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"57":[58],"59":[58],"60":[58],"61":[58],"62":[58],"63":[58],"64":[65],"66":[15],"67":[68],"69":[68],"70":[68],"71":[68],"72":[68],"73":[68],"74":[68],"75":[7],"76":[7],"77":[7],"78":[7],"79":[7],"80":[7],"81":[7],"82":[7],"83":[7],"84":[7],"85":[7],"86":[7],"87":[7],"88":[15],"89":[30],"90":[91],"92":[91],"24":[23],"93":[15],"94":[15],"95":[96],"97":[98],"99":[30,33],"100":[101],"102":[98],"103":[104],"105":[98],"106":[98],"107":[108],"109":[108],"110":[98],"111":[112],"113":[1],"114":[112],"115":[23],"116":[23],"26":[24],"28":[27,23],"117":[23],"25":[24],"118":[23],"119":[23],"120":[23],"121":[23],"122":[23],"123":[23],"124":[23],"125":[23],"126":[23],"127":[27,23],"128":[23],"129":[23],"130":[23],"131":[23],"132":[27,23],"133":[23],"134":[18],"135":[18],"19":[18],"136":[18],"137":[15],"138":[15],"139":[140],"141":[15],"142":[143],"144":[23],"145":[27,23],"31":[30],"101":[27,23],"146":[147,30],"98":[30],"148":[30,33],"149":[68],"150":[7],"151":[143],"152":[108],"153":[23],"154":[30,23],"37":[23,27],"155":[23],"156":[27,23],"157":[30],"158":[27,23],"159":[23],"160":[112]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Material","UnityEngine.MonoBehaviour","DragItem","UnityEngine.BoxCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Shader","Disk","Tray","UnityEngine.GameObject","Slot","UnityEngine.Texture2D","HandHint","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","TrayManager","UnityEngine.SpriteMask","ConveyorBelt","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","EndCart_Win","UnityEngine.MeshRenderer","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonDataAsset","UnityEngine.MeshFilter","Button","UnityEngine.UI.Button","GameManager","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","AudioManager","UnityEngine.AudioSource","UnityEngine.AudioClip","TutorialManager","ScalePopLoop","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","NotiBox","UnityEngine.CanvasGroup","EndCart_Lose","RotateLoop","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.Font","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","CameraAutoSize","CheckSize","Spine.Unity.Examples.BasicPlatformerController","UnityEngine.CharacterController","Spine.Unity.Examples.SkeletonGhost","Spine.Unity.SkeletonRenderer","Spine.Unity.Examples.RenderExistingMesh","Spine.Unity.Examples.SkeletonGraphicRenderTexture","Spine.Unity.SkeletonGraphic","Spine.Unity.Examples.SkeletonRenderTexture","Spine.Unity.Examples.SkeletonRenderTextureFadeout","Spine.Unity.Examples.SkeletonRenderTextureBase","Spine.Unity.Examples.SkeletonRagdoll","Spine.Unity.Examples.SkeletonRagdoll2D","Spine.Unity.Examples.SkeletonUtilityEyeConstraint","Spine.Unity.SkeletonUtilityBone","Spine.Unity.Examples.SkeletonUtilityGroundConstraint","Spine.Unity.Examples.SpineGauge","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonPartsRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.62f3";

Deserializers.productName = "Prj_Demo";

Deserializers.lunaInitializationTime = "12/18/2025 04:11:57";

Deserializers.lunaDaysRunning = "18.2";

Deserializers.lunaVersion = "7.0.0";

Deserializers.lunaSHA = "3bcc3e343f23b4c67e768a811a8d088c7f7adbc5";

Deserializers.creativeName = "ColorfulPack";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1807";

Deserializers.runtimeAnalysisExcludedMethodsCount = "5472";

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

Deserializers.buildID = "86651872-3910-4096-863c-24d0533f86cb";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

