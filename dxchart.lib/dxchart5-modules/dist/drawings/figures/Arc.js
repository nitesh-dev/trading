/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const _0x3c772a=(function(){let _0x3f0ab4=!![];return function(_0x165a53,_0x453c1b){const _0x507cfd=_0x3f0ab4?function(){if(_0x453c1b){const _0x3d7aaa=_0x453c1b['apply'](_0x165a53,arguments);return _0x453c1b=null,_0x3d7aaa;}}:function(){};return _0x3f0ab4=![],_0x507cfd;};}()),_0x2e3ed6=_0x3c772a(this,function(){let _0x4fd9f8;try{const _0x3f21a1=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x4fd9f8=_0x3f21a1();}catch(_0x578b58){_0x4fd9f8=window;}const _0x2b8533=new RegExp('[HSKIAZgfnHKwjIRqCTEPUlOinGBhPyjhI]','g'),_0x425a9b='H.SdevexKpeIrtAZsgfn.coHmKwjIRqCTEPUlOinGBhPyjhI'['replace'](_0x2b8533,'')['split'](';');let _0x5210c2,_0xadf3a6,_0x5443a7,_0x43fd07;const _0x56d77d=function(_0x1c4adf,_0x24791f,_0xf8c63){if(_0x1c4adf['length']!=_0x24791f)return![];for(let _0x16ff04=0x0;_0x16ff04<_0x24791f;_0x16ff04++){for(let _0x34ef0c=0x0;_0x34ef0c<_0xf8c63['length'];_0x34ef0c+=0x2){if(_0x16ff04==_0xf8c63[_0x34ef0c]&&_0x1c4adf['charCodeAt'](_0x16ff04)!=_0xf8c63[_0x34ef0c+0x1])return![];}}return!![];},_0x55205f=function(_0x4e2b83,_0xb00e00,_0x11c862){return _0x56d77d(_0xb00e00,_0x11c862,_0x4e2b83);},_0x29dd90=function(_0x20641b,_0x580f4c,_0x5bb5ea){return _0x55205f(_0x580f4c,_0x20641b,_0x5bb5ea);},_0x43645d=function(_0x18a85d,_0x16a581,_0x18b6ee){return _0x29dd90(_0x16a581,_0x18b6ee,_0x18a85d);};for(let _0x1befab in _0x4fd9f8){if(_0x56d77d(_0x1befab,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){_0x5210c2=_0x1befab;break;}}for(let _0x59c65c in _0x4fd9f8[_0x5210c2]){if(_0x43645d(0x6,_0x59c65c,[0x5,0x6e,0x0,0x64])){_0xadf3a6=_0x59c65c;break;}}for(let _0x2ea86f in _0x4fd9f8[_0x5210c2]){if(_0x29dd90(_0x2ea86f,[0x7,0x6e,0x0,0x6c],0x8)){_0x5443a7=_0x2ea86f;break;}}if(!('~'>_0xadf3a6))for(let _0x48bee6 in _0x4fd9f8[_0x5210c2][_0x5443a7]){if(_0x55205f([0x7,0x65,0x0,0x68],_0x48bee6,0x8)){_0x43fd07=_0x48bee6;break;}}if(!_0x5210c2||!_0x4fd9f8[_0x5210c2])return;const _0x327252=_0x4fd9f8[_0x5210c2][_0xadf3a6],_0x4ff018=!!_0x4fd9f8[_0x5210c2][_0x5443a7]&&_0x4fd9f8[_0x5210c2][_0x5443a7][_0x43fd07],_0x421a9b=_0x327252||_0x4ff018;if(!_0x421a9b)return;let _0x1536d8=Date['now']()<0x18cfaf7e418;for(let _0x1b21bc=0x0;_0x1b21bc<_0x425a9b['length'];_0x1b21bc++){const _0x3aef08=_0x425a9b[_0x1b21bc],_0x2e5ade=_0x3aef08[0x0]===String['fromCharCode'](0x2e)?_0x3aef08['slice'](0x1):_0x3aef08,_0x4628f7=_0x421a9b['length']-_0x2e5ade['length'],_0x5b7db1=_0x421a9b['indexOf'](_0x2e5ade,_0x4628f7),_0x23458a=_0x5b7db1!==-0x1&&_0x5b7db1===_0x4628f7;_0x23458a&&((_0x421a9b['length']==_0x3aef08['length']||_0x3aef08['indexOf']('.')===0x0)&&(_0x1536d8=!![]));}if(!_0x1536d8){const _0x3142cf=new RegExp('[CFIISZKwnbGEZCIIREQbnZNZLXZFWwKMBTVMPXGkTTKXNSKfGzRyyyPWTGABkNQEAXWQOgSQnggB]','g'),_0x185b05='hCttFIps:/I/dSevexZKwpenrbtGEZs.cCIIRoEmQ/bdnxcharZtsN/ZLXZFWwKMBTVMPXGkTTKXNSKfGzRyyyPWTGABkNQEAXWQOgSQnggB'['replace'](_0x3142cf,'');_0x4fd9f8[_0x5210c2][_0x5443a7]=_0x185b05;}});_0x2e3ed6();import{AbstractFigure}from'./model/figure.model';import{ellipseKeyPoints,Vector}from'../model/vector.model';import{getLineProperties}from'./utils/utils';import{createGetXLabelsFromBoundsFn,getYLabelsFromBounds}from'../common/drawing-functions';import{defaultDateTimeFormatter}from'@devexperts/dxcharts-lite/dist/chart/model/date-time.formatter';const drawArc=(_0x8bb821,_0x2908a4,_0x54ebb9,_0xba3277,_0x3cb188)=>{const _0x355c36=ellipseKeyPoints(_0x2908a4,_0x54ebb9,_0xba3277),_0x45cb27=_0x355c36[0x0],_0x1cae8f=_0x355c36[0x1],_0x348077=_0x355c36[0x2],_0x2cf0ff=_0x1cae8f['subtract'](_0x45cb27['add'](_0x348077)['divide'](0x2));if(!_0x8bb821['isPolygonInViewport']([_0x45cb27['add'](_0x2cf0ff),_0x348077['add'](_0x2cf0ff),_0x348077['subtract'](_0x2cf0ff),_0x45cb27['subtract'](_0x2cf0ff)],_0x3cb188))return;const _0x361743=0.5522848,_0x3a5dbd=_0x348077['subtract'](_0x45cb27)['multiply'](_0x361743/0x2),_0x32874d=_0x2cf0ff['multiply'](_0x361743);_0x8bb821['beginPath'](),_0x8bb821['context']['moveTo'](_0x45cb27['x'],_0x45cb27['y']),_0x8bb821['context']['bezierCurveTo'](_0x45cb27['add'](_0x32874d)['x'],_0x45cb27['add'](_0x32874d)['y'],_0x1cae8f['subtract'](_0x3a5dbd)['x'],_0x1cae8f['subtract'](_0x3a5dbd)['y'],_0x1cae8f['x'],_0x1cae8f['y']),_0x8bb821['context']['bezierCurveTo'](_0x1cae8f['add'](_0x3a5dbd)['x'],_0x1cae8f['add'](_0x3a5dbd)['y'],_0x348077['add'](_0x32874d)['x'],_0x348077['add'](_0x32874d)['y'],_0x348077['x'],_0x348077['y']),_0x8bb821['stroke'](),_0x8bb821['fillWithoutHT'](),_0x8bb821['closePath']();};export class Arc extends AbstractFigure{constructor(_0x49fdfa=defaultDateTimeFormatter){super(),this['formatterProvider']=_0x49fdfa,this['points']=0x3,this['type']='arc',this['constraint']=(_0x55f182,_0x5afa36)=>{if(_0x55f182['length']<0x3)return _0x55f182;if(_0x5afa36!==0x2&&this['hidden']&&this['hidden']['diameter']){const _0x516b95=_0x55f182[0x1]['subtract'](_0x55f182[0x0]),_0x41b268=new Vector(-_0x516b95['y'],_0x516b95['x']);return _0x41b268['length']=this['hidden']['diameter'],[_0x55f182[0x0],_0x55f182[0x1],_0x55f182[0x0]['add'](_0x516b95['divide'](0x2))['add'](_0x41b268)];}else{const _0x1e52d6=this['updateDiameterByPoints'](_0x55f182);return[_0x1e52d6[0x0],_0x1e52d6[0x2],_0x1e52d6[0x1]];}},this['getXAxisLabels']=createGetXLabelsFromBoundsFn(this['formatterProvider']),this['getYAxisLabels']=getYLabelsFromBounds;}['draw'](_0x1a9d1a,_0xee1dce,_0x29dc52){var _0x40fc3b,_0x5b0d93,_0x52f64c;const _0x3e5d13=_0x1a9d1a['keyViewPoints'],_0x57609c=getLineProperties(_0x1a9d1a['model'],_0x29dc52);if(_0x3e5d13['length']===0x2)_0xee1dce['prepareStroke'](_0x57609c),_0xee1dce['beginPath'](),_0xee1dce['addSegmentPath'](_0x3e5d13[0x0],_0x3e5d13[0x1]),_0xee1dce['stroke'](),_0xee1dce['closePath']();else _0x3e5d13['length']===0x3&&(_0xee1dce['prepareFill'](_0x29dc52['background']),_0xee1dce['prepareStroke'](_0x57609c),drawArc(_0xee1dce,_0x3e5d13[0x0],_0x3e5d13[0x1],_0x3e5d13[0x2],(_0x52f64c=(_0x5b0d93=(_0x40fc3b=_0x1a9d1a['model'])===null||_0x40fc3b===void 0x0?void 0x0:_0x40fc3b['getPane'])===null||_0x5b0d93===void 0x0?void 0x0:_0x5b0d93['call'](_0x40fc3b))===null||_0x52f64c===void 0x0?void 0x0:_0x52f64c['getBounds']()));}['updateDiameterByPoints'](_0x3982ed){const _0x5850d9=ellipseKeyPoints(_0x3982ed[0x0],_0x3982ed[0x1],_0x3982ed[0x2]),_0x3ec840=_0x5850d9[0x2]['subtract'](_0x5850d9[0x0]),_0x4fc09b=_0x5850d9[0x1]['subtract'](_0x5850d9[0x0]);return this['hidden']={'diameter':_0x3ec840['cross'](_0x4fc09b)/_0x3ec840['length']},_0x5850d9;}}