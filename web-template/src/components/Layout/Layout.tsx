import React, { ReactNode, useEffect } from 'react';
import { Global } from '@emotion/core';
import styled from '@emotion/styled';
import { useColorMode } from 'theme-ui';

import NavigationFooter from '@components/Navigation/Navigation.Footer';
import NavigationHeader from '@components/Navigation/Navigation.Header';
import Cursor from '@components/Cursor';
import ArticlesContextProvider from '../../sections/articles/Articles.List.Context';

import { globalStyles } from '@styles';
import { Scroll } from '@hooks';
/**
 * <Layout /> needs to wrap every page as it provides styles, navigation,
 * and the main structure of each page. Within Layout we have the <Container />
 * which hides a lot of the mess we need to create our Desktop and Mobile experiences.
 */

interface LayoutProps {
   children: ReactNode
   location: Location
 }

const Layout = ({ children, location }: LayoutProps) : JSX.Element => {
  const [colorMode] = useColorMode();
  const cursorColor = colorMode === 'dark' ? '255,255,255' : '254, 231, 162'

  useEffect(() => {
    parent.postMessage({ theme: colorMode }, '*');
  }, [colorMode]);

  return (
    <ArticlesContextProvider>
        <Scroll callbacks={location} />
        <Cursor
          innerSize={10}
          outerSize={40}
          color={cursorColor}
          outerAlpha={1}
          innerScale={0.5}
          outerScale={2}
        />
        <Container id="container" data-scroll-container>
          <Global styles={globalStyles} />
          <NavigationHeader />
            {children}
          <NavigationFooter />
        </Container>
      </ArticlesContextProvider>
  );
};

export default Layout;

const Container = styled.div`
  position: relative;
  background: ${p => p.theme.colors.background};
  transition: ${p => p.theme.colorModeTransition};
  min-height: 100vh;
  z-index: 1;
  margin: 0 auto;
  padding:  1.0875rem 1.45rem;
`;
