import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import ArrowWhite from '../../assets/svg/ArrowWhite';
import Bank1 from '../../assets/svg/Bank1';
import Bank2 from '../../assets/svg/Bank2';
import Bank3 from '../../assets/svg/Bank3';
import Bank4 from '../../assets/svg/Bank4';
import Bank5 from '../../assets/svg/Bank5';
import Bank6 from '../../assets/svg/Bank6';
import Bank7 from '../../assets/svg/Bank7';
import Bank8 from '../../assets/svg/Bank8';

const OnBoarding15 = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <ScrollView>
          <View style={styles.firstBody}>
          <View style={styles.titleContainer}>
            <TouchableOpacity>
              <ArrowWhite style={styles.arrow} />
            </TouchableOpacity>
            <Text style={styles.titleText}>Add New Wallet</Text>
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
              <TextInput
                style={styles.inputText}
                placeholder="Chase"
                placeholderTextColor="#0D0E0F"></TextInput>
            </View>

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputText}
                placeholder="Bank"
                placeholderTextColor="#0D0E0F"></TextInput>
            </View>

            <View style={styles.bankTextContaier}>
              <Text style={styles.bankText}>Bank</Text>
            </View>

            <View >

              <View style={styles.bankTypesContainer}>
              <TouchableOpacity style={styles.bankTypes}>
                <Bank1 />
              </TouchableOpacity>
              <TouchableOpacity style={styles.bankTypes}>
                <Bank2 />
              </TouchableOpacity>
              <TouchableOpacity style={styles.bankTypes}>
                <Bank3 />
              </TouchableOpacity>
              <TouchableOpacity style={styles.bankTypes}>
                <Bank4 />
              </TouchableOpacity>
              </View>

              <View style={styles.bankTypesContainer}>
              <TouchableOpacity style={styles.bankTypes}>
                <Bank5 />
              </TouchableOpacity>
              <TouchableOpacity style={styles.bankTypes}>
                <Bank6 />
              </TouchableOpacity>
              <TouchableOpacity style={styles.bankTypes}>
                <Bank7 />
              </TouchableOpacity>
              <TouchableOpacity style={styles.bankTypes}>
                <Bank8 />
              </TouchableOpacity>
              </View>
            </View>

            <View>
              <TouchableOpacity style={styles.buttonContainer}
              onPress={()=> navigation.navigate ('OnBoarding16')}>
                <Text style={styles.buttonText}>Continue</Text>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default OnBoarding15;

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
    marginTop: 145,
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
    borderTopRightRadius: 32,
    borderTopLeftRadius: 32,
    width: '100%',
    height: 500,
    flexDirection: 'column',
    marginTop: 8,
    paddingHorizontal:16
  },

bankTextContaier:{
  marginTop:16,
  marginBottom:8,
},

bankText :{
  color:'#000000',
  fontSize:16,
  fontWeight:'500'
},

  bankTypesContainer:{
    flexDirection:'row',
    marginVertical:8
  },

  bankTypes:{
    marginRight:8,
    backgroundColor:'#F1F1FA', 
    width:76, 
    height:40, 
    justifyContent:'center',
     alignItems:'center', 
    padding:8,
    borderRadius:8
  },

  inputContainer: {
    borderRadius: 16,
    borderColor: '#F1F1FA',
    borderStyle: 'solid',
    borderWidth: 1,
    marginTop: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },

  inputText: {
    color: '#0D0E0F',
    fontSize: 16,
  },

  buttonContainer: {
    backgroundColor: '#7F3DFF',
    width: '100%',
    height: 56,
    padding: 8,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },

  buttonText: {
    color: '#FCFCFC',
    fontSize: 18,
    fontWeight: '600',
  },
});
