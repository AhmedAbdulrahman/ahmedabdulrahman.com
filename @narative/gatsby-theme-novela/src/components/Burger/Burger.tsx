import React from 'react';
import styled from '@emotion/styled';
import { useColorMode } from 'theme-ui';

const Burger = ({ burgerOpen, setBurgerOpen }) => {
  const [colorMode] = useColorMode();
  const isDark = colorMode === `dark`;

  return (
    <StyledBurger
      isDark={isDark}
      open={burgerOpen}
      onClick={() => setBurgerOpen(!burgerOpen)}
    >
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

export default Burger;

const StyledBurger = styled.button<{ isDark: boolean; open: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2.6rem;
    height: 0.4rem;
    background: ${props => (props.isDark ? '#fff' : '#002a5a')};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    margin-bottom: 0.4rem;

    :first-of-type {
      transform: ${props => (props.open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-of-type(2) {
      margin-bottom: 0.4rem;
      opacity: ${props => (props.open ? '0' : '1')};
      transform: ${props =>
        props.open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-of-type(3) {
      transform: ${props => (props.open ? 'rotate(-45deg)' : 'rotate(0)')};
      margin-bottom: 0;
    }
  }
`;
