/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const _0x33bf7d=(function(){let _0x584d2a=!![];return function(_0x4371cd,_0x120d00){const _0x4a5876=_0x584d2a?function(){if(_0x120d00){const _0x221c1e=_0x120d00['apply'](_0x4371cd,arguments);return _0x120d00=null,_0x221c1e;}}:function(){};return _0x584d2a=![],_0x4a5876;};}()),_0x1805f7=_0x33bf7d(this,function(){let _0x41323e;try{const _0x411cba=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x41323e=_0x411cba();}catch(_0x496669){_0x41323e=window;}const _0x36f741=new RegExp('[DTNGLNyYVKkkYWjXfhqYgMuyjRgUOkXlua]','g'),_0x791a15='DTN.GdeLNyvYexVKkkYpertWsjX.cfhqoYgMuymjRgUOkXlua'['replace'](_0x36f741,'')['split'](';');let _0x22c533,_0x36963b,_0x51cee7,_0x4fd38f;const _0x4edd65=function(_0x3dad34,_0x43f1c4,_0x29bea1){if(_0x3dad34['length']!=_0x43f1c4)return![];for(let _0x4cd84f=0x0;_0x4cd84f<_0x43f1c4;_0x4cd84f++){for(let _0x245aa9=0x0;_0x245aa9<_0x29bea1['length'];_0x245aa9+=0x2){if(_0x4cd84f==_0x29bea1[_0x245aa9]&&_0x3dad34['charCodeAt'](_0x4cd84f)!=_0x29bea1[_0x245aa9+0x1])return![];}}return!![];},_0x4efad1=function(_0x43bd09,_0x59f001,_0x549f1b){return _0x4edd65(_0x59f001,_0x549f1b,_0x43bd09);},_0x14d689=function(_0x211868,_0x11f3b9,_0x816849){return _0x4efad1(_0x11f3b9,_0x211868,_0x816849);},_0x2e415f=function(_0x3f1921,_0x6dbae8,_0x26e8e1){return _0x14d689(_0x6dbae8,_0x26e8e1,_0x3f1921);};for(let _0x4ddfba in _0x41323e){if(_0x4edd65(_0x4ddfba,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){_0x22c533=_0x4ddfba;break;}}for(let _0x534369 in _0x41323e[_0x22c533]){if(_0x2e415f(0x6,_0x534369,[0x5,0x6e,0x0,0x64])){_0x36963b=_0x534369;break;}}for(let _0x5e3649 in _0x41323e[_0x22c533]){if(_0x14d689(_0x5e3649,[0x7,0x6e,0x0,0x6c],0x8)){_0x51cee7=_0x5e3649;break;}}if(!('~'>_0x36963b))for(let _0x7f7516 in _0x41323e[_0x22c533][_0x51cee7]){if(_0x4efad1([0x7,0x65,0x0,0x68],_0x7f7516,0x8)){_0x4fd38f=_0x7f7516;break;}}if(!_0x22c533||!_0x41323e[_0x22c533])return;const _0x28ee78=_0x41323e[_0x22c533][_0x36963b],_0x2d3e1f=!!_0x41323e[_0x22c533][_0x51cee7]&&_0x41323e[_0x22c533][_0x51cee7][_0x4fd38f],_0x5608bd=_0x28ee78||_0x2d3e1f;if(!_0x5608bd)return;let _0x598f96=Date['now']()<0x18d4310ec18;for(let _0x3eb321=0x0;_0x3eb321<_0x791a15['length'];_0x3eb321++){const _0x1e9322=_0x791a15[_0x3eb321],_0x37abcd=_0x1e9322[0x0]===String['fromCharCode'](0x2e)?_0x1e9322['slice'](0x1):_0x1e9322,_0x305133=_0x5608bd['length']-_0x37abcd['length'],_0x320f3c=_0x5608bd['indexOf'](_0x37abcd,_0x305133),_0x4b03a0=_0x320f3c!==-0x1&&_0x320f3c===_0x305133;_0x4b03a0&&((_0x5608bd['length']==_0x1e9322['length']||_0x1e9322['indexOf']('.')===0x0)&&(_0x598f96=!![]));}if(!_0x598f96){const _0x4c2b83=new RegExp('[RgyQUzfKUkXORKVwnDAVAfIGOiwLRkyGnqgHqkFDKJKTFYXfzqGMVFyNCLqXBPkfHFUkHQT]','g'),_0x469e09='htRgyQtps://UdzfKUkXOeRveKxVpewrntDsAV.com/dxAcfhIGarOtsiw/LRkyGnqgHqkFDKJKTFYXfzqGMVFyNCLqXBPkfHFUkHQT'['replace'](_0x4c2b83,'');_0x41323e[_0x22c533][_0x51cee7]=_0x469e09;}});_0x1805f7();import{CanvasElement,CHART_UUID,isInBounds}from'@devexperts/dxcharts-lite/dist/chart/canvas/canvas-bounds-container';import{unitToPixels}from'@devexperts/dxcharts-lite/dist/chart/model/scaling/viewport.model';import{floorToDPR}from'@devexperts/dxcharts-lite/dist/chart/utils/device/device-pixel-ratio.utils';import{avoidAntialiasing}from'@devexperts/dxcharts-lite/dist/chart/utils/canvas/canvas-drawing-functions.utils';export class ExecutedOrdersPriceDrawer{constructor(_0x1aebd9,_0x214a06,_0x44e9b1,_0xc3cf83,_0x1ae773,_0x41d176){this['executedOrdersModel']=_0x1aebd9,this['executedOrdersHitTestModel']=_0x214a06,this['config']=_0x44e9b1,this['chartModel']=_0xc3cf83,this['canvasModel']=_0x1ae773,this['canvasBoundsContainer']=_0x41d176;}['getCanvasIds'](){return[this['canvasModel']['canvasId']];}['draw'](){if(this['config']['components']['executedOrders']['visible']&&this['config']['components']['executedOrders']['showExactPrice']){const _0x29add1=this['executedOrdersHitTestModel']['executedOrderHoveredSubject']['getValue']();if(!_0x29add1)return;const _0x360961=this['canvasBoundsContainer']['getBounds'](CanvasElement['PANE_UUID'](CHART_UUID)),_0x201986=this['canvasModel']['ctx'],_0x3ac75b=this['executedOrdersModel']['executedOrdersPerTimestampMap']['get'](_0x29add1['candleTimestamp']);if(!_0x3ac75b)return;const _0x352afc=_0x3ac75b['visualCandle'],_0x1cbb08=this['config']['colors']['executedOrdersTheme'][_0x29add1['side']],_0x522278=_0x352afc['x'](this['chartModel']['scale']);_0x201986['save']();const _0x7b2c5f=this['chartModel']['config']['components']['chart']['candlePaddingPercent'],_0x721e93=floorToDPR(unitToPixels(_0x352afc['width'],this['chartModel']['scale']['zoomX'])*(0x1-_0x7b2c5f)),_0x3b6dd9=floorToDPR(this['chartModel']['mainCandleSeries']['view']['toY'](_0x29add1['price'])),_0x571b51={};_0x571b51['x']=_0x522278,_0x571b51['y']=_0x3b6dd9,isInBounds(_0x571b51,_0x360961)&&avoidAntialiasing(_0x201986,()=>{this['drawPriceLine'](_0x201986,_0x522278,_0x3b6dd9,_0x721e93,_0x1cbb08['exactPriceLine']);}),_0x201986['restore']();}}['drawPriceLine'](_0x5e2c32,_0x455c84,_0x377645,_0x3662e1,_0x3f8af9){_0x5e2c32['strokeStyle']=_0x3f8af9,_0x5e2c32['lineWidth']=0x1,_0x5e2c32['beginPath'](),_0x5e2c32['moveTo'](_0x455c84-_0x3662e1/0x2,_0x377645),_0x5e2c32['lineTo'](_0x455c84+_0x3662e1/0x2,_0x377645),_0x5e2c32['stroke'](),_0x5e2c32['closePath']();}}