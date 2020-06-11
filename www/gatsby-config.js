require("dotenv").config();

const siteMetadata = {
  title: `Ahmed Abdulrahman's Desk`,
  name: `Ahmed Abdulrahman`,
  siteUrl: `https://aadev.me`,
  lang: 'en', // Language Tag on <html> element
  email: `hello@aadev.me`,
  description: `Developer who's learning to write and express thoughts`,
  hero: {
    heading: `You'll cover all the techniques to create performant, composable, reusable UI components to level-up your skills as a developer.`,
    writing: {
      // heading: `Developer with Designer's Eye`,
      heading: `Creative Developer Focusing on Motion & Refined Digital Experinces`,
      subHeading: `I’m Ahmed, a Creative Front-end Crispiness Creator and designer based in Sweden.`
    },
    // writingHeading: `I HELP BUSINESSES STAND OUT.`,
    workshop: {
        heading: `Remote Workshops`,
        subHeading: `We prodvide you with a valuable and effective workshops to Level-up your skills as a developer.`
    },
    maxWidth: 776,
  },
  social: [
    {
      url: `https://twitter.com/_ahmed_ab`,
      name: 'twitter',
    },
    {
      url: `https://www.behance.net/ahmedabdulrahman`,
      name: 'behance',
    },
    {
      name: 'github',
      url: `https://github.com/AhmedAbdulrahman`,
    },
  ],
};

const plugins = [
  {
    resolve: "web-template",
    options: {
      contentPosts: "content/posts",
      contentAuthors: "content/authors",
      contentWorkshops: "content/workshops",
      rootPath: "/",
      basePath: "/",
      writingPath: '/writing',
      authorsPage: true,
      mailchimp: false,
      sources: {
        local: true,
        contentful: false,
      },
    },
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `Ahmed Abdulrahman's Desk`,
      short_name: `ahmedabdulrahman`,
      start_url: `/`,
      lang: 'en',
      background_color: '#fcf5ea',
      theme_color: '#000',
      display: `standalone`,
      icons: [
        {
          src: '/favicons/android-chrome-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '/favicons/android-chrome-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    },
  },
  `gatsby-plugin-offline`,
  {
    resolve: `gatsby-plugin-robots-txt`,
    options: {
      host: `https://aadev.me/`,
      sitemap: `https://aadev.me/sitemap.xml`,
      policy: [{ userAgent: '*' }]
    }
  },
  `gatsby-plugin-sitemap`,
  {
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: "",
    },
  },
  // {
  //   resolve: "gatsby-plugin-mailchimp",
  //   options: {
  //     endpoint:
  //       "https://narative.us19.list-manage.com/subscribe/post?u=65ef169332a03669b9538f6ef&amp;id=c55c426282",
  //   },
  // },
];

/**
 * For development purposes if there's no Contentful Space ID and Access Token
 * set we don't want to add in gatsby-source-contentful because it will throw
 * an error.
 *
 * To enanble Contentful you must
 * 1. Create a new Space on contentful.com
 * 2. Import the Contentful Model from web-template/conteful
 * 3. Add .env to www/ (see www/env.example)
 * 4. Enable contentful as a source in this file for web-template
 */
if (process.env.CONTENTFUL_SPACE_ID && process.env.CONTENTFUL_ACCESS_TOKEN) {
  plugins.push({
    resolve: "gatsby-source-contentful",
    options: {
      spaceId: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    },
  });
}

module.exports = {
  siteMetadata,
  plugins,
};
