import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(
  'pk_test_51T0VSMPT83mAAFv6WeczOxeWbfar7fYf2xhZEpHcmQt4OxDvn5MzIhi9Dfqx2XcGPoOdVXsRyR0sVJrt4HuY9NFG00pnGoPZh2',
);

export default stripePromise;
