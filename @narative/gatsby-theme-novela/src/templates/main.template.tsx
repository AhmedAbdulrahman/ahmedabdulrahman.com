import React from 'react';

import SEO from '@components/SEO';
import Layout from '@components/Layout';
import Section from '@components/Section';

import MainHero from '../sections/main/Main.Hero';
import LatestArticles from '../sections/main/Latest.Articles';

const Main = ({ location }) => {
  return (
    <Layout>
      <SEO pathname={location.pathname} />
      <MainHero />
      <Section>
        <LatestArticles />
      </Section>
    </Layout>
  );
};

export default Main;
