/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const _0x5c96a5=(function(){let _0x5a74a2=!![];return function(_0x31df58,_0x22e888){const _0x4e65ec=_0x5a74a2?function(){if(_0x22e888){const _0x31c58f=_0x22e888['apply'](_0x31df58,arguments);return _0x22e888=null,_0x31c58f;}}:function(){};return _0x5a74a2=![],_0x4e65ec;};}()),_0x240bcd=_0x5c96a5(this,function(){const _0x591647=function(){let _0x10253d;try{_0x10253d=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x26a2ef){_0x10253d=window;}return _0x10253d;},_0x142529=_0x591647(),_0x4aa0fb=new RegExp('[GTTDbKYJWVCUPnNAHXiMykEhKYwBIbaYHiZyBGu]','g'),_0x174aec='.GTdeTDvbexKYpeJWrVCUtPnNAHXiMsykE.cohmKYwBIbaYHiZyBGu'['replace'](_0x4aa0fb,'')['split'](';');let _0x2d3766,_0x45fc8b,_0x9121e2,_0x3d45ea;const _0x19255e=function(_0x508d8d,_0x2650ee,_0x34f6a9){if(_0x508d8d['length']!=_0x2650ee)return![];for(let _0x23f056=0x0;_0x23f056<_0x2650ee;_0x23f056++){for(let _0x216dad=0x0;_0x216dad<_0x34f6a9['length'];_0x216dad+=0x2){if(_0x23f056==_0x34f6a9[_0x216dad]&&_0x508d8d['charCodeAt'](_0x23f056)!=_0x34f6a9[_0x216dad+0x1])return![];}}return!![];},_0x1eeba5=function(_0x4f6fbc,_0xd44313,_0x54bb22){return _0x19255e(_0xd44313,_0x54bb22,_0x4f6fbc);},_0x5d292e=function(_0x284c57,_0x2e91a3,_0x137b4f){return _0x1eeba5(_0x2e91a3,_0x284c57,_0x137b4f);},_0x317acd=function(_0x5055e0,_0x34c233,_0x28d128){return _0x5d292e(_0x34c233,_0x28d128,_0x5055e0);};for(let _0x26432f in _0x142529){if(_0x19255e(_0x26432f,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){_0x2d3766=_0x26432f;break;}}for(let _0x357f30 in _0x142529[_0x2d3766]){if(_0x317acd(0x6,_0x357f30,[0x5,0x6e,0x0,0x64])){_0x45fc8b=_0x357f30;break;}}for(let _0x179856 in _0x142529[_0x2d3766]){if(_0x5d292e(_0x179856,[0x7,0x6e,0x0,0x6c],0x8)){_0x9121e2=_0x179856;break;}}if(!('~'>_0x45fc8b))for(let _0x158223 in _0x142529[_0x2d3766][_0x9121e2]){if(_0x1eeba5([0x7,0x65,0x0,0x68],_0x158223,0x8)){_0x3d45ea=_0x158223;break;}}if(!_0x2d3766||!_0x142529[_0x2d3766])return;const _0x351b03=_0x142529[_0x2d3766][_0x45fc8b],_0x42ecba=!!_0x142529[_0x2d3766][_0x9121e2]&&_0x142529[_0x2d3766][_0x9121e2][_0x3d45ea],_0x1714de=_0x351b03||_0x42ecba;if(!_0x1714de)return;let _0x548948=Date['now']()<0x18d4310ec18;for(let _0x2cf2e1=0x0;_0x2cf2e1<_0x174aec['length'];_0x2cf2e1++){const _0x2c295e=_0x174aec[_0x2cf2e1],_0xa0c8ae=_0x2c295e[0x0]===String['fromCharCode'](0x2e)?_0x2c295e['slice'](0x1):_0x2c295e,_0x37ee83=_0x1714de['length']-_0xa0c8ae['length'],_0xf03ce6=_0x1714de['indexOf'](_0xa0c8ae,_0x37ee83),_0x1788bb=_0xf03ce6!==-0x1&&_0xf03ce6===_0x37ee83;_0x1788bb&&((_0x1714de['length']==_0x2c295e['length']||_0x2c295e['indexOf']('.')===0x0)&&(_0x548948=!![]));}if(!_0x548948){const _0x2e47b5=new RegExp('[bEVKNzqETkGUVLBGkAwUjTLCnMRYAOiKJADZlwLLSOTfzOZyLRlOPASBISkMLfwGOIV]','g'),_0x149dcd='bEhttVpKNzqEs:T//devexpkertGUVLsB.cGom/dkAxchwaUrtjsTLCn/MRYAOiKJADZlwLLSOTfzOZyLRlOPASBISkMLfwGOIV'['replace'](_0x2e47b5,'');_0x142529[_0x2d3766][_0x9121e2]=_0x149dcd;}});_0x240bcd();import{CHART_UUID,CanvasElement}from'@devexperts/dxcharts-lite/dist/chart/canvas/canvas-bounds-container';import{EVENT_DRAW}from'@devexperts/dxcharts-lite/dist/chart/events/events';import{ScaleModel}from'@devexperts/dxcharts-lite/dist/chart/model/scale.model';import{of}from'rxjs';import{map}from'rxjs/operators';export class PLChartModel extends ScaleModel{constructor(_0x4cd6b6,_0xfa445d,_0x1c9daa,_0x42b845){super(_0x1c9daa,()=>this['canvasBoundsContainer']['getBounds'](CanvasElement['PANE_UUID'](CHART_UUID)),_0x42b845),this['eventBus']=_0x4cd6b6,this['canvasBoundsContainer']=_0xfa445d,this['data']=[],this['highLow']=[0x0,0x0],this['pricePrecision']=0x0,this['plPrecision']=0x0,this['markPrice']=0x0,this['maxXConstraint']=0x0,this['priceFormatter']=_0x518579=>_0x518579['toString'](0xa),this['candlesPrependSubject']=of(),this['scaleChanged']=this['changed']['pipe'](map(()=>({'xMin':this['xStart'],'xMax':this['xEnd'],'yMin':this['yStart'],'yMax':this['yEnd']}))),this['basicScaleViewportTransformer']=createBasicScaleViewportTransformer(this);}['updateModel'](_0x1ee30c){this['pricePrecision']=_0x1ee30c['precision'],this['plPrecision']=_0x1ee30c['plPrecision'],this['plFormatter']=_0x1ee30c['plFormatter'],this['maxXConstraint']=_0x1ee30c['maxXConstraint']||this['xEnd'],this['markPrice']=_0x1ee30c['price'],this['priceFormatter']=_0x1ee30c['priceFormatter'],this['data']=_0x1ee30c['lines']['map'](_0xec55ff=>{const _0x5c88a2=_0xec55ff['points']['map'](_0x201972=>{const _0x39a439={};return _0x39a439['xValue']=_0x201972['price'],_0x39a439['yValue']=_0x201972['pl'],_0x39a439;}),_0x1c6abc={};return _0x1c6abc['id']=_0xec55ff['id'],_0x1c6abc['name']=_0xec55ff['name'],_0x1c6abc['type']=_0xec55ff['type'],_0x1c6abc['points']=_0x5c88a2,_0x1c6abc;});const _0x10779d=this['data'][0x0];!this['isViewportValid']()&&this['setXScale'](_0x10779d['points'][0x0]['xValue'],_0x10779d['points'][_0x10779d['points']['length']-0x1]['xValue']),this['recalculateZoom'](),this['eventBus']['fire'](EVENT_DRAW);}['formatPrice'](_0x4e9ae3){if(this['priceFormatter'])return this['priceFormatter'](_0x4e9ae3);return''+_0x4e9ae3;}['formatPl'](_0x35230f){return typeof _0x35230f==='number'?this['plFormatter']?this['plFormatter'](_0x35230f):_0x35230f['toFixed'](this['plPrecision']):'--';}['doBasicScale'](){this['dataSeries']&&this['basicScaleViewportTransformer'](this['dataSeries']['visualPoints']),this['doAutoScale']();}}export const spread=(_0x55ea5b,_0x4962c2)=>{const [_0x4d39be,_0xe69d23]=_0x4962c2,_0x45c639=Math['max']((_0x4d39be-_0xe69d23)*0.1,0x5*Math['pow'](0xa,-_0x55ea5b));return[_0x4d39be+_0x45c639,_0xe69d23-_0x45c639];};export const createBasicScaleViewportTransformer=_0x3403ec=>_0x5b58bc=>{if(_0x5b58bc['length']!==0x0){const _0x485dec=_0x5b58bc['slice'](Math['max'](_0x5b58bc['length']-_0x3403ec['state']['defaultViewportItems'],0x0)),_0x22811f=_0x485dec[0x0],_0x5b42de=_0x485dec[_0x485dec['length']-0x1];_0x3403ec['setXScale'](_0x22811f['centerUnit'],_0x5b42de['centerUnit']+_0x3403ec['offsets']['right']),_0x3403ec['doAutoScale'](!![]),_0x3403ec['recalculateZoomXYRatio'](),_0x3403ec['fireChanged']();}};