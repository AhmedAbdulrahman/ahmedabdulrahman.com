import React from 'react';
import styled from '@emotion/styled';
import { useColorMode } from 'theme-ui';

import SEO from '@components/SEO';
import Layout from '@components/Layout';
import Section from '@components/Section';
import Headings from '@components/Headings';
import Lists from '@components/Lists';
import mediaqueries from '@styles/media';

import Icons from '@icons';

interface PageProps {
  location: Location;
}

const Uses: React.FC<PageProps> = ({ location }) => {
  const [colorMode] = useColorMode();
  const isDark = colorMode === `dark`;
  return (
    <Layout>
      <SEO pathname={location.pathname} title={'Uses'} image="/uses.png"/>
      <Section component="main">
        <Container>
          <HeroTextContainer>
            <Headings.HeroHeading>Tools</Headings.HeroHeading>
            <Headings.Subtitle>
              I get a lot of questions about the tools I use for different parts
              of my work. I've put together this "uses" page that covers the
              tools 🔨 I use to make things.
            </Headings.Subtitle>
          </HeroTextContainer>
          <HeroImage>
            <Icons.Computer />
          </HeroImage>
        </Container>

        {/* <Blockquote>
          To become a master at any skill, it takes the total effort of your:
          heart, mind, and soul working together in tandem.
          <footer>― Maurice Young</footer>
        </Blockquote> */}
        <Title>Workstation</Title>
        <Lists.ul fullWidth>
          <li>
            <ListItem>
              <Strong>Retina 5K 27-Inch iMac</Strong>
            </ListItem>
            <Text>
              I use this as my main machine and a 2018 13 MacBook Pro for work.
            </Text>
          </li>
          <li>
            <ListItem>
              <Strong>Corsair K68 RGB</Strong>
            </ListItem>
            <Text>
              An anti-ghosting with full key rollover keyboard. It's a dust and
              spill resistant with an IP32 rating and has practically unlimited
              backlight color combinations. It also has dedicated volume and
              multimedia controls that offer on-the-fly adjustments. Well yeah
              it’s fully programmable with Corsair Utility Engine or CUE.
            </Text>
          </li>
          <li>
            <ListItem>
              <Strong>MX Master 3 Mouse</Strong>
            </ListItem>
            <Text>
              It's is an amazing desktop wireless mouse. It comes with many
              physical improvements and a magnetic scroll wheel for all dem
              infinity-scroll lovers!
            </Text>
          </li>
        </Lists.ul>
        <Title>Editor &amp; Terminal</Title>
        <Lists.ul fullWidth>
          <li>
            <ListItem>
              <Strong>iTerm2</Strong>
            </ListItem>
            <Text>
              Lightweight replacement app for default macOS terminal. It comes
              with cool built in features such as Custom Status bar builder,
              Autocomplete, Keyboard mappings, Non-ASCII Font support, and more.
            </Text>
          </li>
          <li>
            <ListItem>
              <Strong>Tmux</Strong>
            </ListItem>
            <Text>
              I use it to created multiple terminals at once, and manage them
              all from one terminal screen.
            </Text>
          </li>
          <li>
            <ListItem>
              <Strong>NVIM</Strong>
            </ListItem>
            <Text>
              I was using VIM together with Tmux about five years. The
              combination is really great development enviroment. I recently
              switch from VIM to NeoVim. Its Its extremely customizable to my
              needs and much faster than VIM/VSCode, has superb integration with
              any terminal, and it supports asynchronous execution this means if
              you use any linting tools, it will run it in the background
              without slowing down your editor.
            </Text>
          </li>
          <li>
            <ListItem>
              <Strong>VS Code</Strong>
            </ListItem>
            <Text>
              I use it to opening bunch of projects at same time when working
              with workspaces.You can check out my VS Code settings{` `}
              <AnchorLink
                href="https://gist.github.com/AhmedAbdulrahman/211ac9f31d46cf7d8cebe762dd3ee4dc"
                target="_blank"
                rel="noopener noreferrer"
              >
                here.
              </AnchorLink>
            </Text>
          </li>
          <li>
            <ListItem>
              <Strong>Aylin Theme</Strong>
            </ListItem>
            <Text>
              Tried a lot of themes then decided to create my own called Aylin.
              It is a customized minimal theme to use a darker background to
              increase the contrast and it looks cools when recording
              screencasts. You can download it from {` `}
              <AnchorLink
                href="https://marketplace.visualstudio.com/items?itemName=AhmedAbdulrahman.aylin"
                target="_blank"
                rel="noopener noreferrer"
              >
                VSCode Marketplace.
              </AnchorLink>
            </Text>
          </li>
          <li>
            <ListItem>
              <Strong>Recursive Sans &amp; Mono</Strong>
            </ListItem>
            <Text>
              I’m currently using this with NVIM, Terminal and VS Code too. It's
              built to maximize versatility, control, and performance. It offers
              a complete type system and it comes with five-axis variable font.
              Before that I used Inconsolata anke Mono, Fira Code, Operator
              Mono, Plex and many more.
            </Text>
          </li>
          <li>
            <ListItem>
              <Strong>
                Chrome
                {` & `}
                Firefox
              </Strong>
            </ListItem>
            <Text>I am using both for development and general browsing.</Text>
          </li>
          <li>
            <ListItem>
              <Strong>Sequel Pro</Strong>
            </ListItem>
            <Text>
              I use it for all my MySQL stuff. It allows you to visually manage
              your databases using favorites, colors and emojis
            </Text>
          </li>
          <li>
            <ListItem>
              <Strong>GitHub</Strong>
            </ListItem>
            <Text>I keep all my public and private repositories on GitHub</Text>
          </li>
          <li>
            <ListItem>
              <Strong> Config files</Strong>
            </ListItem>
            <Text>
              You can check my config files at my{` `}
              <AnchorLink
                href="https://github.com/AhmedAbdulrahman/dotfiles"
                target="_blank"
                rel="noopener noreferrer"
              >
                dotfiles
              </AnchorLink>
              {` `}
              where you can find all config files to set up a system the way I
              like it. They might not work for you, but feel free to steal from
              them.
            </Text>
          </li>
        </Lists.ul>
        <Title>Design</Title>
        <Lists.ul fullWidth>
          <li>
            <ListItem>
              <Strong>Figma</Strong>
            </ListItem>
            <Text>
              a design tool with real-time collaboration. Its like Sketch but
              more performant and cross-platform means it works in web browsers,
              and there are also native apps that let you work offline.
            </Text>
          </li>
          <li>
            <ListItem>
              <Strong>Photoshop</Strong>
            </ListItem>
            <Text>I use it only for retouching.</Text>
          </li>

          <li>
            <ListItem>
              <Strong>
                SVGO
                {` & `}
                SVGOMG
              </Strong>
            </ListItem>
            <Text>
              Both are so good for quickly optimizing SVGs those exported from
              different editors that contains a lot of redundant and useless
              information.
            </Text>
          </li>
          <li>
            <ListItem>
              <Strong>ImageOptim</Strong>
            </ListItem>
            <Text>
              It allows you to optimize huge raster retina images (PNGs, JEPGs)
              by reducing file size without effecting the image quality and
              makes them load faster.
            </Text>
          </li>
        </Lists.ul>
        <Title>Hosting</Title>
        <Lists.ul fullWidth>
          <li>
            <ListItem>
              <Strong>Netlify</Strong>
            </ListItem>
            <Text>
              I use it to host static sites. It provides an intuitive online
              interface for building, deploying, and managing any static apps in
              just a few clicks, completely free for unlimited projects for one
              person, making it ideal for personal websites and small projects.
            </Text>
          </li>
        </Lists.ul>
        <Title>Productivity</Title>
        <Lists.ul fullWidth>
          <li>
            <ListItem>
              <Strong>Alfred</Strong>
            </ListItem>
            <Text>
              a turbocharged version of OSX’s Spotlight. Alfred serves as a
              command line for your entire computer, helping you launch apps,
              perform omni-search from anywhere, multiple clipboard, automation
              and integrations, with a universal hotkey.
            </Text>
          </li>

          <li>
            <ListItem>
              <Strong>Notion</Strong>
            </ListItem>
            <Text>
              when it comes to been a productive, should never miss Notion s an
              all-in-one workspace where you can write, plan, collaborate and
              get organized. its one of the powerful modular productivity tools
              I’ve ever used.
            </Text>
          </li>
          <li>
            <ListItem>
              <Strong>Hammerspoon</Strong>
            </ListItem>
            <Text>
              an open-source project, which aims to bring staggeringly powerful
              macOS desktop automation into the Lua scripting language.
            </Text>
          </li>
          <li>
            <ListItem>
              <Strong>Spectacle</Strong>
            </ListItem>
            <Text>
              allows you to move and resize your windows with with hotkeys!
            </Text>
          </li>
          <li>
            <ListItem>
              <Strong>Zenhub</Strong>
            </ListItem>
            <Text>
              IMO is the only project management tool that integrates natively
              within GitHub’s user interface. You don’t get any configuration
              headaches, no separate logins. Developers stay in an environment
              they love, and Project Managers get total visibility into the
              development process.
            </Text>
          </li>
          <li>
            <ListItem>
              <Strong>Spark</Strong>
            </ListItem>

            <Text>
              I use Spark for email almost entirely. It aims to keep you
              productive with smart twists on ordinary emails, such as an
              intelligent inbox, a snooze function, and effective signature
              management.
            </Text>
          </li>

          <li>
            <ListItem>
              <Strong>Dashlane</Strong>
            </ListItem>
            <Text>
              a great multi-platform password manager (Mac, Windows, Linux,
              Android, iOS) and recommended by Apple, has all the latest
              Features and Integrations, plus your productivity can benefit from
              a place to store all your passwords and easily use them whenever
              necessary.
            </Text>
          </li>

          <li>
            <ListItem>
              <Strong>Google Drive</Strong>
            </ListItem>
            <Text>
              I keep all my important files in Google Drive so they are
              available on both my machines.
            </Text>
          </li>
        </Lists.ul>
        <Title>Screencasting</Title>
        <Lists.ul fullWidth>
          <li>
            <ListItem>
              <Strong>YETI PRO microphone</Strong>
            </ListItem>
            <Text>
              a great microphone I use it for all kind audio recoding. Sounds
              really good in your sound treated room.
            </Text>
          </li>

          <li>
            <ListItem>
              <Strong>Sony a6400 Camera with 16-50mm kit lens</Strong>
            </ListItem>
            <Text>
              Sony's one of best cameras It has a kill autofocus system. I use
              this to record my screencasts in 4K.
            </Text>
          </li>

          <li>
            <ListItem>
              <Strong>Elgato Key Light</Strong>
            </ListItem>
            <Text>
              I use this to light my face better when Streamers and Recording
              video.
            </Text>
          </li>

          <li>
            <ListItem>
              <Strong>Elgato Cam Link 4K</Strong>
            </ListItem>
            <Text>
              I use it to connect Sony a6400 to computer as a webcam and record
              videos in beautiful and crispy 4K without any SD cards.
            </Text>
          </li>

          <li>
            <ListItem>
              <Strong>Rogue Amoeba</Strong>
            </ListItem>
            <Text>
              I use Audio Hijack &amp; Loopback from Rogue Amoeba, to combine
              audio from multiple sources into one virtual device when I am
              streaming, and recording screencasts. They are both fantastic
              softwares, highly recommended.
            </Text>
          </li>
          <li>
            <ListItem>
              <Strong>Zoom</Strong>
            </ListItem>
            <Text>
              I use Zoom for my online workshops, as well as any regular private
              live streaming
            </Text>
          </li>
          <li>
            <ListItem>
              <Strong>OBS</Strong>
            </ListItem>
            <Text>
              I use this when I do live streams on Twitch, Youtube, and
              Facebook.
            </Text>
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
  margin: 104px 0 40px;

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
  align-self: flex-start;
`;

const HeroImage = styled.div`
  position: relative;

  ${mediaqueries.tablet`
    display: none;
    visibility: hidden;
  `}
`;

const InfoText = styled.p`
  font-size: 2.8rem;
  line-height: 1.5;
  font-family: ${p => p.theme.fonts.body};
  color: ${p => p.theme.colors.articleText};
  margin-bottom: 64px;

  span {
    color: ${p => p.theme.colors.accent};
    font-style: italic;
  }

  ${mediaqueries.phablet`
  line-height: 1.6;
`}
`;

const Blockquote = styled.blockquote`
  position: relative;
  color: ${p => p.theme.colors.primary};
  font-size: 25px;

  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontsWeight.regular};
  font-style: italic;
  line-height: 1.32;
  width: 100%;
  max-width: 700px;
  margin: 50px auto;
  padding: 0 40px;

  footer {
    font-size: 0.6em;
    text-align: right;
    margin-top: 20px;
  }

  &:before {
    content: '“';
    font-weight: ${p => p.theme.fontsWeight.bold};
    position: absolute;
    right: 100%;
    font-size: 80px;
    line-height: 0px;
    top: 10px;
    color: ${p => p.theme.colors.accent};
    left: -20px;
  }

  footer {
    font-weight: ${p => p.theme.fontsWeight.bold};
    color: ${p => p.theme.colors.accent};
  }
`;

const ListItem = styled.a`
  position: relative;
  display: inline-block;
  font-size: 2.2rem;
  color: ${p => p.theme.colors.primary};
  line-height: 1.45;

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

  ${mediaqueries.tablet`
    font-size:  2.2rem;
  `};
`;
const Strong = styled.strong`
  display: block;
  margin-bottom: 5px;
`;

const AnchorLink = styled.a`
  position: relative;
  display: inline-block;
  color: ${p => p.theme.colors.articleText};

    &:before,
    &:after {
      content: '';
      display: block;
      height: 0.5em;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
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
  }
`;

const Title = styled.h3`
  font-weight: ${p => p.theme.fontsWeight.bold};
  font-family: ${p => p.theme.fonts.title};
  font-size: 3rem;
  line-height: 1.1;
  margin-bottom: 24px;
  color: ${p => p.theme.colors.accent};
`;

const Text = styled.p`
  font-size: 2.2rem;
  line-height: 1.5;
  font-family: ${p => p.theme.fonts.body};
  color: ${p => p.theme.colors.articleText};
  margin: 0;
  margin-bottom: 24px;

  span {
    color: ${p => p.theme.colors.accent};
    font-style: italic;
  }
`;
