var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i540 = root || request.c( 'UnityEngine.JointSpring' )
  var i541 = data
  i540.spring = i541[0]
  i540.damper = i541[1]
  i540.targetPosition = i541[2]
  return i540
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i542 = root || request.c( 'UnityEngine.JointMotor' )
  var i543 = data
  i542.m_TargetVelocity = i543[0]
  i542.m_Force = i543[1]
  i542.m_FreeSpin = i543[2]
  return i542
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i544 = root || request.c( 'UnityEngine.JointLimits' )
  var i545 = data
  i544.m_Min = i545[0]
  i544.m_Max = i545[1]
  i544.m_Bounciness = i545[2]
  i544.m_BounceMinVelocity = i545[3]
  i544.m_ContactDistance = i545[4]
  i544.minBounce = i545[5]
  i544.maxBounce = i545[6]
  return i544
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i546 = root || request.c( 'UnityEngine.JointDrive' )
  var i547 = data
  i546.m_PositionSpring = i547[0]
  i546.m_PositionDamper = i547[1]
  i546.m_MaximumForce = i547[2]
  i546.m_UseAcceleration = i547[3]
  return i546
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i548 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i549 = data
  i548.m_Spring = i549[0]
  i548.m_Damper = i549[1]
  return i548
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i550 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i551 = data
  i550.m_Limit = i551[0]
  i550.m_Bounciness = i551[1]
  i550.m_ContactDistance = i551[2]
  return i550
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i552 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i553 = data
  i552.m_ExtremumSlip = i553[0]
  i552.m_ExtremumValue = i553[1]
  i552.m_AsymptoteSlip = i553[2]
  i552.m_AsymptoteValue = i553[3]
  i552.m_Stiffness = i553[4]
  return i552
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i554 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i555 = data
  i554.m_LowerAngle = i555[0]
  i554.m_UpperAngle = i555[1]
  return i554
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i556 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i557 = data
  i556.m_MotorSpeed = i557[0]
  i556.m_MaximumMotorTorque = i557[1]
  return i556
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i558 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i559 = data
  i558.m_DampingRatio = i559[0]
  i558.m_Frequency = i559[1]
  i558.m_Angle = i559[2]
  return i558
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i560 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i561 = data
  i560.m_LowerTranslation = i561[0]
  i560.m_UpperTranslation = i561[1]
  return i560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i562 = root || new pc.UnityMaterial()
  var i563 = data
  i562.name = i563[0]
  request.r(i563[1], i563[2], 0, i562, 'shader')
  i562.renderQueue = i563[3]
  i562.enableInstancing = !!i563[4]
  var i565 = i563[5]
  var i564 = []
  for(var i = 0; i < i565.length; i += 1) {
    i564.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i565[i + 0]) );
  }
  i562.floatParameters = i564
  var i567 = i563[6]
  var i566 = []
  for(var i = 0; i < i567.length; i += 1) {
    i566.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i567[i + 0]) );
  }
  i562.colorParameters = i566
  var i569 = i563[7]
  var i568 = []
  for(var i = 0; i < i569.length; i += 1) {
    i568.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i569[i + 0]) );
  }
  i562.vectorParameters = i568
  var i571 = i563[8]
  var i570 = []
  for(var i = 0; i < i571.length; i += 1) {
    i570.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i571[i + 0]) );
  }
  i562.textureParameters = i570
  var i573 = i563[9]
  var i572 = []
  for(var i = 0; i < i573.length; i += 1) {
    i572.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i573[i + 0]) );
  }
  i562.materialFlags = i572
  return i562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i577 = data
  i576.name = i577[0]
  i576.value = i577[1]
  return i576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i581 = data
  i580.name = i581[0]
  i580.value = new pc.Color(i581[1], i581[2], i581[3], i581[4])
  return i580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i585 = data
  i584.name = i585[0]
  i584.value = new pc.Vec4( i585[1], i585[2], i585[3], i585[4] )
  return i584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i589 = data
  i588.name = i589[0]
  request.r(i589[1], i589[2], 0, i588, 'value')
  return i588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i593 = data
  i592.name = i593[0]
  i592.enabled = !!i593[1]
  return i592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i595 = data
  i594.name = i595[0]
  i594.width = i595[1]
  i594.height = i595[2]
  i594.mipmapCount = i595[3]
  i594.anisoLevel = i595[4]
  i594.filterMode = i595[5]
  i594.hdr = !!i595[6]
  i594.format = i595[7]
  i594.wrapMode = i595[8]
  i594.alphaIsTransparency = !!i595[9]
  i594.alphaSource = i595[10]
  i594.graphicsFormat = i595[11]
  i594.sRGBTexture = !!i595[12]
  i594.desiredColorSpace = i595[13]
  i594.wrapU = i595[14]
  i594.wrapV = i595[15]
  return i594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i597 = data
  i596.position = new pc.Vec3( i597[0], i597[1], i597[2] )
  i596.scale = new pc.Vec3( i597[3], i597[4], i597[5] )
  i596.rotation = new pc.Quat(i597[6], i597[7], i597[8], i597[9])
  return i596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i599 = data
  i598.color = new pc.Color(i599[0], i599[1], i599[2], i599[3])
  request.r(i599[4], i599[5], 0, i598, 'sprite')
  i598.flipX = !!i599[6]
  i598.flipY = !!i599[7]
  i598.drawMode = i599[8]
  i598.size = new pc.Vec2( i599[9], i599[10] )
  i598.tileMode = i599[11]
  i598.adaptiveModeThreshold = i599[12]
  i598.maskInteraction = i599[13]
  i598.spriteSortPoint = i599[14]
  i598.enabled = !!i599[15]
  request.r(i599[16], i599[17], 0, i598, 'sharedMaterial')
  var i601 = i599[18]
  var i600 = []
  for(var i = 0; i < i601.length; i += 2) {
  request.r(i601[i + 0], i601[i + 1], 2, i600, '')
  }
  i598.sharedMaterials = i600
  i598.receiveShadows = !!i599[19]
  i598.shadowCastingMode = i599[20]
  i598.sortingLayerID = i599[21]
  i598.sortingOrder = i599[22]
  i598.lightmapIndex = i599[23]
  i598.lightmapSceneIndex = i599[24]
  i598.lightmapScaleOffset = new pc.Vec4( i599[25], i599[26], i599[27], i599[28] )
  i598.lightProbeUsage = i599[29]
  i598.reflectionProbeUsage = i599[30]
  return i598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i605 = data
  i604.name = i605[0]
  i604.tagId = i605[1]
  i604.enabled = !!i605[2]
  i604.isStatic = !!i605[3]
  i604.layer = i605[4]
  return i604
}

Deserializers["Disk"] = function (request, data, root) {
  var i606 = root || request.c( 'Disk' )
  var i607 = data
  i606.requiredCount = i607[0]
  i606.moveDistance = i607[1]
  i606.moveTime = i607[2]
  return i606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i609 = data
  request.r(i609[0], i609[1], 0, i608, 'animatorController')
  request.r(i609[2], i609[3], 0, i608, 'avatar')
  i608.updateMode = i609[4]
  i608.hasTransformHierarchy = !!i609[5]
  i608.applyRootMotion = !!i609[6]
  var i611 = i609[7]
  var i610 = []
  for(var i = 0; i < i611.length; i += 2) {
  request.r(i611[i + 0], i611[i + 1], 2, i610, '')
  }
  i608.humanBones = i610
  i608.enabled = !!i609[8]
  return i608
}

Deserializers["HandHint"] = function (request, data, root) {
  var i614 = root || request.c( 'HandHint' )
  var i615 = data
  request.r(i615[0], i615[1], 0, i614, 'previewRenderer')
  return i614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i617 = data
  i616.name = i617[0]
  i616.index = i617[1]
  i616.startup = !!i617[2]
  return i616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i619 = data
  i618.aspect = i619[0]
  i618.orthographic = !!i619[1]
  i618.orthographicSize = i619[2]
  i618.backgroundColor = new pc.Color(i619[3], i619[4], i619[5], i619[6])
  i618.nearClipPlane = i619[7]
  i618.farClipPlane = i619[8]
  i618.fieldOfView = i619[9]
  i618.depth = i619[10]
  i618.clearFlags = i619[11]
  i618.cullingMask = i619[12]
  i618.rect = i619[13]
  request.r(i619[14], i619[15], 0, i618, 'targetTexture')
  i618.usePhysicalProperties = !!i619[16]
  i618.focalLength = i619[17]
  i618.sensorSize = new pc.Vec2( i619[18], i619[19] )
  i618.lensShift = new pc.Vec2( i619[20], i619[21] )
  i618.gateFit = i619[22]
  i618.commandBufferCount = i619[23]
  i618.cameraType = i619[24]
  i618.enabled = !!i619[25]
  return i618
}

Deserializers["CheckSize"] = function (request, data, root) {
  var i620 = root || request.c( 'CheckSize' )
  var i621 = data
  i620.size16by9 = i621[0]
  i620.size18by9 = i621[1]
  i620.sizeLong = i621[2]
  i620.sizeOrthographic = i621[3]
  request.r(i621[4], i621[5], 0, i620, 'diskTransform')
  i620.diskPos16by9 = new pc.Vec3( i621[6], i621[7], i621[8] )
  i620.diskPosLong = new pc.Vec3( i621[9], i621[10], i621[11] )
  return i620
}

Deserializers["GameManager"] = function (request, data, root) {
  var i622 = root || request.c( 'GameManager' )
  var i623 = data
  request.r(i623[0], i623[1], 0, i622, 'pointText')
  i622.point = i623[2]
  request.r(i623[3], i623[4], 0, i622, 'ECWin')
  i622.startTimer = !!i623[5]
  i622.ticketCount = i623[6]
  i622.isClickToLog = !!i623[7]
  i622.clicksToLog = i623[8]
  i622.isMatch = !!i623[9]
  i622.clickCount = i623[10]
  i622.isClick = !!i623[11]
  i622.finishGame = !!i623[12]
  i622.startGame = !!i623[13]
  i622.isCheckWin = !!i623[14]
  i622.isCheckLose = !!i623[15]
  i622.isClickStore = !!i623[16]
  return i622
}

Deserializers["AudioManager"] = function (request, data, root) {
  var i624 = root || request.c( 'AudioManager' )
  var i625 = data
  request.r(i625[0], i625[1], 0, i624, 'bgmSource')
  request.r(i625[2], i625[3], 0, i624, 'sfxSource')
  request.r(i625[4], i625[5], 0, i624, 'bgm')
  request.r(i625[6], i625[7], 0, i624, 'drag')
  request.r(i625[8], i625[9], 0, i624, 'drog')
  request.r(i625[10], i625[11], 0, i624, 'lose')
  request.r(i625[12], i625[13], 0, i624, 'pop')
  request.r(i625[14], i625[15], 0, i624, 'wood')
  request.r(i625[16], i625[17], 0, i624, 'win')
  request.r(i625[18], i625[19], 0, i624, 'warningTick')
  request.r(i625[20], i625[21], 0, i624, 'match')
  request.r(i625[22], i625[23], 0, i624, 'sake')
  request.r(i625[24], i625[25], 0, i624, 'excell')
  request.r(i625[26], i625[27], 0, i624, 'closeBox')
  return i624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i627 = data
  request.r(i627[0], i627[1], 0, i626, 'clip')
  request.r(i627[2], i627[3], 0, i626, 'outputAudioMixerGroup')
  i626.playOnAwake = !!i627[4]
  i626.loop = !!i627[5]
  i626.time = i627[6]
  i626.volume = i627[7]
  i626.pitch = i627[8]
  i626.enabled = !!i627[9]
  return i626
}

Deserializers["TrayManager"] = function (request, data, root) {
  var i628 = root || request.c( 'TrayManager' )
  var i629 = data
  i628.spacing = i629[0]
  i628.visibleCount = i629[1]
  i628.moveTime = i629[2]
  var i631 = i629[3]
  var i630 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i631.length; i += 2) {
  request.r(i631[i + 0], i631[i + 1], 1, i630, '')
  }
  i628.listTrayPrepare = i630
  var i633 = i629[4]
  var i632 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i633.length; i += 2) {
  request.r(i633[i + 0], i633[i + 1], 1, i632, '')
  }
  i628.listTrayValiable = i632
  request.r(i629[5], i629[6], 0, i628, 'levelConfig')
  i628.canCountIdle = !!i629[7]
  i628.spawnHeightMultiplier = i629[8]
  i628.isFirstTutorial = !!i629[9]
  i628.tutorialDelay = i629[10]
  i628.idleTimer = i629[11]
  i628.tutorialEnabled = !!i629[12]
  request.r(i629[13], i629[14], 0, i628, 'manualTray')
  request.r(i629[15], i629[16], 0, i628, 'manualItem')
  i628.justEndedInteract = !!i629[17]
  var i635 = i629[18]
  var i634 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i635.length; i += 2) {
  request.r(i635[i + 0], i635[i + 1], 1, i634, '')
  }
  i628.spriteLibrary = i634
  i628.step = i629[19]
  request.r(i629[20], i629[21], 0, i628, 'specialSpawnPoint')
  request.r(i629[22], i629[23], 0, i628, 'specialTray')
  i628.specialTrayScale = new pc.Vec3( i629[24], i629[25], i629[26] )
  i628.specialTrayLocalPos = new pc.Vec3( i629[27], i629[28], i629[29] )
  i628.startY = i629[30]
  return i628
}

Deserializers["Tray"] = function (request, data, root) {
  var i642 = root || request.c( 'Tray' )
  var i643 = data
  i642.spacing = i643[0]
  i642.moveTime = i643[1]
  request.r(i643[2], i643[3], 0, i642, 'diskPrefab')
  request.r(i643[4], i643[5], 0, i642, 'diskTransform')
  i642.shrinkTime = i643[6]
  i642.itemToDiskTime = i643[7]
  i642.attachDelay = i643[8]
  i642.followSmooth = i643[9]
  i642.isCompleted = !!i643[10]
  var i645 = i643[11]
  var i644 = []
  for(var i = 0; i < i645.length; i += 2) {
  request.r(i645[i + 0], i645[i + 1], 2, i644, '')
  }
  i642.slots = i644
  request.r(i643[12], i643[13], 0, i642, 'fireObject')
  i642.isSpecial = !!i643[14]
  i642.spacingItemCenter = i643[15]
  request.r(i643[16], i643[17], 0, i642, 'targetTransform')
  i642.diskItemScale = new pc.Vec3( i643[18], i643[19], i643[20] )
  return i642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i649 = data
  i648.usedByComposite = !!i649[0]
  i648.autoTiling = !!i649[1]
  i648.size = new pc.Vec2( i649[2], i649[3] )
  i648.edgeRadius = i649[4]
  i648.enabled = !!i649[5]
  i648.isTrigger = !!i649[6]
  i648.usedByEffector = !!i649[7]
  i648.density = i649[8]
  i648.offset = new pc.Vec2( i649[9], i649[10] )
  request.r(i649[11], i649[12], 0, i648, 'material')
  return i648
}

Deserializers["Slot"] = function (request, data, root) {
  var i650 = root || request.c( 'Slot' )
  var i651 = data
  request.r(i651[0], i651[1], 0, i650, 'anchor')
  request.r(i651[2], i651[3], 0, i650, 'currentItem')
  i650.isLocked = !!i651[4]
  return i650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i653 = data
  i652.bodyType = i653[0]
  request.r(i653[1], i653[2], 0, i652, 'material')
  i652.simulated = !!i653[3]
  i652.useAutoMass = !!i653[4]
  i652.mass = i653[5]
  i652.drag = i653[6]
  i652.angularDrag = i653[7]
  i652.gravityScale = i653[8]
  i652.collisionDetectionMode = i653[9]
  i652.sleepMode = i653[10]
  i652.constraints = i653[11]
  return i652
}

Deserializers["DragItem"] = function (request, data, root) {
  var i654 = root || request.c( 'DragItem' )
  var i655 = data
  i654.focusOutlineSize = i655[0]
  i654.outlineTweenTime = i655[1]
  i654.itemType = i655[2]
  i654.isLockItem = !!i655[3]
  i654.onTimer = !!i655[4]
  return i654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i657 = data
  i656.pivot = new pc.Vec2( i657[0], i657[1] )
  i656.anchorMin = new pc.Vec2( i657[2], i657[3] )
  i656.anchorMax = new pc.Vec2( i657[4], i657[5] )
  i656.sizeDelta = new pc.Vec2( i657[6], i657[7] )
  i656.anchoredPosition3D = new pc.Vec3( i657[8], i657[9], i657[10] )
  i656.rotation = new pc.Quat(i657[11], i657[12], i657[13], i657[14])
  i656.scale = new pc.Vec3( i657[15], i657[16], i657[17] )
  return i656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i659 = data
  i658.planeDistance = i659[0]
  i658.referencePixelsPerUnit = i659[1]
  i658.isFallbackOverlay = !!i659[2]
  i658.renderMode = i659[3]
  i658.renderOrder = i659[4]
  i658.sortingLayerName = i659[5]
  i658.sortingOrder = i659[6]
  i658.scaleFactor = i659[7]
  request.r(i659[8], i659[9], 0, i658, 'worldCamera')
  i658.overrideSorting = !!i659[10]
  i658.pixelPerfect = !!i659[11]
  i658.targetDisplay = i659[12]
  i658.overridePixelPerfect = !!i659[13]
  i658.enabled = !!i659[14]
  return i658
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i660 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i661 = data
  i660.m_UiScaleMode = i661[0]
  i660.m_ReferencePixelsPerUnit = i661[1]
  i660.m_ScaleFactor = i661[2]
  i660.m_ReferenceResolution = new pc.Vec2( i661[3], i661[4] )
  i660.m_ScreenMatchMode = i661[5]
  i660.m_MatchWidthOrHeight = i661[6]
  i660.m_PhysicalUnit = i661[7]
  i660.m_FallbackScreenDPI = i661[8]
  i660.m_DefaultSpriteDPI = i661[9]
  i660.m_DynamicPixelsPerUnit = i661[10]
  i660.m_PresetInfoIsWorld = !!i661[11]
  return i660
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i662 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i663 = data
  i662.m_IgnoreReversedGraphics = !!i663[0]
  i662.m_BlockingObjects = i663[1]
  i662.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i663[2] )
  return i662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i665 = data
  i664.cullTransparentMesh = !!i665[0]
  return i664
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i666 = root || request.c( 'UnityEngine.UI.Image' )
  var i667 = data
  request.r(i667[0], i667[1], 0, i666, 'm_Sprite')
  i666.m_Type = i667[2]
  i666.m_PreserveAspect = !!i667[3]
  i666.m_FillCenter = !!i667[4]
  i666.m_FillMethod = i667[5]
  i666.m_FillAmount = i667[6]
  i666.m_FillClockwise = !!i667[7]
  i666.m_FillOrigin = i667[8]
  i666.m_UseSpriteMesh = !!i667[9]
  i666.m_PixelsPerUnitMultiplier = i667[10]
  i666.m_Maskable = !!i667[11]
  request.r(i667[12], i667[13], 0, i666, 'm_Material')
  i666.m_Color = new pc.Color(i667[14], i667[15], i667[16], i667[17])
  i666.m_RaycastTarget = !!i667[18]
  i666.m_RaycastPadding = new pc.Vec4( i667[19], i667[20], i667[21], i667[22] )
  return i666
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i668 = root || request.c( 'UnityEngine.UI.Button' )
  var i669 = data
  i668.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i669[0], i668.m_OnClick)
  i668.m_Navigation = request.d('UnityEngine.UI.Navigation', i669[1], i668.m_Navigation)
  i668.m_Transition = i669[2]
  i668.m_Colors = request.d('UnityEngine.UI.ColorBlock', i669[3], i668.m_Colors)
  i668.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i669[4], i668.m_SpriteState)
  i668.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i669[5], i668.m_AnimationTriggers)
  i668.m_Interactable = !!i669[6]
  request.r(i669[7], i669[8], 0, i668, 'm_TargetGraphic')
  return i668
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i670 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i671 = data
  i670.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i671[0], i670.m_PersistentCalls)
  return i670
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i672 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i673 = data
  var i675 = i673[0]
  var i674 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i675.length; i += 1) {
    i674.add(request.d('UnityEngine.Events.PersistentCall', i675[i + 0]));
  }
  i672.m_Calls = i674
  return i672
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i678 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i679 = data
  request.r(i679[0], i679[1], 0, i678, 'm_Target')
  i678.m_TargetAssemblyTypeName = i679[2]
  i678.m_MethodName = i679[3]
  i678.m_Mode = i679[4]
  i678.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i679[5], i678.m_Arguments)
  i678.m_CallState = i679[6]
  return i678
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i680 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i681 = data
  request.r(i681[0], i681[1], 0, i680, 'm_ObjectArgument')
  i680.m_ObjectArgumentAssemblyTypeName = i681[2]
  i680.m_IntArgument = i681[3]
  i680.m_FloatArgument = i681[4]
  i680.m_StringArgument = i681[5]
  i680.m_BoolArgument = !!i681[6]
  return i680
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i682 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i683 = data
  i682.m_Mode = i683[0]
  i682.m_WrapAround = !!i683[1]
  request.r(i683[2], i683[3], 0, i682, 'm_SelectOnUp')
  request.r(i683[4], i683[5], 0, i682, 'm_SelectOnDown')
  request.r(i683[6], i683[7], 0, i682, 'm_SelectOnLeft')
  request.r(i683[8], i683[9], 0, i682, 'm_SelectOnRight')
  return i682
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i684 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i685 = data
  i684.m_NormalColor = new pc.Color(i685[0], i685[1], i685[2], i685[3])
  i684.m_HighlightedColor = new pc.Color(i685[4], i685[5], i685[6], i685[7])
  i684.m_PressedColor = new pc.Color(i685[8], i685[9], i685[10], i685[11])
  i684.m_SelectedColor = new pc.Color(i685[12], i685[13], i685[14], i685[15])
  i684.m_DisabledColor = new pc.Color(i685[16], i685[17], i685[18], i685[19])
  i684.m_ColorMultiplier = i685[20]
  i684.m_FadeDuration = i685[21]
  return i684
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i686 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i687 = data
  request.r(i687[0], i687[1], 0, i686, 'm_HighlightedSprite')
  request.r(i687[2], i687[3], 0, i686, 'm_PressedSprite')
  request.r(i687[4], i687[5], 0, i686, 'm_SelectedSprite')
  request.r(i687[6], i687[7], 0, i686, 'm_DisabledSprite')
  return i686
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i688 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i689 = data
  i688.m_NormalTrigger = i689[0]
  i688.m_HighlightedTrigger = i689[1]
  i688.m_PressedTrigger = i689[2]
  i688.m_SelectedTrigger = i689[3]
  i688.m_DisabledTrigger = i689[4]
  return i688
}

Deserializers["ScalePopLoop"] = function (request, data, root) {
  var i690 = root || request.c( 'ScalePopLoop' )
  var i691 = data
  i690.minScale = new pc.Vec3( i691[0], i691[1], i691[2] )
  i690.maxScale = new pc.Vec3( i691[3], i691[4], i691[5] )
  i690.duration = i691[6]
  i690.ease = i691[7]
  request.r(i691[8], i691[9], 0, i690, 'tut')
  return i690
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i692 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i693 = data
  i692.m_hasFontAssetChanged = !!i693[0]
  request.r(i693[1], i693[2], 0, i692, 'm_baseMaterial')
  i692.m_maskOffset = new pc.Vec4( i693[3], i693[4], i693[5], i693[6] )
  i692.m_text = i693[7]
  i692.m_isRightToLeft = !!i693[8]
  request.r(i693[9], i693[10], 0, i692, 'm_fontAsset')
  request.r(i693[11], i693[12], 0, i692, 'm_sharedMaterial')
  var i695 = i693[13]
  var i694 = []
  for(var i = 0; i < i695.length; i += 2) {
  request.r(i695[i + 0], i695[i + 1], 2, i694, '')
  }
  i692.m_fontSharedMaterials = i694
  request.r(i693[14], i693[15], 0, i692, 'm_fontMaterial')
  var i697 = i693[16]
  var i696 = []
  for(var i = 0; i < i697.length; i += 2) {
  request.r(i697[i + 0], i697[i + 1], 2, i696, '')
  }
  i692.m_fontMaterials = i696
  i692.m_fontColor32 = UnityEngine.Color32.ConstructColor(i693[17], i693[18], i693[19], i693[20])
  i692.m_fontColor = new pc.Color(i693[21], i693[22], i693[23], i693[24])
  i692.m_enableVertexGradient = !!i693[25]
  i692.m_colorMode = i693[26]
  i692.m_fontColorGradient = request.d('TMPro.VertexGradient', i693[27], i692.m_fontColorGradient)
  request.r(i693[28], i693[29], 0, i692, 'm_fontColorGradientPreset')
  request.r(i693[30], i693[31], 0, i692, 'm_spriteAsset')
  i692.m_tintAllSprites = !!i693[32]
  request.r(i693[33], i693[34], 0, i692, 'm_StyleSheet')
  i692.m_TextStyleHashCode = i693[35]
  i692.m_overrideHtmlColors = !!i693[36]
  i692.m_faceColor = UnityEngine.Color32.ConstructColor(i693[37], i693[38], i693[39], i693[40])
  i692.m_fontSize = i693[41]
  i692.m_fontSizeBase = i693[42]
  i692.m_fontWeight = i693[43]
  i692.m_enableAutoSizing = !!i693[44]
  i692.m_fontSizeMin = i693[45]
  i692.m_fontSizeMax = i693[46]
  i692.m_fontStyle = i693[47]
  i692.m_HorizontalAlignment = i693[48]
  i692.m_VerticalAlignment = i693[49]
  i692.m_textAlignment = i693[50]
  i692.m_characterSpacing = i693[51]
  i692.m_wordSpacing = i693[52]
  i692.m_lineSpacing = i693[53]
  i692.m_lineSpacingMax = i693[54]
  i692.m_paragraphSpacing = i693[55]
  i692.m_charWidthMaxAdj = i693[56]
  i692.m_enableWordWrapping = !!i693[57]
  i692.m_wordWrappingRatios = i693[58]
  i692.m_overflowMode = i693[59]
  request.r(i693[60], i693[61], 0, i692, 'm_linkedTextComponent')
  request.r(i693[62], i693[63], 0, i692, 'parentLinkedComponent')
  i692.m_enableKerning = !!i693[64]
  i692.m_enableExtraPadding = !!i693[65]
  i692.checkPaddingRequired = !!i693[66]
  i692.m_isRichText = !!i693[67]
  i692.m_parseCtrlCharacters = !!i693[68]
  i692.m_isOrthographic = !!i693[69]
  i692.m_isCullingEnabled = !!i693[70]
  i692.m_horizontalMapping = i693[71]
  i692.m_verticalMapping = i693[72]
  i692.m_uvLineOffset = i693[73]
  i692.m_geometrySortingOrder = i693[74]
  i692.m_IsTextObjectScaleStatic = !!i693[75]
  i692.m_VertexBufferAutoSizeReduction = !!i693[76]
  i692.m_useMaxVisibleDescender = !!i693[77]
  i692.m_pageToDisplay = i693[78]
  i692.m_margin = new pc.Vec4( i693[79], i693[80], i693[81], i693[82] )
  i692.m_isUsingLegacyAnimationComponent = !!i693[83]
  i692.m_isVolumetricText = !!i693[84]
  i692.m_Maskable = !!i693[85]
  request.r(i693[86], i693[87], 0, i692, 'm_Material')
  i692.m_Color = new pc.Color(i693[88], i693[89], i693[90], i693[91])
  i692.m_RaycastTarget = !!i693[92]
  i692.m_RaycastPadding = new pc.Vec4( i693[93], i693[94], i693[95], i693[96] )
  return i692
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i698 = root || request.c( 'TMPro.VertexGradient' )
  var i699 = data
  i698.topLeft = new pc.Color(i699[0], i699[1], i699[2], i699[3])
  i698.topRight = new pc.Color(i699[4], i699[5], i699[6], i699[7])
  i698.bottomLeft = new pc.Color(i699[8], i699[9], i699[10], i699[11])
  i698.bottomRight = new pc.Color(i699[12], i699[13], i699[14], i699[15])
  return i698
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i700 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i701 = data
  request.r(i701[0], i701[1], 0, i700, 'm_FirstSelected')
  i700.m_sendNavigationEvents = !!i701[2]
  i700.m_DragThreshold = i701[3]
  return i700
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i702 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i703 = data
  i702.m_HorizontalAxis = i703[0]
  i702.m_VerticalAxis = i703[1]
  i702.m_SubmitButton = i703[2]
  i702.m_CancelButton = i703[3]
  i702.m_InputActionsPerSecond = i703[4]
  i702.m_RepeatDelay = i703[5]
  i702.m_ForceModuleActive = !!i703[6]
  i702.m_SendPointerHoverToParent = !!i703[7]
  return i702
}

Deserializers["TutorialBeginRunner"] = function (request, data, root) {
  var i704 = root || request.c( 'TutorialBeginRunner' )
  var i705 = data
  i704.context = request.d('TutorialContext', i705[0], i704.context)
  return i704
}

Deserializers["TutorialContext"] = function (request, data, root) {
  var i706 = root || request.c( 'TutorialContext' )
  var i707 = data
  request.r(i707[0], i707[1], 0, i706, 'text')
  request.r(i707[2], i707[3], 0, i706, 'box')
  request.r(i707[4], i707[5], 0, i706, 'background')
  return i706
}

Deserializers["ActiveTutorialBegin"] = function (request, data, root) {
  var i708 = root || request.c( 'ActiveTutorialBegin' )
  var i709 = data
  i708.tutorialCase = i709[0]
  request.r(i709[1], i709[2], 0, i708, 'runner')
  return i708
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i710 = root || request.c( 'UnityEngine.UI.Slider' )
  var i711 = data
  request.r(i711[0], i711[1], 0, i710, 'm_FillRect')
  request.r(i711[2], i711[3], 0, i710, 'm_HandleRect')
  i710.m_Direction = i711[4]
  i710.m_MinValue = i711[5]
  i710.m_MaxValue = i711[6]
  i710.m_WholeNumbers = !!i711[7]
  i710.m_Value = i711[8]
  i710.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i711[9], i710.m_OnValueChanged)
  i710.m_Navigation = request.d('UnityEngine.UI.Navigation', i711[10], i710.m_Navigation)
  i710.m_Transition = i711[11]
  i710.m_Colors = request.d('UnityEngine.UI.ColorBlock', i711[12], i710.m_Colors)
  i710.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i711[13], i710.m_SpriteState)
  i710.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i711[14], i710.m_AnimationTriggers)
  i710.m_Interactable = !!i711[15]
  request.r(i711[16], i711[17], 0, i710, 'm_TargetGraphic')
  return i710
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i712 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i713 = data
  i712.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i713[0], i712.m_PersistentCalls)
  return i712
}

Deserializers["TutorialManager"] = function (request, data, root) {
  var i714 = root || request.c( 'TutorialManager' )
  var i715 = data
  request.r(i715[0], i715[1], 0, i714, 'handPrefab')
  return i714
}

Deserializers["MatchFlowManager"] = function (request, data, root) {
  var i716 = root || request.c( 'MatchFlowManager' )
  var i717 = data
  request.r(i717[0], i717[1], 0, i716, 'config')
  request.r(i717[2], i717[3], 0, i716, 'targetPosition')
  request.r(i717[4], i717[5], 0, i716, 'parkTarget')
  request.r(i717[6], i717[7], 0, i716, 'firePrefabs')
  request.r(i717[8], i717[9], 0, i716, 'effctPrefabs')
  i716.moveTime = i717[10]
  i716.spacingItem = i717[11]
  request.r(i717[12], i717[13], 0, i716, 'textAgeTransform')
  request.r(i717[14], i717[15], 0, i716, 'lidPrefab')
  i716.closeTime = i717[16]
  var i719 = i717[17]
  var i718 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i719.length; i += 2) {
  request.r(i719[i + 0], i719[i + 1], 1, i718, '')
  }
  i716.textLists = i718
  var i721 = i717[18]
  var i720 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.AudioClip')))
  for(var i = 0; i < i721.length; i += 2) {
  request.r(i721[i + 0], i721[i + 1], 1, i720, '')
  }
  i716.audioLists = i720
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i725 = data
  i724.ambientIntensity = i725[0]
  i724.reflectionIntensity = i725[1]
  i724.ambientMode = i725[2]
  i724.ambientLight = new pc.Color(i725[3], i725[4], i725[5], i725[6])
  i724.ambientSkyColor = new pc.Color(i725[7], i725[8], i725[9], i725[10])
  i724.ambientGroundColor = new pc.Color(i725[11], i725[12], i725[13], i725[14])
  i724.ambientEquatorColor = new pc.Color(i725[15], i725[16], i725[17], i725[18])
  i724.fogColor = new pc.Color(i725[19], i725[20], i725[21], i725[22])
  i724.fogEndDistance = i725[23]
  i724.fogStartDistance = i725[24]
  i724.fogDensity = i725[25]
  i724.fog = !!i725[26]
  request.r(i725[27], i725[28], 0, i724, 'skybox')
  i724.fogMode = i725[29]
  var i727 = i725[30]
  var i726 = []
  for(var i = 0; i < i727.length; i += 1) {
    i726.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i727[i + 0]) );
  }
  i724.lightmaps = i726
  i724.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i725[31], i724.lightProbes)
  i724.lightmapsMode = i725[32]
  i724.mixedBakeMode = i725[33]
  i724.environmentLightingMode = i725[34]
  i724.ambientProbe = new pc.SphericalHarmonicsL2(i725[35])
  i724.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i725[36])
  i724.useReferenceAmbientProbe = !!i725[37]
  request.r(i725[38], i725[39], 0, i724, 'customReflection')
  request.r(i725[40], i725[41], 0, i724, 'defaultReflection')
  i724.defaultReflectionMode = i725[42]
  i724.defaultReflectionResolution = i725[43]
  i724.sunLightObjectId = i725[44]
  i724.pixelLightCount = i725[45]
  i724.defaultReflectionHDR = !!i725[46]
  i724.hasLightDataAsset = !!i725[47]
  i724.hasManualGenerate = !!i725[48]
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i731 = data
  request.r(i731[0], i731[1], 0, i730, 'lightmapColor')
  request.r(i731[2], i731[3], 0, i730, 'lightmapDirection')
  return i730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i732 = root || new UnityEngine.LightProbes()
  var i733 = data
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i741 = data
  var i743 = i741[0]
  var i742 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i743.length; i += 1) {
    i742.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i743[i + 0]));
  }
  i740.ShaderCompilationErrors = i742
  i740.name = i741[1]
  i740.guid = i741[2]
  var i745 = i741[3]
  var i744 = []
  for(var i = 0; i < i745.length; i += 1) {
    i744.push( i745[i + 0] );
  }
  i740.shaderDefinedKeywords = i744
  var i747 = i741[4]
  var i746 = []
  for(var i = 0; i < i747.length; i += 1) {
    i746.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i747[i + 0]) );
  }
  i740.passes = i746
  var i749 = i741[5]
  var i748 = []
  for(var i = 0; i < i749.length; i += 1) {
    i748.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i749[i + 0]) );
  }
  i740.usePasses = i748
  var i751 = i741[6]
  var i750 = []
  for(var i = 0; i < i751.length; i += 1) {
    i750.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i751[i + 0]) );
  }
  i740.defaultParameterValues = i750
  request.r(i741[7], i741[8], 0, i740, 'unityFallbackShader')
  i740.readDepth = !!i741[9]
  i740.isCreatedByShaderGraph = !!i741[10]
  i740.disableBatching = !!i741[11]
  i740.compiled = !!i741[12]
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i755 = data
  i754.shaderName = i755[0]
  i754.errorMessage = i755[1]
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i760 = root || new pc.UnityShaderPass()
  var i761 = data
  i760.id = i761[0]
  i760.subShaderIndex = i761[1]
  i760.name = i761[2]
  i760.passType = i761[3]
  i760.grabPassTextureName = i761[4]
  i760.usePass = !!i761[5]
  i760.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i761[6], i760.zTest)
  i760.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i761[7], i760.zWrite)
  i760.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i761[8], i760.culling)
  i760.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i761[9], i760.blending)
  i760.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i761[10], i760.alphaBlending)
  i760.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i761[11], i760.colorWriteMask)
  i760.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i761[12], i760.offsetUnits)
  i760.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i761[13], i760.offsetFactor)
  i760.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i761[14], i760.stencilRef)
  i760.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i761[15], i760.stencilReadMask)
  i760.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i761[16], i760.stencilWriteMask)
  i760.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i761[17], i760.stencilOp)
  i760.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i761[18], i760.stencilOpFront)
  i760.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i761[19], i760.stencilOpBack)
  var i763 = i761[20]
  var i762 = []
  for(var i = 0; i < i763.length; i += 1) {
    i762.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i763[i + 0]) );
  }
  i760.tags = i762
  var i765 = i761[21]
  var i764 = []
  for(var i = 0; i < i765.length; i += 1) {
    i764.push( i765[i + 0] );
  }
  i760.passDefinedKeywords = i764
  var i767 = i761[22]
  var i766 = []
  for(var i = 0; i < i767.length; i += 1) {
    i766.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i767[i + 0]) );
  }
  i760.passDefinedKeywordGroups = i766
  var i769 = i761[23]
  var i768 = []
  for(var i = 0; i < i769.length; i += 1) {
    i768.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i769[i + 0]) );
  }
  i760.variants = i768
  var i771 = i761[24]
  var i770 = []
  for(var i = 0; i < i771.length; i += 1) {
    i770.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i771[i + 0]) );
  }
  i760.excludedVariants = i770
  i760.hasDepthReader = !!i761[25]
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i773 = data
  i772.val = i773[0]
  i772.name = i773[1]
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i775 = data
  i774.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i775[0], i774.src)
  i774.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i775[1], i774.dst)
  i774.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i775[2], i774.op)
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i777 = data
  i776.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i777[0], i776.pass)
  i776.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i777[1], i776.fail)
  i776.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i777[2], i776.zFail)
  i776.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i777[3], i776.comp)
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i781 = data
  i780.name = i781[0]
  i780.value = i781[1]
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i785 = data
  var i787 = i785[0]
  var i786 = []
  for(var i = 0; i < i787.length; i += 1) {
    i786.push( i787[i + 0] );
  }
  i784.keywords = i786
  i784.hasDiscard = !!i785[1]
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i791 = data
  i790.passId = i791[0]
  i790.subShaderIndex = i791[1]
  var i793 = i791[2]
  var i792 = []
  for(var i = 0; i < i793.length; i += 1) {
    i792.push( i793[i + 0] );
  }
  i790.keywords = i792
  i790.vertexProgram = i791[3]
  i790.fragmentProgram = i791[4]
  i790.exportedForWebGl2 = !!i791[5]
  i790.readDepth = !!i791[6]
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i797 = data
  request.r(i797[0], i797[1], 0, i796, 'shader')
  i796.pass = i797[2]
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i801 = data
  i800.name = i801[0]
  i800.type = i801[1]
  i800.value = new pc.Vec4( i801[2], i801[3], i801[4], i801[5] )
  i800.textureValue = i801[6]
  i800.shaderPropertyFlag = i801[7]
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i803 = data
  i802.name = i803[0]
  request.r(i803[1], i803[2], 0, i802, 'texture')
  i802.aabb = i803[3]
  i802.vertices = i803[4]
  i802.triangles = i803[5]
  i802.textureRect = UnityEngine.Rect.MinMaxRect(i803[6], i803[7], i803[8], i803[9])
  i802.packedRect = UnityEngine.Rect.MinMaxRect(i803[10], i803[11], i803[12], i803[13])
  i802.border = new pc.Vec4( i803[14], i803[15], i803[16], i803[17] )
  i802.transparency = i803[18]
  i802.bounds = i803[19]
  i802.pixelsPerUnit = i803[20]
  i802.textureWidth = i803[21]
  i802.textureHeight = i803[22]
  i802.nativeSize = new pc.Vec2( i803[23], i803[24] )
  i802.pivot = new pc.Vec2( i803[25], i803[26] )
  i802.textureRectOffset = new pc.Vec2( i803[27], i803[28] )
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i805 = data
  i804.name = i805[0]
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i807 = data
  i806.name = i807[0]
  i806.wrapMode = i807[1]
  i806.isLooping = !!i807[2]
  i806.length = i807[3]
  var i809 = i807[4]
  var i808 = []
  for(var i = 0; i < i809.length; i += 1) {
    i808.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i809[i + 0]) );
  }
  i806.curves = i808
  var i811 = i807[5]
  var i810 = []
  for(var i = 0; i < i811.length; i += 1) {
    i810.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i811[i + 0]) );
  }
  i806.events = i810
  i806.halfPrecision = !!i807[6]
  i806._frameRate = i807[7]
  i806.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i807[8], i806.localBounds)
  i806.hasMuscleCurves = !!i807[9]
  var i813 = i807[10]
  var i812 = []
  for(var i = 0; i < i813.length; i += 1) {
    i812.push( i813[i + 0] );
  }
  i806.clipMuscleConstant = i812
  i806.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i807[11], i806.clipBindingConstant)
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i817 = data
  i816.path = i817[0]
  i816.hash = i817[1]
  i816.componentType = i817[2]
  i816.property = i817[3]
  i816.keys = i817[4]
  var i819 = i817[5]
  var i818 = []
  for(var i = 0; i < i819.length; i += 1) {
    i818.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i819[i + 0]) );
  }
  i816.objectReferenceKeys = i818
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i823 = data
  i822.time = i823[0]
  request.r(i823[1], i823[2], 0, i822, 'value')
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i827 = data
  i826.functionName = i827[0]
  i826.floatParameter = i827[1]
  i826.intParameter = i827[2]
  i826.stringParameter = i827[3]
  request.r(i827[4], i827[5], 0, i826, 'objectReferenceParameter')
  i826.time = i827[6]
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i829 = data
  i828.center = new pc.Vec3( i829[0], i829[1], i829[2] )
  i828.extends = new pc.Vec3( i829[3], i829[4], i829[5] )
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i833 = data
  var i835 = i833[0]
  var i834 = []
  for(var i = 0; i < i835.length; i += 1) {
    i834.push( i835[i + 0] );
  }
  i832.genericBindings = i834
  var i837 = i833[1]
  var i836 = []
  for(var i = 0; i < i837.length; i += 1) {
    i836.push( i837[i + 0] );
  }
  i832.pptrCurveMapping = i836
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i839 = data
  i838.name = i839[0]
  i838.ascent = i839[1]
  i838.originalLineHeight = i839[2]
  i838.fontSize = i839[3]
  var i841 = i839[4]
  var i840 = []
  for(var i = 0; i < i841.length; i += 1) {
    i840.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i841[i + 0]) );
  }
  i838.characterInfo = i840
  request.r(i839[5], i839[6], 0, i838, 'texture')
  i838.originalFontSize = i839[7]
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i845 = data
  i844.index = i845[0]
  i844.advance = i845[1]
  i844.bearing = i845[2]
  i844.glyphWidth = i845[3]
  i844.glyphHeight = i845[4]
  i844.minX = i845[5]
  i844.maxX = i845[6]
  i844.minY = i845[7]
  i844.maxY = i845[8]
  i844.uvBottomLeftX = i845[9]
  i844.uvBottomLeftY = i845[10]
  i844.uvBottomRightX = i845[11]
  i844.uvBottomRightY = i845[12]
  i844.uvTopLeftX = i845[13]
  i844.uvTopLeftY = i845[14]
  i844.uvTopRightX = i845[15]
  i844.uvTopRightY = i845[16]
  return i844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i847 = data
  i846.name = i847[0]
  var i849 = i847[1]
  var i848 = []
  for(var i = 0; i < i849.length; i += 1) {
    i848.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i849[i + 0]) );
  }
  i846.layers = i848
  var i851 = i847[2]
  var i850 = []
  for(var i = 0; i < i851.length; i += 1) {
    i850.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i851[i + 0]) );
  }
  i846.parameters = i850
  i846.animationClips = i847[3]
  i846.avatarUnsupported = i847[4]
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i855 = data
  i854.name = i855[0]
  i854.defaultWeight = i855[1]
  i854.blendingMode = i855[2]
  i854.avatarMask = i855[3]
  i854.syncedLayerIndex = i855[4]
  i854.syncedLayerAffectsTiming = !!i855[5]
  i854.syncedLayers = i855[6]
  i854.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i855[7], i854.stateMachine)
  return i854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i857 = data
  i856.id = i857[0]
  i856.name = i857[1]
  i856.path = i857[2]
  var i859 = i857[3]
  var i858 = []
  for(var i = 0; i < i859.length; i += 1) {
    i858.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i859[i + 0]) );
  }
  i856.states = i858
  var i861 = i857[4]
  var i860 = []
  for(var i = 0; i < i861.length; i += 1) {
    i860.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i861[i + 0]) );
  }
  i856.machines = i860
  var i863 = i857[5]
  var i862 = []
  for(var i = 0; i < i863.length; i += 1) {
    i862.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i863[i + 0]) );
  }
  i856.entryStateTransitions = i862
  var i865 = i857[6]
  var i864 = []
  for(var i = 0; i < i865.length; i += 1) {
    i864.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i865[i + 0]) );
  }
  i856.exitStateTransitions = i864
  var i867 = i857[7]
  var i866 = []
  for(var i = 0; i < i867.length; i += 1) {
    i866.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i867[i + 0]) );
  }
  i856.anyStateTransitions = i866
  i856.defaultStateId = i857[8]
  return i856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i871 = data
  i870.id = i871[0]
  i870.name = i871[1]
  i870.cycleOffset = i871[2]
  i870.cycleOffsetParameter = i871[3]
  i870.cycleOffsetParameterActive = !!i871[4]
  i870.mirror = !!i871[5]
  i870.mirrorParameter = i871[6]
  i870.mirrorParameterActive = !!i871[7]
  i870.motionId = i871[8]
  i870.nameHash = i871[9]
  i870.fullPathHash = i871[10]
  i870.speed = i871[11]
  i870.speedParameter = i871[12]
  i870.speedParameterActive = !!i871[13]
  i870.tag = i871[14]
  i870.tagHash = i871[15]
  i870.writeDefaultValues = !!i871[16]
  var i873 = i871[17]
  var i872 = []
  for(var i = 0; i < i873.length; i += 2) {
  request.r(i873[i + 0], i873[i + 1], 2, i872, '')
  }
  i870.behaviours = i872
  var i875 = i871[18]
  var i874 = []
  for(var i = 0; i < i875.length; i += 1) {
    i874.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i875[i + 0]) );
  }
  i870.transitions = i874
  return i870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i881 = data
  i880.fullPath = i881[0]
  i880.canTransitionToSelf = !!i881[1]
  i880.duration = i881[2]
  i880.exitTime = i881[3]
  i880.hasExitTime = !!i881[4]
  i880.hasFixedDuration = !!i881[5]
  i880.interruptionSource = i881[6]
  i880.offset = i881[7]
  i880.orderedInterruption = !!i881[8]
  i880.destinationStateId = i881[9]
  i880.isExit = !!i881[10]
  i880.mute = !!i881[11]
  i880.solo = !!i881[12]
  var i883 = i881[13]
  var i882 = []
  for(var i = 0; i < i883.length; i += 1) {
    i882.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i883[i + 0]) );
  }
  i880.conditions = i882
  return i880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i889 = data
  i888.destinationStateId = i889[0]
  i888.isExit = !!i889[1]
  i888.mute = !!i889[2]
  i888.solo = !!i889[3]
  var i891 = i889[4]
  var i890 = []
  for(var i = 0; i < i891.length; i += 1) {
    i890.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i891[i + 0]) );
  }
  i888.conditions = i890
  return i888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i895 = data
  i894.defaultBool = !!i895[0]
  i894.defaultFloat = i895[1]
  i894.defaultInt = i895[2]
  i894.name = i895[3]
  i894.nameHash = i895[4]
  i894.type = i895[5]
  return i894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i897 = data
  i896.name = i897[0]
  i896.bytes64 = i897[1]
  i896.data = i897[2]
  return i896
}

Deserializers["TrayConfig"] = function (request, data, root) {
  var i898 = root || request.c( 'TrayConfig' )
  var i899 = data
  i898.layoutType = i899[0]
  i898.columnCount = i899[1]
  i898.spacingX = i899[2]
  i898.spacingY = i899[3]
  i898.firstTrayPosition = new pc.Vec3( i899[4], i899[5], i899[6] )
  return i898
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i900 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i901 = data
  request.r(i901[0], i901[1], 0, i900, 'atlas')
  i900.normalStyle = i901[2]
  i900.normalSpacingOffset = i901[3]
  i900.boldStyle = i901[4]
  i900.boldSpacing = i901[5]
  i900.italicStyle = i901[6]
  i900.tabSize = i901[7]
  i900.hashCode = i901[8]
  request.r(i901[9], i901[10], 0, i900, 'material')
  i900.materialHashCode = i901[11]
  i900.m_Version = i901[12]
  i900.m_SourceFontFileGUID = i901[13]
  request.r(i901[14], i901[15], 0, i900, 'm_SourceFontFile_EditorRef')
  request.r(i901[16], i901[17], 0, i900, 'm_SourceFontFile')
  i900.m_AtlasPopulationMode = i901[18]
  i900.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i901[19], i900.m_FaceInfo)
  var i903 = i901[20]
  var i902 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i903.length; i += 1) {
    i902.add(request.d('UnityEngine.TextCore.Glyph', i903[i + 0]));
  }
  i900.m_GlyphTable = i902
  var i905 = i901[21]
  var i904 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i905.length; i += 1) {
    i904.add(request.d('TMPro.TMP_Character', i905[i + 0]));
  }
  i900.m_CharacterTable = i904
  var i907 = i901[22]
  var i906 = []
  for(var i = 0; i < i907.length; i += 2) {
  request.r(i907[i + 0], i907[i + 1], 2, i906, '')
  }
  i900.m_AtlasTextures = i906
  i900.m_AtlasTextureIndex = i901[23]
  i900.m_IsMultiAtlasTexturesEnabled = !!i901[24]
  i900.m_ClearDynamicDataOnBuild = !!i901[25]
  var i909 = i901[26]
  var i908 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i909.length; i += 1) {
    i908.add(request.d('UnityEngine.TextCore.GlyphRect', i909[i + 0]));
  }
  i900.m_UsedGlyphRects = i908
  var i911 = i901[27]
  var i910 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i911.length; i += 1) {
    i910.add(request.d('UnityEngine.TextCore.GlyphRect', i911[i + 0]));
  }
  i900.m_FreeGlyphRects = i910
  i900.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i901[28], i900.m_fontInfo)
  i900.m_AtlasWidth = i901[29]
  i900.m_AtlasHeight = i901[30]
  i900.m_AtlasPadding = i901[31]
  i900.m_AtlasRenderMode = i901[32]
  var i913 = i901[33]
  var i912 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i913.length; i += 1) {
    i912.add(request.d('TMPro.TMP_Glyph', i913[i + 0]));
  }
  i900.m_glyphInfoList = i912
  i900.m_KerningTable = request.d('TMPro.KerningTable', i901[34], i900.m_KerningTable)
  i900.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i901[35], i900.m_FontFeatureTable)
  var i915 = i901[36]
  var i914 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i915.length; i += 2) {
  request.r(i915[i + 0], i915[i + 1], 1, i914, '')
  }
  i900.fallbackFontAssets = i914
  var i917 = i901[37]
  var i916 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i917.length; i += 2) {
  request.r(i917[i + 0], i917[i + 1], 1, i916, '')
  }
  i900.m_FallbackFontAssetTable = i916
  i900.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i901[38], i900.m_CreationSettings)
  var i919 = i901[39]
  var i918 = []
  for(var i = 0; i < i919.length; i += 1) {
    i918.push( request.d('TMPro.TMP_FontWeightPair', i919[i + 0]) );
  }
  i900.m_FontWeightTable = i918
  var i921 = i901[40]
  var i920 = []
  for(var i = 0; i < i921.length; i += 1) {
    i920.push( request.d('TMPro.TMP_FontWeightPair', i921[i + 0]) );
  }
  i900.fontWeights = i920
  return i900
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i922 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i923 = data
  i922.m_FaceIndex = i923[0]
  i922.m_FamilyName = i923[1]
  i922.m_StyleName = i923[2]
  i922.m_PointSize = i923[3]
  i922.m_Scale = i923[4]
  i922.m_UnitsPerEM = i923[5]
  i922.m_LineHeight = i923[6]
  i922.m_AscentLine = i923[7]
  i922.m_CapLine = i923[8]
  i922.m_MeanLine = i923[9]
  i922.m_Baseline = i923[10]
  i922.m_DescentLine = i923[11]
  i922.m_SuperscriptOffset = i923[12]
  i922.m_SuperscriptSize = i923[13]
  i922.m_SubscriptOffset = i923[14]
  i922.m_SubscriptSize = i923[15]
  i922.m_UnderlineOffset = i923[16]
  i922.m_UnderlineThickness = i923[17]
  i922.m_StrikethroughOffset = i923[18]
  i922.m_StrikethroughThickness = i923[19]
  i922.m_TabWidth = i923[20]
  return i922
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i926 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i927 = data
  i926.m_Index = i927[0]
  i926.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i927[1], i926.m_Metrics)
  i926.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i927[2], i926.m_GlyphRect)
  i926.m_Scale = i927[3]
  i926.m_AtlasIndex = i927[4]
  i926.m_ClassDefinitionType = i927[5]
  return i926
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i928 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i929 = data
  i928.m_Width = i929[0]
  i928.m_Height = i929[1]
  i928.m_HorizontalBearingX = i929[2]
  i928.m_HorizontalBearingY = i929[3]
  i928.m_HorizontalAdvance = i929[4]
  return i928
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i930 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i931 = data
  i930.m_X = i931[0]
  i930.m_Y = i931[1]
  i930.m_Width = i931[2]
  i930.m_Height = i931[3]
  return i930
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i934 = root || request.c( 'TMPro.TMP_Character' )
  var i935 = data
  i934.m_ElementType = i935[0]
  i934.m_Unicode = i935[1]
  i934.m_GlyphIndex = i935[2]
  i934.m_Scale = i935[3]
  return i934
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i940 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i941 = data
  i940.Name = i941[0]
  i940.PointSize = i941[1]
  i940.Scale = i941[2]
  i940.CharacterCount = i941[3]
  i940.LineHeight = i941[4]
  i940.Baseline = i941[5]
  i940.Ascender = i941[6]
  i940.CapHeight = i941[7]
  i940.Descender = i941[8]
  i940.CenterLine = i941[9]
  i940.SuperscriptOffset = i941[10]
  i940.SubscriptOffset = i941[11]
  i940.SubSize = i941[12]
  i940.Underline = i941[13]
  i940.UnderlineThickness = i941[14]
  i940.strikethrough = i941[15]
  i940.strikethroughThickness = i941[16]
  i940.TabWidth = i941[17]
  i940.Padding = i941[18]
  i940.AtlasWidth = i941[19]
  i940.AtlasHeight = i941[20]
  return i940
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i944 = root || request.c( 'TMPro.TMP_Glyph' )
  var i945 = data
  i944.id = i945[0]
  i944.x = i945[1]
  i944.y = i945[2]
  i944.width = i945[3]
  i944.height = i945[4]
  i944.xOffset = i945[5]
  i944.yOffset = i945[6]
  i944.xAdvance = i945[7]
  i944.scale = i945[8]
  return i944
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i946 = root || request.c( 'TMPro.KerningTable' )
  var i947 = data
  var i949 = i947[0]
  var i948 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i949.length; i += 1) {
    i948.add(request.d('TMPro.KerningPair', i949[i + 0]));
  }
  i946.kerningPairs = i948
  return i946
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i952 = root || request.c( 'TMPro.KerningPair' )
  var i953 = data
  i952.xOffset = i953[0]
  i952.m_FirstGlyph = i953[1]
  i952.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i953[2], i952.m_FirstGlyphAdjustments)
  i952.m_SecondGlyph = i953[3]
  i952.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i953[4], i952.m_SecondGlyphAdjustments)
  i952.m_IgnoreSpacingAdjustments = !!i953[5]
  return i952
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i954 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i955 = data
  var i957 = i955[0]
  var i956 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i957.length; i += 1) {
    i956.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i957[i + 0]));
  }
  i954.m_GlyphPairAdjustmentRecords = i956
  return i954
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i960 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i961 = data
  i960.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i961[0], i960.m_FirstAdjustmentRecord)
  i960.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i961[1], i960.m_SecondAdjustmentRecord)
  i960.m_FeatureLookupFlags = i961[2]
  return i960
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i964 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i965 = data
  i964.sourceFontFileName = i965[0]
  i964.sourceFontFileGUID = i965[1]
  i964.pointSizeSamplingMode = i965[2]
  i964.pointSize = i965[3]
  i964.padding = i965[4]
  i964.packingMode = i965[5]
  i964.atlasWidth = i965[6]
  i964.atlasHeight = i965[7]
  i964.characterSetSelectionMode = i965[8]
  i964.characterSequence = i965[9]
  i964.referencedFontAssetGUID = i965[10]
  i964.referencedTextAssetGUID = i965[11]
  i964.fontStyle = i965[12]
  i964.fontStyleModifier = i965[13]
  i964.renderMode = i965[14]
  i964.includeFontFeatures = !!i965[15]
  return i964
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i968 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i969 = data
  request.r(i969[0], i969[1], 0, i968, 'regularTypeface')
  request.r(i969[2], i969[3], 0, i968, 'italicTypeface')
  return i968
}

Deserializers["MatchConfig"] = function (request, data, root) {
  var i970 = root || request.c( 'MatchConfig' )
  var i971 = data
  i970.useFire = !!i971[0]
  i970.useEffect = !!i971[1]
  i970.useBlink = !!i971[2]
  i970.useGather = !!i971[3]
  i970.useFlyToTarget = !!i971[4]
  i970.useCloseBox = !!i971[5]
  i970.useTextPerfect = !!i971[6]
  i970.flyType = i971[7]
  return i970
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i972 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i973 = data
  i972.useSafeMode = !!i973[0]
  i972.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i973[1], i972.safeModeOptions)
  i972.timeScale = i973[2]
  i972.unscaledTimeScale = i973[3]
  i972.useSmoothDeltaTime = !!i973[4]
  i972.maxSmoothUnscaledTime = i973[5]
  i972.rewindCallbackMode = i973[6]
  i972.showUnityEditorReport = !!i973[7]
  i972.logBehaviour = i973[8]
  i972.drawGizmos = !!i973[9]
  i972.defaultRecyclable = !!i973[10]
  i972.defaultAutoPlay = i973[11]
  i972.defaultUpdateType = i973[12]
  i972.defaultTimeScaleIndependent = !!i973[13]
  i972.defaultEaseType = i973[14]
  i972.defaultEaseOvershootOrAmplitude = i973[15]
  i972.defaultEasePeriod = i973[16]
  i972.defaultAutoKill = !!i973[17]
  i972.defaultLoopType = i973[18]
  i972.debugMode = !!i973[19]
  i972.debugStoreTargetId = !!i973[20]
  i972.showPreviewPanel = !!i973[21]
  i972.storeSettingsLocation = i973[22]
  i972.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i973[23], i972.modules)
  i972.createASMDEF = !!i973[24]
  i972.showPlayingTweens = !!i973[25]
  i972.showPausedTweens = !!i973[26]
  return i972
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i974 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i975 = data
  i974.logBehaviour = i975[0]
  i974.nestedTweenFailureBehaviour = i975[1]
  return i974
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i976 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i977 = data
  i976.showPanel = !!i977[0]
  i976.audioEnabled = !!i977[1]
  i976.physicsEnabled = !!i977[2]
  i976.physics2DEnabled = !!i977[3]
  i976.spriteEnabled = !!i977[4]
  i976.uiEnabled = !!i977[5]
  i976.textMeshProEnabled = !!i977[6]
  i976.tk2DEnabled = !!i977[7]
  i976.deAudioEnabled = !!i977[8]
  i976.deUnityExtendedEnabled = !!i977[9]
  i976.epoOutlineEnabled = !!i977[10]
  return i976
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i978 = root || request.c( 'TMPro.TMP_Settings' )
  var i979 = data
  i978.m_enableWordWrapping = !!i979[0]
  i978.m_enableKerning = !!i979[1]
  i978.m_enableExtraPadding = !!i979[2]
  i978.m_enableTintAllSprites = !!i979[3]
  i978.m_enableParseEscapeCharacters = !!i979[4]
  i978.m_EnableRaycastTarget = !!i979[5]
  i978.m_GetFontFeaturesAtRuntime = !!i979[6]
  i978.m_missingGlyphCharacter = i979[7]
  i978.m_warningsDisabled = !!i979[8]
  request.r(i979[9], i979[10], 0, i978, 'm_defaultFontAsset')
  i978.m_defaultFontAssetPath = i979[11]
  i978.m_defaultFontSize = i979[12]
  i978.m_defaultAutoSizeMinRatio = i979[13]
  i978.m_defaultAutoSizeMaxRatio = i979[14]
  i978.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i979[15], i979[16] )
  i978.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i979[17], i979[18] )
  i978.m_autoSizeTextContainer = !!i979[19]
  i978.m_IsTextObjectScaleStatic = !!i979[20]
  var i981 = i979[21]
  var i980 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i981.length; i += 2) {
  request.r(i981[i + 0], i981[i + 1], 1, i980, '')
  }
  i978.m_fallbackFontAssets = i980
  i978.m_matchMaterialPreset = !!i979[22]
  request.r(i979[23], i979[24], 0, i978, 'm_defaultSpriteAsset')
  i978.m_defaultSpriteAssetPath = i979[25]
  i978.m_enableEmojiSupport = !!i979[26]
  i978.m_MissingCharacterSpriteUnicode = i979[27]
  i978.m_defaultColorGradientPresetsPath = i979[28]
  request.r(i979[29], i979[30], 0, i978, 'm_defaultStyleSheet')
  i978.m_StyleSheetsResourcePath = i979[31]
  request.r(i979[32], i979[33], 0, i978, 'm_leadingCharacters')
  request.r(i979[34], i979[35], 0, i978, 'm_followingCharacters')
  i978.m_UseModernHangulLineBreakingRules = !!i979[36]
  return i978
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i982 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i983 = data
  i982.m_GlyphIndex = i983[0]
  i982.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i983[1], i982.m_GlyphValueRecord)
  return i982
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i984 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i985 = data
  i984.m_XPlacement = i985[0]
  i984.m_YPlacement = i985[1]
  i984.m_XAdvance = i985[2]
  i984.m_YAdvance = i985[3]
  return i984
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i986 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i987 = data
  request.r(i987[0], i987[1], 0, i986, 'spriteSheet')
  var i989 = i987[2]
  var i988 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i989.length; i += 1) {
    i988.add(request.d('TMPro.TMP_Sprite', i989[i + 0]));
  }
  i986.spriteInfoList = i988
  var i991 = i987[3]
  var i990 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i991.length; i += 2) {
  request.r(i991[i + 0], i991[i + 1], 1, i990, '')
  }
  i986.fallbackSpriteAssets = i990
  i986.hashCode = i987[4]
  request.r(i987[5], i987[6], 0, i986, 'material')
  i986.materialHashCode = i987[7]
  i986.m_Version = i987[8]
  i986.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i987[9], i986.m_FaceInfo)
  var i993 = i987[10]
  var i992 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i993.length; i += 1) {
    i992.add(request.d('TMPro.TMP_SpriteCharacter', i993[i + 0]));
  }
  i986.m_SpriteCharacterTable = i992
  var i995 = i987[11]
  var i994 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i995.length; i += 1) {
    i994.add(request.d('TMPro.TMP_SpriteGlyph', i995[i + 0]));
  }
  i986.m_SpriteGlyphTable = i994
  return i986
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i998 = root || request.c( 'TMPro.TMP_Sprite' )
  var i999 = data
  i998.name = i999[0]
  i998.hashCode = i999[1]
  i998.unicode = i999[2]
  i998.pivot = new pc.Vec2( i999[3], i999[4] )
  request.r(i999[5], i999[6], 0, i998, 'sprite')
  i998.id = i999[7]
  i998.x = i999[8]
  i998.y = i999[9]
  i998.width = i999[10]
  i998.height = i999[11]
  i998.xOffset = i999[12]
  i998.yOffset = i999[13]
  i998.xAdvance = i999[14]
  i998.scale = i999[15]
  return i998
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1004 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1005 = data
  i1004.m_Name = i1005[0]
  i1004.m_HashCode = i1005[1]
  i1004.m_ElementType = i1005[2]
  i1004.m_Unicode = i1005[3]
  i1004.m_GlyphIndex = i1005[4]
  i1004.m_Scale = i1005[5]
  return i1004
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1008 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1009 = data
  request.r(i1009[0], i1009[1], 0, i1008, 'sprite')
  i1008.m_Index = i1009[2]
  i1008.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1009[3], i1008.m_Metrics)
  i1008.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1009[4], i1008.m_GlyphRect)
  i1008.m_Scale = i1009[5]
  i1008.m_AtlasIndex = i1009[6]
  i1008.m_ClassDefinitionType = i1009[7]
  return i1008
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1010 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1011 = data
  var i1013 = i1011[0]
  var i1012 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1013.length; i += 1) {
    i1012.add(request.d('TMPro.TMP_Style', i1013[i + 0]));
  }
  i1010.m_StyleList = i1012
  return i1010
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1016 = root || request.c( 'TMPro.TMP_Style' )
  var i1017 = data
  i1016.m_Name = i1017[0]
  i1016.m_HashCode = i1017[1]
  i1016.m_OpeningDefinition = i1017[2]
  i1016.m_ClosingDefinition = i1017[3]
  i1016.m_OpeningTagArray = i1017[4]
  i1016.m_ClosingTagArray = i1017[5]
  i1016.m_OpeningTagUnicodeArray = i1017[6]
  i1016.m_ClosingTagUnicodeArray = i1017[7]
  return i1016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1019 = data
  var i1021 = i1019[0]
  var i1020 = []
  for(var i = 0; i < i1021.length; i += 1) {
    i1020.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1021[i + 0]) );
  }
  i1018.files = i1020
  i1018.componentToPrefabIds = i1019[1]
  return i1018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1025 = data
  i1024.path = i1025[0]
  request.r(i1025[1], i1025[2], 0, i1024, 'unityObject')
  return i1024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1027 = data
  var i1029 = i1027[0]
  var i1028 = []
  for(var i = 0; i < i1029.length; i += 1) {
    i1028.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1029[i + 0]) );
  }
  i1026.scriptsExecutionOrder = i1028
  var i1031 = i1027[1]
  var i1030 = []
  for(var i = 0; i < i1031.length; i += 1) {
    i1030.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1031[i + 0]) );
  }
  i1026.sortingLayers = i1030
  var i1033 = i1027[2]
  var i1032 = []
  for(var i = 0; i < i1033.length; i += 1) {
    i1032.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1033[i + 0]) );
  }
  i1026.cullingLayers = i1032
  i1026.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1027[3], i1026.timeSettings)
  i1026.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1027[4], i1026.physicsSettings)
  i1026.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1027[5], i1026.physics2DSettings)
  i1026.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1027[6], i1026.qualitySettings)
  i1026.enableRealtimeShadows = !!i1027[7]
  i1026.enableAutoInstancing = !!i1027[8]
  i1026.enableStaticBatching = !!i1027[9]
  i1026.enableDynamicBatching = !!i1027[10]
  i1026.lightmapEncodingQuality = i1027[11]
  i1026.desiredColorSpace = i1027[12]
  var i1035 = i1027[13]
  var i1034 = []
  for(var i = 0; i < i1035.length; i += 1) {
    i1034.push( i1035[i + 0] );
  }
  i1026.allTags = i1034
  return i1026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1039 = data
  i1038.name = i1039[0]
  i1038.value = i1039[1]
  return i1038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1043 = data
  i1042.id = i1043[0]
  i1042.name = i1043[1]
  i1042.value = i1043[2]
  return i1042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1047 = data
  i1046.id = i1047[0]
  i1046.name = i1047[1]
  return i1046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1049 = data
  i1048.fixedDeltaTime = i1049[0]
  i1048.maximumDeltaTime = i1049[1]
  i1048.timeScale = i1049[2]
  i1048.maximumParticleTimestep = i1049[3]
  return i1048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1051 = data
  i1050.gravity = new pc.Vec3( i1051[0], i1051[1], i1051[2] )
  i1050.defaultSolverIterations = i1051[3]
  i1050.bounceThreshold = i1051[4]
  i1050.autoSyncTransforms = !!i1051[5]
  i1050.autoSimulation = !!i1051[6]
  var i1053 = i1051[7]
  var i1052 = []
  for(var i = 0; i < i1053.length; i += 1) {
    i1052.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1053[i + 0]) );
  }
  i1050.collisionMatrix = i1052
  return i1050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1057 = data
  i1056.enabled = !!i1057[0]
  i1056.layerId = i1057[1]
  i1056.otherLayerId = i1057[2]
  return i1056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1059 = data
  request.r(i1059[0], i1059[1], 0, i1058, 'material')
  i1058.gravity = new pc.Vec2( i1059[2], i1059[3] )
  i1058.positionIterations = i1059[4]
  i1058.velocityIterations = i1059[5]
  i1058.velocityThreshold = i1059[6]
  i1058.maxLinearCorrection = i1059[7]
  i1058.maxAngularCorrection = i1059[8]
  i1058.maxTranslationSpeed = i1059[9]
  i1058.maxRotationSpeed = i1059[10]
  i1058.baumgarteScale = i1059[11]
  i1058.baumgarteTOIScale = i1059[12]
  i1058.timeToSleep = i1059[13]
  i1058.linearSleepTolerance = i1059[14]
  i1058.angularSleepTolerance = i1059[15]
  i1058.defaultContactOffset = i1059[16]
  i1058.autoSimulation = !!i1059[17]
  i1058.queriesHitTriggers = !!i1059[18]
  i1058.queriesStartInColliders = !!i1059[19]
  i1058.callbacksOnDisable = !!i1059[20]
  i1058.reuseCollisionCallbacks = !!i1059[21]
  i1058.autoSyncTransforms = !!i1059[22]
  var i1061 = i1059[23]
  var i1060 = []
  for(var i = 0; i < i1061.length; i += 1) {
    i1060.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1061[i + 0]) );
  }
  i1058.collisionMatrix = i1060
  return i1058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1065 = data
  i1064.enabled = !!i1065[0]
  i1064.layerId = i1065[1]
  i1064.otherLayerId = i1065[2]
  return i1064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1067 = data
  var i1069 = i1067[0]
  var i1068 = []
  for(var i = 0; i < i1069.length; i += 1) {
    i1068.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1069[i + 0]) );
  }
  i1066.qualityLevels = i1068
  var i1071 = i1067[1]
  var i1070 = []
  for(var i = 0; i < i1071.length; i += 1) {
    i1070.push( i1071[i + 0] );
  }
  i1066.names = i1070
  i1066.shadows = i1067[2]
  i1066.anisotropicFiltering = i1067[3]
  i1066.antiAliasing = i1067[4]
  i1066.lodBias = i1067[5]
  i1066.shadowCascades = i1067[6]
  i1066.shadowDistance = i1067[7]
  i1066.shadowmaskMode = i1067[8]
  i1066.shadowProjection = i1067[9]
  i1066.shadowResolution = i1067[10]
  i1066.softParticles = !!i1067[11]
  i1066.softVegetation = !!i1067[12]
  i1066.activeColorSpace = i1067[13]
  i1066.desiredColorSpace = i1067[14]
  i1066.masterTextureLimit = i1067[15]
  i1066.maxQueuedFrames = i1067[16]
  i1066.particleRaycastBudget = i1067[17]
  i1066.pixelLightCount = i1067[18]
  i1066.realtimeReflectionProbes = !!i1067[19]
  i1066.shadowCascade2Split = i1067[20]
  i1066.shadowCascade4Split = new pc.Vec3( i1067[21], i1067[22], i1067[23] )
  i1066.streamingMipmapsActive = !!i1067[24]
  i1066.vSyncCount = i1067[25]
  i1066.asyncUploadBufferSize = i1067[26]
  i1066.asyncUploadTimeSlice = i1067[27]
  i1066.billboardsFaceCameraPosition = !!i1067[28]
  i1066.shadowNearPlaneOffset = i1067[29]
  i1066.streamingMipmapsMemoryBudget = i1067[30]
  i1066.maximumLODLevel = i1067[31]
  i1066.streamingMipmapsAddAllCameras = !!i1067[32]
  i1066.streamingMipmapsMaxLevelReduction = i1067[33]
  i1066.streamingMipmapsRenderersPerFrame = i1067[34]
  i1066.resolutionScalingFixedDPIFactor = i1067[35]
  i1066.streamingMipmapsMaxFileIORequests = i1067[36]
  i1066.currentQualityLevel = i1067[37]
  return i1066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1077 = data
  i1076.mode = i1077[0]
  i1076.parameter = i1077[1]
  i1076.threshold = i1077[2]
  return i1076
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1078 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1079 = data
  i1078.xPlacement = i1079[0]
  i1078.yPlacement = i1079[1]
  i1078.xAdvance = i1079[2]
  i1078.yAdvance = i1079[3]
  return i1078
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"disableBatching":11,"compiled":12},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"51":[52],"53":[52],"54":[52],"55":[52],"56":[52],"57":[52],"58":[59],"60":[11],"61":[62],"63":[62],"64":[62],"65":[62],"66":[62],"67":[62],"68":[62],"69":[25],"70":[25],"71":[25],"72":[25],"73":[25],"74":[25],"75":[25],"76":[25],"77":[25],"78":[25],"79":[25],"80":[25],"81":[25],"82":[11],"83":[84],"85":[86],"87":[86],"27":[26],"88":[89],"90":[11],"13":[11],"91":[26],"92":[93],"94":[95],"96":[84,97],"98":[99],"100":[95],"101":[102],"103":[95],"104":[95],"105":[106],"107":[106],"108":[95],"109":[110],"111":[3],"112":[110],"113":[26],"114":[26],"30":[27],"32":[31,26],"115":[26],"29":[27],"116":[26],"117":[26],"118":[26],"119":[26],"120":[26],"121":[26],"122":[26],"123":[26],"124":[26],"125":[31,26],"126":[26],"127":[26],"128":[26],"41":[26],"129":[31,26],"130":[26],"131":[37],"132":[37],"38":[37],"133":[37],"134":[11],"135":[11],"136":[137],"138":[11],"139":[140],"141":[26],"142":[31,26],"143":[84],"99":[31,26],"144":[8,84],"95":[84],"145":[84,97],"146":[62],"147":[25],"148":[140],"149":[106],"150":[26],"151":[84,26],"35":[26,31],"152":[26],"153":[31,26],"154":[84],"155":[31,26],"156":[26],"157":[110]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Material","UnityEngine.MonoBehaviour","Disk","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","HandHint","UnityEngine.Camera","UnityEngine.AudioListener","CheckSize","GameManager","AudioManager","UnityEngine.AudioSource","UnityEngine.AudioClip","TrayManager","TrayConfig","Tray","DragItem","UnityEngine.GameObject","UnityEngine.BoxCollider2D","Slot","UnityEngine.Rigidbody2D","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.UI.Button","ScalePopLoop","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","TutorialBeginRunner","ActiveTutorialBegin","UnityEngine.UI.Slider","TutorialManager","MatchFlowManager","MatchConfig","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.Font","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","AutoFlip","Book","CameraAutoSize","UIRangeSliderNamespace.UIRangeSlider","Spine.Unity.Examples.BasicPlatformerController","UnityEngine.CharacterController","Spine.Unity.Examples.SkeletonGhost","Spine.Unity.SkeletonRenderer","Spine.Unity.Examples.RenderExistingMesh","UnityEngine.MeshFilter","Spine.Unity.Examples.SkeletonGraphicRenderTexture","Spine.Unity.SkeletonGraphic","Spine.Unity.Examples.SkeletonRenderTexture","Spine.Unity.Examples.SkeletonRenderTextureFadeout","Spine.Unity.Examples.SkeletonRenderTextureBase","Spine.Unity.Examples.SkeletonRagdoll","Spine.Unity.Examples.SkeletonRagdoll2D","Spine.Unity.Examples.SkeletonUtilityEyeConstraint","Spine.Unity.SkeletonUtilityBone","Spine.Unity.Examples.SkeletonUtilityGroundConstraint","Spine.Unity.Examples.SpineGauge","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","Spine.Unity.SkeletonPartsRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.62f3";

Deserializers.productName = "Prj_Demo";

Deserializers.lunaInitializationTime = "12/18/2025 04:11:57";

Deserializers.lunaDaysRunning = "27.2";

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

Deserializers.buildID = "a6000b67-ce93-4ae9-84ed-49a6cedb0f6d";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

