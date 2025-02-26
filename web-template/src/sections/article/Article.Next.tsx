import * as React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { Link } from 'gatsby'
import Headings from '@components/Headings'
import Image from '@components/Image'
import mediaqueries from '@styles/media'
import { IArticle } from '@types'

interface ArticlesNextProps {
	articles: IArticle[]
}

/**
 * Sits at the bottom of our Article page. Shows the next 2 on desktop and the
 * next 1 on mobile!
 *
 *  [..............], [.........]
 *  [.....LONG.....], [..SHORT..]
 *  [..............], [.........]
 *
 * This does NOT use Articles.List because there's a special case of only have 1 article
 * as the next one suggested article, which requires special styling we didn't want to
 * mix into the generic list component.
 */
const ArticlesNext: React.FC<ArticlesNextProps> = ({ articles }) => {
	if (!articles) return null
	const numberOfArticles = articles.length
	return (
		<Grid numberOfArticles={numberOfArticles}>
			<GridItem article={articles[0]} />
			<GridItem article={articles[1]} narrow />
		</Grid>
	)
}

export default ArticlesNext

interface GridItemProps {
	article: IArticle
	narrow?: boolean
}

const GridItem: React.FC<GridItemProps> = ({ article, narrow }) => {
	if (!article) return null

	const hasOverflow = narrow && article.title.length > 35
	const imageSource = narrow ? article.hero.narrow : article.hero.regular

	return (
		<ArticleLink to={article.slug} data-a11y="false" narrow={narrow ? 'true' : 'false'}>
			<Item>
				<ImageContainer>
					<Image src={imageSource} alt={article.title} />
				</ImageContainer>
				<Title>{article.title}</Title>
				<Excerpt hasOverflow={hasOverflow}>{article.excerpt}</Excerpt>
				<MetaData>
					{article.date} · {article.timeToRead} min read
				</MetaData>{' '}
			</Item>
		</ArticleLink>
	)
}

const wide = '1fr'

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
`
const Grid = styled.div<{ numberOfArticles: number }>`
	position: relative;
	display: grid;
	${(p) => {
		if (p.numberOfArticles === 1) {
			return `
      grid-template-columns: 1fr;
      grid-template-rows: 1
    `
		} else {
			return `
      grid-template-columns: ${wide} ${wide};
      grid-template-rows: 2;
      `
		}
	}}
	column-gap: 30px;
	margin: 0 auto;
	max-width: ${(p) => (p.numberOfArticles === 1 ? '680px' : '100%')};

	${mediaqueries.desktop`
    grid-template-columns: 1fr 1fr;
  `}

	${mediaqueries.tablet`
    grid-template-columns: 1fr;
  `}
`

const ImageContainer = styled.div`
	position: relative;
	height: 280px;
	margin-bottom: 30px;
	transition: transform 0.3s var(--ease-out-quad), box-shadow 0.3s var(--ease-out-quad);

	& > div {
		height: 100%;
	}

	${mediaqueries.tablet`
    height: 220px;
    margin-bottom: 35px;
  `}

	${mediaqueries.phablet`
    height: 200px;
    margin-bottom: 0;
    box-shadow: none;
    overflow: hidden;
  `}
`

const Item = styled.div`
	position: relative;

	@media (max-width: 540px) {
		background: ${(p) => p.theme.colors.card};
	}
`

const Title = styled(Headings.h2)<{
	hasOverflow?: boolean | null
}>`
	font-size: 20px;
	font-family: ${(p) => p.theme.fonts.title};
	font-weight: 400;
	margin-bottom: ${({ hasOverflow = false }) => (hasOverflow ? '45px' : '10px')};

	transition: color 0.3s ease-in-out;
	${limitToTwoLines};

	${mediaqueries.tablet`
    margin-bottom: 15px;
  `}
	${mediaqueries.phablet`
    padding: 30px 20px 0;
    margin-bottom: 10px;
    -webkit-line-clamp: 3;
  `}
`

const Excerpt = styled.p<{
	hasOverflow?: boolean
	narrow?: boolean
	gridLayout?: string
}>`
	${limitToTwoLines};
	max-width: ${(p) => (p.narrow ? '515px' : '515px')};
	margin-bottom: 1.2rem;
	font-family: ${(p) => p.theme.fonts.monospace};
	font-size: 1.775rem;
	color: ${(p) => p.theme.colors.articleText};
	display: ${(p) => (p.hasOverflow && p.gridLayout === 'tiles' ? 'box' : 'box')};

	${mediaqueries.desktop`
    display: -webkit-box;
  `}

	${mediaqueries.phablet`
    margin-bottom; 15px;
  `}

  ${mediaqueries.phablet`
  font-size: 1.275rem;
    max-width: 100%;
    padding:  0 20px;
    margin-bottom: 20px;
    -webkit-line-clamp: 3;
  `}
`

const MetaData = styled.div`
	font-family: ${(p) => p.theme.fonts.monospace};
	font-weight: 400;
	font-size: 1.625rem;
	color: ${(p) => p.theme.colors.textOffset};
	background-image: none;

	${mediaqueries.phablet`
  max-width: 100%;
  padding:  0 20px 30px;
`}
`

const ArticleLink = styled(Link)<{ narrow: string }>`
	position: relative;
	display: block;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	z-index: 1;
	text-decoration: none;
	background-image: none;
	transition: transform 0.33s var(--ease-out-quart);
	-webkit-tap-highlight-color: rgba(255, 255, 255, 0);

	&:hover ${ImageContainer}, &:focus ${ImageContainer} {
		transform: translateY(-1px);
		box-shadow: 14px 14px 60px -10px rgba(0, 0, 0, 0.3);
	}

	&:hover h2,
	&:focus h2 {
		color: ${(p) => p.theme.colors.accent};
	}

	&[data-a11y='true']:focus::after {
		content: '';
		position: absolute;
		left: -2%;
		top: -2%;
		width: 104%;
		height: 104%;
		border: 3px solid ${(p) => p.theme.colors.secondary};
		background: rgba(255, 255, 255, 0.01);
	}

	${(p) => p.narrow === 'true' && mediaqueries.tablet`display: none;`}

	${mediaqueries.phablet`
    &:hover ${ImageContainer} {
      transform: none;
      box-shadow: initial;
    }

    &:active {
      transform: scale(0.97) translateY(3px);
    }
  `}
`
