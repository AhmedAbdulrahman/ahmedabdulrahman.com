import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';

import Section from '@components/Section';
import mediaqueries from '@styles/media';

const siteQuery = graphql`
  {
    allSite {
      edges {
        node {
          siteMetadata {
            hero {
              maxWidth
              workshop {
                heading
                subHeading
              }
            }
          }
        }
      }
    }
  }
`;

const WorkshopsHero = () => {
  const results = useStaticQuery(siteQuery);
  const hero = results.allSite.edges[0].node.siteMetadata.hero;

  return (
    <Section narrow>
      <Container>
        <HeroTextContainer>
          <HeroHeading>{hero.workshop.heading}</HeroHeading>
          <InfoText>{hero.workshop.subHeading}</InfoText>
        </HeroTextContainer>
      </Container>
    </Section>
  );
};

export default WorkshopsHero;

const Container = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 450px;
  column-gap: 5em;
  overflow: hidden;
  margin: 100px 0 76px;

  ${mediaqueries.desktop`
    grid-template-columns: 1fr 416px;
  `}
  ${mediaqueries.tablet`
    grid-template-columns: 1fr;
    background: none;
    margin-bottom: 0;
  `}
`;

const HeroTextContainer = styled.div`
  position: relative;
  align-self: flex-start;
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
  font-size: 22px;
  margin-top: 24px;
  line-height: 1.8;
  font-family: ${p => p.theme.fonts.body};
  color: ${p => p.theme.colors.secondary};
  ${mediaqueries.tablet`
    font-size: 16px;
  `}
`;
