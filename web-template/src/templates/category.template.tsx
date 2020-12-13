import * as React from 'react'
import styled from '@emotion/styled'
import { graphql, useStaticQuery } from 'gatsby'
import Section from '@components/Section'
import SEO from '@components/SEO'
import Layout from '@components/Layout'
import Paginator from '@components/Navigation/Navigation.Paginator'
import NavCategory from '@components/Navigation/Navigation.Categories'
import ArticlesList from '@sections/articles/Articles.List'
// import CategoryHero from '@sections/article/Category.Hero';
import ArticlesHero from '@sections/articles/Articles.Hero'
import { CategoryProps } from '@types'

const siteQuery = graphql`
	{
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

const CategoryPage: CategoryProps = ({ location, pageContext }) => {
	const { group: articles, categories, category } = pageContext

	const results = useStaticQuery(siteQuery)
	const site = results.allSite.edges[0].node.siteMetadata

	return (
		<Layout location={location}>
			<Section>
				<SEO
					image={`${site.siteUrl}/writing.png`}
					pathname={location.pathname}
					title={`${category} - ${site.title}`}
				/>
				<ArticlesHero />
				<NavCategory categories={categories} />
				<ArticlesList articles={articles} />
				<ArticlesPaginator show={pageContext.pageCount > 1}>
					<Paginator {...pageContext} />
				</ArticlesPaginator>
				<ArticlesGradient />
			</Section>
		</Layout>
	)
}

export default CategoryPage

const ArticlesGradient = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 590px;
	z-index: 0;
	pointer-events: none;
	background: ${(p) => p.theme.colors.gradient};
	transition: ${(p) => p.theme.colorModeTransition};
`

const ArticlesPaginator = styled.div<{ show: boolean }>`
	${(p) => p.show && `margin-top: 64px;`}
`
