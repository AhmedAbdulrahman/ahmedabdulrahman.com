import React from 'react';
import styled from '@emotion/styled';

import Section from '@components/Section';
import Headings from '@components/Headings';

import mediaqueries from '@styles/media';

const MainHero: React.FC = () => {
  return (
    <>
      <Section narrow>
        <HeadingContainer style={{ maxWidth: `850px` }}>
          <Headings.HeroHeading>
            Creative Front-end developer with <span>designer's eye</span>.
          </Headings.HeroHeading>
        </HeadingContainer>
        <Description>
          <InfoText>
            Focusing on creating neat Design Systems, Animations and
            Interactions. Working together with team members to get all the
            design processes in place.
          </InfoText>
        </Description>
      </Section>
      <Section narrow>
        <Headings.SectionHeading>
          princ—
          <br />
          iples {`&`} values
        </Headings.SectionHeading>
        <Grid>
          <div>
            <Title>Integrity.</Title>
            <Paragraph>
              Always working with accuracy and transparency.
            </Paragraph>
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
    </>
  );
};

export default MainHero;

const HeadingContainer = styled.div`
  margin: 100px 0 76px;
  width: 100%;

  ${mediaqueries.phablet`
  margin: 60px 0 36px;
`}
`;

const InfoText = styled.p`
  font-size: 2.8rem;
  line-height: 1.5;
  font-family: ${p => p.theme.fonts.body};
  color: ${p => p.theme.colors.secondary};
  margin-bottom: 100px;

  span {
    color: ${p => p.theme.colors.accent};
    font-style: italic;
  }

  ${mediaqueries.desktop_up`
    margin-bottom: 200px;
  `}

  ${mediaqueries.phablet`
    font-size: 1.8rem;
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
  font-size: 2.6rem;
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
  font-size: 1.8rem;
  line-height: 1.6;
`}
`;

const Description = styled.div`
  margin-bottom: 180px;

  ${mediaqueries.desktop`
    margin-bottom: 64px;
  `}
`;
