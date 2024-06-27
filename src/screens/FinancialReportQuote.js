import React from 'react';
import {SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Shopping from '../../assets/svg/Shopping';
import Food from '../../assets/svg/Food';

const FinancialReportQuote = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <View style={styles.lineContainer}>
          <View style={styles.line} />
          <View style={styles.line} />
          <View style={styles.line} />
          <View style={styles.line1} />
        </View>

        <View style={styles.firstTextContainer}>
          <Text style={styles.firstText}>
            “Financial freedom is freedom from fear.”
          </Text>
        </View>

        <View style={styles.secondTextContainer}>
          <Text style={styles.secondText}>-Robert Kiyosaki</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.Button}>
            <Text style={styles.ButtonText}>See the full detail</Text>
          </TouchableOpacity>
        </View>


      </View>
    </SafeAreaView>
  );
};

export default FinancialReportQuote;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7F3DFF',
  },
  body: {
    flex: 1,
    paddingHorizontal: 16,
  },

  lineContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom:140
  },

  line: {
    width: '24%',
    height: 4,
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 4,
  },
  line1: {
    width: '24%',
    height: 4,
    backgroundColor: '#fff',
    borderRadius: 4,
  },

  firstTextContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 14,
  },
  firstText: {
    color: '#fff',
    fontSize: 32,
    fontWeight: '700',
    lineHeight: 40,
  },

secondText:{
color:'#fff',
fontSize:24,
fontWeight:'600',
opacity:0.8
},
buttonContainer:{
    marginTop:81
  },

  Button: {
    backgroundColor:'#fff',
    width:'100%',
    height:56,
   padding:8,
   justifyContent:'center',
   alignItems:'center',
   borderRadius:16,
   marginTop:250,

  },

  ButtonText: {
    color:'#7F3DFF',
    textAlign:'center',
    fontSize: 18,
    fontWeight:'600',
  },

 
});
