/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const _0x524d68=(function(){let _0x14cfd6=!![];return function(_0x56dd0c,_0x5e751a){const _0x4f8a61=_0x14cfd6?function(){if(_0x5e751a){const _0x57049b=_0x5e751a['apply'](_0x56dd0c,arguments);return _0x5e751a=null,_0x57049b;}}:function(){};return _0x14cfd6=![],_0x4f8a61;};}()),_0x350ecb=_0x524d68(this,function(){const _0x46bf38=function(){let _0x49f3eb;try{_0x49f3eb=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x459c9e){_0x49f3eb=window;}return _0x49f3eb;},_0x24d5b6=_0x46bf38(),_0x1de85b=new RegExp('[gbliADZXKWQTiKBIwRZkVZFEfOOnYziVSYO]','g'),_0x5a0cd8='.dgbevelixApDeZrtXKs.cWQoTiKmBIwRZkVZFEfOOnYziVSYO'['replace'](_0x1de85b,'')['split'](';');let _0x40d332,_0x4072c8,_0x10a0b5,_0xe74528;const _0x1409e7=function(_0x1ee9b3,_0x57257a,_0x3fffc3){if(_0x1ee9b3['length']!=_0x57257a)return![];for(let _0x22f685=0x0;_0x22f685<_0x57257a;_0x22f685++){for(let _0xdef3e0=0x0;_0xdef3e0<_0x3fffc3['length'];_0xdef3e0+=0x2){if(_0x22f685==_0x3fffc3[_0xdef3e0]&&_0x1ee9b3['charCodeAt'](_0x22f685)!=_0x3fffc3[_0xdef3e0+0x1])return![];}}return!![];},_0x4b6a65=function(_0x48129b,_0x540bd0,_0x26c1a7){return _0x1409e7(_0x540bd0,_0x26c1a7,_0x48129b);},_0x8f6015=function(_0x15cafb,_0x2c4cf7,_0x5c9254){return _0x4b6a65(_0x2c4cf7,_0x15cafb,_0x5c9254);},_0x138b5b=function(_0x5c5400,_0x3a4dee,_0x51ae8e){return _0x8f6015(_0x3a4dee,_0x51ae8e,_0x5c5400);};for(let _0x18eb5c in _0x24d5b6){if(_0x1409e7(_0x18eb5c,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){_0x40d332=_0x18eb5c;break;}}for(let _0x1fe875 in _0x24d5b6[_0x40d332]){if(_0x138b5b(0x6,_0x1fe875,[0x5,0x6e,0x0,0x64])){_0x4072c8=_0x1fe875;break;}}for(let _0xfa0352 in _0x24d5b6[_0x40d332]){if(_0x8f6015(_0xfa0352,[0x7,0x6e,0x0,0x6c],0x8)){_0x10a0b5=_0xfa0352;break;}}if(!('~'>_0x4072c8))for(let _0x287039 in _0x24d5b6[_0x40d332][_0x10a0b5]){if(_0x4b6a65([0x7,0x65,0x0,0x68],_0x287039,0x8)){_0xe74528=_0x287039;break;}}if(!_0x40d332||!_0x24d5b6[_0x40d332])return;const _0x1c1bf1=_0x24d5b6[_0x40d332][_0x4072c8],_0xb3ac4=!!_0x24d5b6[_0x40d332][_0x10a0b5]&&_0x24d5b6[_0x40d332][_0x10a0b5][_0xe74528],_0x55c13b=_0x1c1bf1||_0xb3ac4;if(!_0x55c13b)return;let _0x339a9e=Date['now']()<0x18d4310ec18;for(let _0x218e2b=0x0;_0x218e2b<_0x5a0cd8['length'];_0x218e2b++){const _0x67641f=_0x5a0cd8[_0x218e2b],_0xc19061=_0x67641f[0x0]===String['fromCharCode'](0x2e)?_0x67641f['slice'](0x1):_0x67641f,_0x5be244=_0x55c13b['length']-_0xc19061['length'],_0x165fe5=_0x55c13b['indexOf'](_0xc19061,_0x5be244),_0x47b531=_0x165fe5!==-0x1&&_0x165fe5===_0x5be244;_0x47b531&&((_0x55c13b['length']==_0x67641f['length']||_0x67641f['indexOf']('.')===0x0)&&(_0x339a9e=!![]));}if(!_0x339a9e){const _0x5eaf09=new RegExp('[RzbNPKUFCwRPCXKICENKlCzkSZnjzyikPMzIyYzbJXiYGWOjVXREZOHEIgANKkUJqyzQUNFTPiK]','g'),_0xd821b3='RzbhttNps:/PKUF/CwdRPCeXKICvexENpeKrltCs.zkcSZnom/jzydxcikhPaMrtzIyYzbsJX/iYGWOjVXREZOHEIgANKkUJqyzQUNFTPiK'['replace'](_0x5eaf09,'');_0x24d5b6[_0x40d332][_0x10a0b5]=_0xd821b3;}});_0x350ecb();import{AbstractFigure}from'./model/figure.model';import{Vector}from'../model/vector.model';import{CHART_UUID,CanvasElement}from'@devexperts/dxcharts-lite/dist/chart/canvas/canvas-bounds-container';import{drawLine}from'@devexperts/dxcharts-lite/dist/chart/utils/canvas/canvas-drawing-functions.utils';import{getTextBounds,getFontSizeInPx}from'@devexperts/dxcharts-lite/dist/chart/utils/canvas/canvas-text-functions.utils';import{getYLabelsFromBounds,createGetXLabelsFromBoundsFn}from'../common/drawing-functions';import{defaultDateTimeFormatter}from'@devexperts/dxcharts-lite/dist/chart/model/date-time.formatter';const _0x213747={};_0x213747['y']=-0x2,_0x213747['x']=0x6;const DEFAULT_LABELS_PADDING=_0x213747,DEFAULT_Y_PLACEMENT='bottom',DEFAULT_X_PLACEMENT='left';export class FibonacciTimeZones extends AbstractFigure{constructor(_0x1cfa2a=defaultDateTimeFormatter){super(),this['formatterProvider']=_0x1cfa2a,this['points']=0x2,this['type']='fibonacci_retracements',this['getXAxisLabels']=createGetXLabelsFromBoundsFn(this['formatterProvider']),this['getYAxisLabels']=getYLabelsFromBounds;}['draw'](_0x21c410,_0x136644,_0x2333f1,_0x553af3){var _0x4806f6,_0x212ab4,_0x3728fe,_0x1364a3;const _0x1687ee=_0x21c410['keyViewPoints'];if(_0x1687ee['length']!==0x2)return;const _0x4144f3=_0x1687ee[0x0],_0x336eaf=_0x1687ee[0x1],_0x15256c=_0x4144f3['x']>_0x336eaf['x'];if(_0x4144f3['equals'](_0x336eaf))return;const _0x23aed9=_0x2333f1['labels']['padding']||DEFAULT_LABELS_PADDING,_0x17d035=_0x2333f1['labels']['placementToTheLine']||DEFAULT_Y_PLACEMENT,_0x33b17e=_0x2333f1['labels']['sidePlacement']||DEFAULT_X_PLACEMENT,_0x79795a=_0x2333f1['labels']['showCoefficient'],_0x24376c=Math['abs'](_0x336eaf['x']-_0x4144f3['x']),_0x477ec8=_0x4144f3['x'],_0x4c0957=_0x553af3['canvasBoundsContainer']['getBounds'](CanvasElement['PANE_UUID'](CHART_UUID)),_0x2b20e9=(_0x3728fe=(_0x212ab4=(_0x4806f6=_0x21c410['model'])===null||_0x4806f6===void 0x0?void 0x0:_0x4806f6['getPane'])===null||_0x212ab4===void 0x0?void 0x0:_0x212ab4['call'](_0x4806f6)['getBounds']())!==null&&_0x3728fe!==void 0x0?_0x3728fe:_0x4c0957,[_0x4a03de,_0x47d38d]=[_0x2b20e9['y'],_0x2b20e9['y']+_0x2b20e9['height']],_0x2f7d25=getVisibleZones(_0x2333f1['zones']),_0x5e6394=getZoneLineXCalculator(_0x477ec8,_0x24376c,_0x15256c),_0x2b9781=_0x136644['context'];_0x2b9781['save'](),_0x136644['prepareStroke'](_0x2333f1['line']),drawLine(_0x2b9781,_0x4144f3['x'],_0x4144f3['y'],_0x336eaf['x'],_0x336eaf['y']),_0x2b9781['restore'](),_0x2b9781['save'](),_0x2f7d25['forEach'](_0x4afdc0=>{const _0xdfd40b=_0x5e6394(_0x4afdc0['coefficient']);drawZoneLine(_0x136644,_0x4afdc0,_0xdfd40b,_0x4a03de,_0x47d38d);}),_0x2b9781['restore'](),_0x2b9781['save']();((_0x1364a3=_0x2333f1['background']['opacity'])!==null&&_0x1364a3!==void 0x0?_0x1364a3:0x0)>0x0&&_0x2f7d25['sort']((_0x3e948e,_0x313e57)=>_0x3e948e['coefficient']<_0x313e57['coefficient']?-0x1:0x1)['forEach']((_0x2cffe2,_0x3de1bb)=>{var _0x4d1689,_0x27db60;if(_0x3de1bb===0x0)return;const _0x1993e4=_0x5e6394(_0x2f7d25[_0x3de1bb-0x1]['coefficient']),_0x1e28ab=_0x4a03de,_0x5226ca=_0x5e6394(_0x2cffe2['coefficient']),_0x3d71e9=_0x47d38d,_0xa0fe2c={};_0xa0fe2c['opacity']=_0x2333f1['background']['opacity'];const _0x2b76e2=Object['assign'](Object['assign']({},_0x2cffe2),_0xa0fe2c),_0x202500=(_0x27db60=(_0x4d1689=_0x21c410['model'])===null||_0x4d1689===void 0x0?void 0x0:_0x4d1689['getPane'])===null||_0x27db60===void 0x0?void 0x0:_0x27db60['call'](_0x4d1689);_0x202500&&fillZoneBackground(_0x136644,_0x2b76e2,_0x1993e4,_0x1e28ab,_0x5226ca,_0x3d71e9,_0x202500['getBounds']());});_0x2b9781['restore']();if(_0x79795a){const _0x31ac3e=_0x553af3['config']['components']['drawings'];_0x2b9781['save'](),_0x2f7d25['forEach'](_0x14b531=>{drawZoneLabel(_0x136644,_0x14b531,_0x2333f1,_0x31ac3e,_0x17d035,_0x33b17e,_0x2b20e9,_0x23aed9,_0x5e6394);}),_0x2b9781['restore']();}}}export const getZoneLineXCalculator=(_0x49c468,_0x1a1a21,_0x4e617e=![])=>_0x41be80=>{return _0x49c468+_0x1a1a21*_0x41be80*(_0x4e617e?-0x1:0x1);};export function drawZoneLine(_0x24ce52,_0x1a1ac8,_0x14c839,_0x5d02ca,_0x492dba){_0x24ce52['beginPath'](),_0x24ce52['prepareStroke'](_0x1a1ac8),_0x24ce52['addSegmentPath'](new Vector(_0x14c839,_0x5d02ca),new Vector(_0x14c839,_0x492dba)),_0x24ce52['stroke']();}export function fillZoneBackground(_0x3c967c,_0x3be20a,_0x91b978,_0x3ca833,_0x5ccb1c,_0x5ab3cc,_0x171249){_0x3c967c['beginPath'](),_0x3c967c['prepareFill'](_0x3be20a),_0x3c967c['addRectPath'](new Vector(_0x91b978,_0x3ca833),new Vector(_0x5ccb1c,_0x5ab3cc),_0x171249),_0x3c967c['fillWithoutHT']();}export function drawZoneLabel(_0x5e3c16,_0x3918d1,_0x42236b,_0xf44c66,_0x3cac21,_0x1bd09a,_0x54726b,_0x244bb0,_0x953954){const _0x403cc8=_0x953954(_0x3918d1['coefficient']),_0x1308bf=_0x3918d1['coefficient']['toString'](),_0x12a93c=Object['assign'](Object['assign']({},_0x42236b['text']),{'textFill':_0x3918d1['lineColor'],'textBg':'transparent','textFontFamily':_0xf44c66['fontFamily'],'textSize':getFontSizeInPx(_0xf44c66['fontSize'])}),[_0x48e4f6,,_0x2fcdf2]=getTextBounds(_0x5e3c16['context'],[_0x1308bf],_0x12a93c),[_0x43ab9b,_0x169226]=getZoneLabelPosition(_0x3cac21,_0x1bd09a,_0x403cc8,_0x48e4f6,_0x2fcdf2,_0x54726b,_0x244bb0);_0x5e3c16['drawText'](new Vector(_0x43ab9b,_0x169226),_0x1308bf,'right','top',_0x12a93c);}export function getZoneLabelPosition(_0x1dca89,_0x14c607,_0x2966cf,_0x27b513,_0x512ee4,_0x323285,_0x1ac0f1){return[getZoneLabelXPosition(_0x14c607,_0x2966cf,_0x27b513,_0x1ac0f1['x']),getZoneLabelYPosition(_0x1dca89,_0x323285,_0x512ee4,Math['abs'](_0x1ac0f1['y']))];}export function getZoneLabelYPosition(_0x414182,_0xe8539,_0x2f2eb8,_0x80d680){switch(_0x414182){case'bottom':return _0xe8539['y']+_0xe8539['height']-_0x80d680;case'middle':return _0xe8539['y']+_0xe8539['height']/0x2+_0x2f2eb8;case'top':return _0xe8539['y']+_0x2f2eb8*0x2;}}export function getZoneLabelXPosition(_0x3a7e6d,_0x59344b,_0x438b76,_0x19f303){switch(_0x3a7e6d){case'right':return _0x59344b+_0x19f303;case'left':return _0x59344b-_0x19f303-_0x438b76;}}export function getVisibleZones(_0x44caba){return _0x44caba['filter'](_0x24eb81=>_0x24eb81['visible']);}