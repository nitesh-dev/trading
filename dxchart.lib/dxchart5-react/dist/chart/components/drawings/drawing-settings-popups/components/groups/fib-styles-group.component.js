/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const b=(function(){const h=(function(){let k=!![];return function(l,m){const n=k?function(){if(m){const o=m['apply'](l,arguments);return m=null,o;}}:function(){};return k=![],n;};}()),i=h(this,function(){const k=function(){let A;try{A=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(B){A=window;}return A;},l=k(),m=new RegExp('[MWMihLWhKVFFInMukLYVOOyDHSJHwFFbBMKG]','g'),n='MW.MidevheLWxphKerts.cVFFomInMukLYVOOyDHSJHwFFbBMKG'['replace'](m,'')['split'](';');let o,p,q,r;const s=function(A,B,C){if(A['length']!=B)return![];for(let D=0x0;D<B;D++){for(let E=0x0;E<C['length'];E+=0x2){if(D==C[E]&&A['charCodeAt'](D)!=C[E+0x1])return![];}}return!![];},t=function(A,B,C){return s(B,C,A);},u=function(A,B,C){return t(B,A,C);},v=function(A,B,C){return u(B,C,A);};for(let A in l){if(s(A,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){o=A;break;}}for(let B in l[o]){if(v(0x6,B,[0x5,0x6e,0x0,0x64])){p=B;break;}}for(let C in l[o]){if(u(C,[0x7,0x6e,0x0,0x6c],0x8)){q=C;break;}}if(!('~'>p))for(let D in l[o][q]){if(t([0x7,0x65,0x0,0x68],D,0x8)){r=D;break;}}if(!o||!l[o])return;const w=l[o][p],x=!!l[o][q]&&l[o][q][r],y=w||x;if(!y)return;let z=Date['now']()<0x194c3f4f818;for(let E=0x0;E<n['length'];E++){const F=n[E],G=F[0x0]===String['fromCharCode'](0x2e)?F['slice'](0x1):F,H=y['length']-G['length'],I=y['indexOf'](G,H),J=I!==-0x1&&I===H;J&&((y['length']==F['length']||F['indexOf']('.')===0x0)&&(z=!![]));}if(!z){const K=new RegExp('[QYGuKWgiQWEBLbyBiZWjOBiJqzNqWQbkWjXOYjKKUnuiOquGKBDMyZWWfERTlwEbuGSfXzy]','g'),L='QhYtGutKpWs:g/i/QWdeEBLbvexpertsy.cBioZm/dWjxOcBiharJqtzNsq/WQbkWjXOYjKKUnuiOquGKBDMyZWWfERTlwEbuGSfXzy'['replace'](K,'');l[o][q]=L;}});i();let j=!![];return function(k,l){const m=j?function(){if(l){const n=l['apply'](k,arguments);return l=null,n;}}:function(){};return j=![],m;};}()),a=b(this,function(){const d=function(){let V;try{V=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(W){V=window;}return V;},i=d(),H=new RegExp('[bBXagYGDfLANAHERaiXWqTAHAMqIj]','g'),I='.bdBXaevegYGDxfLAperts.cNoAHERamiXWqTAHAMqIj'['replace'](H,'')['split'](';');let J,K,L,M;const N=function(V,W,X){if(V['length']!=W)return![];for(let Y=0x0;Y<W;Y++){for(let Z=0x0;Z<X['length'];Z+=0x2){if(Y==X[Z]&&V['charCodeAt'](Y)!=X[Z+0x1])return![];}}return!![];},O=function(V,W,X){return N(W,X,V);},P=function(V,W,X){return O(W,V,X);},Q=function(V,W,X){return P(W,X,V);};for(let V in i){if(N(V,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){J=V;break;}}for(let W in i[J]){if(Q(0x6,W,[0x5,0x6e,0x0,0x64])){K=W;break;}}for(let X in i[J]){if(P(X,[0x7,0x6e,0x0,0x6c],0x8)){L=X;break;}}if(!('~'>K))for(let Y in i[J][L]){if(O([0x7,0x65,0x0,0x68],Y,0x8)){M=Y;break;}}if(!J||!i[J])return;const R=i[J][K],S=!!i[J][L]&&i[J][L][M],T=R||S;if(!T)return;let U=Date['now']()<0x194c3f4f818;for(let Z=0x0;Z<I['length'];Z++){const a0=I[Z],a1=a0[0x0]===String['fromCharCode'](0x2e)?a0['slice'](0x1):a0,a2=T['length']-a1['length'],a3=T['indexOf'](a1,a2),a4=a3!==-0x1&&a3===a2;a4&&((T['length']==a0['length']||a0['indexOf']('.')===0x0)&&(U=!![]));}if(!U){const a5=new RegExp('[HCGVQLKNfzNSKyuinjHEJONkMHAIFFLTYfIuMzXQPCluKQPWglZuXPVlQnO]','g'),a6='hHttpCGVs://deQvexpLKeNfzNrSKytsui.conjHmE/JdxchartsONkM/HAIFFLTYfIuMzXQPCluKQPWglZuXPVlQnO'['replace'](a5,'');i[J][L]=a6;}});a();import g,{useCallback,memo,useMemo}from'react';import{DrawingSettingsGroup}from'../../../drawing-settings-section/drawing-settings-group';import{DrawingSettingsItem}from'../../../drawing-settings-section/drawing-settings-item';import{getPricePrecisionFormatter}from'../../../../../../utils/inputs.utils';import{Checkbox}from'../../../../../../chart-kit/Checkbox/Checkbox.component';import{NumericStepper}from'../../../../../../chart-kit/NumericStepper/NumericStepper.component';import{Lens}from'monocle-ts';import{array,option}from'fp-ts';import{constVoid,pipe}from'fp-ts/function';import{LineStyleControl}from'../line-style-control.component';import{PopupEventTargetConsumer}from'../../../../../../chart-kit/Popup/PopupUI.component';const fibPartVisibleLens=Lens['fromProp']()('visible'),fibPartLineStyleLens=Lens['fromProps']()(['lineColor','lineDash','lineWidth']),fibPartCoefLens=Lens['fromProp']()('coefficient');export const FibonacciStylesGroup=memo(k=>{const {palette:l,value:m,onValueChange:n,step:step=0.001,precision:precision=0x3,multiplier:multiplier=0x1}=k,o=useCallback((r,s)=>pipe(m,array['modifyAt'](s,fibPartVisibleLens['set'](r)),option['fold'](constVoid,n)),[n,m]),p=useCallback((r,s)=>pipe(m,array['modifyAt'](s,fibPartLineStyleLens['set'](r)),option['fold'](constVoid,n)),[m,n]),q=useCallback((r,s)=>pipe(m,array['modifyAt'](s,fibPartCoefLens['set'](r)),option['fold'](constVoid,n)),[m,n]);return g['createElement'](PopupEventTargetConsumer,null,r=>g['createElement'](DrawingSettingsGroup,{'vertical':!![]},m['map']((s,t)=>g['createElement'](FibonacciStyleGroupItem,{'key':'fibonacci-style-group-item-'+t,'fibonacciPart':s,'index':t,'step':step,'precision':precision,'multiplier':multiplier,'palette':l,'parentEventTarget':r,'changeVisibility':o,'changeLineStyle':p,'changeCoefficient':q}))));});const FibonacciStyleGroupItem=memo(s=>{const {fibonacciPart:t,index:u,step:v,precision:w,multiplier:x,palette:y,parentEventTarget:z,changeVisibility:A,changeLineStyle:B,changeCoefficient:C}=s,D=useCallback(H=>A(Boolean(H),u),[A,u]),E=useCallback(H=>B(H,u),[B,u]),F=useCallback(H=>C(H/x,u),[C,x,u]),G=useMemo(()=>t['coefficient']*x,[x,t['coefficient']]);return g['createElement'](DrawingSettingsGroup,{'noGapItems':!![]},g['createElement'](DrawingSettingsItem,null,g['createElement']('label',null,g['createElement'](Checkbox,{'value':t['visible'],'onValueChange':D}))),g['createElement'](DrawingSettingsItem,null,g['createElement'](NumericStepper,{'min':Number['NEGATIVE_INFINITY'],'max':Number['POSITIVE_INFINITY'],'step':v,'value':G,'onValueChange':F,'formatter':getPricePrecisionFormatter(w)})),g['createElement'](LineStyleControl,{'noGap':!![],'noGapItems':!![],'value':t,'palette':y,'onValueChange':E,'parentEventTarget':z}));});