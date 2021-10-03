import IScreenProps from "./ScreenProps";

export default interface IRouteProps {
    component: React.FunctionComponent<IScreenProps>;
    name: string;
}
