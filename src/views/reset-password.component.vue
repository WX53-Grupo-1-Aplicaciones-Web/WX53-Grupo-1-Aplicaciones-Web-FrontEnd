<template>
  <div>
    <LoginToolbar></LoginToolbar>
  </div>
  <div class="login-container">
    <div class="login-wrapper">
      <div class="login-form">
        <div class="login-header">
          <h2>{{ $t('passchange.title') }}</h2>
        </div>

        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="user">{{ $t('passchange.user') }}</label>
            <input type="text" id="user" v-model="user" required />
          </div>

          <div class="form-group">
            <label for="password">{{ $t('passchange.password') }}</label>
            <input type="password" id="password" v-model="password" required />
          </div>

          <div class="form-group">
            <label for="password">{{ $t('passchange.confirm') }}</label>
            <input type="password" id="password" v-model="password" required />
          </div>

          <button type="submit" onclick = " window.location.href = '/' ">{{ $t('passchange.reset') }}</button>
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
  name: 'ResetPassword',
  components: {
    LoginToolbar,
    Footer,
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
