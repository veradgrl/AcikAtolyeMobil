import React, {useState} from 'react';
import {StatusBar, Switch, View} from 'react-native';

const MySwitch = () => {
  const [isChecked, setIsChecked] = useState(false);
  const toggleIsChecked = () => setIsChecked(value => !value);
  return (
    <View>
      <Switch
        value={isChecked}
        onValueChange={toggleIsChecked}
        thumbColor={isChecked ? '#fff' : '#fff'}
        trackColor={{true: '#7F3DFF', false: '#EEE5FF'}}
        disabled={false}
      />
    </View>
  );
};
export default MySwitch;
