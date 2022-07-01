
import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabBarIcon from "./components/TabBarIcon";
import { PRIMARY_COLOR, DARK_GRAY, BLACK, WHITE } from "./assets/styles";



import { HomeScreen } from './screens/Home';
import { SettingsScreen } from './screens/Settings';
import { DetailsScreen } from './screens/Details';

const Stack = createNativeStackNavigator();


let bottomNavConfig = {
  tabBarOptions: {
    style: { height: 500 }
  }
}
const Tab = createBottomTabNavigator();


export default function App() {

  const [loaded] = useFonts({
    BAHNSCHRIFT: require('./assets/fonts/Bahnschrift/BAHNSCHRIFT.ttf'),
    'Acumin Pro Italic': require('./assets/fonts/Acumin/Acumin-ItPro.otf'),
    'Acumin Pro Bold Italic': require('./assets/fonts/Acumin/Acumin-BdItPro.otf'),

  });

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Tabs"
          options={{
            headerShown: false,
          }}
        >
          {() => (
            <Tab.Navigator
              initialRouteName="Home"
              screenOptions={{
                tabBarStyle: { 
                  backgroundColor: BLACK,
                  height: 70,
                 },
                tabBarShowLabel: false,
              
                
              
 
                activeTintColor: PRIMARY_COLOR,
                inactiveTintColor: WHITE,

                

              }}
            >
            <Tab.Screen
              name="Details"
              component={SettingsScreen}
              options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                  <TabBarIcon
                    focused={focused}
                    iconName="table"
                    />
                ),
              }}
            />
            <Tab.Screen
              name="Home"
              component={HomeScreen}
              options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                  <TabBarIcon
                    focused={focused}
                    iconName="dollar"
                    // text = "Home"
                  />
                ),
              }}
            />
            <Tab.Screen
              name="Settings"
              component={SettingsScreen}
              options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                  <TabBarIcon
                    focused={focused}
                    iconName="cog"
                    // text = "Settings"
                  />
                ),
              }}
            />
          </Tab.Navigator>
          )}
          </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}