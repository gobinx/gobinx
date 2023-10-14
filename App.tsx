// Expo
import { StatusBar } from 'expo-status-bar'

// Gluestack
import { GluestackUIProvider } from '@gluestack-ui/themed'
import { config } from '@gluestack-ui/config'

// React Navigation
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

// Screens
import ForYouScreen from './screens/ForYou'
import HomeScreen from './screens/Home'
import ProductScreen from './screens/Product'

export default function App() {
	return (
		<GluestackUIProvider config={config}>
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen name='Home' component={HomeScreen} />
					<Stack.Screen name='ForYou' component={ForYouScreen} />
					<Stack.Screen name='Product' component={ProductScreen} />
				</Stack.Navigator>
			</NavigationContainer>
			<StatusBar style='auto' />
		</GluestackUIProvider>
	)
}
