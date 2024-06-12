import React from 'react'
import {Text, View, StyleSheet, TouchableOpacity,
    SafeAreaView,
} from 'react-native';
import OB3 from '../../assets/svg/OB3'

const OnBoarding3 = () => {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.body}>

            <View style={styles.imgContainer}>
                <OB3/>
            </View>

            <View style={styles.mainTextContainer}>
                <Text style={styles.mainText}>Planning ahead</Text>
            </View>

            <View style={styles.secondaryTextContainer}>
                <Text style={styles.secondaryText}>Setup your budget for each category
                so you in control</Text>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.primaryButton}>
                    <Text style={styles.primaryButtonText}>Sign Up</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.secondaryButton}>
                    <Text style={styles.secondaryButtonText}>Login</Text>
                </TouchableOpacity>
            </View>

        </View>
    </SafeAreaView>
  )
}

export default OnBoarding3

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
  
    body: {
      flex: 1,
      // paddingHorizontal: 16,
    },
  
    imgContainer: {
      width: 300,
      height: 300,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 30,
      marginHorizontal: 30,
    },
  
    mainTextContainer: {
      marginTop: 40,
      marginHorizontal: 40,
    },
  
    mainText: {
      color: '#212325',
      textAlign: 'center',
      fontSize: 32,
      fontWeight: 700,
      lineHeight: 40,
    },
  
    secondaryTextContainer: {
   
      marginTop: 16,
      marginHorizontal:50,
    },
  
    secondaryText: {
      color:'#91919F',
      textAlign:'center',
      fontSize:16,
      fontWeight:500,
    },
  
    buttonContainer:{
      marginTop:101
    },
  
    primaryButton: {
      backgroundColor:'#7F3DFF',
      display:'flex',
      width:327,
      height:56,
     padding:8,
     justifyContent:'center',
     alignItems:'center',
     borderRadius:16,
     marginHorizontal:16,
     marginBottom:16,
  
    },
  
    primaryButtonText: {
      color:'#FCFCFC',
      textAlign:'center',
      fontSize: 18,
      fontWeight:600,
    },
  
    secondaryButton: {
      backgroundColor:'#EEE5FF',
      display:'flex',
      width:327,
      height:56,
      padding:8,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:16,
      marginHorizontal:16
  
    },
  
    secondaryButtonText: {
      color:'#7F3DFF',
      fontSize: 18,
      fontWeight:600,
    },
  });