// Redux
import { useBinxSelector } from '../redux/store'

// Gluestack
import { Box, Text } from '@gluestack-ui/themed'

// Components
import Login from '../components/Login'
import Profile from '../components/Profile'

export default function ProfileScreen() {
	const auth = useBinxSelector(({ auth }) => auth)

	if (!auth.accessToken) return <Login />

	return <Profile />
}
