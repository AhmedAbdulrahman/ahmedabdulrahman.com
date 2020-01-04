import React, { useContext, useEffect } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import { uniq, includes } from 'lodash';
import { useColorMode } from 'theme-ui';

import Headings from '@components/Headings';
import Image, { ImagePlaceholder } from '@components/Image';

import mediaqueries from '@styles/media';
import { IArticle } from '@types';
import { capitalize } from '@utils';

const jsIcon = '/javascript.png';
const reactIcon = '/react.png';
const testingIcon = '/testing.png';
const graphqlIcon = '/graphqllogo.png';
const pythonIcon = '/python.png';
const nodeIcon = '/nodejs.png';

interface WorkshopsListProps {
  workshops: IArticle[];
  alwaysShowAllDetails?: boolean;
}

interface WorkshopsListItemProps {
  workshop: IArticle;
  narrow?: boolean;
  isDark?: boolean;
}

const WorkshopsList: React.FC<WorkshopsListProps> = ({
  workshops,
  alwaysShowAllDetails,
}) => {
  if (!workshops) return null;

  const [colorMode] = useColorMode();
  const isDark = colorMode === `dark`;

  const hasOnlyOneArticle = workshops.length === 1;
  const workshopTech = uniq(workshops.map(workshop => workshop.tech));
  const [displayedTech, setDisplayedTech] = React.useState(workshopTech);

  const techToggleIsActive = (getDisplayedTech, tech) => {
    return includes(getDisplayedTech, tech) && getDisplayedTech.length === 1;
  };

  const techImage = tech => {
    return (
      (tech === 'react' && `${reactIcon}`) ||
      (tech === 'javascript' && `${jsIcon}`) ||
      (tech === 'testing' && `${testingIcon}`) ||
      (tech === 'graphql' && `${graphqlIcon}`) ||
      (tech === 'python' && `${pythonIcon}`) ||
      (tech === 'node' && `${nodeIcon}`)
    );
  };

  const workshopPairsFiltered = workshops.filter(workshop => {
    return includes(displayedTech, workshop.tech);
  });
  /**
   * We're taking the flat array of articles [{}, {}, {}...]
   * and turning it into an array of pairs of articles [[{}, {}], [{}, {}], [{}, {}]...]
   * This makes it simpler to create the grid we want
   */
  const workshopPairs = workshopPairsFiltered.reduce(
    (result, value, index, array) => {
      if (index % 2 === 0) {
        result.push(array.slice(index, index + 2));
      }
      return result;
    },
    [],
  );

  return (
    <WorkshopsListContainer
      style={{ opacity: 1 }}
      alwaysShowAllDetails={alwaysShowAllDetails}
    >
      <TechToggleContainer>
        {workshopTech.map(tech => (
          <TechToggle
            isActive={techToggleIsActive(displayedTech, tech)}
            isDark={isDark}
            key={tech}
            onClick={() => {
              if (techToggleIsActive(displayedTech, tech)) {
                setDisplayedTech(workshopTech);
              } else {
                setDisplayedTech([tech]);
              }
            }}
          >
            <img src={techImage(tech)} alt={tech} /> {capitalize(tech)}
          </TechToggle>
        ))}
      </TechToggleContainer>

      {workshopPairs.map((ap, index) => {
        const isEven = index % 2 !== 0;
        const isOdd = index % 2 !== 1;

        return (
          <List
            key={index}
            gridLayout="tiles"
            hasOnlyOneArticle={hasOnlyOneArticle}
            reverse={isEven}
          >
            <ListItem workshop={ap[0]} narrow={isEven} isDark={isDark} />
            <ListItem workshop={ap[1]} narrow={isOdd} isDark={isDark} />
          </List>
        );
      })}
    </WorkshopsListContainer>
  );
};

export default WorkshopsList;

const ListItem: React.FC<WorkshopsListItemProps> = ({ workshop, isDark }) => {
  if (!workshop) return null;

  const imageSource = workshop.hero.regular;
  const hasHeroImage =
    imageSource &&
    Object.keys(imageSource).length !== 0 &&
    imageSource.constructor === Object;

  return (
    <ArticleLink to={workshop.slug} data-a11y="false" isDark={isDark}>
      <Item>
        <ImageContainer>
          {hasHeroImage ? <Image src={imageSource} /> : <ImagePlaceholder />}
        </ImageContainer>
        <TextContainer>
          <Author>{workshop.instructor}</Author>
          <Title>{workshop.title}</Title>
          {/* <Excerpt>{workshop.excerpt}</Excerpt> */}
        </TextContainer>
        <ContentContainer></ContentContainer>
      </Item>
    </ArticleLink>
  );
};

const wide = '1fr';

const limitToTwoLines = css`
  text-overflow: ellipsis;
  overflow-wrap: normal;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  white-space: normal;
  overflow: hidden;
`;

const limitToOneLines = css`
  text-overflow: ellipsis;
  overflow-wrap: normal;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  white-space: normal;
  overflow: hidden;
`;

const showDetails = css`
  p {
    display: -webkit-box;
  }
  h2 {
    margin-bottom: 10px;
  }
`;

const WorkshopsListContainer = styled.div<{ alwaysShowAllDetails?: boolean }>`
  transition: opacity 0.25s;
  ${p => p.alwaysShowAllDetails && showDetails}
`;

const listTile = p => css`
  position: relative;
  display: grid;
  grid-template-columns: ${p.reverse ? `${wide} ${wide}` : `${wide} ${wide}`};
  grid-template-rows: 2;
  column-gap: 30px;
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

const listItemTile = p => css`
  position: relative;
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
  height: 624px;
  ${listItemTile}
  ${mediaqueries.desktop`
    height: 536px;
  `}
  ${mediaqueries.tablet`
    height: 600px;
  `}
  ${mediaqueries.phone`
    height: 536px;
  `}
`;

const ImageContainer = styled.div`
  position: relative;
  margin: 56px auto 32px auto;
  box-shadow: 8px 12px 32px rgba(0, 0, 0, 0.16);
  height: auto;
  transition: transform 0.3s var(--ease-out-quad),
  box-shadow 0.3s var(--ease-out-quad);
  width: 320px;
  background: ${p => p.theme.colors.secondary};
  & > div {
    height: 100%;
    ::before {
      background: linear-gradient(to left, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.3) 90%);
      box-shadow: 1px 0 rgba(0, 0, 0, 0.1), 2px 0 0px rgba(255, 255, 255, 0.1);
      content: "";
      display: block;
      height: 100%;
      position: absolute;
      width: 6px;
      z-index: 2;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      border-top-right-radius: 2px;
      border-bottom-right-radius: 2px;
    }
  }
  ::before {
    background-image: url(/utils/shadow.png);
    background-size: contain;
    background-position: right;
    background-repeat: no-repeat;
    content: " ";
    display: block;
    height: 100%;
    right: 99%;
    position: absolute;
    top: 0;
    transform-origin: center right;
    width: 100%;
    z-index: 0;
    pointer-events: none;
  }
  ${mediaqueries.desktop`
    width: 264px;
  `}
  ${mediaqueries.tablet`
    width: 304px;
  `}
  ${mediaqueries.phone`
    width: 264px;
    margin-top: 32px;
  `}
`;

const TextContainer = styled.div`
  position: relative;
  padding-left: 40px;
  padding-right: 40px;
  text-align: center;
  ${mediaqueries.desktop`
    padding-left: 24px;
    padding-right: 24px;
  `}
`;

const ContentContainer = styled.div`
  position: relative;
`;

const Title = styled(Headings.h2)`
  font-size: 24px;
  font-family: ${p => p.theme.fonts.title};
  color: ${p => p.theme.colors.primary};
  margin-bottom: 8px;
  transition: color 0.3s ease-in-out;
  ${limitToOneLines};
  ${mediaqueries.desktop`
    font-size: 22px;
  `}
  ${mediaqueries.tablet`
    font-size: 24px;
  `}
  ${mediaqueries.phablet`
    font-size: 22px;
  `}
`;

const Excerpt = styled.p`
  ${limitToTwoLines};
  font-size: 16px;
  margin-bottom: 8px;
  color: ${p => p.theme.colors.secondary};
  font-family: ${p => p.theme.fonts.body};
  display: ${p => (p.hasOverflow && p.gridLayout === 'tiles' ? 'none' : 'box')};
  max-width: 515px;
  line-height: 1.6;
  ${mediaqueries.desktop`
    display: -webkit-box;
  `}
  ${mediaqueries.phablet`
    max-width: 100%;
  `}
`;

const Author = styled.div`
  font-size: 14px;
  color: ${p => p.theme.colors.primary};
  font-family: ${p => p.theme.fonts.title};
  margin-bottom: 8px;
`;

const ArticleLink = styled(Link)`
  position: relative;
  display: block;
  width: 100%;
  top: 0;
  left: 0;
  margin-bottom: 30px;
  z-index: 1;
  transition: transform 0.33s var(--ease-out-quart);
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
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

  ${p => p.isDark && `background: ${p.theme.colors.card};`}

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

const TechToggleContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
  width: 100%;
  z-index: 2;
  background-image: ${p =>
    `linear-gradient(180deg, ${p.theme.colors.background}, ${p.theme.colors.background});`};

  ${mediaqueries.phablet`
    margin-top: 30px;
    padding: 20px;
  `}

  ${mediaqueries.tablet_up`
    position: sticky;
    top: 0px;
    padding: 20px;
  `}
`;

const TechToggle = styled.button<{ isActive?: boolean; isDark?: boolean }>`
  font-family: ${p => p.theme.fonts.title};
  transition: color 0.25s var(--ease-in-out-quad);
  display: inline-block;
  position: relative;
  margin: 5px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
  border: none !important;
  border-radius: 4px;
  padding: 8px 15px 8px 12px;
  color: ${p => p.theme.colors.primary};
  background: ${p => (p.isDark ? p.theme.colors.card : `#eaf1ff`)};
  transition: background 0.3s ease-in-out;

  ${mediaqueries.phablet`
    width: 43%;
  `}

  &:hover {
    color: ${p => p.theme.colors.background};
    background: ${p => p.theme.colors.primary};
  }

  ${p =>
    p.isActive &&
    `
    color: ${p.theme.colors.background};
    background: ${p.theme.colors.primary};
  `}

  img {
    margin: 0;
    margin-right: 10px;
    width: 20px;
  }
`;
