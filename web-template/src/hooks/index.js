/* eslint-disable no-undef */
import * as React from 'react'
// We are excluding this from loading at build time in gatsby-node.js
import LocomotiveScroll from 'locomotive-scroll'
import { scrollOptions } from '../theme'

export const getMobileDetect = (userAgent) => {
	const isAndroid = () => Boolean(userAgent.match(/Android/i))
	const isIos = () => Boolean(userAgent.match(/iPhone|iPod/i))
	const isTablet = () => Boolean(userAgent.match(/Tablet|iPad/i))
	const isOpera = () => Boolean(userAgent.match(/Opera Mini/i))
	const isWindows = () => Boolean(userAgent.match(/IEMobile/i))
	const isSSR = () => Boolean(userAgent.match(/SSR/i))

	const isMobile = () => Boolean(isAndroid() || isIos() || isOpera() || isWindows())
	const isDesktop = () => Boolean(!isMobile() && !isSSR())
	return {
		isMobile,
		isDesktop,
		isAndroid,
		isIos,
		isTablet,
		isSSR,
	}
}

export const useMobileDetect = () => {
	React.useEffect(() => {}, [])
	const userAgent = typeof navigator === `undefined` ? `SSR` : navigator.userAgent
	return getMobileDetect(userAgent)
}

export const Scroll = (callbacks) => {
	React.useEffect(() => {
		const locomotiveScroll = new LocomotiveScroll({
			el: window.document.querySelector(scrollOptions.container),
			...scrollOptions.options,
		})
		locomotiveScroll.update()

		// Exposing to the global scope for ease of use.
		window.scroll = locomotiveScroll

		locomotiveScroll.on(`scroll`, (func) => {
			// Update `data-direction` with scroll direction.
			document.documentElement.setAttribute(`data-direction`, func.direction)
		})

		return () => {
			if (locomotiveScroll) locomotiveScroll.destroy()
		}
	}, [callbacks])

	return null
}

export const useMousePosition = () => {
	const [mousePosition, setMousePosition] = React.useState({ x: null, y: null })
	function handleMouseMove(e) {
		setMousePosition({ x: e.pageX, y: e.pageY })
	}
	React.useEffect(() => {
		window.addEventListener('mousemove', handleMouseMove)
		return () => window.removeEventListener('mousemove', handleMouseMove)
	}, [])
	return mousePosition
}

export const useWindowSize = () => {
	const getSize = () => ({
		width: window.innerWidth,
		height: window.innerHeight,
	})

	const [windowSize, setWindowSize] = React.useState(getSize)

	React.useEffect(() => {
		const handleResize = () => {
			setWindowSize(getSize())
		}

		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	return windowSize
}

/**
 * useEventListener
 * Hook for handling EventListeners
 * @return {object} width, height
 */
export function useEventListener(eventName, handler) {
	// Create a ref that stores handler
	const savedHandler = React.useRef()

	// Update ref.current value if handler changes.
	React.useEffect(() => {
		savedHandler.current = handler
	}, [handler])

	React.useEffect(
		() => {
			// Make sure element supports addEventListener
			const isSupported = typeof window !== 'undefined' && window.addEventListener
			if (!isSupported) return

			// Create event listener that calls handler function stored in ref
			const eventListener = (event) => savedHandler.current(event)

			// Add event listener
			window.addEventListener(eventName, eventListener)

			// Remove event listener on cleanup
			return () => window.removeEventListener(eventName, eventListener)
		},
		[eventName] // Re-run if eventName changes
	)
}
