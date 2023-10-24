import { Box, Text } from '@gluestack-ui/themed'
import { useBinxSelector } from '../redux/store'

export default function LoginScreen({ navigation }) {
	const auth = useBinxSelector(({ auth }) => auth)

	if (!auth.accessToken) {
		navigation.navigate('Login')
	}

	return (
		<Box>
			<Text>Login</Text>
		</Box>
	)
}
