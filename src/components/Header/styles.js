export const Separator = styled.span`
  border-right: 2px solid #9758a6;
  height: 24px;
  margin: 0 12px;
`;
export const ProfileName = styled.span`
  font-weight: 700;
  color: #9758a6;
  font-size: 16px;
  margin-bottom: 0;
  margin-top: 0;
`;
import { Link } from 'react-router-dom';

import styled from 'styled-components';

export const CartIconContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0;
  font-size: 14px;
  text-align: right;

  .profile-user-block {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 2px;
  }
  .profile-name {
    font-weight: 700;
    color: #9758a6;
    font-size: 16px;
    margin-bottom: 0;
    margin-top: 0;
  }
  .profile-logout {
    margin-top: 2px;
    color: #9758a6;
    font-weight: 700;
    background: transparent;
    border: none;
    text-align: right;
    display: block;
  }
`;
export const CartBadgeHeader = styled.span`
  color: #fff;
  background: #9758a6;
  border-radius: 50%;
  padding: 2px 7px;
  font-size: 13px;
  font-weight: 700;
  position: absolute;
  top: -8px;
  right: -10px;
  z-index: 2;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`;

export const Container = styled.div`
  background-color: ${(props) => props.theme.mainBlack};
  width: 100%;
  height: 72px;
  padding: 0 56px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
`;
export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
`;
export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 72px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }

  .nav-link {
    transition: transform 0.15s ease;
  }

  .nav-link:hover {
    transform: translateY(-4px);
  }
  hr {
    height: 24px;
    border: 1px solid #625e5e;
  }
`;
export const HeaderLink = styled(Link)`
  color: ${(props) => (props.$isActive ? '#9758a6' : '#fff')};
  border-bottom: ${(props) => (props.$isActive ? '1px solid #9758a6' : 'none')};
  padding-bottom: 5px;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.2s;
  display: inline-flex;
  align-items: center;

  &:hover {
    color: #9758a6;
  }
`;
export const Options = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 48px;
`;
export const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 24px;
`;
export const Profile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  background: #18171a;
  border-radius: 8px;
  padding: 6px 14px 6px 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  margin-left: 12px;

  .profile-user-block {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
    line-height: 1.1;
  }
  .profile-name {
    font-weight: 700;
    color: #9758a6;
    font-size: 16px;
    margin-bottom: 0;
    margin-top: 0;
  }
  .profile-logout {
    margin-top: 2px;
    color: #ff3205;
    font-weight: 700;
    background: transparent;
    border: none;
    text-align: left;
    cursor: pointer;
    font-size: 15px;
    padding: 0;
  }
`;
export const Logout = styled.button`
  color: #ff3205;
  text-decoration: none;
  font-weight: 700;
  background-color: transparent;
  border: none;
`;
