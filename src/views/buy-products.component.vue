<template>
    <div>
    <AppToolbar></AppToolbar>
    <div class="card-container">
    <pv-card class="card" v-for="(producto, index) in productos" :key="index">
        <template #header>
          <img alt="user header" src="https://content.emarket.pe/common/collections/content/ed/3a/ed3aa421-2085-464d-98d9-ee37850290c8.png" style="width: 300px; height: auto; margin-right: 20px;" />
        </template>
        <template #title><strong>¡Este producto puede personalizarse!</strong></template>
        <template #content>
          <div class="content-container">
              <p>Elije los cambios personalizados por defecto para este producto</p>
          </div>
          <div class="input-container">
              <label for="color" class="input-label">Color</label>
              <pv-dropdown v-model="producto.parametros_personalizacion.color" :options="colors" placeholder="Elije un color" class="input-field" />
          </div>
          <div class="radio-container flex flex-column gap-3">
              <label for="tamaño" class="input-label">Tamaño</label>
              <div v-for="tamaño in tamaños" :key="tamaño" class="flex flex-row align-items-center">
                  <pv-radio-button v-model="selectedCategory" :inputId="tamaño" :value="tamaño" />
                  <label :for="tamaño" class="ml-2">{{ tamaño }}</label>
              </div>
          </div>

        </template>
        <template #footer>
        </template>
    </pv-card>



    <!-- Card 2 -->
    <pv-card class="second-card" style="width: 20%; " v-if="productos && productos.length > 0">
        <template #header>
        </template>
        <template #title>Precio</template>
        <template #subtitle>S/.{{ productos[0].precio }}</template>
        <template #content>
          <div class="button-right">
            <pv-button label="Comprar" class="w-full" style="margin-bottom: 10px;"/>
            <pv-button label="Personalizar producto" class="w-full" />
          </div>
        </template>

        <template #footer>
            <div class="flex flex-column items-center gap-3 mt-1">
              <img alt="user header" src="https://i.pinimg.com/736x/86/cf/a7/86cfa7e4db63b79deb6c11beaeb1fd1b.jpg" style="width: 100px; height: auto; margin-right: 20px;" />
              <p><strong>Autor:</strong>{{ productos[0].autor }}</p>

            </div>
        </template>
    </pv-card>

   </div>

   </div>

   <pv-message class="messageinfo" severity="info">Puedes conversar con el artesano para personalizar tu producto de formas adicionales</pv-message> 

   <div class="message-container">
          <div>
            <pv-button class="chat-button" type="button" icon="" label="Manuel Herrera" @click="toggle" />
          </div>
          <div class="card flex justify-content-center">
              <pv-overlay-panel ref="op" :appendTo="self">
                  <div class="flex flex-column gap-3 w-25rem">
                    <h2>Manuel Herrera</h2>
                    <div class="message">Hola, ¿cómo puedo ayudarte?</div>
                    <div class="message">Me gustaría obtener más información sobre...</div>
                  </div>
              </pv-overlay-panel>
          </div>
        
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
    selectedCategory: 'Production',
    tamaño: "",
    tamaños: [],
    color: "",
    colors: [],
  };
  },
  methods: {
    toggleSizeSection() {
      this.chooseSizeCategory = !this.chooseSizeCategory;
      if (this.chooseCategory) {
        this.chooseCategory = false; 
      }
    },

    toggle(event) {
      this.$refs.op.toggle(event);
    }
  },
  mounted() {
    const productApi = new ProductApiServices();

    productApi.getAll()

    .then(response => {
      console.log('Respuesta del servidor:', response.data);
      const productos = response?.data;
      if (Array.isArray(productos) && productos.length > 0) {
        this.productos = productos;

        this.colors = this.productos.reduce((acumulador, producto) => {
          return acumulador.concat(producto?.parametros_personalizacion?.color || []);
        }, []);
        this.tamaños = this.productos.reduce((acumulador, producto) => {
          return acumulador.concat(producto?.parametros_personalizacion?.tamaño || []);
        }, []);

        this.colors = Array.from(new Set(this.colors));
        //console.log('Colores disponibles:', this.colors);
        this.tamaños = Array.from(new Set(this.tamaños));
        //console.log('Materiales disponibles:', this.tamaños);

      } else {
        console.error('La respuesta del servidor no tiene la estructura esperada o no contiene productos.');
      }
    })
    .catch(error => {
      console.error('Error al obtener los productos:', error);
    });

  },
}

</script>

<style>

.messageinfo {
  position: fixed;
  bottom: 0;
  width: 55%;
}
.card-container {
    display: flex;
    justify-content: space-between; 
}

.card-container > * {
    width: 48%; 
    padding: 20px; 
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
}

.card-container{
    justify-content: space-between; 
    height: 100%; 
}
.card {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 20px;
  width: 100%;
  background-color: #E0EDFF;
}

.second-card {
  display: flex;
  text-align: right;
  justify-content: center;
  align-items: center;
  margin: 20px;
  width: 100%;
  background-color: #E0EDFF;
}

.ml-2 {
    margin-left: 10px;
    margin-bottom: 10px;
  }

.radio-container .flex-row {
    margin-bottom: 10px;
    margin-top: 10px; 
}

.message-container {
  display: flex;
  position:fixed;
  bottom: 0px;
  left: 65%;
}

.chat-button {
  display: flex;
  justify-content: center;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  width: 300%;
  background-color: #116BC7; 
  color: #ffffff; 
  border-color: #116BC7;
}

.button-right .w-full {
  background-color: #116BC7; 
  color: #ffffff; 
  border-color: #000; 
}
</style>
