import * as React from 'react'
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg'

const UserList = (props) => (
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
			<Path d='M5.625 10.125a2.813 2.813 0 1 0 0-5.625 2.813 2.813 0 0 0 0 5.625ZM10.688 5.625h6.75M10.688 9h6.75M12.375 12.375h5.063' />
			<Path d='M1.125 13.5c.5-1.94 2.403-3.375 4.5-3.375s4 1.434 4.5 3.375' />
		</G>
		<Defs>
			<ClipPath id='a'>
				<Path fill='#fff' d='M0 0h18v18H0z' />
			</ClipPath>
		</Defs>
	</Svg>
)

export default UserList
