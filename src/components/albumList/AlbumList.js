import React, {Component} from 'react'
import {ScrollView} from 'react-native';
import AlbumDetail from '../albumDetail/AlbumDetail'
import AlbumsService from '../../../services/albumsService/AlbumsService'

class AlbumList extends Component {

  state = {
    albums: []
  };

//getting data.
  componentWillMount() {
    AlbumsService.getAlbumsList()
      .then(response => this.setState(
        {albums: response.data}
        )
      );
  }

  //mapping over the albums array and creating albums list.
  renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetail
        key={album.title}
        album={album}
      />
    );
  }

  render() {
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    )
  }
}

export default AlbumList;