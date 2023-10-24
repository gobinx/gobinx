// React & React Native
import { useState } from 'react'
import { Platform } from 'react-native'

// GraphQL
import { useMutation, useQuery } from '@apollo/client'
import { LOGIN_MUTATION } from '../lib/graphql/mutations/authMutations'

// Gluestack
import {
	Box,
	Button,
	ButtonText,
	Icon,
	Input,
	InputField,
	Text,
} from '@gluestack-ui/themed'
import { useBinxDispatch, useBinxSelector } from '../redux/store'
import { setAccessToken } from '../redux/slices/authSlice'
import Spacer from './Spacer'

const Login = () => {
	const [login, { data, loading, error }] = useMutation(LOGIN_MUTATION)

	const auth = useBinxSelector(({ auth }) => auth)
	const dispatch = useBinxDispatch()

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

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

			console.log(data)

			dispatch(setAccessToken(data.login))
		} catch (e) {
			console.log(e)

			console.log(error)
		}
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
		</Box>
	)
}

export default Login
