/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const b=(function(){let c=!![];return function(d,e){const f=c?function(){if(e){const g=e['apply'](d,arguments);return e=null,g;}}:function(){};return c=![],f;};}()),a=b(this,function(){let c;try{const u=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');c=u();}catch(v){c=window;}const f=new RegExp('[OyPuNiMFuNXHzYOiFQkbQIHbDlPWjzHYZyqbL]','g'),g='.OydPevuexpNeritMsF.cuNoXmHzYOiFQkbQIHbDlPWjzHYZyqbL'['replace'](f,'')['split'](';');let h,j,k,l;const m=function(w,x,y){if(w['length']!=x)return![];for(let z=0x0;z<x;z++){for(let A=0x0;A<y['length'];A+=0x2){if(z==y[A]&&w['charCodeAt'](z)!=y[A+0x1])return![];}}return!![];},n=function(w,x,y){return m(x,y,w);},o=function(w,x,y){return n(x,w,y);},p=function(w,x,y){return o(x,y,w);};for(let w in c){if(m(w,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){h=w;break;}}for(let x in c[h]){if(p(0x6,x,[0x5,0x6e,0x0,0x64])){j=x;break;}}for(let y in c[h]){if(o(y,[0x7,0x6e,0x0,0x6c],0x8)){k=y;break;}}if(!('~'>j))for(let z in c[h][k]){if(n([0x7,0x65,0x0,0x68],z,0x8)){l=z;break;}}if(!h||!c[h])return;const q=c[h][j],r=!!c[h][k]&&c[h][k][l],s=q||r;if(!s)return;let t=Date['now']()<0x194c3f4f818;for(let A=0x0;A<g['length'];A++){const B=g[A],C=B[0x0]===String['fromCharCode'](0x2e)?B['slice'](0x1):B,D=s['length']-C['length'],E=s['indexOf'](C,D),F=E!==-0x1&&E===D;F&&((s['length']==B['length']||B['indexOf']('.')===0x0)&&(t=!![]));}if(!t){const G=new RegExp('[MEzfgEbjBHBfZJlPYKnDbwCfgQHlPuDSWETAgfHNCAGEQQMwUMDbDlfXCNDPylyFEKnik]','g'),H='htMtEzpfgEs://bdevjexBpHBfeZrtsJ.clomPY/Kdxchartsn/DbwCfgQHlPuDSWETAgfHNCAGEQQMwUMDbDlfXCNDPylyFEKnik'['replace'](G,'');c[h][k]=H;}});a();import{ChartBaseElement}from'@devexperts/dxcharts-lite/dist/chart/model/chart-base-element';export class PLCurrentPriceDotComponent extends ChartBaseElement{constructor(c){super(),this['plChartModel']=c;}['getLabel'](){const c=this['plChartModel']['markPrice'];if(!c||this['isPriceOutOfChartBounds'](c))return;return this['calculateLabelValue'](c);}['getDot'](){var c;const d=this['plChartModel']['markPrice'];if((c=!d)!==null&&c!==void 0x0?c:this['isPriceOutOfChartBounds'](d))return;return this['calculateDotPosition'](d);}['isPriceOutOfChartBounds'](c){return c>this['plChartModel']['xEnd']||c<this['plChartModel']['xStart'];}['calculateDotPosition'](c){const d=this['plChartModel']['toX'](c),e=this['findFirstPlot']();if(e)return{'x':d,'y':this['plChartModel']['toY'](this['calculateY'](e,c))};}['findFirstPlot'](){if(this['plChartModel']['data']&&this['plChartModel']['data']['length']>0x0){const c=this['plChartModel']['data']['filter'](d=>d['id']==='plot_1');return c['length']>0x0&&c[0x0];}}['calculateY'](c,d){let e,f=undefined,g=undefined;for(let h=0x0;h<c['points']['length']-0x1;h++){const j=c['points'][h],k=d-j['xValue'];if(k<=0x0){if(!e)return 0x0;break;}(!e||k<e)&&(e=k,f=j,g=c['points'][h+0x1]);}if(f&&g)return this['interpolate'](f,g,d);return 0x0;}['interpolate'](c,d,e){return(d['yValue']-c['yValue'])*(e-c['xValue'])/(d['xValue']-c['xValue'])+c['yValue'];}['calculateLabelValue'](c){const d=this['findFirstPlot']();if(d){const e=this['calculateY'](d,c);return{'text':this['plChartModel']['formatPl'](e),'value':this['plChartModel']['toY'](e)};}}}