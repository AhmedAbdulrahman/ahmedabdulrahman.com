import React from 'react';
import styled from '@emotion/styled';

import mediaqueries from '@styles/media';
import Headings from '@components/Headings';

import Icons from '@icons';

interface HeroProps {
  subtitle: Location;
}

const WorkshopsHero: React.FC<HeroProps> = ({ subtitle }) => {
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
