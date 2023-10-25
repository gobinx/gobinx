import * as React from 'react'
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg'

const BestSellersArrow = (props) => (
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
			d='M15 3.5v4a.5.5 0 0 1-.854.354L12.5 6.207 8.854 9.854a.5.5 0 0 1-.708 0L6 7.707l-4.146 4.147a.5.5 0 0 1-.708-.708l4.5-4.5a.5.5 0 0 1 .708 0L8.5 8.793 11.793 5.5l-1.647-1.646A.5.5 0 0 1 10.5 3h4a.5.5 0 0 1 .5.5Z'
		/>
		<Defs>
			<LinearGradient
				id='a'
				x1={8}
				x2={8}
				y1={3}
				y2={12}
				gradientUnits='userSpaceOnUse'
			>
				<Stop stopColor='#079DAC' />
				<Stop offset={1} stopColor='#00555E' />
			</LinearGradient>
		</Defs>
	</Svg>
)

export default BestSellersArrow
