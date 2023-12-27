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
import React from 'react';
import { StudiesRCMenuItem } from '../../../containers/studies-menu/studies-menu.container';
export interface StudiesMenuContentProps {
    readonly items: StudiesRCMenuItem[][];
    readonly onClose: () => void;
}
export declare const StudiesMenuContent: React.NamedExoticComponent<StudiesMenuContentProps>;
