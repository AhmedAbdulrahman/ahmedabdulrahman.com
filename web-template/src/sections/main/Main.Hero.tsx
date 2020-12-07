import React from 'react';
import styled from '@emotion/styled';

import Headings from '@components/Headings';
import Section from '@components/Section';

import mediaqueries from '@styles/media';

const MainHero = () => {
  return (
    <Section>
      <Container>
        <HeadingContainer data-scroll data-scroll-speed="3">
          <Headings.HeroHeading
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="-2"
            align="right"
          >
            crtv
          </Headings.HeroHeading>
          <Headings.HeroHeading
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="2"
          >
            developer
          </Headings.HeroHeading>
          <Headings.HeroHeading
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="-2"
            align="center">
              with
          </Headings.HeroHeading>
          <Headings.HeroHeading
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="2"
           >
            <span>designer's</span>
          </Headings.HeroHeading>
          <Headings.HeroHeading
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="-2"
            align="right"
           >
            <span>eye</span>.
          </Headings.HeroHeading>
        </HeadingContainer>
      </Container>
      <Description data-scroll data-scroll-speed="2">
        <InfoText>
          Focusing on creating neat <span>Design Systems</span>, <span>Animations</span> and <span>Interactions</span>.
          Working together with team members to get all the design processes in
          place.
        </InfoText>
      </Description>
      <Headings.SectionHeading data-scroll data-scroll-speed="2">
        <span
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="-2"
         >
           princ—</span>
        <br />
        <span
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="2"
        >
          iples {`&`} values</span>
      </Headings.SectionHeading>
      <Grid data-scroll data-scroll-speed="2">
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
      </Section>
  );
};

export default MainHero;

const Container = styled.div`
  position: relative;
  /* display: grid;
  grid-template-columns: 1fr 450px;
  column-gap: 5em; */
  /* overflow: hidden; */
  margin: 200px 0 72px;

  ${mediaqueries.phablet`
    margin: 150px 0 72px;
  `}
`;

const HeadingContainer = styled.div`
  width: 100%;
`;

const InfoText = styled.p`
  font-size: 6rem;
  line-height: 1.08333em;
  letter-spacing: -.04em;
  font-family: ${p => p.theme.fonts.body};
  color: ${p => p.theme.colors.articleText};
  margin-bottom: 100px;
  text-align: center;

  span {
    color: ${p => p.theme.colors.accent};
    font-style: italic;
  }

  ${mediaqueries.desktop_up`
    margin-bottom: 200px;
  `}

  ${mediaqueries.tablet`
    font-size: 3.5rem;
  `}

  ${mediaqueries.phablet`
    font-size: 2.7rem;
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
    font-family: ${p => p.theme.fonts.body};

    ${mediaqueries.desktop`
      max-width: 400px;
      margin-right: auto;
      margin-left: auto;
      margin-bottom: 2.6rem;
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
  color: ${p => p.theme.colors.accent};

  ${mediaqueries.phablet`
  font-size: 2.4rem;
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
  font-size: 2rem;
  line-height: 1.6;
`}
`;

const Description = styled.div`
  /* margin-top: 180px; */
  margin-bottom: 180px;

  ${mediaqueries.desktop`
    margin-bottom: 64px;
  `}
`;

const HeroImage = styled.div`
  position: relative;

  ${mediaqueries.tablet`
    display: none;
    visibility: hidden;
  `}
`;
