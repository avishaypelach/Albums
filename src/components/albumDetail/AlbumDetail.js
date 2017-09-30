import React from 'react'
import {Text, View, Image, Linking} from 'react-native';
import Card from '../card/Card';
import CardSection from '../cardSection/CardSection';
import Button from '../button/Button'
import styles from './style'


const AlbumDetail = ({album}) => {
  const {title, artist, thumbnail_image, image, url} = album;

  return (
    <Card>
      <CardSection>
        <View style={styles.styles.thumbnailContainerStyle}>
          <Image
            style={styles.styles.thumbnailStyle}
            source={{uri: thumbnail_image}}
          />
        </View>
        <View style={styles.styles.headerContentStyle}>
          <Text style={styles.styles.headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image
          style={styles.styles.imageStyle}
          source={{uri: image}}
        />
      </CardSection>

      <CardSection>
        <Button opPress={() => Linking.openURL(url)}>
          Buy Now
        </Button>
      </CardSection>
    </Card>
  );
};

export default AlbumDetail;





