import * as React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { graphql, useStaticQuery } from 'gatsby'
import Section from '@components/Section'
import SocialLinks from '@components/SocialLinks'
import mediaqueries from '@styles/media'

const siteQuery = graphql`
	{
		allSite {
			edges {
				node {
					siteMetadata {
						name
						siteUrl
						email
						social {
							url
							# name
						}
					}
				}
			}
		}
		allMdx(sort: { fields: frontmatter___date, order: ASC }) {
			edges {
				node {
					frontmatter {
						date
					}
				}
			}
		}
	}
`

const Footer = (): JSX.Element => {
	const results = useStaticQuery(siteQuery)
	const { name, social, siteUrl, email } = results.allSite.edges[0].node.siteMetadata

	const copyrightDate = (() => {
		const { edges } = results.allMdx
		const years = [0, edges.length - 1].map((edge) =>
			new Date(edges[edge].node.frontmatter.date).getFullYear()
		)
		return years[0] === years[1] ? `${years[0]}` : `${years[0]}–${years[1]}`
	})()

	return (
		<Section
			css={css`
				padding: 2rem 0;
			`}
		>
			<HorizontalRule />
			<FooterContainer>
				<FooterItem>
					<strong>© {copyrightDate}</strong>
					<br />
					<a className="p-name u-url" rel="me" href={siteUrl}>
						{name}
					</a>
				</FooterItem>
				<FooterItem>
					<strong>Contact</strong>
					<br />
					<a href={`mailto:${email}`} rel="me" className="u-email">
						{email}
					</a>
				</FooterItem>
				<FooterItem right>
					<SocialLinks links={social} />
				</FooterItem>
			</FooterContainer>
		</Section>
	)
}

export default Footer

const FooterContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	color: ${(p) => p.theme.colors.secondary};

	@media (min-width: 768px) {
		align-items: center;
	}
`

const HorizontalRule = styled.div`
	position: relative;
	margin: 80px auto 32px;
	border-bottom: 1px solid ${(p) => p.theme.colors.horizontalRule};

	${mediaqueries.tablet`
    margin: 30px auto;
  `}
`

const FooterItem = styled.p<{ right?: boolean }>`
	flex-basis: 50%;
	margin-bottom: 0.5rem;
	font-size: 1.4rem;
	z-index: 1;
	color: ${(p) => p.theme.colors.articleText};

	a {
		font-size: 1.5rem;
		color: inherit;
		text-decoration: underline;
		&:hover {
			text-decoration: none;
		}
	}

	${(p) =>
		p.right &&
		`
  flex-basis: 100%;
  margin-bottom: 0;

    @media (min-width: 670px){
      margin-left: auto !important;
      padding-right: 0 !important;
    }
  `}

	@media (min-width: 670px) {
		flex: 0 0 auto;
		padding-right: 2.5rem;
		margin: 0;
	}

	@media (min-width: 940px) {
		padding-right: 6rem;
	}
`
