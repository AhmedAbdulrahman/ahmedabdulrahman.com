import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';
import mediaqueries from '@styles/media';
import { Link } from 'gatsby';

import Section from '@components/Section';
import SEO from '@components/SEO';
import Layout from '@components/Layout';
import ArticlesGradient from '@components/ArticlesGradient';

import PageHero from '../sections/others';

interface PageProps {
  location: Location;
}

const siteQuery = graphql`
  {
    allArticle(
      sort: { order: DESC, fields: date }
      filter: { secret: { eq: false } }
    ) {
      edges {
        node {
          title
          date(formatString: "DD MMMM YYYY")
          slug
        }
      }
      totalCount
    }
    allSite {
      edges {
        node {
          siteMetadata {
            description
            title
            hero {
              maxWidth
            }
          }
        }
      }
    }
  }
`;

const Archive: React.FC<PageProps> = ({ location }) => {
  const result = useStaticQuery(siteQuery);
  const siteSEO = result.allSite.edges[0].node.siteMetadata;

  return (
    <Layout>
      <SEO
        pathname={location.pathname}
        title={'Archive - ' + siteSEO.title}
        description={siteSEO.description}
      />
      <PageHero heading="Archive" maxWidth={800}>
        {result.allArticle.totalCount + ' articles.'}
      </PageHero>
      <Section narrow>
        <Wrapper>
          {result.allArticle.edges.map((item, index) => (
            <ArticlesItem to={item.node.slug} data-a11y="false" key={index}>
              <Date>{item.node.date}</Date>
              <Title>{item.node.title}</Title>
            </ArticlesItem>
          ))}
        </Wrapper>
      </Section>
      <ArticlesGradient />
    </Layout>
  );
};

export default Archive;

const ArticlesItem = styled(Link)`
  z-index: 1;
  position: relative;
  display: grid;
  grid-template-columns: 160px 1fr;
  column-gap: 16px;
  margin-bottom: 24px;
  background-image: none;

  &:hover h2,
  &:focus h2 {
    color: ${p => p.theme.colors.accent};
    border-bottom-color: ${p => p.theme.colors.accent};
  }

  ${mediaqueries.tablet`
    grid-template-columns: 1fr;
    margin-bottom: 40px;
  `};
`;

const Date = styled.div`
  font-size: 16px;
  color: ${p => p.theme.colors.secondary};
  margin-bottom: 4px;
  padding-top: 3px;
`;

const Title = styled.h2`
  font-size: 18px;
  color: ${p => p.theme.colors.secondary};
  text-decoration: underline;
  transition: color 0.25s var(--ease-in-out-quad);
`;

const Wrapper = styled.div`
  margin-bottom: 240px;
`;
