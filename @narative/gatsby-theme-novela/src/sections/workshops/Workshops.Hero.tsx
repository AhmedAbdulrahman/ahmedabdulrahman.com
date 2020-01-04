import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';

import Image from '@components/Image';
import Section from '@components/Section';
import mediaqueries from '@styles/media';
// import { IAuthor } from '@types';
import Icons from '@icons';

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
        <HeroImage>
          <Icons.Workshop />
        </HeroImage>
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
  margin-top: 56px;
  margin-bottom: 56px;

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
  align-self: end;
  align-self: center;
  ${mediaqueries.tablet`
    margin: 40px 0 0;
  `}
`;

const HeroImage = styled.div`
  position: relative;
  align-self: end;
  ${mediaqueries.tablet`
    margin-left: 32px;
    margin-right: 32px;
  `}
`;

const HeroHeading = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 94px;
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
  font-size: 18px;
  margin-top: 24px;
  line-height: 1.8;
  font-family: ${p => p.theme.fonts.body};
  color: ${p => p.theme.colors.secondary};
  ${mediaqueries.tablet`
    font-size: 16px;
  `}
`;
