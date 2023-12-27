/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React, { ComponentType } from 'react';
import { TimeInputValue } from './TimeInput.model';
import { ControlProps } from '../Control/Control';
import { CKSteppableInputProps } from '../SteppableInput/SteppableInput.component';
import { CKInputProps } from '../Input/Input.component';
interface TimeInputConfig {
    withSeconds?: boolean;
    withPeriodType?: boolean;
    isHideSeconds?: boolean;
}
export type TimeInputProps = TimeInputConfig & CKSteppableInputProps & ControlProps<TimeInputValue>;
export type TimeInputFullProps = TimeInputProps & {
    SteppableInput: ComponentType<CKSteppableInputProps>;
};
export declare const SITimeInput: React.MemoExoticComponent<React.ForwardRefExoticComponent<Pick<React.PropsWithChildren<CKInputProps>, "value" | "error" | "pattern" | "name" | "key" | "min" | "id" | "children" | "type" | "className" | "placeholder" | "tabIndex" | "role" | "onFocus" | "onBlur" | "onChange" | "onKeyDown" | "onKeyPress" | "onKeyUp" | "onClick" | "onMouseDown" | "onMouseEnter" | "onMouseLeave" | "onMouseUp" | "onTouchCancel" | "onTouchEnd" | "onTouchMove" | "onTouchStart" | "onWheel" | "testId" | "onValueChange" | "max" | "ariaLabel" | "isDisabled" | "isReadOnly" | "autofocus" | "ariaDescribedby"> & React.RefAttributes<HTMLElement>>>;
export declare const TimeInput: React.MemoExoticComponent<(props: TimeInputProps) => JSX.Element>;
export {};
