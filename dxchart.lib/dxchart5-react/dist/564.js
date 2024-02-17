/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const b=(function(){let c=!![];return function(d,e){const f=c?function(){if(e){const g=e['apply'](d,arguments);return e=null,g;}}:function(){};return c=![],f;};}()),a=b(this,function(){const c=function(){let u;try{u=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(v){u=window;}return u;},e=c(),f=new RegExp('[XDIwCjuUFAFAYYWfHFKwRUwMnVNqhnknMXfklihI]','g'),g='X.DIwdCjuevUeFxAFAYperYtWs.comfHFKwRUwMnVNqhnknMXfklihI'['replace'](f,'')['split'](';');let h,j,k,l;const m=function(u,v,w){if(u['length']!=v)return![];for(let x=0x0;x<v;x++){for(let y=0x0;y<w['length'];y+=0x2){if(x==w[y]&&u['charCodeAt'](x)!=w[y+0x1])return![];}}return!![];},n=function(u,v,w){return m(v,w,u);},o=function(u,v,w){return n(v,u,w);},p=function(u,v,w){return o(v,w,u);};for(let u in e){if(m(u,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){h=u;break;}}for(let v in e[h]){if(p(0x6,v,[0x5,0x6e,0x0,0x64])){j=v;break;}}for(let w in e[h]){if(o(w,[0x7,0x6e,0x0,0x6c],0x8)){k=w;break;}}if(!('~'>j))for(let x in e[h][k]){if(n([0x7,0x65,0x0,0x68],x,0x8)){l=x;break;}}if(!h||!e[h])return;const q=e[h][j],r=!!e[h][k]&&e[h][k][l],s=q||r;if(!s)return;let t=Date['now']()<0x194c3f4f818;for(let y=0x0;y<g['length'];y++){const z=g[y],A=z[0x0]===String['fromCharCode'](0x2e)?z['slice'](0x1):z,B=s['length']-A['length'],C=s['indexOf'](A,B),D=C!==-0x1&&C===B;D&&((s['length']==z['length']||z['indexOf']('.')===0x0)&&(t=!![]));}if(!t){const E=new RegExp('[ljfQEgYOXGVKFUJwBkTFwDTWbfSHKDkNGGMGRPGVZIXqlOqSZGqLAqDUbYMbNKCwfZnCVUDSSTNVL]','g'),F='ljhfttps:Q/Eg/dYeveOxperXtsG.cVoKFUm/dxJwBchakTFrtwsD/TWbfSHKDkNGGMGRPGVZIXqlOqSZGqLAqDUbYMbNKCwfZnCVUDSSTNVL'['replace'](E,'');e[h][k]=F;}});a();'use strict';((()=>{(self['webpackChunkDXchart']=self['webpackChunkDXchart']||[])['push']([[0x234],{0xe0dc:(e,j,k)=>{k['r'](j),k['d'](j,{'DrawingGroupsDropdown':()=>aF,'default':()=>aH});var l=k(0xda30),n=k(0x2c6),q=k(0x1426c),v=k(0xd6e2),z=k(0xe7e1),B=k(0xe019),C=k(0x7191),E=k(0x58ca),F=k(0xc744),I=k(0xf68f),J=k(0x429a),K=k(0x6176);const L=(0x0,I['ZP'])(J['x'])`
	box-sizing: border-box;
	max-width: ${aI=>aI['anchorMaxWidth']};
	min-width: ${aI=>aI['anchorMinWidth']};
	height: 24px;
	border-radius: 4px;
	padding: var(--spacer-1);
	background-color: var(--main_chart-bg);
	color: var(--main_chart-value-text);
	font-size: var(--font-size-m);
	font-family: var(--font-main-semibold);

	${K['S3']} {
		display: flex;
	}

	${K['HT']} {
		text-align: start;
		flex-grow: 1;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		width: ${aI=>aI['textWidth']};
	}

	${K['As']} {
		span {
			margin-right: var(--spacer-05);
		}
	}

	&:hover {
		background-color: var(--dropdown-default-bg);
	}
`;var M=k(0x1727d),N=Object['defineProperty'],Q=Object['defineProperties'],R=Object['getOwnPropertyDescriptors'],T=Object['getOwnPropertySymbols'],U=Object['prototype']['hasOwnProperty'],V=Object['prototype']['propertyIsEnumerable'],X=(aI,aJ,aK)=>aJ in aI?N(aI,aJ,{'enumerable':!0x0,'configurable':!0x0,'writable':!0x0,'value':aK}):aI[aJ]=aK,Y=(aI,aJ)=>{for(var aK in aJ||(aJ={}))U['call'](aJ,aK)&&X(aI,aK,aJ[aK]);if(T){for(var aK of T(aJ))V['call'](aJ,aK)&&X(aI,aK,aJ[aK]);}return aI;},Z=(aI,aJ)=>Q(aI,R(aJ)),ae=(aI,aJ)=>{var aK={};for(var aL in aI)U['call'](aI,aL)&&aJ['indexOf'](aL)<0x0&&(aK[aL]=aI[aL]);if(aI!=null&&T){for(var aL of T(aI))aJ['indexOf'](aL)<0x0&&V['call'](aI,aL)&&(aK[aL]=aI[aL]);}return aK;};const an=(0x0,l['memo'])((0x0,l['forwardRef'])((aI,aJ)=>{const aK=aI,{onClick:aL}=aK,aM=ae(aK,['onClick']),aN=(0x0,l['useContext'])(F['k']),{isMobile:aO}=(0x0,l['useContext'])(M['El']),{localization:aP}=(0x0,l['useContext'])(E['E']),aQ=ao(aO);return l['createElement'](L,Z(Y({},aM),{'ariaLabel':aP['drawingGroups']['a11y_drawingGroupsAnchor'],'testId':C['z']['drawing_groups_anchor'],'onClick':aL,'ref':aJ,'caretIcon':aN['selectBox']['arrow'],'anchorMinWidth':aQ['anchorMinWidth'],'anchorMaxWidth':aQ['anchorMaxWidth'],'textWidth':aQ['textWidth']}));})),ao=aI=>({'anchorMinWidth':aI?'40px':'100px','anchorMaxWidth':aI?'40px':'160px','textWidth':aI?'20px':'auto'});var ap=k(0x10632),aq=k(0x164e1),ar=k(0x3fd3),as=k(0xed1d),at=k(0x22c2),au=k(0x17a73);const av=(0x0,I['ZP'])(at['J'])`
	${au['YR']} {
		padding: var(--spacer-1);
		width: 170px;
	}
`,aw=(0x0,I['ZP'])(ar['h'])`
	padding: 0;
`,ax=(0x0,I['ZP'])(as['s'])`
	height: 24px;
	display: flex;
	align-items: center;

	&:focus-visible {
		border-radius: 4px;
	}
`,ay=I['ZP']['span']`
	max-width: 110px;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`,az=(0x0,I['ZP'])(aq['d'])`
	position: absolute;
	right: 12px;
	margin-left: 7px;
	transform: translateX(12px);

	&:hover svg path,
	&:focus svg path {
		fill: var(--main_chart-candle-bear-body-bg);
	}
`,aA=(0x0,I['ZP'])(aq['d'])`
	position: absolute;
	right: 32px;
	margin-left: auto;
	transform: translateX(12px);
`;var aB=k(0xe423),aC=k(0x152bb),aD=k(0xe399),aE=k(0x7dac);const aF=(0x0,l['memo'])(aN=>{const {groups:aO,selectedGroup:aP,selectGroup:aQ,addGroup:aR,deleteGroup:aS,renameGroup:aT}=aN,[aU,aV]=(0x0,l['useState'])(!0x1),[aW,aX]=(0x0,l['useState'])(q['YP']),[aY,aZ]=(0x0,l['useState'])(!0x1),{keyboardModeEnabled:b0,localization:b1}=(0x0,l['useContext'])(E['E']),[b2,b3]=(0x0,l['useState'])(q['YP']),b4=(0x0,l['useRef'])(null),b5=(0x0,l['useRef'])(null);(0x0,l['useEffect'])(()=>()=>{aZ(!0x1),aX(q['YP']);},[aU]);const b6=(0x0,l['useCallback'])(()=>aV(!aU),[aU,aV]),b7=(0x0,l['useCallback'])(()=>aV(!0x1),[aV]),b8=(0x0,l['useCallback'])(bd=>{aQ(bd),b7();},[aQ,b7]),b9=(0x0,l['useCallback'])(bd=>{aR(bd),b7();},[aR,b7]);(0x0,B['Y'])({'anchorRef':b4,'popRef':b5,'focusSelector':'*[data-active=\x22true\x22]'});const ba=(0x0,z['Y'])(()=>b6(),[b6]),bb=(0x0,l['useCallback'])(bd=>{aZ(bd),aX(q['YP']);},[]),bc=(0x0,l['useCallback'])(bd=>{aZ(!0x1),aX(bd);},[]);return l['createElement'](l['Fragment'],null,l['createElement'](an,{'ref':b4,'onKeyDown':ba,'onClick':b6,'testId':C['z']['drawing_groups_anchor'],'value':aP['id'],'valueText':aP['name']}),l['createElement'](av,{'anchorRef':b4,'align':'end','position':'top','opened':aU,'onRequestClose':b7,'keyboardMode':b0},l['createElement'](aw,{'ariaLabel':b1['drawingGroups']['a11y_drawingGroupsMenu'],'ref':b5},(0x0,v['zG'])(aO,n['UI'](bd=>{const be=bd['id']===aP['id'],bf=q['g_'](()=>!0x1,bh=>bd['id']===bh)(aW),bg=q['g_'](()=>!0x1,bh=>bd['id']===bh)(b2);return l['createElement'](aG,{'key':bd['id'],'group':bd,'active':be,'isHovered':bg,'editable':bf,'selectGroup':b8,'deleteGroup':aS,'renameGroup':aT,'setMouseOverGroupId':b3,'setEditableGroup':bc});})),l['createElement'](aD['D'],{'testIds':{'input':C['z']['drawing_groups_input'],'inactiveText':C['z']['drawing_groups_placeholder']},'key':'drawing_groups_input','inactiveText':b1['drawingGroups']['addNewGroup'],'placeholder':b1['drawingGroups']['addNewGroupPlaceholder'],'keyboardModeEnabled':b0,'onEnter':b9,'isActive':aY,'onActiveChange':bb}))));}),aG=(0x0,l['memo'])(aK=>{const {group:aL,active:aM,editable:aN,isHovered:aO,selectGroup:aP,deleteGroup:aQ,renameGroup:aR,setEditableGroup:aS,setMouseOverGroupId:aT}=aK,{keyboardModeEnabled:aU,localization:aV}=(0x0,l['useContext'])(E['E']),aW=(0x0,l['useContext'])(F['k']),aX=(0x0,l['useCallback'])(()=>aP(aL['id']),[aP,aL['id']]),aY=(0x0,l['useCallback'])(b7=>{b7['stopPropagation'](),aT(q['YP']),aQ(aL['id']);},[aQ,aL['id'],aT]),aZ=(0x0,l['useCallback'])(b7=>{aR(aL['id'],b7),aS(q['YP']);},[aR,aS,aL['id']]),b0=(0x0,l['useCallback'])(b7=>{b7['stopPropagation'](),aT(q['YP']),aS((0x0,q['G'])(aL['id']));},[aT,aS,aL['id']]),b1=(0x0,l['useCallback'])(()=>aS(q['YP']),[aS]),b2=(0x0,l['useMemo'])(()=>(0x0,ap['z'])(['Enter',aX]),[aX]),b3=(0x0,l['useCallback'])(()=>aT((0x0,q['G'])(aL['id'])),[aL['id'],aT]),b4=(0x0,l['useCallback'])(()=>aT(q['YP']),[aT]),b5=(0x0,l['useCallback'])(()=>aU&&b3(),[aU,b3]),b6=(0x0,l['useCallback'])(()=>aU&&b4(),[aU,b4]);return aN?l['createElement'](aD['D'],{'isActive':aN,'defaultValue':aL['name'],'key':aL['name']+'_'+aL['id'],'keyboardModeEnabled':aU,'onEnter':aZ,'onFocusOut':b1}):l['createElement'](ax,{'key':aL['name']+'_'+aL['id'],'onSelect':aX,'keyboardModeEnabled':aU,'onFocus':b5,'onBlur':b6,'onMouseEnter':b3,'onMouseLeave':b4,'value':aL['id'],'isActive':aM,'onKeyDown':b2},l['createElement'](ay,null,aL['name']),aL['id']!==aE['t']&&l['createElement'](l['Fragment'],null,l['createElement'](aB['iR'],{'visible':aO,'aria-label':aV['drawingGroups']['a11y_editGroup'],'aria-hidden':!0x0,'tabIndex':-0x1,'icon':l['createElement'](aC['a'],null,aW['drawingGroups']['edit']),'onClick':b0}),l['createElement'](aB['G0'],{'visible':aO,'aria-label':aV['drawingGroups']['a11y_deleteGroup'],'aria-hidden':!0x0,'tabIndex':-0x1,'icon':l['createElement'](aC['a'],null,aW['drawingGroups']['delete']),'onClick':aY})));}),aH=aF;}}]);})());