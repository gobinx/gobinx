// React
import { useState } from 'react'

// Gluestack
import { Box, Button, ButtonText, ScrollView, Text } from '@gluestack-ui/themed'

// Components
import Spacer from '../Spacer'

type Category = 'all' | 'with-media' | 'high-ratings' | 'low-ratings'

const ProductReviews = () => {
	const [category, setCategory] = useState<Category>('all')

	const categories = [
		{
			label: 'All',
			value: 'all',
		},
		{
			label: 'With Media',
			value: 'with-media',
		},
		{
			label: 'High Ratings',
			value: 'high-ratings',
		},
		{
			label: 'Low Ratings',
			value: 'low-ratings',
		},
	]

	return (
		<Box>
			<Text
				style={{
					fontSize: 19,
					fontWeight: '600',
					marginBottom: 12,
				}}
			>
				Reviews
			</Text>

			<ScrollView
				horizontal
				showsHorizontalScrollIndicator={false}
				style={{
					backgroundColor: '#CCC',
				}}
			>
				<Box
					style={{
						display: 'flex',
						flexDirection: 'row',
						gap: 12,
					}}
				>
					{categories.map((c) => {
						return (
							<Button
								key={c.value}
								size='xs'
								action={c.value !== category ? 'secondary' : 'primary'}
								onPress={() => setCategory(c.value as Category)}
							>
								<ButtonText>{c.label}</ButtonText>
							</Button>
						)
					})}
				</Box>
			</ScrollView>
			<Spacer />
			<Review />
		</Box>
	)
}

const Review = () => {
	return (
		<Box>
			<Text>Review Name</Text>
			<Text>Review Name</Text>
		</Box>
	)
}

export default ProductReviews
