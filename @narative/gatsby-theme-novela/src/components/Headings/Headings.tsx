import styled from '@emotion/styled';
import { css } from '@emotion/core';

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
  font-size: 18px;
  line-height: 1.45;
  ${commonStyles};

  ${mediaqueries.phablet`
    font-size: 16px;
  `};
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
  font-style: normal;
  font-weight: ${p => p.theme.fontsWeight.bold};
  font-size: 8.5rem;
  line-height: 1.1;
  font-family: ${p => p.theme.fonts.title};
  color: ${p => p.theme.colors.primary};
  margin-bottom: 5rem;

  a {
    color: ${p => p.theme.colors.accent};
  }

  span {
    color: ${p => p.theme.colors.accent};
  }

  ${mediaqueries.desktop_up`
    font-size: 9rem;
  `}

  ${mediaqueries.phablet`
    font-size: 5.6rem;
    line-height: 1.1;
`}
`;

const SectionHeading = styled.h2`
  font-family: ${p => p.theme.fonts.title};
  font-size: 8rem;
  line-height: 1;
  color: ${p => p.theme.colors.accent};
  margin-bottom: 150px;

  ${mediaqueries.desktop`
    font-size: 6rem;
`}

  ${mediaqueries.phablet`
    font-size: 3.4rem;
    line-height: 1.45;
    margin-bottom: 16px;
    text-align: center;
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
};
