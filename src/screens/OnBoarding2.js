import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import OB2 from '../../assets/svg/OB2';

const OnBoarding2 = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <View style={styles.imgContainer}>
          <OB2 />
        </View>

        <View style={styles.mainTextContainer}>
          <Text style={styles.mainText}>Know where your money goes</Text>
        </View>
        <View style={styles.secondaryTextContainer}>
          <Text style={styles.secondaryText}>
            Track your transaction easily, with categories and financial report{' '}
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.primaryButton}
          onPress={()=> navigation.navigate ('OnBoarding4')}>
            <Text style={styles.primaryButtonText}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.secondaryButton}
          onPress={()=> navigation.navigate ('OnBoarding7')}>
            <Text style={styles.secondaryButtonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OnBoarding2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  body: {
    flex: 1,
    paddingHorizontal: 16,
  },

  imgContainer: {
    width: '100%',
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },

  mainTextContainer: {
    marginTop: 40,
  },

  mainText: {
    color: '#212325',
    textAlign: 'center',
    fontSize: 32,
    fontWeight: '700',
    lineHeight: 40,
  },

  secondaryTextContainer: {
    marginTop: 16,
  },

  secondaryText: {
    color:'#91919F',
    textAlign:'center',
    fontSize:16,
    fontWeight:'500',
  },

  buttonContainer:{
    marginTop:52
  },

  primaryButton: {
    backgroundColor:'#7F3DFF',
    width:'100%',
    height:56,
   padding:8,
   justifyContent:'center',
   alignItems:'center',
   borderRadius:16,
   marginBottom:16,

  },

  primaryButtonText: {
    color:'#FCFCFC',
    textAlign:'center',
    fontSize: 18,
    fontWeight:'600',
  },

  secondaryButton: {
    backgroundColor:'#EEE5FF',
    width:'100%',
    height:56,
    padding:8,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:16,
  },

  secondaryButtonText: {
    color:'#7F3DFF',
    fontSize: 18,
    fontWeight:'600',
  },
});
