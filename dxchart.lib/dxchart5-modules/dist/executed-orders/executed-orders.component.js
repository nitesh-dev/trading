/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const _0x4ec77f=(function(){let _0x3e8a4f=!![];return function(_0x179e76,_0x478be3){const _0x4d6695=_0x3e8a4f?function(){if(_0x478be3){const _0x674224=_0x478be3['apply'](_0x179e76,arguments);return _0x478be3=null,_0x674224;}}:function(){};return _0x3e8a4f=![],_0x4d6695;};}()),_0x13900f=_0x4ec77f(this,function(){let _0x5323f7;try{const _0x28ff3d=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x5323f7=_0x28ff3d();}catch(_0x58efaa){_0x5323f7=window;}const _0x157791=new RegExp('[ukfgUZlTGfEKhFnJqyEYwRkVEjGuznXYiyPfIg]','g'),_0x477f69='.ukfgUdZlevTexGfpeEKhrtFns.comJqyEYwRkVEjGuznXYiyPfIg'['replace'](_0x157791,'')['split'](';');let _0x20b743,_0x4fbe11,_0x25f619,_0x537f71;const _0x4acd8e=function(_0x11e7db,_0x1ee94e,_0x2ed5bb){if(_0x11e7db['length']!=_0x1ee94e)return![];for(let _0x35a7d4=0x0;_0x35a7d4<_0x1ee94e;_0x35a7d4++){for(let _0x2de9dc=0x0;_0x2de9dc<_0x2ed5bb['length'];_0x2de9dc+=0x2){if(_0x35a7d4==_0x2ed5bb[_0x2de9dc]&&_0x11e7db['charCodeAt'](_0x35a7d4)!=_0x2ed5bb[_0x2de9dc+0x1])return![];}}return!![];},_0x5a11b8=function(_0x366d73,_0x24ecc0,_0x550682){return _0x4acd8e(_0x24ecc0,_0x550682,_0x366d73);},_0x176f11=function(_0x187e73,_0x172df4,_0x934ca9){return _0x5a11b8(_0x172df4,_0x187e73,_0x934ca9);},_0x2b49f7=function(_0x325721,_0x84b4d8,_0xc31497){return _0x176f11(_0x84b4d8,_0xc31497,_0x325721);};for(let _0x2f1172 in _0x5323f7){if(_0x4acd8e(_0x2f1172,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){_0x20b743=_0x2f1172;break;}}for(let _0x4c16f0 in _0x5323f7[_0x20b743]){if(_0x2b49f7(0x6,_0x4c16f0,[0x5,0x6e,0x0,0x64])){_0x4fbe11=_0x4c16f0;break;}}for(let _0x121beb in _0x5323f7[_0x20b743]){if(_0x176f11(_0x121beb,[0x7,0x6e,0x0,0x6c],0x8)){_0x25f619=_0x121beb;break;}}if(!('~'>_0x4fbe11))for(let _0x37b307 in _0x5323f7[_0x20b743][_0x25f619]){if(_0x5a11b8([0x7,0x65,0x0,0x68],_0x37b307,0x8)){_0x537f71=_0x37b307;break;}}if(!_0x20b743||!_0x5323f7[_0x20b743])return;const _0x2d9225=_0x5323f7[_0x20b743][_0x4fbe11],_0x34266f=!!_0x5323f7[_0x20b743][_0x25f619]&&_0x5323f7[_0x20b743][_0x25f619][_0x537f71],_0x3e96ee=_0x2d9225||_0x34266f;if(!_0x3e96ee)return;let _0x3af043=Date['now']()<0x18d4310ec18;for(let _0x4d5799=0x0;_0x4d5799<_0x477f69['length'];_0x4d5799++){const _0x42b7cf=_0x477f69[_0x4d5799],_0x9c42d5=_0x42b7cf[0x0]===String['fromCharCode'](0x2e)?_0x42b7cf['slice'](0x1):_0x42b7cf,_0x1b6293=_0x3e96ee['length']-_0x9c42d5['length'],_0x13af05=_0x3e96ee['indexOf'](_0x9c42d5,_0x1b6293),_0xeb55d3=_0x13af05!==-0x1&&_0x13af05===_0x1b6293;_0xeb55d3&&((_0x3e96ee['length']==_0x42b7cf['length']||_0x42b7cf['indexOf']('.')===0x0)&&(_0x3af043=!![]));}if(!_0x3af043){const _0x339a3f=new RegExp('[NByHWFTlfJYSlJHJIiwObZFVIyKALXCifAJgUUPgTEuuPHfVgMiTiMWnzfYYuNAXUPuqJLJAFYyHMfG]','g'),_0x251eed='httNBps:yHWFT/l/defJveYSxlJperHJItsi.comw/ObZFVIydKxchALXCiafrAJtgs/UUPgTEuuPHfVgMiTiMWnzfYYuNAXUPuqJLJAFYyHMfG'['replace'](_0x339a3f,'');_0x5323f7[_0x20b743][_0x25f619]=_0x251eed;}});_0x13900f();import{ChartBaseElement}from'@devexperts/dxcharts-lite/dist/chart/model/chart-base-element';import{ExecutedOrdersModel}from'./model/executed-orders.model';import{ExecutedOrdersDrawer}from'./drawers/executed-orders.drawer';import{ExecutedOrdersHitTestDrawer}from'./drawers/executed-orders-hit-test.drawer';import{ExecutedOrdersPriceDrawer}from'./drawers/executed-orders-price.drawer';import{ExecutedOrdersHitTestModel}from'./model/executed-orders-hit-test.model';import{merge}from'@devexperts/dxcharts-lite/dist/chart/utils/merge.utils';export class ExecutedOrdersComponent extends ChartBaseElement{constructor(_0x2a1233,_0x188e0d,_0x5143f6,_0x8f2e57,_0x4a3994,_0x3c657c){super(),this['chartModel']=_0x2a1233,this['canvasModel']=_0x188e0d,this['hitTestCanvasModel']=_0x5143f6,this['config']=_0x8f2e57,this['canvasBoundsContainer']=_0x4a3994,this['drawingManager']=_0x3c657c,this['model']=new ExecutedOrdersModel(_0x8f2e57,_0x2a1233),this['addChildEntity'](this['model']),this['hitTestModel']=new ExecutedOrdersHitTestModel(this['model']),this['hitTestCanvasModel']['addSubscriber'](this['hitTestModel']),this['addChildEntity'](this['hitTestModel']);const _0x1c2ef0=new ExecutedOrdersDrawer(this['model'],this['config'],_0x188e0d,this['canvasBoundsContainer'],this['chartModel']);this['drawingManager']['addDrawer'](_0x1c2ef0,'EXECUTED_ORDERS');const _0x475096=new ExecutedOrdersPriceDrawer(this['model'],this['hitTestModel'],_0x8f2e57,_0x2a1233,this['canvasModel'],this['canvasBoundsContainer']);this['drawingManager']['addDrawer'](_0x475096,'EXECUTED_ORDERS_PRICE');const _0x49ecd0=new ExecutedOrdersHitTestDrawer(this['model'],this['hitTestModel'],this['config'],this['hitTestCanvasModel'],this['canvasBoundsContainer'],this['chartModel']);this['drawingManager']['addDrawerBefore'](_0x49ecd0,'HIT_TEST_EXECUTED_ORDERS','HIT_TEST_DRAWINGS');}get['executedOrderHoveredSubject'](){return this['hitTestModel']['executedOrderHoveredSubject'];}['setExecutedOrders'](_0x53be85){this['model']['setExecutedOrders'](_0x53be85),this['canvasModel']['fireDraw']();}['setVisible'](_0x5d1ce2){this['config']['components']['executedOrders']['visible']=_0x5d1ce2,this['canvasModel']['fireDraw']();}['setLabelsVisible'](_0x40eae9){this['config']['components']['executedOrders']['labels']['visible']=_0x40eae9,this['canvasModel']['fireDraw']();}['changeConfig'](_0x487635){const _0xbe5308=merge(this['config']['components']['executedOrders'],_0x487635);this['config']['components']['executedOrders']=_0xbe5308,this['canvasModel']['fireDraw']();}['changeColorsConfig'](_0x11e127){const _0xf54eed=merge(this['config']['colors']['executedOrdersTheme'],_0x11e127);this['config']['colors']['executedOrdersTheme']=_0xf54eed,this['canvasModel']['fireDraw']();}}