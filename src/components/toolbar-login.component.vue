<script>
</script>

<template>
  <div class="toolbar">
    <img src="../images/logoArtisania.png" alt="Logo" class="logo">

    <pv-button type="login" onclick = " window.location.href = '/' ">{{ $t('loginToolbar.login')}}</pv-button>


    <pv-button type="register" onclick = " window.location.href = '/register' ">{{ $t('loginToolbar.register')}}</pv-button>
  </div>
</template>

<style scoped>
.toolbar {
  width: 100%;
  min-height: 85px;
  background-color: #002C3E;
  display: flex;
  align-items: center;
  padding: 0 20px;
}

button {
  padding: 12px 20px;
  background-color: #002C3E;
  color: white;
  border: none;
  cursor: pointer;
  margin-top: 10px;
  border-radius: 20px;
  position: relative;
  left: 1100px;
  font-size: 20px
}

.logo {
  max-height: 65px;
  max-width: 100%;
}
</style>
