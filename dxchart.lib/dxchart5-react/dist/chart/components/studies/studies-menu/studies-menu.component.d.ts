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
import { RCMenuProps } from '../../../../chart-kit/Popover/popover-menu-generic';
import { Localization } from '../../../../config/localization/localization';
import { StudiesSettingsProps } from '../studies-settings/studies-settings.component';
export interface StudiesMenuProps extends RCMenuProps {
    readonly localization: Localization;
    readonly bringToFrontStudy: (uuid: string) => void;
    readonly sendToBackStudy: (uuid: string) => void;
    readonly onDuplicateStudy: (uuid: string) => void;
    readonly onOpenSettings: (uuid: string) => void;
    readonly studiesSettingsProps: StudiesSettingsProps;
}
export declare const StudiesMenu: React.NamedExoticComponent<StudiesMenuProps>;
