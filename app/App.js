import { StackNavigator } from "react-navigation";
import Home from "./containers/Home";
import Post from "./containers/Post";

const App = StackNavigator({
  Home: { screen: Home },
  Post: { screen: Post }
})

export default App;