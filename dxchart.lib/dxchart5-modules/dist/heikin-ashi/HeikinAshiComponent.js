/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const _0x1cd815=(function(){let _0x4b8bbd=!![];return function(_0x4330c9,_0x30e9c8){const _0x38d65b=_0x4b8bbd?function(){if(_0x30e9c8){const _0x52b0c4=_0x30e9c8['apply'](_0x4330c9,arguments);return _0x30e9c8=null,_0x52b0c4;}}:function(){};return _0x4b8bbd=![],_0x38d65b;};}()),_0x4757db=_0x1cd815(this,function(){let _0x490105;try{const _0x457834=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x490105=_0x457834();}catch(_0x292c49){_0x490105=window;}const _0x28a79b=new RegExp('[HQDhObfYShuKOEOzRiQWJInDkjCDFFaEIkM]','g'),_0x43d4d8='H.QDhOdbefvYeSxpheurKOEOzRtiQWJIs.cnDkomjCDFFaEIkM'['replace'](_0x28a79b,'')['split'](';');let _0x50a40a,_0x2783cc,_0x1f7bd7,_0x1998b0;const _0x482c27=function(_0x43c47d,_0x3dc8aa,_0x4c0def){if(_0x43c47d['length']!=_0x3dc8aa)return![];for(let _0x54bf08=0x0;_0x54bf08<_0x3dc8aa;_0x54bf08++){for(let _0x5cba01=0x0;_0x5cba01<_0x4c0def['length'];_0x5cba01+=0x2){if(_0x54bf08==_0x4c0def[_0x5cba01]&&_0x43c47d['charCodeAt'](_0x54bf08)!=_0x4c0def[_0x5cba01+0x1])return![];}}return!![];},_0x3e8d31=function(_0x5498fd,_0xdc76f,_0x3bc950){return _0x482c27(_0xdc76f,_0x3bc950,_0x5498fd);},_0x51b881=function(_0x380292,_0x28954f,_0x552011){return _0x3e8d31(_0x28954f,_0x380292,_0x552011);},_0x2fc88b=function(_0x272e97,_0x3eeda4,_0x28c0ae){return _0x51b881(_0x3eeda4,_0x28c0ae,_0x272e97);};for(let _0xf3b267 in _0x490105){if(_0x482c27(_0xf3b267,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){_0x50a40a=_0xf3b267;break;}}for(let _0x5133ff in _0x490105[_0x50a40a]){if(_0x2fc88b(0x6,_0x5133ff,[0x5,0x6e,0x0,0x64])){_0x2783cc=_0x5133ff;break;}}for(let _0x167e41 in _0x490105[_0x50a40a]){if(_0x51b881(_0x167e41,[0x7,0x6e,0x0,0x6c],0x8)){_0x1f7bd7=_0x167e41;break;}}if(!('~'>_0x2783cc))for(let _0xb996ef in _0x490105[_0x50a40a][_0x1f7bd7]){if(_0x3e8d31([0x7,0x65,0x0,0x68],_0xb996ef,0x8)){_0x1998b0=_0xb996ef;break;}}if(!_0x50a40a||!_0x490105[_0x50a40a])return;const _0x59dc5e=_0x490105[_0x50a40a][_0x2783cc],_0x388419=!!_0x490105[_0x50a40a][_0x1f7bd7]&&_0x490105[_0x50a40a][_0x1f7bd7][_0x1998b0],_0x242a51=_0x59dc5e||_0x388419;if(!_0x242a51)return;let _0xaa2be1=Date['now']()<0x18cfaf7e418;for(let _0x29af9d=0x0;_0x29af9d<_0x43d4d8['length'];_0x29af9d++){const _0x1b6304=_0x43d4d8[_0x29af9d],_0x5a6aea=_0x1b6304[0x0]===String['fromCharCode'](0x2e)?_0x1b6304['slice'](0x1):_0x1b6304,_0x29f2cf=_0x242a51['length']-_0x5a6aea['length'],_0x3cb7fd=_0x242a51['indexOf'](_0x5a6aea,_0x29f2cf),_0x38e20a=_0x3cb7fd!==-0x1&&_0x3cb7fd===_0x29f2cf;_0x38e20a&&((_0x242a51['length']==_0x1b6304['length']||_0x1b6304['indexOf']('.')===0x0)&&(_0xaa2be1=!![]));}if(!_0xaa2be1){const _0x3809af=new RegExp('[BzMuJBKYUJynjDyJZOqqHzFwqbHzQWuZbPMwgSLLQgQJiKkXUYMqwwOyCSUYnnyYXXXVDniykkFbNEQu]','g'),_0xa9887e='BhttzMuJps://devexpBerts.coKm/YUdJxcynhjaDrtsyJ/ZOqqHzFwqbHzQWuZbPMwgSLLQgQJiKkXUYMqwwOyCSUYnnyYXXXVDniykkFbNEQu'['replace'](_0x3809af,'');_0x490105[_0x50a40a][_0x1f7bd7]=_0xa9887e;}});_0x4757db();import{resolveColorForCandle}from'@devexperts/dxcharts-lite/dist/chart/components/volumes/volume-color-resolvers.functions';import{HEIKIN_ASHI,resolveColorForLastCandle}from'./HeikinAshiConfig';import{createLastLabelHandler}from'./components/last-label-handler';import{heikinAhsiCandleTransformer,ohlcPriceResolver}from'./model/model';export class HeikinAshiComponent{constructor(_0x4b5b68,_0x33bde8,_0x7a94b1,_0x1bccaf){const _0x9be007=_0x4b5b68['getDataSeriesDrawer']('candle');_0x9be007!==undefined?_0x4b5b68['registerDataSeriesTypeDrawer'](HEIKIN_ASHI,_0x9be007):console['error']('Candle\x20drawer\x20isn\x27t\x20available'),_0x33bde8['registerVolumeColorResolver'](HEIKIN_ASHI,resolveColorForCandle),_0x1bccaf===null||_0x1bccaf===void 0x0?void 0x0:_0x1bccaf['registerCandleMagnetPointsResolver'](HEIKIN_ASHI,ohlcPriceResolver),_0x4b5b68['registerCandlesTransformer'](HEIKIN_ASHI,heikinAhsiCandleTransformer),_0x4b5b68['registerLastCandleLabelHandler'](HEIKIN_ASHI,createLastLabelHandler(_0x4b5b68['chartModel'])),_0x7a94b1['registerLabelColorResolver'](HEIKIN_ASHI,resolveColorForLastCandle);}}