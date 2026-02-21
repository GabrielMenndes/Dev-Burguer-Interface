import { useNavigate, useResolvedPath } from 'react-router-dom';

import { BasketIcon } from '@phosphor-icons/react';

import { useCart } from '../../hooks/CartContext';
import { useUser } from '../../hooks/UserContext.jsx';
import { CartIconContainer, CartBadgeHeader } from './styles';
import {
  Container,
  HeaderLink,
  LinkContainer,
  Logout,
  Navigation,
  Profile,
  Content,
  Separator,
  ProfileName,
} from './styles';

export function Header() {
  const navigate = useNavigate();
  const { logout, userInfo } = useUser();
  const { cartProducts } = useCart();
  const itemCount = cartProducts.reduce((acc, item) => acc + item.quantity, 0);
  const { pathname } = useResolvedPath();

  function logautUser() {
    logout();
    navigate('/login');
  }

  return (
    <Container>
      <Content>
        <Navigation>
          <HeaderLink to="/" $isActive={pathname === '/'} className="nav-link">
            Home
          </HeaderLink>
          <Separator />
          <HeaderLink
            to="/cardapio"
            $isActive={pathname === '/cardapio'}
            className="nav-link"
          >
            Cardápio
          </HeaderLink>
        </Navigation>
        <LinkContainer>
          <Profile>
            <span style={{ color: '#fff', fontWeight: 300 }}>Olá,</span>
            <ProfileName>{userInfo.name}</ProfileName>
            <Logout className="profile-logout" onClick={logautUser}>
              Sair
            </Logout>
          </Profile>

          <HeaderLink
            to="/carrinho"
            aria-label="Carrinho"
            className="cart-link"
          >
            <CartIconContainer>
              <BasketIcon color="#fff" size={25} />
              {itemCount > 0 && <CartBadgeHeader>{itemCount}</CartBadgeHeader>}
            </CartIconContainer>
          </HeaderLink>
          <HeaderLink to="/carrinho" className="cart-link">
            Carrinho
          </HeaderLink>
        </LinkContainer>
      </Content>
    </Container>
  );
}
