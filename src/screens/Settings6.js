import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import Arrow from '../../assets/svg/Arrow';

const Settings5 = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <ScrollView>
          <View style={styles.titleContainer}>
            <TouchableOpacity>
              <Arrow />
            </TouchableOpacity>
            <Text style={styles.titleText}>Notifications</Text>
          </View>

          <View style={styles.settingContainer}>
            <View>
              <Text style={styles.firstText}>Expense Alert</Text>
              <Text style={styles.secondText}>Get notification about your</Text>
              <Text  style={styles.secondText}>expenses</Text>
            </View>
            <TouchableOpacity>
              <Text>{'o'}</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.settingContainer}>
            <View>
              <Text style={styles.firstText}>Budget</Text>
              <Text style={styles.secondText}>Get notification when your</Text>
              <Text style={styles.secondText}>budget exceeding the limit</Text>
            </View>

            <TouchableOpacity>
              <Text>{'o'}</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.settingContainer}>
            <View>
              <Text style={styles.firstText}>Tips & Articles</Text>
              <Text style={styles.secondText}>Small & useful pieces of pratical</Text>
              <Text style={styles.secondText}>financial advice</Text>
            </View>

            <TouchableOpacity>
              <Text>{'o'}</Text>
            </TouchableOpacity>

          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Settings5;

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
    display: 'flex',
    textAlign: 'center',
    width: 247,
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 10,
  },

  settingContainer: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  firstText: {
    color: '#292B2D',
    fontSize: 16,
    fontWeight: '500',
    marginBottom:4
  },

  secondText: {
    color: '#91919F',
    fontSize: 13,
    fontWeight: '500',
    lineHeight:16
  },
});
