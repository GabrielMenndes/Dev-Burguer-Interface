import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import '../styles.css';

import {
  PaymentElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

import { useCart } from '../../../hooks/CartContext';
import { useUser } from '../../../hooks/UserContext';
import { api } from '../../../services/api';

// import { useCart } from '../../../hooks';
// import { api } from '../../../services/api';

export default function CheckoutForm() {
  const { cartProducts, clearCart } = useCart();
  const { userInfo } = useUser();

  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const {
    state: { clientSecret, dpmCheckerLink },
  } = useLocation();

  console.log('clientSecret recebido:', clientSecret);
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      console.error('Stripe ou Elements com falha, Tente Novamente.');
      return;
    }

    setIsLoading(true);

    // Verifica se já existe um clientSecret e status succeeded no localStorage/sessionStorage (ou outro mecanismo, se desejar)
    // Aqui, para simplificar, sempre tenta confirmar, mas se já estiver succeeded, só redireciona
    let paymentIntent;
    let error;
    try {
      const result = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/pedido-confirmado`,
        },
        redirect: 'if_required',
      });
      error = result.error;
      paymentIntent = result.paymentIntent;
    } catch (e) {
      error = e;
      paymentIntent = undefined;
    }

    if (paymentIntent && paymentIntent.status === 'succeeded') {
      // Pagamento confirmado, agora cria o pedido no backend
      try {
        await api.post('/orders', {
          products: cartProducts.map((item) => ({
            id: item.id,
            name: item.name,
            quantity: item.quantity,
            price: item.price,
          })),
          user: userInfo?._id || userInfo?.id,
          paymentIntentId: paymentIntent.id,
        });
      } catch (err) {
        toast.error('Erro ao salvar pedido no banco.');
        // Continua fluxo para não travar usuário
      }
      setTimeout(() => {
        clearCart();
        navigate(
          `/complete?payment_intent_client_secret=${paymentIntent.client_secret}`,
        );
      }, 3000);
      toast.success('Pedido Realizado com Sucesso! 🎉');
      setIsLoading(false);
      return;
    }

    if (error) {
      console.error('Erro detalhado:', error);
      toast.error(error.message || 'Erro ao processar pagamento');
      setMessage(error.message || 'Erro ao processar pagamento');
      setIsLoading(false);
      return;
    }

    if (paymentIntent && paymentIntent.client_secret) {
      navigate(
        `/complete?payment_intent_client_secret=${paymentIntent.client_secret}`,
      );
    } else {
      toast.error('Erro ao processar pagamento: clientSecret inválido.');
    }

    setIsLoading(false);
  };

  const paymentElementOptions = {
    layout: 'accordion',
  };

  return (
    <div className="container">
      <form id="payment-form" onSubmit={handleSubmit}>
        <PaymentElement id="payment-element" options={paymentElementOptions} />
        <button
          disabled={isLoading || !stripe || !elements}
          id="submit"
          className="button"
        >
          <span id="button-text">
            {isLoading ? (
              <div className="spinner" id="spinner"></div>
            ) : (
              'Pagar Agora'
            )}
          </span>
        </button>
        {message && <div id="payment-message">{message}</div>}
        {dpmCheckerLink && (
          <a
            href={dpmCheckerLink}
            target="_blank"
            rel="noopener noreferrer"
            className="link-form"
          >
            [Test Mode] Check payment methods configuration
          </a>
        )}
      </form>
    </div>
  );
}
