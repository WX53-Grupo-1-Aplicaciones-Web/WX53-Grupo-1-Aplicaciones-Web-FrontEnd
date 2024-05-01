<template>

    <AppToolbar />
  <div class="card-container" v-if="product">
  <pv-card class="card">
  <template #header>
      <img alt="user header" :src="'/'+product.imagen" />
  </template>
  
  <template #title><strong>Confirmacion del acuerdo de personalizacion</strong></template>
  <template #subtitle>El cliente recibira el producto con los siguientes detalles de personalizacion:</template>
  <pv-divider layout="vertical" />
  
  <template #content class="information-product bordered-section">
      <p>El precio acordado por ambas partes es el siguiente:</p>
      <pv-input-number v-model="value1" inputId="currency-us" mode="currency" currency="USD" locale="en-US" />
      
      <div class="card flex justify-content-center">
      <div class="flex flex-column gap-3">
          <div v-for="category of categories" :key="category.key" class="flex align-items-center">
              <pv-checkbox v-model="selectedCategories" :inputId="category.key" name="category" :value="category.name" />
              <label :for="category.key">Yo, {{ category.name }}  confirmo el acuerdo</label>
          </div>
      </div>
  </div>
  </template>
  <template #footer>
      <div class="button-save">
              <pv-button
                  :label="'Continuar'.toUpperCase()"
                  icon="pi pi-check"
                  @click="validateCheckboxes"
                  outlined
              />
      </div>
    <p v-if="showCheckboxErrorMessage && selectedCategories.length < 2" class="error-message">Ambas partes deben estar de acuerdo para completar la compra</p>
    <p v-if="showCheckboxErrorMessage && (value1 == 0 || value1 == '')" class="error-message">El precio acordado no puede ser $0.00</p>  </template>
  </pv-card>

</div>
<the-footer/>
</template>

<script>
import AppToolbar from '@/components/the-application-toolbar.component.vue'
import TheFooter from '@/components/the-footer.component.vue'
import  {ProductCatalogService} from '@/services/product_on_catalog.service.js'

export default{
  components: {
      AppToolbar,
    TheFooter
  },
  data() {
      return {
          product:null,
          ingredient:"",
        value1: 0,
          category: "",
          categories: [
          { name: "Manuel Herrera ", key: "A" },
          { name: "David Williams", key: "M" },
          ],    
          selectedCategories: ['Marketing'],
        showCheckboxErrorMessage: false,
        selectedTamanio: null,
        parameter: null,
        parameters:{},
      };
  },
  methods: {
    async getProductDetail(id) {
      const service = new ProductCatalogService();
      this.product = await service.getProductDetail(id);
    },
    async createBill() {
      const billDetails = {
        productId: this.$route.params.id,
        product: this.product.nombre,
        parameters: this.parameters,
        price: this.value1,
      };

      const service = new ProductCatalogService();
      try {
        const response = await service.createBill(billDetails);
        console.log(response); // Imprime la respuesta para verificar que la boleta se creó correctamente
      } catch (error) {
        console.error('Error al crear la boleta', error);
      }
    },

    validateCheckboxes() {
      if (this.selectedCategories.length < 2 || this.value1 == 0 || this.value1 == '') {
        this.showCheckboxErrorMessage = true;
      } else {
        this.showCheckboxErrorMessage = false;
        this.createBill();
        // Aquí puedes agregar el código para continuar con la operación
      }
    },
  },
  mounted() {
    this.getProductDetail(this.$route.params.id);
    this.parameters['selectedTamanio'] = this.$route.params.selectedTamanio;
    this.parameters['parameter'] = this.$route.params.parameter;
  },
}

</script>

<style>
.card {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 20px;
    width:80%;
    background-color: #E0EDFF;
    box-sizing: border-box;
    justify-content: center; 
}

.card-container {
    display: flex;
    justify-content: center; 
}


.card img {
  width: 300px;
  height: 200px;
}
#currency-us {
  margin-bottom: 20px;
}

.button-save {
  display: flex;
  justify-content: center;
}
</style>
