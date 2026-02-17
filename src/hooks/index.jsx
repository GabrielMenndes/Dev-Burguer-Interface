import PropTypes from 'prop-types';

import { CartProvider, useCart } from './CartContext';
import { UserProvider } from './UserContext';

const AppProvider = ({ children }) => {
  return (
    <UserProvider>
      <CartProvider>{children}</CartProvider>
    </UserProvider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { useCart };
export default AppProvider;
