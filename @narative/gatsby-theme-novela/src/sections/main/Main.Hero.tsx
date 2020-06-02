import React from 'react';
import styled from '@emotion/styled';

import Section from '@components/Section';
import Headings from '@components/Headings';

import mediaqueries from '@styles/media';
import Icons from '@icons';

const MainHero: React.FC = () => {
  return (
    <>
      <Container>
        <HeadingContainer>
          <Headings.HeroHeading>
            Creative Front-end developer with <span>designer's eye</span>.
          </Headings.HeroHeading>
        </HeadingContainer>
        <HeroImage>
          <Icons.Creative />
        </HeroImage>
      </Container>
      <Description>
        <InfoText>
          Focusing on creating neat Design Systems, Animations and Interactions.
          Working together with team members to get all the design processes in
          place.
        </InfoText>
      </Description>
      <Headings.SectionHeading>
        princ—
        <br />
        iples {`&`} values
      </Headings.SectionHeading>
      <Grid>
        <div>
          <Title>Integrity.</Title>
          <Paragraph>Always working with accuracy and transparency.</Paragraph>
        </div>
        <div>
          <Title>Understanding.</Title>
          <Paragraph fullWidth>
            Well-made website require effort and comprehension.
          </Paragraph>
        </div>
        <div>
          <Title>Performance.</Title>
          <Paragraph>Focus is the key, every minute is important.</Paragraph>
        </div>
        <div>
          <Title>focused outcome</Title>
          <Paragraph>
            Identify and tackle problems to maximize the effectiveness of the
            outcome.
          </Paragraph>
        </div>
      </Grid>
    </>
  );
};

export default MainHero;

const Container = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 450px;
  column-gap: 5em;
  overflow: hidden;
  margin: 104px 0;

  ${mediaqueries.desktop_up`
    grid-template-columns: 1fr 550px;
  `}
  ${mediaqueries.tablet`
    grid-template-columns: 1fr;
  `}
`;

const HeadingContainer = styled.div`
  // margin: 100px 0 76px;
  width: 100%;

  ${mediaqueries.phablet`
  // margin: 60px 0 36px;
`}
`;

const InfoText = styled.p`
  font-size: 2.8rem;
  line-height: 1.5;
  font-family: ${p => p.theme.fonts.body};
  color: ${p => p.theme.colors.articleText};
  margin-bottom: 100px;

  span {
    color: ${p => p.theme.colors.accent};
    font-style: italic;
  }

  ${mediaqueries.desktop_up`
    margin-bottom: 200px;
  `}

  ${mediaqueries.phablet`
    line-height: 1.6;
  `}
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 4em;
  row-gap: 4em;
  margin: 60px 0;

  div {
    text-align: center;

    ${mediaqueries.desktop`
      max-width: 400px;
      margin-right: auto;
      margin-left: auto;
      `}
  }

  ${mediaqueries.tablet`
    grid-template-columns:  1fr;
    margin-bottom: 0;
    column-gap: 4em
  `}

  ${mediaqueries.phablet`
    row-gap: 2em
  `}
`;

const Title = styled.h3`
  font-weight: ${p => p.theme.fontsWeight.bold};
  font-family: ${p => p.theme.fonts.title};
  font-size: 3rem;
  line-height: 1.1;
  margin-bottom: 24px;
  color: ${p => p.theme.colors.accent};

  ${mediaqueries.phablet`
  line-height: 1.6;
`}
`;

const Paragraph = styled.p`
  font-size: 2.4rem;
  line-height: 1.5;
  max-width: 420px;
  margin: 0 auto;
  color: ${p => p.theme.colors.articleText};

  ${mediaqueries.phablet`
  line-height: 1.6;
`}
`;

const Description = styled.div`
  margin-bottom: 180px;

  ${mediaqueries.desktop`
    margin-bottom: 64px;
  `}
`;

const HeroImage = styled.div`
  position: relative;

  ${mediaqueries.tablet`
    margin-left: 32px;
    margin-right: 32px;
  `}
`;
