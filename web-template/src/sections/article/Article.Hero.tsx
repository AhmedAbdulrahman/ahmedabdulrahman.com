import * as React from 'react'
import styled from '@emotion/styled'
import { useColorMode } from 'theme-ui'
import Markdown from 'react-markdown'
// import { IoLogoGithub } from 'react-icons/io'
import Headings from '@components/Headings'
import Image, { ImagePlaceholder } from '@components/Image'
import mediaqueries from '@styles/media'
import { IArticle, IAuthor } from '@types'
import { formatReadingTime } from '@utils'
import ArticleAuthors from './Article.Authors'

interface ArticleHeroProps {
	article: IArticle
	authors: IAuthor[]
}

// const GITHUB_USERNAME = 'AhmedAbdulrahman'
// const GITHUB_REPO_NAME = 'ahmedabdulrahman.com'

const ArticleHero: React.FC<ArticleHeroProps> = ({ article, authors }) => {
	const [colorMode] = useColorMode()
	const isDark = colorMode === 'dark'
	const hasCoAUthors = authors.length > 1
	const hasHeroImage =
		article.hero &&
		Object.keys(article.hero.full).length !== 0 &&
		article.hero.full.constructor === Object

	// const editURL = `https://github.com/${GITHUB_USERNAME}/${GITHUB_REPO_NAME}/edit/master/www/content/posts/${article.slug.replace(
	// 	'/writing/',
	// 	''
	// )}/index.mdx`

	return (
		<Hero>
			<Header>
				<HeroHeading data-scroll>
					<HeadingLine data-scroll data-scroll-speed="3" data-scroll-position="top">
						{article.title}
					</HeadingLine>
				</HeroHeading>
				<Excerpt data-scroll>
					<HeadingLine data-scroll data-scroll-speed="2" data-scroll-position="top">
						{article.excerpt}
					</HeadingLine>
				</Excerpt>
				<HeroSubtitle
					hasCoAUthors={hasCoAUthors}
					data-scroll
					data-scroll-speed="1"
					data-scroll-position="top"
				>
					<ArticleAuthors authors={authors} />
					<ArticleMeta hasCoAUthors={hasCoAUthors}>
						{article.date}
						{` • ${formatReadingTime(article.timeToRead)}`}
						{/* <a href={editURL} target="_blank" rel="noopener noreferrer">
              <IoLogoGithub />
            </a> */}
					</ArticleMeta>
				</HeroSubtitle>
				<Tags data-scroll data-scroll-speed="1" data-scroll-position="top">
					{article.tags.map((tag, index) => (
						<ArticleTag key={index} isDark={isDark}>
							{tag}
						</ArticleTag>
					))}
				</Tags>
			</Header>
			<HeroImage id="Image__Hero" data-scroll data-scroll-speed="-0.5">
				{hasHeroImage ? (
					<Image src={article.hero.full} alt={article.title} />
				) : (
					<ImagePlaceholder />
				)}
				{article.bannerCredit ? <StyledMarkdown>{article.bannerCredit}</StyledMarkdown> : null}
			</HeroImage>
		</Hero>
	)
}

export default ArticleHero

const Hero = styled.div`
	${(p) => mediaqueries.phablet`
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
`

const ArticleMeta = styled.div<{ hasCoAUthors: boolean }>`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-left: ${(p) => (p.hasCoAUthors ? '10px' : '0')};
	a {
		font-size: 22px;
		display: inline-flex;
		color: ${(p) => p.theme.colors.articleText};
		margin-left: 10px;
	}
	${mediaqueries.phablet`
    margin-left: 0;
  `}
`

const Tags = styled.div`
	display: flex;
	flex-flow: row wrap;
	margin-top: 1rem;

	${mediaqueries.desktop_up`
    margin-left: 3rem;
  `}
`

const ArticleTag = styled.span<{ isDark: boolean }>`
	font-size: 1.5rem;
	font-weight: 600;
	margin: 0 5px 5px 0;
	padding: 0.3rem 0.8rem;
	color: ${(p) => p.theme.colors.card};
	background: ${(p) => (p.isDark ? p.theme.colors.accent : p.theme.colors.textOffset)};
	border-radius: 5px;

	${mediaqueries.desktop_up`
    &:first-of-type {
      margin-left: 5px;
    }
  `}
`

const Header = styled.div`
	position: relative;
	max-width: 75rem;
	width: 100%;
	margin: 100px auto 56px;
	z-index: 10;

	${mediaqueries.desktop`
     margin: 100px auto 70px;
  `}

	${mediaqueries.desktop_up`
     margin: 150px auto 70px;
  `}

  ${mediaqueries.tablet`
    margin: 100px auto 70px;
    max-width: 480px;
  `}

  @media screen and (max-height: 700px) {
		margin: 100px auto 48px;
	}
`

const HeadingLine = styled.span`
	display: block;
	opacity: 0;
	transform-origin: center top;
	transform-style: preserve-3d;
	transform: translateY(100%) rotateX(-80deg);
	transition: opacity 0s cubic-bezier(0.215, 0.61, 0.355, 1),
		transform 0s cubic-bezier(0.215, 0.61, 0.355, 1);

	html.has-scroll-init & {
		opacity: 1;
		transition-duration: 0.8s;
		transform: none;
	}
`

const HeroHeading = styled(Headings.h1)`
	font-size: 55px;
	font-family: ${(p) => p.theme.fonts.title};
	margin-bottom: 25px;
	font-weight: ${(p) => p.theme.fontsWeight.bold};

	${HeadingLine} {
		display: inline-block;
		transition-delay: 0.1s;
	}

	${mediaqueries.tablet`
    margin-bottom: 20px;
  `}
`

const Excerpt = styled(Headings.h3)`
	font-family: ${(p) => p.theme.fonts.monospace};
	font-size: 2.3rem;
	font-weight: 300;
	line-height: 1.8;
	color: ${(p) => p.theme.colors.articleText};
	margin-top: 24px;
	margin-bottom: 40px;

	${HeadingLine} {
		transition-delay: 0.2s;
		display: inline-block;
	}
`

const HeroSubtitle = styled.div<{ hasCoAUthors: boolean }>`
	position: relative;
	display: flex;
	align-items: center;
	font-family: ${(p) => p.theme.fonts.monospace};
	font-size: 1.675rem;
	color: ${(p) => p.theme.colors.articleText};

	${mediaqueries.phablet`
    flex-direction: column;
    align-items: left;
    align-items: flex-start;

    ${(p) =>
			p.hasCoAUthors &&
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

	${mediaqueries.tablet`
    font-size: 18px;
  `};

	${mediaqueries.phablet`
    font-size: 14px;
  `};
`

const HeroImage = styled.div`
	position: relative;
	z-index: 1;
	width: 100%;
	max-width: 944px;
	overflow: hidden;
	margin: 0 auto;
	text-align: center;

	html[data-direction='down'] div {
		transform-origin: center top;
		transform-style: preserve-3d;
		transition: transform 0s cubic-bezier(0.215, 0.61, 0.355, 1);
		transform: translateY(-100%);
	}

	a {
		display: inline-block;
		position: relative;

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
			background-color: ${(p) => p.theme.colors.textOffset};
		}

		&:after {
			transform: scaleX(0);
			transform-origin: 0 50%;
			transition: transform 0.3s cubic-bezier(0.86, 0, 0.07, 1);
		}

		&:hover {
			&:after {
				transform: scaleX(1);
				background-color: ${(p) => p.theme.colors.accent};
			}
		}
	}

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
`

const StyledMarkdown = styled(Markdown)`
	font-family: ${(p) => p.theme.fonts.monospace};
	font-size: 1.6rem;
	font-style: italic;
	color: ${(p) => p.theme.colors.articleText};
	a,
	p {
		color: ${(p) => p.theme.colors.articleText};
	}
`
