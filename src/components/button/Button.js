import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './style';

const Button = ({opPress, children}) => {

  return (
    <TouchableOpacity onPress={opPress} style={styles.styles.buttonStyle}>
      <Text style={styles.styles.textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;