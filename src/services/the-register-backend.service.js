import axios from 'axios';
const http = axios.create({
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('userToken')}`
  }
});
class TheRegisterBackendService {
  async register(usuario, contraseña, correo, isArtisan) {
    try {
      const response = await http.post('https://artisania.azurewebsites.net/api/customers/register', {
        usuario,
        contraseña,
        correo,
        imagenUsuario: null,
        isArtisan,
        role: null
      });
      return response.data;
    } catch (error) {
      console.error('Error al registrar el usuario', error);
      throw error;
    }
  }
}

export default new TheRegisterBackendService();
