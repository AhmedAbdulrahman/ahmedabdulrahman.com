import * as React from 'react'
import { useTheme } from '@theme'
import { Icon } from '@types'

const Location: Icon = () => {
	const { theme } = useTheme()
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="-1 0 512 512">
			<path
				fill={theme.colors.primary}
				d="M119.8 204.6a85 85 0 0084.8 84.8 20 20 0 110 40 124.9 124.9 0 010-249.5c68.8 0 124.8 56 124.8 124.7a20 20 0 01-40 0 85 85 0 00-169.6 0zm15.6 176.6C84.2 325 40 276.6 40 204.4 40 113.7 114 40 204.6 40c90.7 0 164.6 73.8 164.7 164.5a20 20 0 1040 0c-.2-54.6-21.5-106-60.1-144.6A203.3 203.3 0 00204.6 0C150 0 98.6 21.3 60 59.8c-38.6 38.6-60 90-60 144.6 0 39.8 11 77.1 33.8 114.1 19.6 32 45.1 60 72.2 89.6 26.5 29 53.9 59 75.7 93.6a20 20 0 1033.8-21.3c-23.8-37.6-52.4-69-80-99.2zm370.4 9.5a19.9 19.9 0 01-28.2 1.3l-2.5-2.3v66c0 31-25.2 56.3-56.2 56.3H306.7c-31 0-56.2-25.2-56.2-56.2v-65.2L249 392a20 20 0 11-27-29.5l103.1-94.2a56.3 56.3 0 0176.4 0l66 60.4a20 20 0 012 1.9l35 32a20 20 0 011.3 28.1zM435 353.2l-60.6-55.4c-6.4-5.9-16-5.9-22.5 0l-61.6 56.3v101.7c0 9 7.3 16.3 16.3 16.3H419c9 0 16.2-7.3 16.2-16.3zm0 0"
			/>
		</svg>
	)
}

export default Location
