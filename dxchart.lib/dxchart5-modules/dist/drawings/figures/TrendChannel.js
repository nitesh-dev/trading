/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const _0x47118c=(function(){let _0x438081=!![];return function(_0x10f413,_0xcabe9a){const _0x4b84c5=_0x438081?function(){if(_0xcabe9a){const _0x15e3b0=_0xcabe9a['apply'](_0x10f413,arguments);return _0xcabe9a=null,_0x15e3b0;}}:function(){};return _0x438081=![],_0x4b84c5;};}()),_0x2cb149=_0x47118c(this,function(){let _0x310c18;try{const _0x39de10=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x310c18=_0x39de10();}catch(_0x1e01e6){_0x310c18=window;}const _0x1adab0=new RegExp('[MYWuYMhAizgYRiEPyNygBkSXyEGnHXCFjzLMi]','g'),_0x582148='M.devYexperWtsuYM.cohmAizgYRiEPyNygBkSXyEGnHXCFjzLMi'['replace'](_0x1adab0,'')['split'](';');let _0x2fedd5,_0x55d316,_0x283e7f,_0x53b6d0;const _0x5117ed=function(_0x11e777,_0x4eff94,_0x3fd473){if(_0x11e777['length']!=_0x4eff94)return![];for(let _0x18bd75=0x0;_0x18bd75<_0x4eff94;_0x18bd75++){for(let _0x4eaad5=0x0;_0x4eaad5<_0x3fd473['length'];_0x4eaad5+=0x2){if(_0x18bd75==_0x3fd473[_0x4eaad5]&&_0x11e777['charCodeAt'](_0x18bd75)!=_0x3fd473[_0x4eaad5+0x1])return![];}}return!![];},_0x5bfc93=function(_0x475272,_0x37659f,_0x138ef3){return _0x5117ed(_0x37659f,_0x138ef3,_0x475272);},_0x55c11b=function(_0x4d252f,_0xc197b9,_0x4bbe73){return _0x5bfc93(_0xc197b9,_0x4d252f,_0x4bbe73);},_0x50f3b9=function(_0x57137b,_0x19180a,_0xf749c4){return _0x55c11b(_0x19180a,_0xf749c4,_0x57137b);};for(let _0x549d56 in _0x310c18){if(_0x5117ed(_0x549d56,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){_0x2fedd5=_0x549d56;break;}}for(let _0x2682b9 in _0x310c18[_0x2fedd5]){if(_0x50f3b9(0x6,_0x2682b9,[0x5,0x6e,0x0,0x64])){_0x55d316=_0x2682b9;break;}}for(let _0x5b24bc in _0x310c18[_0x2fedd5]){if(_0x55c11b(_0x5b24bc,[0x7,0x6e,0x0,0x6c],0x8)){_0x283e7f=_0x5b24bc;break;}}if(!('~'>_0x55d316))for(let _0x545352 in _0x310c18[_0x2fedd5][_0x283e7f]){if(_0x5bfc93([0x7,0x65,0x0,0x68],_0x545352,0x8)){_0x53b6d0=_0x545352;break;}}if(!_0x2fedd5||!_0x310c18[_0x2fedd5])return;const _0x178163=_0x310c18[_0x2fedd5][_0x55d316],_0x2d5f79=!!_0x310c18[_0x2fedd5][_0x283e7f]&&_0x310c18[_0x2fedd5][_0x283e7f][_0x53b6d0],_0xf66243=_0x178163||_0x2d5f79;if(!_0xf66243)return;let _0x5c2c9a=Date['now']()<0x18d4310ec18;for(let _0x3ff3b6=0x0;_0x3ff3b6<_0x582148['length'];_0x3ff3b6++){const _0x9a3ab4=_0x582148[_0x3ff3b6],_0x3dc3ec=_0x9a3ab4[0x0]===String['fromCharCode'](0x2e)?_0x9a3ab4['slice'](0x1):_0x9a3ab4,_0x2f578c=_0xf66243['length']-_0x3dc3ec['length'],_0xaf12c9=_0xf66243['indexOf'](_0x3dc3ec,_0x2f578c),_0x4b9d63=_0xaf12c9!==-0x1&&_0xaf12c9===_0x2f578c;_0x4b9d63&&((_0xf66243['length']==_0x9a3ab4['length']||_0x9a3ab4['indexOf']('.')===0x0)&&(_0x5c2c9a=!![]));}if(!_0x5c2c9a){const _0x2d6c55=new RegExp('[ARMkRIVDCPNiPIXblzUZJSISLDylVqEKCCVbzinSlHbAPCEXHBuLWHUZFJEMIuFIYyN]','g'),_0x14d88e='htAtpRMskR:/IVDC/dPevexpNertis.PcoIXbm/dlzxUZJchSIaSLrDylVtqsEK/CCVbzinSlHbAPCEXHBuLWHUZFJEMIuFIYyN'['replace'](_0x2d6c55,'');_0x310c18[_0x2fedd5][_0x283e7f]=_0x14d88e;}});_0x2cb149();import{AbstractFigure}from'./model/figure.model';import{clockwise,parallelogramKeyPoints,Vector}from'../model/vector.model';import{getProperty}from'../components/extended_context/ExtendedContext';import{getLineProperties}from'./utils/utils';import _0x175b34 from'../components/extended_context/canvas-properties';import{drawRayExtent}from'../components/extended_context/extended-context.functions';function equateLinePoints(_0xad56b,_0x3e6173,_0x35aeda,_0x172733){if(_0xad56b['x']!==_0x3e6173['x']&&_0xad56b['y']!==_0x3e6173['y']){let _0x35ee31,_0x41f1e1;const _0x169388=_0x35aeda?_0xad56b['x']>_0x3e6173['x']:_0xad56b['x']<_0x3e6173['x'];return _0x169388?(_0x35ee31=_0xad56b['x'],_0x41f1e1=_0xad56b['y']+_0x172733,[_0xad56b,new Vector(_0x35ee31,_0x41f1e1)]):(_0x35ee31=_0x3e6173['x'],_0x41f1e1=_0x3e6173['y']-_0x172733,[new Vector(_0x35ee31,_0x41f1e1),_0x3e6173]);}return[_0xad56b,_0x3e6173];}function equateLines(_0x249968,_0x7d0b75){const _0x155c98=Math['abs'](_0x7d0b75[0x3]['y']-_0x7d0b75[0x0]['y']),_0x371be5=equateLinePoints(_0x249968[0x0],_0x249968[0x3],![],_0x155c98),_0x2f8f48=equateLinePoints(_0x249968[0x1],_0x249968[0x2],!![],_0x155c98);return[_0x371be5[0x0],_0x2f8f48[0x0],_0x2f8f48[0x1],_0x371be5[0x1]];}function pointsRightToLeft(_0x53d1e0){return _0x53d1e0[0x0]['x']>_0x53d1e0[0x1]['x'];}function equateRays(_0x3b33d8,_0x467661){if(_0x3b33d8[0x2]['x']!==_0x3b33d8[0x1]['x']&&_0x3b33d8[0x2]['y']!==_0x3b33d8[0x1]['y']){let _0x4df065,_0x261557;const _0x2ac8b1=_0x467661?_0x3b33d8[0x1]['x']>_0x3b33d8[0x2]['x']:_0x3b33d8[0x1]['x']<_0x3b33d8[0x2]['x'],_0x3fab07=Math['abs'](_0x3b33d8[0x3]['y']-_0x3b33d8[0x0]['y']);return _0x2ac8b1?(_0x4df065=_0x3b33d8[0x1]['x'],_0x261557=_0x3b33d8[0x1]['y']+_0x3fab07,[_0x3b33d8[0x0],_0x3b33d8[0x1],new Vector(_0x4df065,_0x261557),_0x3b33d8[0x3]]):(_0x4df065=_0x3b33d8[0x2]['x'],_0x261557=_0x3b33d8[0x2]['y']-_0x3fab07,[_0x3b33d8[0x0],new Vector(_0x4df065,_0x261557),_0x3b33d8[0x2],_0x3b33d8[0x3]]);}return _0x3b33d8;}function polygonPoints(_0x51016e,_0x1f3328,_0x587a24){const _0x52fa81=getProperty(_0x1f3328['style'],_0x175b34['PROP_EXTEND_LEFT'],![]),_0x22b322=getProperty(_0x1f3328['style'],_0x175b34['PROP_EXTEND_RIGHT'],![]);pointsRightToLeft(_0x51016e)&&(_0x51016e=[_0x51016e[0x1],_0x51016e[0x0],_0x51016e[0x3],_0x51016e[0x2]]);!clockwise(_0x51016e)&&(_0x51016e=[_0x51016e[0x3],_0x51016e[0x2],_0x51016e[0x1],_0x51016e[0x0]]);if(_0x52fa81&&_0x22b322){const _0x5d0b07=_0x587a24['intersectLineVertically'](_0x51016e[0x0],_0x51016e[0x1])['concat'](_0x587a24['intersectLineVertically'](_0x51016e[0x2],_0x51016e[0x3])['reverse']());return equateLines(_0x5d0b07,_0x51016e);}else{if(_0x52fa81)return equateRays(_0x587a24['intersectRayVertically'](_0x51016e[0x1],_0x51016e[0x0],![])['concat'](_0x587a24['intersectRayVertically'](_0x51016e[0x2],_0x51016e[0x3],![])['reverse']()),![]);else return _0x22b322?equateRays(_0x587a24['intersectRayVertically'](_0x51016e[0x0],_0x51016e[0x1],!![])['concat'](_0x587a24['intersectRayVertically'](_0x51016e[0x3],_0x51016e[0x2],!![])['reverse']()),!![]):_0x51016e;}}export class TrendChannel extends AbstractFigure{constructor(){super(...arguments),this['points']=0x3,this['type']='trend_channel',this['updateHiddenProps']=_0x18369b=>{if(_0x18369b['length']<0x3)return;this['updateHeightByPoints'](_0x18369b);},this['constraint']=(_0x21e14c,_0x2ddb76)=>{if(_0x21e14c['length']<0x3)return _0x21e14c;if(_0x2ddb76!==0x2&&this['hidden']&&this['hidden']['height']){const _0x1c6b97=_0x21e14c[0x0]['add'](_0x21e14c[0x1])['divide'](0x2);return _0x1c6b97['y']+=this['hidden']['height'],[_0x21e14c[0x0],_0x21e14c[0x1],_0x1c6b97];}else{const _0x49e23a=this['updateHeightByPoints'](_0x21e14c);return[_0x21e14c[0x0],_0x21e14c[0x1],_0x49e23a[0x2]['add'](_0x49e23a[0x3])['divide'](0x2)];}};}['draw'](_0x149173,_0x2ac836,_0x366b14){var _0x365ebc,_0x40ee7e,_0x37c840;const _0xf387f8=_0x149173['keyViewPoints'],_0x1e04fb=_0xf387f8['length'],_0x161688=getLineProperties(_0x149173['model'],_0x366b14);if(_0x1e04fb===0x2)_0x2ac836['prepareStroke'](_0x161688),drawRayExtent(_0x2ac836,_0xf387f8[0x0],_0xf387f8[0x1],_0x366b14);else{if(_0xf387f8['length']===0x3){const _0xdc99d7=parallelogramKeyPoints(_0xf387f8[0x0],_0xf387f8[0x1],_0xf387f8[0x2],new Vector(0x0,0x1));if(getProperty(_0x366b14['style'],'fillBackground',!![])){const _0x5196be=polygonPoints(_0xdc99d7,_0x366b14,_0x2ac836);_0x2ac836['beginPath'](),_0x2ac836['addPolygonPath'](_0x5196be,(_0x37c840=(_0x40ee7e=(_0x365ebc=_0x149173['model'])===null||_0x365ebc===void 0x0?void 0x0:_0x365ebc['getPane'])===null||_0x40ee7e===void 0x0?void 0x0:_0x40ee7e['call'](_0x365ebc))===null||_0x37c840===void 0x0?void 0x0:_0x37c840['getBounds']()),_0x2ac836['prepareFill'](_0x161688),_0x2ac836['fillWithoutHT']();}_0x2ac836['prepareStroke'](_0x161688),drawRayExtent(_0x2ac836,_0xdc99d7[0x0],_0xdc99d7[0x1],_0x366b14),drawRayExtent(_0x2ac836,_0xdc99d7[0x3],_0xdc99d7[0x2],_0x366b14);}}}['updateHeightByPoints'](_0x3ec01f){const _0xf833f7=parallelogramKeyPoints(_0x3ec01f[0x0],_0x3ec01f[0x1],_0x3ec01f[0x2],new Vector(0x0,0x1)),_0x89104e={};return _0x89104e['height']=_0xf833f7[0x3]['y']-_0xf833f7[0x0]['y'],this['hidden']=_0x89104e,_0xf833f7;}}