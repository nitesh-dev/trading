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
import { OrderProps } from './components/order.component';
interface PositionStyledProps extends OrderProps {
    readonly positive: boolean;
}
interface PositionContainerStyledProps {
    readonly yCoord: number;
    readonly disabled: boolean | undefined;
}
export declare const PositionContainerStyled: import("styled-components").StyledComponent<"div", any, PositionContainerStyledProps, never>;
export declare const PositionStyled: import("styled-components").StyledComponent<import("react").MemoExoticComponent<(props: OrderProps) => JSX.Element>, any, PositionStyledProps, never>;
interface PositionSectionProps {
    readonly positive: boolean;
}
export declare const PositionSectionDelimiter: import("styled-components").StyledComponent<"div", any, import("./components/order.styled").OrderDelimiterStyledProps & PositionSectionProps, never>;
export declare const PositionSectionAltStyled: import("styled-components").StyledComponent<"div", any, PositionSectionProps, never>;
export {};
