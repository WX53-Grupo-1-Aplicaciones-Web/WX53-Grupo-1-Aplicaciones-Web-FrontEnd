<template>
  <div>
    <AppToolbar></AppToolbar>
    <SearchBar></SearchBar>
  </div>
</template>

<script>
import AppToolbar from '@/components/the-application-toolbar.component.vue'
import SearchBar from '@/components/the-product-searching.component.vue'
export default {
  name: 'TheCatalog',
  components: {
    AppToolbar,
    SearchBar
  }
}

</script>

<style scoped>

</style>