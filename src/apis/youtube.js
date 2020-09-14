import axios from 'axios';

const KEY = 'AIzaSyCHUfGd6vf06TUpN40M1kD15EkTaT4JGsc';

export default axios.create({
   baseURL: 'https://www.googleapis.com/youtube/v3',
   params: {
       part: 'snippet',
       type: 'video',
       maxResults: 5,
       key: KEY
   }
});