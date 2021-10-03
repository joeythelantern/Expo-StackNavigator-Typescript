import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useLogging } from '../hooks/useLogging';
import IScreenProps from '../library/ScreenProps';

const HomeScreen: React.FunctionComponent<IScreenProps> = props => {
    const [logging] = useLogging('Home Screen');

    useEffect(() => {
        logging.info(props);
    }, [logging]);

    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <Button
                title="About"
                onPress={() => props.navigation.navigate("About")}
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

export default HomeScreen;