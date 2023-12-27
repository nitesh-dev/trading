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
import { ThemeType } from '../../../model/theme.model';
export interface BackgroundMenuThemePopoverProps {
    readonly isOpened: boolean;
    readonly onClose: () => void;
    readonly anchorRef: ReactRef;
    readonly activeTheme: ThemeType;
    readonly onChangeTheme: (theme: ThemeType) => void;
}
export declare const BackgroundMenuThemePopover: React.NamedExoticComponent<BackgroundMenuThemePopoverProps>;
