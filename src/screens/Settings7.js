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
import Download from '../../assets/svg/Download';

const Settings1 = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <View style={styles.titleContainer}>
          <TouchableOpacity>
            <Arrow />
          </TouchableOpacity>
          <Text style={styles.titleText}>Export Data</Text>
        </View>

        <Text style={styles.text}>What data do you want to export?</Text>

        <View style={styles.inputContainer}>
          <TextInput style={styles.textInput} editable={false}>
            All
          </TextInput>
          <TouchableOpacity>
            <Text>V</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.text}>Which time rate range?</Text>

        <View style={styles.inputContainer}>
          <TextInput style={styles.textInput} editable={false}>
            Last 30 days
          </TextInput>
          <TouchableOpacity>
            <Text>V</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.text}>What format do you want to export?</Text>

        <View style={styles.inputContainer}>
          <TextInput style={styles.textInput} editable={false}>
            CSV
          </TextInput>
          <TouchableOpacity>
            <Text>V</Text>
          </TouchableOpacity>
        </View>

        {/* BİTMEDİ  */}

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Download />
            <Text style={styles.buttonText}>Export</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Settings1;

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
    marginBottom: 16,
    paddingVertical: 16,
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

  text: {
    color: '#161718',
    fontSize: 16,
    fontWeight: '500',
  },

  inputContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#F1F1FA',
    borderWidth: 1,
    borderRadius: 16,
    paddingHorizontal: 16,
    marginTop: 12,
    marginBottom: 24,
  },

  textInput: {
    color: '#0E0D0F',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 18,
  },

  buttonContainer: {
marginTop:200
  },

  button: {    backgroundColor: '#7F3DFF',
    width: '100%',
    height: 56,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    flexDirection: 'row',
  },

  buttonText: {
    color:'#FCFCFC',
    fontSize:18,
    fontWeight:'600',
    marginLeft:10
  },
});
