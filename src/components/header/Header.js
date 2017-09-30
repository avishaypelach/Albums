import React from 'react'
import {Text, View} from 'react-native';
import styles from './style'


const Header = (props) => {

  return (
    <View style={styles.styles.viewStyle}>
      <Text style={styles.styles.textStyle}>{props.headerText}</Text>
    </View>
  )
};

export default Header;





