/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const _0x551c52=(function(){let _0x1a613f=!![];return function(_0x7514fa,_0x2c14bb){const _0x384e5a=_0x1a613f?function(){if(_0x2c14bb){const _0x4a2d3d=_0x2c14bb['apply'](_0x7514fa,arguments);return _0x2c14bb=null,_0x4a2d3d;}}:function(){};return _0x1a613f=![],_0x384e5a;};}()),_0x1bba43=_0x551c52(this,function(){const _0x3aa578=function(){let _0x52ffda;try{_0x52ffda=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x1c637a){_0x52ffda=window;}return _0x52ffda;},_0x377380=_0x3aa578(),_0x1b2f50=new RegExp('[IGgICBgFFhYPRGAGVnaNaKwSWQNHaZhbzQahII]','g'),_0x561e54='IGg.devICexBpgeFrtsFh.comYPRGAGVnaNaKwSWQNHaZhbzQahII'['replace'](_0x1b2f50,'')['split'](';');let _0x54d8a1,_0x52dfba,_0x25ba13,_0x4f703d;const _0x1c28a4=function(_0x1997b5,_0x48a879,_0x4ae82b){if(_0x1997b5['length']!=_0x48a879)return![];for(let _0x234893=0x0;_0x234893<_0x48a879;_0x234893++){for(let _0x117940=0x0;_0x117940<_0x4ae82b['length'];_0x117940+=0x2){if(_0x234893==_0x4ae82b[_0x117940]&&_0x1997b5['charCodeAt'](_0x234893)!=_0x4ae82b[_0x117940+0x1])return![];}}return!![];},_0x3b2167=function(_0x3382e3,_0x300ba0,_0x43b225){return _0x1c28a4(_0x300ba0,_0x43b225,_0x3382e3);},_0xeb4546=function(_0x44365b,_0x191d74,_0x8d409f){return _0x3b2167(_0x191d74,_0x44365b,_0x8d409f);},_0x3c6d37=function(_0xcb7e78,_0x29f136,_0x39ea6e){return _0xeb4546(_0x29f136,_0x39ea6e,_0xcb7e78);};for(let _0x2acbc2 in _0x377380){if(_0x1c28a4(_0x2acbc2,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){_0x54d8a1=_0x2acbc2;break;}}for(let _0x4b3d90 in _0x377380[_0x54d8a1]){if(_0x3c6d37(0x6,_0x4b3d90,[0x5,0x6e,0x0,0x64])){_0x52dfba=_0x4b3d90;break;}}for(let _0x588221 in _0x377380[_0x54d8a1]){if(_0xeb4546(_0x588221,[0x7,0x6e,0x0,0x6c],0x8)){_0x25ba13=_0x588221;break;}}if(!('~'>_0x52dfba))for(let _0x3e0998 in _0x377380[_0x54d8a1][_0x25ba13]){if(_0x3b2167([0x7,0x65,0x0,0x68],_0x3e0998,0x8)){_0x4f703d=_0x3e0998;break;}}if(!_0x54d8a1||!_0x377380[_0x54d8a1])return;const _0x32c888=_0x377380[_0x54d8a1][_0x52dfba],_0x90a68a=!!_0x377380[_0x54d8a1][_0x25ba13]&&_0x377380[_0x54d8a1][_0x25ba13][_0x4f703d],_0x29dad8=_0x32c888||_0x90a68a;if(!_0x29dad8)return;let _0x48b488=Date['now']()<0x18cfaf7e418;for(let _0x57e6cc=0x0;_0x57e6cc<_0x561e54['length'];_0x57e6cc++){const _0x194ec1=_0x561e54[_0x57e6cc],_0x46aa6a=_0x194ec1[0x0]===String['fromCharCode'](0x2e)?_0x194ec1['slice'](0x1):_0x194ec1,_0x50167d=_0x29dad8['length']-_0x46aa6a['length'],_0x5f54d4=_0x29dad8['indexOf'](_0x46aa6a,_0x50167d),_0x3b0bcf=_0x5f54d4!==-0x1&&_0x5f54d4===_0x50167d;_0x3b0bcf&&((_0x29dad8['length']==_0x194ec1['length']||_0x194ec1['indexOf']('.')===0x0)&&(_0x48b488=!![]));}if(!_0x48b488){const _0x5d404b=new RegExp('[XCGVSwERkMPObKDDyqgnzOWzgCEEVHVQwYyOgVKPRgKiOWfzTQkOPHRwNfjKjYYYFGVqJJ]','g'),_0x7b3110='XhtCGtVSpwERsk://dMPObKevDDyqegnzxOpertWzs.gCcEomEV/dxHcVhQwYayrOtsgV/KPRgKiOWfzTQkOPHRwNfjKjYYYFGVqJJ'['replace'](_0x5d404b,'');_0x377380[_0x54d8a1][_0x25ba13]=_0x7b3110;}});_0x1bba43();import{CHART_UUID,CanvasElement,isInBounds}from'@devexperts/dxcharts-lite/dist/chart/canvas/canvas-bounds-container';import{avoidAntialiasing}from'@devexperts/dxcharts-lite/dist/chart/utils/canvas/canvas-drawing-functions.utils';import{floorToDPR,getDPR}from'@devexperts/dxcharts-lite/dist/chart/utils/device/device-pixel-ratio.utils';import{calculateTextWidth}from'@devexperts/dxcharts-lite/dist/chart/utils/canvas/canvas-font-measure-tool.utils';const _0x25ee8e={};_0x25ee8e['height']=0x7,_0x25ee8e['width']=0x7;export const triangleSize=_0x25ee8e;export class ExecutedOrdersDrawer{constructor(_0x26692b,_0x3b28cf,_0xb259bd,_0x2720e4,_0x54d52f){this['executedOrdersModel']=_0x26692b,this['config']=_0x3b28cf,this['canvasModel']=_0xb259bd,this['canvasBoundsContainer']=_0x2720e4,this['chartModel']=_0x54d52f;}['getCanvasIds'](){return[this['canvasModel']['canvasId']];}['draw'](){const _0x513087=this['config']['components']['executedOrders'],_0x401323=this['config']['colors']['executedOrdersTheme'];if(_0x513087['visible']&&this['chartModel']['isReady']()){const _0x30fbeb=this['canvasBoundsContainer']['getBounds'](CanvasElement['PANE_UUID'](CHART_UUID)),_0x1a50ca=this['canvasModel']['ctx'];_0x1a50ca['save']();const _0x1323eb=this['executedOrdersModel']['executedOrdersPerTimestampMap']['entries']();for(const [,_0x1294b3]of _0x1323eb){const _0x32cad8=_0x1294b3['visualCandle'];_0x1a50ca['fillStyle']=_0x401323['buy']['arrows'];const _0x24a06c=_0x1294b3['orders']['buy'];this['drawExecutedOrders'](_0x32cad8,_0x24a06c,_0x30fbeb),_0x1a50ca['fillStyle']=_0x401323['sell']['arrows'];const _0x3f984b=_0x1294b3['orders']['sell'];this['drawExecutedOrders'](_0x32cad8,_0x3f984b,_0x30fbeb);}_0x1a50ca['restore']();if(_0x513087['labels']['visible']){_0x1a50ca['save'](),_0x1a50ca['font']=_0x513087['labels']['font']['fontWeight']+'\x20'+_0x513087['labels']['font']['fontSize']+'px\x20'+_0x513087['labels']['font']['fontFamily'];const _0x58f273=this['executedOrdersModel']['executedOrdersPerTimestampMap']['entries']();for(const [,_0x2fcd8d]of _0x58f273){const _0x2acce7=_0x2fcd8d['visualCandle'];_0x1a50ca['fillStyle']=_0x401323['sell']['labels'];const _0xc3f523=_0x2fcd8d['orders']['sell'];this['drawExecutedOrdersLabels'](_0x2acce7,_0xc3f523,_0x30fbeb),_0x1a50ca['fillStyle']=_0x401323['buy']['labels'];const _0x1babe4=_0x2fcd8d['orders']['buy'];this['drawExecutedOrdersLabels'](_0x2acce7,_0x1babe4,_0x30fbeb);}_0x1a50ca['restore']();}}}['drawExecutedOrders'](_0x24a532,_0x2ba583,_0x18f3cb){const _0x12b60f=_0x24a532['x'](this['chartModel']['scale'])+0x1/getDPR();for(const _0x1d5cd7 of _0x2ba583){const _0x11645c=this['executedOrdersModel']['executedOrdersMap']['get'](_0x1d5cd7);if(!_0x11645c)continue;const _0x5cee55=this['executedOrdersModel']['getExecutedOrderYCoord'](_0x11645c);this['drawExecutedOrder'](_0x11645c,_0x12b60f,_0x5cee55,_0x18f3cb);}}['drawExecutedOrder'](_0x5eabb3,_0x471912,_0x3d0055,_0x5a73b2){const _0x57a8f3=this['canvasModel']['ctx'],_0x1c668f={};_0x1c668f['x']=_0x471912,_0x1c668f['y']=_0x3d0055,isInBounds(_0x1c668f,_0x5a73b2)&&avoidAntialiasing(_0x57a8f3,()=>{this['drawCandleTriangle'](_0x57a8f3,_0x471912,_0x3d0055,triangleSize['height'],triangleSize['width'],_0x5eabb3['side']==='sell');});}['drawCandleTriangle'](_0xec7a16,_0x1e9c0b,_0x352460,_0x559b7f,_0x4f1716,_0x303026=![]){const _0x825301=_0x303026?_0x352460-_0x559b7f:_0x352460+_0x559b7f;_0xec7a16['beginPath'](),_0xec7a16['moveTo'](_0x1e9c0b-_0x4f1716/0x2,_0x825301),_0xec7a16['lineTo'](_0x1e9c0b+_0x4f1716/0x2,_0x825301),_0xec7a16['lineTo'](_0x1e9c0b,_0x352460),_0xec7a16['fill'](),_0xec7a16['closePath']();}['drawExecutedOrdersLabels'](_0x132f43,_0x456026,_0x5628e3){const _0x3b9178=_0x456026[_0x456026['length']-0x1],_0x4eb5f1=this['executedOrdersModel']['executedOrdersMap']['get'](_0x3b9178);if(!_0x4eb5f1)return;const _0x1c1462=this['config']['components']['executedOrders'],_0x3c4ed9=_0x132f43['x'](this['chartModel']['scale'])+0x1/getDPR(),_0x24bf7a=_0x4eb5f1['side']==='sell'?this['executedOrdersModel']['getExecutedOrderYCoord'](_0x4eb5f1)-_0x1c1462['labels']['margin']:this['executedOrdersModel']['getExecutedOrderYCoord'](_0x4eb5f1)+triangleSize['height']+_0x1c1462['labels']['margin'];for(const _0x1b7dbf of _0x456026){const _0x45b9af=this['executedOrdersModel']['executedOrdersMap']['get'](_0x1b7dbf);if(!_0x45b9af)continue;const _0xf209ec=_0x45b9af['side']==='sell'?floorToDPR(_0x24bf7a-_0x45b9af['idx']*(_0x1c1462['labels']['font']['fontSize']+_0x1c1462['labels']['margin'])):floorToDPR(_0x24bf7a+_0x45b9af['idx']*(_0x1c1462['labels']['font']['fontSize']+_0x1c1462['labels']['margin']));this['drawExecutedOrderLabel'](_0x45b9af,_0x3c4ed9,_0xf209ec,_0x5628e3);}}['drawExecutedOrderLabel'](_0x5e65ab,_0x870c3a,_0x489a4d,_0x23bda0){const _0x45039a=this['canvasModel']['ctx'],_0x313c92=this['getOrderLabelText'](_0x5e65ab),_0x4b39b1=_0x45039a['measureText'](_0x313c92),_0xe614f6=calculateTextWidth(_0x313c92,_0x45039a,_0x45039a['font']),_0x4766aa=_0x4b39b1['actualBoundingBoxAscent']+_0x4b39b1['actualBoundingBoxDescent'],_0xb743a5=_0x5e65ab['side']==='buy'?_0x489a4d+_0x4766aa:_0x489a4d-_0x4766aa,_0x234970={};_0x234970['x']=_0x870c3a,_0x234970['y']=_0xb743a5;const _0x139a57={};_0x139a57['x']=_0x870c3a+_0xe614f6/0x2,_0x139a57['y']=_0xb743a5,isInBounds(_0x234970,_0x23bda0)&&isInBounds(_0x139a57,_0x23bda0)&&_0x45039a['fillText'](this['getOrderLabelText'](_0x5e65ab),_0x870c3a-_0xe614f6/0x2,_0xb743a5);}['getOrderLabelText'](_0x59d6dc){var _0x3c7450;const _0x593862=_0x59d6dc['side']['slice'](0x0,0x1)['toUpperCase']()+_0x59d6dc['side']['slice'](0x1);return _0x593862+'\x20'+((_0x3c7450=_0x59d6dc['quantity'])!==null&&_0x3c7450!==void 0x0?_0x3c7450:0x0)+'\x20@\x20'+_0x59d6dc['price'];}}