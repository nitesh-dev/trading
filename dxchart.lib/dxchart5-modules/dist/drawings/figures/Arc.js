/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const b=(function(){let c=!![];return function(d,e){const f=c?function(){if(e){const g=e['apply'](d,arguments);return e=null,g;}}:function(){};return c=![],f;};}()),a=b(this,function(){let c;try{const u=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');c=u();}catch(v){c=window;}const f=new RegExp('[IVBThLVFZhhDYBbJElyKbLIufCzZNUKg]','g'),g='I.VBdeThveLxVFperZhhtsDYB.combJElyKbLIufCzZNUKg'['replace'](f,'')['split'](';');let h,j,k,l;const m=function(w,x,y){if(w['length']!=x)return![];for(let z=0x0;z<x;z++){for(let A=0x0;A<y['length'];A+=0x2){if(z==y[A]&&w['charCodeAt'](z)!=y[A+0x1])return![];}}return!![];},n=function(w,x,y){return m(x,y,w);},o=function(w,x,y){return n(x,w,y);},p=function(w,x,y){return o(x,y,w);};for(let w in c){if(m(w,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){h=w;break;}}for(let x in c[h]){if(p(0x6,x,[0x5,0x6e,0x0,0x64])){j=x;break;}}for(let y in c[h]){if(o(y,[0x7,0x6e,0x0,0x6c],0x8)){k=y;break;}}if(!('~'>j))for(let z in c[h][k]){if(n([0x7,0x65,0x0,0x68],z,0x8)){l=z;break;}}if(!h||!c[h])return;const q=c[h][j],r=!!c[h][k]&&c[h][k][l],s=q||r;if(!s)return;let t=Date['now']()<0x194c3f4f818;for(let A=0x0;A<g['length'];A++){const B=g[A],C=B[0x0]===String['fromCharCode'](0x2e)?B['slice'](0x1):B,D=s['length']-C['length'],E=s['indexOf'](C,D),F=E!==-0x1&&E===D;F&&((s['length']==B['length']||B['indexOf']('.')===0x0)&&(t=!![]));}if(!t){const G=new RegExp('[AblwLqHCbzDqWEwYJYZkTlWBDbYEUIzEYfnnzBVOngwIRfDQkkliTJQUuqjWUZHbi]','g'),H='AhbttlpwLs:q//HCbdzDqWEevweYxJpYZerktTsl.WcoBm/DdxbchYaErUtIszEY/fnnzBVOngwIRfDQkkliTJQUuqjWUZHbi'['replace'](G,'');c[h][k]=H;}});a();import{AbstractFigure}from'./model/figure.model';import{ellipseKeyPoints,Vector}from'../model/vector.model';import{getLineProperties}from'./utils/utils';import{createGetXLabelsFromBoundsFn,getYLabelsFromBounds}from'../common/drawing-functions';import{defaultDateTimeFormatter}from'@devexperts/dxcharts-lite/dist/chart/model/date-time.formatter';const drawArc=(d,e,f,g,h)=>{const i=ellipseKeyPoints(e,f,g),j=i[0x0],k=i[0x1],l=i[0x2],m=k['subtract'](j['add'](l)['divide'](0x2));if(!d['isPolygonInViewport']([j['add'](m),l['add'](m),l['subtract'](m),j['subtract'](m)],h))return;const n=0.5522848,o=l['subtract'](j)['multiply'](n/0x2),q=m['multiply'](n);d['beginPath'](),d['context']['moveTo'](j['x'],j['y']),d['context']['bezierCurveTo'](j['add'](q)['x'],j['add'](q)['y'],k['subtract'](o)['x'],k['subtract'](o)['y'],k['x'],k['y']),d['context']['bezierCurveTo'](k['add'](o)['x'],k['add'](o)['y'],l['add'](q)['x'],l['add'](q)['y'],l['x'],l['y']),d['stroke'](),d['fillWithoutHT'](),d['closePath']();};export class Arc extends AbstractFigure{constructor(c=defaultDateTimeFormatter){super(),this['formatterProvider']=c,this['points']=0x3,this['type']='arc',this['constraint']=(d,e)=>{if(d['length']<0x3)return d;if(e!==0x2&&this['hidden']&&this['hidden']['diameter']){const f=d[0x1]['subtract'](d[0x0]),g=new Vector(-f['y'],f['x']);return g['length']=this['hidden']['diameter'],[d[0x0],d[0x1],d[0x0]['add'](f['divide'](0x2))['add'](g)];}else{const h=this['updateDiameterByPoints'](d);return[h[0x0],h[0x2],h[0x1]];}},this['getXAxisLabels']=createGetXLabelsFromBoundsFn(this['formatterProvider']),this['getYAxisLabels']=getYLabelsFromBounds;}['draw'](c,d,e){var f,g,h;const i=c['keyViewPoints'],j=getLineProperties(c['model'],e);if(i['length']===0x2)d['prepareStroke'](j),d['beginPath'](),d['addSegmentPath'](i[0x0],i[0x1]),d['stroke'](),d['closePath']();else i['length']===0x3&&(d['prepareFill'](e['background']),d['prepareStroke'](j),drawArc(d,i[0x0],i[0x1],i[0x2],(h=(g=(f=c['model'])===null||f===void 0x0?void 0x0:f['getPane'])===null||g===void 0x0?void 0x0:g['call'](f))===null||h===void 0x0?void 0x0:h['getBounds']()));}['updateDiameterByPoints'](c){const d=ellipseKeyPoints(c[0x0],c[0x1],c[0x2]),e=d[0x2]['subtract'](d[0x0]),f=d[0x1]['subtract'](d[0x0]);return this['hidden']={'diameter':e['cross'](f)/e['length']},d;}}