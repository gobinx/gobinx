import { Box, Button, ButtonText } from '@gluestack-ui/themed'

const ProductActions = () => {
	return (
		<Box
			style={{
				flexDirection: 'row',
				gap: 24,
				paddingTop: 12,
				paddingRight: 12,
				paddingBottom: 36,
				paddingLeft: 12,
				width: '100%',
			}}
		>
			<Button
				style={{
					flex: 1,
				}}
			>
				<ButtonText>Chat with Shop</ButtonText>
			</Button>
			<Button
				style={{
					flex: 1,
				}}
			>
				<ButtonText>Buy Now</ButtonText>
			</Button>
		</Box>
	)
}

export default ProductActions
