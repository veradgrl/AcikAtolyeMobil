import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {TextInput} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Vera from '../../assets/svg/Vera';

const SignUp = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');

  const handleLogin = () => {
    if (
      email === '' ||
      email === null ||
      password === '' ||
      password === null ||
      name === '' ||
      name === null ||
      surname === '' ||
      surname === null
    ) {
      console.log('kdjfsd');
      Alert.alert('Form Error', 'Please Enter Your Email', [
        {text: 'Ok', style: 'cancel'},
      ]);
    } else {
      //navigation.navigate('BottomTab');
    }
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <View style={styles.header}>
          <SafeAreaView style={styles.headerImage}>
            <Vera />
          </SafeAreaView>

          <Text style={styles.title}>Sign up</Text>

          <Text style={styles.subtitle}>
            Get access to your profile and more.
          </Text>
        </View>

        <View style={styles.form}>
          <View style={styles.input}>
            <Text style={styles.inputLabel}>Name</Text>
            <TextInput
              //vvvvvvv
              autoCorrect={false}
              keyboardType="default"
              onChangeText={name => setName(name)}
              placeholder="Enter your name"
              placeholderTextColor="#FED9DA"
              style={styles.placeholder}
            />
          </View>

          <View style={styles.input}>
            <Text style={styles.inputLabel}>Surname</Text>
            <TextInput
              //vvvvvvv
              autoCorrect={false}
              keyboardType="default"
              onChangeText={surname => setSurname(surname)}
              placeholder="Enter your surname"
              placeholderTextColor="#FED9DA"
              style={styles.placeholder}
            />
          </View>

          <View style={styles.input}>
            <Text style={styles.inputLabel}>Email adress</Text>
            <TextInput
              //vvvvvvv
              autoCapitalize="none"
              autoCorrect={false}
              clearButtonMode="while-editing"
              keyboardType="email-address"
              onChangeText={email => setEmail({...form, email})}
              placeholder="john@example.com"
              placeholderTextColor="#FED9DA"
              style={styles.placeholder}
              value={email.email}
            />
          </View>

          <View style={styles.input}>
            <Text style={styles.inputLabel}>Password</Text>
            <TextInput
              //vvvvvvv
              autoCapitalize="none"
              autoCorrect={false}
              clearButtonMode="while-editing"
              onChangeText={password => setPassword({...form, password})}
              placeholder="******"
              placeholderTextColor="#FED9DA"
              style={styles.placeholder}
              // vvvvv ????
              secureTextEntry={true}
              value={password.password}
            />
          </View>

          <View style={styles.formAction}>
            <TouchableOpacity
              onPress={() => {
                handleLogin();
              }}>
              <View style={styles.btn}>
                <Text style={styles.btnText}>Sign in</Text>
              </View>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ForgottenPassword');
            }}>
            <Text style={styles.forgot}>Forgot pasword ?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Login');
          }}
          style={{marginTop: 'auto'}}>
          <Text style={styles.formFooter}>
            Already have an account ?{' '}
            <Text style={{textDecorationLine: 'underline'}}>Sign up</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: '#FCFFE0',
  },
  container: {
    padding: 24,
    flex: 1,
  },
  title: {
    fontSize: 27,
    fontWeight: '700',
    color: '#75A47F',
    marginBottom: 6,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#BACD92',
    textAlign: 'center',
  },

  // HEADER
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 36,
  },
  headerImage: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    //align items-self-content farkı ???
    marginBottom: 10,
  },

  // FORM
  form: {
    marginBottom: 24,
    paddingHorizontal: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  formAction: {
    marginTop: 4,
    marginBottom: 16,
  },
  forgot: {
    fontSize: 16,
    fontWeight: '600',
    color: '#BACD92',
    textAlign: 'center',
  },
  formFooter: {
    fontSize: 15,
    fontWeight: '600',
    color: '#75A47F',
    textAlign: 'center',
    letterSpacing: 0.15,
  },
  // INPUT
  input: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 17,
    fontWeight: '600',
    color: '#747567',
    marginBottom: 8,
  },
  placeholder: {
    height: 50,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '500',
    color: '#747567',
    borderWidth: 1,
    borderColor: '#FED9DA',
    borderStyle: 'solid',
  },
  // BUTTON
  btn: {
    flexDirection: 'row',
    // alignItems:'center',
    justifyContent: 'center',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: '#FED9DA',
    borderColor: '#FFAECB',
  },
  btnText: {
    fontSize: 18,
    // vvvvvvvv ??
    lineHeight: 26,
    fontWeight: '600',
    color: '#747567',
  },
});
