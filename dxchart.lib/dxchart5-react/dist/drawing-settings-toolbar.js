/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const b=(function(){let c=!![];return function(d,e){const f=c?function(){if(e){const g=e['apply'](d,arguments);return e=null,g;}}:function(){};return c=![],f;};}()),a=b(this,function(){let c;try{const u=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');c=u();}catch(v){c=window;}const f=new RegExp('[uDIVKzOPFAOAjYgnRKYbjLwnMaGfffYkEfT]','g'),g='.udDIevVKzexOpertsP.coFAmOAjYgnRKYbjLwnMaGfffYkEfT'['replace'](f,'')['split'](';');let h,j,k,l;const m=function(w,x,y){if(w['length']!=x)return![];for(let z=0x0;z<x;z++){for(let A=0x0;A<y['length'];A+=0x2){if(z==y[A]&&w['charCodeAt'](z)!=y[A+0x1])return![];}}return!![];},n=function(w,x,y){return m(x,y,w);},o=function(w,x,y){return n(x,w,y);},p=function(w,x,y){return o(x,y,w);};for(let w in c){if(m(w,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){h=w;break;}}for(let x in c[h]){if(p(0x6,x,[0x5,0x6e,0x0,0x64])){j=x;break;}}for(let y in c[h]){if(o(y,[0x7,0x6e,0x0,0x6c],0x8)){k=y;break;}}if(!('~'>j))for(let z in c[h][k]){if(n([0x7,0x65,0x0,0x68],z,0x8)){l=z;break;}}if(!h||!c[h])return;const q=c[h][j],r=!!c[h][k]&&c[h][k][l],s=q||r;if(!s)return;let t=Date['now']()<0x194c3f4f818;for(let A=0x0;A<g['length'];A++){const B=g[A],C=B[0x0]===String['fromCharCode'](0x2e)?B['slice'](0x1):B,D=s['length']-C['length'],E=s['indexOf'](C,D),F=E!==-0x1&&E===D;F&&((s['length']==B['length']||B['indexOf']('.')===0x0)&&(t=!![]));}if(!t){const G=new RegExp('[XMTZMATJlnjIGquKGbMSPKzJkQOnGIRzkbzfiRCVTGkgBPyGZJCJHMbMDnjgJkWUzCLHYKij]','g'),H='htXMTZtMpsAT:J//delnvexjIpeGqurKtsGbM.SPKczJokQmO/nGIRzkdxbzcfiharRtCVsT/GkgBPyGZJCJHMbMDnjgJkWUzCLHYKij'['replace'](G,'');c[h][k]=H;}});a();'use strict';((()=>{(self['webpackChunkDXchart']=self['webpackChunkDXchart']||[])['push']([[0xa3],{0x12f5c:(e,g,h)=>{h['d'](g,{'k':()=>j});var i=h(0xda30);function j(){const k=i['createContext'](void 0x0),{Provider:l,Consumer:m}=k;return{'EventTargetProvider':l,'EventTargetConsumer':m};}},0x165db:(e,g,D)=>{D['d'](g,{'Ch':()=>V,'c':()=>a1});var E=D(0x10ad6),F=D(0xda30),G=D(0x17e9f),H=D['n'](G),I=D(0x61e),J=D(0x1727d),K=D(0x12f5c),L=D(0x7b4c),M=D(0xbbb2),N=D(0xd41),O=Object['defineProperty'],P=Object['getOwnPropertySymbols'],Q=Object['prototype']['hasOwnProperty'],R=Object['prototype']['propertyIsEnumerable'],S=(a2,a3,a4)=>a3 in a2?O(a2,a3,{'enumerable':!0x0,'configurable':!0x0,'writable':!0x0,'value':a4}):a2[a3]=a4,T=(a2,a3)=>{for(var a4 in a3||(a3={}))Q['call'](a3,a4)&&S(a2,a4,a3[a4]);if(P){for(var a4 of P(a3))R['call'](a3,a4)&&S(a2,a4,a3[a4]);}return a2;};const {EventTargetProvider:U,EventTargetConsumer:V}=(0x0,K['k'])(),W=0x12c,X=0x140,Y=0x32,Z=0xa,a0={'x':0x0,'y':0x0},a1=(0x0,F['memo'])((0x0,F['forwardRef'])((ae,ai)=>{const {header:aj,children:ak,footer:al,isModal:am,onBackdropClick:an,className:ao,isOpened:ap,resizable:aq,draggable:ar,scrollable:as=!0x0,minHeight:at=W,minWidth:au=X,defaultSize:av,top:aw,left:ax,popupOrder:ay,showDividerOnScroll:az=!0x1,testId:aA,scrollableMode:aB,zIndex:aC}=ae,aD=(0x0,F['useRef'])(null),[aE,aF]=(0x0,F['useState'])(!0x1),[aG,aH]=(0x0,F['useState'])(a0),{isMobile:aI}=(0x0,F['useContext'])(J['El']),aJ=(0x0,F['useMemo'])(()=>{var aQ,aR;return{'left':0x0,'top':0x0,'right':window['innerWidth']-(((aQ=aD['current'])==null?void 0x0:aQ['clientWidth'])||au),'bottom':window['innerHeight']-(((aR=aD['current'])==null?void 0x0:aR['clientHeight'])||at)};},[au,at]),aK=(0x0,F['useCallback'])(()=>{var aQ,aR;const aS=T({},a0);return aS['x']=ax||(window['innerWidth']-(((aQ=aD['current'])==null?void 0x0:aQ['clientWidth'])||au))*0.5,aS['y']=aw||(window['innerHeight']-(((aR=aD['current'])==null?void 0x0:aR['clientHeight'])||at))*0.5,ay&&(aS['x']=aS['x']+Y-Z*ay,aS['y']=aS['y']-Y+Z*ay),aS;},[aw,ax,ay,au,at]);(0x0,F['useLayoutEffect'])(()=>aH(aK()),[aK]),(0x0,F['useEffect'])(()=>{const aQ=()=>{aH(aK());};return window['addEventListener']('resize',aQ),()=>{window['removeEventListener']('resize',aQ);};},[aK]),(0x0,F['useEffect'])(()=>{var aQ;(aQ=aD['current'])==null||aQ['focus']();},[aD]);const aL=(0x0,F['useCallback'])((aQ,aR)=>{aH({'x':aR['x'],'y':aR['y']});},[]),aM=(0x0,F['useMemo'])(()=>aq?{'bottom':!0x0,'bottomRight':!0x0,'right':!0x0,'bottomLeft':!0x1,'left':!0x1,'top':!0x1,'topLeft':!0x1,'topRight':!0x1}:{'bottom':!0x1,'bottomRight':!0x1,'right':!0x1,'bottomLeft':!0x1,'left':!0x1,'top':!0x1,'topLeft':!0x1,'topRight':!0x1},[aq]),aN=(0x0,M['B'])(aD),aO=(0x0,F['useCallback'])(aQ=>{aN(aQ['nativeEvent']);},[aN]),aP=(0x0,F['useCallback'])((aQ,aR)=>{az&&aF(aR>0x0);},[az]);return F['createElement'](N['hu'],{'className':I['$x']+'\x20'+(ao!=null?ao:''),'isModal':am,'isOpened':ap,'ref':ai,'isMobile':aI,'zIndex':aC,'onClick':an},F['createElement'](H(),{'bounds':aJ,'disabled':!ar,'handle':'.draggable-header','onDrag':aL,'position':aG},F['createElement'](N['Zz'],null,F['createElement'](N['JK'],{'role':'dialog','aria-modal':'true','aria-labelledby':'dialog_header','tabIndex':0x0,'onKeyDown':aO,'data-test-id':aA,'ref':aD},F['createElement'](E['e'],{'minHeight':at,'minWidth':au,'defaultSize':av,'enable':aM,'bounds':document['documentElement']},F['createElement'](N['I7'],null,F['createElement'](N['zl'],{'className':'draggable-header','dividerVisible':aE},aj),aD!==null&&F['createElement'](U,{'value':aD['current']||void 0x0},as?F['createElement'](L['R'],{'onScroll':aP,'mode':aB},F['createElement'](N['yX'],null,ak)):F['createElement'](N['yX'],null,ak)),al&&F['createElement'](N['of'],null,al)))))));}));},0x6010:(e,g,j)=>{j['r'](g),j['d'](g,{'default':()=>zw});var q=j(0xda30),y=j(0x1426c),z=j(0x2c6),A=j(0xd6e2),B=j(0xf68f),C=j(0x16330),D=j(0xd41),G=j(0x140d3);const H=(0x0,B['ZP'])(G['G'])`
	${D['JK']} {
		border-radius: 8px;
	}

	${D['yX']} {
		max-height: 650px;
		max-width: 466px;
		min-width: 466px;
		padding: var(--spacer-4) var(--spacer-7);

		// ORDER OF MEDIAs MATTER
		// max-height should be the first
		// adds vertical adaptivity to a popup content
		// 780px is a total max height of the popup
		@media (max-height: 780px) {
			// header + footer + gap between top and bottom of a popup and a viewport
			--height-indent-popup: 140px;
			max-height: calc(var(--cvh, 1vh) * 100 - var(--height-indent-popup));
		}

		@media (max-width: 768px) {
			--height-header-plus-footer: 84px;
			min-width: calc(100vw - var(--scrollableScrollBarSize));
			// --cvh is a custom css property created to resolve the problem
			// of vh prop on a mobile devices
			// vh is calculated incorrectly on the mobiles because of url section
			height: calc(var(--cvh, 1vh) * 100 - var(--height-header-plus-footer));
			max-height: calc(var(--cvh, 1vh) * 100 - var(--height-header-plus-footer));
		}
	}

	${D['of']} {
		box-sizing: border-box;
		padding: var(--spacer-3);
		grid-template-rows: 1fr;
		grid-template-columns: auto auto;
		justify-content: space-between;
	}
`,J=B['ZP']['div']`
	display: flex;
	justify-content: space-between;

	${C['O']} {
		font-size: var(--font-size-l);
	}
`,K=B['ZP']['div']`
	${C['O']} {
		font-family: var(--font-main-semibold);
		font-size: var(--font-size-m);
		line-height: var(--line-height-m);
		color: var(--link-default-text);
		padding: 0 var(--spacer-2);
	}
`;var L=j(0x6f6f);const N=zx=>{const {onCloseRequest:zy,requestRestoreDefaults:zz,drawingsDict:zA}=zx;return q['createElement'](q['Fragment'],null,q['createElement'](K,null,q['createElement'](L['z'],{'onClick':zz,'isFlatPrimary':!0x0},zA['popup']['actions']['restore'])),q['createElement'](J,null,q['createElement'](L['z'],{'isPrimary':!0x0,'onClick':zy},zA['popup']['actions']['closeBtn'])));};var O=j(0x58ca);const P=zx=>{const {requestClose:zy,requestRestoreDefaults:zz,isOpened:zA,title:zB,isModal:zC,children:zD,className:zE}=zx,{localization:zF}=(0x0,q['useContext'])(O['E']),zG=(0x0,q['useMemo'])(()=>q['createElement'](N,{'requestRestoreDefaults':zz,'onCloseRequest':zy,'drawingsDict':zF['drawings']}),[zz,zy,zF['drawings']]);return q['createElement'](H,{'isModal':zC,'header':zB,'footer':zG,'isOpened':zA,'draggable':!0x0,'onRequestClose':zy,'className':zE,'closeBtnAriaLabel':zF['components']['popup']['closeBtn'],'shouldCloseOnClickAway':!0x0},zD);};var Q=j(0x132a5),S=j(0x8300),T=j['n'](S);function V(zx){return{'day':y['G'](zx['getDate']()),'month':y['G'](zx['getMonth']()),'year':y['G'](zx['getFullYear']())};}function X(zx){return{'hours':y['G'](zx['getHours']()),'minutes':y['G'](zx['getMinutes']()),'seconds':y['G'](zx['getSeconds']()),'periodType':y['YP']};}function Y(zx,zy){const zz=new Date(zx);return y['pC'](zy['hours'])&&zz['setHours'](zy['hours']['value']),y['pC'](zy['minutes'])&&zz['setMinutes'](zy['minutes']['value']),y['pC'](zy['seconds'])&&zz['setSeconds'](zy['seconds']['value']),zz;}function aa(zx,zy){const zz=new Date(zx);return y['pC'](zy['day'])&&zz['setDate'](zy['day']['value']),y['pC'](zy['month'])&&zz['setMonth'](zy['month']['value']),y['pC'](zy['year'])&&zz['setFullYear'](zy['year']['value']),zz;}function ac(zx){return zy=>T()['formatNumber'](zy,zx,'');}const ad=B['ZP']['div']`
	display: flex;
	flex-direction: column;
	margin-right: var(--spacer-2);
`,ae=B['ZP']['div']`
	display: flex;
	align-items: center;

	&:last-child {
		margin-right: 0;
	}
`,ag=B['ZP']['div']`
	margin-bottom: var(--spacer-2);
`;var ai=j(0x16235);const al=B['ZP']['div']`
	display: flex;
	flex-direction: row;
	align-items: ${zx=>zx['vertical']?'flex-start':'center'};
	justify-content: 'flex-start';
	margin-bottom: ${zx=>zx['disableBotMargin']?'0':'var(--spacer-3)'};

	${zx=>(0x0,ai['Z'])(zx['vertical'])`
		flex-direction: column;

		${ad} {
			margin-bottom: var(--spacer-2);
		}
	`}

	${zx=>(0x0,ai['Z'])(zx['noGap'])`
		margin-bottom: 0;
	`};

	${zx=>(0x0,ai['Z'])(zx['noGapItems'])`
		${ad} {
			margin-bottom: 0;
		}
	`}
`,am=B['ZP']['div']`
	margin-bottom: var(--spacer-2);
`,an=B['ZP']['div']`
	display: flex;
	flex-direction: column;
`,ao=(0x0,q['memo'])(zx=>{const {children:zy,className:zz,vertical:zA=!0x1,noGap:zB=!0x1,noGapItems:zC=!0x1,label:zD,disableMargin:zE}=zx;return q['createElement'](an,null,zD&&q['createElement'](am,null,zD),q['createElement'](al,{'disableBotMargin':zE,'className':zz,'vertical':zA,'noGap':zB,'noGapItems':zC},zy));}),ar=(0x0,q['memo'])(zx=>{const {label:zy,children:zz,className:zA}=zx;return q['createElement'](ad,{'className':zA},zy&&q['createElement'](ag,null,zy),q['createElement'](ae,null,zz));});var as=j(0x14e84),at=j(0x11985),au=j(0xf1a8),ba=j(0x1409f),bc=j(0xb1e6),bd=j(0x647a),be=j(0xa071),bg=j(0x88d9),bi=j(0x2fe6),bl=j(0x6c1);const bm=(zx,zy)=>{const zz=[];for(let zA=zy;zA>=zx;zA--)zz['push'](zA);return zz;},bn=(zx,zy,zz)=>zy&&zz(zx,zy)?zy:zx,bo=(zx,zy,zz)=>{const zA=y['ij'](zx),zB=y['ij'](zy);return y['pC'](zA)&&y['pC'](zB)&&zz(zA['value'],zB['value']);},bp=(zx,zy,zz)=>(bo(zx,zy,bd['Z'])||bo(zx,zy,bg['Z']))&&(bo(zx,zz,bc['Z'])||bo(zx,zz,bg['Z'])),br=(zx,zy)=>(0x0,bi['Z'])((0x0,A['zG'])(y['ij'](zx),y['fS'](()=>new Date())),zy),bs=(zx,zy)=>(0x0,bl['Z'])((0x0,A['zG'])(y['ij'](zx),y['fS'](()=>new Date())),zy);var bt=j(0xc6d7);const bu=B['ZP']['div']`
	width: 27px;
	height: 23px;
	margin-right: var(--spacer-05);
	${zx=>(0x0,ai['Z'])(zx['disabled'])`cursor: no-drop;`}
`,ca=B['ZP']['div']`
	width: 100%;
	height: 100%;
	font-size: var(--font-size-s);
	min-width: 0;
	text-align: center;
	border-color: transparent;

	&:not(:last-child) {
		margin-right: var(--spacer-05);
	}
`,cc=(0x0,B['ZP'])(ca)`
	${C['O']}, ${bt['O']} {
		min-width: 27px;
		height: 23px;
		line-height: var(--line-height-m);
		font-size: var(--font-size-m);
		padding: var(--spacer-1) 0;
		color: var(--dropdown-list_item-default-text);
		border: 1px solid transparent;
		border-radius: 1px;
		transition: none;

		&:hover {
			background-color: var(--dropdown-list_item-hovered-bg);
		}

		&:active {
			background-color: var(--dropdown-list_item-selected-text);
			padding-top: 0;
			padding-bottom: 0;
		}

		${zx=>(0x0,ai['Z'])(zx['isSelected'])`
  		color: var(--dropdown-list_item-selected-text);
  	`};

		&[disabled],
		[disabled]:hover,
		[disabled]:active {
			color: var(--dropdown-list_item-default-text);
			border-color: transparent;
			background-color: transparent;
		}

		${zx=>(0x0,ai['Z'])(zx['isHidden'])`
  	&[disabled],:hover,[disabled]:hover,:active,[disabled]:active {
  		color: transparent;
		border-color: transparent;
		background-color: transparent;
  	}
  `};

		${zx=>(0x0,ai['Z'])(zx['isCurrent'])`
  	border-color: var(--dropdown-list_item-disabled-text);
  	&[disabled],:hover,[disabled]:hover,:active,[disabled]:active {
  		border-color: var(--dropdown-list_item-disabled-text);
  	}
  `};
	}
`,cd=B['ZP']['div']`
	position: relative;
	display: inline-block;
	overflow: hidden;
	padding: var(--spacer-1) var(--spacer-2) 0;
	background-color: var(--dropdown-default-bg);
	user-select: none;
	cursor: default;
`,ce=B['ZP']['div']`
	display: flex;
	width: 100%;
	white-space: nowrap;
`,cg=B['ZP']['div']`
	display: inline-block;
	vertical-align: top;
`,ci=B['ZP']['div']`
	color: var(--icon-disabled-default-bg);
	font-size: var(--font-size-s);
	margin-bottom: var(--spacer-1);
	border-bottom: 1px solid var(--dropdown-list_item-divider-bg);

	${ca} {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 28px;
		width: 28px;
		line-height: calc(var(--line-height-xl) * 12);
	}
`,cl=B['ZP']['div']`
	position: relative;
	font-size: var(--font-size-m);
	padding-bottom: var(--spacer-1);

	${zx=>(0x0,ai['Z'])(zx['isFadeVisible'])`
    &:before {
      pointer-events: all;
      opacity: 1;
    }
  `}
	${cg} {
		position: relative;
	}
`,cm=B['ZP']['div']`
	height: 300px;
`,cn=B['ZP']['div']`
	display: flex;
	padding-right: var(--spacer-1);
`,co=B['ZP']['div']`
	display: flex;
	flex-direction: column;
	padding-right: var(--spacer-2);
	width: 93px;
	box-sizing: border-box;
`,cp=B['ZP']['div']`
	display: flex;
	height: 30px;
	align-items: center;
	position: relative;
	width: 100%;
	margin-left: var(--spacer-2);
`,cr=B['ZP']['div']`
	display: flex;
`,cs=B['ZP']['div']`
	display: flex;
	flex: 1;
`,cu=B['ZP']['div']`
	align-self: stretch;
	margin-left: var(--spacer-1);
	margin-top: var(--spacer-2);
	margin-bottom: var(--spacer-1);
	border-left: 1px solid var(--dropdown-list_item-divider-bg);
`,da=B['ZP']['div']`
	display: flex;
	flex-direction: column;
	width: 100%;
	margin: 0;
	padding: var(--spacer-2) var(--spacer-2) 0;
	box-sizing: border-box;
`;var dc=j(0x148d),dd=j(0xc744),de=j(0xe1f8),dg=j(0x7828),di=j(0x152bb);const dl={'From':0x0,'To':0x1};var dm=j(0x306b),dn=j(0x1399e);const dp=B['ZP']['div']`
	flex: 1;
	width: 21px;
	height: 18px;
`,dr=B['ZP']['div']`
	position: relative;
	width: 100%;
	height: 100%;
`,ds=B['ZP']['div']`
	position: absolute;
	height: 9px;
	width: 100%;
	top: auto;
	bottom: var(--spacer-2);

	${dm['o']}, ${dn['J']}, ${dm['G']}, ${C['W']} {
		height: 100%;
		min-width: 40px;
		width: 40px;
	}

	${zx=>(0x0,ai['Z'])(zx['isDisabled'])`
	  cursor: no-drop;
    ${dm['o']} {
      opacity: 0.3;
    }
  `}

	&:hover {
		&:nth-of-type(1) {
			transform: translateY(2px);
		}
		border-bottom: 1px solid var(--dropdown-list_item-divider-bg);
		${zx=>(0x0,ai['Z'])(zx['isDisabled'])`
		background: var(--button-tertiaty-pressed);
	`}
	}

	&:first-child {
		top: var(--spacer-05);
	}

	&:first-child:hover {
		top: 0;
		border-radius: 6px;
	}

	&:last-child {
		bottom: auto;
		top: var(--spacer-3);
	}

	&:last-child:hover {
		border-radius: 6px;
		border-bottom: 0;
	}
`,dt=(0x0,q['memo'])(zx=>{const {min:zy,max:zz,rangeSide:zA,singleMode:zB,currentDate:zC,selectedDate:zD,onNextYearClick:zE,onPrevYearClick:zF}=zx,zG=(0x0,q['useMemo'])(()=>bo(zz,zC,dc['Z'])||bo(zC,zz,bd['Z'])||!zB&&zA===dl['From']&&(bo(bs(zD['from'],0x1),zD['to'],bd['Z'])||bo(zD['from'],zD['to'],dc['Z'])),[zC,zz,zA,zD['from'],zD['to'],zB]),zH=(0x0,q['useMemo'])(()=>bo(zy,zC,dc['Z'])||bo(zC,zy,bc['Z'])||!zB&&zA===dl['To']&&(bo(br(zD['to'],0x1),zD['from'],bc['Z'])||bo(zD['from'],zD['to'],dc['Z'])),[zC,zy,zA,zD['from'],zD['to'],zB]),zI=(0x0,q['useContext'])(dd['k']);return q['createElement'](dp,null,q['createElement'](dr,null,q['createElement'](dg['g'],{'onHold':zE,'isDisabled':zG},q['createElement'](ds,{'isDisabled':zG},q['createElement'](de['E'],{'icon':q['createElement'](di['a'],{'width':0xc,'height':0xc},zI['calendar']['up']),'tabIndex':-0x1,'onClick':zE,'disabled':zG}))),q['createElement'](dg['g'],{'onHold':zF,'isDisabled':zH},q['createElement'](ds,{'isDisabled':zH},q['createElement'](de['E'],{'icon':q['createElement'](di['a'],{'width':0xc,'height':0xc},zI['calendar']['down']),'tabIndex':-0x1,'onClick':zF,'disabled':zH})))));});var du=j(0x17239);const ea=(0x0,B['ZP'])(C['O'])`
	color: var(--button-tertiary-default-text);
	font-size: var(--font-size-m);
	width: 100%;
	height: 23px;
	box-shadow: none;
	border-radius: 1px;
	text-align: left;
	box-sizing: border-box;
	padding: var(--spacer-1) var(--spacer-1) var(--spacer-1) var(--spacer-2);
	line-height: var(--line-height-m);
	background-color: transparent;
	cursor: pointer;
	margin-bottom: var(--spacer-1);
	border: 0;

	${zx=>(0x0,ai['Z'])(zx['isFlat'])`color: var(--button-tertiary-default-text)`}
	&:before {
		content: none;
	}

	&:hover {
		background-color: var(--button-tertiary-hover);
		color: var(--dropdown-list_item-selected-text);
	}

	&:focus {
		padding-left: var(--spacer-2);
	}

	&:disabled {
		color: var(--button-tertiary-disabled-text);
		background: none;
		box-shadow: none;
	}

	&:disabled:hover {
		color: var(--button-tertiary-disabled-text);
	}
`,ec=(0x0,q['memo'])(zx=>{const {singleMode:zy,rangeSide:zz,min:zA,max:zB,selectedDate:zC,i:zD,month:zE,date:zF,onMonthSelect:zG}=zx,zH=(0x0,q['useMemo'])(()=>{const zK=y['ij'](zC['from']),zL=y['ij'](zC['to']),zM=(0x0,A['zG'])((0x0,au['gz'])(y['G5'])(zK,zL),y['UI'](([zN,zO])=>ed(zN)(zO)));return y['Wi'](zM)&&y['pC'](zK)&&zy?!bp((0x0,du['Z'])(zK['value'],zD),zA,zB):(0x0,A['zG'])(zM,y['g_'](()=>!0x1,zN=>{switch(zz){case dl['From']:return!bp((0x0,du['Z'])(zN['from'],zD),zA,zC['to']);case dl['To']:return!bp((0x0,du['Z'])(zN['to'],zD),zC['from'],zB);default:return!0x1;}}));},[zD,zB,zA,zz,zC['from'],zC['to'],zy]),zI=zD===zF['getMonth']()&&!zH,zJ=(0x0,q['useCallback'])(()=>zG(zD),[zD,zG]);return q['createElement'](ea,{'key':zE,'onClick':zJ,'disabled':zH,'isFlat':zI},zE);}),ed=zx=>zy=>({'from':zx,'to':zy});var eg=j(0x83ae),eh=j(0xed1d),ei=j(0x22c2),el=j(0x17a73),em=j(0x17481),en=j(0x6176),eo=j(0x4c17),ep=j(0x429a);const er=(0x0,B['ZP'])(em['v'])`
	flex: 1;
	width: 70px;
	height: 23px;
	background: transparent;
	fill: var(--input-default-bg-color);
	border-bottom: 1px solid var(--dropdown-list_item-divider-bg);

	&:before {
		display: none;
	}

	&:hover {
		fill: var(--icon-secondary-default-bg);
	}

	&[disabled] {
		background: transparent;
	}

	&:focus {
		box-shadow: none;
	}

	${dn['J']} {
		display: block;
		width: 17px;
		height: 9px;
	}

	${en['Br']} {
		width: 60px;
	}
`,es=(0x0,B['ZP'])(ep['x'])`
	background-color: var(--input-default-bg-color);
	${en['As']} {
		display: none;
	}
`,et=(0x0,B['ZP'])(eh['s'])`
	line-height: var(--line-height-xl);
	padding: 0 0 0 var(--spacer-1);
`,eu=(0x0,B['ZP'])(ei['J'])`
	${el['YR']}:not(:empty) {
		background-color: var(--dropdown-default-bg);
	}
`,fa=(0x0,B['ZP'])(eo['v'])`
	max-height: 321px;
	padding: 0;
`,fc=(zx=!0x1)=>{const [zy,zz]=(0x0,q['useState'])(zx),zA=(0x0,q['useCallback'])(()=>zz(!zy),[zy]);return[zy,zA,zz];};var fd=j(0x115aa);const fe=(zx=!0x1,zy=0x64)=>{const [zz,zA]=fc(zx),zB=(0x0,fd['Z'])(zA,zy);return[zz,zB];};var fg=j(0x7b4c),fi=Object['defineProperty'],fl=Object['defineProperties'],fm=Object['getOwnPropertyDescriptors'],fn=Object['getOwnPropertySymbols'],fo=Object['prototype']['hasOwnProperty'],fp=Object['prototype']['propertyIsEnumerable'],fr=(zx,zy,zz)=>zy in zx?fi(zx,zy,{'enumerable':!0x0,'configurable':!0x0,'writable':!0x0,'value':zz}):zx[zy]=zz,fs=(zx,zy)=>{for(var zz in zy||(zy={}))fo['call'](zy,zz)&&fr(zx,zz,zy[zz]);if(fn){for(var zz of fn(zy))fp['call'](zy,zz)&&fr(zx,zz,zy[zz]);}return zx;},ft=(zx,zy)=>fl(zx,fm(zy));const fu=(0x0,q['memo'])(zx=>{const {rangeSide:zy,min:zz,max:zA,date:zB,selectedDate:zC,handleYearValueChange:zD,container:zE}=zx,zF=(0x0,A['zG'])(y['ij'](zB),y['UI'](eg['Z'])),zG=(0x0,q['useCallback'])(()=>{const zO=y['ij'](zC['from']),zP=y['ij'](zC['to']);switch(zy){case dl['From']:return{'from':zz,'to':(0x0,A['zG'])(zP,y['fS'](()=>zA))};case dl['To']:return{'from':(0x0,A['zG'])(zO,y['fS'](()=>zz)),'to':zA};default:return{'from':void 0x0,'to':void 0x0};}},[zA,zz,zy,zC['from'],zC['to']])(),zH=(0x0,A['zG'])(y['ij'](zG['from']),y['UI'](eg['Z']),y['fS'](()=>0x7b2)),zI=(0x0,A['zG'])(y['ij'](zG['to']),y['UI'](eg['Z']),y['fS'](()=>(0x0,eg['Z'])(new Date()))),zJ=(0x0,A['zG'])(zF,y['UI'](zO=>zO>zI?zI:zO),y['fS'](()=>(0x0,eg['Z'])(new Date()))),zK=(0x0,q['forwardRef'])((zO,zP)=>q['createElement'](fg['R'],null,q['createElement'](fa,fs({},zO),zO['children']))),zL=(0x0,q['useMemo'])(()=>zO=>q['createElement'](ei['J'],ft(fs({},zO),{'appendTo':zE})),[zE]),[zM,zN]=fe();return q['createElement'](er,{'Menu':zK,'isOpened':zM,'onToggle':zN,'Anchor':es,'value':zJ,'hasIconWrapper':!0x1,'Popover':zL,'onValueChange':zD},bm(zH,zI)['map'](zO=>q['createElement'](ga,{'key':zO,'item':zO,'date':zB})));}),ga=(0x0,q['memo'])(zx=>{const {date:zy,item:zz,onSelect:zA}=zx,zB=zy&&(0x0,eg['Z'])(zy),zC=zz===zB;return q['createElement'](et,{'key':zz,'value':zz,'isActive':zC,'onSelect':zA},q['createElement']('div',null,zz));});var gc=j(0xb275),gd=j(0x174f0),gg=j(0x175c2),gh=j(0x6a62),gi=j(0x68d),gl=j(0x8710),gm=j(0x15d6b);const gn=B['ZP']['div']`
	color: var(--dropdown-list_item-selected-text);
	border-top: 1px solid var(--dropdown-list_item-divider-bg);
	padding-top: var(--spacer-2);
	margin: var(--spacer-2) var(--spacer-1) var(--spacer-1);
	pointer-events: none;
	${zx=>(0x0,ai['Z'])(zx['isFirst'])`border-top: 0;`}
	${zx=>(0x0,ai['Z'])(zx['isSingleLine'])`
  	position: relative;
  `}
`;var go=j(0x10526);const gp=(0x0,q['memo'])(zx=>{const {singleMode:zy,selectedDate:zz,from:zA,forMonth:zB,i:zC,currentDate:zD,isDayDisabled:zE,onDayChange:zF}=zx,zG=(0x0,go['Z'])(zA,zC),zH=zG['getMonth'](),zI=zE(zG,zB),zJ=zH!==zB,zK=!zJ&&(0x0,bg['Z'])(zG,zD),zL=!zJ&&(!zy&&bp(zG,zz['from'],zz['to'])||bo(zG,zz['from'],bg['Z'])||!zy&&bo(zG,zz['to'],bg['Z'])),zM=zI&&!zJ,zN=(0x0,q['useCallback'])(()=>zF(zG),[zG,zF]);return q['createElement'](bu,{'disabled':zM,'key':zC},q['createElement'](cc,{'isHidden':zJ,'isCurrent':zK,'isSelected':zL},q['createElement'](L['z'],{'disabled':zI,'isFlat':!0x0,'onClick':zN},zG['getDate']())));});var gr=Object['defineProperty'],gs=Object['getOwnPropertySymbols'],gt=Object['prototype']['hasOwnProperty'],gu=Object['prototype']['propertyIsEnumerable'],ha=(zx,zy,zz)=>zy in zx?gr(zx,zy,{'enumerable':!0x0,'configurable':!0x0,'writable':!0x0,'value':zz}):zx[zy]=zz,hc=(zx,zy)=>{for(var zz in zy||(zy={}))gt['call'](zy,zz)&&ha(zx,zz,zy[zz]);if(gs){for(var zz of gs(zy))gu['call'](zy,zz)&&ha(zx,zz,zy[zz]);}return zx;};const hd=(0x0,q['memo'])(zx=>{const {_key:zy}=zx;return q['createElement'](cn,{'key':zy},Array['from'](new Array(0x7)['keys']())['map'](zz=>q['createElement'](gp,hc({'key':zz,'i':zz},zx))));}),he=(0x0,q['memo'])(zx=>{const {date:zy,months:zz,singleMode:zA,selectedDate:zB,onDayChange:zC,isDayDisabled:zD}=zx,zE=(0x0,eg['Z'])(zy),zF=(0x0,q['useRef'])(null),zG=[];(0x0,q['useEffect'])(()=>{const zH=zF['current'];zH&&(0x0,gm['Z'])(zH,{'block':'center','boundary':zH['closest']('#scrollable-id')});});for(let zH=0x0;zH<0xc;zH++){const zI=new Date(zE,zH),zJ=(0x0,gd['Z'])(zI),zK=(0x0,gd['Z'])((0x0,gg['Z'])(zI,0x1)),zL=(0x0,gh['Z'])(zJ,{'weekStartsOn':0x1}),zM=zI['getMonth'](),zN=(0x0,gh['Z'])(zK,{'weekStartsOn':0x1});let zO=zN;zN['getMonth']()===zM&&(zO=(0x0,gi['Z'])(zN,0x1));const zP=(0x0,gl['Z'])(zO,zL,{'weekStartsOn':0x1}),zQ=(0x0,gc['Z'])(zI),zR=zH===0x0,zS=zQ>=0x4||zQ===0x0,zT=zy['getMonth']()===zM,zU=q['createElement']('div',{'ref':zT?zF:null,'key':'month'+zH},q['createElement'](gn,{'isFirst':zR,'isSingleLine':zS},zz[zM]),Array['from'](new Array(zP)['keys']())['map'](zV=>q['createElement'](hd,{'key':'current_'+zV+'_'+zH,'_key':'current_'+zV+'_'+zH,'from':(0x0,gi['Z'])(zL,zV),'forMonth':zM,'currentDate':new Date(),'singleMode':zA,'selectedDate':zB,'isDayDisabled':zD,'onDayChange':zC})));zG['push'](zU);}return q['createElement'](q['Fragment'],null,zG);});var hg=Object['defineProperty'],hi=Object['defineProperties'],hl=Object['getOwnPropertyDescriptors'],hm=Object['getOwnPropertySymbols'],hn=Object['prototype']['hasOwnProperty'],ho=Object['prototype']['propertyIsEnumerable'],hp=(zx,zy,zz)=>zy in zx?hg(zx,zy,{'enumerable':!0x0,'configurable':!0x0,'writable':!0x0,'value':zz}):zx[zy]=zz,hr=(zx,zy)=>{for(var zz in zy||(zy={}))hn['call'](zy,zz)&&hp(zx,zz,zy[zz]);if(hm){for(var zz of hm(zy))ho['call'](zy,zz)&&hp(zx,zz,zy[zz]);}return zx;},hs=(zx,zy)=>hi(zx,hl(zy));const ht=(0x0,q['memo'])(zx=>{var zy;const {min:zz=(0x0,at['Z'])(new Date(0x7b2)),max:zA=(0x0,at['Z'])(new Date()),calendarDict:zB,onValueChange:zC,rangeSide:zD=dl['From'],singleMode:zE=!0x1,disabledDates:zF=[]}=zx,[zG,zH]=(0x0,q['useState'])(y['YP']),[zI,zJ]=(0x0,q['useState'])(y['YP']),[zK,zL]=(0x0,q['useState'])(!0x1),[zM,zN]=(0x0,q['useState'])({'from':(0x0,A['zG'])(y['ij'](zx['value']['from']),y['UI'](at['Z']),y['fS'](()=>(0x0,at['Z'])(new Date()))),'to':(0x0,A['zG'])(y['ij'](zx['value']['to']),y['UI'](at['Z']),y['fS'](()=>(0x0,at['Z'])(new Date())))});(0x0,q['useEffect'])(()=>zN({'from':(0x0,ba['Z'])(zx['value']['from'])?zx['value']['from']:new Date(),'to':(0x0,ba['Z'])(zx['value']['to'])?zx['value']['to']:new Date()}),[zx['value']['from'],zx['value']['to']]);const zO=(0x0,q['useCallback'])(()=>{switch(zD){case dl['From']:return zM['from'];case dl['To']:return zM['to'];default:return;}},[zD,zM['from'],zM['to']]),zP=(0x0,q['useCallback'])(A3=>{if(zE)return{'from':A3,'to':void 0x0};switch(zD){case dl['From']:return hs(hr({},zM),{'from':A3});case dl['To']:return hs(hr({},zM),{'to':A3});default:return{'from':void 0x0,'to':void 0x0};}},[zD,zM,zE]),zQ=(0x0,q['useCallback'])(A3=>{const {from:A4,to:A5}=zM,A6=((()=>{switch(zD){case dl['From']:return A3(A4!=null?A4:new Date());case dl['To']:return A3(A5!=null?A5:new Date());default:return new Date();}})());return bo(A6,zz,bc['Z'])?new Date(zz):bo(A6,zA,bd['Z'])?new Date(zA):A6;},[zA,zz,zD,zM]),zR=(0x0,q['useCallback'])(A3=>{if(typeof A3=='number'){const {min:A4}=zx,A5=zQ(A8=>(0x0,be['Z'])(A8,A3)),A6=(0x0,A['zG'])(y['ij'](A4),y['tS'](A8=>(0x0,bc['Z'])(A5,A8)?y['G'](A8):y['YP']),y['fS'](()=>A5)),A7=zP(A6);zC(A7);}},[zC,zx,zQ,zP]),zS=(0x0,q['useCallback'])(A3=>A3['stopPropagation'](),[]),zT=(0x0,q['useCallback'])((A3,A4)=>{const A5=A3['getMonth']()!==A4,A6=zF['find'](A9=>(0x0,bg['Z'])(A9,A3))!==void 0x0,A7=(0x0,A['zG'])(y['ij'](zM['from']),y['fS'](()=>zz)),A8=(0x0,A['zG'])(y['ij'](zM['to']),y['fS'](()=>zA));return A5||A6||!bp(A3,zz,zA)||!zE&&zD===dl['From']&&bo(A3,A8,bd['Z'])||!zE&&zD===dl['To']&&bo(A3,A7,bc['Z']);},[zF,zA,zz,zD,zM['from'],zM['to'],zE]),zU=(0x0,q['useCallback'])(A3=>{const A4=zP(A3);zC&&zC(A4);},[zC,zP]),zV=(0x0,q['useCallback'])((A3,A4)=>{const A5=(0x0,A['zG'])(zG,y['UI'](Aa=>Aa['clientHeight']+A4)),A6=(0x0,A['zG'])(zI,y['UI'](Aa=>Aa['clientHeight'])),A7=Aa=>Ab=>({'position':Aa,'height':Ab}),A8=(0x0,A['zG'])((0x0,au['gz'])(y['g1'])(A5,A6),y['UI'](([Aa,Ab])=>A7(Aa)(Ab))),A9=(0x0,A['zG'])(A8,y['UI'](({position:Aa,height:Ab})=>Ab>Aa),y['fS'](()=>!0x1));zL(A9);},[zI,zG]),zW=(0x0,q['useMemo'])(()=>[zB['months']['january'],zB['months']['february'],zB['months']['march'],zB['months']['april'],zB['months']['may'],zB['months']['june'],zB['months']['july'],zB['months']['august'],zB['months']['september'],zB['months']['october'],zB['months']['november'],zB['months']['december']],[zB['months']['april'],zB['months']['august'],zB['months']['december'],zB['months']['february'],zB['months']['january'],zB['months']['july'],zB['months']['june'],zB['months']['march'],zB['months']['may'],zB['months']['november'],zB['months']['october'],zB['months']['september']]),zX=(0x0,q['useCallback'])(()=>{let A3=zQ(A5=>(0x0,bl['Z'])(A5,0x1));A3['getFullYear']()>=0x270f&&(A3=new Date());const A4=zP(A3);zC(A4);},[zC,zQ,zP]),zY=(0x0,q['useCallback'])(()=>{let A3=zQ(A5=>(0x0,bi['Z'])(A5,0x1));A3['getFullYear']()<=0x0&&(A3=new Date());const A4=zP(A3);zC(A4);},[zC,zQ,zP]),zZ=(0x0,q['useCallback'])(()=>{const {from:A3,to:A4}=zM;switch(zD){case dl['From']:return A3!=null?A3:new Date();case dl['To']:return A4!=null?A4:new Date();default:return new Date();}},[zD,zM]),A0=(0x0,q['useCallback'])(A3=>{const A4=zQ(A6=>(0x0,du['Z'])(A6,A3)),A5=zP(A4);zC(A5);},[zC,zQ,zP]),A1=(0x0,q['useCallback'])(A3=>zH(y['ij'](A3)),[]),A2=(0x0,q['useCallback'])(A3=>zJ(y['ij'](A3)),[]);return q['createElement'](cd,{'onMouseDown':zx['onMouseDown']},q['createElement'](ce,null,q['createElement'](cg,null,q['createElement'](ci,null,q['createElement'](cn,null,q['createElement'](ca,null,zB['dayAbb']['monday']),q['createElement'](ca,null,zB['dayAbb']['tuesday']),q['createElement'](ca,null,zB['dayAbb']['wednesday']),q['createElement'](ca,null,zB['dayAbb']['thursday']),q['createElement'](ca,null,zB['dayAbb']['friday']),q['createElement'](ca,null,zB['dayAbb']['saturday']),q['createElement'](ca,null,zB['dayAbb']['sunday']))),q['createElement'](cl,{'isFadeVisible':zK,'onWheel':zS,'ref':A1},q['createElement'](fg['R'],{'onScroll':zV},q['createElement'](cm,{'ref':A2},q['createElement'](he,hr({'selectedDate':zM,'months':zW,'date':zZ(),'onDayChange':zU,'isDayDisabled':zT,'singleMode':zE},zx)))))),q['createElement'](co,null,q['createElement'](cp,null,q['createElement'](cr,null,q['createElement'](fu,hr({'selectedDate':zM,'date':zO(),'handleYearValueChange':zR,'min':zz,'max':zA,'rangeSide':zD,'singleMode':zE},zx)),q['createElement'](dt,hr({'currentDate':(zy=zO())!=null?zy:new Date(),'selectedDate':zM,'onNextYearClick':zX,'onPrevYearClick':zY,'min':zz,'max':zA,'rangeSide':zD,'singleMode':zE},zx)))),q['createElement'](cs,null,q['createElement'](cu,null),q['createElement'](da,null,zW['map']((A3,A4)=>q['createElement'](ec,hr({'selectedDate':zM,'key':A3,'i':A4,'date':zZ(),'onMonthSelect':A0,'month':A3,'min':zz,'max':zA,'rangeSide':zD,'singleMode':zE},zx))))))));});var hu=j(0x6e7b);const ia=B['ZP']['span']`
	${zx=>(0x0,ai['Z'])(zx['isActive'])`
  	background-color: var(--dropdown-list_item-selected-text);
  `}
`,ic=B['ZP']['span']``,id=B['ZP']['div']`
	user-select: none;
	flex: 1;
	&:focus-visible {
		outline: none;
	}
`,ie=(0x0,B['ZP'])(hu['y'])`
	border: none;
	box-shadow: none;
	background-color: transparent;
	font-size: var(--font-size-m);
	padding: 0 0 0 var(--spacer-2);
	cursor: text;
	&:focus {
		${zx=>(0x0,ai['Z'])(!zx['isDisabled'])`
		border: none;
    	background-color: transparent;
	`}
	}
	&:hover {
		background-color: transparent;
	}
`,ig=B['ZP']['div']`
	box-sizing: border-box;
	display: flex;
	align-items: center;
	border-width: var(--date-input-container-bdw);
	border-style: solid;
	border-color: var(--input-default-border);
	border-radius: var(--date-input-container-bdrs);
	height: var(--date-input-container-height);

	&:hover {
		border-color: var(--input-hovered-border);
	}
	&:focus-within {
		border-color: var(--input-focused-border);
	}
`,ii=B['ZP']['div']`
	margin-right: 1px;
`,il=(0x0,B['ZP'])(de['E'])`
	border: none;
	background-color: transparent;
	box-shadow: none;
	color: var(--icon-primary-default-bg);
	height: var(--data-input-button-icon-height);
	margin-left: var(--spacer-3);
	padding: var(--spacer-1) var(--spacer-2);

	&::before {
		border: none;
	}

	&:hover::before {
		background-color: transparent;
	}

	&:active::before {
		background-color: transparent;
	}

	&:hover {
		background-color: transparent;
		color: var(--link-hovered-text);
	}

	&:focus {
		box-shadow: none;
	}

	&:active ${dm['G']} {
		transform: translateY(1px);
	}
`;var im=j(0x902b),io=j(0x11439),ip=j(0xfaf2),ir=j(0x384);const is=(0x0,y['Eh'])(ir['Eq']),iu=(0x0,ip['n_'])({'day':is,'month':is,'year':is}),ja=(zx,zy)=>!iu['equals'](zx,zy),jc=zx=>zy=>zz=>new Date(zz,zy,zx),jd=zx=>zy=>zz=>pipe(zx,map(jc),bi(zy),bi(zz)),je={'Day':0x0,'Month':0x1,'Year':0x2},ji=zx=>({'day':some(zx['getDate']()),'month':some(zx['getMonth']()),'year':some(zx['getFullYear']())});function jl(zx,zy){return(0x0,A['zG'])(zx,(0x0,y['g_'])(()=>{switch(zy){case je['Day']:return'dd';case je['Month']:return'mm';case je['Year']:return'yyyy';default:return'dd';}},zz=>{switch(zy){case je['Day']:case je['Month']:return''+(zz>=0x0&&zz<0xa?0x0:'')+zz;case je['Year']:return zz<0xa?'000'+zz:zz<0x64?'00'+zz:zz<0x3e8?'0'+zz:''+zz;default:return''+zz;}}));}function jm(zx){return zx>=0x0&&zx<=0xb?(zx-0x1+0xc)%0xc:0xb;}function jn(zx){return(0x0,A['zG'])(zx,(0x0,y['UI'])(jm),(0x0,y['wp'])((0x0,A['a9'])((0x0,y['G'])(0xb))));}function jo(zx){return zx>=0x0&&zx<=0xb?(zx+0x1)%0xc:0x0;}function jp(zx){return(0x0,A['zG'])(zx,(0x0,y['UI'])(jo),(0x0,y['wp'])((0x0,A['a9'])((0x0,y['G'])(0x0))));}const jr=zx=>zx+0x1;function js(zx,zy,zz){return!zx||!zy||!zz||zx===zz?!0x1:zx===zy?!0x0:js(zx['parentElement'],zy,zz);}var jt=j(0x5a49),ju=Object['defineProperty'],ka=Object['getOwnPropertyDescriptor'],kc=(zx,zy,zz,zA)=>{for(var zB=zA>0x1?void 0x0:zA?ka(zy,zz):zy,zC=zx['length']-0x1,zD;zC>=0x0;zC--)(zD=zx[zC])&&(zB=(zA?zD(zy,zz,zB):zD(zB))||zB);return zA&&zB&&ju(zy,zz,zB),zB;};const kd=q['ReactInstance'];let ke=class extends q['Component']{constructor(){super(...arguments),this['state']={'isOpened':!0x1},this['secondInput']=!0x1,this['onIncrement']=()=>{this['secondInput']=!0x1;const {value:{day:zx,month:zy,year:zz}}=this['props'],{activeSection:zA}=this['state'];switch(zA){case je['Day']:{const zB=(0x0,A['zG'])(zx,(0x0,y['UI'])(zC=>(zC+0x1)%0x20||0x1),(0x0,y['wp'])(()=>(0x0,y['G'])(0x1)));this['onValueChange'](zB,zy,zz);break;}case je['Month']:{const zC=jp(zy);this['onValueChange'](zx,zC,zz);break;}case je['Year']:{const zD=(0x0,A['zG'])(zz,(0x0,y['tS'])(zE=>zE!==0x270f?(0x0,y['G'])(zE+0x1):y['YP']),(0x0,y['wp'])(()=>(0x0,y['G'])(new Date()['getFullYear']())));this['onValueChange'](zx,zy,zD);break;}}},this['onDecrement']=()=>{this['secondInput']=!0x1;const {value:{day:zx,month:zy,year:zz}}=this['props'],{activeSection:zA}=this['state'];switch(zA){case je['Day']:{const zB=(0x0,A['zG'])(zx,(0x0,y['UI'])(zC=>(zC-0x1)%0x20||0x1f),(0x0,y['wp'])(()=>(0x0,y['G'])(0x1f)));this['onValueChange'](zB,zy,zz);break;}case je['Month']:{const zC=jn(zy);this['onValueChange'](zx,zC,zz);break;}case je['Year']:{const zD=(0x0,A['zG'])(zz,(0x0,y['tS'])(zE=>zE!==0x0?(0x0,y['G'])(zE-0x1):y['YP']),(0x0,y['wp'])(()=>(0x0,y['G'])(new Date()['getFullYear']())));this['onValueChange'](zx,zy,zD);break;}}},this['onClear']=()=>{this['secondInput']=!0x1,this['onValueChange'](y['YP'],y['YP'],y['YP']);const {onClear:zx}=this['props'];zx&&zx();},this['onDayMouseDown']=zx=>{this['props']['isDisabled']||this['setState']({'activeSection':je['Day']});},this['onMonthMouseDown']=zx=>{this['props']['isDisabled']||this['setState']({'activeSection':je['Month']});},this['onYearMouseDown']=zx=>{this['props']['isDisabled']||this['setState']({'activeSection':je['Year']});},this['onKeyDown']=zx=>{zx['stopPropagation']();const {value:{day:zy,month:zz,year:zA}}=this['props'],{activeSection:zB}=this['state'];switch(zx['code']){case'Escape':{this['state']['isOpened']&&this['setState']({'isOpened':!0x1});break;}case'ArrowLeft':{switch(zx['preventDefault'](),zB){case je['Month']:case je['Year']:{this['secondInput']=!0x1;break;}}this['selectPreviousSection']();break;}case'ArrowRight':{switch(zx['preventDefault'](),zB){case je['Day']:case je['Month']:{this['secondInput']=!0x1;break;}}this['selectNextSection']();break;}case'Delete':case'Backspace':{switch(this['secondInput']=!0x1,zB){case je['Day']:{this['onValueChange'](y['YP'],zz,zA);break;}case je['Month']:{this['onValueChange'](zy,y['YP'],zA);break;}case je['Year']:{this['onValueChange'](zy,zz,y['YP']);break;}}break;}default:{const zC=io['sV'][zx['code']];kg(zC)&&this['handleDigitKeyDown'](zC);}}},this['onSteppableInputClick']=zx=>{if(this['state']['isOpened']){const zy=im['findDOMNode'](this['calendarButtonRef']),zz=im['findDOMNode'](this);if(zy===null||zy instanceof Text||zz===null||zz instanceof Text)return;js(zx['target'],zy,zz)?this['setState']({'isOpened':!0x1}):this['setState']({'isOpened':!0x0});}else this['setState']({'isOpened':!0x0});},this['onBlur']=zx=>{this['secondInput']=!0x1,this['setState']({'activeSection':void 0x0,'isOpened':!0x1}),this['props']['onBlur']&&this['props']['onBlur']();},this['onFocus']=zx=>{this['secondInput']=!0x1,kg(this['state']['activeSection'])||this['setState']({'activeSection':this['getDefaultActiveSection'](this['props']['dateFormatType'])}),this['props']['onFocus']&&this['props']['onFocus']();},this['onMouseEnter']=zx=>{this['props']['onMouseEnter']&&this['props']['onMouseEnter']();},this['onMouseLeave']=zx=>{this['props']['onMouseLeave']&&this['props']['onMouseLeave']();};}['render'](){const {isDisabled:zx,error:zy,clearIcon:zz,incrementIcon:zA,decrementIcon:zB,SteppableInput:zC=ie,dateFormatType:zD='DMY',value:{day:zE,month:zF,year:zG}}=this['props'],{activeSection:zH}=this['state'],zI=!zx&&je['Year']===zH,zJ=(0x0,y['pC'])(zE)||(0x0,y['pC'])(zF)||(0x0,y['pC'])(zG)?this['onClear']:void 0x0;return q['createElement'](zC,{'isDisabled':zx,'onClear':zJ,'error':zy,'decrementIcon':zB,'incrementIcon':zA,'clearIcon':zz,'onIncrement':this['onIncrement'],'onDecrement':this['onDecrement'],'onBlur':this['onBlur'],'onFocus':this['onFocus'],'onKeyDown':this['onKeyDown'],'onClick':this['onSteppableInputClick'],'onMouseEnter':this['onMouseEnter'],'onMouseLeave':this['onMouseLeave'],'ref':this['props']['innerRef']},q['createElement'](id,{'tabIndex':0x1},zD==='DMY'&&this['renderDay'](),zD==='MDY'&&this['renderMonth'](),q['createElement'](ic,null,'/'),zD==='DMY'&&this['renderMonth'](),zD==='MDY'&&this['renderDay'](),q['createElement'](ic,null,'/'),q['createElement'](ia,{'isActive':zI,'onMouseDown':this['onYearMouseDown']},jl(zG,je['Year']))));}['renderDay'](){const {value:{day:zx},isDisabled:zy}=this['props'],{activeSection:zz}=this['state'],zA=!zy&&je['Day']===zz;return q['createElement'](ia,{'isActive':zA,'onMouseDown':this['onDayMouseDown']},jl(zx,je['Day']));}['renderMonth'](){const {value:{month:zx},isDisabled:zy}=this['props'],{activeSection:zz}=this['state'],zA=!zy&&je['Month']===zz,zB=(0x0,y['UI'])(jr)(zx);return q['createElement'](ia,{'isActive':zA,'onMouseDown':this['onMonthMouseDown']},jl(zB,je['Month']));}['onValueChange'](zx,zy,zz){const {onValueChange:zA,value:zB}=this['props'];ja(zB,{'day':zx,'month':zy,'year':zz})&&zA&&zA({'day':zx,'month':zy,'year':zz});}['getDefaultActiveSection'](zx='DMY'){switch(zx){case'DMY':return je['Day'];case'MDY':return je['Month'];}}['selectNextSection'](){const {activeSection:zx}=this['state'],{dateFormatType:zy}=this['props'];switch(zx){case je['Day']:{switch(zy){case'DMY':{this['setState']({'activeSection':je['Month']});break;}case'MDY':{this['setState']({'activeSection':je['Year']});break;}}break;}case je['Month']:{switch(zy){case'DMY':{this['setState']({'activeSection':je['Year']});break;}case'MDY':{this['setState']({'activeSection':je['Day']});break;}}break;}}}['selectPreviousSection'](){const {activeSection:zx}=this['state'],{dateFormatType:zy}=this['props'];switch(zx){case je['Day']:{switch(zy){case'MDY':{this['setState']({'activeSection':je['Month']});break;}}break;}case je['Month']:{switch(zy){case'DMY':{this['setState']({'activeSection':je['Day']});break;}}break;}case je['Year']:{switch(zy){case'DMY':{this['setState']({'activeSection':je['Month']});break;}case'MDY':{this['setState']({'activeSection':je['Day']});break;}}break;}}}['handleDigitKeyDown'](zx){const {value:{day:zy,month:zz,year:zA}}=this['props'];switch(this['state']['activeSection']){case je['Day']:{if(this['secondInput']){const zB=(0x0,A['zG'])(zy,(0x0,y['UI'])(zC=>{const zD=+(''+zC+zx);return zC<0x3?zD:zC===0x3?Math['min'](zD,0x1f):zx;}));this['onValueChange'](zB,zz,zA),this['selectNextSection'](),this['secondInput']=!0x1;}else this['onValueChange']((0x0,y['G'])(zx),zz,zA),zx>0x3?(this['selectNextSection'](),this['secondInput']=!0x1):this['secondInput']=!0x0;break;}case je['Month']:{if(this['secondInput']){const zC=(0x0,A['zG'])(zz,(0x0,y['UI'])(zD=>{const zE=zD+0x1,zF=+(''+zE+zx)-0x1;return zE<0x1?zF:zE===0x1?Math['min'](zF,0xb):zx-0x1;}));this['onValueChange'](zy,zC,zA),this['selectNextSection'](),this['secondInput']=!0x1;}else zx&&this['onValueChange'](zy,(0x0,y['G'])(zx-0x1),zA),zx>0x1?(this['selectNextSection'](),this['secondInput']=!0x1):this['secondInput']=!0x0;break;}case je['Year']:{if(this['secondInput']){const zD=(0x0,A['zG'])(zA,(0x0,y['UI'])(zE=>zE<0x3e8?+(''+zE+zx):Number((''+zE+zx)['substring'](0x1))));this['onValueChange'](zy,zz,zD);}else this['onValueChange'](zy,zz,(0x0,y['G'])(zx)),this['secondInput']=!0x0;break;}}}};ke=kc([jt['W']],ke);function kg(zx){return typeof zx!='undefined';}const ki=(0x0,q['memo'])(({min:zx,max:zy,onValueChange:zz,value:zA,calendarDict:zB,parentEventTarget:zC,dateFormatType:zD})=>{const zE=(0x0,q['useRef'])(null),[zF,zG]=(0x0,q['useState'])(!0x1),zH=(0x0,q['useCallback'])(zO=>{zE['current']=zO;},[]),zI=(0x0,q['useCallback'])(zO=>{zG(zO);},[zG]),zJ=(0x0,q['useCallback'])(zO=>{zO['from']?zz({'day':y['G'](zO['from']['getDate']()),'month':y['G'](zO['from']['getMonth']()),'year':y['G'](zO['from']['getFullYear']())}):zz({'day':y['YP'],'month':y['YP'],'year':y['YP']});},[zz]),zK=(0x0,q['useCallback'])(zO=>{zF&&(zO&&zO['stopPropagation'](),zI(!0x1));},[zI,zF]),zL=(0x0,q['useMemo'])(()=>(0x0,A['zG'])((0x0,au['gz'])(y['G5'])(zA['day'],zA['month'],zA['year']),y['UI'](([zO,zP,zQ])=>(0x0,at['Z'])(new Date(zP+0x1+'/'+zO+'/'+zQ)))),[zA]),zM=(0x0,q['useContext'])(dd['k']),zN=(0x0,q['useCallback'])(()=>zI(!zF),[zF,zI]);return q['createElement'](ig,null,q['createElement'](ii,null,q['createElement'](ke,{'min':zx,'max':zy,'value':zA,'onValueChange':zz,'innerRef':zH,'dateFormatType':zD})),q['createElement'](il,{'onClick':zN,'icon':q['createElement'](di['a'],null,zM['dateInput']['calendar'])}),q['createElement'](ei['J'],{'parentEventTarget':zC,'anchorRef':zE,'onRequestClose':zK,'opened':zF},q['createElement'](ht,{'value':{'from':y['FS'](zL),'to':void 0x0},'singleMode':!0x0,'min':zx,'max':zy,'onValueChange':zJ,'calendarDict':zB})));}),kl={'AM':'AM','PM':'PM'},km={'Hours':0x0,'Minutes':0x1,'Seconds':0x2,'PeriodType':0x3},kn=0x3b,ko=0x17,kp=0xc,kr='--',ks=ip['w4'],kt=(0x0,y['Eh'])(ir['Eq']),ku=(0x0,y['Eh'])(ks),la=(0x0,ip['n_'])({'hours':kt,'minutes':kt,'seconds':kt,'periodType':ku}),lc=(zx,zy)=>!la['equals'](zx,zy),ld=zx=>zx<0xa?'0'+zx:''+zx,le=zx=>{switch(zx){case kl['AM']:return'am';case kl['PM']:return'pm';}};function lg(zx,zy,zz){return(0x0,A['zG'])(zx,(0x0,y['UI'])(zA=>{const zB=(zA+zy)%(zz+0x1);return zB<0x0?zB+zz+0x1:zB;}),(0x0,y['wp'])(()=>(0x0,y['G'])(zy<0x0?zz:0x0)));}function li(zx){return typeof zx!='undefined';}function ll(zx,zy){switch(zx){case km['PeriodType']:return zy?km['Seconds']:km['Minutes'];case km['Seconds']:return km['Minutes'];case km['Minutes']:return km['Hours'];default:return km['Hours'];}}function lm(zx,zy,zz){switch(zx){case km['Hours']:return km['Minutes'];case km['Minutes']:return zy?km['Seconds']:zz?km['PeriodType']:km['Minutes'];case km['Seconds']:return zz?km['PeriodType']:km['Seconds'];case km['PeriodType']:return km['PeriodType'];default:return km['Hours'];}}function ln(zx){switch((0x0,y['fS'])(()=>'AM')(zx)){case'AM':return(0x0,y['G'])('PM');case'PM':return(0x0,y['G'])('AM');default:}return(0x0,y['G'])('AM');}const lo=(0x0,y['fS'])(()=>kr);var lp=j(0x15e95),lr=j(0x6f69);const ls=B['ZP']['span']`
	cursor: default;
`,lu=B['ZP']['span']`
	cursor: default;
	${zx=>(0x0,ai['Z'])(zx['isActive'])`
  	background-color: var(--dropdown-list_item-selected-text);
  `}
`,ma=B['ZP']['div']`
	padding: var(--spacer-2) 38px var(--spacer-2) var(--spacer-2);
	font-size: var(--font-size-m);

	&:focus-visible {
		outline: 1px solid transparent;
	}
`,mc=B['ZP']['div']`
	${dm['o']} {
		position: absolute;
		right: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		width: var(--time-input-container-width, 28px);
		height: var(--time-input-container-height, 14px);
		padding: var(--time-input-container-padding, 0);
		margin: var(--time-input-container-margin, 1px 1px 1px 0);
		border-radius: var(--time-input-container-bdrs, 0);
		min-width: 0;

		&:nth-of-type(2) {
			top: 0;
			border-top-right-radius: var(--time-input-container-bdrs-2, 4px);
		}

		&:nth-of-type(1) {
			bottom: 0;
			border-bottom-right-radius: var(--time-input-container-bdrs-2, 4px);
		}
	}

	${dm['G']} {
		margin: 0;
		padding: 0;
		width: 8px;
	}

	${lp['Ry']} {
		&:focus-within {
			border-color: var(--input-focused-border);
		}
	}

	${lr['l_']} {
		position: relative;
		display: flex;
		justify-content: flex-end;
		min-width: var(--time-input-container-input-mw, 54px);
		width: var(--time-input-container-input-width, 100%);
		height: var(--time-input-container-input-height, 32px);
		padding: var(--time-input-container-input-padding, 1px);
		border-radius: var(--time-input-container-input-bdrs, 4px);
		background-color: transparent;
		border-width: var(--time-input-container-input-bdw, 1px);
	}
`;var md=Object['defineProperty'],me=Object['getOwnPropertyDescriptor'],mg=Object['getOwnPropertySymbols'],mh=Object['prototype']['hasOwnProperty'],mi=Object['prototype']['propertyIsEnumerable'],ml=(zx,zy,zz)=>zy in zx?md(zx,zy,{'enumerable':!0x0,'configurable':!0x0,'writable':!0x0,'value':zz}):zx[zy]=zz,mm=(zx,zy)=>{for(var zz in zy||(zy={}))mh['call'](zy,zz)&&ml(zx,zz,zy[zz]);if(mg){for(var zz of mg(zy))mi['call'](zy,zz)&&ml(zx,zz,zy[zz]);}return zx;},mn=(zx,zy,zz,zA)=>{for(var zB=zA>0x1?void 0x0:zA?me(zy,zz):zy,zC=zx['length']-0x1,zD;zC>=0x0;zC--)(zD=zx[zC])&&(zB=(zA?zD(zy,zz,zB):zD(zB))||zB);return zA&&zB&&md(zy,zz,zB),zB;};const mo=(0x0,q['memo'])((0x0,q['forwardRef'])((zx,zy)=>q['createElement'](lr['l_'],mm({'ref':zy},zx))));let mp=class extends q['Component']{constructor(){super(...arguments),this['state']={},this['secondInput']=!0x1,this['onHoursMouseDown']=zx=>{this['props']['isDisabled']||(this['setState']({'activeSection':km['Hours']}),this['secondInput']=!0x1,this['correctTimeAndUpdate']());},this['onMinutesMouseDown']=zx=>{this['props']['isDisabled']||(this['setState']({'activeSection':km['Minutes']}),this['secondInput']=!0x1,this['correctTimeAndUpdate']());},this['onSecondsMouseDown']=zx=>{this['props']['isDisabled']||(this['setState']({'activeSection':km['Seconds']}),this['secondInput']=!0x1,this['correctTimeAndUpdate']());},this['onPeriodTypeMouseDown']=()=>{this['props']['isDisabled']||(this['setState']({'activeSection':km['PeriodType']}),this['secondInput']=!0x1,this['correctTimeAndUpdate']());},this['onIncrement']=()=>{this['secondInput']=!0x1,this['step'](0x1);},this['onDecrement']=()=>{this['secondInput']=!0x1,this['step'](-0x1);},this['onClear']=()=>{this['secondInput']=!0x1,this['updateTime'](y['YP'],y['YP'],y['YP'],y['YP']);},this['onFocus']=()=>{this['secondInput']=!0x1,li(this['state']['activeSection'])||this['setState']({'activeSection':km['Hours']});},this['onBlur']=()=>{this['secondInput']=!0x1,this['correctTimeAndUpdate'](),this['setState']({'activeSection':void 0x0});},this['onKeyDown']=zx=>{zx['stopPropagation']();const {activeSection:zy}=this['state'],{withSeconds:zz,withPeriodType:zA}=this['props'],{hours:zB,minutes:zC,seconds:zD,periodType:zE}=this['props']['value'];switch(zx['code']){case'ArrowLeft':{zx['preventDefault'](),this['secondInput']=!0x1,this['correctTimeAndUpdate'](),this['setState']({'activeSection':ll(zy,zz)});break;}case'ArrowRight':{zx['preventDefault'](),this['secondInput']=!0x1,this['correctTimeAndUpdate'](),this['setState']({'activeSection':lm(zy,zz,zA)});break;}case'Delete':case'Backspace':{switch(this['secondInput']=!0x1,zy){case km['Hours']:{this['updateTime'](y['YP'],zC,zD,zE);break;}case km['Minutes']:{this['updateTime'](zB,y['YP'],zD,zE);break;}case km['Seconds']:{this['updateTime'](zB,zC,y['YP'],zE);break;}}break;}default:{const zF=zx['code'],zG=io['sV'][zF],zH=io['X8'][zF];li(zG)?this['handleDigitKeyDown'](zG):li(zH)&&this['handleLetterKeyDown'](zH);}}};}['render'](){const {decrementIcon:zx,incrementIcon:zy,isDisabled:zz,clearIcon:zA,error:zB,value:zC,SteppableInput:zD}=this['props'],{hours:zE,minutes:zF,seconds:zG,periodType:zH}=zC,{withSeconds:zI,withPeriodType:zJ}=this['props'],zK=(0x0,y['pC'])(zE)||(0x0,y['pC'])(zF)?this['onClear']:void 0x0,{activeSection:zL}=this['state'];return q['createElement'](zD,{'isDisabled':zz,'onBlur':this['onBlur'],'error':zB,'onFocus':this['onFocus'],'decrementIcon':zx,'incrementIcon':zy,'clearIcon':zA,'onKeyDown':this['onKeyDown'],'onClear':zK,'onDecrement':this['onDecrement'],'onIncrement':this['onIncrement'],'Input':mo},q['createElement'](ma,{'tabIndex':0x0},q['createElement'](lu,{'isActive':!zz&&zL===km['Hours'],'onMouseDown':this['onHoursMouseDown']},lo((0x0,A['zG'])(zE,(0x0,y['UI'])(ld)))),q['createElement'](ls,null,':'),q['createElement'](lu,{'isActive':!zz&&zL===km['Minutes'],'onMouseDown':this['onMinutesMouseDown']},lo((0x0,A['zG'])(zF,(0x0,y['UI'])(ld)))),zI&&q['createElement'](q['Fragment'],null,q['createElement'](ls,null,':'),q['createElement'](lu,{'isActive':!zz&&zL===km['Seconds'],'onMouseDown':this['onSecondsMouseDown']},lo((0x0,A['zG'])(zG,(0x0,y['UI'])(ld))))),zJ&&q['createElement'](q['Fragment'],null,'\u00a0',q['createElement'](lu,{'isActive':!zz&&zL===km['PeriodType'],'onMouseDown':this['onPeriodTypeMouseDown']},lo((0x0,A['zG'])(zH,(0x0,y['UI'])(le)))))));}['handleLetterKeyDown'](zx){const {hours:zy,minutes:zz,seconds:zA}=this['props']['value'],{activeSection:zB}=this['state'];zB===km['PeriodType']&&(zx===io['X8']['KeyA']?this['updateTime'](zy,zz,zA,(0x0,y['G'])(kl['AM'])):zx===io['X8']['KeyP']&&this['updateTime'](zy,zz,zA,(0x0,y['G'])(kl['PM'])));}['handleDigitKeyDown'](zx){const {activeSection:zy}=this['state'],{withPeriodType:zz=!0x1,withSeconds:zA=!0x1}=this['props'],{hours:zB,minutes:zC,seconds:zD,periodType:zE}=this['props']['value'];switch(zy){case km['Hours']:{if(this['secondInput']&&(0x0,y['pC'])(zB)){let zF;zz?(zB['value']<0x2?zF=Math['min'](+(''+zB['value']+zx),kp):zF=zx,this['updateTime']((0x0,y['G'])(zF),zC,zD,zE),this['setState']({'activeSection':km['Minutes']}),this['secondInput']=!0x1):(zB['value']<0x2?zF=+(''+zB['value']+zx):zB['value']===0x2?zF=Math['min'](+(''+zB['value']+zx),ko):zF=zx,this['updateTime']((0x0,y['G'])(zF),zC,zD,zE),this['setState']({'activeSection':km['Minutes']}),this['secondInput']=!0x1);}else this['updateTime']((0x0,y['G'])(zx),zC,zD,zE),zx>0x2&&!zz?(this['setState']({'activeSection':km['Minutes']}),this['secondInput']=!0x1):zx>0x1&&zz?(this['setState']({'activeSection':km['Minutes']}),this['secondInput']=!0x1):this['secondInput']=!0x0;break;}case km['Minutes']:{if(zA){if(this['secondInput']&&(0x0,y['pC'])(zC)){const zG=+(''+zC['value']+zx);this['updateTime'](zB,(0x0,y['G'])(zG),zD,zE),zA?this['setState']({'activeSection':km['Seconds']}):zz&&this['setState']({'activeSection':km['PeriodType']}),this['updateTime'](zB,(0x0,y['G'])(zG),zD,zE),this['secondInput']=!0x1;}else{const zH=zx;zx>0x5&&(zz||zA)?(zA?this['setState']({'activeSection':km['Seconds']}):zz&&this['setState']({'activeSection':km['PeriodType']}),this['secondInput']=!0x1):this['secondInput']=!0x0,this['updateTime'](zB,(0x0,y['G'])(zH),zD,zE);}}else{let zI;this['secondInput']?zI=(0x0,y['pC'])(zC)?+(''+zC['value']%0xa+zx):zx:(zI=zx,this['secondInput']=!0x0),this['updateTime'](zB,(0x0,y['G'])(zI),zD,zE);}break;}case km['Seconds']:{let zJ;this['secondInput']?zJ=(0x0,y['pC'])(zD)?+(''+zD['value']%0xa+zx):zx:(zJ=zx,this['secondInput']=!0x0),this['updateTime'](zB,zC,(0x0,y['G'])(zJ),zE);break;}}}['step'](zx){const {activeSection:zy}=this['state'],{withPeriodType:zz}=this['props'],{hours:zA,minutes:zB,seconds:zC,periodType:zD}=this['props']['value'];switch(zy){case km['Hours']:{zz?this['updateTime'](lg(zA,zx,kp),zB,zC,zD):this['updateTime'](lg(zA,zx,ko),zB,zC,zD);break;}case km['Minutes']:{this['updateTime'](zA,lg(zB,zx,kn),zC,zD);break;}case km['Seconds']:{this['updateTime'](zA,zB,lg(zC,zx,kn),zD);break;}case km['PeriodType']:{this['updateTime'](zA,zB,zC,ln(zD));break;}}}['updateTime'](zx,zy,zz,zA){const {onValueChange:zB,value:zC}=this['props'],{hours:zD,minutes:zE,seconds:zF,periodType:zG}=zC;lc({'hours':zx,'minutes':zy,'seconds':zz,'periodType':zA},{'hours':zD,'minutes':zE,'seconds':zF,'periodType':zG})&&zB&&zB({'hours':zx,'minutes':zy,'seconds':zz,'periodType':zA});}['correctTimeAndUpdate'](){const {minutes:zx,hours:zy,seconds:zz,periodType:zA}=this['props']['value'],zB=(0x0,A['zG'])(zx,(0x0,y['UI'])(zD=>zD>kn)),zC=(0x0,A['zG'])(zz,(0x0,y['UI'])(zD=>zD>kn));if((0x0,y['WG'])(zB)||(0x0,y['WG'])(zC)){const zD=(0x0,y['WG'])(zB)?(0x0,y['G'])(kn):zx,zE=(0x0,y['WG'])(zC)?(0x0,y['G'])(kn):zz;this['updateTime'](zy,zD,zE,zA);}}};mp=mn([jt['W']],mp);const mr=(0x0,q['memo'])(zx=>{const zy=(0x0,q['useContext'])(dd['k']),{value:zz,onValueChange:zA,withPeriodType:zB,isHideSeconds:zC,isDecrementButtonDisabled:zD,isIncrementButtonDisabled:zE}=zx;return q['createElement'](mc,null,q['createElement'](mp,{'value':zz,'onValueChange':zA,'withSeconds':!zC,'withPeriodType':zB,'SteppableInput':hu['y'],'isIncrementButtonDisabled':zE,'isDecrementButtonDisabled':zD,'incrementIcon':q['createElement'](di['a'],null,zy['stepper']['plus']),'decrementIcon':q['createElement'](di['a'],null,zy['stepper']['minus'])}));});var ms=j(0x165db),mt=j(0x1727d),mu=j(0xfa91),na=Object['defineProperty'],nc=Object['defineProperties'],nd=Object['getOwnPropertyDescriptors'],ne=Object['getOwnPropertySymbols'],ng=Object['prototype']['hasOwnProperty'],ni=Object['prototype']['propertyIsEnumerable'],nl=(zx,zy,zz)=>zy in zx?na(zx,zy,{'enumerable':!0x0,'configurable':!0x0,'writable':!0x0,'value':zz}):zx[zy]=zz,nm=(zx,zy)=>{for(var zz in zy||(zy={}))ng['call'](zy,zz)&&nl(zx,zz,zy[zz]);if(ne){for(var zz of ne(zy))ni['call'](zy,zz)&&nl(zx,zz,zy[zz]);}return zx;},nn=(zx,zy)=>nc(zx,nd(zy));const no=new Date(0x7b2),np=new Date(),nr=Symbol('DRAWINGS_DATE_COORDINATES_SECTION'),ns=(0x0,q['memo'])(zx=>{const {value:zy,onValueChange:zz,withPrice:zA,currentTimezone:zB,instrument:zC,drawingsDict:zD,updateAllPointsPrice:zE}=zx,zF=(0x0,q['useCallback'])((zG,zH)=>(0x0,A['zG'])(zy,z['Wl'](zH,zG),y['g_'](A['Q1'],zz)),[zy,zz]);return q['createElement'](q['Fragment'],null,zy['map']((zG,zH)=>q['createElement'](nt,{'key':'DrawingSettingsCoordinatesGroup_'+zH,'pointIndex':zH,'point':zG,'points':zy,'onValueChange':zz,'updatePoint':zF,'drawingsDict':zD,'withPrice':zA,'instrument':zC,'currentTimezone':zB,'updateAllPointsPrice':zE})));}),nt=(0x0,q['memo'])(zx=>{const {point:zy,updatePoint:zz,pointIndex:zA,drawingsDict:zB,instrument:zC,currentTimezone:zD,withPrice:zE,points:zF,onValueChange:zG,updateAllPointsPrice:zH}=zx,zI=zB['popup']['sections']['coordinates'],zJ=zI['priceLabel'],zK=zI['dateLabel'],zL=zI['timeLabel'],zM=zB['calendar'],{config:zN}=(0x0,q['useContext'])(mt['El']),zO=(0x0,q['useMemo'])(()=>(0x0,mu['p'])(zD,zy['timestamp'])+new Date(zy['timestamp'])['getTimezoneOffset']()*0x3c*0x3e8,[zD,zy['timestamp']]),zP=(0x0,q['useMemo'])(()=>new Date(zy['timestamp']+zO),[zy['timestamp'],zO]),zQ=(0x0,q['useCallback'])(zV=>(0x0,A['zG'])(zH,y['ij'],y['g_'](()=>zz(nn(nm({},zy),{'value':zV}),zA),()=>(0x0,A['zG'])(zF,z['UI'](zW=>nn(nm({},zW),{'value':zV})),zG))),[zG,zy,zA,zF,zz,zH]),zR=(0x0,q['useCallback'])(zV=>(0x0,A['zG'])(Y(zP,zV),zW=>zW['getTime']()-zO,zW=>zz(nn(nm({},zy),{'timestamp':zW}),zA)),[zy,zA,zz,zO,zP]),zS=(0x0,q['useCallback'])(zV=>(0x0,A['zG'])(aa(zP,zV),zW=>zW['getTime']()-zO,zW=>zz(nn(nm({},zy),{'timestamp':zW}),zA)),[zy,zA,zz,zP,zO]),zT=(0x0,q['useMemo'])(()=>zC!==void 0x0?Q['G']['getPriceIncrement'](zy['value'],zC['priceIncrements']):0x0,[zy['value'],zC]),zU=(0x0,q['useMemo'])(()=>Q['G']['calculatePrecision'](zT),[zT]);return q['createElement'](ms['Ch'],null,zV=>{var zW;return q['createElement'](ao,null,zE&&q['createElement'](ar,{'label':zJ},q['createElement'](as['l'],{'min':0x0,'max':Number['POSITIVE_INFINITY'],'step':zT,'value':zy['value'],'onValueChange':zQ,'formatter':ac(zU)})),q['createElement'](ar,{'label':zK},q['createElement'](ki,{'value':V(zP),'min':no,'max':np,'onValueChange':zS,'calendarDict':zM,'parentEventTarget':zV,'dateFormatType':(zW=zN['dateFormatters'])==null?void 0x0:zW['dateInput']})),q['createElement'](ar,{'label':zL},q['createElement'](mr,{'value':X(zP),'onValueChange':zR})));});});var nu=j(0x3898);const oa=B['ZP']['div']`
	padding: 0;
	margin-bottom: var(--spacer-5);
`,oc=B['ZP']['div']`
	margin: 0 0 var(--spacer-4);
	padding: 0;
	border: 0;
	vertical-align: baseline;
	color: var(--form-title-text);
	font-weight: bold;
	letter-spacing: 0.8px;
	text-transform: uppercase;
`,od=B['ZP']['div']`
	display: flex;
	flex-direction: column;
`,og=B['ZP']['div']`
	display: flex;
	flex-direction: row;

	& > * {
		margin-right: var(--spacer-6);
	}

	& > *:last-child {
		margin-right: 0;
	}
`,oi=(0x0,q['memo'])(zx=>{const {title:zy,children:zz,className:zA}=zx;return q['createElement'](oa,{'className':zA},q['createElement'](oc,null,zy),q['createElement'](od,null,zz));});var ol=j(0x15aae),om=j(0x6bca);const on=(0x0,B['ZP'])(om['L'])``,oo=(0x0,B['ZP'])(ei['J'])`
	border: none;
	margin-top: 3px;
	top: 2px;
`,op=B['ZP']['div']`
	width: 100px;
	padding: var(--spacer-1);
	align-items: center;
	display: flex;
	flex-direction: column;
`,or=(0x0,B['ZP'])(eo['v'])`
	width: 100%;
	align-items: center;
	display: flex;
	flex-direction: column;
	margin: 0;
	padding: 0;
	list-style: none;
	position: relative;
`,os=(0x0,B['ZP'])(eh['s'])`
	width: 100%;
	height: 24px;
	margin: 0;
	padding: 0;
	flex-grow: 1;
	box-shadow: inherit;
`,ot=B['ZP']['div']`
	width: 100%;
	height: 24px;
	display: flex;
	align-items: center;
	justify-content: flex-start;
`,ou=B['ZP']['span']`
	display: block;
	width: 56px;
	height: ${zx=>zx['lineWidth']+'px'};
	background: var(--icon-primary-default-bg);
`,pa=B['ZP']['div']`
	height: 20px;
	width: 20px;
	padding: 0 var(--spacer-1);
`,pc=B['ZP']['span']`
	display: block;
	width: 92px;
	height: 1px;
	background: var(--dropdown-list_item-divider-bg);
	border-radius: 1px;
	margin: 4px 0;
`,pd=B['ZP']['span']`
	width: 56px;
	color: var(--dropdown-list_item-default-text);
	font-size: var(--font-size-m);
	line-height: var(--line-height-s-px);
	font-family: var(--font-main-semibold);
`;function pe(zx){switch(zx){case'solid':return[0x0,0x0];case'dashed':return[0x6,0x6];}}function pg(zx){const zy=z['Eh'](ir['Eq']);return zy['equals'](zx,[0x0,0x0])?'solid':zy['equals'](zx,[0x6,0x6])?'dashed':'solid';}function pi(zx){switch(zx){case'thin':return 0x1;case'normal':return 0x2;case'semibold':return 0x3;case'bold':return 0x4;}}function pl(zx){switch(zx){case 0x1:return'thin';case 0x2:return'normal';case 0x3:return'semibold';case 0x4:return'bold';default:return'thin';}}var pm=j(0x603b);const pn=(0x0,B['ZP'])(pm['z'])`
	padding: var(--anchor-button-padding, 3px 4px 3px 4px);
	min-width: 0;
	width: var(--line-anchor-button-width, 60px);
	border: 0;
	height: var(--line-anchor-button-height, 32px);
	border-radius: var(--line-anchor-button-bdrs, 4px);
	background-color: var(--dropdown_secondary-bg);
	color: var(--modal-window-text-color);

	&:hover {
		background-color: var(--dropdown_secondary-list_item_hovered-bg);
	}

	&:focus {
		background: var(--button-tertiaty-pressed);
	}

	&:active {
		background: var(--button-tertiaty-pressed);
	}
`,po=B['ZP']['div']`
	width: var(--line-anchor-button-icon-width, 20px);
	height: var(--line-anchor-button-icon-height, 14px);
	& > svg {
		color: inherit;
	}
`,pp=B['ZP']['div']`
	display: flex;
	align-items: center;
	flex-wrap: nowrap;
	justify-content: space-between;
`,pr=B['ZP']['div']`
	position: relative;
	padding-left: 34px;
`,ps=B['ZP']['div']`
	&::after {
		content: '';
		position: absolute;
		width: 26px;
		top: 50%;
		left: 50%;
		transform: translateY(-50%) translateX(-50%);
	}
`,pu=B['ZP']['div']`
	${ps} {
		&::after {
			${({lineStyle:zx})=>{switch(zx){case'solid-thin':return{'background-image':'linear-gradient(to\x20right,\x20var(--icon-primary-default-bg)\x20100%,\x20transparent\x20100%)','background-size':'100%\x205px','height':'1px'};case'dashed-thin':return{'background-image':'linear-gradient(to\x20right,\x20var(--icon-primary-default-bg)\x2070%,\x20transparent\x2070%)','background-size':'7px\x205px','height':'1px'};case'dotted-thin':return{'background-image':'linear-gradient(to\x20right,\x20var(--icon-primary-default-bg)\x2050%,\x20transparent\x2050%)','background-size':'4px\x205px','height':'1px'};case'solid-normal':return{'background-image':'linear-gradient(to\x20right,\x20var(--icon-primary-default-bg)\x20100%,\x20transparent\x20100%)','background-size':'100%\x205px','height':'2px'};case'dashed-normal':return{'background-image':'linear-gradient(to\x20right,\x20var(--icon-primary-default-bg)\x2070%,\x20transparent\x2070%)','background-size':'10px\x205px','height':'2px'};case'dotted-normal':return{'background-image':'linear-gradient(to\x20right,\x20var(--icon-primary-default-bg)\x2050%,\x20transparent\x2050%)','background-size':'6px\x205px','height':'2px'};case'solid-semibold':return{'background-image':'linear-gradient(to\x20right,\x20var(--icon-primary-default-bg)\x20100%,\x20transparent\x20100%)','background-size':'100%\x205px','height':'3px'};case'dashed-semibold':return{'background-image':'linear-gradient(to\x20right,\x20var(--icon-primary-default-bg)\x2070%,\x20transparent\x2070%)','background-size':'16px\x205px','height':'3px'};case'dotted-semibold':return{'background-image':'linear-gradient(to\x20right,\x20var(--icon-primary-default-bg)\x2050%,\x20transparent\x2050%)','background-size':'10px\x205px','height':'3px'};case'solid-bold':return{'background-image':'linear-gradient(to\x20right,\x20var(--icon-primary-default-bg)\x20100%,\x20transparent\x20100%)','background-size':'100%\x205px','height':'4px'};case'dashed-bold':return{'background-image':'linear-gradient(to\x20right,\x20var(--icon-primary-default-bg)\x2070%,\x20transparent\x2070%)','background-size':'16px\x205px','height':'4px'};case'dotted-bold':return{'background-image':'linear-gradient(to\x20right,\x20var(--icon-primary-default-bg)\x2050%,\x20transparent\x2050%)','background-size':'10px\x205px','height':'4px'};default:return{};}}}
		}
	}
`,qa=(0x0,q['memo'])((0x0,q['forwardRef'])((zx,zy)=>{const {onClick:zz,children:zA,className:zB,lineDash:zC,lineWidth:zD}=zx,zE=(0x0,q['useContext'])(dd['k']),zF=zC+'-'+zD;return q['createElement'](pn,{'className':zB,'ref':zy,'onClick':zz},q['createElement'](pp,null,q['createElement'](pr,null,q['createElement'](pu,{'lineStyle':zF},q['createElement'](ps,null))),q['createElement'](po,null,q['createElement'](di['a'],{'width':0xc,'height':0xc},zE['lineStylePicker']['arrow']))),zA);}));qa['displayName']='LineStyleAnchor';var qc=Object['defineProperty'],qd=Object['defineProperties'],qe=Object['getOwnPropertyDescriptors'],qg=Object['getOwnPropertySymbols'],qi=Object['prototype']['hasOwnProperty'],ql=Object['prototype']['propertyIsEnumerable'],qm=(zx,zy,zz)=>zy in zx?qc(zx,zy,{'enumerable':!0x0,'configurable':!0x0,'writable':!0x0,'value':zz}):zx[zy]=zz,qn=(zx,zy)=>{for(var zz in zy||(zy={}))qi['call'](zy,zz)&&qm(zx,zz,zy[zz]);if(qg){for(var zz of qg(zy))ql['call'](zy,zz)&&qm(zx,zz,zy[zz]);}return zx;},qo=(zx,zy)=>qd(zx,qe(zy)),qp=(zx,zy)=>{var zz={};for(var zA in zx)qi['call'](zx,zA)&&zy['indexOf'](zA)<0x0&&(zz[zA]=zx[zA]);if(zx!=null&&qg){for(var zA of qg(zx))zy['indexOf'](zA)<0x0&&ql['call'](zx,zA)&&(zz[zA]=zx[zA]);}return zz;};const qr=['thin','normal','semibold','bold'],qs=(0x0,q['memo'])(zx=>{const zy=zx,{value:zz,onValueChange:zA,isDisabled:zB,Anchor:zC=qa}=zy,zD=qp(zy,['value','onValueChange','isDisabled','Anchor']),[zE,zF]=(0x0,q['useState'])(!0x1),zG=(0x0,q['useContext'])(dd['k']),{localization:zH}=(0x0,q['useContext'])(O['E']),zI=(0x0,q['useCallback'])(zN=>{typeof zN=='boolean'&&zF(zN);},[]);function zJ(zN){return qr['some'](zO=>zO===zN);}const zK=(0x0,q['useCallback'])(zN=>{if(zJ(zN)){const zO={'lineWidth':zN,'lineDash':zz['lineDash']};zA(zO),zF(!0x1);}},[zz,zA]),zL=(0x0,q['useCallback'])(zN=>{const zO=zN==='dashed'?'solid':'dashed',zP={'lineWidth':zz['lineWidth'],'lineDash':zO};zA(zP),zF(!0x1);},[zz['lineWidth'],zA]),zM=(0x0,q['useMemo'])(()=>(0x0,q['forwardRef'])((zN,zO)=>{const {children:zP,onClick:zQ}=zN;return q['createElement'](zC,{'isDisabled':zB,'lineDash':zz['lineDash'],'lineWidth':zz['lineWidth'],'ref':zO,'onClick':zQ},zP);}),[zz['lineDash'],zz['lineWidth'],zC,zB]);return q['createElement'](on,qo(qn({},zD),{'Anchor':zM,'onToggle':zI,'isOpened':zE,'anchorAdditionalProps':{'lineWidth':zz['lineWidth'],'lineDash':zz['lineDash']}}),!zE&&q['createElement']('span',null,zz['lineWidth']),zE&&q['createElement'](op,null,q['createElement'](or,{'onItemSelect':zK},qr['map'](zN=>{const zO=zN===zz['lineWidth'];return q['createElement'](os,{'key':zN,'value':zN},q['createElement'](ot,null,q['createElement'](pa,null,zO&&q['createElement'](di['a'],null,zG['lineStylePicker']['tick'])),q['createElement'](ou,{'lineWidth':pi(zN)})));})),q['createElement'](pc,null),q['createElement'](or,{'onItemSelect':zL},q['createElement'](os,{'value':zz['lineDash']},q['createElement'](ot,null,q['createElement'](pa,null,zz['lineDash']==='dashed'&&q['createElement'](di['a'],null,zG['lineStylePicker']['tick'])),q['createElement'](pd,null,zH['components']['lineStylePicker']['dashed']))))));});qs['displayName']='LineStylePicker';var qt=j(0x2e07),qu=j(0x620),qK=Object['defineProperty'],qL=Object['defineProperties'],qM=Object['getOwnPropertyDescriptors'],qN=Object['getOwnPropertySymbols'],qO=Object['prototype']['hasOwnProperty'],qP=Object['prototype']['propertyIsEnumerable'],qQ=(zx,zy,zz)=>zy in zx?qK(zx,zy,{'enumerable':!0x0,'configurable':!0x0,'writable':!0x0,'value':zz}):zx[zy]=zz,qR=(zx,zy)=>{for(var zz in zy||(zy={}))qO['call'](zy,zz)&&qQ(zx,zz,zy[zz]);if(qN){for(var zz of qN(zy))qP['call'](zy,zz)&&qQ(zx,zz,zy[zz]);}return zx;},qS=(zx,zy)=>qL(zx,qM(zy)),qT=(zx,zy)=>{var zz={};for(var zA in zx)qO['call'](zx,zA)&&zy['indexOf'](zA)<0x0&&(zz[zA]=zx[zA]);if(zx!=null&&qN){for(var zA of qN(zx))zy['indexOf'](zA)<0x0&&qP['call'](zx,zA)&&(zz[zA]=zx[zA]);}return zz;};const qU=(0x0,q['memo'])(zx=>{var zy;const zz=zx,{value:zA,onValueChange:zB,palette:zC,leadingLabel:zD,className:zE,children:zF,parentEventTarget:zG}=zz,zH=qT(zz,['value','onValueChange','palette','leadingLabel','className','children','parentEventTarget']),zI=(0x0,q['useCallback'])(zM=>zB(qS(qR({},zA),{'lineColor':zM})),[zB,zA]),zJ=(0x0,q['useCallback'])(zM=>zB(qS(qR({},zA),{'lineWidth':pi(zM['lineWidth']),'lineDash':pe(zM['lineDash'])})),[zB,zA]),zK=(0x0,q['useMemo'])(()=>({'lineWidth':pl(zA['lineWidth']),'lineDash':pg(zA['lineDash'])}),[zA['lineWidth'],zA['lineDash']]),zL=(zy=(0x0,qt['IW'])(['ColorPickerComponent']))!=null?zy:qu['h'];return q['createElement'](ao,qR({'label':zD,'className':zE},zH),q['createElement'](ar,null,q['createElement'](zL,{'parentEventTarget':zG,'palette':zC,'value':zA['lineColor'],'onValueChange':zI})),q['createElement'](ar,null,q['createElement'](qs,{'value':zK,'Anchor':qa,'onValueChange':zJ,'parentEventTarget':zG})),zF);});qU['displayName']='LineStyle';var qV=Object['defineProperty'],qW=Object['getOwnPropertySymbols'],qX=Object['prototype']['hasOwnProperty'],qY=Object['prototype']['propertyIsEnumerable'],qZ=(zx,zy,zz)=>zy in zx?qV(zx,zy,{'enumerable':!0x0,'configurable':!0x0,'writable':!0x0,'value':zz}):zx[zy]=zz,r0=(zx,zy)=>{for(var zz in zy||(zy={}))qX['call'](zy,zz)&&qZ(zx,zz,zy[zz]);if(qW){for(var zz of qW(zy))qY['call'](zy,zz)&&qZ(zx,zz,zy[zz]);}return zx;},r1=(zx,zy)=>{var zz={};for(var zA in zx)qX['call'](zx,zA)&&zy['indexOf'](zA)<0x0&&(zz[zA]=zx[zA]);if(zx!=null&&qW){for(var zA of qW(zx))zy['indexOf'](zA)<0x0&&qY['call'](zx,zA)&&(zz[zA]=zx[zA]);}return zz;};function r2(zx){const {lineStyleLens:zy}=(0x0,q['useMemo'])(()=>({'lineStyleLens':nu['Ri']['fromPath']()(['properties','line'])}),[]),zz=zx,{value:zA,onValueChange:zB,className:zC}=zz,zD=r1(zz,['value','onValueChange','className']),zE=zA['properties'],zF=(0x0,q['useCallback'])((zH,zI)=>zB(zH['set'](zI)(zA)),[zA,zB]),zG=(0x0,q['useCallback'])(zH=>zF(zy,zH),[zF,zy]);return q['createElement'](ms['Ch'],null,zH=>q['createElement'](ao,{'className':zC},q['createElement'](qU,r0({'value':zE['line'],'onValueChange':zG,'parentEventTarget':zH,'noGap':!0x0,'noGapItems':!0x0},zD))));}const r3=(0x0,ol['l'])(r2),r4=nu['Ri']['fromPath']()(['keyPoints']),r5=(0x0,q['memo'])(zx=>{const {value:zy,onValueChange:zz,palette:zA,currentTimezone:zB,instrument:zC,drawingsDict:zD}=zx,zE=zD['popup']['sections']['coordinates'],zF=zD['popup']['sections']['style'],zG=(0x0,q['useCallback'])((zI,zJ)=>zz(zI['set'](zJ)(zy)),[zy,zz]),zH=(0x0,q['useCallback'])(zI=>zG(r4,zI),[zG]);return q['createElement'](q['Fragment'],null,q['createElement'](oi,{'title':zE['title']},q['createElement'](ns,{'value':zy['keyPoints'],'onValueChange':zH,'instrument':zC,'drawingsDict':zD,'currentTimezone':zB,'withPrice':!0x0})),q['createElement'](oi,{'title':zF['title']},q['createElement'](r3,{'value':zy,'onValueChange':zz,'palette':zA})));});var r6=j(0x9295);const r7=B['ZP']['label']`
	display: flex;
	align-items: center;
	color: var(--checkbox-default-text);
	height: 20px;
	padding: var(--spacer-05) 0;
	cursor: pointer;
	user-select: none;

	span:nth-of-type(2) {
		padding-left: var(--spacer-2);
	}
`,r8=(0x0,B['ZP'])(em['v'])`
	${en['As']} {
		color: var(--icon-secondary-default-bg);
		width: 3px;
		height: auto;
	}
`,r9=(0x0,B['ZP'])(eh['s'])`
	padding: 5px 7px;
	margin: 0;
`,ra=nu['Ri']['fromProp']()('visible'),rb=nu['Ri']['fromProps']()(['lineColor','lineDash','lineWidth']),rc=nu['Ri']['fromProp']()('coefficient'),rd=(0x0,q['memo'])(zx=>{const {palette:zy,value:zz,onValueChange:zA,step:zB=0.001,precision:zC=0x3,multiplier:zD=0x1}=zx,zE=(0x0,q['useCallback'])((zH,zI)=>(0x0,A['zG'])(zz,z['cq'](zI,ra['set'](zH)),y['g_'](A['Q1'],zA)),[zA,zz]),zF=(0x0,q['useCallback'])((zH,zI)=>(0x0,A['zG'])(zz,z['cq'](zI,rb['set'](zH)),y['g_'](A['Q1'],zA)),[zz,zA]),zG=(0x0,q['useCallback'])((zH,zI)=>(0x0,A['zG'])(zz,z['cq'](zI,rc['set'](zH)),y['g_'](A['Q1'],zA)),[zz,zA]);return q['createElement'](ms['Ch'],null,zH=>q['createElement'](ao,{'vertical':!0x0},zz['map']((zI,zJ)=>q['createElement'](re,{'key':'fibonacci-style-group-item-'+zJ,'fibonacciPart':zI,'index':zJ,'step':zB,'precision':zC,'multiplier':zD,'palette':zy,'parentEventTarget':zH,'changeVisibility':zE,'changeLineStyle':zF,'changeCoefficient':zG}))));}),re=(0x0,q['memo'])(zx=>{const {fibonacciPart:zy,index:zz,step:zA,precision:zB,multiplier:zC,palette:zD,parentEventTarget:zE,changeVisibility:zF,changeLineStyle:zG,changeCoefficient:zH}=zx,zI=(0x0,q['useCallback'])(zM=>zF(!!zM,zz),[zF,zz]),zJ=(0x0,q['useCallback'])(zM=>zG(zM,zz),[zG,zz]),zK=(0x0,q['useCallback'])(zM=>zH(zM/zC,zz),[zH,zC,zz]),zL=(0x0,q['useMemo'])(()=>zy['coefficient']*zC,[zC,zy['coefficient']]);return q['createElement'](ao,{'noGapItems':!0x0},q['createElement'](ar,null,q['createElement']('label',null,q['createElement'](r6['X'],{'value':zy['visible'],'onValueChange':zI}))),q['createElement'](ar,null,q['createElement'](as['l'],{'min':Number['NEGATIVE_INFINITY'],'max':Number['POSITIVE_INFINITY'],'step':zA,'value':zL,'onValueChange':zK,'formatter':ac(zB)})),q['createElement'](qU,{'noGap':!0x0,'noGapItems':!0x0,'value':zy,'palette':zD,'onValueChange':zJ,'parentEventTarget':zE}));});var rf=Object['defineProperty'],rg=Object['getOwnPropertySymbols'],rh=Object['prototype']['hasOwnProperty'],ri=Object['prototype']['propertyIsEnumerable'],rj=(zx,zy,zz)=>zy in zx?rf(zx,zy,{'enumerable':!0x0,'configurable':!0x0,'writable':!0x0,'value':zz}):zx[zy]=zz,rk=(zx,zy)=>{for(var zz in zy||(zy={}))rh['call'](zy,zz)&&rj(zx,zz,zy[zz]);if(rg){for(var zz of rg(zy))ri['call'](zy,zz)&&rj(zx,zz,zy[zz]);}return zx;},rl=(zx,zy)=>{var zz={};for(var zA in zx)rh['call'](zx,zA)&&zy['indexOf'](zA)<0x0&&(zz[zA]=zx[zA]);if(zx!=null&&rg){for(var zA of rg(zx))zy['indexOf'](zA)<0x0&&ri['call'](zx,zA)&&(zz[zA]=zx[zA]);}return zz;};function rm(zx){const zy=zx,{applyToAll:zz,drawingsDict:zA}=zy,zB=rl(zy,['applyToAll','drawingsDict']),zC=zA['popup']['sections']['style'];return q['createElement'](r3,rk({'leadingLabel':zC['trendlineColorPicker']},zB),q['createElement'](ar,null,q['createElement'](L['z'],{'onClick':zz,'isFlat':!0x0},zC['applyToAll'])));}const rn=(0x0,ol['l'])(rm);var ro=j(0x7e79),rp=j['n'](ro),rq=j(0x62d4);const rr=B['ZP']['div']`
	position: relative;
	height: 20px;
	z-index: 2;
	background-color: ${zx=>zx['color']};
	border-radius: 4px;
`,rs=(0x0,B['ZP'])(L['z'])`
	position: relative;
	width: 20px;
	height: 21px;
	min-width: 20px;
	padding: 0;

	&:hover {
		background: var(--dropdown-list_item-hovered-bg);
	}

	${dn['J']} {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 1;
		border-radius: 4px;
	}
`,rt=B['ZP']['div']`
	width: 20px;
	height: 20px;
`;var ru=j(0x12e45);const rv=(0x0,q['memo'])((0x0,q['forwardRef'])((zx,zy)=>{const {children:zz,onClick:zA,additionalProps:zB,className:zC}=zx;return q['createElement'](rs,{'ref':zy,'aria-labelledby':zB==null?void 0x0:zB['ariaLabelledBy'],'onClick':zA,'className':zC,'disabled':zB?zB['disabled']:!0x1},q['createElement'](rt,null,zB&&q['createElement'](q['Fragment'],null,q['createElement'](ru['q'],null),q['createElement'](rr,{'color':zB==null?void 0x0:zB['color']}))),zz);}));rv['displayName']='ColorPickerSquareAnchor';var rw=Object['defineProperty'],rx=Object['defineProperties'],ry=Object['getOwnPropertyDescriptors'],rz=Object['getOwnPropertySymbols'],rA=Object['prototype']['hasOwnProperty'],rB=Object['prototype']['propertyIsEnumerable'],rC=(zx,zy,zz)=>zy in zx?rw(zx,zy,{'enumerable':!0x0,'configurable':!0x0,'writable':!0x0,'value':zz}):zx[zy]=zz,rD=(zx,zy)=>{for(var zz in zy||(zy={}))rA['call'](zy,zz)&&rC(zx,zz,zy[zz]);if(rz){for(var zz of rz(zy))rB['call'](zy,zz)&&rC(zx,zz,zy[zz]);}return zx;},rE=(zx,zy)=>rx(zx,ry(zy));const rF=0.2,rG=(0x0,q['memo'])(zx=>{const {value:zy,onValueChange:zz,children:zA}=zx,[zB,zC]=(0x0,q['useState'])(0.2),zD=(0x0,q['useCallback'])(zG=>{zG?zz(rE(rD({},zy),{'opacity':zB})):(zC(zy['opacity']||rF),zz(rE(rD({},zy),{'opacity':0x0})));},[zB,zz,zy]),zE=(0x0,q['useCallback'])(zG=>{zz(rE(rD({},zy),{'fillStyle':zG,'opacity':rp()['rgb'](zG)['alpha']()}));},[zz,zy]),zF=(0x0,q['useMemo'])(()=>zy['opacity']===0x0,[zy['opacity']]);return zA({'isTransparent':zF,'updateBackgroundColor':zE,'updateFillBackground':zD});}),rH=(0x0,q['memo'])(zx=>{var zy;const {drawingsDict:zz,palette:zA,value:zB,showBackgroundCheckbox:zC,renderWithWrap:zD,parentEventTarget:zE,className:zF,disableBottomMargin:zG}=zx,zH=(0x0,q['useMemo'])(()=>rp()['rgb'](zB['fillStyle']||'')['alpha']((0x0,A['zG'])(y['ij'](zB['opacity']),y['fS'](()=>0x0)))['string'](),[zB['fillStyle'],zB['opacity']]),zI=(zy=(0x0,qt['IW'])(['ColorPickerComponent']))!=null?zy:qu['h'];return q['createElement'](rG,rD({},zx),({isTransparent:zJ,updateBackgroundColor:zK,updateFillBackground:zL})=>q['createElement'](ao,{'disableMargin':zG,'className':zF},q['createElement'](ar,null,zD?q['createElement'](zI,{'palette':zA,'value':zH,'onValueChange':zK,'Anchor':rv,'parentEventTarget':zE}):q['createElement'](rJ,null,q['createElement'](zI,{'palette':zA,'value':zH,'onValueChange':zK,'parentEventTarget':zE}))),zC&&q['createElement'](ar,null,q['createElement'](r7,null,q['createElement'](r6['X'],{'value':!zJ,'onValueChange':zL}),q['createElement']('span',null,zz['popup']['sections']['background']['title'])))));}),rI=(0x0,q['memo'])(zx=>{const {drawingsDict:zy,value:zz,onValueChange:zA}=zx,zB=(0x0,q['useCallback'])(zD=>{const zE=zD/0x64;zA(rE(rD({},zz),{'opacity':zE}));},[zA,zz]),zC=(zz['opacity']===void 0x0?rF:zz['opacity'])*0x64;return q['createElement'](rG,rD({},zx),({isTransparent:zD,updateFillBackground:zE})=>q['createElement'](ao,null,q['createElement'](ar,null,q['createElement'](r7,null,q['createElement'](r6['X'],{'value':!zD,'onValueChange':zE}),q['createElement']('span',null,zy['popup']['sections']['background']['title']))),q['createElement'](ar,null,q['createElement'](rq['W'],{'value':zC,'onChange':zB}))));}),rJ=B['ZP']['div']``;function rK(zx){const {backgroundLens:zy}=(0x0,q['useMemo'])(()=>({'backgroundLens':nu['Ri']['fromPath']()(['properties','background'])}),[]),{value:zz,onValueChange:zA,drawingsDict:zB}=zx,zC=zz['properties'],zD=(0x0,q['useCallback'])((zF,zG)=>zA(zF['set'](zG)(zz)),[zz,zA]),zE=(0x0,q['useCallback'])(zF=>zD(zy,zF),[zD,zy]);return q['createElement'](ms['Ch'],null,zF=>q['createElement'](rI,{'drawingsDict':zB,'onValueChange':zE,'value':zC['background'],'parentEventTarget':zF}));}const rL=(0x0,ol['l'])(rK);var rM=Object['defineProperty'],rN=Object['getOwnPropertySymbols'],rO=Object['prototype']['hasOwnProperty'],rP=Object['prototype']['propertyIsEnumerable'],rQ=(zx,zy,zz)=>zy in zx?rM(zx,zy,{'enumerable':!0x0,'configurable':!0x0,'writable':!0x0,'value':zz}):zx[zy]=zz,rR=(zx,zy)=>{for(var zz in zy||(zy={}))rO['call'](zy,zz)&&rQ(zx,zz,zy[zz]);if(rN){for(var zz of rN(zy))rP['call'](zy,zz)&&rQ(zx,zz,zy[zz]);}return zx;},rS=(zx,zy)=>{var zz={};for(var zA in zx)rO['call'](zx,zA)&&zy['indexOf'](zA)<0x0&&(zz[zA]=zx[zA]);if(zx!=null&&rN){for(var zA of rN(zx))zy['indexOf'](zA)<0x0&&rP['call'](zx,zA)&&(zz[zA]=zx[zA]);}return zz;};function rT(zx){const {showCoeffLens:zy}=(0x0,q['useMemo'])(()=>({'showCoeffLens':nu['Ri']['fromPath']()(['properties','labels','showCoefficient'])}),[]),zz=zx,{value:zA,onValueChange:zB,className:zC,drawingsDict:zD}=zz,zE=rS(zz,['value','onValueChange','className','drawingsDict']),zF=zA['properties'],zG=zD['popup']['sections']['labels'],zH=(0x0,q['useCallback'])((zJ,zK)=>zB(zJ['set'](zK)(zA)),[zA,zB]),zI=(0x0,q['useCallback'])(zJ=>zH(zy,!!zJ),[zH,zy]);return q['createElement'](ao,rR({'className':zC},zE),q['createElement'](ar,null,q['createElement'](r7,null,q['createElement'](r6['X'],{'value':zF['labels']['showCoefficient'],'onValueChange':zI}),q['createElement']('span',null,zG['coefficientCheckbox']))));}const rU=(0x0,ol['l'])(rT);var rV=j(0x14223);const rW=nu['Ri']['fromPath'](),rX=rW(['properties','circles']),rY=rW(['keyPoints']),rZ=rW(['properties','halfMode']),s0=nu['Ri']['fromProp']()('line')['composeLens'](nu['Ri']['fromProps']()(['lineColor','lineDash','lineWidth'])),s1=(0x0,q['memo'])(zx=>{const {value:zy,onValueChange:zz,palette:zA,instrument:zB,currentTimezone:zC,drawingsDict:zD}=zx,zE=zy['properties'],zF=zD['popup']['sections']['style'],zG=zD['popup']['sections']['labels'],zH=zD['popup']['sections']['coordinates'],zI=(0x0,q['useCallback'])((zP,zQ)=>zz(zP['set'](zQ)(zy)),[zy,zz]),zJ=(0x0,q['useCallback'])(zP=>zI(rY,zP),[zI]),zK=(0x0,q['useCallback'])(zP=>zI(rX,zP),[zI]),zL=(0x0,q['useCallback'])(zP=>zI(rZ,!zP),[zI]),zM=(0x0,q['useCallback'])(()=>(0x0,A['zG'])(zE['circles'],z['UI'](s0['set']({'lineWidth':zE['line']['lineWidth'],'lineColor':zE['line']['lineColor'],'lineDash':zE['line']['lineDash']})),zK),[zK,zE]),zN=(0x0,q['useCallback'])(zP=>zI(rX,(0x0,rV['IM'])(zP)),[zI]),zO=(0x0,q['useMemo'])(()=>(0x0,rV['s3'])(zE['circles']),[zE['circles']]);return q['createElement'](q['Fragment'],null,q['createElement'](oi,{'title':zH['title']},q['createElement'](ns,{'value':zy['keyPoints'],'onValueChange':zJ,'instrument':zB,'drawingsDict':zD,'currentTimezone':zC,'withPrice':!0x0})),q['createElement'](oi,{'title':zG['title']},q['createElement'](rU,{'value':zy,'onValueChange':zz,'drawingsDict':zD})),q['createElement'](oi,{'title':zF['title']},q['createElement'](rn,{'value':zy,'onValueChange':zz,'palette':zA,'drawingsDict':zD,'applyToAll':zM}),q['createElement'](rd,{'value':zO,'onValueChange':zN,'palette':zA}),q['createElement'](rL,{'value':zy,'onValueChange':zz,'drawingsDict':zD})),q['createElement'](oi,{'title':zD['popup']['sections']['extend']['title']},q['createElement'](ao,{'vertical':!0x0},q['createElement'](ar,null,q['createElement'](r7,null,q['createElement'](r6['X'],{'value':!zy['properties']['halfMode'],'onValueChange':zL}),q['createElement']('span',null,zD['popup']['sections']['gann']['fullCircles']))))));});var s2=Object['defineProperty'],s3=Object['defineProperties'],s4=Object['getOwnPropertyDescriptors'],s5=Object['getOwnPropertySymbols'],s6=Object['prototype']['hasOwnProperty'],s7=Object['prototype']['propertyIsEnumerable'],s8=(zx,zy,zz)=>zy in zx?s2(zx,zy,{'enumerable':!0x0,'configurable':!0x0,'writable':!0x0,'value':zz}):zx[zy]=zz,s9=(zx,zy)=>{for(var zz in zy||(zy={}))s6['call'](zy,zz)&&s8(zx,zz,zy[zz]);if(s5){for(var zz of s5(zy))s7['call'](zy,zz)&&s8(zx,zz,zy[zz]);}return zx;},sa=(zx,zy)=>s3(zx,s4(zy));const sb=nu['Ri']['fromPath'](),sc=sb(['keyPoints']),sd=sb(['properties','rays']),se=(0x0,q['memo'])(zx=>{const {value:zy,onValueChange:zz,palette:zA,instrument:zB,currentTimezone:zC,drawingsDict:zD}=zx,zE=zy['properties'],zF=zD['popup']['sections']['labels'],zG=zD['popup']['sections']['style'],zH=zD['popup']['sections']['coordinates'],zI=(0x0,q['useCallback'])((zM,zN)=>zz(zM['set'](zN)(zy)),[zz,zy]),zJ=(0x0,q['useCallback'])(zM=>zI(sc,zM),[zI]),zK=(0x0,q['useCallback'])(()=>(0x0,A['zG'])(zE['rays'],z['UI'](zM=>sa(s9({},zM),{'lineWidth':zE['line']['lineWidth'],'lineColor':zE['line']['lineColor'],'lineDash':zE['line']['lineDash']})),zM=>zI(sd,zM)),[zI,zE]),zL=(0x0,q['useCallback'])(zM=>zI(sd,zM),[zI]);return q['createElement'](q['Fragment'],null,q['createElement'](oi,{'title':zH['title']},q['createElement'](ns,{'value':zy['keyPoints'],'onValueChange':zJ,'instrument':zB,'drawingsDict':zD,'currentTimezone':zC,'withPrice':!0x0})),q['createElement'](oi,{'title':zF['title']},q['createElement'](rU,{'value':zy,'onValueChange':zz,'drawingsDict':zD})),q['createElement'](oi,{'title':zG['title']},q['createElement'](rn,{'value':zy,'onValueChange':zz,'palette':zA,'drawingsDict':zD,'applyToAll':zK}),q['createElement'](rd,{'value':zE['rays'],'onValueChange':zL,'palette':zA}),q['createElement'](rL,{'value':zy,'onValueChange':zz,'drawingsDict':zD})));}),sf=nu['Ri']['fromPath'](),sg=sf(['properties','rays']),sh=sf(['keyPoints']),si=nu['Ri']['fromProp']()('line'),sj=nu['Ri']['fromProp']()('visible'),sk=(0x0,q['memo'])(zx=>{const {value:zy,onValueChange:zz,palette:zA,instrument:zB,currentTimezone:zC,drawingsDict:zD}=zx,zE=zy['properties'],zF=zD['popup']['sections']['labels'],zG=zD['popup']['sections']['style'],zH=zD['popup']['sections']['coordinates'],zI=zD['popup']['sections']['gann'],zJ=zE['rays'],zK=(0x0,q['useCallback'])((zP,zQ)=>zz(zP['set'](zQ)(zy)),[zy,zz]),zL=(0x0,q['useCallback'])(zP=>zK(sg,zP),[zK]),zM=(0x0,q['useCallback'])(zP=>{zK(sh,zP);},[zK]),zN=(0x0,q['useCallback'])((zP,zQ)=>(0x0,A['zG'])(zJ,z['cq'](zQ,si['set'](zP)),y['g_'](A['Q1'],zL)),[zJ,zL]),zO=(0x0,q['useCallback'])((zP,zQ)=>(0x0,A['zG'])(zJ,z['cq'](zQ,sj['set'](zP)),y['g_'](A['Q1'],zL)),[zJ,zL]);return q['createElement'](q['Fragment'],null,q['createElement'](oi,{'title':zH['title']},q['createElement'](ns,{'value':zy['keyPoints'],'onValueChange':zM,'instrument':zB,'drawingsDict':zD,'currentTimezone':zC,'withPrice':!0x0})),q['createElement'](oi,{'title':zF['title']},q['createElement'](rU,{'value':zy,'onValueChange':zz,'drawingsDict':zD})),q['createElement'](oi,{'title':zG['title']},q['createElement'](rL,{'value':zy,'onValueChange':zz,'drawingsDict':zD})),q['createElement'](oi,{'title':zI['fans']},zJ['map']((zP,zQ)=>q['createElement'](sl,{'key':'ray-'+zQ,'ray':zP,'palette':zA,'index':zQ,'changeLineStyle':zN,'changeVisibility':zO}))));}),sl=(0x0,q['memo'])(zx=>{const {ray:zy,palette:zz,changeVisibility:zA,changeLineStyle:zB,index:zC}=zx,zD=(0x0,q['useCallback'])(zG=>zA(!!zG,zC),[zA,zC]),zE=(0x0,q['useCallback'])(zG=>zB(zG,zC),[zB,zC]),zF=(0x0,q['useMemo'])(()=>zy['coefficient']<=0x1?(0x64/(zy['coefficient']*0x64))['toFixed']()+'\x20/\x201':'1\x20/\x20'+(zy['coefficient']*0x64/0x64)['toFixed'](),[zy['coefficient']]);return q['createElement'](ao,{'noGapItems':!0x0},q['createElement'](ar,null,q['createElement'](r7,null,q['createElement'](r6['X'],{'value':zy['visible'],'onValueChange':zD}),q['createElement']('span',null,zF))),q['createElement'](qU,{'noGap':!0x0,'noGapItems':!0x0,'value':zy['line'],'palette':zz,'onValueChange':zE}));});function sm(zx){const {extendRightLens:zy,extendLeftLens:zz}=(0x0,q['useMemo'])(()=>{const zI=nu['Ri']['fromPath'](),zJ=zI(['properties','style','extendRight']),zK=zI(['properties','style','extendLeft']);return{'extendRightLens':zJ,'extendLeftLens':zK};},[]),{value:zA,onValueChange:zB,drawingsDict:zC}=zx,zD=zC['popup']['sections']['extend'],zE=zA['properties'],zF=(0x0,q['useCallback'])((zI,zJ)=>zB(zI['set'](zJ)(zA)),[zB,zA]),zG=(0x0,q['useCallback'])(zI=>zF(zy,!!zI),[zF,zy]),zH=(0x0,q['useCallback'])(zI=>zF(zz,!!zI),[zF,zz]);return q['createElement'](ao,{'vertical':!0x0},q['createElement'](ar,null,q['createElement'](r7,null,q['createElement'](r6['X'],{'value':zE['style']['extendLeft'],'onValueChange':zH}),q['createElement']('span',null,zD['leftCheckbox']))),q['createElement'](ar,null,q['createElement'](r7,null,q['createElement'](r6['X'],{'value':zE['style']['extendRight'],'onValueChange':zG}),q['createElement']('span',null,zD['rightCheckbox']))));}const sn=(0x0,ol['l'])(sm);var so=Object['defineProperty'],sp=Object['defineProperties'],sq=Object['getOwnPropertyDescriptors'],sr=Object['getOwnPropertySymbols'],ss=Object['prototype']['hasOwnProperty'],st=Object['prototype']['propertyIsEnumerable'],su=(zx,zy,zz)=>zy in zx?so(zx,zy,{'enumerable':!0x0,'configurable':!0x0,'writable':!0x0,'value':zz}):zx[zy]=zz,sv=(zx,zy)=>{for(var zz in zy||(zy={}))ss['call'](zy,zz)&&su(zx,zz,zy[zz]);if(sr){for(var zz of sr(zy))st['call'](zy,zz)&&su(zx,zz,zy[zz]);}return zx;},sw=(zx,zy)=>sp(zx,sq(zy));function sx(zx){const {placementToTheLineLens:zy,sidePlacementLens:zz}=(0x0,q['useMemo'])(()=>{const zN=nu['Ri']['fromPath'](),zO=zN(['properties','labels','placementToTheLine']),zP=zN(['properties','labels','sidePlacement']);return{'placementToTheLineLens':zO,'sidePlacementLens':zP};},[]),{value:zA,onValueChange:zB,drawingsDict:zC}=zx,zD=zA['properties'],[zE,zF]=(0x0,q['useState'])(!0x1),[zG,zH]=(0x0,q['useState'])(!0x1),zI=(0x0,q['useCallback'])(()=>zF(!zE),[zE]),zJ=(0x0,q['useCallback'])(()=>zH(!zG),[zG]),zK=(0x0,q['useCallback'])((zN,zO)=>zB(zN['set'](zO)(zA)),[zA,zB]),zL=(0x0,q['useCallback'])(zN=>sB(zN)&&zK(zz,zN),[zK,zz]),zM=(0x0,q['useCallback'])(zN=>sE(zN)&&zK(zy,zN),[zK,zy]);return q['createElement'](ms['Ch'],null,zN=>{var zO,zP;return q['createElement'](ao,null,q['createElement'](rU,{'value':zA,'onValueChange':zB,'drawingsDict':zC,'noGap':!0x0,'noGapItems':!0x0}),q['createElement'](ar,null,q['createElement'](sA,{'value':(zO=zD['labels']['sidePlacement'])!=null?zO:'left','onValueChange':zL,'isOpened':zE,'onToggle':zI,'drawingsDict':zC,'parentEventTarget':zN})),q['createElement'](ar,null,q['createElement'](sD,{'value':(zP=zD['labels']['placementToTheLine'])!=null?zP:'left','onValueChange':zM,'isOpened':zG,'onToggle':zJ,'drawingsDict':zC,'parentEventTarget':zN})));});}const sy=(0x0,ol['l'])(sx),sz=['left','right'],sA=(0x0,q['memo'])(zx=>{const {drawingsDict:zy,value:zz,onValueChange:zA}=zx,zB=zy['popup']['sections']['labels'],zC=(0x0,q['useCallback'])(zA,[zA]),zD=(0x0,q['useCallback'])(zF=>{switch(zF){case'left':return zB['sidePlacementSelectboxOptions']['left'];case'right':return zB['sidePlacementSelectboxOptions']['right'];}},[zB]),zE=(0x0,q['useCallback'])(zF=>zz===zF,[zz]);return q['createElement'](r8,sw(sv({},zx),{'onValueChange':zC,'closeOnClickAway':!0x0}),sz['map'](zF=>q['createElement'](r9,{'key':zF,'value':zF,'isActive':zE(zF)},zD(zF))));});function sB(zx){return typeof zx=='string'&&(zx==='left'||zx==='right');}const sC=['top','bottom','middle'],sD=(0x0,q['memo'])(zx=>{const {drawingsDict:zy,value:zz,onValueChange:zA}=zx,zB=zy['popup']['sections']['labels'],zC=(0x0,q['useCallback'])(zA,[zA]),zD=(0x0,q['useCallback'])(zF=>{switch(zF){case'top':return zB['placementToTheLineSelectboxOptions']['top'];case'bottom':return zB['placementToTheLineSelectboxOptions']['bottom'];case'middle':return zB['placementToTheLineSelectboxOptions']['middle'];}},[zB]),zE=(0x0,q['useCallback'])(zF=>zz===zF,[zz]);return q['createElement'](r8,sw(sv({},zx),{'onValueChange':zC,'closeOnClickAway':!0x0}),sC['map'](zF=>q['createElement'](r9,{'key':zF,'value':zF,'isActive':zE(zF)},zD(zF))));});function sE(zx){return typeof zx=='string'&&(zx==='top'||zx==='bottom'||zx==='middle');}function sF(zx){const {showPriceLens:zy}=(0x0,q['useMemo'])(()=>({'showPriceLens':nu['Ri']['fromPath']()(['properties','labels','showPrice'])}),[]),{value:zz,onValueChange:zA,className:zB,drawingsDict:zC}=zx,zD=zz['properties'],zE=zC['popup']['sections']['labels'],zF=(0x0,q['useCallback'])((zH,zI)=>zA(zH['set'](zI)(zz)),[zz,zA]),zG=(0x0,q['useCallback'])(zH=>zF(zy,!!zH),[zF,zy]);return q['createElement'](ao,{'className':zB},q['createElement'](ar,null,q['createElement'](r7,null,q['createElement'](r6['X'],{'value':zD['labels']['showPrice'],'onValueChange':zG}),q['createElement']('span',null,zE['priceCheckbox']))));}const sG=(0x0,ol['l'])(sF);var sH=Object['defineProperty'],sI=Object['defineProperties'],sJ=Object['getOwnPropertyDescriptors'],sK=Object['getOwnPropertySymbols'],sL=Object['prototype']['hasOwnProperty'],sM=Object['prototype']['propertyIsEnumerable'],sN=(zx,zy,zz)=>zy in zx?sH(zx,zy,{'enumerable':!0x0,'configurable':!0x0,'writable':!0x0,'value':zz}):zx[zy]=zz,sO=(zx,zy)=>{for(var zz in zy||(zy={}))sL['call'](zy,zz)&&sN(zx,zz,zy[zz]);if(sK){for(var zz of sK(zy))sM['call'](zy,zz)&&sN(zx,zz,zy[zz]);}return zx;},sP=(zx,zy)=>sI(zx,sJ(zy));const sQ=nu['Ri']['fromPath'](),sR=sQ(['keyPoints']),sS=sQ(['properties','levels']),sT=(0x0,q['memo'])(zx=>{const {value:zy,onValueChange:zz,palette:zA,instrument:zB,currentTimezone:zC,drawingsDict:zD}=zx,zE=zy['properties'],zF=zD['popup']['sections']['labels'],zG=zD['popup']['sections']['style'],zH=zD['popup']['sections']['extend'],zI=zD['popup']['sections']['coordinates'],zJ=(0x0,q['useCallback'])((zN,zO)=>zz(zN['set'](zO)(zy)),[zy,zz]),zK=(0x0,q['useCallback'])(zN=>zJ(sS,zN),[zJ]),zL=(0x0,q['useCallback'])(zN=>zJ(sR,zN),[zJ]),zM=(0x0,q['useCallback'])(()=>(0x0,A['zG'])(zE['levels'],z['UI'](zN=>sP(sO({},zN),{'lineWidth':zE['line']['lineWidth'],'lineColor':zE['line']['lineColor'],'lineDash':zE['line']['lineDash']})),zK),[zK,zE]);return q['createElement'](q['Fragment'],null,q['createElement'](oi,{'title':zI['title']},q['createElement'](ns,{'value':zy['keyPoints'],'onValueChange':zL,'drawingsDict':zD,'instrument':zB,'currentTimezone':zC,'withPrice':!0x0})),q['createElement'](oi,{'title':zF['title']},q['createElement'](sy,{'value':zy,'onValueChange':zz,'drawingsDict':zD}),q['createElement'](sG,{'value':zy,'onValueChange':zz,'drawingsDict':zD})),q['createElement'](oi,{'title':zG['title']},q['createElement'](rn,{'value':zy,'onValueChange':zz,'palette':zA,'drawingsDict':zD,'applyToAll':zM}),q['createElement'](rd,{'value':zE['levels'],'onValueChange':zK,'palette':zA}),q['createElement'](rL,{'value':zy,'onValueChange':zz,'drawingsDict':zD})),q['createElement'](oi,{'title':zH['title']},q['createElement'](sn,{'value':zy,'onValueChange':zz,'drawingsDict':zD})));}),sU=(0x0,q['memo'])(zx=>q['createElement']('span',null,zx['drawingsDict']['popup']['sections']['default']));function sV(zx){const {backgroundLens:zy}=(0x0,q['useMemo'])(()=>({'backgroundLens':nu['Ri']['fromPath']()(['properties','background'])}),[]),{value:zz,onValueChange:zA,drawingsDict:zB,palette:zC}=zx,zD=zz['properties'],zE=(0x0,q['useCallback'])((zG,zH)=>zA(zG['set'](zH)(zz)),[zz,zA]),zF=(0x0,q['useCallback'])(zG=>zE(zy,zG),[zE,zy]);return q['createElement'](ms['Ch'],null,zG=>q['createElement'](rH,{'drawingsDict':zB,'onValueChange':zF,'value':zD['background'],'palette':zC,'parentEventTarget':zG,'showBackgroundCheckbox':!0x0}));}const sW=(0x0,ol['l'])(sV),sX=nu['Ri']['fromPath']()(['keyPoints']),sY=(0x0,q['memo'])(zx=>{const {value:zy,onValueChange:zz,palette:zA,instrument:zB,currentTimezone:zC,drawingsDict:zD}=zx,zE=zD['popup']['sections']['coordinates'],zF=zD['popup']['sections']['style'],zG=(0x0,q['useCallback'])((zI,zJ)=>zz(zI['set'](zJ)(zy)),[zy,zz]),zH=(0x0,q['useCallback'])(zI=>zG(sX,zI),[zG]);return q['createElement'](q['Fragment'],null,q['createElement'](oi,{'title':zE['title']},q['createElement'](ns,{'value':zy['keyPoints'],'onValueChange':zH,'instrument':zB,'drawingsDict':zD,'currentTimezone':zC,'withPrice':!0x0})),q['createElement'](oi,{'title':zF['title']},q['createElement'](r3,{'value':zy,'onValueChange':zz,'palette':zA}),q['createElement'](sW,{'value':zy,'onValueChange':zz,'drawingsDict':zD,'palette':zA})));});var sZ=Object['defineProperty'],t0=Object['defineProperties'],t1=Object['getOwnPropertyDescriptors'],t2=Object['getOwnPropertySymbols'],t3=Object['prototype']['hasOwnProperty'],t4=Object['prototype']['propertyIsEnumerable'],t5=(zx,zy,zz)=>zy in zx?sZ(zx,zy,{'enumerable':!0x0,'configurable':!0x0,'writable':!0x0,'value':zz}):zx[zy]=zz,t6=(zx,zy)=>{for(var zz in zy||(zy={}))t3['call'](zy,zz)&&t5(zx,zz,zy[zz]);if(t2){for(var zz of t2(zy))t4['call'](zy,zz)&&t5(zx,zz,zy[zz]);}return zx;},t7=(zx,zy)=>t0(zx,t1(zy));const t8=nu['Ri']['fromPath'](),t9=t8(['keyPoints']),ta=t8(['properties','levels']),tb=(0x0,q['memo'])(zx=>{const {value:zy,onValueChange:zz,palette:zA,instrument:zB,currentTimezone:zC,drawingsDict:zD}=zx,zE=zy['properties'],zF=zD['popup']['sections']['style'],zG=zD['popup']['sections']['coordinates'],zH=(0x0,q['useCallback'])((zL,zM)=>zz(zL['set'](zM)(zy)),[zz,zy]),zI=(0x0,q['useCallback'])(zL=>zH(t9,zL),[zH]),zJ=(0x0,q['useCallback'])(()=>(0x0,A['zG'])(zE['levels'],z['UI'](zL=>t7(t6({},zL),{'lineWidth':zE['line']['lineWidth'],'lineColor':zE['line']['lineColor'],'lineDash':zE['line']['lineDash']})),zL=>zH(ta,zL)),[zH,zE]),zK=(0x0,q['useCallback'])(zL=>zH(ta,zL),[zH]);return q['createElement'](q['Fragment'],null,q['createElement'](oi,{'title':zG['title']},q['createElement'](ns,{'value':zy['keyPoints'],'onValueChange':zI,'instrument':zB,'drawingsDict':zD,'currentTimezone':zC,'withPrice':!0x0})),q['createElement'](oi,{'title':zF['title']},q['createElement'](rn,{'value':zy,'onValueChange':zz,'palette':zA,'drawingsDict':zD,'applyToAll':zJ}),q['createElement'](rd,{'value':zE['levels'],'onValueChange':zK,'palette':zA}),q['createElement'](rL,{'value':zy,'onValueChange':zz,'drawingsDict':zD})));});var tc=j(0x948a),td=Object['defineProperty'],te=Object['defineProperties'],tf=Object['getOwnPropertyDescriptors'],tg=Object['getOwnPropertySymbols'],th=Object['prototype']['hasOwnProperty'],ti=Object['prototype']['propertyIsEnumerable'],tj=(zx,zy,zz)=>zy in zx?td(zx,zy,{'enumerable':!0x0,'configurable':!0x0,'writable':!0x0,'value':zz}):zx[zy]=zz,tk=(zx,zy)=>{for(var zz in zy||(zy={}))th['call'](zy,zz)&&tj(zx,zz,zy[zz]);if(tg){for(var zz of tg(zy))ti['call'](zy,zz)&&tj(zx,zz,zy[zz]);}return zx;},tl=(zx,zy)=>te(zx,tf(zy));const tm=nu['Ri']['fromPath'](),tn=tm(['keyPoints']),to=tm(['properties','showPrice']),tp=tm(['properties','style','extendRight']),tq=tm(['properties','style','extendLeft']),tr=(0x0,q['memo'])(zx=>{const zy=zx['value']['properties'],{value:zz,onValueChange:zA,palette:zB,instrument:zC,drawingsDict:zD}=zx,zE=zz['keyPoints'][0x0]&&zz['keyPoints'][0x0]['value'],zF=zD['popup']['sections']['coordinates'],zG=zD['popup']['sections']['extend'],zH=zD['popup']['sections']['style'],zI=(0x0,q['useCallback'])((zQ,zR)=>zA(zQ['set'](zR)(zz)),[zz,zA]),zJ=(0x0,q['useCallback'])(zQ=>(0x0,A['zG'])(zz['keyPoints'],z['cq'](0x0,zR=>tl(tk({},zR),{'value':zQ})),y['g_'](A['Q1'],zR=>zI(tn,zR))),[zI,zz['keyPoints']]),zK=(0x0,q['useCallback'])(zQ=>zI(to,zQ),[zI]),zL=(0x0,q['useCallback'])(zQ=>(0x0,A['zG'])(!zy['style']['extendRight']&&!zQ,y['DT']((0x0,tc['ff'])(A['yR'])),y['g_'](A['Q1'],()=>zI(tq,!!zQ))),[zI,zy['style']['extendRight']]),zM=(0x0,q['useCallback'])(zQ=>(0x0,A['zG'])(!zy['style']['extendLeft']&&!zQ,y['DT']((0x0,tc['ff'])(A['yR'])),y['g_'](A['Q1'],()=>zI(tp,!!zQ))),[zI,zy['style']['extendLeft']]),zN=(0x0,q['useMemo'])(()=>zz['keyPoints'][0x0]!==void 0x0?zz['keyPoints'][0x0]['value']:void 0x0,[zz['keyPoints']]),zO=(0x0,q['useMemo'])(()=>zC!==void 0x0&&zN!==void 0x0?Q['G']['getPriceIncrement'](zN,zC['priceIncrements']):0x0,[zN,zC]),zP=(0x0,q['useMemo'])(()=>Q['G']['calculatePrecision'](zO),[zO]);return q['createElement'](q['Fragment'],null,zN&&q['createElement'](oi,{'title':zF['title']},q['createElement'](ao,null,q['createElement'](ar,{'label':zF['priceLabel']},q['createElement'](as['l'],{'min':0x0,'max':Number['POSITIVE_INFINITY'],'step':zO,'value':zE,'onValueChange':zJ,'formatter':ac(zP)}))),q['createElement'](ao,null,q['createElement'](ar,null,q['createElement'](r7,null,q['createElement'](r6['X'],{'value':zy['showPrice'],'onValueChange':zK}),q['createElement']('span',null,zF['priceCheckbox']))))),q['createElement'](oi,{'title':zH['title']},q['createElement'](r3,{'value':zz,'onValueChange':zA,'palette':zB})),q['createElement'](oi,{'title':zG['title']},q['createElement'](ao,{'vertical':!0x0},q['createElement'](ar,null,q['createElement'](r7,null,q['createElement'](r6['X'],{'value':zy['style']['extendLeft'],'onValueChange':zL}),q['createElement']('span',null,zG['leftCheckbox']))),q['createElement'](ar,null,q['createElement'](r7,null,q['createElement'](r6['X'],{'value':zy['style']['extendRight'],'onValueChange':zM}),q['createElement']('span',null,zG['rightCheckbox']))))));}),ts=nu['Ri']['fromPath']()(['keyPoints']),tt=(0x0,q['memo'])(zx=>{const {value:zy,onValueChange:zz,palette:zA,instrument:zB,currentTimezone:zC,drawingsDict:zD}=zx,zE=zD['popup']['sections']['coordinates'],zF=zD['popup']['sections']['style'],zG=(0x0,q['useCallback'])((zI,zJ)=>zz(zI['set'](zJ)(zy)),[zy,zz]),zH=(0x0,q['useCallback'])(zI=>zG(ts,zI),[zG]);return q['createElement'](q['Fragment'],null,q['createElement'](oi,{'title':zE['title']},q['createElement'](ns,{'value':zy['keyPoints'],'onValueChange':zH,'instrument':zB,'drawingsDict':zD,'currentTimezone':zC,'withPrice':!0x0})),q['createElement'](oi,{'title':zF['title']},q['createElement'](r3,{'value':zy,'onValueChange':zz,'palette':zA}),q['createElement'](sW,{'value':zy,'onValueChange':zz,'drawingsDict':zD,'palette':zA})));}),tu=nu['Ri']['fromPath'](),tv=tu(['keyPoints']),tw=tu(['properties','showTime']),tx=(0x0,q['memo'])(zx=>{const {value:zy,onValueChange:zz,palette:zA,instrument:zB,currentTimezone:zC,drawingsDict:zD}=zx,zE=zx['value']['properties'],zF=zD['popup']['sections']['coordinates'],zG=zD['popup']['sections']['style'],zH=(0x0,q['useCallback'])((zK,zL)=>zz(zK['set'](zL)(zy)),[zy,zz]),zI=(0x0,q['useCallback'])(zK=>zH(tv,zK),[zH]),zJ=(0x0,q['useCallback'])(zK=>zH(tw,zK),[zH]);return q['createElement'](q['Fragment'],null,q['createElement'](oi,{'title':zF['title']},q['createElement'](ns,{'value':zy['keyPoints'],'onValueChange':zI,'instrument':zB,'drawingsDict':zD,'currentTimezone':zC}),q['createElement'](ar,null,q['createElement'](r7,null,q['createElement'](r6['X'],{'value':zE['showTime'],'onValueChange':zJ}),q['createElement']('span',null,zF['timeCheckbox'])))),q['createElement'](oi,{'title':zG['title']},q['createElement'](r3,{'value':zy,'onValueChange':zz,'palette':zA})));}),ty=nu['Ri']['fromPath'](),tz=ty(['keyPoints']),tA=ty(['properties','showPrice']),tB=ty(['properties','showTime']),tC=(0x0,q['memo'])(zx=>{const zy=zx['value']['properties'],{value:zz,onValueChange:zA,palette:zB,instrument:zC,currentTimezone:zD,drawingsDict:zE}=zx,zF=zE['popup']['sections']['coordinates'],zG=zE['popup']['sections']['style'],zH=(0x0,q['useCallback'])((zM,zN)=>zA(zM['set'](zN)(zz)),[zz,zA]),zI=(0x0,q['useCallback'])(zM=>zH(tz,zM),[zH]),zJ=(0x0,q['useCallback'])(zM=>zI([...zM]),[zI]),zK=(0x0,q['useCallback'])(zM=>zH(tA,zM),[zH]),zL=(0x0,q['useCallback'])(zM=>zH(tB,zM),[zH]);return q['createElement'](q['Fragment'],null,q['createElement'](oi,{'title':zF['title']},q['createElement'](ns,{'value':zz['keyPoints'],'onValueChange':zJ,'instrument':zC,'drawingsDict':zE,'currentTimezone':zD,'withPrice':!0x0}),q['createElement'](ao,null,q['createElement'](ar,null,q['createElement'](r7,null,q['createElement'](r6['X'],{'value':zy['showPrice'],'onValueChange':zK}),q['createElement']('span',null,zF['priceCheckbox']))),q['createElement'](ar,null,q['createElement'](r7,null,q['createElement'](r6['X'],{'value':zy['showTime'],'onValueChange':zL}),q['createElement']('span',null,zF['timeCheckbox']))))),q['createElement'](oi,{'title':zG['title']},q['createElement'](r3,{'value':zz,'onValueChange':zA,'palette':zB})));}),tD=nu['Ri']['fromPath'](),tE=tD(['keyPoints']),tF=tD(['properties','style','fillBackground']),tG=(0x0,q['memo'])(zx=>{const {value:zy,onValueChange:zz,palette:zA,instrument:zB,currentTimezone:zC,drawingsDict:zD}=zx,zE=zy['properties'],zF=zD['popup']['sections']['style'],zG=zD['popup']['sections']['extend'],zH=zD['popup']['sections']['coordinates'],zI=(0x0,q['useCallback'])((zL,zM)=>zz(zL['set'](zM)(zy)),[zy,zz]),zJ=(0x0,q['useCallback'])(zL=>zI(tE,zL),[zI]),zK=(0x0,q['useCallback'])(zL=>zI(tF,!!zL),[zI]);return q['createElement'](q['Fragment'],null,q['createElement'](oi,{'title':zH['title']},q['createElement'](ns,{'value':zy['keyPoints'],'onValueChange':zJ,'instrument':zB,'drawingsDict':zD,'currentTimezone':zC,'withPrice':!0x0})),q['createElement'](oi,{'title':zF['title']},q['createElement'](r3,{'value':zy,'onValueChange':zz,'palette':zA},q['createElement'](ar,null,q['createElement'](r7,null,q['createElement'](r6['X'],{'value':zE['style']['fillBackground'],'onValueChange':zK}),q['createElement']('span',null,zF['backgroundCheckbox']))))),q['createElement'](oi,{'title':zG['title']},q['createElement'](sn,{'value':zy,'onValueChange':zz,'drawingsDict':zD})));}),tH=nu['Ri']['fromPath']()(['keyPoints']),tI=(0x0,q['memo'])(zx=>{const {value:zy,onValueChange:zz,palette:zA,drawingsDict:zB,instrument:zC,currentTimezone:zD}=zx,zE=zB['popup']['sections']['extend'],zF=zB['popup']['sections']['coordinates'],zG=zB['popup']['sections']['style'],zH=(0x0,q['useCallback'])((zK,zL)=>zz(zK['set'](zL)(zy)),[zy,zz]),zI=(0x0,q['useCallback'])(zK=>zH(tH,zK),[zH]),zJ=(0x0,q['useCallback'])(zK=>zI([...zK]),[zI]);return q['createElement'](q['Fragment'],null,q['createElement'](oi,{'title':zF['title']},q['createElement'](ns,{'value':zy['keyPoints'],'onValueChange':zJ,'instrument':zC,'drawingsDict':zB,'currentTimezone':zD,'withPrice':!0x0})),q['createElement'](oi,{'title':zG['title']},q['createElement'](r3,{'value':zy,'onValueChange':zz,'palette':zA}),q['createElement'](sW,{'value':zy,'onValueChange':zz,'palette':zA,'drawingsDict':zB})),q['createElement'](oi,{'title':zE['title']},q['createElement'](sn,{'value':zy,'onValueChange':zz,'drawingsDict':zB})));}),tJ=nu['Ri']['fromPath']()(['keyPoints']),tK=(0x0,q['memo'])(zx=>{const {value:zy,onValueChange:zz,palette:zA,instrument:zB,currentTimezone:zC,drawingsDict:zD}=zx,zE=zD['popup']['sections']['coordinates'],zF=zD['popup']['sections']['style'],zG=(0x0,q['useCallback'])((zI,zJ)=>zz(zI['set'](zJ)(zy)),[zy,zz]),zH=(0x0,q['useCallback'])(zI=>zG(tJ,zI),[zG]);return q['createElement'](q['Fragment'],null,q['createElement'](oi,{'title':zE['title']},q['createElement'](ns,{'value':zy['keyPoints'],'onValueChange':zH,'instrument':zB,'drawingsDict':zD,'currentTimezone':zC,'withPrice':!0x0})),q['createElement'](oi,{'title':zF['title']},q['createElement'](r3,{'value':zy,'onValueChange':zz,'palette':zA})));}),tL=['left','right','middle'];function tM(zx){const {MBShowPriceAbsolute:zy,MBShowPricePercent:zz,MBShowBars:zA,MBShowDateTime:zB,MBShowDistance:zC,MBShowAngle:zD,MBPosition:zE}=(0x0,q['useMemo'])(()=>{const zX=nu['Ri']['fromPath'](),zY=zX(['properties','measureBox','showPriceChangeAbs']),zZ=zX(['properties','measureBox','showPriceChangePercent']),A0=zX(['properties','measureBox','showBars']),A1=zX(['properties','measureBox','showTimeDiff']),A2=zX(['properties','measureBox','showDistance']),A3=zX(['properties','measureBox','showAngle']),A4=zX(['properties','measureBox','position']);return{'MBShowPriceAbsolute':zY,'MBShowPricePercent':zZ,'MBShowBars':A0,'MBShowDateTime':A1,'MBShowDistance':A2,'MBShowAngle':A3,'MBPosition':A4};},[]),{value:zF,onValueChange:zG,drawingsDict:zH,className:zI}=zx,[zJ,zK]=(0x0,q['useState'])(!0x1),zL=(0x0,q['useCallback'])(()=>zK(!zJ),[zJ]),zM=zF['properties']['measureBox'],zN=zH['popup']['sections']['measureBox'],zO=(0x0,q['useCallback'])((zX,zY)=>zG(zX['set'](zY)(zF)),[zG,zF]),zP=(0x0,q['useCallback'])(zX=>zO(zy,!!zX),[zy,zO]),zQ=(0x0,q['useCallback'])(zX=>zO(zz,!!zX),[zz,zO]),zR=(0x0,q['useCallback'])(zX=>zO(zA,!!zX),[zA,zO]),zS=(0x0,q['useCallback'])(zX=>zO(zB,!!zX),[zB,zO]),zT=(0x0,q['useCallback'])(zX=>zO(zC,!!zX),[zC,zO]),zU=(0x0,q['useCallback'])(zX=>zO(zD,!!zX),[zD,zO]),zV=(0x0,q['useCallback'])(zX=>{switch(zX){case'left':return zN['position']['left'];case'right':return zN['position']['right'];case'middle':return zN['position']['middle'];}},[zN['position']['left'],zN['position']['right'],zN['position']['middle']]),zW=(0x0,q['useCallback'])(zX=>{typeof zX=='string'&&tO(zX)&&zO(zE,zX);},[zE,zO]);return q['createElement'](ms['Ch'],null,zX=>q['createElement']('div',{'className':zI},q['createElement'](ao,{'vertical':!0x0},q['createElement'](ar,null,q['createElement'](r7,null,q['createElement'](r6['X'],{'value':zM['showPriceChangePercent'],'onValueChange':zQ}),q['createElement']('span',null,zN['percentPriceCheckbox']))),q['createElement'](ar,null,q['createElement'](r7,null,q['createElement'](r6['X'],{'value':zM['showPriceChangeAbs'],'onValueChange':zP}),q['createElement']('span',null,zN['changeCheckbox']))),q['createElement'](ar,null,q['createElement'](r7,null,q['createElement'](r6['X'],{'value':zM['showBars'],'onValueChange':zR}),q['createElement']('span',null,zN['showBars']))),q['createElement'](ar,null,q['createElement'](r7,null,q['createElement'](r6['X'],{'value':zM['showTimeDiff'],'onValueChange':zS}),q['createElement']('span',null,zN['showDateTime']))),q['createElement'](ar,null,q['createElement'](r7,null,q['createElement'](r6['X'],{'value':zM['showDistance'],'onValueChange':zT}),q['createElement']('span',null,zN['showDistance']))),q['createElement'](ar,null,q['createElement'](r7,null,q['createElement'](r6['X'],{'value':zM['showAngle'],'onValueChange':zU}),q['createElement']('span',null,zN['showAngle'])))),q['createElement'](ao,null,q['createElement'](ar,null,q['createElement'](r7,null,q['createElement']('span',null,zN['positionTitle']))),q['createElement'](ar,null,q['createElement'](r8,{'value':zM['position'],'onValueChange':zW,'isOpened':zJ,'closeOnClickAway':!0x0,'onToggle':zL,'parentEventTarget':zX},tL['map'](zY=>q['createElement'](r9,{'key':zY,'value':zY,'isActive':zM['position']===zY},zV(zY))))))));}const tN=(0x0,ol['l'])(tM),tO=zx=>zx==='left'||zx==='right'||zx==='middle';var tP=Object['defineProperty'],tQ=Object['defineProperties'],tR=Object['getOwnPropertyDescriptors'],tS=Object['getOwnPropertySymbols'],tT=Object['prototype']['hasOwnProperty'],tU=Object['prototype']['propertyIsEnumerable'],tV=(zx,zy,zz)=>zy in zx?tP(zx,zy,{'enumerable':!0x0,'configurable':!0x0,'writable':!0x0,'value':zz}):zx[zy]=zz,tW=(zx,zy)=>{for(var zz in zy||(zy={}))tT['call'](zy,zz)&&tV(zx,zz,zy[zz]);if(tS){for(var zz of tS(zy))tU['call'](zy,zz)&&tV(zx,zz,zy[zz]);}return zx;},tX=(zx,zy)=>tQ(zx,tR(zy));function tY(zx){const {showPriceLens:zy,pricePlacementLens:zz}=(0x0,q['useMemo'])(()=>{const zM=nu['Ri']['fromPath'](),zN=zM(['properties','labels','showPrice']),zO=zM(['properties','labels','sidePlacement']);return{'showPriceLens':zN,'pricePlacementLens':zO};},[]),{value:zA,onValueChange:zB,drawingsDict:zC,children:zD}=zx,zE=zC['popup']['sections']['labels'],zF=zA['properties'],[zG,zH]=(0x0,q['useState'])(!0x1),zI=(0x0,q['useCallback'])(()=>zH(!zG),[zG]),zJ=(0x0,q['useCallback'])((zM,zN)=>zB(zM['set'](zN)(zA)),[zA,zB]),zK=(0x0,q['useCallback'])(zM=>zJ(zy,zM),[zJ,zy]),zL=(0x0,q['useCallback'])(zM=>u2(zM)&&zJ(zz,zM),[zJ,zz]);return q['createElement'](ms['Ch'],null,zM=>{var zN;return q['createElement'](ao,null,q['createElement'](ar,null,q['createElement'](r7,null,q['createElement'](r6['X'],{'value':zF['labels']['showPrice'],'onValueChange':zK}),q['createElement']('span',null,zE['priceCheckbox']))),q['createElement'](ar,null,q['createElement'](u1,{'value':(zN=zF['labels']['sidePlacement'])!=null?zN:'left','onValueChange':zL,'isOpened':zG,'onToggle':zI,'parentEventTarget':zM,'drawingsDict':zC})),zD);});}const tZ=(0x0,ol['l'])(tY),u0=['left','right'],u1=(0x0,q['memo'])(zx=>{const {drawingsDict:zy,value:zz,onValueChange:zA}=zx,zB=zy['popup']['sections']['labels'],zC=(0x0,q['useCallback'])(zA,[zA]),zD=(0x0,q['useCallback'])(zF=>{switch(zF){case'left':return zB['sidePlacementSelectboxOptions']['left'];case'right':return zB['sidePlacementSelectboxOptions']['right'];}},[zB]),zE=(0x0,q['useCallback'])(zF=>zz===zF,[zz]);return q['createElement'](r8,tX(tW({},zx),{'onValueChange':zC,'closeOnClickAway':!0x0}),u0['map'](zF=>q['createElement'](r9,{'key':zF,'value':zF,'isActive':zE(zF)},zD(zF))));});function u2(zx){return typeof zx=='string'&&(zx==='left'||zx==='right');}const u3=(0x0,B['ZP'])(em['v'])`
	padding: 5px 7px;
	margin-top: 2px;
`,u4=(0x0,B['ZP'])(ep['x'])`
	padding: 1px 6px;
	margin: 0;
	min-width: 50px;

	${en['S3']} {
		position: relative;
		display: flex;
		justify-content: center;
	}

	${zx=>zx['caretIcon']&&B['iv']`
			${en['As']} {
				display: block;
				position: absolute;
				box-sizing: border-box;
				left: 1px;
				bottom: 1px;

				color: var(--icon-secondary-default-bg);
				width: 10px;
				height: 6px;
			}
		`}
`,u5=(0x0,B['ZP'])(ei['J'])``;var u6=j(0xb167),u7=j(0x15e68),u8=j(0x5dda),u9=Object['defineProperty'],ua=Object['defineProperties'],ub=Object['getOwnPropertyDescriptors'],uc=Object['getOwnPropertySymbols'],ud=Object['prototype']['hasOwnProperty'],ue=Object['prototype']['propertyIsEnumerable'],uf=(zx,zy,zz)=>zy in zx?u9(zx,zy,{'enumerable':!0x0,'configurable':!0x0,'writable':!0x0,'value':zz}):zx[zy]=zz,ug=(zx,zy)=>{for(var zz in zy||(zy={}))ud['call'](zy,zz)&&uf(zx,zz,zy[zz]);if(uc){for(var zz of uc(zy))ue['call'](zy,zz)&&uf(zx,zz,zy[zz]);}return zx;},uh=(zx,zy)=>ua(zx,ub(zy));const ui=zx=>q['createElement'](u5,uh(ug({},zx),{'align':'start','position':'bottom'})),uj=(0x0,u7['HP'])(zx=>(0x0,q['forwardRef'])((zy,zz)=>q['createElement'](u4,uh(ug({'ref':zz},zy),{'valueText':zx})))),uk=['arrow','line'],ul=zx=>{const {className:zy,selectedType:zz,localization:zA,onTypeSelect:zB,parentEventTarget:zC}=zx,[zD,zE]=(0x0,q['useState'])(!0x1),zF=(0x0,q['useCallback'])(zI=>{zI!==void 0x0&&zE(zI);},[zE]),zG=(0x0,q['useCallback'])(zI=>{zI!==void 0x0&&!Array['isArray'](zI)&&zB(um(zI['toString']()));},[zB]),zH=(0x0,q['useCallback'])(zI=>u8['Eq']['equals'](zz,zI),[zz]);return q['createElement'](u3,{'parentEventTarget':zC,'className':zy,'isOpened':zD,'onToggle':zF,'value':zz,'onValueChange':zG,'Anchor':uj(un(zz,zA)),'closeOnClickAway':!0x0,'Popover':ui},Object['values'](uk)['map'](zI=>q['createElement'](u6['X'],{'key':zI,'value':zI,'isActive':zH(zI),'label':un(zI,zA)})));},um=zx=>{switch(zx){case'arrow':return'arrow';case'line':return'line';default:return'line';}},un=(zx,zy)=>{switch(zx){case'arrow':return zy['arrow'];case'line':return zy['none'];}};var uo=Object['defineProperty'],up=Object['getOwnPropertySymbols'],uq=Object['prototype']['hasOwnProperty'],ur=Object['prototype']['propertyIsEnumerable'],us=(zx,zy,zz)=>zy in zx?uo(zx,zy,{'enumerable':!0x0,'configurable':!0x0,'writable':!0x0,'value':zz}):zx[zy]=zz,ut=(zx,zy)=>{for(var zz in zy||(zy={}))uq['call'](zy,zz)&&us(zx,zz,zy[zz]);if(up){for(var zz of up(zy))ur['call'](zy,zz)&&us(zx,zz,zy[zz]);}return zx;};function uu(zx){const {arrowStartLens:zy,arrowEndLens:zz}=(0x0,q['useMemo'])(()=>{const zJ=nu['Ri']['fromPath'](),zK=zJ(['properties','arrows','start']),zL=zJ(['properties','arrows','end']);return{'arrowStartLens':zK,'arrowEndLens':zL};},[]),{value:zA,drawingsDict:zB,onValueChange:zC}=zx,zD={'arrow':zB['popup']['sections']['style']['lineEndType']['arrow'],'none':zB['popup']['sections']['style']['lineEndType']['none']},zE=(0x0,q['useCallback'])((zJ,zK)=>zC(zJ['set'](zK)(zA)),[zA,zC]),zF=(0x0,q['useCallback'])(zJ=>zE(zy,uw(zJ)),[zE,zy]),zG=(0x0,q['useCallback'])(zJ=>zE(zz,uw(zJ)),[zE,zz]),zH=(0x0,q['useMemo'])(()=>{const zJ=zy['get'](zA);return ux(zJ!=null?zJ:!0x1);},[zA,zy]),zI=(0x0,q['useMemo'])(()=>{const zJ=zz['get'](zA);return ux(zJ!=null?zJ:!0x0);},[zA,zz]);return q['createElement'](ms['Ch'],null,zJ=>q['createElement'](r3,ut({},zx),q['createElement'](ar,null,q['createElement'](ul,{'selectedType':zH,'reversed':!0x0,'onTypeSelect':zF,'localization':zD,'parentEventTarget':zJ})),q['createElement'](ar,null,q['createElement'](ul,{'selectedType':zI,'onTypeSelect':zG,'localization':zD,'parentEventTarget':zJ}))));}const uv=(0x0,ol['l'])(uu),uw=zx=>zx==='arrow',ux=zx=>zx?'arrow':'line',uy=nu['Ri']['fromPath']()(['keyPoints']),uz=(0x0,q['memo'])(zx=>{const {value:zy,onValueChange:zz,palette:zA,instrument:zB,currentTimezone:zC,drawingsDict:zD}=zx,zE=zD['popup']['sections']['extend'],zF=zD['popup']['sections']['labels'],zG=zD['popup']['sections']['coordinates'],zH=zD['popup']['sections']['style'],zI=zD['popup']['sections']['measureBox'],zJ=(0x0,q['useCallback'])((zM,zN)=>zz(zM['set'](zN)(zy)),[zy,zz]),zK=(0x0,q['useCallback'])(zM=>zJ(uy,zM),[zJ]),zL=(0x0,q['useCallback'])(zM=>zK([...zM]),[zK]);return q['createElement'](q['Fragment'],null,q['createElement'](oi,{'title':zG['title']},q['createElement'](ns,{'value':zy['keyPoints'],'onValueChange':zL,'instrument':zB,'drawingsDict':zD,'currentTimezone':zC,'withPrice':!0x0})),q['createElement'](oi,{'title':zH['title']},q['createElement'](uv,{'value':zy,'onValueChange':zz,'drawingsDict':zD,'palette':zA})),q['createElement'](oi,{'title':zF['title']},q['createElement'](tZ,{'value':zy,'onValueChange':zz,'drawingsDict':zD})),q['createElement'](oi,{'title':zI['title']},q['createElement'](tN,{'value':zy,'onValueChange':zz,'drawingsDict':zD})),q['createElement'](og,null,q['createElement'](oi,{'title':zE['title']},q['createElement'](sn,{'value':zy,'onValueChange':zz,'drawingsDict':zD}))));}),uA=B['ZP']['div']`
	margin: ${zx=>zx['margin']?'0\x20var(--spacer-05)':'0'};
	padding: ${zx=>zx['padding']?'var(--spacer-1)':'0'};

	&:last-child {
		margin-right: 0;
	}
`,uB=(0x0,q['memo'])(({className:zx,children:zy,padding:zz=!0x1,margin:zA=!0x0})=>q['createElement'](uA,{'className':zx,'padding':zz,'margin':zA},zy)),uC=(0x0,B['ZP'])(L['z'])`
	font-size: var(--font-size-m);
	font-family: var(--font-main);
	padding: 3px 4px;
	border-radius: 4px;
	background-color: transparent;
	height: 24px;
	min-width: 24px;

	&:hover {
		background: var(--dropdown-list_item-hovered-bg);
	}

	&:after {
		content: '';
		position: absolute;
		bottom: 0px;
		left: 0;
		border: 2px solid transparent;
		border-bottom: 2px solid #6e6c6b;
		border-left: 2px solid #6e6c6b;
		border-radius: 1px;
	}
`,uD=B['ZP']['div']`
	display: flex;
	font-weight: normal;
	align-items: center;
	flex-wrap: nowrap;
	justify-content: space-between;
	color: var(--databox-text-default);

	&:hover {
		color: inherit;
	}
`,uE=B['ZP']['div']`
	display: flex;
	box-shadow: inherit;
`,uF=B['ZP']['div']`
	width: 9px;
	height: 5px;
	margin-left: 10px;
	margin-right: 5px;
	color: inherit;

	&:hover {
		color: inherit;
	}
`,uG=(0x0,q['memo'])((0x0,q['forwardRef'])((zx,zy)=>{const {children:zz,onClick:zA,className:zB,additionalProps:zC}=zx;return q['createElement'](uC,{'ref':zy,'onClick':zA,'className':zB},q['createElement'](uD,null,zC&&zC['value'],zz));})),uH=(0x0,B['ZP'])(ei['J'])`
	min-width: 43px;
`,uI=B['ZP']['div']`
	font-size: var(--font-size-m);
`,uJ=(0x0,B['ZP'])(eo['v'])`
	padding: var(--spacer-1);
	margin: 0;
	padding: 0;
	list-style: none;
	position: relative;
`;var uK=Object['defineProperty'],uL=Object['defineProperties'],uM=Object['getOwnPropertyDescriptors'],uN=Object['getOwnPropertySymbols'],uO=Object['prototype']['hasOwnProperty'],uP=Object['prototype']['propertyIsEnumerable'],uQ=(zx,zy,zz)=>zy in zx?uK(zx,zy,{'enumerable':!0x0,'configurable':!0x0,'writable':!0x0,'value':zz}):zx[zy]=zz,uR=(zx,zy)=>{for(var zz in zy||(zy={}))uO['call'](zy,zz)&&uQ(zx,zz,zy[zz]);if(uN){for(var zz of uN(zy))uP['call'](zy,zz)&&uQ(zx,zz,zy[zz]);}return zx;},uS=(zx,zy)=>uL(zx,uM(zy));const uT=[0xa,0xc,0xe,0x10,0x14,0x18,0x1c,0x20,0x28]['map'](zx=>({'fontSize':zx+'pt'})),uU=zx=>{const zy=zx['toString']()['slice']()['match'](/[0-9]/gi);return zy?zy['join'](''):'';},uV=(0x0,q['memo'])(zx=>{const {value:zy,fonts:zz=uT,onValueChange:zA,Anchor:zB=uG,className:zC,parentEventTarget:zD}=zx,[zE,zF]=(0x0,q['useState'])(!0x1),zG=(0x0,q['useCallback'])(zJ=>{typeof zJ=='boolean'&&zF(zJ);},[]),zH=(0x0,q['useCallback'])(zJ=>{zA(zJ),zF(!0x1);},[zA]),zI=zJ=>q['createElement'](uH,uS(uR({},zJ),{'align':'start','position':'bottom'}));return q['createElement'](om['L'],{'Anchor':zB,'isOpened':zE,'onToggle':zG,'anchorAdditionalProps':{'value':uU(zy)},'Popover':zI,'parentEventTarget':zD,'className':zC},zE&&q['createElement'](uJ,{'onItemSelect':zH},zz['map']((zJ,zK)=>{const zL=zJ['fontSize'],zM=zJ['fontSize']===zy;return q['createElement'](eh['s'],{'key':'item_'+zK,'isActive':zM,'value':zL},q['createElement'](uI,null,uU(zL)));})));}),uW=B['ZP']['div']`
	z-index: 1;
	background-color: ${zx=>zx['color']};
`,uX=(0x0,B['ZP'])(L['z'])`
	position: relative;
	display: flex;
	align-items: center;
	width: 30px;
	height: 24px;
	min-width: 24px;
	max-width: 24px;
	padding: 0;
	background-color: transparent;

	&:hover {
		background: var(--dropdown-list_item-hovered-bg);
	}
`,uY=B['ZP']['div']`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: -2px;
	transform: translateY(2px);
	fill: none;
`,uZ=B['ZP']['div']``,v0=B['ZP']['div']`
	height: 3px;
	width: 16px;
	margin-top: 3px;
	background-color: ${zx=>zx['color']};
`,v1=(0x0,B['ZP'])(di['a'])`
	svg > path {
		stroke: var(--icon-primary-default-bg);
	}
`,v2=(0x0,q['memo'])((0x0,q['forwardRef'])((zx,zy)=>{const {children:zz,onClick:zA,additionalProps:zB,className:zC}=zx,zD=(0x0,q['useContext'])(dd['k']);return q['createElement'](uX,{'ref':zy,'aria-labelledby':zB==null?void 0x0:zB['ariaLabelledBy'],'onClick':zA,'className':zC,'disabled':zB?zB['disabled']:!0x1},q['createElement'](uZ,null,zB&&q['createElement'](uY,null,q['createElement'](v1,null,zD['drawings']['settingsToolbar']['fill']))),zz);}));v2['displayName']='ColorPickerIconAnchor';const v3=B['ZP']['div']`
	z-index: 1;
	background-color: ${zx=>zx['color']};
`,v4=(0x0,B['ZP'])(L['z'])`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 30px;
	height: 24px;
	min-width: 24px;
	max-width: 24px;
	padding: 0;
	background-color: transparent;

	&:hover {
		background: var(--dropdown-list_item-hovered-bg);
	}
`,v5=B['ZP']['div']`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	fill: none;
	height: 23px;
`,v6=B['ZP']['div']`
	width: 24px;
	height: 24px;
`,v7=B['ZP']['div']`
	position: relative;
	font-size: 13px;
`,v8=B['ZP']['div']`
	height: 3px;
	width: 16px;
	transform: translateY(3px);
	background-color: ${zx=>zx['color']};
`,v9=B['ZP']['div']`
	width: auto;
	position: absolute;
	top: 0;
	left: 0;
	color: var(--icon-primary-default-bg);
	background-color: var(--mini_toolbar-default-bg);
	border-radius: var(--spacer-2);
	z-index: 20;
	${zx=>zx['isSelected']&&'padding:\x200\x20var(--spacer-2)\x200\x200'};
`,va=B['ZP']['div']`
	display: flex;
	align-items: center;
`,vb=B['ZP']['label']`
	font-size: var(--font-size-l);
	color: var(--dropdown-list_item-default-text);
`,vc=(0x0,B['ZP'])(de['E'])`
	height: 24px;
	width: 100%;
	min-width: 24px;
	padding: 0;
	margin: 0;
	background-color: transparent;
	border-radius: var(--spacer-1);

	&:hover {
		background: var(--dropdown-list_item-hovered-bg);
	}

	${C['W']} {
		width: 20px;
		height: 20px;
	}
`,vd=(0x0,B['ZP'])(vc)`
	${C['W']} {
		width: 25px;
		height: 25px;
	}
`,ve=(0x0,B['ZP'])(vc)`
	${C['W']} {
		width: 20px;
		height: 20px;
	}
`,vf=(0x0,B['ZP'])(de['E'])`
	height: 20px;
	width: 20px;
	min-width: 7px;
	padding: 0;
	margin: 0;
	margin-right: -4px;
	color: var(--icon-secondary-default-bg);
	background-color: var(--button-primary-draggable);
	font-size: var(--font-size-m);

	&:hover {
		color: var(--icon-primary-default-bg);
		background-color: var(--button-primary-draggable);
		cursor: grab;
		cursor: -moz-grab;
		cursor: -webkit-grab;
	}

	&:active {
		color: var(--icon-primary-default-bg);
		background-color: var(--button-primary-draggable);
		cursor: grabbing;
		cursor: -moz-grabbing;
		cursor: -webkit-grabbing;
	}
`,vg=(0x0,B['ZP'])(di['a'])`
	svg > path,
	svg > rect {
		${zx=>!zx['preventIconFill']&&B['iv']`
				'fill: var(--icon-primary-default-bg);'
			`}
	}
`,vh=(0x0,q['memo'])((0x0,q['forwardRef'])((zx,zy)=>{const {children:zz,onClick:zA,additionalProps:zB,className:zC}=zx,zD=(0x0,q['useContext'])(dd['k']),zE=q['createElement'](vg,null,zD['drawings']['settingsToolbar']['fontpicker']);return q['createElement'](v4,{'ref':zy,'onClick':zA,'className':zC,'disabled':zB?zB['disabled']:!0x1},q['createElement'](v6,null,zB&&q['createElement'](v5,null,q['createElement'](v7,null,zE))),zz);}));vh['displayName']='ColorPickerTextIconAnchor';var vi=j(0x12f5c);const {EventTargetConsumer:vj,EventTargetProvider:vk}=(0x0,vi['k'])(),vl=nu['Ri']['fromPath'](),vm=vl(['properties','text','textBg']),vn=vl(['properties','text','textFill']),vo=vl(['properties','text','textSize']),vp=(0x0,q['memo'])(zx=>{var zy;const {value:zz,onValueChange:zA,palette:zB}=zx,zC=zz['properties'],zD=(0x0,q['useCallback'])((zK,zL)=>zA(zK['set'](zL)(zz)),[zz,zA]),zE=(0x0,q['useCallback'])(zK=>zD(vm,zK),[zD]),zF=(0x0,q['useCallback'])(zK=>zD(vn,zK),[zD]),zG=(0x0,q['useCallback'])(zK=>zE(zK),[zE]),zH=(0x0,q['useCallback'])(zK=>zF(zK),[zF]),zI=(0x0,q['useMemo'])(()=>(0x0,A['ls'])(zK=>typeof zK=='number'?zK+'px':zK,zK=>zD(vo,zK)),[zD]),zJ=(zy=(0x0,qt['IW'])(['ColorPickerComponent']))!=null?zy:qu['h'];return q['createElement'](vj,null,zK=>q['createElement'](q['Fragment'],null,q['createElement'](uB,{'margin':!0x0},q['createElement'](uV,{'value':zC['text']['textSize'],'onValueChange':zI,'parentEventTarget':zK})),q['createElement'](uB,{'margin':!0x0},q['createElement'](zJ,{'palette':zB,'value':zC['text']['textFill'],'onValueChange':zH,'Anchor':vh,'parentEventTarget':zK})),q['createElement'](uB,{'margin':!0x0},q['createElement'](zJ,{'palette':zB,'value':zC['text']['textBg'],'onValueChange':zG,'Anchor':v2,'parentEventTarget':zK}))));}),vq=zx=>{if((0x0,rV['C0'])(zx,'fibonacci_rays'))return zx['properties']['rays']['find'](zy=>zy['lineColor']!==zx['properties']['line']['lineColor'])===void 0x0;if((0x0,rV['C0'])(zx,'fibonacci_time_zones')||(0x0,rV['C0'])(zx,'fibonacci_channel'))return zx['properties']['zones']['find'](zy=>zy['lineColor']!==zx['properties']['line']['lineColor'])===void 0x0;if((0x0,rV['C0'])(zx,'gann_fan'))return zx['properties']['rays']['find'](zy=>zy['line']['lineColor']!==zx['properties']['line']['lineColor'])===void 0x0;if((0x0,rV['C0'])(zx,'gann_box')){for(const zy of zx['properties']['coefficients']['priceLevel'])if(zy['line']['lineColor']!==zx['properties']['line']['lineColor'])return!0x1;for(const zz of zx['properties']['coefficients']['timeLevel'])if(zz['line']['lineColor']!==zx['properties']['line']['lineColor'])return!0x1;return!0x0;}if((0x0,rV['C0'])(zx,'gann_square')){for(const zA of zx['properties']['coefficients']['levels'])if(zA['line']['lineColor']!==zx['properties']['line']['lineColor'])return!0x1;for(const zB of zx['properties']['coefficients']['fans'])if(zB['line']['lineColor']!==zx['properties']['line']['lineColor'])return!0x1;for(const zC of zx['properties']['coefficients']['arcs'])if(zC['line']['lineColor']!==zx['properties']['line']['lineColor'])return!0x1;return!0x0;}return!0x0;},vr=(0x0,B['ZP'])(L['z'])`
	height: 24px;
	width: 24px;
	min-width: 24px;
	padding: 0;
	border: 0;
	border-radius: 4px;
	background: transparent;

	&:hover {
		background: var(--dropdown-list_item-hovered-bg);
	}

	&:focus {
		background: var(--button-tertiaty-pressed);
	}

	&:active {
		background: var(--button-tertiaty-pressed);
	}

	${C['W']} {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-wrap: nowrap;
	}

	${C['W']}:after {
		content: '';
		position: absolute;
		bottom: -2px;
		left: 0;
		border: 2px solid transparent;
		border-bottom: 2px solid #6e6c6b;
		border-left: 2px solid #6e6c6b;
		border-radius: 1px;
	}
`,vs=B['ZP']['div']`
	position: relative;
`,vt=(0x0,q['memo'])((0x0,q['forwardRef'])((zx,zy)=>{const {onClick:zz,children:zA,className:zB}=zx,zC=(0x0,q['useContext'])(dd['k']);return q['createElement'](vr,{'className':zB,'ref':zy,'onClick':zz},q['createElement'](vs,null,q['createElement'](vg,null,zC['drawings']['settingsToolbar']['linepicker'])),zA);})),vu=(0x0,q['memo'])(zx=>{var zy;const {value:zz,palette:zA,className:zB,onColorChange:zC,onLinePickerChange:zD}=zx,zE=zz['properties'],zF=(zy=(0x0,qt['IW'])(['ColorPickerComponent']))!=null?zy:qu['h'];return q['createElement'](vj,null,zG=>q['createElement'](va,{'className':zB},q['createElement'](uB,{'padding':!0x1,'margin':!0x0},q['createElement'](zF,{'Anchor':rv,'showOpacitySelector':vq(zz),'palette':zA,'value':zz['properties']['line']['lineColor'],'onValueChange':zC,'parentEventTarget':zG})),q['createElement'](uB,null,q['createElement'](qs,{'value':{'lineWidth':pl(zE['line']['lineWidth']),'lineDash':pg(zE['line']['lineDash'])},'onValueChange':zD,'Anchor':vt,'parentEventTarget':zG}))));}),vv=(0x0,q['memo'])(zx=>{const {value:zy,palette:zz,drawingsDict:zA,onValueChange:zB}=zx,zC=zA['popup']['sections']['style'];return q['createElement'](q['Fragment'],null,q['createElement'](oi,{'title':zC['title']},q['createElement'](uv,{'value':zy,'onValueChange':zB,'drawingsDict':zA,'palette':zz}),q['createElement'](sW,{'value':zy,'onValueChange':zB,'palette':zz,'drawingsDict':zA})));}),vw=(0x0,q['memo'])(zx=>{const {value:zy,palette:zz,drawingsDict:zA,onValueChange:zB}=zx,zC=zA['popup']['sections']['style'];return q['createElement'](q['Fragment'],null,q['createElement'](oi,{'title':zC['title']},q['createElement'](uv,{'value':zy,'onValueChange':zB,'drawingsDict':zA,'palette':zz})));}),vx=nu['Ri']['fromPath']()(['keyPoints']),vy=(0x0,q['memo'])(zx=>{const {value:zy,onValueChange:zz,palette:zA,instrument:zB,currentTimezone:zC,drawingsDict:zD}=zx,zE=zD['popup']['sections']['extend'],zF=zD['popup']['sections']['labels'],zG=zD['popup']['sections']['coordinates'],zH=zD['popup']['sections']['style'],zI=zD['popup']['sections']['measureBox'],zJ=(0x0,q['useCallback'])((zM,zN)=>zz(zM['set'](zN)(zy)),[zy,zz]),zK=(0x0,q['useCallback'])(zM=>zJ(vx,zM),[zJ]),zL=(0x0,q['useCallback'])(zM=>zK([...zM]),[zK]);return q['createElement'](q['Fragment'],null,q['createElement'](oi,{'title':zG['title']},q['createElement'](ns,{'value':zy['keyPoints'],'onValueChange':zL,'instrument':zB,'drawingsDict':zD,'currentTimezone':zC,'withPrice':!0x0})),q['createElement'](oi,{'title':zH['title']},q['createElement'](uv,{'value':zy,'onValueChange':zz,'palette':zA,'drawingsDict':zD})),q['createElement'](oi,{'title':zF['title']},q['createElement'](tZ,{'value':zy,'onValueChange':zz,'drawingsDict':zD})),q['createElement'](oi,{'title':zI['title']},q['createElement'](tN,{'value':zy,'onValueChange':zz,'drawingsDict':zD})),q['createElement'](oi,{'title':zE['title']},q['createElement'](sn,{'value':zy,'onValueChange':zz,'drawingsDict':zD})));}),vz=nu['Ri']['fromPath']()(['properties','iconStyle']),vA=(0x0,q['memo'])(zx=>{const {value:zy,onValueChange:zz,palette:zA,className:zB,drawingsDict:zC}=zx,zD=zy['properties'],zE=(0x0,q['useCallback'])(zF=>{const zG=vz['set'](zF)(zy);zz(zG);},[zy,zz]);return q['createElement'](vj,null,zF=>q['createElement'](va,{'className':zB},q['createElement'](uB,{'padding':!0x1},q['createElement'](rH,{'value':zD['iconStyle'],'onValueChange':zE,'palette':zA,'drawingsDict':zC,'renderWithWrap':!0x0,'parentEventTarget':zF,'disableBottomMargin':!0x0}))));}),vB=nu['Ri']['fromPath']()(['properties','line','lineColor']),vC=(0x0,q['memo'])(zx=>{var zy;const {value:zz,onValueChange:zA,palette:zB,className:zC}=zx,zD=zz['properties'],zE=(0x0,q['useCallback'])((zH,zI)=>zA(zH['set'](zI)(zz)),[zz,zA]),zF=(0x0,q['useCallback'])(zH=>zE(vB,zH),[zE]),zG=(zy=(0x0,qt['IW'])(['ColorPickerComponent']))!=null?zy:qu['h'];return q['createElement'](vj,null,zH=>q['createElement'](va,{'className':zC},q['createElement'](uB,{'padding':!0x1},q['createElement'](zG,{'palette':zB,'value':zD['line']['lineColor'],'onValueChange':zF,'Anchor':rv,'parentEventTarget':zH}))));}),vD=nu['Ri']['fromPath'](),vE=vD(['properties','line','lineColor']),vF=vD(['properties','line','lineWidth']),vG=(0x0,q['memo'])(zx=>{var zy;const {value:zz,palette:zA,drawingsDict:zB,onValueChange:zC}=zx,zD=zB['popup']['sections']['style'],zE=zz['properties'],zF=(0x0,q['useCallback'])((zJ,zK)=>zC(zJ['set'](zK)(zz)),[zz,zC]),zG=(0x0,q['useCallback'])(zJ=>zF(vF,zJ),[zF]),zH=(0x0,q['useCallback'])(zJ=>zF(vE,zJ),[zF]),zI=(zy=(0x0,qt['IW'])(['ColorPickerComponent']))!=null?zy:qu['h'];return q['createElement'](q['Fragment'],null,q['createElement'](oi,{'title':zD['title']},q['createElement'](ao,null,q['createElement'](ar,{'label':zD['lineColor']},q['createElement'](zI,{'palette':zA,'value':zE['line']['lineColor'],'onValueChange':zH}))),q['createElement'](ao,null,q['createElement'](ar,{'label':zD['lineWidth']},q['createElement'](as['l'],{'min':0x0,'max':Number['POSITIVE_INFINITY'],'step':0x1,'value':zE['line']['lineWidth'],'onValueChange':zG})))));}),vH=nu['Ri']['fromPath']()(['keyPoints']),vI=(0x0,q['memo'])(zx=>{const {value:zy,onValueChange:zz,palette:zA,instrument:zB,currentTimezone:zC,drawingsDict:zD}=zx,zE=zD['popup']['sections']['extend'],zF=zD['popup']['sections']['labels'],zG=zD['popup']['sections']['coordinates'],zH=zD['popup']['sections']['style'],zI=zD['popup']['sections']['measureBox'],zJ=(0x0,q['useCallback'])((zM,zN)=>zz(zM['set'](zN)(zy)),[zy,zz]),zK=(0x0,q['useCallback'])(zM=>zJ(vH,zM),[zJ]),zL=(0x0,q['useCallback'])(zM=>zK([...zM]),[zK]);return q['createElement'](q['Fragment'],null,q['createElement'](oi,{'title':zG['title']},q['createElement'](ns,{'value':zy['keyPoints'],'onValueChange':zL,'instrument':zB,'drawingsDict':zD,'currentTimezone':zC,'withPrice':!0x0})),q['createElement'](oi,{'title':zH['title']},q['createElement'](r3,{'value':zy,'onValueChange':zz,'palette':zA})),q['createElement'](oi,{'title':zF['title']},q['createElement'](tZ,{'value':zy,'onValueChange':zz,'drawingsDict':zD})),q['createElement'](oi,{'title':zI['title']},q['createElement'](tN,{'value':zy,'onValueChange':zz,'drawingsDict':zD})),q['createElement'](oi,{'title':zE['title']},q['createElement'](sn,{'value':zy,'onValueChange':zz,'drawingsDict':zD})));}),vJ=nu['Ri']['fromPath']()(['keyPoints']),vK=(0x0,q['memo'])(zx=>{const {value:zy,onValueChange:zz,palette:zA,instrument:zB,currentTimezone:zC,drawingsDict:zD}=zx,zE=zD['popup']['sections']['extend'],zF=zD['popup']['sections']['labels'],zG=zD['popup']['sections']['coordinates'],zH=zD['popup']['sections']['style'],zI=zD['popup']['sections']['measureBox'],zJ=(0x0,q['useCallback'])((zM,zN)=>zz(zM['set'](zN)(zy)),[zy,zz]),zK=(0x0,q['useCallback'])(zM=>zJ(vJ,zM),[zJ]),zL=(0x0,q['useCallback'])(zM=>zK([...zM]),[zK]);return q['createElement'](q['Fragment'],null,q['createElement'](oi,{'title':zG['title']},q['createElement'](ns,{'value':zy['keyPoints'],'onValueChange':zL,'instrument':zB,'drawingsDict':zD,'currentTimezone':zC,'withPrice':!0x0})),q['createElement'](oi,{'title':zH['title']},q['createElement'](uv,{'value':zy,'onValueChange':zz,'drawingsDict':zD,'palette':zA})),q['createElement'](oi,{'title':zF['title']},q['createElement'](tZ,{'value':zy,'onValueChange':zz,'drawingsDict':zD})),q['createElement'](oi,{'title':zI['title']},q['createElement'](tN,{'value':zy,'onValueChange':zz,'drawingsDict':zD})),q['createElement'](oi,{'title':zE['title']},q['createElement'](sn,{'value':zy,'onValueChange':zz,'drawingsDict':zD})));}),vL=nu['Ri']['fromPath']()(['keyPoints']),vM=(0x0,q['memo'])(zx=>{const {value:zy,onValueChange:zz,palette:zA,instrument:zB,currentTimezone:zC,drawingsDict:zD}=zx,zE=zD['popup']['sections']['extend'],zF=zD['popup']['sections']['labels'],zG=zD['popup']['sections']['coordinates'],zH=zD['popup']['sections']['style'],zI=zD['popup']['sections']['measureBox'],zJ=(0x0,q['useCallback'])((zM,zN)=>zz(zM['set'](zN)(zy)),[zy,zz]),zK=(0x0,q['useCallback'])(zM=>zJ(vL,zM),[zJ]),zL=(0x0,q['useCallback'])(zM=>zK([...zM]),[zK]);return q['createElement'](q['Fragment'],null,q['createElement'](oi,{'title':zG['title']},q['createElement'](ns,{'value':zy['keyPoints'],'onValueChange':zL,'instrument':zB,'drawingsDict':zD,'currentTimezone':zC,'withPrice':!0x0})),q['createElement'](oi,{'title':zH['title']},q['createElement'](uv,{'value':zy,'onValueChange':zz,'drawingsDict':zD,'palette':zA})),q['createElement'](oi,{'title':zF['title']},q['createElement'](tZ,{'value':zy,'onValueChange':zz,'drawingsDict':zD})),q['createElement'](oi,{'title':zI['title']},q['createElement'](tN,{'value':zy,'onValueChange':zz,'drawingsDict':zD})),q['createElement'](oi,{'title':zE['title']},q['createElement'](sn,{'value':zy,'onValueChange':zz,'drawingsDict':zD})));});function vN(zx){const {showBorderLens:zy,borderStyleLens:zz}=(0x0,q['useMemo'])(()=>{const zI=nu['Ri']['fromPath'](),zJ=zI(['properties','borders','visible']),zK=zI(['properties','borders','all']);return{'showBorderLens':zJ,'borderStyleLens':zK};},[]),{value:zA,onValueChange:zB,drawingsDict:zC,palette:zD}=zx,zE=zA['properties'],zF=(0x0,q['useCallback'])((zI,zJ)=>zB(zI['set'](zJ)(zA)),[zA,zB]),zG=(0x0,q['useCallback'])(zI=>zF(zz,zI),[zF,zz]),zH=(0x0,q['useCallback'])(zI=>zF(zy,zI),[zF,zy]);return q['createElement'](ms['Ch'],null,zI=>q['createElement'](ao,null,q['createElement'](ar,null,q['createElement'](qU,{'value':zE['borders']['all']||zE['line'],'onValueChange':zG,'palette':zD,'parentEventTarget':zI,'noGap':!0x0,'noGapItems':!0x0})),q['createElement'](ar,null,q['createElement'](r7,null,q['createElement'](r6['X'],{'value':!!zE['borders']['visible'],'onValueChange':zH}),q['createElement']('span',null,zC['popup']['sections']['background']['borderCheckbox'])))));}const vO=(0x0,ol['l'])(vN),vP=nu['Ri']['fromPath']()(['keyPoints']),vQ=(0x0,q['memo'])(zx=>{const {value:zy,palette:zz,instrument:zA,currentTimezone:zB,drawingsDict:zC,onValueChange:zD}=zx,zE=zC['popup']['sections']['style'],zF=zC['popup']['sections']['coordinates'],zG=(0x0,q['useCallback'])((zJ,zK)=>zD(zJ['set'](zK)(zy)),[zy,zD]),zH=(0x0,q['useCallback'])(zJ=>zG(vP,zJ),[zG]),zI=(0x0,q['useCallback'])(zJ=>zH([...zJ]),[zH]);return q['createElement'](q['Fragment'],null,q['createElement'](oi,{'title':zF['title']},q['createElement'](ns,{'value':zy['keyPoints'],'onValueChange':zI,'instrument':zA,'drawingsDict':zC,'currentTimezone':zB,'withPrice':!0x0})),q['createElement'](oi,{'title':zE['title']},q['createElement'](r3,{'value':zy,'onValueChange':zD,'palette':zz,'leadingLabel':zE['lineColor']}),q['createElement'](sW,{'value':zy,'onValueChange':zD,'palette':zz,'drawingsDict':zC}),q['createElement'](vO,{'value':zy,'onValueChange':zD,'palette':zz,'drawingsDict':zC})));}),vR={'lineDash':[],'lineWidth':0x1,'lineColor':'rgba(255,170,0,1)'};function vS(zx){const {bottomBorderStyleLens:zy}=(0x0,q['useMemo'])(()=>({'bottomBorderStyleLens':nu['Ri']['fromPath']()(['properties','borders','bottom'])}),[]),{value:zz,onValueChange:zA,drawingsDict:zB,palette:zC}=zx,zD=zz['properties'],zE=(0x0,q['useCallback'])((zI,zJ)=>zA(zI['set'](zJ)(zz)),[zz,zA]),zF=(0x0,q['useCallback'])(zI=>zE(zy,zI),[zE,zy]),zG=(0x0,q['useCallback'])(zI=>{zI?zF(vR):zE(zy,void 0x0);},[zF,zE,zy]),zH=(0x0,q['useMemo'])(()=>zD['borders']['bottom']===void 0x0,[zD['borders']['bottom']]);return q['createElement'](ms['Ch'],null,zI=>q['createElement'](ao,null,q['createElement'](ar,null,q['createElement'](qU,{'value':zD['borders']['bottom']||zD['line'],'onValueChange':zF,'palette':zC,'parentEventTarget':zI,'noGap':!0x0,'noGapItems':!0x0})),q['createElement'](ar,null,q['createElement'](r7,null,q['createElement'](r6['X'],{'value':!zH,'onValueChange':zG}),q['createElement']('span',null,zB['popup']['sections']['borders']['bottom'])))));}const vT=(0x0,ol['l'])(vS),vU={'lineDash':[],'lineWidth':0x1,'lineColor':'rgba(255,170,0,1)'};function vV(zx){const {topBorderStyleLens:zy}=(0x0,q['useMemo'])(()=>({'topBorderStyleLens':nu['Ri']['fromPath']()(['properties','borders','top'])}),[]),{value:zz,onValueChange:zA,drawingsDict:zB,palette:zC}=zx,zD=zz['properties'],zE=(0x0,q['useCallback'])((zI,zJ)=>zA(zI['set'](zJ)(zz)),[zz,zA]),zF=(0x0,q['useCallback'])(zI=>zE(zy,zI),[zE,zy]),zG=(0x0,q['useCallback'])(zI=>{zI?zF(vU):zE(zy,void 0x0);},[zF,zE,zy]),zH=(0x0,q['useMemo'])(()=>zD['borders']['top']===void 0x0,[zD['borders']['top']]);return q['createElement'](ms['Ch'],null,zI=>q['createElement'](ao,null,q['createElement'](ar,null,q['createElement'](qU,{'value':zD['borders']['top']||zD['line'],'onValueChange':zF,'palette':zC,'parentEventTarget':zI,'noGap':!0x0,'noGapItems':!0x0})),q['createElement'](ar,null,q['createElement'](r7,null,q['createElement'](r6['X'],{'value':!zH,'onValueChange':zG}),q['createElement']('span',null,zB['popup']['sections']['borders']['top'])))));}const vW=(0x0,ol['l'])(vV),vX=nu['Ri']['fromPath']()(['keyPoints']),vY=(0x0,q['memo'])(zx=>{const {value:zy,palette:zz,instrument:zA,currentTimezone:zB,drawingsDict:zC,onValueChange:zD}=zx,zE=zC['popup']['sections']['style'],zF=zC['popup']['sections']['coordinates'],zG=(0x0,q['useCallback'])((zI,zJ)=>zD(zI['set'](zJ)(zy)),[zy,zD]),zH=(0x0,q['useCallback'])(zI=>zG(vX,zI),[zG]);return q['createElement'](q['Fragment'],null,q['createElement'](oi,{'title':zF['title']},q['createElement'](ns,{'value':zy['keyPoints'],'onValueChange':zH,'instrument':zA,'drawingsDict':zC,'currentTimezone':zB,'withPrice':!0x0})),q['createElement'](oi,{'title':zE['title']},q['createElement'](r3,{'value':zy,'onValueChange':zD,'palette':zz,'leadingLabel':zE['lineColor']}),q['createElement'](sW,{'value':zy,'onValueChange':zD,'palette':zz,'drawingsDict':zC}),q['createElement'](vW,{'value':zy,'onValueChange':zD,'drawingsDict':zC,'palette':zz}),q['createElement'](vT,{'value':zy,'onValueChange':zD,'drawingsDict':zC,'palette':zz})));}),vZ={'lineDash':[],'lineWidth':0x1,'lineColor':'rgba(255,170,0,1)'};function w0(zx){const {rightBorderStyleLens:zy}=(0x0,q['useMemo'])(()=>({'rightBorderStyleLens':nu['Ri']['fromPath']()(['properties','borders','right'])}),[]),{value:zz,onValueChange:zA,drawingsDict:zB,palette:zC}=zx,zD=zz['properties'],zE=(0x0,q['useCallback'])((zI,zJ)=>zA(zI['set'](zJ)(zz)),[zz,zA]),zF=(0x0,q['useCallback'])(zI=>zE(zy,zI),[zE,zy]),zG=(0x0,q['useCallback'])(zI=>{zI?zF(vZ):zE(zy,void 0x0);},[zF,zE,zy]),zH=(0x0,q['useMemo'])(()=>zD['borders']['right']===void 0x0,[zD['borders']['right']]);return q['createElement'](ms['Ch'],null,zI=>q['createElement'](ao,null,q['createElement'](ar,null,q['createElement'](qU,{'value':zD['borders']['right']||zD['line'],'onValueChange':zF,'palette':zC,'parentEventTarget':zI,'noGap':!0x0,'noGapItems':!0x0})),q['createElement'](ar,null,q['createElement'](r7,null,q['createElement'](r6['X'],{'value':!zH,'onValueChange':zG}),q['createElement']('span',null,zB['popup']['sections']['borders']['right'])))));}const w1=(0x0,ol['l'])(w0),w2={'lineDash':[],'lineWidth':0x1,'lineColor':'rgba(255,170,0,1)'};function w3(zx){const {leftBorderStyleLens:zy}=(0x0,q['useMemo'])(()=>({'leftBorderStyleLens':nu['Ri']['fromPath']()(['properties','borders','left'])}),[]),{value:zz,onValueChange:zA,drawingsDict:zB,palette:zC}=zx,zD=zz['properties'],zE=(0x0,q['useCallback'])((zI,zJ)=>zA(zI['set'](zJ)(zz)),[zz,zA]),zF=(0x0,q['useCallback'])(zI=>zE(zy,zI),[zE,zy]),zG=(0x0,q['useCallback'])(zI=>{zI?zF(w2):zE(zy,void 0x0);},[zF,zE,zy]),zH=(0x0,q['useMemo'])(()=>zD['borders']['left']===void 0x0,[zD['borders']['left']]);return q['createElement'](ms['Ch'],null,zI=>q['createElement'](ao,null,q['createElement'](ar,null,q['createElement'](qU,{'value':zD['borders']['left']||zD['line'],'onValueChange':zF,'palette':zC,'parentEventTarget':zI,'noGap':!0x0,'noGapItems':!0x0})),q['createElement'](ar,null,q['createElement'](r7,null,q['createElement'](r6['X'],{'value':!zH,'onValueChange':zG}),q['createElement']('span',null,zB['popup']['sections']['borders']['left'])))));}const w4=(0x0,ol['l'])(w3),w5=nu['Ri']['fromPath']()(['keyPoints']),w6=(0x0,q['memo'])(zx=>{const {value:zy,palette:zz,instrument:zA,currentTimezone:zB,drawingsDict:zC,onValueChange:zD}=zx,zE=zC['popup']['sections']['style'],zF=zC['popup']['sections']['coordinates'],zG=(0x0,q['useCallback'])((zJ,zK)=>zD(zJ['set'](zK)(zy)),[zy,zD]),zH=(0x0,q['useCallback'])(zJ=>zG(w5,zJ),[zG]),zI=(0x0,q['useCallback'])(zJ=>zH([...zJ]),[zH]);return q['createElement'](q['Fragment'],null,q['createElement'](oi,{'title':zF['title']},q['createElement'](ns,{'value':zy['keyPoints'],'onValueChange':zI,'instrument':zA,'drawingsDict':zC,'currentTimezone':zB,'withPrice':!0x0})),q['createElement'](oi,{'title':zE['title']},q['createElement'](r3,{'value':zy,'onValueChange':zD,'palette':zz,'leadingLabel':zE['lineColor']}),q['createElement'](sW,{'value':zy,'onValueChange':zD,'palette':zz,'drawingsDict':zC}),q['createElement'](w4,{'value':zy,'onValueChange':zD,'palette':zz,'drawingsDict':zC}),q['createElement'](w1,{'value':zy,'onValueChange':zD,'palette':zz,'drawingsDict':zC})));});var w7=Object['defineProperty'],w8=Object['getOwnPropertySymbols'],w9=Object['prototype']['hasOwnProperty'],wa=Object['prototype']['propertyIsEnumerable'],wb=(zx,zy,zz)=>zy in zx?w7(zx,zy,{'enumerable':!0x0,'configurable':!0x0,'writable':!0x0,'value':zz}):zx[zy]=zz,wc=(zx,zy)=>{for(var zz in zy||(zy={}))w9['call'](zy,zz)&&wb(zx,zz,zy[zz]);if(w8){for(var zz of w8(zy))wa['call'](zy,zz)&&wb(zx,zz,zy[zz]);}return zx;},wd=(zx,zy)=>{var zz={};for(var zA in zx)w9['call'](zx,zA)&&zy['indexOf'](zA)<0x0&&(zz[zA]=zx[zA]);if(zx!=null&&w8){for(var zA of w8(zx))zy['indexOf'](zA)<0x0&&wa['call'](zx,zA)&&(zz[zA]=zx[zA]);}return zz;};function we(zx){const {elliottWaveLineVisibilityLens:zy}=(0x0,q['useMemo'])(()=>({'elliottWaveLineVisibilityLens':nu['Ri']['fromPath']()(['properties','line','lineVisibility'])}),[]),zz=zx,{value:zA,onValueChange:zB,drawingsDict:zC}=zz,zD=wd(zz,['value','onValueChange','drawingsDict']),zE=zA['properties'],zF=zC['popup']['sections']['style'],zG=(0x0,q['useCallback'])((zI,zJ)=>zB(zI['set'](zJ)(zA)),[zA,zB]),zH=(0x0,q['useCallback'])(()=>zG(zy,!zE['line']['lineVisibility']),[zG,zE['line']['lineVisibility'],zy]);return q['createElement'](ao,{'vertical':!0x0},q['createElement'](r3,wc({'value':zA,'onValueChange':zB},zD)),q['createElement'](ar,null,q['createElement'](r7,null,q['createElement'](r6['X'],{'value':zE['line']['lineVisibility'],'onValueChange':zH}),q['createElement']('span',null,zF['lineVisibility']))));}const wf=(0x0,ol['l'])(we);var wg=Object['defineProperty'],wh=Object['defineProperties'],wi=Object['getOwnPropertyDescriptors'],wj=Object['getOwnPropertySymbols'],wk=Object['prototype']['hasOwnProperty'],wl=Object['prototype']['propertyIsEnumerable'],wm=(zx,zy,zz)=>zy in zx?wg(zx,zy,{'enumerable':!0x0,'configurable':!0x0,'writable':!0x0,'value':zz}):zx[zy]=zz,wn=(zx,zy)=>{for(var zz in zy||(zy={}))wk['call'](zy,zz)&&wm(zx,zz,zy[zz]);if(wj){for(var zz of wj(zy))wl['call'](zy,zz)&&wm(zx,zz,zy[zz]);}return zx;},wo=(zx,zy)=>wh(zx,wi(zy)),wp=(zx,zy)=>{var zz={};for(var zA in zx)wk['call'](zx,zA)&&zy['indexOf'](zA)<0x0&&(zz[zA]=zx[zA]);if(zx!=null&&wj){for(var zA of wj(zx))zy['indexOf'](zA)<0x0&&wl['call'](zx,zA)&&(zz[zA]=zx[zA]);}return zz;};function wq(zx){const {elliotDegreeLens:zy}=(0x0,q['useMemo'])(()=>({'elliotDegreeLens':nu['Ri']['fromPath']()(['properties','settings','degreeType'])}),[]),{value:zz,onValueChange:zA}=zx,zB=zz['properties'],zC=(0x0,q['useCallback'])((zE,zF)=>zA(zE['set'](zF)(zz)),[zz,zA]),zD=(0x0,q['useCallback'])(zE=>wu(zE)&&zC(zy,zE),[zC,zy]);return q['createElement'](ms['Ch'],null,zE=>q['createElement'](ao,null,q['createElement'](ar,null,q['createElement'](wt,{'value':zB['settings']['degreeType'],'onValueChange':zD,'parentEventTarget':zE}))));}const wr=(0x0,ol['l'])(wq),ws=['Subminutte','Minutte','Minute','Minor','Intermediate','Primary','Cycle','Super\x20Cycle','Grand\x20Super\x20Cycle'],wt=(0x0,q['memo'])(zx=>{const zy=zx,{value:zz,onValueChange:zA}=zy,zB=wp(zy,['value','onValueChange']),[zC,zD]=(0x0,q['useState'])(!0x1),zE=(0x0,q['useCallback'])(()=>zD(!zC),[zC]),zF=(0x0,q['useCallback'])(zA,[zA]),zG=(0x0,q['useCallback'])(zH=>zz===zH,[zz]);return q['createElement'](r8,wo(wn({},zB),{'value':zz,'onValueChange':zF,'isOpened':zC,'onToggle':zE}),ws['map'](zH=>q['createElement'](r9,{'key':zH,'value':zH,'isActive':zG(zH)},zH)));});function wu(zx){return typeof zx=='string'&&['Subminutte','Minutte','Minute','Minor','Intermediate','Primary','Cycle','Super\x20Cycle','Grand\x20Super\x20Cycle']['includes'](zx);}const wv=nu['Ri']['fromPath']()(['keyPoints']),ww=(0x0,q['memo'])(zx=>{const {value:zy,onValueChange:zz,instrument:zA,currentTimezone:zB,drawingsDict:zC,palette:zD}=zx,zE=zC['popup']['sections']['style'],zF=zC['popup']['sections']['coordinates'],zG=(0x0,q['useCallback'])((zI,zJ)=>zz(zI['set'](zJ)(zy)),[zy,zz]),zH=(0x0,q['useCallback'])(zI=>zG(wv,zI),[zG]);return q['createElement'](q['Fragment'],null,q['createElement'](oi,{'title':zF['title']},q['createElement'](ns,{'value':zy['keyPoints'],'onValueChange':zH,'instrument':zA,'drawingsDict':zC,'currentTimezone':zB,'withPrice':!0x0})),q['createElement'](oi,{'title':zE['title']},q['createElement'](wf,{'value':zy,'onValueChange':zz,'drawingsDict':zC,'palette':zD})),q['createElement'](oi,{'title':zE['elliottDegree']},q['createElement'](wr,{'value':zy,'onValueChange':zz})));});var wx=Object['defineProperty'],wy=Object['defineProperties'],wz=Object['getOwnPropertyDescriptors'],wA=Object['getOwnPropertySymbols'],wB=Object['prototype']['hasOwnProperty'],wC=Object['prototype']['propertyIsEnumerable'],wD=(zx,zy,zz)=>zy in zx?wx(zx,zy,{'enumerable':!0x0,'configurable':!0x0,'writable':!0x0,'value':zz}):zx[zy]=zz,wE=(zx,zy)=>{for(var zz in zy||(zy={}))wB['call'](zy,zz)&&wD(zx,zz,zy[zz]);if(wA){for(var zz of wA(zy))wC['call'](zy,zz)&&wD(zx,zz,zy[zz]);}return zx;},wF=(zx,zy)=>wy(zx,wz(zy));const wG=nu['Ri']['fromPath'](),wH=wG(['keyPoints']),wI=wG(['properties','zones']),wJ=(0x0,q['memo'])(zx=>{const {value:zy,onValueChange:zz,instrument:zA,currentTimezone:zB,drawingsDict:zC,palette:zD}=zx,zE=zy['properties'],zF=zC['popup']['sections']['style'],zG=zC['popup']['sections']['labels'],zH=zC['popup']['sections']['extend'],zI=zC['popup']['sections']['coordinates'],zJ=(0x0,q['useCallback'])((zO,zP)=>zz(zO['set'](zP)(zy)),[zy,zz]),zK=(0x0,q['useCallback'])(zO=>zJ(wH,zO),[zJ]),zL=(0x0,q['useCallback'])(zO=>zK([...zO]),[zK]),zM=(0x0,q['useCallback'])(zO=>zJ(wI,zO),[zJ]),zN=(0x0,q['useCallback'])(()=>(0x0,A['zG'])(zE['zones'],z['UI'](zO=>wF(wE({},zO),{'lineWidth':zE['line']['lineWidth'],'lineColor':zE['line']['lineColor'],'lineDash':zE['line']['lineDash']})),zM),[zE,zM]);return q['createElement'](q['Fragment'],null,q['createElement'](oi,{'title':zI['title']},q['createElement'](ns,{'value':zy['keyPoints'],'onValueChange':zL,'drawingsDict':zC,'instrument':zA,'currentTimezone':zB,'withPrice':!0x0})),q['createElement'](oi,{'title':zG['title']},q['createElement'](sy,{'value':zy,'onValueChange':zz,'drawingsDict':zC}),q['createElement'](sG,{'value':zy,'onValueChange':zz,'drawingsDict':zC})),q['createElement'](oi,{'title':zF['title']},q['createElement'](rn,{'value':zy,'onValueChange':zz,'palette':zD,'drawingsDict':zC,'applyToAll':zN}),q['createElement'](rd,{'value':zE['zones'],'onValueChange':zM,'palette':zD}),q['createElement'](rL,{'value':zy,'onValueChange':zz,'drawingsDict':zC})),q['createElement'](oi,{'title':zH['title']},q['createElement'](sn,{'value':zy,'onValueChange':zz,'drawingsDict':zC})));}),wK=nu['Ri']['fromPath']()(['keyPoints']),wL=(0x0,q['memo'])(zx=>{const {value:zy,onValueChange:zz,palette:zA,drawingsDict:zB,instrument:zC,currentTimezone:zD}=zx,zE=zB['popup']['sections']['coordinates'],zF=zB['popup']['sections']['style'],zG=(0x0,q['useCallback'])((zJ,zK)=>zz(zJ['set'](zK)(zy)),[zy,zz]),zH=(0x0,q['useCallback'])(zJ=>zG(wK,zJ),[zG]),zI=(0x0,q['useCallback'])(zJ=>zH([...zJ]),[zH]);return q['createElement'](q['Fragment'],null,q['createElement'](oi,{'title':zE['title']},q['createElement'](ns,{'value':zy['keyPoints'],'onValueChange':zI,'instrument':zC,'drawingsDict':zB,'currentTimezone':zD,'withPrice':!0x0})),q['createElement'](oi,{'title':zF['title']},q['createElement'](r3,{'value':zy,'onValueChange':zz,'palette':zA}),q['createElement'](sW,{'value':zy,'onValueChange':zz,'palette':zA,'drawingsDict':zB})));});var wM=Object['defineProperty'],wN=Object['defineProperties'],wO=Object['getOwnPropertyDescriptors'],wP=Object['getOwnPropertySymbols'],wQ=Object['prototype']['hasOwnProperty'],wR=Object['prototype']['propertyIsEnumerable'],wS=(zx,zy,zz)=>zy in zx?wM(zx,zy,{'enumerable':!0x0,'configurable':!0x0,'writable':!0x0,'value':zz}):zx[zy]=zz,wT=(zx,zy)=>{for(var zz in zy||(zy={}))wQ['call'](zy,zz)&&wS(zx,zz,zy[zz]);if(wP){for(var zz of wP(zy))wR['call'](zy,zz)&&wS(zx,zz,zy[zz]);}return zx;},wU=(zx,zy)=>wN(zx,wO(zy));const wV=nu['Ri']['fromPath'](),wW=wV(['keyPoints']),wX=wV(['properties','zones']),wY=(0x0,q['memo'])(zx=>{const {value:zy,onValueChange:zz,instrument:zA,currentTimezone:zB,drawingsDict:zC,palette:zD}=zx,zE=zy['properties'],zF=zC['popup']['sections']['style'],zG=zC['popup']['sections']['labels'],zH=zC['popup']['sections']['coordinates'],zI=(0x0,q['useCallback'])((zN,zO)=>zz(zN['set'](zO)(zy)),[zy,zz]),zJ=(0x0,q['useCallback'])(zN=>zI(wW,zN),[zI]),zK=(0x0,q['useCallback'])(zN=>zJ([...zN]),[zJ]),zL=(0x0,q['useCallback'])(zN=>zI(wX,zN),[zI]),zM=(0x0,q['useCallback'])(()=>(0x0,A['zG'])(zE['zones'],z['UI'](zN=>wU(wT({},zN),{'lineWidth':zE['line']['lineWidth'],'lineColor':zE['line']['lineColor'],'lineDash':zE['line']['lineDash']})),zL),[zE,zL]);return q['createElement'](q['Fragment'],null,q['createElement'](oi,{'title':zH['title']},q['createElement'](ns,{'value':zy['keyPoints'],'onValueChange':zK,'drawingsDict':zC,'instrument':zA,'currentTimezone':zB,'withPrice':!0x0})),q['createElement'](oi,{'title':zG['title']},q['createElement'](sy,{'value':zy,'onValueChange':zz,'drawingsDict':zC})),q['createElement'](oi,{'title':zF['title']},q['createElement'](rn,{'value':zy,'onValueChange':zz,'palette':zD,'drawingsDict':zC,'applyToAll':zM}),q['createElement'](rd,{'value':zE['zones'],'onValueChange':zL,'palette':zD,'step':0x1,'precision':0x0,'multiplier':0x1}),q['createElement'](rL,{'value':zy,'onValueChange':zz,'drawingsDict':zC})));}),wZ=nu['Ri']['fromPath'](),x0=wZ(['properties','circles']),x1=wZ(['keyPoints']),x2=nu['Ri']['fromProp']()('line')['composeLens'](nu['Ri']['fromProps']()(['lineColor','lineDash','lineWidth'])),x3=(0x0,q['memo'])(zx=>{const {value:zy,onValueChange:zz,palette:zA,instrument:zB,currentTimezone:zC,drawingsDict:zD}=zx,zE=zy['properties'],zF=zD['popup']['sections']['style'],zG=zD['popup']['sections']['labels'],zH=zD['popup']['sections']['coordinates'],zI=(0x0,q['useCallback'])((zO,zP)=>zz(zO['set'](zP)(zy)),[zy,zz]),zJ=(0x0,q['useCallback'])(zO=>{zI(x1,zO);},[zI]),zK=(0x0,q['useCallback'])(zO=>{zI(x0,zO);},[zI]),zL=(0x0,q['useCallback'])(()=>(0x0,A['zG'])(zE['circles'],z['UI'](x2['set']({'lineWidth':zE['line']['lineWidth'],'lineColor':zE['line']['lineColor'],'lineDash':zE['line']['lineDash']})),zK),[zK,zE]),zM=(0x0,q['useCallback'])(zO=>zI(x0,(0x0,rV['IM'])(zO)),[zI]),zN=(0x0,q['useMemo'])(()=>(0x0,rV['s3'])(zE['circles']),[zE['circles']]);return q['createElement'](q['Fragment'],null,q['createElement'](oi,{'title':zH['title']},q['createElement'](ns,{'value':zy['keyPoints'],'onValueChange':zJ,'instrument':zB,'drawingsDict':zD,'currentTimezone':zC,'withPrice':!0x0})),q['createElement'](oi,{'title':zG['title']},q['createElement'](rU,{'value':zy,'onValueChange':zz,'drawingsDict':zD})),q['createElement'](oi,{'title':zF['title']},q['createElement'](rn,{'value':zy,'onValueChange':zz,'palette':zA,'drawingsDict':zD,'applyToAll':zL}),q['createElement'](rd,{'value':zN,'onValueChange':zM,'palette':zA}),q['createElement'](rL,{'value':zy,'onValueChange':zz,'drawingsDict':zD})));});var x4=Object['defineProperty'],x5=Object['defineProperties'],x6=Object['getOwnPropertyDescriptors'],x7=Object['getOwnPropertySymbols'],x8=Object['prototype']['hasOwnProperty'],x9=Object['prototype']['propertyIsEnumerable'],xa=(zx,zy,zz)=>zy in zx?x4(zx,zy,{'enumerable':!0x0,'configurable':!0x0,'writable':!0x0,'value':zz}):zx[zy]=zz,xb=(zx,zy)=>{for(var zz in zy||(zy={}))x8['call'](zy,zz)&&xa(zx,zz,zy[zz]);if(x7){for(var zz of x7(zy))x9['call'](zy,zz)&&xa(zx,zz,zy[zz]);}return zx;},xc=(zx,zy)=>x5(zx,x6(zy));const xd=nu['Ri']['fromPath'](),xe=xd(['keyPoints']),xf=xd(['properties','coefficients','priceLevel']),xg=xd(['properties','coefficients','timeLevel']),xh=(0x0,q['memo'])(zx=>{const {value:zy,palette:zz,instrument:zA,currentTimezone:zB,drawingsDict:zC,onValueChange:zD}=zx,zE=zy['properties']['coefficients'],zF=zC['popup']['sections']['coordinates'],zG=zC['popup']['sections']['labels'],zH=zC['popup']['sections']['style'],zI=(0x0,q['useCallback'])((zO,zP)=>zD(zO['set'](zP)(zy)),[zy,zD]),zJ=(0x0,q['useCallback'])(zO=>{zI(xe,zO);},[zI]),zK=(0x0,q['useCallback'])(zO=>zI(xf,xj(zO)),[zI]),zL=(0x0,q['useCallback'])(zO=>zI(xg,xj(zO)),[zI]),zM=(0x0,q['useMemo'])(()=>xi(zE['priceLevel']),[zE['priceLevel']]),zN=(0x0,q['useMemo'])(()=>xi(zE['timeLevel']),[zE['timeLevel']]);return q['createElement'](q['Fragment'],null,q['createElement'](oi,{'title':zF['title']},q['createElement'](ns,{'value':zy['keyPoints'],'onValueChange':zJ,'instrument':zA,'drawingsDict':zC,'currentTimezone':zB,'withPrice':!0x0})),q['createElement'](oi,{'title':zG['title']},q['createElement'](rU,{'value':zy,'onValueChange':zD,'drawingsDict':zC})),q['createElement'](oi,{'title':zH['title']},q['createElement'](rL,{'value':zy,'onValueChange':zD,'drawingsDict':zC})),q['createElement'](oi,{'title':zC['popup']['sections']['gann']['price']+'\x20'+zC['popup']['sections']['gann']['levels']},q['createElement'](rd,{'value':zM,'onValueChange':zK,'palette':zz})),q['createElement'](oi,{'title':zC['popup']['sections']['gann']['time']+'\x20'+zC['popup']['sections']['gann']['levels']},q['createElement'](rd,{'value':zN,'onValueChange':zL,'palette':zz})));});function xi(zx){return(0x0,A['zG'])(zx,z['UI'](zy=>xc(xb(xb({},zy),zy['line']),{'coefficient':zy['value']})));}function xj(zx){return(0x0,A['zG'])(zx,z['UI'](zy=>({'line':{'lineColor':zy['lineColor'],'lineDash':zy['lineDash'],'lineWidth':zy['lineWidth'],'lineCap':zy['lineCap'],'lineVisibility':zy['lineVisibility']},'value':zy['coefficient'],'visible':zy['visible']})));}const xk=nu['Ri']['fromPath']()(['keyPoints']),xl=(0x0,q['memo'])(zx=>{const {value:zy,onValueChange:zz,instrument:zA,currentTimezone:zB,drawingsDict:zC,palette:zD}=zx,zE=zC['popup']['sections']['style'],zF=zC['popup']['sections']['coordinates'],zG=(0x0,q['useCallback'])((zI,zJ)=>zz(zI['set'](zJ)(zy)),[zy,zz]),zH=(0x0,q['useCallback'])(zI=>zG(xk,zI),[zG]);return q['createElement'](q['Fragment'],null,q['createElement'](oi,{'title':zF['title']},q['createElement'](ns,{'value':zy['keyPoints'],'onValueChange':zH,'instrument':zA,'drawingsDict':zC,'currentTimezone':zB,'withPrice':!0x0})),q['createElement'](oi,{'title':zE['title']},q['createElement'](wf,{'value':zy,'onValueChange':zz,'drawingsDict':zC,'palette':zD})),q['createElement'](oi,{'title':zE['elliottDegree']},q['createElement'](wr,{'value':zy,'onValueChange':zz})));});var xm=Object['defineProperty'],xn=Object['defineProperties'],xo=Object['getOwnPropertyDescriptors'],xp=Object['getOwnPropertySymbols'],xq=Object['prototype']['hasOwnProperty'],xr=Object['prototype']['propertyIsEnumerable'],xs=(zx,zy,zz)=>zy in zx?xm(zx,zy,{'enumerable':!0x0,'configurable':!0x0,'writable':!0x0,'value':zz}):zx[zy]=zz,xt=(zx,zy)=>{for(var zz in zy||(zy={}))xq['call'](zy,zz)&&xs(zx,zz,zy[zz]);if(xp){for(var zz of xp(zy))xr['call'](zy,zz)&&xs(zx,zz,zy[zz]);}return zx;},xu=(zx,zy)=>xn(zx,xo(zy));const xv=nu['Ri']['fromPath'](),xw=xv(['keyPoints']),xx=xv(['properties','zones']),xy=(0x0,q['memo'])(zx=>{const {value:zy,onValueChange:zz,instrument:zA,currentTimezone:zB,drawingsDict:zC,palette:zD}=zx,zE=zy['properties'],zF=zC['popup']['sections']['style'],zG=zC['popup']['sections']['labels'],zH=zC['popup']['sections']['extend'],zI=zC['popup']['sections']['coordinates'],zJ=(0x0,q['useCallback'])((zN,zO)=>zz(zN['set'](zO)(zy)),[zy,zz]),zK=(0x0,q['useCallback'])(zN=>zJ(xw,zN),[zJ]),zL=(0x0,q['useCallback'])(zN=>zJ(xx,zN),[zJ]),zM=(0x0,q['useCallback'])(()=>(0x0,A['zG'])(zE['zones'],z['UI'](zN=>xu(xt({},zN),{'lineWidth':zE['line']['lineWidth'],'lineColor':zE['line']['lineColor'],'lineDash':zE['line']['lineDash']})),zL),[zE,zL]);return q['createElement'](q['Fragment'],null,q['createElement'](oi,{'title':zI['title']},q['createElement'](ns,{'value':zy['keyPoints'],'onValueChange':zK,'drawingsDict':zC,'instrument':zA,'currentTimezone':zB,'withPrice':!0x0})),q['createElement'](oi,{'title':zG['title']},q['createElement'](sy,{'value':zy,'onValueChange':zz,'drawingsDict':zC}),q['createElement'](sG,{'value':zy,'onValueChange':zz,'drawingsDict':zC})),q['createElement'](oi,{'title':zF['title']},q['createElement'](rn,{'value':zy,'onValueChange':zz,'drawingsDict':zC,'applyToAll':zM,'palette':zD}),q['createElement'](rd,{'value':zE['zones'],'onValueChange':zL,'palette':zD}),q['createElement'](rL,{'value':zy,'onValueChange':zz,'drawingsDict':zC})),q['createElement'](oi,{'title':zH['title']},q['createElement'](sn,{'value':zy,'onValueChange':zz,'drawingsDict':zC})));}),xz=nu['Ri']['fromPath'](),xA=xz(['properties','coefficients','levels']),xB=xz(['properties','coefficients','fans']),xC=xz(['properties','coefficients','arcs']),xD=xz(['keyPoints']),xE=nu['Ri']['fromProp']()('line'),xF=nu['Ri']['fromProp']()('visible'),xG=['1','1\x20','1.5','2','2','3','3','4','4','5','5\x20'],xH=(zx,zy)=>zy?zx:zx<=0x1?'1\x20x\x20'+(0x64/(zx*0x64))['toFixed']():(zx*0x64/0x64)['toFixed']()+'\x20x\x201',xI=(zx,zy,zz)=>zA=>(0x0,A['zG'])(zA,z['cq'](zy,xF['set'](zx)),y['g_'](A['Q1'],zz)),xJ=(zx,zy,zz)=>zA=>(0x0,A['zG'])(zA,z['cq'](zy,xE['set'](zx)),y['g_'](A['Q1'],zz)),xK=(0x0,q['memo'])(zx=>{const {value:zy,palette:zz,instrument:zA,currentTimezone:zB,drawingsDict:zC,onValueChange:zD}=zx,{coefficients:zE}=zy['properties'],zF=zC['popup']['sections'],zG=zC['popup']['sections']['coordinates'],zH=zC['popup']['sections']['style'],zI=(0x0,q['useCallback'])((zT,zU)=>zD(zT['set'](zU)(zy)),[zy,zD]),zJ=(0x0,q['useCallback'])(zT=>zI(xD,zT),[zI]),zK=(0x0,q['useCallback'])(zT=>zI(xA,zT),[zI]),zL=(0x0,q['useCallback'])(zT=>zI(xB,zT),[zI]),zM=(0x0,q['useCallback'])(zT=>zI(xC,zT),[zI]),zN=(0x0,q['useCallback'])((zT,zU)=>(0x0,A['zG'])(zE['levels'],xJ(zT,zU,zK)),[zE['levels'],zK]),zO=(0x0,q['useCallback'])((zT,zU)=>(0x0,A['zG'])(zE['levels'],xI(zT,zU,zK)),[zE['levels'],zK]),zP=(0x0,q['useCallback'])((zT,zU)=>(0x0,A['zG'])(zE['fans'],xJ(zT,zU,zL)),[zE['fans'],zL]),zQ=(0x0,q['useCallback'])((zT,zU)=>(0x0,A['zG'])(zE['fans'],xI(zT,zU,zL)),[zE['fans'],zL]),zR=(0x0,q['useCallback'])((zT,zU)=>(0x0,A['zG'])(zE['arcs'],xJ(zT,zU,zM)),[zE['arcs'],zM]),zS=(0x0,q['useCallback'])((zT,zU)=>(0x0,A['zG'])(zE['arcs'],xI(zT,zU,zM)),[zE['arcs'],zM]);return q['createElement'](q['Fragment'],null,q['createElement'](oi,{'title':zG['title']},q['createElement'](ns,{'value':zy['keyPoints'],'onValueChange':zJ,'instrument':zA,'drawingsDict':zC,'currentTimezone':zB,'withPrice':!0x0})),q['createElement'](oi,{'title':zH['title']},q['createElement'](rL,{'value':zy,'onValueChange':zD,'drawingsDict':zC})),q['createElement'](oi,{'title':zF['gann']['levels']},zE['levels']['map']((zT,zU)=>q['createElement'](xL,{'showInteger':!0x0,'key':'level-'+zU,'gsqCoef':zT,'index':zU,'palette':zz,'changeVisibility':zO,'changeLineStyle':zN}))),q['createElement'](oi,{'title':zF['gann']['fans']},zE['fans']['map']((zT,zU)=>q['createElement'](xL,{'key':'fan-'+zU,'gsqCoef':zT,'index':zU,'palette':zz,'changeVisibility':zQ,'changeLineStyle':zP}))),q['createElement'](oi,{'title':zF['gann']['arcs']},zE['arcs']['map']((zT,zU)=>q['createElement'](xL,{'key':'arc-'+zU,'gsqCoef':zT,'index':zU,'palette':zz,'changeVisibility':zS,'changeLineStyle':zR}))));}),xL=(0x0,q['memo'])(zx=>{const {gsqCoef:zy,palette:zz,changeVisibility:zA,changeLineStyle:zB,index:zC,showInteger:zD=!0x1}=zx,zE=(0x0,q['useCallback'])(zH=>zA(!!zH,zC),[zA,zC]),zF=(0x0,q['useCallback'])(zH=>zB(zH,zC),[zB,zC]),zG=(0x0,q['useMemo'])(()=>zy['type']?zy['type']==='toZero'?xG[zC]+'\x20x\x200':xG[zC]+'\x20x\x201':xH(zy['value'],zD),[zy,zC,zD]);return q['createElement'](ao,{'noGapItems':!0x0},q['createElement'](xM,null,q['createElement'](r7,null,q['createElement'](r6['X'],{'value':zy['visible'],'onValueChange':zE}),q['createElement']('span',null,zG))),q['createElement'](qU,{'noGap':!0x0,'noGapItems':!0x0,'value':zy['line'],'palette':zz,'onValueChange':zF}));}),xM=(0x0,B['ZP'])(ar)`
	width: 75px;
`;var xN=j(0x17e9f),xO=j['n'](xN);const xP=(0x0,q['memo'])(zx=>{const {position:zy,drag:zz,children:zA,bounds:zB}=zx,zC=(0x0,q['useCallback'])((zD,zE)=>{const {x:zF,y:zG}=zE;zz({'top':zG,'left':zF});},[zz]);return q['createElement'](xO(),{'handle':zx['handle'],'onStop':zC,'position':{'x':zy['left'],'y':zy['top']},'bounds':zB},zA);});var xQ=Object['defineProperty'],xR=Object['defineProperties'],xS=Object['getOwnPropertyDescriptors'],xT=Object['getOwnPropertySymbols'],xU=Object['prototype']['hasOwnProperty'],xV=Object['prototype']['propertyIsEnumerable'],xW=(zx,zy,zz)=>zy in zx?xQ(zx,zy,{'enumerable':!0x0,'configurable':!0x0,'writable':!0x0,'value':zz}):zx[zy]=zz,xX=(zx,zy)=>{for(var zz in zy||(zy={}))xU['call'](zy,zz)&&xW(zx,zz,zy[zz]);if(xT){for(var zz of xT(zy))xV['call'](zy,zz)&&xW(zx,zz,zy[zz]);}return zx;},xY=(zx,zy)=>xR(zx,xS(zy));const xZ=nu['Ri']['fromPath']()(['properties','line']),y0=nu['Ri']['fromPath']()(['properties','background']),y1=zx=>zy=>{const zz=xZ['get'](zy);return xZ['set'](xY(xX({},zz),{'lineColor':zx}))(zy);},y2=zx=>zy=>{const zz=y0['get'](zy);return y0['set'](xY(xX({},zz),{'fillStyle':zx}))(zy);},y3=zx=>zy=>{const zz=xZ['get'](zy);return xZ['set'](xX(xX({},zz),zx))(zy);},y4=(zx,zy)=>zy['map'](zz=>Lens['fromPath']()([...zx,zz])),y5=zx=>zy=>zz=>(0x0,A['zG'])(zy,y1(zz),y2(zz),zx),y6=zx=>zy=>zz=>zA=>{const zB=zA;pipe(zy['reduce']((zC,zD)=>{const zE=zD['get'](zC);return zD['set'](xY(xX({},zE),{'lineColor':zB}))(zC);},zz),y1(zB),zx);},y7=zx=>zy=>zz=>zA=>{const zB=zA;(0x0,A['zG'])(zy['reduce']((zC,zD)=>zD['modify'](zE=>xY(xX({},zE),{'lineColor':zB}))(zC),zz),y1(zB),zx);},y8=zx=>zy=>zz=>zA=>{const zB={'lineWidth':pi(zA['lineWidth']),'lineDash':pe(zA['lineDash'])};(0x0,A['zG'])(zy['reduce']((zC,zD)=>zD['modify'](zE=>xX(xX({},zE),zB))(zC),zz),y3(zB),zx);},y9=B['ZP']['div']`
	height: var(--toolbar-separator-height, 20px);
	width: var(--toolbar-separator-width, 1px);
	background-color: var(--main_chart-divider-default-bg);
	margin: 0 var(--spacer-05) 0 var(--spacer-1);
`,ya=(0x0,B['ZP'])(y9)`
	height: var(--toolbar-separator-full-h-height, 32px);
	margin-right: var(--spacer-1);
`;var yb=j(0x8ea0);const yc=(0x0,B['ZP'])(ar)`
	min-width: 70px;
`;var yd=Object['defineProperty'],ye=Object['getOwnPropertySymbols'],yf=Object['prototype']['hasOwnProperty'],yg=Object['prototype']['propertyIsEnumerable'],yh=(zx,zy,zz)=>zy in zx?yd(zx,zy,{'enumerable':!0x0,'configurable':!0x0,'writable':!0x0,'value':zz}):zx[zy]=zz,yi=(zx,zy)=>{for(var zz in zy||(zy={}))yf['call'](zy,zz)&&yh(zx,zz,zy[zz]);if(ye){for(var zz of ye(zy))yg['call'](zy,zz)&&yh(zx,zz,zy[zz]);}return zx;};const yj=nu['Ri']['fromProp']()('line'),yk=nu['Ri']['fromProp']()('visible'),yl=(0x0,q['memo'])(zx=>{const {palette:zy,value:zz,onValueChange:zA,dictionary:zB}=zx,zC=(0x0,q['useCallback'])((zE,zF)=>(0x0,A['zG'])(zz,z['cq'](zF,yk['set'](zE)),y['g_'](A['Q1'],zA)),[zA,zz]),zD=(0x0,q['useCallback'])((zE,zF)=>(0x0,A['zG'])(zz,z['cq'](zF,yj['set'](zE)),y['g_'](A['Q1'],zA)),[zz,zA]);return q['createElement'](ms['Ch'],null,zE=>zz['map']((zF,zG)=>q['createElement'](ym,{'key':'regression-trend--style-group-item-'+zG,'regressionTrendSection':zF,'index':zG,'palette':zy,'dictionary':zB,'changeVisibility':zC,'changeLineStyle':zD,'parentEventTarget':zE})));}),ym=(0x0,q['memo'])(zx=>{const {regressionTrendSection:zy,index:zz,changeVisibility:zA,dictionary:zB,changeLineStyle:zC,parentEventTarget:zD}=zx,zE=(0x0,q['useCallback'])(zG=>zA(!!zG,zz),[zA,zz]),zF=(0x0,q['useCallback'])(zG=>zC(zG,zz),[zC,zz]);return q['createElement'](ao,null,q['createElement'](yc,{'key':'checkbox_'+zz},q['createElement'](r7,null,q['createElement'](r6['X'],{'value':zy['visible'],'onValueChange':zE}),q['createElement']('span',null,zB['regressionTrend']['sections'][zy['type']]))),q['createElement'](qU,yi({'value':zy['line'],'onValueChange':zF,'parentEventTarget':zD,'noGap':!0x0,'noGapItems':!0x0},zx)));}),yn=nu['Ri']['fromProp']()('deviationCoef'),yo=(0x0,q['memo'])(zx=>{const {value:zy,onValueChange:zz,dictionary:zA}=zx,zB=(0x0,q['useCallback'])((zC,zD)=>(0x0,A['zG'])(zy,z['cq'](zD,yn['set'](zC)),y['g_'](A['Q1'],zz)),[zy,zz]);return q['createElement'](q['Fragment'],null,zy['map']((zC,zD)=>zC['type']!=='base'&&q['createElement'](yp,{'key':'regression-trend--style-group-item-'+zD,'regressionTrendSection':zC,'index':zD,'step':0x1,'dictionary':zA,'changeCoefficient':zB})));}),yp=(0x0,q['memo'])(zx=>{const {regressionTrendSection:zy,index:zz,step:zA,dictionary:zB,changeCoefficient:zC}=zx,zD=(0x0,q['useCallback'])(zE=>zC(zE,zz),[zC,zz]);return q['createElement'](ao,null,q['createElement'](ar,{'label':zB['regressionTrend']['deviation'][zy['type']]},q['createElement'](as['l'],{'min':Number['NEGATIVE_INFINITY'],'max':Number['POSITIVE_INFINITY'],'step':zA,'value':zy['deviationCoef'],'onValueChange':zD})));}),yq=nu['Ri']['fromPath'](),yr=yq(['properties','deviation','useUpperDeviation']),ys=yq(['properties','deviation','useLowerDeviation']),yt=yq(['properties','deviation','source']),yu=yq(['properties','extendLines']),yv=yq(['properties','pearsonR']),yw=yq(['properties','sections']),yx=yq(['keyPoints']),yy=(0x0,q['memo'])(zx=>{const {value:zy,onValueChange:zz,palette:zA,instrument:zB,currentTimezone:zC,drawingsDict:zD}=zx,zE=zy['properties'],zF=zD['popup']['sections']['style'],zG=zD['popup']['sections']['coordinates'],[zH,zI]=(0x0,q['useState'])(!0x1),zJ=(0x0,q['useCallback'])((zR,zS)=>zz(zR['set'](zS)(zy)),[zy,zz]),zK=(0x0,q['useCallback'])(zR=>zJ(yx,zR),[zJ]),zL=(0x0,q['useMemo'])(()=>(0x0,A['ls'])(()=>!zE['deviation']['useUpperDeviation'],zR=>zJ(yr,zR)),[zJ,zE]),zM=(0x0,q['useMemo'])(()=>(0x0,A['ls'])(()=>!zE['deviation']['useLowerDeviation'],zR=>zJ(ys,zR)),[zJ,zE]),zN=(0x0,q['useCallback'])(zR=>zJ(yw,zR),[zJ]),zO=(0x0,q['useCallback'])(zR=>{yz(zR)&&zJ(yt,zR);},[zJ]),zP=(0x0,q['useMemo'])(()=>(0x0,A['ls'])(()=>!zE['extendLines'],zR=>zJ(yu,zR)),[zJ,zE]),zQ=(0x0,q['useMemo'])(()=>(0x0,A['ls'])(()=>!zE['pearsonR'],zR=>zJ(yv,zR)),[zJ,zE]);return q['createElement'](q['Fragment'],null,q['createElement'](oi,{'title':zG['title']},q['createElement'](ns,{'value':zy['keyPoints'],'onValueChange':zK,'instrument':zB,'drawingsDict':zD,'currentTimezone':zC,'withPrice':!0x1})),q['createElement'](oi,{'title':zD['regressionTrend']['deviation']['title']},q['createElement'](yo,{'dictionary':zD,'value':zE['sections'],'onValueChange':zN}),q['createElement'](ao,null,q['createElement'](ar,null,q['createElement'](r7,null,q['createElement'](r6['X'],{'value':zE['deviation']['useUpperDeviation'],'onValueChange':zL}),q['createElement']('span',null,zD['regressionTrend']['deviation']['useUpperDeviation'])))),q['createElement'](ao,null,q['createElement'](ar,null,q['createElement'](r7,null,q['createElement'](r6['X'],{'value':zE['deviation']['useLowerDeviation'],'onValueChange':zM}),q['createElement']('span',null,zD['regressionTrend']['deviation']['useLowerDeviation'])))),q['createElement'](ao,null,q['createElement'](ar,null,q['createElement']('span',null,zD['regressionTrend']['deviation']['source'])),q['createElement'](ar,null,q['createElement'](r8,{'value':zE['deviation']['source'],'onValueChange':zO,'isOpened':zH,'onToggle':zR=>zI(!!zR)},yb['n6']['map'](zR=>q['createElement'](r9,{'key':zR,'value':zR,'isActive':zE['deviation']['source']===zR},zR)))))),q['createElement'](oi,{'title':zF['title']},q['createElement'](yl,{'dictionary':zD,'palette':zA,'value':zE['sections'],'onValueChange':zN}),q['createElement'](ao,null,q['createElement'](ar,null,q['createElement'](r7,null,q['createElement'](r6['X'],{'value':zE['extendLines'],'onValueChange':zP}),q['createElement']('span',null,zD['regressionTrend']['style']['extendLines'])))),q['createElement'](ao,null,q['createElement'](ar,null,q['createElement'](r7,null,q['createElement'](r6['X'],{'value':zE['pearsonR'],'onValueChange':zQ}),q['createElement']('span',null,zD['regressionTrend']['style']['pearsonR']))))));}),yz=zx=>yb['n6']['some'](zy=>zy===zx),yA=nu['Ri']['fromPath'](),yB=yA(['keyPoints']),yC=yA(['properties','counterclockwise']),yD=yA(['properties','spiralLength']),yE=(0x0,q['memo'])(zx=>{const {value:zy,onValueChange:zz,palette:zA,instrument:zB,currentTimezone:zC,drawingsDict:zD}=zx,zE=zD['fibonacciSpiral'],zF=zD['popup']['sections']['coordinates'],zG=zD['popup']['sections']['style'],zH=(0x0,q['useCallback'])((zM,zN)=>zz(zM['set'](zN)(zy)),[zy,zz]),zI=(0x0,q['useCallback'])(zM=>zH(yB,zM),[zH]),zJ=(0x0,q['useCallback'])(zM=>zI([...zM]),[zI]),zK=(0x0,q['useCallback'])(zM=>zH(yC,zM),[zH]),zL=(0x0,q['useCallback'])(zM=>zH(yD,zM),[zH]);return q['createElement'](q['Fragment'],null,q['createElement'](oi,{'title':zF['title']},q['createElement'](ns,{'value':zy['keyPoints'],'onValueChange':zJ,'instrument':zB,'drawingsDict':zD,'currentTimezone':zC,'withPrice':!0x0})),q['createElement'](oi,{'title':zG['title']},q['createElement'](r3,{'value':zy,'onValueChange':zz,'palette':zA}),q['createElement'](ao,null,q['createElement'](ar,{'label':zE['spiralLength']},q['createElement'](as['l'],{'min':0x0,'max':Number['POSITIVE_INFINITY'],'step':0x1,'value':zy['properties']['spiralLength'],'onValueChange':zL}))),q['createElement'](r7,null,q['createElement'](r6['X'],{'value':zy['properties']['counterclockwise'],'onValueChange':zK}),q['createElement']('span',null,zE['counterclockwiseCheckbox']))));}),yF=nu['Ri']['fromPath']()(['keyPoints']),yG=(0x0,q['memo'])(zx=>{const {value:zy,onValueChange:zz,palette:zA,instrument:zB,currentTimezone:zC,drawingsDict:zD}=zx,zE=zD['popup']['sections']['coordinates'],zF=zD['popup']['sections']['style'],zG=(0x0,q['useCallback'])((zI,zJ)=>zz(zI['set'](zJ)(zy)),[zy,zz]),zH=(0x0,q['useCallback'])(zI=>zG(yF,zI),[zG]);return q['createElement'](q['Fragment'],null,q['createElement'](oi,{'title':zE['title']},q['createElement'](ns,{'value':zy['keyPoints'],'onValueChange':zH,'instrument':zB,'drawingsDict':zD,'currentTimezone':zC,'withPrice':!0x0,'updateAllPointsPrice':!0x0})),q['createElement'](oi,{'title':zF['title']},q['createElement'](r3,{'value':zy,'onValueChange':zz,'palette':zA}),q['createElement'](sW,{'value':zy,'onValueChange':zz,'drawingsDict':zD,'palette':zA})));});var yH=Object['defineProperty'],yI=Object['defineProperties'],yJ=Object['getOwnPropertyDescriptors'],yK=Object['getOwnPropertySymbols'],yL=Object['prototype']['hasOwnProperty'],yM=Object['prototype']['propertyIsEnumerable'],yN=(zx,zy,zz)=>zy in zx?yH(zx,zy,{'enumerable':!0x0,'configurable':!0x0,'writable':!0x0,'value':zz}):zx[zy]=zz,yO=(zx,zy)=>{for(var zz in zy||(zy={}))yL['call'](zy,zz)&&yN(zx,zz,zy[zz]);if(yK){for(var zz of yK(zy))yM['call'](zy,zz)&&yN(zx,zz,zy[zz]);}return zx;},yP=(zx,zy)=>yI(zx,yJ(zy));const yQ=nu['Ri']['fromPath'](),yR=yQ(['keyPoints']),yS=yQ(['properties','zones']),yT=(0x0,q['memo'])(zx=>{const {value:zy,onValueChange:zz,instrument:zA,currentTimezone:zB,drawingsDict:zC,palette:zD}=zx,zE=zy['properties'],zF=zC['popup']['sections']['style'],zG=zC['popup']['sections']['labels'],zH=zC['popup']['sections']['coordinates'],zI=(0x0,q['useCallback'])((zN,zO)=>zz(zN['set'](zO)(zy)),[zy,zz]),zJ=(0x0,q['useCallback'])(zN=>zI(yR,zN),[zI]),zK=(0x0,q['useCallback'])(zN=>zJ([...zN]),[zJ]),zL=(0x0,q['useCallback'])(zN=>zI(yS,zN),[zI]),zM=(0x0,q['useCallback'])(()=>(0x0,A['zG'])(zE['zones'],z['UI'](zN=>yP(yO({},zN),{'lineWidth':zE['line']['lineWidth'],'lineColor':zE['line']['lineColor'],'lineDash':zE['line']['lineDash']})),zL),[zE,zL]);return q['createElement'](q['Fragment'],null,q['createElement'](oi,{'title':zH['title']},q['createElement'](ns,{'value':zy['keyPoints'],'onValueChange':zK,'drawingsDict':zC,'instrument':zA,'currentTimezone':zB,'withPrice':!0x0})),q['createElement'](oi,{'title':zG['title']},q['createElement'](sy,{'value':zy,'onValueChange':zz,'drawingsDict':zC})),q['createElement'](oi,{'title':zF['title']},q['createElement'](rn,{'value':zy,'onValueChange':zz,'palette':zD,'drawingsDict':zC,'applyToAll':zM}),q['createElement'](rd,{'value':zE['zones'],'onValueChange':zL,'palette':zD}),q['createElement'](rL,{'value':zy,'onValueChange':zz,'drawingsDict':zC})));});var yU=Object['defineProperty'],yV=Object['defineProperties'],yW=Object['getOwnPropertyDescriptors'],yX=Object['getOwnPropertySymbols'],yY=Object['prototype']['hasOwnProperty'],yZ=Object['prototype']['propertyIsEnumerable'],z0=(zx,zy,zz)=>zy in zx?yU(zx,zy,{'enumerable':!0x0,'configurable':!0x0,'writable':!0x0,'value':zz}):zx[zy]=zz,z1=(zx,zy)=>{for(var zz in zy||(zy={}))yY['call'](zy,zz)&&z0(zx,zz,zy[zz]);if(yX){for(var zz of yX(zy))yZ['call'](zy,zz)&&z0(zx,zz,zy[zz]);}return zx;},z2=(zx,zy)=>yV(zx,yW(zy));const z3=nu['Ri']['fromPath'](),z4=z3(['keyPoints']),z5=z3(['properties','zones']),z6=(0x0,q['memo'])(zx=>{const {value:zy,onValueChange:zz,instrument:zA,currentTimezone:zB,drawingsDict:zC,palette:zD}=zx,zE=zy['properties'],zF=zC['popup']['sections']['style'],zG=zC['popup']['sections']['labels'],zH=zC['popup']['sections']['coordinates'],zI=(0x0,q['useCallback'])((zN,zO)=>zz(zN['set'](zO)(zy)),[zy,zz]),zJ=(0x0,q['useCallback'])(zN=>zI(z4,zN),[zI]),zK=(0x0,q['useCallback'])(zN=>zJ([...zN]),[zJ]),zL=(0x0,q['useCallback'])(zN=>zI(z5,zN),[zI]),zM=(0x0,q['useCallback'])(()=>(0x0,A['zG'])(zE['zones'],z['UI'](zN=>z2(z1({},zN),{'lineWidth':zE['line']['lineWidth'],'lineColor':zE['line']['lineColor'],'lineDash':zE['line']['lineDash']})),zL),[zE,zL]);return q['createElement'](q['Fragment'],null,q['createElement'](oi,{'title':zH['title']},q['createElement'](ns,{'value':zy['keyPoints'],'onValueChange':zK,'drawingsDict':zC,'instrument':zA,'currentTimezone':zB,'withPrice':!0x0})),q['createElement'](oi,{'title':zG['title']},q['createElement'](sy,{'value':zy,'onValueChange':zz,'drawingsDict':zC})),q['createElement'](oi,{'title':zF['title']},q['createElement'](rn,{'value':zy,'onValueChange':zz,'palette':zD,'drawingsDict':zC,'applyToAll':zM}),q['createElement'](rd,{'value':zE['zones'],'onValueChange':zL,'palette':zD}),q['createElement'](rL,{'value':zy,'onValueChange':zz,'drawingsDict':zC})));});var z7=Object['defineProperty'],z8=Object['defineProperties'],z9=Object['getOwnPropertyDescriptors'],za=Object['getOwnPropertySymbols'],zb=Object['prototype']['hasOwnProperty'],zc=Object['prototype']['propertyIsEnumerable'],zd=(zx,zy,zz)=>zy in zx?z7(zx,zy,{'enumerable':!0x0,'configurable':!0x0,'writable':!0x0,'value':zz}):zx[zy]=zz,ze=(zx,zy)=>{for(var zz in zy||(zy={}))zb['call'](zy,zz)&&zd(zx,zz,zy[zz]);if(za){for(var zz of za(zy))zc['call'](zy,zz)&&zd(zx,zz,zy[zz]);}return zx;},zf=(zx,zy)=>z8(zx,z9(zy));const zg=(0x0,q['memo'])(zx=>{const {drawing:zy,instrument:zz,onRemove:zA,onDrawingChange:zB,palette:zC,isPopupOpened:zD,togglePopup:zE,requestRestoreDefaults:zF,setMagnetMode:zG,drawingsDict:zH,className:zI,iconsConfig:zJ,onDrag:zK,toolbarWidth:zL,updateToolbarWidth:zM,toggleDrawingLocked:zN,position:zO,bounds:zP,currentTimezone:zQ}=zx,zR=(0x0,q['useRef'])(),zS=(0x0,q['useCallback'])(()=>(0x0,y['pC'])(zy)&&zA(zy['value']),[zA,zy]),zT=(0x0,q['useCallback'])(()=>zE(!0x0),[zE]),zU=(0x0,q['useCallback'])(()=>{zE(!0x1);},[zE]),zV=(0x0,q['useCallback'])(A4=>{A4['key']==='Shift'&&(0x0,y['pC'])(zy)&&(A4['type']==='keydown'?zG(!0x0,!0x1):zG(!0x1,!0x1));},[zG,zy]),zW=(0x0,q['useCallback'])(A4=>{zR['current']=A4,zM(A4['offsetWidth']);},[zM]);(0x0,q['useEffect'])(()=>(document['addEventListener']('keydown',zV),document['addEventListener']('keyup',zV),()=>{document['removeEventListener']('keydown',zV),document['removeEventListener']('keyup',zV);}),[zV]);const zX=(0x0,q['useCallback'])(A4=>{const A5={'drawingsDict':zH,'onValueChange':zB,'palette':zC,'value':A4,'instrument':y['FS'](zz),'currentTimezone':zQ};return q['createElement'](q['Fragment'],null,q['createElement'](ve,{'icon':q['createElement'](vg,null,zJ['drawings']['settingsToolbar']['settings']),'onClick':zT}),q['createElement'](P,{'title':zv(A4,zH),'isOpened':zD,'requestClose':zU,'requestRestoreDefaults':zF,'isModal':!0x0},zu(A4,A5)));},[zT,zH,zD,zB,zU,zF,zz,zC,zJ['drawings']['settingsToolbar']['settings'],zQ]),{isMobile:zY}=(0x0,q['useContext'])(mt['El']),zZ='draggableZone',A0={'left':0x0,'right':zP['width']-zL,'top':0x0,'bottom':zP['height']},A1=(0x0,q['useMemo'])(()=>y['pC'](zy),[zy]),A2=(0x0,q['useCallback'])(A4=>{A4['stopPropagation'](),(0x0,y['pC'])(zy)&&zN(zy['value'],!zy['value']['locked']);},[zy,zN]),A3=(0x0,q['useMemo'])(()=>{const A4=(0x0,y['pC'])(zy)&&zy['value']['locked'];return q['createElement'](vg,{'preventIconFill':A4,'width':0x19,'height':0x19},A4?zJ['chartLayers']['unlock']:zJ['chartLayers']['lock']);},[zy,zJ['chartLayers']['lock'],zJ['chartLayers']['unlock']]);return q['createElement'](q['Fragment'],null,q['createElement'](xP,{'handle':'.'+zZ,'drag':zK,'position':zO,'bounds':A0},q['createElement'](v9,{'isSelected':A1,'className':zI,'ref':A4=>A4&&zW(A4)},(0x0,A['zG'])(zy,y['tS'](A4=>(0x0,rV['e2'])(A4['type'])?y['YP']:y['G'](A4)),y['g_'](A['gn'],A4=>q['createElement'](vk,{'value':zR['current']},q['createElement'](va,null,q['createElement']('span',{'className':zZ},q['createElement'](vf,{'icon':q['createElement'](di['a'],null,zJ['drawings']['settingsToolbar']['drag'])})),q['createElement'](ya,null),zt({'drawingModel':A4,'onValueChange':zB,'palette':zC,'drawingsDict':zH,'currentTimezone':zQ}),!(0x0,rV['iZ'])(A4['type'])&&q['createElement'](y9,null),!zY&&!(0x0,rV['iZ'])(A4['type'])&&!(0x0,rV['WN'])(A4['type'])&&q['createElement'](uB,null,zX(A4)),q['createElement'](uB,null,q['createElement'](vd,{'icon':A3,'onClick':A2})),q['createElement'](uB,null,q['createElement'](vc,{'icon':q['createElement'](vg,null,zJ['drawings']['settingsToolbar']['remove']),'onClick':zS})))))))));}),zh=nu['Ri']['fromPath']()(['properties','circles'])['composeTraversal']((0x0,nu['Bd'])(z['Kd'])())['composeLens'](nu['Ri']['fromProp']()('line')),zi=nu['Ri']['fromPath']()(['properties','rays'])['composeTraversal']((0x0,nu['Bd'])(z['Kd'])())['composeLens'](nu['Ri']['fromProp']()('line')),zj=nu['Ri']['fromPath']()(['properties','levels'])['composeTraversal']((0x0,nu['Bd'])(z['Kd'])()),zk=nu['Ri']['fromPath']()(['properties','rays'])['composeTraversal']((0x0,nu['Bd'])(z['Kd'])()),zl=nu['Ri']['fromPath']()(['properties','zones'])['composeTraversal']((0x0,nu['Bd'])(z['Kd'])()),zm=nu['Ri']['fromPath']()(['properties','levels'])['composeTraversal']((0x0,nu['Bd'])(z['Kd'])()),zn=nu['Ri']['fromPath']()(['properties','coefficients','priceLevel'])['composeTraversal']((0x0,nu['Bd'])(z['Kd'])())['composeLens'](nu['Ri']['fromProp']()('line')),zo=nu['Ri']['fromPath']()(['properties','coefficients','timeLevel'])['composeTraversal']((0x0,nu['Bd'])(z['Kd'])())['composeLens'](nu['Ri']['fromProp']()('line')),zp=nu['Ri']['fromPath']()(['properties','coefficients','levels'])['composeTraversal']((0x0,nu['Bd'])(z['Kd'])())['composeLens'](nu['Ri']['fromProp']()('line')),zq=nu['Ri']['fromPath']()(['properties','coefficients','fans'])['composeTraversal']((0x0,nu['Bd'])(z['Kd'])())['composeLens'](nu['Ri']['fromProp']()('line')),zr=nu['Ri']['fromPath']()(['properties','coefficients','arcs'])['composeTraversal']((0x0,nu['Bd'])(z['Kd'])())['composeLens'](nu['Ri']['fromProp']()('line')),zs=nu['Ri']['fromPath']()(['properties','sections'])['composeTraversal']((0x0,nu['Bd'])(z['Kd'])())['composeLens'](nu['Ri']['fromProp']()('line')),zt=zx=>{const {drawingModel:zy,onValueChange:zz}=zx;let zA=zC=>(0x0,A['zG'])(zy,y1(zC),zz),zB=zC=>{const zD={'lineWidth':pi(zC['lineWidth']),'lineDash':pe(zC['lineDash'])};(0x0,A['zG'])(zy,y3(zD),zz);};switch(zy['type']){case'highlighter':return(0x0,rV['C0'])(zy,'highlighter')?q['createElement'](vC,zf(ze({},zx),{'value':zy})):q['createElement'](q['Fragment'],null);case'icon':return(0x0,rV['C0'])(zy,'icon')?q['createElement'](vA,zf(ze({},zx),{'value':zy})):q['createElement'](q['Fragment'],null);case'text':case'callout':case'price_label':return(0x0,rV['vN'])(zy)?q['createElement'](vp,zf(ze({},zx),{'value':zy})):q['createElement'](q['Fragment'],null);case'fibonacci_ark':case'fibonacci_circles':zA=y7(zz)([zh])(zy),zB=y8(zz)([zh])(zy);break;case'fibonacci_retracements':zA=y7(zz)([zm])(zy),zB=y8(zz)([zm])(zy);break;case'fibonacci_rays':{zA=y7(zz)([zk])(zy),zB=y8(zz)([zk])(zy);break;}case'fibonacci_projection':case'fibonacci_channel':case'fibonacci_time_zones':{zA=y7(zz)([zl])(zy),zB=y8(zz)([zl])(zy);break;}case'pitchfork':zA=y7(zz)([zj])(zy),zB=y8(zz)([zj])(zy);break;case'gann_fan':zA=y7(zz)([zi])(zy),zB=y8(zz)([zi])(zy);break;case'gann_box':zA=y7(zz)([zn,zo])(zy),zB=y8(zz)([zn,zo])(zy);break;case'gann_square':zA=y7(zz)([zp,zq,zr])(zy),zB=y8(zz)([zp,zq,zr])(zy);break;case'regression_trend':zA=y7(zz)([zs])(zy),zB=y8(zz)([zs])(zy);break;case'curve':case'arc':case'date_price_range':case'price_range':case'date_range':zA=y5(zz)(zy);break;case'line':case'arrow':case'extended_line':case'ellipse':case'horizontal_line':case'horizontal_ray':case'brush':case'path':case'rectangle':case'info_line':case'ray':case'vertical_line':case'trend_channel':case'vertical_arrow_up':case'vertical_arrow_down':case'elliott_wave':case'elliott_correction_wave':case'fibonacci_spiral':default:}return q['createElement'](vu,zf(ze({},zx),{'onLinePickerChange':zB,'onColorChange':zA,'value':zy}));},zu=(zx,zy)=>{switch(zx['type']){case'vertical_arrow_down':return q['createElement'](r5,ze({},zy));case'arrow':return q['createElement'](vI,ze({},zy));case'fibonacci_ark':return q['createElement'](s1,ze({},zy));case'fibonacci_circles':return q['createElement'](x3,ze({},zy));case'fibonacci_rays':return q['createElement'](se,ze({},zy));case'gann_fan':return q['createElement'](sk,ze({},zy));case'fibonacci_retracements':return q['createElement'](sT,ze({},zy));case'fibonacci_time_zones':return q['createElement'](wY,ze({},zy));case'fibonacci_channel':return q['createElement'](xy,ze({},zy));case'extended_line':return q['createElement'](vy,ze({},zy));case'ellipse':return q['createElement'](sY,ze({},zy));case'pitchfork':return q['createElement'](tb,ze({},zy));case'horizontal_line':return q['createElement'](tr,ze({},zy));case'info_line':return q['createElement'](vM,ze({},zy));case'horizontal_ray':return q['createElement'](tC,ze({},zy));case'brush':return q['createElement'](vv,ze({},zy));case'rectangle':return q['createElement'](tt,ze({},zy));case'gann_box':return q['createElement'](xh,ze({},zy));case'gann_square':return q['createElement'](xK,ze({},zy));case'ray':return q['createElement'](vK,ze({},zy));case'vertical_line':return q['createElement'](tx,ze({},zy));case'path':return q['createElement'](vw,ze({},zy));case'date_price_range':return q['createElement'](vQ,ze({},zy));case'price_range':return q['createElement'](vY,ze({},zy));case'date_range':return q['createElement'](w6,ze({},zy));case'trend_channel':return q['createElement'](tG,ze({},zy));case'curve':return q['createElement'](tI,ze({},zy));case'arc':return q['createElement'](wL,ze({},zy));case'vertical_arrow_up':return q['createElement'](tK,ze({},zy));case'fibonacci_projection':return q['createElement'](wJ,ze({},zy));case'line':return q['createElement'](uz,ze({},zy));case'highlighter':return q['createElement'](vG,ze({},zy));case'elliott_wave':return q['createElement'](ww,ze({},zy));case'elliott_correction_wave':return q['createElement'](xl,ze({},zy));case'regression_trend':return q['createElement'](yy,ze({},zy));case'fibonacci_spiral':return q['createElement'](yE,ze({},zy));case'cycle_brackets':return q['createElement'](yG,ze({},zy));case'fibonacci_time_extension':return q['createElement'](yT,ze({},zy));case'fibonacci_time_ratios':return q['createElement'](z6,ze({},zy));default:return q['createElement'](sU,ze({},zy));}},zv=(zx,zy)=>{const zz=zx['type'];return zy['popup']['title'][zz]||zy['popup']['title']['default'];},zw=zg;}}]);})());