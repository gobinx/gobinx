import { gql } from '@apollo/client'

export const LOGIN_MUTATION = gql`
	mutation Login($data: LoginInput!) {
		login(data: $data)
	}
`
export const REGISTER_MUTATION = gql`
	mutation Register($data: RegisterInput!) {
		register(data: $data)
	}
`
