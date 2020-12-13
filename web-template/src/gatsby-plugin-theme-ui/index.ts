import { Theme, ContextValue, useThemeUI } from 'theme-ui'
import merge from 'lodash/merge'
import colors from './colors'
import tags from './tags'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const makeTheme = <T extends Theme>(t: T) => t

export type ExactTheme = typeof theme

interface ExactContextValue extends Omit<ContextValue, 'theme'> {
	theme: ExactTheme
}

export const useTheme = (useThemeUI as unknown) as () => ExactContextValue

const breakpoints = [
	[`phone_small`, 320],
	[`phone`, 376],
	[`phablet`, 540],
	[`tablet`, 768],
	[`desktop`, 1070],
	[`desktop_medium`, 1280],
	[`desktop_large`, 1440],
]

const fonts = {
	title: `'Title', Georgia, Serif`,
	body: `'Text','Libre Baskerville', Georgia, Serif`,
	suisseintl: `SuisseIntl`,
	monospace: `"Operator Mono", Consolas, Menlo, Monaco, source-code-pro, Courier New, monospace`,
}

const fontsWeight = {
	regular: `300`,
	bold: `600`,
}

const colorModeTransition = `background 0.25s var(--ease-in-out-quad), color 0.25s var(--ease-in-out-quad)`

const theme = makeTheme(
	merge({
		initialColorMode: `light`,
		useColorSchemeMediaQuery: true,
		useCustomProperties: true,
		colorModeTransition,
		colors,
		fonts,
		fontsWeight,
		breakpoints,
		tags,
	})
)

export default theme
