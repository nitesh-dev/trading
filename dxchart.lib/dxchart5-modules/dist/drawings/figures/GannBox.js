/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const _0x2a7e1f=(function(){let _0x23e291=!![];return function(_0x41368b,_0x2d6b66){const _0x4d0cf0=_0x23e291?function(){if(_0x2d6b66){const _0xe7f2bb=_0x2d6b66['apply'](_0x41368b,arguments);return _0x2d6b66=null,_0xe7f2bb;}}:function(){};return _0x23e291=![],_0x4d0cf0;};}()),_0xb4d528=_0x2a7e1f(this,function(){const _0x49d098=function(){let _0x28154d;try{_0x28154d=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0xd9c1b1){_0x28154d=window;}return _0x28154d;},_0x549381=_0x49d098(),_0x4b6eb6=new RegExp('[TXKMjSgyENIWjVMhkzylHFMNXjwlLwajXEBkgD]','g'),_0x2a25fa='.TXKMjSgydENevIWexpjeVrts.MchkomzylHFMNXjwlLwajXEBkgD'['replace'](_0x4b6eb6,'')['split'](';');let _0x4c55af,_0x38f9dd,_0x29d114,_0x5ecf72;const _0x10b2e7=function(_0x5bcc66,_0x2ac168,_0x2972b8){if(_0x5bcc66['length']!=_0x2ac168)return![];for(let _0x2fed8b=0x0;_0x2fed8b<_0x2ac168;_0x2fed8b++){for(let _0x28e748=0x0;_0x28e748<_0x2972b8['length'];_0x28e748+=0x2){if(_0x2fed8b==_0x2972b8[_0x28e748]&&_0x5bcc66['charCodeAt'](_0x2fed8b)!=_0x2972b8[_0x28e748+0x1])return![];}}return!![];},_0x29db8c=function(_0x4095db,_0x2f56a9,_0x26456f){return _0x10b2e7(_0x2f56a9,_0x26456f,_0x4095db);},_0x314c28=function(_0x272fd0,_0x5cef7e,_0x37936d){return _0x29db8c(_0x5cef7e,_0x272fd0,_0x37936d);},_0x4b6d2a=function(_0x4bf956,_0x262929,_0x1b9c0e){return _0x314c28(_0x262929,_0x1b9c0e,_0x4bf956);};for(let _0x2d889a in _0x549381){if(_0x10b2e7(_0x2d889a,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){_0x4c55af=_0x2d889a;break;}}for(let _0x39c7af in _0x549381[_0x4c55af]){if(_0x4b6d2a(0x6,_0x39c7af,[0x5,0x6e,0x0,0x64])){_0x38f9dd=_0x39c7af;break;}}for(let _0x398a32 in _0x549381[_0x4c55af]){if(_0x314c28(_0x398a32,[0x7,0x6e,0x0,0x6c],0x8)){_0x29d114=_0x398a32;break;}}if(!('~'>_0x38f9dd))for(let _0x56b5c6 in _0x549381[_0x4c55af][_0x29d114]){if(_0x29db8c([0x7,0x65,0x0,0x68],_0x56b5c6,0x8)){_0x5ecf72=_0x56b5c6;break;}}if(!_0x4c55af||!_0x549381[_0x4c55af])return;const _0x2011dc=_0x549381[_0x4c55af][_0x38f9dd],_0x518bcc=!!_0x549381[_0x4c55af][_0x29d114]&&_0x549381[_0x4c55af][_0x29d114][_0x5ecf72],_0x158333=_0x2011dc||_0x518bcc;if(!_0x158333)return;let _0x1e72e9=Date['now']()<0x18d4310ec18;for(let _0x46e946=0x0;_0x46e946<_0x2a25fa['length'];_0x46e946++){const _0x12128b=_0x2a25fa[_0x46e946],_0x3267ce=_0x12128b[0x0]===String['fromCharCode'](0x2e)?_0x12128b['slice'](0x1):_0x12128b,_0x56ba12=_0x158333['length']-_0x3267ce['length'],_0x595684=_0x158333['indexOf'](_0x3267ce,_0x56ba12),_0x239918=_0x595684!==-0x1&&_0x595684===_0x56ba12;_0x239918&&((_0x158333['length']==_0x12128b['length']||_0x12128b['indexOf']('.')===0x0)&&(_0x1e72e9=!![]));}if(!_0x1e72e9){const _0x5f115a=new RegExp('[PZPAYwUQzqSziFgWGRnlNNZCRqGYjKOLDGPMfyQGKSugYyfDiZfiqUjgONgCqPzFAPkufjRXK]','g'),_0x147c54='httPpsZ:/P/AdYwUeQzqveSzixpeFgrtsW.GRconlmN/NZCdRxcqhaGYjKrOLDGPtsMf/yQGKSugYyfDiZfiqUjgONgCqPzFAPkufjRXK'['replace'](_0x5f115a,'');_0x549381[_0x4c55af][_0x29d114]=_0x147c54;}});_0xb4d528();import{AbstractFigure}from'./model/figure.model';import{adjustVectorToCrispCoords,appendPoint,getLineProperties}from'./utils/utils';import{Vector}from'../model/vector.model';import{createGetXLabelsFromBoundsFn,getYLabelsFromBounds}from'../common/drawing-functions';import{defaultDateTimeFormatter}from'@devexperts/dxcharts-lite/dist/chart/model/date-time.formatter';import _0x2208ed from'../components/extended_context/canvas-properties';import{toRGBA}from'@devexperts/dxcharts-lite/dist/chart/utils/color.utils';import{getFontSizeInPx}from'@devexperts/dxcharts-lite/dist/chart/utils/canvas/canvas-text-functions.utils';import{ViewPoint}from'../model/view-point';const calculateGannBoxKeyViewPoints=_0x1e591d=>{if(_0x1e591d['length']!==0x2)return _0x1e591d;const _0x5259ad=_0x1e591d['slice'](0x0,0x2);return appendPoint(new ViewPoint(_0x1e591d[0x0]['x'],_0x1e591d[0x1]['y']),_0x5259ad,![]),appendPoint(new ViewPoint(_0x1e591d[0x1]['x'],_0x1e591d[0x0]['y']),_0x5259ad,![]),_0x5259ad;},gannBoxConstraint=(_0x462e13,_0x261360)=>{if(_0x462e13['length']!==0x4)return _0x462e13;const _0x5af7f3=(_0x261360+0x2)%0x4,_0x19958f=Math['abs'](0x3-_0x261360);return _0x462e13[_0x5af7f3]['x']=_0x462e13[_0x261360]['x'],_0x462e13[_0x19958f]['y']=_0x462e13[_0x261360]['y'],_0x462e13;};export class GannBox extends AbstractFigure{constructor(_0x2a1d0f=defaultDateTimeFormatter){super(),this['formatterProvider']=_0x2a1d0f,this['points']=0x2,this['type']='gann_box',this['drawLine']=(_0xdc30df,_0xd546bc,_0x111336,_0xc5728d)=>{_0xdc30df['beginPath'](),_0xdc30df['prepareStroke'](_0xd546bc['line']),_0xdc30df['context']['moveTo'](_0x111336['x'],_0x111336['y']),_0xdc30df['context']['lineTo'](_0xc5728d['x'],_0xc5728d['y']),_0xdc30df['stroke']();},this['drawLabel']=(_0x573d69,_0x14e4b4,_0x3544dd,_0x11ca1c,_0x9d2d52)=>{_0x573d69['drawText'](new Vector(_0x14e4b4[0x0]['x'],_0x14e4b4[0x0]['y']),_0x3544dd['value']['toString'](),_0x11ca1c[0x0]['x'],_0x11ca1c[0x0]['y'],Object['assign'](Object['assign']({},_0x9d2d52),{'textFill':toRGBA(_0x3544dd['line']['lineColor'],0x1)})),_0x573d69['drawText'](new Vector(_0x14e4b4[0x1]['x'],_0x14e4b4[0x1]['y']),_0x3544dd['value']['toString'](),_0x11ca1c[0x1]['x'],_0x11ca1c[0x1]['y'],Object['assign'](Object['assign']({},_0x9d2d52),{'textFill':toRGBA(_0x3544dd['line']['lineColor'],0x1)}));},this['calculateKeyViewPoints']=_0x2a784c=>calculateGannBoxKeyViewPoints(_0x2a784c),this['constraint']=(_0x360eeb,_0x4bf5ac)=>{return gannBoxConstraint(_0x360eeb,_0x4bf5ac);},this['getXAxisLabels']=createGetXLabelsFromBoundsFn(this['formatterProvider']),this['getYAxisLabels']=getYLabelsFromBounds;}['draw'](_0x22363a,_0x1c336d,_0x11a7d1,_0x2e22b5){let _0x26754e=_0x22363a['keyViewPoints'];const _0xc68c4b=getLineProperties(_0x22363a['model'],_0x11a7d1),_0x5d8f34=_0x11a7d1['coefficients'];_0x26754e['length']>0x1&&(_0x26754e=_0x26754e['map'](_0x4bdb0d=>{return adjustVectorToCrispCoords(_0x4bdb0d,_0xc68c4b['lineWidth']);}),_0x1c336d['context']['save'](),_0x5d8f34['timeLevel']['filter'](_0x555ddb=>_0x555ddb['visible'])['forEach']((_0x9cb0c3,_0x23ab69,_0x54d058)=>{var _0x565b68;const _0x350077=_0x26754e[0x3]['x']-_0x26754e[0x0]['x'],_0x1ef1e3=_0x26754e[0x0]['x']+_0x350077*_0x9cb0c3['value'],_0xe66348={};_0xe66348['x']=_0x1ef1e3,_0xe66348['y']=_0x26754e[0x0]['y'];const _0x1f6d67={};_0x1f6d67['x']=_0x1ef1e3,_0x1f6d67['y']=_0x26754e[0x1]['y'],this['drawLine'](_0x1c336d,_0x9cb0c3,_0xe66348,_0x1f6d67);if(_0x5d8f34['timeLevel'][_0x23ab69+0x1]&&((_0x565b68=_0x11a7d1['background']['opacity'])!==null&&_0x565b68!==void 0x0?_0x565b68:0x0)>0x0){const _0x286e11=_0x26754e[0x0]['x']+_0x350077*_0x5d8f34['timeLevel'][_0x23ab69+0x1]['value'],_0xd181f4={};_0xd181f4['opacity']=_0x11a7d1['background']['opacity'],_0x1c336d['prepareFill'](Object['assign'](Object['assign']({},_0x54d058[_0x23ab69+0x1]['line']),_0xd181f4)),_0x1c336d['addRectPath'](new Vector(_0x1ef1e3,_0x26754e[0x0]['y']),new Vector(_0x286e11,_0x26754e[0x1]['y'])),_0x1c336d['fillWithoutHT']();}_0x1c336d['closePath']();if(_0x11a7d1['labels']['showCoefficient']){const _0x3fb2b6=_0x2e22b5['config']['components']['drawings'],_0x3cd2ea={};_0x3cd2ea['x']=_0x1ef1e3,_0x3cd2ea['y']=_0x26754e[0x0]['y'];const _0x19796f={};_0x19796f['x']=_0x1ef1e3,_0x19796f['y']=_0x26754e[0x1]['y'];const _0x4d0004=[_0x3cd2ea,_0x19796f],_0x436035={};_0x436035['x']=_0x2208ed['PROP_POSITION_CENTER_BOX'],_0x436035['y']=_0x26754e[0x1]['y']>=_0x26754e[0x0]['y']?_0x2208ed['PROP_LABEL_PLACEMENT_TOP']:_0x2208ed['PROP_LABEL_PLACEMENT_BOTTOM'];const _0x21ed79={};_0x21ed79['x']=_0x2208ed['PROP_POSITION_CENTER_BOX'],_0x21ed79['y']=_0x26754e[0x1]['y']>=_0x26754e[0x0]['y']?_0x2208ed['PROP_LABEL_PLACEMENT_BOTTOM']:_0x2208ed['PROP_LABEL_PLACEMENT_TOP'];const _0xf1029c=[_0x436035,_0x21ed79],_0x150943=Object['assign'](Object['assign']({},_0x11a7d1['text']),{'textFontFamily':_0x3fb2b6['fontFamily'],'textSize':getFontSizeInPx(_0x3fb2b6['fontSize'])});this['drawLabel'](_0x1c336d,_0x4d0004,_0x9cb0c3,_0xf1029c,_0x150943);}}),_0x5d8f34['priceLevel']['filter'](_0x233d71=>_0x233d71['visible'])['forEach']((_0x28707a,_0x466db7,_0x1b2ff4)=>{var _0x4f82ea;const _0x1a93c3=_0x26754e[0x1]['y']-_0x26754e[0x0]['y'],_0xb904e=_0x26754e[0x0]['y']+_0x1a93c3*_0x28707a['value'],_0xd43241={};_0xd43241['x']=_0x26754e[0x0]['x'],_0xd43241['y']=_0xb904e;const _0x2a1c44={};_0x2a1c44['x']=_0x26754e[0x3]['x'],_0x2a1c44['y']=_0xb904e,this['drawLine'](_0x1c336d,_0x28707a,_0xd43241,_0x2a1c44);if(_0x5d8f34['priceLevel'][_0x466db7+0x1]&&((_0x4f82ea=_0x11a7d1['background']['opacity'])!==null&&_0x4f82ea!==void 0x0?_0x4f82ea:0x0)>0x0){const _0x3ebf2e=_0x26754e[0x0]['y']+_0x1a93c3*_0x5d8f34['priceLevel'][_0x466db7+0x1]['value'],_0x5ed6ef={};_0x5ed6ef['opacity']=_0x11a7d1['background']['opacity'],_0x1c336d['prepareFill'](Object['assign'](Object['assign']({},_0x1b2ff4[_0x466db7+0x1]['line']),_0x5ed6ef)),_0x1c336d['addRectPath'](new Vector(_0x26754e[0x0]['x'],_0xb904e),new Vector(_0x26754e[0x3]['x'],_0x3ebf2e)),_0x1c336d['fillWithoutHT']();}_0x1c336d['closePath']();if(_0x11a7d1['labels']['showCoefficient']){const _0x3cb824=_0x2e22b5['config']['components']['drawings'],_0x2d1aa4={};_0x2d1aa4['x']=_0x26754e[0x0]['x'],_0x2d1aa4['y']=_0xb904e;const _0x5b6305={};_0x5b6305['x']=_0x26754e[0x3]['x'],_0x5b6305['y']=_0xb904e;const _0x446f47=[_0x2d1aa4,_0x5b6305],_0x4b5b67={};_0x4b5b67['x']=_0x26754e[0x1]['x']>=_0x26754e[0x0]['x']?_0x2208ed['PROP_LABEL_PLACEMENT_LEFT']:_0x2208ed['PROP_LABEL_PLACEMENT_RIGHT'],_0x4b5b67['y']=_0x2208ed['PROP_POSITION_MIDDLE_BOX'];const _0x3b7eaa={};_0x3b7eaa['x']=_0x26754e[0x1]['x']>=_0x26754e[0x0]['x']?_0x2208ed['PROP_LABEL_PLACEMENT_RIGHT']:_0x2208ed['PROP_LABEL_PLACEMENT_LEFT'],_0x3b7eaa['y']=_0x2208ed['PROP_POSITION_MIDDLE_BOX'];const _0x120df6=[_0x4b5b67,_0x3b7eaa],_0x39e144=Object['assign'](Object['assign']({},_0x11a7d1['text']),{'textFontFamily':_0x3cb824['fontFamily'],'textSize':getFontSizeInPx(_0x3cb824['fontSize'])});this['drawLabel'](_0x1c336d,_0x446f47,_0x28707a,_0x120df6,_0x39e144);}}),_0x1c336d['context']['restore']());}}