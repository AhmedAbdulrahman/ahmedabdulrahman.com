import * as React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { Link } from 'gatsby'
import { graphql, useStaticQuery } from 'gatsby'
import Headings from '@components/Headings'
import Section from '@components/Section'
import mediaqueries from '@styles/media'

const siteQuery = graphql`
	{
		allArticle(limit: 1, sort: { order: DESC, fields: date }, filter: { secret: { eq: false } }) {
			edges {
				node {
					title
					date(formatString: "DD MMMM")
					slug
				}
			}
		}
	}
`

const LatestArticles: React.FC = () => {
	const result = useStaticQuery(siteQuery).allArticle.edges[0].node

	return (
		<Section>
			<GridContainer>
				<WriteContainer>
					<Headings.SectionHeading
						data-scroll
						data-scroll-speed="2"
						css={css`
							margin: 100px 0;
						`}
					>
						<Span data-scroll data-scroll-direction="horizontal" data-scroll-speed="-2">
							Writing is th-
						</Span>
						<br />
						<Span data-scroll data-scroll-direction="horizontal" data-scroll-speed="2">
							inking.
						</Span>
					</Headings.SectionHeading>
					<Text>I write to get ideas, to inspire myself and to learn something new.</Text>
					<LatestArticle to={result.slug} title={result.title}>
						<ArticleDate>Latest article - {result.date}</ArticleDate>
						<ArticleTitle>{result.title}</ArticleTitle>
					</LatestArticle>
					<ViewLink to={`/writing`} title={`See all articles`}>
						View all articles
					</ViewLink>
				</WriteContainer>
			</GridContainer>
		</Section>
	)
}

export default LatestArticles

const GridContainer = styled.div`
	position: relative;
	display: grid;
	z-index: 1;
	grid-template-columns: 1fr;
	column-gap: 48px;
	row-gap: 128px;
	margin-bottom: 128px;
	color: ${(p) => p.theme.colors.secondary};

	${mediaqueries.tablet`
		grid-template-columns: 1fr;
  `}
`

const WriteContainer = styled.div``

const Text = styled.p`
	font-size: 2.8rem;
	line-height: 1.5;
	font-family: ${(p) => p.theme.fonts.body};
	color: ${(p) => p.theme.colors.articleText};
	margin-bottom: 64px;

	span {
		color: ${(p) => p.theme.colors.accent};
		font-style: italic;
	}

	${mediaqueries.phablet`
  font-size: 2rem;
  line-height: 1.6;
`}
`

const Span = styled.span`
	color: ${(p) => p.theme.colors.primary};
`

const LatestArticle = styled(Link)`
	margin-top: 40px;
	display: block;
	background-image: none;
	text-decoration: none;

	&:hover h3,
	&:focus h3 {
		color: ${(p) => p.theme.colors.accent};
		transform: translateX(10px);
	}

	&:before {
		background-image: none;
	}
`

const ArticleDate = styled.div`
	font-family: ${(p) => p.theme.fonts.title};
	font-size: 15px;
	text-transform: uppercase;
	margin-bottom: 8px;
	color: ${(p) => p.theme.colors.accent};

	${mediaqueries.phablet`
  font-size: 1.5rem
  `}
`

const ArticleTitle = styled(Headings.h3)`
	font-size: 2.2rem;
	margin-bottom: 16px;
	text-decoration: underline;
	transform: translateX(0);
	transition: all 0.25s ease;
`

const ViewLink = styled(Link)`
	font-weight: ${(p) => p.theme.fontsWeight.bold};
	font-family: ${(p) => p.theme.fonts.title};
	font-size: 1.5rem;
	color: ${(p) => p.theme.colors.articleText};
	transition: color 0.25s var(--ease-in-out-quad);
	display: inline-block;
	position: relative;
	margin-top: 24px;
	text-transform: uppercase;
	transition: color 0.25s ease 0s;

	&::after {
		content: '→';
		right: -20px;
		position: absolute;
		transition: right 0.25s ease 0s;
	}
	&:hover {
		color: ${(p) => p.theme.colors.accent};
		&::after {
			color: ${(p) => p.theme.colors.accent};
			right: -30px;
		}
	}
`
