import * as React from 'react'
import styled from '@emotion/styled'
import mediaqueries from '@styles/media'

const CategoryHero = ({ category }: { category: string }): JSX.Element => {
	return (
		<Hero>
			<Heading>{category}</Heading>
		</Hero>
	)
}

export default CategoryHero

const Hero = styled.div`
	position: relative;
	z-index: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 35px auto 110px;
`

const Heading = styled.h1`
	font-size: 38px;
	font-family: ${(p) => p.theme.fonts.title};
	color: ${(p) => p.theme.colors.primary};
	margin-bottom: 15px;
	font-weight: 600;
	text-transform: capitalize;
	${mediaqueries.tablet`
  `}
	${mediaqueries.phablet`
  `}
`
