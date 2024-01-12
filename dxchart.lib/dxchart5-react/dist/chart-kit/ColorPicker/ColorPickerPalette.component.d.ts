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
import { FC } from 'react';
import { ControlProps } from '../Control/Control';
import { ColorPickerColorItemTestIds } from './ColorPickerColorItem.component';
export interface ColorPickerPaletteProps extends ControlProps<string> {
    readonly palette: string[];
    readonly className?: string;
    readonly isDefaultColor: (color: string) => boolean;
    readonly onTogglePalette: (isPaletteOpened: boolean | undefined) => void;
    readonly applyCreatedColor: (color: string) => void;
    readonly isPaletteOpened: boolean;
    readonly portal: HTMLElement;
    readonly createdColor: string;
    readonly testIds?: ColorPickerColorItemTestIds;
}
export declare const ColorPickerPalette: FC<ColorPickerPaletteProps>;
