import axios from 'axios';

const http = axios.create({
  baseURL: 'http://localhost:3000/'
});

export class ProductCatalogService {
  async getAll() {
    const response = await http.get('productos');
    return response.data;
  }
  async getProductDetail(id) {
    const response = await http.get(`productos/${id}`);
    return response.data;
  }
}