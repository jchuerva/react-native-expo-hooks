import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import ViewNotes from "../screens/ViewNotes";
import AddNote from "../screens/AddNotes";

const StackNavigator = createStackNavigator(
  {
    ViewNotes: { screen: ViewNotes },
    AddNotes: { screen: AddNote }
  },
  {
    initialRouteName: "ViewNotes",
    headerMode: "none",
    mode: "modal"
  }
);

export default createAppContainer(StackNavigator);
