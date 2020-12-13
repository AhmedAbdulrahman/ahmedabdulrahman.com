import * as React from 'react'
import SEO from '@components/SEO'
import Layout from '@components/Layout'
import MainHero from '@sections/main/Main.Hero'
import LatestArticles from '@sections/main/Latest.Articles'
import { PageProps } from '@types'

const Main: PageProps = ({ location }) => {
	return (
		<Layout location={location}>
			<SEO pathname={location.pathname} />
			<MainHero />
			<LatestArticles />
		</Layout>
	)
}

export default Main
