import React from 'react';
import {
    Image,
    TouchableOpacity
} from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme} from "@react-navigation/native";


//screens
import {Onboarding, DestinationDetail} from "./screens";

const theme ={
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        border: "transparent",
    }
}

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer theme={theme}>
          <Stack.Navigator
              initialRouteName("")
          >
            {/* Screens */}
            <Stack.Screen 
               name = "Onboarding"
               component = {Onboarding}
               options = {{
                  title: null,
                  headerStyle: {
                      backgroundColor: COLORS.white
                  },
                   headerLeft: null,
                   headerRight: () => {
                       <TouchableOpacity
                           style={{ marginRight: SIZES.padding}}
                           onPress = {() => console.log("Pressed") }
                       >
                           <Image 
                               source = {icons.barMenu}
                               resizeMode = "contain"
                               style = {{
                                 width: 25,
                                 height: 25,
                               }}
                           />

                       </TouchableOpacity>
                   }
               }}
            />
          </Stack.Navigator>
        </NavigationContainer>


    )

}

export default App;
