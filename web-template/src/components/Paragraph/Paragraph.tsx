import styled from '@emotion/styled'
import mediaqueries from '@styles/media'

const Paragraph = styled.p<{ fullWidth?: boolean }>`
	font-family: ${(p) => p.theme.fonts.monospace};
	font-size: 1.875rem;
	color: ${(p) => p.theme.colors.articleText};
	line-height: 1.65;
	transition: ${(p) => p.theme.colorModeTransition};
	margin: 0 0 35px;

	b {
		font-weight: 800;
	}

	${mediaqueries.phablet`
  font-size: 1.575rem;
  `}
`

export default Paragraph
