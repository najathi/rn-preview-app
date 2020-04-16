import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Fonts from '../constants/fonts';

const SubHeading = props => {
	return (
		<View style={styles.heading}>
			<Text style={{ ...styles.content, ...props.style }}>{props.children}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	heading: {
		flex: 1,
		marginTop: 16,
		marginBottom: 5
	},
	content: {
		fontSize: 16,
		fontFamily: Fonts.QuicksandBold
	}
});

export default SubHeading;