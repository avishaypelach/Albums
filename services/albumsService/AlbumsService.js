import axios from 'axios';

export default {
    getAlbumsList: function () {
      return axios.get('https://rallycoding.herokuapp.com/api/music_albums');
    }
}