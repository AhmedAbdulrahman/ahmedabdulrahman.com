import React from "react";
import styled from "@emotion/styled";
import mediaqueries from "@styles/media";
import { Link } from 'gatsby';

import Section from "@components/Section";
import SEO from "@components/SEO";
import Image from '@components/Image';
import Layout from "@components/Layout";
import Anchor from "@components/Anchor";

import { Template } from "@types";

const image = '/hero.png';

const AboutPage: Template = ({ location, pageContext }) => {

  return (
    <Layout>
      <SEO pathname={location.pathname} title={"About me"} />
      <Section relative>
        <HeadingContainer>
          <HeroHeading>Nice to meet you!</HeroHeading>
        </HeadingContainer>
      </Section>
      <Section>
        <ContentContainer>
          <MyImage><Image src={image} /></MyImage>
          <MyText>
            <InfoHeading>
              Hey there, I'm Ahmed.
            </InfoHeading>
            <InfoText>
              A Stockholm based creative Front-end Engineer with a full-stack skillset full of passion for all aspects of building great software.
            </InfoText>
            <InfoText>
              Although my skillset is diverse, I specialise in Front-end development. I've worked on projects of various scales, both solo and as part of a team.
            </InfoText>
            <InfoText>
              At Oakwood I build a E-commerce platforms using isomorphic React and GraphQL. I’m also a Google Developer Expert for Web Technologies.
            </InfoText>
            <InfoText>
              Curious about how I work? Check out my <NavLink to={`/uses`} title={`Uses`}>uses</NavLink> page for a full list of all the software, gadgets, and services I use.
            </InfoText>
            {/* <InfoText>
              One of the greatest things about being a designer with an engineering background is that not only he can take care of the graphical aspects of a project, but can also fully understand, participate and even take care of the technical aspects of those projects.
            </InfoText> */}
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
  font-size: 100px;
  line-height: 1.1;
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
  grid-template-columns: 1fr 1fr;
  column-gap: 56px;
  z-index: 1;

  ${mediaqueries.desktop`
    grid-template-columns: 1fr;
  `}
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

const InfoText = styled.p`
  font-size: 16px;
  margin-top: 24px;
  line-height: 1.7;
  color: ${p => p.theme.colors.primary};
`;

const MyText = styled.div`
  position: relative;
`;

const MyImage = styled.div`
  position: relative;
  display: block;
  width: 100%;
  box-shadow: 0 22px 44px 0 rgba(0,0,0,0.22);
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
    color: ${p => p.theme.colors.primary};
    opacity: 0.85;
  }

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.accent};
    border-bottom-color: ${p => p.theme.colors.accent};
  }
`;
