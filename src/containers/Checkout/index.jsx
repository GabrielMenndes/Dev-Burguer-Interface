import { useLocation } from 'react-router-dom';

import { Elements } from '@stripe/react-stripe-js';

import CheckoutForm from '../../components/Stripe/CheckoutForm';
import stripePromise from '../../config/stripeConfig';

export function Checkout() {
  const {
    state: { clientSecret },
  } = useLocation();

  if (!clientSecret) {
    return <div>Error, Volte e Tente Novamente!</div>;
  }

  return (
    <Elements stripe={stripePromise} options={{ clientSecret }}>
      <CheckoutForm />
    </Elements>
  );
}
