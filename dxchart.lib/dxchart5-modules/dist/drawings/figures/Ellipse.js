/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const b=(function(){let c=!![];return function(d,e){const f=c?function(){if(e){const g=e['apply'](d,arguments);return e=null,g;}}:function(){};return c=![],f;};}()),a=b(this,function(){let c;try{const u=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');c=u();}catch(v){c=window;}const f=new RegExp('[IbQfuiGGNHGqURMUOanWPyFEFBwyLJSYIK]','g'),g='Ib.QfdeuivGGeNHGxpertqs.cUomRMUOanWPyFEFBwyLJSYIK'['replace'](f,'')['split'](';');let h,j,k,l;const m=function(w,x,y){if(w['length']!=x)return![];for(let z=0x0;z<x;z++){for(let A=0x0;A<y['length'];A+=0x2){if(z==y[A]&&w['charCodeAt'](z)!=y[A+0x1])return![];}}return!![];},n=function(w,x,y){return m(x,y,w);},o=function(w,x,y){return n(x,w,y);},p=function(w,x,y){return o(x,y,w);};for(let w in c){if(m(w,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){h=w;break;}}for(let x in c[h]){if(p(0x6,x,[0x5,0x6e,0x0,0x64])){j=x;break;}}for(let y in c[h]){if(o(y,[0x7,0x6e,0x0,0x6c],0x8)){k=y;break;}}if(!('~'>j))for(let z in c[h][k]){if(n([0x7,0x65,0x0,0x68],z,0x8)){l=z;break;}}if(!h||!c[h])return;const q=c[h][j],r=!!c[h][k]&&c[h][k][l],s=q||r;if(!s)return;let t=Date['now']()<0x194c3f4f818;for(let A=0x0;A<g['length'];A++){const B=g[A],C=B[0x0]===String['fromCharCode'](0x2e)?B['slice'](0x1):B,D=s['length']-C['length'],E=s['indexOf'](C,D),F=E!==-0x1&&E===D;F&&((s['length']==B['length']||B['indexOf']('.')===0x0)&&(t=!![]));}if(!t){const G=new RegExp('[RzDAbFMiIKFEqjHljXPqzTBVQOnyIiQiuOikFnWXGkQiSnwiXyTzDbWPlRDAXjFfWDCNujbK]','g'),H='httRpszD:Ab/FMiIKFE/qdejHlvjexpXPqzTBVerQts.cOonyIimQiuOik/dxFcnhaWrXGtks/QiSnwiXyTzDbWPlRDAXjFfWDCNujbK'['replace'](G,'');c[h][k]=H;}});a();import{AbstractFigure}from'./model/figure.model';import{ellipseKeyPoints,Vector}from'../model/vector.model';import{getLineProperties}from'./utils/utils';import{defaultDateTimeFormatter}from'@devexperts/dxcharts-lite/dist/chart/model/date-time.formatter';import{createGetXLabelsFromBoundsFn,getYLabelsFromBounds}from'../common/drawing-functions';const MIN_POINTS_DISTANCE_PX=0x5,clearRepeatedPoints=c=>{if(!c['length'])return[];const d=[];d['push'](c[0x0]);for(let e=0x1;e<c['length'];++e){if(c[e]&&!c[e]['equals'](c[e-0x1],MIN_POINTS_DISTANCE_PX))d['push'](c[e]);else break;}return d;};export class Ellipse extends AbstractFigure{constructor(c=defaultDateTimeFormatter){super(),this['formatterProvider']=c,this['points']=0x3,this['type']='ellipse',this['boundPoints']=[],this['updateHiddenProps']=d=>{if(d['length']<0x3)return;this['updateDiameterByPoints'](d);},this['constraint']=(d,e)=>{const f=clearRepeatedPoints(d);if(f['length']<d['length'])return f;if(d['length']<0x3)return d;if(e!==0x2&&this['hidden']&&this['hidden']['diameter']){const g=d[0x1]['subtract'](d[0x0]),h=new Vector(-g['y'],g['x']);return h['length']=this['hidden']['diameter'],[d[0x0],d[0x1],d[0x0]['add'](g['divide'](0x2))['add'](h)];}else{const i=this['updateDiameterByPoints'](d);return[i[0x0],i[0x2],i[0x1]];}},this['getXAxisLabels']=createGetXLabelsFromBoundsFn(this['formatterProvider']),this['getYAxisLabels']=getYLabelsFromBounds;}['draw'](c,d,e){var f,g,h,i,j,k;const l=c['keyViewPoints'],m=getLineProperties(c['model'],e);this['boundPoints']=l;if(l['length']===0x2)d['prepareStroke'](m),d['beginPath'](),d['addSegmentPath'](l[0x0],l[0x1]),d['stroke']();else l['length']===0x3&&(d['prepareFill'](e['background']),d['beginPath'](),d['addEllipsePath'](l[0x0],l[0x1],l[0x2],(h=(g=(f=c['model'])===null||f===void 0x0?void 0x0:f['getPane'])===null||g===void 0x0?void 0x0:g['call'](f))===null||h===void 0x0?void 0x0:h['getBounds']()),d['fillWithoutHT'](),d['prepareStroke'](m),d['beginPath'](),this['boundPoints']=d['addEllipsePath'](l[0x0],l[0x1],l[0x2],(k=(j=(i=c['model'])===null||i===void 0x0?void 0x0:i['getPane'])===null||j===void 0x0?void 0x0:j['call'](i))===null||k===void 0x0?void 0x0:k['getBounds']()),d['stroke']());}['updateDiameterByPoints'](c){const d=ellipseKeyPoints(c[0x0],c[0x1],c[0x2]),e=d[0x2]['subtract'](d[0x0]),f=d[0x1]['subtract'](d[0x0]);return this['hidden']={'diameter':e['cross'](f)/e['length']},d;}}