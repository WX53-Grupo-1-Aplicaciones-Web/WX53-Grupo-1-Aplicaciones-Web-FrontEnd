<template>
  <div class="product-detail">
    <AppToolbar />
    <SearchBar />

    <div class="product-detail-content">
      <div class="product-image">
        <img src="../images/mateBurilado.png" alt="Imagen del producto">
      </div>
      <div class="product-info">
        <div class="author-info">
          <h2>Hecho por <span class="author-name">Leonidas Orellana  </span></h2>
          <div class="author-details">
            <img class="author-image" src="../images/craftermanProfile.png" alt="Imagen del autor">
          </div>
        </div>
        <p class="author-description">Leonidas Orellana de Ayacucho nos ofrece su colección de estatuillas inspirados en los héroes y precursores de la independencia del Perú.</p>
        <div class="product-details">
          <h3>Detalles del producto</h3>
          <ul>
            <li>Estilo: Escultura tradicional cuzqueña</li>
            <li>Material: Piedra de andesita</li>
            <li>Técnica: Talla a mano</li>
            <li>Dimensiones: 30cm de altura, 20cm de ancho y 15cm de profundidad</li>
            <li>Coloración: Tonalidades tierra y toques dorados</li>
            <li>Características destacadas:</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppToolbar from '@/components/the-application-toolbar.component.vue'
import SearchBar from '@/components/the-product-searching.component.vue'
export default {
  name: 'TheProductDetail',
  components: {
    AppToolbar,
    SearchBar,
  }
}
</script>

<style scoped>
.product-detail-content {
  display: flex;
  justify-content: space-between;
  padding: 20px;
}

.product-image {
  width: 50%;
}

.product-info {
  width: 45%;
}

.author-info {
  display: flex;
  align-items: center;
}

.author-name {
  margin-right: 10px;
}

.author-details {
  display: flex;
  align-items: center;
}

.author-image {
  width: 50px;
  margin-right: 10px;
}
</style>