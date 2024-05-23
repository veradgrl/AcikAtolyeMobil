import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Logo from '../../assets/svg/Logo';
import BottomTab from '../navigators/TabNavigation/BottomTab';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('SignUp');
    }, 1000);
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <Logo />
    </SafeAreaView>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
