import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { useColorMode } from 'theme-ui';
import mediaqueries from '@styles/media';

import Section from '@components/Section';
import SEO from '@components/SEO';

import Layout from '@components/Layout';
import Anchor from '@components/Anchor';
import Link from '@components/Link';
import Headings from '@components/Headings';
import Icons from '@icons';

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

const AboutPage = ({ location }) => {
  const results = useStaticQuery(siteQuery);
  const title = results.allSite.edges[0].node.siteMetadata.title;
  const [colorMode] = useColorMode();
  const isDark = colorMode === `dark`;
  return (
    <Layout>
      <SEO pathname={location.href} title={`About me - ${title}`} image="/about.png" />
      <Section component="main">
      <Container>
          <HeroTextContainer>
          <Headings.HeroHeading
          >
            Hey, <span>I'm Ahmed</span>
          </Headings.HeroHeading>
          <Headings.Subtitle>
          Stockholm based Creative Front-end Crispiness Creator &amp;
              Designer.
            </Headings.Subtitle>
        </HeroTextContainer>
        <HeroImage>
            <Icons.About />
          </HeroImage>
        </Container>
        <ContentContainer>
          <MyText>
            <InfoText>
              Although my skillset is diverse with full of passion for all
              aspects of building great software, I specialise in Front-end
              development. My focus is on creating engaging, accessible &amp;
              performant interfaces for humans. I've worked on projects of
              various scales, both solo and as part of a team.
            </InfoText>
            <InfoText>
              Currently, I live Stockholm, where I work at Oakwood building
              premium design solutions in all digital touchpoints, while also
              taking on freelance projects that pique my interest.
            </InfoText>
            <Headings.SectionHeading
              css={css`
                margin: 100px 0;
              `}
            >
              Where to go next
            </Headings.SectionHeading>
            <InfoText>
              You can find out
              {` `}
              <Link to={`/uses`} title={`Uses`}>
                what tools, software, gadgets, and services
              </Link>
              {` `}I use or read about some of the ways you can{` `}
              <Link to={`/work-with-me`} title={`Work with me`}>
                work with me
              </Link>
              . I’m currently working on a{' '}
              <Link to={`/workshops`} title={`Uses`}>
                workshops
              </Link>{' '}
              page, to list all my upcoming Online Workshops, but it’s taking a
              while. For those interested in{' '}
              <Link to={`/`} title={`Home`}>
                how I buit this site
              </Link>
              , I’ve tried my best to list all the tools and techniques I used.
            </InfoText>
            <InfoText>
              Find me on{' '}
              <Anchor
                href="https://github.com/AhmedAbdulrahman"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </Anchor>
              , and{' '}
              <Anchor
                href="https://twitter.com/_ahmed_ab"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </Anchor>{' '}
              if you have questions. Very occassionally I check my{' '}
              <Anchor
                href="https://www.linkedin.com/in/ahmed-abd/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </Anchor>
              .
            </InfoText>

            <Headings.SectionHeading
              css={css`
                margin: 100px 0;
              `}
            >
              What else?
            </Headings.SectionHeading>
            <InfoText>
              When I'm not coding or reading excellent software books (which I
              really must compile a list for), I spend time with kids, write,
              and jog around town 🏃‍.
            </InfoText>
          </MyText>
        </ContentContainer>
      </Section>
      <ArticlesGradient />
    </Layout>
  );
};

export default AboutPage;

const ArticlesGradient = styled.div`
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

const Container = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 450px;
  column-gap: 5em;
  overflow: hidden;
  margin: 104px 0 40px;

  ${mediaqueries.desktop`
    grid-template-columns: 1fr 1fr;
  `}
  ${mediaqueries.tablet`
    grid-template-columns: 1fr;
  `}
`;

const HeroTextContainer = styled.div`
  position: relative;
  align-self: end;
  align-self: flex-start;
`;

const HeroImage = styled.div`
  position: relative;

  ${mediaqueries.tablet`
    display: none;
    visibility: hidden;
  `}
`;

const ContentContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 64px;
  z-index: 1;
`;

const InfoText = styled.p`
  font-size: 2.6rem;
  line-height: 1.8;
  font-family: ${p => p.theme.fonts.body};
  color: ${p => p.theme.colors.articleText};
  margin-bottom: 24px;

  ${mediaqueries.phablet`
    font-size: 2.2rem;
    line-height: 1.6;
  `}
`;

const MyText = styled.div`
  position: relative;
`;
