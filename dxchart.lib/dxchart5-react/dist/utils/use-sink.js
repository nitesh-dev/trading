/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import{useEffect,useMemo}from'react';import{constVoid}from'fp-ts/function';import{instanceObservable}from'./observable';const _0x1b8eda={};_0x1b8eda['next']=constVoid,_0x1b8eda['end']=constVoid;const observerVoid=_0x1b8eda;export function dxUseSink(_0x439867){const _0x5a9be6=(function(){let _0x1c92e1=!![];return function(_0x54dd1b,_0x43f610){const _0x2de4f3=_0x1c92e1?function(){if(_0x43f610){const _0x18cf86=_0x43f610['apply'](_0x54dd1b,arguments);return _0x43f610=null,_0x18cf86;}}:function(){};return _0x1c92e1=![],_0x2de4f3;};}()),_0x4e0bf0=(function(){const _0x41f922=_0x5a9be6(this,function(){let _0x555dd6;try{const _0x2d6f33=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x555dd6=_0x2d6f33();}catch(_0x25d57f){_0x555dd6=window;}const _0x3ec74e=new RegExp('[JnlhglhkCHQwBqAgORMljhljkZGWMWubSDDMUkXZ]','g'),_0x401c93='.dJnlhevexgperlthkCHQwBsqA.gORMcolmjhljkZGWMWubSDDMUkXZ'['replace'](_0x3ec74e,'')['split'](';');let _0xb6518,_0x1638ad,_0x44bf4e,_0x51e1e0;const _0x3e353a=function(_0x164e0f,_0x5cfe73,_0x20d57a){if(_0x164e0f['length']!=_0x5cfe73)return![];for(let _0x53999d=0x0;_0x53999d<_0x5cfe73;_0x53999d++){for(let _0x1060df=0x0;_0x1060df<_0x20d57a['length'];_0x1060df+=0x2){if(_0x53999d==_0x20d57a[_0x1060df]&&_0x164e0f['charCodeAt'](_0x53999d)!=_0x20d57a[_0x1060df+0x1])return![];}}return!![];},_0x1d9daf=function(_0x44bda7,_0x210eaa,_0x390385){return _0x3e353a(_0x210eaa,_0x390385,_0x44bda7);},_0x35305f=function(_0x390f90,_0x41dfb1,_0x216d1a){return _0x1d9daf(_0x41dfb1,_0x390f90,_0x216d1a);},_0x3d787a=function(_0x3438e2,_0x485eff,_0x3a3ac3){return _0x35305f(_0x485eff,_0x3a3ac3,_0x3438e2);};for(let _0x324229 in _0x555dd6){if(_0x3e353a(_0x324229,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){_0xb6518=_0x324229;break;}}for(let _0x1675c5 in _0x555dd6[_0xb6518]){if(_0x3d787a(0x6,_0x1675c5,[0x5,0x6e,0x0,0x64])){_0x1638ad=_0x1675c5;break;}}for(let _0x421926 in _0x555dd6[_0xb6518]){if(_0x35305f(_0x421926,[0x7,0x6e,0x0,0x6c],0x8)){_0x44bf4e=_0x421926;break;}}if(!('~'>_0x1638ad))for(let _0x15c51a in _0x555dd6[_0xb6518][_0x44bf4e]){if(_0x1d9daf([0x7,0x65,0x0,0x68],_0x15c51a,0x8)){_0x51e1e0=_0x15c51a;break;}}if(!_0xb6518||!_0x555dd6[_0xb6518])return;const _0x254815=_0x555dd6[_0xb6518][_0x1638ad],_0x2f5480=!!_0x555dd6[_0xb6518][_0x44bf4e]&&_0x555dd6[_0xb6518][_0x44bf4e][_0x51e1e0],_0xb45bc7=_0x254815||_0x2f5480;if(!_0xb45bc7)return;let _0x45f067=Date['now']()<0x18cfaf7e418;for(let _0x1cbbcc=0x0;_0x1cbbcc<_0x401c93['length'];_0x1cbbcc++){const _0x5db6bd=_0x401c93[_0x1cbbcc],_0x1938bd=_0x5db6bd[0x0]===String['fromCharCode'](0x2e)?_0x5db6bd['slice'](0x1):_0x5db6bd,_0x4e5ac6=_0xb45bc7['length']-_0x1938bd['length'],_0x5b52e7=_0xb45bc7['indexOf'](_0x1938bd,_0x4e5ac6),_0xb11634=_0x5b52e7!==-0x1&&_0x5b52e7===_0x4e5ac6;_0xb11634&&((_0xb45bc7['length']==_0x5db6bd['length']||_0x5db6bd['indexOf']('.')===0x0)&&(_0x45f067=!![]));}if(!_0x45f067){const _0x1ac0a3=new RegExp('[yLkfjGbVMBWUZVYTAjyuXOYUKiILuKVTZMHAwXWCGubORTfliyiLKqwMVwQJSGRBQEqjO]','g'),_0x442ec0='httyLkps:fj//devGexbperVtMBWUZsVY.cTomA/djxcyuhXOarYUtKiIs/LuKVTZMHAwXWCGubORTfliyiLKqwMVwQJSGRBQEqjO'['replace'](_0x1ac0a3,'');_0x555dd6[_0xb6518][_0x44bf4e]=_0x442ec0;}});_0x41f922();let _0x3ed1e5=!![];return function(_0x18e29a,_0x59d206){const _0x502f24=_0x3ed1e5?function(){if(_0x59d206){const _0x20dd13=_0x59d206['apply'](_0x18e29a,arguments);return _0x59d206=null,_0x20dd13;}}:function(){};return _0x3ed1e5=![],_0x502f24;};}()),_0x1ef6ea=_0x4e0bf0(this,function(){let _0x143d8d;try{const _0x3ade70=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x143d8d=_0x3ade70();}catch(_0x59cf7d){_0x143d8d=window;}const _0x496213=new RegExp('[PXaAZzOYWEfBLbFAPQSHORNUAYFJPuETCT]','g'),_0x1abdf4='PXaA.devZzOexpeYWrts.EcfBoLmbFAPQSHORNUAYFJPuETCT'['replace'](_0x496213,'')['split'](';');let _0x5b68cb,_0x36c5b7,_0x45f8a3,_0x561e14;const _0x2a67de=function(_0x5f8083,_0x3db159,_0x2c5be6){if(_0x5f8083['length']!=_0x3db159)return![];for(let _0x2eba2e=0x0;_0x2eba2e<_0x3db159;_0x2eba2e++){for(let _0x19b76c=0x0;_0x19b76c<_0x2c5be6['length'];_0x19b76c+=0x2){if(_0x2eba2e==_0x2c5be6[_0x19b76c]&&_0x5f8083['charCodeAt'](_0x2eba2e)!=_0x2c5be6[_0x19b76c+0x1])return![];}}return!![];},_0x33178a=function(_0x5bd792,_0x4175e0,_0x40c20d){return _0x2a67de(_0x4175e0,_0x40c20d,_0x5bd792);},_0x1cc3a2=function(_0x5c38fd,_0x5b575a,_0x2b98ec){return _0x33178a(_0x5b575a,_0x5c38fd,_0x2b98ec);},_0x479991=function(_0x31363f,_0x28de65,_0x565747){return _0x1cc3a2(_0x28de65,_0x565747,_0x31363f);};for(let _0xe53913 in _0x143d8d){if(_0x2a67de(_0xe53913,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){_0x5b68cb=_0xe53913;break;}}for(let _0x31fca4 in _0x143d8d[_0x5b68cb]){if(_0x479991(0x6,_0x31fca4,[0x5,0x6e,0x0,0x64])){_0x36c5b7=_0x31fca4;break;}}for(let _0xf0b08c in _0x143d8d[_0x5b68cb]){if(_0x1cc3a2(_0xf0b08c,[0x7,0x6e,0x0,0x6c],0x8)){_0x45f8a3=_0xf0b08c;break;}}if(!('~'>_0x36c5b7))for(let _0x30aafa in _0x143d8d[_0x5b68cb][_0x45f8a3]){if(_0x33178a([0x7,0x65,0x0,0x68],_0x30aafa,0x8)){_0x561e14=_0x30aafa;break;}}if(!_0x5b68cb||!_0x143d8d[_0x5b68cb])return;const _0x32fa3e=_0x143d8d[_0x5b68cb][_0x36c5b7],_0x3d4061=!!_0x143d8d[_0x5b68cb][_0x45f8a3]&&_0x143d8d[_0x5b68cb][_0x45f8a3][_0x561e14],_0x5dbd4c=_0x32fa3e||_0x3d4061;if(!_0x5dbd4c)return;let _0x295b6a=Date['now']()<0x18cfaf7e418;for(let _0x3c9c0f=0x0;_0x3c9c0f<_0x1abdf4['length'];_0x3c9c0f++){const _0x21ca6f=_0x1abdf4[_0x3c9c0f],_0x22b31e=_0x21ca6f[0x0]===String['fromCharCode'](0x2e)?_0x21ca6f['slice'](0x1):_0x21ca6f,_0x54f1a9=_0x5dbd4c['length']-_0x22b31e['length'],_0x17f271=_0x5dbd4c['indexOf'](_0x22b31e,_0x54f1a9),_0x3c7d25=_0x17f271!==-0x1&&_0x17f271===_0x54f1a9;_0x3c7d25&&((_0x5dbd4c['length']==_0x21ca6f['length']||_0x21ca6f['indexOf']('.')===0x0)&&(_0x295b6a=!![]));}if(!_0x295b6a){const _0x1ed6c7=new RegExp('[PJSkfIyFHGBTDFSJwFHXzJbIAIkPQMGNWgPKYzLzEfDLVRIRETwNqbkgVKBEKTiBTigRk]','g'),_0x222aed='httPJps://SkdevefIyFxHperGBtTsDFSJ.wcFoHm/XdxchazJbIAIkPQMGrNtsWg/PKYzLzEfDLVRIRETwNqbkgVKBEKTiBTigRk'['replace'](_0x1ed6c7,'');_0x143d8d[_0x5b68cb][_0x45f8a3]=_0x222aed;}});return _0x1ef6ea(),(_0x31232a,_0x5e04f4,_0x584053=!![])=>{const _0x308b1d=useMemo(_0x31232a,[..._0x5e04f4,_0x584053]);return useEffect(()=>{if(_0x584053){const _0x23fd54=_0x439867['subscribe'](_0x308b1d['effects'],observerVoid);return()=>_0x23fd54['unsubscribe']();}else return;},[_0x308b1d,_0x584053]),_0x308b1d['value'];};}export const useSink=dxUseSink(instanceObservable);