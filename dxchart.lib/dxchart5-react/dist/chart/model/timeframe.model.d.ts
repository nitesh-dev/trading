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
import { Eq } from 'fp-ts/Eq';
import { TimeFrame } from '../view-models/timeframe.view-model';
export type TimestampRange = [number, number];
export type TimeUnits = [number, number];
export declare const timeframeEq: Eq<TimeFrame>;
