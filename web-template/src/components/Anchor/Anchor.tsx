import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

const StyledAnchor = styled.span`
	display: inline-block;
	position: relative;
	color: ${(p) => p.theme.colors.articleText};

	&:before,
	&:after {
		content: '';
		display: block;
		height: 0.4em;
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0.2em;
		z-index: -1;
		background-color: ${(p) => p.theme.colors.textOffset};
	}

	&:after {
		transform: scaleX(0);
		transform-origin: 0 50%;
		transition: transform 0.3s cubic-bezier(0.86, 0, 0.07, 1);
	}

	&:hover {
		&:after {
			transform: scaleX(1);
			background-color: ${(p) => p.theme.colors.accent};
		}
	}
`

interface AnchorProps {
	children: React.ReactNode
	component?: React.ElementType
	href?: string
	target?: string
	rel?: string
	external?: boolean
	to?: string
	replace?: boolean
}

const Anchor: React.FC<AnchorProps> = (props) => {
	const {
		children,
		external = false,
		href,
		to = '/',
		replace = false,
		component: Component = 'a',
		...other
	} = props

	if (external || (href && /^https?:\/\//.test(href))) {
		return (
			<Component href={href} rel="noopener noreferrer" target="_blank" {...other}>
				<StyledAnchor>{children}</StyledAnchor>
			</Component>
		)
	}

	return (
		<Link to={to} replace={replace} {...other}>
			<StyledAnchor>{children}</StyledAnchor>
		</Link>
	)
}

export default Anchor
