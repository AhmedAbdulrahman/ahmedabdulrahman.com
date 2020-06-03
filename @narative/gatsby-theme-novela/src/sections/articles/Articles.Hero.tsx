import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';

import Anchor from '@components/Anchor';
import Section from '@components/Section';
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
    <HeadingContainer style={{ maxWidth: site.hero.maxWidth }}>
      <Headings.HeroHeading>
        Writing is <span>thinking</span>.
      </Headings.HeroHeading>
      <Headings.Subtitle>
        I write about solving problems with code, designing things people use,
        teaching, and learning.{' '}
        <Anchor component={Link} to="/archive">
          Archive
        </Anchor>
      </Headings.Subtitle>
    </HeadingContainer>
  );
};

export default ArticlesHero;

const HeadingContainer = styled.div`
  margin: 104px 0 40px;

  ${mediaqueries.desktop`
  width: 80%;
  `}

  ${mediaqueries.tablet`
  width: 100%;
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
