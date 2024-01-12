/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import PlChart from './plChart';
export declare const attachPLComponent: <T extends PlChart>(_chart: T) => T & PlChart;
