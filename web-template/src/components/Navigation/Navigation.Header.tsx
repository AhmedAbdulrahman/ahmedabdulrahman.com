import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { Link, navigate, graphql, useStaticQuery } from 'gatsby';
import { useColorMode } from 'theme-ui';
import useSound from 'use-sound';

import Section from '@components/Section';
import Logo from '@components/Logo';
import Burger from '@components/Burger';

import { useMobileDetect } from '@hooks';
import Icons from '@icons';
import mediaqueries from '@styles/media';

import {
  copyToClipboard,
  getWindowDimensions,
  getBreakpointFromTheme,
} from '@utils';


const siteQuery = graphql`
  {
    allSite {
      edges {
        node {
          siteMetadata {
            siteUrl
          }
        }
      }
    }
    sitePlugin(name: { eq: "web-template" }) {
      pluginOptions {
        rootPath
        basePath
        writingPath
      }
    }
  }
`;

const DarkModeToggle: React.FC<{siteUrl: string}> = ({ siteUrl }) => {
  const [colorMode, setColorMode] = useColorMode();

  const popUpOn = `${siteUrl}/sounds/switch-on.mp3`
  const popUpOff = `${siteUrl}/sounds/switch-off.mp3`

  const [playOn] = useSound(popUpOn, { volume: 0.25 });
  const [playOff] = useSound(popUpOff, { volume: 0.25 });

  const isDark = colorMode === `dark`;

  function toggleColorMode(event) {
    event.preventDefault();
    setColorMode(isDark ? `light` : `dark`);
  }

  return (
    <IconWrapper
      isDark={isDark}
      onClick={(e) => {
        toggleColorMode(e)
        if (isDark) {
          playOff()
        } else {
          playOn()

        }
      }}
      data-a11y="false"
      aria-label={isDark ? 'Activate light mode' : 'Activate dark mode'}
      title={isDark ? 'Activate light mode' : 'Activate dark mode'}
    >
      <MoonOrSun isDark={isDark} />
      <MoonMask isDark={isDark} />
    </IconWrapper>
  );
};

const SharePageButton: React.FC<{}> = () => {
  const [hasCopied, setHasCopied] = useState<boolean>(false);
  const [colorMode] = useColorMode();
  const isDark = colorMode === `dark`;
  const fill = isDark ? '#fff' : '#212529';

  function copyToClipboardOnClick() {
    if (hasCopied) return;

    copyToClipboard(window.location.href);
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 1000);
  }

  return (
    <IconWrapper
      isDark={isDark}
      onClick={copyToClipboardOnClick}
      data-a11y="false"
      aria-label="Copy URL to clipboard"
      title="Copy URL to clipboard"
    >
      <Icons.Link fill={fill} />
      <ToolTip isDark={isDark} hasCopied={hasCopied}>
        Copied
      </ToolTip>
    </IconWrapper>
  );
};

const NavigationHeader: React.FC<{}> = () => {
  const [showBackArrow, setShowBackArrow] = useState<boolean>(false);
  const [previousPath, setPreviousPath] = useState<string>('/writing');
  const [burgerOpen, setBurgerOpen] = React.useState(false);

  const { sitePlugin, allSite } = useStaticQuery(siteQuery);
  const detectMobile = useMobileDetect();

  const [colorMode] = useColorMode();
  const isDark = colorMode === `dark`;
  const fillIn = colorMode === 'dark' ? '#fff' : '#212529';
  const fillOut = colorMode === 'dark' ? '#000' : '#fff';
  const { rootPath, basePath, writingPath } = sitePlugin.pluginOptions;

  useEffect(() => {
    const { width } = getWindowDimensions();
    const phablet = getBreakpointFromTheme('phablet');

    const prev = localStorage.getItem('previousPath');
    const previousPathWasHomepage =
      (prev === writingPath && location.pathname.includes('writing')) ||
      (prev && prev.includes('/page/'));
    const isNotPaginated = !location.pathname.includes('/page/');

    setShowBackArrow(
      previousPathWasHomepage && isNotPaginated && width <= phablet,
    );
    setPreviousPath(prev);
  }, [previousPath]);

  return (
    <Section component="header">
      <NavContainer>
        <LogoLink
          to={rootPath || basePath}
          data-a11y="false"
          title="Navigate back to the homepage"
          aria-label="Navigate back to the homepage"
          back={showBackArrow ? 'true' : 'false'}
        >
          {showBackArrow && (
            <BackArrowIconContainer>
              <Icons.ChevronLeft fill={fillIn} />
            </BackArrowIconContainer>
          )}
          <Logo fillIn={fillIn} fillOut={fillOut} />
          <Hidden>Navigate back to the homepage</Hidden>
        </LogoLink>
        <NavControls>
          {showBackArrow ? (
            <button
              onClick={() => navigate(previousPath)}
              title="Navigate back to the homepage"
              aria-label="Navigate back to the homepage"
            >
              <Icons.Ex fill={fillIn} />
            </button>
          ) : (
            <>
              {detectMobile.isMobile() ? (
                <>
                  <DarkModeToggle siteUrl={allSite.edges[0].node.siteMetadata.siteUrl} />
                  <Burger
                    burgerOpen={burgerOpen}
                    setBurgerOpen={setBurgerOpen}
                  />
                  <NavContent burgerOpen={burgerOpen}>
                    <MobileMenu burgerOpen={burgerOpen}>
                      <NavItem>
                        <NavLink
                          to={`/writing`}
                          title={`All Article`}
                          activeClassName="active"
                        >
                          <NavNum>01</NavNum>Write
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          to={`/workshops`}
                          title={`All Workshops`}
                          activeClassName="active"
                        >
                          <NavNum>02</NavNum>Workshops
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          to={`/about`}
                          title={`About Me`}
                          activeClassName="active"
                        >
                          <NavNum>03</NavNum>Me
                        </NavLink>
                      </NavItem>
                    </MobileMenu>
                  </NavContent>
                </>
              ) : (
                <>
                  <NavLink
                    to={`/writing`}
                    title={`All Article`}
                    activeClassName="active"
                  >
                    Write
                  </NavLink>
                  <NavLink
                    to={`/workshops`}
                    title={`All Workshops`}
                    activeClassName="active"
                  >
                    Workshops
                  </NavLink>
                  <NavLink
                    to={`/about`}
                    title={`About`}
                    activeClassName="active"
                  >
                    About
                  </NavLink>
                  <SharePageButton />
                  <DarkModeToggle siteUrl={allSite.edges[0].node.siteMetadata.siteUrl} />
                </>
              )}
            </>
          )}
        </NavControls>
      </NavContainer>
    </Section>
  );
};

export default NavigationHeader;

const BackArrowIconContainer = styled.div`
  transition: 0.2s transform var(--ease-out-quad);
  opacity: 0;
  padding-right: 30px;
  animation: fadein 0.3s linear forwards;

  @keyframes fadein {
    to {
      opacity: 1;
    }
  }

  ${mediaqueries.desktop_medium`
    display: none;
  `}
`;

const NavContainer = styled.div`
  position: relative;
  z-index: 100;
  padding-top: 64px;
  display: flex;
  justify-content: space-between;

  ${mediaqueries.desktop_medium`
    padding-top: 50px;
  `};

  ${mediaqueries.phablet`
  padding-top: 50px;
`};
`;

const NavLink = styled(Link)`
  font-family: ${p => p.theme.fonts.monospace};
  font-size: 1.6rem;
  color: ${p => p.theme.colors.primary};
  transition: color 0.25s var(--ease-in-out-quad);
  display: inline-block;
  position: relative;
  margin-left: 40px;
  background-image: none;

  &::after {
    background: none repeat scroll 0 0 transparent;
    bottom: -8px;
    content: '';
    display: block;
    height: 3px;
    left: 50%;
    position: absolute;
    background: ${p => p.theme.colors.accent};
    transition: width 0.25s ease 0s, left 0.25s ease 0s;
    width: 0;
  }
  &:hover {
    &::after {
      width: 100%;
      left: 0;
    }
  }

  &.active {
    font-weight: ${p => p.theme.fontsWeight.bold};
    &::after {
      left: calc(50% - 10px);
      width: 20px;
    }
  }
`;

const LogoLink = styled(Link)<{ back: string }>`
  position: relative;
  display: flex;
  align-items: center;
  left: ${p => (p.back === 'true' ? '-54px' : 0)};

  ${mediaqueries.desktop_medium`
    left: 0
  `}

  &[data-a11y="true"]:focus::after {
    content: '';
    position: absolute;
    left: -10%;
    top: 0;
    width: 120%;
    height: 100%;
    border: 2px solid ${p => p.theme.colors.accent};
    background: rgba(255, 255, 255, 0.01);
  }

  &:hover {
    ${BackArrowIconContainer} {
      transform: translateX(-3px);
    }
  }
`;

const NavControls = styled.nav`
  display: flex;
  align-items: center;

  ${mediaqueries.phablet`
    right: -5px;
  `}
`;

const NavContent = styled.div<{ burgerOpen: boolean }>`
  width: 100%;
  height: 100%;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  display: none;
  background: #171718;

  ${p => mediaqueries.phablet`
  ${p.burgerOpen &&
    `
    display: flex;
  `}
  `}
`;

const NavItem = styled.li`
  position: relative;
  padding: 0 15%;
  width: 100%;

  ${NavLink} {
    position: initial !important;
    display: flex;
    align-items: center;
    position: relative;
    z-index: 1;
    font-family: ${p => p.theme.fonts.title};
    font-size: 3.5rem;
    letter-spacing: 1px;
    color: #fff;
    padding: 1.5rem;
    text-transform: none;
    line-height: 1;
    white-space: nowrap;
    transition: color 0.2s linear;
    margin: 0;

    &:after {
      content: '';
      display: block;
      height: 5px;
      width: 112.5px !important;
      background-color: ${p => p.theme.colors.articleText};
      position: absolute;
      left: 1.25rem;
      right: 1.25rem;
      bottom: -5px;
      transform: scaleX(0);
      transform-origin: 0 50%;
      transition: -webkit-transform 0.3s cubic-bezier(0.86, 0, 0.07, 1);
    }

    &:hover {
      &:after {
        transform: scaleX(1);
      }
    }
    &.active {
      &:after {
        left: 0;
        right: 70%;
        height: 10px;
        bottom: 15%;
        transform: none;
        background-color: ${p => p.theme.colors.accent};
      }
    }
  }
`;

const NavNum = styled.span`
  margin-right: 1rem;
  font-weight: 300;
  font-size: 0.7em;
  color: ${p => p.theme.colors.textOffset};
`;

const MobileMenu = styled.ul<{ burgerOpen: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  background: #16161a;
  transform: ${props =>
    props.burgerOpen ? 'translateX(0)' : 'translateX(-150%)'};
`;

const ToolTip = styled.div<{ isDark: boolean; hasCopied: boolean }>`
  position: absolute;
  padding: 4px 13px;
  background: ${p => (p.isDark ? '#000' : 'rgba(0,0,0,0.1)')};
  color: ${p => (p.isDark ? '#fff' : '#000')};
  border-radius: 5px;
  font-size: 14px;
  top: -35px;
  opacity: ${p => (p.hasCopied ? 1 : 0)};
  transform: ${p => (p.hasCopied ? 'translateY(-3px)' : 'none')};
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: -6px;
    margin: 0 auto;
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid ${p => (p.isDark ? '#000' : 'rgba(0,0,0,0.1)')};
  }
`;

const IconWrapper = styled.button<{ isDark: boolean }>`
  position: relative;
  border-radius: 5px;
  width: 40px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s ease;
  margin-left: 30px;

  &[data-a11y='true']:focus::after {
    content: '';
    position: absolute;
    left: 0;
    top: -30%;
    width: 100%;
    height: 160%;
    border: 2px solid ${p => p.theme.colors.accent};
    background: rgba(255, 255, 255, 0.01);
    border-radius: 5px;
  }

  ${mediaqueries.tablet`
    display: inline-flex;
    transform: scale(0.908);
    margin-left: 10px;
  `}
`;

// This is based off a codepen! Much appreciated to: https://codepen.io/aaroniker/pen/KGpXZo
const MoonOrSun = styled.div<{ isDark: boolean }>`
  position: relative;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: ${p => (p.isDark ? '4px' : '2px')} solid
    ${p => p.theme.colors.primary};
  background: ${p => p.theme.colors.primary};
  transform: scale(${p => (p.isDark ? 0.55 : 1)});
  transition: all 0.45s ease;
  overflow: ${p => (p.isDark ? 'visible' : 'hidden')};

  &::before {
    content: '';
    position: absolute;
    right: -9px;
    top: -9px;
    height: 24px;
    width: 24px;
    border: 2px solid ${p => p.theme.colors.primary};
    border-radius: 50%;
    transform: translate(${p => (p.isDark ? '14px, -14px' : '0, 0')});
    opacity: ${p => (p.isDark ? 0 : 1)};
    transition: transform 0.45s ease;
  }

  &::after {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    margin: -4px 0 0 -4px;
    position: absolute;
    top: 50%;
    left: 50%;
    box-shadow: 0 -23px 0 ${p => p.theme.colors.primary},
      0 23px 0 ${p => p.theme.colors.primary},
      23px 0 0 ${p => p.theme.colors.primary},
      -23px 0 0 ${p => p.theme.colors.primary},
      15px 15px 0 ${p => p.theme.colors.primary},
      -15px 15px 0 ${p => p.theme.colors.primary},
      15px -15px 0 ${p => p.theme.colors.primary},
      -15px -15px 0 ${p => p.theme.colors.primary};
    transform: scale(${p => (p.isDark ? 1 : 0)});
    transition: all 0.35s ease;

    ${p => mediaqueries.tablet`
      transform: scale(${p.isDark ? 0.92 : 0});
    `}
  }
`;

const MoonMask = styled.div<{ isDark: boolean }>`
  position: absolute;
  right: -1px;
  top: -8px;
  height: 24px;
  width: 24px;
  border-radius: 50%;
  border: 0;
  background: ${p => p.theme.colors.background};
  transform: translate(${p => (p.isDark ? '14px, -14px' : '0, 0')});
  opacity: ${p => (p.isDark ? 0 : 1)};
  transition: ${p => p.theme.colorModeTransition}, transform 0.45s ease;
`;

const Hidden = styled.span`
  position: absolute;
  display: inline-block;
  opacity: 0;
  width: 0px;
  height: 0px;
  visibility: hidden;
  overflow: hidden;
`;
