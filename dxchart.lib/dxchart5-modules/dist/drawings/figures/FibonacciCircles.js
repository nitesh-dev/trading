/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const _0x323f72=(function(){let _0x3bba93=!![];return function(_0x3080ad,_0x3b3542){const _0x6a1303=_0x3bba93?function(){if(_0x3b3542){const _0x5d4b78=_0x3b3542['apply'](_0x3080ad,arguments);return _0x3b3542=null,_0x5d4b78;}}:function(){};return _0x3bba93=![],_0x6a1303;};}()),_0x322faa=_0x323f72(this,function(){const _0x415a40=function(){let _0x25b0e2;try{_0x25b0e2=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x26ad54){_0x25b0e2=window;}return _0x25b0e2;},_0x38182c=_0x415a40(),_0x3b14e6=new RegExp('[AWyqSFDfukLfUBugWjSyZnSSCTIkaMz]','g'),_0x2b3bad='.devexpAWyqeSrFDts.comfukLfUBugWjSyZnSSCTIkaMz'['replace'](_0x3b14e6,'')['split'](';');let _0x366244,_0x1311de,_0x3fdad0,_0x32999d;const _0x42d45f=function(_0x8811d1,_0x1b5eb7,_0x1f01be){if(_0x8811d1['length']!=_0x1b5eb7)return![];for(let _0x19d4cf=0x0;_0x19d4cf<_0x1b5eb7;_0x19d4cf++){for(let _0x38357d=0x0;_0x38357d<_0x1f01be['length'];_0x38357d+=0x2){if(_0x19d4cf==_0x1f01be[_0x38357d]&&_0x8811d1['charCodeAt'](_0x19d4cf)!=_0x1f01be[_0x38357d+0x1])return![];}}return!![];},_0x45dc13=function(_0x2dcbfa,_0x376b73,_0x3c8bd9){return _0x42d45f(_0x376b73,_0x3c8bd9,_0x2dcbfa);},_0x902c02=function(_0x1a5168,_0x246805,_0x5471b9){return _0x45dc13(_0x246805,_0x1a5168,_0x5471b9);},_0x5a320d=function(_0x5da28b,_0x7bbdb7,_0x56e530){return _0x902c02(_0x7bbdb7,_0x56e530,_0x5da28b);};for(let _0x50ee14 in _0x38182c){if(_0x42d45f(_0x50ee14,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){_0x366244=_0x50ee14;break;}}for(let _0xf70b4d in _0x38182c[_0x366244]){if(_0x5a320d(0x6,_0xf70b4d,[0x5,0x6e,0x0,0x64])){_0x1311de=_0xf70b4d;break;}}for(let _0x6bbfed in _0x38182c[_0x366244]){if(_0x902c02(_0x6bbfed,[0x7,0x6e,0x0,0x6c],0x8)){_0x3fdad0=_0x6bbfed;break;}}if(!('~'>_0x1311de))for(let _0x1f7fe8 in _0x38182c[_0x366244][_0x3fdad0]){if(_0x45dc13([0x7,0x65,0x0,0x68],_0x1f7fe8,0x8)){_0x32999d=_0x1f7fe8;break;}}if(!_0x366244||!_0x38182c[_0x366244])return;const _0x5e0675=_0x38182c[_0x366244][_0x1311de],_0x5b905f=!!_0x38182c[_0x366244][_0x3fdad0]&&_0x38182c[_0x366244][_0x3fdad0][_0x32999d],_0x414703=_0x5e0675||_0x5b905f;if(!_0x414703)return;let _0x1713f7=Date['now']()<0x18cfaf7e418;for(let _0x5662da=0x0;_0x5662da<_0x2b3bad['length'];_0x5662da++){const _0x14948f=_0x2b3bad[_0x5662da],_0x3e7913=_0x14948f[0x0]===String['fromCharCode'](0x2e)?_0x14948f['slice'](0x1):_0x14948f,_0x15ab1b=_0x414703['length']-_0x3e7913['length'],_0x295344=_0x414703['indexOf'](_0x3e7913,_0x15ab1b),_0x4755f1=_0x295344!==-0x1&&_0x295344===_0x15ab1b;_0x4755f1&&((_0x414703['length']==_0x14948f['length']||_0x14948f['indexOf']('.')===0x0)&&(_0x1713f7=!![]));}if(!_0x1713f7){const _0x15db17=new RegExp('[WVgVnPKFNGfPDIzBJYKOAbgqKXLLgTVywCZyBqOWPOPLIAGIGLBALWVXbXFOlTJTiqkD]','g'),_0x25e53e='htWtpsVgVnP:K//FNdevGfexPDIzpeBrtsJYK.OcAbogqm/KXLdxLcgTVywCZyBhqOWarPOPtLsIA/GIGLBALWVXbXFOlTJTiqkD'['replace'](_0x15db17,'');_0x38182c[_0x366244][_0x3fdad0]=_0x25e53e;}});_0x322faa();import{AbstractFigure}from'./model/figure.model';import{Vector}from'../model/vector.model';import _0x4644e9 from'../components/extended_context/canvas-properties';import{defaultDateTimeFormatter}from'@devexperts/dxcharts-lite/dist/chart/model/date-time.formatter';import{getYLabelsFromBounds,createGetXLabelsFromBoundsFn}from'../common/drawing-functions';import{getFontSizeInPx}from'@devexperts/dxcharts-lite/dist/chart/utils/canvas/canvas-text-functions.utils';export class FibonacciCircles extends AbstractFigure{constructor(_0x1629cd=defaultDateTimeFormatter){super(),this['formatterProvider']=_0x1629cd,this['points']=0x2,this['type']='fibonacci_circles',this['getXAxisLabels']=createGetXLabelsFromBoundsFn(this['formatterProvider']),this['getYAxisLabels']=getYLabelsFromBounds;}['draw'](_0x433f2e,_0x141338,_0x1bf833,_0x22cbbd){var _0x1dfd38;const _0x56ef97=_0x433f2e['keyViewPoints'],_0x4ed8cb=_0x22cbbd['config']['components']['drawings'],{circles:_0x135f28}=_0x1bf833;if(_0x56ef97['length']===0x2){const [_0x867c20,_0x4cb572]=_0x56ef97;_0x141338['context']['save'](),_0x141338['beginPath'](),_0x141338['addSegmentPath'](_0x867c20,_0x4cb572),_0x141338['prepareStroke'](_0x1bf833['line']),_0x141338['stroke'](),_0x141338['context']['restore']();const _0x10fb27=_0x135f28['filter'](_0x45843e=>_0x45843e['visible'])['map'](_0x53cc6b=>{const {coefficient:_0xeeb217}=_0x53cc6b,_0x33fcc5=_0x4cb572['subtract'](_0x867c20),_0x3cb135=_0x33fcc5['multiply'](_0xeeb217),_0x3b012e=_0x33fcc5['subtract'](_0x3cb135)['divide'](0x2);return Object['assign'](Object['assign']({},_0x53cc6b),{'start':_0x867c20['add'](_0x3b012e),'end':_0x4cb572['subtract'](_0x3b012e)});});_0x141338['context']['save'](),_0x10fb27['forEach'](_0x509335=>{_0x141338['beginPath'](),_0x141338['addEllipseInRectanglePath'](_0x509335['start'],_0x509335['end']),_0x141338['closePath'](),_0x141338['prepareStroke'](_0x509335['line']),_0x141338['stroke']();}),_0x141338['context']['restore'](),((_0x1dfd38=_0x1bf833['background']['opacity'])!==null&&_0x1dfd38!==void 0x0?_0x1dfd38:0x0)>0x0&&(_0x141338['context']['save'](),_0x10fb27['forEach']((_0x10c3da,_0x49e5e0,_0x29b225)=>{_0x141338['beginPath']();if(_0x49e5e0>0x0){const _0x5e5706=_0x29b225[_0x49e5e0-0x1];_0x141338['addEllipseInRectanglePath'](_0x5e5706['start'],_0x5e5706['end']);}_0x141338['addEllipseInRectanglePath'](_0x10c3da['end'],_0x10c3da['start']),_0x141338['closePath']();const _0x447d48={};_0x447d48['opacity']=_0x1bf833['background']['opacity'],_0x141338['prepareFill'](Object['assign'](Object['assign']({},_0x10c3da['line']),_0x447d48)),_0x141338['fillWithoutHT']();}),_0x141338['context']['restore']()),_0x1bf833['labels']['showCoefficient']&&(_0x141338['context']['save'](),_0x10fb27['forEach'](_0x2ecb4b=>{_0x141338['drawText'](new Vector(_0x867c20['add'](_0x4cb572['subtract'](_0x867c20)['multiply'](0.5))['x'],_0x2ecb4b['end']['y']),_0x2ecb4b['coefficient']['toString'](),_0x4644e9['PROP_LABEL_PLACEMENT_LEFT'],_0x4644e9['PROP_LABEL_PLACEMENT_TOP'],Object['assign'](Object['assign']({},_0x1bf833['text']),{'textFill':_0x2ecb4b['line']['lineColor'],'textBg':'transparent','textFontFamily':_0x4ed8cb['fontFamily'],'textSize':getFontSizeInPx(_0x4ed8cb['fontSize'])}));}),_0x141338['context']['restore']());}}}