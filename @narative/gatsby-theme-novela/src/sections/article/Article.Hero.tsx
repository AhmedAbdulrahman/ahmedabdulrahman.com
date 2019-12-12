import React from 'react';
import styled from '@emotion/styled';
import { useColorMode } from "theme-ui";

import Headings from '@components/Headings';
import Anchor from '@components/Anchor';
import Image, { ImagePlaceholder } from '@components/Image';

import mediaqueries from '@styles/media';
import { IArticle, IAuthor } from '@types';
import { formatReadingTime } from "@utils";

import ArticleAuthors from './Article.Authors';

interface ArticleHeroProps {
  article: IArticle;
  authors: IAuthor[];
}

const GITHUB_USERNAME = 'ahmedabdulrahman';
const GITHUB_REPO_NAME = 'ahmedabdulrahman.com';

const ArticleHero: React.FC<ArticleHeroProps> = ({ article, authors }) => {
  const [colorMode] = useColorMode();
  const isDark = colorMode === "dark";
  const hasCoAUthors = authors.length > 1;
  const hasHeroImage =
    article.hero &&
    Object.keys(article.hero.full).length !== 0 &&
    article.hero.full.constructor === Object;

  const editUrl = `https://github.com/${GITHUB_USERNAME}/${GITHUB_REPO_NAME}/edit/master/www/content/posts${article.slug}/index.mdx`;

  return (
    <Hero>
      <Header>
        <HeroHeading>{article.title}</HeroHeading>
        <HeroSubtitle hasCoAUthors={hasCoAUthors}>
          <ArticleAuthors authors={authors} />
          <ArticleMeta hasCoAUthors={hasCoAUthors}>
            {article.date}
            {` • ${formatReadingTime(article.timeToRead)}`}
          </ArticleMeta>
        </HeroSubtitle>
        <TagsWrapper>
          <Tags>
            {article.tags.map((tag, index) => (
              <ArticleTag key={index} isDark={isDark}>
                <span>{tag}</span>
              </ArticleTag>
            ))}
          </Tags>

          <Anchor
            href={editUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginLeft: 10, border: 'none' }}>
            Edit 📝
          </Anchor>
        </TagsWrapper>
      </Header>
      <HeroImage id="ArticleImage__Hero">
        {hasHeroImage ? (
          <Image src={article.hero.full} />
        ) : (
            <ImagePlaceholder />
          )}
      </HeroImage>
    </Hero>
  );
};

export default ArticleHero;

const Hero = styled.div`
  ${p => mediaqueries.phablet`
    &::before {
      content: "";
      width: 100%;
      height: 20px;
      background: ${p.theme.colors.primary};
      position: absolute;
      left: 0;
      top: 0;
      transition: ${p.theme.colorModeTransition};
    }

    &::after {
      content: "";
      width: 100%;
      height: 10px;
      background: ${p.theme.colors.background};
      position: absolute;
      left: 0;
      top: 10px;
      border-top-left-radius: 25px;
      border-top-right-radius: 25px;
      transition: ${p.theme.colorModeTransition};
    }
  `}
`;

const ArticleMeta = styled.div<{ hasCoAUthors: boolean }>`
  margin-left: ${p => (p.hasCoAUthors ? '10px' : '0')};

  ${mediaqueries.phablet`
    margin-left: 0;
  `}
`;

const TagsWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: ${p => p.theme.colors.grey};

  ${mediaqueries.desktop_up`
    margin-left: 33px;
  `}

  ${mediaqueries.tablet`
    // justify-content: center;
`}
`

const Tags = styled.div`
    display: flex;
`

const Header = styled.header`
  position: relative;
  z-index: 10;
  margin:100px auto 56px;
  padding-left: 68px;
  max-width: 749px;

  ${mediaqueries.desktop`
    padding-left: 53px;
    max-width: calc(507px + 53px);
    margin: 100px auto 70px;
  `}

  ${mediaqueries.tablet`
    padding-left: 0;
    margin: 100px auto 70px;
    max-width: 480px;
  `}

  ${mediaqueries.phablet`
    margin: 64px auto 64px;
    padding: 0 40px;
  `}

  @media screen and (max-height: 700px) {
    margin: 100px auto 48px;
  }
`;

const HeroHeading = styled(Headings.h1)`
  font-size: 48px;
  font-family: ${p => p.theme.fonts.title};
  margin-bottom: 25px;
  font-weight: bold;
  line-height: 1.32;

  ${mediaqueries.tablet`
    margin-bottom: 20px;
    font-size: 36px;
  `}

  ${mediaqueries.phablet`
    font-size: 32px;
  `}
`;

const HeroSubtitle = styled.div<{ hasCoAUthors: boolean }>`
  position: relative;
  display: flex;
  font-size: 14px;
  color: ${p => p.theme.colors.secondary};
  align-items: center;
  margin-bottom: 20px;

  ${p => mediaqueries.phablet`
    flex-direction: column;
    align-items: left;
    align-items: flex-start;

    ${p.hasCoAUthors &&
    `
        &::before {
          content: '';
          position: absolute;
          left: -20px;
          right: -20px;
          top: -10px;
          bottom: -10px;
          border: 1px solid ${p.theme.colors.horizontalRule};
          opacity: 0.5;
          border-radius: 5px;
        }
    `}


    strong {
      display: block;
      font-weight: 500;
      margin-bottom: 5px;
    }
  `}
`;

const HeroImage = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 944px;
  overflow: hidden;
  margin: 0 auto;
  box-shadow: 0 30px 60px -10px rgba(0, 0, 0, 0.2),
    0 18px 36px -18px rgba(0, 0, 0, 0.22);

  ${mediaqueries.tablet`
    max-width: 100%;
  `}

  ${mediaqueries.phablet`
    margin: 0 auto;
    width: calc(100vw - 40px);
    height: 220px;

    & > div {
      height: 220px;
    }
`}
`;

const ArticleTag = styled.div<{ isDark: boolean }>`
  padding: .5rem .8rem;
  margin-right: 5px;
  color: #000;
  background: #E6E6E7;
  border-radius: 5px;
  font-size: 1.2rem;
  font-weight: 500;

  ${mediaqueries.desktop_up`
    &:first-of-type {
      margin-left: 5px;
    }
  `}
`;
