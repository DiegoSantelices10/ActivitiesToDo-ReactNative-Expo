import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NativeBaseProvider } from 'native-base'
import 'react-native-gesture-handler';

import { navigationRef } from './views/RootNavigation';
import Login from "./views/login"
import SignUp from "./views/signUp"
import Home from "./views/home"
import ActivitiesToDo from "./views/activitiesToDo"
import { userData } from './utils/index'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="ActivitiesToDo" component={ActivitiesToDo} options={{ headerShown: false }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

