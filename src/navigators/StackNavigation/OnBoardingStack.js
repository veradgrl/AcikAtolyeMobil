import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import OnBoarding1 from '../../screens/OnBoarding1';
import OnBoarding2 from '../../screens/OnBoarding2';
import OnBoarding3 from '../../screens/OnBoarding3';
import OnBoarding4 from '../../screens/OnBoarding4';
import OnBoarding5_6 from '../../screens/OnBoarding5_6';
import OnBoarding7 from '../../screens/OnBoarding7';
import OnBoarding8 from '../../screens/OnBoarding8';
import OnBoarding9 from '../../screens/OnBoarding9';
import OnBoarding10 from '../../screens/OnBoarding10';
import OnBoarding13 from '../../screens/OnBoarding13';
import OnBoarding14 from '../../screens/OnBoarding14';
import OnBoarding15 from '../../screens/OnBoarding15';
import OnBoarding16 from '../../screens/OnBoarding16';


const Stack = createStackNavigator ();

const OnBoatdingStack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}  initialRouteName='OnBoarding4'>
            <Stack.Screen name="OnBoarding1" component={OnBoarding1} />
            <Stack.Screen name="OnBoarding2" component={OnBoarding2} />
            <Stack.Screen name="OnBoarding3" component={OnBoarding3} />
            <Stack.Screen name="OnBoarding4" component={OnBoarding4} />
            <Stack.Screen name="OnBoarding5_6" component={OnBoarding5_6} />
            <Stack.Screen name="OnBoarding7" component={OnBoarding7} />
            <Stack.Screen name="OnBoarding8" component={OnBoarding8} />
            <Stack.Screen name="OnBoarding9" component={OnBoarding9} />
            <Stack.Screen name="OnBoarding10" component={OnBoarding10} />
            <Stack.Screen name="OnBoarding13" component={OnBoarding13} />
            <Stack.Screen name="OnBoarding14" component={OnBoarding14} />
            <Stack.Screen name="OnBoarding15" component={OnBoarding15} />
            <Stack.Screen name="OnBoarding16" component={OnBoarding16} />
        </Stack.Navigator>
    )
}

export default OnBoatdingStack;