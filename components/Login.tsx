// React & React Native
import { useState } from 'react'
import { Platform } from 'react-native'
import WebView from 'react-native-webview'

// Redux
import { useBinxDispatch, useBinxSelector } from '../redux/store'
import { setAccessToken } from '../redux/slices/auth.slice'

// GraphQL
import { useMutation } from '@apollo/client'
import { LOGIN_MUTATION } from '../lib/graphql/mutations/auth.mutations'

// Gluestack
import {
	Box,
	Button,
	ButtonText,
	Input,
	InputField,
	Text,
} from '@gluestack-ui/themed'

// Components
import Spacer from './Spacer'

const Login = () => {
	const [login, { data, loading, error }] = useMutation(LOGIN_MUTATION)

	const auth = useBinxSelector(({ auth }) => auth)
	const dispatch = useBinxDispatch()

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const [showWebview, setShowWebview] = useState(false)
	const [webviewUrl, setWebviewUrl] = useState('')

	const handleLogin = async () => {
		try {
			const { data } = await login({
				variables: {
					data: {
						email,
						password,
					},
				},
			})

			dispatch(setAccessToken(data.login))
		} catch (e) {
			console.log(e)

			console.log(error)
		}
	}

	const handleGoogleLogin = () => {
		setWebviewUrl('http://localhost:3000/v1/oauth/google')
		setShowWebview(true)
	}

	const onMessage = (event) => {
		const token = event.nativeEvent.data

		dispatch(setAccessToken(token))

		setWebviewUrl('')
		setShowWebview(false)
	}

	return (
		<Box
			style={{
				height: '100%',
				paddingTop: 24,
				paddingRight: 12,
				paddingLeft: 12,
				width: '100%',
				zIndex: 999,
			}}
		>
			<Box
				style={{
					marginBottom: 24,
				}}
			>
				<Text
					style={{
						fontSize: 24,
						textAlign: 'center',
					}}
				>
					Login
				</Text>
			</Box>

			<Box
				style={{
					gap: 12,
				}}
			>
				<Input>
					<InputField
						value={email}
						onChangeText={(text) => setEmail(text)}
						placeholder='Enter your Email'
						autoCapitalize='none'
						autoComplete='email'
					/>
				</Input>
				<Input>
					<InputField
						type='password'
						value={password}
						onChangeText={(text) => setPassword(text)}
						placeholder='Enter your Password'
						autoCapitalize='none'
						autoComplete='password'
					/>
				</Input>
				<Button onPress={handleLogin}>
					<ButtonText>Login</ButtonText>
				</Button>
			</Box>

			<Box
				style={{
					flexDirection: 'row',
					justifyContent: 'space-between',
					marginTop: 12,
				}}
			>
				<Text>Don't have an account?</Text>
				<Text>Create an Account</Text>
			</Box>

			<Spacer />

			<Box
				style={{
					backgroundColor: '#CCC',
					height: 1,
				}}
			/>

			<Spacer />

			{Platform.OS === 'ios' && (
				<>
					<Button
						style={{
							backgroundColor: '#000',
						}}
					>
						<ButtonText>Login with Apple</ButtonText>
					</Button>
					<Spacer />
				</>
			)}

			<Box
				style={{
					flexDirection: 'row',
					gap: 12,
				}}
			>
				<Button
					style={{
						backgroundColor: '#FFF',
						flex: 1,
					}}
					onPress={handleGoogleLogin}
				>
					<ButtonText
						style={{
							color: '#000',
						}}
					>
						Login with Google
					</ButtonText>
				</Button>
				<Button
					style={{
						backgroundColor: '#3368f5',
						flex: 1,
					}}
				>
					<ButtonText>Login with Facebook</ButtonText>
				</Button>
			</Box>

			{showWebview && (
				<WebView
					source={{
						uri: webviewUrl,
					}}
					onMessage={onMessage}
					userAgent='Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; AS; rv:11.0) like Gecko'
					containerStyle={{
						position: 'absolute',
						top: 0,
						right: 0,
						bottom: 0,
						left: 0,
						zIndex: 999,
					}}
				/>
			)}
		</Box>
	)
}

export default Login
