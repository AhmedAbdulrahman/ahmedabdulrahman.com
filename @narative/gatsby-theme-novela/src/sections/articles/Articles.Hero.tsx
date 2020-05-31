import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from '@emotion/styled';

import Section from '@components/Section';
import Headings from '@components/Headings';

import mediaqueries from '@styles/media';

const ArticlesHero: React.FC = () => {
  return (
    <Section narrow>
      <HeadingContainer style={{ maxWidth: `850px` }}>
        <Headings.HeroHeading>
          Writing is <span>thinking</span>.
        </Headings.HeroHeading>
        <InfoText>
          I write about solving problems with code, designing things people use,
          teaching, and learning.{' '}
          <Anchor to="/archive" data-a11y="false">
            Archive
          </Anchor>
        </InfoText>
      </HeadingContainer>
    </Section>
  );
};

export default ArticlesHero;

const HeadingContainer = styled.div`
  margin: 104px 0 40px;

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

const InfoText = styled.p`
  font-size: 2.8rem;
  line-height: 1.8;
  font-family: ${p => p.theme.fonts.body};
  color: ${p => p.theme.colors.articleText};
  margin-bottom: 64px;
`;

const Anchor = styled(Link)`
  display: inline-block;
  position: relative;
  color: ${p => p.theme.colors.articleText};

  &:before,
  &:after {
    content: '';
    display: block;
    height: 0.5em;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0.2em;
    z-index: -1;
    background-color: ${p => p.theme.colors.border};
  }
  &:after {
    transform: scaleX(0);
    transform-origin: 0 50%;
    transition: transform 0.3s cubic-bezier(0.86, 0, 0.07, 1);
  }

  &:hover {
    &:after {
      transform: scaleX(1);
      background-color: ${p => p.theme.colors.accent};
    }
  }
`;
