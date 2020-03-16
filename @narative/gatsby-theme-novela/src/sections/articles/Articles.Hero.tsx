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
          Words and <span>Code</span>.
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
  margin: 100px 0 76px;

  ${mediaqueries.desktop`
  width: 80%;
  `}

  ${mediaqueries.tablet`
  width: 100%;
  `}
`;

const InfoText = styled.p`
  font-size: 22px;
  margin-top: 16px;
  line-height: 1.5;
  font-family: ${p => p.theme.fonts.body};
  color: ${p => p.theme.colors.secondary};
`;

const Anchor = styled(Link)`
  color: ${p => p.theme.colors.secondary};
  border-bottom: 1px solid ${p => p.theme.colors.secondary};
  margin-left: 6px;

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.accent};
    border-bottom-color: ${p => p.theme.colors.accent};
  }
`;
