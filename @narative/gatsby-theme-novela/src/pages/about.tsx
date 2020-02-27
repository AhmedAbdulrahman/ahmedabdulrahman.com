import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { useColorMode } from 'theme-ui';
import mediaqueries from '@styles/media';
import { Link } from 'gatsby';

import Section from '@components/Section';
import SEO from '@components/SEO';
// import Image from '@components/Image';
import Layout from '@components/Layout';
import AnchorLink from '@components/Anchor';
import Headings from '@components/Headings';

import { Template } from '@types';

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

const AboutPage: Template = ({ location }) => {
  const results = useStaticQuery(siteQuery);
  const title = results.allSite.edges[0].node.siteMetadata.title;
  const [colorMode] = useColorMode();
  const isDark = colorMode === `dark`;
  return (
    <Layout>
      <SEO pathname={location.href} title={`About me - ${title}`} />
      <Section relative>
        <HeadingContainer>
          <HeroHeading>Nice to meet you!</HeroHeading>
        </HeadingContainer>
      </Section>
      <Section>
        <ContentContainer>
          <MyText>
            <InfoHeading>Design & Code</InfoHeading>
            <InfoSubHeading>
              Hey, I'm Ahmed 👋, a Stockholm based Creative Front-end Developer
            </InfoSubHeading>
            <InfoText>
              Although my skillset is diverse with full of passion for all
              aspects of building great software, I specialise in Front-end
              development. I've worked on projects of various scales, both solo
              and as part of a team.
            </InfoText>
            <InfoText>
              Currently I live Stockholm, where I work at Oakwood we build
              premium design solutions in all digital touchpoints.
            </InfoText>
            <InfoHeading
              css={css`
                margin-top: 32px;
              `}
            >
              Where to go next
            </InfoHeading>
            <InfoText>
              You can find out
              {` `}
              <NavLink to={`/uses`} title={`Uses`}>
                what tools, software, gadgets, and services
              </NavLink>
              {` `}I use or read about some of the ways you can{` `}
              <NavLink to={`/`} title={`Uses`}>
                work with me
              </NavLink>
              .
            </InfoText>

            <InfoText>
              {' '}
              I’m currently working on a{' '}
              <NavLink to={`/`} title={`Uses`}>
                workshops
              </NavLink>{' '}
              page, to list all my upcoming Online Workshops, but it’s taking a
              while. For those interested in{' '}
              <NavLink to={`/`} title={`Uses`}>
                how I buit this site
              </NavLink>
              , I’ve tried my best to list all the tools and techniques I used.
            </InfoText>
            <InfoText>
              Find me on{' '}
              <AnchorLink
                href="https://github.com/AhmedAbdulrahman"
                target="_blank"
                rel="noopener noreferrer"
                isDark={isDark}
              >
                Github
              </AnchorLink>
              , and{' '}
              <AnchorLink
                href="https://twitter.com/_ahmed_ab"
                target="_blank"
                rel="noopener noreferrer"
                isDark={isDark}
              >
                Twitter
              </AnchorLink>{' '}
              if you have questions. Very occassionally I check my{' '}
              <AnchorLink
                href="https://www.linkedin.com/in/ahmed-abd/"
                target="_blank"
                rel="noopener noreferrer"
                isDark={isDark}
              >
                LinkedIn
              </AnchorLink>
              .
            </InfoText>

            <InfoHeading
              css={css`
                margin-top: 32px;
              `}
            >
              What else?
            </InfoHeading>
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

const HeadingContainer = styled.div`
  margin: 100px 0;
  font-family: ${p => p.theme.fonts.title};

  ${mediaqueries.desktop`
    width: 80%;
  `}

  ${mediaqueries.tablet`
    width: 100%;
  `}
`;

const HeroHeading = styled.h2`
  font-style: normal;
  font-weight: 600;
  font-size: 80px;
  line-height: 115%;
  max-width: 600px;
  color: ${p => p.theme.colors.primary};

  a {
    color: ${p => p.theme.colors.accent};
  }

  ${mediaqueries.desktop`
    font-size: 64px
  `}

  ${mediaqueries.phablet`
    font-size: 54px;
  `}
`;

const ContentContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 56px;
  z-index: 1;
`;

const InfoHeading = styled.h1`
  font-weight: 600;
  font-family: ${p => p.theme.fonts.title};
  font-size: 32px;
  line-height: 1.35;
  max-width: 100%;
  margin-bottom: 32px;
  color: ${p => p.theme.colors.primary};

  ${mediaqueries.phablet`
    font-size: 24px;
  `}
`;

const InfoSubHeading = styled(Headings.h2)`
  font-size: 20px;
  font-weight: 500;
  line-height: 1.8;
  font-family: ${p => p.theme.fonts.title};
  margin-bottom: 32px;
  color: ${p => p.theme.colors.primary};
  ${mediaqueries.phablet`
    font-size: 18px;
  `}
`;

const InfoText = styled.p`
  font-size: 18px;
  margin-top: 24px;
  line-height: 1.7;
  color: ${p => p.theme.colors.articleText};
`;

const MyText = styled.div`
  position: relative;
`;

const MyImage = styled.div`
  position: relative;
  display: block;
  width: 100%;
  // box-shadow: 0 22px 44px 0 rgba(0, 0, 0, 0.22);
  margin-bottom: 56px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

const NavLink = styled(Link)`
  transition: ${p => p.theme.colorModeTransition};
  color: ${p => p.theme.colors.primary};
  border-bottom: 1px solid ${p => p.theme.colors.primary};

  &:visited {
    color: ${p => p.theme.colors.secondary};
    opacity: 0.85;
  }

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.secondary};
    border-bottom-color: ${p => p.theme.colors.accent};
  }
`;
