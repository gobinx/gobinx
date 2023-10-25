// React
import { useState } from 'react'

// Gluestack
import { Box, Image, Pressable, Text } from '@gluestack-ui/themed'

// Assets
// @ts-ignore
import productCardImage from '../assets/images/productCardImage.png'

// Packages
import { AntDesign } from '@expo/vector-icons'

const ProductCard = () => {
	const [isFavourite, setIsFavourite] = useState(false)

	const toggleFavourite = () => setIsFavourite((state) => !state)

	return (
		<Box
			style={{
				backgroundColor: '#FFF',
				borderColor: '#CCC',
				borderRadius: 8,
				borderWidth: 1,
				marginLeft: 6,
				marginRight: 6,
				width: 225,
			}}
		>
			<Box
				style={{
					height: 180,
					position: 'relative',
				}}
			>
				<Pressable
					onPress={toggleFavourite}
					style={{
						left: 8,
						position: 'absolute',
						top: 8,
						zIndex: 10,
					}}
				>
					<AntDesign
						name={isFavourite ? 'heart' : 'hearto'}
						size={24}
						color={isFavourite ? '#C80000' : '#706E71'}
					/>
				</Pressable>
				<Image
					source={productCardImage}
					alt='Product Image'
					style={{
						height: '100%',
						overflow: 'hidden',
						width: '100%',
					}}
				/>
				<Box
					style={{
						backgroundColor: '#FFF',
						borderRadius: 4,
						bottom: 8,
						shadowColor: '#000',
						left: 8,
						paddingLeft: 8,
						paddingRight: 8,
						position: 'absolute',
					}}
				>
					<Text>Shopee</Text>
				</Box>
			</Box>
			<Box
				style={{
					paddingTop: 8,
					paddingRight: 12,
					paddingBottom: 8,
					paddingLeft: 12,
				}}
			>
				<Text
					style={{
						fontWeight: '500',
						marginBottom: 4,
					}}
				>
					iPhone 14 Pro Max 128GB, 8GB RAM, Space Grey
				</Text>
				<Text
					style={{
						fontSize: 14,
					}}
				>
					Description of a product here in a 2-liners
				</Text>
			</Box>
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
						fontSize: 16,
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
					<AntDesign name='star' size={14} color='#EEC340' />
					<AntDesign name='star' size={14} color='#EEC340' />
					<AntDesign name='star' size={14} color='#EEC340' />
					<AntDesign name='star' size={14} color='#EEC340' />
					<AntDesign name='star' size={14} color='#EEC340' />
				</Box>
				<Text
					style={{
						fontSize: 14,
					}}
				>
					(23)
				</Text>
			</Box>
			<Box
				style={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'space-between',
					paddingTop: 16,
					paddingRight: 12,
					paddingBottom: 16,
					paddingLeft: 12,
				}}
			>
				<Text
					style={{
						color: '#05707B',
						fontSize: 18,
						fontWeight: '700',
					}}
				>
					S$900
				</Text>
				<Text>3k sold</Text>
			</Box>
		</Box>
	)
}

export default ProductCard
