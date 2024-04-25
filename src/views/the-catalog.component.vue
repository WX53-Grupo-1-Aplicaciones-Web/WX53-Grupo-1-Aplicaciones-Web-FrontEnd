<template>
  <div>
    <AppToolbar></AppToolbar>
    <SearchBar></SearchBar>

  </div>
  <div class="catalog-container">
    <div class="categories">
      <h2>Categorías</h2>
      <div><span>Joyería artesanal</span></div>
      <div><span>Textiles y tejidos</span></div>
      <div><span>Cerámica y alfarería</span></div>
      <div><span>Artesanía en madera</span></div>
      <div><span>Artesanía en cuero</span></div>
      <div><span>Arte visual</span></div>
      <div><span>Cuidado personal</span></div>
      <div><span>Juguetes</span></div>
      <div><span>Decoración del hogar</span></div>
      <div><span>Productos gastronómicos artesanales</span></div>
    </div>

    <div class="products">
      <ProductCatalog></ProductCatalog>
      <ProductCatalog></ProductCatalog>
    </div>
  </div>
</template>

<script>
import AppToolbar from '@/components/the-application-toolbar.component.vue'
import SearchBar from '@/components/the-product-searching.component.vue'
import ProductCatalog from '@/components/product-catalog.component.vue'
export default {
  name: 'TheCatalog',
  components: {
    ProductCatalog,
    AppToolbar,
    SearchBar,
  }
}

</script>

<style scoped>
.catalog-container {
  display: flex;
  min-height: 100vh;

}

.categories {
  width: 400px;
  padding: 20px;
  background-color: #E0EDFF;
  min-height: 100%;
  border-right: 1px solid black;
  overflow-y: auto;

}

.categories h2 {
  color: #000;
  margin-left: 20px;
}

.products {
  flex-grow: 1;
}
.categories div {
  margin-left: 20px;
  margin-bottom: 10px;
}
</style>
