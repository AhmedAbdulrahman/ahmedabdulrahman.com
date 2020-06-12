import React from 'react';
import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';

import WorkshopsHero from '../sections/workshops/Workshops.Hero';
import Section from '@components/Section';
import SEO from '@components/SEO';
import { LayoutBase } from '@components/Layout';
import Paginator from '@components/Navigation/Navigation.Paginator';

import WorkshopsList from '../sections/workshops/Workshops.List';

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

const WorkshopsPage = ({ location, pageContext }) => {
  const workshop = pageContext.group;

  const results = useStaticQuery(siteQuery);
  const site = results.allSite.edges[0].node.siteMetadata;

  return (
    <LayoutBase>
      <Section component="main">
        <SEO
          image={`${site.siteUrl}/workshops.png`}
          pathname={location.pathname}
          title={`Workshops - ${site.title}`}
        />
        <WorkshopsHero
          subtitle={site.hero.workshop.subHeading}
        />
        <WorkshopsList workshops={workshop} />
        <ArticlesPaginator show={pageContext.pageCount > 1}>
          <Paginator {...pageContext} />
        </ArticlesPaginator>
        <WorkshopsGradient />
      </Section>
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
