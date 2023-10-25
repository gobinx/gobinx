// React & React Native
import { TouchableOpacity } from 'react-native'

// Redux
import { useBinxDispatch, useBinxSelector } from '../redux/store'
import { setAccessToken } from '../redux/slices/auth.slice'

// GraphQL
import { useQuery } from '@apollo/client'
import { GET_PROFILE } from '../lib/graphql/queries/auth.queries'

// Gluestack
import { Box, ScrollView, Text } from '@gluestack-ui/themed'

// Components
import ProductSlider from './ProductSlider'

// Icons
import Icon from 'react-native-vector-icons/Feather'
import UserList from '../assets/icons/UserList'
import Cardholder from '../assets/icons/Cardholder'
import NotificationBell from '../assets/icons/NotificationBell'
import Logout from '../assets/icons/Logout'
import Diamond from '../assets/vectors/Diamond'
import RecentlyViewed from '../assets/vectors/RecentlyViewed'
import RibbonCheck from '../assets/vectors/RibbonCheck'
import CustomerSupport from '../assets/vectors/CustomerSupport'
import CreditCard from '../assets/icons/CreditCard'
import Package from '../assets/icons/Package'
import Truck from '../assets/icons/Truck'
import Star from '../assets/icons/Star'

const Profile = () => {
	const { accessToken } = useBinxSelector(({ auth }) => auth)
	const dispatch = useBinxDispatch()

	const { data, loading, error } = useQuery(GET_PROFILE)

	const glanceNavigation = [
		{
			name: 'Binx Diamonds',
			icon: <Diamond height={64} width={64} />,
		},
		{
			name: 'Recently Viewed',
			icon: <RecentlyViewed height={64} width={64} />,
		},
		{
			name: 'My Ratings',
			icon: <RibbonCheck height={64} width={64} />,
		},
		{
			name: 'Customer Support',
			icon: <CustomerSupport height={64} width={64} />,
		},
	]

	const purchaseNavigation = [
		{
			name: 'To Pay',
			icon: <CreditCard height={56} width={56} />,
		},
		{
			name: 'To Ship',
			icon: <Package height={56} width={56} />,
		},
		{
			name: 'To Receive',
			icon: <Truck height={56} width={56} />,
		},
		{
			name: 'To Rate',
			icon: <Star height={56} width={56} />,
		},
	]

	const profileNavigation = [
		{
			name: 'Account Settings',
			icon: <UserList height={24} width={24} />,
		},
		{
			name: 'Payment Information',
			icon: <Cardholder height={24} width={24} />,
		},
		{
			name: 'Notification Settings',
			icon: <NotificationBell height={24} width={24} />,
		},
		{
			name: 'Logout',
			icon: <Logout height={24} width={24} />,
			onPress: () => dispatch(setAccessToken(null)),
		},
	]

	if (loading) {
		return <Text>Loading..</Text>
	}

	if (error) {
		return <Text>Error</Text>
	}

	return (
		<ScrollView>
			<Box
				style={{
					alignItems: 'center',
					backgroundColor: '#00BED1',
					flexDirection: 'row',
					gap: 12,
					paddingTop: 18,
					paddingRight: 12,
					paddingBottom: 18,
					paddingLeft: 12,
					width: '100%',
				}}
			>
				<Box
					style={{
						backgroundColor: '#FFF',
						borderRadius: 999,
						height: 56,
						width: 56,
					}}
				></Box>
				<Box>
					<Text
						style={{
							color: '#FFF',
							fontSize: 18,
							fontWeight: '600',
						}}
					>
						{data.me.first_name} {data.me.last_name}
					</Text>
					<Text
						style={{
							color: '#FFF',
						}}
					>
						Following 20 &nbsp; Followers 24
					</Text>
				</Box>
			</Box>
			<Box
				style={{
					borderBottomColor: '#CCC',
					borderBottomWidth: 1,
					paddingTop: 6,
					paddingRight: 12,
					paddingBottom: 6,
					paddingLeft: 12,
				}}
			>
				<Text>At a glance</Text>
			</Box>
			<Box
				style={{
					flexDirection: 'row',
					gap: 12,
					paddingTop: 24,
					paddingRight: 12,
					paddingBottom: 24,
					paddingLeft: 12,
					width: '100%',
				}}
			>
				{glanceNavigation.map((item, index) => {
					return (
						<TouchableOpacity key={index} style={{ flex: 1 }}>
							<Box
								style={{
									alignItems: 'center',
								}}
							>
								<Box
									style={{
										alignItems: 'center',
										height: 56,
										justifyContent: 'center',
										marginBottom: 12,
										width: 56,
									}}
								>
									{item.icon}
								</Box>

								<Text
									style={{
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
			<Box
				style={{
					borderColor: '#CCC',
					borderTopWidth: 1,
					borderBottomWidth: 1,
					paddingTop: 6,
					paddingRight: 12,
					paddingBottom: 6,
					paddingLeft: 12,
				}}
			>
				<Text>My Purchases</Text>
			</Box>
			<Box
				style={{
					flexDirection: 'row',
					gap: 12,
					paddingTop: 24,
					paddingRight: 12,
					paddingBottom: 24,
					paddingLeft: 12,
					width: '100%',
				}}
			>
				{purchaseNavigation.map((item, index) => {
					return (
						<TouchableOpacity key={index} style={{ flex: 1 }}>
							<Box
								style={{
									alignItems: 'center',
								}}
							>
								<Box
									style={{
										alignItems: 'center',
										height: 56,
										justifyContent: 'center',
										marginBottom: 12,
										width: 56,
									}}
								>
									{item.icon}
								</Box>

								<Text
									style={{
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
			<Box
				style={{
					borderColor: '#CCC',
					borderTopWidth: 1,
					borderBottomWidth: 1,
					paddingTop: 6,
					paddingRight: 12,
					paddingBottom: 6,
					paddingLeft: 12,
				}}
			>
				<Text>Recently Purchased</Text>
			</Box>
			<Box
				style={{
					paddingTop: 24,
					paddingRight: 6,
					paddingBottom: 24,
					paddingLeft: 6,
				}}
			>
				<ProductSlider hideHeader />
			</Box>
			<Box>
				{profileNavigation.map((item, index) => {
					return (
						<TouchableOpacity key={index} onPress={item.onPress}>
							<Box
								style={{
									alignItems: 'center',
									backgroundColor: '#FFF',
									borderColor: '#CCC',
									borderTopWidth: index === 0 ? 1 : 0,
									borderBottomWidth: 1,
									flexDirection: 'row',
									gap: 12,
									paddingTop: 16,
									paddingRight: 12,
									paddingBottom: 16,
									paddingLeft: 12,
								}}
							>
								{item.icon}
								<Text>{item.name}</Text>
							</Box>
						</TouchableOpacity>
					)
				})}
			</Box>
		</ScrollView>
	)
}

export default Profile
