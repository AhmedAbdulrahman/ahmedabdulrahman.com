import React, { useState, useEffect, useCallback, useRef } from 'react'
import { useEventListener } from '@hooks'
import { IsDevice } from '@utils'
import { Cursor } from '@types'
/**
 * @param {string} color - rgb color value
 * @param {number} outerAlpha - level of alpha transparency for color
 * @param {number} innerSize - inner cursor size in px
 * @param {number} innerScale - inner cursor scale amount
 * @param {number} outerSize - outer cursor size in px
 * @param {number} outerScale - outer cursor scale amount
 *
 */
const CursorCore: React.FC<Cursor> = ({
	color = '220, 90, 90',
	outerAlpha = 0.3,
	innerSize = 8,
	innerScale = 0.7,
	outerSize = 8,
	outerScale = 5,
}): JSX.Element => {
	const cursorOuterRef = useRef<HTMLDivElement | null>(null)
	const cursorInnerRef = useRef<HTMLDivElement | null>(null)
	const requestRef = useRef<number>(0)
	const previousTimeRef = useRef<number>(0)
	const [coords, setCoords] = useState({ x: 0, y: 0 })
	const [isVisible, setIsVisible] = useState(false)
	const [isActive, setIsActive] = useState(false)
	const [isActiveClickable, setIsActiveClickable] = useState(false)
	const endX = useRef<number>(0)
	const endY = useRef<number>(0)

	// Primary Mouse Move event
	const onMouseMove = useCallback(({ clientX, clientY }) => {
		setCoords({ x: clientX, y: clientY })
		if (cursorInnerRef.current !== null) {
			cursorInnerRef.current.style.top = `${clientY}px`
			cursorInnerRef.current.style.left = `${clientX}px`
		}
		endX.current = clientX
		endY.current = clientY
	}, [])

	// Outer Cursor Animation Delay
	const animateOuterCursor = useCallback(
		(time) => {
			if (previousTimeRef.current !== undefined) {
				coords.x += (endX.current - coords.x) / 8
				coords.y += (endY.current - coords.y) / 8

				if (cursorOuterRef.current !== null) {
					cursorOuterRef.current.style.top = `${coords.y}px`
					cursorOuterRef.current.style.left = `${coords.x}px`
				}
			}
			previousTimeRef.current = time
			requestRef.current = requestAnimationFrame(animateOuterCursor)
		},
		[requestRef] // eslint-disable-line
	)

	// RAF for animateOuterCursor
	useEffect(() => {
		requestRef.current = requestAnimationFrame(animateOuterCursor)

		return () => {
			if (requestRef) {
				cancelAnimationFrame(requestRef.current)
			}
		}
	}, [animateOuterCursor])

	// Mouse Events State updates
	const onMouseDown = useCallback(() => {
		setIsActive(true)
	}, [])

	const onMouseUp = useCallback(() => {
		setIsActive(false)
	}, [])

	const onMouseEnterViewport = useCallback(() => {
		setIsVisible(true)
	}, [])

	const onMouseLeaveViewport = useCallback(() => {
		setIsVisible(false)
	}, [])

	useEventListener('mousemove', onMouseMove)
	useEventListener('mousedown', onMouseDown)
	useEventListener('mouseup', onMouseUp)
	useEventListener('mouseover', onMouseEnterViewport)
	useEventListener('mouseout', onMouseLeaveViewport)

	// Cursors Hover/Active State
	useEffect(() => {
		const cursorInner = cursorInnerRef.current
		const cursorOuter = cursorOuterRef.current
		if (isActive) {
			cursorInner && (cursorInner.style.transform = `translateZ(0) scale(${innerScale})`)
			cursorOuter && (cursorOuter.style.transform = `translateZ(0) scale(${outerScale})`)
		} else {
			cursorInner && (cursorInner.style.transform = 'translateZ(0) scale(1)')
			cursorOuter && (cursorOuter.style.transform = 'translateZ(0) scale(1)')
		}
	}, [innerScale, outerScale, isActive])

	// Cursors Click States
	useEffect(() => {
		const cursorInner = cursorInnerRef.current
		const cursorOuter = cursorOuterRef.current

		if (isActiveClickable) {
			cursorInner && (cursorInner.style.transform = `translateZ(0) scale(${innerScale * 1.2})`)
			cursorOuter && (cursorOuter.style.transform = `translateZ(0) scale(${outerScale * 1.4})`)
		}
	}, [innerScale, outerScale, isActiveClickable])

	// Cursor Visibility State
	useEffect(() => {
		const cursorInner = cursorInnerRef.current
		const cursorOuter = cursorOuterRef.current

		if (isVisible) {
			cursorInner && (cursorInner.style.opacity = 1)
			cursorOuter && (cursorOuter.style.opacity = 1)
		} else {
			cursorInner && (cursorInner.style.opacity = 0)
			cursorOuter && (cursorOuter.style.opacity = 0)
		}
	}, [isVisible])

	// Target all possible clickables
	useEffect(() => {
		const clickables = window.document.querySelectorAll(
			'a, input[type="submit"], input[type="image"], label[for], select, button, .link'
		)
		clickables.forEach((el) => {
			el.style.cursor = 'none'

			el.addEventListener('mouseover', () => {
				setIsActive(true)
			})
			el.addEventListener('click', () => {
				setIsActive(true)
				setIsActiveClickable(false)
			})
			el.addEventListener('mousedown', () => {
				setIsActiveClickable(true)
			})
			el.addEventListener('mouseup', () => {
				setIsActive(true)
			})
			el.addEventListener('mouseout', () => {
				setIsActive(false)
				setIsActiveClickable(false)
			})
		})

		return () => {
			clickables.forEach((el) => {
				el.removeEventListener('mouseover', () => {
					setIsActive(true)
				})
				el.removeEventListener('click', () => {
					setIsActive(true)
					setIsActiveClickable(false)
				})
				el.removeEventListener('mousedown', () => {
					setIsActiveClickable(true)
				})
				el.removeEventListener('mouseup', () => {
					setIsActive(true)
				})
				el.removeEventListener('mouseout', () => {
					setIsActive(false)
					setIsActiveClickable(false)
				})
			})
		}
	}, [isActive])

	// Cursor Styles
	const cursorInner = {
		zIndex: 999,
		display: 'block',
		position: 'fixed',
		borderRadius: '50%',
		width: innerSize,
		height: innerSize,
		pointerEvents: 'none',
		backgroundColor: `rgba(${color}, 1)`,
		transition: 'opacity 0.15s ease-in-out, transform 0.25s ease-in-out',
		backfaceVisibility: 'hidden',
		willChange: 'transform',
		mixBlendMode: 'difference',
	}

	const cursorOuter = {
		zIndex: 999,
		display: 'block',
		position: 'fixed',
		borderRadius: '50%',
		pointerEvents: 'none',
		width: outerSize,
		height: outerSize,
		backgroundColor: `rgba(${color}, ${outerAlpha})`,
		transition: 'opacity 0.15s ease-in-out, transform 0.15s ease-in-out',
		backfaceVisibility: 'hidden',
		willChange: 'transform',
		mixBlendMode: 'difference',
	}

	// Hide / Show global cursor
	if (typeof window !== 'undefined') {
		window.document.body.style.cursor = 'none'
	}

	return (
		<>
			<div ref={cursorOuterRef} style={cursorOuter} />
			<div ref={cursorInnerRef} style={cursorInner} />
		</>
	)
}

/**
 * AnimatedCursor
 * Calls and passes props to CursorCore if not a touch/mobile device.
 */
const AnimatedCursor: React.FC<Cursor> = ({
	color = '220, 90, 90',
	outerAlpha = 0.3,
	innerSize = 8,
	outerSize = 8,
	outerScale = 5,
	innerScale = 0.7,
}) => {
	if (typeof navigator !== 'undefined' && IsDevice?.any()) {
		return <></>
	}
	return (
		<CursorCore
			color={color}
			outerAlpha={outerAlpha}
			innerSize={innerSize}
			innerScale={innerScale}
			outerSize={outerSize}
			outerScale={outerScale}
		/>
	)
}

export default AnimatedCursor
