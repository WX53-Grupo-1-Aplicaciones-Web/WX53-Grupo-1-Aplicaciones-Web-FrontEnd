<script>
export default {
  name: 'ProductCatalog'
}
</script>

<template>
  <div class="product">
    <img class="product-image" src="../images/mateBurilado.png" alt="Product Image">
    <div class="product-info">
      <h2 class="product-name">Nombre del Producto</h2>
      <p class="product-description">Descripción del producto...</p>
      <div class="product-price">Precio: $100</div>
    </div>
  </div>
</template>


<style scoped>
.product {
  display: flex;
  position: relative; /* Asegúrate de que .product tenga una posición relativa */
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
  position: absolute; /* Hace que el precio sea absoluto */
  bottom: 10px; /* Posiciona el precio en la parte inferior */
  right: 10px; /* Posiciona el precio a la derecha */
  padding: 10px;
  border: 1px solid #000;
  border-radius: 10px;
  width: fit-content;
  background-color: #449AFF;
}
</style>