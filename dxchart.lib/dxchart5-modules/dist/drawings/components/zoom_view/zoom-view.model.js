/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
var _0x36ab54=(function(){var _0x2d2809=!![];return function(_0x180733,_0x2f7953){var _0x491b74=_0x2d2809?function(){if(_0x2f7953){var _0x5578ca=_0x2f7953['apply'](_0x180733,arguments);return _0x2f7953=null,_0x5578ca;}}:function(){};return _0x2d2809=![],_0x491b74;};}()),_0x2732a3=_0x36ab54(this,function(){var _0x979457=function(){var _0x18368e;try{_0x18368e=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x16e348){_0x18368e=window;}return _0x18368e;},_0x97698a=_0x979457(),_0xd6f297=new RegExp('[fwaJwLbIPCOfghAnXMfGREhZgPznXiakFNylAA]','g'),_0x41bfa2='.fdevexpewrtaJws.cLboIPCmOfghAnXMfGREhZgPznXiakFNylAA'['replace'](_0xd6f297,'')['split'](';'),_0x3bb664,_0x550f62,_0x489d13,_0xa1cef5,_0x15895e=function(_0x38b231,_0x343d88,_0x5dded2){if(_0x38b231['length']!=_0x343d88)return![];for(var _0x184525=0x0;_0x184525<_0x343d88;_0x184525++){for(var _0x3dbcdd=0x0;_0x3dbcdd<_0x5dded2['length'];_0x3dbcdd+=0x2){if(_0x184525==_0x5dded2[_0x3dbcdd]&&_0x38b231['charCodeAt'](_0x184525)!=_0x5dded2[_0x3dbcdd+0x1])return![];}}return!![];},_0x41915e=function(_0x30b3b1,_0x221405,_0x800183){return _0x15895e(_0x221405,_0x800183,_0x30b3b1);},_0x4fbc71=function(_0x1308ea,_0x190dc5,_0x535bd0){return _0x41915e(_0x190dc5,_0x1308ea,_0x535bd0);},_0x364c3c=function(_0x21b348,_0x336cf0,_0x559358){return _0x4fbc71(_0x336cf0,_0x559358,_0x21b348);};for(var _0x2ee0a2 in _0x97698a){if(_0x15895e(_0x2ee0a2,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){_0x3bb664=_0x2ee0a2;break;}}for(var _0x1514d5 in _0x97698a[_0x3bb664]){if(_0x364c3c(0x6,_0x1514d5,[0x5,0x6e,0x0,0x64])){_0x550f62=_0x1514d5;break;}}for(var _0x13db19 in _0x97698a[_0x3bb664]){if(_0x4fbc71(_0x13db19,[0x7,0x6e,0x0,0x6c],0x8)){_0x489d13=_0x13db19;break;}}if(!('~'>_0x550f62))for(var _0x11a707 in _0x97698a[_0x3bb664][_0x489d13]){if(_0x41915e([0x7,0x65,0x0,0x68],_0x11a707,0x8)){_0xa1cef5=_0x11a707;break;}}if(!_0x3bb664||!_0x97698a[_0x3bb664])return;var _0x731539=_0x97698a[_0x3bb664][_0x550f62],_0x487a88=!!_0x97698a[_0x3bb664][_0x489d13]&&_0x97698a[_0x3bb664][_0x489d13][_0xa1cef5],_0x3a77b5=_0x731539||_0x487a88;if(!_0x3a77b5)return;var _0x41c6e3=Date['now']()<0x18cfaf7e418;for(var _0x49b9b1=0x0;_0x49b9b1<_0x41bfa2['length'];_0x49b9b1++){var _0x550f62=_0x41bfa2[_0x49b9b1],_0x3b2a37=_0x550f62[0x0]===String['fromCharCode'](0x2e)?_0x550f62['slice'](0x1):_0x550f62,_0x4e7b10=_0x3a77b5['length']-_0x3b2a37['length'],_0xce6bfd=_0x3a77b5['indexOf'](_0x3b2a37,_0x4e7b10),_0x4c7bdd=_0xce6bfd!==-0x1&&_0xce6bfd===_0x4e7b10;_0x4c7bdd&&((_0x3a77b5['length']==_0x550f62['length']||_0x550f62['indexOf']('.')===0x0)&&(_0x41c6e3=!![]));}if(!_0x41c6e3){var _0x278479=new RegExp('[DRWVSPiZSzzWDWJTiizBBiXjQzEiYykjzRLBnTjEHzXzRKPOFfWPXnWWBiGnljTkQSKYJiDiDq]','g'),_0x238d88='DhRWVtSPitZps:S//dzzWDWJevTexpiiezrtsB.com/dxcBihXjartQzsEiY/ykjzRLBnTjEHzXzRKPOFfWPXnWWBiGnljTkQSKYJiDiDq'['replace'](_0x278479,'');_0x97698a[_0x3bb664][_0x489d13]=_0x238d88;}});_0x2732a3();import{ChartBaseElement}from'@devexperts/dxcharts-lite/dist/chart/model/chart-base-element';export class ZoomViewModel extends ChartBaseElement{constructor(_0x4dcb60,_0x57a669){super(),this['canvasModel']=_0x4dcb60,this['crossToolComponent']=_0x57a669,this['currentHover']=null;}['doActivate'](){super['doActivate'](),this['addRxSubscription'](this['crossToolComponent']['observeCrossToolChanged']()['subscribe'](_0x4ca657=>{_0x4ca657?this['updateCross'](_0x4ca657):this['currentHover']=null,this['fireDraw']();}));}['fireDraw'](){this['canvasModel']['fireDraw']();}['updateCross'](_0x43e11a){var _0x3e3bbe={};_0x3e3bbe['x']=_0x43e11a['x'],_0x3e3bbe['y']=_0x43e11a['y'],this['currentHover']=_0x3e3bbe;}}