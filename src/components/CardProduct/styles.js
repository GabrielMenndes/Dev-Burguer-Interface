import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  padding: 25px 15px 25px 15px;
  border-radius: 8px;
  background-color: #fff;
  cursor: grab;
  box-shadow: rgba(0, 0, 0, 0.7) 0 5px 15px;

  div {
    width: 100%;
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 5px;
  }

  p {
    font-size: 15px;
    color: #ff8c05;
    line-height: 15px;
    font-weight: 700;
    margin-top: 40px;
  }
  strong {
    font-size: 24px;
    color: #363636;
    line-height: 20px;
    font-weight: 800;
  }
`;
export const CardImage = styled.img`
  width: 150px;
  height: 140px;
  object-fit: contain;
  margin-top: -100px;
`;
