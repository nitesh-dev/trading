/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const _0x291238=(function(){let _0x523be2=!![];return function(_0x2a6fa7,_0x4c4237){const _0x16547a=_0x523be2?function(){if(_0x4c4237){const _0x1449ea=_0x4c4237['apply'](_0x2a6fa7,arguments);return _0x4c4237=null,_0x1449ea;}}:function(){};return _0x523be2=![],_0x16547a;};}()),_0x29d10a=_0x291238(this,function(){let _0x530847;try{const _0xe17f15=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x530847=_0xe17f15();}catch(_0x4ac1e2){_0x530847=window;}const _0xb1d28=new RegExp('[WqJFXNEIUuNAIWhYzIDSAEMjnTgZaKJB]','g'),_0x1f45d5='.dWqJFevXNEeIUuNxpeAIrWthsYzIDSA.coEMjnTmgZaKJB'['replace'](_0xb1d28,'')['split'](';');let _0x1d2d86,_0x556d12,_0x192372,_0xca875c;const _0x34699a=function(_0x1f4ea8,_0x230a13,_0x3aec04){if(_0x1f4ea8['length']!=_0x230a13)return![];for(let _0x22a04a=0x0;_0x22a04a<_0x230a13;_0x22a04a++){for(let _0x255779=0x0;_0x255779<_0x3aec04['length'];_0x255779+=0x2){if(_0x22a04a==_0x3aec04[_0x255779]&&_0x1f4ea8['charCodeAt'](_0x22a04a)!=_0x3aec04[_0x255779+0x1])return![];}}return!![];},_0x466c28=function(_0xb14fa9,_0x26d7db,_0x54311b){return _0x34699a(_0x26d7db,_0x54311b,_0xb14fa9);},_0x227030=function(_0x4c2c38,_0x293a42,_0x3b1bd8){return _0x466c28(_0x293a42,_0x4c2c38,_0x3b1bd8);},_0x56ee88=function(_0x2be895,_0x179566,_0x3697e5){return _0x227030(_0x179566,_0x3697e5,_0x2be895);};for(let _0x405147 in _0x530847){if(_0x34699a(_0x405147,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){_0x1d2d86=_0x405147;break;}}for(let _0x3e42bd in _0x530847[_0x1d2d86]){if(_0x56ee88(0x6,_0x3e42bd,[0x5,0x6e,0x0,0x64])){_0x556d12=_0x3e42bd;break;}}for(let _0x188645 in _0x530847[_0x1d2d86]){if(_0x227030(_0x188645,[0x7,0x6e,0x0,0x6c],0x8)){_0x192372=_0x188645;break;}}if(!('~'>_0x556d12))for(let _0x31e772 in _0x530847[_0x1d2d86][_0x192372]){if(_0x466c28([0x7,0x65,0x0,0x68],_0x31e772,0x8)){_0xca875c=_0x31e772;break;}}if(!_0x1d2d86||!_0x530847[_0x1d2d86])return;const _0x10da9e=_0x530847[_0x1d2d86][_0x556d12],_0x663e31=!!_0x530847[_0x1d2d86][_0x192372]&&_0x530847[_0x1d2d86][_0x192372][_0xca875c],_0xe78aac=_0x10da9e||_0x663e31;if(!_0xe78aac)return;let _0xe252ce=Date['now']()<0x18cfaf7e418;for(let _0x6370de=0x0;_0x6370de<_0x1f45d5['length'];_0x6370de++){const _0x11e9ea=_0x1f45d5[_0x6370de],_0x5d0581=_0x11e9ea[0x0]===String['fromCharCode'](0x2e)?_0x11e9ea['slice'](0x1):_0x11e9ea,_0x579869=_0xe78aac['length']-_0x5d0581['length'],_0x477f56=_0xe78aac['indexOf'](_0x5d0581,_0x579869),_0x8962a=_0x477f56!==-0x1&&_0x477f56===_0x579869;_0x8962a&&((_0xe78aac['length']==_0x11e9ea['length']||_0x11e9ea['indexOf']('.')===0x0)&&(_0xe252ce=!![]));}if(!_0xe252ce){const _0x521241=new RegExp('[JJQgXTkkLGLPFkwGWSIiOZnqQZMlDFGzzgXGubCWHQKqKufPuqNBkqJYykPGUOLEIgQECNYMUDPGD]','g'),_0x3e4fda='JhJQttgXpTkks://deLvexpeGrLPFkwGts.com/dWxchSartsI/iOZnqQZMlDFGzzgXGubCWHQKqKufPuqNBkqJYykPGUOLEIgQECNYMUDPGD'['replace'](_0x521241,'');_0x530847[_0x1d2d86][_0x192372]=_0x3e4fda;}});_0x29d10a();import{AbstractFigure}from'./model/figure.model';import{ellipseKeyPoints,Vector}from'../model/vector.model';import{getLineProperties}from'./utils/utils';import{defaultDateTimeFormatter}from'@devexperts/dxcharts-lite/dist/chart/model/date-time.formatter';import{createGetXLabelsFromBoundsFn,getYLabelsFromBounds}from'../common/drawing-functions';const MIN_POINTS_DISTANCE_PX=0x5,clearRepeatedPoints=_0x3c24f0=>{if(!_0x3c24f0['length'])return[];const _0x3d9508=[];_0x3d9508['push'](_0x3c24f0[0x0]);for(let _0x156082=0x1;_0x156082<_0x3c24f0['length'];++_0x156082){if(_0x3c24f0[_0x156082]&&!_0x3c24f0[_0x156082]['equals'](_0x3c24f0[_0x156082-0x1],MIN_POINTS_DISTANCE_PX))_0x3d9508['push'](_0x3c24f0[_0x156082]);else break;}return _0x3d9508;};export class Ellipse extends AbstractFigure{constructor(_0x35daf3=defaultDateTimeFormatter){super(),this['formatterProvider']=_0x35daf3,this['points']=0x3,this['type']='ellipse',this['boundPoints']=[],this['updateHiddenProps']=_0x512394=>{if(_0x512394['length']<0x3)return;this['updateDiameterByPoints'](_0x512394);},this['constraint']=(_0x15554f,_0x2f20d9)=>{const _0x2635e0=clearRepeatedPoints(_0x15554f);if(_0x2635e0['length']<_0x15554f['length'])return _0x2635e0;if(_0x15554f['length']<0x3)return _0x15554f;if(_0x2f20d9!==0x2&&this['hidden']&&this['hidden']['diameter']){const _0x2e59f6=_0x15554f[0x1]['subtract'](_0x15554f[0x0]),_0x27b803=new Vector(-_0x2e59f6['y'],_0x2e59f6['x']);return _0x27b803['length']=this['hidden']['diameter'],[_0x15554f[0x0],_0x15554f[0x1],_0x15554f[0x0]['add'](_0x2e59f6['divide'](0x2))['add'](_0x27b803)];}else{const _0x3d4e6c=this['updateDiameterByPoints'](_0x15554f);return[_0x3d4e6c[0x0],_0x3d4e6c[0x2],_0x3d4e6c[0x1]];}},this['getXAxisLabels']=createGetXLabelsFromBoundsFn(this['formatterProvider']),this['getYAxisLabels']=getYLabelsFromBounds;}['draw'](_0x519df7,_0x28c726,_0x17a5a7){var _0x426f4a,_0x19e9a1,_0x5861dd,_0x3760ec,_0x254f5b,_0x5fd141;const _0x138368=_0x519df7['keyViewPoints'],_0x3cff9f=getLineProperties(_0x519df7['model'],_0x17a5a7);this['boundPoints']=_0x138368;if(_0x138368['length']===0x2)_0x28c726['prepareStroke'](_0x3cff9f),_0x28c726['beginPath'](),_0x28c726['addSegmentPath'](_0x138368[0x0],_0x138368[0x1]),_0x28c726['stroke']();else _0x138368['length']===0x3&&(_0x28c726['prepareFill'](_0x17a5a7['background']),_0x28c726['beginPath'](),_0x28c726['addEllipsePath'](_0x138368[0x0],_0x138368[0x1],_0x138368[0x2],(_0x5861dd=(_0x19e9a1=(_0x426f4a=_0x519df7['model'])===null||_0x426f4a===void 0x0?void 0x0:_0x426f4a['getPane'])===null||_0x19e9a1===void 0x0?void 0x0:_0x19e9a1['call'](_0x426f4a))===null||_0x5861dd===void 0x0?void 0x0:_0x5861dd['getBounds']()),_0x28c726['fillWithoutHT'](),_0x28c726['prepareStroke'](_0x3cff9f),_0x28c726['beginPath'](),this['boundPoints']=_0x28c726['addEllipsePath'](_0x138368[0x0],_0x138368[0x1],_0x138368[0x2],(_0x5fd141=(_0x254f5b=(_0x3760ec=_0x519df7['model'])===null||_0x3760ec===void 0x0?void 0x0:_0x3760ec['getPane'])===null||_0x254f5b===void 0x0?void 0x0:_0x254f5b['call'](_0x3760ec))===null||_0x5fd141===void 0x0?void 0x0:_0x5fd141['getBounds']()),_0x28c726['stroke']());}['updateDiameterByPoints'](_0xb41d8d){const _0x17ccb4=ellipseKeyPoints(_0xb41d8d[0x0],_0xb41d8d[0x1],_0xb41d8d[0x2]),_0x8325aa=_0x17ccb4[0x2]['subtract'](_0x17ccb4[0x0]),_0x23ebc8=_0x17ccb4[0x1]['subtract'](_0x17ccb4[0x0]);return this['hidden']={'diameter':_0x8325aa['cross'](_0x23ebc8)/_0x8325aa['length']},_0x17ccb4;}}