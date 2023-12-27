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
import { Position } from '../../chart/model/trading/position.model';
export interface PositionProvider {
    observePositions(symbol: string, dataCallback: (positions: Position[]) => void): void;
    closePosition(symbol: string, id: string): Promise<void>;
}
