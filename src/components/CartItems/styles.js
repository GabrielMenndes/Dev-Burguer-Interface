import styled from 'styled-components';

export const ProductImage = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 16px;
`;
export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 32px;
    width: 32px;
    color: #fff;
    border-radius: 4px;
    background-color: #9758a6;
    transition: all 0.4s;
    border: none;

    &:hover {
      background-color: #6f357c;
    }
  }
`;
export const EmptyCart = styled.p`
  font-size: 20px;
  text-align: center;
  font-weight: bold;
`;

export const TotalPrice = styled.p`
  font-weight: bold;
`;

export const TrashImagem = styled.img`
  height: 24px;
  width: 24px;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.2);
  }
`;
