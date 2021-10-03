import IRouteProps from '../library/RouteProps';
import AboutScreen from '../screens/About';
import HomeScreen from '../screens/Home';

const routes: IRouteProps[] = [
    {
        name: 'Home',
        component: HomeScreen
    },
    {
        name: 'About',
        component: AboutScreen
    }
];

export default routes;
