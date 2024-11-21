<template>
  <div>
    <LoginToolbar></LoginToolbar>
  </div>
  <div class="login-container">
    <div class="login-wrapper">
      <div class="login-form">
        <div class="login-header">
          <h2>{{ $t('login.title') }}</h2>
          <p>{{ $t('login.welcome') }}</p>
        </div>

        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="email">{{ $t('login.emailLabel') }}</label>
            <input type="email" id="email" v-model="email" required />
          </div>

          <div class="form-group">
            <label for="password">{{ $t('login.passwordLabel') }}</label>
            <input type="password" id="password" v-model="password" required />
          </div>

          <button type="submit">{{ $t('login.signInButton') }}</button>
        </form>

        <div class="login-footer">
          <p>{{ $t('login.noAccount') }} <a href="#" @click="goToRegister">{{ $t('login.registerLink') }}</a></p>
          <p><a href="#" onclick="window.location.href = '/resetPassword'">{{ $t('login.forgotPasswordLink') }}</a></p>
        </div>

        <!-- Mostrar mensaje de error -->
        <p v-if="error">{{ error }}</p>
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
import TheLoginBackendService from '@/services/the-login-backend.service.js'

export default {
  name: 'TheLogin',
  components: {
    LoginToolbar,
    Footer,
  },
  data() {
    return {
      email: '',
      password: '',
      error: ''
    };
  },
  methods: {
    async handleSubmit() {
      try {
        const token = await TheLoginBackendService.login(this.email, this.password);

        if (token) {
          localStorage.setItem('userToken', token);
          this.$store.commit('setLoggedInEmail', this.email);
          await this.$store.dispatch('fetchUser');
          this.$router.push('/catalog');
        } else {
          this.error = 'Usuario no registrado';
        }
      } catch (error) {
        console.error('Error al hacer login:', error);
        this.error = 'Error al hacer login. Por favor, inténtalo de nuevo más tarde.';
      }
    }
  }
}
</script>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 77vh;
  background-color: #f0f0f0;
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
  color:black;
  border: none;
  cursor: pointer;
  margin-top: 10px;
  border-radius: 20px;
}

.login-footer {
  text-align: center;
  margin-top: 20px;
}
</style>
