// React
import React from 'react'

// Gluestack
import { Box, Pressable, ScrollView, Text } from '@gluestack-ui/themed'

// Components
import ProductCard from './ProductCard'

type ProductSliderProps = {
	navigation: any
	title: string
	centerComponent?: React.ReactNode
	hideHeader?: boolean
}

const ProductSlider = (props: ProductSliderProps) => {
	const Component = props.centerComponent || null

	const products = [
		{
			name: 'Product 1',
		},
		{
			name: 'Product 2',
		},
		{
			name: 'Product 3',
		},
		{
			name: 'Product 4',
		},
	]

	return (
		<Box>
			{!props.hideHeader && (
				<Box
					style={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'space-between',
						marginBottom: 12,
						width: '100%',
					}}
				>
					<Text
						style={{
							fontSize: 19,
							fontWeight: '600',
						}}
					>
						{props.title}
					</Text>

					{props.centerComponent && props.centerComponent}

					<Pressable>
						<Text
							style={{
								color: '#05707B',
								fontWeight: '500',
							}}
						>
							See More
						</Text>
					</Pressable>
				</Box>
			)}
			<Box
				style={{
					display: 'flex',
					flexDirection: 'row',
				}}
			>
				<ScrollView horizontal showsHorizontalScrollIndicator={false}>
					{products.map((product, index) => {
						return (
							<Pressable
								key={index}
								onPress={() => props.navigation.navigate('Product')}
							>
								<ProductCard />
							</Pressable>
						)
					})}
				</ScrollView>
			</Box>
		</Box>
	)
}

export default ProductSlider
