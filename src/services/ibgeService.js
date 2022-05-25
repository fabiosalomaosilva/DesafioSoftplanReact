import { http } from '../config/ibgeClient';

export const getAditionalInfoContries = async (countries) => {
  let params = '';
  countries.forEach((country) => {
    params = params + `|${country.code},`;
  });
   
  const listCountriesAdInfo = await http.get('paises/', params);
  return listCountriesAdInfo.data;
}