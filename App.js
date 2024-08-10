import React from 'react';
import RootNavigator from './src/navigators/RootNavigator';
import OnBoarding1 from './src/screens/OnBoarding1';
import OnBoarding2 from './src/screens/OnBoarding2';
import OnBoarding3 from './src/screens/OnBoarding3';
import OnBoarding4 from './src/screens/OnBoarding4'
import OnBoarding5_6 from './src/screens/OnBoarding5_6'
import OnBoarding7 from './src/screens/OnBoarding7'
import OnBoarding8 from './src/screens/OnBoarding8'
import OnBoarding9 from './src/screens/OnBoarding9'
import OnBoarding10 from './src/screens/OnBoarding10'
import OnBoarding13 from './src/screens/OnBoarding13'
import OnBoarding14 from './src/screens/OnBoarding14'
import OnBoarding15 from './src/screens/OnBoarding15'
import OnBoarding16 from './src/screens/OnBoarding16'
import Settings1 from './src/screens/Settings1'
import Settings2 from './src/screens/Settings2'
import Settings3 from './src/screens/Settings3'
import Settings4 from './src/screens/Settings4'
import Settings5 from './src/screens/Settings5'
import Settings6 from './src/screens/Settings6'
import Settings7 from './src/screens/Settings7'
import Settings8 from './src/screens/Settings8'
import FinancialReportExpense from './src/screens/FinancialReportExpense';
import FinancialReportIncome from './src/screens/FinancialReportIncome';
import FinancialReportBudget from './src/screens/FinancialReportBudget';
import FinancialReportQuote from './src/screens/FinancialReportQuote';
import ExpenseNew from './src/screens/ExpenseNew';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MyCheckBox from './src/components/MyCheckBox';
import MySwitch from './src/components/MySwitch';
import MyRoundCheckBox from './src/components/MyRoundCheckBox';
import SettingsStack from './src/navigators/StackNavigation/SettingsStack';


const Stack = createStackNavigator();

const App = ()=> {
  return (
<RootNavigator/>
  )
}
export default App;












// const App = ()=> {
//   return (
//   <NavigationContainer>
//     <Stack.Navigator
//     initialRouteName='OnBoarding1'
//     screenOptions={{headerShown:false}} >
//  <Stack.Screen name="OnBoarding1" component={OnBoarding1} />
//  <Stack.Screen name="OnBoarding7" component={OnBoarding7} />
//   </Stack.Navigator>
//   </NavigationContainer>
//   )
// }
// export default App;