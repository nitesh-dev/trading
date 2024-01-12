/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
export declare const canvasPropertiesMap: {
    readonly PROP_VISIBLE: "visible";
    readonly PROP_LINE_COLOR: "lineColor";
    readonly PROP_LINE_CAP: "lineCap";
    readonly PROP_LINE_WIDTH: "lineWidth";
    readonly PROP_LINE_DASH: "lineDash";
    readonly PROP_FILL_STYLE: "fillStyle";
    readonly PROP_OPACITY: "opacity";
    readonly PROP_COEFFICIENT: "coefficient";
    readonly PROP_SHOW_PRICE_LABEL: "showPrice";
    readonly PROP_PRICE_LABEL_PLACEMENT: "pricePlacement";
    readonly PROP_SHOW_PRICE_CHANGE_ABS: "showPriceChangeAbs";
    readonly PROP_SHOW_PRICE_CHANGE_DISTANCE: "showPriceChangeDistance";
    readonly PROP_SHOW_PRICE_CHANGE_PERCENT: "showPriceChangePercent";
    readonly PROP_SHOW_COEF_LABEL: "showCoefficient";
    readonly PROP_COEF_LABEL_PLACEMENT: "coefficientPlacement";
    readonly PROP_LABELS_SIDE_PLACEMENT: "sidePlacement";
    readonly PROP_LABELS_TO_THE_LINE_PLACEMENT: "placementToTheLine";
    readonly PROP_EXTEND_LEFT: "extendLeft";
    readonly PROP_EXTEND_RIGHT: "extendRight";
    readonly PROP_ARROW_START: "start";
    readonly PROP_ARROW_END: "end";
    readonly PROP_ARROW_LENGTH: "length";
    readonly PROP_ARROW_ANGLE: "angle";
    readonly PROP_FILL_BACKGROUND: "fillBackground";
    readonly PROPERTY_PART_TYPE_BASE_LINE: "baseLine";
    readonly PROPERTY_PART_TYPE_COEF_LINE: "coefLine";
    readonly PROPERTY_BLOCK_TYPE_TEXT: "text";
    readonly PROPERTY_BLOCK_TYPE_LABELS: "labels";
    readonly PROPERTY_BLOCK_TYPE_FIGURE_STYLE: "figureStyle";
    readonly PROP_LABEL_PLACEMENT_LEFT: "left";
    readonly PROP_LABEL_PLACEMENT_RIGHT: "right";
    readonly PROP_LABEL_PLACEMENT_TOP: "top";
    readonly PROP_LABEL_PLACEMENT_BOTTOM: "bottom";
    readonly PROP_SHOW_BARS_BOX: "showBars";
    readonly PROP_SHOW_TIME_DIFF_BOX: "showTimeDiff";
    readonly PROP_SHOW_DISTANCE_BOX: "showDistance";
    readonly PROP_SHOW_ANGLE_BOX: "showAngle";
    readonly PROP_POSITION_BOX: "position";
    readonly PROP_POSITION_LEFT_BOX: "left";
    readonly PROP_POSITION_RIGHT_BOX: "right";
    readonly PROP_POSITION_CENTER_BOX: "center";
    readonly PROP_POSITION_MIDDLE_BOX: "middle";
    readonly PROP_TOP_PLACEMENT_BOX: "top";
    readonly PROP_BOTTOM_PLACEMENT_BOX: "bottom";
};
export type canvasProperties = (typeof canvasPropertiesMap)[keyof typeof canvasPropertiesMap];
export default canvasPropertiesMap;
