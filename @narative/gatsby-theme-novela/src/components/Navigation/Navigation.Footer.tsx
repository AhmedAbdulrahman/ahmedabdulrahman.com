import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { graphql, useStaticQuery } from 'gatsby';

import Section from '@components/Section';
import SocialLinks from '@components/SocialLinks';

import mediaqueries from '@styles/media';

const siteQuery = graphql`
  {
    allSite {
      edges {
        node {
          siteMetadata {
            name
            siteUrl
            email
            social {
              url
              # name
            }
          }
        }
      }
    }
    allMdx(sort: { fields: frontmatter___date, order: ASC }) {
      edges {
        node {
          frontmatter {
            date
          }
        }
      }
    }
  }
`;

const Footer: React.FC<{}> = () => {
  const results = useStaticQuery(siteQuery);
  const {
    name,
    social,
    siteUrl,
    email,
  } = results.allSite.edges[0].node.siteMetadata;

  const copyrightDate = (() => {
    const { edges } = results.allMdx;
    const years = [0, edges.length - 1].map(edge =>
      new Date(edges[edge].node.frontmatter.date).getFullYear(),
    );
    return years[0] === years[1] ? `${years[0]}` : `${years[0]}–${years[1]}`;
  })();

  return (
    <Section
      component="footer"
      narrow
      css={css`
        padding: 2rem 0;
      `}
    >
      <HoritzontalRule />
      <FooterContainer>
        <FooterItem>
          <strong>© {copyrightDate}</strong>
          <br />
          <a className="p-name u-url" rel="me" href={siteUrl}>
            {name}
          </a>
        </FooterItem>
        <FooterItem>
          <strong>Contact</strong>
          <br />
          <a href={`mailto:${email}`} rel="me" className="u-email">
            {email}
          </a>
        </FooterItem>
        <FooterItem right>
          <SocialLinks links={social} />
        </FooterItem>
      </FooterContainer>
    </Section>
  );
};

export default Footer;

const FooterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  color: ${p => p.theme.colors.secondary};
`;

const HoritzontalRule = styled.div`
  position: relative;
  margin: 80px auto 32px;
  border-bottom: 1px solid ${p => p.theme.colors.horizontalRule};

  ${mediaqueries.tablet`
    margin: 60px auto;
  `}

  ${mediaqueries.phablet`
    display: none;
  `}
`;

const FooterItem = styled.p<{ right: boolean }>`
  flex-basis: 50%;
  margin-bottom: 0.5rem;
  z-index: 1;

  a {
    color: inherit;
    text-decoration: underline;
  }

  ${p =>
    p.right &&
    `
  flex-basis: 100%;
  margin-bottom: 0;

    @media (min-width: 670px){
      margin-left: auto !important;
      padding-right: 0 !important;
    }
  `}

  @media (min-width: 670px) {
    flex: 0 0 auto;
    padding-right: 2.5rem;
    margin: 0;
  }

  @media (min-width: 940px) {
    padding-right: 6rem;
  }
`;

const FooterGradient = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 590px;
  z-index: -1;
  pointer-events: none;
  background: ${p => p.theme.colors.gradient};
  transition: ${p => p.theme.colorModeTransition};
`;
