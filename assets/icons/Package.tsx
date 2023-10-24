import * as React from 'react'
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg'

const Package = (props) => (
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
			<Path d='M24.666 24.205v19.29M6.798 14.423l17.87 9.78 17.868-9.78' />
			<Path d='m41.886 34.282-16.5 9.034a1.5 1.5 0 0 1-1.44 0l-16.5-9.034a1.5 1.5 0 0 1-.78-1.312V15.034a1.5 1.5 0 0 1 .78-1.313l16.5-9.033a1.5 1.5 0 0 1 1.44 0l16.5 9.033a1.5 1.5 0 0 1 .78 1.313v17.932a1.499 1.499 0 0 1-.78 1.316Z' />
			<Path d='m15.96 9.058 17.707 9.692v9.75' />
		</G>
		<Defs>
			<ClipPath id='a'>
				<Path fill='#fff' d='M.667 0h48v48h-48z' />
			</ClipPath>
		</Defs>
	</Svg>
)

export default Package
