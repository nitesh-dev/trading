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
import { Localization } from '../../config/localization/localization';
import { ChartWithModules } from '../components/canvas-chart-renderer/chart-with-modules';
export declare const TextDrawingContainer: import("../../context/context2").Context<Record<"multiChartViewModel", import("../view-models/multi-chart.view-model").MultiChartViewModel> & Record<"chart", ChartWithModules> & Record<"drawingViewModel", import("../view-models/drawings/drawing.view-model").ChartDrawingViewModel> & Record<"localization", Localization>, import("react").FC<Record<string, any>>>;
