<script>
</script>
<template>
  <div class="toolbar">
    <img src="../images/logoArtisania.png" alt="Logo" class="logo">
    <div class="circle-container">
      <div class="circle">
        <img src="../images/homeIcon.png" alt="Home" class="icon">
      </div>
      <div class="circle">
        <img src="../images/cartIcon.png" alt="Cart" class="icon">
      </div>
      <div class="circle">
        <img src="../images/profileIcon.png" alt="Profile" class="icon">
      </div>
    </div>
  </div>
</template>

<style scoped>
.toolbar {
  width: 100%;
  min-height: 85px;
  background-color: #064789;
  display: flex;
  align-items: center;
  padding: 0 20px;
}

.logo {
  max-height: 65px;
  max-width: 100%;
}

.circle-container {
  display: flex;
  margin-left: auto;
  margin-right: 20px;
}

.circle {
  width: 50px; /* Tamaño del círculo */
  height: 50px; /* Tamaño del círculo */
  border: 2px solid #000; /* Borde negro */
  border-radius: 50%; /* Hacer que el div sea un círculo */
  margin-left: 10px; /* Espacio entre círculos */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
}

.icon {
  max-width: 80%; /* Tamaño máximo del icono */
  max-height: 80%; /* Tamaño máximo del icono */
}
</style>
