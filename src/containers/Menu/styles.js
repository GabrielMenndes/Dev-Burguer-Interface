import { Link } from 'react-router-dom';

import styled from 'styled-components';

import Background from '../../assets/background.svg';
import BannerHamburger from '../../assets/banner-hamburger.svg';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding-bottom: 60px;
  background-color: #f0f0f0;
  background:
    linear-gradient(rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4)),
    url(${Background});
`;
export const Banner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 480px;
  width: 100%;
  position: relative;

  background: url('${BannerHamburger}') no-repeat;
  background-position: center;
  background-color: #1f1f1f;
  background-size: cover;

  h1 {
    font-family: 'Road Rage', sans-serif;
    font-size: 80px;
    line-height: 65px;
    color: #fff;
    position: absolute;
    right: 20%;
    top: 30%;
  }

  span {
    display: block;
    color: #fff;
    font-size: 20px;
    font-weight: 400;
  }
`;

export const CategoryButton = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  background: none;
  color: ${(props) => (props.$isActiveCategory ? '#9758a6' : '#696969')};
  font-size: 24px;
  font-weight: 500;
  padding-bottom: 5px;
  line-height: 20px;
  border: none;
  border-bottom: ${(props) => props.$isActiveCategory && '3px solid #9758a6'};
`;

export const CategoryMenu = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 30px;
`;

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 40px;
  gap: 60px;
  justify-content: center;
  max-width: 1280px;
  margin: 50px auto;
`;
export const HomeOffers = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 40px auto;
  width: min(900px, 92%);
  height: 74px;
  padding: 0 24px;
  border-radius: 44px;
  background-color: #0b0b0b;
  border: 3px solid #202020;
  box-shadow:
    0 0 18px rgba(58, 255, 20, 0.25),
    inset 0 0 14px rgba(58, 255, 20, 0.2);
  overflow: hidden;

  background-image:
    radial-gradient(
      circle at 1px 1px,
      rgba(255, 255, 255, 0.18) 1px,
      transparent 1.6px
    ),
    linear-gradient(90deg, rgba(57, 255, 20, 0.18), rgba(0, 0, 0, 0));
  background-size:
    6px 6px,
    100% 100%;

  span {
    display: inline-block;
    white-space: nowrap;
    padding-left: 100%;
    font-family: 'Road Rage', sans-serif;
    font-size: 38px;
    letter-spacing: 2px;
    color: #39ff14;
    text-shadow:
      0 0 8px rgba(57, 255, 20, 0.9),
      0 0 16px rgba(57, 255, 20, 0.7),
      0 0 24px rgba(57, 255, 20, 0.5);
    animation:
      ledMarquee 12s linear infinite,
      ledPulse 12s ease-in-out infinite;
  }

  @keyframes ledMarquee {
    0% {
      transform: translateX(100%);
    }
    30% {
      transform: translateX(-50%);
    }
    65% {
      transform: translateX(-50%);
    }
    100% {
      transform: translateX(-120%);
    }
  }

  @keyframes ledPulse {
    0%,
    30% {
      color: #39ff14;
      text-shadow:
        0 0 8px rgba(57, 255, 20, 0.9),
        0 0 16px rgba(57, 255, 20, 0.7),
        0 0 24px rgba(57, 255, 20, 0.5);
    }
    45%,
    60% {
      color: #f0ffda;
      text-shadow:
        0 0 14px rgba(240, 255, 218, 1),
        0 0 28px rgba(57, 255, 20, 0.95),
        0 0 44px rgba(57, 255, 20, 0.9),
        0 0 60px rgba(57, 255, 20, 0.8);
    }
    100% {
      color: #39ff14;
      text-shadow:
        0 0 8px rgba(57, 255, 20, 0.9),
        0 0 16px rgba(57, 255, 20, 0.7),
        0 0 24px rgba(57, 255, 20, 0.5);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    span {
      animation: none;
      transform: none;
      padding-left: 0;
    }
  }
`;

export const Home = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Road Rage', sans-serif;
  font-size: 50px;
  text-decoration: none;
  color: #ffffff;
  background-color: #9758a6;
  border: 3px solid #9758a6;
  border-radius: 44px;
  width: min(400px, 80%);
  height: 74px;
  margin: 40px auto;
  box-shadow:
    0 0 12px rgba(151, 88, 166, 0.5),
    inset 0 0 8px rgba(151, 88, 166, 0.3);
  border: none;

  &:hover {
    background-color: #6f3576;
    border: none;
    box-shadow:
      0 0 20px rgba(151, 88, 166, 0.8),
      inset 0 0 12px rgba(151, 88, 166, 0.5);
  }
`;
