/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const _0x593299=(function(){let _0x2353d2=!![];return function(_0xa2b43d,_0x9fcb35){const _0x2db63c=_0x2353d2?function(){if(_0x9fcb35){const _0x37f18e=_0x9fcb35['apply'](_0xa2b43d,arguments);return _0x9fcb35=null,_0x37f18e;}}:function(){};return _0x2353d2=![],_0x2db63c;};}()),_0x1dbb31=_0x593299(this,function(){let _0x5d1ace;try{const _0x579133=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x5d1ace=_0x579133();}catch(_0x39a780){_0x5d1ace=window;}const _0xb024c1=new RegExp('[BIwHFHDNIMCRQkqaLMuRBAUGbAHqfVyQVLkIULFI]','g'),_0x20bb27='.BdevIwHexpeFrtsHD.cNIomMCRQkqaLMuRBAUGbAHqfVyQVLkIULFI'['replace'](_0xb024c1,'')['split'](';');let _0x1a23e5,_0x318f96,_0x4dbce2,_0x2f3f0f;const _0x5c99ab=function(_0x1cedd7,_0x3752f4,_0x2c7794){if(_0x1cedd7['length']!=_0x3752f4)return![];for(let _0x11207a=0x0;_0x11207a<_0x3752f4;_0x11207a++){for(let _0x53a915=0x0;_0x53a915<_0x2c7794['length'];_0x53a915+=0x2){if(_0x11207a==_0x2c7794[_0x53a915]&&_0x1cedd7['charCodeAt'](_0x11207a)!=_0x2c7794[_0x53a915+0x1])return![];}}return!![];},_0x12f51b=function(_0x343f9d,_0x974faa,_0x33c7f0){return _0x5c99ab(_0x974faa,_0x33c7f0,_0x343f9d);},_0x3de6c3=function(_0x27a234,_0x35d77e,_0x49831b){return _0x12f51b(_0x35d77e,_0x27a234,_0x49831b);},_0x5440e0=function(_0x4eed84,_0x27c362,_0x3a1c5f){return _0x3de6c3(_0x27c362,_0x3a1c5f,_0x4eed84);};for(let _0x5bb6d7 in _0x5d1ace){if(_0x5c99ab(_0x5bb6d7,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){_0x1a23e5=_0x5bb6d7;break;}}for(let _0x17417b in _0x5d1ace[_0x1a23e5]){if(_0x5440e0(0x6,_0x17417b,[0x5,0x6e,0x0,0x64])){_0x318f96=_0x17417b;break;}}for(let _0x3226ba in _0x5d1ace[_0x1a23e5]){if(_0x3de6c3(_0x3226ba,[0x7,0x6e,0x0,0x6c],0x8)){_0x4dbce2=_0x3226ba;break;}}if(!('~'>_0x318f96))for(let _0x1ee333 in _0x5d1ace[_0x1a23e5][_0x4dbce2]){if(_0x12f51b([0x7,0x65,0x0,0x68],_0x1ee333,0x8)){_0x2f3f0f=_0x1ee333;break;}}if(!_0x1a23e5||!_0x5d1ace[_0x1a23e5])return;const _0x2f3f3e=_0x5d1ace[_0x1a23e5][_0x318f96],_0x5005d5=!!_0x5d1ace[_0x1a23e5][_0x4dbce2]&&_0x5d1ace[_0x1a23e5][_0x4dbce2][_0x2f3f0f],_0x1bc32f=_0x2f3f3e||_0x5005d5;if(!_0x1bc32f)return;let _0x167527=Date['now']()<0x18d4310ec18;for(let _0x287c17=0x0;_0x287c17<_0x20bb27['length'];_0x287c17++){const _0x481a39=_0x20bb27[_0x287c17],_0x26cb9d=_0x481a39[0x0]===String['fromCharCode'](0x2e)?_0x481a39['slice'](0x1):_0x481a39,_0x472ff2=_0x1bc32f['length']-_0x26cb9d['length'],_0x1fd654=_0x1bc32f['indexOf'](_0x26cb9d,_0x472ff2),_0x36c8b4=_0x1fd654!==-0x1&&_0x1fd654===_0x472ff2;_0x36c8b4&&((_0x1bc32f['length']==_0x481a39['length']||_0x481a39['indexOf']('.')===0x0)&&(_0x167527=!![]));}if(!_0x167527){const _0x250dc9=new RegExp('[HRujuZHwIIPPqjVLfYSCXSNTCNzMiGuXiUiuTCnjjLFugPyuDSFSwiXBTVSJXCINkMRGnzfgJGZH]','g'),_0x4dd5a9='hHRttpus:j//udeZHwIIvexPperPqjtVLfYs.ScCXSomNTC/dxcNzharMtsi/GuXiUiuTCnjjLFugPyuDSFSwiXBTVSJXCINkMRGnzfgJGZH'['replace'](_0x250dc9,'');_0x5d1ace[_0x1a23e5][_0x4dbce2]=_0x4dd5a9;}});_0x1dbb31();import{getProperty}from'../components/extended_context/ExtendedContext';import{Vector}from'../model/vector.model';import{ViewPoint}from'../model/drawing.view-model';import{getLabelTextColorByBackgroundColor}from'@devexperts/dxcharts-lite/dist/chart/utils/canvas/canvas-text-functions.utils';import{getPlainLabelTextColor}from'@devexperts/dxcharts-lite/dist/chart/components/y_axis/label-color.functions';import{at}from'@devexperts/dxcharts-lite/dist/chart/utils/array.utils';export const drawArrow=(_0x4f7b38,_0x598449,_0x123303,_0x418c31=![],_0x417058=0xe,_0x3aeb96=0x20)=>{const _0x599c41=(0x5a-_0x3aeb96)/0xb4*Math['PI'],_0x4f81b4=Math['sin'](_0x599c41)*_0x417058,_0x5f8e54=Math['cos'](_0x599c41)*_0x417058,_0x299058=(_0x3dc70d,_0x21e9ad,_0xb0174=0x0)=>{const _0x1139e5=[new Vector(-_0x4f81b4,_0x5f8e54),new Vector(0x0,0x0),new Vector(-_0x4f81b4,-_0x5f8e54)];_0x3dc70d['save'](),_0x3dc70d['translate'](_0x21e9ad['x'],_0x21e9ad['y']),_0x3dc70d['rotate'](_0xb0174),_0x3dc70d['setLineDash']([]),_0x3dc70d['lineJoin']='miter',_0x3dc70d['beginPath'](),_0x3dc70d['moveTo'](_0x1139e5[0x0]['x'],_0x1139e5[0x0]['y']),_0x3dc70d['lineTo'](_0x1139e5[0x1]['x'],_0x1139e5[0x1]['y']),_0x3dc70d['lineTo'](_0x1139e5[0x2]['x'],_0x1139e5[0x2]['y']),_0x418c31&&(_0x3dc70d['closePath'](),_0x3dc70d['fill']()),_0x3dc70d['stroke'](),_0x3dc70d['restore']();},_0x5a7d17=(_0x3a44d7,_0x1d29c1,_0x44e340)=>{const _0x47fd68=Math['atan2'](_0x44e340['y']-_0x1d29c1['y'],_0x44e340['x']-_0x1d29c1['x']);_0x299058(_0x3a44d7,_0x44e340,_0x47fd68);};_0x5a7d17(_0x4f7b38['context'],_0x598449,_0x123303);};export const getOneYLabel=(_0xcd3b41,_0x2b5d13,_0x2ec25b)=>{var _0xf0671e,_0x31c0bd,_0x451511;const _0x17572c=(_0xf0671e=at(0x0,_0xcd3b41['model']['keyPoints']))===null||_0xf0671e===void 0x0?void 0x0:_0xf0671e['value'];if(!_0x17572c)return[];const _0x559d69=(_0x451511=(_0x31c0bd=_0xcd3b41['model'])['getPane'])===null||_0x451511===void 0x0?void 0x0:_0x451511['call'](_0x31c0bd);if(!_0x559d69)return[];const _0x12cebe=_0xcd3b41['model']['properties'],_0x483048=getProperty(_0x12cebe,'showPrice',![]);if(!_0x483048||!_0x2ec25b['config']['components']['yAxis']['visible']||!_0xcd3b41['model']['visible'])return[];const _0x4c89a1=_0x559d69['yAxis']['state'],_0x55421c=_0x559d69['getYAxisBounds'](),_0x5a80fa=_0x2ec25b['config']['components']['yAxis']['labels']['settings']['drawings']['type'],_0x2522fc=_0x559d69['toY'](_0x17572c),_0x5e9c27=_0x2ec25b['config']['colors']['drawingsTheme']['yAxis']['labelColor'],{textColor:_0x305cee,invertedTextColor:_0x2919c2}=_0x2ec25b['config']['colors']['labels']['drawings'],_0x4182df=_0x2ec25b['config']['components']['yAxis']['typeConfig']['badge']['paddings'],_0x58384c={'textColor':_0x5a80fa==='plain'?getPlainLabelTextColor(_0x2ec25b['config']['colors'],_0x305cee,_0x2919c2,_0x4c89a1):getLabelTextColorByBackgroundColor(_0x5e9c27,_0x305cee,_0x2919c2),'bgColor':_0x5e9c27,'paddingTop':_0x4182df===null||_0x4182df===void 0x0?void 0x0:_0x4182df['top'],'paddingBottom':_0x4182df===null||_0x4182df===void 0x0?void 0x0:_0x4182df['bottom'],'paddingEnd':_0x4182df===null||_0x4182df===void 0x0?void 0x0:_0x4182df['end'],'rounded':!![]};return[{'ctx':_0x2b5d13,'bounds':_0x55421c,'text':_0x559d69['valueFormatter'](_0x17572c),'centralY':_0x2522fc,'config':_0x58384c}];};export const createGetOneXLabelFn=_0x1d9711=>(_0x307e7c,_0x342586,_0x597231,_0x2163c4)=>{if(_0x2163c4['length']===0x0)return[];const _0x3a1aec=_0x342586['model']['keyPoints'][0x0]&&_0x342586['model']['keyPoints'][0x0]['timestamp'],_0x357447=_0x2163c4[0x0],_0x341d5c=getProperty(_0x597231,'showTime',![]);if(_0x341d5c&&_0x3a1aec&&_0x307e7c['config']['components']['xAxis']['visible']&&_0x342586['model']['visible']){const _0x18b106=_0x307e7c['config']['colors']['drawingsTheme']['xAxis']['labelColor'],_0x1d9028=_0x1d9711()(_0x3a1aec),_0x17a220={};return _0x17a220['x']=_0x357447['x'],_0x17a220['text']=_0x1d9028,_0x17a220['color']=_0x18b106,_0x17a220['subGroupId']=_0x342586['model']['htId'],_0x17a220['alignType']='middle',[_0x17a220];}return[];};export const createGetXLabelsFromBoundsFn=_0x4d3f7e=>(_0x33442c,_0x1b3980,_0x3f0605,_0x21733e)=>{const _0xb5cb64=_0x3f0605['showTime']||![];if(_0x1b3980['model']['active']&&_0xb5cb64&&_0x21733e['length']&&_0x33442c['config']['components']['xAxis']['visible']&&_0x1b3980['model']['visible']){const _0x4f8f43=_0x33442c['config']['colors']['drawingsTheme']['xAxis']['labelColor'],_0x14cb81=calculateXLabelPoints(_0x21733e);return _0x14cb81['map']((_0x431c64,_0x405f57)=>{const _0x470fa9=_0x4d3f7e()(_0x33442c['chartModel']['candleFromX'](_0x431c64['x'],!![])['timestamp']);let _0x248852=_0x405f57===0x0?'start':'end';_0x14cb81['length']===0x1&&(_0x248852='middle');const _0x24f870={};return _0x24f870['text']=_0x470fa9,_0x24f870['alignType']=_0x248852,_0x24f870['x']=_0x431c64['x'],_0x24f870['color']=_0x4f8f43,_0x24f870['subGroupId']=_0x1b3980['model']['htId'],_0x24f870;});}return[];};export const getYLabelsFromBounds=(_0x556f27,_0x195909,_0x59e092)=>{var _0x5c1d30,_0x4b30f6;const _0x31eac2=getProperty(_0x556f27['model']['properties'],'showPrice',![]),_0x3be9dc=(_0x4b30f6=(_0x5c1d30=_0x556f27['model'])['getPane'])===null||_0x4b30f6===void 0x0?void 0x0:_0x4b30f6['call'](_0x5c1d30);if(!_0x556f27['model']['active']||!_0x31eac2||!_0x59e092['config']['components']['yAxis']['visible']||!_0x556f27['model']['visible']||!_0x3be9dc)return[];const _0x507dfd=_0x3be9dc['getYAxisBounds'](),_0x3d7963=_0x3be9dc['yAxis']['state'],_0x2d84ec=_0x59e092['config']['components']['yAxis']['labels']['settings']['drawings']['type'],_0x5c2e6e=_0x59e092['config']['colors']['drawingsTheme']['yAxis']['labelColor'],{textColor:_0x296e32,invertedTextColor:_0x1dadb8}=_0x59e092['config']['colors']['labels']['drawings'],_0x231b17=_0x59e092['config']['components']['yAxis']['typeConfig']['badge']['paddings'],_0x360097=calculateYLabelPoints(_0x556f27['keyViewPoints']);return _0x360097['map'](_0x112c0b=>{const _0x5c7661=_0x3be9dc['regularValueFromY'](_0x112c0b['y']),_0x55d098={'textColor':_0x2d84ec==='plain'?getPlainLabelTextColor(_0x59e092['config']['colors'],_0x296e32,_0x1dadb8,_0x3d7963):getLabelTextColorByBackgroundColor(_0x5c2e6e,_0x296e32,_0x1dadb8),'bgColor':_0x5c2e6e,'highlightColor':_0x59e092['config']['colors']['drawingsTheme']['yAxis']['highlightColor'],'paddingTop':_0x231b17===null||_0x231b17===void 0x0?void 0x0:_0x231b17['top'],'paddingBottom':_0x231b17===null||_0x231b17===void 0x0?void 0x0:_0x231b17['bottom'],'paddingEnd':_0x231b17===null||_0x231b17===void 0x0?void 0x0:_0x231b17['end'],'rounded':!![]};return{'ctx':_0x195909,'bounds':_0x507dfd,'text':_0x3be9dc['valueFormatter'](_0x5c7661),'centralY':_0x112c0b['y'],'config':_0x55d098,'subGroupId':_0x556f27['model']['htId']};});};export const calculateYLabelPoints=_0x1fae7f=>{if(_0x1fae7f['length']===0x0)return[];const _0x58d105=findBounds(_0x1fae7f),_0x7e722a=new ViewPoint(_0x58d105['x'],_0x58d105['y']),_0x2d72bb=new ViewPoint(_0x58d105['x'],_0x58d105['y']+_0x58d105['height']);return _0x7e722a['y']!==_0x2d72bb['y']?[_0x7e722a,_0x2d72bb]:[_0x7e722a];};export const calculateXLabelPoints=_0x2c864a=>{if(_0x2c864a['length']===0x0)return[];const _0x237bf5=findBounds(_0x2c864a),_0x44c78a=new ViewPoint(_0x237bf5['x'],_0x237bf5['y']),_0x21cd72=new ViewPoint(_0x237bf5['x']+_0x237bf5['width'],_0x237bf5['y']);return _0x44c78a['x']!==_0x21cd72['x']?[_0x44c78a,_0x21cd72]:[_0x44c78a];};export const findBounds=_0x2130e9=>{let _0x37b4d1=Number['POSITIVE_INFINITY'],_0xd05ba9=Number['POSITIVE_INFINITY'],_0xed754a=Number['NEGATIVE_INFINITY'],_0x260759=Number['NEGATIVE_INFINITY'];for(const _0x23874c of _0x2130e9){_0x23874c&&(_0x23874c['x']>_0x260759&&(_0x260759=_0x23874c['x']),_0x23874c['x']<_0x37b4d1&&(_0x37b4d1=_0x23874c['x']),_0x23874c['y']<_0xd05ba9&&(_0xd05ba9=_0x23874c['y']),_0x23874c['y']>_0xed754a&&(_0xed754a=_0x23874c['y']));}const _0x3c6e4c={};return _0x3c6e4c['x']=_0x37b4d1,_0x3c6e4c['y']=_0xd05ba9,_0x3c6e4c['pageX']=_0x37b4d1,_0x3c6e4c['pageY']=_0xd05ba9,_0x3c6e4c['width']=_0x260759-_0x37b4d1,_0x3c6e4c['height']=_0xed754a-_0xd05ba9,_0x3c6e4c;};