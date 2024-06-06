<template>
  <div>
    <AppToolbar></AppToolbar>
    <SearchBar></SearchBar>

  </div>
  <div class="catalog-container">
    <div class="categories">
      <h2>{{ $t('catalog.categori') }}</h2>
      <div><span>{{ $t('catalog.joyeria') }}</span></div>
      <div><span>{{ $t('catalog.textil') }}</span></div>
      <div><span>{{ $t('catalog.ceramica') }}</span></div>
      <div><span>{{ $t('catalog.artesania') }}</span></div>
      <div><span>{{ $t('catalog.artecuero') }}</span></div>
      <div><span>{{ $t('catalog.artevi') }}</span></div>
      <div><span>{{ $t('catalog.cuidadoper') }}</span></div>
      <div><span>{{ $t('catalog.juguet') }}</span></div>
      <div><span>{{ $t('catalog.decora') }}</span></div>
      <div><span>{{ $t('catalog.progastro') }}</span></div>
    </div>

    <div class="products">
      <ProductCatalog></ProductCatalog>
    </div>
  </div>
  <TheFooter/>
</template>

<script>
import AppToolbar from '@/components/the-application-toolbar.component.vue'
import SearchBar from '@/components/the-product-searching.component.vue'
import ProductCatalog from '@/components/product-catalog.component.vue'
import TheFooter from '@/components/the-footer.component.vue'
export default {
  name: 'TheCatalog',
  components: {
    ProductCatalog,
    AppToolbar,
    SearchBar,
    TheFooter
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
