// React
import React from 'react'

// Gluestack
import { Box, ScrollView, Text } from '@gluestack-ui/themed'

// Packages
import { AntDesign } from '@expo/vector-icons'

const ProductChips: React.FC = () => {
	return (
		<Box
			style={{
				width: '100%',
			}}
		>
			<ScrollView horizontal showsHorizontalScrollIndicator={false}>
				<Box
					style={{
						display: 'flex',
						flexDirection: 'row',
						gap: 12,
					}}
				>
					<Chip name='Reviews' icon='message1' />
					<Chip name='Price' icon='linechart' />
					<Chip name='Description' icon='bars' />
					<Chip name='Videos' icon='play' />
				</Box>
			</ScrollView>
		</Box>
	)
}

type ChipProps = {
	name: string
	icon?: any
}

const Chip: React.FC<ChipProps> = (props) => {
	return (
		<Box
			style={{
				alignItems: 'center',
				borderColor: '#00BED1',
				borderRadius: 100,
				borderWidth: 1,
				display: 'flex',
				flexDirection: 'row',
				height: 30,
				gap: 8,
				paddingTop: 2,
				paddingRight: 12,
				paddingBottom: 2,
				paddingLeft: 12,
			}}
		>
			{props.icon && <AntDesign name={props.icon} size={20} color='#05707B' />}
			<Text
				style={{
					color: '#05707B',
				}}
			>
				{props.name}
			</Text>
		</Box>
	)
}

export default ProductChips
