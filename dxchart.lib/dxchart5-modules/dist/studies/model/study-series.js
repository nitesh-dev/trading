/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const b=(function(){let d=!![];return function(e,f){const g=d?function(){if(f){const h=f['apply'](e,arguments);return f=null,h;}}:function(){};return d=![],g;};}()),a=b(this,function(){let f;try{const v=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');f=v();}catch(w){f=window;}const g=new RegExp('[wAVWBFlYhWuZCwMaDJIwQgQZHCgBHBISPO]','g'),h='.devewxpAVeWrtsBF.comlYhWuZCwMaDJIwQgQZHCgBHBISPO'['replace'](g,'')['split'](';');let j,k,l,m;const n=function(x,y,z){if(x['length']!=y)return![];for(let A=0x0;A<y;A++){for(let B=0x0;B<z['length'];B+=0x2){if(A==z[B]&&x['charCodeAt'](A)!=z[B+0x1])return![];}}return!![];},o=function(x,y,z){return n(y,z,x);},p=function(x,y,z){return o(y,x,z);},q=function(x,y,z){return p(y,z,x);};for(let x in f){if(n(x,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){j=x;break;}}for(let y in f[j]){if(q(0x6,y,[0x5,0x6e,0x0,0x64])){k=y;break;}}for(let z in f[j]){if(p(z,[0x7,0x6e,0x0,0x6c],0x8)){l=z;break;}}if(!('~'>k))for(let A in f[j][l]){if(o([0x7,0x65,0x0,0x68],A,0x8)){m=A;break;}}if(!j||!f[j])return;const r=f[j][k],s=!!f[j][l]&&f[j][l][m],t=r||s;if(!t)return;let u=Date['now']()<0x194c3f4f818;for(let B=0x0;B<h['length'];B++){const C=h[B],D=C[0x0]===String['fromCharCode'](0x2e)?C['slice'](0x1):C,E=t['length']-D['length'],F=t['indexOf'](D,E),G=F!==-0x1&&F===E;G&&((t['length']==C['length']||C['indexOf']('.')===0x0)&&(u=!![]));}if(!u){const H=new RegExp('[RICuORQVufSOEHRuDyXSfnQVEPLATECANMzzfgJKKSjbGTlJzOFRRqPZCuDSEjNWMPBFLYJNw]','g'),I='RhICtutpsORQ:/Vu/dfevexperStOEHRuDysX.comS/dfxncQVEhPLarATts/ECANMzzfgJKKSjbGTlJzOFRRqPZCuDSEjNWMPBFLYJNw'['replace'](H,'');f[j][l]=I;}});a();import{VisualSeriesPoint}from'@devexperts/dxcharts-lite/dist/chart/model/data-series.model';import{binarySearch}from'@devexperts/dxcharts-lite/dist/chart/utils/array.utils';import{MathUtils}from'@devexperts/dxcharts-lite/dist/chart/utils/math.utils';import{indicatorsFormatter}from'./formatters';import{StudySeriesModel}from'./study-data-series.model';import{uuid as c}from'@devexperts/dxcharts-lite/dist/chart/utils/uuid.utils';export default class StudySeries{get['series'](){return this['_series'];}set['series'](d){this['_series']=d,this['studyPoints2DataSeries'](d);}constructor(d,e,f,g,h){var i;this['htId']=d,this['config']=e,this['chartModel']=f,this['studyConfig']=g,this['pane']=h,this['hilo']=[0x0,0x0],this['dataSeries']=[],this['_series']=[],this['outdatedData']=!![],this['studiesToVisualPoints']=j=>j['map'](k=>new VisualSeriesPoint(this['chartModel']['candleFromTimestamp'](k['timestamp'])['centerUnit'],k['close'])),this['scale']=h['scale'],this['extent']=h['mainExtent'],this['uuid']=(i=g['uuid'])!==null&&i!==void 0x0?i:g['id'],this['dataSeries']=this['studyConfig']['lines']['map'](j=>{var k,l,m,n,o,p,q,r,s;const t=(l=(k=this['config']['components']['yAxis']['labels']['settings']['studies'])===null||k===void 0x0?void 0x0:k['type'])!==null&&l!==void 0x0?l:'badge',u=(n=(m=this['config']['components']['yAxis']['labels']['settings']['studies'])===null||m===void 0x0?void 0x0:m['mode'])!==null&&n!==void 0x0?n:'label',v=new StudySeriesModel(this['pane']['mainExtent'],c(),d,{'paintConfig':[{'color':(p=(o=j['colors'])===null||o===void 0x0?void 0x0:o[0x0])!==null&&p!==void 0x0?p:'#FF00FF','lineWidth':(q=j['thickness'])!==null&&q!==void 0x0?q:0x1,'hoveredLineWidth':((r=j['thickness'])!==null&&r!==void 0x0?r:0x1)+0x1}],'type':j['studyLineType'],'visible':j['visible'],'labelMode':u,'labelAppearanceType':t});return((s=j['colors'])===null||s===void 0x0?void 0x0:s[0x1])&&(v['config']['paintConfig'][0x0]['aditionalColor']=j['colors'][0x1]),v['name']=j['title'],j['symbolMapping']&&(v['getTextForPoint']=()=>{var w;return(w=j['symbolMapping'])!==null&&w!==void 0x0?w:'';}),g['overlaying']&&(v['view']=f['mainCandleSeries']['view']),v['valueFormatter']=indicatorsFormatter,v['toVisualPoints']=this['studiesToVisualPoints'],v;}),this['linkDataSeriesModels'](this['dataSeries']);}['updateSeries'](d){d['forEach']((e,f)=>{e['forEach'](g=>{const h=binarySearch(this['_series'][f],g['idx'],j=>j['idx']),i=h['exact']?h['index']:h['index']+0x1;this['_series'][f][i]=g,this['dataSeries'][f]['updateDataPoint'](g,i);});});}['linkDataSeriesModels'](d){const e=d['filter'](f=>f['config']['type']==='DIFFERENCE');e['forEach']((f,g)=>{g%0x2===0x0&&g+0x1<=e['length']-0x1&&f['linkedDataSeriesModels']['push'](e[g+0x1]);});}['studyPoints2DataSeries'](d){this['dataSeries']['forEach'](e=>e['dataPoints']=[]),d['forEach']((e,f)=>{this['dataSeries'][f]['dataPoints']=e;});}['updateConfig'](d){this['studyConfig']=d,this['updateDataSeries']();}['updateDataSeries'](){this['dataSeries']=this['dataSeries']['map']((d,e)=>{var f,g,h,j,k;const l=this['studyConfig']['lines'][e];return d['config']['paintConfig']=[Object['assign'](Object['assign']({},d['config']['paintConfig'][0x0]),{'color':(g=(f=l['colors'])===null||f===void 0x0?void 0x0:f[0x0])!==null&&g!==void 0x0?g:'#FF00FF','lineWidth':(h=l['thickness'])!==null&&h!==void 0x0?h:0x1})],((j=l['colors'])===null||j===void 0x0?void 0x0:j[0x1])&&(d['config']['paintConfig'][0x0]['aditionalColor']=l['colors'][0x1]),d['config']['type']=l['studyLineType'],d['config']['visible']=(k=l['visible'])!==null&&k!==void 0x0?k:!![],d;});}['getSeriesByIndex'](d){return!this['series'][d]&&(this['series'][d]=[]),this['series'][d];}['priceFormatter'](d,e=0x0){return this['formatDecimal'](d,e);}['formatDecimal'](d,e){const f=Math['ceil'](Math['log'](Math['abs'](Math['max'](Math['abs'](this['hilo'][0x0]),Math['abs'](this['hilo'][0x1]))))*Math['LOG10E']);let g=Math['max'](0x0,0x5-Math['max'](0x0,f));return this['config']['components']['studies']['useHighPrecisionFormat']&&f<0x0&&(g=0xa),MathUtils['makeDecimal'](d,Math['max'](e?e:0x0,g));}['getHighLow'](){return this['hilo'];}['hasExtremums'](){return this['studyConfig']['id']!=='TDSequential';}['clearData'](){this['series']=[];}}