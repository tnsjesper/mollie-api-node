/**
 * @docs https://docs.mollie.com/reference/v2/subscriptions-api/list-subscriptions
 */
import createMollieClient, { List, Subscription } from '@mollie/api-client';

const mollieClient = createMollieClient({ apiKey: 'test_dHar4XY7LxsDOtmnkVtjNVWXLSlXsM' });

(async () => {
  try {
    const subscriptions: List<Subscription> = await mollieClient.customersSubscriptions.all({
      customerId: 'cst_pzhEvnttJ2',
    });

    console.log(subscriptions);
  } catch (error) {
    console.warn(error);
  }
})();
