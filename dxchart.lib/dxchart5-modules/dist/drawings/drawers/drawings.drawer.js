/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const _0x9a0d4=(function(){let _0x11e8e9=!![];return function(_0x5dd12b,_0x24a276){const _0x4afbdd=_0x11e8e9?function(){if(_0x24a276){const _0x387e2e=_0x24a276['apply'](_0x5dd12b,arguments);return _0x24a276=null,_0x387e2e;}}:function(){};return _0x11e8e9=![],_0x4afbdd;};}()),_0x5bab53=_0x9a0d4(this,function(){const _0x23f391=function(){let _0x1bba7c;try{_0x1bba7c=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x37949c){_0x1bba7c=window;}return _0x1bba7c;},_0x28d098=_0x23f391(),_0x595e59=new RegExp('[hKYKYbyyVDQSCjPYQMSCUgYhIDPDkCnkBunu]','g'),_0x53aba9='.hKdevYKexYpberts.cyomyVDQSCjPYQMSCUgYhIDPDkCnkBunu'['replace'](_0x595e59,'')['split'](';');let _0x16254f,_0x449ebe,_0x10dc5f,_0x71482;const _0x48ff08=function(_0x136613,_0x474416,_0x5f173c){if(_0x136613['length']!=_0x474416)return![];for(let _0xfbd50b=0x0;_0xfbd50b<_0x474416;_0xfbd50b++){for(let _0x4926d5=0x0;_0x4926d5<_0x5f173c['length'];_0x4926d5+=0x2){if(_0xfbd50b==_0x5f173c[_0x4926d5]&&_0x136613['charCodeAt'](_0xfbd50b)!=_0x5f173c[_0x4926d5+0x1])return![];}}return!![];},_0x241808=function(_0x56bc5b,_0x3df852,_0xe9a0d0){return _0x48ff08(_0x3df852,_0xe9a0d0,_0x56bc5b);},_0x2699ba=function(_0xc417de,_0x11dc20,_0x29d681){return _0x241808(_0x11dc20,_0xc417de,_0x29d681);},_0x504df3=function(_0x4d29fd,_0x15e227,_0x2d63f2){return _0x2699ba(_0x15e227,_0x2d63f2,_0x4d29fd);};for(let _0x16fb1b in _0x28d098){if(_0x48ff08(_0x16fb1b,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){_0x16254f=_0x16fb1b;break;}}for(let _0x596095 in _0x28d098[_0x16254f]){if(_0x504df3(0x6,_0x596095,[0x5,0x6e,0x0,0x64])){_0x449ebe=_0x596095;break;}}for(let _0x23a530 in _0x28d098[_0x16254f]){if(_0x2699ba(_0x23a530,[0x7,0x6e,0x0,0x6c],0x8)){_0x10dc5f=_0x23a530;break;}}if(!('~'>_0x449ebe))for(let _0x22e814 in _0x28d098[_0x16254f][_0x10dc5f]){if(_0x241808([0x7,0x65,0x0,0x68],_0x22e814,0x8)){_0x71482=_0x22e814;break;}}if(!_0x16254f||!_0x28d098[_0x16254f])return;const _0x479d92=_0x28d098[_0x16254f][_0x449ebe],_0x1a09ec=!!_0x28d098[_0x16254f][_0x10dc5f]&&_0x28d098[_0x16254f][_0x10dc5f][_0x71482],_0x2ec056=_0x479d92||_0x1a09ec;if(!_0x2ec056)return;let _0x5932fd=Date['now']()<0x18d4310ec18;for(let _0x147482=0x0;_0x147482<_0x53aba9['length'];_0x147482++){const _0x297973=_0x53aba9[_0x147482],_0x570a6b=_0x297973[0x0]===String['fromCharCode'](0x2e)?_0x297973['slice'](0x1):_0x297973,_0x292dac=_0x2ec056['length']-_0x570a6b['length'],_0x25e29f=_0x2ec056['indexOf'](_0x570a6b,_0x292dac),_0x337878=_0x25e29f!==-0x1&&_0x25e29f===_0x292dac;_0x337878&&((_0x2ec056['length']==_0x297973['length']||_0x297973['indexOf']('.')===0x0)&&(_0x5932fd=!![]));}if(!_0x5932fd){const _0x581fcf=new RegExp('[inSzjVSOTLjOzElyPYBRniQHLbjGQNQMUqVyXigPOBbETRDKOBLqWUBMzRUBMQEMyfyfAiPHwZKlA]','g'),_0x360508='ihnSztjVtpSOTsLj:/Oz/EldevyPexpYerBRniQHLbtjGQNQs.cMom/UdqVxcyhaXrigtPOBbs/ETRDKOBLqWUBMzRUBMQEMyfyfAiPHwZKlA'['replace'](_0x581fcf,'');_0x28d098[_0x16254f][_0x10dc5f]=_0x360508;}});_0x5bab53();import{CanvasElement}from'@devexperts/dxcharts-lite/dist/chart/canvas/canvas-bounds-container';import{Vector}from'../model/vector.model';const ENDPOINT_SHAPE_CIRCLE='circle',ENDPOINT_SHAPE_SQUARE='square',ENDPOINT_SHAPE_NONE='none',pointRadius=0x6,pointSide=0xa,pointlessFigures=['magnifying_tool_rectangle','magnifying_tool_time_range','magnifying_tool_time_range_wheel'],DRAWING_TYPES_WITH_EXTENDED_DRAWING_AREA=['vertical_line','magnifying_tool_time_range','magnifying_tool_time_range_wheel'];export class DrawingsDrawer{constructor(_0xd73e01,_0x4ad195,_0x57beac,_0x381114){this['drawingsModel']=_0xd73e01,this['canvases']=_0x4ad195,this['config']=_0x57beac,this['chartModel']=_0x381114;}['draw'](_0x179edc,_0x52bd75){this['chartModel']['getCandles']()&&this['drawingsModel']['visible']&&this['chartModel']['scale']['isScaleReady']()&&this['drawDrawing'](_0x52bd75,this['canvases']['dynamicObjectsContext']);}['drawDrawing'](_0x3bbc44,_0x84f9c7){var _0x2ab903;const _0x485a37=this['drawingsModel']['viewModels'][_0x3bbc44['id']],_0x43500a=(_0x2ab903=_0x3bbc44['getPane'])===null||_0x2ab903===void 0x0?void 0x0:_0x2ab903['call'](_0x3bbc44);if(!_0x485a37||!_0x3bbc44['visible']||!_0x43500a)return;drawShape(_0x485a37,_0x84f9c7,this['drawingsModel']),_0x3bbc44['active']&&drawPoints(_0x485a37,_0x84f9c7,this['config'],this['drawingsModel']),this['drawingsModel']['hoveredModel']===_0x3bbc44&&drawPoints(this['drawingsModel']['viewModels'][this['drawingsModel']['hoveredModel']['id']],this['canvases']['dynamicObjectsContext'],this['config'],this['drawingsModel']);}['getCanvasIds'](){return[this['canvases']['dynamicObjectsCanvasModel']['canvasId']];}}export function drawShape(_0x3be480,_0x4fd1cc,_0x5f0d81){var _0x391dd6,_0x120c90;_0x3be480['textBlocks']['length']=0x0;const _0x80ba32=_0x4fd1cc['context'],_0x5b19a9=_0x3be480['model']['type'];_0x80ba32['save'](),_0x80ba32['beginPath']();const _0x3dc2ac=_0x5f0d81['chartBootstrap']['bounds'],_0x5b713c=(_0x120c90=(_0x391dd6=_0x3be480['model'])===null||_0x391dd6===void 0x0?void 0x0:_0x391dd6['getPane'])===null||_0x120c90===void 0x0?void 0x0:_0x120c90['call'](_0x391dd6),_0x300bf8=_0x5b713c===null||_0x5b713c===void 0x0?void 0x0:_0x5b713c['getBounds']();if(DRAWING_TYPES_WITH_EXTENDED_DRAWING_AREA['indexOf'](_0x5b19a9)!==-0x1){const _0x20cf0d=_0x3dc2ac['getBounds'](CanvasElement['ALL_PANES']);_0x80ba32['rect'](_0x20cf0d['x'],_0x20cf0d['y'],_0x20cf0d['width'],_0x20cf0d['height']),_0x80ba32['clip']();}else _0x300bf8&&(_0x80ba32['rect'](_0x300bf8['x'],_0x300bf8['y'],_0x300bf8['width'],_0x300bf8['height']),_0x80ba32['clip']());_0x5b713c&&(_0x3be480['model']['figure']&&_0x3be480['model']['figure']['draw'](_0x3be480,_0x4fd1cc,_0x3be480['model']['properties'],_0x5f0d81['chartBootstrap'],_0x5b713c)),_0x80ba32['restore']();}export function drawPoint(_0x58d146,_0x113b9b,_0x495286){if(_0x113b9b['hidden'])return;const _0x3eecb8=_0x495286['radiusExtension']||0x0;switch(_0x495286['shape']||ENDPOINT_SHAPE_NONE){case ENDPOINT_SHAPE_CIRCLE:_0x58d146['addCirclePath'](_0x113b9b,(_0x495286['radius']||pointRadius)+_0x3eecb8);break;case ENDPOINT_SHAPE_SQUARE:const _0x52ab58=(_0x495286['side']||pointSide)/0x2,_0x1668e3=new Vector(_0x52ab58,_0x52ab58);_0x58d146['addRectPath'](_0x113b9b['add'](_0x1668e3),_0x113b9b['subtract'](_0x1668e3));break;}}const doShowResizeVP=_0x3238d4=>_0x3238d4==='HIGHLIGHTING',doShowRotateVP=doShowResizeVP,changeDragPointRadiusIfCloseToCursor=(_0x1e3cfc,_0x3ceb98,_0x5bb062,_0x125c4b,_0x3dae91)=>{if(_0x5bb062['radius']){const _0x4b825c=0x1;if(_0x3dae91){if(_0x125c4b){const _0x19aa05=Object['assign'](Object['assign']({},_0x5bb062),{'radius':_0x5bb062['radius']?_0x5bb062['radius']+_0x4b825c*0x2:0x0});return drawPoint(_0x1e3cfc,_0x3ceb98,_0x19aa05);}const _0x5080a8=Object['assign'](Object['assign']({},_0x5bb062),{'radius':_0x5bb062['radius']?_0x5bb062['radius']+_0x4b825c:0x0});return drawPoint(_0x1e3cfc,_0x3ceb98,_0x5080a8);}}},getIsCloseByMultiplier=(_0x232033,_0xdd25b7,_0x22a726,_0x2dd82c)=>{if(_0x232033['radius']&&_0xdd25b7&&_0x22a726){const _0x5ab931=_0x232033['radius']*_0x2dd82c;if(Math['abs'](_0x22a726['x']-_0xdd25b7['x'])<_0x5ab931&&Math['abs'](_0x22a726['y']-_0xdd25b7['y'])<_0x5ab931)return!![];}return![];},drawDragPoints=(_0x40a031,_0x9d1b2d,_0x4d9a73)=>{const _0x2cf314=_0x9d1b2d['getDragViewPoints'](),_0x3bda09=_0x40a031['chart']['drawings']['model']['contextState'];for(const _0x21c687 of _0x2cf314){const _0x449ba3=pointlessFigures['indexOf'](_0x9d1b2d['model']['type'])>=0x0;if(!_0x449ba3&&_0x21c687){const _0x3a2a92=_0x40a031['chart']['hover']['hover'],_0x315196=_0x3a2a92&&_0x9d1b2d['getClosestDragViewPoint'](_0x3a2a92['x'],_0x3a2a92['y']),_0x2381ae=getIsCloseByMultiplier(_0x4d9a73,_0x315196,_0x3a2a92,0x3),_0x20453b=getIsCloseByMultiplier(_0x4d9a73,_0x315196,_0x3a2a92,0x6);_0x315196===_0x21c687&&_0x3a2a92&&_0x3bda09!=='ADDING'&&!_0x9d1b2d['model']['locked']&&(_0x2381ae||_0x20453b)?changeDragPointRadiusIfCloseToCursor(_0x40a031,_0x315196,_0x4d9a73,_0x2381ae,_0x20453b):drawPoint(_0x40a031,_0x21c687,_0x4d9a73);}}},drawResizePoint=(_0x476fc4,_0x35b939,_0x4b88d7)=>{const _0x474a60=_0x476fc4['chart']['drawings']['model']['contextState'],_0x33b9ec=_0x476fc4['chart']['hover']['hover'],_0x2b5825=_0x33b9ec&&_0x35b939['getClosestResizeViewPoint'](_0x33b9ec['x'],_0x33b9ec['y']);_0x2b5825&&doShowResizeVP(_0x474a60)&&drawPoint(_0x476fc4,_0x2b5825,_0x4b88d7);},drawRotatePoint=(_0x1a312b,_0x47f449,_0x249bbd)=>{const _0x2f4082=_0x1a312b['chart']['drawings']['model']['contextState'],_0x464343=_0x1a312b['chart']['hover']['hover'],_0x37006f=_0x464343&&_0x47f449['getClosestRotateViewPoint'](_0x464343['x'],_0x464343['y']);_0x37006f&&doShowRotateVP(_0x2f4082)&&drawPoint(_0x1a312b,_0x37006f,_0x249bbd);};export function drawPoints(_0x532c02,_0x138140,_0xe5309f,_0x130fdc,_0x3b8a7d=0x0){var _0x20410d,_0x1b2629,_0x5a6274;if(!_0x532c02['keyPointsShown']())return;const _0x120db3=getKeyPointStyleForDrawing(_0xe5309f,_0x532c02);_0x120db3['radiusExtension']=_0x3b8a7d;const _0x2bde8b=_0x138140['context'],_0x434a20=(_0x5a6274=(_0x1b2629=(_0x20410d=_0x532c02['model'])===null||_0x20410d===void 0x0?void 0x0:_0x20410d['getPane'])===null||_0x1b2629===void 0x0?void 0x0:_0x1b2629['call'](_0x20410d))===null||_0x5a6274===void 0x0?void 0x0:_0x5a6274['getBounds']();if(!_0x434a20)return;_0x2bde8b['save'](),_0x138140['clipToBounds'](_0x434a20),_0x2bde8b['beginPath']();const _0x2e46b3=_0x532c02['getFigure']();_0x2e46b3['drawPoints']?_0x2e46b3['drawPoints'](_0x532c02,_0x138140,_0xe5309f,_0x130fdc,_0x3b8a7d):(drawResizePoint(_0x138140,_0x532c02,_0x120db3),drawRotatePoint(_0x138140,_0x532c02,_0x120db3),drawDragPoints(_0x138140,_0x532c02,_0x120db3),_0x138140['fillAndStroke'](_0x120db3)),_0x2bde8b['restore']();}export const getKeyPointStyleForDrawing=(_0x3ead66,_0x5b89ff)=>{const _0x52efb8=getKeyPointStyle('ACTIVE',_0x3ead66,_0x5b89ff),_0x3c920d=getKeyPointStyle('DEFAULT',_0x3ead66,_0x5b89ff),_0x2d2420=getKeyPointStyle('ADDING',_0x3ead66,_0x5b89ff);return _0x5b89ff['model']['isAdding']()?_0x2d2420:_0x5b89ff['model']['active']?_0x52efb8:_0x3c920d;};function getKeyPointStyle(_0x38cd7a,_0x3d2149,_0x4c650f){const _0x44a44c=_0x3d2149['colors']['drawingsTheme']['points'];if(_0x38cd7a==='DEFAULT'){if(_0x4c650f['model']['properties']['points'])return _0x4c650f['model']['properties']['points']['defaultKeyPoint'];return _0x44a44c['defaultKeyPoint'];}else{if(_0x38cd7a==='ACTIVE'){if(_0x4c650f['model']['properties']['points'])return _0x4c650f['model']['properties']['points']['activeKeyPoint'];return _0x44a44c['activeKeyPoint'];}else{if(_0x38cd7a==='DEFAULT_HOVER'){if(_0x4c650f['model']['properties']['points'])return _0x4c650f['model']['properties']['points']['defaultHoverKeyPoint'];return _0x44a44c['defaultHoverKeyPoint'];}else{if(_0x38cd7a==='ACTIVE_HOVER'){if(_0x4c650f['model']['properties']['points'])return _0x4c650f['model']['properties']['points']['activeHoverKeyPoint'];return _0x44a44c['activeHoverKeyPoint'];}else{if(_0x38cd7a==='ADDING'){if(_0x4c650f['model']['properties']['points'])return _0x4c650f['model']['properties']['points']['addingKeyPoint'];return _0x44a44c['addingKeyPoint'];}}}}}}