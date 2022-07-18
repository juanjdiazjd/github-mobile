import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TabBarLabel } from './src/helpers/generalStyledComponents';
import HomeScreen from './src/screens/Users';
import theme from './src/theme';
import { icons } from './src/utils/constants';
import Toast from 'react-native-toast-message';
import RepositoryScreen from './src/screens/Repositories';
import dayjs from 'dayjs';

import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

const RepositoryStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const RepositoryStackScreen = () => {
  return (
    <RepositoryStack.Navigator
      screenOptions={() => ({
        headerShown: false,
      })}
    >
      <RepositoryStack.Screen
        name="RepositoryStack"
        component={RepositoryScreen}
      />
    </RepositoryStack.Navigator>
  );
};

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarLabel: ({ focused }) => (
              <TabBarLabel focused={focused}>{route.name}</TabBarLabel>
            ),
            tabBarIcon: ({ focused, size }) => {
              return (
                <Icon
                  name={icons[route.name]}
                  color={focused ? theme.colors.primary : theme.colors.gray}
                  size={size}
                />
              );
            },
            headerShown: false,
          })}
        >
          <Tab.Screen name="Users" component={HomeScreen} />
          <Tab.Screen name="Repositories" component={RepositoryStackScreen} />
        </Tab.Navigator>
      </NavigationContainer>
      <Toast />
    </>
  );
};

export default App;
