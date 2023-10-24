import * as React from 'react'
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg'

const Logout = (props) => (
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
			<Path d='M7.313 2.813H3.374a.563.563 0 0 0-.563.562v11.25a.562.562 0 0 0 .563.563h3.938M7.313 9h7.875M12.375 6.188 15.188 9l-2.813 2.813' />
		</G>
		<Defs>
			<ClipPath id='a'>
				<Path fill='#fff' d='M0 0h18v18H0z' />
			</ClipPath>
		</Defs>
	</Svg>
)
export default Logout
