import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { Link } from 'gatsby'
import { uniq, includes } from 'lodash'
import { useColorMode } from 'theme-ui'
import Headings from '@components/Headings'
import mediaqueries from '@styles/media'
import { IWorkshop } from '@types'
import { capitalize } from '@utils'

const TECH_IMAGE_MAPPER = {
	javascript: '/javascript.png',
	react: '/react.png',
	testing: '/testing.png',
	graphql: '/graphqllogo.png',
	python: '/python.png',
	node: '/nodejs.png',
}
interface WorkshopsListProps {
	workshops: IWorkshop[]
	alwaysShowAllDetails?: boolean
}

interface WorkshopsListItemProps {
	workshop: IWorkshop
	narrow?: boolean
	isDark?: boolean
}

const WorkshopsList: React.FC<WorkshopsListProps> = ({ workshops, alwaysShowAllDetails }) => {
	const [colorMode] = useColorMode()

	const isDark = colorMode === `dark`

	const workshopTech = uniq(workshops.map((workshop) => workshop.tech))
	const [displayedTech, setDisplayedTech] = React.useState(workshopTech)

	const techToggleIsActive = (getDisplayedTech, tech): boolean => {
		return includes(getDisplayedTech, tech) && getDisplayedTech.length === 1
	}

	const workshopPairsFiltered = workshops.filter((workshop) => {
		return includes(displayedTech, workshop.tech)
	})

	if (!workshops) return null
	return (
		<WorkshopsListContainer style={{ opacity: 1 }} alwaysShowAllDetails={alwaysShowAllDetails}>
			<TechToggleContainer>
				{workshopTech.map((tech) => (
					<TechToggle
						isActive={techToggleIsActive(displayedTech, tech)}
						isDark={isDark}
						key={tech}
						onClick={() => {
							if (techToggleIsActive(displayedTech, tech)) {
								setDisplayedTech(workshopTech)
							} else {
								setDisplayedTech([tech])
							}
						}}
					>
						<img src={TECH_IMAGE_MAPPER[tech]} alt={tech} />
						<span>{capitalize(tech)}</span>
					</TechToggle>
				))}
			</TechToggleContainer>

			<List>
				{workshopPairsFiltered.map((workshop, index) => (
					<ListItem key={index} workshop={workshop} isDark={isDark} />
				))}
			</List>
		</WorkshopsListContainer>
	)
}

export default WorkshopsList

const ListItem: React.FC<WorkshopsListItemProps> = ({ workshop }) => {
	if (!workshop) return null

	return (
		<ArticleLink to={workshop.slug} data-a11y="false">
			<Item>
				<Author>{workshop.instructor}</Author>
				<Title>{workshop.title}</Title>
				<Excerpt>{workshop.excerpt}</Excerpt>
				<img src={TECH_IMAGE_MAPPER[workshop.tech]} alt={workshop.tech} />
			</Item>
		</ArticleLink>
	)
}

const limitToTwoLines = css`
	text-overflow: ellipsis;
	overflow-wrap: normal;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	display: -webkit-box;
	white-space: normal;
	overflow: hidden;
`

const showDetails = css`
	p {
		display: -webkit-box;
	}
	h2 {
		margin-bottom: 10px;
	}
`

const WorkshopsListContainer = styled.div<{ alwaysShowAllDetails?: boolean }>`
	transition: opacity 0.25s;
	width: 100%;
	margin-left: auto;
	margin-right: auto;

	${mediaqueries.tablet_up`
  padding: 4rem 0;
  max-width: 55rem;
  `}

	${mediaqueries.desktop_up`
  padding: 4rem 0;
  max-width: 100rem;
  `}
  ${(p) => p.alwaysShowAllDetails && showDetails}

  img {
		margin: 0;
		margin-right: 10px;
		width: 20px;
	}
`

const List = styled.div`
	position: relative;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 2;
	column-gap: 30px;
	${mediaqueries.desktop_medium`
    grid-template-columns: 1fr 1fr;
  `}
	${mediaqueries.tablet`
    grid-template-columns: 1fr;

    &:not(:last-child) {
      margin-bottom: 0;
    }
  `}
`

const Item = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	height: 100%;
	padding: 40px;
	text-align: center;
	box-shadow: 0 5px 30px -15px rgba(0, 0, 0, 0.2);

	img {
		width: 30px;
		align-self: flex-end;
	}

	${mediaqueries.desktop`
      padding-left: 24px;
      padding-right: 24px;
    `}
`

const ImageContainer = styled.div`
	position: relative;
	margin: 56px auto 32px auto;
	box-shadow: 8px 12px 32px rgba(0, 0, 0, 0.16);
	height: auto;
	transition: transform 0.3s var(--ease-out-quad), box-shadow 0.3s var(--ease-out-quad);
	width: 320px;
	& > div {
		height: 100%;
		::before {
			background: linear-gradient(to left, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.3) 90%);
			box-shadow: 1px 0 rgba(0, 0, 0, 0.1), 2px 0 0px rgba(255, 255, 255, 0.1);
			content: '';
			display: block;
			height: 100%;
			position: absolute;
			width: 6px;
			z-index: 2;
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
			border-top-right-radius: 2px;
			border-bottom-right-radius: 2px;
		}
	}
	::before {
		background-image: url(/utils/shadow.png);
		background-size: contain;
		background-position: right;
		background-repeat: no-repeat;
		content: ' ';
		display: block;
		height: 100%;
		right: 99%;
		position: absolute;
		top: 0;
		transform-origin: center right;
		width: 100%;
		z-index: 0;
		pointer-events: none;
	}
	${mediaqueries.desktop`
    width: 264px;
  `}
	${mediaqueries.tablet`
    width: 304px;
  `}
  ${mediaqueries.phone`
    width: 264px;
    margin-top: 32px;
  `}
`

const Title = styled(Headings.h2)`
	font-size: 24px;
	font-family: ${(p) => p.theme.fonts.title};
	color: ${(p) => p.theme.colors.primary};
	margin: 8px 0;
	transition: color 0.3s ease-in-out;

	${mediaqueries.desktop`
    font-size: 22px;
  `}

	${mediaqueries.tablet`
    font-size: 24px;
  `}

  ${mediaqueries.phablet`
    font-size: 22px;
  `}
`

const Excerpt = styled.p`
	${limitToTwoLines};
	font-size: 1.8rem;
	margin-bottom: 28px;
	color: ${(p) => p.theme.colors.secondary};
	font-family: ${(p) => p.theme.fonts.body};
	display: box;
	max-width: 515px;
	line-height: 1.6;

	${mediaqueries.desktop`
    display: -webkit-box;
  `}

	${mediaqueries.phablet`
    max-width: 100%;
    margin-bottom: 20px;
    font-size: 14px;
    -webkit-line-clamp: 3;
  `}
`

const Author = styled.div`
	font-size: 15px;
	color: ${(p) => p.theme.colors.secondary};
	font-family: ${(p) => p.theme.fonts.body};
	font-weight: ${(p) => p.theme.fontsWeight.regular};
	font-style: italic;
	margin-bottom: 8px;
`

const ArticleLink = styled(Link)`
	position: relative;
	display: block;
	width: 100%;
	top: 0;
	left: 0;
	margin-bottom: 30px;
	z-index: 1;
	transition: transform 0.33s var(--ease-out-quart);
	background: ${(p) => p.theme.colors.card};
	-webkit-tap-highlight-color: rgba(255, 255, 255, 0);
	&[data-a11y='true']:focus::after {
		content: '';
		position: absolute;
		left: -1.5%;
		top: -2%;
		width: 103%;
		height: 104%;
		border: 3px solid ${(p) => p.theme.colors.accent};
		background: rgba(255, 255, 255, 0.01);
		border-radius: 5px;
	}

	${mediaqueries.phablet`
    &:hover ${ImageContainer} {
      transform: none;
      box-shadow: initial;
    }
    &:active {
      transform: scale(0.97) translateY(3px);
    }
  `}
`

const TechToggleContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	margin-bottom: 50px;
	width: 100%;
	z-index: 2;
	background-image: ${(p) =>
		`linear-gradient(180deg, ${p.theme.colors.background}, ${p.theme.colors.background});`};

	${mediaqueries.phablet`
    margin-top: 30px;
    padding: 20px;
  `}

	${mediaqueries.tablet_up`
    position: sticky;
    top: 0px;
    padding: 20px;
  `}
`

const TechToggle = styled.button<{ isActive?: boolean; isDark?: boolean }>`
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 5px;
	font-family: ${(p) => p.theme.fonts.monospace};
	font-size: 1.5rem;
	font-weight: 600;
	color: ${(p) => p.theme.colors.primary};
	border: none !important;
	border-radius: 4px;
	padding: 1.2rem 1.5rem;
	background: ${(p) => p.theme.colors.card};
	transition: background 0.1s ease-in-out, color 0.1s ease-in-out;
	box-shadow: 0 5px 30px -15px rgba(0, 0, 0, 0.2);

	&:hover {
		color: ${(p) => p.theme.colors.background};
		background: ${(p) => p.theme.colors.primary};
	}

	${(p) =>
		p.isActive &&
		`
    color: ${p.theme.colors.background};
    background: ${p.theme.colors.primary};
  `}

	${mediaqueries.tablet`
    padding: 1rem 0.9rem;
  `}
`
