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
import React, { ReactNode } from 'react';
import { CKPopoverProps } from '../Popover/Popover.lazy-component';
export type TooltipProps = CKPopoverProps & {
    readonly children: ReactNode | ReactNode[];
};
export declare const Tooltip: React.NamedExoticComponent<TooltipProps>;
