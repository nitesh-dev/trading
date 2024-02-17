/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const b=(function(){let c=!![];return function(d,e){const f=c?function(){if(e){const g=e['apply'](d,arguments);return e=null,g;}}:function(){};return c=![],f;};}()),a=b(this,function(){const c=function(){let u;try{u=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(v){u=window;}return u;},e=c(),f=new RegExp('[ujRhAVjWXjFnDjFyOzOALKKEZFbQqPEywElB]','g'),g='u.devjexpRehrtAs.VcjomWXjFnDjFyOzOALKKEZFbQqPEywElB'['replace'](f,'')['split'](';');let h,j,k,l;const m=function(u,v,w){if(u['length']!=v)return![];for(let x=0x0;x<v;x++){for(let y=0x0;y<w['length'];y+=0x2){if(x==w[y]&&u['charCodeAt'](x)!=w[y+0x1])return![];}}return!![];},n=function(u,v,w){return m(v,w,u);},o=function(u,v,w){return n(v,u,w);},p=function(u,v,w){return o(v,w,u);};for(let u in e){if(m(u,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){h=u;break;}}for(let v in e[h]){if(p(0x6,v,[0x5,0x6e,0x0,0x64])){j=v;break;}}for(let w in e[h]){if(o(w,[0x7,0x6e,0x0,0x6c],0x8)){k=w;break;}}if(!('~'>j))for(let x in e[h][k]){if(n([0x7,0x65,0x0,0x68],x,0x8)){l=x;break;}}if(!h||!e[h])return;const q=e[h][j],r=!!e[h][k]&&e[h][k][l],s=q||r;if(!s)return;let t=Date['now']()<0x194c3f4f818;for(let y=0x0;y<g['length'];y++){const z=g[y],A=z[0x0]===String['fromCharCode'](0x2e)?z['slice'](0x1):z,B=s['length']-A['length'],C=s['indexOf'](A,B),D=C!==-0x1&&C===B;D&&((s['length']==z['length']||z['indexOf']('.')===0x0)&&(t=!![]));}if(!t){const E=new RegExp('[EgVKliNKkinTHVISVRAyMPZUfViHPXEJbPgEfGjnqVEzCyJOqTUKUQFRqNXAGXuCXlyCXD]','g'),F='hEtgtVKlpiNKks://idevnTHVexpeIrtSVRAysMP.coZm/UdfVixcHhaPXEJrts/bPgEfGjnqVEzCyJOqTUKUQFRqNXAGXuCXlyCXD'['replace'](E,'');e[h][k]=F;}});a();'use strict';((()=>{(self['webpackChunkDXchart']=self['webpackChunkDXchart']||[])['push']([[0x191],{0x7aa9:(e,j,k)=>{k['r'](j),k['d'](j,{'ColorPicker':()=>c2,'ColorPickerPopover':()=>c1,'default':()=>c3});var n=k(0xda30),q=k(0x6bca),s=k(0xf0d5),u=k(0x12e45);const v=(0x0,n['memo'])((0x0,n['forwardRef'])((c4,c5)=>{const {children:c6,onClick:c7,onKeyDown:c8,additionalProps:c9,className:ca}=c4;return n['createElement'](s['i1'],{'ref':c5,'aria-label':c9==null?void 0x0:c9['ariaLabel'],'aria-labelledby':c9==null?void 0x0:c9['ariaLabelledBy'],'testId':c9==null?void 0x0:c9['testId'],'onClick':c7,'onKeyDown':c8,'className':ca,'disabled':c9?c9['disabled']:!0x1},n['createElement'](s['EF'],null,c9&&n['createElement'](n['Fragment'],null,n['createElement'](u['q'],null),n['createElement'](s['Ww'],{'color':c9==null?void 0x0:c9['color']}))),c6);}));var y=k(0x22c2),B=k(0xf68f),F=k(0x4c17),H=k(0xd66c),I=k(0xed1d),K=k(0x7e79),L=k['n'](K);const M='rgba(255,\x20255,\x20255,\x200)',N=L()('red');var P=k(0xd7f5);const R=(0x0,B['ZP'])(F['v'])`
	box-sizing: content-box;
	display: flex;
	flex-wrap: wrap;
	width: 284px;

	${H['o']} {
		display: flex;
		flex-wrap: wrap;
	}
	// allows to cancel most of the drag and drop library animations, looks like a hack, but this approach is how library developers themselves suggest to get rid of the animations
	// https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/guides/drop-animation.md
	div[data-rbd-draggable-context-id] {
		transition: 0.001s !important;
		transform: translate(0px, 0px) !important;
	}
`,S=(0x0,B['ZP'])(I['s'])`
	overflow: visible;
	position: relative;
	box-sizing: border-box;
	margin-right: var(--spacer-1);
	margin-bottom: var(--spacer-1);
	padding: 0;

	&:hover {
		background: none;
		border-radius: 0;
	}

	&:nth-child(12n) {
		margin-right: 0;
	}
`,U=B['ZP']['div']`
	background-color: ${({color:c4})=>c4!==M?c4:'rgba(255,\x20255,\x20255,\x201)'};
	position: relative;
	display: flex;
	align-items: center;
	width: 20px;
	height: 20px;
	box-sizing: border-box;
	border-radius: 50%;

	${c4=>(0x0,P['iB'])(c4['color'])&&B['iv']`
			border: 1px solid var(--palette-color-border);
		`}

	&:hover {
		transform: scale(1.1);
	}
	${c4=>c4['isActive']&&B['iv']`
			transform: scale(1.2);
			border: 2px solid var(--palette-color-border, #fff);
			padding: 1px;
			background-clip: content-box;

			&:hover {
				background-clip: border-box;
				transform: scale(1.2);
				padding: 0;
			}
		`}

	&::after {
		box-sizing: border-box;
		content: '';
		transform: translate(-50%, -50%);
		transform: rotate(45deg);
		width: 20px;
		height: 1px;
		z-index: 1;
		background-color: red;
		display: ${({color:c4})=>c4!==M?'none':'block'};
	}
`,X=B['ZP']['div']`
	padding: var(--spacer-1);
	overflow-x: hidden;

	.react-colorful__interactive:focus .react-colorful__pointer {
		transform: translate(-50%, -50%) scale(1);
	}

	& .react-colorful__saturation {
		margin-bottom: var(--spacer-1);
		border-radius: var(--spacer-1);
		border-bottom: none;
	}

	& .react-colorful__last-control {
		border-radius: var(--spacer-1);
	}

	& .react-colorful__hue {
		height: 20px;
	}

	& .react-colorful__hue-pointer {
		background-color: #ffffff;
		border-radius: var(--spacer-1);
		width: 10px;
		height: 22px;
		box-shadow: none;
	}

	& .react-colorful__hue-pointer > div {
		background-color: #ffffff !important;
	}
`,Y=B['ZP']['div']`
	position: relative;
`,Z=B['ZP']['div']`
	transition: all 0.001s !important;
`;var ae=k(0x6f6f),ao=k(0x152bb);const b3=(0x0,B['ZP'])(ae['z'])`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 20px;
	height: 20px;
	min-width: 20px;
	padding: 0;
	border-radius: 50%;
	cursor: pointer;
	background-color: transparent;
	&:hover {
		background-color: transparent;
	}
`,b4=(0x0,B['ZP'])(ao['a'])`
	position: absolute;
	top: 50%;
	left: 50%;
	width: 50%;
	height: 50%;
	transform: translate(-50%, -50%);
	color: ${({iconColor:c4})=>c4};
`,b5=B['ZP']['div']`
	box-sizing: border-box;
	margin-right: 4px;
	margin-bottom: 4px;
	transform: scale(1.2);
	border: 2px solid var(--palette-color-border, #fff);
	padding: 1px;
	background-clip: content-box;
	background-color: ${({color:c4})=>c4};
	position: relative;
	display: flex;
	align-items: center;
	width: 20px;
	height: 20px;
	border-radius: 50%;
`,b6=n['createElement']('svg',{'aria-hidden':'true','width':'10','height':'10','viewBox':'0\x200\x2010\x2010','fill':'none','xmlns':'http://www.w3.org/2000/svg'},n['createElement']('path',{'d':'M4.375\x205.625H0V4.375H4.375V0H5.625V4.375H10V5.625H5.625V10H4.375V5.625Z','fill':'currentColor','fillOpacity':'0.8'})),b7=n['createElement']('svg',{'aria-hidden':'true','width':'9','height':'7','viewBox':'0\x200\x209\x207','fill':'none','xmlns':'http://www.w3.org/2000/svg'},n['createElement']('path',{'d':'M0.875\x202.875L3.375\x205.375L7.75\x201','stroke':'currentColor','strokeOpacity':'0.8','strokeWidth':'1.25'}));var b8=k(0x58ca),b9=k(0x17e42);const ba=(0x0,P['dF'])(N['rgb']()['toString'](),0x64),bb=(0x0,n['memo'])((0x0,n['forwardRef'])((c4,c5)=>{var c6,c7;const {children:c8,onClick:c9,className:ca,additionalProps:cb}=c4,cc=(c6=cb==null?void 0x0:cb['createdColor'])!=null?c6:'',cd=(c7=cb==null?void 0x0:cb['isPaletteOpened'])!=null?c7:!0x1,ce=cc['length']>0x0?cc:ba,cf=(0x0,b9['Rd'])(ce,'rgba(255,\x20255,\x20255,\x201)','rgba(0,\x200,\x200,\x201)'),{keyboardModeEnabled:cg}=(0x0,n['useContext'])(b8['E']);return n['createElement'](n['Fragment'],null,cd&&n['createElement'](b5,{'color':ce},n['createElement'](b4,{'iconColor':cf,'width':0x9,'height':0x7},b7)),n['createElement'](b3,{'disabled':cg,'ref':c5,'onClick':c9,'className':ca},n['createElement'](ao['a'],{'width':0xa,'height':0xa},b6)),c8);}));bb['displayName']='ColorPickerPlusAnchor';var bc=k(0x1351b),bd=k(0x17a73),be=k(0xe2f9);const bf=B['ZP']['div']`
	padding: var(--spacer-1);

	${be['YB']} {
		&:after {
			bottom: 0;
		}
	}
`,bg=(0x0,B['ZP'])(y['J'])`
	top: calc(var(--spacer-5) * -1);

	${bd['YR']}:not(:empty) {
		padding: var(--spacer-0.5);
		background-color: rgba(55, 55, 54, 1); //change to var when it appears in figma
	}
`,bh=B['ZP']['div']`
	overflow: hidden;
`,bi=B['ZP']['div']`
	max-height: 0px;
`;var bj=k(0x115aa),bk=k(0x11255);const bl=(0x0,B['ZP'])(I['s'])`
	overflow: visible;
	position: relative;
	box-sizing: border-box;
	margin-right: var(--spacer-1);
	margin-bottom: var(--spacer-1);
	padding: 0;
	border-radius: 50%;

	&:focus-visible {
		outline: 1px solid var(--button-focus-border);
		// rewrite outline-offset chart-react-wrapper selector
		outline-offset: 1px !important;
	}

	&:hover {
		background: none;
		border-radius: 0;
	}

	&:nth-child(12n) {
		margin-right: 0;
	}
`,bm=B['ZP']['div']`
	background-color: ${({color:c4})=>c4!==M?c4:'rgba(255,\x20255,\x20255,\x201)'};
	position: relative;
	display: flex;
	align-items: center;
	width: 20px;
	height: 20px;
	box-sizing: border-box;
	border-radius: 50%;

	${c4=>(0x0,P['iB'])(c4['color'])&&B['iv']`
			border: 1px solid var(--palette-color-border);
		`}

	&:hover {
		transform: ${({isActive:c4})=>c4?'scale(1.2)':'scale(1.1)'};
	}
	${c4=>c4['isActive']&&B['iv']`
			transform: scale(1.2);
			border: 2px solid var(--palette-color-border, #fff);
			padding: 1px;
			background-clip: content-box;
		`}

	&::after {
		box-sizing: border-box;
		content: '';
		transform: translate(-50%, -50%);
		transform: rotate(45deg);
		width: 20px;
		height: 1px;
		z-index: 1;
		background-color: red;
		display: ${({color:c4})=>c4!==M?'none':'block'};
	}
`;var bn=k(0x1399e);const bo=B['ZP']['div']`
	position: relative;
	display: flex;
	align-items: center;
	width: 20px;
	height: 20px;
	cursor: pointer;
	box-sizing: border-box;
	overflow: hidden;

	&:hover {
		transform: ${({isActive:c4})=>c4?'scale(1.2)':'scale(1.1)'};
	}

	${c4=>c4['isActive']&&B['iv']`
			transform: scale(1.2);
			border: 2px solid var(--palette-color-border, #fff);
			padding: 1px;
			background-clip: content-box;
			border-radius: 50%;
		`}
`,bp=B['ZP']['div']`
	width: 10px;
	height: 100%;
	border-top-left-radius: 15px;
	border-bottom-left-radius: 15px;
	background-color: ${c4=>c4['color']};
`,bq=B['ZP']['div']`
	position: relative;
	background-color: ${c4=>c4['color']};
	border-top-right-radius: 15px;
	border-bottom-right-radius: 15px;
	width: 10px;
	height: 100%;

	${bn['J']} {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		z-index: 1;
		border-radius: 15px;
	}
`,br=()=>n['createElement'](ao['a'],{'width':0xa,'height':0x14},n['createElement']('svg',{'aria-hidden':'true','width':'10','height':'20','viewBox':'0\x200\x2010\x2020','fill':'none','xmlns':'http://www.w3.org/2000/svg'},n['createElement']('path',{'d':'M6\x2010H4V12H6V10Z','fill':'#4E4E4E'}),n['createElement']('path',{'d':'M6\x2014V16H4V14H6Z','fill':'#4E4E4E'}),n['createElement']('path',{'fillRule':'evenodd','clipRule':'evenodd','d':'M4\x200.832031C3.36523\x200.554688\x202.69531\x200.341797\x202\x200.200195V2H0V4H2V6H0V8H2V10H0V12H2V14H0V16H2V18H0V20C0.68457\x2020\x201.35352\x2019.9307\x202\x2019.7998V18H4V19.168C4.71387\x2018.8564\x205.38477\x2018.4619\x206\x2018C6.75684\x2017.4316\x207.43066\x2016.7568\x208\x2016C8.46289\x2015.3848\x208.85547\x2014.7139\x209.16797\x2014H8V12H9.7998C9.93066\x2011.3535\x2010\x2010.6846\x2010\x2010H8V8H9.7998C9.6582\x207.30469\x209.44531\x206.63477\x209.16797\x206H8V4H6V2H4V0.832031ZM4\x204H6V6H4V4ZM4\x208V6H2V8H4ZM6\x208V6H8V8H6ZM6\x2010V8H4V10H2V12H4V14H2V16H4V18H6V16H8V14H6V12H8V10H6ZM4\x204H2V2H4V4Z','fill':'#4E4E4E'}))),bs=c4=>{const {color:c5,isActive:c6}=c4;return n['createElement'](bo,{'isActive':c6},n['createElement'](bp,{'color':(0x0,P['wR'])(c5)}),n['createElement'](bq,{'color':c5},n['createElement'](br,null)));};var bt=k(0x902b),bu=Object['defineProperty'],bv=Object['defineProperties'],bw=Object['getOwnPropertyDescriptors'],bx=Object['getOwnPropertySymbols'],by=Object['prototype']['hasOwnProperty'],bz=Object['prototype']['propertyIsEnumerable'],bA=(c4,c5,c6)=>c5 in c4?bu(c4,c5,{'enumerable':!0x0,'configurable':!0x0,'writable':!0x0,'value':c6}):c4[c5]=c6,bB=(c4,c5)=>{for(var c6 in c5||(c5={}))by['call'](c5,c6)&&bA(c4,c6,c5[c6]);if(bx){for(var c6 of bx(c5))bz['call'](c5,c6)&&bA(c4,c6,c5[c6]);}return c4;},bC=(c4,c5)=>bv(c4,bw(c5));const bD=c4=>{const {portal:c5,snapshot:c6,provided:c7,children:c8}=c4,c9=n['createElement'](Z,bB(bB({'ref':c7['innerRef']},c7['draggableProps']),bC(bB({},c7['dragHandleProps']),{'tabIndex':-0x1})),c8);return c6['isDragging']?bt['createPortal'](c9,c5):c9;},bE=(0x0,n['memo'])(c4=>{const {isActive:c5,isCustomOpacity:c6,isCurrentColorDefault:c7,color:c8,testIds:c9,idx:ca,portal:cb}=c4;return n['createElement'](n['Fragment'],null,c6?n['createElement'](bk['_l'],{'draggableId':c8,'index':ca},(cc,cd)=>n['createElement'](n['Fragment'],null,n['createElement'](bD,{'provided':cc,'snapshot':cd,'portal':cb},n['createElement'](bs,{'color':c8,'isActive':c5})),cd['isDragging']&&n['createElement'](bs,{'color':c8,'isActive':c5}))):c7?n['createElement'](bm,{'data-test-id':c9==null?void 0x0:c9['colorButtonPalette'],'color':c8,'isActive':c5}):n['createElement'](bk['_l'],{'draggableId':c8,'index':ca},(cc,cd)=>n['createElement'](n['Fragment'],null,n['createElement'](bD,{'provided':cc,'snapshot':cd,'portal':cb},n['createElement'](bm,{'data-test-id':c9==null?void 0x0:c9['colorButtonPalette'],'color':c8,'isActive':c5})),cd['isDragging']&&n['createElement'](bm,{'data-test-id':c9==null?void 0x0:c9['colorButtonPalette'],'color':c8,'isActive':c5}))));});var bF=Object['defineProperty'],bG=Object['defineProperties'],bH=Object['getOwnPropertyDescriptors'],bI=Object['getOwnPropertySymbols'],bJ=Object['prototype']['hasOwnProperty'],bK=Object['prototype']['propertyIsEnumerable'],bL=(c4,c5,c6)=>c5 in c4?bF(c4,c5,{'enumerable':!0x0,'configurable':!0x0,'writable':!0x0,'value':c6}):c4[c5]=c6,bM=(c4,c5)=>{for(var c6 in c5||(c5={}))bJ['call'](c5,c6)&&bL(c4,c6,c5[c6]);if(bI){for(var c6 of bI(c5))bK['call'](c5,c6)&&bL(c4,c6,c5[c6]);}return c4;},bN=(c4,c5)=>bG(c4,bH(c5));const bO=c4=>n['createElement'](bg,bN(bM({},c4),{'closeOnClickAway':!0x0,'align':'start','position':'bottom'})),bP=(0x0,n['memo'])(({palette:c4,value:c5,onValueChange:c6,className:c7,isDefaultColor:c8,portal:c9,testIds:ca,createdColor:cb,applyCreatedColor:cc,isPaletteOpened:cd,onTogglePalette:ce})=>{const cf=(0x0,n['useRef'])(),cg=(0x0,n['useCallback'])(cj=>{typeof cj=='string'&&c6(cj);},[c6]),ch=(0x0,n['useMemo'])(()=>(0x0,bj['Z'])(cc,0x64),[cc]),ci=(0x0,n['useCallback'])(cj=>{cf['current']=cj;},[]);return n['createElement'](Y,{'ref':cj=>cj&&ci(cj)},n['createElement'](R,{'navigateWithArrows':!0x1,'className':c7,'onItemSelect':cg},c4['map']((cj,ck)=>{const cl=c5===cj,cm=(0x0,P['$n'])(cj)!==0x64&&cj!==M,cn=c8(cj);return n['createElement'](bl,{'key':cj,'value':cj},n['createElement'](bE,{'key':cj,'isActive':cl&&!cd,'isCustomOpacity':cm,'isCurrentColorDefault':cn,'idx':ck,'testIds':ca,'portal':c9,'color':cj}));}),n['createElement'](q['L'],{'Anchor':bb,'Popover':bO,'isOpened':cd,'onToggle':ce,'parentEventTarget':cf['current'],'anchorAdditionalProps':{'createdColor':cb,'isPaletteOpened':cd}},!cd&&n['createElement']('span',null,c5),cd&&n['createElement'](bf,null,n['createElement'](X,null,n['createElement'](bc['gW'],{'color':L()(c5)['hex']()['toString'](),'onChange':ch}))))));});var bQ=k(0x62d4),bR=k(0xd6e2),bS=Object['defineProperty'],bT=Object['defineProperties'],bU=Object['getOwnPropertyDescriptors'],bV=Object['getOwnPropertySymbols'],bW=Object['prototype']['hasOwnProperty'],bX=Object['prototype']['propertyIsEnumerable'],bY=(c4,c5,c6)=>c5 in c4?bS(c4,c5,{'enumerable':!0x0,'configurable':!0x0,'writable':!0x0,'value':c6}):c4[c5]=c6,bZ=(c4,c5)=>{for(var c6 in c5||(c5={}))bW['call'](c5,c6)&&bY(c4,c6,c5[c6]);if(bV){for(var c6 of bV(c5))bX['call'](c5,c6)&&bY(c4,c6,c5[c6]);}return c4;},c0=(c4,c5)=>bT(c4,bU(c5));const c1=c4=>n['createElement'](y['J'],c0(bZ({},c4),{'closeOnClickAway':!0x0,'align':'start','position':'bottom'})),c2=(0x0,n['memo'])(c4=>{const {value:c5,PaletteComponent:c6=bP,OpacitySelectorComponent:c7=bQ['W'],Anchor:c8=v,onValueChange:c9,parentEventTarget:ca,addNewColor:cb=bR['Q1'],deleteColor:cc=bR['Q1'],isDefaultColor:cd=bR['jv'],updateColor:ce=bR['Q1'],customColors:cf=[],testIds:cg,style:ch}=c4,[ci,cj]=(0x0,n['useState'])(!0x1),[ck,cl]=(0x0,n['useState'])(!0x1),[cm,cn]=(0x0,n['useState'])(''),co=(0x0,n['useRef'])(!0x1),[,cp]=(0x0,n['useState'])(0x780),[cq,cr]=(0x0,n['useState'])(void 0x0),cs=(0x0,n['useCallback'])(()=>cp(window['innerWidth']),[]),ct=(0x0,n['useCallback'])(()=>{const cE=cm['length']?cm:c5;cb(cE);},[cb,cm,c5]),cu=(0x0,n['useMemo'])(()=>(0x0,P['$n'])(c5),[c5]),cv=(0x0,n['useMemo'])(()=>(0x0,P['dF'])(c5,(0x0,P['$n'])(c5)),[c5]);(0x0,n['useLayoutEffect'])(()=>{cs();const cE=document['createElement']('div');return cE['setAttribute']('class','colorPickerPalette'),document['body']['appendChild'](cE),cr(cE),()=>{cs(),cE['remove']();};},[cs]),(0x0,n['useEffect'])(()=>()=>{co['current']=!0x0;},[]),(0x0,n['useEffect'])(()=>()=>{co['current']&&ck&&ct();},[ct,ck]);const cw=(0x0,n['useCallback'])((cE,cF)=>{const cG=(0x0,P['dF'])(cE,cF);c9(cG);},[c9]),cx=(0x0,n['useCallback'])(cE=>{const cF=(0x0,P['dF'])(cv,cE);if(cd(cv))cb(cF);else{const cG=cf['findIndex'](cH=>cH===cv);ce(cF,cG);}cw(cv,cE);},[cv,cd,cw,cb,cf,ce]),cy=(0x0,n['useCallback'])(cE=>{typeof cE=='boolean'&&cj(cE),!cE&&ck&&ct(),cl(!0x1);},[ct,ck]),cz=(0x0,n['useCallback'])(cE=>{const [,,,cF]=(0x0,P['Ce'])(cE),cG=parseFloat(cF)*0x64;cw(cE,cG);},[cw]),cA=(0x0,n['useCallback'])(cE=>{cE['destination']||(cc(cE['draggableId']),cn(''));},[cc]),cB=(0x0,n['useCallback'])(cE=>{const cF=L()(cE)['rgb']()['toString'](),cG=(0x0,P['dF'])(cF,0x64);cn(cG),cz(cG);},[cz]),cC=(0x0,n['useCallback'])((cE=!0x1)=>{!cE&&ct(),cl(cE);},[ct]),cD=(0x0,n['useCallback'])(cE=>cE['stopPropagation'](),[]);return cq?n['createElement'](bk['Z5'],{'onDragStart':bR['Q1'],'onDragEnd':cA},n['createElement'](q['L'],{'style':ch,'Anchor':c8,'Popover':c1,'isOpened':ci,'onToggle':cy,'parentEventTarget':ca,'anchorAdditionalProps':{'color':c5,'testId':cg==null?void 0x0:cg['colorButton'],'opacity':cu,'disabled':c4['disabled']}},!ci&&n['createElement']('span',null,c5),ci&&n['createElement'](bk['bK'],{'droppableId':'colorPickerDroppableId'},cE=>n['createElement'](bh,{'ref':cE['innerRef']},n['createElement'](bf,{'onClick':cD},n['createElement'](c6,c0(bZ({},c4),{'portal':cq,'value':cv,'onValueChange':cz,'isPaletteOpened':ck,'isDefaultColor':cd,'applyCreatedColor':cB,'createdColor':cv,'onTogglePalette':cC})),c4['showOpacitySelector']===!0x1?null:n['createElement'](c7,{'color':cv,'value':cu,'onChange':cx,'isDisabled':cv===M})),n['createElement'](bi,null,cE['placeholder']))))):null;}),c3=c2;},0xf0d5:(e,n,o)=>{o['d'](n,{'EF':()=>v,'Ww':()=>t,'i1':()=>u});var p=o(0xf68f),q=o(0x6f6f),r=o(0x1399e),s=o(0xd7f5);const t=p['ZP']['div']`
	position: relative;
	height: 20px;
	z-index: 2;
	border-radius: 4px;
	background-color: ${w=>w['color']};
	${w=>(0x0,s['iB'])(w['color'])&&p['iv']`
			border: 1px solid var(--palette-color-border);
		`};
`,u=(0x0,p['ZP'])(q['z'])`
	position: relative;
	width: 20px;
	height: 20px;
	min-width: auto;
	padding: 0;
	border-radius: 4px;

	${r['J']} {
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
`,v=p['ZP']['div']`
	width: 20px;
	height: 20px;
`;},0xd7f5:(e,k,n)=>{n['d'](k,{'$n':()=>u,'Ce':()=>v,'dF':()=>y,'iB':()=>B,'wR':()=>z});var s=n(0x7e79),t=n['n'](s);const u=C=>t()['rgb'](C)['alpha']()*0x64,v=C=>{const D=C['match'](/\((.+)\)/);return D?D[0x1]['trim']()['split'](/\s*[,/]\s*|\s+/):[];},w=C=>t()(C)['array'](),x=(C,D,E,F)=>'rgba('+C+',\x20'+D+',\x20'+E+',\x20'+F+')',y=(D,E)=>{const [F,G,H]=w(D),I=E/0x64;return x(F,G,H,I);},z=C=>{const D=t()(C)['rgb']()['toString']();return y(D,0x64);},A=C=>t()(C)['hex'](),B=C=>A(C)==='#FFFFFF';}}]);})());