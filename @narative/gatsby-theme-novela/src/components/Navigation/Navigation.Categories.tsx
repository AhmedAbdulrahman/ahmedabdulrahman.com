import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

import Icons from '@icons';
import mediaqueries from '@styles/media';

import { GridLayoutContext } from '../../sections/articles/Articles.List.Context';

const NavCategory = ({ categories }) => {
  const {
    gridLayout = 'tiles',
    hasSetGridLayout,
    setGridLayout,
  } = React.useContext(GridLayoutContext);

  const tilesIsActive = hasSetGridLayout && gridLayout === 'tiles';

  return (
    <NavContainer>
      <NavControls>
        <NavLink to={`/`} title={`All articles`} activeClassName="active">
          All
        </NavLink>
        {categories.map(category => (
          <NavLink
            key={category}
            to={`/categories/${category.toLowerCase()}`}
            title={`${category} category`}
            activeClassName="active"
          >
            {category}
          </NavLink>
        ))}
      </NavControls>
      <GridControlsContainer>
        <GridButton
          onClick={() => setGridLayout('tiles')}
          active={tilesIsActive}
          data-a11y="false"
          title="Show articles in Tile grid"
          aria-label="Show articles in Tile grid"
        >
          <Icons.Tiles />
        </GridButton>
        <GridButton
          onClick={() => setGridLayout('rows')}
          active={!tilesIsActive}
          data-a11y="false"
          title="Show articles in Row grid"
          aria-label="Show articles in Row grid"
        >
          <Icons.Rows />
        </GridButton>
      </GridControlsContainer>
    </NavContainer>
  );
};

export default NavCategory;

const NavContainer = styled.div`
  position: relative;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  // flex-direction: column;
  margin-bottom: 40px;
  padding-top: 16px;
`;

const NavControls = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  ${mediaqueries.phablet`
    right: -5px;
  `}
`;

const NavLink = styled(Link)`
  font-weight: bold;
  font-family: ${p => p.theme.fonts.title};
  font-size: 16px;
  color: ${p => p.theme.colors.grey};
  transition: color 0.25s var(--ease-in-out-quad);
  display: inline-block;
  position: relative;
  margin-right: 40px;

  ${mediaqueries.phablet`
    margin-right: 32px;
  `}
  &::after {
    background: none repeat scroll 0 0 transparent;
    bottom: -8px;
    content: '';
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: ${p => p.theme.colors.accent};
    transition: width 0.25s ease 0s, left 0.25s ease 0s;
    width: 0;
  }
  &:hover {
    color: ${p => p.theme.colors.primary};
    &::after {
      width: 100%;
      left: 0;
    }
  }
  &.active {
    color: ${p => p.theme.colors.primary};
    &::after {
      background: none repeat scroll 0 0 transparent;
      bottom: -8px;
      content: '';
      display: block;
      height: 2px;
      left: calc(50% - 8px);
      position: absolute;
      background: ${p => p.theme.colors.accent};
      transition: width 0.25s ease 0s, left 0.25s ease 0s;
      width: 16px;
    }
  }
`;

const Hero = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  margin: 35px auto 110px;
`;

const Heading = styled.h1`
  font-size: 38px;
  font-family: ${p => p.theme.fonts.title};
  color: ${p => p.theme.colors.primary};
  margin-bottom: 15px;
  font-weight: 600;
  text-transform: capitalize;
  ${mediaqueries.tablet`
  `}
  ${mediaqueries.phablet`
  `}
`;

const GridControlsContainer = styled.div`
  display: flex;
  align-items: center;

  ${mediaqueries.tablet`
    display: none;
  `};
`;

const GridButton = styled.button<{ active: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  width: 36px;
  border-radius: 50%;
  background: transparent;
  transition: background 0.25s;

  &:hover {
    background: ${p => p.theme.colors.hover};
  }

  &[data-a11y='true']:focus::after {
    content: '';
    position: absolute;
    left: -10%;
    top: -10%;
    width: 120%;
    height: 120%;
    border: 2px solid ${p => p.theme.colors.accent};
    background: rgba(255, 255, 255, 0.01);
    border-radius: 50%;
  }

  svg {
    opacity: ${p => (p.active ? 1 : 0.25)};
    transition: opacity 0.2s;

    path {
      fill: ${p => p.theme.colors.primary};
    }
  }
`;
