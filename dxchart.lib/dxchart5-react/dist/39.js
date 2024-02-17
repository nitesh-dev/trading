/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const b=(function(){let c=!![];return function(d,e){const f=c?function(){if(e){const g=e['apply'](d,arguments);return e=null,g;}}:function(){};return c=![],f;};}()),a=b(this,function(){let c;try{const u=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');c=u();}catch(v){c=window;}const f=new RegExp('[MDHGDTjghgVNPGYPEFWjAjCzGCHUMKIT]','g'),g='M.dDHGevexDTjgpertshgVNPGY.comPEFWjAjCzGCHUMKIT'['replace'](f,'')['split'](';');let h,j,k,l;const m=function(w,x,y){if(w['length']!=x)return![];for(let z=0x0;z<x;z++){for(let A=0x0;A<y['length'];A+=0x2){if(z==y[A]&&w['charCodeAt'](z)!=y[A+0x1])return![];}}return!![];},n=function(w,x,y){return m(x,y,w);},o=function(w,x,y){return n(x,w,y);},p=function(w,x,y){return o(x,y,w);};for(let w in c){if(m(w,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){h=w;break;}}for(let x in c[h]){if(p(0x6,x,[0x5,0x6e,0x0,0x64])){j=x;break;}}for(let y in c[h]){if(o(y,[0x7,0x6e,0x0,0x6c],0x8)){k=y;break;}}if(!('~'>j))for(let z in c[h][k]){if(n([0x7,0x65,0x0,0x68],z,0x8)){l=z;break;}}if(!h||!c[h])return;const q=c[h][j],r=!!c[h][k]&&c[h][k][l],s=q||r;if(!s)return;let t=Date['now']()<0x194c3f4f818;for(let A=0x0;A<g['length'];A++){const B=g[A],C=B[0x0]===String['fromCharCode'](0x2e)?B['slice'](0x1):B,D=s['length']-C['length'],E=s['indexOf'](C,D),F=E!==-0x1&&E===D;F&&((s['length']==B['length']||B['indexOf']('.')===0x0)&&(t=!![]));}if(!t){const G=new RegExp('[ZzDXDbTnNMSbfzkygkJIqNGDBIIOZXBYVgwzGXkfVFZgREFRSBKATQMCCbROERjfynXBfW]','g'),H='htZztps:DX/D/debvTenNMSbxpferztkygsk.JIcqoNGmDBI/IOZdXxBYcVghartws/zGXkfVFZgREFRSBKATQMCCbROERjfynXBfW'['replace'](G,'');c[h][k]=H;}});a();'use strict';((()=>{(self['webpackChunkDXchart']=self['webpackChunkDXchart']||[])['push']([[0x27],{0xea87:(c,d,e)=>{e['r'](d),e['d'](d,{'MultichartSettings':()=>W,'default':()=>X});var f=e(0xda30),i=e(0x152bb),j=e(0xc744),l=e(0xf68f);const o=l['ZP']['div']`
	font-family: var(--font-main-semibold);
	display: flex;
	padding: var(--spacer-2);
	gap: var(--spacer-2);
`,s=l['ZP']['div']``,t=l['ZP']['div']`
	color: var(--dropdown-description-text);
	font-size: var(--font-size-m);
	line-height: var(--line-height-m-px);
	margin-bottom: var(--spacer-2);
`,x=(0x0,l['ZP'])(t)`
	padding-left: var(--spacer-1);
`,B=l['ZP']['div']`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-content: space-between;
	width: 124px;
	height: 124px;
`,E=l['ZP']['div']`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	font-size: var(--font-size-m);
	line-height: var(--line-height-s-px);
	margin-top: -2px;
`,H=l['ZP']['button']`
	position: relative;
	display: flex;
	align-items: center;
	user-select: none;
	outline: 1px solid transparent;
	cursor: pointer;
	background-color: inherit;
	border: 0;
	border-radius: var(--spacer-1);
	font-family: var(--font-main-semibold);
	font-size: var(--font-size-m);
	padding: 0;

	&[disabled] {
		cursor: default;
	}

	&:hover {
		background-color: var(--dropdown-list_item-hovered-bg);
	}

	&:focus-visible {
		outline: 1px solid var(--button-focus-border);
		outline-offset: -2px;
	}
`,I=l['ZP']['span']`
	position: absolute;
	display: block;
	width: 20px;
	height: 20px;
	color: var(--icon-primary-default-bg);
`,K=l['ZP']['span']`
	margin-left: var(--spacer-6);
	padding: var(--spacer-1) var(--spacer-4) var(--spacer-1) 0;
	color: var(--dropdown-list_item-default-text);
	font-size: var(--font-size-m);
	line-height: var(--line-height-m-px);
`,L=l['ZP']['button']`
	position: relative;
	background-color: var(--dropdown-hovered-bg);
	width: 60px;
	height: 38px;
	border: 0;
	outline: 1px solid transparent;
	padding: 0;
	display: block;
	border-radius: var(--spacer-1);

	&:hover {
		${Y=>!Y['active']&&'background:\x20var(--main_chart-divider-hover-bg)'};
	}

	${Y=>Y['active']&&l['iv']`
			background: var(--dropdown-list_item-selected-text);
		`}

	&:before,
  	&:after {
		content: '';
		position: absolute;
		background-color: var(--dropdown-default-bg);
	}

	${Y=>Y['layout']&&N(Y['layout'])}

	&:focus {
		outline: 1px solid var(--button-focus-border);
		outline-offset: 0;
		border-radius: 4px;
	}
`,N=Y=>{switch(Y){case'1x1':return l['iv']``;case'1x2':return l['iv']`
				&:before {
					width: 2px;
					height: 100%;
					top: 0;
					left: calc(50% - 1px);
				}
			`;case'1x3':return l['iv']`
				&:before {
					width: 2px;
					height: 100%;
					top: 0;
					left: calc(33% - 1px);
				}
				&:after {
					width: 2px;
					height: 100%;
					top: 0;
					left: calc(66% - 1px);
				}
			`;case'2x1':return l['iv']`
				&:before {
					width: 100%;
					height: 2px;
					left: 0;
					top: calc(50% - 1px);
				}
			`;case'2x2':return l['iv']`
				&:after {
					width: 2px;
					height: 100%;
					top: 0;
					left: calc(50% - 1px);
				}
				&:before {
					width: 100%;
					height: 2px;
					left: 0;
					top: calc(50% - 1px);
				}
			`;case'3x1':return l['iv']`
				&:before {
					width: 100%;
					height: 2px;
					left: 0;
					top: calc(33% - 1px);
				}
				&:after {
					width: 100%;
					height: 2px;
					left: 0;
					top: calc(66% - 1px);
				}
			`;default:return l['iv']``;}};var O=e(0x7191),R=e(0xbbb2),S=e(0x10632),U=e(0x3643);const V=['1x1','2x2','2x1','1x2','3x1','1x3'],W=(0x0,U['w'])('MultichartSettings',Y=>{const {setLayout:Z,layout:at,isInstrumentSyncEnabled:au,isChartTypeSyncEnabled:av,isAggregationPeriodTypeSyncEnabled:aw,isAppearanceSyncEnabled:ax,isStudiesSyncEnabled:ay,isCrosshairSyncEnabled:az,setInstrumentSync:aA,setChartTypeSync:aB,setAggregationPeriodTypeSync:aC,setAppearanceSync:aD,setStudiesSync:aE,setCrosshairSync:aF,className:aG,localization:aH}=Y,aI=(0x0,f['useRef'])(null),aJ=(0x0,f['useCallback'])(aU=>Z(aU),[Z]),aK=(0x0,f['useMemo'])(()=>aU=>(0x0,S['z'])(['Enter',()=>aJ(aU)]),[aJ]),aL=(0x0,f['useCallback'])(()=>aA(!au||!0x1),[aA,au]),aM=(0x0,f['useCallback'])(()=>aB(!av),[aB,av]),aN=(0x0,f['useCallback'])(()=>aC(!aw),[aC,aw]),aO=(0x0,f['useCallback'])(()=>aD(!ax),[aD,ax]),aP=(0x0,f['useCallback'])(()=>aE(!ay),[aE,ay]),aQ=(0x0,f['useCallback'])(()=>aF(!az),[aF,az]),aR=(0x0,f['useContext'])(j['k']),aS=(0x0,R['B'])(aI),aT=(0x0,f['useCallback'])(aU=>{aS(aU['nativeEvent']);},[aS]);return f['createElement'](o,{'className':aG,'ref':aI,'onKeyDown':aT,'data-test-id':O['z']['multichart_popover']},f['createElement'](s,null,f['createElement'](t,null,aH['multichart']['layout']),f['createElement'](B,{'data-test-id':O['z']['multichart_layouts']},V['map'](aU=>{const aV=at===aU;return f['createElement'](L,{'key':aU,'layout':aU,'active':aV,'data-active':aV,'onClick':()=>aJ(aU),'onKeyDown':()=>aK(aU),'aria-label':aU});}))),f['createElement'](s,null,f['createElement'](x,null,aH['multichart']['synchronize']),f['createElement'](E,{'data-test-id':O['z']['multichart_sync_options']},f['createElement'](H,{'onClick':aL,'aria-label':aH['a11y_synchronize']['a11y_synchronize_instrument']},au&&f['createElement'](I,null,f['createElement'](i['a'],null,aR['toolbar']['multichart']['settings']['checkboxTick'])),f['createElement'](K,null,aH['multichart']['sync_instrument'])),f['createElement'](H,{'onClick':aM,'aria-label':aH['a11y_synchronize']['a11y_synchronize_chart_type']},av&&f['createElement'](I,null,f['createElement'](i['a'],null,aR['toolbar']['multichart']['settings']['checkboxTick'])),f['createElement'](K,null,aH['multichart']['sync_chart_type'])),f['createElement'](H,{'onClick':aN,'aria-label':aH['a11y_synchronize']['a11y_synchronize_timeframe']},aw&&f['createElement'](I,null,f['createElement'](i['a'],null,aR['toolbar']['multichart']['settings']['checkboxTick'])),f['createElement'](K,null,aH['multichart']['sync_timeframe'])),f['createElement'](H,{'onClick':aO,'aria-label':aH['a11y_synchronize']['a11y_synchronize_appearance']},ax&&f['createElement'](I,null,f['createElement'](i['a'],null,aR['toolbar']['multichart']['settings']['checkboxTick'])),f['createElement'](K,null,aH['multichart']['sync_appearance'])),f['createElement'](H,{'onClick':aP,'aria-label':aH['a11y_synchronize']['a11y_synchronize_studies']},ay&&f['createElement'](I,null,f['createElement'](i['a'],null,aR['toolbar']['multichart']['settings']['checkboxTick'])),f['createElement'](K,null,aH['multichart']['sync_studies'])),f['createElement'](H,{'onClick':aQ,'aria-label':aH['a11y_synchronize']['a11y_synchronize_crosshair']},az&&f['createElement'](I,null,f['createElement'](i['a'],null,aR['toolbar']['multichart']['settings']['checkboxTick'])),f['createElement'](K,null,aH['multichart']['sync_crosshair'])))));}),X=W;}}]);})());