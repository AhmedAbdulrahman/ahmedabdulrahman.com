import React from 'react';
import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';

import WorkshopsHero from '../sections/workshops/Workshops.Hero';
import Section from '@components/Section';
import SEO from '@components/SEO';
// import Layout from "@components/Layout";
import { LayoutBase } from '@components/Layout';
import Paginator from '@components/Navigation/Navigation.Paginator';

import WorkshopsList from '../sections/workshops/Workshops.List';

import { Template } from '@types';

// const seoImage = '/seo-readings.jpg';

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
          }
        }
      }
    }
  }
`;

const WorkshopsPage: Template = ({ location, pageContext }) => {
  const workshop = pageContext.group;
  // const instructors = pageContext.additionalContext.instructors;

  const results = useStaticQuery(siteQuery);
  const site = results.allSite.edges[0].node.siteMetadata;

  return (
    <LayoutBase>
      <SEO
        pathname={location.pathname}
        title={site.hero.workshop.heading + ' | ' + site.title}
        // image={seoImage}
      />
      <WorkshopsHero />
      <Section narrow>
        <WorkshopsList workshops={workshop} />
        <ArticlesPaginator show={pageContext.pageCount > 1}>
          <Paginator {...pageContext} />
        </ArticlesPaginator>
      </Section>
      <WorkshopsGradient />
    </LayoutBase>
  );
};

export default WorkshopsPage;

const WorkshopsGradient = styled.div`
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
  ${p => p.show && `margin-top: 64px;`}
`;
