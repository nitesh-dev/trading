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
import { DrawingModel } from '@dx-private/dxchart5-modules/dist/drawings/model/drawing.model';
import { Position } from '../view-models/user-data.view-model';
import { DrawingType } from './drawing.model';
import { Drawing } from '@dx-private/dxchart5-modules/dist/drawings/drawings.config';
export type LayerItemType = 'series' | 'drawing' | 'study' | 'group';
export interface CommonLayerItem {
    id: string;
    type: LayerItemType;
    locked?: boolean;
    visible?: boolean;
    groupId?: string;
}
export interface ChartLayersPopoverPosition extends Position {
}
interface DrawingVisibility {
    id: string;
    visible?: boolean;
}
export interface LayerItemsGroup extends CommonLayerItem {
    name: string;
    items: LayerItem[];
    type: 'group';
    itemsVisibility: DrawingVisibility[];
}
export interface DrawingLayerItem extends CommonLayerItem {
    name: string;
    locked: boolean;
    visible: boolean;
    drawing: DrawingModel<DrawingType>;
    type: 'drawing';
}
export declare const isDrawingLayerItem: (item: LayerItem) => item is DrawingLayerItem;
export declare const isGroupLayerItem: (item: LayerItem) => item is LayerItemsGroup;
export declare const plainItems: (items: LayerItem[]) => LayerItem[];
export type LayerItem = LayerItemsGroup | DrawingLayerItem;
/**
 * A tricky function to move items in the Layer Items tree
 * doesn't mutate source array
 * @doc-tags tricky
 * @returns an array with a new tree structure
 */
export declare const moveLayerItem: (_items: LayerItem[], item: LayerItem, position: number, toGroupId?: string) => LayerItem[];
/**
 * A tricky function to update items in the Layer Items tree
 * doesn't mutate source array
 * @doc-tags tricky
 * @returns an array with updated items
 */
export declare const updateItemInLayerItems: (updateFn: (item: LayerItem) => LayerItem, itemToUpdateId: LayerItem['id']) => (items: LayerItem[]) => LayerItem[];
/**
 * Makes a function for creating uniq names/ids based on predicate
 * @param checker, function checks if name is uniq
 * @returns function generates uniq name incrementing order number
 */
export declare const generateUniqFn: (checker: (a: string) => boolean) => (name: string, order: number) => string;
export declare const mapLayerItemToDrawing: (layerItem: DrawingLayerItem) => Drawing<"text" | "callout" | "price_label" | "magnifying_tool_time_range" | "magnifying_tool_rectangle" | "magnifying_tool_time_range_wheel" | "line" | "vertical_line" | "extended_line" | "trend_channel" | "multichannel" | "horizontal_ray" | "path" | "fibonacci_retracements" | "gann_fan" | "vertical_arrow_up" | "vertical_arrow_down" | "info_line" | "ray" | "arrow" | "horizontal_line" | "fibonacci_rays" | "ellipse" | "rectangle" | "fibonacci_ark" | "fibonacci_circles" | "pitchfork" | "brush" | "elliott_wave" | "elliott_correction_wave" | "fibonacci_projection" | "fibonacci_channel" | "gann_box" | "gann_square" | "fibonacci_time_zones" | "regression_trend" | "fibonacci_spiral" | "cycle_brackets" | "fibonacci_time_extension" | "fibonacci_time_ratios" | "curve" | "arc" | "date_price_range" | "price_range" | "date_range" | "icon" | "highlighter">;
export {};
