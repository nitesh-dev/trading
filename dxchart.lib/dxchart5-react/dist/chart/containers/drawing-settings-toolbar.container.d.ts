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
import { ReactNode } from 'react';
import { Localization } from '../../config/localization/localization';
import { ChartConfiguratorViewModel } from '../view-models/chart-configurator.view-model';
import { ChartDataViewModel } from '../view-models/data/chart-data.view-model';
import { ChartDrawingViewModel } from '../view-models/drawings/drawing.view-model';
import { TimeZoneViewModel } from '../view-models/time-zone.view-model';
export interface DrawingSettingsToolbarContainerProps {
    readonly settingsIcon?: ReactNode;
    readonly removeIcon?: ReactNode;
}
export declare const DrawingSettingsToolbarContainer: import("../../context/context2").Context<Record<"drawingViewModel", ChartDrawingViewModel> & Record<"chartDataViewModel", ChartDataViewModel> & Record<"chartConfiguratorViewModel", ChartConfiguratorViewModel> & Record<"timeZoneViewModel", TimeZoneViewModel> & Record<"colorPalette", string[]> & Record<"localization", Localization>, import("react").FC<DrawingSettingsToolbarContainerProps>>;
