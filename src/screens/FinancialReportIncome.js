import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Salary from '../../assets/svg/Salary';

const FinancialReportIncome = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <View style={styles.lineContainer}>
          <View style={styles.line} />
          <View style={styles.line1} />
          <View style={styles.line} />
          <View style={styles.line} />
        </View>

        <View style={styles.firstTextContainer}>
          <Text style={styles.firstText}>This Month</Text>
        </View>

        <View style={styles.secondTextContainer}>
          <Text style={styles.secondText}>You Earned 💰</Text>
        </View>

        <View style={styles.moneyAmountContainer}>
          <Text style={styles.moneyAmountText}>$ 6000</Text>
        </View>

        <View style={styles.secondBody}>
          <View style={styles.secondBTContainer}>
            <Text style={styles.secondBodyText}>
              your biggest income is from
            </Text>
          </View>

          <View style={styles.salaryContainer}>
            <View style={styles.salaryIcon}>
              <Salary />
            </View>
            <Text style={styles.salaryText}>Salary</Text>
          </View>

          <Text style={{fontSize: 36, fontWeight: '500', color: '#000'}}>
            $ 5000
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FinancialReportIncome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00A86B',
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
  },
  secondText: {
    color: '#fff',
    fontSize: 32,
    fontWeight: '700',
    lineHeight: 40,
  },

  moneyAmountContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  moneyAmountText: {
    color: '#fff',
    fontSize: 64,
    fontWeight: '700',
    lineHeight: 80,
  },

  secondBody: {
    backgroundColor: '#fff',
    width: '100%',
    height: 230,
    borderRadius: 24,
    marginTop: 110,
    alignItems: 'center',
  },

  secondBTContainer: {
    width: '60%',
    alignItems: 'center',
  },
  secondBodyText: {
    color: '#000',
    fontSize: 24,
    fontWeight: '600',
    marginTop: 16,
    marginBottom: 14,
  },
  salaryContainer: {
    flexDirection: 'row',
    borderStyle: 'solid',
    borderColor: '#E3E5E5',
    borderWidth: 1,
    borderRadius: 24,
    padding: 16,
    backgroundColor: '#FCFCFC',
    marginBottom: 8,
  },
  salaryIcon: {
    backgroundColor: '#CFFAEA',
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    padding: 8,
    marginRight: 8,
  },
  salaryText: {
    color: '#000',
    fontSize: 18,
    fontWeight: '600',
  },
});
