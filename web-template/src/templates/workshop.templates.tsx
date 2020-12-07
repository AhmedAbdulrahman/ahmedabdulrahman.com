import React from 'react';
import styled from '@emotion/styled';

import ArticleBody from '@components/Article';
import Layout from '@components/Layout';
import MDXRenderer from '@components/MDX';
import Section from '@components/Section';
import Subscription from '@components/Subscription';
import Paragraph from '@components/Paragraph';

import WorkshopHero from '../sections/workshop/Workshop.Hero';
import WorkshopSEO from '../sections/workshop/Workshop.SEO';


import { Template } from '@types';
import mediaqueries from '@styles/media';

const Workshop: Template = ({ pageContext, location }) => {
  const contentSectionRef = React.useRef<HTMLElement>(null);

  const { workshop, mailchimp } = pageContext;

  return (
    <Layout location={location}>
      <Section component="main">
      <WorkshopSEO workshop={workshop} location={location} />
      <WorkshopHero workshop={workshop} />
      <ArticleBody ref={contentSectionRef}>
        <MDXRenderer content={workshop.body}></MDXRenderer>
          {mailchimp && workshop.subscription && <Subscription />}
      </ArticleBody>
      </Section>
    </Layout>
  );
};

export default Workshop;

const BodyFooter = styled(Paragraph)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${mediaqueries.phablet`
    flex-direction: column;
    align-items: flex-start;

    a:first-of-type {
      margin-bottom: 2rem;
    }
  `}
`;
