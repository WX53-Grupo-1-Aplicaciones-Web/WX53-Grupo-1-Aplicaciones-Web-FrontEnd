import axios from 'axios';
const http = axios.create({
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('userToken')}`
  }
});
class TheLoginBackendService {

  async login(correo, contraseña) {
    try {
      const response = await http.post('https://artisania.azurewebsites.net/api/customers/login', {
        correo,
        contraseña
      });
      return response.data;
    } catch (error) {
      console.error('Error al hacer login', error);
      throw error;
    }
  }
}

export default new TheLoginBackendService();
