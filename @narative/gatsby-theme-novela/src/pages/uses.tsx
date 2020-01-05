import React from 'react';
import styled from '@emotion/styled';
import { useColorMode } from 'theme-ui';

import SEO from '@components/SEO';
import Layout from '@components/Layout';
import Section from '@components/Section';
import Headings from '@components/Headings';
import Lists from '@components/Lists';
import mediaqueries from '@styles/media';
import Paragraph from '@components/Paragraph';
import Anchor from '@components/Anchor';

import Icons from '@icons';

const Uses = () => {
  const [colorMode] = useColorMode();
  const isDark = colorMode === `dark`;
  return (
    <Layout>
      <SEO pathname={location.pathname} title={'Uses'} />
      <Section narrow>
        <Container>
          <HeroTextContainer>
            <HeroHeading>Tools</HeroHeading>
            <InfoText>
              I get a lot of questions about the tools I use for different parts
              of my work. I've put together this "uses" page that covers the
              tools 🔨 I use to make things.
            </InfoText>
          </HeroTextContainer>
          <HeroImage>
            <Icons.Tools />
          </HeroImage>
        </Container>
      </Section>
      <Section narrow>
        <Headings.h3>Workstation</Headings.h3>
        <Lists.ul fullWidth>
          <li>
            <Strong>
              <AnchorLink
                href="https://everymac.com/systems/apple/imac/specs/imac-core-i5-3.5-27-inch-aluminum-retina-5k-mid-2017-specs.html"
                target="_blank"
                rel="noopener noreferrer"
                isDark={isDark}
              >
                Retina 5K 27-Inch iMac, 3.5ghz Core i5, 8 GB 2400 MHz DDR4 of
                RAM AMD Radeon Pro 575 4096 MB
              </AnchorLink>
            </Strong>
            <Paragraph fullWidth>
              I use this as my main machine and a 2018 13 MacBook Pro for work.
            </Paragraph>
          </li>
          <li>
            <Strong>
              <AnchorLink
                href=""
                target="_blank"
                rel="noopener noreferrer"
                isDark={isDark}
              >
                Corsair K68 RGB Mechanical Gaming Keyboard
              </AnchorLink>
            </Strong>
            <Paragraph fullWidth>
              It uses Cherry MX Red keyswitches with 100% anti-ghosting and full
              key rollover to make sure each simultaneous keystroke is
              registered accurately. It is dust and spill resistant with an IP32
              rating and has practically unlimited backlight color combinations.
              This Corsair keyboard has dedicated volume and multimedia controls
              that offer on-the-fly adjustments. Well yeah it’s fully
              programmable with Corsair Utility Engine or CUE.
            </Paragraph>
          </li>
          <li>
            <Strong>
              <AnchorLink
                href=""
                target="_blank"
                rel="noopener noreferrer"
                isDark={isDark}
              >
                MX Master 3 Mouse
              </AnchorLink>
            </Strong>
            <Paragraph fullWidth>
              It's is an amazing desktop wireless mouse. It comes with many
              physical improvements and a magnetic scroll wheel for all dem
              infinity-scroll lovers!
            </Paragraph>
          </li>
        </Lists.ul>
        <Headings.h3>Editor &amp; Terminal</Headings.h3>
        <Lists.ul fullWidth>
          <li>
            <Strong>
              <AnchorLink
                href="https://www.bluedesigns.com/products/yeti-pro/"
                target="_blank"
                rel="noopener noreferrer"
                isDark={isDark}
              >
                iTerm2
              </AnchorLink>
            </Strong>
            <Paragraph fullWidth>
              Lightweight replacement app for default macOS terminal. It comes
              with cool built in features such as Custom Status bar builder,
              Autocomplete, Keyboard mappings, Non-ASCII Font support, and more.
            </Paragraph>
          </li>
          <li>
            <Strong>
              <AnchorLink
                href="https://github.com/tmux/tmux"
                target="_blank"
                rel="noopener noreferrer"
                isDark={isDark}
              >
                Tmux
              </AnchorLink>
            </Strong>
            <Paragraph fullWidth>
              I use it to created multiple terminals at once, and manage them
              all from one terminal screen.
            </Paragraph>
          </li>
          <li>
            <Strong>
              <AnchorLink
                href="https://neovim.io/"
                target="_blank"
                rel="noopener noreferrer"
                isDark={isDark}
              >
                NVIM
              </AnchorLink>
            </Strong>
            <Paragraph fullWidth>
              I was using VIM together with Tmux about five years. The
              combination is really great development enviroment. I recently
              switch from VIM to NeoVim. Its Its extremely customizable to my
              needs and much faster than VIM/VSCode, has superb integration with
              any terminal, and it supports asynchronous execution this means if
              you use any linting tools, it will run it in the background
              without slowing down your editor.
            </Paragraph>
          </li>
          <li>
            <Strong>
              <AnchorLink
                href="https://code.visualstudio.com/"
                target="_blank"
                rel="noopener noreferrer"
                isDark={isDark}
              >
                VS Code
              </AnchorLink>
            </Strong>
            <Paragraph fullWidth>
              I use it to opening bunch of projects at same time when working
              with workspaces.You can check out my VS Code settings{` `}
              <AnchorLink
                href="https://www.bluedesigns.com/products/yeti-pro/"
                target="_blank"
                rel="noopener noreferrer"
                isDark={isDark}
              >
                here.
              </AnchorLink>
            </Paragraph>
          </li>
          <li>
            <Strong>
              <AnchorLink
                href="https://marketplace.visualstudio.com/items?itemName=AhmedAbdulrahman.aylin"
                target="_blank"
                rel="noopener noreferrer"
                isDark={isDark}
              >
                Aylin Theme
              </AnchorLink>
            </Strong>
            <Paragraph fullWidth>
              Tried a lot of themes then decided to create my own called Aylin.
              It is a customized minimal theme to use a darker background to
              increase the contrast and it looks cools when recording
              screencasts.
            </Paragraph>
          </li>
          <li>
            <Strong>
              <AnchorLink
                href="https://www.recursive.design/"
                target="_blank"
                rel="noopener noreferrer"
                isDark={isDark}
              >
                Recursive Sans &amp; Mono
              </AnchorLink>
            </Strong>
            <Paragraph fullWidth>
              I’m currently using this with NVIM, Terminal and VS Code too. It's
              built to maximize versatility, control, and performance. It offers
              a complete type system and it comes with five-axis variable font.
              Before that I used Inconsolata anke Mono, Fira Code, Operator
              Mono, Plex and many more.
            </Paragraph>
          </li>
          <li>
            <Strong>
              <AnchorLink
                href="https://www.google.com/chrome/"
                target="_blank"
                rel="noopener noreferrer"
                isDark={isDark}
              >
                Chrome
              </AnchorLink>
              {` & `}
              <AnchorLink
                href="https://www.mozilla.org/en-US/firefox/new/"
                target="_blank"
                rel="noopener noreferrer"
                isDark={isDark}
              >
                Firefox
              </AnchorLink>
            </Strong>
            <Paragraph fullWidth>
              I am using both for development and general browsing.
            </Paragraph>
          </li>
          <li>
            <Strong>
              <AnchorLink
                href="https://www.sequelpro.com/"
                target="_blank"
                rel="noopener noreferrer"
                isDark={isDark}
              >
                Sequel Pro
              </AnchorLink>
            </Strong>
            <Paragraph fullWidth>
              I use it for all my MySQL stuff. It allows you to visually manage
              your databases using favorites, colors and emojis
            </Paragraph>
          </li>
          <li>
            <Strong>
              <AnchorLink
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                isDark={isDark}
              >
                GitHub
              </AnchorLink>
            </Strong>
            <Paragraph fullWidth>
              I keep all my public and private repositories on GitHub
            </Paragraph>
          </li>
          <li>
            <Strong>
              <AnchorLink isDark={isDark}> Config files </AnchorLink>
            </Strong>
            <Paragraph fullWidth>
              You can check config files over at my{` `}
              <AnchorLink
                href="https://github.com/AhmedAbdulrahman/dotfiles"
                target="_blank"
                rel="noopener noreferrer"
                isDark={isDark}
              >
                dotfiles
              </AnchorLink>
              {` `}
              repo but please don’t just take these settings carte blanche –
              they work for me but might not be the best
            </Paragraph>
          </li>
        </Lists.ul>
        <Headings.h3>Design</Headings.h3>
        <Lists.ul fullWidth>
          <li>
            <Strong>
              <AnchorLink
                href="https://www.figma.com/"
                target="_blank"
                rel="noopener noreferrer"
                isDark={isDark}
              >
                Figma
              </AnchorLink>
            </Strong>
            <Paragraph fullWidth>
              a design tool with real-time collaboration. Its like Sketch but
              more performant and cross-platform means it works in web browsers,
              and there are also native apps that let you work offline.
            </Paragraph>
          </li>
          <li>
            <Strong>
              <AnchorLink
                href="https://www.adobe.com/products/photoshop.html"
                target="_blank"
                rel="noopener noreferrer"
                isDark={isDark}
              >
                Photoshop
              </AnchorLink>
            </Strong>
            <Paragraph fullWidth>I use it only for retouching.</Paragraph>
          </li>
          <li>
            <Strong>
              <AnchorLink
                href="https://zeplin.io/"
                target="_blank"
                rel="noopener noreferrer"
                isDark={isDark}
              >
                Zeplin
              </AnchorLink>
            </Strong>
            <Paragraph fullWidth>
              a handy dandy tool for better communication between designers and
              developers, converting designs made in Sketch or Figma to a
              code-friendly format. Zeplin 2.0 introduces Components, renaming
              assets, full size thumbnails in Dashboard, revamped interface for
              layer properties, Styleguide and Dashboard 🔥
            </Paragraph>
          </li>
          <li>
            <Strong>
              <AnchorLink
                href="https://github.com/svg/svgo"
                target="_blank"
                rel="noopener noreferrer"
                isDark={isDark}
              >
                SVGO
              </AnchorLink>
              {` & `}
              <AnchorLink
                href="https://jakearchibald.github.io/svgomg/"
                target="_blank"
                rel="noopener noreferrer"
                isDark={isDark}
              >
                SVGOMG
              </AnchorLink>
            </Strong>
            <Paragraph fullWidth>
              Both are so good for quickly optimizing SVGs those exported from
              different editors that contains a lot of redundant and useless
              information.
            </Paragraph>
          </li>
          <li>
            <Strong>
              <AnchorLink
                href="https://imageoptim.com/mac"
                target="_blank"
                rel="noopener noreferrer"
                isDark={isDark}
              >
                ImageOptim
              </AnchorLink>
            </Strong>
            <Paragraph fullWidth>
              It allows you to optimize huge raster retina images (PNGs, JEPGs)
              by reducing file size without effecting the image quality and
              makes them load faster.
            </Paragraph>
          </li>
        </Lists.ul>
        <Headings.h3>Hosting</Headings.h3>
        <Lists.ul fullWidth>
          <li>
            <Strong>
              <AnchorLink
                href=""
                target="_blank"
                rel="noopener noreferrer"
                isDark={isDark}
              >
                Netlify
              </AnchorLink>
            </Strong>
            <Paragraph fullWidth>
              I use it to host static sites. It provides an intuitive online
              interface for building, deploying, and managing any static apps in
              just a few clicks, completely free for unlimited projects for one
              person, making it ideal for personal websites and small projects.
            </Paragraph>
          </li>
        </Lists.ul>
        <Headings.h3>Productivity</Headings.h3>
        <Lists.ul fullWidth>
          <li>
            <Strong>
              <AnchorLink
                href=""
                target="_blank"
                rel="noopener noreferrer"
                isDark={isDark}
              >
                Alfred
              </AnchorLink>
            </Strong>
            <Paragraph fullWidth>
              a turbocharged version of OSX’s Spotlight. Alfred serves as a
              command line for your entire computer, helping you launch apps,
              perform omni-search from anywhere, multiple clipboard, automation
              and integrations, with a universal hotkey.
            </Paragraph>
          </li>

          <li>
            <Strong>
              <AnchorLink
                href="https://www.notion.so/"
                target="_blank"
                rel="noopener noreferrer"
                isDark={isDark}
              >
                Notion
              </AnchorLink>
            </Strong>

            <Paragraph fullWidth>
              when it comes to been a productive, should never miss Notion s an
              all-in-one workspace where you can write, plan, collaborate and
              get organized. its one of the powerful modular productivity tools
              I’ve ever used.
            </Paragraph>
          </li>
          <li>
            <Strong>
              <AnchorLink
                href="https://www.hammerspoon.org/"
                target="_blank"
                rel="noopener noreferrer"
                isDark={isDark}
              >
                Hammerspoon
              </AnchorLink>
            </Strong>
            <Paragraph fullWidth>
              an open-source project, which aims to bring staggeringly powerful
              macOS desktop automation into the Lua scripting language.
            </Paragraph>
          </li>
          <li>
            <Strong>
              <AnchorLink
                href="https://www.spectacleapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                isDark={isDark}
              >
                Spectacle
              </AnchorLink>
            </Strong>
            <Paragraph fullWidth>
              allows you to move and resize your windows with with hotkeys!
            </Paragraph>
          </li>
          <li>
            <Strong>
              <AnchorLink
                href="https://www.zenhub.com/"
                target="_blank"
                rel="noopener noreferrer"
                isDark={isDark}
              >
                Zenhub
              </AnchorLink>
            </Strong>

            <Paragraph fullWidth>
              IMO is the only project management tool that integrates natively
              within GitHub’s user interface. You don’t get any configuration
              headaches, no separate logins. Developers stay in an environment
              they love, and Project Managers get total visibility into the
              development process.
            </Paragraph>
          </li>
          <li>
            <Strong>
              <AnchorLink
                href="https://sparkmailapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                isDark={isDark}
              >
                Spark
              </AnchorLink>
            </Strong>

            <Paragraph fullWidth>
              I use Spark for email almost entirely. It aims to keep you
              productive with smart twists on ordinary emails, such as an
              intelligent inbox, a snooze function, and effective signature
              management.
            </Paragraph>
          </li>

          <li>
            {' '}
            <Strong>
              <AnchorLink
                href="https://www.dashlane.com/"
                target="_blank"
                rel="noopener noreferrer"
                isDark={isDark}
              >
                Dashlane
              </AnchorLink>
            </Strong>
            <Paragraph fullWidth>
              a great multi-platform password manager (Mac, Windows, Linux,
              Android, iOS) and recommended by Apple, has all the latest
              Features and Integrations, plus your productivity can benefit from
              a place to store all your passwords and easily use them whenever
              necessary.
            </Paragraph>
          </li>

          <li>
            <Strong>
              <AnchorLink
                href="https://www.google.com/drive/"
                target="_blank"
                rel="noopener noreferrer"
                isDark={isDark}
              >
                Google Drive
              </AnchorLink>
            </Strong>
            <Paragraph fullWidth>
              I keep all my important files in Google Drive so they are
              available on both my machines.
            </Paragraph>
          </li>
        </Lists.ul>
        <Headings.h3>Podcasting/Screencasting</Headings.h3>
        <Lists.ul fullWidth>
          <li>
            <Strong>
              <AnchorLink
                href=""
                target="_blank"
                rel="noopener noreferrer"
                isDark={isDark}
              >
                YETI PRO microphone
              </AnchorLink>
            </Strong>
            <Paragraph fullWidth>
              a great microphone I use it for all kind audio recoding. Sounds
              really good in your sound treated room.
            </Paragraph>
          </li>

          <li>
            <Strong>
              <AnchorLink
                href=""
                target="_blank"
                rel="noopener noreferrer"
                isDark={isDark}
              >
                Sony a6400 Camera with 16-50mm kit lens
              </AnchorLink>
            </Strong>
            <Paragraph fullWidth>
              Sony's one of best cameras It has a kill autofocus system. I use
              this to record my screencasts in 4K.
            </Paragraph>
          </li>

          <li>
            <Strong>
              <AnchorLink
                href=""
                target="_blank"
                rel="noopener noreferrer"
                isDark={isDark}
              >
                Elgato Key Light
              </AnchorLink>
            </Strong>
            <Paragraph fullWidth>
              I use this to light my face better when Streamers and Recording
              video.
            </Paragraph>
          </li>

          <li>
            <Strong>
              <AnchorLink
                href=""
                target="_blank"
                rel="noopener noreferrer"
                isDark={isDark}
              >
                Elgato Cam Link 4K
              </AnchorLink>
            </Strong>
            <Paragraph fullWidth>
              I use it to connect Sony a6400 to computer as a webcam and record
              videos in beautiful and crispy 4K without any SD cards.
            </Paragraph>
          </li>

          <li>
            <Strong>
              <AnchorLink
                href="https://rogueamoeba.com/audiohijackpro/"
                target="_blank"
                rel="noopener noreferrer"
                isDark={isDark}
              >
                Audio Hijack Pro
              </AnchorLink>
              {` & `}
              <AnchorLink
                href="https://rogueamoeba.com/loopback/"
                target="_blank"
                rel="noopener noreferrer"
                isDark={isDark}
              >
                Loopback
              </AnchorLink>
            </Strong>
            <Paragraph fullWidth>
              I use these to combine audio from multiple sources into one
              virtual device when I am streaming, and recording screencasts.
              They are both fantastic softwares, highly recommended.
            </Paragraph>
          </li>
          <li>
            <Strong>
              <AnchorLink
                href="https://zoom.us/"
                target="_blank"
                rel="noopener noreferrer"
                isDark={isDark}
              >
                Zoom
              </AnchorLink>
            </Strong>
            <Paragraph fullWidth>
              I use Zoom for my online workshops, as well as any regular private
              live streaming
            </Paragraph>
          </li>
          <li>
            <Strong>
              <AnchorLink
                href="https://obsproject.com/"
                target="_blank"
                rel="noopener noreferrer"
                isDark={isDark}
              >
                OBS
              </AnchorLink>
            </Strong>
            <Paragraph fullWidth>
              I use this when I do live streams on Twitch, Youtube, and
              Facebook.
            </Paragraph>
          </li>
        </Lists.ul>
      </Section>
    </Layout>
  );
};

export default Uses;

const Container = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 450px;
  column-gap: 5em;
  overflow: hidden;
  margin-top: 56px;
  margin-bottom: 56px;

  ${mediaqueries.desktop`
    grid-template-columns: 1fr 1fr;
  `}
  ${mediaqueries.tablet`
    grid-template-columns: 1fr;
  `}
`;

const HeroTextContainer = styled.div`
  position: relative;
  align-self: end;
  align-self: center;
  ${mediaqueries.tablet`
    margin: 40px 0 0;
  `}
`;

const HeroImage = styled.div`
  position: relative;
  align-self: end;

  ${mediaqueries.tablet`
    margin-left: 32px;
    margin-right: 32px;
  `}
`;

const HeroHeading = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 94px;
  line-height: 98%;
  letter-spacing: -1px;
  font-family: ${p => p.theme.fonts.title};
  color: ${p => p.theme.colors.primary};
  ${mediaqueries.desktop`
    font-size: 56px
  `}
  ${mediaqueries.tablet`
    font-size: 48px;
  `}
  ${mediaqueries.phablet`
    font-size: 44px;
    line-height: 1.25;
  `}
`;

const InfoText = styled.p`
  font-size: 18px;
  margin-top: 24px;
  margin-bottom: 24px;
  line-height: 1.8;
  font-family: ${p => p.theme.fonts.body};
  color: ${p => p.theme.colors.secondary};
  ${mediaqueries.tablet`
    font-size: 16px;
  `}
`;

const Strong = styled.strong`
  display: block;
  margin-bottom: 5px;
`;

const AnchorLink = styled(Anchor)`
  border-bottom: 3px solid
    ${p => (p.isDark ? '#939299' : p.theme.colors.accent)};
  transition: border-bottom 0.35s ease, ${p => p.theme.colorModeTransition};

  &:hover,
  &:focus {
    color: ${p => (p.isDark ? p.theme.colors.accent : p.theme.colors.primary)};
  }
`;
