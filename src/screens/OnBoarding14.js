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

const OnBoarding14 = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <ScrollView>
          <View style={styles.firstBody}>
        <View style={styles.titleContainer}>
          <TouchableOpacity>
            <ArrowWhite style={styles.arrow} />
          </TouchableOpacity>
          <Text style={styles.titleText}>Add New Account</Text>
        </View>

        <View style={styles.balanceContainer}>
          <Text style={styles.balanceText}>Balance</Text>
        </View>

        <View>
          <Text style={styles.moneyInflow}>$00.0</Text>
        </View>
        </View>
        <SafeAreaView style={styles.secondBody}>

          <View style={styles.inputContainer}>
            <TextInput style={styles.inputText} placeholder="Name"></TextInput>
          </View>

          <View style={styles.inputContainer}>
            <TextInput style={styles.inputText} placeholder="Account Type"></TextInput>
          </View>

          <View>
            <TouchableOpacity style={styles.buttonContainer}
            onPress={()=> navigation.navigate ('OnBoarding15')}>
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
  firstBody:{
    paddingHorizontal:16
  },

  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 56,
  },

  titleText: {
    color: '#FFFFFF',
    textAlign: 'center',
    width: 247,
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 10,
  },

  balanceContainer: {
    marginTop: 240,
    marginBottom: 10,
  },

  balanceText: {
    color: '#FCFCFC',
    fontSize: 18,
    fontWeight: '600',
    opacity: 0.65,
  },

  moneyInflow: {
    color: '#FCFCFC',
    fontSize: 64,
    fontWeight: '600',
  },

  secondBody: {
    backgroundColor: '#FFFFFF',
    borderTopRightRadius:32,
    borderTopLeftRadius:32,
    width: '100%',
    height: 350,
    flexDirection: 'column',
    marginTop: 8,
    paddingHorizontal: 16,

  },

  inputContainer:{
    borderRadius:16,
    borderColor:'#F1F1FA',
    borderStyle:'solid',
    borderWidth:1,
    marginTop:16,
    paddingHorizontal:16,
    paddingVertical:8
  },

  inputText:{
    color:'#91919F',
    fontSize:16,
  },

  buttonContainer:{
    backgroundColor:'#7F3DFF',
    width:327,
    height:56,
    padding:8,
    borderRadius:16,
    justifyContent:'center',
    alignItems:'center',
    marginTop:40,
  },

  buttonText:{
    color:'#FCFCFC',
    fontSize:18,
    fontWeight:'600'
  },  

});
