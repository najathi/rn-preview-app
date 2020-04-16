import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Fonts from '../constants/fonts';

const Heading = props => {

    return (
        <View style={{ ...styles.heading, ...props.style }}>
            <View style={styles.container}>
                <Text style={{ ...styles.headingTitle, ...props.headingTitleStyle }}>{props.title}</Text>
                <Text style={{ ...styles.content, ...props.headingContentStyle }}>{props.children}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    heading: {
        backgroundColor: "#ffffff",
        width: '100%',
        height: 73,
        justifyContent: 'center',
    },
    container: {
        paddingHorizontal: 16,
        paddingVertical: 18
    },
    headingTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: Fonts.QuicksandBold
    },
    content: {
        paddingVertical: 5,
        fontSize: 14,
        fontFamily: Fonts.QuicksandMedium
    }
});

export default Heading;