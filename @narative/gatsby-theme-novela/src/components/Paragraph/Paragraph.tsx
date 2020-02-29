import styled from '@emotion/styled';
import mediaqueries from '@styles/media';

const Paragraph = styled.p<{ fullWidth?: boolean }>`
  line-height: 1.556;
  font-size: 20px;
  color: ${p => p.theme.colors.articleText};
  font-family: ${p => p.theme.fonts.body};
  transition: ${p => p.theme.colorModeTransition};
  margin: 0 auto;
  width: 100%;
  max-width: 680px;
  margin: 0px auto 35px;

  b {
    font-weight: 800;
  }

  ${p =>
    p.fullWidth &&
    `
    max-width: 100%;
  `}

  ${p =>
    !p.fullWidth &&
    mediaqueries.desktop`
    max-width: 507px;
  `}

  ${mediaqueries.tablet`
    max-width: 486px;
  `};

  ${mediaqueries.phablet`
    padding: 0 20px;
  `};
`;

export default Paragraph;
