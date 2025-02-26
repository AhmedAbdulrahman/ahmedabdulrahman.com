import * as React from 'react'
import { useTheme } from '@theme'

const Computer: React.FC = (props) => {
	const { theme } = useTheme()

	return (
		<svg className="prefix__animated" viewBox="0 0 500 500" {...props}>
			<style>
				{
					'@keyframes zoomOut{0%{opacity:0;transform:scale(1.5)}}@keyframes slideLeft{0%{opacity:0;transform:translateX(-30px)}}@keyframes slideRight{0%{opacity:0;transform:translateX(30px)}}@keyframes slideUp{0%{opacity:0;transform:translateY(30px)}}svg:not(.prefix__animated) .prefix__animable{opacity:0}'
				}
			</style>
			<g id="prefix__background-simple--inject-56" className="prefix__animable">
				<path
					d="M221.94 458s80 12.85 142.74-43.37 80-147.62 95.92-221.23-17.92-139.11-80.45-160.1-89.57 32.39-166.7 49.25-100.59 9.5-154.8 66.28-41.72 164.44 27 232.92S221.94 458 221.94 458z"
					style={{
						transformOrigin: '244.689px 243.873px',
					}}
					id="prefix__elxdvkqs8yfh"
					fill={theme.colors.accent}
					className="prefix__animable"
				/>
				<path
					d="M221.94 458s80 12.85 142.74-43.37 80-147.62 95.92-221.23-17.92-139.11-80.45-160.1-89.57 32.39-166.7 49.25-100.59 9.5-154.8 66.28-41.72 164.44 27 232.92S221.94 458 221.94 458z"
					style={{
						transformOrigin: '244.689px 243.873px',
					}}
					id="prefix__eledzz516jgh"
					fill="#fff"
					className="prefix__animable"
					opacity={0.7}
				/>
			</g>
			<g
				id="prefix__Clock--inject-56"
				className="prefix__animable"
				style={{
					transformOrigin: '368.6px 117.71px',
					animation: '1s 1 forwards cubic-bezier(.36,-.01,.5,1.38) slideLeft',
					animationDelay: '0s',
				}}
			>
				<circle
					cx={368.6}
					cy={117.71}
					r={34.87}
					style={{
						transformOrigin: '368.6px 117.71px',
					}}
					id="prefix__elhrs5s2agjkr"
					fill="none"
					stroke="#263238"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="prefix__animable"
				/>
				<circle
					cx={368.6}
					cy={117.71}
					r={27.85}
					style={{
						transformOrigin: '368.6px 117.71px',
					}}
					id="prefix__el569xxkxs86q"
					fill="none"
					stroke="#263238"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="prefix__animable"
				/>
				<circle
					cx={368.6}
					cy={117.71}
					r={27.85}
					style={{
						transformOrigin: '368.6px 117.71px',
					}}
					id="prefix__el2vt5lpdmano"
					fill="none"
					stroke="#263238"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="prefix__animable"
				/>
				<path
					style={{
						transformOrigin: '375.815px 114.35px',
					}}
					id="prefix__elyczwpgwsuk"
					fill="none"
					stroke="#263238"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M358.71 110.99l9.89 6.72h24.32"
					className="prefix__animable"
				/>
				<path
					d="M371.3 117.71a2.7 2.7 0 11-2.7-2.69 2.7 2.7 0 012.7 2.69z"
					style={{
						transformOrigin: '368.6px 117.72px',
					}}
					id="prefix__elo9cc8zh948f"
					fill="#fff"
					stroke="#263238"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="prefix__animable"
				/>
			</g>
			<g
				id="prefix__Character--inject-56"
				className="prefix__animable"
				style={{
					transformOrigin: '319.511px 262.53px',
					animation: '1s 1 forwards cubic-bezier(.36,-.01,.5,1.38) slideRight',
					animationDelay: '0s',
				}}
			>
				<path
					d="M315.94 407s4.33 6 5.78 9.82-.72 6.41-6.86 9.06-10.1 2.26-15.51 3-7.93 5.28-15.87 6.79-14.43.38-14.07-2.26 10.46-5.67 15.15-11.33 13.35-15.48 13.35-15.48z"
					style={{
						transformOrigin: '295.774px 421.473px',
					}}
					id="prefix__elp60544kz0t"
					fill="#fff"
					stroke="#263238"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="prefix__animable"
				/>
				<path
					d="M315.94 407l-4-.08-2.25 2.42a20.18 20.18 0 00-.83 1.91c-1.33 3.44-3.38 10.82.42 16.42a28.81 28.81 0 005.59-1.79c6.14-2.65 8.3-5.29 6.86-9.06s-5.79-9.82-5.79-9.82z"
					style={{
						transformOrigin: '314.63px 417.295px',
					}}
					id="prefix__elp0xwo3lcrhi"
					fill="#9e9e9e"
					stroke="#263238"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="prefix__animable"
				/>
				<path
					d="M284.5 329.59s9.68 22.85 10.85 34.47 21.3 39.12 22.46 41.06-.77 5-3.48 5.8-8.14 5-15.11 1.55-12-17.43-27.5-37.18-29.44-36.8-28.66-46.09 11.23-9.68 20.53-8.52 20.91 8.91 20.91 8.91z"
					style={{
						transformOrigin: '280.591px 367.013px',
					}}
					id="prefix__eldt8sb7zxqnr"
					fill="#4f4f4f"
					stroke="#263238"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="prefix__animable"
				/>
				<path
					d="M274.82 416s-9.68 10.07-13.17 11.62-18.59 6.58-18.59 9.3 14.33 4.64 20.14 4.64 17-4.26 20.53-5.42 15.1-3.1 19.36-6.2-2.71-15.49-2.71-15.49z"
					style={{
						transformOrigin: '273.765px 428.005px',
					}}
					id="prefix__elnc1ytnxlfl"
					fill="#fff"
					stroke="#263238"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="prefix__animable"
				/>
				<path
					d="M258.4 441.26a23.64 23.64 0 00-2.56-7.87 16.92 16.92 0 00-1.84-2.79c-5.2 2.07-10.9 4.61-10.9 6.28-.04 2.12 8.7 3.76 15.3 4.38z"
					style={{
						transformOrigin: '250.75px 435.93px',
					}}
					id="prefix__elta5ehzqbdek"
					fill="#9e9e9e"
					stroke="#263238"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="prefix__animable"
				/>
				<path
					d="M293.73 414.81a19.27 19.27 0 00-1.48 4.64c-.88 4.85-.26 10.46.44 14.39 4-1 8.19-2.33 10.4-3.94 4.26-3.09-2.71-15.49-2.71-15.49z"
					style={{
						transformOrigin: '298.143px 424.125px',
					}}
					id="prefix__elxsg5me973cl"
					fill="#9e9e9e"
					stroke="#263238"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="prefix__animable"
				/>
				<path
					d="M221.36 324.23s.25 8.14 7.75 19.69 43.06 61.15 43.06 61.15 0 8.66.58 10.39 27.71 6.36 29.45 1.16-6.93-16.17-6.93-16.17l-26-72.75s-8.08-16.17-19.63-17.9-28.28 6.93-28.28 14.43z"
					style={{
						transformOrigin: '261.895px 364.296px',
					}}
					id="prefix__elrgzf7blpxno"
					fill="#6b6b6b"
					stroke="#263238"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="prefix__animable"
				/>
				<path
					d="M440.31 147.58l-28.44.34s-2.72-.34-3.4 1.7c0 0-7.15 18-7.49 24.5s1.37 5.45-1.36 13.95-10.55 28.59-15 44.92c-5.95 22-7.49 45.26-7.87 67.92-.06 3.63-2.24 34.92 3.42 34.92 4.7 0 35.29 5.74 35.81-2.61 2.08-33.29-3.93-65.81 7.63-98.19 4.49-12.57 9.64-25.85 13.45-39s4.48-26.82 7-40.28c1.7-9.19-3.75-8.17-3.75-8.17z"
					style={{
						transformOrigin: '410.338px 242.65px',
					}}
					id="prefix__elidgz8b05i4l"
					fill="#263238"
					stroke="#263238"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="prefix__animable"
				/>
				<path
					d="M440.31 147.58l-28.44.34s-2.72-.34-3.4 1.7c0 0-5.94 15-7.24 22.54a29.19 29.19 0 00-.91 10.17c.64 5.91 2.33 11.19 10.77 13.31 7.32 1.82 16.38.32 19.77-4.51 3.51-2.62 2.85-7.33 5-11.9 3.4-7.15 4.76-18.72 7.49-25.52a20 20 0 011-2.05c-.41-4.75-4.04-4.08-4.04-4.08z"
					style={{
						transformOrigin: '422.28px 171.968px',
					}}
					id="prefix__el8j9bfd4n2v"
					fill="#828282"
					stroke="#263238"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="prefix__animable"
				/>
				<path
					d="M434.8 165c-2.76 9.94-1.1 12.7-3.87 29.82s-12.7 36.45-16.56 54.12-2.21 80.08-1.66 82.84a24.78 24.78 0 01.24 4.44c1.85-.69 3-1.65 3.06-2.95 2.08-33.29-3.93-65.81 7.63-98.19 4.49-12.57 9.64-25.85 13.45-39s4.47-26.82 7-40.28c1-5.65-.61-7.43-2-8v.06A73.66 73.66 0 00434.8 165z"
					style={{
						transformOrigin: '428.144px 242.01px',
					}}
					id="prefix__el245n243rvhf"
					fill="#696969"
					stroke="#263238"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="prefix__animable"
				/>
				<path
					d="M348.59 419.89l-.31-.24v-42.21h6.07v-26.68h-22.44v26.68H338v42.94l-53.67 17.1v4.25a4.85 4.85 0 009.7 0v-.61l44.88-5.22v6.43a4.25 4.25 0 108.5 0v-6.64l46.69 5.43v.61a4.86 4.86 0 009.71 0v-4.25z"
					style={{
						transformOrigin: '344.07px 398.67px',
					}}
					id="prefix__el79l563w50cx"
					fill="#263238"
					stroke="#263238"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="prefix__animable"
				/>
				<path
					style={{
						transformOrigin: '343.135px 398.67px',
					}}
					id="prefix__elfmm597ix87"
					fill="#fff"
					stroke="#263238"
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M348.29 419.65v-41.98h-10.32v42h10.33l-.01-.02z"
					className="prefix__animable"
				/>
				<rect
					id="prefix__eli3evymbrzor"
					width={145.59}
					height={23.35}
					x={273.14}
					y={332.32}
					fill="#263238"
					stroke="#263238"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="prefix__animable"
					rx={4}
					style={{
						transformOrigin: '345.935px 343.995px',
					}}
				/>
				<path
					d="M279.49 199.89s8.19 2.57 11 3.51 12.17 10.29 12.17 10.29 11.23-28.08 12.17-30.65 1.4-4.22 1.4-4.22a7.73 7.73 0 01-8.42-2.34c-4-4.21 1.17-12.63-3.51-19.89s-33.47 8.19-34.17 15.68 2.57 23.4 9.36 27.62z"
					style={{
						transformOrigin: '293.134px 184.194px',
					}}
					id="prefix__el4uujxw7fbgw"
					fill="#fff"
					stroke="#263238"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="prefix__animable"
				/>
				<path
					d="M255.39 156.83s.47 6.31 2.1 8.89 3.28 7.25 2.11 9.36-5.38 4.45-4.68 6.79 6.32 3.27 6.32 3.27l1.4 3.28s4.45-2.57 8.43-1.4 11.23-.24 12.87-4.45 1.87-19.66.47-30.19-6.09-15.45-14.51-13.38-14.98 12-14.51 17.83z"
					style={{
						transformOrigin: '270.086px 163.478px',
					}}
					id="prefix__elm3zsdjyrbd"
					fill="#fff"
					stroke="#263238"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="prefix__animable"
				/>
				<path
					d="M262.36 168.54s.05-6.1 4.49-6.8"
					style={{
						transformOrigin: '264.605px 165.14px',
					}}
					id="prefix__elx0f60k8s1me"
					fill="none"
					stroke="#263238"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					className="prefix__animable"
				/>
				<path
					d="M266.78 170.21c.51 1.33.44 2.59-.17 2.82s-1.5-.65-2-2-.44-2.59.16-2.83 1.49.69 2.01 2.01z"
					style={{
						transformOrigin: '265.697px 170.614px',
					}}
					id="prefix__el07isad08cf52"
					fill="#263238"
					className="prefix__animable"
				/>
				<path
					d="M274.06 158s2.11 2.33-1.4 3.27"
					style={{
						transformOrigin: '273.674px 159.635px',
					}}
					id="prefix__eliq78sabh1cb"
					fill="none"
					stroke="#263238"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="prefix__animable"
				/>
				<path
					d="M276.87 158s-.7 3.5 2.1 3.5"
					style={{
						transformOrigin: '277.881px 159.75px',
					}}
					id="prefix__elwxb2a7lypeb"
					fill="none"
					stroke="#263238"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="prefix__animable"
				/>
				<path
					d="M273.12 163.16s2.34-1.87 2.11 1.17"
					style={{
						transformOrigin: '274.183px 163.46px',
					}}
					id="prefix__elvpvumx5mo7i"
					fill="none"
					stroke="#263238"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="prefix__animable"
				/>
				<path
					d="M279.21 163.4s-2.34-.24-2.34.7"
					style={{
						transformOrigin: '278.04px 163.736px',
					}}
					id="prefix__elqhyvdx6wxz"
					fill="none"
					stroke="#263238"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="prefix__animable"
				/>
				<path
					d="M283.05 123.86a63.19 63.19 0 00-14.32 4.65c-8 3.71-12.41 9.59-19.43 9.36s-9.36 2.57-5.61 7.25 10.06 4.22 10.06 4.22-5.62 5.38-4.68 8.89 4.91 2.81 7.72-.94 5.15-8.89 11.7-10.29 8.66-1.41 8.66-1.41-7.49 5.85-6.55 8.19 7.25 2.11 10.06 4.92.47 22-1.87 24.57-5.62 1.64-9.6 1.4-7.48.71-6.55 3.75 4.46 18.05 7.27 19 13.65.7 24.85-14c3.15-4.14-2.4-19.5-2.4-22.78s-.28-6.71.51-9.9c.47-1.87 2.12-3.71 4.17-3.73 2.83 0 3.7 2.7 4.22 5 1.17 5.15-2.58 9.6-1.88 10.3s5.39 4.92 9.36 6.32 4.69-8.89 6.56-16.85 1.87-23.4-7.49-33c-6.02-6.21-15.72-6.68-24.76-4.92z"
					style={{
						transformOrigin: '279.096px 165.356px',
					}}
					id="prefix__elpe4jzj9cbq"
					fill="#263238"
					stroke="#263238"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="prefix__animable"
				/>
				<path
					d="M271.8 190.87c.63 1.62.25 3.28-.84 3.7s-2.49-.54-3.12-2.16-.25-3.27.85-3.69 2.49.54 3.11 2.15z"
					style={{
						transformOrigin: '269.82px 191.645px',
					}}
					id="prefix__el4r35bcx210x"
					fill="#fff"
					className="prefix__animable"
				/>
				<circle
					id="prefix__elub5ctcpeu"
					cx={295.99}
					cy={167.24}
					r={12.75}
					style={{
						transformOrigin: '295.99px 167.24px',
					}}
					fill="#fff"
					stroke="#263238"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="prefix__animable"
					transform="rotate(-45)"
				/>
				<path
					d="M293.07 161.51l-5-38.68a1.45 1.45 0 011.39-1.64l7.64-.34a1.48 1.48 0 011.53 1.48l-.46 38.94z"
					style={{
						transformOrigin: '293.344px 141.18px',
					}}
					id="prefix__elcq4adoupp9m"
					fill={theme.colors.accent}
					stroke="#263238"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="prefix__animable"
				/>
				<circle
					cx={295.99}
					cy={167.24}
					r={7.84}
					style={{
						transformOrigin: '295.99px 167.24px',
					}}
					id="prefix__eldq3f0meilo"
					fill={theme.colors.accent}
					stroke="#263238"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="prefix__animable"
				/>
				<path
					d="M203.49 270.76h8.37a8.67 8.67 0 018.67 8.67v2.76h0-25.7 0v-2.76a8.67 8.67 0 018.66-8.67z"
					style={{
						transformOrigin: '207.68px 276.475px',
					}}
					id="prefix__elnjj8dxsh2ci"
					fill="#263238"
					stroke="#263238"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="prefix__animable"
				/>
				<path
					d="M285.25 250.87s-49.18 14.6-52.67 14.6-13.33.31-19.67-1-11.11-2.22-13.65.32-4.44 11.11-4.44 11.11a7.23 7.23 0 003.81-.64c2.54-.95 4.12-6.66 4.12-6.66s6.67-.64 9.52 2.22 2.54 3.17.64 5.08-7.62 2.22-8.89 4.44 3.17 1.59 5.08 1.27 7-.64 10.15-2.22a80.14 80.14 0 0111.11-4.39c1.58-.31 32.68-1.58 42.52-1.58s22.53-2.54 28.87-4.44a27.41 27.41 0 009.84-5.08s-22.21-13.03-26.34-13.03z"
					style={{
						transformOrigin: '253.205px 266.407px',
					}}
					id="prefix__el017obu0bjoyab"
					fill="#fff"
					stroke="#263238"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="prefix__animable"
				/>
				<path
					d="M195.66 262.5s4.7-3.66 9.4-3.66"
					style={{
						transformOrigin: '200.36px 260.67px',
					}}
					id="prefix__elegcuddi0e1e"
					fill="none"
					stroke="#263238"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="prefix__animable"
				/>
				<path
					d="M194.62 259.37a16.84 16.84 0 019.92-4.18"
					style={{
						transformOrigin: '199.58px 257.28px',
					}}
					id="prefix__elq1aemxfgz5"
					fill="none"
					stroke="#263238"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="prefix__animable"
				/>
				<path
					d="M309.37 218.82L297 244.21s-3.17-.64-3.81 1.27a7.64 7.64 0 01-2.22 3.17l-5.71 2.22s5.4 4.12 12.38 10.15 12.05 7 12.05 7 12.7-11.74 14.6-24.75-9.53-30.16-14.92-24.45z"
					style={{
						transformOrigin: '304.88px 242.855px',
					}}
					id="prefix__elbqp5s3xsm0j"
					fill={theme.colors.accent}
					stroke="#263238"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="prefix__animable"
				/>
				<path
					d="M223.09 329.43c-4.62-8.66-3.46-21.36 28.87-27.14s53.84-4.85 53.84-4.85l5.81-7.36s70.27 8.17 71.42 9.9-.63 15-1.73 21.94-2.15 12.91-10.81 15.8-47.51 2.1-67.72-.21-52-9.23-52-9.23"
					style={{
						transformOrigin: '302.253px 314.831px',
					}}
					id="prefix__elqgse8k31q3"
					fill="#6b6b6b"
					stroke="#263238"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="prefix__animable"
				/>
				<path
					d="M242.74 340.05a44.84 44.84 0 003.93 4.28"
					style={{
						transformOrigin: '244.705px 342.19px',
					}}
					id="prefix__ellfz8mrxtxul"
					fill="none"
					stroke="#263238"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="prefix__animable"
				/>
				<path
					d="M334.21 321c-23.08-.39-69.1 0-78.21 0-12 0-20-1.33-19.33 6.67a17.33 17.33 0 002.13 6.54"
					style={{
						transformOrigin: '285.42px 327.518px',
					}}
					id="prefix__el1h9cvz0vs25"
					fill="none"
					stroke="#263238"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="prefix__animable"
				/>
				<path
					d="M372.67 306.33s-2.67 4-2 6 8 4 3.33 6.67-11.33 0-11.33 3.33S366 329 361.33 329s-10.66-6-14-7.33a35.48 35.48 0 00-6.23-.49"
					style={{
						transformOrigin: '358.323px 317.665px',
					}}
					id="prefix__el2ifk38a5vbg"
					fill="none"
					stroke="#263238"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="prefix__animable"
				/>
				<path
					d="M310.84 298.6s27.89 6.2 41.06 17.43"
					style={{
						transformOrigin: '331.37px 307.315px',
					}}
					id="prefix__elvfj1qpomdi"
					fill="none"
					stroke="#263238"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="prefix__animable"
				/>
				<path
					d="M317.81 299.37s35.25 5.81 49.58 19.76"
					style={{
						transformOrigin: '342.6px 309.25px',
					}}
					id="prefix__elih8zvi00tob"
					fill="none"
					stroke="#263238"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="prefix__animable"
				/>
				<path
					d="M314.26 177.86s-11.43 27-14.6 41.89 2.86 21.89 5.39 29.19 10.79 26 10.79 26-6.34 8.25-7 13.33.95 4.44 22.85 10.78a143.46 143.46 0 0046 5.4c4.44-.32 7-3.81 7.93-6.35s1.27-27.92-2.22-47.28-16.82-47.59-35.86-60.92-30.43-14.26-33.28-12.04z"
					style={{
						transformOrigin: '342.504px 240.763px',
					}}
					id="prefix__elqbc74sl3au"
					fill="#fff"
					stroke="#263238"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="prefix__animable"
				/>
				<path
					d="M314.26 177.86s-11.43 27-14.6 41.89c-1.91 9-.47 15.1 1.52 20.14l21.07-62.47c-4.11-.85-6.8-.48-7.99.44z"
					style={{
						transformOrigin: '310.506px 208.416px',
					}}
					id="prefix__el9obr20h3wr4"
					fill={theme.colors.accent}
					stroke="#263238"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="prefix__animable"
				/>
				<path
					d="M366.74 233.28a22.27 22.27 0 003.65.19"
					style={{
						transformOrigin: '368.565px 233.38px',
					}}
					id="prefix__el6zs6eda0axe"
					fill="none"
					stroke="#263238"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="prefix__animable"
				/>
				<path
					d="M342 219.29s9 9.31 19.8 12.85"
					style={{
						transformOrigin: '351.9px 225.715px',
					}}
					id="prefix__el1b580dayjp5"
					fill="none"
					stroke="#263238"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="prefix__animable"
				/>
				<path
					d="M346.28 233s10.4 13.7 24.58 16.07"
					style={{
						transformOrigin: '358.57px 241.035px',
					}}
					id="prefix__elzdwx2i00az"
					fill="none"
					stroke="#263238"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="prefix__animable"
				/>
				<path
					d="M338.72 215.51a35.41 35.41 0 0018.91 1.89"
					style={{
						transformOrigin: '348.175px 216.716px',
					}}
					id="prefix__elupwld4y3gv"
					fill="none"
					stroke="#263238"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="prefix__animable"
				/>
				<path
					d="M356.9 279.71a49.7 49.7 0 015 4.8"
					style={{
						transformOrigin: '359.4px 282.11px',
					}}
					id="prefix__elz366ds3d7lr"
					fill="none"
					stroke="#263238"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="prefix__animable"
				/>
				<path
					d="M331.16 267.5a58.93 58.93 0 0122.7 9.85"
					style={{
						transformOrigin: '342.51px 272.425px',
					}}
					id="prefix__elbhglggb1di6"
					fill="none"
					stroke="#263238"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="prefix__animable"
				/>
				<path
					d="M315.06 249.88a119.27 119.27 0 01-25.4 6.41c-13.1 1.6-35.71 2.74-37 2.68s-16.5-7.14-16.5-7.14-6.71-5.72-9.56-5.86-10.19.47-10.89 1.71 2.45 2 2.45 2l7 .33c1.9.09 6.08 5.69 6.08 5.69s-6.92-1.28-9.46-1.4-8.12 3.74-8.17 4.69 1.53 1.34 3.11 1.42 6.15-2.25 6.15-2.25l7.5 2.58s-7.14 3.16-8.21 5.65S220 272 220 272s.24 1.6 2.82.77 3.73-4.9 3.73-4.9l7.73-2.18s-5.24 3.12-5.63 4.69-1.51 5.14-.24 5.2 4.66-4.54 4.66-4.54l5.8-1.63 7.92.38a34.79 34.79 0 005.74-.37 411.6 411.6 0 0049.27 5.85c24.41 1.17 33.83-3.15 40.42-8.23s-7.75-17.21-13.14-17.47-14.02.31-14.02.31z"
					style={{
						transformOrigin: '278.764px 260.765px',
					}}
					id="prefix__el3flstcujm07"
					fill="#fff"
					stroke="#263238"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="prefix__animable"
				/>
				<path
					d="M320.7 191.69s-8.28 6.92-8.82 18.33 4.72 34.21 4.72 34.21l-.82 3.78-3.92 2.35s3.2 6.19 15 11.83 22.14 8.05 24.14 6.87-.95-13.38-.54-28.61a125.33 125.33 0 00-5.44-39c-2.78-8.39-14.34-12.44-17.84-12.29"
					style={{
						transformOrigin: '331.772px 229.254px',
					}}
					id="prefix__ela5klyw5e63r"
					fill={theme.colors.accent}
					stroke="#263238"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="prefix__animable"
				/>
				<path
					d="M315.78 248s9.45 8.39 17 9.38"
					style={{
						transformOrigin: '324.28px 252.69px',
					}}
					id="prefix__elhvna9v0rpb7"
					fill="none"
					stroke="#263238"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="prefix__animable"
				/>
				<path
					style={{
						transformOrigin: '237.41px 246.84px',
					}}
					id="prefix__el0bcftq0rfbic"
					fill="none"
					stroke="#263238"
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M231.67 243.71l11.48 6.26"
					className="prefix__animable"
				/>
				<path
					style={{
						transformOrigin: '240.015px 243.97px',
					}}
					id="prefix__ell4ubq8hd3c"
					fill="none"
					stroke="#263238"
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M234.8 241.1l10.43 5.74"
					className="prefix__animable"
				/>
				<rect
					id="prefix__elb3n34yk06ho"
					width={72.91}
					height={29.52}
					x={197.36}
					y={78.48}
					stroke="#263238"
					rx={5.9}
					style={{
						transformOrigin: '233.815px 93.24px',
					}}
					fill="#263238"
					strokeMiterlimit={10}
					className="prefix__animable"
					transform="rotate(180)"
				/>
				<circle
					cx={214.67}
					cy={92.82}
					r={8.15}
					style={{
						transformOrigin: '214.67px 92.82px',
					}}
					id="prefix__elmb2dpw9y3il"
					fill={theme.colors.accent}
					className="prefix__animable"
				/>
				<path
					d="M220.54 91.61a3.08 3.08 0 00-5.87-1.29 3.08 3.08 0 00-5.87 1.29 3 3 0 00.4 1.52c1.32 2.78 5.47 5.84 5.47 5.84s4.15-3.06 5.47-5.84a3.13 3.13 0 00.4-1.52z"
					style={{
						transformOrigin: '214.67px 93.7573px',
					}}
					id="prefix__el5vxn6op154c"
					fill="#263238"
					stroke="#263238"
					strokeMiterlimit={10}
					className="prefix__animable"
				/>
				<path
					d="M211.55 89.35a.84.84 0 11-1-.56.81.81 0 011 .56z"
					style={{
						transformOrigin: '210.75px 89.6027px',
					}}
					id="prefix__elu24e1mzo8n9"
					fill={theme.colors.accent}
					className="prefix__animable"
				/>
				<ellipse
					id="prefix__eljwwilu17fn"
					cx={216.15}
					cy={89.55}
					fill={theme.colors.accent}
					rx={0.84}
					ry={0.78}
					style={{
						transformOrigin: '216.15px 89.55px',
					}}
					className="prefix__animable"
					transform="rotate(-13.56)"
				/>
				<circle
					cx={252.85}
					cy={92.82}
					r={8.15}
					style={{
						transformOrigin: '252.85px 92.82px',
					}}
					id="prefix__elhhd66ufur5e"
					fill="gray"
					className="prefix__animable"
				/>
				<path
					style={{
						transformOrigin: '252.615px 92.72px',
					}}
					id="prefix__el4xnjna47bgw"
					fill="#263238"
					d="M259.14 87.4l-1.44-1.39-5.08 5.27-5.09-5.27-1.44 1.39 5.14 5.32-5.14 5.32 1.44 1.39 5.09-5.27 5.08 5.27 1.44-1.39-5.13-5.32 5.13-5.32z"
					className="prefix__animable"
				/>
				<circle
					cx={233.87}
					cy={92.82}
					r={8.15}
					style={{
						transformOrigin: '233.87px 92.82px',
					}}
					id="prefix__el08bkmyolilpf"
					fill="gray"
					className="prefix__animable"
				/>
				<path
					style={{
						transformOrigin: '233.64px 92.72px',
					}}
					id="prefix__elgxow9vplta"
					fill="#263238"
					d="M240.16 87.4l-1.44-1.39-5.08 5.27-5.08-5.27-1.44 1.39 5.13 5.32-5.13 5.32 1.44 1.39 5.08-5.27 5.08 5.27 1.44-1.39-5.13-5.32 5.13-5.32z"
					className="prefix__animable"
				/>
				<path
					style={{
						transformOrigin: '243.22px 116.37px',
					}}
					id="prefix__el9cegdh46dzv"
					fill="#263238"
					d="M245.22 107.87l4.5 6.5-5.5 1 7 11.5-12.5-13 2-2-5.5-6"
					className="prefix__animable"
				/>
			</g>
			<g
				id="prefix__Device--inject-56"
				className="prefix__animable"
				style={{
					transformOrigin: '196.254px 202.095px',
					animation: '1s 1 forwards cubic-bezier(.36,-.01,.5,1.38) slideLeft',
					animationDelay: '0s',
				}}
			>
				<path
					d="M131.42 287.19h46.31a3.35 3.35 0 100-6.7h-46.31a7.92 7.92 0 01-7.63-10.05l16.43-58.87a3.35 3.35 0 10-6.45-1.8l-16.43 58.87a14.61 14.61 0 0014.08 18.55z"
					style={{
						transformOrigin: '148.939px 247.203px',
					}}
					id="prefix__elm0raxe6elpl"
					fill="#828282"
					stroke="#263238"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="prefix__animable"
				/>
				<path
					style={{
						transformOrigin: '150.53px 201.29px',
					}}
					id="prefix__elwyrxdusae5i"
					fill="#fff"
					stroke="#263238"
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M145.25 133.02h10.56v136.54h-10.56z"
					className="prefix__animable"
					transform="rotate(173.17)"
				/>
				<path
					style={{
						transformOrigin: '170.335px 123.665px',
					}}
					id="prefix__elpck5gss7hff"
					fill="none"
					stroke="#263238"
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M154.67 130.33L186 117"
					className="prefix__animable"
				/>
				<path
					style={{
						transformOrigin: '178px 270.665px',
					}}
					id="prefix__elqrwvydpnac"
					fill="none"
					stroke="#263238"
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M167.33 267l21.34 7.33"
					className="prefix__animable"
				/>
				<path
					d="M137.16 134.14s-18.62 66.46 16.26 135.57z"
					style={{
						transformOrigin: '142.808px 201.925px',
					}}
					id="prefix__elk6yaif4rcca"
					fill="#263238"
					stroke="#263238"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="prefix__animable"
				/>
				<path
					style={{
						transformOrigin: '209.61px 276.915px',
					}}
					id="prefix__el20koc0h4psn"
					fill="#fff"
					stroke="#263238"
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M206.54 275.6h6.14v2.63h-6.14z"
					className="prefix__animable"
				/>
				<path
					style={{
						transformOrigin: '217.51px 276.915px',
					}}
					id="prefix__eljdzqok9elrp"
					fill="#fff"
					stroke="#263238"
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M214.44 275.6h6.14v2.63h-6.14z"
					className="prefix__animable"
				/>
				<path
					style={{
						transformOrigin: '225.4px 276.915px',
					}}
					id="prefix__elsufbydlw1x"
					fill="#fff"
					stroke="#263238"
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M222.33 275.6h6.14v2.63h-6.14z"
					className="prefix__animable"
				/>
				<path
					style={{
						transformOrigin: '233.29px 276.915px',
					}}
					id="prefix__el2qh0epf2iyp"
					fill="#fff"
					stroke="#263238"
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M230.22 275.6h6.14v2.63h-6.14z"
					className="prefix__animable"
				/>
				<path
					style={{
						transformOrigin: '241.18px 276.915px',
					}}
					id="prefix__el8syg2wfsi78"
					fill="#fff"
					stroke="#263238"
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M238.11 275.6h6.14v2.63h-6.14z"
					className="prefix__animable"
				/>
				<path
					style={{
						transformOrigin: '249.08px 276.915px',
					}}
					id="prefix__eldtm2my6ct4d"
					fill="#fff"
					stroke="#263238"
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M246.01 275.6h6.14v2.63h-6.14z"
					className="prefix__animable"
				/>
				<path
					style={{
						transformOrigin: '256.97px 276.915px',
					}}
					id="prefix__elxnhken2m5sr"
					fill="#fff"
					stroke="#263238"
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M253.9 275.6h6.14v2.63h-6.14z"
					className="prefix__animable"
				/>
				<path
					style={{
						transformOrigin: '264.86px 276.915px',
					}}
					id="prefix__eluke1xrcg7v"
					fill="#fff"
					stroke="#263238"
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M261.79 275.6h6.14v2.63h-6.14z"
					className="prefix__animable"
				/>
				<path
					style={{
						transformOrigin: '239.37px 280.115px',
					}}
					id="prefix__elfkdtsqzqb2i"
					fill="#fff"
					stroke="#263238"
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M203.03 277.62h72.68v4.99h-72.68z"
					className="prefix__animable"
				/>
			</g>
			<g
				id="prefix__Table--inject-56"
				className="prefix__animable"
				style={{
					transformOrigin: '185.68px 365.105px',
					animation: '1s 1 forwards cubic-bezier(.36,-.01,.5,1.38) slideUp',
					animationDelay: '0s',
				}}
			>
				<path
					style={{
						transformOrigin: '91.67px 374px',
					}}
					id="prefix__el6go0ezk9but"
					fill="#fff"
					stroke="#263238"
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M95.27 447.67h-7.2l-1.4-147.34h10l-1.4 147.34z"
					className="prefix__animable"
				/>
				<path
					style={{
						transformOrigin: '286.33px 374px',
					}}
					id="prefix__el592h8w8t0ka"
					fill="#fff"
					stroke="#263238"
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M289.93 447.67h-7.2l-1.4-147.34h10l-1.4 147.34z"
					className="prefix__animable"
				/>
				<path
					style={{
						transformOrigin: '189.085px 299.24px',
					}}
					id="prefix__el7pijat2ww1g"
					fill="#263238"
					stroke="#263238"
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M82.67 286.86H295.5v24.76H82.67z"
					className="prefix__animable"
				/>
				<path
					style={{
						transformOrigin: '189.015px 296.84px',
					}}
					id="prefix__eliij87cxztza"
					fill="#263238"
					d="M82.89 293.19h212.25v7.3H82.89z"
					className="prefix__animable"
				/>
				<path
					style={{
						transformOrigin: '185.68px 288.305px',
					}}
					id="prefix__el6qcyl2lx6rl"
					fill="#fff"
					stroke="#263238"
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M72.45 282.54h226.46v11.53H72.45z"
					className="prefix__animable"
				/>
			</g>
			<g
				id="prefix__Plants--inject-56"
				className="prefix__animable"
				style={{
					transformOrigin: '120.962px 350.885px',
					animation: '1s 1 forwards cubic-bezier(.36,-.01,.5,1.38) slideUp',
					animationDelay: '0s',
				}}
			>
				<path
					d="M112.73 399.46s-21-33.81-23-54.22 13.39-7.65 13.39-7.65-21.69-77.81-4.47-82.91S126.12 344 126.12 344s12.12-32.53 17.86-22.33-7 64.42-7 64.42 14-16.58 15.31-6.38-13.39 31.89-13.39 31.89"
					style={{
						transformOrigin: '120.962px 333.04px',
					}}
					id="prefix__elenrsm238oxu"
					fill={theme.colors.accent}
					className="prefix__animable"
				/>
				<path
					style={{
						transformOrigin: '126.44px 420.82px',
					}}
					id="prefix__elhi4mbmz0wlg"
					fill="#263238"
					d="M152.27 394.35h-51.66l6.45 52.94h38.75l6.46-52.94z"
					className="prefix__animable"
				/>
				<path
					d="M140.79 401.37s11.48-17.86 10.84-30-9.57 8.29-9.57 8.29 7.66-40.82-1.27-48.47-10.84 37-10.84 37-19.78-87.36-30.62-68.19S114 367 114 367s-8.29-15.95-9.57-.64 5.11 35.64 5.11 35.64"
					style={{
						transformOrigin: '124.151px 349.625px',
					}}
					id="prefix__eldt3nipcwi46"
					fill="none"
					stroke="#263238"
					strokeMiterlimit={10}
					className="prefix__animable"
				/>
			</g>
			<g
				id="prefix__Floor--inject-56"
				className="prefix__animable"
				style={{
					transformOrigin: '247px 447.67px',
					animation: '1s 1 forwards cubic-bezier(.36,-.01,.5,1.38) zoomOut',
					animationDelay: '0s',
				}}
			>
				<path
					style={{
						transformOrigin: '451.665px 447.67px',
					}}
					id="prefix__el8gxdci4e7sx"
					fill="none"
					stroke="#263238"
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M449 447.67h5.33"
					className="prefix__animable"
				/>
				<path
					style={{
						transformOrigin: '238.335px 447.67px',
					}}
					id="prefix__elvotfpqq6ye"
					fill="none"
					stroke="#263238"
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M39.67 447.67H437"
					className="prefix__animable"
				/>
			</g>
			<defs>
				<filter id="prefix__active" height="200%">
					<feMorphology in="SourceAlpha" operator="dilate" radius={2} result="DILATED" />
					<feFlood floodColor="#32DFEC" floodOpacity={1} result="PINK" />
					<feComposite in="PINK" in2="DILATED" operator="in" result="OUTLINE" />
					<feMerge>
						<feMergeNode in="OUTLINE" />
						<feMergeNode in="SourceGraphic" />
					</feMerge>
				</filter>
				<filter id="prefix__hover" height="200%">
					<feMorphology in="SourceAlpha" operator="dilate" radius={2} result="DILATED" />
					<feFlood floodColor="red" floodOpacity={0.5} result="PINK" />
					<feComposite in="PINK" in2="DILATED" operator="in" result="OUTLINE" />
					<feMerge>
						<feMergeNode in="OUTLINE" />
						<feMergeNode in="SourceGraphic" />
					</feMerge>
					<feColorMatrix values="0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 1 0" />
				</filter>
			</defs>
		</svg>
	)
}

export default Computer
