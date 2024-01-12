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
import { ChartReactConfig } from '../../config/chart-react-config';
import { DxScriptEditViewModel } from '../view-models/dx-script-edit.view-model';
import { StudiesSettingsViewModel } from '../view-models/studies/studies-settings.view-model';
export declare const StudiesSettingsContainer: import("../../context/context2").Context<Record<"dxScriptEditViewModel", DxScriptEditViewModel> & Record<"localization", import("../../config/localization/localization").Localization> & Record<"studiesSettingsViewModel", StudiesSettingsViewModel> & Record<"chartReactConfig", ChartReactConfig> & Record<"colorPalette", string[]>, import("react").FC<Record<string, any>>>;
