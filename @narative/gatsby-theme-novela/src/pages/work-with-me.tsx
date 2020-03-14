import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
// import { useColorMode } from 'theme-ui';
import mediaqueries from '@styles/media';
import { Link } from 'gatsby';

import Section from '@components/Section';
import SEO from '@components/SEO';
// import Image from '@components/Image';
import Layout from '@components/Layout';
// import AnchorLink from '@components/Anchor';
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

const WorkWithMe: Template = ({ location }) => {
  const results = useStaticQuery(siteQuery);
  const title = results.allSite.edges[0].node.siteMetadata.title;
  // const [colorMode] = useColorMode();
  // const isDark = colorMode === `dark`;

  return (
    <Layout>
      <SEO pathname={location.href} title={`Work with me - ${title}`} />
      <Section relative>
        <HeadingContainer>
          <HeroTextContainer>
            <Headings.HeroHeading>Work With Me</Headings.HeroHeading>
            <InfoText>
              This page will give you a clear idea of ways we can work together
              and if I’m the right fit for your next project.
            </InfoText>
          </HeroTextContainer>
        </HeadingContainer>
      </Section>
      <Section>
        <ContentContainer>
          <MyText>
            <Headings.SectionHeading
              css={css`
                margin: 100px 0;
              `}
            >
              Who I am
            </Headings.SectionHeading>
            <InfoText>
              Hello! I'm Ahmed, Creative Front-end Developer and Designer from
              Stockholm, Sweden. I work at Oakwood Creative Studio as Front-end
              Crispiness Creator, while also taking on freelance projects that
              pique my interest.
            </InfoText>

            <Headings.SectionHeading
              css={css`
                margin: 100px 0;
              `}
            >
              What I do
            </Headings.SectionHeading>
            <InfoText>
              I help businesses and independent individuals turn ideas into
              fully functional digital products. My work takes place in the grey
              area between user experience design, user interface design and
              front-end web development. From research and planning to executing
              high fidelity prototypes in code, I usually involve myself in
              projects from concept through to launch.
            </InfoText>

            <InfoText>
              I can help you conduct research to develop an understanding of
              your customers needs, develop wireframes and prototypes to test
              and validate possible solutions, and build and launch a working
              product. Through usability testing and iteration I can help you
              fine tune the product to make improvements.
            </InfoText>

            <Headings.SectionHeading
              css={css`
                margin: 100px 0;
              `}
            >
              How I work
            </Headings.SectionHeading>

            <InfoText>
              I use recognised Strategies and Lean development practices to keep
              the process as dynamic and fluid as possible. We’ll move
              thoughtfully and efficiently in the most appropriate direction
              until we find the right solution.
            </InfoText>

            <Headings.SectionHeading
              css={css`
                margin: 100px 0;
              `}
            >
              Who hir-
              <br />
              es me
            </Headings.SectionHeading>
            <InfoText>
              Anyone who need a Front-end Developer &amp; Product Designer
              experienced in building businesses from the ground up and
              launching them online.
            </InfoText>

            <InfoText>
              My clients tend to be those keen to execute ideas, but don’t
              necessarily have the technical skills to do so. Or those who’d
              rather save on big agency fees by investing their budget in good
              design, at an affordable rate, from an independent designer and
              developer.
            </InfoText>

            <Headings.SectionHeading
              css={css`
                margin: 100px 0;
              `}
            >
              What I ch-
              <br />
              arge
            </Headings.SectionHeading>
            <InfoText>
              My rate varies from roughly £1.5k — £2.5k per week, depending on
              the requirements and my involvement in the project. I charge a
              flat fee for all projects, so no hourly rate, just a single
              project price.
            </InfoText>

            <Headings.SectionHeading
              css={css`
                margin: 100px 0;
              `}
            >
              Get in to-
              <br />
              uch
            </Headings.SectionHeading>
            <InfoText>
              If you have a project in mind, and you think I might be a good
              fit, then{' '}
              <NavLink to={`/contact`} title={`Contact`}>
                let’s talk about it
              </NavLink>{' '}
              and we can take it from there.
            </InfoText>
          </MyText>
        </ContentContainer>
      </Section>
      <ArticlesGradient />
    </Layout>
  );
};

export default WorkWithMe;

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
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 64px;
  margin: 100px 0 76px;
  font-family: ${p => p.theme.fonts.title};

  ${mediaqueries.desktop`
    width: 80%;
  `}

  ${mediaqueries.tablet`
    width: 100%;
  `}
`;

const HeroTextContainer = styled.div`
  position: relative;
  align-self: end;
  align-self: center;
`;

const HeroHeading = styled.h2`
  font-size: 85px;
  line-height: 98%;
  letter-spacing: -1px;
  font-family: ${p => p.theme.fonts.title};
  font-weight: ${p => p.theme.fontsWeight.bold};
  color: ${p => p.theme.colors.primary};

  ${mediaqueries.desktop`
    font-size: 56px
  `}
  ${mediaqueries.tablet`
    font-size: 48px;
  `}
  ${mediaqueries.phablet`
    font-size: 56px;
    line-height: 1.15;
  `}
`;

const ContentContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 64px;
  z-index: 1;
`;

const InfoHeading = styled.h1`
  font-weight: ${p => p.theme.fontsWeight.bold};
  font-family: ${p => p.theme.fonts.title};
  font-size: 32px;
  line-height: 1.35;
  max-width: 100%;
  margin-bottom: 32px;
  color: ${p => p.theme.colors.primary};

  ${mediaqueries.phablet`
    font-size: 32px;
  `}
`;

const InfoSubHeading = styled.p`
  font-size: 22px;
  font-family: ${p => p.theme.fonts.body};
  margin-top: 24px;
  margin-bottom: 32px;
  color: ${p => p.theme.colors.primary};

  ${mediaqueries.phablet`
    font-size: 18px;
  `}
`;

const InfoText = styled.p`
  font-size: 2.8rem;
  line-height: 1.5;
  font-family: ${p => p.theme.fonts.body};
  color: ${p => p.theme.colors.secondary};
  margin-bottom: 64px;

  span {
    color: ${p => p.theme.colors.accent};
    font-style: italic;
  }
`;

const MyText = styled.div`
  position: relative;
`;

const MyImage = styled.div`
  position: relative;
  display: block;
  width: 100%;

  margin-bottom: 56px;

  .gatsby-image-wrapper {
    box-shadow: 0 22px 44px 0 rgba(0, 0, 0, 0.22);
  }

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    object-position: center;
  }
`;

const NavLink = styled(Link)`
  transition: ${p => p.theme.colorModeTransition};
  color: ${p => p.theme.colors.primary};
  border-bottom: 1px solid ${p => p.theme.colors.primary};

  &:visited {
    color: ${p => p.theme.colors.primary};
    opacity: 0.85;
  }

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.accent};
    border-bottom-color: ${p => p.theme.colors.accent};
  }
`;
