// Redux
import { store } from '../../redux/store'

// GraphQL
import {
	ApolloClient,
	ApolloLink,
	HttpLink,
	InMemoryCache,
} from '@apollo/client'

// const BASE_URL = 'http://api.gobinx.com/v1'
const BASE_URL = 'http://localhost:3000/v1'

const httpLink = new HttpLink({
	uri: BASE_URL,
})

const authLink = new ApolloLink((operation, forward) => {
	const state = store.getState()

	const { accessToken } = state.auth

	operation.setContext({
		headers: {
			authorization: accessToken ? `Bearer ${accessToken}` : '',
		},
	})

	return forward(operation)
})

const client = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache(),
})

export default client
