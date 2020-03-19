import styled from '@emotion/styled';

const Anchor = styled.a`
  color: ${p => p.theme.colors.accent};
  text-decoration: underline;
  text-decoration-color: transparent;
  transition: text-decoration 0.25s var(--ease-in-out-quad);

  &:hover,
  &:focus {
    text-decoration: underline;
    text-decoration-color: ${p => p.theme.colors.accent};
    text-underline-position: under;
  }
`;

export default Anchor;
