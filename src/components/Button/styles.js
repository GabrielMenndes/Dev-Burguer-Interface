import styled from 'styled-components';

export const ContainerButton = styled.button`
  width: 100%;
  height: 52px;
  border: 0;
  border-radius: 8px;
  background-color: #9758a6;
  font-family: 'Road Rage', sans-serif;
  font-size: 30px;
  color: #fff;

  &:hover {
    background-color: #6f3576;
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='8' ry='8' stroke='white' stroke-width='3' stroke-dasharray='6%2c 14' stroke-dashoffset='59' stroke-linecap='square'/%3e%3c/svg%3e");
    border-radius: 8px;
  }
`;
