import React, {useEffect, useState} from 'react';
import {
  Text,
  SafeAreaView,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView
} from 'react-native';
import Arrow from '../../assets/svg/Arrow';

const OnBoarding5_6 = ({navigation}) => {
  const [timeLeft, setTimeLeft] = useState(5 * 60 * 1000);

  useEffect(() => {
    if (timeLeft <= 0) return;

    // Her saniye bir geri sayım yap
    const timer = setTimeout(() => {
      setTimeLeft(prevTime => prevTime - 1000);
    }, 1000);

    return () => clearTimeout(timer); // Temizlik için
  }, [timeLeft]);

  // Kalan süreyi dakika ve saniye formatına dönüştür
  const formatTime = time => {
    const minutes = Math.floor(time / 60000);
    const seconds = ((time % 60000) / 1000).toFixed(0);
    return `${0}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <ScrollView>
        <View style={styles.titleContainer}>
          <TouchableOpacity>
            <Arrow />
          </TouchableOpacity>
          <Text style={styles.titleText}>Verification</Text>
        </View>

        <View style={styles.mainTextContainer}>
          <Text style={styles.mainText}>Enter your {''} Verification Code</Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputText}
            keyboardType="number-pad"
            clearButtonMode="while-editing"
            placeholder="Verification Code"
            placeholderTextColor="#91919F"></TextInput>
        </View>

        {/* <View style={styles.timerContainer}>
            <Text style={styles.timerText}>04:59</Text>
        </View> */}

        <View style={styles.timerContainer}>
          <Text style={styles.timerText}>{formatTime(timeLeft)}</Text>
        </View>

        <View style={styles.secondaryTextContainer}>
          <Text style={styles.secondaryText}>
            We send verification code to your email{' '}
            <Text style={{color: '#7F3DFF'}}> brajaoma*****@gmail.com.</Text>
            <Text> You can check your inbox.</Text>
          </Text>
        </View>

        <View>
          <TouchableOpacity>
            <Text style={styles.lastText}>
              I didn’t received the code. Send again.
            </Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity style={styles.button}
          onPress={()=> navigation.navigate ('OnBoarding13')}>
            <Text style={styles.buttonText}>Verify</Text>
          </TouchableOpacity>
        </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default OnBoarding5_6;

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

  mainTextContainer: {
    marginTop: 195,
    marginBottom: 40,
  },

  mainText: {
    color: '#0D0E0F',
    fontSize: 36,
    fontWeight: '500',
  },

  inputText: {
    color: '#161719',
    fontSize: 32,
    justifyContent: 'center',
    flexDirection: 'column',
  },

  secondaryTextContainer: {
    marginBottom: 16,
  },

  secondaryText: {
    color: '#292B2D',
    fontSize: 16,
    fontWeight: 500,
  },

  timerContainer: {
    marginTop: 40,
    marginBottom: 16,
  },

  timerText: {
    color: '#7F3DFF',
    fontSize: 18,
    fontWeight: '600',
  },

  lastText: {
    color: '#7F3DFF',
    fontSize: 16,
    fontWeight: 500,
    textDecorationLine: 'underline',
  },

  button: {
    width: '100%',
    height: 56,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    backgroundColor: '#7F3DFF',
    marginTop: 45,
  },

  buttonText: {
    color: '#FCFCFC',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
  },
});
