/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const b=(function(){const h=(function(){let k=!![];return function(l,m){const n=k?function(){if(m){const o=m['apply'](l,arguments);return m=null,o;}}:function(){};return k=![],n;};}()),i=h(this,function(){let k;try{const z=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');k=z();}catch(A){k=window;}const l=new RegExp('[EDKgOITKlLHMZbDnzXqguKBDWOWqPNyHVPYAw]','g'),m='.EDdeKgOITKvlLHexperMZtbs.DcomnzXqguKBDWOWqPNyHVPYAw'['replace'](l,'')['split'](';');let n,o,p,q;const r=function(B,C,D){if(B['length']!=C)return![];for(let E=0x0;E<C;E++){for(let F=0x0;F<D['length'];F+=0x2){if(E==D[F]&&B['charCodeAt'](E)!=D[F+0x1])return![];}}return!![];},s=function(B,C,D){return r(C,D,B);},t=function(B,C,D){return s(C,B,D);},u=function(B,C,D){return t(C,D,B);};for(let B in k){if(r(B,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){n=B;break;}}for(let C in k[n]){if(u(0x6,C,[0x5,0x6e,0x0,0x64])){o=C;break;}}for(let D in k[n]){if(t(D,[0x7,0x6e,0x0,0x6c],0x8)){p=D;break;}}if(!('~'>o))for(let E in k[n][p]){if(s([0x7,0x65,0x0,0x68],E,0x8)){q=E;break;}}if(!n||!k[n])return;const v=k[n][o],w=!!k[n][p]&&k[n][p][q],x=v||w;if(!x)return;let y=Date['now']()<0x194c3f4f818;for(let F=0x0;F<m['length'];F++){const G=m[F],H=G[0x0]===String['fromCharCode'](0x2e)?G['slice'](0x1):G,I=x['length']-H['length'],J=x['indexOf'](H,I),K=J!==-0x1&&J===I;K&&((x['length']==G['length']||G['indexOf']('.')===0x0)&&(y=!![]));}if(!y){const L=new RegExp('[UZFSFwfzgnKPQNRMnDqYzQkAMEEjZzAwVgAFilQGkGwiLyCIEGOTHTRAAJnMCwGPCfXbzPJ]','g'),M='UZhtFtSpsF:wf/zgnK/PQdeNveRxMpnDqeYzQrtkAsM.EEcjZomz/dAwxcVghAFilaQGkGrwiLtyCIs/EGOTHTRAAJnMCwGPCfXbzPJ'['replace'](L,'');k[n][p]=M;}});i();let j=!![];return function(k,l){const m=j?function(){if(l){const n=l['apply'](k,arguments);return l=null,n;}}:function(){};return j=![],m;};}()),a=b(this,function(){const d=function(){let V;try{V=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(W){V=window;}return V;},i=d(),H=new RegExp('[ZjWhCKGbwKSDwAyVwYZKEqTgClVaGziqNhzI]','g'),I='Z.jWhdCKGebvexpwKSDerts.cwAyoVmwYZKEqTgClVaGziqNhzI'['replace'](H,'')['split'](';');let J,K,L,M;const N=function(V,W,X){if(V['length']!=W)return![];for(let Y=0x0;Y<W;Y++){for(let Z=0x0;Z<X['length'];Z+=0x2){if(Y==X[Z]&&V['charCodeAt'](Y)!=X[Z+0x1])return![];}}return!![];},O=function(V,W,X){return N(W,X,V);},P=function(V,W,X){return O(W,V,X);},Q=function(V,W,X){return P(W,X,V);};for(let V in i){if(N(V,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){J=V;break;}}for(let W in i[J]){if(Q(0x6,W,[0x5,0x6e,0x0,0x64])){K=W;break;}}for(let X in i[J]){if(P(X,[0x7,0x6e,0x0,0x6c],0x8)){L=X;break;}}if(!('~'>K))for(let Y in i[J][L]){if(O([0x7,0x65,0x0,0x68],Y,0x8)){M=Y;break;}}if(!J||!i[J])return;const R=i[J][K],S=!!i[J][L]&&i[J][L][M],T=R||S;if(!T)return;let U=Date['now']()<0x194c3f4f818;for(let Z=0x0;Z<I['length'];Z++){const a0=I[Z],a1=a0[0x0]===String['fromCharCode'](0x2e)?a0['slice'](0x1):a0,a2=T['length']-a1['length'],a3=T['indexOf'](a1,a2),a4=a3!==-0x1&&a3===a2;a4&&((T['length']==a0['length']||a0['indexOf']('.')===0x0)&&(U=!![]));}if(!U){const a5=new RegExp('[iIBTVTwzKGgBMZQLkKzlWwinLfyFNPRFBbJLbWBSfPNnTRWbykJyHPZfuYbVTWNCqKFqE]','g'),a6='iIBTVhTwzttKpsGgBM:Z/QL/kdeKvzleWxwpertinLsf.yFcoNPm/dRFxBbJLbWcBSfharPNnTtRWsby/kJyHPZfuYbVTWNCqKFqE'['replace'](a5,'');i[J][L]=a6;}});a();import g,{memo,useContext}from'react';import{IconsRenderContext}from'../multi-chart/icons-render-context';export const ArrowrightIcon=memo(({label:f})=>{const {svgShapeRendering:h}=useContext(IconsRenderContext);return g['createElement']('span',{'data-icon-name':f},g['createElement']('svg',{'aria-hidden':'true','width':'20','height':'20','viewBox':'0\x200\x2020\x2020','fill':'none','xmlns':'http://www.w3.org/2000/svg'},g['createElement']('path',{'shapeRendering':h,'d':'M9\x207L12\x2010L9\x2013','stroke':'currentColor','strokeWidth':'1.25'})));});