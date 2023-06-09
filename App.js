// import react Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


// Create the navigator
const Stack = createNativeStackNavigator();

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import ShoppingLists from './components/ShoppingLists';


const App = () => {

  const firebaseConfig = {
    apiKey: "AIzaSyDsKH1XBrhjFmJPZRC4d2eFS7l8stANqBA",
    authDomain: "shopping-list-demo-6c28a.firebaseapp.com",
    projectId: "shopping-list-demo-6c28a",
    storageBucket: "shopping-list-demo-6c28a.appspot.com",
    messagingSenderId: "121286975446",
    appId: "1:121286975446:web:9505943413d61137460e77"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="ShoppingLists"
      >
        <Stack.Screen
          name="ShoppingLists"
        >
          {props => <ShoppingLists db={db} {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );

}

export default App;


