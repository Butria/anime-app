import axios from 'axios';

export const BASE_URL = 'https://api.jikan.moe/v4/';


export const getAnimeTitles = async (query = '') => {
  try {
    const response = await axios.get(`${BASE_URL}/search/anime`, {
      params: {
        q: query,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const calculateAverageScore = (anime) => {
  if (!anime || !anime.length) {
    return 0;
  }

  const totalScore = anime.reduce((accumulator, season) => {
    return accumulator + season.score;
  }, 0);

  const averageScore = totalScore / anime.length;

  return averageScore;
};

export const searchAnime = async (query) => {
  try {
    const response = await getAnimeTitles(query);
    return response.results;
  } catch (error) {
    throw error;
  }

  
};