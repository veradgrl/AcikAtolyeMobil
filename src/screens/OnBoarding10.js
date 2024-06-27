import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Arrow from '../../assets/svg/Arrow';

const OnBoarding10 = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>

      <View style={styles.titleContainer}>
          <TouchableOpacity>
            <Arrow />
          </TouchableOpacity>
          <Text style={styles.titleText}>Reset Password</Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputText}
            autoCapitalize="none"
            autoCorrect={false}
            clearButtonMode="always"
            placeholder="New Password"
            placeholderTextColor="#91919F"
            secureTextEntry={true}></TextInput>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputText}
            autoCapitalize="none"
            autoCorrect={false}
            clearButtonMode="always"
            placeholder="Retype New Password"
            placeholderTextColor="#91919F"
            secureTextEntry={true}></TextInput>
        </View>

        <View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  );
};

export default OnBoarding10;

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
    textAlign: 'center',
    width: 247,
    fontSize: 18,
    fontWeight: 600,
    marginLeft: 10,
  },


  inputContainer: {
    borderRadius: 16,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#F1F1FA',
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginBottom: 32,
  },

  inputText: {
    color: '#91919F',
    fontSize: 16,
    justifyContent: 'center',
    flexDirection: 'column',
  },

  button: {
    width: '100%',
    height: 56,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    backgroundColor: '#7F3DFF',
  },

  buttonText: {
    color: '#FCFCFC',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
  },
});
