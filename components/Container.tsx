// React Native
import { ViewStyle } from 'react-native'

// Gluestack
import { Box } from '@gluestack-ui/themed'

type ContainerProps = {
	children: React.ReactNode
	style?: ViewStyle
	paddingRight?: boolean
}

const Container = (props: ContainerProps) => {
	return (
		<Box
			style={{
				alignItems: 'flex-start',
				justifyContent: 'flex-start',
				paddingLeft: 12,
				paddingRight: props.paddingRight ? 12 : 0,
				...props.style,
			}}
		>
			{props.children}
		</Box>
	)
}

Container.defaultProps = {
	paddingRight: true,
}

export default Container
