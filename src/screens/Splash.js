import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';


const Splash = ({navigation}) => {
  // useEffect(() => {
  //   setTimeout(() => {
  //     navigation.replace('SignUp');
  //   }, 1000);
  // }, []);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>MONTRA</Text>
    </SafeAreaView>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7F3DFF'
  },
  text: {
    fontSize:40,
    color:'#fff',
    fontWeight: 'bold',
  }
});
