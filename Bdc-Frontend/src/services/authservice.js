import axios from 'axios';
const baseURL = 'http://localhost:5000/api';

export class AuthService {

  constructor() {
  }

  signup(authData) {
    const url = `${baseURL}/users/createPassword`;
    return axios.post(url, authData);
  }

  login(authData) {
    const url = `${baseURL}/users/login`;
    return axios.post(url, authData);
  }

  createUser(user) {
    const url = `${baseURL}/users/add`;
    return axios.post(url, user);
  }

  updatePassword(_id) {

    const url = `${baseURL}/users/password/:id`;
    // Vue.localStorage.get('token')

    //const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZDM5ZTBmNzlmNmYyYjA3OWNlNjUxMzQiLCJyb2xlIjoib3BlcmF0b3IiLCJpYXQiOjE1NjQxNjc5MjYsImV4cCI6MTU2NDE3MTUyNn0.Auz-SP6-XRWxek0pc6kER8MSwhiTMgic7-PTgmnmrMs";
    const token = localStorage.getItem('token')
    return axios.put(url, _id, {
      headers: {
        //"Authorization":  `Bearer ${token}`,
        "Authorization": token,
        "Content-Type": "application/json"
      },
    });
  }

}