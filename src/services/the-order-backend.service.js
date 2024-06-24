import axios from 'axios';
const http = axios.create({
  baseURL: 'http://localhost:5103/api/',
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('userToken')}`
  }
});

export class TheOrderBackendService {
  async createOrder(orderDetails) {
    try {
      const response = await http.post('ordenes/create', orderDetails);
      return response.data;
    } catch (error) {
      console.error('Error al crear la orden', error);
      throw error;
    }
  }
}