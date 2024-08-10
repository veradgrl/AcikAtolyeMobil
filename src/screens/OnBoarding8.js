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

const OnBoarding8 = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>

      <View style={styles.titleContainer}>
          <TouchableOpacity>
            <Arrow />
          </TouchableOpacity>
          <Text style={styles.titleText}>Forgot Password</Text>
        </View>

        <View style={styles.textContainer}>
            <Text style={styles.text}>Don’t worry.</Text>
            <Text style={styles.text}>Enter your email and we’ll send you a link to reset your password.</Text>
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

        <View>
          <TouchableOpacity style={styles.button}
          onPress={()=> navigation.navigate ('OnBoarding9')}>
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  );
};

export default OnBoarding8;

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
    marginBottom: 69,
  },

  titleText: {
    color: '#212325',
    textAlign: 'center',
    width: 247,
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 10,
  },

  textContainer:{
 width:'100%',
 marginBottom:46
  },

  text:{
    color:'#0D0E0F',
    fontSize:24,
    fontWeight:'600',
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
