import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import routes from './src/config/routes';
import { useLogging } from './src/hooks/useLogging';

const Stack = createStackNavigator();

export default function App() {
    const [logging] = useLogging('Application');

    useEffect(() => {
        logging.info('Loading application.');
    }, [logging]);

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={'Home'}>
                {routes.map((r, i) => (
                    <Stack.Screen key={i} name={r.name} component={r.component} />
                ))}
            </Stack.Navigator>
        </NavigationContainer>
    );
}
