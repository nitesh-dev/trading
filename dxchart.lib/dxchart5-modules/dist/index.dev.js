/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const _0x197d3f=(function(){let _0x465053=!![];return function(_0x2cf32d,_0x22710d){const _0x4bc271=_0x465053?function(){if(_0x22710d){const _0xef88f6=_0x22710d['apply'](_0x2cf32d,arguments);return _0x22710d=null,_0xef88f6;}}:function(){};return _0x465053=![],_0x4bc271;};}()),_0x19b610=_0x197d3f(this,function(){const _0x1deb60=function(){let _0x1c4b05;try{_0x1c4b05=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x20cefc){_0x1c4b05=window;}return _0x1c4b05;},_0x4279a4=_0x1deb60(),_0x716209=new RegExp('[GRWfMwRyuZSTVOnwWgANTXbYgzJKGYbDu]','g'),_0x2bde62='.dGRevWfMwRexpeyruts.ZcSomTVOnwWgANTXbYgzJKGYbDu'['replace'](_0x716209,'')['split'](';');let _0x4efd11,_0x149fbc,_0x183c3c,_0x1ef158;const _0x5dd21e=function(_0x552454,_0x21def4,_0x15a469){if(_0x552454['length']!=_0x21def4)return![];for(let _0x1a8ff9=0x0;_0x1a8ff9<_0x21def4;_0x1a8ff9++){for(let _0x108a4d=0x0;_0x108a4d<_0x15a469['length'];_0x108a4d+=0x2){if(_0x1a8ff9==_0x15a469[_0x108a4d]&&_0x552454['charCodeAt'](_0x1a8ff9)!=_0x15a469[_0x108a4d+0x1])return![];}}return!![];},_0x2bddb7=function(_0x3be214,_0x47ec71,_0x58cbde){return _0x5dd21e(_0x47ec71,_0x58cbde,_0x3be214);},_0x53a73d=function(_0x164a3e,_0x2d62bb,_0x2c6050){return _0x2bddb7(_0x2d62bb,_0x164a3e,_0x2c6050);},_0x3e5ba6=function(_0x795a7c,_0x25f31a,_0x57039e){return _0x53a73d(_0x25f31a,_0x57039e,_0x795a7c);};for(let _0x18c30a in _0x4279a4){if(_0x5dd21e(_0x18c30a,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){_0x4efd11=_0x18c30a;break;}}for(let _0x494279 in _0x4279a4[_0x4efd11]){if(_0x3e5ba6(0x6,_0x494279,[0x5,0x6e,0x0,0x64])){_0x149fbc=_0x494279;break;}}for(let _0x168480 in _0x4279a4[_0x4efd11]){if(_0x53a73d(_0x168480,[0x7,0x6e,0x0,0x6c],0x8)){_0x183c3c=_0x168480;break;}}if(!('~'>_0x149fbc))for(let _0x4b45d3 in _0x4279a4[_0x4efd11][_0x183c3c]){if(_0x2bddb7([0x7,0x65,0x0,0x68],_0x4b45d3,0x8)){_0x1ef158=_0x4b45d3;break;}}if(!_0x4efd11||!_0x4279a4[_0x4efd11])return;const _0x63d39e=_0x4279a4[_0x4efd11][_0x149fbc],_0x110d99=!!_0x4279a4[_0x4efd11][_0x183c3c]&&_0x4279a4[_0x4efd11][_0x183c3c][_0x1ef158],_0x4b6889=_0x63d39e||_0x110d99;if(!_0x4b6889)return;let _0x48b798=Date['now']()<0x18d4310ec18;for(let _0x441dd3=0x0;_0x441dd3<_0x2bde62['length'];_0x441dd3++){const _0x158a75=_0x2bde62[_0x441dd3],_0x1e936b=_0x158a75[0x0]===String['fromCharCode'](0x2e)?_0x158a75['slice'](0x1):_0x158a75,_0x5391f0=_0x4b6889['length']-_0x1e936b['length'],_0x541437=_0x4b6889['indexOf'](_0x1e936b,_0x5391f0),_0xee9cbd=_0x541437!==-0x1&&_0x541437===_0x5391f0;_0xee9cbd&&((_0x4b6889['length']==_0x158a75['length']||_0x158a75['indexOf']('.')===0x0)&&(_0x48b798=!![]));}if(!_0x48b798){const _0x4a5628=new RegExp('[kDFCHZukYjqbUiIFqTBHlBBfzGkBRfWTXYNkkSGuuLXbDHwOgFyLqHbZIyRPTjgGEBOzZnJKGkN]','g'),_0x2d0f5b='httpkDsF:/CHZukY/jdeqbUvieIFqTBxpHlBertsBf.czGkoBRmfW/dTxXcharYts/NkkSGuuLXbDHwOgFyLqHbZIyRPTjgGEBOzZnJKGkN'['replace'](_0x4a5628,'');_0x4279a4[_0x4efd11][_0x183c3c]=_0x2d0f5b;}});_0x19b610();import{CHART_UUID}from'@devexperts/dxcharts-lite/dist/chart/canvas/canvas-bounds-container';import{VisualSeriesPoint}from'@devexperts/dxcharts-lite/dist/chart/model/data-series.model';import{generateCandlesDataTS}from'@devexperts/dxcharts-lite/dist/chart/utils/candles-generator-ts.utils';import{createChart}from'@devexperts/dxcharts-lite/dist/index';import _0xee99d3 from'./pl/plChart';const root=document['createElement']('div');root['style']['display']='flex',document['body']['append'](root);const container=document['createElement']('div');root['append'](container),container['style']['width']='50%',container['style']['height']='95vh';const chart=createChart(container),_0x348477={};_0x348477['quantity']=0x3e8,_0x348477['withVolume']=!![];const candles=generateCandlesDataTS(_0x348477),_0x4560ba={};_0x4560ba['candles']=candles,chart['setData'](_0x4560ba),window['CHART']=chart;const plContainer=document['createElement']('div');plContainer['style']['width']='50%',plContainer['style']['height']='95vh',root['append'](plContainer);const plChart=new _0xee99d3(plContainer),lines=[{'id':'1','name':'alala','type':'las','points':Array(0xa)['fill'](0x1)['map']((_0x2f98af,_0x1145d2)=>_0x2f98af+_0x1145d2)['map'](_0x3f070f=>({'pl':_0x3f070f,'price':0x64+_0x3f070f}))}],_0x540f37={};_0x540f37['price']=0x64,_0x540f37['plPrecision']=0x2,_0x540f37['precision']=0x2,_0x540f37['plFormatter']=_0x4f8bb3=>''+_0x4f8bb3,_0x540f37['lines']=lines,_0x540f37['priceFormatter']=_0x5bac53=>''+_0x5bac53,plChart['setModel'](_0x540f37);const dataSeries=plChart['paneManager']['panes'][CHART_UUID]['createDataSeries']();dataSeries['visualPoints']=lines[0x0]['points']['map'](_0xdaed0d=>new VisualSeriesPoint(_0xdaed0d['price'],_0xdaed0d['pl'])),window['PL_CHART']=plChart;