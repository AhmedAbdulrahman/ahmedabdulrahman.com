import * as React from 'react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'

interface CSSFadeInProps {
	as?: React.ElementType
}

const CSSFadeIn: React.FC<CSSFadeInProps> = ({ as, children }) => {
	return <Transition as={as}>{children}</Transition>
}

export default CSSFadeIn

const fadein = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`

const Transition = styled.div`
	opacity: 0;
	animation: ${fadein} 0.3s linear forwards;
`
