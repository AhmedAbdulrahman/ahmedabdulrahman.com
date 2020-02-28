import React, { useContext, useEffect } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Link } from 'gatsby';

import Headings from '@components/Headings';
import Image, { ImagePlaceholder } from '@components/Image';

import mediaqueries from '@styles/media';
import { IArticle } from '@types';
import { formatReadingTime } from '@utils';

import { GridLayoutContext } from './Articles.List.Context';

/**
 * Tiles
 * [LONG], [SHORT]
 * [SHORT], [LONG]
 * [SHORT], [LONG]
 *
 * or ------------
 *
 * Rows
 * [LONG]
 * [LONG]
 * [LONG]
 */

interface ArticlesListProps {
  articles: IArticle[];
  alwaysShowAllDetails?: boolean;
}

interface ArticlesListItemProps {
  article: IArticle;
  narrow?: boolean;
}

const ArticlesList: React.FC<ArticlesListProps> = ({
  articles,
  alwaysShowAllDetails,
}) => {
  if (!articles) return null;

  const hasOnlyOneArticle = articles.length === 1;
  const { gridLayout = 'tiles', hasSetGridLayout, getGridLayout } = useContext(
    GridLayoutContext,
  );

  /**
   * We're taking the flat array of articles [{}, {}, {}...]
   * and turning it into an array of pairs of articles [[{}, {}], [{}, {}], [{}, {}]...]
   * This makes it simpler to create the grid we want
   */
  const articlePairs = articles.reduce((result, value, index, array) => {
    if (index % 2 === 0) {
      result.push(array.slice(index, index + 2));
    }
    return result;
  }, []);

  useEffect(() => getGridLayout(), []);

  return (
    <ArticlesListContainer
      style={{ opacity: hasSetGridLayout ? 1 : 0 }}
      alwaysShowAllDetails={alwaysShowAllDetails}
    >
      {articlePairs.map((ap, index) => {
        const isEven = index % 2 !== 0;
        const isOdd = index % 2 !== 1;

        return (
          <List
            key={index}
            gridLayout={gridLayout}
            hasOnlyOneArticle={hasOnlyOneArticle}
            reverse={isEven}
          >
            <ListItem article={ap[0]} narrow={isEven} />
            <ListItem article={ap[1]} narrow={isOdd} />
          </List>
        );
      })}
    </ArticlesListContainer>
  );
};

export default ArticlesList;

const ListItem: React.FC<ArticlesListItemProps> = ({ article, narrow }) => {
  if (!article) return null;

  const { gridLayout } = useContext(GridLayoutContext);
  const hasOverflow = narrow && article.title.length > 35;
  const imageSource = narrow ? article.hero.narrow : article.hero.regular;
  const hasHeroImage =
    imageSource &&
    Object.keys(imageSource).length !== 0 &&
    imageSource.constructor === Object;

  return (
    <ArticleLink to={article.slug} data-a11y="false">
      <Item gridLayout={gridLayout}>
        <ImageContainer narrow={narrow} gridLayout={gridLayout}>
          {hasHeroImage ? <Image src={imageSource} /> : <ImagePlaceholder />}
        </ImageContainer>
        <div>
          <Title dark hasOverflow={hasOverflow} gridLayout={gridLayout}>
            {article.title}
          </Title>
          <Excerpt
            narrow={narrow}
            hasOverflow={hasOverflow}
            gridLayout={gridLayout}
          >
            {article.excerpt}
          </Excerpt>
          <MetaData>
            {article.date}
            {` • ${formatReadingTime(article.timeToRead)} • `}
            {article.category}
          </MetaData>
        </div>
      </Item>
    </ArticleLink>
  );
};

const wide = '1fr';
const narrow = '457px';

const limitToTwoLines = css`
  text-overflow: ellipsis;
  overflow-wrap: normal;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  white-space: normal;
  overflow: hidden;
  ${mediaqueries.phablet`
    -webkit-line-clamp: 3;
  `}
`;

const showDetails = css`
  p {
    display: -webkit-box;
  }
  h2 {
    margin-bottom: 10px;
  }
`;

const ArticlesListContainer = styled.div<{ alwaysShowAllDetails?: boolean }>`
  transition: opacity 0.25s;
  ${p => p.alwaysShowAllDetails && showDetails}
`;

const listTile = p => css`
  position: relative;
  display: grid;
  grid-template-columns: ${p.reverse ? `${wide} ${wide}` : `${wide} ${wide}`};
  grid-template-rows: 2;
  column-gap: 30px;
  &:not(:last-child) {
    margin-bottom: 75px;
  }
  ${mediaqueries.desktop_medium`
    grid-template-columns: 1fr 1fr;
  `}
  ${mediaqueries.tablet`
    grid-template-columns: 1fr;

    &:not(:last-child) {
      margin-bottom: 0;
    }
  `}
`;

const listItemRow = p => css`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 488px;
  grid-column-gap: 96px;
  grid-template-rows: 1;
  align-items: center;
  position: relative;
  margin-bottom: 50px;
  ${mediaqueries.desktop`
    grid-column-gap: 24px;
    grid-template-columns: 1fr 380px;
  `}
  ${mediaqueries.tablet`
    grid-template-columns: 1fr;
  `}
  @media (max-width: 540px) {
    background: ${p.theme.colors.card};
  }
  ${mediaqueries.phablet`

  `}
`;

const listItemTile = p => css`
  position: relative;
  ${mediaqueries.tablet`
    margin-bottom: 60px;
  `}
  @media (max-width: 540px) {
    background: ${p.theme.colors.card};
  }
  ${mediaqueries.phablet`
    margin-bottom: 40px;
  `}
`;

// If only 1 article, dont create 2 rows.
const listRow = p => css`
  display: grid;
  grid-template-rows: ${p.hasOnlyOneArticle ? '1fr' : '1fr 1fr'};
`;

const List = styled.div<{
  reverse: boolean;
  gridLayout: string;
  hasOnlyOneArticle: boolean;
}>`
  ${p => (p.gridLayout === 'tiles' ? listTile : listRow)}
`;

const Item = styled.div<{ gridLayout: string }>`
  ${p => (p.gridLayout === 'rows' ? listItemRow : listItemTile)}
`;

const ImageContainer = styled.div<{ narrow: boolean; gridLayout: string }>`
  position: relative;
  height: ${p => (p.gridLayout === 'tiles' ? '280px' : '220px')};
  margin-bottom: ${p => (p.gridLayout === 'tiles' ? '30px' : 0)};
  transition: transform 0.3s var(--ease-out-quad),
    box-shadow 0.3s var(--ease-out-quad);
  & > div {
    height: 100%;
  }
  ${mediaqueries.tablet`
    height: 200px;
    margin-bottom: 35px;
  `}
  ${mediaqueries.phablet`
    overflow: hidden;
    margin-bottom: 0;
    box-shadow: none;
  `}
`;

const Title = styled(Headings.h2)`
  font-size: 21px;
  font-family: ${p => p.theme.fonts.title};
  margin-bottom: ${p =>
    p.hasOverflow && p.gridLayout === 'tiles' ? '10px' : '10px'};
  transition: color 0.3s ease-in-out;
  ${limitToTwoLines};
  ${mediaqueries.desktop`
    margin-bottom: 15px;
  `}
  ${mediaqueries.tablet`
    font-size: 24px;
  `}
  ${mediaqueries.phablet`
    font-size: 22px;
    padding: 30px 20px 0;
    margin-bottom: 10px;
    -webkit-line-clamp: 3;
  `}
`;

const Excerpt = styled.p<{
  hasOverflow: boolean;
  narrow: boolean;
  gridLayout: string;
}>`
  ${limitToTwoLines};
  font-size: 18px;
  margin-bottom: 10px;
  color: ${p => p.theme.colors.secondary};
  font-family: ${p => p.theme.fonts.body};
  display: ${p => (p.hasOverflow && p.gridLayout === 'tiles' ? 'box' : 'box')};
  max-width: ${p => (p.narrow ? '515px' : '515px')};
  ${mediaqueries.desktop`
    display: -webkit-box;
  `}
  ${mediaqueries.phablet`
    margin-bottom; 15px;
  `}
  ${mediaqueries.phablet`
    max-width: 100%;
    padding:  0 20px;
    margin-bottom: 20px;
    -webkit-line-clamp: 3;
  `}
`;

const MetaData = styled.div`
  font-weight: 400;
  font-size: 16px;
  color: ${p => p.theme.colors.secondary};
  opacity: 0.6;
  ${mediaqueries.phablet`
    max-width: 100%;
    padding:  0 20px 30px;
  `}
`;

const ArticleLink = styled(Link)`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border-radius: 5px;
  z-index: 1;
  transition: transform 0.33s var(--ease-out-quart);
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);

  &:hover ${ImageContainer}, &:focus ${ImageContainer} {
    transform: translateY(-1px);
    box-shadow: 0 30px 40px -20px rgba(59, 73, 97, 0.32),
      0 30px 30px -30px rgba(59, 73, 97, 0.52);
  }
  &:hover h2,
  &:focus h2 {
    color: ${p => p.theme.colors.accent};
  }
  &[data-a11y='true']:focus::after {
    content: '';
    position: absolute;
    left: -1.5%;
    top: -2%;
    width: 103%;
    height: 104%;
    border: 3px solid ${p => p.theme.colors.accent};
    background: rgba(255, 255, 255, 0.01);
    border-radius: 5px;
  }
  ${mediaqueries.phablet`
    &:hover ${ImageContainer} {
      transform: none;
      box-shadow: initial;
    }
    &:active {
      transform: scale(0.97) translateY(3px);
    }
  `}
`;
