// Gluestack
import { Box, ScrollView, Text } from '@gluestack-ui/themed'

// Components
import Container from '../components/Container'
import ProductVariations from '../components/Product/ProductVariations'
import ProductRatings from '../components/Product/ProductRatings'
import Spacer from '../components/Spacer'
import ProductChips from '../components/Product/ProductChips'
import ProductSeller from '../components/Product/ProductSeller'
import ProductSlider from '../components/ProductSlider'
import ProductDescription from '../components/Product/ProductDescription'
import ProductReviews from '../components/Product/ProductReviews'
import ProductActions from '../components/Product/ProductActions'

export default function ProductScreen({ navigation }) {
	return (
		<>
			<ScrollView>
				<Box
					style={{
						backgroundColor: '#CCC',
						height: 400,
					}}
				></Box>
				<Container
					paddingRight={false}
					style={{
						borderBottomWidth: 1,
						borderBottomColor: '#CCC',
						paddingTop: 6,
						paddingBottom: 12,
					}}
				>
					<ProductVariations />
				</Container>
				<Spacer />
				<Container>
					<Text
						style={{
							fontSize: 20,
							fontWeight: '600',
						}}
					>
						iPhone 14 Pro Max 128GB, 8GB RAM, Space Grey
					</Text>
					<Spacer />
					<Box
						style={{
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'space-between',
							width: '100%',
						}}
					>
						<Box>
							<Text
								style={{
									color: '#05707B',
									fontSize: 22,
									fontWeight: '700',
									marginBottom: 4,
								}}
							>
								S$900
							</Text>
							<Text
								style={{
									color: '#AAA',
									fontSize: 18,
									textDecorationLine: 'line-through',
								}}
							>
								S$1200
							</Text>
						</Box>
						<Box>
							<Text>3k sold</Text>
						</Box>
					</Box>
					<Spacer />
				</Container>
				<ProductRatings />
				<Spacer />
				<Container paddingRight={false}>
					<ProductChips />
				</Container>
				<Spacer />
				<Container
					style={{
						borderTopWidth: 1,
						borderTopColor: '#CCC',
						borderBottomWidth: 1,
						borderBottomColor: '#CCC',
						paddingTop: 24,
						paddingBottom: 24,
					}}
				>
					<ProductSeller />
				</Container>
				<Spacer />
				<Container>
					<ProductSlider navigation={navigation} title='From the same shop' />
				</Container>
				<Spacer />
				<Container>
					<ProductDescription />
				</Container>
				<Spacer />
				<Container>
					<ProductReviews />
				</Container>
			</ScrollView>
			<ProductActions />
		</>
	)
}
