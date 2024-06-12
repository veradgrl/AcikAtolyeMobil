import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput,
  ScrollView
} from 'react-native';
import ArrowWhite from '../../assets/svg/ArrowWhite';

const OnBoarding14 = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <ScrollView>
        <View style={styles.titleContainer}>
          <TouchableOpacity>
            <ArrowWhite style={styles.arrow} />
          </TouchableOpacity>
          <Text style={styles.titleText}>Add New Account</Text>
        </View>

        <View style={styles.balanceContainer}>
          <Text style={styles.balanceText}>Balance</Text>
        </View>

        <View style={styles.moneyContainer}>
          <Text style={styles.moneyInflow}>$00.0</Text>
        </View>

        <SafeAreaView style={styles.secondBody}>

          <View style={styles.inputContainer}>
            <TextInput style={styles.inputText} placeholder="Name"></TextInput>
          </View>

          <View style={styles.inputContainer}>
            <TextInput style={styles.inputText} placeholder="Account Type"></TextInput>
          </View>

          <View>
            <TouchableOpacity style={styles.buttonContainer}>
              <Text style={styles.buttonText}>Continue</Text></TouchableOpacity>
          </View>


        </SafeAreaView>

        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default OnBoarding14;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  body: {
    flex: 1,
    backgroundColor: '#7F3DFF',
  },

  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    display: 'flex',
    margin: 16,
    marginBottom: 56,
  },

  titleText: {
    color: '#FFFFFF',
    display: 'flex',
    textAlign: 'center',
    width: 247,
    fontSize: 18,
    fontWeight: 600,
    marginLeft: 10,
  },

  balanceContainer: {
    marginTop: 240,
    marginLeft: 16,
    marginBottom: 10,
  },

  balanceText: {
    color: '#FCFCFC',
    fontSize: 18,
    fontWeight: 600,
    opacity: 0.65,
  },

  moneyContainer: {
    marginLeft: 16,
  },

  moneyInflow: {
    color: '#FCFCFC',
    fontSize: 64,
    fontWeight: 600,
  },

  secondBody: {
    backgroundColor: '#FFFFFF',
    borderRadius: 32,
    width: 360,
    height: 300,
    flexDirection: 'column',
    marginTop: 8,
  },

  inputContainer:{
    display:'flex',
    borderRadius:16,
    borderColor:'#F1F1FA',
    borderStyle:'solid',
    borderWidth:1,
    marginTop:16,
    marginHorizontal:16,
    paddingHorizontal:16,
    paddingVertical:8
  },

  inputText:{
    color:'#91919F',
    fontSize:16,
  },

  buttonContainer:{
    display:'flex',
    backgroundColor:'#7F3DFF',
    width:327,
    height:56,
    padding:8,
    marginHorizontal:16,
    borderRadius:16,
    justifyContent:'center',
    alignItems:'center',
    marginTop:40,
  },

  buttonText:{
    color:'#FCFCFC',
    fontSize:18,
    fontWeight:600
  },  

});
