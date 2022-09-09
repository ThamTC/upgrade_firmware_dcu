"use strict";(self["webpackChunkclient"]=self["webpackChunkclient"]||[]).push([[1361],{34344:function(e,t,r){function n(){return[1,0,0,0,1,0,0,0,1]}function f(e){return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8]]}function s(e,t,r,n,f,s,u,i,c){return[e,t,r,n,f,s,u,i,c]}function u(e,t){return new Float64Array(e,t,9)}r.d(t,{a:function(){return u},c:function(){return n}});Object.freeze(Object.defineProperty({__proto__:null,create:n,clone:f,fromValues:s,createView:u},Symbol.toStringTag,{value:"Module"}))},39100:function(e,t,r){function n(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function f(e){return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15]]}function s(e,t,r,n,f,s,u,i,c,y,o,d,h,p,l,a){return[e,t,r,n,f,s,u,i,c,y,o,d,h,p,l,a]}function u(e,t){return new Float64Array(e,t,16)}r.d(t,{I:function(){return i},a:function(){return u},b:function(){return f},c:function(){return n}});const i=n();Object.freeze(Object.defineProperty({__proto__:null,create:n,clone:f,fromValues:s,createView:u,IDENTITY:i},Symbol.toStringTag,{value:"Module"}))},10663:function(e,t,r){r.d(t,{c:function(){return m},g:function(){return d},j:function(){return v},k:function(){return A},m:function(){return h},s:function(){return o}});var n=r(34344),f=r(61044),s=r(8909),u=r(93011),i=r(6766),c=r(88589);function y(e){return e[0]=0,e[1]=0,e[2]=0,e[3]=1,e}function o(e,t,r){r*=.5;const n=Math.sin(r);return e[0]=n*t[0],e[1]=n*t[1],e[2]=n*t[2],e[3]=Math.cos(r),e}function d(e,t){const r=2*Math.acos(t[3]),n=Math.sin(r/2);return n>u.E?(e[0]=t[0]/n,e[1]=t[1]/n,e[2]=t[2]/n):(e[0]=1,e[1]=0,e[2]=0),r}function h(e,t,r){const n=t[0],f=t[1],s=t[2],u=t[3],i=r[0],c=r[1],y=r[2],o=r[3];return e[0]=n*o+u*i+f*y-s*c,e[1]=f*o+u*c+s*i-n*y,e[2]=s*o+u*y+n*c-f*i,e[3]=u*o-n*i-f*c-s*y,e}function p(e,t,r){r*=.5;const n=t[0],f=t[1],s=t[2],u=t[3],i=Math.sin(r),c=Math.cos(r);return e[0]=n*c+u*i,e[1]=f*c+s*i,e[2]=s*c-f*i,e[3]=u*c-n*i,e}function l(e,t,r){r*=.5;const n=t[0],f=t[1],s=t[2],u=t[3],i=Math.sin(r),c=Math.cos(r);return e[0]=n*c-s*i,e[1]=f*c+u*i,e[2]=s*c+n*i,e[3]=u*c-f*i,e}function a(e,t,r){r*=.5;const n=t[0],f=t[1],s=t[2],u=t[3],i=Math.sin(r),c=Math.cos(r);return e[0]=n*c+f*i,e[1]=f*c-n*i,e[2]=s*c+u*i,e[3]=u*c-s*i,e}function B(e,t){const r=t[0],n=t[1],f=t[2];return e[0]=r,e[1]=n,e[2]=f,e[3]=Math.sqrt(Math.abs(1-r*r-n*n-f*f)),e}function b(e,t,r,n){const f=t[0],s=t[1],i=t[2],c=t[3];let y,o,d,h,p,l=r[0],a=r[1],B=r[2],b=r[3];return o=f*l+s*a+i*B+c*b,o<0&&(o=-o,l=-l,a=-a,B=-B,b=-b),1-o>u.E?(y=Math.acos(o),d=Math.sin(y),h=Math.sin((1-n)*y)/d,p=Math.sin(n*y)/d):(h=1-n,p=n),e[0]=h*f+p*l,e[1]=h*s+p*a,e[2]=h*i+p*B,e[3]=h*c+p*b,e}function T(e){const t=(0,u.R)(),r=(0,u.R)(),n=(0,u.R)(),f=Math.sqrt(1-t),s=Math.sqrt(t);return e[0]=f*Math.sin(2*Math.PI*r),e[1]=f*Math.cos(2*Math.PI*r),e[2]=s*Math.sin(2*Math.PI*n),e[3]=s*Math.cos(2*Math.PI*n),e}function E(e,t){const r=t[0],n=t[1],f=t[2],s=t[3],u=r*r+n*n+f*f+s*s,i=u?1/u:0;return e[0]=-r*i,e[1]=-n*i,e[2]=-f*i,e[3]=s*i,e}function m(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=t[3],e}function S(e,t){const r=t[0]+t[4]+t[8];let n;if(r>0)n=Math.sqrt(r+1),e[3]=.5*n,n=.5/n,e[0]=(t[5]-t[7])*n,e[1]=(t[6]-t[2])*n,e[2]=(t[1]-t[3])*n;else{let r=0;t[4]>t[0]&&(r=1),t[8]>t[3*r+r]&&(r=2);const f=(r+1)%3,s=(r+2)%3;n=Math.sqrt(t[3*r+r]-t[3*f+f]-t[3*s+s]+1),e[r]=.5*n,n=.5/n,e[3]=(t[3*f+s]-t[3*s+f])*n,e[f]=(t[3*f+r]+t[3*r+f])*n,e[s]=(t[3*s+r]+t[3*r+s])*n}return e}function A(e,t,r,n){const f=.5*Math.PI/180;t*=f,r*=f,n*=f;const s=Math.sin(t),u=Math.cos(t),i=Math.sin(r),c=Math.cos(r),y=Math.sin(n),o=Math.cos(n);return e[0]=s*c*o-u*i*y,e[1]=u*i*o+s*c*y,e[2]=u*c*y-s*i*o,e[3]=u*c*o+s*i*y,e}function O(e){return"quat("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+")"}const g=c.c,M=c.s,_=c.a,L=h,w=c.b,x=c.d,P=c.l,C=c.e,I=C,N=c.f,R=N,Y=c.n,v=c.g,F=c.h;function j(e,t,r){const n=(0,i.e)(t,r);return n<-.999999?((0,i.f)(V,q,t),(0,i.u)(V)<1e-6&&(0,i.f)(V,U,t),(0,i.n)(V,V),o(e,V,Math.PI),e):n>.999999?(e[0]=0,e[1]=0,e[2]=0,e[3]=1,e):((0,i.f)(V,t,r),e[0]=V[0],e[1]=V[1],e[2]=V[2],e[3]=1+n,Y(e,e))}const V=(0,s.c)(),q=(0,s.f)(1,0,0),U=(0,s.f)(0,1,0);function z(e,t,r,n,f,s){return b(k,t,f,s),b(D,r,n,s),b(e,k,D,2*s*(1-s)),e}const k=(0,f.a)(),D=(0,f.a)();function Z(e,t,r,n){const f=G;return f[0]=r[0],f[3]=r[1],f[6]=r[2],f[1]=n[0],f[4]=n[1],f[7]=n[2],f[2]=-t[0],f[5]=-t[1],f[8]=-t[2],Y(e,S(e,f))}const G=(0,n.c)();Object.freeze(Object.defineProperty({__proto__:null,identity:y,setAxisAngle:o,getAxisAngle:d,multiply:h,rotateX:p,rotateY:l,rotateZ:a,calculateW:B,slerp:b,random:T,invert:E,conjugate:m,fromMat3:S,fromEuler:A,str:O,copy:g,set:M,add:_,mul:L,scale:w,dot:x,lerp:P,length:C,len:I,squaredLength:N,sqrLen:R,normalize:Y,exactEquals:v,equals:F,rotationTo:j,sqlerp:z,setAxes:Z},Symbol.toStringTag,{value:"Module"}))},61044:function(e,t,r){function n(){return[0,0,0,1]}function f(e){return[e[0],e[1],e[2],e[3]]}function s(e,t,r,n){return[e,t,r,n]}function u(e,t){return new Float64Array(e,t,4)}r.d(t,{I:function(){return i},a:function(){return n},b:function(){return f},c:function(){return u}});const i=n();Object.freeze(Object.defineProperty({__proto__:null,create:n,clone:f,fromValues:s,createView:u,IDENTITY:i},Symbol.toStringTag,{value:"Module"}))},86717:function(e,t,r){r.d(t,{a:function(){return s},b:function(){return c},n:function(){return i},s:function(){return u},t:function(){return f}});var n=r(45150);function f(e,t,r){if(e.count!==t.count)return void n.c.error("source and destination buffers need to have the same number of elements");const f=e.count,s=r[0],u=r[1],i=r[2],c=r[4],y=r[5],o=r[6],d=r[8],h=r[9],p=r[10],l=r[12],a=r[13],B=r[14],b=e.typedBuffer,T=e.typedBufferStride,E=t.typedBuffer,m=t.typedBufferStride;for(let n=0;n<f;n++){const e=n*T,t=n*m,r=E[t],f=E[t+1],S=E[t+2];b[e]=s*r+c*f+d*S+l,b[e+1]=u*r+y*f+h*S+a,b[e+2]=i*r+o*f+p*S+B}}function s(e,t,r){if(e.count!==t.count)return void n.c.error("source and destination buffers need to have the same number of elements");const f=e.count,s=r[0],u=r[1],i=r[2],c=r[3],y=r[4],o=r[5],d=r[6],h=r[7],p=r[8],l=e.typedBuffer,a=e.typedBufferStride,B=t.typedBuffer,b=t.typedBufferStride;for(let n=0;n<f;n++){const e=n*a,t=n*b,r=B[t],f=B[t+1],T=B[t+2];l[e]=s*r+c*f+d*T,l[e+1]=u*r+y*f+h*T,l[e+2]=i*r+o*f+p*T}}function u(e,t,r){const n=Math.min(e.count,t.count),f=e.typedBuffer,s=e.typedBufferStride,u=t.typedBuffer,i=t.typedBufferStride;for(let c=0;c<n;c++){const e=c*s,t=c*i;f[e]=r*u[t],f[e+1]=r*u[t+1],f[e+2]=r*u[t+2]}}function i(e,t){const r=Math.min(e.count,t.count),n=e.typedBuffer,f=e.typedBufferStride,s=t.typedBuffer,u=t.typedBufferStride;for(let i=0;i<r;i++){const e=i*f,t=i*u,r=s[t],c=s[t+1],y=s[t+2],o=r*r+c*c+y*y;if(o>0){const t=1/Math.sqrt(o);n[e]=t*r,n[e+1]=t*c,n[e+2]=t*y}}}function c(e,t,r){const n=Math.min(e.count,t.count),f=e.typedBuffer,s=e.typedBufferStride,u=t.typedBuffer,i=t.typedBufferStride;for(let c=0;c<n;c++){const e=c*s,t=c*i;f[e]=u[t]>>r,f[e+1]=u[t+1]>>r,f[e+2]=u[t+2]>>r}}Object.freeze(Object.defineProperty({__proto__:null,transformMat4:f,transformMat3:s,scale:u,normalize:i,shiftRight:c},Symbol.toStringTag,{value:"Module"}))},14789:function(e,t,r){function n(e,t,r){const n=e.typedBuffer,f=e.typedBufferStride,s=t.typedBuffer,u=t.typedBufferStride,i=r?r.count:t.count;let c=(r&&r.dstIndex?r.dstIndex:0)*f,y=(r&&r.srcIndex?r.srcIndex:0)*u;for(let o=0;o<i;++o)n[c]=s[y],n[c+1]=s[y+1],n[c+2]=s[y+2],c+=f,y+=u}function f(e,t,r,n,f){const s=e.typedBuffer,u=e.typedBufferStride,i=f?.count??e.count;let c=(f?.dstIndex??0)*u;for(let y=0;y<i;++y)s[c]=t,s[c+1]=r,s[c+2]=n,c+=u}r.d(t,{c:function(){return n},f:function(){return f}});Object.freeze(Object.defineProperty({__proto__:null,copy:n,fill:f},Symbol.toStringTag,{value:"Module"}))},63338:function(e,t,r){r.d(t,{ly:function(){return h},oS:function(){return m},o7:function(){return q},Jj:function(){return D},Hz:function(){return v},gK:function(){return B},ey:function(){return b},bj:function(){return T},O1:function(){return E},av:function(){return w},Nu:function(){return I},D_:function(){return g},Eu:function(){return p},q6:function(){return S},or:function(){return U},wA:function(){return Z},Vs:function(){return F},TS:function(){return x},qt:function(){return N},xA:function(){return M},ct:function(){return l},fP:function(){return A},n1:function(){return z},PP:function(){return G},P_:function(){return j},mw:function(){return P},G5:function(){return R},ne:function(){return _},ek:function(){return a},Cd:function(){return O},zO:function(){return k},TN:function(){return H},ir:function(){return V},v6:function(){return C},hu:function(){return Y},mc:function(){return L}});class n{constructor(e,t,r=0,n,f){this.TypedArrayConstructor=e,this.elementCount=9;const s=this.TypedArrayConstructor;void 0===n&&(n=9*s.BYTES_PER_ELEMENT);const u=0===t.byteLength?0:r;this.typedBuffer=null==f?new s(t,u):new s(t,u,(f-r)/s.BYTES_PER_ELEMENT),this.typedBufferStride=n/s.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,r=this.count-t){const n=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,n,this.stride,n+r*this.stride)}getMat(e,t){let r=e*this.typedBufferStride;for(let n=0;n<9;n++)t[n]=this.typedBuffer[r++];return t}setMat(e,t){let r=e*this.typedBufferStride;for(let n=0;n<9;n++)this.typedBuffer[r++]=t[n]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}copyFrom(e,t,r){const n=this.typedBuffer,f=t.typedBuffer;let s=e*this.typedBufferStride,u=r*t.typedBufferStride;for(let i=0;i<9;++i)n[s++]=f[u++]}get buffer(){return this.typedBuffer.buffer}}n.ElementCount=9;class f{constructor(e,t,r=0,n,f){this.TypedArrayConstructor=e,this.elementCount=16;const s=this.TypedArrayConstructor;void 0===n&&(n=16*s.BYTES_PER_ELEMENT);const u=0===t.byteLength?0:r;this.typedBuffer=null==f?new s(t,u):new s(t,u,(f-r)/s.BYTES_PER_ELEMENT),this.typedBufferStride=n/s.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,r=this.count-t){const n=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,n,this.stride,n+r*this.stride)}getMat(e,t){let r=e*this.typedBufferStride;for(let n=0;n<16;n++)t[n]=this.typedBuffer[r++];return t}setMat(e,t){let r=e*this.typedBufferStride;for(let n=0;n<16;n++)this.typedBuffer[r++]=t[n]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}copyFrom(e,t,r){const n=this.typedBuffer,f=t.typedBuffer;let s=e*this.typedBufferStride,u=r*t.typedBufferStride;for(let i=0;i<16;++i)n[s++]=f[u++]}get buffer(){return this.typedBuffer.buffer}}f.ElementCount=16;class s{constructor(e,t,r=0,n,f){this.TypedArrayConstructor=e,this.elementCount=1;const s=this.TypedArrayConstructor;void 0===n&&(n=s.BYTES_PER_ELEMENT);const u=0===t.byteLength?0:r;this.typedBuffer=null==f?new s(t,u):new s(t,u,(f-r)/s.BYTES_PER_ELEMENT),this.typedBufferStride=n/s.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,r=this.count-t){const n=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,n,this.stride,n+r*this.stride)}get(e){return this.typedBuffer[e*this.typedBufferStride]}set(e,t){this.typedBuffer[e*this.typedBufferStride]=t}get buffer(){return this.typedBuffer.buffer}}s.ElementCount=1;var u=r(55709);class i{constructor(e,t,r=0,n,f){this.TypedArrayConstructor=e,this.elementCount=2;const s=this.TypedArrayConstructor;void 0===n&&(n=2*s.BYTES_PER_ELEMENT);const u=0===t.byteLength?0:r;this.typedBuffer=null==f?new s(t,u):new s(t,u,(f-r)/s.BYTES_PER_ELEMENT),this.typedBufferStride=n/s.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,r=this.count-t){const n=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,n,this.stride,n+r*this.stride)}getVec(e,t){return e*=this.typedBufferStride,(0,u.a)(t,this.typedBuffer[e],this.typedBuffer[e+1])}setVec(e,t){e*=this.typedBufferStride,this.typedBuffer[e++]=t[0],this.typedBuffer[e]=t[1]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}setValues(e,t,r){e*=this.typedBufferStride,this.typedBuffer[e++]=t,this.typedBuffer[e]=r}copyFrom(e,t,r){const n=this.typedBuffer,f=t.typedBuffer;let s=e*this.typedBufferStride,u=r*t.typedBufferStride;n[s++]=f[u++],n[s]=f[u]}get buffer(){return this.typedBuffer.buffer}}i.ElementCount=2;var c=r(6766);class y{constructor(e,t,r=0,n,f){this.TypedArrayConstructor=e,this.elementCount=3;const s=this.TypedArrayConstructor;void 0===n&&(n=3*s.BYTES_PER_ELEMENT);const u=0===t.byteLength?0:r;this.typedBuffer=null==f?new s(t,u):new s(t,u,(f-r)/s.BYTES_PER_ELEMENT),this.typedBufferStride=n/s.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,r=this.count-t){const n=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,n,this.stride,n+r*this.stride)}getVec(e,t){return e*=this.typedBufferStride,(0,c.s)(t,this.typedBuffer[e],this.typedBuffer[e+1],this.typedBuffer[e+2])}setVec(e,t){e*=this.typedBufferStride,this.typedBuffer[e++]=t[0],this.typedBuffer[e++]=t[1],this.typedBuffer[e]=t[2]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}setValues(e,t,r,n){e*=this.typedBufferStride,this.typedBuffer[e++]=t,this.typedBuffer[e++]=r,this.typedBuffer[e]=n}copyFrom(e,t,r){const n=this.typedBuffer,f=t.typedBuffer;let s=e*this.typedBufferStride,u=r*t.typedBufferStride;n[s++]=f[u++],n[s++]=f[u++],n[s]=f[u]}get buffer(){return this.typedBuffer.buffer}}y.ElementCount=3;var o=r(88589);class d{constructor(e,t,r=0,n,f){this.TypedArrayConstructor=e,this.elementCount=4;const s=this.TypedArrayConstructor;void 0===n&&(n=4*s.BYTES_PER_ELEMENT);const u=0===t.byteLength?0:r;this.typedBuffer=null==f?new s(t,u):new s(t,u,(f-r)/s.BYTES_PER_ELEMENT),this.typedBufferStride=n/s.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,r=this.count-t){const n=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,n,this.stride,n+r*this.stride)}getVec(e,t){return e*=this.typedBufferStride,(0,o.s)(t,this.typedBuffer[e++],this.typedBuffer[e++],this.typedBuffer[e++],this.typedBuffer[e])}setVec(e,t){e*=this.typedBufferStride,this.typedBuffer[e++]=t[0],this.typedBuffer[e++]=t[1],this.typedBuffer[e++]=t[2],this.typedBuffer[e]=t[3]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}setValues(e,t,r,n,f){e*=this.typedBufferStride,this.typedBuffer[e++]=t,this.typedBuffer[e++]=r,this.typedBuffer[e++]=n,this.typedBuffer[e]=f}copyFrom(e,t,r){const n=this.typedBuffer,f=t.typedBuffer;let s=e*this.typedBufferStride,u=r*t.typedBufferStride;n[s++]=f[u++],n[s++]=f[u++],n[s++]=f[u++],n[s]=f[u]}get buffer(){return this.typedBuffer.buffer}}d.ElementCount=4;class h extends s{constructor(e,t=0,r,n){super(Float32Array,e,t,r,n),this.elementType="f32"}static fromTypedArray(e,t){return new h(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}h.ElementType="f32";class p extends i{constructor(e,t=0,r,n){super(Float32Array,e,t,r,n),this.elementType="f32"}slice(e,t){return this.sliceBuffer(p,e,t)}static fromTypedArray(e,t){return new p(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}p.ElementType="f32";class l extends y{constructor(e,t=0,r,n){super(Float32Array,e,t,r,n),this.elementType="f32"}slice(e,t){return this.sliceBuffer(l,e,t)}static fromTypedArray(e,t){return new l(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}l.ElementType="f32";class a extends d{constructor(e,t=0,r,n){super(Float32Array,e,t,r,n),this.elementType="f32"}slice(e,t){return this.sliceBuffer(a,e,t)}static fromTypedArray(e,t){return new a(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}a.ElementType="f32";class B extends n{constructor(e,t=0,r,n){super(Float32Array,e,t,r,n),this.elementType="f32"}slice(e,t){return this.sliceBuffer(B,e,t)}static fromTypedArray(e,t){return new B(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}B.ElementType="f32";class b extends n{constructor(e,t=0,r,n){super(Float64Array,e,t,r,n),this.elementType="f64"}slice(e,t){return this.sliceBuffer(b,e,t)}static fromTypedArray(e,t){return new b(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}b.ElementType="f64";class T extends f{constructor(e,t=0,r,n){super(Float32Array,e,t,r,n),this.elementType="f32"}slice(e,t){return this.sliceBuffer(T,e,t)}static fromTypedArray(e,t){return new T(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}T.ElementType="f32";class E extends f{constructor(e,t=0,r,n){super(Float64Array,e,t,r,n),this.elementType="f64"}slice(e,t){return this.sliceBuffer(E,e,t)}static fromTypedArray(e,t){return new E(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}E.ElementType="f64";class m extends s{constructor(e,t=0,r,n){super(Float64Array,e,t,r,n),this.elementType="f64"}slice(e,t){return this.sliceBuffer(m,e,t)}static fromTypedArray(e,t){return new m(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}m.ElementType="f64";class S extends i{constructor(e,t=0,r,n){super(Float64Array,e,t,r,n),this.elementType="f64"}slice(e,t){return this.sliceBuffer(S,e,t)}static fromTypedArray(e,t){return new S(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}S.ElementType="f64";class A extends y{constructor(e,t=0,r,n){super(Float64Array,e,t,r,n),this.elementType="f64"}slice(e,t){return this.sliceBuffer(A,e,t)}static fromTypedArray(e,t){return new A(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}A.ElementType="f64";class O extends d{constructor(e,t=0,r,n){super(Float64Array,e,t,r,n),this.elementType="f64"}slice(e,t){return this.sliceBuffer(O,e,t)}static fromTypedArray(e,t){return new O(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}O.ElementType="f64";class g extends s{constructor(e,t=0,r,n){super(Uint8Array,e,t,r,n),this.elementType="u8"}slice(e,t){return this.sliceBuffer(g,e,t)}static fromTypedArray(e,t){return new g(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}g.ElementType="u8";class M extends i{constructor(e,t=0,r,n){super(Uint8Array,e,t,r,n),this.elementType="u8"}slice(e,t){return this.sliceBuffer(M,e,t)}static fromTypedArray(e,t){return new M(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}M.ElementType="u8";class _ extends y{constructor(e,t=0,r,n){super(Uint8Array,e,t,r,n),this.elementType="u8"}slice(e,t){return this.sliceBuffer(_,e,t)}static fromTypedArray(e,t){return new _(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}_.ElementType="u8";class L extends d{constructor(e,t=0,r,n){super(Uint8Array,e,t,r,n),this.elementType="u8"}slice(e,t){return this.sliceBuffer(L,e,t)}static fromTypedArray(e,t){return new L(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}L.ElementType="u8";class w extends s{constructor(e,t=0,r,n){super(Uint16Array,e,t,r,n),this.elementType="u16"}slice(e,t){return this.sliceBuffer(w,e,t)}static fromTypedArray(e,t){return new w(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}w.ElementType="u16";class x extends i{constructor(e,t=0,r,n){super(Uint16Array,e,t,r,n),this.elementType="u16"}slice(e,t){return this.sliceBuffer(x,e,t)}static fromTypedArray(e,t){return new x(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}x.ElementType="u16";class P extends y{constructor(e,t=0,r,n){super(Uint16Array,e,t,r,n),this.elementType="u16"}slice(e,t){return this.sliceBuffer(P,e,t)}static fromTypedArray(e,t){return new P(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}P.ElementType="u16";class C extends d{constructor(e,t=0,r,n){super(Uint16Array,e,t,r,n),this.elementType="u16"}slice(e,t){return this.sliceBuffer(C,e,t)}static fromTypedArray(e,t){return new C(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}C.ElementType="u16";class I extends s{constructor(e,t=0,r,n){super(Uint32Array,e,t,r,n),this.elementType="u32"}slice(e,t){return this.sliceBuffer(I,e,t)}static fromTypedArray(e,t){return new I(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}I.ElementType="u32";class N extends i{constructor(e,t=0,r,n){super(Uint32Array,e,t,r,n),this.elementType="u32"}slice(e,t){return this.sliceBuffer(N,e,t)}static fromTypedArray(e,t){return new N(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}N.ElementType="u32";class R extends y{constructor(e,t=0,r,n){super(Uint32Array,e,t,r,n),this.elementType="u32"}slice(e,t){return this.sliceBuffer(R,e,t)}static fromTypedArray(e,t){return new R(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}R.ElementType="u32";class Y extends d{constructor(e,t=0,r,n){super(Uint32Array,e,t,r,n),this.elementType="u32"}slice(e,t){return this.sliceBuffer(Y,e,t)}static fromTypedArray(e,t){return new Y(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}Y.ElementType="u32";class v extends s{constructor(e,t=0,r,n){super(Int8Array,e,t,r,n),this.elementType="i8"}slice(e,t){return this.sliceBuffer(v,e,t)}static fromTypedArray(e,t){return new v(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}v.ElementType="i8";class F extends i{constructor(e,t=0,r,n){super(Int8Array,e,t,r,n),this.elementType="i8"}slice(e,t){return this.sliceBuffer(F,e,t)}static fromTypedArray(e,t){return new F(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}F.ElementType="i8";class j extends y{constructor(e,t=0,r,n){super(Int8Array,e,t,r,n),this.elementType="i8"}slice(e,t){return this.sliceBuffer(j,e,t)}static fromTypedArray(e,t){return new j(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}j.ElementType="i8";class V extends d{constructor(e,t=0,r,n){super(Int8Array,e,t,r,n),this.elementType="i8"}slice(e,t){return this.sliceBuffer(V,e,t)}static fromTypedArray(e,t){return new V(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}V.ElementType="i8";class q extends s{constructor(e,t=0,r,n){super(Int16Array,e,t,r,n),this.elementType="i16"}slice(e,t){return this.sliceBuffer(q,e,t)}static fromTypedArray(e,t){return new q(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}q.ElementType="i16";class U extends i{constructor(e,t=0,r,n){super(Int16Array,e,t,r,n),this.elementType="i16"}slice(e,t){return this.sliceBuffer(U,e,t)}static fromTypedArray(e,t){return new U(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}U.ElementType="i16";class z extends y{constructor(e,t=0,r,n){super(Int16Array,e,t,r,n),this.elementType="i16"}slice(e,t){return this.sliceBuffer(z,e,t)}static fromTypedArray(e,t){return new z(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}z.ElementType="i16";class k extends d{constructor(e,t=0,r,n){super(Int16Array,e,t,r,n),this.elementType="i16"}slice(e,t){return this.sliceBuffer(k,e,t)}static fromTypedArray(e,t){return new k(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}k.ElementType="i16";class D extends s{constructor(e,t=0,r,n){super(Int32Array,e,t,r,n),this.elementType="i32"}slice(e,t){return this.sliceBuffer(D,e,t)}static fromTypedArray(e,t){return new D(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}D.ElementType="i32";class Z extends i{constructor(e,t=0,r,n){super(Int32Array,e,t,r,n),this.elementType="i32"}slice(e,t){return this.sliceBuffer(Z,e,t)}static fromTypedArray(e,t){return new Z(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}Z.ElementType="i32";class G extends y{constructor(e,t=0,r,n){super(Int32Array,e,t,r,n),this.elementType="i32"}slice(e,t){return this.sliceBuffer(G,e,t)}static fromTypedArray(e,t){return new G(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}G.ElementType="i32";class H extends d{constructor(e,t=0,r,n){super(Int32Array,e,t,r,n),this.elementType="i32"}slice(e,t){return this.sliceBuffer(H,e,t)}static fromTypedArray(e,t){return new H(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}H.ElementType="i32"},45150:function(e,t,r){r.d(t,{c:function(){return f}});var n=r(13802);const f=n.Z.getLogger("esri.views.3d.support.buffer.math")}}]);
//# sourceMappingURL=1361.ea4f43be.js.map