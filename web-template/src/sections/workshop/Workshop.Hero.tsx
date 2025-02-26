import * as React from 'react'
import styled from '@emotion/styled'
import { useColorMode } from 'theme-ui'
import Headings from '@components/Headings'
import HorizontalRule from '@components/HorizontalRule'
import mediaqueries from '@styles/media'
import Icons from '@icons'

const WorkshopHero: React.FC<{ title: string }> = ({ title }) => {
	const [colorMode] = useColorMode()

	const isDark = colorMode === `dark`
	const splitTitle = title.split(' ')
	return (
		<>
			<HeroContainer>
				<HeroTextContainer data-scroll data-scroll-speed="2">
					{splitTitle.length >= 2 ? (
						splitTitle.map((title, idx) => (
							<Headings.HeroHeading
								key={idx}
								data-scroll
								data-scroll-direction="horizontal"
								data-scroll-speed={idx === 0 ? '-1' : '1'}
								align={idx === 0 ? 'left' : 'right'}
								disableGutters
							>
								{title}
							</Headings.HeroHeading>
						))
					) : (
						<Headings.HeroHeading
							data-scroll
							data-scroll-direction="horizontal"
							data-scroll-speed="-1"
							disableGutters
						>
							{title}
						</Headings.HeroHeading>
					)}
				</HeroTextContainer>
				<InfoContainer data-scroll data-scroll-speed="1">
					<Date>
						<Icons.Calendar />
						<span>TBA</span>
					</Date>
					<Time>
						<Icons.Time />
						<span>TBA</span>
					</Time>
					<Address>
						<Icons.Location />
						<span>Zoom</span>
					</Address>
				</InfoContainer>
			</HeroContainer>
			<HorizontalRule isDark={isDark} />
		</>
	)
}

export default WorkshopHero

const HeroContainer = styled.div`
	margin: 25rem 0 7rem;

	${mediaqueries.phablet`
    margin: 150px 0 72px;
  `}
`

const HeroTextContainer = styled.div`
	width: 100%;
`

const InfoContainer = styled.div`
	display: flex;
	flex-flow: row wrap;
	font-family: ${(p) => p.theme.fonts.title};
	align-items: center;
	justify-content: center;

	${mediaqueries.tablet`
    flex-direction: column;
    align-items: flex-start;
  `};
`

const Date = styled.div`
	color: ${(p) => p.theme.colors.primary};
	background: ${(p) => p.theme.colors.hover};
	padding: 10px 20px;
	font-size: 14px;
	border-radius: 20px;
	margin-right: 20px;
	display: flex;
	align-items: center;

	span {
		margin-left: 10px;
	}

	${mediaqueries.tablet`
    margin-bottom: 10px;
  `};

	${mediaqueries.desktop`
    padding: 10px 14px;
  `}
`
const Time = styled.time`
	color: ${(p) => p.theme.colors.primary};
	background: ${(p) => p.theme.colors.hover};
	padding: 10px 20px;
	font-size: 14px;
	border-radius: 20px;
	margin-right: 20px;
	display: flex;
	align-items: center;

	span {
		margin-left: 10px;
	}

	${mediaqueries.tablet`
  margin-bottom: 10px;
  `};

	${mediaqueries.desktop`
    padding: 10px 14px;
  `}
`
const Address = styled.address`
	color: ${(p) => p.theme.colors.primary};
	background: ${(p) => p.theme.colors.hover};
	padding: 10px 20px;
	font-size: 14px;
	border-radius: 20px;
	display: flex;
	align-items: center;
	font-style: normal;

	span {
		margin-left: 10px;
	}

	${mediaqueries.desktop`
    padding: 10px 14px;
  `}
`
