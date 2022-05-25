const axios = require("axios");

export const getInfoContries = async (code) => {
    const latLong = await axios.get('https://restcountries.com/v2/alpha/' + code);
    return latLong.data;
  };
