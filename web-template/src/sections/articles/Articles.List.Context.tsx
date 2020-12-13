/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useState, ReactNode } from 'react'

type ContextProps = {
	gridLayout: string
	hasSetGridLayout: boolean
	setGridLayout: (tile: string) => void
	getGridLayout: () => void
}

export const GridLayoutContext = createContext<ContextProps>({
	gridLayout: 'tiles',
	hasSetGridLayout: false,
	setGridLayout: () => {},
	getGridLayout: () => {},
})

const GridLayoutProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const initialLayout = 'tiles'

	const [gridLayout, setGridLayout] = useState<string>(initialLayout)
	const [hasSetGridLayout, setHasSetGridLayout] = useState<boolean>(false)

	const setGridLayoutAndSave = (tile: string): void => {
		localStorage.setItem('gridLayout', tile || initialLayout)
		setGridLayout(tile)
	}

	const getGridLayoutAndSave = (): void => {
		setGridLayout(localStorage.getItem('gridLayout') || initialLayout)
		setHasSetGridLayout(true)
	}

	return (
		<GridLayoutContext.Provider
			value={{
				gridLayout,
				hasSetGridLayout,
				setGridLayout: setGridLayoutAndSave,
				getGridLayout: getGridLayoutAndSave,
			}}
		>
			{children}
		</GridLayoutContext.Provider>
	)
}

export default GridLayoutProvider
