import styled from '@emotion/styled';

const Anchor = styled.a`
  color: ${p => p.theme.colors.primary};
  background-image: ${p => p.theme.colors.anchorGradient};
  background-size: 100% 200%;
  word-break: break-word;
  padding: 2px 0px 1px;
  transition: background-position 120ms ease-in-out 0s,
    padding 120ms ease-in-out 0s;
  background-position: 0px 0px;
`;

export default Anchor;
