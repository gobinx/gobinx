// React
import { useState } from 'react'

// Gluestack
import { Box, Button, ButtonText, ScrollView, Text } from '@gluestack-ui/themed'

// Components
import Spacer from '../Spacer'

// Packages
import { AntDesign } from '@expo/vector-icons'

type Category = 'all' | 'with-media' | 'high-ratings' | 'low-ratings'

const ProductReviews = () => {
	const [category, setCategory] = useState<Category>('all')

	const categories = [
		{
			label: 'All (243)',
			value: 'all',
		},
		{
			label: 'With Media (162)',
			value: 'with-media',
		},
		{
			label: 'High Ratings (203)',
			value: 'high-ratings',
		},
		{
			label: 'Low Ratings (40)',
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

			<Box style={{ height: 32 }}>
				<ScrollView horizontal showsHorizontalScrollIndicator={false}>
					<Box
						style={{
							display: 'flex',
							flexDirection: 'row',
							height: 'auto',
							gap: 12,
						}}
					>
						{categories.map((c) => {
							return (
								<Button
									key={c.value}
									size='xs'
									action={c.value === category ? 'primary' : 'secondary'}
									variant={c.value === category ? 'solid' : 'outline'}
									onPress={() => setCategory(c.value as Category)}
								>
									<ButtonText>{c.label}</ButtonText>
								</Button>
							)
						})}
					</Box>
				</ScrollView>
			</Box>
			<Spacer />
			<Box
				style={{
					gap: 24,
				}}
			>
				<Review />
				<Review />
				<Review />
			</Box>
		</Box>
	)
}

const Review = () => {
	return (
		<Box>
			<Box
				style={{
					alignItems: 'center',
					display: 'flex',
					flexDirection: 'row',
				}}
			>
				<Box
					style={{
						backgroundColor: '#CCC',
						borderRadius: 999,
						height: 40,
						marginRight: 12,
						width: 40,
					}}
				></Box>
				<Box>
					<Text
						style={{
							fontWeight: '600',
						}}
					>
						John Doe
					</Text>
					<Text
						style={{
							fontSize: 12,
						}}
					>
						11 Nov 2023
					</Text>
				</Box>
				<Box
					style={{
						display: 'flex',
						flexDirection: 'row',
						marginLeft: 'auto',
					}}
				>
					<AntDesign name='star' size={18} color='#EEC340' />
					<AntDesign name='star' size={18} color='#EEC340' />
					<AntDesign name='star' size={18} color='#EEC340' />
					<AntDesign name='star' size={18} color='#EEC340' />
					<AntDesign name='star' size={18} color='#EEC340' />
				</Box>
			</Box>
			<Box
				style={{
					marginTop: 12,
					marginBottom: 12,
				}}
			>
				<Text>Great products overall!</Text>
			</Box>
			<Box
				style={{
					display: 'flex',
					flexDirection: 'row',
					gap: 12,
				}}
			>
				<Box
					style={{
						backgroundColor: '#CCC',
						height: 80,
						width: 80,
					}}
				/>
				<Box
					style={{
						backgroundColor: '#CCC',
						height: 80,
						width: 80,
					}}
				/>
				<Box
					style={{
						backgroundColor: '#CCC',
						height: 80,
						width: 80,
					}}
				/>
			</Box>
		</Box>
	)
}

export default ProductReviews
