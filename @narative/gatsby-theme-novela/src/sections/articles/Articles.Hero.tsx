import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';

import Section from '@components/Section';

import mediaqueries from '@styles/media';
import { IAuthor } from '@types';

const siteQuery = graphql`
  {
    allSite {
      edges {
        node {
          siteMetadata {
            hero {
              maxWidth
              writingHeading
            }
          }
        }
      }
    }
  }
`;

const ArticlesHero: React.FC = () => {
  const results = useStaticQuery(siteQuery);
  const hero = results.allSite.edges[0].node.siteMetadata.hero;

  return (
    <Section narrow>
      <HeadingContainer style={{ maxWidth: `800px` }}>
        <HeroHeading>{hero.writingHeading}</HeroHeading>
        <InfoText>
          {/* By creating badass visual identities and awesome websites. */}
          Hey, I’m Ahmed, a Creative Front-end Crispiness Creator and UI
          designer from Stockholm, Sweden.
        </InfoText>
      </HeadingContainer>
    </Section>
  );
};

export default ArticlesHero;

const HeadingContainer = styled.div`
  margin: 100px 0 76px;

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
  font-family: ${p => p.theme.fonts.title};
  color: ${p => p.theme.colors.primary};

  a {
    color: ${p => p.theme.colors.accent};
  }

  ${mediaqueries.desktop`
  font-size: 56px
`}

  ${mediaqueries.phablet`
  font-size: 56px;
`}
`;

const InfoText = styled.p`
  font-size: 22px;
  margin-top: 16px;
  line-height: 1.5;
  font-family: ${p => p.theme.fonts.body};
  color: ${p => p.theme.colors.secondary};
`;
