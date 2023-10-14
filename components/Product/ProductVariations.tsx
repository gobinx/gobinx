// Gluestack
import { Box, ScrollView, Text } from '@gluestack-ui/themed'

const ProductVariations = () => {
	const variations = [
		{
			name: 'Variation',
		},
		{
			name: 'Variation',
		},
		{
			name: 'Variation',
		},
		{
			name: 'Variation',
		},
		{
			name: 'Variation',
		},
		{
			name: 'Variation',
		},
		{
			name: 'Variation',
		},
		{
			name: 'Variation',
		},
	]

	return (
		<Box>
			<Text
				style={{
					marginBottom: 4,
				}}
			>
				12 variations available
			</Text>
			<Box
				style={{
					display: 'flex',
					flexDirection: 'row',
					gap: 12,
				}}
			>
				<ScrollView horizontal showsHorizontalScrollIndicator={false}>
					{variations.map((variation, index) => {
						return (
							<Box
								key={index}
								style={{
									backgroundColor: '#CCC',
									height: 80,
									marginLeft: index !== 0 ? 12 : 0,
									width: 80,
								}}
							></Box>
						)
					})}
				</ScrollView>
			</Box>
		</Box>
	)
}

export default ProductVariations
