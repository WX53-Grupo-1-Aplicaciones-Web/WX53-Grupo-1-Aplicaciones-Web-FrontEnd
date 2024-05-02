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
        <label for="category" class="input-label">Categoria</label>
        <pv-dropdown v-model="category" :options="categories" placeholder="Seleccione la categoría" class="input-field" />
      </div>
      
      <div class="input-container">
        <label for="productPrice" class="input-label">Precio del Producto (PEN)</label>
        <input type="text" id="productPrice" v-model="productPrice" @input="formatCurrency" placeholder="0.00" class="input-field" />
      </div>

      <div class="input-container">
        <label for="imagen" class="input-label">Imagen del producto</label>
        <pv-input-text id="imagen" v-model="imagen" placeholder="Ingrese la imagen del producto (url)" aria-describedby="productImage-help" class="input-field" />
      </div>

      <div class="input-container">
          <label for="productDescription" class="input-label">Descripcion del Producto</label>
          <pv-textarea v-model="productDescription" rows="5" cols="30" class="input-field" placeholder="Escriba una descripción del producto" />
      </div>

      <div class="input-container">
        <label for="checkbox" class="input-label">Producto personalizable </label>
        <pv-checkbox @change="redirectToParameters" v-model="productOnSale" :binary="true" />
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
import {ProductApiServices} from '@/services/cliente-products-api.service.js'

export default {
name: 'TheCatalog',
components: {
  AppToolbar,
},
data() {
  return {

    visible: false, 
    chooseSizeCategory: false,
    chooseCategory: true,
    productName: "",
    imagen:"",
    category: "",
    categories: [], 
    confirm: null,
    toast: null,
    productPrice: '', 
    productOnSale: false, 
    allProductCharacteristics: { 
        color: [],
        tamanio: [],
        material: ''
      }
  };
},
methods: {

  async redirectToParameters() {
    if (this.productOnSale) {
    const newProduct = {
      id: "0",
      color: [],
      tamanio: [],
      material: '',
      nombre: this.productName,
      categoria: this.category,
      imagen:this.imagen,
      precio: parseFloat(this.productPrice),
      descripcion: this.productDescription
    };


    try {
      const productService = new ProductApiServices();
      await productService.publishProduct(newProduct);
    } catch (error) {
      console.error('Error al publicar el producto:', error);
    }
      this.$router.push('/parameters');
    }

  },
  toggleSizeSection() {
    this.chooseSizeCategory = !this.chooseSizeCategory;
    if (this.chooseCategory) {
      this.chooseCategory = false; 
    }
  },
  formatCurrency(event) {
    let formattedValue = event.target.value.replace(/[^0-9.]/g, '');
    formattedValue = formattedValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    formattedValue = formattedValue.replace(/^(\d*\.\d{2}).*$/, '$1');
    this.productPrice = formattedValue;
  },

  
  async publishProduct() {
  const allProducts = this.productsData.map(productData => ({
    ...this.allProductCharacteristics,
    nombre: productData.nombre,
    categoria: productData.categoria,
    precio: parseFloat(productData.precio),
    imagen: productData.imagen,
    descripcion: productData.descripcion,
    color: productData.color,
    tamanio: productData.tamanio,
    material: productData.material
  }));

  try {
    const productService = new ProductApiServices();
    for (const product of allProducts) {
      await productService.publishProduct(product);
    }
    this.$router.push('/parameters');
  } catch (error) {
    console.error('Error al publicar los productos:', error);
  }
  },
  formatCurrency(event) {
    let formattedValue = event.target.value.replace(/[^0-9.]/g, '');
    formattedValue = formattedValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    formattedValue = formattedValue.replace(/^(\d*\.\d{2}).*$/, '$1');
    this.productPrice = formattedValue;
  },
  
},
async created() {
  try {
    const productService = new ProductApiServices();
    this.categories = await productService.getProductCategories();
  } catch (error) {
    console.error('Error fetching product categories:', error);
  }
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

.description-input {
width: 100%; 
height: auto; 
min-height: 100px; 
max-height: 200px; 
padding: 8px;
border: 1px solid #ccc;
border-radius: 4px;
overflow-y: scroll; 
resize: vertical; 
word-wrap: break-word; 
white-space: pre-wrap; 
}

</style>
