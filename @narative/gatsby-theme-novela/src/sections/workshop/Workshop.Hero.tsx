import React from 'react';
import styled from '@emotion/styled';

import Section from '@components/Section';
import Headings from '@components/Headings';
import HorizontalRule from '@components/HorizontalRule';
import Image, { ImagePlaceholder } from '@components/Image';

import mediaqueries from '@styles/media';
import { IArticle } from '@types';
import Icons from '@icons';

interface WorkshopHeroProps {
  workshop: IArticle;
}

const WorkshopHero: React.FC<WorkshopHeroProps> = ({ workshop }) => {
  const hasHeroImage =
    workshop.hero &&
    Object.keys(workshop.hero.full).length !== 0 &&
    workshop.hero.full.constructor === Object;

  return (
    <Section narrow>
      <HeroContainer>
        <HeroImage id="WorkshopImage__Hero">
          {hasHeroImage ? (
            <Image src={workshop.hero.full} />
          ) : (
            <ImagePlaceholder />
          )}
        </HeroImage>
        <HeroTextContainer>
          <Author>{workshop.instructor}</Author>
          <HeroHeading>{workshop.title}</HeroHeading>
          {/* <Excerpt>{workshop.excerpt}</Excerpt> */}
          <InfoContainer>
            <Date>
              <Icons.Calendar />
              <span>TBA</span>
            </Date>
            <Time>
              <Icons.Time />
              <span>TBA</span>
            </Time>
            <Address>
              <Icons.Location />
              <span>Zoom</span>
            </Address>
          </InfoContainer>
        </HeroTextContainer>
      </HeroContainer>
      <HorizontalRule />
    </Section>
  );
};

export default WorkshopHero;

const HeroContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 64px;
  z-index: 1;
  margin-top: 96px;
  margin-bottom: 80px;

  ${mediaqueries.desktop`
    grid-template-columns: 1.25fr 2fr;
    column-gap: 0;
  `};

  ${mediaqueries.phablet`
    grid-template-columns: 1fr;
    margin-top: 48px;
  `};
`;

const HeroTextContainer = styled.header`
  position: relative;
  z-index: 10;
  align-self: center;
  ${mediaqueries.tablet`
    margin-top: 40px;
  `}
`;

const Author = styled(Headings.h4)`
  margin-bottom: 8px;
  color: ${p => p.theme.colors.secondary};
`;

const HeroHeading = styled(Headings.h1)`
  font-size: 56px;
  font-family: ${p => p.theme.fonts.title};
  margin-bottom: 24px;
  font-weight: bold;
  line-height: 1.2;

  ${mediaqueries.tablet`
    margin-bottom: 20px;
    font-size: 48px;
  `}

  ${mediaqueries.phablet`
    font-size: 32px;
  `}
`;

const Excerpt = styled(Headings.h3)`
  font-size: 20px;
  font-family: ${p => p.theme.fonts.body};
  color: ${p => p.theme.colors.secondary};
  margin-bottom: 24px;
  margin-top: 24px;
  font-weight: normal;
  line-height: 1.65;
  ${mediaqueries.tablet`
    font-size: 18px;
  `}
`;

const HeroImage = styled.div`
  position: relative;
  height: auto;
  align-self: start;
  justify-self: center;
  transition: transform 0.3s var(--ease-out-quad),
    box-shadow 0.3s var(--ease-out-quad);
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.07), 0px 2px 4px rgba(0, 0, 0, 0.07),
    0px 4px 8px rgba(0, 0, 0, 0.07), 0px 8px 16px rgba(0, 0, 0, 0.07),
    0px 16px 32px rgba(0, 0, 0, 0.07), 0px 32px 64px rgba(0, 0, 0, 0.07);
  width: 80%;
  background: ${p => p.theme.colors.secondary};
  ${mediaqueries.phone`
    width: 200px;
    & > div {
      ::before {
          width: 5px !important;
          box-shadow: 1px 0 rgba(0, 0, 0, 0.1), 2px 0 0px rgba(255, 255, 255, 0.1) !important;
        }
    }
  `}
  & > div {
    height: 100%;
    ::before {
      background: linear-gradient(
        to left,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0.3) 90%
      );
      box-shadow: 1px 0 rgba(0, 0, 0, 0.1), 3px 0 0px rgba(255, 255, 255, 0.1);
      content: '';
      display: block;
      height: 100%;
      position: absolute;
      width: 10px;
      z-index: 2;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      border-top-right-radius: 2px;
      border-bottom-right-radius: 2px;
    }
  }
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    object-position: center;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-top: 10px;
  font-family: ${p => p.theme.fonts.title};

  ${mediaqueries.tablet`
  flex-direction: column;
  align-items: flex-start;
  `};
`;

const Date = styled.div`
  color: ${p => p.theme.colors.primary};
  background: ${p => p.theme.colors.hover};
  padding: 10px 20px;
  font-size: 14px;
  border-radius: 20px;
  margin-right: 20px;
  display: flex;
  align-items: center;

  span {
    margin-left: 10px;
  }

  ${mediaqueries.tablet`
    margin-bottom: 10px;
  `};

  ${mediaqueries.desktop`
    padding: 10px 14px;
  `}
`;
const Time = styled.time`
  color: ${p => p.theme.colors.primary};
  background: ${p => p.theme.colors.hover};
  padding: 10px 20px;
  font-size: 14px;
  border-radius: 20px;
  margin-right: 20px;
  display: flex;
  align-items: center;

  span {
    margin-left: 10px;
  }

  ${mediaqueries.tablet`
  margin-bottom: 10px;
  `};

  ${mediaqueries.desktop`
    padding: 10px 14px;
  `}
`;
const Address = styled.address`
  color: ${p => p.theme.colors.primary};
  background: ${p => p.theme.colors.hover};
  padding: 10px 20px;
  font-size: 14px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  font-style: normal;

  span {
    margin-left: 10px;
  }

  ${mediaqueries.desktop`
    padding: 10px 14px;
  `}
`;
