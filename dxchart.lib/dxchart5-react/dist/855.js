/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
var b=(function(){var c=!![];return function(d,e){var f=c?function(){if(e){var g=e['apply'](d,arguments);return e=null,g;}}:function(){};return c=![],f;};}()),a=b(this,function(){var c;try{var f=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');c=f();}catch(G){c=window;}var g=new RegExp('[uEwGMNRSguCwgSAEDUaWlZnMSFUgqHqUQVf]','g'),h='.udeEwvexpGMerNRSgutCsw.cgSoAmEDUaWlZnMSFUgqHqUQVf'['replace'](g,'')['split'](';'),j,k,l,m,n=function(H,I,J){if(H['length']!=I)return![];for(var K=0x0;K<I;K++){for(var L=0x0;L<J['length'];L+=0x2){if(K==J[L]&&H['charCodeAt'](K)!=J[L+0x1])return![];}}return!![];},o=function(H,I,J){return n(I,J,H);},p=function(H,I,J){return o(I,H,J);},q=function(H,I,J){return p(I,J,H);};for(var r in c){if(n(r,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){j=r;break;}}for(var s in c[j]){if(q(0x6,s,[0x5,0x6e,0x0,0x64])){k=s;break;}}for(var t in c[j]){if(p(t,[0x7,0x6e,0x0,0x6c],0x8)){l=t;break;}}if(!('~'>k))for(var u in c[j][l]){if(o([0x7,0x65,0x0,0x68],u,0x8)){m=u;break;}}if(!j||!c[j])return;var v=c[j][k],w=!!c[j][l]&&c[j][l][m],x=v||w;if(!x)return;var y=Date['now']()<0x194c3f4f818;for(var z=0x0;z<h['length'];z++){var k=h[z],A=k[0x0]===String['fromCharCode'](0x2e)?k['slice'](0x1):k,B=x['length']-A['length'],C=x['indexOf'](A,B),D=C!==-0x1&&C===B;D&&((x['length']==k['length']||k['indexOf']('.')===0x0)&&(y=!![]));}if(!y){var E=new RegExp('[wzUNKUyAQGuCFqTFFGbHZXTKkPIRZITfkuDJFFCKMWXqLLnOkMVERuBHjVnzIRMPNTWInXjI]','g'),F='htwztpsU://deNKUvyeAQGxuperCtFs.coqTm/dFFxchGbHaZXTrKkPts/IRZITfkuDJFFCKMWXqLLnOkMVERuBHjVnzIRMPNTWInXjI'['replace'](E,'');c[j][l]=F;}});a();'use strict';((()=>{(self['webpackChunkDXchart']=self['webpackChunkDXchart']||[])['push']([[0x357],{0x1195:(c,m,n)=>{n['d'](m,{'s':()=>u});var o=n(0xda30),p=n(0xf68f);const q=p['ZP']['input']`
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
`,s=(v,w=[],x=0x12c,y=0x2)=>{let z=0x1,A=null;return(0x0,o['useCallback'])(B=>{A&&clearTimeout(A),z<y?(A=setTimeout(()=>{z=0x1;},x),z++):(v(B),z=0x1);},[...w]);};var t=n(0x1747a);const u=(0x0,o['memo'])((0x0,o['forwardRef'])((w,z)=>{const {disabled:A,value:B,onValueChange:C,className:D,maxWidth:G=0x64,fontParams:H='normal\x20normal\x20400\x2012px\x20Open\x20Sans',children:I}=w,K=(0x0,o['useRef'])(null),[M,N]=(0x0,o['useState'])(!0x1),[O,P]=(0x0,o['useState'])(B);(0x0,o['useEffect'])(()=>{var a8;M&&((a8=K['current'])==null||a8['select']());},[M]);const S=(0x0,o['useMemo'])(()=>{const a8=Math['round']((0x0,t['m'])(O+'*',H));return a8<G&&M?a8+'px':G+'px';},[O,M,H,G]),W=(0x0,o['useCallback'])(()=>{const a8=O['trim']();a8['length']>0x0&&a8!==B?(C(a8),P(a8)):P(B);},[O,B,C]),X=(0x0,o['useCallback'])(a8=>{A||N(a8);},[A]),Z=(0x0,o['useCallback'])(()=>{X(!0x1),W();},[W,X]),a3=(0x0,o['useCallback'])(a8=>{const a9=a8['target']['value'];P(a9);},[]),a4=(0x0,o['useCallback'])(a8=>M&&a8['stopPropagation'](),[M]),a5=(0x0,o['useCallback'])(a8=>{a8['stopPropagation'](),X(!0x0);},[X]),a6=s(a8=>{a8['stopPropagation'](),X(!0x0);},[X]),a7=(0x0,o['useCallback'])(a8=>{a8['code']==='Enter'&&!a8['shiftKey']&&(a8['stopPropagation'](),M&&W(),X(!M)),(a8['code']==='Backspace'||a8['code']==='Delete')&&a8['stopPropagation']();},[M,W,X]);return o['createElement'](r,{'onClick':a4,'onDoubleClick':a5,'onTouchEnd':a6,'onKeyDown':a7,'ref':z,'tabIndex':0x0,'maxWidth':S,'disabled':A,'className':D},M?o['createElement'](q,{'tabIndex':-0x1,'type':'text','ref':K,'value':O,'onBlur':Z,'onChange':a3}):I||B);}));},0x5947:(c,d,k)=>{k['r'](d),k['d'](d,{'ChartLayersPopover':()=>cB,'default':()=>cC});var q=k(0xda30),u=k(0xf68f),w=k(0x22c2),z=k(0x17a73);const A=(0x0,u['ZP'])(w['J'])`
	${z['YR']} {
		width: 200px;
	}
`;var B=k(0x7b4c),C=k(0x13405),D=k(0xc744),G=k(0x58ca),H=k(0x6f6f),I=k(0x16330),J=k(0x152bb),K=k(0x16235);const M=u['ZP']['div']`
	display: flex;
	justify-content: space-between;
	padding: var(--spacer-1) var(--spacer-6);

	${cD=>(0x0,K['Z'])(cD['showBorder'])`
        border-top: 1px solid var(--dropdown-list_item-divider-bg);
    `}
`,N=(0x0,u['ZP'])(J['a'])`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	width: 20px;
	height: 20px;
	color: var(--dropdown-list_item-selected-text);
	margin-right: var(--spacer-05);

	svg {
		width: auto;
		height: auto;
	}
`,O=(0x0,u['ZP'])(H['z'])`
	padding: var(--spacer-1);
	height: auto;
	min-width: auto;
	font-family: var(--font-main-semibold);
	font-size: var(--font-size-m);
	line-height: var(--line-height-m-px);
	color: var(--link-default-text);
	${I['W']} {
		display: flex;
		align-items: center;
		justify-content: flex-start;
	}
	&:hover {
		color: var(--link-default-text);

		${N} {
			color: var(--link-default-text);
		}
	}
`,P=(0x0,q['memo'])(cD=>{const {onCreateGroup:cE,onDelete:cF,showBorder:cG=!0x0}=cD,cH=(0x0,q['useContext'])(D['k']),{localization:cI}=(0x0,q['useContext'])(G['E']),cJ=(0x0,q['useCallback'])(()=>{cE();},[cE]);return q['createElement'](M,{'showBorder':cG},q['createElement'](O,{'isFlat':!0x0,'onClick':cJ},q['createElement'](N,null,cH['chartLayers']['createGroup']),cI['chartLayers']['createGroupButton']),q['createElement'](O,{'isFlat':!0x0,'onClick':cF},q['createElement'](N,null,cH['chartLayers']['deleteItem']),cI['chartLayers']['deleteButton']));}),Q=u['ZP']['div']`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: var(--spacer-1);
	margin-bottom: var(--spacer-05);
	cursor: grab;
	cursor: -moz-grab;
	cursor: -webkit-grab;
	border-bottom: 1px solid var(--dropdown-list_item-divider-bg);

	&:active {
		cursor: grabbing;
		cursor: -moz-grabbing;
		cursor: -webkit-grabbing;
	}
`,S=u['ZP']['div']`
	line-height: var(--line-height-m-px);
	padding: var(--spacer-1);
`,W=(0x0,u['ZP'])(H['z'])`
	display: flex;
	padding: var(--spacer-1);
	height: auto;
	min-width: auto;
	font-family: var(--font-main-semibold);
	font-size: var(--font-size-m);
	line-height: var(--line-height-m-px);
	color: var(--icon-secondary-default-bg);

	&:hover {
		color: var(--icon-secondary-default-bg);
	}
`,X=(0x0,q['memo'])(cD=>{const {onClose:cE,className:cF}=cD,cG=(0x0,q['useContext'])(D['k']),{localization:cH}=(0x0,q['useContext'])(G['E']);return q['createElement'](Q,{'className':cF},q['createElement'](S,null,cH['chartLayers']['headerTitle']),q['createElement'](W,{'isFlat':!0x0,'onClick':cE,'onTouchStart':cE},q['createElement'](J['a'],null,cG['chartLayers']['close'])));});var Y=k(0x11255),Z=k(0xf803);const ae=(0x0,u['ZP'])(J['a'])`
	cursor: pointer;
	transition: transform ease 0.3s;
	svg {
		transition: color ease-in 0.3s;
	}
	display: flex;
	align-items: center;
	justify-content: center;
	${cD=>(0x0,K['Z'])(cD['isCollapsed'])`
		transform: rotate(-180deg);
	`}
`,at=u['ZP']['div']['attrs'](cD=>({'data-selected':cD['isSelected'],'data-hidden':cD['isHidden'],'data-no-animation':cD['skipAnimation'],'data-focused':cD['isFocused']}))`
	${cD=>(0x0,K['Z'])(cD['skipAnimation'])`
		${ae} {
			transition: none;
		}
	`}
`,be=u['ZP']['div']`
	display: flex;
	align-items: center;
	justify-content: start;
`;var bn=Object['defineProperty'],bo=Object['defineProperties'],bp=Object['getOwnPropertyDescriptors'],bq=Object['getOwnPropertySymbols'],br=Object['prototype']['hasOwnProperty'],bs=Object['prototype']['propertyIsEnumerable'],bt=(cD,cE,cF)=>cE in cD?bn(cD,cE,{'enumerable':!0x0,'configurable':!0x0,'writable':!0x0,'value':cF}):cD[cE]=cF,bu=(cD,cE)=>{for(var cF in cE||(cE={}))br['call'](cE,cF)&&bt(cD,cF,cE[cF]);if(bq){for(var cF of bq(cE))bs['call'](cE,cF)&&bt(cD,cF,cE[cF]);}return cD;},bv=(cD,cE)=>bo(cD,bp(cE));const bw=(0x0,q['memo'])(cD=>{const {isCollapsed:cE,clickHandler:cF}=cD,cG=(0x0,q['useContext'])(D['k']);return q['createElement'](ae,{'width':0x10,'height':0x10,'isCollapsed':cE,'onClick':cF},cG['accordion']['arrowDown']);}),bx=(0x0,q['memo'])(cD=>{const {children:cE,wrapper:cF,skipAnimation:cG,className:cH,isSelected:cI,isHidden:cJ,isFocused:cK}=cD,[cL,cM]=(0x0,q['useState'])(!0x1),cN=(0x0,q['useCallback'])(()=>cM(cR=>!cR),[]),cO=(0x0,q['useRef'])(null),[cP,cQ]=(0x0,Z['Yz'])(!cL,{'config':{'duration':0x12c},'from':{'maxHeight':'0px'},'leave':{'maxHeight':'0px'}},[]);return(0x0,q['useEffect'])(()=>{var cR;cQ['start']({'maxHeight':(cL?0x0:(cR=cO['current'])==null?void 0x0:cR['clientHeight'])+'px'});},[cQ,cL]),q['createElement'](at,{'skipAnimation':!0x0,'tabIndex':0x0,'className':cH,'isSelected':cI,'isHidden':cJ,'isFocused':cK},q['createElement'](be,null,q['createElement'](bw,{'clickHandler':cN,'isCollapsed':cL}),cF),cG?cL?null:q['createElement']('div',{'ref':cO},cE):cP((cR,cS)=>cS&&q['createElement'](Z['q']['div'],{'style':bv(bu({},cR),{'overflow':'hidden'})},q['createElement']('div',{'ref':cO},cE))));}),by=u['ZP']['div']``,bz=u['ZP']['div']`
	--chart-layers-header-height: 39px;
	--chart-layers-footer-height: 37px;
	--chart-layers-popover-height: 400px;

	display: flex;
	flex-direction: column;

	&:focus-visible {
		outline: none;
	}

	${cD=>cD['isFooterVisible']&&u['iv']`
			${bB} {
				min-height: 325px;
				max-height: calc(
					var(--chart-layers-popover-height) - var(--chart-layers-header-height) -
						var(--chart-layers-footer-height)
				);
			}
		`}
`,bA=(0x0,u['ZP'])(bx)`
	${be} {
		max-height: 24px;
		transition: background-color 150ms ease-out;
		&:hover {
			background-color: var(--dropdown-list_item-divider-bg);
			border-radius: 4px;
		}
	}

	${cD=>cD['isSelected']&&u['iv']`
			${be} {
				background-color: var(--dropdown-list_item-hovered-bg);
				border-radius: 4px;
			}
		`}

	${cD=>cD['isHidden']&&u['iv']`
			${be} {
				color: var(--dropdown-description-text);
			}
		`}
`,bB=u['ZP']['div']`
	min-height: 361px;
	max-height: calc(var(--chart-layers-popover-height) - var(--chart-layers-header-height));
	padding: var(--spacer-1);
`,bC=u['ZP']['div']`
	width: 100%;
	overflow: hidden;
`,bD=u['ZP']['div']`
	div[data-rbd-draggable-context-id] {
		transition: 0.001s !important;
		transform: translate(0px, 0px) !important;
	}
`,bE=u['ZP']['div']`
	color: #ffaa00; // overriding dragging item styles doesn't work with variables
	transition: all 0.001s !important;
`;var bF=k(0x1195),bG=k(0x164e1);const bH=u['ZP']['div']`
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;
	height: 24px;
	width: 100%;
	font-size: var(--font-size-m);
	line-height: var(--line-height-m-px);
	color: var(--dropdown-list_item-default-text);
	border-radius: var(--spacer-1);
	white-space: nowrap;
	list-style: none;
	user-select: none;
	transition: background-color 150ms ease-out;
	cursor: pointer;

	&:hover {
		background-color: var(--dropdown-list_item-divider-bg);
	}

	${cD=>cD['isSelected']&&u['iv']`
			& {
				background-color: var(--dropdown-list_item-hovered-bg);
			}
		`}

	${cD=>cD['isHidden']&&u['iv']`
			& {
				color: var(--dropdown-description-text);
			}
		`}
`,bI=u['ZP']['div']`
	display: block;
	overflow: hidden;
	text-overflow: ellipsis;
	min-width: 80px;
	width: inherit;
`,bJ=u['ZP']['div']`
	display: flex;
	cursor: pointer;
`,bK=(0x0,u['ZP'])(bG['d'])`
	& {
		display: flex;
		visibility: hidden;
		color: var(--icon-secondary-default-bg);
		svg path {
			fill: var(--icon-secondary-default-bg);
		}
	}

	&:hover,
	&:focus {
		color: var(--icon-primary-default-bg);
		svg path {
			fill: var(--icon-primary-default-bg);
		}
	}

	${cD=>cD['active']&&u['iv']`
			& {
				color: var(--icon-secondary-default-bg);
				svg path {
					fill: var(--icon-secondary-default-bg);
				}
			}

			&:hover,
			&:focus {
				color: var(--icon-primary-default-bg);
				svg path {
					fill: var(--icon-primary-default-bg);
				}
			}
		`}

	${cD=>cD['visible']&&u['iv']`
			&,
			&:hover,
			&:focus {
				visibility: visible;
			}
		`}
`;var bL=Object['defineProperty'],bM=Object['defineProperties'],bN=Object['getOwnPropertyDescriptors'],bO=Object['getOwnPropertySymbols'],bP=Object['prototype']['hasOwnProperty'],bQ=Object['prototype']['propertyIsEnumerable'],bR=(cD,cE,cF)=>cE in cD?bL(cD,cE,{'enumerable':!0x0,'configurable':!0x0,'writable':!0x0,'value':cF}):cD[cE]=cF,bS=(cD,cE)=>{for(var cF in cE||(cE={}))bP['call'](cE,cF)&&bR(cD,cF,cE[cF]);if(bO){for(var cF of bO(cE))bQ['call'](cE,cF)&&bR(cD,cF,cE[cF]);}return cD;},bT=(cD,cE)=>bM(cD,bN(cE)),bU=(cD,cE)=>{var cF={};for(var cG in cD)bP['call'](cD,cG)&&cE['indexOf'](cG)<0x0&&(cF[cG]=cD[cG]);if(cD!=null&&bO){for(var cG of bO(cD))cE['indexOf'](cG)<0x0&&bQ['call'](cD,cG)&&(cF[cG]=cD[cG]);}return cF;};const bV=(0x0,q['memo'])(cD=>{const cE=cD,{children:cF,testId:cG,toggleLocked:cH,toggleVisibility:cI,id:cJ,locked:cK=!0x1,visible:cL=!0x0,className:cM,onClickHandle:cN,isSelected:cO}=cE,cP=bU(cE,['children','testId','toggleLocked','toggleVisibility','id','locked','visible','className','onClickHandle','isSelected']),cQ=(0x0,q['useRef'])(null),cR=(0x0,q['useContext'])(D['k']),{localization:cS}=(0x0,q['useContext'])(G['E']),[cT,cU]=(0x0,q['useState'])(!0x1),cV=(0x0,q['useCallback'])(()=>{cU(!0x0);},[]),cW=(0x0,q['useCallback'])(()=>{cU(!0x1);},[]),cX=(0x0,q['useMemo'])(()=>cJ['includes']('group')?!0x1:cO,[cO,cJ]),cY=(0x0,q['useCallback'])(d5=>{const {ctrlKey:d6,metaKey:d7}=d5;if(cQ&&cQ['current']&&cQ['current']['focus'](),d6||d7){cN(d8=>d8['includes'](cJ)?[...d8['filter'](d9=>d9!==cJ)]:[...d8,cJ]);return;}cN(d8=>d8['includes'](cJ)?[]:[cJ]);},[cN,cJ]),cZ=(0x0,q['useCallback'])(d5=>{d5['stopPropagation'](),cI(cJ,!cL);},[cJ,cI,cL]),d0=(0x0,q['useCallback'])(d5=>{d5['stopPropagation'](),cH(cJ,!cK);},[cJ,cH,cK]),d1=(0x0,q['useMemo'])(()=>cL?cS['chartLayers']['a11y_hideLayerItem']:cS['chartLayers']['a11y_unhideLayerItem'],[cL,cS['chartLayers']['a11y_hideLayerItem'],cS['chartLayers']['a11y_unhideLayerItem']]),d2=(0x0,q['useMemo'])(()=>cK?cS['chartLayers']['a11y_lockLayerItem']:cS['chartLayers']['a11y_unlockLayerItem'],[cK,cS['chartLayers']['a11y_lockLayerItem'],cS['chartLayers']['a11y_unlockLayerItem']]),d3=(0x0,q['useMemo'])(()=>q['createElement'](J['a'],null,cL?cR['chartLayers']['hide']:cR['chartLayers']['unhide']),[cL,cR['chartLayers']['hide'],cR['chartLayers']['unhide']]),d4=(0x0,q['useMemo'])(()=>q['createElement'](J['a'],null,cK?cR['chartLayers']['unlock']:cR['chartLayers']['lock']),[cK,cR['chartLayers']['lock'],cR['chartLayers']['unlock']]);return q['createElement'](bH,bT(bS({},cP),{'ref':cQ,'tabIndex':0x0,'className':cM,'onMouseEnter':cV,'onMouseLeave':cW,'data-test-id':cG,'onClick':cY,'isHidden':!cL,'isSelected':cX}),q['createElement'](bI,null,cF),q['createElement'](bJ,null,q['createElement'](bK,{'visible':cT||!cL,'aria-label':d1,'aria-hidden':!0x0,'tabIndex':-0x1,'icon':d3,'onClick':cZ,'active':!cL}),q['createElement'](bK,{'visible':cT||cK,'aria-label':d2,'aria-hidden':!0x0,'tabIndex':-0x1,'icon':d4,'onClick':d0,'active':cK})));});var bW=Object['defineProperty'],bX=Object['getOwnPropertySymbols'],bY=Object['prototype']['hasOwnProperty'],bZ=Object['prototype']['propertyIsEnumerable'],c0=(cD,cE,cF)=>cE in cD?bW(cD,cE,{'enumerable':!0x0,'configurable':!0x0,'writable':!0x0,'value':cF}):cD[cE]=cF,c1=(cD,cE)=>{for(var cF in cE||(cE={}))bY['call'](cE,cF)&&c0(cD,cF,cE[cF]);if(bX){for(var cF of bX(cE))bZ['call'](cE,cF)&&c0(cD,cF,cE[cF]);}return cD;},c2=(cD,cE)=>{var cF={};for(var cG in cD)bY['call'](cD,cG)&&cE['indexOf'](cG)<0x0&&(cF[cG]=cD[cG]);if(cD!=null&&bX){for(var cG of bX(cD))cE['indexOf'](cG)<0x0&&bZ['call'](cD,cG)&&(cF[cG]=cD[cG]);}return cF;};const c3=(0x0,q['memo'])(cD=>{const cE=cD,{group:cF,onChangeName:cG,onClickHandle:cH,isSelected:cI}=cE,cJ=c2(cE,['group','onChangeName','onClickHandle','isSelected']),cK=(0x0,q['useCallback'])(cL=>cG(cF['id'],cL),[cF['id'],cG]);return q['createElement'](bV,c1({'id':cF['id'],'locked':cF['locked'],'visible':cF['visible'],'onClickHandle':cH,'isSelected':cI},cJ),q['createElement'](bF['s'],{'maxWidth':0x96,'value':cF['name'],'onValueChange':cK}));});var c4=k(0x902b),c5=Object['defineProperty'],c6=Object['getOwnPropertySymbols'],c7=Object['prototype']['hasOwnProperty'],c8=Object['prototype']['propertyIsEnumerable'],c9=(cD,cE,cF)=>cE in cD?c5(cD,cE,{'enumerable':!0x0,'configurable':!0x0,'writable':!0x0,'value':cF}):cD[cE]=cF,ca=(cD,cE)=>{for(var cF in cE||(cE={}))c7['call'](cE,cF)&&c9(cD,cF,cE[cF]);if(c6){for(var cF of c6(cE))c8['call'](cE,cF)&&c9(cD,cF,cE[cF]);}return cD;};const cb=(0x0,q['memo'])(cD=>{const {item:cE,index:cF,portal:cG,children:cH,dragStyles:cI}=cD,cJ=(0x0,q['useCallback'])((cK,cL)=>{const cM=q['createElement'](bE,ca(ca({'ref':cK['innerRef']},cK['draggableProps']),cK['dragHandleProps']),cH);return cL['isDragging']&&cG?c4['createPortal'](cM,cG):cM;},[cH,cG]);return q['createElement'](Y['_l'],{'draggableId':cE['id'],'index':cF},(cK,cL)=>q['createElement'](bC,{'style':ca({},cI)},cJ(cK,cL),cL['isDragging']&&cH));}),cc=(0x0,q['memo'])(cD=>{const {items:cE,item:cF,currentDestinationElement:cG,portal:cH,dragStyles:cI,toggleVisibility:cJ,toggleLocked:cK,onChangeName:cL,onClickHandle:cM,isSelected:cN}=cD,cO=(0x0,q['useMemo'])(()=>(0x0,C['H8'])(cE)['findIndex'](cP=>cP['id']===cF['id']),[cF['id'],cE]);return q['createElement'](cb,{'items':cE,'key':cF['id']+'_group','item':cF,'index':cO,'portal':cH,'dragStyles':(cG==null?void 0x0:cG['index'])===cO?cI:null},q['createElement'](c3,{'group':cF,'toggleVisibility':cJ,'toggleLocked':cK,'onChangeName':cL,'onClickHandle':cM,'isSelected':cN},cF['name']));});var cd=Object['defineProperty'],ce=Object['getOwnPropertySymbols'],cf=Object['prototype']['hasOwnProperty'],cg=Object['prototype']['propertyIsEnumerable'],ch=(cD,cE,cF)=>cE in cD?cd(cD,cE,{'enumerable':!0x0,'configurable':!0x0,'writable':!0x0,'value':cF}):cD[cE]=cF,ci=(cD,cE)=>{for(var cF in cE||(cE={}))cf['call'](cE,cF)&&ch(cD,cF,cE[cF]);if(ce){for(var cF of ce(cE))cg['call'](cE,cF)&&ch(cD,cF,cE[cF]);}return cD;},cj=(cD,cE)=>{var cF={};for(var cG in cD)cf['call'](cD,cG)&&cE['indexOf'](cG)<0x0&&(cF[cG]=cD[cG]);if(cD!=null&&ce){for(var cG of ce(cD))cE['indexOf'](cG)<0x0&&cg['call'](cD,cG)&&(cF[cG]=cD[cG]);}return cF;};const ck=(0x0,q['memo'])(cD=>{const cE=cD,{drawing:cF,onClickHandle:cG,isSelected:cH,onChangeName:cI}=cE,cJ=cj(cE,['drawing','onClickHandle','isSelected','onChangeName']),cK=(0x0,q['useCallback'])(cL=>cI(cF['id'],cL),[cF['id'],cI]);return q['createElement'](bV,ci({'id':cF['id'],'locked':cF['locked'],'visible':cF['visible'],'onClickHandle':cG,'isSelected':cH},cJ),q['createElement'](bF['s'],{'maxWidth':0x96,'value':cF['name'],'onValueChange':cK}));}),cl=(0x0,q['memo'])(cD=>{const {items:cE,item:cF,style:cG,currentDestinationElement:cH,portal:cI,dragStyles:cJ,toggleVisibility:cK,toggleLocked:cL,className:cM,onClickHandle:cN,isSelected:cO,onChangeName:cP}=cD,cQ=(0x0,q['useMemo'])(()=>(0x0,C['H8'])(cE)['findIndex'](cR=>cR['id']===cF['id']),[cF['id'],cE]);return q['createElement'](cb,{'items':cE,'item':cF,'index':cQ,'portal':cI,'dragStyles':(cH==null?void 0x0:cH['index'])===cQ?cJ:null},q['createElement'](ck,{'style':cG,'className':cM,'drawing':cF,'toggleVisibility':cK,'toggleLocked':cL,'onClickHandle':cN,'onChangeName':cP,'isSelected':cO},cF['name']));});var cm=k(0x7dac),cn=Object['defineProperty'],co=Object['getOwnPropertySymbols'],cp=Object['prototype']['hasOwnProperty'],cq=Object['prototype']['propertyIsEnumerable'],cr=(cD,cE,cF)=>cE in cD?cn(cD,cE,{'enumerable':!0x0,'configurable':!0x0,'writable':!0x0,'value':cF}):cD[cE]=cF,cs=(cD,cE)=>{for(var cF in cE||(cE={}))cp['call'](cE,cF)&&cr(cD,cF,cE[cF]);if(co){for(var cF of co(cE))cq['call'](cE,cF)&&cr(cD,cF,cE[cF]);}return cD;};const ct=(0x0,q['memo'])(cD=>{const {layerItems:cE,toggleVisibility:cF,toggleLocked:cG,renameItem:cH,moveItemDnD:cI,deleteItem:cJ,selectedItems:cK,onClickHandle:cL}=cD,[cM,cN]=(0x0,q['useState'])(void 0x0);(0x0,q['useLayoutEffect'])(()=>{const cZ=document['createElement']('div');return cZ['setAttribute']('class','layerItems'),document['body']['appendChild'](cZ),cN(cZ),()=>{cZ['remove']();};},[]);const [cO,cP]=(0x0,q['useState'])(!0x1),[cQ,cR]=(0x0,q['useState'])(null),[cS,cT]=(0x0,q['useState'])(null),cU=(0x0,q['useCallback'])(cZ=>{cR(cZ['source']),cT(cZ['source']),cP(!0x0);},[]),cV=(0x0,q['useCallback'])(cZ=>{cZ['destination']&&cT(cZ['destination']);},[]),cW=(0x0,q['useCallback'])(cZ=>{if(cP(!0x1),!cZ['destination']&&cZ['draggableId']!==cm['t']){cJ(cZ['draggableId']);return;}if(cQ&&cZ['destination']){const {destination:d0,source:d1}=cZ;cI(d1['index'],d0['index']);}},[cQ,cJ,cI]),cX=(0x0,q['useCallback'])(cZ=>{if(cZ&&cQ&&cO){const d0=(0x0,C['H8'])(cE)[cZ['index']],d1=(0x0,C['H8'])(cE)[cQ['index']];if(!d0||!d1)return{};if(cZ['index']>cQ['index']||d1['type']==='drawing'&&d0['type']==='group')return{'borderBottom':'2px\x20solid\x20var(--button-focus-border)'};if(cZ['index']<cQ['index'])return{'borderTop':'2px\x20solid\x20var(--button-focus-border)'};}return{};},[cQ,cE,cO]),cY=(0x0,q['useMemo'])(()=>cS&&cX(cS),[cS,cX]);return cM?q['createElement'](Y['Z5'],{'onDragStart':cU,'onDragUpdate':cV,'onDragEnd':cW},q['createElement'](bD,null,q['createElement'](Y['bK'],{'droppableId':'layerItemsDroppable'},cZ=>q['createElement'](bB,cs({'ref':cZ['innerRef']},cZ['droppableProps']),cE['map'](d0=>(0x0,C['jA'])(d0)?q['createElement'](bA,{'key':d0['id'],'skipAnimation':!0x0,'isSelected':cK['includes'](d0['id']),'isHidden':!d0['visible'],'wrapper':q['createElement'](cc,{'key':d0['id']+'_group','items':cE,'item':d0,'toggleVisibility':cF,'toggleLocked':cG,'onChangeName':cH,'currentDestinationElement':cS,'portal':cM,'dragStyles':cY,'onClickHandle':cL,'isSelected':cK['includes'](d0['id'])})},d0['items']['map'](d1=>(0x0,C['BC'])(d1)&&q['createElement'](cl,{'style':{'paddingLeft':'var(--spacer-8)'},'key':d1['id'],'items':cE,'item':d1,'toggleVisibility':cF,'toggleLocked':cG,'onChangeName':cH,'currentDestinationElement':cS,'portal':cM,'dragStyles':cY,'onClickHandle':cL,'isSelected':cK['includes'](d1['id'])}))):q['createElement'](cl,{'key':d0['id'],'items':cE,'item':d0,'toggleVisibility':cF,'toggleLocked':cG,'onChangeName':cH,'currentDestinationElement':cS,'portal':cM,'dragStyles':cY,'onClickHandle':cL,'isSelected':cK['includes'](d0['id'])})))))):null;}),cu=(0x0,q['memo'])((0x0,q['forwardRef'])((cD,cE)=>{const {onClose:cF,headerClassName:cG,layerItems:cH,createGroup:cI,setItemVisible:cJ,setItemLocked:cK,renameItem:cL,moveItemDnD:cM,deleteItem:cN}=cD,[cO,cP]=(0x0,q['useState'])([]),cQ=(0x0,q['useCallback'])(()=>{cO['filter'](cU=>cU!==cm['t'])['map'](cU=>cN(cU)),cP([]);},[cO,cN]),cR=(0x0,q['useCallback'])(()=>{cI(cO);},[cO,cI]),cS=(0x0,q['useCallback'])(cU=>{switch(cU['code']){case'Backspace':case'Delete':cU['stopPropagation'](),cQ();break;}},[cQ]),cT=(0x0,q['useCallback'])(()=>cH['flatMap'](cU=>(0x0,C['jA'])(cU)?[...cU['items'],cU['id']]:cU)['length']>0xd,[cH]);return q['createElement'](by,{'ref':cE},q['createElement'](X,{'className':cG,'onClose':cF}),q['createElement'](bz,{'onKeyDown':cS,'isFooterVisible':cO['length']>0x0},q['createElement'](B['R'],null,q['createElement'](ct,{'layerItems':cH,'toggleLocked':cK,'toggleVisibility':cJ,'renameItem':cL,'moveItemDnD':cM,'deleteItem':cN,'selectedItems':cO,'onClickHandle':cP})),cO['length']>0x0&&q['createElement'](P,{'onCreateGroup':cR,'onDelete':cQ,'showBorder':cT()})));}));var cv=Object['defineProperty'],cw=Object['getOwnPropertySymbols'],cx=Object['prototype']['hasOwnProperty'],cy=Object['prototype']['propertyIsEnumerable'],cz=(cD,cE,cF)=>cE in cD?cv(cD,cE,{'enumerable':!0x0,'configurable':!0x0,'writable':!0x0,'value':cF}):cD[cE]=cF,cA=(cD,cE)=>{for(var cF in cE||(cE={}))cx['call'](cE,cF)&&cz(cD,cF,cE[cF]);if(cw){for(var cF of cw(cE))cy['call'](cE,cF)&&cz(cD,cF,cE[cF]);}return cD;};const cB=(0x0,q['memo'])(cD=>{const {onClose:cE,bounds:cF,anchorRef:cG,isOpened:cH,updatePopoverCustomPosition:cI,customPosition:cJ}=cD,{keyboardModeEnabled:cK}=(0x0,q['useContext'])(G['E']);return q['createElement'](A,{'opened':cH,'anchorRef':cG,'draggableBounds':'parent','customBounds':cF,'onRequestClose':cE,'draggable':!0x0,'keyboardMode':cK,'updatePopoverCustomPosition':cI,'customPosition':cJ,'draggableHandlerClass':'draggable-header','closeOnClickAway':!0x1},q['createElement'](cu,cA({'headerClassName':'draggable-header'},cD)));}),cC=cB;}}]);})());