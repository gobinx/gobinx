import * as React from 'react'
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg'

const Truck = (props) => (
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
			<Path d='M33.834 15h7.983a1.5 1.5 0 0 1 1.392.938l2.624 6.562M3.833 27h30M35.334 40.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM14.334 40.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM30.834 36h-12' />
			<Path d='M33.834 22.5h12v12a1.5 1.5 0 0 1-1.5 1.5h-4.5M9.834 36h-4.5a1.5 1.5 0 0 1-1.5-1.5v-21a1.5 1.5 0 0 1 1.5-1.5h28.5v19.757' />
		</G>
		<Defs>
			<ClipPath id='a'>
				<Path fill='#fff' d='M.833 0h48v48h-48z' />
			</ClipPath>
		</Defs>
	</Svg>
)

export default Truck
