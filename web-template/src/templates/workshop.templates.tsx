import React, { useRef } from 'react';

import Layout from '@components/Layout';
import MDXRenderer from '@components/MDX';
import Section from '@components/Section';

import WorkshopHero from '../sections/workshop/Workshop.Hero';
import WorkshopSEO from '../sections/workshop/Workshop.SEO';

import { Template } from '@types';

const Workshop: Template = ({ pageContext, location }) => {
  const contentSectionRef = useRef<HTMLElement>(null);

  const { workshop } = pageContext;

  return (
    <Layout>
      <WorkshopSEO workshop={workshop} location={location} />
      <WorkshopHero workshop={workshop} />
      <Section ref={contentSectionRef}>
        <MDXRenderer content={workshop.body}></MDXRenderer>
      </Section>
    </Layout>
  );
};

export default Workshop;
