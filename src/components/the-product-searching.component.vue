<template>
  <div class="search-bar">
    <span class="publish" @mouseover="underline" @mouseleave="removeUnderline" @click="navigateToPublication">Publicar</span>
    <input type="text" class="search-input" placeholder="Buscar..." />
    <img src="@/images/searchIcon.png" alt="Search" class="search-icon" />
  </div>
</template>

<script>
import { ProductCatalogService } from '@/services/the-product-on-catalog.service.js';
export default {
  name: 'SearchBar',
  methods: {
    underline(event) {
      event.target.style.textDecoration = 'underline';
    },
    async navigateToPublication() {
      try {
        const productService = new ProductCatalogService();
        const response = await productService.deleteAllProducts();
        this.$router.push('/publication');
      } catch (error) {
        console.error(error);
      }
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
  justify-content: flex-end;
  padding: 0 10px;
}

.publish {
  color: white;
  cursor: pointer;
  margin-right: 45px;
  font-size: 1.5em;
}

.search-input {
  width: 20%;
  height: 80%;
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
