import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import S8 from '../../assets/svg/S8';

const OnBoarding2 = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <View style={styles.imgContainer}>
          <S8 />
        </View>

        <View style={styles.secondaryTextContainer}>
          <Text style={styles.secondaryText}>
          Check your email, we send you the financial report. In certain cases, it might take a little longer, depending on the time period and the volume of activity.
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>Back to Home</Text>
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
    marginTop:60,
    width: '100%',
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },

  secondaryTextContainer: {
    marginTop: 16,
  },

  secondaryText: {
    color:'#292B2D',
    textAlign:'center',
    fontSize:16,
    fontWeight:'500',
  },

  buttonContainer:{
    marginTop:170
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

});
