<script setup>
</script>

<template>
    <div class="footer">
      <img src="../images/logoArtisania.png" alt="Logo" class="logo">

      <div class = "copyright">
        <p>&copy; Copyright 2024</p>
      </div>

      <div class = "phrase1">
        <p>Conectando corazones con arte</p>
      </div>

      <div class = "phrase2">
        <p>hecho a mano</p>
      </div>
    </div>
</template>

<style scoped>
.footer {
  width: 100%;
  min-height: 80px;
  background-color: #002C3E;
  display: flex;
  align-items: center;
  padding: 0 20px;
  position: relative;
}

.copyright{
  color: white;
  position: relative;
  right: 900px;
}

.phrase1{
  color: white;
  position: relative;
  right: 8px;
  top: -10px;
}

.phrase2{
  color: white;
  position: relative;
  right: 180px;
  top: 10px
}

.logo {
  max-height: 65px;
  max-width: 100%;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  left: 250px;
}
</style>
