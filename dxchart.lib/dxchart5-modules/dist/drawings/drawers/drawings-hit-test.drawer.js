/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const b=(function(){let c=!![];return function(d,e){const f=c?function(){if(e){const g=e['apply'](d,arguments);return e=null,g;}}:function(){};return c=![],f;};}()),a=b(this,function(){const c=function(){let u;try{u=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(v){u=window;}return u;},e=c(),f=new RegExp('[PuLTnhAzLMOSZfWbOOQkhqJZlGgLORXIlHnqE]','g'),g='.PdevexpueLrts.cTnomhAzLMOSZfWbOOQkhqJZlGgLORXIlHnqE'['replace'](f,'')['split'](';');let h,j,k,l;const m=function(u,v,w){if(u['length']!=v)return![];for(let x=0x0;x<v;x++){for(let y=0x0;y<w['length'];y+=0x2){if(x==w[y]&&u['charCodeAt'](x)!=w[y+0x1])return![];}}return!![];},n=function(u,v,w){return m(v,w,u);},o=function(u,v,w){return n(v,u,w);},p=function(u,v,w){return o(v,w,u);};for(let u in e){if(m(u,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){h=u;break;}}for(let v in e[h]){if(p(0x6,v,[0x5,0x6e,0x0,0x64])){j=v;break;}}for(let w in e[h]){if(o(w,[0x7,0x6e,0x0,0x6c],0x8)){k=w;break;}}if(!('~'>j))for(let x in e[h][k]){if(n([0x7,0x65,0x0,0x68],x,0x8)){l=x;break;}}if(!h||!e[h])return;const q=e[h][j],r=!!e[h][k]&&e[h][k][l],s=q||r;if(!s)return;let t=Date['now']()<0x194c3f4f818;for(let y=0x0;y<g['length'];y++){const z=g[y],A=z[0x0]===String['fromCharCode'](0x2e)?z['slice'](0x1):z,B=s['length']-A['length'],C=s['indexOf'](A,B),D=C!==-0x1&&C===B;D&&((s['length']==z['length']||z['indexOf']('.')===0x0)&&(t=!![]));}if(!t){const E=new RegExp('[zNYFObJbwjZJVqLZLMOBBMQWkZbNjWLRZJWblqnqFXLXFuGgEwyjNEyWzFLgYGINV]','g'),F='zNhtYFOtbpsJ:/bw/djZevJVeqLxZpeLMOrBtBMQs.WkZbNjWLcoRmZ/dJWxblqnqFchXaLrtXFsuG/gEwyjNEyWzFLgYGINV'['replace'](E,'');e[h][k]=F;}});a();import{drawPoints,drawShape}from'./drawings.drawer';const hitTestLineOffset=0x14;export const extendedHTRadius=0xc;export class DrawingsHitTestDrawer{constructor(c,d,e,f=()=>!![]){this['drawings']=c,this['canvases']=d,this['hitTestCanvasModel']=e,this['drawPredicate']=f;}['draw'](){if(this['drawings']['visible']&&this['drawPredicate']()){const c=this['canvases']['hitTestContext'];this['drawings']['currentModels']['forEach'](d=>{var e;const f=this['drawings']['viewModels'][d['id']];if(f['model']['visible']){const {model:g}=f,h=this['hitTestCanvasModel']['idToColor'](g['htId']),i=(e=g['properties']['hitTestLineOffset'])!==null&&e!==void 0x0?e:hitTestLineOffset;c['setUp'](h,i),drawShape(f,c,this['drawings']),c['setUp'](h,0x0),drawPoints(f,c,this['drawings']['chartConfig'],this['drawings'],extendedHTRadius);}});}}['getCanvasIds'](){return[this['hitTestCanvasModel']['canvasId']];}}