var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2960 = root || request.c( 'UnityEngine.JointSpring' )
  var i2961 = data
  i2960.spring = i2961[0]
  i2960.damper = i2961[1]
  i2960.targetPosition = i2961[2]
  return i2960
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2962 = root || request.c( 'UnityEngine.JointMotor' )
  var i2963 = data
  i2962.m_TargetVelocity = i2963[0]
  i2962.m_Force = i2963[1]
  i2962.m_FreeSpin = i2963[2]
  return i2962
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2964 = root || request.c( 'UnityEngine.JointLimits' )
  var i2965 = data
  i2964.m_Min = i2965[0]
  i2964.m_Max = i2965[1]
  i2964.m_Bounciness = i2965[2]
  i2964.m_BounceMinVelocity = i2965[3]
  i2964.m_ContactDistance = i2965[4]
  i2964.minBounce = i2965[5]
  i2964.maxBounce = i2965[6]
  return i2964
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2966 = root || request.c( 'UnityEngine.JointDrive' )
  var i2967 = data
  i2966.m_PositionSpring = i2967[0]
  i2966.m_PositionDamper = i2967[1]
  i2966.m_MaximumForce = i2967[2]
  i2966.m_UseAcceleration = i2967[3]
  return i2966
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2968 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2969 = data
  i2968.m_Spring = i2969[0]
  i2968.m_Damper = i2969[1]
  return i2968
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2970 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2971 = data
  i2970.m_Limit = i2971[0]
  i2970.m_Bounciness = i2971[1]
  i2970.m_ContactDistance = i2971[2]
  return i2970
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2972 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2973 = data
  i2972.m_ExtremumSlip = i2973[0]
  i2972.m_ExtremumValue = i2973[1]
  i2972.m_AsymptoteSlip = i2973[2]
  i2972.m_AsymptoteValue = i2973[3]
  i2972.m_Stiffness = i2973[4]
  return i2972
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2974 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2975 = data
  i2974.m_LowerAngle = i2975[0]
  i2974.m_UpperAngle = i2975[1]
  return i2974
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2976 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2977 = data
  i2976.m_MotorSpeed = i2977[0]
  i2976.m_MaximumMotorTorque = i2977[1]
  return i2976
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2978 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2979 = data
  i2978.m_DampingRatio = i2979[0]
  i2978.m_Frequency = i2979[1]
  i2978.m_Angle = i2979[2]
  return i2978
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2980 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2981 = data
  i2980.m_LowerTranslation = i2981[0]
  i2980.m_UpperTranslation = i2981[1]
  return i2980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2982 = root || new pc.UnityMaterial()
  var i2983 = data
  i2982.name = i2983[0]
  request.r(i2983[1], i2983[2], 0, i2982, 'shader')
  i2982.renderQueue = i2983[3]
  i2982.enableInstancing = !!i2983[4]
  var i2985 = i2983[5]
  var i2984 = []
  for(var i = 0; i < i2985.length; i += 1) {
    i2984.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2985[i + 0]) );
  }
  i2982.floatParameters = i2984
  var i2987 = i2983[6]
  var i2986 = []
  for(var i = 0; i < i2987.length; i += 1) {
    i2986.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2987[i + 0]) );
  }
  i2982.colorParameters = i2986
  var i2989 = i2983[7]
  var i2988 = []
  for(var i = 0; i < i2989.length; i += 1) {
    i2988.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2989[i + 0]) );
  }
  i2982.vectorParameters = i2988
  var i2991 = i2983[8]
  var i2990 = []
  for(var i = 0; i < i2991.length; i += 1) {
    i2990.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2991[i + 0]) );
  }
  i2982.textureParameters = i2990
  var i2993 = i2983[9]
  var i2992 = []
  for(var i = 0; i < i2993.length; i += 1) {
    i2992.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2993[i + 0]) );
  }
  i2982.materialFlags = i2992
  return i2982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2997 = data
  i2996.name = i2997[0]
  i2996.value = i2997[1]
  return i2996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i3000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i3001 = data
  i3000.name = i3001[0]
  i3000.value = new pc.Color(i3001[1], i3001[2], i3001[3], i3001[4])
  return i3000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i3004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i3005 = data
  i3004.name = i3005[0]
  i3004.value = new pc.Vec4( i3005[1], i3005[2], i3005[3], i3005[4] )
  return i3004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i3008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i3009 = data
  i3008.name = i3009[0]
  request.r(i3009[1], i3009[2], 0, i3008, 'value')
  return i3008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i3012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i3013 = data
  i3012.name = i3013[0]
  i3012.enabled = !!i3013[1]
  return i3012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i3014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i3015 = data
  i3014.name = i3015[0]
  i3014.width = i3015[1]
  i3014.height = i3015[2]
  i3014.mipmapCount = i3015[3]
  i3014.anisoLevel = i3015[4]
  i3014.filterMode = i3015[5]
  i3014.hdr = !!i3015[6]
  i3014.format = i3015[7]
  i3014.wrapMode = i3015[8]
  i3014.alphaIsTransparency = !!i3015[9]
  i3014.alphaSource = i3015[10]
  i3014.graphicsFormat = i3015[11]
  i3014.sRGBTexture = !!i3015[12]
  i3014.desiredColorSpace = i3015[13]
  i3014.wrapU = i3015[14]
  i3014.wrapV = i3015[15]
  return i3014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i3016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i3017 = data
  i3016.position = new pc.Vec3( i3017[0], i3017[1], i3017[2] )
  i3016.scale = new pc.Vec3( i3017[3], i3017[4], i3017[5] )
  i3016.rotation = new pc.Quat(i3017[6], i3017[7], i3017[8], i3017[9])
  return i3016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i3018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i3019 = data
  i3018.color = new pc.Color(i3019[0], i3019[1], i3019[2], i3019[3])
  request.r(i3019[4], i3019[5], 0, i3018, 'sprite')
  i3018.flipX = !!i3019[6]
  i3018.flipY = !!i3019[7]
  i3018.drawMode = i3019[8]
  i3018.size = new pc.Vec2( i3019[9], i3019[10] )
  i3018.tileMode = i3019[11]
  i3018.adaptiveModeThreshold = i3019[12]
  i3018.maskInteraction = i3019[13]
  i3018.spriteSortPoint = i3019[14]
  i3018.enabled = !!i3019[15]
  request.r(i3019[16], i3019[17], 0, i3018, 'sharedMaterial')
  var i3021 = i3019[18]
  var i3020 = []
  for(var i = 0; i < i3021.length; i += 2) {
  request.r(i3021[i + 0], i3021[i + 1], 2, i3020, '')
  }
  i3018.sharedMaterials = i3020
  i3018.receiveShadows = !!i3019[19]
  i3018.shadowCastingMode = i3019[20]
  i3018.sortingLayerID = i3019[21]
  i3018.sortingOrder = i3019[22]
  i3018.lightmapIndex = i3019[23]
  i3018.lightmapSceneIndex = i3019[24]
  i3018.lightmapScaleOffset = new pc.Vec4( i3019[25], i3019[26], i3019[27], i3019[28] )
  i3018.lightProbeUsage = i3019[29]
  i3018.reflectionProbeUsage = i3019[30]
  return i3018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i3024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i3025 = data
  i3024.name = i3025[0]
  i3024.tagId = i3025[1]
  i3024.enabled = !!i3025[2]
  i3024.isStatic = !!i3025[3]
  i3024.layer = i3025[4]
  return i3024
}

Deserializers["Disk"] = function (request, data, root) {
  var i3026 = root || request.c( 'Disk' )
  var i3027 = data
  i3026.requiredCount = i3027[0]
  i3026.moveDistance = i3027[1]
  i3026.moveTime = i3027[2]
  return i3026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i3028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i3029 = data
  request.r(i3029[0], i3029[1], 0, i3028, 'animatorController')
  request.r(i3029[2], i3029[3], 0, i3028, 'avatar')
  i3028.updateMode = i3029[4]
  i3028.hasTransformHierarchy = !!i3029[5]
  i3028.applyRootMotion = !!i3029[6]
  var i3031 = i3029[7]
  var i3030 = []
  for(var i = 0; i < i3031.length; i += 2) {
  request.r(i3031[i + 0], i3031[i + 1], 2, i3030, '')
  }
  i3028.humanBones = i3030
  i3028.enabled = !!i3029[8]
  return i3028
}

Deserializers["HandHint"] = function (request, data, root) {
  var i3034 = root || request.c( 'HandHint' )
  var i3035 = data
  request.r(i3035[0], i3035[1], 0, i3034, 'previewRenderer')
  return i3034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i3036 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i3037 = data
  i3036.name = i3037[0]
  i3036.index = i3037[1]
  i3036.startup = !!i3037[2]
  return i3036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i3038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i3039 = data
  i3038.aspect = i3039[0]
  i3038.orthographic = !!i3039[1]
  i3038.orthographicSize = i3039[2]
  i3038.backgroundColor = new pc.Color(i3039[3], i3039[4], i3039[5], i3039[6])
  i3038.nearClipPlane = i3039[7]
  i3038.farClipPlane = i3039[8]
  i3038.fieldOfView = i3039[9]
  i3038.depth = i3039[10]
  i3038.clearFlags = i3039[11]
  i3038.cullingMask = i3039[12]
  i3038.rect = i3039[13]
  request.r(i3039[14], i3039[15], 0, i3038, 'targetTexture')
  i3038.usePhysicalProperties = !!i3039[16]
  i3038.focalLength = i3039[17]
  i3038.sensorSize = new pc.Vec2( i3039[18], i3039[19] )
  i3038.lensShift = new pc.Vec2( i3039[20], i3039[21] )
  i3038.gateFit = i3039[22]
  i3038.commandBufferCount = i3039[23]
  i3038.cameraType = i3039[24]
  i3038.enabled = !!i3039[25]
  return i3038
}

Deserializers["CheckSize"] = function (request, data, root) {
  var i3040 = root || request.c( 'CheckSize' )
  var i3041 = data
  i3040.size16by9 = i3041[0]
  i3040.size18by9 = i3041[1]
  i3040.sizeLong = i3041[2]
  request.r(i3041[3], i3041[4], 0, i3040, 'diskTransform')
  i3040.diskPos16by9 = new pc.Vec3( i3041[5], i3041[6], i3041[7] )
  i3040.diskPosLong = new pc.Vec3( i3041[8], i3041[9], i3041[10] )
  request.r(i3041[11], i3041[12], 0, i3040, 'trayManager')
  request.r(i3041[13], i3041[14], 0, i3040, 'button_doc')
  request.r(i3041[15], i3041[16], 0, i3040, 'target')
  request.r(i3041[17], i3041[18], 0, i3040, 'timer')
  request.r(i3041[19], i3041[20], 0, i3040, 'logoGame')
  request.r(i3041[21], i3041[22], 0, i3040, 'buttonGame')
  return i3040
}

Deserializers["GameManager"] = function (request, data, root) {
  var i3042 = root || request.c( 'GameManager' )
  var i3043 = data
  i3042.isClickToLog = !!i3043[0]
  i3042.clicksToLog = i3043[1]
  i3042.isTimer = !!i3043[2]
  i3042.time = i3043[3]
  i3042.clickCount = i3043[4]
  i3042.isClick = !!i3043[5]
  i3042.finishGame = !!i3043[6]
  request.r(i3043[7], i3043[8], 0, i3042, 'textPoint')
  i3042.point = i3043[9]
  request.r(i3043[10], i3043[11], 0, i3042, 'tutGame')
  request.r(i3043[12], i3043[13], 0, i3042, 'target')
  request.r(i3043[14], i3043[15], 0, i3042, 'text_target')
  i3042.totalTime = i3043[16]
  return i3042
}

Deserializers["TutorialManager"] = function (request, data, root) {
  var i3044 = root || request.c( 'TutorialManager' )
  var i3045 = data
  request.r(i3045[0], i3045[1], 0, i3044, 'handPrefab')
  return i3044
}

Deserializers["AudioManager"] = function (request, data, root) {
  var i3046 = root || request.c( 'AudioManager' )
  var i3047 = data
  request.r(i3047[0], i3047[1], 0, i3046, 'bgmSource')
  request.r(i3047[2], i3047[3], 0, i3046, 'sfxSource')
  request.r(i3047[4], i3047[5], 0, i3046, 'bgm')
  request.r(i3047[6], i3047[7], 0, i3046, 'finish')
  request.r(i3047[8], i3047[9], 0, i3046, 'drog')
  request.r(i3047[10], i3047[11], 0, i3046, 'match')
  request.r(i3047[12], i3047[13], 0, i3046, 'pop')
  request.r(i3047[14], i3047[15], 0, i3046, 'lose')
  request.r(i3047[16], i3047[17], 0, i3046, 'drag')
  request.r(i3047[18], i3047[19], 0, i3046, 'closeBox')
  request.r(i3047[20], i3047[21], 0, i3046, 'normalTick')
  request.r(i3047[22], i3047[23], 0, i3046, 'warningTick')
  return i3046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i3048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i3049 = data
  request.r(i3049[0], i3049[1], 0, i3048, 'clip')
  request.r(i3049[2], i3049[3], 0, i3048, 'outputAudioMixerGroup')
  i3048.playOnAwake = !!i3049[4]
  i3048.loop = !!i3049[5]
  i3048.time = i3049[6]
  i3048.volume = i3049[7]
  i3048.pitch = i3049[8]
  i3048.enabled = !!i3049[9]
  return i3048
}

Deserializers["TrayManager"] = function (request, data, root) {
  var i3050 = root || request.c( 'TrayManager' )
  var i3051 = data
  i3050.spacing = i3051[0]
  i3050.visibleCount = i3051[1]
  i3050.moveTime = i3051[2]
  request.r(i3051[3], i3051[4], 0, i3050, 'win')
  var i3053 = i3051[5]
  var i3052 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i3053.length; i += 2) {
  request.r(i3053[i + 0], i3053[i + 1], 1, i3052, '')
  }
  i3050.listTray = i3052
  var i3055 = i3051[6]
  var i3054 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i3055.length; i += 2) {
  request.r(i3055[i + 0], i3055[i + 1], 1, i3054, '')
  }
  i3050.activeTrays = i3054
  i3050.idleTime = i3051[7]
  i3050.hintDelay = i3051[8]
  i3050.isTutorialShowing = !!i3051[9]
  i3050.isFirstTutorial = !!i3051[10]
  request.r(i3051[11], i3051[12], 0, i3050, 'manualTray')
  request.r(i3051[13], i3051[14], 0, i3050, 'manualItem')
  i3050.columns = i3051[15]
  i3050.rows = i3051[16]
  i3050.stepX = i3051[17]
  i3050.stepY = i3051[18]
  return i3050
}

Deserializers["Tray"] = function (request, data, root) {
  var i3060 = root || request.c( 'Tray' )
  var i3061 = data
  i3060.spacing = i3061[0]
  i3060.moveTime = i3061[1]
  request.r(i3061[2], i3061[3], 0, i3060, 'diskPrefab')
  request.r(i3061[4], i3061[5], 0, i3060, 'diskTransform')
  i3060.shrinkTime = i3061[6]
  i3060.itemToDiskTime = i3061[7]
  i3060.attachDelay = i3061[8]
  i3060.followSmooth = i3061[9]
  i3060.diskItemScale = new pc.Vec3( i3061[10], i3061[11], i3061[12] )
  request.r(i3061[13], i3061[14], 0, i3060, 'soldOutPrefabs')
  var i3063 = i3061[15]
  var i3062 = []
  for(var i = 0; i < i3063.length; i += 2) {
  request.r(i3063[i + 0], i3063[i + 1], 2, i3062, '')
  }
  i3060.listItem = i3062
  i3060.maxSlot = i3061[16]
  i3060.isCompleted = !!i3061[17]
  var i3065 = i3061[18]
  var i3064 = []
  for(var i = 0; i < i3065.length; i += 2) {
  request.r(i3065[i + 0], i3065[i + 1], 2, i3064, '')
  }
  i3060.slots = i3064
  i3060.isClosed = !!i3061[19]
  request.r(i3061[20], i3061[21], 0, i3060, 'fireEffectPrefab')
  i3060.fireEffectTime = i3061[22]
  return i3060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i3070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i3071 = data
  i3070.usedByComposite = !!i3071[0]
  i3070.autoTiling = !!i3071[1]
  i3070.size = new pc.Vec2( i3071[2], i3071[3] )
  i3070.edgeRadius = i3071[4]
  i3070.enabled = !!i3071[5]
  i3070.isTrigger = !!i3071[6]
  i3070.usedByEffector = !!i3071[7]
  i3070.density = i3071[8]
  i3070.offset = new pc.Vec2( i3071[9], i3071[10] )
  request.r(i3071[11], i3071[12], 0, i3070, 'material')
  return i3070
}

Deserializers["Slot"] = function (request, data, root) {
  var i3072 = root || request.c( 'Slot' )
  var i3073 = data
  request.r(i3073[0], i3073[1], 0, i3072, 'anchor')
  request.r(i3073[2], i3073[3], 0, i3072, 'currentItem')
  request.r(i3073[4], i3073[5], 0, i3072, 'tray')
  return i3072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i3074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i3075 = data
  i3074.bodyType = i3075[0]
  request.r(i3075[1], i3075[2], 0, i3074, 'material')
  i3074.simulated = !!i3075[3]
  i3074.useAutoMass = !!i3075[4]
  i3074.mass = i3075[5]
  i3074.drag = i3075[6]
  i3074.angularDrag = i3075[7]
  i3074.gravityScale = i3075[8]
  i3074.collisionDetectionMode = i3075[9]
  i3074.sleepMode = i3075[10]
  i3074.constraints = i3075[11]
  return i3074
}

Deserializers["DragItem"] = function (request, data, root) {
  var i3076 = root || request.c( 'DragItem' )
  var i3077 = data
  i3076.isLocked = !!i3077[0]
  i3076.focusOutlineSize = i3077[1]
  i3076.outlineTweenTime = i3077[2]
  return i3076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i3078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i3079 = data
  i3078.pivot = new pc.Vec2( i3079[0], i3079[1] )
  i3078.anchorMin = new pc.Vec2( i3079[2], i3079[3] )
  i3078.anchorMax = new pc.Vec2( i3079[4], i3079[5] )
  i3078.sizeDelta = new pc.Vec2( i3079[6], i3079[7] )
  i3078.anchoredPosition3D = new pc.Vec3( i3079[8], i3079[9], i3079[10] )
  i3078.rotation = new pc.Quat(i3079[11], i3079[12], i3079[13], i3079[14])
  i3078.scale = new pc.Vec3( i3079[15], i3079[16], i3079[17] )
  return i3078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i3080 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i3081 = data
  i3080.planeDistance = i3081[0]
  i3080.referencePixelsPerUnit = i3081[1]
  i3080.isFallbackOverlay = !!i3081[2]
  i3080.renderMode = i3081[3]
  i3080.renderOrder = i3081[4]
  i3080.sortingLayerName = i3081[5]
  i3080.sortingOrder = i3081[6]
  i3080.scaleFactor = i3081[7]
  request.r(i3081[8], i3081[9], 0, i3080, 'worldCamera')
  i3080.overrideSorting = !!i3081[10]
  i3080.pixelPerfect = !!i3081[11]
  i3080.targetDisplay = i3081[12]
  i3080.overridePixelPerfect = !!i3081[13]
  i3080.enabled = !!i3081[14]
  return i3080
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i3082 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i3083 = data
  i3082.m_UiScaleMode = i3083[0]
  i3082.m_ReferencePixelsPerUnit = i3083[1]
  i3082.m_ScaleFactor = i3083[2]
  i3082.m_ReferenceResolution = new pc.Vec2( i3083[3], i3083[4] )
  i3082.m_ScreenMatchMode = i3083[5]
  i3082.m_MatchWidthOrHeight = i3083[6]
  i3082.m_PhysicalUnit = i3083[7]
  i3082.m_FallbackScreenDPI = i3083[8]
  i3082.m_DefaultSpriteDPI = i3083[9]
  i3082.m_DynamicPixelsPerUnit = i3083[10]
  i3082.m_PresetInfoIsWorld = !!i3083[11]
  return i3082
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i3084 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i3085 = data
  i3084.m_IgnoreReversedGraphics = !!i3085[0]
  i3084.m_BlockingObjects = i3085[1]
  i3084.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i3085[2] )
  return i3084
}

Deserializers["CountdownTimer"] = function (request, data, root) {
  var i3086 = root || request.c( 'CountdownTimer' )
  var i3087 = data
  request.r(i3087[0], i3087[1], 0, i3086, 'timerText')
  i3086.startSeconds = i3087[2]
  i3086.warningTime = i3087[3]
  i3086.warningColor = new pc.Color(i3087[4], i3087[5], i3087[6], i3087[7])
  i3086.pulseScale = i3087[8]
  i3086.pulseSpeed = i3087[9]
  request.r(i3087[10], i3087[11], 0, i3086, 'backgroundWarning')
  request.r(i3087[12], i3087[13], 0, i3086, 'timeUpPanel')
  i3086.hasStarted = !!i3087[14]
  i3086.bgMinAlpha = i3087[15]
  i3086.bgMaxAlpha = i3087[16]
  i3086.bgBlinkSpeed = i3087[17]
  request.r(i3087[18], i3087[19], 0, i3086, 'wwin')
  return i3086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i3088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i3089 = data
  i3088.cullTransparentMesh = !!i3089[0]
  return i3088
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i3090 = root || request.c( 'UnityEngine.UI.Image' )
  var i3091 = data
  request.r(i3091[0], i3091[1], 0, i3090, 'm_Sprite')
  i3090.m_Type = i3091[2]
  i3090.m_PreserveAspect = !!i3091[3]
  i3090.m_FillCenter = !!i3091[4]
  i3090.m_FillMethod = i3091[5]
  i3090.m_FillAmount = i3091[6]
  i3090.m_FillClockwise = !!i3091[7]
  i3090.m_FillOrigin = i3091[8]
  i3090.m_UseSpriteMesh = !!i3091[9]
  i3090.m_PixelsPerUnitMultiplier = i3091[10]
  i3090.m_Maskable = !!i3091[11]
  request.r(i3091[12], i3091[13], 0, i3090, 'm_Material')
  i3090.m_Color = new pc.Color(i3091[14], i3091[15], i3091[16], i3091[17])
  i3090.m_RaycastTarget = !!i3091[18]
  i3090.m_RaycastPadding = new pc.Vec4( i3091[19], i3091[20], i3091[21], i3091[22] )
  return i3090
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i3092 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i3093 = data
  i3092.m_hasFontAssetChanged = !!i3093[0]
  request.r(i3093[1], i3093[2], 0, i3092, 'm_baseMaterial')
  i3092.m_maskOffset = new pc.Vec4( i3093[3], i3093[4], i3093[5], i3093[6] )
  i3092.m_text = i3093[7]
  i3092.m_isRightToLeft = !!i3093[8]
  request.r(i3093[9], i3093[10], 0, i3092, 'm_fontAsset')
  request.r(i3093[11], i3093[12], 0, i3092, 'm_sharedMaterial')
  var i3095 = i3093[13]
  var i3094 = []
  for(var i = 0; i < i3095.length; i += 2) {
  request.r(i3095[i + 0], i3095[i + 1], 2, i3094, '')
  }
  i3092.m_fontSharedMaterials = i3094
  request.r(i3093[14], i3093[15], 0, i3092, 'm_fontMaterial')
  var i3097 = i3093[16]
  var i3096 = []
  for(var i = 0; i < i3097.length; i += 2) {
  request.r(i3097[i + 0], i3097[i + 1], 2, i3096, '')
  }
  i3092.m_fontMaterials = i3096
  i3092.m_fontColor32 = UnityEngine.Color32.ConstructColor(i3093[17], i3093[18], i3093[19], i3093[20])
  i3092.m_fontColor = new pc.Color(i3093[21], i3093[22], i3093[23], i3093[24])
  i3092.m_enableVertexGradient = !!i3093[25]
  i3092.m_colorMode = i3093[26]
  i3092.m_fontColorGradient = request.d('TMPro.VertexGradient', i3093[27], i3092.m_fontColorGradient)
  request.r(i3093[28], i3093[29], 0, i3092, 'm_fontColorGradientPreset')
  request.r(i3093[30], i3093[31], 0, i3092, 'm_spriteAsset')
  i3092.m_tintAllSprites = !!i3093[32]
  request.r(i3093[33], i3093[34], 0, i3092, 'm_StyleSheet')
  i3092.m_TextStyleHashCode = i3093[35]
  i3092.m_overrideHtmlColors = !!i3093[36]
  i3092.m_faceColor = UnityEngine.Color32.ConstructColor(i3093[37], i3093[38], i3093[39], i3093[40])
  i3092.m_fontSize = i3093[41]
  i3092.m_fontSizeBase = i3093[42]
  i3092.m_fontWeight = i3093[43]
  i3092.m_enableAutoSizing = !!i3093[44]
  i3092.m_fontSizeMin = i3093[45]
  i3092.m_fontSizeMax = i3093[46]
  i3092.m_fontStyle = i3093[47]
  i3092.m_HorizontalAlignment = i3093[48]
  i3092.m_VerticalAlignment = i3093[49]
  i3092.m_textAlignment = i3093[50]
  i3092.m_characterSpacing = i3093[51]
  i3092.m_wordSpacing = i3093[52]
  i3092.m_lineSpacing = i3093[53]
  i3092.m_lineSpacingMax = i3093[54]
  i3092.m_paragraphSpacing = i3093[55]
  i3092.m_charWidthMaxAdj = i3093[56]
  i3092.m_enableWordWrapping = !!i3093[57]
  i3092.m_wordWrappingRatios = i3093[58]
  i3092.m_overflowMode = i3093[59]
  request.r(i3093[60], i3093[61], 0, i3092, 'm_linkedTextComponent')
  request.r(i3093[62], i3093[63], 0, i3092, 'parentLinkedComponent')
  i3092.m_enableKerning = !!i3093[64]
  i3092.m_enableExtraPadding = !!i3093[65]
  i3092.checkPaddingRequired = !!i3093[66]
  i3092.m_isRichText = !!i3093[67]
  i3092.m_parseCtrlCharacters = !!i3093[68]
  i3092.m_isOrthographic = !!i3093[69]
  i3092.m_isCullingEnabled = !!i3093[70]
  i3092.m_horizontalMapping = i3093[71]
  i3092.m_verticalMapping = i3093[72]
  i3092.m_uvLineOffset = i3093[73]
  i3092.m_geometrySortingOrder = i3093[74]
  i3092.m_IsTextObjectScaleStatic = !!i3093[75]
  i3092.m_VertexBufferAutoSizeReduction = !!i3093[76]
  i3092.m_useMaxVisibleDescender = !!i3093[77]
  i3092.m_pageToDisplay = i3093[78]
  i3092.m_margin = new pc.Vec4( i3093[79], i3093[80], i3093[81], i3093[82] )
  i3092.m_isUsingLegacyAnimationComponent = !!i3093[83]
  i3092.m_isVolumetricText = !!i3093[84]
  i3092.m_Maskable = !!i3093[85]
  request.r(i3093[86], i3093[87], 0, i3092, 'm_Material')
  i3092.m_Color = new pc.Color(i3093[88], i3093[89], i3093[90], i3093[91])
  i3092.m_RaycastTarget = !!i3093[92]
  i3092.m_RaycastPadding = new pc.Vec4( i3093[93], i3093[94], i3093[95], i3093[96] )
  return i3092
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i3098 = root || request.c( 'TMPro.VertexGradient' )
  var i3099 = data
  i3098.topLeft = new pc.Color(i3099[0], i3099[1], i3099[2], i3099[3])
  i3098.topRight = new pc.Color(i3099[4], i3099[5], i3099[6], i3099[7])
  i3098.bottomLeft = new pc.Color(i3099[8], i3099[9], i3099[10], i3099[11])
  i3098.bottomRight = new pc.Color(i3099[12], i3099[13], i3099[14], i3099[15])
  return i3098
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i3100 = root || request.c( 'UnityEngine.UI.Button' )
  var i3101 = data
  i3100.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i3101[0], i3100.m_OnClick)
  i3100.m_Navigation = request.d('UnityEngine.UI.Navigation', i3101[1], i3100.m_Navigation)
  i3100.m_Transition = i3101[2]
  i3100.m_Colors = request.d('UnityEngine.UI.ColorBlock', i3101[3], i3100.m_Colors)
  i3100.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i3101[4], i3100.m_SpriteState)
  i3100.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i3101[5], i3100.m_AnimationTriggers)
  i3100.m_Interactable = !!i3101[6]
  request.r(i3101[7], i3101[8], 0, i3100, 'm_TargetGraphic')
  return i3100
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i3102 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i3103 = data
  i3102.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3103[0], i3102.m_PersistentCalls)
  return i3102
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i3104 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i3105 = data
  var i3107 = i3105[0]
  var i3106 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i3107.length; i += 1) {
    i3106.add(request.d('UnityEngine.Events.PersistentCall', i3107[i + 0]));
  }
  i3104.m_Calls = i3106
  return i3104
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i3110 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i3111 = data
  request.r(i3111[0], i3111[1], 0, i3110, 'm_Target')
  i3110.m_TargetAssemblyTypeName = i3111[2]
  i3110.m_MethodName = i3111[3]
  i3110.m_Mode = i3111[4]
  i3110.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i3111[5], i3110.m_Arguments)
  i3110.m_CallState = i3111[6]
  return i3110
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i3112 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i3113 = data
  request.r(i3113[0], i3113[1], 0, i3112, 'm_ObjectArgument')
  i3112.m_ObjectArgumentAssemblyTypeName = i3113[2]
  i3112.m_IntArgument = i3113[3]
  i3112.m_FloatArgument = i3113[4]
  i3112.m_StringArgument = i3113[5]
  i3112.m_BoolArgument = !!i3113[6]
  return i3112
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i3114 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i3115 = data
  i3114.m_Mode = i3115[0]
  i3114.m_WrapAround = !!i3115[1]
  request.r(i3115[2], i3115[3], 0, i3114, 'm_SelectOnUp')
  request.r(i3115[4], i3115[5], 0, i3114, 'm_SelectOnDown')
  request.r(i3115[6], i3115[7], 0, i3114, 'm_SelectOnLeft')
  request.r(i3115[8], i3115[9], 0, i3114, 'm_SelectOnRight')
  return i3114
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i3116 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i3117 = data
  i3116.m_NormalColor = new pc.Color(i3117[0], i3117[1], i3117[2], i3117[3])
  i3116.m_HighlightedColor = new pc.Color(i3117[4], i3117[5], i3117[6], i3117[7])
  i3116.m_PressedColor = new pc.Color(i3117[8], i3117[9], i3117[10], i3117[11])
  i3116.m_SelectedColor = new pc.Color(i3117[12], i3117[13], i3117[14], i3117[15])
  i3116.m_DisabledColor = new pc.Color(i3117[16], i3117[17], i3117[18], i3117[19])
  i3116.m_ColorMultiplier = i3117[20]
  i3116.m_FadeDuration = i3117[21]
  return i3116
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i3118 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i3119 = data
  request.r(i3119[0], i3119[1], 0, i3118, 'm_HighlightedSprite')
  request.r(i3119[2], i3119[3], 0, i3118, 'm_PressedSprite')
  request.r(i3119[4], i3119[5], 0, i3118, 'm_SelectedSprite')
  request.r(i3119[6], i3119[7], 0, i3118, 'm_DisabledSprite')
  return i3118
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i3120 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i3121 = data
  i3120.m_NormalTrigger = i3121[0]
  i3120.m_HighlightedTrigger = i3121[1]
  i3120.m_PressedTrigger = i3121[2]
  i3120.m_SelectedTrigger = i3121[3]
  i3120.m_DisabledTrigger = i3121[4]
  return i3120
}

Deserializers["ScalePopLoop"] = function (request, data, root) {
  var i3122 = root || request.c( 'ScalePopLoop' )
  var i3123 = data
  i3122.minScale = new pc.Vec3( i3123[0], i3123[1], i3123[2] )
  i3122.maxScale = new pc.Vec3( i3123[3], i3123[4], i3123[5] )
  i3122.duration = i3123[6]
  i3122.ease = i3123[7]
  return i3122
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i3124 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i3125 = data
  request.r(i3125[0], i3125[1], 0, i3124, 'm_FirstSelected')
  i3124.m_sendNavigationEvents = !!i3125[2]
  i3124.m_DragThreshold = i3125[3]
  return i3124
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i3126 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i3127 = data
  i3126.m_HorizontalAxis = i3127[0]
  i3126.m_VerticalAxis = i3127[1]
  i3126.m_SubmitButton = i3127[2]
  i3126.m_CancelButton = i3127[3]
  i3126.m_InputActionsPerSecond = i3127[4]
  i3126.m_RepeatDelay = i3127[5]
  i3126.m_ForceModuleActive = !!i3127[6]
  i3126.m_SendPointerHoverToParent = !!i3127[7]
  return i3126
}

Deserializers["DiskTransform"] = function (request, data, root) {
  var i3128 = root || request.c( 'DiskTransform' )
  var i3129 = data
  return i3128
}

Deserializers["EndCart_Lose"] = function (request, data, root) {
  var i3130 = root || request.c( 'EndCart_Lose' )
  var i3131 = data
  request.r(i3131[0], i3131[1], 0, i3130, 'actionButton')
  request.r(i3131[2], i3131[3], 0, i3130, 'emoji')
  request.r(i3131[4], i3131[5], 0, i3130, 'logo')
  request.r(i3131[6], i3131[7], 0, i3130, 'praticle')
  i3130.buttonScaleTime = i3131[8]
  i3130.itemStartScale = i3131[9]
  i3130.itemPopScale = i3131[10]
  i3130.itemInTime = i3131[11]
  i3130.itemSettleTime = i3131[12]
  i3130.itemFinalScale = i3131[13]
  i3130.emojiFinalScale = i3131[14]
  i3130.otherItemFinalScale = i3131[15]
  return i3130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i3132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i3133 = data
  i3132.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i3133[0], i3132.main)
  i3132.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i3133[1], i3132.colorBySpeed)
  i3132.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i3133[2], i3132.colorOverLifetime)
  i3132.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i3133[3], i3132.emission)
  i3132.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i3133[4], i3132.rotationBySpeed)
  i3132.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i3133[5], i3132.rotationOverLifetime)
  i3132.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i3133[6], i3132.shape)
  i3132.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i3133[7], i3132.sizeBySpeed)
  i3132.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i3133[8], i3132.sizeOverLifetime)
  i3132.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i3133[9], i3132.textureSheetAnimation)
  i3132.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i3133[10], i3132.velocityOverLifetime)
  i3132.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i3133[11], i3132.noise)
  i3132.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i3133[12], i3132.inheritVelocity)
  i3132.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i3133[13], i3132.forceOverLifetime)
  i3132.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i3133[14], i3132.limitVelocityOverLifetime)
  i3132.useAutoRandomSeed = !!i3133[15]
  i3132.randomSeed = i3133[16]
  return i3132
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i3134 = root || new pc.ParticleSystemMain()
  var i3135 = data
  i3134.duration = i3135[0]
  i3134.loop = !!i3135[1]
  i3134.prewarm = !!i3135[2]
  i3134.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3135[3], i3134.startDelay)
  i3134.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3135[4], i3134.startLifetime)
  i3134.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3135[5], i3134.startSpeed)
  i3134.startSize3D = !!i3135[6]
  i3134.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3135[7], i3134.startSizeX)
  i3134.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3135[8], i3134.startSizeY)
  i3134.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3135[9], i3134.startSizeZ)
  i3134.startRotation3D = !!i3135[10]
  i3134.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3135[11], i3134.startRotationX)
  i3134.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3135[12], i3134.startRotationY)
  i3134.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3135[13], i3134.startRotationZ)
  i3134.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3135[14], i3134.startColor)
  i3134.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3135[15], i3134.gravityModifier)
  i3134.simulationSpace = i3135[16]
  request.r(i3135[17], i3135[18], 0, i3134, 'customSimulationSpace')
  i3134.simulationSpeed = i3135[19]
  i3134.useUnscaledTime = !!i3135[20]
  i3134.scalingMode = i3135[21]
  i3134.playOnAwake = !!i3135[22]
  i3134.maxParticles = i3135[23]
  i3134.emitterVelocityMode = i3135[24]
  i3134.stopAction = i3135[25]
  return i3134
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i3136 = root || new pc.MinMaxCurve()
  var i3137 = data
  i3136.mode = i3137[0]
  i3136.curveMin = new pc.AnimationCurve( { keys_flow: i3137[1] } )
  i3136.curveMax = new pc.AnimationCurve( { keys_flow: i3137[2] } )
  i3136.curveMultiplier = i3137[3]
  i3136.constantMin = i3137[4]
  i3136.constantMax = i3137[5]
  return i3136
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i3138 = root || new pc.MinMaxGradient()
  var i3139 = data
  i3138.mode = i3139[0]
  i3138.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i3139[1], i3138.gradientMin)
  i3138.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i3139[2], i3138.gradientMax)
  i3138.colorMin = new pc.Color(i3139[3], i3139[4], i3139[5], i3139[6])
  i3138.colorMax = new pc.Color(i3139[7], i3139[8], i3139[9], i3139[10])
  return i3138
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i3140 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i3141 = data
  i3140.mode = i3141[0]
  var i3143 = i3141[1]
  var i3142 = []
  for(var i = 0; i < i3143.length; i += 1) {
    i3142.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i3143[i + 0]) );
  }
  i3140.colorKeys = i3142
  var i3145 = i3141[2]
  var i3144 = []
  for(var i = 0; i < i3145.length; i += 1) {
    i3144.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i3145[i + 0]) );
  }
  i3140.alphaKeys = i3144
  return i3140
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i3148 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i3149 = data
  i3148.color = new pc.Color(i3149[0], i3149[1], i3149[2], i3149[3])
  i3148.time = i3149[4]
  return i3148
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i3152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i3153 = data
  i3152.alpha = i3153[0]
  i3152.time = i3153[1]
  return i3152
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i3154 = root || new pc.ParticleSystemColorBySpeed()
  var i3155 = data
  i3154.enabled = !!i3155[0]
  i3154.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3155[1], i3154.color)
  i3154.range = new pc.Vec2( i3155[2], i3155[3] )
  return i3154
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i3156 = root || new pc.ParticleSystemColorOverLifetime()
  var i3157 = data
  i3156.enabled = !!i3157[0]
  i3156.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3157[1], i3156.color)
  return i3156
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i3158 = root || new pc.ParticleSystemEmitter()
  var i3159 = data
  i3158.enabled = !!i3159[0]
  i3158.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3159[1], i3158.rateOverTime)
  i3158.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3159[2], i3158.rateOverDistance)
  var i3161 = i3159[3]
  var i3160 = []
  for(var i = 0; i < i3161.length; i += 1) {
    i3160.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i3161[i + 0]) );
  }
  i3158.bursts = i3160
  return i3158
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i3164 = root || new pc.ParticleSystemBurst()
  var i3165 = data
  i3164.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3165[0], i3164.count)
  i3164.cycleCount = i3165[1]
  i3164.minCount = i3165[2]
  i3164.maxCount = i3165[3]
  i3164.repeatInterval = i3165[4]
  i3164.time = i3165[5]
  return i3164
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i3166 = root || new pc.ParticleSystemRotationBySpeed()
  var i3167 = data
  i3166.enabled = !!i3167[0]
  i3166.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3167[1], i3166.x)
  i3166.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3167[2], i3166.y)
  i3166.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3167[3], i3166.z)
  i3166.separateAxes = !!i3167[4]
  i3166.range = new pc.Vec2( i3167[5], i3167[6] )
  return i3166
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i3168 = root || new pc.ParticleSystemRotationOverLifetime()
  var i3169 = data
  i3168.enabled = !!i3169[0]
  i3168.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3169[1], i3168.x)
  i3168.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3169[2], i3168.y)
  i3168.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3169[3], i3168.z)
  i3168.separateAxes = !!i3169[4]
  return i3168
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i3170 = root || new pc.ParticleSystemShape()
  var i3171 = data
  i3170.enabled = !!i3171[0]
  i3170.shapeType = i3171[1]
  i3170.randomDirectionAmount = i3171[2]
  i3170.sphericalDirectionAmount = i3171[3]
  i3170.randomPositionAmount = i3171[4]
  i3170.alignToDirection = !!i3171[5]
  i3170.radius = i3171[6]
  i3170.radiusMode = i3171[7]
  i3170.radiusSpread = i3171[8]
  i3170.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3171[9], i3170.radiusSpeed)
  i3170.radiusThickness = i3171[10]
  i3170.angle = i3171[11]
  i3170.length = i3171[12]
  i3170.boxThickness = new pc.Vec3( i3171[13], i3171[14], i3171[15] )
  i3170.meshShapeType = i3171[16]
  request.r(i3171[17], i3171[18], 0, i3170, 'mesh')
  request.r(i3171[19], i3171[20], 0, i3170, 'meshRenderer')
  request.r(i3171[21], i3171[22], 0, i3170, 'skinnedMeshRenderer')
  i3170.useMeshMaterialIndex = !!i3171[23]
  i3170.meshMaterialIndex = i3171[24]
  i3170.useMeshColors = !!i3171[25]
  i3170.normalOffset = i3171[26]
  i3170.arc = i3171[27]
  i3170.arcMode = i3171[28]
  i3170.arcSpread = i3171[29]
  i3170.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3171[30], i3170.arcSpeed)
  i3170.donutRadius = i3171[31]
  i3170.position = new pc.Vec3( i3171[32], i3171[33], i3171[34] )
  i3170.rotation = new pc.Vec3( i3171[35], i3171[36], i3171[37] )
  i3170.scale = new pc.Vec3( i3171[38], i3171[39], i3171[40] )
  return i3170
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i3172 = root || new pc.ParticleSystemSizeBySpeed()
  var i3173 = data
  i3172.enabled = !!i3173[0]
  i3172.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3173[1], i3172.x)
  i3172.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3173[2], i3172.y)
  i3172.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3173[3], i3172.z)
  i3172.separateAxes = !!i3173[4]
  i3172.range = new pc.Vec2( i3173[5], i3173[6] )
  return i3172
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i3174 = root || new pc.ParticleSystemSizeOverLifetime()
  var i3175 = data
  i3174.enabled = !!i3175[0]
  i3174.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3175[1], i3174.x)
  i3174.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3175[2], i3174.y)
  i3174.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3175[3], i3174.z)
  i3174.separateAxes = !!i3175[4]
  return i3174
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i3176 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i3177 = data
  i3176.enabled = !!i3177[0]
  i3176.mode = i3177[1]
  i3176.animation = i3177[2]
  i3176.numTilesX = i3177[3]
  i3176.numTilesY = i3177[4]
  i3176.useRandomRow = !!i3177[5]
  i3176.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3177[6], i3176.frameOverTime)
  i3176.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3177[7], i3176.startFrame)
  i3176.cycleCount = i3177[8]
  i3176.rowIndex = i3177[9]
  i3176.flipU = i3177[10]
  i3176.flipV = i3177[11]
  i3176.spriteCount = i3177[12]
  var i3179 = i3177[13]
  var i3178 = []
  for(var i = 0; i < i3179.length; i += 2) {
  request.r(i3179[i + 0], i3179[i + 1], 2, i3178, '')
  }
  i3176.sprites = i3178
  return i3176
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i3182 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i3183 = data
  i3182.enabled = !!i3183[0]
  i3182.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3183[1], i3182.x)
  i3182.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3183[2], i3182.y)
  i3182.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3183[3], i3182.z)
  i3182.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3183[4], i3182.radial)
  i3182.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3183[5], i3182.speedModifier)
  i3182.space = i3183[6]
  i3182.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3183[7], i3182.orbitalX)
  i3182.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3183[8], i3182.orbitalY)
  i3182.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3183[9], i3182.orbitalZ)
  i3182.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3183[10], i3182.orbitalOffsetX)
  i3182.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3183[11], i3182.orbitalOffsetY)
  i3182.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3183[12], i3182.orbitalOffsetZ)
  return i3182
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i3184 = root || new pc.ParticleSystemNoise()
  var i3185 = data
  i3184.enabled = !!i3185[0]
  i3184.separateAxes = !!i3185[1]
  i3184.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3185[2], i3184.strengthX)
  i3184.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3185[3], i3184.strengthY)
  i3184.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3185[4], i3184.strengthZ)
  i3184.frequency = i3185[5]
  i3184.damping = !!i3185[6]
  i3184.octaveCount = i3185[7]
  i3184.octaveMultiplier = i3185[8]
  i3184.octaveScale = i3185[9]
  i3184.quality = i3185[10]
  i3184.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3185[11], i3184.scrollSpeed)
  i3184.scrollSpeedMultiplier = i3185[12]
  i3184.remapEnabled = !!i3185[13]
  i3184.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3185[14], i3184.remapX)
  i3184.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3185[15], i3184.remapY)
  i3184.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3185[16], i3184.remapZ)
  i3184.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3185[17], i3184.positionAmount)
  i3184.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3185[18], i3184.rotationAmount)
  i3184.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3185[19], i3184.sizeAmount)
  return i3184
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i3186 = root || new pc.ParticleSystemInheritVelocity()
  var i3187 = data
  i3186.enabled = !!i3187[0]
  i3186.mode = i3187[1]
  i3186.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3187[2], i3186.curve)
  return i3186
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i3188 = root || new pc.ParticleSystemForceOverLifetime()
  var i3189 = data
  i3188.enabled = !!i3189[0]
  i3188.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3189[1], i3188.x)
  i3188.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3189[2], i3188.y)
  i3188.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3189[3], i3188.z)
  i3188.space = i3189[4]
  i3188.randomized = !!i3189[5]
  return i3188
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i3190 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i3191 = data
  i3190.enabled = !!i3191[0]
  i3190.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3191[1], i3190.limit)
  i3190.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3191[2], i3190.limitX)
  i3190.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3191[3], i3190.limitY)
  i3190.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3191[4], i3190.limitZ)
  i3190.dampen = i3191[5]
  i3190.separateAxes = !!i3191[6]
  i3190.space = i3191[7]
  i3190.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3191[8], i3190.drag)
  i3190.multiplyDragByParticleSize = !!i3191[9]
  i3190.multiplyDragByParticleVelocity = !!i3191[10]
  return i3190
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i3192 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i3193 = data
  request.r(i3193[0], i3193[1], 0, i3192, 'mesh')
  i3192.meshCount = i3193[2]
  i3192.activeVertexStreamsCount = i3193[3]
  i3192.alignment = i3193[4]
  i3192.renderMode = i3193[5]
  i3192.sortMode = i3193[6]
  i3192.lengthScale = i3193[7]
  i3192.velocityScale = i3193[8]
  i3192.cameraVelocityScale = i3193[9]
  i3192.normalDirection = i3193[10]
  i3192.sortingFudge = i3193[11]
  i3192.minParticleSize = i3193[12]
  i3192.maxParticleSize = i3193[13]
  i3192.pivot = new pc.Vec3( i3193[14], i3193[15], i3193[16] )
  request.r(i3193[17], i3193[18], 0, i3192, 'trailMaterial')
  i3192.applyActiveColorSpace = !!i3193[19]
  i3192.enabled = !!i3193[20]
  request.r(i3193[21], i3193[22], 0, i3192, 'sharedMaterial')
  var i3195 = i3193[23]
  var i3194 = []
  for(var i = 0; i < i3195.length; i += 2) {
  request.r(i3195[i + 0], i3195[i + 1], 2, i3194, '')
  }
  i3192.sharedMaterials = i3194
  i3192.receiveShadows = !!i3193[24]
  i3192.shadowCastingMode = i3193[25]
  i3192.sortingLayerID = i3193[26]
  i3192.sortingOrder = i3193[27]
  i3192.lightmapIndex = i3193[28]
  i3192.lightmapSceneIndex = i3193[29]
  i3192.lightmapScaleOffset = new pc.Vec4( i3193[30], i3193[31], i3193[32], i3193[33] )
  i3192.lightProbeUsage = i3193[34]
  i3192.reflectionProbeUsage = i3193[35]
  return i3192
}

Deserializers["Button"] = function (request, data, root) {
  var i3196 = root || request.c( 'Button' )
  var i3197 = data
  return i3196
}

Deserializers["RotateLoop"] = function (request, data, root) {
  var i3198 = root || request.c( 'RotateLoop' )
  var i3199 = data
  i3198.rotateSpeed = i3199[0]
  return i3198
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i3200 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i3201 = data
  i3200.ambientIntensity = i3201[0]
  i3200.reflectionIntensity = i3201[1]
  i3200.ambientMode = i3201[2]
  i3200.ambientLight = new pc.Color(i3201[3], i3201[4], i3201[5], i3201[6])
  i3200.ambientSkyColor = new pc.Color(i3201[7], i3201[8], i3201[9], i3201[10])
  i3200.ambientGroundColor = new pc.Color(i3201[11], i3201[12], i3201[13], i3201[14])
  i3200.ambientEquatorColor = new pc.Color(i3201[15], i3201[16], i3201[17], i3201[18])
  i3200.fogColor = new pc.Color(i3201[19], i3201[20], i3201[21], i3201[22])
  i3200.fogEndDistance = i3201[23]
  i3200.fogStartDistance = i3201[24]
  i3200.fogDensity = i3201[25]
  i3200.fog = !!i3201[26]
  request.r(i3201[27], i3201[28], 0, i3200, 'skybox')
  i3200.fogMode = i3201[29]
  var i3203 = i3201[30]
  var i3202 = []
  for(var i = 0; i < i3203.length; i += 1) {
    i3202.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i3203[i + 0]) );
  }
  i3200.lightmaps = i3202
  i3200.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i3201[31], i3200.lightProbes)
  i3200.lightmapsMode = i3201[32]
  i3200.mixedBakeMode = i3201[33]
  i3200.environmentLightingMode = i3201[34]
  i3200.ambientProbe = new pc.SphericalHarmonicsL2(i3201[35])
  i3200.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i3201[36])
  i3200.useReferenceAmbientProbe = !!i3201[37]
  request.r(i3201[38], i3201[39], 0, i3200, 'customReflection')
  request.r(i3201[40], i3201[41], 0, i3200, 'defaultReflection')
  i3200.defaultReflectionMode = i3201[42]
  i3200.defaultReflectionResolution = i3201[43]
  i3200.sunLightObjectId = i3201[44]
  i3200.pixelLightCount = i3201[45]
  i3200.defaultReflectionHDR = !!i3201[46]
  i3200.hasLightDataAsset = !!i3201[47]
  i3200.hasManualGenerate = !!i3201[48]
  return i3200
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i3206 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i3207 = data
  request.r(i3207[0], i3207[1], 0, i3206, 'lightmapColor')
  request.r(i3207[2], i3207[3], 0, i3206, 'lightmapDirection')
  return i3206
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i3208 = root || new UnityEngine.LightProbes()
  var i3209 = data
  return i3208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i3216 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i3217 = data
  var i3219 = i3217[0]
  var i3218 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i3219.length; i += 1) {
    i3218.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i3219[i + 0]));
  }
  i3216.ShaderCompilationErrors = i3218
  i3216.name = i3217[1]
  i3216.guid = i3217[2]
  var i3221 = i3217[3]
  var i3220 = []
  for(var i = 0; i < i3221.length; i += 1) {
    i3220.push( i3221[i + 0] );
  }
  i3216.shaderDefinedKeywords = i3220
  var i3223 = i3217[4]
  var i3222 = []
  for(var i = 0; i < i3223.length; i += 1) {
    i3222.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i3223[i + 0]) );
  }
  i3216.passes = i3222
  var i3225 = i3217[5]
  var i3224 = []
  for(var i = 0; i < i3225.length; i += 1) {
    i3224.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i3225[i + 0]) );
  }
  i3216.usePasses = i3224
  var i3227 = i3217[6]
  var i3226 = []
  for(var i = 0; i < i3227.length; i += 1) {
    i3226.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i3227[i + 0]) );
  }
  i3216.defaultParameterValues = i3226
  request.r(i3217[7], i3217[8], 0, i3216, 'unityFallbackShader')
  i3216.readDepth = !!i3217[9]
  i3216.isCreatedByShaderGraph = !!i3217[10]
  i3216.disableBatching = !!i3217[11]
  i3216.compiled = !!i3217[12]
  return i3216
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i3230 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i3231 = data
  i3230.shaderName = i3231[0]
  i3230.errorMessage = i3231[1]
  return i3230
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i3236 = root || new pc.UnityShaderPass()
  var i3237 = data
  i3236.id = i3237[0]
  i3236.subShaderIndex = i3237[1]
  i3236.name = i3237[2]
  i3236.passType = i3237[3]
  i3236.grabPassTextureName = i3237[4]
  i3236.usePass = !!i3237[5]
  i3236.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3237[6], i3236.zTest)
  i3236.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3237[7], i3236.zWrite)
  i3236.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3237[8], i3236.culling)
  i3236.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3237[9], i3236.blending)
  i3236.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3237[10], i3236.alphaBlending)
  i3236.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3237[11], i3236.colorWriteMask)
  i3236.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3237[12], i3236.offsetUnits)
  i3236.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3237[13], i3236.offsetFactor)
  i3236.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3237[14], i3236.stencilRef)
  i3236.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3237[15], i3236.stencilReadMask)
  i3236.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3237[16], i3236.stencilWriteMask)
  i3236.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3237[17], i3236.stencilOp)
  i3236.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3237[18], i3236.stencilOpFront)
  i3236.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3237[19], i3236.stencilOpBack)
  var i3239 = i3237[20]
  var i3238 = []
  for(var i = 0; i < i3239.length; i += 1) {
    i3238.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i3239[i + 0]) );
  }
  i3236.tags = i3238
  var i3241 = i3237[21]
  var i3240 = []
  for(var i = 0; i < i3241.length; i += 1) {
    i3240.push( i3241[i + 0] );
  }
  i3236.passDefinedKeywords = i3240
  var i3243 = i3237[22]
  var i3242 = []
  for(var i = 0; i < i3243.length; i += 1) {
    i3242.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i3243[i + 0]) );
  }
  i3236.passDefinedKeywordGroups = i3242
  var i3245 = i3237[23]
  var i3244 = []
  for(var i = 0; i < i3245.length; i += 1) {
    i3244.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3245[i + 0]) );
  }
  i3236.variants = i3244
  var i3247 = i3237[24]
  var i3246 = []
  for(var i = 0; i < i3247.length; i += 1) {
    i3246.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3247[i + 0]) );
  }
  i3236.excludedVariants = i3246
  i3236.hasDepthReader = !!i3237[25]
  return i3236
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i3248 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i3249 = data
  i3248.val = i3249[0]
  i3248.name = i3249[1]
  return i3248
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i3250 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i3251 = data
  i3250.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3251[0], i3250.src)
  i3250.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3251[1], i3250.dst)
  i3250.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3251[2], i3250.op)
  return i3250
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i3252 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i3253 = data
  i3252.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3253[0], i3252.pass)
  i3252.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3253[1], i3252.fail)
  i3252.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3253[2], i3252.zFail)
  i3252.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3253[3], i3252.comp)
  return i3252
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i3256 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i3257 = data
  i3256.name = i3257[0]
  i3256.value = i3257[1]
  return i3256
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i3260 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i3261 = data
  var i3263 = i3261[0]
  var i3262 = []
  for(var i = 0; i < i3263.length; i += 1) {
    i3262.push( i3263[i + 0] );
  }
  i3260.keywords = i3262
  i3260.hasDiscard = !!i3261[1]
  return i3260
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i3266 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i3267 = data
  i3266.passId = i3267[0]
  i3266.subShaderIndex = i3267[1]
  var i3269 = i3267[2]
  var i3268 = []
  for(var i = 0; i < i3269.length; i += 1) {
    i3268.push( i3269[i + 0] );
  }
  i3266.keywords = i3268
  i3266.vertexProgram = i3267[3]
  i3266.fragmentProgram = i3267[4]
  i3266.exportedForWebGl2 = !!i3267[5]
  i3266.readDepth = !!i3267[6]
  return i3266
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i3272 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i3273 = data
  request.r(i3273[0], i3273[1], 0, i3272, 'shader')
  i3272.pass = i3273[2]
  return i3272
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i3276 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i3277 = data
  i3276.name = i3277[0]
  i3276.type = i3277[1]
  i3276.value = new pc.Vec4( i3277[2], i3277[3], i3277[4], i3277[5] )
  i3276.textureValue = i3277[6]
  i3276.shaderPropertyFlag = i3277[7]
  return i3276
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i3278 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i3279 = data
  i3278.name = i3279[0]
  request.r(i3279[1], i3279[2], 0, i3278, 'texture')
  i3278.aabb = i3279[3]
  i3278.vertices = i3279[4]
  i3278.triangles = i3279[5]
  i3278.textureRect = UnityEngine.Rect.MinMaxRect(i3279[6], i3279[7], i3279[8], i3279[9])
  i3278.packedRect = UnityEngine.Rect.MinMaxRect(i3279[10], i3279[11], i3279[12], i3279[13])
  i3278.border = new pc.Vec4( i3279[14], i3279[15], i3279[16], i3279[17] )
  i3278.transparency = i3279[18]
  i3278.bounds = i3279[19]
  i3278.pixelsPerUnit = i3279[20]
  i3278.textureWidth = i3279[21]
  i3278.textureHeight = i3279[22]
  i3278.nativeSize = new pc.Vec2( i3279[23], i3279[24] )
  i3278.pivot = new pc.Vec2( i3279[25], i3279[26] )
  i3278.textureRectOffset = new pc.Vec2( i3279[27], i3279[28] )
  return i3278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i3280 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i3281 = data
  i3280.name = i3281[0]
  return i3280
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i3282 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i3283 = data
  i3282.name = i3283[0]
  i3282.wrapMode = i3283[1]
  i3282.isLooping = !!i3283[2]
  i3282.length = i3283[3]
  var i3285 = i3283[4]
  var i3284 = []
  for(var i = 0; i < i3285.length; i += 1) {
    i3284.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i3285[i + 0]) );
  }
  i3282.curves = i3284
  var i3287 = i3283[5]
  var i3286 = []
  for(var i = 0; i < i3287.length; i += 1) {
    i3286.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i3287[i + 0]) );
  }
  i3282.events = i3286
  i3282.halfPrecision = !!i3283[6]
  i3282._frameRate = i3283[7]
  i3282.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i3283[8], i3282.localBounds)
  i3282.hasMuscleCurves = !!i3283[9]
  var i3289 = i3283[10]
  var i3288 = []
  for(var i = 0; i < i3289.length; i += 1) {
    i3288.push( i3289[i + 0] );
  }
  i3282.clipMuscleConstant = i3288
  i3282.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i3283[11], i3282.clipBindingConstant)
  return i3282
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i3292 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i3293 = data
  i3292.path = i3293[0]
  i3292.hash = i3293[1]
  i3292.componentType = i3293[2]
  i3292.property = i3293[3]
  i3292.keys = i3293[4]
  var i3295 = i3293[5]
  var i3294 = []
  for(var i = 0; i < i3295.length; i += 1) {
    i3294.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i3295[i + 0]) );
  }
  i3292.objectReferenceKeys = i3294
  return i3292
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i3298 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i3299 = data
  i3298.time = i3299[0]
  request.r(i3299[1], i3299[2], 0, i3298, 'value')
  return i3298
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i3302 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i3303 = data
  i3302.functionName = i3303[0]
  i3302.floatParameter = i3303[1]
  i3302.intParameter = i3303[2]
  i3302.stringParameter = i3303[3]
  request.r(i3303[4], i3303[5], 0, i3302, 'objectReferenceParameter')
  i3302.time = i3303[6]
  return i3302
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i3304 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i3305 = data
  i3304.center = new pc.Vec3( i3305[0], i3305[1], i3305[2] )
  i3304.extends = new pc.Vec3( i3305[3], i3305[4], i3305[5] )
  return i3304
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i3308 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i3309 = data
  var i3311 = i3309[0]
  var i3310 = []
  for(var i = 0; i < i3311.length; i += 1) {
    i3310.push( i3311[i + 0] );
  }
  i3308.genericBindings = i3310
  var i3313 = i3309[1]
  var i3312 = []
  for(var i = 0; i < i3313.length; i += 1) {
    i3312.push( i3313[i + 0] );
  }
  i3308.pptrCurveMapping = i3312
  return i3308
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i3314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i3315 = data
  i3314.name = i3315[0]
  i3314.ascent = i3315[1]
  i3314.originalLineHeight = i3315[2]
  i3314.fontSize = i3315[3]
  var i3317 = i3315[4]
  var i3316 = []
  for(var i = 0; i < i3317.length; i += 1) {
    i3316.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i3317[i + 0]) );
  }
  i3314.characterInfo = i3316
  request.r(i3315[5], i3315[6], 0, i3314, 'texture')
  i3314.originalFontSize = i3315[7]
  return i3314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i3320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i3321 = data
  i3320.index = i3321[0]
  i3320.advance = i3321[1]
  i3320.bearing = i3321[2]
  i3320.glyphWidth = i3321[3]
  i3320.glyphHeight = i3321[4]
  i3320.minX = i3321[5]
  i3320.maxX = i3321[6]
  i3320.minY = i3321[7]
  i3320.maxY = i3321[8]
  i3320.uvBottomLeftX = i3321[9]
  i3320.uvBottomLeftY = i3321[10]
  i3320.uvBottomRightX = i3321[11]
  i3320.uvBottomRightY = i3321[12]
  i3320.uvTopLeftX = i3321[13]
  i3320.uvTopLeftY = i3321[14]
  i3320.uvTopRightX = i3321[15]
  i3320.uvTopRightY = i3321[16]
  return i3320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i3322 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i3323 = data
  i3322.name = i3323[0]
  var i3325 = i3323[1]
  var i3324 = []
  for(var i = 0; i < i3325.length; i += 1) {
    i3324.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i3325[i + 0]) );
  }
  i3322.layers = i3324
  var i3327 = i3323[2]
  var i3326 = []
  for(var i = 0; i < i3327.length; i += 1) {
    i3326.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i3327[i + 0]) );
  }
  i3322.parameters = i3326
  i3322.animationClips = i3323[3]
  i3322.avatarUnsupported = i3323[4]
  return i3322
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i3330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i3331 = data
  i3330.name = i3331[0]
  i3330.defaultWeight = i3331[1]
  i3330.blendingMode = i3331[2]
  i3330.avatarMask = i3331[3]
  i3330.syncedLayerIndex = i3331[4]
  i3330.syncedLayerAffectsTiming = !!i3331[5]
  i3330.syncedLayers = i3331[6]
  i3330.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i3331[7], i3330.stateMachine)
  return i3330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i3332 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i3333 = data
  i3332.id = i3333[0]
  i3332.name = i3333[1]
  i3332.path = i3333[2]
  var i3335 = i3333[3]
  var i3334 = []
  for(var i = 0; i < i3335.length; i += 1) {
    i3334.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i3335[i + 0]) );
  }
  i3332.states = i3334
  var i3337 = i3333[4]
  var i3336 = []
  for(var i = 0; i < i3337.length; i += 1) {
    i3336.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i3337[i + 0]) );
  }
  i3332.machines = i3336
  var i3339 = i3333[5]
  var i3338 = []
  for(var i = 0; i < i3339.length; i += 1) {
    i3338.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i3339[i + 0]) );
  }
  i3332.entryStateTransitions = i3338
  var i3341 = i3333[6]
  var i3340 = []
  for(var i = 0; i < i3341.length; i += 1) {
    i3340.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i3341[i + 0]) );
  }
  i3332.exitStateTransitions = i3340
  var i3343 = i3333[7]
  var i3342 = []
  for(var i = 0; i < i3343.length; i += 1) {
    i3342.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i3343[i + 0]) );
  }
  i3332.anyStateTransitions = i3342
  i3332.defaultStateId = i3333[8]
  return i3332
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i3346 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i3347 = data
  i3346.id = i3347[0]
  i3346.name = i3347[1]
  i3346.cycleOffset = i3347[2]
  i3346.cycleOffsetParameter = i3347[3]
  i3346.cycleOffsetParameterActive = !!i3347[4]
  i3346.mirror = !!i3347[5]
  i3346.mirrorParameter = i3347[6]
  i3346.mirrorParameterActive = !!i3347[7]
  i3346.motionId = i3347[8]
  i3346.nameHash = i3347[9]
  i3346.fullPathHash = i3347[10]
  i3346.speed = i3347[11]
  i3346.speedParameter = i3347[12]
  i3346.speedParameterActive = !!i3347[13]
  i3346.tag = i3347[14]
  i3346.tagHash = i3347[15]
  i3346.writeDefaultValues = !!i3347[16]
  var i3349 = i3347[17]
  var i3348 = []
  for(var i = 0; i < i3349.length; i += 2) {
  request.r(i3349[i + 0], i3349[i + 1], 2, i3348, '')
  }
  i3346.behaviours = i3348
  var i3351 = i3347[18]
  var i3350 = []
  for(var i = 0; i < i3351.length; i += 1) {
    i3350.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i3351[i + 0]) );
  }
  i3346.transitions = i3350
  return i3346
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i3356 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i3357 = data
  i3356.fullPath = i3357[0]
  i3356.canTransitionToSelf = !!i3357[1]
  i3356.duration = i3357[2]
  i3356.exitTime = i3357[3]
  i3356.hasExitTime = !!i3357[4]
  i3356.hasFixedDuration = !!i3357[5]
  i3356.interruptionSource = i3357[6]
  i3356.offset = i3357[7]
  i3356.orderedInterruption = !!i3357[8]
  i3356.destinationStateId = i3357[9]
  i3356.isExit = !!i3357[10]
  i3356.mute = !!i3357[11]
  i3356.solo = !!i3357[12]
  var i3359 = i3357[13]
  var i3358 = []
  for(var i = 0; i < i3359.length; i += 1) {
    i3358.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i3359[i + 0]) );
  }
  i3356.conditions = i3358
  return i3356
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i3364 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i3365 = data
  i3364.destinationStateId = i3365[0]
  i3364.isExit = !!i3365[1]
  i3364.mute = !!i3365[2]
  i3364.solo = !!i3365[3]
  var i3367 = i3365[4]
  var i3366 = []
  for(var i = 0; i < i3367.length; i += 1) {
    i3366.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i3367[i + 0]) );
  }
  i3364.conditions = i3366
  return i3364
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i3370 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i3371 = data
  i3370.defaultBool = !!i3371[0]
  i3370.defaultFloat = i3371[1]
  i3370.defaultInt = i3371[2]
  i3370.name = i3371[3]
  i3370.nameHash = i3371[4]
  i3370.type = i3371[5]
  return i3370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i3372 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i3373 = data
  i3372.name = i3373[0]
  i3372.bytes64 = i3373[1]
  i3372.data = i3373[2]
  return i3372
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i3374 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i3375 = data
  request.r(i3375[0], i3375[1], 0, i3374, 'atlas')
  i3374.normalStyle = i3375[2]
  i3374.normalSpacingOffset = i3375[3]
  i3374.boldStyle = i3375[4]
  i3374.boldSpacing = i3375[5]
  i3374.italicStyle = i3375[6]
  i3374.tabSize = i3375[7]
  i3374.hashCode = i3375[8]
  request.r(i3375[9], i3375[10], 0, i3374, 'material')
  i3374.materialHashCode = i3375[11]
  i3374.m_Version = i3375[12]
  i3374.m_SourceFontFileGUID = i3375[13]
  request.r(i3375[14], i3375[15], 0, i3374, 'm_SourceFontFile_EditorRef')
  request.r(i3375[16], i3375[17], 0, i3374, 'm_SourceFontFile')
  i3374.m_AtlasPopulationMode = i3375[18]
  i3374.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i3375[19], i3374.m_FaceInfo)
  var i3377 = i3375[20]
  var i3376 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i3377.length; i += 1) {
    i3376.add(request.d('UnityEngine.TextCore.Glyph', i3377[i + 0]));
  }
  i3374.m_GlyphTable = i3376
  var i3379 = i3375[21]
  var i3378 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i3379.length; i += 1) {
    i3378.add(request.d('TMPro.TMP_Character', i3379[i + 0]));
  }
  i3374.m_CharacterTable = i3378
  var i3381 = i3375[22]
  var i3380 = []
  for(var i = 0; i < i3381.length; i += 2) {
  request.r(i3381[i + 0], i3381[i + 1], 2, i3380, '')
  }
  i3374.m_AtlasTextures = i3380
  i3374.m_AtlasTextureIndex = i3375[23]
  i3374.m_IsMultiAtlasTexturesEnabled = !!i3375[24]
  i3374.m_ClearDynamicDataOnBuild = !!i3375[25]
  var i3383 = i3375[26]
  var i3382 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i3383.length; i += 1) {
    i3382.add(request.d('UnityEngine.TextCore.GlyphRect', i3383[i + 0]));
  }
  i3374.m_UsedGlyphRects = i3382
  var i3385 = i3375[27]
  var i3384 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i3385.length; i += 1) {
    i3384.add(request.d('UnityEngine.TextCore.GlyphRect', i3385[i + 0]));
  }
  i3374.m_FreeGlyphRects = i3384
  i3374.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i3375[28], i3374.m_fontInfo)
  i3374.m_AtlasWidth = i3375[29]
  i3374.m_AtlasHeight = i3375[30]
  i3374.m_AtlasPadding = i3375[31]
  i3374.m_AtlasRenderMode = i3375[32]
  var i3387 = i3375[33]
  var i3386 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i3387.length; i += 1) {
    i3386.add(request.d('TMPro.TMP_Glyph', i3387[i + 0]));
  }
  i3374.m_glyphInfoList = i3386
  i3374.m_KerningTable = request.d('TMPro.KerningTable', i3375[34], i3374.m_KerningTable)
  i3374.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i3375[35], i3374.m_FontFeatureTable)
  var i3389 = i3375[36]
  var i3388 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3389.length; i += 2) {
  request.r(i3389[i + 0], i3389[i + 1], 1, i3388, '')
  }
  i3374.fallbackFontAssets = i3388
  var i3391 = i3375[37]
  var i3390 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3391.length; i += 2) {
  request.r(i3391[i + 0], i3391[i + 1], 1, i3390, '')
  }
  i3374.m_FallbackFontAssetTable = i3390
  i3374.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i3375[38], i3374.m_CreationSettings)
  var i3393 = i3375[39]
  var i3392 = []
  for(var i = 0; i < i3393.length; i += 1) {
    i3392.push( request.d('TMPro.TMP_FontWeightPair', i3393[i + 0]) );
  }
  i3374.m_FontWeightTable = i3392
  var i3395 = i3375[40]
  var i3394 = []
  for(var i = 0; i < i3395.length; i += 1) {
    i3394.push( request.d('TMPro.TMP_FontWeightPair', i3395[i + 0]) );
  }
  i3374.fontWeights = i3394
  return i3374
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i3396 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i3397 = data
  i3396.m_FaceIndex = i3397[0]
  i3396.m_FamilyName = i3397[1]
  i3396.m_StyleName = i3397[2]
  i3396.m_PointSize = i3397[3]
  i3396.m_Scale = i3397[4]
  i3396.m_UnitsPerEM = i3397[5]
  i3396.m_LineHeight = i3397[6]
  i3396.m_AscentLine = i3397[7]
  i3396.m_CapLine = i3397[8]
  i3396.m_MeanLine = i3397[9]
  i3396.m_Baseline = i3397[10]
  i3396.m_DescentLine = i3397[11]
  i3396.m_SuperscriptOffset = i3397[12]
  i3396.m_SuperscriptSize = i3397[13]
  i3396.m_SubscriptOffset = i3397[14]
  i3396.m_SubscriptSize = i3397[15]
  i3396.m_UnderlineOffset = i3397[16]
  i3396.m_UnderlineThickness = i3397[17]
  i3396.m_StrikethroughOffset = i3397[18]
  i3396.m_StrikethroughThickness = i3397[19]
  i3396.m_TabWidth = i3397[20]
  return i3396
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i3400 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i3401 = data
  i3400.m_Index = i3401[0]
  i3400.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i3401[1], i3400.m_Metrics)
  i3400.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i3401[2], i3400.m_GlyphRect)
  i3400.m_Scale = i3401[3]
  i3400.m_AtlasIndex = i3401[4]
  i3400.m_ClassDefinitionType = i3401[5]
  return i3400
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i3402 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i3403 = data
  i3402.m_Width = i3403[0]
  i3402.m_Height = i3403[1]
  i3402.m_HorizontalBearingX = i3403[2]
  i3402.m_HorizontalBearingY = i3403[3]
  i3402.m_HorizontalAdvance = i3403[4]
  return i3402
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i3404 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i3405 = data
  i3404.m_X = i3405[0]
  i3404.m_Y = i3405[1]
  i3404.m_Width = i3405[2]
  i3404.m_Height = i3405[3]
  return i3404
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i3408 = root || request.c( 'TMPro.TMP_Character' )
  var i3409 = data
  i3408.m_ElementType = i3409[0]
  i3408.m_Unicode = i3409[1]
  i3408.m_GlyphIndex = i3409[2]
  i3408.m_Scale = i3409[3]
  return i3408
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i3414 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i3415 = data
  i3414.Name = i3415[0]
  i3414.PointSize = i3415[1]
  i3414.Scale = i3415[2]
  i3414.CharacterCount = i3415[3]
  i3414.LineHeight = i3415[4]
  i3414.Baseline = i3415[5]
  i3414.Ascender = i3415[6]
  i3414.CapHeight = i3415[7]
  i3414.Descender = i3415[8]
  i3414.CenterLine = i3415[9]
  i3414.SuperscriptOffset = i3415[10]
  i3414.SubscriptOffset = i3415[11]
  i3414.SubSize = i3415[12]
  i3414.Underline = i3415[13]
  i3414.UnderlineThickness = i3415[14]
  i3414.strikethrough = i3415[15]
  i3414.strikethroughThickness = i3415[16]
  i3414.TabWidth = i3415[17]
  i3414.Padding = i3415[18]
  i3414.AtlasWidth = i3415[19]
  i3414.AtlasHeight = i3415[20]
  return i3414
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i3418 = root || request.c( 'TMPro.TMP_Glyph' )
  var i3419 = data
  i3418.id = i3419[0]
  i3418.x = i3419[1]
  i3418.y = i3419[2]
  i3418.width = i3419[3]
  i3418.height = i3419[4]
  i3418.xOffset = i3419[5]
  i3418.yOffset = i3419[6]
  i3418.xAdvance = i3419[7]
  i3418.scale = i3419[8]
  return i3418
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i3420 = root || request.c( 'TMPro.KerningTable' )
  var i3421 = data
  var i3423 = i3421[0]
  var i3422 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i3423.length; i += 1) {
    i3422.add(request.d('TMPro.KerningPair', i3423[i + 0]));
  }
  i3420.kerningPairs = i3422
  return i3420
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i3426 = root || request.c( 'TMPro.KerningPair' )
  var i3427 = data
  i3426.xOffset = i3427[0]
  i3426.m_FirstGlyph = i3427[1]
  i3426.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i3427[2], i3426.m_FirstGlyphAdjustments)
  i3426.m_SecondGlyph = i3427[3]
  i3426.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i3427[4], i3426.m_SecondGlyphAdjustments)
  i3426.m_IgnoreSpacingAdjustments = !!i3427[5]
  return i3426
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i3428 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i3429 = data
  var i3431 = i3429[0]
  var i3430 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i3431.length; i += 1) {
    i3430.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i3431[i + 0]));
  }
  i3428.m_GlyphPairAdjustmentRecords = i3430
  return i3428
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i3434 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i3435 = data
  i3434.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i3435[0], i3434.m_FirstAdjustmentRecord)
  i3434.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i3435[1], i3434.m_SecondAdjustmentRecord)
  i3434.m_FeatureLookupFlags = i3435[2]
  return i3434
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i3438 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i3439 = data
  i3438.sourceFontFileName = i3439[0]
  i3438.sourceFontFileGUID = i3439[1]
  i3438.pointSizeSamplingMode = i3439[2]
  i3438.pointSize = i3439[3]
  i3438.padding = i3439[4]
  i3438.packingMode = i3439[5]
  i3438.atlasWidth = i3439[6]
  i3438.atlasHeight = i3439[7]
  i3438.characterSetSelectionMode = i3439[8]
  i3438.characterSequence = i3439[9]
  i3438.referencedFontAssetGUID = i3439[10]
  i3438.referencedTextAssetGUID = i3439[11]
  i3438.fontStyle = i3439[12]
  i3438.fontStyleModifier = i3439[13]
  i3438.renderMode = i3439[14]
  i3438.includeFontFeatures = !!i3439[15]
  return i3438
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i3442 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i3443 = data
  request.r(i3443[0], i3443[1], 0, i3442, 'regularTypeface')
  request.r(i3443[2], i3443[3], 0, i3442, 'italicTypeface')
  return i3442
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i3444 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i3445 = data
  i3444.useSafeMode = !!i3445[0]
  i3444.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i3445[1], i3444.safeModeOptions)
  i3444.timeScale = i3445[2]
  i3444.unscaledTimeScale = i3445[3]
  i3444.useSmoothDeltaTime = !!i3445[4]
  i3444.maxSmoothUnscaledTime = i3445[5]
  i3444.rewindCallbackMode = i3445[6]
  i3444.showUnityEditorReport = !!i3445[7]
  i3444.logBehaviour = i3445[8]
  i3444.drawGizmos = !!i3445[9]
  i3444.defaultRecyclable = !!i3445[10]
  i3444.defaultAutoPlay = i3445[11]
  i3444.defaultUpdateType = i3445[12]
  i3444.defaultTimeScaleIndependent = !!i3445[13]
  i3444.defaultEaseType = i3445[14]
  i3444.defaultEaseOvershootOrAmplitude = i3445[15]
  i3444.defaultEasePeriod = i3445[16]
  i3444.defaultAutoKill = !!i3445[17]
  i3444.defaultLoopType = i3445[18]
  i3444.debugMode = !!i3445[19]
  i3444.debugStoreTargetId = !!i3445[20]
  i3444.showPreviewPanel = !!i3445[21]
  i3444.storeSettingsLocation = i3445[22]
  i3444.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i3445[23], i3444.modules)
  i3444.createASMDEF = !!i3445[24]
  i3444.showPlayingTweens = !!i3445[25]
  i3444.showPausedTweens = !!i3445[26]
  return i3444
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i3446 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i3447 = data
  i3446.logBehaviour = i3447[0]
  i3446.nestedTweenFailureBehaviour = i3447[1]
  return i3446
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i3448 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i3449 = data
  i3448.showPanel = !!i3449[0]
  i3448.audioEnabled = !!i3449[1]
  i3448.physicsEnabled = !!i3449[2]
  i3448.physics2DEnabled = !!i3449[3]
  i3448.spriteEnabled = !!i3449[4]
  i3448.uiEnabled = !!i3449[5]
  i3448.textMeshProEnabled = !!i3449[6]
  i3448.tk2DEnabled = !!i3449[7]
  i3448.deAudioEnabled = !!i3449[8]
  i3448.deUnityExtendedEnabled = !!i3449[9]
  i3448.epoOutlineEnabled = !!i3449[10]
  return i3448
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i3450 = root || request.c( 'TMPro.TMP_Settings' )
  var i3451 = data
  i3450.m_enableWordWrapping = !!i3451[0]
  i3450.m_enableKerning = !!i3451[1]
  i3450.m_enableExtraPadding = !!i3451[2]
  i3450.m_enableTintAllSprites = !!i3451[3]
  i3450.m_enableParseEscapeCharacters = !!i3451[4]
  i3450.m_EnableRaycastTarget = !!i3451[5]
  i3450.m_GetFontFeaturesAtRuntime = !!i3451[6]
  i3450.m_missingGlyphCharacter = i3451[7]
  i3450.m_warningsDisabled = !!i3451[8]
  request.r(i3451[9], i3451[10], 0, i3450, 'm_defaultFontAsset')
  i3450.m_defaultFontAssetPath = i3451[11]
  i3450.m_defaultFontSize = i3451[12]
  i3450.m_defaultAutoSizeMinRatio = i3451[13]
  i3450.m_defaultAutoSizeMaxRatio = i3451[14]
  i3450.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i3451[15], i3451[16] )
  i3450.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i3451[17], i3451[18] )
  i3450.m_autoSizeTextContainer = !!i3451[19]
  i3450.m_IsTextObjectScaleStatic = !!i3451[20]
  var i3453 = i3451[21]
  var i3452 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3453.length; i += 2) {
  request.r(i3453[i + 0], i3453[i + 1], 1, i3452, '')
  }
  i3450.m_fallbackFontAssets = i3452
  i3450.m_matchMaterialPreset = !!i3451[22]
  request.r(i3451[23], i3451[24], 0, i3450, 'm_defaultSpriteAsset')
  i3450.m_defaultSpriteAssetPath = i3451[25]
  i3450.m_enableEmojiSupport = !!i3451[26]
  i3450.m_MissingCharacterSpriteUnicode = i3451[27]
  i3450.m_defaultColorGradientPresetsPath = i3451[28]
  request.r(i3451[29], i3451[30], 0, i3450, 'm_defaultStyleSheet')
  i3450.m_StyleSheetsResourcePath = i3451[31]
  request.r(i3451[32], i3451[33], 0, i3450, 'm_leadingCharacters')
  request.r(i3451[34], i3451[35], 0, i3450, 'm_followingCharacters')
  i3450.m_UseModernHangulLineBreakingRules = !!i3451[36]
  return i3450
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i3454 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i3455 = data
  i3454.m_GlyphIndex = i3455[0]
  i3454.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i3455[1], i3454.m_GlyphValueRecord)
  return i3454
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i3456 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i3457 = data
  i3456.m_XPlacement = i3457[0]
  i3456.m_YPlacement = i3457[1]
  i3456.m_XAdvance = i3457[2]
  i3456.m_YAdvance = i3457[3]
  return i3456
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i3458 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i3459 = data
  request.r(i3459[0], i3459[1], 0, i3458, 'spriteSheet')
  var i3461 = i3459[2]
  var i3460 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i3461.length; i += 1) {
    i3460.add(request.d('TMPro.TMP_Sprite', i3461[i + 0]));
  }
  i3458.spriteInfoList = i3460
  var i3463 = i3459[3]
  var i3462 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i3463.length; i += 2) {
  request.r(i3463[i + 0], i3463[i + 1], 1, i3462, '')
  }
  i3458.fallbackSpriteAssets = i3462
  i3458.hashCode = i3459[4]
  request.r(i3459[5], i3459[6], 0, i3458, 'material')
  i3458.materialHashCode = i3459[7]
  i3458.m_Version = i3459[8]
  i3458.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i3459[9], i3458.m_FaceInfo)
  var i3465 = i3459[10]
  var i3464 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i3465.length; i += 1) {
    i3464.add(request.d('TMPro.TMP_SpriteCharacter', i3465[i + 0]));
  }
  i3458.m_SpriteCharacterTable = i3464
  var i3467 = i3459[11]
  var i3466 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i3467.length; i += 1) {
    i3466.add(request.d('TMPro.TMP_SpriteGlyph', i3467[i + 0]));
  }
  i3458.m_SpriteGlyphTable = i3466
  return i3458
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i3470 = root || request.c( 'TMPro.TMP_Sprite' )
  var i3471 = data
  i3470.name = i3471[0]
  i3470.hashCode = i3471[1]
  i3470.unicode = i3471[2]
  i3470.pivot = new pc.Vec2( i3471[3], i3471[4] )
  request.r(i3471[5], i3471[6], 0, i3470, 'sprite')
  i3470.id = i3471[7]
  i3470.x = i3471[8]
  i3470.y = i3471[9]
  i3470.width = i3471[10]
  i3470.height = i3471[11]
  i3470.xOffset = i3471[12]
  i3470.yOffset = i3471[13]
  i3470.xAdvance = i3471[14]
  i3470.scale = i3471[15]
  return i3470
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i3476 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i3477 = data
  i3476.m_Name = i3477[0]
  i3476.m_HashCode = i3477[1]
  i3476.m_ElementType = i3477[2]
  i3476.m_Unicode = i3477[3]
  i3476.m_GlyphIndex = i3477[4]
  i3476.m_Scale = i3477[5]
  return i3476
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i3480 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i3481 = data
  request.r(i3481[0], i3481[1], 0, i3480, 'sprite')
  i3480.m_Index = i3481[2]
  i3480.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i3481[3], i3480.m_Metrics)
  i3480.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i3481[4], i3480.m_GlyphRect)
  i3480.m_Scale = i3481[5]
  i3480.m_AtlasIndex = i3481[6]
  i3480.m_ClassDefinitionType = i3481[7]
  return i3480
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i3482 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i3483 = data
  var i3485 = i3483[0]
  var i3484 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i3485.length; i += 1) {
    i3484.add(request.d('TMPro.TMP_Style', i3485[i + 0]));
  }
  i3482.m_StyleList = i3484
  return i3482
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i3488 = root || request.c( 'TMPro.TMP_Style' )
  var i3489 = data
  i3488.m_Name = i3489[0]
  i3488.m_HashCode = i3489[1]
  i3488.m_OpeningDefinition = i3489[2]
  i3488.m_ClosingDefinition = i3489[3]
  i3488.m_OpeningTagArray = i3489[4]
  i3488.m_ClosingTagArray = i3489[5]
  i3488.m_OpeningTagUnicodeArray = i3489[6]
  i3488.m_ClosingTagUnicodeArray = i3489[7]
  return i3488
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i3490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i3491 = data
  var i3493 = i3491[0]
  var i3492 = []
  for(var i = 0; i < i3493.length; i += 1) {
    i3492.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i3493[i + 0]) );
  }
  i3490.files = i3492
  i3490.componentToPrefabIds = i3491[1]
  return i3490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i3496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i3497 = data
  i3496.path = i3497[0]
  request.r(i3497[1], i3497[2], 0, i3496, 'unityObject')
  return i3496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i3498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i3499 = data
  var i3501 = i3499[0]
  var i3500 = []
  for(var i = 0; i < i3501.length; i += 1) {
    i3500.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i3501[i + 0]) );
  }
  i3498.scriptsExecutionOrder = i3500
  var i3503 = i3499[1]
  var i3502 = []
  for(var i = 0; i < i3503.length; i += 1) {
    i3502.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i3503[i + 0]) );
  }
  i3498.sortingLayers = i3502
  var i3505 = i3499[2]
  var i3504 = []
  for(var i = 0; i < i3505.length; i += 1) {
    i3504.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i3505[i + 0]) );
  }
  i3498.cullingLayers = i3504
  i3498.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i3499[3], i3498.timeSettings)
  i3498.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i3499[4], i3498.physicsSettings)
  i3498.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i3499[5], i3498.physics2DSettings)
  i3498.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3499[6], i3498.qualitySettings)
  i3498.enableRealtimeShadows = !!i3499[7]
  i3498.enableAutoInstancing = !!i3499[8]
  i3498.enableStaticBatching = !!i3499[9]
  i3498.enableDynamicBatching = !!i3499[10]
  i3498.lightmapEncodingQuality = i3499[11]
  i3498.desiredColorSpace = i3499[12]
  var i3507 = i3499[13]
  var i3506 = []
  for(var i = 0; i < i3507.length; i += 1) {
    i3506.push( i3507[i + 0] );
  }
  i3498.allTags = i3506
  return i3498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i3510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i3511 = data
  i3510.name = i3511[0]
  i3510.value = i3511[1]
  return i3510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i3514 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i3515 = data
  i3514.id = i3515[0]
  i3514.name = i3515[1]
  i3514.value = i3515[2]
  return i3514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i3518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i3519 = data
  i3518.id = i3519[0]
  i3518.name = i3519[1]
  return i3518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i3520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i3521 = data
  i3520.fixedDeltaTime = i3521[0]
  i3520.maximumDeltaTime = i3521[1]
  i3520.timeScale = i3521[2]
  i3520.maximumParticleTimestep = i3521[3]
  return i3520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i3522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i3523 = data
  i3522.gravity = new pc.Vec3( i3523[0], i3523[1], i3523[2] )
  i3522.defaultSolverIterations = i3523[3]
  i3522.bounceThreshold = i3523[4]
  i3522.autoSyncTransforms = !!i3523[5]
  i3522.autoSimulation = !!i3523[6]
  var i3525 = i3523[7]
  var i3524 = []
  for(var i = 0; i < i3525.length; i += 1) {
    i3524.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i3525[i + 0]) );
  }
  i3522.collisionMatrix = i3524
  return i3522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i3528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i3529 = data
  i3528.enabled = !!i3529[0]
  i3528.layerId = i3529[1]
  i3528.otherLayerId = i3529[2]
  return i3528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i3530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i3531 = data
  request.r(i3531[0], i3531[1], 0, i3530, 'material')
  i3530.gravity = new pc.Vec2( i3531[2], i3531[3] )
  i3530.positionIterations = i3531[4]
  i3530.velocityIterations = i3531[5]
  i3530.velocityThreshold = i3531[6]
  i3530.maxLinearCorrection = i3531[7]
  i3530.maxAngularCorrection = i3531[8]
  i3530.maxTranslationSpeed = i3531[9]
  i3530.maxRotationSpeed = i3531[10]
  i3530.baumgarteScale = i3531[11]
  i3530.baumgarteTOIScale = i3531[12]
  i3530.timeToSleep = i3531[13]
  i3530.linearSleepTolerance = i3531[14]
  i3530.angularSleepTolerance = i3531[15]
  i3530.defaultContactOffset = i3531[16]
  i3530.autoSimulation = !!i3531[17]
  i3530.queriesHitTriggers = !!i3531[18]
  i3530.queriesStartInColliders = !!i3531[19]
  i3530.callbacksOnDisable = !!i3531[20]
  i3530.reuseCollisionCallbacks = !!i3531[21]
  i3530.autoSyncTransforms = !!i3531[22]
  var i3533 = i3531[23]
  var i3532 = []
  for(var i = 0; i < i3533.length; i += 1) {
    i3532.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i3533[i + 0]) );
  }
  i3530.collisionMatrix = i3532
  return i3530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i3536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i3537 = data
  i3536.enabled = !!i3537[0]
  i3536.layerId = i3537[1]
  i3536.otherLayerId = i3537[2]
  return i3536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i3538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i3539 = data
  var i3541 = i3539[0]
  var i3540 = []
  for(var i = 0; i < i3541.length; i += 1) {
    i3540.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3541[i + 0]) );
  }
  i3538.qualityLevels = i3540
  var i3543 = i3539[1]
  var i3542 = []
  for(var i = 0; i < i3543.length; i += 1) {
    i3542.push( i3543[i + 0] );
  }
  i3538.names = i3542
  i3538.shadows = i3539[2]
  i3538.anisotropicFiltering = i3539[3]
  i3538.antiAliasing = i3539[4]
  i3538.lodBias = i3539[5]
  i3538.shadowCascades = i3539[6]
  i3538.shadowDistance = i3539[7]
  i3538.shadowmaskMode = i3539[8]
  i3538.shadowProjection = i3539[9]
  i3538.shadowResolution = i3539[10]
  i3538.softParticles = !!i3539[11]
  i3538.softVegetation = !!i3539[12]
  i3538.activeColorSpace = i3539[13]
  i3538.desiredColorSpace = i3539[14]
  i3538.masterTextureLimit = i3539[15]
  i3538.maxQueuedFrames = i3539[16]
  i3538.particleRaycastBudget = i3539[17]
  i3538.pixelLightCount = i3539[18]
  i3538.realtimeReflectionProbes = !!i3539[19]
  i3538.shadowCascade2Split = i3539[20]
  i3538.shadowCascade4Split = new pc.Vec3( i3539[21], i3539[22], i3539[23] )
  i3538.streamingMipmapsActive = !!i3539[24]
  i3538.vSyncCount = i3539[25]
  i3538.asyncUploadBufferSize = i3539[26]
  i3538.asyncUploadTimeSlice = i3539[27]
  i3538.billboardsFaceCameraPosition = !!i3539[28]
  i3538.shadowNearPlaneOffset = i3539[29]
  i3538.streamingMipmapsMemoryBudget = i3539[30]
  i3538.maximumLODLevel = i3539[31]
  i3538.streamingMipmapsAddAllCameras = !!i3539[32]
  i3538.streamingMipmapsMaxLevelReduction = i3539[33]
  i3538.streamingMipmapsRenderersPerFrame = i3539[34]
  i3538.resolutionScalingFixedDPIFactor = i3539[35]
  i3538.streamingMipmapsMaxFileIORequests = i3539[36]
  i3538.currentQualityLevel = i3539[37]
  return i3538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i3548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i3549 = data
  i3548.mode = i3549[0]
  i3548.parameter = i3549[1]
  i3548.threshold = i3549[2]
  return i3548
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i3550 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i3551 = data
  i3550.xPlacement = i3551[0]
  i3550.yPlacement = i3551[1]
  i3550.xAdvance = i3551[2]
  i3550.yAdvance = i3551[3]
  return i3550
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

Deserializers.runtimeAnalysisExcludedMethodsCount = "4543";

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

Deserializers.buildID = "36d6e76b-5b1f-4607-b422-05dd97509dd2";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

