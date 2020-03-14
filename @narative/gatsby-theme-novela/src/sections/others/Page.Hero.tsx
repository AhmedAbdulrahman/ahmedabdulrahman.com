import React from 'react';
import styled from '@emotion/styled';

import Section from '@components/Section';
import mediaqueries from '@styles/media';

interface HeroProps {
  heading: string;
  subtitle?: string;
  maxWidth: number;
}

const PageHero: React.FC<HeroProps> = ({ children, heading, maxWidth }) => {
  return (
    <Section narrow>
      <HeadingContainer style={{ maxWidth: `${maxWidth}px` }}>
        <HeroHeading dangerouslySetInnerHTML={{ __html: heading }} />
        <InfoText>{children}</InfoText>
      </HeadingContainer>
    </Section>
  );
};

export default PageHero;

const HeadingContainer = styled.div`
  margin: 104px 0 72px;

  ${mediaqueries.desktop`
    width: 80%;
  `}

  ${mediaqueries.tablet`
    width: 100%;
  `}
`;

const HeroHeading = styled.h1`
  font-style: normal;
  font-weight: ${p => p.theme.fontsWeight.bold};
  font-size: 8.5rem;
  line-height: 1.15;
  font-family: ${p => p.theme.fonts.title};
  color: ${p => p.theme.colors.primary};
  margin-bottom: 5rem;

  a {
    color: ${p => p.theme.colors.accent};
  }

  ${mediaqueries.desktop`
  font-size: 5.9rem;
  `}

  ${mediaqueries.phablet`
  font-size: 5.9rem;
  `}
`;

const InfoText = styled.p`
  font-size: 22px;
  margin-top: 16px;
  line-height: 1.5;
  font-family: ${p => p.theme.fonts.body};
  color: ${p => p.theme.colors.articleText};
`;
