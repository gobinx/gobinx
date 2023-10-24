import * as React from 'react'
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg'

const CardHolder = (props) => (
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
			<Path d='M14.625 3.938H3.375c-.621 0-1.125.503-1.125 1.124v7.875c0 .622.504 1.126 1.125 1.126h11.25c.621 0 1.125-.504 1.125-1.126V5.064c0-.622-.504-1.125-1.125-1.125Z' />
			<Path d='M2.25 8.438h3.994a.563.563 0 0 1 .551.45 2.25 2.25 0 0 0 4.41 0 .562.562 0 0 1 .55-.45h3.995M2.25 6.188h13.5' />
		</G>
		<Defs>
			<ClipPath id='a'>
				<Path fill='#fff' d='M0 0h18v18H0z' />
			</ClipPath>
		</Defs>
	</Svg>
)

export default CardHolder
