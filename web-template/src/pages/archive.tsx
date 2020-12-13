import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from '@emotion/styled'
import mediaqueries from '@styles/media'
import { Link } from 'gatsby'
import Section from '@components/Section'
import SEO from '@components/SEO'
import { LayoutBase } from '@components/Layout'
import ArticlesGradient from '@components/ArticlesGradient'
import PageHero from '@sections/others'
import { PageProps } from '@types'

const siteQuery = graphql`
	{
		allArticle(sort: { order: DESC, fields: date }, filter: { secret: { eq: false } }) {
			edges {
				node {
					title
					date(formatString: "DD MMMM YYYY")
					slug
				}
			}
			totalCount
		}
		allSite {
			edges {
				node {
					siteMetadata {
						title
						siteUrl
					}
				}
			}
		}
	}
`

const Archive: PageProps = ({ location }) => {
	const result = useStaticQuery(siteQuery)
	const site = result.allSite.edges[0].node.siteMetadata

	return (
		<LayoutBase location={location}>
			<Section component="main">
				<SEO
					image={`${site.siteUrl}/archive.png`}
					pathname={location.pathname}
					title={`Archive - ${site.title}`}
				/>
				<PageHero heading="Archive" subtitle={result.allArticle.totalCount + ' articles.'} />
				<Wrapper>
					{result.allArticle.edges.map((item, index) => (
						<ArticlesItem to={item.node.slug} data-a11y="false" key={index}>
							<Date>{item.node.date}</Date>
							<Title>{item.node.title}</Title>
						</ArticlesItem>
					))}
				</Wrapper>
				<ArticlesGradient />
			</Section>
		</LayoutBase>
	)
}

export default Archive

const ArticlesItem = styled(Link)`
	font-family: ${(p) => p.theme.fonts.body};
	z-index: 1;
	position: relative;
	display: grid;
	grid-template-columns: 160px 1fr;
	column-gap: 16px;
	margin-bottom: 24px;
	background-image: none;

	&:hover h2,
	&:focus h2 {
		color: ${(p) => p.theme.colors.accent};
		transform: translateX(10px);
	}

	${mediaqueries.tablet`
    grid-template-columns: 1fr;
    margin-bottom: 40px;
  `};
`

const Date = styled.div`
	font-size: 16px;
	color: ${(p) => p.theme.colors.textOffset};
	margin-bottom: 4px;
	padding-top: 3px;
`

const Title = styled.h2`
	font-size: 18px;
	color: ${(p) => p.theme.colors.articleText};
	transform: translateX(0);
	transition: all 0.25s ease;
`

const Wrapper = styled.div`
	margin-bottom: 240px;
`
