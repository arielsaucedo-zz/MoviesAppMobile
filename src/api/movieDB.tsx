import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '20e418fde4ce6b00a809dd7ec2869fa3',
    language: 'es-Es',
  },
});

export default movieDB;
