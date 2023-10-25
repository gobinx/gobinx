import * as React from 'react'
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg'

const Lightning = (props) => (
	<Svg
		xmlns='http://www.w3.org/2000/svg'
		width={props.width || 16}
		height={props.height || 16}
		viewBox='0 0 16 16'
		fill='none'
		{...props}
	>
		<Path
			fill='url(#a)'
			d='m13.366 7.841-7 7.5a.5.5 0 0 1-.856-.437l.916-4.583-3.602-1.353a.5.5 0 0 1-.187-.812l7-7.5a.5.5 0 0 1 .855.437l-.918 4.588 3.602 1.35a.5.5 0 0 1 .187.81h.003Z'
		/>
		<Defs>
			<LinearGradient
				id='a'
				x1={10}
				x2={5.5}
				y1={0}
				y2={16}
				gradientUnits='userSpaceOnUse'
			>
				<Stop stopColor='#FFB140' />
				<Stop offset={1} stopColor='#D57E00' />
			</LinearGradient>
		</Defs>
	</Svg>
)

export default Lightning
