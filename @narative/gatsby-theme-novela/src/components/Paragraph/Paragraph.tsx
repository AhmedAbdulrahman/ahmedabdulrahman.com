import styled from '@emotion/styled';
import mediaqueries from '@styles/media';

const Paragraph = styled.p`
  line-height: 1.756;
  font-size: 18px;
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

  ${mediaqueries.desktop`
    max-width: 507px;
  `}

  ${mediaqueries.tablet`
    max-width: 486px;
    margin: 0 auto;
  `};

  ${mediaqueries.phablet`
    padding: 0 20px;
  `};
`;

export default Paragraph;
