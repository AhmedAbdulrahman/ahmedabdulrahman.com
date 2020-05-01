import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import { graphql, useStaticQuery } from 'gatsby';

import Headings from '@components/Headings';

import mediaqueries from '@styles/media';

const siteQuery = graphql`
  {
    allArticle(
      limit: 1
      sort: { order: DESC, fields: date }
      filter: { secret: { eq: false } }
    ) {
      edges {
        node {
          title
          date(formatString: "DD MMMM")
          slug
        }
      }
    }
  }
`;

const LatestArticles: React.FC<{}> = () => {
  const result = useStaticQuery(siteQuery).allArticle.edges[0].node;

  return (
    <GridContainer>
      <WriteContainer>
        <Headings.SectionHeading
          css={css`
            margin: 100px 0;
          `}
        >
          Writing is th-
          <br />
          inking.
        </Headings.SectionHeading>
        <Text>
          Because without words, apps would be an unusable jumble of shapes and
          icons. And more importantly, I write to get ideas, to inspire myself
          and to learn something new.
        </Text>
        <LatestArticle to={result.slug} title={result.title}>
          <ArticleDate>Latest article - {result.date}</ArticleDate>
          <ArticleTitle>{result.title}</ArticleTitle>
        </LatestArticle>
        <ViewLink to={`/writing`} title={`See all articles`}>
          View all articles →
        </ViewLink>
      </WriteContainer>
    </GridContainer>
  );
};

export default LatestArticles;

const GridContainer = styled.div`
  position: relative;
  display: grid;
  z-index: 1;
  grid-template-columns: 1fr;
  column-gap: 48px;
  row-gap: 128px;
  margin-bottom: 128px;
  color: ${p => p.theme.colors.secondary};

  ${mediaqueries.tablet`
		grid-template-columns: 1fr;
  `}
`;

const WriteContainer = styled.div``;

const Text = styled.p`
  font-size: 2.8rem;
  line-height: 1.5;
  font-family: ${p => p.theme.fonts.body};
  color: ${p => p.theme.colors.secondary};
  margin-bottom: 64px;

  span {
    color: ${p => p.theme.colors.accent};
    font-style: italic;
  }

  ${mediaqueries.phablet`
  font-size: 1.8rem;
  line-height: 1.6;
`}
`;

const Separator = styled.div`
  background-image: url('/separator-vertical.svg');
  background-repeat: no-repeat;
  background-position: center top;
  ${mediaqueries.tablet`
		display: none;
  `}
`;

const WriteTitle = styled(Headings.h2)`
  color: ${p => p.theme.colors.secondary};
  margin-bottom: 16px;
`;

const LatestArticle = styled(Link)`
  margin-top: 40px;
  display: block;

  &:hover h3,
  &:focus h3 {
    color: ${p => p.theme.colors.accent};
  }
`;

const ArticleDate = styled.div`
  font-family: ${p => p.theme.fonts.title};
  font-size: 15px;
  text-transform: uppercase;
  margin-bottom: 8px;
  color: ${p => p.theme.colors.accent};

  ${mediaqueries.phablet`
  font-size: 12px;
  `}
`;

const ArticleTitle = styled(Headings.h3)`
  margin-bottom: 16px;
  text-decoration: underline;
  transition: color 0.2s var(--ease-in-out-quad);
`;

const ViewLink = styled(Link)`
  font-weight: ${p => p.theme.fontsWeight.bold};
  font-family: ${p => p.theme.fonts.title};
  font-size: 14px;
  color: ${p => p.theme.colors.secondary};
  transition: color 0.25s var(--ease-in-out-quad);
  display: inline-block;
  position: relative;
  margin-top: 24px;
  &::after {
    background: none repeat scroll 0 0 transparent;
    bottom: -8px;
    content: '';
    display: block;
    height: 2px;
    left: 0;
    position: absolute;
    background: ${p => p.theme.colors.accent};
    transition: width 0.25s ease 0s, left 0.25s ease 0s;
    width: 0;
  }
  &:hover {
    color: ${p => p.theme.colors.accent};
    &::after {
      width: 100%;
      left: 0;
    }
  }
`;
