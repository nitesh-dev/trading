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
import React, { MouseEventHandler, ReactNode, Ref } from 'react';
import { LineDash, LineWidth } from '../../../../chart/model/drawing.model';
export interface CKLineStyleSquareAnchorProps {
    readonly isOpened?: boolean;
    readonly caretIcon?: ReactNode;
    readonly valueText?: ReactNode;
    readonly value?: string | number | Array<string | number>;
    readonly onClick?: MouseEventHandler;
    readonly isDisabled?: boolean;
    readonly ref?: Ref<HTMLButtonElement>;
    readonly className?: string;
    readonly lineWidth: LineWidth;
    readonly lineDash: LineDash;
    readonly children?: ReactNode;
}
export declare const LineStyleSquareAnchor: React.FC<CKLineStyleSquareAnchorProps>;
