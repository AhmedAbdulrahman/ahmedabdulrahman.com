import React, { useRef } from 'react';
import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '@components/Layout';
import MDXRenderer from '@components/MDX';
import Section from '@components/Section';

import mediaqueries from '@styles/media';

import WorkshopHero from '../sections/Workshop/Workshop.Hero';
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
      {/* <ArticleSEO
        article={workshop}
        // authors={instructors}
        location={location}
      /> */}
      <WorkshopHero workshop={workshop} />
      <WorkshopBody ref={contentSectionRef}>
        <MDXRenderer content={workshop.body}></MDXRenderer>
      </WorkshopBody>
    </Layout>
  );
};

export default Workshop;

const WorkshopBody = styled.article`
  position: relative;
  padding: 56px 0 35px;
  transition: background 0.2s linear;
  ${mediaqueries.desktop`
    padding-left: 53px;
  `}

  ${mediaqueries.tablet`
    padding: 70px 0 80px;
  `}
  ${mediaqueries.phablet`
    padding: 60px 0;
  `}
`;
