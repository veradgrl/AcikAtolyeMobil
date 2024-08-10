import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import ArrowWhite from '../../assets/svg/ArrowWhite';

const ExpenseNew = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <View style={styles.firstBody}>

        <View style={styles.titleContainer}>
          <TouchableOpacity>
            <ArrowWhite />
          </TouchableOpacity>
          <Text style={styles.titleText}>Expense</Text>
        </View>
          <Text style={styles.howMuch}>How much?</Text>
          <Text style={styles.moneyAmount}>$0</Text>
        </View>

        <View style={styles.secondBody}>
          <View style={styles.firstInput}>
            <TextInput style={styles.category}>Category</TextInput>
            <TouchableOpacity>
              <Text>V</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TextInput>Description</TextInput>
            <TouchableOpacity>
              <Text>V</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TextInput>Wallet</TextInput>
            <TouchableOpacity>
              <Text>V</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity>
              <Text>Add attachment</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text>Repeat</Text>
            <Text>Repeat transaction</Text>
            <TouchableOpacity>
              <Text>o</Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity>
              <Text>Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ExpenseNew;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  body: {
    flex: 1,
    backgroundColor: '#FD3C4A',
  },

  firstBody: {
    paddingHorizontal: 16,
  },

  titleContainer: {
    flexDirection: 'row',
    marginTop: 16,
    marginBottom: 60,
  },

  titleText: {
    color: '#FFF',
    textAlign: 'center',
    width: 247,
    fontSize: 18,
    fontWeight: '600',
  },
howMuch:{
  color:'#fff',
  fontSize:18,
  fontWeight:'600',
  opacity:0.64
},
moneyAmount:{
  color:'#fff',
  fontSize:64,
  fontWeight:'600'
},

  secondBody: {
    width: '100%',
    height: 500,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    flexDirection: 'column',
    marginTop: 16,
    paddingHorizontal: 16,
  },
});
