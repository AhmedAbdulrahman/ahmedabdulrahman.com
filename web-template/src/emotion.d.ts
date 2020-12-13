import '@emotion/react'

declare module '@emotion/react' {
	export interface Theme {
		colors: {
			primary: string
			secondary: string
			grey: string
			title: string
			background: string
			accent: string
			articleText: string
			textOffset: string
			card: string
			errorBackground: string
			inputBackground: string
			track: string
			error: string
			horizontalRule: string
			gradient: string
			hover: string
			border: string
			progress: string
			outline: string
		}
		fonts: {
			title: string
			body: string
			suisseintl: string
			monospace: string
		}
		fontsWeight: {
			regular: string
			bold: string
		}
		breakpoints: Array<[string, number]>
		colorModeTransition: string
	}
}
