import styled from '@emotion/styled';
import mediaqueries from '@styles/media';

const UnorderedList = styled.ul<{ fullWidth?: boolean }>`
  list-style: none;
  counter-reset: list;
  color: ${p => p.theme.colors.articleText};
  position: relative;
  padding: 15px 0 30px 30px;
  transition: ${p => p.theme.colorModeTransition};
  font-family: ${p => p.theme.fonts.monospace};
  z-index: 1;

  ${mediaqueries.phablet`
    padding-left: 20px;
  `};

  li {
    position: relative;
    padding-bottom: 15px;
    font-size: 1.875rem;
    line-height: 1.65;

    ${mediaqueries.tablet`
      padding-left: 30px;
    `};

    ${mediaqueries.phablet`
      padding-left: 20px;
      padding-right: 20px;
      font-size: 1.575rem;
    `};

    p {
      ${mediaqueries.tablet`
        padding: 0;
      `};
    }
  }

  li > :not(ol, ul) {
    display: inline;
  }

  li::before {
    width: 3rem;
    display: inline-block;
    position: absolute;
    color: ${p => p.theme.colors.articleText};
  }

  li::before {
    content: '';
    position: absolute;
    left: -30px;
    top: 14px;
    height: 8px;
    width: 8px;
    background: ${p => p.theme.colors.primary};

    ${mediaqueries.tablet`
      left: 0;
    `};
  }
`;

export default UnorderedList;
