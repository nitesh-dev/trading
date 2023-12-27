/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { DrawingType } from '../model/drawing-types';
import { ElliottWave } from './ElliottImpulseWave';
export declare class ElliottCorrectionWave extends ElliottWave {
    readonly type: DrawingType;
}