import { Box, Text } from '@gluestack-ui/themed'

const TopSearchesProductSlider = () => {
	return (
		<Box>
			<Box
				style={{
					marginBottom: 12,
				}}
			>
				<Text
					style={{
						fontSize: 19,
						fontWeight: '600',
					}}
				>
					Binx Top Searches
				</Text>
			</Box>
			<Box
				style={{
					display: 'flex',
					flexDirection: 'row',
					gap: 8,
					overflow: 'scroll',
					width: '100%',
					maxWidth: '100%',
				}}
			>
				<SearchItem text='iPhone 12' />
				<SearchItem text='iPhone 11' />
				<SearchItem text='iPhone 12 Pro Max' />
				<SearchItem text='iPhone 12 Pro' />
			</Box>
		</Box>
	)
}

type SearchItemProps = {
	text: string
}

const SearchItem = (props: SearchItemProps) => {
	return (
		<Box
			style={{
				backgroundColor: '#FFF',
				borderColor: '#CCC',
				borderRadius: 100,
				borderWidth: 1,
				paddingTop: 1,
				paddingRight: 8,
				paddingBottom: 1,
				paddingLeft: 8,
			}}
		>
			<Text>{props.text}</Text>
		</Box>
	)
}

export default TopSearchesProductSlider
