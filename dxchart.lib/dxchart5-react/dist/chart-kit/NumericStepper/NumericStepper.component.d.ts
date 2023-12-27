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
import { CKSteppableInputProps } from '../SteppableInput/SteppableInput.component';
import { ControlProps } from '../Control/Control';
export interface CKNumericStepperProps extends CKSteppableInputProps, ControlProps<number> {
    readonly step?: number;
    readonly min?: number;
    readonly max?: number;
    readonly formatter?: (v: number) => string;
    readonly placeholder?: string;
    readonly SteppableInput?: ComponentType<CKSteppableInputProps>;
    readonly className?: string;
    readonly ariaLabel?: string;
    readonly onValidate?: (value: string) => boolean;
}
export declare const NumericStepper: React.MemoExoticComponent<React.ForwardRefExoticComponent<Pick<React.PropsWithChildren<CKNumericStepperProps>, "value" | "error" | "key" | "min" | "children" | "className" | "placeholder" | "tabIndex" | "onFocus" | "onBlur" | "onKeyDown" | "onClick" | "onMouseEnter" | "onMouseLeave" | "step" | "onValueChange" | "max" | "ariaLabel" | "isDisabled" | "isIncrementButtonDisabled" | "isDecrementButtonDisabled" | "onIncrement" | "onDecrement" | "onClear" | "incrementIcon" | "decrementIcon" | "clearIcon" | "Input" | "ButtonIcon" | "ClearButtonIcon" | "formatter" | "SteppableInput" | "onValidate"> & React.RefAttributes<HTMLDivElement>>>;
