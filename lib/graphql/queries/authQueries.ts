import { gql } from '@apollo/client'

export const GET_PROFILE = gql`
	query {
		me {
			first_name
			last_name
		}
	}
`
