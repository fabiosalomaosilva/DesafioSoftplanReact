import axios from 'axios';

export const http = axios.create({
  baseURL: 'https://servicodados.ibge.gov.br/api/v1/',
});

