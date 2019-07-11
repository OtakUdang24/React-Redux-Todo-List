import { createAppContainer, createStackNavigator } from "react-navigation";
import AddNote from "../screens/AddNote";
import Todo from "../screens/Todo";
// import tryRedux from "../tryRedux";

const AppNavigation = createStackNavigator(
  {
    Home: {
        screen: Todo
    },
    Add: {
        screen: AddNote
    }
  },
  {
    initialRouteName: "Home",
    headerMode: "none"
  }
);

export default createAppContainer(AppNavigation);
