import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from "@react-navigation/bottom-tabs";

import { Home } from "@screens/Home";
import { Doacoes } from "@screens/Doacoes";
import { Profile } from "@screens/Profile";

type AppRoutes = {
  home: undefined;
  doacoes: undefined;
  profile: undefined;
};

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="doacoes" component={Doacoes} />
      <Screen name="profile" component={Profile} />
    </Navigator>
  );
}
