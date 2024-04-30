<template>
    <div>
      <AppToolbar></AppToolbar>
      <pv-card class="card">
        <template #header>
          <div class="edit-button-container">
            <pv-button v-on:click="editProduct" label="Editar Imagen" class="edit-button"/>
          </div>    
          <img alt="user header" src="https://content.emarket.pe/common/collections/content/ed/3a/ed3aa421-2085-464d-98d9-ee37850290c8.png" style="width: 300px; height: auto; margin-right: 20px;" />
          
        </template>
        <template #title><strong>Publica tu producto</strong></template>
        <template #content>
          <div class="content-container">
            <div class="input-container">
              <label for="productName" class="input-label">Nombre del Producto</label>
              <pv-input-text id="productName" v-model="productName" aria-describedby="productName-help" class="input-field" />
            </div>
            
            <div class="input-container">
              <label for="category" class="input-label">Categoria</label>
              <pv-dropdown v-model="category" :options="categories" placeholder="Seleccione la categoría" class="input-field" />
            </div>
            
            <div class="input-container">
              <label for="productPrice" class="input-label">Precio del Producto (PEN)</label>
              <input type="text" id="productPrice" v-model="productPrice" @input="formatCurrency" placeholder="0.00" class="input-field" />
            </div>
            
            <div class="input-container">
              <label for="checkbox" class="input-label">Producto personalizable </label>
              <pv-checkbox v-model="productOnSale" :binary="true" />
            </div>
          </div>
  
          <div class="publish-button-container">
            <pv-button label="Publicar" class="publish-button" />
          </div>
        </template> 
        <template #footer>
          <div class="flex gap-3 mt-1"></div>
        </template>
      </pv-card>
    </div>

  </template>
  
<script>
import AppToolbar from '@/components/the-application-toolbar.component.vue'
import {ProductApiServices} from '@/services/cliente-products-api.service.js'
export default {
  name: 'TheCatalog',
  components: {
    AppToolbar,
  },
  data() {
    return {
      productos: null,
      color: "", 
      visible: false, 
      chooseSizeCategory: false,
      chooseCategory: true,
      productName: "", 
      tamaño: "",
      category: "",
      categories: ["Joyería artesanal", "Textiles y tejidos", "Cerámica y alfarería", "Artesanía en madera", "Artesanía en cuero",
        "Arte visual", "Cuidado personal", "Juguetes", "Decoración del hogar", "Productos gastronómicos artesanales"], // Ejemplo de opciones de material
      confirm: null,
      toast: null,
      productPrice: '', 
      productOnSale: false, 
    };
  },
  methods: {
    toggleSizeSection() {
      this.chooseSizeCategory = !this.chooseSizeCategory;
      if (this.chooseCategory) {
        this.chooseCategory = false; 
      }
    },
    formatCurrency(event) {
      // Remueve cualquier caracter que no sea un dígito o un punto decimal
      let formattedValue = event.target.value.replace(/[^0-9.]/g, '');
      // Divide el valor por mil para separar los miles
      formattedValue = formattedValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      // Limita el número de decimales a dos
      formattedValue = formattedValue.replace(/^(\d*\.\d{2}).*$/, '$1');
      // Actualiza el valor del campo de entrada
      this.productPrice = formattedValue;
    },
    onUpload() {
            this.$toast.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 });
    }, 
  },

  mounted() {
  const productApi = new ProductApiServices();
  productApi.getAll()
    .then(response => {
      console.log(response.data);
      this.productos = response.data;
    })
    .catch(error => {
      console.error('Error al obtener los productos:', error);
    });
  },
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

.content-container {
  flex-grow: 1; 
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
  border: none;    border-radius: 8px;
  padding: 10px;
}

.publish-button:hover {
  background-color: darkblue;
}

/* Media query para pantallas más pequeñas */
@media only screen and (max-width: 768px) {
  .card {
    flex-direction: column; 
    align-items: center; 
  }

  .content-container {
    width: 100%; 
    margin-right: 0; 
  }

  .publish-button-container {
    width: 90%; 
  }
}
.edit-button {
  background-color: #116BC7;
  color: white;
  border: none;    border-radius: 8px;
  padding: 6px 11px;
  margin-left: auto; 
}
.edit-button-container {
  padding: 10px 0px;
}
</style>

