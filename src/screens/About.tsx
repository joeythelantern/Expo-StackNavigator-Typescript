import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useLogging } from '../hooks/useLogging';
import IScreenProps from '../library/ScreenProps';

const AboutScreen: React.FunctionComponent<IScreenProps> = props => {
    const [logging] = useLogging('About Screen');

    useEffect(() => {
        logging.info(props);
    }, [logging]);

    return (
        <View style={styles.container}>
            <Text>About Screen</Text>
            <Button
                title="Home"
                onPress={() => props.navigation.navigate("Home")}
            />
            <Button
                title="Pop to Top"
                onPress={() => props.navigation.popToTop()}
            />
            <StatusBar style="auto" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'cyan',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default AboutScreen;