import React, { useState } from 'react';
import CheckBox from '@react-native-community/checkbox';
import { View } from 'react-native';

const MyCheckBox = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <View >
      <CheckBox
        value={toggleCheckBox}
        onValueChange={newValue => setToggleCheckBox(newValue)}
        tintColors={{ true: '#7F3DFF', false: '#7F3DFF' }}
      />

    </View>
  );
};

export default MyCheckBox;
