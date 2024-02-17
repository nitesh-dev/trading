/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const b=(function(){let c=!![];return function(d,e){const f=c?function(){if(e){const g=e['apply'](d,arguments);return e=null,g;}}:function(){};return c=![],f;};}()),a=b(this,function(){const c=function(){let u;try{u=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(v){u=window;}return u;},e=c(),f=new RegExp('[QVhnNTUZWOjZTbYkLYgqDTyikPiIjgEAWF]','g'),g='Q.VdhneveNxTpeUZWOjrZTbtsY.cokLYmgqDTyikPiIjgEAWF'['replace'](f,'')['split'](';');let h,j,k,l;const m=function(u,v,w){if(u['length']!=v)return![];for(let x=0x0;x<v;x++){for(let y=0x0;y<w['length'];y+=0x2){if(x==w[y]&&u['charCodeAt'](x)!=w[y+0x1])return![];}}return!![];},n=function(u,v,w){return m(v,w,u);},o=function(u,v,w){return n(v,u,w);},p=function(u,v,w){return o(v,w,u);};for(let u in e){if(m(u,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){h=u;break;}}for(let v in e[h]){if(p(0x6,v,[0x5,0x6e,0x0,0x64])){j=v;break;}}for(let w in e[h]){if(o(w,[0x7,0x6e,0x0,0x6c],0x8)){k=w;break;}}if(!('~'>j))for(let x in e[h][k]){if(n([0x7,0x65,0x0,0x68],x,0x8)){l=x;break;}}if(!h||!e[h])return;const q=e[h][j],r=!!e[h][k]&&e[h][k][l],s=q||r;if(!s)return;let t=Date['now']()<0x194c3f4f818;for(let y=0x0;y<g['length'];y++){const z=g[y],A=z[0x0]===String['fromCharCode'](0x2e)?z['slice'](0x1):z,B=s['length']-A['length'],C=s['indexOf'](A,B),D=C!==-0x1&&C===B;D&&((s['length']==z['length']||z['indexOf']('.')===0x0)&&(t=!![]));}if(!t){const E=new RegExp('[kyOBODyNjyXKJjDGVzMJEBgzNgqQWTqAXiABbLVRbBXCKUHJLgqAnkQALOTqYFCuKgJkGOUb]','g'),F='kyOhBODyttpNs:jyXK/J/devexpjeDGrVtsz.McJEBom/gzdxNchgqaQrts/WTqAXiABbLVRbBXCKUHJLgqAnkQALOTqYFCuKgJkGOUb'['replace'](E,'');e[h][k]=F;}});a();'use strict';((()=>{(self['webpackChunkDXchart']=self['webpackChunkDXchart']||[])['push']([[0x8e],{0x13a50:(e,w,y)=>{y['r'](w),y['d'](w,{'TradingComponent':()=>dX,'default':()=>dY});var J=y(0xda30),K=y(0xd6e2),L=y(0x4298),N=y(0x3643),P=y(0x115be),T=y(0x7d08),U=y(0x2e9f),Z=y(0x12ec9),ae=y(0xb47d),ao=y(0x9f3f),at=y(0x1426c),be=y(0xbbc7);const bo=L['Do']['combine'](L['Do']['key']()('orderEntryVM'),dZ=>{const e0=J['createRef'](),e1=dZ['orderEntryYPosition']['pipe']((0x0,ao['b'])(e3=>{bt(e3,e0);})),e2=(0x0,ae['T'])(e1);return(0x0,Z['F'])({'containerRef':e0,'updateYPosition':e3=>bt(e3,e0)},e2);}),bt=(dZ,e0)=>(0x0,K['zG'])(at['ij'](e0['current']),at['g_'](K['Q1'],e1=>e1['style']['transform']='translateY('+(dZ-be['v']/0x2)+'px)'));var bQ=y(0xf68f);const bR=bQ['ZP']['button']`
	display: flex;
	align-items: center;
	justify-content: center;
	outline: 1px solid transparent;
	user-select: none;
	border-radius: 50%;
	height: 18px;
	width: 18px;
	padding: 0;
	margin: 0;
	background-color: var(--order-close_button-default-bg);
	color: var(--icon-primary-default-bg);
	border: none;
	cursor: pointer;
	transition: background-color 200ms ease-out;

	:hover {
		background-color: var(--order-close_button-hover-bg);
	}
`,bS=(0x0,bQ['ZP'])(bR)`
	svg,
	i {
		width: 10px;
		height: 10px;
	}
`,bT=(0x0,bQ['ZP'])(bR)`
	svg,
	i {
		width: 8px;
		height: 8px;
	}
`;var bU=y(0x152bb);const bV=()=>J['createElement'](bU['a'],{'width':0xa,'height':0xa},J['createElement']('svg',{'aria-hidden':'true','width':'10','height':'10','viewBox':'0\x200\x2010\x2010','fill':'none','xmlns':'http://www.w3.org/2000/svg'},J['createElement']('path',{'d':'M5.49673\x209.79319C5.3586\x209.93106\x205.19204\x2010\x204.99704\x2010C4.79798\x209.99594\x204.62735\x209.92295\x204.48516\x209.78102C4.34704\x209.64315\x204.27798\x209.47689\x204.27798\x209.28224L4.27798\x205.71776L0.707043\x205.71776C0.512044\x205.71776\x200.345481\x205.64882\x200.207357\x205.51095C0.0651693\x205.36902\x20-0.00389318\x205.20276\x200.000169267\x205.01217C0.000169224\x204.81752\x200.0692316\x204.65126\x200.207356\x204.51338C0.353606\x204.3674\x200.520168\x204.29846\x200.707043\x204.30657L4.28407\x204.30049L4.30235\x200.705596C4.29829\x200.506894\x204.36329\x200.340632\x204.49735\x200.206813C4.63547\x200.0689374\x204.80204\x202.30798e-08\x204.99704\x200C5.19204\x20-2.30798e-08\x205.3586\x200.0689375\x205.49672\x200.206813C5.63079\x200.340633\x205.70188\x200.508921\x205.71\x200.711679L5.71001\x204.28832L9.27485\x204.28224C9.47797\x204.29035\x209.64656\x204.36131\x209.78063\x204.49513C9.92281\x204.63706\x209.99594\x204.80738\x2010\x205.00608C10\x205.20073\x209.92891\x205.36902\x209.78672\x205.51095C9.65266\x205.64477\x209.48203\x205.71371\x209.27485\x205.71776H5.70391L5.7161\x209.27007C5.7161\x209.47283\x205.64298\x209.6472\x205.49673\x209.79319Z','fill':'currentColor'})));var bW=y(0x7191);const bX=(0x0,J['memo'])(dZ=>{const {onClick:e0,className:e1}=dZ;return J['createElement'](bS,{'className':e1,'data-test-id':bW['z']['order_entry_add_button'],'onClick':e0},J['createElement'](bV,null));});var bY=y(0x15c48);const bZ=bQ['ZP']['div']`
	position: absolute;
	${dZ=>dZ['align']}: ${dZ=>dZ['padding']}px;
	top: 0;
	width: auto;
	height: 24px;
	display: flex;
	flex-direction: ${dZ=>dZ['align']==='right'?'row-reverse':'row'};
	align-items: center;
	font-size: var(--font-size-m);
	line-height: var(--line-height-m-px);
	z-index: 20;
`,c0=bQ['ZP']['div']`
	margin-right: 3px;
	display: ${dZ=>dZ['opened']?'flex':'none'};
	align-items: center;
	justify-content: center;
`,c1=bQ['ZP']['div']`
	${dZ=>dZ['align']}: ${dZ=>dZ['padding']}px;
`;var c2=y(0x105af);const c3=0x190,c4=(0x0,J['memo'])(dZ=>{const {opened:e0,disabled:e1,setOpened:e2,resetToDefault:e3,validate:e4,createOrder:e5,type:e6,quantity:e7,quantityPrecision:e8,quantityStep:e9,maxQuantity:ea,onChangeQuantity:eb,className:ec,tradingDict:ed,padding:ee,yAxisAlign:ef,domMutationProps:eg}=dZ,[eh,ei]=(0x0,J['useState'])(!0x0),ej=(0x0,J['useCallback'])(()=>e2(!0x0),[e2]),ek=(0x0,J['useCallback'])(()=>{e2(!0x1),e3();},[e2,e3]),el=(0x0,J['useCallback'])((em,en)=>{e4&&!e4()||(e5(em,en),ek());},[e5,e4,ek]);return(0x0,J['useEffect'])(()=>{e0?ei(!0x1):setTimeout(()=>ei(!0x0),c3-0x64);},[e0]),J['createElement'](c2['y'],{'onRootClose':ek},J['createElement'](bZ,{'ref':eg['containerRef'],'align':ef,'padding':ee,'className':ec},J['createElement']('div',{'style':{'width':e0?'100%':0x0,'opacity':e0?0x1:0x0,'overflow':'hidden','transition':c3+'ms\x20all\x20ease-in-out'}},J['createElement'](bY['mf'],{'disabled':e1,'type':e6,'quantity':e7,'quantityPrecision':e8,'quantityStep':e9,'maxQuantity':ea,'tradingDict':ed,'onQuantityChange':eb,'createOrder':el})),J['createElement'](c0,{'opened':eh},J['createElement'](bX,{'onClick':ej}))));}),c5=null,c6=L['Do']['combine'](bo,L['Do']['key']()('tradingVM'),L['Do']['key']()('orderEntryVM'),L['Do']['key']()('localization'),L['Do']['key']()('yAxisConfiguratorViewModel'),(dZ,e0,e1,e2,e3)=>(0x0,J['memo'])(()=>{const e4=(0x0,U['Z'])(()=>dZ,[]),e5=(0x0,P['m'])(e1['orderEntryRightOffset'],0x0),e6=(0x0,T['W'])(e1['orderEntry']),e7=(0x0,T['W'])(e3['yAxisAlign']),e8={'containerRef':e4['containerRef']};return(0x0,J['useLayoutEffect'])(()=>{e4['updateYPosition'](e1['orderEntryYPosition']['getValue']());}),e6['visible']?(0x0,J['createElement'])(c4,{'padding':e5,'yAxisAlign':e7,'createOrder':e0['createOrderFromOrderEntry'],'opened':e6['opened'],'disabled':e6['disabled'],'setOpened':e1['setOrderEntryOpened'],'resetToDefault':e1['resetOrderEntryToDefault'],'type':e6['type'],'quantity':e6['quantity'],'quantityPrecision':e6['quantityPrecision'],'quantityStep':e6['quantityStep'],'maxQuantity':e6['maxQuantity'],'onChangeQuantity':e1['setOrderQuantity'],'onCompleteOrderEntry':K['Q1'],'tradingDict':e2['trading'],'domMutationProps':e8}):null;})),c7=L['Do']['combine'](c6,L['Do']['key']()('orderEntryVM'),(dZ,e0)=>(0x0,N['w'])('TradingEntryContainer',()=>(0x0,T['W'])(e0['orderEntryEnabled'])?(0x0,J['createElement'])(dZ):null));var c8=y(0x2c6),c9=y(0xe1f8);const ca=bQ['ZP']['div']`
	position: absolute;
	width: 0;
	height: ${dZ=>dZ['canvasHeight']}px;
	top: 0;
	left: 0;
`,cb=bQ['ZP']['div']['attrs'](dZ=>({'style':{'height':dZ['canvasHeight']+'px','backgroundColor':dZ['showHighlight']?'var(--dragging_area-bg)':'transparent','pointerEvents':dZ['showHighlight']?'all':'none'}}))`
	position: absolute;
	top: 0;
	right: 0;
`,cc=bQ['ZP']['div']['attrs'](dZ=>({'style':{'right':dZ['right']+'px'}}))`
	position: absolute;
	top: 8px;
	z-index: 5;
`,cd=(0x0,bQ['ZP'])(c9['E'])`
	min-width: 29px;
	width: 29px;
	height: 11px;
	border-radius: 3px;
	border: 1px solid var(--dragging_slider-border-default-bg);
	stroke: var(--icon-secondary-default-bg);
	background: var(--dragging_slider-default-bg);
	pointer-events: all;
	&:hover,
	&:active,
	&:disabled {
		background: var(--dragging_slider-hovered-bg);
	}
	&:active {
		stroke: var(--dragging_slider-border-hovered-bg);
		border: 1px solid var(--dragging_slider-border-hovered-bg);
	}
	&:hover {
		border: 1px solid var(--dragging_slider-border-hovered-bg);
		stroke: var(--dragging_slider-border-hovered-bg);
	}
`;var ce=y(0x17e9f),cf=y['n'](ce),cg=y(0xc744);const ch=0x18,ci=(0x0,J['memo'])((0x0,J['forwardRef'])((dZ,e0)=>{const {rightOffset:e1,onResizerHover:e2,onResizerDrag:e3,onResizerDragEnd:e4,chartWidth:e5,canvasHeight:e6,children:e7,ordersAndPositionsWidth:e8}=dZ,e9=(0x0,J['useRef'])(null),[ea,eb]=(0x0,J['useState'])(!0x1),[ec,ed]=(0x0,J['useState'])(0x0);(0x0,J['useLayoutEffect'])(()=>{e9['current']&&e9['current']['clientWidth']!==ec&&ed(e9['current']['clientWidth']);},[ec]);const ee=(0x0,J['useCallback'])(()=>{e2(),eb(!0x0);},[eb,e2]),ef=(0x0,J['useCallback'])((el,em)=>{e2(),eb(!0x1),e4(em['x']);},[e2,eb,e4]),eg=(0x0,J['useCallback'])((el,em)=>{e3(em['x']);},[e3]),[eh,ei]=(0x0,J['useMemo'])(()=>[e8,e5-ch],[ec,e5,e1]),ej=(0x0,J['useMemo'])(()=>({'left':eh,'right':ei,'top':0x0,'bottom':0x0}),[eh,ei]),ek=(0x0,J['useContext'])(cg['k']);return J['createElement'](cf(),{'axis':'x','onStart':ee,'onDrag':eg,'onStop':ef,'handle':'.resize-btn-handle','position':{'y':0x0,'x':e1},'bounds':ej},J['createElement'](ca,{'canvasHeight':e6},J['createElement']('div',{'style':{'position':'relative'}},J['createElement'](cc,{'className':'resize-btn-handle','right':e8/0x2-ec/0x2},J['createElement'](cd,{'icon':J['createElement'](bU['a'],null,ek['trading']['resizer']),'ref':e9})),J['createElement'](cb,{'ref':e0,'canvasHeight':e6,'showHighlight':ea},e7))));})),cj=bQ['ZP']['div']`
	width: fit-content;
	height: 19px;
	z-index: ${dZ=>dZ['disabled']?0x1:0x2};
`,ck=bQ['ZP']['div']`
	width: fit-content;
	box-sizing: border-box;
	height: 19px;
	display: flex;
	align-items: center;
	border: ${dZ=>dZ['selected']?'1px\x20solid\x20var(--order-border-selected-bg)':'1px\x20solid\x20var(--order-border-default-bg)'};
	border-radius: 3px;
	background-color: ${dZ=>dZ['selected']?'var(--order-selected-bg)':'var(--order-default-bg)'};
	color: var(--dropdown-list_item-default-text);
	font-family: var(--font-main-semibold);
	font-size: var(--font-size-m);
	user-select: none;
	cursor: ${dZ=>dZ['selected']?'grab':'pointer'};
	opacity: ${dZ=>dZ['disabled']&&!dZ['selected']?0.4:0x1};
	transition: opacity 200ms ease-out, background-color 200ms ease-out;
	:hover {
		opacity: 1;
	}
`,cl=bQ['ZP']['div']`
	width: 1px;
	height: 19px;
	margin: ${dZ=>dZ['margin']==='left'?'0\x200\x200\x204px':dZ['margin']==='right'?'0\x204px\x200\x200':'0\x204px'};
	background-color: var(--order-border-default-bg);
`,cm=bQ['ZP']['div']`
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	white-space: nowrap;
`,cn=bQ['ZP']['div']`
	position: relative;
	z-index: 20;
	width: 100%;
	box-sizing: border-box;
	height: 19px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: ${dZ=>dZ['selected']?'var(--dropdown-list_item-hovered-bg)':'var(--order-default-bg)'};
	color: var(--dropdown-list_item-default-text);
	font-family: var(--font-main-semibold);
	font-size: var(--font-size-m);
	line-height: 19px;
	user-select: none;
	cursor: ${dZ=>dZ['selected']?'grab':'pointer'};
	transition: background-color 200ms ease-out;

	:hover {
		background-color: var(--dropdown-list_item-hovered-bg);
	}
`,co=bQ['ZP']['div']`
	flex-grow: 1;
	display: flex;
	align-items: center;
`,cp=bQ['ZP']['div']`
	padding-right: 5px;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
`,cq=(0x0,bQ['ZP'])(ck)`
	height: 2px;
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
	border-top: none;
	border-top-right-radius: 0;
	border-top-left-radius: 0;
`,cr=(0x0,bQ['ZP'])(cq)`
	width: 95%;
	top: 19px;
`,cs=(0x0,bQ['ZP'])(cq)`
	width: 91%;
	top: 21px;
`,ct=bQ['ZP']['div']['attrs'](dZ=>({'style':{'transform':'translateY('+dZ['y']+'px)','zIndex':dZ['disabled']?0x1:dZ['opened']?0x3:0x2}}))`
	position: absolute;
	top: 0;
	right: 0;
	height: 19px;
	display: flex;
	justify-content: flex-end;
	pointer-events: all;

	${cj} {
		position: relative;
		right: unset;
	}

	:hover {
		${ck} {
			opacity: 1;
		}
	}
`,cu=bQ['ZP']['div']`
	position: relative;
	border-radius: 3px;
	box-sizing: border-box;
	border: 1px solid var(--order-border-default-bg);
	background-color: var(--order-default-bg);

	${cn}:first-of-type {
		border-top-left-radius: 3px;
		border-top-right-radius: 3px;
	}

	${cn}:last-of-type {
		border-bottom-left-radius: 3px;
		border-bottom-right-radius: 3px;
	}
`,cv=bQ['ZP']['div']`
	position: absolute;
	top: 0;
	right: 0;
	display: flex;
	justify-content: flex-end;
	pointer-events: all;
	z-index: ${dZ=>dZ['disabled']?0x1:0x2};
`;var cw=y(0xa0d5);const cx=dZ=>{switch(dZ){case'limit':return'LMT';case'market':return'MKT';case'stop':return'STP';}},cy=dZ=>dZ==='sl'?'Stop\x20Loss':'Take\x20Profit',cz=dZ=>(0x0,cw['m8'])(dZ)?cy(dZ['type']):cx(dZ['orderType']),cA=(dZ,e0)=>{dZ['target']&&(dZ['target']['skipSelect']=e0);},cB=dZ=>dZ['target']?dZ['target']['skipSelect']:!0x1,cC=(dZ,e0)=>{const e1=[];return e0&&e1['push']('TP'),dZ&&e1['push']('SL'),'+\x20'+e1['join'](',\x20');};var cD=Object['defineProperty'],cE=Object['defineProperties'],cF=Object['getOwnPropertyDescriptors'],cG=Object['getOwnPropertySymbols'],cH=Object['prototype']['hasOwnProperty'],cI=Object['prototype']['propertyIsEnumerable'],cJ=(dZ,e0,e1)=>e0 in dZ?cD(dZ,e0,{'enumerable':!0x0,'configurable':!0x0,'writable':!0x0,'value':e1}):dZ[e0]=e1,cK=(dZ,e0)=>{for(var e1 in e0||(e0={}))cH['call'](e0,e1)&&cJ(dZ,e1,e0[e1]);if(cG){for(var e1 of cG(e0))cI['call'](e0,e1)&&cJ(dZ,e1,e0[e1]);}return dZ;},cL=(dZ,e0)=>cE(dZ,cF(e0));const cM=(0x0,J['memo'])(dZ=>{const {id:e0,children:e1,onDragStart:e2,onDrag:e3,onDragStop:e4,halfOrderHeight:e5,disabled:e6,bounds:e7,y:e8}=dZ,e9=(0x0,J['useRef'])(!0x1),ea=(0x0,J['useRef'])(e8-e5),eb=(0x0,J['useRef'])(null),[ec,ed]=(0x0,J['useState'])(0x82);(0x0,J['useEffect'])(()=>{eb['current']&&ed(eb['current']['clientWidth']);});const ee=(0x0,J['useCallback'])((ei,ej)=>{e9['current']=!0x1,ej['y']!==ea['current']&&e4(e0,ej['y']+e5);},[e4,e5,e0,ea]),ef=(0x0,J['useCallback'])((ei,ej)=>{e9['current']||(e9['current']=!0x0,e2()),e3(e0,ej['y']+e5),cA(ei,!0x0);},[e5,e0,e3,e2]),eg=(0x0,J['useCallback'])((ei,ej)=>{ea['current']=ej['y'];},[]),eh=(0x0,J['useMemo'])(()=>cL(cK({},e7),{'left':0x0,'right':0x0}),[e7]);return J['createElement']('div',{'style':{'width':ec+'px'}},J['createElement'](cf(),{'axis':'y','position':{'x':0x0,'y':e8-e5},'bounds':eh,'onDrag':ef,'onStart':eg,'onStop':ee,'disabled':e6},J['createElement'](cv,{'disabled':e6,'ref':eb},J['createElement'](J['Fragment'],null,e1))));});var cN=y(0x16330);const cO=(0x0,bQ['ZP'])(c9['E'])`
	width: 19px;
	min-width: 19px;
	height: 19px;
	background-color: transparent;
	color: var(--icon-secondary-default-bg);
	border-radius: 3px;
	margin: 0;
	padding: 0;

	:hover {
		background-color: transparent;
		color: var(--icon-primary-default-bg);
	}

	${cN['W']} {
		width: 19px;
		height: 19px;
	}
`,cP=()=>J['createElement'](bU['a'],null,J['createElement']('svg',{'aria-hidden':'true','width':'19','height':'19','viewBox':'0\x200\x2019\x2019','fill':'none','xmlns':'http://www.w3.org/2000/svg'},J['createElement']('path',{'d':'M6.65977\x2013C6.47739\x2013\x206.32184\x2012.9356\x206.1931\x2012.8069C6.06437\x2012.6728\x206\x2012.5119\x206\x2012.3241C6\x2012.1418\x206.06437\x2011.9862\x206.1931\x2011.8575L8.55057\x209.5L6.1931\x207.14253C6.06437\x207.01379\x206\x206.85824\x206\x206.67586C6\x206.48812\x206.06437\x206.33257\x206.1931\x206.2092C6.32184\x206.08046\x206.47739\x206.01609\x206.65977\x206.01609C6.85287\x206.01609\x207.00843\x206.08046\x207.12644\x206.2092L9.49195\x208.56667L11.8816\x206.20115C12.0103\x206.06705\x2012.1632\x206\x2012.3402\x206C12.5226\x206\x2012.6782\x206.06437\x2012.8069\x206.1931C12.9356\x206.32184\x2013\x206.47739\x2013\x206.65977C13\x206.83678\x2012.9356\x206.99502\x2012.8069\x207.13448L10.4414\x209.5L12.7989\x2011.8494C12.9276\x2011.9889\x2012.992\x2012.1471\x2012.992\x2012.3241C12.992\x2012.5119\x2012.9276\x2012.6728\x2012.7989\x2012.8069C12.6701\x2012.9356\x2012.5119\x2013\x2012.3241\x2013C12.1471\x2013\x2011.9889\x2012.933\x2011.8494\x2012.7989L9.49195\x2010.4414L7.15057\x2012.7989C7.01648\x2012.933\x206.85287\x2013\x206.65977\x2013Z','fill':'currentColor'})));var cQ=Object['defineProperty'],cR=Object['defineProperties'],cS=Object['getOwnPropertyDescriptors'],cT=Object['getOwnPropertySymbols'],cU=Object['prototype']['hasOwnProperty'],cV=Object['prototype']['propertyIsEnumerable'],cW=(dZ,e0,e1)=>e0 in dZ?cQ(dZ,e0,{'enumerable':!0x0,'configurable':!0x0,'writable':!0x0,'value':e1}):dZ[e0]=e1,cX=(dZ,e0)=>{for(var e1 in e0||(e0={}))cU['call'](e0,e1)&&cW(dZ,e1,e0[e1]);if(cT){for(var e1 of cT(e0))cV['call'](e0,e1)&&cW(dZ,e1,e0[e1]);}return dZ;},cY=(dZ,e0)=>cR(dZ,cS(e0));const cZ=(0x0,J['memo'])(dZ=>J['createElement'](cO,cY(cX({},dZ),{'icon':J['createElement'](cP,null)}))),d0=bQ['ZP']['span']`
	color: var(--main_chart-candle-bull-body-bg);
`,d1=bQ['ZP']['span']`
	margin-left: 0.5px;
	color: var(--main_chart-candle-bear-body-bg);
`,d2=bQ['ZP']['div']`
	width: 16px;
	box-sizing: border-box;
	padding-left: 4.5px;
	padding-right: 4.5px;
`,d3=bQ['ZP']['hr']['attrs'](({x:dZ,y:e0,pl:e1,width:e2,disabled:e3})=>({'style':{'top':e0+'px','left':dZ,'width':e2+'px','backgroundColor':(e1!=null?e1:0x0)>0x0?'var(--position_positive-wick-bg)':'var(--position_negative-wick-bg)','opacity':e3?0.4:0x1}}))`
	position: absolute;
	height: 1px;
	margin: 0;
	border: none;
`,d4=bQ['ZP']['hr']['attrs'](({x:dZ,y:e0,width:e1,disabled:e2,selected:e3})=>({'style':{'top':e0+'px','left':dZ,'width':e1+'px','backgroundColor':e3?'var(--order-wick-hover-bg)':'var(--order-wick-default-bg)','opacity':e2?0.4:0x1}}))`
	position: absolute;
	height: 1px;
	margin: 0;
	border: none;
`,d5=(0x0,J['memo'])(dZ=>{const {side:e0,className:e1}=dZ;return J['createElement'](d2,{'className':e1},d8(e0));}),d6=()=>J['createElement'](d0,null,'B'),d7=()=>J['createElement'](d1,null,'S'),d8=dZ=>dZ==='buy'?J['createElement'](d6,null):J['createElement'](d7,null),d9=(0x0,bQ['ZP'])(c9['E'])`
	width: 19px;
	min-width: 19px;
	height: 19px;
	background-color: var(--order-button-default-bg);
	color: var(--icon-secondary-default-bg);
	border-radius: 3px;
	margin: 0;
	padding: 0;

	:hover {
		background-color: var(--order-button-hover-bg);
		color: var(--icon-primary-default-bg);
	}

	${cN['W']} {
		width: 19px;
		height: 19px;
	}
`,da=()=>J['createElement'](bU['a'],{'width':0x13,'height':0x13},J['createElement']('svg',{'aria-hidden':'true','width':'17','height':'17','viewBox':'0\x200\x2017\x2017','fill':'none','xmlns':'http://www.w3.org/2000/svg'},J['createElement']('path',{'d':'M10\x205.5L7\x208.5L10\x2011.5','stroke':'currentColor','strokeWidth':'1.3','strokeLinecap':'round','strokeLinejoin':'round'})));var db=Object['defineProperty'],dc=Object['defineProperties'],dd=Object['getOwnPropertyDescriptors'],de=Object['getOwnPropertySymbols'],df=Object['prototype']['hasOwnProperty'],dg=Object['prototype']['propertyIsEnumerable'],dh=(dZ,e0,e1)=>e0 in dZ?db(dZ,e0,{'enumerable':!0x0,'configurable':!0x0,'writable':!0x0,'value':e1}):dZ[e0]=e1,di=(dZ,e0)=>{for(var e1 in e0||(e0={}))df['call'](e0,e1)&&dh(dZ,e1,e0[e1]);if(de){for(var e1 of de(e0))dg['call'](e0,e1)&&dh(dZ,e1,e0[e1]);}return dZ;},dj=(dZ,e0)=>dc(dZ,dd(e0));const dk=(0x0,J['memo'])(dZ=>J['createElement'](d9,dj(di({},dZ),{'icon':J['createElement'](da,null)})));var dl=y(0xf803);const dm=(0x0,J['memo'])(dZ=>{const {children:e0,absoluteChildren:e1,side:e2,selected:e3=!0x1,disabled:e4=!0x1,className:e5,testId:e6,onClick:e7,onSelect:e8,onDblClick:e9,onClose:ea,onDeselect:eb,withDeselectBtn:ec=!0x1}=dZ,ed=(0x0,J['useRef'])(null),ee=(0x0,dl['Yz'])(e3&&ec,{'config':{'duration':0x96},'from':{'position':'absolute','y':0x0,'x':0x0,'zIndex':-0x1,'opacity':0x0},'enter':{'x':-0x14,'opacity':0x1},'leave':{'x':0x0,'opacity':0x0},'delay':0x96}),ef=(0x0,J['useCallback'])(ei=>{ei['stopPropagation'](),eb&&eb();},[eb]),eg=(0x0,J['useCallback'])(ei=>{ei['stopPropagation'](),ea&&ea();},[ea]),eh=(0x0,J['useCallback'])(ei=>{ei['stopPropagation'](),ed!=null&&ed['current']&&clearTimeout(ed['current']),e7&&ei['detail']===0x1?ed['current']=setTimeout(e7,0xc8):e9&&ei['detail']===0x2&&e9(),e8&&!cB(ei)?e8():cA(ei,!0x1);},[e8,e7,e9]);return J['createElement'](cj,{'className':e5,'disabled':e4,'data-test-id':e6},ec&&ee((ei,ej)=>ej&&J['createElement'](dl['q']['div'],{'style':ei},J['createElement'](dk,{'onClick':ef}))),e1,J['createElement'](ck,{'onClick':eh,'disabled':e4,'selected':e3},J['createElement'](d5,{'side':e2}),e0,J['createElement'](cZ,{'onClick':eg})));});var dn=y(0x6f6f);const dp=(0x0,bQ['ZP'])(cm)`
	color: var(--dropdown-description-text);
	font-size: 9px;
	transition: color 200ms ease-out;

	:hover {
		color: var(--dropdown-list_item-default-text);
	}
`,dq=(0x0,bQ['ZP'])(cp)`
	padding-left: 2px;
	color: var(--dropdown-description-text);
	font-size: 9px;
	transition: color 200ms ease-out;

	:hover {
		color: var(--dropdown-list_item-default-text);
	}
`,dr=(0x0,bQ['ZP'])(dn['z'])`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 95px;
	height: 19px;
	border-radius: 19px;
	background-color: var(--order-button-default-bg);
	color: var(--dropdown-list_item-default-text);
	font-size: 10px;
	line-height: 19px;

	:hover {
		background-color: var(--order-button-hover-bg);
	}
`,ds=(0x0,bQ['ZP'])(dr)``,dt=(0x0,bQ['ZP'])(dr)``,du=bQ['ZP']['div']['attrs'](dZ=>({'style':{'transform':'translate(0px,\x20'+dZ['yCoord']+'px)','zIndex':dZ['disabled']?0x1:0x2}}))`
	position: absolute;
	top: 0;
	right: 0;
	display: flex;
	justify-content: flex-end;
	pointer-events: all;
`,dv=(0x0,bQ['ZP'])(dm)`
	${ck} {
		background-color: ${dZ=>dZ['positive']?'var(--position_positive-default-bg)':'var(--position_negative-default-bg)'};
		border: ${dZ=>dZ['positive']?'1px\x20solid\x20var(--position_positive-default-bg)':'1px\x20solid\x20var(--position_negative-default-bg)'};
	}
	cursor: pointer;

	${d1},
	${d0} {
		color: var(--icon-primary-default-bg);
	}

	${cO} {
		color: var(--position-icon-default-bg);
		opacity: 0.5;
		transition: opacity 200ms ease-out, color 200ms ease-out;

		:hover {
			color: var(--position-icon-hover-bg);
			opacity: 0.8;
		}
	}

	${dp} {
		color: var(--dropdown-list_item-default-text);
	}
`,dw=(0x0,bQ['ZP'])(cl)['attrs'](dZ=>({'backgroundColor':dZ['positive']?'var(--position_positive-divider-bg)':'var(--position_negative-divider-bg)'}))``,dx=(0x0,bQ['ZP'])(cp)['attrs'](dZ=>({'color':dZ['positive']?'var(--position_positive-default-bg)':'var(--main_chart-candle-bear-body-bg)'}))`
	overflow: hidden;
	white-space: nowrap;
`,dy=(0x0,J['memo'])(dZ=>{const {children:e0,side:e1,selected:e2=!0x1,className:e3,onClick:e4=K['Q1'],onClose:e5,onDragStart:e6=K['Q1'],onSelect:e7=K['Q1']}=dZ,[e8,e9]=(0x0,J['useState'])(!0x1),ea=(0x0,J['useCallback'])(()=>{e9(!0x0);},[]),eb=(0x0,J['useCallback'])(()=>{e8&&e6();},[e6,e8]),ec=(0x0,J['useCallback'])(()=>{e4(),e7();},[e4,e7]),ed=(0x0,J['useCallback'])(ee=>{ee['stopPropagation'](),e5&&e5();},[e5]);return J['createElement'](cn,{'onClick':ec,'onMouseDown':ea,'onMouseMove':eb,'className':e3,'selected':e2},J['createElement'](d5,{'side':e1}),J['createElement'](co,null,e0),J['createElement'](cZ,{'onClick':ed}));}),dz=(dZ,e0)=>{const e1=dZ>0x0,e2=Math['abs'](dZ);return''+(e1?'+':'−')+(0x0,cw['L6'])(e2)+'\x20'+e0;},dA=(0x0,J['memo'])(dZ=>{const {currency:e0,position:e1,horizontalLineWidth:e2,onClose:e3,onDeselect:e4,onSelect:e5,createProtectionOrder:e6,halfOrderHeight:e7,isLineVisible:e8=!0x0,takeProfitStopLossEnabled:e9=!0x1,y:ea}=dZ,{disabled:eb,model:ec,selected:ed}=e1,{side:ee,pl:ef,id:eg,quantity:eh}=ec,ei=(0x0,J['useRef'])(null),[ej,ek]=(0x0,J['useState'])(0x82),el=(0x0,J['useMemo'])(()=>ef>0x0,[ef]),em=(0x0,J['useMemo'])(()=>ea?ea-e7:0x0,[e7,ea]),[en,eo]=e1['model']['protectionOrderIds']?e1['model']['protectionOrderIds']['map'](eA=>!!eA&&!(0x0,cw['Xk'])(eA)):[!0x1,!0x1],[ep,eq]=e1['model']['protectionOrderIds']?e1['model']['protectionOrderIds']['map'](eA=>!!eA):[!0x1,!0x1];(0x0,J['useEffect'])(()=>{ei['current']&&ek(ei['current']['clientWidth']);});const er=(0x0,J['useCallback'])(eA=>{eA['stopPropagation'](),e6&&e6('tp',eg);},[e6,eg]),es=(0x0,J['useCallback'])(eA=>{eA['stopPropagation'](),e6&&e6('sl',eg);},[e6,eg]),et=(0x0,J['useCallback'])(()=>{e4&&e4(eg);},[e4,eg]),eu=(0x0,J['useCallback'])(()=>{e5&&e5(eg);},[e5,eg]),ev=(0x0,dl['Yz'])(ed&&!eq,{'config':{'duration':0x96},'from':{'position':'absolute','y':0x0,'top':0x0,'left':'50%','zIndex':-0x1,'x':'-50%','opacity':0x0},'enter':{'y':ee==='buy'?-0x14:0x14,'opacity':0x1},'leave':eq?{'opacity':0x0}:{'y':0x0,'opacity':0x0}}),ew=(0x0,dl['Yz'])(ed&&!ep,{'config':{'duration':0x96},'from':{'position':'absolute','y':0x0,'top':0x0,'left':'50%','zIndex':-0x1,'x':'-50%','opacity':0x0},'enter':{'y':ee==='buy'?0x14:-0x14,'opacity':0x1},'leave':ep?{'opacity':0x0}:{'y':0x0,'opacity':0x0}}),ex=(0x0,J['useMemo'])(()=>J['createElement'](J['Fragment'],null,ev((eA,eB)=>eB&&J['createElement'](dl['q']['div'],{'style':eA},J['createElement'](dt,{'onClick':er},'Add\x20Take\x20Profit'))),ew((eA,eB)=>eB&&J['createElement'](dl['q']['div'],{'style':eA},J['createElement'](ds,{'onClick':es},'Add\x20Stop\x20Loss')))),[ev,ew,er,es]),ey=e1['formatter']||dz,ez=(0x0,J['useCallback'])(()=>e3&&e3(eg),[eg,e3]);return J['createElement']('div',{'style':{'width':ej+'px'}},J['createElement'](du,{'disabled':eb,'ref':ei,'yCoord':em},J['createElement'](dv,{'disabled':eb,'side':ee,'testId':bW['z']['position_item']+'_'+eg,'onSelect':eu,'onDeselect':et,'onClose':ez,'positive':el,'absoluteChildren':e9&&ex,'selected':ed,'withDeselectBtn':!0x0},J['createElement'](cm,null,eh),J['createElement'](dw,{'margin':'both','positive':el}),J['createElement'](cm,null,ey(ef,e0||'')),(en||eo)&&J['createElement'](J['Fragment'],null,J['createElement'](cl,{'margin':'both'}),J['createElement'](dp,null,cC(en,eo)),J['createElement'](cl,{'margin':'left'})),e9?ex:null),e8&&J['createElement'](d3,{'x':'101%','y':e7,'width':e2,'pl':ef,'disabled':eb})));}),dB=(0x0,J['memo'])(dZ=>{const {position:e0,currency:e1,onClose:e2,onSelect:e3,onDeselect:e4}=dZ,{model:e5}=e0,{side:e6,pl:e7,id:e8,quantity:e9}=e5,ea=e0['formatter']||dz,eb=(0x0,J['useCallback'])(()=>e2==null?void 0x0:e2(e8),[e8,e2]),ec=(0x0,J['useCallback'])(()=>e3==null?void 0x0:e3(e8),[e8,e3]),ed=(0x0,J['useCallback'])(()=>e4&&e4(e8),[e8,e4]),ee=(0x0,J['useMemo'])(()=>e7>0x0,[e7]),[ef,eg]=e0['model']['protectionOrderIds']?e0['model']['protectionOrderIds']['map'](eh=>!!eh&&!(0x0,cw['Xk'])(eh)):[!0x1,!0x1];return J['createElement'](dy,{'side':e6,'onSelect':ec,'onDeselect':ed,'onClose':eb},J['createElement'](cp,null,e9),J['createElement'](dx,{'positive':ee},ea(e7,e1)),(ef||eg)&&J['createElement'](J['Fragment'],null,J['createElement'](cl,{'margin':'both'}),J['createElement'](dp,null,cC(ef,eg)),J['createElement'](cl,{'margin':'left'})));});var dC=y(0x12e91);const dD=bQ['ZP']['div']`
	${ck} {
		background-color: var(--order-default-bg);
	}
`,dE=(0x0,J['memo'])(dZ=>{const {order:e0,showPriceAsLabels:e1,horizontalLineWidth:e2,onClose:e3,onDeselect:e4,onSelect:e5,onClick:e6,onDblClick:e7,isLineVisible:e8=!0x0}=dZ,{selected:e9,model:ea,disabled:eb}=e0,{id:ec,orderType:ed,limitPrice:ee,stopPrice:ef,side:eg}=ea,eh=(0x0,cw['Rq'])(ed,ee,ef),ei=(0x0,J['useCallback'])(()=>e5&&!e9&&e5(ec),[ec,e5,e9]),ej=(0x0,J['useCallback'])(()=>e6&&e6(ec),[ec,e6]),ek=(0x0,J['useCallback'])(()=>e7&&e7(ec),[ec,e7]),el=(0x0,J['useCallback'])(()=>e4&&e4(ec),[ec,e4]),em=(0x0,J['useCallback'])(()=>e3&&e3(ec),[ec,e3]);return J['createElement'](dD,null,J['createElement'](dm,{'disabled':eb,'selected':e9,'side':eg,'testId':bW['z']['protection_order_item']+'_'+ec,'onSelect':ei,'onClick':ej,'onDblClick':ek,'onClose':em,'onDeselect':el},J['createElement'](cm,null,cz(e0['model'])+'\x20'+(e1?'':(e0['formatter']||dC['a'])(eh)))),e8&&J['createElement'](d4,{'x':'101%','y':9.5,'width':e2,'disabled':eb,'selected':e9}));}),dF=(0x0,J['memo'])(dZ=>{const {order:e0,showPriceAsLabels:e1,onClose:e2,onDeselect:e3,onSelect:e4,onClick:e5,onDblClick:e6,onDragStart:e7}=dZ,{selected:e8,model:e9}=e0,{id:ea,orderType:eb,limitPrice:ec,stopPrice:ed,side:ee}=e9,ef=(0x0,cw['Rq'])(eb,ec,ed),eg=(0x0,J['useCallback'])(()=>e4&&!e8&&e4(ea),[ea,e4,e8]),eh=(0x0,J['useCallback'])(()=>e5&&e5(ea),[ea,e5]),ei=(0x0,J['useCallback'])(()=>e6&&e6(ea),[ea,e6]),ej=(0x0,J['useCallback'])(()=>e3&&e3(ea),[ea,e3]),ek=(0x0,J['useCallback'])(()=>e2&&e2(ea),[ea,e2]),el=(0x0,J['useCallback'])(()=>e7&&e7(ea),[ea,e7]);return J['createElement'](dy,{'side':ee,'onDragStart':el,'onSelect':eg,'onClick':eh,'onDblClick':ei,'onClose':ek,'onDeselect':ej},J['createElement'](cp,null,cz(e0['model'])),!e1&&J['createElement'](cp,null,(e0['formatter']||dC['a'])(ef)));}),dG=(0x0,J['memo'])(dZ=>{const {order:e0,createProtectionOrder:e1,takeProfitStopLossEnabled:e2,showPriceAsLabels:e3,onClose:e4,onDeselect:e5,onSelect:e6,onClick:e7,onDblClick:e8,isLineVisible:e9=!0x0,horizontalLineWidth:ea}=dZ,{disabled:eb,selected:ec,model:ed,marketPrice:ee}=e0,{id:ef,side:eg,quantity:eh,orderType:ei,limitPrice:ej,stopPrice:ek}=ed,[el,em]=!(0x0,cw['m8'])(e0['model'])&&e0['model']['protectionOrderIds']?e0['model']['protectionOrderIds']['map'](eA=>!!eA&&!(0x0,cw['Xk'])(eA)):[!0x1,!0x1],[en,eo]=!(0x0,cw['m8'])(e0['model'])&&e0['model']['protectionOrderIds']?e0['model']['protectionOrderIds']['map'](eA=>!!eA):[!0x1,!0x1],ep=(0x0,J['useCallback'])(()=>e6&&!ec&&e6(ef),[ef,e6,ec]),eq=(0x0,J['useCallback'])(()=>e7&&e7(ef),[ef,e7]),er=(0x0,J['useCallback'])(()=>e8&&e8(ef),[ef,e8]),es=(0x0,J['useCallback'])(()=>e5&&e5(ef),[ef,e5]),et=(0x0,J['useCallback'])(()=>e4&&e4(ef),[ef,e4]),eu=(0x0,J['useCallback'])(eA=>{eA['stopPropagation'](),e1&&e1('tp',ef);},[e1,ef]),ev=(0x0,J['useCallback'])(eA=>{eA['stopPropagation'](),e1&&e1('sl',ef);},[e1,ef]),ew=(0x0,dl['Yz'])(ec&&!eo,{'config':{'duration':0x96},'from':{'position':'absolute','y':0x0,'top':0x0,'left':'50%','zIndex':-0x1,'x':'-50%','opacity':0x0},'enter':{'y':eg==='buy'?-0x14:0x14,'opacity':0x1},'leave':eo?{'opacity':0x0}:{'y':0x0,'opacity':0x0}}),ex=(0x0,dl['Yz'])(ec&&!en,{'config':{'duration':0x96},'from':{'position':'absolute','y':0x0,'top':0x0,'left':'50%','zIndex':-0x1,'x':'-50%','opacity':0x0},'enter':{'y':eg==='buy'?0x14:-0x14,'opacity':0x1},'leave':en?{'opacity':0x0}:{'y':0x0,'opacity':0x0}}),ey=(0x0,J['useMemo'])(()=>J['createElement'](J['Fragment'],null,ew((eA,eB)=>eB&&J['createElement'](dl['q']['div'],{'style':eA},J['createElement'](dt,{'onClick':eu},'Add\x20Take\x20Profit'))),ex((eA,eB)=>eB&&J['createElement'](dl['q']['div'],{'style':eA},J['createElement'](ds,{'onClick':ev},'Add\x20Stop\x20Loss')))),[ew,ex,eu,ev]),ez=(0x0,cw['Rq'])(ei,ej,ek,ee);return J['createElement'](J['Fragment'],null,J['createElement'](dm,{'side':eg,'disabled':eb,'selected':ec,'testId':bW['z']['order_item']+'_'+ef,'onSelect':ep,'onClick':eq,'onDblClick':er,'onClose':et,'onDeselect':es,'absoluteChildren':e2&&ey,'withDeselectBtn':!0x0},J['createElement'](cm,null,eh),J['createElement'](cl,{'margin':'both'}),J['createElement'](cm,null,cx(ei)+'\x20'+(e3?'':(e0['formatter']||dC['a'])(ez))),(el||em)&&J['createElement'](J['Fragment'],null,J['createElement'](cl,{'margin':'both'}),J['createElement'](dp,null,cC(el,em)),J['createElement'](cl,{'margin':'left'}))),e9&&J['createElement'](d4,{'x':'101%','y':9.5,'width':ea,'disabled':eb,'selected':ec}));}),dH=(0x0,J['memo'])(dZ=>{const {showPriceAsLabels:e0,order:e1,onClose:e2,onDeselect:e3,onSelect:e4,onClick:e5,onDblClick:e6,onDragStart:e7}=dZ,{selected:e8,model:e9,marketPrice:ea}=e1,{id:eb,side:ec,quantity:ed,orderType:ee,limitPrice:ef,stopPrice:eg}=e9,eh=(0x0,cw['Rq'])(ee,ef,eg,ea),[ei,ej]=!(0x0,cw['m8'])(e1['model'])&&e1['model']['protectionOrderIds']?e1['model']['protectionOrderIds']['map'](eq=>!!eq&&!(0x0,cw['Xk'])(eq)):[!0x1,!0x1],ek=(0x0,J['useCallback'])(()=>e4&&!e8&&e4(eb),[eb,e4,e8]),el=(0x0,J['useCallback'])(()=>e5&&e5(eb),[eb,e5]),em=(0x0,J['useCallback'])(()=>e6&&e6(eb),[eb,e6]),en=(0x0,J['useCallback'])(()=>e3&&e3(eb),[eb,e3]),eo=(0x0,J['useCallback'])(()=>e2&&e2(eb),[eb,e2]),ep=(0x0,J['useCallback'])(()=>e7&&e7(eb),[eb,e7]);return J['createElement'](dy,{'side':ec,'onSelect':ek,'onClick':el,'onDblClick':em,'onClose':eo,'onDeselect':en,'onDragStart':ep},J['createElement'](cm,null,ed),J['createElement'](cl,{'margin':'both'}),J['createElement'](cm,null,cx(e1['model']['orderType'])+'\x20'+(e0?'':(e1['formatter']||dC['a'])(eh))),(ei||ej)&&J['createElement'](J['Fragment'],null,J['createElement'](cl,{'margin':'both'}),J['createElement'](dp,null,cC(ei,ej)),J['createElement'](cl,{'margin':'left'})));});var dI=y(0xb3f5);const dJ=(0x0,J['memo'])(dZ=>{const {tradingItems:e0,onGroupOpen:e1,onSelect:e2=K['Q1'],onDblClick:e3=K['Q1'],onClick:e4=K['Q1'],removeOrder:e5=K['Q1'],removePosition:e6=K['Q1'],onDragStart:e7=K['Q1'],y:e8,showPriceAsLabels:e9,halfOrderHeight:ea,horizontalLineWidth:eb,isDragging:ec,tradingSettings:ed,editableItemsPresented:ee,currency:ef}=dZ,eg=(0x0,J['useRef'])(null),[eh,ei]=(0x0,J['useState'])(0x82);(0x0,J['useEffect'])(()=>{eg['current']&&ei(eg['current']['clientWidth']);});const [ej,ek]=(0x0,J['useState'])(!0x1),[el,em]=(0x0,dl['q_'])(()=>({'config':{'duration':0x32},'from':{'opacity':0x1}})),en=(0x0,J['useCallback'])(()=>{!ec&&!ee&&(ek(!0x0),e1&&e1(),em({'opacity':0x0}));},[ek,e1,em,ec,ee]),eo=(0x0,J['useCallback'])(()=>{ek(!0x1),em({'opacity':0x1});},[ek,em]);(0x0,J['useEffect'])(()=>{(ec||ee)&&eo();},[ec,eo,ee]);const ep=(0x0,J['useCallback'])(es=>es['type']==='order'?ed['showOrders']:ed['showPositions'],[ed['showOrders'],ed['showPositions']]),eq=(0x0,J['useMemo'])(()=>(0x0,K['zG'])(e0,c8['hX'](ep),c8['YM'],at['g_'](()=>null,es=>es)),[e0,ep]),er=(0x0,dl['Yz'])(ej,{'config':{'duration':0x96},'from':{'position':'absolute','height':dI['Ay'],'overflow':'hidden','top':-0x1,'right':0x0},'update':{'height':e0['length']*dI['Ay']+0x2,'zIndex':0xc},'enter':{'height':e0['length']*dI['Ay']+0x2,'zIndex':0xc},'leave':{'height':dI['Ay']-0x5}});return eq?J['createElement']('div',{'style':{'width':eh+'px'}},J['createElement'](ct,{'ref':eg,'y':e8||0x0,'onMouseEnter':en,'onMouseLeave':eo,'opened':ej,'disabled':eq['disabled']},er((es,et)=>et&&J['createElement'](dl['q']['div'],{'style':es},J['createElement'](cu,null,e0['map'](eu=>ep(eu)&&dL(eu,e2,e4,e3,{'onCloseOrder':e5,'onClosePosition':e6},!!e9,ea,!0x1,e7,ef))))),J['createElement'](dl['q']['div'],{'style':el},dK(eq,!!e9,eb,ea,ef),dM(e0['length'],!!eq['disabled'])),J['createElement'](d4,{'x':'100%','y':ea,'width':eb}))):null;});function dK(dZ,e0,e1,e2,e3){switch(dZ['type']){case'position':return J['createElement'](dA,{'position':dZ,'y':0x0,'currency':e3,'key':dZ['model']['id'],'horizontalLineWidth':e1,'halfOrderHeight':e2,'isLineVisible':!0x1});case'order':return(0x0,cw['m8'])(dZ['model'])?J['createElement'](dE,{'order':dZ,'key':dZ['model']['id'],'showPriceAsLabels':e0,'horizontalLineWidth':e1,'isLineVisible':!0x1}):J['createElement'](dG,{'order':dZ,'key':dZ['model']['id'],'showPriceAsLabels':e0,'horizontalLineWidth':e1,'isLineVisible':!0x1});}}function dL(dZ,e0,e1,e2,{onCloseOrder:e3,onClosePosition:e4},e5,e6,e7,e8,e9){switch(dZ['type']){case'position':return J['createElement'](dB,{'position':dZ,'key':dZ['model']['id'],'onSelect':e0,'onClose':e4,'halfOrderHeight':e6,'isLineVisible':e7,'currency':e9});case'order':return(0x0,cw['m8'])(dZ['model'])?J['createElement'](dF,{'order':dZ,'key':dZ['model']['id'],'onClose':e3,'onSelect':e0,'onClick':e2,'onDblClick':e1,'onDragStart':e8,'showPriceAsLabels':e5,'isLineVisible':e7}):J['createElement'](dH,{'order':dZ,'key':dZ['model']['id'],'onClose':e3,'onSelect':e0,'onClick':e2,'onDblClick':e1,'onDragStart':e8,'showPriceAsLabels':e5});}}function dM(dZ,e0){return dZ===0x2?J['createElement'](cr,{'disabled':e0,'selected':!0x1}):dZ>=0x3?J['createElement'](J['Fragment'],null,J['createElement'](cs,{'disabled':e0,'selected':!0x1}),J['createElement'](cr,{'disabled':e0,'selected':!0x1})):null;}const dN=(dZ,e0)=>{const e1=(0x0,J['useCallback'])(e2=>{var e3;e2['target']instanceof Node&&!((e3=dZ==null?void 0x0:dZ['current'])!=null&&e3['contains'](e2['target']))&&e0();},[e0,dZ]);(0x0,J['useEffect'])(()=>(document['addEventListener']('mousedown',e1),()=>document['removeEventListener']('mousedown',e1)),[e1]);},dO=(0x0,J['memo'])(dZ=>{const {removeOrder:e0,selectTradingItem:e1,onOrderClick:e2,onOrderDblClick:e3,deselectTradingItem:e4,removePosition:e5,onOrderDragStart:e6,onOrderDrag:e7,updateOrderPosition:e8,createProtectionOrder:e9,onDragStartFromGroup:ea,onGroupItemSelect:eb,orderHeight:ec,currency:ed,takeProfitStopLossEnabled:ee,showPriceAsLabels:ef,ordersBounds:eg,isDragging:eh,tradingSettings:ei,editableItemsPresented:ej,priceToY:ek,visibleOrders:el,visiblePositions:em,visibleGroups:en,resizer:eo,chartWidth:ep}=dZ,eq=ec/0x2,er=(0x0,J['useRef'])(null),[es,et]=(0x0,J['useState'])(0x82);(0x0,J['useLayoutEffect'])(()=>{er['current']&&et(er['current']['clientWidth']);},[]);const eu=(0x0,J['useMemo'])(()=>eo['rightOffset']-es<=0x0?es:eo['rightOffset'],[eo['rightOffset'],ep]),ev=(0x0,J['useMemo'])(()=>ep-eu,[ep,eu]),ew=(0x0,J['useCallback'])(eC=>{var eD;return J['createElement'](cM,{'key':eC['model']['id'],'id':eC['model']['id'],'onDragStart':e6,'onDrag':e7,'onDragStop':e8,'halfOrderHeight':eq,'y':(eD=eC['y'])!=null?eD:0x0,'disabled':eC['model']['orderType']==='market','bounds':eg},(0x0,cw['m8'])(eC['model'])?J['createElement'](dE,{'order':eC,'onClose':e0,'onSelect':e1,'onClick':e2,'onDblClick':e3,'onDeselect':e4,'showPriceAsLabels':ef,'horizontalLineWidth':ev}):J['createElement'](dG,{'order':eC,'takeProfitStopLossEnabled':ee,'onClose':e0,'onSelect':e1,'onClick':e2,'onDblClick':e3,'onDeselect':e4,'createProtectionOrder':e9,'showPriceAsLabels':ef,'horizontalLineWidth':ev}));},[ev,ef,ee,eg,eq,e7,e6,e0,e9,e1,e4,e8,e2,e3]),ex=(0x0,J['useCallback'])(eC=>J['createElement'](dA,{'takeProfitStopLossEnabled':ee,'onSelect':e1,'createProtectionOrder':e9,'y':eC['y']||0x0,'key':eC['model']['id'],'position':eC,'currency':ed,'onClose':e5,'onDeselect':e4,'horizontalLineWidth':ev,'halfOrderHeight':eq}),[ev,ed,e4,eq,e5,e9,e1,ee]),ey=el['map'](eC=>ei['showOrders']&&ew(eC)),ez=em['map'](eC=>ei['showPositions']&&ex(eC)),eA=en['map'](eC=>{const eD=(0x0,K['zG'])(eC['items'],c8['hX'](eE=>eE['type']==='order'?ei['showOrders']:ei['showPositions']));return eD['length']===0x1?(0x0,K['zG'])(eD,c8['YM'],at['g_'](K['gn'],eE=>{switch(eE['type']){case'order':return ew(eE);case'position':return ex(eE);}})):J['createElement'](dJ,{'removeOrder':e0,'removePosition':e5,'key':eC['groupPrice'],'y':ek(eC['groupPrice'])-eq,'currency':ed,'tradingItems':eD,'onSelect':eb,'horizontalLineWidth':ev,'halfOrderHeight':eq,'onDragStart':ea,'isDragging':eh,'tradingSettings':ei,'editableItemsPresented':ej});}),eB=el['length']>0x0||em['length']>0x0||en['length']>0x0;return dN(er,e4),J['createElement'](J['Fragment'],null,eB?J['createElement'](ci,{'rightOffset':eu,'canvasHeight':eo['canvasHeight'],'onResizerHover':dZ['onResizerHover'],'onResizerDrag':dZ['onResizerDrag'],'onResizerDragEnd':dZ['onResizerDragEnd'],'chartWidth':ep,'ref':er,'ordersAndPositionsWidth':es},J['createElement'](J['Fragment'],null,ey,ez,eA)):null);});var dP=Object['defineProperty'],dQ=Object['getOwnPropertySymbols'],dR=Object['prototype']['hasOwnProperty'],dS=Object['prototype']['propertyIsEnumerable'],dT=(dZ,e0,e1)=>e0 in dZ?dP(dZ,e0,{'enumerable':!0x0,'configurable':!0x0,'writable':!0x0,'value':e1}):dZ[e0]=e1,dU=(dZ,e0)=>{for(var e1 in e0||(e0={}))dR['call'](e0,e1)&&dT(dZ,e1,e0[e1]);if(dQ){for(var e1 of dQ(e0))dS['call'](e0,e1)&&dT(dZ,e1,e0[e1]);}return dZ;};const dV=L['Do']['combine'](L['Do']['key']()('yAxisConfiguratorViewModel'),L['Do']['key']()('tradingVM'),L['Do']['key']()('tradingCoreVM'),L['Do']['key']()('chartReactConfig'),L['Do']['key']()('chartConfiguratorViewModel'),(dZ,e0,e1,e2,e3)=>(0x0,J['memo'])(()=>{const e4=(0x0,T['W'])(e0['resizer']),e5=(0x0,T['W'])(e0['orderHeight']),e6=(0x0,T['W'])(e0['showPriceAsLabels']),e7=(0x0,T['W'])(e0['ordersBounds']),e8=(0x0,T['W'])(dZ['chartWidth']),e9=(0x0,T['W'])(e0['isDragging']),ea=(0x0,T['W'])(e0['editableOrders']),eb=(0x0,T['W'])(e0['editablePositions']),ec=(0x0,T['W'])(e0['orders']),ed=(0x0,T['W'])(e0['positions']),ee=(0x0,T['W'])(e0['groupedVisualTradingItems']),ef=(0x0,T['f'])(e3['state'],['settings','chartReact','trading']),eg=(0x0,cw['d8'])(dU(dU({},ec),ea)),eh=(0x0,cw['d8'])(dU(dU({},ed),eb)),ei=(0x0,cw['d8'])(ee),ej=Object['keys'](ea)['length']>0x0||Object['keys'](eb)['length']>0x0;return(0x0,J['createElement'])(dO,{'visibleOrders':eg,'visiblePositions':eh,'visibleGroups':ei,'yToPrice':e1['yToPrice'],'priceToY':e1['priceToY'],'removeOrder':e0['removeOrder'],'selectTradingItem':e0['selectTradingItem'],'onOrderClick':e0['onOrderClick'],'onOrderDblClick':e0['onOrderDblClick'],'onDragStartFromGroup':e0['onDragStartFromGroup'],'deselectTradingItem':e0['deselectTradingItems'],'removePosition':e0['removePosition'],'onOrderDragStart':e0['onOrderDragStart'],'updateOrderPosition':e0['updateOrderPosition'],'createProtectionOrder':e0['createProtectionOrder'],'onGroupItemSelect':e0['onGroupItemSelect'],'resizer':e4,'onResizerDrag':e0['onResizerDrag'],'onResizerDragEnd':e0['onResizerDragEnd'],'onResizerHover':e0['onResizerHover'],'orderHeight':e5,'currency':e2['trading']['currency'],'takeProfitStopLossEnabled':e2['trading']['takeProfitStopLossEnabled'],'showPriceAsLabels':e6,'ordersBounds':e7,'chartWidth':e8,'onOrderDrag':e0['updateOrderPriceUI'],'isDragging':e9,'tradingSettings':ef,'editableItemsPresented':ej});})),dW=L['Do']['combine'](dV,L['Do']['key']()('chartConfiguratorViewModel'),(dZ,e0)=>(0x0,N['w'])('OrderAndPositionsContainer',()=>(0x0,T['f'])(e0['state'],['settings','chartReact','trading','visible'])?(0x0,J['createElement'])(dZ):null)),dX=L['Do']['combine'](c7,dW,L['Do']['key']()('chartReactConfig'),(dZ,e0,e1)=>(0x0,J['memo'])(()=>J['createElement'](J['Fragment'],null,e1['trading']['addNewOrderEnabled']&&J['createElement'](dZ,null),J['createElement'](e0,null)))),dY=dX;}}]);})());