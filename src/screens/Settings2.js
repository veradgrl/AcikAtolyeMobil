import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Arrow from '../../assets/svg/Arrow';
import MyRoundCheckBox from '../components/MyRoundCheckBox';

const Settings2 = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <View style={styles.titleContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Arrow />
          </TouchableOpacity>
          <Text style={styles.titleText}>Currency</Text>
        </View>

        <View style={styles.currencyContainer}>
          <View style={styles.currencyBody}>
            <Text style={styles.firstText}>United States (USD)</Text>
            <MyRoundCheckBox />
          </View>
        </View>
        <View style={styles.currencyContainer}>
          <View style={styles.currencyBody}>
            <Text style={styles.firstText}>Indonesia (IDR)</Text>
            <MyRoundCheckBox />
          </View>
        </View>
        <View style={styles.currencyContainer}>
          <View style={styles.currencyBody}>
            <Text style={styles.firstText}>Japan (JPY)</Text>
            <MyRoundCheckBox/>
          </View>
        </View>
        <View style={styles.currencyContainer}>
          <View style={styles.currencyBody}>
            <Text style={styles.firstText}>Russia (RUB)</Text>
            <MyRoundCheckBox />
          </View>
        </View>
        <View style={styles.currencyContainer}>
          <View style={styles.currencyBody}>
            <Text style={styles.firstText}>Germany (EUR)</Text>
            <MyRoundCheckBox />
          </View>
        </View>
        <View style={styles.currencyContainer}>
          <View style={styles.currencyBody}>
            <Text style={styles.firstText}>Korea (WON)</Text>
            <MyRoundCheckBox />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Settings2;

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
  },

  titleText: {
    color: '#212325',
    textAlign: 'center',
    width: 247,
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 10,
  },

  currencyContainer: {
    marginTop: 16,
    paddingVertical: 16,
  },

  currencyBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  firstText: {
    color: '#292B2D',
    fontSize: 16,
    fontWeight: '500',
  },
});
