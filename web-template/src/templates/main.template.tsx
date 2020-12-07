import React from 'react';

import SEO from '@components/SEO';
import Layout from '@components/Layout';


import MainHero from '../sections/main/Main.Hero';
import LatestArticles from '../sections/main/Latest.Articles';

const Main = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO pathname={location.pathname} />
      <MainHero />
      <LatestArticles />
    </Layout>
  );
};

export default Main;
