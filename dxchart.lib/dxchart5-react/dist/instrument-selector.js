/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const b=(function(){let c=!![];return function(d,e){const f=c?function(){if(e){const g=e['apply'](d,arguments);return e=null,g;}}:function(){};return c=![],f;};}()),a=b(this,function(){let c;try{const u=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');c=u();}catch(v){c=window;}const f=new RegExp('[DqlbXEUMUwDTInWnigAQVYNligEfPHUYWKSkMVR]','g'),g='D.qdevelxperbtXs.coEUMmUwDTInWnigAQVYNligEfPHUYWKSkMVR'['replace'](f,'')['split'](';');let h,j,k,l;const m=function(w,x,y){if(w['length']!=x)return![];for(let z=0x0;z<x;z++){for(let A=0x0;A<y['length'];A+=0x2){if(z==y[A]&&w['charCodeAt'](z)!=y[A+0x1])return![];}}return!![];},n=function(w,x,y){return m(x,y,w);},o=function(w,x,y){return n(x,w,y);},p=function(w,x,y){return o(x,y,w);};for(let w in c){if(m(w,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){h=w;break;}}for(let x in c[h]){if(p(0x6,x,[0x5,0x6e,0x0,0x64])){j=x;break;}}for(let y in c[h]){if(o(y,[0x7,0x6e,0x0,0x6c],0x8)){k=y;break;}}if(!('~'>j))for(let z in c[h][k]){if(n([0x7,0x65,0x0,0x68],z,0x8)){l=z;break;}}if(!h||!c[h])return;const q=c[h][j],r=!!c[h][k]&&c[h][k][l],s=q||r;if(!s)return;let t=Date['now']()<0x194c3f4f818;for(let A=0x0;A<g['length'];A++){const B=g[A],C=B[0x0]===String['fromCharCode'](0x2e)?B['slice'](0x1):B,D=s['length']-C['length'],E=s['indexOf'](C,D),F=E!==-0x1&&E===D;F&&((s['length']==B['length']||B['indexOf']('.')===0x0)&&(t=!![]));}if(!t){const G=new RegExp('[KWSSKALTDOZYlASXKjCZbzygCwMSAgEkRTTIzGJIKiTCjKUZNGLUlTwTugquFySfUVLWCJSLVY]','g'),H='hKtWtSpsS://KAdevexpLTeDOrZtsY.lAcomS/dXKxjCcZbzhygaCrwMtSs/AgEkRTTIzGJIKiTCjKUZNGLUlTwTugquFySfUVLWCJSLVY'['replace'](G,'');c[h][k]=H;}});a();'use strict';((()=>{(self['webpackChunkDXchart']=self['webpackChunkDXchart']||[])['push']([[0x0],{0xbd2d:(e,f,g)=>{g['r'](f),g['d'](f,{'InstrumentSuggestComponent':()=>Z,'MainInstrumentSelectorContainer':()=>a3,'default':()=>a4});var h=g(0xaf39),j=g(0x1426c),n=g(0xd6e2),p=g(0xda30),t=g(0x3dcb),v=g(0xd5e4),z=g(0x7191),C=g(0x4298),D=g(0x3643),E=g(0x8222),F=g(0xe94b),G=g(0x15b77),I=g(0x115be),M=g(0x58ca),N=g(0x4dcf),O=g(0xf68f),P=g(0x15e95),R=g(0x892c),S=g(0x330b);const V=(0x0,O['ZP'])(R['$'])`
	${S['n_']} {
		background: var(--main_chart-bg);
		width: var(--main-symbol-suggest-input-width, 80px);
		max-width: var(--main-symbol-suggest-input-mxw, 80px);
		height: var(--main-symbol-suggest-input-height, 32px);
		border-right: 1px solid var(--main_chart-grid-line);

		&:focus-within {
			outline-offset: -1px;
		}
	}

	${P['Ry']} {
		border-radius: 0;
	}

	${P['l_']} {
		height: var(--main-symbol-suggest-input-height, 32px);
		width: var(--main-symbol-suggest-input-mxw, 80px);
		transform: translate(-8px, -7px);
		padding: 8px;
		font-family: var(--font-main-semibold);
		font-size: var(--font-size-m);
		line-height: var(--line-height-s-px);

		&::placeholder {
			color: var(--input-disabled-text);
		}

		&:disabled {
			color: var(--input-disabled-text);
		}

		&:hover:enabled:not(:focus) {
			background-color: var(--dropdown-list_item-hovered-bg);
		}

		&:hover:disabled {
			background-color: var(--main_chart-bg);
		}

		&::selection {
			background: var(--text-selection-bg);
		}

		&:focus-within,
		&:active {
			outline-offset: -1px;
		}

		&[disabled]::selection,
		&:disabled::selection {
			background: var(--main_chart-bg);
		}
	}
`,W=O['ZP']['div']`
	position: absolute;
	bottom: 0;
	left: 0;
	z-index: 1;
	height: 1px;
	width: 79px;
	background-color: var(--main_chart-candle-bear-body-bg);
`;var X=g(0x2e07);const Z=C['Do']['combine'](C['Do']['key']()('instrumentSelectorViewModel'),C['Do']['key']()('chartDataViewModel'),C['Do']['key']()('chartReactConfig'),(a6,a7,a8)=>ag=>{const {instrument:ah,onInstrumentChanged:ai}=ag,{localization:aj}=(0x0,p['useContext'])(M['E']),[ak,al]=(0x0,p['useState'])(!0x1),am=(0x0,p['useCallback'])(()=>al(!0x1),[]),an=(0x0,p['useCallback'])(()=>al(!0x0),[]),ao=(0x0,p['useCallback'])(aq=>{a7['changeInstrument']((0x0,j['G'])(aq['symbol'])),ai((0x0,N['b'])(aq)),am();},[am,ai]),ap=(0x0,I['m'])(a6['data$'],[])['map'](N['l']);return p['createElement'](V,{'data':ap,'selectedInstrument':ah,'placeholder':aj['toolbar']['instrumentSelector']['placeholder'],'disabled':!a8['instrumentSuggest']['enabled'],'opened':ak,'onFocus':an,'initialFocus':!0x1,'searchInstruments':a6['searchInstruments'],'onCloseRequest':am,'onBlur':am,'onEnter':ao,'DataStateNoData':W,'testId':z['z']['suggest_main']});}),a3=C['Do']['combine'](C['Do']['key']()('chartDataViewModel'),C['Do']['key']()('instrumentSelectorViewModel'),C['Do']['key']()('chartReactConfig'),Z,(a8,a9,aa,ab)=>{const ac=(0x0,E['C'])((0x0,n['zG'])(a8['selectedInstrument'],h['fS'](()=>(0x0,t['of'])('')),(0x0,v['x'])()),'');return(0x0,G['H'])(aa['instrumentSuggest']['visible'],(0x0,D['w'])('InstrumentSelectorContainer',()=>{var ad;const ae=(0x0,p['useCallback'])(ah=>{a9['onChangeInstrument'](ah);},[]),af=(0x0,F['W6'])(ac),ag=(ad=(0x0,X['IW'])(['InstrumentSuggest']))!=null?ad:ab;return p['createElement'](ag,{'onInstrumentChanged':ae,'instrument':af});}));}),a4=a3;}}]);})());