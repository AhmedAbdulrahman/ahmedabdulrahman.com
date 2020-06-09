import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Link } from 'gatsby';

import Section from '@components/Section';
import SEO from '@components/SEO';
import Layout from '@components/Layout';

import Icons from '@icons';

import mediaqueries from '@styles/media';

interface PageProps {
  location: Location;
}

const NotFound: React.FC<PageProps> = ({ location }) => {
  return (
    <Layout>
      <SEO pathname={location.pathname} />
      <Section>
        <ImageWrapper>
          <Icons.NotFound />
        </ImageWrapper>
        <Subheading>
          Sorry about that - might be a typo in the URL, or maybe this page has
          moved? Anyway, enjoy this nice error page I made for you.
          <br />
          <br />
          <br />
          <BackButon to={`/`} title={`Nah, Go Back Home`}>
            Nah, Go Back Home
          </BackButon>
        </Subheading>
      </Section>
    </Layout>
  );
};

export default NotFound;

const ImageWrapper = styled.div`
  position: relative;
  margin: 160px auto 0;
  max-width: 50rem;
  ${mediaqueries.phablet`
    margin: 40px 0;
  `}
  svg {
    fill: ${p => p.theme.colors.secondary};
  }
`;

const Subheading = styled.p`
  width: 100%;
  max-width: 70rem;
  margin-top: 78px;
  margin-right: auto;
  margin-bottom: 48px;
  margin-left: auto;
  font-size: 2.5rem;
  text-align: center;

  ${mediaqueries.phablet`
  font-size: 2rem;
  `}
`;

const BackButon = styled(Link)`
  display: inline-block;
  font-size: 15px;
  font-weight: ${p => p.theme.fontsWeight.bold};
  letter-spacing: 0.025em;
  padding: 1.35rem 2rem;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  overflow-wrap: break-word;
  hyphens: auto;

  background-color: ${p => p.theme.colors.accent};
  color: ${p => p.theme.colors.cleanBackground};
  border-color: transparent;
  border-radius: 0.25rem;

  text-transform: uppercase;
  transform: translateY(0);
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
  transition: background 0.35s ease, transform 0.35s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 7px 14px rgba(50, 50, 50, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
    background-color: ${p => p.theme.colors.primaryOffset};
  }
`;
