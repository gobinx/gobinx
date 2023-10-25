import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

const NewArrivalMedal = (props) => (
	<Svg
		xmlns='http://www.w3.org/2000/svg'
		width={props.width || 16}
		height={props.height || 16}
		viewBox='0 0 16 16'
		fill='none'
		{...props}
	>
		<Path
			fill='#ED3F25'
			d='M12.938 2H3.062A1.062 1.062 0 0 0 2 3.063v3.075a1.062 1.062 0 0 0 .625.967l3.912 1.778a3 3 0 1 0 2.93 0l3.908-1.778A1.062 1.062 0 0 0 14 6.138V3.063A1.062 1.062 0 0 0 12.937 2ZM6 3h4v4.542L8 8.45l-2-.91V3Zm2 10.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z'
		/>
	</Svg>
)

export default NewArrivalMedal
