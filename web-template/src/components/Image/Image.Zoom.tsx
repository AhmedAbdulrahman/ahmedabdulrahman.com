import * as React from 'react'
import ImageWithZoom from 'react-medium-image-zoom'
import { useTheme } from '@theme'

const handleImageZoomBackground = (background: string): void => {
	const images = Array.from(
		document.getElementsByClassName('Image__Zoom') as HTMLCollectionOf<HTMLElement>
	)

	images.map((img): void => {
		if (img.previousElementSibling instanceof HTMLElement) {
			if (img.previousElementSibling && img.previousElementSibling.tagName === 'DIV') {
				img.previousElementSibling.style.background = background
			}
		}
	})
}

const ImageZoom: React.FC = (props) => {
	const { theme } = useTheme()

	const image = {
		...props,
		className: 'Image__Zoom',
		style: {
			display: 'block',
			margin: '0 auto',
			width: '100%',
		},
	}

	return (
		<ImageWithZoom
			image={image}
			zoomImage={image}
			onZoom={() => handleImageZoomBackground(theme.colors.background)}
			defaultStyles={{
				zoomImage: {
					borderRadius: '5px',
				},
			}}
		/>
	)
}

export default ImageZoom
