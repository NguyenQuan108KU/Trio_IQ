var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1956 = root || request.c( 'UnityEngine.JointSpring' )
  var i1957 = data
  i1956.spring = i1957[0]
  i1956.damper = i1957[1]
  i1956.targetPosition = i1957[2]
  return i1956
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1958 = root || request.c( 'UnityEngine.JointMotor' )
  var i1959 = data
  i1958.m_TargetVelocity = i1959[0]
  i1958.m_Force = i1959[1]
  i1958.m_FreeSpin = i1959[2]
  return i1958
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1960 = root || request.c( 'UnityEngine.JointLimits' )
  var i1961 = data
  i1960.m_Min = i1961[0]
  i1960.m_Max = i1961[1]
  i1960.m_Bounciness = i1961[2]
  i1960.m_BounceMinVelocity = i1961[3]
  i1960.m_ContactDistance = i1961[4]
  i1960.minBounce = i1961[5]
  i1960.maxBounce = i1961[6]
  return i1960
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1962 = root || request.c( 'UnityEngine.JointDrive' )
  var i1963 = data
  i1962.m_PositionSpring = i1963[0]
  i1962.m_PositionDamper = i1963[1]
  i1962.m_MaximumForce = i1963[2]
  i1962.m_UseAcceleration = i1963[3]
  return i1962
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1964 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1965 = data
  i1964.m_Spring = i1965[0]
  i1964.m_Damper = i1965[1]
  return i1964
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1966 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1967 = data
  i1966.m_Limit = i1967[0]
  i1966.m_Bounciness = i1967[1]
  i1966.m_ContactDistance = i1967[2]
  return i1966
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1968 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1969 = data
  i1968.m_ExtremumSlip = i1969[0]
  i1968.m_ExtremumValue = i1969[1]
  i1968.m_AsymptoteSlip = i1969[2]
  i1968.m_AsymptoteValue = i1969[3]
  i1968.m_Stiffness = i1969[4]
  return i1968
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1970 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1971 = data
  i1970.m_LowerAngle = i1971[0]
  i1970.m_UpperAngle = i1971[1]
  return i1970
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1972 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1973 = data
  i1972.m_MotorSpeed = i1973[0]
  i1972.m_MaximumMotorTorque = i1973[1]
  return i1972
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1974 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1975 = data
  i1974.m_DampingRatio = i1975[0]
  i1974.m_Frequency = i1975[1]
  i1974.m_Angle = i1975[2]
  return i1974
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1976 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1977 = data
  i1976.m_LowerTranslation = i1977[0]
  i1976.m_UpperTranslation = i1977[1]
  return i1976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1979 = data
  i1978.position = new pc.Vec3( i1979[0], i1979[1], i1979[2] )
  i1978.scale = new pc.Vec3( i1979[3], i1979[4], i1979[5] )
  i1978.rotation = new pc.Quat(i1979[6], i1979[7], i1979[8], i1979[9])
  return i1978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i1980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i1981 = data
  i1980.color = new pc.Color(i1981[0], i1981[1], i1981[2], i1981[3])
  request.r(i1981[4], i1981[5], 0, i1980, 'sprite')
  i1980.flipX = !!i1981[6]
  i1980.flipY = !!i1981[7]
  i1980.drawMode = i1981[8]
  i1980.size = new pc.Vec2( i1981[9], i1981[10] )
  i1980.tileMode = i1981[11]
  i1980.adaptiveModeThreshold = i1981[12]
  i1980.maskInteraction = i1981[13]
  i1980.spriteSortPoint = i1981[14]
  i1980.enabled = !!i1981[15]
  request.r(i1981[16], i1981[17], 0, i1980, 'sharedMaterial')
  var i1983 = i1981[18]
  var i1982 = []
  for(var i = 0; i < i1983.length; i += 2) {
  request.r(i1983[i + 0], i1983[i + 1], 2, i1982, '')
  }
  i1980.sharedMaterials = i1982
  i1980.receiveShadows = !!i1981[19]
  i1980.shadowCastingMode = i1981[20]
  i1980.sortingLayerID = i1981[21]
  i1980.sortingOrder = i1981[22]
  i1980.lightmapIndex = i1981[23]
  i1980.lightmapSceneIndex = i1981[24]
  i1980.lightmapScaleOffset = new pc.Vec4( i1981[25], i1981[26], i1981[27], i1981[28] )
  i1980.lightProbeUsage = i1981[29]
  i1980.reflectionProbeUsage = i1981[30]
  return i1980
}

Deserializers["DragItem"] = function (request, data, root) {
  var i1986 = root || request.c( 'DragItem' )
  var i1987 = data
  i1986.focusOutlineSize = i1987[0]
  i1986.outlineTweenTime = i1987[1]
  i1986.itemType = i1987[2]
  i1986.lockItem = !!i1987[3]
  return i1986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i1988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i1989 = data
  i1988.usedByComposite = !!i1989[0]
  i1988.autoTiling = !!i1989[1]
  i1988.size = new pc.Vec2( i1989[2], i1989[3] )
  i1988.edgeRadius = i1989[4]
  i1988.enabled = !!i1989[5]
  i1988.isTrigger = !!i1989[6]
  i1988.usedByEffector = !!i1989[7]
  i1988.density = i1989[8]
  i1988.offset = new pc.Vec2( i1989[9], i1989[10] )
  request.r(i1989[11], i1989[12], 0, i1988, 'material')
  return i1988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i1990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i1991 = data
  i1990.bodyType = i1991[0]
  request.r(i1991[1], i1991[2], 0, i1990, 'material')
  i1990.simulated = !!i1991[3]
  i1990.useAutoMass = !!i1991[4]
  i1990.mass = i1991[5]
  i1990.drag = i1991[6]
  i1990.angularDrag = i1991[7]
  i1990.gravityScale = i1991[8]
  i1990.collisionDetectionMode = i1991[9]
  i1990.sleepMode = i1991[10]
  i1990.constraints = i1991[11]
  return i1990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1993 = data
  i1992.name = i1993[0]
  i1992.tagId = i1993[1]
  i1992.enabled = !!i1993[2]
  i1992.isStatic = !!i1993[3]
  i1992.layer = i1993[4]
  return i1992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1994 = root || new pc.UnityMaterial()
  var i1995 = data
  i1994.name = i1995[0]
  request.r(i1995[1], i1995[2], 0, i1994, 'shader')
  i1994.renderQueue = i1995[3]
  i1994.enableInstancing = !!i1995[4]
  var i1997 = i1995[5]
  var i1996 = []
  for(var i = 0; i < i1997.length; i += 1) {
    i1996.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1997[i + 0]) );
  }
  i1994.floatParameters = i1996
  var i1999 = i1995[6]
  var i1998 = []
  for(var i = 0; i < i1999.length; i += 1) {
    i1998.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1999[i + 0]) );
  }
  i1994.colorParameters = i1998
  var i2001 = i1995[7]
  var i2000 = []
  for(var i = 0; i < i2001.length; i += 1) {
    i2000.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2001[i + 0]) );
  }
  i1994.vectorParameters = i2000
  var i2003 = i1995[8]
  var i2002 = []
  for(var i = 0; i < i2003.length; i += 1) {
    i2002.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2003[i + 0]) );
  }
  i1994.textureParameters = i2002
  var i2005 = i1995[9]
  var i2004 = []
  for(var i = 0; i < i2005.length; i += 1) {
    i2004.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2005[i + 0]) );
  }
  i1994.materialFlags = i2004
  return i1994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2009 = data
  i2008.name = i2009[0]
  i2008.value = i2009[1]
  return i2008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2013 = data
  i2012.name = i2013[0]
  i2012.value = new pc.Color(i2013[1], i2013[2], i2013[3], i2013[4])
  return i2012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2017 = data
  i2016.name = i2017[0]
  i2016.value = new pc.Vec4( i2017[1], i2017[2], i2017[3], i2017[4] )
  return i2016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2021 = data
  i2020.name = i2021[0]
  request.r(i2021[1], i2021[2], 0, i2020, 'value')
  return i2020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2025 = data
  i2024.name = i2025[0]
  i2024.enabled = !!i2025[1]
  return i2024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2027 = data
  i2026.name = i2027[0]
  i2026.width = i2027[1]
  i2026.height = i2027[2]
  i2026.mipmapCount = i2027[3]
  i2026.anisoLevel = i2027[4]
  i2026.filterMode = i2027[5]
  i2026.hdr = !!i2027[6]
  i2026.format = i2027[7]
  i2026.wrapMode = i2027[8]
  i2026.alphaIsTransparency = !!i2027[9]
  i2026.alphaSource = i2027[10]
  i2026.graphicsFormat = i2027[11]
  i2026.sRGBTexture = !!i2027[12]
  i2026.desiredColorSpace = i2027[13]
  i2026.wrapU = i2027[14]
  i2026.wrapV = i2027[15]
  return i2026
}

Deserializers["Disk"] = function (request, data, root) {
  var i2028 = root || request.c( 'Disk' )
  var i2029 = data
  i2028.requiredCount = i2029[0]
  i2028.moveDistance = i2029[1]
  i2028.moveTime = i2029[2]
  return i2028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2031 = data
  request.r(i2031[0], i2031[1], 0, i2030, 'animatorController')
  request.r(i2031[2], i2031[3], 0, i2030, 'avatar')
  i2030.updateMode = i2031[4]
  i2030.hasTransformHierarchy = !!i2031[5]
  i2030.applyRootMotion = !!i2031[6]
  var i2033 = i2031[7]
  var i2032 = []
  for(var i = 0; i < i2033.length; i += 2) {
  request.r(i2033[i + 0], i2033[i + 1], 2, i2032, '')
  }
  i2030.humanBones = i2032
  i2030.enabled = !!i2031[8]
  return i2030
}

Deserializers["Tray"] = function (request, data, root) {
  var i2036 = root || request.c( 'Tray' )
  var i2037 = data
  i2036.spacing = i2037[0]
  i2036.moveTime = i2037[1]
  request.r(i2037[2], i2037[3], 0, i2036, 'diskPrefab')
  request.r(i2037[4], i2037[5], 0, i2036, 'diskTransform')
  i2036.shrinkTime = i2037[6]
  i2036.itemToDiskTime = i2037[7]
  i2036.attachDelay = i2037[8]
  i2036.followSmooth = i2037[9]
  i2036.isCompleted = !!i2037[10]
  var i2039 = i2037[11]
  var i2038 = []
  for(var i = 0; i < i2039.length; i += 2) {
  request.r(i2039[i + 0], i2039[i + 1], 2, i2038, '')
  }
  i2036.slots = i2038
  request.r(i2037[12], i2037[13], 0, i2036, 'fireObject')
  i2036.diskItemScale = new pc.Vec3( i2037[14], i2037[15], i2037[16] )
  return i2036
}

Deserializers["Slot"] = function (request, data, root) {
  var i2042 = root || request.c( 'Slot' )
  var i2043 = data
  request.r(i2043[0], i2043[1], 0, i2042, 'anchor')
  request.r(i2043[2], i2043[3], 0, i2042, 'currentItem')
  return i2042
}

Deserializers["HandHint"] = function (request, data, root) {
  var i2044 = root || request.c( 'HandHint' )
  var i2045 = data
  request.r(i2045[0], i2045[1], 0, i2044, 'previewRenderer')
  return i2044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i2046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i2047 = data
  i2046.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i2047[0], i2046.main)
  i2046.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i2047[1], i2046.colorBySpeed)
  i2046.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i2047[2], i2046.colorOverLifetime)
  i2046.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i2047[3], i2046.emission)
  i2046.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i2047[4], i2046.rotationBySpeed)
  i2046.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i2047[5], i2046.rotationOverLifetime)
  i2046.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i2047[6], i2046.shape)
  i2046.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i2047[7], i2046.sizeBySpeed)
  i2046.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i2047[8], i2046.sizeOverLifetime)
  i2046.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i2047[9], i2046.textureSheetAnimation)
  i2046.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i2047[10], i2046.velocityOverLifetime)
  i2046.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i2047[11], i2046.noise)
  i2046.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i2047[12], i2046.inheritVelocity)
  i2046.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i2047[13], i2046.forceOverLifetime)
  i2046.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i2047[14], i2046.limitVelocityOverLifetime)
  i2046.useAutoRandomSeed = !!i2047[15]
  i2046.randomSeed = i2047[16]
  return i2046
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i2048 = root || new pc.ParticleSystemMain()
  var i2049 = data
  i2048.duration = i2049[0]
  i2048.loop = !!i2049[1]
  i2048.prewarm = !!i2049[2]
  i2048.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2049[3], i2048.startDelay)
  i2048.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2049[4], i2048.startLifetime)
  i2048.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2049[5], i2048.startSpeed)
  i2048.startSize3D = !!i2049[6]
  i2048.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2049[7], i2048.startSizeX)
  i2048.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2049[8], i2048.startSizeY)
  i2048.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2049[9], i2048.startSizeZ)
  i2048.startRotation3D = !!i2049[10]
  i2048.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2049[11], i2048.startRotationX)
  i2048.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2049[12], i2048.startRotationY)
  i2048.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2049[13], i2048.startRotationZ)
  i2048.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2049[14], i2048.startColor)
  i2048.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2049[15], i2048.gravityModifier)
  i2048.simulationSpace = i2049[16]
  request.r(i2049[17], i2049[18], 0, i2048, 'customSimulationSpace')
  i2048.simulationSpeed = i2049[19]
  i2048.useUnscaledTime = !!i2049[20]
  i2048.scalingMode = i2049[21]
  i2048.playOnAwake = !!i2049[22]
  i2048.maxParticles = i2049[23]
  i2048.emitterVelocityMode = i2049[24]
  i2048.stopAction = i2049[25]
  return i2048
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i2050 = root || new pc.MinMaxCurve()
  var i2051 = data
  i2050.mode = i2051[0]
  i2050.curveMin = new pc.AnimationCurve( { keys_flow: i2051[1] } )
  i2050.curveMax = new pc.AnimationCurve( { keys_flow: i2051[2] } )
  i2050.curveMultiplier = i2051[3]
  i2050.constantMin = i2051[4]
  i2050.constantMax = i2051[5]
  return i2050
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i2052 = root || new pc.MinMaxGradient()
  var i2053 = data
  i2052.mode = i2053[0]
  i2052.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2053[1], i2052.gradientMin)
  i2052.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2053[2], i2052.gradientMax)
  i2052.colorMin = new pc.Color(i2053[3], i2053[4], i2053[5], i2053[6])
  i2052.colorMax = new pc.Color(i2053[7], i2053[8], i2053[9], i2053[10])
  return i2052
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i2054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i2055 = data
  i2054.mode = i2055[0]
  var i2057 = i2055[1]
  var i2056 = []
  for(var i = 0; i < i2057.length; i += 1) {
    i2056.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i2057[i + 0]) );
  }
  i2054.colorKeys = i2056
  var i2059 = i2055[2]
  var i2058 = []
  for(var i = 0; i < i2059.length; i += 1) {
    i2058.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i2059[i + 0]) );
  }
  i2054.alphaKeys = i2058
  return i2054
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i2060 = root || new pc.ParticleSystemColorBySpeed()
  var i2061 = data
  i2060.enabled = !!i2061[0]
  i2060.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2061[1], i2060.color)
  i2060.range = new pc.Vec2( i2061[2], i2061[3] )
  return i2060
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i2064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i2065 = data
  i2064.color = new pc.Color(i2065[0], i2065[1], i2065[2], i2065[3])
  i2064.time = i2065[4]
  return i2064
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i2068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i2069 = data
  i2068.alpha = i2069[0]
  i2068.time = i2069[1]
  return i2068
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i2070 = root || new pc.ParticleSystemColorOverLifetime()
  var i2071 = data
  i2070.enabled = !!i2071[0]
  i2070.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2071[1], i2070.color)
  return i2070
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i2072 = root || new pc.ParticleSystemEmitter()
  var i2073 = data
  i2072.enabled = !!i2073[0]
  i2072.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2073[1], i2072.rateOverTime)
  i2072.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2073[2], i2072.rateOverDistance)
  var i2075 = i2073[3]
  var i2074 = []
  for(var i = 0; i < i2075.length; i += 1) {
    i2074.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i2075[i + 0]) );
  }
  i2072.bursts = i2074
  return i2072
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i2078 = root || new pc.ParticleSystemBurst()
  var i2079 = data
  i2078.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2079[0], i2078.count)
  i2078.cycleCount = i2079[1]
  i2078.minCount = i2079[2]
  i2078.maxCount = i2079[3]
  i2078.repeatInterval = i2079[4]
  i2078.time = i2079[5]
  return i2078
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i2080 = root || new pc.ParticleSystemRotationBySpeed()
  var i2081 = data
  i2080.enabled = !!i2081[0]
  i2080.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2081[1], i2080.x)
  i2080.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2081[2], i2080.y)
  i2080.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2081[3], i2080.z)
  i2080.separateAxes = !!i2081[4]
  i2080.range = new pc.Vec2( i2081[5], i2081[6] )
  return i2080
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i2082 = root || new pc.ParticleSystemRotationOverLifetime()
  var i2083 = data
  i2082.enabled = !!i2083[0]
  i2082.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2083[1], i2082.x)
  i2082.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2083[2], i2082.y)
  i2082.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2083[3], i2082.z)
  i2082.separateAxes = !!i2083[4]
  return i2082
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i2084 = root || new pc.ParticleSystemShape()
  var i2085 = data
  i2084.enabled = !!i2085[0]
  i2084.shapeType = i2085[1]
  i2084.randomDirectionAmount = i2085[2]
  i2084.sphericalDirectionAmount = i2085[3]
  i2084.randomPositionAmount = i2085[4]
  i2084.alignToDirection = !!i2085[5]
  i2084.radius = i2085[6]
  i2084.radiusMode = i2085[7]
  i2084.radiusSpread = i2085[8]
  i2084.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2085[9], i2084.radiusSpeed)
  i2084.radiusThickness = i2085[10]
  i2084.angle = i2085[11]
  i2084.length = i2085[12]
  i2084.boxThickness = new pc.Vec3( i2085[13], i2085[14], i2085[15] )
  i2084.meshShapeType = i2085[16]
  request.r(i2085[17], i2085[18], 0, i2084, 'mesh')
  request.r(i2085[19], i2085[20], 0, i2084, 'meshRenderer')
  request.r(i2085[21], i2085[22], 0, i2084, 'skinnedMeshRenderer')
  i2084.useMeshMaterialIndex = !!i2085[23]
  i2084.meshMaterialIndex = i2085[24]
  i2084.useMeshColors = !!i2085[25]
  i2084.normalOffset = i2085[26]
  i2084.arc = i2085[27]
  i2084.arcMode = i2085[28]
  i2084.arcSpread = i2085[29]
  i2084.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2085[30], i2084.arcSpeed)
  i2084.donutRadius = i2085[31]
  i2084.position = new pc.Vec3( i2085[32], i2085[33], i2085[34] )
  i2084.rotation = new pc.Vec3( i2085[35], i2085[36], i2085[37] )
  i2084.scale = new pc.Vec3( i2085[38], i2085[39], i2085[40] )
  return i2084
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i2086 = root || new pc.ParticleSystemSizeBySpeed()
  var i2087 = data
  i2086.enabled = !!i2087[0]
  i2086.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2087[1], i2086.x)
  i2086.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2087[2], i2086.y)
  i2086.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2087[3], i2086.z)
  i2086.separateAxes = !!i2087[4]
  i2086.range = new pc.Vec2( i2087[5], i2087[6] )
  return i2086
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i2088 = root || new pc.ParticleSystemSizeOverLifetime()
  var i2089 = data
  i2088.enabled = !!i2089[0]
  i2088.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2089[1], i2088.x)
  i2088.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2089[2], i2088.y)
  i2088.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2089[3], i2088.z)
  i2088.separateAxes = !!i2089[4]
  return i2088
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i2090 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i2091 = data
  i2090.enabled = !!i2091[0]
  i2090.mode = i2091[1]
  i2090.animation = i2091[2]
  i2090.numTilesX = i2091[3]
  i2090.numTilesY = i2091[4]
  i2090.useRandomRow = !!i2091[5]
  i2090.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2091[6], i2090.frameOverTime)
  i2090.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2091[7], i2090.startFrame)
  i2090.cycleCount = i2091[8]
  i2090.rowIndex = i2091[9]
  i2090.flipU = i2091[10]
  i2090.flipV = i2091[11]
  i2090.spriteCount = i2091[12]
  var i2093 = i2091[13]
  var i2092 = []
  for(var i = 0; i < i2093.length; i += 2) {
  request.r(i2093[i + 0], i2093[i + 1], 2, i2092, '')
  }
  i2090.sprites = i2092
  return i2090
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i2096 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i2097 = data
  i2096.enabled = !!i2097[0]
  i2096.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2097[1], i2096.x)
  i2096.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2097[2], i2096.y)
  i2096.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2097[3], i2096.z)
  i2096.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2097[4], i2096.radial)
  i2096.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2097[5], i2096.speedModifier)
  i2096.space = i2097[6]
  i2096.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2097[7], i2096.orbitalX)
  i2096.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2097[8], i2096.orbitalY)
  i2096.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2097[9], i2096.orbitalZ)
  i2096.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2097[10], i2096.orbitalOffsetX)
  i2096.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2097[11], i2096.orbitalOffsetY)
  i2096.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2097[12], i2096.orbitalOffsetZ)
  return i2096
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2098 = root || new pc.ParticleSystemNoise()
  var i2099 = data
  i2098.enabled = !!i2099[0]
  i2098.separateAxes = !!i2099[1]
  i2098.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2099[2], i2098.strengthX)
  i2098.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2099[3], i2098.strengthY)
  i2098.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2099[4], i2098.strengthZ)
  i2098.frequency = i2099[5]
  i2098.damping = !!i2099[6]
  i2098.octaveCount = i2099[7]
  i2098.octaveMultiplier = i2099[8]
  i2098.octaveScale = i2099[9]
  i2098.quality = i2099[10]
  i2098.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2099[11], i2098.scrollSpeed)
  i2098.scrollSpeedMultiplier = i2099[12]
  i2098.remapEnabled = !!i2099[13]
  i2098.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2099[14], i2098.remapX)
  i2098.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2099[15], i2098.remapY)
  i2098.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2099[16], i2098.remapZ)
  i2098.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2099[17], i2098.positionAmount)
  i2098.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2099[18], i2098.rotationAmount)
  i2098.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2099[19], i2098.sizeAmount)
  return i2098
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2100 = root || new pc.ParticleSystemInheritVelocity()
  var i2101 = data
  i2100.enabled = !!i2101[0]
  i2100.mode = i2101[1]
  i2100.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2101[2], i2100.curve)
  return i2100
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2102 = root || new pc.ParticleSystemForceOverLifetime()
  var i2103 = data
  i2102.enabled = !!i2103[0]
  i2102.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2103[1], i2102.x)
  i2102.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2103[2], i2102.y)
  i2102.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2103[3], i2102.z)
  i2102.space = i2103[4]
  i2102.randomized = !!i2103[5]
  return i2102
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2104 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2105 = data
  i2104.enabled = !!i2105[0]
  i2104.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2105[1], i2104.limit)
  i2104.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2105[2], i2104.limitX)
  i2104.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2105[3], i2104.limitY)
  i2104.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2105[4], i2104.limitZ)
  i2104.dampen = i2105[5]
  i2104.separateAxes = !!i2105[6]
  i2104.space = i2105[7]
  i2104.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2105[8], i2104.drag)
  i2104.multiplyDragByParticleSize = !!i2105[9]
  i2104.multiplyDragByParticleVelocity = !!i2105[10]
  return i2104
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2107 = data
  request.r(i2107[0], i2107[1], 0, i2106, 'mesh')
  i2106.meshCount = i2107[2]
  i2106.activeVertexStreamsCount = i2107[3]
  i2106.alignment = i2107[4]
  i2106.renderMode = i2107[5]
  i2106.sortMode = i2107[6]
  i2106.lengthScale = i2107[7]
  i2106.velocityScale = i2107[8]
  i2106.cameraVelocityScale = i2107[9]
  i2106.normalDirection = i2107[10]
  i2106.sortingFudge = i2107[11]
  i2106.minParticleSize = i2107[12]
  i2106.maxParticleSize = i2107[13]
  i2106.pivot = new pc.Vec3( i2107[14], i2107[15], i2107[16] )
  request.r(i2107[17], i2107[18], 0, i2106, 'trailMaterial')
  i2106.applyActiveColorSpace = !!i2107[19]
  i2106.enabled = !!i2107[20]
  request.r(i2107[21], i2107[22], 0, i2106, 'sharedMaterial')
  var i2109 = i2107[23]
  var i2108 = []
  for(var i = 0; i < i2109.length; i += 2) {
  request.r(i2109[i + 0], i2109[i + 1], 2, i2108, '')
  }
  i2106.sharedMaterials = i2108
  i2106.receiveShadows = !!i2107[24]
  i2106.shadowCastingMode = i2107[25]
  i2106.sortingLayerID = i2107[26]
  i2106.sortingOrder = i2107[27]
  i2106.lightmapIndex = i2107[28]
  i2106.lightmapSceneIndex = i2107[29]
  i2106.lightmapScaleOffset = new pc.Vec4( i2107[30], i2107[31], i2107[32], i2107[33] )
  i2106.lightProbeUsage = i2107[34]
  i2106.reflectionProbeUsage = i2107[35]
  return i2106
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2111 = data
  i2110.name = i2111[0]
  i2110.index = i2111[1]
  i2110.startup = !!i2111[2]
  return i2110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2113 = data
  i2112.aspect = i2113[0]
  i2112.orthographic = !!i2113[1]
  i2112.orthographicSize = i2113[2]
  i2112.backgroundColor = new pc.Color(i2113[3], i2113[4], i2113[5], i2113[6])
  i2112.nearClipPlane = i2113[7]
  i2112.farClipPlane = i2113[8]
  i2112.fieldOfView = i2113[9]
  i2112.depth = i2113[10]
  i2112.clearFlags = i2113[11]
  i2112.cullingMask = i2113[12]
  i2112.rect = i2113[13]
  request.r(i2113[14], i2113[15], 0, i2112, 'targetTexture')
  i2112.usePhysicalProperties = !!i2113[16]
  i2112.focalLength = i2113[17]
  i2112.sensorSize = new pc.Vec2( i2113[18], i2113[19] )
  i2112.lensShift = new pc.Vec2( i2113[20], i2113[21] )
  i2112.gateFit = i2113[22]
  i2112.commandBufferCount = i2113[23]
  i2112.cameraType = i2113[24]
  i2112.enabled = !!i2113[25]
  return i2112
}

Deserializers["CheckSize"] = function (request, data, root) {
  var i2114 = root || request.c( 'CheckSize' )
  var i2115 = data
  i2114.size16by9 = i2115[0]
  i2114.size18by9 = i2115[1]
  i2114.sizeLong = i2115[2]
  request.r(i2115[3], i2115[4], 0, i2114, 'diskTransform')
  i2114.diskPos16by9 = new pc.Vec3( i2115[5], i2115[6], i2115[7] )
  i2114.diskPosLong = new pc.Vec3( i2115[8], i2115[9], i2115[10] )
  request.r(i2115[11], i2115[12], 0, i2114, 'trayManager')
  request.r(i2115[13], i2115[14], 0, i2114, 'button_doc')
  request.r(i2115[15], i2115[16], 0, i2114, 'target')
  request.r(i2115[17], i2115[18], 0, i2114, 'timer')
  request.r(i2115[19], i2115[20], 0, i2114, 'logoGame')
  request.r(i2115[21], i2115[22], 0, i2114, 'buttonGame')
  return i2114
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2116 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2117 = data
  request.r(i2117[0], i2117[1], 0, i2116, 'm_FirstSelected')
  i2116.m_sendNavigationEvents = !!i2117[2]
  i2116.m_DragThreshold = i2117[3]
  return i2116
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2118 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2119 = data
  i2118.m_HorizontalAxis = i2119[0]
  i2118.m_VerticalAxis = i2119[1]
  i2118.m_SubmitButton = i2119[2]
  i2118.m_CancelButton = i2119[3]
  i2118.m_InputActionsPerSecond = i2119[4]
  i2118.m_RepeatDelay = i2119[5]
  i2118.m_ForceModuleActive = !!i2119[6]
  i2118.m_SendPointerHoverToParent = !!i2119[7]
  return i2118
}

Deserializers["TrayManager"] = function (request, data, root) {
  var i2120 = root || request.c( 'TrayManager' )
  var i2121 = data
  i2120.spacing = i2121[0]
  i2120.visibleCount = i2121[1]
  i2120.moveTime = i2121[2]
  var i2123 = i2121[3]
  var i2122 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i2123.length; i += 2) {
  request.r(i2123[i + 0], i2123[i + 1], 1, i2122, '')
  }
  i2120.listTray = i2122
  i2120.curve = new pc.AnimationCurve( { keys_flow: i2121[4] } )
  i2120.canCountIdle = !!i2121[5]
  i2120.spawnHeightMultiplier = i2121[6]
  i2120.isFirstTutorial = !!i2121[7]
  i2120.tutorialDelay = i2121[8]
  i2120.idleTimer = i2121[9]
  i2120.tutorialEnabled = !!i2121[10]
  request.r(i2121[11], i2121[12], 0, i2120, 'manualTray')
  request.r(i2121[13], i2121[14], 0, i2120, 'manualItem')
  i2120.justEndedInteract = !!i2121[15]
  i2120.step = i2121[16]
  return i2120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i2126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i2127 = data
  i2126.frontSortingLayerID = i2127[0]
  i2126.frontSortingOrder = i2127[1]
  i2126.backSortingLayerID = i2127[2]
  i2126.backSortingOrder = i2127[3]
  i2126.alphaCutoff = i2127[4]
  request.r(i2127[5], i2127[6], 0, i2126, 'sprite')
  i2126.tileMode = i2127[7]
  i2126.isCustomRangeActive = !!i2127[8]
  i2126.spriteSortPoint = i2127[9]
  i2126.enabled = !!i2127[10]
  request.r(i2127[11], i2127[12], 0, i2126, 'sharedMaterial')
  var i2129 = i2127[13]
  var i2128 = []
  for(var i = 0; i < i2129.length; i += 2) {
  request.r(i2129[i + 0], i2129[i + 1], 2, i2128, '')
  }
  i2126.sharedMaterials = i2128
  i2126.receiveShadows = !!i2127[14]
  i2126.shadowCastingMode = i2127[15]
  i2126.sortingLayerID = i2127[16]
  i2126.sortingOrder = i2127[17]
  i2126.lightmapIndex = i2127[18]
  i2126.lightmapSceneIndex = i2127[19]
  i2126.lightmapScaleOffset = new pc.Vec4( i2127[20], i2127[21], i2127[22], i2127[23] )
  i2126.lightProbeUsage = i2127[24]
  i2126.reflectionProbeUsage = i2127[25]
  return i2126
}

Deserializers["ConveyorBelt"] = function (request, data, root) {
  var i2130 = root || request.c( 'ConveyorBelt' )
  var i2131 = data
  i2130.speed = i2131[0]
  i2130.spacing = i2131[1]
  i2130.leftLimit = i2131[2]
  i2130.removeFirstCount = i2131[3]
  request.r(i2131[4], i2131[5], 0, i2130, 'tutorial')
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
  request.r(i2143[11], i2143[12], 0, i2142, 'm_Material')
  i2142.m_Maskable = !!i2143[13]
  i2142.m_Color = new pc.Color(i2143[14], i2143[15], i2143[16], i2143[17])
  i2142.m_RaycastTarget = !!i2143[18]
  i2142.m_RaycastPadding = new pc.Vec4( i2143[19], i2143[20], i2143[21], i2143[22] )
  return i2142
}

Deserializers["EndCart_Win"] = function (request, data, root) {
  var i2144 = root || request.c( 'EndCart_Win' )
  var i2145 = data
  request.r(i2145[0], i2145[1], 0, i2144, 'confettiLeft')
  request.r(i2145[2], i2145[3], 0, i2144, 'confettiRight')
  request.r(i2145[4], i2145[5], 0, i2144, 'winText')
  request.r(i2145[6], i2145[7], 0, i2144, 'chest')
  request.r(i2145[8], i2145[9], 0, i2144, 'button')
  i2144.textDelay = i2145[10]
  i2144.chestDelay = i2145[11]
  return i2144
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i2146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i2147 = data
  request.r(i2147[0], i2147[1], 0, i2146, 'additionalVertexStreams')
  i2146.enabled = !!i2147[2]
  request.r(i2147[3], i2147[4], 0, i2146, 'sharedMaterial')
  var i2149 = i2147[5]
  var i2148 = []
  for(var i = 0; i < i2149.length; i += 2) {
  request.r(i2149[i + 0], i2149[i + 1], 2, i2148, '')
  }
  i2146.sharedMaterials = i2148
  i2146.receiveShadows = !!i2147[6]
  i2146.shadowCastingMode = i2147[7]
  i2146.sortingLayerID = i2147[8]
  i2146.sortingOrder = i2147[9]
  i2146.lightmapIndex = i2147[10]
  i2146.lightmapSceneIndex = i2147[11]
  i2146.lightmapScaleOffset = new pc.Vec4( i2147[12], i2147[13], i2147[14], i2147[15] )
  i2146.lightProbeUsage = i2147[16]
  i2146.reflectionProbeUsage = i2147[17]
  return i2146
}

Deserializers["Spine.Unity.SkeletonAnimation"] = function (request, data, root) {
  var i2150 = root || request.c( 'Spine.Unity.SkeletonAnimation' )
  var i2151 = data
  i2150.loop = !!i2151[0]
  i2150.timeScale = i2151[1]
  request.r(i2151[2], i2151[3], 0, i2150, 'skeletonDataAsset')
  i2150.initialSkinName = i2151[4]
  i2150.fixPrefabOverrideViaMeshFilter = i2151[5]
  i2150.initialFlipX = !!i2151[6]
  i2150.initialFlipY = !!i2151[7]
  i2150.updateWhenInvisible = i2151[8]
  i2150.zSpacing = i2151[9]
  i2150.useClipping = !!i2151[10]
  i2150.immutableTriangles = !!i2151[11]
  i2150.pmaVertexColors = !!i2151[12]
  i2150.clearStateOnDisable = !!i2151[13]
  i2150.tintBlack = !!i2151[14]
  i2150.singleSubmesh = !!i2151[15]
  i2150.fixDrawOrder = !!i2151[16]
  i2150.addNormals = !!i2151[17]
  i2150.calculateTangents = !!i2151[18]
  i2150.maskInteraction = i2151[19]
  i2150.maskMaterials = request.d('Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials', i2151[20], i2150.maskMaterials)
  i2150.disableRenderingOnOverride = !!i2151[21]
  i2150.updateTiming = i2151[22]
  i2150.unscaledTime = !!i2151[23]
  i2150._animationName = i2151[24]
  var i2153 = i2151[25]
  var i2152 = []
  for(var i = 0; i < i2153.length; i += 1) {
    i2152.push( i2153[i + 0] );
  }
  i2150.separatorSlotNames = i2152
  i2150.physicsPositionInheritanceFactor = new pc.Vec2( i2151[26], i2151[27] )
  i2150.physicsRotationInheritanceFactor = i2151[28]
  request.r(i2151[29], i2151[30], 0, i2150, 'physicsMovementRelativeTo')
  return i2150
}

Deserializers["Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials"] = function (request, data, root) {
  var i2154 = root || request.c( 'Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials' )
  var i2155 = data
  var i2157 = i2155[0]
  var i2156 = []
  for(var i = 0; i < i2157.length; i += 2) {
  request.r(i2157[i + 0], i2157[i + 1], 2, i2156, '')
  }
  i2154.materialsMaskDisabled = i2156
  var i2159 = i2155[1]
  var i2158 = []
  for(var i = 0; i < i2159.length; i += 2) {
  request.r(i2159[i + 0], i2159[i + 1], 2, i2158, '')
  }
  i2154.materialsInsideMask = i2158
  var i2161 = i2155[2]
  var i2160 = []
  for(var i = 0; i < i2161.length; i += 2) {
  request.r(i2161[i + 0], i2161[i + 1], 2, i2160, '')
  }
  i2154.materialsOutsideMask = i2160
  return i2154
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i2164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i2165 = data
  request.r(i2165[0], i2165[1], 0, i2164, 'sharedMesh')
  return i2164
}

Deserializers["Button"] = function (request, data, root) {
  var i2166 = root || request.c( 'Button' )
  var i2167 = data
  return i2166
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2168 = root || request.c( 'UnityEngine.UI.Button' )
  var i2169 = data
  i2168.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2169[0], i2168.m_OnClick)
  i2168.m_Navigation = request.d('UnityEngine.UI.Navigation', i2169[1], i2168.m_Navigation)
  i2168.m_Transition = i2169[2]
  i2168.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2169[3], i2168.m_Colors)
  i2168.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2169[4], i2168.m_SpriteState)
  i2168.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2169[5], i2168.m_AnimationTriggers)
  i2168.m_Interactable = !!i2169[6]
  request.r(i2169[7], i2169[8], 0, i2168, 'm_TargetGraphic')
  return i2168
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2170 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2171 = data
  i2170.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2171[0], i2170.m_PersistentCalls)
  return i2170
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2172 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2173 = data
  var i2175 = i2173[0]
  var i2174 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2175.length; i += 1) {
    i2174.add(request.d('UnityEngine.Events.PersistentCall', i2175[i + 0]));
  }
  i2172.m_Calls = i2174
  return i2172
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2178 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2179 = data
  request.r(i2179[0], i2179[1], 0, i2178, 'm_Target')
  i2178.m_TargetAssemblyTypeName = i2179[2]
  i2178.m_MethodName = i2179[3]
  i2178.m_Mode = i2179[4]
  i2178.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2179[5], i2178.m_Arguments)
  i2178.m_CallState = i2179[6]
  return i2178
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2180 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2181 = data
  request.r(i2181[0], i2181[1], 0, i2180, 'm_ObjectArgument')
  i2180.m_ObjectArgumentAssemblyTypeName = i2181[2]
  i2180.m_IntArgument = i2181[3]
  i2180.m_FloatArgument = i2181[4]
  i2180.m_StringArgument = i2181[5]
  i2180.m_BoolArgument = !!i2181[6]
  return i2180
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2182 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2183 = data
  i2182.m_Mode = i2183[0]
  i2182.m_WrapAround = !!i2183[1]
  request.r(i2183[2], i2183[3], 0, i2182, 'm_SelectOnUp')
  request.r(i2183[4], i2183[5], 0, i2182, 'm_SelectOnDown')
  request.r(i2183[6], i2183[7], 0, i2182, 'm_SelectOnLeft')
  request.r(i2183[8], i2183[9], 0, i2182, 'm_SelectOnRight')
  return i2182
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2184 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2185 = data
  i2184.m_NormalColor = new pc.Color(i2185[0], i2185[1], i2185[2], i2185[3])
  i2184.m_HighlightedColor = new pc.Color(i2185[4], i2185[5], i2185[6], i2185[7])
  i2184.m_PressedColor = new pc.Color(i2185[8], i2185[9], i2185[10], i2185[11])
  i2184.m_SelectedColor = new pc.Color(i2185[12], i2185[13], i2185[14], i2185[15])
  i2184.m_DisabledColor = new pc.Color(i2185[16], i2185[17], i2185[18], i2185[19])
  i2184.m_ColorMultiplier = i2185[20]
  i2184.m_FadeDuration = i2185[21]
  return i2184
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2186 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2187 = data
  request.r(i2187[0], i2187[1], 0, i2186, 'm_HighlightedSprite')
  request.r(i2187[2], i2187[3], 0, i2186, 'm_PressedSprite')
  request.r(i2187[4], i2187[5], 0, i2186, 'm_SelectedSprite')
  request.r(i2187[6], i2187[7], 0, i2186, 'm_DisabledSprite')
  return i2186
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2188 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2189 = data
  i2188.m_NormalTrigger = i2189[0]
  i2188.m_HighlightedTrigger = i2189[1]
  i2188.m_PressedTrigger = i2189[2]
  i2188.m_SelectedTrigger = i2189[3]
  i2188.m_DisabledTrigger = i2189[4]
  return i2188
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i2190 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i2191 = data
  i2190.m_hasFontAssetChanged = !!i2191[0]
  request.r(i2191[1], i2191[2], 0, i2190, 'm_baseMaterial')
  i2190.m_maskOffset = new pc.Vec4( i2191[3], i2191[4], i2191[5], i2191[6] )
  i2190.m_text = i2191[7]
  i2190.m_isRightToLeft = !!i2191[8]
  request.r(i2191[9], i2191[10], 0, i2190, 'm_fontAsset')
  request.r(i2191[11], i2191[12], 0, i2190, 'm_sharedMaterial')
  var i2193 = i2191[13]
  var i2192 = []
  for(var i = 0; i < i2193.length; i += 2) {
  request.r(i2193[i + 0], i2193[i + 1], 2, i2192, '')
  }
  i2190.m_fontSharedMaterials = i2192
  request.r(i2191[14], i2191[15], 0, i2190, 'm_fontMaterial')
  var i2195 = i2191[16]
  var i2194 = []
  for(var i = 0; i < i2195.length; i += 2) {
  request.r(i2195[i + 0], i2195[i + 1], 2, i2194, '')
  }
  i2190.m_fontMaterials = i2194
  i2190.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2191[17], i2191[18], i2191[19], i2191[20])
  i2190.m_fontColor = new pc.Color(i2191[21], i2191[22], i2191[23], i2191[24])
  i2190.m_enableVertexGradient = !!i2191[25]
  i2190.m_colorMode = i2191[26]
  i2190.m_fontColorGradient = request.d('TMPro.VertexGradient', i2191[27], i2190.m_fontColorGradient)
  request.r(i2191[28], i2191[29], 0, i2190, 'm_fontColorGradientPreset')
  request.r(i2191[30], i2191[31], 0, i2190, 'm_spriteAsset')
  i2190.m_tintAllSprites = !!i2191[32]
  request.r(i2191[33], i2191[34], 0, i2190, 'm_StyleSheet')
  i2190.m_TextStyleHashCode = i2191[35]
  i2190.m_overrideHtmlColors = !!i2191[36]
  i2190.m_faceColor = UnityEngine.Color32.ConstructColor(i2191[37], i2191[38], i2191[39], i2191[40])
  i2190.m_fontSize = i2191[41]
  i2190.m_fontSizeBase = i2191[42]
  i2190.m_fontWeight = i2191[43]
  i2190.m_enableAutoSizing = !!i2191[44]
  i2190.m_fontSizeMin = i2191[45]
  i2190.m_fontSizeMax = i2191[46]
  i2190.m_fontStyle = i2191[47]
  i2190.m_HorizontalAlignment = i2191[48]
  i2190.m_VerticalAlignment = i2191[49]
  i2190.m_textAlignment = i2191[50]
  i2190.m_characterSpacing = i2191[51]
  i2190.m_wordSpacing = i2191[52]
  i2190.m_lineSpacing = i2191[53]
  i2190.m_lineSpacingMax = i2191[54]
  i2190.m_paragraphSpacing = i2191[55]
  i2190.m_charWidthMaxAdj = i2191[56]
  i2190.m_enableWordWrapping = !!i2191[57]
  i2190.m_wordWrappingRatios = i2191[58]
  i2190.m_overflowMode = i2191[59]
  request.r(i2191[60], i2191[61], 0, i2190, 'm_linkedTextComponent')
  request.r(i2191[62], i2191[63], 0, i2190, 'parentLinkedComponent')
  i2190.m_enableKerning = !!i2191[64]
  i2190.m_enableExtraPadding = !!i2191[65]
  i2190.checkPaddingRequired = !!i2191[66]
  i2190.m_isRichText = !!i2191[67]
  i2190.m_parseCtrlCharacters = !!i2191[68]
  i2190.m_isOrthographic = !!i2191[69]
  i2190.m_isCullingEnabled = !!i2191[70]
  i2190.m_horizontalMapping = i2191[71]
  i2190.m_verticalMapping = i2191[72]
  i2190.m_uvLineOffset = i2191[73]
  i2190.m_geometrySortingOrder = i2191[74]
  i2190.m_IsTextObjectScaleStatic = !!i2191[75]
  i2190.m_VertexBufferAutoSizeReduction = !!i2191[76]
  i2190.m_useMaxVisibleDescender = !!i2191[77]
  i2190.m_pageToDisplay = i2191[78]
  i2190.m_margin = new pc.Vec4( i2191[79], i2191[80], i2191[81], i2191[82] )
  i2190.m_isUsingLegacyAnimationComponent = !!i2191[83]
  i2190.m_isVolumetricText = !!i2191[84]
  request.r(i2191[85], i2191[86], 0, i2190, 'm_Material')
  i2190.m_Maskable = !!i2191[87]
  i2190.m_Color = new pc.Color(i2191[88], i2191[89], i2191[90], i2191[91])
  i2190.m_RaycastTarget = !!i2191[92]
  i2190.m_RaycastPadding = new pc.Vec4( i2191[93], i2191[94], i2191[95], i2191[96] )
  return i2190
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i2196 = root || request.c( 'TMPro.VertexGradient' )
  var i2197 = data
  i2196.topLeft = new pc.Color(i2197[0], i2197[1], i2197[2], i2197[3])
  i2196.topRight = new pc.Color(i2197[4], i2197[5], i2197[6], i2197[7])
  i2196.bottomLeft = new pc.Color(i2197[8], i2197[9], i2197[10], i2197[11])
  i2196.bottomRight = new pc.Color(i2197[12], i2197[13], i2197[14], i2197[15])
  return i2196
}

Deserializers["AudioManager"] = function (request, data, root) {
  var i2198 = root || request.c( 'AudioManager' )
  var i2199 = data
  request.r(i2199[0], i2199[1], 0, i2198, 'bgmSource')
  request.r(i2199[2], i2199[3], 0, i2198, 'sfxSource')
  request.r(i2199[4], i2199[5], 0, i2198, 'bgm')
  request.r(i2199[6], i2199[7], 0, i2198, 'drag')
  request.r(i2199[8], i2199[9], 0, i2198, 'drog')
  request.r(i2199[10], i2199[11], 0, i2198, 'lose')
  request.r(i2199[12], i2199[13], 0, i2198, 'pop')
  request.r(i2199[14], i2199[15], 0, i2198, 'wood')
  request.r(i2199[16], i2199[17], 0, i2198, 'win')
  request.r(i2199[18], i2199[19], 0, i2198, 'warningTick')
  request.r(i2199[20], i2199[21], 0, i2198, 'match')
  request.r(i2199[22], i2199[23], 0, i2198, 'sake')
  return i2198
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2200 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2201 = data
  request.r(i2201[0], i2201[1], 0, i2200, 'clip')
  request.r(i2201[2], i2201[3], 0, i2200, 'outputAudioMixerGroup')
  i2200.playOnAwake = !!i2201[4]
  i2200.loop = !!i2201[5]
  i2200.time = i2201[6]
  i2200.volume = i2201[7]
  i2200.pitch = i2201[8]
  i2200.enabled = !!i2201[9]
  return i2200
}

Deserializers["GameManager"] = function (request, data, root) {
  var i2202 = root || request.c( 'GameManager' )
  var i2203 = data
  request.r(i2203[0], i2203[1], 0, i2202, 'pointText')
  i2202.point = i2203[2]
  request.r(i2203[3], i2203[4], 0, i2202, 'ECWin')
  i2202.startTimer = !!i2203[5]
  i2202.ticketCount = i2203[6]
  i2202.isClickToLog = !!i2203[7]
  i2202.clicksToLog = i2203[8]
  i2202.isMatch = !!i2203[9]
  i2202.clickCount = i2203[10]
  i2202.isClick = !!i2203[11]
  i2202.finishGame = !!i2203[12]
  i2202.startGame = !!i2203[13]
  i2202.isCheckWin = !!i2203[14]
  i2202.isCheckLose = !!i2203[15]
  i2202.isClickStore = !!i2203[16]
  return i2202
}

Deserializers["TutorialManager"] = function (request, data, root) {
  var i2204 = root || request.c( 'TutorialManager' )
  var i2205 = data
  request.r(i2205[0], i2205[1], 0, i2204, 'handPrefab')
  return i2204
}

Deserializers["ScalePopLoop"] = function (request, data, root) {
  var i2206 = root || request.c( 'ScalePopLoop' )
  var i2207 = data
  i2206.minScale = new pc.Vec3( i2207[0], i2207[1], i2207[2] )
  i2206.maxScale = new pc.Vec3( i2207[3], i2207[4], i2207[5] )
  i2206.duration = i2207[6]
  i2206.ease = i2207[7]
  return i2206
}

Deserializers["NotiBox"] = function (request, data, root) {
  var i2208 = root || request.c( 'NotiBox' )
  var i2209 = data
  request.r(i2209[0], i2209[1], 0, i2208, 'box')
  request.r(i2209[2], i2209[3], 0, i2208, 'bg')
  i2208.delay = i2209[4]
  i2208.animTime = i2209[5]
  return i2208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i2210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i2211 = data
  i2210.m_Alpha = i2211[0]
  i2210.m_Interactable = !!i2211[1]
  i2210.m_BlocksRaycasts = !!i2211[2]
  i2210.m_IgnoreParentGroups = !!i2211[3]
  i2210.enabled = !!i2211[4]
  return i2210
}

Deserializers["EndCart_Lose"] = function (request, data, root) {
  var i2212 = root || request.c( 'EndCart_Lose' )
  var i2213 = data
  request.r(i2213[0], i2213[1], 0, i2212, 'actionButton')
  request.r(i2213[2], i2213[3], 0, i2212, 'emoji')
  request.r(i2213[4], i2213[5], 0, i2212, 'logo')
  request.r(i2213[6], i2213[7], 0, i2212, 'icon')
  request.r(i2213[8], i2213[9], 0, i2212, 'praticle')
  i2212.buttonScaleTime = i2213[10]
  i2212.itemStartScale = i2213[11]
  i2212.itemPopScale = i2213[12]
  i2212.itemInTime = i2213[13]
  i2212.itemSettleTime = i2213[14]
  i2212.itemFinalScale = i2213[15]
  i2212.emojiFinalScale = i2213[16]
  i2212.otherItemFinalScale = i2213[17]
  return i2212
}

Deserializers["RotateLoop"] = function (request, data, root) {
  var i2214 = root || request.c( 'RotateLoop' )
  var i2215 = data
  i2214.rotateSpeed = i2215[0]
  return i2214
}

Deserializers["TicketManager"] = function (request, data, root) {
  var i2216 = root || request.c( 'TicketManager' )
  var i2217 = data
  var i2219 = i2217[0]
  var i2218 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i2219.length; i += 2) {
  request.r(i2219[i + 0], i2219[i + 1], 1, i2218, '')
  }
  i2216.tickets = i2218
  i2216.moveTime = i2217[1]
  i2216.bigScale = new pc.Vec3( i2217[2], i2217[3], i2217[4] )
  i2216.smallScale = new pc.Vec3( i2217[5], i2217[6], i2217[7] )
  i2216.slotX = i2217[8]
  i2216.slotY = i2217[9]
  var i2221 = i2217[10]
  var i2220 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector3')))
  for(var i = 0; i < i2221.length; i += 3) {
    i2220.add(new pc.Vec3( i2221[i + 0], i2221[i + 1], i2221[i + 2] ));
  }
  i2216.smallSlots = i2220
  request.r(i2217[11], i2217[12], 0, i2216, 'removeFxPrefab')
  return i2216
}

Deserializers["TicketIcon"] = function (request, data, root) {
  var i2226 = root || request.c( 'TicketIcon' )
  var i2227 = data
  return i2226
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2228 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2229 = data
  i2228.ambientIntensity = i2229[0]
  i2228.reflectionIntensity = i2229[1]
  i2228.ambientMode = i2229[2]
  i2228.ambientLight = new pc.Color(i2229[3], i2229[4], i2229[5], i2229[6])
  i2228.ambientSkyColor = new pc.Color(i2229[7], i2229[8], i2229[9], i2229[10])
  i2228.ambientGroundColor = new pc.Color(i2229[11], i2229[12], i2229[13], i2229[14])
  i2228.ambientEquatorColor = new pc.Color(i2229[15], i2229[16], i2229[17], i2229[18])
  i2228.fogColor = new pc.Color(i2229[19], i2229[20], i2229[21], i2229[22])
  i2228.fogEndDistance = i2229[23]
  i2228.fogStartDistance = i2229[24]
  i2228.fogDensity = i2229[25]
  i2228.fog = !!i2229[26]
  request.r(i2229[27], i2229[28], 0, i2228, 'skybox')
  i2228.fogMode = i2229[29]
  var i2231 = i2229[30]
  var i2230 = []
  for(var i = 0; i < i2231.length; i += 1) {
    i2230.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2231[i + 0]) );
  }
  i2228.lightmaps = i2230
  i2228.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2229[31], i2228.lightProbes)
  i2228.lightmapsMode = i2229[32]
  i2228.mixedBakeMode = i2229[33]
  i2228.environmentLightingMode = i2229[34]
  i2228.ambientProbe = new pc.SphericalHarmonicsL2(i2229[35])
  i2228.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i2229[36])
  i2228.useReferenceAmbientProbe = !!i2229[37]
  request.r(i2229[38], i2229[39], 0, i2228, 'customReflection')
  request.r(i2229[40], i2229[41], 0, i2228, 'defaultReflection')
  i2228.defaultReflectionMode = i2229[42]
  i2228.defaultReflectionResolution = i2229[43]
  i2228.sunLightObjectId = i2229[44]
  i2228.pixelLightCount = i2229[45]
  i2228.defaultReflectionHDR = !!i2229[46]
  i2228.hasLightDataAsset = !!i2229[47]
  i2228.hasManualGenerate = !!i2229[48]
  return i2228
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2234 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2235 = data
  request.r(i2235[0], i2235[1], 0, i2234, 'lightmapColor')
  request.r(i2235[2], i2235[3], 0, i2234, 'lightmapDirection')
  return i2234
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2236 = root || new UnityEngine.LightProbes()
  var i2237 = data
  return i2236
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2244 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2245 = data
  var i2247 = i2245[0]
  var i2246 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2247.length; i += 1) {
    i2246.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2247[i + 0]));
  }
  i2244.ShaderCompilationErrors = i2246
  i2244.name = i2245[1]
  i2244.guid = i2245[2]
  var i2249 = i2245[3]
  var i2248 = []
  for(var i = 0; i < i2249.length; i += 1) {
    i2248.push( i2249[i + 0] );
  }
  i2244.shaderDefinedKeywords = i2248
  var i2251 = i2245[4]
  var i2250 = []
  for(var i = 0; i < i2251.length; i += 1) {
    i2250.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2251[i + 0]) );
  }
  i2244.passes = i2250
  var i2253 = i2245[5]
  var i2252 = []
  for(var i = 0; i < i2253.length; i += 1) {
    i2252.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2253[i + 0]) );
  }
  i2244.usePasses = i2252
  var i2255 = i2245[6]
  var i2254 = []
  for(var i = 0; i < i2255.length; i += 1) {
    i2254.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2255[i + 0]) );
  }
  i2244.defaultParameterValues = i2254
  request.r(i2245[7], i2245[8], 0, i2244, 'unityFallbackShader')
  i2244.readDepth = !!i2245[9]
  i2244.hasDepthOnlyPass = !!i2245[10]
  i2244.isCreatedByShaderGraph = !!i2245[11]
  i2244.disableBatching = !!i2245[12]
  i2244.compiled = !!i2245[13]
  return i2244
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2258 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2259 = data
  i2258.shaderName = i2259[0]
  i2258.errorMessage = i2259[1]
  return i2258
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2262 = root || new pc.UnityShaderPass()
  var i2263 = data
  i2262.id = i2263[0]
  i2262.subShaderIndex = i2263[1]
  i2262.name = i2263[2]
  i2262.passType = i2263[3]
  i2262.grabPassTextureName = i2263[4]
  i2262.usePass = !!i2263[5]
  i2262.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2263[6], i2262.zTest)
  i2262.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2263[7], i2262.zWrite)
  i2262.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2263[8], i2262.culling)
  i2262.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2263[9], i2262.blending)
  i2262.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2263[10], i2262.alphaBlending)
  i2262.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2263[11], i2262.colorWriteMask)
  i2262.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2263[12], i2262.offsetUnits)
  i2262.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2263[13], i2262.offsetFactor)
  i2262.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2263[14], i2262.stencilRef)
  i2262.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2263[15], i2262.stencilReadMask)
  i2262.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2263[16], i2262.stencilWriteMask)
  i2262.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2263[17], i2262.stencilOp)
  i2262.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2263[18], i2262.stencilOpFront)
  i2262.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2263[19], i2262.stencilOpBack)
  var i2265 = i2263[20]
  var i2264 = []
  for(var i = 0; i < i2265.length; i += 1) {
    i2264.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2265[i + 0]) );
  }
  i2262.tags = i2264
  var i2267 = i2263[21]
  var i2266 = []
  for(var i = 0; i < i2267.length; i += 1) {
    i2266.push( i2267[i + 0] );
  }
  i2262.passDefinedKeywords = i2266
  var i2269 = i2263[22]
  var i2268 = []
  for(var i = 0; i < i2269.length; i += 1) {
    i2268.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2269[i + 0]) );
  }
  i2262.passDefinedKeywordGroups = i2268
  var i2271 = i2263[23]
  var i2270 = []
  for(var i = 0; i < i2271.length; i += 1) {
    i2270.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2271[i + 0]) );
  }
  i2262.variants = i2270
  var i2273 = i2263[24]
  var i2272 = []
  for(var i = 0; i < i2273.length; i += 1) {
    i2272.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2273[i + 0]) );
  }
  i2262.excludedVariants = i2272
  i2262.hasDepthReader = !!i2263[25]
  return i2262
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2274 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2275 = data
  i2274.val = i2275[0]
  i2274.name = i2275[1]
  return i2274
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2276 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2277 = data
  i2276.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2277[0], i2276.src)
  i2276.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2277[1], i2276.dst)
  i2276.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2277[2], i2276.op)
  return i2276
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2278 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2279 = data
  i2278.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2279[0], i2278.pass)
  i2278.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2279[1], i2278.fail)
  i2278.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2279[2], i2278.zFail)
  i2278.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2279[3], i2278.comp)
  return i2278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2282 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2283 = data
  i2282.name = i2283[0]
  i2282.value = i2283[1]
  return i2282
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2286 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2287 = data
  var i2289 = i2287[0]
  var i2288 = []
  for(var i = 0; i < i2289.length; i += 1) {
    i2288.push( i2289[i + 0] );
  }
  i2286.keywords = i2288
  i2286.hasDiscard = !!i2287[1]
  return i2286
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2292 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2293 = data
  i2292.passId = i2293[0]
  i2292.subShaderIndex = i2293[1]
  var i2295 = i2293[2]
  var i2294 = []
  for(var i = 0; i < i2295.length; i += 1) {
    i2294.push( i2295[i + 0] );
  }
  i2292.keywords = i2294
  i2292.vertexProgram = i2293[3]
  i2292.fragmentProgram = i2293[4]
  i2292.exportedForWebGl2 = !!i2293[5]
  i2292.readDepth = !!i2293[6]
  return i2292
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2298 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2299 = data
  request.r(i2299[0], i2299[1], 0, i2298, 'shader')
  i2298.pass = i2299[2]
  return i2298
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2302 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2303 = data
  i2302.name = i2303[0]
  i2302.type = i2303[1]
  i2302.value = new pc.Vec4( i2303[2], i2303[3], i2303[4], i2303[5] )
  i2302.textureValue = i2303[6]
  i2302.shaderPropertyFlag = i2303[7]
  return i2302
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2304 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2305 = data
  i2304.name = i2305[0]
  request.r(i2305[1], i2305[2], 0, i2304, 'texture')
  i2304.aabb = i2305[3]
  i2304.vertices = i2305[4]
  i2304.triangles = i2305[5]
  i2304.textureRect = UnityEngine.Rect.MinMaxRect(i2305[6], i2305[7], i2305[8], i2305[9])
  i2304.packedRect = UnityEngine.Rect.MinMaxRect(i2305[10], i2305[11], i2305[12], i2305[13])
  i2304.border = new pc.Vec4( i2305[14], i2305[15], i2305[16], i2305[17] )
  i2304.transparency = i2305[18]
  i2304.bounds = i2305[19]
  i2304.pixelsPerUnit = i2305[20]
  i2304.textureWidth = i2305[21]
  i2304.textureHeight = i2305[22]
  i2304.nativeSize = new pc.Vec2( i2305[23], i2305[24] )
  i2304.pivot = new pc.Vec2( i2305[25], i2305[26] )
  i2304.textureRectOffset = new pc.Vec2( i2305[27], i2305[28] )
  return i2304
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2306 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2307 = data
  i2306.name = i2307[0]
  return i2306
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2308 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2309 = data
  i2308.name = i2309[0]
  i2308.wrapMode = i2309[1]
  i2308.isLooping = !!i2309[2]
  i2308.length = i2309[3]
  var i2311 = i2309[4]
  var i2310 = []
  for(var i = 0; i < i2311.length; i += 1) {
    i2310.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2311[i + 0]) );
  }
  i2308.curves = i2310
  var i2313 = i2309[5]
  var i2312 = []
  for(var i = 0; i < i2313.length; i += 1) {
    i2312.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2313[i + 0]) );
  }
  i2308.events = i2312
  i2308.halfPrecision = !!i2309[6]
  i2308._frameRate = i2309[7]
  i2308.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i2309[8], i2308.localBounds)
  i2308.hasMuscleCurves = !!i2309[9]
  var i2315 = i2309[10]
  var i2314 = []
  for(var i = 0; i < i2315.length; i += 1) {
    i2314.push( i2315[i + 0] );
  }
  i2308.clipMuscleConstant = i2314
  i2308.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i2309[11], i2308.clipBindingConstant)
  return i2308
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2318 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2319 = data
  i2318.path = i2319[0]
  i2318.hash = i2319[1]
  i2318.componentType = i2319[2]
  i2318.property = i2319[3]
  i2318.keys = i2319[4]
  var i2321 = i2319[5]
  var i2320 = []
  for(var i = 0; i < i2321.length; i += 1) {
    i2320.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2321[i + 0]) );
  }
  i2318.objectReferenceKeys = i2320
  return i2318
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2324 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2325 = data
  i2324.time = i2325[0]
  request.r(i2325[1], i2325[2], 0, i2324, 'value')
  return i2324
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2328 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2329 = data
  i2328.functionName = i2329[0]
  i2328.floatParameter = i2329[1]
  i2328.intParameter = i2329[2]
  i2328.stringParameter = i2329[3]
  request.r(i2329[4], i2329[5], 0, i2328, 'objectReferenceParameter')
  i2328.time = i2329[6]
  return i2328
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2331 = data
  i2330.center = new pc.Vec3( i2331[0], i2331[1], i2331[2] )
  i2330.extends = new pc.Vec3( i2331[3], i2331[4], i2331[5] )
  return i2330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2334 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2335 = data
  var i2337 = i2335[0]
  var i2336 = []
  for(var i = 0; i < i2337.length; i += 1) {
    i2336.push( i2337[i + 0] );
  }
  i2334.genericBindings = i2336
  var i2339 = i2335[1]
  var i2338 = []
  for(var i = 0; i < i2339.length; i += 1) {
    i2338.push( i2339[i + 0] );
  }
  i2334.pptrCurveMapping = i2338
  return i2334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2340 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2341 = data
  i2340.name = i2341[0]
  i2340.ascent = i2341[1]
  i2340.originalLineHeight = i2341[2]
  i2340.fontSize = i2341[3]
  var i2343 = i2341[4]
  var i2342 = []
  for(var i = 0; i < i2343.length; i += 1) {
    i2342.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2343[i + 0]) );
  }
  i2340.characterInfo = i2342
  request.r(i2341[5], i2341[6], 0, i2340, 'texture')
  i2340.originalFontSize = i2341[7]
  return i2340
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2346 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2347 = data
  i2346.index = i2347[0]
  i2346.advance = i2347[1]
  i2346.bearing = i2347[2]
  i2346.glyphWidth = i2347[3]
  i2346.glyphHeight = i2347[4]
  i2346.minX = i2347[5]
  i2346.maxX = i2347[6]
  i2346.minY = i2347[7]
  i2346.maxY = i2347[8]
  i2346.uvBottomLeftX = i2347[9]
  i2346.uvBottomLeftY = i2347[10]
  i2346.uvBottomRightX = i2347[11]
  i2346.uvBottomRightY = i2347[12]
  i2346.uvTopLeftX = i2347[13]
  i2346.uvTopLeftY = i2347[14]
  i2346.uvTopRightX = i2347[15]
  i2346.uvTopRightY = i2347[16]
  return i2346
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2348 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2349 = data
  i2348.name = i2349[0]
  var i2351 = i2349[1]
  var i2350 = []
  for(var i = 0; i < i2351.length; i += 1) {
    i2350.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2351[i + 0]) );
  }
  i2348.layers = i2350
  var i2353 = i2349[2]
  var i2352 = []
  for(var i = 0; i < i2353.length; i += 1) {
    i2352.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2353[i + 0]) );
  }
  i2348.parameters = i2352
  i2348.animationClips = i2349[3]
  i2348.avatarUnsupported = i2349[4]
  return i2348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2356 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2357 = data
  i2356.name = i2357[0]
  i2356.defaultWeight = i2357[1]
  i2356.blendingMode = i2357[2]
  i2356.avatarMask = i2357[3]
  i2356.syncedLayerIndex = i2357[4]
  i2356.syncedLayerAffectsTiming = !!i2357[5]
  i2356.syncedLayers = i2357[6]
  i2356.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2357[7], i2356.stateMachine)
  return i2356
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2358 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2359 = data
  i2358.id = i2359[0]
  i2358.name = i2359[1]
  i2358.path = i2359[2]
  var i2361 = i2359[3]
  var i2360 = []
  for(var i = 0; i < i2361.length; i += 1) {
    i2360.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2361[i + 0]) );
  }
  i2358.states = i2360
  var i2363 = i2359[4]
  var i2362 = []
  for(var i = 0; i < i2363.length; i += 1) {
    i2362.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2363[i + 0]) );
  }
  i2358.machines = i2362
  var i2365 = i2359[5]
  var i2364 = []
  for(var i = 0; i < i2365.length; i += 1) {
    i2364.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2365[i + 0]) );
  }
  i2358.entryStateTransitions = i2364
  var i2367 = i2359[6]
  var i2366 = []
  for(var i = 0; i < i2367.length; i += 1) {
    i2366.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2367[i + 0]) );
  }
  i2358.exitStateTransitions = i2366
  var i2369 = i2359[7]
  var i2368 = []
  for(var i = 0; i < i2369.length; i += 1) {
    i2368.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2369[i + 0]) );
  }
  i2358.anyStateTransitions = i2368
  i2358.defaultStateId = i2359[8]
  return i2358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2372 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2373 = data
  i2372.id = i2373[0]
  i2372.name = i2373[1]
  i2372.cycleOffset = i2373[2]
  i2372.cycleOffsetParameter = i2373[3]
  i2372.cycleOffsetParameterActive = !!i2373[4]
  i2372.mirror = !!i2373[5]
  i2372.mirrorParameter = i2373[6]
  i2372.mirrorParameterActive = !!i2373[7]
  i2372.motionId = i2373[8]
  i2372.nameHash = i2373[9]
  i2372.fullPathHash = i2373[10]
  i2372.speed = i2373[11]
  i2372.speedParameter = i2373[12]
  i2372.speedParameterActive = !!i2373[13]
  i2372.tag = i2373[14]
  i2372.tagHash = i2373[15]
  i2372.writeDefaultValues = !!i2373[16]
  var i2375 = i2373[17]
  var i2374 = []
  for(var i = 0; i < i2375.length; i += 2) {
  request.r(i2375[i + 0], i2375[i + 1], 2, i2374, '')
  }
  i2372.behaviours = i2374
  var i2377 = i2373[18]
  var i2376 = []
  for(var i = 0; i < i2377.length; i += 1) {
    i2376.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2377[i + 0]) );
  }
  i2372.transitions = i2376
  return i2372
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2383 = data
  i2382.fullPath = i2383[0]
  i2382.canTransitionToSelf = !!i2383[1]
  i2382.duration = i2383[2]
  i2382.exitTime = i2383[3]
  i2382.hasExitTime = !!i2383[4]
  i2382.hasFixedDuration = !!i2383[5]
  i2382.interruptionSource = i2383[6]
  i2382.offset = i2383[7]
  i2382.orderedInterruption = !!i2383[8]
  i2382.destinationStateId = i2383[9]
  i2382.isExit = !!i2383[10]
  i2382.mute = !!i2383[11]
  i2382.solo = !!i2383[12]
  var i2385 = i2383[13]
  var i2384 = []
  for(var i = 0; i < i2385.length; i += 1) {
    i2384.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2385[i + 0]) );
  }
  i2382.conditions = i2384
  return i2382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2391 = data
  i2390.destinationStateId = i2391[0]
  i2390.isExit = !!i2391[1]
  i2390.mute = !!i2391[2]
  i2390.solo = !!i2391[3]
  var i2393 = i2391[4]
  var i2392 = []
  for(var i = 0; i < i2393.length; i += 1) {
    i2392.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2393[i + 0]) );
  }
  i2390.conditions = i2392
  return i2390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2396 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2397 = data
  i2396.defaultBool = !!i2397[0]
  i2396.defaultFloat = i2397[1]
  i2396.defaultInt = i2397[2]
  i2396.name = i2397[3]
  i2396.nameHash = i2397[4]
  i2396.type = i2397[5]
  return i2396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2399 = data
  i2398.name = i2399[0]
  i2398.bytes64 = i2399[1]
  i2398.data = i2399[2]
  return i2398
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i2400 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i2401 = data
  var i2403 = i2401[0]
  var i2402 = []
  for(var i = 0; i < i2403.length; i += 2) {
  request.r(i2403[i + 0], i2403[i + 1], 2, i2402, '')
  }
  i2400.atlasAssets = i2402
  i2400.scale = i2401[1]
  request.r(i2401[2], i2401[3], 0, i2400, 'skeletonJSON')
  i2400.isUpgradingBlendModeMaterials = !!i2401[4]
  i2400.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i2401[5], i2400.blendModeMaterials)
  var i2405 = i2401[6]
  var i2404 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i2405.length; i += 2) {
  request.r(i2405[i + 0], i2405[i + 1], 1, i2404, '')
  }
  i2400.skeletonDataModifiers = i2404
  var i2407 = i2401[7]
  var i2406 = []
  for(var i = 0; i < i2407.length; i += 1) {
    i2406.push( i2407[i + 0] );
  }
  i2400.fromAnimation = i2406
  var i2409 = i2401[8]
  var i2408 = []
  for(var i = 0; i < i2409.length; i += 1) {
    i2408.push( i2409[i + 0] );
  }
  i2400.toAnimation = i2408
  i2400.duration = i2401[9]
  i2400.defaultMix = i2401[10]
  request.r(i2401[11], i2401[12], 0, i2400, 'controller')
  return i2400
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i2412 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i2413 = data
  i2412.applyAdditiveMaterial = !!i2413[0]
  var i2415 = i2413[1]
  var i2414 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2415.length; i += 1) {
    i2414.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2415[i + 0]));
  }
  i2412.additiveMaterials = i2414
  var i2417 = i2413[2]
  var i2416 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2417.length; i += 1) {
    i2416.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2417[i + 0]));
  }
  i2412.multiplyMaterials = i2416
  var i2419 = i2413[3]
  var i2418 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2419.length; i += 1) {
    i2418.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2419[i + 0]));
  }
  i2412.screenMaterials = i2418
  i2412.requiresBlendModeMaterials = !!i2413[4]
  return i2412
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i2422 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i2423 = data
  i2422.pageName = i2423[0]
  request.r(i2423[1], i2423[2], 0, i2422, 'material')
  return i2422
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i2426 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i2427 = data
  request.r(i2427[0], i2427[1], 0, i2426, 'atlasFile')
  var i2429 = i2427[2]
  var i2428 = []
  for(var i = 0; i < i2429.length; i += 2) {
  request.r(i2429[i + 0], i2429[i + 1], 2, i2428, '')
  }
  i2426.materials = i2428
  i2426.textureLoadingMode = i2427[3]
  request.r(i2427[4], i2427[5], 0, i2426, 'onDemandTextureLoader')
  return i2426
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2430 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2431 = data
  request.r(i2431[0], i2431[1], 0, i2430, 'atlas')
  i2430.normalStyle = i2431[2]
  i2430.normalSpacingOffset = i2431[3]
  i2430.boldStyle = i2431[4]
  i2430.boldSpacing = i2431[5]
  i2430.italicStyle = i2431[6]
  i2430.tabSize = i2431[7]
  i2430.hashCode = i2431[8]
  request.r(i2431[9], i2431[10], 0, i2430, 'material')
  i2430.materialHashCode = i2431[11]
  i2430.m_Version = i2431[12]
  i2430.m_SourceFontFileGUID = i2431[13]
  request.r(i2431[14], i2431[15], 0, i2430, 'm_SourceFontFile_EditorRef')
  request.r(i2431[16], i2431[17], 0, i2430, 'm_SourceFontFile')
  i2430.m_AtlasPopulationMode = i2431[18]
  i2430.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2431[19], i2430.m_FaceInfo)
  var i2433 = i2431[20]
  var i2432 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2433.length; i += 1) {
    i2432.add(request.d('UnityEngine.TextCore.Glyph', i2433[i + 0]));
  }
  i2430.m_GlyphTable = i2432
  var i2435 = i2431[21]
  var i2434 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2435.length; i += 1) {
    i2434.add(request.d('TMPro.TMP_Character', i2435[i + 0]));
  }
  i2430.m_CharacterTable = i2434
  var i2437 = i2431[22]
  var i2436 = []
  for(var i = 0; i < i2437.length; i += 2) {
  request.r(i2437[i + 0], i2437[i + 1], 2, i2436, '')
  }
  i2430.m_AtlasTextures = i2436
  i2430.m_AtlasTextureIndex = i2431[23]
  i2430.m_IsMultiAtlasTexturesEnabled = !!i2431[24]
  i2430.m_ClearDynamicDataOnBuild = !!i2431[25]
  var i2439 = i2431[26]
  var i2438 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2439.length; i += 1) {
    i2438.add(request.d('UnityEngine.TextCore.GlyphRect', i2439[i + 0]));
  }
  i2430.m_UsedGlyphRects = i2438
  var i2441 = i2431[27]
  var i2440 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2441.length; i += 1) {
    i2440.add(request.d('UnityEngine.TextCore.GlyphRect', i2441[i + 0]));
  }
  i2430.m_FreeGlyphRects = i2440
  i2430.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2431[28], i2430.m_fontInfo)
  i2430.m_AtlasWidth = i2431[29]
  i2430.m_AtlasHeight = i2431[30]
  i2430.m_AtlasPadding = i2431[31]
  i2430.m_AtlasRenderMode = i2431[32]
  var i2443 = i2431[33]
  var i2442 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2443.length; i += 1) {
    i2442.add(request.d('TMPro.TMP_Glyph', i2443[i + 0]));
  }
  i2430.m_glyphInfoList = i2442
  i2430.m_KerningTable = request.d('TMPro.KerningTable', i2431[34], i2430.m_KerningTable)
  i2430.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2431[35], i2430.m_FontFeatureTable)
  var i2445 = i2431[36]
  var i2444 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2445.length; i += 2) {
  request.r(i2445[i + 0], i2445[i + 1], 1, i2444, '')
  }
  i2430.fallbackFontAssets = i2444
  var i2447 = i2431[37]
  var i2446 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2447.length; i += 2) {
  request.r(i2447[i + 0], i2447[i + 1], 1, i2446, '')
  }
  i2430.m_FallbackFontAssetTable = i2446
  i2430.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2431[38], i2430.m_CreationSettings)
  var i2449 = i2431[39]
  var i2448 = []
  for(var i = 0; i < i2449.length; i += 1) {
    i2448.push( request.d('TMPro.TMP_FontWeightPair', i2449[i + 0]) );
  }
  i2430.m_FontWeightTable = i2448
  var i2451 = i2431[40]
  var i2450 = []
  for(var i = 0; i < i2451.length; i += 1) {
    i2450.push( request.d('TMPro.TMP_FontWeightPair', i2451[i + 0]) );
  }
  i2430.fontWeights = i2450
  return i2430
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2452 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2453 = data
  i2452.m_FaceIndex = i2453[0]
  i2452.m_FamilyName = i2453[1]
  i2452.m_StyleName = i2453[2]
  i2452.m_PointSize = i2453[3]
  i2452.m_Scale = i2453[4]
  i2452.m_UnitsPerEM = i2453[5]
  i2452.m_LineHeight = i2453[6]
  i2452.m_AscentLine = i2453[7]
  i2452.m_CapLine = i2453[8]
  i2452.m_MeanLine = i2453[9]
  i2452.m_Baseline = i2453[10]
  i2452.m_DescentLine = i2453[11]
  i2452.m_SuperscriptOffset = i2453[12]
  i2452.m_SuperscriptSize = i2453[13]
  i2452.m_SubscriptOffset = i2453[14]
  i2452.m_SubscriptSize = i2453[15]
  i2452.m_UnderlineOffset = i2453[16]
  i2452.m_UnderlineThickness = i2453[17]
  i2452.m_StrikethroughOffset = i2453[18]
  i2452.m_StrikethroughThickness = i2453[19]
  i2452.m_TabWidth = i2453[20]
  return i2452
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2456 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2457 = data
  i2456.m_Index = i2457[0]
  i2456.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2457[1], i2456.m_Metrics)
  i2456.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2457[2], i2456.m_GlyphRect)
  i2456.m_Scale = i2457[3]
  i2456.m_AtlasIndex = i2457[4]
  i2456.m_ClassDefinitionType = i2457[5]
  return i2456
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2458 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2459 = data
  i2458.m_Width = i2459[0]
  i2458.m_Height = i2459[1]
  i2458.m_HorizontalBearingX = i2459[2]
  i2458.m_HorizontalBearingY = i2459[3]
  i2458.m_HorizontalAdvance = i2459[4]
  return i2458
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2460 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2461 = data
  i2460.m_X = i2461[0]
  i2460.m_Y = i2461[1]
  i2460.m_Width = i2461[2]
  i2460.m_Height = i2461[3]
  return i2460
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2464 = root || request.c( 'TMPro.TMP_Character' )
  var i2465 = data
  i2464.m_ElementType = i2465[0]
  i2464.m_Unicode = i2465[1]
  i2464.m_GlyphIndex = i2465[2]
  i2464.m_Scale = i2465[3]
  return i2464
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2470 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2471 = data
  i2470.Name = i2471[0]
  i2470.PointSize = i2471[1]
  i2470.Scale = i2471[2]
  i2470.CharacterCount = i2471[3]
  i2470.LineHeight = i2471[4]
  i2470.Baseline = i2471[5]
  i2470.Ascender = i2471[6]
  i2470.CapHeight = i2471[7]
  i2470.Descender = i2471[8]
  i2470.CenterLine = i2471[9]
  i2470.SuperscriptOffset = i2471[10]
  i2470.SubscriptOffset = i2471[11]
  i2470.SubSize = i2471[12]
  i2470.Underline = i2471[13]
  i2470.UnderlineThickness = i2471[14]
  i2470.strikethrough = i2471[15]
  i2470.strikethroughThickness = i2471[16]
  i2470.TabWidth = i2471[17]
  i2470.Padding = i2471[18]
  i2470.AtlasWidth = i2471[19]
  i2470.AtlasHeight = i2471[20]
  return i2470
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2474 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2475 = data
  i2474.id = i2475[0]
  i2474.x = i2475[1]
  i2474.y = i2475[2]
  i2474.width = i2475[3]
  i2474.height = i2475[4]
  i2474.xOffset = i2475[5]
  i2474.yOffset = i2475[6]
  i2474.xAdvance = i2475[7]
  i2474.scale = i2475[8]
  return i2474
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2476 = root || request.c( 'TMPro.KerningTable' )
  var i2477 = data
  var i2479 = i2477[0]
  var i2478 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2479.length; i += 1) {
    i2478.add(request.d('TMPro.KerningPair', i2479[i + 0]));
  }
  i2476.kerningPairs = i2478
  return i2476
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2482 = root || request.c( 'TMPro.KerningPair' )
  var i2483 = data
  i2482.xOffset = i2483[0]
  i2482.m_FirstGlyph = i2483[1]
  i2482.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2483[2], i2482.m_FirstGlyphAdjustments)
  i2482.m_SecondGlyph = i2483[3]
  i2482.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2483[4], i2482.m_SecondGlyphAdjustments)
  i2482.m_IgnoreSpacingAdjustments = !!i2483[5]
  return i2482
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2484 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2485 = data
  var i2487 = i2485[0]
  var i2486 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2487.length; i += 1) {
    i2486.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i2487[i + 0]));
  }
  i2484.m_GlyphPairAdjustmentRecords = i2486
  return i2484
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2490 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i2491 = data
  i2490.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2491[0], i2490.m_FirstAdjustmentRecord)
  i2490.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2491[1], i2490.m_SecondAdjustmentRecord)
  i2490.m_FeatureLookupFlags = i2491[2]
  return i2490
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2494 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2495 = data
  i2494.sourceFontFileName = i2495[0]
  i2494.sourceFontFileGUID = i2495[1]
  i2494.pointSizeSamplingMode = i2495[2]
  i2494.pointSize = i2495[3]
  i2494.padding = i2495[4]
  i2494.packingMode = i2495[5]
  i2494.atlasWidth = i2495[6]
  i2494.atlasHeight = i2495[7]
  i2494.characterSetSelectionMode = i2495[8]
  i2494.characterSequence = i2495[9]
  i2494.referencedFontAssetGUID = i2495[10]
  i2494.referencedTextAssetGUID = i2495[11]
  i2494.fontStyle = i2495[12]
  i2494.fontStyleModifier = i2495[13]
  i2494.renderMode = i2495[14]
  i2494.includeFontFeatures = !!i2495[15]
  return i2494
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2498 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2499 = data
  request.r(i2499[0], i2499[1], 0, i2498, 'regularTypeface')
  request.r(i2499[2], i2499[3], 0, i2498, 'italicTypeface')
  return i2498
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2500 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2501 = data
  i2500.useSafeMode = !!i2501[0]
  i2500.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2501[1], i2500.safeModeOptions)
  i2500.timeScale = i2501[2]
  i2500.unscaledTimeScale = i2501[3]
  i2500.useSmoothDeltaTime = !!i2501[4]
  i2500.maxSmoothUnscaledTime = i2501[5]
  i2500.rewindCallbackMode = i2501[6]
  i2500.showUnityEditorReport = !!i2501[7]
  i2500.logBehaviour = i2501[8]
  i2500.drawGizmos = !!i2501[9]
  i2500.defaultRecyclable = !!i2501[10]
  i2500.defaultAutoPlay = i2501[11]
  i2500.defaultUpdateType = i2501[12]
  i2500.defaultTimeScaleIndependent = !!i2501[13]
  i2500.defaultEaseType = i2501[14]
  i2500.defaultEaseOvershootOrAmplitude = i2501[15]
  i2500.defaultEasePeriod = i2501[16]
  i2500.defaultAutoKill = !!i2501[17]
  i2500.defaultLoopType = i2501[18]
  i2500.debugMode = !!i2501[19]
  i2500.debugStoreTargetId = !!i2501[20]
  i2500.showPreviewPanel = !!i2501[21]
  i2500.storeSettingsLocation = i2501[22]
  i2500.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2501[23], i2500.modules)
  i2500.createASMDEF = !!i2501[24]
  i2500.showPlayingTweens = !!i2501[25]
  i2500.showPausedTweens = !!i2501[26]
  return i2500
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2502 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2503 = data
  i2502.logBehaviour = i2503[0]
  i2502.nestedTweenFailureBehaviour = i2503[1]
  return i2502
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2504 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2505 = data
  i2504.showPanel = !!i2505[0]
  i2504.audioEnabled = !!i2505[1]
  i2504.physicsEnabled = !!i2505[2]
  i2504.physics2DEnabled = !!i2505[3]
  i2504.spriteEnabled = !!i2505[4]
  i2504.uiEnabled = !!i2505[5]
  i2504.textMeshProEnabled = !!i2505[6]
  i2504.tk2DEnabled = !!i2505[7]
  i2504.deAudioEnabled = !!i2505[8]
  i2504.deUnityExtendedEnabled = !!i2505[9]
  i2504.epoOutlineEnabled = !!i2505[10]
  return i2504
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2506 = root || request.c( 'TMPro.TMP_Settings' )
  var i2507 = data
  i2506.m_enableWordWrapping = !!i2507[0]
  i2506.m_enableKerning = !!i2507[1]
  i2506.m_enableExtraPadding = !!i2507[2]
  i2506.m_enableTintAllSprites = !!i2507[3]
  i2506.m_enableParseEscapeCharacters = !!i2507[4]
  i2506.m_EnableRaycastTarget = !!i2507[5]
  i2506.m_GetFontFeaturesAtRuntime = !!i2507[6]
  i2506.m_missingGlyphCharacter = i2507[7]
  i2506.m_warningsDisabled = !!i2507[8]
  request.r(i2507[9], i2507[10], 0, i2506, 'm_defaultFontAsset')
  i2506.m_defaultFontAssetPath = i2507[11]
  i2506.m_defaultFontSize = i2507[12]
  i2506.m_defaultAutoSizeMinRatio = i2507[13]
  i2506.m_defaultAutoSizeMaxRatio = i2507[14]
  i2506.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2507[15], i2507[16] )
  i2506.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2507[17], i2507[18] )
  i2506.m_autoSizeTextContainer = !!i2507[19]
  i2506.m_IsTextObjectScaleStatic = !!i2507[20]
  var i2509 = i2507[21]
  var i2508 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2509.length; i += 2) {
  request.r(i2509[i + 0], i2509[i + 1], 1, i2508, '')
  }
  i2506.m_fallbackFontAssets = i2508
  i2506.m_matchMaterialPreset = !!i2507[22]
  request.r(i2507[23], i2507[24], 0, i2506, 'm_defaultSpriteAsset')
  i2506.m_defaultSpriteAssetPath = i2507[25]
  i2506.m_enableEmojiSupport = !!i2507[26]
  i2506.m_MissingCharacterSpriteUnicode = i2507[27]
  i2506.m_defaultColorGradientPresetsPath = i2507[28]
  request.r(i2507[29], i2507[30], 0, i2506, 'm_defaultStyleSheet')
  i2506.m_StyleSheetsResourcePath = i2507[31]
  request.r(i2507[32], i2507[33], 0, i2506, 'm_leadingCharacters')
  request.r(i2507[34], i2507[35], 0, i2506, 'm_followingCharacters')
  i2506.m_UseModernHangulLineBreakingRules = !!i2507[36]
  return i2506
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2510 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i2511 = data
  i2510.m_GlyphIndex = i2511[0]
  i2510.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i2511[1], i2510.m_GlyphValueRecord)
  return i2510
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i2512 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i2513 = data
  i2512.m_XPlacement = i2513[0]
  i2512.m_YPlacement = i2513[1]
  i2512.m_XAdvance = i2513[2]
  i2512.m_YAdvance = i2513[3]
  return i2512
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2514 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2515 = data
  request.r(i2515[0], i2515[1], 0, i2514, 'spriteSheet')
  var i2517 = i2515[2]
  var i2516 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2517.length; i += 1) {
    i2516.add(request.d('TMPro.TMP_Sprite', i2517[i + 0]));
  }
  i2514.spriteInfoList = i2516
  var i2519 = i2515[3]
  var i2518 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2519.length; i += 2) {
  request.r(i2519[i + 0], i2519[i + 1], 1, i2518, '')
  }
  i2514.fallbackSpriteAssets = i2518
  i2514.hashCode = i2515[4]
  request.r(i2515[5], i2515[6], 0, i2514, 'material')
  i2514.materialHashCode = i2515[7]
  i2514.m_Version = i2515[8]
  i2514.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2515[9], i2514.m_FaceInfo)
  var i2521 = i2515[10]
  var i2520 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2521.length; i += 1) {
    i2520.add(request.d('TMPro.TMP_SpriteCharacter', i2521[i + 0]));
  }
  i2514.m_SpriteCharacterTable = i2520
  var i2523 = i2515[11]
  var i2522 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2523.length; i += 1) {
    i2522.add(request.d('TMPro.TMP_SpriteGlyph', i2523[i + 0]));
  }
  i2514.m_SpriteGlyphTable = i2522
  return i2514
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2526 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2527 = data
  i2526.name = i2527[0]
  i2526.hashCode = i2527[1]
  i2526.unicode = i2527[2]
  i2526.pivot = new pc.Vec2( i2527[3], i2527[4] )
  request.r(i2527[5], i2527[6], 0, i2526, 'sprite')
  i2526.id = i2527[7]
  i2526.x = i2527[8]
  i2526.y = i2527[9]
  i2526.width = i2527[10]
  i2526.height = i2527[11]
  i2526.xOffset = i2527[12]
  i2526.yOffset = i2527[13]
  i2526.xAdvance = i2527[14]
  i2526.scale = i2527[15]
  return i2526
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2532 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2533 = data
  i2532.m_Name = i2533[0]
  i2532.m_HashCode = i2533[1]
  i2532.m_ElementType = i2533[2]
  i2532.m_Unicode = i2533[3]
  i2532.m_GlyphIndex = i2533[4]
  i2532.m_Scale = i2533[5]
  return i2532
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2536 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2537 = data
  request.r(i2537[0], i2537[1], 0, i2536, 'sprite')
  i2536.m_Index = i2537[2]
  i2536.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2537[3], i2536.m_Metrics)
  i2536.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2537[4], i2536.m_GlyphRect)
  i2536.m_Scale = i2537[5]
  i2536.m_AtlasIndex = i2537[6]
  i2536.m_ClassDefinitionType = i2537[7]
  return i2536
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2538 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2539 = data
  var i2541 = i2539[0]
  var i2540 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2541.length; i += 1) {
    i2540.add(request.d('TMPro.TMP_Style', i2541[i + 0]));
  }
  i2538.m_StyleList = i2540
  return i2538
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2544 = root || request.c( 'TMPro.TMP_Style' )
  var i2545 = data
  i2544.m_Name = i2545[0]
  i2544.m_HashCode = i2545[1]
  i2544.m_OpeningDefinition = i2545[2]
  i2544.m_ClosingDefinition = i2545[3]
  i2544.m_OpeningTagArray = i2545[4]
  i2544.m_ClosingTagArray = i2545[5]
  i2544.m_OpeningTagUnicodeArray = i2545[6]
  i2544.m_ClosingTagUnicodeArray = i2545[7]
  return i2544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2547 = data
  var i2549 = i2547[0]
  var i2548 = []
  for(var i = 0; i < i2549.length; i += 1) {
    i2548.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2549[i + 0]) );
  }
  i2546.files = i2548
  i2546.componentToPrefabIds = i2547[1]
  return i2546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2553 = data
  i2552.path = i2553[0]
  request.r(i2553[1], i2553[2], 0, i2552, 'unityObject')
  return i2552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2555 = data
  var i2557 = i2555[0]
  var i2556 = []
  for(var i = 0; i < i2557.length; i += 1) {
    i2556.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2557[i + 0]) );
  }
  i2554.scriptsExecutionOrder = i2556
  var i2559 = i2555[1]
  var i2558 = []
  for(var i = 0; i < i2559.length; i += 1) {
    i2558.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2559[i + 0]) );
  }
  i2554.sortingLayers = i2558
  var i2561 = i2555[2]
  var i2560 = []
  for(var i = 0; i < i2561.length; i += 1) {
    i2560.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2561[i + 0]) );
  }
  i2554.cullingLayers = i2560
  i2554.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2555[3], i2554.timeSettings)
  i2554.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2555[4], i2554.physicsSettings)
  i2554.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2555[5], i2554.physics2DSettings)
  i2554.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2555[6], i2554.qualitySettings)
  i2554.enableRealtimeShadows = !!i2555[7]
  i2554.enableAutoInstancing = !!i2555[8]
  i2554.enableStaticBatching = !!i2555[9]
  i2554.enableDynamicBatching = !!i2555[10]
  i2554.lightmapEncodingQuality = i2555[11]
  i2554.desiredColorSpace = i2555[12]
  var i2563 = i2555[13]
  var i2562 = []
  for(var i = 0; i < i2563.length; i += 1) {
    i2562.push( i2563[i + 0] );
  }
  i2554.allTags = i2562
  return i2554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2567 = data
  i2566.name = i2567[0]
  i2566.value = i2567[1]
  return i2566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2571 = data
  i2570.id = i2571[0]
  i2570.name = i2571[1]
  i2570.value = i2571[2]
  return i2570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2575 = data
  i2574.id = i2575[0]
  i2574.name = i2575[1]
  return i2574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2577 = data
  i2576.fixedDeltaTime = i2577[0]
  i2576.maximumDeltaTime = i2577[1]
  i2576.timeScale = i2577[2]
  i2576.maximumParticleTimestep = i2577[3]
  return i2576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2579 = data
  i2578.gravity = new pc.Vec3( i2579[0], i2579[1], i2579[2] )
  i2578.defaultSolverIterations = i2579[3]
  i2578.bounceThreshold = i2579[4]
  i2578.autoSyncTransforms = !!i2579[5]
  i2578.autoSimulation = !!i2579[6]
  var i2581 = i2579[7]
  var i2580 = []
  for(var i = 0; i < i2581.length; i += 1) {
    i2580.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2581[i + 0]) );
  }
  i2578.collisionMatrix = i2580
  return i2578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2585 = data
  i2584.enabled = !!i2585[0]
  i2584.layerId = i2585[1]
  i2584.otherLayerId = i2585[2]
  return i2584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2587 = data
  request.r(i2587[0], i2587[1], 0, i2586, 'material')
  i2586.gravity = new pc.Vec2( i2587[2], i2587[3] )
  i2586.positionIterations = i2587[4]
  i2586.velocityIterations = i2587[5]
  i2586.velocityThreshold = i2587[6]
  i2586.maxLinearCorrection = i2587[7]
  i2586.maxAngularCorrection = i2587[8]
  i2586.maxTranslationSpeed = i2587[9]
  i2586.maxRotationSpeed = i2587[10]
  i2586.baumgarteScale = i2587[11]
  i2586.baumgarteTOIScale = i2587[12]
  i2586.timeToSleep = i2587[13]
  i2586.linearSleepTolerance = i2587[14]
  i2586.angularSleepTolerance = i2587[15]
  i2586.defaultContactOffset = i2587[16]
  i2586.autoSimulation = !!i2587[17]
  i2586.queriesHitTriggers = !!i2587[18]
  i2586.queriesStartInColliders = !!i2587[19]
  i2586.callbacksOnDisable = !!i2587[20]
  i2586.reuseCollisionCallbacks = !!i2587[21]
  i2586.autoSyncTransforms = !!i2587[22]
  var i2589 = i2587[23]
  var i2588 = []
  for(var i = 0; i < i2589.length; i += 1) {
    i2588.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2589[i + 0]) );
  }
  i2586.collisionMatrix = i2588
  return i2586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2593 = data
  i2592.enabled = !!i2593[0]
  i2592.layerId = i2593[1]
  i2592.otherLayerId = i2593[2]
  return i2592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2595 = data
  var i2597 = i2595[0]
  var i2596 = []
  for(var i = 0; i < i2597.length; i += 1) {
    i2596.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2597[i + 0]) );
  }
  i2594.qualityLevels = i2596
  var i2599 = i2595[1]
  var i2598 = []
  for(var i = 0; i < i2599.length; i += 1) {
    i2598.push( i2599[i + 0] );
  }
  i2594.names = i2598
  i2594.shadows = i2595[2]
  i2594.anisotropicFiltering = i2595[3]
  i2594.antiAliasing = i2595[4]
  i2594.lodBias = i2595[5]
  i2594.shadowCascades = i2595[6]
  i2594.shadowDistance = i2595[7]
  i2594.shadowmaskMode = i2595[8]
  i2594.shadowProjection = i2595[9]
  i2594.shadowResolution = i2595[10]
  i2594.softParticles = !!i2595[11]
  i2594.softVegetation = !!i2595[12]
  i2594.activeColorSpace = i2595[13]
  i2594.desiredColorSpace = i2595[14]
  i2594.masterTextureLimit = i2595[15]
  i2594.maxQueuedFrames = i2595[16]
  i2594.particleRaycastBudget = i2595[17]
  i2594.pixelLightCount = i2595[18]
  i2594.realtimeReflectionProbes = !!i2595[19]
  i2594.shadowCascade2Split = i2595[20]
  i2594.shadowCascade4Split = new pc.Vec3( i2595[21], i2595[22], i2595[23] )
  i2594.streamingMipmapsActive = !!i2595[24]
  i2594.vSyncCount = i2595[25]
  i2594.asyncUploadBufferSize = i2595[26]
  i2594.asyncUploadTimeSlice = i2595[27]
  i2594.billboardsFaceCameraPosition = !!i2595[28]
  i2594.shadowNearPlaneOffset = i2595[29]
  i2594.streamingMipmapsMemoryBudget = i2595[30]
  i2594.maximumLODLevel = i2595[31]
  i2594.streamingMipmapsAddAllCameras = !!i2595[32]
  i2594.streamingMipmapsMaxLevelReduction = i2595[33]
  i2594.streamingMipmapsRenderersPerFrame = i2595[34]
  i2594.resolutionScalingFixedDPIFactor = i2595[35]
  i2594.streamingMipmapsMaxFileIORequests = i2595[36]
  i2594.currentQualityLevel = i2595[37]
  return i2594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2605 = data
  i2604.mode = i2605[0]
  i2604.parameter = i2605[1]
  i2604.threshold = i2605[2]
  return i2604
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2606 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2607 = data
  i2606.xPlacement = i2607[0]
  i2606.yPlacement = i2607[1]
  i2606.xAdvance = i2607[2]
  i2606.yAdvance = i2607[3]
  return i2606
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"frontSortingLayerID":0,"frontSortingOrder":1,"backSortingLayerID":2,"backSortingOrder":3,"alphaCutoff":4,"sprite":5,"tileMode":7,"isCustomRangeActive":8,"spriteSortPoint":9,"enabled":10,"sharedMaterial":11,"sharedMaterials":13,"receiveShadows":14,"shadowCastingMode":15,"sortingLayerID":16,"sortingOrder":17,"lightmapIndex":18,"lightmapSceneIndex":19,"lightmapScaleOffset":20,"lightProbeUsage":24,"reflectionProbeUsage":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"62":[63],"64":[63],"65":[63],"66":[63],"67":[63],"68":[63],"69":[70],"71":[19],"72":[73],"74":[73],"75":[73],"76":[73],"77":[73],"78":[73],"79":[73],"80":[7],"81":[7],"82":[7],"83":[7],"84":[7],"85":[7],"86":[7],"87":[7],"88":[7],"89":[7],"90":[7],"91":[7],"92":[7],"93":[19],"94":[35],"95":[96],"97":[96],"29":[28],"98":[19],"21":[19],"99":[100],"101":[102],"103":[35,38],"104":[105],"106":[102],"107":[108],"109":[102],"110":[102],"111":[112],"113":[112],"114":[102],"115":[116],"117":[1],"118":[116],"119":[28],"120":[28],"31":[29],"33":[32,28],"121":[28],"30":[29],"122":[28],"123":[28],"124":[28],"125":[28],"126":[28],"127":[28],"128":[28],"129":[28],"130":[28],"131":[32,28],"132":[28],"133":[28],"134":[28],"135":[28],"136":[32,28],"137":[28],"138":[23],"139":[23],"24":[23],"140":[23],"141":[19],"142":[19],"143":[144],"145":[19],"146":[147],"148":[28],"149":[32,28],"36":[35],"105":[32,28],"150":[10,35],"102":[35],"151":[35,38],"152":[73],"153":[7],"154":[147],"155":[112],"156":[28],"157":[35,28],"42":[28,32],"158":[28],"159":[32,28],"160":[35],"161":[32,28],"162":[28],"163":[116]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Material","UnityEngine.MonoBehaviour","DragItem","UnityEngine.BoxCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Shader","Disk","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","Tray","UnityEngine.GameObject","Slot","UnityEngine.Texture2D","HandHint","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Camera","UnityEngine.AudioListener","CheckSize","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","TrayManager","UnityEngine.SpriteMask","ConveyorBelt","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","EndCart_Win","UnityEngine.MeshRenderer","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonDataAsset","UnityEngine.MeshFilter","Button","UnityEngine.UI.Button","GameManager","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","AudioManager","UnityEngine.AudioSource","UnityEngine.AudioClip","TutorialManager","ScalePopLoop","NotiBox","UnityEngine.CanvasGroup","EndCart_Lose","RotateLoop","TicketManager","TicketIcon","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.Font","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","CameraAutoSize","Spine.Unity.Examples.BasicPlatformerController","UnityEngine.CharacterController","Spine.Unity.Examples.SkeletonGhost","Spine.Unity.SkeletonRenderer","Spine.Unity.Examples.RenderExistingMesh","Spine.Unity.Examples.SkeletonGraphicRenderTexture","Spine.Unity.SkeletonGraphic","Spine.Unity.Examples.SkeletonRenderTexture","Spine.Unity.Examples.SkeletonRenderTextureFadeout","Spine.Unity.Examples.SkeletonRenderTextureBase","Spine.Unity.Examples.SkeletonRagdoll","Spine.Unity.Examples.SkeletonRagdoll2D","Spine.Unity.Examples.SkeletonUtilityEyeConstraint","Spine.Unity.SkeletonUtilityBone","Spine.Unity.Examples.SkeletonUtilityGroundConstraint","Spine.Unity.Examples.SpineGauge","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonMecanim","Spine.Unity.SkeletonPartsRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.62f3";

Deserializers.productName = "Prj_Demo";

Deserializers.lunaInitializationTime = "12/18/2025 04:11:57";

Deserializers.lunaDaysRunning = "19.1";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1804";

Deserializers.runtimeAnalysisExcludedMethodsCount = "5466";

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

Deserializers.buildID = "33e11137-1d37-4702-8bdb-e5a40e96d1c7";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

