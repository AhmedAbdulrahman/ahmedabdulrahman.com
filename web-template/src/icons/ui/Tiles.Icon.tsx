import * as React from 'react'
import { Icon } from '@types'

const TilesIcon: Icon = ({ fill }) => (
	<svg width="16" height="16" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path fill={fill} d="M0 0h12v12H0zM14 0h12v12H14zM0 14h12v12H0zM14 14h12v12H14z" />
	</svg>
)

export default TilesIcon
