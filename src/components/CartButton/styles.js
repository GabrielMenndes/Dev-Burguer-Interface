import styled from 'styled-components';

export const ContainerButton = styled.button`
  background-color: #9758a6;
  width: 100%;
  height: 52px;
  border-radius: 8px;
  border: none;
  font-size: 30px;
  color: #ffffff;

  &:hover {
    background-color: #6f357c;
  }
`;

export const CartBadge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-left: 8px;
  background: #fff;
  color: #9758a6;
  border-radius: 50%;
  padding: 2px 8px;
  font-size: 16px;
  font-weight: 700;
  z-index: 2;
`;
