// Gluestack
import { Box, Text, View } from '@gluestack-ui/themed'

// Assets
// @ts-ignore
import BinxShopping from '../assets/brand/binxintro.svg'

// Packages
import Svg, { SvgXml } from 'react-native-svg'
import BinxShopper from './SVG/BinxShopper'

const Introduction = () => {
	return (
		<Box
			style={{
				alignItems: 'center',
				backgroundColor: '#FFF',
				height: '100%',
				justifyContent: 'center',
				left: 0,
				position: 'absolute',
				width: '100%',
				zIndex: 999,
			}}
		>
			<Text>Hi, I am Binx</Text>
		</Box>
	)
}

export default Introduction
