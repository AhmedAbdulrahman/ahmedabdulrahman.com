import styled from '@emotion/styled';

const Anchor = styled.a`
  transition: ${p => p.theme.colorModeTransition};
  color: ${p => p.theme.colors.primary};
  text-decoration: underline solid ${p => p.theme.colors.accent};
  text-underline-position: under;

  &:visited {
    color: ${p => p.theme.colors.primary};
    opacity: 0.85;
  }

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.accent};
  }
`;

export default Anchor;
