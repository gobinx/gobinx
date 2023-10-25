// React & React Native
import { Box } from '@gluestack-ui/themed'
import { useState } from 'react'
import { TextInput } from 'react-native'

const Search = () => {
	const [search, setSearch] = useState<string>('')

	return (
		<Box
			style={{
				flex: 1,
			}}
		>
			<TextInput
				style={{
					borderColor: '#CCC',
					borderRadius: 999,
					borderWidth: 1,
					paddingTop: 6,
					paddingRight: 12,
					paddingBottom: 6,
					paddingLeft: 12,
					width: '100%',
				}}
				onChangeText={setSearch}
				value={search}
				placeholder='Search by Conversational AI'
			/>
		</Box>
	)
}

export default Search
