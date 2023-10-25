// React & React Native
import { Platform, TextInput, TouchableOpacity } from 'react-native'

// Redux
import { useBinxDispatch, useBinxSelector } from '../redux/store'
import { toggleBinx } from '../redux/slices/binx.slice'

// Gluestack
import { Box, Image, KeyboardAvoidingView, Text } from '@gluestack-ui/themed'

// Assets
// @ts-ignore
import askBinx from '../assets/images/askbinx.png'

// Packages
import { AntDesign } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'

const BinxChat = () => {
	const binx = useBinxSelector((state) => state.binx)
	const dispatch = useBinxDispatch()

	if (!binx.open) {
		return null
	}

	return (
		<Box
			style={{
				backgroundColor: '#1f3835',
				height: '100%',
				position: 'absolute',
				width: '100%',
				zIndex: 999,
			}}
		>
			<Box
				style={{
					alignItems: 'center',
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'space-between',
					marginTop: 64,
					paddingRight: 12,
					paddingLeft: 12,
				}}
			>
				<TouchableOpacity onPress={() => dispatch(toggleBinx())}>
					<AntDesign name='left' size={18} color='#FFF' />
				</TouchableOpacity>
				<Text
					style={{
						color: '#FFF',
						fontSize: 16,
						fontWeight: '600',
						opacity: 0.5,
					}}
				>
					Speaking to Binx
				</Text>
				<AntDesign name='camerao' size={24} color='#FFF' />
			</Box>
			<Box
				style={{
					alignItems: 'center',
					display: 'flex',
					flex: 1,
					flexGrow: 1,
					justifyContent: 'center',
				}}
			>
				<Text
					style={{
						color: '#FFF',
						marginBottom: 48,
						opacity: 0.5,
					}}
				>
					Ask me anything!
				</Text>
				<Box
					style={{
						alignItems: 'center',
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'center',
					}}
				>
					<Box
						style={{
							zIndex: 10,
						}}
					>
						<Image source={askBinx} alt='Ask Binx' height={96} width={96} />
					</Box>
					<LinearGradient
						style={{
							opacity: 0.3,
							borderRadius: 999,
							height: 124,
							position: 'absolute',
							width: 124,
						}}
						colors={['#079DAC4D', '#FFB1404D']}
					/>
					<LinearGradient
						style={{
							opacity: 0.1,
							borderRadius: 999,
							height: 164,
							position: 'absolute',
							width: 164,
						}}
						colors={['#079DAC4D', '#FFB1404D']}
					/>
				</Box>
			</Box>
			<KeyboardAvoidingView
				behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
			>
				<Box
					style={{
						backgroundColor: '#FFF',
						borderTopStartRadius: 16,
						borderTopEndRadius: 16,
						display: 'flex',
						flexDirection: 'row',
						gap: 8,
						paddingTop: 12,
						paddingRight: 18,
						paddingBottom: 32,
						paddingLeft: 18,
					}}
				>
					<TextInput
						placeholder='Type your message'
						style={{
							borderColor: '#CCC',
							borderRadius: 999,
							borderWidth: 1,
							flex: 1,
							paddingTop: 6,
							paddingRight: 12,
							paddingBottom: 6,
							paddingLeft: 12,
						}}
					/>
					<TouchableOpacity>
						<Box
							style={{
								backgroundColor: '#55bbce',
								borderRadius: 999,
								padding: 6,
							}}
						>
							<AntDesign name='customerservice' size={24} color='#1f3835' />
						</Box>
					</TouchableOpacity>
				</Box>
			</KeyboardAvoidingView>
		</Box>
	)
}

export default BinxChat
