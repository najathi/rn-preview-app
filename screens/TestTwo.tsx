import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import Heading from '../components/Heading';
import SubHeading from '../components/SubHeading';
import Paragraph from '../components/Paragraph';
import Container from '../components/Container';

import Colors from '../constants/colors';
import Fonts from '../constants/fonts';

const TestTwo = props => {
	return (
		<ScrollView style={styles.screen}>
			<Heading title="Headline" style={styles.heading} headingTitleStyle={styles.headingTitleStyle} headingContentStyle={styles.headingContentStyle}>Mauris rhoncus turpis eu lorem venenatis finibus.</Heading>
			<Container>
				<Paragraph style={styles.paragraph}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rhoncus turpis eu lorem venenatis finibus. Proin vestibulum non orci eget sollicitudin. Aliquam cursus arcu eu leo vestibulum, a ultrices nisl mollis. Suspendisse ligula sem, scelerisque nec lectus sit amet, pharetra ultricies libero. Vivamus a sapien sit amet est tincidunt egestas. Praesent at arcu sed lacus porttitor varius. Integer faucibus nunc urna, nec accumsan enim tristique rhoncus.
				</Paragraph>
				<SubHeading style={styles.subHeading}>Sub Heading</SubHeading>
				<Paragraph style={styles.paragraph}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rhoncus turpis eu lorem venenatis finibus. Proin vestibulum non orci eget sollicitudin. Aliquam cursus arcu eu leo vestibulum, a ultrices nisl mollis. Suspendisse ligula sem, scelerisque nec lectus sit amet, pharetra ultricies libero. Vivamus a sapien sit amet est tincidunt egestas. Praesent at arcu sed lacus porttitor varius. Integer faucibus nunc urna, nec accumsan enim tristique rhoncus.
				</Paragraph>
				<Paragraph style={styles.paragraph}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rhoncus turpis eu lorem venenatis finibus. Proin vestibulum non orci eget sollicitudin. Aliquam cursus arcu eu leo vestibulum, a ultrices nisl mollis. Suspendisse ligula sem, scelerisque nec lectus sit amet, pharetra ultricies libero. Vivamus a sapien sit amet est tincidunt egestas. Praesent at arcu sed lacus porttitor varius. Integer faucibus nunc urna, nec accumsan enim tristique rhoncus.
				</Paragraph>
			</Container>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
	},
	heading: {
		backgroundColor: Colors.accent,
		borderBottomColor: Colors.white
	},
	headingTitleStyle: {
		fontFamily: Fonts.MontserratBold
	},
	headingContentStyle: {
		fontFamily: Fonts.MontserratLight
	},
	paragraph: {
		fontFamily: Fonts.MontserratLight,
	},
	subHeading: {
		fontFamily: Fonts.MontserratSemiBold,
	}
});

export default TestTwo;
