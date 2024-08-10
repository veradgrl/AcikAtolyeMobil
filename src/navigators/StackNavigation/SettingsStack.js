import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Settings1 from "../../screens/Settings1";
import Settings2 from "../../screens/Settings2";
import Settings3 from "../../screens/Settings3";
import Settings4 from "../../screens/Settings4";
import Settings5 from "../../screens/Settings5";
import Settings6 from "../../screens/Settings6";
import Settings7 from "../../screens/Settings7";
import Settings8 from "../../screens/Settings8";

const Stack = createStackNavigator();

const SettingsStack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Settings1">
            <Stack.Screen name="Settings1" component={Settings1} />
            <Stack.Screen name="Settings2" component={Settings2} />
            <Stack.Screen name="Settings3" component={Settings3} />
            <Stack.Screen name="Settings4" component={Settings4} />
            <Stack.Screen name="Settings5" component={Settings5} />
            <Stack.Screen name="Settings6" component={Settings6} />
            <Stack.Screen name="Settings7" component={Settings7} />
            <Stack.Screen name="Settings8" component={Settings8} />
        </Stack.Navigator>
    )
}

export default SettingsStack;