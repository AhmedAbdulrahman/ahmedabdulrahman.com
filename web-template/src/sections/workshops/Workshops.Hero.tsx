import React from 'react';
import styled from '@emotion/styled';

import Section from '@components/Section';
import mediaqueries from '@styles/media';
import Headings from '@components/Headings';
import Paragraph from '@components/Paragraph';

const WorkshopsHero: React.FC = ({ heading, subtitle }) => {
  return (
    <HeadingContainer style={{ maxWidth: `850px` }}>
      <Headings.HeroHeading>
        Remote <span>Workshops</span>.
      </Headings.HeroHeading>
      <Headings.Subtitle>{subtitle}</Headings.Subtitle>
    </HeadingContainer>
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

const Subtitle = styled(Paragraph)`
  font-family: ${p => p.theme.fonts.body};
  font-size: 2.8rem;
`;
