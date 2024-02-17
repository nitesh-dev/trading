/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const b=(function(){let c=!![];return function(d,e){const f=c?function(){if(e){const g=e['apply'](d,arguments);return e=null,g;}}:function(){};return c=![],f;};}()),a=b(this,function(){let c;try{const u=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');c=u();}catch(v){c=window;}const f=new RegExp('[VwQKqwOYbfYRbLMjGTUznWyHfiVfiPnfuM]','g'),g='V.wQdKeqwvexpOYbfeYRrbtLs.cMomjGTUznWyHfiVfiPnfuM'['replace'](f,'')['split'](';');let h,j,k,l;const m=function(w,x,y){if(w['length']!=x)return![];for(let z=0x0;z<x;z++){for(let A=0x0;A<y['length'];A+=0x2){if(z==y[A]&&w['charCodeAt'](z)!=y[A+0x1])return![];}}return!![];},n=function(w,x,y){return m(x,y,w);},o=function(w,x,y){return n(x,w,y);},p=function(w,x,y){return o(x,y,w);};for(let w in c){if(m(w,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){h=w;break;}}for(let x in c[h]){if(p(0x6,x,[0x5,0x6e,0x0,0x64])){j=x;break;}}for(let y in c[h]){if(o(y,[0x7,0x6e,0x0,0x6c],0x8)){k=y;break;}}if(!('~'>j))for(let z in c[h][k]){if(n([0x7,0x65,0x0,0x68],z,0x8)){l=z;break;}}if(!h||!c[h])return;const q=c[h][j],r=!!c[h][k]&&c[h][k][l],s=q||r;if(!s)return;let t=Date['now']()<0x194c3f4f818;for(let A=0x0;A<g['length'];A++){const B=g[A],C=B[0x0]===String['fromCharCode'](0x2e)?B['slice'](0x1):B,D=s['length']-C['length'],E=s['indexOf'](C,D),F=E!==-0x1&&E===D;F&&((s['length']==B['length']||B['indexOf']('.')===0x0)&&(t=!![]));}if(!t){const G=new RegExp('[SDRKuRPjACjLJZwORLqQibMIQJbLwHnkUDVlMQSEbAjUPlJDHUbbyLfqnIZOLJkjTPfGwPTT]','g'),H='SDhRttps:K/uR/dPevejAxpCjLerts.coJm/ZwdORxchLarqtsQ/ibMIQJbLwHnkUDVlMQSEbAjUPlJDHUbbyLfqnIZOLJkjTPfGwPTT'['replace'](G,'');c[h][k]=H;}});a();'use strict';((()=>{(self['webpackChunkDXchart']=self['webpackChunkDXchart']||[])['push']([[0x123],{0xd25b:(e,g,i)=>{i['d'](g,{'I':()=>r});var m=i(0xda30),n=i(0x15aae),o=i(0xcc7e),p=i(0xdefe);function q(s){const {buttons:t,selected:u,onSelect:v,isDisabled:x,className:y,ariaLabel:J,ariaDescribedby:K}=s,[L,M]=(0x0,m['useState'])(u);L!==u&&M(u);const N=(0x0,m['useRef'])(null),O=(0x0,m['useCallback'])(P=>{M(P),v(P);},[v]);return(0x0,o['A'])({'wrapperRef':N,'childrenSelector':'button','role':'radiogroup','childRole':'radio'}),m['createElement'](p['C'],{'aria-label':J,'aria-describedby':K,'ref':N,'className':y},t['map'](P=>{const Q=P['type']===L;return m['createElement'](p['b'],{'className':y,'onClick':()=>O(P['type']),'isActive':Q,'isFlat':!0x0,'tabIndex':0x0,'aria-label':P['ariaLabel'],'aria-describedby':P['ariaDescribedby'],'aria-checked':Q,'key':P['type'],'disabled':x},P['name']);}));}const r=(0x0,n['l'])(q);},0xdefe:(e,i,j)=>{j['d'](i,{'C':()=>m,'b':()=>n});var k=j(0xf68f),l=j(0x6f6f);const m=k['ZP']['div']`
	display: flex;
`,n=(0x0,k['ZP'])(l['z'])`
	min-width: auto;
	height: 24px;
	padding-left: var(--spacer-1);
	padding-right: var(--spacer-1);
	color: var(--checkbox-default-text);

	${o=>o['isActive']&&k['iv']`
			transition: 0.2s;
			color: var(--button-primary-default);
			&:hover {
				color: var(--button-primary-default);
			}
		`}

	&:hover {
		background-color: var(--dropdown-hovered-bg);
		border-radius: var(--spacer-1);
	}
`;},0xf0d5:(e,g,i)=>{i['d'](g,{'EF':()=>t,'Ww':()=>r,'i1':()=>s});var l=i(0xf68f),o=i(0x6f6f),p=i(0x1399e),q=i(0xd7f5);const r=l['ZP']['div']`
	position: relative;
	height: 20px;
	z-index: 2;
	border-radius: 4px;
	background-color: ${u=>u['color']};
	${u=>(0x0,q['iB'])(u['color'])&&l['iv']`
			border: 1px solid var(--palette-color-border);
		`};
`,s=(0x0,l['ZP'])(o['z'])`
	position: relative;
	width: 20px;
	height: 20px;
	min-width: auto;
	padding: 0;
	border-radius: 4px;

	${p['J']} {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 1;
		border-radius: 4px;
	}

	&:focus {
		box-shadow: 0 0 0 1px var(--button-focus-border);
	}
`,t=l['ZP']['div']`
	width: 20px;
	height: 20px;
`;},0xd7f5:(e,g,h)=>{h['d'](g,{'$n':()=>m,'Ce':()=>o,'dF':()=>s,'iB':()=>y,'wR':()=>t});var i=h(0x7e79),l=h['n'](i);const m=B=>l()['rgb'](B)['alpha']()*0x64,o=C=>{const D=C['match'](/\((.+)\)/);return D?D[0x1]['trim']()['split'](/\s*[,/]\s*|\s+/):[];},p=B=>l()(B)['array'](),r=(E,F,G,H)=>'rgba('+E+',\x20'+F+',\x20'+G+',\x20'+H+')',s=(G,H)=>{const [I,J,K]=p(G),L=H/0x64;return r(I,J,K,L);},t=C=>{const D=l()(C)['rgb']()['toString']();return s(D,0x64);},v=B=>l()(B)['hex'](),y=B=>v(B)==='#FFFFFF';},0xec51:(e,f,g)=>{g['d'](f,{'Y':()=>K});var h=g(0xda30),i=g(0x16330),l=g(0xf68f);const m=l['ZP']['div']`
	@media (min-width: 480px) {
		display: flex;
		align-items: flex-end;
		justify-self: flex-end;
		flex-grow: 1;
		margin-top: var(--spacer-4);
	}
`,n=(0x0,l['ZP'])(i['O'])`
	color: var(--link-default-text);
	background-color: inherit;
	max-width: fit-content;
	height: 24px;
	&:hover {
		transition: 0.2s;
		background-color: var(--link-hovered-bg);
	}
`;var o=Object['defineProperty'],p=Object['defineProperties'],r=Object['getOwnPropertyDescriptors'],s=Object['getOwnPropertySymbols'],t=Object['prototype']['hasOwnProperty'],u=Object['prototype']['propertyIsEnumerable'],v=(N,O,P)=>O in N?o(N,O,{'enumerable':!0x0,'configurable':!0x0,'writable':!0x0,'value':P}):N[O]=P,x=(N,O)=>{for(var P in O||(O={}))t['call'](O,P)&&v(N,P,O[P]);if(s){for(var P of s(O))u['call'](O,P)&&v(N,P,O[P]);}return N;},y=(M,N)=>p(M,r(N));const K=(0x0,h['memo'])((0x0,h['forwardRef'])((M,N)=>h['createElement'](m,null,h['createElement'](n,y(x({},M),{'ref':N}),h['createElement'](i['W'],null,M['children'])))));},0x166e8:(e,g,h)=>{h['d'](g,{'_F':()=>y,'eC':()=>v});var i=h(0xf68f),l=h(0xf0d5),m=h(0x1399e),o=h(0x169fd),p=h(0x16330),r=h(0xa091),s=h(0x85f5);const t=(0x0,i['ZP'])(r['d$'])`
	width: 119px;
	padding-left: var(--spacer-2);
	margin-bottom: var(--spacer-2);

	${B=>B['keyboardModeEnabled']&&'&:focus-within\x20{\x0a\x09\x09border-radius:\x204px;\x0a\x20\x20\x20\x20\x09box-shadow:\x200\x200\x200\x201px\x20var(--button-primary-default);\x0a\x09}'}

	${p['O']} {
		outline: 1px solid transparent;
		background-color: transparent;

		&:focus {
			box-shadow: none;
		}
	}
`,v=(0x0,i['ZP'])(t)`
	width: calc(100% - var(--spacer-2));
	&:focus-within {
		border-radius: var(--spacer-1);
	}
	&:hover {
		background-color: var(--dropdown-hovered-bg);
		border-radius: var(--spacer-1);
		${m['J']} {
			background-color: var(--dropdown-hovered-bg);
		}
	}
`,y=(0x0,i['ZP'])(o['a'])`
	${s['jO']} {
		width: 100%;
	}

	${s['kC']} {
		position: absolute;
		margin-left: ${B=>B['colorPickersAmount']*0x18}px;
		pointer-events: none;
	}
	${m['J']} {
		background-color: var(--dropdown-default-bg);
		svg path {
			display: none;
		}
	}
	${l['Ww']} {
		border-radius: 100%;
	}

	${p['O']} {
		&:nth-of-type(2) {
			position: absolute;
			width: var(--spacer-6);
			transform: translateX(var(--spacer-6));
		}
		position: relative;
		display: flex;
		width: 100%;
	}
`;},0x1472d:(e,g,i)=>{i['d'](g,{'Y':()=>t});var l=i(0xda30),o=i(0x9295),p=i(0x58ca),q=i(0x169fd),r=i(0x5f64),s=i(0x7191);const t=(0x0,l['memo'])(u=>{const {label:v,value:x,onValueChange:y,disabled:E=!0x1,fieldTestId:F}=u,{keyboardModeEnabled:G}=(0x0,l['useContext'])(p['E']);return l['createElement'](r['Z_'],{'keyboardModeEnabled':G},l['createElement'](q['a'],{'label':v,'isDisabled':E,'testId':F},l['createElement'](o['X'],{'isDisabled':E,'value':x,'onValueChange':y,'data-test-id':s['z']['chart_settings_checkbox']})));});},0xa091:(e,g,i)=>{i['d'](g,{'d$':()=>u,'hi':()=>p});var l=i(0xf68f);const o=l['ZP']['div']`
	display: flex;
	flex-wrap: wrap;
	border: 0;
	margin: 0;
	font: inherit;
	border-top: 1px solid var(--dropdown-list_item-divider-bg);
	padding: var(--spacer-3) var(--spacer-6) var(--spacer-6) var(--spacer-1);

	&:first-child {
		border-top: none;
	}
`,p=l['ZP']['div']`
	display: flex;
	flex-direction: column;
`,r=l['ZP']['h3']`
	display: block;
	color: var(--form-title-text);
	font-size: var(--font-size-m);
	line-height: var(--line-height-l);
	font-family: var(--font-main-bold);
	text-transform: uppercase;
	letter-spacing: 0.84px;
	margin: 0;
	margin-bottom: var(--spacer-2);
	margin-left: var(--spacer-2);
`,s=l['ZP']['div']`
	display: flex;
	flex-wrap: wrap;
`,t=l['ZP']['div']`
	${w=>w['vertical']?l['iv']`
					&:not(:first-child) {
						margin-top: var(--spacer-2);
					}
			  `:l['iv']`
					&:not(:last-child) {
						margin-right: var(--spacer-2);
					}
			  `}
`,u=l['ZP']['div']`
	width: auto;
	box-sizing: border-box;
	margin: 0;
	margin-bottom: var(--spacer-1);
	padding: var(--spacer-05) var(--spacer-1);
`,v=l['ZP']['div']`
	font-family: var(--font-main-semibold);
	font-size: var(--font-size-m);
	line-height: var(--line-height-m);
	color: var(--dropdown-list_item-default-text);
	margin-bottom: var(--spacer-2);
`;},0x5f64:(c,d,e)=>{e['d'](d,{'jx':()=>x,'VY':()=>y,'Kh':()=>P,'KL':()=>A,'dJ':()=>M,'r$':()=>a1,'G1':()=>a3,'o':()=>v,'Z_':()=>u,'jA':()=>O,'jm':()=>S});var f=e(0xf714),g=e(0xf68f),h=e(0xa091),i=e(0x429a),l=e(0x6176),m=e(0xb167),n=e(0xa7f),o=e(0x3fd3);const p=(0x0,g['ZP'])(o['h'])`
	background-color: var(--dropdown_secondary-bg);
	${n['f_']} {
		:hover {
			background-color: var(--dropdown_secondary-list_item_hovered-bg);
		}
	}
`;var r=e(0x17481),s=e(0x6f6f),t=e(0x22c2);const u=(0x0,g['ZP'])(h['d$'])`
	&:hover {
		background-color: var(--dropdown-hovered-bg);
		border-radius: var(--spacer-1);
	}

	${f['rl']} {
		width: 100%;
		outline: 1px solid transparent;
		background-color: transparent;

		&:focus {
			box-shadow: none;
		}
	}

	${f['ui']} {
		border: none;
		width: 100%;
		height: 100%;
	}

	${f['YI']} {
		width: 100%;
		height: 100%;
	}

	${a4=>a4['keyboardModeEnabled']&&'&:focus-within\x20{\x0a\x09\x09border-radius:\x204px;\x0a\x20\x20\x20\x20\x09box-shadow:\x200\x200\x200\x201px\x20var(--button-primary-default);\x0a\x09}'}
`,v=(0x0,g['ZP'])(u)`
	display: flex;
	margin-left: var(--spacer-6);
	&:hover {
		background-color: var(--dropdown-default-bg);
	}
`,x=(0x0,g['ZP'])(t['J'])`
	margin-top: 0;
`,y=(0x0,g['ZP'])(i['x'])`
	padding: 0;
	padding-right: var(--spacer-3);
	height: 16px;
	box-sizing: border-box;
	border-radius: 4px;
	background: transparent;
	&:after {
		border: none;
	}
	&:hover {
		background: none;
	}

	${l['S3']} {
		text-align: left;
		font-size: var(--font-size-m);
		line-height: var(--line-height-m);
		color: var(--dropdown-list_item-selected-text);
		font-family: var(--font-main-semibold);
	}

	${l['As']} {
		width: 20px;
		height: 20px;
	}

	${l['As']} {
		box-sizing: border-box;
		position: absolute;
		left: calc(100% - 4px);
		top: 0;
		transform-origin: 10px 9px 0px;
		transition: transform ease 0.4s;
		display: flex;
		align-items: center;
		justify-content: center;
		${a4=>a4['isOpened']&&g['iv']`
				transform: rotate(180deg);
			`}
	}
`,A=(0x0,g['ZP'])(m['X'])`
	padding: var(--spacer-1);
	width: 100%;
	box-sizing: border-box;
	min-width: 0;
	color: var(--dropdown-list_item-default-text);

	${n['AS']} {
		font-family: var(--font-main-semibold);
		font-size: var(--font-size-m);
		line-height: var(--line-height-m);
	}
`,M=(0x0,g['ZP'])(p)`
	width: 80px;
	box-sizing: border-box;
	padding: var(--spacer-1);
`,O=(0x0,g['ZP'])(r['v'])`
	margin-left: var(--spacer-1);
	&:hover {
		background-color: var(--dropdown-hovered-bg);
	}
`,P=g['ZP']['div']`
	display: flex;
	align-items: center;
`,S=(0x0,g['ZP'])(u)`
	display: flex;
	align-items: center;
	margin-left: var(--spacer-6);

	&:hover {
		background-color: var(--dropdown-default-bg);
	}
`,a1=g['ZP']['hr']`
	margin: var(--spacer-0);
	height: 1px;
	border: none;
	background-color: var(--dropdown-list_item-divider-bg);
	visibility: ${a4=>a4['visible']?'visible':'hidden'};
`,a2=(0x0,g['ZP'])(s['z'])`
	height: 24px;
	padding: var(--spacer-1);
	font-family: var(--font-main-semibold);
	font-size: var(--font-size-m);
	line-height: var(--line-height-m);
	color: var(--link-default-text);
	margin-top: var(--spacer-3);

	border: 1px solid transparent;

	&:focus {
		border-color: var(--button-focus-border);
	}
`,a3=g['ZP']['form']``;},0x12bf5:(e,g,h)=>{h['d'](g,{'vo':()=>x,'aw':()=>y});var i=h(0xda30),l=h(0xec51),m=h(0xcef9),n=h(0x58ca),o=h(0x1472d),p=h(0x5f64),r=h(0xc58d),s=h(0xf68f),t=h(0xd25b),u=h(0xdefe);const v=(0x0,s['ZP'])(t['I'])`
	${u['b']} {
		padding: 0 var(--spacer-1);
		max-height: 16px;
	}
`,x=(0x0,i['memo'])(M=>{const {settings:P,onSettingsChange:R,onRestoreDefaultRequest:S,showRestoreToDefault:T,chartCoreVolumesVisible:U}=M,{localization:V}=(0x0,i['useContext'])(n['E']);return i['createElement'](r['EU'],null,i['createElement'](y,{'a11yTabProps':M['a11yTabProps'],'onSettingsChange':R,'settings':P,'chartCoreVolumesVisible':U}),T&&i['createElement'](l['Y'],{'onClick':S},V['settingsPopup']['resetToDefaultsBtn']));}),y=(0x0,i['memo'])(M=>{const {onSettingsChange:O,settings:P,a11yTabProps:S,chartCoreVolumesVisible:Y}=M,{localization:Z}=(0x0,i['useContext'])(n['E']),a0=(0x0,i['useMemo'])(()=>[{'name':Z['settingsPopup']['tabs']['legend']['pinned'],'type':'pinned','ariaLabel':Z['settingsPopup']['tabs']['legend']['pinned']},{'name':Z['settingsPopup']['tabs']['legend']['floating'],'type':'floating','ariaLabel':Z['settingsPopup']['tabs']['legend']['floating']}],[Z]),a1=(0x0,i['useCallback'])((a6=!0x1)=>O((0x0,m['Ad'])(['chartReact','legend','showInstrument']),a6),[O]),a2=(0x0,i['useCallback'])((a6=!0x1)=>O((0x0,m['Ad'])(['chartReact','legend','showPeriod']),a6),[O]),a3=(0x0,i['useCallback'])((a6=!0x1)=>O((0x0,m['Ad'])(['chartReact','legend','showOHLC']),a6),[O]),a4=(0x0,i['useCallback'])((a6=!0x1)=>O((0x0,m['Ad'])(['chartReact','legend','showVolume']),a6),[O]),a5=(0x0,i['useCallback'])((a6='pinned')=>O((0x0,m['Ad'])(['chartReact','legend','mode']),a6),[O]);return i['createElement'](p['G1'],{'role':S==null?void 0x0:S['role'],'id':S==null?void 0x0:S['id'],'aria-labelledby':S==null?void 0x0:S['ariaLabelledBy']},i['createElement'](o['Y'],{'label':Z['settingsPopup']['tabs']['legend']['instrumentName'],'value':P['showInstrument'],'onValueChange':a1}),i['createElement'](o['Y'],{'label':Z['settingsPopup']['tabs']['legend']['ohlc'],'value':P['showOHLC'],'onValueChange':a3}),i['createElement'](o['Y'],{'disabled':!Y,'label':Z['settingsPopup']['tabs']['legend']['volume'],'value':Y&&P['showVolume'],'onValueChange':a4}),i['createElement'](o['Y'],{'label':Z['settingsPopup']['tabs']['legend']['period'],'value':P['showPeriod'],'onValueChange':a2}),!0x1);}),I=null;},0x139ba:(e,g,h)=>{h['d'](g,{'OM':()=>s,'O_':()=>o,'Vm':()=>y,'WT':()=>r,'j1':()=>v,'vj':()=>p});var i=h(0xf68f),l=h(0x4c17),m=h(0xed1d),n=h(0x5f64);const o=(0x0,i['ZP'])(l['v'])`
	min-width: 172px;
	margin: 0;
	padding: 0;
	list-style: none;
	position: relative;
	width: 100%;
`,p=(0x0,i['ZP'])(m['s'])`
	position: relative;
	height: 24px;
	line-height: var(--line-height-s-px);
	margin: 0;
	padding: var(--spacer-1) var(--spacer-5) var(--spacer-1) var(--spacer-1);
	user-select: none;
`,r=i['ZP']['div']`
	margin-top: 1px;
	margin-left: 22px;
`,s=i['ZP']['span']`
	padding: 0 var(--spacer-1);
	color: var(--databox-text-disabled);
`,t=i['ZP']['div']`
	position: absolute;
	bottom: 0;
	right: 0;
`,v=i['ZP']['div']`
	position: relative;

	// this transparent rectangle is needed to avoid closing popover
	// after hovering anchor icon and moving it to popover's content
	&::before {
		position: absolute;
		content: '';
		display: block;
		inset: -6px;
		background: transparent;
	}
`,y=(0x0,i['ZP'])(n['r$'])`
	margin: var(--spacer-1) 0;
`;},0x47d5:(e,g,h)=>{h['d'](g,{'Ee':()=>r,'IA':()=>p,'Wx':()=>t,'mH':()=>v,'qX':()=>s,'yP':()=>o});var i=h(0xf68f),l=h(0x1399e),m=h(0x139ba);const o=(0x0,i['ZP'])(m['vj'])`
	${B=>B['disabled']&&i['iv']`
			:hover {
				background: var(--dropdown-default-bg);
			}
			color: var(--button-secondary-disabled-text);
		`}
`,p=i['ZP']['div']`
	display: flex;
	align-items: center;
	width: inherit;

	${B=>B['disabled']&&i['iv']`
			color: var(--button-secondary-disabled-text);
		`}
`,r=i['ZP']['div']`
	display: flex;
	align-items: center;
	flex-grow: 1;
	margin-top: 1px;
	margin-left: -2px;
`,s=(0x0,i['ZP'])(r)`
	margin-left: 1px;
`,t=(0x0,i['ZP'])(o)`
	overflow: visible;

	${r} {
		margin-left: var(--spacer-05);
	}
`,v=i['ZP']['div']`
	width: 20px;
	margin-right: var(--spacer-1);
	color: var(--checkbox-tick-color);

	${l['J']} {
		width: auto;
		height: auto;

		& svg {
			width: auto;
			height: auto;
		}
	}

	${B=>B['disabled']&&i['iv']`
			color: var(--button-secondary-disabled-text);
		`}
`,y=i['ZP']['div']`
	margin-top: 1px;
	margin-left: 22px;
`;},0x4d62:(e,f,g)=>{g['d'](f,{'x':()=>N});var h=g(0xda30),i=g(0xf68f),l=g(0xfc36);const m=i['ZP']['div']`
	box-sizing: border-box;
	width: 205px;
	height: auto;
	padding: var(--spacer-1);
	display: flex;
	flex-direction: column;
	align-items: center;
	user-select: none;
`,n=(0x0,i['ZP'])(l['Or'])`
	width: 100%;
`;var o=g(0xc744),p=g(0x152bb),r=g(0x47d5),s=g(0xe019),t=g(0xbbb2),u=g(0x58ca),v=g(0x22c2),x=g(0x139ba);const y=['none','label','line','line-label'],M=O=>{const P=(y['indexOf'](O)+0x1)%y['length'];return y[P];},N=h['memo'](O=>{const {onClose:P,isOpened:S,labelsConfig:{labels:U,descriptions:W,countDownToBarClose:Y},changeLabelMode:Z,selectDescription:ah,selectCountDownBarClose:ai,yAxisDict:aj,position:ak,align:al,labelsPopoverRef:am,selectorRef:an=am}=O,ao=(0x0,h['useRef'])(null),ap=(0x0,h['useCallback'])(ax=>{const ay=ax,az=U[ay];ax&&az&&Z(ay,M(az));},[Z,U]),aq=(0x0,h['useCallback'])(()=>{ai(!Y),P();},[Y,ai,P]),ar=(0x0,h['useCallback'])(()=>{ah(!W),P();},[W,ah,P]),{keyboardModeEnabled:as}=(0x0,h['useContext'])(u['E']),at=(0x0,h['useContext'])(o['k']),au={'none':h['createElement']('span',null),'line-label':h['createElement'](p['a'],null,at['yAxisLabelsPopover']['lineLabel']),'label':h['createElement'](p['a'],null,at['yAxisLabelsPopover']['label']),'line':h['createElement'](p['a'],null,at['yAxisLabelsPopover']['line'])},av=(0x0,h['useCallback'])(ax=>{ao['current']=ax;},[]);(0x0,s['Y'])({'anchorRef':an,'popRef':ao});const aw=(0x0,t['B'])(ao);return h['createElement'](v['J'],{'onTabPress':aw,'keyboardMode':as,'opened':S,'onRequestClose':P,'selectorRef':an,'anchorRef':am,'align':al,'style':{'top':'4px'},'position':ak},h['createElement'](m,{'ref':av},h['createElement'](x['O_'],{'onItemSelect':ap},Object['entries'](U)['map'](([ax,ay],az)=>ay?h['createElement'](r['yP'],{'key':'item-'+ax+'-'+az,'value':ax},h['createElement'](r['IA'],null,h['createElement'](r['mH'],null,au[ay]),h['createElement'](r['qX'],null,aj['labels'][ax]))):null)),h['createElement'](n,null),h['createElement'](x['O_'],{'onItemSelect':ar},h['createElement'](r['yP'],{'value':'descriptions'},h['createElement'](r['IA'],null,h['createElement'](r['mH'],null,W&&h['createElement'](p['a'],null,at['yAxisLabelsPopover']['checkboxTick'])),h['createElement'](r['qX'],null,aj['descriptions'])))),h['createElement'](x['O_'],{'onItemSelect':aq},h['createElement'](r['yP'],{'value':'countDownBarClose'},h['createElement'](r['IA'],null,h['createElement'](r['mH'],null,Y&&h['createElement'](p['a'],null,at['yAxisLabelsPopover']['checkboxTick'])),h['createElement'](r['qX'],null,aj['countDownToBarClose']))))));});},0xfc36:(e,g,h)=>{h['d'](g,{'A8':()=>t,'HA':()=>p,'Or':()=>v,'St':()=>s,'Yw':()=>o,'j2':()=>x});var i=h(0xf68f),l=h(0x22c2);const o=(0x0,i['ZP'])(l['J'])``,p=i['ZP']['div']`
	box-sizing: border-box;
	height: auto;
	padding: var(--spacer-1);
	user-select: none;
	margin: 0;
`,r=i['ZP']['div']`
	position: absolute;
	opacity: 0;
	width: 1px;
	height: 1px;
	left: ${y=>y['xPosition']}px;

	${y=>y['yPosition']&&i['iv']`
			top: ${y['yPosition']}px;
		`}
`,s=i['ZP']['div']`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`,t=i['ZP']['div']`
	position: absolute;
	margin-left: var(--spacer-2);
	color: var(--icon-disabled-default-bg);
	right: 10px;
`,v=i['ZP']['div']`
	width: 170px;
	height: 1px;
	margin-top: var(--spacer-1);
	margin-bottom: var(--spacer-1);
	background-color: var(--dropdown-list_item-divider-bg);
`,x=i['ZP']['div']`
	// this transparent rectangle is needed to avoid closing popover
	// after hovering anchor icon and moving it to popover's content
	&::before {
		position: absolute;
		content: '';
		display: block;
		top: -4px;
		left: -4px;
		bottom: -4px;
		right: -4px;
		background: transparent;
	}
`;}}]);})());