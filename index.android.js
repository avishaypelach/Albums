import React from 'react';
import {AppRegistry, View} from 'react-native';
import Header from './src/components/header/Header'
import AlbumList from './src/components/albumList/AlbumList'


const App = () => {
  return (
    <View style={{flex: 1}}>
      <Header
        headerText={'Albums'}
      />

      <AlbumList/>
    </View>
  )
};

AppRegistry.registerComponent('albums', () => App);







