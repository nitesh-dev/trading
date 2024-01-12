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
import { LayoutViewModel } from '../view-models/layout.view-model';
import { Localization } from '../../config/localization/localization';
import { ChartReactConfig } from '../../config/chart-react-config';
export declare const ChartLayoutDropdownContainer: import("../../context/context2").Context<Record<"layoutViewModel", LayoutViewModel> & Record<"localization", Localization> & Record<"chartReactConfig", ChartReactConfig>, import("react").FunctionComponent<Record<string, any>> | (() => import("react").FunctionComponentElement<{
    children?: import("react").ReactNode;
}>)>;
