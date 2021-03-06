import axios from 'axios';

const KEY = 'AIzaSyChoZMYU7Egqp24TE4GZNktYxfYWSk662I';

const youtube = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3'
})

export const fetchPopularData = async () => {
    return await youtube.get('/videos', {
      params: {
        part:  'snippet',
        maxResult: 40,
        key: KEY,
        regionCode: 'JP',
        type:  'video',
        chart: 'mostPopular'
      }
    })
}
