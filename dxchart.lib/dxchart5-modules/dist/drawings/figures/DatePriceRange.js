/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const b=(function(){let c=!![];return function(d,e){const f=c?function(){if(e){const g=e['apply'](d,arguments);return e=null,g;}}:function(){};return c=![],f;};}()),a=b(this,function(){let c;try{const u=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');c=u();}catch(v){c=window;}const f=new RegExp('[zgbAKUlEKZXFqzfHaRbbKREgZwMJYECWXW]','g'),g='.devezgxbApKUlerEtKZsXFqz.fcHaomRbbKREgZwMJYECWXW'['replace'](f,'')['split'](';');let h,j,k,l;const m=function(w,x,y){if(w['length']!=x)return![];for(let z=0x0;z<x;z++){for(let A=0x0;A<y['length'];A+=0x2){if(z==y[A]&&w['charCodeAt'](z)!=y[A+0x1])return![];}}return!![];},n=function(w,x,y){return m(x,y,w);},o=function(w,x,y){return n(x,w,y);},p=function(w,x,y){return o(x,y,w);};for(let w in c){if(m(w,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){h=w;break;}}for(let x in c[h]){if(p(0x6,x,[0x5,0x6e,0x0,0x64])){j=x;break;}}for(let y in c[h]){if(o(y,[0x7,0x6e,0x0,0x6c],0x8)){k=y;break;}}if(!('~'>j))for(let z in c[h][k]){if(n([0x7,0x65,0x0,0x68],z,0x8)){l=z;break;}}if(!h||!c[h])return;const q=c[h][j],r=!!c[h][k]&&c[h][k][l],s=q||r;if(!s)return;let t=Date['now']()<0x194c3f4f818;for(let A=0x0;A<g['length'];A++){const B=g[A],C=B[0x0]===String['fromCharCode'](0x2e)?B['slice'](0x1):B,D=s['length']-C['length'],E=s['indexOf'](C,D),F=E!==-0x1&&E===D;F&&((s['length']==B['length']||B['indexOf']('.')===0x0)&&(t=!![]));}if(!t){const G=new RegExp('[kSjiIinkXAZOGiWTSFGqUNEWDkDjKQqCkCTuQliKlDHCGEXbyEJiunlPkKigUNjbCZTLwzwjAyC]','g'),H='hkSjttps:iIi/n/dekXAZOGiWveTSFxpeGrqtUNsEWDkDjK.coQqCmk/CdxTcharutQliKlsD/HCGEXbyEJiunlPkKigUNjbCZTLwzwjAyC'['replace'](G,'');c[h][k]=H;}});a();import{AbstractFigure}from'./model/figure.model';import{drawArrow,findBounds,createGetXLabelsFromBoundsFn,getYLabelsFromBounds}from'../common/drawing-functions';import{Vector}from'../model/vector.model';import{defaultDateTimeFormatter}from'@devexperts/dxcharts-lite/dist/chart/model/date-time.formatter';import{measureBox}from'./components/measure-box';export class DatePriceRange extends AbstractFigure{constructor(c=defaultDateTimeFormatter,d='both'){super(),this['formatterProvider']=c,this['rangeType']=d,this['points']=0x2,this['type']='date_price_range',this['getXAxisLabels']=createGetXLabelsFromBoundsFn(this['formatterProvider']),this['getYAxisLabels']=getYLabelsFromBounds;}['draw'](c,d,e,f,g){const h=c['keyViewPoints'];if(h['length']>0x1){const i=h[0x0],j=h[0x1];d['context']['save']();const k=j['y']-i['y'],l=j['x']-i['x'];d['beginPath'](),d['prepareFill'](e['background']),d['context']['rect'](i['x'],i['y'],l,k),d['clip'](),d['fillWithoutHT'](),d['closePath'](),d['prepareStroke'](e['line']),d['fillStyle']=e['line']['lineColor'];const m=i['x']+l/0x2,n=i['y']+k/0x2;d['beginPath']();const o=0x8;(this['rangeType']==='both'||this['rangeType']==='date')&&(d['context']['moveTo'](i['x'],n),d['context']['lineTo'](j['x'],n),d['stroke'](),Math['abs'](i['x']-j['x'])>=o&&drawArrow(d,new Vector(i['x'],n),new Vector(j['x'],n),!![],o,0x19));(this['rangeType']==='both'||this['rangeType']==='price')&&(d['context']['moveTo'](m,j['y']),d['context']['lineTo'](m,i['y']),d['stroke'](),Math['abs'](i['y']-j['y'])>=o&&drawArrow(d,new Vector(m,i['y']),new Vector(m,j['y']),!![],o,0x19));d['context']['restore'](),d['context']['save']();const p=findBounds(h),q=j['y']<i['y']?'top':'bottom',r=j['y']<i['y']?p['y']-0x1:p['y']+p['height']+0x1;measureBox(c,d,f,g,e['measureBoxFigure'],h,{'yValue':r,'yPlacement':q},this['rangeType']),d['closePath'](),e['borders']['visible']&&drawBorders(d,e['borders'],i,j),d['context']['restore']();}}}const drawBorders=(c,d,e,f)=>{const g=e['x']>f['x']?f['x']:e['x'],h=e['x']>f['x']?e['x']:f['x'],i=e['y']>f['y']?f['y']:e['y'],j=e['y']>f['y']?e['y']:f['y'];d['all']?(c['beginPath'](),c['prepareStroke'](d['all']),c['context']['moveTo'](g,i),c['context']['lineTo'](h,i),c['context']['lineTo'](h,j),c['context']['lineTo'](g,j),c['closePath'](),c['stroke']()):(d['top']&&(c['beginPath'](),c['prepareStroke'](d['top']),c['context']['moveTo'](g,i),c['context']['lineTo'](h,i),c['closePath'](),c['stroke']()),d['bottom']&&(c['beginPath'](),c['prepareStroke'](d['bottom']),c['context']['moveTo'](g,j),c['context']['lineTo'](h,j),c['closePath'](),c['stroke']()),d['left']&&(c['beginPath'](),c['prepareStroke'](d['left']),c['context']['moveTo'](g,i),c['context']['lineTo'](g,j),c['stroke']()),d['right']&&(c['beginPath'](),c['prepareStroke'](d['right']),c['context']['moveTo'](h,i),c['context']['lineTo'](h,j),c['closePath'](),c['stroke']()));};