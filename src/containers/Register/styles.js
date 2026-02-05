import { Link as ReactLink } from 'react-router-dom';

import styled from 'styled-components';

import Background from '../../assets/background-1.png';
import BackgroundLogin from '../../assets/bg1.png';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;
export const LeftContainer = styled.div`
  background: url('${BackgroundLogin}');
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 100%;
  max-width: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 80%;
  }
`;
export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  height: 100%;
  width: 100%;
  max-width: 50%;

  background: url('${Background}');
  background-color: #1e1f1f;

  p {
    color: #ffffff;
    font-size: 18px;
    font-weight: 800;
  }
`;

export const Title = styled.h2`
  font-family: 'Road Rage', sans-serif;
  font-size: 40px;
  color: #9758a6;
  font-weight: 400;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  width: 100%;
  max-width: 400px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;

  input {
    width: 100%;
    border: none;
    height: 52px;
    border-radius: 8px;
    padding: 0 16px;
  }

  label {
    font-size: 18px;
    font-weight: 600;
    color: #ffffff;
  }

  p {
    font-weight: 600;
    font-size: 14px;
    color: #cf3057;
    line-height: 80%;
    height: 10px;
  }
`;
export const Link = styled(ReactLink)`
  text-decoration: none;
  color: #9758a6;
`;
