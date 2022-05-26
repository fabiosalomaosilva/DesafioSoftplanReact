import { getDistance } from 'geolib';

const axios = require('axios');

export const getInfoContries = async (code) => {
	const { data } = await axios.get('https://restcountries.com/v2/alpha/' + code);
	return data;
};

export const getInfoRegions = async (codeOfCountry) => {
  const { data } = await axios.get('https://restcountries.com/v2/alpha/' + codeOfCountry);
	const regions = await axios.get('https://restcountries.com/v3.1/region/' + data.region);
  const countryActual = data;

  const countriesWithLatLng = regions.data.map(region => {
    return{
      name: region.name.common,
      lat: parseFloat(region.latlng[0]),
      lng: parseFloat(region.latlng[1]),
    }
  });

  const countriesDistances = countriesWithLatLng.map(country => {
    return {
      name: country.name,
      latitude: country.lat,
      longitude: country.lng,
      distance: getDistance(
        { latitude: countryActual.latlng[0], longitude: countryActual.latlng[1] },
        { latitude: country.lat, longitude: country.lng }
      ),
    }
  });

  const countriesDistancesSorted = countriesDistances.sort((a, b) => {
    return a.distance - b.distance;
  });

  const fiveCountries = [];
    for (let i = 0; i < 6; i++) {
      fiveCountries.push(countriesDistancesSorted[i]);
    }
    return fiveCountries;
};
