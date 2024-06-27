import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Shopping from '../../assets/svg/Shopping';
import Food from '../../assets/svg/Food';

const FinancialReportExpense = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <View style={styles.lineContainer}>
          <View style={styles.line} />
          <View style={styles.line} />
          <View style={styles.line1} />
          <View style={styles.line} />
        </View>

        <View style={styles.firstTextContainer}>
          <Text style={styles.firstText}>This Month</Text>
        </View>

        <View style={styles.secondTextContainer}>
          <Text style={styles.secondText}>
            2 of 12 Budget is exceeds the limit
          </Text>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <View style={styles.shoppingContainer}>
            <View style={styles.shoppingBody}>
              <Shopping />
            </View>
            <Text style={styles.shoppingText}>Shopping</Text>
          </View>

          <View style={styles.shoppingContainer}>
            <View style={styles.foodBody}>
              <Food />
            </View>
            <Text style={styles.shoppingText}>Food</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FinancialReportExpense;

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
    marginTop: 40,
    marginBottom: 140,
  },
  firstText: {
    color: '#fff',
    opacity: 0.72,
    fontSize: 24,
    fontWeight: '600',
  },
  secondTextContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 27,
  },
  secondText: {
    color: '#fff',
    fontSize: 32,
    fontWeight: '700',
    lineHeight: 40,
  },

  shoppingContainer: {
    flexDirection: 'row',
    borderStyle: 'solid',
    borderColor: '#E3E5E5',
    borderWidth: 1,
    borderRadius: 24,
    padding: 16,
    backgroundColor: '#FCFCFC',
    marginBottom: 8,
  },
  shoppingBody: {
    backgroundColor: '#FCEED4',
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    padding: 8,
    marginRight: 8,
  },
  foodBody: {
    backgroundColor: '#FDD5D7',
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    padding: 8,
    marginRight: 8,
  },
  shoppingText: {
    color: '#000',
    fontSize: 18,
    fontWeight: '600',
  },
});
