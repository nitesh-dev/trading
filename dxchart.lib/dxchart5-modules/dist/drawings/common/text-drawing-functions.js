/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const b=(function(){let c=!![];return function(d,e){const f=c?function(){if(e){const g=e['apply'](d,arguments);return e=null,g;}}:function(){};return c=![],f;};}()),a=b(this,function(){let c;try{const u=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');c=u();}catch(v){c=window;}const f=new RegExp('[EhXlQDbVnXBbhHBOVwuEbCIlEnOQFyRh]','g'),g='E.dehXvleQDxpbVnertXs.coBbmhHBOVwuEbCIlEnOQFyRh'['replace'](f,'')['split'](';');let h,j,k,l;const m=function(w,x,y){if(w['length']!=x)return![];for(let z=0x0;z<x;z++){for(let A=0x0;A<y['length'];A+=0x2){if(z==y[A]&&w['charCodeAt'](z)!=y[A+0x1])return![];}}return!![];},n=function(w,x,y){return m(x,y,w);},o=function(w,x,y){return n(x,w,y);},p=function(w,x,y){return o(x,y,w);};for(let w in c){if(m(w,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){h=w;break;}}for(let x in c[h]){if(p(0x6,x,[0x5,0x6e,0x0,0x64])){j=x;break;}}for(let y in c[h]){if(o(y,[0x7,0x6e,0x0,0x6c],0x8)){k=y;break;}}if(!('~'>j))for(let z in c[h][k]){if(n([0x7,0x65,0x0,0x68],z,0x8)){l=z;break;}}if(!h||!c[h])return;const q=c[h][j],r=!!c[h][k]&&c[h][k][l],s=q||r;if(!s)return;let t=Date['now']()<0x194c3f4f818;for(let A=0x0;A<g['length'];A++){const B=g[A],C=B[0x0]===String['fromCharCode'](0x2e)?B['slice'](0x1):B,D=s['length']-C['length'],E=s['indexOf'](C,D),F=E!==-0x1&&E===D;F&&((s['length']==B['length']||B['indexOf']('.')===0x0)&&(t=!![]));}if(!t){const G=new RegExp('[LLjYyqPlnCWiZiYTgywHNubTyObfzCnIECnJgUEMJIKXjANubIgEUzQEjGAGilkKKbBZMPwEIEguLu]','g'),H='LhttpLsjYy://qPdlenCWviZiexpYTgywertsH.cNoumb/TyOdxchbartfzCnsI/ECnJgUEMJIKXjANubIgEUzQEjGAGilkKKbBZMPwEIEguLu'['replace'](G,'');c[h][k]=H;}});a();export const formatText=(c,d,e)=>{const f=c['slice']()['split']('');let g='',h='',i=0x0;const j=m=>getTextWidth(m,d),k=getTextareaWidth(e);let l='';for(const m of f){i=j(h+m);if(i<=k)h+=m,g+=m,m==='\x20'?l='':l+=m;else{const n=j(l+m);n<=k?m==='\x20'?(g+='\x0a',l='',h=''):(h='\x0a'+l+m,g=g['slice'](0x0,g['length']-l['length'])+h):(g+='\x0a'+m,h=m,l=m);}}return g;};function getLineWidth(c,d){var e;const f=document['createElement']('canvas'),g=f['getContext']('2d');return g&&(g['font']=d),(e=g===null||g===void 0x0?void 0x0:g['measureText'](c))===null||e===void 0x0?void 0x0:e['width'];}export const getTextWidth=(c,d)=>{const e=(c||'')['split'](/\r\n|\r|\n/);return Math['ceil'](Math['max'](...e['map'](f=>{var g;return(g=getLineWidth(f,d))!==null&&g!==void 0x0?g:0x0;})));};export const calculateHeight=(c,d)=>{const e=(c||'')['split'](/\r\n|\r|\n/)['length'],f=calculateLineHeight(c,d);return e*f;};export const calculateLineHeight=(c,d)=>{const e=+d['slice'](0x0,d['indexOf']('pt')),f=e*0x60/0x48+'px';return parseInt(f,0xa)*1.33;};export const currentSymbolWidthMultiplier=16.6667;export const getTextareaWidth=c=>{const d=Number(c['replace']('pt',''));return d*currentSymbolWidthMultiplier;};