/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const b=(function(){let c=!![];return function(d,e){const f=c?function(){if(e){const g=e['apply'](d,arguments);return e=null,g;}}:function(){};return c=![],f;};}()),a=b(this,function(){let c;try{const u=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');c=u();}catch(v){c=window;}const f=new RegExp('[NHJJCqkIkzzKqwhaYzuIJhDblJfIWJZgz]','g'),g='N.HdevexpJJeCrqtkIks.zcomzKqwhaYzuIJhDblJfIWJZgz'['replace'](f,'')['split'](';');let h,j,k,l;const m=function(w,x,y){if(w['length']!=x)return![];for(let z=0x0;z<x;z++){for(let A=0x0;A<y['length'];A+=0x2){if(z==y[A]&&w['charCodeAt'](z)!=y[A+0x1])return![];}}return!![];},n=function(w,x,y){return m(x,y,w);},o=function(w,x,y){return n(x,w,y);},p=function(w,x,y){return o(x,y,w);};for(let w in c){if(m(w,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){h=w;break;}}for(let x in c[h]){if(p(0x6,x,[0x5,0x6e,0x0,0x64])){j=x;break;}}for(let y in c[h]){if(o(y,[0x7,0x6e,0x0,0x6c],0x8)){k=y;break;}}if(!('~'>j))for(let z in c[h][k]){if(n([0x7,0x65,0x0,0x68],z,0x8)){l=z;break;}}if(!h||!c[h])return;const q=c[h][j],r=!!c[h][k]&&c[h][k][l],s=q||r;if(!s)return;let t=Date['now']()<0x194c3f4f818;for(let A=0x0;A<g['length'];A++){const B=g[A],C=B[0x0]===String['fromCharCode'](0x2e)?B['slice'](0x1):B,D=s['length']-C['length'],E=s['indexOf'](C,D),F=E!==-0x1&&E===D;F&&((s['length']==B['length']||B['indexOf']('.')===0x0)&&(t=!![]));}if(!t){const G=new RegExp('[ZCVKOPTPzLlDRUVBDSVNwMiDWVbCYUYRQFAHXfSjHKTYFbUPPlGUlKPCVOzXBwuXwIyzMYLfXzbk]','g'),H='https:Z//dCevVeKxpeOrPts.TcoPm/zdxLlDchRUVBarDts/SVNwMiDWVbCYUYRQFAHXfSjHKTYFbUPPlGUlKPCVOzXBwuXwIyzMYLfXzbk'['replace'](G,'');c[h][k]=H;}});a();import{CanvasElement,CHART_UUID,isInBounds}from'@devexperts/dxcharts-lite/dist/chart/canvas/canvas-bounds-container';import{unitToPixels}from'@devexperts/dxcharts-lite/dist/chart/model/scaling/viewport.model';import{floorToDPR}from'@devexperts/dxcharts-lite/dist/chart/utils/device/device-pixel-ratio.utils';import{avoidAntialiasing}from'@devexperts/dxcharts-lite/dist/chart/utils/canvas/canvas-drawing-functions.utils';export class ExecutedOrdersPriceDrawer{constructor(c,d,e,f,g,h){this['executedOrdersModel']=c,this['executedOrdersHitTestModel']=d,this['config']=e,this['chartModel']=f,this['canvasModel']=g,this['canvasBoundsContainer']=h;}['getCanvasIds'](){return[this['canvasModel']['canvasId']];}['draw'](){if(this['config']['components']['executedOrders']['visible']&&this['config']['components']['executedOrders']['showExactPrice']){const c=this['executedOrdersHitTestModel']['executedOrderHoveredSubject']['getValue']();if(!c)return;const d=this['canvasBoundsContainer']['getBounds'](CanvasElement['PANE_UUID'](CHART_UUID)),e=this['canvasModel']['ctx'],f=this['executedOrdersModel']['executedOrdersPerTimestampMap']['get'](c['candleTimestamp']);if(!f)return;const g=f['visualCandle'],h=this['config']['colors']['executedOrdersTheme'][c['side']],i=g['x'](this['chartModel']['scale']);e['save']();const j=this['chartModel']['config']['components']['chart']['candlePaddingPercent'],k=floorToDPR(unitToPixels(g['width'],this['chartModel']['scale']['zoomX'])*(0x1-j)),l=floorToDPR(this['chartModel']['mainCandleSeries']['view']['toY'](c['price']));isInBounds({'x':i,'y':l},d)&&avoidAntialiasing(e,()=>{this['drawPriceLine'](e,i,l,k,h['exactPriceLine']);}),e['restore']();}}['drawPriceLine'](c,d,e,f,g){c['strokeStyle']=g,c['lineWidth']=0x1,c['beginPath'](),c['moveTo'](d-f/0x2,e),c['lineTo'](d+f/0x2,e),c['stroke'](),c['closePath']();}}