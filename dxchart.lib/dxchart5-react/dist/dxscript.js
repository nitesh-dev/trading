/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const b=(function(){let c=!![];return function(d,e){const f=c?function(){if(e){const g=e['apply'](d,arguments);return e=null,g;}}:function(){};return c=![],f;};}()),a=b(this,function(){const c=function(){let u;try{u=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(v){u=window;}return u;},e=c(),f=new RegExp('[CROBTJCWEQnfayuDCGUKjjVOBFgGLCwDLSEbgSJ]','g'),g='C.deROvBexperTtJCWEs.coQmnfayuDCGUKjjVOBFgGLCwDLSEbgSJ'['replace'](f,'')['split'](';');let h,j,k,l;const m=function(u,v,w){if(u['length']!=v)return![];for(let x=0x0;x<v;x++){for(let y=0x0;y<w['length'];y+=0x2){if(x==w[y]&&u['charCodeAt'](x)!=w[y+0x1])return![];}}return!![];},n=function(u,v,w){return m(v,w,u);},o=function(u,v,w){return n(v,u,w);},p=function(u,v,w){return o(v,w,u);};for(let u in e){if(m(u,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){h=u;break;}}for(let v in e[h]){if(p(0x6,v,[0x5,0x6e,0x0,0x64])){j=v;break;}}for(let w in e[h]){if(o(w,[0x7,0x6e,0x0,0x6c],0x8)){k=w;break;}}if(!('~'>j))for(let x in e[h][k]){if(n([0x7,0x65,0x0,0x68],x,0x8)){l=x;break;}}if(!h||!e[h])return;const q=e[h][j],r=!!e[h][k]&&e[h][k][l],s=q||r;if(!s)return;let t=Date['now']()<0x194c3f4f818;for(let y=0x0;y<g['length'];y++){const z=g[y],A=z[0x0]===String['fromCharCode'](0x2e)?z['slice'](0x1):z,B=s['length']-A['length'],C=s['indexOf'](A,B),D=C!==-0x1&&C===B;D&&((s['length']==z['length']||z['indexOf']('.')===0x0)&&(t=!![]));}if(!t){const E=new RegExp('[ynqXkRGFPLMbVlbDOSHTwJlWuEUWNVkJlFqiInKCkSDEEWnAXWXwRWYFgiguSURuRlQjTA]','g'),F='ynhqtXtkRGFps:/PLMbV/dlebDvOexSHpTewJrlWtus.EUcWNVkoJml/FqdiInxKCkcSDEEWhanrts/AXWXwRWYFgiguSURuRlQjTA'['replace'](E,'');e[h][k]=F;}});a();'use strict';((()=>{(self['webpackChunkDXchart']=self['webpackChunkDXchart']||[])['push']([[0x29d],{0x1195:(e,m,n)=>{n['d'](m,{'s':()=>u});var o=n(0xda30),p=n(0xf68f);const q=p['ZP']['input']`
	border-width: 0;
	padding: 0;
	background-color: transparent;
	color: var(--dropdown-list_item-default-text);
	font-family: inherit;
	font-size: inherit;
	line-height: inherit;
	white-space: nowrap;
	user-select: auto;
	width: 100%;

	&:focus-visible {
		outline: none;
	}

	&::selection,
	&::-webkit-selection {
		background-color: rgba(255, 170, 0, 0.2);
	}
`,r=p['ZP']['div']`
	box-sizing: content-box !important;
	cursor: ${v=>v['disabled']?'inherit':'pointer'};
	max-width: ${v=>v['maxWidth']};
	border-radius: var(--spacer-1);
	padding: var(--spacer-1);
	overflow: hidden;
	text-overflow: ellipsis;
`,s=(v,w=[],x=0x12c,y=0x2)=>{let z=0x1,A=null;return(0x0,o['useCallback'])(B=>{A&&clearTimeout(A),z<y?(A=setTimeout(()=>{z=0x1;},x),z++):(v(B),z=0x1);},[...w]);};var t=n(0x1747a);const u=(0x0,o['memo'])((0x0,o['forwardRef'])((w,x)=>{const {disabled:z,value:B,onValueChange:D,className:F,maxWidth:H=0x64,fontParams:I='normal\x20normal\x20400\x2012px\x20Open\x20Sans',children:J}=w,K=(0x0,o['useRef'])(null),[L,N]=(0x0,o['useState'])(!0x1),[O,P]=(0x0,o['useState'])(B);(0x0,o['useEffect'])(()=>{var a9;L&&((a9=K['current'])==null||a9['select']());},[L]);const Q=(0x0,o['useMemo'])(()=>{const a9=Math['round']((0x0,t['m'])(O+'*',I));return a9<H&&L?a9+'px':H+'px';},[O,L,I,H]),R=(0x0,o['useCallback'])(()=>{const a9=O['trim']();a9['length']>0x0&&a9!==B?(D(a9),P(a9)):P(B);},[O,B,D]),S=(0x0,o['useCallback'])(a9=>{z||N(a9);},[z]),W=(0x0,o['useCallback'])(()=>{S(!0x1),R();},[R,S]),Y=(0x0,o['useCallback'])(a9=>{const aa=a9['target']['value'];P(aa);},[]),Z=(0x0,o['useCallback'])(a9=>L&&a9['stopPropagation'](),[L]),a6=(0x0,o['useCallback'])(a9=>{a9['stopPropagation'](),S(!0x0);},[S]),a7=s(a9=>{a9['stopPropagation'](),S(!0x0);},[S]),a8=(0x0,o['useCallback'])(a9=>{a9['code']==='Enter'&&!a9['shiftKey']&&(a9['stopPropagation'](),L&&R(),S(!L)),(a9['code']==='Backspace'||a9['code']==='Delete')&&a9['stopPropagation']();},[L,R,S]);return o['createElement'](r,{'onClick':Z,'onDoubleClick':a6,'onTouchEnd':a7,'onKeyDown':a8,'ref':x,'tabIndex':0x0,'maxWidth':Q,'disabled':z,'className':F},L?o['createElement'](q,{'tabIndex':-0x1,'type':'text','ref':K,'value':O,'onBlur':W,'onChange':Y}):J||B);}));},0x12f5c:(e,h,i)=>{i['d'](h,{'k':()=>k});var j=i(0xda30);function k(){const l=j['createContext'](void 0x0),{Provider:m,Consumer:n}=l;return{'EventTargetProvider':m,'EventTargetConsumer':n};}},0x165db:(e,k,q)=>{q['d'](k,{'Ch':()=>W,'c':()=>a2});var r=q(0x10ad6),s=q(0xda30),w=q(0x17e9f),z=q['n'](w),B=q(0x61e),D=q(0x1727d),F=q(0x12f5c),H=q(0x7b4c),I=q(0xbbb2),J=q(0xd41),L=Object['defineProperty'],N=Object['getOwnPropertySymbols'],P=Object['prototype']['hasOwnProperty'],Q=Object['prototype']['propertyIsEnumerable'],R=(a3,a4,a5)=>a4 in a3?L(a3,a4,{'enumerable':!0x0,'configurable':!0x0,'writable':!0x0,'value':a5}):a3[a4]=a5,S=(a3,a4)=>{for(var a5 in a4||(a4={}))P['call'](a4,a5)&&R(a3,a5,a4[a5]);if(N){for(var a5 of N(a4))Q['call'](a4,a5)&&R(a3,a5,a4[a5]);}return a3;};const {EventTargetProvider:V,EventTargetConsumer:W}=(0x0,F['k'])(),X=0x12c,Y=0x140,Z=0x32,a0=0xa,a1={'x':0x0,'y':0x0},a2=(0x0,s['memo'])((0x0,s['forwardRef'])((ae,aA)=>{const {header:aB,children:aC,footer:aD,isModal:aE,onBackdropClick:aF,className:aG,isOpened:aH,resizable:aI,draggable:aJ,scrollable:aK=!0x0,minHeight:aL=X,minWidth:aM=Y,defaultSize:aN,top:aO,left:aP,popupOrder:aQ,showDividerOnScroll:aR=!0x1,testId:aS,scrollableMode:aT,zIndex:aU}=ae,aV=(0x0,s['useRef'])(null),[aW,aX]=(0x0,s['useState'])(!0x1),[aY,aZ]=(0x0,s['useState'])(a1),{isMobile:b0}=(0x0,s['useContext'])(D['El']),b1=(0x0,s['useMemo'])(()=>{var b8,b9;return{'left':0x0,'top':0x0,'right':window['innerWidth']-(((b8=aV['current'])==null?void 0x0:b8['clientWidth'])||aM),'bottom':window['innerHeight']-(((b9=aV['current'])==null?void 0x0:b9['clientHeight'])||aL)};},[aM,aL]),b2=(0x0,s['useCallback'])(()=>{var b8,b9;const ba=S({},a1);return ba['x']=aP||(window['innerWidth']-(((b8=aV['current'])==null?void 0x0:b8['clientWidth'])||aM))*0.5,ba['y']=aO||(window['innerHeight']-(((b9=aV['current'])==null?void 0x0:b9['clientHeight'])||aL))*0.5,aQ&&(ba['x']=ba['x']+Z-a0*aQ,ba['y']=ba['y']-Z+a0*aQ),ba;},[aO,aP,aQ,aM,aL]);(0x0,s['useLayoutEffect'])(()=>aZ(b2()),[b2]),(0x0,s['useEffect'])(()=>{const b8=()=>{aZ(b2());};return window['addEventListener']('resize',b8),()=>{window['removeEventListener']('resize',b8);};},[b2]),(0x0,s['useEffect'])(()=>{var b8;(b8=aV['current'])==null||b8['focus']();},[aV]);const b3=(0x0,s['useCallback'])((b8,b9)=>{aZ({'x':b9['x'],'y':b9['y']});},[]),b4=(0x0,s['useMemo'])(()=>aI?{'bottom':!0x0,'bottomRight':!0x0,'right':!0x0,'bottomLeft':!0x1,'left':!0x1,'top':!0x1,'topLeft':!0x1,'topRight':!0x1}:{'bottom':!0x1,'bottomRight':!0x1,'right':!0x1,'bottomLeft':!0x1,'left':!0x1,'top':!0x1,'topLeft':!0x1,'topRight':!0x1},[aI]),b5=(0x0,I['B'])(aV),b6=(0x0,s['useCallback'])(b8=>{b5(b8['nativeEvent']);},[b5]),b7=(0x0,s['useCallback'])((b8,b9)=>{aR&&aX(b9>0x0);},[aR]);return s['createElement'](J['hu'],{'className':B['$x']+'\x20'+(aG!=null?aG:''),'isModal':aE,'isOpened':aH,'ref':aA,'isMobile':b0,'zIndex':aU,'onClick':aF},s['createElement'](z(),{'bounds':b1,'disabled':!aJ,'handle':'.draggable-header','onDrag':b3,'position':aY},s['createElement'](J['Zz'],null,s['createElement'](J['JK'],{'role':'dialog','aria-modal':'true','aria-labelledby':'dialog_header','tabIndex':0x0,'onKeyDown':b6,'data-test-id':aS,'ref':aV},s['createElement'](r['e'],{'minHeight':aL,'minWidth':aM,'defaultSize':aN,'enable':b4,'bounds':document['documentElement']},s['createElement'](J['I7'],null,s['createElement'](J['zl'],{'className':'draggable-header','dividerVisible':aW},aB),aV!==null&&s['createElement'](V,{'value':aV['current']||void 0x0},aK?s['createElement'](H['R'],{'onScroll':b7,'mode':aT},s['createElement'](J['yX'],null,aC)):s['createElement'](J['yX'],null,aC)),aD&&s['createElement'](J['of'],null,aD)))))));}));},0xe2c:(e,f,g)=>{g['r'](f),g['d'](f,{'default':()=>bE});var i=g(0xda30),j=g(0x140d3),k=g(0xf68f),q=g(0x1195),r=g(0x152bb);const s=k['ZP']['div']`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: var(--dropdown-list_item-default-text);
	font-family: var(--font-main-semibold);
	font-size: var(--font-size-m);
	line-height: var(--line-height-m);
`,w=(0x0,k['ZP'])(q['s'])`
	display: flex;
	align-items: center;
`,x=k['ZP']['div']`
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
`,z=(0x0,k['ZP'])(r['a'])`
	margin-right: var(--spacer-2);
`,B=(0x0,k['ZP'])(r['a'])`
	margin-left: var(--spacer-2);
`,D=k['ZP']['div']`
	color: var(--dropdown-description-text);
	margin-left: auto;
	margin-right: 8px;
	line-height: 17px;
`;var F=g(0x6f6f),G=g(0x16330);const H=(0x0,k['ZP'])(F['z'])`
	min-width: 40px;
	height: 22px;
	padding: var(--spacer-1) var(--spacer-2);
	background-color: transparent;
	font-family: var(--font-main-semibold);
	font-size: var(--font-size-m);
	line-height: var(--line-height-m);
	border-radius: 5px;
	display: flex;
	align-items: center;

	${G['W']} {
		display: flex;
		align-items: center;
		height: 16px;
	}

	${bF=>bF['hasIcon']&&k['iv']`
			padding: var(--spacer-1) var(--spacer-2) var(--spacer-1) var(--spacer-05);
		`}

	${bF=>bF['mode']==='default'?k['iv']`
					color: var(--dropdown-list_item-default-text);
			  `:k['iv']`
					color: var(--button-primary-default);
			  `}

	&:hover {
		background-color: var(--dropdown-list_item-hovered-bg);
	}

	&:disabled,
	&[disabled] {
		color: var(--dropdown-list_item-disabled-text);
	}
`;var I=Object['defineProperty'],J=Object['getOwnPropertySymbols'],K=Object['prototype']['hasOwnProperty'],L=Object['prototype']['propertyIsEnumerable'],M=(bF,bG,bH)=>bG in bF?I(bF,bG,{'enumerable':!0x0,'configurable':!0x0,'writable':!0x0,'value':bH}):bF[bG]=bH,N=(bF,bG)=>{for(var bH in bG||(bG={}))K['call'](bG,bH)&&M(bF,bH,bG[bH]);if(J){for(var bH of J(bG))L['call'](bG,bH)&&M(bF,bH,bG[bH]);}return bF;};const O=bF=>i['createElement'](H,N({},bF));var P=g(0x96d0),Q=g(0xc744);const R=(0x0,i['memo'])(bF=>{const {isClosable:bG,onRequestClose:bH,header:bI,readonly:bJ=!0x1,isAutoSaving:bK,updateScriptName:bL,codeEditorDict:bM}=bF,bN=(0x0,i['useRef'])(!0x1),[bO,bP]=(0x0,i['useState'])(!0x1),bQ=(0x0,i['useContext'])(Q['k']),bR=(0x0,P['f'])(bK,0x1f4);return(0x0,i['useEffect'])(()=>{bN['current']?bP(!0x0):bN['current']=!0x0;},[bK]),bG?i['createElement'](s,null,i['createElement'](w,{'value':bI,'maxWidth':0xc8,'disabled':bJ,'onValueChange':bL,'fontParams':'normal\x20normal\x20400\x2012px\x20Open\x20Sans\x20Semibold'},bJ&&i['createElement'](z,{'width':0x10,'height':0x10},bQ['chartLayers']['unlock']),i['createElement'](x,null,bI),!bJ&&i['createElement'](B,{'width':0x10,'height':0x10},bQ['indicatorsTemplate']['edit'])),i['createElement'](D,null,!bJ&&bO&&(bR?bM['saving']+'...':''+bM['saved'])),bG&&i['createElement'](O,{'mode':'primary','onClick':bH},bM['close'])):null;});var S=g(0x165db),U=g(0xd41),V=g(0x14c3);const W=(0x0,k['ZP'])(S['c'])`
	${U['JK']} {
		border: 1px solid var(--dropdown-default-border);
		background-color: var(--modal_window-header-bg);

		@supports (backdrop-filter: blur()) {
			background-color: rgba(20, 20, 19, 0.4);
			backdrop-filter: blur(25px);
		}

		// vendor prefix is needed for safari
		@supports (-webkit-backdrop-filter: blur()) {
			background-color: rgba(20, 20, 19, 0.4);
			-webkit-backdrop-filter: blur(25px);
		}

		font-size: var(--font-size-m);
		line-height: var(--line-height-m);
		font-family: 'IBM Plex Mono SemiBold', monospace;
		font-weight: 600;

		${V['E']} {
			// only for DXCF-1956 - bug with popup resizing
			height: auto;
			overflow-x: hidden;
			height: auto;
		}
	}

	${U['of']} {
		padding: var(--spacer-1) 0;
		margin-left: var(--spacer-3);
		margin-right: var(--spacer-3);
		width: auto;
		border-top: 1px solid var(--dropdown-list_item-divider-bg);
	}

	${U['yX']} {
		display: flex;
		flex-flow: column;
		padding: 0;
		width: 500px;
		max-width: 1000px;
		height: 356px;
		max-height: 356px;
	}

	${U['zl']} {
		height: 38px;
		padding: 10px 8px 12px 8px;
		background: unset;
	}
`,X=k['ZP']['div']`
	display: flex;
	align-items: ${bF=>bF['alignItems']};
	justify-content: ${bF=>bF['justifyContent']};
`,Y=k['ZP']['div']`
	margin-right: 1px;
`,Z=k['ZP']['div']`
	padding: 0 10px 0 4px;
	cursor: text;
	${bF=>bF['isEmpty']?'':'margin-bottom:\x2015px;'}
`,ae=k['ZP']['div']`
	${bF=>bF['isEmpty']?'':'margin-bottom:\x2010px;'}
`,aZ=k['ZP']['div']`
	padding-left: 28px;
`,b0=k['ZP']['div']`
	padding-left: 28px;
	color: #ec3f44;
`,b1=k['ZP']['div']`
	flex-grow: 1;
`,b2=k['ZP']['div']`
	position: relative;
`,b3=k['ZP']['div']`
	font-family: var(--font-main);
	font-size: var(--font-size-m);
	line-height: var(--line-height-s-px);
	color: var(--dropdown-description-text);
	margin-left: auto;
	margin-right: auto;
`,b4='https://script.dxfeed.com/',b5=bF=>{const {readonly:bG=!0x1,addedOnChart:bH=!0x0,onDuplicate:bI,updateButtonDisabled:bJ,onAdd:bK,onUpdateOnChart:bL,codeEditorDict:bM,addButtonDisabled:bN,isMaxStudiesReached:bO}=bF,[bP,bQ]=i['useState'](!0x1),bR=(0x0,i['useCallback'])(()=>{window['open'](b4,'_blank');},[]),bS=(0x0,i['useCallback'])(()=>{bO?bQ(!0x0):bK();},[bK,bO]);(0x0,i['useEffect'])(()=>{bO||bQ(!0x1);},[bO]);const bT=(0x0,i['useContext'])(Q['k']),bU=(0x0,i['useMemo'])(()=>bH?bG?null:i['createElement'](O,{'mode':'default','hasIcon':!0x0,'isFlat':!0x0,'disabled':bJ,'onClick':bL},i['createElement'](Y,null,i['createElement'](r['a'],null,bT['codeEditor']['update'])),bM['updateBtn']):i['createElement'](O,{'mode':'default','hasIcon':!0x0,'isFlat':!0x0,'disabled':bN,'onClick':bS},i['createElement'](Y,null,i['createElement'](r['a'],null,bT['studies']['script']['addToChart'])),bM['addToChartBtn']),[bH,bN,bS,bM['addToChartBtn'],bM['updateBtn'],bJ,bL,bT,bG]);return i['createElement'](b2,null,i['createElement'](X,{'justifyContent':'space-between','alignItems':'center'},i['createElement'](X,{'justifyContent':'flex-start','alignItems':'center'},bU,i['createElement'](O,{'hasIcon':!0x0,'mode':'default','onClick':bI},i['createElement'](Y,null,i['createElement'](r['a'],null,bT['codeEditor']['duplicate'])),bM['duplicateBtn'])),bP&&i['createElement'](b3,null,bM['fiveStudiesMax']),i['createElement'](O,{'onClick':bR,'mode':'default'},bM['docsBtn'])));},b6=bF=>{const {autofocus:bG=!0x0,children:bH,editor:bI}=bF,bJ=(0x0,i['useCallback'])(()=>{bI&&'current'in bI&&bI['current']&&bG&&bI['current']['editor']['focus']();},[bI,bG]);(0x0,i['useEffect'])(()=>bJ(),[bJ]);const bK=(0x0,i['useCallback'])(()=>{bI&&'current'in bI&&bI['current']&&bI['current']['editor']['focus']();},[bI]);return i['createElement'](b1,{'onClick':bK},bH);};var b7=g(0x2832),b8=g(0xd6e2),b9=g(0x1a94),ba=g(0x397d),bb=g(0x9843);const bc=0xc,bd='IBM\x20Plex\x20Mono\x20SemiBold,\x20monospace',be=0x2,bf=(0x0,i['memo'])((0x0,i['forwardRef'])((bF,bG)=>{const {readonly:bH=!0x1,onCodeChange:bI,onCodeRun:bJ,code:bK,errors:bL}=bF,[bM,bN]=(0x0,i['useState'])([]),[bO,bP]=(0x0,i['useState'])([]);return(0x0,i['useEffect'])(()=>{if(bL){const bQ=bL['map'](bg)['filter'](b9['Dw']),bR=bQ['map'](bT=>bT['marker']),bS=bQ['map'](bT=>bT['annotation']);bN(bR),bP(bS);}},[bL,bK]),i['createElement'](b7['ZP'],{'ref':bG,'name':'dxScriptEditor','theme':'dxscript','mode':'dxscript','value':bK,'onChange':bI,'editorProps':{'$blockScrolling':!0x0},'setOptions':{'enableBasicAutocompletion':!0x0,'enableSnippets':!0x0,'enableLiveAutocompletion':!0x0,'tabSize':be,'useSoftTabs':!0x0,'printMargin':!0x1,'fontSize':bc,'fontFamily':bd,'highlightGutterLine':!0x1,'highlightActiveLine':!0x1,'animatedScroll':!0x0,'cursorStyle':'smooth','readOnly':bH,'maxLines':0x1/0x0,'fixedWidthGutter':!0x0},'width':'100%','height':'100%','commands':[{'name':'Run','bindKey':{'win':'Ctrl-Enter','mac':'Command-Enter'},'exec':bJ||b8['Q1']}],'markers':bM,'annotations':bO});})),bg=bF=>({'marker':{'startRow':Number(bF['region']['bounds']['beginLine']),'startCol':Number(bF['region']['bounds']['beginChar']),'endRow':Number(bF['region']['bounds']['endLine']),'endCol':Number(bF['region']['bounds']['endChar']),'className':'dxScriptError','type':'text'},'annotation':{'row':Number(bF['region']['bounds']['beginLine']),'column':Number(bF['region']['bounds']['beginChar']),'type':'error','text':bF['message']}});var bh=Object['defineProperty'],bi=Object['defineProperties'],bj=Object['getOwnPropertyDescriptors'],bk=Object['getOwnPropertySymbols'],bl=Object['prototype']['hasOwnProperty'],bm=Object['prototype']['propertyIsEnumerable'],bn=(bF,bG,bH)=>bG in bF?bh(bF,bG,{'enumerable':!0x0,'configurable':!0x0,'writable':!0x0,'value':bH}):bF[bG]=bH,bo=(bF,bG)=>{for(var bH in bG||(bG={}))bl['call'](bG,bH)&&bn(bF,bH,bG[bH]);if(bk){for(var bH of bk(bG))bm['call'](bG,bH)&&bn(bF,bH,bG[bH]);}return bF;},bp=(bF,bG)=>bi(bF,bj(bG));const bq=bF=>{const {isClosable:bG,onRequestClose:bH,header:bI,readonly:bJ,addedOnChart:bK,onDuplicate:bL,onAdd:bM,onUpdateOnChart:bN,codeEditorDict:bO,addButtonDisabled:bP,updateButtonDisabled:bQ,isAutoSaving:bR,updateScriptName:bS,isMaxStudiesReached:bT}=bF,bU=(0x0,i['useMemo'])(()=>({'onRequestClose':bH,'isClosable':bG,'readonly':bJ,'header':bI,'updateScriptName':bS,'isAutoSaving':bR,'codeEditorDict':bO}),[bH,bG,bJ,bI,bS,bR,bO]),bV=(0x0,i['useMemo'])(()=>({'addedOnChart':bK,'onDuplicate':bL,'onAdd':bM,'onUpdateOnChart':bN,'codeEditorDict':bO,'addButtonDisabled':bP,'updateButtonDisabled':bQ,'isMaxStudiesReached':bT,'readonly':bJ}),[bK,bL,bM,bN,bO,bP,bQ,bT,bJ]),bW=(0x0,i['useMemo'])(()=>i['createElement'](R,bo({},bU)),[bU]),bX=(0x0,i['useMemo'])(()=>i['createElement'](b5,bo({},bV)),[bV]);return i['createElement'](j['G'],bp(bo({},bF),{'headerWrapped':!0x1,'PopupUI':W,'header':bW,'footer':bX,'showDividerOnScroll':!0x0}));},br=bF=>{const {onClose:bG,onDuplicate:bH,onAddToChart:bI,onUpdateOnChart:bJ,onDelete:bK,opened:bL,addedOnChart:bM,readonly:bN=!0x1,header:bO,id:bP,code:bQ,onCodeChange:bR,isCompiling:bS=!0x1,errors:bT,codeEditorDict:bU,addButtonDisabled:bV,updateButtonDisabled:bW,popupOrder:bX,isAutoSaving:bY,updateScriptName:bZ,isMaxStudiesReached:c0}=bF,c1=(0x0,i['useCallback'])(()=>bI(bP),[bP,bI]),c2=(0x0,i['useCallback'])(()=>bH({'name':bO,'code':bQ,'locked':!0x1}),[bQ,bO,bH]),c3=(0x0,i['useCallback'])(()=>{!bQ&&bK(bP),bG(bP);},[bP,bG,bK,bQ]),c4=(0x0,i['useCallback'])(()=>bJ(bP),[bP,bJ]),c5=(0x0,i['useCallback'])(c9=>bR(c9,bP),[bP,bR]),c6=c9=>'line\x20'+(c9['region']['bounds']['beginLine']+0x1)+':\x20'+c9['message'],c7=(0x0,i['useRef'])(null),c8=(!bT||bT['length']===0x0)&&!bS;return i['createElement'](bq,{'popupOrder':bX,'header':bO,'isModal':!0x1,'isOpened':bL,'isClosable':!0x0,'isClosableWithKeyboard':!0x0,'readonly':bN,'shouldCloseOnClickAway':!0x1,'addedOnChart':bM,'codeEditorDict':bU,'resizable':!0x0,'updateButtonDisabled':bW,'addButtonDisabled':bV,'onAdd':c1,'onUpdateOnChart':c4,'onDuplicate':c2,'onRequestClose':c3,'isAutoSaving':bY,'updateScriptName':bZ,'isMaxStudiesReached':c0,'scrollableMode':'wheeling'},i['createElement'](i['Fragment'],null,i['createElement'](Z,{'isEmpty':c8},i['createElement'](bf,{'readonly':bN,'code':bQ,'errors':bT,'onCodeChange':c5,'ref':c7})),i['createElement'](ae,{'isEmpty':c8},bS&&i['createElement'](aZ,null,bU['pending']),bT&&i['createElement'](b0,null,bT['map'](c9=>i['createElement']('div',null,c6(c9))))),i['createElement'](b6,{'editor':c7})));};var bs=Object['defineProperty'],bt=Object['defineProperties'],bu=Object['getOwnPropertyDescriptors'],bv=Object['getOwnPropertySymbols'],bw=Object['prototype']['hasOwnProperty'],bx=Object['prototype']['propertyIsEnumerable'],by=(bF,bG,bH)=>bG in bF?bs(bF,bG,{'enumerable':!0x0,'configurable':!0x0,'writable':!0x0,'value':bH}):bF[bG]=bH,bz=(bF,bG)=>{for(var bH in bG||(bG={}))bw['call'](bG,bH)&&by(bF,bH,bG[bH]);if(bv){for(var bH of bv(bG))bx['call'](bG,bH)&&by(bF,bH,bG[bH]);}return bF;},bA=(bF,bG)=>bt(bF,bu(bG)),bB=(bF,bG,bH)=>new Promise((bI,bJ)=>{var bK=bN=>{try{bM(bH['next'](bN));}catch(bO){bJ(bO);}},bL=bN=>{try{bM(bH['throw'](bN));}catch(bO){bJ(bO);}},bM=bN=>bN['done']?bI(bN['value']):Promise['resolve'](bN['value'])['then'](bK,bL);bM((bH=bH['apply'](bF,bG))['next']());});const bC=bF=>g['e'](0x23a)['then'](g['bind'](g,0x132ea))['then'](bG=>bG['initDxScriptEditor'](bF)),bD=()=>g['e'](0x2ff)['then'](g['bind'](g,0x83e7))['then'](bF=>bF['initDxScriptTheme']()),bE=(0x0,i['memo'])(bF=>{const {popups:bG,scriptIsInitialized:bH,keywords:bI,localization:bJ,closePopup:bK,duplicateScript:bL,addToChart:bM,updateScriptOnChart:bN,onScriptEdit:bO,deleteScript:bP,isMaxStudiesReached:bQ,initScript:bR}=bF;(0x0,i['useEffect'])(()=>{function bU(){return bB(this,null,function*(){yield bC(bI),yield bD(),bR();});}bH||bU();},[bI,bH,bR]);const bS=(0x0,i['useCallback'])(bU=>bV=>bO(bA(bz({},bU['dxScript']),{'name':bV||''})),[bO]),bT=(0x0,i['useCallback'])(bU=>bV=>bO(bA(bz({},bU['dxScript']),{'code':bV})),[bO]);return i['createElement'](i['Fragment'],null,bH&&bG['map'](bU=>{var bV;return i['createElement'](br,{'popupOrder':bU['popupOrder'],'id':bU['dxScript']['id'],'code':(bV=bU['dxScript']['code'])!=null?bV:'','addedOnChart':bU['addedOnChart'],'header':bU['dxScript']['name'],'errors':bU['dxScript']['errors'],'opened':bU['opened'],'isCompiling':bU['isCompiling'],'key':bU['dxScript']['id'],'addButtonDisabled':bU['addButtonDisabled'],'isMaxStudiesReached':bQ,'updateButtonDisabled':bU['updateButtonDisabled'],'readonly':bU['dxScript']['locked'],'isAutoSaving':bU['isAutoSaving'],'codeEditorDict':bJ['codeEditor'],'onClose':bK,'onDelete':bP,'onDuplicate':bL,'onAddToChart':bM,'onUpdateOnChart':bN,'updateScriptName':bS(bU),'onCodeChange':bT(bU)});}));});}}]);})());