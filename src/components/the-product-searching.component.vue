<template>
  <div class="search-bar">
    <!-- Palabra "Publicar" -->
    <span class="publish" @mouseover="underline" @mouseleave="removeUnderline">Publicar</span>

    <!-- Input de búsqueda -->
    <input type="text" class="search-input" placeholder="Buscar..." />

    <!-- Icono de lupa -->
    <img src="@/images/searchIcon.png" alt="Search" class="search-icon" />
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  methods: {
    underline(event) {
      event.target.style.textDecoration = 'underline';
    },
    removeUnderline(event) {
      event.target.style.textDecoration = 'none';
    }
  }
}
</script>

<style scoped>
.search-bar {
  background-color: #002C3E;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: flex-end; /* Alinea los elementos a la derecha */
  padding: 0 10px;
}

.publish {
  color: white;
  cursor: pointer;
  margin-right: 45px; /* Espacio entre "Publicar" y el input */
  font-size: 1.5em;
}

.search-input {
  width: 20%; /* Tamaño del input al 20% del contenedor */
  height: 80%; /* Altura del input al 80% del contenedor */
  border: none;
  background-color: #ffffff;
  color: #A8A8A8;
  padding: 5px 10px;
  font-size: 1.5em;

}

.search-icon {
  width: 40px;
  height: 40px;
  margin-left: 10px;
  margin-right: 20px;
}

.publish:hover {
  text-decoration: underline;
}
</style>
