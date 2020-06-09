import React, { useRef } from 'react';
import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '@components/Layout';
import MDXRenderer from '@components/MDX';
import Section from '@components/Section';
import Article from '@components/Article';

import mediaqueries from '@styles/media';

import WorkshopHero from '../sections/workshop/Workshop.Hero';
import ArticleSEO from '../sections/article/Article.SEO';

import { Template } from '@types';

const siteQuery = graphql`
  {
    allSite {
      edges {
        node {
          siteMetadata {
            name
          }
        }
      }
    }
  }
`;

const Workshop: Template = ({ pageContext, location }) => {
  const contentSectionRef = useRef<HTMLElement>(null);

  const results = useStaticQuery(siteQuery);
  const name = results.allSite.edges[0].node.siteMetadata.name;

  const { workshop } = pageContext;

  return (
    <Layout>
      <ArticleSEO article={workshop} location={location} />
      <WorkshopHero workshop={workshop} />
      <Section ref={contentSectionRef}>
        <MDXRenderer content={workshop.body}></MDXRenderer>
      </Section>
    </Layout>
  );
};

export default Workshop;
