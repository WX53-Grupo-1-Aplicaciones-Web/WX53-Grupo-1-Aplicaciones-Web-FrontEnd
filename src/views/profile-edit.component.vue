<script>
import AppToolbar from '@/components/the-application-toolbar.component.vue'
export default {
  name: 'TheProfileInformation',
  components: {
    AppToolbar
  }
}
</script>

<template>
  <div class = "profile-information">
    <AppToolbar/>

    <div class = "profile-info-content">
      <div class = "profile-picture">
        <img src="../images/profilePicture.png" alt="Foto de perfil">
      </div>
      <button class = "icon-button">
        <img src="../images/photoIcon.png" alt="Ícono">
      </button>
      <button class = "save-button">
        <p>Guardar cambios</p>
      </button>
      <div class = "profile-text">
        <h2 class="personal-info">Información personal</h2>
        <label class="mail">Correo</label>
        <label class="user">Usuario</label>
      </div>
      <div class = "bars">
        <input type="mail-bar" id="Correo" name="Correo" placeholder="Example@hotmail.com"
               style="background-color: lightblue;">
        <input type="user-bar" id="Usuario" name="Usuario" placeholder="MyUserName"
               style="background-color: lightblue;">
      </div>
    </div>
  </div>
</template>

<style scoped>
.profile-info-content {
  display: flex;
  justify-content: space-between;
  padding: 20px;
}

.profile-picture {
  width: 300px;
  height: 250px;
  border: 2px solid #000;
  border-radius: 40%;
  overflow: hidden;
  position: relative;
  top: 80px;
  left: 200px;
}

.profile-picture img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
}

.personal-info {
  text-decoration: underline;
  font-weight: bold;
  position: absolute;
  top: 150px;
  right: 650px;
}

.mail {
  position: absolute;
  font-weight: bold;
  font-size: 18px;
  top: 250px;
  right: 840px;
}

.user {
  position: absolute;
  font-weight: bold;
  font-size: 18px;
  top: 350px;
  right: 833px;
}

.bars {
  position: absolute;
}

.bars input[type="mail-bar"],
.bars input[type="user-bar"] {
  width: 400px;
  height: 40px;
  padding: 10px;
  font-size: 18px;
  border-radius: 5px;
  position: absolute;
}

.bars input[type="mail-bar"] {
  top: 180px;
  left: 615px;
}

.bars input[type="user-bar"] {
  top: 280px;
  left: 615px;
}

.icon-button {
  position: absolute;
  top: 380px;
  left: 500px;
}

.icon-button img {
  width: 40px;
  height: 40px;
}

.save-button {
  position: absolute;
  top: 480px;
  left: 920px;
  background-color: blue;
  border-radius: 15px;
  color: white;
}
</style>
