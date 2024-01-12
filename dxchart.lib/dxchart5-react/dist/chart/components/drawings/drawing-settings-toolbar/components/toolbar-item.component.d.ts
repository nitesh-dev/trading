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
import React, { ReactNode } from 'react';
export interface ToolbarItemProps {
    readonly padding?: boolean;
    readonly margin?: boolean;
    readonly children?: ReactNode;
    readonly className?: string;
}
export declare const ToolbarItem: React.NamedExoticComponent<ToolbarItemProps>;
