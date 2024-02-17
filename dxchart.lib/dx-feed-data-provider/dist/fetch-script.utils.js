/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import{__awaiter}from'tslib';const fetchScript=a=>new Promise((b,c)=>{const d=document['createElement']('script');d['src']=a,d['async']=!![],d['onerror']=()=>c(undefined),d['onload']=()=>b(undefined),document['head']['appendChild'](d);});export const fetchScriptsSequentially=a=>__awaiter(void 0x0,void 0x0,void 0x0,function*(){for(const b of a){yield fetchScript(b);}});