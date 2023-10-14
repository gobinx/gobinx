// Gluestack
import { Box, Image, ScrollView } from '@gluestack-ui/themed'

// Components
import Container from '../components/Container'
import FlashSaleCountdown from '../components/FlashSaleCountdown'
import ProductCategoryBubbles from '../components/ProductCategoryBubbles'
import ProductSlider from '../components/ProductSlider'
import Spacer from '../components/Spacer'
import TopSearchesProductSlider from '../components/TopSearchesProductSlider'

// Assets
// @ts-ignore
import midyearsale from '../assets/images/midyearsale.png'

export default function HomeScreen({ navigation }) {
	return (
		<ScrollView>
			<Spacer />
			<Container>
				<TopSearchesProductSlider />
			</Container>
			<Spacer />
			<Container paddingRight>
				<Box
					style={{
						backgroundColor: 'gray',
						borderRadius: 4,
						height: 120,
						width: '100%',
					}}
				>
					<Image
						source={midyearsale}
						alt='Mid Year Sale'
						style={{
							borderRadius: 8,
							height: '100%',
							overflow: 'hidden',
							width: '100%',
						}}
					/>
				</Box>
			</Container>
			<Spacer />
			<Container>
				<ProductSlider
					navigation={navigation}
					title='Flash Sale'
					centerComponent={<FlashSaleCountdown />}
				/>
			</Container>
			<Spacer />
			<Container>
				<ProductSlider navigation={navigation} title='Best Sellers' />
			</Container>
			<Spacer />
			<Container>
				<ProductSlider navigation={navigation} title='Daily Deals' />
			</Container>
			<Spacer height='2x' />
			<Container>
				<ProductCategoryBubbles />
			</Container>
			<Spacer height='2x' />
			<Container>
				<ProductSlider navigation={navigation} title='New Arrivals' />
			</Container>
		</ScrollView>
	)
}
