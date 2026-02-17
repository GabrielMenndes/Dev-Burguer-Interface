import styled from 'styled-components';

import Background from '../../assets/background.svg';
import Texture from '../../assets/texture.svg';

export const Container = styled.div`
  width: 100%;
  background-color: #f0f0f0;
  background:
    linear-gradient(rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4)),
    url(${Background});
  min-height: 100vh;
`;
export const Banner = styled.div`
  background: url(${Texture});
  background-size: cover;
  background-color: #1f1f1f;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  height: 180px;

  img {
    height: 150px;
  }
`;
export const Title = styled.h2`
  font-size: 32px;
  font-weight: 800;
  padding-bottom: 12px;
  color: #61a120;
  text-align: center;
  position: relative;

  &::after {
    position: absolute;
    bottom: 0;
    left: calc(50% - 28px);
    content: '';
    width: 56px;
    height: 4px;
    background: #9758a6;
  }
`;
export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 30%;
  gap: 40px;
  width: 100%;
  max-width: 1280px;
  padding: 40px;
  margin: 0 auto;
`;
