import React, { useContext } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';

import Section from '@components/Section';
import mediaqueries from '@styles/media';
import { IAuthor } from '@types';

const authorQuery = graphql`
  {
    site: allSite {
      edges {
        node {
          siteMetadata {
            hero {
              writingHeading
              maxWidth
            }
          }
        }
      }
    }
  }
`;

const ArticlesHero: React.FC<IAuthor> = ({ authors }) => {
  const results = useStaticQuery(authorQuery);
  const hero = results.site.edges[0].node.siteMetadata.hero;
  // const featuredAuthor = authors.find(author => author.featured);

  // if (!featuredAuthor) {
  //   throw new Error(`
  //     No featured Author found.
  //     Please ensure you have at least featured Author.
  // `);
  // }

  return (
    <Section relative id="Articles__Hero">
      <HeadingContainer style={{ maxWidth: `${hero.maxWidth}px` }}>
        <HeroHeading dangerouslySetInnerHTML={{ __html: hero.writingHeading }} />
      </HeadingContainer>
    </Section>
  );
};

export default ArticlesHero;

const SubheadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;

  ${mediaqueries.desktop`
    margin-bottom: 80px;
  `};

  ${mediaqueries.tablet`
    margin-bottom: 50px;
  `};

  ${mediaqueries.phablet`
    display: none;
  `};
`;

const HeadingContainer = styled.div`
  font-family: ${p => p.theme.fonts.title};
  margin: 100px 0;

  ${mediaqueries.desktop`
    width: 80%;
  `}

  ${mediaqueries.tablet`
    width: 100%;
  `}
`;

const HeroHeading = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 52px;
  line-height: 1.15;
  color: ${p => p.theme.colors.primary};

  a {
    color: ${p => p.theme.colors.accent};
  }

  ${mediaqueries.desktop`
    font-size: 38px
  `}

  ${mediaqueries.phablet`
    font-size: 38px;
  `}
`;

const GridButton = styled.button<{ active: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  width: 36px;
  border-radius: 50%;
  background: transparent;
  transition: background 0.25s;

  &:not(:last-child) {
    margin-right: 30px;
  }

  &:hover {
    background: ${p => p.theme.colors.hover};
  }

  &[data-a11y='true']:focus::after {
    content: '';
    position: absolute;
    left: -10%;
    top: -10%;
    width: 120%;
    height: 120%;
    border: 2px solid ${p => p.theme.colors.accent};
    background: rgba(255, 255, 255, 0.01);
    border-radius: 50%;
  }

  svg {
    opacity: ${p => (p.active ? 1 : 0.25)};
    transition: opacity 0.2s;

    path {
      fill: ${p => p.theme.colors.primary};
    }
  }
`;
