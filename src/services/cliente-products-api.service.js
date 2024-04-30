import axios from 'axios';

const http = axios.create({
  baseURL: 'http://localhost:3000/'
});

export class ProductApiServices {
  async getAll() {
    return await http.get('productos');
  }
}
