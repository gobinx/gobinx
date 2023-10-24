import * as React from 'react'
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg'

const CreditCard = (props) => (
	<Svg
		xmlns='http://www.w3.org/2000/svg'
		width={props.width || 48}
		height={props.height || 48}
		viewBox='0 0 48 48'
		fill='none'
		{...props}
	>
		<G
			stroke='#494949'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={2.5}
			clipPath='url(#a)'
		>
			<Path d='M42 10.5H6A1.5 1.5 0 0 0 4.5 12v24A1.5 1.5 0 0 0 6 37.5h36a1.5 1.5 0 0 0 1.5-1.5V12a1.5 1.5 0 0 0-1.5-1.5ZM31.5 31.5h6M22.5 31.5h3M4.5 18h39' />
		</G>
		<Defs>
			<ClipPath id='a'>
				<Path fill='#fff' d='M0 0h48v48H0z' />
			</ClipPath>
		</Defs>
	</Svg>
)

export default CreditCard
