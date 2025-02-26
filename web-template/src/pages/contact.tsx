import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from '@emotion/styled'
import mediaqueries from '@styles/media'
import Section from '@components/Section'
import SEO from '@components/SEO'
import Layout from '@components/Layout'
import Headings from '@components/Headings'
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

const Contact: PageProps = ({ location }) => {
	const results = useStaticQuery(siteQuery)
	const title = results.allSite.edges[0].node.siteMetadata.title

	return (
		<Layout location={location}>
			<SEO pathname={location.href} title={`Contact - ${title}`} />
			<Section relative>
				<HeadingContainer>
					<HeroTextContainer>
						<Headings.HeroHeading>Ask me anything</Headings.HeroHeading>
						<InfoText>
							If you have a question please leave a message, I’m always happy to hear from
							interesting people doing interesting things.
						</InfoText>
					</HeroTextContainer>
				</HeadingContainer>
			</Section>
			<Section>
				<ContentContainer>
					<MyText>
						<form
							name="contact"
							netlify-honeypot="bot-field"
							data-netlify="true"
							method="POST"
							action="/success/"
						>
							<input type="hidden" name="bot-field" />
							<input type="hidden" name="form-name" value="contact" />
							<Label htmlFor="full-name">Full Name</Label>
							<FormInput name="full-name" type="text" placeholder="Your full name" required />
							<Label htmlFor="email-address">Email Address</Label>
							<FormInput name="email-address" type="email" placeholder="Your email" required />
							<Label htmlFor="message">Message</Label>
							<FormTextArea name="message" rows={6} placeholder="Your message..." required />
							<Button type="submit" hasError="">
								Submit
							</Button>
						</form>
					</MyText>
				</ContentContainer>
			</Section>
			<ArticlesGradient />
		</Layout>
	)
}

export default Contact

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

const HeadingContainer = styled.div`
	position: relative;
	display: grid;
	grid-template-columns: 1fr;
	column-gap: 64px;
	margin: 100px 0 76px;
	font-family: ${(p) => p.theme.fonts.title};

	${mediaqueries.tablet`
    grid-template-columns:  1fr;
    margin-bottom: 0;
  `}

	${mediaqueries.phablet`
  margin: 60px 0 36px;
`}
`

const HeroTextContainer = styled.div`
	position: relative;
	align-self: end;
	align-self: center;
`

const ContentContainer = styled.div`
	position: relative;
	display: grid;
	grid-template-columns: 1fr;
	column-gap: 64px;
	z-index: 1;
`

const InfoText = styled.p`
	font-size: 2.8rem;
	line-height: 1.5;
	font-family: ${(p) => p.theme.fonts.body};
	color: ${(p) => p.theme.colors.secondary};
	margin-bottom: 64px;

	span {
		color: ${(p) => p.theme.colors.accent};
		font-style: italic;
	}

	${mediaqueries.phablet`
  font-size: 1.8rem;
  line-height: 1.6;
`}
`

const MyText = styled.div`
	position: relative;
`

const FormInput = styled.input`
	background: #f5f5f5;
	border: solid 2px #f5f5f5;
	border-radius: 0;
	height: 48px;
	outline-offset: 0;
	padding: 0 16px;
	position: relative;
	transition: all 0.2s;
	max-width: 100%;
	width: 100%;
	-webkit-appearance: none;

	&:focus,
	&:active {
		border: 2px solid ${(p) => p.theme.colors.border};
		outline: 4px solid ${(p) => p.theme.colors.outline};
		outline-offset: 0;
		transition: all 0.2s;
	}
`

const FormTextArea = styled.textarea`
	background: #f5f5f5;
	border: solid 2px #f5f5f5;
	border-radius: 0;
	height: auto;
	resize: none;
	outline-offset: 0;
	padding: 10px 15px;
	position: relative;
	transition: all 0.2s;
	max-width: 100%;
	width: 100%;
	-webkit-appearance: none;

	&:focus,
	&:active {
		border: 2px solid ${(p) => p.theme.colors.border};
		outline: 4px solid ${(p) => p.theme.colors.outline};
		outline-offset: 0;
		transition: all 0.2s;
	}
`

const Label = styled.label`
	display: block;
	color: ${(p) => p.theme.colors.primary};
	margin-top: 15px;
	margin-bottom: 7.5px;
`

const Button = styled.button<{ hasError: string; subscribed?: boolean }>`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 161px;
	height: 48px;
	width: 100%;
	margin-top: 15px;
	border: 1px solid ${(p) => (p.hasError ? p.theme.colors.error : p.theme.colors.accent)};
	color: ${(p) => (p.hasError ? p.theme.colors.error : p.theme.colors.accent)};
	background: ${(p) => (p.subscribed ? p.theme.colors.accent : 'transparent')};
	font-weight: ${(p) => p.theme.fontsWeight.bold};
	border-radius: 35px;
	letter-spacing: 0.42px;
	transition: border-color 0.4s var(--ease-in-out-quad), background 0.4s var(--ease-in-out-quad),
		color 0.4s var(--ease-in-out-quad), transform 0.4s var(--ease-in-out-quad);

	&:hover {
		background: ${(p) => (p.hasError ? p.theme.colors.error : p.theme.colors.accent)};
		color: ${(p) => p.theme.colors.background};
		transform: translateY(-2px);
		box-shadow: 0 10px 28px rgba(47, 47, 47, 0.3);
	}

	&[disabled] {
		cursor: not-allowed;
	}
`
// const Error = styled.div`
// 	position: absolute;
// 	left: 35px;
// 	bottom: -20px;
// 	color: ${(p) => p.theme.colors.error};
// 	font-size: 12px;

// 	a {
// 		color: ${(p) => p.theme.colors.error};
// 		text-decoration: underline;
// 	}

// 	${mediaqueries.tablet`
//     left: 50px;
//     top: 50px;
//   `}
// `
