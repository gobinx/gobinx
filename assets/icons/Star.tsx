import * as React from 'react'
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg'

const Star = (props) => (
	<Svg
		xmlns='http://www.w3.org/2000/svg'
		width={props.width || 48}
		height={props.height || 48}
		viewBox='0 0 48 48'
		fill='none'
		{...props}
	>
		<G clipPath='url(#a)'>
			<Path
				stroke='#494949'
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth={2.5}
				d='m25.376 5.419 4.355 10.38a1.5 1.5 0 0 0 1.25.915l11.15.963a1.5 1.5 0 0 1 .85 2.638l-8.457 7.378a1.514 1.514 0 0 0-.477 1.48l2.536 10.976a1.5 1.5 0 0 1-2.23 1.63l-9.581-5.813a1.488 1.488 0 0 0-1.545 0l-9.581 5.813a1.5 1.5 0 0 1-2.23-1.63l2.535-10.976a1.516 1.516 0 0 0-.476-1.48l-8.458-7.378a1.5 1.5 0 0 1 .851-2.638l11.149-.963a1.5 1.5 0 0 0 1.25-.915l4.356-10.38a1.5 1.5 0 0 1 2.753 0Z'
			/>
		</G>
		<Defs>
			<ClipPath id='a'>
				<Path fill='#fff' d='M0 0h48v48H0z' />
			</ClipPath>
		</Defs>
	</Svg>
)

export default Star
