(()=>{var _d=0,Wh=1,yd=2;var tf=1,ih=2,Ei=3,es=0,on=1,$e=2,Ki=0,ji=1,bs=2,Xh=3,qh=4,vd=5,xs=100,bd=101,Md=102,Ed=103,wd=104,Td=200,Sd=201,Ad=202,Rd=203,Pc=204,Dc=205,Cd=206,Id=207,Ld=208,Pd=209,Dd=210,Ud=211,Nd=212,zd=213,Fd=214,Uc=0,Nc=1,zc=2,or=3,Fc=4,Oc=5,Bc=6,Hc=7,ef=0,Od=1,Bd=2,Qi=0,Hd=1,kd=2,Vd=3,sh=4,Gd=5,Wd=6,Xd=7;var nf=300,ar=301,cr=302,kc=303,Vc=304,Ta=306,Ms=1e3,ys=1001,Gc=1002,Nn=1003,qd=1004;var po=1005;var ai=1006,Ka=1007;var vs=1008;var Ri=1009,sf=1010,rf=1011,qr=1012,rh=1013,Es=1014,ci=1015,no=1016,oh=1017,ah=1018,lr=1020,of=35902,af=1021,cf=1022,jn=1023,lf=1024,hf=1025,ir=1026,hr=1027,ch=1028,lh=1029,uf=1030,hh=1031;var uh=1033,Xo=33776,qo=33777,Yo=33778,Zo=33779,Wc=35840,Xc=35841,qc=35842,Yc=35843,Zc=36196,Jc=37492,$c=37496,Kc=37808,jc=37809,Qc=37810,tl=37811,el=37812,nl=37813,il=37814,sl=37815,rl=37816,ol=37817,al=37818,cl=37819,ll=37820,hl=37821,Jo=36492,ul=36494,fl=36495,ff=36283,dl=36284,pl=36285,ml=36286;var $o=2300,gl=2301,ja=2302,Yh=2400,Zh=2401,Jh=2402;var Yd=3200,Zd=3201;var df=0,Jd=1,Ji="",We="srgb",_r="srgb-linear",Sa="linear",Te="srgb";var zs=7680;var $h=519,$d=512,Kd=513,jd=514,pf=515,Qd=516,tp=517,ep=518,np=519,xl=35044;var Kh="300 es",Ti=2e3,Ko=2001,ns=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Qa=Math.PI/180,_l=180/Math.PI;function Si(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(dn[i&255]+dn[i>>8&255]+dn[i>>16&255]+dn[i>>24&255]+"-"+dn[t&255]+dn[t>>8&255]+"-"+dn[t>>16&15|64]+dn[t>>24&255]+"-"+dn[e&63|128]+dn[e>>8&255]+"-"+dn[e>>16&255]+dn[e>>24&255]+dn[n&255]+dn[n>>8&255]+dn[n>>16&255]+dn[n>>24&255]).toLowerCase()}function rn(i,t,e){return Math.max(t,Math.min(e,i))}function ip(i,t){return(i%t+t)%t}function tc(i,t,e){return(1-e)*i+e*t}function oi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Se(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var lt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(rn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},oe=class i{constructor(t,e,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],x=s[0],m=s[3],p=s[6],b=s[1],M=s[4],_=s[7],I=s[2],S=s[5],R=s[8];return r[0]=o*x+a*b+c*I,r[3]=o*m+a*M+c*S,r[6]=o*p+a*_+c*R,r[1]=l*x+h*b+u*I,r[4]=l*m+h*M+u*S,r[7]=l*p+h*_+u*R,r[2]=f*x+d*b+g*I,r[5]=f*m+d*M+g*S,r[8]=f*p+d*_+g*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,f=a*c-h*r,d=l*r-o*c,g=e*u+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=u*x,t[1]=(s*l-h*n)*x,t[2]=(a*n-s*o)*x,t[3]=f*x,t[4]=(h*e-s*c)*x,t[5]=(s*r-a*e)*x,t[6]=d*x,t[7]=(n*c-l*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ec.makeScale(t,e)),this}rotate(t){return this.premultiply(ec.makeRotation(-t)),this}translate(t,e){return this.premultiply(ec.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},ec=new oe;function mf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function jo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function sp(){let i=jo("canvas");return i.style.display="block",i}var jh={};function kr(i){i in jh||(jh[i]=!0,console.warn(i))}function rp(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function op(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function ap(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var ye={enabled:!0,workingColorSpace:_r,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Te&&(i.r=Ai(i.r),i.g=Ai(i.g),i.b=Ai(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Te&&(i.r=sr(i.r),i.g=sr(i.g),i.b=sr(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ji?Sa:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Ai(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function sr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Qh=[.64,.33,.3,.6,.15,.06],tu=[.2126,.7152,.0722],eu=[.3127,.329],nu=new oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),iu=new oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ye.define({[_r]:{primaries:Qh,whitePoint:eu,transfer:Sa,toXYZ:nu,fromXYZ:iu,luminanceCoefficients:tu,workingColorSpaceConfig:{unpackColorSpace:We},outputColorSpaceConfig:{drawingBufferColorSpace:We}},[We]:{primaries:Qh,whitePoint:eu,transfer:Te,toXYZ:nu,fromXYZ:iu,luminanceCoefficients:tu,outputColorSpaceConfig:{drawingBufferColorSpace:We}}});var Fs,yl=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Fs===void 0&&(Fs=jo("canvas")),Fs.width=t.width,Fs.height=t.height;let n=Fs.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Fs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=jo("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ai(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ai(e[n]/255)*255):e[n]=Ai(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},cp=0,Qo=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:cp++}),this.uuid=Si(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(nc(s[o].image)):r.push(nc(s[o]))}else r=nc(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function nc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?yl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var lp=0,Sn=class i extends ns{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=ys,s=ys,r=ai,o=vs,a=jn,c=Ri,l=i.DEFAULT_ANISOTROPY,h=Ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lp++}),this.uuid=Si(),this.name="",this.source=new Qo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==nf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ms:t.x=t.x-Math.floor(t.x);break;case ys:t.x=t.x<0?0:1;break;case Gc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ms:t.y=t.y-Math.floor(t.y);break;case ys:t.y=t.y<0?0:1;break;case Gc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Sn.DEFAULT_IMAGE=null;Sn.DEFAULT_MAPPING=nf;Sn.DEFAULT_ANISOTROPY=1;var Ve=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let M=(l+1)/2,_=(d+1)/2,I=(p+1)/2,S=(h+f)/4,R=(u+x)/4,w=(g+m)/4;return M>_&&M>I?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=S/n,r=R/n):_>I?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=S/s,r=w/s):I<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),n=R/r,s=w/r),this.set(n,s,r,e),this}let b=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(u-x)/b,this.z=(f-h)/b,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},vl=class extends ns{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ve(0,0,t,e),this.scissorTest=!1,this.viewport=new Ve(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ai,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Sn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Qo(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ci=class extends vl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ta=class extends Sn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=ys,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var bl=class extends Sn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=ys,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var is=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],f=r[o+0],d=r[o+1],g=r[o+2],x=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=x;return}if(u!==x||c!==f||l!==d||h!==g){let m=1-a,p=c*f+l*d+h*g+u*x,b=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){let I=Math.sqrt(M),S=Math.atan2(I,p*b);m=Math.sin(m*S)/I,a=Math.sin(a*S)/I}let _=a*b;if(c=c*m+f*_,l=l*m+d*_,h=h*m+g*_,u=u*m+x*_,m===1-a){let I=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=I,l*=I,h*=I,u*=I}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+h*u+c*d-l*f,t[e+1]=c*g+h*f+l*u-a*d,t[e+2]=l*g+h*d+a*f-c*u,t[e+3]=h*g-a*u-c*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),f=c(n/2),d=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"YZX":this._x=f*h*u+l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u-f*d*g;break;case"XZY":this._x=f*h*u-l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(rn(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(su.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(su.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ic.copy(this).projectOnVector(t),this.sub(ic)}reflect(t){return this.sub(ic.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(rn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ic=new L,su=new is,Ii=class{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Jn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Jn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Jn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Jn):Jn.fromBufferAttribute(r,o),Jn.applyMatrix4(t.matrixWorld),this.expandByPoint(Jn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),mo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),mo.copy(n.boundingBox)),mo.applyMatrix4(t.matrixWorld),this.union(mo)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Jn),Jn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Pr),go.subVectors(this.max,Pr),Os.subVectors(t.a,Pr),Bs.subVectors(t.b,Pr),Hs.subVectors(t.c,Pr),Gi.subVectors(Bs,Os),Wi.subVectors(Hs,Bs),hs.subVectors(Os,Hs);let e=[0,-Gi.z,Gi.y,0,-Wi.z,Wi.y,0,-hs.z,hs.y,Gi.z,0,-Gi.x,Wi.z,0,-Wi.x,hs.z,0,-hs.x,-Gi.y,Gi.x,0,-Wi.y,Wi.x,0,-hs.y,hs.x,0];return!sc(e,Os,Bs,Hs,go)||(e=[1,0,0,0,1,0,0,0,1],!sc(e,Os,Bs,Hs,go))?!1:(xo.crossVectors(Gi,Wi),e=[xo.x,xo.y,xo.z],sc(e,Os,Bs,Hs,go))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Jn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Jn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(_i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),_i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),_i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),_i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),_i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),_i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),_i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),_i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(_i),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},_i=[new L,new L,new L,new L,new L,new L,new L,new L],Jn=new L,mo=new Ii,Os=new L,Bs=new L,Hs=new L,Gi=new L,Wi=new L,hs=new L,Pr=new L,go=new L,xo=new L,us=new L;function sc(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){us.fromArray(i,r);let a=s.x*Math.abs(us.x)+s.y*Math.abs(us.y)+s.z*Math.abs(us.z),c=t.dot(us),l=e.dot(us),h=n.dot(us);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var hp=new Ii,Dr=new L,rc=new L,ss=class{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):hp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Dr.subVectors(t,this.center);let e=Dr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Dr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(rc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Dr.copy(t.center).add(rc)),this.expandByPoint(Dr.copy(t.center).sub(rc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},yi=new L,oc=new L,_o=new L,Xi=new L,ac=new L,yo=new L,cc=new L,ea=class{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,yi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=yi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(yi.copy(this.origin).addScaledVector(this.direction,e),yi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){oc.copy(t).add(e).multiplyScalar(.5),_o.copy(e).sub(t).normalize(),Xi.copy(this.origin).sub(oc);let r=t.distanceTo(e)*.5,o=-this.direction.dot(_o),a=Xi.dot(this.direction),c=-Xi.dot(_o),l=Xi.lengthSq(),h=Math.abs(1-o*o),u,f,d,g;if(h>0)if(u=o*c-a,f=o*a-c,g=r*h,u>=0)if(f>=-g)if(f<=g){let x=1/h;u*=x,f*=x,d=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(oc).addScaledVector(_o,f),d}intersectSphere(t,e){yi.subVectors(t.center,this.origin);let n=yi.dot(this.direction),s=yi.dot(yi)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,yi)!==null}intersectTriangle(t,e,n,s,r){ac.subVectors(e,t),yo.subVectors(n,t),cc.crossVectors(ac,yo);let o=this.direction.dot(cc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Xi.subVectors(this.origin,t);let c=a*this.direction.dot(yo.crossVectors(Xi,yo));if(c<0)return null;let l=a*this.direction.dot(ac.cross(Xi));if(l<0||c+l>o)return null;let h=-a*Xi.dot(cc);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Re=class i{constructor(t,e,n,s,r,o,a,c,l,h,u,f,d,g,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,u,f,d,g,x,m)}set(t,e,n,s,r,o,a,c,l,h,u,f,d,g,x,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/ks.setFromMatrixColumn(t,0).length(),r=1/ks.setFromMatrixColumn(t,1).length(),o=1/ks.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=o*h,d=o*u,g=a*h,x=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=d+g*l,e[5]=f-x*l,e[9]=-a*c,e[2]=x-f*l,e[6]=g+d*l,e[10]=o*c}else if(t.order==="YXZ"){let f=c*h,d=c*u,g=l*h,x=l*u;e[0]=f+x*a,e[4]=g*a-d,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-g,e[6]=x+f*a,e[10]=o*c}else if(t.order==="ZXY"){let f=c*h,d=c*u,g=l*h,x=l*u;e[0]=f-x*a,e[4]=-o*u,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*h,e[9]=x-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let f=o*h,d=o*u,g=a*h,x=a*u;e[0]=c*h,e[4]=g*l-d,e[8]=f*l+x,e[1]=c*u,e[5]=x*l+f,e[9]=d*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let f=o*c,d=o*l,g=a*c,x=a*l;e[0]=c*h,e[4]=x-f*u,e[8]=g*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=d*u+g,e[10]=f-x*u}else if(t.order==="XZY"){let f=o*c,d=o*l,g=a*c,x=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+x,e[5]=o*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=a*h,e[10]=x*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(up,t,fp)}lookAt(t,e,n){let s=this.elements;return Dn.subVectors(t,e),Dn.lengthSq()===0&&(Dn.z=1),Dn.normalize(),qi.crossVectors(n,Dn),qi.lengthSq()===0&&(Math.abs(n.z)===1?Dn.x+=1e-4:Dn.z+=1e-4,Dn.normalize(),qi.crossVectors(n,Dn)),qi.normalize(),vo.crossVectors(Dn,qi),s[0]=qi.x,s[4]=vo.x,s[8]=Dn.x,s[1]=qi.y,s[5]=vo.y,s[9]=Dn.y,s[2]=qi.z,s[6]=vo.z,s[10]=Dn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],x=n[6],m=n[10],p=n[14],b=n[3],M=n[7],_=n[11],I=n[15],S=s[0],R=s[4],w=s[8],v=s[12],y=s[1],A=s[5],z=s[9],U=s[13],N=s[2],X=s[6],G=s[10],nt=s[14],W=s[3],V=s[7],$=s[11],at=s[15];return r[0]=o*S+a*y+c*N+l*W,r[4]=o*R+a*A+c*X+l*V,r[8]=o*w+a*z+c*G+l*$,r[12]=o*v+a*U+c*nt+l*at,r[1]=h*S+u*y+f*N+d*W,r[5]=h*R+u*A+f*X+d*V,r[9]=h*w+u*z+f*G+d*$,r[13]=h*v+u*U+f*nt+d*at,r[2]=g*S+x*y+m*N+p*W,r[6]=g*R+x*A+m*X+p*V,r[10]=g*w+x*z+m*G+p*$,r[14]=g*v+x*U+m*nt+p*at,r[3]=b*S+M*y+_*N+I*W,r[7]=b*R+M*A+_*X+I*V,r[11]=b*w+M*z+_*G+I*$,r[15]=b*v+M*U+_*nt+I*at,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],x=t[7],m=t[11],p=t[15];return g*(+r*c*u-s*l*u-r*a*f+n*l*f+s*a*d-n*c*d)+x*(+e*c*d-e*l*f+r*o*f-s*o*d+s*l*h-r*c*h)+m*(+e*l*u-e*a*d-r*o*u+n*o*d+r*a*h-n*l*h)+p*(-s*a*h-e*c*u+e*a*f+s*o*u-n*o*f+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],x=t[13],m=t[14],p=t[15],b=u*m*l-x*f*l+x*c*d-a*m*d-u*c*p+a*f*p,M=g*f*l-h*m*l-g*c*d+o*m*d+h*c*p-o*f*p,_=h*x*l-g*u*l+g*a*d-o*x*d-h*a*p+o*u*p,I=g*u*c-h*x*c-g*a*f+o*x*f+h*a*m-o*u*m,S=e*b+n*M+s*_+r*I;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/S;return t[0]=b*R,t[1]=(x*f*r-u*m*r-x*s*d+n*m*d+u*s*p-n*f*p)*R,t[2]=(a*m*r-x*c*r+x*s*l-n*m*l-a*s*p+n*c*p)*R,t[3]=(u*c*r-a*f*r-u*s*l+n*f*l+a*s*d-n*c*d)*R,t[4]=M*R,t[5]=(h*m*r-g*f*r+g*s*d-e*m*d-h*s*p+e*f*p)*R,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*p-e*c*p)*R,t[7]=(o*f*r-h*c*r+h*s*l-e*f*l-o*s*d+e*c*d)*R,t[8]=_*R,t[9]=(g*u*r-h*x*r-g*n*d+e*x*d+h*n*p-e*u*p)*R,t[10]=(o*x*r-g*a*r+g*n*l-e*x*l-o*n*p+e*a*p)*R,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*d-e*a*d)*R,t[12]=I*R,t[13]=(h*x*s-g*u*s+g*n*f-e*x*f-h*n*m+e*u*m)*R,t[14]=(g*a*s-o*x*s-g*n*c+e*x*c+o*n*m-e*a*m)*R,t[15]=(o*u*s-h*a*s+h*n*c-e*u*c-o*n*f+e*a*f)*R,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,f=r*l,d=r*h,g=r*u,x=o*h,m=o*u,p=a*u,b=c*l,M=c*h,_=c*u,I=n.x,S=n.y,R=n.z;return s[0]=(1-(x+p))*I,s[1]=(d+_)*I,s[2]=(g-M)*I,s[3]=0,s[4]=(d-_)*S,s[5]=(1-(f+p))*S,s[6]=(m+b)*S,s[7]=0,s[8]=(g+M)*R,s[9]=(m-b)*R,s[10]=(1-(f+x))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=ks.set(s[0],s[1],s[2]).length(),o=ks.set(s[4],s[5],s[6]).length(),a=ks.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],$n.copy(this);let l=1/r,h=1/o,u=1/a;return $n.elements[0]*=l,$n.elements[1]*=l,$n.elements[2]*=l,$n.elements[4]*=h,$n.elements[5]*=h,$n.elements[6]*=h,$n.elements[8]*=u,$n.elements[9]*=u,$n.elements[10]*=u,e.setFromRotationMatrix($n),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Ti){let c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),d,g;if(a===Ti)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Ko)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Ti){let c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(o-r),f=(e+t)*l,d=(n+s)*h,g,x;if(a===Ti)g=(o+r)*u,x=-2*u;else if(a===Ko)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ks=new L,$n=new Re,up=new L(0,0,0),fp=new L(1,1,1),qi=new L,vo=new L,Dn=new L,ru=new Re,ou=new is,li=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(rn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-rn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(rn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-rn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(rn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-rn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ru.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ru,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ou.setFromEuler(this),this.setFromQuaternion(ou,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};li.DEFAULT_ORDER="XYZ";var na=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},dp=0,au=new L,Vs=new is,vi=new Re,bo=new L,Ur=new L,pp=new L,mp=new is,cu=new L(1,0,0),lu=new L(0,1,0),hu=new L(0,0,1),uu={type:"added"},gp={type:"removed"},Gs={type:"childadded",child:null},lc={type:"childremoved",child:null},Ne=class i extends ns{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dp++}),this.uuid=Si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new L,e=new li,n=new is,s=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Re},normalMatrix:{value:new oe}}),this.matrix=new Re,this.matrixWorld=new Re,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new na,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Vs.setFromAxisAngle(t,e),this.quaternion.multiply(Vs),this}rotateOnWorldAxis(t,e){return Vs.setFromAxisAngle(t,e),this.quaternion.premultiply(Vs),this}rotateX(t){return this.rotateOnAxis(cu,t)}rotateY(t){return this.rotateOnAxis(lu,t)}rotateZ(t){return this.rotateOnAxis(hu,t)}translateOnAxis(t,e){return au.copy(t).applyQuaternion(this.quaternion),this.position.add(au.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(cu,t)}translateY(t){return this.translateOnAxis(lu,t)}translateZ(t){return this.translateOnAxis(hu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(vi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?bo.copy(t):bo.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ur.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vi.lookAt(Ur,bo,this.up):vi.lookAt(bo,Ur,this.up),this.quaternion.setFromRotationMatrix(vi),s&&(vi.extractRotation(s.matrixWorld),Vs.setFromRotationMatrix(vi),this.quaternion.premultiply(Vs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(uu),Gs.child=t,this.dispatchEvent(Gs),Gs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(gp),lc.child=t,this.dispatchEvent(lc),lc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),vi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),vi.multiply(t.parent.matrixWorld)),t.applyMatrix4(vi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(uu),Gs.child=t,this.dispatchEvent(Gs),Gs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ur,t,pp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ur,mp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Ne.DEFAULT_UP=new L(0,1,0);Ne.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Kn=new L,bi=new L,hc=new L,Mi=new L,Ws=new L,Xs=new L,fu=new L,uc=new L,fc=new L,dc=new L,pc=new Ve,mc=new Ve,gc=new Ve,$i=class i{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Kn.subVectors(t,e),s.cross(Kn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Kn.subVectors(s,e),bi.subVectors(n,e),hc.subVectors(t,e);let o=Kn.dot(Kn),a=Kn.dot(bi),c=Kn.dot(hc),l=bi.dot(bi),h=bi.dot(hc),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(l*c-a*h)*f,g=(o*h-a*c)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Mi)===null?!1:Mi.x>=0&&Mi.y>=0&&Mi.x+Mi.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,Mi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Mi.x),c.addScaledVector(o,Mi.y),c.addScaledVector(a,Mi.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return pc.setScalar(0),mc.setScalar(0),gc.setScalar(0),pc.fromBufferAttribute(t,e),mc.fromBufferAttribute(t,n),gc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(pc,r.x),o.addScaledVector(mc,r.y),o.addScaledVector(gc,r.z),o}static isFrontFacing(t,e,n,s){return Kn.subVectors(n,e),bi.subVectors(t,e),Kn.cross(bi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Kn.subVectors(this.c,this.b),bi.subVectors(this.a,this.b),Kn.cross(bi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Ws.subVectors(s,n),Xs.subVectors(r,n),uc.subVectors(t,n);let c=Ws.dot(uc),l=Xs.dot(uc);if(c<=0&&l<=0)return e.copy(n);fc.subVectors(t,s);let h=Ws.dot(fc),u=Xs.dot(fc);if(h>=0&&u<=h)return e.copy(s);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Ws,o);dc.subVectors(t,r);let d=Ws.dot(dc),g=Xs.dot(dc);if(g>=0&&d<=g)return e.copy(r);let x=d*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Xs,a);let m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return fu.subVectors(r,s),a=(u-h)/(u-h+(d-g)),e.copy(s).addScaledVector(fu,a);let p=1/(m+x+f);return o=x*p,a=f*p,e.copy(n).addScaledVector(Ws,o).addScaledVector(Xs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},gf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yi={h:0,s:0,l:0},Mo={h:0,s:0,l:0};function xc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var At=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=We){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ye.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ye.workingColorSpace){return this.r=t,this.g=e,this.b=n,ye.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ye.workingColorSpace){if(t=ip(t,1),e=rn(e,0,1),n=rn(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=xc(o,r,t+1/3),this.g=xc(o,r,t),this.b=xc(o,r,t-1/3)}return ye.toWorkingColorSpace(this,s),this}setStyle(t,e=We){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=We){let n=gf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ai(t.r),this.g=Ai(t.g),this.b=Ai(t.b),this}copyLinearToSRGB(t){return this.r=sr(t.r),this.g=sr(t.g),this.b=sr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=We){return ye.fromWorkingColorSpace(pn.copy(this),t),Math.round(rn(pn.r*255,0,255))*65536+Math.round(rn(pn.g*255,0,255))*256+Math.round(rn(pn.b*255,0,255))}getHexString(t=We){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ye.workingColorSpace){ye.fromWorkingColorSpace(pn.copy(this),e);let n=pn.r,s=pn.g,r=pn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ye.workingColorSpace){return ye.fromWorkingColorSpace(pn.copy(this),e),t.r=pn.r,t.g=pn.g,t.b=pn.b,t}getStyle(t=We){ye.fromWorkingColorSpace(pn.copy(this),t);let e=pn.r,n=pn.g,s=pn.b;return t!==We?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Yi),this.setHSL(Yi.h+t,Yi.s+e,Yi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Yi),t.getHSL(Mo);let n=tc(Yi.h,Mo.h,e),s=tc(Yi.s,Mo.s,e),r=tc(Yi.l,Mo.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},pn=new At;At.NAMES=gf;var xp=0,Li=class extends ns{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xp++}),this.uuid=Si(),this.name="",this.blending=ji,this.side=es,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pc,this.blendDst=Dc,this.blendEquation=xs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new At(0,0,0),this.blendAlpha=0,this.depthFunc=or,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$h,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zs,this.stencilZFail=zs,this.stencilZPass=zs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ji&&(n.blending=this.blending),this.side!==es&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Pc&&(n.blendSrc=this.blendSrc),this.blendDst!==Dc&&(n.blendDst=this.blendDst),this.blendEquation!==xs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==or&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$h&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==zs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==zs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Ke=class extends Li{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new li,this.combine=ef,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ye=new L,Eo=new lt,Ze=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=xl,this.updateRanges=[],this.gpuType=ci,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Eo.fromBufferAttribute(this,e),Eo.applyMatrix3(t),this.setXY(e,Eo.x,Eo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.applyMatrix3(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.applyMatrix4(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.applyNormalMatrix(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.transformDirection(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=oi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Se(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=oi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=oi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=oi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=oi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),s=Se(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),s=Se(s,this.array),r=Se(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==xl&&(t.usage=this.usage),t}};var ia=class extends Ze{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var sa=class extends Ze{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ae=class extends Ze{constructor(t,e,n){super(new Float32Array(t),e,n)}},_p=0,kn=new Re,_c=new Ne,qs=new L,Un=new Ii,Nr=new Ii,sn=new L,ze=class i extends ns{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_p++}),this.uuid=Si(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(mf(t)?sa:ia)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new oe().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return kn.makeRotationFromQuaternion(t),this.applyMatrix4(kn),this}rotateX(t){return kn.makeRotationX(t),this.applyMatrix4(kn),this}rotateY(t){return kn.makeRotationY(t),this.applyMatrix4(kn),this}rotateZ(t){return kn.makeRotationZ(t),this.applyMatrix4(kn),this}translate(t,e,n){return kn.makeTranslation(t,e,n),this.applyMatrix4(kn),this}scale(t,e,n){return kn.makeScale(t,e,n),this.applyMatrix4(kn),this}lookAt(t){return _c.lookAt(t),_c.updateMatrix(),this.applyMatrix4(_c.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qs).negate(),this.translate(qs.x,qs.y,qs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ae(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ii);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Un.setFromBufferAttribute(r),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,Un.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,Un.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(Un.min),this.boundingBox.expandByPoint(Un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ss);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){let n=this.boundingSphere.center;if(Un.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Nr.setFromBufferAttribute(a),this.morphTargetsRelative?(sn.addVectors(Un.min,Nr.min),Un.expandByPoint(sn),sn.addVectors(Un.max,Nr.max),Un.expandByPoint(sn)):(Un.expandByPoint(Nr.min),Un.expandByPoint(Nr.max))}Un.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)sn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(sn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)sn.fromBufferAttribute(a,l),c&&(qs.fromBufferAttribute(t,l),sn.add(qs)),s=Math.max(s,n.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ze(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let w=0;w<n.count;w++)a[w]=new L,c[w]=new L;let l=new L,h=new L,u=new L,f=new lt,d=new lt,g=new lt,x=new L,m=new L;function p(w,v,y){l.fromBufferAttribute(n,w),h.fromBufferAttribute(n,v),u.fromBufferAttribute(n,y),f.fromBufferAttribute(r,w),d.fromBufferAttribute(r,v),g.fromBufferAttribute(r,y),h.sub(l),u.sub(l),d.sub(f),g.sub(f);let A=1/(d.x*g.y-g.x*d.y);isFinite(A)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(A),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(A),a[w].add(x),a[v].add(x),a[y].add(x),c[w].add(m),c[v].add(m),c[y].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let w=0,v=b.length;w<v;++w){let y=b[w],A=y.start,z=y.count;for(let U=A,N=A+z;U<N;U+=3)p(t.getX(U+0),t.getX(U+1),t.getX(U+2))}let M=new L,_=new L,I=new L,S=new L;function R(w){I.fromBufferAttribute(s,w),S.copy(I);let v=a[w];M.copy(v),M.sub(I.multiplyScalar(I.dot(v))).normalize(),_.crossVectors(S,v);let A=_.dot(c[w])<0?-1:1;o.setXYZW(w,M.x,M.y,M.z,A)}for(let w=0,v=b.length;w<v;++w){let y=b[w],A=y.start,z=y.count;for(let U=A,N=A+z;U<N;U+=3)R(t.getX(U+0)),R(t.getX(U+1)),R(t.getX(U+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ze(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new L,r=new L,o=new L,a=new L,c=new L,l=new L,h=new L,u=new L;if(t)for(let f=0,d=t.count;f<d;f+=3){let g=t.getX(f+0),x=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)sn.fromBufferAttribute(t,e),sn.normalize(),t.setXYZ(e,sn.x,sn.y,sn.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h),d=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?d=c[x]*a.data.stride+a.offset:d=c[x]*h;for(let p=0;p<h;p++)f[g++]=l[d++]}return new Ze(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let f=l[h],d=t(f,n);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let d=l[u];h.push(d.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},du=new Re,fs=new ea,wo=new ss,pu=new L,To=new L,So=new L,Ao=new L,yc=new L,Ro=new L,mu=new L,Co=new L,Y=class extends Ne{constructor(t=new ze,e=new Ke){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Ro.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(yc.fromBufferAttribute(u,t),o?Ro.addScaledVector(yc,h):Ro.addScaledVector(yc.sub(e),h))}e.add(Ro)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),wo.copy(n.boundingSphere),wo.applyMatrix4(r),fs.copy(t.ray).recast(t.near),!(wo.containsPoint(fs.origin)===!1&&(fs.intersectSphere(wo,pu)===null||fs.origin.distanceToSquared(pu)>(t.far-t.near)**2))&&(du.copy(r).invert(),fs.copy(t.ray).applyMatrix4(du),!(n.boundingBox!==null&&fs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,fs)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=o[m.materialIndex],b=Math.max(m.start,d.start),M=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let _=b,I=M;_<I;_+=3){let S=a.getX(_),R=a.getX(_+1),w=a.getX(_+2);s=Io(this,p,t,n,l,h,u,S,R,w),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let b=a.getX(m),M=a.getX(m+1),_=a.getX(m+2);s=Io(this,o,t,n,l,h,u,b,M,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=o[m.materialIndex],b=Math.max(m.start,d.start),M=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let _=b,I=M;_<I;_+=3){let S=_,R=_+1,w=_+2;s=Io(this,p,t,n,l,h,u,S,R,w),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(c.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let b=m,M=m+1,_=m+2;s=Io(this,o,t,n,l,h,u,b,M,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function yp(i,t,e,n,s,r,o,a){let c;if(t.side===on?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===es,a),c===null)return null;Co.copy(a),Co.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Co);return l<e.near||l>e.far?null:{distance:l,point:Co.clone(),object:i}}function Io(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,To),i.getVertexPosition(c,So),i.getVertexPosition(l,Ao);let h=yp(i,t,e,n,To,So,Ao,mu);if(h){let u=new L;$i.getBarycoord(mu,To,So,Ao,u),s&&(h.uv=$i.getInterpolatedAttribute(s,a,c,l,u,new lt)),r&&(h.uv1=$i.getInterpolatedAttribute(r,a,c,l,u,new lt)),o&&(h.normal=$i.getInterpolatedAttribute(o,a,c,l,u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new L,materialIndex:0};$i.getNormal(To,So,Ao,f.normal),h.face=f,h.barycoord=u}return h}var je=class i extends ze{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],f=0,d=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ae(l,3)),this.setAttribute("normal",new ae(h,3)),this.setAttribute("uv",new ae(u,2));function g(x,m,p,b,M,_,I,S,R,w,v){let y=_/R,A=I/w,z=_/2,U=I/2,N=S/2,X=R+1,G=w+1,nt=0,W=0,V=new L;for(let $=0;$<G;$++){let at=$*A-U;for(let _t=0;_t<X;_t++){let j=_t*y-z;V[x]=j*b,V[m]=at*M,V[p]=N,l.push(V.x,V.y,V.z),V[x]=0,V[m]=0,V[p]=S>0?1:-1,h.push(V.x,V.y,V.z),u.push(_t/R),u.push(1-$/w),nt+=1}}for(let $=0;$<w;$++)for(let at=0;at<R;at++){let _t=f+at+X*$,j=f+at+X*($+1),F=f+(at+1)+X*($+1),K=f+(at+1)+X*$;c.push(_t,j,K),c.push(j,F,K),W+=6}a.addGroup(d,W,v),d+=W,f+=nt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function ur(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function vn(i){let t={};for(let e=0;e<i.length;e++){let n=ur(i[e]);for(let s in n)t[s]=n[s]}return t}function vp(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function xf(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ye.workingColorSpace}var bp={clone:ur,merge:vn},Mp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ep=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,An=class extends Li{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Mp,this.fragmentShader=Ep,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ur(t.uniforms),this.uniformsGroups=vp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},ra=class extends Ne{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Re,this.projectionMatrix=new Re,this.projectionMatrixInverse=new Re,this.coordinateSystem=Ti}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Zi=new L,gu=new lt,xu=new lt,bn=class extends ra{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=_l*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Qa*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return _l*2*Math.atan(Math.tan(Qa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Zi.x,Zi.y).multiplyScalar(-t/Zi.z),Zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Zi.x,Zi.y).multiplyScalar(-t/Zi.z)}getViewSize(t,e){return this.getViewBounds(t,gu,xu),e.subVectors(xu,gu)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Qa*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Ys=-90,Zs=1,Ml=class extends Ne{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new bn(Ys,Zs,t,e);s.layers=this.layers,this.add(s);let r=new bn(Ys,Zs,t,e);r.layers=this.layers,this.add(r);let o=new bn(Ys,Zs,t,e);o.layers=this.layers,this.add(o);let a=new bn(Ys,Zs,t,e);a.layers=this.layers,this.add(a);let c=new bn(Ys,Zs,t,e);c.layers=this.layers,this.add(c);let l=new bn(Ys,Zs,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===Ti)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ko)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},oa=class extends Sn{constructor(t,e,n,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:ar,super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},El=class extends Ci{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new oa(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ai}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new je(5,5,5),r=new An({name:"CubemapFromEquirect",uniforms:ur(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:on,blending:Ki});r.uniforms.tEquirect.value=e;let o=new Y(s,r),a=e.minFilter;return e.minFilter===vs&&(e.minFilter=ai),new Ml(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},vc=new L,wp=new L,Tp=new oe,wi=class{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=vc.subVectors(n,e).cross(wp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(vc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Tp.getNormalMatrix(t),s=this.coplanarPoint(vc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},ds=new ss,Lo=new L,Yr=class{constructor(t=new wi,e=new wi,n=new wi,s=new wi,r=new wi,o=new wi){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ti){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],f=s[7],d=s[8],g=s[9],x=s[10],m=s[11],p=s[12],b=s[13],M=s[14],_=s[15];if(n[0].setComponents(c-r,f-l,m-d,_-p).normalize(),n[1].setComponents(c+r,f+l,m+d,_+p).normalize(),n[2].setComponents(c+o,f+h,m+g,_+b).normalize(),n[3].setComponents(c-o,f-h,m-g,_-b).normalize(),n[4].setComponents(c-a,f-u,m-x,_-M).normalize(),e===Ti)n[5].setComponents(c+a,f+u,m+x,_+M).normalize();else if(e===Ko)n[5].setComponents(a,u,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ds.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ds.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ds)}intersectsSprite(t){return ds.center.set(0,0,0),ds.radius=.7071067811865476,ds.applyMatrix4(t.matrixWorld),this.intersectsSphere(ds)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Lo.x=s.normal.x>0?t.max.x:t.min.x,Lo.y=s.normal.y>0?t.max.y:t.min.y,Lo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Lo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function _f(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Sp(i){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,u=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){let g=u[f],x=u[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,u[f]=x)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){let x=u[d];i.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var mn=class i extends ze{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,f=e/c,d=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let b=p*f-o;for(let M=0;M<l;M++){let _=M*u-r;g.push(_,-b,0),x.push(0,0,1),m.push(M/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let b=0;b<a;b++){let M=b+l*p,_=b+l*(p+1),I=b+1+l*(p+1),S=b+1+l*p;d.push(M,_,S),d.push(_,I,S)}this.setIndex(d),this.setAttribute("position",new ae(g,3)),this.setAttribute("normal",new ae(x,3)),this.setAttribute("uv",new ae(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Ap=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Rp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Cp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ip=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Pp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Dp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Up=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Np=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,zp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Fp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Op=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Hp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,kp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Vp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Gp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Yp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Zp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Jp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,$p=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Kp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,jp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Qp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,t0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,e0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,n0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,i0="gl_FragColor = linearToOutputTexel( gl_FragColor );",s0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,r0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,o0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,a0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,c0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,l0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,h0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,u0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,f0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,d0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,p0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,m0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,g0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,x0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,y0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,v0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,b0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,M0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,E0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,w0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,T0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,S0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,A0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,R0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,C0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,I0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,L0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,P0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,D0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,U0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,N0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,z0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,F0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,O0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,B0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,H0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,k0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,V0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,G0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,W0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,X0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,q0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Y0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Z0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,J0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,$0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,K0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,j0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Q0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,em=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,nm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,im=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,om=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,am=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,lm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,hm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,um=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,fm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,pm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,gm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_m=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ym=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,vm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,bm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Mm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Em=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,wm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Tm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Sm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Am=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Im=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Dm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Um=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Nm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,zm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Fm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Om=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Bm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Hm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,km=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Xm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ym=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Zm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$m=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Km=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,eg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ng=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ig=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,rg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ue={alphahash_fragment:Ap,alphahash_pars_fragment:Rp,alphamap_fragment:Cp,alphamap_pars_fragment:Ip,alphatest_fragment:Lp,alphatest_pars_fragment:Pp,aomap_fragment:Dp,aomap_pars_fragment:Up,batching_pars_vertex:Np,batching_vertex:zp,begin_vertex:Fp,beginnormal_vertex:Op,bsdfs:Bp,iridescence_fragment:Hp,bumpmap_pars_fragment:kp,clipping_planes_fragment:Vp,clipping_planes_pars_fragment:Gp,clipping_planes_pars_vertex:Wp,clipping_planes_vertex:Xp,color_fragment:qp,color_pars_fragment:Yp,color_pars_vertex:Zp,color_vertex:Jp,common:$p,cube_uv_reflection_fragment:Kp,defaultnormal_vertex:jp,displacementmap_pars_vertex:Qp,displacementmap_vertex:t0,emissivemap_fragment:e0,emissivemap_pars_fragment:n0,colorspace_fragment:i0,colorspace_pars_fragment:s0,envmap_fragment:r0,envmap_common_pars_fragment:o0,envmap_pars_fragment:a0,envmap_pars_vertex:c0,envmap_physical_pars_fragment:y0,envmap_vertex:l0,fog_vertex:h0,fog_pars_vertex:u0,fog_fragment:f0,fog_pars_fragment:d0,gradientmap_pars_fragment:p0,lightmap_pars_fragment:m0,lights_lambert_fragment:g0,lights_lambert_pars_fragment:x0,lights_pars_begin:_0,lights_toon_fragment:v0,lights_toon_pars_fragment:b0,lights_phong_fragment:M0,lights_phong_pars_fragment:E0,lights_physical_fragment:w0,lights_physical_pars_fragment:T0,lights_fragment_begin:S0,lights_fragment_maps:A0,lights_fragment_end:R0,logdepthbuf_fragment:C0,logdepthbuf_pars_fragment:I0,logdepthbuf_pars_vertex:L0,logdepthbuf_vertex:P0,map_fragment:D0,map_pars_fragment:U0,map_particle_fragment:N0,map_particle_pars_fragment:z0,metalnessmap_fragment:F0,metalnessmap_pars_fragment:O0,morphinstance_vertex:B0,morphcolor_vertex:H0,morphnormal_vertex:k0,morphtarget_pars_vertex:V0,morphtarget_vertex:G0,normal_fragment_begin:W0,normal_fragment_maps:X0,normal_pars_fragment:q0,normal_pars_vertex:Y0,normal_vertex:Z0,normalmap_pars_fragment:J0,clearcoat_normal_fragment_begin:$0,clearcoat_normal_fragment_maps:K0,clearcoat_pars_fragment:j0,iridescence_pars_fragment:Q0,opaque_fragment:tm,packing:em,premultiplied_alpha_fragment:nm,project_vertex:im,dithering_fragment:sm,dithering_pars_fragment:rm,roughnessmap_fragment:om,roughnessmap_pars_fragment:am,shadowmap_pars_fragment:cm,shadowmap_pars_vertex:lm,shadowmap_vertex:hm,shadowmask_pars_fragment:um,skinbase_vertex:fm,skinning_pars_vertex:dm,skinning_vertex:pm,skinnormal_vertex:mm,specularmap_fragment:gm,specularmap_pars_fragment:xm,tonemapping_fragment:_m,tonemapping_pars_fragment:ym,transmission_fragment:vm,transmission_pars_fragment:bm,uv_pars_fragment:Mm,uv_pars_vertex:Em,uv_vertex:wm,worldpos_vertex:Tm,background_vert:Sm,background_frag:Am,backgroundCube_vert:Rm,backgroundCube_frag:Cm,cube_vert:Im,cube_frag:Lm,depth_vert:Pm,depth_frag:Dm,distanceRGBA_vert:Um,distanceRGBA_frag:Nm,equirect_vert:zm,equirect_frag:Fm,linedashed_vert:Om,linedashed_frag:Bm,meshbasic_vert:Hm,meshbasic_frag:km,meshlambert_vert:Vm,meshlambert_frag:Gm,meshmatcap_vert:Wm,meshmatcap_frag:Xm,meshnormal_vert:qm,meshnormal_frag:Ym,meshphong_vert:Zm,meshphong_frag:Jm,meshphysical_vert:$m,meshphysical_frag:Km,meshtoon_vert:jm,meshtoon_frag:Qm,points_vert:tg,points_frag:eg,shadow_vert:ng,shadow_frag:ig,sprite_vert:sg,sprite_frag:rg},St={common:{diffuse:{value:new At(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new oe}},envmap:{envMap:{value:null},envMapRotation:{value:new oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new oe},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new At(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new At(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0},uvTransform:{value:new oe}},sprite:{diffuse:{value:new At(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}}},ri={basic:{uniforms:vn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.fog]),vertexShader:ue.meshbasic_vert,fragmentShader:ue.meshbasic_frag},lambert:{uniforms:vn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new At(0)}}]),vertexShader:ue.meshlambert_vert,fragmentShader:ue.meshlambert_frag},phong:{uniforms:vn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new At(0)},specular:{value:new At(1118481)},shininess:{value:30}}]),vertexShader:ue.meshphong_vert,fragmentShader:ue.meshphong_frag},standard:{uniforms:vn([St.common,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.roughnessmap,St.metalnessmap,St.fog,St.lights,{emissive:{value:new At(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag},toon:{uniforms:vn([St.common,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.gradientmap,St.fog,St.lights,{emissive:{value:new At(0)}}]),vertexShader:ue.meshtoon_vert,fragmentShader:ue.meshtoon_frag},matcap:{uniforms:vn([St.common,St.bumpmap,St.normalmap,St.displacementmap,St.fog,{matcap:{value:null}}]),vertexShader:ue.meshmatcap_vert,fragmentShader:ue.meshmatcap_frag},points:{uniforms:vn([St.points,St.fog]),vertexShader:ue.points_vert,fragmentShader:ue.points_frag},dashed:{uniforms:vn([St.common,St.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ue.linedashed_vert,fragmentShader:ue.linedashed_frag},depth:{uniforms:vn([St.common,St.displacementmap]),vertexShader:ue.depth_vert,fragmentShader:ue.depth_frag},normal:{uniforms:vn([St.common,St.bumpmap,St.normalmap,St.displacementmap,{opacity:{value:1}}]),vertexShader:ue.meshnormal_vert,fragmentShader:ue.meshnormal_frag},sprite:{uniforms:vn([St.sprite,St.fog]),vertexShader:ue.sprite_vert,fragmentShader:ue.sprite_frag},background:{uniforms:{uvTransform:{value:new oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ue.background_vert,fragmentShader:ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new oe}},vertexShader:ue.backgroundCube_vert,fragmentShader:ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ue.cube_vert,fragmentShader:ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ue.equirect_vert,fragmentShader:ue.equirect_frag},distanceRGBA:{uniforms:vn([St.common,St.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ue.distanceRGBA_vert,fragmentShader:ue.distanceRGBA_frag},shadow:{uniforms:vn([St.lights,St.fog,{color:{value:new At(0)},opacity:{value:1}}]),vertexShader:ue.shadow_vert,fragmentShader:ue.shadow_frag}};ri.physical={uniforms:vn([ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new oe},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new oe},sheen:{value:0},sheenColor:{value:new At(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new oe},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new oe},attenuationDistance:{value:0},attenuationColor:{value:new At(0)},specularColor:{value:new At(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new oe},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new oe}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag};var Po={r:0,b:0,g:0},ps=new li,og=new Re;function ag(i,t,e,n,s,r,o){let a=new At(0),c=r===!0?0:1,l,h,u=null,f=0,d=null;function g(b){let M=b.isScene===!0?b.background:null;return M&&M.isTexture&&(M=(b.backgroundBlurriness>0?e:t).get(M)),M}function x(b){let M=!1,_=g(b);_===null?p(a,c):_&&_.isColor&&(p(_,1),M=!0);let I=i.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(b,M){let _=g(M);_&&(_.isCubeTexture||_.mapping===Ta)?(h===void 0&&(h=new Y(new je(1,1,1),new An({name:"BackgroundCubeMaterial",uniforms:ur(ri.backgroundCube.uniforms),vertexShader:ri.backgroundCube.vertexShader,fragmentShader:ri.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,S,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ps.copy(M.backgroundRotation),ps.x*=-1,ps.y*=-1,ps.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(ps.y*=-1,ps.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(og.makeRotationFromEuler(ps)),h.material.toneMapped=ye.getTransfer(_.colorSpace)!==Te,(u!==_||f!==_.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=_,f=_.version,d=i.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Y(new mn(2,2),new An({name:"BackgroundMaterial",uniforms:ur(ri.background.uniforms),vertexShader:ri.background.vertexShader,fragmentShader:ri.background.fragmentShader,side:es,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=ye.getTransfer(_.colorSpace)!==Te,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||f!==_.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=_,f=_.version,d=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function p(b,M){b.getRGB(Po,xf(i)),n.buffers.color.setClear(Po.r,Po.g,Po.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(b,M=1){a.set(b),c=M,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,p(a,c)},render:x,addToRenderList:m}}function cg(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(y,A,z,U,N){let X=!1,G=u(U,z,A);r!==G&&(r=G,l(r.object)),X=d(y,U,z,N),X&&g(y,U,z,N),N!==null&&t.update(N,i.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,_(y,A,z,U),N!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function c(){return i.createVertexArray()}function l(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function u(y,A,z){let U=z.wireframe===!0,N=n[y.id];N===void 0&&(N={},n[y.id]=N);let X=N[A.id];X===void 0&&(X={},N[A.id]=X);let G=X[U];return G===void 0&&(G=f(c()),X[U]=G),G}function f(y){let A=[],z=[],U=[];for(let N=0;N<e;N++)A[N]=0,z[N]=0,U[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:z,attributeDivisors:U,object:y,attributes:{},index:null}}function d(y,A,z,U){let N=r.attributes,X=A.attributes,G=0,nt=z.getAttributes();for(let W in nt)if(nt[W].location>=0){let $=N[W],at=X[W];if(at===void 0&&(W==="instanceMatrix"&&y.instanceMatrix&&(at=y.instanceMatrix),W==="instanceColor"&&y.instanceColor&&(at=y.instanceColor)),$===void 0||$.attribute!==at||at&&$.data!==at.data)return!0;G++}return r.attributesNum!==G||r.index!==U}function g(y,A,z,U){let N={},X=A.attributes,G=0,nt=z.getAttributes();for(let W in nt)if(nt[W].location>=0){let $=X[W];$===void 0&&(W==="instanceMatrix"&&y.instanceMatrix&&($=y.instanceMatrix),W==="instanceColor"&&y.instanceColor&&($=y.instanceColor));let at={};at.attribute=$,$&&$.data&&(at.data=$.data),N[W]=at,G++}r.attributes=N,r.attributesNum=G,r.index=U}function x(){let y=r.newAttributes;for(let A=0,z=y.length;A<z;A++)y[A]=0}function m(y){p(y,0)}function p(y,A){let z=r.newAttributes,U=r.enabledAttributes,N=r.attributeDivisors;z[y]=1,U[y]===0&&(i.enableVertexAttribArray(y),U[y]=1),N[y]!==A&&(i.vertexAttribDivisor(y,A),N[y]=A)}function b(){let y=r.newAttributes,A=r.enabledAttributes;for(let z=0,U=A.length;z<U;z++)A[z]!==y[z]&&(i.disableVertexAttribArray(z),A[z]=0)}function M(y,A,z,U,N,X,G){G===!0?i.vertexAttribIPointer(y,A,z,N,X):i.vertexAttribPointer(y,A,z,U,N,X)}function _(y,A,z,U){x();let N=U.attributes,X=z.getAttributes(),G=A.defaultAttributeValues;for(let nt in X){let W=X[nt];if(W.location>=0){let V=N[nt];if(V===void 0&&(nt==="instanceMatrix"&&y.instanceMatrix&&(V=y.instanceMatrix),nt==="instanceColor"&&y.instanceColor&&(V=y.instanceColor)),V!==void 0){let $=V.normalized,at=V.itemSize,_t=t.get(V);if(_t===void 0)continue;let j=_t.buffer,F=_t.type,K=_t.bytesPerElement,pt=F===i.INT||F===i.UNSIGNED_INT||V.gpuType===rh;if(V.isInterleavedBufferAttribute){let Q=V.data,ot=Q.stride,yt=V.offset;if(Q.isInstancedInterleavedBuffer){for(let Tt=0;Tt<W.locationSize;Tt++)p(W.location+Tt,Q.meshPerAttribute);y.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Tt=0;Tt<W.locationSize;Tt++)m(W.location+Tt);i.bindBuffer(i.ARRAY_BUFFER,j);for(let Tt=0;Tt<W.locationSize;Tt++)M(W.location+Tt,at/W.locationSize,F,$,ot*K,(yt+at/W.locationSize*Tt)*K,pt)}else{if(V.isInstancedBufferAttribute){for(let Q=0;Q<W.locationSize;Q++)p(W.location+Q,V.meshPerAttribute);y.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let Q=0;Q<W.locationSize;Q++)m(W.location+Q);i.bindBuffer(i.ARRAY_BUFFER,j);for(let Q=0;Q<W.locationSize;Q++)M(W.location+Q,at/W.locationSize,F,$,at*K,at/W.locationSize*Q*K,pt)}}else if(G!==void 0){let $=G[nt];if($!==void 0)switch($.length){case 2:i.vertexAttrib2fv(W.location,$);break;case 3:i.vertexAttrib3fv(W.location,$);break;case 4:i.vertexAttrib4fv(W.location,$);break;default:i.vertexAttrib1fv(W.location,$)}}}}b()}function I(){w();for(let y in n){let A=n[y];for(let z in A){let U=A[z];for(let N in U)h(U[N].object),delete U[N];delete A[z]}delete n[y]}}function S(y){if(n[y.id]===void 0)return;let A=n[y.id];for(let z in A){let U=A[z];for(let N in U)h(U[N].object),delete U[N];delete A[z]}delete n[y.id]}function R(y){for(let A in n){let z=n[A];if(z[y.id]===void 0)continue;let U=z[y.id];for(let N in U)h(U[N].object),delete U[N];delete z[y.id]}}function w(){v(),o=!0,r!==s&&(r=s,l(r.object))}function v(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:w,resetDefaultState:v,dispose:I,releaseStatesOfGeometry:S,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:m,disableUnusedAttributes:b}}function lg(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];e.update(d,n,1)}function c(l,h,u,f){if(u===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)o(l[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x]*f[x];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function hg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==jn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let w=R===no&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Ri&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==ci&&!w)}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,S=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:M,maxFragmentUniforms:_,vertexTextures:I,maxSamples:S}}function ug(i){let t=this,e=null,n=0,s=!1,r=!1,o=new wi,a=new oe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let b=r?0:n,M=b*4,_=p.clippingState||null;c.value=_,_=h(g,f,M,d);for(let I=0;I!==M;++I)_[I]=e[I];p.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let p=d+x*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,_=d;M!==x;++M,_+=4)o.copy(u[M]).applyMatrix4(b,a),o.normal.toArray(m,_),m[_+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function fg(i){let t=new WeakMap;function e(o,a){return a===kc?o.mapping=ar:a===Vc&&(o.mapping=cr),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===kc||a===Vc)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new El(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var aa=class extends ra{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},er=4,_u=[.125,.215,.35,.446,.526,.582],_s=20,bc=new aa,yu=new At,Mc=null,Ec=0,wc=0,Tc=!1,gs=(1+Math.sqrt(5))/2,Js=1/gs,vu=[new L(-gs,Js,0),new L(gs,Js,0),new L(-Js,0,gs),new L(Js,0,gs),new L(0,gs,-Js),new L(0,gs,Js),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],fr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Mc=this._renderer.getRenderTarget(),Ec=this._renderer.getActiveCubeFace(),wc=this._renderer.getActiveMipmapLevel(),Tc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Eu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Mc,Ec,wc),this._renderer.xr.enabled=Tc,t.scissorTest=!1,Do(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ar||t.mapping===cr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Mc=this._renderer.getRenderTarget(),Ec=this._renderer.getActiveCubeFace(),wc=this._renderer.getActiveMipmapLevel(),Tc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ai,minFilter:ai,generateMipmaps:!1,type:no,format:jn,colorSpace:_r,depthBuffer:!1},s=bu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bu(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=dg(r)),this._blurMaterial=pg(r,t,e)}return s}_compileMaterial(t){let e=new Y(this._lodPlanes[0],t);this._renderer.compile(e,bc)}_sceneToCubeUV(t,e,n,s){let a=new bn(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(yu),h.toneMapping=Qi,h.autoClear=!1;let d=new Ke({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1}),g=new Y(new je,d),x=!1,m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,x=!0):(d.color.copy(yu),x=!0);for(let p=0;p<6;p++){let b=p%3;b===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):b===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));let M=this._cubeSize;Do(s,b*M,p>2?M:0,M,M),h.setRenderTarget(s),x&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===ar||t.mapping===cr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Eu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mu());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Y(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;Do(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,bc)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=vu[(s-r-1)%vu.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Y(this._lodPlanes[s],l),f=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*_s-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):_s;m>_s&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${_s}`);let p=[],b=0;for(let R=0;R<_s;++R){let w=R/x,v=Math.exp(-w*w/2);p.push(v),R===0?b+=v:R<m&&(b+=2*v)}for(let R=0;R<p.length;R++)p[R]=p[R]/b;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:M}=this;f.dTheta.value=g,f.mipInt.value=M-n;let _=this._sizeLods[s],I=3*_*(s>M-er?s-M+er:0),S=4*(this._cubeSize-_);Do(e,I,S,3*_,2*_),c.setRenderTarget(e),c.render(u,bc)}};function dg(i){let t=[],e=[],n=[],s=i,r=i-er+1+_u.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let c=1/a;o>i-er?c=_u[o-i+er-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,x=3,m=2,p=1,b=new Float32Array(x*g*d),M=new Float32Array(m*g*d),_=new Float32Array(p*g*d);for(let S=0;S<d;S++){let R=S%3*2/3-1,w=S>2?0:-1,v=[R,w,0,R+2/3,w,0,R+2/3,w+1,0,R,w,0,R+2/3,w+1,0,R,w+1,0];b.set(v,x*g*S),M.set(f,m*g*S);let y=[S,S,S,S,S,S];_.set(y,p*g*S)}let I=new ze;I.setAttribute("position",new Ze(b,x)),I.setAttribute("uv",new Ze(M,m)),I.setAttribute("faceIndex",new Ze(_,p)),t.push(I),s>er&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function bu(i,t,e){let n=new Ci(i,t,e);return n.texture.mapping=Ta,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Do(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function pg(i,t,e){let n=new Float32Array(_s),s=new L(0,1,0);return new An({name:"SphericalGaussianBlur",defines:{n:_s,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:fh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function Mu(){return new An({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function Eu(){return new An({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function fh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function mg(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===kc||c===Vc,h=c===ar||c===cr;if(l||h){let u=t.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new fr(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let d=a.image;return l&&d&&d.height>0||h&&d&&s(d)?(e===null&&(e=new fr(i)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function gg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&kr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function xg(i,t,e,n){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);for(let g in f.morphAttributes){let x=f.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)t.remove(x[m])}f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function c(u){let f=u.attributes;for(let g in f)t.update(f[g],i.ARRAY_BUFFER);let d=u.morphAttributes;for(let g in d){let x=d[g];for(let m=0,p=x.length;m<p;m++)t.update(x[m],i.ARRAY_BUFFER)}}function l(u){let f=[],d=u.index,g=u.attributes.position,x=0;if(d!==null){let b=d.array;x=d.version;for(let M=0,_=b.length;M<_;M+=3){let I=b[M+0],S=b[M+1],R=b[M+2];f.push(I,S,S,R,R,I)}}else if(g!==void 0){let b=g.array;x=g.version;for(let M=0,_=b.length/3-1;M<_;M+=3){let I=M+0,S=M+1,R=M+2;f.push(I,S,S,R,R,I)}}else return;let m=new(mf(f)?sa:ia)(f,1);m.version=x;let p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function _g(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,d){i.drawElements(n,d,r,f*o),e.update(d,n,1)}function l(f,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,f*o,g),e.update(d,n,g))}function h(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,n,1)}function u(f,d,g,x){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/o,d[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,x,0,g);let p=0;for(let b=0;b<g;b++)p+=d[b]*x[b];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function yg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function vg(i,t,e){let n=new WeakMap,s=new Ve;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let v=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",v)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],M=0;d===!0&&(M=1),g===!0&&(M=2),x===!0&&(M=3);let _=a.attributes.position.count*M,I=1;_>t.maxTextureSize&&(I=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let S=new Float32Array(_*I*4*u),R=new ta(S,_,I,u);R.type=ci,R.needsUpdate=!0;let w=M*4;for(let y=0;y<u;y++){let A=m[y],z=p[y],U=b[y],N=_*I*4*y;for(let X=0;X<A.count;X++){let G=X*w;d===!0&&(s.fromBufferAttribute(A,X),S[N+G+0]=s.x,S[N+G+1]=s.y,S[N+G+2]=s.z,S[N+G+3]=0),g===!0&&(s.fromBufferAttribute(z,X),S[N+G+4]=s.x,S[N+G+5]=s.y,S[N+G+6]=s.z,S[N+G+7]=0),x===!0&&(s.fromBufferAttribute(U,X),S[N+G+8]=s.x,S[N+G+9]=s.y,S[N+G+10]=s.z,S[N+G+11]=U.itemSize===4?s.w:1)}}f={count:u,texture:R,size:new lt(_,I)},n.set(a,f),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let x=0;x<l.length;x++)d+=l[x];let g=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function bg(i,t,e,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}var ca=class extends Sn{constructor(t,e,n,s,r,o,a,c,l,h=ir){if(h!==ir&&h!==hr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ir&&(n=Es),n===void 0&&h===hr&&(n=lr),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Nn,this.minFilter=c!==void 0?c:Nn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},yf=new Sn,wu=new ca(1,1),vf=new ta,bf=new bl,Mf=new oa,Tu=[],Su=[],Au=new Float32Array(16),Ru=new Float32Array(9),Cu=new Float32Array(4);function yr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Tu[s];if(r===void 0&&(r=new Float32Array(s),Tu[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Qe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function tn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Aa(i,t){let e=Su[t];e===void 0&&(e=new Int32Array(t),Su[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Mg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Eg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Qe(e,t))return;i.uniform2fv(this.addr,t),tn(e,t)}}function wg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Qe(e,t))return;i.uniform3fv(this.addr,t),tn(e,t)}}function Tg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Qe(e,t))return;i.uniform4fv(this.addr,t),tn(e,t)}}function Sg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Qe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),tn(e,t)}else{if(Qe(e,n))return;Cu.set(n),i.uniformMatrix2fv(this.addr,!1,Cu),tn(e,n)}}function Ag(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Qe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),tn(e,t)}else{if(Qe(e,n))return;Ru.set(n),i.uniformMatrix3fv(this.addr,!1,Ru),tn(e,n)}}function Rg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Qe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),tn(e,t)}else{if(Qe(e,n))return;Au.set(n),i.uniformMatrix4fv(this.addr,!1,Au),tn(e,n)}}function Cg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Ig(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Qe(e,t))return;i.uniform2iv(this.addr,t),tn(e,t)}}function Lg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Qe(e,t))return;i.uniform3iv(this.addr,t),tn(e,t)}}function Pg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Qe(e,t))return;i.uniform4iv(this.addr,t),tn(e,t)}}function Dg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Ug(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Qe(e,t))return;i.uniform2uiv(this.addr,t),tn(e,t)}}function Ng(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Qe(e,t))return;i.uniform3uiv(this.addr,t),tn(e,t)}}function zg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Qe(e,t))return;i.uniform4uiv(this.addr,t),tn(e,t)}}function Fg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(wu.compareFunction=pf,r=wu):r=yf,e.setTexture2D(t||r,s)}function Og(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||bf,s)}function Bg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Mf,s)}function Hg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||vf,s)}function kg(i){switch(i){case 5126:return Mg;case 35664:return Eg;case 35665:return wg;case 35666:return Tg;case 35674:return Sg;case 35675:return Ag;case 35676:return Rg;case 5124:case 35670:return Cg;case 35667:case 35671:return Ig;case 35668:case 35672:return Lg;case 35669:case 35673:return Pg;case 5125:return Dg;case 36294:return Ug;case 36295:return Ng;case 36296:return zg;case 35678:case 36198:case 36298:case 36306:case 35682:return Fg;case 35679:case 36299:case 36307:return Og;case 35680:case 36300:case 36308:case 36293:return Bg;case 36289:case 36303:case 36311:case 36292:return Hg}}function Vg(i,t){i.uniform1fv(this.addr,t)}function Gg(i,t){let e=yr(t,this.size,2);i.uniform2fv(this.addr,e)}function Wg(i,t){let e=yr(t,this.size,3);i.uniform3fv(this.addr,e)}function Xg(i,t){let e=yr(t,this.size,4);i.uniform4fv(this.addr,e)}function qg(i,t){let e=yr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Yg(i,t){let e=yr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Zg(i,t){let e=yr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Jg(i,t){i.uniform1iv(this.addr,t)}function $g(i,t){i.uniform2iv(this.addr,t)}function Kg(i,t){i.uniform3iv(this.addr,t)}function jg(i,t){i.uniform4iv(this.addr,t)}function Qg(i,t){i.uniform1uiv(this.addr,t)}function tx(i,t){i.uniform2uiv(this.addr,t)}function ex(i,t){i.uniform3uiv(this.addr,t)}function nx(i,t){i.uniform4uiv(this.addr,t)}function ix(i,t,e){let n=this.cache,s=t.length,r=Aa(e,s);Qe(n,r)||(i.uniform1iv(this.addr,r),tn(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||yf,r[o])}function sx(i,t,e){let n=this.cache,s=t.length,r=Aa(e,s);Qe(n,r)||(i.uniform1iv(this.addr,r),tn(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||bf,r[o])}function rx(i,t,e){let n=this.cache,s=t.length,r=Aa(e,s);Qe(n,r)||(i.uniform1iv(this.addr,r),tn(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Mf,r[o])}function ox(i,t,e){let n=this.cache,s=t.length,r=Aa(e,s);Qe(n,r)||(i.uniform1iv(this.addr,r),tn(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||vf,r[o])}function ax(i){switch(i){case 5126:return Vg;case 35664:return Gg;case 35665:return Wg;case 35666:return Xg;case 35674:return qg;case 35675:return Yg;case 35676:return Zg;case 5124:case 35670:return Jg;case 35667:case 35671:return $g;case 35668:case 35672:return Kg;case 35669:case 35673:return jg;case 5125:return Qg;case 36294:return tx;case 36295:return ex;case 36296:return nx;case 35678:case 36198:case 36298:case 36306:case 35682:return ix;case 35679:case 36299:case 36307:return sx;case 35680:case 36300:case 36308:case 36293:return rx;case 36289:case 36303:case 36311:case 36292:return ox}}var wl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=kg(e.type)}},Tl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ax(e.type)}},Sl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Sc=/(\w+)(\])?(\[|\.)?/g;function Iu(i,t){i.seq.push(t),i.map[t.id]=t}function cx(i,t,e){let n=i.name,s=n.length;for(Sc.lastIndex=0;;){let r=Sc.exec(n),o=Sc.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Iu(e,l===void 0?new wl(a,i,t):new Tl(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Sl(a),Iu(e,u)),e=u}}}var rr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);cx(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Lu(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var lx=37297,hx=0;function ux(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Pu=new oe;function fx(i){ye._getMatrix(Pu,ye.workingColorSpace,i);let t=`mat3( ${Pu.elements.map(e=>e.toFixed(4))} )`;switch(ye.getTransfer(i)){case Sa:return[t,"LinearTransferOETF"];case Te:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Du(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+ux(i.getShaderSource(t),o)}else return s}function dx(i,t){let e=fx(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function px(i,t){let e;switch(t){case Hd:e="Linear";break;case kd:e="Reinhard";break;case Vd:e="Cineon";break;case sh:e="ACESFilmic";break;case Wd:e="AgX";break;case Xd:e="Neutral";break;case Gd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Uo=new L;function mx(){ye.getLuminanceCoefficients(Uo);let i=Uo.x.toFixed(4),t=Uo.y.toFixed(4),e=Uo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vr).join(`
`)}function xx(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function _x(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Vr(i){return i!==""}function Uu(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Nu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var yx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Al(i){return i.replace(yx,bx)}var vx=new Map;function bx(i,t){let e=ue[t];if(e===void 0){let n=vx.get(t);if(n!==void 0)e=ue[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Al(e)}var Mx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zu(i){return i.replace(Mx,Ex)}function Ex(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Fu(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function wx(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===tf?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===ih?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ei&&(t="SHADOWMAP_TYPE_VSM"),t}function Tx(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ar:case cr:t="ENVMAP_TYPE_CUBE";break;case Ta:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Sx(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===cr&&(t="ENVMAP_MODE_REFRACTION"),t}function Ax(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ef:t="ENVMAP_BLENDING_MULTIPLY";break;case Od:t="ENVMAP_BLENDING_MIX";break;case Bd:t="ENVMAP_BLENDING_ADD";break}return t}function Rx(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Cx(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=wx(e),l=Tx(e),h=Sx(e),u=Ax(e),f=Rx(e),d=gx(e),g=xx(r),x=s.createProgram(),m,p,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Vr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Vr).join(`
`),p.length>0&&(p+=`
`)):(m=[Fu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vr).join(`
`),p=[Fu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Qi?"#define TONE_MAPPING":"",e.toneMapping!==Qi?ue.tonemapping_pars_fragment:"",e.toneMapping!==Qi?px("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ue.colorspace_pars_fragment,dx("linearToOutputTexel",e.outputColorSpace),mx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Vr).join(`
`)),o=Al(o),o=Uu(o,e),o=Nu(o,e),a=Al(a),a=Uu(a,e),a=Nu(a,e),o=zu(o),a=zu(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Kh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Kh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let M=b+m+o,_=b+p+a,I=Lu(s,s.VERTEX_SHADER,M),S=Lu(s,s.FRAGMENT_SHADER,_);s.attachShader(x,I),s.attachShader(x,S),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function R(A){if(i.debug.checkShaderErrors){let z=s.getProgramInfoLog(x).trim(),U=s.getShaderInfoLog(I).trim(),N=s.getShaderInfoLog(S).trim(),X=!0,G=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,I,S);else{let nt=Du(s,I,"vertex"),W=Du(s,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+z+`
`+nt+`
`+W)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(U===""||N==="")&&(G=!1);G&&(A.diagnostics={runnable:X,programLog:z,vertexShader:{log:U,prefix:m},fragmentShader:{log:N,prefix:p}})}s.deleteShader(I),s.deleteShader(S),w=new rr(s,x),v=_x(s,x)}let w;this.getUniforms=function(){return w===void 0&&R(this),w};let v;this.getAttributes=function(){return v===void 0&&R(this),v};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(x,lx)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=hx++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=I,this.fragmentShader=S,this}var Ix=0,Rl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Cl(t),e.set(t,n)),n}},Cl=class{constructor(t){this.id=Ix++,this.code=t,this.usedTimes=0}};function Lx(i,t,e,n,s,r,o){let a=new na,c=new Rl,l=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures,d=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(v){return l.add(v),v===0?"uv":`uv${v}`}function m(v,y,A,z,U){let N=z.fog,X=U.geometry,G=v.isMeshStandardMaterial?z.environment:null,nt=(v.isMeshStandardMaterial?e:t).get(v.envMap||G),W=nt&&nt.mapping===Ta?nt.image.height:null,V=g[v.type];v.precision!==null&&(d=s.getMaxPrecision(v.precision),d!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));let $=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,at=$!==void 0?$.length:0,_t=0;X.morphAttributes.position!==void 0&&(_t=1),X.morphAttributes.normal!==void 0&&(_t=2),X.morphAttributes.color!==void 0&&(_t=3);let j,F,K,pt;if(V){let Ee=ri[V];j=Ee.vertexShader,F=Ee.fragmentShader}else j=v.vertexShader,F=v.fragmentShader,c.update(v),K=c.getVertexShaderID(v),pt=c.getFragmentShaderID(v);let Q=i.getRenderTarget(),ot=i.state.buffers.depth.getReversed(),yt=U.isInstancedMesh===!0,Tt=U.isBatchedMesh===!0,Vt=!!v.map,it=!!v.matcap,ct=!!nt,P=!!v.aoMap,Bt=!!v.lightMap,ut=!!v.bumpMap,Rt=!!v.normalMap,bt=!!v.displacementMap,$t=!!v.emissiveMap,Ft=!!v.metalnessMap,C=!!v.roughnessMap,E=v.anisotropy>0,q=v.clearcoat>0,st=v.dispersion>0,ft=v.iridescence>0,rt=v.sheen>0,Wt=v.transmission>0,Ct=E&&!!v.anisotropyMap,Ot=q&&!!v.clearcoatMap,pe=q&&!!v.clearcoatNormalMap,xt=q&&!!v.clearcoatRoughnessMap,Ht=ft&&!!v.iridescenceMap,Kt=ft&&!!v.iridescenceThicknessMap,te=rt&&!!v.sheenColorMap,kt=rt&&!!v.sheenRoughnessMap,xe=!!v.specularMap,he=!!v.specularColorMap,Le=!!v.specularIntensityMap,O=Wt&&!!v.transmissionMap,Lt=Wt&&!!v.thicknessMap,tt=!!v.gradientMap,ht=!!v.alphaMap,zt=v.alphaTest>0,Dt=!!v.alphaHash,se=!!v.extensions,ke=Qi;v.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(ke=i.toneMapping);let fn={shaderID:V,shaderType:v.type,shaderName:v.name,vertexShader:j,fragmentShader:F,defines:v.defines,customVertexShaderID:K,customFragmentShaderID:pt,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,batching:Tt,batchingColor:Tt&&U._colorsTexture!==null,instancing:yt,instancingColor:yt&&U.instanceColor!==null,instancingMorph:yt&&U.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Q===null?i.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:_r,alphaToCoverage:!!v.alphaToCoverage,map:Vt,matcap:it,envMap:ct,envMapMode:ct&&nt.mapping,envMapCubeUVHeight:W,aoMap:P,lightMap:Bt,bumpMap:ut,normalMap:Rt,displacementMap:f&&bt,emissiveMap:$t,normalMapObjectSpace:Rt&&v.normalMapType===Jd,normalMapTangentSpace:Rt&&v.normalMapType===df,metalnessMap:Ft,roughnessMap:C,anisotropy:E,anisotropyMap:Ct,clearcoat:q,clearcoatMap:Ot,clearcoatNormalMap:pe,clearcoatRoughnessMap:xt,dispersion:st,iridescence:ft,iridescenceMap:Ht,iridescenceThicknessMap:Kt,sheen:rt,sheenColorMap:te,sheenRoughnessMap:kt,specularMap:xe,specularColorMap:he,specularIntensityMap:Le,transmission:Wt,transmissionMap:O,thicknessMap:Lt,gradientMap:tt,opaque:v.transparent===!1&&v.blending===ji&&v.alphaToCoverage===!1,alphaMap:ht,alphaTest:zt,alphaHash:Dt,combine:v.combine,mapUv:Vt&&x(v.map.channel),aoMapUv:P&&x(v.aoMap.channel),lightMapUv:Bt&&x(v.lightMap.channel),bumpMapUv:ut&&x(v.bumpMap.channel),normalMapUv:Rt&&x(v.normalMap.channel),displacementMapUv:bt&&x(v.displacementMap.channel),emissiveMapUv:$t&&x(v.emissiveMap.channel),metalnessMapUv:Ft&&x(v.metalnessMap.channel),roughnessMapUv:C&&x(v.roughnessMap.channel),anisotropyMapUv:Ct&&x(v.anisotropyMap.channel),clearcoatMapUv:Ot&&x(v.clearcoatMap.channel),clearcoatNormalMapUv:pe&&x(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xt&&x(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Ht&&x(v.iridescenceMap.channel),iridescenceThicknessMapUv:Kt&&x(v.iridescenceThicknessMap.channel),sheenColorMapUv:te&&x(v.sheenColorMap.channel),sheenRoughnessMapUv:kt&&x(v.sheenRoughnessMap.channel),specularMapUv:xe&&x(v.specularMap.channel),specularColorMapUv:he&&x(v.specularColorMap.channel),specularIntensityMapUv:Le&&x(v.specularIntensityMap.channel),transmissionMapUv:O&&x(v.transmissionMap.channel),thicknessMapUv:Lt&&x(v.thicknessMap.channel),alphaMapUv:ht&&x(v.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Rt||E),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!X.attributes.uv&&(Vt||ht),fog:!!N,useFog:v.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:ot,skinning:U.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:at,morphTextureStride:_t,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:ke,decodeVideoTexture:Vt&&v.map.isVideoTexture===!0&&ye.getTransfer(v.map.colorSpace)===Te,decodeVideoTextureEmissive:$t&&v.emissiveMap.isVideoTexture===!0&&ye.getTransfer(v.emissiveMap.colorSpace)===Te,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===$e,flipSided:v.side===on,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:se&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(se&&v.extensions.multiDraw===!0||Tt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return fn.vertexUv1s=l.has(1),fn.vertexUv2s=l.has(2),fn.vertexUv3s=l.has(3),l.clear(),fn}function p(v){let y=[];if(v.shaderID?y.push(v.shaderID):(y.push(v.customVertexShaderID),y.push(v.customFragmentShaderID)),v.defines!==void 0)for(let A in v.defines)y.push(A),y.push(v.defines[A]);return v.isRawShaderMaterial===!1&&(b(y,v),M(y,v),y.push(i.outputColorSpace)),y.push(v.customProgramCacheKey),y.join()}function b(v,y){v.push(y.precision),v.push(y.outputColorSpace),v.push(y.envMapMode),v.push(y.envMapCubeUVHeight),v.push(y.mapUv),v.push(y.alphaMapUv),v.push(y.lightMapUv),v.push(y.aoMapUv),v.push(y.bumpMapUv),v.push(y.normalMapUv),v.push(y.displacementMapUv),v.push(y.emissiveMapUv),v.push(y.metalnessMapUv),v.push(y.roughnessMapUv),v.push(y.anisotropyMapUv),v.push(y.clearcoatMapUv),v.push(y.clearcoatNormalMapUv),v.push(y.clearcoatRoughnessMapUv),v.push(y.iridescenceMapUv),v.push(y.iridescenceThicknessMapUv),v.push(y.sheenColorMapUv),v.push(y.sheenRoughnessMapUv),v.push(y.specularMapUv),v.push(y.specularColorMapUv),v.push(y.specularIntensityMapUv),v.push(y.transmissionMapUv),v.push(y.thicknessMapUv),v.push(y.combine),v.push(y.fogExp2),v.push(y.sizeAttenuation),v.push(y.morphTargetsCount),v.push(y.morphAttributeCount),v.push(y.numDirLights),v.push(y.numPointLights),v.push(y.numSpotLights),v.push(y.numSpotLightMaps),v.push(y.numHemiLights),v.push(y.numRectAreaLights),v.push(y.numDirLightShadows),v.push(y.numPointLightShadows),v.push(y.numSpotLightShadows),v.push(y.numSpotLightShadowsWithMaps),v.push(y.numLightProbes),v.push(y.shadowMapType),v.push(y.toneMapping),v.push(y.numClippingPlanes),v.push(y.numClipIntersection),v.push(y.depthPacking)}function M(v,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),v.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),v.push(a.mask)}function _(v){let y=g[v.type],A;if(y){let z=ri[y];A=bp.clone(z.uniforms)}else A=v.uniforms;return A}function I(v,y){let A;for(let z=0,U=h.length;z<U;z++){let N=h[z];if(N.cacheKey===y){A=N,++A.usedTimes;break}}return A===void 0&&(A=new Cx(i,y,v,r),h.push(A)),A}function S(v){if(--v.usedTimes===0){let y=h.indexOf(v);h[y]=h[h.length-1],h.pop(),v.destroy()}}function R(v){c.remove(v)}function w(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:I,releaseProgram:S,releaseShaderCache:R,programs:h,dispose:w}}function Px(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Dx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Ou(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Bu(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,f,d,g,x,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),t++,p}function a(u,f,d,g,x,m){let p=o(u,f,d,g,x,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):e.push(p)}function c(u,f,d,g,x,m){let p=o(u,f,d,g,x,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function l(u,f){e.length>1&&e.sort(u||Dx),n.length>1&&n.sort(f||Ou),s.length>1&&s.sort(f||Ou)}function h(){for(let u=t,f=i.length;u<f;u++){let d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function Ux(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Bu,i.set(n,[o])):s>=r.length?(o=new Bu,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Nx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new At};break;case"SpotLight":e={position:new L,direction:new L,color:new At,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new At,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new At,groundColor:new At};break;case"RectAreaLight":e={color:new At,position:new L,halfWidth:new L,halfHeight:new L};break}return i[t.id]=e,e}}}function zx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Fx=0;function Ox(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Bx(i){let t=new Nx,e=zx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);let s=new L,r=new Re,o=new Re;function a(l){let h=0,u=0,f=0;for(let v=0;v<9;v++)n.probe[v].set(0,0,0);let d=0,g=0,x=0,m=0,p=0,b=0,M=0,_=0,I=0,S=0,R=0;l.sort(Ox);for(let v=0,y=l.length;v<y;v++){let A=l[v],z=A.color,U=A.intensity,N=A.distance,X=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)h+=z.r*U,u+=z.g*U,f+=z.b*U;else if(A.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(A.sh.coefficients[G],U);R++}else if(A.isDirectionalLight){let G=t.get(A);if(G.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let nt=A.shadow,W=e.get(A);W.shadowIntensity=nt.intensity,W.shadowBias=nt.bias,W.shadowNormalBias=nt.normalBias,W.shadowRadius=nt.radius,W.shadowMapSize=nt.mapSize,n.directionalShadow[d]=W,n.directionalShadowMap[d]=X,n.directionalShadowMatrix[d]=A.shadow.matrix,b++}n.directional[d]=G,d++}else if(A.isSpotLight){let G=t.get(A);G.position.setFromMatrixPosition(A.matrixWorld),G.color.copy(z).multiplyScalar(U),G.distance=N,G.coneCos=Math.cos(A.angle),G.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),G.decay=A.decay,n.spot[x]=G;let nt=A.shadow;if(A.map&&(n.spotLightMap[I]=A.map,I++,nt.updateMatrices(A),A.castShadow&&S++),n.spotLightMatrix[x]=nt.matrix,A.castShadow){let W=e.get(A);W.shadowIntensity=nt.intensity,W.shadowBias=nt.bias,W.shadowNormalBias=nt.normalBias,W.shadowRadius=nt.radius,W.shadowMapSize=nt.mapSize,n.spotShadow[x]=W,n.spotShadowMap[x]=X,_++}x++}else if(A.isRectAreaLight){let G=t.get(A);G.color.copy(z).multiplyScalar(U),G.halfWidth.set(A.width*.5,0,0),G.halfHeight.set(0,A.height*.5,0),n.rectArea[m]=G,m++}else if(A.isPointLight){let G=t.get(A);if(G.color.copy(A.color).multiplyScalar(A.intensity),G.distance=A.distance,G.decay=A.decay,A.castShadow){let nt=A.shadow,W=e.get(A);W.shadowIntensity=nt.intensity,W.shadowBias=nt.bias,W.shadowNormalBias=nt.normalBias,W.shadowRadius=nt.radius,W.shadowMapSize=nt.mapSize,W.shadowCameraNear=nt.camera.near,W.shadowCameraFar=nt.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=X,n.pointShadowMatrix[g]=A.shadow.matrix,M++}n.point[g]=G,g++}else if(A.isHemisphereLight){let G=t.get(A);G.skyColor.copy(A.color).multiplyScalar(U),G.groundColor.copy(A.groundColor).multiplyScalar(U),n.hemi[p]=G,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=St.LTC_FLOAT_1,n.rectAreaLTC2=St.LTC_FLOAT_2):(n.rectAreaLTC1=St.LTC_HALF_1,n.rectAreaLTC2=St.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let w=n.hash;(w.directionalLength!==d||w.pointLength!==g||w.spotLength!==x||w.rectAreaLength!==m||w.hemiLength!==p||w.numDirectionalShadows!==b||w.numPointShadows!==M||w.numSpotShadows!==_||w.numSpotMaps!==I||w.numLightProbes!==R)&&(n.directional.length=d,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=_+I-S,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=R,w.directionalLength=d,w.pointLength=g,w.spotLength=x,w.rectAreaLength=m,w.hemiLength=p,w.numDirectionalShadows=b,w.numPointShadows=M,w.numSpotShadows=_,w.numSpotMaps=I,w.numLightProbes=R,n.version=Fx++)}function c(l,h){let u=0,f=0,d=0,g=0,x=0,m=h.matrixWorldInverse;for(let p=0,b=l.length;p<b;p++){let M=l[p];if(M.isDirectionalLight){let _=n.directional[u];_.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),u++}else if(M.isSpotLight){let _=n.spot[d];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),d++}else if(M.isRectAreaLight){let _=n.rectArea[g];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),_.halfWidth.set(M.width*.5,0,0),_.halfHeight.set(0,M.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){let _=n.point[f];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),f++}else if(M.isHemisphereLight){let _=n.hemi[x];_.direction.setFromMatrixPosition(M.matrixWorld),_.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:n}}function Hu(i){let t=new Bx(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Hx(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Hu(i),t.set(s,[a])):r>=o.length?(a=new Hu(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Il=class extends Li{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Yd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ll=class extends Li{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},kx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Vx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Gx(i,t,e){let n=new Yr,s=new lt,r=new lt,o=new Ve,a=new Il({depthPacking:Zd}),c=new Ll,l={},h=e.maxTextureSize,u={[es]:on,[on]:es,[$e]:$e},f=new An({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:kx,fragmentShader:Vx}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new ze;g.setAttribute("position",new Ze(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Y(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tf;let p=this.type;this.render=function(S,R,w){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;let v=i.getRenderTarget(),y=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),z=i.state;z.setBlending(Ki),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let U=p!==Ei&&this.type===Ei,N=p===Ei&&this.type!==Ei;for(let X=0,G=S.length;X<G;X++){let nt=S[X],W=nt.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",nt,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let V=W.getFrameExtents();if(s.multiply(V),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/V.x),s.x=r.x*V.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/V.y),s.y=r.y*V.y,W.mapSize.y=r.y)),W.map===null||U===!0||N===!0){let at=this.type!==Ei?{minFilter:Nn,magFilter:Nn}:{};W.map!==null&&W.map.dispose(),W.map=new Ci(s.x,s.y,at),W.map.texture.name=nt.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();let $=W.getViewportCount();for(let at=0;at<$;at++){let _t=W.getViewport(at);o.set(r.x*_t.x,r.y*_t.y,r.x*_t.z,r.y*_t.w),z.viewport(o),W.updateMatrices(nt,at),n=W.getFrustum(),_(R,w,W.camera,nt,this.type)}W.isPointLightShadow!==!0&&this.type===Ei&&b(W,w),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(v,y,A)};function b(S,R){let w=t.update(x);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,d.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Ci(s.x,s.y)),f.uniforms.shadow_pass.value=S.map.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(R,null,w,f,x,null),d.uniforms.shadow_pass.value=S.mapPass.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(R,null,w,d,x,null)}function M(S,R,w,v){let y=null,A=w.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(A!==void 0)y=A;else if(y=w.isPointLight===!0?c:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let z=y.uuid,U=R.uuid,N=l[z];N===void 0&&(N={},l[z]=N);let X=N[U];X===void 0&&(X=y.clone(),N[U]=X,R.addEventListener("dispose",I)),y=X}if(y.visible=R.visible,y.wireframe=R.wireframe,v===Ei?y.side=R.shadowSide!==null?R.shadowSide:R.side:y.side=R.shadowSide!==null?R.shadowSide:u[R.side],y.alphaMap=R.alphaMap,y.alphaTest=R.alphaTest,y.map=R.map,y.clipShadows=R.clipShadows,y.clippingPlanes=R.clippingPlanes,y.clipIntersection=R.clipIntersection,y.displacementMap=R.displacementMap,y.displacementScale=R.displacementScale,y.displacementBias=R.displacementBias,y.wireframeLinewidth=R.wireframeLinewidth,y.linewidth=R.linewidth,w.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let z=i.properties.get(y);z.light=w}return y}function _(S,R,w,v,y){if(S.visible===!1)return;if(S.layers.test(R.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&y===Ei)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,S.matrixWorld);let U=t.update(S),N=S.material;if(Array.isArray(N)){let X=U.groups;for(let G=0,nt=X.length;G<nt;G++){let W=X[G],V=N[W.materialIndex];if(V&&V.visible){let $=M(S,V,v,y);S.onBeforeShadow(i,S,R,w,U,$,W),i.renderBufferDirect(w,null,U,$,S,W),S.onAfterShadow(i,S,R,w,U,$,W)}}}else if(N.visible){let X=M(S,N,v,y);S.onBeforeShadow(i,S,R,w,U,X,null),i.renderBufferDirect(w,null,U,X,S,null),S.onAfterShadow(i,S,R,w,U,X,null)}}let z=S.children;for(let U=0,N=z.length;U<N;U++)_(z[U],R,w,v,y)}function I(S){S.target.removeEventListener("dispose",I);for(let w in l){let v=l[w],y=S.target.uuid;y in v&&(v[y].dispose(),delete v[y])}}}var Wx={[Uc]:Nc,[zc]:Bc,[Fc]:Hc,[or]:Oc,[Nc]:Uc,[Bc]:zc,[Hc]:Fc,[Oc]:or};function Xx(i,t){function e(){let O=!1,Lt=new Ve,tt=null,ht=new Ve(0,0,0,0);return{setMask:function(zt){tt!==zt&&!O&&(i.colorMask(zt,zt,zt,zt),tt=zt)},setLocked:function(zt){O=zt},setClear:function(zt,Dt,se,ke,fn){fn===!0&&(zt*=ke,Dt*=ke,se*=ke),Lt.set(zt,Dt,se,ke),ht.equals(Lt)===!1&&(i.clearColor(zt,Dt,se,ke),ht.copy(Lt))},reset:function(){O=!1,tt=null,ht.set(-1,0,0,0)}}}function n(){let O=!1,Lt=!1,tt=null,ht=null,zt=null;return{setReversed:function(Dt){if(Lt!==Dt){let se=t.get("EXT_clip_control");Lt?se.clipControlEXT(se.LOWER_LEFT_EXT,se.ZERO_TO_ONE_EXT):se.clipControlEXT(se.LOWER_LEFT_EXT,se.NEGATIVE_ONE_TO_ONE_EXT);let ke=zt;zt=null,this.setClear(ke)}Lt=Dt},getReversed:function(){return Lt},setTest:function(Dt){Dt?Q(i.DEPTH_TEST):ot(i.DEPTH_TEST)},setMask:function(Dt){tt!==Dt&&!O&&(i.depthMask(Dt),tt=Dt)},setFunc:function(Dt){if(Lt&&(Dt=Wx[Dt]),ht!==Dt){switch(Dt){case Uc:i.depthFunc(i.NEVER);break;case Nc:i.depthFunc(i.ALWAYS);break;case zc:i.depthFunc(i.LESS);break;case or:i.depthFunc(i.LEQUAL);break;case Fc:i.depthFunc(i.EQUAL);break;case Oc:i.depthFunc(i.GEQUAL);break;case Bc:i.depthFunc(i.GREATER);break;case Hc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ht=Dt}},setLocked:function(Dt){O=Dt},setClear:function(Dt){zt!==Dt&&(Lt&&(Dt=1-Dt),i.clearDepth(Dt),zt=Dt)},reset:function(){O=!1,tt=null,ht=null,zt=null,Lt=!1}}}function s(){let O=!1,Lt=null,tt=null,ht=null,zt=null,Dt=null,se=null,ke=null,fn=null;return{setTest:function(Ee){O||(Ee?Q(i.STENCIL_TEST):ot(i.STENCIL_TEST))},setMask:function(Ee){Lt!==Ee&&!O&&(i.stencilMask(Ee),Lt=Ee)},setFunc:function(Ee,Yn,gi){(tt!==Ee||ht!==Yn||zt!==gi)&&(i.stencilFunc(Ee,Yn,gi),tt=Ee,ht=Yn,zt=gi)},setOp:function(Ee,Yn,gi){(Dt!==Ee||se!==Yn||ke!==gi)&&(i.stencilOp(Ee,Yn,gi),Dt=Ee,se=Yn,ke=gi)},setLocked:function(Ee){O=Ee},setClear:function(Ee){fn!==Ee&&(i.clearStencil(Ee),fn=Ee)},reset:function(){O=!1,Lt=null,tt=null,ht=null,zt=null,Dt=null,se=null,ke=null,fn=null}}}let r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap,h={},u={},f=new WeakMap,d=[],g=null,x=!1,m=null,p=null,b=null,M=null,_=null,I=null,S=null,R=new At(0,0,0),w=0,v=!1,y=null,A=null,z=null,U=null,N=null,X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,nt=0,W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(W)[1]),G=nt>=1):W.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),G=nt>=2);let V=null,$={},at=i.getParameter(i.SCISSOR_BOX),_t=i.getParameter(i.VIEWPORT),j=new Ve().fromArray(at),F=new Ve().fromArray(_t);function K(O,Lt,tt,ht){let zt=new Uint8Array(4),Dt=i.createTexture();i.bindTexture(O,Dt),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let se=0;se<tt;se++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(Lt,0,i.RGBA,1,1,ht,0,i.RGBA,i.UNSIGNED_BYTE,zt):i.texImage2D(Lt+se,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,zt);return Dt}let pt={};pt[i.TEXTURE_2D]=K(i.TEXTURE_2D,i.TEXTURE_2D,1),pt[i.TEXTURE_CUBE_MAP]=K(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),pt[i.TEXTURE_2D_ARRAY]=K(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),pt[i.TEXTURE_3D]=K(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Q(i.DEPTH_TEST),o.setFunc(or),ut(!1),Rt(Wh),Q(i.CULL_FACE),P(Ki);function Q(O){h[O]!==!0&&(i.enable(O),h[O]=!0)}function ot(O){h[O]!==!1&&(i.disable(O),h[O]=!1)}function yt(O,Lt){return u[O]!==Lt?(i.bindFramebuffer(O,Lt),u[O]=Lt,O===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Lt),O===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Lt),!0):!1}function Tt(O,Lt){let tt=d,ht=!1;if(O){tt=f.get(Lt),tt===void 0&&(tt=[],f.set(Lt,tt));let zt=O.textures;if(tt.length!==zt.length||tt[0]!==i.COLOR_ATTACHMENT0){for(let Dt=0,se=zt.length;Dt<se;Dt++)tt[Dt]=i.COLOR_ATTACHMENT0+Dt;tt.length=zt.length,ht=!0}}else tt[0]!==i.BACK&&(tt[0]=i.BACK,ht=!0);ht&&i.drawBuffers(tt)}function Vt(O){return g!==O?(i.useProgram(O),g=O,!0):!1}let it={[xs]:i.FUNC_ADD,[bd]:i.FUNC_SUBTRACT,[Md]:i.FUNC_REVERSE_SUBTRACT};it[Ed]=i.MIN,it[wd]=i.MAX;let ct={[Td]:i.ZERO,[Sd]:i.ONE,[Ad]:i.SRC_COLOR,[Pc]:i.SRC_ALPHA,[Dd]:i.SRC_ALPHA_SATURATE,[Ld]:i.DST_COLOR,[Cd]:i.DST_ALPHA,[Rd]:i.ONE_MINUS_SRC_COLOR,[Dc]:i.ONE_MINUS_SRC_ALPHA,[Pd]:i.ONE_MINUS_DST_COLOR,[Id]:i.ONE_MINUS_DST_ALPHA,[Ud]:i.CONSTANT_COLOR,[Nd]:i.ONE_MINUS_CONSTANT_COLOR,[zd]:i.CONSTANT_ALPHA,[Fd]:i.ONE_MINUS_CONSTANT_ALPHA};function P(O,Lt,tt,ht,zt,Dt,se,ke,fn,Ee){if(O===Ki){x===!0&&(ot(i.BLEND),x=!1);return}if(x===!1&&(Q(i.BLEND),x=!0),O!==vd){if(O!==m||Ee!==v){if((p!==xs||_!==xs)&&(i.blendEquation(i.FUNC_ADD),p=xs,_=xs),Ee)switch(O){case ji:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case bs:i.blendFunc(i.ONE,i.ONE);break;case Xh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case qh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case ji:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case bs:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Xh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case qh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}b=null,M=null,I=null,S=null,R.set(0,0,0),w=0,m=O,v=Ee}return}zt=zt||Lt,Dt=Dt||tt,se=se||ht,(Lt!==p||zt!==_)&&(i.blendEquationSeparate(it[Lt],it[zt]),p=Lt,_=zt),(tt!==b||ht!==M||Dt!==I||se!==S)&&(i.blendFuncSeparate(ct[tt],ct[ht],ct[Dt],ct[se]),b=tt,M=ht,I=Dt,S=se),(ke.equals(R)===!1||fn!==w)&&(i.blendColor(ke.r,ke.g,ke.b,fn),R.copy(ke),w=fn),m=O,v=!1}function Bt(O,Lt){O.side===$e?ot(i.CULL_FACE):Q(i.CULL_FACE);let tt=O.side===on;Lt&&(tt=!tt),ut(tt),O.blending===ji&&O.transparent===!1?P(Ki):P(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);let ht=O.stencilWrite;a.setTest(ht),ht&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),$t(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?Q(i.SAMPLE_ALPHA_TO_COVERAGE):ot(i.SAMPLE_ALPHA_TO_COVERAGE)}function ut(O){y!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),y=O)}function Rt(O){O!==_d?(Q(i.CULL_FACE),O!==A&&(O===Wh?i.cullFace(i.BACK):O===yd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ot(i.CULL_FACE),A=O}function bt(O){O!==z&&(G&&i.lineWidth(O),z=O)}function $t(O,Lt,tt){O?(Q(i.POLYGON_OFFSET_FILL),(U!==Lt||N!==tt)&&(i.polygonOffset(Lt,tt),U=Lt,N=tt)):ot(i.POLYGON_OFFSET_FILL)}function Ft(O){O?Q(i.SCISSOR_TEST):ot(i.SCISSOR_TEST)}function C(O){O===void 0&&(O=i.TEXTURE0+X-1),V!==O&&(i.activeTexture(O),V=O)}function E(O,Lt,tt){tt===void 0&&(V===null?tt=i.TEXTURE0+X-1:tt=V);let ht=$[tt];ht===void 0&&(ht={type:void 0,texture:void 0},$[tt]=ht),(ht.type!==O||ht.texture!==Lt)&&(V!==tt&&(i.activeTexture(tt),V=tt),i.bindTexture(O,Lt||pt[O]),ht.type=O,ht.texture=Lt)}function q(){let O=$[V];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function st(){try{i.compressedTexImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ft(){try{i.compressedTexImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function rt(){try{i.texSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Wt(){try{i.texSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ct(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ot(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function pe(){try{i.texStorage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function xt(){try{i.texStorage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ht(){try{i.texImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Kt(){try{i.texImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function te(O){j.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),j.copy(O))}function kt(O){F.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),F.copy(O))}function xe(O,Lt){let tt=l.get(Lt);tt===void 0&&(tt=new WeakMap,l.set(Lt,tt));let ht=tt.get(O);ht===void 0&&(ht=i.getUniformBlockIndex(Lt,O.name),tt.set(O,ht))}function he(O,Lt){let ht=l.get(Lt).get(O);c.get(Lt)!==ht&&(i.uniformBlockBinding(Lt,ht,O.__bindingPointIndex),c.set(Lt,ht))}function Le(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},V=null,$={},u={},f=new WeakMap,d=[],g=null,x=!1,m=null,p=null,b=null,M=null,_=null,I=null,S=null,R=new At(0,0,0),w=0,v=!1,y=null,A=null,z=null,U=null,N=null,j.set(0,0,i.canvas.width,i.canvas.height),F.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Q,disable:ot,bindFramebuffer:yt,drawBuffers:Tt,useProgram:Vt,setBlending:P,setMaterial:Bt,setFlipSided:ut,setCullFace:Rt,setLineWidth:bt,setPolygonOffset:$t,setScissorTest:Ft,activeTexture:C,bindTexture:E,unbindTexture:q,compressedTexImage2D:st,compressedTexImage3D:ft,texImage2D:Ht,texImage3D:Kt,updateUBOMapping:xe,uniformBlockBinding:he,texStorage2D:pe,texStorage3D:xt,texSubImage2D:rt,texSubImage3D:Wt,compressedTexSubImage2D:Ct,compressedTexSubImage3D:Ot,scissor:te,viewport:kt,reset:Le}}function ku(i,t,e,n){let s=qx(n);switch(e){case af:return i*t;case lf:return i*t;case hf:return i*t*2;case ch:return i*t/s.components*s.byteLength;case lh:return i*t/s.components*s.byteLength;case uf:return i*t*2/s.components*s.byteLength;case hh:return i*t*2/s.components*s.byteLength;case cf:return i*t*3/s.components*s.byteLength;case jn:return i*t*4/s.components*s.byteLength;case uh:return i*t*4/s.components*s.byteLength;case Xo:case qo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Yo:case Zo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Xc:case Yc:return Math.max(i,16)*Math.max(t,8)/4;case Wc:case qc:return Math.max(i,8)*Math.max(t,8)/2;case Zc:case Jc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case $c:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Kc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case jc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Qc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case tl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case el:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case nl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case il:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case sl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case rl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ol:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case al:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case cl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ll:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case hl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Jo:case ul:case fl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case ff:case dl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case pl:case ml:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function qx(i){switch(i){case Ri:case sf:return{byteLength:1,components:1};case qr:case rf:case no:return{byteLength:2,components:1};case oh:case ah:return{byteLength:2,components:4};case Es:case rh:case ci:return{byteLength:4,components:1};case of:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Yx(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new lt,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,E){return d?new OffscreenCanvas(C,E):jo("canvas")}function x(C,E,q){let st=1,ft=Ft(C);if((ft.width>q||ft.height>q)&&(st=q/Math.max(ft.width,ft.height)),st<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let rt=Math.floor(st*ft.width),Wt=Math.floor(st*ft.height);u===void 0&&(u=g(rt,Wt));let Ct=E?g(rt,Wt):u;return Ct.width=rt,Ct.height=Wt,Ct.getContext("2d").drawImage(C,0,0,rt,Wt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ft.width+"x"+ft.height+") to ("+rt+"x"+Wt+")."),Ct}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ft.width+"x"+ft.height+")."),C;return C}function m(C){return C.generateMipmaps}function p(C){i.generateMipmap(C)}function b(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(C,E,q,st,ft=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let rt=E;if(E===i.RED&&(q===i.FLOAT&&(rt=i.R32F),q===i.HALF_FLOAT&&(rt=i.R16F),q===i.UNSIGNED_BYTE&&(rt=i.R8)),E===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(rt=i.R8UI),q===i.UNSIGNED_SHORT&&(rt=i.R16UI),q===i.UNSIGNED_INT&&(rt=i.R32UI),q===i.BYTE&&(rt=i.R8I),q===i.SHORT&&(rt=i.R16I),q===i.INT&&(rt=i.R32I)),E===i.RG&&(q===i.FLOAT&&(rt=i.RG32F),q===i.HALF_FLOAT&&(rt=i.RG16F),q===i.UNSIGNED_BYTE&&(rt=i.RG8)),E===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(rt=i.RG8UI),q===i.UNSIGNED_SHORT&&(rt=i.RG16UI),q===i.UNSIGNED_INT&&(rt=i.RG32UI),q===i.BYTE&&(rt=i.RG8I),q===i.SHORT&&(rt=i.RG16I),q===i.INT&&(rt=i.RG32I)),E===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&(rt=i.RGB8UI),q===i.UNSIGNED_SHORT&&(rt=i.RGB16UI),q===i.UNSIGNED_INT&&(rt=i.RGB32UI),q===i.BYTE&&(rt=i.RGB8I),q===i.SHORT&&(rt=i.RGB16I),q===i.INT&&(rt=i.RGB32I)),E===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&(rt=i.RGBA8UI),q===i.UNSIGNED_SHORT&&(rt=i.RGBA16UI),q===i.UNSIGNED_INT&&(rt=i.RGBA32UI),q===i.BYTE&&(rt=i.RGBA8I),q===i.SHORT&&(rt=i.RGBA16I),q===i.INT&&(rt=i.RGBA32I)),E===i.RGB&&q===i.UNSIGNED_INT_5_9_9_9_REV&&(rt=i.RGB9_E5),E===i.RGBA){let Wt=ft?Sa:ye.getTransfer(st);q===i.FLOAT&&(rt=i.RGBA32F),q===i.HALF_FLOAT&&(rt=i.RGBA16F),q===i.UNSIGNED_BYTE&&(rt=Wt===Te?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT_4_4_4_4&&(rt=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(rt=i.RGB5_A1)}return(rt===i.R16F||rt===i.R32F||rt===i.RG16F||rt===i.RG32F||rt===i.RGBA16F||rt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),rt}function _(C,E){let q;return C?E===null||E===Es||E===lr?q=i.DEPTH24_STENCIL8:E===ci?q=i.DEPTH32F_STENCIL8:E===qr&&(q=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Es||E===lr?q=i.DEPTH_COMPONENT24:E===ci?q=i.DEPTH_COMPONENT32F:E===qr&&(q=i.DEPTH_COMPONENT16),q}function I(C,E){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Nn&&C.minFilter!==ai?Math.log2(Math.max(E.width,E.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?E.mipmaps.length:1}function S(C){let E=C.target;E.removeEventListener("dispose",S),w(E),E.isVideoTexture&&h.delete(E)}function R(C){let E=C.target;E.removeEventListener("dispose",R),y(E)}function w(C){let E=n.get(C);if(E.__webglInit===void 0)return;let q=C.source,st=f.get(q);if(st){let ft=st[E.__cacheKey];ft.usedTimes--,ft.usedTimes===0&&v(C),Object.keys(st).length===0&&f.delete(q)}n.remove(C)}function v(C){let E=n.get(C);i.deleteTexture(E.__webglTexture);let q=C.source,st=f.get(q);delete st[E.__cacheKey],o.memory.textures--}function y(C){let E=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let st=0;st<6;st++){if(Array.isArray(E.__webglFramebuffer[st]))for(let ft=0;ft<E.__webglFramebuffer[st].length;ft++)i.deleteFramebuffer(E.__webglFramebuffer[st][ft]);else i.deleteFramebuffer(E.__webglFramebuffer[st]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[st])}else{if(Array.isArray(E.__webglFramebuffer))for(let st=0;st<E.__webglFramebuffer.length;st++)i.deleteFramebuffer(E.__webglFramebuffer[st]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let st=0;st<E.__webglColorRenderbuffer.length;st++)E.__webglColorRenderbuffer[st]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[st]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let q=C.textures;for(let st=0,ft=q.length;st<ft;st++){let rt=n.get(q[st]);rt.__webglTexture&&(i.deleteTexture(rt.__webglTexture),o.memory.textures--),n.remove(q[st])}n.remove(C)}let A=0;function z(){A=0}function U(){let C=A;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),A+=1,C}function N(C){let E=[];return E.push(C.wrapS),E.push(C.wrapT),E.push(C.wrapR||0),E.push(C.magFilter),E.push(C.minFilter),E.push(C.anisotropy),E.push(C.internalFormat),E.push(C.format),E.push(C.type),E.push(C.generateMipmaps),E.push(C.premultiplyAlpha),E.push(C.flipY),E.push(C.unpackAlignment),E.push(C.colorSpace),E.join()}function X(C,E){let q=n.get(C);if(C.isVideoTexture&&bt(C),C.isRenderTargetTexture===!1&&C.version>0&&q.__version!==C.version){let st=C.image;if(st===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{F(q,C,E);return}}e.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+E)}function G(C,E){let q=n.get(C);if(C.version>0&&q.__version!==C.version){F(q,C,E);return}e.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+E)}function nt(C,E){let q=n.get(C);if(C.version>0&&q.__version!==C.version){F(q,C,E);return}e.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+E)}function W(C,E){let q=n.get(C);if(C.version>0&&q.__version!==C.version){K(q,C,E);return}e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+E)}let V={[Ms]:i.REPEAT,[ys]:i.CLAMP_TO_EDGE,[Gc]:i.MIRRORED_REPEAT},$={[Nn]:i.NEAREST,[qd]:i.NEAREST_MIPMAP_NEAREST,[po]:i.NEAREST_MIPMAP_LINEAR,[ai]:i.LINEAR,[Ka]:i.LINEAR_MIPMAP_NEAREST,[vs]:i.LINEAR_MIPMAP_LINEAR},at={[$d]:i.NEVER,[np]:i.ALWAYS,[Kd]:i.LESS,[pf]:i.LEQUAL,[jd]:i.EQUAL,[ep]:i.GEQUAL,[Qd]:i.GREATER,[tp]:i.NOTEQUAL};function _t(C,E){if(E.type===ci&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===ai||E.magFilter===Ka||E.magFilter===po||E.magFilter===vs||E.minFilter===ai||E.minFilter===Ka||E.minFilter===po||E.minFilter===vs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,V[E.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,V[E.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,V[E.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,$[E.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,$[E.minFilter]),E.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,at[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Nn||E.minFilter!==po&&E.minFilter!==vs||E.type===ci&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let q=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function j(C,E){let q=!1;C.__webglInit===void 0&&(C.__webglInit=!0,E.addEventListener("dispose",S));let st=E.source,ft=f.get(st);ft===void 0&&(ft={},f.set(st,ft));let rt=N(E);if(rt!==C.__cacheKey){ft[rt]===void 0&&(ft[rt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,q=!0),ft[rt].usedTimes++;let Wt=ft[C.__cacheKey];Wt!==void 0&&(ft[C.__cacheKey].usedTimes--,Wt.usedTimes===0&&v(E)),C.__cacheKey=rt,C.__webglTexture=ft[rt].texture}return q}function F(C,E,q){let st=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(st=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(st=i.TEXTURE_3D);let ft=j(C,E),rt=E.source;e.bindTexture(st,C.__webglTexture,i.TEXTURE0+q);let Wt=n.get(rt);if(rt.version!==Wt.__version||ft===!0){e.activeTexture(i.TEXTURE0+q);let Ct=ye.getPrimaries(ye.workingColorSpace),Ot=E.colorSpace===Ji?null:ye.getPrimaries(E.colorSpace),pe=E.colorSpace===Ji||Ct===Ot?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);let xt=x(E.image,!1,s.maxTextureSize);xt=$t(E,xt);let Ht=r.convert(E.format,E.colorSpace),Kt=r.convert(E.type),te=M(E.internalFormat,Ht,Kt,E.colorSpace,E.isVideoTexture);_t(st,E);let kt,xe=E.mipmaps,he=E.isVideoTexture!==!0,Le=Wt.__version===void 0||ft===!0,O=rt.dataReady,Lt=I(E,xt);if(E.isDepthTexture)te=_(E.format===hr,E.type),Le&&(he?e.texStorage2D(i.TEXTURE_2D,1,te,xt.width,xt.height):e.texImage2D(i.TEXTURE_2D,0,te,xt.width,xt.height,0,Ht,Kt,null));else if(E.isDataTexture)if(xe.length>0){he&&Le&&e.texStorage2D(i.TEXTURE_2D,Lt,te,xe[0].width,xe[0].height);for(let tt=0,ht=xe.length;tt<ht;tt++)kt=xe[tt],he?O&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,kt.width,kt.height,Ht,Kt,kt.data):e.texImage2D(i.TEXTURE_2D,tt,te,kt.width,kt.height,0,Ht,Kt,kt.data);E.generateMipmaps=!1}else he?(Le&&e.texStorage2D(i.TEXTURE_2D,Lt,te,xt.width,xt.height),O&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,xt.width,xt.height,Ht,Kt,xt.data)):e.texImage2D(i.TEXTURE_2D,0,te,xt.width,xt.height,0,Ht,Kt,xt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){he&&Le&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Lt,te,xe[0].width,xe[0].height,xt.depth);for(let tt=0,ht=xe.length;tt<ht;tt++)if(kt=xe[tt],E.format!==jn)if(Ht!==null)if(he){if(O)if(E.layerUpdates.size>0){let zt=ku(kt.width,kt.height,E.format,E.type);for(let Dt of E.layerUpdates){let se=kt.data.subarray(Dt*zt/kt.data.BYTES_PER_ELEMENT,(Dt+1)*zt/kt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,Dt,kt.width,kt.height,1,Ht,se)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,0,kt.width,kt.height,xt.depth,Ht,kt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,tt,te,kt.width,kt.height,xt.depth,0,kt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else he?O&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,0,kt.width,kt.height,xt.depth,Ht,Kt,kt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,tt,te,kt.width,kt.height,xt.depth,0,Ht,Kt,kt.data)}else{he&&Le&&e.texStorage2D(i.TEXTURE_2D,Lt,te,xe[0].width,xe[0].height);for(let tt=0,ht=xe.length;tt<ht;tt++)kt=xe[tt],E.format!==jn?Ht!==null?he?O&&e.compressedTexSubImage2D(i.TEXTURE_2D,tt,0,0,kt.width,kt.height,Ht,kt.data):e.compressedTexImage2D(i.TEXTURE_2D,tt,te,kt.width,kt.height,0,kt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):he?O&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,kt.width,kt.height,Ht,Kt,kt.data):e.texImage2D(i.TEXTURE_2D,tt,te,kt.width,kt.height,0,Ht,Kt,kt.data)}else if(E.isDataArrayTexture)if(he){if(Le&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Lt,te,xt.width,xt.height,xt.depth),O)if(E.layerUpdates.size>0){let tt=ku(xt.width,xt.height,E.format,E.type);for(let ht of E.layerUpdates){let zt=xt.data.subarray(ht*tt/xt.data.BYTES_PER_ELEMENT,(ht+1)*tt/xt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ht,xt.width,xt.height,1,Ht,Kt,zt)}E.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,xt.width,xt.height,xt.depth,Ht,Kt,xt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,te,xt.width,xt.height,xt.depth,0,Ht,Kt,xt.data);else if(E.isData3DTexture)he?(Le&&e.texStorage3D(i.TEXTURE_3D,Lt,te,xt.width,xt.height,xt.depth),O&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,xt.width,xt.height,xt.depth,Ht,Kt,xt.data)):e.texImage3D(i.TEXTURE_3D,0,te,xt.width,xt.height,xt.depth,0,Ht,Kt,xt.data);else if(E.isFramebufferTexture){if(Le)if(he)e.texStorage2D(i.TEXTURE_2D,Lt,te,xt.width,xt.height);else{let tt=xt.width,ht=xt.height;for(let zt=0;zt<Lt;zt++)e.texImage2D(i.TEXTURE_2D,zt,te,tt,ht,0,Ht,Kt,null),tt>>=1,ht>>=1}}else if(xe.length>0){if(he&&Le){let tt=Ft(xe[0]);e.texStorage2D(i.TEXTURE_2D,Lt,te,tt.width,tt.height)}for(let tt=0,ht=xe.length;tt<ht;tt++)kt=xe[tt],he?O&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,Ht,Kt,kt):e.texImage2D(i.TEXTURE_2D,tt,te,Ht,Kt,kt);E.generateMipmaps=!1}else if(he){if(Le){let tt=Ft(xt);e.texStorage2D(i.TEXTURE_2D,Lt,te,tt.width,tt.height)}O&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Ht,Kt,xt)}else e.texImage2D(i.TEXTURE_2D,0,te,Ht,Kt,xt);m(E)&&p(st),Wt.__version=rt.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function K(C,E,q){if(E.image.length!==6)return;let st=j(C,E),ft=E.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+q);let rt=n.get(ft);if(ft.version!==rt.__version||st===!0){e.activeTexture(i.TEXTURE0+q);let Wt=ye.getPrimaries(ye.workingColorSpace),Ct=E.colorSpace===Ji?null:ye.getPrimaries(E.colorSpace),Ot=E.colorSpace===Ji||Wt===Ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ot);let pe=E.isCompressedTexture||E.image[0].isCompressedTexture,xt=E.image[0]&&E.image[0].isDataTexture,Ht=[];for(let ht=0;ht<6;ht++)!pe&&!xt?Ht[ht]=x(E.image[ht],!0,s.maxCubemapSize):Ht[ht]=xt?E.image[ht].image:E.image[ht],Ht[ht]=$t(E,Ht[ht]);let Kt=Ht[0],te=r.convert(E.format,E.colorSpace),kt=r.convert(E.type),xe=M(E.internalFormat,te,kt,E.colorSpace),he=E.isVideoTexture!==!0,Le=rt.__version===void 0||st===!0,O=ft.dataReady,Lt=I(E,Kt);_t(i.TEXTURE_CUBE_MAP,E);let tt;if(pe){he&&Le&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Lt,xe,Kt.width,Kt.height);for(let ht=0;ht<6;ht++){tt=Ht[ht].mipmaps;for(let zt=0;zt<tt.length;zt++){let Dt=tt[zt];E.format!==jn?te!==null?he?O&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,zt,0,0,Dt.width,Dt.height,te,Dt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,zt,xe,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):he?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,zt,0,0,Dt.width,Dt.height,te,kt,Dt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,zt,xe,Dt.width,Dt.height,0,te,kt,Dt.data)}}}else{if(tt=E.mipmaps,he&&Le){tt.length>0&&Lt++;let ht=Ft(Ht[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Lt,xe,ht.width,ht.height)}for(let ht=0;ht<6;ht++)if(xt){he?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,Ht[ht].width,Ht[ht].height,te,kt,Ht[ht].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,xe,Ht[ht].width,Ht[ht].height,0,te,kt,Ht[ht].data);for(let zt=0;zt<tt.length;zt++){let se=tt[zt].image[ht].image;he?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,zt+1,0,0,se.width,se.height,te,kt,se.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,zt+1,xe,se.width,se.height,0,te,kt,se.data)}}else{he?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,te,kt,Ht[ht]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,xe,te,kt,Ht[ht]);for(let zt=0;zt<tt.length;zt++){let Dt=tt[zt];he?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,zt+1,0,0,te,kt,Dt.image[ht]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,zt+1,xe,te,kt,Dt.image[ht])}}}m(E)&&p(i.TEXTURE_CUBE_MAP),rt.__version=ft.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function pt(C,E,q,st,ft,rt){let Wt=r.convert(q.format,q.colorSpace),Ct=r.convert(q.type),Ot=M(q.internalFormat,Wt,Ct,q.colorSpace),pe=n.get(E),xt=n.get(q);if(xt.__renderTarget=E,!pe.__hasExternalTextures){let Ht=Math.max(1,E.width>>rt),Kt=Math.max(1,E.height>>rt);ft===i.TEXTURE_3D||ft===i.TEXTURE_2D_ARRAY?e.texImage3D(ft,rt,Ot,Ht,Kt,E.depth,0,Wt,Ct,null):e.texImage2D(ft,rt,Ot,Ht,Kt,0,Wt,Ct,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),Rt(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,st,ft,xt.__webglTexture,0,ut(E)):(ft===i.TEXTURE_2D||ft>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ft<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,st,ft,xt.__webglTexture,rt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Q(C,E,q){if(i.bindRenderbuffer(i.RENDERBUFFER,C),E.depthBuffer){let st=E.depthTexture,ft=st&&st.isDepthTexture?st.type:null,rt=_(E.stencilBuffer,ft),Wt=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ct=ut(E);Rt(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ct,rt,E.width,E.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ct,rt,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,rt,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Wt,i.RENDERBUFFER,C)}else{let st=E.textures;for(let ft=0;ft<st.length;ft++){let rt=st[ft],Wt=r.convert(rt.format,rt.colorSpace),Ct=r.convert(rt.type),Ot=M(rt.internalFormat,Wt,Ct,rt.colorSpace),pe=ut(E);q&&Rt(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,pe,Ot,E.width,E.height):Rt(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pe,Ot,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,Ot,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ot(C,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let st=n.get(E.depthTexture);st.__renderTarget=E,(!st.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),X(E.depthTexture,0);let ft=st.__webglTexture,rt=ut(E);if(E.depthTexture.format===ir)Rt(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ft,0,rt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ft,0);else if(E.depthTexture.format===hr)Rt(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ft,0,rt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ft,0);else throw new Error("Unknown depthTexture format")}function yt(C){let E=n.get(C),q=C.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==C.depthTexture){let st=C.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),st){let ft=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,st.removeEventListener("dispose",ft)};st.addEventListener("dispose",ft),E.__depthDisposeCallback=ft}E.__boundDepthTexture=st}if(C.depthTexture&&!E.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");ot(E.__webglFramebuffer,C)}else if(q){E.__webglDepthbuffer=[];for(let st=0;st<6;st++)if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[st]),E.__webglDepthbuffer[st]===void 0)E.__webglDepthbuffer[st]=i.createRenderbuffer(),Q(E.__webglDepthbuffer[st],C,!1);else{let ft=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=E.__webglDepthbuffer[st];i.bindRenderbuffer(i.RENDERBUFFER,rt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ft,i.RENDERBUFFER,rt)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),Q(E.__webglDepthbuffer,C,!1);else{let st=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ft),i.framebufferRenderbuffer(i.FRAMEBUFFER,st,i.RENDERBUFFER,ft)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Tt(C,E,q){let st=n.get(C);E!==void 0&&pt(st.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&yt(C)}function Vt(C){let E=C.texture,q=n.get(C),st=n.get(E);C.addEventListener("dispose",R);let ft=C.textures,rt=C.isWebGLCubeRenderTarget===!0,Wt=ft.length>1;if(Wt||(st.__webglTexture===void 0&&(st.__webglTexture=i.createTexture()),st.__version=E.version,o.memory.textures++),rt){q.__webglFramebuffer=[];for(let Ct=0;Ct<6;Ct++)if(E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer[Ct]=[];for(let Ot=0;Ot<E.mipmaps.length;Ot++)q.__webglFramebuffer[Ct][Ot]=i.createFramebuffer()}else q.__webglFramebuffer[Ct]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer=[];for(let Ct=0;Ct<E.mipmaps.length;Ct++)q.__webglFramebuffer[Ct]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(Wt)for(let Ct=0,Ot=ft.length;Ct<Ot;Ct++){let pe=n.get(ft[Ct]);pe.__webglTexture===void 0&&(pe.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&Rt(C)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let Ct=0;Ct<ft.length;Ct++){let Ot=ft[Ct];q.__webglColorRenderbuffer[Ct]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[Ct]);let pe=r.convert(Ot.format,Ot.colorSpace),xt=r.convert(Ot.type),Ht=M(Ot.internalFormat,pe,xt,Ot.colorSpace,C.isXRRenderTarget===!0),Kt=ut(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Kt,Ht,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.RENDERBUFFER,q.__webglColorRenderbuffer[Ct])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),Q(q.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(rt){e.bindTexture(i.TEXTURE_CUBE_MAP,st.__webglTexture),_t(i.TEXTURE_CUBE_MAP,E);for(let Ct=0;Ct<6;Ct++)if(E.mipmaps&&E.mipmaps.length>0)for(let Ot=0;Ot<E.mipmaps.length;Ot++)pt(q.__webglFramebuffer[Ct][Ot],C,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Ot);else pt(q.__webglFramebuffer[Ct],C,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0);m(E)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Wt){for(let Ct=0,Ot=ft.length;Ct<Ot;Ct++){let pe=ft[Ct],xt=n.get(pe);e.bindTexture(i.TEXTURE_2D,xt.__webglTexture),_t(i.TEXTURE_2D,pe),pt(q.__webglFramebuffer,C,pe,i.COLOR_ATTACHMENT0+Ct,i.TEXTURE_2D,0),m(pe)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let Ct=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Ct=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Ct,st.__webglTexture),_t(Ct,E),E.mipmaps&&E.mipmaps.length>0)for(let Ot=0;Ot<E.mipmaps.length;Ot++)pt(q.__webglFramebuffer[Ot],C,E,i.COLOR_ATTACHMENT0,Ct,Ot);else pt(q.__webglFramebuffer,C,E,i.COLOR_ATTACHMENT0,Ct,0);m(E)&&p(Ct),e.unbindTexture()}C.depthBuffer&&yt(C)}function it(C){let E=C.textures;for(let q=0,st=E.length;q<st;q++){let ft=E[q];if(m(ft)){let rt=b(C),Wt=n.get(ft).__webglTexture;e.bindTexture(rt,Wt),p(rt),e.unbindTexture()}}}let ct=[],P=[];function Bt(C){if(C.samples>0){if(Rt(C)===!1){let E=C.textures,q=C.width,st=C.height,ft=i.COLOR_BUFFER_BIT,rt=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Wt=n.get(C),Ct=E.length>1;if(Ct)for(let Ot=0;Ot<E.length;Ot++)e.bindFramebuffer(i.FRAMEBUFFER,Wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ot,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ot,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Wt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Wt.__webglFramebuffer);for(let Ot=0;Ot<E.length;Ot++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ft|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ft|=i.STENCIL_BUFFER_BIT)),Ct){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Wt.__webglColorRenderbuffer[Ot]);let pe=n.get(E[Ot]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,pe,0)}i.blitFramebuffer(0,0,q,st,0,0,q,st,ft,i.NEAREST),c===!0&&(ct.length=0,P.length=0,ct.push(i.COLOR_ATTACHMENT0+Ot),C.depthBuffer&&C.resolveDepthBuffer===!1&&(ct.push(rt),P.push(rt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,P)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ct))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Ct)for(let Ot=0;Ot<E.length;Ot++){e.bindFramebuffer(i.FRAMEBUFFER,Wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ot,i.RENDERBUFFER,Wt.__webglColorRenderbuffer[Ot]);let pe=n.get(E[Ot]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ot,i.TEXTURE_2D,pe,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Wt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){let E=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function ut(C){return Math.min(s.maxSamples,C.samples)}function Rt(C){let E=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function bt(C){let E=o.render.frame;h.get(C)!==E&&(h.set(C,E),C.update())}function $t(C,E){let q=C.colorSpace,st=C.format,ft=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||q!==_r&&q!==Ji&&(ye.getTransfer(q)===Te?(st!==jn||ft!==Ri)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),E}function Ft(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=U,this.resetTextureUnits=z,this.setTexture2D=X,this.setTexture2DArray=G,this.setTexture3D=nt,this.setTextureCube=W,this.rebindTextures=Tt,this.setupRenderTarget=Vt,this.updateRenderTargetMipmap=it,this.updateMultisampleRenderTarget=Bt,this.setupDepthRenderbuffer=yt,this.setupFrameBufferTexture=pt,this.useMultisampledRTT=Rt}function Zx(i,t){function e(n,s=Ji){let r,o=ye.getTransfer(s);if(n===Ri)return i.UNSIGNED_BYTE;if(n===oh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ah)return i.UNSIGNED_SHORT_5_5_5_1;if(n===of)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===sf)return i.BYTE;if(n===rf)return i.SHORT;if(n===qr)return i.UNSIGNED_SHORT;if(n===rh)return i.INT;if(n===Es)return i.UNSIGNED_INT;if(n===ci)return i.FLOAT;if(n===no)return i.HALF_FLOAT;if(n===af)return i.ALPHA;if(n===cf)return i.RGB;if(n===jn)return i.RGBA;if(n===lf)return i.LUMINANCE;if(n===hf)return i.LUMINANCE_ALPHA;if(n===ir)return i.DEPTH_COMPONENT;if(n===hr)return i.DEPTH_STENCIL;if(n===ch)return i.RED;if(n===lh)return i.RED_INTEGER;if(n===uf)return i.RG;if(n===hh)return i.RG_INTEGER;if(n===uh)return i.RGBA_INTEGER;if(n===Xo||n===qo||n===Yo||n===Zo)if(o===Te)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Xo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===qo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Yo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Zo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Xo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===qo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Yo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Zo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Wc||n===Xc||n===qc||n===Yc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Wc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Xc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===qc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Yc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Zc||n===Jc||n===$c)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Zc||n===Jc)return o===Te?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===$c)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Kc||n===jc||n===Qc||n===tl||n===el||n===nl||n===il||n===sl||n===rl||n===ol||n===al||n===cl||n===ll||n===hl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Kc)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===jc)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Qc)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===tl)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===el)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===nl)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===il)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===sl)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===rl)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ol)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===al)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===cl)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ll)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===hl)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Jo||n===ul||n===fl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Jo)return o===Te?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ul)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===fl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ff||n===dl||n===pl||n===ml)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Jo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===dl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===pl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ml)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===lr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Pl=class extends bn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Mt=class extends Ne{constructor(){super(),this.isGroup=!0,this.type="Group"}},Jx={type:"move"},Gr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Jx)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Mt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},$x=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Kx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Dl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new Sn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new An({vertexShader:$x,fragmentShader:Kx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Y(new mn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ul=class extends ns{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,g=null,x=new Dl,m=e.getContextAttributes(),p=null,b=null,M=[],_=[],I=new lt,S=null,R=new bn;R.viewport=new Ve;let w=new bn;w.viewport=new Ve;let v=[R,w],y=new Pl,A=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let K=M[F];return K===void 0&&(K=new Gr,M[F]=K),K.getTargetRaySpace()},this.getControllerGrip=function(F){let K=M[F];return K===void 0&&(K=new Gr,M[F]=K),K.getGripSpace()},this.getHand=function(F){let K=M[F];return K===void 0&&(K=new Gr,M[F]=K),K.getHandSpace()};function U(F){let K=_.indexOf(F.inputSource);if(K===-1)return;let pt=M[K];pt!==void 0&&(pt.update(F.inputSource,F.frame,l||o),pt.dispatchEvent({type:F.type,data:F.inputSource}))}function N(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",N),s.removeEventListener("inputsourceschange",X);for(let F=0;F<M.length;F++){let K=_[F];K!==null&&(_[F]=null,M[F].disconnect(K))}A=null,z=null,x.reset(),t.setRenderTarget(p),d=null,f=null,u=null,s=null,b=null,j.stop(),n.isPresenting=!1,t.setPixelRatio(S),t.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){r=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){a=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(F){l=F},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(F){if(s=F,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",N),s.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(I),s.renderState.layers===void 0){let K={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,K),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),b=new Ci(d.framebufferWidth,d.framebufferHeight,{format:jn,type:Ri,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let K=null,pt=null,Q=null;m.depth&&(Q=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,K=m.stencil?hr:ir,pt=m.stencil?lr:Es);let ot={colorFormat:e.RGBA8,depthFormat:Q,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(ot),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),b=new Ci(f.textureWidth,f.textureHeight,{format:jn,type:Ri,depthTexture:new ca(f.textureWidth,f.textureHeight,pt,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),j.setContext(s),j.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function X(F){for(let K=0;K<F.removed.length;K++){let pt=F.removed[K],Q=_.indexOf(pt);Q>=0&&(_[Q]=null,M[Q].disconnect(pt))}for(let K=0;K<F.added.length;K++){let pt=F.added[K],Q=_.indexOf(pt);if(Q===-1){for(let yt=0;yt<M.length;yt++)if(yt>=_.length){_.push(pt),Q=yt;break}else if(_[yt]===null){_[yt]=pt,Q=yt;break}if(Q===-1)break}let ot=M[Q];ot&&ot.connect(pt)}}let G=new L,nt=new L;function W(F,K,pt){G.setFromMatrixPosition(K.matrixWorld),nt.setFromMatrixPosition(pt.matrixWorld);let Q=G.distanceTo(nt),ot=K.projectionMatrix.elements,yt=pt.projectionMatrix.elements,Tt=ot[14]/(ot[10]-1),Vt=ot[14]/(ot[10]+1),it=(ot[9]+1)/ot[5],ct=(ot[9]-1)/ot[5],P=(ot[8]-1)/ot[0],Bt=(yt[8]+1)/yt[0],ut=Tt*P,Rt=Tt*Bt,bt=Q/(-P+Bt),$t=bt*-P;if(K.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX($t),F.translateZ(bt),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert(),ot[10]===-1)F.projectionMatrix.copy(K.projectionMatrix),F.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{let Ft=Tt+bt,C=Vt+bt,E=ut-$t,q=Rt+(Q-$t),st=it*Vt/C*Ft,ft=ct*Vt/C*Ft;F.projectionMatrix.makePerspective(E,q,st,ft,Ft,C),F.projectionMatrixInverse.copy(F.projectionMatrix).invert()}}function V(F,K){K===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(K.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(s===null)return;let K=F.near,pt=F.far;x.texture!==null&&(x.depthNear>0&&(K=x.depthNear),x.depthFar>0&&(pt=x.depthFar)),y.near=w.near=R.near=K,y.far=w.far=R.far=pt,(A!==y.near||z!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),A=y.near,z=y.far),R.layers.mask=F.layers.mask|2,w.layers.mask=F.layers.mask|4,y.layers.mask=R.layers.mask|w.layers.mask;let Q=F.parent,ot=y.cameras;V(y,Q);for(let yt=0;yt<ot.length;yt++)V(ot[yt],Q);ot.length===2?W(y,R,w):y.projectionMatrix.copy(R.projectionMatrix),$(F,y,Q)};function $(F,K,pt){pt===null?F.matrix.copy(K.matrixWorld):(F.matrix.copy(pt.matrixWorld),F.matrix.invert(),F.matrix.multiply(K.matrixWorld)),F.matrix.decompose(F.position,F.quaternion,F.scale),F.updateMatrixWorld(!0),F.projectionMatrix.copy(K.projectionMatrix),F.projectionMatrixInverse.copy(K.projectionMatrixInverse),F.isPerspectiveCamera&&(F.fov=_l*2*Math.atan(1/F.projectionMatrix.elements[5]),F.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(F){c=F,f!==null&&(f.fixedFoveation=F),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=F)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(y)};let at=null;function _t(F,K){if(h=K.getViewerPose(l||o),g=K,h!==null){let pt=h.views;d!==null&&(t.setRenderTargetFramebuffer(b,d.framebuffer),t.setRenderTarget(b));let Q=!1;pt.length!==y.cameras.length&&(y.cameras.length=0,Q=!0);for(let yt=0;yt<pt.length;yt++){let Tt=pt[yt],Vt=null;if(d!==null)Vt=d.getViewport(Tt);else{let ct=u.getViewSubImage(f,Tt);Vt=ct.viewport,yt===0&&(t.setRenderTargetTextures(b,ct.colorTexture,f.ignoreDepthValues?void 0:ct.depthStencilTexture),t.setRenderTarget(b))}let it=v[yt];it===void 0&&(it=new bn,it.layers.enable(yt),it.viewport=new Ve,v[yt]=it),it.matrix.fromArray(Tt.transform.matrix),it.matrix.decompose(it.position,it.quaternion,it.scale),it.projectionMatrix.fromArray(Tt.projectionMatrix),it.projectionMatrixInverse.copy(it.projectionMatrix).invert(),it.viewport.set(Vt.x,Vt.y,Vt.width,Vt.height),yt===0&&(y.matrix.copy(it.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),Q===!0&&y.cameras.push(it)}let ot=s.enabledFeatures;if(ot&&ot.includes("depth-sensing")){let yt=u.getDepthInformation(pt[0]);yt&&yt.isValid&&yt.texture&&x.init(t,yt,s.renderState)}}for(let pt=0;pt<M.length;pt++){let Q=_[pt],ot=M[pt];Q!==null&&ot!==void 0&&ot.update(Q,K,l||o)}at&&at(F,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),g=null}let j=new _f;j.setAnimationLoop(_t),this.setAnimationLoop=function(F){at=F},this.dispose=function(){}}},ms=new li,jx=new Re;function Qx(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,xf(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,b,M,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,b,M):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===on&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===on&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let b=t.get(p),M=b.envMap,_=b.envMapRotation;M&&(m.envMap.value=M,ms.copy(_),ms.x*=-1,ms.y*=-1,ms.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(ms.y*=-1,ms.z*=-1),m.envMapRotation.value.setFromMatrix4(jx.makeRotationFromEuler(ms)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,b,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=M*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===on&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let b=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function t_(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,M){let _=M.program;n.uniformBlockBinding(b,_)}function l(b,M){let _=s[b.id];_===void 0&&(g(b),_=h(b),s[b.id]=_,b.addEventListener("dispose",m));let I=M.program;n.updateUBOMapping(b,I);let S=t.render.frame;r[b.id]!==S&&(f(b),r[b.id]=S)}function h(b){let M=u();b.__bindingPointIndex=M;let _=i.createBuffer(),I=b.__size,S=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,I,S),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,_),_}function u(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){let M=s[b.id],_=b.uniforms,I=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let S=0,R=_.length;S<R;S++){let w=Array.isArray(_[S])?_[S]:[_[S]];for(let v=0,y=w.length;v<y;v++){let A=w[v];if(d(A,S,v,I)===!0){let z=A.__offset,U=Array.isArray(A.value)?A.value:[A.value],N=0;for(let X=0;X<U.length;X++){let G=U[X],nt=x(G);typeof G=="number"||typeof G=="boolean"?(A.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,z+N,A.__data)):G.isMatrix3?(A.__data[0]=G.elements[0],A.__data[1]=G.elements[1],A.__data[2]=G.elements[2],A.__data[3]=0,A.__data[4]=G.elements[3],A.__data[5]=G.elements[4],A.__data[6]=G.elements[5],A.__data[7]=0,A.__data[8]=G.elements[6],A.__data[9]=G.elements[7],A.__data[10]=G.elements[8],A.__data[11]=0):(G.toArray(A.__data,N),N+=nt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,A.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(b,M,_,I){let S=b.value,R=M+"_"+_;if(I[R]===void 0)return typeof S=="number"||typeof S=="boolean"?I[R]=S:I[R]=S.clone(),!0;{let w=I[R];if(typeof S=="number"||typeof S=="boolean"){if(w!==S)return I[R]=S,!0}else if(w.equals(S)===!1)return w.copy(S),!0}return!1}function g(b){let M=b.uniforms,_=0,I=16;for(let R=0,w=M.length;R<w;R++){let v=Array.isArray(M[R])?M[R]:[M[R]];for(let y=0,A=v.length;y<A;y++){let z=v[y],U=Array.isArray(z.value)?z.value:[z.value];for(let N=0,X=U.length;N<X;N++){let G=U[N],nt=x(G),W=_%I,V=W%nt.boundary,$=W+V;_+=V,$!==0&&I-$<nt.storage&&(_+=I-$),z.__data=new Float32Array(nt.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=_,_+=nt.storage}}}let S=_%I;return S>0&&(_+=I-S),b.__size=_,b.__cache={},this}function x(b){let M={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(M.boundary=4,M.storage=4):b.isVector2?(M.boundary=8,M.storage=8):b.isVector3||b.isColor?(M.boundary=16,M.storage=12):b.isVector4?(M.boundary=16,M.storage=16):b.isMatrix3?(M.boundary=48,M.storage=48):b.isMatrix4?(M.boundary=64,M.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),M}function m(b){let M=b.target;M.removeEventListener("dispose",m);let _=o.indexOf(M.__bindingPointIndex);o.splice(_,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function p(){for(let b in s)i.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}var la=class{constructor(t={}){let{canvas:e=sp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;let g=new Uint32Array(4),x=new Int32Array(4),m=null,p=null,b=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=We,this.toneMapping=Qi,this.toneMappingExposure=1;let _=this,I=!1,S=0,R=0,w=null,v=-1,y=null,A=new Ve,z=new Ve,U=null,N=new At(0),X=0,G=e.width,nt=e.height,W=1,V=null,$=null,at=new Ve(0,0,G,nt),_t=new Ve(0,0,G,nt),j=!1,F=new Yr,K=!1,pt=!1,Q=new Re,ot=new Re,yt=new L,Tt=new Ve,Vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},it=!1;function ct(){return w===null?W:1}let P=n;function Bt(T,H){return e.getContext(T,H)}try{let T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r170"),e.addEventListener("webglcontextlost",ht,!1),e.addEventListener("webglcontextrestored",zt,!1),e.addEventListener("webglcontextcreationerror",Dt,!1),P===null){let H="webgl2";if(P=Bt(H,T),P===null)throw Bt(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let ut,Rt,bt,$t,Ft,C,E,q,st,ft,rt,Wt,Ct,Ot,pe,xt,Ht,Kt,te,kt,xe,he,Le,O;function Lt(){ut=new gg(P),ut.init(),he=new Zx(P,ut),Rt=new hg(P,ut,t,he),bt=new Xx(P,ut),Rt.reverseDepthBuffer&&f&&bt.buffers.depth.setReversed(!0),$t=new yg(P),Ft=new Px,C=new Yx(P,ut,bt,Ft,Rt,he,$t),E=new fg(_),q=new mg(_),st=new Sp(P),Le=new cg(P,st),ft=new xg(P,st,$t,Le),rt=new bg(P,ft,st,$t),te=new vg(P,Rt,C),xt=new ug(Ft),Wt=new Lx(_,E,q,ut,Rt,Le,xt),Ct=new Qx(_,Ft),Ot=new Ux,pe=new Hx(ut),Kt=new ag(_,E,q,bt,rt,d,c),Ht=new Gx(_,rt,Rt),O=new t_(P,$t,Rt,bt),kt=new lg(P,ut,$t),xe=new _g(P,ut,$t),$t.programs=Wt.programs,_.capabilities=Rt,_.extensions=ut,_.properties=Ft,_.renderLists=Ot,_.shadowMap=Ht,_.state=bt,_.info=$t}Lt();let tt=new Ul(_,P);this.xr=tt,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let T=ut.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=ut.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(T){T!==void 0&&(W=T,this.setSize(G,nt,!1))},this.getSize=function(T){return T.set(G,nt)},this.setSize=function(T,H,Z=!0){if(tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=T,nt=H,e.width=Math.floor(T*W),e.height=Math.floor(H*W),Z===!0&&(e.style.width=T+"px",e.style.height=H+"px"),this.setViewport(0,0,T,H)},this.getDrawingBufferSize=function(T){return T.set(G*W,nt*W).floor()},this.setDrawingBufferSize=function(T,H,Z){G=T,nt=H,W=Z,e.width=Math.floor(T*Z),e.height=Math.floor(H*Z),this.setViewport(0,0,T,H)},this.getCurrentViewport=function(T){return T.copy(A)},this.getViewport=function(T){return T.copy(at)},this.setViewport=function(T,H,Z,J){T.isVector4?at.set(T.x,T.y,T.z,T.w):at.set(T,H,Z,J),bt.viewport(A.copy(at).multiplyScalar(W).round())},this.getScissor=function(T){return T.copy(_t)},this.setScissor=function(T,H,Z,J){T.isVector4?_t.set(T.x,T.y,T.z,T.w):_t.set(T,H,Z,J),bt.scissor(z.copy(_t).multiplyScalar(W).round())},this.getScissorTest=function(){return j},this.setScissorTest=function(T){bt.setScissorTest(j=T)},this.setOpaqueSort=function(T){V=T},this.setTransparentSort=function(T){$=T},this.getClearColor=function(T){return T.copy(Kt.getClearColor())},this.setClearColor=function(){Kt.setClearColor.apply(Kt,arguments)},this.getClearAlpha=function(){return Kt.getClearAlpha()},this.setClearAlpha=function(){Kt.setClearAlpha.apply(Kt,arguments)},this.clear=function(T=!0,H=!0,Z=!0){let J=0;if(T){let k=!1;if(w!==null){let vt=w.texture.format;k=vt===uh||vt===hh||vt===lh}if(k){let vt=w.texture.type,Ut=vt===Ri||vt===Es||vt===qr||vt===lr||vt===oh||vt===ah,Xt=Kt.getClearColor(),qt=Kt.getClearAlpha(),ne=Xt.r,re=Xt.g,Yt=Xt.b;Ut?(g[0]=ne,g[1]=re,g[2]=Yt,g[3]=qt,P.clearBufferuiv(P.COLOR,0,g)):(x[0]=ne,x[1]=re,x[2]=Yt,x[3]=qt,P.clearBufferiv(P.COLOR,0,x))}else J|=P.COLOR_BUFFER_BIT}H&&(J|=P.DEPTH_BUFFER_BIT),Z&&(J|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ht,!1),e.removeEventListener("webglcontextrestored",zt,!1),e.removeEventListener("webglcontextcreationerror",Dt,!1),Ot.dispose(),pe.dispose(),Ft.dispose(),E.dispose(),q.dispose(),rt.dispose(),Le.dispose(),O.dispose(),Wt.dispose(),tt.dispose(),tt.removeEventListener("sessionstart",zh),tt.removeEventListener("sessionend",Fh),ls.stop()};function ht(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function zt(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;let T=$t.autoReset,H=Ht.enabled,Z=Ht.autoUpdate,J=Ht.needsUpdate,k=Ht.type;Lt(),$t.autoReset=T,Ht.enabled=H,Ht.autoUpdate=Z,Ht.needsUpdate=J,Ht.type=k}function Dt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function se(T){let H=T.target;H.removeEventListener("dispose",se),ke(H)}function ke(T){fn(T),Ft.remove(T)}function fn(T){let H=Ft.get(T).programs;H!==void 0&&(H.forEach(function(Z){Wt.releaseProgram(Z)}),T.isShaderMaterial&&Wt.releaseShaderCache(T))}this.renderBufferDirect=function(T,H,Z,J,k,vt){H===null&&(H=Vt);let Ut=k.isMesh&&k.matrixWorld.determinant()<0,Xt=md(T,H,Z,J,k);bt.setMaterial(J,Ut);let qt=Z.index,ne=1;if(J.wireframe===!0){if(qt=ft.getWireframeAttribute(Z),qt===void 0)return;ne=2}let re=Z.drawRange,Yt=Z.attributes.position,ve=re.start*ne,Pe=(re.start+re.count)*ne;vt!==null&&(ve=Math.max(ve,vt.start*ne),Pe=Math.min(Pe,(vt.start+vt.count)*ne)),qt!==null?(ve=Math.max(ve,0),Pe=Math.min(Pe,qt.count)):Yt!=null&&(ve=Math.max(ve,0),Pe=Math.min(Pe,Yt.count));let De=Pe-ve;if(De<0||De===1/0)return;Le.setup(k,J,Xt,Z,qt);let Tn,be=kt;if(qt!==null&&(Tn=st.get(qt),be=xe,be.setIndex(Tn)),k.isMesh)J.wireframe===!0?(bt.setLineWidth(J.wireframeLinewidth*ct()),be.setMode(P.LINES)):be.setMode(P.TRIANGLES);else if(k.isLine){let Zt=J.linewidth;Zt===void 0&&(Zt=1),bt.setLineWidth(Zt*ct()),k.isLineSegments?be.setMode(P.LINES):k.isLineLoop?be.setMode(P.LINE_LOOP):be.setMode(P.LINE_STRIP)}else k.isPoints?be.setMode(P.POINTS):k.isSprite&&be.setMode(P.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)be.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(ut.get("WEBGL_multi_draw"))be.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let Zt=k._multiDrawStarts,xi=k._multiDrawCounts,Me=k._multiDrawCount,Zn=qt?st.get(qt).bytesPerElement:1,Ns=Ft.get(J).currentProgram.getUniforms();for(let Pn=0;Pn<Me;Pn++)Ns.setValue(P,"_gl_DrawID",Pn),be.render(Zt[Pn]/Zn,xi[Pn])}else if(k.isInstancedMesh)be.renderInstances(ve,De,k.count);else if(Z.isInstancedBufferGeometry){let Zt=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,xi=Math.min(Z.instanceCount,Zt);be.renderInstances(ve,De,xi)}else be.render(ve,De)};function Ee(T,H,Z){T.transparent===!0&&T.side===$e&&T.forceSinglePass===!1?(T.side=on,T.needsUpdate=!0,fo(T,H,Z),T.side=es,T.needsUpdate=!0,fo(T,H,Z),T.side=$e):fo(T,H,Z)}this.compile=function(T,H,Z=null){Z===null&&(Z=T),p=pe.get(Z),p.init(H),M.push(p),Z.traverseVisible(function(k){k.isLight&&k.layers.test(H.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),T!==Z&&T.traverseVisible(function(k){k.isLight&&k.layers.test(H.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights();let J=new Set;return T.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let vt=k.material;if(vt)if(Array.isArray(vt))for(let Ut=0;Ut<vt.length;Ut++){let Xt=vt[Ut];Ee(Xt,Z,k),J.add(Xt)}else Ee(vt,Z,k),J.add(vt)}),M.pop(),p=null,J},this.compileAsync=function(T,H,Z=null){let J=this.compile(T,H,Z);return new Promise(k=>{function vt(){if(J.forEach(function(Ut){Ft.get(Ut).currentProgram.isReady()&&J.delete(Ut)}),J.size===0){k(T);return}setTimeout(vt,10)}ut.get("KHR_parallel_shader_compile")!==null?vt():setTimeout(vt,10)})};let Yn=null;function gi(T){Yn&&Yn(T)}function zh(){ls.stop()}function Fh(){ls.start()}let ls=new _f;ls.setAnimationLoop(gi),typeof self<"u"&&ls.setContext(self),this.setAnimationLoop=function(T){Yn=T,tt.setAnimationLoop(T),T===null?ls.stop():ls.start()},tt.addEventListener("sessionstart",zh),tt.addEventListener("sessionend",Fh),this.render=function(T,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),tt.enabled===!0&&tt.isPresenting===!0&&(tt.cameraAutoUpdate===!0&&tt.updateCamera(H),H=tt.getCamera()),T.isScene===!0&&T.onBeforeRender(_,T,H,w),p=pe.get(T,M.length),p.init(H),M.push(p),ot.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),F.setFromProjectionMatrix(ot),pt=this.localClippingEnabled,K=xt.init(this.clippingPlanes,pt),m=Ot.get(T,b.length),m.init(),b.push(m),tt.enabled===!0&&tt.isPresenting===!0){let vt=_.xr.getDepthSensingMesh();vt!==null&&$a(vt,H,-1/0,_.sortObjects)}$a(T,H,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(V,$),it=tt.enabled===!1||tt.isPresenting===!1||tt.hasDepthSensing()===!1,it&&Kt.addToRenderList(m,T),this.info.render.frame++,K===!0&&xt.beginShadows();let Z=p.state.shadowsArray;Ht.render(Z,T,H),K===!0&&xt.endShadows(),this.info.autoReset===!0&&this.info.reset();let J=m.opaque,k=m.transmissive;if(p.setupLights(),H.isArrayCamera){let vt=H.cameras;if(k.length>0)for(let Ut=0,Xt=vt.length;Ut<Xt;Ut++){let qt=vt[Ut];Bh(J,k,T,qt)}it&&Kt.render(T);for(let Ut=0,Xt=vt.length;Ut<Xt;Ut++){let qt=vt[Ut];Oh(m,T,qt,qt.viewport)}}else k.length>0&&Bh(J,k,T,H),it&&Kt.render(T),Oh(m,T,H);w!==null&&(C.updateMultisampleRenderTarget(w),C.updateRenderTargetMipmap(w)),T.isScene===!0&&T.onAfterRender(_,T,H),Le.resetDefaultState(),v=-1,y=null,M.pop(),M.length>0?(p=M[M.length-1],K===!0&&xt.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function $a(T,H,Z,J){if(T.visible===!1)return;if(T.layers.test(H.layers)){if(T.isGroup)Z=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(H);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||F.intersectsSprite(T)){J&&Tt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ot);let Ut=rt.update(T),Xt=T.material;Xt.visible&&m.push(T,Ut,Xt,Z,Tt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||F.intersectsObject(T))){let Ut=rt.update(T),Xt=T.material;if(J&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Tt.copy(T.boundingSphere.center)):(Ut.boundingSphere===null&&Ut.computeBoundingSphere(),Tt.copy(Ut.boundingSphere.center)),Tt.applyMatrix4(T.matrixWorld).applyMatrix4(ot)),Array.isArray(Xt)){let qt=Ut.groups;for(let ne=0,re=qt.length;ne<re;ne++){let Yt=qt[ne],ve=Xt[Yt.materialIndex];ve&&ve.visible&&m.push(T,Ut,ve,Z,Tt.z,Yt)}}else Xt.visible&&m.push(T,Ut,Xt,Z,Tt.z,null)}}let vt=T.children;for(let Ut=0,Xt=vt.length;Ut<Xt;Ut++)$a(vt[Ut],H,Z,J)}function Oh(T,H,Z,J){let k=T.opaque,vt=T.transmissive,Ut=T.transparent;p.setupLightsView(Z),K===!0&&xt.setGlobalState(_.clippingPlanes,Z),J&&bt.viewport(A.copy(J)),k.length>0&&uo(k,H,Z),vt.length>0&&uo(vt,H,Z),Ut.length>0&&uo(Ut,H,Z),bt.buffers.depth.setTest(!0),bt.buffers.depth.setMask(!0),bt.buffers.color.setMask(!0),bt.setPolygonOffset(!1)}function Bh(T,H,Z,J){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[J.id]===void 0&&(p.state.transmissionRenderTarget[J.id]=new Ci(1,1,{generateMipmaps:!0,type:ut.has("EXT_color_buffer_half_float")||ut.has("EXT_color_buffer_float")?no:Ri,minFilter:vs,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ye.workingColorSpace}));let vt=p.state.transmissionRenderTarget[J.id],Ut=J.viewport||A;vt.setSize(Ut.z,Ut.w);let Xt=_.getRenderTarget();_.setRenderTarget(vt),_.getClearColor(N),X=_.getClearAlpha(),X<1&&_.setClearColor(16777215,.5),_.clear(),it&&Kt.render(Z);let qt=_.toneMapping;_.toneMapping=Qi;let ne=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),p.setupLightsView(J),K===!0&&xt.setGlobalState(_.clippingPlanes,J),uo(T,Z,J),C.updateMultisampleRenderTarget(vt),C.updateRenderTargetMipmap(vt),ut.has("WEBGL_multisampled_render_to_texture")===!1){let re=!1;for(let Yt=0,ve=H.length;Yt<ve;Yt++){let Pe=H[Yt],De=Pe.object,Tn=Pe.geometry,be=Pe.material,Zt=Pe.group;if(be.side===$e&&De.layers.test(J.layers)){let xi=be.side;be.side=on,be.needsUpdate=!0,Hh(De,Z,J,Tn,be,Zt),be.side=xi,be.needsUpdate=!0,re=!0}}re===!0&&(C.updateMultisampleRenderTarget(vt),C.updateRenderTargetMipmap(vt))}_.setRenderTarget(Xt),_.setClearColor(N,X),ne!==void 0&&(J.viewport=ne),_.toneMapping=qt}function uo(T,H,Z){let J=H.isScene===!0?H.overrideMaterial:null;for(let k=0,vt=T.length;k<vt;k++){let Ut=T[k],Xt=Ut.object,qt=Ut.geometry,ne=J===null?Ut.material:J,re=Ut.group;Xt.layers.test(Z.layers)&&Hh(Xt,H,Z,qt,ne,re)}}function Hh(T,H,Z,J,k,vt){T.onBeforeRender(_,H,Z,J,k,vt),T.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),k.onBeforeRender(_,H,Z,J,T,vt),k.transparent===!0&&k.side===$e&&k.forceSinglePass===!1?(k.side=on,k.needsUpdate=!0,_.renderBufferDirect(Z,H,J,k,T,vt),k.side=es,k.needsUpdate=!0,_.renderBufferDirect(Z,H,J,k,T,vt),k.side=$e):_.renderBufferDirect(Z,H,J,k,T,vt),T.onAfterRender(_,H,Z,J,k,vt)}function fo(T,H,Z){H.isScene!==!0&&(H=Vt);let J=Ft.get(T),k=p.state.lights,vt=p.state.shadowsArray,Ut=k.state.version,Xt=Wt.getParameters(T,k.state,vt,H,Z),qt=Wt.getProgramCacheKey(Xt),ne=J.programs;J.environment=T.isMeshStandardMaterial?H.environment:null,J.fog=H.fog,J.envMap=(T.isMeshStandardMaterial?q:E).get(T.envMap||J.environment),J.envMapRotation=J.environment!==null&&T.envMap===null?H.environmentRotation:T.envMapRotation,ne===void 0&&(T.addEventListener("dispose",se),ne=new Map,J.programs=ne);let re=ne.get(qt);if(re!==void 0){if(J.currentProgram===re&&J.lightsStateVersion===Ut)return Vh(T,Xt),re}else Xt.uniforms=Wt.getUniforms(T),T.onBeforeCompile(Xt,_),re=Wt.acquireProgram(Xt,qt),ne.set(qt,re),J.uniforms=Xt.uniforms;let Yt=J.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Yt.clippingPlanes=xt.uniform),Vh(T,Xt),J.needsLights=xd(T),J.lightsStateVersion=Ut,J.needsLights&&(Yt.ambientLightColor.value=k.state.ambient,Yt.lightProbe.value=k.state.probe,Yt.directionalLights.value=k.state.directional,Yt.directionalLightShadows.value=k.state.directionalShadow,Yt.spotLights.value=k.state.spot,Yt.spotLightShadows.value=k.state.spotShadow,Yt.rectAreaLights.value=k.state.rectArea,Yt.ltc_1.value=k.state.rectAreaLTC1,Yt.ltc_2.value=k.state.rectAreaLTC2,Yt.pointLights.value=k.state.point,Yt.pointLightShadows.value=k.state.pointShadow,Yt.hemisphereLights.value=k.state.hemi,Yt.directionalShadowMap.value=k.state.directionalShadowMap,Yt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Yt.spotShadowMap.value=k.state.spotShadowMap,Yt.spotLightMatrix.value=k.state.spotLightMatrix,Yt.spotLightMap.value=k.state.spotLightMap,Yt.pointShadowMap.value=k.state.pointShadowMap,Yt.pointShadowMatrix.value=k.state.pointShadowMatrix),J.currentProgram=re,J.uniformsList=null,re}function kh(T){if(T.uniformsList===null){let H=T.currentProgram.getUniforms();T.uniformsList=rr.seqWithValue(H.seq,T.uniforms)}return T.uniformsList}function Vh(T,H){let Z=Ft.get(T);Z.outputColorSpace=H.outputColorSpace,Z.batching=H.batching,Z.batchingColor=H.batchingColor,Z.instancing=H.instancing,Z.instancingColor=H.instancingColor,Z.instancingMorph=H.instancingMorph,Z.skinning=H.skinning,Z.morphTargets=H.morphTargets,Z.morphNormals=H.morphNormals,Z.morphColors=H.morphColors,Z.morphTargetsCount=H.morphTargetsCount,Z.numClippingPlanes=H.numClippingPlanes,Z.numIntersection=H.numClipIntersection,Z.vertexAlphas=H.vertexAlphas,Z.vertexTangents=H.vertexTangents,Z.toneMapping=H.toneMapping}function md(T,H,Z,J,k){H.isScene!==!0&&(H=Vt),C.resetTextureUnits();let vt=H.fog,Ut=J.isMeshStandardMaterial?H.environment:null,Xt=w===null?_.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:_r,qt=(J.isMeshStandardMaterial?q:E).get(J.envMap||Ut),ne=J.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,re=!!Z.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Yt=!!Z.morphAttributes.position,ve=!!Z.morphAttributes.normal,Pe=!!Z.morphAttributes.color,De=Qi;J.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(De=_.toneMapping);let Tn=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,be=Tn!==void 0?Tn.length:0,Zt=Ft.get(J),xi=p.state.lights;if(K===!0&&(pt===!0||T!==y)){let Hn=T===y&&J.id===v;xt.setState(J,T,Hn)}let Me=!1;J.version===Zt.__version?(Zt.needsLights&&Zt.lightsStateVersion!==xi.state.version||Zt.outputColorSpace!==Xt||k.isBatchedMesh&&Zt.batching===!1||!k.isBatchedMesh&&Zt.batching===!0||k.isBatchedMesh&&Zt.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Zt.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Zt.instancing===!1||!k.isInstancedMesh&&Zt.instancing===!0||k.isSkinnedMesh&&Zt.skinning===!1||!k.isSkinnedMesh&&Zt.skinning===!0||k.isInstancedMesh&&Zt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Zt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Zt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Zt.instancingMorph===!1&&k.morphTexture!==null||Zt.envMap!==qt||J.fog===!0&&Zt.fog!==vt||Zt.numClippingPlanes!==void 0&&(Zt.numClippingPlanes!==xt.numPlanes||Zt.numIntersection!==xt.numIntersection)||Zt.vertexAlphas!==ne||Zt.vertexTangents!==re||Zt.morphTargets!==Yt||Zt.morphNormals!==ve||Zt.morphColors!==Pe||Zt.toneMapping!==De||Zt.morphTargetsCount!==be)&&(Me=!0):(Me=!0,Zt.__version=J.version);let Zn=Zt.currentProgram;Me===!0&&(Zn=fo(J,H,k));let Ns=!1,Pn=!1,Ir=!1,Ue=Zn.getUniforms(),si=Zt.uniforms;if(bt.useProgram(Zn.program)&&(Ns=!0,Pn=!0,Ir=!0),J.id!==v&&(v=J.id,Pn=!0),Ns||y!==T){bt.buffers.depth.getReversed()?(Q.copy(T.projectionMatrix),op(Q),ap(Q),Ue.setValue(P,"projectionMatrix",Q)):Ue.setValue(P,"projectionMatrix",T.projectionMatrix),Ue.setValue(P,"viewMatrix",T.matrixWorldInverse);let ki=Ue.map.cameraPosition;ki!==void 0&&ki.setValue(P,yt.setFromMatrixPosition(T.matrixWorld)),Rt.logarithmicDepthBuffer&&Ue.setValue(P,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Ue.setValue(P,"isOrthographic",T.isOrthographicCamera===!0),y!==T&&(y=T,Pn=!0,Ir=!0)}if(k.isSkinnedMesh){Ue.setOptional(P,k,"bindMatrix"),Ue.setOptional(P,k,"bindMatrixInverse");let Hn=k.skeleton;Hn&&(Hn.boneTexture===null&&Hn.computeBoneTexture(),Ue.setValue(P,"boneTexture",Hn.boneTexture,C))}k.isBatchedMesh&&(Ue.setOptional(P,k,"batchingTexture"),Ue.setValue(P,"batchingTexture",k._matricesTexture,C),Ue.setOptional(P,k,"batchingIdTexture"),Ue.setValue(P,"batchingIdTexture",k._indirectTexture,C),Ue.setOptional(P,k,"batchingColorTexture"),k._colorsTexture!==null&&Ue.setValue(P,"batchingColorTexture",k._colorsTexture,C));let Lr=Z.morphAttributes;if((Lr.position!==void 0||Lr.normal!==void 0||Lr.color!==void 0)&&te.update(k,Z,Zn),(Pn||Zt.receiveShadow!==k.receiveShadow)&&(Zt.receiveShadow=k.receiveShadow,Ue.setValue(P,"receiveShadow",k.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(si.envMap.value=qt,si.flipEnvMap.value=qt.isCubeTexture&&qt.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&H.environment!==null&&(si.envMapIntensity.value=H.environmentIntensity),Pn&&(Ue.setValue(P,"toneMappingExposure",_.toneMappingExposure),Zt.needsLights&&gd(si,Ir),vt&&J.fog===!0&&Ct.refreshFogUniforms(si,vt),Ct.refreshMaterialUniforms(si,J,W,nt,p.state.transmissionRenderTarget[T.id]),rr.upload(P,kh(Zt),si,C)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(rr.upload(P,kh(Zt),si,C),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Ue.setValue(P,"center",k.center),Ue.setValue(P,"modelViewMatrix",k.modelViewMatrix),Ue.setValue(P,"normalMatrix",k.normalMatrix),Ue.setValue(P,"modelMatrix",k.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){let Hn=J.uniformsGroups;for(let ki=0,Vi=Hn.length;ki<Vi;ki++){let Gh=Hn[ki];O.update(Gh,Zn),O.bind(Gh,Zn)}}return Zn}function gd(T,H){T.ambientLightColor.needsUpdate=H,T.lightProbe.needsUpdate=H,T.directionalLights.needsUpdate=H,T.directionalLightShadows.needsUpdate=H,T.pointLights.needsUpdate=H,T.pointLightShadows.needsUpdate=H,T.spotLights.needsUpdate=H,T.spotLightShadows.needsUpdate=H,T.rectAreaLights.needsUpdate=H,T.hemisphereLights.needsUpdate=H}function xd(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(T,H,Z){Ft.get(T.texture).__webglTexture=H,Ft.get(T.depthTexture).__webglTexture=Z;let J=Ft.get(T);J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=Z===void 0,J.__autoAllocateDepthBuffer||ut.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,H){let Z=Ft.get(T);Z.__webglFramebuffer=H,Z.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(T,H=0,Z=0){w=T,S=H,R=Z;let J=!0,k=null,vt=!1,Ut=!1;if(T){let qt=Ft.get(T);if(qt.__useDefaultFramebuffer!==void 0)bt.bindFramebuffer(P.FRAMEBUFFER,null),J=!1;else if(qt.__webglFramebuffer===void 0)C.setupRenderTarget(T);else if(qt.__hasExternalTextures)C.rebindTextures(T,Ft.get(T.texture).__webglTexture,Ft.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Yt=T.depthTexture;if(qt.__boundDepthTexture!==Yt){if(Yt!==null&&Ft.has(Yt)&&(T.width!==Yt.image.width||T.height!==Yt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(T)}}let ne=T.texture;(ne.isData3DTexture||ne.isDataArrayTexture||ne.isCompressedArrayTexture)&&(Ut=!0);let re=Ft.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(re[H])?k=re[H][Z]:k=re[H],vt=!0):T.samples>0&&C.useMultisampledRTT(T)===!1?k=Ft.get(T).__webglMultisampledFramebuffer:Array.isArray(re)?k=re[Z]:k=re,A.copy(T.viewport),z.copy(T.scissor),U=T.scissorTest}else A.copy(at).multiplyScalar(W).floor(),z.copy(_t).multiplyScalar(W).floor(),U=j;if(bt.bindFramebuffer(P.FRAMEBUFFER,k)&&J&&bt.drawBuffers(T,k),bt.viewport(A),bt.scissor(z),bt.setScissorTest(U),vt){let qt=Ft.get(T.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+H,qt.__webglTexture,Z)}else if(Ut){let qt=Ft.get(T.texture),ne=H||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,qt.__webglTexture,Z||0,ne)}v=-1},this.readRenderTargetPixels=function(T,H,Z,J,k,vt,Ut){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xt=Ft.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ut!==void 0&&(Xt=Xt[Ut]),Xt){bt.bindFramebuffer(P.FRAMEBUFFER,Xt);try{let qt=T.texture,ne=qt.format,re=qt.type;if(!Rt.textureFormatReadable(ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Rt.textureTypeReadable(re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=T.width-J&&Z>=0&&Z<=T.height-k&&P.readPixels(H,Z,J,k,he.convert(ne),he.convert(re),vt)}finally{let qt=w!==null?Ft.get(w).__webglFramebuffer:null;bt.bindFramebuffer(P.FRAMEBUFFER,qt)}}},this.readRenderTargetPixelsAsync=async function(T,H,Z,J,k,vt,Ut){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xt=Ft.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ut!==void 0&&(Xt=Xt[Ut]),Xt){let qt=T.texture,ne=qt.format,re=qt.type;if(!Rt.textureFormatReadable(ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Rt.textureTypeReadable(re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(H>=0&&H<=T.width-J&&Z>=0&&Z<=T.height-k){bt.bindFramebuffer(P.FRAMEBUFFER,Xt);let Yt=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Yt),P.bufferData(P.PIXEL_PACK_BUFFER,vt.byteLength,P.STREAM_READ),P.readPixels(H,Z,J,k,he.convert(ne),he.convert(re),0);let ve=w!==null?Ft.get(w).__webglFramebuffer:null;bt.bindFramebuffer(P.FRAMEBUFFER,ve);let Pe=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await rp(P,Pe,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Yt),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,vt),P.deleteBuffer(Yt),P.deleteSync(Pe),vt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,H=null,Z=0){T.isTexture!==!0&&(kr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),H=arguments[0]||null,T=arguments[1]);let J=Math.pow(2,-Z),k=Math.floor(T.image.width*J),vt=Math.floor(T.image.height*J),Ut=H!==null?H.x:0,Xt=H!==null?H.y:0;C.setTexture2D(T,0),P.copyTexSubImage2D(P.TEXTURE_2D,Z,0,0,Ut,Xt,k,vt),bt.unbindTexture()},this.copyTextureToTexture=function(T,H,Z=null,J=null,k=0){T.isTexture!==!0&&(kr("WebGLRenderer: copyTextureToTexture function signature has changed."),J=arguments[0]||null,T=arguments[1],H=arguments[2],k=arguments[3]||0,Z=null);let vt,Ut,Xt,qt,ne,re,Yt,ve,Pe,De=T.isCompressedTexture?T.mipmaps[k]:T.image;Z!==null?(vt=Z.max.x-Z.min.x,Ut=Z.max.y-Z.min.y,Xt=Z.isBox3?Z.max.z-Z.min.z:1,qt=Z.min.x,ne=Z.min.y,re=Z.isBox3?Z.min.z:0):(vt=De.width,Ut=De.height,Xt=De.depth||1,qt=0,ne=0,re=0),J!==null?(Yt=J.x,ve=J.y,Pe=J.z):(Yt=0,ve=0,Pe=0);let Tn=he.convert(H.format),be=he.convert(H.type),Zt;H.isData3DTexture?(C.setTexture3D(H,0),Zt=P.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(C.setTexture2DArray(H,0),Zt=P.TEXTURE_2D_ARRAY):(C.setTexture2D(H,0),Zt=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,H.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,H.unpackAlignment);let xi=P.getParameter(P.UNPACK_ROW_LENGTH),Me=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Zn=P.getParameter(P.UNPACK_SKIP_PIXELS),Ns=P.getParameter(P.UNPACK_SKIP_ROWS),Pn=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,De.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,De.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,qt),P.pixelStorei(P.UNPACK_SKIP_ROWS,ne),P.pixelStorei(P.UNPACK_SKIP_IMAGES,re);let Ir=T.isDataArrayTexture||T.isData3DTexture,Ue=H.isDataArrayTexture||H.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){let si=Ft.get(T),Lr=Ft.get(H),Hn=Ft.get(si.__renderTarget),ki=Ft.get(Lr.__renderTarget);bt.bindFramebuffer(P.READ_FRAMEBUFFER,Hn.__webglFramebuffer),bt.bindFramebuffer(P.DRAW_FRAMEBUFFER,ki.__webglFramebuffer);for(let Vi=0;Vi<Xt;Vi++)Ir&&P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ft.get(T).__webglTexture,k,re+Vi),T.isDepthTexture?(Ue&&P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ft.get(H).__webglTexture,k,Pe+Vi),P.blitFramebuffer(qt,ne,vt,Ut,Yt,ve,vt,Ut,P.DEPTH_BUFFER_BIT,P.NEAREST)):Ue?P.copyTexSubImage3D(Zt,k,Yt,ve,Pe+Vi,qt,ne,vt,Ut):P.copyTexSubImage2D(Zt,k,Yt,ve,Pe+Vi,qt,ne,vt,Ut);bt.bindFramebuffer(P.READ_FRAMEBUFFER,null),bt.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else Ue?T.isDataTexture||T.isData3DTexture?P.texSubImage3D(Zt,k,Yt,ve,Pe,vt,Ut,Xt,Tn,be,De.data):H.isCompressedArrayTexture?P.compressedTexSubImage3D(Zt,k,Yt,ve,Pe,vt,Ut,Xt,Tn,De.data):P.texSubImage3D(Zt,k,Yt,ve,Pe,vt,Ut,Xt,Tn,be,De):T.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,k,Yt,ve,vt,Ut,Tn,be,De.data):T.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,k,Yt,ve,De.width,De.height,Tn,De.data):P.texSubImage2D(P.TEXTURE_2D,k,Yt,ve,vt,Ut,Tn,be,De);P.pixelStorei(P.UNPACK_ROW_LENGTH,xi),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Me),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Zn),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ns),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Pn),k===0&&H.generateMipmaps&&P.generateMipmap(Zt),bt.unbindTexture()},this.copyTextureToTexture3D=function(T,H,Z=null,J=null,k=0){return T.isTexture!==!0&&(kr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Z=arguments[0]||null,J=arguments[1]||null,T=arguments[2],H=arguments[3],k=arguments[4]||0),kr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,H,Z,J,k)},this.initRenderTarget=function(T){Ft.get(T).__webglFramebuffer===void 0&&C.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?C.setTextureCube(T,0):T.isData3DTexture?C.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?C.setTexture2DArray(T,0):C.setTexture2D(T,0),bt.unbindTexture()},this.resetState=function(){S=0,R=0,w=null,bt.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=ye._getDrawingBufferColorSpace(t),e.unpackColorSpace=ye._getUnpackColorSpace()}};var dr=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new At(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},pr=class extends Ne{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new li,this.environmentIntensity=1,this.environmentRotation=new li,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Nl=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=xl,this.updateRanges=[],this.version=0,this.uuid=Si()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Si()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Si()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},yn=new L,ha=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)yn.fromBufferAttribute(this,e),yn.applyMatrix4(t),this.setXYZ(e,yn.x,yn.y,yn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)yn.fromBufferAttribute(this,e),yn.applyNormalMatrix(t),this.setXYZ(e,yn.x,yn.y,yn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)yn.fromBufferAttribute(this,e),yn.transformDirection(t),this.setXYZ(e,yn.x,yn.y,yn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=oi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Se(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=oi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=oi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=oi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=oi(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),s=Se(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),s=Se(s,this.array),r=Se(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ze(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Zr=class extends Li{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new At(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},$s,zr=new L,Ks=new L,js=new L,Qs=new lt,Fr=new lt,Ef=new Re,No=new L,Or=new L,zo=new L,Vu=new lt,Ac=new lt,Gu=new lt,ua=class extends Ne{constructor(t=new Zr){if(super(),this.isSprite=!0,this.type="Sprite",$s===void 0){$s=new ze;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Nl(e,5);$s.setIndex([0,1,2,0,2,3]),$s.setAttribute("position",new ha(n,3,0,!1)),$s.setAttribute("uv",new ha(n,2,3,!1))}this.geometry=$s,this.material=t,this.center=new lt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ks.setFromMatrixScale(this.matrixWorld),Ef.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),js.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ks.multiplyScalar(-js.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Fo(No.set(-.5,-.5,0),js,o,Ks,s,r),Fo(Or.set(.5,-.5,0),js,o,Ks,s,r),Fo(zo.set(.5,.5,0),js,o,Ks,s,r),Vu.set(0,0),Ac.set(1,0),Gu.set(1,1);let a=t.ray.intersectTriangle(No,Or,zo,!1,zr);if(a===null&&(Fo(Or.set(-.5,.5,0),js,o,Ks,s,r),Ac.set(0,1),a=t.ray.intersectTriangle(No,zo,Or,!1,zr),a===null))return;let c=t.ray.origin.distanceTo(zr);c<t.near||c>t.far||e.push({distance:c,point:zr.clone(),uv:$i.getInterpolation(zr,No,Or,zo,Vu,Ac,Gu,new lt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Fo(i,t,e,n,s,r){Qs.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Fr.x=r*Qs.x-s*Qs.y,Fr.y=s*Qs.x+r*Qs.y):Fr.copy(Qs),i.copy(t),i.x+=Fr.x,i.y+=Fr.y,i.applyMatrix4(Ef)}var zl=class extends Sn{constructor(t=null,e=1,n=1,s,r,o,a,c,l=Nn,h=Nn,u,f){super(null,o,a,c,l,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var fa=class extends Ze{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},tr=new Re,Wu=new Re,Oo=[],Xu=new Ii,e_=new Re,Br=new Y,Hr=new ss,Qn=class extends Y{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new fa(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,e_)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ii),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,tr),Xu.copy(t.boundingBox).applyMatrix4(tr),this.boundingBox.union(Xu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ss),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,tr),Hr.copy(t.boundingSphere).applyMatrix4(tr),this.boundingSphere.union(Hr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Br.geometry=this.geometry,Br.material=this.material,Br.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Hr.copy(this.boundingSphere),Hr.applyMatrix4(n),t.ray.intersectsSphere(Hr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,tr),Wu.multiplyMatrices(n,tr),Br.matrixWorld=Wu,Br.raycast(t,Oo);for(let o=0,a=Oo.length;o<a;o++){let c=Oo[o];c.instanceId=r,c.object=this,e.push(c)}Oo.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new fa(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new zl(new Float32Array(s*this.count),s,this.count,ch,ci));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Jr=class extends Li{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new At(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},qu=new Re,Fl=new ea,Bo=new ss,Ho=new L,da=class extends Ne{constructor(t=new ze,e=new Jr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Bo.copy(n.boundingSphere),Bo.applyMatrix4(s),Bo.radius+=r,t.ray.intersectsSphere(Bo)===!1)return;qu.copy(s).invert(),Fl.copy(t.ray).applyMatrix4(qu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let f=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let g=f,x=d;g<x;g++){let m=l.getX(g);Ho.fromBufferAttribute(u,m),Yu(Ho,m,c,s,t,e,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let g=f,x=d;g<x;g++)Ho.fromBufferAttribute(u,g),Yu(Ho,g,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Yu(i,t,e,n,s,r,o){let a=Fl.distanceSqToPoint(i);if(a<e){let c=new L;Fl.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Rn=class extends Sn{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Vn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],f=n[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new lt:new L);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new L,s=[],r=[],o=[],a=new L,c=new Re;for(let d=0;d<=t;d++){let g=d/t;s[d]=this.getTangentAt(g,new L)}r[0]=new L,o[0]=new L;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(rn(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(rn(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},$r=class extends Vn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new lt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*u+this.aX,l=f*u+d*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Ol=class extends $r{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function dh(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let f=(o-r)/l-(a-r)/(l+h)+(a-o)/h,d=(a-o)/h-(c-o)/(h+u)+(c-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var ko=new L,Rc=new dh,Cc=new dh,Ic=new dh,Pi=class extends Vn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new L){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(ko.subVectors(s[0],s[1]).add(s[0]),l=ko);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(ko.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=ko),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Rc.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,g,x,m),Cc.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,g,x,m),Ic.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(Rc.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),Cc.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),Ic.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(Rc.calc(c),Cc.calc(c),Ic.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new L().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Zu(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function n_(i,t){let e=1-i;return e*e*t}function i_(i,t){return 2*(1-i)*i*t}function s_(i,t){return i*i*t}function Wr(i,t,e,n){return n_(i,t)+i_(i,e)+s_(i,n)}function r_(i,t){let e=1-i;return e*e*e*t}function o_(i,t){let e=1-i;return 3*e*e*i*t}function a_(i,t){return 3*(1-i)*i*i*t}function c_(i,t){return i*i*i*t}function Xr(i,t,e,n,s){return r_(i,t)+o_(i,e)+a_(i,n)+c_(i,s)}var pa=class extends Vn{constructor(t=new lt,e=new lt,n=new lt,s=new lt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new lt){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Xr(t,s.x,r.x,o.x,a.x),Xr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Bl=class extends Vn{constructor(t=new L,e=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new L){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Xr(t,s.x,r.x,o.x,a.x),Xr(t,s.y,r.y,o.y,a.y),Xr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ma=class extends Vn{constructor(t=new lt,e=new lt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new lt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new lt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Hl=class extends Vn{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ga=class extends Vn{constructor(t=new lt,e=new lt,n=new lt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new lt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Wr(t,s.x,r.x,o.x),Wr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},xa=class extends Vn{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Wr(t,s.x,r.x,o.x),Wr(t,s.y,r.y,o.y),Wr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},_a=class extends Vn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new lt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Zu(a,c.x,l.x,h.x,u.x),Zu(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new lt().fromArray(s))}return this}},ya=Object.freeze({__proto__:null,ArcCurve:Ol,CatmullRomCurve3:Pi,CubicBezierCurve:pa,CubicBezierCurve3:Bl,EllipseCurve:$r,LineCurve:ma,LineCurve3:Hl,QuadraticBezierCurve:ga,QuadraticBezierCurve3:xa,SplineCurve:_a}),kl=class extends Vn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ya[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new ya[s.type]().fromJSON(s))}return this}},Kr=class extends kl{constructor(t){super(),this.type="Path",this.currentPoint=new lt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new ma(this.currentPoint.clone(),new lt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new ga(this.currentPoint.clone(),new lt(t,e),new lt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new pa(this.currentPoint.clone(),new lt(t,e),new lt(n,s),new lt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new _a(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){let l=new $r(t,e,n,s,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},an=class i extends ze{constructor(t=[new lt(0,-.5),new lt(.5,0),new lt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=rn(s,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],h=1/e,u=new L,f=new lt,d=new L,g=new L,x=new L,m=0,p=0;for(let b=0;b<=t.length-1;b++)switch(b){case 0:m=t[b+1].x-t[b].x,p=t[b+1].y-t[b].y,d.x=p*1,d.y=-m,d.z=p*0,x.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case t.length-1:c.push(x.x,x.y,x.z);break;default:m=t[b+1].x-t[b].x,p=t[b+1].y-t[b].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),c.push(d.x,d.y,d.z),x.copy(g)}for(let b=0;b<=e;b++){let M=n+b*h*s,_=Math.sin(M),I=Math.cos(M);for(let S=0;S<=t.length-1;S++){u.x=t[S].x*_,u.y=t[S].y,u.z=t[S].x*I,o.push(u.x,u.y,u.z),f.x=b/e,f.y=S/(t.length-1),a.push(f.x,f.y);let R=c[3*S+0]*_,w=c[3*S+1],v=c[3*S+0]*I;l.push(R,w,v)}}for(let b=0;b<e;b++)for(let M=0;M<t.length-1;M++){let _=M+b*t.length,I=_,S=_+t.length,R=_+t.length+1,w=_+1;r.push(I,S,w),r.push(R,w,S)}this.setIndex(r),this.setAttribute("position",new ae(o,3)),this.setAttribute("uv",new ae(a,2)),this.setAttribute("normal",new ae(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},rs=class i extends an{constructor(t=1,e=1,n=4,s=8){let r=new Kr;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new i(t.radius,t.length,t.capSegments,t.radialSegments)}},cn=class i extends ze{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],c=[],l=new L,h=new lt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=n+u/e*s;l.x=t*Math.cos(d),l.y=t*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ae(o,3)),this.setAttribute("normal",new ae(a,3)),this.setAttribute("uv",new ae(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Je=class i extends ze{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],g=0,x=[],m=n/2,p=0;b(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new ae(u,3)),this.setAttribute("normal",new ae(f,3)),this.setAttribute("uv",new ae(d,2));function b(){let _=new L,I=new L,S=0,R=(e-t)/n;for(let w=0;w<=r;w++){let v=[],y=w/r,A=y*(e-t)+t;for(let z=0;z<=s;z++){let U=z/s,N=U*c+a,X=Math.sin(N),G=Math.cos(N);I.x=A*X,I.y=-y*n+m,I.z=A*G,u.push(I.x,I.y,I.z),_.set(X,R,G).normalize(),f.push(_.x,_.y,_.z),d.push(U,1-y),v.push(g++)}x.push(v)}for(let w=0;w<s;w++)for(let v=0;v<r;v++){let y=x[v][w],A=x[v+1][w],z=x[v+1][w+1],U=x[v][w+1];(t>0||v!==0)&&(h.push(y,A,U),S+=3),(e>0||v!==r-1)&&(h.push(A,z,U),S+=3)}l.addGroup(p,S,0),p+=S}function M(_){let I=g,S=new lt,R=new L,w=0,v=_===!0?t:e,y=_===!0?1:-1;for(let z=1;z<=s;z++)u.push(0,m*y,0),f.push(0,y,0),d.push(.5,.5),g++;let A=g;for(let z=0;z<=s;z++){let N=z/s*c+a,X=Math.cos(N),G=Math.sin(N);R.x=v*G,R.y=m*y,R.z=v*X,u.push(R.x,R.y,R.z),f.push(0,y,0),S.x=X*.5+.5,S.y=G*.5*y+.5,d.push(S.x,S.y),g++}for(let z=0;z<s;z++){let U=I+z,N=A+z;_===!0?h.push(N,N+1,U):h.push(N+1,N,U),w+=3}l.addGroup(p,w,_===!0?1:2),p+=w}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},hi=class i extends Je{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Vl=class i extends ze{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new ae(r,3)),this.setAttribute("normal",new ae(r.slice(),3)),this.setAttribute("uv",new ae(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(b){let M=new L,_=new L,I=new L;for(let S=0;S<e.length;S+=3)d(e[S+0],M),d(e[S+1],_),d(e[S+2],I),c(M,_,I,b)}function c(b,M,_,I){let S=I+1,R=[];for(let w=0;w<=S;w++){R[w]=[];let v=b.clone().lerp(_,w/S),y=M.clone().lerp(_,w/S),A=S-w;for(let z=0;z<=A;z++)z===0&&w===S?R[w][z]=v:R[w][z]=v.clone().lerp(y,z/A)}for(let w=0;w<S;w++)for(let v=0;v<2*(S-w)-1;v++){let y=Math.floor(v/2);v%2===0?(f(R[w][y+1]),f(R[w+1][y]),f(R[w][y])):(f(R[w][y+1]),f(R[w+1][y+1]),f(R[w+1][y]))}}function l(b){let M=new L;for(let _=0;_<r.length;_+=3)M.x=r[_+0],M.y=r[_+1],M.z=r[_+2],M.normalize().multiplyScalar(b),r[_+0]=M.x,r[_+1]=M.y,r[_+2]=M.z}function h(){let b=new L;for(let M=0;M<r.length;M+=3){b.x=r[M+0],b.y=r[M+1],b.z=r[M+2];let _=m(b)/2/Math.PI+.5,I=p(b)/Math.PI+.5;o.push(_,1-I)}g(),u()}function u(){for(let b=0;b<o.length;b+=6){let M=o[b+0],_=o[b+2],I=o[b+4],S=Math.max(M,_,I),R=Math.min(M,_,I);S>.9&&R<.1&&(M<.2&&(o[b+0]+=1),_<.2&&(o[b+2]+=1),I<.2&&(o[b+4]+=1))}}function f(b){r.push(b.x,b.y,b.z)}function d(b,M){let _=b*3;M.x=t[_+0],M.y=t[_+1],M.z=t[_+2]}function g(){let b=new L,M=new L,_=new L,I=new L,S=new lt,R=new lt,w=new lt;for(let v=0,y=0;v<r.length;v+=9,y+=6){b.set(r[v+0],r[v+1],r[v+2]),M.set(r[v+3],r[v+4],r[v+5]),_.set(r[v+6],r[v+7],r[v+8]),S.set(o[y+0],o[y+1]),R.set(o[y+2],o[y+3]),w.set(o[y+4],o[y+5]),I.copy(b).add(M).add(_).divideScalar(3);let A=m(I);x(S,y+0,b,A),x(R,y+2,M,A),x(w,y+4,_,A)}}function x(b,M,_,I){I<0&&b.x===1&&(o[M]=b.x-1),_.x===0&&_.z===0&&(o[M]=I/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function p(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var Di=class extends Kr{constructor(t){super(t),this.uuid=Si(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Kr().fromJSON(s))}return this}},l_={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=wf(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,f,d;if(n&&(r=p_(i,t,r,e)),i.length>80*e){a=l=i[0],c=h=i[1];for(let g=e;g<s;g+=e)u=i[g],f=i[g+1],u<a&&(a=u),f<c&&(c=f),u>l&&(l=u),f>h&&(h=f);d=Math.max(l-a,h-c),d=d!==0?32767/d:0}return jr(r,o,e,a,c,d,0),o}};function wf(i,t,e,n,s){let r,o;if(s===T_(i,t,e,n)>0)for(r=t;r<e;r+=n)o=Ju(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=Ju(r,i[r],i[r+1],o);return o&&Ra(o,o.next)&&(to(o),o=o.next),o}function ws(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Ra(e,e.next)||He(e.prev,e,e.next)===0)){if(to(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function jr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&y_(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?u_(i,n,s,r):h_(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),to(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=f_(ws(i),t,e),jr(i,t,e,n,s,r,2)):o===2&&d_(i,t,e,n,s,r):jr(ws(i),t,e,n,s,r,1);break}}}function h_(i){let t=i.prev,e=i,n=i.next;if(He(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,f=s>r?s>o?s:o:r>o?r:o,d=a>c?a>l?a:l:c>l?c:l,g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&nr(s,a,r,c,o,l,g.x,g.y)&&He(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function u_(i,t,e,n){let s=i.prev,r=i,o=i.next;if(He(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,f=o.y,d=a<c?a<l?a:l:c<l?c:l,g=h<u?h<f?h:f:u<f?u:f,x=a>c?a>l?a:l:c>l?c:l,m=h>u?h>f?h:f:u>f?u:f,p=Gl(d,g,t,e,n),b=Gl(x,m,t,e,n),M=i.prevZ,_=i.nextZ;for(;M&&M.z>=p&&_&&_.z<=b;){if(M.x>=d&&M.x<=x&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&nr(a,h,c,u,l,f,M.x,M.y)&&He(M.prev,M,M.next)>=0||(M=M.prevZ,_.x>=d&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&nr(a,h,c,u,l,f,_.x,_.y)&&He(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;M&&M.z>=p;){if(M.x>=d&&M.x<=x&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&nr(a,h,c,u,l,f,M.x,M.y)&&He(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;_&&_.z<=b;){if(_.x>=d&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&nr(a,h,c,u,l,f,_.x,_.y)&&He(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function f_(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!Ra(s,r)&&Tf(s,n,n.next,r)&&Qr(s,r)&&Qr(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),to(n),to(n.next),n=i=r),n=n.next}while(n!==i);return ws(n)}function d_(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&M_(o,a)){let c=Sf(o,a);o=ws(o,o.next),c=ws(c,c.next),jr(o,t,e,n,s,r,0),jr(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function p_(i,t,e,n){let s=[],r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=wf(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(b_(l));for(s.sort(m_),r=0;r<s.length;r++)e=g_(s[r],e);return e}function m_(i,t){return i.x-t.x}function g_(i,t){let e=x_(i,t);if(!e)return t;let n=Sf(e,i);return ws(n,n.next),ws(e,e.next)}function x_(i,t){let e=t,n=-1/0,s,r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,c=s.x,l=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&nr(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),Qr(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&__(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function __(i,t){return He(i.prev,i,t.prev)<0&&He(t.next,i,i.next)<0}function y_(i,t,e,n){let s=i;do s.z===0&&(s.z=Gl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,v_(s)}function v_(i){let t,e,n,s,r,o,a,c,l=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(o>1);return i}function Gl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function b_(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function nr(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function M_(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!E_(i,t)&&(Qr(i,t)&&Qr(t,i)&&w_(i,t)&&(He(i.prev,i,t.prev)||He(i,t.prev,t))||Ra(i,t)&&He(i.prev,i,i.next)>0&&He(t.prev,t,t.next)>0)}function He(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Ra(i,t){return i.x===t.x&&i.y===t.y}function Tf(i,t,e,n){let s=Go(He(i,t,e)),r=Go(He(i,t,n)),o=Go(He(e,n,i)),a=Go(He(e,n,t));return!!(s!==r&&o!==a||s===0&&Vo(i,e,t)||r===0&&Vo(i,n,t)||o===0&&Vo(e,i,n)||a===0&&Vo(e,t,n))}function Vo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Go(i){return i>0?1:i<0?-1:0}function E_(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Tf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Qr(i,t){return He(i.prev,i,i.next)<0?He(i,t,i.next)>=0&&He(i,i.prev,t)>=0:He(i,t,i.prev)<0||He(i,i.next,t)<0}function w_(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Sf(i,t){let e=new Wl(i.i,i.x,i.y),n=new Wl(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Ju(i,t,e,n){let s=new Wl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function to(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Wl(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function T_(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var ts=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];$u(t),Ku(n,t);let o=t.length;e.forEach($u);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,Ku(n,e[c]);let a=l_.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function $u(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Ku(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var mr=class i extends ze{constructor(t=new Di([new lt(.5,.5),new lt(-.5,.5),new lt(-.5,-.5),new lt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];o(l)}this.setAttribute("position",new ae(s,3)),this.setAttribute("uv",new ae(r,2)),this.computeVertexNormals();function o(a){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,b=e.UVGenerator!==void 0?e.UVGenerator:S_,M,_=!1,I,S,R,w;p&&(M=p.getSpacedPoints(h),_=!0,f=!1,I=p.computeFrenetFrames(h,!1),S=new L,R=new L,w=new L),f||(m=0,d=0,g=0,x=0);let v=a.extractPoints(l),y=v.shape,A=v.holes;if(!ts.isClockWise(y)){y=y.reverse();for(let it=0,ct=A.length;it<ct;it++){let P=A[it];ts.isClockWise(P)&&(A[it]=P.reverse())}}let U=ts.triangulateShape(y,A),N=y;for(let it=0,ct=A.length;it<ct;it++){let P=A[it];y=y.concat(P)}function X(it,ct,P){return ct||console.error("THREE.ExtrudeGeometry: vec does not exist"),it.clone().addScaledVector(ct,P)}let G=y.length,nt=U.length;function W(it,ct,P){let Bt,ut,Rt,bt=it.x-ct.x,$t=it.y-ct.y,Ft=P.x-it.x,C=P.y-it.y,E=bt*bt+$t*$t,q=bt*C-$t*Ft;if(Math.abs(q)>Number.EPSILON){let st=Math.sqrt(E),ft=Math.sqrt(Ft*Ft+C*C),rt=ct.x-$t/st,Wt=ct.y+bt/st,Ct=P.x-C/ft,Ot=P.y+Ft/ft,pe=((Ct-rt)*C-(Ot-Wt)*Ft)/(bt*C-$t*Ft);Bt=rt+bt*pe-it.x,ut=Wt+$t*pe-it.y;let xt=Bt*Bt+ut*ut;if(xt<=2)return new lt(Bt,ut);Rt=Math.sqrt(xt/2)}else{let st=!1;bt>Number.EPSILON?Ft>Number.EPSILON&&(st=!0):bt<-Number.EPSILON?Ft<-Number.EPSILON&&(st=!0):Math.sign($t)===Math.sign(C)&&(st=!0),st?(Bt=-$t,ut=bt,Rt=Math.sqrt(E)):(Bt=bt,ut=$t,Rt=Math.sqrt(E/2))}return new lt(Bt/Rt,ut/Rt)}let V=[];for(let it=0,ct=N.length,P=ct-1,Bt=it+1;it<ct;it++,P++,Bt++)P===ct&&(P=0),Bt===ct&&(Bt=0),V[it]=W(N[it],N[P],N[Bt]);let $=[],at,_t=V.concat();for(let it=0,ct=A.length;it<ct;it++){let P=A[it];at=[];for(let Bt=0,ut=P.length,Rt=ut-1,bt=Bt+1;Bt<ut;Bt++,Rt++,bt++)Rt===ut&&(Rt=0),bt===ut&&(bt=0),at[Bt]=W(P[Bt],P[Rt],P[bt]);$.push(at),_t=_t.concat(at)}for(let it=0;it<m;it++){let ct=it/m,P=d*Math.cos(ct*Math.PI/2),Bt=g*Math.sin(ct*Math.PI/2)+x;for(let ut=0,Rt=N.length;ut<Rt;ut++){let bt=X(N[ut],V[ut],Bt);Q(bt.x,bt.y,-P)}for(let ut=0,Rt=A.length;ut<Rt;ut++){let bt=A[ut];at=$[ut];for(let $t=0,Ft=bt.length;$t<Ft;$t++){let C=X(bt[$t],at[$t],Bt);Q(C.x,C.y,-P)}}}let j=g+x;for(let it=0;it<G;it++){let ct=f?X(y[it],_t[it],j):y[it];_?(R.copy(I.normals[0]).multiplyScalar(ct.x),S.copy(I.binormals[0]).multiplyScalar(ct.y),w.copy(M[0]).add(R).add(S),Q(w.x,w.y,w.z)):Q(ct.x,ct.y,0)}for(let it=1;it<=h;it++)for(let ct=0;ct<G;ct++){let P=f?X(y[ct],_t[ct],j):y[ct];_?(R.copy(I.normals[it]).multiplyScalar(P.x),S.copy(I.binormals[it]).multiplyScalar(P.y),w.copy(M[it]).add(R).add(S),Q(w.x,w.y,w.z)):Q(P.x,P.y,u/h*it)}for(let it=m-1;it>=0;it--){let ct=it/m,P=d*Math.cos(ct*Math.PI/2),Bt=g*Math.sin(ct*Math.PI/2)+x;for(let ut=0,Rt=N.length;ut<Rt;ut++){let bt=X(N[ut],V[ut],Bt);Q(bt.x,bt.y,u+P)}for(let ut=0,Rt=A.length;ut<Rt;ut++){let bt=A[ut];at=$[ut];for(let $t=0,Ft=bt.length;$t<Ft;$t++){let C=X(bt[$t],at[$t],Bt);_?Q(C.x,C.y+M[h-1].y,M[h-1].x+P):Q(C.x,C.y,u+P)}}}F(),K();function F(){let it=s.length/3;if(f){let ct=0,P=G*ct;for(let Bt=0;Bt<nt;Bt++){let ut=U[Bt];ot(ut[2]+P,ut[1]+P,ut[0]+P)}ct=h+m*2,P=G*ct;for(let Bt=0;Bt<nt;Bt++){let ut=U[Bt];ot(ut[0]+P,ut[1]+P,ut[2]+P)}}else{for(let ct=0;ct<nt;ct++){let P=U[ct];ot(P[2],P[1],P[0])}for(let ct=0;ct<nt;ct++){let P=U[ct];ot(P[0]+G*h,P[1]+G*h,P[2]+G*h)}}n.addGroup(it,s.length/3-it,0)}function K(){let it=s.length/3,ct=0;pt(N,ct),ct+=N.length;for(let P=0,Bt=A.length;P<Bt;P++){let ut=A[P];pt(ut,ct),ct+=ut.length}n.addGroup(it,s.length/3-it,1)}function pt(it,ct){let P=it.length;for(;--P>=0;){let Bt=P,ut=P-1;ut<0&&(ut=it.length-1);for(let Rt=0,bt=h+m*2;Rt<bt;Rt++){let $t=G*Rt,Ft=G*(Rt+1),C=ct+Bt+$t,E=ct+ut+$t,q=ct+ut+Ft,st=ct+Bt+Ft;yt(C,E,q,st)}}}function Q(it,ct,P){c.push(it),c.push(ct),c.push(P)}function ot(it,ct,P){Tt(it),Tt(ct),Tt(P);let Bt=s.length/3,ut=b.generateTopUV(n,s,Bt-3,Bt-2,Bt-1);Vt(ut[0]),Vt(ut[1]),Vt(ut[2])}function yt(it,ct,P,Bt){Tt(it),Tt(ct),Tt(Bt),Tt(ct),Tt(P),Tt(Bt);let ut=s.length/3,Rt=b.generateSideWallUV(n,s,ut-6,ut-3,ut-2,ut-1);Vt(Rt[0]),Vt(Rt[1]),Vt(Rt[3]),Vt(Rt[1]),Vt(Rt[2]),Vt(Rt[3])}function Tt(it){s.push(c[it*3+0]),s.push(c[it*3+1]),s.push(c[it*3+2])}function Vt(it){r.push(it.x),r.push(it.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return A_(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new ya[s.type]().fromJSON(s)),new i(n,t.options)}},S_={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new lt(r,o),new lt(a,c),new lt(l,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[s*3],d=t[s*3+1],g=t[s*3+2],x=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new lt(o,1-c),new lt(l,1-u),new lt(f,1-g),new lt(x,1-p)]:[new lt(a,1-c),new lt(h,1-u),new lt(d,1-g),new lt(m,1-p)]}};function A_(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Ts=class i extends Vl{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var va=class i extends ze{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],c=[],l=[],h=[],u=t,f=(e-t)/s,d=new L,g=new lt;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){let p=r+m/n*o;d.x=u*Math.cos(p),d.y=u*Math.sin(p),c.push(d.x,d.y,d.z),l.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,h.push(g.x,g.y)}u+=f}for(let x=0;x<s;x++){let m=x*(n+1);for(let p=0;p<n;p++){let b=p+m,M=b,_=b+n+1,I=b+n+2,S=b+1;a.push(M,_,S),a.push(_,I,S)}}this.setIndex(a),this.setAttribute("position",new ae(c,3)),this.setAttribute("normal",new ae(l,3)),this.setAttribute("uv",new ae(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},ba=class i extends ze{constructor(t=new Di([new lt(0,.5),new lt(-.5,-.5),new lt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],o=[],a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new ae(s,3)),this.setAttribute("normal",new ae(r,3)),this.setAttribute("uv",new ae(o,2));function l(h){let u=s.length/3,f=h.extractPoints(e),d=f.shape,g=f.holes;ts.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=g.length;m<p;m++){let b=g[m];ts.isClockWise(b)===!0&&(g[m]=b.reverse())}let x=ts.triangulateShape(d,g);for(let m=0,p=g.length;m<p;m++){let b=g[m];d=d.concat(b)}for(let m=0,p=d.length;m<p;m++){let b=d[m];s.push(b.x,b.y,0),r.push(0,0,1),o.push(b.x,b.y)}for(let m=0,p=x.length;m<p;m++){let b=x[m],M=b[0]+u,_=b[1]+u,I=b[2]+u;n.push(M,_,I),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return R_(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}return new i(n,t.curveSegments)}};function R_(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var ee=class i extends ze{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new L,f=new L,d=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let b=[],M=p/n,_=0;p===0&&o===0?_=.5/e:p===n&&c===Math.PI&&(_=-.5/e);for(let I=0;I<=e;I++){let S=I/e;u.x=-t*Math.cos(s+S*r)*Math.sin(o+M*a),u.y=t*Math.cos(o+M*a),u.z=t*Math.sin(s+S*r)*Math.sin(o+M*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),m.push(S+_,1-M),b.push(l++)}h.push(b)}for(let p=0;p<n;p++)for(let b=0;b<e;b++){let M=h[p][b+1],_=h[p][b],I=h[p+1][b],S=h[p+1][b+1];(p!==0||o>0)&&d.push(M,_,S),(p!==n-1||c<Math.PI)&&d.push(_,I,S)}this.setIndex(d),this.setAttribute("position",new ae(g,3)),this.setAttribute("normal",new ae(x,3)),this.setAttribute("uv",new ae(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var en=class i extends ze{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],c=[],l=[],h=new L,u=new L,f=new L;for(let d=0;d<=n;d++)for(let g=0;g<=s;g++){let x=g/s*r,m=d/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(x),u.y=(t+e*Math.cos(m))*Math.sin(x),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(g/s),l.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=s;g++){let x=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,p=(s+1)*(d-1)+g,b=(s+1)*d+g;o.push(x,m,b),o.push(m,p,b)}this.setIndex(o),this.setAttribute("position",new ae(a,3)),this.setAttribute("normal",new ae(c,3)),this.setAttribute("uv",new ae(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var gr=class i extends ze{constructor(t=new xa(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new L,c=new L,l=new lt,h=new L,u=[],f=[],d=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new ae(u,3)),this.setAttribute("normal",new ae(f,3)),this.setAttribute("uv",new ae(d,2));function x(){for(let M=0;M<e;M++)m(M);m(r===!1?e:0),b(),p()}function m(M){h=t.getPointAt(M/e,h);let _=o.normals[M],I=o.binormals[M];for(let S=0;S<=s;S++){let R=S/s*Math.PI*2,w=Math.sin(R),v=-Math.cos(R);c.x=v*_.x+w*I.x,c.y=v*_.y+w*I.y,c.z=v*_.z+w*I.z,c.normalize(),f.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,u.push(a.x,a.y,a.z)}}function p(){for(let M=1;M<=e;M++)for(let _=1;_<=s;_++){let I=(s+1)*(M-1)+(_-1),S=(s+1)*M+(_-1),R=(s+1)*M+_,w=(s+1)*(M-1)+_;g.push(I,S,w),g.push(S,R,w)}}function b(){for(let M=0;M<=e;M++)for(let _=0;_<=s;_++)l.x=M/e,l.y=_/s,d.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new ya[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var me=class extends Li{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new At(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new At(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=df,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new li,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Fe=class extends me{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new lt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return rn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new At(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new At(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new At(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};function Wo(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function C_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var xr=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Xl=class extends xr{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Yh,endingEnd:Yh}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Zh:r=t,a=2*e-n;break;case Jh:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Zh:o=t,c=2*n-e;break;case Jh:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-e)/(s-e),x=g*g,m=x*g,p=-f*m+2*f*x-f*g,b=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*g+1,M=(-1-d)*m+(1.5+d)*x+.5*g,_=d*m-d*x;for(let I=0;I!==a;++I)r[I]=p*o[h+I]+b*o[l+I]+M*o[c+I]+_*o[u+I];return r}},ql=class extends xr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(s-e),u=1-h;for(let f=0;f!==a;++f)r[f]=o[l+f]*u+o[c+f]*h;return r}},Yl=class extends xr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},ti=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Wo(e,this.TimeBufferType),this.values=Wo(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Wo(t.times,Array),values:Wo(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Yl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ql(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Xl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case $o:e=this.InterpolantFactoryMethodDiscrete;break;case gl:e=this.InterpolantFactoryMethodLinear;break;case ja:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return $o;case this.InterpolantFactoryMethodLinear:return gl;case this.InterpolantFactoryMethodSmooth:return ja}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&C_(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ja,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(s)c=!0;else{let u=a*n,f=u-n,d=u+n;for(let g=0;g!==n;++g){let x=e[u+g];if(x!==e[f+g]||x!==e[d+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};ti.prototype.TimeBufferType=Float32Array;ti.prototype.ValueBufferType=Float32Array;ti.prototype.DefaultInterpolation=gl;var Ss=class extends ti{constructor(t,e,n){super(t,e,n)}};Ss.prototype.ValueTypeName="bool";Ss.prototype.ValueBufferType=Array;Ss.prototype.DefaultInterpolation=$o;Ss.prototype.InterpolantFactoryMethodLinear=void 0;Ss.prototype.InterpolantFactoryMethodSmooth=void 0;var Zl=class extends ti{};Zl.prototype.ValueTypeName="color";var Jl=class extends ti{};Jl.prototype.ValueTypeName="number";var $l=class extends xr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e),l=t*a;for(let h=l+a;l!==h;l+=4)is.slerpFlat(r,0,o,l-a,o,l,c);return r}},Ma=class extends ti{InterpolantFactoryMethodLinear(t){return new $l(this.times,this.values,this.getValueSize(),t)}};Ma.prototype.ValueTypeName="quaternion";Ma.prototype.InterpolantFactoryMethodSmooth=void 0;var As=class extends ti{constructor(t,e,n){super(t,e,n)}};As.prototype.ValueTypeName="string";As.prototype.ValueBufferType=Array;As.prototype.DefaultInterpolation=$o;As.prototype.InterpolantFactoryMethodLinear=void 0;As.prototype.InterpolantFactoryMethodSmooth=void 0;var Kl=class extends ti{};Kl.prototype.ValueTypeName="vector";var jl=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let d=l[u],g=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}},I_=new jl,Ql=class{constructor(t){this.manager=t!==void 0?t:I_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Ql.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ea=class extends Ne{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new At(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},wa=class extends Ea{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.groundColor=new At(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Lc=new Re,ju=new L,Qu=new L,th=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.map=null,this.mapPass=null,this.matrix=new Re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yr,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new Ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;ju.setFromMatrixPosition(t.matrixWorld),e.position.copy(ju),Qu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Qu),e.updateMatrixWorld(),Lc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Lc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Lc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var eh=class extends th{constructor(){super(new aa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},eo=class extends Ea{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.target=new Ne,this.shadow=new eh}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var ph="\\[\\]\\.:\\/",L_=new RegExp("["+ph+"]","g"),mh="[^"+ph+"]",P_="[^"+ph.replace("\\.","")+"]",D_=/((?:WC+[\/:])*)/.source.replace("WC",mh),U_=/(WCOD+)?/.source.replace("WCOD",P_),N_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",mh),z_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",mh),F_=new RegExp("^"+D_+U_+N_+z_+"$"),O_=["material","materials","bones","map"],nh=class{constructor(t,e,n){let s=n||Oe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Oe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(L_,"")}static parseTrackName(t){let e=F_.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);O_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Oe.Composite=nh;Oe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Oe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Oe.prototype.GetterByBindingType=[Oe.prototype._getValue_direct,Oe.prototype._getValue_array,Oe.prototype._getValue_arrayElement,Oe.prototype._getValue_toArray];Oe.prototype.SetterByBindingTypeAndVersioning=[[Oe.prototype._setValue_direct,Oe.prototype._setValue_direct_setNeedsUpdate,Oe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_array,Oe.prototype._setValue_array_setNeedsUpdate,Oe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_arrayElement,Oe.prototype._setValue_arrayElement_setNeedsUpdate,Oe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_fromArray,Oe.prototype._setValue_fromArray_setNeedsUpdate,Oe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var K_=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var io=new L;function Gn(i,t,e,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;io.copy(t),io[n]=0,io.normalize();let l=.5*o/(o+a),h=1-io.angleTo(i)/c;return Math.sign(io[e])===1?h*l:a/(o+a)+l+l*(1-h)}var Ui=class extends je{constructor(t=1,e=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,s,s,s),s===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new L,c=new L,l=new L(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,d=h.length/6,g=new L,x=.5/s;for(let m=0,p=0;m<h.length;m+=3,p+=2)switch(a.fromArray(h,m),c.copy(a),c.x-=Math.sign(c.x)*x,c.y-=Math.sign(c.y)*x,c.z-=Math.sign(c.z)*x,c.normalize(),h[m+0]=l.x*Math.sign(a.x)+c.x*r,h[m+1]=l.y*Math.sign(a.y)+c.y*r,h[m+2]=l.z*Math.sign(a.z)+c.z*r,u[m+0]=c.x,u[m+1]=c.y,u[m+2]=c.z,Math.floor(m/d)){case 0:g.set(1,0,0),f[p+0]=Gn(g,c,"z","y",r,n),f[p+1]=1-Gn(g,c,"y","z",r,e);break;case 1:g.set(-1,0,0),f[p+0]=1-Gn(g,c,"z","y",r,n),f[p+1]=1-Gn(g,c,"y","z",r,e);break;case 2:g.set(0,1,0),f[p+0]=1-Gn(g,c,"x","z",r,t),f[p+1]=Gn(g,c,"z","x",r,n);break;case 3:g.set(0,-1,0),f[p+0]=1-Gn(g,c,"x","z",r,t),f[p+1]=1-Gn(g,c,"z","x",r,n);break;case 4:g.set(0,0,1),f[p+0]=1-Gn(g,c,"x","y",r,t),f[p+1]=1-Gn(g,c,"y","x",r,e);break;case 5:g.set(0,0,-1),f[p+0]=Gn(g,c,"x","y",r,t),f[p+1]=1-Gn(g,c,"y","x",r,e);break}}};var jt=(i,t=0,e=1)=>i<t?t:i>e?e:i,B=(i,t,e)=>i+(t-i)*e;var Rf=i=>i*i*(3-2*i);var we=Math.PI*2,Ni=Math.PI/180,Pt={linear:i=>i,in:i=>i*i,out:i=>1-(1-i)*(1-i),inOut:i=>Rf(i),in3:i=>i*i*i,out3:i=>1-Math.pow(1-i,3),inOut3:i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,outBack:i=>1+2.70158*Math.pow(i-1,3)+1.70158*Math.pow(i-1,2),inBack:i=>2.70158*i*i*i-1.70158*i*i,outElastic:i=>i<=0?0:i>=1?1:Math.pow(2,-10*i)*Math.sin((i*10-.75)*(we/3))+1,outBounce:i=>i<1/2.75?7.5625*i*i:i<2/2.75?7.5625*(i-=1.5/2.75)*i+.75:i<2.5/2.75?7.5625*(i-=2.25/2.75)*i+.9375:7.5625*(i-=2.625/2.75)*i+.984375},D=(i,t,e,n=Pt.inOut)=>n(jt((i-t)/(e-t))),ce=(i,t,e)=>{let n=jt((i-t)/(e-t));return Math.sin(n*Math.PI)},de=(i,t,e=.4)=>{if(i<t||i>t+e)return 0;let n=(i-t)/e;return Math.sin(n*Math.PI)*(1-n)},Ca=(i,t,e=4,n=5)=>{if(i<t)return 0;let s=i-t;return Math.sin(s*e*we)*Math.exp(-s*n)};function Et(i,t){if(i<=t[0][0])return t[0][1];for(let e=1;e<t.length;e++){let[n,s,r=Pt.inOut]=t[e];if(i<=n){let[o,a]=t[e-1],c=r((i-o)/(n-o||1));return Array.isArray(a)?a.map((l,h)=>B(l,s[h],c)):B(a,s,c)}}return t[t.length-1][1]}function _e(i=1){let t=i>>>0||1;return()=>(t^=t<<13,t>>>=0,t^=t>>17,t^=t<<5,t>>>=0,t/4294967296)}var Af=(()=>{let i=_e(9137);return Array.from({length:512},()=>i()*2-1)})();function ei(i){let t=Math.floor(i),e=i-t,n=Af[t&511],s=Af[t+1&511];return B(n,s,Rf(e))}function gh(i,t=0,e=3.4){let n=Math.floor((i+t*7.31)/e),s=_e(1e3+n*13+t*101);s();let r=n*e-t*7.31+s()*(e-.4),o=(i-r)/.16;return o<0||o>1?0:Math.sin(o*Math.PI)}function ln(i,t,e,n){return[B(i[0],t[0],n),B(i[1],t[1],n)+4*e*n*(1-n),B(i[2],t[2],n)]}var le={leoSkin:15976097,leoHair:5978144,leoSweat:16762163,leoSweatDark:15771929,leoPants:4157400,leoShoes:15218746,leoBag:4763726,leoBagDark:3115579,leoIris:"#7b4a26",mayaSkin:14722943,mayaHair:4860440,mayaJacket:9131478,mayaJacketLight:12162290,mayaPants:15919059,mayaShoes:16514043,mayaShoesAccent:13219574,mayaBag:16748477,mayaBagDark:14837659,mayaTie:16765503,mayaIris:"#3f8a63",biFur:4766946,biFurDeep:2854852,biBelly:16773592,biFace:14940156,biBeak:16753978,biIris:"#ffc928",ball:15085355,ballSeam:11015450,white:16645368,sole:16184302,blush:"#ff7f8e",mouthIn:"#6d1f2a",tongue:"#ff7d8c",line:"#4a2318"};function Qt(i,t={}){return new me({color:i,roughness:.62,metalness:0,...t})}function os(i,t={}){return new Fe({color:i,roughness:.78,metalness:0,sheen:.6,sheenRoughness:.6,sheenColor:new At(i).lerp(new At(16777215),.45),...t})}function xh(i){return new Fe({color:i,roughness:.55,metalness:0,sheen:.35,sheenRoughness:.5,sheenColor:new At(16767176)})}function Cf(i,t={}){return new Fe({color:i,roughness:.32,clearcoat:.7,clearcoatRoughness:.25,...t})}function zi(i,t){let e=document.createElement("canvas");return e.width=i,e.height=t,e}function If(i,{irisDeg:t=40,pupilDeg:e=19}={}){let n=zi(1024,512),s=n.getContext("2d"),r=1024/360;s.fillStyle="#fbfaf6",s.fillRect(0,0,1024,512);let o=512,a=256,c=t*r,l=e*r,h=new At(i),u=h.clone().lerp(new At(16777215),.5),f=h.clone().lerp(new At(0),.5),d=s.createRadialGradient(o,a+c*.25,c*.1,o,a,c);d.addColorStop(0,"#"+u.getHexString()),d.addColorStop(.6,"#"+h.getHexString()),d.addColorStop(1,"#"+f.getHexString()),s.fillStyle=d,s.beginPath(),s.arc(o,a,c,0,Math.PI*2),s.fill(),s.strokeStyle="rgba(255,255,255,0.13)",s.lineWidth=3;for(let x=0;x<36;x++){let m=x/36*Math.PI*2;s.beginPath(),s.moveTo(o+Math.cos(m)*l*1.1,a+Math.sin(m)*l*1.1),s.lineTo(o+Math.cos(m)*c*.88,a+Math.sin(m)*c*.88),s.stroke()}s.lineWidth=9,s.strokeStyle="rgba(25,15,15,0.6)",s.beginPath(),s.arc(o,a,c-3,0,Math.PI*2),s.stroke(),s.fillStyle="#100a0a",s.beginPath(),s.arc(o,a,l,0,Math.PI*2),s.fill();let g=new Rn(n);return g.colorSpace=We,g.anisotropy=4,g}var Ia;function vr(){if(Ia)return Ia;let i=zi(128,128),t=i.getContext("2d"),e=t.createRadialGradient(64,64,4,64,64,64);return e.addColorStop(0,"rgba(20,30,40,0.55)"),e.addColorStop(.5,"rgba(20,30,40,0.25)"),e.addColorStop(1,"rgba(20,30,40,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),Ia=new Rn(i),Ia}var La;function Da(){if(La)return La;let i=zi(128,128),t=i.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.4,"rgba(255,255,255,0.6)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),La=new Rn(i),La}var Pa;function Lf(){if(Pa)return Pa;let i=zi(128,128),t=i.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,30);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),t.fillStyle="rgba(255,255,255,0.95)",t.beginPath();for(let n=0;n<8;n++){let s=n/8*Math.PI*2,r=n%2?9:62;t.lineTo(64+Math.cos(s)*r,64+Math.sin(s)*r)}return t.closePath(),t.fill(),Pa=new Rn(i),Pa}function Pf(){let i=zi(1024,1024),t=i.getContext("2d"),e=_e(77);t.fillStyle="#b89c78",t.fillRect(0,0,1024,1024);let n=["#e2c69c","#d9b98c","#e8d0a8","#d2ae80","#dfc297","#ecd5b0"];for(let r=0;r<1024;r+=44){let o=r/44%2?26:0;for(let a=-60;a<1100;a+=52){let c=44+e()*10,l=36+e()*6;t.fillStyle=n[Math.floor(e()*n.length)];let h=a+o+e()*4,u=r+3+e()*3;t.beginPath(),t.roundRect(h,u,c,l,14),t.fill(),t.fillStyle="rgba(255,255,255,0.14)",t.beginPath(),t.roundRect(h+4,u+3,c-14,l*.4,8),t.fill(),t.fillStyle="rgba(120,80,40,0.10)",t.beginPath(),t.roundRect(h+6,u+l*.6,c-10,l*.35,8),t.fill()}}let s=new Rn(i);return s.wrapS=s.wrapT=Ms,s.colorSpace=We,s.anisotropy=2,s}function br(i="#7ccf5e"){let t=zi(512,512),e=t.getContext("2d"),n=_e(31);e.fillStyle=i,e.fillRect(0,0,512,512);for(let r=0;r<2600;r++){let o=n()*512,a=n()*512,c=2+n()*7,l=n();e.fillStyle=l<.5?"rgba(60,140,50,0.22)":"rgba(190,240,120,0.2)",e.beginPath(),e.ellipse(o,a,c,c*.6,n()*3,0,Math.PI*2),e.fill()}let s=new Rn(t);return s.wrapS=s.wrapT=Ms,s.colorSpace=We,s.anisotropy=2,s}function Df(){let i=zi(256,256),t=i.getContext("2d"),e=_e(5);t.fillStyle="#e2c08d",t.fillRect(0,0,256,256);for(let s=0;s<500;s++)t.fillStyle=e()<.5?"rgba(170,120,70,0.18)":"rgba(255,240,210,0.2)",t.beginPath(),t.arc(e()*256,e()*256,1+e()*4,0,Math.PI*2),t.fill();let n=new Rn(i);return n.wrapS=n.wrapT=Ms,n.colorSpace=We,n}var Ua={neutral:{eo:1,lo:0,tilt:0,es:1,bL:0,bR:0,baL:0,baR:0,sm:.25,op:0,wd:1,rd:0,th:0,gr:0,wv:0,sk:0,bl:0},happy:{eo:1,lo:.1,bL:.2,bR:.2,baL:-.1,baR:-.1,sm:.9,op:0,wd:1.05},grin:{eo:.95,lo:.15,bL:.3,bR:.3,baL:-.15,baR:-.15,sm:1,op:.45,th:.7,wd:1.15,tg:.5},laugh:{eo:.18,lo:1,bL:.4,bR:.4,baL:-.3,baR:-.3,sm:1,op:.8,th:.6,wd:1.15,tg:.8,bl:.6},giggle:{eo:.3,lo:.9,bL:.3,bR:.3,baL:-.25,baR:-.25,sm:1,op:.15,wd:.9,bl:.5},surprised:{eo:1.35,lo:0,bL:.9,bR:.9,baL:-.2,baR:-.2,sm:0,op:.55,rd:.9,wd:.8,tg:.4},amazed:{eo:1.3,lo:.1,bL:.8,bR:.8,baL:-.25,baR:-.25,sm:.6,op:.6,rd:.4,th:.4,tg:.5,bl:.4},worried:{eo:1.1,lo:0,bL:.5,bR:.5,baL:-.7,baR:-.7,sm:-.45,op:.05,wv:.6,wd:.85},oops:{eo:1.15,lo:0,bL:.6,bR:.6,baL:-.6,baR:-.6,sm:-.2,op:.3,gr:1,wd:1.15},sheepish:{eo:.85,lo:.2,bL:.4,bR:.4,baL:-.6,baR:-.6,sm:.6,op:.25,gr:1,wd:1.1,sk:.4,bl:.7},determined:{eo:.85,lo:.1,tilt:.55,bL:-.4,bR:-.4,baL:.7,baR:.7,sm:.35,op:0,wd:.85,sk:-.3},thinking:{eo:.8,lo:.15,bL:.6,bR:-.2,baL:-.2,baR:.3,sm:-.05,op:0,wd:.6,sk:.6},idea:{eo:1.3,lo:0,bL:1,bR:1,baL:-.1,baR:-.1,sm:1,op:.5,th:.7,wd:1.1,tg:.4},skeptic:{eo:.75,lo:.2,bL:.6,bR:-.4,baL:-.3,baR:.5,sm:.1,op:0,wd:.7,sk:-.5},scared:{eo:1.35,lo:0,bL:.9,bR:.9,baL:-.8,baR:-.8,sm:-.6,op:.35,gr:1,wd:.9,wv:.4},effort:{eo:.35,lo:.6,tilt:.3,bL:-.3,bR:-.3,baL:.6,baR:.6,sm:-.3,op:.25,gr:1,wd:1.1},tender:{eo:.55,lo:.6,bL:.35,bR:.35,baL:-.35,baR:-.35,sm:.85,op:0,wd:.95,bl:.8},proud:{eo:.3,lo:.7,bL:.5,bR:.5,baL:-.1,baR:-.1,sm:.9,op:0,wd:1,bl:.4}};function Na(i,t,e=1){let n=Ua[t];for(let s in n)i[s]=B(i[s]??Ua.neutral[s]??0,n[s],e);return i}function so(){return{...Ua.neutral,lx:0,ly:0}}var _h=new Map;function B_(i){if(!_h.has(i)){let t=new ee(i,40,28);t.rotateY(-Math.PI/2),_h.set(i,t)}return _h.get(i)}function Fa({r:i,iris:t,lidMat:e,lashColor:n=2758672,side:s=1,irisDeg:r,pupilDeg:o,lash:a=!1,lashLine:c=!0}){let l=new Mt,h=new Mt;l.add(h);let u=If(t,{irisDeg:r,pupilDeg:o}),f=new Fe({map:u,roughness:.18,clearcoat:1,clearcoatRoughness:.08}),d=new Y(B_(i),f);d.castShadow=!1,d.receiveShadow=!0,h.add(d);let g=new Mt;l.add(g);let x=new Mt,m=new Mt;g.add(x,m);let p=i*1.03,b=new Y(new ee(p,36,16,0,Math.PI*2,0,Math.PI/2),e);b.material.side=$e,x.add(b);let M=new me({color:n,roughness:.6}),_=c,I=new Y(new en(p,i*.05,8,32,Math.PI),M);if(I.rotation.x=Math.PI/2,_&&x.add(I),a)for(let z=0;z<2;z++){let U=new Y(new rs(i*.07,i*.28,4,6),M),N=(.42+z*.25)*s;U.position.set(Math.sin(N)*p,0,Math.cos(N)*p),U.rotation.z=-s*(.9+z*.3),U.rotation.x=.4,x.add(U)}let S=new Y(new ee(p*.995,36,16,0,Math.PI*2,Math.PI/2,Math.PI/2),e);m.add(S);let R=new Ke({color:16777215}),w=new Y(new ee(i*.2,12,8),R),v=new Y(new ee(i*.1,10,6),R),y=(z,U,N)=>{let X=new L(Math.sin(U*Ni),Math.sin(N*Ni),1).normalize().multiplyScalar(i*1);z.position.copy(X),z.lookAt(X.clone().multiplyScalar(2)),z.scale.set(1,1,.35)};return y(w,-20,22),y(v,18,-16),l.add(w,v),{socket:l,look:h,upPivot:x,lowPivot:m,tilt:g,hl1:w,hl2:v,side:s,ballMat:f,tex:u,r:i,oval:1}}function Oa(i,{eo:t=1,lo:e=0,tilt:n=0,lx:s=0,ly:r=0,es:o=1}){let a=t<=1?B(-75,42,jt(t,0,1)):42+(t-1)*70,c=B(-62,-4,jt(e,0,1)),l=Math.max(a,c+2);i.upPivot.rotation.x=-l*Ni,i.lowPivot.rotation.x=-c*Ni,i.tilt.rotation.z=n*.45*i.side,i.look.rotation.y=jt(s,-1.3,1.3)*.5,i.look.rotation.x=-jt(r,-1.3,1.3)*.38,i.socket.scale.set(o,o*i.oval,o),i.lowPivot.visible=e>.25||t<.35;let h=jt((l-24)/10)*jt((16-c)/10),u=jt((l+12)/10)*jt((-12-c)/6);i.hl1.visible=h>.05,i.hl1.scale.set(h,h,.35*h),i.hl2.visible=u>.05,i.hl2.scale.set(u,u,.35*u)}var za=class{constructor({R:t,freckles:e=!1,skinColor:n}){this.R=t,this.W=512,this.H=448,this.phiStart=40*Ni,this.phiLen=100*Ni,this.thStart=62*Ni,this.thLen=78*Ni,this.c=zi(this.W,this.H),this.g=this.c.getContext("2d"),this.tex=new Rn(this.c),this.tex.colorSpace=We,this.tex.anisotropy=4;let s=new ee(t*1.004,40,32,this.phiStart,this.phiLen,this.thStart,this.thLen);this.mesh=new Y(s,new me({map:this.tex,transparent:!0,roughness:.6,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})),this.mesh.renderOrder=2,this.freckles=e,this.key=""}uv(t,e){let n=this.R,s=Math.acos(jt(e/n,-1,1)),r=Math.sin(s);return[(Math.acos(jt(-t/(n*r),-1,1))-this.phiStart)/this.phiLen*this.W,(s-this.thStart)/this.thLen*this.H]}update(t,e){let n=[t.sm,t.op,t.wd,t.rd,t.th,t.gr,t.tg,t.wv,t.sk,t.bl,t.pout].map(c=>(c||0).toFixed(3)).join(",");if(n===this.key)return;this.key=n;let s=this.g,r=this.W,o=this.H;s.clearRect(0,0,r,o);let a=.28+.6*jt(t.bl||0);for(let c of[-1,1]){let[l,h]=this.uv(c*.15,e+.045),u=s.createRadialGradient(l,h,2,l,h,46);u.addColorStop(0,`rgba(255,120,140,${.55*a})`),u.addColorStop(1,"rgba(255,120,140,0)"),s.fillStyle=u,s.beginPath(),s.ellipse(l,h,50,36,0,0,Math.PI*2),s.fill()}if(this.freckles){s.fillStyle="rgba(170,95,60,0.55)";for(let c of[-1,1]){let[l,h]=this.uv(c*.105,e+.06);for(let[u,f]of[[-10,-4],[4,-9],[12,4],[-2,7]])s.beginPath(),s.arc(l+u*c,h+f,3.2,0,Math.PI*2),s.fill()}}H_(s,this.uv(0,e),t),this.tex.needsUpdate=!0}};function Uf(i,t,e,n){let s=(1-n)*(1-n),r=2*n*(1-n),o=n*n;return[s*i[0]+r*t[0]+o*e[0],s*i[1]+r*t[1]+o*e[1]]}function H_(i,[t,e],n,s=1){let r=n.sm||0,o=jt(n.op||0),a=n.wd??1,c=jt(n.rd||0),l=jt(n.th||0),h=jt(n.gr||0),u=n.tg??.6,f=n.wv||0,d=n.sk||0,g=s,x=56*g*a*(1-.45*c)*(1+.12*Math.max(0,r)),m=r*20*g,p=[t-x,e-m-d*9*g],b=[t+x,e-m+d*9*g],M=28,_=e+r*6*g-o*(8+14*c)*g,I=e+r*9*g+o*(52+10*c)*g+(1-o)*0,S=[t,2*_-(p[1]+b[1])/2],R=[t,2*I-(p[1]+b[1])/2],w=Math.max(4,(I-_)/2),v=(_+I)/2,y=[];for(let N=0;N<=M;N++){let X=N/M,G=Uf(p,S,b,X),nt=Math.PI+X*Math.PI,W=[t+x*Math.cos(nt),v+w*Math.sin(nt)],V=f*Math.sin(X*Math.PI*3)*6*g*(o<.08?1:.4);y.push([B(G[0],W[0],c),B(G[1],W[1],c)+V])}if(i.lineCap="round",i.lineJoin="round",o<.07){if(i.strokeStyle=le.line,i.lineWidth=7*g,i.beginPath(),y.forEach((N,X)=>X?i.lineTo(N[0],N[1]):i.moveTo(N[0],N[1])),i.stroke(),r>.6){i.lineWidth=4*g;for(let[N,X]of[[p,-1],[b,1]])i.beginPath(),i.moveTo(N[0]+X*3*g,N[1]-6*g),i.lineTo(N[0]+X*6*g,N[1]+5*g),i.stroke()}return}for(let N=0;N<=M;N++){let X=1-N/M,G=Uf(p,R,b,X),nt=X*Math.PI,W=[t+x*Math.cos(nt),v+w*Math.sin(nt)];y.push([B(G[0],W[0],c),B(G[1],W[1],c)])}let A=()=>{i.beginPath(),y.forEach((N,X)=>X?i.lineTo(N[0],N[1]):i.moveTo(N[0],N[1])),i.closePath()};A(),i.fillStyle=le.mouthIn,i.fill(),i.save(),A(),i.clip();let z=Math.min(...y.map(N=>N[1])),U=Math.max(...y.map(N=>N[1]));if(u>0&&h<.5&&(i.fillStyle=le.tongue,i.beginPath(),i.ellipse(t+d*6,U+4*g,x*.62,(14+18*o)*g*u,0,0,Math.PI*2),i.fill()),l>0&&(i.fillStyle="#ffffff",i.fillRect(t-x*1.2,z-10,x*2.4,10+(6+12*l)*g)),h>0){i.globalAlpha=h,i.fillStyle="#ffffff",i.fillRect(t-x*1.2,z-10,x*2.4,U-z+20),i.strokeStyle="rgba(150,120,120,0.8)",i.lineWidth=3*g,i.beginPath(),i.moveTo(t-x,(z+U)/2),i.lineTo(t+x,(z+U)/2),i.stroke();for(let N=-2;N<=2;N++)i.beginPath(),i.moveTo(t+N*x*.33,z),i.lineTo(t+N*x*.33,U),i.stroke();i.globalAlpha=1}i.restore(),A(),i.strokeStyle=le.line,i.lineWidth=6*g,i.stroke()}var ro=.2,Er=.2,zf=.47,ui=.25,yh=.17,Ba=.15;function Be(i,t=!0){return i.castShadow=t,i.receiveShadow=!0,i}function Mr(i,t,e,n=18){return Be(new Y(new rs(i,t,8,n),e))}function Wn(i,t,e=32,n=22){return Be(new Y(new ee(i,e,n),t))}function Nf(i=.11,t=.05,e=.25){let n=[];for(let o=0;o<=14;o++){let a=o/14;n.push(new lt(t*Math.pow(Math.max(0,1-Math.pow(a,2.2)),.75)+5e-4,a*i))}let s=new an(n,14),r=s.attributes.position;for(let o=0;o<r.count;o++){let a=r.getY(o)/i;r.setZ(o,r.getZ(o)+e*i*a*a)}return s.computeVertexNormals(),s}function k_(){let i=[[0,-.01],[.17,-.01],[.185,.02],[.2,.1],[.198,.2],[.185,.28],[.16,.34],[.12,.38],[.075,.405],[0,.41]].map(([e,n])=>new lt(e,n)),t=new an(i,40);return t.scale(1,1,.78),t.computeVertexNormals(),t}function vh(i){let t=i==="leo",e=t?{skin:le.leoSkin,hair:le.leoHair,top:le.leoSweat,topDark:le.leoSweatDark,pants:le.leoPants,shoe:le.leoShoes,bag:le.leoBag,bagDark:le.leoBagDark,iris:le.leoIris}:{skin:le.mayaSkin,hair:le.mayaHair,top:le.mayaJacket,topDark:le.mayaJacketLight,pants:le.mayaPants,shoe:le.mayaShoes,bag:le.mayaBag,bagDark:le.mayaBagDark,iris:le.mayaIris},n=xh(e.skin),s=new Fe({color:e.hair,roughness:.55,sheen:.5,sheenRoughness:.45,sheenColor:new At(e.hair).lerp(new At(16765088),.35)}),r=os(e.top),o=os(e.topDark),a=os(e.pants),c=new Fe({color:e.shoe,roughness:.45,clearcoat:.3}),l=Qt(le.sole,{roughness:.7}),h=os(e.bag),u=os(e.bagDark),f=Qt(16777215,{roughness:.6}),d=new Mt;d.name=i;let g=new Mt;d.add(g);let x=new Mt;x.position.y=zf,g.add(x);let m=Wn(.15,a);m.scale.set(1,.42,.78),m.position.y=.01,x.add(m);let p={};for(let Q of[1,-1]){let ot=new Mt;ot.position.set(.085*Q,-.02,0),x.add(ot);let yt=Mr(.068,ro-.02,a);yt.position.y=-ro/2,ot.add(yt);let Tt=new Mt;Tt.position.y=-ro,ot.add(Tt);let Vt=Mr(.062,Er-.03,a);Vt.position.y=-Er/2,Tt.add(Vt);let it=Be(new Y(new Je(.07,.074,.05,20),a));it.position.y=-Er+.04,Tt.add(it);let ct=new Mt;ct.position.y=-Er,Tt.add(ct);let P=Wn(.07,c);P.scale.set(1.08,.82,1.6),P.position.set(0,-.028,.035),ct.add(P);let Bt=Wn(.072,l);Bt.scale.set(1.12,.32,1.68),Bt.position.set(0,-.06,.035),ct.add(Bt);let ut=Wn(.05,t?l:Qt(le.mayaShoesAccent));ut.scale.set(1.3,.7,1),ut.position.set(0,-.045,.12),ct.add(ut);for(let Rt=0;Rt<3;Rt++){let bt=Be(new Y(new je(.05,.008,.012),t?f:Qt(le.mayaShoesAccent)),!1);bt.position.set(0,.022-Rt*.006,.03+Rt*.028),bt.rotation.x=-.5,ct.add(bt)}p[Q>0?"L":"R"]={leg:ot,knee:Tt,foot:ct}}let b=new Mt;b.position.y=0,x.add(b);let M=Be(new Y(k_(),r));b.add(M);let _=Be(new Y(new en(.18,.026,10,40),o));if(_.rotation.x=Math.PI/2,_.scale.set(1,.78,1),_.position.y=0,b.add(_),t){let Q=Be(new Y(new Ui(.2,.09,.03,3,.02),o));Q.position.set(0,.09,.148),Q.rotation.x=-.08,b.add(Q);let ot=Be(new Y(new en(.1,.045,12,30),r));ot.position.set(0,.39,-.05),ot.rotation.x=Math.PI/2-.5,b.add(ot);for(let yt of[1,-1]){let Tt=Mr(.009,.1,f,8);Tt.position.set(.035*yt,.31,.135),Tt.rotation.x=-.25,b.add(Tt);let Vt=Wn(.014,f,10,8);Vt.position.set(.035*yt,.25,.15),b.add(Vt)}}else{let Q=Be(new Y(new je(.03,.36,.02),o));Q.position.set(0,.2,.152),Q.rotation.x=-.05,b.add(Q);let ot=Be(new Y(new Ui(.022,.04,.012,2,.005),Qt(16119285)));ot.position.set(0,.33,.16),b.add(ot);let yt=Be(new Y(new Je(.085,.11,.07,30,1,!0),o));yt.material=o.clone(),yt.material.side=$e,yt.position.y=.41,b.add(yt);for(let Tt of[1,-1]){let Vt=Be(new Y(new Ui(.075,.05,.02,2,.01),o));Vt.position.set(.1*Tt,.1,.14),Vt.rotation.y=.45*Tt,b.add(Vt)}}let I=Be(new Y(new Ui(.25,.27,.12,4,.05),h));I.position.set(0,.2,-.19),b.add(I);let S=Be(new Y(new Ui(.17,.11,.05,3,.02),u));S.position.set(0,.14,-.255),b.add(S);let R=Be(new Y(new Ui(.24,.07,.13,3,.03),u));R.position.set(0,.31,-.19),b.add(R);for(let Q of[1,-1]){let ot=Be(new Y(new en(.11,.016,8,24,Math.PI),u));ot.position.set(.095*Q,.3,-.03),ot.rotation.y=Math.PI/2,ot.scale.set(1.05,.95,1),b.add(ot)}let w={};for(let Q of[1,-1]){let ot=new Mt;ot.position.set(.178*Q,.33,0),b.add(ot);let yt=Wn(.06,r);ot.add(yt);let Tt=Mr(.058,yh-.04,r);Tt.position.y=-yh/2,ot.add(Tt);let Vt=new Mt;Vt.position.y=-yh,ot.add(Vt);let it=Mr(.054,Ba-.04,r);it.position.y=-Ba/2,Vt.add(it);let ct=Be(new Y(new en(.048,.016,8,20),o));ct.rotation.x=Math.PI/2,ct.position.y=-Ba+.01,Vt.add(ct);let P=new Mt;P.position.y=-Ba-.035,Vt.add(P);let Bt=Wn(.05,n,20,14);Bt.scale.set(.95,1.05,.78),P.add(Bt);let ut=Wn(.021,n,12,8);ut.scale.set(1,1.5,1),ut.position.set(0,0,.04),ut.rotation.x=.5,P.add(ut);let Rt=Mr(.016,.05,n,10);Rt.position.set(0,-.075,.012),P.add(Rt),w[Q>0?"L":"R"]={sh:ot,elbow:Vt,hand:P,finger:Rt,thumb:ut}}let v=new Mt;v.position.y=.4,b.add(v);let y=Be(new Y(new Je(.055,.065,.08,16),n));y.position.y=.02,v.add(y);let A=new Mt;A.position.y=.045+ui*.86,v.add(A);let z=Wn(ui,n,56,40);A.add(z);for(let Q of[1,-1]){let ot=Wn(.055,n,18,12);ot.scale.set(.55,1,.8),ot.position.set(.245*Q,-.02,-.01),A.add(ot)}let U=Wn(.032,xh(new At(e.skin).lerp(new At(16751242),.25).getHex()),18,12);U.scale.set(1.1,.85,.9),U.position.set(0,-.045,ui-.005),A.add(U);let N=new za({R:ui,freckles:t});A.add(N.mesh);let X={},G=.088;for(let Q of[1,-1]){let ot=Fa({r:G,iris:e.iris,lidMat:n,side:Q,lash:!t,lashColor:2824722,irisDeg:44,pupilDeg:22});ot.oval=1.12;let yt=.087*Q,Tt=.02,Vt=Math.sqrt(ui*ui-yt*yt-Tt*Tt)-G*.74;ot.socket.position.set(yt,Tt,Vt),ot.socket.rotation.y=.06*Q,A.add(ot.socket),X[Q>0?"L":"R"]=ot}let nt={},W=Qt(new At(e.hair).multiplyScalar(.8).getHex(),{roughness:.7});for(let Q of[1,-1]){let ot=new Mt,yt=Be(new Y(new en(.055,.0135,8,16,1.5),W),!1);yt.rotation.z=Math.PI/2-.75,yt.position.y=-.045,ot.add(yt),A.add(ot),nt[Q>0?"L":"R"]=ot}let V=new Mt;A.add(V);let $=Be(new Y(new ee(ui*1.045,48,24,0,Math.PI*2,0,Math.PI*.42),s));$.rotation.x=-.46,V.add($);let at=Be(new Y(new ee(ui*1.035,48,24,0,Math.PI*2,0,Math.PI*.5),s));at.rotation.x=-1.3,V.add(at);let _t=[],j=(Q,ot,yt,Tt,Vt=.6,it=0)=>{let ct=Be(new Y(Nf(ot,yt,Vt),s)),P=new L(...Q).normalize();return ct.position.copy(P).multiplyScalar(ui*.97),ct.quaternion.setFromUnitVectors(new L(0,1,0),P),ct.rotateY(Tt),ct.rotateX(it),V.add(ct),_t.push(ct),ct},F=[];if(t){let Q=_e(42),ot=[[0,1,.15],[.4,.92,.2],[-.4,.92,.15],[.18,.9,-.35],[-.22,.88,-.4],[.6,.7,-.15],[-.62,.68,-.1],[.05,.62,-.78],[.45,.5,-.7],[-.45,.5,-.7],[.05,.98,.45],[.7,.55,.2],[-.7,.55,.2]];for(let[yt,Tt,Vt]of ot)j([yt,Tt,Vt],.1+Q()*.04,.065,Math.atan2(yt,Vt)+Math.PI+(Q()-.5)*1.4,.7+Q()*.4,.5+Q()*.3);j([.28,.78,.55],.1,.06,.4,.9,1.1),j([0,.82,.58],.11,.065,-.2,.9,1.15),j([-.3,.76,.56],.1,.06,-.6,.9,1.1),j([.12,1,-.05],.13,.04,2.6,1.2,.2)}else{[[-.36,.74,.56],[-.12,.8,.58],[.12,.8,.58],[.36,.74,.56]].forEach((ot,yt)=>j(ot,.1,.07,(yt-1.5)*.3,1,1.15));for(let ot of[1,-1]){j([.85*ot,.25,.2],.12,.065,ot*.3,.6,1.4);let yt=new Mt;yt.position.set(.19*ot,-.01,-.15),V.add(yt);let Tt=Be(new Y(new en(.03,.015,10,20),Qt(le.mayaTie,{roughness:.4})));Tt.rotation.set(.3,Math.PI/2-.4*ot,0),yt.add(Tt);let Vt=new Mt;yt.add(Vt);let it=Wn(.062,s,24,16);it.scale.set(.9,1.5,.9),it.position.y=-.085,Vt.add(it);let ct=Be(new Y(Nf(.07,.04,1.2),s));ct.rotation.z=Math.PI,ct.position.y=-.17,Vt.add(ct),F.push({piv:yt,tail:Vt,s:ot})}}let K=new Y(new mn(1,1),new Ke({map:vr(),transparent:!0,depthWrite:!1}));K.rotation.x=-Math.PI/2,K.renderOrder=1;let pt={kind:i,root:d,body:g,hips:x,spine:b,neck:v,head:A,legs:p,arms:w,eyes:X,brows:nt,decal:N,hair:V,pigtails:F,blob:K,tufts:_t};return pt.pose=Ha(),pt}function Ha(){return{x:0,y:0,z:0,ry:0,ground:0,bob:0,fall:0,fallSide:0,lean:0,side:0,twist:0,crouch:0,headYaw:0,headUp:0,headTilt:0,aL:{f:0,o:.12,t:0,b:.15},aR:{f:0,o:.12,t:0,b:.15},hL:{point:0},hR:{point:0},lL:{f:0,o:0,k:0,a:0},lR:{f:0,o:0,k:0,a:0},squash:1,hairBounce:0,scale:1,face:so()}}function bh(i,t){i.root.position.set(t.x,t.y+t.ground,t.z),i.root.rotation.y=t.ry,i.root.scale.setScalar(t.scale),i.body.rotation.x=-t.fall,i.body.rotation.z=t.fallSide;let e=jt(t.crouch,-.2,1.4),n=e*.75,s=e*1.5,r=ro+Er-(ro*Math.cos(n)+Er*Math.cos(s-n));i.hips.position.y=zf+t.bob-r,i.hips.rotation.x=e*.25,i.spine.rotation.set(t.lean,t.twist,t.side),i.spine.scale.set(1/Math.sqrt(t.squash),t.squash,1/Math.sqrt(t.squash));for(let h of["L","R"]){let u=h==="L"?1:-1,f=t["l"+h],d=i.legs[h];d.leg.rotation.set(-(f.f+n)-e*.25,0,f.o*u),d.knee.rotation.x=f.k+s,d.foot.rotation.x=-(f.k+s)+(f.f+n)+e*.25+f.a;let g=t["a"+h],x=i.arms[h];x.sh.rotation.set(-g.f,g.t*u,g.o*u,"ZXY"),x.elbow.rotation.x=-g.b;let m=t["h"+h];x.finger.visible=m.point>.02,x.finger.scale.set(1,m.point,1),x.finger.position.set(0,-.045-.032*m.point,.012)}i.head.rotation.set(-t.headUp,t.headYaw,t.headTilt,"YXZ");let o=t.face;for(let h of["L","R"])Oa(i.eyes[h],{eo:o.eo*(h==="L"?o.eoL??1:o.eoR??1),lo:o.lo,tilt:o.tilt,lx:o.lx,ly:o.ly,es:o.es});let a=ui+.012;for(let h of["L","R"]){let u=h==="L"?1:-1,f=h==="L"?o.bL:o.bR,d=h==="L"?o.baL:o.baR,g=.095*u,x=.142+f*.026,m=Math.sqrt(Math.max(.001,a*a-g*g-x*x)),p=i.brows[h];p.position.set(g,x,m),p.rotation.set(-Math.asin(x/a)*.9,Math.asin(g/a)*.9,-d*.42*u,"YXZ")}i.decal.update(o,-.115);for(let h of i.pigtails)h.tail.rotation.z=(.75+t.hairBounce*.3)*h.s,h.tail.rotation.x=.35+t.hairBounce*.25;let c=Math.max(0,t.y),l=.75*(1-jt(c/3)*.6);i.blob.position.set(t.x,t.ground+.012,t.z),i.blob.scale.set(l,l,l),i.blob.material.opacity=1-jt(c/3)*.8}function ka(i,t=1e-4){t=Math.max(t,Number.EPSILON);let e={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count,o=0,a=Object.keys(i.attributes),c={},l={},h=[],u=["getX","getY","getZ","getW"],f=["setX","setY","setZ","setW"];for(let b=0,M=a.length;b<M;b++){let _=a[b],I=i.attributes[_];c[_]=new I.constructor(new I.array.constructor(I.count*I.itemSize),I.itemSize,I.normalized);let S=i.morphAttributes[_];S&&(l[_]||(l[_]=[]),S.forEach((R,w)=>{let v=new R.array.constructor(R.count*R.itemSize);l[_][w]=new R.constructor(v,R.itemSize,R.normalized)}))}let d=t*.5,g=Math.log10(1/t),x=Math.pow(10,g),m=d*x;for(let b=0;b<r;b++){let M=n?n.getX(b):b,_="";for(let I=0,S=a.length;I<S;I++){let R=a[I],w=i.getAttribute(R),v=w.itemSize;for(let y=0;y<v;y++)_+=`${~~(w[u[y]](M)*x+m)},`}if(_ in e)h.push(e[_]);else{for(let I=0,S=a.length;I<S;I++){let R=a[I],w=i.getAttribute(R),v=i.morphAttributes[R],y=w.itemSize,A=c[R],z=l[R];for(let U=0;U<y;U++){let N=u[U],X=f[U];if(A[X](o,w[N](M)),v)for(let G=0,nt=v.length;G<nt;G++)z[G][X](o,v[G][N](M))}}e[_]=o,h.push(o),o++}}let p=i.clone();for(let b in i.attributes){let M=c[b];if(p.setAttribute(b,new M.constructor(M.array.slice(0,o*M.itemSize),M.itemSize,M.normalized)),b in l)for(let _=0;_<l[b].length;_++){let I=l[b][_];p.morphAttributes[b][_]=new I.constructor(I.array.slice(0,o*I.itemSize),I.itemSize,I.normalized)}}return p.setIndex(h),p}var Mn=.16;function V_(){let i=new Ts(Mn,40);i.deleteAttribute("normal"),i.deleteAttribute("uv"),i=ka(i);let t=i.attributes.position,e=_e(2024),n=[];for(let d=0;d<340;d++){let g=new L(e()*2-1,e()*2-1,e()*2-1).normalize();n.push([g,.005+e()*.007])}let s=new Float32Array(t.count*3),r=new At(le.biFur),o=new At(le.biFurDeep),a=new At(le.biBelly),c=new At(le.biFace),l=new L,h=new L(.36,.22,.9).normalize(),u=new L(-.36,.22,.9).normalize(),f=new L(0,-.5,.87).normalize();for(let d=0;d<t.count;d++){l.fromBufferAttribute(t,d).normalize();let g=0;for(let[S,R]of n){let w=l.dot(S);if(w>.975){let v=(w-.975)/.025;g=Math.max(g,R*v*v*(3-2*v))}}let x=.0025*Math.sin(l.x*41+l.y*13)*Math.sin(l.y*37+l.z*17)*Math.sin(l.z*29+l.x*11),p=1-.85*jt((Math.max(l.dot(h),l.dot(u))-.85)/.1),b=Mn+(g+x)*p;t.setXYZ(d,l.x*b,l.y*b,l.z*b);let M=r.clone().lerp(o,jt((-l.z*.5+l.y*.5)*.7+.15)),_=jt((l.dot(f)-.8)/.1);M.lerp(a,_);let I=Math.max(l.dot(h),l.dot(u));M.lerp(c,jt((I-.92)/.05)),M.lerp(new At(13169407),jt(g*50)*.35*(1-_)),s[d*3]=M.r,s[d*3+1]=M.g,s[d*3+2]=M.b}return i.setAttribute("color",new Ze(s,3)),i.computeVertexNormals(),i}function Va(i,t,e){let n=[];for(let o=0;o<=12;o++){let a=o/12;n.push(new lt(t*Math.pow(Math.max(0,1-Math.pow(a,2)),.7)+5e-4,a*i))}let s=new an(n,12),r=s.attributes.position;for(let o=0;o<r.count;o++){let a=r.getY(o)/i;r.setZ(o,r.getZ(o)+e*i*a*a)}return s.computeVertexNormals(),s}function Ff(){let i=new Fe({vertexColors:!0,roughness:.85,sheen:.75,sheenRoughness:.45,sheenColor:new At(14219007)}),t=new Fe({color:le.biFace,roughness:.8,sheen:.8,sheenColor:new At(16777215)}),e=new Fe({color:le.biBeak,roughness:.4,clearcoat:.5}),n=new Fe({color:le.biFur,roughness:.85,sheen:1,sheenRoughness:.5,sheenColor:new At(14219007)}),s=new Fe({color:le.biFur,roughness:.8,sheen:1,sheenColor:new At(14743807)}),r=new Mt;r.name="bibou";let o=new Mt;r.add(o);let a=new Mt;a.position.y=Mn,o.add(a);let c=new Mt;a.add(c);let l=new Y(V_(),i);l.castShadow=!0,l.receiveShadow=!0,c.add(l);let h={},u=.064;for(let y of[1,-1]){let A=Fa({r:u,iris:le.biIris,lidMat:t,side:y,lashColor:1923704,irisDeg:48,pupilDeg:28,lashLine:!1}),z=new L(.36*y,.22,.9).normalize();A.socket.position.copy(z).multiplyScalar(Mn-u*.42),A.socket.rotation.y=.2*y,A.socket.rotation.x=-.1,c.add(A.socket),h[y>0?"L":"R"]=A}let f=new Mt;f.position.set(0,0,Mn-.006),c.add(f);let d=new Y(new hi(.024,.04,16),e);d.rotation.x=Math.PI/2+.5,d.position.set(0,.002,.012),d.castShadow=!0,f.add(d);let g=new Mt;g.position.set(0,-.006,0),f.add(g);let x=new Y(new hi(.016,.026,14),e);x.rotation.x=Math.PI/2+.9,x.position.set(0,-.006,.01),g.add(x);let m=new Y(new ee(.014,12,8),Qt(8004656));m.visible=!1,m.position.set(0,-.008,.004),f.add(m);let p=new Ke({color:16748448,transparent:!0,opacity:.55,depthWrite:!1}),b=[];for(let y of[1,-1]){let A=new Y(new cn(.022,20),p),z=new L(.55*y,-.12,.83).normalize();A.position.copy(z).multiplyScalar(Mn+.004),A.lookAt(z.clone().multiplyScalar(1)),A.lookAt(A.position.clone().multiplyScalar(2)),A.scale.set(1.3,.8,1),c.add(A),b.push(A)}let M=[];for(let y of[1,-1]){let A=new Mt,z=new L(.45*y,.86,.15).normalize();A.position.copy(z).multiplyScalar(Mn*.92),c.add(A);let U=new Y(Va(.07,.034,.55),n);U.castShadow=!0,A.add(U);let N=new Y(Va(.045,.026,.7),n);N.rotation.z=-.5*y,N.position.x=.012*y,A.add(N),M.push({piv:A,s:y})}let _=new Y(Va(.045,.018,1),n);_.position.set(0,Mn*.97,.03),_.rotation.x=.3,c.add(_);let I=new Mt;I.position.set(0,-.05,-Mn*.95),c.add(I);for(let y=-1;y<=1;y++){let A=new Y(Va(.06,.022,.4),n);A.rotation.set(-2,0,y*.4),I.add(A)}let S={};for(let y of[1,-1]){let A=new Mt;A.position.set(.14*y,.015,0),c.add(A);let z=new Mt;A.add(z);let U=new Y(new ee(.072,24,16),s);U.scale.set(.38,1,.8),U.position.set(.014*y,-.055,.01),U.castShadow=!0,z.add(U);for(let N=0;N<3;N++){let X=new Y(new ee(.022,12,8),s);X.scale.set(.5,1.4,.8),X.position.set(.012*y,-.11+N*.004,-.03+N*.03),X.rotation.x=.3-N*.3,z.add(X)}S[y>0?"L":"R"]={piv:A,flap:z,s:y}}let R={};for(let y of[1,-1]){let A=new Mt;A.position.set(.055*y,-Mn+.008,.05),c.add(A);for(let z=-1;z<=1;z++){let U=new Y(new rs(.009,.024,4,8),e);U.rotation.x=Math.PI/2,U.rotation.y=z*.45,U.position.set(z*.011,-.004,.012),U.castShadow=!0,A.add(U)}R[y>0?"L":"R"]=A}let w=new Y(new mn(1,1),new Ke({map:vr(),transparent:!0,depthWrite:!1}));w.rotation.x=-Math.PI/2,w.renderOrder=1;let v={kind:"bibou",root:r,squash:o,center:a,tumble:c,fur:l,eyes:h,beak:f,lowerPiv:g,cheeks:b,cheekMat:p,tufts:M,wings:S,feet:R,tail:I,blob:w,crest:_,mouthIn:m};return v.pose=Mh(),v}function Mh(){return{x:0,y:0,z:0,ry:0,ground:0,sq:1,rx:0,rz:0,lean:0,puff:0,scale:1,wL:.15,wR:.15,wfL:0,wfR:0,flap:0,flapT:0,fL:0,fR:0,tufts:0,beak:0,tremble:0,tail:0,face:{...so(),bl:.3}}}function Of(i,t,e=0){i.root.position.set(t.x,t.y+t.ground,t.z),i.root.rotation.y=t.ry,i.root.scale.setScalar(t.scale);let n=t.sq*(1+t.puff*.08),s=1/Math.sqrt(t.sq)*(1+t.puff*.22);i.squash.scale.set(s,n,s),i.center.position.y=Mn;let r=t.tremble?Math.sin(e*80)*.02*t.tremble:0;i.tumble.rotation.set(t.rx-t.lean-t.puff*.25,r*3,t.rz+r,"YXZ");for(let l of["L","R"]){let h=i.wings[l],u=l==="L"?t.wL:t.wR,f=l==="L"?t.wfL:t.wfR,d=t.flap*(.5+.5*Math.sin(t.flapT*Math.PI*2))*1.5;h.flap.rotation.set(-f,0,(u+d)*h.s,"ZXY");let g=i.feet[l],x=l==="L"?t.fL:t.fR;g.position.y=-Mn+.008+x*.03,g.rotation.x=-x*.6}for(let l of i.tufts)l.piv.rotation.z=(-.25-t.tufts*.35)*l.s,l.piv.rotation.x=t.tufts<0?-t.tufts*.9:-t.tufts*.1;i.tail.rotation.x=t.tail*.5,i.lowerPiv.rotation.x=t.beak*.7,i.mouthIn.visible=t.beak>.05,i.beak.scale.setScalar(1+t.beak*.15);let o=t.face;for(let l of["L","R"])Oa(i.eyes[l],{eo:o.eo*(l==="L"?o.eoL??1:o.eoR??1),lo:o.lo,tilt:o.tilt,lx:o.lx,ly:o.ly,es:o.es});i.cheekMat.opacity=.35+.5*jt(o.bl||0);let a=Math.max(0,t.y),c=.42*(1-jt(a/2.5)*.6)*s;i.blob.position.set(t.x,t.ground+.013,t.z),i.blob.scale.set(c,c,c),i.blob.material.opacity=1-jt(a/2.5)*.85}var as=.13;function Bf(){let i=new Mt,t=new Mt;i.add(t);let e=new Fe({color:le.ball,roughness:.32,clearcoat:.8,clearcoatRoughness:.2}),n=new Y(new ee(as,48,32),e);n.castShadow=!0,n.receiveShadow=!0,t.add(n);let s=new me({color:le.ballSeam,roughness:.5});for(let a of[[0,0,0],[Math.PI/2,0,0],[0,Math.PI/2,0]]){let c=new Y(new en(as*1.001,.0035,6,64),s);c.rotation.set(...a),t.add(c)}let r=new Y(new mn(1,1),new Ke({map:vr(),transparent:!0,depthWrite:!1}));return r.rotation.x=-Math.PI/2,r.renderOrder=1,{root:i,spin:t,blob:r,pose:{x:0,y:as,z:0,rx:0,ry:0,rz:0,sq:1,ground:0,visible:!0}}}function Hf(i,t){i.root.visible=t.visible,i.blob.visible=t.visible,i.root.position.set(t.x,t.y+t.ground,t.z),i.spin.rotation.set(t.rx,t.ry,t.rz),i.root.scale.set(1/Math.sqrt(t.sq),t.sq,1/Math.sqrt(t.sq));let e=Math.max(0,t.y-as),n=Math.max(0,1-e/3);i.blob.position.set(t.x,t.ground+.014,t.z),i.blob.scale.setScalar(.4*(.5+.5*n)),i.blob.material.opacity=n}function kf(i,t){i.shadowMap.enabled=!0,i.shadowMap.type=ih,i.toneMapping=sh,i.toneMappingExposure=1.08,i.outputColorSpace=We;let e=new wa(14085887,10272627,1.05);t.add(e);let n=new eo(16773334,2.7);n.castShadow=!0,n.shadow.mapSize.set(2048,2048),n.shadow.bias=-35e-5,n.shadow.normalBias=.025,n.shadow.radius=4,t.add(n,n.target);let s=new eo(13823231,1.1);t.add(s,s.target);let r=new pr,o=new ee(10,32,16),a=new An({side:on,uniforms:{},vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`varying vec3 vP;
      void main(){
        float h = vP.y;
        vec3 sky = mix(vec3(1.0,0.95,0.86), vec3(0.45,0.72,1.0), smoothstep(0.0,0.7,h));
        vec3 gnd = mix(vec3(0.62,0.78,0.42), vec3(0.95,0.9,0.78), smoothstep(-0.5,0.0,h));
        vec3 c = h > 0.0 ? sky : gnd;
        float sunv = pow(max(dot(vP, normalize(vec3(0.5,0.6,0.6))),0.0), 64.0);
        c += vec3(4.0,3.6,3.0)*sunv;
        gl_FragColor = vec4(c,1.0);
      }`});r.add(new Y(o,a));let l=new fr(i).fromScene(r,.02).texture;t.environment=null;let h=new Set,u={hemi:e,sun:n,rim:s,env:l,envMats:h};return u.useEnv=f=>f.traverse(d=>{let g=d.material?Array.isArray(d.material)?d.material:[d.material]:[];for(let x of g)"envMap"in x&&!x.isShaderMaterial&&!x.isMeshBasicMaterial&&(x.envMap=l,h.add(x))}),u.setup=({focus:f=[0,0,0],size:d=8,sunDir:g=[.55,.85,.6],sunColor:x=16773334,sunI:m=2.7,hemiI:p=1.25,hemiSky:b=14085887,hemiGround:M=10272627,rimColor:_=13823231,rimI:I=1.1,rimDir:S=[-.6,.5,-.7],envI:R=.55,exposure:w=1.08}={})=>{let v=new L(...f),y=new L(...g).normalize();n.position.copy(v).addScaledVector(y,40),n.target.position.copy(v),n.color.set(x),n.intensity=m;let A=n.shadow.camera;A.right!==d&&(A.left=-d,A.right=d,A.top=d,A.bottom=-d,A.near=1,A.far=100,A.updateProjectionMatrix()),e.intensity=p,e.color.set(b),e.groundColor.set(M),s.color.set(_),s.intensity=I,s.position.copy(v).addScaledVector(new L(...S).normalize(),30),s.target.position.copy(v);for(let z of h)z.envMapIntensity=R;i.toneMappingExposure=w},u}function Jt(i,t=!0,e=!0){return i.castShadow=t,i.receiveShadow=e,i}function En(i,t=1,e=.12,n=3,s=2.2){let r=new Ts(i,n);r.deleteAttribute("normal"),r.deleteAttribute("uv"),r=ka(r);let o=r.attributes.position,a=_e(t),c=[a()*6,a()*6,a()*6,a()*6],l=new L;for(let h=0;h<o.count;h++){l.fromBufferAttribute(o,h).normalize();let u=Math.sin(l.x*s*3+c[0])*Math.sin(l.y*s*2.6+c[1])*Math.sin(l.z*s*3.3+c[2])+.5*Math.sin(l.x*s*7+c[3])*Math.sin(l.z*s*6.1+c[0]),f=1+e*u;o.setXYZ(h,l.x*i*f,l.y*i*f,l.z*i*f)}return r.computeVertexNormals(),r}var G_=[6142794,5221959,8178767,6865498,4169546];function wr(i){return new me({color:i,roughness:.8})}var W_=G_.map(wr),X_=Qt(10119749,{roughness:.85});function fi({h:i=3,r:t=1.3,seed:e=1,kind:n="round",trunkMat:s=X_,colors:r,lod:o=3,cast:a=!0}={}){let c=new Mt,l=_e(e),h=i*.55,u=[[.2,0],[.16,.08],[.12,.3],[.1,h],[0,h]].map(([g,x])=>new lt(g*(t/1.3),x)),f=Jt(new Y(new an(u,o<3?7:12),s),a);c.add(f);let d=r?r.map(wr):W_;if(n==="round"){let g=4+Math.floor(l()*3);for(let m=0;m<g;m++){let p=m/g*Math.PI*2+l(),b=t*(.55+l()*.25),M=Jt(new Y(En(b,e*13+m,.08,o),d[Math.floor(l()*d.length)]),a);M.position.set(Math.cos(p)*t*.45,i*.62+l()*t*.4,Math.sin(p)*t*.45),c.add(M)}let x=Jt(new Y(En(t*.75,e*7,.08,o),d[Math.floor(l()*d.length)]),a);x.position.y=i*.62+t*.55,c.add(x)}else if(n==="lolly"){let g=Jt(new Y(En(t,e*3,.06,o),d[Math.floor(l()*d.length)]),a);g.position.y=i*.7,c.add(g)}else if(n==="pine")for(let g=0;g<3;g++){let x=Jt(new Y(new hi(t*(1-g*.25),i*.45,o<3?8:14),d[4-g%2]),a);x.position.y=i*(.45+g*.2),c.add(x)}return c}function Rs({r:i=.6,seed:t=1,color:e=5219912,flowers:n=0}={}){let s=new Mt,r=_e(t),o=wr(e),a=4;for(let l=0;l<a;l++){let h=l/a*Math.PI*2+r(),u=Jt(new Y(En(i*(.55+r()*.2),t*5+l,.1),o));u.position.set(Math.cos(h)*i*.42,i*.45,Math.sin(h)*i*.42),s.add(u)}let c=Jt(new Y(En(i*.6,t*9,.1),o));if(c.position.y=i*.75,s.add(c),n){let l=Qt(n,{roughness:.5});for(let h=0;h<9;h++){let u=new Y(new ee(i*.07,8,6),l),f=new L(r()*2-1,r()*.9+.2,r()*2-1).normalize();u.position.copy(f).multiplyScalar(i*.95).add(new L(0,i*.5,0)),s.add(u)}}return s}function Tr({r:i=.6,seed:t=1,color:e=12170182,sy:n=.75}={}){let s=new me({color:e,roughness:.9,vertexColors:!0}),r=En(i,t,.13,3,1.6),o=r.attributes.position,a=new Float32Array(o.count*3),c=_e(t*7);for(let u=0;u<o.count;u++){let f=o.getY(u)/i,d=.78+.22*Math.max(0,f)+(c()-.5)*.06;a[u*3]=d,a[u*3+1]=d,a[u*3+2]=d*1.02}r.setAttribute("color",new Ze(a,3));let l=Jt(new Y(r,s));l.scale.set(1,n,.9),l.position.y=i*n*.55;let h=new Mt;return h.add(l),h}var Vf=[9067067,4026328,15218746,3120746,8080056];function Eh({r:i=1.8,h:t=2.3,wall:e=16769720,roof:n=15228234,seed:s=1,dome:r=!1,door:o=null}={}){let a=_e(s),c=new Mt,l=os(e,{roughness:.9,sheen:.2}),h=Jt(new Y(new Je(i,i*1.05,t,40),l));h.position.y=t/2,c.add(h);let u=Jt(new Y(new en(i*1.05,.09,8,48),Qt(14272944)));u.rotation.x=Math.PI/2,u.position.y=.08,c.add(u);let f=Qt(n,{roughness:.6});if(r){let v=Jt(new Y(new ee(i*1.18,40,20,0,Math.PI*2,0,Math.PI/2),f));v.scale.y=.85,v.position.y=t,c.add(v)}else{let v=t*.95+a()*.5,y=[];for(let U=0;U<=16;U++){let N=U/16,X=i*1.3*Math.pow(1-N,1.25)+.02;y.push(new lt(X,N*v))}let A=Jt(new Y(new an(y,40),f));A.position.y=t-.05,A.rotation.z=(a()-.5)*.12,c.add(A);let z=Jt(new Y(new ee(.12,12,8),Qt(16765503,{roughness:.4})));z.position.set(0,t+v-.02,0),A.add(z),z.position.set(0,v,0)}let d=Jt(new Y(new en(i*(r?1.16:1.28),.08,8,48),Qt(new At(n).multiplyScalar(.8).getHex())));d.rotation.x=Math.PI/2,d.position.y=t-.02,c.add(d);let g=new Di,x=.42,m=.95;g.moveTo(-x,0),g.lineTo(-x,m),g.absarc(0,m,x,Math.PI,0,!0),g.lineTo(x,0),g.closePath();let p=new mr(g,{depth:.08,bevelEnabled:!0,bevelSize:.03,bevelThickness:.03,bevelSegments:2,curveSegments:16}),b=o??Vf[Math.floor(a()*Vf.length)],M=Jt(new Y(p,Qt(b,{roughness:.55})));M.position.set(0,.02,i*1-.02),c.add(M);let _=new Y(new ee(.05,10,8),Qt(16765503,{metalness:.3,roughness:.3}));_.position.set(.25,.7,i+.1),c.add(_);let I=Jt(new Y(new Je(.6,.65,.1,24,1,!1,0,Math.PI),Qt(14272944)));I.position.set(0,.05,i*1.02),I.rotation.y=-Math.PI/2,c.add(I);let S=Qt(16777215,{roughness:.5}),R=new Fe({color:10475263,roughness:.08,metalness:0,emissive:2775680,emissiveIntensity:.25,clearcoat:1}),w=2+Math.floor(a()*2);for(let v=0;v<w;v++){let y=(v%2?1:-1)*(.75+Math.floor(v/2)*.9)+(a()-.5)*.2,A=t*(.5+a()*.15),z=.3,U=new Mt;U.position.set(Math.sin(y)*i*1,A,Math.cos(y)*i*1),U.rotation.y=y;let N=Jt(new Y(new en(z,.06,8,24),S),!1),X=new Y(new cn(z,24),R);X.position.z=-.01;let G=new Y(new je(z*2,.035,.03),S),nt=new Y(new je(.035,z*2,.03),S);if(U.add(N,X,G,nt),a()<.6){let W=Jt(new Y(new je(.75,.16,.2),Qt(11037509)));W.position.set(0,-z-.12,.08),U.add(W);let V=[16740241,16765503,16777215,13073919][Math.floor(a()*4)];for(let $=0;$<5;$++){let at=new Y(new ee(.06,8,6),Qt($%2?V:6142794));at.position.set(-.28+$*.14,-z-.02,.1),U.add(at)}}c.add(U)}if(!r&&a()<.7){let v=Jt(new Y(new Je(.16,.18,.7,14),Qt(13208171)));v.position.set(i*.5,t+.55,-i*.3),c.add(v);let y=Jt(new Y(new Je(.22,.22,.08,14),Qt(10117200)));y.position.set(i*.5,t+.92,-i*.3),c.add(y)}return c}function Gf(i=2.6){let t=new Mt,e=Qt(3108730,{roughness:.45,metalness:.2}),n=Jt(new Y(new Je(.05,.07,i,10),e));n.position.y=i/2;let s=Jt(new Y(new Je(.15,.18,.2,12),e));s.position.y=.1;let r=new Y(new ee(.18,16,12),new me({color:16773568,emissive:16765562,emissiveIntensity:.6,roughness:.3}));r.position.y=i+.12;let o=Jt(new Y(new hi(.22,.18,12),e));return o.position.y=i+.34,t.add(n,s,r,o),t}function wh(){let i=new Mt,t=Qt(13208146,{roughness:.7}),e=Qt(3955306,{roughness:.5});for(let n=0;n<3;n++){let s=Jt(new Y(new je(1.5,.05,.13),t));s.position.set(0,.45,-.16+n*.16),i.add(s)}for(let n=0;n<2;n++){let s=Jt(new Y(new je(1.5,.12,.04),t));s.position.set(0,.68+n*.16,-.27),i.add(s)}for(let n of[-.65,.65]){let s=Jt(new Y(new je(.06,.45,.4),e));s.position.set(n,.225,-.05),i.add(s)}return i}function Ga(i,t,e=.6,n=3){let s=new Mt,r=_e(n),o=new L(...i),a=new L(...t),c=[],l=24;for(let p=0;p<=l;p++){let b=p/l;c.push(o.clone().lerp(a,b).add(new L(0,-e*4*b*(1-b),0)))}let h=new Pi(c),u=new Y(new gr(h,40,.012,5),Qt(16777215));s.add(u);let f=[16735581,16762163,4766946,9131478,6142794,16748477],d=o.distanceTo(a),g=Math.floor(d/.45),x=[],m=new ze().setFromPoints([new L(-.16,0,0),new L(.16,0,0),new L(0,-.36,0)]);m.computeVertexNormals();for(let p=1;p<g;p++){let b=p/g,M=h.getPoint(b),_=new Y(m,new me({color:f[p%f.length],side:$e,roughness:.7}));_.position.copy(M);let I=h.getTangent(b);_.rotation.y=Math.atan2(-I.z,I.x),_.castShadow=!0,s.add(_),x.push({f:_,ph:r()*6})}return s.userData.flags=x,s}function Wf(i,t,e=1){for(let{f:n,ph:s}of i.userData.flags)n.rotation.x=Math.sin(t*3+s)*.18*e+.1*e}function Sr({count:i=800,area:t=r=>[r()*20-10,r()*20-10],seed:e=5,colors:n=[7127636,5812294,9163874],h:s=.22}={}){let r=_e(e),o=new hi(.035,1,4);o.translate(0,.5,0);let a=new Mt,c=new me({roughness:.85}),l=new Qn(o,c,i*3),h=new Ne,u=new At,f=0;for(let d=0;d<i;d++){let g=t(r);if(!g)continue;let[x,m]=g;for(let p=0;p<3;p++)h.position.set(x+(r()-.5)*.08,0,m+(r()-.5)*.08),h.rotation.set((r()-.5)*.6,r()*6,(r()-.5)*.6),h.scale.set(1,s*(.6+r()*.8),1),h.updateMatrix(),l.setMatrixAt(f,h.matrix),l.setColorAt(f,u.set(n[Math.floor(r()*n.length)])),f++}return l.count=f,l.receiveShadow=!0,a.add(l),a}function Ar({count:i=200,area:t,seed:e=8,colors:n=[16777215,16765503,16748477,13081599,16740193]}={}){let s=_e(e),r=new Ts(.05,0),o=new Je(.008,.008,1,4);o.translate(0,.5,0);let a=new Mt,c=new Qn(r,new me({roughness:.5}),i),l=new Qn(o,Qt(5218111),i),h=new Ne,u=new At,f=0;for(let d=0;d<i;d++){let g=t(s);if(!g)continue;let[x,m]=g,p=.12+s()*.16;h.position.set(x,0,m),h.rotation.set(0,0,0),h.scale.set(1,p,1),h.updateMatrix(),l.setMatrixAt(f,h.matrix),h.position.set(x,p,m),h.scale.set(1,.7,1),h.updateMatrix(),c.setMatrixAt(f,h.matrix),c.setColorAt(f,u.set(n[Math.floor(s()*n.length)])),f++}return c.count=l.count=f,c.castShadow=!0,a.add(c,l),a}function Th(i,t,e=6){let n=new Mt,s=Qt(14263915,{roughness:.8}),r=new L(...i),o=new L(...t);for(let c=0;c<=e;c++){let l=r.clone().lerp(o,c/e),h=Jt(new Y(new Je(.05,.06,.8,8),s));h.position.set(l.x,.4,l.z);let u=Jt(new Y(new ee(.06,8,6),s));u.position.set(l.x,.82,l.z),n.add(h,u)}let a=r.distanceTo(o);for(let c of[.35,.62]){let l=Jt(new Y(new je(a,.07,.04),s));l.position.set((r.x+o.x)/2,c,(r.z+o.z)/2),l.rotation.y=-Math.atan2(o.z-r.z,o.x-r.x),n.add(l)}return n}function Xf(i=1,t=1){let e=new Mt,n=Jt(new Y(new Je(.05*i,.07*i,.18*i,10),Qt(16774108)));n.position.y=.09*i;let s=Jt(new Y(new ee(.13*i,16,10,0,Math.PI*2,0,Math.PI/2),Qt(15222842,{roughness:.4})));s.position.y=.16*i,s.scale.y=.75,e.add(n,s);let r=_e(t);for(let o=0;o<5;o++){let a=new Y(new ee(.022*i,8,6),Qt(16777215)),c=r()*6,l=.3+r()*.9;a.position.set(Math.cos(c)*Math.sin(l)*.13*i,.16*i+Math.cos(l)*.1*i,Math.sin(c)*Math.sin(l)*.13*i),e.add(a)}return e}function qf({r:i=1.1,h:t=.95,count:e=240,seed:n=12}={}){let s=_e(n),r=new Mt,o=new hi(.05,1,5,4);o.translate(0,.5,0);let a=o.attributes.position;for(let d=0;d<a.count;d++){let g=a.getY(d);a.setZ(d,a.getZ(d)+.25*g*g)}o.computeVertexNormals();let c=new me({roughness:.8}),l=new Qn(o,c,e),h=new At,u=[7127636,5812294,9163874,5218111,10411114],f=[];for(let d=0;d<e;d++){let g=s()*Math.PI*2,x=Math.sqrt(s())*i,m=t*(1-.55*(x/i))*(.7+s()*.5);f.push({x:Math.cos(g)*x,z:Math.sin(g)*x,ry:s()*6,lean:.15+x/i*.5,dir:g,hh:m,ph:s()*6}),l.setColorAt(d,h.set(u[Math.floor(s()*u.length)]))}return l.castShadow=!0,l.receiveShadow=!0,r.add(l),r.userData={inst:l,data:f},r}function Yf(i,t,e=0,n=0,s=.3){let r=new Ne,{inst:o,data:a}=i.userData;a.forEach((c,l)=>{let h=Math.sin(t*2.2+c.ph)*.06*s+Math.sin(t*17+c.ph)*.25*e,u=Math.hypot(c.x,c.z),f=n*Math.max(0,1-u/1.2)*.9;r.position.set(c.x,0,c.z),r.rotation.set(0,0,0),r.rotateY(-c.dir+Math.PI/2),r.rotateX(c.lean+h+f),r.rotateY(c.ry),r.scale.set(1,c.hh*(1-n*.25),1),r.updateMatrix(),o.setMatrixAt(l,r.matrix)}),o.instanceMatrix.needsUpdate=!0}function Zf(i=1,t=1){let e=new Mt,n=_e(i),s=new me({color:16777215,emissive:14543349,emissiveIntensity:.55,roughness:1,fog:!1}),r=5+Math.floor(n()*3);for(let o=0;o<r;o++){let a=new Y(new ee((1.4+n()*1.4)*t,20,14),s);a.position.set((o-r/2)*1.5*t+n()*.5,n()*.9*t,(n()-.5)*1.5*t),a.scale.y=.8,e.add(a)}return e}function Jf(){let i=new Mt,t=Qt(5925770,{roughness:.6}),e=new Y(new ee(.12,10,8),t);e.scale.set(.8,.8,1.4),i.add(e);let n=[];for(let s of[1,-1]){let r=new Mt,o=new Y(new je(.32,.02,.14),t);o.position.x=.16*s,r.add(o),i.add(r),n.push({piv:r,s})}return i.userData.wings=n,i}function $f(i,t,e=0){for(let{piv:n,s}of i.userData.wings)n.rotation.z=Math.sin(t*14+e)*.7*s}function Kf(i){let t={top:{value:new At(6271730)},mid:{value:new At(11066367)},hor:{value:new At(16773593)},sunDir:{value:new L(.5,.5,-.7).normalize()},sunCol:{value:new At(16774096)}},e=new Y(new ee(450,48,24),new An({side:on,depthWrite:!1,fog:!1,uniforms:t,vertexShader:"varying vec3 vD; void main(){ vD = normalize(position); vec4 p = projectionMatrix*modelViewMatrix*vec4(position,1.0); gl_Position = p.xyww; }",fragmentShader:`uniform vec3 top; uniform vec3 mid; uniform vec3 hor; uniform vec3 sunDir; uniform vec3 sunCol; varying vec3 vD;
        void main(){
          float h = clamp(vD.y, -0.2, 1.0);
          vec3 c = mix(hor, mid, smoothstep(-0.02, 0.18, h));
          c = mix(c, top, smoothstep(0.18, 0.75, h));
          float s = max(dot(normalize(vD), normalize(sunDir)), 0.0);
          c += sunCol * (pow(s, 600.0) * 1.6 + pow(s, 24.0) * 0.28 + pow(s, 4.0) * 0.08);
          gl_FragColor = vec4(c, 1.0);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`}));e.renderOrder=-10,e.frustumCulled=!1,i.add(e);let n=new Mt;i.add(n);let s=_e(99),r=[];for(let l=0;l<14;l++){let h=Zf(l+3,1.2+s()*1.4),u=l/14*Math.PI*2+s()*.3,f=140+s()*90;h.position.set(Math.cos(u)*f,38+s()*40,Math.sin(u)*f),h.lookAt(0,h.position.y,0),n.add(h),r.push({c:h,a:u,d:f,sp:.002+s()*.002})}let o=new Mt;i.add(o);let a=[];for(let l=0;l<5;l++){let h=Jf();o.add(h),a.push({b:h,off:[l%3*1.4-1.4,l%2*.6,Math.floor(l/2)*1.2],ph:l*1.3})}o.visible=!1;let c={dome:e,uniforms:t,clouds:n,birds:o,cl:r,bl:a};return c.update=(l,h)=>{e.position.copy(h.position),n.position.set(h.position.x,0,h.position.z);for(let u of r){let f=u.a+l*u.sp;u.c.position.x=Math.cos(f)*u.d,u.c.position.z=Math.sin(f)*u.d}},c.flyBirds=(l,h,u,f,d)=>{if(l<h||l>u){o.visible=!1;return}o.visible=!0;let g=(l-h)/(u-h),x=new L(...f).lerp(new L(...d),g);o.position.copy(x),o.lookAt(new L(...d)),a.forEach((m,p)=>{m.b.position.set(m.off[0],m.off[1]+Math.sin(l*2+p)*.2,m.off[2]),$f(m.b,l,m.ph)})},c.setTime=l=>{l==="golden"?(t.top.value.set(6262748),t.mid.value.set(16102542),t.hor.value.set(16763262),t.sunCol.value.set(16756838)):(t.top.value.set(6271730),t.mid.value.set(11066367),t.hor.value.set(16773593),t.sunCol.value.set(16774096))},c}var q_={fountain:[-4.2,0,-3.2],play:[1.5,0,1],hillTop:[0,9,-58]};function jf(){let i=new Mt;i.name="village";let t=_e(11),e=br("#86cf62");e.repeat.set(40,40);let n=Jt(new Y(new cn(160,64),new me({map:e,roughness:.95})),!1,!0);n.rotation.x=-Math.PI/2,i.add(n);let s=Pf();s.repeat.set(4,4);let r=Jt(new Y(new cn(10,64),new me({map:s,roughness:.85})),!1,!0);r.rotation.x=-Math.PI/2,r.position.y=.01,i.add(r);let o=Jt(new Y(new en(10,.12,8,96),Qt(15259320)));o.rotation.x=Math.PI/2,o.position.y=.03,o.scale.z=.4,i.add(o);let a=new me({color:15126431,roughness:.95});for(let V of[-Math.PI/2,.35,2.4,-2.6]){let $=Jt(new Y(new mn(2.6,40),a),!1,!0);$.rotation.x=-Math.PI/2,$.rotation.z=-V+Math.PI/2,$.position.set(Math.cos(V)*29,.006,Math.sin(V)*29),i.add($)}let c=new Mt;c.position.set(...q_.fountain),i.add(c);let l=Qt(15524303,{roughness:.75}),h=[[0,0],[1.55,0],[1.6,.1],[1.6,.5],[1.5,.58],[1.38,.55],[1.34,.2],[0,.2]].map(([V,$])=>new lt(V,$));c.add(Jt(new Y(new an(h,48),l)));let u=new Fe({color:6279400,roughness:.06,transmission:0,transparent:!0,opacity:.88,clearcoat:1,emissive:1798024,emissiveIntensity:.25}),f=new Y(new cn(1.36,48),u);f.rotation.x=-Math.PI/2,f.position.y=.45,c.add(f);let d=[[.32,0],[.22,.15],[.16,.5],[.18,.9],[0,.9]].map(([V,$])=>new lt(V,$)),g=Jt(new Y(new an(d,24),l));g.position.y=.4,c.add(g);let x=[[0,0],[.25,.02],[.6,.22],[.66,.3],[.58,.31],[0,.18]].map(([V,$])=>new lt(V,$)),m=Jt(new Y(new an(x,32),l));m.position.y=1.28,c.add(m);let p=new Y(new cn(.56,32),u);p.rotation.x=-Math.PI/2,p.position.y=1.56,c.add(p);let b=Jt(new Y(new ee(.16,20,14),Cf(4766946)));b.position.y=1.75,c.add(b);let M=new ee(.035,8,6),_=new me({color:12579071,emissive:7326688,emissiveIntensity:.4,roughness:.1}),I=new Qn(M,_,96);c.add(I);let S=[];for(let V=0;V<3;V++){let $=new Y(new va(.9,.95,48),new Ke({color:16777215,transparent:!0,opacity:.4,depthWrite:!1}));$.rotation.x=-Math.PI/2,$.position.y=.455,c.add($),S.push($)}let R=[16769720,16763330,13497048,14084351,16773544,15980287,16767144],w=[15228234,4171734,9131478,16747069,3124874,15222906,4878304],v=[],y=11;for(let V=0;V<y;V++){let $=-Math.PI/2+(V+.5)/y*we,at=Math.atan2(Math.sin($+Math.PI/2),Math.cos($+Math.PI/2));if(Math.abs(at)<.35)continue;let _t=15+t()*2.5,j=Eh({r:1.7+t()*.6,h:2.1+t()*.8,wall:R[V%R.length],roof:w[V*3%w.length],seed:20+V,dome:V%4===2});j.position.set(Math.cos($)*_t,0,Math.sin($)*_t),j.rotation.y=Math.atan2(-j.position.x,-j.position.z),i.add(j),v.push(j)}for(let V=0;V<9;V++){let $=-Math.PI/2+(V+.1)/9*we,at=Math.atan2(Math.sin($+Math.PI/2),Math.cos($+Math.PI/2));if(Math.abs(at)<.3)continue;let _t=25+t()*4,j=Eh({r:1.8+t()*.6,h:2.3+t()*1,wall:R[(V+3)%R.length],roof:w[(V*5+1)%w.length],seed:60+V,dome:V%3===1});j.position.set(Math.cos($)*_t,0,Math.sin($)*_t),j.rotation.y=Math.atan2(-j.position.x,-j.position.z),i.add(j)}for(let V=0;V<18;V++){let $=t()*we,at=11.5+t()*18,_t=[Math.cos($)*at,Math.sin($)*at];if(v.some(K=>Math.hypot(K.position.x-_t[0],K.position.z-_t[1])<3.4)||Math.abs(_t[0])<2.2&&_t[1]<-9)continue;let j=Math.hypot(_t[0],_t[1])>18,F=fi({h:3+t()*1.5,r:1.1+t()*.5,seed:100+V,kind:t()<.3?"lolly":"round",lod:j?2:3,cast:!j});F.position.set(_t[0],0,_t[1]),i.add(F)}for(let V=0;V<16;V++){let $=t()*we,at=10.6+t()*3,_t=Rs({r:.45+t()*.3,seed:200+V,flowers:[16748477,16765503,16777215,null][V%4]});_t.position.set(Math.cos($)*at,0,Math.sin($)*at),i.add(_t)}let A=[[7,6.5],[-7.5,5.5],[8,-5],[-8.5,-5.5]];for(let[V,$]of A){let at=Gf();at.position.set(V,0,$),i.add(at)}let z=wh();z.position.set(-7.8,0,1.5),z.rotation.y=Math.PI/2,i.add(z);let U=wh();U.position.set(6.5,0,-7),U.rotation.y=-.7,i.add(U);let N=[Ga([7,2.7,6.5],[-7.5,2.7,5.5],.8,1),Ga([7,2.7,6.5],[8,2.7,-5],.7,3),Ga([-7.5,2.7,5.5],[-8.5,2.7,-5.5],.7,4)];N.forEach(V=>i.add(V)),i.add(Sr({count:1400,seed:3,area:V=>{let $=V()*we,at=10.4+V()*22;return[Math.cos($)*at,Math.sin($)*at]}})),i.add(Ar({count:500,seed:4,area:V=>{let $=V()*we,at=10.5+V()*20;return[Math.cos($)*at,Math.sin($)*at]}}));let X=new me({color:7981402,roughness:.95}),G=Jt(new Y(En(1,7,.02,4),X),!1,!0);G.scale.set(48,14,22),G.position.set(0,-4,-62),i.add(G);for(let V=0;V<9;V++){let $=fi({h:3.5,r:1.5,seed:300+V,kind:V%3?"round":"lolly",lod:2,cast:!1}),at=-26+V*6.5+t()*2;$.position.set(at,8.6-Math.pow(at/34,2)*9,-60+t()*3),$.scale.setScalar(1.2),i.add($)}let nt=[9424762,10475168,11131080].map(V=>new me({color:V,roughness:1}));for(let V=0;V<10;V++){let $=V/10*we+.3,at=Jt(new Y(En(1,40+V,.03,3),nt[V%3]),!1,!1);at.scale.set(60+t()*30,18+t()*16,40),at.position.set(Math.cos($)*140,-6,Math.sin($)*140),i.add(at)}let W={group:i,drops:I,ripples:S,bunts:N,water:f,F:c};return W.update=(V,$=1)=>{let at=new Ne;for(let _t=0;_t<96;_t++){let j=_t%8,F=Math.floor(_t/8),K=j/8*we,pt=(V*.9+F/12)%1,Q=.6+pt*.75,ot=1.55+.25*pt-1.35*pt*pt;at.position.set(Math.cos(K)*Q,ot,Math.sin(K)*Q),at.scale.setScalar(.7+.5*(1-pt)),at.updateMatrix(),I.setMatrixAt(_t,at.matrix)}I.instanceMatrix.needsUpdate=!0,S.forEach((_t,j)=>{let F=(V*.4+j/3)%1;_t.scale.setScalar(.6+F*.6),_t.material.opacity=.35*(1-F)}),N.forEach(_t=>Wf(_t,V,$))},W}var Ae={pathZ:i=>1.6*Math.sin(i/11),rock:[12,0,-2.6],rockTop:1.42,ballTree:[46,0,-16]};function Qf(){let i=new Mt;i.name="meadow";let t=_e(21),e=br("#79c957");e.repeat.set(36,36);let n=Jt(new Y(new cn(150,64),new me({map:e,roughness:.95})),!1,!0);n.rotation.x=-Math.PI/2,n.position.x=10,i.add(n);let s=Df();s.repeat.set(30,1);let r=[];for(let w=-40;w<=60;w+=2)r.push(new L(w,0,Ae.pathZ(w)));let o=new Pi(r),a=200,c=1.2,l=[],h=[],u=[];for(let w=0;w<=a;w++){let v=w/a,y=o.getPoint(v),A=o.getTangent(v),z=-A.z,U=A.x,N=c*(1+.15*Math.sin(v*37));l.push(y.x+z*N,.012,y.z+U*N,y.x-z*N,.012,y.z-U*N),h.push(v*30,0,v*30,1),w<a&&u.push(w*2,w*2+1,w*2+2,w*2+1,w*2+3,w*2+2)}let f=new ze;f.setAttribute("position",new ae(l,3)),f.setAttribute("uv",new ae(h,2)),f.setIndex(u),f.computeVertexNormals();let d=Jt(new Y(f,new me({map:s,roughness:1})),!1,!0);i.add(d);let g=Tr({r:1.25,seed:5,sy:.95,color:10985405});g.position.set(...Ae.rock),i.add(g);let x=Jt(new Y(En(.75,15,.15),new me({color:7323471,roughness:.95})));x.scale.set(1.15,.28,1),x.position.set(Ae.rock[0]-.1,1.24,Ae.rock[2]+.05),i.add(x);for(let w=0;w<5;w++){let v=new Y(new ee(.05,8,6),Qt([16765503,16777215,16748477][w%3]));v.position.set(Ae.rock[0]-.6+w*.28,1.33+w%2*.03,Ae.rock[2]+.35-w%3*.3),i.add(v)}let m=Tr({r:.55,seed:9,color:12893652});m.position.set(Ae.rock[0]+1.3,0,Ae.rock[2]-.7),i.add(m);for(let w=0;w<10;w++){let v=Tr({r:.15+t()*.25,seed:30+w,color:13157078}),y=-20+t()*60;v.position.set(y,0,Ae.pathZ(y)+(t()<.5?-1:1)*(1.7+t()*2)),i.add(v)}i.add(Th([-14,0,2.6],[-2,0,3],6)),i.add(Th([20,0,3.6],[32,0,3.2],6));let p=[],b=[Ae.rock[0],Ae.rock[2]],M=[Ae.ballTree[0],Ae.ballTree[2]],_=(w,v)=>{let y=M[0]-b[0],A=M[1]-b[1],z=Math.max(0,Math.min(1,((w-b[0])*y+(v-b[1])*A)/(y*y+A*A)));return Math.hypot(w-(b[0]+z*y),v-(b[1]+z*A))>4||z>.97};for(let w=0;w<26;w++){let v=-30+w*3.6+t()*2,y=w%2?1:-1,A=Ae.pathZ(v)+y*(5+t()*9),z=Math.abs(y)*0+1,U=fi({h:3+t()*1.6,r:1.1+t()*.5,seed:400+w,kind:t()<.25?"lolly":"round",lod:2+z*0});_(v,A)&&(U.position.set(v,0,A),i.add(U),p.push(U))}for(let w=0;w<34;w++){let v=20+w*2.2+t()*1.5,y=-18-t()*10,A=fi({h:4+t()*2,r:1.4+t()*.6,seed:500+w,kind:t()<.3?"pine":"round",colors:[4169546,5221959,3508805,6142794,3112768],lod:2,cast:!1});_(v,y)&&(A.position.set(v,0,y),i.add(A))}let I=fi({h:5,r:1.8,seed:777,kind:"round",colors:[5221959,6142794,4169546]});I.position.set(...Ae.ballTree),i.add(I);for(let w=0;w<18;w++){let v=-25+t()*70,y=Rs({r:.4+t()*.4,seed:600+w,flowers:[16765503,16748477,null,16777215][w%4]});y.position.set(v,0,Ae.pathZ(v)+(t()<.5?-1:1)*(2+t()*4)),_(y.position.x,y.position.z)&&i.add(y)}i.add(Sr({count:2600,seed:7,h:.28,area:w=>{let v=-30+w()*80,y=-25+w()*40;return Math.abs(y-Ae.pathZ(v))<1.5?null:[v,y]}})),i.add(Ar({count:900,seed:8,area:w=>{let v=-30+w()*80,y=-25+w()*40;return Math.abs(y-Ae.pathZ(v))<1.6?null:[v,y]}}));let S=[9424762,10475168,11131080].map(w=>new me({color:w,roughness:1}));for(let w=0;w<9;w++){let v=w/9*we,y=Jt(new Y(En(1,70+w,.03,3),S[w%3]),!1,!1);y.scale.set(55+t()*30,16+t()*14,40),y.position.set(10+Math.cos(v)*130,-6,Math.sin(v)*130),i.add(y)}let R={group:i,ballTree:I};return R.update=()=>{},R}var wt={tree:[0,0,-2.6],ball:[2.15,3.75,-1.9],climbBranchBase:[-.32,1.95,-2.25],bush:[3.55,0,-2.1],pivot:[2.7,0,.2],logLow:[1.95,.1,-.95],logHigh:[3.45,.95,1.35],stump:[4,0,.95],tuft:[-1.75,0,2.95],leo:[-.3,0,1.25],maya:[1.05,0,1.7],bib:[.35,0,1.95]};function Cs(i,t,e,n){let s=new Pi(i.map(h=>new L(...h))),r=new gr(s,20,1,10,!1),o=r.attributes.position,a=r.attributes.normal,c=21,l=11;for(let h=0;h<c;h++){let u=h/(c-1),f=s.getPoint(u),d=t+(e-t)*u;for(let g=0;g<l;g++){let x=h*l+g;o.setXYZ(x,f.x+a.getX(x)*d,f.y+a.getY(x)*d,f.z+a.getZ(x)*d)}}return r.computeVertexNormals(),Jt(new Y(r,n))}function td(){let i=new Mt;i.name="clearing";let t=_e(31),e=br("#86d064");e.repeat.set(30,30);let n=Jt(new Y(new cn(80,64),new me({map:e,roughness:.95})),!1,!0);n.rotation.x=-Math.PI/2,i.add(n);let s=new Mt;s.position.set(...wt.tree),i.add(s);let r=Qt(9396030,{roughness:.9}),o=[[.75,0],[.55,.15],[.42,.5],[.36,1.2],[.33,2.4],[.3,3.4],[.2,4.6],[0,4.8]].map(([j,F])=>new lt(j,F));s.add(Jt(new Y(new an(o,24),r)));for(let j=0;j<6;j++){let F=j/6*we+.3,K=Jt(new Y(new ee(.28,14,10),r));K.scale.set(2.2,.6,.9),K.position.set(Math.cos(F)*.55,.06,Math.sin(F)*.55),K.rotation.y=-F,s.add(K)}let a=j=>[j[0]-wt.tree[0],j[1],j[2]-wt.tree[2]];s.add(Cs([[0,2.9,0],[.9,3.4,.3],[1.7,3.6,.55],[2.5,3.9,.8]],.16,.05,r)),s.add(Cs([[0,3.3,0],[-1,4.1,.2],[-1.9,4.6,.3]],.15,.05,r)),s.add(Cs([[0,3.8,0],[.3,4.6,-.9],[.4,5.2,-1.6]],.14,.05,r)),s.add(Cs([[0,4.2,0],[.8,5,.5],[1.2,5.5,.9]],.12,.04,r));let c=Cs([a([1.6,3.55,-2.05]),a([2,3.75,-1.6]),a([2.25,4,-1.35])],.05,.025,r);s.add(c);let l=new Mt;l.position.set(...a(wt.climbBranchBase)),s.add(l),l.add(Cs([[0,0,0],[-.6,.2,.4],[-1.2,.5,.75]],.12,.05,r));let h=Jt(new Y(En(.42,77,.1),wr(6142794)));h.position.set(-1.35,.7,.85),l.add(h);let u=[6142794,5221959,8178767,6865498,4169546],f=new Mt;s.add(f);let d=[[0,5.6,0,1.9],[-1.6,4.9,.3,1.3],[1.3,5.3,-.4,1.4],[.4,6.5,-.2,1.4],[-.6,5.2,-1.4,1.4],[.9,4.9,1,1.1],[-1.2,6,1,1],[1.3,5,1.3,.8],[-2.1,4.5,-.4,.7]];d.forEach(([j,F,K,pt],Q)=>{let ot=Jt(new Y(En(pt,900+Q,.09),wr(u[Q%u.length])));ot.position.set(j,F,K),f.add(ot)});for(let j=0;j<10;j++){let F=new Y(new ee(.07,10,8),Qt(16756795,{roughness:.4})),[K,pt,Q,ot]=d[j%d.length],yt=new L(t()*2-1,t()*.5-.7,t()*2-1).normalize();F.position.set(K+yt.x*ot,pt+yt.y*ot,Q+yt.z*ot),f.add(F)}let g=Rs({r:.9,seed:66,color:5219912,flowers:16748477});g.position.set(...wt.bush),i.add(g);let x=Tr({r:.42,seed:3,sy:.85,color:12170182});x.position.set(...wt.pivot),i.add(x);let m=new Mt;m.position.set(wt.pivot[0],.62,wt.pivot[2]),i.add(m);let p=new L(...wt.logLow),b=new L(...wt.logHigh),_=b.clone().sub(p).length()+.4,I=Math.atan2(-(b.z-p.z),b.x-p.x);m.rotation.y=I;let S=new Mt;m.add(S);let R=Qt(10514506,{roughness:.85}),w=Jt(new Y(new Je(.1,.12,_,14),R));w.rotation.z=Math.PI/2,w.position.x=-0,S.add(w);for(let j of[-1,1]){let F=new Y(new cn(.11,14),Qt(15255962));F.position.x=j*_/2,F.rotation.y=j*Math.PI/2,S.add(F)}let v=Cs([[.3,0,0],[.5,.25,.1],[.65,.42,.05]],.035,.012,R);S.add(v);let y=0,A=Math.asin(jt((b.y-p.y)/(_-.4))),z=Jt(new Y(new Je(.28,.34,.5,18),Qt(10119749,{roughness:.9})));z.position.set(wt.stump[0],.25,wt.stump[2]),i.add(z);let U=new Y(new cn(.28,18),Qt(15255962));U.rotation.x=-Math.PI/2,U.position.set(wt.stump[0],.505,wt.stump[2]),i.add(U);let N=qf({r:1.25,h:1,count:260});N.position.set(...wt.tuft),i.add(N);for(let j=0;j<40;j++){let F=j/40*we+t()*.1,K=11+t()*9,pt=fi({h:4.5+t()*2.5,r:1.5+t()*.7,seed:1e3+j,kind:t()<.3?"pine":"round",colors:[4169546,5221959,3508805,6142794,3112768],lod:2,cast:!1});pt.position.set(Math.cos(F)*K,0,Math.sin(F)*K-2),i.add(pt)}for(let j=0;j<26;j++){let F=j/26*we+t()*.2,K=26+t()*10,pt=fi({h:7+t()*3,r:2.4,seed:1100+j,kind:"round",colors:[3508805,3112768,4169546],lod:1,cast:!1});pt.position.set(Math.cos(F)*K,0,Math.sin(F)*K),i.add(pt)}for(let j=0;j<14;j++){let F=t()*we,K=7.5+t()*3.5,pt=Rs({r:.5+t()*.35,seed:1200+j,color:[5219912,6142794,4169546][j%3],flowers:[16765503,null,16777215][j%3]});pt.position.set(Math.cos(F)*K,0,Math.sin(F)*K-2),!(pt.position.z>2.5&&Math.abs(pt.position.x)<5)&&i.add(pt)}for(let j=0;j<9;j++){let F=t()*we,K=.9+t()*.6,pt=Xf(.7+t()*.6,j);pt.position.set(wt.tree[0]+Math.cos(F)*K,0,wt.tree[2]+Math.sin(F)*K),i.add(pt)}i.add(Sr({count:1500,seed:9,h:.24,area:j=>{let F=j()*we,K=1+Math.sqrt(j())*14,pt=Math.cos(F)*K,Q=Math.sin(F)*K-1;return Math.hypot(pt-wt.tuft[0],Q-wt.tuft[2])<1.4?null:[pt,Q]}})),i.add(Ar({count:600,seed:10,area:j=>{let F=j()*we,K=1.5+Math.sqrt(j())*12;return[Math.cos(F)*K,Math.sin(F)*K-1]}}));let X=(()=>{let j=document.createElement("canvas");j.width=64,j.height=256;let F=j.getContext("2d"),K=F.createLinearGradient(0,0,0,256);K.addColorStop(0,"rgba(255,250,220,0.0)"),K.addColorStop(.25,"rgba(255,250,220,0.55)"),K.addColorStop(1,"rgba(255,250,220,0)"),F.fillStyle=K,F.fillRect(0,0,64,256);let pt=F.createLinearGradient(0,0,64,0);return pt.addColorStop(0,"rgba(0,0,0,1)"),pt.addColorStop(.5,"rgba(0,0,0,0)"),pt.addColorStop(1,"rgba(0,0,0,1)"),F.globalCompositeOperation="destination-out",F.fillStyle=pt,F.fillRect(0,0,64,256),new Rn(j)})(),G=[];for(let j=0;j<5;j++){let F=new Y(new mn(1.4+t(),16),new Ke({map:X,transparent:!0,depthWrite:!1,blending:bs,opacity:.35,side:$e,fog:!1}));F.position.set(-4+j*2.2,6,-3+t()*3),F.rotation.set(0,t()*.6,.45),i.add(F),G.push({m:F,ph:t()*6})}let nt=140,W=new ze,V=new Float32Array(nt*3);W.setAttribute("position",new Ze(V,3));let $=new da(W,new Jr({map:Da(),color:16774064,size:.09,transparent:!0,depthWrite:!1,blending:bs,opacity:.9})),at=Array.from({length:nt},()=>[t()*12-6,t()*5,t()*9-5,t()*6]);i.add($);let _t={group:i,tree:s,low:l,lever:m,tilt:S,log:w,len:_,restTilt:A,bush:g,tuft:N,rays:G,pollen:$,canopy:f};return _t.state={lever:0,creak:0,bushShake:0,tuftWobble:0,tuftPart:0,canopyShake:0},_t.update=j=>{let F=_t.state;S.rotation.z=A-F.lever*2*A,l.rotation.z=-F.creak*.12,l.rotation.x=Math.sin(j*40)*.02*F.creak,g.rotation.z=Math.sin(j*30)*.06*F.bushShake,g.scale.set(1+.05*F.bushShake*Math.sin(j*25),1-.04*F.bushShake,1),f.rotation.z=Math.sin(j*22)*.01*F.canopyShake,Yf(N,j,F.tuftWobble,F.tuftPart),G.forEach(({m:K,ph:pt})=>{K.material.opacity=.18+.1*Math.sin(j*.6+pt)});for(let K=0;K<nt;K++){let[pt,Q,ot,yt]=at[K];V[K*3]=pt+Math.sin(j*.3+yt)*.6,V[K*3+1]=.3+(Q+j*.15+yt)%5,V[K*3+2]=ot+Math.cos(j*.25+yt)*.6}W.attributes.position.needsUpdate=!0},_t.leverEnd=j=>{let F=new L(j*_t.len*.5*(j<0,1),.13,0);return S.localToWorld(F)},_t}function ed(i){let t=new Mt;i.add(t);let e=(_,I,S=ji)=>{let R=[];for(let w=0;w<I;w++){let v=new ua(new Zr({map:_,transparent:!0,depthWrite:!1,blending:S}));v.visible=!1,t.add(v),R.push(v)}return{arr:R,i:0}},n=e(Da(),160),s=e(Lf(),90,bs),r=new Di;r.moveTo(0,-.06),r.quadraticCurveTo(.05,0,0,.06),r.quadraticCurveTo(-.05,0,0,-.06);let o=new ba(r),a=new me({side:$e,roughness:.7}),c=new Qn(o,a,120);c.castShadow=!0;let l=[6142794,8178767,5221959,10411114],h=new At;for(let _=0;_<120;_++)c.setColorAt(_,h.set(l[_%4]));t.add(c);let u=new Di;for(let _=0;_<10;_++){let I=_/10*Math.PI*2+Math.PI/2,S=_%2?.02:.05;_?u.lineTo(Math.cos(I)*S,Math.sin(I)*S):u.moveTo(Math.cos(I)*S,Math.sin(I)*S)}let f=new mr(u,{depth:.015,bevelEnabled:!0,bevelSize:.006,bevelThickness:.006,bevelSegments:1});f.center();let d=[];for(let _=0;_<5;_++){let I=new Y(f,new me({color:16765503,emissive:16756736,emissiveIntensity:.5,roughness:.3}));I.visible=!1,t.add(I),d.push(I)}let g=new ee(.03,12,10),x=g.attributes.position;for(let _=0;_<x.count;_++){let I=x.getY(_);if(I>0){let S=1-I/.03*.75;x.setX(_,x.getX(_)*S),x.setZ(_,x.getZ(_)*S),x.setY(_,I*2)}}g.computeVertexNormals();let m=new Y(g,new Fe({color:10476799,roughness:.05,clearcoat:1,transparent:!0,opacity:.85}));m.visible=!1,t.add(m);let p=0,b=new Ne;return{begin(){for(let _ of[n,s])_.arr.forEach(I=>I.visible=!1),_.i=0;p=0,d.forEach(_=>_.visible=!1),m.visible=!1},end(){c.count=p,c.instanceMatrix.needsUpdate=!0},puff(_,I,S,{n:R=10,size:w=.35,spread:v=.6,life:y=.9,color:A=15985368,up:z=.4,seed:U=1,opacity:N=.75}={}){let X=S-I;if(X<0||X>y)return;let G=_e(U),nt=X/y;for(let W=0;W<R&&n.i<n.arr.length;W++){let V=n.arr[n.i++],$=G()*Math.PI*2,at=(.5+G()*.5)*v,_t=1-Math.pow(1-nt,3);V.position.set(_[0]+Math.cos($)*at*_t,_[1]+.05+z*_t*(.5+G()),_[2]+Math.sin($)*at*_t);let j=w*(.6+G()*.6)*(.5+nt);V.scale.set(j,j,j),V.material.color.set(A),V.material.opacity=N*(1-nt)*jt(X/.05),V.visible=!0}},sparkle(_,I,S,{n:R=8,radius:w=.35,life:v=1,size:y=.16,color:A=16773800,seed:z=2,rise:U=.2}={}){let N=S-I;if(N<0||N>v)return;let X=_e(z),G=N/v;for(let nt=0;nt<R&&s.i<s.arr.length;nt++){let W=s.arr[s.i++],V=X()*Math.PI*2,$=X()*2-1,at=w*(.4+.6*X())*(.3+.7*Math.sqrt(G));W.position.set(_[0]+Math.cos(V)*at,_[1]+$*at*.7+U*G,_[2]+Math.sin(V)*at);let _t=.6+.4*Math.sin(N*20+nt),j=y*_t*Math.sin(Math.min(1,G*1.2)*Math.PI);W.scale.set(j,j,j),W.material.color.set(A),W.material.opacity=1,W.visible=!0}},leaves(_,I,S,{n:R=12,spread:w=.8,life:v=2.5,fall:y=2.5,seed:A=3,burst:z=.6}={}){let U=S-I;if(U<0||U>v)return;let N=_e(A);for(let X=0;X<R&&p<120;X++){let G=N()*Math.PI*2,nt=w*(.3+N()*.7),W=N()*6,V=1-Math.exp(-U*3),$=_[1]+z*V*(.3+N())-Math.min(y,U*(.6+N()*.5));if($<.02)continue;b.position.set(_[0]+Math.cos(G)*nt*V+Math.sin(U*3+W)*.15,$,_[2]+Math.sin(G)*nt*V+Math.cos(U*2.5+W)*.15),b.rotation.set(U*4+W,U*3+W*2,Math.sin(U*5+W));let at=1.2+N()*.8;b.scale.set(at,at,at),b.updateMatrix(),c.setMatrixAt(p++,b.matrix)}},dizzy(_,I,S=.22,R=1){R<=0||d.forEach((w,v)=>{let y=I*5+v/d.length*Math.PI*2;w.position.set(_[0]+Math.cos(y)*S,_[1]+Math.sin(y*2)*.03,_[2]+Math.sin(y)*S),w.rotation.set(0,-y,.3),w.scale.setScalar(R),w.visible=!0})},sweat(_,I,S,R=1.2){let w=S-I;if(w<0||w>R)return;m.visible=!0;let v=w/R;m.position.set(_[0],_[1]-v*.06,_[2]),m.scale.setScalar(Math.min(1,w*6)*(1-Math.max(0,v-.8)*5))}}}var et=(i,t,e=1)=>Na(i.face,t,e);function mt(i,t){return Math.atan2(t[0]-i[0],t[2]-i[2])}function nd(i,t){let e=t-i;for(;e>Math.PI;)e-=we;for(;e<-Math.PI;)e+=we;return e}function It(i,t,e=0,n=1){i.squash=1+Math.sin(t*2.1+e)*.012*n,i.side+=ei(t*.5+e*10)*.025*n,i.headTilt+=ei(t*.4+e*20)*.04*n,i.headYaw+=ei(t*.3+e*30)*.05*n,i.aL.o+=Math.sin(t*2.1+e)*.02,i.aR.o+=Math.sin(t*2.1+e)*.02;let s=gh(t,e);i.face.eo*=1-s}function oo(i,t,e=1){let n=Math.sin(t*we),s=Math.cos(t*we);i.lL.f+=n*.45*e,i.lR.f-=n*.45*e,i.lL.k+=Math.max(0,-s)*.6*e,i.lR.k+=Math.max(0,s)*.6*e,i.aL.f-=n*.35*e,i.aR.f+=n*.35*e,i.aL.b+=.25*e,i.aR.b+=.25*e,i.bob+=Math.abs(s)*.03*e-.015*e,i.twist+=n*.06*e,i.lean+=.04*e}function gn(i,t,e=1){let n=Math.sin(t*we),s=Math.cos(t*we);i.lL.f+=n*.85*e,i.lR.f-=n*.85*e,i.lL.k+=(Math.max(0,-s)*1.4+.25)*e,i.lR.k+=(Math.max(0,s)*1.4+.25)*e,i.aL.f-=n*.9*e,i.aR.f+=n*.9*e,i.aL.b+=1.3*e,i.aR.b+=1.3*e,i.aL.o+=.15*e,i.aR.o+=.15*e,i.bob+=(Math.abs(n)*.07-.02)*e,i.twist+=n*.12*e,i.lean+=.22*e,i.headUp+=.12*e,i.hairBounce=Math.sin(t*we*2)*e}function dt(i,t,e=1,n=!1){let s=(i.y||0)+(i.ground||0)+1.15*(i.scale||1),r=t[0]-i.x,o=t[2]-i.z,a=t[1]-s,c=nd(i.ry,Math.atan2(r,o)),l=Math.atan2(a,Math.hypot(r,o)),h=jt(c,-1.3,1.3),u=jt(l,-.7,.8);n||(i.headYaw=B(i.headYaw,h*.75,e),i.headUp=B(i.headUp,u*.7,e));let f=n?c:c-h*.75,d=n?l:l-u*.7;i.face.lx=B(i.face.lx,jt(f*2.2,-1,1),e),i.face.ly=B(i.face.ly,jt(d*2.2,-1,1),e)}function Is(i,t,e,n=1){let s=t==="L"?1:-1,r=i.x+Math.cos(i.ry)*.18*s,o=i.z-Math.sin(i.ry)*.18*s,a=(i.y||0)+.8,c=e[0]-r,l=e[1]-a,h=e[2]-o,u=Math.hypot(c,l,h)||1;c/=u,l/=u,h/=u;let f=Math.cos(-i.ry),d=Math.sin(-i.ry),g=c*f+h*d,x=-c*d+h*f,m=Math.asin(jt(x,-1,1)),p=Math.atan2(g,-l)*s,b=i["a"+t];b.f=B(b.f,m,n),b.o=B(b.o,p,n),b.b=B(b.b,.05,n),i["h"+t].point=B(i["h"+t].point,1,n)}function Ge(i,t=1,e=0){for(let n of["aL","aR"])i[n].f=B(i[n].f,1.05,t),i[n].o=B(i[n].o,.28+e,t),i[n].b=B(i[n].b,.55,t),i[n].t=B(i[n].t,-.3,t)}function hn(i,t=1,e=.35){for(let n of["aL","aR"])i[n].f=B(i[n].f,2.7,t),i[n].o=B(i[n].o,e,t),i[n].b=B(i[n].b,.2,t)}function cs(i,t=1){for(let e of["aL","aR"])i[e].f=B(i[e].f,.35,t),i[e].o=B(i[e].o,.65,t),i[e].b=B(i[e].b,1.5,t),i[e].t=B(i[e].t,.8,t);i.headTilt+=.15*t,i.bob+=.02*t}function Fi(i,t="R",e=1){let n=i["a"+t];n.f=B(n.f,.95,e),n.o=B(n.o,.15,e),n.b=B(n.b,2.35,e),n.t=B(n.t,.4,e)}function Sh(i,t="R",e=1){let n=i["a"+t];n.f=B(n.f,1.5,e),n.o=B(n.o,.55,e),n.b=B(n.b,2.2,e),n.t=B(n.t,-.6,e)}function wn(i,t,e=1,n=!1){let s=Math.sin(t*(n?22:18));i.bob+=Math.abs(s)*.015*e,i.headUp+=(.18+.06*s)*e*(n?1.4:1),i.squash+=.02*s*e,i.lean-=.06*e*(n?1.5:1),i.aL.o+=.05*s*e,i.aR.o-=.05*s*e}function id(i,t,e=1){for(let n of["aL","aR"])i[n].f=B(i[n].f,.9+Math.sin(t*9)*.25,e),i[n].o=B(i[n].o,.35,e),i[n].b=B(i[n].b,.35,e),i[n].t=B(i[n].t,-1.2,e)}function Ce(i,t,e=3,n=1){i.sq*=1+Math.sin(t*3.1+e)*.02*n,i.tufts+=Math.sin(t*2.3+e)*.08*n,i.rz+=ei(t*.6+e)*.05*n,i.face.eo*=1-gh(t,e,2.6)}function Xn(i,t,e=.12){let n=t%1,s=Math.sin(n*Math.PI);i.y+=s*e,i.sq*=1+(s-.35)*.18,i.fL=s,i.fR=s,i.wL+=s*.4,i.wR+=s*.4}function xn(i,t,e=1,n=9){i.flap=e,i.flapT=t*n,i.wL+=.6*e,i.wR+=.6*e}function fe(i,t,e=1){let n=t[0]-i.x,s=t[2]-i.z,r=t[1]-(i.y+.18),o=nd(i.ry,Math.atan2(n,s)),a=Math.atan2(r,Math.hypot(n,s));i.face.lx=B(i.face.lx,jt(o*1.8,-1.2,1.2),e),i.face.ly=B(i.face.ly,jt(a*1.8,-1.2,1.2),e)}function Nt(i,t,e=1){Na(i.face,t,e)}var Rr=.13,gt={leo:[-.7,0,1.6],maya:[2.9,0,.8],bib:[1.1,0,-.25]};function Fn(i,t=.84,e=.34){return[i.x+Math.sin(i.ry)*e,(i.y||0)+t,i.z+Math.cos(i.ry)*e]}function ao(i,t,e,{first:n="leo"}={}){let s=n,r=null;for(let a of e)t>=a.t&&(t<a.t+a.dur?(r=a,s=null):(s=a.to,r=null));let o=["leo","maya"];for(let a of o){let c=i[a];for(let l of e){if(l.from!==a)continue;let h=t-l.t;if(h>-.45&&h<.35){let u=h<0?D(h,-.45,-.05):1-D(h,0,.35),f=h<0?0:D(h,0,.15,Pt.out);Ge(c,1);for(let d of["aL","aR"])c[d].f=B(1.05,.55,u*(1-f))+f*.55,c[d].b=B(.55,1.2,u*(1-f))*(1-f*.7);c.crouch+=.18*u,c.lean+=.1*f}}for(let l of e){if(l.to!==a)continue;let h=t-(l.t+l.dur);if(h>-.5&&h<.4){let u=h<0?D(h,-.5,-.15):1-D(h,.1,.4);Ge(c,u,.18*(h<0?1:0)),h>0&&h<.25&&(c.lean-=.08*Math.sin(h/.25*Math.PI),c.crouch+=.1*Math.sin(h/.25*Math.PI))}}s===a&&Ge(c,1)}if(r){let a=(t-r.t)/r.dur,c=Fn(i[r.from]),l=Fn(i[r.to]),h=ln(c,l,r.h??.9,a);return i.ball.x=h[0],i.ball.y=h[1],i.ball.z=h[2],i.ball.rx=a*9,i.ball.rz=a*3,{flying:!0,pos:h,flight:r}}else s&&i.hold(s,"hands");return{flying:!1,holder:s}}var sd=[{t:.9,from:"leo",to:"maya",dur:.85,h:.9},{t:2.5,from:"maya",to:"leo",dur:.85,h:.9},{t:4.1,from:"leo",to:"maya",dur:.85,h:.9},{t:5.7,from:"maya",to:"leo",dur:.85,h:1},{t:7.3,from:"leo",to:"maya",dur:.85,h:1},{t:8.9,from:"maya",to:"leo",dur:.85,h:1}],Ah=22.55;function Ls(i){let t=Math.max(0,i-Ah),e=gt.leo[0]+.3,n=gt.leo[2],s=22*(1-Math.exp(-.85*t)),r=Math.max(0,t-8.5),o=1.7+s-1.5*r-.02*r*r,a=n-.5*t-3.4*Math.pow(r,1.25);return[e+1.2*(1-Math.exp(-t))+.25*t,o,a]}function Wa(i,t=1,e=.5,n=9.8){let s=t,r=i,o=Math.sqrt(2*n*s),a=Math.sqrt(2*s/n);if(r<a)return s-.5*n*r*r;r-=a,o*=e;for(let c=0;c<6;c++){let l=2*o/n;if(r<l)return o*r-.5*n*r*r;r-=l,o*=e}return 0}var _n={focus:[1,0,0],size:9,sunDir:[.45,.85,.65]};function Xa(i,t){let e=i.leo,n=i.maya,s=i.bib;Object.assign(e,{x:gt.leo[0],z:gt.leo[2],ry:mt(gt.leo,gt.maya)}),Object.assign(n,{x:gt.maya[0],z:gt.maya[2],ry:mt(gt.maya,gt.leo)}),Object.assign(s,{x:gt.bib[0],z:gt.bib[2],ry:0}),It(e,t,1),It(n,t,2),Ce(s,t,3),et(e,"happy"),et(n,"happy");let r=ao(i,t,sd),o=[i.ball.x,i.ball.y,i.ball.z];return dt(e,o,.8),dt(n,o,.8),r.flying?fe(s,o,1):fe(s,r.holder==="leo"?Fn(e):Fn(n),1),s.ry=s.face.lx*.35,s.tufts=.6,Nt(s,"amazed",.5),s.face.op=0,r}var rd=[{id:"A1-aerien",set:"village",dur:5,light:{..._n,size:24},run(i,t){let e=i.T;Xa(i,e);let n=D(t,0,5,Pt.inOut);i.cam(Et(t,[[0,[24,22,30]],[5,[5.5,4.6,12.5]]]),Et(t,[[0,[-1,1,-2]],[5,[1,.9,.6]]]),B(40,33,n)),i.sky.flyBirds(e,0,5.2,[-28,13,6],[20,17,-22]),i.fade(1-D(t,0,.8))}},{id:"A2-passes",set:"village",dur:3,light:_n,run(i,t){Xa(i,i.T),i.cam(Et(t,[[0,[1.1,1.25,7.4]],[3,[1.1,1.2,6.7]]]),[1,.75,.5],34)}},{id:"A3-bibou-fascine",set:"village",dur:2.5,light:_n,run(i,t){let e=i.T;Xa(i,e);let n=i.bib,s=D(t,.8,1.4);n.rz+=Math.sin(t*22)*.12*s,n.sq*=1-.1*s,n.tufts=.6+.4*s,n.fL=Math.max(0,Math.sin(t*22))*.4*s,n.fR=Math.max(0,-Math.sin(t*22))*.4*s,Nt(n,"determined",s*.7),n.face.es=1.05,i.cam(Et(t,[[0,[1.25,.34,.95]],[2.5,[1.18,.3,.72]]]),[1.1,.24,-.25],30)}},{id:"A4-leo-passe-a-bibou",set:"village",dur:2.5,light:_n,run(i,t){let e=i.T,n=i.leo,s=i.maya,r=i.bib;Xa(i,Math.min(e,9.99));let o=D(t,.2,.8),a=mt(gt.leo,gt.bib);n.ry=B(mt(gt.leo,gt.maya),a,o),dt(n,[gt.bib[0],.3,gt.bib[2]],o),et(n,"grin",o),n.face.bL+=.3*ce(t,.6,1.4),n.headTilt+=.15*ce(t,.6,1.6);let c=1.95;if(t<c)Ge(n,1),n.crouch+=.25*D(t,1.4,1.9),n.aL.f-=.5*D(t,1.4,1.9),n.aR.f-=.5*D(t,1.4,1.9),i.hold("leo","hands");else{let l=D(t,c,c+.25,Pt.out);Ge(n,1-l*.5),n.aL.f+=.5*l,n.aR.f+=.5*l,n.crouch+=.25*(1-l);let h=(e-(10.5+c))/.95,u=ln(Fn({...n,ry:a}),[gt.bib[0]+.25,.9,gt.bib[2]-.6],.55,h/1.25);i.ball.x=u[0],i.ball.y=u[1],i.ball.z=u[2],i.ball.rx=h*6}dt(s,[n.x,1,n.z],.6),Nt(r,"amazed",.6),i.cam(Et(t,[[0,[1.05,.78,.15]],[2.5,[.85,.8,.35]]]),[-.7,1,1.6],30)}},{id:"A5-bibou-rate",set:"village",dur:3.5,light:_n,sfx:[[.2,"bib_effort"],[.25,"jump_small"],[.45,"whoosh_small"],[.95,"flop_soft"],[.98,"boing"],[.75,"ball_bounce",{v:.8}],[1.25,"ball_bounce",{v:.5}],[1.6,"ball_bounce",{v:.3}],[1.6,"bib_huh"]],run(i,t){let e=i.T,n=i.leo,s=i.maya,r=i.bib;Object.assign(n,{x:gt.leo[0],z:gt.leo[2],ry:mt(gt.leo,gt.bib)}),Object.assign(s,{x:gt.maya[0],z:gt.maya[2],ry:mt(gt.maya,gt.bib)}),Object.assign(r,{x:gt.bib[0],z:gt.bib[2],ry:-.35}),It(n,e,1),It(s,e,2),et(n,"happy"),et(s,"happy");let o=12.45,a=[gt.bib[0]+.9,Rr,gt.bib[2]-1.5],c=13.75;if(e<c){let u=(e-o)/(c-o),f=ln(Fn({...n}),a,.75,u);i.ball.x=f[0],i.ball.y=f[1],i.ball.z=f[2],i.ball.rx=u*8}else{let u=e-c,f=1-Math.exp(-u*1.2);i.ball.x=a[0]+1.2*f,i.ball.z=a[2]-2.6*f,i.ball.y=Rr+Wa(u+.32,.5,.55),i.ball.rx=-u*9}dt(n,[i.ball.x,i.ball.y,i.ball.z],.7),dt(s,[i.ball.x,i.ball.y,i.ball.z],.7);let l=D(t,0,.18)*(1-D(t,.18,.26));r.sq=1-.25*l;let h=t-.22;if(h>0&&h<.72){let u=h/.72;r.y=.62*4*u*(1-u),r.sq=1+.25*Math.sin(u*Math.PI)*(u<.5?1:.3),xn(r,t,1,12),r.rx=-D(u,.45,1,Pt.in)*1.75,r.z=gt.bib[2]-.15*u}else if(h>=.72){let u=h-.72;r.z=gt.bib[2]-.15,r.rx=-1.75+Ca(t,.95,1.6,3.2)*.35,r.sq=1-.3*de(t,.94,.25),r.fL=.6+.4*Math.sin(t*9),r.fR=.6+.4*Math.sin(t*9+2),r.wL=.5+.3*Math.sin(t*7),r.wR=.5+.3*Math.sin(t*7+1)}t<.3?Nt(r,"determined"):t<.7?(Nt(r,"effort"),r.face.eo=0):t<1?Nt(r,"surprised"):(Nt(r,"surprised",.6),r.face.lx=Math.sin(t*3)*.6),r.tufts=t<.9?1:.2,i.cam(Et(t,[[0,[1.55,.7,1.3]],[1,[1.45,.85,1]],[3.5,[1.32,1,.7]]]),[1.02,Et(t,[[0,.45],[.6,.62],[1.1,.16]]),-.42],42,Et(t,[[.9,0],[1.6,.07,Pt.outBack]]))}},{id:"A6-bibou-se-releve",set:"village",dur:2,light:_n,sfx:[[.25,"blink"],[.52,"blink"],[.85,"pop"],[.88,"bib_hop"],[1.25,"bib_whistle"]],run(i,t){let e=i.T,n=i.bib;Object.assign(n,{x:gt.bib[0],z:gt.bib[2]-.15,ry:-.2}),i.vis.ball=!1,i.vis.leo=i.vis.maya=!1;let s=D(t,.85,1,Pt.outBack);n.rx=B(-1.75+Math.sin(t*4)*.08,0,s),n.y=.18*Math.sin(jt((t-.85)/.3)*Math.PI),n.sq=1+.2*de(t,.85,.25)-.15*de(t,1.1,.2),Ce(n,e,3,.5),t<.85?(Nt(n,"neutral"),n.face.eo=1.05*(1-ce(t,.2,.32)-ce(t,.47,.6)),n.fL=.5,n.fR=.5):(Nt(n,"proud",D(t,1,1.2)),n.face.eo=.5,n.face.lo=.3,n.face.lx=-.8,n.puff=.3*D(t,1,1.3),n.beak=.25*D(t,1.2,1.3),n.wR=.4+.6*ce(t,1.25,1.85),n.wfR=.6*ce(t,1.25,1.85),n.tufts=.3),i.cam(Et(t,[[0,[1.25,.62,.75]],[2,[1.2,.55,.62]]]),[1.1,.16,-.35],32,.04)}},{id:"A7-maya-rit",set:"village",dur:2,light:_n,sfx:[[1.7,"toss"]],run(i,t){let e=i.T,n=i.leo,s=i.maya;Object.assign(n,{x:gt.leo[0],z:gt.leo[2],ry:mt(gt.leo,gt.bib)}),Object.assign(s,{x:gt.maya[0],z:gt.maya[2],ry:mt(gt.maya,gt.bib)+.3}),It(n,e,1),It(s,e,2),et(s,"laugh"),wn(s,t,1),Ge(s,1),s.headUp-=.1,et(n,"grin"),wn(n,t+.3,.5);let r=1.7;if(s.ry=B(s.ry,mt(gt.maya,gt.leo),D(t,1.3,1.6)),t<r)i.hold("maya","hands");else{let o=(t-r)/.8,a=ln(Fn(s),Fn({...n,ry:mt(gt.leo,gt.maya)}),.8,o);i.ball.x=a[0],i.ball.y=a[1],i.ball.z=a[2],i.ball.rx=o*6}i.cam(Et(t,[[0,[1.25,1.08,.65]],[2,[1.4,1.08,.7]]]),[2.9,1,.85],32)}},{id:"A8-grand-lancer",set:"village",dur:3.5,light:_n,sfx:[[.4,"catch"],[1.05,"leo_windup"],[2.05,"throw_big"],[2.15,"whoosh_up"]],run(i,t){let e=i.T,n=i.leo,s=i.maya,r=i.bib;Object.assign(n,{x:gt.leo[0],z:gt.leo[2],ry:mt(gt.leo,gt.maya)}),Object.assign(s,{x:gt.maya[0],z:gt.maya[2],ry:mt(gt.maya,gt.leo)}),Object.assign(r,{x:gt.bib[0],z:gt.bib[2]-.15,ry:.3}),It(n,e,1),It(s,e,2),Ce(r,e,3);let o=Ah-20.5;if(t<.4){let l=(e-20.2)/.8,h=ln(Fn({...s,ry:mt(gt.maya,gt.leo)}),Fn(n),.8,l);i.ball.x=h[0],i.ball.y=h[1],i.ball.z=h[2],Ge(n,D(t,0,.3))}else if(t<o){let l=D(t,.8,1.7);Ge(n,1-l),hn(n,l,.25),n.aL.b=n.aR.b=B(.55,1.6,l),n.lean-=.25*l,n.crouch+=.3*l,n.lR.f-=.2*l,n.lL.f+=.25*l,i.hold("leo","hands")}else{let l=D(t,o,o+.3,Pt.out);hn(n,1,.25),n.aL.f=n.aR.f=B(2.7,1.4,l),n.aL.b=n.aR.b=B(1.6,.1,l),n.lean=B(-.25,.25,l),n.crouch+=.3*(1-l),n.bob+=.06*de(t,o,.4);let h=Ls(e);i.ball.x=h[0],i.ball.y=h[1],i.ball.z=h[2],i.ball.rx=e*5}et(n,t<o?"determined":"grin",1),t>.4&&t<1&&et(n,"grin");let a=D(t,o+.2,o+.7);Ge(s,(1-a)*D(t,1.2,1.6),.15),dt(s,[i.ball.x,i.ball.y,i.ball.z],.9),et(s,"happy",1-a),et(s,"surprised",a),dt(n,[i.ball.x,i.ball.y,i.ball.z],t>o?.8:.3),fe(r,[i.ball.x,i.ball.y,i.ball.z]),Nt(r,"amazed",a);let c=D(t,o,3.5,Pt.inOut);i.cam(Et(t,[[0,[1,1.25,6.4]],[3.5,[1,1,6.9]]]),[1.1,B(1.1,3.6,c),1],B(36,40,c))}},{id:"A9-ballon-monte",set:"village",dur:3,light:_n,sfx:[[.1,"wind_soft"]],run(i,t){let e=i.T,n=i.leo,s=i.maya,r=i.bib;Object.assign(n,{x:gt.leo[0],z:gt.leo[2],ry:mt(gt.leo,gt.maya)-.6}),Object.assign(s,{x:gt.maya[0],z:gt.maya[2],ry:mt(gt.maya,gt.leo)+.9}),Object.assign(r,{x:gt.bib[0],z:gt.bib[2]-.15,ry:0}),It(n,e,1),It(s,e,2),Ce(r,e,3);let o=Ls(e);i.ball.x=o[0],i.ball.y=o[1],i.ball.z=o[2],i.ball.rx=e*4,dt(n,o),dt(s,o),fe(r,o),et(n,"happy"),et(s,"surprised",.5),i.cam([1.25,.55,3.4],Et(t,[[0,[o[0],o[1]*.8,o[2]]],[3,[o[0],o[1],o[2]]]]),46,.03)}},{id:"A10-sourire-qui-fond",set:"village",dur:3.5,light:_n,sfx:[[2.2,"gulp_leo"]],run(i,t){let e=i.T,n=i.leo,s=Ls(e);Object.assign(n,{x:gt.leo[0],z:gt.leo[2],ry:mt(gt.leo,s)}),It(n,e,1,.6),i.vis.maya=!1,i.vis.bib=!1,i.ball.x=s[0],i.ball.y=s[1],i.ball.z=s[2],dt(n,s),n.headUp=.55;let r=D(t,1,2),o=D(t,2,2.8);et(n,"grin",1-r),et(n,"neutral",r*(1-o)),n.face.sm=B(1,0,r),et(n,"worried",o),n.face.ly=1,n.aL.o+=.1,n.aR.o+=.1;let a=[Math.sin(n.ry),Math.cos(n.ry)],c=n.x+a[0]*1.55,l=n.z+a[1]*1.55;i.cam(Et(t,[[0,[c,1.05,l]],[3.5,[n.x+a[0]*1.3,1.07,n.z+a[1]*1.3]]]),[n.x,1.28,n.z],34)}},{id:"A11-regards-oups",set:"village",dur:2,light:_n,sfx:[[.15,"look_tick"],[.45,"look_tick"],[1,"uh_oh_sting"]],run(i,t){let e=i.T,n=i.leo,s=i.maya,r=i.bib,o=Ls(e);Object.assign(n,{x:gt.leo[0]+.6,z:gt.leo[2]-.3,ry:mt(gt.leo,gt.maya)-.4}),Object.assign(s,{x:gt.maya[0]-.6,z:gt.maya[2]+.1,ry:mt(gt.maya,gt.leo)+.4}),Object.assign(r,{x:gt.bib[0],z:gt.bib[2]-.15}),It(n,e,1),It(s,e,2),Ce(r,e,3),i.ball.visible=!1;let a=D(t,.1,.3,Pt.out),c=D(t,.4,.6,Pt.out);dt(n,o,1-a),dt(n,[s.x,1.15,s.z],a),dt(s,o,1-c),dt(s,[n.x,1.15,n.z],c),et(n,"worried"),et(s,"surprised",.6);let l=D(t,.9,1.15);et(n,"oops",l),et(s,"oops",l),n.headTilt-=.1*l,s.headTilt+=.1*l,cs(n,l*.4),cs(s,l*.4),i.cam(Et(t,[[0,[1.2,1.1,4.8]],[2,[1.2,1.12,4.3]]]),[1.2,1,1.1],30)}},{id:"A12-le-vent",set:"village",dur:3,light:{..._n,size:14},sfx:[[0,"wind_gust"],[.4,"leaves_rustle"]],run(i,t){let e=i.T,n=i.leo,s=i.maya,r=i.bib,o=Ls(e);Object.assign(n,{x:gt.leo[0]+.6,z:gt.leo[2]-.3,ry:Math.PI}),Object.assign(s,{x:gt.maya[0]-.6,z:gt.maya[2]+.1,ry:Math.PI}),Object.assign(r,{x:gt.bib[0],z:gt.bib[2]-.15,ry:Math.PI}),It(n,e,1),It(s,e,2),Ce(r,e,3),dt(n,o),dt(s,o),fe(r,o),i.ball.x=o[0],i.ball.y=o[1],i.ball.z=o[2],i.ball.rx=e*3,i.wind=2.6,n.side+=Math.sin(e*3)*.03,s.side+=Math.sin(e*3+1)*.03,n.hairBounce=s.hairBounce=Math.sin(e*9)*.6;for(let a=0;a<4;a++)i.fx.leaves([-6+a*3,3+a*.4,3-a],-.2+a*.3,t,{n:10,spread:3,life:3.5,fall:1.2,seed:40+a,burst:1.2});i.cam(Et(t,[[0,[1.5,1.15,4.7]],[3,[1.35,1.2,4.3]]]),[o[0]*.8,o[1]*.5,o[2]],56)}},{id:"A13-bibou-poursuit",set:"village",dur:3,light:{..._n,focus:[1,0,-4]},sfx:[[0,"bib_determined"],[.1,"flap_fast",{dur:2.5}],[.2,"hops",{dur:2.4,rate:7}],[2.75,"bib_pant"]],run(i,t){let e=i.T,n=i.bib;i.vis.leo=i.vis.maya=!1,i.ball.visible=!1;let s=D(t,0,2.6,Pt.linear),r=[gt.bib[0],0,gt.bib[2]-.15],o=[1,0,-6.6];n.x=B(r[0],o[0],s),n.z=B(r[2],o[2],s),n.ry=Math.PI,t<2.6?(Xn(n,t*7,.07),xn(n,t,1,16),n.lean=.3,Nt(n,"effort"),n.face.eo=.6,n.tufts=-.3,n.wL+=.5,n.wR+=.5):(Nt(n,"worried"),n.sq=1+Math.sin(t*18)*.05,n.beak=.4+.3*Math.sin(t*18),n.tufts=-.6,n.face.ly=.8,n.wL=n.wR=.2),i.cam([n.x+2.1,.45,n.z+.6],[n.x-.1,.3,n.z-.45],34)}},{id:"A14-derriere-la-colline",set:"village",dur:2,light:{..._n,size:14,focus:[1,0,-5]},run(i,t){let e=i.T,n=i.leo,s=i.maya,r=i.bib;Object.assign(n,{x:-.2,z:-5.8,ry:Math.PI}),Object.assign(s,{x:2.1,z:-6,ry:Math.PI}),Object.assign(r,{x:1,z:-6.6,ry:Math.PI}),It(n,e,1),It(s,e,2),Ce(r,e,3);let o=Ls(e);i.ball.x=o[0],i.ball.y=o[1],i.ball.z=o[2],dt(n,o),dt(s,o),fe(r,o),i.cam([1,1.35,-1.2],Et(t,[[0,[.8,7.5,-60]],[2,[.9,7,-60]]]),30)}},{id:"A15-immobiles",set:"village",dur:3.5,light:{..._n,focus:[1,0,-6]},sfx:[[0,"wind_soft"],[1,"look_tick"],[1.35,"look_tick"],[1.7,"look_tick"],[2.4,"look_tick_double"]],run(i,t){let e=i.T,n=i.leo,s=i.maya,r=i.bib;Object.assign(n,{x:-.2,z:-5.8,ry:Math.PI}),Object.assign(s,{x:2.1,z:-6,ry:Math.PI}),Object.assign(r,{x:1,z:-6.6,ry:Math.PI}),It(n,e,1,.3),It(s,e,2,.3),Ce(r,e,3,.3),i.ball.visible=!1;let o=[.5,9,-60],a=D(t,.9,1.1,Pt.out),c=D(t,1.25,1.45,Pt.out),l=D(t,2.3,2.5,Pt.out);dt(n,o),dt(s,o),fe(r,o),dt(n,[s.x,1.1,s.z],a*(1-l)),dt(s,[n.x,1.1,n.z],c*(1-l)),fe(r,[n.x,1.1,n.z],D(t,1,1.15)*(1-D(t,1.5,1.65))),fe(r,[s.x,1.1,s.z],D(t,1.5,1.65)*(1-l)),dt(n,o,l),dt(s,o,l),fe(r,o,l),et(n,"worried"),et(s,"worried",.7),Nt(r,"worried"),r.tufts=-.5,i.wind=1.5,i.cam([.95,.92,-10.6],[.95,.72,-6.1],31)}},{id:"A16-leo-decide",set:"village",dur:2,light:{..._n,focus:[0,0,-6]},sfx:[[.35,"determined_sting"],[1.25,"zip_run"]],run(i,t){let e=i.T,n=i.leo,s=i.maya,r=i.bib;Object.assign(n,{x:-.2,z:-5.8,ry:Math.PI}),Object.assign(s,{x:2.1,z:-6,ry:Math.PI}),Object.assign(r,{x:1,z:-6.6,ry:Math.PI}),It(n,e,1),It(s,e,2),Ce(r,e,3),i.ball.visible=!1,et(n,"determined"),n.headUp+=-.15*de(t,.3,.3)+.08;let o=ce(t,.5,1.15);n.aR.f+=1.2*o,n.aR.b+=1.9*o,n.aR.o+=.1;let a=D(t,1.2,2,Pt.in);t>1.2&&(gn(n,(t-1.2)*2.2,1),n.z-=a*2,n.x-=a*4,n.ry=Math.PI+1.1*D(t,1.2,1.4)),dt(s,[n.x,1.1,n.z],.8),et(s,"surprised",D(t,1.3,1.5)),i.cam(Et(t,[[0,[-.15,1.12,-7.15]],[1.2,[-.15,1.13,-7]]]),[-.2,1.1,-5.8],32)}}];var On=Ae.pathZ,Y_=i=>Math.atan2(1,1.6/11*Math.cos(i/11)),Oi={focus:[6,0,0],size:10,sunDir:[.4,.85,.7]},od=Ae.rock,Xe=[od[0]-.05,Ae.rockTop,od[2]+.1],qe=Ae.ballTree;function Ps(i,t){i.x=t,i.z=On(t),i.ry=Y_(t)}var ad=[{id:"B1-course",set:"meadow",dur:4,light:Oi,sfx:[[0,"steps_run",{dur:4,rate:3.6,who:"kids"}],[0,"hops",{dur:4,rate:6.5}],[1.4,"flap_fast",{dur:.9}]],run(i,t){let e=i.T,n=i.leo,s=i.maya,r=i.bib;i.vis.ball=!1;let o=-14+t*3.1;Ps(n,o),Ps(s,o-1.7),Ps(r,o-3.1),s.z+=.35,r.z-=.25,gn(n,t*1.75),gn(s,t*1.75+.3),It(n,e,1,.3),It(s,e,2,.3),et(n,"determined"),et(s,"determined",.5),s.face.sm=.3,Xn(r,t*6.5,.1),r.lean=.25,Nt(r,"effort",.6),t>1.4&&t<2.3&&xn(r,t,1,15);let a=o-1.4;i.cam([a+.6,1,On(a)+5],[a,.7,On(a)],36),i.light.focus=[a,0,On(a)]}},{id:"B2-bibou-essaie-de-voler",set:"meadow",dur:5,light:{...Oi,focus:[2,0,0]},sfx:[[.15,"bib_land"],[.6,"flap_fast",{dur:1}],[.7,"bib_strain"],[1.62,"flop_soft"],[1.95,"bib_shake"],[2.3,"flap_fast",{dur:1.1}],[2.4,"bib_strain2"],[3.42,"flop_flat"],[3.6,"bib_grumble"],[4.3,"idea_pop"]],run(i,t){let e=i.T,n=i.bib;if(i.vis.leo=i.vis.maya=i.vis.ball=!1,Ps(n,2),Ce(n,e,3,.4),t<.15&&Xn(n,t*6,.1),n.sq*=1-.15*de(t,.15,.2),t>.6&&t<1.62&&(xn(n,t,1,17),n.y=.06*D(t,.75,1)*(1-D(t,1.5,1.62,Pt.in)),n.sq=1.08,Nt(n,"effort"),n.face.eo=.2,n.tufts=1),n.sq*=1-.25*de(t,1.62,.25),t>1.85&&t<2.3&&(n.ry+=Math.sin((t-1.85)*40)*.25*ce(t,1.85,2.3),Nt(n,"determined")),t>2.3&&t<3.42&&(xn(n,t,1.2,21),n.y=.11*D(t,2.45,2.8)*(1-D(t,3.3,3.42,Pt.in)),n.sq=1.12,n.puff=.5,Nt(n,"effort"),n.face.eo=0,n.tremble=.6,n.tufts=1.2),t>=3.42){let c=1-D(t,3.42,3.5)+D(t,3.5,4.4)*0;n.sq=B(.62,.9,D(t,3.6,4.2,Pt.outElastic)),n.wL=n.wR=1.4-D(t,3.6,4)*1,Nt(n,"skeptic"),n.face.eo=.55,n.face.lx=0,n.tufts=-.8;let l=D(t,4.25,4.45,Pt.outBack);Nt(n,"idea",l),n.face.es=1+.15*l,n.tufts=B(-.8,1,l),i.fx.sparkle([n.x,.45,n.z],e-t+4.3,e,{n:6,radius:.18,size:.08})}let a=n.ry+.55;i.cam([n.x+Math.sin(a)*1.05,.28,n.z+Math.cos(a)*1.05],[n.x,.17+n.y*.6,n.z],34)}},{id:"B3-bibou-roule",set:"meadow",dur:2.5,light:{...Oi,focus:[7,0,0]},sfx:[[0,"roll",{dur:2.2}],[1.05,"whoosh_fast"],[1.25,"kids_surprise"]],run(i,t){let e=i.T,n=i.leo,s=i.maya,r=i.bib;i.vis.ball=!1;let o=4.8+t*1.6,a=3.6+t*1.6;Ps(n,o),Ps(s,a),n.z-=.45,s.z+=.5;let c=D(t,1.1,1.6);gn(n,t*1.7,1-c*.7),gn(s,t*1.7+.3,1-c*.7),It(n,e,1,.3),It(s,e,2,.3);let l=.5+t*5.4;Ps(r,l),r.rx=l/.16*.9,r.wL=r.wR=-.1,r.tufts=-1,Nt(r,"effort"),r.face.eo=0,r.y=Math.abs(Math.sin(t*9))*.03,i.fx.puff([l-.2,0,On(l)],e-t+.2,e,{n:6,size:.25,spread:.3,color:15324582,seed:4}),i.fx.puff([l-.2,0,On(l)],e-t+.9,e,{n:6,size:.25,spread:.3,color:15324582,seed:5});let h=D(t,1.1,1.3);et(n,"determined",1-h),et(n,"surprised",h),et(s,"determined",.4*(1-h)),et(s,"surprised",h),dt(n,[l,.2,On(l)],h),dt(s,[l,.2,On(l)],h),n.ry+=.5*h,s.ry-=.5*h,i.cam([10.6,.75,On(10.6)+1.6],[5.2,.62,On(5.2)-.1],34)}},{id:"B4-le-rocher",set:"meadow",dur:4,light:{...Oi,focus:[11.5,0,-1.5]},sfx:[[.18,"bonk"],[.3,"dizzy_tweets",{dur:3.5}],[.3,"steps_run",{dur:.5,rate:3.6}],[.75,"climb",{dur:1.2}],[2.05,"step"],[2.4,"look_tick"],[3.1,"look_tick"]],run(i,t){let e=i.T,n=i.leo,s=i.maya,r=i.bib;i.vis.ball=!1;let o=[10.9,0,-.95];if(t<.18){let x=t/.18;r.x=B(9.6,o[0],x),r.z=B(On(9.6),o[2],x),r.rx=x*6,r.ry=1.2}else r.x=o[0],r.z=o[2],r.ry=1.9+Math.sin(e*3)*.1,r.sq=1-.35*de(t,.18,.3),r.rz=Math.sin(e*5)*.12,Nt(r,"neutral"),r.face.eo=.55,r.face.lx=Math.sin(e*6)*.8,r.face.ly=Math.cos(e*6)*.5,r.tufts=-.4,i.fx.dizzy([r.x,.42,r.z],e,.17,.8);let a=D(t,0,.7,Pt.out),c=[9,0,On(9)],l=[11.2,0,-1.55],h=D(t,.75,1.95,Pt.inOut);if(t<.75)n.x=B(c[0],l[0],a),n.z=B(c[2],l[2],a),n.ry=mt(c,l),gn(n,t*1.7,1-D(t,.4,.75));else{n.x=B(l[0],Xe[0],h),n.z=B(l[2],Xe[2],h),n.y=Ae.rockTop*D(t,.75,1.95,Pt.out),n.ry=mt(l,Xe)+.2*(1-h);let x=ce(t,.75,2);n.crouch+=.8*x,n.lean+=.6*x,n.aL.f+=(1.6+Math.sin(t*14)*.6)*x,n.aR.f+=(1.6-Math.sin(t*14)*.6)*x,n.lL.f+=Math.max(0,Math.sin(t*14))*.8*x,n.lR.f+=Math.max(0,-Math.sin(t*14))*.8*x}let u=D(t,2.1,2.4);t>2?(n.ry=B(n.ry,mt(Xe,qe),D(t,2,2.3)),Sh(n,"R",u),n.headYaw=Et(t,[[2.3,0],[2.6,.55],[3.2,.55],[3.5,-.55],[4,-.55]]),n.face.lx=n.headYaw*.8,et(n,"thinking",.6),n.face.bL=n.face.bR=.3):et(n,"determined"),It(n,e,1,.3);let f=[8.3,0,On(8.3)],d=[10.55,0,-.35],g=D(t,.6,1.6,Pt.out);s.x=B(f[0],d[0],g),s.z=B(f[2],d[2],g),s.ry=mt(f,d),t<1.6?gn(s,t*1.7,1-D(t,1.2,1.6)):(s.ry=B(s.ry,mt(d,[n.x,0,n.z]),D(t,1.6,1.9)),dt(s,[n.x,n.y+1.2,n.z],D(t,1.6,2))),It(s,e,2,.4),et(s,"happy",.6),i.cam(Et(t,[[0,[13.6,1.3,2.9]],[4,[13.8,1.6,2.7]]]),Et(t,[[0,[10.6,.8,-1.2]],[2.2,[11.6,1.6,-1.9]],[4,[11.7,1.8,-2]]]),38)}},{id:"B5-rien-a-l-horizon",set:"meadow",dur:2.5,light:{...Oi,focus:[14,0,-4],size:14},sfx:[[1.65,"shrug_sigh"]],run(i,t){let e=i.T,n=i.leo;i.vis.maya=i.vis.bib=i.vis.ball=!1,Object.assign(n,{x:Xe[0],y:Ae.rockTop,z:Xe[2],ry:mt(Xe,qe)-.25}),It(n,e,1,.4),Sh(n,"R",1-D(t,1.5,1.7)),n.headYaw=Et(t,[[0,-.5],[.5,.5],[1.1,.5],[1.4,0]]),cs(n,ce(t,1.6,2.4)),et(n,"worried",D(t,1.5,1.7));let s=mt(Xe,qe);i.cam([Xe[0]-Math.sin(s)*2.3-Math.cos(s)*1,3,Xe[2]-Math.cos(s)*2.3+Math.sin(s)*1],[qe[0],1,qe[2]+2],46)}},{id:"B6-maya-montre",set:"meadow",dur:2.5,light:{...Oi,focus:[11.2,0,-1.4]},sfx:[[.3,"tap"],[.9,"point_swish"]],run(i,t){let e=i.T,n=i.leo,s=i.maya,r=i.bib;i.vis.ball=!1,Object.assign(n,{x:Xe[0],y:Ae.rockTop,z:Xe[2],ry:mt(Xe,qe)-.25}),Object.assign(s,{x:10.55,z:-.35}),s.ry=mt([s.x,0,s.z],[n.x,0,n.z]),Object.assign(r,{x:10.9,z:-.95,ry:1.2}),It(n,e,1),It(s,e,2),Ce(r,e,3),et(n,"worried",.5),dt(n,[s.x,1,s.z],D(t,.3,.6));let o=D(t,.75,1.05,Pt.outBack);s.ry=B(s.ry,mt([s.x,0,s.z],qe)+.35,o),Is(s,"R",[qe[0],4,qe[2]],o),s.aL.f+=1*ce(t,.1,.6),s.aL.b+=1*ce(t,.1,.6),dt(s,[n.x,n.y+1.2,n.z],1-D(t,1.4,1.7)),dt(s,[qe[0],4,qe[2]],D(t,1.4,1.7)),s.headUp+=.15*D(t,1.6,1.8),et(s,"idea",.6*o),fe(r,[s.x,1,s.z]),i.cam(Et(t,[[0,[13.45,1,.7]],[2.5,[13.3,1,.55]]]),[11.2,1.35,-1.3],40)}},{id:"B7-le-ballon-au-loin",set:"meadow",dur:2.5,light:{...Oi,focus:[46,0,-16],size:8},sfx:[[.65,"ball_spot_ding"]],run(i,t){let e=i.T;i.vis.leo=i.vis.maya=i.vis.bib=!1;let n=[Xe[0],2.55,Xe[2]],s=[qe[0]-n[0],0,qe[2]-n[2]],r=Math.hypot(s[0],s[2]),o=[s[0]/r,s[2]/r],a=[-o[1],o[0]],c=3.6+3.5*ce(t,.45,1.9)*(.85+.15*Math.sin(t*7));i.ball.x=qe[0]+o[0]*1.4+a[0]*.6,i.ball.z=qe[2]+o[1]*1.4+a[1]*.6,i.ball.y=c,i.ball.rx=e*2,i.cam(n,[qe[0]+a[0]*.5,5.4,qe[2]+a[1]*.5],Et(t,[[0,10],[2.5,9]]))}},{id:"B8-leo-saute",set:"meadow",dur:2.5,light:{...Oi,focus:[12,0,-1.5]},sfx:[[.25,"idea_ting"],[1.3,"jump"],[1.85,"land_puff"],[.9,"bib_shake"],[1,"maya_cheer_clap"]],run(i,t){let e=i.T,n=i.leo,s=i.maya,r=i.bib;i.vis.ball=!1,Object.assign(s,{x:10.55,z:-.35,ry:mt([10.55,0,-.35],qe)}),Object.assign(r,{x:10.9,z:-.95,ry:1.2}),It(s,e,2),Ce(r,e,3);let o=[13,0,-.55],a=D(t,1.3,1.85,Pt.linear);if(t<1.3)Object.assign(n,{x:Xe[0],y:Ae.rockTop,z:Xe[2],ry:mt(Xe,qe)}),et(n,"amazed",D(t,.1,.3)),Is(n,"L",[qe[0],4,qe[2]],ce(t,.3,1.2)),n.crouch+=.5*D(t,1,1.3),hn(n,D(t,1,1.3)*.3);else{let l=ln([Xe[0],Ae.rockTop,Xe[2]],o,.5,a);n.x=l[0],n.y=l[1],n.z=l[2],n.ry=mt(Xe,o),et(n,"grin"),hn(n,1-a*.6,.6),n.lL.f+=.6*(1-a),n.lR.f-=.3,n.lL.k+=.8,n.lR.k+=1,t>1.85&&(n.crouch+=.5*de(t,1.85,.5),n.lL.k=n.lR.k=0,n.lL.f=n.lR.f=0,hn(n,0)),i.fx.puff([o[0],0,o[2]],e-t+1.85,e,{n:10,size:.4,spread:.7,color:15327942,seed:7})}It(n,e,1,.4),r.ry+=Math.sin(t*40)*.3*ce(t,.8,1.3),Nt(r,"happy",D(t,1.2,1.5)),r.tufts=D(t,1.2,1.5),t<.9&&(i.fx.dizzy([r.x,.42,r.z],e,.17,.8*(1-D(t,.6,.9))),Nt(r,"neutral"),r.face.eo=.6);let c=ce(t,.9,1.9);s.aL.f+=1.2*c,s.aR.f+=1.2*c,s.aL.b+=.9*c,s.aR.b+=.9*c,s.aL.o-=(.2+.25*Math.abs(Math.sin(t*16)))*c,s.aR.o-=(.2+.25*Math.abs(Math.sin(t*16)))*c,et(s,"grin"),dt(s,[n.x,n.y+1.1,n.z],.7),i.cam(Et(t,[[0,[14.6,1.25,2.6]],[2.5,[14.9,1.15,2.9]]]),Et(t,[[0,[12,1.5,-1.8]],[2.5,[12.2,.9,-1]]]),38)}},{id:"B9-vers-la-foret",set:"meadow",dur:3.5,light:{...Oi,focus:[18,0,-3],size:12},sfx:[[0,"steps_run",{dur:3.4,rate:3.6,who:"kids"}],[0,"hops",{dur:3.4,rate:6.5}]],run(i,t){let e=i.T,n=i.leo,s=i.maya,r=i.bib;i.vis.ball=!1;let o=[36,0,-14],a=[13.4,0,-.3],c=[12,0,.4],l=[12.6,0,1],h=t*3,u=(f,d,g)=>{let x=[o[0]-d[0],o[2]-d[2]],m=Math.hypot(x[0],x[1]);f.x=d[0]+x[0]/m*Math.max(0,h-g),f.z=d[2]+x[1]/m*Math.max(0,h-g),f.ry=Math.atan2(x[0],x[1])};u(n,a,0),u(s,c,.4),u(r,l,.7),gn(n,t*1.75),gn(s,t*1.75+.35),It(n,e,1,.3),It(s,e,2,.3),Xn(r,t*6.5,.1),r.lean=.25,Nt(r,"determined"),et(n,"determined"),et(s,"determined",.6),i.cam(Et(t,[[0,[10.2,1.25,2.4]],[3.5,[15,1.45,-.8]]]),Et(t,[[0,[14,.8,-1]],[3.5,[26,1.4,-8]]]),38)}}];var co={focus:[.8,0,0],size:7,sunDir:[.35,.9,.55],hemiI:1.3,envI:.6},qn=co,Cn=wt.ball,Ds=[-.05,0,-2];function nn(i,t){i.ball.x=Cn[0],i.ball.y=Cn[1]+Math.sin(t*1.3)*.01,i.ball.z=Cn[2],i.ball.ground=0,i.ball.rz=Math.sin(t*1.1)*.05}function qa(i,t){let e=i.leo,n=i.maya,s=i.bib;Object.assign(e,{x:wt.leo[0],z:wt.leo[2]}),Object.assign(n,{x:wt.maya[0],z:wt.maya[2]}),Object.assign(s,{x:wt.bib[0],z:wt.bib[2]}),e.ry=mt(wt.leo,Cn),n.ry=mt(wt.maya,Cn),s.ry=mt(wt.bib,Cn),It(e,t,1),It(n,t,2),Ce(s,t,3)}function Ch(i,t,e,n=0){Object.assign(i,{x:Ds[0],z:Ds[2],y:t,ry:Math.PI}),i.aL.f=2.4+Math.sin(e*9)*.35*n,i.aR.f=2.4-Math.sin(e*9)*.35*n,i.aL.o=i.aR.o=.45,i.aL.b=i.aR.b=.6,i.lL.f=.5+Math.max(0,Math.sin(e*9))*.7*n,i.lR.f=.5+Math.max(0,-Math.sin(e*9))*.7*n,i.lL.k=.9,i.lR.k=.9,i.lL.o=i.lR.o=.25,i.lean=.12}function Rh(i,t){Ch(i,.9,t,0),i.aL.f=2.9,i.aL.o=.7,i.aR.f=2.6,i.lL.f=1.2,i.lL.k=1.6}var cd=[{id:"C1-la-clairiere",set:"clearing",dur:4,light:qn,sfx:[[0,"harp_gliss"],[.3,"steps_walk",{dur:3.3,rate:3.2}],[.5,"hops",{dur:3,rate:5}],[2.6,"magic_shimmer"]],run(i,t){let e=i.T,n=i.leo,s=i.maya,r=i.bib;nn(i,e);let o=D(t,.2,3.6,Pt.out),a=(l,h,u,f)=>{l.x=B(h[0],u[0],o),l.z=B(h[2],u[2],o),l.ry=mt(h,u),oo(l,t*1.6+f,1-D(t,3,3.6))};a(n,[-4.8,0,.1],wt.leo,0),a(s,[-5.6,0,.6],wt.maya,.3),r.x=B(-5.3,wt.bib[0],o),r.z=B(-.3,wt.bib[2],o),r.ry=mt([-5.3,0,-.3],wt.bib),t<3.5&&Xn(r,t*5,.07),It(n,e,1),It(s,e,2),Ce(r,e,3);let c=[B(-3,2,D(t,.5,3)),3.2,-3];dt(n,c,.7),dt(s,c,.7),fe(r,c,.7),et(n,"amazed",.7),et(s,"amazed",.6),Nt(r,"amazed",.7),i.cam(Et(t,[[0,[.6,1.75,8.6]],[4,[.9,2.3,7.6]]]),Et(t,[[0,[-2.2,.9,.4]],[2.2,[-.4,1.5,-.6]],[4,[1.1,2.6,-1.6]]]),Et(t,[[0,40],[4,36]]))}},{id:"C2-le-voila",set:"clearing",dur:2.5,light:qn,sfx:[[.55,"point_swish"],[.6,"kids_happy_gasp"]],run(i,t){let e=i.T,n=i.leo,s=i.maya,r=i.bib;qa(i,e),nn(i,e),dt(n,Cn),dt(s,Cn),fe(r,Cn),et(n,"grin"),et(s,"happy"),Nt(r,"amazed"),Is(n,"L",Cn,D(t,.45,.75,Pt.outBack)),n.bob+=.04*de(t,.5,.4),r.y+=.08*de(t,.6,.35),r.tufts=1,i.cam(Et(t,[[0,[.55,.62,-.75]],[2.5,[.5,.65,-.5]]]),[.4,1.05,1.7],40)}},{id:"C3-leo-grimpe",set:"clearing",dur:4.5,light:qn,sfx:[[.1,"steps_run",{dur:1,rate:3.6}],[1.15,"climb",{dur:2}],[3.4,"grab_branch"],[3.6,"leo_effort"]],run(i,t){let e=i.T,n=i.leo,s=i.maya,r=i.bib;if(qa(i,e),nn(i,e),t<1.1){let o=D(t,0,1.1,Pt.inOut);n.x=B(wt.leo[0],Ds[0],o),n.z=B(wt.leo[2],Ds[2],o),n.ry=mt(wt.leo,Ds),gn(n,t*1.7,.7),et(n,"determined")}else{let o=Et(t,[[1.1,0],[3.2,.62,Pt.out],[3.6,.62],[4.5,.9,Pt.out]]);if(Ch(n,o,t,t<3.2?1:0),t>3.3){let a=D(t,3.3,3.6);n.aL.f=B(n.aL.f,2.9,a),n.aL.o=B(n.aL.o,.7,a),n.aR.f=B(n.aR.f,2.6,a),n.lL.f=B(n.lL.f,1.2,D(t,3.7,4.2)),n.lL.k=B(.9,1.6,D(t,3.7,4.2))}et(n,"effort"),n.headUp=.3}dt(s,[n.x,n.y+1.1,n.z],.8),fe(r,[n.x,n.y+1.1,n.z]),et(s,"worried",D(t,1.5,2.5)*.6),Nt(r,"amazed",.5),i.cam(Et(t,[[0,[-1.9,1.3,2.2]],[4.5,[-1.7,1.65,1.4]]]),Et(t,[[0,[-.1,1,0]],[4.5,[-.25,1.75,-2]]]),40)}},{id:"C4-craaac",set:"clearing",dur:2.5,light:qn,sfx:[[.35,"branch_creak"],[1.1,"branch_crack"],[1.15,"leaves_rustle"]],run(i,t){let e=i.T,n=i.leo;i.vis.maya=i.vis.bib=!1,nn(i,e),Rh(n,t),et(n,"effort",1-D(t,1.1,1.2)),et(n,"scared",D(t,1.1,1.2)),i.set.state.creak=.4*D(t,.3,.6)+.6*D(t,1.1,1.18,Pt.outBack)+Math.sin(t*35)*.08*ce(t,1.1,1.8),i.fx.leaves([-.9,2.35,-1.8],e-t+1.1,e,{n:14,spread:.6,life:2.5,fall:2.4,seed:11,burst:.3}),i.fx.puff([-.42,2,-2.15],e-t+1.1,e,{n:6,size:.15,spread:.12,color:12884588,life:.6,seed:9}),i.shake(.4*de(t,1.1,.5),30),i.cam(Et(t,[[0,[-1.35,2.2,-.55]],[2.5,[-1.25,2.15,-.75]]]),[-.55,2,-2.1],38)}},{id:"C5-leo-fige",set:"clearing",dur:2,light:qn,sfx:[[.1,"freeze_sting"],[.9,"gulp_leo"]],run(i,t){let e=i.T,n=i.leo;i.vis.maya=i.vis.bib=!1,nn(i,e),Rh(n,t),i.set.state.creak=1,et(n,"scared"),n.face.es=1.1;let s=Et(t,[[0,[-.95,1.75,-.65]],[2,[-.9,1.78,-.8]]]);dt(n,s,D(t,.2,1)),n.headUp-=.35*D(t,1,1.7),n.face.ly=-.8*D(t,1,1.7),n.squash=1+Math.sin(t*50)*.008;let r=[n.x-.12,n.y+1.32,n.z+.18];i.fx.sweat([r[0]+.18,r[1]+.12,r[2]+.1],e-t+.5,e,1.4),i.cam(s,[n.x,n.y+1.15,n.z],32)}},{id:"C6-maya-descends",set:"clearing",dur:2.5,light:qn,sfx:[[.2,"maya_tsk"]],run(i,t){let e=i.T,n=i.leo,s=i.maya,r=i.bib;qa(i,e),nn(i,e),Rh(n,t),et(n,"scared"),i.set.state.creak=1;let o=[n.x,n.y+1.2,n.z];s.ry=mt(wt.maya,o),dt(s,o),et(s,"worried"),s.headYaw+=Math.sin(t*10)*.22*ce(t,.1,1),id(s,t,D(t,.8,1.1)),fe(r,o),Nt(r,"worried"),r.tufts=-.5;let a=[Math.sin(s.ry),Math.cos(s.ry)];i.cam([s.x+a[0]*1.7+.3,.95,s.z+a[1]*1.7],[s.x,1.15,s.z],34)}},{id:"C7-leo-redescend",set:"clearing",dur:3,light:qn,sfx:[[.2,"slide_down"],[1.6,"land_soft"],[2.1,"sheepish_giggle"]],run(i,t){let e=i.T,n=i.leo,s=i.maya,r=i.bib;if(qa(i,e),nn(i,e),i.set.state.creak=1-D(t,.2,.6),t<1.6){let o=Et(t,[[0,.9],[.4,.8],[1.6,0,Pt.in]]);Ch(n,o,t,.3),et(n,"worried")}else{Object.assign(n,{x:Ds[0],z:Ds[2]+.15,y:0});let o=D(t,1.8,2.2);n.ry=B(Math.PI,mt([n.x,0,n.z],wt.maya),o),n.crouch+=.45*de(t,1.6,.5);let a=D(t,2.1,2.4);n.aR.f=B(0,2.3,a),n.aR.o=B(.1,.9,a),n.aR.b=B(.15,2.3,a),n.headTilt+=.18*a+Math.sin(t*14)*.03*a,et(n,"sheepish",a),dt(n,[s.x,1.2,s.z],o),i.fx.puff([n.x,0,n.z],e-t+1.6,e,{n:8,size:.3,spread:.5,color:15327942,seed:13})}dt(s,[n.x,n.y+1.2,n.z]),fe(r,[n.x,n.y+1,n.z]),et(s,"neutral"),s.face.sm=B(-.3,.6,D(t,1.8,2.4)),Nt(r,"happy",D(t,1.8,2.4)),i.cam(Et(t,[[0,[1.5,1.5,1.6]],[3,[1.35,1.25,1.35]]]),Et(t,[[0,[0,1.9,-1.9]],[1.6,[0,1,-1.8]],[3,[-.05,1.05,-1.6]]]),38)}},{id:"C8-bibou-heros",set:"clearing",dur:3,light:qn,sfx:[[.1,"hops",{dur:.6,rate:5}],[.9,"puff_up"],[1.3,"bib_heroic_chirp"],[2,"look_tick"],[2.3,"look_tick"]],run(i,t){let e=i.T,n=i.leo,s=i.maya,r=i.bib;nn(i,e),Object.assign(n,{x:.25,z:-.75}),Object.assign(s,{x:1.95,z:-.45});let o=[1.15,0,.75];r.x=B(wt.bib[0],o[0],D(t,0,.7)),r.z=B(wt.bib[2],o[2],D(t,0,.7)),t<.7&&Xn(r,t*5,.06),r.ry=.1,n.ry=mt([n.x,0,n.z],o),s.ry=mt([s.x,0,s.z],o),It(n,e,1),It(s,e,2),Ce(r,e,3,.5);let a=D(t,.85,1.25,Pt.outBack);r.puff=1*a,r.tufts=1.2*a,r.wL=r.wR=B(.15,-.1,a),r.wfL=r.wfR=-.4*a,Nt(r,"determined",a),r.face.lo=.3,r.beak=.5*ce(t,1.3,1.6),dt(n,[r.x,.3,r.z],1-D(t,1.9,2.1)),dt(s,[r.x,.3,r.z],1-D(t,2.2,2.4)),dt(n,[s.x,1.1,s.z],D(t,1.9,2.1)),dt(s,[n.x,1.1,n.z],D(t,2.2,2.4)),et(n,"skeptic",D(t,1.9,2.2)),et(s,"skeptic",D(t,2.2,2.5)),i.cam(Et(t,[[0,[1.25,.16,2.05]],[3,[1.22,.13,1.85]]]),[1.15,.55,0],44,-.04)}},{id:"C9-elan",set:"clearing",dur:2,light:qn,sfx:[[.25,"scrape"],[.55,"scrape"],[.85,"hops",{dur:.7,rate:9}],[1.6,"jump_small"],[1.65,"flap_fast",{dur:.4}],[1.65,"bib_charge"]],run(i,t){let e=i.T,n=i.leo,s=i.maya,r=i.bib;nn(i,e),Object.assign(n,{x:.25,z:-.75}),Object.assign(s,{x:1.95,z:-.45}),It(n,e,1),It(s,e,2),et(n,"skeptic",.5),et(s,"neutral");let o=[1.15,0,.75],a=[1.3,0,1.25],c=[1.75,0,-.1];if(r.puff=.6,r.tufts=1,Nt(r,"determined"),t<.85)r.x=B(o[0],a[0],D(t,0,.2)),r.z=B(o[2],a[2],D(t,0,.2)),r.ry=mt(a,Cn),r.fR=Math.max(0,Math.sin((t-.2)*20))*ce(t,.2,.8),r.lean=.25,i.fx.puff([r.x,0,r.z-.1],e-t+.25,e,{n:4,size:.12,spread:.2,color:14865064,seed:21}),i.fx.puff([r.x,0,r.z-.1],e-t+.55,e,{n:4,size:.12,spread:.2,color:14865064,seed:22});else if(t<1.6){let l=D(t,.85,1.6,Pt.in);r.x=B(a[0],c[0],l),r.z=B(a[2],c[2],l),r.ry=mt(a,c),Xn(r,t*9,.05),r.lean=.4}else{let l=(t-1.6)/1,h=ln(c,[2.6,3.95,-1.75],.3,l*.4);r.x=h[0],r.y=h[1],r.z=h[2],r.ry=mt(c,Cn),xn(r,t,1,18),r.sq=1.15}dt(n,[r.x,r.y+.2,r.z],.8),dt(s,[r.x,r.y+.2,r.z],.8),i.cam(Et(t,[[0,[2.7,.45,2.25]],[2,[2.6,.55,2]]]),Et(t,[[0,[1.25,.3,.9]],[1.4,[1.5,.35,.4]],[2,[1.8,.9,-.2]]]),38)}},{id:"C10-rate-et-buisson",set:"clearing",dur:3,light:{...qn,size:8},sfx:[[0,"whoosh_up"],[.85,"near_miss_swish"],[1,"spin_swirl"],[1.75,"bush_crash"],[1.8,"leaves_rustle"],[1.85,"bib_squeak_hurt"]],run(i,t){let e=i.T,n=i.leo,s=i.maya,r=i.bib;nn(i,e),Object.assign(n,{x:.25,z:-.75}),Object.assign(s,{x:1.95,z:-.45}),It(n,e,1),It(s,e,2);let o=[1.75,0,-.1],a=[2.62,3.95,-1.72],c=[wt.bush[0],.55,wt.bush[2]];if(t<.95){let h=D(t,0,.95,Pt.out),u=ln(o,a,.3,.4+.6*h);r.x=u[0],r.y=u[1],r.z=u[2],xn(r,t,1,18),Nt(r,"determined"),r.ry=mt(o,Cn),r.wfL=r.wfR=.8*D(t,.6,.9),fe(r,Cn)}else if(t<1.75){let h=D(t,.95,1.75,Pt.in),u=ln(a,c,.4,h);r.x=u[0],r.y=u[1],r.z=u[2],r.ry=(t-.95)*18,r.rz=(t-.95)*10,Nt(r,"surprised"),r.face.es=1.2,r.wL=r.wR=1.4}else i.vis.bib=!1;i.set.state.bushShake=D(t,1.75,1.8)*(1-D(t,1.8,3)),i.fx.leaves([c[0],.9,c[2]],e-t+1.75,e,{n:16,spread:.9,life:1.8,fall:1,seed:31,burst:.8}),i.fx.puff([c[0],.6,c[2]],e-t+1.75,e,{n:8,size:.35,spread:.6,color:11985818,seed:32,opacity:.6});let l=[r.x,r.y,r.z];dt(n,t<1.75?l:c,.9),dt(s,t<1.75?l:c,.9),et(n,"amazed",D(t,0,.5)*(1-D(t,1,1.2))),et(s,"amazed",D(t,0,.5)*(1-D(t,1,1.2))),et(n,"oops",D(t,1,1.2)),et(s,"surprised",D(t,1,1.2)),n.headTilt-=.15*D(t,1.75,2),i.shake(.25*de(t,1.75,.4),25),i.cam(Et(t,[[0,[.9,2.3,2.6]],[3,[1.2,1.7,2.4]]]),Et(t,[[0,[2,2.2,-1]],[.9,[2.5,3.6,-1.7]],[1.9,[3.3,1,-2]],[3,[3.2,.8,-1.9]]]),44,Et(t,[[1.6,0],[2.2,-.05,Pt.outBack]]))}},{id:"C11-yeux-dans-le-buisson",set:"clearing",dur:2.5,light:qn,sfx:[[.1,"leaves_rustle_small"],[1.2,"blink"],[1.55,"blink"],[1.9,"bib_tiny_squeak"]],run(i,t){let e=i.T,n=i.bib;i.vis.leo=i.vis.maya=!1,nn(i,e);let s=wt.bush;i.set.state.bushShake=.6*(1-D(t,0,.9)),Object.assign(n,{x:s[0]-.12,y:.3,z:s[2]+.86,ry:mt(s,[s[0]-.5,0,s[2]+3])}),Nt(n,"neutral"),n.face.eo=D(t,.8,1)*(1-ce(t,1.15,1.3)-ce(t,1.5,1.65)),n.face.lx=Et(t,[[1,0],[1.6,-.5],[2.2,.4]]),n.tufts=-.6,i.fx.leaves([s[0],1,s[2]],e-t-.4,e,{n:8,spread:.6,life:2.8,fall:1.2,seed:33,burst:.2}),i.cam(Et(t,[[0,[s[0]-.5,.75,s[2]+2.5]],[2.5,[s[0]-.45,.7,s[2]+2.2]]]),[s[0]-.05,.55,s[2]+.5],34)}},{id:"C12-maya-sourit",set:"clearing",dur:2,light:qn,sfx:[[.3,"maya_giggle_breath"]],run(i,t){let e=i.T,n=i.leo,s=i.maya;i.vis.bib=!1,nn(i,e),Object.assign(n,{x:.25,z:-.75}),Object.assign(s,{x:1.95,z:-.45});let r=wt.bush;n.ry=mt([n.x,0,n.z],r),s.ry=mt([s.x,0,s.z],r),It(n,e,1),It(s,e,2),dt(n,[r[0],.6,r[2]]),dt(s,[r[0],.6,r[2]]),et(s,"giggle",D(t,.2,.5)),s.headTilt+=.18*D(t,.2,.6),Fi(s,"R",.6*D(t,.3,.6)),wn(s,t,.4),et(n,"oops",1-D(t,.8,1.2)),et(n,"grin",D(t,.8,1.2)),i.cam(Et(t,[[0,[3.75,1.15,-1.55]],[2,[3.65,1.15,-1.45]]]),[1.1,1,-.6],36)}}];var di=co,un=wt.ball,lo=[.25,0,-.75],In=[1.95,0,-.45],ni=[wt.stump[0],.5,wt.stump[2]],Bi=[2.95,0,1.85],ii=[wt.logLow[0],0,wt.logLow[2]],Cr=124.75,Ln=128.6;function Lh(i){return .62-1.635*Math.sin(.3*(1-2*i))}function ld(i){return .62+1.635*Math.sin(.3*(1-2*i))}function Ya(i){let t=[ii[0],1.25,ii[2]],e=[un[0],un[1],un[2]+.12],n=[2.35,7.6,-2.05];if(i<Ln){let r=D(i,Cr,Ln,o=>1-Math.pow(1-o,1.6));return[B(t[0],e[0],r),B(t[1],e[1],r),B(t[2],e[2],r)]}let s=D(i,Ln,134.6,Pt.out);return[B(e[0],n[0],s),B(e[1],n[1],s),B(e[2],n[2],s)]}function Ih(i,t,e){let n=i.leo,s=i.maya,r=i.bib;Object.assign(n,{x:ni[0],y:ni[1],z:ni[2]}),n.ry=mt(ni,wt.logHigh),Object.assign(s,{x:Bi[0],z:Bi[2]}),s.ry=mt(Bi,wt.logHigh),Object.assign(r,{x:ii[0],y:Lh(0)+.09,z:ii[2]}),r.ry=mt(ii,[n.x,0,n.z]),It(n,t,1),It(s,t,2),Ce(r,t,3)}var hd=[{id:"D1-maya-reflechit",set:"clearing",dur:3,light:di,sfx:[[.2,"thinking_tick",{dur:1.4}]],run(i,t){let e=i.T,n=i.leo,s=i.maya,r=i.bib;nn(i,e),Object.assign(n,{x:lo[0],z:lo[2]}),Object.assign(s,{x:In[0],z:In[2]}),Object.assign(r,{x:wt.bush[0]-.7,z:wt.bush[2]+1.2}),It(n,e,1),It(s,e,2),Ce(r,e,3);let o=[[0,[un[0],un[1],un[2]]],[.9,[0,1.2,-2.6]],[1.8,[wt.pivot[0],.4,wt.pivot[2]]],[3,[wt.pivot[0],.4,wt.pivot[2]]]],a=Et(t,o);s.ry=mt(In,a)*.5+mt(In,un)*.5,dt(s,a),et(s,"thinking"),Fi(s,"R",.85),s.aR.b=2,n.ry=mt(lo,s.x?[s.x,0,s.z]:In),dt(n,[s.x,1.2,s.z],.8),et(n,"neutral"),r.ry=mt([r.x,0,r.z],[s.x,0,s.z]),fe(r,[s.x,1.1,s.z]),Nt(r,"neutral"),r.tufts=-.3;let c=D(t,1.4,2.8,Pt.inOut);i.cam(Et(t,[[0,[2.35,1.12,-2.15]],[1.4,[2.45,1.15,-2.05]],[2.8,[5.6,1.5,-1.4]]]),[B(In[0],wt.pivot[0],c),B(1.2,.55,c),B(In[2],wt.pivot[2],c)],B(36,40,c))}},{id:"D2-l-idee",set:"clearing",dur:2,light:di,sfx:[[.45,"idea_ting"],[.5,"sparkle"]],run(i,t){let e=i.T,n=i.maya;i.vis.leo=i.vis.bib=!1,nn(i,e),Object.assign(n,{x:In[0],z:In[2]}),n.ry=mt(In,wt.pivot),It(n,e,2),dt(n,[wt.pivot[0],.5,wt.pivot[2]]);let s=D(t,.4,.6,Pt.outBack);et(n,"thinking",1-s),et(n,"idea",s),Fi(n,"R",.85*(1-s)),n.bob+=.05*de(t,.45,.35),n.headUp+=.1*s,i.fx.sparkle([n.x+.05,1.75,n.z+.1],e-t+.45,e,{n:10,radius:.25,size:.14,life:1.1,seed:41});let r=[Math.sin(n.ry),Math.cos(n.ry)];i.cam([n.x+r[0]*1.25,1.18,n.z+r[1]*1.25],[n.x,1.2,n.z],32)}},{id:"D3-leo-comprend",set:"clearing",dur:2.5,light:di,sfx:[[.15,"point_swish"],[.7,"look_tick"],[1.1,"look_tick"],[1.55,"leo_aha"],[1.6,"nods"]],run(i,t){let e=i.T,n=i.leo,s=i.maya;i.vis.bib=!1,nn(i,e),Object.assign(n,{x:lo[0]+.6,z:lo[2]+.2}),Object.assign(s,{x:In[0],z:In[2]}),It(n,e,1),It(s,e,2);let r=[wt.pivot[0],.5,wt.pivot[2]];s.ry=mt(In,[n.x,0,n.z])*.5+mt(In,r)*.5,Is(s,"L",r,D(t,.1,.35,Pt.outBack)),dt(s,[n.x,1.2,n.z],.9),et(s,"grin"),n.ry=mt([n.x,0,n.z],[s.x,0,s.z]);let o=D(t,.55,.75),a=D(t,.95,1.15),c=D(t,1.45,1.6);dt(n,[s.x,1.1,s.z],1),dt(n,r,o*(1-a)),dt(n,un,a*(1-c)),dt(n,[s.x,1.1,s.z],c),et(n,"neutral"),et(n,"thinking",o*(1-c)),et(n,"grin",c),n.headUp+=Math.sin((t-1.6)*18)*.12*ce(t,1.6,2.4),i.cam(Et(t,[[0,[1.25,1.15,1.6]],[2.5,[1.25,1.12,1.4]]]),[1.45,1.05,-.55],38)}},{id:"D4-installation",set:"clearing",dur:5,light:{...di,focus:[2.8,0,.3]},sfx:[[.2,"hops",{dur:1.6,rate:5}],[1.9,"bib_land"],[2,"wood_knock"],[2.1,"bib_happy"],[.4,"steps_walk",{dur:1.4,rate:3}],[2.2,"climb",{dur:.8}],[3,"step"],[.6,"steps_walk",{dur:1.6,rate:3}],[3.6,"hands_ready"]],run(i,t){let e=i.T,n=i.leo,s=i.maya,r=i.bib;nn(i,e),It(n,e,1),It(s,e,2),Ce(r,e,3);let o=[1,0,.5];if(t<1.9){let f=D(t,.2,1.9,Pt.inOut);r.x=B(o[0],ii[0],f),r.z=B(o[2],ii[2],f),r.ry=mt(o,ii),Xn(r,t*5,.07),r.y+=(Lh(0)+.09)*D(t,1.5,1.9)}else Object.assign(r,{x:ii[0],y:Lh(0)+.09,z:ii[2]}),r.ry=mt(ii,ni),r.sq*=1-.2*de(t,1.9,.3),Nt(r,"happy"),r.tufts=.7;let a=[1.2,0,1.6],c=[ni[0]-.35,0,ni[2]+.35];if(t<2.2){let f=D(t,.4,2,Pt.inOut);n.x=B(a[0],c[0],f),n.z=B(a[2],c[2],f),n.ry=mt(a,c),oo(n,t*1.6,1-D(t,1.8,2.1))}else{let f=D(t,2.2,3,Pt.inOut);n.x=B(c[0],ni[0],f),n.z=B(c[2],ni[2],f),n.y=.5*D(t,2.2,2.9,Pt.out),n.crouch+=.5*ce(t,2.2,3),n.ry=mt(ni,wt.logHigh)}et(n,"determined");let l=[2,0,2.6],h=D(t,.6,2.4,Pt.inOut);s.x=B(l[0],Bi[0],h),s.z=B(l[2],Bi[2],h),s.ry=t<2.4?mt(l,Bi):mt(Bi,wt.logHigh),t<2.4&&oo(s,t*1.6+.3,1-D(t,2.1,2.4));let u=D(t,3.5,3.9);Ge(s,u,.05),s.aL.f+=.25*u,s.aR.f+=.25*u,et(s,"determined",.8),dt(n,[r.x,.6,r.z],D(t,3.2,3.6)),dt(s,[r.x,.6,r.z],D(t,3.9,4.3)),i.cam(Et(t,[[0,[5.6,1.8,5]],[5,[5.2,1.7,4.6]]]),Et(t,[[0,[2.2,.8,0]],[5,[2.45,.9,-.2]]]),40)}},{id:"D5-regards-complices",set:"clearing",dur:1.2,light:{...di,focus:[3.3,0,1.3]},sfx:[[.2,"look_tick"],[.55,"nods"]],run(i,t){let e=i.T,n=i.leo,s=i.maya;i.vis.bib=!1,Ih(i,e,t),Ge(s,1,.05),s.aL.f+=.25,s.aR.f+=.25,dt(n,[s.x,1.1,s.z]),dt(s,[n.x,1.6,n.z]),et(n,"determined"),et(s,"determined"),n.headUp+=-.15*de(t,.55,.3),s.headUp+=-.15*de(t,.6,.3),i.cam([4.4,1.45,3.1],[3.45,1.25,1.3],36)}},{id:"D6-bibou-pret",set:"clearing",dur:1.3,light:{...di,focus:[2,0,-.9]},sfx:[[.3,"bib_ready_chirp"],[.35,"salute_swish"]],run(i,t){let e=i.T,n=i.bib;i.vis.leo=i.vis.maya=!1,Ih(i,e,t),Nt(n,"determined"),n.puff=.5,n.tufts=1;let s=ce(t,.3,1.1);n.wR=.15+1.6*s,n.wfR=.9*s,n.beak=.4*ce(t,.3,.55),n.sq*=1+.05*de(t,.3,.3);let r=[Math.sin(n.ry),Math.cos(n.ry)];i.cam([n.x+r[0]*.95-r[1]*.35,n.y+.42,n.z+r[1]*.95+r[0]*.35],[n.x,n.y+.2,n.z],34)}},{id:"D7-catapulte",set:"clearing",dur:2.5,light:{...di,focus:[2.6,0,.2]},sfx:[[.25,"breath_in"],[.95,"jump"],[1.25,"lever_thwack"],[1.28,"bib_launch_squeak"],[1.3,"whoosh_up"]],run(i,t){let e=i.T,n=i.leo,s=i.maya,r=i.bib;nn(i,e),Ih(i,e,t);let o=D(e,Cr,Cr+.12,Pt.in);i.set.state.lever=o;let a=D(t,.2,.8)*(1-D(t,.9,1));n.crouch+=.55*a,s.crouch+=.45*a,hn(n,a*.2);let c=t-.95,l=[wt.logHigh[0],0,wt.logHigh[2]];if(c>0){let h=D(t,.95,1.25),u=ln(ni,[l[0]-.05,ld(1)+.08,l[2]-.05],.45,h);n.x=u[0],n.y=u[1],n.z=u[2],hn(n,1-h*.5,.7),n.lL.k=n.lR.k=.9*(1-h),t>1.25&&(n.crouch+=.6*de(t,1.25,.5),Z_(n,t)),s.y=.35*Math.sin(D(t,.95,1.25)*Math.PI),Ge(s,1,.05),s.aL.f=s.aR.f=B(1.6,.9,D(t,1,1.25)),s.crouch+=.5*de(t,1.25,.5)}else Ge(s,1,.05),s.aL.f+=.25,s.aR.f+=.25;if(et(n,t<1.25?"effort":"grin"),et(s,t<1.25?"effort":"amazed"),e<Cr)Nt(r,"determined"),r.puff=.4;else{let h=Ya(e);r.x=h[0],r.y=h[1],r.z=h[2],r.sq=1.25,r.wL=r.wR=1.3,Nt(r,"surprised"),r.face.es=1.15,r.rx=-.3}dt(n,[r.x,r.y+.2,r.z],D(t,1.3,1.6)),dt(s,[r.x,r.y+.2,r.z],D(t,1.3,1.6)),i.fx.puff([wt.logHigh[0],.05,wt.logHigh[2]],Cr,e,{n:10,size:.35,spread:.6,color:15327942,seed:51}),i.shake(.5*de(e,Cr,.5),28),i.cam(Et(t,[[0,[5.2,1.7,4.6]],[1.2,[5.25,1.65,4.7]],[2.5,[5.3,1.8,4.9]]]),Et(t,[[0,[2.45,.9,-.2]],[1.2,[2.45,.9,-.2]],[2.5,[2.1,2.7,-1.2]]]),42)}},{id:"D8-envol-heroique",set:"clearing",dur:4,light:{...di,focus:[2.2,3,-1.8],size:6},sfx:[[0,"hero_rise"],[2.55,"grab_ball"],[2.6,"bib_triumph"]],run(i,t){let e=i.T,n=i.bib;i.vis.leo=i.vis.maya=!1,i.set.state.lever=1;let s=Ya(e);n.x=s[0],n.y=s[1],n.z=s[2],n.ry=mt([s[0],0,s[2]],[un[0],0,un[2]-.5])+Math.sin(t*2)*.2;let r=D(e,Ln-1.4,Ln-.2);e<Ln?(nn(i,e),xn(n,t,.6,10),Nt(n,"determined",1-r),Nt(n,"amazed",r),n.face.es=1+.35*r,fe(n,un),n.wfL=n.wfR=1.2*D(e,Ln-.4,Ln),n.sq=1.1):(i.hold("bib","front"),n.wfL=n.wfR=1.25,n.wL=n.wR=.5,n.fL=n.fR=.8,Nt(n,"grin"),n.face.es=1.15,n.puff=.4*D(e,Ln,Ln+.3),n.sq=1-.15*de(e,Ln,.3),i.fx.sparkle([un[0],un[1],un[2]+.1],Ln,e,{n:12,radius:.5,size:.18,life:1.4,seed:61}),i.fx.leaves([un[0],un[1],un[2]],Ln,e,{n:8,spread:.5,life:2,fall:3,seed:62,burst:.3})),i.set.state.canopyShake=de(e,Ln,.8);let o=[s[0]+1.9,s[1]-.5,s[2]+2.3];i.cam(o,[s[0],s[1]+.2,s[2]],40,.05*Math.sin(t*.8))}},{id:"D9-moment-heroique",set:"clearing",dur:2,light:{...di,focus:[2.3,5.5,-2],size:6,exposure:1.12},sfx:[[.05,"hero_fanfare_hit"],[.4,"sparkle"]],run(i,t){let e=i.T,n=i.bib;i.vis.leo=i.vis.maya=!1,i.set.state.lever=1;let s=Ya(e);n.x=s[0],n.y=s[1],n.z=s[2],n.ry=.35,i.hold("bib","front"),n.wfL=n.wfR=1.25,n.wL=n.wR=.5,n.fL=n.fR=.6,Nt(n,"proud"),n.face.eo=.6,n.face.lo=.6,n.puff=.6,n.tufts=1.2,n.tail=.6,i.fx.sparkle([s[0],s[1]+.3,s[2]],e-t+.1,e,{n:14,radius:.6,size:.2,life:1.8,seed:71}),i.cam(Et(t,[[0,[s[0]+.45,s[1]-.45,s[2]+1.45]],[2,[s[0]+.5,s[1]-.4,s[2]+1.25]]]),[s[0],s[1]+.22,s[2]],40,-.06),i.light.sunDir=[.1,.5,-.9],i.light.rimI=2.2,i.light.rimDir=[.2,.6,-.8]}},{id:"D10-trop-haut",set:"clearing",dur:3.5,light:{...di,focus:[1.5,0,0],size:9},sfx:[[.9,"music_cut"],[1.2,"bib_gulp"],[1.6,"wind_high",{dur:1.9}]],run(i,t){let e=i.T,n=i.leo,s=i.maya,r=i.bib;i.set.state.lever=1;let o=Ya(e);r.x=o[0],r.y=o[1],r.z=o[2],r.ry=.35,i.hold("bib","front"),r.wfL=r.wfR=1.25,r.wL=r.wR=.5;let a=D(t,.6,1.1);if(Nt(r,"proud",1-a),Nt(r,"scared",a),r.face.es=1+.5*D(t,1.1,1.4,Pt.outBack),r.face.ly=-1.2*a,r.lean=.5*a,r.tufts=B(1.2,-1,a),r.tremble=D(t,1.4,1.8),Object.assign(n,{x:wt.logHigh[0]-.05,y:ld(1)+.08,z:wt.logHigh[2]-.05}),Object.assign(s,{x:Bi[0],z:Bi[2]}),It(n,e,1),It(s,e,2),dt(n,o),dt(s,o),hn(n,.5),hn(s,.4),et(n,"amazed"),et(s,"amazed"),t<1.75){let c=[Math.sin(r.ry),Math.cos(r.ry)];i.cam([o[0]+c[0]*.95,o[1]+.05,o[2]+c[1]*.95],[o[0],o[1]+.12,o[2]],34)}else i.cam([o[0]-.45,o[1]+.85,o[2]-.4],[o[0]+.3,o[1]-3.2,o[2]+1],52)}}];function Z_(i,t){i.aL.o+=.6,i.aR.o+=.6}var Us={...co,focus:[.3,0,1.5],size:8},ie=wt.tuft,Bn=143.25,ge={leo:[ie[0]-.6,-.42,ie[2]+.12],maya:[ie[0]+.6,-.42,ie[2]+.18],bib:[ie[0],.6,ie[2]-.05]};function J_(i){let t=[2.35,7.6,-2.05],e=[ie[0],.55,ie[2]-.05],n=D(i,135.3,Bn,r=>r*r*(3-2*r)*.6+r*.4),s=Math.sin(i*2.4)*.55*(1-n*.7);return[B(t[0],e[0],n)+s,B(t[1],e[1],n)+Math.abs(Math.sin(i*2.4))*.12*(1-n),B(t[2],e[2],n)+s*.4]}function Ph(i,t,e){let n=i.bib,s=J_(t);return n.x=s[0],n.y=s[1],n.z=s[2],n.ry=.2+Math.sin(t*2.4)*.3,n.rz=-Math.cos(t*2.4)*.25,i.hold("bib","above"),xn(n,t,1.1,22),n.wfL=n.wfR=0,Nt(n,"scared"),n.face.es=1.25,n.beak=.6+.2*Math.sin(t*30),n.tufts=1.3,n.fL=.8+.2*Math.sin(t*20),n.fR=.8+.2*Math.sin(t*20+1),s}var ud=[{id:"E1-descente",set:"clearing",dur:4,light:{...Us,focus:[1.5,3,-.5],size:8},sfx:[[0,"slide_whistle_down",{dur:3.8}],[0,"flap_fast",{dur:4}],[.6,"bib_eek"],[2.4,"bib_eek"]],run(i,t){let e=i.T;i.vis.leo=i.vis.maya=!1,i.set.state.lever=1;let n=Ph(i,e,t);i.cam([n[0]+1.5,n[1]+.25,n[2]+1.9],[n[0],n[1]+.05,n[2]],40,.06*Math.sin(e*1.2))}},{id:"E2-les-amis-courent",set:"clearing",dur:3,light:Us,sfx:[[0,"steps_run",{dur:2.2,rate:3.8,who:"kids"}],[2.15,"bump_boing"],[0,"flap_fast",{dur:3}],[2.2,"kids_oof"]],run(i,t){let e=i.T,n=i.leo,s=i.maya;i.set.state.lever=1;let r=Ph(i,e,t),o=[r[0],0,r[2]],a=[3.4,0,1.3],c=[2.95,0,1.85],l=D(t,0,2.2,Pt.inOut),h=Math.sin(t*5)*.5*(1-l);n.x=B(a[0],o[0]-.3,l)+h,n.z=B(a[2],o[2]+.6,l),s.x=B(c[0],o[0]+.25,l)-h,s.z=B(c[2],o[2]+.95,l),n.ry=mt(a,o)+Math.sin(t*5)*.3,s.ry=mt(c,o)-Math.sin(t*5)*.3,t<2.2&&(gn(n,t*1.8,.8),gn(s,t*1.8+.3,.8)),hn(n,.6,.5),hn(s,.6,.5),dt(n,r),dt(s,r),et(n,"worried"),et(s,"worried");let u=de(t,2.15,.6);n.fallSide=.25*u,s.fallSide=-.25*u,t>2.15&&(et(n,"oops"),et(s,"oops")),It(n,e,1,.3),It(s,e,2,.3),i.cam(Et(t,[[0,[1.6,1.15,7.6]],[3,[.8,1.25,7.3]]]),Et(t,[[0,[1.6,2,.8]],[3,[-.8,1.6,2]]]),42)}},{id:"E3-flump",set:"clearing",dur:2,light:Us,sfx:[[.6,"grass_flump"],[.62,"kids_oof"],[.65,"bib_squeak_hurt"],[.7,"leaves_rustle"]],run(i,t){let e=i.T,n=i.leo,s=i.maya,r=i.bib;i.set.state.lever=1;let o=D(e,Bn-.25,Bn,Pt.in);if(e<Bn){let a=Ph(i,e,t),c=[ie[0]-.1,0,ie[2]+1.15],l=[ie[0]+.55,0,ie[2]+1.35],h=D(t,.2,.75,Pt.in);n.x=B(c[0],ge.leo[0],h),n.z=B(c[2],ge.leo[2],h),s.x=B(l[0],ge.maya[0],h),s.z=B(l[2],ge.maya[2],h),n.ry=mt(c,a),s.ry=mt(l,a),hn(n,.8),hn(s,.8),n.fall=1.3*h,s.fall=1.3*h,n.y=ge.leo[1]*h*.5,s.y=ge.maya[1]*h*.5,et(n,"scared"),et(s,"scared")}else i.vis.leo=i.vis.maya=i.vis.bib=!1,i.ball.visible=!1;i.set.state.tuftWobble=D(e,Bn,Bn+.05)*(1-D(e,Bn,Bn+1.3)),i.set.state.tuftPart=.6*D(e,Bn,Bn+.2),i.fx.puff([ie[0],.5,ie[2]],Bn,e,{n:14,size:.45,spread:1,color:13627056,seed:81,opacity:.6,up:.6}),i.fx.sparkle([ie[0],.9,ie[2]],Bn+.05,e,{n:10,radius:.9,size:.07,life:1.6,color:16777215,seed:82,rise:.4}),i.shake(.35*de(e,Bn,.5),25),i.cam([ie[0]+1.6,1.35,ie[2]+4.2],[ie[0]+.1,.65,ie[2]],40)}},{id:"E4-silence-puis-ballon",set:"clearing",dur:3.5,light:Us,sfx:[[0,"birds_ambience",{dur:3.5}],[1.6,"grass_rustle_slow"],[2.55,"pop_small"],[2.9,"bib_tiny_squeak"]],run(i,t){let e=i.T,n=i.bib;i.set.state.lever=1,i.vis.leo=i.vis.maya=!1,i.set.state.tuftPart=.6,i.set.state.tuftWobble=.08*ce(t,1.5,2.6);let s=D(t,1.6,3.3,Pt.out);Object.assign(n,{x:ge.bib[0],y:B(-.1,ge.bib[1],s),z:ge.bib[2],ry:0}),i.hold("bib","above"),n.wL=n.wR=2.4,n.wfL=n.wfR=.1,Nt(n,"neutral"),n.face.eo=.8,n.face.lx=Math.sin(t*2)*.4,n.tufts=-.5+s,i.cam(Et(t,[[0,[ie[0]+.15,.85,ie[2]+3.4]],[3.5,[ie[0]+.12,.88,ie[2]+2.8]]]),[ie[0],.75,ie[2]],36)}},{id:"E5-fou-rire",set:"clearing",dur:3,light:Us,sfx:[[.3,"grass_rustle_slow"],[.5,"pop_small"],[.75,"pop_small"],[1.1,"kids_laugh_breath",{dur:1.8}],[1.3,"bib_giggle"]],run(i,t){let e=i.T,n=i.leo,s=i.maya,r=i.bib;i.set.state.lever=1,i.set.state.tuftPart=.6,Object.assign(r,{x:ge.bib[0],y:ge.bib[1],z:ge.bib[2],ry:0}),i.hold("bib","above"),r.wL=r.wR=2.4,r.wfL=r.wfR=.1,Ce(r,e,3,.5);let o=D(t,.4,.65,Pt.outBack),a=D(t,.65,.9,Pt.outBack);Object.assign(n,{x:ge.leo[0],y:B(-1.2,ge.leo[1],o),z:ge.leo[2],ry:.15}),Object.assign(s,{x:ge.maya[0],y:B(-1.2,ge.maya[1],a),z:ge.maya[2],ry:-.15}),It(n,e,1),It(s,e,2),dt(n,[r.x,r.y+.3,r.z],.65),dt(s,[r.x,r.y+.3,r.z],.65);let c=D(t,1.05,1.25);et(n,"surprised",1-c),et(s,"surprised",1-c),et(n,"laugh",c),et(s,"laugh",c),wn(n,t,c,!0),wn(s,t+.2,c,!0),n.aL.f=.6*c,n.aL.b=1.6*c,n.aR.f=.6*c,n.aR.b=1.6*c,Fi(s,"R",.5*c),fe(r,[n.x,.8,n.z],D(t,.5,.7)*(1-D(t,.9,1.1))),fe(r,[s.x,.8,s.z],D(t,.9,1.1)),Nt(r,"happy",D(t,1.3,1.6)),i.cam(Et(t,[[0,[ie[0]+.1,.95,ie[2]+3.3]],[3,[ie[0]+.1,.95,ie[2]+3.1]]]),[ie[0],.7,ie[2]],38)}},{id:"E6-bibou-fier",set:"clearing",dur:3,light:Us,sfx:[[.2,"puff_up"],[.4,"bib_proud_hum"],[1.9,"bib_offer_chirp"]],run(i,t){let e=i.T,n=i.leo,s=i.maya,r=i.bib;i.set.state.lever=1,i.set.state.tuftPart=.6,Object.assign(n,{x:ge.leo[0],y:ge.leo[1],z:ge.leo[2],ry:.3}),Object.assign(s,{x:ge.maya[0],y:ge.maya[1],z:ge.maya[2],ry:-.3}),Object.assign(r,{x:ge.bib[0],y:ge.bib[1],z:ge.bib[2]}),It(n,e,1),It(s,e,2),Ce(r,e,3,.4),et(n,"happy"),et(s,"happy"),wn(n,t,.3*(1-D(t,0,.6))),wn(s,t,.3*(1-D(t,0,.6)));let o=D(t,1.7,2.2);r.ry=B(0,mt([r.x,0,r.z],[n.x,0,n.z]),o),i.hold("bib",o>.5?"front":"above"),r.wL=r.wR=B(2.4,.5,o),r.wfL=r.wfR=B(.1,1.25,o),Nt(r,"proud",D(t,.2,.5)*(1-o)),Nt(r,"happy",o),r.puff=.7*D(t,.2,.5)*(1-o*.6),r.tufts=1,r.y+=.03*de(t,1.9,.3),dt(n,[r.x,r.y+.25,r.z]),dt(s,[r.x,r.y+.25,r.z]),n.face.bl=.5*o,i.cam(Et(t,[[0,[ie[0]+1,.98,ie[2]+1.75]],[3,[ie[0]+.9,.95,ie[2]+1.6]]]),[ie[0]-.2,.8,ie[2]],36)}},{id:"E7-calin",set:"clearing",dur:4.5,light:Us,sfx:[[.45,"catch_soft"],[1.25,"hug_squish"],[1.35,"bib_squeeze_squeak"],[2.4,"bib_coo"],[3.2,"maya_aww_breath"]],run(i,t){let e=i.T,n=i.leo,s=i.maya,r=i.bib;i.set.state.lever=1,i.set.state.tuftPart=.6,Object.assign(n,{x:ge.leo[0],y:ge.leo[1],z:ge.leo[2],ry:.45}),Object.assign(s,{x:ge.maya[0],y:ge.maya[1],z:ge.maya[2],ry:-.4}),It(n,e,1),It(s,e,2);let o=D(t,.3,.6),a=D(t,1,1.35,Pt.out),c=[ge.bib[0],ge.bib[1],ge.bib[2]],l=[n.x+.2,n.y+1.02,n.z+.18];r.x=B(c[0],l[0],a),r.y=B(c[1],l[1],a),r.z=B(c[2],l[2],a),r.ry=mt([r.x,0,r.z],[n.x,0,n.z])*(1-a)+.5*a,t<.45?(i.hold("bib","front"),r.wfL=r.wfR=1.25,r.wL=r.wR=.5):t<1?(Ge(n,1),i.hold("leo","hands")):(i.ball.x=n.x+.38,i.ball.y=.42,i.ball.z=n.z+.42),t>.45&&(Ge(n,o*(1-a)),n.aL.f=B(n.aL.f,1.25,a),n.aL.o=B(n.aL.o,.15,a),n.aL.b=B(n.aL.b,2,a),n.aL.t=B(n.aL.t,-.7,a),n.aR.f=B(n.aR.f,1.15,a),n.aR.o=B(n.aR.o,.05,a),n.aR.b=B(n.aR.b,2.1,a),n.aR.t=B(n.aR.t,-.6,a),n.headTilt=-.25*a+Math.sin(t*3)*.05*a,n.twist=.12*Math.sin(t*3)*a),et(n,"happy",1-a),et(n,"tender",a),r.sq=B(1,.78,a),r.scale=1,Nt(r,"happy",1-a),Nt(r,"giggle",a),r.face.bl=1,r.wL=B(r.wL,1.1,a),r.wR=B(r.wR,1.1,a),r.wfL=B(r.wfL,0,a),r.wfR=B(r.wfR,0,a),r.tufts=.8,r.fL=r.fR=.6*a,t>2.3&&(r.y+=.008*Math.sin(t*9)),et(s,"tender",D(t,1.5,2)),dt(s,[n.x,n.y+1,n.z],1),s.aL.f=.7*D(t,2,2.5),s.aR.f=.7*D(t,2,2.5),s.aL.b=s.aR.b=1.7*D(t,2,2.5),s.aL.o=s.aR.o=-.05,s.headTilt=.2*D(t,1.8,2.4),i.cam(Et(t,[[0,[ie[0]+.05,.95,ie[2]+2.1]],[4.5,[ie[0]-.15,.92,ie[2]+1.75]]]),[ie[0]-.2,.75,ie[2]],36)}}];var pi={focus:[1,0,1],size:8,sunDir:[.75,.3,.5],sunColor:16757865,sunI:2.9,hemiI:1.1,hemiSky:16765864,hemiGround:11115114,rimColor:16763024,rimI:1.5,rimDir:[-.7,.4,-.6],envI:.45,exposure:1.04},Gt={leo:[-.2,0,1.6],maya:[2.4,0,1.5],bib:[1.1,0,.55]},fd=[{t:159.6,from:"leo",to:"maya",dur:.9,h:.7},{t:162.4,from:"maya",to:"leo",dur:.9,h:.7}],ho=167.15,Dh=167.9,Hi=168.45,Ie=177.62;function mi(i,t){let e=i.leo,n=i.maya,s=i.bib;Object.assign(e,{x:Gt.leo[0],z:Gt.leo[2],ry:mt(Gt.leo,Gt.maya)}),Object.assign(n,{x:Gt.maya[0],z:Gt.maya[2],ry:mt(Gt.maya,Gt.leo)}),Object.assign(s,{x:Gt.bib[0],z:Gt.bib[2],ry:.15}),It(e,t,1),It(n,t,2),Ce(s,t,3),et(e,"happy"),et(n,"happy")}function Za(i){let e=Gt.bib[0]+.02,n=Gt.bib[2]+.05;if(i<Hi)return null;let s=Hi,r=171.6;if(i<r){let a=D(i,s,r,Pt.out);return[e,B(.95,13,a),n]}if(i<Ie){let a=D(i,175.9,Ie,Pt.in);return[e,B(13,.42,a)+(i<175.9?Math.sin((i-r)*1.5)*.15:0),n]}let o=i-Ie;return[e+1.6*(1-Math.exp(-o*1.4)),Rr+Wa(o+.24,.9,.5),n+1*(1-Math.exp(-o*1.4))]}var dd=[{id:"F1-retour-au-village",set:"village",sky:"golden",dur:3.5,light:{...pi,size:12},sfx:[[2,"catch"]],run(i,t){let e=i.T;mi(i,e),ao(i,e,fd);let n=[i.ball.x,i.ball.y,i.ball.z];dt(i.leo,n,.7),dt(i.maya,n,.7),fe(i.bib,n),i.bib.ry=i.bib.face.lx*.35,i.cam(Et(t,[[0,[4.2,1.9,5]],[3.5,[2.1,1.45,4.8]]]),Et(t,[[0,[1,1,.8]],[3.5,[1,.82,.9]]]),40)}},{id:"F2-passes",set:"village",sky:"golden",dur:3,light:pi,sfx:[[.9,"catch"],[1.5,"look_tick"],[2.1,"leo_hmm"]],run(i,t){let e=i.T,n=i.leo,s=i.maya,r=i.bib;mi(i,e);let o=ao(i,e,fd),a=[i.ball.x,i.ball.y,i.ball.z];dt(s,a,.7),fe(r,a);let c=D(t,1.3,1.7);n.ry=B(mt(Gt.leo,Gt.maya),mt(Gt.leo,Gt.bib),c),dt(n,a,.7*(1-c)),dt(n,[r.x,.3,r.z],c),et(n,"grin",c),n.face.bL+=.4*ce(t,1.8,2.8),n.face.bR+=.4*ce(t,1.8,2.8),n.headTilt+=.15*c,Nt(r,"amazed",c),r.ry=B(r.face.lx*.35,mt(Gt.bib,Gt.leo),c),i.cam(Et(t,[[0,[1,1.25,6]],[3,[.9,1.15,5.3]]]),[.9,.8,1],36)}},{id:"F3-bibou-se-prepare",set:"village",sky:"golden",dur:2,light:pi,sfx:[[.2,"bib_determined"],[.6,"wiggle",{dur:1}],[1.6,"bib_hup"]],run(i,t){let e=i.T,n=i.bib;mi(i,e),i.vis.leo=i.vis.maya=!1,i.ball.visible=!1,n.ry=mt(Gt.bib,Gt.leo);let s=D(t,.2,.6);n.sq=1-.18*s,n.rz+=Math.sin(t*24)*.1*ce(t,.6,1.6),n.fL=Math.max(0,Math.sin(t*24))*.5*ce(t,.6,1.6),n.fR=Math.max(0,-Math.sin(t*24))*.5*ce(t,.6,1.6),n.tufts=1.2*s,n.puff=.4*s,n.wL=n.wR=.15+.5*s,Nt(n,"determined",s),n.face.eo=1-.1*s,n.face.es=1.08,fe(n,[Gt.leo[0],.9,Gt.leo[2]]);let r=[Math.sin(n.ry+.5),Math.cos(n.ry+.5)];i.cam([n.x+r[0]*1,.3,n.z+r[1]*1],[n.x,.22,n.z],32,.05)}},{id:"F4-attrape-et-glisse",set:"village",sky:"golden",dur:2.5,light:pi,sfx:[[.15,"toss"],[.6,"jump_small"],[.9,"catch_soft"],[1,"bib_triumph_short"],[1.45,"slip_boing"],[1.5,"whoosh_up"],[1.6,"bib_uh_oh"]],run(i,t){let e=i.T,n=i.leo,s=i.maya,r=i.bib;mi(i,e),n.ry=mt(Gt.leo,Gt.bib),s.ry=mt(Gt.maya,Gt.bib);let o=D(e,167.6,168.6);if(e<ho)Ge(n,1),i.hold("leo","hands");else if(e<Dh){let c=(e-ho)/(Dh-ho),l=ln(Fn(n),[Gt.bib[0],.95,Gt.bib[2]],.45,c);i.ball.x=l[0],i.ball.y=l[1],i.ball.z=l[2],i.ball.rx=c*5,Ge(n,1-D(e,ho,ho+.3))}else if(e<Hi)i.hold("bib","above");else{let c=Za(e);i.ball.x=c[0],i.ball.y=c[1],i.ball.z=c[2],i.ball.rx=e*6}r.ry=mt(Gt.bib,Gt.leo);let a=.55*Math.sin(o*Math.PI);if(r.y=a,e>167.6&&e<168.6&&(r.sq=1.12,xn(r,e,.4,12)),e>=Dh&&e<Hi)r.wL=r.wR=2.5,r.wfL=r.wfR=.1,Nt(r,"proud"),r.face.eo=.5;else if(e>=Hi){let c=D(e,Hi,Hi+.25);r.wL=r.wR=B(2.5,1.2,c),Nt(r,"surprised",c),r.face.ly=1.2*c,r.face.es=1.2,fe(r,[i.ball.x,i.ball.y,i.ball.z])}else Nt(r,"determined"),fe(r,[i.ball.x,i.ball.y,i.ball.z]);r.sq*=1-.2*de(e,168.6,.25),dt(n,[i.ball.x,i.ball.y,i.ball.z],.8),dt(s,[i.ball.x,i.ball.y,i.ball.z],.8),et(n,e<Hi?"grin":"surprised"),et(s,e<Hi?"happy":"surprised"),i.cam(Et(t,[[0,[1,.62,3.35]],[2.5,[1,.7,3.15]]]),Et(t,[[0,[1,.7,.7]],[1.4,[1.05,.95,.6]],[2.5,[1.1,2,.55]]]),44)}},{id:"F5-tous-regardent-en-l-air",set:"village",sky:"golden",dur:3,light:pi,sfx:[[0,"music_cut"],[.1,"wind_soft"],[.2,"cricket_silence",{dur:2.6}]],run(i,t){let e=i.T,n=i.leo,s=i.maya,r=i.bib;mi(i,e);let o=Za(e);i.ball.x=o[0],i.ball.y=o[1],i.ball.z=o[2],i.ball.rx=e*4,n.ry=mt(Gt.leo,[Gt.bib[0],0,Gt.bib[2]+1]),s.ry=mt(Gt.maya,[Gt.bib[0],0,Gt.bib[2]+1]),r.ry=0,dt(n,o),dt(s,o),fe(r,o),n.headUp=s.headUp=.65,et(n,"surprised",.7),et(s,"surprised",.7),Nt(r,"surprised",.8),n.face.op=s.face.op=.35,i.cam(Et(t,[[0,[1.1,.45,4.6]],[3,[1.1,.45,4.3]]]),[1.1,1.25,1],42)}},{id:"F6-ils-se-regardent",set:"village",sky:"golden",dur:2,light:pi,sfx:[[.2,"look_tick"],[.45,"look_tick"],[.8,"look_tick"],[1.2,"look_tick"]],run(i,t){let e=i.T,n=i.leo,s=i.maya,r=i.bib;mi(i,e),i.ball.visible=!1,n.ry=mt(Gt.leo,[Gt.bib[0],0,Gt.bib[2]+1]),s.ry=mt(Gt.maya,[Gt.bib[0],0,Gt.bib[2]+1]),r.ry=0;let o=[1.1,12,.6],a=D(t,.15,.35),c=D(t,.4,.6);dt(n,o,1-a),dt(n,[s.x,1.1,s.z],a),dt(s,o,1-c),dt(s,[n.x,1.1,n.z],c),fe(r,o,1),fe(r,[n.x,1,n.z],D(t,.7,.85)*(1-D(t,1.1,1.25))),fe(r,[s.x,1,s.z],D(t,1.1,1.25)),et(n,"neutral"),et(s,"neutral"),Nt(r,"neutral"),n.face.sm=s.face.sm=0,i.cam([1.1,.95,5.2],[1.1,.8,1],36)}},{id:"F7-regard-camera",set:"village",sky:"golden",dur:2.5,light:pi,sfx:[[.3,"look_tick_double"],[.8,"sheepish_sting"]],run(i,t){let e=i.T,n=i.leo,s=i.maya,r=i.bib;mi(i,e),i.ball.visible=!1;let o=Et(t,[[0,[1.1,.95,4.6]],[2.5,[1.1,.92,4]]]);n.ry=mt(Gt.leo,o)*D(t,.2,.5)+mt(Gt.leo,[Gt.bib[0],0,Gt.bib[2]+1])*(1-D(t,.2,.5)),s.ry=mt(Gt.maya,o)*D(t,.2,.5)+mt(Gt.maya,[Gt.bib[0],0,Gt.bib[2]+1])*(1-D(t,.2,.5)),r.ry=0;let a=D(t,.25,.45,Pt.out);dt(n,[s.x,1.1,s.z],1-a),dt(n,o,a),dt(s,[n.x,1.1,n.z],1-a),dt(s,o,a),fe(r,o,a);let c=D(t,.7,1);et(n,"sheepish",c),et(s,"sheepish",c),Nt(r,"sheepish",c),r.face.bl=.9*c,n.headTilt+=.12*c,s.headTilt-=.12*c,cs(n,.4*ce(t,.9,2.3)),cs(s,.4*ce(t,1,2.4)),r.wL=r.wR=.15+.6*ce(t,1,2.2),i.cam(o,[1.1,.72,1],36)}},{id:"F8-poc",set:"village",sky:"golden",dur:2.5,light:pi,sfx:[[.05,"falling_whistle",{dur:.55}],[Ie-177,"poc"],[Ie-177+.3,"flop_soft"],[Ie-177+.32,"boing"],[Ie-177+.5,"ball_bounce",{v:.7}],[Ie-177+.95,"ball_bounce",{v:.4}],[Ie-177+.4,"dizzy_tweets",{dur:1.8}]],run(i,t){let e=i.T,n=i.leo,s=i.maya,r=i.bib;mi(i,e);let o=Za(e);i.ball.x=o[0],i.ball.y=o[1],i.ball.z=o[2],r.ry=0,et(n,"sheepish",.6),et(s,"sheepish",.6),Nt(r,"sheepish",1-D(e,Ie,Ie+.05));let a=[1.1,.8,3.2];if(dt(n,a,.6),dt(s,a,.6),fe(r,a,1-D(e,Ie,Ie+.05)),e>=Ie){r.sq=1-.4*de(e,Ie,.3);let c=D(e,Ie+.2,Ie+.5,Pt.in);r.rx=-1.75*c+Ca(e,Ie+.5,1.6,3)*.3,r.fL=.7*c,r.fR=.7*c,Nt(r,"neutral"),r.face.eo=.6,r.face.lx=Math.sin(e*7)*.8,r.face.ly=Math.cos(e*7)*.6,r.tufts=-.5,i.fx.dizzy([r.x,.42-.2*c,r.z+.1*c],e,.17,.9),i.fx.sparkle([r.x,.42,r.z],Ie,e,{n:6,radius:.25,size:.12,life:.5,color:16769162,seed:91}),et(n,"oops",D(e,Ie,Ie+.1)),et(s,"oops",D(e,Ie,Ie+.1)),n.crouch+=.15*de(e,Ie,.4),s.crouch+=.15*de(e,Ie,.4)}i.cam(Et(t,[[0,[1.25,.72,2.85]],[2.5,[1.2,.7,2.6]]]),[1.1,.42,.55],38,Et(e,[[Ie,0],[Ie+.4,.05,Pt.outBack]]))}},{id:"F9-eclats-de-rire",set:"village",sky:"golden",dur:4.5,light:{...pi,size:10},sfx:[[.1,"kids_laugh_breath",{dur:3.5}],[.6,"bib_giggle"],[1.6,"bib_giggle"],[2.6,"bib_giggle"]],run(i,t){let e=i.T,n=i.leo,s=i.maya,r=i.bib;mi(i,e);let o=Za(e);i.ball.x=o[0],i.ball.y=o[1],i.ball.z=o[2],r.rx=-1.75+Math.sin(t*6)*.06,r.ry=0,r.fL=.7+.3*Math.sin(t*12),r.fR=.7+.3*Math.sin(t*12+2),r.wL=.6+.3*Math.sin(t*10),r.wR=.6+.3*Math.sin(t*10+1),Nt(r,"laugh",D(t,.4,.8)),r.beak=.5+.3*Math.sin(t*20),i.fx.dizzy([r.x,.22,r.z+.1],e,.17,.9*(1-D(t,0,1))),n.ry=mt(Gt.leo,Gt.bib),s.ry=mt(Gt.maya,Gt.bib),et(n,"laugh"),et(s,"laugh"),wn(n,t,1,!0),wn(s,t+.15,1,!0),Fi(s,"R",.4),n.aL.f=.5,n.aL.b=1.7,n.aR.f=.5,n.aR.b=1.7;let a=D(t,.8,4.5,Pt.inOut);i.cam([B(1.1,1.6,a),B(1,5.6,a),B(4,10.5,a)],[1.1,B(.5,1.6,a),B(.8,-2,a)],B(38,44,a))}},{id:"F10-fondu",set:"village",sky:"golden",dur:3,light:{...pi,size:16},sfx:[],run(i,t){let e=i.T,n=i.leo,s=i.maya,r=i.bib;mi(i,e),i.ball.x=Gt.bib[0]+1.6,i.ball.y=Rr,i.ball.z=Gt.bib[2]+1,r.rx=-1.75+Math.sin(t*6)*.06,r.ry=0,r.fL=.7+.3*Math.sin(t*12),r.fR=.7+.3*Math.sin(t*12+2),Nt(r,"laugh"),n.ry=mt(Gt.leo,Gt.bib),s.ry=mt(Gt.maya,Gt.bib),et(n,"laugh"),et(s,"laugh"),wn(n,t,.8,!0),wn(s,t+.15,.8,!0);let o=D(t,0,3,Pt.out);i.cam([B(1.6,1.9,o),B(5.6,7.4,o),B(10.5,13.5,o)],[1.1,B(1.6,2.4,o),B(-2,-5,o)],44),i.fade(D(t,.3,2.6,Pt.inOut))}}];var $_=[...rd,...ad,...cd,...hd,...ud,...dd],Nh=[],Uh=0;for(let i of $_)Nh.push({start:Uh,shot:i}),Uh+=i.dur;var pd=Uh;var Ja=class{constructor(t,e,n,s={}){this.renderer=new la({canvas:t,antialias:s.antialias??!0,preserveDrawingBuffer:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(1),this.renderer.setSize(e,n,!1),this.scene=new pr,this.camera=new bn(35,e/n,.05,900),this.scene.add(this.camera),this.lights=kf(this.renderer,this.scene),this.sky=Kf(this.scene),this.sets={village:jf(),meadow:Qf(),clearing:td()};for(let r in this.sets)this.scene.add(this.sets[r].group);this.fogs={village:new dr(15004415,45,260),meadow:new dr(15004415,40,230),clearing:new dr(14676188,22,95)},this.leo=vh("leo"),this.maya=vh("maya"),this.bibou=Ff(),this.ball=Bf();for(let r of[this.leo,this.maya,this.bibou,this.ball])this.scene.add(r.root,r.blob),this.lights.useEnv(r.root);this.fx=ed(this.scene),this.fade=new Y(new mn(10,10),new Ke({color:0,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,fog:!1})),this.fade.position.z=-.3,this.fade.renderOrder=999,this.camera.add(this.fade),this.duration=pd,this.timeline=Nh,this._v=new L}resize(t,e){this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix()}shotAt(t){let e=this.timeline,n=0;for(;n<e.length-1&&t>=e[n+1].start;)n++;return e[n]}renderAt(t){t=jt(t,0,this.duration-1e-4);let e=this.shotAt(t),n=e.shot,s=t-e.start,r=this.camera,o={T:t,t:s,shot:n,dur:n.dur,leo:Ha(),maya:Ha(),bib:Mh(),ball:{x:0,y:as,z:0,rx:0,ry:0,rz:0,sq:1,ground:0,visible:!0},vis:{leo:!0,maya:!0,bib:!0,ball:!0},attach:null,set:this.sets[n.set],fx:this.fx,sky:this.sky,fadeA:0,wind:1,light:{...n.light||{}},_cam:{pos:[0,2,8],look:[0,1,0],fov:35,roll:0,shake:0,shakeF:14},cam(h,u,f=35,d=0){Object.assign(this._cam,{pos:h,look:u,fov:f,roll:d})},shake(h,u=14){this._cam.shake+=h,this._cam.shakeF=u},hold(h,u="hands"){this.attach={who:h,mode:u}},fade(h){this.fadeA=h}};o.leo.ry=0,o.maya.ry=0;for(let h in this.sets)this.sets[h].group.visible=h===n.set;this.scene.fog=this.fogs[n.set],this.fogs.village.color.set(n.sky==="golden"?16768184:15004415),this.sky.setTime(n.sky||"day"),this.sky.birds.visible=!1,this.fx.begin(),n.run(o,s);let a=o._cam;r.position.set(...a.pos);let c=this._v.set(...a.look);if(a.shake){let h=a.shakeF;r.position.x+=ei(t*h)*a.shake*.05,r.position.y+=ei(t*h+50)*a.shake*.05,c.x+=ei(t*h+100)*a.shake*.05,c.y+=ei(t*h+150)*a.shake*.05}r.position.y+=ei(t*.7+7)*.008,r.lookAt(c),r.rotateZ(a.roll),r.fov=a.fov,r.updateProjectionMatrix(),this.leo.root.visible=this.leo.blob.visible=o.vis.leo,this.maya.root.visible=this.maya.blob.visible=o.vis.maya,this.bibou.root.visible=this.bibou.blob.visible=o.vis.bib,bh(this.leo,o.leo),bh(this.maya,o.maya),Of(this.bibou,o.bib,t),this.leo.root.updateMatrixWorld(!0),this.maya.root.updateMatrixWorld(!0),this.bibou.root.updateMatrixWorld(!0),o.attach&&this.resolveAttach(o),o.ball.visible=o.ball.visible&&o.vis.ball,Hf(this.ball,o.ball);let l=o.light;return this.lights.setup(l),n.sky==="golden"?this.sky.uniforms.sunDir.value.set(...l.sunDir||[.55,.3,.6]).normalize():this.sky.uniforms.sunDir.value.set(...l.sunDir||[.55,.85,.6]).normalize(),this.sets[n.set].update(t,o.wind),this.sky.update(t,r),this.fx.end(),this.fade.material.opacity=o.fadeA,this.fade.visible=o.fadeA>.001,this.renderer.render(this.scene,r),{shot:n.id,t:s}}resolveAttach(t){let e=t.attach,n=new L;if(e.who==="bib"){let s=t.bib,r=new L(Math.sin(s.ry),0,Math.cos(s.ry));this.bibou.center.getWorldPosition(n);let o=e.mode==="above"?new L(0,Mn+as*.9,0):r.multiplyScalar(Mn+as*.55).add(new L(0,-.02,0));n.add(o)}else{let s=e.who==="leo"?this.leo:this.maya,r=new L,o=new L;s.arms.L.hand.getWorldPosition(r),s.arms.R.hand.getWorldPosition(o),n.copy(r).add(o).multiplyScalar(.5);let a=t[e.who],c=new L(Math.sin(a.ry),0,Math.cos(a.ry));e.mode==="hands"&&n.addScaledVector(c,.07),e.mode==="right"&&(n.copy(o).addScaledVector(c,.05),n.y+=.02)}t.ball.x=n.x,t.ball.y=n.y-t.ball.ground,t.ball.z=n.z}};window.MeliMelo={create(i,t,e,n){let s=new Ja(i,t,e,n);return window.__ep=s,s},async grab(i,t="image/jpeg",e=.93){let n=await new Promise(o=>i.toBlob(o,t,e)),s=new Uint8Array(await n.arrayBuffer()),r="";for(let o=0;o<s.length;o+=32768)r+=String.fromCharCode.apply(null,s.subarray(o,o+32768));return btoa(r)}};window.ready=!0;})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
