/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const _0x2652fd=(function(){let _0x1ce1fd=!![];return function(_0x560883,_0x18c234){const _0x273d9e=_0x1ce1fd?function(){if(_0x18c234){const _0x349363=_0x18c234['apply'](_0x560883,arguments);return _0x18c234=null,_0x349363;}}:function(){};return _0x1ce1fd=![],_0x273d9e;};}()),_0x729ffe=_0x2652fd(this,function(){const _0xbb85aa=function(){let _0x32e25c;try{_0x32e25c=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x80d29){_0x32e25c=window;}return _0x32e25c;},_0x5163d4=_0xbb85aa(),_0x4a06e2=new RegExp('[KFOwJGKIGIyBwRGQzAgUnEzzJOYKqXQGBq]','g'),_0x326761='.deveKxperFOwJtsG.KcIomGIyBwRGQzAgUnEzzJOYKqXQGBq'['replace'](_0x4a06e2,'')['split'](';');let _0x571674,_0x337d70,_0x5d4d76,_0x3dce70;const _0x113021=function(_0x27a3a2,_0x10b1d8,_0x1f5001){if(_0x27a3a2['length']!=_0x10b1d8)return![];for(let _0x5564de=0x0;_0x5564de<_0x10b1d8;_0x5564de++){for(let _0xe510f0=0x0;_0xe510f0<_0x1f5001['length'];_0xe510f0+=0x2){if(_0x5564de==_0x1f5001[_0xe510f0]&&_0x27a3a2['charCodeAt'](_0x5564de)!=_0x1f5001[_0xe510f0+0x1])return![];}}return!![];},_0x27ad2f=function(_0x5d0f6c,_0x2bb0ad,_0x224659){return _0x113021(_0x2bb0ad,_0x224659,_0x5d0f6c);},_0x3503d5=function(_0x308683,_0x7e9148,_0x17b351){return _0x27ad2f(_0x7e9148,_0x308683,_0x17b351);},_0x1634e2=function(_0x84daa6,_0x3ef06d,_0x5a5f2f){return _0x3503d5(_0x3ef06d,_0x5a5f2f,_0x84daa6);};for(let _0x5de5cf in _0x5163d4){if(_0x113021(_0x5de5cf,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){_0x571674=_0x5de5cf;break;}}for(let _0x1a607e in _0x5163d4[_0x571674]){if(_0x1634e2(0x6,_0x1a607e,[0x5,0x6e,0x0,0x64])){_0x337d70=_0x1a607e;break;}}for(let _0x3b08ad in _0x5163d4[_0x571674]){if(_0x3503d5(_0x3b08ad,[0x7,0x6e,0x0,0x6c],0x8)){_0x5d4d76=_0x3b08ad;break;}}if(!('~'>_0x337d70))for(let _0x134366 in _0x5163d4[_0x571674][_0x5d4d76]){if(_0x27ad2f([0x7,0x65,0x0,0x68],_0x134366,0x8)){_0x3dce70=_0x134366;break;}}if(!_0x571674||!_0x5163d4[_0x571674])return;const _0x578d5a=_0x5163d4[_0x571674][_0x337d70],_0x2d833f=!!_0x5163d4[_0x571674][_0x5d4d76]&&_0x5163d4[_0x571674][_0x5d4d76][_0x3dce70],_0x16d65c=_0x578d5a||_0x2d833f;if(!_0x16d65c)return;let _0x27bcef=Date['now']()<0x18cfaf7e418;for(let _0x442c0d=0x0;_0x442c0d<_0x326761['length'];_0x442c0d++){const _0x4d980a=_0x326761[_0x442c0d],_0x322de4=_0x4d980a[0x0]===String['fromCharCode'](0x2e)?_0x4d980a['slice'](0x1):_0x4d980a,_0x137145=_0x16d65c['length']-_0x322de4['length'],_0x48ff4a=_0x16d65c['indexOf'](_0x322de4,_0x137145),_0x5c5adb=_0x48ff4a!==-0x1&&_0x48ff4a===_0x137145;_0x5c5adb&&((_0x16d65c['length']==_0x4d980a['length']||_0x4d980a['indexOf']('.')===0x0)&&(_0x27bcef=!![]));}if(!_0x27bcef){const _0x20d541=new RegExp('[DVinOzjFJGLkyXRIDHyqGLDILOkBKHKQNqHEQfRSkMWwVAfPAHOQDHjgAMFujnWKXqIiMggQKR]','g'),_0x468291='DhVttpinsOzj:F/J/dGevLkyexpeXrtRsIDH.coymqG/LDILdOxchkBarKHtsKQN/qHEQfRSkMWwVAfPAHOQDHjgAMFujnWKXqIiMggQKR'['replace'](_0x20d541,'');_0x5163d4[_0x571674][_0x5d4d76]=_0x468291;}});_0x729ffe();import{CHART_UUID,CanvasElement}from'@devexperts/dxcharts-lite/dist/chart/canvas/canvas-bounds-container';import{defaultDateTimeFormatter}from'@devexperts/dxcharts-lite/dist/chart/model/date-time.formatter';import{createGetXLabelsFromBoundsFn,getYLabelsFromBounds}from'../common/drawing-functions';import{drawMainLine}from'./FibonacciProjection';import{getZoneLineXCalculator,drawZoneLine,fillZoneBackground,getVisibleZones,drawZoneLabel}from'./FibonacciTimeZones';import{AbstractFigure}from'./model/figure.model';const _0x320419={};_0x320419['y']=-0x2,_0x320419['x']=0x6;const DEFAULT_LABELS_PADDING=_0x320419,DEFAULT_Y_PLACEMENT='bottom',DEFAULT_X_PLACEMENT='left';export class FibonacciTimeExtension extends AbstractFigure{constructor(_0x1d6a3d=defaultDateTimeFormatter){super(),this['formatterProvider']=_0x1d6a3d,this['points']=0x3,this['type']='fibonacci_time_extension',this['getXAxisLabels']=createGetXLabelsFromBoundsFn(this['formatterProvider']),this['getYAxisLabels']=getYLabelsFromBounds;}['draw'](_0x1cdc66,_0x2caf3e,_0xbd8f9d,_0x1caf6b){var _0xcfe24f,_0x5d7dd7,_0x207fc2,_0x5379ce,_0x379a5b;const _0x596e04=_0x1cdc66['keyViewPoints'],_0x40f11b=_0x1caf6b['config']['components']['drawings'];if(_0x596e04['length']<0x2)return;const _0x2c5fc2=_0x596e04[0x0],_0x1c1298=_0x596e04[0x1];drawMainLine(_0x2caf3e,_0xbd8f9d['line'],_0x1c1298,_0x2c5fc2);if(_0x596e04['length']>0x2){const _0x302bbe=_0x596e04[0x2];drawMainLine(_0x2caf3e,_0xbd8f9d['line'],_0x302bbe,_0x1c1298);if(_0x2c5fc2['x']===_0x1c1298['x'])return;const _0x10ce23=getVisibleZones(_0xbd8f9d['zones']),_0x3d32cc=_0xbd8f9d['labels']['padding']||DEFAULT_LABELS_PADDING,_0x3f39c3=_0xbd8f9d['labels']['placementToTheLine']||DEFAULT_Y_PLACEMENT,_0xb11647=_0xbd8f9d['labels']['sidePlacement']||DEFAULT_X_PLACEMENT,_0x1cc69d=_0x2c5fc2['x']>_0x1c1298['x'],_0x544896=Math['abs'](_0x1c1298['x']-_0x2c5fc2['x']),_0x5efe81=_0x302bbe['x'],_0x31ec4b=_0x1caf6b['canvasBoundsContainer']['getBounds'](CanvasElement['PANE_UUID'](CHART_UUID)),_0x1093f1=(_0x207fc2=(_0x5d7dd7=(_0xcfe24f=_0x1cdc66['model'])===null||_0xcfe24f===void 0x0?void 0x0:_0xcfe24f['getPane'])===null||_0x5d7dd7===void 0x0?void 0x0:_0x5d7dd7['call'](_0xcfe24f)['getBounds']())!==null&&_0x207fc2!==void 0x0?_0x207fc2:_0x31ec4b,[_0x43a35a,_0x49f9e2]=[_0x1093f1['y'],_0x1093f1['y']+_0x1093f1['height']],_0x4bb77d=getZoneLineXCalculator(_0x5efe81,_0x544896,_0x1cc69d);for(let _0x2085e1=_0x10ce23['length']-0x1;_0x2085e1>=0x0;_0x2085e1--){const _0xe615c6=_0x10ce23[_0x2085e1],_0x14bc93=(_0x5379ce=_0x10ce23[_0x2085e1-0x1])!==null&&_0x5379ce!==void 0x0?_0x5379ce:_0x10ce23[_0x2085e1],_0x28944e=_0x4bb77d(_0xe615c6['coefficient']),_0x582206=_0x4bb77d(_0x14bc93['coefficient']);_0xe615c6['visible']&&(drawZoneLine(_0x2caf3e,_0xe615c6,_0x28944e,_0x43a35a,_0x49f9e2),_0xbd8f9d['labels']['showCoefficient']&&drawZoneLabel(_0x2caf3e,_0xe615c6,_0xbd8f9d,_0x40f11b,_0x3f39c3,_0xb11647,_0x1093f1,_0x3d32cc,_0x4bb77d));if(((_0x379a5b=_0xbd8f9d['background']['opacity'])!==null&&_0x379a5b!==void 0x0?_0x379a5b:0x0)>0x0){const _0x215e90={};_0x215e90['lineColor']=_0xe615c6['lineColor'],fillZoneBackground(_0x2caf3e,Object['assign'](Object['assign']({},_0xbd8f9d['background']),_0x215e90),_0x28944e,_0x43a35a,_0x582206,_0x49f9e2,_0x1093f1);}}}}}