import React from 'react';
import {
  Text,
  SafeAreaView,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Arrow from '../../assets/svg/Arrow';

const OnBoarding7 = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
      <View style={styles.titleContainer}>
          <TouchableOpacity onPress={()=> navigation.goBack ()}>
            <Arrow />
          </TouchableOpacity>
          <Text style={styles.titleText}>Login</Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputText}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            clearButtonMode="always"
            placeholder="Email"
            placeholderTextColor="#91919F"></TextInput>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputText}
            autoCapitalize="none"
            autoCorrect={false}
            clearButtonMode="always"
            placeholder="Password"
            placeholderTextColor="#91919F"
            secureTextEntry={true}>
            </TextInput>
        </View>

        <View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
          onPress={()=> navigation.navigate ('OnBoarding8')}>
            <Text style={styles.forgotPassword}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity style={styles.lastTextContainer}
          onPress={()=> navigation.navigate ('OnBoarding4')}>
            <Text style={styles.firstText}>
              Don’t have an account yet?{' '}
              <Text style={styles.secondText}>Sign Up</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OnBoarding7;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  body: {
    flex: 1,
    paddingHorizontal: 16,

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

  button: {
    display: 'flex',
    width: '100%',
    height: 56,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    backgroundColor: '#7F3DFF',
    marginTop: 20,
  },

  buttonText: {
    color: '#FCFCFC',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
  },

  forgotPassword: {
    color: '#7F3DFF',
    fontSize: 18,
    fontWeight: 600,
    marginVertical: 35,
    textAlign: 'center',
    justifyContent: 'center',
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
