import styled from '@emotion/styled';
import mediaqueries from '@styles/media';

const UnorderedList = styled.ul<{ fullWidth?: boolean }>`
  list-style: none;
  counter-reset: list;
  color: ${p => p.theme.colors.articleText};
  position: relative;
  padding: 15px 0 30px 30px;
  transition: ${p => p.theme.colorModeTransition};
  margin: 0 auto;
  font-size: 18px;
  z-index: 1;

  width: 100%;
  max-width: 680px;

  ${p =>
    !p.fullWidth &&
    mediaqueries.desktop`
    max-width: 507px;
  `}

  ${mediaqueries.tablet`
    max-width: 486px;
    padding-left: 0px;
  `};

  ${mediaqueries.phablet`
    padding-left: 20px;
  `};

  ${p =>
    p.fullWidth &&
    `
    max-width: 100%;
  `}

  li {
    position: relative;
    padding-bottom: 15px;
    line-height: 1.756;

    ${mediaqueries.tablet`
      padding-left: 30px;
    `};

    ${mediaqueries.phablet`
      padding-left: 20px;
      padding-right: 20px;
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
