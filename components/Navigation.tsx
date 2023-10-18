// React & React Native
import React from 'react'
import { TouchableOpacity } from 'react-native'

// Redux
import { useBinxDispatch, useBinxSelector } from '../redux/store'
import { toggleBinx } from '../redux/slices/binxSlice'

// Gluestack
import { Box, Image, Text } from '@gluestack-ui/themed'

// React Navigation
import { useNavigation } from '@react-navigation/native'

// Assets
// @ts-ignore
import askBinx from '../assets/images/askbinx.png'

// Packages
import { AntDesign } from '@expo/vector-icons'

const Navigation = () => {
	const navigation = useNavigation()

	const binx = useBinxSelector((state) => state.binx)
	const dispatch = useBinxDispatch()

	return (
		<>
			<Box
				style={{
					alignItems: 'flex-end',
					borderTopLeftRadius: 24,
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'space-around',
					paddingTop: 18,
					paddingRight: 6,
					paddingBottom: 36,
					paddingLeft: 6,
				}}
			>
				<NavigationItem
					icon='home'
					label='Home'
					onPress={() => navigation.navigate('Home' as never)}
				/>
				<NavigationItem
					icon='shoppingcart'
					label='For You'
					onPress={() => navigation.navigate('ForYou' as never)}
				/>
				<NavigationItem
					featured
					icon='pluscircle'
					label='Ask Binx'
					onPress={() => dispatch(toggleBinx())}
				/>
				<NavigationItem
					icon='inbox'
					label='Inbox'
					onPress={() => navigation.navigate('Inbox' as never)}
				/>
				<NavigationItem
					icon='user'
					label='Profile'
					onPress={() => navigation.navigate('Profile' as never)}
				/>
			</Box>
		</>
	)
}

const NavigationItem = ({
	featured = false,
	icon,
	label,
	onPress,
}: {
	featured?: boolean
	icon: any
	label: string
	onPress: () => void
}) => {
	if (featured) {
		return (
			<TouchableOpacity
				onPress={onPress}
				style={{
					alignItems: 'center',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					position: 'relative',
				}}
			>
				<Image
					source={askBinx}
					alt='Ask Binx'
					style={{ height: 72, position: 'absolute', top: -72, width: 72 }}
				/>
				<Text
					style={{
						fontSize: 14,
						fontWeight: '600',
						marginTop: 6,
					}}
				>
					{label}
				</Text>
			</TouchableOpacity>
		)
	}

	return (
		<TouchableOpacity
			onPress={onPress}
			style={{
				alignItems: 'center',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
			}}
		>
			<AntDesign name={icon} size={24} color='black' />
			<Text
				style={{
					fontSize: 14,
					marginTop: 6,
				}}
			>
				{label}
			</Text>
		</TouchableOpacity>
	)
}

export default Navigation
