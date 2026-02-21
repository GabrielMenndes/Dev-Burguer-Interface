import styled from 'styled-components';

export const Container = styled.div`
  .carousel-item {
    padding-right: 40px;
    padding-left: 40px;
  }
  overflow-x: hidden;

  .react-multi-carousel-list {
    overflow: visible;
  }

  padding-left: 40px;
  padding-bottom: 40px;
`;
export const Title = styled.h2`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 70px auto 60px;
  width: min(520px, 88%);
  height: 56px;
  padding: 0 20px;
  border-radius: 32px;
  background-color: #18171a;
  border: 2px solid #9758a6;
  box-shadow:
    0 0 14px rgba(151, 88, 166, 0.18),
    inset 0 0 10px rgba(151, 88, 166, 0.12);
  overflow: hidden;

  background-image:
    radial-gradient(
      circle at 1px 1px,
      rgba(255, 255, 255, 0.1) 1px,
      transparent 1.6px
    ),
    linear-gradient(90deg, rgba(151, 88, 166, 0.1), rgba(0, 0, 0, 0));
  background-size:
    6px 6px,
    100% 100%;

  .led-track {
    display: inline-flex;
    width: max-content;
    white-space: nowrap;
    animation: ledMarqueeMini 12s linear infinite;
    will-change: transform;
  }

  span {
    display: inline-block;
    padding-right: 80px;
    font-family: 'Road Rage', sans-serif;
    font-size: 30px;
    letter-spacing: 1.5px;
    color: #fff;
    text-shadow:
      0 0 8px #9758a6,
      0 0 16px #9758a6,
      0 0 22px #18171a;
    animation: ledPulseMini 14s ease-in-out infinite;
  }

  @keyframes ledMarqueeMini {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-33.333%);
    }
  }

  @keyframes ledPulseMini {
    0%,
    30% {
      color: #39ff14;
      text-shadow:
        0 0 8px rgba(57, 255, 20, 0.85),
        0 0 16px rgba(57, 255, 20, 0.65),
        0 0 22px rgba(57, 255, 20, 0.45);
    }
    50%,
    70% {
      color: #f0ffda;
      text-shadow:
        0 0 12px rgba(240, 255, 218, 1),
        0 0 24px rgba(57, 255, 20, 0.9),
        0 0 36px rgba(57, 255, 20, 0.8);
    }
    100% {
      color: #39ff14;
      text-shadow:
        0 0 8px rgba(57, 255, 20, 0.85),
        0 0 16px rgba(57, 255, 20, 0.65),
        0 0 22px rgba(57, 255, 20, 0.45);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .led-track {
      animation: none;
      transform: none;
    }

    span {
      animation: none;
    }
  }
`;
