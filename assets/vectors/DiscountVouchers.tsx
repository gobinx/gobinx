import * as React from 'react'
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg'

const DiscountVouchers = (props: SvgProps) => (
	<Svg
		width={props.width || 40}
		height={props.height || 40}
		viewBox='0 0 31 40'
		fill='none'
		{...props}
	>
		<G clipPath='url(#a)'>
			<Path
				fill='#F5841F'
				d='m8.073.7 1.429 3.992a7.528 7.528 0 0 0-4.86 8.494L.49 14.672C-.9 8.837 2.294 2.768 8.073.7Z'
			/>
			<Path
				fill='#F27021'
				d='m23.315 7.909 7.32 20.456a4.376 4.376 0 0 1-2.647 5.595l-7.104 2.542-6.31-17.634A7.528 7.528 0 0 0 9.5 4.694L8.072.701c6.2-2.219 13.024 1.01 15.242 7.209v-.001Z'
			/>
			<Path
				fill='#F5841F'
				d='m14.574 18.868 6.31 17.634-7.105 2.542a4.376 4.376 0 0 1-5.595-2.646L1.992 19.093l4.951-1.772a7.527 7.527 0 0 0 7.631 1.547Z'
			/>
			<Path
				fill='#F4EA1C'
				d='M14.62 22.56a3.44 3.44 0 1 0-2.941 6.22 3.44 3.44 0 1 0 2.942-6.22Zm-.085 3.765a1.53 1.53 0 0 1-2.04.73 1.531 1.531 0 1 1 2.04-.73ZM23.683 25.283a3.44 3.44 0 1 0-2.943 6.22 3.44 3.44 0 0 0 2.943-6.221Zm-.087 3.764a1.53 1.53 0 0 1-2.04.73 1.531 1.531 0 1 1 2.04-.73ZM20.544 18.66l-7.931 16.763 1.725.816 7.931-16.763-1.725-.817Z'
			/>
		</G>
		<Defs>
			<ClipPath id='a'>
				<Path fill='#fff' d='M.167 0h30.725v39.301H.167z' />
			</ClipPath>
		</Defs>
	</Svg>
)

export default DiscountVouchers
