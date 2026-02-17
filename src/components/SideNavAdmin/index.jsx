import { useResolvedPath } from 'react-router-dom';

import { SignOutIcon } from '@phosphor-icons/react';

import Logo from '../../assets/Logo-1.svg';
import { useUser } from '../../hooks/UserContext';
import { navLinks } from './navLinks';
import { Container, Footer, NavLink, NavLinkContainer } from './styles';

export function SideNavAdmin() {
  const { logout } = useUser();
  const { pathname } = useResolvedPath();

  return (
    <Container>
      <img src={Logo} alt="DevBurger" />
      <NavLinkContainer>
        {navLinks.map((link) => (
          <NavLink
            key={link.id}
            to={link.path}
            $isActive={pathname === link.path}
          >
            {link.icon}
            <span>{link.label}</span>
          </NavLink>
        ))}
      </NavLinkContainer>
      <Footer>
        <NavLink to="/login" onClick={logout}>
          <SignOutIcon />
          <span>Sair</span>
        </NavLink>
      </Footer>
    </Container>
  );
}
