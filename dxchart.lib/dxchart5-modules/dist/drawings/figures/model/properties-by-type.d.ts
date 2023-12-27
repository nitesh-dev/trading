/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { EllipseProperties } from '../Ellipse';
import { ExtendedProperties } from '../Extended';
import { FibonacciArkProperties } from '../FibonacciArk';
import { FibonacciRaysProperties } from '../FibonacciRays';
import { GannFanProperties } from '../GannFan';
import { FibonacciRetracementsProperties } from '../FibonacciRetracements';
import { HorizontalLineFigureProperties } from '../HorizontalLine';
import { LineFigureProperties } from '../LineFigure';
import { MultiChannelProperties } from '../MultiChannel';
import { PitchforkProperties } from '../Pitchfork';
import { RectangleProperties } from '../Rectangle';
import { TextProperties } from '../Text/Text';
import { TrendProperties } from '../Trend';
import { TrendChannelProperties } from '../TrendChannel';
import { VerticalArrowProperties } from '../VerticalArrowUp';
import { GannBoxProperties } from '../GannBox';
import { VerticalLineProperties } from '../VerticalLine';
import { MagnifyingToolRectangleProperties } from '../../tools/MagnifyingToolRectangle';
import { MagnifyingToolTimeRangeProperties } from '../../tools/MagnifyingToolTimeRange';
import { HorizontalRayProperties } from '../HorizontalRay';
import { CalloutProperties } from '../Text/Callout';
import { CurveProperties } from '../Curve';
import { ArcProperties } from '../Arc';
import { BrushProperties } from '../Brush';
import { PathProperties } from '../Path';
import { DatePriceRangeProperties } from '../DatePriceRange';
import { PriceLabelProperties } from '../Text/PriceLabel';
import { IconProperties } from '../Icon';
import { ElliottWaveProperties } from '../ElliottImpulseWave';
import { FibonacciProjectionProperties } from '../FibonacciProjection';
import { FibonacciChannelProperties } from '../FibonacciChannel';
import { FibonacciTimeZonesProperties } from '../FibonacciTimeZones';
import { FibonacciCirclesProperties } from '../FibonacciCircles';
import { GannSquareProperties } from '../GannSquare';
import { RegressionTrendProperties } from '../RegressionTrend';
import { FibonacciSpiralProperties } from '../FibonacciSpiral';
import { CycleBracketsProperties } from '../CycleBrackets';
import { FibonacciTimeExtensionProperties } from '../FibonacciTimeExtension';
import { FibonacciTimeRatiosProperties } from '../FibonacciTimeRatios';
import { DrawingType } from '../../model/drawing-types';
import { MagnifyingToolTimeRangeWheelProperties } from '../../tools/MagnifyingToolTimeRangeWheel';
export interface PropertiesByType extends Record<DrawingType, unknown> {
    trend: TrendProperties;
    line: LineFigureProperties;
    horizontal_line: HorizontalLineFigureProperties;
    horizontal_ray: HorizontalRayProperties;
    vertical_line: VerticalLineProperties;
    extended_line: LineFigureProperties;
    ellipse: EllipseProperties;
    pitchfork: PitchforkProperties;
    extended: ExtendedProperties;
    ray: LineFigureProperties;
    info_line: LineFigureProperties;
    curve: CurveProperties;
    arc: ArcProperties;
    brush: BrushProperties;
    path: PathProperties;
    date_price_range: DatePriceRangeProperties;
    date_range: DatePriceRangeProperties;
    price_range: DatePriceRangeProperties;
    highlighter: BrushProperties;
    icon: IconProperties;
    rectangle: RectangleProperties;
    gann_box: GannBoxProperties;
    gann_square: GannSquareProperties;
    fibonacci_ark: FibonacciArkProperties;
    fibonacci_circles: FibonacciCirclesProperties;
    fibonacci_rays: FibonacciRaysProperties;
    gann_fan: GannFanProperties;
    trend_channel: TrendChannelProperties;
    multichannel: MultiChannelProperties;
    fibonacci_retracements: FibonacciRetracementsProperties;
    fibonacci_time_zones: FibonacciTimeZonesProperties;
    text: TextProperties;
    callout: CalloutProperties;
    price_label: PriceLabelProperties;
    vertical_arrow_up: VerticalArrowProperties;
    vertical_arrow_down: VerticalArrowProperties;
    arrow: LineFigureProperties;
    magnifying_tool_rectangle: MagnifyingToolRectangleProperties;
    magnifying_tool_time_range: MagnifyingToolTimeRangeProperties;
    magnifying_tool_time_range_wheel: MagnifyingToolTimeRangeWheelProperties;
    elliott_wave: ElliottWaveProperties;
    elliott_correction_wave: ElliottWaveProperties;
    fibonacci_projection: FibonacciProjectionProperties;
    fibonacci_channel: FibonacciChannelProperties;
    regression_trend: RegressionTrendProperties;
    fibonacci_spiral: FibonacciSpiralProperties;
    cycle_brackets: CycleBracketsProperties;
    fibonacci_time_extension: FibonacciTimeExtensionProperties;
    fibonacci_time_ratios: FibonacciTimeRatiosProperties;
}
