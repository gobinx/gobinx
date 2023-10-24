import * as React from 'react'
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg'

const NotificationBell = (props) => (
	<Svg
		xmlns='http://www.w3.org/2000/svg'
		width={props.width || 18}
		height={props.height || 18}
		viewBox='0 0 18 18'
		fill='none'
		{...props}
	>
		<G
			stroke='#00BED1'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.125}
			clipPath='url(#a)'
		>
			<Path d='M6.75 13.5a2.25 2.25 0 0 0 4.5 0M12.938 1.688A7.222 7.222 0 0 1 15.489 4.5M2.51 4.5a7.222 7.222 0 0 1 2.552-2.813M3.938 7.875a5.062 5.062 0 1 1 10.124 0c0 2.519.584 3.98 1.048 4.781a.563.563 0 0 1-.485.844H3.375a.563.563 0 0 1-.484-.844c.464-.801 1.047-2.263 1.047-4.781Z' />
		</G>
		<Defs>
			<ClipPath id='a'>
				<Path fill='#fff' d='M0 0h18v18H0z' />
			</ClipPath>
		</Defs>
	</Svg>
)

export default NotificationBell
