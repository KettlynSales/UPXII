import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home } from "@screens/Home";
import { Doacoes } from "@screens/Doacoes";
import { Profile } from "@screens/Profile";

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
  return (
    <Navigator>
      <Screen name="home" component={Home} />
      <Screen name="doacoes" component={Doacoes} />
      <Screen name="profile" component={Profile} />
    </Navigator>
  );
}
