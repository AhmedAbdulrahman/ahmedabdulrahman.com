import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import mediaqueries from '@styles/media'
import Section from '@components/Section'
import SEO from '@components/SEO'
import Layout from '@components/Layout'
import Anchor from '@components/Anchor'
import Link from '@components/Link'
import Headings from '@components/Headings'
import Icons from '@icons'
import { PageProps } from '@types'

const siteQuery = graphql`
	{
		allSite {
			edges {
				node {
					siteMetadata {
						name
						siteUrl
						title
					}
				}
			}
		}
	}
`

const AboutPage: PageProps = ({ location }) => {
	const results = useStaticQuery(siteQuery)
	const site = results.allSite.edges[0].node.siteMetadata

	return (
		<Layout location={location}>
			<SEO
				image={`${site.siteUrl}/about.png`}
				pathname={location.pathname}
				title={`About me - ${site.title}`}
			/>
			<Section>
				<Container>
					<HeroTextContainer data-scroll data-scroll-speed="3">
						<Headings.HeroHeading
							disableGutters
							data-scroll
							data-scroll-direction="horizontal"
							data-scroll-speed="2"
							align="right"
						>
							Stockholm based
						</Headings.HeroHeading>
						<Headings.HeroHeading
							data-scroll
							data-scroll-direction="horizontal"
							data-scroll-speed="-2"
						>
							<span>Creative Developer</span>
						</Headings.HeroHeading>
						<Headings.HeroHeading
							data-scroll
							data-scroll-direction="horizontal"
							data-scroll-speed="2"
							align="right"
						>
							&amp; <span>Designer</span>.
						</Headings.HeroHeading>
					</HeroTextContainer>
					<HeroImage>
						<Icons.About />
					</HeroImage>
				</Container>
				<ContentContainer>
					<MyText>
						<InfoText>
							Although my skillset is diverse with full of passion for all aspects of building great
							software, I specialise in Front-end development. My focus is on creating engaging,
							accessible &amp; performant interfaces for humans. I&apos;ve worked on projects of
							various scales, both solo and as part of a team.
						</InfoText>
						<InfoText>
							Currently, I live Stockholm, where I work at Oakwood building premium design solutions
							in all digital touchpoints, while also taking on freelance projects that pique my
							interest.
						</InfoText>
						<Headings.SectionHeading
							data-scroll
							data-scroll-direction="horizontal"
							data-scroll-speed="2"
							css={css`
								margin: 100px 0;
							`}
						>
							Where to go next
						</Headings.SectionHeading>
						<InfoText>
							You can find out
							{` `}
							<Link to={`/uses`} title={`Uses`}>
								what tools, software, gadgets, and services
							</Link>
							{` `}I use or read about some of the ways you can{` `}
							<Link to={`/work-with-me`} title={`Work with me`}>
								work with me
							</Link>
							. I’m currently working on a{` `}
							<Link to={`/workshops`} title={`Uses`}>
								workshops
							</Link>
							{` `}
							page, to list all my upcoming Online Workshops, but it’s taking a while. For those
							interested in{` `}
							<Link to={`/`} title={`Home`}>
								how I built this site
							</Link>
							, I’ve tried my best to list all the tools and techniques I used.
						</InfoText>
						<InfoText>
							Find me on{` `}
							<Anchor external href="https://github.com/AhmedAbdulrahman" component={OutboundLink}>
								Github
							</Anchor>
							, and{` `}
							<Anchor external href="https://twitter.com/_ahmed_ab" component={OutboundLink}>
								Twitter
							</Anchor>
							{` `}
							if you have questions. Very occassionally I check my{` `}
							<Anchor
								external
								href="https://www.linkedin.com/in/ahmed-abd/"
								component={OutboundLink}
							>
								LinkedIn
							</Anchor>
							.
						</InfoText>

						<Headings.SectionHeading
							data-scroll
							data-scroll-direction="horizontal"
							data-scroll-speed="-2"
							css={css`
								margin: 100px 0;
							`}
						>
							What else?
						</Headings.SectionHeading>
						<InfoText>
							When I&apos;m not coding or reading excellent software books (which I really must
							compile a list for), I spend time with kids, write, and jog around town 🏃‍.
						</InfoText>
					</MyText>
				</ContentContainer>
			</Section>
			<ArticlesGradient />
		</Layout>
	)
}

export default AboutPage

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

const Container = styled.div`
	position: relative;
	display: grid;
	grid-template-columns: 1fr 450px;
	column-gap: 5em;
	overflow: hidden;
	margin: 104px 0 40px;

	${mediaqueries.desktop`
    grid-template-columns: 1fr;
  `}

	${mediaqueries.desktop_up`
    grid-template-columns: 1fr 1fr;
  `}


  ${mediaqueries.tablet`
    grid-template-columns: 1fr;
    margin: 150px 0 40px;
  `}
`

const HeroTextContainer = styled.div`
	position: relative;
	align-self: center;

	h1 {
		${mediaqueries.desktop_medium_up`
      font-size:  3.28vw;
    `}
	}

	${mediaqueries.tablet`
    padding-top: 2rem;
  `}

	${mediaqueries.desktop_up`
    padding-top: 8rem;
  `}

  ${mediaqueries.desktop_medium_up`
    padding-top: 15rem;
  `}
`

const HeroImage = styled.div`
	position: relative;

	${mediaqueries.tablet`
    display: none;
    visibility: hidden;
  `}

	${mediaqueries.desktop`
    display: none;
    visibility: hidden;
  `}
`

const ContentContainer = styled.div`
	position: relative;
	display: grid;
	grid-template-columns: 1fr;
	column-gap: 64px;
	z-index: 1;
`

const InfoText = styled.p`
	font-size: 2.6rem;
	line-height: 1.8;
	font-family: ${(p) => p.theme.fonts.body};
	color: ${(p) => p.theme.colors.articleText};
	margin-bottom: 24px;

	${mediaqueries.phablet`
    font-size: 2.2rem;
    line-height: 1.6;
  `}
`

const MyText = styled.div`
	position: relative;
`
