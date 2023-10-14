// Gluestack
import { Box } from '@gluestack-ui/themed'

type SpacerProps = {
	height?: number | '2x'
}

const Spacer = (props: SpacerProps) => {
	const defaultHeight = 18

	let height = defaultHeight

	if (props.height === '2x') height = defaultHeight * 2

	return <Box style={{ height: height, width: '100%' }} />
}

export default Spacer
