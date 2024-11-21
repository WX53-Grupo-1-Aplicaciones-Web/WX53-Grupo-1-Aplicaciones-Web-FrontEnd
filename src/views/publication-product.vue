<template>
  <AppToolbar></AppToolbar>
  <pv-card class="card">
    <template #header>
      <img alt="user header" src="https://content.emarket.pe/common/collections/content/ed/3a/ed3aa421-2085-464d-98d9-ee37850290c8.png" style="width: 300px; height: auto; margin-right: 20px;" />
    </template>
    <template #title><strong>Publica tu producto</strong></template>
    <template #content>

      <div class="input-container">
        <label for="productName" class="input-label">Nombre del Producto</label>
        <pv-input-text id="productName" v-model="productName" placeholder="Ingrese el nombre del producto" aria-describedby="productName-help" class="input-field" />
      </div>

      <div class="input-container">
        <label for="category" class="input-label">Categoría</label>
        <pv-dropdown
          v-model="category"
          :options="predefinedCategories"
          optionLabel="label"
          placeholder="Seleccione la categoría"
          class="input-field"
        />
      </div>

      <div class="input-container">
        <label for="productPrice" class="input-label">Precio del Producto (PEN)</label>
        <input type="text" id="productPrice" v-model="productPrice" @input="formatCurrency" placeholder="0.00" class="input-field" />
      </div>

      <div class="input-container">
        <label for="productDescription" class="input-label">Descripción del Producto</label>
        <pv-textarea v-model="productDescription" rows="5" cols="30" class="input-field" placeholder="Escriba una descripción del producto" />
      </div>

      <div class="input-container">
        <label for="productDetails" class="input-label">Detalles del Producto</label>
        <pv-textarea v-model="productDetails" rows="3" cols="30" class="input-field" placeholder="Detalles del producto" />
      </div>

      <div class="input-container">
        <label for="artisanDetails" class="input-label">Detalles del Artesano</label>
        <pv-textarea v-model="artisanDetails" rows="3" cols="30" class="input-field" placeholder="Detalles del artesano" />
      </div>

      <div class="input-container">
        <label for="color" class="input-label">Color</label>
        <pv-input-text v-model="customizationParameters.color" placeholder="Color" class="input-field" />
      </div>

      <div class="input-container">
        <label for="engraving" class="input-label">Grabado Personalizado</label>
        <pv-input-text v-model="customizationParameters.engraving" placeholder="Escribe el grabado personalizado" class="input-field" />
      </div>

      <!-- Size -->
      <div class="input-container">
        <label for="size" class="input-label">Tamaño</label>
        <input type="number" id="size" v-model="size" class="input-field" placeholder="Tamaño en unidades" />
      </div>

      <div class="input-container">
        <label for="productImage" class="input-label">Imagen del Producto</label>
        <pv-input-text id="productImage" v-model="image" placeholder="Ingrese la URL de la imagen del producto" class="input-field" />
      </div>

      <div class="input-container">
        <label for="author" class="input-label">Autor del Producto</label>
        <pv-input-text v-model="author" placeholder="Autor del producto" class="input-field" />
      </div>

      <div class="input-container">
        <label for="features" class="input-label">Características</label>
        <pv-textarea v-model="features" rows="3" cols="30" class="input-field" placeholder="Características del producto (material, etc.)" />
      </div>

      <div class="publish-button-container">
        <pv-button label="Publicar" class="publish-button" @click="publishProduct" />
      </div>
    </template>
    <template #footer>
      <div class="flex gap-3 mt-1"></div>
    </template>
  </pv-card>
</template>

<script>
import AppToolbar from '@/components/the-application-toolbar.component.vue'
import { ProductApiServices } from '@/services/the-product-client.service.js'

export default {
  name: 'TheCatalog',
  components: {
    AppToolbar,
  },
  data() {
    return {
      productName: "",
      productPrice: '',
      productDescription: "",
      productDetails: "",
      artisanDetails: "",
      customizationParameters: {
        color: "",
        engraving: "",
      },
      size: 0,
      image: "",
      author: "",
      features: "",
      predefinedCategories: [
        { label: "Joyería artesanal", value: "jewerly" },
        { label: "Textiles y tejidos", value: "clothing" },
        { label: "Cerámica y alfarería", value: "pottery" },
        { label: "Artesanía en madera", value: "wood_craftsmanship" },
        { label: "Decoración del hogar", value: "home_decor" },
      ],
      category: "",
    };
  },
  methods: {
    async publishProduct() {
      const newProduct = {
        nombre: this.productName,
        descripcion: this.productDescription,
        precio: parseFloat(this.productPrice),
        detalles: this.productDetails,
        detallesDelArtesano: this.artisanDetails,
        parametrosPersonalizacion: {
          parametros: [
            {
              nombre: "Color",
              valores: [{ valor: this.customizationParameters.color }]
            }
          ],
          gravado: this.customizationParameters.engraving,
        },
        tamaño: this.size,
        inputText: this.productDescription,
        gravado: this.customizationParameters.engraving,
        categoria: this.category ? this.category.value : 'defaultCategory',
        imagen: this.image,
        imagenesDetalle: [{ imagenUrl: this.image }],
        autor: this.author,
        caracteristicas: [{ nombre: "Material", valor: this.features }]
      };

      console.log("Request Payload:", newProduct);

      try {
        const productService = new ProductApiServices();
        await productService.publishProduct(newProduct);
        console.log("Product published successfully:", newProduct);
        this.$router.push('/parameters');
      } catch (error) {
        console.error('Error publishing product:', error);
        if (error.response) {
          console.error("Error Response:", error.response.data);
          console.error("Validation Errors:", error.response.data.errors);
        } else if (error.request) {
          console.error("Error Request:", error.request);
        } else {
          console.error("Error Message:", error.message);
        }
      }
    },
    formatCurrency(event) {
      let formattedValue = event.target.value.replace(/[^0-9.]/g, '');
      formattedValue = formattedValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      formattedValue = formattedValue.replace(/^(\d*\.\d{2}).*$/, '$1');
      this.productPrice = formattedValue;
    },
  }
}
</script>

<style>
.card {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 20px;
  width: 100%;
  background-color: #E0EDFF;
}

.input-container {
  width: 100%;
  margin-bottom: 20px;
}

.input-label {
  font-weight: bold;
  margin-bottom: 5px;
}

.input-field {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.publish-button-container {
  width: 100%;
}

.publish-button {
  width: 100%;
  background-color: #064789;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px;
}

.publish-button:hover {
  background-color: darkblue;
}

@media only screen and (max-width: 768px) {
  .card {
    flex-direction: column;
    align-items: center;
  }

  .input-container {
    width: 100%;
  }

  .publish-button-container {
    width: 90%;
  }
}
</style>
