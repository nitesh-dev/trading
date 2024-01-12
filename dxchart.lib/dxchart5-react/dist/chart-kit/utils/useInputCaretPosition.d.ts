/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Ref } from 'react';
interface InputCaretAdditionalProps {
    start: number;
    end: number;
}
export declare const useInputCaretPosition: (ref: Ref<HTMLElement>) => [HTMLInputElement | undefined, InputCaretAdditionalProps];
export {};
