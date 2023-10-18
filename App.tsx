// Expo
import { StatusBar } from 'expo-status-bar'

// Redux
import ReduxProvider from './redux/provider'

// Gluestack
import { GluestackUIProvider } from '@gluestack-ui/themed'
import { config } from '@gluestack-ui/config'

// React Navigation
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

// Screens
import AskBinxScreen from './screens/AskBinx'
import ForYouScreen from './screens/ForYou'
import HomeScreen from './screens/Home'
import InboxScreen from './screens/InboxScreen'
import IntroductionScreen from './screens/IntroductionScreen'
import Navigation from './components/Navigation'
import ProductScreen from './screens/Product'
import ProfileScreen from './screens/ProfileScreen'

// Components
import Search from './components/Search'
import BinxChat from './components/BinxChat'
import Introduction from './components/Introduction'

export default function App() {
	return (
		<ReduxProvider>
			<GluestackUIProvider config={config}>
				<NavigationContainer>
					<Stack.Navigator
						initialRouteName='Home'
						screenOptions={{
							headerTitle: () => <Search />,
							contentStyle: {
								width: '100%',
							},
						}}
					>
						<Stack.Screen name='Home' component={HomeScreen} />
						<Stack.Screen name='ForYou' component={ForYouScreen} />
						<Stack.Screen name='Inbox' component={InboxScreen} />
						<Stack.Screen name='Product' component={ProductScreen} />
						<Stack.Screen name='Profile' component={ProfileScreen} />
						<Stack.Screen name='AskBinx' component={AskBinxScreen} />
					</Stack.Navigator>
					{/* <Introduction /> */}
					<BinxChat />
					<Navigation />
				</NavigationContainer>
				<StatusBar style='auto' />
			</GluestackUIProvider>
		</ReduxProvider>
	)
}
