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
/// <reference types="react" />
export declare const SimpleNumericStepperInputStyled: import("styled-components").StyledComponent<import("react").MemoExoticComponent<import("react").ForwardRefExoticComponent<Pick<import("react").PropsWithChildren<import("../Input/Input.component").CKInputProps>, "value" | "error" | "pattern" | "name" | "key" | "min" | "id" | "type" | "children" | "className" | "placeholder" | "tabIndex" | "role" | "onFocus" | "onBlur" | "onChange" | "onKeyDown" | "onKeyPress" | "onKeyUp" | "onClick" | "onMouseDown" | "onMouseEnter" | "onMouseLeave" | "onMouseUp" | "onTouchCancel" | "onTouchEnd" | "onTouchMove" | "onTouchStart" | "onWheel" | "testId" | "onValueChange" | "ariaLabel" | "max" | "isDisabled" | "isReadOnly" | "autofocus" | "ariaDescribedby"> & import("react").RefAttributes<HTMLDivElement>>>, any, {}, never>;
interface SimpleNumericStepperContainerStyledProps {
    readonly disabled?: boolean;
    readonly innerWidth: number;
    readonly orientation: 'h' | 'v';
}
interface SimpleNumericStepperLabelStyledProps {
    readonly isDisabled?: boolean;
}
export declare const SimpleNumericStepperContainerStyled: import("styled-components").StyledComponent<"label", any, SimpleNumericStepperContainerStyledProps, never>;
export declare const SimpleNumericStepperLabelStyled: import("styled-components").StyledComponent<"span", any, SimpleNumericStepperLabelStyledProps, never>;
export declare const SimpleNumericStepperControlStyled: import("styled-components").StyledComponent<"span", any, {}, never>;
export declare const SimpleNumericStepperUnitControl: import("styled-components").StyledComponent<"span", any, {}, never>;
export {};
