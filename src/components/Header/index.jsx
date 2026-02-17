import { useNavigate, useResolvedPath } from 'react-router-dom';

import { BasketIcon, UserCircleIcon } from '@phosphor-icons/react';

import { useUser } from '../../hooks/UserContext.jsx';
import {
  Container,
  HeaderLink,
  LinkContainer,
  Logout,
  Navigation,
  Options,
  Profile,
  Content,
} from './styles';

export function Header() {
  const navigate = useNavigate();
  const { logout, userInfo } = useUser();

  const { pathname } = useResolvedPath();

  function logautUser() {
    logout();
    navigate('/login');
  }
  return (
    <Container>
      <Content>
        <Navigation>
          <div>
            <HeaderLink
              to="/"
              $isActive={pathname === '/'}
              className="nav-link"
            >
              Home
            </HeaderLink>
            <hr></hr>
            <HeaderLink
              to="/cardapio"
              $isActive={pathname === '/cardapio'}
              className="nav-link"
            >
              Cardápio
            </HeaderLink>
          </div>
        </Navigation>
        <Options>
          <Profile>
            <UserCircleIcon color="#fff" size={24} />
            <div>
              <p>
                Olá, <span> {userInfo.name} </span>{' '}
              </p>
              <Logout onClick={logautUser}>Sair</Logout>
            </div>
          </Profile>
          <LinkContainer>
            <HeaderLink
              to="/carrinho"
              aria-label="Carrinho"
              className="cart-link"
            >
              <BasketIcon color="#fff" size={24} />
            </HeaderLink>
            <HeaderLink to="/carrinho" className="cart-link">
              Carrinho
            </HeaderLink>
          </LinkContainer>
        </Options>
      </Content>
    </Container>
  );
}
