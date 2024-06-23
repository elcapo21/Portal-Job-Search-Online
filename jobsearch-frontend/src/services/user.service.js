import axios from 'axios';
import authHeader from '../services/auth-header';

const API_URL = 'http://localhost:8081/api/test/';

class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'all');
  }

  getUserBoard() {
    return axios.get(API_URL + 'user', { headers: authHeader() });
  }

  getRecruiter() {
    return axios.get(API_URL + 'recruiter', { headers: authHeader() });
  }

  getJobSeeker() {
    return axios.get(API_URL + 'jobseeker', { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + 'admin', { headers: authHeader() });
  }
}

export default new UserService();
