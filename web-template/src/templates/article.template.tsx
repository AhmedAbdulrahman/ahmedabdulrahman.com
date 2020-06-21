import React, { useRef, useState, useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';
import throttle from 'lodash/throttle';
import { useColorMode } from 'theme-ui';
// import { graphql, useStaticQuery } from 'gatsby';
import { IoLogoTwitter } from 'react-icons/io';

import Layout from '@components/Layout';
import MDXRenderer from '@components/MDX';
import Progress from '@components/Progress';
import Section from '@components/Section';
import ArticleBody from '@components/Article';
import Subscription from '@components/Subscription';
import Anchor from '@components/Anchor';
import Paragraph from '@components/Paragraph';

import mediaqueries from '@styles/media';
import { debounce } from '@utils';

import ArticleAside from '../sections/article/Article.Aside';
import ArticleHero from '../sections/article/Article.Hero';
import ArticleControls from '../sections/article/Article.Controls';
import ArticlesNext from '../sections/article/Article.Next';
import ArticleSEO from '../sections/article/Article.SEO';
import ArticleShare from '../sections/article/Article.Share';

import { Template } from '@types';

const GITHUB_USERNAME = 'ahmedabdulrahman';
const GITHUB_REPO_NAME = 'ahmedabdulrahman.com';

const siteQuery = graphql`
  {
    allSite {
      edges {
        node {
          siteMetadata {
            name
          }
        }
      }
    }
  }
`;

const Article: Template = ({ pageContext, location }) => {
  const contentSectionRef = useRef<HTMLElement>(null);

  const [hasCalculated, setHasCalculated] = useState<boolean>(false);
  const [contentHeight, setContentHeight] = useState<number>(0);

  const [colorMode] = useColorMode();
  const isDark = colorMode === `dark`;

  const results = useStaticQuery(siteQuery);
  const name = results.allSite.edges[0].node.siteMetadata.name;

  const { article, authors, mailchimp, next } = pageContext;

  const editUrl = `https://github.com/${GITHUB_USERNAME}/${GITHUB_REPO_NAME}/edit/master/www/content/posts${article.slug}/index.mdx`;
  const discussUrl = `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `https://${GITHUB_REPO_NAME}${article.slug}`,
  )}`;

  useEffect(() => {
    const calculateBodySize = throttle(() => {
      const contentSection = contentSectionRef.current;

      if (!contentSection) return;

      /**
       * If we haven't checked the content's height before,
       * we want to add listeners to the content area's
       * imagery to recheck when it's loaded
       */
      if (!hasCalculated) {
        const debouncedCalculation = debounce(calculateBodySize);
        const $imgs = contentSection.querySelectorAll('img');

        $imgs.forEach($img => {
          // If the image hasn't finished loading then add a listener
          if (!$img.complete) $img.onload = debouncedCalculation;
        });

        // Prevent rerun of the listener attachment
        setHasCalculated(true);
      }

      // Set the height and offset of the content area
      setContentHeight(contentSection.getBoundingClientRect().height);
    }, 20);

    calculateBodySize();
    window.addEventListener('resize', calculateBodySize);

    return () => window.removeEventListener('resize', calculateBodySize);
  }, []);

  return (
    <Layout>
      <Section component="main">
        <ArticleSEO article={article} authors={authors} location={location} />
        <ArticleHero article={article} authors={authors} />
        <ArticleAside contentHeight={contentHeight}>
          <Progress contentHeight={contentHeight} />
        </ArticleAside>
        <MobileControls>
          <ArticleControls />
        </MobileControls>
        <ArticleBody ref={contentSectionRef}>
          <MDXRenderer content={article.body}>
            <ArticleShare />
          </MDXRenderer>
          <BodyFooter>
            <Anchor href={discussUrl} target="_blank" rel="noopener noreferrer">
              Discuss on Twitter
            </Anchor>
            <TwitterLink
              href="https://twitter.com/intent/follow?screen_name=_ahmed_ab"
              target="_blank"
              rel="noopener noreferrer"
              title={`Follow @_ahmed_ab on Twitter`}
            >
              <IoLogoTwitter />
              Follow @_ahmed_ab
            </TwitterLink>
            {/* {` • `}
          <Anchor href={editUrl} target="_blank" rel="noopener noreferrer">
            Edit on GitHub
          </Anchor> */}
          </BodyFooter>
           {mailchimp && article.subscription && <Subscription />}
        </ArticleBody>
        {next.length > 0 && (
          <>
            <FooterNext>Other things I've written</FooterNext>
            <ArticlesNext articles={next} />
            <FooterSpacer />
          </>
        )}
      </Section>
    </Layout>
  );
};

export default Article;

const MobileControls = styled.div`
  position: relative;
  padding: 30px 0;
  transition: background 0.2s linear;
  text-align: center;

  ${mediaqueries.tablet_up`
    display: none;
  `}
`;

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

const TwitterLink = styled.a`
  align-items:center;
  background-color: rgb(29, 161, 242);
  border-radius:4px;
  box-shadow: rgba(6, 146, 218, 0.5) 0px 10px 30px -8px;
  box-sizing:border-box;
  padding-left: 2rem;
  padding-right: 2rem;
  color:rgb(255, 255, 255);
  cursor:pointer;
  display:flex;
  filter:contrast(1.25);
  font-size:16px;
  font-weight:600;
  font-family: ${p => p.theme.fonts.monospace};
  height:64px;
  line-height:18.4px;
  text-align:center;
  text-decoration-color:rgb(255, 255, 255);
  text-decoration-line:none;
  text-decoration-style:solid;
  text-size-adjust:100%;
  text-transform:uppercase;
  transition-delay:0s;
  transition-duration:0.2s;
  transition-property:all;
  transition-timing-function:cubic-bezier(0.23, 1, 0.32, 1);
  -webkit-font-smoothing:antialiased;

  svg {
    margin-right: 10px;
    font-size: 18px;
  }
  &:hover {
    filter: hue-rotate(-2deg);
    transition: all 200ms cubic-bezier(0.23,1,0.32,1);
  }
`;

const FooterNext = styled.h3`
  position: relative;
  font-family: ${p => p.theme.fonts.body};
  font-weight: 400;
  font-size: 1.6rem;
  opacity: 0.25;
  margin-bottom: 56px;
  color: ${p => p.theme.colors.primary};

  ${mediaqueries.tablet`
    margin-bottom: 60px;
  `}

  &::after {
    content: '';
    position: absolute;
    background: ${p => p.theme.colors.grey};
    width: ${(870 / 1140) * 100}%;
    height: 1px;
    right: 0;
    top: 13px;

    ${mediaqueries.tablet`
      width: ${(600 / 1140) * 100}%;
    `}

    ${mediaqueries.phablet`
      width: ${(450 / 1140) * 100}%;
    `}

    ${mediaqueries.phone`
      width: 80px;
    `}
  }
`;

const FooterSpacer = styled.div`
  margin-bottom: 65px;
`;
