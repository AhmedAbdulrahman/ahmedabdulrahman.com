/**
 * This react helmt code is adapted from
 * https://themeteorchef.com/tutorials/reusable-seo-with-react-helmet.
 *
 * A great tutorial explaining how to setup a robust version of an
 * SEO friendly react-helmet instance.
 *
 *
 * Use the Helmt on pages to generate SEO and meta content!
 *
 * Usage:
 * <SEO
 *   title={title}
 *   description={description}
 *   image={image}
 * />
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';

interface HelmetProps {
  title: string;
  description?: string;
  pathname: string;
  image?: string;
  url?: string;
  canonical?: string;
  published?: string;
  timeToRead?: string;
}

const seoQuery = graphql`
  {
    allSite {
      edges {
        node {
          siteMetadata {
            description
            social {
              url
              name
            }
            siteUrl
            title
          }
        }
      }
    }
  }
`;

const themeUIDarkModeWorkaroundScript = [
  {
    type: 'text/javascript',
    innerHTML: `
    (function() {
      try {
        var mode = localStorage.getItem('theme-ui-color-mode');
        if (!mode) {
          localStorage.setItem('theme-ui-color-mode', 'light');
        }
      } catch (e) {}
    })();
  `,
  },
];

const SEO: React.FC<HelmetProps> = ({
  title,
  description,
  children,
  url,
  image,
  published,
  pathname,
  timeToRead,
}) => {
  const results = useStaticQuery(seoQuery);
  const site = results.allSite.edges[0].node.siteMetadata;
  const twitter = site.social.find(option => option.name === 'twitter') || {};

  const fullURL = (path: string) =>
    path ? `${site.siteUrl}${path}` : site.siteUrl;

  // If no image is provided lets looks for a default static image
  image = image ? image : '/preview.jpg';

  const metaTags = [
    { charset: 'utf-8' },
    {
      'http-equiv': 'X-UA-Compatible',
      content: 'IE=edge',
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      name: 'theme-color',
      content: '#faf9d5',
    },
    {
      name: 'apple-mobile-web-app-status-bar-style',
      content: 'black-translucent',
    },
    {
      rel: 'canonical',
      href: fullURL(pathname),
    },
    { itemprop: 'name', content: title || site.title },
    { itemprop: 'description', content: description || site.description },
    { itemprop: 'image', content: fullURL(image) },
    { name: 'description', content: description || site.description },

    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: '@_ahmed_ab' || site.name },
    { name: 'twitter:title', content: title || site.title },
    { name: 'twitter:description', content: description || site.description },
    { name: 'twitter:url', content: twitter.url },
    {
      name: 'twitter:image',
      content: fullURL(image),
    },

    { property: 'og:title', content: title || site.title },
    { property: 'og:url', content: url || site.siteUrl },
    { property: 'og:type"', content: 'website' },
    { property: 'og:image', content: fullURL(image) },
    { property: 'og:image:alt', content: "Ahmed Abdulrahman's Desk" },
    { property: 'og:description', content: description || site.description },
    { property: 'og:site_name', content: site.name },
    { property: 'og:locale', content: 'en' },
  ];

  if (published) {
    metaTags.push({ name: 'article:published_time', content: published });
  }

  if (timeToRead) {
    metaTags.push({ name: 'twitter:label1', content: 'Reading time' });
    metaTags.push({ name: 'twitter:data1', content: `${timeToRead} min read` });
  }

  return (
    <Helmet
      title={title || site.title}
      htmlAttributes={{ lang: 'en' }}
      script={themeUIDarkModeWorkaroundScript}
      meta={metaTags}
    >
      <link rel="icon" type="image/png" href="/icon-72x72.png"></link>
      {children}
    </Helmet>
  );
};

export default SEO;
