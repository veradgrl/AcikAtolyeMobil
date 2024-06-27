import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Arrow from '../../assets/svg/Arrow';

const Settings1 = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <View style={styles.titleContainer}>
          <TouchableOpacity>
            <Arrow />
          </TouchableOpacity>
          <Text style={styles.titleText}>Settings</Text>
        </View>

        <View style={styles.settingContainer}>
          <TouchableOpacity style={{ flexDirection:'row', justifyContent:'space-between' }}>
            <Text style={styles.firstText}>Currency</Text>
            <View style={{flexDirection:'row', alignItems:'center'}}>
            <Text style={styles.secondText}>USD</Text>
            <Text style={styles.secondText}>{'>'}</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.settingContainer}>
          <TouchableOpacity style={{ flexDirection:'row', justifyContent:'space-between' }}>
            <Text style={styles.firstText}>Language</Text>
            <View style={{flexDirection:'row', alignItems:'center'}}>
            <Text style={styles.secondText}>English</Text>
            <Text style={styles.secondText}>{'>'}</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.settingContainer}>
          <TouchableOpacity style={{ flexDirection:'row', justifyContent:'space-between' }}>
            <Text style={styles.firstText}>Theme</Text>
            <View style={{flexDirection:'row', alignItems:'center'}}>
            <Text style={styles.secondText}>Dark</Text>
            <Text style={styles.secondText}>{'>'}</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.settingContainer}>
          <TouchableOpacity style={{ flexDirection:'row', justifyContent:'space-between' }}>
            <Text style={styles.firstText}>Security</Text>
            <View style={{flexDirection:'row', alignItems:'center'}}>
            <Text style={styles.secondText}>Fingerprint</Text>
            <Text style={styles.secondText}>{'>'}</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.settingContainer}>
          <TouchableOpacity style={{ flexDirection:'row', justifyContent:'space-between' }}>
            <Text style={styles.firstText}>Notification</Text>
            <View style={{flexDirection:'row', alignItems:'center'}}>
            <Text style={styles.secondText}>{'>'}</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.settingContainer}>
          <TouchableOpacity style={{ flexDirection:'row', justifyContent:'space-between' }}>
            <Text style={styles.firstText}>About</Text>
            <View style={{flexDirection:'row', alignItems:'center'}}>
            <Text style={styles.secondText}>{'>'}</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.settingContainer}>
          <TouchableOpacity style={{ flexDirection:'row', justifyContent:'space-between' }}>
            <Text style={styles.firstText}>Help</Text>
            <View style={{flexDirection:'row', alignItems:'center'}}>
            <Text style={styles.secondText}>{'>'}</Text>
            </View>
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
   marginBottom:16
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

  settingContainer:{
    marginTop:16,
    paddingVertical:16
  },

  firstText:{
    color:'#292B2D',
    fontSize:16,
    fontWeight:'500'
  },

  secondText:{
    color:'#91919F',
    fontSize:14,
    fontWeight:'500',
  },
});
