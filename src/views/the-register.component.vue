<template>
  <div>
    <LoginToolbar></LoginToolbar>
  </div>

  <div class="login-container">
    <div class="login-wrapper">
      <div class="login-form">
        <div class="login-header">
          <h2>{{ $t('register.title') }}</h2>
        </div>

        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="email">{{ $t('register.email') }}</label>
            <input type="email" id="email" v-model="email" required />
          </div>

          <div class="form-group">
            <label for="user">{{ $t('register.user') }}</label>
            <input type="text" id="user" v-model="user" required />
          </div>

          <div class="form-group">
            <label for="password">{{ $t('register.password') }}</label>
            <input type="password" id="password" v-model="password" required />
          </div>

          <div class="form-group">
            <label for="confirmPassword">{{ $t('register.Cpassword') }}</label>
            <input type="password" id="confirmPassword" v-model="confirmPassword" required />
          </div>

          <button type="submit">{{ $t('register.register') }}</button>
        </form>
      </div>
    </div>
  </div>

  <div>
    <Footer></Footer>
  </div>
</template>

<script>
import LoginToolbar from '@/components/toolbar-login.component.vue'
import Footer from '@/components/the-footer.component.vue'

export default {
  name: 'TheRegister',
  components: {
    LoginToolbar,
    Footer,
  },
  data() {
    return {
      email: '',
      user: '',
      password: '',
      confirmPassword: '',
      clientes: []
    };
  },

  methods: {
    handleSubmit() {
      // Verificar si las contraseñas coinciden
      if (this.password !== this.confirmPassword) {
        alert('Las contraseñas no coinciden');
        return;
      }

      // Crear un nuevo cliente
      const nuevoCliente = {
        email: this.email,
        usuario: this.user,
        contraseña: this.password,
      };

      // Obtener el contenido actual del archivo db.json
      fetch('src/db.json')
        .then(response => response.json())
        .then(data => {
          // Agregar el nuevo cliente a la lista de clientes
          data.clientes.push(nuevoCliente);

          // Convertir los datos actualizados de vuelta a JSON
          const newData = JSON.stringify(data);

          // Enviar los datos actualizados de vuelta al servidor
          return fetch('/db.json', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: newData,
          });
        })
        .then(() => {
          // Limpiar los campos del formulario después de agregar el cliente
          this.email = '';
          this.user = '';
          this.password = '';
          this.confirmPassword = '';
          alert('Registro exitoso');
          // Redirigir a la página de inicio de sesión u otra página apropiada
          this.$router.push('/');
        })
        .catch(error => {
          console.error('Error al agregar el nuevo usuario:', error);
          alert('Error al registrar el usuario');
        });
    },
  },
}

</script>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 80vh;
  background-color: white;
}

.login-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.login-form {
  background-color: lightblue;
  padding: 20px;
  border-radius: 20px;
  width: 700px;
}

.login-header {
  text-align: center;
  margin-bottom: 20px;
}

.login-header h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

.login-header p {
  font-size: 14px;
  color: #666;
}

form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  padding: 10px;
  border: 1px solid #ccc;
  width: 100%;
  border-radius: 3px;
}

button {
  padding: 12px 20px;
  background-color: white;
  color: black;
  border: none;
  cursor: pointer;
  margin-top: 10px;
  border-radius: 50px;
}

.login-footer {
  text-align: center;
  margin-top: 20px;
}
</style>
