import axios from 'axios';

const http = axios.create({
  baseURL: 'http://localhost:5103/api/',
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('userToken')}`
  }
});

export class TheProductBackendService {
  async getAll() {
    const response = await http.get('productos');
    return response.data;
  }

  async getProductDetail(id) {
    const response = await http.get(`productos/${id}`);
    return response.data;
  }
}