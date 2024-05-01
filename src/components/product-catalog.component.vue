<script>
import { ProductCatalogService } from '@/services/product_on_catalog.service.js'
export default {
  name: 'ProductCatalog',
  data() {
    return {
      products: []
    }
  },
  async created() {
    const service = new ProductCatalogService();
    this.products = await service.getAll();
  },
  methods: {
    goToProductDetail(productId) {
      this.$router.push(`/product_detail/${productId}`);
    }
  }
}
</script>

<template>
  <div v-for="product in products" :key="product.nombre" class="product">
    <img class="product-image" :src="product.imagen" :alt="product.nombre">
    <div class="product-info">
      <h2 class="product-name">{{ product.nombre }}</h2>
      <p class="product-description">{{ product.descripcion }}</p>
      <div class="product-price" @click="goToProductDetail(product.id)">Precio: ${{ product.precio }}</div>
    </div>
  </div>
</template>


<style scoped>
.product {
  display: flex;
  position: relative;
  margin-bottom: 20px;
  border-bottom: 1px solid #9b9b9b;
}

.product-image {
  width: 200px;
  height: 200px;
  object-fit: cover;
  margin-top: 20px;
  margin-left: 20px;
  margin-bottom:20px;
  border: 1px solid #000;
}

.product-info {
  margin-left: 20px;
}

.product-name {
  font-weight: bold;
}

.product-description {
  margin-top: 10px;
}

.product-price {
  position: absolute;
  bottom: 10px;
  right: 10px;
  padding: 10px;
  border: 1px solid #000;
  border-radius: 10px;
  width: fit-content;
  background-color: #449AFF;
  cursor: pointer;
}
</style>