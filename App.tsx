// Expo
import { StatusBar } from 'expo-status-bar'

// Redux
import ReduxProvider from './redux/provider'

// GraphQL
import client from './lib/graphql'

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
import LoginScreen from './screens/LoginScreen'
import ProductScreen from './screens/ProductScreen'
import ProfileScreen from './screens/ProfileScreen'
import Navigation from './components/Navigation'

// Components
import Search from './components/Search'
import BinxChat from './components/BinxChat'
import Introduction from './components/Introduction'
import { ApolloProvider } from '@apollo/client'
import { useBinxSelector } from './redux/store'

export default function App() {
	return (
		<ApolloProvider client={client}>
			<ReduxProvider>
				<GluestackUIProvider config={config}>
					<NavigationContainer>
						<Stack.Navigator
							initialRouteName='Home'
							screenOptions={{
								contentStyle: {
									width: '100%',
								},
							}}
						>
							<Stack.Screen
								name='Home'
								component={HomeScreen}
								options={{
									headerTitle: () => <Search />,
								}}
							/>
							<Stack.Screen name='ForYou' component={ForYouScreen} />
							<Stack.Screen name='Inbox' component={InboxScreen} />
							<Stack.Screen
								name='Product'
								component={ProductScreen}
								options={{
									headerShown: false,
								}}
							/>
							<Stack.Screen name='Login' component={LoginScreen} />
							<Stack.Screen
								name='Profile'
								component={ProfileScreen}
								options={{
									headerTitle: 'Profile',
								}}
							/>
							<Stack.Screen name='AskBinx' component={AskBinxScreen} />
						</Stack.Navigator>
						{/* <Introduction /> */}
						<BinxChat />
						<Navigation />
					</NavigationContainer>
					<StatusBar style='auto' />
				</GluestackUIProvider>
			</ReduxProvider>
		</ApolloProvider>
	)
}
