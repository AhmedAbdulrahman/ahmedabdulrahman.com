import * as React from 'react'
import ArticleBody from '@components/Article'
import Layout from '@components/Layout'
import MDXRenderer from '@components/MDX'
import Section from '@components/Section'
import Subscription from '@components/Subscription'
import WorkshopHero from '@sections/workshop/Workshop.Hero'
import WorkshopSEO from '@sections/workshop/Workshop.SEO'
import { WorkshopTemplate } from '@types'

const Workshop: WorkshopTemplate = ({ pageContext, location }) => {
	const contentSectionRef = React.useRef<HTMLElement>(null)

	const { workshop, mailchimp } = pageContext

	return (
		<Layout location={location}>
			<Section component="main">
				<WorkshopSEO workshop={workshop} location={location} />
				<WorkshopHero title={workshop.title} />
				<ArticleBody ref={contentSectionRef}>
					<MDXRenderer content={workshop.body}></MDXRenderer>
					{mailchimp && workshop.subscription && <Subscription />}
				</ArticleBody>
			</Section>
		</Layout>
	)
}

export default Workshop
