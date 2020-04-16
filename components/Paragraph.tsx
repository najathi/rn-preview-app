import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Fonts from '../constants/fonts';

const Paragraph = props => {
    return (
        <View style={styles.container}>
            <Text style={{ ...styles.content, ...props.style }}>{props.children}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 5,
        marginBottom: 16,
    },
    content: {
        fontSize: 14,
        lineHeight: 22,
        fontFamily: Fonts.RobotoRegular,
    }
});

export default Paragraph;