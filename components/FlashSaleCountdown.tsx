// Gluestack
import { Box, Text } from '@gluestack-ui/themed'

const FlashSaleCountdown = () => {
	return (
		<Box
			style={{
				display: 'flex',
				flexDirection: 'row',
				gap: 4,
			}}
		>
			<Text
				style={{
					color: '#F5841F',
					fontWeight: '600',
				}}
			>
				Sale ends in
			</Text>
			<Box
				style={{
					display: 'flex',
					flexDirection: 'row',
					gap: 2,
				}}
			>
				<Text
					style={{
						backgroundColor: '#F5841F',
						color: '#FFF',
						fontWeight: '600',
						paddingLeft: 4,
						paddingRight: 4,
					}}
				>
					00
				</Text>
				<Text
					style={{
						color: '#F5841F',
						fontWeight: '500',
					}}
				>
					:
				</Text>
				<Text
					style={{
						backgroundColor: '#F5841F',
						color: '#FFF',
						fontWeight: '600',
						paddingLeft: 4,
						paddingRight: 4,
					}}
				>
					00
				</Text>
				<Text
					style={{
						color: '#F5841F',
						fontWeight: '500',
					}}
				>
					:
				</Text>
				<Text
					style={{
						backgroundColor: '#F5841F',
						color: '#FFF',
						fontWeight: '600',
						paddingLeft: 4,
						paddingRight: 4,
					}}
				>
					00
				</Text>
			</Box>
		</Box>
	)
}

export default FlashSaleCountdown
