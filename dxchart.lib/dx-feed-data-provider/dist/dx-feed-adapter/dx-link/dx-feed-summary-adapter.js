/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import{subscriptionFactory}from'./dx-link-adapter.factory';export const createDxFeedSummaryAdapter=a=>{const {createSubscription:b,unsubscribeAllInternal:c}=subscriptionFactory(a,'Summary');return{'subscribeSummaries':b,'unsubscribeAllInternal':c};};