<script>
import AppToolbar from '@/components/the-application-toolbar.component.vue'
import axios from 'axios'
import { mapGetters } from 'vuex'
import { uploadImage } from '@/services/the-image-update.service.js'

export default {
  name: 'TheProfileEdit',
  components: {
    AppToolbar
  },
  data() {
    return {
      user: {
        email: '',
        username: '',
        imagenUsuario: '',
        id: ''
      },
      updateSuccess: false,
      imageFile: null
    }
  },
  computed: {
    ...mapGetters(['user', 'loggedInEmail'])
  },
  methods: {
    async saveProfile() {
      try {
        let imageUrl = this.user.imagenUsuario
        if (this.imageFile) {
          imageUrl = await uploadImage(this.imageFile)
          this.user.imagenUsuario = imageUrl // Reemplazar el URL anterior
          console.log('Nuevo URL de imagen:', this.user.imagenUsuario) // Agregar console log
        }

        const updatedUser = {
          usuario: this.user.username,
          correo: this.user.email,
          imagenUsuario: this.user.imagenUsuario
        }

        console.log('Actualizando usuario con ID:', this.user.id)
        console.log('Campos actualizados:', updatedUser)

        await axios.put(
          `https://artisania.azurewebsites.net/api/customers/update/${this.user.id}`,
          updatedUser
        )
        this.updateSuccess = true
        await this.$store.dispatch('fetchUserById')
      } catch (error) {
        console.error('Error actualizando perfil:', error)
      }
    },
    handleImageUpload(event) {
      this.imageFile = event.target.files[0]
    },
    goToProfile() {
      this.$router.push('/profile_information')
    }
  },
  async created() {
    await this.$store.dispatch('fetchUserById')
    this.user = { ...this.$store.getters.user }
    console.log('URL de imagen del usuario:', this.user.imagenUsuario)
  }
}
</script>


<template>
  <AppToolbar />
  <div class="profile-information">
    <div class="profile-info-content">
      <div class="profile-picture">
        <img :src="user.imagenUsuario || 'path/to/not-found-image.png'" alt="Foto de perfil" />
        <input type="file" @change="handleImageUpload" />
      </div>

      <div class="profile-form">
        <h2 class="personal-info">Información personal</h2>
        <div class="form-item">
          <label for="Correo" class="label">Correo:</label>
          <input
            type="email"
            id="Correo"
            name="Correo"
            v-model="user.email"
            placeholder="Example@hotmail.com"
            class="input-field"
          />
        </div>
        <div class="form-item">
          <label for="Usuario" class="label">Usuario:</label>
          <input
            type="text"
            id="Usuario"
            name="Usuario"
            v-model="user.username"
            placeholder="MyUserName"
            class="input-field"
          />
        </div>
        <button @click="saveProfile" class="save-button">Guardar cambios</button>
      </div>
    </div>
    <div v-if="updateSuccess" class="update-success">
      <p>Cambios guardados</p>
      <button @click="goToProfile" class="back-button">Volver al perfil</button>
    </div>
  </div>
</template>

<style scoped>
/* existing styles */
</style>
<style scoped>
.profile-information {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.profile-info-content {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 20px;
  align-items: center;
  max-width: 900px;
  width: 100%;
}

.profile-picture {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.profile-picture img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #000;
}

.icon-button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  border-radius: 10px;
  overflow: hidden;
  display: inline-block;
}

.icon-button img {
  width: 50px;
  height: 50px;
  object-fit: contain;
  border-radius: 10px;
}

/* Profile Form */
.profile-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
}

.personal-info {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center;
}

/* Form Items */
.form-item {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.label {
  font-size: 1rem;
  font-weight: bold;
}

.input-field {
  width: 100%;
  height: 40px;
  padding: 10px;
  font-size: 1rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: lightblue;
}

/* Save Button */
.save-button {
  background-color: blue;
  color: white;
  font-size: 1rem;
  padding: 10px 20px;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  width: 100%;
  max-width: 200px;
  align-self: center;
}

.save-button:hover {
  background-color: darkblue;
}

/* Update Success */
.update-success {
  margin-top: 20px;
  text-align: center;
}

.back-button {
  background-color: green;
  color: white;
  font-size: 1rem;
  padding: 10px 20px;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  margin-top: 10px;
}

.back-button:hover {
  background-color: darkgreen;
}

/* Responsive Design */
@media (max-width: 768px) {
  .profile-info-content {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .profile-picture {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
  .profile-picture img {
    width: 150px;
    height: 150px;
    border-radius: 15px;
    object-fit: cover;
    border: 2px solid #000;
  }
}
</style>