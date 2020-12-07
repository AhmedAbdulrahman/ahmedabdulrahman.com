import styled from '@emotion/styled';
import { css } from '@emotion/core';

import Paragraph from '@components/Paragraph';
import mediaqueries from '@styles/media';

/**
 * Example:
 * <Heading.h1>Lorem Ipsum</Heading.h1>
 */

const commonStyles = p => css`
  font-weight: ${p.theme.fontsWeight.bold};
  color: ${p.theme.colors.primary};
  font-family: ${p.theme.fonts.title};
`;

const h1 = styled.h1`
  font-size: 64px;
  line-height: 1.15;
  ${commonStyles};

  ${mediaqueries.desktop`
    font-size: 48px;
    line-height: 1.2;
  `};

  ${mediaqueries.phablet`
    font-size: 40px;
    line-height: 1.3;
  `};
`;

const h2 = styled.h2`
  font-size: 36px;
  line-height: 1.333;
  ${commonStyles};

  ${mediaqueries.desktop`
    font-size: 21px;
  `};

  ${mediaqueries.tablet`
    font-size: 24px;
    line-height: 1.45;
  `};

  ${mediaqueries.phablet`
    font-size: 22px;
  `};
`;

const h3 = styled.h3`
  font-size: 24px;
  line-height: 1.45;
  ${commonStyles};

  ${mediaqueries.tablet`
    font-size: 22px;
  `};

  ${mediaqueries.phablet`
    font-size: 20px;
  `};
`;

const h4 = styled.h4`
  font-size: 20px;
  line-height: 1.45;
  margin-bottom: 1rem;
  ${commonStyles};
`;

const h5 = styled.h5`
  font-size: 18px;
  line-height: 1.45;
  ${commonStyles};

  ${mediaqueries.phablet`
    font-size: 16px;
  `};
`;

const h6 = styled.h6`
  font-size: 16px;
  line-height: 1.45;
  ${commonStyles};

  ${mediaqueries.phablet`
    font-size: 14px;
  `};
`;

const HeroHeading = styled.h1`
  font-stretch: normal;
  font-style: normal;
  line-height: .78;
  letter-spacing: -0.03vw;
  font-family: ${p => p.theme.fonts.title};
  color: ${p => p.theme.colors.primary};
  text-transform: uppercase;
  font-size: 11.88vw;
  text-align: ${({align = 'left'}) => align};

  ${p => p.compact &&
    `
    line-height: .58;
  `}

  ${p => p.disableGutters ?
    mediaqueries.desktop_up`
      margin-left: 0;
      margin-right: 0;
    ` :
    mediaqueries.desktop_up`
      margin-left: 7rem;
      margin-right: 7rem;
    `
  }
}

  span {
    color: ${p => p.theme.colors.accent};
  }

  ${mediaqueries.desktop_up`
    font-size: 8.88vw;
  `}

  ${mediaqueries.desktop_medium_up`
    font-size: 6.88vw;
  `}

  ${mediaqueries.phablet`
    font-size: 4.5rem;
`}
`;

const SectionHeading = styled.h2`
  font-family: ${p => p.theme.fonts.title};
  font-size: 8rem;
  line-height: 1;
  color: ${p => p.theme.colors.accent};
  margin-bottom: 150px;
  text-align: center;

  span {
    display: inline-block;
  }

  ${mediaqueries.desktop`
    font-size: 6rem;
`}

  ${mediaqueries.phablet`
    font-size: 3.2rem;
    line-height: 1.45;
    margin-bottom: 16px;
  `}
`;

const Subtitle = styled.p`
  font-size: 2.8rem;
  line-height: 1.8;
  font-family: ${p => p.theme.fonts.body};
  margin: 0;

  ${mediaqueries.phablet`
    font-size: 2.2rem;
    margin-top: 2rem;
  `}

  ${mediaqueries.desktop_up`
    margin-bottom: 64px;
  `}
`;
export default {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  HeroHeading,
  SectionHeading,
  Subtitle,
};
