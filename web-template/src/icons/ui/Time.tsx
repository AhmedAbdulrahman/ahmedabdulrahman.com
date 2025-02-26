import * as React from 'react'
import { useTheme } from '@theme'
import { Icon } from '@types'

const Time: Icon = () => {
	const { theme } = useTheme()
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="15"
			height="15"
			viewBox="0 0 512 512"
			fill={theme.colors.primary}
		>
			<path d="M458.4 380.7a20 20 0 00-28 4A218 218 0 01419 399a20 20 0 0030 26.5c4.7-5.4 9.3-11 13.6-16.8a20 20 0 00-4-28zM491.9 286.9a20 20 0 00-23.8 15.3c-1.3 6-2.9 11.9-4.7 17.7a20 20 0 1038.2 11.8c2.2-7 4-14 5.5-21a20 20 0 00-15.2-23.8zM362.1 444.7c-5.3 3-10.8 5.8-16.3 8.3a20 20 0 1016.5 36.4c6.5-3 13-6.2 19.3-9.7a20 20 0 10-19.5-35zM236 96v151.7l-73.3 73.4a20 20 0 0028.2 28.2l79.2-79.2A20 20 0 00276 256V96a20 20 0 10-40 0z" />
			<path d="M492 43c-11 0-20 9-20 20v55.5A256.6 256.6 0 00256 0 254.3 254.3 0 0075 75C26.6 123.3 0 187.6 0 256s26.6 132.7 75 181a254.3 254.3 0 00181 75h1c7.2 0 14.5-.3 21.6-.9a20 20 0 00-3.3-39.9c-6 .5-12.2.8-18.3.8h-1c-119.1 0-216-96.9-216-216S136.9 40 256 40c76.8 0 147.4 41 186 106h-55a20 20 0 100 40h61a63.6 63.6 0 0035-10.5 64 64 0 0029-53.5V63c0-11-9-20-20-20z" />
		</svg>
	)
}

export default Time
