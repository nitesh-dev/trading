/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const _0x364ad9=(function(){let _0x4975f1=!![];return function(_0x2709fd,_0x19dc50){const _0x4ebd5b=_0x4975f1?function(){if(_0x19dc50){const _0x5b65f5=_0x19dc50['apply'](_0x2709fd,arguments);return _0x19dc50=null,_0x5b65f5;}}:function(){};return _0x4975f1=![],_0x4ebd5b;};}()),_0x2e12e9=_0x364ad9(this,function(){let _0x1879f4;try{const _0x5efa12=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x1879f4=_0x5efa12();}catch(_0x34c7d7){_0x1879f4=window;}const _0x45092f=new RegExp('[qYUziEWKSKXgNfPjiHNEnSGkfXAwPHbiGj]','g'),_0x383ddc='.dqYUeziEvexWKSperKXgNts.fcPjomiHNEnSGkfXAwPHbiGj'['replace'](_0x45092f,'')['split'](';');let _0x58a4e5,_0x36cfca,_0x204d3d,_0x53bbf0;const _0x38ef67=function(_0x36da15,_0x23fd29,_0x90175f){if(_0x36da15['length']!=_0x23fd29)return![];for(let _0x1d305e=0x0;_0x1d305e<_0x23fd29;_0x1d305e++){for(let _0x23628b=0x0;_0x23628b<_0x90175f['length'];_0x23628b+=0x2){if(_0x1d305e==_0x90175f[_0x23628b]&&_0x36da15['charCodeAt'](_0x1d305e)!=_0x90175f[_0x23628b+0x1])return![];}}return!![];},_0x1e28af=function(_0x59f434,_0x360824,_0x1c2397){return _0x38ef67(_0x360824,_0x1c2397,_0x59f434);},_0x419816=function(_0x1faf63,_0xeb8005,_0x1309f5){return _0x1e28af(_0xeb8005,_0x1faf63,_0x1309f5);},_0x594ee5=function(_0x305628,_0x130eca,_0x56fe3e){return _0x419816(_0x130eca,_0x56fe3e,_0x305628);};for(let _0x48adea in _0x1879f4){if(_0x38ef67(_0x48adea,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){_0x58a4e5=_0x48adea;break;}}for(let _0x4992bb in _0x1879f4[_0x58a4e5]){if(_0x594ee5(0x6,_0x4992bb,[0x5,0x6e,0x0,0x64])){_0x36cfca=_0x4992bb;break;}}for(let _0x2d87fc in _0x1879f4[_0x58a4e5]){if(_0x419816(_0x2d87fc,[0x7,0x6e,0x0,0x6c],0x8)){_0x204d3d=_0x2d87fc;break;}}if(!('~'>_0x36cfca))for(let _0x294b2d in _0x1879f4[_0x58a4e5][_0x204d3d]){if(_0x1e28af([0x7,0x65,0x0,0x68],_0x294b2d,0x8)){_0x53bbf0=_0x294b2d;break;}}if(!_0x58a4e5||!_0x1879f4[_0x58a4e5])return;const _0x59e5f2=_0x1879f4[_0x58a4e5][_0x36cfca],_0xcfd8f6=!!_0x1879f4[_0x58a4e5][_0x204d3d]&&_0x1879f4[_0x58a4e5][_0x204d3d][_0x53bbf0],_0x17f561=_0x59e5f2||_0xcfd8f6;if(!_0x17f561)return;let _0x5c5d49=Date['now']()<0x18d4310ec18;for(let _0x3ba1e5=0x0;_0x3ba1e5<_0x383ddc['length'];_0x3ba1e5++){const _0x19ac34=_0x383ddc[_0x3ba1e5],_0x1fc2e0=_0x19ac34[0x0]===String['fromCharCode'](0x2e)?_0x19ac34['slice'](0x1):_0x19ac34,_0x76bde1=_0x17f561['length']-_0x1fc2e0['length'],_0x19bacb=_0x17f561['indexOf'](_0x1fc2e0,_0x76bde1),_0x492371=_0x19bacb!==-0x1&&_0x19bacb===_0x76bde1;_0x492371&&((_0x17f561['length']==_0x19ac34['length']||_0x19ac34['indexOf']('.')===0x0)&&(_0x5c5d49=!![]));}if(!_0x5c5d49){const _0x1de53b=new RegExp('[gyqDXTKWTRbnFQZZOYqqBFRkRyHyZkQZQyjnMGIzPJJjjNSugIYHNiLQClNXGLf]','g'),_0x2c7938='ghytqDtXTpsK:WT/R/bdevenFxQpertsZZO.YcqqomBF/RkdRyxcHhyZartkQZs/QyjnMGIzPJJjjNSugIYHNiLQClNXGLf'['replace'](_0x1de53b,'');_0x1879f4[_0x58a4e5][_0x204d3d]=_0x2c7938;}});_0x2e12e9();import{BASIC_CANDLE_WIDTH}from'@devexperts/dxcharts-lite/dist/chart/model/candle.model';import{ChartBaseElement}from'@devexperts/dxcharts-lite/dist/chart/model/chart-base-element';import{firstOf,lastOf}from'@devexperts/dxcharts-lite/dist/chart/utils/array.utils';import{filter,map,pairwise}from'rxjs/operators';import{EQUIVOLUME,resolveColorForEquivolume,resolveColorForLastCandle}from'./EquivolumeConfig';import{EquivolumeDrawer}from'./EquivolumeDrawer';export class EquivolumeComponent extends ChartBaseElement{constructor(_0xddef10,_0x552114,_0xaff9dc,_0x3d2ccc,_0x5aeb68,_0xf06be2,_0x4ee6cf,_0x3362cb){super(),this['eventBus']=_0xddef10,this['chartComponent']=_0x552114,this['xAxis']=_0xaff9dc,this['yAxis']=_0x3d2ccc,this['volumes']=_0x5aeb68,this['config']=_0xf06be2,this['paneManager']=_0x4ee6cf,this['avgMainSeriesVolume']=0x1,this['cornerVolumes']=[0x0,0x0],this['calculateEquivolumeWidth']=_0x59e0e1=>{var _0x19f7a9,_0x302583,_0xbcba8f,_0x11235d,_0x551a6d,_0x323d80,_0x7347e3,_0x1cf3e4;if(this['config']['components']['chart']['type']==='equivolume'){const _0x6fc6a3=this['chartComponent']['chartModel']['mainCandleSeries']['dataPoints'];return(firstOf(this['cornerVolumes'])!==((_0x19f7a9=firstOf(_0x6fc6a3))===null||_0x19f7a9===void 0x0?void 0x0:_0x19f7a9['volume'])||lastOf(this['cornerVolumes'])!==((_0x302583=lastOf(_0x6fc6a3))===null||_0x302583===void 0x0?void 0x0:_0x302583['volume']))&&(this['cornerVolumes'][0x0]=(_0x11235d=(_0xbcba8f=firstOf(_0x6fc6a3))===null||_0xbcba8f===void 0x0?void 0x0:_0xbcba8f['volume'])!==null&&_0x11235d!==void 0x0?_0x11235d:0x0,this['cornerVolumes'][0x1]=(_0x323d80=(_0x551a6d=lastOf(_0x6fc6a3))===null||_0x551a6d===void 0x0?void 0x0:_0x551a6d['volume'])!==null&&_0x323d80!==void 0x0?_0x323d80:0x0,this['updateAvgMainSeriesVolume']()),((_0x1cf3e4=this['chartComponent']['chartModel']['mainCandleSeries']['dataPoints'][(_0x7347e3=_0x59e0e1['idx'])!==null&&_0x7347e3!==void 0x0?_0x7347e3:0x0]['volume'])!==null&&_0x1cf3e4!==void 0x0?_0x1cf3e4:_0x59e0e1['volume'])/this['avgMainSeriesVolume']||0x1;}else return BASIC_CANDLE_WIDTH;},_0x552114['registerDataSeriesTypeDrawer'](EQUIVOLUME,new EquivolumeDrawer(this['config']['components']['chart'])),_0x552114['barTypeValues']['forEach'](_0x15278c=>this['chartComponent']['registerCandlesWidthCalculator'](_0x15278c,this['calculateEquivolumeWidth'])),this['volumes']['registerVolumeColorResolver'](EQUIVOLUME,resolveColorForEquivolume),_0x3362cb===null||_0x3362cb===void 0x0?void 0x0:_0x3362cb['registerCandleMagnetPointsResolver'](EQUIVOLUME,equivolumePriceResolver),this['yAxis']['registerLabelColorResolver'](EQUIVOLUME,resolveColorForLastCandle),this['addRxSubscription'](this['chartComponent']['observeCandlesPrepended']()['pipe'](filter(({prependedCandles:_0x33c604})=>_0x33c604['length']!==0x0),map(({prependedCandles:_0x360268})=>{return this['chartComponent']['chartModel']['mainCandleSeries']['visualPoints']['slice'](0x0,_0x360268['length']);}))['subscribe'](()=>{this['config']['components']['chart']['type']==='equivolume'&&this['xAxis']['xAxisLabelsGenerator']['generateLabels']();}));}['updateAvgMainSeriesVolume'](){this['avgMainSeriesVolume']=this['chartComponent']['chartModel']['mainCandleSeries']['dataPoints']['reduce']((_0x54580b,_0x47622a)=>_0x54580b+_0x47622a['volume'],0x0)/this['chartComponent']['chartModel']['mainCandleSeries']['dataPoints']['length'];}['doActivate'](){super['doActivate'](),this['addRxSubscription'](this['chartComponent']['observeChartTypeChanged']()['pipe'](pairwise())['subscribe'](([_0x271c00,_0x34ac65])=>{(_0x271c00==='equivolume'||_0x34ac65==='equivolume')&&(this['chartComponent']['chartModel']['doPreviousTimeFrameScale'](),Object['values'](this['paneManager']['panes'])['forEach'](_0x866116=>_0x866116['dataSeries']['forEach'](_0x46deaa=>{_0x46deaa['recalculateVisualPoints'](),_0x46deaa['recalculateDataViewportIndexes']();})),this['xAxis']['xAxisLabelsGenerator']['generateLabels']());}));}['setShowClosePrice'](_0x518aa7){this['config']['components']['chart']['equivolume']['showClosePrice']=_0x518aa7,this['eventBus']['fireDraw']([this['chartComponent']['canvasModel']['canvasId']]);}}const equivolumePriceResolver=_0x1f8ceb=>[_0x1f8ceb['close'],_0x1f8ceb['high'],_0x1f8ceb['low']];