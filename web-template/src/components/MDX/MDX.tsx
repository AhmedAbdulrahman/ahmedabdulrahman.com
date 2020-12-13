import * as React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@mdx-js/react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { useColorMode } from 'theme-ui'
import Anchor from '@components/Anchor'
import Blockquote from '@components/Blockquote'
import Code from '@components/Code'
import Headings from '@components/Headings'
import HorizontalRule from '@components/HorizontalRule'
import Lists from '@components/Lists'
import Paragraph from '@components/Paragraph'
import Tables from '@components/Tables'
import { ImageZoom } from '@components/Image'
import Figcaption from '@components/Figcaption'
import mediaqueries from '@styles/media'
import { toKebabCase } from '@utils'

const components = {
	img: ImageZoom,
	a: Anchor,
	blockquote: Blockquote,
	h1: Headings.h2, // h1 reserved article title
	h2: Headings.h2,
	h3: Headings.h3,
	h4: Headings.h4,
	h5: Headings.h5,
	h6: Headings.h6,
	hr: HorizontalRule,
	ul: Lists.ul,
	ol: Lists.ol,
	p: Paragraph,
	code: Code.Prism,
	pre: Code.Pre,
	table: Tables.Table,
	thead: Tables.Head,
	th: Tables.HeadCell,
	td: Tables.Cell,
	figcaption: Figcaption,
}

interface MDXProps {
	content: string
}

const MDX: React.FC<MDXProps> = ({ content, children, ...props }) => {
	const [colorMode] = useColorMode()

	return (
		<MDXProvider components={components}>
			<MDXBody isDark={colorMode === 'dark'}>
				<MDXRenderer isDark={colorMode === 'dark'} {...props}>
					{content}
				</MDXRenderer>
				{children}
			</MDXBody>
		</MDXProvider>
	)
}

export default MDX

const IMAGE_WIDTHS = {
	regular: '680px',
	large: '1004px',
	full: '100vw',
}

const HeadingsCSS = css`
	h1,
	h1 *,
	h2,
	h2 * {
		margin: 25px 0 18px;

		${mediaqueries.tablet`
      margin: 30px 0 18px;
    `};
	}

	h3,
	h3 * {
		margin: 20px 0 10px;
	}
`

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const PrismCSS = (p) => css`
	code[class*='css-'] {
		margin: 0 2px;
		padding: 2px 4px;
		font-family: ${p.theme.fonts.monospace};
		font-size: 1.575rem;
		line-height: 1.5;
		background-color: ${p.isDark ? '#29293e' : '#f3e1d8'};
		border: 1px solid ${p.isDark ? '#383a61' : '#f3d2c1'};
		border-radius: 0.25rem;
		white-space: normal;
	}

	.prism-code {
		overflow: auto;
		width: 100%;
		max-width: 864px;
		margin: 0 auto;
		padding: 32px;
		font-size: 15px;
		font-feature-settings: normal;
		margin: 15px auto 50px;
		border-radius: 5px;
		font-family: ${p.theme.fonts.monospace};
		background-color: ${p.isDark ? '#29293e' : '#2b2b35'};
		border: 1px solid ${p.isDark ? '#383a61' : '#2b2b35'};
		color: white;
		white-space: pre;
		word-spacing: normal;
		word-break: normal;
		word-wrap: normal;
		line-height: 1.5;
		${!p.isDark && 'box-shadow: 0 8px 16px rgb(43 43 53 / 0.5);'}
		.token-line {
			border-left: 3px solid transparent;
			background-color: ${p.isDark ? '#29293e' : '#2b2b35'};

			${Object.keys(p.theme.colors.prism)
				.map((key) => {
					return `.${toKebabCase(key)}{color:${p.theme.colors.prism[key]};}`
				})
				.reduce((curr, next) => curr + next, ``)};

			& > span {
			}
		}

		.token.tag,
		.token.operator,
		.token.keyword {
			color: #ffa7c4;
		}

		.token.attr-name {
			color: #bae67e;
			font-style: italic;
		}

		.token.string,
		.token.url {
			color: #bae67e;
		}

		.token.variable,
		.token.parameter {
			color: rgb(214, 222, 235);
		}

		.token.number {
			color: rgb(247, 140, 108);
		}

		.token.builtin,
		.token.char,
		.token.constant,
		.token.function {
			color: rgb(130, 170, 255);
		}

		.token.punctuation {
			color: rgb(199, 146, 234);
		}

		.token.doctype {
			color: rgb(199, 146, 234);
			font-style: 'italic';
		}

		.token.boolean {
			color: rgb(255, 88, 116);
		}

		.token.namespace {
			color: rgb(178, 204, 214);
		}

		.number-line {
			display: inline-block;
			width: 32px;
			user-select: none;
			opacity: 0.3;
			color: #dcd9e6;

			${mediaqueries.tablet`
        opacity: 0;
        width: 0;
      `};
		}

		.token-line.highlight-line {
			margin: 0 -32px;
			padding: 0 32px;
			background: ${p.theme.colors.prism.highlight};
			border-left: 3px solid ${p.theme.colors.prism.highlightBorder};

			${mediaqueries.tablet`
        margin: 0 -20px;
        padding: 0 20px;
      `};
		}

		.operator + .maybe-class-name {
			color: #ffcf74 !important;
		}

		// .token.plain {
		//   color: #ffa7c4;
		// }

		${mediaqueries.tablet`
      max-width: 526px;
      padding: 20px 20px;
    `};

		${mediaqueries.phablet`
      text-size-adjust: none;
      border-radius: 0;
      margin: 0 auto 25px;
      padding: 25px 20px;
      overflow: initial;
      width: unset;
      max-width: unset;
      float: left;
      min-width: 100%;
      overflow: initial;
      position: relative;
    `};
	}
`

const ImageCSS = css`
	.gatsby-resp-image-background-image {
		display: none !important;
	}

	img {
		display: inline-block;
		position: relative;
		max-width: 100%;
		height: auto;
		z-index: 0;
		margin: 15px auto 50px;
		border-radius: 5px;

		${mediaqueries.tablet`
      margin: 10px auto 45px;
    `};
	}

	div.Image__Small {
		display: inline-block;
		position: relative;
		max-width: 100%;
		height: auto;
		z-index: 0;
		margin: 15px auto 50px;
		border-radius: 5px;
		width: 100%;
		max-width: 680px;

		${mediaqueries.tablet`
      margin: 10px auto 45px;
    `};

		${mediaqueries.desktop`
      max-width: 507px;
    `}

		${mediaqueries.tablet`
      max-width: 486px;
      margin: 10px auto 25px;
    `};

		${mediaqueries.phablet`
      padding: 0 20px;
    `};
	}

	.Image__Container {
		text-align: center;
	}

	img.Image__With-Shadow {
		box-shadow: 0px 15px 60px rgba(0, 0, 0, 0.15);
	}

	div.Image__Medium {
		position: relative;
		margin: 15px auto 50px;
		width: 100%;
		max-width: ${IMAGE_WIDTHS.large};

		${mediaqueries.desktop_medium`
      left: -34px;
    `};

		${mediaqueries.desktop`
      left: -26px;
    `};

		${mediaqueries.tablet`
      border-radius: 0;
      left: 0;
      margin: 0 auto 25px;

      img {
        border-radius: 0;
      }
    `};
	}

	div.Image__Large {
		position: relative;
		left: -68px;
		width: ${IMAGE_WIDTHS.full};
		margin: 25px auto 60px;
		pointer-events: none;

		img {
			border-radius: 0;
		}

		${mediaqueries.desktop`
      left: -53px;
    `};

		${mediaqueries.tablet`
      left: 0;
      margin: 0 auto 25px;
    `};
	}
`

/**
 * MDXBody
 * Here we're applying "global" selectors to make sure we maintain an article
 * body type feel. We're also applying all the Prism selecotors and styles within
 * the MDXBody.
 */
const MDXBody = styled.div<{ isDark: boolean }>`
	position: relative;
	z-index: 10;
	display: flex;
	justify-content: center;
	flex-direction: column;

	${HeadingsCSS}
	${PrismCSS}
  ${ImageCSS}
`
