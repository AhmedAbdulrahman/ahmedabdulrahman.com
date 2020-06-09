import React from 'react';
import styled from '@emotion/styled';

const StyledAnchor = styled.span`
  display: inline-block;
  position: relative;
  color: ${p => p.theme.colors.articleText};

  &:before,
  &:after {
    content: '';
    display: block;
    height: 0.5em;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0.2em;
    z-index: -1;
    background-color: ${p => p.theme.colors.border};
  }

  &:after {
    transform: scaleX(0);
    transform-origin: 0 50%;
    transition: transform 0.3s cubic-bezier(0.86, 0, 0.07, 1);
  }

  &:hover {
    &:after {
      transform: scaleX(1);
      background-color: ${p => p.theme.colors.accent};
    }
  }
`;

const Anchor = props => {
  const { children, component: Component = 'a', ...other } = props;

  return (
    <Component {...other}>
      <StyledAnchor>{children}</StyledAnchor>
    </Component>
  );
};

export default Anchor;
