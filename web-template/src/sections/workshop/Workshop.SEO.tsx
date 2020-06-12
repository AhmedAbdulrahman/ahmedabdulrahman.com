import React from 'react';

import SEO from '@components/SEO';

import { IWorkshop } from '@types';
import { graphql, useStaticQuery } from 'gatsby';

const siteQuery = graphql`
  {
    allSite {
      edges {
        node {
          siteMetadata {
            name
            siteUrl
            title
          }
        }
      }
    }
  }
`;

interface WorkshopSEOProps {
  workshop: IWorkshop;
  location: Location;
  imagelocation?: string;
}

const WorkshopSEO: React.FC<WorkshopSEOProps> = ({
  workshop,
  location,
  imagelocation,
}) => {
  const results = useStaticQuery(siteQuery);
  const {siteUrl} = results.allSite.edges[0].node.siteMetadata;

  // Checks if the source of the image is hosted on Contentful
  if (`${workshop.hero.seo.src}`.includes('ctfassets')) {
    imagelocation = `https:${workshop.hero.seo.src}`;
  } else {
    imagelocation = `${siteUrl + workshop.hero.seo.src}`;
  }

  return (
    <SEO
      canonicalUrl={workshop.canonical_url}
      dateforSEO={workshop.dateForSEO}
      description={workshop.excerpt}
      image={imagelocation}
      isBlogPost={true}
      articlepathName={siteUrl + location.pathname}
      published={workshop.date}
      title={workshop.title}
    >
    </SEO>
  );
};

export default WorkshopSEO;
