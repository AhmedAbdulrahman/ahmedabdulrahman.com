import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { useColorMode } from 'theme-ui';
import mediaqueries from '@styles/media';
import { Link } from 'gatsby';

import Section from '@components/Section';
import SEO from '@components/SEO';

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

const AboutPage = ({ location }) => {
  const results = useStaticQuery(siteQuery);
  const title = results.allSite.edges[0].node.siteMetadata.title;
  const [colorMode] = useColorMode();
  const isDark = colorMode === `dark`;
  return (
    <Layout>
      <SEO pathname={location.href} title={`About me - ${title}`} />
      <Section relative>
        <HeadingContainer>
          <Headings.HeroHeading
            css={css`
              max-width: 620px;
            `}
          >
            Hey, I'm Ahmed 👋
          </Headings.HeroHeading>
        </HeadingContainer>
      </Section>
      <Section>
        <ContentContainer>
          <MyText>
            <InfoText>
              Stockholm based Creative Front-end <span>Crispiness Creator</span>{' '}
              &amp; <span>Designer</span>
            </InfoText>
            <InfoText>
              Although my skillset is diverse with full of passion for all
              aspects of building great software, I specialise in Front-end
              development. I've worked on projects of various scales, both solo
              and as part of a team.
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
              <NavLink to={`/uses`} title={`Uses`}>
                what tools, software, gadgets, and services
              </NavLink>
              {` `}I use or read about some of the ways you can{` `}
              <NavLink to={`/work-with-me`} title={`Work with me`}>
                work with me
              </NavLink>
              . I’m currently working on a{' '}
              <NavLink to={`/workshops`} title={`Uses`}>
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

const HeadingContainer = styled.div`
  margin: 100px 0 76px;
  font-family: ${p => p.theme.fonts.title};
  ${mediaqueries.desktop`
    width: 80%;
  `}

  ${mediaqueries.tablet`
    width: 100%;
  `}

  ${mediaqueries.phablet`
  margin: 60px 0 36px;
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
  font-size: 2.8rem;
  line-height: 1.5;
  font-family: ${p => p.theme.fonts.body};
  color: ${p => p.theme.colors.secondary};
  margin-bottom: 24px;

  span {
    color: ${p => p.theme.colors.primary};
  }

  ${mediaqueries.phablet`
  font-size: 1.8rem;
  line-height: 1.6;
`}
`;

const MyText = styled.div`
  position: relative;
`;

const NavLink = styled(Link)`
  color: ${p => p.theme.colors.primary};
`;
