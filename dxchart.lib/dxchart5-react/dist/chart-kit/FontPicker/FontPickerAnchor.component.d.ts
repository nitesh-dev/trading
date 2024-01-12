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
import * as React from 'react';
import { CKDropdownAnchorProps } from '../Dropdown/Dropdown';
export type FontPickerAnchorProps = CKDropdownAnchorProps<{
    value: string | number;
}>;
export declare const FontPickerAnchor: React.MemoExoticComponent<React.ForwardRefExoticComponent<Pick<FontPickerAnchorProps, "key" | "children" | "className" | "onKeyDown" | "onClick" | "additionalProps"> & React.RefAttributes<HTMLButtonElement>>>;
