import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import OB1 from '../../assets/svg/OB1';
import { ScrollView } from 'react-native-gesture-handler';

const OnBoarding1 = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <ScrollView>
        <View style={styles.imgContainer}>
          <OB1 />
        </View>
        <View style={styles.mainTextContainer}>
          <Text style={styles.mainText}>Gain total control of your money</Text>
        </View>

        <View style={styles.secondaryTextContainer}>
          <Text style={styles.secondaryText}>
            Become your own money manager and make every cent count
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
          onPress={() => navigation.navigate ('OnBoarding4')}
            style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>Sign Up</Text>
          </TouchableOpacity>

          <TouchableOpacity
          onPress={()=>  navigation.navigate ('OnBoarding7') }
          style={styles.secondaryButton}>
            <Text style={styles.secondaryButtonText}>Login</Text>
          </TouchableOpacity>
        </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default OnBoarding1;

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
    alignItems: 'center',
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

  primaryButton: {
    padding: 8,
    width: '100%',
    height: 60,
    backgroundColor: '#7F3DFF',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },

  primaryButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },

  secondaryButton: {
    padding: 8,
    width: '100%',
    height: 60,
    backgroundColor: '#EEE5FF',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },

  secondaryButtonText: {
    color: '#7F3DFF',
    fontSize: 18,
    fontWeight: '600',
  },
});
