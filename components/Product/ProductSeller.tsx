// Gluestack
import { Box, Button, ButtonText, Text } from '@gluestack-ui/themed'

// Packages
import { AntDesign } from '@expo/vector-icons'

const ProductSeller = () => {
	return (
		<Box
			style={{
				width: '100%',
			}}
		>
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
						marginRight: 12,
						height: 80,
						width: 80,
					}}
				></Box>
				<Box>
					<Text
						style={{
							fontSize: 18,
							fontWeight: '500',
						}}
					>
						Apple Official Shop
					</Text>
					<Text
						style={{
							fontSize: 14,
						}}
					>
						Active 5 minutes ago
					</Text>
					<Box
						style={{
							alignItems: 'center',
							display: 'flex',
							flexDirection: 'row',
							gap: 8,
						}}
					>
						<AntDesign name='enviroment' size={18} color='#BBB' />
						<Text>Tampines</Text>
					</Box>
				</Box>
				<Button
					style={{
						backgroundColor: 'transparent',
						borderColor: '#00BED1',
						borderWidth: 1,
						marginLeft: 'auto',
					}}
				>
					<ButtonText
						style={{
							color: '#00BED1',
						}}
					>
						View Shop
					</ButtonText>
				</Button>
			</Box>
			<Box
				style={{
					display: 'flex',
					flexDirection: 'row',
					gap: 8,
					marginTop: 12,
				}}
			>
				<Text>20 Products</Text>
				<Text>100% Chat Response</Text>
				<Text>4.5 Ratings</Text>
			</Box>
		</Box>
	)
}

export default ProductSeller
