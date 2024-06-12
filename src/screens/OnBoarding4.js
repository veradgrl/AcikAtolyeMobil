import React from 'react';
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

const OnBoarding4 = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <View style={styles.titleContainer}>
          <TouchableOpacity>
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
          <Text style={{color: '#7F3DFF', fontSize: 25}}>[ ] </Text>
          <Text style={styles.checkboxText}>
            By signing up, you agree to the{' '}
            <Text style={{color: '#7F3DFF'}}>
              {' '}
              Terms of Service and Privacy Policy
            </Text>
          </Text>
        </View>

        <View>
          <TouchableOpacity style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>

        <View>
          <Text style={styles.orWith}>Or with</Text>
        </View>

        <View>
          <TouchableOpacity style={styles.secondaryButton}>
            <GoogleIcon style={styles.googleIcon} />
            <Text style={styles.secondaryButtonText}>Sign Up with Google</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity>
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
  },

  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    display: 'flex',
    margin: 16,
    marginBottom: 56,
  },

  titleText: {
    color: '#212325',
    display: 'flex',
    textAlign: 'center',
    width: 247,
    fontSize: 18,
    fontWeight: 600,
    marginLeft: 10,
  },

  inputContainer: {
    marginHorizontal: 16,
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
    display: 'flex',
    width: 327,
    height: 56,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    backgroundColor: '#7F3DFF',
    marginHorizontal: 16,
  },

  primaryButtonText: {
    color: '#FCFCFC',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 600,
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
    display: 'flex',
    flexDirection: 'row',
    width: 327,
    height: 56,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    backgroundColor: '#F1F1FA',
    marginHorizontal: 16,
    marginBottom: 20,
  },

  googleIcon: {
    marginRight: 10,
  },

  secondaryButtonText: {
    color: '#212325',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 600,
  },

  firstText: {
    color: '#91919F',
    fontSize: 16,
    fontWeight: 500,
    justifyContent: 'center',
    textAlign: 'center',
  },

  secondText: {
    textDecorationLine: 'underline',
    color: '#7F3DFF',
  },
});
