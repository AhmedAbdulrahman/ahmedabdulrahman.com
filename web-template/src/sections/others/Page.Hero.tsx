import React from 'react';
import styled from '@emotion/styled';

import Headings from '@components/Headings';

interface HeroProps {
  heading: string;
  subtitle?: string;
  maxWidth?: number;
}

const PageHero: React.FC<HeroProps> = ({ heading, subtitle, maxWidth }) => {
  return (
    <Container>
      <HeroTextContainer style={{ maxWidth: `${maxWidth}px` }}>
        <Headings.HeroHeading>
          {heading}
        </Headings.HeroHeading>
        <Headings.Subtitle>{subtitle}</Headings.Subtitle>
      </HeroTextContainer>
    </Container>
  );
};

export default PageHero;

const Container = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 5em;
  overflow: hidden;
  margin: 104px 0 40px;
`;

const HeroTextContainer = styled.div`
  position: relative;
  align-self: end;
  align-self: flex-start;
`;
