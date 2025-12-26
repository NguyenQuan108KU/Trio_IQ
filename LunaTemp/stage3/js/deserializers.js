var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1776 = root || request.c( 'UnityEngine.JointSpring' )
  var i1777 = data
  i1776.spring = i1777[0]
  i1776.damper = i1777[1]
  i1776.targetPosition = i1777[2]
  return i1776
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1778 = root || request.c( 'UnityEngine.JointMotor' )
  var i1779 = data
  i1778.m_TargetVelocity = i1779[0]
  i1778.m_Force = i1779[1]
  i1778.m_FreeSpin = i1779[2]
  return i1778
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1780 = root || request.c( 'UnityEngine.JointLimits' )
  var i1781 = data
  i1780.m_Min = i1781[0]
  i1780.m_Max = i1781[1]
  i1780.m_Bounciness = i1781[2]
  i1780.m_BounceMinVelocity = i1781[3]
  i1780.m_ContactDistance = i1781[4]
  i1780.minBounce = i1781[5]
  i1780.maxBounce = i1781[6]
  return i1780
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1782 = root || request.c( 'UnityEngine.JointDrive' )
  var i1783 = data
  i1782.m_PositionSpring = i1783[0]
  i1782.m_PositionDamper = i1783[1]
  i1782.m_MaximumForce = i1783[2]
  i1782.m_UseAcceleration = i1783[3]
  return i1782
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1784 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1785 = data
  i1784.m_Spring = i1785[0]
  i1784.m_Damper = i1785[1]
  return i1784
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1786 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1787 = data
  i1786.m_Limit = i1787[0]
  i1786.m_Bounciness = i1787[1]
  i1786.m_ContactDistance = i1787[2]
  return i1786
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1788 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1789 = data
  i1788.m_ExtremumSlip = i1789[0]
  i1788.m_ExtremumValue = i1789[1]
  i1788.m_AsymptoteSlip = i1789[2]
  i1788.m_AsymptoteValue = i1789[3]
  i1788.m_Stiffness = i1789[4]
  return i1788
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1790 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1791 = data
  i1790.m_LowerAngle = i1791[0]
  i1790.m_UpperAngle = i1791[1]
  return i1790
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1792 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1793 = data
  i1792.m_MotorSpeed = i1793[0]
  i1792.m_MaximumMotorTorque = i1793[1]
  return i1792
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1794 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1795 = data
  i1794.m_DampingRatio = i1795[0]
  i1794.m_Frequency = i1795[1]
  i1794.m_Angle = i1795[2]
  return i1794
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1796 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1797 = data
  i1796.m_LowerTranslation = i1797[0]
  i1796.m_UpperTranslation = i1797[1]
  return i1796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1798 = root || new pc.UnityMaterial()
  var i1799 = data
  i1798.name = i1799[0]
  request.r(i1799[1], i1799[2], 0, i1798, 'shader')
  i1798.renderQueue = i1799[3]
  i1798.enableInstancing = !!i1799[4]
  var i1801 = i1799[5]
  var i1800 = []
  for(var i = 0; i < i1801.length; i += 1) {
    i1800.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1801[i + 0]) );
  }
  i1798.floatParameters = i1800
  var i1803 = i1799[6]
  var i1802 = []
  for(var i = 0; i < i1803.length; i += 1) {
    i1802.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1803[i + 0]) );
  }
  i1798.colorParameters = i1802
  var i1805 = i1799[7]
  var i1804 = []
  for(var i = 0; i < i1805.length; i += 1) {
    i1804.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1805[i + 0]) );
  }
  i1798.vectorParameters = i1804
  var i1807 = i1799[8]
  var i1806 = []
  for(var i = 0; i < i1807.length; i += 1) {
    i1806.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1807[i + 0]) );
  }
  i1798.textureParameters = i1806
  var i1809 = i1799[9]
  var i1808 = []
  for(var i = 0; i < i1809.length; i += 1) {
    i1808.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1809[i + 0]) );
  }
  i1798.materialFlags = i1808
  return i1798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1813 = data
  i1812.name = i1813[0]
  i1812.value = i1813[1]
  return i1812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1817 = data
  i1816.name = i1817[0]
  i1816.value = new pc.Color(i1817[1], i1817[2], i1817[3], i1817[4])
  return i1816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1821 = data
  i1820.name = i1821[0]
  i1820.value = new pc.Vec4( i1821[1], i1821[2], i1821[3], i1821[4] )
  return i1820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1825 = data
  i1824.name = i1825[0]
  request.r(i1825[1], i1825[2], 0, i1824, 'value')
  return i1824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1829 = data
  i1828.name = i1829[0]
  i1828.enabled = !!i1829[1]
  return i1828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1831 = data
  i1830.name = i1831[0]
  i1830.width = i1831[1]
  i1830.height = i1831[2]
  i1830.mipmapCount = i1831[3]
  i1830.anisoLevel = i1831[4]
  i1830.filterMode = i1831[5]
  i1830.hdr = !!i1831[6]
  i1830.format = i1831[7]
  i1830.wrapMode = i1831[8]
  i1830.alphaIsTransparency = !!i1831[9]
  i1830.alphaSource = i1831[10]
  i1830.graphicsFormat = i1831[11]
  i1830.sRGBTexture = !!i1831[12]
  i1830.desiredColorSpace = i1831[13]
  i1830.wrapU = i1831[14]
  i1830.wrapV = i1831[15]
  return i1830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1833 = data
  i1832.position = new pc.Vec3( i1833[0], i1833[1], i1833[2] )
  i1832.scale = new pc.Vec3( i1833[3], i1833[4], i1833[5] )
  i1832.rotation = new pc.Quat(i1833[6], i1833[7], i1833[8], i1833[9])
  return i1832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i1834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i1835 = data
  i1834.color = new pc.Color(i1835[0], i1835[1], i1835[2], i1835[3])
  request.r(i1835[4], i1835[5], 0, i1834, 'sprite')
  i1834.flipX = !!i1835[6]
  i1834.flipY = !!i1835[7]
  i1834.drawMode = i1835[8]
  i1834.size = new pc.Vec2( i1835[9], i1835[10] )
  i1834.tileMode = i1835[11]
  i1834.adaptiveModeThreshold = i1835[12]
  i1834.maskInteraction = i1835[13]
  i1834.spriteSortPoint = i1835[14]
  i1834.enabled = !!i1835[15]
  request.r(i1835[16], i1835[17], 0, i1834, 'sharedMaterial')
  var i1837 = i1835[18]
  var i1836 = []
  for(var i = 0; i < i1837.length; i += 2) {
  request.r(i1837[i + 0], i1837[i + 1], 2, i1836, '')
  }
  i1834.sharedMaterials = i1836
  i1834.receiveShadows = !!i1835[19]
  i1834.shadowCastingMode = i1835[20]
  i1834.sortingLayerID = i1835[21]
  i1834.sortingOrder = i1835[22]
  i1834.lightmapIndex = i1835[23]
  i1834.lightmapSceneIndex = i1835[24]
  i1834.lightmapScaleOffset = new pc.Vec4( i1835[25], i1835[26], i1835[27], i1835[28] )
  i1834.lightProbeUsage = i1835[29]
  i1834.reflectionProbeUsage = i1835[30]
  return i1834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1841 = data
  i1840.name = i1841[0]
  i1840.tagId = i1841[1]
  i1840.enabled = !!i1841[2]
  i1840.isStatic = !!i1841[3]
  i1840.layer = i1841[4]
  return i1840
}

Deserializers["Disk"] = function (request, data, root) {
  var i1842 = root || request.c( 'Disk' )
  var i1843 = data
  i1842.requiredCount = i1843[0]
  i1842.moveDistance = i1843[1]
  i1842.moveTime = i1843[2]
  return i1842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i1844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i1845 = data
  request.r(i1845[0], i1845[1], 0, i1844, 'animatorController')
  request.r(i1845[2], i1845[3], 0, i1844, 'avatar')
  i1844.updateMode = i1845[4]
  i1844.hasTransformHierarchy = !!i1845[5]
  i1844.applyRootMotion = !!i1845[6]
  var i1847 = i1845[7]
  var i1846 = []
  for(var i = 0; i < i1847.length; i += 2) {
  request.r(i1847[i + 0], i1847[i + 1], 2, i1846, '')
  }
  i1844.humanBones = i1846
  i1844.enabled = !!i1845[8]
  return i1844
}

Deserializers["HandHint"] = function (request, data, root) {
  var i1850 = root || request.c( 'HandHint' )
  var i1851 = data
  request.r(i1851[0], i1851[1], 0, i1850, 'previewRenderer')
  return i1850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1853 = data
  i1852.name = i1853[0]
  i1852.index = i1853[1]
  i1852.startup = !!i1853[2]
  return i1852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1855 = data
  i1854.aspect = i1855[0]
  i1854.orthographic = !!i1855[1]
  i1854.orthographicSize = i1855[2]
  i1854.backgroundColor = new pc.Color(i1855[3], i1855[4], i1855[5], i1855[6])
  i1854.nearClipPlane = i1855[7]
  i1854.farClipPlane = i1855[8]
  i1854.fieldOfView = i1855[9]
  i1854.depth = i1855[10]
  i1854.clearFlags = i1855[11]
  i1854.cullingMask = i1855[12]
  i1854.rect = i1855[13]
  request.r(i1855[14], i1855[15], 0, i1854, 'targetTexture')
  i1854.usePhysicalProperties = !!i1855[16]
  i1854.focalLength = i1855[17]
  i1854.sensorSize = new pc.Vec2( i1855[18], i1855[19] )
  i1854.lensShift = new pc.Vec2( i1855[20], i1855[21] )
  i1854.gateFit = i1855[22]
  i1854.commandBufferCount = i1855[23]
  i1854.cameraType = i1855[24]
  i1854.enabled = !!i1855[25]
  return i1854
}

Deserializers["CheckSize"] = function (request, data, root) {
  var i1856 = root || request.c( 'CheckSize' )
  var i1857 = data
  i1856.size16by9 = i1857[0]
  i1856.size18by9 = i1857[1]
  i1856.sizeLong = i1857[2]
  request.r(i1857[3], i1857[4], 0, i1856, 'diskTransform')
  i1856.diskPos16by9 = new pc.Vec3( i1857[5], i1857[6], i1857[7] )
  i1856.diskPosLong = new pc.Vec3( i1857[8], i1857[9], i1857[10] )
  request.r(i1857[11], i1857[12], 0, i1856, 'trayManager')
  request.r(i1857[13], i1857[14], 0, i1856, 'button_doc')
  request.r(i1857[15], i1857[16], 0, i1856, 'target')
  request.r(i1857[17], i1857[18], 0, i1856, 'timer')
  request.r(i1857[19], i1857[20], 0, i1856, 'logoGame')
  request.r(i1857[21], i1857[22], 0, i1856, 'buttonGame')
  return i1856
}

Deserializers["GameManager"] = function (request, data, root) {
  var i1858 = root || request.c( 'GameManager' )
  var i1859 = data
  i1858.isClickToLog = !!i1859[0]
  i1858.clicksToLog = i1859[1]
  i1858.isTimer = !!i1859[2]
  i1858.time = i1859[3]
  i1858.clickCount = i1859[4]
  i1858.isClick = !!i1859[5]
  i1858.finishGame = !!i1859[6]
  request.r(i1859[7], i1859[8], 0, i1858, 'textPoint')
  i1858.point = i1859[9]
  request.r(i1859[10], i1859[11], 0, i1858, 'tutGame')
  request.r(i1859[12], i1859[13], 0, i1858, 'target')
  request.r(i1859[14], i1859[15], 0, i1858, 'text_target')
  i1858.totalTime = i1859[16]
  return i1858
}

Deserializers["TutorialManager"] = function (request, data, root) {
  var i1860 = root || request.c( 'TutorialManager' )
  var i1861 = data
  request.r(i1861[0], i1861[1], 0, i1860, 'handPrefab')
  return i1860
}

Deserializers["AudioManager"] = function (request, data, root) {
  var i1862 = root || request.c( 'AudioManager' )
  var i1863 = data
  request.r(i1863[0], i1863[1], 0, i1862, 'bgmSource')
  request.r(i1863[2], i1863[3], 0, i1862, 'sfxSource')
  request.r(i1863[4], i1863[5], 0, i1862, 'bgm')
  request.r(i1863[6], i1863[7], 0, i1862, 'finish')
  request.r(i1863[8], i1863[9], 0, i1862, 'drog')
  request.r(i1863[10], i1863[11], 0, i1862, 'match')
  request.r(i1863[12], i1863[13], 0, i1862, 'pop')
  request.r(i1863[14], i1863[15], 0, i1862, 'lose')
  request.r(i1863[16], i1863[17], 0, i1862, 'drag')
  request.r(i1863[18], i1863[19], 0, i1862, 'closeBox')
  request.r(i1863[20], i1863[21], 0, i1862, 'normalTick')
  request.r(i1863[22], i1863[23], 0, i1862, 'warningTick')
  return i1862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1865 = data
  request.r(i1865[0], i1865[1], 0, i1864, 'clip')
  request.r(i1865[2], i1865[3], 0, i1864, 'outputAudioMixerGroup')
  i1864.playOnAwake = !!i1865[4]
  i1864.loop = !!i1865[5]
  i1864.time = i1865[6]
  i1864.volume = i1865[7]
  i1864.pitch = i1865[8]
  i1864.enabled = !!i1865[9]
  return i1864
}

Deserializers["TrayManager"] = function (request, data, root) {
  var i1866 = root || request.c( 'TrayManager' )
  var i1867 = data
  i1866.spacing = i1867[0]
  i1866.visibleCount = i1867[1]
  i1866.moveTime = i1867[2]
  request.r(i1867[3], i1867[4], 0, i1866, 'win')
  var i1869 = i1867[5]
  var i1868 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i1869.length; i += 2) {
  request.r(i1869[i + 0], i1869[i + 1], 1, i1868, '')
  }
  i1866.listTray = i1868
  var i1871 = i1867[6]
  var i1870 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1871.length; i += 2) {
  request.r(i1871[i + 0], i1871[i + 1], 1, i1870, '')
  }
  i1866.activeTrays = i1870
  i1866.idleTime = i1867[7]
  i1866.hintDelay = i1867[8]
  i1866.isTutorialShowing = !!i1867[9]
  i1866.isFirstTutorial = !!i1867[10]
  request.r(i1867[11], i1867[12], 0, i1866, 'manualTray')
  request.r(i1867[13], i1867[14], 0, i1866, 'manualItem')
  i1866.columns = i1867[15]
  i1866.rows = i1867[16]
  i1866.stepX = i1867[17]
  i1866.stepY = i1867[18]
  return i1866
}

Deserializers["Tray"] = function (request, data, root) {
  var i1876 = root || request.c( 'Tray' )
  var i1877 = data
  i1876.spacing = i1877[0]
  i1876.moveTime = i1877[1]
  request.r(i1877[2], i1877[3], 0, i1876, 'diskPrefab')
  request.r(i1877[4], i1877[5], 0, i1876, 'diskTransform')
  i1876.shrinkTime = i1877[6]
  i1876.itemToDiskTime = i1877[7]
  i1876.attachDelay = i1877[8]
  i1876.followSmooth = i1877[9]
  i1876.diskItemScale = new pc.Vec3( i1877[10], i1877[11], i1877[12] )
  request.r(i1877[13], i1877[14], 0, i1876, 'soldOutPrefabs')
  var i1879 = i1877[15]
  var i1878 = []
  for(var i = 0; i < i1879.length; i += 2) {
  request.r(i1879[i + 0], i1879[i + 1], 2, i1878, '')
  }
  i1876.listItem = i1878
  i1876.maxSlot = i1877[16]
  i1876.isCompleted = !!i1877[17]
  var i1881 = i1877[18]
  var i1880 = []
  for(var i = 0; i < i1881.length; i += 2) {
  request.r(i1881[i + 0], i1881[i + 1], 2, i1880, '')
  }
  i1876.slots = i1880
  i1876.isClosed = !!i1877[19]
  request.r(i1877[20], i1877[21], 0, i1876, 'fireEffectPrefab')
  i1876.fireEffectTime = i1877[22]
  return i1876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i1886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i1887 = data
  i1886.usedByComposite = !!i1887[0]
  i1886.autoTiling = !!i1887[1]
  i1886.size = new pc.Vec2( i1887[2], i1887[3] )
  i1886.edgeRadius = i1887[4]
  i1886.enabled = !!i1887[5]
  i1886.isTrigger = !!i1887[6]
  i1886.usedByEffector = !!i1887[7]
  i1886.density = i1887[8]
  i1886.offset = new pc.Vec2( i1887[9], i1887[10] )
  request.r(i1887[11], i1887[12], 0, i1886, 'material')
  return i1886
}

Deserializers["Slot"] = function (request, data, root) {
  var i1888 = root || request.c( 'Slot' )
  var i1889 = data
  request.r(i1889[0], i1889[1], 0, i1888, 'anchor')
  request.r(i1889[2], i1889[3], 0, i1888, 'currentItem')
  request.r(i1889[4], i1889[5], 0, i1888, 'tray')
  return i1888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i1890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i1891 = data
  i1890.bodyType = i1891[0]
  request.r(i1891[1], i1891[2], 0, i1890, 'material')
  i1890.simulated = !!i1891[3]
  i1890.useAutoMass = !!i1891[4]
  i1890.mass = i1891[5]
  i1890.drag = i1891[6]
  i1890.angularDrag = i1891[7]
  i1890.gravityScale = i1891[8]
  i1890.collisionDetectionMode = i1891[9]
  i1890.sleepMode = i1891[10]
  i1890.constraints = i1891[11]
  return i1890
}

Deserializers["DragItem"] = function (request, data, root) {
  var i1892 = root || request.c( 'DragItem' )
  var i1893 = data
  i1892.isLocked = !!i1893[0]
  i1892.focusOutlineSize = i1893[1]
  i1892.outlineTweenTime = i1893[2]
  return i1892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1895 = data
  i1894.pivot = new pc.Vec2( i1895[0], i1895[1] )
  i1894.anchorMin = new pc.Vec2( i1895[2], i1895[3] )
  i1894.anchorMax = new pc.Vec2( i1895[4], i1895[5] )
  i1894.sizeDelta = new pc.Vec2( i1895[6], i1895[7] )
  i1894.anchoredPosition3D = new pc.Vec3( i1895[8], i1895[9], i1895[10] )
  i1894.rotation = new pc.Quat(i1895[11], i1895[12], i1895[13], i1895[14])
  i1894.scale = new pc.Vec3( i1895[15], i1895[16], i1895[17] )
  return i1894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1897 = data
  i1896.planeDistance = i1897[0]
  i1896.referencePixelsPerUnit = i1897[1]
  i1896.isFallbackOverlay = !!i1897[2]
  i1896.renderMode = i1897[3]
  i1896.renderOrder = i1897[4]
  i1896.sortingLayerName = i1897[5]
  i1896.sortingOrder = i1897[6]
  i1896.scaleFactor = i1897[7]
  request.r(i1897[8], i1897[9], 0, i1896, 'worldCamera')
  i1896.overrideSorting = !!i1897[10]
  i1896.pixelPerfect = !!i1897[11]
  i1896.targetDisplay = i1897[12]
  i1896.overridePixelPerfect = !!i1897[13]
  i1896.enabled = !!i1897[14]
  return i1896
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1898 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1899 = data
  i1898.m_UiScaleMode = i1899[0]
  i1898.m_ReferencePixelsPerUnit = i1899[1]
  i1898.m_ScaleFactor = i1899[2]
  i1898.m_ReferenceResolution = new pc.Vec2( i1899[3], i1899[4] )
  i1898.m_ScreenMatchMode = i1899[5]
  i1898.m_MatchWidthOrHeight = i1899[6]
  i1898.m_PhysicalUnit = i1899[7]
  i1898.m_FallbackScreenDPI = i1899[8]
  i1898.m_DefaultSpriteDPI = i1899[9]
  i1898.m_DynamicPixelsPerUnit = i1899[10]
  i1898.m_PresetInfoIsWorld = !!i1899[11]
  return i1898
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1900 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1901 = data
  i1900.m_IgnoreReversedGraphics = !!i1901[0]
  i1900.m_BlockingObjects = i1901[1]
  i1900.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1901[2] )
  return i1900
}

Deserializers["CountdownTimer"] = function (request, data, root) {
  var i1902 = root || request.c( 'CountdownTimer' )
  var i1903 = data
  request.r(i1903[0], i1903[1], 0, i1902, 'timerText')
  i1902.startSeconds = i1903[2]
  i1902.warningTime = i1903[3]
  i1902.warningColor = new pc.Color(i1903[4], i1903[5], i1903[6], i1903[7])
  i1902.pulseScale = i1903[8]
  i1902.pulseSpeed = i1903[9]
  request.r(i1903[10], i1903[11], 0, i1902, 'backgroundWarning')
  request.r(i1903[12], i1903[13], 0, i1902, 'timeUpPanel')
  i1902.hasStarted = !!i1903[14]
  i1902.bgMinAlpha = i1903[15]
  i1902.bgMaxAlpha = i1903[16]
  i1902.bgBlinkSpeed = i1903[17]
  request.r(i1903[18], i1903[19], 0, i1902, 'wwin')
  return i1902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1905 = data
  i1904.cullTransparentMesh = !!i1905[0]
  return i1904
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1906 = root || request.c( 'UnityEngine.UI.Image' )
  var i1907 = data
  request.r(i1907[0], i1907[1], 0, i1906, 'm_Sprite')
  i1906.m_Type = i1907[2]
  i1906.m_PreserveAspect = !!i1907[3]
  i1906.m_FillCenter = !!i1907[4]
  i1906.m_FillMethod = i1907[5]
  i1906.m_FillAmount = i1907[6]
  i1906.m_FillClockwise = !!i1907[7]
  i1906.m_FillOrigin = i1907[8]
  i1906.m_UseSpriteMesh = !!i1907[9]
  i1906.m_PixelsPerUnitMultiplier = i1907[10]
  i1906.m_Maskable = !!i1907[11]
  request.r(i1907[12], i1907[13], 0, i1906, 'm_Material')
  i1906.m_Color = new pc.Color(i1907[14], i1907[15], i1907[16], i1907[17])
  i1906.m_RaycastTarget = !!i1907[18]
  i1906.m_RaycastPadding = new pc.Vec4( i1907[19], i1907[20], i1907[21], i1907[22] )
  return i1906
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i1908 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i1909 = data
  i1908.m_hasFontAssetChanged = !!i1909[0]
  request.r(i1909[1], i1909[2], 0, i1908, 'm_baseMaterial')
  i1908.m_maskOffset = new pc.Vec4( i1909[3], i1909[4], i1909[5], i1909[6] )
  i1908.m_text = i1909[7]
  i1908.m_isRightToLeft = !!i1909[8]
  request.r(i1909[9], i1909[10], 0, i1908, 'm_fontAsset')
  request.r(i1909[11], i1909[12], 0, i1908, 'm_sharedMaterial')
  var i1911 = i1909[13]
  var i1910 = []
  for(var i = 0; i < i1911.length; i += 2) {
  request.r(i1911[i + 0], i1911[i + 1], 2, i1910, '')
  }
  i1908.m_fontSharedMaterials = i1910
  request.r(i1909[14], i1909[15], 0, i1908, 'm_fontMaterial')
  var i1913 = i1909[16]
  var i1912 = []
  for(var i = 0; i < i1913.length; i += 2) {
  request.r(i1913[i + 0], i1913[i + 1], 2, i1912, '')
  }
  i1908.m_fontMaterials = i1912
  i1908.m_fontColor32 = UnityEngine.Color32.ConstructColor(i1909[17], i1909[18], i1909[19], i1909[20])
  i1908.m_fontColor = new pc.Color(i1909[21], i1909[22], i1909[23], i1909[24])
  i1908.m_enableVertexGradient = !!i1909[25]
  i1908.m_colorMode = i1909[26]
  i1908.m_fontColorGradient = request.d('TMPro.VertexGradient', i1909[27], i1908.m_fontColorGradient)
  request.r(i1909[28], i1909[29], 0, i1908, 'm_fontColorGradientPreset')
  request.r(i1909[30], i1909[31], 0, i1908, 'm_spriteAsset')
  i1908.m_tintAllSprites = !!i1909[32]
  request.r(i1909[33], i1909[34], 0, i1908, 'm_StyleSheet')
  i1908.m_TextStyleHashCode = i1909[35]
  i1908.m_overrideHtmlColors = !!i1909[36]
  i1908.m_faceColor = UnityEngine.Color32.ConstructColor(i1909[37], i1909[38], i1909[39], i1909[40])
  i1908.m_fontSize = i1909[41]
  i1908.m_fontSizeBase = i1909[42]
  i1908.m_fontWeight = i1909[43]
  i1908.m_enableAutoSizing = !!i1909[44]
  i1908.m_fontSizeMin = i1909[45]
  i1908.m_fontSizeMax = i1909[46]
  i1908.m_fontStyle = i1909[47]
  i1908.m_HorizontalAlignment = i1909[48]
  i1908.m_VerticalAlignment = i1909[49]
  i1908.m_textAlignment = i1909[50]
  i1908.m_characterSpacing = i1909[51]
  i1908.m_wordSpacing = i1909[52]
  i1908.m_lineSpacing = i1909[53]
  i1908.m_lineSpacingMax = i1909[54]
  i1908.m_paragraphSpacing = i1909[55]
  i1908.m_charWidthMaxAdj = i1909[56]
  i1908.m_enableWordWrapping = !!i1909[57]
  i1908.m_wordWrappingRatios = i1909[58]
  i1908.m_overflowMode = i1909[59]
  request.r(i1909[60], i1909[61], 0, i1908, 'm_linkedTextComponent')
  request.r(i1909[62], i1909[63], 0, i1908, 'parentLinkedComponent')
  i1908.m_enableKerning = !!i1909[64]
  i1908.m_enableExtraPadding = !!i1909[65]
  i1908.checkPaddingRequired = !!i1909[66]
  i1908.m_isRichText = !!i1909[67]
  i1908.m_parseCtrlCharacters = !!i1909[68]
  i1908.m_isOrthographic = !!i1909[69]
  i1908.m_isCullingEnabled = !!i1909[70]
  i1908.m_horizontalMapping = i1909[71]
  i1908.m_verticalMapping = i1909[72]
  i1908.m_uvLineOffset = i1909[73]
  i1908.m_geometrySortingOrder = i1909[74]
  i1908.m_IsTextObjectScaleStatic = !!i1909[75]
  i1908.m_VertexBufferAutoSizeReduction = !!i1909[76]
  i1908.m_useMaxVisibleDescender = !!i1909[77]
  i1908.m_pageToDisplay = i1909[78]
  i1908.m_margin = new pc.Vec4( i1909[79], i1909[80], i1909[81], i1909[82] )
  i1908.m_isUsingLegacyAnimationComponent = !!i1909[83]
  i1908.m_isVolumetricText = !!i1909[84]
  i1908.m_Maskable = !!i1909[85]
  request.r(i1909[86], i1909[87], 0, i1908, 'm_Material')
  i1908.m_Color = new pc.Color(i1909[88], i1909[89], i1909[90], i1909[91])
  i1908.m_RaycastTarget = !!i1909[92]
  i1908.m_RaycastPadding = new pc.Vec4( i1909[93], i1909[94], i1909[95], i1909[96] )
  return i1908
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i1914 = root || request.c( 'TMPro.VertexGradient' )
  var i1915 = data
  i1914.topLeft = new pc.Color(i1915[0], i1915[1], i1915[2], i1915[3])
  i1914.topRight = new pc.Color(i1915[4], i1915[5], i1915[6], i1915[7])
  i1914.bottomLeft = new pc.Color(i1915[8], i1915[9], i1915[10], i1915[11])
  i1914.bottomRight = new pc.Color(i1915[12], i1915[13], i1915[14], i1915[15])
  return i1914
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1916 = root || request.c( 'UnityEngine.UI.Button' )
  var i1917 = data
  i1916.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1917[0], i1916.m_OnClick)
  i1916.m_Navigation = request.d('UnityEngine.UI.Navigation', i1917[1], i1916.m_Navigation)
  i1916.m_Transition = i1917[2]
  i1916.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1917[3], i1916.m_Colors)
  i1916.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1917[4], i1916.m_SpriteState)
  i1916.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1917[5], i1916.m_AnimationTriggers)
  i1916.m_Interactable = !!i1917[6]
  request.r(i1917[7], i1917[8], 0, i1916, 'm_TargetGraphic')
  return i1916
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1918 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1919 = data
  i1918.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1919[0], i1918.m_PersistentCalls)
  return i1918
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1920 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1921 = data
  var i1923 = i1921[0]
  var i1922 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1923.length; i += 1) {
    i1922.add(request.d('UnityEngine.Events.PersistentCall', i1923[i + 0]));
  }
  i1920.m_Calls = i1922
  return i1920
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1926 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1927 = data
  request.r(i1927[0], i1927[1], 0, i1926, 'm_Target')
  i1926.m_TargetAssemblyTypeName = i1927[2]
  i1926.m_MethodName = i1927[3]
  i1926.m_Mode = i1927[4]
  i1926.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1927[5], i1926.m_Arguments)
  i1926.m_CallState = i1927[6]
  return i1926
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1928 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1929 = data
  request.r(i1929[0], i1929[1], 0, i1928, 'm_ObjectArgument')
  i1928.m_ObjectArgumentAssemblyTypeName = i1929[2]
  i1928.m_IntArgument = i1929[3]
  i1928.m_FloatArgument = i1929[4]
  i1928.m_StringArgument = i1929[5]
  i1928.m_BoolArgument = !!i1929[6]
  return i1928
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1930 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1931 = data
  i1930.m_Mode = i1931[0]
  i1930.m_WrapAround = !!i1931[1]
  request.r(i1931[2], i1931[3], 0, i1930, 'm_SelectOnUp')
  request.r(i1931[4], i1931[5], 0, i1930, 'm_SelectOnDown')
  request.r(i1931[6], i1931[7], 0, i1930, 'm_SelectOnLeft')
  request.r(i1931[8], i1931[9], 0, i1930, 'm_SelectOnRight')
  return i1930
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1932 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1933 = data
  i1932.m_NormalColor = new pc.Color(i1933[0], i1933[1], i1933[2], i1933[3])
  i1932.m_HighlightedColor = new pc.Color(i1933[4], i1933[5], i1933[6], i1933[7])
  i1932.m_PressedColor = new pc.Color(i1933[8], i1933[9], i1933[10], i1933[11])
  i1932.m_SelectedColor = new pc.Color(i1933[12], i1933[13], i1933[14], i1933[15])
  i1932.m_DisabledColor = new pc.Color(i1933[16], i1933[17], i1933[18], i1933[19])
  i1932.m_ColorMultiplier = i1933[20]
  i1932.m_FadeDuration = i1933[21]
  return i1932
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1934 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1935 = data
  request.r(i1935[0], i1935[1], 0, i1934, 'm_HighlightedSprite')
  request.r(i1935[2], i1935[3], 0, i1934, 'm_PressedSprite')
  request.r(i1935[4], i1935[5], 0, i1934, 'm_SelectedSprite')
  request.r(i1935[6], i1935[7], 0, i1934, 'm_DisabledSprite')
  return i1934
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1936 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1937 = data
  i1936.m_NormalTrigger = i1937[0]
  i1936.m_HighlightedTrigger = i1937[1]
  i1936.m_PressedTrigger = i1937[2]
  i1936.m_SelectedTrigger = i1937[3]
  i1936.m_DisabledTrigger = i1937[4]
  return i1936
}

Deserializers["ScalePopLoop"] = function (request, data, root) {
  var i1938 = root || request.c( 'ScalePopLoop' )
  var i1939 = data
  i1938.minScale = new pc.Vec3( i1939[0], i1939[1], i1939[2] )
  i1938.maxScale = new pc.Vec3( i1939[3], i1939[4], i1939[5] )
  i1938.duration = i1939[6]
  i1938.ease = i1939[7]
  return i1938
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1940 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1941 = data
  request.r(i1941[0], i1941[1], 0, i1940, 'm_FirstSelected')
  i1940.m_sendNavigationEvents = !!i1941[2]
  i1940.m_DragThreshold = i1941[3]
  return i1940
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1942 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1943 = data
  i1942.m_HorizontalAxis = i1943[0]
  i1942.m_VerticalAxis = i1943[1]
  i1942.m_SubmitButton = i1943[2]
  i1942.m_CancelButton = i1943[3]
  i1942.m_InputActionsPerSecond = i1943[4]
  i1942.m_RepeatDelay = i1943[5]
  i1942.m_ForceModuleActive = !!i1943[6]
  i1942.m_SendPointerHoverToParent = !!i1943[7]
  return i1942
}

Deserializers["DiskTransform"] = function (request, data, root) {
  var i1944 = root || request.c( 'DiskTransform' )
  var i1945 = data
  return i1944
}

Deserializers["EndCart_Lose"] = function (request, data, root) {
  var i1946 = root || request.c( 'EndCart_Lose' )
  var i1947 = data
  request.r(i1947[0], i1947[1], 0, i1946, 'actionButton')
  request.r(i1947[2], i1947[3], 0, i1946, 'emoji')
  request.r(i1947[4], i1947[5], 0, i1946, 'logo')
  request.r(i1947[6], i1947[7], 0, i1946, 'praticle')
  i1946.buttonScaleTime = i1947[8]
  i1946.itemStartScale = i1947[9]
  i1946.itemPopScale = i1947[10]
  i1946.itemInTime = i1947[11]
  i1946.itemSettleTime = i1947[12]
  i1946.itemFinalScale = i1947[13]
  i1946.emojiFinalScale = i1947[14]
  i1946.otherItemFinalScale = i1947[15]
  return i1946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i1948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i1949 = data
  i1948.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i1949[0], i1948.main)
  i1948.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i1949[1], i1948.colorBySpeed)
  i1948.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i1949[2], i1948.colorOverLifetime)
  i1948.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i1949[3], i1948.emission)
  i1948.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i1949[4], i1948.rotationBySpeed)
  i1948.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i1949[5], i1948.rotationOverLifetime)
  i1948.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i1949[6], i1948.shape)
  i1948.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i1949[7], i1948.sizeBySpeed)
  i1948.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i1949[8], i1948.sizeOverLifetime)
  i1948.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i1949[9], i1948.textureSheetAnimation)
  i1948.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i1949[10], i1948.velocityOverLifetime)
  i1948.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i1949[11], i1948.noise)
  i1948.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i1949[12], i1948.inheritVelocity)
  i1948.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i1949[13], i1948.forceOverLifetime)
  i1948.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i1949[14], i1948.limitVelocityOverLifetime)
  i1948.useAutoRandomSeed = !!i1949[15]
  i1948.randomSeed = i1949[16]
  return i1948
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i1950 = root || new pc.ParticleSystemMain()
  var i1951 = data
  i1950.duration = i1951[0]
  i1950.loop = !!i1951[1]
  i1950.prewarm = !!i1951[2]
  i1950.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1951[3], i1950.startDelay)
  i1950.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1951[4], i1950.startLifetime)
  i1950.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1951[5], i1950.startSpeed)
  i1950.startSize3D = !!i1951[6]
  i1950.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1951[7], i1950.startSizeX)
  i1950.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1951[8], i1950.startSizeY)
  i1950.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1951[9], i1950.startSizeZ)
  i1950.startRotation3D = !!i1951[10]
  i1950.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1951[11], i1950.startRotationX)
  i1950.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1951[12], i1950.startRotationY)
  i1950.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1951[13], i1950.startRotationZ)
  i1950.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1951[14], i1950.startColor)
  i1950.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1951[15], i1950.gravityModifier)
  i1950.simulationSpace = i1951[16]
  request.r(i1951[17], i1951[18], 0, i1950, 'customSimulationSpace')
  i1950.simulationSpeed = i1951[19]
  i1950.useUnscaledTime = !!i1951[20]
  i1950.scalingMode = i1951[21]
  i1950.playOnAwake = !!i1951[22]
  i1950.maxParticles = i1951[23]
  i1950.emitterVelocityMode = i1951[24]
  i1950.stopAction = i1951[25]
  return i1950
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i1952 = root || new pc.MinMaxCurve()
  var i1953 = data
  i1952.mode = i1953[0]
  i1952.curveMin = new pc.AnimationCurve( { keys_flow: i1953[1] } )
  i1952.curveMax = new pc.AnimationCurve( { keys_flow: i1953[2] } )
  i1952.curveMultiplier = i1953[3]
  i1952.constantMin = i1953[4]
  i1952.constantMax = i1953[5]
  return i1952
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i1954 = root || new pc.MinMaxGradient()
  var i1955 = data
  i1954.mode = i1955[0]
  i1954.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1955[1], i1954.gradientMin)
  i1954.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1955[2], i1954.gradientMax)
  i1954.colorMin = new pc.Color(i1955[3], i1955[4], i1955[5], i1955[6])
  i1954.colorMax = new pc.Color(i1955[7], i1955[8], i1955[9], i1955[10])
  return i1954
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i1956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i1957 = data
  i1956.mode = i1957[0]
  var i1959 = i1957[1]
  var i1958 = []
  for(var i = 0; i < i1959.length; i += 1) {
    i1958.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i1959[i + 0]) );
  }
  i1956.colorKeys = i1958
  var i1961 = i1957[2]
  var i1960 = []
  for(var i = 0; i < i1961.length; i += 1) {
    i1960.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i1961[i + 0]) );
  }
  i1956.alphaKeys = i1960
  return i1956
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i1964 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i1965 = data
  i1964.color = new pc.Color(i1965[0], i1965[1], i1965[2], i1965[3])
  i1964.time = i1965[4]
  return i1964
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i1968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i1969 = data
  i1968.alpha = i1969[0]
  i1968.time = i1969[1]
  return i1968
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i1970 = root || new pc.ParticleSystemColorBySpeed()
  var i1971 = data
  i1970.enabled = !!i1971[0]
  i1970.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1971[1], i1970.color)
  i1970.range = new pc.Vec2( i1971[2], i1971[3] )
  return i1970
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i1972 = root || new pc.ParticleSystemColorOverLifetime()
  var i1973 = data
  i1972.enabled = !!i1973[0]
  i1972.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1973[1], i1972.color)
  return i1972
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i1974 = root || new pc.ParticleSystemEmitter()
  var i1975 = data
  i1974.enabled = !!i1975[0]
  i1974.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1975[1], i1974.rateOverTime)
  i1974.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1975[2], i1974.rateOverDistance)
  var i1977 = i1975[3]
  var i1976 = []
  for(var i = 0; i < i1977.length; i += 1) {
    i1976.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i1977[i + 0]) );
  }
  i1974.bursts = i1976
  return i1974
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i1980 = root || new pc.ParticleSystemBurst()
  var i1981 = data
  i1980.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1981[0], i1980.count)
  i1980.cycleCount = i1981[1]
  i1980.minCount = i1981[2]
  i1980.maxCount = i1981[3]
  i1980.repeatInterval = i1981[4]
  i1980.time = i1981[5]
  return i1980
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i1982 = root || new pc.ParticleSystemRotationBySpeed()
  var i1983 = data
  i1982.enabled = !!i1983[0]
  i1982.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1983[1], i1982.x)
  i1982.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1983[2], i1982.y)
  i1982.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1983[3], i1982.z)
  i1982.separateAxes = !!i1983[4]
  i1982.range = new pc.Vec2( i1983[5], i1983[6] )
  return i1982
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i1984 = root || new pc.ParticleSystemRotationOverLifetime()
  var i1985 = data
  i1984.enabled = !!i1985[0]
  i1984.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1985[1], i1984.x)
  i1984.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1985[2], i1984.y)
  i1984.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1985[3], i1984.z)
  i1984.separateAxes = !!i1985[4]
  return i1984
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i1986 = root || new pc.ParticleSystemShape()
  var i1987 = data
  i1986.enabled = !!i1987[0]
  i1986.shapeType = i1987[1]
  i1986.randomDirectionAmount = i1987[2]
  i1986.sphericalDirectionAmount = i1987[3]
  i1986.randomPositionAmount = i1987[4]
  i1986.alignToDirection = !!i1987[5]
  i1986.radius = i1987[6]
  i1986.radiusMode = i1987[7]
  i1986.radiusSpread = i1987[8]
  i1986.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1987[9], i1986.radiusSpeed)
  i1986.radiusThickness = i1987[10]
  i1986.angle = i1987[11]
  i1986.length = i1987[12]
  i1986.boxThickness = new pc.Vec3( i1987[13], i1987[14], i1987[15] )
  i1986.meshShapeType = i1987[16]
  request.r(i1987[17], i1987[18], 0, i1986, 'mesh')
  request.r(i1987[19], i1987[20], 0, i1986, 'meshRenderer')
  request.r(i1987[21], i1987[22], 0, i1986, 'skinnedMeshRenderer')
  i1986.useMeshMaterialIndex = !!i1987[23]
  i1986.meshMaterialIndex = i1987[24]
  i1986.useMeshColors = !!i1987[25]
  i1986.normalOffset = i1987[26]
  i1986.arc = i1987[27]
  i1986.arcMode = i1987[28]
  i1986.arcSpread = i1987[29]
  i1986.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1987[30], i1986.arcSpeed)
  i1986.donutRadius = i1987[31]
  i1986.position = new pc.Vec3( i1987[32], i1987[33], i1987[34] )
  i1986.rotation = new pc.Vec3( i1987[35], i1987[36], i1987[37] )
  i1986.scale = new pc.Vec3( i1987[38], i1987[39], i1987[40] )
  return i1986
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i1988 = root || new pc.ParticleSystemSizeBySpeed()
  var i1989 = data
  i1988.enabled = !!i1989[0]
  i1988.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1989[1], i1988.x)
  i1988.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1989[2], i1988.y)
  i1988.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1989[3], i1988.z)
  i1988.separateAxes = !!i1989[4]
  i1988.range = new pc.Vec2( i1989[5], i1989[6] )
  return i1988
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i1990 = root || new pc.ParticleSystemSizeOverLifetime()
  var i1991 = data
  i1990.enabled = !!i1991[0]
  i1990.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1991[1], i1990.x)
  i1990.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1991[2], i1990.y)
  i1990.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1991[3], i1990.z)
  i1990.separateAxes = !!i1991[4]
  return i1990
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i1992 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i1993 = data
  i1992.enabled = !!i1993[0]
  i1992.mode = i1993[1]
  i1992.animation = i1993[2]
  i1992.numTilesX = i1993[3]
  i1992.numTilesY = i1993[4]
  i1992.useRandomRow = !!i1993[5]
  i1992.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1993[6], i1992.frameOverTime)
  i1992.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1993[7], i1992.startFrame)
  i1992.cycleCount = i1993[8]
  i1992.rowIndex = i1993[9]
  i1992.flipU = i1993[10]
  i1992.flipV = i1993[11]
  i1992.spriteCount = i1993[12]
  var i1995 = i1993[13]
  var i1994 = []
  for(var i = 0; i < i1995.length; i += 2) {
  request.r(i1995[i + 0], i1995[i + 1], 2, i1994, '')
  }
  i1992.sprites = i1994
  return i1992
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i1998 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i1999 = data
  i1998.enabled = !!i1999[0]
  i1998.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1999[1], i1998.x)
  i1998.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1999[2], i1998.y)
  i1998.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1999[3], i1998.z)
  i1998.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1999[4], i1998.radial)
  i1998.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1999[5], i1998.speedModifier)
  i1998.space = i1999[6]
  i1998.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1999[7], i1998.orbitalX)
  i1998.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1999[8], i1998.orbitalY)
  i1998.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1999[9], i1998.orbitalZ)
  i1998.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1999[10], i1998.orbitalOffsetX)
  i1998.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1999[11], i1998.orbitalOffsetY)
  i1998.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1999[12], i1998.orbitalOffsetZ)
  return i1998
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2000 = root || new pc.ParticleSystemNoise()
  var i2001 = data
  i2000.enabled = !!i2001[0]
  i2000.separateAxes = !!i2001[1]
  i2000.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2001[2], i2000.strengthX)
  i2000.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2001[3], i2000.strengthY)
  i2000.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2001[4], i2000.strengthZ)
  i2000.frequency = i2001[5]
  i2000.damping = !!i2001[6]
  i2000.octaveCount = i2001[7]
  i2000.octaveMultiplier = i2001[8]
  i2000.octaveScale = i2001[9]
  i2000.quality = i2001[10]
  i2000.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2001[11], i2000.scrollSpeed)
  i2000.scrollSpeedMultiplier = i2001[12]
  i2000.remapEnabled = !!i2001[13]
  i2000.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2001[14], i2000.remapX)
  i2000.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2001[15], i2000.remapY)
  i2000.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2001[16], i2000.remapZ)
  i2000.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2001[17], i2000.positionAmount)
  i2000.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2001[18], i2000.rotationAmount)
  i2000.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2001[19], i2000.sizeAmount)
  return i2000
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2002 = root || new pc.ParticleSystemInheritVelocity()
  var i2003 = data
  i2002.enabled = !!i2003[0]
  i2002.mode = i2003[1]
  i2002.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2003[2], i2002.curve)
  return i2002
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2004 = root || new pc.ParticleSystemForceOverLifetime()
  var i2005 = data
  i2004.enabled = !!i2005[0]
  i2004.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2005[1], i2004.x)
  i2004.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2005[2], i2004.y)
  i2004.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2005[3], i2004.z)
  i2004.space = i2005[4]
  i2004.randomized = !!i2005[5]
  return i2004
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2006 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2007 = data
  i2006.enabled = !!i2007[0]
  i2006.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2007[1], i2006.limit)
  i2006.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2007[2], i2006.limitX)
  i2006.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2007[3], i2006.limitY)
  i2006.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2007[4], i2006.limitZ)
  i2006.dampen = i2007[5]
  i2006.separateAxes = !!i2007[6]
  i2006.space = i2007[7]
  i2006.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2007[8], i2006.drag)
  i2006.multiplyDragByParticleSize = !!i2007[9]
  i2006.multiplyDragByParticleVelocity = !!i2007[10]
  return i2006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2009 = data
  request.r(i2009[0], i2009[1], 0, i2008, 'mesh')
  i2008.meshCount = i2009[2]
  i2008.activeVertexStreamsCount = i2009[3]
  i2008.alignment = i2009[4]
  i2008.renderMode = i2009[5]
  i2008.sortMode = i2009[6]
  i2008.lengthScale = i2009[7]
  i2008.velocityScale = i2009[8]
  i2008.cameraVelocityScale = i2009[9]
  i2008.normalDirection = i2009[10]
  i2008.sortingFudge = i2009[11]
  i2008.minParticleSize = i2009[12]
  i2008.maxParticleSize = i2009[13]
  i2008.pivot = new pc.Vec3( i2009[14], i2009[15], i2009[16] )
  request.r(i2009[17], i2009[18], 0, i2008, 'trailMaterial')
  i2008.applyActiveColorSpace = !!i2009[19]
  i2008.enabled = !!i2009[20]
  request.r(i2009[21], i2009[22], 0, i2008, 'sharedMaterial')
  var i2011 = i2009[23]
  var i2010 = []
  for(var i = 0; i < i2011.length; i += 2) {
  request.r(i2011[i + 0], i2011[i + 1], 2, i2010, '')
  }
  i2008.sharedMaterials = i2010
  i2008.receiveShadows = !!i2009[24]
  i2008.shadowCastingMode = i2009[25]
  i2008.sortingLayerID = i2009[26]
  i2008.sortingOrder = i2009[27]
  i2008.lightmapIndex = i2009[28]
  i2008.lightmapSceneIndex = i2009[29]
  i2008.lightmapScaleOffset = new pc.Vec4( i2009[30], i2009[31], i2009[32], i2009[33] )
  i2008.lightProbeUsage = i2009[34]
  i2008.reflectionProbeUsage = i2009[35]
  return i2008
}

Deserializers["Button"] = function (request, data, root) {
  var i2012 = root || request.c( 'Button' )
  var i2013 = data
  return i2012
}

Deserializers["RotateLoop"] = function (request, data, root) {
  var i2014 = root || request.c( 'RotateLoop' )
  var i2015 = data
  i2014.rotateSpeed = i2015[0]
  return i2014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2017 = data
  i2016.ambientIntensity = i2017[0]
  i2016.reflectionIntensity = i2017[1]
  i2016.ambientMode = i2017[2]
  i2016.ambientLight = new pc.Color(i2017[3], i2017[4], i2017[5], i2017[6])
  i2016.ambientSkyColor = new pc.Color(i2017[7], i2017[8], i2017[9], i2017[10])
  i2016.ambientGroundColor = new pc.Color(i2017[11], i2017[12], i2017[13], i2017[14])
  i2016.ambientEquatorColor = new pc.Color(i2017[15], i2017[16], i2017[17], i2017[18])
  i2016.fogColor = new pc.Color(i2017[19], i2017[20], i2017[21], i2017[22])
  i2016.fogEndDistance = i2017[23]
  i2016.fogStartDistance = i2017[24]
  i2016.fogDensity = i2017[25]
  i2016.fog = !!i2017[26]
  request.r(i2017[27], i2017[28], 0, i2016, 'skybox')
  i2016.fogMode = i2017[29]
  var i2019 = i2017[30]
  var i2018 = []
  for(var i = 0; i < i2019.length; i += 1) {
    i2018.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2019[i + 0]) );
  }
  i2016.lightmaps = i2018
  i2016.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2017[31], i2016.lightProbes)
  i2016.lightmapsMode = i2017[32]
  i2016.mixedBakeMode = i2017[33]
  i2016.environmentLightingMode = i2017[34]
  i2016.ambientProbe = new pc.SphericalHarmonicsL2(i2017[35])
  i2016.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i2017[36])
  i2016.useReferenceAmbientProbe = !!i2017[37]
  request.r(i2017[38], i2017[39], 0, i2016, 'customReflection')
  request.r(i2017[40], i2017[41], 0, i2016, 'defaultReflection')
  i2016.defaultReflectionMode = i2017[42]
  i2016.defaultReflectionResolution = i2017[43]
  i2016.sunLightObjectId = i2017[44]
  i2016.pixelLightCount = i2017[45]
  i2016.defaultReflectionHDR = !!i2017[46]
  i2016.hasLightDataAsset = !!i2017[47]
  i2016.hasManualGenerate = !!i2017[48]
  return i2016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2023 = data
  request.r(i2023[0], i2023[1], 0, i2022, 'lightmapColor')
  request.r(i2023[2], i2023[3], 0, i2022, 'lightmapDirection')
  return i2022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2024 = root || new UnityEngine.LightProbes()
  var i2025 = data
  return i2024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2033 = data
  var i2035 = i2033[0]
  var i2034 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2035.length; i += 1) {
    i2034.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2035[i + 0]));
  }
  i2032.ShaderCompilationErrors = i2034
  i2032.name = i2033[1]
  i2032.guid = i2033[2]
  var i2037 = i2033[3]
  var i2036 = []
  for(var i = 0; i < i2037.length; i += 1) {
    i2036.push( i2037[i + 0] );
  }
  i2032.shaderDefinedKeywords = i2036
  var i2039 = i2033[4]
  var i2038 = []
  for(var i = 0; i < i2039.length; i += 1) {
    i2038.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2039[i + 0]) );
  }
  i2032.passes = i2038
  var i2041 = i2033[5]
  var i2040 = []
  for(var i = 0; i < i2041.length; i += 1) {
    i2040.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2041[i + 0]) );
  }
  i2032.usePasses = i2040
  var i2043 = i2033[6]
  var i2042 = []
  for(var i = 0; i < i2043.length; i += 1) {
    i2042.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2043[i + 0]) );
  }
  i2032.defaultParameterValues = i2042
  request.r(i2033[7], i2033[8], 0, i2032, 'unityFallbackShader')
  i2032.readDepth = !!i2033[9]
  i2032.isCreatedByShaderGraph = !!i2033[10]
  i2032.disableBatching = !!i2033[11]
  i2032.compiled = !!i2033[12]
  return i2032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2047 = data
  i2046.shaderName = i2047[0]
  i2046.errorMessage = i2047[1]
  return i2046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2052 = root || new pc.UnityShaderPass()
  var i2053 = data
  i2052.id = i2053[0]
  i2052.subShaderIndex = i2053[1]
  i2052.name = i2053[2]
  i2052.passType = i2053[3]
  i2052.grabPassTextureName = i2053[4]
  i2052.usePass = !!i2053[5]
  i2052.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2053[6], i2052.zTest)
  i2052.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2053[7], i2052.zWrite)
  i2052.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2053[8], i2052.culling)
  i2052.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2053[9], i2052.blending)
  i2052.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2053[10], i2052.alphaBlending)
  i2052.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2053[11], i2052.colorWriteMask)
  i2052.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2053[12], i2052.offsetUnits)
  i2052.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2053[13], i2052.offsetFactor)
  i2052.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2053[14], i2052.stencilRef)
  i2052.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2053[15], i2052.stencilReadMask)
  i2052.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2053[16], i2052.stencilWriteMask)
  i2052.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2053[17], i2052.stencilOp)
  i2052.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2053[18], i2052.stencilOpFront)
  i2052.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2053[19], i2052.stencilOpBack)
  var i2055 = i2053[20]
  var i2054 = []
  for(var i = 0; i < i2055.length; i += 1) {
    i2054.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2055[i + 0]) );
  }
  i2052.tags = i2054
  var i2057 = i2053[21]
  var i2056 = []
  for(var i = 0; i < i2057.length; i += 1) {
    i2056.push( i2057[i + 0] );
  }
  i2052.passDefinedKeywords = i2056
  var i2059 = i2053[22]
  var i2058 = []
  for(var i = 0; i < i2059.length; i += 1) {
    i2058.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2059[i + 0]) );
  }
  i2052.passDefinedKeywordGroups = i2058
  var i2061 = i2053[23]
  var i2060 = []
  for(var i = 0; i < i2061.length; i += 1) {
    i2060.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2061[i + 0]) );
  }
  i2052.variants = i2060
  var i2063 = i2053[24]
  var i2062 = []
  for(var i = 0; i < i2063.length; i += 1) {
    i2062.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2063[i + 0]) );
  }
  i2052.excludedVariants = i2062
  i2052.hasDepthReader = !!i2053[25]
  return i2052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2065 = data
  i2064.val = i2065[0]
  i2064.name = i2065[1]
  return i2064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2067 = data
  i2066.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2067[0], i2066.src)
  i2066.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2067[1], i2066.dst)
  i2066.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2067[2], i2066.op)
  return i2066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2069 = data
  i2068.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2069[0], i2068.pass)
  i2068.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2069[1], i2068.fail)
  i2068.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2069[2], i2068.zFail)
  i2068.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2069[3], i2068.comp)
  return i2068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2073 = data
  i2072.name = i2073[0]
  i2072.value = i2073[1]
  return i2072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2077 = data
  var i2079 = i2077[0]
  var i2078 = []
  for(var i = 0; i < i2079.length; i += 1) {
    i2078.push( i2079[i + 0] );
  }
  i2076.keywords = i2078
  i2076.hasDiscard = !!i2077[1]
  return i2076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2083 = data
  i2082.passId = i2083[0]
  i2082.subShaderIndex = i2083[1]
  var i2085 = i2083[2]
  var i2084 = []
  for(var i = 0; i < i2085.length; i += 1) {
    i2084.push( i2085[i + 0] );
  }
  i2082.keywords = i2084
  i2082.vertexProgram = i2083[3]
  i2082.fragmentProgram = i2083[4]
  i2082.exportedForWebGl2 = !!i2083[5]
  i2082.readDepth = !!i2083[6]
  return i2082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2089 = data
  request.r(i2089[0], i2089[1], 0, i2088, 'shader')
  i2088.pass = i2089[2]
  return i2088
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2093 = data
  i2092.name = i2093[0]
  i2092.type = i2093[1]
  i2092.value = new pc.Vec4( i2093[2], i2093[3], i2093[4], i2093[5] )
  i2092.textureValue = i2093[6]
  i2092.shaderPropertyFlag = i2093[7]
  return i2092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2095 = data
  i2094.name = i2095[0]
  request.r(i2095[1], i2095[2], 0, i2094, 'texture')
  i2094.aabb = i2095[3]
  i2094.vertices = i2095[4]
  i2094.triangles = i2095[5]
  i2094.textureRect = UnityEngine.Rect.MinMaxRect(i2095[6], i2095[7], i2095[8], i2095[9])
  i2094.packedRect = UnityEngine.Rect.MinMaxRect(i2095[10], i2095[11], i2095[12], i2095[13])
  i2094.border = new pc.Vec4( i2095[14], i2095[15], i2095[16], i2095[17] )
  i2094.transparency = i2095[18]
  i2094.bounds = i2095[19]
  i2094.pixelsPerUnit = i2095[20]
  i2094.textureWidth = i2095[21]
  i2094.textureHeight = i2095[22]
  i2094.nativeSize = new pc.Vec2( i2095[23], i2095[24] )
  i2094.pivot = new pc.Vec2( i2095[25], i2095[26] )
  i2094.textureRectOffset = new pc.Vec2( i2095[27], i2095[28] )
  return i2094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2096 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2097 = data
  i2096.name = i2097[0]
  return i2096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2099 = data
  i2098.name = i2099[0]
  i2098.wrapMode = i2099[1]
  i2098.isLooping = !!i2099[2]
  i2098.length = i2099[3]
  var i2101 = i2099[4]
  var i2100 = []
  for(var i = 0; i < i2101.length; i += 1) {
    i2100.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2101[i + 0]) );
  }
  i2098.curves = i2100
  var i2103 = i2099[5]
  var i2102 = []
  for(var i = 0; i < i2103.length; i += 1) {
    i2102.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2103[i + 0]) );
  }
  i2098.events = i2102
  i2098.halfPrecision = !!i2099[6]
  i2098._frameRate = i2099[7]
  i2098.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i2099[8], i2098.localBounds)
  i2098.hasMuscleCurves = !!i2099[9]
  var i2105 = i2099[10]
  var i2104 = []
  for(var i = 0; i < i2105.length; i += 1) {
    i2104.push( i2105[i + 0] );
  }
  i2098.clipMuscleConstant = i2104
  i2098.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i2099[11], i2098.clipBindingConstant)
  return i2098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2108 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2109 = data
  i2108.path = i2109[0]
  i2108.hash = i2109[1]
  i2108.componentType = i2109[2]
  i2108.property = i2109[3]
  i2108.keys = i2109[4]
  var i2111 = i2109[5]
  var i2110 = []
  for(var i = 0; i < i2111.length; i += 1) {
    i2110.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2111[i + 0]) );
  }
  i2108.objectReferenceKeys = i2110
  return i2108
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2115 = data
  i2114.time = i2115[0]
  request.r(i2115[1], i2115[2], 0, i2114, 'value')
  return i2114
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2119 = data
  i2118.functionName = i2119[0]
  i2118.floatParameter = i2119[1]
  i2118.intParameter = i2119[2]
  i2118.stringParameter = i2119[3]
  request.r(i2119[4], i2119[5], 0, i2118, 'objectReferenceParameter')
  i2118.time = i2119[6]
  return i2118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2120 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2121 = data
  i2120.center = new pc.Vec3( i2121[0], i2121[1], i2121[2] )
  i2120.extends = new pc.Vec3( i2121[3], i2121[4], i2121[5] )
  return i2120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2124 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2125 = data
  var i2127 = i2125[0]
  var i2126 = []
  for(var i = 0; i < i2127.length; i += 1) {
    i2126.push( i2127[i + 0] );
  }
  i2124.genericBindings = i2126
  var i2129 = i2125[1]
  var i2128 = []
  for(var i = 0; i < i2129.length; i += 1) {
    i2128.push( i2129[i + 0] );
  }
  i2124.pptrCurveMapping = i2128
  return i2124
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2130 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2131 = data
  i2130.name = i2131[0]
  i2130.ascent = i2131[1]
  i2130.originalLineHeight = i2131[2]
  i2130.fontSize = i2131[3]
  var i2133 = i2131[4]
  var i2132 = []
  for(var i = 0; i < i2133.length; i += 1) {
    i2132.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2133[i + 0]) );
  }
  i2130.characterInfo = i2132
  request.r(i2131[5], i2131[6], 0, i2130, 'texture')
  i2130.originalFontSize = i2131[7]
  return i2130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2137 = data
  i2136.index = i2137[0]
  i2136.advance = i2137[1]
  i2136.bearing = i2137[2]
  i2136.glyphWidth = i2137[3]
  i2136.glyphHeight = i2137[4]
  i2136.minX = i2137[5]
  i2136.maxX = i2137[6]
  i2136.minY = i2137[7]
  i2136.maxY = i2137[8]
  i2136.uvBottomLeftX = i2137[9]
  i2136.uvBottomLeftY = i2137[10]
  i2136.uvBottomRightX = i2137[11]
  i2136.uvBottomRightY = i2137[12]
  i2136.uvTopLeftX = i2137[13]
  i2136.uvTopLeftY = i2137[14]
  i2136.uvTopRightX = i2137[15]
  i2136.uvTopRightY = i2137[16]
  return i2136
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2138 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2139 = data
  i2138.name = i2139[0]
  var i2141 = i2139[1]
  var i2140 = []
  for(var i = 0; i < i2141.length; i += 1) {
    i2140.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2141[i + 0]) );
  }
  i2138.layers = i2140
  var i2143 = i2139[2]
  var i2142 = []
  for(var i = 0; i < i2143.length; i += 1) {
    i2142.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2143[i + 0]) );
  }
  i2138.parameters = i2142
  i2138.animationClips = i2139[3]
  i2138.avatarUnsupported = i2139[4]
  return i2138
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2147 = data
  i2146.name = i2147[0]
  i2146.defaultWeight = i2147[1]
  i2146.blendingMode = i2147[2]
  i2146.avatarMask = i2147[3]
  i2146.syncedLayerIndex = i2147[4]
  i2146.syncedLayerAffectsTiming = !!i2147[5]
  i2146.syncedLayers = i2147[6]
  i2146.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2147[7], i2146.stateMachine)
  return i2146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2148 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2149 = data
  i2148.id = i2149[0]
  i2148.name = i2149[1]
  i2148.path = i2149[2]
  var i2151 = i2149[3]
  var i2150 = []
  for(var i = 0; i < i2151.length; i += 1) {
    i2150.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2151[i + 0]) );
  }
  i2148.states = i2150
  var i2153 = i2149[4]
  var i2152 = []
  for(var i = 0; i < i2153.length; i += 1) {
    i2152.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2153[i + 0]) );
  }
  i2148.machines = i2152
  var i2155 = i2149[5]
  var i2154 = []
  for(var i = 0; i < i2155.length; i += 1) {
    i2154.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2155[i + 0]) );
  }
  i2148.entryStateTransitions = i2154
  var i2157 = i2149[6]
  var i2156 = []
  for(var i = 0; i < i2157.length; i += 1) {
    i2156.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2157[i + 0]) );
  }
  i2148.exitStateTransitions = i2156
  var i2159 = i2149[7]
  var i2158 = []
  for(var i = 0; i < i2159.length; i += 1) {
    i2158.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2159[i + 0]) );
  }
  i2148.anyStateTransitions = i2158
  i2148.defaultStateId = i2149[8]
  return i2148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2162 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2163 = data
  i2162.id = i2163[0]
  i2162.name = i2163[1]
  i2162.cycleOffset = i2163[2]
  i2162.cycleOffsetParameter = i2163[3]
  i2162.cycleOffsetParameterActive = !!i2163[4]
  i2162.mirror = !!i2163[5]
  i2162.mirrorParameter = i2163[6]
  i2162.mirrorParameterActive = !!i2163[7]
  i2162.motionId = i2163[8]
  i2162.nameHash = i2163[9]
  i2162.fullPathHash = i2163[10]
  i2162.speed = i2163[11]
  i2162.speedParameter = i2163[12]
  i2162.speedParameterActive = !!i2163[13]
  i2162.tag = i2163[14]
  i2162.tagHash = i2163[15]
  i2162.writeDefaultValues = !!i2163[16]
  var i2165 = i2163[17]
  var i2164 = []
  for(var i = 0; i < i2165.length; i += 2) {
  request.r(i2165[i + 0], i2165[i + 1], 2, i2164, '')
  }
  i2162.behaviours = i2164
  var i2167 = i2163[18]
  var i2166 = []
  for(var i = 0; i < i2167.length; i += 1) {
    i2166.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2167[i + 0]) );
  }
  i2162.transitions = i2166
  return i2162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2172 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2173 = data
  i2172.fullPath = i2173[0]
  i2172.canTransitionToSelf = !!i2173[1]
  i2172.duration = i2173[2]
  i2172.exitTime = i2173[3]
  i2172.hasExitTime = !!i2173[4]
  i2172.hasFixedDuration = !!i2173[5]
  i2172.interruptionSource = i2173[6]
  i2172.offset = i2173[7]
  i2172.orderedInterruption = !!i2173[8]
  i2172.destinationStateId = i2173[9]
  i2172.isExit = !!i2173[10]
  i2172.mute = !!i2173[11]
  i2172.solo = !!i2173[12]
  var i2175 = i2173[13]
  var i2174 = []
  for(var i = 0; i < i2175.length; i += 1) {
    i2174.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2175[i + 0]) );
  }
  i2172.conditions = i2174
  return i2172
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2180 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2181 = data
  i2180.destinationStateId = i2181[0]
  i2180.isExit = !!i2181[1]
  i2180.mute = !!i2181[2]
  i2180.solo = !!i2181[3]
  var i2183 = i2181[4]
  var i2182 = []
  for(var i = 0; i < i2183.length; i += 1) {
    i2182.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2183[i + 0]) );
  }
  i2180.conditions = i2182
  return i2180
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2187 = data
  i2186.defaultBool = !!i2187[0]
  i2186.defaultFloat = i2187[1]
  i2186.defaultInt = i2187[2]
  i2186.name = i2187[3]
  i2186.nameHash = i2187[4]
  i2186.type = i2187[5]
  return i2186
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2188 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2189 = data
  i2188.name = i2189[0]
  i2188.bytes64 = i2189[1]
  i2188.data = i2189[2]
  return i2188
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2190 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2191 = data
  request.r(i2191[0], i2191[1], 0, i2190, 'atlas')
  i2190.normalStyle = i2191[2]
  i2190.normalSpacingOffset = i2191[3]
  i2190.boldStyle = i2191[4]
  i2190.boldSpacing = i2191[5]
  i2190.italicStyle = i2191[6]
  i2190.tabSize = i2191[7]
  i2190.hashCode = i2191[8]
  request.r(i2191[9], i2191[10], 0, i2190, 'material')
  i2190.materialHashCode = i2191[11]
  i2190.m_Version = i2191[12]
  i2190.m_SourceFontFileGUID = i2191[13]
  request.r(i2191[14], i2191[15], 0, i2190, 'm_SourceFontFile_EditorRef')
  request.r(i2191[16], i2191[17], 0, i2190, 'm_SourceFontFile')
  i2190.m_AtlasPopulationMode = i2191[18]
  i2190.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2191[19], i2190.m_FaceInfo)
  var i2193 = i2191[20]
  var i2192 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2193.length; i += 1) {
    i2192.add(request.d('UnityEngine.TextCore.Glyph', i2193[i + 0]));
  }
  i2190.m_GlyphTable = i2192
  var i2195 = i2191[21]
  var i2194 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2195.length; i += 1) {
    i2194.add(request.d('TMPro.TMP_Character', i2195[i + 0]));
  }
  i2190.m_CharacterTable = i2194
  var i2197 = i2191[22]
  var i2196 = []
  for(var i = 0; i < i2197.length; i += 2) {
  request.r(i2197[i + 0], i2197[i + 1], 2, i2196, '')
  }
  i2190.m_AtlasTextures = i2196
  i2190.m_AtlasTextureIndex = i2191[23]
  i2190.m_IsMultiAtlasTexturesEnabled = !!i2191[24]
  i2190.m_ClearDynamicDataOnBuild = !!i2191[25]
  var i2199 = i2191[26]
  var i2198 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2199.length; i += 1) {
    i2198.add(request.d('UnityEngine.TextCore.GlyphRect', i2199[i + 0]));
  }
  i2190.m_UsedGlyphRects = i2198
  var i2201 = i2191[27]
  var i2200 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2201.length; i += 1) {
    i2200.add(request.d('UnityEngine.TextCore.GlyphRect', i2201[i + 0]));
  }
  i2190.m_FreeGlyphRects = i2200
  i2190.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2191[28], i2190.m_fontInfo)
  i2190.m_AtlasWidth = i2191[29]
  i2190.m_AtlasHeight = i2191[30]
  i2190.m_AtlasPadding = i2191[31]
  i2190.m_AtlasRenderMode = i2191[32]
  var i2203 = i2191[33]
  var i2202 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2203.length; i += 1) {
    i2202.add(request.d('TMPro.TMP_Glyph', i2203[i + 0]));
  }
  i2190.m_glyphInfoList = i2202
  i2190.m_KerningTable = request.d('TMPro.KerningTable', i2191[34], i2190.m_KerningTable)
  i2190.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2191[35], i2190.m_FontFeatureTable)
  var i2205 = i2191[36]
  var i2204 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2205.length; i += 2) {
  request.r(i2205[i + 0], i2205[i + 1], 1, i2204, '')
  }
  i2190.fallbackFontAssets = i2204
  var i2207 = i2191[37]
  var i2206 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2207.length; i += 2) {
  request.r(i2207[i + 0], i2207[i + 1], 1, i2206, '')
  }
  i2190.m_FallbackFontAssetTable = i2206
  i2190.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2191[38], i2190.m_CreationSettings)
  var i2209 = i2191[39]
  var i2208 = []
  for(var i = 0; i < i2209.length; i += 1) {
    i2208.push( request.d('TMPro.TMP_FontWeightPair', i2209[i + 0]) );
  }
  i2190.m_FontWeightTable = i2208
  var i2211 = i2191[40]
  var i2210 = []
  for(var i = 0; i < i2211.length; i += 1) {
    i2210.push( request.d('TMPro.TMP_FontWeightPair', i2211[i + 0]) );
  }
  i2190.fontWeights = i2210
  return i2190
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2212 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2213 = data
  i2212.m_FaceIndex = i2213[0]
  i2212.m_FamilyName = i2213[1]
  i2212.m_StyleName = i2213[2]
  i2212.m_PointSize = i2213[3]
  i2212.m_Scale = i2213[4]
  i2212.m_UnitsPerEM = i2213[5]
  i2212.m_LineHeight = i2213[6]
  i2212.m_AscentLine = i2213[7]
  i2212.m_CapLine = i2213[8]
  i2212.m_MeanLine = i2213[9]
  i2212.m_Baseline = i2213[10]
  i2212.m_DescentLine = i2213[11]
  i2212.m_SuperscriptOffset = i2213[12]
  i2212.m_SuperscriptSize = i2213[13]
  i2212.m_SubscriptOffset = i2213[14]
  i2212.m_SubscriptSize = i2213[15]
  i2212.m_UnderlineOffset = i2213[16]
  i2212.m_UnderlineThickness = i2213[17]
  i2212.m_StrikethroughOffset = i2213[18]
  i2212.m_StrikethroughThickness = i2213[19]
  i2212.m_TabWidth = i2213[20]
  return i2212
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2216 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2217 = data
  i2216.m_Index = i2217[0]
  i2216.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2217[1], i2216.m_Metrics)
  i2216.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2217[2], i2216.m_GlyphRect)
  i2216.m_Scale = i2217[3]
  i2216.m_AtlasIndex = i2217[4]
  i2216.m_ClassDefinitionType = i2217[5]
  return i2216
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2218 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2219 = data
  i2218.m_Width = i2219[0]
  i2218.m_Height = i2219[1]
  i2218.m_HorizontalBearingX = i2219[2]
  i2218.m_HorizontalBearingY = i2219[3]
  i2218.m_HorizontalAdvance = i2219[4]
  return i2218
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2220 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2221 = data
  i2220.m_X = i2221[0]
  i2220.m_Y = i2221[1]
  i2220.m_Width = i2221[2]
  i2220.m_Height = i2221[3]
  return i2220
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2224 = root || request.c( 'TMPro.TMP_Character' )
  var i2225 = data
  i2224.m_ElementType = i2225[0]
  i2224.m_Unicode = i2225[1]
  i2224.m_GlyphIndex = i2225[2]
  i2224.m_Scale = i2225[3]
  return i2224
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2230 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2231 = data
  i2230.Name = i2231[0]
  i2230.PointSize = i2231[1]
  i2230.Scale = i2231[2]
  i2230.CharacterCount = i2231[3]
  i2230.LineHeight = i2231[4]
  i2230.Baseline = i2231[5]
  i2230.Ascender = i2231[6]
  i2230.CapHeight = i2231[7]
  i2230.Descender = i2231[8]
  i2230.CenterLine = i2231[9]
  i2230.SuperscriptOffset = i2231[10]
  i2230.SubscriptOffset = i2231[11]
  i2230.SubSize = i2231[12]
  i2230.Underline = i2231[13]
  i2230.UnderlineThickness = i2231[14]
  i2230.strikethrough = i2231[15]
  i2230.strikethroughThickness = i2231[16]
  i2230.TabWidth = i2231[17]
  i2230.Padding = i2231[18]
  i2230.AtlasWidth = i2231[19]
  i2230.AtlasHeight = i2231[20]
  return i2230
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2234 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2235 = data
  i2234.id = i2235[0]
  i2234.x = i2235[1]
  i2234.y = i2235[2]
  i2234.width = i2235[3]
  i2234.height = i2235[4]
  i2234.xOffset = i2235[5]
  i2234.yOffset = i2235[6]
  i2234.xAdvance = i2235[7]
  i2234.scale = i2235[8]
  return i2234
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2236 = root || request.c( 'TMPro.KerningTable' )
  var i2237 = data
  var i2239 = i2237[0]
  var i2238 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2239.length; i += 1) {
    i2238.add(request.d('TMPro.KerningPair', i2239[i + 0]));
  }
  i2236.kerningPairs = i2238
  return i2236
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2242 = root || request.c( 'TMPro.KerningPair' )
  var i2243 = data
  i2242.xOffset = i2243[0]
  i2242.m_FirstGlyph = i2243[1]
  i2242.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2243[2], i2242.m_FirstGlyphAdjustments)
  i2242.m_SecondGlyph = i2243[3]
  i2242.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2243[4], i2242.m_SecondGlyphAdjustments)
  i2242.m_IgnoreSpacingAdjustments = !!i2243[5]
  return i2242
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2244 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2245 = data
  var i2247 = i2245[0]
  var i2246 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2247.length; i += 1) {
    i2246.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i2247[i + 0]));
  }
  i2244.m_GlyphPairAdjustmentRecords = i2246
  return i2244
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2250 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i2251 = data
  i2250.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2251[0], i2250.m_FirstAdjustmentRecord)
  i2250.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2251[1], i2250.m_SecondAdjustmentRecord)
  i2250.m_FeatureLookupFlags = i2251[2]
  return i2250
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2254 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2255 = data
  i2254.sourceFontFileName = i2255[0]
  i2254.sourceFontFileGUID = i2255[1]
  i2254.pointSizeSamplingMode = i2255[2]
  i2254.pointSize = i2255[3]
  i2254.padding = i2255[4]
  i2254.packingMode = i2255[5]
  i2254.atlasWidth = i2255[6]
  i2254.atlasHeight = i2255[7]
  i2254.characterSetSelectionMode = i2255[8]
  i2254.characterSequence = i2255[9]
  i2254.referencedFontAssetGUID = i2255[10]
  i2254.referencedTextAssetGUID = i2255[11]
  i2254.fontStyle = i2255[12]
  i2254.fontStyleModifier = i2255[13]
  i2254.renderMode = i2255[14]
  i2254.includeFontFeatures = !!i2255[15]
  return i2254
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2258 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2259 = data
  request.r(i2259[0], i2259[1], 0, i2258, 'regularTypeface')
  request.r(i2259[2], i2259[3], 0, i2258, 'italicTypeface')
  return i2258
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2260 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2261 = data
  i2260.useSafeMode = !!i2261[0]
  i2260.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2261[1], i2260.safeModeOptions)
  i2260.timeScale = i2261[2]
  i2260.unscaledTimeScale = i2261[3]
  i2260.useSmoothDeltaTime = !!i2261[4]
  i2260.maxSmoothUnscaledTime = i2261[5]
  i2260.rewindCallbackMode = i2261[6]
  i2260.showUnityEditorReport = !!i2261[7]
  i2260.logBehaviour = i2261[8]
  i2260.drawGizmos = !!i2261[9]
  i2260.defaultRecyclable = !!i2261[10]
  i2260.defaultAutoPlay = i2261[11]
  i2260.defaultUpdateType = i2261[12]
  i2260.defaultTimeScaleIndependent = !!i2261[13]
  i2260.defaultEaseType = i2261[14]
  i2260.defaultEaseOvershootOrAmplitude = i2261[15]
  i2260.defaultEasePeriod = i2261[16]
  i2260.defaultAutoKill = !!i2261[17]
  i2260.defaultLoopType = i2261[18]
  i2260.debugMode = !!i2261[19]
  i2260.debugStoreTargetId = !!i2261[20]
  i2260.showPreviewPanel = !!i2261[21]
  i2260.storeSettingsLocation = i2261[22]
  i2260.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2261[23], i2260.modules)
  i2260.createASMDEF = !!i2261[24]
  i2260.showPlayingTweens = !!i2261[25]
  i2260.showPausedTweens = !!i2261[26]
  return i2260
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2262 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2263 = data
  i2262.logBehaviour = i2263[0]
  i2262.nestedTweenFailureBehaviour = i2263[1]
  return i2262
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2264 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2265 = data
  i2264.showPanel = !!i2265[0]
  i2264.audioEnabled = !!i2265[1]
  i2264.physicsEnabled = !!i2265[2]
  i2264.physics2DEnabled = !!i2265[3]
  i2264.spriteEnabled = !!i2265[4]
  i2264.uiEnabled = !!i2265[5]
  i2264.textMeshProEnabled = !!i2265[6]
  i2264.tk2DEnabled = !!i2265[7]
  i2264.deAudioEnabled = !!i2265[8]
  i2264.deUnityExtendedEnabled = !!i2265[9]
  i2264.epoOutlineEnabled = !!i2265[10]
  return i2264
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2266 = root || request.c( 'TMPro.TMP_Settings' )
  var i2267 = data
  i2266.m_enableWordWrapping = !!i2267[0]
  i2266.m_enableKerning = !!i2267[1]
  i2266.m_enableExtraPadding = !!i2267[2]
  i2266.m_enableTintAllSprites = !!i2267[3]
  i2266.m_enableParseEscapeCharacters = !!i2267[4]
  i2266.m_EnableRaycastTarget = !!i2267[5]
  i2266.m_GetFontFeaturesAtRuntime = !!i2267[6]
  i2266.m_missingGlyphCharacter = i2267[7]
  i2266.m_warningsDisabled = !!i2267[8]
  request.r(i2267[9], i2267[10], 0, i2266, 'm_defaultFontAsset')
  i2266.m_defaultFontAssetPath = i2267[11]
  i2266.m_defaultFontSize = i2267[12]
  i2266.m_defaultAutoSizeMinRatio = i2267[13]
  i2266.m_defaultAutoSizeMaxRatio = i2267[14]
  i2266.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2267[15], i2267[16] )
  i2266.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2267[17], i2267[18] )
  i2266.m_autoSizeTextContainer = !!i2267[19]
  i2266.m_IsTextObjectScaleStatic = !!i2267[20]
  var i2269 = i2267[21]
  var i2268 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2269.length; i += 2) {
  request.r(i2269[i + 0], i2269[i + 1], 1, i2268, '')
  }
  i2266.m_fallbackFontAssets = i2268
  i2266.m_matchMaterialPreset = !!i2267[22]
  request.r(i2267[23], i2267[24], 0, i2266, 'm_defaultSpriteAsset')
  i2266.m_defaultSpriteAssetPath = i2267[25]
  i2266.m_enableEmojiSupport = !!i2267[26]
  i2266.m_MissingCharacterSpriteUnicode = i2267[27]
  i2266.m_defaultColorGradientPresetsPath = i2267[28]
  request.r(i2267[29], i2267[30], 0, i2266, 'm_defaultStyleSheet')
  i2266.m_StyleSheetsResourcePath = i2267[31]
  request.r(i2267[32], i2267[33], 0, i2266, 'm_leadingCharacters')
  request.r(i2267[34], i2267[35], 0, i2266, 'm_followingCharacters')
  i2266.m_UseModernHangulLineBreakingRules = !!i2267[36]
  return i2266
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2270 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i2271 = data
  i2270.m_GlyphIndex = i2271[0]
  i2270.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i2271[1], i2270.m_GlyphValueRecord)
  return i2270
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i2272 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i2273 = data
  i2272.m_XPlacement = i2273[0]
  i2272.m_YPlacement = i2273[1]
  i2272.m_XAdvance = i2273[2]
  i2272.m_YAdvance = i2273[3]
  return i2272
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2274 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2275 = data
  request.r(i2275[0], i2275[1], 0, i2274, 'spriteSheet')
  var i2277 = i2275[2]
  var i2276 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2277.length; i += 1) {
    i2276.add(request.d('TMPro.TMP_Sprite', i2277[i + 0]));
  }
  i2274.spriteInfoList = i2276
  var i2279 = i2275[3]
  var i2278 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2279.length; i += 2) {
  request.r(i2279[i + 0], i2279[i + 1], 1, i2278, '')
  }
  i2274.fallbackSpriteAssets = i2278
  i2274.hashCode = i2275[4]
  request.r(i2275[5], i2275[6], 0, i2274, 'material')
  i2274.materialHashCode = i2275[7]
  i2274.m_Version = i2275[8]
  i2274.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2275[9], i2274.m_FaceInfo)
  var i2281 = i2275[10]
  var i2280 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2281.length; i += 1) {
    i2280.add(request.d('TMPro.TMP_SpriteCharacter', i2281[i + 0]));
  }
  i2274.m_SpriteCharacterTable = i2280
  var i2283 = i2275[11]
  var i2282 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2283.length; i += 1) {
    i2282.add(request.d('TMPro.TMP_SpriteGlyph', i2283[i + 0]));
  }
  i2274.m_SpriteGlyphTable = i2282
  return i2274
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2286 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2287 = data
  i2286.name = i2287[0]
  i2286.hashCode = i2287[1]
  i2286.unicode = i2287[2]
  i2286.pivot = new pc.Vec2( i2287[3], i2287[4] )
  request.r(i2287[5], i2287[6], 0, i2286, 'sprite')
  i2286.id = i2287[7]
  i2286.x = i2287[8]
  i2286.y = i2287[9]
  i2286.width = i2287[10]
  i2286.height = i2287[11]
  i2286.xOffset = i2287[12]
  i2286.yOffset = i2287[13]
  i2286.xAdvance = i2287[14]
  i2286.scale = i2287[15]
  return i2286
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2292 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2293 = data
  i2292.m_Name = i2293[0]
  i2292.m_HashCode = i2293[1]
  i2292.m_ElementType = i2293[2]
  i2292.m_Unicode = i2293[3]
  i2292.m_GlyphIndex = i2293[4]
  i2292.m_Scale = i2293[5]
  return i2292
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2296 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2297 = data
  request.r(i2297[0], i2297[1], 0, i2296, 'sprite')
  i2296.m_Index = i2297[2]
  i2296.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2297[3], i2296.m_Metrics)
  i2296.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2297[4], i2296.m_GlyphRect)
  i2296.m_Scale = i2297[5]
  i2296.m_AtlasIndex = i2297[6]
  i2296.m_ClassDefinitionType = i2297[7]
  return i2296
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2298 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2299 = data
  var i2301 = i2299[0]
  var i2300 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2301.length; i += 1) {
    i2300.add(request.d('TMPro.TMP_Style', i2301[i + 0]));
  }
  i2298.m_StyleList = i2300
  return i2298
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2304 = root || request.c( 'TMPro.TMP_Style' )
  var i2305 = data
  i2304.m_Name = i2305[0]
  i2304.m_HashCode = i2305[1]
  i2304.m_OpeningDefinition = i2305[2]
  i2304.m_ClosingDefinition = i2305[3]
  i2304.m_OpeningTagArray = i2305[4]
  i2304.m_ClosingTagArray = i2305[5]
  i2304.m_OpeningTagUnicodeArray = i2305[6]
  i2304.m_ClosingTagUnicodeArray = i2305[7]
  return i2304
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2306 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2307 = data
  var i2309 = i2307[0]
  var i2308 = []
  for(var i = 0; i < i2309.length; i += 1) {
    i2308.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2309[i + 0]) );
  }
  i2306.files = i2308
  i2306.componentToPrefabIds = i2307[1]
  return i2306
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2312 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2313 = data
  i2312.path = i2313[0]
  request.r(i2313[1], i2313[2], 0, i2312, 'unityObject')
  return i2312
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2315 = data
  var i2317 = i2315[0]
  var i2316 = []
  for(var i = 0; i < i2317.length; i += 1) {
    i2316.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2317[i + 0]) );
  }
  i2314.scriptsExecutionOrder = i2316
  var i2319 = i2315[1]
  var i2318 = []
  for(var i = 0; i < i2319.length; i += 1) {
    i2318.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2319[i + 0]) );
  }
  i2314.sortingLayers = i2318
  var i2321 = i2315[2]
  var i2320 = []
  for(var i = 0; i < i2321.length; i += 1) {
    i2320.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2321[i + 0]) );
  }
  i2314.cullingLayers = i2320
  i2314.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2315[3], i2314.timeSettings)
  i2314.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2315[4], i2314.physicsSettings)
  i2314.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2315[5], i2314.physics2DSettings)
  i2314.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2315[6], i2314.qualitySettings)
  i2314.enableRealtimeShadows = !!i2315[7]
  i2314.enableAutoInstancing = !!i2315[8]
  i2314.enableStaticBatching = !!i2315[9]
  i2314.enableDynamicBatching = !!i2315[10]
  i2314.lightmapEncodingQuality = i2315[11]
  i2314.desiredColorSpace = i2315[12]
  var i2323 = i2315[13]
  var i2322 = []
  for(var i = 0; i < i2323.length; i += 1) {
    i2322.push( i2323[i + 0] );
  }
  i2314.allTags = i2322
  return i2314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2326 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2327 = data
  i2326.name = i2327[0]
  i2326.value = i2327[1]
  return i2326
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2331 = data
  i2330.id = i2331[0]
  i2330.name = i2331[1]
  i2330.value = i2331[2]
  return i2330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2334 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2335 = data
  i2334.id = i2335[0]
  i2334.name = i2335[1]
  return i2334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2336 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2337 = data
  i2336.fixedDeltaTime = i2337[0]
  i2336.maximumDeltaTime = i2337[1]
  i2336.timeScale = i2337[2]
  i2336.maximumParticleTimestep = i2337[3]
  return i2336
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2339 = data
  i2338.gravity = new pc.Vec3( i2339[0], i2339[1], i2339[2] )
  i2338.defaultSolverIterations = i2339[3]
  i2338.bounceThreshold = i2339[4]
  i2338.autoSyncTransforms = !!i2339[5]
  i2338.autoSimulation = !!i2339[6]
  var i2341 = i2339[7]
  var i2340 = []
  for(var i = 0; i < i2341.length; i += 1) {
    i2340.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2341[i + 0]) );
  }
  i2338.collisionMatrix = i2340
  return i2338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2345 = data
  i2344.enabled = !!i2345[0]
  i2344.layerId = i2345[1]
  i2344.otherLayerId = i2345[2]
  return i2344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2346 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2347 = data
  request.r(i2347[0], i2347[1], 0, i2346, 'material')
  i2346.gravity = new pc.Vec2( i2347[2], i2347[3] )
  i2346.positionIterations = i2347[4]
  i2346.velocityIterations = i2347[5]
  i2346.velocityThreshold = i2347[6]
  i2346.maxLinearCorrection = i2347[7]
  i2346.maxAngularCorrection = i2347[8]
  i2346.maxTranslationSpeed = i2347[9]
  i2346.maxRotationSpeed = i2347[10]
  i2346.baumgarteScale = i2347[11]
  i2346.baumgarteTOIScale = i2347[12]
  i2346.timeToSleep = i2347[13]
  i2346.linearSleepTolerance = i2347[14]
  i2346.angularSleepTolerance = i2347[15]
  i2346.defaultContactOffset = i2347[16]
  i2346.autoSimulation = !!i2347[17]
  i2346.queriesHitTriggers = !!i2347[18]
  i2346.queriesStartInColliders = !!i2347[19]
  i2346.callbacksOnDisable = !!i2347[20]
  i2346.reuseCollisionCallbacks = !!i2347[21]
  i2346.autoSyncTransforms = !!i2347[22]
  var i2349 = i2347[23]
  var i2348 = []
  for(var i = 0; i < i2349.length; i += 1) {
    i2348.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2349[i + 0]) );
  }
  i2346.collisionMatrix = i2348
  return i2346
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2352 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2353 = data
  i2352.enabled = !!i2353[0]
  i2352.layerId = i2353[1]
  i2352.otherLayerId = i2353[2]
  return i2352
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2354 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2355 = data
  var i2357 = i2355[0]
  var i2356 = []
  for(var i = 0; i < i2357.length; i += 1) {
    i2356.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2357[i + 0]) );
  }
  i2354.qualityLevels = i2356
  var i2359 = i2355[1]
  var i2358 = []
  for(var i = 0; i < i2359.length; i += 1) {
    i2358.push( i2359[i + 0] );
  }
  i2354.names = i2358
  i2354.shadows = i2355[2]
  i2354.anisotropicFiltering = i2355[3]
  i2354.antiAliasing = i2355[4]
  i2354.lodBias = i2355[5]
  i2354.shadowCascades = i2355[6]
  i2354.shadowDistance = i2355[7]
  i2354.shadowmaskMode = i2355[8]
  i2354.shadowProjection = i2355[9]
  i2354.shadowResolution = i2355[10]
  i2354.softParticles = !!i2355[11]
  i2354.softVegetation = !!i2355[12]
  i2354.activeColorSpace = i2355[13]
  i2354.desiredColorSpace = i2355[14]
  i2354.masterTextureLimit = i2355[15]
  i2354.maxQueuedFrames = i2355[16]
  i2354.particleRaycastBudget = i2355[17]
  i2354.pixelLightCount = i2355[18]
  i2354.realtimeReflectionProbes = !!i2355[19]
  i2354.shadowCascade2Split = i2355[20]
  i2354.shadowCascade4Split = new pc.Vec3( i2355[21], i2355[22], i2355[23] )
  i2354.streamingMipmapsActive = !!i2355[24]
  i2354.vSyncCount = i2355[25]
  i2354.asyncUploadBufferSize = i2355[26]
  i2354.asyncUploadTimeSlice = i2355[27]
  i2354.billboardsFaceCameraPosition = !!i2355[28]
  i2354.shadowNearPlaneOffset = i2355[29]
  i2354.streamingMipmapsMemoryBudget = i2355[30]
  i2354.maximumLODLevel = i2355[31]
  i2354.streamingMipmapsAddAllCameras = !!i2355[32]
  i2354.streamingMipmapsMaxLevelReduction = i2355[33]
  i2354.streamingMipmapsRenderersPerFrame = i2355[34]
  i2354.resolutionScalingFixedDPIFactor = i2355[35]
  i2354.streamingMipmapsMaxFileIORequests = i2355[36]
  i2354.currentQualityLevel = i2355[37]
  return i2354
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2364 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2365 = data
  i2364.mode = i2365[0]
  i2364.parameter = i2365[1]
  i2364.threshold = i2365[2]
  return i2364
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2366 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2367 = data
  i2366.xPlacement = i2367[0]
  i2366.yPlacement = i2367[1]
  i2366.xAdvance = i2367[2]
  i2366.yAdvance = i2367[3]
  return i2366
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

Deserializers.runtimeAnalysisExcludedMethodsCount = "4544";

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

Deserializers.buildID = "8f9a0999-5df4-4082-b79c-adbfb67e3243";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

