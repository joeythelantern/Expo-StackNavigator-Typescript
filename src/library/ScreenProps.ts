import { ParamListBase, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export default interface IScreenProps {
    name: string;
    navigation: StackNavigationProp<any>;
    route: RouteProp<ParamListBase, any>;
}