<script>
import { useRouter } from 'vue-router';
import { ProductApiServices } from '@/services/cliente-products-api.service.js'
import AppToolbar from '@/components/the-application-toolbar.component.vue'
export default {
  name: "personalizar-card",
  components: {
    AppToolbar,
  },
  props: {
    productCharacteristics: Object 
  },
  data() {
    return {
      visible: false,
      showSizeSection: false,
      showMaterialSection: false,
      tamaño: "",
      tamaños: [],
      material: "",
      materiales: [],
      grabado: "",
      color: "",
      colors: [],
      confirm: null,
      toast: null,
      productService: null,
      router: null,
      submitted: false,
      producto_publicado: [],
    };
  },
  methods: {
    redirectToAdquisicion() {
      const router = useRouter();
      router.push('/adquisicion'); 
    },
    toggleSection() {
      if (this.showSizeSection && !this.showMaterialSection) {
        this.showMaterialSection = true;
      } else {
        this.showSizeSection = true;
        this.showMaterialSection = true;
      }      
    },
    async saveProducto() {
      const updatedCharacteristics = {
        id:0,
        color: this.color,
        tamaño: this.tamaño,
        material: this.material
      };

      try {
        const productService = new ProductApiServices();
        await productService.saveProducto(updatedCharacteristics);
        this.$emit('save-success');
      } catch (error) {
        console.error('Error saving product:', error);
      }
    }
  },
  async created() {
    try {
      const productService = new ProductApiServices();
      const characteristics = await productService.getProductCharacteristics();

      this.colors = characteristics.color;
      this.materiales = characteristics.material;
      this.tamaños = characteristics.tamaño; 
    } catch (error) {
      console.error('Error fetching product characteristics:', error);

    }
  }

};
</script>


<template>
<AppToolbar></AppToolbar>
<div class="card-container">
  <pv-card class="card">
    <template #header>
        <img alt="user header" src="https://content.emarket.pe/common/collections/content/ed/3a/ed3aa421-2085-464d-98d9-ee37850290c8.png" />
    </template>
    <template #title><strong>Tu Producto puede personalizarse</strong></template>
    <template #subtitle>Agrega parametros de personalizacion para tu producto</template>
    <template #content>
      <div class="m-0">
          <label for="color" class="font-bold block mb-2"> Color </label>
            <pv-multi-select  v-model="color" display="chip" :options="colors"  placeholder="Seleccione el color"
            :maxSelectedLabels="3"  class="input-width"/>
          
        </div>
        <div v-if="showMaterialSection">
          <label for="material" class="font-bold block mb-2"> Material </label>
          <pv-dropdown v-model="material" :options="materiales" placeholder="Seleccione el material" class="input-width"/>
        </div>

        <div v-if="showSizeSection">
          <label for="tamaño" class="font-bold block mb-2"> Tamaño</label>
          <pv-multi-select  v-model="tamaño" display="chip" :options="tamaños"  placeholder="Seleccione el tamaño"
            :maxSelectedLabels="3"  class="input-width"/>
        </div>

    </template>
    <template #footer>
      <div class="flex gap-3 mt-1">
          <pv-button @click="toggleSection">Más</pv-button>
        </div>
    </template>
</pv-card>
</div>

<div class="button-container">
  <pv-button @click="saveProducto"  label="Publicar"></pv-button>
</div>

</template>

<style scoped>
.card {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
  width: 80%;
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

.custom-button {
  border: 1px solid white;
  background-color: #242423;
}
.input-width {
  width: 100%; 
}

.button-container{
  display: flex;
  justify-content: center;
  margin-top: 30px;
}

</style>
