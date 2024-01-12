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
import { PopoverCoordinates } from './Popover.model';
export interface RCMenuProps {
    readonly isOpened: boolean;
    readonly onClose: () => void;
    readonly position: PopoverCoordinates;
}
export declare const RCMenuPopover: import("styled-components").StyledComponent<import("react").FC<import("react").PropsWithChildren<import("./Popover.component").CKPopoverProps>>, any, {}, never>;
