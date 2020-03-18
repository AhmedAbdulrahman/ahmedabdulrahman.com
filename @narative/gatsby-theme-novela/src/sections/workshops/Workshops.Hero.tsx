import React from 'react';
import styled from '@emotion/styled';

import Section from '@components/Section';
import mediaqueries from '@styles/media';
import Headings from '@components/Headings';

const WorkshopsHero: React.FC = () => {
  return (
    <Section narrow>
      <HeadingContainer style={{ maxWidth: `850px` }}>
        <Headings.HeroHeading>
          Remote <span>Workshops</span>.
        </Headings.HeroHeading>
        <InfoText>
          We prodvide you with a valuable and effective workshops to Level-up
          your skills as a developer.
        </InfoText>
      </HeadingContainer>
    </Section>
  );
};

export default WorkshopsHero;

const HeadingContainer = styled.div`
  margin: 104px 0 40px;

  ${mediaqueries.desktop`
  width: 80%;
  `}

  ${mediaqueries.tablet`
  width: 100%;
  `}

  ${mediaqueries.phablet`
  margin: 60px 0 36px;
`}
`;

const HeroHeading = styled.h1`
  font-style: normal;
  font-weight: ${p => p.theme.fontsWeight.bold};
  font-size: 85px;
  line-height: 98%;
  letter-spacing: -1px;
  font-family: ${p => p.theme.fonts.title};
  color: ${p => p.theme.colors.primary};
  ${mediaqueries.desktop`
    font-size: 56px
  `}
  ${mediaqueries.tablet`
    font-size: 48px;
  `}
  ${mediaqueries.phablet`
    font-size: 44px;
    line-height: 1.25;
  `}
`;

const InfoText = styled.p`
  font-size: 2.8rem;
  line-height: 1.5;
  font-family: ${p => p.theme.fonts.body};
  color: ${p => p.theme.colors.secondary};
  margin-bottom: 64px;

  span {
    color: ${p => p.theme.colors.accent};
  }

  ${mediaqueries.phablet`
    font-size: 1.8rem;
    line-height: 1.6;
  `}
`;
