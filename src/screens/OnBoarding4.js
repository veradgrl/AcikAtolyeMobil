import React, { useState } from 'react';
import {
  Text,
  SafeAreaView,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';
import Arrow from '../../assets/svg/Arrow';
import GoogleIcon from '../../assets/svg/googleIcon';
import MyCheckBox from '../components/MyCheckBox';

const OnBoarding4 = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <View style={styles.titleContainer}>
          <TouchableOpacity
          onPress={()=> navigation.goBack()}>
            <Arrow />
          </TouchableOpacity>
          <Text style={styles.titleText}>Sign Up</Text>
        </View>



        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputText}
            autoCapitalize="words"
            autoCorrect={false}
            clearButtonMode="while-editing"
            placeholder="Name"
            placeholderTextColor="#91919F"></TextInput>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputText}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            clearButtonMode="while-editing"
            placeholder="Email"
            placeholderTextColor="#91919F"></TextInput>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputText}
            autoCapitalize="none"
            autoCorrect={false}
            clearButtonMode="while-editing"
            placeholder="Password"
            placeholderTextColor="#91919F"
            secureTextEntry={true}></TextInput>
        </View>

        <View style={styles.checkboxContainer}>
          <View  style={{marginRight:14}}>
        <MyCheckBox />
        </View>
        <Text style={styles.checkboxText}>
            By signing up, you agree to the{' '}
            <Text style={{color: '#7F3DFF'}}>
              {' '}
              Terms of{'\n'}Service and Privacy Policy
            </Text>
          </Text>
        </View>

        <View>
          <TouchableOpacity style={styles.primaryButton}
          onPress={()=> navigation.navigate ('OnBoarding5_6')}>
            <Text style={styles.primaryButtonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>

        <View>
          <Text style={styles.orWith}>Or</Text>
        </View>

        <View>
          <TouchableOpacity style={styles.secondaryButton}>
            <GoogleIcon style={styles.googleIcon} />
            <Text style={styles.secondaryButtonText}>Sign Up with Google</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
          onPress={()=> navigation.navigate ('OnBoarding7')}>
            <Text style={styles.firstText}>
              Already have an account?{' '}
              <Text style={styles.secondText}>Login</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OnBoarding4;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  body: {
    flex: 1,
    paddingHorizontal:16,
  },

  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 56,
  },

  titleText: {
    color: '#212325',
    display: 'flex',
    textAlign: 'center',
    width: 247,
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 10,
  },

  inputContainer: {
    borderRadius: 16,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#F1F1FA',
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginBottom: 20,
  },

  inputText: {
    color: '#91919F',
    fontSize: 16,
    justifyContent: 'center',
    flexDirection: 'column',
  },

  checkboxContainer: {
    flexDirection: 'row',
  },

  checkboxText: {
    color: '#000',
    fontSize: 14,
    fontWeight: 500,
    lineHeight: 18,
    marginBottom: 27,
  },

  primaryButton: {
    width: 327,
    height: 56,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    backgroundColor: '#7F3DFF',
  },

  primaryButtonText: {
    color: '#FCFCFC',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
  },

  orWith: {
    color: '#91919F',
    marginBottom: 12,
    marginTop: 12,
    fontSize: 14,
    fontWeight: 700,
    textAlign: 'center',
  },

  secondaryButton: {
    flexDirection: 'row',
    width: '100%',
    height: 56,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    backgroundColor: '#F1F1FA',
    marginBottom: 20,
  },

  googleIcon: {
    marginRight: 10,
  },

  secondaryButtonText: {
    color: '#212325',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
  },
  
  firstText: {
    color: '#91919F',
    fontSize: 16,
    fontWeight: '500',
    justifyContent: 'center',
    textAlign: 'center',
  },

  secondText: {
    textDecorationLine: 'underline',
    color: '#7F3DFF',
  },
});
