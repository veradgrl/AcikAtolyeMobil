import React, {useState} from 'react';
import {View} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const MyRoundCheckBox = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <View >
      <BouncyCheckbox
        onValueChange={newValue => setToggleCheckBox(newValue)}
        size={24}
        fillColor="#5233FF"
        bounceEffectn={1.2}
        bounceVelocityIn={0.5}
        innerIconStyle={{borderWidth: 1.9}}
      />
    </View>
  );
};

export default MyRoundCheckBox;
