import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Success from '../../assets/svg/Success';

const OnBoarding16 = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <View style={styles.successContainer}>
          <Success />
        </View>

        <View style={ styles.textContainer}>
          <Text style={styles.text}>You are set!</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OnBoarding16;

const styles =StyleSheet.create({
    
    container :{
        flex:1,
        backgroundColor: '#fff',
    },

    body :{
        flex:1,
        paddingHorizontal:16
    },

    successContainer :{
        width:'100%',
        height:128,
        padding:16,
        justifyContent:'center',
        alignItems:'center',
        marginTop:250,
        marginBottom:16
    },

    textContainer :{
        alignItems:'center',
        justifyContent:'center',
       
    },

    text :{ 
        color:'#212325',
        fontSize:24,
        fontWeight:'500'},
})
