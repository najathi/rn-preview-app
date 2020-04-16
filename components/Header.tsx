import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

import Colors from '../constants/colors';
import Fonts from '../constants/fonts';
import TouchableNative from '../components/TouchableNative';

const Header = props => {

    const nextPage = props.page >= props.maxPage ? 1 : props.page + 1;

    return (
        <TouchableNative onPressed={() => { props.setPage(nextPage) }}>
            <View style={styles.header}>
                <Text style={{ ...styles.headerTitle, ...props.headerTitleStyle }}>{props.title}</Text>
            </View>
        </TouchableNative>
    );

};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: Fonts.QuicksandBold
    }
});

export default Header;