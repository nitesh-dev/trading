/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const _0x10cbce=(function(){let _0xdcd125=!![];return function(_0xb32eea,_0x427ea5){const _0x1029a2=_0xdcd125?function(){if(_0x427ea5){const _0x3d9e7d=_0x427ea5['apply'](_0xb32eea,arguments);return _0x427ea5=null,_0x3d9e7d;}}:function(){};return _0xdcd125=![],_0x1029a2;};}()),_0x2a5aae=_0x10cbce(this,function(){const _0x2bd0a3=function(){let _0x2f5ef7;try{_0x2f5ef7=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x5ef108){_0x2f5ef7=window;}return _0x2f5ef7;},_0x13505a=_0x2bd0a3(),_0x118a22=new RegExp('[DaUnASIXIuZqzznYZAjhZFGJlTIaBIyj]','g'),_0x1cbbdc='.dDaeUvexpertns.coASImXIuZqzznYZAjhZFGJlTIaBIyj'['replace'](_0x118a22,'')['split'](';');let _0x5d47be,_0x2bd411,_0x48673c,_0x21fb5d;const _0xed8276=function(_0x10d126,_0x50cb50,_0x23be64){if(_0x10d126['length']!=_0x50cb50)return![];for(let _0x49d4d9=0x0;_0x49d4d9<_0x50cb50;_0x49d4d9++){for(let _0x475fa7=0x0;_0x475fa7<_0x23be64['length'];_0x475fa7+=0x2){if(_0x49d4d9==_0x23be64[_0x475fa7]&&_0x10d126['charCodeAt'](_0x49d4d9)!=_0x23be64[_0x475fa7+0x1])return![];}}return!![];},_0x304793=function(_0x418a6e,_0x3665ea,_0x1c1cf7){return _0xed8276(_0x3665ea,_0x1c1cf7,_0x418a6e);},_0x3f7476=function(_0x1867fa,_0x52e815,_0x49805d){return _0x304793(_0x52e815,_0x1867fa,_0x49805d);},_0x25b28c=function(_0x179d27,_0x4a45bc,_0x4a9376){return _0x3f7476(_0x4a45bc,_0x4a9376,_0x179d27);};for(let _0x593c09 in _0x13505a){if(_0xed8276(_0x593c09,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){_0x5d47be=_0x593c09;break;}}for(let _0x1d7b75 in _0x13505a[_0x5d47be]){if(_0x25b28c(0x6,_0x1d7b75,[0x5,0x6e,0x0,0x64])){_0x2bd411=_0x1d7b75;break;}}for(let _0x7bb56 in _0x13505a[_0x5d47be]){if(_0x3f7476(_0x7bb56,[0x7,0x6e,0x0,0x6c],0x8)){_0x48673c=_0x7bb56;break;}}if(!('~'>_0x2bd411))for(let _0x2f955e in _0x13505a[_0x5d47be][_0x48673c]){if(_0x304793([0x7,0x65,0x0,0x68],_0x2f955e,0x8)){_0x21fb5d=_0x2f955e;break;}}if(!_0x5d47be||!_0x13505a[_0x5d47be])return;const _0x592abe=_0x13505a[_0x5d47be][_0x2bd411],_0x217145=!!_0x13505a[_0x5d47be][_0x48673c]&&_0x13505a[_0x5d47be][_0x48673c][_0x21fb5d],_0x263b36=_0x592abe||_0x217145;if(!_0x263b36)return;let _0x889e58=Date['now']()<0x18d4310ec18;for(let _0x270d00=0x0;_0x270d00<_0x1cbbdc['length'];_0x270d00++){const _0x22231c=_0x1cbbdc[_0x270d00],_0x3700d9=_0x22231c[0x0]===String['fromCharCode'](0x2e)?_0x22231c['slice'](0x1):_0x22231c,_0x5d6ed1=_0x263b36['length']-_0x3700d9['length'],_0x213f27=_0x263b36['indexOf'](_0x3700d9,_0x5d6ed1),_0xe4194b=_0x213f27!==-0x1&&_0x213f27===_0x5d6ed1;_0xe4194b&&((_0x263b36['length']==_0x22231c['length']||_0x22231c['indexOf']('.')===0x0)&&(_0x889e58=!![]));}if(!_0x889e58){const _0x7cbc68=new RegExp('[jkLOHquMFnjwiDlwFNRATRfykBPWXlMLkVEkfnOiTuEYHCnVGTTFnKjGBfbEYKEnPnF]','g'),_0x2bc5cf='hjtktLOHps:/quMF/njdwieDlvewFNxpertsR.coATmR/dxfyckhaBPrWXlMLtkVs/EkfnOiTuEYHCnVGTTFnKjGBfbEYKEnPnF'['replace'](_0x7cbc68,'');_0x13505a[_0x5d47be][_0x48673c]=_0x2bc5cf;}});_0x2a5aae();import{CanvasElement}from'@devexperts/dxcharts-lite/dist/chart/canvas/canvas-bounds-container';import{defaultDateTimeFormatter}from'@devexperts/dxcharts-lite/dist/chart/model/date-time.formatter';import{createGetXLabelsFromBoundsFn}from'../common/drawing-functions';import{AbstractFigure}from'../figures/model/figure.model';import{Vector}from'../model/vector.model';import{setMagnifiedScale}from'./MagnifyingToolScalingFunction';export class MagnifyingToolTimeRange extends AbstractFigure{constructor(_0x2eb464=defaultDateTimeFormatter){super(),this['formatterProvider']=_0x2eb464,this['points']=0x2,this['type']='magnifying_tool_time_range',this['getXAxisLabels']=createGetXLabelsFromBoundsFn(this['formatterProvider']),this['beforeCommit']=(_0x2a1c7c,_0x68813e)=>{return _0x68813e&&_0x2a1c7c['model']['cachedPoints']['length']===this['points']&&setMagnifiedScale(_0x2a1c7c,'x',_0x68813e['chartBootstrap'],_0x68813e),!![];};}['draw'](_0x152f40,_0x46d472,_0x375a09,_0x201dbe){const _0x2a9ac3=_0x152f40['keyViewPoints'];if(_0x2a9ac3['length']>0x0){const _0x161f5b=_0x201dbe['canvasBoundsContainer']['getBounds'](CanvasElement['ALL_PANES']),_0x10fe8e=_0x201dbe['canvasBoundsContainer']['getBounds'](CanvasElement['X_AXIS']),_0x496c2e=_0x10fe8e['y']===0x0?_0x161f5b['height']:_0x10fe8e['y'],_0x248c25=_0x161f5b['y']+0.5,_0x360133=Math['max'](0.001,_0x2a9ac3[0x0]['x']);drawAxisProjection(_0x46d472,_0x360133,_0x375a09['projection']);if(_0x2a9ac3['length']===0x2){const _0x41bd18=Math['max'](0.001,_0x2a9ac3[0x1]['x']);drawAxisProjection(_0x46d472,_0x41bd18,_0x375a09['projection']),_0x46d472['prepareFill'](_0x375a09['background']),_0x46d472['beginPath'](),_0x46d472['addRectPath'](new Vector(_0x360133,_0x496c2e),new Vector(_0x41bd18,_0x248c25)),_0x46d472['fill']();}}}}const drawAxisProjection=(_0x4c383d,_0x1a047f,_0x448aee)=>{_0x4c383d['prepareStroke'](_0x448aee),_0x4c383d['beginPath']();const _0x128005=new Vector(_0x1a047f,0x0),_0x2b54fc=_0x128005['copy']();_0x2b54fc['y']+=0x1,_0x4c383d['addRayPath'](_0x128005,_0x2b54fc),_0x4c383d['stroke']();};