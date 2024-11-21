<script>
import { mapGetters } from 'vuex'
import AppToolbar from '@/components/the-application-toolbar.component.vue'

export default {
  name: 'TheProfileInformation',
  components: {
    AppToolbar
  },
  computed: {
    ...mapGetters(['user'])
  },
  async created() {
    console.log('Dispatching fetchUserById action');
    await this.$store.dispatch('fetchUserById');
    console.log('User image URL:', this.user.imagenUsuario) // Added console log
  }
}
</script>

<template>
  <AppToolbar />
  <div class="profile-information">
    <div class="profile-info-content">
      <div class="profile-picture">
        <img :src="user.imagenUsuario || 'path/to/not-found-image.png'" alt="Foto de perfil">
      </div>
      <div class="profile-details">
        <div class="profile-header">
          <h2 class="personal-info">Información personal</h2>
          <router-link to="/profile_edit" class="edit-link">
            <button class="icon-button">
              <img src="../images/editIcon.png" alt="Ícono">
            </button>
          </router-link>
        </div>
        <div class="profile-text">
          <div class="info-item">
            <label class="label">Correo:</label>
            <div class="info-box">{{ user.email }}</div>
          </div>
          <div class="info-item">
            <label class="label">Usuario:</label>
            <div class="info-box">{{ user.username }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* General layout */
.profile-information {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
}

/* Content container */
.profile-info-content {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 20px;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

/* Profile picture */
.profile-picture {
  width: 150px;
  height: 150px;
  border: 2px solid #000;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.profile-picture img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

/* Profile details */
.profile-details {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.profile-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.personal-info {
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
}

.edit-link {
  text-decoration: none;
}

.icon-button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}

.icon-button img {
  width: 40px;
  height: 40px;
}

/* Profile info items */
.profile-text {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 10px;
}

.label {
  font-weight: bold;
  font-size: 1rem;
  white-space: nowrap;
}

.info-box {
  background-color: lightblue;
  padding: 10px 15px;
  border-radius: 5px;
  font-size: 1rem;
  flex: 1;
}

/* Responsiveness */
@media (max-width: 768px) {
  .profile-info-content {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .profile-header {
    flex-direction: column;
    gap: 10px;
  }

  .profile-picture {
    margin: 0 auto;
  }
}
</style>

