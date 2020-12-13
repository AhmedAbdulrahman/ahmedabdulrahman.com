import styled from '@emotion/styled'
import mediaqueries from '@styles/media'

const Article = styled.article`
	width: 100%;
	margin-left: auto;
	margin-right: auto;

	${mediaqueries.tablet_up`
  padding: 4rem 0;
  max-width: 55rem;
  `}

	${mediaqueries.desktop_up`
  padding: 4rem 0;
  max-width: 75rem;
  `}
`

export default Article
