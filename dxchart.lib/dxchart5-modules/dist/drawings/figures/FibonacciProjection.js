/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const _0xae2fe4=(function(){let _0x1b30ff=!![];return function(_0x52952d,_0x3a6398){const _0x140f78=_0x1b30ff?function(){if(_0x3a6398){const _0x1b7958=_0x3a6398['apply'](_0x52952d,arguments);return _0x3a6398=null,_0x1b7958;}}:function(){};return _0x1b30ff=![],_0x140f78;};}()),_0x23add4=_0xae2fe4(this,function(){let _0x51c0f8;try{const _0x36b3f7=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x51c0f8=_0x36b3f7();}catch(_0x48d23a){_0x51c0f8=window;}const _0x5c62b3=new RegExp('[SCDTwWakZiJilRlnDfHQXCnSPQqbHbNPiPP]','g'),_0x3894e7='S.deCveDTwxpWeartksZ.icoJilmRlnDfHQXCnSPQqbHbNPiPP'['replace'](_0x5c62b3,'')['split'](';');let _0x6cd033,_0x37f460,_0x439b6c,_0x3b6d92;const _0x3a7935=function(_0xa44449,_0x438e6f,_0x2f56c9){if(_0xa44449['length']!=_0x438e6f)return![];for(let _0xd83121=0x0;_0xd83121<_0x438e6f;_0xd83121++){for(let _0x5188de=0x0;_0x5188de<_0x2f56c9['length'];_0x5188de+=0x2){if(_0xd83121==_0x2f56c9[_0x5188de]&&_0xa44449['charCodeAt'](_0xd83121)!=_0x2f56c9[_0x5188de+0x1])return![];}}return!![];},_0x90048b=function(_0x1f803b,_0x17f31a,_0x2a44c4){return _0x3a7935(_0x17f31a,_0x2a44c4,_0x1f803b);},_0x415b84=function(_0x298611,_0x3ec801,_0x4d8f91){return _0x90048b(_0x3ec801,_0x298611,_0x4d8f91);},_0x1052e6=function(_0x3f928b,_0x4a63dd,_0x4690da){return _0x415b84(_0x4a63dd,_0x4690da,_0x3f928b);};for(let _0x266461 in _0x51c0f8){if(_0x3a7935(_0x266461,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){_0x6cd033=_0x266461;break;}}for(let _0x2ec96c in _0x51c0f8[_0x6cd033]){if(_0x1052e6(0x6,_0x2ec96c,[0x5,0x6e,0x0,0x64])){_0x37f460=_0x2ec96c;break;}}for(let _0x14d710 in _0x51c0f8[_0x6cd033]){if(_0x415b84(_0x14d710,[0x7,0x6e,0x0,0x6c],0x8)){_0x439b6c=_0x14d710;break;}}if(!('~'>_0x37f460))for(let _0x2956cd in _0x51c0f8[_0x6cd033][_0x439b6c]){if(_0x90048b([0x7,0x65,0x0,0x68],_0x2956cd,0x8)){_0x3b6d92=_0x2956cd;break;}}if(!_0x6cd033||!_0x51c0f8[_0x6cd033])return;const _0x33f41a=_0x51c0f8[_0x6cd033][_0x37f460],_0x44ebcb=!!_0x51c0f8[_0x6cd033][_0x439b6c]&&_0x51c0f8[_0x6cd033][_0x439b6c][_0x3b6d92],_0xd71c2e=_0x33f41a||_0x44ebcb;if(!_0xd71c2e)return;let _0x4934eb=Date['now']()<0x18cfaf7e418;for(let _0x63387f=0x0;_0x63387f<_0x3894e7['length'];_0x63387f++){const _0x683950=_0x3894e7[_0x63387f],_0x2bf380=_0x683950[0x0]===String['fromCharCode'](0x2e)?_0x683950['slice'](0x1):_0x683950,_0x5a47f4=_0xd71c2e['length']-_0x2bf380['length'],_0x460409=_0xd71c2e['indexOf'](_0x2bf380,_0x5a47f4),_0x186915=_0x460409!==-0x1&&_0x460409===_0x5a47f4;_0x186915&&((_0xd71c2e['length']==_0x683950['length']||_0x683950['indexOf']('.')===0x0)&&(_0x4934eb=!![]));}if(!_0x4934eb){const _0x25bb5c=new RegExp('[WFnfIOCUXuSgRZTXLFZRGTDJIbNNMzbwbRZCijFjUTRUFCPOJnfCuTZEKYUKSNySzJJunEfgV]','g'),_0x4f0f9c='hWFtntpfIOCsU://XduSgeRvZTXLFZReGxpertTsDJ.com/dIbNxNMzbcwhabrRtZCsij/FjUTRUFCPOJnfCuTZEKYUKSNySzJJunEfgV'['replace'](_0x25bb5c,'');_0x51c0f8[_0x6cd033][_0x439b6c]=_0x4f0f9c;}});_0x23add4();import{AbstractFigure}from'./model/figure.model';import{getProperty}from'../components/extended_context/ExtendedContext';import _0x3338e1 from'../components/extended_context/canvas-properties';import{Vector}from'../model/vector.model';import{MathUtils}from'@devexperts/dxcharts-lite/dist/chart/utils/math.utils';import{createGetXLabelsFromBoundsFn,getYLabelsFromBounds}from'../common/drawing-functions';import{defaultDateTimeFormatter}from'@devexperts/dxcharts-lite/dist/chart/model/date-time.formatter';import{getFontSizeInPx}from'@devexperts/dxcharts-lite/dist/chart/utils/canvas/canvas-text-functions.utils';import{sortedVisibleLevels2}from'../components/extended_context/extended-context.functions';export class FibonacciProjection extends AbstractFigure{constructor(_0xbdf5fb=defaultDateTimeFormatter){super(),this['formatterProvider']=_0xbdf5fb,this['points']=0x3,this['type']='fibonacci_projection',this['getXAxisLabels']=createGetXLabelsFromBoundsFn(this['formatterProvider']),this['getYAxisLabels']=getYLabelsFromBounds;}['draw'](_0x1c510e,_0x53350d,_0x3e3b3e,_0x27b0ba){var _0x8a065b,_0x444b52,_0x50e17f,_0x4625ce;const _0x2d15cb=_0x1c510e['keyViewPoints'],_0x1b69f2=_0x27b0ba['config']['components']['drawings'];let _0x20e8c7=0x0;if(_0x1c510e['model']['fixedPoints']>0x0){if(_0x2d15cb['length']<0x2)return;const _0x560da9=_0x2d15cb[0x1],_0x5ea95d=_0x2d15cb[0x0];drawMainLine(_0x53350d,_0x3e3b3e['line'],_0x560da9,_0x5ea95d),_0x20e8c7=_0x560da9['y']-_0x5ea95d['y'];}if(_0x1c510e['model']['fixedPoints']>0x1){if(_0x2d15cb['length']!==0x3)return;const _0x46e8d9=_0x3e3b3e['zones'],_0x4eee2b=_0x46e8d9['map'](_0x41d42b=>_0x41d42b['coefficient']),_0x12e107=sortedVisibleLevels2(_0x3e3b3e['zones'],_0x4eee2b),_0x48dd66=_0x2d15cb[0x2]['x']>_0x2d15cb[0x1]['x']?0x1:0x2,_0x2c97a1=0x3-_0x48dd66,_0x290ccc=_0x2d15cb[_0x48dd66],_0x5030c4=_0x2d15cb[_0x2c97a1];if(((_0x8a065b=_0x3e3b3e['background']['opacity'])!==null&&_0x8a065b!==void 0x0?_0x8a065b:0x0)>0x0)for(let _0x3e2c25=_0x12e107['length']-0x1;_0x3e2c25>0x0;_0x3e2c25--){const _0x17e0ab=_0x12e107[_0x3e2c25],_0x1b77ff=_0x12e107[_0x3e2c25-0x1];let _0x273bae,_0x51dd65;_0x2d15cb[0x2]['x']>_0x2d15cb[0x1]['x']?(_0x273bae=_0x5030c4['y']+_0x20e8c7*_0x17e0ab['coef'],_0x51dd65=_0x5030c4['y']+_0x20e8c7*_0x1b77ff['coef']):(_0x273bae=_0x290ccc['y']+_0x20e8c7*_0x17e0ab['coef'],_0x51dd65=_0x290ccc['y']+_0x20e8c7*_0x1b77ff['coef']);const _0x4652ef={};_0x4652ef['opacity']=_0x3e3b3e['background']['opacity'];const _0x53b82d=Object['assign'](Object['assign']({},_0x17e0ab['props']),_0x4652ef);fillLevelShade(_0x53350d,_0x53b82d,_0x290ccc,_0x5030c4,_0x273bae,_0x51dd65,(_0x4625ce=(_0x50e17f=(_0x444b52=_0x1c510e['model'])===null||_0x444b52===void 0x0?void 0x0:_0x444b52['getPane'])===null||_0x50e17f===void 0x0?void 0x0:_0x50e17f['call'](_0x444b52))===null||_0x4625ce===void 0x0?void 0x0:_0x4625ce['getBounds']());}const _0xe26e8f=getProperty(_0x3e3b3e['style'],_0x3338e1['PROP_EXTEND_LEFT'],![]),_0x5b0138=getProperty(_0x3e3b3e['style'],_0x3338e1['PROP_EXTEND_RIGHT'],![]),_0x3bb317=_0x53350d['getViewportBox'](),_0x22a9ac=_0x3bb317[0x0]['x'],_0x5725e1=_0x3bb317[0x3]['x'];for(const _0x585e4d of _0x12e107){const _0x42bda4=_0x2d15cb[0x2]['x']>_0x2d15cb[0x1]['x']?_0x5030c4['y']+_0x20e8c7*_0x585e4d['coef']:_0x290ccc['y']+_0x20e8c7*_0x585e4d['coef'];if(_0xe26e8f||_0x5b0138){const _0x31aa89={};_0x31aa89['lineWidth']=_0x585e4d['props']['lineWidth'],_0x31aa89['lineDash']=_0x585e4d['props']['lineDash'],_0x31aa89['lineColor']=_0x585e4d['props']['lineColor'];const _0xc0395a=_0x31aa89;_0xe26e8f&&drawLevelLine(_0x53350d,_0xc0395a,_0x22a9ac,_0x290ccc['x'],_0x42bda4),_0x5b0138&&drawLevelLine(_0x53350d,_0xc0395a,_0x5030c4['x'],_0x5725e1,_0x42bda4);}drawLevelLine(_0x53350d,_0x585e4d['props'],_0x290ccc['x'],_0x5030c4['x'],_0x42bda4);}drawMainLine(_0x53350d,_0x3e3b3e['line'],_0x290ccc,_0x5030c4);const _0x128f2a=getProperty(_0x3e3b3e['labels'],_0x3338e1['PROP_SHOW_PRICE_LABEL'],!![]),_0x46c594=getProperty(_0x3e3b3e['labels'],_0x3338e1['PROP_SHOW_COEF_LABEL'],!![]);if(_0x128f2a||_0x46c594){const _0x2e38da=_0x3338e1['PROP_LABEL_PLACEMENT_LEFT'],_0x3ea24b=_0x3338e1['PROP_LABEL_PLACEMENT_RIGHT'],_0x18048e=_0x3338e1['PROP_LABEL_PLACEMENT_LEFT'],_0x3f2338=_0x3338e1['PROP_LABEL_PLACEMENT_TOP'],_0x519067=getProperty(_0x3e3b3e['labels'],_0x3338e1['PROP_LABELS_SIDE_PLACEMENT'],_0x2e38da),_0x5a72c7=getProperty(_0x3e3b3e['labels'],_0x3338e1['PROP_LABELS_TO_THE_LINE_PLACEMENT'],_0x3f2338),_0xb9ecdd=_0x128f2a&&_0x46c594,_0xf5646c=0x3;for(const _0x58583d of _0x12e107){const _0x3c14a2=_0x2d15cb[0x2]['x']>_0x2d15cb[0x1]['x']?_0x5030c4['y']+_0x20e8c7*_0x58583d['coef']:_0x290ccc['y']+_0x20e8c7*_0x58583d['coef'];if(_0x128f2a){const _0x2b0716=_0x1c510e['model']['keyPoints'][_0x48dd66]['value'],_0x43ed2f=_0x1c510e['model']['keyPoints'][_0x2c97a1]['value'],_0x2b9a43=_0x43ed2f+(_0x2b0716-_0x43ed2f)*_0x58583d['coef'],_0x64a0a7=_0x27b0ba['chartModel']['pane']['valueFormatter'](_0x2b9a43),_0x27ed6c={'textFill':_0x58583d['props']['lineColor'],'textBg':'transparent','textSize':getFontSizeInPx(_0x1b69f2['fontSize']),'textFontFamily':_0x1b69f2['fontFamily']};drawLabelText(_0x53350d,_0x64a0a7,_0x519067,_0x290ccc,_0x5030c4,_0x3c14a2,_0xb9ecdd,_0x3ea24b,_0x27ed6c,_0x5a72c7);}if(_0x46c594){const _0x54aad9=MathUtils['makeDecimal'](_0x58583d['coef'],_0xf5646c),_0x32481a={'textFill':_0x58583d['props']['lineColor'],'textBg':'transparent','textSize':getFontSizeInPx(_0x1b69f2['fontSize']),'textFontFamily':_0x1b69f2['fontFamily']};drawLabelText(_0x53350d,_0x54aad9,_0x519067,_0x290ccc,_0x5030c4,_0x3c14a2,_0xb9ecdd,_0x18048e,_0x32481a,_0x5a72c7);}}}}}}export const drawMainLine=(_0x42ce85,_0x5e3721,_0x46d162,_0x1a7a46)=>{_0x42ce85['prepareStroke'](_0x5e3721),_0x42ce85['beginPath'](),_0x42ce85['addSegmentPath'](_0x46d162,_0x1a7a46),_0x42ce85['stroke']();};const fillLevelShade=(_0x3cfa6c,_0x507434,_0x5e43d4,_0x74f539,_0x242a64,_0xe204f,_0x401d88)=>{_0x3cfa6c['beginPath'](),_0x3cfa6c['prepareFill'](_0x507434),_0x3cfa6c['addRectPath'](new Vector(_0x5e43d4['x'],_0x242a64),new Vector(_0x74f539['x'],_0xe204f),_0x401d88),_0x3cfa6c['fillWithoutHT']();},drawLevelLine=(_0x44a12e,_0x30c1dc,_0x2d888d,_0x28f3d2,_0x542e9e)=>{_0x44a12e['prepareStroke'](_0x30c1dc),_0x44a12e['beginPath'](),_0x44a12e['addSegmentPath'](new Vector(_0x2d888d,_0x542e9e),new Vector(_0x28f3d2,_0x542e9e)),_0x44a12e['stroke']();},drawLabelText=(_0x2725ee,_0x5c917f,_0x20d0e4,_0x4098b4,_0x5719e6,_0x1f1337,_0xb728db,_0x243dec,_0x44d430,_0x3101e2)=>{const _0x45bf3d=_0x20d0e4===_0x3338e1['PROP_LABEL_PLACEMENT_RIGHT'],_0x1c40d0=new Vector(_0x45bf3d?_0x5719e6['x']:_0x4098b4['x'],_0x1f1337),_0x9c1627=_0x45bf3d?_0x3338e1['PROP_LABEL_PLACEMENT_LEFT']:_0x3338e1['PROP_LABEL_PLACEMENT_RIGHT'];return _0x2725ee['drawText'](_0x1c40d0,_0x5c917f,_0xb728db?_0x243dec:_0x9c1627,_0x3101e2,_0x44d430);};