import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";

// importação das telas
import HomeScreen from "./src/pages/HomeScreen";
import NewScreen from "./src/pages/NewScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarInactiveBackgroundColor: "#16DB65",
          tabBarActiveBackgroundColor: "#058C42",
          tabBarActiveTintColor: "#FFF",
          tabBarInactiveTintColor: "#020202",
          tabBarShowLabel: false,
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ size, color }) => (
              <MaterialIcons name="home" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="New"
          component={NewScreen}
          options={{
            tabBarIcon: ({ size, color }) => (
              <FontAwesome name="plus-circle" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
