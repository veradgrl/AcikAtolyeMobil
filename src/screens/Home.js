import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  StyleSheet,
  ScrollView,
} from 'react-native';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{flex: 1}}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.headerButton}></TouchableOpacity>
          <Text style={styles.headerTitle}>Home</Text>
          <TouchableOpacity style={styles.headerButton}></TouchableOpacity>
        </View>
        <View style={styles.body}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  body: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor:'#481E14'
  },
  header: {
    backgroundColor: '#000',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  headerButton: {
    width: 40,
    height: 40,
    borderRadius: 99,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },

  
  headerTitle:{
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  }
});
