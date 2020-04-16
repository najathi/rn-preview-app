import React from 'react';
import { View, StyleSheet } from 'react-native';

const TestOne = props => {
    return (
        <View style={styles.container}>{props.children}</View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#f4f4f4",
        flex: 1,
        paddingVertical: 16,
        paddingHorizontal: 16
    }
});

export default TestOne;
