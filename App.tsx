import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import Header from './components/Header';
import TestOne from './screens/TestOne';
import TestTwo from './screens/TestTwo';

const getFonts = () => Font.loadAsync({
    'Quicksand-Bold': require('./assets/fonts/Quicksand-Bold.ttf'),
    'Quicksand-Light': require('./assets/fonts/Quicksand-Light.ttf'),
    'Quicksand-Medium': require('./assets/fonts/Quicksand-Medium.ttf'),
    'Quicksand-Regular': require('./assets/fonts/Quicksand-Regular.ttf'),
    'Quicksand-SemiBold': require('./assets/fonts/Quicksand-SemiBold.ttf'),
    'Roboto-Black': require('./assets/fonts/Roboto-Black.ttf'),
    'Roboto-BlackItalic': require('./assets/fonts/Roboto-BlackItalic.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
    'Roboto-BoldItalic': require('./assets/fonts/Roboto-BoldItalic.ttf'),
    'Roboto-Italic': require('./assets/fonts/Roboto-Italic.ttf'),
    'Roboto-Light': require('./assets/fonts/Roboto-Light.ttf'),
    'Roboto-LightItalic': require('./assets/fonts/Roboto-LightItalic.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
    'Roboto-MediumItalic': require('./assets/fonts/Roboto-MediumItalic.ttf'),
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Thin': require('./assets/fonts/Roboto-Thin.ttf'),
    'Roboto-ThinItalic': require('./assets/fonts/Roboto-ThinItalic.ttf'),
    'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.otf'),
    'Montserrat-Light': require('./assets/fonts/Montserrat-Light.otf'),
    'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.otf'),
    'Montserrat-SemiBold': require('./assets/fonts/Montserrat-SemiBold.otf'),
});

export default function App() {

    const [fontsLoaded, setFontsLoaded] = useState(false);

    const [page, setPage] = useState(1);

    if (!fontsLoaded) {
        return (
            <AppLoading
                startAsync={getFonts}
                onFinish={() => setFontsLoaded(true)} />
        );
    }

    return (
        <View style={styles.screen}>
            <Header title="Lila" maxPage={2} page={page} setPage={setPage} />
            {page === 1 &&
                <TestOne />
            }
            {page === 2 &&
                <TestTwo />
            }
        </View>
    );

}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
});
