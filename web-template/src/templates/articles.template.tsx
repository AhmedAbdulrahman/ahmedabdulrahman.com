import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';

import Section from '@components/Section';
import SEO from '@components/SEO';
import Layout from '@components/Layout';
import Paginator from '@components/Navigation/Navigation.Paginator';
import NavCategory from '@components/Navigation/Navigation.Categories';

import ArticlesHero from '../sections/articles/Articles.Hero';
import ArticlesList from '../sections/articles/Articles.List';

import { Template } from '@types';

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
            title
            siteUrl
          }
        }
      }
    }
  }
`;

const ArticlesPage: Template = ({ location, pageContext }) => {
  // const articles = pageContext.group;
  const { group: articles, categories } = pageContext;
  const authors = pageContext.additionalContext.authors;
  const results = useStaticQuery(siteQuery);
  const site = results.allSite.edges[0].node.siteMetadata;

  return (
    <Layout>
      <Section>
        <SEO
          image={`${site.siteUrl}/writing.png`}
          pathname={location.pathname}
          title={`Writing - ${site.title}`}
        />
        <ArticlesHero authors={authors} />
        <NavCategory categories={categories} />
        <ArticlesList articles={articles} />
        <ArticlesPaginator show={pageContext.pageCount > 1}>
          <Paginator {...pageContext} />
        </ArticlesPaginator>
        <ArticlesGradient />
      </Section>
    </Layout>
  );
};

export default ArticlesPage;

const ArticlesGradient = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 590px;
  z-index: 0;
  pointer-events: none;
  background: ${p => p.theme.colors.gradient};
  transition: ${p => p.theme.colorModeTransition};
`;

const ArticlesPaginator = styled.div<{ show: boolean }>`
  ${p => p.show && `margin-top: 95px;`}
`;
