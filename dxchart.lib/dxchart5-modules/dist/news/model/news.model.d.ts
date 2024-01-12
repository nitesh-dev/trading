/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
export interface NewsPerCandle {
    htId: number;
    news: News[];
    timestamp: number;
}
export interface HoveredNews extends NewsPerCandle {
    x: number;
    y: number;
}
export interface News {
    readonly id: string;
    readonly timestamp: number;
}
