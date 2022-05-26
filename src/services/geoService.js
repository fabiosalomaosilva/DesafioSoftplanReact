const axios = require("axios");

export const getAditionalInfoContries = async (country) => {
  const options = {
    method: 'GET',
    url: 'https://forward-reverse-geocoding.p.rapidapi.com/v1/search',
    params: {q: country, 'accept-language': 'en', polygon_threshold: '0.0'},
    headers: {
      'X-RapidAPI-Host': 'forward-reverse-geocoding.p.rapidapi.com',
      'X-RapidAPI-Key': process.env.REACT_APP_RAPIDD_API_KEY
    }
  };
  const latLong = await axios.request(options);
  return latLong.data[0];
}

export const getFiveCountriesDIstance = async (country) => {
  
}