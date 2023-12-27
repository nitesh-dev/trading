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
import { UserDataProvider, UserData } from '../user-data-provider';
interface UserDataProviderOptionsLS {
    expirationPeriod: number;
}
export interface UserDataProviderLS extends UserDataProvider {
    getUserDataSync: () => UserData | null;
}
export declare const USER_DATA_KEY = "userData";
export declare const createLocalStorageUserDataProvider: (storageKey?: string, options?: UserDataProviderOptionsLS) => UserDataProviderLS;
export {};
