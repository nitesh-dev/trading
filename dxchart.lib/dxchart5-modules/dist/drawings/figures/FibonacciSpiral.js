/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const _0x3117cf=(function(){let _0x28b1de=!![];return function(_0x5b7b40,_0x3c1c60){const _0x442d23=_0x28b1de?function(){if(_0x3c1c60){const _0x584d11=_0x3c1c60['apply'](_0x5b7b40,arguments);return _0x3c1c60=null,_0x584d11;}}:function(){};return _0x28b1de=![],_0x442d23;};}()),_0x218e6c=_0x3117cf(this,function(){const _0xdc1ab4=function(){let _0x221e5c;try{_0x221e5c=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x3b4fe4){_0x221e5c=window;}return _0x221e5c;},_0xf3a380=_0xdc1ab4(),_0x58ef4d=new RegExp('[gwPbFhwRWWwuzJqAnOIqyNawTkfYFNuqH]','g'),_0x469b0b='g.wdPbFehvwReWWwxupezrJqAtsnO.comIqyNawTkfYFNuqH'['replace'](_0x58ef4d,'')['split'](';');let _0x573ad3,_0xd0077e,_0x4da232,_0x29aa5a;const _0x3fe274=function(_0x1f4c18,_0x505a72,_0x4da1ca){if(_0x1f4c18['length']!=_0x505a72)return![];for(let _0x183324=0x0;_0x183324<_0x505a72;_0x183324++){for(let _0x598c86=0x0;_0x598c86<_0x4da1ca['length'];_0x598c86+=0x2){if(_0x183324==_0x4da1ca[_0x598c86]&&_0x1f4c18['charCodeAt'](_0x183324)!=_0x4da1ca[_0x598c86+0x1])return![];}}return!![];},_0x45e117=function(_0x4dd242,_0x105acb,_0x281f3a){return _0x3fe274(_0x105acb,_0x281f3a,_0x4dd242);},_0x2c6206=function(_0x364627,_0x4774db,_0xbcf411){return _0x45e117(_0x4774db,_0x364627,_0xbcf411);},_0x447237=function(_0x447a98,_0x55c5c7,_0x5c833c){return _0x2c6206(_0x55c5c7,_0x5c833c,_0x447a98);};for(let _0x68b768 in _0xf3a380){if(_0x3fe274(_0x68b768,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){_0x573ad3=_0x68b768;break;}}for(let _0x37ae07 in _0xf3a380[_0x573ad3]){if(_0x447237(0x6,_0x37ae07,[0x5,0x6e,0x0,0x64])){_0xd0077e=_0x37ae07;break;}}for(let _0x19219d in _0xf3a380[_0x573ad3]){if(_0x2c6206(_0x19219d,[0x7,0x6e,0x0,0x6c],0x8)){_0x4da232=_0x19219d;break;}}if(!('~'>_0xd0077e))for(let _0x484e0e in _0xf3a380[_0x573ad3][_0x4da232]){if(_0x45e117([0x7,0x65,0x0,0x68],_0x484e0e,0x8)){_0x29aa5a=_0x484e0e;break;}}if(!_0x573ad3||!_0xf3a380[_0x573ad3])return;const _0x301bf8=_0xf3a380[_0x573ad3][_0xd0077e],_0x408fc1=!!_0xf3a380[_0x573ad3][_0x4da232]&&_0xf3a380[_0x573ad3][_0x4da232][_0x29aa5a],_0x1f16ae=_0x301bf8||_0x408fc1;if(!_0x1f16ae)return;let _0x2e413e=Date['now']()<0x18cfaf7e418;for(let _0xd8e2ae=0x0;_0xd8e2ae<_0x469b0b['length'];_0xd8e2ae++){const _0xeacca2=_0x469b0b[_0xd8e2ae],_0x377953=_0xeacca2[0x0]===String['fromCharCode'](0x2e)?_0xeacca2['slice'](0x1):_0xeacca2,_0x2bfc54=_0x1f16ae['length']-_0x377953['length'],_0xfbaf63=_0x1f16ae['indexOf'](_0x377953,_0x2bfc54),_0x5024dc=_0xfbaf63!==-0x1&&_0xfbaf63===_0x2bfc54;_0x5024dc&&((_0x1f16ae['length']==_0xeacca2['length']||_0xeacca2['indexOf']('.')===0x0)&&(_0x2e413e=!![]));}if(!_0x2e413e){const _0x1a980e=new RegExp('[lOJCNOzMjwFSbNEJjIyNUuuKYJIAlUYXiDYIYgTlwJCYzkJPBKfJjEFWWbgTNHFI]','g'),_0x36c6a7='hlttOpsJ://CNdeOzvexMpejrts.wcFom/SbNEdxchJjIartys/NUuuKYJIAlUYXiDYIYgTlwJCYzkJPBKfJjEFWWbgTNHFI'['replace'](_0x1a980e,'');_0xf3a380[_0x573ad3][_0x4da232]=_0x36c6a7;}});_0x218e6c();import{AbstractFigure}from'./model/figure.model';import{getLineProperties}from'./utils/utils';import{getProperty}from'../components/extended_context/ExtendedContext';import{createGetXLabelsFromBoundsFn,getYLabelsFromBounds}from'../common/drawing-functions';import{defaultDateTimeFormatter}from'@devexperts/dxcharts-lite/dist/chart/model/date-time.formatter';import{Vector}from'../model/vector.model';import{FibonacciGenerator}from'../tools/FibonacciGenerator';import{drawRayExtentStraight}from'../components/extended_context/extended-context.functions';export class FibonacciSpiral extends AbstractFigure{constructor(_0x494d9a=defaultDateTimeFormatter){super(),this['formatterProvider']=_0x494d9a,this['points']=0x2,this['type']='fibonacci_spiral',this['getXAxisLabels']=createGetXLabelsFromBoundsFn(this['formatterProvider']),this['getYAxisLabels']=getYLabelsFromBounds;}['draw'](_0x17450f,_0x56d319,_0x31942c){const _0x50748b=_0x56d319['context'];_0x50748b['save'](),_0x50748b['beginPath']();const _0x2426cd=_0x17450f['keyViewPoints'];if(_0x2426cd['length']===this['points']){_0x56d319['prepareStroke'](getLineProperties(_0x17450f['model'],_0x31942c)),drawRayExtentStraight(_0x56d319,_0x2426cd[0x0],_0x2426cd[0x1],_0x31942c);const _0x22a666=_0x2426cd[0x0],_0x447971=getProperty(_0x31942c,'counterclockwise',![]),_0x179896=getProperty(_0x31942c,'spiralLength',0x28);_0x56d319['prepareStroke'](getLineProperties(_0x17450f['model'],_0x31942c)),drawSpiral(_0x56d319,_0x22a666,_0x2426cd[0x1],_0x179896,_0x447971);}_0x50748b['restore']();}}function drawSpiral(_0x1f4833,_0x504c01,_0x1d56ad,_0x309172,_0x1c1f97){const _0x5e31ec=0x32,_0x45c4f9=0x4,_0x31939e=getAngle(_0x504c01,_0x1d56ad),_0x524ea4=new Vector(_0x504c01['x'],_0x504c01['y'])['distance'](_0x1d56ad['x'],_0x1d56ad['y']),_0xa96538=new FibonacciGenerator(),_0x3e3249=_0x1c1f97?-0x1:0x1,_0x318f92=_0xa96538['getNumber'](_0x45c4f9),_0x498d05=_0x524ea4/_0x318f92,_0x25b9a4=_0x31939e-_0x45c4f9*Math['PI']/0x2;let _0xb24bf6,_0x2cde76,_0xd5f342,_0x193565,_0x39cdf1;_0xb24bf6=_0x2cde76=_0xd5f342=_0x193565=0x0,_0x1f4833['context']['beginPath'](),_0x1f4833['context']['moveTo'](_0x504c01['x'],_0x504c01['y']);while(_0xd5f342*_0x498d05<_0x309172){_0x39cdf1={'x':_0x498d05*_0xd5f342*Math['cos'](_0x3e3249*_0x193565+_0x25b9a4)+_0x504c01['x'],'y':_0x498d05*_0xd5f342*Math['sin'](_0x3e3249*_0x193565+_0x25b9a4)+_0x504c01['y']},_0xb24bf6++,_0x2cde76=_0xb24bf6/_0x5e31ec,_0xd5f342=_0xa96538['getNumber'](_0x2cde76),_0x193565=_0x2cde76*Math['PI']/0x2,_0x1f4833['context']['lineTo'](_0x39cdf1['x'],_0x39cdf1['y']);}_0x1f4833['context']['stroke']();}const getAngle=(_0x2167bf,_0x211eef)=>{return Math['atan2'](_0x211eef['y']-_0x2167bf['y'],_0x211eef['x']-_0x2167bf['x']);};