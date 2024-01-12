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
import React, { CSSProperties, ForwardedRef, ReactNode } from 'react';
export interface CKMenuProps {
    readonly className?: string;
    readonly style?: CSSProperties;
    readonly onItemSelect?: (value: string | number) => void;
    readonly onTouchStart?: (value: string | number) => void;
    readonly onToggle?: (value: boolean) => void;
    readonly ref?: ForwardedRef<HTMLUListElement>;
    readonly testId?: string;
    readonly ariaLabel?: string;
    readonly navigateWithArrows?: boolean;
    readonly children?: ReactNode;
}
export interface CKMenuChildProps {
    readonly onSelect?: (value: string | number) => void;
    readonly onTouchStart?: (value: string | number) => void;
    readonly onKeyDown?: (value: string | number) => void;
    readonly ref?: ForwardedRef<HTMLLIElement>;
}
export declare const MENU_ID = "menu_id";
export declare const Menu: React.FC<CKMenuProps>;
