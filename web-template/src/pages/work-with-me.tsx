import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import Section from '@components/Section';
import SEO from '@components/SEO';
import Layout from '@components/Layout';
import Anchor from '@components/Anchor';
import Headings from '@components/Headings';

import mediaqueries from '@styles/media';
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
            email
          }
        }
      }
    }
  }
`;

const WorkWithMe: Template = ({ location }) => {
  const results = useStaticQuery(siteQuery);
  const {title, email} = results.allSite.edges[0].node.siteMetadata;

  return (
    <Layout>
      <SEO pathname={location.href} title={`Work with me - ${title}`} />
      <Section>
        <Container>
          <HeroTextContainer>
            <Headings.HeroHeading disableGutters>
              Work <span>With Me</span>
            </Headings.HeroHeading>
            <Headings.Subtitle>
              Here you will get a clear idea of ways we can work together and if
              I’m the right fit for your next project.
              </Headings.Subtitle>
          </HeroTextContainer>
        </Container>
        <ContentContainer>
          <MyText>
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
              <Anchor href={`mailto:${email}`} rel="me">
              let’s talk about it
              </Anchor>
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

const Container = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 450px;
  column-gap: 5em;
  overflow: hidden;
  margin: 200px 0 40px;

  ${mediaqueries.desktop`
    grid-template-columns: 1fr;
    margin: 120px 0 40px;
  `}

  ${mediaqueries.tablet`
    grid-template-columns: 1fr;
  `}
`;

const HeroTextContainer = styled.div`
  position: relative;
  align-self: center;

  ${mediaqueries.tablet`
    padding-top: 2rem;
  `}

  ${mediaqueries.desktop_up`
    padding-top: 8rem;
  `}

  ${mediaqueries.desktop_medium_up`
    padding-top: 15rem;
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
