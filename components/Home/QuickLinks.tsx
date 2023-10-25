// React & React Native
import { TouchableOpacity } from 'react-native'

// Gluestack
import { Box, Text } from '@gluestack-ui/themed'

// Assets
import Diamond from '../../assets/vectors/Diamond'
import SaleBadge from '../../assets/vectors/SaleBadge'
import DiscountVouchers from '../../assets/vectors/DiscountVouchers'
import VideoReviews from '../../assets/vectors/VideoReviews'

const QuickLinks = () => {
	const links = [
		{
			name: 'Binx Diamonds',
			icon: <Diamond height={52} width={52} />,
		},
		{
			name: '$0.99 - $10 Shop',
			icon: <SaleBadge height={52} width={52} />,
		},
		{
			name: 'Discount & Vouchers',
			icon: <DiscountVouchers height={52} width={52} />,
		},
		{
			name: 'Video Reviews',
			icon: <VideoReviews height={52} width={52} />,
		},
	]

	return (
		<Box
			style={{
				flexDirection: 'row',
				paddingLeft: 12,
			}}
		>
			{links.map((item, index) => {
				return (
					<TouchableOpacity
						key={index}
						style={{
							flex: 1,
						}}
					>
						<Box>
							<Box
								style={{
									alignItems: 'center',
									justifyContent: 'center',
									marginBottom: 12,
								}}
							>
								{item.icon}
							</Box>
							<Text
								style={{
									fontWeight: '600',
									textAlign: 'center',
								}}
							>
								{item.name}
							</Text>
						</Box>
					</TouchableOpacity>
				)
			})}
		</Box>
	)
}

export default QuickLinks
