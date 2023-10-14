import { Box, Pressable, Text } from '@gluestack-ui/themed'

const ProductCategoryBubbles = () => {
	const categories = [
		{ name: 'Best Sellers' },
		{ name: 'Computers & Technology' },
		{ name: 'Phones & Accessories' },
		{ name: 'Gaming & Consoles' },
		{ name: "Men's Fashion" },
		{ name: "Women's Fashion" },
		{ name: 'Muslim Fashion' },
		{ name: 'Health & Beauty' },
	]

	return (
		<Box
			style={{
				display: 'flex',
				flexDirection: 'row',
				flexWrap: 'wrap',
				width: '100%',
			}}
		>
			{categories.map((category, index) => {
				return (
					<Pressable key={index} style={{ width: '25%', padding: 5 }}>
						<Box
							style={{
								height: 100,
								justifyContent: 'flex-start',
								alignItems: 'center',
								borderRadius: 10,
							}}
						>
							<Box
								style={{
									backgroundColor: '#CCC',
									borderRadius: 100,
									height: 60,
									marginBottom: 8,
									width: 60,
								}}
							></Box>
							<Text
								style={{
									fontSize: 12,
									lineHeight: 16,
									textAlign: 'center',
								}}
							>
								{category.name}
							</Text>
						</Box>
					</Pressable>
				)
			})}
		</Box>
	)
}

export default ProductCategoryBubbles
