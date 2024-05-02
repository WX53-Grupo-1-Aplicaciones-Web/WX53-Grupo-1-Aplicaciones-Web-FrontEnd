<script>
  export default {
    methods: {
      navigateToCatalog() {
        this.$router.push('/catalog');
      },
    }
  }
</script>
<template>
  <div class="toolbar">
    <img src="../images/logoArtisania.png" alt="Logo" class="logo">
    <div class="circle-container">
      <div class="circle">
        <img  src="../images/homeIcon.png" alt="Home" class="icon" @click="navigateToCatalog">
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
  width: 50px;
  height: 50px;
  border: 2px solid #000;
  border-radius: 50%;
  margin-left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
}

.icon {
  max-width: 80%;
  max-height: 80%;
  cursor: pointer;
}
</style>
