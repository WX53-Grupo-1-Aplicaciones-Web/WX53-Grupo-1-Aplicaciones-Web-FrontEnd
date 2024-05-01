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

  async createBill(billDetails) {
    try {
      const response = await http.post('boletas', billDetails);
      return response.data;
    } catch (error) {
      console.error('Error al crear la boleta', error);
      throw error;
    }
  }
}