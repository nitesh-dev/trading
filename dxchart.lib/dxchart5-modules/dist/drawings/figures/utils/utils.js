/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const b=(function(){let c=!![];return function(d,e){const f=c?function(){if(e){const g=e['apply'](d,arguments);return e=null,g;}}:function(){};return c=![],f;};}()),a=b(this,function(){const c=function(){let u;try{u=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(v){u=window;}return u;},e=c(),f=new RegExp('[XALfNEaWNnIZHRSIGFIELYWqVWYILLYRlDuPMuu]','g'),g='.XALfdeNEavWeNxpneIrts.ZcHomRSIGFIELYWqVWYILLYRlDuPMuu'['replace'](f,'')['split'](';');let h,j,k,l;const m=function(u,v,w){if(u['length']!=v)return![];for(let x=0x0;x<v;x++){for(let y=0x0;y<w['length'];y+=0x2){if(x==w[y]&&u['charCodeAt'](x)!=w[y+0x1])return![];}}return!![];},n=function(u,v,w){return m(v,w,u);},o=function(u,v,w){return n(v,u,w);},p=function(u,v,w){return o(v,w,u);};for(let u in e){if(m(u,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){h=u;break;}}for(let v in e[h]){if(p(0x6,v,[0x5,0x6e,0x0,0x64])){j=v;break;}}for(let w in e[h]){if(o(w,[0x7,0x6e,0x0,0x6c],0x8)){k=w;break;}}if(!('~'>j))for(let x in e[h][k]){if(n([0x7,0x65,0x0,0x68],x,0x8)){l=x;break;}}if(!h||!e[h])return;const q=e[h][j],r=!!e[h][k]&&e[h][k][l],s=q||r;if(!s)return;let t=Date['now']()<0x194c3f4f818;for(let y=0x0;y<g['length'];y++){const z=g[y],A=z[0x0]===String['fromCharCode'](0x2e)?z['slice'](0x1):z,B=s['length']-A['length'],C=s['indexOf'](A,B),D=C!==-0x1&&C===B;D&&((s['length']==z['length']||z['indexOf']('.')===0x0)&&(t=!![]));}if(!t){const E=new RegExp('[NnZblyJMJELWYWZnjQbLRNZSjYDNYLZbUURCZZKKIMVBiTBKzPUGTFNyAOGggWZMlwDLF]','g'),F='hNnZtbtlyJpsM:/J/deELvWYeWZnxpjQertbsLRN.com/ZSjYdDNxcYLZhbaUrtUs/RCZZKKIMVBiTBKzPUGTFNyAOGggWZMlwDLF'['replace'](E,'');e[h][k]=F;}});a();import{Vector,raySegmentIntersection}from'../../model/vector.model';import{ViewPoint}from'../../model/view-point';export function adjustVectorToCrispCoords(c,d){const e=Math['floor'](c['x']),f=Math['floor'](c['y']),g=d%0x2===0x1;return g?new ViewPoint(e+0.5,f+0.5):new ViewPoint(c['x'],c['y']);}export function getLineProperties(c,d){const e=d['line'];return c['active']&&!c['isAdding']()?d['activeLine']||e:e;}export const farthestIntersection=(c,d,e,f)=>{let g=-0x1,h=null;for(let i=f?0x0:0x1;i<0x4;++i){const j=raySegmentIntersection([c,d],[e[i],e[(i+0x1)%0x4]]);if(j){const k=j['subtract'](c)['length'];g<k&&(g=k,h={'side':i,'point':j});}}return h;};export const appendPoint=(c,d,e=!![])=>{const f=e&&d[d['length']-0x1]['equals'](c);(d['length']===0x0||!f)&&d['push'](c);};export const adjustXToCrispLine=c=>{const d=Math['floor'](c);return d+0.5;};export const getSortedIndexPoints=c=>{const d=c['model']['cachedPoints'];return d['slice']()['sort']((e,f)=>{return e['index']-f['index'];});};export function getQuadraticCurvePoint(c,d,e,f,g,h,i){function j(k,l,m,n){const o=0x1-k;return o*o*l+0x2*o*k*m+k*k*n;}return new Vector(j(i,c,e,g),j(i,d,f,h));}