import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import ComponentScreen from "./src/screens/componentsScreen";
import ListScreen from "./src/screens/List";
import OverView from "./src/screens/OverView";
import ContentScreen from "./src/screens/ContentScreen";
import StaticUser from "./src/screens/StaticUser";
import ListBuilding from "./src/screens/ListBuilding";
import CountingList from "./src/screens/CountingList";
import CountryCode from "./src/screens/CountryCode";
import NavigatingScreen from "./src/screens/NavigatingScreens";
import ReusableComponents from './src/screens/ReusableComponents';
import ReusableComponent from './src/screens/ReusableComponents';
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen';
import ColorScreen from './src/screens/ColorScreen';
import SquareScreen from './src/screens/SquareScreen';






const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    adress: ComponentScreen,
    List: ListScreen,
    place: OverView,
    content: ContentScreen,
    user: StaticUser,
    ListBuild: ListBuilding,
    Counting: CountingList,
    Country: CountryCode,
    Screen: NavigatingScreen,
    Component: ReusableComponents,
    Image: ImageScreen,
    Counter: CounterScreen,
    Color: ColorScreen,
    Square: SquareScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);
