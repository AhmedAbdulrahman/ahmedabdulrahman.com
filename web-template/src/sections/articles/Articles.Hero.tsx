import * as React from 'react'
import styled from '@emotion/styled'
import Anchor from '@components/Anchor'
import Headings from '@components/Headings'
import mediaqueries from '@styles/media'

const ArticlesHero: React.FC = () => {
	return (
		<Container>
			<HeroTextContainer>
				<Headings.HeroHeading
					data-scroll
					data-scroll-direction="horizontal"
					data-scroll-speed="-2"
					align="right"
					compact
				>
					Writing is
				</Headings.HeroHeading>
				<Headings.HeroHeading data-scroll data-scroll-direction="horizontal" data-scroll-speed="2">
					<span>thinking</span>.
				</Headings.HeroHeading>
				<Headings.Subtitle>
					I write about solving problems with code, designing things people use, teaching, and
					learning. <Anchor to="/archive">Archive</Anchor>
				</Headings.Subtitle>
			</HeroTextContainer>
		</Container>
	)
}

export default ArticlesHero

const Container = styled.div`
	position: relative;
	margin: 200px 0 40px;

	${mediaqueries.tablet`
    margin: 180px 0 40px;
  `}

	${mediaqueries.phablet`
    margin: 125px 0 40px;
  `}
`

const HeroTextContainer = styled.div`
	position: relative;
	align-self: end;
	align-self: flex-start;
`
