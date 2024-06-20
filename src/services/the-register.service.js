import axios from 'axios';
const http = axios.create({
  baseURL: 'http://localhost:3000/clientes'
});
class TheRegisterService {
  async getAll() {
    const response = await http.get('');
    return response.data;
  }

  async add(client) {
    try {
      const response = await http.post('', client);
      return response.data;
    } catch (error) {
      console.error('Error al agregar el cliente', error);
      throw error;
    }
  }
}

export default new TheRegisterService();