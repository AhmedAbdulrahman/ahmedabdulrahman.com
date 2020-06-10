import React from 'react';
import styled from '@emotion/styled';

import Section from '@components/Section';
import mediaqueries from '@styles/media';
import Headings from '@components/Headings';
import Paragraph from '@components/Paragraph';

import Icons from '@icons';

const WorkshopsHero: React.FC = ({ heading, subtitle }) => {
  return (
    <Container>
      <HeroTextContainer>
      <Headings.HeroHeading>
        Remote <span>Workshops</span>.
      </Headings.HeroHeading>
      <Headings.Subtitle>{subtitle}</Headings.Subtitle>
    </HeroTextContainer>
    <HeroImage>
    <Icons.Workshop />
  </HeroImage>
    </Container>
  );
};

export default WorkshopsHero;

const Container = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 450px;
  column-gap: 5em;
  overflow: hidden;
  margin: 104px 0 40px;

  ${mediaqueries.desktop`
    grid-template-columns: 1fr 1fr;
  `}
  ${mediaqueries.tablet`
    grid-template-columns: 1fr;
  `}
`;

const HeroTextContainer = styled.div`
  position: relative;
  align-self: end;
  align-self: flex-start;
`;

const HeroImage = styled.div`
  position: relative;

  ${mediaqueries.tablet`
    display: none;
    visibility: hidden;
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
