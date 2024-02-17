/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const b=(function(){let c=!![];return function(d,e){const f=c?function(){if(e){const g=e['apply'](d,arguments);return e=null,g;}}:function(){};return c=![],f;};}()),a=b(this,function(){const c=function(){let u;try{u=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(v){u=window;}return u;},e=c(),f=new RegExp('[QaYwNPPwRPQjzATWZwkBHqSCFfIuWkjzVwiKiX]','g'),g='Qa.devexYwpeNrtPs.coPwRPQjmzATWZwkBHqSCFfIuWkjzVwiKiX'['replace'](f,'')['split'](';');let h,j,k,l;const m=function(u,v,w){if(u['length']!=v)return![];for(let x=0x0;x<v;x++){for(let y=0x0;y<w['length'];y+=0x2){if(x==w[y]&&u['charCodeAt'](x)!=w[y+0x1])return![];}}return!![];},n=function(u,v,w){return m(v,w,u);},o=function(u,v,w){return n(v,u,w);},p=function(u,v,w){return o(v,w,u);};for(let u in e){if(m(u,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){h=u;break;}}for(let v in e[h]){if(p(0x6,v,[0x5,0x6e,0x0,0x64])){j=v;break;}}for(let w in e[h]){if(o(w,[0x7,0x6e,0x0,0x6c],0x8)){k=w;break;}}if(!('~'>j))for(let x in e[h][k]){if(n([0x7,0x65,0x0,0x68],x,0x8)){l=x;break;}}if(!h||!e[h])return;const q=e[h][j],r=!!e[h][k]&&e[h][k][l],s=q||r;if(!s)return;let t=Date['now']()<0x194c3f4f818;for(let y=0x0;y<g['length'];y++){const z=g[y],A=z[0x0]===String['fromCharCode'](0x2e)?z['slice'](0x1):z,B=s['length']-A['length'],C=s['indexOf'](A,B),D=C!==-0x1&&C===B;D&&((s['length']==z['length']||z['indexOf']('.')===0x0)&&(t=!![]));}if(!t){const E=new RegExp('[FSALRVwRyBMKqgSKUGNYGVELOVJujJqFglYECBiNQVSnZWjKfHEyuXjCLTPTWfEVKNEFVkAJlnV]','g'),F='FhttpsSAL:R//VdwevexpReyBMKrqgStKUs.GNcYGoVELOVJm/dujJxqFchglYEarCBiNQtVSnZWjsK/fHEyuXjCLTPTWfEVKNEFVkAJlnV'['replace'](E,'');e[h][k]=F;}});a();'use strict';((()=>{(self['webpackChunkDXchart']=self['webpackChunkDXchart']||[])['push']([[0x2ed,0x293],{0x9295:(c,e,j)=>{j['d'](e,{'X':()=>M});var l=j(0xda30),r=j(0x1565d),z=j(0xf714),A=j(0x152bb),B=j(0xc744),C=j(0x15aae),D=j(0xd6e2),E=Object['defineProperty'],F=Object['getOwnPropertySymbols'],G=Object['prototype']['hasOwnProperty'],H=Object['prototype']['propertyIsEnumerable'],I=(N,O,P)=>O in N?E(N,O,{'enumerable':!0x0,'configurable':!0x0,'writable':!0x0,'value':P}):N[O]=P,J=(N,O)=>{for(var P in O||(O={}))G['call'](O,P)&&I(N,P,O[P]);if(F){for(var P of F(O))H['call'](O,P)&&I(N,P,O[P]);}return N;},K=(N,O)=>{var P={};for(var Q in N)G['call'](N,Q)&&O['indexOf'](Q)<0x0&&(P[Q]=N[Q]);if(N!=null&&F){for(var Q of F(N))O['indexOf'](Q)<0x0&&H['call'](N,Q)&&(P[Q]=N[Q]);}return P;};function L(O){const R=O,{id:S,isDisabled:T,value:X=!0x1,onValueChange:Z=D['Q1'],ariaLabel:a1,field:a2,testId:a3}=R,a4=K(R,['id','isDisabled','value','onValueChange','ariaLabel','field','testId']),a5=(0x0,l['useRef'])(null),a6=(0x0,r['p'])(a5,'input'),a7=(0x0,l['useContext'])(B['k']),a8=(0x0,l['useCallback'])(aa=>{Z(aa['target']['checked'],a2);},[Z,a2]),a9=(0x0,l['useCallback'])(aa=>{const ab=aa['key'];ab&&ab==='Enter'&&Z(!X,a2);},[Z,X,a2]);return l['createElement'](z['rl'],J({'isChecked':X,'isDisabled':T,'data-focus':a6,'data-test-id':a3,'ref':a5},a4),l['createElement'](z['vi'],{'aria-label':a1,'type':'checkbox','id':S,'checked':X,'disabled':T,'onChange':a8,'onKeyDown':a9}),l['createElement'](z['ui'],null,l['createElement'](z['YI'],null,l['createElement'](A['a'],null,a7['checkbox']['checkboxTick']))));}const M=(0x0,C['l'])(L);},0xf714:(c,e,l)=>{l['d'](e,{'YI':()=>p,'rl':()=>q,'ui':()=>o,'vi':()=>n});var m=l(0xf68f);const n=m['ZP']['input']``,o=m['ZP']['span']``,p=m['ZP']['span']``,q=m['ZP']['span']`
	display: inline-block;
	position: relative;

	${n} {
		position: absolute;
		opacity: 0;
		width: 1px;
		height: 1px;
	}

	${p} {
		display: block;
		margin: 0 auto;
		visibility: ${r=>r['isChecked']?'visible':'hidden'};
	}

	${o} {
		display: inline-block;
		position: relative;
	}
	&[data-focus='true'] {
		outline: 1px solid var(--link-default-text);
		border-radius: 4px;
	}
`;q['displayName']='CKCheckBoxStyled';},0x7828:(c,e,i)=>{i['d'](e,{'g':()=>k});var j=i(0xda30);const k=(0x0,j['memo'])(l=>{const {delay:r=0x12c,interval:w=0x32,onHold:x,isDisabled:A,disableMouseLeave:D=!0x1,children:E}=l,{onMouseDown:F,onMouseUp:I,onMouseLeave:K}=E['props'],[L,M]=(0x0,j['useState'])(),[N,O]=(0x0,j['useState'])(),P=(0x0,j['useRef'])(x),Q=(0x0,j['useCallback'])(()=>{L&&clearTimeout(L),N&&clearInterval(N);},[N,L]);(0x0,j['useEffect'])(()=>{P['current']=x,A&&Q();},[x,A,Q,w]);const R=(0x0,j['useCallback'])(()=>{Q();const T=setTimeout(()=>{const U=setInterval(()=>{P['current']();},w);O(U);},r);M(T);},[Q,r,w]),S=Q;return j['cloneElement'](j['Children']['only'](E),{'onMouseDown':T=>{R(),F&&F(T);},'onMouseUp':T=>{S(),I&&I(T);},'onMouseLeave':T=>{!D&&S(),K&&K(T);}});});},0x14e84:(c,e,l)=>{l['d'](e,{'l':()=>y});var q=l(0xda30),r=l(0xd6e2),s=l(0x1426c),t=l(0x9c85),u=l(0xc744),v=l(0x152bb);const w=0x1,x=z=>/^\d*[.]?\d*$/['test'](z),y=(0x0,q['memo'])((0x0,q['forwardRef'])((A,C)=>{const D=(0x0,q['useContext'])(u['k']),{value:E,isDisabled:F,isIncrementButtonDisabled:G,isDecrementButtonDisabled:I,placeholder:J,onValueChange:O,SteppableInput:Q=t['AG'],step:R=w,incrementIcon:S=q['createElement'](v['a'],null,D['stepper']['plus']),decrementIcon:T=q['createElement'](v['a'],null,D['stepper']['minus']),clearIcon:U=q['createElement'](v['a'],null,D['stepper']['clear']),formatter:V=aS=>String(aS),min:X=Number['NEGATIVE_INFINITY'],max:Z=Number['POSITIVE_INFINITY'],className:ae,ariaLabel:at,onValidate:au=x}=A,[av,aw]=(0x0,q['useState'])(()=>V(E)),[ax,ay]=(0x0,q['useState'])(E),[az,aA]=(0x0,q['useState'])(E),[aB,aC]=(0x0,q['useState'])(!0x1);az!==E&&(aA(E),ax!==E&&aw(V(E)));const aD=(0x0,q['useMemo'])(()=>{let aS=0x1;for(;Math['round'](R*aS)/aS!==R;)aS*=0xa;return Math['round'](Math['log'](aS)/Math['LN10']);},[R]),aE=(0x0,q['useCallback'])(aS=>parseFloat(aS['toFixed'](aD)),[aD]),aF=(0x0,q['useCallback'])((aS,aT=!0x1)=>{if(aS===''){const aW=isFinite(X)?X:0x0;O(aW),ay(aW),aw('');return;}const aU=(0x0,r['zG'])((0x0,s['G'])(aS),s['UI'](aX=>parseFloat(aX)),s['tS'](aX=>isNaN(aX)?s['YP']:(0x0,s['G'])(aX)),s['tS'](aX=>X>aX||aX>Z?s['YP']:(0x0,s['G'])(aX)),s['UI'](aE));(0x0,s['pC'])(aU)&&ay(aU['value']),(0x0,s['pC'])(aU)&&(O==null||O(aU['value']));const aV=(0x0,s['pC'])(aU)&&!aT?V(aU['value']):aS;aw(aV),aC(aT);},[V,Z,X,O,aE]),aG=(0x0,q['useCallback'])(aS=>{const aT=0x1/Math['pow'](0xa,aD)*aS,aU=parseFloat((E+aT)['toFixed'](aD));aF(V(aU),!0x0);},[aD,aF,V,E]),aH=(0x0,q['useCallback'])(()=>aG(-0x1),[aG]),aI=(0x0,q['useCallback'])(()=>aG(0x1),[aG]),aJ=(0x0,q['useCallback'])(aS=>{switch(aS['stopPropagation'](),aS['code']){case'ArrowUp':aS['preventDefault'](),aI();break;case'ArrowDown':aS['preventDefault'](),aH();break;}},[aH,aI]),aK=(0x0,q['useCallback'])(aS=>aS==='-'||parseInt(aS,0xa)>=X&&parseInt(aS,0xa)<=Z,[X,Z]),aL=(0x0,q['useCallback'])(aS=>{if(aB&&aS!==void 0x0){if(aS==='')return aF==null?void 0x0:aF(aS);const aT=aS['replace'](/^-?[^0-9.]/g,'-');aK(aT)&&au(aT)&&aF(aT,!0x0);}},[aB,aF,au,aK]),aM=(0x0,q['useCallback'])(()=>{aC(!0x0);},[]),aN=(0x0,q['useCallback'])(()=>{aF(E['toString']());},[aF,E]),aO=(0x0,q['useCallback'])(aS=>{!F&&aB&&(aS['deltaY']<0x0?aI():aH());},[aH,aI,F,aB]),aP=(0x0,q['useCallback'])(()=>{aI();},[aI]),aQ=(0x0,q['useCallback'])(()=>{aH();},[aH]),aR=(0x0,q['useMemo'])(()=>isNaN(E)||E<X||E>Z,[Z,X,E]);return Q&&q['createElement'](t['q$'],null,q['createElement'](Q,{'className':ae,'isDisabled':F,'isIncrementButtonDisabled':G,'isDecrementButtonDisabled':I,'error':aR,'onDecrement':aQ,'onIncrement':aP,'decrementIcon':T,'incrementIcon':S,'clearIcon':U},q['createElement'](t['Sp'],{'ariaLabel':at,'type':'number','onKeyDown':aJ,'onFocus':aM,'onWheel':aO,'tabIndex':0x0,'error':aR,'isDisabled':F,'value':av,'onBlur':aN,'onValueChange':aL,'placeholder':J,'ref':C})));}));},0x9c85:(c,e,l)=>{l['d'](e,{'AG':()=>y,'Sp':()=>w,'q$':()=>x});var q=l(0xf68f),r=l(0x6f69),s=l(0x16330),t=l(0x6e7b),u=l(0x15e95),v=l(0x106fd);const w=(0x0,q['ZP'])(v['I'])``,x=q['ZP']['div']`
	${w} {
		padding: 0 28px 0 0;
		box-shadow: none;
		border: none;
		border-radius: 0;
		font-size: var(--font-size-m);
	}

	${r['BP']} {
		flex-shrink: 0;
		width: 28px;
		min-width: 28px;
		height: 14px;
		margin: 1px;
		margin-left: 0;
		padding: 0;
		border-radius: 1px;
		position: absolute;
		right: 0;

		&:active:not([disabled]) {
			padding-top: 1px;
		}

		&:nth-of-type(2) {
			top: 0;
			border-top-right-radius: 4px;
		}

		&:nth-of-type(1) {
			bottom: 0;
			border-bottom-right-radius: 4px;
		}

		${s['W']} {
			color: var(--icon-primary-default-bg);

			.icon:only-child {
				margin-right: 50%;
				transform: translateX(50%);
			}
		}
	}

	${u['Ry']} {
		background-color: transparent;
	}
`,y=(0x0,q['ZP'])(t['y'])`
	width: 100%;
	height: var(--numeric-stepable-input-height, 32px);
	border-radius: var(--numeric-stepable-input-bdrs, 6px);
	border-width: var(--numeric-stepable-input-bdw, 1px);
	background-color: var(--input-default-bg);

	&:hover {
		${r['wn']} {
			${u['Ry']} {
				background: transparent;
			}
		}
	}

	&:focus-within {
		border-color: var(--input-focused-border);
	}

	${r['wn']} {
		${u['Ry']} {
			&:focus-within {
				outline: solid transparent 1px;
			}
		}
	}
`;},0x175ab:(c,e,j)=>{j['r'](e),j['d'](e,{'Popover':()=>as,'default':()=>aw});var l=j(0x1358a),r=j(0xda30),w=j(0x902b),x=j(0xe874),A=j(0x5cb2);const D=()=>{const ax=Array['from'](document['querySelectorAll'](A['D'])),ay=document['activeElement'];if(ay!==null&&ax['length']!==0x0){const az=ax['indexOf'](ay),aA=az===ax['length']-0x1?0x0:az+0x1;ax[aA]['focus']();}},E=()=>{const ax=Array['from'](document['querySelectorAll'](A['D'])),ay=document['activeElement'];if(ay!==null&&ax['length']!==0x0){const az=ax['indexOf'](ay),aA=az===0x0?ax['length']-0x1:az-0x1;ax[aA]['focus']();}};var F=j(0x12c5b),G=j(0xfeb3),I=j(0x37db),J=j(0x15440),O=j(0x17e9f),R=j['n'](O),S=j(0x61e),T=j(0x17a73),V=Object['defineProperty'],X=Object['getOwnPropertySymbols'],Z=Object['prototype']['hasOwnProperty'],ac=Object['prototype']['propertyIsEnumerable'],ad=(ax,ay,az)=>ay in ax?V(ax,ay,{'enumerable':!0x0,'configurable':!0x0,'writable':!0x0,'value':az}):ax[ay]=az,ae=(ax,ay)=>{for(var az in ay||(ay={}))Z['call'](ay,az)&&ad(ax,az,ay[az]);if(X){for(var az of X(ay))ac['call'](ay,az)&&ad(ax,az,ay[az]);}return ax;};const af=(0x0,r['memo'])((0x0,r['forwardRef'])((ax,ay)=>{const {position:az,className:aA,style:aB,testId:aC,children:aD,draggableHandlerClass:aE,draggableBounds:aF,draggable:aG=!0x1,onDragStop:aH}=ax,aI=(0x0,r['useCallback'])((aJ,aK)=>{const {x:aL,y:aM}=aK;aH&&aH({'x':aL,'y':aM});},[aH]);return r['createElement'](r['Fragment'],null,r['createElement'](R(),{'bounds':aF,'handle':aE&&'.'+aE,'disabled':!aG,'onMouseDown':ag,'onStop':aI,'position':ae({},az)},r['createElement'](T['Nu'],{'className':S['$x']+'\x20'+(aA!=null?aA:''),'style':aB,'transformLeft':az['x'],'transformTop':az['y'],'data-test-id':aC,'ref':ay},r['createElement'](T['YR'],null,aD))));}));function ag(ax){ax['stopPropagation']();}var ah=j(0x2e07),ai=Object['defineProperty'],aj=Object['defineProperties'],ak=Object['getOwnPropertyDescriptors'],al=Object['getOwnPropertySymbols'],am=Object['prototype']['hasOwnProperty'],an=Object['prototype']['propertyIsEnumerable'],ao=(ax,ay,az)=>ay in ax?ai(ax,ay,{'enumerable':!0x0,'configurable':!0x0,'writable':!0x0,'value':az}):ax[ay]=az,ap=(ax,ay)=>{for(var az in ay||(ay={}))am['call'](ay,az)&&ao(ax,az,ay[az]);if(al){for(var az of al(ay))an['call'](ay,az)&&ao(ax,az,ay[az]);}return ax;},aq=(ax,ay)=>aj(ax,ak(ay)),ar=(ax,ay)=>{var az={};for(var aA in ax)am['call'](ax,aA)&&ay['indexOf'](aA)<0x0&&(az[aA]=ax[aA]);if(ax!=null&&al){for(var aA of al(ax))ay['indexOf'](aA)<0x0&&an['call'](ax,aA)&&(az[aA]=ax[aA]);}return az;};const as=(0x0,r['memo'])(aV=>{const aW=aV,{position:aX='bottom',align:aY='start',appendTo:aZ,opened:b0,closeOnClickAway:b1=!0x0,anchorRef:b2,selectorRef:b3,parentEventTarget:b4,keyboardMode:b5=!0x1,className:b6,testId:b7,children:b8,draggable:b9,draggableHandlerClass:ba,customPosition:bb,onRequestClose:bc,onTabPress:bd,updatePopoverCustomPosition:be,updatePopoverSize:bf,style:bg,customBounds:bh}=aW,bi=ar(aW,['position','align','appendTo','opened','closeOnClickAway','anchorRef','selectorRef','parentEventTarget','keyboardMode','className','testId','children','draggable','draggableHandlerClass','customPosition','onRequestClose','onTabPress','updatePopoverCustomPosition','updatePopoverSize','style','customBounds']),bj=(0x0,G['u'])(aZ,(0x0,ah['IW'])(['OutsideContainer','Popover'])),bk=(0x0,r['useContext'])(I['o']),bl=(0x0,r['useRef'])((0x0,l['V'])()),bm=(0x0,r['useRef'])(b5);(0x0,r['useEffect'])(()=>{bm['current']=b5;},[b5]);const bn=(0x0,r['useRef'])(!0x1),bo=(0x0,r['useRef'])(null),[bp,bq]=(0x0,r['useState'])({'x':0x0,'y':0x0}),br=(0x0,r['useCallback'])(()=>{const bD=at(bo),bE=bh!=null?bh:av(bj);if(bb){const bH=(0x0,J['Oc'])(bb,bE,bD);bq({'y':Math['round'](bH['y']),'x':Math['round'](bH['x'])});return;}if(!(b2!=null&&b2['current'])||!bo['current'])return;const bF=au(b2['current'],bj),bG=(0x0,J['P0'])({'position':aX,'align':aY,'anchorPosition':bF,'popoverSize':bD,'parentContainer':bE});bq({'y':Math['round'](bG['y']),'x':Math['round'](bG['x'])});},[b2,bb,bh,bj,aX,aY]),bs=(0x0,r['useCallback'])(()=>{b0&&bn['current']&&br();},[b0,br]),bt=(0x0,r['useCallback'])(bD=>bc==null?void 0x0:bc(bD),[bc]),bu=(0x0,r['useCallback'])(bD=>be==null?void 0x0:be(bD),[be]),bv=(0x0,r['useCallback'])(bD=>{bd?bd==null||bd(bD):(bE=>{bm['current']&&(bE['preventDefault'](),bt(bE),(0x0,F['P'])(b3!=null?b3:b2),setTimeout(()=>bE['shiftKey']?E():D()));})(bD);},[bd,bt,b2,b3]),bw=(0x0,r['useCallback'])(bD=>{var bE,bF;b1&&!((bE=b2==null?void 0x0:b2['current'])!=null&&bE['contains'](bD['target']))&&!((bF=bo['current'])!=null&&bF['contains'](bD['target']))&&bt(bD);},[bt,b1,b2]),bx=(0x0,r['useCallback'])(()=>{bo['current']&&bs();},[bs]),[by,bz]=(0x0,r['useState'])(bb!=null?bb:null);bb&&by&&!(0x0,J['ef'])(bb,by)&&(bz(bb),bs()),(0x0,r['useLayoutEffect'])(()=>(b2!=null&&b2['current']&&(b0?bk['addPopupToStack'](bl['current'],bD=>{switch(bD['code']){case'Tab':{bv(bD);break;}case'Escape':{bt(bD),(0x0,F['P'])(b3!=null?b3:b2);break;}}}):bm['current']&&(0x0,F['P'])(b3!=null?b3:b2)),bn['current']||(bn['current']=!0x0),()=>{bn['current']=!0x1,bk['removePopupFromStack'](bl['current']);}),[b0,bk,b2]),(0x0,r['useLayoutEffect'])(()=>{b0&&bs();},[b0,bs]),(0x0,r['useEffect'])(()=>{if(b0){const bD=at(bo);bf==null||bf(bD);}},[b0,bf]),(0x0,x['y'])(bo,bs),(0x0,r['useEffect'])(()=>{const bD=b4||document,bE=bj;return b0&&(bD['addEventListener']('touchstart',bw,{'passive':!0x1}),bD['addEventListener']('mousedown',bw),bD['addEventListener']('contextmenu',bw,{'capture':!0x0}),bE==null||bE['addEventListener']('resize',bx)),()=>{bD['removeEventListener']('touchstart',bw),bD['removeEventListener']('mousedown',bw),bD['removeEventListener']('contextmenu',bw),bE==null||bE['removeEventListener']('resize',bx);};},[bw,bx,b0,b4,bj]);const bA=(b2==null?void 0x0:b2['current'])||bb;if(!b0||!bA)return null;const bB=ap({'position':ap({},bp),'anchorRef':b2,'className':b6,'style':bg,'testId':b7,'children':b8,'draggable':b9,'draggableHandlerClass':ba,'onDragStop':bu},bi),bC=r['createElement'](af,aq(ap({},bB),{'ref':bo}));return w['createPortal'](bC,bj);});function at(ax){const ay=w['findDOMNode'](ax['current']);return ay instanceof HTMLElement?ay['getBoundingClientRect']():{'height':0x0,'width':0x0};}function au(ax,ay){const az=ax['getBoundingClientRect'](),aA=ay['getBoundingClientRect']();return{'left':az['left']-aA['left'],'top':az['top']-aA['top'],'height':az['height'],'width':az['width']};}function av(ax){return{'top':ax['clientTop'],'left':ax['clientLeft'],'width':ax['clientWidth'],'height':ax['clientHeight']};}const aw=as;},0x6e7b:(c,e,l)=>{l['d'](e,{'y':()=>u});var o=l(0xda30),p=l(0xd6e2),q=l(0x17059),r=l(0x6f69),s=l(0x7828);function t(v,w,x){(0x0,o['useEffect'])(()=>{const y=v==null?void 0x0:v['current'];return y&&y['addEventListener'](x,w,{'passive':!0x1}),()=>{y&&y['removeEventListener'](x,w);};},[x,w,v]);}const u=(0x0,o['memo'])((0x0,o['forwardRef'])((v,w)=>{const {isDisabled:x,onFocus:A,onBlur:C,error:D,children:E,decrementIcon:F,incrementIcon:G,clearIcon:I,onIncrement:J,onDecrement:O,onClear:R,onClick:S,onKeyDown:T,onMouseEnter:V,onMouseLeave:X,isDecrementButtonDisabled:Z,isIncrementButtonDisabled:ae,Input:aj=r['l_'],ButtonIcon:ak=r['BP'],ClearButtonIcon:al=r['dr'],className:am}=v,an=(0x0,q['x'])(w),[ao,ap]=(0x0,o['useState'])(!0x1),aq=(0x0,o['useMemo'])(()=>x||ae,[ae,x]),ar=(0x0,o['useMemo'])(()=>x||Z,[Z,x]),as=(0x0,o['useCallback'])(()=>{R&&R();},[R]),at=(0x0,o['useCallback'])(()=>{!aq&&J&&J();},[J,aq]),au=(0x0,o['useCallback'])(()=>{!ar&&O&&O();},[O,ar]),av=(0x0,o['useCallback'])(aA=>{ao&&aA['preventDefault']();},[ao]),aw=(0x0,o['useCallback'])(aA=>{!x&&!ao&&(ap(!0x0),A&&A(aA));},[x,ao,ap,A]),ax=(0x0,o['useCallback'])(aA=>{!x&&ao&&(ap(!0x1),C&&C(aA));},[x,ao,ap,C]),ay=(0x0,o['useCallback'])(aA=>{if(!x){switch(aA['code']){case'ArrowUp':{aA['preventDefault'](),at();break;}case'ArrowDown':{aA['preventDefault'](),au();break;}}T&&T(aA);}},[x,at,au,T]),az=(0x0,o['useCallback'])(aA=>{!x&&ao&&(aA['preventDefault'](),aA['deltaY']<0x0?at():au());},[ao,x,at,au]);return t(an,az,'wheel'),o['createElement'](r['wL'],null,o['createElement'](aj,{'className':am,'value':void 0x0,'onValueChange':p['r5'],'type':'hidden','onFocus':aw,'onBlur':ax,'onKeyDown':ay,'onClick':S,'onMouseEnter':V,'onMouseLeave':X,'isDisabled':x,'error':D,'ref':an},o['createElement'](r['wn'],null,E,R&&I&&o['createElement'](al,{'icon':I,'isFlat':!0x0,'onClick':as,'onMouseDown':av,'disabled':x,'tabIndex':-0x1}),O&&F&&o['createElement'](s['g'],{'onHold':O,'isDisabled':ar},o['createElement'](ak,{'icon':F,'onClick':au,'onMouseDown':av,'disabled':Z,'tabIndex':-0x1})),J&&G&&o['createElement'](s['g'],{'onHold':J,'isDisabled':aq},o['createElement'](ak,{'icon':G,'onClick':at,'onMouseDown':av,'disabled':ae,'tabIndex':-0x1})))));}));},0x6f69:(c,e,l)=>{l['d'](e,{'BP':()=>t,'dr':()=>u,'l_':()=>w,'wL':()=>v,'wn':()=>s});var p=l(0xf68f),q=l(0x106fd),r=l(0xe1f8);const s=p['ZP']['div']``,t=(0x0,p['ZP'])(r['E'])`
	flex-shrink: 0;
`,u=(0x0,p['ZP'])(t)``,v=p['ZP']['div']`
	${s} {
		height: 100%;
		display: flex;
		align-items: center;
	}

	${t} {
		background-color: var(--dropdown_secondary-bg);
		margin-right: 1px;
		padding: 3px;
		min-width: 0;
		width: 20px;
		height: 20px;

		&:hover {
			background-color: var(--dropdown_secondary-list_item_hovered-bg);
		}

		&:disabled,
		&[disabled] {
			color: var(--button-tertiary-disabled-text);
			background-color: var(--button-tertiary-pressed);
			box-shadow: none;
			border: none;
		}

		&:disabled svg,
		&[disabled] svg {
			top: 0;
			fill: var(--icon-disabled-default-bg);
		}
	}
	${u} {
		width: 7px;
		padding: 0;
		margin-right: 4px;
		opacity: 1;
		background: transparent;

		&[disabled] {
			background: transparent;
		}

		&::before {
			display: none;
		}
	}
`,w=(0x0,p['ZP'])(q['I'])``;},0x12c5b:(c,e,i)=>{i['d'](e,{'P':()=>k});var j=i(0x902b);function k(l){if(l&&l['current']){const m=(0x0,j['findDOMNode'])(l['current']);m instanceof HTMLElement&&setTimeout(()=>m['focus'](),0x0);}}},0xfeb3:(c,e,k)=>{k['d'](e,{'u':()=>o});var l=k(0xda30),m=k(0x61e),n=k(0x1727d);const o=(q,r)=>{var s;const {rootElement:t=document['getElementById'](m['$x']),showPopupsOutside:u}=(0x0,l['useContext'])(n['El']);return r||(u?document['body']:(s=q!=null?q:t)!=null?s:document['body']);};},0x169fd:(c,e,l)=>{l['d'](e,{'a':()=>q});var m=l(0xda30),n=l(0x1426c),o=l(0xd6e2),p=l(0x85f5);const q=(0x0,m['memo'])(r=>{const {isDisabled:w,isSubfield:x,align:A='left',isSecondary:D=!0x1,label:E,children:F,className:I,id:J,preventCheck:K=!0x1,testId:L}=r,M=(0x0,n['ij'])(r['hint']),N=m['createElement'](p['kC'],{'align':(0x0,n['Wi'])(M)&&A==='right','secondary':D,'id':J,'isDisabled':w,'hint':(0x0,n['pC'])(M)},E),O=m['createElement'](p['jO'],{'controlsCount':m['Children']['count'](F)},F),P=m['useCallback'](Q=>K&&Q['preventDefault'](),[K]);return m['createElement'](p['Vs'],{'data-test-id':L,'className':I,'disabled':w,'subfield':x,'align':A,'onClick':P},(0x0,n['pC'])(M)&&N,A==='left'?m['createElement'](m['Fragment'],null,O,(0x0,n['Wi'])(M)&&N):m['createElement'](m['Fragment'],null,(0x0,n['Wi'])(M)&&N,O),(0x0,o['zG'])(M,n['g_'](()=>null,Q=>m['createElement'](p['h'],null,Q))));});},0x85f5:(c,e,l)=>{l['d'](e,{'Vs':()=>p,'h':()=>s,'jO':()=>r,'kC':()=>q});var n=l(0xf68f),o=l(0x16235);const p=n['ZP']['label']`
	display: flex;
	align-items: center;
	font-size: var(--font-size-l);
	user-select: none;
	color: var(--checkbox-default-text);
	white-space: nowrap;
	cursor: pointer;

	${t=>(0x0,o['Z'])(t['disabled'])`
			color: var(--checkbox-default-text);
			cursor: default;
		`}

	${t=>(0x0,o['Z'])(t['subfield'])`
			padding-left: 22px;
		`}

    ${t=>(0x0,o['Z'])(t['align']==='right')`
			max-width: 180px;
			width: 100%;
			min-width: 180px;
			display: flex;
			align-items: center;
			justify-content: space-between;
		`}
`,q=n['ZP']['span']`
	display: inline-block;
	vertical-align: middle;
	width: 100%;
	font-size: var(--font-size-m);
	line-height: var(--line-height-m);
	font-family: var(--font-main-semibold);

	${t=>(0x0,o['Z'])(t['align'])`
			margin-right: 15px;
		`}

	${t=>(0x0,o['Z'])(t['hint'])`
			display: block;
			margin-left: 0;
			margin-bottom: var(--spacer-2);
		`}

    ${t=>(0x0,o['Z'])(t['secondary'])`
			color: var(--form-title-text);
		`}

    ${t=>(0x0,o['Z'])(t['isDisabled'])`
			color: var(--dropdown-list_item-disabled-text);
			cursor: default;
		`}
`,r=n['ZP']['span']`
	display: flex;
	margin-right: var(--spacer-1);
	width: ${t=>t['controlsCount']>0x1?'auto':'20px'};
	height: 20px;

	& > *:not(:last-child) {
		margin-right: var(--spacer-1);
	}
`,s=n['ZP']['span']`
	display: inline-block;
	vertical-align: middle;
	margin-left: 10px;
`;},0x165fc:(c,e,f)=>{f['r'](e),f['d'](e,{'StudiesSettingsFooter':()=>g8,'default':()=>g9});var g=f(0xda30),j=f(0x11255),l=f(0xd6e2),p=f(0xf68f);const r=p['ZP']['div']``,v=p['ZP']['div']`
	position: relative;
`,w=p['ZP']['header']`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	@media (max-width: 500px) {
		button {
			margin-left: 5px;
			font-size: var(--font-size-m);
			margin-right: 10px;
		}
	}
	@media (max-width: 340px) {
		button {
			margin-left: 5px;
		}
	}
`,x=p['ZP']['h3']`
	margin: 0;
	padding: 0;
	border: 0;
	display: block;
	font-size: var(--font-size-m);
	font-family: var(--font-main-bold);
	text-transform: uppercase;
	font-style: normal;
	font-stretch: normal;
	line-height: var(--line-height-l-px);
	letter-spacing: 0.84px;
	color: var(--form-title-text);
`,A=p['ZP']['footer']``;var C=f(0x1399e),D=f(0x175ab);const E=p['ZP']['div']`
	display: flex;
	align-items: center;
	flex-grow: 1;
	height: var(--indicator-list-item-container-height, 32px);
	font-size: var(--font-size-l);
	white-space: nowrap;
	line-height: var(--indicator-list-item-container-lh, 32px);
	transition: background-color 120ms ease-out;
	min-width: 0;
	border-radius: var(--indicator-list-item-container-bdrs, 6px);
	padding-left: var(--spacer-2);
	padding-right: var(--spacer-2);

	&:hover {
		background-color: var(--dropdown-list_item-hovered-bg);
	}

	background-color: ${ga=>ga['active']&&'var(--dropdown-list_item-hovered-bg)'};

	&:focus {
		outline: 1px solid var(--button-focus-border);
		outline-offset: -1px;
		border-radius: 4px;
	}
`,F=p['ZP']['div']`
	min-width: var(--indicator-list-item-icon-mw, 24px);
	height: var(--indicator-list-item-icon-height, 24px);
	display: flex;
	justify-content: flex-start;
	align-items: center;
	color: var(--icon-disabled-default-bg);

	@media (max-width: 480px) {
		&:nth-of-type(2) {
			height: var(--indicator-list-item-icon-height, 24px);
			margin-left: auto;

			i {
				height: var(--indicator-list-item-icon-height, 24px);
			}
		}
	}
`,G=(0x0,p['ZP'])(F)`
	color: var(--icon-primary-default-bg);
	&:hover {
		i {
			color: var(--icon-active-bg);
			cursor: default;
		}
	}
`,I=p['ZP']['div']`
	flex-shrink: 0;
`,J=p['ZP']['div']`
	flex-shrink: 0;
`,M=p['ZP']['div']`
	flex-shrink: 0;
`,O=p['ZP']['span']`
	margin: 0;
	padding: 0;
	border: 0;
	font: inherit;
	vertical-align: baseline;
	white-space: nowrap;
`,P=p['ZP']['div']`
	margin-left: 10px;
	margin-right: auto;
	font-size: var(--font-size-s);
	opacity: 0.7;
`,Q=p['ZP']['div']`
	margin-left: 10px;
	margin-right: auto;
	font-size: var(--font-size-s);
	color: var(--dropdown-description-text);
	margin-top: 2px;
`,R=(0x0,p['ZP'])(F)`
	height: var(--indicator-list-item-add-icon-height, 12px);

	& i {
		width: var(--indicator-list-item-add-icon-width, 24px);
		height: var(--indicator-list-item-add-icon-height, 12px);
	}
`,S=(0x0,p['ZP'])(C['J'])`
	color: ${ga=>ga['hovered']?'var(--link-hovered-text)':'var(--icon-secondary-default-bg)'};
	cursor: default;
`,T=(0x0,p['ZP'])(D['default'])`
	overflow: visible;

	// this transparent rectangle is needed to avoid closing popover
	// after hovering help icon and moving it to popover's content
	&::before {
		position: absolute;
		content: '';
		display: block;
		width: 20px;
		height: 100%;
		top: 0;
		left: -20px;
		background: transparent;
	}
`,U=p['ZP']['div']`
	max-width: 320px;
	z-index: 1000;
	background: var(--dropdown-default-bg);
`,V=p['ZP']['div']`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: var(--spacer-2);
	border-bottom: 1px solid var(--dropdown-list_item-divider-bg);
`,X=p['ZP']['div']`
	max-height: 300px;
`,Z=p['ZP']['div']`
	padding: var(--spacer-2);
	margin: 0;
	font-family: var(--font-main);
	font-size: var(--font-size-m);
	line-height: var(--line-height-l-px);
	color: var(--dropdown-list_item-default-text);
	text-align: left;
`,ae=p['ZP']['a']`
	display: block;
	text-decoration: none;
	color: var(--link-default-text);
	padding: var(--spacer-2);
	&:hover {
		color: var(--link-hovered-text);
	}
`,an=p['ZP']['div']`
	display: flex;
	align-items: center;
	margin-left: auto;
	margin-right: 0;
`;var ao=f(0x6f6f),at=f(0xe1f8),bn=f(0x16330);const bo=p['ZP']['span']`
	user-select: none;
`,bt=p['ZP']['div']``,ce=p['ZP']['div']`
	${({longPressStarted:ga})=>({'visibility':ga?'hidden':'visible'})}
	position: relative;
`,cn=p['ZP']['div']`
	${({longPressStarted:ga,delay:gb})=>({'width':ga?'100%':'0%','transition':ga?'width\x20'+gb+'ms\x20linear':'unset'})}
`,co=p['ZP']['div']`
	display: inline-block;
	width: 100%;
	position: relative;
	${bo} {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
	}

	${bt} {
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
	}

	${cn} {
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
	}
`;co['displayName']='CKHoldToActionStyled';const ct=({onMouseDown:ga,onMouseUp:gb,onMouseLeave:gc,onTouchStart:gd,onTouchEnd:ge,iconWrapper:gf,iconSVGComponent:gg,ariaLabel:gh,tabIndex:gi,ariaHidden:gj,disabled:gk})=>g['createElement'](gf,{'aria-label':gh,'tabIndex':gi,'aria-hidden':gj,'isFlat':!0x0,'icon':g['createElement'](gg,null),'onMouseDown':ga,'onMouseUp':gb,'onMouseLeave':gc,'onTouchStart':gd,'onTouchEnd':ge,'disabled':gk});var de=Object['defineProperty'],dl=Object['getOwnPropertySymbols'],dm=Object['prototype']['hasOwnProperty'],dn=Object['prototype']['propertyIsEnumerable'],dp=(ga,gb,gc)=>gb in ga?de(ga,gb,{'enumerable':!0x0,'configurable':!0x0,'writable':!0x0,'value':gc}):ga[gb]=gc,dq=(ga,gb)=>{for(var gc in gb||(gb={}))dm['call'](gb,gc)&&dp(ga,gc,gb[gc]);if(dl){for(var gc of dl(gb))dn['call'](gb,gc)&&dp(ga,gc,gb[gc]);}return ga;};const dr=(0x0,g['memo'])(ga=>{const {children:gb,iconSVGComponent:gc,iconWrapper:gd,onLongPress:ge,delay:gf,overlayText:gg,showOnHover:gh=!0x1,disabled:gi}=ga,{longPressStarted:gj,onMouseDown:gk,onMouseUp:gl,onMouseLeave:gm,onTouchStart:gn,onTouchEnd:go}=du({'onLongPress':ge},{'delay':gf});return g['createElement'](co,{'className':ga['className']},g['createElement'](cn,{'delay':gf,'longPressStarted':gj}),gj&&g['createElement'](bt,null,g['createElement'](bo,null,gg)),g['createElement'](ce,{'longPressStarted':gj},gb),gh&&g['createElement'](ct,{'iconWrapper':gd,'iconSVGComponent':gc,'onMouseDown':gk,'onMouseUp':gl,'onMouseLeave':gm,'onTouchStart':gn,'onTouchEnd':go,'disabled':gi}));});function ds(ga){dt(ga)&&ga['touches']['length']<0x2&&ga['preventDefault']&&ga['preventDefault']();}function dt(ga){return ga&&'touches'in ga;}function du({onLongPress:ga},{delay:gb=0x7d0,shouldPreventDefault:gc=!0x0}={}){const [gd,ge]=(0x0,g['useState'])(!0x1),gf=(0x0,g['useRef'])(),gg=(0x0,g['useRef'])(),gh=(0x0,g['useCallback'])(gj=>{gj['persist']();const gk=dq({},gj);gc&&gj['target']&&(gj['target']['addEventListener']('touchend',ds,{'passive':!0x1}),gg['current']=gj['target']),ge(!0x0),gf['current']=window['setTimeout'](()=>{ga(gk);},gb);},[ga,gb,gc,ge]),gi=(0x0,g['useCallback'])(()=>{gf['current']&&clearTimeout(gf['current']),ge(!0x1),gc&&gg['current']&&gg['current']['removeEventListener']('touchend',ds);},[gc]);return{'longPressStarted':gd,'onMouseDown':gj=>{gh(gj);},'onMouseUp':()=>{gi();},'onMouseLeave':()=>{gi();},'onTouchStart':gj=>{gh(gj);},'onTouchEnd':()=>{gi();}};}const dv=p['ZP']['ul']`
	padding: 0;
	margin: 0;
`;var dw=f(0x14c3);const dx=p['ZP']['div']`
	display: flex;
	height: 100%;
	padding-top: var(--spacer-3);
	box-sizing: border-box;
	touch-action: none;
`,dy=p['ZP']['div']`
	display: flex;
	font-family: var(--font-main);
	max-height: auto;
	${dw['E']} {
		${ga=>!ga['isMobile']&&p['iv']`
				@media (max-width: 1440px) {
					width: 322px;
				}

				width: 302px;
			`};
	}

	${r} {
		padding: 0 10px;
		border-right: 1px solid var(--dropdown-list_item-divider-bg);

		@media (max-width: 680px) {
			padding: 0 5px;
		}
	}

	${v} {
		height: calc(100% - 37px);
		overflow: hidden;
		border-radius: 0.5px;

		& > div {
			height: 100%;
		}

		@media (max-width: 1440px) {
			width: 322px;
		}

		@media (max-width: 680px) {
			width: 100%;
		}

		@media (max-width: 500px) {
			${O} {
				font-size: var(--font-size-m);
				text-overflow: ellipsis;
				width: 50px;
				max-width: 50px;
			}
		}

		@media (max-height: 500px) {
			height: 80%;
		}
	}

	${A} {
		display: flex;
		align-items: center;
		padding: 9px 0 var(--spacer-6) 0;
	}

	${O} {
		flex-grow: 1;
		min-width: 0;
		max-width: 245px;
		overflow: hidden;
	}
`,dz=p['ZP']['div']`
	flex-grow: 1;
	width: 100%;
	min-width: 100px;

	@media (max-width: 900px) {
		max-width: 500px;
		width: 100%;
		min-width: 300px;
	}

	@media (max-width: 680px) {
		width: 70%;
		min-width: auto;
	}
`,dA=p['ZP']['div']`
	max-height: 422px;
	padding: 0 10px;

	@media (max-width: 680px) {
		width: 100%;
		height: 100%;
		max-height: 64vh;
		box-sizing: border-box;
	}

	@media (max-height: 500px) {
		max-height: 64vh;
	}

	@media (max-width: 450px) {
		min-width: 110px;
		width: 100%;
	}

	@media (max-width: 350px) {
		width: 180px;
		max-width: 180px;
	}

	${v} {
		${ga=>ga['dragging']&&p['iv']`
				background-color: transparent;
				transition: background-color 150ms ease-out;
				&::after {
					content: '';
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					border: 2px dashed var(--dropdown-list_item-selected-text);
					border-radius: var(--spacer-1);
				}
				&:hover {
					background-color: var(--dropdown-list_item-hovered-bg);
				}
			`}
	}
`,dB=p['ZP']['div']`
	width: 100%;
	${O} {
		font-size: var(--font-size-l);
	}

	${Q} {
		font-size: var(--font-size-l);
		color: var(--dropdown-description-text);
		@media (max-width: 680px) {
			max-width: 200px;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
	}
`,dC=p['ZP']['div']`
	margin: 0;
	padding: 0;
	border: 0;
	font: inherit;
	vertical-align: baseline;
	list-style: none;
	height: 385px;
`,dD=(0x0,p['ZP'])(dv)`
	margin: 0;
	border: 0;
	font: inherit;
	vertical-align: baseline;
	list-style: none;
	box-sizing: content-box;
	height: 160px;
	width: 100%;
	padding: var(--spacer-2) 0;
	border-radius: 0.5px;
`,dE=p['ZP']['div']`
	padding-top: 15px;
`,dF=p['ZP']['div']`
	padding: 10px;
	font-size: 13px;
	text-align: center;
`,dG=p['ZP']['li']`
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: var(--dropdown-list_item-default-text);
	line-height: 2.17;
	position: relative;
	background-color: var(--dropdown-list_item-hovered-bg);
	transform: none !important;
`,dH=(0x0,p['ZP'])(ao['z'])`
	padding: 0;
	height: auto;
	font-family: var(--font-main);
	font-size: var(--font-size-l);
	line-height: var(--studies-delete-button-lh, 32px);
	font-weight: 500;
	text-align: right;
	min-width: 62px;
	text-decoration: underline;
	background: none;
	outline: 1px solid transparent;
`,dI=(0x0,p['ZP'])(at['E'])`
	background: none;
	border: none;
	outline: 1px solid transparent;
	padding: 0;
	color: var(--icon-active-bg);
	${bn['W']} {
		width: var(--studies-add-button-inner-width, 32px);
		height: var(--studies-add-button-inner-height, 32px);
		margin: 0;
		color: var(--icon-secondary-default-bg);
		${ga=>ga['selected']&&'color:\x20var(--icon-active-bg)'};
	}

	${bn['W']}:hover {
		color: var(--icon-active-bg);
	}
`,dJ=(0x0,p['ZP'])(at['E'])`
	position: absolute;
	top: 5px;
	right: var(--spacer-1);
	margin-right: var(--spacer-3);
	padding: 0;
	display: block;
	min-width: var(--studies-remove-button-mw, 16px);
	width: var(--studies-remove-button-width, 16px);
	height: var(--studies-remove-button-height, 16px);
	color: inherit;
	transform: translateX(var(--spacer-1));

	${bn['W']} {
		overflow: hidden;
		color: var(--icon-secondary-default-bg);

		&:hover {
			color: var(--icon-active-bg);
		}
	}
`,dK=(0x0,p['ZP'])(at['E'])`
	position: absolute;
	top: 50%;
	right: var(--spacer-3);
	transform: translateY(-50%);
	padding: 0;
	display: block;
	width: var(--script-delete-button-width, 14px);
	height: var(--script-delete-button-height, 20px);
	min-width: var(--script-delete-button-mw, 14px);
	color: inherit;
	cursor: default;
	fill: var(--icon-primary-default-bg);
	${bn['W']} {
		width: var(--script-delete-button-width, 14px);
	}

	${bn['W']}:hover {
		color: var(--icon-active-bg);
	}
`,dL=(0x0,p['ZP'])(dr)`
	${bo} {
		color: var(--dropdown-list-item-default-text);
	}

	${bt} {
		background-color: var(--dropdown-list_item-hovered-bg);
		padding-left: 38px;
		border-radius: 6px;
	}

	${cn} {
		background-color: var(--dropdown-list_item-hovered-bg);
		border-top-left-radius: 6px;
		border-bottom-left-radius: 6px;
	}
`,dM=ga=>{const gb=ga['split']('\x20'),gc=0x8;if(gb['length']>0x1){if(gb['join']('')['includes']('.'))return gb['map'](gd=>gd['includes']('.')?gd:gd['charAt'](0x0)['toUpperCase']())['join']('');{const gd=[];return gb['forEach'](ge=>{ge['includes']('(')&&ge['includes'](')')||ge['toUpperCase']()===ge&&ge['length']===0x2?gd['push'](ge):gd['push'](ge['charAt'](0x0)['toUpperCase']());}),gd['join']('');}}if(gb['length']===0x1){const ge=[];return gb['includes']('/')?(ge['push'](),gb[0x0]['split']('/')['forEach'](gf=>{ge['push'](gf[0x0]['charAt'](0x0)['toUpperCase']());}),ge['join']('/')):gb['join']('')['length']>gc?(gb[0x0]=gb[0x0]['replace'](/[a-z]/g,''),gb[0x0]):gb['join']('');}return ga;};var dN=f(0x2c6),dO=Object['defineProperty'],dP=Object['defineProperties'],dQ=Object['getOwnPropertyDescriptors'],dR=Object['getOwnPropertySymbols'],dS=Object['prototype']['hasOwnProperty'],dT=Object['prototype']['propertyIsEnumerable'],dU=(ga,gb,gc)=>gb in ga?dO(ga,gb,{'enumerable':!0x0,'configurable':!0x0,'writable':!0x0,'value':gc}):ga[gb]=gc,dV=(ga,gb)=>{for(var gc in gb||(gb={}))dS['call'](gb,gc)&&dU(ga,gc,gb[gc]);if(dR){for(var gc of dR(gb))dT['call'](gb,gc)&&dU(ga,gc,gb[gc]);}return ga;},dW=(ga,gb)=>dP(ga,dQ(gb)),dX=(ga,gb)=>{var gc={};for(var gd in ga)dS['call'](ga,gd)&&gb['indexOf'](gd)<0x0&&(gc[gd]=ga[gd]);if(ga!=null&&dR){for(var gd of dR(ga))gb['indexOf'](gd)<0x0&&dT['call'](ga,gd)&&(gc[gd]=ga[gd]);}return gc;};const dY=(0x0,g['memo'])(ga=>{var gb=ga,{children:gc,title:gd,actionButton:ge,header:gf,footer:gg,ariaLabel:gh,headingId:gi}=gb,gj=dX(gb,['children','title','actionButton','header','footer','ariaLabel','headingId']);const gk=gh===void 0x0?gi:void 0x0;return g['createElement'](r,dW(dV({},gj),{'role':'group','aria-label':gh,'aria-labelledby':gk}),g['createElement'](w,null,gd&&g['createElement'](x,{'id':gi},gd),gf,ge),g['createElement'](v,null,gc),gg&&g['createElement'](A,null,gg));});var dZ=f(0x1114),e0=f(0x1426c),e1=f(0x902b);const e2=p['ZP']['li']`
	display: flex;
	align-items: center;
	flex-grow: 1;
	height: var(--indicator-item-draggable-height, 32px);
	font-size: var(--font-size-l);
	white-space: nowrap;
	min-width: 0;
	border-radius: var(--indicator-item-draggable-bdrs, 6px);
	justify-content: space-between;
	color: var(--dropdown-list_item-default-text);
	line-height: var(--indicator-item-draggable-lh, 2.17);
	position: relative;
	outline: 1px solid transparent;

	// kill inline colors, but it's not worked with variables
	${ga=>ga['isDragging']?p['iv']`
					color: #ffaa00;
					border-radius: 6px;
					outline: 1px solid #ffaa00;
					background: rgba(255, 255, 255, 0.06);
					svg * {
						fill: #ffaa00;
					}
			  `:p['iv']`
					${ga['allowTransform']===!0x1&&'transform:\x20none\x20!important;'}
			  `}

	&:hover {
		background-color: var(--dropdown-list_item-hovered-bg);
	}

	:focus-visible {
		outline: 1px solid var(--button-focus-border);
		outline-offset: -1px;
	}
	:focus {
		outline: 1px solid var(--button-focus-border);
	}
`;var e3=Object['defineProperty'],e4=Object['defineProperties'],e5=Object['getOwnPropertyDescriptors'],e6=Object['getOwnPropertySymbols'],e7=Object['prototype']['hasOwnProperty'],e8=Object['prototype']['propertyIsEnumerable'],e9=(ga,gb,gc)=>gb in ga?e3(ga,gb,{'enumerable':!0x0,'configurable':!0x0,'writable':!0x0,'value':gc}):ga[gb]=gc,ea=(ga,gb)=>{for(var gc in gb||(gb={}))e7['call'](gb,gc)&&e9(ga,gc,gb[gc]);if(e6){for(var gc of e6(gb))e8['call'](gb,gc)&&e9(ga,gc,gb[gc]);}return ga;},eb=(ga,gb)=>e4(ga,e5(gb));const ec=(0x0,g['memo'])(ga=>{const {snapshot:gb,provided:gc,portal:gd,children:ge,transform:gf,draggable:gg,focusIn:gh,focusOut:gi,onKeyDown:gj,ariaDescribedBy:gk,testId:gl}=ga,gm=(0x0,g['useCallback'])(()=>gh==null?void 0x0:gh(),[gh]),gn=(0x0,g['useCallback'])(()=>gi==null?void 0x0:gi(),[gi]),go=(0x0,g['useCallback'])(()=>gh==null?void 0x0:gh(),[gh]),gp=(0x0,g['useCallback'])(()=>gi==null?void 0x0:gi(),[gi]),gq=(0x0,g['useCallback'])(gt=>{gk&&gt['setAttribute']('aria-describedby',gk),gl&&gt['setAttribute']('data-test-id',gl);},[gk,gl]),gr=(0x0,g['useCallback'])(gt=>{gc['innerRef'](gt),gt&&gq(gt);},[gc,gq]),gs=gg===!0x1?g['createElement'](e2,{'onKeyDown':gj},ge):g['createElement'](e2,ea(ea({'onFocus':gm,'onBlur':gn,'onMouseEnter':go,'onMouseLeave':gp,'isDragging':gb['isDragging'],'allowTransform':gf,'ref':gr,'onKeyDown':gj},gc['draggableProps']),eb(ea({},gc['dragHandleProps']),{'tabIndex':0x0})),ge);return gb['isDragging']?e1['createPortal'](gs,gd):gs;});var ed=f(0x1747a),ee=f(0x152bb),ef=f(0x1727d),eg=f(0x58ca),eh=f(0x7b4c),ei=f(0xc744);const ej='normal\x20normal\x20400\x2014px\x20Open\x20Sans',ek=(0x0,g['memo'])(({overlaying:ga,type:gb})=>{const gc=(0x0,g['useContext'])(ei['k']);let gd=g['createElement'](J,null,g['createElement'](ee['a'],null,gc['studies']['studyUnderlaying']));return gb==='dxScript'?gd=g['createElement'](M,null,g['createElement'](ee['a'],null,gc['studies']['script']['studyScript'])):ga&&(gd=g['createElement'](I,null,g['createElement'](ee['a'],null,gc['studies']['studyOverlaying']))),gd;}),el=(0x0,g['memo'])((0x0,g['forwardRef'])((ga,gb)=>{const {id:gc,title:gd,type:ge,description:gf,link:gg,appendix:gh,overlaying:gi,onClick:gj,onAddStudy:gk,active:gl=!0x1,children:gm,className:gn,addStudyButtonEnabled:go,onEditScript:gp,showDeleteButton:gq,dxScriptEnabled:gr,uuid:gs,isActiveIcons:gt,ariaLabel:gu,tooltipAvailable:gv=!0x1}=ga,{isMobile:gw}=(0x0,g['useContext'])(ef['El']),gx=(0x0,g['useRef'])(null),[gy,gz]=(0x0,g['useState'])(!0x1),gA=(0x0,g['useContext'])(ei['k']),{localization:gB}=(0x0,g['useContext'])(eg['E']),gC=(0x0,g['useCallback'])(()=>gj(gc,gs),[gj,gc,gs]),gD=(0x0,g['useCallback'])(()=>gk==null?void 0x0:gk(gc,gs),[gk,gc,gs]),gE=()=>gz(!0x0),gF=()=>gz(!0x1),gG=gH=>gH['split']('\x0a')['map']((gI,gJ)=>g['createElement'](g['Fragment'],{'key':gI+'_'+gJ},gI,g['createElement']('br',null)));return g['createElement'](E,{'className':gn,'active':gl,'onClick':gC,'onDoubleClick':gD,'ref':gb},g['createElement'](F,null,g['createElement'](ek,{'type':ge,'overlaying':gi})),g['createElement'](O,null,(0x0,ed['c'])(gd,ej,0xc8)),gt&&g['createElement'](an,null,go&&g['createElement'](R,{'onClick':gD},g['createElement'](ee['a'],{'width':0x18,'height':0x18},gA['studies']['add'])),!gw&&gv&&g['createElement'](g['Fragment'],null,g['createElement'](S,{'aria-describedby':'tooltip-content','hovered':gy,'onMouseEnter':gE,'onMouseLeave':gF},g['createElement']('div',{'ref':gx},gA['studies']['script']['help']),g['createElement'](T,{'anchorRef':gx,'position':'right','align':'start','opened':gy},g['createElement'](U,{'id':'tooltip-content'},g['createElement'](V,null,g['createElement']('span',null,gd)),g['createElement'](eh['R'],null,g['createElement'](X,null,g['createElement'](Z,null,gG(gf!=null?gf:'')),gg&&g['createElement'](ae,{'href':gg,'target':'_blank'},gB['studiesPopup']['learnMoreLink']))))))),!gw&&gr&&g['createElement'](G,{'aria-label':gu,'tabIndex':-0x1,'aria-hidden':!0x0,'onClick':gp},g['createElement'](ee['a'],{'width':0x18,'height':0x18},gA['studies']['script']['edit'])),gq&&g['createElement'](F,null)),gm,!gw&&gh&&g['createElement'](Q,null,gh));})),em=(0x0,g['memo'])((0x0,g['forwardRef'])((ga,gb)=>{const {study:gc,isActive:gd,isAdded:ge,studyTitle:gf,handleSelectStudy:gg,handleAddStudy:gh,onEditScript:gi,onDeleteScript:gj,snapshot:gk,isActiveIcons:gl}=ga,gm=(0x0,g['useContext'])(ei['k']),gn=(0x0,g['useCallback'])(()=>gi(gc['id']),[gi,gc['id']]),go=(0x0,g['useCallback'])(()=>gj(gc['id']),[gj,gc['id']]),{keyboardModeEnabled:gp}=(0x0,g['useContext'])(eg['E']),gq=g['createElement'](el,{'ariaLabel':ga['localization']['studiesPopup']['a11y_editScript'],'id':gc['id'],'uuid':gc['uuid'],'key':gc['uuid'],'title':gf,'type':gc['type'],'active':gd&&!gk['isDragging'],'overlaying':gc['overlaying'],'length':gc['lines']['length'],'onClick':gg,'onAddStudy':gh,'onEditScript':gn,'addStudyButtonEnabled':ga['addStudyButtonEnabled'],'dxScriptEnabled':ga['dxScriptEnabled'],'ref':gb,'isActiveIcons':gl,'showDeleteButton':!gc['locked']});return gc['locked']?gq:g['createElement'](dL,{'ariaLabel':ga['localization']['studiesPopup']['a11y_deleteScript'],'keyboardModeEnabled':gp,'iconSVGComponent':()=>g['createElement'](ee['a'],null,gm['studies']['settings']['deleteScript']),'iconWrapper':dK,'onLongPress':go,'delay':0x1f4,'overlayText':ga['localization']['studiesPopup']['holdToDelete'],'showOnHover':gl,'disabled':ge},gq);}));var en=f(0x10632),eo=f(0x1157f),ep=f(0x7191),eq=Object['defineProperty'],er=Object['defineProperties'],es=Object['getOwnPropertyDescriptors'],et=Object['getOwnPropertySymbols'],eu=Object['prototype']['hasOwnProperty'],ev=Object['prototype']['propertyIsEnumerable'],ew=(ga,gb,gc)=>gb in ga?eq(ga,gb,{'enumerable':!0x0,'configurable':!0x0,'writable':!0x0,'value':gc}):ga[gb]=gc,ex=(ga,gb)=>{for(var gc in gb||(gb={}))eu['call'](gb,gc)&&ew(ga,gc,gb[gc]);if(et){for(var gc of et(gb))ev['call'](gb,gc)&&ew(ga,gc,gb[gc]);}return ga;},ey=(ga,gb)=>er(ga,es(gb));const ez=(0x0,g['memo'])((0x0,g['forwardRef'])((ga,gb)=>{const {index:gc,study:gd,isActive:ge,portal:gf,studyTitle:gg,handleSelectStudy:gh,handleAddStudy:gi,onEditScript:gj,onDeleteScript:gk,isDragging:gl,isAdded:gm}=ga,[gn,go]=(0x0,g['useState'])(!0x1),gp=(0x0,g['useCallback'])(()=>go(!0x0),[]),gq=(0x0,g['useCallback'])(()=>go(!0x1),[]),gr=(0x0,g['useCallback'])(gu=>{gu['preventDefault'](),gj(gd['id']);},[gj,gd['id']]),gs=(0x0,g['useMemo'])(()=>gd['type']==='dxScript'?(0x0,en['z'])(['Delete',()=>!gd['locked']&&gk(gd['id'])],['KeyO',gr,{'ctrlKey':!0x0}],['Enter',()=>gi(gd['id'],gd['uuid'])]):(0x0,en['z'])(['Enter',()=>gi(gd['id'],gd['uuid'])]),[gd['type'],gd['locked'],gd['id'],gd['uuid'],gr,gk,gi]),gt=(0x0,g['useMemo'])(()=>(gd['type']==='dxScript'?gd['locked']?eo['Iu']:eo['mZ']:'')+''+eo['ZB'],[gd['locked'],gd['type']]);return(0x0,g['useEffect'])(()=>{go(!0x1);},[gl]),g['createElement'](j['_l'],{'key':gd['uuid'],'draggableId':gd['uuid'],'index':gc},(gu,gv)=>g['createElement'](g['Fragment'],null,g['createElement'](ec,{'ariaDescribedBy':gt,'testId':ep['z']['indicator_item_left'],'provided':gu,'snapshot':gv,'onKeyDown':gs,'focusIn':gp,'focusOut':gq,'portal':gf,'transform':!0x1},gd['type']==='dxScript'?g['createElement'](em,ey(ex({},ga),{'isActiveIcons':gn,'snapshot':gv,'ref':gb,'isAdded':gm})):g['createElement'](el,{'id':gd['id'],'uuid':gd['uuid'],'key':gd['uuid'],'title':gg,'type':gd['type'],'description':gd['description'],'link':gd['link'],'active':ge&&!gv['isDragging'],'overlaying':gd['overlaying'],'length':gd['lines']['length'],'onClick':gh,'onAddStudy':gi,'addStudyButtonEnabled':ga['addStudyButtonEnabled'],'ref':gb,'isActiveIcons':gn,'tooltipAvailable':!0x0})),gv['isDragging']&&g['createElement'](dG,null,g['createElement'](el,{'id':gd['id'],'uuid':gd['uuid'],'key':gd['uuid'],'title':gg,'description':gd['description'],'type':gd['type'],'overlaying':gd['overlaying'],'length':gd['lines']['length'],'onClick':gh,'ref':gb}))));}));var eA=f(0x106fd),eB=f(0x15e95);const eC=p['ZP']['div']`
	display: flex;
	align-items: center;
	margin-bottom: 5px;
	position: relative;
	flex-grow: 1;
	width: 100%;
`,eD=(0x0,p['ZP'])(eA['I'])`
	width: 100%;
	height: 32px;
	font-weight: 500;
	font-size: var(--font-size-l);
	border-radius: var(--spacer-1);
	color: inherit;
	flex-grow: 1;
	${eB['l_']} {
		width: 100%;
		font-family: var(--font-main-semibold);
	}

	&:hover {
		background: var(--input-default-bg);
	}

	@media (max-width: 680px) {
		min-width: 100px;
	}
`,eE=(0x0,p['ZP'])(at['E'])`
	padding: var(--indicator-add-script-button-padding, 0);
	width: var(--indicator-add-script-button-width, 32px);
	min-width: var(--indicator-add-script-button-mw, 0);
	height: var(--indicator-add-script-button-height, 32px);
	flex-shrink: 0;
	margin-left: var(--indicator-add-script-button-ml, 5px);

	${bn['W']} {
		width: var(--indicator-add-script-button-inner-width, 24px);
		height: var(--indicator-add-script-button-inner-height, 24px);
	}

	&:hover {
		color: var(--link-hovered-text);
	}
`,eF=(0x0,g['memo'])(({onCreateNewScript:ga,localization:gb,value:gc,handleTextFilterChange:gd,dxScriptEnabled:ge})=>{const {isMobile:gf}=(0x0,g['useContext'])(ef['El']),gg=(0x0,g['useContext'])(ei['k']);return g['createElement'](eC,null,g['createElement'](eD,{'placeholder':gb['studiesPopup']['filter'],'value':gc,'autofocus':!0x0,'onValueChange':gd}),!gf&&ge?g['createElement'](eE,{'aria-label':gb['studiesPopup']['a11y_openScript'],'icon':g['createElement'](ee['a'],{'width':0x18,'height':0x18},gg['indicatorList']['add']),'onClick':ga}):null);}),eG=(0x0,g['memo'])(ga=>{const {localization:gb,onCreateNewScript:gc,filterString:gd,handleTextFilterChange:ge,dxScriptEnabled:gf}=ga;return g['createElement'](eF,{'handleTextFilterChange':ge,'value':gd,'localization':gb,'onCreateNewScript':gc,'dxScriptEnabled':gf});});var eH=f(0xcc7e);const eI=g['createElement'](dF,null,'No\x20results'),eJ=(0x0,g['memo'])(ga=>{const {filterString:gb,handleTextFilterChange:gc,portal:gd,handleAddStudy:ge,currentSelectedStudyId:gf,handleSelectStudy:gg,studies:gh,localization:gi,isDragging:gj,checkIfCustomStudyAdded:gk}=ga,gl=(0x0,g['useRef'])(null),gm=(0x0,g['useMemo'])(()=>g['createElement'](dv,{'ref':gl,'aria-label':gi['studiesPopup']['a11y_availableStudiesList']},(0x0,l['zG'])((0x0,dZ['nI'])(gh),(0x0,e0['g_'])(()=>eI,gn=>g['createElement'](g['Fragment'],null,gn['map']((go,gp)=>{const gq=ga['getStudyTitle'](go['title']),gr=go['id']===gf,gs=gk(go);return g['createElement'](ez,{'key':go['id'],'localization':gi,'onEditScript':ga['onEditScript'],'onDeleteScript':ga['onDeleteScript'],'study':go,'index':gp,'isActive':gr,'portal':gd,'studyTitle':gq,'handleSelectStudy':gg,'handleAddStudy':ge,'addStudyButtonEnabled':ga['addStudyButtonEnabled'],'dxScriptEnabled':ga['dxScriptEnabled'],'isDragging':gj,'isAdded':gs});}))))),[gf,ge,gg,gd,ga,gh,gi,gj,gk]);return(0x0,eH['A'])({'wrapperRef':gl,'childrenSelector':'li','direction':'vertical','deps':[gm,gb]}),g['createElement'](dy,{'isMobile':ga['isMobile']},g['createElement'](dY,{'ariaLabel':gi['studiesPopup']['a11y_availableStudes'],'header':g['createElement'](eG,{'dxScriptEnabled':ga['dxScriptEnabled'],'filterString':gb,'handleTextFilterChange':gc,'localization':gi,'onCreateNewScript':ga['onCreateNewScript']})},g['createElement'](j['bK'],{'droppableId':'studies'},gn=>g['createElement'](eh['R'],null,g['createElement'](dC,{'ref':gn['innerRef']},g['createElement'](g['Fragment'],null,gm,gn['placeholder']))))));}),eK=(0x0,g['memo'])((0x0,g['forwardRef'])((ga,gb)=>{const {index:gc,study:gd,isActive:ge,portal:gf,studyTitle:gg,appendix:gh,onRemoveStudy:gi,isMobile:gj,onSelectStudySettings:gk,localization:gl}=ga,gm=(0x0,g['useCallback'])(()=>gi(gd['uuid']),[gi,gd['uuid']]),gn=(0x0,g['useCallback'])(()=>gk(gd['id'],gd['uuid']),[gk,gd['id'],gd['uuid']]),go=g['useContext'](ei['k']),gp=(0x0,g['useCallback'])(gq=>{gq['key']==='Delete'&&gm();},[gm]);return g['createElement'](j['_l'],{'key':gd['uuid'],'draggableId':'studies-'+gd['uuid'],'index':gc},(gq,gr)=>g['createElement'](ec,{'focusIn':gr['isDragging']?gn:void 0x0,'provided':gq,'snapshot':gr,'portal':gf,'draggable':!0x0,'testId':ep['z']['indicator_item_right'],'onKeyDown':gp,'transform':!0x0},g['createElement'](dB,{'isMobile':gj},g['createElement'](el,{'id':gd['id'],'uuid':gd['uuid'],'key':gd['uuid'],'title':gg,'type':gd['type'],'overlaying':gd['overlaying'],'appendix':gh,'length':gd['lines']['length'],'active':ge,'onClick':gn,'ref':gb})),ge&&!gr['isDragging']&&g['createElement'](dJ,{'aria-label':gl['studiesPopup']['a11y_close'],'isFlat':!0x0,'tabIndex':-0x1,'icon':g['createElement'](ee['a'],null,go['studies']['settings']['bigcross']),'onClick':gm})));}));var eL=f(0x65f6);const eM=(ga,gb)=>(0x0,l['zG'])(ga,(0x0,dN['Ew'])(gc=>gc['id']===gb)),eN=(ga,gb)=>(0x0,l['zG'])(ga,(0x0,dN['Ew'])(gc=>gc['uuid']===gb)),eO=['DEFAULT','DAY','WEEK','MONTH'],eP=['SIMPLE','WILDERS','WEIGHTED','EXPONENTIAL'],eQ=['OPEN','HIGH','LOW','CLOSE','MEDIAN','TYPICAL','OHLC_AVERAGE','VOLUME'],eR=ga=>{switch(ga){case'AGGREGATION':return eO['map'](gb=>({'value':gb,'caption':gb}));case'AVERAGE':return eP['map'](gb=>({'value':gb,'caption':gb}));case'PRICE_FIELD':return eQ['map'](gb=>({'value':gb,'caption':gb}));default:return[];}},eS=['AGGREGATION','AVERAGE','PRICE_FIELD']['reduce']((ga,gb)=>(ga[gb]=eR(gb),ga),{});var eT=f(0x169fd),eU=f(0xed1d),eV=f(0x14e84),eW=f(0x9c85),eX=f(0x429a),eY=f(0x6176),eZ=f(0x22c2);const f0=p['ZP']['div']`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	@media (max-width: 500px) {
		button > div {
			margin-left: 5px;
			margin-right: 10px;
			font-size: var(--font-size-m);
			text-align: end;
		}
	}
`,f1=p['ZP']['h3']`
	margin: 0;
	padding: 0;
	border: 0;
	vertical-align: baseline;
	font-family: var(--font-main-bold);
	font-size: var(--font-size-m);
	font-weight: bold;
	line-height: 21px;
	letter-spacing: 0.84px;
	text-transform: uppercase;
	color: var(--form-title-text);
`,f2=(0x0,p['ZP'])(at['E'])`
	padding: 0;
	width: 44px;
	min-width: 0;
	height: 24px;
	flex-shrink: 0;
	margin-left: auto;
	margin-right: 5px;

	&:hover {
		color: var(--link-hovered-text);
	}
`,f3=(0x0,p['ZP'])(ao['z'])`
	font-family: var(--font-main);
	font-size: var(--font-size-l);
	padding: 0 var(--spacer-2);
	border: 1px solid transparent;
	background: transparent;
	margin-left: 6px;
`,f4=p['ZP']['div']``,f5=p['ZP']['div']`
	width: 100%;
`,f6=(0x0,p['ZP'])(f5)`
	${f4} {
		&:nth-of-type(n),
		&:nth-of-type(2n) {
			margin-right: 56px;

			@media (max-width: 1440px) {
				margin-right: 46px;
			}
		}
	}
`,f7=(0x0,p['ZP'])(f5)`
	${f4} {
		&:nth-of-type(2n - 1) {
			margin-right: 16px;

			@media (max-width: 1440px) {
				margin-right: 46px;
			}
		}
	}
`,f8=p['ZP']['h4']`
	margin: 0;
	padding: 0;
	border: 0;
	vertical-align: baseline;
	font-family: var(--font-main-bold);
	font-size: var(--font-size-m);
	font-weight: bold;
	line-height: 21px;
	letter-spacing: 0.84px;
	text-transform: uppercase;
	color: var(--form-title-text);
	margin: var(--spacer-2) 0 15px;
	@media (max-width: 460px) {
		margin: var(--spacer-5) 0 15px 0;
	}
`,f9=p['ZP']['div']`
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	margin-bottom: 6px;
`,fa=p['ZP']['div']`
	display: flex;
	flex-direction: row;
	@media (max-width: 460px) {
		flex-direction: column;
	}
`,fb=p['ZP']['div']`
	display: flex;
	align-items: center;
	@media (max-width: 460px) {
		margin-top: var(--spacer-3);
	}
`,fc=p['ZP']['div']`
	display: flex;
	align-items: center;
	margin-right: var(--spacer-2);
	@media (max-width: 460px) {
		margin-top: var(--spacer-3);
	}
`,fd=p['ZP']['div']`
	&:not(:first-child) {
		margin-left: var(--spacer-1);
	}
`,fe=p['ZP']['div']`
	position: relative;
	width: 58px;
	margin-right: 32px;
	@media (max-width: 460px) {
		margin-top: var(--spacer-3);
	}
`,ff=p['ZP']['div']`
	position: relative;
	width: 75px;
	@media (max-width: 460px) {
		margin-top: var(--spacer-5);
		margin-bottom: var(--spacer-5);
	}
`,fg=p['ZP']['span']`
	position: absolute;
	top: 7px;
	left: 54px;
	height: 14px;

	font-size: var(--font-size-l);
	line-height: var(--line-height-l-px);
	margin-left: var(--spacer-2);

	color: var(--dropdown-list_item-default-text);
`,fh=(0x0,p['ZP'])(eU['s'])`
	height: 19px;
	padding: var(--spacer-05) var(--spacer-5) var(--spacer-05) 5px;
	line-height: 15px;
	font-size: var(--font-size-m);
	border-radius: var(--spacer-1);
`,fi=(0x0,p['ZP'])(eZ['J'])``,fj=(0x0,p['ZP'])(eX['x'])`
	width: 100%;

	${eY['S3']} {
		position: relative;

		& > div {
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			padding: 0 1px;
		}
	}

	${ga=>ga['caretIcon']&&p['iv']`
			${eY['As']} {
				display: block;
				position: absolute;
				box-sizing: border-box;
				width: 3px;
				height: 3px;
				left: 1px;
				bottom: 1px;
			}
		`}

	${eY['Br']} {
		width: 100%;
	}
`,fk=p['ZP']['div']`
	display: flex;
	flex-direction: column;
	margin-bottom: 11px;
`,fl=p['ZP']['h5']`
	height: 14px;
	margin: 0;
	padding: 0;
	margin-bottom: var(--spacer-2);

	font-size: var(--font-size-l);
	line-height: 13px;
	white-space: nowrap;

	color: var(--form-title-text);
	text-transform: capitalize;
`,fm=(0x0,p['ZP'])(eV['l'])`
	${eW['AG']} {
		max-width: 100px;
		width: 100%;
	}
`;var fn=f(0x17481),fo=f(0x9295),fp=f(0x2e07),fq=Object['defineProperty'],fr=Object['defineProperties'],fs=Object['getOwnPropertyDescriptors'],ft=Object['getOwnPropertySymbols'],fu=Object['prototype']['hasOwnProperty'],fv=Object['prototype']['propertyIsEnumerable'],fw=Math['pow'],fx=(ga,gb,gc)=>gb in ga?fq(ga,gb,{'enumerable':!0x0,'configurable':!0x0,'writable':!0x0,'value':gc}):ga[gb]=gc,fy=(ga,gb)=>{for(var gc in gb||(gb={}))fu['call'](gb,gc)&&fx(ga,gc,gb[gc]);if(ft){for(var gc of ft(gb))fv['call'](gb,gc)&&fx(ga,gc,gb[gc]);}return ga;},fz=(ga,gb)=>fr(ga,fs(gb));const fA=['POINTS','LINEAR','DIFFERENCE','HISTOGRAM'],fB=[...fA['filter'](ga=>ga!=='HISTOGRAM'),'TREND_HISTOGRAM'],fC=['TDSequential','WilliamsFractal','WaveTrendWithCrosses','AccelerationDeceleration','AwesomeOscillator','GatorOscillator'],fD={'TDSequential':[...fA,'ABOVE_CANDLE_TRIANGLE','ABOVE_CANDLE_TEXT','BELOW_CANDLE_TEXT','COLOR_CANDLE'],'WilliamsFractal':[...fA,'ABOVE_CANDLE_TEXT','BELOW_CANDLE_TEXT'],'WaveTrendWithCrosses':[...fA,'COLOR_CANDLE'],'AccelerationDeceleration':fB,'AwesomeOscillator':fB,'GatorOscillator':fB},fE=null,fF=ga=>/^-?\d*[.]?\d*$/['test'](ga),fG=({parameters:ga,lines:gb,id:gc,uuid:gd,overlaying:ge})=>({'currentStudyUUID':gd,'currentStudyId':gc,'overlaying':ge,'parameters':ga['reduce']((gf,{id:gg,value:gh,studyParamType:gi})=>{switch(gi){case'AGGREGATION':gf[gg]=(0x0,l['zG'])(gh,e0['fS'](()=>'DEFAULT'));break;case'AVERAGE':gf[gg]=(0x0,l['zG'])(gh,e0['fS'](()=>'DEFAULT'));break;case'PRICE_FIELD':gf[gg]=(0x0,l['zG'])(gh,e0['fS'](()=>'DEFAULT'));break;case'INTEGER_RANGE':case'DOUBLE_RANGE':gf[gg]=(0x0,l['zG'])(gh,e0['fS'](()=>0x0));break;default:gf[gg]=(0x0,l['zG'])(gh,e0['g_'](()=>'',gj=>typeof gj=='boolean'?gj:gj['toString']()));break;}return gf;},{}),'lines':gb['reduce']((gf,gg)=>((0x0,e0['pC'])(gg['title'])&&(0x0,e0['pC'])(gg['colors'])&&(0x0,e0['pC'])(gg['visible'])&&(gf[gg['title']['value']]={'colors':gg['colors']['value'],'thickness':(0x0,l['zG'])(gg['thickness'],e0['fS'](()=>0x1)),'visible':(0x0,l['zG'])(gg['visible'],e0['fS'](l['W8'])),'studyLineType':(0x0,l['zG'])(gg['studyLineType'],e0['fS'](()=>'UNDEFINED_TYPE'))}),gf),{}),'openedSelectbox':e0['YP']});class fH extends g['PureComponent']{constructor(){super(...arguments),this['state']=fy({},fG(this['props']['studySettings'])),this['handleChangeSelectboxParameterValue']=ga=>gb=>{Array['isArray'](gb)||this['setValueForParameters'](ga,gb||'');},this['handleChangeSteppableInput']=ga=>gb=>{this['setValueForParameters'](ga,gb);},this['handleChangeLineColorValue']=ga=>gb=>gc=>{const gd=[...this['state']['lines'][ga]['colors']];gd[gb]=gc,this['setValueForLines'](ga,'colors',gd);},this['handleChangeLineThicknessValue']=ga=>gb=>{this['setValueForLines'](ga,'thickness',gb);},this['handleToggleVisibilityCheckbox']=ga=>gb=>{this['setValueForLines'](ga,'visible',gb===void 0x0?!0x0:gb);},this['handleChangeLineType']=ga=>gb=>{this['setValueForLines'](ga,'studyLineType',gb);},this['handleToggleSelectBox']=ga=>gb=>{const gc=(0x0,l['zG'])((0x0,e0['G'])(typeof gb=='boolean'?gb:(0x0,e0['Wi'])(this['state']['openedSelectbox'])),e0['UI'](gd=>gd?ga:''));this['setState']({'openedSelectbox':gc});},this['handleRestoreToDefault']=()=>{const ga=eM(this['props']['studies'],this['props']['studySettings']['id']),gb=(0x0,l['zG'])(ga,e0['UI'](gc=>fy({},gc)),e0['fS'](()=>fy({},this['props']['studySettings'])));this['setState'](fz(fy({},fG(fy({},gb))),{'currentStudyUUID':this['props']['studySettings']['uuid']}),()=>{this['props']['onChange'](this['createPatchFromState']());});},this['onEditScript']=()=>{const {onEditScript:ga,studySettings:gb}=this['props'];return ga(gb['id']);};}static['getDerivedStateFromProps'](ga,gb){return ga['studySettings']['uuid']===gb['currentStudyUUID']?null:fG(ga['studySettings']);}['createPatchFromState'](){const {parameters:ga,lines:gb}=this['props']['studySettings'],gc=ga['map'](gd=>fz(fy({},gd),{'value':(0x0,e0['G'])(this['state']['parameters'][gd['id']])}));return fz(fy({},this['props']['studySettings']),{'parameters':gc,'overlaying':this['state']['overlaying'],'lines':gb['map'](gd=>fz(fy({},gd),{'visible':(0x0,l['zG'])(gd['title'],e0['g_'](()=>gd['visible'],ge=>(0x0,e0['G'])(this['state']['lines'][ge]['visible']))),'thickness':(0x0,l['zG'])(gd['title'],e0['g_'](()=>gd['thickness'],ge=>(0x0,e0['G'])(this['state']['lines'][ge]['thickness']))),'colors':(0x0,l['zG'])(gd['title'],e0['g_'](()=>gd['colors'],ge=>(0x0,e0['G'])(this['state']['lines'][ge]['colors']))),'studyLineType':(0x0,l['zG'])(gd['title'],e0['g_'](()=>gd['studyLineType'],ge=>(0x0,e0['G'])(this['state']['lines'][ge]['studyLineType'])))}))});}['setValueForParameters'](ga,gb){this['setState']({'parameters':fz(fy({},this['state']['parameters']),{[ga]:gb})},()=>{this['props']['onChange'](this['createPatchFromState']());});}['setValueForLines'](ga,gb,gc){this['setState']({'lines':fz(fy({},this['state']['lines']),{[ga]:fz(fy({},this['state']['lines'][ga]),{[gb]:gc})})},()=>{this['props']['onChange'](this['createPatchFromState']());});}['renderSteppableInputForParameters'](ga,gb,gc=e0['YP']){const gd=(0x0,l['zG'])(gc,e0['tS'](gj=>gj['precision']),e0['fS'](()=>0x0)),ge=0x1/fw(0xa,gd),gf=(0x0,l['zG'])(gc,e0['tS'](gj=>gj['max']),e0['UI'](gj=>gb>=gj),(0x0,e0['fS'])(()=>!0x1)),gg=(0x0,l['zG'])(gc,e0['tS'](gj=>gj['min']),e0['UI'](gj=>gb<=gj),(0x0,e0['fS'])(()=>!0x1)),gh=(0x0,l['zG'])(gc,e0['tS'](gj=>gj['min']),e0['fS'](()=>Number['NEGATIVE_INFINITY'])),gi=(0x0,l['zG'])(gc,e0['tS'](gj=>gj['max']),e0['fS'](()=>Number['POSITIVE_INFINITY']));return g['createElement'](fm,{'ariaLabel':ga,'step':ge,'isIncrementButtonDisabled':gf,'isDecrementButtonDisabled':gg,'min':gh,'max':gi,'value':Number(gb),'onValueChange':this['handleChangeSteppableInput'](ga),'onValidate':fF});}['renderSteppableInputForPlots'](ga,gb){return g['createElement'](fm,{'ariaLabel':this['props']['localization']['studiesPopup']['a11y_plotLineThickness'],'step':0x1,'isDecrementButtonDisabled':gb<=0x1,'isIncrementButtonDisabled':gb>=0x63,'min':0x0,'max':0x63,'value':gb,'onValueChange':this['handleChangeLineThicknessValue'](ga)});}['renderVisibilityCheckboxForPlots'](ga,gb){return g['createElement'](eT['a'],{'label':''},g['createElement'](fo['X'],{'ariaLabel':this['props']['localization']['studiesPopup']['a11y_plotVisibility'],'value':gb,'onValueChange':this['handleToggleVisibilityCheckbox'](ga)}));}['renderCheckbox'](ga,gb){return g['createElement'](eT['a'],{'label':''},g['createElement'](fo['X'],{'ariaLabel':ga,'value':gb,'onValueChange':gc=>this['setValueForParameters'](ga,gc||!0x1)}));}['renderSelectbox'](ga,gb,gc,gd){const ge=(0x0,l['zG'])(this['state']['openedSelectbox'],e0['UI'](gg=>gg===ga),e0['fS'](()=>!0x1)),gf=gg=>(0x0,en['z'])(['Space',gh=>{gh['preventDefault'](),this['handleChangeSelectboxParameterValue'](ga)(gg),this['handleToggleSelectBox'](ga)(!0x1);}],['Enter',gh=>{gh['preventDefault'](),this['handleChangeSelectboxParameterValue'](ga)(gg),this['handleToggleSelectBox'](ga)(!0x1);}]);return g['createElement'](fn['v'],{'closeOnClickAway':!0x0,'anchorAriaLabel':ga,'value':gb,'isOpened':ge,'onToggle':this['handleToggleSelectBox'](ga),'onValueChange':this['handleChangeSelectboxParameterValue'](ga),'Anchor':fj,'keyboardMode':this['props']['keyboardMode']},gc['map'](gg=>g['createElement'](fh,{'value':gg['value'],'key':gg['value'],'isActive':gg['value']===gb,'onKeyDown':gf(gg['value'])},fI(gg['caption'],gd,this['props']['localization']))));}['renderInputByParameterType'](ga,gb,gc,gd){switch(gb){case'INTEGER_RANGE':case'DOUBLE_RANGE':return this['renderSteppableInputForParameters'](ga,Number(gc),gd);case'PRICE_FIELD':case'AGGREGATION':case'AVERAGE':return this['renderSelectbox'](ga,String(gc),eS[gb],gb);case'STRING':case'BOOLEAN':return this['renderCheckbox'](ga,!!gc);case'UNDEFINED':default:return null;}}['renderInputs'](){const {studySettings:{parameters:ga}}=this['props'],{parameters:gb}=this['state'];return ga['filter'](gc=>(0x0,l['zG'])(gc['visible'],e0['fS'](l['W8'])))['map'](gc=>g['createElement'](f4,{'key':gc['id']},g['createElement'](fk,null,g['createElement'](fl,null,gc['id']),this['renderInputByParameterType'](gc['id'],gc['studyParamType'],gb[gc['id']],gc['validation']))));}['renderLineSettings'](ga,gb){const {lines:gc}=this['state'],gd=gc[ga],ge=['TREND_HISTOGRAM','ABOVE_CANDLE_TRIANGLE']['includes'](gd['studyLineType'])?gd['colors']:[gd['colors'][0x0]];return g['createElement'](fa,null,g['createElement'](fb,null,this['renderVisibilityCheckboxForPlots'](ga,gd['visible'])),g['createElement'](fc,null,ge['map']((gf,gg)=>g['createElement'](fd,{'key':gg},g['createElement'](fp['vY']['Consumer'],null,({ColorPickerComponent:gh})=>gh&&g['createElement'](gh,{'ariaLabel':this['props']['localization']['studiesPopup']['a11y_plotLineColor'],'key':gg,'value':gf,'palette':gb,'onValueChange':this['handleChangeLineColorValue'](ga)(gg)}))))),g['createElement'](fe,null,this['renderSteppableInputForPlots'](ga,gd['thickness']),g['createElement'](fg,null,'px')),g['createElement'](ff,null,this['renderPlotTypeSelectbox'](ga,gd)));}['renderPlotTypeSelectbox'](ga,gb){const gc=(0x0,l['zG'])(this['state']['openedSelectbox'],e0['UI'](gg=>gg===ga),e0['fS'](()=>!0x1)),gd=gg=>(0x0,en['z'])(['Space',gh=>{gh['preventDefault'](),this['handleChangeLineType'](ga)(gg),this['handleToggleSelectBox'](ga)(!0x1);}],['Enter',gh=>{gh['preventDefault'](),this['handleChangeLineType'](ga)(gg),this['handleToggleSelectBox'](ga)(!0x1);}]),ge=gg=>{const gh=this['props']['localization']['studiesPopup']['studyLineTypeList'];return{'POINTS':gh['points'],'LINEAR':gh['linear'],'HISTOGRAM':gh['histogram'],'TREND_HISTOGRAM':gh['histogram'],'DIFFERENCE':gh['difference'],'ABOVE_CANDLE_TEXT':gh['aboveCandleText'],'BELOW_CANDLE_TEXT':gh['belowCandleText'],'ABOVE_CANDLE_TRIANGLE':gh['aboveCandleTriangle'],'COLOR_CANDLE':gh['colorCandle']}[gg];},gf=fC['includes'](this['state']['currentStudyId'])?fD[this['state']['currentStudyId']]:fA;return g['createElement'](fn['v'],{'anchorAriaLabel':this['props']['localization']['studiesPopup']['a11y_plotLineType'],'value':gb['studyLineType'],'isOpened':gc,'onToggle':this['handleToggleSelectBox'](ga),'onValueChange':this['handleChangeLineType'](ga),'Anchor':fj,'closeOnClickAway':!0x0,'keyboardMode':this['props']['keyboardMode'],'Popover':fi},gf['map'](gg=>g['createElement'](fh,{'value':gg,'key':gg,'isActive':gg===gb['studyLineType'],'onKeyDown':gd(gg)},ge(gg))));}['renderPlots'](){const {studySettings:{lines:ga},palette:gb}=this['props'];return ga['filter'](gc=>(0x0,e0['pC'])(gc['title']))['map'](gc=>(0x0,l['zG'])(gc['title'],e0['g_'](()=>null,gd=>g['createElement'](f4,{'key':gd},g['createElement'](fk,{'role':'group','aria-labelledby':'study_settings_plot_'+gd},g['createElement'](fl,{'id':'study_settings_plot_'+gd},gd),this['renderLineSettings'](gd,gb))))));}['renderOverlayingSwitch'](){const ga=gb=>{const gc=gb||!0x1;this['setState']({'overlaying':gc},()=>{this['props']['onChange'](fz(fy({},this['props']['studySettings']),{'overlaying':gc}));});};return g['createElement'](eT['a'],{'label':''},g['createElement'](fo['X'],{'ariaLabel':this['props']['localization']['studiesPopup']['a11y_overlayStudy'],'value':this['props']['studySettings']['overlaying'],'onValueChange':ga}));}['render'](){const {studySettings:{title:ga,parameters:gb,lines:gc,type:gd},dxScriptEnabled:ge}=this['props'],gf=0x2a8,gg=gb['filter'](gh=>(0x0,l['zG'])(gh['visible'],e0['fS'](l['W8'])));return g['createElement'](g['Fragment'],null,g['createElement'](f0,null,g['createElement'](f1,{'id':'study_settings'},this['props']['localization']['studiesPopup']['settings'],'\x20',window['innerWidth']>gf?ga||'NONE':''),gd==='dxScript'&&ge&&g['createElement'](f2,{'aria-label':this['props']['localization']['studiesPopup']['a11y_editScript'],'icon':g['createElement'](ee['a'],null,this['props']['iconsConfig']['studies']['script']['studyScript']),'onClick':this['onEditScript']}),g['createElement'](f3,{'onClick':this['handleRestoreToDefault'],'isFlat':!0x0},this['props']['localization']['studiesPopup']['restoreToDefault'])),gg['length']?g['createElement'](f6,{'role':'group','aria-labelledby':'study_settings_inputs'},g['createElement'](f8,{'id':'study_settings_inputs'},this['props']['localization']['studiesPopup']['inputs']),g['createElement'](f9,null,this['renderInputs']())):null,gc['length']?g['createElement'](f7,{'role':'group','aria-labelledby':'study_settings_plots'},g['createElement'](f8,{'id':'study_settings_plots'},this['props']['localization']['studiesPopup']['plots']),g['createElement'](f9,null,this['renderPlots']())):null,g['createElement'](f5,{'role':'group','aria-labelledby':'study_settings_overlay'},g['createElement'](f8,{'id':'study_settings_overlay'},this['props']['localization']['studiesPopup']['overlaying']),g['createElement'](f9,null,this['renderOverlayingSwitch']())));}}const fI=(ga,gb,gc)=>{const gd=gc['studiesPopup'];switch(gb){case'AGGREGATION':return{'DEFAULT':gd['studyParamAggregationType']['default'],'DAY':gd['studyParamAggregationType']['day'],'WEEK':gd['studyParamAggregationType']['week'],'MONTH':gd['studyParamAggregationType']['month']}[ga];case'AVERAGE':return{'SIMPLE':gd['studyParamAverageType']['simple'],'WILDERS':gd['studyParamAverageType']['wilders'],'WEIGHTED':gd['studyParamAverageType']['weighted'],'EXPONENTIAL':gd['studyParamAverageType']['exponential']}[ga];case'PRICE_FIELD':return{'OPEN':gd['studyParamPriceType']['open'],'CLOSE':gd['studyParamPriceType']['close'],'HIGH':gd['studyParamPriceType']['high'],'LOW':gd['studyParamPriceType']['low'],'MEDIAN':gd['studyParamPriceType']['median'],'TYPICAL':gd['studyParamPriceType']['typical'],'OHLC_AVERAGE':gd['studyParamPriceType']['ohlcAvg'],'VOLUME':gd['studyParamPriceType']['volume']}[ga];}},fJ=(0x0,g['memo'])(ga=>{const {isDragging:gb,palette:gc,portal:gd,addedStudies:ge,studies:gf,onEditScript:gg,handleRemoveStudy:gh,handleSelectStudySettings:gi,onChangeStudySettings:gj,getStudyTitle:gk,currentStudySettingsUUID:gl,localization:gm}=ga,{keyboardModeEnabled:gn}=(0x0,g['useContext'])(eg['E']),go=(0x0,g['useMemo'])(()=>g['createElement'](dH,{'onClick':ga['onDeleteAll'],'isFlat':!0x0},ga['localization']['studiesPopup']['deleteAll']),[ga['localization']['studiesPopup']['deleteAll'],ga['onDeleteAll']]),gp=(0x0,g['useMemo'])(()=>(0x0,l['zG'])(eN(ge,gl),e0['g_'](()=>null,gs=>gs)),[ge,gl]),gq=(0x0,g['useRef'])(null),gr=(0x0,g['useMemo'])(()=>g['createElement'](eh['R'],null,g['createElement'](dD,{'ref':gq,'aria-label':gm['studiesPopup']['a11y_addedStudiesList']},ga['addedStudies']['map']((gs,gt)=>{const gu=gk(gs['title']),gv=gs['uuid']===gl,gw=dN['vP'](e0['g1']),gx=(0x0,l['zG'])(gw(gs['parameters']['map'](({value:gy})=>gy)),e0['UI'](gy=>gy['join'](',\x20')),e0['g_'](()=>{},l['yR']));return g['createElement'](eK,{'study':gs,'key':gs['uuid'],'index':gt,'isActive':gv,'appendix':gx,'studyTitle':gu,'portal':gd,'isMobile':ga['isMobile'],'onRemoveStudy':gh,'onSelectStudySettings':gi,'localization':gm});}))),[gl,gk,gh,gi,gd,ga['addedStudies'],ga['isMobile'],gm]);return(0x0,eH['A'])({'wrapperRef':gq,'childrenSelector':'li','direction':'vertical','deps':[gr]}),g['createElement'](dz,null,g['createElement'](eh['R'],null,g['createElement'](dA,{'dragging':gb,'isMobile':ga['isMobile']},g['createElement'](dY,{'title':ga['localization']['studiesPopup']['addedStudies'],'headingId':'added_studies_list','actionButton':go},g['createElement'](j['bK'],{'droppableId':'addedStudies'},gs=>g['createElement']('div',{'ref':gs['innerRef']},g['createElement'](g['Fragment'],null,gr,gs['placeholder'])))),g['createElement'](dE,{'role':'group','aria-labelledby':'study_settings'},gp&&g['createElement'](fH,{'studies':gf,'palette':gc,'studySettings':gp,'onChange':gj,'localization':ga['localization'],'onEditScript':gg,'dxScriptEnabled':ga['dxScriptEnabled'],'iconsConfig':ga['iconsConfig'],'keyboardMode':gn})))));});var fK=f(0x6cc7),fL=Object['defineProperty'],fM=Object['defineProperties'],fN=Object['getOwnPropertyDescriptors'],fO=Object['getOwnPropertySymbols'],fP=Object['prototype']['hasOwnProperty'],fQ=Object['prototype']['propertyIsEnumerable'],fR=(ga,gb,gc)=>gb in ga?fL(ga,gb,{'enumerable':!0x0,'configurable':!0x0,'writable':!0x0,'value':gc}):ga[gb]=gc,fS=(ga,gb)=>{for(var gc in gb||(gb={}))fP['call'](gb,gc)&&fR(ga,gc,gb[gc]);if(fO){for(var gc of fO(gb))fQ['call'](gb,gc)&&fR(ga,gc,gb[gc]);}return ga;},fT=(ga,gb)=>fM(ga,fN(gb));const fU=0x320,fV=(0x0,g['memo'])(ga=>{const [gb,gc]=(0x0,g['useState'])(void 0x0),[gd,ge]=(0x0,g['useState'])(ga['selectedStudySettingsUUID']),[gf,gg]=(0x0,g['useState'])(''),[gh,gi]=(0x0,g['useState'])(''),[gj,gk]=(0x0,g['useState'])(0x780),[gl,gm]=(0x0,g['useState'])(!0x1),gn=(0x0,g['useMemo'])(()=>(0x0,l['zG'])(ga['studies'],dN['hX'](gx=>ga['maxCountSelected']>ga['addedStudies']['length']),gx=>(0x0,fK['$'])(gx,gh,[{'path':['title'],'filterByCapitalLetters':!0x0}])),[gh,ga['addedStudies'],ga['maxCountSelected'],ga['studies']]),go=(0x0,g['useCallback'])(()=>gk(window['innerWidth']),[]);(0x0,g['useLayoutEffect'])(()=>{go();const gx=document['createElement']('div');return gx['setAttribute']('class','test'),document['body']['appendChild'](gx),gc(gx),()=>{go(),gx['remove']();};},[go]),(0x0,g['useEffect'])(()=>ge(ga['selectedStudySettingsUUID']),[ga['selectedStudySettingsUUID']]);const gp=(0x0,g['useCallback'])(gx=>gi(gx||''),[]),gq=(0x0,g['useCallback'])(gx=>ga['isMobile']||gj<fU?dM(gx):gx,[ga['isMobile'],gj]),gr=(0x0,g['useCallback'])(gx=>{gg(gx),ge('');},[]),gs=(0x0,g['useCallback'])((gx,gy)=>{gg(''),ge(gy);},[]),gt=(0x0,g['useCallback'])((gx,gy,gz)=>{ga['onAddStudy'](gx,gz),gg(''),ge(gy);},[ga]),gu=(0x0,g['useCallback'])(gx=>{ga['onRemoveStudy'](gx),gd===gx&&ge('');},[gd,ga]),gv=(0x0,g['useCallback'])(gx=>{const {source:gy}=gx;switch(gy['droppableId']){case'addedStudies':gm(!0x0),ge(ga['addedStudies'][gy['index']]['uuid']);break;case'studies':gm(!0x0),gg(gn[gy['index']]['id']);break;}},[ga['addedStudies'],gn]),gw=(0x0,g['useCallback'])(gx=>{const {source:gy,destination:gz}=gx;if(gz){if(gy['droppableId']===gz['droppableId']&&gy['droppableId']!=='studies')ga['onReorderStudies'](gy['index'],gz['index']);else{if(gy['droppableId']!==gz['droppableId'])switch(gz['droppableId']){case'addedStudies':{gt(gf,ga['studies'][gz['index']]['uuid'],gz['index']);break;}case'studies':{gu(ga['addedStudies'][gy['index']]['uuid']);break;}}}}gm(!0x1);},[gf,gt,gu,ga]);return gb?g['createElement'](j['Z5'],{'dragHandleUsageInstructions':'\x20','onDragEnd':gw,'onDragStart':gv},g['createElement'](dx,null,g['createElement'](eJ,fT(fS({},ga),{'isDragging':gl,'filterString':gh,'handleTextFilterChange':gp,'handleSelectStudy':gr,'handleAddStudy':gt,'portal':gb,'currentSelectedStudyId':gf,'getStudyTitle':gq,'studies':gn})),g['createElement'](fJ,fT(fS({},ga),{'isDragging':gl,'currentStudySettingsUUID':gd,'handleRemoveStudy':gu,'handleSelectStudySettings':gs,'portal':gb,'getStudyTitle':gq,'studies':gn})))):null;});var fW=f(0x140d3),fX=f(0xd41);const fY=(0x0,p['ZP'])(fW['G'])`
	${fX['JK']} {
		${ga=>ga['isEditing']&&p['iv']`
				pointer-events: none;
			`}
	}
	${fX['of']} {
		padding: 0;
		display: flex;
		justify-content: space-between;
	}

	${fX['yX']} {
		overflow: auto;

		@media (max-width: 650px) {
			${ga=>ga['isMobile']&&p['iv']`
					height: 73vh;
				`}
		}
	}

	${fX['JK']} {
		box-shadow: 0 25px 30px rgb(0 0 0 / 35%);

		@media (max-width: 650px) {
			${ga=>ga['isMobile']&&p['iv']`
					max-height: 100vh;
					height: 85vh;
				`}
			width: 100%;
		}
	}
`,fZ=(0x0,p['ZP'])(ao['z'])`
	margin: var(--spacer-2) var(--spacer-2) var(--spacer-2) 0;
	font-size: var(--font-size-l);
`,g0=p['ZP']['span']`
	font-size: var(--font-size-l);
	color: var(--dropdown-description-text);
	margin: 14px 14px 0 14px;
`,g1=p['ZP']['div']``;var g2=Object['defineProperty'],g3=Object['getOwnPropertySymbols'],g4=Object['prototype']['hasOwnProperty'],g5=Object['prototype']['propertyIsEnumerable'],g6=(ga,gb,gc)=>gb in ga?g2(ga,gb,{'enumerable':!0x0,'configurable':!0x0,'writable':!0x0,'value':gc}):ga[gb]=gc,g7=(ga,gb)=>{for(var gc in gb||(gb={}))g4['call'](gb,gc)&&g6(ga,gc,gb[gc]);if(g3){for(var gc of g3(gb))g5['call'](gb,gc)&&g6(ga,gc,gb[gc]);}return ga;};const g8=(0x0,g['memo'])(ga=>{const {maxCountSelected:gb,addedStudies:gc,onClose:gd}=ga,{localization:ge}=(0x0,g['useContext'])(eg['E']);return g['createElement'](g['Fragment'],null,g['createElement'](g0,null,gc['length']===gb&&gb+'\x20'+ge['studiesPopup']['studiesMax']),g['createElement'](g1,null,g['createElement'](fZ,{'onClick':gd,'isPrimary':!0x0,'testId':ep['z']['popup_studies_footer_close']},ge['studiesPopup']['close'])));}),g9=(0x0,g['memo'])(ga=>{const {isOpened:gb,studies:gc,maxCountSelected:gd,addedStudies:ge,palette:gf,selectedStudySettingsUUID:gg,onClose:gh,className:gi,onAddedStudy:gj,onRemoveStudy:gk,onChangeStudy:gl,onRemoveAllStudies:gm,onCreateNewScript:gn,onEditScript:go,onDeleteScript:gp,onReorderStudies:gq,dxScriptEnabled:gr,addStudyButtonEnabled:gs,anchorRef:gt,checkIfCustomStudyAdded:gu,isEditing:gv}=ga,gw=window['innerWidth']<0x3e8?0x64:0x2ee,gx=window['innerWidth']>0x3e8?{'width':0x3b3,'height':0x20b}:{'width':window['innerWidth'],'height':window['innerHeight']*0.8},gy=(0x0,g['useContext'])(ei['k']),{keyboardModeEnabled:gz,localization:gA}=(0x0,g['useContext'])(eg['E']),gB=g['createElement'](g8,g7({},ga)),{isMobile:gC}=(0x0,g['useContext'])(ef['El']);return g['createElement'](fY,{'isEditing':gv,'closeBtnAriaLabel':gA['components']['popup']['closeBtn'],'anchorRef':gt,'isModal':!0x0,'header':gA['studiesPopup']['editStudies'],'footer':gB,'isOpened':gb,'isClosable':!0x0,'onRequestClose':gh,'className':gi,'shouldCloseOnClickAway':!0x1,'draggable':!gC,'resizable':!gC,'scrollable':!0x1,'isMobile':gC,'defaultSize':gx,'minWidth':gw,'keyboardMode':gz,'testId':ep['z']['popup_studies']},g['createElement'](fV,{'isMobile':gC,'studies':gc,'palette':gf,'addedStudies':ge,'selectedStudySettingsUUID':gg,'maxCountSelected':gd,'onAddStudy':gj,'onRemoveStudy':gk,'onChangeStudySettings':gl,'onDeleteAll':gm,'localization':gA,'onCreateNewScript':gn,'onEditScript':go,'onDeleteScript':gp,'onReorderStudies':gq,'checkIfCustomStudyAdded':gu,'dxScriptEnabled':gr,'addStudyButtonEnabled':gs,'iconsConfig':gy}));});}}]);})());