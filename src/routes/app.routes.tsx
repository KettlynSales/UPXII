import { Platform } from "react-native";
import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from "@react-navigation/bottom-tabs";

import { HomeInstitution } from "@screens/HomeInstitution";
import { Profile } from "@screens/Profile";
import { InstitutionDetail } from "@screens/InstitutionDetail";

import { Icon, useTheme } from "native-base";
import { Entypo, FontAwesome } from "@expo/vector-icons";
import React = require("react");
import { Home } from "@screens/Home";

type AppRoutes = {
  home: undefined;
  profile: undefined;
  institution: undefined;
};

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

export function AppRoutes() {
  const { sizes, colors } = useTheme();
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.pink[400],
        tabBarInactiveTintColor: colors.gray[200],
        tabBarStyle: {
          backgroundColor: colors.pink[500],
          borderTopWidth: 0,
          height: Platform.OS === "android" ? "auto" : 96,
          paddingBottom: sizes[6],
        },
      }}
    >
      <Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: () => (
            <Icon as={Entypo} name="home" size={8} color="white" />
          ),
        }}
      />
      <Screen
        name="profile"
        component={Profile}
        options={{
          tabBarIcon: () => (
            <Icon
              as={FontAwesome}
              name="user-circle-o"
              size={8}
              color="white"
            />
          ),
        }}
      />
      <Screen
        name="institution"
        component={InstitutionDetail}
        options={{ tabBarButton: () => null }}
      />
    </Navigator>
  );
}
