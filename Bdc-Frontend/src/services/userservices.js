import axios from 'axios';
const API_URL = 'http://localhost:5000/api';

export class UserService {

  constructor() {
  }

  getUsers() {
    const url = `${API_URL}/users`;
    return axios.get(url).then(response => response.data);
  }

}
