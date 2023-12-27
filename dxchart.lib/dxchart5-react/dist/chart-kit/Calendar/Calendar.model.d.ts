/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
export declare const RangeSide: {
    readonly From: 0;
    readonly To: 1;
};
export type RangeSideType = (typeof RangeSide)[keyof typeof RangeSide];
export interface DateRangeValue {
    readonly from: Date | undefined;
    readonly to: Date | undefined;
}
