"use strict";(self["webpackChunkclient"]=self["webpackChunkclient"]||[]).push([[9992],{45584:function(e,t,i){i.d(t,{D:function(){return k},b:function(){return W}});var r=i(61681),n=i(39100),o=i(95650),a=i(57218),s=i(25714),l=i(5885),c=i(4731),u=i(99163),d=i(27125),h=i(91636),f=i(45658),p=i(82082),m=i(6502),v=i(78549),g=i(78183),x=i(22735),_=i(3417),T=i(30786),b=i(93931),A=i(25996),S=i(2833),C=i(74839),w=i(3864),M=i(50349),O=i(27641),y=i(44391),E=i(41330),P=i(78115),R=i(42727),I=i(5614),N=i(43036),L=i(63371),H=i(24603),D=i(23410),F=i(87621),B=i(3961),z=i(15176),V=i(70984),G=i(21414),U=i(75081);function W(e){const t=new B.kG,i=t.vertex.code,W=t.fragment.code;t.include(P.a,{name:"Default Material Shader",output:e.output});const k=(0,I.S)(t,e);return t.include(h.f),t.varyings.add("vpos","vec3"),t.include(O.k,e),t.include(u.f,e),t.include(g.L,e),e.output!==s.H.Color&&e.output!==s.H.Alpha||((0,I.h)(t.vertex,e),t.include(d.O,e),t.include(c.w,{linearDepth:!1,hasModelTransformation:e.hasModelTransformation}),e.normalType===d.h.Attribute&&e.offsetBackfaces&&t.include(a.w),t.include(_.Q,e),t.include(v.Bb,e),e.instancedColor&&t.attributes.add(G.T.INSTANCECOLOR,"vec4"),t.varyings.add("localvpos","vec3"),t.include(p.D,e),t.include(o.q,e),t.include(f.R,e),t.include(m.c,e),t.vertex.uniforms.add(new L.N("externalColor",(e=>e.externalColor))),t.varyings.add("vcolorExt","vec4"),e.hasMultipassTerrain&&t.varyings.add("depth","float"),e.hasModelTransformation&&t.vertex.uniforms.add(new F.g("model",(e=>(0,r.pC)(e.modelTransformation)?e.modelTransformation:n.I))),i.add(D.H`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${e.instancedColor?"vcolorExt *= instanceColor;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${D.H.float(y.b)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        } else {
          vpos = calculateVPos();
          localvpos = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${e.normalType===d.h.Attribute?D.H`vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${e.hasVertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, ${e.hasModelTransformation?"model,":""} vpos);
          ${e.normalType===d.h.Attribute&&e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
        }

        ${e.hasMultipassTerrain?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
      }
    `)),e.output===s.H.Alpha&&(t.include(l.f5,e),t.include(E.z,e),t.include(A.l,e),t.fragment.uniforms.add([new H.p("opacity",(e=>e.opacity)),new H.p("layerOpacity",(e=>e.layerOpacity))]),e.hasColorTexture&&t.fragment.uniforms.add(new z.A("tex",(e=>e.texture))),t.fragment.include(R.y),W.add(D.H`
      void main() {
        discardBySlice(vpos);
        ${e.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?D.H`
                vec4 texColor = texture2D(tex, vuv0);
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:D.H`vec4 texColor = vec4(1.0);`}
        ${e.hasVertexColors?D.H`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:D.H`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        gl_FragColor = vec4(opacity_);
      }
    `)),e.output===s.H.Color&&(t.include(l.f5,e),t.include(b.X,e),t.include(T.K,e),t.include(E.z,e),t.include(e.instancedDoublePrecision?M.hb:M.XE,e),t.include(A.l,e),(0,I.h)(t.fragment,e),t.fragment.uniforms.add([k,new N.J("ambient",(e=>e.ambient)),new N.J("diffuse",(e=>e.diffuse)),new H.p("opacity",(e=>e.opacity)),new H.p("layerOpacity",(e=>e.layerOpacity)),new H.p("lightingGlobalFactor",((e,t)=>t.lighting.globalFactor)),new N.J("lightingMainIntensity",((e,t)=>t.lighting.mainLight.intensity))]),t.fragment.constants.add("ambientBoostFactor","float",U.V),e.hasColorTexture&&t.fragment.uniforms.add(new z.A("tex",(e=>e.texture))),t.include(w.jV,e),t.include(C.T,e),t.fragment.include(R.y),t.include(S.k,e),W.add(D.H`
      void main() {
        discardBySlice(vpos);
        ${e.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?D.H`
                vec4 texColor = texture2D(tex, vuv0);
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:D.H`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        ${e.normalType===d.h.ScreenDerivative?D.H`
                vec3 normal = screenDerivativeNormal(localvpos);`:D.H`
                shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
        ${e.pbrMode===w.f7.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":e.spherical?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.hasVertexColors?D.H`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:D.H`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${e.hasNormalTexture?D.H`
                mat3 tangentSpace = ${e.hasVertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
                vec3 shadingNormal = computeTextureNormal(tangentSpace, vuv0);`:D.H`vec3 shadingNormal = normal;`}
        vec3 normalGround = ${e.spherical?D.H`normalize(vpos + localOrigin);`:D.H`vec3(0.0, 0.0, 1.0);`}

        ${e.snowCover?D.H`
                float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
                albedo = mix(albedo, vec3(1), snow);
                shadingNormal = mix(shadingNormal, normal, snow);
                ssao = mix(ssao, 1.0, snow);`:""}

        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

        ${e.pbrMode===w.f7.Normal||e.pbrMode===w.f7.Schematic?D.H`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
                ${e.snowCover?D.H`
                        mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);
                        emission = mix(emission, vec3(0.0), snow);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:D.H`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.transparencyPassType===V.Am.Color?D.H`gl_FragColor = premultiplyAlpha(gl_FragColor);`:""}
      }
    `)),t.include(x.s,e),t}const k=Object.freeze(Object.defineProperty({__proto__:null,build:W},Symbol.toStringTag,{value:"Module"}))},60926:function(e,t,i){i.d(t,{R:function(){return B},b:function(){return F}});var r=i(95650),n=i(57218),o=i(25714),a=i(5885),s=i(4731),l=i(99163),c=i(27125),u=i(91636),d=i(45658),h=i(82082),f=i(6502),p=i(78183),m=i(22735),v=i(30786),g=i(93931),x=i(25996),_=i(74839),T=i(3864),b=i(50349),A=i(27641),S=i(44391),C=i(41330),w=i(42727),M=i(5614),O=i(43036),y=i(63371),E=i(24603),P=i(23410),R=i(67948),I=i(3961),N=i(15176),L=i(70984),H=i(21414),D=i(75081);function F(e){const t=new I.kG,i=t.vertex.code,F=t.fragment.code,B=(0,M.S)(t,e);return t.include(u.f),t.varyings.add("vpos","vec3"),t.include(A.k,e),t.include(l.f,e),t.include(p.L,e),e.output!==o.H.Color&&e.output!==o.H.Alpha||((0,M.h)(t.vertex,e),t.include(c.O,e),t.include(s.w),e.offsetBackfaces&&t.include(n.w),e.instancedColor&&t.attributes.add(H.T.INSTANCECOLOR,"vec4"),t.varyings.add("vNormalWorld","vec3"),t.varyings.add("localvpos","vec3"),e.hasMultipassTerrain&&t.varyings.add("depth","float"),t.include(h.D,e),t.include(r.q,e),t.include(d.R,e),t.include(f.c,e),t.vertex.uniforms.add(new y.N("externalColor",(e=>e.externalColor))),t.varyings.add("vcolorExt","vec4"),i.add(P.H`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${e.instancedColor?"vcolorExt *= instanceColor;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${P.H.float(S.b)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          } else {
            vpos = calculateVPos();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
          }
          ${e.hasMultipassTerrain?P.H`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),e.output===o.H.Alpha&&(t.include(a.f5,e),t.include(C.z,e),t.include(x.l,e),t.fragment.uniforms.add([new E.p("opacity",(e=>e.opacity)),new E.p("layerOpacity",(e=>e.layerOpacity)),new R.B("view")]),e.hasColorTexture&&t.fragment.uniforms.add(new N.A("tex",(e=>e.texture))),t.fragment.include(w.y),F.add(P.H`
      void main() {
        discardBySlice(vpos);
        ${e.hasMultipassTerrain?P.H`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${e.hasColorTexture?P.H`
                vec4 texColor = texture2D(tex, vuv0);
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:P.H`vec4 texColor = vec4(1.0);`}
        ${e.hasVertexColors?P.H`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:P.H`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}

        gl_FragColor = vec4(opacity_);
      }
    `)),e.output===o.H.Color&&(t.include(a.f5,e),t.include(g.X,e),t.include(v.K,e),t.include(C.z,e),t.include(e.instancedDoublePrecision?b.hb:b.XE,e),t.include(x.l,e),(0,M.h)(t.fragment,e),t.fragment.uniforms.add([B,new O.J("ambient",(e=>e.ambient)),new O.J("diffuse",(e=>e.diffuse)),new E.p("opacity",(e=>e.opacity)),new E.p("layerOpacity",(e=>e.layerOpacity)),new R.B("view"),new E.p("lightingGlobalFactor",((e,t)=>t.lighting.globalFactor)),new O.J("lightingMainIntensity",((e,t)=>t.lighting.mainLight.intensity))]),t.fragment.constants.add("ambientBoostFactor","float",D.V),e.hasColorTexture&&t.fragment.uniforms.add(new N.A("tex",(e=>e.texture))),t.include(T.jV,e),t.include(_.T,e),t.fragment.include(w.y),t.extensions.add("GL_OES_standard_derivatives"),F.add(P.H`
      void main() {
        discardBySlice(vpos);
        ${e.hasMultipassTerrain?P.H`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${e.hasColorTexture?P.H`
                vec4 texColor = texture2D(tex, vuv0);
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:P.H`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - cameraPosition);
        ${e.pbrMode===T.f7.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":e.spherical?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.hasVertexColors?P.H`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:P.H`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${e.snowCover?P.H`albedo = mix(albedo, vec3(1), 0.9);`:P.H``}
        ${P.H`
            vec3 shadingNormal = normalize(vNormalWorld);
            albedo *= 1.2;
            vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
            float alignmentLightView = clamp(dot(viewForward, -lightingMainDirection), 0.0, 1.0);
            float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
            float treeRadialFalloff = vColor.r;
            float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
            additionalLight += backLightFactor * lightingMainIntensity;`}
        ${e.pbrMode===T.f7.Normal||e.pbrMode===T.f7.Schematic?e.spherical?P.H`vec3 normalGround = normalize(vpos + localOrigin);`:P.H`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:P.H``}
        ${e.pbrMode===T.f7.Normal||e.pbrMode===T.f7.Schematic?P.H`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
                ${e.snowCover?P.H`
                        mrr = vec3(0.0, 1.0, 0.04);
                        emission = vec3(0.0);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:P.H`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.transparencyPassType===L.Am.Color?P.H`gl_FragColor = premultiplyAlpha(gl_FragColor);`:P.H``}
      }
    `)),t.include(m.s,e),t}const B=Object.freeze(Object.defineProperty({__proto__:null,build:F},Symbol.toStringTag,{value:"Module"}))},42116:function(e,t,i){i.d(t,{b:function(){return g},c:function(){return v},d:function(){return A},g:function(){return S},i:function(){return E},m:function(){return V}});i(39994);var r,n=i(13802),o=i(19431),a=i(61681),s=i(24455),l=i(6766),c=i(8909),u=i(88589),d=i(1983);!function(e){e[e.X=0]="X",e[e.Y=1]="Y",e[e.Z=2]="Z"}(r||(r={}));var h=i(97537),f=i(5700),p=i(28888);const m=n.Z.getLogger("esri.geometry.support.sphere");function v(){return(0,d.c)()}function g(e,t=v()){return(0,u.c)(t,e)}function x(e,t){return(0,d.f)(e[0],e[1],e[2],t)}function _(e){return e}function T(e){e[0]=e[1]=e[2]=e[3]=0}function b(e,t){return e[0]=e[1]=e[2]=0,e[3]=t,e}function A(e){return e[3]}function S(e){return e}function C(e,t,i,r){return(0,d.f)(e,t,i,r)}function w(e,t,i){return e!==i&&(0,l.c)(i,e),i[3]=e[3]+t,i}function M(e,t,i){return m.error("sphere.setExtent is not yet supported"),e===i?i:g(e,i)}function O(e,t,i){if((0,a.Wi)(t))return!1;const{origin:r,direction:n}=t,o=y;o[0]=r[0]-e[0],o[1]=r[1]-e[1],o[2]=r[2]-e[2];const s=n[0]*n[0]+n[1]*n[1]+n[2]*n[2],l=2*(n[0]*o[0]+n[1]*o[1]+n[2]*o[2]),c=l*l-4*s*(o[0]*o[0]+o[1]*o[1]+o[2]*o[2]-e[3]*e[3]);if(c<0)return!1;const u=Math.sqrt(c);let d=(-l-u)/(2*s);const h=(-l+u)/(2*s);return(d<0||h<d&&h>0)&&(d=h),!(d<0)&&(i&&(i[0]=r[0]+n[0]*d,i[1]=r[1]+n[1]*d,i[2]=r[2]+n[2]*d),!0)}const y=(0,c.c)();function E(e,t){return O(e,t,null)}function P(e,t,i){if(O(e,t,i))return i;const r=R(e,t,p.WM.get());return(0,l.a)(i,t.origin,(0,l.g)(p.WM.get(),t.direction,(0,l.i)(t.origin,r)/(0,l.l)(t.direction))),i}function R(e,t,i){const r=p.WM.get(),n=p.MP.get();(0,l.f)(r,t.origin,t.direction);const o=A(e);(0,l.f)(i,r,t.origin),(0,l.g)(i,i,1/(0,l.l)(i)*o);const a=H(e,t.origin),c=(0,f.EU)(t.origin,i);return(0,s.d)(n,c+a,r),(0,l.m)(i,i,n),i}function I(e,t,i){return O(e,t,i)?i:((0,h.JI)(t,S(e),i),N(e,i,i))}function N(e,t,i){const r=(0,l.b)(p.WM.get(),t,S(e)),n=(0,l.g)(p.WM.get(),r,e[3]/(0,l.l)(r));return(0,l.a)(i,n,S(e))}function L(e,t){const i=(0,l.b)(p.WM.get(),t,S(e)),r=(0,l.p)(i),n=e[3]*e[3];return Math.sqrt(Math.abs(r-n))}function H(e,t){const i=(0,l.b)(p.WM.get(),t,S(e)),r=(0,l.l)(i),n=A(e),a=n+Math.abs(n-r);return(0,o.ZF)(n/a)}const D=(0,c.c)();function F(e,t,i,n){const a=(0,l.b)(D,t,S(e));switch(i){case r.X:{const e=(0,o.jE)(a,D)[2];return(0,l.s)(n,-Math.sin(e),Math.cos(e),0)}case r.Y:{const e=(0,o.jE)(a,D),t=e[1],i=e[2],r=Math.sin(t);return(0,l.s)(n,-r*Math.cos(i),-r*Math.sin(i),Math.cos(t))}case r.Z:return(0,l.n)(n,a);default:return}}function B(e,t){const i=(0,l.b)(G,t,S(e));return(0,l.l)(i)-e[3]}function z(e,t,i,n){const o=B(e,t),a=F(e,t,r.Z,G),s=(0,l.g)(G,a,i-o);return(0,l.a)(n,t,s)}function V(e,t){const i=(0,l.d)(S(e),t),r=A(e);return i<=r*r}const G=(0,c.c)(),U=v();Object.freeze(Object.defineProperty({__proto__:null,create:v,copy:g,fromCenterAndRadius:x,wrap:_,clear:T,fromRadius:b,getRadius:A,getCenter:S,fromValues:C,elevate:w,setExtent:M,intersectRay:O,intersectsRay:E,intersectRayClosestSilhouette:P,closestPointOnSilhouette:R,closestPoint:I,projectPoint:N,distanceToSilhouette:L,angleToSilhouette:H,axisAt:F,altitudeAt:B,setAltitudeAt:z,containsPoint:V,tmpSphere:U},Symbol.toStringTag,{value:"Module"}))},79912:function(e,t,i){function r(){return new Float32Array(3)}function n(e){const t=new Float32Array(3);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}function o(e,t,i){const r=new Float32Array(3);return r[0]=e,r[1]=t,r[2]=i,r}function a(e,t){return new Float32Array(e,t,3)}function s(){return r()}function l(){return o(1,1,1)}function c(){return o(1,0,0)}function u(){return o(0,1,0)}function d(){return o(0,0,1)}i.d(t,{c:function(){return r},f:function(){return o}});const h=s(),f=l(),p=c(),m=u(),v=d();Object.freeze(Object.defineProperty({__proto__:null,create:r,clone:n,fromValues:o,createView:a,zeros:s,ones:l,unitX:c,unitY:u,unitZ:d,ZEROS:h,ONES:f,UNIT_X:p,UNIT_Y:m,UNIT_Z:v},Symbol.toStringTag,{value:"Module"}))},57989:function(e,t,i){function r(e){return e=e||globalThis.location.hostname,c.some((t=>null!=e?.match(t)))}function n(e,t){return e&&(t=t||globalThis.location.hostname)?null!=t.match(o)||null!=t.match(s)?e.replace("static.arcgis.com","staticdev.arcgis.com"):null!=t.match(a)||null!=t.match(l)?e.replace("static.arcgis.com","staticqa.arcgis.com"):e:e}i.d(t,{XO:function(){return r},pJ:function(){return n}});const o=/^devext.arcgis.com$/,a=/^qaext.arcgis.com$/,s=/^[\w-]*\.mapsdevext.arcgis.com$/,l=/^[\w-]*\.mapsqa.arcgis.com$/,c=[/^([\w-]*\.)?[\w-]*\.zrh-dev-local.esri.com$/,o,a,/^jsapps.esri.com$/,s,l]},97537:function(e,t,i){i.d(t,{JI:function(){return l},Ue:function(){return a},re:function(){return s}});i(7753);var r=i(19480),n=i(6766),o=i(8909);i(28888);function a(e){return e?{origin:(0,o.a)(e.origin),direction:(0,o.a)(e.direction)}:{origin:(0,o.c)(),direction:(0,o.c)()}}function s(e,t){const i=u.get();return i.origin=e,i.direction=t,i}function l(e,t,i){const r=(0,n.e)(e.direction,(0,n.b)(i,t,e.origin));return(0,n.a)(i,e.origin,(0,n.g)(i,e.direction,r)),i}function c(){return{origin:null,direction:null}}const u=new r.x(c)},5700:function(e,t,i){i.d(t,{EU:function(){return a}});var r=i(19431),n=i(6766),o=i(8909);function a(e,t){const i=(0,n.e)(e,t)/((0,n.l)(e)*(0,n.l)(t));return-(0,r.ZF)(i)}(0,o.c)(),(0,o.c)()},44883:function(e,t,i){i.d(t,{t:function(){return n}});var r=i(66341);async function n(e,t){const{data:i}=await(0,r["default"])(e,{responseType:"image",...t});return i}},39992:function(e,t,i){i.r(t),i.d(t,{fetch:function(){return _i},gltfToEngineResources:function(){return bi},parseUrl:function(){return Ti}});var r=i(57989),n=i(61681),o=i(1662),a=i(34344),s=i(24455),l=i(39100),c=i(6766),u=i(8909),d=i(37116),h=i(63338),f=i(86717),p=i(56999),m=i(64122),v=i(91420),g=i(64987),x=i(1731),_=i(66341),T=i(67979),b=i(70375),A=i(13802),S=i(78668),C=i(26139),w=i(44883),M=i(70984),O=i(17993),y=i(15095);class E{constructor(e,t,i,r){this.primitiveIndices=e,this._numIndexPerPrimitive=t,this.indices=i,this.position=r,this.center=(0,u.c)(),(0,y.hu)(e.length>=1),(0,y.hu)(i.length%this._numIndexPerPrimitive==0),(0,y.hu)(i.length>=e.length*this._numIndexPerPrimitive),(0,y.hu)(3===r.size||4===r.size);const{data:n,size:o}=r,a=e.length;let s=o*i[this._numIndexPerPrimitive*e[0]];P.clear(),P.push(s),this.bbMin=(0,u.f)(n[s],n[s+1],n[s+2]),this.bbMax=(0,u.a)(this.bbMin);for(let c=0;c<a;++c){const t=this._numIndexPerPrimitive*e[c];for(let e=0;e<this._numIndexPerPrimitive;++e){s=o*i[t+e],P.push(s);let r=n[s];this.bbMin[0]=Math.min(r,this.bbMin[0]),this.bbMax[0]=Math.max(r,this.bbMax[0]),r=n[s+1],this.bbMin[1]=Math.min(r,this.bbMin[1]),this.bbMax[1]=Math.max(r,this.bbMax[1]),r=n[s+2],this.bbMin[2]=Math.min(r,this.bbMin[2]),this.bbMax[2]=Math.max(r,this.bbMax[2])}}(0,c.h)(this.center,this.bbMin,this.bbMax,.5),this.radius=.5*Math.max(Math.max(this.bbMax[0]-this.bbMin[0],this.bbMax[1]-this.bbMin[1]),this.bbMax[2]-this.bbMin[2]);let l=this.radius*this.radius;for(let c=0;c<P.length;++c){s=P.getItemAt(c);const e=n[s]-this.center[0],t=n[s+1]-this.center[1],i=n[s+2]-this.center[2],r=e*e+t*t+i*i;if(r<=l)continue;const o=Math.sqrt(r),a=.5*(o-this.radius);this.radius=this.radius+a,l=this.radius*this.radius;const u=a/o;this.center[0]+=e*u,this.center[1]+=t*u,this.center[2]+=i*u}P.clear()}getCenter(){return this.center}getBSRadius(){return this.radius}getBBMin(){return this.bbMin}getBBMax(){return this.bbMax}getChildren(){if(this._children)return this._children;if((0,c.d)(this.bbMin,this.bbMax)>1){const e=(0,c.h)((0,u.c)(),this.bbMin,this.bbMax,.5),t=this.primitiveIndices.length,i=new Uint8Array(t),r=new Array(8);for(let l=0;l<8;++l)r[l]=0;const{data:n,size:o}=this.position;for(let l=0;l<t;++l){let t=0;const a=this._numIndexPerPrimitive*this.primitiveIndices[l];let s=o*this.indices[a],c=n[s],u=n[s+1],d=n[s+2];for(let e=1;e<this._numIndexPerPrimitive;++e){s=o*this.indices[a+e];const t=n[s],i=n[s+1],r=n[s+2];t<c&&(c=t),i<u&&(u=i),r<d&&(d=r)}c<e[0]&&(t|=1),u<e[1]&&(t|=2),d<e[2]&&(t|=4),i[l]=t,++r[t]}let a=0;for(let l=0;l<8;++l)r[l]>0&&++a;if(a<2)return;const s=new Array(8);for(let l=0;l<8;++l)s[l]=r[l]>0?new Uint32Array(r[l]):void 0;for(let l=0;l<8;++l)r[l]=0;for(let l=0;l<t;++l){const e=i[l];s[e][r[e]++]=this.primitiveIndices[l]}this._children=new Array(8);for(let l=0;l<8;++l)void 0!==s[l]&&(this._children[l]=new E(s[l],this._numIndexPerPrimitive,this.indices,this.position))}return this._children}static prune(){P.prune()}}const P=new O.Z({deallocator:null});var R=i(10107),I=i(95399),N=i(31930),L=i(21414);class H extends R.c{constructor(e,t=[],i=M.MX.Triangle,r=-1){super(),this._primitiveType=i,this.edgeIndicesLength=r,this.type=I.U.Geometry,this._vertexAttributes=new Map,this._indices=new Map,this._boundingInfo=null;for(const[n,o]of e)o&&this._vertexAttributes.set(n,{...o});if(null==t||0===t.length){const e=D(this._vertexAttributes),t=(0,N.p)(e);this.edgeIndicesLength=this.edgeIndicesLength<0?e:this.edgeIndicesLength;for(const i of this._vertexAttributes.keys())this._indices.set(i,t)}else for(const[n,o]of t)o&&(this._indices.set(n,F(o)),n===L.T.POSITION&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._indices.get(n).length:this.edgeIndicesLength))}cloneShallow(){const e=new H([],void 0,this._primitiveType,void 0),{_vertexAttributes:t,_indices:i}=e;return this._vertexAttributes.forEach(((e,i)=>{t.set(i,e)})),this._indices.forEach(((e,t)=>{i.set(t,e)})),e.screenToWorldRatio=this.screenToWorldRatio,e._boundingInfo=this._boundingInfo,e}get vertexAttributes(){return this._vertexAttributes}getMutableAttribute(e){const t=this._vertexAttributes.get(e);return t&&!t.exclusive&&(t.data=Array.from(t.data),t.exclusive=!0),t}get indices(){return this._indices}get indexCount(){const e=this._indices.values().next().value;return e?e.length:0}get primitiveType(){return this._primitiveType}get faceCount(){return this.indexCount/3}get boundingInfo(){return(0,n.Wi)(this._boundingInfo)&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(e){return this.primitiveType===M.MX.Triangle?this._computeAttachmentOriginTriangles(e):this._computeAttachmentOriginPoints(e)}_computeAttachmentOriginTriangles(e){const t=this.indices.get(L.T.POSITION),i=this.vertexAttributes.get(L.T.POSITION);return(0,N.cM)(i,t,e)}_computeAttachmentOriginPoints(e){const t=this.indices.get(L.T.POSITION),i=this.vertexAttributes.get(L.T.POSITION);return(0,N.NO)(i,t,e)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){const e=this.indices.get(L.T.POSITION);if(0===e.length)return null;const t=this.primitiveType===M.MX.Triangle?3:1;(0,y.hu)(e.length%t==0,"Indexing error: "+e.length+" not divisible by "+t);const i=(0,N.p)(e.length/t),r=this.vertexAttributes.get(L.T.POSITION);return new E(i,t,e,r)}}function D(e){const t=e.values().next().value;return null==t?0:t.data.length/t.size}function F(e){if(e.BYTES_PER_ELEMENT===Uint16Array.BYTES_PER_ELEMENT)return e;for(const t of e)if(t>=65536)return e;return new Uint16Array(e)}var B=i(27755),z=i(31355),V=i(19431),G=i(86098),U=i(3466),W=i(73401),k=i(36567);function q(){if((0,n.Wi)($)){const e=e=>(0,k.V)(`esri/libs/basisu/${e}`);$=i.e(1681).then(i.bind(i,21681)).then((e=>e.b)).then((({default:t})=>t({locateFile:e}).then((e=>(e.initializeBasis(),delete e.then,e)))))}return $}let $;var j;!function(e){e[e.ETC1_RGB=0]="ETC1_RGB",e[e.ETC2_RGBA=1]="ETC2_RGBA",e[e.BC1_RGB=2]="BC1_RGB",e[e.BC3_RGBA=3]="BC3_RGBA",e[e.BC4_R=4]="BC4_R",e[e.BC5_RG=5]="BC5_RG",e[e.BC7_M6_RGB=6]="BC7_M6_RGB",e[e.BC7_M5_RGBA=7]="BC7_M5_RGBA",e[e.PVRTC1_4_RGB=8]="PVRTC1_4_RGB",e[e.PVRTC1_4_RGBA=9]="PVRTC1_4_RGBA",e[e.ASTC_4x4_RGBA=10]="ASTC_4x4_RGBA",e[e.ATC_RGB=11]="ATC_RGB",e[e.ATC_RGBA=12]="ATC_RGBA",e[e.FXT1_RGB=17]="FXT1_RGB",e[e.PVRTC2_4_RGB=18]="PVRTC2_4_RGB",e[e.PVRTC2_4_RGBA=19]="PVRTC2_4_RGBA",e[e.ETC2_EAC_R11=20]="ETC2_EAC_R11",e[e.ETC2_EAC_RG11=21]="ETC2_EAC_RG11",e[e.RGBA32=13]="RGBA32",e[e.RGB565=14]="RGB565",e[e.BGR565=15]="BGR565",e[e.RGBA4444=16]="RGBA4444"}(j||(j={}));var J=i(91907),X=i(43487),K=i(62486);let Z=null,Y=null;async function Q(){return(0,n.Wi)(Y)&&(Y=q(),Z=await Y),Y}function ee(e,t){if((0,n.Wi)(Z))return e.byteLength;const i=new Z.BasisFile(new Uint8Array(e)),r=re(i)?ie(i.getNumLevels(0),i.getHasAlpha(),i.getImageWidth(0,0),i.getImageHeight(0,0),t):0;return i.close(),i.delete(),r}function te(e,t){if((0,n.Wi)(Z))return e.byteLength;const i=new Z.KTX2File(new Uint8Array(e)),r=ne(i)?ie(i.getLevels(),i.getHasAlpha(),i.getWidth(),i.getHeight(),t):0;return i.close(),i.delete(),r}function ie(e,t,i,r,n){const o=(0,K.RG)(t?J.q_.COMPRESSED_RGBA8_ETC2_EAC:J.q_.COMPRESSED_RGB8_ETC2),a=n&&e>1?(4**e-1)/(3*4**(e-1)):1;return Math.ceil(i*r*o*a)}function re(e){return e.getNumImages()>=1&&!e.isUASTC()}function ne(e){return e.getFaces()>=1&&e.isETC1S()}async function oe(e,t,i){(0,n.Wi)(Z)&&(Z=await Q());const r=new Z.BasisFile(new Uint8Array(i));if(!re(r))return null;r.startTranscoding();const o=se(e,t,r.getNumLevels(0),r.getHasAlpha(),r.getImageWidth(0,0),r.getImageHeight(0,0),((e,t)=>r.getImageTranscodedSizeInBytes(0,e,t)),((e,t,i)=>r.transcodeImage(i,0,e,t,0,0)));return r.close(),r.delete(),o}async function ae(e,t,i){(0,n.Wi)(Z)&&(Z=await Q());const r=new Z.KTX2File(new Uint8Array(i));if(!ne(r))return null;r.startTranscoding();const o=se(e,t,r.getLevels(),r.getHasAlpha(),r.getWidth(),r.getHeight(),((e,t)=>r.getImageTranscodedSizeInBytes(e,0,0,t)),((e,t,i)=>r.transcodeImage(i,e,0,0,t,0,-1,-1)));return r.close(),r.delete(),o}function se(e,t,i,r,n,o,a,s){const{compressedTextureETC:l,compressedTextureS3TC:c}=e.capabilities,[u,d]=l?r?[j.ETC2_RGBA,J.q_.COMPRESSED_RGBA8_ETC2_EAC]:[j.ETC1_RGB,J.q_.COMPRESSED_RGB8_ETC2]:c?r?[j.BC3_RGBA,J.q_.COMPRESSED_RGBA_S3TC_DXT5_EXT]:[j.BC1_RGB,J.q_.COMPRESSED_RGB_S3TC_DXT1_EXT]:[j.RGBA32,J.VI.RGBA],h=t.hasMipmap?i:Math.min(1,i),f=[];for(let g=0;g<h;g++)f.push(new Uint8Array(a(g,u))),s(g,u,f[g]);const p=f.length>1,m=p?J.cw.LINEAR_MIPMAP_LINEAR:J.cw.LINEAR,v={...t,samplingMode:m,hasMipmap:p,internalFormat:d,width:n,height:o};return new X.x(e,v,{type:"compressed",levels:f})}const le=A.Z.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil"),ce=542327876,ue=131072,de=4;function he(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}function fe(e){return String.fromCharCode(255&e,e>>8&255,e>>16&255,e>>24&255)}const pe=he("DXT1"),me=he("DXT3"),ve=he("DXT5"),ge=31,xe=0,_e=1,Te=2,be=3,Ae=4,Se=7,Ce=20,we=21;function Me(e,t,i){const{textureData:r,internalFormat:n,width:o,height:a}=Oe(i,t.hasMipmap);return t.samplingMode=r.levels.length>1?J.cw.LINEAR_MIPMAP_LINEAR:J.cw.LINEAR,t.hasMipmap=r.levels.length>1,t.internalFormat=n,t.width=o,t.height=a,new X.x(e,t,r)}function Oe(e,t){const i=new Int32Array(e,0,ge);if(i[xe]!==ce)return le.error("Invalid magic number in DDS header"),null;if(!(i[Ce]&de))return le.error("Unsupported format, must contain a FourCC code"),null;const r=i[we];let n,o;switch(r){case pe:n=8,o=J.q_.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case me:n=16,o=J.q_.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case ve:n=16,o=J.q_.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return le.error("Unsupported FourCC code:",fe(r)),null}let a=1,s=i[Ae],l=i[be];0==(3&s)&&0==(3&l)||(le.warn("Rounding up compressed texture size to nearest multiple of 4."),s=s+3&-4,l=l+3&-4);const c=s,u=l;let d,h;i[Te]&ue&&!1!==t&&(a=Math.max(1,i[Se])),1===a||(0,V.wt)(s)&&(0,V.wt)(l)||(le.warn("Ignoring mipmaps of non power of two sized compressed texture."),a=1);let f=i[_e]+4;const p=[];for(let m=0;m<a;++m)h=(s+3>>2)*(l+3>>2)*n,d=new Uint8Array(e,f,h),p.push(d),f+=h,s=Math.max(1,s>>1),l=Math.max(1,l>>1);return{textureData:{type:"compressed",levels:p},internalFormat:o,width:c,height:u}}var ye=i(5474),Ee=i(41163);new Ee.G(L.T.POSITION,3,J.g.FLOAT,0,12),new Ee.G(L.T.POSITION,3,J.g.FLOAT,0,20),new Ee.G(L.T.UV0,2,J.g.FLOAT,12,20),new Ee.G(L.T.POSITION,3,J.g.FLOAT,0,32),new Ee.G(L.T.NORMAL,3,J.g.FLOAT,12,32),new Ee.G(L.T.UV0,2,J.g.FLOAT,24,32),new Ee.G(L.T.POSITION,3,J.g.FLOAT,0,16),new Ee.G(L.T.COLOR,4,J.g.UNSIGNED_BYTE,12,16);const Pe=[new Ee.G(L.T.POSITION,2,J.g.FLOAT,0,8)],Re=[new Ee.G(L.T.POSITION,2,J.g.FLOAT,0,16),new Ee.G(L.T.UV0,2,J.g.FLOAT,8,16)];var Ie=i(78951),Ne=i(29620);function Le(e,t=Pe,i=ye.i,r=-1,n=1){let o=null;return o=t===Re?new Float32Array([r,r,0,0,n,r,1,0,r,n,0,1,n,n,1,1]):new Float32Array([r,r,n,r,r,n,n,n]),new Ne.U(e,i,{geometry:t},{geometry:Ie.f.createVertex(e,J.l1.STATIC_DRAW,o)})}var He,De=i(18567),Fe=i(79193);class Be extends R.c{constructor(e,t){super(),this.data=e,this.type=I.U.Texture,this._glTexture=null,this._powerOfTwoStretchInfo=null,this._loadingPromise=null,this._loadingController=null,this.events=new z.Z,this.params=t||{},this.params.mipmap=!1!==this.params.mipmap,this.params.noUnpackFlip=this.params.noUnpackFlip||!1,this.params.preMultiplyAlpha=this.params.preMultiplyAlpha||!1,this.params.wrap=this.params.wrap||{s:J.e8.REPEAT,t:J.e8.REPEAT},this.params.powerOfTwoResizeMode=this.params.powerOfTwoResizeMode||M.CE.STRETCH,this.estimatedTexMemRequired=Be._estimateTexMemRequired(this.data,this.params),this._startPreload()}_startPreload(){const e=this.data;(0,n.Wi)(e)||(e instanceof HTMLVideoElement?this._startPreloadVideoElement(e):e instanceof HTMLImageElement&&this._startPreloadImageElement(e))}_startPreloadVideoElement(e){if(!((0,U.jc)(e.src)||"auto"===e.preload&&e.crossOrigin)){e.preload="auto",e.crossOrigin="anonymous";const t=!e.paused;if(e.src=e.src,t&&e.autoplay){const t=()=>{e.removeEventListener("canplay",t),e.play()};e.addEventListener("canplay",t)}}}_startPreloadImageElement(e){(0,U.HK)(e.src)||(0,U.jc)(e.src)||e.crossOrigin||(e.crossOrigin="anonymous",e.src=e.src)}static _getDataDimensions(e){return e instanceof HTMLVideoElement?{width:e.videoWidth,height:e.videoHeight}:e}static _estimateTexMemRequired(e,t){if((0,n.Wi)(e))return 0;if((0,G.eP)(e)||(0,G.lq)(e))return t.encoding===Be.KTX2_ENCODING?te(e,t.mipmap):t.encoding===Be.BASIS_ENCODING?ee(e,t.mipmap):e.byteLength;const{width:i,height:r}=e instanceof Image||e instanceof ImageData||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement?Be._getDataDimensions(e):t;return(t.mipmap?4/3:1)*i*r*(t.components||4)||0}dispose(){this.data=void 0}get width(){return this.params.width}get height(){return this.params.height}_createDescriptor(e){return{target:J.No.TEXTURE_2D,pixelFormat:J.VI.RGBA,dataType:J.Br.UNSIGNED_BYTE,wrapMode:this.params.wrap,flipped:!this.params.noUnpackFlip,samplingMode:this.params.mipmap?J.cw.LINEAR_MIPMAP_LINEAR:J.cw.LINEAR,hasMipmap:this.params.mipmap,preMultiplyAlpha:this.params.preMultiplyAlpha,maxAnisotropy:this.params.maxAnisotropy??(this.params.mipmap?e.parameters.maxMaxAnisotropy:1)}}get glTexture(){return this._glTexture}load(e,t){if((0,n.pC)(this._glTexture))return this._glTexture;if((0,n.pC)(this._loadingPromise))return this._loadingPromise;const i=this.data;return(0,n.Wi)(i)?(this._glTexture=new X.x(e,this._createDescriptor(e),null),this._glTexture):"string"==typeof i?this._loadFromURL(e,t,i):i instanceof Image?this._loadFromImageElement(e,t,i):i instanceof HTMLVideoElement?this._loadFromVideoElement(e,t,i):i instanceof ImageData||i instanceof HTMLCanvasElement?this._loadFromImage(e,i,t):((0,G.eP)(i)||(0,G.lq)(i))&&this.params.encoding===Be.DDS_ENCODING?(this.data=void 0,this._loadFromDDSData(e,i)):((0,G.eP)(i)||(0,G.lq)(i))&&this.params.encoding===Be.KTX2_ENCODING?(this.data=void 0,this._loadFromKTX2(e,i)):((0,G.eP)(i)||(0,G.lq)(i))&&this.params.encoding===Be.BASIS_ENCODING?(this.data=void 0,this._loadFromBasis(e,i)):(0,G.lq)(i)?this._loadFromPixelData(e,i):(0,G.eP)(i)?this._loadFromPixelData(e,new Uint8Array(i)):null}get requiresFrameUpdates(){return this.data instanceof HTMLVideoElement}frameUpdate(e,t,i){if(!(this.data instanceof HTMLVideoElement)||(0,n.Wi)(this._glTexture))return i;if(this.data.readyState<He.HAVE_CURRENT_DATA||i===this.data.currentTime)return i;if((0,n.pC)(this._powerOfTwoStretchInfo)){const{framebuffer:i,vao:r,sourceTexture:n}=this._powerOfTwoStretchInfo;n.setData(this.data),this._drawStretchedTexture(e,t,i,r,n,this._glTexture)}else{const{videoWidth:e,videoHeight:t}=this.data,{width:i,height:r}=this._glTexture.descriptor;e!==i||t!==r?this._glTexture.updateData(0,0,0,Math.min(e,i),Math.min(t,r),this.data):this._glTexture.setData(this.data)}return this._glTexture.descriptor.hasMipmap&&this._glTexture.generateMipmap(),this.params.updateCallback&&this.params.updateCallback(),this.data.currentTime}_loadFromDDSData(e,t){return this._glTexture=Me(e,this._createDescriptor(e),t),this._glTexture}_loadFromKTX2(e,t){return this._loadAsync((()=>ae(e,this._createDescriptor(e),t).then((e=>(this._glTexture=e,e)))))}_loadFromBasis(e,t){return this._loadAsync((()=>oe(e,this._createDescriptor(e),t).then((e=>(this._glTexture=e,e)))))}_loadFromPixelData(e,t){(0,y.hu)(this.params.width>0&&this.params.height>0);const i=this._createDescriptor(e);return i.pixelFormat=1===this.params.components?J.VI.LUMINANCE:3===this.params.components?J.VI.RGB:J.VI.RGBA,i.width=this.params.width,i.height=this.params.height,this._glTexture=new X.x(e,i,t),this._glTexture}_loadFromURL(e,t,i){return this._loadAsync((async r=>{const n=await(0,w.t)(i,{signal:r});return(0,S.k_)(r),this._loadFromImage(e,n,t)}))}_loadFromImageElement(e,t,i){return i.complete?this._loadFromImage(e,i,t):this._loadAsync((async r=>{const n=await(0,W.fY)(i,i.src,!1,r);return(0,S.k_)(r),this._loadFromImage(e,n,t)}))}_loadFromVideoElement(e,t,i){return i.readyState>=He.HAVE_CURRENT_DATA?this._loadFromImage(e,i,t):this._loadFromVideoElementAsync(e,t,i)}_loadFromVideoElementAsync(e,t,i){return this._loadAsync((r=>new Promise(((o,a)=>{const s=()=>{i.removeEventListener("loadeddata",l),i.removeEventListener("error",c),(0,n.hw)(u)},l=()=>{i.readyState>=He.HAVE_CURRENT_DATA&&(s(),o(this._loadFromImage(e,i,t)))},c=e=>{s(),a(e||new b.Z("Failed to load video"))};i.addEventListener("loadeddata",l),i.addEventListener("error",c);const u=(0,S.fu)(r,(()=>c((0,S.zE)())))}))))}_loadFromImage(e,t,i){const r=Be._getDataDimensions(t);this.params.width=r.width,this.params.height=r.height;const n=this._createDescriptor(e);return n.pixelFormat=3===this.params.components?J.VI.RGB:J.VI.RGBA,!this._requiresPowerOfTwo(e,n)||(0,V.wt)(r.width)&&(0,V.wt)(r.height)?(n.width=r.width,n.height=r.height,this._glTexture=new X.x(e,n,t),this._glTexture):(this._glTexture=this._makePowerOfTwoTexture(e,t,r,n,i),this._glTexture)}_loadAsync(e){const t=new AbortController;this._loadingController=t;const i=e(t.signal);this._loadingPromise=i;const r=()=>{this._loadingController===t&&(this._loadingController=null),this._loadingPromise===i&&(this._loadingPromise=null)};return i.then(r,r),i}_requiresPowerOfTwo(e,t){const i=J.e8.CLAMP_TO_EDGE,r="number"==typeof t.wrapMode?t.wrapMode===i:t.wrapMode.s===i&&t.wrapMode.t===i;return!(0,Fe.Z)(e.gl)&&(t.hasMipmap||!r)}_makePowerOfTwoTexture(e,t,i,r,n){const{width:o,height:a}=i,s=(0,V.Sf)(o),l=(0,V.Sf)(a);let c;switch(r.width=s,r.height=l,this.params.powerOfTwoResizeMode){case M.CE.PAD:r.textureCoordinateScaleFactor=[o/s,a/l],c=new X.x(e,r),c.updateData(0,0,0,o,a,t);break;case M.CE.STRETCH:case null:case void 0:c=this._stretchToPowerOfTwo(e,t,r,n());break;default:(0,B.Bg)(this.params.powerOfTwoResizeMode)}return r.hasMipmap&&c.generateMipmap(),c}_stretchToPowerOfTwo(e,t,i,r){const n=new X.x(e,i),o=new De.X(e,{colorTarget:J.Lm.TEXTURE,depthStencilTarget:J.OU.NONE},n),a=new X.x(e,{target:J.No.TEXTURE_2D,pixelFormat:i.pixelFormat,dataType:J.Br.UNSIGNED_BYTE,wrapMode:J.e8.CLAMP_TO_EDGE,samplingMode:J.cw.LINEAR,flipped:!!i.flipped,maxAnisotropy:8,preMultiplyAlpha:i.preMultiplyAlpha},t),s=Le(e),l=e.getBoundFramebufferObject();return this._drawStretchedTexture(e,r,o,s,a,n),this.requiresFrameUpdates?this._powerOfTwoStretchInfo={vao:s,sourceTexture:a,framebuffer:o}:(s.dispose(!0),a.dispose(),o.detachColorTexture(),o.dispose()),e.bindFramebuffer(l),n}_drawStretchedTexture(e,t,i,r,n,o){e.bindFramebuffer(i);const a=e.getViewport();e.setViewport(0,0,o.descriptor.width,o.descriptor.height);const s=e.bindTechnique(t);s.setUniform4f("uColor",1,1,1,1),s.bindTexture("tex",n),e.bindVAO(r),e.drawArrays(J.MX.TRIANGLE_STRIP,0,(0,K._V)(r,"geometry")),e.bindFramebuffer(null),e.setViewport(a.x,a.y,a.width,a.height)}unload(){if((0,n.pC)(this._powerOfTwoStretchInfo)){const{framebuffer:e,vao:t,sourceTexture:i}=this._powerOfTwoStretchInfo;t.dispose(!0),i.dispose(),e.dispose(),this._glTexture=null,this._powerOfTwoStretchInfo=null}if((0,n.pC)(this._glTexture)&&(this._glTexture.dispose(),this._glTexture=null),(0,n.pC)(this._loadingController)){const e=this._loadingController;this._loadingController=null,this._loadingPromise=null,e.abort()}this.events.emit("unloaded")}}Be.DDS_ENCODING="image/vnd-ms.dds",Be.KTX2_ENCODING="image/ktx2",Be.BASIS_ENCODING="image/x.basis",function(e){e[e.HAVE_NOTHING=0]="HAVE_NOTHING",e[e.HAVE_METADATA=1]="HAVE_METADATA",e[e.HAVE_CURRENT_DATA=2]="HAVE_CURRENT_DATA",e[e.HAVE_FUTURE_DATA=3]="HAVE_FUTURE_DATA",e[e.HAVE_ENOUGH_DATA=4]="HAVE_ENOUGH_DATA"}(He||(He={}));var ze,Ve,Ge=i(65684),Ue=i(44685),We=i(25714),ke=i(27125),qe=i(2833),$e=i(3864),je=i(66865),Je=i(7358),Xe=i(12045);!function(e){e[e.MATERIAL=0]="MATERIAL",e[e.MATERIAL_ALPHA=1]="MATERIAL_ALPHA",e[e.MATERIAL_DEPTH=2]="MATERIAL_DEPTH",e[e.MATERIAL_NORMAL=3]="MATERIAL_NORMAL",e[e.MATERIAL_DEPTH_SHADOWMAP_ALL=4]="MATERIAL_DEPTH_SHADOWMAP_ALL",e[e.MATERIAL_HIGHLIGHT=5]="MATERIAL_HIGHLIGHT",e[e.MATERIAL_DEPTH_SHADOWMAP_DEFAULT=6]="MATERIAL_DEPTH_SHADOWMAP_DEFAULT",e[e.MATERIAL_DEPTH_SHADOWMAP_HIGHLIGHT=7]="MATERIAL_DEPTH_SHADOWMAP_HIGHLIGHT"}(ze||(ze={})),function(e){e[e.INTEGRATED_MESH=0]="INTEGRATED_MESH",e[e.OPAQUE_TERRAIN=1]="OPAQUE_TERRAIN",e[e.OPAQUE_MATERIAL=2]="OPAQUE_MATERIAL",e[e.TRANSPARENT_MATERIAL=3]="TRANSPARENT_MATERIAL",e[e.TRANSPARENT_TERRAIN=4]="TRANSPARENT_TERRAIN",e[e.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL=5]="TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL",e[e.OCCLUDED_TERRAIN=6]="OCCLUDED_TERRAIN",e[e.OCCLUDER_MATERIAL=7]="OCCLUDER_MATERIAL",e[e.TRANSPARENT_OCCLUDER_MATERIAL=8]="TRANSPARENT_OCCLUDER_MATERIAL",e[e.OCCLUSION_PIXELS=9]="OCCLUSION_PIXELS",e[e.POSTPROCESSING_ENVIRONMENT_OPAQUE=10]="POSTPROCESSING_ENVIRONMENT_OPAQUE",e[e.POSTPROCESSING_ENVIRONMENT_TRANSPARENT=11]="POSTPROCESSING_ENVIRONMENT_TRANSPARENT",e[e.LASERLINES=12]="LASERLINES",e[e.LASERLINES_CONTRAST_CONTROL=13]="LASERLINES_CONTRAST_CONTROL",e[e.HUD_MATERIAL=14]="HUD_MATERIAL",e[e.LABEL_MATERIAL=15]="LABEL_MATERIAL",e[e.LINE_CALLOUTS=16]="LINE_CALLOUTS",e[e.LINE_CALLOUTS_HUD_DEPTH=17]="LINE_CALLOUTS_HUD_DEPTH",e[e.DRAPED_MATERIAL=18]="DRAPED_MATERIAL",e[e.DRAPED_WATER=19]="DRAPED_WATER",e[e.VOXEL=20]="VOXEL",e[e.MAX_SLOTS=21]="MAX_SLOTS"}(Ve||(Ve={}));var Ke=i(10663),Ze=i(61044),Ye=i(79912),Qe=i(42116);class et{constructor(e=0){this.offset=e,this.tmpVertex=(0,u.c)()}applyToVertex(e,t,i){const r=e+this.localOrigin[0],n=t+this.localOrigin[1],o=i+this.localOrigin[2],a=this.offset/Math.sqrt(r*r+n*n+o*o);return this.tmpVertex[0]=e+r*a,this.tmpVertex[1]=t+n*a,this.tmpVertex[2]=i+o*a,this.tmpVertex}applyToAabb(e){for(let n=0;n<3;++n)tt[n]=e[0+n]+this.localOrigin[n],it[n]=e[3+n]+this.localOrigin[n],rt[n]=tt[n];const t=this.applyToVertex(tt[0],tt[1],tt[2]);for(let n=0;n<3;++n)e[n]=t[n],e[n+3]=t[n];const i=t=>{const i=this.applyToVertex(t[0],t[1],t[2]);for(let r=0;r<3;++r)e[r+0]=Math.min(e[r+0],i[r]),e[r+3]=Math.max(e[r+3],i[r])};for(let n=1;n<8;++n){for(let e=0;e<3;++e)rt[e]=0==(n&1<<e)?tt[e]:it[e];i(rt)}let r=0;for(let n=0;n<3;++n)tt[n]*it[n]<0&&(r|=1<<n);if(0!==r&&7!==r)for(let n=0;n<8;++n)if(0==(r&n)){for(let e=0;e<3;++e)r[e]?rt[e]=0:rt[e]=0!=(n&1<<e)?tt[e]:it[e];i(rt)}for(let n=0;n<3;++n)e[n+0]-=this.localOrigin[n],e[n+3]-=this.localOrigin[n];return e}}const tt=(0,u.c)(),it=(0,u.c)(),rt=(0,u.c)();class nt{constructor(e=0){this.componentLocalOriginLength=0,this._tmpVertex=(0,u.c)(),this._mbs=(0,Qe.c)(),this._obb={center:(0,u.c)(),halfSize:(0,Ye.c)(),quaternion:null},this._totalOffset=0,this._offset=0,this._resetOffset(e)}_resetOffset(e){this._offset=e,this._totalOffset=e}set offset(e){this._resetOffset(e)}get offset(){return this._offset}set componentOffset(e){this._totalOffset=this._offset+e}set localOrigin(e){this.componentLocalOriginLength=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}applyToVertex(e,t,i){const r=e,n=t,o=i+this.componentLocalOriginLength,a=this._totalOffset/Math.sqrt(r*r+n*n+o*o);return this._tmpVertex[0]=e+r*a,this._tmpVertex[1]=t+n*a,this._tmpVertex[2]=i+o*a,this._tmpVertex}applyToAabb(e){const t=e[0],i=e[1],r=e[2]+this.componentLocalOriginLength,n=e[3],o=e[4],a=e[5]+this.componentLocalOriginLength,s=t*n<0?0:Math.min(Math.abs(t),Math.abs(n)),l=i*o<0?0:Math.min(Math.abs(i),Math.abs(o)),c=r*a<0?0:Math.min(Math.abs(r),Math.abs(a)),u=Math.sqrt(s*s+l*l+c*c);if(u<this._totalOffset)return e[0]-=t<0?this._totalOffset:0,e[1]-=i<0?this._totalOffset:0,e[2]-=r<0?this._totalOffset:0,e[3]+=n>0?this._totalOffset:0,e[4]+=o>0?this._totalOffset:0,e[5]+=a>0?this._totalOffset:0,e;const d=Math.max(Math.abs(t),Math.abs(n)),h=Math.max(Math.abs(i),Math.abs(o)),f=Math.max(Math.abs(r),Math.abs(a)),p=Math.sqrt(d*d+h*h+f*f),m=this._totalOffset/p,v=this._totalOffset/u;return e[0]+=t*(t>0?m:v),e[1]+=i*(i>0?m:v),e[2]+=r*(r>0?m:v),e[3]+=n*(n<0?m:v),e[4]+=o*(o<0?m:v),e[5]+=a*(a<0?m:v),e}applyToMbs(e){const t=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]),i=this._totalOffset/t;return this._mbs[0]=e[0]+e[0]*i,this._mbs[1]=e[1]+e[1]*i,this._mbs[2]=e[2]+e[2]*i,this._mbs[3]=e[3]+e[3]*this._totalOffset/t,this._mbs}applyToObb(e){const t=e.center,i=this._totalOffset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);this._obb.center[0]=t[0]+t[0]*i,this._obb.center[1]=t[1]+t[1]*i,this._obb.center[2]=t[2]+t[2]*i,(0,c.q)(this._obb.halfSize,e.halfSize,e.quaternion),(0,c.a)(this._obb.halfSize,this._obb.halfSize,e.center);const r=this._totalOffset/Math.sqrt(this._obb.halfSize[0]*this._obb.halfSize[0]+this._obb.halfSize[1]*this._obb.halfSize[1]+this._obb.halfSize[2]*this._obb.halfSize[2]);return this._obb.halfSize[0]+=this._obb.halfSize[0]*r,this._obb.halfSize[1]+=this._obb.halfSize[1]*r,this._obb.halfSize[2]+=this._obb.halfSize[2]*r,(0,c.b)(this._obb.halfSize,this._obb.halfSize,e.center),(0,Ke.c)(lt,e.quaternion),(0,c.q)(this._obb.halfSize,this._obb.halfSize,lt),this._obb.halfSize[0]*=this._obb.halfSize[0]<0?-1:1,this._obb.halfSize[1]*=this._obb.halfSize[1]<0?-1:1,this._obb.halfSize[2]*=this._obb.halfSize[2]<0?-1:1,this._obb.quaternion=e.quaternion,this._obb}}class ot{constructor(e=0){this.offset=e,this.sphere=(0,Qe.c)(),this.tmpVertex=(0,u.c)()}applyToVertex(e,t,i){const r=this.objectTransform.transform;let n=r[0]*e+r[4]*t+r[8]*i+r[12],o=r[1]*e+r[5]*t+r[9]*i+r[13],a=r[2]*e+r[6]*t+r[10]*i+r[14];const s=this.offset/Math.sqrt(n*n+o*o+a*a);n+=n*s,o+=o*s,a+=a*s;const l=this.objectTransform.inverse;return this.tmpVertex[0]=l[0]*n+l[4]*o+l[8]*a+l[12],this.tmpVertex[1]=l[1]*n+l[5]*o+l[9]*a+l[13],this.tmpVertex[2]=l[2]*n+l[6]*o+l[10]*a+l[14],this.tmpVertex}applyToMinMax(e,t){const i=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*i,e[1]+=e[1]*i,e[2]+=e[2]*i;const r=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]+=t[0]*r,t[1]+=t[1]*r,t[2]+=t[2]*r}applyToAabb(e){const t=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*t,e[1]+=e[1]*t,e[2]+=e[2]*t;const i=this.offset/Math.sqrt(e[3]*e[3]+e[4]*e[4]+e[5]*e[5]);return e[3]+=e[3]*i,e[4]+=e[4]*i,e[5]+=e[5]*i,e}applyToBoundingSphere(e){const t=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]),i=this.offset/t;return this.sphere[0]=e[0]+e[0]*i,this.sphere[1]=e[1]+e[1]*i,this.sphere[2]=e[2]+e[2]*i,this.sphere[3]=e[3]+e[3]*this.offset/t,this.sphere}}const at=new ot;function st(e){return(0,n.pC)(e)?(at.offset=e,at):null}new nt;new et;const lt=(0,Ze.a)();function ct(e,t,i,r){const n=i.typedBuffer,o=i.typedBufferStride,a=e.length;r*=o;for(let s=0;s<a;++s){const i=2*e[s];n[r]=t[i],n[r+1]=t[i+1],r+=o}}function ut(e,t,i,r,n){const o=i.typedBuffer,a=i.typedBufferStride,s=e.length;if(r*=a,null==n||1===n)for(let l=0;l<s;++l){const i=3*e[l];o[r]=t[i],o[r+1]=t[i+1],o[r+2]=t[i+2],r+=a}else for(let l=0;l<s;++l){const i=3*e[l];for(let e=0;e<n;++e)o[r]=t[i],o[r+1]=t[i+1],o[r+2]=t[i+2],r+=a}}function dt(e,t,i,r,n=1){const o=i.typedBuffer,a=i.typedBufferStride,s=e.length;if(r*=a,1===n)for(let l=0;l<s;++l){const i=4*e[l];o[r]=t[i],o[r+1]=t[i+1],o[r+2]=t[i+2],o[r+3]=t[i+3],r+=a}else for(let l=0;l<s;++l){const i=4*e[l];for(let e=0;e<n;++e)o[r]=t[i],o[r+1]=t[i+1],o[r+2]=t[i+2],o[r+3]=t[i+3],r+=a}}function ht(e,t,i,r,n,o=1){if(!i)return void ut(e,t,r,n,o);const a=r.typedBuffer,s=r.typedBufferStride,l=e.length,c=i[0],u=i[1],d=i[2],h=i[4],f=i[5],p=i[6],m=i[8],v=i[9],g=i[10],x=i[12],_=i[13],T=i[14];if(n*=s,1===o)for(let b=0;b<l;++b){const i=3*e[b],r=t[i],o=t[i+1],l=t[i+2];a[n]=c*r+h*o+m*l+x,a[n+1]=u*r+f*o+v*l+_,a[n+2]=d*r+p*o+g*l+T,n+=s}else for(let b=0;b<l;++b){const i=3*e[b],r=t[i],l=t[i+1],A=t[i+2],S=c*r+h*l+m*A+x,C=u*r+f*l+v*A+_,w=d*r+p*l+g*A+T;for(let e=0;e<o;++e)a[n]=S,a[n+1]=C,a[n+2]=w,n+=s}}function ft(e,t,i,r,n,o=1){if(!i)return void ut(e,t,r,n,o);const a=i,l=r.typedBuffer,c=r.typedBufferStride,u=e.length,d=a[0],h=a[1],f=a[2],p=a[4],m=a[5],v=a[6],g=a[8],x=a[9],_=a[10],T=!(0,s.p)(a),b=1e-6,A=1-b;if(n*=c,1===o)for(let s=0;s<u;++s){const i=3*e[s],r=t[i],o=t[i+1],a=t[i+2];let u=d*r+p*o+g*a,S=h*r+m*o+x*a,C=f*r+v*o+_*a;if(T){const e=u*u+S*S+C*C;if(e<A&&e>b){const t=1/Math.sqrt(e);u*=t,S*=t,C*=t}}l[n+0]=u,l[n+1]=S,l[n+2]=C,n+=c}else for(let s=0;s<u;++s){const i=3*e[s],r=t[i],a=t[i+1],u=t[i+2];let S=d*r+p*a+g*u,C=h*r+m*a+x*u,w=f*r+v*a+_*u;if(T){const e=S*S+C*C+w*w;if(e<A&&e>b){const t=1/Math.sqrt(e);S*=t,C*=t,w*=t}}for(let e=0;e<o;++e)l[n+0]=S,l[n+1]=C,l[n+2]=w,n+=c}}function pt(e,t,i,r,n,o=1){if(!i)return void dt(e,t,r,n,o);const a=i,l=r.typedBuffer,c=r.typedBufferStride,u=e.length,d=a[0],h=a[1],f=a[2],p=a[4],m=a[5],v=a[6],g=a[8],x=a[9],_=a[10],T=!(0,s.p)(a),b=1e-6,A=1-b;if(n*=c,1===o)for(let s=0;s<u;++s){const i=4*e[s],r=t[i],o=t[i+1],a=t[i+2],u=t[i+3];let S=d*r+p*o+g*a,C=h*r+m*o+x*a,w=f*r+v*o+_*a;if(T){const e=S*S+C*C+w*w;if(e<A&&e>b){const t=1/Math.sqrt(e);S*=t,C*=t,w*=t}}l[n+0]=S,l[n+1]=C,l[n+2]=w,l[n+3]=u,n+=c}else for(let s=0;s<u;++s){const i=4*e[s],r=t[i],a=t[i+1],u=t[i+2],S=t[i+3];let C=d*r+p*a+g*u,w=h*r+m*a+x*u,M=f*r+v*a+_*u;if(T){const e=C*C+w*w+M*M;if(e<A&&e>b){const t=1/Math.sqrt(e);C*=t,w*=t,M*=t}}for(let e=0;e<o;++e)l[n+0]=C,l[n+1]=w,l[n+2]=M,l[n+3]=S,n+=c}}function mt(e,t,i,r,n,o=1){const a=r.typedBuffer,s=r.typedBufferStride,l=e.length;if(n*=s,1===o){if(4===i)for(let c=0;c<l;++c){const i=4*e[c];a[n]=t[i],a[n+1]=t[i+1],a[n+2]=t[i+2],a[n+3]=t[i+3],n+=s}else if(3===i)for(let c=0;c<l;++c){const i=3*e[c];a[n]=t[i],a[n+1]=t[i+1],a[n+2]=t[i+2],a[n+3]=255,n+=s}}else if(4===i)for(let c=0;c<l;++c){const i=4*e[c];for(let e=0;e<o;++e)a[n]=t[i],a[n+1]=t[i+1],a[n+2]=t[i+2],a[n+3]=t[i+3],n+=s}else if(3===i)for(let c=0;c<l;++c){const i=3*e[c];for(let e=0;e<o;++e)a[n]=t[i],a[n+1]=t[i+1],a[n+2]=t[i+2],a[n+3]=255,n+=s}}function vt(e,t,i,r,n,o){for(const a of t.fieldNames){const t=e.vertexAttributes.get(a),s=e.indices.get(a);if(t&&s)switch(a){case L.T.POSITION:{(0,y.hu)(3===t.size);const e=n.getField(a,h.ct);e&&ht(s,t.data,i,e,o);break}case L.T.NORMAL:{(0,y.hu)(3===t.size);const e=n.getField(a,h.ct);e&&ft(s,t.data,r,e,o);break}case L.T.UV0:{(0,y.hu)(2===t.size);const e=n.getField(a,h.Eu);e&&ct(s,t.data,e,o);break}case L.T.COLOR:{(0,y.hu)(3===t.size||4===t.size);const e=n.getField(a,h.mc);e&&mt(s,t.data,t.size,e,o);break}case L.T.SYMBOLCOLOR:{(0,y.hu)(3===t.size||4===t.size);const e=n.getField(a,h.mc);e&&mt(s,t.data,t.size,e,o);break}case L.T.TANGENT:{(0,y.hu)(4===t.size);const e=n.getField(a,h.ek);e&&pt(s,t.data,r,e,o);break}}}}var gt=i(16318),xt=i(1983),_t=i(82082),Tt=i(78549),bt=i(44391),At=i(5331);class St{constructor(e,t){this._module=e,this._loadModule=t}get(){return this._module}async reload(){return this._module=await this._loadModule(),this._module}}class Ct{constructor(e,t,i){this.release=i,t&&(this.initializeConfiguration(e,t),this._configuration=t.snapshot()),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e.rctx.capabilities)}destroy(){this._program=(0,n.O3)(this._program),this._pipeline=this._configuration=null}reload(e){(0,n.O3)(this._program),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e.rctx.capabilities)}get program(){return this._program}get compiled(){return this.program.isCompiled}get key(){return this._configuration.key}get configuration(){return this._configuration}bindPass(e,t){this.program.bindPass(e,t)}bindDraw(e,t){this.program.bindDraw(e,t),this.program.rebindTextures()}bindPipelineState(e,t=null,i){e.setPipelineState(this.getPipelineState(t,i))}ensureAttributeLocations(e){this.program.assertCompatibleVertexAttributeLocations(e)}get primitiveType(){return J.MX.TRIANGLES}getPipelineState(e,t){return this._pipeline}initializeConfiguration(e,t){}}var wt=i(40017),Mt=i(6174);class Ot{constructor(e,t,i){this._context=e,this._locations=i,this._textures=new Map,this._freeTextureUnits=new O.Z({deallocator:null}),this._glProgram=e.programCache.acquire(t.generate("vertex"),t.generate("fragment"),i),this._glProgram.stop=()=>{throw new Error("Wrapped _glProgram used directly")},this.bindPass=t.generateBind(wt.P.Pass,this),this.bindDraw=t.generateBind(wt.P.Draw,this),this._fragmentUniforms=(0,Mt.hZ)()?t.fragmentUniforms:null}dispose(){this._glProgram.dispose()}get glName(){return this._glProgram.glName}get isCompiled(){return this._glProgram.isCompiled}setUniform1b(e,t){this._glProgram.setUniform1i(e,t?1:0)}setUniform1i(e,t){this._glProgram.setUniform1i(e,t)}setUniform1f(e,t){this._glProgram.setUniform1f(e,t)}setUniform2f(e,t,i){this._glProgram.setUniform2f(e,t,i)}setUniform2fv(e,t){this._glProgram.setUniform2fv(e,t)}setUniform3f(e,t,i,r){this._glProgram.setUniform3f(e,t,i,r)}setUniform3fv(e,t){this._glProgram.setUniform3fv(e,t)}setUniform4f(e,t,i,r,n){this._glProgram.setUniform4f(e,t,i,r,n)}setUniform4fv(e,t){this._glProgram.setUniform4fv(e,t)}setUniformMatrix3fv(e,t){this._glProgram.setUniformMatrix3fv(e,t)}setUniformMatrix4fv(e,t){this._glProgram.setUniformMatrix4fv(e,t)}setUniform1fv(e,t){this._glProgram.setUniform1fv(e,t)}setUniform1iv(e,t){this._glProgram.setUniform1iv(e,t)}setUniform2iv(e,t){this._glProgram.setUniform3iv(e,t)}setUniform3iv(e,t){this._glProgram.setUniform3iv(e,t)}setUniform4iv(e,t){this._glProgram.setUniform4iv(e,t)}assertCompatibleVertexAttributeLocations(e){e.locations!==this._locations&&console.error("VertexAttributeLocations are incompatible")}stop(){this._textures.clear(),this._freeTextureUnits.clear()}bindTexture(e,t){if((0,n.Wi)(t)||null==t.glName){const t=this._textures.get(e);return t&&(this._context.bindTexture(null,t.unit),this._freeTextureUnit(t),this._textures.delete(e)),null}let i=this._textures.get(e);return null==i?(i=this._allocTextureUnit(t),this._textures.set(e,i)):i.texture=t,this._context.useProgram(this),this.setUniform1i(e,i.unit),this._context.bindTexture(t,i.unit),i.unit}rebindTextures(){this._context.useProgram(this),this._textures.forEach(((e,t)=>{this._context.bindTexture(e.texture,e.unit),this.setUniform1i(t,e.unit)})),(0,n.pC)(this._fragmentUniforms)&&this._fragmentUniforms.forEach((e=>{"sampler2D"!==e.type&&"samplerCube"!==e.type||this._textures.has(e.name)||console.error(`Texture sampler ${e.name} has no bound texture`)}))}_allocTextureUnit(e){return{texture:e,unit:0===this._freeTextureUnits.length?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(e){this._freeTextureUnits.push(e.unit)}}J.wb.LESS,J.wb.ALWAYS;const yt={mask:255},Et={function:{func:J.wb.ALWAYS,ref:M.hU.OutlineVisualElementMask,mask:M.hU.OutlineVisualElementMask},operation:{fail:J.xS.KEEP,zFail:J.xS.KEEP,zPass:J.xS.ZERO}},Pt={function:{func:J.wb.ALWAYS,ref:M.hU.OutlineVisualElementMask,mask:M.hU.OutlineVisualElementMask},operation:{fail:J.xS.KEEP,zFail:J.xS.KEEP,zPass:J.xS.REPLACE}};J.wb.EQUAL,M.hU.OutlineVisualElementMask,M.hU.OutlineVisualElementMask,J.xS.KEEP,J.xS.KEEP,J.xS.KEEP,J.wb.NOTEQUAL,M.hU.OutlineVisualElementMask,M.hU.OutlineVisualElementMask,J.xS.KEEP,J.xS.KEEP,J.xS.KEEP;var Rt=i(45584),It=i(17346);class Nt extends Tt.d4{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=(0,u.f)(0,1,.5),this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=M.Vr.Back,this.emissiveFactor=(0,u.f)(0,0,0),this.instancedDoublePrecision=!1,this.normals="default",this.receiveSSAO=!0,this.receiveShadows=!0,this.castShadows=!0,this.shadowMappingEnabled=!1,this.ambient=(0,u.f)(.2,.2,.2),this.diffuse=(0,u.f)(.8,.8,.8),this.externalColor=(0,xt.f)(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=(0,u.c)(),this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.offsetTransparentBackfaces=!1,this.vvSizeEnabled=!1,this.vvSizeMinSize=[1,1,1],this.vvSizeMaxSize=[100,100,100],this.vvSizeOffset=[0,0,0],this.vvSizeFactor=[1,1,1],this.vvSizeValue=[1,1,1],this.vvColorEnabled=!1,this.vvColorValues=[0,0,0,0,0,0,0,0],this.vvColorColors=[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],this.vvSymbolAnchor=[0,0,0],this.vvSymbolRotationMatrix=(0,a.c)(),this.vvOpacityEnabled=!1,this.vvOpacityValues=[],this.vvOpacityOpacities=[],this.transparent=!1,this.writeDepth=!0,this.customDepthTest=M.Gv.Less,this.textureAlphaMode=M.JJ.Blend,this.textureAlphaCutoff=bt.F,this.textureAlphaPremultiplied=!1,this.hasOccludees=!1,this.renderOccluded=Je.yD.Occlude}}class Lt extends Ct{initializeConfiguration(e,t){t.spherical=e.viewingMode===Ge.JY.Global,t.doublePrecisionRequiresObfuscation=(0,At.I)(e.rctx),t.textureCoordinateType=t.hasColorTexture||t.hasMetalnessAndRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture||t.hasNormalTexture?_t.N.Default:_t.N.None}initializeProgram(e){return this._initializeProgram(e,Lt.shader)}_initializeProgram(e,t){const i=t.get().build(this.configuration);return new Ot(e.rctx,i,ye.i)}_convertDepthTestFunction(e){return e===M.Gv.Lequal?J.wb.LEQUAL:J.wb.LESS}_setPipeline(e,t){const i=this.configuration,r=e===M.Am.NONE,n=e===M.Am.FrontFace;return(0,It.sm)({blending:i.output!==We.H.Color&&i.output!==We.H.Alpha||!i.transparent?null:r?Xe.wu:(0,Xe.j7)(e),culling:Ht(i)&&(0,It.zp)(i.cullFace),depthTest:{func:(0,Xe.Bh)(e,this._convertDepthTestFunction(i.customDepthTest))},depthWrite:r||n?i.writeDepth&&It.LZ:null,colorWrite:It.BK,stencilWrite:i.hasOccludees?yt:null,stencilTest:i.hasOccludees?t?Pt:Et:null,polygonOffset:r||n?null:(0,Xe.je)(i.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._setPipeline(this.configuration.transparencyPassType,!0),this._setPipeline(this.configuration.transparencyPassType,!1)}getPipelineState(e,t){return t?this._occludeePipelineState:super.getPipelineState(e,t)}}function Ht(e){return e.cullFace!==M.Vr.None||!e.hasSlicePlane&&!e.transparent&&!e.doubleSidedMode}Lt.shader=new St(Rt.D,(()=>i.e(1180).then(i.bind(i,1180))));var Dt=i(36663);class Ft{constructor(){this._key="",this._keyDirty=!1,this._parameterBits=this._parameterBits?this._parameterBits.map((()=>0)):[],this._parameterNames||(this._parameterNames=[])}get key(){return this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,this._parameterBits)),this._key}snapshot(){const e=this._parameterNames,t={key:this.key};for(const i of e)t[i]=this[i];return t}}function Bt(e={}){return(t,i)=>{if(t._parameterNames=t._parameterNames??[],t._parameterNames.push(i),null!=e.constValue)Object.defineProperty(t,i,{get:()=>e.constValue});else{const r=t._parameterNames.length-1,n=e.count||2,o=Math.ceil(Math.log2(n)),a=t._parameterBits??[0];let s=0;for(;a[s]+o>16;)s++,s>=a.length&&a.push(0);t._parameterBits=a;const l=a[s],c=(1<<o)-1<<l;a[s]+=o,Object.defineProperty(t,i,{get(){return this[r]},set(e){if(this[r]!==e&&(this[r]=e,this._keyDirty=!0,this._parameterBits[s]=this._parameterBits[s]&~c|+e<<l&c,"number"!=typeof e&&"boolean"!=typeof e))throw"Configuration value for "+i+" must be boolean or number, got "+typeof e}})}}}class zt extends Ft{}(0,Dt._)([Bt({constValue:!0})],zt.prototype,"hasSliceHighlight",void 0),(0,Dt._)([Bt({constValue:!1})],zt.prototype,"hasSliceInVertexProgram",void 0),(0,Dt._)([Bt({constValue:!1})],zt.prototype,"instancedDoublePrecision",void 0),(0,Dt._)([Bt({constValue:!1})],zt.prototype,"isGround",void 0),(0,Dt._)([Bt({constValue:wt.P.Pass})],zt.prototype,"pbrTextureBindType",void 0);class Vt extends zt{constructor(){super(...arguments),this.output=We.H.Color,this.alphaDiscardMode=M.JJ.Opaque,this.doubleSidedMode=qe.q.None,this.pbrMode=$e.f7.Disabled,this.cullFace=M.Vr.None,this.transparencyPassType=M.Am.NONE,this.normalType=ke.h.Attribute,this.textureCoordinateType=_t.N.None,this.customDepthTest=M.Gv.Less,this.spherical=!1,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.hasColorTexture=!1,this.hasMetalnessAndRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.hasMultipassTerrain=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.vvSize=!1,this.vvColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instanced=!1,this.instancedColor=!1,this.instancedDoublePrecision=!1,this.doublePrecisionRequiresObfuscation=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.cullAboveGround=!1,this.snowCover=!1}}(0,Dt._)([Bt({count:We.H.COUNT})],Vt.prototype,"output",void 0),(0,Dt._)([Bt({count:M.JJ.COUNT})],Vt.prototype,"alphaDiscardMode",void 0),(0,Dt._)([Bt({count:qe.q.COUNT})],Vt.prototype,"doubleSidedMode",void 0),(0,Dt._)([Bt({count:$e.f7.COUNT})],Vt.prototype,"pbrMode",void 0),(0,Dt._)([Bt({count:M.Vr.COUNT})],Vt.prototype,"cullFace",void 0),(0,Dt._)([Bt({count:M.Am.COUNT})],Vt.prototype,"transparencyPassType",void 0),(0,Dt._)([Bt({count:ke.h.COUNT})],Vt.prototype,"normalType",void 0),(0,Dt._)([Bt({count:_t.N.COUNT})],Vt.prototype,"textureCoordinateType",void 0),(0,Dt._)([Bt({count:M.Gv.COUNT})],Vt.prototype,"customDepthTest",void 0),(0,Dt._)([Bt()],Vt.prototype,"spherical",void 0),(0,Dt._)([Bt()],Vt.prototype,"hasVertexColors",void 0),(0,Dt._)([Bt()],Vt.prototype,"hasSymbolColors",void 0),(0,Dt._)([Bt()],Vt.prototype,"hasVerticalOffset",void 0),(0,Dt._)([Bt()],Vt.prototype,"hasSlicePlane",void 0),(0,Dt._)([Bt()],Vt.prototype,"hasSliceHighlight",void 0),(0,Dt._)([Bt()],Vt.prototype,"hasColorTexture",void 0),(0,Dt._)([Bt()],Vt.prototype,"hasMetalnessAndRoughnessTexture",void 0),(0,Dt._)([Bt()],Vt.prototype,"hasEmissionTexture",void 0),(0,Dt._)([Bt()],Vt.prototype,"hasOcclusionTexture",void 0),(0,Dt._)([Bt()],Vt.prototype,"hasNormalTexture",void 0),(0,Dt._)([Bt()],Vt.prototype,"hasScreenSizePerspective",void 0),(0,Dt._)([Bt()],Vt.prototype,"hasVertexTangents",void 0),(0,Dt._)([Bt()],Vt.prototype,"hasOccludees",void 0),(0,Dt._)([Bt()],Vt.prototype,"hasMultipassTerrain",void 0),(0,Dt._)([Bt()],Vt.prototype,"hasModelTransformation",void 0),(0,Dt._)([Bt()],Vt.prototype,"offsetBackfaces",void 0),(0,Dt._)([Bt()],Vt.prototype,"vvSize",void 0),(0,Dt._)([Bt()],Vt.prototype,"vvColor",void 0),(0,Dt._)([Bt()],Vt.prototype,"receiveShadows",void 0),(0,Dt._)([Bt()],Vt.prototype,"receiveAmbientOcclusion",void 0),(0,Dt._)([Bt()],Vt.prototype,"textureAlphaPremultiplied",void 0),(0,Dt._)([Bt()],Vt.prototype,"instanced",void 0),(0,Dt._)([Bt()],Vt.prototype,"instancedColor",void 0),(0,Dt._)([Bt()],Vt.prototype,"instancedDoublePrecision",void 0),(0,Dt._)([Bt()],Vt.prototype,"doublePrecisionRequiresObfuscation",void 0),(0,Dt._)([Bt()],Vt.prototype,"writeDepth",void 0),(0,Dt._)([Bt()],Vt.prototype,"transparent",void 0),(0,Dt._)([Bt()],Vt.prototype,"enableOffset",void 0),(0,Dt._)([Bt()],Vt.prototype,"cullAboveGround",void 0),(0,Dt._)([Bt()],Vt.prototype,"snowCover",void 0),(0,Dt._)([Bt({constValue:!0})],Vt.prototype,"hasVvInstancing",void 0),(0,Dt._)([Bt({constValue:!1})],Vt.prototype,"useCustomDTRExponentForWater",void 0),(0,Dt._)([Bt({constValue:!1})],Vt.prototype,"supportsTextureAtlas",void 0),(0,Dt._)([Bt({constValue:!0})],Vt.prototype,"useFillLights",void 0);var Gt=i(60926);class Ut extends Lt{initializeConfiguration(e,t){super.initializeConfiguration(e,t),t.hasMetalnessAndRoughnessTexture=!1,t.hasEmissionTexture=!1,t.hasOcclusionTexture=!1,t.hasNormalTexture=!1,t.hasModelTransformation=!1,t.normalType=ke.h.Attribute,t.doubleSidedMode=qe.q.WindingOrder,t.hasVertexTangents=!1}initializeProgram(e){return this._initializeProgram(e,Ut.shader)}}Ut.shader=new St(Gt.R,(()=>i.e(6353).then(i.bind(i,56353))));class Wt extends Je.F5{constructor(e){super(e,$t),this.supportsEdges=!0,this.techniqueConfig=new Vt,this.vertexBufferLayout=Jt(this.parameters),this.instanceBufferLayout=e.instanced?Xt(this.parameters):null}isVisibleInPass(e){return e!==ze.MATERIAL_DEPTH_SHADOWMAP_ALL&&e!==ze.MATERIAL_DEPTH_SHADOWMAP_DEFAULT&&e!==ze.MATERIAL_DEPTH_SHADOWMAP_HIGHLIGHT||this.parameters.castShadows}isVisible(){const e=this.parameters;if(!super.isVisible()||0===e.layerOpacity)return!1;const{instanced:t,hasVertexColors:i,hasSymbolColors:r,vvColorEnabled:o}=e,a=(0,n.pC)(t)&&t.includes("color"),s="replace"===e.colorMixMode,l=e.opacity>0,c=e.externalColor&&e.externalColor[3]>0;return i&&(a||o||r)?!!s||l:i?s?c:l:a||o||r?!!s||l:s?c:l}getConfiguration(e,t){return this.techniqueConfig.output=e,this.techniqueConfig.hasNormalTexture=!!this.parameters.normalTextureId,this.techniqueConfig.hasColorTexture=!!this.parameters.textureId,this.techniqueConfig.hasVertexTangents=this.parameters.hasVertexTangents,this.techniqueConfig.instanced=!!this.parameters.instanced,this.techniqueConfig.instancedDoublePrecision=this.parameters.instancedDoublePrecision,this.techniqueConfig.vvSize=this.parameters.vvSizeEnabled,this.techniqueConfig.hasVerticalOffset=(0,n.pC)(this.parameters.verticalOffset),this.techniqueConfig.hasScreenSizePerspective=(0,n.pC)(this.parameters.screenSizePerspective),this.techniqueConfig.hasSlicePlane=this.parameters.hasSlicePlane,this.techniqueConfig.hasSliceHighlight=this.parameters.hasSliceHighlight,this.techniqueConfig.alphaDiscardMode=this.parameters.textureAlphaMode,this.techniqueConfig.normalType="screenDerivative"===this.parameters.normals?ke.h.ScreenDerivative:ke.h.Attribute,this.techniqueConfig.transparent=this.parameters.transparent,this.techniqueConfig.writeDepth=this.parameters.writeDepth,(0,n.pC)(this.parameters.customDepthTest)&&(this.techniqueConfig.customDepthTest=this.parameters.customDepthTest),this.techniqueConfig.hasOccludees=this.parameters.hasOccludees,this.techniqueConfig.cullFace=this.parameters.hasSlicePlane?M.Vr.None:this.parameters.cullFace,this.techniqueConfig.hasMultipassTerrain=t.multipassTerrain.enabled,this.techniqueConfig.cullAboveGround=t.multipassTerrain.cullAboveGround,this.techniqueConfig.hasModelTransformation=(0,n.pC)(this.parameters.modelTransformation),e!==We.H.Color&&e!==We.H.Alpha||(this.techniqueConfig.hasVertexColors=this.parameters.hasVertexColors,this.techniqueConfig.hasSymbolColors=this.parameters.hasSymbolColors,this.parameters.treeRendering?this.techniqueConfig.doubleSidedMode=qe.q.WindingOrder:this.techniqueConfig.doubleSidedMode=this.parameters.doubleSided&&"normal"===this.parameters.doubleSidedType?qe.q.View:this.parameters.doubleSided&&"winding-order"===this.parameters.doubleSidedType?qe.q.WindingOrder:qe.q.None,this.techniqueConfig.instancedColor=(0,n.pC)(this.parameters.instanced)&&this.parameters.instanced.includes("color"),this.techniqueConfig.receiveShadows=this.parameters.receiveShadows&&this.parameters.shadowMappingEnabled,this.techniqueConfig.receiveAmbientOcclusion=!!t.ssaoHelper.ready&&this.parameters.receiveSSAO,this.techniqueConfig.vvColor=this.parameters.vvColorEnabled,this.techniqueConfig.textureAlphaPremultiplied=!!this.parameters.textureAlphaPremultiplied,this.techniqueConfig.pbrMode=this.parameters.usePBR?this.parameters.isSchematic?$e.f7.Schematic:$e.f7.Normal:$e.f7.Disabled,this.techniqueConfig.hasMetalnessAndRoughnessTexture=!!this.parameters.metallicRoughnessTextureId,this.techniqueConfig.hasEmissionTexture=!!this.parameters.emissiveTextureId,this.techniqueConfig.hasOcclusionTexture=!!this.parameters.occlusionTextureId,this.techniqueConfig.offsetBackfaces=!(!this.parameters.transparent||!this.parameters.offsetTransparentBackfaces),this.techniqueConfig.transparencyPassType=t.transparencyPassType,this.techniqueConfig.enableOffset=t.camera.relativeElevation<Xe.ve,this.techniqueConfig.snowCover=this.hasSnowCover(t)),this.techniqueConfig}hasSnowCover(e){return(0,n.pC)(e.weather)&&e.weatherVisible&&"snowy"===e.weather.type&&"enabled"===e.weather.snowCover}intersect(e,t,i,r,o,a,s){if((0,n.pC)(this.parameters.verticalOffset)){const e=r.camera;(0,c.s)(ti,i[12],i[13],i[14]);let t=null;switch(r.viewingMode){case Ge.JY.Global:t=(0,c.n)(Qt,ti);break;case Ge.JY.Local:t=(0,c.c)(Qt,Yt)}let n=0;const s=(0,c.b)(ii,ti,e.eye),l=(0,c.l)(s),u=(0,c.g)(s,s,1/l);let d=null;this.parameters.screenSizePerspective&&(d=(0,c.e)(t,u)),n+=(0,gt.Hx)(e,l,this.parameters.verticalOffset,d,this.parameters.screenSizePerspective),(0,c.g)(t,t,n),(0,c.t)(ei,t,r.transform.inverseRotation),o=(0,c.b)(Kt,o,ei),a=(0,c.b)(Zt,a,ei)}(0,gt.Bw)(e,t,r,o,a,st(r.verticalOffset),s)}requiresSlot(e){return e===(this.parameters.transparent?this.parameters.writeDepth?Ve.TRANSPARENT_MATERIAL:Ve.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:Ve.OPAQUE_MATERIAL)||e===Ve.DRAPED_MATERIAL}createGLMaterial(e){return e.output===We.H.Color||e.output===We.H.Alpha||e.output===We.H.Depth||e.output===We.H.Normal||e.output===We.H.Shadow||e.output===We.H.Highlight?new kt(e):null}createBufferWriter(){return new jt(this.vertexBufferLayout,this.instanceBufferLayout)}}class kt extends je.F{constructor(e){super({...e,...e.material.parameters})}_updateParameters(e){const t=this._material.parameters;this.updateTexture(t.textureId);const i=e.camera.viewInverseTransposeMatrix;return(0,c.s)(t.origin,i[3],i[7],i[11]),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(t.treeRendering?Ut:Lt,e)}_updateShadowState(e){e.shadowMap.enabled!==this._material.parameters.shadowMappingEnabled&&this._material.setParameters({shadowMappingEnabled:e.shadowMap.enabled})}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&this._material.setParameters({hasOccludees:e.hasOccludees})}beginSlot(e){return this._output!==We.H.Color&&this._output!==We.H.Alpha||(this._updateShadowState(e),this._updateOccludeeState(e)),this._updateParameters(e)}}class qt extends Nt{constructor(){super(...arguments),this.initTextureTransparent=!1,this.treeRendering=!1,this.hasVertexTangents=!1}}const $t=new qt;class jt{constructor(e,t){this.vertexBufferLayout=e,this.instanceBufferLayout=t}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){return e.indices.get(L.T.POSITION).length}write(e,t,i,r){vt(t,this.vertexBufferLayout,e.transformation,e.invTranspTransformation,i,r)}}function Jt(e){const t=e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId,i=(0,Ue.U$)().vec3f(L.T.POSITION).vec3f(L.T.NORMAL);return e.hasVertexTangents&&i.vec4f(L.T.TANGENT),t&&i.vec2f(L.T.UV0),e.hasVertexColors&&i.vec4u8(L.T.COLOR),e.hasSymbolColors&&i.vec4u8(L.T.SYMBOLCOLOR),i}function Xt(e){let t=(0,Ue.U$)();return t=e.instancedDoublePrecision?t.vec3f(L.T.MODELORIGINHI).vec3f(L.T.MODELORIGINLO).mat3f(L.T.MODEL).mat3f(L.T.MODELNORMAL):t.mat4f(L.T.MODEL).mat4f(L.T.MODELNORMAL),(0,n.pC)(e.instanced)&&e.instanced.includes("color")&&(t=t.vec4f(L.T.INSTANCECOLOR)),(0,n.pC)(e.instanced)&&e.instanced.includes("featureAttribute")&&(t=t.vec4f(L.T.INSTANCEFEATUREATTRIBUTE)),t}const Kt=(0,u.c)(),Zt=(0,u.c)(),Yt=(0,u.f)(0,0,1),Qt=(0,u.c)(),ei=(0,u.c)(),ti=(0,u.c)(),ii=(0,u.c)(),ri=A.Z.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function ni(e,t){const i=await oi(e,t);return{resource:i,textures:await di(i.textureDefinitions,t)}}async function oi(e,t){const i=(0,n.pC)(t)&&t.streamDataRequester;if(i)return ai(e,i,t);const r=await(0,T.q6)((0,_["default"])(e,(0,n.Wg)(t)));if(!0===r.ok)return r.value.data;(0,S.r9)(r.error),si(r.error)}async function ai(e,t,i){const r=await(0,T.q6)(t.request(e,"json",i));if(!0===r.ok)return r.value;(0,S.r9)(r.error),si(r.error.details.url)}function si(e){throw new b.Z("",`Request for object resource failed: ${e}`)}function li(e){const t=e.params,i=t.topology;let r=!0;switch(t.vertexAttributes||(ri.warn("Geometry must specify vertex attributes"),r=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const e=t.faces;if(e){if(t.vertexAttributes)for(const i in t.vertexAttributes){const t=e[i];t&&t.values?(null!=t.valueType&&"UInt32"!==t.valueType&&(ri.warn(`Unsupported indexed geometry indices type '${t.valueType}', only UInt32 is currently supported`),r=!1),null!=t.valuesPerElement&&1!==t.valuesPerElement&&(ri.warn(`Unsupported indexed geometry values per element '${t.valuesPerElement}', only 1 is currently supported`),r=!1)):(ri.warn(`Indexed geometry does not specify face indices for '${i}' attribute`),r=!1)}}else ri.warn("Indexed geometries must specify faces"),r=!1;break}default:ri.warn(`Unsupported topology '${i}'`),r=!1}e.params.material||(ri.warn("Geometry requires material"),r=!1);const n=e.params.vertexAttributes;for(const o in n)n[o].values||(ri.warn("Geometries with externally defined attributes are not yet supported"),r=!1);return r}function ci(e,t){const i=[],r=[],o=[],a=[],s=e.resource,l=C.G.parse(s.version||"1.0","wosr");pi.validate(l);const c=s.model.name,d=s.model.geometries,h=s.materialDefinitions,f=e.textures;let p=0;const m=new Map;for(let v=0;v<d.length;v++){const e=d[v];if(!li(e))continue;const s=fi(e),l=e.params.vertexAttributes,c=[];for(const t in l){const e=l[t],i=e.values;c.push([t,{data:i,size:e.valuesPerElement,exclusive:!0}])}const g=[];if("PerAttributeArray"!==e.params.topology){const t=e.params.faces;for(const e in t)g.push([e,new Uint32Array(t[e].values)])}const x=f&&f[s.texture];if(x&&!m.has(s.texture)){const{image:e,params:t}=x,i=new Be(e,t);a.push(i),m.set(s.texture,i)}const _=m.get(s.texture),T=_?_.id:void 0;let b=o[s.material]?o[s.material][s.texture]:null;if(!b){const e=h[s.material.substring(s.material.lastIndexOf("/")+1)].params;1===e.transparency&&(e.transparency=0);const i=x&&x.alphaChannelUsage,r=e.transparency>0||"transparency"===i||"maskAndTransparency"===i,a=x?hi(x.alphaChannelUsage):void 0,l={ambient:(0,u.d)(e.diffuse),diffuse:(0,u.d)(e.diffuse),opacity:1-(e.transparency||0),transparent:r,textureAlphaMode:a,textureAlphaCutoff:.33,textureId:T,initTextureTransparent:!0,doubleSided:!0,cullFace:M.Vr.None,colorMixMode:e.externalColorMixMode||"tint",textureAlphaPremultiplied:!!x&&!!x.params.preMultiplyAlpha};(0,n.pC)(t)&&t.materialParamsMixin&&Object.assign(l,t.materialParamsMixin),b=new Wt(l),o[s.material]||(o[s.material]={}),o[s.material][s.texture]=b}r.push(b);const A=new H(c,g);p+=g.position?g.position.length:0,i.push(A)}return{name:c,stageResources:{textures:a,materials:r,geometries:i},pivotOffset:s.model.pivotOffset,boundingBox:ui(i),numberOfVertices:p,lodThreshold:null}}function ui(e){const t=(0,d.cS)();return e.forEach((e=>{const i=e.boundingInfo;(0,n.pC)(i)&&((0,d.pp)(t,i.getBBMin()),(0,d.pp)(t,i.getBBMax()))})),t}async function di(e,t){const i=[];for(const a in e){const r=e[a],o=r.images[0].data;if(!o){ri.warn("Externally referenced texture data is not yet supported");continue}const s=r.encoding+";base64,"+o,l="/textureDefinitions/"+a,c="rgba"===r.channels?r.alphaChannelUsage||"transparency":"none",u={noUnpackFlip:!0,wrap:{s:J.e8.REPEAT,t:J.e8.REPEAT},preMultiplyAlpha:hi(c)!==M.JJ.Opaque},d=(0,n.pC)(t)&&t.disableTextures?Promise.resolve(null):(0,w.t)(s,t);i.push(d.then((e=>({refId:l,image:e,params:u,alphaChannelUsage:c}))))}const r=await Promise.all(i),o={};for(const n of r)o[n.refId]=n;return o}function hi(e){switch(e){case"mask":return M.JJ.Mask;case"maskAndTransparency":return M.JJ.MaskBlend;case"none":return M.JJ.Opaque;default:return M.JJ.Blend}}function fi(e){const t=e.params;return{id:1,material:t.material,texture:t.texture,region:t.texture}}const pi=new C.G(1,2,"wosr");var mi=i(14634),vi=i(385),gi=i(32101),xi=i(14789);async function _i(e,t){const i=Ti((0,r.pJ)(e));if("wosr"===i.fileType){const e=await(t.cache?t.cache.loadWOSR(i.url,t):ni(i.url,t)),r=ci(e,t);return{lods:[r],referenceBoundingBox:r.boundingBox,isEsriSymbolResource:!1,isWosr:!0,remove:e.remove}}const o=await(t.cache?t.cache.loadGLTF(i.url,t,t.usePBR):(0,g.z)(new v.C(t.streamDataRequester),i.url,t,t.usePBR)),a=(0,n.U2)(o.model.meta,"ESRI_proxyEllipsoid");o.meta.isEsriSymbolResource&&(0,n.pC)(a)&&o.meta.uri.includes("/RealisticTrees/")&&Ci(o,a);const s=o.meta.isEsriSymbolResource?{usePBR:t.usePBR,isSchematic:!1,treeRendering:!!o.customMeta.esriTreeRendering,mrrFactors:[0,1,.2]}:{usePBR:t.usePBR,isSchematic:!1,treeRendering:!1,mrrFactors:[0,1,.5]},l={...t.materialParamsMixin,treeRendering:!!o.customMeta.esriTreeRendering};if(null!=i.specifiedLodIndex){const e=bi(o,s,l,i.specifiedLodIndex);let t=e[0].boundingBox;return 0!==i.specifiedLodIndex&&(t=bi(o,s,l,0)[0].boundingBox),{lods:e,referenceBoundingBox:t,isEsriSymbolResource:o.meta.isEsriSymbolResource,isWosr:!1,remove:o.remove}}const c=bi(o,s,l);return{lods:c,referenceBoundingBox:c[0].boundingBox,isEsriSymbolResource:o.meta.isEsriSymbolResource,isWosr:!1,remove:o.remove}}function Ti(e){const t=e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return t?{fileType:"gltf",url:t[1],specifiedLodIndex:null!=t[4]?Number(t[4]):null}:e.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:e,specifiedLodIndex:null}:{fileType:"unknown",url:e,specifiedLodIndex:null}}function bi(e,t,i,r){const s=e.model,l=(0,a.c)(),c=new Array,u=new Map,v=new Map;return s.lods.forEach(((e,a)=>{if(void 0!==r&&a!==r)return;const g={name:e.name,stageResources:{textures:new Array,materials:new Array,geometries:new Array},lodThreshold:(0,n.pC)(e.lodThreshold)?e.lodThreshold:null,pivotOffset:[0,0,0],numberOfVertices:0,boundingBox:(0,d.cS)()};c.push(g),e.parts.forEach((e=>{const r=e.material+(e.attributes.normal?"_normal":"")+(e.attributes.color?"_color":"")+(e.attributes.texCoord0?"_texCoord0":"")+(e.attributes.tangent?"_tangent":""),a=s.materials.get(e.material),c=(0,n.pC)(e.attributes.texCoord0),x=(0,n.pC)(e.attributes.normal),_=Ai(a.alphaMode);if(!u.has(r)){if(c){if((0,n.pC)(a.textureColor)&&!v.has(a.textureColor)){const e=s.textures.get(a.textureColor),t={...e.parameters,preMultiplyAlpha:_!==M.JJ.Opaque};v.set(a.textureColor,new Be(e.data,t))}if((0,n.pC)(a.textureNormal)&&!v.has(a.textureNormal)){const e=s.textures.get(a.textureNormal);v.set(a.textureNormal,new Be(e.data,e.parameters))}if((0,n.pC)(a.textureOcclusion)&&!v.has(a.textureOcclusion)){const e=s.textures.get(a.textureOcclusion);v.set(a.textureOcclusion,new Be(e.data,e.parameters))}if((0,n.pC)(a.textureEmissive)&&!v.has(a.textureEmissive)){const e=s.textures.get(a.textureEmissive);v.set(a.textureEmissive,new Be(e.data,e.parameters))}if((0,n.pC)(a.textureMetallicRoughness)&&!v.has(a.textureMetallicRoughness)){const e=s.textures.get(a.textureMetallicRoughness);v.set(a.textureMetallicRoughness,new Be(e.data,e.parameters))}}const o=a.color[0]**(1/mi.K),l=a.color[1]**(1/mi.K),d=a.color[2]**(1/mi.K),h=a.emissiveFactor[0]**(1/mi.K),f=a.emissiveFactor[1]**(1/mi.K),p=a.emissiveFactor[2]**(1/mi.K),m=(0,n.pC)(a.textureColor)&&c?v.get(a.textureColor):null;u.set(r,new Wt({...t,transparent:_===M.JJ.Blend,customDepthTest:M.Gv.Lequal,textureAlphaMode:_,textureAlphaCutoff:a.alphaCutoff,diffuse:[o,l,d],ambient:[o,l,d],opacity:a.opacity,doubleSided:a.doubleSided,doubleSidedType:"winding-order",cullFace:a.doubleSided?M.Vr.None:M.Vr.Back,hasVertexColors:!!e.attributes.color,hasVertexTangents:!!e.attributes.tangent,normals:x?"default":"screenDerivative",castShadows:!0,receiveSSAO:!0,textureId:(0,n.pC)(m)?m.id:void 0,colorMixMode:a.colorMixMode,normalTextureId:(0,n.pC)(a.textureNormal)&&c?v.get(a.textureNormal).id:void 0,textureAlphaPremultiplied:(0,n.pC)(m)&&!!m.params.preMultiplyAlpha,occlusionTextureId:(0,n.pC)(a.textureOcclusion)&&c?v.get(a.textureOcclusion).id:void 0,emissiveTextureId:(0,n.pC)(a.textureEmissive)&&c?v.get(a.textureEmissive).id:void 0,metallicRoughnessTextureId:(0,n.pC)(a.textureMetallicRoughness)&&c?v.get(a.textureMetallicRoughness).id:void 0,emissiveFactor:[h,f,p],mrrFactors:[a.metallicFactor,a.roughnessFactor,t.mrrFactors[2]],isSchematic:!1,...i}))}const T=Si(e.indices||e.attributes.position.count,e.primitiveType),b=e.attributes.position.count,A=(0,m.gS)(h.ct,b);(0,f.t)(A,e.attributes.position,e.transform);const S=[[L.T.POSITION,{data:A.typedBuffer,size:A.elementCount,exclusive:!0}]],C=[[L.T.POSITION,T]];if((0,n.pC)(e.attributes.normal)){const t=(0,m.gS)(h.ct,b);(0,o.a)(l,e.transform),(0,f.a)(t,e.attributes.normal,l),S.push([L.T.NORMAL,{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),C.push([L.T.NORMAL,T])}if((0,n.pC)(e.attributes.tangent)){const t=(0,m.gS)(h.ek,b);(0,o.a)(l,e.transform),(0,p.t)(t,e.attributes.tangent,l),S.push([L.T.TANGENT,{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),C.push([L.T.TANGENT,T])}if((0,n.pC)(e.attributes.texCoord0)){const t=(0,m.gS)(h.Eu,b);(0,vi.n)(t,e.attributes.texCoord0),S.push([L.T.UV0,{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),C.push([L.T.UV0,T])}if((0,n.pC)(e.attributes.color)){const t=(0,m.gS)(h.mc,b);if(4===e.attributes.color.elementCount)e.attributes.color instanceof h.ek?(0,p.s)(t,e.attributes.color,255):e.attributes.color instanceof h.mc?(0,gi.c)(t,e.attributes.color):e.attributes.color instanceof h.v6&&(0,p.s)(t,e.attributes.color,1/256);else{(0,gi.f)(t,255,255,255,255);const i=new h.ne(t.buffer,0,4);e.attributes.color instanceof h.ct?(0,f.s)(i,e.attributes.color,255):e.attributes.color instanceof h.ne?(0,xi.c)(i,e.attributes.color):e.attributes.color instanceof h.mw&&(0,f.s)(i,e.attributes.color,1/256)}S.push([L.T.COLOR,{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),C.push([L.T.COLOR,T])}const w=new H(S,C);g.stageResources.geometries.push(w),g.stageResources.materials.push(u.get(r)),c&&((0,n.pC)(a.textureColor)&&g.stageResources.textures.push(v.get(a.textureColor)),(0,n.pC)(a.textureNormal)&&g.stageResources.textures.push(v.get(a.textureNormal)),(0,n.pC)(a.textureOcclusion)&&g.stageResources.textures.push(v.get(a.textureOcclusion)),(0,n.pC)(a.textureEmissive)&&g.stageResources.textures.push(v.get(a.textureEmissive)),(0,n.pC)(a.textureMetallicRoughness)&&g.stageResources.textures.push(v.get(a.textureMetallicRoughness))),g.numberOfVertices+=b;const O=w.boundingInfo;(0,n.pC)(O)&&((0,d.pp)(g.boundingBox,O.getBBMin()),(0,d.pp)(g.boundingBox,O.getBBMax()))}))})),c}function Ai(e){switch(e){case"BLEND":return M.JJ.Blend;case"MASK":return M.JJ.Mask;case"OPAQUE":case null:case void 0:return M.JJ.Opaque}}function Si(e,t){switch(t){case J.MX.TRIANGLES:return(0,x.nh)(e);case J.MX.TRIANGLE_STRIP:return(0,x.DA)(e);case J.MX.TRIANGLE_FAN:return(0,x.jX)(e)}}function Ci(e,t){for(let i=0;i<e.model.lods.length;++i){const r=e.model.lods[i];e.customMeta.esriTreeRendering=!0;for(const o of r.parts){const r=o.attributes.normal;if((0,n.Wi)(r))return;const a=o.attributes.position,d=a.count,f=(0,u.c)(),p=(0,u.c)(),v=(0,u.c)(),g=(0,m.gS)(h.mc,d),x=(0,m.gS)(h.ct,d),_=(0,s.a)((0,l.c)(),o.transform);for(let n=0;n<d;n++){a.getVec(n,p),r.getVec(n,f),(0,c.m)(p,p,o.transform),(0,c.b)(v,p,t.center),(0,c.G)(v,v,t.radius);const s=v[2],l=(0,c.l)(v),u=Math.min(.45+.55*l*l,1);(0,c.G)(v,v,t.radius),(0,c.m)(v,v,_),(0,c.n)(v,v),i+1!==e.model.lods.length&&e.model.lods.length>1&&(0,c.h)(v,v,f,s>-1?.2:Math.min(-4*s-3.8,1)),x.setVec(n,v),g.set(n,0,255*u),g.set(n,1,255*u),g.set(n,2,255*u),g.set(n,3,255)}o.attributes.normal=x,o.attributes.color=g}}}},66352:function(e,t,i){i.d(t,{a9:function(){return r}});var r;i(19431);!function(e){e[e.Multiply=1]="Multiply",e[e.Ignore=2]="Ignore",e[e.Replace=3]="Replace",e[e.Tint=4]="Tint"}(r||(r={}))},44685:function(e,t,i){i.d(t,{U$:function(){return s}});var r=i(63338),n=i(90331);class o{constructor(e,t){this.layout=e,this.buffer="number"==typeof t?new ArrayBuffer(t*e.stride):t;for(const i of e.fieldNames){const t=e.fields.get(i);this[i]=new t.constructor(this.buffer,t.offset,this.stride)}}get stride(){return this.layout.stride}get count(){return this.buffer.byteLength/this.stride}get byteLength(){return this.buffer.byteLength}getField(e,t){const i=this[e];return i&&i.elementCount===t.ElementCount&&i.elementType===t.ElementType?i:null}slice(e,t){return new o(this.layout,this.buffer.slice(e*this.stride,t*this.stride))}copyFrom(e,t,i,r){const n=this.stride;if(n%4==0){const o=new Uint32Array(e.buffer,t*n,r*n/4);new Uint32Array(this.buffer,i*n,r*n/4).set(o)}else{const o=new Uint8Array(e.buffer,t*n,r*n);new Uint8Array(this.buffer,i*n,r*n).set(o)}}}class a{constructor(){this.stride=0,this.fields=new Map,this.fieldNames=[]}vec2f(e,t){return this._appendField(e,r.Eu,t),this}vec2f64(e,t){return this._appendField(e,r.q6,t),this}vec3f(e,t){return this._appendField(e,r.ct,t),this}vec3f64(e,t){return this._appendField(e,r.fP,t),this}vec4f(e,t){return this._appendField(e,r.ek,t),this}vec4f64(e,t){return this._appendField(e,r.Cd,t),this}mat3f(e,t){return this._appendField(e,r.gK,t),this}mat3f64(e,t){return this._appendField(e,r.ey,t),this}mat4f(e,t){return this._appendField(e,r.bj,t),this}mat4f64(e,t){return this._appendField(e,r.O1,t),this}vec4u8(e,t){return this._appendField(e,r.mc,t),this}f32(e,t){return this._appendField(e,r.ly,t),this}f64(e,t){return this._appendField(e,r.oS,t),this}u8(e,t){return this._appendField(e,r.D_,t),this}u16(e,t){return this._appendField(e,r.av,t),this}i8(e,t){return this._appendField(e,r.Hz,t),this}vec2i8(e,t){return this._appendField(e,r.Vs,t),this}vec2i16(e,t){return this._appendField(e,r.or,t),this}vec2u8(e,t){return this._appendField(e,r.xA,t),this}vec4u16(e,t){return this._appendField(e,r.v6,t),this}u32(e,t){return this._appendField(e,r.Nu,t),this}_appendField(e,t,i){const r=t.ElementCount*(0,n.n1)(t.ElementType),o=this.stride;this.fields.set(e,{size:r,constructor:t,offset:o,optional:i}),this.stride+=r,this.fieldNames.push(e)}alignTo(e){return this.stride=Math.floor((this.stride+e-1)/e)*e,this}hasField(e){return this.fieldNames.includes(e)}createBuffer(e){return new o(this,e)}createView(e){return new o(this,e)}clone(){const e=new a;return e.stride=this.stride,e.fields=new Map,this.fields.forEach(((t,i)=>e.fields.set(i,t))),e.fieldNames=this.fieldNames.slice(),e.BufferType=this.BufferType,e}}function s(){return new a}},95650:function(e,t,i){i.d(t,{q:function(){return s}});var r=i(25714),n=i(62295),o=i(93072),a=i(23410);function s(e,t){t.output===r.H.Color&&t.receiveShadows?(e.varyings.add("linearDepth","float"),e.vertex.code.add(a.H`void forwardLinearDepth() { linearDepth = gl_Position.w; }`)):t.output===r.H.Depth||t.output===r.H.Shadow?(e.include(n.up,t),e.varyings.add("linearDepth","float"),e.vertex.uniforms.add(new o.A("nearFar",((e,t)=>t.camera.nearFar))),e.vertex.code.add(a.H`void forwardLinearDepth() {
linearDepth = (-vPosition_view.z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)):e.vertex.code.add(a.H`void forwardLinearDepth() {}`)}},57218:function(e,t,i){i.d(t,{w:function(){return n}});var r=i(23410);function n(e){e.vertex.code.add(r.H`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}},25714:function(e,t,i){var r;i.d(t,{H:function(){return r}}),function(e){e[e.Color=0]="Color",e[e.Depth=1]="Depth",e[e.Normal=2]="Normal",e[e.Shadow=3]="Shadow",e[e.Highlight=4]="Highlight",e[e.Draped=5]="Draped",e[e.Occlusion=6]="Occlusion",e[e.Alpha=7]="Alpha",e[e.COUNT=8]="COUNT"}(r||(r={}))},5885:function(e,t,i){i.d(t,{f5:function(){return u}});var r=i(61681),n=i(24455),o=i(39100),a=i(6766),s=i(8909),l=i(32006),c=(i(43036),i(23410));function u(e,t){d(e,t,[new l.B("slicePlaneOrigin",((e,i)=>m(t,e,i))),new l.B("slicePlaneBasis1",((e,i)=>v(t,e,i,(0,r.Wg)(i.slicePlane)?.basis1))),new l.B("slicePlaneBasis2",((e,i)=>v(t,e,i,(0,r.Wg)(i.slicePlane)?.basis2)))])}function d(e,t,i){if(!t.hasSlicePlane){const i=c.H`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;return t.hasSliceInVertexProgram&&e.vertex.code.add(i),void e.fragment.code.add(i)}e.extensions.add("GL_OES_standard_derivatives"),t.hasSliceInVertexProgram&&e.vertex.uniforms.add(i),e.fragment.uniforms.add(i);const r=c.H`struct SliceFactors {
float front;
float side0;
float side1;
float side2;
float side3;
};
SliceFactors calculateSliceFactors(vec3 pos) {
vec3 rel = pos - slicePlaneOrigin;
vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);
float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);
float basis1Dot = dot(slicePlaneBasis1, rel);
float basis2Dot = dot(slicePlaneBasis2, rel);
return SliceFactors(
dot(slicePlaneNormal, pos) + slicePlaneW,
-basis1Dot - basis1Len2,
basis1Dot - basis1Len2,
-basis2Dot - basis2Len2,
basis2Dot - basis2Len2
);
}
bool sliceByFactors(SliceFactors factors) {
return factors.front < 0.0
&& factors.side0 < 0.0
&& factors.side1 < 0.0
&& factors.side2 < 0.0
&& factors.side3 < 0.0;
}
bool sliceEnabled() {
return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
}
bool sliceByPlane(vec3 pos) {
return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
}
#define rejectBySlice(_pos_) sliceByPlane(_pos_)
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,n=c.H`vec4 applySliceHighlight(vec4 color, vec3 pos) {
SliceFactors factors = calculateSliceFactors(pos);
const float HIGHLIGHT_WIDTH = 1.0;
const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);
factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);
if (sliceByFactors(factors)) {
return color;
}
float highlightFactor = (1.0 - step(0.5, factors.front))
* (1.0 - step(0.5, factors.side0))
* (1.0 - step(0.5, factors.side1))
* (1.0 - step(0.5, factors.side2))
* (1.0 - step(0.5, factors.side3));
return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
}`,o=t.hasSliceHighlight?c.H`
        ${n}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `:c.H`#define highlightSlice(_color_, _pos_) (_color_)`;t.hasSliceInVertexProgram&&e.vertex.code.add(r),e.fragment.code.add(r),e.fragment.code.add(o)}function h(e,t,i){return e.instancedDoublePrecision?(0,a.s)(g,i.camera.viewInverseTransposeMatrix[3],i.camera.viewInverseTransposeMatrix[7],i.camera.viewInverseTransposeMatrix[11]):t.slicePlaneLocalOrigin}function f(e,t){return(0,r.pC)(e)?(0,a.b)(x,t.origin,e):t.origin}function p(e,t,i){return e.hasSliceTranslatedView?(0,r.pC)(t)?(0,n.j)(T,i.camera.viewMatrix,t):i.camera.viewMatrix:null}function m(e,t,i){if((0,r.Wi)(i.slicePlane))return s.Z;const n=h(e,t,i),o=f(n,i.slicePlane),l=p(e,n,i);return(0,r.pC)(l)?(0,a.m)(x,o,l):o}function v(e,t,i,n){if((0,r.Wi)(n)||(0,r.Wi)(i.slicePlane))return s.Z;const o=h(e,t,i),l=f(o,i.slicePlane),c=p(e,o,i);return(0,r.pC)(c)?((0,a.a)(_,n,l),(0,a.m)(x,l,c),(0,a.m)(_,_,c),(0,a.b)(_,_,x)):n}const g=(0,s.c)(),x=(0,s.c)(),_=(0,s.c)(),T=(0,o.c)()},4731:function(e,t,i){i.d(t,{w:function(){return n}});var r=i(23410);function n(e,t={hasModelTransformation:!1,linearDepth:!1}){if(t.hasModelTransformation)return t.linearDepth?void e.vertex.code.add(r.H`vec4 transformPositionWithDepth(mat4 proj, mat4 view, mat4 model, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * (model * vec4(pos, 1.0));
depth = (-eye.z - nearFar[0]) / (nearFar[1] - nearFar[0]) ;
return proj * eye;
}`):void e.vertex.code.add(r.H`vec4 transformPosition(mat4 proj, mat4 view, mat4 model, vec3 pos) {
return proj * (view * (model * vec4(pos, 1.0)));
}`);t.linearDepth?e.vertex.code.add(r.H`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = (-eye.z - nearFar[0]) / (nearFar[1] - nearFar[0]) ;
return proj * eye;
}`):e.vertex.code.add(r.H`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}},99163:function(e,t,i){i.d(t,{f:function(){return h}});var r=i(6766),n=i(8909),o=i(25714),a=i(5331),s=i(32006),l=i(23410),c=i(87621),u=i(21414),d=i(30560);function h(e,t){t.instanced&&t.instancedDoublePrecision&&(e.attributes.add(u.T.MODELORIGINHI,"vec3"),e.attributes.add(u.T.MODELORIGINLO,"vec3"),e.attributes.add(u.T.MODEL,"mat3"),e.attributes.add(u.T.MODELNORMAL,"mat3"));const i=e.vertex;t.instancedDoublePrecision&&(i.include(a.$,t),i.uniforms.add(new s.B("viewOriginHi",((e,t)=>(0,d.U8)((0,r.s)(f,t.camera.viewInverseTransposeMatrix[3],t.camera.viewInverseTransposeMatrix[7],t.camera.viewInverseTransposeMatrix[11]),f)))),i.uniforms.add(new s.B("viewOriginLo",((e,t)=>(0,d.GB)((0,r.s)(f,t.camera.viewInverseTransposeMatrix[3],t.camera.viewInverseTransposeMatrix[7],t.camera.viewInverseTransposeMatrix[11]),f))))),i.code.add(l.H`
    vec3 calculateVPos() {
      ${t.instancedDoublePrecision?"return model * localPosition().xyz;":"return localPosition().xyz;"}
    }
    `),i.code.add(l.H`
    vec3 subtractOrigin(vec3 _pos) {
      ${t.instancedDoublePrecision?l.H`
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),i.code.add(l.H`
    vec3 dpNormal(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize(modelNormal * _normal.xyz);":"return normalize(_normal.xyz);"}
    }
    `),t.output===o.H.Normal&&(i.uniforms.add(new c.g("viewNormal",((e,t)=>t.camera.viewInverseTransposeMatrix))),i.code.add(l.H`
    vec3 dpNormalView(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);":"return normalize((viewNormal * _normal).xyz);"}
    }
    `)),t.hasVertexTangents&&i.code.add(l.H`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${t.instancedDoublePrecision?"return vec4(modelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}

    }
    `)}const f=(0,n.c)()},27125:function(e,t,i){i.d(t,{O:function(){return s},h:function(){return o}});var r=i(23410);function n(e){const t=r.H`vec3 decodeNormal(vec2 f) {
float z = 1.0 - abs(f.x) - abs(f.y);
return vec3(f + sign(f) * min(z, 0.0), z);
}`;e.fragment.code.add(t),e.vertex.code.add(t)}var o,a=i(21414);function s(e,t){t.normalType===o.Attribute&&(e.attributes.add(a.T.NORMAL,"vec3"),e.vertex.code.add(r.H`vec3 normalModel() {
return normal;
}`)),t.normalType===o.CompressedAttribute&&(e.include(n),e.attributes.add(a.T.NORMALCOMPRESSED,"vec2"),e.vertex.code.add(r.H`vec3 normalModel() {
return decodeNormal(normalCompressed);
}`)),t.normalType===o.ScreenDerivative&&(e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(r.H`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`))}!function(e){e[e.Attribute=0]="Attribute",e[e.CompressedAttribute=1]="CompressedAttribute",e[e.Ground=2]="Ground",e[e.ScreenDerivative=3]="ScreenDerivative",e[e.COUNT=4]="COUNT"}(o||(o={}))},91636:function(e,t,i){i.d(t,{f:function(){return o}});var r=i(23410),n=i(21414);function o(e){e.attributes.add(n.T.POSITION,"vec3"),e.vertex.code.add(r.H`vec3 positionModel() { return position; }`)}},45658:function(e,t,i){i.d(t,{R:function(){return c}});var r=i(66352),n=i(23410);function o(e){e.vertex.code.add(n.H`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${n.H.int(r.a9.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${n.H.int(r.a9.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${n.H.int(r.a9.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${n.H.int(r.a9.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}var a=i(59842),s=i(21414),l=i(16318);function c(e,t){t.hasSymbolColors?(e.include(o),e.attributes.add(s.T.SYMBOLCOLOR,"vec4"),e.varyings.add("colorMixMode","mediump float"),e.vertex.code.add(n.H`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(e.fragment.uniforms.add(new a._("colorMixMode",(e=>l.FZ[e.colorMixMode]))),e.vertex.code.add(n.H`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`))}},82082:function(e,t,i){i.d(t,{D:function(){return s},N:function(){return r}});var r,n=i(27755),o=i(23410),a=i(21414);function s(e,t){switch(t.textureCoordinateType){case r.Default:return e.attributes.add(a.T.UV0,"vec2"),e.varyings.add("vuv0","vec2"),void e.vertex.code.add(o.H`void forwardTextureCoordinates() {
vuv0 = uv0;
}`);case r.Atlas:return e.attributes.add(a.T.UV0,"vec2"),e.varyings.add("vuv0","vec2"),e.attributes.add(a.T.UVREGION,"vec4"),e.varyings.add("vuvRegion","vec4"),void e.vertex.code.add(o.H`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`);case r.None:return void e.vertex.code.add(o.H`void forwardTextureCoordinates() {}`);default:(0,n.Bg)(t.textureCoordinateType);case r.COUNT:return}}!function(e){e[e.None=0]="None",e[e.Default=1]="Default",e[e.Atlas=2]="Atlas",e[e.COUNT=3]="COUNT"}(r||(r={}))},6502:function(e,t,i){i.d(t,{c:function(){return o}});var r=i(23410),n=i(21414);function o(e,t){t.hasVertexColors?(e.attributes.add(n.T.COLOR,"vec4"),e.varyings.add("vColor","vec4"),e.vertex.code.add(r.H`void forwardVertexColor() { vColor = color; }`),e.vertex.code.add(r.H`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):e.vertex.code.add(r.H`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}},78549:function(e,t,i){i.d(t,{Bb:function(){return c},d4:function(){return u}});var r=i(34344),n=(i(1983),i(27125)),o=i(62295),a=i(23410),s=i(55784),l=i(11125);function c(e,t){t.normalType===n.h.Attribute||t.normalType===n.h.CompressedAttribute?(e.include(n.O,t),e.varyings.add("vNormalWorld","vec3"),e.varyings.add("vNormalView","vec3"),e.vertex.uniforms.add([new s.j("transformNormalGlobalFromModel",(e=>e.transformNormalGlobalFromModel)),new l.c("transformNormalViewFromGlobal",(e=>e.transformNormalViewFromGlobal))]),e.vertex.code.add(a.H`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`)):t.normalType===n.h.Ground?(e.include(o.up,t),e.varyings.add("vNormalWorld","vec3"),e.vertex.code.add(a.H`
    void forwardNormal() {
      vNormalWorld = ${t.spherical?a.H`normalize(vPositionWorldCameraRelative);`:a.H`vec3(0.0, 0.0, 1.0);`}
    }
    `)):e.vertex.code.add(a.H`void forwardNormal() {}`)}class u extends o.su{constructor(){super(...arguments),this.transformNormalViewFromGlobal=(0,r.c)()}}},62295:function(e,t,i){i.d(t,{su:function(){return m},up:function(){return p}});var r=i(34344),n=i(39100),o=(i(79912),i(8909)),a=i(91636),s=i(5331),l=i(32006),c=i(43036),u=i(23410),d=i(55784),h=i(11125),f=i(87621);function p(e,t){e.include(a.f);const i=e.vertex;i.include(s.$,t),e.varyings.add("vPositionWorldCameraRelative","vec3"),e.varyings.add("vPosition_view","vec3"),i.uniforms.add([new c.J("transformWorldFromViewTH",(e=>e.transformWorldFromViewTH)),new c.J("transformWorldFromViewTL",(e=>e.transformWorldFromViewTL)),new h.c("transformViewFromCameraRelativeRS",(e=>e.transformViewFromCameraRelativeRS)),new f.g("transformProjFromView",(e=>e.transformProjFromView)),new d.j("transformWorldFromModelRS",(e=>e.transformWorldFromModelRS)),new l.B("transformWorldFromModelTH",(e=>e.transformWorldFromModelTH)),new l.B("transformWorldFromModelTL",(e=>e.transformWorldFromModelTL))]),i.code.add(u.H`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = transformWorldFromModelRS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}`),i.code.add(u.H`
    void forwardPosition(float fOffset) {
      vPositionWorldCameraRelative = positionWorldCameraRelative();
      if (fOffset != 0.0) {
        vPositionWorldCameraRelative += fOffset * ${t.spherical?u.H`normalize(transformWorldFromViewTL + vPositionWorldCameraRelative)`:u.H`vec3(0.0, 0.0, 1.0)`};
      }

      vPosition_view = transformViewFromCameraRelativeRS * vPositionWorldCameraRelative;
      gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
    }
  `),e.fragment.uniforms.add(new c.J("transformWorldFromViewTL",(e=>e.transformWorldFromViewTL))),i.code.add(u.H`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`),e.fragment.code.add(u.H`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`)}class m extends u.K{constructor(){super(...arguments),this.transformWorldFromViewTH=(0,o.c)(),this.transformWorldFromViewTL=(0,o.c)(),this.transformViewFromCameraRelativeRS=(0,r.c)(),this.transformProjFromView=(0,n.c)()}}},512:function(e,t,i){i.d(t,{i:function(){return s}});var r=i(27755),n=i(82082),o=i(23410);function a(e){e.extensions.add("GL_EXT_shader_texture_lod"),e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(o.H`#ifndef GL_EXT_shader_texture_lod
float calcMipMapLevel(const vec2 ddx, const vec2 ddy) {
float deltaMaxSqr = max(dot(ddx, ddx), dot(ddy, ddy));
return max(0.0, 0.5 * log2(deltaMaxSqr));
}
#endif
vec4 textureAtlasLookup(sampler2D texture, vec2 textureSize, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
#ifdef GL_EXT_shader_texture_lod
return texture2DGradEXT(texture, uvAtlas, dUVdx, dUVdy);
#else
vec2 dUVdxAuto = dFdx(uvAtlas);
vec2 dUVdyAuto = dFdy(uvAtlas);
float mipMapLevel = calcMipMapLevel(dUVdx * textureSize, dUVdy * textureSize);
float autoMipMapLevel = calcMipMapLevel(dUVdxAuto * textureSize, dUVdyAuto * textureSize);
return texture2D(texture, uvAtlas, mipMapLevel - autoMipMapLevel);
#endif
}`)}function s(e,t){switch(e.include(n.D,t),e.fragment.code.add(o.H`
  struct TextureLookupParameter {
    vec2 uv;
    ${t.supportsTextureAtlas?"vec2 size;":""}
  } vtc;
  `),t.textureCoordinateType){case n.N.Default:return void e.fragment.code.add(o.H`vec4 textureLookup(sampler2D texture, TextureLookupParameter params) {
return texture2D(texture, params.uv);
}`);case n.N.Atlas:return e.include(a),void e.fragment.code.add(o.H`vec4 textureLookup(sampler2D texture, TextureLookupParameter params) {
return textureAtlasLookup(texture, params.size, params.uv, vuvRegion);
}`);default:(0,r.Bg)(t.textureCoordinateType);case n.N.None:case n.N.COUNT:return}}},78183:function(e,t,i){i.d(t,{L:function(){return h}});var r=i(88589),n=i(1983),o=i(63371),a=i(23410);function s(e){e.vertex.code.add(a.H`float screenSizePerspectiveMinSize(float size, vec4 factor) {
float nonZeroSize = 1.0 - step(size, 0.0);
return (
factor.z * (
1.0 +
nonZeroSize *
2.0 * factor.w / (
size + (1.0 - nonZeroSize)
)
)
);
}`),e.vertex.code.add(a.H`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),e.vertex.code.add(a.H`vec4 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec4 params) {
return vec4(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z,
params.w
);
}`),e.vertex.code.add(a.H`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec4 factor) {
return max(mix(size * factor.x, size, factor.y), screenSizePerspectiveMinSize(size, factor));
}`),e.vertex.code.add(a.H`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),e.vertex.code.add(a.H`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec4 factor) {
return mix(size * clamp(factor.x, screenSizePerspectiveMinSize(size.y, factor) / max(1e-5, size.y), 1.0), size, factor.y);
}`),e.vertex.code.add(a.H`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`)}function l(e){e.uniforms.add(new o.N("screenSizePerspectiveAlignment",(e=>c(e.screenSizePerspectiveAlignment||e.screenSizePerspective))))}function c(e){return(0,r.s)(u,e.parameters.divisor,e.parameters.offset,e.parameters.minPixelSize,e.paddingPixelsOverride)}const u=(0,n.c)();var d=i(5614);function h(e,t){const i=e.vertex;t.hasVerticalOffset?(p(i),t.hasScreenSizePerspective&&(e.include(s),l(i),(0,d.h)(e.vertex,t)),i.code.add(a.H`
      vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
        ${t.spherical?a.H`vec3 worldNormal = normalize(worldPos + localOrigin);`:a.H`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
        ${t.hasScreenSizePerspective?a.H`
            float cosAngle = dot(worldNormal, normalize(worldPos - cameraPosition));
            float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:a.H`
            float verticalOffsetScreenHeight = verticalOffset.x;`}
        // Screen sized offset in world space, used for example for line callouts
        float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
        return worldNormal * worldOffset;
      }

      vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        return worldPos + calculateVerticalOffset(worldPos, localOrigin);
      }
    `)):i.code.add(a.H`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}const f=(0,n.c)();function p(e){e.uniforms.add(new o.N("verticalOffset",((e,t)=>{const{minWorldLength:i,maxWorldLength:n,screenLength:o}=e.verticalOffset,a=Math.tan(.5*t.camera.fovY)/(.5*t.camera.fullViewport[3]),s=t.camera.pixelRatio||1;return(0,r.s)(f,o*s,a,i,n)})))}},22735:function(e,t,i){i.d(t,{s:function(){return b}});var r=i(25714),n=i(5885),o=i(4731),a=i(27125),s=i(82082),l=i(78549),c=i(9794),u=i(23410);function d(e,t){e.fragment.include(c.n),t.output===r.H.Shadow?(e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(u.H`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 2.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
float result = depth + SLOPE_SCALE * m + BIAS;
return clamp(result, .0, .999999);
}
void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_calculateFragDepth(_linearDepth));
}`)):t.output===r.H.Depth&&e.fragment.code.add(u.H`void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_linearDepth);
}`)}i(69666);var h=i(1983),f=i(93072),p=i(15176);const m=(0,h.f)(1,1,0,1),v=(0,h.f)(1,0,1,1);function g(e){e.fragment.uniforms.add(new p.A("depthTex",((e,t)=>t.highlightDepthTexture))),e.fragment.uniforms.add(new f.A("highlightViewportPixelSz",((e,t)=>t.inverseViewport))),e.fragment.constants.add("occludedHighlightFlag","vec4",m).add("unoccludedHighlightFlag","vec4",v),e.fragment.code.add(u.H`void outputHighlight() {
vec4 fragCoord = gl_FragCoord;
float sceneDepth = texture2D(depthTex, fragCoord.xy * highlightViewportPixelSz.xy).r;
if (fragCoord.z > sceneDepth + 5e-7) {
gl_FragColor = occludedHighlightFlag;
}
else {
gl_FragColor = unoccludedHighlightFlag;
}
}`)}var x=i(27641),_=i(41330),T=i(5614);function b(e,t){const i=e.vertex.code,c=e.fragment.code,h=t.hasModelTransformation;t.output!==r.H.Depth&&t.output!==r.H.Shadow||((0,T.S)(e,t),e.include(o.w,{linearDepth:!0,hasModelTransformation:h}),e.include(s.D,t),e.include(x.k,t),e.include(d,t),e.include(n.f5,t),e.vertex.uniforms.add(new f.A("nearFar",((e,t)=>t.camera.nearFar))),e.varyings.add("depth","float"),t.hasColorTexture&&e.fragment.uniforms.add(new p.A("tex",(e=>e.texture))),i.add(u.H`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPositionWithDepth(proj, view, ${h?"model,":""} vpos, nearFar, depth);
        forwardTextureCoordinates();
      }
    `),e.include(_.z,t),c.add(u.H`
      void main(void) {
        discardBySlice(vpos);
        ${t.hasColorTexture?u.H`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputDepth(depth);
      }
    `)),t.output===r.H.Normal&&((0,T.S)(e,t),e.include(o.w,{linearDepth:!1,hasModelTransformation:h}),e.include(a.O,t),e.include(l.Bb,t),e.include(s.D,t),e.include(x.k,t),t.hasColorTexture&&e.fragment.uniforms.add(new p.A("tex",(e=>e.texture))),e.varyings.add("vPositionView","vec3"),i.add(u.H`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        ${t.normalType===a.h.Attribute?u.H`
        vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:""}
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, ${h?"model,":""} vpos);
        forwardTextureCoordinates();
      }
    `),e.include(n.f5,t),e.include(_.z,t),c.add(u.H`
      void main() {
        discardBySlice(vpos);
        ${t.hasColorTexture?u.H`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}

        ${t.normalType===a.h.ScreenDerivative?u.H`
            vec3 normal = screenDerivativeNormal(vPositionView);`:u.H`
            vec3 normal = normalize(vNormalWorld);
            if (gl_FrontFacing == false) normal = -normal;`}
        gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
      }
    `)),t.output===r.H.Highlight&&((0,T.S)(e,t),e.include(o.w,{linearDepth:!1,hasModelTransformation:h}),e.include(s.D,t),e.include(x.k,t),t.hasColorTexture&&e.fragment.uniforms.add(new p.A("tex",(e=>e.texture))),i.add(u.H`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, ${h?"model,":""} vpos);
        forwardTextureCoordinates();
      }
    `),e.include(n.f5,t),e.include(_.z,t),e.include(g),c.add(u.H`
      void main() {
        discardBySlice(vpos);
        ${t.hasColorTexture?u.H`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputHighlight();
      }
    `))}},3417:function(e,t,i){i.d(t,{Q:function(){return d}});var r=i(82082),n=i(512),o=i(2833),a=i(23410),s=i(54011),l=i(15176),c=i(40017),u=i(21414);function d(e,t){const i=e.fragment;if(t.hasVertexTangents?(e.attributes.add(u.T.TANGENT,"vec4"),e.varyings.add("vTangent","vec4"),t.doubleSidedMode===o.q.WindingOrder?i.code.add(a.H`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):i.code.add(a.H`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):(e.extensions.add("GL_OES_standard_derivatives"),i.code.add(a.H`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`)),t.textureCoordinateType!==r.N.None){e.include(n.i,t);const r=t.supportsTextureAtlas;i.uniforms.add(t.pbrTextureBindType===c.P.Pass?(0,l.J)("normalTexture",(e=>e.textureNormal),r):(0,s.F)("normalTexture",(e=>e.textureNormal),r)),i.code.add(a.H`
    vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
      vtc.uv = uv;
      ${t.supportsTextureAtlas?"vtc.size = normalTextureSize;":""}
      vec3 rawNormal = textureLookup(normalTexture, vtc).rgb * 2.0 - 1.0;
      return tangentSpace * rawNormal;
    }
  `)}}},30786:function(e,t,i){i.d(t,{K:function(){return l}});var r=i(88589),n=i(1983),o=i(63371),a=i(23410),s=i(15176);function l(e,t){const i=e.fragment;t.receiveAmbientOcclusion?(i.uniforms.add([new s.A("ssaoTex",((e,t)=>t.ssaoHelper.colorTexture)),new o.N("viewportPixelSz",((e,t)=>(0,r.s)(c,t.camera.fullViewport[0],t.camera.fullViewport[1],1/t.ssaoHelper.width,1/t.ssaoHelper.height)))]),i.code.add(a.H`float evaluateAmbientOcclusion() {
return 1.0 - texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
}
float evaluateAmbientOcclusionInverse() {
return texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
}`)):i.code.add(a.H`float evaluateAmbientOcclusion() { return 0.0; }
float evaluateAmbientOcclusionInverse() { return 1.0; }`)}const c=(0,n.c)()},93931:function(e,t,i){i.d(t,{X:function(){return S}});var r=i(6766),n=i(8909),o=i(88589),a=i(1983),s=i(3864),l=i(43036),c=i(63371),u=i(23410);function d(e,t){const i=e.fragment,n=void 0!==t.lightingSphericalHarmonicsOrder?t.lightingSphericalHarmonicsOrder:2;0===n?(i.uniforms.add(new l.J("lightingAmbientSH0",((e,t)=>(0,r.s)(h,t.lighting.sh.r[0],t.lighting.sh.g[0],t.lighting.sh.b[0])))),i.code.add(u.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):1===n?(i.uniforms.add([new c.N("lightingAmbientSH_R",((e,t)=>(0,o.s)(f,t.lighting.sh.r[0],t.lighting.sh.r[1],t.lighting.sh.r[2],t.lighting.sh.r[3]))),new c.N("lightingAmbientSH_G",((e,t)=>(0,o.s)(f,t.lighting.sh.g[0],t.lighting.sh.g[1],t.lighting.sh.g[2],t.lighting.sh.g[3]))),new c.N("lightingAmbientSH_B",((e,t)=>(0,o.s)(f,t.lighting.sh.b[0],t.lighting.sh.b[1],t.lighting.sh.b[2],t.lighting.sh.b[3])))]),i.code.add(u.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):2===n&&(i.uniforms.add([new l.J("lightingAmbientSH0",((e,t)=>(0,r.s)(h,t.lighting.sh.r[0],t.lighting.sh.g[0],t.lighting.sh.b[0]))),new c.N("lightingAmbientSH_R1",((e,t)=>(0,o.s)(f,t.lighting.sh.r[1],t.lighting.sh.r[2],t.lighting.sh.r[3],t.lighting.sh.r[4]))),new c.N("lightingAmbientSH_G1",((e,t)=>(0,o.s)(f,t.lighting.sh.g[1],t.lighting.sh.g[2],t.lighting.sh.g[3],t.lighting.sh.g[4]))),new c.N("lightingAmbientSH_B1",((e,t)=>(0,o.s)(f,t.lighting.sh.b[1],t.lighting.sh.b[2],t.lighting.sh.b[3],t.lighting.sh.b[4]))),new c.N("lightingAmbientSH_R2",((e,t)=>(0,o.s)(f,t.lighting.sh.r[5],t.lighting.sh.r[6],t.lighting.sh.r[7],t.lighting.sh.r[8]))),new c.N("lightingAmbientSH_G2",((e,t)=>(0,o.s)(f,t.lighting.sh.g[5],t.lighting.sh.g[6],t.lighting.sh.g[7],t.lighting.sh.g[8]))),new c.N("lightingAmbientSH_B2",((e,t)=>(0,o.s)(f,t.lighting.sh.b[5],t.lighting.sh.b[6],t.lighting.sh.b[7],t.lighting.sh.b[8])))]),i.code.add(u.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),t.pbrMode!==s.f7.Normal&&t.pbrMode!==s.f7.Schematic||i.code.add(u.H`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}const h=(0,n.c)(),f=(0,a.c)();var p=i(30786),m=i(24603);function v(e,t){const i=e.fragment;t.isGround?i.uniforms.add(new m.p("lightingFixedFactor",((e,t)=>(1-t.lighting.groundLightingFactor)*(1-t.lighting.globalFactor)))):i.constants.add("lightingFixedFactor","float",0),i.uniforms.add([new l.J("lightingMainDirection",((e,t)=>t.lighting.lightingMainDirection)),new l.J("lightingMainIntensity",((e,t)=>t.lighting.mainLight.intensity))]),i.code.add(u.H`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, lightingMainDirection), 0.0, 1.0);
dotVal = mix(dotVal, 1.0, lightingFixedFactor);
return lightingMainIntensity * ((1.0 - shadowing) * dotVal);
}`)}var g=i(74839),x=i(95509),_=i(91013),T=i(40017);class b extends _.x{constructor(e,t){super(e,"bool",T.P.Pass,((i,r,n)=>i.setUniform1b(e,t(r,n))))}}var A=i(75081);function S(e,t){const i=e.fragment;e.include(p.K,t),t.pbrMode!==s.f7.Disabled&&e.include(g.T,t),e.include(d,t),i.constants.add("ambientBoostFactor","float",A.V),e.include(x.e),i.code.add(u.H`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${t.pbrMode===s.f7.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),i.uniforms.add(new l.J("lightingMainDirection",((e,t)=>t.lighting.lightingMainDirection))),i.code.add(u.H`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${t.spherical?u.H`normalize(vPosWorld)`:u.H`vec3(0.0, 0.0, 1.0)`}, lightingMainDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),i.uniforms.add([new m.p("lightingGlobalFactor",((e,t)=>t.lighting.globalFactor)),new l.J("lightingMainIntensity",((e,t)=>t.lighting.mainLight.intensity))]),i.code.add(u.H`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * lightingMainIntensity;
}`),t.pbrMode===s.f7.Disabled||t.pbrMode===s.f7.WaterOnIntegratedMesh?(e.include(v,t),i.code.add(u.H`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`)):t.pbrMode!==s.f7.Normal&&t.pbrMode!==s.f7.Schematic||(i.code.add(u.H`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 mainLightDirection = lightingMainDirection;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),i.code.add(u.H`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),t.useFillLights?i.uniforms.add(new b("hasFillLights",((e,t)=>t.enableFillLights))):i.constants.add("hasFillLights","bool",!1),i.code.add(u.H`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0)? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * lightingMainIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * lightingMainIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),i.uniforms.add([new m.p("lightingSpecularStrength",((e,t)=>t.lighting.mainLight.specularStrength)),new m.p("lightingEnvironmentStrength",((e,t)=>t.lighting.mainLight.environmentStrength))]),i.code.add(u.H`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(inputs.NdotH, inputs.roughness) * lightingMainIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * lightingMainIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
inputs.skyRadianceToSurface = ambientLightRadianceComponent + mainLightRadianceComponent + horizonLightRadianceComponent;
inputs.groundRadianceToSurface = GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),i.code.add(u.H`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${t.pbrMode===s.f7.Schematic?u.H`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:u.H`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `))}},25996:function(e,t,i){i.d(t,{l:function(){return l}});var r=i(9794),n=i(23410);function o(e){e.include(r.n),e.code.add(n.H`float linearDepthFromFloat(float depth, vec2 nearFar) {
return -(depth * (nearFar[1] - nearFar[0]) + nearFar[0]);
}
float linearDepthFromTexture(sampler2D depthTex, vec2 uv, vec2 nearFar) {
return linearDepthFromFloat(rgba2float(texture2D(depthTex, uv)), nearFar);
}`)}var a=i(93072),s=i(15176);function l(e,t){t.hasMultipassTerrain&&(e.fragment.include(o),e.fragment.uniforms.add(new s.A("terrainDepthTexture",((e,t)=>t.multipassTerrain.linearDepthTexture))),e.fragment.uniforms.add(new a.A("nearFar",((e,t)=>t.camera.nearFar))),e.fragment.uniforms.add(new a.A("inverseViewport",((e,t)=>t.inverseViewport))),e.fragment.code.add(n.H`
    void terrainDepthTest(vec4 fragCoord, float fragmentDepth){
      float terrainDepth = linearDepthFromTexture(terrainDepthTexture, fragCoord.xy * inverseViewport, nearFar);
      if(fragmentDepth ${t.cullAboveGround?">":"<="} terrainDepth){
        discard;
      }
    }
  `))}},2833:function(e,t,i){i.d(t,{k:function(){return a},q:function(){return r}});var r,n=i(27755),o=i(23410);function a(e,t){const i=e.fragment;switch(i.code.add(o.H`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),t.doubleSidedMode){case r.None:i.code.add(o.H`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case r.View:i.code.add(o.H`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case r.WindingOrder:i.code.add(o.H`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:(0,n.Bg)(t.doubleSidedMode);case r.COUNT:}}!function(e){e[e.None=0]="None",e[e.View=1]="View",e[e.WindingOrder=2]="WindingOrder",e[e.COUNT=3]="COUNT"}(r||(r={}))},74839:function(e,t,i){i.d(t,{T:function(){return s}});var r=i(23410);function n(e){const t=e.fragment.code;t.add(r.H`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),t.add(r.H`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),t.add(r.H`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}var o=i(3864),a=i(95509);function s(e,t){const i=e.fragment.code;e.include(a.e),t.pbrMode===o.f7.Water||t.pbrMode===o.f7.WaterOnIntegratedMesh?(i.add(r.H`
    struct PBRShadingWater
    {
        float NdotL;   // cos angle between normal and light direction
        float NdotV;   // cos angle between normal and view direction
        float NdotH;   // cos angle between normal and half vector
        float VdotH;   // cos angle between view direction and half vector
        float LdotH;   // cos angle between light direction and half vector
        float VdotN;   // cos angle between view direction and normal vector
    };

    float dtrExponent = ${t.useCustomDTRExponentForWater?"2.2":"2.0"};
    `),i.add(r.H`vec3 fresnelReflection(float angle, vec3 f0, float f90) {
return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
}`),i.add(r.H`float normalDistributionWater(float NdotH, float roughness)
{
float r2 = roughness * roughness;
float NdotH2 = NdotH * NdotH;
float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
return r2 / denom;
}`),i.add(r.H`float geometricOcclusionKelemen(float LoH)
{
return 0.25 / (LoH * LoH);
}`),i.add(r.H`vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max)
{
vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
float dSun = normalDistributionWater(props.NdotH, roughness);
float V = geometricOcclusionKelemen(props.LdotH);
float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);
float strengthSunHaze  = 1.2;
float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze)*strengthSunHaze;
return ((dSun + dSunHaze) * V) * F;
}
vec3 tonemapACES(const vec3 x) {
return (x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14);
}`)):t.pbrMode!==o.f7.Normal&&t.pbrMode!==o.f7.Schematic||(e.include(n),i.add(r.H`struct PBRShadingInfo
{
float NdotL;
float NdotV;
float NdotH;
float VdotH;
float LdotH;
float NdotNG;
float RdotNG;
float NdotAmbDir;
float NdotH_Horizon;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
float averageAmbientRadiance;
float ssao;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`),i.add(r.H`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),i.add(r.H`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`),i.add(r.H`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),i.add(r.H`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),i.add(r.H`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`))}},3864:function(e,t,i){i.d(t,{f7:function(){return d},jV:function(){return h}});var r=i(79912),n=i(512),o=i(32006),a=i(43036),s=i(23410),l=i(54011),c=i(15176),u=i(40017);i(66865);(0,r.f)(0,.6,.2);var d;!function(e){e[e.Disabled=0]="Disabled",e[e.Normal=1]="Normal",e[e.Schematic=2]="Schematic",e[e.Water=3]="Water",e[e.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh",e[e.COUNT=5]="COUNT"}(d||(d={}));function h(e,t){const i=e.fragment,r=t.hasMetalnessAndRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture;if(t.pbrMode===d.Normal&&r&&e.include(n.i,t),t.pbrMode!==d.Schematic)if(t.pbrMode!==d.Disabled){if(t.pbrMode===d.Normal){i.code.add(s.H`vec3 mrr;
vec3 emission;
float occlusion;`);const e=t.supportsTextureAtlas,n=t.pbrTextureBindType;t.hasMetalnessAndRoughnessTexture&&(i.uniforms.add(n===u.P.Pass?(0,c.J)("texMetallicRoughness",(e=>e.textureMetallicRoughness),e):(0,l.F)("texMetallicRoughness",(e=>e.textureMetallicRoughness),e)),i.code.add(s.H`void applyMetallnessAndRoughness(TextureLookupParameter params) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, params).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),t.hasEmissionTexture&&(i.uniforms.add(n===u.P.Pass?(0,c.J)("texEmission",(e=>e.textureEmissive),e):(0,l.F)("texEmission",(e=>e.textureEmissive),e)),i.code.add(s.H`void applyEmission(TextureLookupParameter params) {
emission *= textureLookup(texEmission, params).rgb;
}`)),t.hasOcclusionTexture?(i.uniforms.add(n===u.P.Pass?(0,c.J)("texOcclusion",(e=>e.textureOcclusion),e):(0,l.F)("texOcclusion",(e=>e.textureOcclusion),e)),i.code.add(s.H`void applyOcclusion(TextureLookupParameter params) {
occlusion *= textureLookup(texOcclusion, params).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):i.code.add(s.H`float getBakedOcclusion() { return 1.0; }`),i.uniforms.add(n===u.P.Pass?[new a.J("emissionFactor",(e=>e.emissiveFactor)),new a.J("mrrFactors",(e=>e.mrrFactors))]:[new o.B("emissionFactor",(e=>e.emissiveFactor)),new o.B("mrrFactors",(e=>e.mrrFactors))]),i.code.add(s.H`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;
      ${r?"vtc.uv = vuv0;":""}
      ${t.hasMetalnessAndRoughnessTexture?t.supportsTextureAtlas?"vtc.size = texMetallicRoughnessSize; applyMetallnessAndRoughness(vtc);":"applyMetallnessAndRoughness(vtc);":""}
      ${t.hasEmissionTexture?t.supportsTextureAtlas?"vtc.size = texEmissionSize; applyEmission(vtc);":"applyEmission(vtc);":""}
      ${t.hasOcclusionTexture?t.supportsTextureAtlas?"vtc.size = texOcclusionSize; applyOcclusion(vtc);":"applyOcclusion(vtc);":""}
    }
  `)}}else i.code.add(s.H`float getBakedOcclusion() { return 1.0; }`);else i.code.add(s.H`vec3 mrr = vec3(0.0, 0.6, 0.2);
vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`)}},95509:function(e,t,i){i.d(t,{e:function(){return n}});var r=i(23410);function n(e){e.vertex.code.add(r.H`const float PI = 3.141592653589793;`),e.fragment.code.add(r.H`const float PI = 3.141592653589793;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.3183098861837907;
const float HALF_PI = 1.570796326794897;`)}},50349:function(e,t,i){i.d(t,{XE:function(){return f},hb:function(){return h}});i(8909);var r=i(9794),n=i(63371),o=i(24603),a=i(59842),s=i(23410),l=i(91013),c=i(40017);class u extends l.x{constructor(e,t,i,r){switch(t){case c.P.Pass:return void super(e,"mat4",t,((t,r,n)=>t.setUniformMatrix4fv(e,i(r,n))),r);case c.P.Draw:return void super(e,"mat4",t,((t,r,n)=>t.setUniformMatrix4fv(e,i(r,n))),r)}}}var d=i(15176);function h(e,t){t.receiveShadows&&(e.fragment.uniforms.add(new u("shadowMapMatrix",c.P.Pass,((e,t)=>t.shadowMap.getShadowMapMatrices(e.origin)),4)),p(e))}function f(e,t){t.receiveShadows&&(e.fragment.uniforms.add(new u("shadowMapMatrix",c.P.Draw,((e,t)=>t.shadowMap.getShadowMapMatrices(e.origin)),4)),p(e))}function p(e){const t=e.fragment;t.include(r.n),t.uniforms.add([new d.A("shadowMapTex",((e,t)=>t.shadowMap.depthTexture)),new a._("numCascades",((e,t)=>t.shadowMap.numCascades)),new n.N("cascadeDistances",((e,t)=>t.shadowMap.cascadeDistances)),new o.p("depthHalfPixelSz",((e,t)=>.5/t.shadowMap.textureSize))]),t.code.add(s.H`int chooseCascade(float depth, out mat4 mat) {
vec4 distance = cascadeDistances;
int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;
mat = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];
return i;
}
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, vec3 lvpos) {
return vec2(float(i - 2 * (i / 2)) * 0.5, float(i / 2) * 0.5) + 0.5 * lvpos.xy;
}
float readShadowMapDepth(vec2 uv, sampler2D _depthTex) {
return rgba2float(texture2D(_depthTex, uv));
}
float posIsInShadow(vec2 uv, vec3 lvpos, sampler2D _depthTex) {
return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
}
float filterShadow(vec2 uv, vec3 lvpos, float halfPixelSize, sampler2D _depthTex) {
float texSize = 0.5 / halfPixelSize;
vec2 st = fract((vec2(halfPixelSize) + uv) * texSize);
float s00 = posIsInShadow(uv + vec2(-halfPixelSize, -halfPixelSize), lvpos, _depthTex);
float s10 = posIsInShadow(uv + vec2(halfPixelSize, -halfPixelSize), lvpos, _depthTex);
float s11 = posIsInShadow(uv + vec2(halfPixelSize, halfPixelSize), lvpos, _depthTex);
float s01 = posIsInShadow(uv + vec2(-halfPixelSize, halfPixelSize), lvpos, _depthTex);
return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
}
float readShadowMap(const in vec3 _vpos, float _linearDepth) {
mat4 mat;
int i = chooseCascade(_linearDepth, mat);
if (i >= numCascades) { return 0.0; }
vec3 lvpos = lightSpacePosition(_vpos, mat);
if (lvpos.z >= 1.0) { return 0.0; }
if (lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }
vec2 uv = cascadeCoordinates(i, lvpos);
return filterShadow(uv, lvpos, depthHalfPixelSz, shadowMapTex);
}`)}},27641:function(e,t,i){i.d(t,{k:function(){return h}});var r=i(43036),n=i(91013),o=i(40017);class a extends n.x{constructor(e,t,i){super(e,"vec4",o.P.Pass,((i,r,n)=>i.setUniform4fv(e,t(r,n))),i)}}class s extends n.x{constructor(e,t,i){super(e,"float",o.P.Pass,((i,r,n)=>i.setUniform1fv(e,t(r,n))),i)}}var l=i(23410),c=i(11125),u=i(21414);i(34344),i(8909),i(7358);const d=8;function h(e,t){t.hasVvInstancing&&(t.vvSize||t.vvColor)&&e.attributes.add(u.T.INSTANCEFEATUREATTRIBUTE,"vec4");const i=e.vertex;t.vvSize?(i.uniforms.add(new r.J("vvSizeMinSize",(e=>e.vvSizeMinSize))),i.uniforms.add(new r.J("vvSizeMaxSize",(e=>e.vvSizeMaxSize))),i.uniforms.add(new r.J("vvSizeOffset",(e=>e.vvSizeOffset))),i.uniforms.add(new r.J("vvSizeFactor",(e=>e.vvSizeFactor))),i.uniforms.add(new c.c("vvSymbolRotationMatrix",(e=>e.vvSymbolRotationMatrix))),i.uniforms.add(new r.J("vvSymbolAnchor",(e=>e.vvSymbolAnchor))),i.code.add(l.H`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),i.code.add(l.H`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${t.hasVvInstancing?l.H`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):i.code.add(l.H`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),t.vvColor?(i.constants.add("vvColorNumber","int",d),t.hasVvInstancing&&i.uniforms.add([new s("vvColorValues",(e=>e.vvColorValues),d),new a("vvColorColors",(e=>e.vvColorColors),d)]),i.code.add(l.H`
      vec4 vvGetColor(vec4 featureAttribute, float values[vvColorNumber], vec4 colors[vvColorNumber]) {
        float value = featureAttribute.y;
        if (value <= values[0]) {
          return colors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (values[i] >= value) {
            float f = (value - values[i-1]) / (values[i] - values[i-1]);
            return mix(colors[i-1], colors[i], f);
          }
        }
        return colors[vvColorNumber - 1];
      }

      ${t.hasVvInstancing?l.H`
      vec4 vvColor() {
        return vvGetColor(instanceFeatureAttribute, vvColorValues, vvColorColors);
      }`:""}
    `)):i.code.add(l.H`vec4 vvColor() { return vec4(1.0); }`)}},44391:function(e,t,i){i.d(t,{F:function(){return r},b:function(){return n}});const r=.1,n=.001},41330:function(e,t,i){i.d(t,{z:function(){return l}});var r=i(44391),n=i(23410);function o(e){e.fragment.code.add(n.H`
    #define discardOrAdjustAlpha(color) { if (color.a < ${n.H.float(r.b)}) { discard; } }
  `)}i(91013),i(40017);var a=i(24603),s=i(70984);function l(e,t){c(e,t,new a.p("textureAlphaCutoff",(e=>e.textureAlphaCutoff)))}function c(e,t,i){const r=e.fragment;switch(t.alphaDiscardMode!==s.JJ.Mask&&t.alphaDiscardMode!==s.JJ.MaskBlend||r.uniforms.add(i),t.alphaDiscardMode){case s.JJ.Blend:return e.include(o);case s.JJ.Opaque:r.code.add(n.H`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case s.JJ.Mask:r.code.add(n.H`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case s.JJ.MaskBlend:e.fragment.code.add(n.H`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}},5331:function(e,t,i){i.d(t,{$:function(){return o},I:function(){return a}});var r=i(39994),n=i(23410);function o({code:e},t){t.doublePrecisionRequiresObfuscation?e.add(n.H`vec3 dpPlusFrc(vec3 a, vec3 b) {
return mix(a, a + b, vec3(notEqual(b, vec3(0))));
}
vec3 dpMinusFrc(vec3 a, vec3 b) {
return mix(vec3(0), a - b, vec3(notEqual(a, b)));
}
vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = dpPlusFrc(hiA, hiB);
vec3 e = dpMinusFrc(t1, hiA);
vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
return t1 + t2;
}`):e.add(n.H`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}function a(e){return!!(0,r.Z)("force-double-precision-obfuscation")||e.driverTest.doublePrecisionRequiresObfuscation}},78115:function(e,t,i){i.d(t,{a:function(){return a}});var r=i(25714),n=i(23410),o=i(6174);function a(e,t){const i=n.H`
  /*
  *  ${t.name}
  *  ${t.output===r.H.Color?"RenderOutput: Color":t.output===r.H.Depth?"RenderOutput: Depth":t.output===r.H.Shadow?"RenderOutput: Shadow":t.output===r.H.Normal?"RenderOutput: Normal":t.output===r.H.Highlight?"RenderOutput: Highlight":""}
  */
  `;(0,o.CG)()&&(e.fragment.code.add(i),e.vertex.code.add(i))}},42727:function(e,t,i){i.d(t,{y:function(){return a}});var r=i(66352),n=i(23410);function o(e){e.code.add(n.H`vec4 premultiplyAlpha(vec4 v) {
return vec4(v.rgb * v.a, v.a);
}
vec3 rgb2hsv(vec3 c) {
vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);
float d = q.x - min(q.w, q.y);
float e = 1.0e-10;
return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
}
vec3 hsv2rgb(vec3 c) {
vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
float rgb2v(vec3 c) {
return max(c.x, max(c.y, c.z));
}`)}function a(e){e.include(o),e.code.add(n.H`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${n.H.int(r.a9.Multiply)}) {
        return allMixed;
      }
      if (mode == ${n.H.int(r.a9.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${n.H.int(r.a9.Replace)}) {
        return externalColor;
      }

      // tint (or something invalid)
      float vIn = rgb2v(internalMixed);
      vec3 hsvTint = rgb2hsv(externalColor);
      vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
      return hsv2rgb(hsvOut);
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${n.H.int(r.a9.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${n.H.int(r.a9.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `)}},9794:function(e,t,i){i.d(t,{n:function(){return n}});var r=i(23410);function n(e){e.code.add(r.H`const float MAX_RGBA_FLOAT =
255.0 / 256.0 +
255.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 / 256.0;
const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);
vec4 float2rgba(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);
vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);
const float toU8AsFloat = 1.0 / 255.0;
return fixedPointU8 * toU8AsFloat;
}
const vec4 RGBA_2_FLOAT_FACTORS = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, RGBA_2_FLOAT_FACTORS);
}`)}},5614:function(e,t,i){i.d(t,{h:function(){return f},S:function(){return p}});var r=i(24455),n=i(64790),o=i(6766),a=i(8909),s=i(32006),l=i(43036),c=i(91013),u=i(40017);class d extends c.x{constructor(e,t){super(e,"mat4",u.P.Draw,((i,r,n)=>i.setUniformMatrix4fv(e,t(r,n))))}}var h=i(87621);function f(e,t){t.instancedDoublePrecision?e.constants.add("cameraPosition","vec3",a.Z):e.uniforms.add(new s.B("cameraPosition",((e,t)=>(0,o.s)(v,t.camera.viewInverseTransposeMatrix[3]-e.origin[0],t.camera.viewInverseTransposeMatrix[7]-e.origin[1],t.camera.viewInverseTransposeMatrix[11]-e.origin[2]))))}function p(e,t){if(e.vertex.uniforms.add(new h.g("proj",((e,t)=>t.camera.projectionMatrix))),t.instancedDoublePrecision){const t=(e,t)=>(0,o.s)(v,t.camera.viewInverseTransposeMatrix[3],t.camera.viewInverseTransposeMatrix[7],t.camera.viewInverseTransposeMatrix[11]);e.vertex.uniforms.add(new h.g("view",((e,i)=>(0,r.j)(m,i.camera.viewMatrix,t(e,i)))));const i=new l.J("localOrigin",t);return e.vertex.uniforms.add(i),i}e.vertex.uniforms.add(new d("view",((e,t)=>(0,r.j)(m,t.camera.viewMatrix,e.origin))));const i=new s.B("localOrigin",(e=>e.origin));return e.vertex.uniforms.add(i),i}const m=(0,n.c)(),v=(0,a.c)()},93072:function(e,t,i){i.d(t,{A:function(){return o}});var r=i(91013),n=i(40017);class o extends r.x{constructor(e,t){super(e,"vec2",n.P.Pass,((i,r,n)=>i.setUniform2fv(e,t(r,n))))}}},32006:function(e,t,i){i.d(t,{B:function(){return o}});var r=i(91013),n=i(40017);class o extends r.x{constructor(e,t){super(e,"vec3",n.P.Draw,((i,r,n)=>i.setUniform3fv(e,t(r,n))))}}},43036:function(e,t,i){i.d(t,{J:function(){return o}});var r=i(91013),n=i(40017);class o extends r.x{constructor(e,t){super(e,"vec3",n.P.Pass,((i,r,n)=>i.setUniform3fv(e,t(r,n))))}}},63371:function(e,t,i){i.d(t,{N:function(){return o}});var r=i(91013),n=i(40017);class o extends r.x{constructor(e,t){super(e,"vec4",n.P.Pass,((i,r,n)=>i.setUniform4fv(e,t(r,n))))}}},24603:function(e,t,i){i.d(t,{p:function(){return o}});var r=i(91013),n=i(40017);class o extends r.x{constructor(e,t){super(e,"float",n.P.Pass,((i,r,n)=>i.setUniform1f(e,t(r,n))))}}},59842:function(e,t,i){i.d(t,{_:function(){return o}});var r=i(91013),n=i(40017);class o extends r.x{constructor(e,t){super(e,"int",n.P.Pass,((i,r,n)=>i.setUniform1i(e,t(r,n))))}}},55784:function(e,t,i){i.d(t,{j:function(){return o}});var r=i(91013),n=i(40017);class o extends r.x{constructor(e,t){super(e,"mat3",n.P.Draw,((i,r,n)=>i.setUniformMatrix3fv(e,t(r,n))))}}},11125:function(e,t,i){i.d(t,{c:function(){return o}});var r=i(91013),n=i(40017);class o extends r.x{constructor(e,t){super(e,"mat3",n.P.Pass,((i,r,n)=>i.setUniformMatrix3fv(e,t(r,n))))}}},87621:function(e,t,i){i.d(t,{g:function(){return o}});var r=i(91013),n=i(40017);class o extends r.x{constructor(e,t){super(e,"mat4",n.P.Pass,((i,r,n)=>i.setUniformMatrix4fv(e,t(r,n))))}}},67948:function(e,t,i){i.d(t,{B:function(){return n}});var r=i(91013);class n extends r.x{constructor(e){super(e,"mat4")}}},3961:function(e,t,i){i.d(t,{kG:function(){return l}});var r=i(70375),n=i(13802),o=i(61681);const a=n.Z.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");class s{constructor(){this.includedModules=new Map}include(e,t){if(this.includedModules.has(e)){const i=this.includedModules.get(e);if(i!==t){a.error("Trying to include shader module multiple times with different sets of options.");const t=new Set;for(const r of Object.keys(i))i[r]!==e[r]&&t.add(r);for(const r of Object.keys(e))i[r]!==e[r]&&t.add(r);t.forEach((t=>console.error(`  ${t}: current ${i[t]} new ${e[t]}`)))}}else this.includedModules.set(e,t),e(this.builder,t)}}class l extends s{constructor(){super(...arguments),this.vertex=new d,this.fragment=new d,this.attributes=new h,this.varyings=new f,this.extensions=new p,this.constants=new m}get fragmentUniforms(){return this.fragment.uniforms.entries}get builder(){return this}generate(e){const t=this.extensions.generateSource(e),i=this.attributes.generateSource(e),r=this.varyings.generateSource(),n="vertex"===e?this.vertex:this.fragment,o=n.uniforms.generateSource(),a=n.code.generateSource(),s="vertex"===e?g:v,l=this.constants.generateSource().concat(n.constants.generateSource());return`\n${t.join("\n")}\n\n${s}\n\n${l.join("\n")}\n\n${o.join("\n")}\n\n${i.join("\n")}\n\n${r.join("\n")}\n\n${a.join("\n")}`}generateBind(e,t){const i=new Map;this.vertex.uniforms.entries.forEach((t=>{const r=t.bind[e];(0,o.pC)(r)&&i.set(t.name,r)})),this.fragment.uniforms.entries.forEach((t=>{const r=t.bind[e];(0,o.pC)(r)&&i.set(t.name,r)}));const r=Array.from(i.values()),n=r.length;return(e,i)=>{for(let o=0;o<n;++o)r[o](t,e,i)}}}class c{constructor(){this._entries=new Map}add(e){if(!Array.isArray(e))return this._add(e);for(const t of e)this._add(t)}_add(e){if(this._entries.has(e.name)&&!this._entries.get(e.name).equals(e))throw new r.Z(`Duplicate uniform name ${e.name} for different uniform type`);this._entries.set(e.name,e)}generateSource(){return Array.from(this._entries.values()).map((e=>(0,o.pC)(e.arraySize)?`uniform ${e.type} ${e.name}[${e.arraySize}];`:`uniform ${e.type} ${e.name};`))}get entries(){return Array.from(this._entries.values())}}class u{constructor(){this._entries=new Array}add(e){this._entries.push(e)}generateSource(){return this._entries}}class d extends s{constructor(){super(...arguments),this.uniforms=new c,this.code=new u,this.constants=new m}get builder(){return this}}class h{constructor(){this._entries=new Array}add(e,t){this._entries.push([e,t])}generateSource(e){return"fragment"===e?[]:this._entries.map((e=>`attribute ${e[1]} ${e[0]};`))}}class f{constructor(){this._entries=new Array}add(e,t){this._entries.push([e,t])}generateSource(){return this._entries.map((e=>`varying ${e[1]} ${e[0]};`))}}class p{constructor(){this._entries=new Set}add(e){this._entries.add(e)}generateSource(e){const t="vertex"===e?p.ALLOWLIST_VERTEX:p.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter((e=>t.includes(e))).map((e=>`#extension ${e} : enable`))}}p.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],p.ALLOWLIST_VERTEX=[];class m{constructor(){this._entries=new Set}add(e,t,i){let r="ERROR_CONSTRUCTOR_STRING";switch(t){case"float":r=m._numberToFloatStr(i);break;case"int":r=m._numberToIntStr(i);break;case"bool":r=i.toString();break;case"vec2":r=`vec2(${m._numberToFloatStr(i[0])},                            ${m._numberToFloatStr(i[1])})`;break;case"vec3":r=`vec3(${m._numberToFloatStr(i[0])},                            ${m._numberToFloatStr(i[1])},                            ${m._numberToFloatStr(i[2])})`;break;case"vec4":r=`vec4(${m._numberToFloatStr(i[0])},                            ${m._numberToFloatStr(i[1])},                            ${m._numberToFloatStr(i[2])},                            ${m._numberToFloatStr(i[3])})`;break;case"ivec2":r=`ivec2(${m._numberToIntStr(i[0])},                             ${m._numberToIntStr(i[1])})`;break;case"ivec3":r=`ivec3(${m._numberToIntStr(i[0])},                             ${m._numberToIntStr(i[1])},                             ${m._numberToIntStr(i[2])})`;break;case"ivec4":r=`ivec4(${m._numberToIntStr(i[0])},                             ${m._numberToIntStr(i[1])},                             ${m._numberToIntStr(i[2])},                             ${m._numberToIntStr(i[3])})`;break;case"mat2":case"mat3":case"mat4":r=`${t}(${Array.prototype.map.call(i,(e=>m._numberToFloatStr(e))).join(", ")})`}return this._entries.add(`const ${t} ${e} = ${r};`),this}static _numberToIntStr(e){return e.toFixed(0)}static _numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}}const v="#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  precision highp sampler2D;\n#else\n  precision mediump float;\n  precision mediump sampler2D;\n#endif",g="precision highp float;\nprecision highp sampler2D;"},54011:function(e,t,i){i.d(t,{F:function(){return u}});var r=i(61681),n=i(55709),o=i(69666),a=i(91013),s=i(40017);class l extends a.x{constructor(e,t){super(e,"vec2",s.P.Draw,((i,r,n)=>i.setUniform2fv(e,t(r,n))))}}class c extends a.x{constructor(e,t){super(e,"sampler2D",s.P.Draw,((i,r,n)=>i.bindTexture(e,t(r,n))))}}function u(e,t,i){const a=[new c(e,t)];if(i){const i=e+"Size";a.push(new l(i,((e,i)=>{const a=t(e,i);return(0,r.pC)(a)?(0,n.a)(d,a.descriptor.width,a.descriptor.height):o.Z})))}return a}const d=(0,o.a)()},15176:function(e,t,i){i.d(t,{A:function(){return c},J:function(){return u}});var r=i(61681),n=i(55709),o=i(69666),a=i(93072),s=i(91013),l=i(40017);class c extends s.x{constructor(e,t){super(e,"sampler2D",l.P.Pass,((i,r,n)=>i.bindTexture(e,t(r,n))))}}function u(e,t,i){const s=[new c(e,t)];if(i){const i=e+"Size";s.push(new a.A(i,((e,i)=>{const a=t(e,i);return(0,r.pC)(a)?(0,n.a)(d,a.descriptor.width,a.descriptor.height):o.Z})))}return s}const d=(0,o.a)()},91013:function(e,t,i){i.d(t,{x:function(){return o}});var r=i(61681),n=i(40017);class o{constructor(e,t,i,o,a=null){this.name=e,this.type=t,this.arraySize=a,this.bind={[n.P.Pass]:null,[n.P.Draw]:null},(0,r.pC)(i)&&(0,r.pC)(o)&&(this.bind[i]=o)}equals(e){return this.type===e.type&&this.name===e.name&&this.arraySize===e.arraySize}}},23410:function(e,t,i){i.d(t,{H:function(){return n},K:function(){return r}});class r{}function n(e,...t){let i="";for(let r=0;r<t.length;r++)i+=e[r]+t[r];return i+=e[e.length-1],i}!function(e){function t(e){return Math.round(e).toString()}function i(e){return e.toPrecision(8)}e.int=t,e.float=i}(n||(n={}))},40017:function(e,t,i){var r;i.d(t,{P:function(){return r}}),function(e){e[e.Pass=0]="Pass",e[e.Draw=1]="Draw"}(r||(r={}))},10107:function(e,t,i){i.d(t,{c:function(){return n}});var r=i(7958);class n{constructor(){this.id=(0,r.D)()}unload(){}}},95399:function(e,t,i){var r;i.d(t,{U:function(){return r}}),function(e){e[e.Layer=0]="Layer",e[e.Object=1]="Object",e[e.Geometry=2]="Geometry",e[e.Material=3]="Material",e[e.Texture=4]="Texture",e[e.COUNT=5]="COUNT"}(r||(r={}))},5474:function(e,t,i){i.d(t,{i:function(){return n}});var r=i(21414);const n=new Map([[r.T.POSITION,0],[r.T.NORMAL,1],[r.T.UV0,2],[r.T.COLOR,3],[r.T.SIZE,4],[r.T.TANGENT,4],[r.T.AUXPOS1,5],[r.T.SYMBOLCOLOR,5],[r.T.AUXPOS2,6],[r.T.FEATUREATTRIBUTE,6],[r.T.INSTANCEFEATUREATTRIBUTE,6],[r.T.INSTANCECOLOR,7],[r.T.MODEL,8],[r.T.MODELNORMAL,12],[r.T.MODELORIGINHI,11],[r.T.MODELORIGINLO,15]])},66865:function(e,t,i){i.d(t,{F:function(){return l}});var r=i(61681),n=i(78668),o=i(23410),a=i(70984);class s{constructor(e){this._material=e.material,this._techniqueRepository=e.techniqueRep,this._output=e.output}dispose(){this._techniqueRepository.release(this._technique)}get technique(){return this._technique}ensureTechnique(e,t,i=this._output){return this._technique=this._techniqueRepository.releaseAndAcquire(e,this._material.getConfiguration(i,t),this._technique),this._technique}ensureResources(e){return a.Rw.LOADED}}class l extends s{constructor(e){super(e),this._numLoading=0,this._disposed=!1,this._textureRepository=e.textureRep,this._textureId=e.textureId,this._acquire(e.textureId,(e=>this._texture=e)),this._acquire(e.normalTextureId,(e=>this._textureNormal=e)),this._acquire(e.emissiveTextureId,(e=>this._textureEmissive=e)),this._acquire(e.occlusionTextureId,(e=>this._textureOcclusion=e)),this._acquire(e.metallicRoughnessTextureId,(e=>this._textureMetallicRoughness=e))}dispose(){this._texture=(0,r.RY)(this._texture),this._textureNormal=(0,r.RY)(this._textureNormal),this._textureEmissive=(0,r.RY)(this._textureEmissive),this._textureOcclusion=(0,r.RY)(this._textureOcclusion),this._textureMetallicRoughness=(0,r.RY)(this._textureMetallicRoughness),this._disposed=!0}ensureResources(e){return 0===this._numLoading?a.Rw.LOADED:a.Rw.LOADING}get textureBindParameters(){return new c((0,r.pC)(this._texture)?this._texture.glTexture:null,(0,r.pC)(this._textureNormal)?this._textureNormal.glTexture:null,(0,r.pC)(this._textureEmissive)?this._textureEmissive.glTexture:null,(0,r.pC)(this._textureOcclusion)?this._textureOcclusion.glTexture:null,(0,r.pC)(this._textureMetallicRoughness)?this._textureMetallicRoughness.glTexture:null)}updateTexture(e){((0,r.Wi)(this._texture)||e!==this._texture.id)&&(this._texture=(0,r.RY)(this._texture),this._textureId=e,this._acquire(this._textureId,(e=>this._texture=e)))}_acquire(e,t){if((0,r.Wi)(e))return void t(null);const i=this._textureRepository.acquire(e);if((0,n.y8)(i))return++this._numLoading,void i.then((e=>{if(this._disposed)return(0,r.RY)(e),void t(null);t(e)})).finally((()=>--this._numLoading));t(i)}}class c extends o.K{constructor(e=null,t=null,i=null,r=null,n=null){super(),this.texture=e,this.textureNormal=t,this.textureEmissive=i,this.textureOcclusion=r,this.textureMetallicRoughness=n}}},7358:function(e,t,i){i.d(t,{F5:function(){return c},yD:function(){return r}});var r,n=i(61681),o=(i(23410),i(10107)),a=i(95399),s=i(5474),l=i(16318);class c extends o.c{constructor(e,t){super(),this.type=a.U.Material,this.supportsEdges=!1,this._visible=!0,this._renderPriority=0,this._insertOrder=0,this._vertexAttributeLocations=s.i,this._parameters=(0,l.Uf)(e,t),this.validateParameters(this._parameters)}dispose(){}get parameters(){return this._parameters}update(e){return!1}setParameters(e,t=!0){(0,l.LO)(this._parameters,e)&&(this.validateParameters(this._parameters),t&&this.parametersChanged())}validateParameters(e){}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this.parametersChanged())}shouldRender(e){return this.isVisible()&&this.isVisibleInPass(e.pass)&&0!=(this.renderOccluded&e.renderOccludedMask)}isVisibleInPass(e){return!0}get renderOccluded(){return this.parameters.renderOccluded}get renderPriority(){return this._renderPriority}set renderPriority(e){e!==this._renderPriority&&(this._renderPriority=e,this.parametersChanged())}get insertOrder(){return this._insertOrder}set insertOrder(e){e!==this._insertOrder&&(this._insertOrder=e,this.parametersChanged())}get vertexAttributeLocations(){return this._vertexAttributeLocations}isVisible(){return this._visible}parametersChanged(){(0,n.pC)(this.repository)&&this.repository.materialChanged(this)}}!function(e){e[e.Occlude=1]="Occlude",e[e.Transparent=2]="Transparent",e[e.OccludeAndTransparent=4]="OccludeAndTransparent",e[e.OccludeAndTransparentStencil=8]="OccludeAndTransparentStencil",e[e.Opaque=16]="Opaque"}(r||(r={}))},12045:function(e,t,i){i.d(t,{Bh:function(){return f},IB:function(){return l},j7:function(){return c},je:function(){return h},ve:function(){return u},wu:function(){return a}});var r=i(70984),n=i(91907),o=i(17346);const a=(0,o.wK)(n.zi.SRC_ALPHA,n.zi.ONE,n.zi.ONE_MINUS_SRC_ALPHA,n.zi.ONE_MINUS_SRC_ALPHA),s=(0,o["if"])(n.zi.ONE,n.zi.ONE),l=(0,o["if"])(n.zi.ZERO,n.zi.ONE_MINUS_SRC_ALPHA);function c(e){return e===r.Am.FrontFace?null:e===r.Am.Alpha?l:s}const u=5e5,d={factor:-1,units:-2};function h(e){return e?d:null}function f(e,t=n.wb.LESS){return e===r.Am.NONE||e===r.Am.FrontFace?t:n.wb.LEQUAL}},15095:function(e,t,i){i.d(t,{hu:function(){return o},yK:function(){return a}});i(69666),i(88589);var r=i(1983);(0,r.c)();class n{constructor(e){this.message=e}toString(){return`AssertException: ${this.message}`}}function o(e,t){if(!e)throw t=t||"assert",console.log(new Error(t).stack),new n(t)}function a(e,t,i,r){let n,o=(i[0]-e[0])/t[0],a=(r[0]-e[0])/t[0];o>a&&(n=o,o=a,a=n);let s=(i[1]-e[1])/t[1],l=(r[1]-e[1])/t[1];if(s>l&&(n=s,s=l,l=n),o>l||s>a)return!1;s>o&&(o=s),l<a&&(a=l);let c=(i[2]-e[2])/t[2],u=(r[2]-e[2])/t[2];return c>u&&(n=c,c=u,u=n),!(o>u||c>a)&&(u<a&&(a=u),!(a<0))}},21414:function(e,t,i){var r;i.d(t,{T:function(){return r}}),function(e){e.POSITION="position",e.NORMAL="normal",e.UV0="uv0",e.AUXPOS1="auxpos1",e.AUXPOS2="auxpos2",e.MAPPOS="mapPos",e.COLOR="color",e.SYMBOLCOLOR="symbolColor",e.SIZE="size",e.TANGENT="tangent",e.OFFSET="offset",e.SUBDIVISIONFACTOR="subdivisionFactor",e.COLORFEATUREATTRIBUTE="colorFeatureAttribute",e.SIZEFEATUREATTRIBUTE="sizeFeatureAttribute",e.OPACITYFEATUREATTRIBUTE="opacityFeatureAttribute",e.DISTANCETOSTART="distanceToStart",e.UVMAPSPACE="uvMapSpace",e.BOUNDINGRECT="boundingRect",e.UVREGION="uvRegion",e.NORMALCOMPRESSED="normalCompressed",e.PROFILERIGHT="profileRight",e.PROFILEUP="profileUp",e.PROFILEVERTEXANDNORMAL="profileVertexAndNormal",e.FEATUREVALUE="featureValue",e.MODELORIGINHI="modelOriginHi",e.MODELORIGINLO="modelOriginLo",e.MODEL="model",e.MODELNORMAL="modelNormal",e.INSTANCECOLOR="instanceColor",e.INSTANCEFEATUREATTRIBUTE="instanceFeatureAttribute",e.LOCALTRANSFORM="localTransform",e.GLOBALTRANSFORM="globalTransform",e.BOUNDINGSPHERE="boundingSphere",e.MODELORIGIN="modelOrigin",e.MODELSCALEFACTORS="modelScaleFactors",e.FEATUREATTRIBUTE="featureAttribute",e.STATE="state",e.LODLEVEL="lodLevel",e.POSITION0="position0",e.POSITION1="position1",e.NORMALA="normalA",e.NORMALB="normalB",e.COMPONENTINDEX="componentIndex",e.VARIANTOFFSET="variantOffset",e.VARIANTSTROKE="variantStroke",e.VARIANTEXTENSION="variantExtension",e.U8PADDING="u8padding",e.U16PADDING="u16padding",e.SIDENESS="sideness",e.START="start",e.END="end",e.UP="up",e.EXTRUDE="extrude"}(r||(r={}))},70984:function(e,t,i){var r,n,o,a,s,l,c,u,d,h,f,p,m,v;i.d(t,{Am:function(){return a},CE:function(){return f},Gv:function(){return n},JJ:function(){return m},MX:function(){return h},Rw:function(){return l},Vr:function(){return r},hU:function(){return c}}),function(e){e[e.None=0]="None",e[e.Front=1]="Front",e[e.Back=2]="Back",e[e.COUNT=3]="COUNT"}(r||(r={})),function(e){e[e.Less=0]="Less",e[e.Lequal=1]="Lequal",e[e.COUNT=2]="COUNT"}(n||(n={})),function(e){e[e.NONE=0]="NONE",e[e.SMAA=1]="SMAA"}(o||(o={})),function(e){e[e.Color=0]="Color",e[e.Alpha=1]="Alpha",e[e.FrontFace=2]="FrontFace",e[e.NONE=3]="NONE",e[e.COUNT=4]="COUNT"}(a||(a={})),function(e){e[e.BACKGROUND=0]="BACKGROUND",e[e.UPDATE=1]="UPDATE"}(s||(s={})),function(e){e[e.NOT_LOADED=0]="NOT_LOADED",e[e.LOADING=1]="LOADING",e[e.LOADED=2]="LOADED"}(l||(l={})),function(e){e[e.IntegratedMeshMaskExcluded=1]="IntegratedMeshMaskExcluded",e[e.OutlineVisualElementMask=2]="OutlineVisualElementMask"}(c||(c={})),function(e){e[e.ASYNC=0]="ASYNC",e[e.SYNC=1]="SYNC"}(u||(u={})),function(e){e[e.Highlight=0]="Highlight",e[e.MaskOccludee=1]="MaskOccludee",e[e.COUNT=2]="COUNT"}(d||(d={})),function(e){e[e.Triangle=0]="Triangle",e[e.Point=1]="Point",e[e.Line=2]="Line"}(h||(h={})),function(e){e[e.STRETCH=1]="STRETCH",e[e.PAD=2]="PAD"}(f||(f={})),function(e){e[e.CHANGED=0]="CHANGED",e[e.UNCHANGED=1]="UNCHANGED"}(p||(p={})),function(e){e[e.Blend=0]="Blend",e[e.Opaque=1]="Opaque",e[e.Mask=2]="Mask",e[e.MaskBlend=3]="MaskBlend",e[e.COUNT=4]="COUNT"}(m||(m={})),function(e){e[e.OFF=0]="OFF",e[e.ON=1]="ON"}(v||(v={}))},75081:function(e,t,i){i.d(t,{V:function(){return n}});i(6766);var r=i(8909);i(19431);(0,r.c)();const n=.4;(0,r.c)()},16318:function(e,t,i){i.d(t,{FZ:function(){return F},Uf:function(){return L},Bw:function(){return b},LO:function(){return H},Hx:function(){return N}});var r=i(7753),n=i(19431),o=i(61681),a=i(6766),s=i(8909),l=i(37116),c=i(70984);i(65684);function u(e){return Math.abs(e*e*e)}function d(e,t,i){const r=i.parameters,n=i.paddingPixelsOverride;return m.scale=Math.min(r.divisor/(t-r.offset),1),m.factor=u(e),m.minPixelSize=r.minPixelSize,m.paddingPixels=n,m}function h(e,t){return 0===e?t.minPixelSize:t.minPixelSize*(1+2*t.paddingPixels/e)}function f(e,t){return Math.max((0,n.t7)(e*t.scale,e,t.factor),h(e,t))}function p(e,t,i,r){return f(e,d(t,i,r))}(0,n.Vl)(10),(0,n.Vl)(12),(0,n.Vl)(70),(0,n.Vl)(40);const m={scale:0,factor:0,minPixelSize:0,paddingPixels:0};var v=i(15095),g=i(21414),x=(i(24455),i(39100));i(30560);function _(e){return!!(0,o.pC)(e)&&!e.visible}new Float64Array(3),new Float32Array(6),(0,x.c)();const T=(0,l.Ue)();function b(e,t,i,r,n,o,a){if(!_(t))if(e.boundingInfo){(0,v.hu)(e.primitiveType===c.MX.Triangle);const t=i.tolerance;S(e.boundingInfo,r,n,t,o,a)}else{const t=e.indices.get(g.T.POSITION),i=e.vertexAttributes.get(g.T.POSITION);w(r,n,0,t.length/3,t,i,void 0,o,a)}}const A=(0,s.c)();function S(e,t,i,r,n,a){if((0,o.Wi)(e))return;const s=P(t,i,A);if((0,l.op)(T,e.getBBMin()),(0,l.Tn)(T,e.getBBMax()),(0,o.pC)(n)&&n.applyToAabb(T),R(T,t,s,r)){const{primitiveIndices:o,indices:s,position:l}=e,c=o?o.length:s.length/3;if(c>B){const o=e.getChildren();if(void 0!==o){for(let e=0;e<8;++e)void 0!==o[e]&&S(o[e],t,i,r,n,a);return}}w(t,i,0,c,s,l,o,n,a)}}const C=(0,s.c)();function w(e,t,i,r,n,a,s,l,c){if(s)return M(e,t,i,r,n,a,s,l,c);const u=a.data,d=a.stride||a.size,h=e[0],f=e[1],p=e[2],m=t[0]-h,v=t[1]-f,g=t[2]-p;for(let x=i,_=3*i;x<r;++x){let e=d*n[_++],t=u[e++],i=u[e++],r=u[e];e=d*n[_++];let a=u[e++],s=u[e++],T=u[e];e=d*n[_++];let b=u[e++],A=u[e++],S=u[e];(0,o.pC)(l)&&([t,i,r]=l.applyToVertex(t,i,r,x),[a,s,T]=l.applyToVertex(a,s,T,x),[b,A,S]=l.applyToVertex(b,A,S,x));const w=a-t,M=s-i,O=T-r,y=b-t,P=A-i,R=S-r,I=v*R-P*g,N=g*y-R*m,L=m*P-y*v,H=w*I+M*N+O*L;if(Math.abs(H)<=Number.EPSILON)continue;const D=h-t,F=f-i,B=p-r,z=D*I+F*N+B*L;if(H>0){if(z<0||z>H)continue}else if(z>0||z<H)continue;const V=F*O-M*B,G=B*w-O*D,U=D*M-w*F,W=m*V+v*G+g*U;if(H>0){if(W<0||z+W>H)continue}else if(W>0||z+W<H)continue;const k=(y*V+P*G+R*U)/H;k>=0&&c(k,E(w,M,O,y,P,R,C),x,!1)}}function M(e,t,i,r,n,a,s,l,c){const u=a.data,d=a.stride||a.size,h=e[0],f=e[1],p=e[2],m=t[0]-h,v=t[1]-f,g=t[2]-p;for(let x=i;x<r;++x){const e=s[x];let t=3*e,i=d*n[t++],r=u[i++],a=u[i++],_=u[i];i=d*n[t++];let T=u[i++],b=u[i++],A=u[i];i=d*n[t];let S=u[i++],w=u[i++],M=u[i];(0,o.pC)(l)&&([r,a,_]=l.applyToVertex(r,a,_,x),[T,b,A]=l.applyToVertex(T,b,A,x),[S,w,M]=l.applyToVertex(S,w,M,x));const O=T-r,y=b-a,P=A-_,R=S-r,I=w-a,N=M-_,L=v*N-I*g,H=g*R-N*m,D=m*I-R*v,F=O*L+y*H+P*D;if(Math.abs(F)<=Number.EPSILON)continue;const B=h-r,z=f-a,V=p-_,G=B*L+z*H+V*D;if(F>0){if(G<0||G>F)continue}else if(G>0||G<F)continue;const U=z*P-y*V,W=V*O-P*B,k=B*y-O*z,q=m*U+v*W+g*k;if(F>0){if(q<0||G+q>F)continue}else if(q>0||G+q<F)continue;const $=(R*U+I*W+N*k)/F;$>=0&&c($,E(O,y,P,R,I,N,C),e,!1)}}const O=(0,s.c)(),y=(0,s.c)();function E(e,t,i,r,n,o,s){return(0,a.s)(O,e,t,i),(0,a.s)(y,r,n,o),(0,a.f)(s,O,y),(0,a.n)(s,s),s}function P(e,t,i){return(0,a.s)(i,1/(t[0]-e[0]),1/(t[1]-e[1]),1/(t[2]-e[2]))}function R(e,t,i,r){return I(e,t,i,r,1/0)}function I(e,t,i,r,n){const o=(e[0]-r-t[0])*i[0],a=(e[3]+r-t[0])*i[0];let s=Math.min(o,a),l=Math.max(o,a);const c=(e[1]-r-t[1])*i[1],u=(e[4]+r-t[1])*i[1];if(l=Math.min(l,Math.max(c,u)),l<0)return!1;if(s=Math.max(s,Math.min(c,u)),s>l)return!1;const d=(e[2]-r-t[2])*i[2],h=(e[5]+r-t[2])*i[2];return l=Math.min(l,Math.max(d,h)),!(l<0)&&(s=Math.max(s,Math.min(d,h)),!(s>l)&&s<n)}function N(e,t,i,r,a){let s=(i.screenLength||0)*e.pixelRatio;(0,o.pC)(a)&&(s=p(s,r,t,a));const l=s*Math.tan(.5*e.fovY)/(.5*e.fullHeight);return(0,n.uZ)(l*t,i.minWorldLength||0,null!=i.maxWorldLength?i.maxWorldLength:1/0)}function L(e,t){const i=t?L(t):{};for(const r in e){let t=e[r];t&&t.forEach&&(t=D(t)),null==t&&r in i||(i[r]=t)}return i}function H(e,t){let i=!1;for(const n in t){const o=t[n];void 0!==o&&(Array.isArray(o)?null===e[n]?(e[n]=o.slice(),i=!0):(0,r.Vx)(e[n],o)&&(i=!0):e[n]!==o&&(i=!0,e[n]=o))}return i}function D(e){const t=[];return e.forEach((e=>t.push(e))),t}const F={multiply:1,ignore:2,replace:3,tint:4},B=1e3},41163:function(e,t,i){i.d(t,{G:function(){return r}});class r{constructor(e,t,i,r,n,o=!1,a=0){this.name=e,this.count=t,this.type=i,this.offset=r,this.stride=n,this.normalized=o,this.divisor=a}}},30560:function(e,t,i){function r(e,t,i){for(let r=0;r<i;++r)t[2*r]=e[r],t[2*r+1]=e[r]-t[2*r]}function n(e,t){const i=e.length;for(let r=0;r<i;++r)a[0]=e[r],t[r]=a[0];return t}function o(e,t){const i=e.length;for(let r=0;r<i;++r)a[0]=e[r],a[1]=e[r]-a[0],t[r]=a[1];return t}i.d(t,{GB:function(){return o},LF:function(){return r},U8:function(){return n}});const a=new Float32Array(2)},17346:function(e,t,i){i.d(t,{BK:function(){return d},LZ:function(){return u},if:function(){return o},jp:function(){return G},sm:function(){return T},wK:function(){return a},zp:function(){return c}});var r=i(70984),n=i(91907);function o(e,t,i=n.db.ADD,r=[0,0,0,0]){return{srcRgb:e,srcAlpha:e,dstRgb:t,dstAlpha:t,opRgb:i,opAlpha:i,color:{r:r[0],g:r[1],b:r[2],a:r[3]}}}function a(e,t,i,r,o=n.db.ADD,a=n.db.ADD,s=[0,0,0,0]){return{srcRgb:e,srcAlpha:t,dstRgb:i,dstAlpha:r,opRgb:o,opAlpha:a,color:{r:s[0],g:s[1],b:s[2],a:s[3]}}}const s={face:n.LR.BACK,mode:n.Wf.CCW},l={face:n.LR.FRONT,mode:n.Wf.CCW},c=e=>e===r.Vr.Back?s:e===r.Vr.Front?l:null,u={zNear:0,zFar:1},d={r:!0,g:!0,b:!0,a:!0};function h(e){return S.intern(e)}function f(e){return w.intern(e)}function p(e){return O.intern(e)}function m(e){return E.intern(e)}function v(e){return R.intern(e)}function g(e){return N.intern(e)}function x(e){return H.intern(e)}function _(e){return F.intern(e)}function T(e){return z.intern(e)}class b{constructor(e,t){this.makeKey=e,this.makeRef=t,this.interns=new Map}intern(e){if(!e)return null;const t=this.makeKey(e),i=this.interns;return i.has(t)||i.set(t,this.makeRef(e)),i.get(t)}}function A(e){return"["+e.join(",")+"]"}const S=new b(C,(e=>({__tag:"Blending",...e})));function C(e){return e?A([e.srcRgb,e.srcAlpha,e.dstRgb,e.dstAlpha,e.opRgb,e.opAlpha,e.color.r,e.color.g,e.color.b,e.color.a]):null}const w=new b(M,(e=>({__tag:"Culling",...e})));function M(e){return e?A([e.face,e.mode]):null}const O=new b(y,(e=>({__tag:"PolygonOffset",...e})));function y(e){return e?A([e.factor,e.units]):null}const E=new b(P,(e=>({__tag:"DepthTest",...e})));function P(e){return e?A([e.func]):null}const R=new b(I,(e=>({__tag:"StencilTest",...e})));function I(e){return e?A([e.function.func,e.function.ref,e.function.mask,e.operation.fail,e.operation.zFail,e.operation.zPass]):null}const N=new b(L,(e=>({__tag:"DepthWrite",...e})));function L(e){return e?A([e.zNear,e.zFar]):null}const H=new b(D,(e=>({__tag:"ColorWrite",...e})));function D(e){return e?A([e.r,e.g,e.b,e.a]):null}const F=new b(B,(e=>({__tag:"StencilWrite",...e})));function B(e){return e?A([e.mask]):null}const z=new b(V,(e=>({blending:h(e.blending),culling:f(e.culling),polygonOffset:p(e.polygonOffset),depthTest:m(e.depthTest),stencilTest:v(e.stencilTest),depthWrite:g(e.depthWrite),colorWrite:x(e.colorWrite),stencilWrite:_(e.stencilWrite)})));function V(e){return e?A([C(e.blending),M(e.culling),y(e.polygonOffset),P(e.depthTest),I(e.stencilTest),L(e.depthWrite),D(e.colorWrite),B(e.stencilWrite)]):null}class G{constructor(e){this._pipelineInvalid=!0,this._blendingInvalid=!0,this._cullingInvalid=!0,this._polygonOffsetInvalid=!0,this._depthTestInvalid=!0,this._stencilTestInvalid=!0,this._depthWriteInvalid=!0,this._colorWriteInvalid=!0,this._stencilWriteInvalid=!0,this._stateSetters=e}setPipeline(e){(this._pipelineInvalid||e!==this._pipeline)&&(this._setBlending(e.blending),this._setCulling(e.culling),this._setPolygonOffset(e.polygonOffset),this._setDepthTest(e.depthTest),this._setStencilTest(e.stencilTest),this._setDepthWrite(e.depthWrite),this._setColorWrite(e.colorWrite),this._setStencilWrite(e.stencilWrite),this._pipeline=e),this._pipelineInvalid=!1}invalidateBlending(){this._blendingInvalid=!0,this._pipelineInvalid=!0}invalidateCulling(){this._cullingInvalid=!0,this._pipelineInvalid=!0}invalidatePolygonOffset(){this._polygonOffsetInvalid=!0,this._pipelineInvalid=!0}invalidateDepthTest(){this._depthTestInvalid=!0,this._pipelineInvalid=!0}invalidateStencilTest(){this._stencilTestInvalid=!0,this._pipelineInvalid=!0}invalidateDepthWrite(){this._depthWriteInvalid=!0,this._pipelineInvalid=!0}invalidateColorWrite(){this._colorWriteInvalid=!0,this._pipelineInvalid=!0}invalidateStencilWrite(){this._stencilTestInvalid=!0,this._pipelineInvalid=!0}_setBlending(e){this._blending=this._setSubState(e,this._blending,this._blendingInvalid,this._stateSetters.setBlending),this._blendingInvalid=!1}_setCulling(e){this._culling=this._setSubState(e,this._culling,this._cullingInvalid,this._stateSetters.setCulling),this._cullingInvalid=!1}_setPolygonOffset(e){this._polygonOffset=this._setSubState(e,this._polygonOffset,this._polygonOffsetInvalid,this._stateSetters.setPolygonOffset),this._polygonOffsetInvalid=!1}_setDepthTest(e){this._depthTest=this._setSubState(e,this._depthTest,this._depthTestInvalid,this._stateSetters.setDepthTest),this._depthTestInvalid=!1}_setStencilTest(e){this._stencilTest=this._setSubState(e,this._stencilTest,this._stencilTestInvalid,this._stateSetters.setStencilTest),this._stencilTestInvalid=!1}_setDepthWrite(e){this._depthWrite=this._setSubState(e,this._depthWrite,this._depthWriteInvalid,this._stateSetters.setDepthWrite),this._depthWriteInvalid=!1}_setColorWrite(e){this._colorWrite=this._setSubState(e,this._colorWrite,this._colorWriteInvalid,this._stateSetters.setColorWrite),this._colorWriteInvalid=!1}_setStencilWrite(e){this._stencilWrite=this._setSubState(e,this._stencilWrite,this._stencilWriteInvalid,this._stateSetters.setStencilWrite),this._stencilTestInvalid=!1}_setSubState(e,t,i,r){return(i||e!==t)&&(r(e),this._pipelineInvalid=!0),e}}}}]);
//# sourceMappingURL=9992.620023e2.js.map