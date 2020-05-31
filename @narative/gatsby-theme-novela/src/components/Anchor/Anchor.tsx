import styled from '@emotion/styled';

const Anchor = styled.a`
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
`;

export default Anchor;
