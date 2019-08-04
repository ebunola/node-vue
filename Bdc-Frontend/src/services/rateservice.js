import axios from 'axios';
const API_URL = 'http://localhost:5000/api';

export class RateService {

  constructor() {
  }

  getLocations() {
    const url = `${API_URL}/locations/`;
    return axios.get(url).then(response => response.data);
  }

  getCurrencies() {
    const url = `${API_URL}/currency/`;
    return axios.get(url).then(response => response.data);
  }

  createRate(rate){
    const url = `${API_URL}/rates/`;
    return axios.post(url, rate);
  }

  getRates(){
    const url = `${API_URL}/rates/`;
    return axios.get(url).then(response => response.data);
  }

}
