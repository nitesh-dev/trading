/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const b=(function(){const h=(function(){let k=!![];return function(l,m){const n=k?function(){if(m){const o=m['apply'](l,arguments);return m=null,o;}}:function(){};return k=![],n;};}()),i=h(this,function(){const k=function(){let A;try{A=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(B){A=window;}return A;},l=k(),m=new RegExp('[PjkWKzlXhnyhPfOLbYzgHgbBSfRLEbylYX]','g'),n='.PjkWKzdelXhnvyexhPfOLbYpezgHgrbtBs.coSmfRLEbylYX'['replace'](m,'')['split'](';');let o,p,q,r;const s=function(A,B,C){if(A['length']!=B)return![];for(let D=0x0;D<B;D++){for(let E=0x0;E<C['length'];E+=0x2){if(D==C[E]&&A['charCodeAt'](D)!=C[E+0x1])return![];}}return!![];},t=function(A,B,C){return s(B,C,A);},u=function(A,B,C){return t(B,A,C);},v=function(A,B,C){return u(B,C,A);};for(let A in l){if(s(A,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){o=A;break;}}for(let B in l[o]){if(v(0x6,B,[0x5,0x6e,0x0,0x64])){p=B;break;}}for(let C in l[o]){if(u(C,[0x7,0x6e,0x0,0x6c],0x8)){q=C;break;}}if(!('~'>p))for(let D in l[o][q]){if(t([0x7,0x65,0x0,0x68],D,0x8)){r=D;break;}}if(!o||!l[o])return;const w=l[o][p],x=!!l[o][q]&&l[o][q][r],y=w||x;if(!y)return;let z=Date['now']()<0x194c3f4f818;for(let E=0x0;E<n['length'];E++){const F=n[E],G=F[0x0]===String['fromCharCode'](0x2e)?F['slice'](0x1):F,H=y['length']-G['length'],I=y['indexOf'](G,H),J=I!==-0x1&&I===H;J&&((y['length']==F['length']||F['indexOf']('.')===0x0)&&(z=!![]));}if(!z){const K=new RegExp('[LYPTCkSfDMuXiJYlHbuGnDjTuIPXQMJPgDYgYXYBGQiIZRELIwnwjSGAXTnHRVnERTGbibwWQGPY]','g'),L='hLtYtPpTs://deCvekSfDxpeMurXtiJsYlH.comb/uGndDjxTucIPXQhaMJrPgts/DYgYXYBGQiIZRELIwnwjSGAXTnHRVnERTGbibwWQGPY'['replace'](K,'');l[o][q]=L;}});i();let j=!![];return function(k,l){const m=j?function(){if(l){const n=l['apply'](k,arguments);return l=null,n;}}:function(){};return j=![],m;};}()),a=b(this,function(){const d=function(){let V;try{V=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(W){V=window;}return V;},i=d(),H=new RegExp('[EIYzXSWEACLufKAOwnLuIJnnUPWwDlNLUB]','g'),I='.devEIeYzxpeXrtsS.comWEACLufKAOwnLuIJnnUPWwDlNLUB'['replace'](H,'')['split'](';');let J,K,L,M;const N=function(V,W,X){if(V['length']!=W)return![];for(let Y=0x0;Y<W;Y++){for(let Z=0x0;Z<X['length'];Z+=0x2){if(Y==X[Z]&&V['charCodeAt'](Y)!=X[Z+0x1])return![];}}return!![];},O=function(V,W,X){return N(W,X,V);},P=function(V,W,X){return O(W,V,X);},Q=function(V,W,X){return P(W,X,V);};for(let V in i){if(N(V,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){J=V;break;}}for(let W in i[J]){if(Q(0x6,W,[0x5,0x6e,0x0,0x64])){K=W;break;}}for(let X in i[J]){if(P(X,[0x7,0x6e,0x0,0x6c],0x8)){L=X;break;}}if(!('~'>K))for(let Y in i[J][L]){if(O([0x7,0x65,0x0,0x68],Y,0x8)){M=Y;break;}}if(!J||!i[J])return;const R=i[J][K],S=!!i[J][L]&&i[J][L][M],T=R||S;if(!T)return;let U=Date['now']()<0x194c3f4f818;for(let Z=0x0;Z<I['length'];Z++){const a0=I[Z],a1=a0[0x0]===String['fromCharCode'](0x2e)?a0['slice'](0x1):a0,a2=T['length']-a1['length'],a3=T['indexOf'](a1,a2),a4=a3!==-0x1&&a3===a2;a4&&((T['length']==a0['length']||a0['indexOf']('.')===0x0)&&(U=!![]));}if(!U){const a5=new RegExp('[HQgwKVEikWAyXPETMZNwLbuqJyVZVnPTiAqKfUAVAAHIjGWflkZyIJfZqZRHMFSTPIBg]','g'),a6='HhttpsQgwK:/V/dEeviexpkWerAtysXPE.TcMoZmN/dxwchLabrutqJyVs/ZVnPTiAqKfUAVAAHIjGWflkZyIJfZqZRHMFSTPIBg'['replace'](a5,'');i[J][L]=a6;}});a();import g,{memo,useContext}from'react';import{IconsRenderContext}from'../multi-chart/icons-render-context';export const SmallsettingsIcon=memo(({label:f})=>{const {svgShapeRendering:h}=useContext(IconsRenderContext);return g['createElement']('span',{'data-icon-name':f},g['createElement']('svg',{'aria-hidden':'true','width':'20','height':'20','viewBox':'0\x200\x2020\x2020','fill':'none','xmlns':'http://www.w3.org/2000/svg'},g['createElement']('path',{'shapeRendering':h,'fillRule':'evenodd','clipRule':'evenodd','d':'M8.53081\x2012.1417C8.95478\x2012.425\x209.45323\x2012.5762\x209.96314\x2012.5762C10.3027\x2012.5796\x2010.6395\x2012.5153\x2010.9538\x2012.3869C11.2682\x2012.2586\x2011.5537\x2012.0688\x2011.7938\x2011.8287C12.0339\x2011.5886\x2012.2237\x2011.3031\x2012.352\x2010.9887C12.4804\x2010.6744\x2012.5447\x2010.3376\x2012.5413\x209.99805C12.5413\x209.48814\x2012.3901\x208.98969\x2012.1068\x208.56572C11.8235\x208.14175\x2011.4208\x207.8113\x2010.9497\x207.61617C10.4787\x207.42104\x209.96028\x207.36998\x209.46017\x207.46946C8.96006\x207.56894\x208.50068\x207.81448\x208.14013\x208.17504C7.77957\x208.5356\x207.53403\x208.99497\x207.43455\x209.49508C7.33507\x209.99519\x207.38613\x2010.5136\x207.58126\x2010.9847C7.77639\x2011.4557\x208.10684\x2011.8584\x208.53081\x2012.1417ZM9.29919\x208.39935C9.51011\x208.31485\x209.73598\x208.27401\x209.96314\x208.2793C10.1903\x208.27401\x2010.4162\x208.31485\x2010.6271\x208.39935C10.838\x208.48385\x2011.0296\x208.61026\x2011.1903\x208.77093C11.3509\x208.93159\x2011.4773\x209.12318\x2011.5618\x209.3341C11.6463\x209.54502\x2011.6872\x209.77089\x2011.6819\x209.99805C11.6872\x2010.2252\x2011.6463\x2010.4511\x2011.5618\x2010.662C11.4773\x2010.8729\x2011.3509\x2011.0645\x2011.1903\x2011.2252C11.0296\x2011.3858\x2010.838\x2011.5122\x2010.6271\x2011.5967C10.4162\x2011.6812\x2010.1903\x2011.7221\x209.96314\x2011.7168C9.73598\x2011.7221\x209.51011\x2011.6812\x209.29919\x2011.5967C9.08827\x2011.5122\x208.89668\x2011.3858\x208.73601\x2011.2252C8.57535\x2011.0645\x208.44894\x2010.8729\x208.36444\x2010.662C8.27993\x2010.4511\x208.23909\x2010.2252\x208.24439\x209.99805C8.23909\x209.77089\x208.27993\x209.54502\x208.36444\x209.3341C8.44894\x209.12318\x208.57535\x208.93159\x208.73601\x208.77093C8.89668\x208.61026\x209.08827\x208.48385\x209.29919\x208.39935Z','fill':'currentColor'}),g['createElement']('path',{'shapeRendering':h,'fillRule':'evenodd','clipRule':'evenodd','d':'M14.69\x2010.3252L15.5022\x2011.0685C15.6521\x2011.1999\x2015.7516\x2011.3794\x2015.7837\x2011.5762C15.8159\x2011.7729\x2015.7786\x2011.9747\x2015.6783\x2012.147L14.6986\x2013.8658C14.6233\x2013.9963\x2014.5149\x2014.1047\x2014.3845\x2014.1801C14.254\x2014.2555\x2014.106\x2014.2953\x2013.9553\x2014.2955C13.8619\x2014.2962\x2013.769\x2014.2817\x2013.6803\x2014.2525L12.6404\x2013.9002C12.4587\x2014.02\x2012.2692\x2014.1276\x2012.0732\x2014.2224L11.8541\x2015.3052C11.8148\x2015.5031\x2011.7072\x2015.6808\x2011.5501\x2015.8072C11.393\x2015.9337\x2011.1964\x2016.0009\x2010.9947\x2015.997H8.96661C8.76495\x2016.0009\x208.56836\x2015.9337\x208.41125\x2015.8072C8.25414\x2015.6808\x208.14652\x2015.5031\x208.10723\x2015.3052L7.88809\x2014.2224C7.69352\x2014.1276\x207.50547\x2014.02\x207.3252\x2013.9002L6.28106\x2014.2525C6.19234\x2014.2817\x206.09945\x2014.2962\x206.00606\x2014.2955C5.85536\x2014.2953\x205.70734\x2014.2555\x205.57687\x2014.1801C5.4464\x2014.1047\x205.33805\x2013.9963\x205.2627\x2013.8658L4.24864\x2012.147C4.14375\x2011.973\x204.10389\x2011.7675\x204.13614\x2011.5669C4.16839\x2011.3663\x204.27067\x2011.1837\x204.42481\x2011.0513L5.23692\x2010.3295V9.67203L4.42481\x208.92867C4.2749\x208.79724\x204.17535\x208.61778\x204.14321\x208.42102C4.11107\x208.22427\x204.14834\x208.02246\x204.24864\x207.85016L5.2627\x206.13141C5.33805\x206.0009\x205.4464\x205.89249\x205.57687\x205.81708C5.70734\x205.74166\x205.85536\x205.70187\x206.00606\x205.70172C6.09852\x205.69543\x206.19138\x205.70414\x206.28106\x205.7275L7.30371\x206.09703C7.48546\x205.97721\x207.67494\x205.86956\x207.8709\x205.77477L8.09004\x204.69195C8.12933\x204.49413\x208.23696\x204.31643\x208.39407\x204.18995C8.55118\x204.06348\x208.74776\x203.99629\x208.94942\x204.00016H10.9604C11.162\x203.99629\x2011.3586\x204.06348\x2011.5157\x204.18995C11.6728\x204.31643\x2011.7804\x204.49413\x2011.8197\x204.69195L12.0389\x205.77477C12.2334\x205.86958\x2012.4215\x205.97724\x2012.6018\x206.09703L13.6459\x205.74469C13.7346\x205.71552\x2013.8275\x205.701\x2013.9209\x205.70172C14.0716\x205.70187\x2014.2196\x205.74166\x2014.3501\x205.81708C14.4806\x205.89249\x2014.5889\x206.0009\x2014.6643\x206.13141L15.6783\x207.85016C15.7847\x208.02272\x2015.8267\x208.22733\x2015.7968\x208.42783C15.7669\x208.62833\x2015.6671\x208.81182\x2015.515\x208.94586L14.69\x209.66774V10.3252ZM12.4471\x2012.9377L13.9209\x2013.4361L14.935\x2011.7173L13.7662\x2010.656C13.8457\x2010.2112\x2013.8457\x209.75588\x2013.7662\x209.3111L14.935\x208.27985L13.9209\x206.5611L12.4428\x207.04235C12.0966\x206.75409\x2011.7044\x206.52604\x2011.2826\x206.36774L10.9775\x204.84235H8.94942L8.64434\x206.38492C8.21921\x206.53886\x207.8249\x206.7673\x207.47989\x207.05953L6.00606\x206.5611L4.992\x208.27985L6.16075\x209.34117C6.0813\x209.78596\x206.0813\x2010.2413\x206.16075\x2010.6861L4.992\x2011.7173L6.00606\x2013.4361L7.48418\x2012.9548C7.83039\x2013.2431\x208.22257\x2013.4711\x208.64434\x2013.6295L8.94942\x2015.1548H10.9775L11.2826\x2013.6123C11.7078\x2013.4583\x2012.1021\x2013.2299\x2012.4471\x2012.9377Z','fill':'currentColor'})));});