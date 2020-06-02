import React from 'react';

import SEO from '@components/SEO';
import Layout from '@components/Layout';
import Section from '@components/Section';

import MainHero from '../sections/main/Main.Hero';
import LatestArticles from '../sections/main/Latest.Articles';

const Main = ({ location }) => {
  return (
    <Layout>
      <Section>
        <SEO pathname={location.pathname} />
        <MainHero />
        <LatestArticles />
      </Section>
    </Layout>
  );
};

export default Main;
