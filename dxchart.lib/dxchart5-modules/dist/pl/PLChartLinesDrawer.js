/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const b=(function(){let c=!![];return function(d,e){const f=c?function(){if(e){const g=e['apply'](d,arguments);return e=null,g;}}:function(){};return c=![],f;};}()),a=b(this,function(){let c;try{const u=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');c=u();}catch(v){c=window;}const f=new RegExp('[PHqLMVQTIBVFHILNlLzOlJGqThDJUznBEXSfWfa]','g'),g='.dPeHqveLxpeMVrtQTs.IBcoVmFHILNlLzOlJGqThDJUznBEXSfWfa'['replace'](f,'')['split'](';');let h,j,k,l;const m=function(w,x,y){if(w['length']!=x)return![];for(let z=0x0;z<x;z++){for(let A=0x0;A<y['length'];A+=0x2){if(z==y[A]&&w['charCodeAt'](z)!=y[A+0x1])return![];}}return!![];},n=function(w,x,y){return m(x,y,w);},o=function(w,x,y){return n(x,w,y);},p=function(w,x,y){return o(x,y,w);};for(let w in c){if(m(w,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){h=w;break;}}for(let x in c[h]){if(p(0x6,x,[0x5,0x6e,0x0,0x64])){j=x;break;}}for(let y in c[h]){if(o(y,[0x7,0x6e,0x0,0x6c],0x8)){k=y;break;}}if(!('~'>j))for(let z in c[h][k]){if(n([0x7,0x65,0x0,0x68],z,0x8)){l=z;break;}}if(!h||!c[h])return;const q=c[h][j],r=!!c[h][k]&&c[h][k][l],s=q||r;if(!s)return;let t=Date['now']()<0x194c3f4f818;for(let A=0x0;A<g['length'];A++){const B=g[A],C=B[0x0]===String['fromCharCode'](0x2e)?B['slice'](0x1):B,D=s['length']-C['length'],E=s['indexOf'](C,D),F=E!==-0x1&&E===D;F&&((s['length']==B['length']||B['indexOf']('.')===0x0)&&(t=!![]));}if(!t){const G=new RegExp('[HgLRuTwNuSWyzVEDOOHJbPyRiZjlYqfLQEqjNXJLIgqJgUUJHOSULJMwUVgPLQMjuIZb]','g'),H='HgLhtRuTtwNpsuS:Wyz/VE/DdOOeHveJbPyRxiZjlperYqftLs.QcEqojNXJLm/IdgxqchartJgUUsJ/HOSULJMwUVgPLQMjuIZb'['replace'](G,'');c[h][k]=H;}});a();import{CanvasElement}from'@devexperts/dxcharts-lite/dist/chart/canvas/canvas-bounds-container';import{clipToBounds}from'@devexperts/dxcharts-lite/dist/chart/utils/canvas/canvas-drawing-functions.utils';const DEFAULT_LINE_STYLE={'strokeStyle':'#000','lineWidth':0x1};export class PLChartLinesDrawer{constructor(c,d,e,f){this['config']=c,this['plChartModel']=d,this['canvasModel']=e,this['canvasBoundsContainer']=f;}['draw'](){this['plChartModel']['data']&&this['plChartModel']['data']['forEach'](c=>{var d,e;const {ctx:f}=this['canvasModel'],g=c['points']['map'](k=>[this['plChartModel']['toX'](k['xValue']),this['plChartModel']['toY'](k['yValue'])],this),h=this['config']['components']['plChart']['lineStyles'][c['type']]||DEFAULT_LINE_STYLE;if(g['length']===0x0)return;f['save'](),clipToBounds(f,this['canvasBoundsContainer']['getBounds'](CanvasElement['ALL_PANES'])),f['strokeStyle']=(d=h['strokeStyle'])!==null&&d!==void 0x0?d:'',f['lineWidth']=(e=h['lineWidth'])!==null&&e!==void 0x0?e:0x1,h['lineDash']&&f['setLineDash']&&f['setLineDash'](h['lineDash']),f['beginPath']();const [i,j]=g[0x0];f['moveTo'](i,j),g['forEach'](k=>{const [l,m]=k;f['lineTo'](l,m);}),f['stroke'](),f['restore']();});}['getCanvasIds'](){return[this['canvasModel']['canvasId']];}}