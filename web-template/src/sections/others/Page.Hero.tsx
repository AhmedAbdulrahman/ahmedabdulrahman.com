import * as React from 'react'
import styled from '@emotion/styled'
import Headings from '@components/Headings'
import mediaqueries from '@styles/media'

interface HeroProps {
	heading: string
	subtitle?: string
	maxWidth?: number
}

const PageHero: React.FC<HeroProps> = ({ heading, subtitle, maxWidth }) => {
	return (
		<Container>
			<HeroTextContainer style={{ maxWidth: `${maxWidth}px` }}>
				<Headings.HeroHeading
					disableGutters
					data-scroll
					data-scroll-direction="horizontal"
					data-scroll-speed="-0.5"
				>
					{heading}
				</Headings.HeroHeading>
				<Headings.Subtitle data-scroll data-scroll-direction="horizontal" data-scroll-speed="0.5">
					{subtitle}
				</Headings.Subtitle>
			</HeroTextContainer>
		</Container>
	)
}

export default PageHero

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
