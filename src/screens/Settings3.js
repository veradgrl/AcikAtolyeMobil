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
import MyRoundCheckBox from '../components/MyRoundCheckBox';

const Settings3 = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <ScrollView>
          <View style={styles.titleContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Arrow />
            </TouchableOpacity>
            <Text style={styles.titleText}>Language</Text>
          </View>

          <View style={styles.languageContainer}>
            <TouchableOpacity style={styles.languageBody}>
              <Text style={styles.firstText}>English (EN)</Text>
              <MyRoundCheckBox />
            </TouchableOpacity>
          </View>

          <View style={styles.languageContainer}>
            <TouchableOpacity
              style={styles.languageBody}>
              <Text style={styles.firstText}>Indonesian (ID)</Text>
              <MyRoundCheckBox />
            </TouchableOpacity>
          </View>

          <View style={styles.languageContainer}>
            <TouchableOpacity
              style={styles.languageBody}>
              <Text style={styles.firstText}>Arabic (AR)</Text>
              <MyRoundCheckBox />
            </TouchableOpacity>
          </View>

          <View style={styles.languageContainer}>
            <TouchableOpacity
              style={styles.languageBody}>
              <Text style={styles.firstText}>Chinese (ZH)</Text>
              <MyRoundCheckBox />
            </TouchableOpacity>
          </View>

          <View style={styles.languageContainer}>
            <TouchableOpacity
              style={styles.languageBody}>
              <Text style={styles.firstText}>Dutch (NL)</Text>
              <MyRoundCheckBox />
            </TouchableOpacity>
          </View>

          <View style={styles.languageContainer}>
            <TouchableOpacity
              style={styles.languageBody}>
              <Text style={styles.firstText}>French (FR)</Text>
              <MyRoundCheckBox />
            </TouchableOpacity>
          </View>

          <View style={styles.languageContainer}>
            <TouchableOpacity
              style={styles.languageBody}>
              <Text style={styles.firstText}>German (DE)</Text>
              <MyRoundCheckBox />
            </TouchableOpacity>
          </View>

          <View style={styles.languageContainer}>
            <TouchableOpacity
              style={styles.languageBody}>
              <Text style={styles.firstText}>Italian (IT)</Text>
              <MyRoundCheckBox />
            </TouchableOpacity>
          </View>

          <View style={styles.languageContainer}>
            <TouchableOpacity
              style={styles.languageBody}>
              <Text style={styles.firstText}>Korean (KO)</Text>
              <MyRoundCheckBox />
            </TouchableOpacity>
          </View>

          <View style={styles.languageContainer}>
            <TouchableOpacity
              style={styles.languageBody}>
              <Text style={styles.firstText}>Portuguese (PT)</Text>
              <MyRoundCheckBox />
            </TouchableOpacity>
          </View>

          <View style={styles.languageContainer}>
            <TouchableOpacity
              style={styles.languageBody}>
              <Text style={styles.firstText}>Russian (RU)</Text>
              <MyRoundCheckBox />
            </TouchableOpacity>
          </View>

          <View style={styles.languageContainer}>
            <TouchableOpacity
              style={styles.languageBody}>
              <Text style={styles.firstText}>Spanish (ES)</Text>
              <MyRoundCheckBox />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Settings3;

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

  languageContainer: {
    marginTop: 16,
    paddingVertical: 16,
  },

  languageBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  firstText: {
    color: '#292B2D',
    fontSize: 16,
    fontWeight: '500',
  },

  secondText: {
    color: '#91919F',
    fontSize: 14,
    fontWeight: '500',
  },
});
