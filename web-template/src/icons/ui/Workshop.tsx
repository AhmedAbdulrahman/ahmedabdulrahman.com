import * as React from 'react'
import { useTheme } from '@theme'
import { Icon } from '@types'

const Workshop: Icon = () => {
	const { theme } = useTheme()
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 768">
			<g>
				<path
					fill={theme.colors.grey}
					d="M594 259c-7.6 15-15.7 29.5-23.8 44.1-4.4 7.8-18.3 39.9-21.9 41-3.8 1.4-27.5-12.5-34.3-15.2-12.1-4.9-23.6-9.5-36.2-12.5a135.9 135.9 0 00-43-4.6c-6.5.6-17 2.1-10.7-6.9a73.9 73.9 0 0115.5-17.4c4.6-3.4 11.3-9.8 16.7-12 5.6-2.5 14-2 20-1.8 6.6.1 37.9 9.9 39.6-.3 3.2 3 5 1.8 8.7 3.2 4.1 1.6 6.7 4.7 10.8 6.6 2.7 1.2 7.5 6 10.5 6 4 0 5-3.2 7.8-5.6 6.3-5.3 14.7-8.9 21.6-13.5 6-4.2 11.7-8.4 18.7-11.1zm-68.7-118c-.6 6.8 1.3 13.1 1.2 20.2 0 3-.1 6 .8 9 .8 2.7.3 7.4.7 10.2-7.8-2.4-22.3-6-30.3-2.7-7.6 3-8.6 17.2-8.8 24.1-.2 4.7 1.9 12 .3 16.4-.7 2.1-.7 2.8-.7 3-.1 0-.8 0-3 1.5-2 1.5-4.6 2.4-6.7 4.1-3.9 3.1-4.5 6.6-6.4 11.1a13.5 13.5 0 01-12.3 8c4.5-7.9 10.6-15.3 7-24.7-2.6-7.1 2-15.4 5.7-22.1 1.2-2.3 14.6-19.3 8.7-20.5-3.9-.8-12.7 17.3-14.4 20.5-4.7-3.2-6.9-7.2-3.2-12 2.8-3.7 6.2-6.8 8.9-10.6 4.4-6.2 8.7-13.7 14-19.2a57.9 57.9 0 0138.5-16.3zm-36.8 80.2zM649 130.4c5.8 5.7 13.3 10.3 19 16.2 5 5.2 11.6 14 14 20.8-12.1 2.4-32.3 9.5-37.1 22.3-18.9-17.4-26.2 14.3-29.9 27.5-11-4.7-8.8-20.6-8.7-30 .1-7.3 4.6-16-6-16.6a53 53 0 00-23 5.8c-9 3.8-18.5 9.5-25.7 16l-7.6-5.8c12.4-7 18.9-20.3 26.2-32.5 2.3-4 5.4-8.2 7-12.4 1.2-3 2-8.8 3.3-11.4 2-4 21.7-5.2 27-6.2 13.7-2.8 30.2-4.5 41.5 6.3z"
				/>
				<g fill={theme.colors.primary}>
					<path d="M645.8 220.8c5.1-.3 10.2.8 15.3.3l-13.3-11.5c-2 3.4-2 7.3-2 11.2zm-120.7-79.1a57.7 57.7 0 00-38.4 16.3c-4.8 5.1-8.8 12-13 17.7a87.7 87.7 0 01-8.7 11c-4.9 5-3.5 6 2 9.8 1.7-3.2 11-20.6 14.8-19.8 5.9 1.1-5.5 19.5-6.7 21.8-3.7 6.8-9.6 16.2-7 23.4 3.6 9.4-1.5 14.8-5.9 22.8 4.6.1 5-1.7 6.7-5.6 2-5.1 4.3-9.4 8.6-12.9 3.4-2.7 8.9-3.8 10.4-7.1 2-4 .8-12.1 1-16.6.2-6.9.2-23 7.8-26.1 7.9-3.2 22.1-.2 29.9 2.1-1-6-4-10-4-16.7 0-7 2-13.3 2.5-20.1zM423.9 253.9c7-2.2 13.4-4.5 20.5-6 7.5-1.5 8-3.3 12.1-9.7 3.2-4.8 7-8.6 6.1-14.5-.5-3.8-2.6-5.6-2-9.9.4-2.6 1.6-5.5 2.5-8 1.1-3 3.4-6.6-1.9-6.7-2.9-.1-3 1.4-5 4-3.6 4.7-7.8 9-11.7 13.6-6.7 8-13.8 16.4-21.3 23.7-8.2 8-15.3 17.8-20.6 28-1 2-7 13.2-4.4 15.4 2.3 2 15.3-2.7 17.7-3.2 10.3-2.4 22-3.3 31.6-7.6 5-2.2 15.8-4.8 19.7-8.2 3.7-3.2 3.5-10.9 1.4-15.3-5.9 3.6-48.5 17.4-44.7 4.4zm128.2-63c6.9-6.2 15-11.2 23.5-15 7.6-3.2 17-6.9 25.4-6.3 10.6.7 6.2 9.2 6.1 16.4 0 9.6-4.2 23.4 7.2 28.3 3.8-13.2 11.6-44.6 30.5-27.2 4.8-12.8 22-17 34-19.4-2.1-6.5-8.8-12.3-13.4-17.1-5.8-6-10.3-13.2-16.1-19.1-11.4-11.7-32.2-8-46.6-5-4.9 1-18.9 2.2-21.2 5.7-1.5 2.2-.7 7.7-1.7 10.4-1.5 3.7-4.1 7.2-6.2 10.7-7.5 12.6-15 25.3-28 32.6l6.5 5zm42 68c-6.8 2.6-11.8 7-17.9 10.7-7.3 4.4-15.8 8.6-22.4 14-2.4 2-3.7 5.5-7 5.8-2.9.2-7.3-3.2-9.8-4.3-4.3-2-8.4-5-12.7-6.7-3.5-1.5-5.1-1.2-8.2-4-1.7 10.2-32.9.7-39.4.5-6-.1-14.4.6-20 3-5.4 2.4-9.6 7.5-14.2 11a74.6 74.6 0 00-17 16.1c-6.3 9 3.3 6.5 9.7 6 14.6-1.3 28.8 2.2 43 5.6 12.5 3 25 6.6 37 11.4 6.8 2.8 14 5.3 20.3 8.9 3.4 1.8 8.8 6.4 12.7 5.1 3.5-1.2 7-11.3 9.2-15.4 4.2-7.9 8.5-15.6 12.9-23.4 8-14.7 16.1-29.3 23.7-44.3zm-83.6 194.7c4.2-2.4 11-1.7 15.6-2.7 5.3-1.2 10.5-3 15.5-5 5-1.9 9.8-4 14.4-6.4 2.1-1 5-2.2 7-3.7 1.5-1.3 2-3.6 3.5-4.7 3.8-3 4.9-1.1 5.4-6.9.5-6.2-3-9.7-7.3-14.3-3.9-4.2-8.9-7.8-13.8-10.7-2.1-1.3-4.4-2.8-6.6-4-3.4-1.9-7.8-5-9.6-1 3.7 1 4.5 5.6 1.2 7.3-1.8 1-4.6-.4-6.6.5-3.1 1.5-6.2 5.7-8.9 8a44.3 44.3 0 01-28.8 10.8 370.4 370.4 0 01-73-5c-6.2-1-12.2 0-18.4-.2-6-.2-12.2-1.5-18.1-2.5-11.3-2-23.3-3.6-34.4-6.5-13.5-3.4-27-7.9-39.7-13.7-12.2-5.6-25.9-14.8-39.5-15.5 5.8 5.7 14.5 8 21.5 11.7 5.7 3 14.7 5 18.3 10 2.4 3.4 3.5 9.4 5.3 13.3 2 4.2 3.8 8.6 5.6 12.9 1.9 4.4 3.8 8.7 5.2 13.2 1 2.8 1.4 8.6 3.5 10.5 3.5 3 15 4.4 19.8 5.4 8.7 1.9 18.6 1.6 27.5 1.8 3.7 0 7.4.5 11 .6 4.8 0 4.4-.8 4.3-5 0-2.6 0-7.3 3.4-5.2 2.4 1.4.8 7.8.3 10.1 19.7 2 40.1 3 59.7 2.3 19.2-.6 37.7-3.1 56.7-5.4zm88.7-45c3.4-24.9 7.6-50.2 12.4-74.7a1160 1160 0 0117-74.1l-12.9-3c-.1 5.1-1.9 9.6-2.6 14.8-1 7.2-3 14.1-4.2 21.3-2.3 13.5-6.5 26.8-10.1 40-3.8 13.5-5 27.4-8.5 40.9-2.8 11.2-4.3 23.4-5.8 35-3.9 27.7-9.4 55.6-13.5 83.5-4 26-4.3 52.7-4.1 79 .1 16.1 2.6 32.2 2.4 48.3 0 4 .3 8 .6 11.9.1 2.8-1.4 10.6-.1 13 .8 1.4 4.3 2.8 5.5 4.9 2 3.2 2.3 7.1 5.5 9.6 2.5-10.2 1.3-23.7.7-34.1-.5-10 .6-20.5.8-30.7.4-20 1.4-39.7 2.4-59.7 1.2-22 4.4-44.4 7.5-66.2 2.8-19.8 4.7-40 7-59.7zm-92.7-312l-4.2-.3c.2 2.9-.4 7.6 1.7 9.1 1.5 1.1 4.6.8 6.5 1.1a37.5 37.5 0 0019.4 0c2.3-.8.8-2.1 4-1.6 4 .7 2.6 1.3 3.7 3.8.9 1.9 1.3 5 2.3 7.3 1.4 3 4 8.5 2.9 12-1.1 3.4-5.3 4.5-7 8.3-1.4 3-1 7-1.8 10.3-.9 4.2-2 8.4-2.5 12.7-.7 5.4-.5 11.7 6.3 12.6a16 16 0 0014.8-5.8c8-8.6 17-20.8 21.8-31.7.5-1.3 1.9-3.4 1.7-4.8-.4-2.7-.6 0-1.4-1.8-.8-1.8-2.1-3.4-2.9-5.4-2.7-7.2-4.6-14.6-5.7-22.2a61 61 0 01-.5-10.2c0-1.2.7-4.8.3-5.6-.5-.8-2.7-1.2-3.4-2-1.3-1.5-3.5-5.7-5-6.8-1.7-1.4-5.7-.3-6.4-3-1.1-4.5 26-11.7 13.3-17.6-9.4-4.3-24 17.8-27.3.4-.6-3 .5-7.1-.8-10-1.5-3-5.5-4.1-8.2-5.6a238 238 0 01-10.7-6c-2.3-1.4-5.7-5.2-8.3-5.5 1 5.1-.9 10.2-1 15.4 5.6-1.5 9.3-1.6 14.7 1 2.6 1.3 12.3 8.4 7.4 11.9-4-2.4-8.3-4.4-12.7-5.8-1.7-.6-4-1.3-5.8-1.3-4.3-.1-3.7.3-5.3 3.6-1.6 3.1-1.2 11.3-4.7 13.3s-.8-.8-3.8-.2c-1.7.4-3.6 1.7-5.2 2.4 2.2 2.4 6.5 4.5 8 7.1 2 3.8 1.4 11.7 1.7 15.9 2.7-1 5.6-1 8.4-1.8 2.6-.7 6.2-3.6 6.5.7.3 4.9-7.4 6.2-10.8 6.2zm35.7 128.2c.2-4.2.4-8.4.9-12.6.3-2.8 3-11 1.5-13.4-1.7-2.7-7.2-2.9-9.8-3.5-5.1-1.3-10-2.3-15.1-3-4.8-.8-9.3-1-14-1.2-5.2-.3-6.5-1.6-7.7 4.1-.9 4.5-2 9.2-2.3 13.8-.1 4.4 1.2 8.1-3.1 11 9.4 0 21.7-8.3 30.3-.8 12.3 10.7-9.1 13.8-14.7 16.2 4.7 2.2 11.6 4 13.8 9.3 2.5 5.8-1 8.3-6.6 8.8.5 2.2 2.5 3.7 3.1 6.4.9 4-2 2.6 1.6 5.7 4.8 4 14.5 6.8 20.2 9.3a82 82 0 004.2 1.7c2.1 2 3.7 1.6 4.8-1 3-2 5.6-6.1 8.2-8.6 5.9-5.4 12.3-10.2 19.3-14-3-1.3-6.4 1.4-9.1.1-2.3-1-1.4-3-2.8-4.4.6-2 0-2.6-1.7-2a4 4 0 01-2.3-.5c-1.4-1.7-2-2.3-2.1-5-.1-2.8 1.5-3.8 2.2-6.1 2-1.4 2-2.8-.2-4.1-.9-1.5-1.3-3-1.4-4.7-.4-6.3 5.3-8.8 9.7-12.1-7.9-1-7.6-10-2.2-14 5.7-4.2 17.5-2.5 24.3-1.6 1.4.2 5.2 2 6.6.9 1-.8.3-6.8.3-7.8.1-2.4.7-5.3.3-7.7-.8-5 1-2.5-2.7-2.6-8.6-.3-19.5 7.1-27 10.7-8.5 4-14 4.5-14 14.4-.1 9.2-2.7 18.5-3.9 27.6-.5 4-.8 24.8-8.1 17.1-2.9-3-1-7.5-.8-11.2.3-5 0-10.1.3-15.2zm-472.4 311c4.1.7 11-1.7 15.5-2 8-.4 16.2-1.2 24-2.9 6.1-1.3 13-2.4 16.4-8.3 3-5.3 4-12 5.6-17.7.8-3 3-7.5 3-10.7 0-4-.6-3.3-4.9-5.5-5.4-2.9-10.7-6.9-16.6-8.5l-5.3-1c-2.3-1.3-3.6-.7-3.9 2-2.2 2.3-3.6 6.7-5.4 9.5a43.7 43.7 0 01-16 14.2c-12 6.5-23.2 11.6-36 15.9-7.1 2.3-13.7 5.6-20.6 8.2-5.5 2.1-13.2 2.8-17.4 7.4-4.8 5.2 2.6 7.1 6.7 10.7 3.3 2.9 3.4 3.5 8 2.1 3.4-1 6.4-3 9.7-4.4 11.3-4.6 25-7.7 37.2-9zm257.4 82.9l-12.6-2.7c4.1 7.7 12.8 19 6.6 27.9-2.3 3.3-6.2 4.2-9.7 6-4.2 2-8 4.6-12 7-16.3 10.1-33 20.3-50.1 29 5.4 1.7 13.6 2.9 19.2 1.4 6.5-1.8 12.4-5.9 19-7.6 12-3.2 24.5-6 36.6-7.5 9.9-1.4 34.6 1.6 33.4-13.2-1.1-14.1-9.6-27.6-12-41.5-6.2 1.3-12.1 1-18.4 1.2zm250.2-225.8c4.8-23.5 7.7-47.4 13.3-70.7 2.9-11.7 4.8-23.5 7.6-35 1.3-5.5 2.2-11 3.5-16.4 1.2-5.4 4-10.5 4.6-16.1-4.6 1-5.6 11.6-7 15.5-2.6 7.2-5.4 14.2-8.6 21.1a589 589 0 01-16.6 32.3c-6.2 11.2-12.7 22-20.4 32.3-2.5 3.4-6 6-7.6 9.7-2.6 5.9-3.7 12.8-6.1 18.9 1.7.8 6.2 1 8.3 1.5a44.5 44.5 0 0127.2 16.5c1.1-3 1.4-6.4 1.8-9.6zM391.4 572c0-22.7-.3-45.5 0-68 .1-6.2.6-12.9 1.5-19 .6-4 4-12.2 1.7-14-1.8-1.7-11.7-.6-14.2-.7-4.7-.1-9.4-.3-14.1-.7 0 8.4 3.3 18 4.8 26.2 1.4 7.8 2.6 15.5 3.8 23.3 2.5 16.8 3.2 33.9 6 50.8 2.4 15.3 5.7 30.5 7.6 45.8 1 8.4 3 16.3 4.5 24.7.8 4.4 3.8 22.4 7.6 24.2.8-6.5-2.5-14.3-3-20.8-.7-6.8-1.1-13.6-2.2-20.4-1.3-8-2-16-2.4-24.2-.3-4.9-.4-9.8-.9-14.7-.3-3.6-1.6-9-.6-12.5zm118-302.5c0-2.5-6.3-2.4-7.5-5.2-2.4-5.8 3.1-4.7 6.5-5.3-1.2-3.2-23.8-2-18.5-10.7 3.6-6 17.4 3.2 21.1-2.5 2.5-3.7-4.1-4.2-6.8-4.6-3.9-.6-13.2 1.2-12.9-3.9.4-6.4 18.5-10.8 23.5-12.7-.5-4.4-22.3 1.8-25.4 3.6a27 27 0 00-13.6 19.4c-1.2 9.3 3.5 16.7 12.9 19 3.9 1 6.8 1 10.4 2.5 2.3 1 10 3.3 11.6 1-.4-.3-.9-.4-1.4-.6zm127.4-58.3c.4-4 3.8-11.5-.1-14.1-5.5-3.7-7.7 2.4-9 6-1.4 4.5-7.8 15.3-2.2 18.1 1.3.6 7.4-.1 8.4-.5 3 .8 4-.4 3-3.4v-6zm-132.4 323c-.4-11 4.5-24 7.3-34.8 3.1-12.1 4.8-24.5 8.1-36.5-3.7.5-7.4.8-11 1.6-5 1-5.2.8-4.8 5.7.5 7.4-.2 14.6-.5 22-.8 14.7 1 29.6-.2 44.3 1.1.3 1.5-.5 1-2.3zm138.2-286.5c12 1.9 23.5 5.7 34.5 10.8 6 2.8 12.6 5.8 19.3 7 7.5 1.2 15.4.6 23 1.1 2.8.2 9.8 1.5 12.5-.1 2.5-1.6 2.3-4.2 2.5-7.4.3-8.1-3.4-16.1-6.7-23.4-2.9-6.3-5-11-9.4-16.5-5.7-6.9-10.6-14.4-16-21.6l-12-16.3c-3-3.9-2.8-5.2-7.2-4.8-4.4.5-8.7 3-12.8 4.4-6 2-13.4 3.1-19 6.3-3.5 2.1-3.6 2.5-3.6 6.1 0 3.4 1.1 7.5 3.2 10.2C655 209 662 212 668 214.7c3.5 1.6 6.5 3.9 9.5 6 3.4 2.4 10 3.8 12.6 6.5 7.4 7.8-6 6.3-9.8 6-8.1-.5-16.2-.4-24.4-.4-9 0-17.8-.4-26.6-.1-5.1.1-11-2.5-14.4-6.8-1.6-2.2-2.2-4.1-4.3-6.3-2.8-3-5.2-6-8.6-8.1a34.1 34.1 0 00-22-4.4c2.3.4 13.3 4.1 8.5 8.8-.6.6-7.8 1-9.3 1.7-2.8 1.3-6.3 3.2-8 5.9 4.8-.8 22.5-1.8 13.5 7.4-2.2 2.2-8.6 4.5-3.2 6.8 1.3.6 3.7-.2 5.3.3 2.4.7 4.4 2.7 6.6 3.8 6.3 3 15 4.8 21.6 4.1 9.1-.9 18.6.7 27.6 2zM401 523.3c.4 13.1-.1 26.3.2 39.5.3 14 2 27.9 3 41.8.7 12.5 2.4 24.8 3.8 37.2.8 7.2 1.7 14 2.9 21.2 1.1 6.6 1.3 12.5-6.7 14.3-15.2 3.4-17.5-18.5-20.5-27.7a278.1 278.1 0 01-9.3-42.5c-4-26.5-9.5-52.7-11.6-79.5-1.3-16.5-3.1-32.8-4.2-49.3-.2-3.2.6-8.2-2.2-9.7-1.7-.8-6.4-.8-8.6-1.5-6-1.7-11.5-4.3-17.4-7 4.2 21.8 5.6 43.4 8.7 65.3 1.6 11.6 4.8 23.7 7.5 35.1 2.9 11.9 3.5 24.6 6.8 36.2 1.4 5.2 2.7 7.2.6 12.5-2.6 6.4-1 8 2.3 14.3a75.2 75.2 0 019.5 38.5c-.9 10.7-9 16.3-19 19.2-12.5 3.6-25.7 3.2-38.3 7.3-11 3.6-22.2 6.2-32.8 11-4.3 1.9-8.4 4.1-13.2 4.5-6.6.4-11-3.4-17.2-4.2-3.9-.5-9.5 1.4-11.8-2.7-1.7-3.2.3-10.2 2.5-12.8 6.2-7.3 18.7-13.6 27.1-18 9.7-4.9 19-11 28-17.4 5.5-4 11-7.6 16.5-11.5 3.6-2.6 5-2.6 4.6-6.7-.3-3.2-1.8-6.4-2-9.7-.2-2.6.7-6-.5-7.7-1-1.2-4.2-2.1-5.6-3-4.7-3.4-5.8-7.6-8-12.8-5-11.7-10.6-23.1-15.4-35-10.2-25.3-16.5-52-25-77.9a591.3 591.3 0 01-21.2-81.7c-6.4 2-12.4 10.6-17.5 14.8-6.9 5.8-13.9 11.3-20.6 17.3-11.1 9.6-22.3 19-31.4 30.7-4.4 5.6-8 11.6-12 17.5-2.3 3.4-4.5 7.2-7 10.4-.4.5-.4 1.6-.8 2-1 1-2.8-.3-3.4.4-3.7 3.9-3.7 15-4.8 20.2-1.7 7.2-3.5 15.4-9 20.3-8.7 7.6-24.5 8.8-35.4 9.2-14 .5-27.6 4.4-40.9 8.6-6.2 2-12.2 4.2-18.4 6.1-3.6 1-7.7 3.3-11.5 2.8-4.6-.5-8.2-4.3-11.6-7.2-5.4-4.6-10.4-9.2-10.2-16.7.2-8 4.5-14 11.4-18 13.1-7.7 28-12.6 42.1-18 5.5-2 10.1-4.2 15.4-7 7.3-3.8 15.8-7 22.3-12.1 2-1.5 9-6.1 9.6-8.5.1-.3-1.7-4-1.7-4.5 0-1.5.9-3.1 1.4-4.4 3.4-8 9.2-15.7 13.5-23.3 8-13.8 16-27.7 25.3-40.7 18.5-25.9 39.2-51.2 61.6-73.9 11-11 20.4-23.5 31.5-34.4a59 59 0 0114.4-10.6c6-3 12.8-3.7 19.7-4.7 16.7-2.3 30.7 2.7 46.4 7 14.9 4 29.8 7.5 44.7 11.8 16.4 4.6 32.6 9 49 14.2 8.7 2.7 17.7 4.3 26.5 7 4.2 1.2 20.2 9 23.8 6.5-11.1-5.2-22.5-10-34.4-13.1-3.5-1-5.7 0-5.6-4 0-2.2 2.5-5.1 3.4-7 2.1-4.2 4.5-8.5 6.6-12.8-7.5 2.2-27.8 9.6-33.4 2-6-8.1-1-23.8 2.7-31.6 9.7-20.5 26.2-37.6 42.4-53 3.4-3.4 11-7.7 12.8-12 .6-1.3-.7-3.2.6-4.8.8-1 3.8-1.7 5-2.8 4.5-4 8-12.2 11-17.3 3.3-5.4 6.1-11.2 10.2-16 6.6-8 13.4-16.3 24-18.2 5.2-.9 10.8-.4 15.8-2.2 6-2.2 11.8-5.6 18-7.9-1.6-3.1-2.8-8-5.7-8.4-2.9-.3-7 2.1-10.3 2a68 68 0 01-13.3-1.6c-5.1-1-6.8-.8-8.6-6.3-2-5.8-1.5-12.5-1.5-18.4 0-3 .6-6.6.4-9.5-.4-4.3-1.2-4.4-4.6-7.2-4.3-3.4-9.5-8-4.3-14 2.8-3.2 8.6-.7 11-4.1 2.6-3.5 2.5-12.4 3.2-16.5-7.8 3.8-5-10.5-5-14 0-5-3.3-14 1.6-18.2 2.2-2 3.9-.3 6.5-1.4 2.9-1.3 4.7-4.6 7.8-6 6.2-2.5 12.6.6 19 .1C539.3.9 546.5-.2 554 1c3.4.5 4.9 1.8 7.8 3.3 2.9 1.4 5.7 1.8 8.8 2.7 2.7.9 5.1 1.3 7 3.7 1.5 1.8.9 5 2.3 6.6 1.5 1.6 4.4 1.4 6.1 3.3 1.7 1.8 2.7 4.9 3.5 7.1 1.2 3 1.3 4.2 3.4 6.7 1.8 2.1 4.4 3.8 5.9 6.3 3.5 5.7 3.6 14 2.5 20.5-.4 2.2-3.6 7.9-3.1 9.8.5 1.7 3.5 1.3 4.8 2.4 1.2 1 2.2 5.3 3.1 5.6 2 .6 4.5-3.4 6-4 2.6-1 3.7-2 5.2 1.8 1 2.9-.4 6.8-1.2 9.5-1 3.5-2.1 7.7-4.8 10.4-3.1 3-5.7 1.4-9.1 3-5.2 2.5-3.7 10.4-10 12.6-6.1 2.1-12.8-4.6-17.4-7.6 1 7.4 4.5 14.7 2.8 22.3 14-5.5 27.8-13.2 43-15 7.8-.8 15.6-1.8 23 1.4 8.6 3.8 13.8 12 19.6 19 11 13 22.1 25.6 32.6 39 9.6 12.4 17.7 26.6 28.3 38.1a68 68 0 0117.7 46.9c-.1 1.4-1.3 4.8-1 6.3 0 1.2 1.1 2.8 1.1 3.7 0 3.3-1.1 5.2-4.2 7A56.3 56.3 0 01718 279c-8.2 1-18.1 1.1-26.2 0-8.4-1.2-15.8-5.8-23.5-8.7-6.8-2.5-13.6-4-20.7-5.6-3.9-.9-8.2-3.3-10.6-1-2.3 2.2-2.7 13.3-3.3 16.2-5.6 31.9-12.3 62.7-18.2 94.5-6.7 36-11.3 71.9-16 108.2a1342.4 1342.4 0 00-7 146.3c.1 8.7 4.5 38.1-8.5 39.3-7.7.6-13.8-10.4-15.9-16.4-3-9-4.7-18.7-5.2-28.2-1-19.1-2.3-38.3-3-57.5-.9-20.8.2-42 1.9-62.6 1.7-20.9 6-41.4 7.4-62.3-4 5.7-5.3 6.8-12 9.2-6.9 2.6-13.6 5.7-20.6 8.1-2.4.8-6 1.3-8 2.7-3.7 2.5-1.3-.3-2.4 4.5-1.3 5.2-1.5 11.4-1.8 16.7-1.6 24.9-8.5 49.6-11.6 74.4-.8 6 .3 31.4-10 23.4-8-6.2-7.8-25.6-9-34.6-1.4-12.1-.6-24.5-.3-36.7.2-13.9.5-28.4 3.8-42-6-1-14.2 1.8-20.1 2.3l-15.4 1c-12.3.6-24.8 1.1-37.3.9-2.2 0-17-2.1-19-.4-.5.5-.7 8-.8 8.9l-1.5 10.2a208.4 208.4 0 00-2.3 33.5z" />
					<path d="M620.5 626.7c9.4 3.7 19.3 5 28.7 8.3 8.4 3 16.2 7 24.5 10 .5-3.9.7-10.4-.7-14-2-5.1-7.3-5.2-12.5-7-12.7-4.5-26-5.4-38.6-10.6 2.2 4.1 1.2 9.6-1.4 13.3m161-13.4c-20 .6-39.3 5.3-59.2 8.2l-29 4c-3.7.5-10.5-.1-13.2 3.1-2.2 2.7.2 11.8-.8 15.7 4 .3 11.3-3.5 15.7-4.1 7-1 13.7-2.4 20.7-2.8 11-.7 21.8-1.3 32.8-2.5 11.2-1.3 22-3.6 33.3-4.4 5.4-.5 7.6.6 8-5.2 0-2.3.4-6-.2-8.3 1-2.7 0-4-2.7-4-1.8-.2-3.6 0-5.3.3m-39-18.4c5.4-.6 11-1.3 16.4-1.6 1 0 6.7.3 7.6-.7 1.3-1.5-.1-6.8-.4-8.5-.8-5.6-1.7-8.8-7.8-8.9-5.1 0-10.5 1.1-15.6 1.6-23.4 2.3-46.6 3.3-69.7 7.6 1.4 6 3 12.2 1.4 18.3 11 .6 23.2-1.6 34-3.8 11-2.2 22.8-3.3 34.1-4m-37-56.4c-8.3 0-17 3.7-25.3 3-.1 1.5 2.5.2 3.2 1.6 1.6 0 2.1.5 1.6 1.5 0 .7-.3 1.1-1 1.3H683c-1.6.1-1.9 1.2-.8 3.3-.4 2.6.2 5.9.4 8.5 14.7-2 29.1-4.1 44-5 7-.4 14-.4 21-1 7.8-.7 16.2.7 23.8-.7 4-.8 3.6-.8 3.3-6-.2-3.2-.1-7-2.7-9.3-4.4-3.9-14.2-1.7-19.4-1.5-15.6.4-31.5 1.8-47 4.3m8.6 75c22.3-2 44.5-6.5 67-6.5-1.6-1.6-5-2-7-2.8-2.3-1-4.4-3.1-6.7-4-4.4-1.7-8.9.7-13.4 1.7-11 2.5-22.2 2.6-33.2 5a321.3 321.3 0 01-34.3 6.3c-5.5.6-11.4 1.8-16.9.4l-1.3-1c-.5-2-1.8-2.5-4-1.6-2.7-.5-6.2.2-9 .2 0 1.1 10.2 4.6 12.1 5.5 4.7 2 7.9 3.5 12.9 2.6 11.3-2 22.4-4.3 33.8-5.8m-78.6-65.3c1 3.4 4.6 1.9 7.7 2.2 4.3.5 8.5 2 12.6 3.1l22.3 6c-.3-2.9.4-9.7-1.2-12.4-1.7-2.8-9.6-4-13.2-4.8-9.3-2.2-19.1-1-28.5-.5l.3 6.4m88.8 21.3c8.8-.8 17.6-1.3 26.4-1.6 10-.4 2.7-2 2.5-8.1-13.2 2-26.5 2.5-39.7 4.3-11 1.5-24 5.4-35 3.3-5.3-1-10.7-1.4-16.3-2-5.2-.5-10.2-3-15.4-3.5-5.9-.7-11.8 2.6-17.6 3.4-2.5.4-3 2-4.2-.9-1.3-3 2.2-5.6 3.6-7.4 1.6-2.2.9 1.3 1.8-2 .2-1-.4-3.3-.6-4.3-.3-2.6-1-5.4-1.2-8-.1-2.3-.1-5.9 2.4-7.2 1.6-.9 2.7.3 4 .1 10.6-1.8 23-2 33.8-.2 11.6 2 21.6-3.2 33.1-5.2 13.5-2.5 27-2.8 40.6-3.9 11.6-.8 32.8-5.4 37.3 9.4 1.2 4.2 3 15.8-.3 19.4-4.5 4.7-14.7 3.2-20.4 4.4.9 2.4 3.4 4 2.5 7 8 .4 9.4 8 10.7 15 1.3 7.3-1.2 10.2 5.7 14 9.8 5.3 20 10.7 19.9 23.3-.1 6.3-.8 16-7.3 19.2-6.4 3.2-16.8 2.7-23.8 3.8-13.6 2.3-27.3 5-41 6.3a810 810 0 01-44 3.3c-8 .4-14.8 1.6-22.5-1.1-7.6-2.6-15-4.6-22.8-6.5-7.7-2-31.2-4.5-24.4-17.7 1.1-2.1 4.9-3.8 5.5-5.8 1-3.2-2.3-5.7-2.2-8.6.3-5.3 6.3-6 10.4-6-7.1-4.4 2.4-9.7 2.3-13.4 0-6.7-8.3-11-8.8-16.5-1.1-13.6 41.8.5 48.4 3.5-5 7.5-28.6 1-35.7-.2 1 2.5 1.9 4.8 2.2 7.4.2 2-.6 4.5.1 6.6 1.2 3.4 1.2 2.7 5.3 3.6l9 2.2c4.7 1 12 4 16.6 3.9 4-.2 3.3 1 4-3.4.4-2.4-.3-5-.7-7.3-.8-5-2-9.7 2.2-13.2 4.2-3.4 12.9-5 18-6.2 11.1-2.7 24.1-3.3 35.6-3.2" />
					<path d="M777.9 485c-12.2-2.1-24.6-2.6-37-2l2 9.2c11.6-3 23.3-4.8 35-7.3zm-99.2 23.6c-4.9-.3-1.5 1.9-.3 5 1.5 4 1.2 9 1.5 13.1a201 201 0 0146.2-10.5c7.2-.9 14.5-1.1 21.8-1.5 2.1 0 9.9.8 11.5-.6 1.1-1.1.3-7-.8-8.3-6.1-7.1-29.6-1-38.2-.4-14 1-27.6 3.6-41.7 3.2zm20.3-19c12.7 1.2 25 1.1 37.6 3-1-8 .2-10.1-9-10.5-8-.4-16.2-.7-24.3-.7-18.2 0-36.4-.4-54.7-.4v8.2c17-1.7 33.5 1.4 50.4.4zm-61 30.1c8 0 15.6 3 23.6 3.8 4.8.4 3.3 1 6.6 3.4 5.2 3.8 6.7 1.8 6-3.3-2.1-17.2-24-13.4-36.5-14.3.8 4-1 7.6-3.8 10.4h4.2zm86.5-22c-11.5 0-23 .7-34.4.5-5.1-.1-11.7-1.1-16.8-.2-3.6.6-6.7 2.5-10.7 3.2 5.9 3.1 8.9 1 15.1.3 6.2-.8 12.5-.7 18.8-1.1 10.2-.6 21.1-3 31.2-2.4.2-1.4-.9-1.6-3.2-.4zm-91.2 37.2c-5.3 0 2-6 3-6.6-6 0-7.3-3.5-5.6-9.2 1.6-5.3 2.7-3.6-1.3-8-3-3.4-3.4-5.8.1-9.6 3.6-3.7 11-2.7 14.2-5.8 5.5-5.3-1.6-15.9 6-20 5-2.7 13.3-2.4 19-3 5.5-.5 11.1-.6 16.6-.7 12-.2 24.5 1.9 36.4 3 4.4.4 9.3 2.1 13.5 2.1 4.4 0 9-1 13.5-.8 5.3.1 10.3-.3 15.7.6 4.2.6 13.9 1 17 4 10.6 10.3-14.5 15-18.8 16.2 4.4 4.8 4.2 11.2 3.6 17.2 2 0 5.7-.9 6.7 1.5 1.4 2.9-3.6 3.6-4.8 4-6.7 2-14.6 1.4-21.6 2-14 1.5-27.7 2.3-41.4 5-6.8 1.2-13.4 2.8-20.1 4a48 48 0 01-3.5.6c-1.8-.2-2.4 1-1.8 3.4-1.8.9-8.8-1.4-11-1.7a85.7 85.7 0 00-35.4 1.8zM881.5 654.2c-8 6.3-15.3 12.2-23.9 17.6 6.1-.2 26.3-9.9 24-17.6m-3.2-10.1c-4.3-3.7-8.6-3.4-14-4.5-4.9-1-9.7-2.8-14.6-4-3.9-1-7.7-2.2-11.5-3-5.5-1.3-6 0-11 2.9-17.7 10.1-37.6 17-56.3 25.2 5.5 4.9 17.9 5 24.7 6.6 5 1.1 9.8 2.7 14.6 4.5 4.4 1.6 11.6 5.4 16.3 5.5 4 .2 7.2-3.8 10.6-5.9l13.6-8.2c9.5-5.7 18.5-12.7 27.6-19.1m-80 40.9c-2.1-2-8.3-1.9-10.9-2.5-5-1.2-10-2.4-15.1-3.3-8.3-1.4-21.5-2-22.4-12.8-.7-9 10.1-11.1 16.4-14.2 9.6-4.5 19.3-8.8 29-12.8 9.2-3.8 18.5-7 27.8-10.2 1.8-.6 3.3-.6 4.8-2 1.2-1.2.8-3.4 2-4.6 3-2.7 6.8-1.3 10.4-.6a146 146 0 0124 6.7c7.9 3 15 3.7 17 12.7 4-1.9 7-2.2 6.5 3.4 0 1.7-1.3 3.5-1.6 5.2-.4 2.5.3 5.1 0 7.6-1.6 9.1-13.9 15.9-21.5 19.5-9.4 4.4-21.5 11-32 11.8-11.2.9-23.4-3.5-34.5-3.9" />
					<path d="M656 533.7h-10c3.3-.6 6.7-.6 10 0M461 181l-3 5c.3-2.1 1.1-4 3-5M656 581.5h6-6M702 472.7l-7-.4 7 .4M662 533.7h-6c2-.6 4-.6 6 0M741.6 250l-.2-6 .2 6M401.6 552l-.2-5 .2 5M456 470.5h4-4M635 111.3l-5 .4 5-.4M761 476.5h-6 6M592.6 600l-.2-4 .2 4M594.6 549l-.2-4 .2 4M560.4 572l.2 4-.2-4M464 469.5h3-3M754 521.6l3-.2-3 .2M562.4 604l.2 4-.2-4M669.6 597l-.2 4 .2-4M554.3 1.1l-4.2-.5c1.4.3 3-.9 4.2.5M407.6 636l-.2-4 .2 4M731 523.5h3-3M391.5 281v0M619.7 573v4c-.6-1.4-.6-2.7 0-4M433 471.5h3-3M593.5 567v-4 4M798 685.5h3-3M762 558.5h2-2M737 561.5h2-2M347.6 568l-.2-3 .2 3M757 567.2c-.9 1-2 .4-3 .5l3-.5M638 535.2c-1.3.7-2.7.8-4 0h4M725 569.5h-4 4M669 534.7l-4-.4 4 .4M363.5 530v0M593.4 584l.2-3-.2 3M731 526.3l-4 .4 4-.4M401.5 523v-3 3M568.6 446l-.2 3 .2-3M751 476.3c-1.3.7-2.7.6-4 0h4M592.6 615l-.2-3 .2 3M592.6 623l-.2-3 .2 3M403.5 491v-3 3M688 650.5h2-2M365.6 659l-.2-3 .2 3M582 667.5h2-2M727 475.7l-4-.4 4 .4M734 476.7l-3-.4 3 .4zM582.4 582l.2-9-.2 9M332 618.5h-5 5M469 419.5h-5 5M448 418.5h-4 4M340 618.5h-4 4M520 107.7l5-.4-5 .4M542.4 225l.2-5-.2 5M502 240.5h-3 3M417 415.5h-3 3M394 456.3l4 .4-4-.4M391.5 507v-4 4M506 453.7l4-.4-4 .4M597.4 430l.2-4-.2 4M615 245.7l4-.4-4 .4M503.7 531c2.2 5.4 1 1.6 1 2.8-1.9.3-2.2-.7-1-2.8M412 415.6l-3-.2 3 .2M616.4 314l.2-4-.2 4M391.5 572v-4 4M391.4 542l.2-3-.2 3M599.4 411l.2-3-.2 3M378.4 545l.2 3-.2-3M376.4 537l.2 3-.2-3M576.4 400l.2-3-.2 3M66 535.7l4-.4-4 .4M583.4 563l.2-3-.2 3M577.3 396l.4-3-.4 3M74 534.7l4-.4-4 .4M498 419.5h-2 2M391.5 533v-3 3M585.6 531c-.4-1-.6-2 .1-3l-.1 3M568.5 512v0M569.4 611l.2 3-.2-3M643 247.3l3 .4-3-.4M639 247.4c1.3 0 2.8-.6 4 .4l-4-.4zM468 458.5h4-4M498 246.3l4 .4-4-.4M432 458.2h4c-1.3.7-2.7.8-4 0M541.5 248v-3 3M457 458.7l4-.4-4 .4M570.5 635v0M574 222.7l4-.4-4 .4M591.4 478l.2-3-.2 3M637.4 211l.2-3-.2 3M542.5 125v0M507 106.3l4 .4-4-.4M307 674.7l4-.4-4 .4M263 687.7c1.3-.7 2.7-.5 4 0h-4M782 629.7l7-.4-7 .4M782 612.5h-4 4M762 592.6l5-.4c-1.6 1-3.3.3-5 .4M743 594.7l5-.4-5 .4M715 612.7l4-.4-4 .4M722 612.7l4-.4-4 .4M727 611.7l4-.4-4 .4M734 577.5h-3 3M759 632.6l4-.4c-1.2 1-2.7.4-4 .4M721 552.7l4-.4-4 .4M706 538.5h-2 2M682 541.3c-.3.8-2.1.7-2-.1h2M635.4 545l.2 3-.2-3M772 550.3h3c-1 .7-2 .6-3 0M734 535.5h-2 2M708 598.7l4-.4-4 .4M692 600.7l4-.4-4 .4zM770 630.7l4-.4-4 .4M722 636.7c1.3-.5 2.7-.6 4 0h-4M719.9 498.9l-1.9-.7h7l-5.1.7M702 481.5h-5 5M639 519.7c1.7-.6 3.3-.5 5 0h-5M740 503.5h-3 3M719 490.3l5 .4-5-.4M698 500.7l5-.4-5 .4M700 489.3l4 .4-4-.4M681 508.5h-2 2M702 498.6l-2-.2 2 .2M689 498.5h-2 2M725 497.6c0 .3 3-1 3 .2l-3-.2zM714 481.5h-2 2M359 434c1-4.3.8-7.8 4.6-5 2.2 1.6 5.7 9.4 5.4 12.1-.3 3.3-1.8 4.6-5 3.5-3.5-1.2-4.9-7.2-5-10.5M553.8 407.2c9 0 5 9.6-2.4 9.8-3.4 0-8.4-.6-7.2-5.2.6-2.4 9.3-5.7 9.6-4.6M457.8 426c6.4 3.1-2.7 16.9-8.5 13.5-7.6-4.4 5.8-11.5 8.5-13.5M442 439c2.2 2.3 11.7 10.1 6.4 13.3-6.4 3.8-11.3-9-6.4-13.3M333.7 433c-2.1-4 .8-14.7 7.2-12.8 6.5 2-3.7 11.7-7.2 12.8M476.3 435.3c4.2-1.6 3.4 3.4 4 5 .8 1.8 4.5 6.2 3.6 8.2-1.4 2.9-4.7 1-6.5-.8-3.1-3.3-2.9-8.6-1-12.4M412.4 440c-3.5 0-11.8-10.1-6.9-11.8 6-2 11.2 12.5 7 11.8M533.2 424c3.2.8 7.4 9.9 2.6 10.9-5.3 1.2-6.3-8.4-2.6-10.9M513.8 441c-2.5-4.8-3.1-15.2 3-6.9 1.3 1.8 2.7 1.1 2 4-.6 2.7-3 2.9-5 2.9M381.6 416c2.5 3.9 1.8 16-3.6 8.8-2.2-3-.7-8.7 3.6-8.8M510.2 53.1c5-1.3 6.1 10.4 3.2 11.7-4 1.8-3.5-9.7-3.2-11.7M824.2 647.6c-4.7-.2-11.1-1.5-4.1-4.7 4.4-2.1 11-2.3 15.7-1.4 3.2.6 8 3.2 3.1 6.7-2.9 2-11.2-.5-14.7-.6M819 656l-4-.4c1-2 4.2-2.4 4 .4M825 647.5h4-4" />
				</g>
			</g>
		</svg>
	)
}

export default Workshop
