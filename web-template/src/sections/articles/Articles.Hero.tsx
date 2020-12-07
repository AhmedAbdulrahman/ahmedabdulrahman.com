import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';

import Anchor from '@components/Anchor';
import Headings from '@components/Headings';

import mediaqueries from '@styles/media';

const siteQuery = graphql`
  {
    allSite {
      edges {
        node {
          siteMetadata {
            hero {
              maxWidth
            }
          }
        }
      }
    }
  }
`;

const ArticlesHero: React.FC = () => {
  const results = useStaticQuery(siteQuery);
  const site = results.allSite.edges[0].node.siteMetadata;
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
          Writing is
        </Headings.HeroHeading>
        <Headings.HeroHeading
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="2"
        >
          <span>thinking</span>.
        </Headings.HeroHeading>
        <Headings.Subtitle>
          I write about solving problems with code, designing things people use,
          teaching, and learning.{' '}
          <Anchor component={Link} to="/archive">
            Archive
          </Anchor>
        </Headings.Subtitle>
      </HeroTextContainer>
    </Container>
  );
};

export default ArticlesHero;

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

const HeroImage = styled.div`
  position: relative;

  ${mediaqueries.tablet`
    display: none;
    visibility: hidden;
  `}
`;

const InfoText = styled.p`
  font-size: 2.8rem;
  line-height: 1.8;
  font-family: ${p => p.theme.fonts.body};
  color: ${p => p.theme.colors.articleText};

  ${mediaqueries.desktop_up`
    margin-bottom: 64px;
  `}

  ${mediaqueries.tablet`
    font-size: 2.2rem;
    line-height: 1.5;
  `}
`;
