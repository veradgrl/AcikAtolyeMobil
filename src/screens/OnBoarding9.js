import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import OB9 from '../../assets/svg/OB9';

const OnBoarding9 = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <View style={styles.imgContainer}>
            <OB9 />
        </View>
        <View style={styles.mainTextContainer}>
          <Text style={styles.mainText}>Your email is on the way</Text>
        </View>

        <View style={styles.secondaryTextContainer}>
          <Text style={styles.secondaryText}>
          Check your email test@test.com and follow the instructions to reset your password
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Back to Login</Text>
          </TouchableOpacity>

        </View>
      </View>
    </SafeAreaView>
  );
};

export default OnBoarding9;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  body: {
    flex: 1,
    paddingHorizontal: 16,
  },

  imgContainer: {
    width: '100%',
    height: 300,
    justifyContent: 'center',
    alignItems:'center',
  },

  mainTextContainer: {
    marginTop: 40,
  },

  mainText: {
    fontSize: 32,
    fontWeight: '700',
    color: '#212325',
    textAlign: 'center',
  },

  secondaryTextContainer: {
    marginTop: 20,
  },

  secondaryText: {
    fontSize: 16,
    color: '#91919F',
    textAlign: 'center',
    fontWeight: '500',
  },

  buttonContainer: {
    marginTop: 85,
  },

  button: {
    padding: 8,
    width: '100%',
    height: 60,
    backgroundColor: '#7F3DFF',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },

  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },

});
