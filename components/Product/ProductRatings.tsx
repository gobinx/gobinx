// Gluestack
import { Box, Pressable, Text } from '@gluestack-ui/themed'

// Packages
import { AntDesign } from '@expo/vector-icons'

const ProductRatings = () => {
	return (
		<Box
			style={{
				alignItems: 'center',
				backgroundColor: '#FFEACC',
				display: 'flex',
				flexDirection: 'row',
				gap: 8,
				paddingTop: 8,
				paddingRight: 12,
				paddingBottom: 8,
				paddingLeft: 12,
			}}
		>
			<Text
				style={{
					fontSize: 18,
					fontWeight: '500',
				}}
			>
				4.5
			</Text>
			<Box
				style={{
					display: 'flex',
					flexDirection: 'row',
				}}
			>
				<AntDesign name='star' size={18} color='#EEC340' />
				<AntDesign name='star' size={18} color='#EEC340' />
				<AntDesign name='star' size={18} color='#EEC340' />
				<AntDesign name='star' size={18} color='#EEC340' />
				<AntDesign name='star' size={18} color='#EEC340' />
			</Box>
			<Text
				style={{
					fontSize: 14,
				}}
			>
				(23)
			</Text>
			<Pressable
				style={{
					marginLeft: 'auto',
				}}
			>
				<AntDesign name='hearto' size={20} color='#05707B' />
			</Pressable>
		</Box>
	)
}

export default ProductRatings
