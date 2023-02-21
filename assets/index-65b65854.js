(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function pa(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}function ha(e){if(B(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=de(r)?rl(r):ha(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(de(e))return e;if(ae(e))return e}}const el=/;(?![^(]*\))/g,tl=/:([^]+)/,nl=/\/\*.*?\*\//gs;function rl(e){const t={};return e.replace(nl,"").split(el).forEach(n=>{if(n){const r=n.split(tl);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function ga(e){let t="";if(de(e))t=e;else if(B(e))for(let n=0;n<e.length;n++){const r=ga(e[n]);r&&(t+=r+" ")}else if(ae(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const al="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",il=pa(al);function vo(e){return!!e||e===""}const Dm=e=>de(e)?e:e==null?"":B(e)||ae(e)&&(e.toString===wo||!H(e.toString))?JSON.stringify(e,bo,2):String(e),bo=(e,t)=>t&&t.__v_isRef?bo(e,t.value):jt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:yo(t)?{[`Set(${t.size})`]:[...t.values()]}:ae(t)&&!B(t)&&!_o(t)?String(t):t,re={},Ft=[],je=()=>{},ol=()=>!1,sl=/^on[^a-z]/,fr=e=>sl.test(e),va=e=>e.startsWith("onUpdate:"),be=Object.assign,ba=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},ll=Object.prototype.hasOwnProperty,q=(e,t)=>ll.call(e,t),B=Array.isArray,jt=e=>cr(e)==="[object Map]",yo=e=>cr(e)==="[object Set]",H=e=>typeof e=="function",de=e=>typeof e=="string",ya=e=>typeof e=="symbol",ae=e=>e!==null&&typeof e=="object",xo=e=>ae(e)&&H(e.then)&&H(e.catch),wo=Object.prototype.toString,cr=e=>wo.call(e),fl=e=>cr(e).slice(8,-1),_o=e=>cr(e)==="[object Object]",xa=e=>de(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,qn=pa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ur=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},cl=/-(\w)/g,Ke=ur(e=>e.replace(cl,(t,n)=>n?n.toUpperCase():"")),ul=/\B([A-Z])/g,Vt=ur(e=>e.replace(ul,"-$1").toLowerCase()),dr=ur(e=>e.charAt(0).toUpperCase()+e.slice(1)),Or=ur(e=>e?`on${dr(e)}`:""),mn=(e,t)=>!Object.is(e,t),Pr=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Zn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},dl=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Za;const ml=()=>Za||(Za=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Ie;class pl{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ie,!t&&Ie&&(this.index=(Ie.scopes||(Ie.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Ie;try{return Ie=this,t()}finally{Ie=n}}}on(){Ie=this}off(){Ie=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function hl(e,t=Ie){t&&t.active&&t.effects.push(e)}function gl(){return Ie}const wa=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Eo=e=>(e.w&ut)>0,ko=e=>(e.n&ut)>0,vl=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=ut},bl=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];Eo(a)&&!ko(a)?a.delete(e):t[n++]=a,a.w&=~ut,a.n&=~ut}t.length=n}},zr=new WeakMap;let nn=0,ut=1;const Br=30;let Te;const kt=Symbol(""),Hr=Symbol("");class _a{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,hl(this,r)}run(){if(!this.active)return this.fn();let t=Te,n=ft;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Te,Te=this,ft=!0,ut=1<<++nn,nn<=Br?vl(this):ei(this),this.fn()}finally{nn<=Br&&bl(this),ut=1<<--nn,Te=this.parent,ft=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Te===this?this.deferStop=!0:this.active&&(ei(this),this.onStop&&this.onStop(),this.active=!1)}}function ei(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let ft=!0;const Ao=[];function Xt(){Ao.push(ft),ft=!1}function Gt(){const e=Ao.pop();ft=e===void 0?!0:e}function _e(e,t,n){if(ft&&Te){let r=zr.get(e);r||zr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=wa()),Oo(a)}}function Oo(e,t){let n=!1;nn<=Br?ko(e)||(e.n|=ut,n=!Eo(e)):n=!e.has(Te),n&&(e.add(Te),Te.deps.push(e))}function Qe(e,t,n,r,a,i){const o=zr.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&B(e)){const l=Number(r);o.forEach((c,f)=>{(f==="length"||f>=l)&&s.push(c)})}else switch(n!==void 0&&s.push(o.get(n)),t){case"add":B(e)?xa(n)&&s.push(o.get("length")):(s.push(o.get(kt)),jt(e)&&s.push(o.get(Hr)));break;case"delete":B(e)||(s.push(o.get(kt)),jt(e)&&s.push(o.get(Hr)));break;case"set":jt(e)&&s.push(o.get(kt));break}if(s.length===1)s[0]&&Ur(s[0]);else{const l=[];for(const c of s)c&&l.push(...c);Ur(wa(l))}}function Ur(e,t){const n=B(e)?e:[...e];for(const r of n)r.computed&&ti(r);for(const r of n)r.computed||ti(r)}function ti(e,t){(e!==Te||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const yl=pa("__proto__,__v_isRef,__isVue"),Po=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(ya)),xl=Ea(),wl=Ea(!1,!0),_l=Ea(!0),ni=El();function El(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=V(this);for(let i=0,o=this.length;i<o;i++)_e(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(V)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Xt();const r=V(this)[t].apply(this,n);return Gt(),r}}),e}function kl(e){const t=V(this);return _e(t,"has",e),t.hasOwnProperty(e)}function Ea(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?zl:To:t?Io:Ro).get(r))return r;const o=B(r);if(!e){if(o&&q(ni,a))return Reflect.get(ni,a,i);if(a==="hasOwnProperty")return kl}const s=Reflect.get(r,a,i);return(ya(a)?Po.has(a):yl(a))||(e||_e(r,"get",a),t)?s:he(s)?o&&xa(a)?s:s.value:ae(s)?e?No(s):On(s):s}}const Al=Co(),Ol=Co(!0);function Co(e=!1){return function(n,r,a,i){let o=n[r];if(Ht(o)&&he(o)&&!he(a))return!1;if(!e&&(!er(a)&&!Ht(a)&&(o=V(o),a=V(a)),!B(n)&&he(o)&&!he(a)))return o.value=a,!0;const s=B(n)&&xa(r)?Number(r)<n.length:q(n,r),l=Reflect.set(n,r,a,i);return n===V(i)&&(s?mn(a,o)&&Qe(n,"set",r,a):Qe(n,"add",r,a)),l}}function Pl(e,t){const n=q(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&Qe(e,"delete",t,void 0),r}function Cl(e,t){const n=Reflect.has(e,t);return(!ya(t)||!Po.has(t))&&_e(e,"has",t),n}function Sl(e){return _e(e,"iterate",B(e)?"length":kt),Reflect.ownKeys(e)}const So={get:xl,set:Al,deleteProperty:Pl,has:Cl,ownKeys:Sl},Rl={get:_l,set(e,t){return!0},deleteProperty(e,t){return!0}},Il=be({},So,{get:wl,set:Ol}),ka=e=>e,mr=e=>Reflect.getPrototypeOf(e);function Tn(e,t,n=!1,r=!1){e=e.__v_raw;const a=V(e),i=V(t);n||(t!==i&&_e(a,"get",t),_e(a,"get",i));const{has:o}=mr(a),s=r?ka:n?Pa:pn;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function Nn(e,t=!1){const n=this.__v_raw,r=V(n),a=V(e);return t||(e!==a&&_e(r,"has",e),_e(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function Mn(e,t=!1){return e=e.__v_raw,!t&&_e(V(e),"iterate",kt),Reflect.get(e,"size",e)}function ri(e){e=V(e);const t=V(this);return mr(t).has.call(t,e)||(t.add(e),Qe(t,"add",e,e)),this}function ai(e,t){t=V(t);const n=V(this),{has:r,get:a}=mr(n);let i=r.call(n,e);i||(e=V(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?mn(t,o)&&Qe(n,"set",e,t):Qe(n,"add",e,t),this}function ii(e){const t=V(this),{has:n,get:r}=mr(t);let a=n.call(t,e);a||(e=V(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&Qe(t,"delete",e,void 0),i}function oi(){const e=V(this),t=e.size!==0,n=e.clear();return t&&Qe(e,"clear",void 0,void 0),n}function Ln(e,t){return function(r,a){const i=this,o=i.__v_raw,s=V(o),l=t?ka:e?Pa:pn;return!e&&_e(s,"iterate",kt),o.forEach((c,f)=>r.call(a,l(c),l(f),i))}}function Fn(e,t,n){return function(...r){const a=this.__v_raw,i=V(a),o=jt(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=a[e](...r),f=n?ka:t?Pa:pn;return!t&&_e(i,"iterate",l?Hr:kt),{next(){const{value:d,done:p}=c.next();return p?{value:d,done:p}:{value:s?[f(d[0]),f(d[1])]:f(d),done:p}},[Symbol.iterator](){return this}}}}function at(e){return function(...t){return e==="delete"?!1:this}}function Tl(){const e={get(i){return Tn(this,i)},get size(){return Mn(this)},has:Nn,add:ri,set:ai,delete:ii,clear:oi,forEach:Ln(!1,!1)},t={get(i){return Tn(this,i,!1,!0)},get size(){return Mn(this)},has:Nn,add:ri,set:ai,delete:ii,clear:oi,forEach:Ln(!1,!0)},n={get(i){return Tn(this,i,!0)},get size(){return Mn(this,!0)},has(i){return Nn.call(this,i,!0)},add:at("add"),set:at("set"),delete:at("delete"),clear:at("clear"),forEach:Ln(!0,!1)},r={get(i){return Tn(this,i,!0,!0)},get size(){return Mn(this,!0)},has(i){return Nn.call(this,i,!0)},add:at("add"),set:at("set"),delete:at("delete"),clear:at("clear"),forEach:Ln(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=Fn(i,!1,!1),n[i]=Fn(i,!0,!1),t[i]=Fn(i,!1,!0),r[i]=Fn(i,!0,!0)}),[e,n,t,r]}const[Nl,Ml,Ll,Fl]=Tl();function Aa(e,t){const n=t?e?Fl:Ll:e?Ml:Nl;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(q(n,a)&&a in r?n:r,a,i)}const jl={get:Aa(!1,!1)},$l={get:Aa(!1,!0)},Dl={get:Aa(!0,!1)},Ro=new WeakMap,Io=new WeakMap,To=new WeakMap,zl=new WeakMap;function Bl(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Hl(e){return e.__v_skip||!Object.isExtensible(e)?0:Bl(fl(e))}function On(e){return Ht(e)?e:Oa(e,!1,So,jl,Ro)}function Ul(e){return Oa(e,!1,Il,$l,Io)}function No(e){return Oa(e,!0,Rl,Dl,To)}function Oa(e,t,n,r,a){if(!ae(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=Hl(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function $t(e){return Ht(e)?$t(e.__v_raw):!!(e&&e.__v_isReactive)}function Ht(e){return!!(e&&e.__v_isReadonly)}function er(e){return!!(e&&e.__v_isShallow)}function Mo(e){return $t(e)||Ht(e)}function V(e){const t=e&&e.__v_raw;return t?V(t):e}function Lo(e){return Zn(e,"__v_skip",!0),e}const pn=e=>ae(e)?On(e):e,Pa=e=>ae(e)?No(e):e;function Fo(e){ft&&Te&&(e=V(e),Oo(e.dep||(e.dep=wa())))}function jo(e,t){e=V(e);const n=e.dep;n&&Ur(n)}function he(e){return!!(e&&e.__v_isRef===!0)}function Wl(e){return $o(e,!1)}function Yl(e){return $o(e,!0)}function $o(e,t){return he(e)?e:new Kl(e,t)}class Kl{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:V(t),this._value=n?t:pn(t)}get value(){return Fo(this),this._value}set value(t){const n=this.__v_isShallow||er(t)||Ht(t);t=n?t:V(t),mn(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:pn(t),jo(this))}}function Dt(e){return he(e)?e.value:e}const ql={get:(e,t,n)=>Dt(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return he(a)&&!he(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function Do(e){return $t(e)?e:new Proxy(e,ql)}var zo;class Vl{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[zo]=!1,this._dirty=!0,this.effect=new _a(t,()=>{this._dirty||(this._dirty=!0,jo(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=V(this);return Fo(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}zo="__v_isReadonly";function Xl(e,t,n=!1){let r,a;const i=H(e);return i?(r=e,a=je):(r=e.get,a=e.set),new Vl(r,a,i||!a,n)}function ct(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){pr(i,t,n)}return a}function $e(e,t,n,r){if(H(e)){const i=ct(e,t,n,r);return i&&xo(i)&&i.catch(o=>{pr(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push($e(e[i],t,n,r));return a}function pr(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const c=i.ec;if(c){for(let f=0;f<c.length;f++)if(c[f](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){ct(l,null,10,[e,o,s]);return}}Gl(e,n,a,r)}function Gl(e,t,n,r=!0){console.error(e)}let hn=!1,Wr=!1;const pe=[];let We=0;const zt=[];let Ve=null,xt=0;const Bo=Promise.resolve();let Ca=null;function Ho(e){const t=Ca||Bo;return e?t.then(this?e.bind(this):e):t}function Ql(e){let t=We+1,n=pe.length;for(;t<n;){const r=t+n>>>1;gn(pe[r])<e?t=r+1:n=r}return t}function Sa(e){(!pe.length||!pe.includes(e,hn&&e.allowRecurse?We+1:We))&&(e.id==null?pe.push(e):pe.splice(Ql(e.id),0,e),Uo())}function Uo(){!hn&&!Wr&&(Wr=!0,Ca=Bo.then(Yo))}function Jl(e){const t=pe.indexOf(e);t>We&&pe.splice(t,1)}function Zl(e){B(e)?zt.push(...e):(!Ve||!Ve.includes(e,e.allowRecurse?xt+1:xt))&&zt.push(e),Uo()}function si(e,t=hn?We+1:0){for(;t<pe.length;t++){const n=pe[t];n&&n.pre&&(pe.splice(t,1),t--,n())}}function Wo(e){if(zt.length){const t=[...new Set(zt)];if(zt.length=0,Ve){Ve.push(...t);return}for(Ve=t,Ve.sort((n,r)=>gn(n)-gn(r)),xt=0;xt<Ve.length;xt++)Ve[xt]();Ve=null,xt=0}}const gn=e=>e.id==null?1/0:e.id,ef=(e,t)=>{const n=gn(e)-gn(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Yo(e){Wr=!1,hn=!0,pe.sort(ef);const t=je;try{for(We=0;We<pe.length;We++){const n=pe[We];n&&n.active!==!1&&ct(n,null,14)}}finally{We=0,pe.length=0,Wo(),hn=!1,Ca=null,(pe.length||zt.length)&&Yo()}}function tf(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||re;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const f=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:p}=r[f]||re;p&&(a=n.map(g=>de(g)?g.trim():g)),d&&(a=n.map(dl))}let s,l=r[s=Or(t)]||r[s=Or(Ke(t))];!l&&i&&(l=r[s=Or(Vt(t))]),l&&$e(l,e,6,a);const c=r[s+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,$e(c,e,6,a)}}function Ko(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!H(e)){const l=c=>{const f=Ko(c,t,!0);f&&(s=!0,be(o,f))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(ae(e)&&r.set(e,null),null):(B(i)?i.forEach(l=>o[l]=null):be(o,i),ae(e)&&r.set(e,o),o)}function hr(e,t){return!e||!fr(t)?!1:(t=t.slice(2).replace(/Once$/,""),q(e,t[0].toLowerCase()+t.slice(1))||q(e,Vt(t))||q(e,t))}let Me=null,gr=null;function tr(e){const t=Me;return Me=e,gr=e&&e.type.__scopeId||null,t}function zm(e){gr=e}function Bm(){gr=null}function nf(e,t=Me,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&gi(-1);const i=tr(t);let o;try{o=e(...a)}finally{tr(i),r._d&&gi(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Cr(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:c,render:f,renderCache:d,data:p,setupState:g,ctx:A,inheritAttrs:S}=e;let L,b;const w=tr(e);try{if(n.shapeFlag&4){const D=a||r;L=Ue(f.call(D,D,d,i,g,p,A)),b=l}else{const D=t;L=Ue(D.length>1?D(i,{attrs:l,slots:s,emit:c}):D(i,null)),b=t.props?l:rf(l)}}catch(D){sn.length=0,pr(D,e,1),L=Ae(vn)}let O=L;if(b&&S!==!1){const D=Object.keys(b),{shapeFlag:W}=O;D.length&&W&7&&(o&&D.some(va)&&(b=af(b,o)),O=Ut(O,b))}return n.dirs&&(O=Ut(O),O.dirs=O.dirs?O.dirs.concat(n.dirs):n.dirs),n.transition&&(O.transition=n.transition),L=O,tr(w),L}const rf=e=>{let t;for(const n in e)(n==="class"||n==="style"||fr(n))&&((t||(t={}))[n]=e[n]);return t},af=(e,t)=>{const n={};for(const r in e)(!va(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function of(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?li(r,o,c):!!o;if(l&8){const f=t.dynamicProps;for(let d=0;d<f.length;d++){const p=f[d];if(o[p]!==r[p]&&!hr(c,p))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?li(r,o,c):!0:!!o;return!1}function li(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!hr(n,i))return!0}return!1}function sf({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const lf=e=>e.__isSuspense;function ff(e,t){t&&t.pendingBranch?B(e)?t.effects.push(...e):t.effects.push(e):Zl(e)}function Vn(e,t){if(ue){let n=ue.provides;const r=ue.parent&&ue.parent.provides;r===n&&(n=ue.provides=Object.create(r)),n[e]=t}}function Ge(e,t,n=!1){const r=ue||Me;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&H(t)?t.call(r.proxy):t}}const jn={};function an(e,t,n){return qo(e,t,n)}function qo(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=re){const s=gl()===(ue==null?void 0:ue.scope)?ue:null;let l,c=!1,f=!1;if(he(e)?(l=()=>e.value,c=er(e)):$t(e)?(l=()=>e,r=!0):B(e)?(f=!0,c=e.some(O=>$t(O)||er(O)),l=()=>e.map(O=>{if(he(O))return O.value;if($t(O))return Nt(O);if(H(O))return ct(O,s,2)})):H(e)?t?l=()=>ct(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return d&&d(),$e(e,s,3,[p])}:l=je,t&&r){const O=l;l=()=>Nt(O())}let d,p=O=>{d=b.onStop=()=>{ct(O,s,4)}},g;if(yn)if(p=je,t?n&&$e(t,s,3,[l(),f?[]:void 0,p]):l(),a==="sync"){const O=oc();g=O.__watcherHandles||(O.__watcherHandles=[])}else return je;let A=f?new Array(e.length).fill(jn):jn;const S=()=>{if(b.active)if(t){const O=b.run();(r||c||(f?O.some((D,W)=>mn(D,A[W])):mn(O,A)))&&(d&&d(),$e(t,s,3,[O,A===jn?void 0:f&&A[0]===jn?[]:A,p]),A=O)}else b.run()};S.allowRecurse=!!t;let L;a==="sync"?L=S:a==="post"?L=()=>we(S,s&&s.suspense):(S.pre=!0,s&&(S.id=s.uid),L=()=>Sa(S));const b=new _a(l,L);t?n?S():A=b.run():a==="post"?we(b.run.bind(b),s&&s.suspense):b.run();const w=()=>{b.stop(),s&&s.scope&&ba(s.scope.effects,b)};return g&&g.push(w),w}function cf(e,t,n){const r=this.proxy,a=de(e)?e.includes(".")?Vo(r,e):()=>r[e]:e.bind(r,r);let i;H(t)?i=t:(i=t.handler,n=t);const o=ue;Wt(this);const s=qo(a,i.bind(r),n);return o?Wt(o):At(),s}function Vo(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function Nt(e,t){if(!ae(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),he(e))Nt(e.value,t);else if(B(e))for(let n=0;n<e.length;n++)Nt(e[n],t);else if(yo(e)||jt(e))e.forEach(n=>{Nt(n,t)});else if(_o(e))for(const n in e)Nt(e[n],t);return e}function Pn(e){return H(e)?{setup:e,name:e.name}:e}const Xn=e=>!!e.type.__asyncLoader,Xo=e=>e.type.__isKeepAlive;function uf(e,t){Go(e,"a",t)}function df(e,t){Go(e,"da",t)}function Go(e,t,n=ue){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(vr(t,r,n),n){let a=n.parent;for(;a&&a.parent;)Xo(a.parent.vnode)&&mf(r,t,n,a),a=a.parent}}function mf(e,t,n,r){const a=vr(t,e,r,!0);Qo(()=>{ba(r[t],a)},n)}function vr(e,t,n=ue,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Xt(),Wt(n);const s=$e(t,n,e,o);return At(),Gt(),s});return r?a.unshift(i):a.push(i),i}}const tt=e=>(t,n=ue)=>(!yn||e==="sp")&&vr(e,(...r)=>t(...r),n),pf=tt("bm"),hf=tt("m"),gf=tt("bu"),vf=tt("u"),bf=tt("bum"),Qo=tt("um"),yf=tt("sp"),xf=tt("rtg"),wf=tt("rtc");function _f(e,t=ue){vr("ec",e,t)}function vt(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(Xt(),$e(l,n,8,[e.el,s,e,t]),Gt())}}const Jo="components";function Ef(e,t){return Af(Jo,e,!0,t)||e}const kf=Symbol();function Af(e,t,n=!0,r=!1){const a=Me||ue;if(a){const i=a.type;if(e===Jo){const s=rc(i,!1);if(s&&(s===t||s===Ke(t)||s===dr(Ke(t))))return i}const o=fi(a[e]||i[e],t)||fi(a.appContext[e],t);return!o&&r?i:o}}function fi(e,t){return e&&(e[t]||e[Ke(t)]||e[dr(Ke(t))])}function Hm(e,t,n,r){let a;const i=n&&n[r];if(B(e)||de(e)){a=new Array(e.length);for(let o=0,s=e.length;o<s;o++)a[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){a=new Array(e);for(let o=0;o<e;o++)a[o]=t(o+1,o,void 0,i&&i[o])}else if(ae(e))if(e[Symbol.iterator])a=Array.from(e,(o,s)=>t(o,s,void 0,i&&i[s]));else{const o=Object.keys(e);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const c=o[s];a[s]=t(e[c],c,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}const Yr=e=>e?cs(e)?Na(e)||e.proxy:Yr(e.parent):null,on=be(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Yr(e.parent),$root:e=>Yr(e.root),$emit:e=>e.emit,$options:e=>Ra(e),$forceUpdate:e=>e.f||(e.f=()=>Sa(e.update)),$nextTick:e=>e.n||(e.n=Ho.bind(e.proxy)),$watch:e=>cf.bind(e)}),Sr=(e,t)=>e!==re&&!e.__isScriptSetup&&q(e,t),Of={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let c;if(t[0]!=="$"){const g=o[t];if(g!==void 0)switch(g){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(Sr(r,t))return o[t]=1,r[t];if(a!==re&&q(a,t))return o[t]=2,a[t];if((c=e.propsOptions[0])&&q(c,t))return o[t]=3,i[t];if(n!==re&&q(n,t))return o[t]=4,n[t];Kr&&(o[t]=0)}}const f=on[t];let d,p;if(f)return t==="$attrs"&&_e(e,"get",t),f(e);if((d=s.__cssModules)&&(d=d[t]))return d;if(n!==re&&q(n,t))return o[t]=4,n[t];if(p=l.config.globalProperties,q(p,t))return p[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return Sr(a,t)?(a[t]=n,!0):r!==re&&q(r,t)?(r[t]=n,!0):q(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==re&&q(e,o)||Sr(t,o)||(s=i[0])&&q(s,o)||q(r,o)||q(on,o)||q(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:q(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let Kr=!0;function Pf(e){const t=Ra(e),n=e.proxy,r=e.ctx;Kr=!1,t.beforeCreate&&ci(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:c,created:f,beforeMount:d,mounted:p,beforeUpdate:g,updated:A,activated:S,deactivated:L,beforeDestroy:b,beforeUnmount:w,destroyed:O,unmounted:D,render:W,renderTracked:ne,renderTriggered:se,errorCaptured:Ee,serverPrefetch:ge,expose:Pe,inheritAttrs:rt,components:ze,directives:Ct,filters:ht}=t;if(c&&Cf(c,r,null,e.appContext.config.unwrapInjectedRef),o)for(const J in o){const G=o[J];H(G)&&(r[J]=G.bind(n))}if(a){const J=a.call(n,n);ae(J)&&(e.data=On(J))}if(Kr=!0,i)for(const J in i){const G=i[J],Ce=H(G)?G.bind(n,n):H(G.get)?G.get.bind(n,n):je,gt=!H(G)&&H(G.set)?G.set.bind(n):je,Se=oe({get:Ce,set:gt});Object.defineProperty(r,J,{enumerable:!0,configurable:!0,get:()=>Se.value,set:ye=>Se.value=ye})}if(s)for(const J in s)Zo(s[J],r,n,J);if(l){const J=H(l)?l.call(n):l;Reflect.ownKeys(J).forEach(G=>{Vn(G,J[G])})}f&&ci(f,e,"c");function fe(J,G){B(G)?G.forEach(Ce=>J(Ce.bind(n))):G&&J(G.bind(n))}if(fe(pf,d),fe(hf,p),fe(gf,g),fe(vf,A),fe(uf,S),fe(df,L),fe(_f,Ee),fe(wf,ne),fe(xf,se),fe(bf,w),fe(Qo,D),fe(yf,ge),B(Pe))if(Pe.length){const J=e.exposed||(e.exposed={});Pe.forEach(G=>{Object.defineProperty(J,G,{get:()=>n[G],set:Ce=>n[G]=Ce})})}else e.exposed||(e.exposed={});W&&e.render===je&&(e.render=W),rt!=null&&(e.inheritAttrs=rt),ze&&(e.components=ze),Ct&&(e.directives=Ct)}function Cf(e,t,n=je,r=!1){B(e)&&(e=qr(e));for(const a in e){const i=e[a];let o;ae(i)?"default"in i?o=Ge(i.from||a,i.default,!0):o=Ge(i.from||a):o=Ge(i),he(o)&&r?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):t[a]=o}}function ci(e,t,n){$e(B(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Zo(e,t,n,r){const a=r.includes(".")?Vo(n,r):()=>n[r];if(de(e)){const i=t[e];H(i)&&an(a,i)}else if(H(e))an(a,e.bind(n));else if(ae(e))if(B(e))e.forEach(i=>Zo(i,t,n,r));else{const i=H(e.handler)?e.handler.bind(n):t[e.handler];H(i)&&an(a,i,e)}}function Ra(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(c=>nr(l,c,o,!0)),nr(l,t,o)),ae(t)&&i.set(t,l),l}function nr(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&nr(e,i,n,!0),a&&a.forEach(o=>nr(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=Sf[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const Sf={data:ui,props:yt,emits:yt,methods:yt,computed:yt,beforeCreate:ve,created:ve,beforeMount:ve,mounted:ve,beforeUpdate:ve,updated:ve,beforeDestroy:ve,beforeUnmount:ve,destroyed:ve,unmounted:ve,activated:ve,deactivated:ve,errorCaptured:ve,serverPrefetch:ve,components:yt,directives:yt,watch:If,provide:ui,inject:Rf};function ui(e,t){return t?e?function(){return be(H(e)?e.call(this,this):e,H(t)?t.call(this,this):t)}:t:e}function Rf(e,t){return yt(qr(e),qr(t))}function qr(e){if(B(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ve(e,t){return e?[...new Set([].concat(e,t))]:t}function yt(e,t){return e?be(be(Object.create(null),e),t):t}function If(e,t){if(!e)return t;if(!t)return e;const n=be(Object.create(null),e);for(const r in t)n[r]=ve(e[r],t[r]);return n}function Tf(e,t,n,r=!1){const a={},i={};Zn(i,yr,1),e.propsDefaults=Object.create(null),es(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:Ul(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function Nf(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=V(a),[l]=e.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=e.vnode.dynamicProps;for(let d=0;d<f.length;d++){let p=f[d];if(hr(e.emitsOptions,p))continue;const g=t[p];if(l)if(q(i,p))g!==i[p]&&(i[p]=g,c=!0);else{const A=Ke(p);a[A]=Vr(l,s,A,g,e,!1)}else g!==i[p]&&(i[p]=g,c=!0)}}}else{es(e,t,a,i)&&(c=!0);let f;for(const d in s)(!t||!q(t,d)&&((f=Vt(d))===d||!q(t,f)))&&(l?n&&(n[d]!==void 0||n[f]!==void 0)&&(a[d]=Vr(l,s,d,void 0,e,!0)):delete a[d]);if(i!==s)for(const d in i)(!t||!q(t,d))&&(delete i[d],c=!0)}c&&Qe(e,"set","$attrs")}function es(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(qn(l))continue;const c=t[l];let f;a&&q(a,f=Ke(l))?!i||!i.includes(f)?n[f]=c:(s||(s={}))[f]=c:hr(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=V(n),c=s||re;for(let f=0;f<i.length;f++){const d=i[f];n[d]=Vr(a,l,d,c[d],e,!q(c,d))}}return o}function Vr(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=q(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&H(l)){const{propsDefaults:c}=a;n in c?r=c[n]:(Wt(a),r=c[n]=l.call(null,t),At())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===Vt(n))&&(r=!0))}return r}function ts(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!H(e)){const f=d=>{l=!0;const[p,g]=ts(d,t,!0);be(o,p),g&&s.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!i&&!l)return ae(e)&&r.set(e,Ft),Ft;if(B(i))for(let f=0;f<i.length;f++){const d=Ke(i[f]);di(d)&&(o[d]=re)}else if(i)for(const f in i){const d=Ke(f);if(di(d)){const p=i[f],g=o[d]=B(p)||H(p)?{type:p}:Object.assign({},p);if(g){const A=hi(Boolean,g.type),S=hi(String,g.type);g[0]=A>-1,g[1]=S<0||A<S,(A>-1||q(g,"default"))&&s.push(d)}}}const c=[o,s];return ae(e)&&r.set(e,c),c}function di(e){return e[0]!=="$"}function mi(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function pi(e,t){return mi(e)===mi(t)}function hi(e,t){return B(t)?t.findIndex(n=>pi(n,e)):H(t)&&pi(t,e)?0:-1}const ns=e=>e[0]==="_"||e==="$stable",Ia=e=>B(e)?e.map(Ue):[Ue(e)],Mf=(e,t,n)=>{if(t._n)return t;const r=nf((...a)=>Ia(t(...a)),n);return r._c=!1,r},rs=(e,t,n)=>{const r=e._ctx;for(const a in e){if(ns(a))continue;const i=e[a];if(H(i))t[a]=Mf(a,i,r);else if(i!=null){const o=Ia(i);t[a]=()=>o}}},as=(e,t)=>{const n=Ia(t);e.slots.default=()=>n},Lf=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=V(t),Zn(t,"_",n)):rs(t,e.slots={})}else e.slots={},t&&as(e,t);Zn(e.slots,yr,1)},Ff=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=re;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(be(a,t),!n&&s===1&&delete a._):(i=!t.$stable,rs(t,a)),o=t}else t&&(as(e,t),o={default:1});if(i)for(const s in a)!ns(s)&&!(s in o)&&delete a[s]};function is(){return{app:null,config:{isNativeTag:ol,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let jf=0;function $f(e,t){return function(r,a=null){H(r)||(r=Object.assign({},r)),a!=null&&!ae(a)&&(a=null);const i=is(),o=new Set;let s=!1;const l=i.app={_uid:jf++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:sc,get config(){return i.config},set config(c){},use(c,...f){return o.has(c)||(c&&H(c.install)?(o.add(c),c.install(l,...f)):H(c)&&(o.add(c),c(l,...f))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,f){return f?(i.components[c]=f,l):i.components[c]},directive(c,f){return f?(i.directives[c]=f,l):i.directives[c]},mount(c,f,d){if(!s){const p=Ae(r,a);return p.appContext=i,f&&t?t(p,c):e(p,c,d),s=!0,l._container=c,c.__vue_app__=l,Na(p.component)||p.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,f){return i.provides[c]=f,l}};return l}}function Xr(e,t,n,r,a=!1){if(B(e)){e.forEach((p,g)=>Xr(p,t&&(B(t)?t[g]:t),n,r,a));return}if(Xn(r)&&!a)return;const i=r.shapeFlag&4?Na(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,c=t&&t.r,f=s.refs===re?s.refs={}:s.refs,d=s.setupState;if(c!=null&&c!==l&&(de(c)?(f[c]=null,q(d,c)&&(d[c]=null)):he(c)&&(c.value=null)),H(l))ct(l,s,12,[o,f]);else{const p=de(l),g=he(l);if(p||g){const A=()=>{if(e.f){const S=p?q(d,l)?d[l]:f[l]:l.value;a?B(S)&&ba(S,i):B(S)?S.includes(i)||S.push(i):p?(f[l]=[i],q(d,l)&&(d[l]=f[l])):(l.value=[i],e.k&&(f[e.k]=l.value))}else p?(f[l]=o,q(d,l)&&(d[l]=o)):g&&(l.value=o,e.k&&(f[e.k]=o))};o?(A.id=-1,we(A,n)):A()}}}const we=ff;function Df(e){return zf(e)}function zf(e,t){const n=ml();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:c,setElementText:f,parentNode:d,nextSibling:p,setScopeId:g=je,insertStaticContent:A}=e,S=(u,m,h,v=null,x=null,k=null,R=!1,E=null,P=!!m.dynamicChildren)=>{if(u===m)return;u&&!en(u,m)&&(v=C(u),ye(u,x,k,!0),u=null),m.patchFlag===-2&&(P=!1,m.dynamicChildren=null);const{type:_,ref:j,shapeFlag:N}=m;switch(_){case br:L(u,m,h,v);break;case vn:b(u,m,h,v);break;case Rr:u==null&&w(m,h,v,R);break;case Xe:ze(u,m,h,v,x,k,R,E,P);break;default:N&1?W(u,m,h,v,x,k,R,E,P):N&6?Ct(u,m,h,v,x,k,R,E,P):(N&64||N&128)&&_.process(u,m,h,v,x,k,R,E,P,K)}j!=null&&x&&Xr(j,u&&u.ref,k,m||u,!m)},L=(u,m,h,v)=>{if(u==null)r(m.el=s(m.children),h,v);else{const x=m.el=u.el;m.children!==u.children&&c(x,m.children)}},b=(u,m,h,v)=>{u==null?r(m.el=l(m.children||""),h,v):m.el=u.el},w=(u,m,h,v)=>{[u.el,u.anchor]=A(u.children,m,h,v,u.el,u.anchor)},O=({el:u,anchor:m},h,v)=>{let x;for(;u&&u!==m;)x=p(u),r(u,h,v),u=x;r(m,h,v)},D=({el:u,anchor:m})=>{let h;for(;u&&u!==m;)h=p(u),a(u),u=h;a(m)},W=(u,m,h,v,x,k,R,E,P)=>{R=R||m.type==="svg",u==null?ne(m,h,v,x,k,R,E,P):ge(u,m,x,k,R,E,P)},ne=(u,m,h,v,x,k,R,E)=>{let P,_;const{type:j,props:N,shapeFlag:$,transition:z,dirs:Y}=u;if(P=u.el=o(u.type,k,N&&N.is,N),$&8?f(P,u.children):$&16&&Ee(u.children,P,null,v,x,k&&j!=="foreignObject",R,E),Y&&vt(u,null,v,"created"),se(P,u,u.scopeId,R,v),N){for(const Q in N)Q!=="value"&&!qn(Q)&&i(P,Q,null,N[Q],k,u.children,v,x,I);"value"in N&&i(P,"value",null,N.value),(_=N.onVnodeBeforeMount)&&He(_,v,u)}Y&&vt(u,null,v,"beforeMount");const Z=(!x||x&&!x.pendingBranch)&&z&&!z.persisted;Z&&z.beforeEnter(P),r(P,m,h),((_=N&&N.onVnodeMounted)||Z||Y)&&we(()=>{_&&He(_,v,u),Z&&z.enter(P),Y&&vt(u,null,v,"mounted")},x)},se=(u,m,h,v,x)=>{if(h&&g(u,h),v)for(let k=0;k<v.length;k++)g(u,v[k]);if(x){let k=x.subTree;if(m===k){const R=x.vnode;se(u,R,R.scopeId,R.slotScopeIds,x.parent)}}},Ee=(u,m,h,v,x,k,R,E,P=0)=>{for(let _=P;_<u.length;_++){const j=u[_]=E?st(u[_]):Ue(u[_]);S(null,j,m,h,v,x,k,R,E)}},ge=(u,m,h,v,x,k,R)=>{const E=m.el=u.el;let{patchFlag:P,dynamicChildren:_,dirs:j}=m;P|=u.patchFlag&16;const N=u.props||re,$=m.props||re;let z;h&&bt(h,!1),(z=$.onVnodeBeforeUpdate)&&He(z,h,m,u),j&&vt(m,u,h,"beforeUpdate"),h&&bt(h,!0);const Y=x&&m.type!=="foreignObject";if(_?Pe(u.dynamicChildren,_,E,h,v,Y,k):R||G(u,m,E,null,h,v,Y,k,!1),P>0){if(P&16)rt(E,m,N,$,h,v,x);else if(P&2&&N.class!==$.class&&i(E,"class",null,$.class,x),P&4&&i(E,"style",N.style,$.style,x),P&8){const Z=m.dynamicProps;for(let Q=0;Q<Z.length;Q++){const ce=Z[Q],Re=N[ce],Rt=$[ce];(Rt!==Re||ce==="value")&&i(E,ce,Re,Rt,x,u.children,h,v,I)}}P&1&&u.children!==m.children&&f(E,m.children)}else!R&&_==null&&rt(E,m,N,$,h,v,x);((z=$.onVnodeUpdated)||j)&&we(()=>{z&&He(z,h,m,u),j&&vt(m,u,h,"updated")},v)},Pe=(u,m,h,v,x,k,R)=>{for(let E=0;E<m.length;E++){const P=u[E],_=m[E],j=P.el&&(P.type===Xe||!en(P,_)||P.shapeFlag&70)?d(P.el):h;S(P,_,j,null,v,x,k,R,!0)}},rt=(u,m,h,v,x,k,R)=>{if(h!==v){if(h!==re)for(const E in h)!qn(E)&&!(E in v)&&i(u,E,h[E],null,R,m.children,x,k,I);for(const E in v){if(qn(E))continue;const P=v[E],_=h[E];P!==_&&E!=="value"&&i(u,E,_,P,R,m.children,x,k,I)}"value"in v&&i(u,"value",h.value,v.value)}},ze=(u,m,h,v,x,k,R,E,P)=>{const _=m.el=u?u.el:s(""),j=m.anchor=u?u.anchor:s("");let{patchFlag:N,dynamicChildren:$,slotScopeIds:z}=m;z&&(E=E?E.concat(z):z),u==null?(r(_,h,v),r(j,h,v),Ee(m.children,h,j,x,k,R,E,P)):N>0&&N&64&&$&&u.dynamicChildren?(Pe(u.dynamicChildren,$,h,x,k,R,E),(m.key!=null||x&&m===x.subTree)&&os(u,m,!0)):G(u,m,h,j,x,k,R,E,P)},Ct=(u,m,h,v,x,k,R,E,P)=>{m.slotScopeIds=E,u==null?m.shapeFlag&512?x.ctx.activate(m,h,v,R,P):ht(m,h,v,x,k,R,P):Jt(u,m,P)},ht=(u,m,h,v,x,k,R)=>{const E=u.component=Jf(u,v,x);if(Xo(u)&&(E.ctx.renderer=K),Zf(E),E.asyncDep){if(x&&x.registerDep(E,fe),!u.el){const P=E.subTree=Ae(vn);b(null,P,m,h)}return}fe(E,u,m,h,x,k,R)},Jt=(u,m,h)=>{const v=m.component=u.component;if(of(u,m,h))if(v.asyncDep&&!v.asyncResolved){J(v,m,h);return}else v.next=m,Jl(v.update),v.update();else m.el=u.el,v.vnode=m},fe=(u,m,h,v,x,k,R)=>{const E=()=>{if(u.isMounted){let{next:j,bu:N,u:$,parent:z,vnode:Y}=u,Z=j,Q;bt(u,!1),j?(j.el=Y.el,J(u,j,R)):j=Y,N&&Pr(N),(Q=j.props&&j.props.onVnodeBeforeUpdate)&&He(Q,z,j,Y),bt(u,!0);const ce=Cr(u),Re=u.subTree;u.subTree=ce,S(Re,ce,d(Re.el),C(Re),u,x,k),j.el=ce.el,Z===null&&sf(u,ce.el),$&&we($,x),(Q=j.props&&j.props.onVnodeUpdated)&&we(()=>He(Q,z,j,Y),x)}else{let j;const{el:N,props:$}=m,{bm:z,m:Y,parent:Z}=u,Q=Xn(m);if(bt(u,!1),z&&Pr(z),!Q&&(j=$&&$.onVnodeBeforeMount)&&He(j,Z,m),bt(u,!0),N&&U){const ce=()=>{u.subTree=Cr(u),U(N,u.subTree,u,x,null)};Q?m.type.__asyncLoader().then(()=>!u.isUnmounted&&ce()):ce()}else{const ce=u.subTree=Cr(u);S(null,ce,h,v,u,x,k),m.el=ce.el}if(Y&&we(Y,x),!Q&&(j=$&&$.onVnodeMounted)){const ce=m;we(()=>He(j,Z,ce),x)}(m.shapeFlag&256||Z&&Xn(Z.vnode)&&Z.vnode.shapeFlag&256)&&u.a&&we(u.a,x),u.isMounted=!0,m=h=v=null}},P=u.effect=new _a(E,()=>Sa(_),u.scope),_=u.update=()=>P.run();_.id=u.uid,bt(u,!0),_()},J=(u,m,h)=>{m.component=u;const v=u.vnode.props;u.vnode=m,u.next=null,Nf(u,m.props,v,h),Ff(u,m.children,h),Xt(),si(),Gt()},G=(u,m,h,v,x,k,R,E,P=!1)=>{const _=u&&u.children,j=u?u.shapeFlag:0,N=m.children,{patchFlag:$,shapeFlag:z}=m;if($>0){if($&128){gt(_,N,h,v,x,k,R,E,P);return}else if($&256){Ce(_,N,h,v,x,k,R,E,P);return}}z&8?(j&16&&I(_,x,k),N!==_&&f(h,N)):j&16?z&16?gt(_,N,h,v,x,k,R,E,P):I(_,x,k,!0):(j&8&&f(h,""),z&16&&Ee(N,h,v,x,k,R,E,P))},Ce=(u,m,h,v,x,k,R,E,P)=>{u=u||Ft,m=m||Ft;const _=u.length,j=m.length,N=Math.min(_,j);let $;for($=0;$<N;$++){const z=m[$]=P?st(m[$]):Ue(m[$]);S(u[$],z,h,null,x,k,R,E,P)}_>j?I(u,x,k,!0,!1,N):Ee(m,h,v,x,k,R,E,P,N)},gt=(u,m,h,v,x,k,R,E,P)=>{let _=0;const j=m.length;let N=u.length-1,$=j-1;for(;_<=N&&_<=$;){const z=u[_],Y=m[_]=P?st(m[_]):Ue(m[_]);if(en(z,Y))S(z,Y,h,null,x,k,R,E,P);else break;_++}for(;_<=N&&_<=$;){const z=u[N],Y=m[$]=P?st(m[$]):Ue(m[$]);if(en(z,Y))S(z,Y,h,null,x,k,R,E,P);else break;N--,$--}if(_>N){if(_<=$){const z=$+1,Y=z<j?m[z].el:v;for(;_<=$;)S(null,m[_]=P?st(m[_]):Ue(m[_]),h,Y,x,k,R,E,P),_++}}else if(_>$)for(;_<=N;)ye(u[_],x,k,!0),_++;else{const z=_,Y=_,Z=new Map;for(_=Y;_<=$;_++){const ke=m[_]=P?st(m[_]):Ue(m[_]);ke.key!=null&&Z.set(ke.key,_)}let Q,ce=0;const Re=$-Y+1;let Rt=!1,Ga=0;const Zt=new Array(Re);for(_=0;_<Re;_++)Zt[_]=0;for(_=z;_<=N;_++){const ke=u[_];if(ce>=Re){ye(ke,x,k,!0);continue}let Be;if(ke.key!=null)Be=Z.get(ke.key);else for(Q=Y;Q<=$;Q++)if(Zt[Q-Y]===0&&en(ke,m[Q])){Be=Q;break}Be===void 0?ye(ke,x,k,!0):(Zt[Be-Y]=_+1,Be>=Ga?Ga=Be:Rt=!0,S(ke,m[Be],h,null,x,k,R,E,P),ce++)}const Qa=Rt?Bf(Zt):Ft;for(Q=Qa.length-1,_=Re-1;_>=0;_--){const ke=Y+_,Be=m[ke],Ja=ke+1<j?m[ke+1].el:v;Zt[_]===0?S(null,Be,h,Ja,x,k,R,E,P):Rt&&(Q<0||_!==Qa[Q]?Se(Be,h,Ja,2):Q--)}}},Se=(u,m,h,v,x=null)=>{const{el:k,type:R,transition:E,children:P,shapeFlag:_}=u;if(_&6){Se(u.component.subTree,m,h,v);return}if(_&128){u.suspense.move(m,h,v);return}if(_&64){R.move(u,m,h,K);return}if(R===Xe){r(k,m,h);for(let N=0;N<P.length;N++)Se(P[N],m,h,v);r(u.anchor,m,h);return}if(R===Rr){O(u,m,h);return}if(v!==2&&_&1&&E)if(v===0)E.beforeEnter(k),r(k,m,h),we(()=>E.enter(k),x);else{const{leave:N,delayLeave:$,afterLeave:z}=E,Y=()=>r(k,m,h),Z=()=>{N(k,()=>{Y(),z&&z()})};$?$(k,Y,Z):Z()}else r(k,m,h)},ye=(u,m,h,v=!1,x=!1)=>{const{type:k,props:R,ref:E,children:P,dynamicChildren:_,shapeFlag:j,patchFlag:N,dirs:$}=u;if(E!=null&&Xr(E,null,h,u,!0),j&256){m.ctx.deactivate(u);return}const z=j&1&&$,Y=!Xn(u);let Z;if(Y&&(Z=R&&R.onVnodeBeforeUnmount)&&He(Z,m,u),j&6)y(u.component,h,v);else{if(j&128){u.suspense.unmount(h,v);return}z&&vt(u,null,m,"beforeUnmount"),j&64?u.type.remove(u,m,h,x,K,v):_&&(k!==Xe||N>0&&N&64)?I(_,m,h,!1,!0):(k===Xe&&N&384||!x&&j&16)&&I(P,m,h),v&&St(u)}(Y&&(Z=R&&R.onVnodeUnmounted)||z)&&we(()=>{Z&&He(Z,m,u),z&&vt(u,null,m,"unmounted")},h)},St=u=>{const{type:m,el:h,anchor:v,transition:x}=u;if(m===Xe){In(h,v);return}if(m===Rr){D(u);return}const k=()=>{a(h),x&&!x.persisted&&x.afterLeave&&x.afterLeave()};if(u.shapeFlag&1&&x&&!x.persisted){const{leave:R,delayLeave:E}=x,P=()=>R(h,k);E?E(u.el,k,P):P()}else k()},In=(u,m)=>{let h;for(;u!==m;)h=p(u),a(u),u=h;a(m)},y=(u,m,h)=>{const{bum:v,scope:x,update:k,subTree:R,um:E}=u;v&&Pr(v),x.stop(),k&&(k.active=!1,ye(R,u,m,h)),E&&we(E,m),we(()=>{u.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},I=(u,m,h,v=!1,x=!1,k=0)=>{for(let R=k;R<u.length;R++)ye(u[R],m,h,v,x)},C=u=>u.shapeFlag&6?C(u.component.subTree):u.shapeFlag&128?u.suspense.next():p(u.anchor||u.el),F=(u,m,h)=>{u==null?m._vnode&&ye(m._vnode,null,null,!0):S(m._vnode||null,u,m,null,null,null,h),si(),Wo(),m._vnode=u},K={p:S,um:ye,m:Se,r:St,mt:ht,mc:Ee,pc:G,pbc:Pe,n:C,o:e};let ie,U;return t&&([ie,U]=t(K)),{render:F,hydrate:ie,createApp:$f(F,ie)}}function bt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function os(e,t,n=!1){const r=e.children,a=t.children;if(B(r)&&B(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=st(a[i]),s.el=o.el),n||os(o,s)),s.type===br&&(s.el=o.el)}}function Bf(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(a=n[n.length-1],e[a]<c){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<c?i=s+1:o=s;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const Hf=e=>e.__isTeleport,Xe=Symbol(void 0),br=Symbol(void 0),vn=Symbol(void 0),Rr=Symbol(void 0),sn=[];let Le=null;function Uf(e=!1){sn.push(Le=e?null:[])}function Wf(){sn.pop(),Le=sn[sn.length-1]||null}let bn=1;function gi(e){bn+=e}function ss(e){return e.dynamicChildren=bn>0?Le||Ft:null,Wf(),bn>0&&Le&&Le.push(e),e}function Yf(e,t,n,r,a,i){return ss(fs(e,t,n,r,a,i,!0))}function Um(e,t,n,r,a){return ss(Ae(e,t,n,r,a,!0))}function Gr(e){return e?e.__v_isVNode===!0:!1}function en(e,t){return e.type===t.type&&e.key===t.key}const yr="__vInternal",ls=({key:e})=>e??null,Gn=({ref:e,ref_key:t,ref_for:n})=>e!=null?de(e)||he(e)||H(e)?{i:Me,r:e,k:t,f:!!n}:e:null;function fs(e,t=null,n=null,r=0,a=null,i=e===Xe?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&ls(t),ref:t&&Gn(t),scopeId:gr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:Me};return s?(Ta(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=de(n)?8:16),bn>0&&!o&&Le&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Le.push(l),l}const Ae=Kf;function Kf(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===kf)&&(e=vn),Gr(e)){const s=Ut(e,t,!0);return n&&Ta(s,n),bn>0&&!i&&Le&&(s.shapeFlag&6?Le[Le.indexOf(e)]=s:Le.push(s)),s.patchFlag|=-2,s}if(ac(e)&&(e=e.__vccOpts),t){t=qf(t);let{class:s,style:l}=t;s&&!de(s)&&(t.class=ga(s)),ae(l)&&(Mo(l)&&!B(l)&&(l=be({},l)),t.style=ha(l))}const o=de(e)?1:lf(e)?128:Hf(e)?64:ae(e)?4:H(e)?2:0;return fs(e,t,n,r,a,o,i,!0)}function qf(e){return e?Mo(e)||yr in e?be({},e):e:null}function Ut(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?Xf(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&ls(s),ref:t&&t.ref?n&&a?B(a)?a.concat(Gn(t)):[a,Gn(t)]:Gn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Xe?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Ut(e.ssContent),ssFallback:e.ssFallback&&Ut(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Vf(e=" ",t=0){return Ae(br,null,e,t)}function Ue(e){return e==null||typeof e=="boolean"?Ae(vn):B(e)?Ae(Xe,null,e.slice()):typeof e=="object"?st(e):Ae(br,null,String(e))}function st(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Ut(e)}function Ta(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(B(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),Ta(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(yr in t)?t._ctx=Me:a===3&&Me&&(Me.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else H(t)?(t={default:t,_ctx:Me},n=32):(t=String(t),r&64?(n=16,t=[Vf(t)]):n=8);e.children=t,e.shapeFlag|=n}function Xf(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=ga([t.class,r.class]));else if(a==="style")t.style=ha([t.style,r.style]);else if(fr(a)){const i=t[a],o=r[a];o&&i!==o&&!(B(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function He(e,t,n,r=null){$e(e,t,7,[n,r])}const Gf=is();let Qf=0;function Jf(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||Gf,i={uid:Qf++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new pl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ts(r,a),emitsOptions:Ko(r,a),emit:null,emitted:null,propsDefaults:re,inheritAttrs:r.inheritAttrs,ctx:re,data:re,props:re,attrs:re,slots:re,refs:re,setupState:re,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=tf.bind(null,i),e.ce&&e.ce(i),i}let ue=null;const Wt=e=>{ue=e,e.scope.on()},At=()=>{ue&&ue.scope.off(),ue=null};function cs(e){return e.vnode.shapeFlag&4}let yn=!1;function Zf(e,t=!1){yn=t;const{props:n,children:r}=e.vnode,a=cs(e);Tf(e,n,a,t),Lf(e,r);const i=a?ec(e,t):void 0;return yn=!1,i}function ec(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Lo(new Proxy(e.ctx,Of));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?nc(e):null;Wt(e),Xt();const i=ct(r,e,0,[e.props,a]);if(Gt(),At(),xo(i)){if(i.then(At,At),t)return i.then(o=>{vi(e,o,t)}).catch(o=>{pr(o,e,0)});e.asyncDep=i}else vi(e,i,t)}else us(e,t)}function vi(e,t,n){H(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ae(t)&&(e.setupState=Do(t)),us(e,n)}let bi;function us(e,t,n){const r=e.type;if(!e.render){if(!t&&bi&&!r.render){const a=r.template||Ra(e).template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,c=be(be({isCustomElement:i,delimiters:s},o),l);r.render=bi(a,c)}}e.render=r.render||je}Wt(e),Xt(),Pf(e),Gt(),At()}function tc(e){return new Proxy(e.attrs,{get(t,n){return _e(e,"get","$attrs"),t[n]}})}function nc(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=tc(e))},slots:e.slots,emit:e.emit,expose:t}}function Na(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Do(Lo(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in on)return on[n](e)},has(t,n){return n in t||n in on}}))}function rc(e,t=!0){return H(e)?e.displayName||e.name:e.name||t&&e.__name}function ac(e){return H(e)&&"__vccOpts"in e}const oe=(e,t)=>Xl(e,t,yn);function xr(e,t,n){const r=arguments.length;return r===2?ae(t)&&!B(t)?Gr(t)?Ae(e,null,[t]):Ae(e,t):Ae(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Gr(n)&&(n=[n]),Ae(e,t,n))}const ic=Symbol(""),oc=()=>Ge(ic),sc="3.2.47",lc="http://www.w3.org/2000/svg",wt=typeof document<"u"?document:null,yi=wt&&wt.createElement("template"),fc={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?wt.createElementNS(lc,e):wt.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>wt.createTextNode(e),createComment:e=>wt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>wt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{yi.innerHTML=r?`<svg>${e}</svg>`:e;const s=yi.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function cc(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function uc(e,t,n){const r=e.style,a=de(n);if(n&&!a){if(t&&!de(t))for(const i in t)n[i]==null&&Qr(r,i,"");for(const i in n)Qr(r,i,n[i])}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const xi=/\s*!important$/;function Qr(e,t,n){if(B(n))n.forEach(r=>Qr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=dc(e,t);xi.test(n)?e.setProperty(Vt(r),n.replace(xi,""),"important"):e[r]=n}}const wi=["Webkit","Moz","ms"],Ir={};function dc(e,t){const n=Ir[t];if(n)return n;let r=Ke(t);if(r!=="filter"&&r in e)return Ir[t]=r;r=dr(r);for(let a=0;a<wi.length;a++){const i=wi[a]+r;if(i in e)return Ir[t]=i}return t}const _i="http://www.w3.org/1999/xlink";function mc(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(_i,t.slice(6,t.length)):e.setAttributeNS(_i,t,n);else{const i=il(t);n==null||i&&!vo(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function pc(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n??"";return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n??"";(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let s=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=vo(n):n==null&&l==="string"?(n="",s=!0):l==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(t)}function hc(e,t,n,r){e.addEventListener(t,n,r)}function gc(e,t,n,r){e.removeEventListener(t,n,r)}function vc(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=bc(t);if(r){const c=i[t]=wc(r,a);hc(e,s,c,l)}else o&&(gc(e,s,o,l),i[t]=void 0)}}const Ei=/(?:Once|Passive|Capture)$/;function bc(e){let t;if(Ei.test(e)){t={};let r;for(;r=e.match(Ei);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Vt(e.slice(2)),t]}let Tr=0;const yc=Promise.resolve(),xc=()=>Tr||(yc.then(()=>Tr=0),Tr=Date.now());function wc(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;$e(_c(r,n.value),t,5,[r])};return n.value=e,n.attached=xc(),n}function _c(e,t){if(B(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const ki=/^on[a-z]/,Ec=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?cc(e,r,a):t==="style"?uc(e,n,r):fr(t)?va(t)||vc(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):kc(e,t,r,a))?pc(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),mc(e,t,r,a))};function kc(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&ki.test(t)&&H(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||ki.test(t)&&de(n)?!1:t in e}const Ac=be({patchProp:Ec},fc);let Ai;function Oc(){return Ai||(Ai=Df(Ac))}const Pc=(...e)=>{const t=Oc().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=Cc(r);if(!a)return;const i=t._component;!H(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function Cc(e){return de(e)?document.querySelector(e):e}const Sc=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},Rc={};function Ic(e,t){const n=Ef("router-view");return Uf(),Yf("main",null,[Ae(n)])}const Tc=Sc(Rc,[["render",Ic]]);/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Tt=typeof window<"u";function Nc(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const X=Object.assign;function Nr(e,t){const n={};for(const r in t){const a=t[r];n[r]=De(a)?a.map(e):e(a)}return n}const ln=()=>{},De=Array.isArray,Mc=/\/$/,Lc=e=>e.replace(Mc,"");function Mr(e,t,n="/"){let r,a={},i="",o="";const s=t.indexOf("#");let l=t.indexOf("?");return s<l&&s>=0&&(l=-1),l>-1&&(r=t.slice(0,l),i=t.slice(l+1,s>-1?s:t.length),a=e(i)),s>-1&&(r=r||t.slice(0,s),o=t.slice(s,t.length)),r=Dc(r??t,n),{fullPath:r+(i&&"?")+i+o,path:r,query:a,hash:o}}function Fc(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Oi(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function jc(e,t,n){const r=t.matched.length-1,a=n.matched.length-1;return r>-1&&r===a&&Yt(t.matched[r],n.matched[a])&&ds(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Yt(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function ds(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!$c(e[n],t[n]))return!1;return!0}function $c(e,t){return De(e)?Pi(e,t):De(t)?Pi(t,e):e===t}function Pi(e,t){return De(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function Dc(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let a=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],o!==".")if(o==="..")a>1&&a--;else break;return n.slice(0,a).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var xn;(function(e){e.pop="pop",e.push="push"})(xn||(xn={}));var fn;(function(e){e.back="back",e.forward="forward",e.unknown=""})(fn||(fn={}));function zc(e){if(!e)if(Tt){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Lc(e)}const Bc=/^[^#]+#/;function Hc(e,t){return e.replace(Bc,"#")+t}function Uc(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const wr=()=>({left:window.pageXOffset,top:window.pageYOffset});function Wc(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),a=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!a)return;t=Uc(a,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Ci(e,t){return(history.state?history.state.position-t:-1)+e}const Jr=new Map;function Yc(e,t){Jr.set(e,t)}function Kc(e){const t=Jr.get(e);return Jr.delete(e),t}let qc=()=>location.protocol+"//"+location.host;function ms(e,t){const{pathname:n,search:r,hash:a}=t,i=e.indexOf("#");if(i>-1){let s=a.includes(e.slice(i))?e.slice(i).length:1,l=a.slice(s);return l[0]!=="/"&&(l="/"+l),Oi(l,"")}return Oi(n,e)+r+a}function Vc(e,t,n,r){let a=[],i=[],o=null;const s=({state:p})=>{const g=ms(e,location),A=n.value,S=t.value;let L=0;if(p){if(n.value=g,t.value=p,o&&o===A){o=null;return}L=S?p.position-S.position:0}else r(g);a.forEach(b=>{b(n.value,A,{delta:L,type:xn.pop,direction:L?L>0?fn.forward:fn.back:fn.unknown})})};function l(){o=n.value}function c(p){a.push(p);const g=()=>{const A=a.indexOf(p);A>-1&&a.splice(A,1)};return i.push(g),g}function f(){const{history:p}=window;p.state&&p.replaceState(X({},p.state,{scroll:wr()}),"")}function d(){for(const p of i)p();i=[],window.removeEventListener("popstate",s),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",s),window.addEventListener("beforeunload",f),{pauseListeners:l,listen:c,destroy:d}}function Si(e,t,n,r=!1,a=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:a?wr():null}}function Xc(e){const{history:t,location:n}=window,r={value:ms(e,n)},a={value:t.state};a.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(l,c,f){const d=e.indexOf("#"),p=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+l:qc()+e+l;try{t[f?"replaceState":"pushState"](c,"",p),a.value=c}catch(g){console.error(g),n[f?"replace":"assign"](p)}}function o(l,c){const f=X({},t.state,Si(a.value.back,l,a.value.forward,!0),c,{position:a.value.position});i(l,f,!0),r.value=l}function s(l,c){const f=X({},a.value,t.state,{forward:l,scroll:wr()});i(f.current,f,!0);const d=X({},Si(r.value,l,null),{position:f.position+1},c);i(l,d,!1),r.value=l}return{location:r,state:a,push:s,replace:o}}function Gc(e){e=zc(e);const t=Xc(e),n=Vc(e,t.state,t.location,t.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const a=X({location:"",base:e,go:r,createHref:Hc.bind(null,e)},t,n);return Object.defineProperty(a,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(a,"state",{enumerable:!0,get:()=>t.state.value}),a}function Qc(e){return typeof e=="string"||e&&typeof e=="object"}function ps(e){return typeof e=="string"||typeof e=="symbol"}const it={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},hs=Symbol("");var Ri;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Ri||(Ri={}));function Kt(e,t){return X(new Error,{type:e,[hs]:!0},t)}function qe(e,t){return e instanceof Error&&hs in e&&(t==null||!!(e.type&t))}const Ii="[^/]+?",Jc={sensitive:!1,strict:!1,start:!0,end:!0},Zc=/[.+*?^${}()[\]/\\]/g;function eu(e,t){const n=X({},Jc,t),r=[];let a=n.start?"^":"";const i=[];for(const c of e){const f=c.length?[]:[90];n.strict&&!c.length&&(a+="/");for(let d=0;d<c.length;d++){const p=c[d];let g=40+(n.sensitive?.25:0);if(p.type===0)d||(a+="/"),a+=p.value.replace(Zc,"\\$&"),g+=40;else if(p.type===1){const{value:A,repeatable:S,optional:L,regexp:b}=p;i.push({name:A,repeatable:S,optional:L});const w=b||Ii;if(w!==Ii){g+=10;try{new RegExp(`(${w})`)}catch(D){throw new Error(`Invalid custom RegExp for param "${A}" (${w}): `+D.message)}}let O=S?`((?:${w})(?:/(?:${w}))*)`:`(${w})`;d||(O=L&&c.length<2?`(?:/${O})`:"/"+O),L&&(O+="?"),a+=O,g+=20,L&&(g+=-8),S&&(g+=-20),w===".*"&&(g+=-50)}f.push(g)}r.push(f)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(a+="/?"),n.end?a+="$":n.strict&&(a+="(?:/|$)");const o=new RegExp(a,n.sensitive?"":"i");function s(c){const f=c.match(o),d={};if(!f)return null;for(let p=1;p<f.length;p++){const g=f[p]||"",A=i[p-1];d[A.name]=g&&A.repeatable?g.split("/"):g}return d}function l(c){let f="",d=!1;for(const p of e){(!d||!f.endsWith("/"))&&(f+="/"),d=!1;for(const g of p)if(g.type===0)f+=g.value;else if(g.type===1){const{value:A,repeatable:S,optional:L}=g,b=A in c?c[A]:"";if(De(b)&&!S)throw new Error(`Provided param "${A}" is an array but it is not repeatable (* or + modifiers)`);const w=De(b)?b.join("/"):b;if(!w)if(L)p.length<2&&(f.endsWith("/")?f=f.slice(0,-1):d=!0);else throw new Error(`Missing required param "${A}"`);f+=w}}return f||"/"}return{re:o,score:r,keys:i,parse:s,stringify:l}}function tu(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function nu(e,t){let n=0;const r=e.score,a=t.score;for(;n<r.length&&n<a.length;){const i=tu(r[n],a[n]);if(i)return i;n++}if(Math.abs(a.length-r.length)===1){if(Ti(r))return 1;if(Ti(a))return-1}return a.length-r.length}function Ti(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const ru={type:0,value:""},au=/[a-zA-Z0-9_]/;function iu(e){if(!e)return[[]];if(e==="/")return[[ru]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${c}": ${g}`)}let n=0,r=n;const a=[];let i;function o(){i&&a.push(i),i=[]}let s=0,l,c="",f="";function d(){c&&(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),c="")}function p(){c+=l}for(;s<e.length;){if(l=e[s++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(c&&d(),o()):l===":"?(d(),n=1):p();break;case 4:p(),n=r;break;case 1:l==="("?n=2:au.test(l)?p():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&s--);break;case 2:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:n=3:f+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&s--,f="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${c}"`),d(),o(),a}function ou(e,t,n){const r=eu(iu(e.path),n),a=X(r,{record:e,parent:t,children:[],alias:[]});return t&&!a.record.aliasOf==!t.record.aliasOf&&t.children.push(a),a}function su(e,t){const n=[],r=new Map;t=Li({strict:!1,end:!0,sensitive:!1},t);function a(f){return r.get(f)}function i(f,d,p){const g=!p,A=lu(f);A.aliasOf=p&&p.record;const S=Li(t,f),L=[A];if("alias"in f){const O=typeof f.alias=="string"?[f.alias]:f.alias;for(const D of O)L.push(X({},A,{components:p?p.record.components:A.components,path:D,aliasOf:p?p.record:A}))}let b,w;for(const O of L){const{path:D}=O;if(d&&D[0]!=="/"){const W=d.record.path,ne=W[W.length-1]==="/"?"":"/";O.path=d.record.path+(D&&ne+D)}if(b=ou(O,d,S),p?p.alias.push(b):(w=w||b,w!==b&&w.alias.push(b),g&&f.name&&!Mi(b)&&o(f.name)),A.children){const W=A.children;for(let ne=0;ne<W.length;ne++)i(W[ne],b,p&&p.children[ne])}p=p||b,(b.record.components&&Object.keys(b.record.components).length||b.record.name||b.record.redirect)&&l(b)}return w?()=>{o(w)}:ln}function o(f){if(ps(f)){const d=r.get(f);d&&(r.delete(f),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(f);d>-1&&(n.splice(d,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function s(){return n}function l(f){let d=0;for(;d<n.length&&nu(f,n[d])>=0&&(f.record.path!==n[d].record.path||!gs(f,n[d]));)d++;n.splice(d,0,f),f.record.name&&!Mi(f)&&r.set(f.record.name,f)}function c(f,d){let p,g={},A,S;if("name"in f&&f.name){if(p=r.get(f.name),!p)throw Kt(1,{location:f});S=p.record.name,g=X(Ni(d.params,p.keys.filter(w=>!w.optional).map(w=>w.name)),f.params&&Ni(f.params,p.keys.map(w=>w.name))),A=p.stringify(g)}else if("path"in f)A=f.path,p=n.find(w=>w.re.test(A)),p&&(g=p.parse(A),S=p.record.name);else{if(p=d.name?r.get(d.name):n.find(w=>w.re.test(d.path)),!p)throw Kt(1,{location:f,currentLocation:d});S=p.record.name,g=X({},d.params,f.params),A=p.stringify(g)}const L=[];let b=p;for(;b;)L.unshift(b.record),b=b.parent;return{name:S,path:A,params:g,matched:L,meta:cu(L)}}return e.forEach(f=>i(f)),{addRoute:i,resolve:c,removeRoute:o,getRoutes:s,getRecordMatcher:a}}function Ni(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function lu(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:fu(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function fu(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="boolean"?n:n[r];return t}function Mi(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function cu(e){return e.reduce((t,n)=>X(t,n.meta),{})}function Li(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function gs(e,t){return t.children.some(n=>n===e||gs(e,n))}const vs=/#/g,uu=/&/g,du=/\//g,mu=/=/g,pu=/\?/g,bs=/\+/g,hu=/%5B/g,gu=/%5D/g,ys=/%5E/g,vu=/%60/g,xs=/%7B/g,bu=/%7C/g,ws=/%7D/g,yu=/%20/g;function Ma(e){return encodeURI(""+e).replace(bu,"|").replace(hu,"[").replace(gu,"]")}function xu(e){return Ma(e).replace(xs,"{").replace(ws,"}").replace(ys,"^")}function Zr(e){return Ma(e).replace(bs,"%2B").replace(yu,"+").replace(vs,"%23").replace(uu,"%26").replace(vu,"`").replace(xs,"{").replace(ws,"}").replace(ys,"^")}function wu(e){return Zr(e).replace(mu,"%3D")}function _u(e){return Ma(e).replace(vs,"%23").replace(pu,"%3F")}function Eu(e){return e==null?"":_u(e).replace(du,"%2F")}function rr(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function ku(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let a=0;a<r.length;++a){const i=r[a].replace(bs," "),o=i.indexOf("="),s=rr(o<0?i:i.slice(0,o)),l=o<0?null:rr(i.slice(o+1));if(s in t){let c=t[s];De(c)||(c=t[s]=[c]),c.push(l)}else t[s]=l}return t}function Fi(e){let t="";for(let n in e){const r=e[n];if(n=wu(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(De(r)?r.map(i=>i&&Zr(i)):[r&&Zr(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function Au(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=De(r)?r.map(a=>a==null?null:""+a):r==null?r:""+r)}return t}const Ou=Symbol(""),ji=Symbol(""),La=Symbol(""),_s=Symbol(""),ea=Symbol("");function tn(){let e=[];function t(r){return e.push(r),()=>{const a=e.indexOf(r);a>-1&&e.splice(a,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function lt(e,t,n,r,a){const i=r&&(r.enterCallbacks[a]=r.enterCallbacks[a]||[]);return()=>new Promise((o,s)=>{const l=d=>{d===!1?s(Kt(4,{from:n,to:t})):d instanceof Error?s(d):Qc(d)?s(Kt(2,{from:t,to:d})):(i&&r.enterCallbacks[a]===i&&typeof d=="function"&&i.push(d),o())},c=e.call(r&&r.instances[a],t,n,l);let f=Promise.resolve(c);e.length<3&&(f=f.then(l)),f.catch(d=>s(d))})}function Lr(e,t,n,r){const a=[];for(const i of e)for(const o in i.components){let s=i.components[o];if(!(t!=="beforeRouteEnter"&&!i.instances[o]))if(Pu(s)){const c=(s.__vccOpts||s)[t];c&&a.push(lt(c,n,r,i,o))}else{let l=s();a.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const f=Nc(c)?c.default:c;i.components[o]=f;const p=(f.__vccOpts||f)[t];return p&&lt(p,n,r,i,o)()}))}}return a}function Pu(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function $i(e){const t=Ge(La),n=Ge(_s),r=oe(()=>t.resolve(Dt(e.to))),a=oe(()=>{const{matched:l}=r.value,{length:c}=l,f=l[c-1],d=n.matched;if(!f||!d.length)return-1;const p=d.findIndex(Yt.bind(null,f));if(p>-1)return p;const g=Di(l[c-2]);return c>1&&Di(f)===g&&d[d.length-1].path!==g?d.findIndex(Yt.bind(null,l[c-2])):p}),i=oe(()=>a.value>-1&&Iu(n.params,r.value.params)),o=oe(()=>a.value>-1&&a.value===n.matched.length-1&&ds(n.params,r.value.params));function s(l={}){return Ru(l)?t[Dt(e.replace)?"replace":"push"](Dt(e.to)).catch(ln):Promise.resolve()}return{route:r,href:oe(()=>r.value.href),isActive:i,isExactActive:o,navigate:s}}const Cu=Pn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:$i,setup(e,{slots:t}){const n=On($i(e)),{options:r}=Ge(La),a=oe(()=>({[zi(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[zi(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:xr("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:a.value},i)}}}),Su=Cu;function Ru(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Iu(e,t){for(const n in t){const r=t[n],a=e[n];if(typeof r=="string"){if(r!==a)return!1}else if(!De(a)||a.length!==r.length||r.some((i,o)=>i!==a[o]))return!1}return!0}function Di(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const zi=(e,t,n)=>e??t??n,Tu=Pn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=Ge(ea),a=oe(()=>e.route||r.value),i=Ge(ji,0),o=oe(()=>{let c=Dt(i);const{matched:f}=a.value;let d;for(;(d=f[c])&&!d.components;)c++;return c}),s=oe(()=>a.value.matched[o.value]);Vn(ji,oe(()=>o.value+1)),Vn(Ou,s),Vn(ea,a);const l=Wl();return an(()=>[l.value,s.value,e.name],([c,f,d],[p,g,A])=>{f&&(f.instances[d]=c,g&&g!==f&&c&&c===p&&(f.leaveGuards.size||(f.leaveGuards=g.leaveGuards),f.updateGuards.size||(f.updateGuards=g.updateGuards))),c&&f&&(!g||!Yt(f,g)||!p)&&(f.enterCallbacks[d]||[]).forEach(S=>S(c))},{flush:"post"}),()=>{const c=a.value,f=e.name,d=s.value,p=d&&d.components[f];if(!p)return Bi(n.default,{Component:p,route:c});const g=d.props[f],A=g?g===!0?c.params:typeof g=="function"?g(c):g:null,L=xr(p,X({},A,t,{onVnodeUnmounted:b=>{b.component.isUnmounted&&(d.instances[f]=null)},ref:l}));return Bi(n.default,{Component:L,route:c})||L}}});function Bi(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Nu=Tu;function Mu(e){const t=su(e.routes,e),n=e.parseQuery||ku,r=e.stringifyQuery||Fi,a=e.history,i=tn(),o=tn(),s=tn(),l=Yl(it);let c=it;Tt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Nr.bind(null,y=>""+y),d=Nr.bind(null,Eu),p=Nr.bind(null,rr);function g(y,I){let C,F;return ps(y)?(C=t.getRecordMatcher(y),F=I):F=y,t.addRoute(F,C)}function A(y){const I=t.getRecordMatcher(y);I&&t.removeRoute(I)}function S(){return t.getRoutes().map(y=>y.record)}function L(y){return!!t.getRecordMatcher(y)}function b(y,I){if(I=X({},I||l.value),typeof y=="string"){const u=Mr(n,y,I.path),m=t.resolve({path:u.path},I),h=a.createHref(u.fullPath);return X(u,m,{params:p(m.params),hash:rr(u.hash),redirectedFrom:void 0,href:h})}let C;if("path"in y)C=X({},y,{path:Mr(n,y.path,I.path).path});else{const u=X({},y.params);for(const m in u)u[m]==null&&delete u[m];C=X({},y,{params:d(y.params)}),I.params=d(I.params)}const F=t.resolve(C,I),K=y.hash||"";F.params=f(p(F.params));const ie=Fc(r,X({},y,{hash:xu(K),path:F.path})),U=a.createHref(ie);return X({fullPath:ie,hash:K,query:r===Fi?Au(y.query):y.query||{}},F,{redirectedFrom:void 0,href:U})}function w(y){return typeof y=="string"?Mr(n,y,l.value.path):X({},y)}function O(y,I){if(c!==y)return Kt(8,{from:I,to:y})}function D(y){return se(y)}function W(y){return D(X(w(y),{replace:!0}))}function ne(y){const I=y.matched[y.matched.length-1];if(I&&I.redirect){const{redirect:C}=I;let F=typeof C=="function"?C(y):C;return typeof F=="string"&&(F=F.includes("?")||F.includes("#")?F=w(F):{path:F},F.params={}),X({query:y.query,hash:y.hash,params:"path"in F?{}:y.params},F)}}function se(y,I){const C=c=b(y),F=l.value,K=y.state,ie=y.force,U=y.replace===!0,u=ne(C);if(u)return se(X(w(u),{state:typeof u=="object"?X({},K,u.state):K,force:ie,replace:U}),I||C);const m=C;m.redirectedFrom=I;let h;return!ie&&jc(r,F,C)&&(h=Kt(16,{to:m,from:F}),gt(F,F,!0,!1)),(h?Promise.resolve(h):ge(m,F)).catch(v=>qe(v)?qe(v,2)?v:Ce(v):J(v,m,F)).then(v=>{if(v){if(qe(v,2))return se(X({replace:U},w(v.to),{state:typeof v.to=="object"?X({},K,v.to.state):K,force:ie}),I||m)}else v=rt(m,F,!0,U,K);return Pe(m,F,v),v})}function Ee(y,I){const C=O(y,I);return C?Promise.reject(C):Promise.resolve()}function ge(y,I){let C;const[F,K,ie]=Lu(y,I);C=Lr(F.reverse(),"beforeRouteLeave",y,I);for(const u of F)u.leaveGuards.forEach(m=>{C.push(lt(m,y,I))});const U=Ee.bind(null,y,I);return C.push(U),It(C).then(()=>{C=[];for(const u of i.list())C.push(lt(u,y,I));return C.push(U),It(C)}).then(()=>{C=Lr(K,"beforeRouteUpdate",y,I);for(const u of K)u.updateGuards.forEach(m=>{C.push(lt(m,y,I))});return C.push(U),It(C)}).then(()=>{C=[];for(const u of y.matched)if(u.beforeEnter&&!I.matched.includes(u))if(De(u.beforeEnter))for(const m of u.beforeEnter)C.push(lt(m,y,I));else C.push(lt(u.beforeEnter,y,I));return C.push(U),It(C)}).then(()=>(y.matched.forEach(u=>u.enterCallbacks={}),C=Lr(ie,"beforeRouteEnter",y,I),C.push(U),It(C))).then(()=>{C=[];for(const u of o.list())C.push(lt(u,y,I));return C.push(U),It(C)}).catch(u=>qe(u,8)?u:Promise.reject(u))}function Pe(y,I,C){for(const F of s.list())F(y,I,C)}function rt(y,I,C,F,K){const ie=O(y,I);if(ie)return ie;const U=I===it,u=Tt?history.state:{};C&&(F||U?a.replace(y.fullPath,X({scroll:U&&u&&u.scroll},K)):a.push(y.fullPath,K)),l.value=y,gt(y,I,C,U),Ce()}let ze;function Ct(){ze||(ze=a.listen((y,I,C)=>{if(!In.listening)return;const F=b(y),K=ne(F);if(K){se(X(K,{replace:!0}),F).catch(ln);return}c=F;const ie=l.value;Tt&&Yc(Ci(ie.fullPath,C.delta),wr()),ge(F,ie).catch(U=>qe(U,12)?U:qe(U,2)?(se(U.to,F).then(u=>{qe(u,20)&&!C.delta&&C.type===xn.pop&&a.go(-1,!1)}).catch(ln),Promise.reject()):(C.delta&&a.go(-C.delta,!1),J(U,F,ie))).then(U=>{U=U||rt(F,ie,!1),U&&(C.delta&&!qe(U,8)?a.go(-C.delta,!1):C.type===xn.pop&&qe(U,20)&&a.go(-1,!1)),Pe(F,ie,U)}).catch(ln)}))}let ht=tn(),Jt=tn(),fe;function J(y,I,C){Ce(y);const F=Jt.list();return F.length?F.forEach(K=>K(y,I,C)):console.error(y),Promise.reject(y)}function G(){return fe&&l.value!==it?Promise.resolve():new Promise((y,I)=>{ht.add([y,I])})}function Ce(y){return fe||(fe=!y,Ct(),ht.list().forEach(([I,C])=>y?C(y):I()),ht.reset()),y}function gt(y,I,C,F){const{scrollBehavior:K}=e;if(!Tt||!K)return Promise.resolve();const ie=!C&&Kc(Ci(y.fullPath,0))||(F||!C)&&history.state&&history.state.scroll||null;return Ho().then(()=>K(y,I,ie)).then(U=>U&&Wc(U)).catch(U=>J(U,y,I))}const Se=y=>a.go(y);let ye;const St=new Set,In={currentRoute:l,listening:!0,addRoute:g,removeRoute:A,hasRoute:L,getRoutes:S,resolve:b,options:e,push:D,replace:W,go:Se,back:()=>Se(-1),forward:()=>Se(1),beforeEach:i.add,beforeResolve:o.add,afterEach:s.add,onError:Jt.add,isReady:G,install(y){const I=this;y.component("RouterLink",Su),y.component("RouterView",Nu),y.config.globalProperties.$router=I,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>Dt(l)}),Tt&&!ye&&l.value===it&&(ye=!0,D(a.location).catch(K=>{}));const C={};for(const K in it)C[K]=oe(()=>l.value[K]);y.provide(La,I),y.provide(_s,On(C)),y.provide(ea,l);const F=y.unmount;St.add(y),y.unmount=function(){St.delete(y),St.size<1&&(c=it,ze&&ze(),ze=null,l.value=it,ye=!1,fe=!1),F()}}};return In}function It(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function Lu(e,t){const n=[],r=[],a=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const s=t.matched[o];s&&(e.matched.find(c=>Yt(c,s))?r.push(s):n.push(s));const l=e.matched[o];l&&(t.matched.find(c=>Yt(c,l))||a.push(l))}return[n,r,a]}const Fu="modulepreload",ju=function(e,t){return new URL(e,t).href},Hi={},Es=function(t,n,r){if(!n||n.length===0)return t();const a=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=ju(i,r),i in Hi)return;Hi[i]=!0;const o=i.endsWith(".css"),s=o?'[rel="stylesheet"]':"";if(!!r)for(let f=a.length-1;f>=0;f--){const d=a[f];if(d.href===i&&(!o||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${s}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":Fu,o||(c.as="script",c.crossOrigin=""),c.href=i,document.head.appendChild(c),o)return new Promise((f,d)=>{c.addEventListener("load",f),c.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t())},$u={name:"Chat",path:"/chat",component:()=>Es(()=>import("./Chat-7b7445bc.js"),["./Chat-7b7445bc.js","./Chat-7fb73f96.css"],import.meta.url)},Du=[$u],zu={name:"Home",path:"/",component:()=>Es(()=>import("./Home-21be3875.js"),["./Home-21be3875.js","./Home-c4701c0d.css"],import.meta.url)},Bu=[zu],Hu=Mu({history:Gc("/open-chat/"),routes:[...Du,...Bu]});function Ui(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ui(Object(n),!0).forEach(function(r){me(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ui(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ar(e){return ar=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ar(e)}function Uu(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Wi(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Wu(e,t,n){return t&&Wi(e.prototype,t),n&&Wi(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function me(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Fa(e,t){return Ku(e)||Vu(e,t)||ks(e,t)||Gu()}function Cn(e){return Yu(e)||qu(e)||ks(e)||Xu()}function Yu(e){if(Array.isArray(e))return ta(e)}function Ku(e){if(Array.isArray(e))return e}function qu(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Vu(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function ks(e,t){if(e){if(typeof e=="string")return ta(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ta(e,t)}}function ta(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Xu(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Gu(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Yi=function(){},ja={},As={},Os=null,Ps={mark:Yi,measure:Yi};try{typeof window<"u"&&(ja=window),typeof document<"u"&&(As=document),typeof MutationObserver<"u"&&(Os=MutationObserver),typeof performance<"u"&&(Ps=performance)}catch{}var Qu=ja.navigator||{},Ki=Qu.userAgent,qi=Ki===void 0?"":Ki,dt=ja,te=As,Vi=Os,$n=Ps;dt.document;var nt=!!te.documentElement&&!!te.head&&typeof te.addEventListener=="function"&&typeof te.createElement=="function",Cs=~qi.indexOf("MSIE")||~qi.indexOf("Trident/"),Dn,zn,Bn,Hn,Un,Je="___FONT_AWESOME___",na=16,Ss="fa",Rs="svg-inline--fa",Ot="data-fa-i2svg",ra="data-fa-pseudo-element",Ju="data-fa-pseudo-element-pending",$a="data-prefix",Da="data-icon",Xi="fontawesome-i2svg",Zu="async",ed=["HTML","HEAD","STYLE","SCRIPT"],Is=function(){try{return!0}catch{return!1}}(),ee="classic",le="sharp",za=[ee,le];function Sn(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[ee]}})}var wn=Sn((Dn={},me(Dn,ee,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),me(Dn,le,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular"}),Dn)),_n=Sn((zn={},me(zn,ee,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),me(zn,le,{solid:"fass",regular:"fasr"}),zn)),En=Sn((Bn={},me(Bn,ee,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),me(Bn,le,{fass:"fa-solid",fasr:"fa-regular"}),Bn)),td=Sn((Hn={},me(Hn,ee,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),me(Hn,le,{"fa-solid":"fass","fa-regular":"fasr"}),Hn)),nd=/fa(s|r|l|t|d|b|k|ss|sr)?[\-\ ]/,Ts="fa-layers-text",rd=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,ad=Sn((Un={},me(Un,ee,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),me(Un,le,{900:"fass",400:"fasr"}),Un)),Ns=[1,2,3,4,5,6,7,8,9,10],id=Ns.concat([11,12,13,14,15,16,17,18,19,20]),od=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],_t={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},kn=new Set;Object.keys(_n[ee]).map(kn.add.bind(kn));Object.keys(_n[le]).map(kn.add.bind(kn));var sd=[].concat(za,Cn(kn),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",_t.GROUP,_t.SWAP_OPACITY,_t.PRIMARY,_t.SECONDARY]).concat(Ns.map(function(e){return"".concat(e,"x")})).concat(id.map(function(e){return"w-".concat(e)})),cn=dt.FontAwesomeConfig||{};function ld(e){var t=te.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function fd(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(te&&typeof te.querySelector=="function"){var cd=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];cd.forEach(function(e){var t=Fa(e,2),n=t[0],r=t[1],a=fd(ld(n));a!=null&&(cn[r]=a)})}var Ms={styleDefault:"solid",familyDefault:"classic",cssPrefix:Ss,replacementClass:Rs,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};cn.familyPrefix&&(cn.cssPrefix=cn.familyPrefix);var qt=T(T({},Ms),cn);qt.autoReplaceSvg||(qt.observeMutations=!1);var M={};Object.keys(Ms).forEach(function(e){Object.defineProperty(M,e,{enumerable:!0,set:function(n){qt[e]=n,un.forEach(function(r){return r(M)})},get:function(){return qt[e]}})});Object.defineProperty(M,"familyPrefix",{enumerable:!0,set:function(t){qt.cssPrefix=t,un.forEach(function(n){return n(M)})},get:function(){return qt.cssPrefix}});dt.FontAwesomeConfig=M;var un=[];function ud(e){return un.push(e),function(){un.splice(un.indexOf(e),1)}}var ot=na,Ye={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function dd(e){if(!(!e||!nt)){var t=te.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=te.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return te.head.insertBefore(t,r),e}}var md="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function An(){for(var e=12,t="";e-- >0;)t+=md[Math.random()*62|0];return t}function Qt(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Ba(e){return e.classList?Qt(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Ls(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function pd(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Ls(e[n]),'" ')},"").trim()}function _r(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Ha(e){return e.size!==Ye.size||e.x!==Ye.x||e.y!==Ye.y||e.rotate!==Ye.rotate||e.flipX||e.flipY}function hd(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function gd(e){var t=e.transform,n=e.width,r=n===void 0?na:n,a=e.height,i=a===void 0?na:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&Cs?l+="translate(".concat(t.x/ot-r/2,"em, ").concat(t.y/ot-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/ot,"em), calc(-50% + ").concat(t.y/ot,"em)) "):l+="translate(".concat(t.x/ot,"em, ").concat(t.y/ot,"em) "),l+="scale(".concat(t.size/ot*(t.flipX?-1:1),", ").concat(t.size/ot*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var vd=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Fs(){var e=Ss,t=Rs,n=M.cssPrefix,r=M.replacementClass,a=vd;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var Gi=!1;function Fr(){M.autoAddCss&&!Gi&&(dd(Fs()),Gi=!0)}var bd={mixout:function(){return{dom:{css:Fs,insertCss:Fr}}},hooks:function(){return{beforeDOMElementCreation:function(){Fr()},beforeI2svg:function(){Fr()}}}},Ze=dt||{};Ze[Je]||(Ze[Je]={});Ze[Je].styles||(Ze[Je].styles={});Ze[Je].hooks||(Ze[Je].hooks={});Ze[Je].shims||(Ze[Je].shims=[]);var Fe=Ze[Je],js=[],yd=function e(){te.removeEventListener("DOMContentLoaded",e),ir=1,js.map(function(t){return t()})},ir=!1;nt&&(ir=(te.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(te.readyState),ir||te.addEventListener("DOMContentLoaded",yd));function xd(e){nt&&(ir?setTimeout(e,0):js.push(e))}function Rn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Ls(e):"<".concat(t," ").concat(pd(r),">").concat(i.map(Rn).join(""),"</").concat(t,">")}function Qi(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var wd=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},jr=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?wd(n,a):n,l,c,f;for(r===void 0?(l=1,f=t[i[0]]):(l=0,f=r);l<o;l++)c=i[l],f=s(f,t[c],c,t);return f};function _d(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function aa(e){var t=_d(e);return t.length===1?t[0].toString(16):null}function Ed(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Ji(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function ia(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=Ji(t);typeof Fe.hooks.addPack=="function"&&!a?Fe.hooks.addPack(e,Ji(t)):Fe.styles[e]=T(T({},Fe.styles[e]||{}),i),e==="fas"&&ia("fa",t)}var Wn,Yn,Kn,Mt=Fe.styles,kd=Fe.shims,Ad=(Wn={},me(Wn,ee,Object.values(En[ee])),me(Wn,le,Object.values(En[le])),Wn),Ua=null,$s={},Ds={},zs={},Bs={},Hs={},Od=(Yn={},me(Yn,ee,Object.keys(wn[ee])),me(Yn,le,Object.keys(wn[le])),Yn);function Pd(e){return~sd.indexOf(e)}function Cd(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Pd(a)?a:null}var Us=function(){var t=function(i){return jr(Mt,function(o,s,l){return o[l]=jr(s,i,{}),o},{})};$s=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),Ds=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),Hs=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in Mt||M.autoFetchSvg,r=jr(kd,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});zs=r.names,Bs=r.unicodes,Ua=Er(M.styleDefault,{family:M.familyDefault})};ud(function(e){Ua=Er(e.styleDefault,{family:M.familyDefault})});Us();function Wa(e,t){return($s[e]||{})[t]}function Sd(e,t){return(Ds[e]||{})[t]}function Et(e,t){return(Hs[e]||{})[t]}function Ws(e){return zs[e]||{prefix:null,iconName:null}}function Rd(e){var t=Bs[e],n=Wa("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function mt(){return Ua}var Ya=function(){return{prefix:null,iconName:null,rest:[]}};function Er(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?ee:n,a=wn[r][e],i=_n[r][e]||_n[r][a],o=e in Fe.styles?e:null;return i||o||null}var Zi=(Kn={},me(Kn,ee,Object.keys(En[ee])),me(Kn,le,Object.keys(En[le])),Kn);function kr(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},me(t,ee,"".concat(M.cssPrefix,"-").concat(ee)),me(t,le,"".concat(M.cssPrefix,"-").concat(le)),t),o=null,s=ee;(e.includes(i[ee])||e.some(function(c){return Zi[ee].includes(c)}))&&(s=ee),(e.includes(i[le])||e.some(function(c){return Zi[le].includes(c)}))&&(s=le);var l=e.reduce(function(c,f){var d=Cd(M.cssPrefix,f);if(Mt[f]?(f=Ad[s].includes(f)?td[s][f]:f,o=f,c.prefix=f):Od[s].indexOf(f)>-1?(o=f,c.prefix=Er(f,{family:s})):d?c.iconName=d:f!==M.replacementClass&&f!==i[ee]&&f!==i[le]&&c.rest.push(f),!a&&c.prefix&&c.iconName){var p=o==="fa"?Ws(c.iconName):{},g=Et(c.prefix,c.iconName);p.prefix&&(o=null),c.iconName=p.iconName||g||c.iconName,c.prefix=p.prefix||c.prefix,c.prefix==="far"&&!Mt.far&&Mt.fas&&!M.autoFetchSvg&&(c.prefix="fas")}return c},Ya());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===le&&(Mt.fass||M.autoFetchSvg)&&(l.prefix="fass",l.iconName=Et(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=mt()||"fas"),l}var Id=function(){function e(){Uu(this,e),this.definitions={}}return Wu(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=T(T({},n.definitions[s]||{}),o[s]),ia(s,o[s]);var l=En[ee][s];l&&ia(l,o[s]),Us()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,c=o.icon,f=c[2];n[s]||(n[s]={}),f.length>0&&f.forEach(function(d){typeof d=="string"&&(n[s][d]=c)}),n[s][l]=c}),n}}]),e}(),eo=[],Lt={},Bt={},Td=Object.keys(Bt);function Nd(e,t){var n=t.mixoutsTo;return eo=e,Lt={},Object.keys(Bt).forEach(function(r){Td.indexOf(r)===-1&&delete Bt[r]}),eo.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),ar(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){Lt[o]||(Lt[o]=[]),Lt[o].push(i[o])})}r.provides&&r.provides(Bt)}),n}function oa(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=Lt[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function Pt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=Lt[e]||[];a.forEach(function(i){i.apply(null,n)})}function et(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Bt[e]?Bt[e].apply(null,t):void 0}function sa(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||mt();if(t)return t=Et(n,t)||t,Qi(Ys.definitions,n,t)||Qi(Fe.styles,n,t)}var Ys=new Id,Md=function(){M.autoReplaceSvg=!1,M.observeMutations=!1,Pt("noAuto")},Ld={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return nt?(Pt("beforeI2svg",t),et("pseudoElements2svg",t),et("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;M.autoReplaceSvg===!1&&(M.autoReplaceSvg=!0),M.observeMutations=!0,xd(function(){jd({autoReplaceSvgRoot:n}),Pt("watch",t)})}},Fd={icon:function(t){if(t===null)return null;if(ar(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Et(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Er(t[0]);return{prefix:r,iconName:Et(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(M.cssPrefix,"-"))>-1||t.match(nd))){var a=kr(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||mt(),iconName:Et(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=mt();return{prefix:i,iconName:Et(i,t)||t}}}},Oe={noAuto:Md,config:M,dom:Ld,parse:Fd,library:Ys,findIconDefinition:sa,toHtml:Rn},jd=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?te:n;(Object.keys(Fe.styles).length>0||M.autoFetchSvg)&&nt&&M.autoReplaceSvg&&Oe.dom.i2svg({node:r})};function Ar(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Rn(r)})}}),Object.defineProperty(e,"node",{get:function(){if(nt){var r=te.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function $d(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(Ha(o)&&n.found&&!r.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};a.style=_r(T(T({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function Dd(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(M.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:T(T({},a),{},{id:o}),children:r}]}]}function Ka(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,c=e.maskId,f=e.titleId,d=e.extra,p=e.watchable,g=p===void 0?!1:p,A=r.found?r:n,S=A.width,L=A.height,b=a==="fak",w=[M.replacementClass,i?"".concat(M.cssPrefix,"-").concat(i):""].filter(function(ge){return d.classes.indexOf(ge)===-1}).filter(function(ge){return ge!==""||!!ge}).concat(d.classes).join(" "),O={children:[],attributes:T(T({},d.attributes),{},{"data-prefix":a,"data-icon":i,class:w,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(S," ").concat(L)})},D=b&&!~d.classes.indexOf("fa-fw")?{width:"".concat(S/L*16*.0625,"em")}:{};g&&(O.attributes[Ot]=""),l&&(O.children.push({tag:"title",attributes:{id:O.attributes["aria-labelledby"]||"title-".concat(f||An())},children:[l]}),delete O.attributes.title);var W=T(T({},O),{},{prefix:a,iconName:i,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:T(T({},D),d.styles)}),ne=r.found&&n.found?et("generateAbstractMask",W)||{children:[],attributes:{}}:et("generateAbstractIcon",W)||{children:[],attributes:{}},se=ne.children,Ee=ne.attributes;return W.children=se,W.attributes=Ee,s?Dd(W):$d(W)}function to(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,c=T(T(T({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[Ot]="");var f=T({},o.styles);Ha(a)&&(f.transform=gd({transform:a,startCentered:!0,width:n,height:r}),f["-webkit-transform"]=f.transform);var d=_r(f);d.length>0&&(c.style=d);var p=[];return p.push({tag:"span",attributes:c,children:[t]}),i&&p.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),p}function zd(e){var t=e.content,n=e.title,r=e.extra,a=T(T(T({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=_r(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var $r=Fe.styles;function la(e){var t=e[0],n=e[1],r=e.slice(4),a=Fa(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(M.cssPrefix,"-").concat(_t.GROUP)},children:[{tag:"path",attributes:{class:"".concat(M.cssPrefix,"-").concat(_t.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(M.cssPrefix,"-").concat(_t.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var Bd={found:!1,width:512,height:512};function Hd(e,t){!Is&&!M.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function fa(e,t){var n=t;return t==="fa"&&M.styleDefault!==null&&(t=mt()),new Promise(function(r,a){if(et("missingIconAbstract"),n==="fa"){var i=Ws(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&$r[t]&&$r[t][e]){var o=$r[t][e];return r(la(o))}Hd(e,t),r(T(T({},Bd),{},{icon:M.showMissingIcons&&e?et("missingIconAbstract")||{}:{}}))})}var no=function(){},ca=M.measurePerformance&&$n&&$n.mark&&$n.measure?$n:{mark:no,measure:no},rn='FA "6.3.0"',Ud=function(t){return ca.mark("".concat(rn," ").concat(t," begins")),function(){return Ks(t)}},Ks=function(t){ca.mark("".concat(rn," ").concat(t," ends")),ca.measure("".concat(rn," ").concat(t),"".concat(rn," ").concat(t," begins"),"".concat(rn," ").concat(t," ends"))},qa={begin:Ud,end:Ks},Qn=function(){};function ro(e){var t=e.getAttribute?e.getAttribute(Ot):null;return typeof t=="string"}function Wd(e){var t=e.getAttribute?e.getAttribute($a):null,n=e.getAttribute?e.getAttribute(Da):null;return t&&n}function Yd(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(M.replacementClass)}function Kd(){if(M.autoReplaceSvg===!0)return Jn.replace;var e=Jn[M.autoReplaceSvg];return e||Jn.replace}function qd(e){return te.createElementNS("http://www.w3.org/2000/svg",e)}function Vd(e){return te.createElement(e)}function qs(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?qd:Vd:n;if(typeof e=="string")return te.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(qs(o,{ceFn:r}))}),a}function Xd(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Jn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(qs(a),n)}),n.getAttribute(Ot)===null&&M.keepOriginalSource){var r=te.createComment(Xd(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Ba(n).indexOf(M.replacementClass))return Jn.replace(t);var a=new RegExp("".concat(M.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===M.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return Rn(s)}).join(`
`);n.setAttribute(Ot,""),n.innerHTML=o}};function ao(e){e()}function Vs(e,t){var n=typeof t=="function"?t:Qn;if(e.length===0)n();else{var r=ao;M.mutateApproach===Zu&&(r=dt.requestAnimationFrame||ao),r(function(){var a=Kd(),i=qa.begin("mutate");e.map(a),i(),n()})}}var Va=!1;function Xs(){Va=!0}function ua(){Va=!1}var or=null;function io(e){if(Vi&&M.observeMutations){var t=e.treeCallback,n=t===void 0?Qn:t,r=e.nodeCallback,a=r===void 0?Qn:r,i=e.pseudoElementsCallback,o=i===void 0?Qn:i,s=e.observeMutationsRoot,l=s===void 0?te:s;or=new Vi(function(c){if(!Va){var f=mt();Qt(c).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!ro(d.addedNodes[0])&&(M.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&M.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&ro(d.target)&&~od.indexOf(d.attributeName))if(d.attributeName==="class"&&Wd(d.target)){var p=kr(Ba(d.target)),g=p.prefix,A=p.iconName;d.target.setAttribute($a,g||f),A&&d.target.setAttribute(Da,A)}else Yd(d.target)&&a(d.target)})}}),nt&&or.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Gd(){or&&or.disconnect()}function Qd(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Jd(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=kr(Ba(e));return a.prefix||(a.prefix=mt()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Sd(a.prefix,e.innerText)||Wa(a.prefix,aa(e.innerText))),!a.iconName&&M.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function Zd(e){var t=Qt(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return M.autoA11y&&(n?t["aria-labelledby"]="".concat(M.replacementClass,"-title-").concat(r||An()):(t["aria-hidden"]="true",t.focusable="false")),t}function em(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Ye,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function oo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Jd(e),r=n.iconName,a=n.prefix,i=n.rest,o=Zd(e),s=oa("parseNodeAttributes",{},e),l=t.styleParser?Qd(e):[];return T({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Ye,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var tm=Fe.styles;function Gs(e){var t=M.autoReplaceSvg==="nest"?oo(e,{styleParser:!1}):oo(e);return~t.extra.classes.indexOf(Ts)?et("generateLayersText",e,t):et("generateSvgReplacementMutation",e,t)}var pt=new Set;za.map(function(e){pt.add("fa-".concat(e))});Object.keys(wn[ee]).map(pt.add.bind(pt));Object.keys(wn[le]).map(pt.add.bind(pt));pt=Cn(pt);function so(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!nt)return Promise.resolve();var n=te.documentElement.classList,r=function(d){return n.add("".concat(Xi,"-").concat(d))},a=function(d){return n.remove("".concat(Xi,"-").concat(d))},i=M.autoFetchSvg?pt:za.map(function(f){return"fa-".concat(f)}).concat(Object.keys(tm));i.includes("fa")||i.push("fa");var o=[".".concat(Ts,":not([").concat(Ot,"])")].concat(i.map(function(f){return".".concat(f,":not([").concat(Ot,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Qt(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=qa.begin("onTree"),c=s.reduce(function(f,d){try{var p=Gs(d);p&&f.push(p)}catch(g){Is||g.name==="MissingIcon"&&console.error(g)}return f},[]);return new Promise(function(f,d){Promise.all(c).then(function(p){Vs(p,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),f()})}).catch(function(p){l(),d(p)})})}function nm(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Gs(e).then(function(n){n&&Vs([n],t)})}function rm(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:sa(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:sa(a||{})),e(r,T(T({},n),{},{mask:a}))}}var am=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Ye:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,c=n.maskId,f=c===void 0?null:c,d=n.title,p=d===void 0?null:d,g=n.titleId,A=g===void 0?null:g,S=n.classes,L=S===void 0?[]:S,b=n.attributes,w=b===void 0?{}:b,O=n.styles,D=O===void 0?{}:O;if(t){var W=t.prefix,ne=t.iconName,se=t.icon;return Ar(T({type:"icon"},t),function(){return Pt("beforeDOMElementCreation",{iconDefinition:t,params:n}),M.autoA11y&&(p?w["aria-labelledby"]="".concat(M.replacementClass,"-title-").concat(A||An()):(w["aria-hidden"]="true",w.focusable="false")),Ka({icons:{main:la(se),mask:l?la(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:W,iconName:ne,transform:T(T({},Ye),a),symbol:o,title:p,maskId:f,titleId:A,extra:{attributes:w,styles:D,classes:L}})})}},im={mixout:function(){return{icon:rm(am)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=so,n.nodeCallback=nm,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?te:r,i=n.callback,o=i===void 0?function(){}:i;return so(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,c=r.symbol,f=r.mask,d=r.maskId,p=r.extra;return new Promise(function(g,A){Promise.all([fa(a,s),f.iconName?fa(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(S){var L=Fa(S,2),b=L[0],w=L[1];g([n,Ka({icons:{main:b,mask:w},prefix:s,iconName:a,transform:l,symbol:c,maskId:d,title:i,titleId:o,extra:p,watchable:!0})])}).catch(A)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=_r(s);l.length>0&&(a.style=l);var c;return Ha(o)&&(c=et("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},om={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return Ar({type:"layer"},function(){Pt("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(M.cssPrefix,"-layers")].concat(Cn(i)).join(" ")},children:o}]})}}}},sm={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,f=r.styles,d=f===void 0?{}:f;return Ar({type:"counter",content:n},function(){return Pt("beforeDOMElementCreation",{content:n,params:r}),zd({content:n.toString(),title:i,extra:{attributes:c,styles:d,classes:["".concat(M.cssPrefix,"-layers-counter")].concat(Cn(s))}})})}}}},lm={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Ye:a,o=r.title,s=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,f=r.attributes,d=f===void 0?{}:f,p=r.styles,g=p===void 0?{}:p;return Ar({type:"text",content:n},function(){return Pt("beforeDOMElementCreation",{content:n,params:r}),to({content:n,transform:T(T({},Ye),i),title:s,extra:{attributes:d,styles:g,classes:["".concat(M.cssPrefix,"-layers-text")].concat(Cn(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(Cs){var c=parseInt(getComputedStyle(n).fontSize,10),f=n.getBoundingClientRect();s=f.width/c,l=f.height/c}return M.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,to({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},fm=new RegExp('"',"ug"),lo=[1105920,1112319];function cm(e){var t=e.replace(fm,""),n=Ed(t,0),r=n>=lo[0]&&n<=lo[1],a=t.length===2?t[0]===t[1]:!1;return{value:aa(a?t[0]:t),isSecondary:r||a}}function fo(e,t){var n="".concat(Ju).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Qt(e.children),o=i.filter(function(se){return se.getAttribute(ra)===t})[0],s=dt.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(rd),c=s.getPropertyValue("font-weight"),f=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&f!=="none"&&f!==""){var d=s.getPropertyValue("content"),p=~["Sharp"].indexOf(l[2])?le:ee,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?_n[p][l[2].toLowerCase()]:ad[p][c],A=cm(d),S=A.value,L=A.isSecondary,b=l[0].startsWith("FontAwesome"),w=Wa(g,S),O=w;if(b){var D=Rd(S);D.iconName&&D.prefix&&(w=D.iconName,g=D.prefix)}if(w&&!L&&(!o||o.getAttribute($a)!==g||o.getAttribute(Da)!==O)){e.setAttribute(n,O),o&&e.removeChild(o);var W=em(),ne=W.extra;ne.attributes[ra]=t,fa(w,g).then(function(se){var Ee=Ka(T(T({},W),{},{icons:{main:se,mask:Ya()},prefix:g,iconName:O,extra:ne,watchable:!0})),ge=te.createElement("svg");t==="::before"?e.insertBefore(ge,e.firstChild):e.appendChild(ge),ge.outerHTML=Ee.map(function(Pe){return Rn(Pe)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function um(e){return Promise.all([fo(e,"::before"),fo(e,"::after")])}function dm(e){return e.parentNode!==document.head&&!~ed.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(ra)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function co(e){if(nt)return new Promise(function(t,n){var r=Qt(e.querySelectorAll("*")).filter(dm).map(um),a=qa.begin("searchPseudoElements");Xs(),Promise.all(r).then(function(){a(),ua(),t()}).catch(function(){a(),ua(),n()})})}var mm={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=co,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?te:r;M.searchPseudoElements&&co(a)}}},uo=!1,pm={mixout:function(){return{dom:{unwatch:function(){Xs(),uo=!0}}}},hooks:function(){return{bootstrap:function(){io(oa("mutationObserverCallbacks",{}))},noAuto:function(){Gd()},watch:function(n){var r=n.observeMutationsRoot;uo?ua():io(oa("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},mo=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},hm={mixout:function(){return{parse:{transform:function(n){return mo(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=mo(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),d={transform:"".concat(l," ").concat(c," ").concat(f)},p={transform:"translate(".concat(o/2*-1," -256)")},g={outer:s,inner:d,path:p};return{tag:"g",attributes:T({},g.outer),children:[{tag:"g",attributes:T({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:T(T({},r.icon.attributes),g.path)}]}]}}}},Dr={x:0,y:0,width:"100%",height:"100%"};function po(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function gm(e){return e.tag==="g"?e.children:[e]}var vm={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?kr(a.split(" ").map(function(o){return o.trim()})):Ya();return i.prefix||(i.prefix=mt()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,c=i.width,f=i.icon,d=o.width,p=o.icon,g=hd({transform:l,containerWidth:d,iconWidth:c}),A={tag:"rect",attributes:T(T({},Dr),{},{fill:"white"})},S=f.children?{children:f.children.map(po)}:{},L={tag:"g",attributes:T({},g.inner),children:[po(T({tag:f.tag,attributes:T(T({},f.attributes),g.path)},S))]},b={tag:"g",attributes:T({},g.outer),children:[L]},w="mask-".concat(s||An()),O="clip-".concat(s||An()),D={tag:"mask",attributes:T(T({},Dr),{},{id:w,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[A,b]},W={tag:"defs",children:[{tag:"clipPath",attributes:{id:O},children:gm(p)},D]};return r.push(W,{tag:"rect",attributes:T({fill:"currentColor","clip-path":"url(#".concat(O,")"),mask:"url(#".concat(w,")")},Dr)}),{children:r,attributes:a}}}},bm={provides:function(t){var n=!1;dt.matchMedia&&(n=dt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:T(T({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=T(T({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:T(T({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:T(T({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:T(T({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:T(T({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:T(T({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:T(T({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:T(T({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},ym={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},xm=[bd,im,om,sm,lm,mm,pm,hm,vm,bm,ym];Nd(xm,{mixoutsTo:Oe});Oe.noAuto;var Qs=Oe.config,wm=Oe.library;Oe.dom;var sr=Oe.parse;Oe.findIconDefinition;Oe.toHtml;var _m=Oe.icon;Oe.layer;var Em=Oe.text;Oe.counter;function ho(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Ne(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ho(Object(n),!0).forEach(function(r){xe(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ho(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function lr(e){return lr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},lr(e)}function xe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function km(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Am(e,t){if(e==null)return{};var n=km(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function da(e){return Om(e)||Pm(e)||Cm(e)||Sm()}function Om(e){if(Array.isArray(e))return ma(e)}function Pm(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Cm(e,t){if(e){if(typeof e=="string")return ma(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ma(e,t)}}function ma(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Sm(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Rm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Js={exports:{}};(function(e){(function(t){var n=function(b,w,O){if(!c(w)||d(w)||p(w)||g(w)||l(w))return w;var D,W=0,ne=0;if(f(w))for(D=[],ne=w.length;W<ne;W++)D.push(n(b,w[W],O));else{D={};for(var se in w)Object.prototype.hasOwnProperty.call(w,se)&&(D[b(se,O)]=n(b,w[se],O))}return D},r=function(b,w){w=w||{};var O=w.separator||"_",D=w.split||/(?=[A-Z])/;return b.split(D).join(O)},a=function(b){return A(b)?b:(b=b.replace(/[\-_\s]+(.)?/g,function(w,O){return O?O.toUpperCase():""}),b.substr(0,1).toLowerCase()+b.substr(1))},i=function(b){var w=a(b);return w.substr(0,1).toUpperCase()+w.substr(1)},o=function(b,w){return r(b,w).toLowerCase()},s=Object.prototype.toString,l=function(b){return typeof b=="function"},c=function(b){return b===Object(b)},f=function(b){return s.call(b)=="[object Array]"},d=function(b){return s.call(b)=="[object Date]"},p=function(b){return s.call(b)=="[object RegExp]"},g=function(b){return s.call(b)=="[object Boolean]"},A=function(b){return b=b-0,b===b},S=function(b,w){var O=w&&"process"in w?w.process:w;return typeof O!="function"?b:function(D,W){return O(D,b,W)}},L={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(b,w){return n(S(a,w),b)},decamelizeKeys:function(b,w){return n(S(o,w),b,w)},pascalizeKeys:function(b,w){return n(S(i,w),b)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=L:t.humps=L})(Rm)})(Js);var Im=Js.exports,Tm=["class","style"];function Nm(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=Im.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function Mm(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function Xa(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return Xa(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,c){var f=e.attributes[c];switch(c){case"class":l.class=Mm(f);break;case"style":l.style=Nm(f);break;default:l.attrs[c]=f}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=Am(n,Tm);return xr(e.tag,Ne(Ne(Ne({},t),{},{class:a.class,style:Ne(Ne({},a.style),o)},a.attrs),s),r)}var Zs=!1;try{Zs=!0}catch{}function Lm(){if(!Zs&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function dn(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?xe({},e,t):{}}function Fm(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},xe(t,"fa-".concat(e.size),e.size!==null),xe(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),xe(t,"fa-pull-".concat(e.pull),e.pull!==null),xe(t,"fa-swap-opacity",e.swapOpacity),xe(t,"fa-bounce",e.bounce),xe(t,"fa-shake",e.shake),xe(t,"fa-beat",e.beat),xe(t,"fa-fade",e.fade),xe(t,"fa-beat-fade",e.beatFade),xe(t,"fa-flash",e.flash),xe(t,"fa-spin-pulse",e.spinPulse),xe(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function go(e){if(e&&lr(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(sr.icon)return sr.icon(e);if(e===null)return null;if(lr(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var jm=Pn({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=oe(function(){return go(t.icon)}),i=oe(function(){return dn("classes",Fm(t))}),o=oe(function(){return dn("transform",typeof t.transform=="string"?sr.transform(t.transform):t.transform)}),s=oe(function(){return dn("mask",go(t.mask))}),l=oe(function(){return _m(a.value,Ne(Ne(Ne(Ne({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});an(l,function(f){if(!f)return Lm("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var c=oe(function(){return l.value?Xa(l.value.abstract[0],{},r):null});return function(){return c.value}}});Pn({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,a=Qs.familyPrefix,i=oe(function(){return["".concat(a,"-layers")].concat(da(t.fixedWidth?["".concat(a,"-fw")]:[]))});return function(){return xr("div",{class:i.value},r.default?r.default():[])}}});Pn({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,a=Qs.familyPrefix,i=oe(function(){return dn("classes",[].concat(da(t.counter?["".concat(a,"-layers-counter")]:[]),da(t.position?["".concat(a,"-layers-").concat(t.position)]:[])))}),o=oe(function(){return dn("transform",typeof t.transform=="string"?sr.transform(t.transform):t.transform)}),s=oe(function(){var c=Em(t.value.toString(),Ne(Ne({},o.value),i.value)),f=c.abstract;return t.counter&&(f[0].attributes.class=f[0].attributes.class.replace("fa-layers-text","")),f[0]}),l=oe(function(){return Xa(s.value,{},r)});return function(){return l.value}}});var $m={prefix:"far",iconName:"paper-plane",icon:[512,512,[61913],"f1d8","M16.1 260.2c-22.6 12.9-20.5 47.3 3.6 57.3L160 376V479.3c0 18.1 14.6 32.7 32.7 32.7c9.7 0 18.9-4.3 25.1-11.8l62-74.3 123.9 51.6c18.9 7.9 40.8-4.5 43.9-24.7l64-416c1.9-12.1-3.4-24.3-13.5-31.2s-23.3-7.5-34-1.4l-448 256zm52.1 25.5L409.7 90.6 190.1 336l1.2 1L68.2 285.7zM403.3 425.4L236.7 355.9 450.8 116.6 403.3 425.4z"]};wm.add($m);Pc(Tc).component("font-awesome-icon",jm).use(Hu).mount("#app");export{Xe as F,Sc as _,fs as a,Ae as b,Yf as c,Pn as d,Bm as e,Hm as f,Um as g,Vf as h,ga as n,Uf as o,zm as p,Ef as r,Dm as t,nf as w};
