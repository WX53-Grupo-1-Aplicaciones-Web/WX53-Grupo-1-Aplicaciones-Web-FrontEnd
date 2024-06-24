import axios from 'axios';
import { Order } from '@/shared/models/order.entity.js';
const http = axios.create({
  baseURL: 'http://localhost:5103/api/',
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('userToken')}`
  }
});

export class TheProductBackendService {
  currentOrder = null;
  createOrder(id, productId, productName, orderParameters, price) {
    this.currentOrder = new Order(id, productId, productName, orderParameters, price);
  }
  async getAll() {
    const response = await http.get('productos');
    return response.data;
  }

  async getProductDetail(id) {
    const response = await http.get(`productos/${id}`);
    return response.data;
  }
}