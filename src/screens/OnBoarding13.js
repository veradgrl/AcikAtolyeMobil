import React from 'react'
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const OnBoarding13 = ({navigation}) => {
  return (
   <SafeAreaView style={styles.container}>
    <View style={styles.body}>

    <View style={styles.mainTextContainer}>
        <Text style={styles.mainText}>Let’s setup your account!</Text>
    </View>

    <View style={styles.secondaryTextContainer}>
        <Text style={styles.secondaryText}>Account can be your bank, credit card or {'              '}
        your wallet.</Text>
    </View>

    <View>
              <TouchableOpacity 
              onPress={() => navigation.navigate ('OnBoarding14')}
              style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Let's Gooo!</Text>
              </TouchableOpacity>
            </View>

    </View>
   </SafeAreaView>
  )
}

export default OnBoarding13

const styles = StyleSheet.create ({

    container :{
        flex:1,
        backgroundColor: '#fff',
    },

    body :{
        flex:1,
        marginHorizontal:16
    },
    
    mainTextContainer :{
        marginTop:67,
        marginBottom:35,
    },
    
    mainText :{
        color:'#212325',
        fontSize:36,
        fontWeight:'500'
    },
    
    
    secondaryText :{
        color:'#212325',
        fontSize:14,
        fontWeight:'500',
        lineHeight:18
    },

    buttonContainer: {
        backgroundColor: '#7F3DFF',
        width: '100%',
        height: 56,
        padding: 8,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 350,
      },
    
      buttonText: {
        color: '#FCFCFC',
        fontSize: 18,
        fontWeight: '600',
      },

})