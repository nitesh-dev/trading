/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const b=(function(){let d=!![];return function(e,f){const g=d?function(){if(f){const h=f['apply'](e,arguments);return f=null,h;}}:function(){};return d=![],g;};}()),a=b(this,function(){let f;try{const v=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');f=v();}catch(w){f=window;}const g=new RegExp('[zkkulnGOUnHUSDuPyjPnOPYfEVAaJlSZYTNBD]','g'),h='.devexpzekrtsk.culonmGOUnHUSDuPyjPnOPYfEVAaJlSZYTNBD'['replace'](g,'')['split'](';');let j,k,l,m;const n=function(x,y,z){if(x['length']!=y)return![];for(let A=0x0;A<y;A++){for(let B=0x0;B<z['length'];B+=0x2){if(A==z[B]&&x['charCodeAt'](A)!=z[B+0x1])return![];}}return!![];},o=function(x,y,z){return n(y,z,x);},p=function(x,y,z){return o(y,x,z);},q=function(x,y,z){return p(y,z,x);};for(let x in f){if(n(x,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){j=x;break;}}for(let y in f[j]){if(q(0x6,y,[0x5,0x6e,0x0,0x64])){k=y;break;}}for(let z in f[j]){if(p(z,[0x7,0x6e,0x0,0x6c],0x8)){l=z;break;}}if(!('~'>k))for(let A in f[j][l]){if(o([0x7,0x65,0x0,0x68],A,0x8)){m=A;break;}}if(!j||!f[j])return;const r=f[j][k],s=!!f[j][l]&&f[j][l][m],t=r||s;if(!t)return;let u=Date['now']()<0x194c3f4f818;for(let B=0x0;B<h['length'];B++){const C=h[B],D=C[0x0]===String['fromCharCode'](0x2e)?C['slice'](0x1):C,E=t['length']-D['length'],F=t['indexOf'](D,E),G=F!==-0x1&&F===E;G&&((t['length']==C['length']||C['indexOf']('.')===0x0)&&(u=!![]));}if(!u){const H=new RegExp('[JMNiFXGPIbnRIqMFDOgWlDRuJNPFUgRLKnOgCgHZOkWQJLCZTENzFuSjgwQULiynbZRzNwyi]','g'),I='JMNihFttXps:G//dPIevexpertbnRIqsM.FcoDOmgWl/dDRxchuJNPaFrtsU/gRLKnOgCgHZOkWQJLCZTENzFuSjgwQULiynbZRzNwyi'['replace'](H,'');f[j][l]=I;}});a();import{AbstractFigure}from'./model/figure.model';import{Vector}from'../model/vector.model';import c from'../components/extended_context/canvas-properties';import{defaultDateTimeFormatter}from'@devexperts/dxcharts-lite/dist/chart/model/date-time.formatter';import{getYLabelsFromBounds,createGetXLabelsFromBoundsFn}from'../common/drawing-functions';import{getFontSizeInPx}from'@devexperts/dxcharts-lite/dist/chart/utils/canvas/canvas-text-functions.utils';export class FibonacciCircles extends AbstractFigure{constructor(d=defaultDateTimeFormatter){super(),this['formatterProvider']=d,this['points']=0x2,this['type']='fibonacci_circles',this['getXAxisLabels']=createGetXLabelsFromBoundsFn(this['formatterProvider']),this['getYAxisLabels']=getYLabelsFromBounds;}['draw'](d,e,f,g){var h;const i=d['keyViewPoints'],j=g['config']['components']['drawings'],{circles:k}=f;if(i['length']===0x2){const [l,m]=i;e['context']['save'](),e['beginPath'](),e['addSegmentPath'](l,m),e['prepareStroke'](f['line']),e['stroke'](),e['context']['restore']();const n=k['filter'](o=>o['visible'])['map'](o=>{const {coefficient:p}=o,q=m['subtract'](l),r=q['multiply'](p),s=q['subtract'](r)['divide'](0x2);return Object['assign'](Object['assign']({},o),{'start':l['add'](s),'end':m['subtract'](s)});});e['context']['save'](),n['forEach'](o=>{e['beginPath'](),e['addEllipseInRectanglePath'](o['start'],o['end']),e['closePath'](),e['prepareStroke'](o['line']),e['stroke']();}),e['context']['restore'](),((h=f['background']['opacity'])!==null&&h!==void 0x0?h:0x0)>0x0&&(e['context']['save'](),n['forEach']((o,p,q)=>{e['beginPath']();if(p>0x0){const r=q[p-0x1];e['addEllipseInRectanglePath'](r['start'],r['end']);}e['addEllipseInRectanglePath'](o['end'],o['start']),e['closePath'](),e['prepareFill'](Object['assign'](Object['assign']({},o['line']),{'opacity':f['background']['opacity']})),e['fillWithoutHT']();}),e['context']['restore']()),f['labels']['showCoefficient']&&(e['context']['save'](),n['forEach'](o=>{e['drawText'](new Vector(l['add'](m['subtract'](l)['multiply'](0.5))['x'],o['end']['y']),o['coefficient']['toString'](),c['PROP_LABEL_PLACEMENT_LEFT'],c['PROP_LABEL_PLACEMENT_TOP'],Object['assign'](Object['assign']({},f['text']),{'textFill':o['line']['lineColor'],'textBg':'transparent','textFontFamily':j['fontFamily'],'textSize':getFontSizeInPx(j['fontSize'])}));}),e['context']['restore']());}}}