import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

const DailyDealsClock = (props) => (
	<Svg
		xmlns='http://www.w3.org/2000/svg'
		width={props.width || 16}
		height={props.height || 16}
		viewBox='0 0 16 16'
		fill='none'
		{...props}
	>
		<Path
			fill='#3E7700'
			d='M13 6a.75.75 0 1 1 1.5 0A.75.75 0 0 1 13 6Zm-.75-1.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM14.041 8a.5.5 0 0 0-.54.457A5.507 5.507 0 1 1 7.542 2.5a.502.502 0 1 0-.082-1A6.507 6.507 0 1 0 14.5 8.541.502.502 0 0 0 14.041 8ZM8 3.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9ZM7.5 8a.5.5 0 0 0 .5.5h3a.5.5 0 1 0 0-1H8.5V5a.5.5 0 1 0-1 0v3ZM10 3a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z'
		/>
	</Svg>
)

export default DailyDealsClock
