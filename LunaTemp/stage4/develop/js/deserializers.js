var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i652 = root || request.c( 'UnityEngine.JointSpring' )
  var i653 = data
  i652.spring = i653[0]
  i652.damper = i653[1]
  i652.targetPosition = i653[2]
  return i652
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i654 = root || request.c( 'UnityEngine.JointMotor' )
  var i655 = data
  i654.m_TargetVelocity = i655[0]
  i654.m_Force = i655[1]
  i654.m_FreeSpin = i655[2]
  return i654
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i656 = root || request.c( 'UnityEngine.JointLimits' )
  var i657 = data
  i656.m_Min = i657[0]
  i656.m_Max = i657[1]
  i656.m_Bounciness = i657[2]
  i656.m_BounceMinVelocity = i657[3]
  i656.m_ContactDistance = i657[4]
  i656.minBounce = i657[5]
  i656.maxBounce = i657[6]
  return i656
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i658 = root || request.c( 'UnityEngine.JointDrive' )
  var i659 = data
  i658.m_PositionSpring = i659[0]
  i658.m_PositionDamper = i659[1]
  i658.m_MaximumForce = i659[2]
  i658.m_UseAcceleration = i659[3]
  return i658
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i660 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i661 = data
  i660.m_Spring = i661[0]
  i660.m_Damper = i661[1]
  return i660
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i662 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i663 = data
  i662.m_Limit = i663[0]
  i662.m_Bounciness = i663[1]
  i662.m_ContactDistance = i663[2]
  return i662
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i664 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i665 = data
  i664.m_ExtremumSlip = i665[0]
  i664.m_ExtremumValue = i665[1]
  i664.m_AsymptoteSlip = i665[2]
  i664.m_AsymptoteValue = i665[3]
  i664.m_Stiffness = i665[4]
  return i664
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i666 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i667 = data
  i666.m_LowerAngle = i667[0]
  i666.m_UpperAngle = i667[1]
  return i666
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i668 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i669 = data
  i668.m_MotorSpeed = i669[0]
  i668.m_MaximumMotorTorque = i669[1]
  return i668
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i670 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i671 = data
  i670.m_DampingRatio = i671[0]
  i670.m_Frequency = i671[1]
  i670.m_Angle = i671[2]
  return i670
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i672 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i673 = data
  i672.m_LowerTranslation = i673[0]
  i672.m_UpperTranslation = i673[1]
  return i672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i675 = data
  i674.position = new pc.Vec3( i675[0], i675[1], i675[2] )
  i674.scale = new pc.Vec3( i675[3], i675[4], i675[5] )
  i674.rotation = new pc.Quat(i675[6], i675[7], i675[8], i675[9])
  return i674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i677 = data
  i676.color = new pc.Color(i677[0], i677[1], i677[2], i677[3])
  request.r(i677[4], i677[5], 0, i676, 'sprite')
  i676.flipX = !!i677[6]
  i676.flipY = !!i677[7]
  i676.drawMode = i677[8]
  i676.size = new pc.Vec2( i677[9], i677[10] )
  i676.tileMode = i677[11]
  i676.adaptiveModeThreshold = i677[12]
  i676.maskInteraction = i677[13]
  i676.spriteSortPoint = i677[14]
  i676.enabled = !!i677[15]
  request.r(i677[16], i677[17], 0, i676, 'sharedMaterial')
  var i679 = i677[18]
  var i678 = []
  for(var i = 0; i < i679.length; i += 2) {
  request.r(i679[i + 0], i679[i + 1], 2, i678, '')
  }
  i676.sharedMaterials = i678
  i676.receiveShadows = !!i677[19]
  i676.shadowCastingMode = i677[20]
  i676.sortingLayerID = i677[21]
  i676.sortingOrder = i677[22]
  i676.lightmapIndex = i677[23]
  i676.lightmapSceneIndex = i677[24]
  i676.lightmapScaleOffset = new pc.Vec4( i677[25], i677[26], i677[27], i677[28] )
  i676.lightProbeUsage = i677[29]
  i676.reflectionProbeUsage = i677[30]
  return i676
}

Deserializers["DragItem"] = function (request, data, root) {
  var i682 = root || request.c( 'DragItem' )
  var i683 = data
  i682.focusOutlineSize = i683[0]
  i682.outlineTweenTime = i683[1]
  i682.itemType = i683[2]
  i682.lockItem = !!i683[3]
  return i682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i685 = data
  i684.usedByComposite = !!i685[0]
  i684.autoTiling = !!i685[1]
  i684.size = new pc.Vec2( i685[2], i685[3] )
  i684.edgeRadius = i685[4]
  i684.enabled = !!i685[5]
  i684.isTrigger = !!i685[6]
  i684.usedByEffector = !!i685[7]
  i684.density = i685[8]
  i684.offset = new pc.Vec2( i685[9], i685[10] )
  request.r(i685[11], i685[12], 0, i684, 'material')
  return i684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i687 = data
  i686.bodyType = i687[0]
  request.r(i687[1], i687[2], 0, i686, 'material')
  i686.simulated = !!i687[3]
  i686.useAutoMass = !!i687[4]
  i686.mass = i687[5]
  i686.drag = i687[6]
  i686.angularDrag = i687[7]
  i686.gravityScale = i687[8]
  i686.collisionDetectionMode = i687[9]
  i686.sleepMode = i687[10]
  i686.constraints = i687[11]
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i689 = data
  i688.name = i689[0]
  i688.tagId = i689[1]
  i688.enabled = !!i689[2]
  i688.isStatic = !!i689[3]
  i688.layer = i689[4]
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i690 = root || new pc.UnityMaterial()
  var i691 = data
  i690.name = i691[0]
  request.r(i691[1], i691[2], 0, i690, 'shader')
  i690.renderQueue = i691[3]
  i690.enableInstancing = !!i691[4]
  var i693 = i691[5]
  var i692 = []
  for(var i = 0; i < i693.length; i += 1) {
    i692.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i693[i + 0]) );
  }
  i690.floatParameters = i692
  var i695 = i691[6]
  var i694 = []
  for(var i = 0; i < i695.length; i += 1) {
    i694.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i695[i + 0]) );
  }
  i690.colorParameters = i694
  var i697 = i691[7]
  var i696 = []
  for(var i = 0; i < i697.length; i += 1) {
    i696.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i697[i + 0]) );
  }
  i690.vectorParameters = i696
  var i699 = i691[8]
  var i698 = []
  for(var i = 0; i < i699.length; i += 1) {
    i698.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i699[i + 0]) );
  }
  i690.textureParameters = i698
  var i701 = i691[9]
  var i700 = []
  for(var i = 0; i < i701.length; i += 1) {
    i700.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i701[i + 0]) );
  }
  i690.materialFlags = i700
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i705 = data
  i704.name = i705[0]
  i704.value = i705[1]
  return i704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i709 = data
  i708.name = i709[0]
  i708.value = new pc.Color(i709[1], i709[2], i709[3], i709[4])
  return i708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i713 = data
  i712.name = i713[0]
  i712.value = new pc.Vec4( i713[1], i713[2], i713[3], i713[4] )
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i717 = data
  i716.name = i717[0]
  request.r(i717[1], i717[2], 0, i716, 'value')
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i721 = data
  i720.name = i721[0]
  i720.enabled = !!i721[1]
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i723 = data
  i722.name = i723[0]
  i722.width = i723[1]
  i722.height = i723[2]
  i722.mipmapCount = i723[3]
  i722.anisoLevel = i723[4]
  i722.filterMode = i723[5]
  i722.hdr = !!i723[6]
  i722.format = i723[7]
  i722.wrapMode = i723[8]
  i722.alphaIsTransparency = !!i723[9]
  i722.alphaSource = i723[10]
  i722.graphicsFormat = i723[11]
  i722.sRGBTexture = !!i723[12]
  i722.desiredColorSpace = i723[13]
  i722.wrapU = i723[14]
  i722.wrapV = i723[15]
  return i722
}

Deserializers["Disk"] = function (request, data, root) {
  var i724 = root || request.c( 'Disk' )
  var i725 = data
  i724.requiredCount = i725[0]
  i724.moveDistance = i725[1]
  i724.moveTime = i725[2]
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i727 = data
  request.r(i727[0], i727[1], 0, i726, 'animatorController')
  request.r(i727[2], i727[3], 0, i726, 'avatar')
  i726.updateMode = i727[4]
  i726.hasTransformHierarchy = !!i727[5]
  i726.applyRootMotion = !!i727[6]
  var i729 = i727[7]
  var i728 = []
  for(var i = 0; i < i729.length; i += 2) {
  request.r(i729[i + 0], i729[i + 1], 2, i728, '')
  }
  i726.humanBones = i728
  i726.enabled = !!i727[8]
  return i726
}

Deserializers["Tray"] = function (request, data, root) {
  var i732 = root || request.c( 'Tray' )
  var i733 = data
  i732.spacing = i733[0]
  i732.moveTime = i733[1]
  request.r(i733[2], i733[3], 0, i732, 'diskPrefab')
  request.r(i733[4], i733[5], 0, i732, 'diskTransform')
  i732.shrinkTime = i733[6]
  i732.itemToDiskTime = i733[7]
  i732.attachDelay = i733[8]
  i732.followSmooth = i733[9]
  i732.isCompleted = !!i733[10]
  var i735 = i733[11]
  var i734 = []
  for(var i = 0; i < i735.length; i += 2) {
  request.r(i735[i + 0], i735[i + 1], 2, i734, '')
  }
  i732.slots = i734
  request.r(i733[12], i733[13], 0, i732, 'fireObject')
  i732.diskItemScale = new pc.Vec3( i733[14], i733[15], i733[16] )
  return i732
}

Deserializers["Slot"] = function (request, data, root) {
  var i738 = root || request.c( 'Slot' )
  var i739 = data
  request.r(i739[0], i739[1], 0, i738, 'anchor')
  request.r(i739[2], i739[3], 0, i738, 'currentItem')
  return i738
}

Deserializers["HandHint"] = function (request, data, root) {
  var i740 = root || request.c( 'HandHint' )
  var i741 = data
  request.r(i741[0], i741[1], 0, i740, 'previewRenderer')
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i743 = data
  i742.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i743[0], i742.main)
  i742.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i743[1], i742.colorBySpeed)
  i742.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i743[2], i742.colorOverLifetime)
  i742.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i743[3], i742.emission)
  i742.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i743[4], i742.rotationBySpeed)
  i742.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i743[5], i742.rotationOverLifetime)
  i742.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i743[6], i742.shape)
  i742.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i743[7], i742.sizeBySpeed)
  i742.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i743[8], i742.sizeOverLifetime)
  i742.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i743[9], i742.textureSheetAnimation)
  i742.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i743[10], i742.velocityOverLifetime)
  i742.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i743[11], i742.noise)
  i742.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i743[12], i742.inheritVelocity)
  i742.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i743[13], i742.forceOverLifetime)
  i742.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i743[14], i742.limitVelocityOverLifetime)
  i742.useAutoRandomSeed = !!i743[15]
  i742.randomSeed = i743[16]
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i744 = root || new pc.ParticleSystemMain()
  var i745 = data
  i744.duration = i745[0]
  i744.loop = !!i745[1]
  i744.prewarm = !!i745[2]
  i744.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i745[3], i744.startDelay)
  i744.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i745[4], i744.startLifetime)
  i744.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i745[5], i744.startSpeed)
  i744.startSize3D = !!i745[6]
  i744.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i745[7], i744.startSizeX)
  i744.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i745[8], i744.startSizeY)
  i744.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i745[9], i744.startSizeZ)
  i744.startRotation3D = !!i745[10]
  i744.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i745[11], i744.startRotationX)
  i744.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i745[12], i744.startRotationY)
  i744.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i745[13], i744.startRotationZ)
  i744.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i745[14], i744.startColor)
  i744.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i745[15], i744.gravityModifier)
  i744.simulationSpace = i745[16]
  request.r(i745[17], i745[18], 0, i744, 'customSimulationSpace')
  i744.simulationSpeed = i745[19]
  i744.useUnscaledTime = !!i745[20]
  i744.scalingMode = i745[21]
  i744.playOnAwake = !!i745[22]
  i744.maxParticles = i745[23]
  i744.emitterVelocityMode = i745[24]
  i744.stopAction = i745[25]
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i746 = root || new pc.MinMaxCurve()
  var i747 = data
  i746.mode = i747[0]
  i746.curveMin = new pc.AnimationCurve( { keys_flow: i747[1] } )
  i746.curveMax = new pc.AnimationCurve( { keys_flow: i747[2] } )
  i746.curveMultiplier = i747[3]
  i746.constantMin = i747[4]
  i746.constantMax = i747[5]
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i748 = root || new pc.MinMaxGradient()
  var i749 = data
  i748.mode = i749[0]
  i748.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i749[1], i748.gradientMin)
  i748.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i749[2], i748.gradientMax)
  i748.colorMin = new pc.Color(i749[3], i749[4], i749[5], i749[6])
  i748.colorMax = new pc.Color(i749[7], i749[8], i749[9], i749[10])
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i751 = data
  i750.mode = i751[0]
  var i753 = i751[1]
  var i752 = []
  for(var i = 0; i < i753.length; i += 1) {
    i752.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i753[i + 0]) );
  }
  i750.colorKeys = i752
  var i755 = i751[2]
  var i754 = []
  for(var i = 0; i < i755.length; i += 1) {
    i754.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i755[i + 0]) );
  }
  i750.alphaKeys = i754
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i756 = root || new pc.ParticleSystemColorBySpeed()
  var i757 = data
  i756.enabled = !!i757[0]
  i756.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i757[1], i756.color)
  i756.range = new pc.Vec2( i757[2], i757[3] )
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i761 = data
  i760.color = new pc.Color(i761[0], i761[1], i761[2], i761[3])
  i760.time = i761[4]
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i765 = data
  i764.alpha = i765[0]
  i764.time = i765[1]
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i766 = root || new pc.ParticleSystemColorOverLifetime()
  var i767 = data
  i766.enabled = !!i767[0]
  i766.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i767[1], i766.color)
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i768 = root || new pc.ParticleSystemEmitter()
  var i769 = data
  i768.enabled = !!i769[0]
  i768.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i769[1], i768.rateOverTime)
  i768.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i769[2], i768.rateOverDistance)
  var i771 = i769[3]
  var i770 = []
  for(var i = 0; i < i771.length; i += 1) {
    i770.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i771[i + 0]) );
  }
  i768.bursts = i770
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i774 = root || new pc.ParticleSystemBurst()
  var i775 = data
  i774.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i775[0], i774.count)
  i774.cycleCount = i775[1]
  i774.minCount = i775[2]
  i774.maxCount = i775[3]
  i774.repeatInterval = i775[4]
  i774.time = i775[5]
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i776 = root || new pc.ParticleSystemRotationBySpeed()
  var i777 = data
  i776.enabled = !!i777[0]
  i776.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i777[1], i776.x)
  i776.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i777[2], i776.y)
  i776.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i777[3], i776.z)
  i776.separateAxes = !!i777[4]
  i776.range = new pc.Vec2( i777[5], i777[6] )
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i778 = root || new pc.ParticleSystemRotationOverLifetime()
  var i779 = data
  i778.enabled = !!i779[0]
  i778.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i779[1], i778.x)
  i778.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i779[2], i778.y)
  i778.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i779[3], i778.z)
  i778.separateAxes = !!i779[4]
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i780 = root || new pc.ParticleSystemShape()
  var i781 = data
  i780.enabled = !!i781[0]
  i780.shapeType = i781[1]
  i780.randomDirectionAmount = i781[2]
  i780.sphericalDirectionAmount = i781[3]
  i780.randomPositionAmount = i781[4]
  i780.alignToDirection = !!i781[5]
  i780.radius = i781[6]
  i780.radiusMode = i781[7]
  i780.radiusSpread = i781[8]
  i780.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i781[9], i780.radiusSpeed)
  i780.radiusThickness = i781[10]
  i780.angle = i781[11]
  i780.length = i781[12]
  i780.boxThickness = new pc.Vec3( i781[13], i781[14], i781[15] )
  i780.meshShapeType = i781[16]
  request.r(i781[17], i781[18], 0, i780, 'mesh')
  request.r(i781[19], i781[20], 0, i780, 'meshRenderer')
  request.r(i781[21], i781[22], 0, i780, 'skinnedMeshRenderer')
  i780.useMeshMaterialIndex = !!i781[23]
  i780.meshMaterialIndex = i781[24]
  i780.useMeshColors = !!i781[25]
  i780.normalOffset = i781[26]
  i780.arc = i781[27]
  i780.arcMode = i781[28]
  i780.arcSpread = i781[29]
  i780.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i781[30], i780.arcSpeed)
  i780.donutRadius = i781[31]
  i780.position = new pc.Vec3( i781[32], i781[33], i781[34] )
  i780.rotation = new pc.Vec3( i781[35], i781[36], i781[37] )
  i780.scale = new pc.Vec3( i781[38], i781[39], i781[40] )
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i782 = root || new pc.ParticleSystemSizeBySpeed()
  var i783 = data
  i782.enabled = !!i783[0]
  i782.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i783[1], i782.x)
  i782.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i783[2], i782.y)
  i782.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i783[3], i782.z)
  i782.separateAxes = !!i783[4]
  i782.range = new pc.Vec2( i783[5], i783[6] )
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i784 = root || new pc.ParticleSystemSizeOverLifetime()
  var i785 = data
  i784.enabled = !!i785[0]
  i784.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i785[1], i784.x)
  i784.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i785[2], i784.y)
  i784.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i785[3], i784.z)
  i784.separateAxes = !!i785[4]
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i786 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i787 = data
  i786.enabled = !!i787[0]
  i786.mode = i787[1]
  i786.animation = i787[2]
  i786.numTilesX = i787[3]
  i786.numTilesY = i787[4]
  i786.useRandomRow = !!i787[5]
  i786.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i787[6], i786.frameOverTime)
  i786.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i787[7], i786.startFrame)
  i786.cycleCount = i787[8]
  i786.rowIndex = i787[9]
  i786.flipU = i787[10]
  i786.flipV = i787[11]
  i786.spriteCount = i787[12]
  var i789 = i787[13]
  var i788 = []
  for(var i = 0; i < i789.length; i += 2) {
  request.r(i789[i + 0], i789[i + 1], 2, i788, '')
  }
  i786.sprites = i788
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i792 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i793 = data
  i792.enabled = !!i793[0]
  i792.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[1], i792.x)
  i792.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[2], i792.y)
  i792.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[3], i792.z)
  i792.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[4], i792.radial)
  i792.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[5], i792.speedModifier)
  i792.space = i793[6]
  i792.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[7], i792.orbitalX)
  i792.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[8], i792.orbitalY)
  i792.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[9], i792.orbitalZ)
  i792.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[10], i792.orbitalOffsetX)
  i792.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[11], i792.orbitalOffsetY)
  i792.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[12], i792.orbitalOffsetZ)
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i794 = root || new pc.ParticleSystemNoise()
  var i795 = data
  i794.enabled = !!i795[0]
  i794.separateAxes = !!i795[1]
  i794.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[2], i794.strengthX)
  i794.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[3], i794.strengthY)
  i794.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[4], i794.strengthZ)
  i794.frequency = i795[5]
  i794.damping = !!i795[6]
  i794.octaveCount = i795[7]
  i794.octaveMultiplier = i795[8]
  i794.octaveScale = i795[9]
  i794.quality = i795[10]
  i794.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[11], i794.scrollSpeed)
  i794.scrollSpeedMultiplier = i795[12]
  i794.remapEnabled = !!i795[13]
  i794.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[14], i794.remapX)
  i794.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[15], i794.remapY)
  i794.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[16], i794.remapZ)
  i794.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[17], i794.positionAmount)
  i794.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[18], i794.rotationAmount)
  i794.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[19], i794.sizeAmount)
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i796 = root || new pc.ParticleSystemInheritVelocity()
  var i797 = data
  i796.enabled = !!i797[0]
  i796.mode = i797[1]
  i796.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[2], i796.curve)
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i798 = root || new pc.ParticleSystemForceOverLifetime()
  var i799 = data
  i798.enabled = !!i799[0]
  i798.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i799[1], i798.x)
  i798.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i799[2], i798.y)
  i798.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i799[3], i798.z)
  i798.space = i799[4]
  i798.randomized = !!i799[5]
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i800 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i801 = data
  i800.enabled = !!i801[0]
  i800.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i801[1], i800.limit)
  i800.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i801[2], i800.limitX)
  i800.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i801[3], i800.limitY)
  i800.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i801[4], i800.limitZ)
  i800.dampen = i801[5]
  i800.separateAxes = !!i801[6]
  i800.space = i801[7]
  i800.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i801[8], i800.drag)
  i800.multiplyDragByParticleSize = !!i801[9]
  i800.multiplyDragByParticleVelocity = !!i801[10]
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i803 = data
  request.r(i803[0], i803[1], 0, i802, 'mesh')
  i802.meshCount = i803[2]
  i802.activeVertexStreamsCount = i803[3]
  i802.alignment = i803[4]
  i802.renderMode = i803[5]
  i802.sortMode = i803[6]
  i802.lengthScale = i803[7]
  i802.velocityScale = i803[8]
  i802.cameraVelocityScale = i803[9]
  i802.normalDirection = i803[10]
  i802.sortingFudge = i803[11]
  i802.minParticleSize = i803[12]
  i802.maxParticleSize = i803[13]
  i802.pivot = new pc.Vec3( i803[14], i803[15], i803[16] )
  request.r(i803[17], i803[18], 0, i802, 'trailMaterial')
  i802.applyActiveColorSpace = !!i803[19]
  i802.enabled = !!i803[20]
  request.r(i803[21], i803[22], 0, i802, 'sharedMaterial')
  var i805 = i803[23]
  var i804 = []
  for(var i = 0; i < i805.length; i += 2) {
  request.r(i805[i + 0], i805[i + 1], 2, i804, '')
  }
  i802.sharedMaterials = i804
  i802.receiveShadows = !!i803[24]
  i802.shadowCastingMode = i803[25]
  i802.sortingLayerID = i803[26]
  i802.sortingOrder = i803[27]
  i802.lightmapIndex = i803[28]
  i802.lightmapSceneIndex = i803[29]
  i802.lightmapScaleOffset = new pc.Vec4( i803[30], i803[31], i803[32], i803[33] )
  i802.lightProbeUsage = i803[34]
  i802.reflectionProbeUsage = i803[35]
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i807 = data
  i806.name = i807[0]
  i806.index = i807[1]
  i806.startup = !!i807[2]
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i809 = data
  i808.aspect = i809[0]
  i808.orthographic = !!i809[1]
  i808.orthographicSize = i809[2]
  i808.backgroundColor = new pc.Color(i809[3], i809[4], i809[5], i809[6])
  i808.nearClipPlane = i809[7]
  i808.farClipPlane = i809[8]
  i808.fieldOfView = i809[9]
  i808.depth = i809[10]
  i808.clearFlags = i809[11]
  i808.cullingMask = i809[12]
  i808.rect = i809[13]
  request.r(i809[14], i809[15], 0, i808, 'targetTexture')
  i808.usePhysicalProperties = !!i809[16]
  i808.focalLength = i809[17]
  i808.sensorSize = new pc.Vec2( i809[18], i809[19] )
  i808.lensShift = new pc.Vec2( i809[20], i809[21] )
  i808.gateFit = i809[22]
  i808.commandBufferCount = i809[23]
  i808.cameraType = i809[24]
  i808.enabled = !!i809[25]
  return i808
}

Deserializers["CheckSize"] = function (request, data, root) {
  var i810 = root || request.c( 'CheckSize' )
  var i811 = data
  i810.size16by9 = i811[0]
  i810.size18by9 = i811[1]
  i810.sizeLong = i811[2]
  request.r(i811[3], i811[4], 0, i810, 'diskTransform')
  i810.diskPos16by9 = new pc.Vec3( i811[5], i811[6], i811[7] )
  i810.diskPosLong = new pc.Vec3( i811[8], i811[9], i811[10] )
  request.r(i811[11], i811[12], 0, i810, 'trayManager')
  request.r(i811[13], i811[14], 0, i810, 'button_doc')
  request.r(i811[15], i811[16], 0, i810, 'target')
  request.r(i811[17], i811[18], 0, i810, 'timer')
  request.r(i811[19], i811[20], 0, i810, 'logoGame')
  request.r(i811[21], i811[22], 0, i810, 'buttonGame')
  return i810
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i812 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i813 = data
  request.r(i813[0], i813[1], 0, i812, 'm_FirstSelected')
  i812.m_sendNavigationEvents = !!i813[2]
  i812.m_DragThreshold = i813[3]
  return i812
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i814 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i815 = data
  i814.m_HorizontalAxis = i815[0]
  i814.m_VerticalAxis = i815[1]
  i814.m_SubmitButton = i815[2]
  i814.m_CancelButton = i815[3]
  i814.m_InputActionsPerSecond = i815[4]
  i814.m_RepeatDelay = i815[5]
  i814.m_ForceModuleActive = !!i815[6]
  i814.m_SendPointerHoverToParent = !!i815[7]
  return i814
}

Deserializers["TrayManager"] = function (request, data, root) {
  var i816 = root || request.c( 'TrayManager' )
  var i817 = data
  i816.spacing = i817[0]
  i816.visibleCount = i817[1]
  i816.moveTime = i817[2]
  var i819 = i817[3]
  var i818 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i819.length; i += 2) {
  request.r(i819[i + 0], i819[i + 1], 1, i818, '')
  }
  i816.listTray = i818
  i816.curve = new pc.AnimationCurve( { keys_flow: i817[4] } )
  i816.canCountIdle = !!i817[5]
  i816.spawnHeightMultiplier = i817[6]
  i816.isFirstTutorial = !!i817[7]
  i816.tutorialDelay = i817[8]
  i816.idleTimer = i817[9]
  i816.tutorialEnabled = !!i817[10]
  request.r(i817[11], i817[12], 0, i816, 'manualTray')
  request.r(i817[13], i817[14], 0, i816, 'manualItem')
  i816.justEndedInteract = !!i817[15]
  i816.step = i817[16]
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i823 = data
  i822.frontSortingLayerID = i823[0]
  i822.frontSortingOrder = i823[1]
  i822.backSortingLayerID = i823[2]
  i822.backSortingOrder = i823[3]
  i822.alphaCutoff = i823[4]
  request.r(i823[5], i823[6], 0, i822, 'sprite')
  i822.tileMode = i823[7]
  i822.isCustomRangeActive = !!i823[8]
  i822.spriteSortPoint = i823[9]
  i822.enabled = !!i823[10]
  request.r(i823[11], i823[12], 0, i822, 'sharedMaterial')
  var i825 = i823[13]
  var i824 = []
  for(var i = 0; i < i825.length; i += 2) {
  request.r(i825[i + 0], i825[i + 1], 2, i824, '')
  }
  i822.sharedMaterials = i824
  i822.receiveShadows = !!i823[14]
  i822.shadowCastingMode = i823[15]
  i822.sortingLayerID = i823[16]
  i822.sortingOrder = i823[17]
  i822.lightmapIndex = i823[18]
  i822.lightmapSceneIndex = i823[19]
  i822.lightmapScaleOffset = new pc.Vec4( i823[20], i823[21], i823[22], i823[23] )
  i822.lightProbeUsage = i823[24]
  i822.reflectionProbeUsage = i823[25]
  return i822
}

Deserializers["ConveyorBelt"] = function (request, data, root) {
  var i826 = root || request.c( 'ConveyorBelt' )
  var i827 = data
  i826.speed = i827[0]
  i826.spacing = i827[1]
  i826.leftLimit = i827[2]
  i826.removeFirstCount = i827[3]
  request.r(i827[4], i827[5], 0, i826, 'tutorial')
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i829 = data
  i828.pivot = new pc.Vec2( i829[0], i829[1] )
  i828.anchorMin = new pc.Vec2( i829[2], i829[3] )
  i828.anchorMax = new pc.Vec2( i829[4], i829[5] )
  i828.sizeDelta = new pc.Vec2( i829[6], i829[7] )
  i828.anchoredPosition3D = new pc.Vec3( i829[8], i829[9], i829[10] )
  i828.rotation = new pc.Quat(i829[11], i829[12], i829[13], i829[14])
  i828.scale = new pc.Vec3( i829[15], i829[16], i829[17] )
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i831 = data
  i830.planeDistance = i831[0]
  i830.referencePixelsPerUnit = i831[1]
  i830.isFallbackOverlay = !!i831[2]
  i830.renderMode = i831[3]
  i830.renderOrder = i831[4]
  i830.sortingLayerName = i831[5]
  i830.sortingOrder = i831[6]
  i830.scaleFactor = i831[7]
  request.r(i831[8], i831[9], 0, i830, 'worldCamera')
  i830.overrideSorting = !!i831[10]
  i830.pixelPerfect = !!i831[11]
  i830.targetDisplay = i831[12]
  i830.overridePixelPerfect = !!i831[13]
  i830.enabled = !!i831[14]
  return i830
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i832 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i833 = data
  i832.m_UiScaleMode = i833[0]
  i832.m_ReferencePixelsPerUnit = i833[1]
  i832.m_ScaleFactor = i833[2]
  i832.m_ReferenceResolution = new pc.Vec2( i833[3], i833[4] )
  i832.m_ScreenMatchMode = i833[5]
  i832.m_MatchWidthOrHeight = i833[6]
  i832.m_PhysicalUnit = i833[7]
  i832.m_FallbackScreenDPI = i833[8]
  i832.m_DefaultSpriteDPI = i833[9]
  i832.m_DynamicPixelsPerUnit = i833[10]
  i832.m_PresetInfoIsWorld = !!i833[11]
  return i832
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i834 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i835 = data
  i834.m_IgnoreReversedGraphics = !!i835[0]
  i834.m_BlockingObjects = i835[1]
  i834.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i835[2] )
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i837 = data
  i836.cullTransparentMesh = !!i837[0]
  return i836
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i838 = root || request.c( 'UnityEngine.UI.Image' )
  var i839 = data
  request.r(i839[0], i839[1], 0, i838, 'm_Sprite')
  i838.m_Type = i839[2]
  i838.m_PreserveAspect = !!i839[3]
  i838.m_FillCenter = !!i839[4]
  i838.m_FillMethod = i839[5]
  i838.m_FillAmount = i839[6]
  i838.m_FillClockwise = !!i839[7]
  i838.m_FillOrigin = i839[8]
  i838.m_UseSpriteMesh = !!i839[9]
  i838.m_PixelsPerUnitMultiplier = i839[10]
  request.r(i839[11], i839[12], 0, i838, 'm_Material')
  i838.m_Maskable = !!i839[13]
  i838.m_Color = new pc.Color(i839[14], i839[15], i839[16], i839[17])
  i838.m_RaycastTarget = !!i839[18]
  i838.m_RaycastPadding = new pc.Vec4( i839[19], i839[20], i839[21], i839[22] )
  return i838
}

Deserializers["EndCart_Win"] = function (request, data, root) {
  var i840 = root || request.c( 'EndCart_Win' )
  var i841 = data
  request.r(i841[0], i841[1], 0, i840, 'confettiLeft')
  request.r(i841[2], i841[3], 0, i840, 'confettiRight')
  request.r(i841[4], i841[5], 0, i840, 'winText')
  request.r(i841[6], i841[7], 0, i840, 'chest')
  request.r(i841[8], i841[9], 0, i840, 'button')
  i840.textDelay = i841[10]
  i840.chestDelay = i841[11]
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i843 = data
  request.r(i843[0], i843[1], 0, i842, 'additionalVertexStreams')
  i842.enabled = !!i843[2]
  request.r(i843[3], i843[4], 0, i842, 'sharedMaterial')
  var i845 = i843[5]
  var i844 = []
  for(var i = 0; i < i845.length; i += 2) {
  request.r(i845[i + 0], i845[i + 1], 2, i844, '')
  }
  i842.sharedMaterials = i844
  i842.receiveShadows = !!i843[6]
  i842.shadowCastingMode = i843[7]
  i842.sortingLayerID = i843[8]
  i842.sortingOrder = i843[9]
  i842.lightmapIndex = i843[10]
  i842.lightmapSceneIndex = i843[11]
  i842.lightmapScaleOffset = new pc.Vec4( i843[12], i843[13], i843[14], i843[15] )
  i842.lightProbeUsage = i843[16]
  i842.reflectionProbeUsage = i843[17]
  return i842
}

Deserializers["Spine.Unity.SkeletonAnimation"] = function (request, data, root) {
  var i846 = root || request.c( 'Spine.Unity.SkeletonAnimation' )
  var i847 = data
  i846.loop = !!i847[0]
  i846.timeScale = i847[1]
  request.r(i847[2], i847[3], 0, i846, 'skeletonDataAsset')
  i846.initialSkinName = i847[4]
  i846.fixPrefabOverrideViaMeshFilter = i847[5]
  i846.initialFlipX = !!i847[6]
  i846.initialFlipY = !!i847[7]
  i846.updateWhenInvisible = i847[8]
  i846.zSpacing = i847[9]
  i846.useClipping = !!i847[10]
  i846.immutableTriangles = !!i847[11]
  i846.pmaVertexColors = !!i847[12]
  i846.clearStateOnDisable = !!i847[13]
  i846.tintBlack = !!i847[14]
  i846.singleSubmesh = !!i847[15]
  i846.fixDrawOrder = !!i847[16]
  i846.addNormals = !!i847[17]
  i846.calculateTangents = !!i847[18]
  i846.maskInteraction = i847[19]
  i846.maskMaterials = request.d('Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials', i847[20], i846.maskMaterials)
  i846.disableRenderingOnOverride = !!i847[21]
  i846.updateTiming = i847[22]
  i846.unscaledTime = !!i847[23]
  i846._animationName = i847[24]
  var i849 = i847[25]
  var i848 = []
  for(var i = 0; i < i849.length; i += 1) {
    i848.push( i849[i + 0] );
  }
  i846.separatorSlotNames = i848
  i846.physicsPositionInheritanceFactor = new pc.Vec2( i847[26], i847[27] )
  i846.physicsRotationInheritanceFactor = i847[28]
  request.r(i847[29], i847[30], 0, i846, 'physicsMovementRelativeTo')
  return i846
}

Deserializers["Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials"] = function (request, data, root) {
  var i850 = root || request.c( 'Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials' )
  var i851 = data
  var i853 = i851[0]
  var i852 = []
  for(var i = 0; i < i853.length; i += 2) {
  request.r(i853[i + 0], i853[i + 1], 2, i852, '')
  }
  i850.materialsMaskDisabled = i852
  var i855 = i851[1]
  var i854 = []
  for(var i = 0; i < i855.length; i += 2) {
  request.r(i855[i + 0], i855[i + 1], 2, i854, '')
  }
  i850.materialsInsideMask = i854
  var i857 = i851[2]
  var i856 = []
  for(var i = 0; i < i857.length; i += 2) {
  request.r(i857[i + 0], i857[i + 1], 2, i856, '')
  }
  i850.materialsOutsideMask = i856
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i861 = data
  request.r(i861[0], i861[1], 0, i860, 'sharedMesh')
  return i860
}

Deserializers["Button"] = function (request, data, root) {
  var i862 = root || request.c( 'Button' )
  var i863 = data
  return i862
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i864 = root || request.c( 'UnityEngine.UI.Button' )
  var i865 = data
  i864.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i865[0], i864.m_OnClick)
  i864.m_Navigation = request.d('UnityEngine.UI.Navigation', i865[1], i864.m_Navigation)
  i864.m_Transition = i865[2]
  i864.m_Colors = request.d('UnityEngine.UI.ColorBlock', i865[3], i864.m_Colors)
  i864.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i865[4], i864.m_SpriteState)
  i864.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i865[5], i864.m_AnimationTriggers)
  i864.m_Interactable = !!i865[6]
  request.r(i865[7], i865[8], 0, i864, 'm_TargetGraphic')
  return i864
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i866 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i867 = data
  i866.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i867[0], i866.m_PersistentCalls)
  return i866
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i868 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i869 = data
  var i871 = i869[0]
  var i870 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i871.length; i += 1) {
    i870.add(request.d('UnityEngine.Events.PersistentCall', i871[i + 0]));
  }
  i868.m_Calls = i870
  return i868
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i874 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i875 = data
  request.r(i875[0], i875[1], 0, i874, 'm_Target')
  i874.m_TargetAssemblyTypeName = i875[2]
  i874.m_MethodName = i875[3]
  i874.m_Mode = i875[4]
  i874.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i875[5], i874.m_Arguments)
  i874.m_CallState = i875[6]
  return i874
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i876 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i877 = data
  request.r(i877[0], i877[1], 0, i876, 'm_ObjectArgument')
  i876.m_ObjectArgumentAssemblyTypeName = i877[2]
  i876.m_IntArgument = i877[3]
  i876.m_FloatArgument = i877[4]
  i876.m_StringArgument = i877[5]
  i876.m_BoolArgument = !!i877[6]
  return i876
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i878 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i879 = data
  i878.m_Mode = i879[0]
  i878.m_WrapAround = !!i879[1]
  request.r(i879[2], i879[3], 0, i878, 'm_SelectOnUp')
  request.r(i879[4], i879[5], 0, i878, 'm_SelectOnDown')
  request.r(i879[6], i879[7], 0, i878, 'm_SelectOnLeft')
  request.r(i879[8], i879[9], 0, i878, 'm_SelectOnRight')
  return i878
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i880 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i881 = data
  i880.m_NormalColor = new pc.Color(i881[0], i881[1], i881[2], i881[3])
  i880.m_HighlightedColor = new pc.Color(i881[4], i881[5], i881[6], i881[7])
  i880.m_PressedColor = new pc.Color(i881[8], i881[9], i881[10], i881[11])
  i880.m_SelectedColor = new pc.Color(i881[12], i881[13], i881[14], i881[15])
  i880.m_DisabledColor = new pc.Color(i881[16], i881[17], i881[18], i881[19])
  i880.m_ColorMultiplier = i881[20]
  i880.m_FadeDuration = i881[21]
  return i880
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i882 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i883 = data
  request.r(i883[0], i883[1], 0, i882, 'm_HighlightedSprite')
  request.r(i883[2], i883[3], 0, i882, 'm_PressedSprite')
  request.r(i883[4], i883[5], 0, i882, 'm_SelectedSprite')
  request.r(i883[6], i883[7], 0, i882, 'm_DisabledSprite')
  return i882
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i884 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i885 = data
  i884.m_NormalTrigger = i885[0]
  i884.m_HighlightedTrigger = i885[1]
  i884.m_PressedTrigger = i885[2]
  i884.m_SelectedTrigger = i885[3]
  i884.m_DisabledTrigger = i885[4]
  return i884
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i886 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i887 = data
  i886.m_hasFontAssetChanged = !!i887[0]
  request.r(i887[1], i887[2], 0, i886, 'm_baseMaterial')
  i886.m_maskOffset = new pc.Vec4( i887[3], i887[4], i887[5], i887[6] )
  i886.m_text = i887[7]
  i886.m_isRightToLeft = !!i887[8]
  request.r(i887[9], i887[10], 0, i886, 'm_fontAsset')
  request.r(i887[11], i887[12], 0, i886, 'm_sharedMaterial')
  var i889 = i887[13]
  var i888 = []
  for(var i = 0; i < i889.length; i += 2) {
  request.r(i889[i + 0], i889[i + 1], 2, i888, '')
  }
  i886.m_fontSharedMaterials = i888
  request.r(i887[14], i887[15], 0, i886, 'm_fontMaterial')
  var i891 = i887[16]
  var i890 = []
  for(var i = 0; i < i891.length; i += 2) {
  request.r(i891[i + 0], i891[i + 1], 2, i890, '')
  }
  i886.m_fontMaterials = i890
  i886.m_fontColor32 = UnityEngine.Color32.ConstructColor(i887[17], i887[18], i887[19], i887[20])
  i886.m_fontColor = new pc.Color(i887[21], i887[22], i887[23], i887[24])
  i886.m_enableVertexGradient = !!i887[25]
  i886.m_colorMode = i887[26]
  i886.m_fontColorGradient = request.d('TMPro.VertexGradient', i887[27], i886.m_fontColorGradient)
  request.r(i887[28], i887[29], 0, i886, 'm_fontColorGradientPreset')
  request.r(i887[30], i887[31], 0, i886, 'm_spriteAsset')
  i886.m_tintAllSprites = !!i887[32]
  request.r(i887[33], i887[34], 0, i886, 'm_StyleSheet')
  i886.m_TextStyleHashCode = i887[35]
  i886.m_overrideHtmlColors = !!i887[36]
  i886.m_faceColor = UnityEngine.Color32.ConstructColor(i887[37], i887[38], i887[39], i887[40])
  i886.m_fontSize = i887[41]
  i886.m_fontSizeBase = i887[42]
  i886.m_fontWeight = i887[43]
  i886.m_enableAutoSizing = !!i887[44]
  i886.m_fontSizeMin = i887[45]
  i886.m_fontSizeMax = i887[46]
  i886.m_fontStyle = i887[47]
  i886.m_HorizontalAlignment = i887[48]
  i886.m_VerticalAlignment = i887[49]
  i886.m_textAlignment = i887[50]
  i886.m_characterSpacing = i887[51]
  i886.m_wordSpacing = i887[52]
  i886.m_lineSpacing = i887[53]
  i886.m_lineSpacingMax = i887[54]
  i886.m_paragraphSpacing = i887[55]
  i886.m_charWidthMaxAdj = i887[56]
  i886.m_enableWordWrapping = !!i887[57]
  i886.m_wordWrappingRatios = i887[58]
  i886.m_overflowMode = i887[59]
  request.r(i887[60], i887[61], 0, i886, 'm_linkedTextComponent')
  request.r(i887[62], i887[63], 0, i886, 'parentLinkedComponent')
  i886.m_enableKerning = !!i887[64]
  i886.m_enableExtraPadding = !!i887[65]
  i886.checkPaddingRequired = !!i887[66]
  i886.m_isRichText = !!i887[67]
  i886.m_parseCtrlCharacters = !!i887[68]
  i886.m_isOrthographic = !!i887[69]
  i886.m_isCullingEnabled = !!i887[70]
  i886.m_horizontalMapping = i887[71]
  i886.m_verticalMapping = i887[72]
  i886.m_uvLineOffset = i887[73]
  i886.m_geometrySortingOrder = i887[74]
  i886.m_IsTextObjectScaleStatic = !!i887[75]
  i886.m_VertexBufferAutoSizeReduction = !!i887[76]
  i886.m_useMaxVisibleDescender = !!i887[77]
  i886.m_pageToDisplay = i887[78]
  i886.m_margin = new pc.Vec4( i887[79], i887[80], i887[81], i887[82] )
  i886.m_isUsingLegacyAnimationComponent = !!i887[83]
  i886.m_isVolumetricText = !!i887[84]
  request.r(i887[85], i887[86], 0, i886, 'm_Material')
  i886.m_Maskable = !!i887[87]
  i886.m_Color = new pc.Color(i887[88], i887[89], i887[90], i887[91])
  i886.m_RaycastTarget = !!i887[92]
  i886.m_RaycastPadding = new pc.Vec4( i887[93], i887[94], i887[95], i887[96] )
  return i886
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i892 = root || request.c( 'TMPro.VertexGradient' )
  var i893 = data
  i892.topLeft = new pc.Color(i893[0], i893[1], i893[2], i893[3])
  i892.topRight = new pc.Color(i893[4], i893[5], i893[6], i893[7])
  i892.bottomLeft = new pc.Color(i893[8], i893[9], i893[10], i893[11])
  i892.bottomRight = new pc.Color(i893[12], i893[13], i893[14], i893[15])
  return i892
}

Deserializers["AudioManager"] = function (request, data, root) {
  var i894 = root || request.c( 'AudioManager' )
  var i895 = data
  request.r(i895[0], i895[1], 0, i894, 'bgmSource')
  request.r(i895[2], i895[3], 0, i894, 'sfxSource')
  request.r(i895[4], i895[5], 0, i894, 'bgm')
  request.r(i895[6], i895[7], 0, i894, 'drag')
  request.r(i895[8], i895[9], 0, i894, 'drog')
  request.r(i895[10], i895[11], 0, i894, 'lose')
  request.r(i895[12], i895[13], 0, i894, 'pop')
  request.r(i895[14], i895[15], 0, i894, 'wood')
  request.r(i895[16], i895[17], 0, i894, 'win')
  request.r(i895[18], i895[19], 0, i894, 'warningTick')
  request.r(i895[20], i895[21], 0, i894, 'match')
  request.r(i895[22], i895[23], 0, i894, 'sake')
  return i894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i897 = data
  request.r(i897[0], i897[1], 0, i896, 'clip')
  request.r(i897[2], i897[3], 0, i896, 'outputAudioMixerGroup')
  i896.playOnAwake = !!i897[4]
  i896.loop = !!i897[5]
  i896.time = i897[6]
  i896.volume = i897[7]
  i896.pitch = i897[8]
  i896.enabled = !!i897[9]
  return i896
}

Deserializers["GameManager"] = function (request, data, root) {
  var i898 = root || request.c( 'GameManager' )
  var i899 = data
  request.r(i899[0], i899[1], 0, i898, 'pointText')
  i898.point = i899[2]
  request.r(i899[3], i899[4], 0, i898, 'ECWin')
  i898.startTimer = !!i899[5]
  i898.ticketCount = i899[6]
  i898.isClickToLog = !!i899[7]
  i898.clicksToLog = i899[8]
  i898.isMatch = !!i899[9]
  i898.clickCount = i899[10]
  i898.isClick = !!i899[11]
  i898.finishGame = !!i899[12]
  i898.startGame = !!i899[13]
  i898.isCheckWin = !!i899[14]
  i898.isCheckLose = !!i899[15]
  i898.isClickStore = !!i899[16]
  return i898
}

Deserializers["TutorialManager"] = function (request, data, root) {
  var i900 = root || request.c( 'TutorialManager' )
  var i901 = data
  request.r(i901[0], i901[1], 0, i900, 'handPrefab')
  return i900
}

Deserializers["ScalePopLoop"] = function (request, data, root) {
  var i902 = root || request.c( 'ScalePopLoop' )
  var i903 = data
  i902.minScale = new pc.Vec3( i903[0], i903[1], i903[2] )
  i902.maxScale = new pc.Vec3( i903[3], i903[4], i903[5] )
  i902.duration = i903[6]
  i902.ease = i903[7]
  return i902
}

Deserializers["NotiBox"] = function (request, data, root) {
  var i904 = root || request.c( 'NotiBox' )
  var i905 = data
  request.r(i905[0], i905[1], 0, i904, 'box')
  request.r(i905[2], i905[3], 0, i904, 'bg')
  i904.delay = i905[4]
  i904.animTime = i905[5]
  return i904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i907 = data
  i906.m_Alpha = i907[0]
  i906.m_Interactable = !!i907[1]
  i906.m_BlocksRaycasts = !!i907[2]
  i906.m_IgnoreParentGroups = !!i907[3]
  i906.enabled = !!i907[4]
  return i906
}

Deserializers["EndCart_Lose"] = function (request, data, root) {
  var i908 = root || request.c( 'EndCart_Lose' )
  var i909 = data
  request.r(i909[0], i909[1], 0, i908, 'actionButton')
  request.r(i909[2], i909[3], 0, i908, 'emoji')
  request.r(i909[4], i909[5], 0, i908, 'logo')
  request.r(i909[6], i909[7], 0, i908, 'icon')
  request.r(i909[8], i909[9], 0, i908, 'praticle')
  i908.buttonScaleTime = i909[10]
  i908.itemStartScale = i909[11]
  i908.itemPopScale = i909[12]
  i908.itemInTime = i909[13]
  i908.itemSettleTime = i909[14]
  i908.itemFinalScale = i909[15]
  i908.emojiFinalScale = i909[16]
  i908.otherItemFinalScale = i909[17]
  return i908
}

Deserializers["RotateLoop"] = function (request, data, root) {
  var i910 = root || request.c( 'RotateLoop' )
  var i911 = data
  i910.rotateSpeed = i911[0]
  return i910
}

Deserializers["TicketManager"] = function (request, data, root) {
  var i912 = root || request.c( 'TicketManager' )
  var i913 = data
  var i915 = i913[0]
  var i914 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i915.length; i += 2) {
  request.r(i915[i + 0], i915[i + 1], 1, i914, '')
  }
  i912.tickets = i914
  i912.moveTime = i913[1]
  i912.bigScale = new pc.Vec3( i913[2], i913[3], i913[4] )
  i912.smallScale = new pc.Vec3( i913[5], i913[6], i913[7] )
  i912.slotX = i913[8]
  i912.slotY = i913[9]
  var i917 = i913[10]
  var i916 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector3')))
  for(var i = 0; i < i917.length; i += 3) {
    i916.add(new pc.Vec3( i917[i + 0], i917[i + 1], i917[i + 2] ));
  }
  i912.smallSlots = i916
  request.r(i913[11], i913[12], 0, i912, 'removeFxPrefab')
  return i912
}

Deserializers["TicketIcon"] = function (request, data, root) {
  var i922 = root || request.c( 'TicketIcon' )
  var i923 = data
  return i922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i925 = data
  i924.ambientIntensity = i925[0]
  i924.reflectionIntensity = i925[1]
  i924.ambientMode = i925[2]
  i924.ambientLight = new pc.Color(i925[3], i925[4], i925[5], i925[6])
  i924.ambientSkyColor = new pc.Color(i925[7], i925[8], i925[9], i925[10])
  i924.ambientGroundColor = new pc.Color(i925[11], i925[12], i925[13], i925[14])
  i924.ambientEquatorColor = new pc.Color(i925[15], i925[16], i925[17], i925[18])
  i924.fogColor = new pc.Color(i925[19], i925[20], i925[21], i925[22])
  i924.fogEndDistance = i925[23]
  i924.fogStartDistance = i925[24]
  i924.fogDensity = i925[25]
  i924.fog = !!i925[26]
  request.r(i925[27], i925[28], 0, i924, 'skybox')
  i924.fogMode = i925[29]
  var i927 = i925[30]
  var i926 = []
  for(var i = 0; i < i927.length; i += 1) {
    i926.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i927[i + 0]) );
  }
  i924.lightmaps = i926
  i924.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i925[31], i924.lightProbes)
  i924.lightmapsMode = i925[32]
  i924.mixedBakeMode = i925[33]
  i924.environmentLightingMode = i925[34]
  i924.ambientProbe = new pc.SphericalHarmonicsL2(i925[35])
  i924.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i925[36])
  i924.useReferenceAmbientProbe = !!i925[37]
  request.r(i925[38], i925[39], 0, i924, 'customReflection')
  request.r(i925[40], i925[41], 0, i924, 'defaultReflection')
  i924.defaultReflectionMode = i925[42]
  i924.defaultReflectionResolution = i925[43]
  i924.sunLightObjectId = i925[44]
  i924.pixelLightCount = i925[45]
  i924.defaultReflectionHDR = !!i925[46]
  i924.hasLightDataAsset = !!i925[47]
  i924.hasManualGenerate = !!i925[48]
  return i924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i931 = data
  request.r(i931[0], i931[1], 0, i930, 'lightmapColor')
  request.r(i931[2], i931[3], 0, i930, 'lightmapDirection')
  return i930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i932 = root || new UnityEngine.LightProbes()
  var i933 = data
  return i932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i940 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i941 = data
  var i943 = i941[0]
  var i942 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i943.length; i += 1) {
    i942.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i943[i + 0]));
  }
  i940.ShaderCompilationErrors = i942
  i940.name = i941[1]
  i940.guid = i941[2]
  var i945 = i941[3]
  var i944 = []
  for(var i = 0; i < i945.length; i += 1) {
    i944.push( i945[i + 0] );
  }
  i940.shaderDefinedKeywords = i944
  var i947 = i941[4]
  var i946 = []
  for(var i = 0; i < i947.length; i += 1) {
    i946.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i947[i + 0]) );
  }
  i940.passes = i946
  var i949 = i941[5]
  var i948 = []
  for(var i = 0; i < i949.length; i += 1) {
    i948.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i949[i + 0]) );
  }
  i940.usePasses = i948
  var i951 = i941[6]
  var i950 = []
  for(var i = 0; i < i951.length; i += 1) {
    i950.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i951[i + 0]) );
  }
  i940.defaultParameterValues = i950
  request.r(i941[7], i941[8], 0, i940, 'unityFallbackShader')
  i940.readDepth = !!i941[9]
  i940.hasDepthOnlyPass = !!i941[10]
  i940.isCreatedByShaderGraph = !!i941[11]
  i940.disableBatching = !!i941[12]
  i940.compiled = !!i941[13]
  return i940
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i955 = data
  i954.shaderName = i955[0]
  i954.errorMessage = i955[1]
  return i954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i958 = root || new pc.UnityShaderPass()
  var i959 = data
  i958.id = i959[0]
  i958.subShaderIndex = i959[1]
  i958.name = i959[2]
  i958.passType = i959[3]
  i958.grabPassTextureName = i959[4]
  i958.usePass = !!i959[5]
  i958.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i959[6], i958.zTest)
  i958.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i959[7], i958.zWrite)
  i958.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i959[8], i958.culling)
  i958.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i959[9], i958.blending)
  i958.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i959[10], i958.alphaBlending)
  i958.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i959[11], i958.colorWriteMask)
  i958.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i959[12], i958.offsetUnits)
  i958.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i959[13], i958.offsetFactor)
  i958.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i959[14], i958.stencilRef)
  i958.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i959[15], i958.stencilReadMask)
  i958.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i959[16], i958.stencilWriteMask)
  i958.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i959[17], i958.stencilOp)
  i958.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i959[18], i958.stencilOpFront)
  i958.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i959[19], i958.stencilOpBack)
  var i961 = i959[20]
  var i960 = []
  for(var i = 0; i < i961.length; i += 1) {
    i960.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i961[i + 0]) );
  }
  i958.tags = i960
  var i963 = i959[21]
  var i962 = []
  for(var i = 0; i < i963.length; i += 1) {
    i962.push( i963[i + 0] );
  }
  i958.passDefinedKeywords = i962
  var i965 = i959[22]
  var i964 = []
  for(var i = 0; i < i965.length; i += 1) {
    i964.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i965[i + 0]) );
  }
  i958.passDefinedKeywordGroups = i964
  var i967 = i959[23]
  var i966 = []
  for(var i = 0; i < i967.length; i += 1) {
    i966.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i967[i + 0]) );
  }
  i958.variants = i966
  var i969 = i959[24]
  var i968 = []
  for(var i = 0; i < i969.length; i += 1) {
    i968.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i969[i + 0]) );
  }
  i958.excludedVariants = i968
  i958.hasDepthReader = !!i959[25]
  return i958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i971 = data
  i970.val = i971[0]
  i970.name = i971[1]
  return i970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i973 = data
  i972.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i973[0], i972.src)
  i972.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i973[1], i972.dst)
  i972.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i973[2], i972.op)
  return i972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i975 = data
  i974.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i975[0], i974.pass)
  i974.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i975[1], i974.fail)
  i974.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i975[2], i974.zFail)
  i974.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i975[3], i974.comp)
  return i974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i979 = data
  i978.name = i979[0]
  i978.value = i979[1]
  return i978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i983 = data
  var i985 = i983[0]
  var i984 = []
  for(var i = 0; i < i985.length; i += 1) {
    i984.push( i985[i + 0] );
  }
  i982.keywords = i984
  i982.hasDiscard = !!i983[1]
  return i982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i989 = data
  i988.passId = i989[0]
  i988.subShaderIndex = i989[1]
  var i991 = i989[2]
  var i990 = []
  for(var i = 0; i < i991.length; i += 1) {
    i990.push( i991[i + 0] );
  }
  i988.keywords = i990
  i988.vertexProgram = i989[3]
  i988.fragmentProgram = i989[4]
  i988.exportedForWebGl2 = !!i989[5]
  i988.readDepth = !!i989[6]
  return i988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i995 = data
  request.r(i995[0], i995[1], 0, i994, 'shader')
  i994.pass = i995[2]
  return i994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i999 = data
  i998.name = i999[0]
  i998.type = i999[1]
  i998.value = new pc.Vec4( i999[2], i999[3], i999[4], i999[5] )
  i998.textureValue = i999[6]
  i998.shaderPropertyFlag = i999[7]
  return i998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1001 = data
  i1000.name = i1001[0]
  request.r(i1001[1], i1001[2], 0, i1000, 'texture')
  i1000.aabb = i1001[3]
  i1000.vertices = i1001[4]
  i1000.triangles = i1001[5]
  i1000.textureRect = UnityEngine.Rect.MinMaxRect(i1001[6], i1001[7], i1001[8], i1001[9])
  i1000.packedRect = UnityEngine.Rect.MinMaxRect(i1001[10], i1001[11], i1001[12], i1001[13])
  i1000.border = new pc.Vec4( i1001[14], i1001[15], i1001[16], i1001[17] )
  i1000.transparency = i1001[18]
  i1000.bounds = i1001[19]
  i1000.pixelsPerUnit = i1001[20]
  i1000.textureWidth = i1001[21]
  i1000.textureHeight = i1001[22]
  i1000.nativeSize = new pc.Vec2( i1001[23], i1001[24] )
  i1000.pivot = new pc.Vec2( i1001[25], i1001[26] )
  i1000.textureRectOffset = new pc.Vec2( i1001[27], i1001[28] )
  return i1000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1003 = data
  i1002.name = i1003[0]
  return i1002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1005 = data
  i1004.name = i1005[0]
  i1004.wrapMode = i1005[1]
  i1004.isLooping = !!i1005[2]
  i1004.length = i1005[3]
  var i1007 = i1005[4]
  var i1006 = []
  for(var i = 0; i < i1007.length; i += 1) {
    i1006.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1007[i + 0]) );
  }
  i1004.curves = i1006
  var i1009 = i1005[5]
  var i1008 = []
  for(var i = 0; i < i1009.length; i += 1) {
    i1008.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1009[i + 0]) );
  }
  i1004.events = i1008
  i1004.halfPrecision = !!i1005[6]
  i1004._frameRate = i1005[7]
  i1004.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1005[8], i1004.localBounds)
  i1004.hasMuscleCurves = !!i1005[9]
  var i1011 = i1005[10]
  var i1010 = []
  for(var i = 0; i < i1011.length; i += 1) {
    i1010.push( i1011[i + 0] );
  }
  i1004.clipMuscleConstant = i1010
  i1004.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1005[11], i1004.clipBindingConstant)
  return i1004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1015 = data
  i1014.path = i1015[0]
  i1014.hash = i1015[1]
  i1014.componentType = i1015[2]
  i1014.property = i1015[3]
  i1014.keys = i1015[4]
  var i1017 = i1015[5]
  var i1016 = []
  for(var i = 0; i < i1017.length; i += 1) {
    i1016.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1017[i + 0]) );
  }
  i1014.objectReferenceKeys = i1016
  return i1014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1021 = data
  i1020.time = i1021[0]
  request.r(i1021[1], i1021[2], 0, i1020, 'value')
  return i1020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1025 = data
  i1024.functionName = i1025[0]
  i1024.floatParameter = i1025[1]
  i1024.intParameter = i1025[2]
  i1024.stringParameter = i1025[3]
  request.r(i1025[4], i1025[5], 0, i1024, 'objectReferenceParameter')
  i1024.time = i1025[6]
  return i1024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1027 = data
  i1026.center = new pc.Vec3( i1027[0], i1027[1], i1027[2] )
  i1026.extends = new pc.Vec3( i1027[3], i1027[4], i1027[5] )
  return i1026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1031 = data
  var i1033 = i1031[0]
  var i1032 = []
  for(var i = 0; i < i1033.length; i += 1) {
    i1032.push( i1033[i + 0] );
  }
  i1030.genericBindings = i1032
  var i1035 = i1031[1]
  var i1034 = []
  for(var i = 0; i < i1035.length; i += 1) {
    i1034.push( i1035[i + 0] );
  }
  i1030.pptrCurveMapping = i1034
  return i1030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1036 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1037 = data
  i1036.name = i1037[0]
  i1036.ascent = i1037[1]
  i1036.originalLineHeight = i1037[2]
  i1036.fontSize = i1037[3]
  var i1039 = i1037[4]
  var i1038 = []
  for(var i = 0; i < i1039.length; i += 1) {
    i1038.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1039[i + 0]) );
  }
  i1036.characterInfo = i1038
  request.r(i1037[5], i1037[6], 0, i1036, 'texture')
  i1036.originalFontSize = i1037[7]
  return i1036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1043 = data
  i1042.index = i1043[0]
  i1042.advance = i1043[1]
  i1042.bearing = i1043[2]
  i1042.glyphWidth = i1043[3]
  i1042.glyphHeight = i1043[4]
  i1042.minX = i1043[5]
  i1042.maxX = i1043[6]
  i1042.minY = i1043[7]
  i1042.maxY = i1043[8]
  i1042.uvBottomLeftX = i1043[9]
  i1042.uvBottomLeftY = i1043[10]
  i1042.uvBottomRightX = i1043[11]
  i1042.uvBottomRightY = i1043[12]
  i1042.uvTopLeftX = i1043[13]
  i1042.uvTopLeftY = i1043[14]
  i1042.uvTopRightX = i1043[15]
  i1042.uvTopRightY = i1043[16]
  return i1042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1045 = data
  i1044.name = i1045[0]
  var i1047 = i1045[1]
  var i1046 = []
  for(var i = 0; i < i1047.length; i += 1) {
    i1046.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1047[i + 0]) );
  }
  i1044.layers = i1046
  var i1049 = i1045[2]
  var i1048 = []
  for(var i = 0; i < i1049.length; i += 1) {
    i1048.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1049[i + 0]) );
  }
  i1044.parameters = i1048
  i1044.animationClips = i1045[3]
  i1044.avatarUnsupported = i1045[4]
  return i1044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1053 = data
  i1052.name = i1053[0]
  i1052.defaultWeight = i1053[1]
  i1052.blendingMode = i1053[2]
  i1052.avatarMask = i1053[3]
  i1052.syncedLayerIndex = i1053[4]
  i1052.syncedLayerAffectsTiming = !!i1053[5]
  i1052.syncedLayers = i1053[6]
  i1052.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1053[7], i1052.stateMachine)
  return i1052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1055 = data
  i1054.id = i1055[0]
  i1054.name = i1055[1]
  i1054.path = i1055[2]
  var i1057 = i1055[3]
  var i1056 = []
  for(var i = 0; i < i1057.length; i += 1) {
    i1056.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1057[i + 0]) );
  }
  i1054.states = i1056
  var i1059 = i1055[4]
  var i1058 = []
  for(var i = 0; i < i1059.length; i += 1) {
    i1058.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1059[i + 0]) );
  }
  i1054.machines = i1058
  var i1061 = i1055[5]
  var i1060 = []
  for(var i = 0; i < i1061.length; i += 1) {
    i1060.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1061[i + 0]) );
  }
  i1054.entryStateTransitions = i1060
  var i1063 = i1055[6]
  var i1062 = []
  for(var i = 0; i < i1063.length; i += 1) {
    i1062.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1063[i + 0]) );
  }
  i1054.exitStateTransitions = i1062
  var i1065 = i1055[7]
  var i1064 = []
  for(var i = 0; i < i1065.length; i += 1) {
    i1064.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1065[i + 0]) );
  }
  i1054.anyStateTransitions = i1064
  i1054.defaultStateId = i1055[8]
  return i1054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1069 = data
  i1068.id = i1069[0]
  i1068.name = i1069[1]
  i1068.cycleOffset = i1069[2]
  i1068.cycleOffsetParameter = i1069[3]
  i1068.cycleOffsetParameterActive = !!i1069[4]
  i1068.mirror = !!i1069[5]
  i1068.mirrorParameter = i1069[6]
  i1068.mirrorParameterActive = !!i1069[7]
  i1068.motionId = i1069[8]
  i1068.nameHash = i1069[9]
  i1068.fullPathHash = i1069[10]
  i1068.speed = i1069[11]
  i1068.speedParameter = i1069[12]
  i1068.speedParameterActive = !!i1069[13]
  i1068.tag = i1069[14]
  i1068.tagHash = i1069[15]
  i1068.writeDefaultValues = !!i1069[16]
  var i1071 = i1069[17]
  var i1070 = []
  for(var i = 0; i < i1071.length; i += 2) {
  request.r(i1071[i + 0], i1071[i + 1], 2, i1070, '')
  }
  i1068.behaviours = i1070
  var i1073 = i1069[18]
  var i1072 = []
  for(var i = 0; i < i1073.length; i += 1) {
    i1072.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1073[i + 0]) );
  }
  i1068.transitions = i1072
  return i1068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1079 = data
  i1078.fullPath = i1079[0]
  i1078.canTransitionToSelf = !!i1079[1]
  i1078.duration = i1079[2]
  i1078.exitTime = i1079[3]
  i1078.hasExitTime = !!i1079[4]
  i1078.hasFixedDuration = !!i1079[5]
  i1078.interruptionSource = i1079[6]
  i1078.offset = i1079[7]
  i1078.orderedInterruption = !!i1079[8]
  i1078.destinationStateId = i1079[9]
  i1078.isExit = !!i1079[10]
  i1078.mute = !!i1079[11]
  i1078.solo = !!i1079[12]
  var i1081 = i1079[13]
  var i1080 = []
  for(var i = 0; i < i1081.length; i += 1) {
    i1080.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1081[i + 0]) );
  }
  i1078.conditions = i1080
  return i1078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1087 = data
  i1086.destinationStateId = i1087[0]
  i1086.isExit = !!i1087[1]
  i1086.mute = !!i1087[2]
  i1086.solo = !!i1087[3]
  var i1089 = i1087[4]
  var i1088 = []
  for(var i = 0; i < i1089.length; i += 1) {
    i1088.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1089[i + 0]) );
  }
  i1086.conditions = i1088
  return i1086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1093 = data
  i1092.defaultBool = !!i1093[0]
  i1092.defaultFloat = i1093[1]
  i1092.defaultInt = i1093[2]
  i1092.name = i1093[3]
  i1092.nameHash = i1093[4]
  i1092.type = i1093[5]
  return i1092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1095 = data
  i1094.name = i1095[0]
  i1094.bytes64 = i1095[1]
  i1094.data = i1095[2]
  return i1094
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i1096 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i1097 = data
  var i1099 = i1097[0]
  var i1098 = []
  for(var i = 0; i < i1099.length; i += 2) {
  request.r(i1099[i + 0], i1099[i + 1], 2, i1098, '')
  }
  i1096.atlasAssets = i1098
  i1096.scale = i1097[1]
  request.r(i1097[2], i1097[3], 0, i1096, 'skeletonJSON')
  i1096.isUpgradingBlendModeMaterials = !!i1097[4]
  i1096.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i1097[5], i1096.blendModeMaterials)
  var i1101 = i1097[6]
  var i1100 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i1101.length; i += 2) {
  request.r(i1101[i + 0], i1101[i + 1], 1, i1100, '')
  }
  i1096.skeletonDataModifiers = i1100
  var i1103 = i1097[7]
  var i1102 = []
  for(var i = 0; i < i1103.length; i += 1) {
    i1102.push( i1103[i + 0] );
  }
  i1096.fromAnimation = i1102
  var i1105 = i1097[8]
  var i1104 = []
  for(var i = 0; i < i1105.length; i += 1) {
    i1104.push( i1105[i + 0] );
  }
  i1096.toAnimation = i1104
  i1096.duration = i1097[9]
  i1096.defaultMix = i1097[10]
  request.r(i1097[11], i1097[12], 0, i1096, 'controller')
  return i1096
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i1108 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i1109 = data
  i1108.applyAdditiveMaterial = !!i1109[0]
  var i1111 = i1109[1]
  var i1110 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1111.length; i += 1) {
    i1110.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1111[i + 0]));
  }
  i1108.additiveMaterials = i1110
  var i1113 = i1109[2]
  var i1112 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1113.length; i += 1) {
    i1112.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1113[i + 0]));
  }
  i1108.multiplyMaterials = i1112
  var i1115 = i1109[3]
  var i1114 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1115.length; i += 1) {
    i1114.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1115[i + 0]));
  }
  i1108.screenMaterials = i1114
  i1108.requiresBlendModeMaterials = !!i1109[4]
  return i1108
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i1118 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i1119 = data
  i1118.pageName = i1119[0]
  request.r(i1119[1], i1119[2], 0, i1118, 'material')
  return i1118
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i1122 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i1123 = data
  request.r(i1123[0], i1123[1], 0, i1122, 'atlasFile')
  var i1125 = i1123[2]
  var i1124 = []
  for(var i = 0; i < i1125.length; i += 2) {
  request.r(i1125[i + 0], i1125[i + 1], 2, i1124, '')
  }
  i1122.materials = i1124
  i1122.textureLoadingMode = i1123[3]
  request.r(i1123[4], i1123[5], 0, i1122, 'onDemandTextureLoader')
  return i1122
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1126 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1127 = data
  request.r(i1127[0], i1127[1], 0, i1126, 'atlas')
  i1126.normalStyle = i1127[2]
  i1126.normalSpacingOffset = i1127[3]
  i1126.boldStyle = i1127[4]
  i1126.boldSpacing = i1127[5]
  i1126.italicStyle = i1127[6]
  i1126.tabSize = i1127[7]
  i1126.hashCode = i1127[8]
  request.r(i1127[9], i1127[10], 0, i1126, 'material')
  i1126.materialHashCode = i1127[11]
  i1126.m_Version = i1127[12]
  i1126.m_SourceFontFileGUID = i1127[13]
  request.r(i1127[14], i1127[15], 0, i1126, 'm_SourceFontFile_EditorRef')
  request.r(i1127[16], i1127[17], 0, i1126, 'm_SourceFontFile')
  i1126.m_AtlasPopulationMode = i1127[18]
  i1126.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1127[19], i1126.m_FaceInfo)
  var i1129 = i1127[20]
  var i1128 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1129.length; i += 1) {
    i1128.add(request.d('UnityEngine.TextCore.Glyph', i1129[i + 0]));
  }
  i1126.m_GlyphTable = i1128
  var i1131 = i1127[21]
  var i1130 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1131.length; i += 1) {
    i1130.add(request.d('TMPro.TMP_Character', i1131[i + 0]));
  }
  i1126.m_CharacterTable = i1130
  var i1133 = i1127[22]
  var i1132 = []
  for(var i = 0; i < i1133.length; i += 2) {
  request.r(i1133[i + 0], i1133[i + 1], 2, i1132, '')
  }
  i1126.m_AtlasTextures = i1132
  i1126.m_AtlasTextureIndex = i1127[23]
  i1126.m_IsMultiAtlasTexturesEnabled = !!i1127[24]
  i1126.m_ClearDynamicDataOnBuild = !!i1127[25]
  var i1135 = i1127[26]
  var i1134 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1135.length; i += 1) {
    i1134.add(request.d('UnityEngine.TextCore.GlyphRect', i1135[i + 0]));
  }
  i1126.m_UsedGlyphRects = i1134
  var i1137 = i1127[27]
  var i1136 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1137.length; i += 1) {
    i1136.add(request.d('UnityEngine.TextCore.GlyphRect', i1137[i + 0]));
  }
  i1126.m_FreeGlyphRects = i1136
  i1126.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1127[28], i1126.m_fontInfo)
  i1126.m_AtlasWidth = i1127[29]
  i1126.m_AtlasHeight = i1127[30]
  i1126.m_AtlasPadding = i1127[31]
  i1126.m_AtlasRenderMode = i1127[32]
  var i1139 = i1127[33]
  var i1138 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1139.length; i += 1) {
    i1138.add(request.d('TMPro.TMP_Glyph', i1139[i + 0]));
  }
  i1126.m_glyphInfoList = i1138
  i1126.m_KerningTable = request.d('TMPro.KerningTable', i1127[34], i1126.m_KerningTable)
  i1126.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1127[35], i1126.m_FontFeatureTable)
  var i1141 = i1127[36]
  var i1140 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1141.length; i += 2) {
  request.r(i1141[i + 0], i1141[i + 1], 1, i1140, '')
  }
  i1126.fallbackFontAssets = i1140
  var i1143 = i1127[37]
  var i1142 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1143.length; i += 2) {
  request.r(i1143[i + 0], i1143[i + 1], 1, i1142, '')
  }
  i1126.m_FallbackFontAssetTable = i1142
  i1126.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1127[38], i1126.m_CreationSettings)
  var i1145 = i1127[39]
  var i1144 = []
  for(var i = 0; i < i1145.length; i += 1) {
    i1144.push( request.d('TMPro.TMP_FontWeightPair', i1145[i + 0]) );
  }
  i1126.m_FontWeightTable = i1144
  var i1147 = i1127[40]
  var i1146 = []
  for(var i = 0; i < i1147.length; i += 1) {
    i1146.push( request.d('TMPro.TMP_FontWeightPair', i1147[i + 0]) );
  }
  i1126.fontWeights = i1146
  return i1126
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1148 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1149 = data
  i1148.m_FaceIndex = i1149[0]
  i1148.m_FamilyName = i1149[1]
  i1148.m_StyleName = i1149[2]
  i1148.m_PointSize = i1149[3]
  i1148.m_Scale = i1149[4]
  i1148.m_UnitsPerEM = i1149[5]
  i1148.m_LineHeight = i1149[6]
  i1148.m_AscentLine = i1149[7]
  i1148.m_CapLine = i1149[8]
  i1148.m_MeanLine = i1149[9]
  i1148.m_Baseline = i1149[10]
  i1148.m_DescentLine = i1149[11]
  i1148.m_SuperscriptOffset = i1149[12]
  i1148.m_SuperscriptSize = i1149[13]
  i1148.m_SubscriptOffset = i1149[14]
  i1148.m_SubscriptSize = i1149[15]
  i1148.m_UnderlineOffset = i1149[16]
  i1148.m_UnderlineThickness = i1149[17]
  i1148.m_StrikethroughOffset = i1149[18]
  i1148.m_StrikethroughThickness = i1149[19]
  i1148.m_TabWidth = i1149[20]
  return i1148
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1152 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1153 = data
  i1152.m_Index = i1153[0]
  i1152.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1153[1], i1152.m_Metrics)
  i1152.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1153[2], i1152.m_GlyphRect)
  i1152.m_Scale = i1153[3]
  i1152.m_AtlasIndex = i1153[4]
  i1152.m_ClassDefinitionType = i1153[5]
  return i1152
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1154 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1155 = data
  i1154.m_Width = i1155[0]
  i1154.m_Height = i1155[1]
  i1154.m_HorizontalBearingX = i1155[2]
  i1154.m_HorizontalBearingY = i1155[3]
  i1154.m_HorizontalAdvance = i1155[4]
  return i1154
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1156 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1157 = data
  i1156.m_X = i1157[0]
  i1156.m_Y = i1157[1]
  i1156.m_Width = i1157[2]
  i1156.m_Height = i1157[3]
  return i1156
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1160 = root || request.c( 'TMPro.TMP_Character' )
  var i1161 = data
  i1160.m_ElementType = i1161[0]
  i1160.m_Unicode = i1161[1]
  i1160.m_GlyphIndex = i1161[2]
  i1160.m_Scale = i1161[3]
  return i1160
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1166 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1167 = data
  i1166.Name = i1167[0]
  i1166.PointSize = i1167[1]
  i1166.Scale = i1167[2]
  i1166.CharacterCount = i1167[3]
  i1166.LineHeight = i1167[4]
  i1166.Baseline = i1167[5]
  i1166.Ascender = i1167[6]
  i1166.CapHeight = i1167[7]
  i1166.Descender = i1167[8]
  i1166.CenterLine = i1167[9]
  i1166.SuperscriptOffset = i1167[10]
  i1166.SubscriptOffset = i1167[11]
  i1166.SubSize = i1167[12]
  i1166.Underline = i1167[13]
  i1166.UnderlineThickness = i1167[14]
  i1166.strikethrough = i1167[15]
  i1166.strikethroughThickness = i1167[16]
  i1166.TabWidth = i1167[17]
  i1166.Padding = i1167[18]
  i1166.AtlasWidth = i1167[19]
  i1166.AtlasHeight = i1167[20]
  return i1166
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1170 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1171 = data
  i1170.id = i1171[0]
  i1170.x = i1171[1]
  i1170.y = i1171[2]
  i1170.width = i1171[3]
  i1170.height = i1171[4]
  i1170.xOffset = i1171[5]
  i1170.yOffset = i1171[6]
  i1170.xAdvance = i1171[7]
  i1170.scale = i1171[8]
  return i1170
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1172 = root || request.c( 'TMPro.KerningTable' )
  var i1173 = data
  var i1175 = i1173[0]
  var i1174 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1175.length; i += 1) {
    i1174.add(request.d('TMPro.KerningPair', i1175[i + 0]));
  }
  i1172.kerningPairs = i1174
  return i1172
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1178 = root || request.c( 'TMPro.KerningPair' )
  var i1179 = data
  i1178.xOffset = i1179[0]
  i1178.m_FirstGlyph = i1179[1]
  i1178.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1179[2], i1178.m_FirstGlyphAdjustments)
  i1178.m_SecondGlyph = i1179[3]
  i1178.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1179[4], i1178.m_SecondGlyphAdjustments)
  i1178.m_IgnoreSpacingAdjustments = !!i1179[5]
  return i1178
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1180 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1181 = data
  var i1183 = i1181[0]
  var i1182 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1183.length; i += 1) {
    i1182.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1183[i + 0]));
  }
  i1180.m_GlyphPairAdjustmentRecords = i1182
  return i1180
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1186 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1187 = data
  i1186.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1187[0], i1186.m_FirstAdjustmentRecord)
  i1186.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1187[1], i1186.m_SecondAdjustmentRecord)
  i1186.m_FeatureLookupFlags = i1187[2]
  return i1186
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1190 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1191 = data
  i1190.sourceFontFileName = i1191[0]
  i1190.sourceFontFileGUID = i1191[1]
  i1190.pointSizeSamplingMode = i1191[2]
  i1190.pointSize = i1191[3]
  i1190.padding = i1191[4]
  i1190.packingMode = i1191[5]
  i1190.atlasWidth = i1191[6]
  i1190.atlasHeight = i1191[7]
  i1190.characterSetSelectionMode = i1191[8]
  i1190.characterSequence = i1191[9]
  i1190.referencedFontAssetGUID = i1191[10]
  i1190.referencedTextAssetGUID = i1191[11]
  i1190.fontStyle = i1191[12]
  i1190.fontStyleModifier = i1191[13]
  i1190.renderMode = i1191[14]
  i1190.includeFontFeatures = !!i1191[15]
  return i1190
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1194 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1195 = data
  request.r(i1195[0], i1195[1], 0, i1194, 'regularTypeface')
  request.r(i1195[2], i1195[3], 0, i1194, 'italicTypeface')
  return i1194
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1196 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1197 = data
  i1196.useSafeMode = !!i1197[0]
  i1196.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1197[1], i1196.safeModeOptions)
  i1196.timeScale = i1197[2]
  i1196.unscaledTimeScale = i1197[3]
  i1196.useSmoothDeltaTime = !!i1197[4]
  i1196.maxSmoothUnscaledTime = i1197[5]
  i1196.rewindCallbackMode = i1197[6]
  i1196.showUnityEditorReport = !!i1197[7]
  i1196.logBehaviour = i1197[8]
  i1196.drawGizmos = !!i1197[9]
  i1196.defaultRecyclable = !!i1197[10]
  i1196.defaultAutoPlay = i1197[11]
  i1196.defaultUpdateType = i1197[12]
  i1196.defaultTimeScaleIndependent = !!i1197[13]
  i1196.defaultEaseType = i1197[14]
  i1196.defaultEaseOvershootOrAmplitude = i1197[15]
  i1196.defaultEasePeriod = i1197[16]
  i1196.defaultAutoKill = !!i1197[17]
  i1196.defaultLoopType = i1197[18]
  i1196.debugMode = !!i1197[19]
  i1196.debugStoreTargetId = !!i1197[20]
  i1196.showPreviewPanel = !!i1197[21]
  i1196.storeSettingsLocation = i1197[22]
  i1196.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1197[23], i1196.modules)
  i1196.createASMDEF = !!i1197[24]
  i1196.showPlayingTweens = !!i1197[25]
  i1196.showPausedTweens = !!i1197[26]
  return i1196
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1198 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1199 = data
  i1198.logBehaviour = i1199[0]
  i1198.nestedTweenFailureBehaviour = i1199[1]
  return i1198
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1200 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1201 = data
  i1200.showPanel = !!i1201[0]
  i1200.audioEnabled = !!i1201[1]
  i1200.physicsEnabled = !!i1201[2]
  i1200.physics2DEnabled = !!i1201[3]
  i1200.spriteEnabled = !!i1201[4]
  i1200.uiEnabled = !!i1201[5]
  i1200.textMeshProEnabled = !!i1201[6]
  i1200.tk2DEnabled = !!i1201[7]
  i1200.deAudioEnabled = !!i1201[8]
  i1200.deUnityExtendedEnabled = !!i1201[9]
  i1200.epoOutlineEnabled = !!i1201[10]
  return i1200
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1202 = root || request.c( 'TMPro.TMP_Settings' )
  var i1203 = data
  i1202.m_enableWordWrapping = !!i1203[0]
  i1202.m_enableKerning = !!i1203[1]
  i1202.m_enableExtraPadding = !!i1203[2]
  i1202.m_enableTintAllSprites = !!i1203[3]
  i1202.m_enableParseEscapeCharacters = !!i1203[4]
  i1202.m_EnableRaycastTarget = !!i1203[5]
  i1202.m_GetFontFeaturesAtRuntime = !!i1203[6]
  i1202.m_missingGlyphCharacter = i1203[7]
  i1202.m_warningsDisabled = !!i1203[8]
  request.r(i1203[9], i1203[10], 0, i1202, 'm_defaultFontAsset')
  i1202.m_defaultFontAssetPath = i1203[11]
  i1202.m_defaultFontSize = i1203[12]
  i1202.m_defaultAutoSizeMinRatio = i1203[13]
  i1202.m_defaultAutoSizeMaxRatio = i1203[14]
  i1202.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1203[15], i1203[16] )
  i1202.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1203[17], i1203[18] )
  i1202.m_autoSizeTextContainer = !!i1203[19]
  i1202.m_IsTextObjectScaleStatic = !!i1203[20]
  var i1205 = i1203[21]
  var i1204 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1205.length; i += 2) {
  request.r(i1205[i + 0], i1205[i + 1], 1, i1204, '')
  }
  i1202.m_fallbackFontAssets = i1204
  i1202.m_matchMaterialPreset = !!i1203[22]
  request.r(i1203[23], i1203[24], 0, i1202, 'm_defaultSpriteAsset')
  i1202.m_defaultSpriteAssetPath = i1203[25]
  i1202.m_enableEmojiSupport = !!i1203[26]
  i1202.m_MissingCharacterSpriteUnicode = i1203[27]
  i1202.m_defaultColorGradientPresetsPath = i1203[28]
  request.r(i1203[29], i1203[30], 0, i1202, 'm_defaultStyleSheet')
  i1202.m_StyleSheetsResourcePath = i1203[31]
  request.r(i1203[32], i1203[33], 0, i1202, 'm_leadingCharacters')
  request.r(i1203[34], i1203[35], 0, i1202, 'm_followingCharacters')
  i1202.m_UseModernHangulLineBreakingRules = !!i1203[36]
  return i1202
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1206 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1207 = data
  i1206.m_GlyphIndex = i1207[0]
  i1206.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1207[1], i1206.m_GlyphValueRecord)
  return i1206
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1208 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1209 = data
  i1208.m_XPlacement = i1209[0]
  i1208.m_YPlacement = i1209[1]
  i1208.m_XAdvance = i1209[2]
  i1208.m_YAdvance = i1209[3]
  return i1208
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1210 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1211 = data
  request.r(i1211[0], i1211[1], 0, i1210, 'spriteSheet')
  var i1213 = i1211[2]
  var i1212 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1213.length; i += 1) {
    i1212.add(request.d('TMPro.TMP_Sprite', i1213[i + 0]));
  }
  i1210.spriteInfoList = i1212
  var i1215 = i1211[3]
  var i1214 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1215.length; i += 2) {
  request.r(i1215[i + 0], i1215[i + 1], 1, i1214, '')
  }
  i1210.fallbackSpriteAssets = i1214
  i1210.hashCode = i1211[4]
  request.r(i1211[5], i1211[6], 0, i1210, 'material')
  i1210.materialHashCode = i1211[7]
  i1210.m_Version = i1211[8]
  i1210.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1211[9], i1210.m_FaceInfo)
  var i1217 = i1211[10]
  var i1216 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1217.length; i += 1) {
    i1216.add(request.d('TMPro.TMP_SpriteCharacter', i1217[i + 0]));
  }
  i1210.m_SpriteCharacterTable = i1216
  var i1219 = i1211[11]
  var i1218 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1219.length; i += 1) {
    i1218.add(request.d('TMPro.TMP_SpriteGlyph', i1219[i + 0]));
  }
  i1210.m_SpriteGlyphTable = i1218
  return i1210
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1222 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1223 = data
  i1222.name = i1223[0]
  i1222.hashCode = i1223[1]
  i1222.unicode = i1223[2]
  i1222.pivot = new pc.Vec2( i1223[3], i1223[4] )
  request.r(i1223[5], i1223[6], 0, i1222, 'sprite')
  i1222.id = i1223[7]
  i1222.x = i1223[8]
  i1222.y = i1223[9]
  i1222.width = i1223[10]
  i1222.height = i1223[11]
  i1222.xOffset = i1223[12]
  i1222.yOffset = i1223[13]
  i1222.xAdvance = i1223[14]
  i1222.scale = i1223[15]
  return i1222
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1228 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1229 = data
  i1228.m_Name = i1229[0]
  i1228.m_HashCode = i1229[1]
  i1228.m_ElementType = i1229[2]
  i1228.m_Unicode = i1229[3]
  i1228.m_GlyphIndex = i1229[4]
  i1228.m_Scale = i1229[5]
  return i1228
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1232 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1233 = data
  request.r(i1233[0], i1233[1], 0, i1232, 'sprite')
  i1232.m_Index = i1233[2]
  i1232.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1233[3], i1232.m_Metrics)
  i1232.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1233[4], i1232.m_GlyphRect)
  i1232.m_Scale = i1233[5]
  i1232.m_AtlasIndex = i1233[6]
  i1232.m_ClassDefinitionType = i1233[7]
  return i1232
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1234 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1235 = data
  var i1237 = i1235[0]
  var i1236 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1237.length; i += 1) {
    i1236.add(request.d('TMPro.TMP_Style', i1237[i + 0]));
  }
  i1234.m_StyleList = i1236
  return i1234
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1240 = root || request.c( 'TMPro.TMP_Style' )
  var i1241 = data
  i1240.m_Name = i1241[0]
  i1240.m_HashCode = i1241[1]
  i1240.m_OpeningDefinition = i1241[2]
  i1240.m_ClosingDefinition = i1241[3]
  i1240.m_OpeningTagArray = i1241[4]
  i1240.m_ClosingTagArray = i1241[5]
  i1240.m_OpeningTagUnicodeArray = i1241[6]
  i1240.m_ClosingTagUnicodeArray = i1241[7]
  return i1240
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1242 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1243 = data
  var i1245 = i1243[0]
  var i1244 = []
  for(var i = 0; i < i1245.length; i += 1) {
    i1244.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1245[i + 0]) );
  }
  i1242.files = i1244
  i1242.componentToPrefabIds = i1243[1]
  return i1242
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1248 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1249 = data
  i1248.path = i1249[0]
  request.r(i1249[1], i1249[2], 0, i1248, 'unityObject')
  return i1248
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1250 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1251 = data
  var i1253 = i1251[0]
  var i1252 = []
  for(var i = 0; i < i1253.length; i += 1) {
    i1252.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1253[i + 0]) );
  }
  i1250.scriptsExecutionOrder = i1252
  var i1255 = i1251[1]
  var i1254 = []
  for(var i = 0; i < i1255.length; i += 1) {
    i1254.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1255[i + 0]) );
  }
  i1250.sortingLayers = i1254
  var i1257 = i1251[2]
  var i1256 = []
  for(var i = 0; i < i1257.length; i += 1) {
    i1256.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1257[i + 0]) );
  }
  i1250.cullingLayers = i1256
  i1250.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1251[3], i1250.timeSettings)
  i1250.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1251[4], i1250.physicsSettings)
  i1250.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1251[5], i1250.physics2DSettings)
  i1250.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1251[6], i1250.qualitySettings)
  i1250.enableRealtimeShadows = !!i1251[7]
  i1250.enableAutoInstancing = !!i1251[8]
  i1250.enableStaticBatching = !!i1251[9]
  i1250.enableDynamicBatching = !!i1251[10]
  i1250.lightmapEncodingQuality = i1251[11]
  i1250.desiredColorSpace = i1251[12]
  var i1259 = i1251[13]
  var i1258 = []
  for(var i = 0; i < i1259.length; i += 1) {
    i1258.push( i1259[i + 0] );
  }
  i1250.allTags = i1258
  return i1250
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1262 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1263 = data
  i1262.name = i1263[0]
  i1262.value = i1263[1]
  return i1262
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1266 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1267 = data
  i1266.id = i1267[0]
  i1266.name = i1267[1]
  i1266.value = i1267[2]
  return i1266
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1270 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1271 = data
  i1270.id = i1271[0]
  i1270.name = i1271[1]
  return i1270
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1272 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1273 = data
  i1272.fixedDeltaTime = i1273[0]
  i1272.maximumDeltaTime = i1273[1]
  i1272.timeScale = i1273[2]
  i1272.maximumParticleTimestep = i1273[3]
  return i1272
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1274 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1275 = data
  i1274.gravity = new pc.Vec3( i1275[0], i1275[1], i1275[2] )
  i1274.defaultSolverIterations = i1275[3]
  i1274.bounceThreshold = i1275[4]
  i1274.autoSyncTransforms = !!i1275[5]
  i1274.autoSimulation = !!i1275[6]
  var i1277 = i1275[7]
  var i1276 = []
  for(var i = 0; i < i1277.length; i += 1) {
    i1276.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1277[i + 0]) );
  }
  i1274.collisionMatrix = i1276
  return i1274
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1280 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1281 = data
  i1280.enabled = !!i1281[0]
  i1280.layerId = i1281[1]
  i1280.otherLayerId = i1281[2]
  return i1280
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1282 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1283 = data
  request.r(i1283[0], i1283[1], 0, i1282, 'material')
  i1282.gravity = new pc.Vec2( i1283[2], i1283[3] )
  i1282.positionIterations = i1283[4]
  i1282.velocityIterations = i1283[5]
  i1282.velocityThreshold = i1283[6]
  i1282.maxLinearCorrection = i1283[7]
  i1282.maxAngularCorrection = i1283[8]
  i1282.maxTranslationSpeed = i1283[9]
  i1282.maxRotationSpeed = i1283[10]
  i1282.baumgarteScale = i1283[11]
  i1282.baumgarteTOIScale = i1283[12]
  i1282.timeToSleep = i1283[13]
  i1282.linearSleepTolerance = i1283[14]
  i1282.angularSleepTolerance = i1283[15]
  i1282.defaultContactOffset = i1283[16]
  i1282.autoSimulation = !!i1283[17]
  i1282.queriesHitTriggers = !!i1283[18]
  i1282.queriesStartInColliders = !!i1283[19]
  i1282.callbacksOnDisable = !!i1283[20]
  i1282.reuseCollisionCallbacks = !!i1283[21]
  i1282.autoSyncTransforms = !!i1283[22]
  var i1285 = i1283[23]
  var i1284 = []
  for(var i = 0; i < i1285.length; i += 1) {
    i1284.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1285[i + 0]) );
  }
  i1282.collisionMatrix = i1284
  return i1282
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1288 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1289 = data
  i1288.enabled = !!i1289[0]
  i1288.layerId = i1289[1]
  i1288.otherLayerId = i1289[2]
  return i1288
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1290 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1291 = data
  var i1293 = i1291[0]
  var i1292 = []
  for(var i = 0; i < i1293.length; i += 1) {
    i1292.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1293[i + 0]) );
  }
  i1290.qualityLevels = i1292
  var i1295 = i1291[1]
  var i1294 = []
  for(var i = 0; i < i1295.length; i += 1) {
    i1294.push( i1295[i + 0] );
  }
  i1290.names = i1294
  i1290.shadows = i1291[2]
  i1290.anisotropicFiltering = i1291[3]
  i1290.antiAliasing = i1291[4]
  i1290.lodBias = i1291[5]
  i1290.shadowCascades = i1291[6]
  i1290.shadowDistance = i1291[7]
  i1290.shadowmaskMode = i1291[8]
  i1290.shadowProjection = i1291[9]
  i1290.shadowResolution = i1291[10]
  i1290.softParticles = !!i1291[11]
  i1290.softVegetation = !!i1291[12]
  i1290.activeColorSpace = i1291[13]
  i1290.desiredColorSpace = i1291[14]
  i1290.masterTextureLimit = i1291[15]
  i1290.maxQueuedFrames = i1291[16]
  i1290.particleRaycastBudget = i1291[17]
  i1290.pixelLightCount = i1291[18]
  i1290.realtimeReflectionProbes = !!i1291[19]
  i1290.shadowCascade2Split = i1291[20]
  i1290.shadowCascade4Split = new pc.Vec3( i1291[21], i1291[22], i1291[23] )
  i1290.streamingMipmapsActive = !!i1291[24]
  i1290.vSyncCount = i1291[25]
  i1290.asyncUploadBufferSize = i1291[26]
  i1290.asyncUploadTimeSlice = i1291[27]
  i1290.billboardsFaceCameraPosition = !!i1291[28]
  i1290.shadowNearPlaneOffset = i1291[29]
  i1290.streamingMipmapsMemoryBudget = i1291[30]
  i1290.maximumLODLevel = i1291[31]
  i1290.streamingMipmapsAddAllCameras = !!i1291[32]
  i1290.streamingMipmapsMaxLevelReduction = i1291[33]
  i1290.streamingMipmapsRenderersPerFrame = i1291[34]
  i1290.resolutionScalingFixedDPIFactor = i1291[35]
  i1290.streamingMipmapsMaxFileIORequests = i1291[36]
  i1290.currentQualityLevel = i1291[37]
  return i1290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1300 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1301 = data
  i1300.mode = i1301[0]
  i1300.parameter = i1301[1]
  i1300.threshold = i1301[2]
  return i1300
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1302 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1303 = data
  i1302.xPlacement = i1303[0]
  i1302.yPlacement = i1303[1]
  i1302.xAdvance = i1303[2]
  i1302.yAdvance = i1303[3]
  return i1302
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

Deserializers.runtimeAnalysisExcludedClassesCount = "1806";

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

Deserializers.buildID = "b7647852-5451-4b57-817c-92aed0e8c4cf";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

