import React from 'react';
import styled from '@emotion/styled';

import mediaqueries from '@styles/media';
import Headings from '@components/Headings';

interface HeroProps {
  subtitle: Location;
}

const WorkshopsHero: React.FC<HeroProps> = ({ subtitle }) => {
  return (
    <Container>
      <HeroTextContainer>
        <Headings.HeroHeading
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="-2"
          align="right"
          compact
        >
          Remote
        </Headings.HeroHeading>
        <Headings.HeroHeading
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="2"
        >
          <span>Workshops</span>.
        </Headings.HeroHeading>
        <Headings.Subtitle>{subtitle}</Headings.Subtitle>
      </HeroTextContainer>
    </Container>
  );
};

export default WorkshopsHero;

const Container = styled.div`
  position: relative;
  margin: 200px 0 40px;

  ${mediaqueries.tablet`
    margin: 180px 0 40px;
  `}

  ${mediaqueries.phablet`
    margin: 125px 0 40px;
  `}
`;

const HeroTextContainer = styled.div`
  position: relative;
  align-self: end;
  align-self: flex-start;
`;
