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
import React from 'react';
import { StudiesRCMenuItem } from '../../../containers/studies-menu/studies-menu.container';
export interface StudiesMenuGroupProps {
    readonly items: StudiesRCMenuItem[];
    readonly showDivider: boolean;
    readonly groupIdx: number;
    readonly onItemSelect: (value: string | number, groupIdx: number) => void;
}
export declare const StudiesMenuGroup: React.NamedExoticComponent<StudiesMenuGroupProps>;
