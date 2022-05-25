const axios = require("axios");

export const getAditionalInfoContries = async (country) => {
  const options = {
    method: 'GET',
    url: 'https://forward-reverse-geocoding.p.rapidapi.com/v1/search',
    params: {q: country, 'accept-language': 'en', polygon_threshold: '0.0'},
    headers: {
      'X-RapidAPI-Host': 'forward-reverse-geocoding.p.rapidapi.com',
      'X-RapidAPI-Key': '27cfaf5a59msh89d58e5d5dd887bp1f3070jsn83db1d3d4bb7'
    }
  };
  const latLong = await axios.request(options);
  return latLong.data[0];
}