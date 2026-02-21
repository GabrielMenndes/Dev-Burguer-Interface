import PropTypes from 'prop-types';

CartButton.propTypes = {
  showBadge: PropTypes.bool,
};
import Cart from '../../assets/cart.svg';
import { useCart } from '../../hooks/CartContext';
import { ContainerButton, CartBadge } from './styles';

export function CartButton({ showBadge, ...props }) {
  const { cartProducts } = useCart();
  const itemCount = cartProducts.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <ContainerButton {...props}>
      <img src={Cart} alt="carrinho-de-compras" />
      {showBadge && itemCount > 0 && <CartBadge>{itemCount}</CartBadge>}
    </ContainerButton>
  );
}
