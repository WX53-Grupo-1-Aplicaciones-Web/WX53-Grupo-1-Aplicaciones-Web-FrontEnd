<template>
  <div class="product-detail">
    <AppToolbar />
    <SearchBar />

    <div class="product-detail-content">
      <div class="additional-images">
        <div v-for="(image, index) in images" :key="index">
          <img v-if="image" :src="image" :alt="'Imagen adicional ' + (index + 1)" class="additional-image">
        </div>
      </div>
      <div class="product-image-section">
        <img  class="product-image" src="../images/mateBurilado.png" alt="Imagen del producto">
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
      <div class="product-info">
        <div class="product-actions">
          <p class="product-price">Precio: $100</p>
          <button class="buy-button">Comprar</button>
          <button class="customize-button">Personalizar producto</button>
        </div>
      </div>
    </div>
  </div>
  <TheFooter class="footer" />
</template>

<script>
import AppToolbar from '@/components/the-application-toolbar.component.vue'
import SearchBar from '@/components/the-product-searching.component.vue'
import TheFooter from '@/components/the-footer.component.vue'
export default {
  name: 'TheProductDetail',
  components: {
    TheFooter,
    AppToolbar,
    SearchBar,
  },
  data() {
    return {
      images: ['src/images/mate1.png','src/images/mate1.png','src/images/mate1.png']
    }
  }
}
</script>

<style scoped>
.product-image{
  width: 50%;
  height: 90%;
  margin-left: 20%;
}
.product-detail-content {
  display: flex;
  justify-content: space-between;
  padding: 20px;
}

.product-image-section {
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
.additional-images {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 20px;
  margin-left:50px;
}

.additional-image {
  width: 100px;
  height: 120px;
  border: 1px solid #000;
}
body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.product-actions {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 100px;

}
.product-detail {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.footer {
  flex-shrink: 0;
}

.buy-button {
  margin-top: 10px;
  padding: 10px 20px;
  border-radius: 20px;
  border:black 1px solid;
  cursor: pointer;
  color: white;
  background-color: #116BC7;
}

.customize-button {
  margin-top: 10px;
  padding: 10px 20px;
  border-radius: 20px;
  border:black 1px solid;
  cursor: pointer;
  color: white;
  background-color: #116BC7;
}

</style>