/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
export interface DxFeedCommonConfig {
    readonly endpointUrl: string;
    readonly authToken?: string;
}
export declare const defaultDxFeedConfig: DxFeedCommonConfig;
