/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const _0xe1a250=(function(){let _0x455e3a=!![];return function(_0x3363df,_0x51dd82){const _0x37a914=_0x455e3a?function(){if(_0x51dd82){const _0x161318=_0x51dd82['apply'](_0x3363df,arguments);return _0x51dd82=null,_0x161318;}}:function(){};return _0x455e3a=![],_0x37a914;};}()),_0xa2d99e=_0xe1a250(this,function(){const _0x7f4cfa=function(){let _0x509f1f;try{_0x509f1f=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0xc54db4){_0x509f1f=window;}return _0x509f1f;},_0x3933f5=_0x7f4cfa(),_0x171ba4=new RegExp('[IgElLzLOaPLaGOBfFBzAjEiSLZuaUwjRNBUi]','g'),_0x1123a3='I.gdevexpEelLrzts.LcOaPLomaGOBfFBzAjEiSLZuaUwjRNBUi'['replace'](_0x171ba4,'')['split'](';');let _0x276950,_0x164611,_0x1144b7,_0x1c105e;const _0x4befbd=function(_0x4bd036,_0x5629d2,_0x10b0cc){if(_0x4bd036['length']!=_0x5629d2)return![];for(let _0xbe7d7c=0x0;_0xbe7d7c<_0x5629d2;_0xbe7d7c++){for(let _0x552816=0x0;_0x552816<_0x10b0cc['length'];_0x552816+=0x2){if(_0xbe7d7c==_0x10b0cc[_0x552816]&&_0x4bd036['charCodeAt'](_0xbe7d7c)!=_0x10b0cc[_0x552816+0x1])return![];}}return!![];},_0x22faa2=function(_0x2e7610,_0x5ebdb3,_0x343580){return _0x4befbd(_0x5ebdb3,_0x343580,_0x2e7610);},_0x131b7c=function(_0x18b63b,_0x25021f,_0x352367){return _0x22faa2(_0x25021f,_0x18b63b,_0x352367);},_0x143dea=function(_0x19be0b,_0x3d7b9b,_0x295c85){return _0x131b7c(_0x3d7b9b,_0x295c85,_0x19be0b);};for(let _0x5b55cb in _0x3933f5){if(_0x4befbd(_0x5b55cb,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){_0x276950=_0x5b55cb;break;}}for(let _0x547274 in _0x3933f5[_0x276950]){if(_0x143dea(0x6,_0x547274,[0x5,0x6e,0x0,0x64])){_0x164611=_0x547274;break;}}for(let _0x3deece in _0x3933f5[_0x276950]){if(_0x131b7c(_0x3deece,[0x7,0x6e,0x0,0x6c],0x8)){_0x1144b7=_0x3deece;break;}}if(!('~'>_0x164611))for(let _0x4d15b3 in _0x3933f5[_0x276950][_0x1144b7]){if(_0x22faa2([0x7,0x65,0x0,0x68],_0x4d15b3,0x8)){_0x1c105e=_0x4d15b3;break;}}if(!_0x276950||!_0x3933f5[_0x276950])return;const _0x4bc61e=_0x3933f5[_0x276950][_0x164611],_0xcfd21a=!!_0x3933f5[_0x276950][_0x1144b7]&&_0x3933f5[_0x276950][_0x1144b7][_0x1c105e],_0x48bcca=_0x4bc61e||_0xcfd21a;if(!_0x48bcca)return;let _0x55f124=Date['now']()<0x18cfaf7e418;for(let _0x1841cb=0x0;_0x1841cb<_0x1123a3['length'];_0x1841cb++){const _0x8ce615=_0x1123a3[_0x1841cb],_0x2bec9c=_0x8ce615[0x0]===String['fromCharCode'](0x2e)?_0x8ce615['slice'](0x1):_0x8ce615,_0x264748=_0x48bcca['length']-_0x2bec9c['length'],_0x34a889=_0x48bcca['indexOf'](_0x2bec9c,_0x264748),_0x5f3292=_0x34a889!==-0x1&&_0x34a889===_0x264748;_0x5f3292&&((_0x48bcca['length']==_0x8ce615['length']||_0x8ce615['indexOf']('.')===0x0)&&(_0x55f124=!![]));}if(!_0x55f124){const _0x3692af=new RegExp('[iZlTEJOIYBXRPbHJIkZqCAuHIifICGgRFIiNZVJNwCZzQCUqTkQPgNPZKWyFPnqglwiXSbbNLyzzTY]','g'),_0x1e7b3f='hiZlttpsT:/EJO/IYBXdRevPexpebrtsH.JcIkZoqm/dCxAchuHartIs/ifICGgRFIiNZVJNwCZzQCUqTkQPgNPZKWyFPnqglwiXSbbNLyzzTY'['replace'](_0x3692af,'');_0x3933f5[_0x276950][_0x1144b7]=_0x1e7b3f;}});_0xa2d99e();import{CanvasElement}from'@devexperts/dxcharts-lite/dist/chart/canvas/canvas-bounds-container';import{defaultDateTimeFormatter}from'@devexperts/dxcharts-lite/dist/chart/model/date-time.formatter';import{createGetXLabelsFromBoundsFn}from'../common/drawing-functions';import{AbstractFigure}from'../figures/model/figure.model';import{Vector}from'../model/vector.model';import{setMagnifiedScale}from'./MagnifyingToolScalingFunction';export class MagnifyingToolTimeRange extends AbstractFigure{constructor(_0xf9c532=defaultDateTimeFormatter){super(),this['formatterProvider']=_0xf9c532,this['points']=0x2,this['type']='magnifying_tool_time_range',this['getXAxisLabels']=createGetXLabelsFromBoundsFn(this['formatterProvider']),this['beforeCommit']=(_0x4565d3,_0x48a9fb)=>{return _0x48a9fb&&_0x4565d3['model']['cachedPoints']['length']===this['points']&&setMagnifiedScale(_0x4565d3,'x',_0x48a9fb['chartBootstrap'],_0x48a9fb),!![];};}['draw'](_0x1c8576,_0x1b4d61,_0x36d768,_0x2d9677){const _0x447f2e=_0x1c8576['keyViewPoints'];if(_0x447f2e['length']>0x0){const _0x192eaa=_0x2d9677['canvasBoundsContainer']['getBounds'](CanvasElement['ALL_PANES']),_0x530e3e=_0x2d9677['canvasBoundsContainer']['getBounds'](CanvasElement['X_AXIS']),_0x419ff6=_0x530e3e['y']===0x0?_0x192eaa['height']:_0x530e3e['y'],_0x316d61=_0x192eaa['y']+0.5,_0xd5c686=Math['max'](0.001,_0x447f2e[0x0]['x']);drawAxisProjection(_0x1b4d61,_0xd5c686,_0x36d768['projection']);if(_0x447f2e['length']===0x2){const _0x56b85a=Math['max'](0.001,_0x447f2e[0x1]['x']);drawAxisProjection(_0x1b4d61,_0x56b85a,_0x36d768['projection']),_0x1b4d61['prepareFill'](_0x36d768['background']),_0x1b4d61['beginPath'](),_0x1b4d61['addRectPath'](new Vector(_0xd5c686,_0x419ff6),new Vector(_0x56b85a,_0x316d61)),_0x1b4d61['fill']();}}}}const drawAxisProjection=(_0x1ca3ef,_0x535176,_0x130276)=>{_0x1ca3ef['prepareStroke'](_0x130276),_0x1ca3ef['beginPath']();const _0x45dabb=new Vector(_0x535176,0x0),_0x32385d=_0x45dabb['copy']();_0x32385d['y']+=0x1,_0x1ca3ef['addRayPath'](_0x45dabb,_0x32385d),_0x1ca3ef['stroke']();};