import React, { useRef, useEffect, useState } from 'react'
import styled from '@emotion/styled'
import mediaqueries from '@styles/media'

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	background: #ccc;
	color: #898989;
	font-size: 32px;
	font-weight: ${(p) => p.theme.fontsWeight.bold};

	${mediaqueries.phablet`
    font-size: 28px;
  `}
`

const ImagePlaceholder = (props: unknown): JSX.Element => {
	const containerRef = useRef<HTMLDivElement | null>(null)
	const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

	useEffect(() => {
		const container = containerRef.current
		if (container !== null) setDimensions(container.getBoundingClientRect())

		const handleResize = (): void => {
			if (container !== null) setDimensions(container.getBoundingClientRect())
		}

		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	return (
		<Container ref={containerRef} {...props}>
			<div>
				{dimensions.width} x {dimensions.height}
			</div>
		</Container>
	)
}

export default ImagePlaceholder
