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
  line-height: 1.5;
  font-family: ${p => p.theme.fonts.body};
  color: ${p => p.theme.colors.secondary};
  margin-bottom: 64px;

  span {
    color: ${p => p.theme.colors.accent};
  }

  ${mediaqueries.phablet`
  font-size: 1.8rem;
  line-height: 1.6;
`}
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
