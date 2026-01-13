var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2040 = root || request.c( 'UnityEngine.JointSpring' )
  var i2041 = data
  i2040.spring = i2041[0]
  i2040.damper = i2041[1]
  i2040.targetPosition = i2041[2]
  return i2040
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2042 = root || request.c( 'UnityEngine.JointMotor' )
  var i2043 = data
  i2042.m_TargetVelocity = i2043[0]
  i2042.m_Force = i2043[1]
  i2042.m_FreeSpin = i2043[2]
  return i2042
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2044 = root || request.c( 'UnityEngine.JointLimits' )
  var i2045 = data
  i2044.m_Min = i2045[0]
  i2044.m_Max = i2045[1]
  i2044.m_Bounciness = i2045[2]
  i2044.m_BounceMinVelocity = i2045[3]
  i2044.m_ContactDistance = i2045[4]
  i2044.minBounce = i2045[5]
  i2044.maxBounce = i2045[6]
  return i2044
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2046 = root || request.c( 'UnityEngine.JointDrive' )
  var i2047 = data
  i2046.m_PositionSpring = i2047[0]
  i2046.m_PositionDamper = i2047[1]
  i2046.m_MaximumForce = i2047[2]
  i2046.m_UseAcceleration = i2047[3]
  return i2046
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2048 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2049 = data
  i2048.m_Spring = i2049[0]
  i2048.m_Damper = i2049[1]
  return i2048
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2050 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2051 = data
  i2050.m_Limit = i2051[0]
  i2050.m_Bounciness = i2051[1]
  i2050.m_ContactDistance = i2051[2]
  return i2050
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2052 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2053 = data
  i2052.m_ExtremumSlip = i2053[0]
  i2052.m_ExtremumValue = i2053[1]
  i2052.m_AsymptoteSlip = i2053[2]
  i2052.m_AsymptoteValue = i2053[3]
  i2052.m_Stiffness = i2053[4]
  return i2052
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2054 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2055 = data
  i2054.m_LowerAngle = i2055[0]
  i2054.m_UpperAngle = i2055[1]
  return i2054
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2056 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2057 = data
  i2056.m_MotorSpeed = i2057[0]
  i2056.m_MaximumMotorTorque = i2057[1]
  return i2056
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2058 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2059 = data
  i2058.m_DampingRatio = i2059[0]
  i2058.m_Frequency = i2059[1]
  i2058.m_Angle = i2059[2]
  return i2058
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2060 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2061 = data
  i2060.m_LowerTranslation = i2061[0]
  i2060.m_UpperTranslation = i2061[1]
  return i2060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2063 = data
  i2062.position = new pc.Vec3( i2063[0], i2063[1], i2063[2] )
  i2062.scale = new pc.Vec3( i2063[3], i2063[4], i2063[5] )
  i2062.rotation = new pc.Quat(i2063[6], i2063[7], i2063[8], i2063[9])
  return i2062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i2064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i2065 = data
  i2064.color = new pc.Color(i2065[0], i2065[1], i2065[2], i2065[3])
  request.r(i2065[4], i2065[5], 0, i2064, 'sprite')
  i2064.flipX = !!i2065[6]
  i2064.flipY = !!i2065[7]
  i2064.drawMode = i2065[8]
  i2064.size = new pc.Vec2( i2065[9], i2065[10] )
  i2064.tileMode = i2065[11]
  i2064.adaptiveModeThreshold = i2065[12]
  i2064.maskInteraction = i2065[13]
  i2064.spriteSortPoint = i2065[14]
  i2064.enabled = !!i2065[15]
  request.r(i2065[16], i2065[17], 0, i2064, 'sharedMaterial')
  var i2067 = i2065[18]
  var i2066 = []
  for(var i = 0; i < i2067.length; i += 2) {
  request.r(i2067[i + 0], i2067[i + 1], 2, i2066, '')
  }
  i2064.sharedMaterials = i2066
  i2064.receiveShadows = !!i2065[19]
  i2064.shadowCastingMode = i2065[20]
  i2064.sortingLayerID = i2065[21]
  i2064.sortingOrder = i2065[22]
  i2064.lightmapIndex = i2065[23]
  i2064.lightmapSceneIndex = i2065[24]
  i2064.lightmapScaleOffset = new pc.Vec4( i2065[25], i2065[26], i2065[27], i2065[28] )
  i2064.lightProbeUsage = i2065[29]
  i2064.reflectionProbeUsage = i2065[30]
  return i2064
}

Deserializers["DragItem"] = function (request, data, root) {
  var i2070 = root || request.c( 'DragItem' )
  var i2071 = data
  i2070.focusOutlineSize = i2071[0]
  i2070.outlineTweenTime = i2071[1]
  i2070.itemType = i2071[2]
  i2070.isLockItem = !!i2071[3]
  i2070.onTimer = !!i2071[4]
  return i2070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i2072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i2073 = data
  i2072.usedByComposite = !!i2073[0]
  i2072.autoTiling = !!i2073[1]
  i2072.size = new pc.Vec2( i2073[2], i2073[3] )
  i2072.edgeRadius = i2073[4]
  i2072.enabled = !!i2073[5]
  i2072.isTrigger = !!i2073[6]
  i2072.usedByEffector = !!i2073[7]
  i2072.density = i2073[8]
  i2072.offset = new pc.Vec2( i2073[9], i2073[10] )
  request.r(i2073[11], i2073[12], 0, i2072, 'material')
  return i2072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i2074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i2075 = data
  i2074.bodyType = i2075[0]
  request.r(i2075[1], i2075[2], 0, i2074, 'material')
  i2074.simulated = !!i2075[3]
  i2074.useAutoMass = !!i2075[4]
  i2074.mass = i2075[5]
  i2074.drag = i2075[6]
  i2074.angularDrag = i2075[7]
  i2074.gravityScale = i2075[8]
  i2074.collisionDetectionMode = i2075[9]
  i2074.sleepMode = i2075[10]
  i2074.constraints = i2075[11]
  return i2074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2077 = data
  i2076.name = i2077[0]
  i2076.tagId = i2077[1]
  i2076.enabled = !!i2077[2]
  i2076.isStatic = !!i2077[3]
  i2076.layer = i2077[4]
  return i2076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2078 = root || new pc.UnityMaterial()
  var i2079 = data
  i2078.name = i2079[0]
  request.r(i2079[1], i2079[2], 0, i2078, 'shader')
  i2078.renderQueue = i2079[3]
  i2078.enableInstancing = !!i2079[4]
  var i2081 = i2079[5]
  var i2080 = []
  for(var i = 0; i < i2081.length; i += 1) {
    i2080.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2081[i + 0]) );
  }
  i2078.floatParameters = i2080
  var i2083 = i2079[6]
  var i2082 = []
  for(var i = 0; i < i2083.length; i += 1) {
    i2082.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2083[i + 0]) );
  }
  i2078.colorParameters = i2082
  var i2085 = i2079[7]
  var i2084 = []
  for(var i = 0; i < i2085.length; i += 1) {
    i2084.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2085[i + 0]) );
  }
  i2078.vectorParameters = i2084
  var i2087 = i2079[8]
  var i2086 = []
  for(var i = 0; i < i2087.length; i += 1) {
    i2086.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2087[i + 0]) );
  }
  i2078.textureParameters = i2086
  var i2089 = i2079[9]
  var i2088 = []
  for(var i = 0; i < i2089.length; i += 1) {
    i2088.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2089[i + 0]) );
  }
  i2078.materialFlags = i2088
  return i2078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2093 = data
  i2092.name = i2093[0]
  i2092.value = i2093[1]
  return i2092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2096 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2097 = data
  i2096.name = i2097[0]
  i2096.value = new pc.Color(i2097[1], i2097[2], i2097[3], i2097[4])
  return i2096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2100 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2101 = data
  i2100.name = i2101[0]
  i2100.value = new pc.Vec4( i2101[1], i2101[2], i2101[3], i2101[4] )
  return i2100
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2104 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2105 = data
  i2104.name = i2105[0]
  request.r(i2105[1], i2105[2], 0, i2104, 'value')
  return i2104
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2108 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2109 = data
  i2108.name = i2109[0]
  i2108.enabled = !!i2109[1]
  return i2108
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2111 = data
  i2110.name = i2111[0]
  i2110.width = i2111[1]
  i2110.height = i2111[2]
  i2110.mipmapCount = i2111[3]
  i2110.anisoLevel = i2111[4]
  i2110.filterMode = i2111[5]
  i2110.hdr = !!i2111[6]
  i2110.format = i2111[7]
  i2110.wrapMode = i2111[8]
  i2110.alphaIsTransparency = !!i2111[9]
  i2110.alphaSource = i2111[10]
  i2110.graphicsFormat = i2111[11]
  i2110.sRGBTexture = !!i2111[12]
  i2110.desiredColorSpace = i2111[13]
  i2110.wrapU = i2111[14]
  i2110.wrapV = i2111[15]
  return i2110
}

Deserializers["Disk"] = function (request, data, root) {
  var i2112 = root || request.c( 'Disk' )
  var i2113 = data
  i2112.requiredCount = i2113[0]
  i2112.moveDistance = i2113[1]
  i2112.moveTime = i2113[2]
  return i2112
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2115 = data
  request.r(i2115[0], i2115[1], 0, i2114, 'animatorController')
  request.r(i2115[2], i2115[3], 0, i2114, 'avatar')
  i2114.updateMode = i2115[4]
  i2114.hasTransformHierarchy = !!i2115[5]
  i2114.applyRootMotion = !!i2115[6]
  var i2117 = i2115[7]
  var i2116 = []
  for(var i = 0; i < i2117.length; i += 2) {
  request.r(i2117[i + 0], i2117[i + 1], 2, i2116, '')
  }
  i2114.humanBones = i2116
  i2114.enabled = !!i2115[8]
  return i2114
}

Deserializers["Tray"] = function (request, data, root) {
  var i2120 = root || request.c( 'Tray' )
  var i2121 = data
  i2120.spacing = i2121[0]
  i2120.moveTime = i2121[1]
  request.r(i2121[2], i2121[3], 0, i2120, 'diskPrefab')
  request.r(i2121[4], i2121[5], 0, i2120, 'diskTransform')
  i2120.shrinkTime = i2121[6]
  i2120.itemToDiskTime = i2121[7]
  i2120.attachDelay = i2121[8]
  i2120.followSmooth = i2121[9]
  i2120.isCompleted = !!i2121[10]
  var i2123 = i2121[11]
  var i2122 = []
  for(var i = 0; i < i2123.length; i += 2) {
  request.r(i2123[i + 0], i2123[i + 1], 2, i2122, '')
  }
  i2120.slots = i2122
  request.r(i2121[12], i2121[13], 0, i2120, 'fireObject')
  i2120.isSpecial = !!i2121[14]
  i2120.spacingItemCenter = i2121[15]
  request.r(i2121[16], i2121[17], 0, i2120, 'targetTransform')
  i2120.diskItemScale = new pc.Vec3( i2121[18], i2121[19], i2121[20] )
  return i2120
}

Deserializers["Slot"] = function (request, data, root) {
  var i2126 = root || request.c( 'Slot' )
  var i2127 = data
  request.r(i2127[0], i2127[1], 0, i2126, 'anchor')
  request.r(i2127[2], i2127[3], 0, i2126, 'currentItem')
  i2126.isLocked = !!i2127[4]
  return i2126
}

Deserializers["PackTarget"] = function (request, data, root) {
  var i2128 = root || request.c( 'PackTarget' )
  var i2129 = data
  i2128.packType = i2129[0]
  request.r(i2129[1], i2129[2], 0, i2128, 'attachPoint')
  i2128.slotIndex = i2129[3]
  i2128.capacity = i2129[4]
  i2128.currentCount = i2129[5]
  i2128.isFull = !!i2129[6]
  request.r(i2129[7], i2129[8], 0, i2128, 'sumText')
  request.r(i2129[9], i2129[10], 0, i2128, 'packSprite')
  return i2128
}

Deserializers["EndCart_Lose"] = function (request, data, root) {
  var i2130 = root || request.c( 'EndCart_Lose' )
  var i2131 = data
  request.r(i2131[0], i2131[1], 0, i2130, 'actionButton')
  request.r(i2131[2], i2131[3], 0, i2130, 'emoji')
  request.r(i2131[4], i2131[5], 0, i2130, 'logo')
  request.r(i2131[6], i2131[7], 0, i2130, 'icon')
  request.r(i2131[8], i2131[9], 0, i2130, 'praticle')
  i2130.buttonScaleTime = i2131[10]
  i2130.itemStartScale = i2131[11]
  i2130.itemPopScale = i2131[12]
  i2130.itemInTime = i2131[13]
  i2130.itemSettleTime = i2131[14]
  i2130.itemFinalScale = i2131[15]
  i2130.emojiFinalScale = i2131[16]
  i2130.otherItemFinalScale = i2131[17]
  return i2130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2133 = data
  i2132.pivot = new pc.Vec2( i2133[0], i2133[1] )
  i2132.anchorMin = new pc.Vec2( i2133[2], i2133[3] )
  i2132.anchorMax = new pc.Vec2( i2133[4], i2133[5] )
  i2132.sizeDelta = new pc.Vec2( i2133[6], i2133[7] )
  i2132.anchoredPosition3D = new pc.Vec3( i2133[8], i2133[9], i2133[10] )
  i2132.rotation = new pc.Quat(i2133[11], i2133[12], i2133[13], i2133[14])
  i2132.scale = new pc.Vec3( i2133[15], i2133[16], i2133[17] )
  return i2132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2134 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2135 = data
  i2134.planeDistance = i2135[0]
  i2134.referencePixelsPerUnit = i2135[1]
  i2134.isFallbackOverlay = !!i2135[2]
  i2134.renderMode = i2135[3]
  i2134.renderOrder = i2135[4]
  i2134.sortingLayerName = i2135[5]
  i2134.sortingOrder = i2135[6]
  i2134.scaleFactor = i2135[7]
  request.r(i2135[8], i2135[9], 0, i2134, 'worldCamera')
  i2134.overrideSorting = !!i2135[10]
  i2134.pixelPerfect = !!i2135[11]
  i2134.targetDisplay = i2135[12]
  i2134.overridePixelPerfect = !!i2135[13]
  i2134.enabled = !!i2135[14]
  return i2134
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2136 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2137 = data
  i2136.m_UiScaleMode = i2137[0]
  i2136.m_ReferencePixelsPerUnit = i2137[1]
  i2136.m_ScaleFactor = i2137[2]
  i2136.m_ReferenceResolution = new pc.Vec2( i2137[3], i2137[4] )
  i2136.m_ScreenMatchMode = i2137[5]
  i2136.m_MatchWidthOrHeight = i2137[6]
  i2136.m_PhysicalUnit = i2137[7]
  i2136.m_FallbackScreenDPI = i2137[8]
  i2136.m_DefaultSpriteDPI = i2137[9]
  i2136.m_DynamicPixelsPerUnit = i2137[10]
  i2136.m_PresetInfoIsWorld = !!i2137[11]
  return i2136
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2138 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2139 = data
  i2138.m_IgnoreReversedGraphics = !!i2139[0]
  i2138.m_BlockingObjects = i2139[1]
  i2138.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2139[2] )
  return i2138
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2140 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2141 = data
  i2140.cullTransparentMesh = !!i2141[0]
  return i2140
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2142 = root || request.c( 'UnityEngine.UI.Image' )
  var i2143 = data
  request.r(i2143[0], i2143[1], 0, i2142, 'm_Sprite')
  i2142.m_Type = i2143[2]
  i2142.m_PreserveAspect = !!i2143[3]
  i2142.m_FillCenter = !!i2143[4]
  i2142.m_FillMethod = i2143[5]
  i2142.m_FillAmount = i2143[6]
  i2142.m_FillClockwise = !!i2143[7]
  i2142.m_FillOrigin = i2143[8]
  i2142.m_UseSpriteMesh = !!i2143[9]
  i2142.m_PixelsPerUnitMultiplier = i2143[10]
  i2142.m_Maskable = !!i2143[11]
  request.r(i2143[12], i2143[13], 0, i2142, 'm_Material')
  i2142.m_Color = new pc.Color(i2143[14], i2143[15], i2143[16], i2143[17])
  i2142.m_RaycastTarget = !!i2143[18]
  i2142.m_RaycastPadding = new pc.Vec4( i2143[19], i2143[20], i2143[21], i2143[22] )
  return i2142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i2144 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i2145 = data
  i2144.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i2145[0], i2144.main)
  i2144.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i2145[1], i2144.colorBySpeed)
  i2144.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i2145[2], i2144.colorOverLifetime)
  i2144.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i2145[3], i2144.emission)
  i2144.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i2145[4], i2144.rotationBySpeed)
  i2144.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i2145[5], i2144.rotationOverLifetime)
  i2144.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i2145[6], i2144.shape)
  i2144.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i2145[7], i2144.sizeBySpeed)
  i2144.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i2145[8], i2144.sizeOverLifetime)
  i2144.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i2145[9], i2144.textureSheetAnimation)
  i2144.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i2145[10], i2144.velocityOverLifetime)
  i2144.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i2145[11], i2144.noise)
  i2144.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i2145[12], i2144.inheritVelocity)
  i2144.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i2145[13], i2144.forceOverLifetime)
  i2144.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i2145[14], i2144.limitVelocityOverLifetime)
  i2144.useAutoRandomSeed = !!i2145[15]
  i2144.randomSeed = i2145[16]
  return i2144
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i2146 = root || new pc.ParticleSystemMain()
  var i2147 = data
  i2146.duration = i2147[0]
  i2146.loop = !!i2147[1]
  i2146.prewarm = !!i2147[2]
  i2146.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2147[3], i2146.startDelay)
  i2146.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2147[4], i2146.startLifetime)
  i2146.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2147[5], i2146.startSpeed)
  i2146.startSize3D = !!i2147[6]
  i2146.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2147[7], i2146.startSizeX)
  i2146.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2147[8], i2146.startSizeY)
  i2146.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2147[9], i2146.startSizeZ)
  i2146.startRotation3D = !!i2147[10]
  i2146.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2147[11], i2146.startRotationX)
  i2146.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2147[12], i2146.startRotationY)
  i2146.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2147[13], i2146.startRotationZ)
  i2146.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2147[14], i2146.startColor)
  i2146.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2147[15], i2146.gravityModifier)
  i2146.simulationSpace = i2147[16]
  request.r(i2147[17], i2147[18], 0, i2146, 'customSimulationSpace')
  i2146.simulationSpeed = i2147[19]
  i2146.useUnscaledTime = !!i2147[20]
  i2146.scalingMode = i2147[21]
  i2146.playOnAwake = !!i2147[22]
  i2146.maxParticles = i2147[23]
  i2146.emitterVelocityMode = i2147[24]
  i2146.stopAction = i2147[25]
  return i2146
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i2148 = root || new pc.MinMaxCurve()
  var i2149 = data
  i2148.mode = i2149[0]
  i2148.curveMin = new pc.AnimationCurve( { keys_flow: i2149[1] } )
  i2148.curveMax = new pc.AnimationCurve( { keys_flow: i2149[2] } )
  i2148.curveMultiplier = i2149[3]
  i2148.constantMin = i2149[4]
  i2148.constantMax = i2149[5]
  return i2148
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i2150 = root || new pc.MinMaxGradient()
  var i2151 = data
  i2150.mode = i2151[0]
  i2150.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2151[1], i2150.gradientMin)
  i2150.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2151[2], i2150.gradientMax)
  i2150.colorMin = new pc.Color(i2151[3], i2151[4], i2151[5], i2151[6])
  i2150.colorMax = new pc.Color(i2151[7], i2151[8], i2151[9], i2151[10])
  return i2150
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i2152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i2153 = data
  i2152.mode = i2153[0]
  var i2155 = i2153[1]
  var i2154 = []
  for(var i = 0; i < i2155.length; i += 1) {
    i2154.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i2155[i + 0]) );
  }
  i2152.colorKeys = i2154
  var i2157 = i2153[2]
  var i2156 = []
  for(var i = 0; i < i2157.length; i += 1) {
    i2156.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i2157[i + 0]) );
  }
  i2152.alphaKeys = i2156
  return i2152
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i2160 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i2161 = data
  i2160.color = new pc.Color(i2161[0], i2161[1], i2161[2], i2161[3])
  i2160.time = i2161[4]
  return i2160
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i2164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i2165 = data
  i2164.alpha = i2165[0]
  i2164.time = i2165[1]
  return i2164
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i2166 = root || new pc.ParticleSystemColorBySpeed()
  var i2167 = data
  i2166.enabled = !!i2167[0]
  i2166.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2167[1], i2166.color)
  i2166.range = new pc.Vec2( i2167[2], i2167[3] )
  return i2166
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i2168 = root || new pc.ParticleSystemColorOverLifetime()
  var i2169 = data
  i2168.enabled = !!i2169[0]
  i2168.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2169[1], i2168.color)
  return i2168
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i2170 = root || new pc.ParticleSystemEmitter()
  var i2171 = data
  i2170.enabled = !!i2171[0]
  i2170.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2171[1], i2170.rateOverTime)
  i2170.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2171[2], i2170.rateOverDistance)
  var i2173 = i2171[3]
  var i2172 = []
  for(var i = 0; i < i2173.length; i += 1) {
    i2172.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i2173[i + 0]) );
  }
  i2170.bursts = i2172
  return i2170
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i2176 = root || new pc.ParticleSystemBurst()
  var i2177 = data
  i2176.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2177[0], i2176.count)
  i2176.cycleCount = i2177[1]
  i2176.minCount = i2177[2]
  i2176.maxCount = i2177[3]
  i2176.repeatInterval = i2177[4]
  i2176.time = i2177[5]
  return i2176
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i2178 = root || new pc.ParticleSystemRotationBySpeed()
  var i2179 = data
  i2178.enabled = !!i2179[0]
  i2178.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2179[1], i2178.x)
  i2178.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2179[2], i2178.y)
  i2178.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2179[3], i2178.z)
  i2178.separateAxes = !!i2179[4]
  i2178.range = new pc.Vec2( i2179[5], i2179[6] )
  return i2178
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i2180 = root || new pc.ParticleSystemRotationOverLifetime()
  var i2181 = data
  i2180.enabled = !!i2181[0]
  i2180.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2181[1], i2180.x)
  i2180.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2181[2], i2180.y)
  i2180.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2181[3], i2180.z)
  i2180.separateAxes = !!i2181[4]
  return i2180
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i2182 = root || new pc.ParticleSystemShape()
  var i2183 = data
  i2182.enabled = !!i2183[0]
  i2182.shapeType = i2183[1]
  i2182.randomDirectionAmount = i2183[2]
  i2182.sphericalDirectionAmount = i2183[3]
  i2182.randomPositionAmount = i2183[4]
  i2182.alignToDirection = !!i2183[5]
  i2182.radius = i2183[6]
  i2182.radiusMode = i2183[7]
  i2182.radiusSpread = i2183[8]
  i2182.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2183[9], i2182.radiusSpeed)
  i2182.radiusThickness = i2183[10]
  i2182.angle = i2183[11]
  i2182.length = i2183[12]
  i2182.boxThickness = new pc.Vec3( i2183[13], i2183[14], i2183[15] )
  i2182.meshShapeType = i2183[16]
  request.r(i2183[17], i2183[18], 0, i2182, 'mesh')
  request.r(i2183[19], i2183[20], 0, i2182, 'meshRenderer')
  request.r(i2183[21], i2183[22], 0, i2182, 'skinnedMeshRenderer')
  i2182.useMeshMaterialIndex = !!i2183[23]
  i2182.meshMaterialIndex = i2183[24]
  i2182.useMeshColors = !!i2183[25]
  i2182.normalOffset = i2183[26]
  i2182.arc = i2183[27]
  i2182.arcMode = i2183[28]
  i2182.arcSpread = i2183[29]
  i2182.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2183[30], i2182.arcSpeed)
  i2182.donutRadius = i2183[31]
  i2182.position = new pc.Vec3( i2183[32], i2183[33], i2183[34] )
  i2182.rotation = new pc.Vec3( i2183[35], i2183[36], i2183[37] )
  i2182.scale = new pc.Vec3( i2183[38], i2183[39], i2183[40] )
  return i2182
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i2184 = root || new pc.ParticleSystemSizeBySpeed()
  var i2185 = data
  i2184.enabled = !!i2185[0]
  i2184.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2185[1], i2184.x)
  i2184.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2185[2], i2184.y)
  i2184.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2185[3], i2184.z)
  i2184.separateAxes = !!i2185[4]
  i2184.range = new pc.Vec2( i2185[5], i2185[6] )
  return i2184
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i2186 = root || new pc.ParticleSystemSizeOverLifetime()
  var i2187 = data
  i2186.enabled = !!i2187[0]
  i2186.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2187[1], i2186.x)
  i2186.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2187[2], i2186.y)
  i2186.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2187[3], i2186.z)
  i2186.separateAxes = !!i2187[4]
  return i2186
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i2188 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i2189 = data
  i2188.enabled = !!i2189[0]
  i2188.mode = i2189[1]
  i2188.animation = i2189[2]
  i2188.numTilesX = i2189[3]
  i2188.numTilesY = i2189[4]
  i2188.useRandomRow = !!i2189[5]
  i2188.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2189[6], i2188.frameOverTime)
  i2188.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2189[7], i2188.startFrame)
  i2188.cycleCount = i2189[8]
  i2188.rowIndex = i2189[9]
  i2188.flipU = i2189[10]
  i2188.flipV = i2189[11]
  i2188.spriteCount = i2189[12]
  var i2191 = i2189[13]
  var i2190 = []
  for(var i = 0; i < i2191.length; i += 2) {
  request.r(i2191[i + 0], i2191[i + 1], 2, i2190, '')
  }
  i2188.sprites = i2190
  return i2188
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i2194 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i2195 = data
  i2194.enabled = !!i2195[0]
  i2194.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2195[1], i2194.x)
  i2194.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2195[2], i2194.y)
  i2194.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2195[3], i2194.z)
  i2194.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2195[4], i2194.radial)
  i2194.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2195[5], i2194.speedModifier)
  i2194.space = i2195[6]
  i2194.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2195[7], i2194.orbitalX)
  i2194.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2195[8], i2194.orbitalY)
  i2194.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2195[9], i2194.orbitalZ)
  i2194.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2195[10], i2194.orbitalOffsetX)
  i2194.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2195[11], i2194.orbitalOffsetY)
  i2194.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2195[12], i2194.orbitalOffsetZ)
  return i2194
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2196 = root || new pc.ParticleSystemNoise()
  var i2197 = data
  i2196.enabled = !!i2197[0]
  i2196.separateAxes = !!i2197[1]
  i2196.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2197[2], i2196.strengthX)
  i2196.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2197[3], i2196.strengthY)
  i2196.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2197[4], i2196.strengthZ)
  i2196.frequency = i2197[5]
  i2196.damping = !!i2197[6]
  i2196.octaveCount = i2197[7]
  i2196.octaveMultiplier = i2197[8]
  i2196.octaveScale = i2197[9]
  i2196.quality = i2197[10]
  i2196.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2197[11], i2196.scrollSpeed)
  i2196.scrollSpeedMultiplier = i2197[12]
  i2196.remapEnabled = !!i2197[13]
  i2196.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2197[14], i2196.remapX)
  i2196.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2197[15], i2196.remapY)
  i2196.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2197[16], i2196.remapZ)
  i2196.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2197[17], i2196.positionAmount)
  i2196.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2197[18], i2196.rotationAmount)
  i2196.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2197[19], i2196.sizeAmount)
  return i2196
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2198 = root || new pc.ParticleSystemInheritVelocity()
  var i2199 = data
  i2198.enabled = !!i2199[0]
  i2198.mode = i2199[1]
  i2198.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2199[2], i2198.curve)
  return i2198
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2200 = root || new pc.ParticleSystemForceOverLifetime()
  var i2201 = data
  i2200.enabled = !!i2201[0]
  i2200.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2201[1], i2200.x)
  i2200.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2201[2], i2200.y)
  i2200.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2201[3], i2200.z)
  i2200.space = i2201[4]
  i2200.randomized = !!i2201[5]
  return i2200
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2202 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2203 = data
  i2202.enabled = !!i2203[0]
  i2202.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2203[1], i2202.limit)
  i2202.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2203[2], i2202.limitX)
  i2202.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2203[3], i2202.limitY)
  i2202.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2203[4], i2202.limitZ)
  i2202.dampen = i2203[5]
  i2202.separateAxes = !!i2203[6]
  i2202.space = i2203[7]
  i2202.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2203[8], i2202.drag)
  i2202.multiplyDragByParticleSize = !!i2203[9]
  i2202.multiplyDragByParticleVelocity = !!i2203[10]
  return i2202
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2204 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2205 = data
  request.r(i2205[0], i2205[1], 0, i2204, 'mesh')
  i2204.meshCount = i2205[2]
  i2204.activeVertexStreamsCount = i2205[3]
  i2204.alignment = i2205[4]
  i2204.renderMode = i2205[5]
  i2204.sortMode = i2205[6]
  i2204.lengthScale = i2205[7]
  i2204.velocityScale = i2205[8]
  i2204.cameraVelocityScale = i2205[9]
  i2204.normalDirection = i2205[10]
  i2204.sortingFudge = i2205[11]
  i2204.minParticleSize = i2205[12]
  i2204.maxParticleSize = i2205[13]
  i2204.pivot = new pc.Vec3( i2205[14], i2205[15], i2205[16] )
  request.r(i2205[17], i2205[18], 0, i2204, 'trailMaterial')
  i2204.applyActiveColorSpace = !!i2205[19]
  i2204.enabled = !!i2205[20]
  request.r(i2205[21], i2205[22], 0, i2204, 'sharedMaterial')
  var i2207 = i2205[23]
  var i2206 = []
  for(var i = 0; i < i2207.length; i += 2) {
  request.r(i2207[i + 0], i2207[i + 1], 2, i2206, '')
  }
  i2204.sharedMaterials = i2206
  i2204.receiveShadows = !!i2205[24]
  i2204.shadowCastingMode = i2205[25]
  i2204.sortingLayerID = i2205[26]
  i2204.sortingOrder = i2205[27]
  i2204.lightmapIndex = i2205[28]
  i2204.lightmapSceneIndex = i2205[29]
  i2204.lightmapScaleOffset = new pc.Vec4( i2205[30], i2205[31], i2205[32], i2205[33] )
  i2204.lightProbeUsage = i2205[34]
  i2204.reflectionProbeUsage = i2205[35]
  return i2204
}

Deserializers["Button"] = function (request, data, root) {
  var i2208 = root || request.c( 'Button' )
  var i2209 = data
  return i2208
}

Deserializers["RotateLoop"] = function (request, data, root) {
  var i2210 = root || request.c( 'RotateLoop' )
  var i2211 = data
  i2210.rotateSpeed = i2211[0]
  return i2210
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2212 = root || request.c( 'UnityEngine.UI.Button' )
  var i2213 = data
  i2212.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2213[0], i2212.m_OnClick)
  i2212.m_Navigation = request.d('UnityEngine.UI.Navigation', i2213[1], i2212.m_Navigation)
  i2212.m_Transition = i2213[2]
  i2212.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2213[3], i2212.m_Colors)
  i2212.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2213[4], i2212.m_SpriteState)
  i2212.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2213[5], i2212.m_AnimationTriggers)
  i2212.m_Interactable = !!i2213[6]
  request.r(i2213[7], i2213[8], 0, i2212, 'm_TargetGraphic')
  return i2212
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2214 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2215 = data
  i2214.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2215[0], i2214.m_PersistentCalls)
  return i2214
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2216 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2217 = data
  var i2219 = i2217[0]
  var i2218 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2219.length; i += 1) {
    i2218.add(request.d('UnityEngine.Events.PersistentCall', i2219[i + 0]));
  }
  i2216.m_Calls = i2218
  return i2216
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2222 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2223 = data
  request.r(i2223[0], i2223[1], 0, i2222, 'm_Target')
  i2222.m_TargetAssemblyTypeName = i2223[2]
  i2222.m_MethodName = i2223[3]
  i2222.m_Mode = i2223[4]
  i2222.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2223[5], i2222.m_Arguments)
  i2222.m_CallState = i2223[6]
  return i2222
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2224 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2225 = data
  request.r(i2225[0], i2225[1], 0, i2224, 'm_ObjectArgument')
  i2224.m_ObjectArgumentAssemblyTypeName = i2225[2]
  i2224.m_IntArgument = i2225[3]
  i2224.m_FloatArgument = i2225[4]
  i2224.m_StringArgument = i2225[5]
  i2224.m_BoolArgument = !!i2225[6]
  return i2224
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2226 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2227 = data
  i2226.m_Mode = i2227[0]
  i2226.m_WrapAround = !!i2227[1]
  request.r(i2227[2], i2227[3], 0, i2226, 'm_SelectOnUp')
  request.r(i2227[4], i2227[5], 0, i2226, 'm_SelectOnDown')
  request.r(i2227[6], i2227[7], 0, i2226, 'm_SelectOnLeft')
  request.r(i2227[8], i2227[9], 0, i2226, 'm_SelectOnRight')
  return i2226
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2228 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2229 = data
  i2228.m_NormalColor = new pc.Color(i2229[0], i2229[1], i2229[2], i2229[3])
  i2228.m_HighlightedColor = new pc.Color(i2229[4], i2229[5], i2229[6], i2229[7])
  i2228.m_PressedColor = new pc.Color(i2229[8], i2229[9], i2229[10], i2229[11])
  i2228.m_SelectedColor = new pc.Color(i2229[12], i2229[13], i2229[14], i2229[15])
  i2228.m_DisabledColor = new pc.Color(i2229[16], i2229[17], i2229[18], i2229[19])
  i2228.m_ColorMultiplier = i2229[20]
  i2228.m_FadeDuration = i2229[21]
  return i2228
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2230 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2231 = data
  request.r(i2231[0], i2231[1], 0, i2230, 'm_HighlightedSprite')
  request.r(i2231[2], i2231[3], 0, i2230, 'm_PressedSprite')
  request.r(i2231[4], i2231[5], 0, i2230, 'm_SelectedSprite')
  request.r(i2231[6], i2231[7], 0, i2230, 'm_DisabledSprite')
  return i2230
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2232 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2233 = data
  i2232.m_NormalTrigger = i2233[0]
  i2232.m_HighlightedTrigger = i2233[1]
  i2232.m_PressedTrigger = i2233[2]
  i2232.m_SelectedTrigger = i2233[3]
  i2232.m_DisabledTrigger = i2233[4]
  return i2232
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i2234 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i2235 = data
  i2234.m_hasFontAssetChanged = !!i2235[0]
  request.r(i2235[1], i2235[2], 0, i2234, 'm_baseMaterial')
  i2234.m_maskOffset = new pc.Vec4( i2235[3], i2235[4], i2235[5], i2235[6] )
  i2234.m_text = i2235[7]
  i2234.m_isRightToLeft = !!i2235[8]
  request.r(i2235[9], i2235[10], 0, i2234, 'm_fontAsset')
  request.r(i2235[11], i2235[12], 0, i2234, 'm_sharedMaterial')
  var i2237 = i2235[13]
  var i2236 = []
  for(var i = 0; i < i2237.length; i += 2) {
  request.r(i2237[i + 0], i2237[i + 1], 2, i2236, '')
  }
  i2234.m_fontSharedMaterials = i2236
  request.r(i2235[14], i2235[15], 0, i2234, 'm_fontMaterial')
  var i2239 = i2235[16]
  var i2238 = []
  for(var i = 0; i < i2239.length; i += 2) {
  request.r(i2239[i + 0], i2239[i + 1], 2, i2238, '')
  }
  i2234.m_fontMaterials = i2238
  i2234.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2235[17], i2235[18], i2235[19], i2235[20])
  i2234.m_fontColor = new pc.Color(i2235[21], i2235[22], i2235[23], i2235[24])
  i2234.m_enableVertexGradient = !!i2235[25]
  i2234.m_colorMode = i2235[26]
  i2234.m_fontColorGradient = request.d('TMPro.VertexGradient', i2235[27], i2234.m_fontColorGradient)
  request.r(i2235[28], i2235[29], 0, i2234, 'm_fontColorGradientPreset')
  request.r(i2235[30], i2235[31], 0, i2234, 'm_spriteAsset')
  i2234.m_tintAllSprites = !!i2235[32]
  request.r(i2235[33], i2235[34], 0, i2234, 'm_StyleSheet')
  i2234.m_TextStyleHashCode = i2235[35]
  i2234.m_overrideHtmlColors = !!i2235[36]
  i2234.m_faceColor = UnityEngine.Color32.ConstructColor(i2235[37], i2235[38], i2235[39], i2235[40])
  i2234.m_fontSize = i2235[41]
  i2234.m_fontSizeBase = i2235[42]
  i2234.m_fontWeight = i2235[43]
  i2234.m_enableAutoSizing = !!i2235[44]
  i2234.m_fontSizeMin = i2235[45]
  i2234.m_fontSizeMax = i2235[46]
  i2234.m_fontStyle = i2235[47]
  i2234.m_HorizontalAlignment = i2235[48]
  i2234.m_VerticalAlignment = i2235[49]
  i2234.m_textAlignment = i2235[50]
  i2234.m_characterSpacing = i2235[51]
  i2234.m_wordSpacing = i2235[52]
  i2234.m_lineSpacing = i2235[53]
  i2234.m_lineSpacingMax = i2235[54]
  i2234.m_paragraphSpacing = i2235[55]
  i2234.m_charWidthMaxAdj = i2235[56]
  i2234.m_enableWordWrapping = !!i2235[57]
  i2234.m_wordWrappingRatios = i2235[58]
  i2234.m_overflowMode = i2235[59]
  request.r(i2235[60], i2235[61], 0, i2234, 'm_linkedTextComponent')
  request.r(i2235[62], i2235[63], 0, i2234, 'parentLinkedComponent')
  i2234.m_enableKerning = !!i2235[64]
  i2234.m_enableExtraPadding = !!i2235[65]
  i2234.checkPaddingRequired = !!i2235[66]
  i2234.m_isRichText = !!i2235[67]
  i2234.m_parseCtrlCharacters = !!i2235[68]
  i2234.m_isOrthographic = !!i2235[69]
  i2234.m_isCullingEnabled = !!i2235[70]
  i2234.m_horizontalMapping = i2235[71]
  i2234.m_verticalMapping = i2235[72]
  i2234.m_uvLineOffset = i2235[73]
  i2234.m_geometrySortingOrder = i2235[74]
  i2234.m_IsTextObjectScaleStatic = !!i2235[75]
  i2234.m_VertexBufferAutoSizeReduction = !!i2235[76]
  i2234.m_useMaxVisibleDescender = !!i2235[77]
  i2234.m_pageToDisplay = i2235[78]
  i2234.m_margin = new pc.Vec4( i2235[79], i2235[80], i2235[81], i2235[82] )
  i2234.m_isUsingLegacyAnimationComponent = !!i2235[83]
  i2234.m_isVolumetricText = !!i2235[84]
  i2234.m_Maskable = !!i2235[85]
  request.r(i2235[86], i2235[87], 0, i2234, 'm_Material')
  i2234.m_Color = new pc.Color(i2235[88], i2235[89], i2235[90], i2235[91])
  i2234.m_RaycastTarget = !!i2235[92]
  i2234.m_RaycastPadding = new pc.Vec4( i2235[93], i2235[94], i2235[95], i2235[96] )
  return i2234
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i2240 = root || request.c( 'TMPro.VertexGradient' )
  var i2241 = data
  i2240.topLeft = new pc.Color(i2241[0], i2241[1], i2241[2], i2241[3])
  i2240.topRight = new pc.Color(i2241[4], i2241[5], i2241[6], i2241[7])
  i2240.bottomLeft = new pc.Color(i2241[8], i2241[9], i2241[10], i2241[11])
  i2240.bottomRight = new pc.Color(i2241[12], i2241[13], i2241[14], i2241[15])
  return i2240
}

Deserializers["HandHint"] = function (request, data, root) {
  var i2242 = root || request.c( 'HandHint' )
  var i2243 = data
  request.r(i2243[0], i2243[1], 0, i2242, 'previewRenderer')
  return i2242
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2244 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2245 = data
  i2244.name = i2245[0]
  i2244.index = i2245[1]
  i2244.startup = !!i2245[2]
  return i2244
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2246 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2247 = data
  i2246.aspect = i2247[0]
  i2246.orthographic = !!i2247[1]
  i2246.orthographicSize = i2247[2]
  i2246.backgroundColor = new pc.Color(i2247[3], i2247[4], i2247[5], i2247[6])
  i2246.nearClipPlane = i2247[7]
  i2246.farClipPlane = i2247[8]
  i2246.fieldOfView = i2247[9]
  i2246.depth = i2247[10]
  i2246.clearFlags = i2247[11]
  i2246.cullingMask = i2247[12]
  i2246.rect = i2247[13]
  request.r(i2247[14], i2247[15], 0, i2246, 'targetTexture')
  i2246.usePhysicalProperties = !!i2247[16]
  i2246.focalLength = i2247[17]
  i2246.sensorSize = new pc.Vec2( i2247[18], i2247[19] )
  i2246.lensShift = new pc.Vec2( i2247[20], i2247[21] )
  i2246.gateFit = i2247[22]
  i2246.commandBufferCount = i2247[23]
  i2246.cameraType = i2247[24]
  i2246.enabled = !!i2247[25]
  return i2246
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2248 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2249 = data
  request.r(i2249[0], i2249[1], 0, i2248, 'm_FirstSelected')
  i2248.m_sendNavigationEvents = !!i2249[2]
  i2248.m_DragThreshold = i2249[3]
  return i2248
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2250 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2251 = data
  i2250.m_HorizontalAxis = i2251[0]
  i2250.m_VerticalAxis = i2251[1]
  i2250.m_SubmitButton = i2251[2]
  i2250.m_CancelButton = i2251[3]
  i2250.m_InputActionsPerSecond = i2251[4]
  i2250.m_RepeatDelay = i2251[5]
  i2250.m_ForceModuleActive = !!i2251[6]
  i2250.m_SendPointerHoverToParent = !!i2251[7]
  return i2250
}

Deserializers["TrayManager"] = function (request, data, root) {
  var i2252 = root || request.c( 'TrayManager' )
  var i2253 = data
  i2252.spacing = i2253[0]
  i2252.visibleCount = i2253[1]
  i2252.moveTime = i2253[2]
  var i2255 = i2253[3]
  var i2254 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i2255.length; i += 2) {
  request.r(i2255[i + 0], i2255[i + 1], 1, i2254, '')
  }
  i2252.listTrayPrepare = i2254
  var i2257 = i2253[4]
  var i2256 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i2257.length; i += 2) {
  request.r(i2257[i + 0], i2257[i + 1], 1, i2256, '')
  }
  i2252.listTrayValiable = i2256
  request.r(i2253[5], i2253[6], 0, i2252, 'levelConfig')
  i2252.canCountIdle = !!i2253[7]
  i2252.spawnHeightMultiplier = i2253[8]
  i2252.isFirstTutorial = !!i2253[9]
  i2252.tutorialDelay = i2253[10]
  i2252.idleTimer = i2253[11]
  i2252.tutorialEnabled = !!i2253[12]
  request.r(i2253[13], i2253[14], 0, i2252, 'manualTray')
  request.r(i2253[15], i2253[16], 0, i2252, 'manualItem')
  i2252.justEndedInteract = !!i2253[17]
  var i2259 = i2253[18]
  var i2258 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i2259.length; i += 2) {
  request.r(i2259[i + 0], i2259[i + 1], 1, i2258, '')
  }
  i2252.spriteLibrary = i2258
  i2252.step = i2253[19]
  request.r(i2253[20], i2253[21], 0, i2252, 'specialSpawnPoint')
  request.r(i2253[22], i2253[23], 0, i2252, 'specialTray')
  i2252.specialTrayScale = new pc.Vec3( i2253[24], i2253[25], i2253[26] )
  i2252.specialTrayLocalPos = new pc.Vec3( i2253[27], i2253[28], i2253[29] )
  i2252.startY = i2253[30]
  return i2252
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i2266 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i2267 = data
  i2266.frontSortingLayerID = i2267[0]
  i2266.frontSortingOrder = i2267[1]
  i2266.backSortingLayerID = i2267[2]
  i2266.backSortingOrder = i2267[3]
  i2266.alphaCutoff = i2267[4]
  request.r(i2267[5], i2267[6], 0, i2266, 'sprite')
  i2266.tileMode = i2267[7]
  i2266.isCustomRangeActive = !!i2267[8]
  i2266.spriteSortPoint = i2267[9]
  i2266.enabled = !!i2267[10]
  request.r(i2267[11], i2267[12], 0, i2266, 'sharedMaterial')
  var i2269 = i2267[13]
  var i2268 = []
  for(var i = 0; i < i2269.length; i += 2) {
  request.r(i2269[i + 0], i2269[i + 1], 2, i2268, '')
  }
  i2266.sharedMaterials = i2268
  i2266.receiveShadows = !!i2267[14]
  i2266.shadowCastingMode = i2267[15]
  i2266.sortingLayerID = i2267[16]
  i2266.sortingOrder = i2267[17]
  i2266.lightmapIndex = i2267[18]
  i2266.lightmapSceneIndex = i2267[19]
  i2266.lightmapScaleOffset = new pc.Vec4( i2267[20], i2267[21], i2267[22], i2267[23] )
  i2266.lightProbeUsage = i2267[24]
  i2266.reflectionProbeUsage = i2267[25]
  return i2266
}

Deserializers["ConveyorBelt"] = function (request, data, root) {
  var i2270 = root || request.c( 'ConveyorBelt' )
  var i2271 = data
  i2270.speed = i2271[0]
  i2270.spacing = i2271[1]
  i2270.leftLimit = i2271[2]
  i2270.removeFirstCount = i2271[3]
  return i2270
}

Deserializers["EndCart_Win"] = function (request, data, root) {
  var i2272 = root || request.c( 'EndCart_Win' )
  var i2273 = data
  request.r(i2273[0], i2273[1], 0, i2272, 'confettiLeft')
  request.r(i2273[2], i2273[3], 0, i2272, 'confettiRight')
  request.r(i2273[4], i2273[5], 0, i2272, 'winText')
  request.r(i2273[6], i2273[7], 0, i2272, 'chest')
  request.r(i2273[8], i2273[9], 0, i2272, 'button')
  i2272.textDelay = i2273[10]
  i2272.chestDelay = i2273[11]
  return i2272
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i2274 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i2275 = data
  request.r(i2275[0], i2275[1], 0, i2274, 'additionalVertexStreams')
  i2274.enabled = !!i2275[2]
  request.r(i2275[3], i2275[4], 0, i2274, 'sharedMaterial')
  var i2277 = i2275[5]
  var i2276 = []
  for(var i = 0; i < i2277.length; i += 2) {
  request.r(i2277[i + 0], i2277[i + 1], 2, i2276, '')
  }
  i2274.sharedMaterials = i2276
  i2274.receiveShadows = !!i2275[6]
  i2274.shadowCastingMode = i2275[7]
  i2274.sortingLayerID = i2275[8]
  i2274.sortingOrder = i2275[9]
  i2274.lightmapIndex = i2275[10]
  i2274.lightmapSceneIndex = i2275[11]
  i2274.lightmapScaleOffset = new pc.Vec4( i2275[12], i2275[13], i2275[14], i2275[15] )
  i2274.lightProbeUsage = i2275[16]
  i2274.reflectionProbeUsage = i2275[17]
  return i2274
}

Deserializers["Spine.Unity.SkeletonAnimation"] = function (request, data, root) {
  var i2278 = root || request.c( 'Spine.Unity.SkeletonAnimation' )
  var i2279 = data
  i2278.loop = !!i2279[0]
  i2278.timeScale = i2279[1]
  request.r(i2279[2], i2279[3], 0, i2278, 'skeletonDataAsset')
  i2278.initialSkinName = i2279[4]
  i2278.fixPrefabOverrideViaMeshFilter = i2279[5]
  i2278.initialFlipX = !!i2279[6]
  i2278.initialFlipY = !!i2279[7]
  i2278.updateWhenInvisible = i2279[8]
  i2278.zSpacing = i2279[9]
  i2278.useClipping = !!i2279[10]
  i2278.immutableTriangles = !!i2279[11]
  i2278.pmaVertexColors = !!i2279[12]
  i2278.clearStateOnDisable = !!i2279[13]
  i2278.tintBlack = !!i2279[14]
  i2278.singleSubmesh = !!i2279[15]
  i2278.fixDrawOrder = !!i2279[16]
  i2278.addNormals = !!i2279[17]
  i2278.calculateTangents = !!i2279[18]
  i2278.maskInteraction = i2279[19]
  i2278.maskMaterials = request.d('Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials', i2279[20], i2278.maskMaterials)
  i2278.disableRenderingOnOverride = !!i2279[21]
  i2278.updateTiming = i2279[22]
  i2278.unscaledTime = !!i2279[23]
  i2278._animationName = i2279[24]
  var i2281 = i2279[25]
  var i2280 = []
  for(var i = 0; i < i2281.length; i += 1) {
    i2280.push( i2281[i + 0] );
  }
  i2278.separatorSlotNames = i2280
  i2278.physicsPositionInheritanceFactor = new pc.Vec2( i2279[26], i2279[27] )
  i2278.physicsRotationInheritanceFactor = i2279[28]
  request.r(i2279[29], i2279[30], 0, i2278, 'physicsMovementRelativeTo')
  return i2278
}

Deserializers["Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials"] = function (request, data, root) {
  var i2282 = root || request.c( 'Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials' )
  var i2283 = data
  var i2285 = i2283[0]
  var i2284 = []
  for(var i = 0; i < i2285.length; i += 2) {
  request.r(i2285[i + 0], i2285[i + 1], 2, i2284, '')
  }
  i2282.materialsMaskDisabled = i2284
  var i2287 = i2283[1]
  var i2286 = []
  for(var i = 0; i < i2287.length; i += 2) {
  request.r(i2287[i + 0], i2287[i + 1], 2, i2286, '')
  }
  i2282.materialsInsideMask = i2286
  var i2289 = i2283[2]
  var i2288 = []
  for(var i = 0; i < i2289.length; i += 2) {
  request.r(i2289[i + 0], i2289[i + 1], 2, i2288, '')
  }
  i2282.materialsOutsideMask = i2288
  return i2282
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i2292 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i2293 = data
  request.r(i2293[0], i2293[1], 0, i2292, 'sharedMesh')
  return i2292
}

Deserializers["AudioManager"] = function (request, data, root) {
  var i2294 = root || request.c( 'AudioManager' )
  var i2295 = data
  request.r(i2295[0], i2295[1], 0, i2294, 'bgmSource')
  request.r(i2295[2], i2295[3], 0, i2294, 'sfxSource')
  request.r(i2295[4], i2295[5], 0, i2294, 'bgm')
  request.r(i2295[6], i2295[7], 0, i2294, 'drag')
  request.r(i2295[8], i2295[9], 0, i2294, 'drog')
  request.r(i2295[10], i2295[11], 0, i2294, 'lose')
  request.r(i2295[12], i2295[13], 0, i2294, 'pop')
  request.r(i2295[14], i2295[15], 0, i2294, 'wood')
  request.r(i2295[16], i2295[17], 0, i2294, 'win')
  request.r(i2295[18], i2295[19], 0, i2294, 'warningTick')
  request.r(i2295[20], i2295[21], 0, i2294, 'match')
  request.r(i2295[22], i2295[23], 0, i2294, 'sake')
  request.r(i2295[24], i2295[25], 0, i2294, 'excell')
  return i2294
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2296 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2297 = data
  request.r(i2297[0], i2297[1], 0, i2296, 'clip')
  request.r(i2297[2], i2297[3], 0, i2296, 'outputAudioMixerGroup')
  i2296.playOnAwake = !!i2297[4]
  i2296.loop = !!i2297[5]
  i2296.time = i2297[6]
  i2296.volume = i2297[7]
  i2296.pitch = i2297[8]
  i2296.enabled = !!i2297[9]
  return i2296
}

Deserializers["GameManager"] = function (request, data, root) {
  var i2298 = root || request.c( 'GameManager' )
  var i2299 = data
  request.r(i2299[0], i2299[1], 0, i2298, 'pointText')
  i2298.point = i2299[2]
  request.r(i2299[3], i2299[4], 0, i2298, 'ECWin')
  i2298.startTimer = !!i2299[5]
  i2298.ticketCount = i2299[6]
  i2298.isClickToLog = !!i2299[7]
  i2298.clicksToLog = i2299[8]
  i2298.isMatch = !!i2299[9]
  i2298.clickCount = i2299[10]
  i2298.isClick = !!i2299[11]
  i2298.finishGame = !!i2299[12]
  i2298.startGame = !!i2299[13]
  i2298.isCheckWin = !!i2299[14]
  i2298.isCheckLose = !!i2299[15]
  i2298.isClickStore = !!i2299[16]
  return i2298
}

Deserializers["PackManager"] = function (request, data, root) {
  var i2300 = root || request.c( 'PackManager' )
  var i2301 = data
  request.r(i2301[0], i2301[1], 0, i2300, 'packRoot')
  var i2303 = i2301[2]
  var i2302 = new (System.Collections.Generic.List$1(Bridge.ns('PackTarget')))
  for(var i = 0; i < i2303.length; i += 2) {
  request.r(i2303[i + 0], i2303[i + 1], 1, i2302, '')
  }
  i2300.packPrefabs = i2302
  var i2305 = i2301[3]
  var i2304 = new (System.Collections.Generic.List$1(Bridge.ns('PackTarget')))
  for(var i = 0; i < i2305.length; i += 2) {
  request.r(i2305[i + 0], i2305[i + 1], 1, i2304, '')
  }
  i2300.activePacks = i2304
  var i2307 = i2301[4]
  var i2306 = new (System.Collections.Generic.List$1(Bridge.ns('PackTarget')))
  for(var i = 0; i < i2307.length; i += 2) {
  request.r(i2307[i + 0], i2307[i + 1], 1, i2306, '')
  }
  i2300.packs = i2306
  request.r(i2301[5], i2301[6], 0, i2300, 'redSlider')
  request.r(i2301[7], i2301[8], 0, i2300, 'yellowSlider')
  request.r(i2301[9], i2301[10], 0, i2300, 'greenSlider')
  var i2309 = i2301[11]
  var i2308 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i2309.length; i += 2) {
  request.r(i2309[i + 0], i2309[i + 1], 1, i2308, '')
  }
  i2300.packSprites = i2308
  return i2300
}

Deserializers["EndCardManager"] = function (request, data, root) {
  var i2312 = root || request.c( 'EndCardManager' )
  var i2313 = data
  request.r(i2313[0], i2313[1], 0, i2312, 'winEC')
  request.r(i2313[2], i2313[3], 0, i2312, 'loseEC')
  return i2312
}

Deserializers["TutorialManager"] = function (request, data, root) {
  var i2314 = root || request.c( 'TutorialManager' )
  var i2315 = data
  request.r(i2315[0], i2315[1], 0, i2314, 'handPrefab')
  return i2314
}

Deserializers["CountdownTimer"] = function (request, data, root) {
  var i2316 = root || request.c( 'CountdownTimer' )
  var i2317 = data
  request.r(i2317[0], i2317[1], 0, i2316, 'timerText')
  i2316.startSeconds = i2317[2]
  i2316.warningTime = i2317[3]
  i2316.warningColor = new pc.Color(i2317[4], i2317[5], i2317[6], i2317[7])
  i2316.pulseScale = i2317[8]
  i2316.pulseSpeed = i2317[9]
  request.r(i2317[10], i2317[11], 0, i2316, 'backgroundWarning')
  request.r(i2317[12], i2317[13], 0, i2316, 'timeUpPanel')
  i2316.hasStarted = !!i2317[14]
  i2316.bgMinAlpha = i2317[15]
  i2316.bgMaxAlpha = i2317[16]
  i2316.bgBlinkSpeed = i2317[17]
  request.r(i2317[18], i2317[19], 0, i2316, 'ECLose')
  i2316.timerPA = i2317[20]
  i2316.isShowPA = !!i2317[21]
  return i2316
}

Deserializers["ScalePopLoop"] = function (request, data, root) {
  var i2318 = root || request.c( 'ScalePopLoop' )
  var i2319 = data
  i2318.minScale = new pc.Vec3( i2319[0], i2319[1], i2319[2] )
  i2318.maxScale = new pc.Vec3( i2319[3], i2319[4], i2319[5] )
  i2318.duration = i2319[6]
  i2318.ease = i2319[7]
  request.r(i2319[8], i2319[9], 0, i2318, 'tut')
  return i2318
}

Deserializers["NotiBox"] = function (request, data, root) {
  var i2320 = root || request.c( 'NotiBox' )
  var i2321 = data
  request.r(i2321[0], i2321[1], 0, i2320, 'box')
  request.r(i2321[2], i2321[3], 0, i2320, 'bg')
  i2320.delay = i2321[4]
  i2320.animTime = i2321[5]
  i2320.isNotiBook = !!i2321[6]
  request.r(i2321[7], i2321[8], 0, i2320, 'tut')
  return i2320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i2322 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i2323 = data
  i2322.m_Alpha = i2323[0]
  i2322.m_Interactable = !!i2323[1]
  i2322.m_BlocksRaycasts = !!i2323[2]
  i2322.m_IgnoreParentGroups = !!i2323[3]
  i2322.enabled = !!i2323[4]
  return i2322
}

Deserializers["TextAgeScale"] = function (request, data, root) {
  var i2324 = root || request.c( 'TextAgeScale' )
  var i2325 = data
  request.r(i2325[0], i2325[1], 0, i2324, 'textTransform')
  i2324.speedScale = i2325[2]
  i2324.scaleAmount = i2325[3]
  i2324.scaleNughet = i2325[4]
  i2324.speedReturn = i2325[5]
  return i2324
}

Deserializers["UpdateTarget"] = function (request, data, root) {
  var i2326 = root || request.c( 'UpdateTarget' )
  var i2327 = data
  i2326.targetType = i2327[0]
  i2326.maxTimer = i2327[1]
  i2326.countTimer = i2327[2]
  request.r(i2327[3], i2327[4], 0, i2326, 'ageText')
  i2326.age = i2327[5]
  i2326.pointUp = i2327[6]
  i2326.pointDown = i2327[7]
  return i2326
}

Deserializers["TMPro.TextMeshPro"] = function (request, data, root) {
  var i2328 = root || request.c( 'TMPro.TextMeshPro' )
  var i2329 = data
  i2328._SortingLayer = i2329[0]
  i2328._SortingLayerID = i2329[1]
  i2328._SortingOrder = i2329[2]
  i2328.m_hasFontAssetChanged = !!i2329[3]
  request.r(i2329[4], i2329[5], 0, i2328, 'm_renderer')
  i2328.m_maskType = i2329[6]
  i2328.m_text = i2329[7]
  i2328.m_isRightToLeft = !!i2329[8]
  request.r(i2329[9], i2329[10], 0, i2328, 'm_fontAsset')
  request.r(i2329[11], i2329[12], 0, i2328, 'm_sharedMaterial')
  var i2331 = i2329[13]
  var i2330 = []
  for(var i = 0; i < i2331.length; i += 2) {
  request.r(i2331[i + 0], i2331[i + 1], 2, i2330, '')
  }
  i2328.m_fontSharedMaterials = i2330
  request.r(i2329[14], i2329[15], 0, i2328, 'm_fontMaterial')
  var i2333 = i2329[16]
  var i2332 = []
  for(var i = 0; i < i2333.length; i += 2) {
  request.r(i2333[i + 0], i2333[i + 1], 2, i2332, '')
  }
  i2328.m_fontMaterials = i2332
  i2328.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2329[17], i2329[18], i2329[19], i2329[20])
  i2328.m_fontColor = new pc.Color(i2329[21], i2329[22], i2329[23], i2329[24])
  i2328.m_enableVertexGradient = !!i2329[25]
  i2328.m_colorMode = i2329[26]
  i2328.m_fontColorGradient = request.d('TMPro.VertexGradient', i2329[27], i2328.m_fontColorGradient)
  request.r(i2329[28], i2329[29], 0, i2328, 'm_fontColorGradientPreset')
  request.r(i2329[30], i2329[31], 0, i2328, 'm_spriteAsset')
  i2328.m_tintAllSprites = !!i2329[32]
  request.r(i2329[33], i2329[34], 0, i2328, 'm_StyleSheet')
  i2328.m_TextStyleHashCode = i2329[35]
  i2328.m_overrideHtmlColors = !!i2329[36]
  i2328.m_faceColor = UnityEngine.Color32.ConstructColor(i2329[37], i2329[38], i2329[39], i2329[40])
  i2328.m_fontSize = i2329[41]
  i2328.m_fontSizeBase = i2329[42]
  i2328.m_fontWeight = i2329[43]
  i2328.m_enableAutoSizing = !!i2329[44]
  i2328.m_fontSizeMin = i2329[45]
  i2328.m_fontSizeMax = i2329[46]
  i2328.m_fontStyle = i2329[47]
  i2328.m_HorizontalAlignment = i2329[48]
  i2328.m_VerticalAlignment = i2329[49]
  i2328.m_textAlignment = i2329[50]
  i2328.m_characterSpacing = i2329[51]
  i2328.m_wordSpacing = i2329[52]
  i2328.m_lineSpacing = i2329[53]
  i2328.m_lineSpacingMax = i2329[54]
  i2328.m_paragraphSpacing = i2329[55]
  i2328.m_charWidthMaxAdj = i2329[56]
  i2328.m_enableWordWrapping = !!i2329[57]
  i2328.m_wordWrappingRatios = i2329[58]
  i2328.m_overflowMode = i2329[59]
  request.r(i2329[60], i2329[61], 0, i2328, 'm_linkedTextComponent')
  request.r(i2329[62], i2329[63], 0, i2328, 'parentLinkedComponent')
  i2328.m_enableKerning = !!i2329[64]
  i2328.m_enableExtraPadding = !!i2329[65]
  i2328.checkPaddingRequired = !!i2329[66]
  i2328.m_isRichText = !!i2329[67]
  i2328.m_parseCtrlCharacters = !!i2329[68]
  i2328.m_isOrthographic = !!i2329[69]
  i2328.m_isCullingEnabled = !!i2329[70]
  i2328.m_horizontalMapping = i2329[71]
  i2328.m_verticalMapping = i2329[72]
  i2328.m_uvLineOffset = i2329[73]
  i2328.m_geometrySortingOrder = i2329[74]
  i2328.m_IsTextObjectScaleStatic = !!i2329[75]
  i2328.m_VertexBufferAutoSizeReduction = !!i2329[76]
  i2328.m_useMaxVisibleDescender = !!i2329[77]
  i2328.m_pageToDisplay = i2329[78]
  i2328.m_margin = new pc.Vec4( i2329[79], i2329[80], i2329[81], i2329[82] )
  i2328.m_isUsingLegacyAnimationComponent = !!i2329[83]
  i2328.m_isVolumetricText = !!i2329[84]
  i2328.m_Maskable = !!i2329[85]
  request.r(i2329[86], i2329[87], 0, i2328, 'm_Material')
  i2328.m_Color = new pc.Color(i2329[88], i2329[89], i2329[90], i2329[91])
  i2328.m_RaycastTarget = !!i2329[92]
  i2328.m_RaycastPadding = new pc.Vec4( i2329[93], i2329[94], i2329[95], i2329[96] )
  return i2328
}

Deserializers["MatchFlowManager"] = function (request, data, root) {
  var i2334 = root || request.c( 'MatchFlowManager' )
  var i2335 = data
  request.r(i2335[0], i2335[1], 0, i2334, 'config')
  request.r(i2335[2], i2335[3], 0, i2334, 'targetPosition')
  request.r(i2335[4], i2335[5], 0, i2334, 'parkTarget')
  i2334.moveTime = i2335[6]
  i2334.spacingItem = i2335[7]
  request.r(i2335[8], i2335[9], 0, i2334, 'textAgeTransform')
  request.r(i2335[10], i2335[11], 0, i2334, 'lidPrefab')
  i2334.closeTime = i2335[12]
  return i2334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2336 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2337 = data
  i2336.ambientIntensity = i2337[0]
  i2336.reflectionIntensity = i2337[1]
  i2336.ambientMode = i2337[2]
  i2336.ambientLight = new pc.Color(i2337[3], i2337[4], i2337[5], i2337[6])
  i2336.ambientSkyColor = new pc.Color(i2337[7], i2337[8], i2337[9], i2337[10])
  i2336.ambientGroundColor = new pc.Color(i2337[11], i2337[12], i2337[13], i2337[14])
  i2336.ambientEquatorColor = new pc.Color(i2337[15], i2337[16], i2337[17], i2337[18])
  i2336.fogColor = new pc.Color(i2337[19], i2337[20], i2337[21], i2337[22])
  i2336.fogEndDistance = i2337[23]
  i2336.fogStartDistance = i2337[24]
  i2336.fogDensity = i2337[25]
  i2336.fog = !!i2337[26]
  request.r(i2337[27], i2337[28], 0, i2336, 'skybox')
  i2336.fogMode = i2337[29]
  var i2339 = i2337[30]
  var i2338 = []
  for(var i = 0; i < i2339.length; i += 1) {
    i2338.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2339[i + 0]) );
  }
  i2336.lightmaps = i2338
  i2336.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2337[31], i2336.lightProbes)
  i2336.lightmapsMode = i2337[32]
  i2336.mixedBakeMode = i2337[33]
  i2336.environmentLightingMode = i2337[34]
  i2336.ambientProbe = new pc.SphericalHarmonicsL2(i2337[35])
  i2336.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i2337[36])
  i2336.useReferenceAmbientProbe = !!i2337[37]
  request.r(i2337[38], i2337[39], 0, i2336, 'customReflection')
  request.r(i2337[40], i2337[41], 0, i2336, 'defaultReflection')
  i2336.defaultReflectionMode = i2337[42]
  i2336.defaultReflectionResolution = i2337[43]
  i2336.sunLightObjectId = i2337[44]
  i2336.pixelLightCount = i2337[45]
  i2336.defaultReflectionHDR = !!i2337[46]
  i2336.hasLightDataAsset = !!i2337[47]
  i2336.hasManualGenerate = !!i2337[48]
  return i2336
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2343 = data
  request.r(i2343[0], i2343[1], 0, i2342, 'lightmapColor')
  request.r(i2343[2], i2343[3], 0, i2342, 'lightmapDirection')
  return i2342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2344 = root || new UnityEngine.LightProbes()
  var i2345 = data
  return i2344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2352 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2353 = data
  var i2355 = i2353[0]
  var i2354 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2355.length; i += 1) {
    i2354.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2355[i + 0]));
  }
  i2352.ShaderCompilationErrors = i2354
  i2352.name = i2353[1]
  i2352.guid = i2353[2]
  var i2357 = i2353[3]
  var i2356 = []
  for(var i = 0; i < i2357.length; i += 1) {
    i2356.push( i2357[i + 0] );
  }
  i2352.shaderDefinedKeywords = i2356
  var i2359 = i2353[4]
  var i2358 = []
  for(var i = 0; i < i2359.length; i += 1) {
    i2358.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2359[i + 0]) );
  }
  i2352.passes = i2358
  var i2361 = i2353[5]
  var i2360 = []
  for(var i = 0; i < i2361.length; i += 1) {
    i2360.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2361[i + 0]) );
  }
  i2352.usePasses = i2360
  var i2363 = i2353[6]
  var i2362 = []
  for(var i = 0; i < i2363.length; i += 1) {
    i2362.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2363[i + 0]) );
  }
  i2352.defaultParameterValues = i2362
  request.r(i2353[7], i2353[8], 0, i2352, 'unityFallbackShader')
  i2352.readDepth = !!i2353[9]
  i2352.isCreatedByShaderGraph = !!i2353[10]
  i2352.disableBatching = !!i2353[11]
  i2352.compiled = !!i2353[12]
  return i2352
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2366 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2367 = data
  i2366.shaderName = i2367[0]
  i2366.errorMessage = i2367[1]
  return i2366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2370 = root || new pc.UnityShaderPass()
  var i2371 = data
  i2370.id = i2371[0]
  i2370.subShaderIndex = i2371[1]
  i2370.name = i2371[2]
  i2370.passType = i2371[3]
  i2370.grabPassTextureName = i2371[4]
  i2370.usePass = !!i2371[5]
  i2370.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2371[6], i2370.zTest)
  i2370.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2371[7], i2370.zWrite)
  i2370.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2371[8], i2370.culling)
  i2370.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2371[9], i2370.blending)
  i2370.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2371[10], i2370.alphaBlending)
  i2370.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2371[11], i2370.colorWriteMask)
  i2370.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2371[12], i2370.offsetUnits)
  i2370.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2371[13], i2370.offsetFactor)
  i2370.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2371[14], i2370.stencilRef)
  i2370.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2371[15], i2370.stencilReadMask)
  i2370.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2371[16], i2370.stencilWriteMask)
  i2370.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2371[17], i2370.stencilOp)
  i2370.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2371[18], i2370.stencilOpFront)
  i2370.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2371[19], i2370.stencilOpBack)
  var i2373 = i2371[20]
  var i2372 = []
  for(var i = 0; i < i2373.length; i += 1) {
    i2372.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2373[i + 0]) );
  }
  i2370.tags = i2372
  var i2375 = i2371[21]
  var i2374 = []
  for(var i = 0; i < i2375.length; i += 1) {
    i2374.push( i2375[i + 0] );
  }
  i2370.passDefinedKeywords = i2374
  var i2377 = i2371[22]
  var i2376 = []
  for(var i = 0; i < i2377.length; i += 1) {
    i2376.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2377[i + 0]) );
  }
  i2370.passDefinedKeywordGroups = i2376
  var i2379 = i2371[23]
  var i2378 = []
  for(var i = 0; i < i2379.length; i += 1) {
    i2378.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2379[i + 0]) );
  }
  i2370.variants = i2378
  var i2381 = i2371[24]
  var i2380 = []
  for(var i = 0; i < i2381.length; i += 1) {
    i2380.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2381[i + 0]) );
  }
  i2370.excludedVariants = i2380
  i2370.hasDepthReader = !!i2371[25]
  return i2370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2383 = data
  i2382.val = i2383[0]
  i2382.name = i2383[1]
  return i2382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2384 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2385 = data
  i2384.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2385[0], i2384.src)
  i2384.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2385[1], i2384.dst)
  i2384.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2385[2], i2384.op)
  return i2384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2387 = data
  i2386.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2387[0], i2386.pass)
  i2386.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2387[1], i2386.fail)
  i2386.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2387[2], i2386.zFail)
  i2386.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2387[3], i2386.comp)
  return i2386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2391 = data
  i2390.name = i2391[0]
  i2390.value = i2391[1]
  return i2390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2395 = data
  var i2397 = i2395[0]
  var i2396 = []
  for(var i = 0; i < i2397.length; i += 1) {
    i2396.push( i2397[i + 0] );
  }
  i2394.keywords = i2396
  i2394.hasDiscard = !!i2395[1]
  return i2394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2401 = data
  i2400.passId = i2401[0]
  i2400.subShaderIndex = i2401[1]
  var i2403 = i2401[2]
  var i2402 = []
  for(var i = 0; i < i2403.length; i += 1) {
    i2402.push( i2403[i + 0] );
  }
  i2400.keywords = i2402
  i2400.vertexProgram = i2401[3]
  i2400.fragmentProgram = i2401[4]
  i2400.exportedForWebGl2 = !!i2401[5]
  i2400.readDepth = !!i2401[6]
  return i2400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2407 = data
  request.r(i2407[0], i2407[1], 0, i2406, 'shader')
  i2406.pass = i2407[2]
  return i2406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2411 = data
  i2410.name = i2411[0]
  i2410.type = i2411[1]
  i2410.value = new pc.Vec4( i2411[2], i2411[3], i2411[4], i2411[5] )
  i2410.textureValue = i2411[6]
  i2410.shaderPropertyFlag = i2411[7]
  return i2410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2412 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2413 = data
  i2412.name = i2413[0]
  request.r(i2413[1], i2413[2], 0, i2412, 'texture')
  i2412.aabb = i2413[3]
  i2412.vertices = i2413[4]
  i2412.triangles = i2413[5]
  i2412.textureRect = UnityEngine.Rect.MinMaxRect(i2413[6], i2413[7], i2413[8], i2413[9])
  i2412.packedRect = UnityEngine.Rect.MinMaxRect(i2413[10], i2413[11], i2413[12], i2413[13])
  i2412.border = new pc.Vec4( i2413[14], i2413[15], i2413[16], i2413[17] )
  i2412.transparency = i2413[18]
  i2412.bounds = i2413[19]
  i2412.pixelsPerUnit = i2413[20]
  i2412.textureWidth = i2413[21]
  i2412.textureHeight = i2413[22]
  i2412.nativeSize = new pc.Vec2( i2413[23], i2413[24] )
  i2412.pivot = new pc.Vec2( i2413[25], i2413[26] )
  i2412.textureRectOffset = new pc.Vec2( i2413[27], i2413[28] )
  return i2412
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2415 = data
  i2414.name = i2415[0]
  return i2414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2417 = data
  i2416.name = i2417[0]
  i2416.wrapMode = i2417[1]
  i2416.isLooping = !!i2417[2]
  i2416.length = i2417[3]
  var i2419 = i2417[4]
  var i2418 = []
  for(var i = 0; i < i2419.length; i += 1) {
    i2418.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2419[i + 0]) );
  }
  i2416.curves = i2418
  var i2421 = i2417[5]
  var i2420 = []
  for(var i = 0; i < i2421.length; i += 1) {
    i2420.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2421[i + 0]) );
  }
  i2416.events = i2420
  i2416.halfPrecision = !!i2417[6]
  i2416._frameRate = i2417[7]
  i2416.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i2417[8], i2416.localBounds)
  i2416.hasMuscleCurves = !!i2417[9]
  var i2423 = i2417[10]
  var i2422 = []
  for(var i = 0; i < i2423.length; i += 1) {
    i2422.push( i2423[i + 0] );
  }
  i2416.clipMuscleConstant = i2422
  i2416.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i2417[11], i2416.clipBindingConstant)
  return i2416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2427 = data
  i2426.path = i2427[0]
  i2426.hash = i2427[1]
  i2426.componentType = i2427[2]
  i2426.property = i2427[3]
  i2426.keys = i2427[4]
  var i2429 = i2427[5]
  var i2428 = []
  for(var i = 0; i < i2429.length; i += 1) {
    i2428.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2429[i + 0]) );
  }
  i2426.objectReferenceKeys = i2428
  return i2426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2433 = data
  i2432.time = i2433[0]
  request.r(i2433[1], i2433[2], 0, i2432, 'value')
  return i2432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2436 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2437 = data
  i2436.functionName = i2437[0]
  i2436.floatParameter = i2437[1]
  i2436.intParameter = i2437[2]
  i2436.stringParameter = i2437[3]
  request.r(i2437[4], i2437[5], 0, i2436, 'objectReferenceParameter')
  i2436.time = i2437[6]
  return i2436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2439 = data
  i2438.center = new pc.Vec3( i2439[0], i2439[1], i2439[2] )
  i2438.extends = new pc.Vec3( i2439[3], i2439[4], i2439[5] )
  return i2438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2443 = data
  var i2445 = i2443[0]
  var i2444 = []
  for(var i = 0; i < i2445.length; i += 1) {
    i2444.push( i2445[i + 0] );
  }
  i2442.genericBindings = i2444
  var i2447 = i2443[1]
  var i2446 = []
  for(var i = 0; i < i2447.length; i += 1) {
    i2446.push( i2447[i + 0] );
  }
  i2442.pptrCurveMapping = i2446
  return i2442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2449 = data
  i2448.name = i2449[0]
  i2448.ascent = i2449[1]
  i2448.originalLineHeight = i2449[2]
  i2448.fontSize = i2449[3]
  var i2451 = i2449[4]
  var i2450 = []
  for(var i = 0; i < i2451.length; i += 1) {
    i2450.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2451[i + 0]) );
  }
  i2448.characterInfo = i2450
  request.r(i2449[5], i2449[6], 0, i2448, 'texture')
  i2448.originalFontSize = i2449[7]
  return i2448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2455 = data
  i2454.index = i2455[0]
  i2454.advance = i2455[1]
  i2454.bearing = i2455[2]
  i2454.glyphWidth = i2455[3]
  i2454.glyphHeight = i2455[4]
  i2454.minX = i2455[5]
  i2454.maxX = i2455[6]
  i2454.minY = i2455[7]
  i2454.maxY = i2455[8]
  i2454.uvBottomLeftX = i2455[9]
  i2454.uvBottomLeftY = i2455[10]
  i2454.uvBottomRightX = i2455[11]
  i2454.uvBottomRightY = i2455[12]
  i2454.uvTopLeftX = i2455[13]
  i2454.uvTopLeftY = i2455[14]
  i2454.uvTopRightX = i2455[15]
  i2454.uvTopRightY = i2455[16]
  return i2454
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2457 = data
  i2456.name = i2457[0]
  var i2459 = i2457[1]
  var i2458 = []
  for(var i = 0; i < i2459.length; i += 1) {
    i2458.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2459[i + 0]) );
  }
  i2456.layers = i2458
  var i2461 = i2457[2]
  var i2460 = []
  for(var i = 0; i < i2461.length; i += 1) {
    i2460.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2461[i + 0]) );
  }
  i2456.parameters = i2460
  i2456.animationClips = i2457[3]
  i2456.avatarUnsupported = i2457[4]
  return i2456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2465 = data
  i2464.name = i2465[0]
  i2464.defaultWeight = i2465[1]
  i2464.blendingMode = i2465[2]
  i2464.avatarMask = i2465[3]
  i2464.syncedLayerIndex = i2465[4]
  i2464.syncedLayerAffectsTiming = !!i2465[5]
  i2464.syncedLayers = i2465[6]
  i2464.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2465[7], i2464.stateMachine)
  return i2464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2467 = data
  i2466.id = i2467[0]
  i2466.name = i2467[1]
  i2466.path = i2467[2]
  var i2469 = i2467[3]
  var i2468 = []
  for(var i = 0; i < i2469.length; i += 1) {
    i2468.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2469[i + 0]) );
  }
  i2466.states = i2468
  var i2471 = i2467[4]
  var i2470 = []
  for(var i = 0; i < i2471.length; i += 1) {
    i2470.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2471[i + 0]) );
  }
  i2466.machines = i2470
  var i2473 = i2467[5]
  var i2472 = []
  for(var i = 0; i < i2473.length; i += 1) {
    i2472.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2473[i + 0]) );
  }
  i2466.entryStateTransitions = i2472
  var i2475 = i2467[6]
  var i2474 = []
  for(var i = 0; i < i2475.length; i += 1) {
    i2474.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2475[i + 0]) );
  }
  i2466.exitStateTransitions = i2474
  var i2477 = i2467[7]
  var i2476 = []
  for(var i = 0; i < i2477.length; i += 1) {
    i2476.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2477[i + 0]) );
  }
  i2466.anyStateTransitions = i2476
  i2466.defaultStateId = i2467[8]
  return i2466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2481 = data
  i2480.id = i2481[0]
  i2480.name = i2481[1]
  i2480.cycleOffset = i2481[2]
  i2480.cycleOffsetParameter = i2481[3]
  i2480.cycleOffsetParameterActive = !!i2481[4]
  i2480.mirror = !!i2481[5]
  i2480.mirrorParameter = i2481[6]
  i2480.mirrorParameterActive = !!i2481[7]
  i2480.motionId = i2481[8]
  i2480.nameHash = i2481[9]
  i2480.fullPathHash = i2481[10]
  i2480.speed = i2481[11]
  i2480.speedParameter = i2481[12]
  i2480.speedParameterActive = !!i2481[13]
  i2480.tag = i2481[14]
  i2480.tagHash = i2481[15]
  i2480.writeDefaultValues = !!i2481[16]
  var i2483 = i2481[17]
  var i2482 = []
  for(var i = 0; i < i2483.length; i += 2) {
  request.r(i2483[i + 0], i2483[i + 1], 2, i2482, '')
  }
  i2480.behaviours = i2482
  var i2485 = i2481[18]
  var i2484 = []
  for(var i = 0; i < i2485.length; i += 1) {
    i2484.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2485[i + 0]) );
  }
  i2480.transitions = i2484
  return i2480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2491 = data
  i2490.fullPath = i2491[0]
  i2490.canTransitionToSelf = !!i2491[1]
  i2490.duration = i2491[2]
  i2490.exitTime = i2491[3]
  i2490.hasExitTime = !!i2491[4]
  i2490.hasFixedDuration = !!i2491[5]
  i2490.interruptionSource = i2491[6]
  i2490.offset = i2491[7]
  i2490.orderedInterruption = !!i2491[8]
  i2490.destinationStateId = i2491[9]
  i2490.isExit = !!i2491[10]
  i2490.mute = !!i2491[11]
  i2490.solo = !!i2491[12]
  var i2493 = i2491[13]
  var i2492 = []
  for(var i = 0; i < i2493.length; i += 1) {
    i2492.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2493[i + 0]) );
  }
  i2490.conditions = i2492
  return i2490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2499 = data
  i2498.destinationStateId = i2499[0]
  i2498.isExit = !!i2499[1]
  i2498.mute = !!i2499[2]
  i2498.solo = !!i2499[3]
  var i2501 = i2499[4]
  var i2500 = []
  for(var i = 0; i < i2501.length; i += 1) {
    i2500.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2501[i + 0]) );
  }
  i2498.conditions = i2500
  return i2498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2505 = data
  i2504.defaultBool = !!i2505[0]
  i2504.defaultFloat = i2505[1]
  i2504.defaultInt = i2505[2]
  i2504.name = i2505[3]
  i2504.nameHash = i2505[4]
  i2504.type = i2505[5]
  return i2504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2507 = data
  i2506.name = i2507[0]
  i2506.bytes64 = i2507[1]
  i2506.data = i2507[2]
  return i2506
}

Deserializers["TrayConfig"] = function (request, data, root) {
  var i2508 = root || request.c( 'TrayConfig' )
  var i2509 = data
  i2508.layoutType = i2509[0]
  i2508.columnCount = i2509[1]
  i2508.spacingX = i2509[2]
  i2508.spacingY = i2509[3]
  i2508.firstTrayPosition = new pc.Vec3( i2509[4], i2509[5], i2509[6] )
  return i2508
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i2510 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i2511 = data
  var i2513 = i2511[0]
  var i2512 = []
  for(var i = 0; i < i2513.length; i += 2) {
  request.r(i2513[i + 0], i2513[i + 1], 2, i2512, '')
  }
  i2510.atlasAssets = i2512
  i2510.scale = i2511[1]
  request.r(i2511[2], i2511[3], 0, i2510, 'skeletonJSON')
  i2510.isUpgradingBlendModeMaterials = !!i2511[4]
  i2510.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i2511[5], i2510.blendModeMaterials)
  var i2515 = i2511[6]
  var i2514 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i2515.length; i += 2) {
  request.r(i2515[i + 0], i2515[i + 1], 1, i2514, '')
  }
  i2510.skeletonDataModifiers = i2514
  var i2517 = i2511[7]
  var i2516 = []
  for(var i = 0; i < i2517.length; i += 1) {
    i2516.push( i2517[i + 0] );
  }
  i2510.fromAnimation = i2516
  var i2519 = i2511[8]
  var i2518 = []
  for(var i = 0; i < i2519.length; i += 1) {
    i2518.push( i2519[i + 0] );
  }
  i2510.toAnimation = i2518
  i2510.duration = i2511[9]
  i2510.defaultMix = i2511[10]
  request.r(i2511[11], i2511[12], 0, i2510, 'controller')
  return i2510
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i2522 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i2523 = data
  i2522.applyAdditiveMaterial = !!i2523[0]
  var i2525 = i2523[1]
  var i2524 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2525.length; i += 1) {
    i2524.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2525[i + 0]));
  }
  i2522.additiveMaterials = i2524
  var i2527 = i2523[2]
  var i2526 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2527.length; i += 1) {
    i2526.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2527[i + 0]));
  }
  i2522.multiplyMaterials = i2526
  var i2529 = i2523[3]
  var i2528 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2529.length; i += 1) {
    i2528.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2529[i + 0]));
  }
  i2522.screenMaterials = i2528
  i2522.requiresBlendModeMaterials = !!i2523[4]
  return i2522
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i2532 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i2533 = data
  i2532.pageName = i2533[0]
  request.r(i2533[1], i2533[2], 0, i2532, 'material')
  return i2532
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i2536 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i2537 = data
  request.r(i2537[0], i2537[1], 0, i2536, 'atlasFile')
  var i2539 = i2537[2]
  var i2538 = []
  for(var i = 0; i < i2539.length; i += 2) {
  request.r(i2539[i + 0], i2539[i + 1], 2, i2538, '')
  }
  i2536.materials = i2538
  i2536.textureLoadingMode = i2537[3]
  request.r(i2537[4], i2537[5], 0, i2536, 'onDemandTextureLoader')
  return i2536
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2540 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2541 = data
  request.r(i2541[0], i2541[1], 0, i2540, 'atlas')
  i2540.normalStyle = i2541[2]
  i2540.normalSpacingOffset = i2541[3]
  i2540.boldStyle = i2541[4]
  i2540.boldSpacing = i2541[5]
  i2540.italicStyle = i2541[6]
  i2540.tabSize = i2541[7]
  i2540.hashCode = i2541[8]
  request.r(i2541[9], i2541[10], 0, i2540, 'material')
  i2540.materialHashCode = i2541[11]
  i2540.m_Version = i2541[12]
  i2540.m_SourceFontFileGUID = i2541[13]
  request.r(i2541[14], i2541[15], 0, i2540, 'm_SourceFontFile_EditorRef')
  request.r(i2541[16], i2541[17], 0, i2540, 'm_SourceFontFile')
  i2540.m_AtlasPopulationMode = i2541[18]
  i2540.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2541[19], i2540.m_FaceInfo)
  var i2543 = i2541[20]
  var i2542 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2543.length; i += 1) {
    i2542.add(request.d('UnityEngine.TextCore.Glyph', i2543[i + 0]));
  }
  i2540.m_GlyphTable = i2542
  var i2545 = i2541[21]
  var i2544 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2545.length; i += 1) {
    i2544.add(request.d('TMPro.TMP_Character', i2545[i + 0]));
  }
  i2540.m_CharacterTable = i2544
  var i2547 = i2541[22]
  var i2546 = []
  for(var i = 0; i < i2547.length; i += 2) {
  request.r(i2547[i + 0], i2547[i + 1], 2, i2546, '')
  }
  i2540.m_AtlasTextures = i2546
  i2540.m_AtlasTextureIndex = i2541[23]
  i2540.m_IsMultiAtlasTexturesEnabled = !!i2541[24]
  i2540.m_ClearDynamicDataOnBuild = !!i2541[25]
  var i2549 = i2541[26]
  var i2548 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2549.length; i += 1) {
    i2548.add(request.d('UnityEngine.TextCore.GlyphRect', i2549[i + 0]));
  }
  i2540.m_UsedGlyphRects = i2548
  var i2551 = i2541[27]
  var i2550 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2551.length; i += 1) {
    i2550.add(request.d('UnityEngine.TextCore.GlyphRect', i2551[i + 0]));
  }
  i2540.m_FreeGlyphRects = i2550
  i2540.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2541[28], i2540.m_fontInfo)
  i2540.m_AtlasWidth = i2541[29]
  i2540.m_AtlasHeight = i2541[30]
  i2540.m_AtlasPadding = i2541[31]
  i2540.m_AtlasRenderMode = i2541[32]
  var i2553 = i2541[33]
  var i2552 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2553.length; i += 1) {
    i2552.add(request.d('TMPro.TMP_Glyph', i2553[i + 0]));
  }
  i2540.m_glyphInfoList = i2552
  i2540.m_KerningTable = request.d('TMPro.KerningTable', i2541[34], i2540.m_KerningTable)
  i2540.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2541[35], i2540.m_FontFeatureTable)
  var i2555 = i2541[36]
  var i2554 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2555.length; i += 2) {
  request.r(i2555[i + 0], i2555[i + 1], 1, i2554, '')
  }
  i2540.fallbackFontAssets = i2554
  var i2557 = i2541[37]
  var i2556 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2557.length; i += 2) {
  request.r(i2557[i + 0], i2557[i + 1], 1, i2556, '')
  }
  i2540.m_FallbackFontAssetTable = i2556
  i2540.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2541[38], i2540.m_CreationSettings)
  var i2559 = i2541[39]
  var i2558 = []
  for(var i = 0; i < i2559.length; i += 1) {
    i2558.push( request.d('TMPro.TMP_FontWeightPair', i2559[i + 0]) );
  }
  i2540.m_FontWeightTable = i2558
  var i2561 = i2541[40]
  var i2560 = []
  for(var i = 0; i < i2561.length; i += 1) {
    i2560.push( request.d('TMPro.TMP_FontWeightPair', i2561[i + 0]) );
  }
  i2540.fontWeights = i2560
  return i2540
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2562 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2563 = data
  i2562.m_FaceIndex = i2563[0]
  i2562.m_FamilyName = i2563[1]
  i2562.m_StyleName = i2563[2]
  i2562.m_PointSize = i2563[3]
  i2562.m_Scale = i2563[4]
  i2562.m_UnitsPerEM = i2563[5]
  i2562.m_LineHeight = i2563[6]
  i2562.m_AscentLine = i2563[7]
  i2562.m_CapLine = i2563[8]
  i2562.m_MeanLine = i2563[9]
  i2562.m_Baseline = i2563[10]
  i2562.m_DescentLine = i2563[11]
  i2562.m_SuperscriptOffset = i2563[12]
  i2562.m_SuperscriptSize = i2563[13]
  i2562.m_SubscriptOffset = i2563[14]
  i2562.m_SubscriptSize = i2563[15]
  i2562.m_UnderlineOffset = i2563[16]
  i2562.m_UnderlineThickness = i2563[17]
  i2562.m_StrikethroughOffset = i2563[18]
  i2562.m_StrikethroughThickness = i2563[19]
  i2562.m_TabWidth = i2563[20]
  return i2562
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2566 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2567 = data
  i2566.m_Index = i2567[0]
  i2566.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2567[1], i2566.m_Metrics)
  i2566.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2567[2], i2566.m_GlyphRect)
  i2566.m_Scale = i2567[3]
  i2566.m_AtlasIndex = i2567[4]
  i2566.m_ClassDefinitionType = i2567[5]
  return i2566
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2568 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2569 = data
  i2568.m_Width = i2569[0]
  i2568.m_Height = i2569[1]
  i2568.m_HorizontalBearingX = i2569[2]
  i2568.m_HorizontalBearingY = i2569[3]
  i2568.m_HorizontalAdvance = i2569[4]
  return i2568
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2570 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2571 = data
  i2570.m_X = i2571[0]
  i2570.m_Y = i2571[1]
  i2570.m_Width = i2571[2]
  i2570.m_Height = i2571[3]
  return i2570
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2574 = root || request.c( 'TMPro.TMP_Character' )
  var i2575 = data
  i2574.m_ElementType = i2575[0]
  i2574.m_Unicode = i2575[1]
  i2574.m_GlyphIndex = i2575[2]
  i2574.m_Scale = i2575[3]
  return i2574
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2580 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2581 = data
  i2580.Name = i2581[0]
  i2580.PointSize = i2581[1]
  i2580.Scale = i2581[2]
  i2580.CharacterCount = i2581[3]
  i2580.LineHeight = i2581[4]
  i2580.Baseline = i2581[5]
  i2580.Ascender = i2581[6]
  i2580.CapHeight = i2581[7]
  i2580.Descender = i2581[8]
  i2580.CenterLine = i2581[9]
  i2580.SuperscriptOffset = i2581[10]
  i2580.SubscriptOffset = i2581[11]
  i2580.SubSize = i2581[12]
  i2580.Underline = i2581[13]
  i2580.UnderlineThickness = i2581[14]
  i2580.strikethrough = i2581[15]
  i2580.strikethroughThickness = i2581[16]
  i2580.TabWidth = i2581[17]
  i2580.Padding = i2581[18]
  i2580.AtlasWidth = i2581[19]
  i2580.AtlasHeight = i2581[20]
  return i2580
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2584 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2585 = data
  i2584.id = i2585[0]
  i2584.x = i2585[1]
  i2584.y = i2585[2]
  i2584.width = i2585[3]
  i2584.height = i2585[4]
  i2584.xOffset = i2585[5]
  i2584.yOffset = i2585[6]
  i2584.xAdvance = i2585[7]
  i2584.scale = i2585[8]
  return i2584
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2586 = root || request.c( 'TMPro.KerningTable' )
  var i2587 = data
  var i2589 = i2587[0]
  var i2588 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2589.length; i += 1) {
    i2588.add(request.d('TMPro.KerningPair', i2589[i + 0]));
  }
  i2586.kerningPairs = i2588
  return i2586
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2592 = root || request.c( 'TMPro.KerningPair' )
  var i2593 = data
  i2592.xOffset = i2593[0]
  i2592.m_FirstGlyph = i2593[1]
  i2592.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2593[2], i2592.m_FirstGlyphAdjustments)
  i2592.m_SecondGlyph = i2593[3]
  i2592.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2593[4], i2592.m_SecondGlyphAdjustments)
  i2592.m_IgnoreSpacingAdjustments = !!i2593[5]
  return i2592
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2594 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2595 = data
  var i2597 = i2595[0]
  var i2596 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2597.length; i += 1) {
    i2596.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i2597[i + 0]));
  }
  i2594.m_GlyphPairAdjustmentRecords = i2596
  return i2594
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2600 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i2601 = data
  i2600.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2601[0], i2600.m_FirstAdjustmentRecord)
  i2600.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2601[1], i2600.m_SecondAdjustmentRecord)
  i2600.m_FeatureLookupFlags = i2601[2]
  return i2600
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2604 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2605 = data
  i2604.sourceFontFileName = i2605[0]
  i2604.sourceFontFileGUID = i2605[1]
  i2604.pointSizeSamplingMode = i2605[2]
  i2604.pointSize = i2605[3]
  i2604.padding = i2605[4]
  i2604.packingMode = i2605[5]
  i2604.atlasWidth = i2605[6]
  i2604.atlasHeight = i2605[7]
  i2604.characterSetSelectionMode = i2605[8]
  i2604.characterSequence = i2605[9]
  i2604.referencedFontAssetGUID = i2605[10]
  i2604.referencedTextAssetGUID = i2605[11]
  i2604.fontStyle = i2605[12]
  i2604.fontStyleModifier = i2605[13]
  i2604.renderMode = i2605[14]
  i2604.includeFontFeatures = !!i2605[15]
  return i2604
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2608 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2609 = data
  request.r(i2609[0], i2609[1], 0, i2608, 'regularTypeface')
  request.r(i2609[2], i2609[3], 0, i2608, 'italicTypeface')
  return i2608
}

Deserializers["MatchConfig"] = function (request, data, root) {
  var i2610 = root || request.c( 'MatchConfig' )
  var i2611 = data
  i2610.useFire = !!i2611[0]
  request.r(i2611[1], i2611[2], 0, i2610, 'firePrefab')
  i2610.useBlink = !!i2611[3]
  i2610.useGather = !!i2611[4]
  i2610.useFlyToTarget = !!i2611[5]
  i2610.useCloseBox = !!i2611[6]
  i2610.flyType = i2611[7]
  return i2610
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2612 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2613 = data
  i2612.useSafeMode = !!i2613[0]
  i2612.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2613[1], i2612.safeModeOptions)
  i2612.timeScale = i2613[2]
  i2612.unscaledTimeScale = i2613[3]
  i2612.useSmoothDeltaTime = !!i2613[4]
  i2612.maxSmoothUnscaledTime = i2613[5]
  i2612.rewindCallbackMode = i2613[6]
  i2612.showUnityEditorReport = !!i2613[7]
  i2612.logBehaviour = i2613[8]
  i2612.drawGizmos = !!i2613[9]
  i2612.defaultRecyclable = !!i2613[10]
  i2612.defaultAutoPlay = i2613[11]
  i2612.defaultUpdateType = i2613[12]
  i2612.defaultTimeScaleIndependent = !!i2613[13]
  i2612.defaultEaseType = i2613[14]
  i2612.defaultEaseOvershootOrAmplitude = i2613[15]
  i2612.defaultEasePeriod = i2613[16]
  i2612.defaultAutoKill = !!i2613[17]
  i2612.defaultLoopType = i2613[18]
  i2612.debugMode = !!i2613[19]
  i2612.debugStoreTargetId = !!i2613[20]
  i2612.showPreviewPanel = !!i2613[21]
  i2612.storeSettingsLocation = i2613[22]
  i2612.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2613[23], i2612.modules)
  i2612.createASMDEF = !!i2613[24]
  i2612.showPlayingTweens = !!i2613[25]
  i2612.showPausedTweens = !!i2613[26]
  return i2612
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2614 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2615 = data
  i2614.logBehaviour = i2615[0]
  i2614.nestedTweenFailureBehaviour = i2615[1]
  return i2614
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2616 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2617 = data
  i2616.showPanel = !!i2617[0]
  i2616.audioEnabled = !!i2617[1]
  i2616.physicsEnabled = !!i2617[2]
  i2616.physics2DEnabled = !!i2617[3]
  i2616.spriteEnabled = !!i2617[4]
  i2616.uiEnabled = !!i2617[5]
  i2616.textMeshProEnabled = !!i2617[6]
  i2616.tk2DEnabled = !!i2617[7]
  i2616.deAudioEnabled = !!i2617[8]
  i2616.deUnityExtendedEnabled = !!i2617[9]
  i2616.epoOutlineEnabled = !!i2617[10]
  return i2616
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2618 = root || request.c( 'TMPro.TMP_Settings' )
  var i2619 = data
  i2618.m_enableWordWrapping = !!i2619[0]
  i2618.m_enableKerning = !!i2619[1]
  i2618.m_enableExtraPadding = !!i2619[2]
  i2618.m_enableTintAllSprites = !!i2619[3]
  i2618.m_enableParseEscapeCharacters = !!i2619[4]
  i2618.m_EnableRaycastTarget = !!i2619[5]
  i2618.m_GetFontFeaturesAtRuntime = !!i2619[6]
  i2618.m_missingGlyphCharacter = i2619[7]
  i2618.m_warningsDisabled = !!i2619[8]
  request.r(i2619[9], i2619[10], 0, i2618, 'm_defaultFontAsset')
  i2618.m_defaultFontAssetPath = i2619[11]
  i2618.m_defaultFontSize = i2619[12]
  i2618.m_defaultAutoSizeMinRatio = i2619[13]
  i2618.m_defaultAutoSizeMaxRatio = i2619[14]
  i2618.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2619[15], i2619[16] )
  i2618.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2619[17], i2619[18] )
  i2618.m_autoSizeTextContainer = !!i2619[19]
  i2618.m_IsTextObjectScaleStatic = !!i2619[20]
  var i2621 = i2619[21]
  var i2620 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2621.length; i += 2) {
  request.r(i2621[i + 0], i2621[i + 1], 1, i2620, '')
  }
  i2618.m_fallbackFontAssets = i2620
  i2618.m_matchMaterialPreset = !!i2619[22]
  request.r(i2619[23], i2619[24], 0, i2618, 'm_defaultSpriteAsset')
  i2618.m_defaultSpriteAssetPath = i2619[25]
  i2618.m_enableEmojiSupport = !!i2619[26]
  i2618.m_MissingCharacterSpriteUnicode = i2619[27]
  i2618.m_defaultColorGradientPresetsPath = i2619[28]
  request.r(i2619[29], i2619[30], 0, i2618, 'm_defaultStyleSheet')
  i2618.m_StyleSheetsResourcePath = i2619[31]
  request.r(i2619[32], i2619[33], 0, i2618, 'm_leadingCharacters')
  request.r(i2619[34], i2619[35], 0, i2618, 'm_followingCharacters')
  i2618.m_UseModernHangulLineBreakingRules = !!i2619[36]
  return i2618
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2622 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i2623 = data
  i2622.m_GlyphIndex = i2623[0]
  i2622.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i2623[1], i2622.m_GlyphValueRecord)
  return i2622
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i2624 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i2625 = data
  i2624.m_XPlacement = i2625[0]
  i2624.m_YPlacement = i2625[1]
  i2624.m_XAdvance = i2625[2]
  i2624.m_YAdvance = i2625[3]
  return i2624
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2626 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2627 = data
  request.r(i2627[0], i2627[1], 0, i2626, 'spriteSheet')
  var i2629 = i2627[2]
  var i2628 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2629.length; i += 1) {
    i2628.add(request.d('TMPro.TMP_Sprite', i2629[i + 0]));
  }
  i2626.spriteInfoList = i2628
  var i2631 = i2627[3]
  var i2630 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2631.length; i += 2) {
  request.r(i2631[i + 0], i2631[i + 1], 1, i2630, '')
  }
  i2626.fallbackSpriteAssets = i2630
  i2626.hashCode = i2627[4]
  request.r(i2627[5], i2627[6], 0, i2626, 'material')
  i2626.materialHashCode = i2627[7]
  i2626.m_Version = i2627[8]
  i2626.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2627[9], i2626.m_FaceInfo)
  var i2633 = i2627[10]
  var i2632 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2633.length; i += 1) {
    i2632.add(request.d('TMPro.TMP_SpriteCharacter', i2633[i + 0]));
  }
  i2626.m_SpriteCharacterTable = i2632
  var i2635 = i2627[11]
  var i2634 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2635.length; i += 1) {
    i2634.add(request.d('TMPro.TMP_SpriteGlyph', i2635[i + 0]));
  }
  i2626.m_SpriteGlyphTable = i2634
  return i2626
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2638 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2639 = data
  i2638.name = i2639[0]
  i2638.hashCode = i2639[1]
  i2638.unicode = i2639[2]
  i2638.pivot = new pc.Vec2( i2639[3], i2639[4] )
  request.r(i2639[5], i2639[6], 0, i2638, 'sprite')
  i2638.id = i2639[7]
  i2638.x = i2639[8]
  i2638.y = i2639[9]
  i2638.width = i2639[10]
  i2638.height = i2639[11]
  i2638.xOffset = i2639[12]
  i2638.yOffset = i2639[13]
  i2638.xAdvance = i2639[14]
  i2638.scale = i2639[15]
  return i2638
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2644 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2645 = data
  i2644.m_Name = i2645[0]
  i2644.m_HashCode = i2645[1]
  i2644.m_ElementType = i2645[2]
  i2644.m_Unicode = i2645[3]
  i2644.m_GlyphIndex = i2645[4]
  i2644.m_Scale = i2645[5]
  return i2644
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2648 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2649 = data
  request.r(i2649[0], i2649[1], 0, i2648, 'sprite')
  i2648.m_Index = i2649[2]
  i2648.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2649[3], i2648.m_Metrics)
  i2648.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2649[4], i2648.m_GlyphRect)
  i2648.m_Scale = i2649[5]
  i2648.m_AtlasIndex = i2649[6]
  i2648.m_ClassDefinitionType = i2649[7]
  return i2648
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2650 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2651 = data
  var i2653 = i2651[0]
  var i2652 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2653.length; i += 1) {
    i2652.add(request.d('TMPro.TMP_Style', i2653[i + 0]));
  }
  i2650.m_StyleList = i2652
  return i2650
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2656 = root || request.c( 'TMPro.TMP_Style' )
  var i2657 = data
  i2656.m_Name = i2657[0]
  i2656.m_HashCode = i2657[1]
  i2656.m_OpeningDefinition = i2657[2]
  i2656.m_ClosingDefinition = i2657[3]
  i2656.m_OpeningTagArray = i2657[4]
  i2656.m_ClosingTagArray = i2657[5]
  i2656.m_OpeningTagUnicodeArray = i2657[6]
  i2656.m_ClosingTagUnicodeArray = i2657[7]
  return i2656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2659 = data
  var i2661 = i2659[0]
  var i2660 = []
  for(var i = 0; i < i2661.length; i += 1) {
    i2660.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2661[i + 0]) );
  }
  i2658.files = i2660
  i2658.componentToPrefabIds = i2659[1]
  return i2658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2665 = data
  i2664.path = i2665[0]
  request.r(i2665[1], i2665[2], 0, i2664, 'unityObject')
  return i2664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2667 = data
  var i2669 = i2667[0]
  var i2668 = []
  for(var i = 0; i < i2669.length; i += 1) {
    i2668.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2669[i + 0]) );
  }
  i2666.scriptsExecutionOrder = i2668
  var i2671 = i2667[1]
  var i2670 = []
  for(var i = 0; i < i2671.length; i += 1) {
    i2670.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2671[i + 0]) );
  }
  i2666.sortingLayers = i2670
  var i2673 = i2667[2]
  var i2672 = []
  for(var i = 0; i < i2673.length; i += 1) {
    i2672.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2673[i + 0]) );
  }
  i2666.cullingLayers = i2672
  i2666.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2667[3], i2666.timeSettings)
  i2666.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2667[4], i2666.physicsSettings)
  i2666.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2667[5], i2666.physics2DSettings)
  i2666.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2667[6], i2666.qualitySettings)
  i2666.enableRealtimeShadows = !!i2667[7]
  i2666.enableAutoInstancing = !!i2667[8]
  i2666.enableStaticBatching = !!i2667[9]
  i2666.enableDynamicBatching = !!i2667[10]
  i2666.lightmapEncodingQuality = i2667[11]
  i2666.desiredColorSpace = i2667[12]
  var i2675 = i2667[13]
  var i2674 = []
  for(var i = 0; i < i2675.length; i += 1) {
    i2674.push( i2675[i + 0] );
  }
  i2666.allTags = i2674
  return i2666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2679 = data
  i2678.name = i2679[0]
  i2678.value = i2679[1]
  return i2678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2683 = data
  i2682.id = i2683[0]
  i2682.name = i2683[1]
  i2682.value = i2683[2]
  return i2682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2687 = data
  i2686.id = i2687[0]
  i2686.name = i2687[1]
  return i2686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2689 = data
  i2688.fixedDeltaTime = i2689[0]
  i2688.maximumDeltaTime = i2689[1]
  i2688.timeScale = i2689[2]
  i2688.maximumParticleTimestep = i2689[3]
  return i2688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2691 = data
  i2690.gravity = new pc.Vec3( i2691[0], i2691[1], i2691[2] )
  i2690.defaultSolverIterations = i2691[3]
  i2690.bounceThreshold = i2691[4]
  i2690.autoSyncTransforms = !!i2691[5]
  i2690.autoSimulation = !!i2691[6]
  var i2693 = i2691[7]
  var i2692 = []
  for(var i = 0; i < i2693.length; i += 1) {
    i2692.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2693[i + 0]) );
  }
  i2690.collisionMatrix = i2692
  return i2690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2697 = data
  i2696.enabled = !!i2697[0]
  i2696.layerId = i2697[1]
  i2696.otherLayerId = i2697[2]
  return i2696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2699 = data
  request.r(i2699[0], i2699[1], 0, i2698, 'material')
  i2698.gravity = new pc.Vec2( i2699[2], i2699[3] )
  i2698.positionIterations = i2699[4]
  i2698.velocityIterations = i2699[5]
  i2698.velocityThreshold = i2699[6]
  i2698.maxLinearCorrection = i2699[7]
  i2698.maxAngularCorrection = i2699[8]
  i2698.maxTranslationSpeed = i2699[9]
  i2698.maxRotationSpeed = i2699[10]
  i2698.baumgarteScale = i2699[11]
  i2698.baumgarteTOIScale = i2699[12]
  i2698.timeToSleep = i2699[13]
  i2698.linearSleepTolerance = i2699[14]
  i2698.angularSleepTolerance = i2699[15]
  i2698.defaultContactOffset = i2699[16]
  i2698.autoSimulation = !!i2699[17]
  i2698.queriesHitTriggers = !!i2699[18]
  i2698.queriesStartInColliders = !!i2699[19]
  i2698.callbacksOnDisable = !!i2699[20]
  i2698.reuseCollisionCallbacks = !!i2699[21]
  i2698.autoSyncTransforms = !!i2699[22]
  var i2701 = i2699[23]
  var i2700 = []
  for(var i = 0; i < i2701.length; i += 1) {
    i2700.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2701[i + 0]) );
  }
  i2698.collisionMatrix = i2700
  return i2698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2705 = data
  i2704.enabled = !!i2705[0]
  i2704.layerId = i2705[1]
  i2704.otherLayerId = i2705[2]
  return i2704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2707 = data
  var i2709 = i2707[0]
  var i2708 = []
  for(var i = 0; i < i2709.length; i += 1) {
    i2708.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2709[i + 0]) );
  }
  i2706.qualityLevels = i2708
  var i2711 = i2707[1]
  var i2710 = []
  for(var i = 0; i < i2711.length; i += 1) {
    i2710.push( i2711[i + 0] );
  }
  i2706.names = i2710
  i2706.shadows = i2707[2]
  i2706.anisotropicFiltering = i2707[3]
  i2706.antiAliasing = i2707[4]
  i2706.lodBias = i2707[5]
  i2706.shadowCascades = i2707[6]
  i2706.shadowDistance = i2707[7]
  i2706.shadowmaskMode = i2707[8]
  i2706.shadowProjection = i2707[9]
  i2706.shadowResolution = i2707[10]
  i2706.softParticles = !!i2707[11]
  i2706.softVegetation = !!i2707[12]
  i2706.activeColorSpace = i2707[13]
  i2706.desiredColorSpace = i2707[14]
  i2706.masterTextureLimit = i2707[15]
  i2706.maxQueuedFrames = i2707[16]
  i2706.particleRaycastBudget = i2707[17]
  i2706.pixelLightCount = i2707[18]
  i2706.realtimeReflectionProbes = !!i2707[19]
  i2706.shadowCascade2Split = i2707[20]
  i2706.shadowCascade4Split = new pc.Vec3( i2707[21], i2707[22], i2707[23] )
  i2706.streamingMipmapsActive = !!i2707[24]
  i2706.vSyncCount = i2707[25]
  i2706.asyncUploadBufferSize = i2707[26]
  i2706.asyncUploadTimeSlice = i2707[27]
  i2706.billboardsFaceCameraPosition = !!i2707[28]
  i2706.shadowNearPlaneOffset = i2707[29]
  i2706.streamingMipmapsMemoryBudget = i2707[30]
  i2706.maximumLODLevel = i2707[31]
  i2706.streamingMipmapsAddAllCameras = !!i2707[32]
  i2706.streamingMipmapsMaxLevelReduction = i2707[33]
  i2706.streamingMipmapsRenderersPerFrame = i2707[34]
  i2706.resolutionScalingFixedDPIFactor = i2707[35]
  i2706.streamingMipmapsMaxFileIORequests = i2707[36]
  i2706.currentQualityLevel = i2707[37]
  return i2706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2717 = data
  i2716.mode = i2717[0]
  i2716.parameter = i2717[1]
  i2716.threshold = i2717[2]
  return i2716
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2718 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2719 = data
  i2718.xPlacement = i2719[0]
  i2718.yPlacement = i2719[1]
  i2718.xAdvance = i2719[2]
  i2718.yAdvance = i2719[3]
  return i2718
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

Deserializers.buildID = "5c08aa82-6739-4a82-90c1-70ed2687ea73";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

