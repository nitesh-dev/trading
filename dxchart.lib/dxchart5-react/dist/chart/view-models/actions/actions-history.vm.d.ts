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
import { Sink } from '../../../context/sink2';
import { Deque } from '../../../utils/datastructures/Deque';
import { ChartReactConfig } from '../../../config/chart-react-config';
import { MultiChartViewModel } from '../multi-chart.view-model';
export declare const chartActions: readonly ["aggregation_change", "instrument_change", "chart_type_change", "settings_change", "studies_change", "drawings_update", "compare_change", "y_axis_labels_change", "bring_to_front", "bring_to_back", "move_forward", "move_backward"];
export type ActionType = (typeof chartActions)[number];
export interface ChartAction {
    readonly type: ActionType;
    readonly undo: () => void;
    readonly redo: () => void;
}
export interface ActionsHistoryVM {
    readonly undo: () => void;
    readonly redo: () => void;
    readonly pushAction: (action: ChartAction) => void;
    readonly undoDeque: Deque<ChartAction>;
    readonly redoDeque: Deque<ChartAction>;
}
/**
 * @doc-tags chart-react,undo
 */
export declare const createActionsHistoryVM: import("../../../context/context2").Context<Record<"chartReactConfig", ChartReactConfig> & Record<"multiChartViewModel", MultiChartViewModel> & Record<"chartId", string>, Sink<ActionsHistoryVM>>;
