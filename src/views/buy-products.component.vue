<script>
import AppToolbar from '@/components/the-application-toolbar.component.vue'
import {TheProductBackendService} from '@/services/the-product-backend.service.js'
export default {
  name: 'TheCatalog',
  components: {
    AppToolbar,
  },

  data() {
    return {
      product: null,
      tamanios: [],
      selectedTamanio: null,
      parameter: null,
      parameters:[],
      showErrorMessage: false,
    };
  },
  methods: {

    toggleSizeSection() {
      this.chooseSizeCategory = !this.chooseSizeCategory;
      if (this.chooseCategory) {
        this.chooseCategory = false;
      }
    },
    async getProductDetail(id) {
      //const service = new ProductCatalogService();
      const service = new TheProductBackendService();
      this.product = await service.getProductDetail(id);
      if (this.product && this.product.parametros_personalizacion) {
        this.tamanios = this.product.parametros_personalizacion['tamanio'];
      }
    },

    toggle(event) {
      this.$refs.op.toggle(event);
    },
    validateAndBuy(productId) {
      if (this.selectedTamanio === null || this.selectedTamanio === '' || this.parameter === null || this.parameter === '') {
        this.showErrorMessage = true;
      } else {
        this.showErrorMessage = false;
        this.parameters = [
          {
            paramName: 'selectedTamanio',
            paramValue: this.selectedTamanio
          },
          {
            paramName: 'parameter',
            paramValue: this.parameter
          }
        ];
        console.log('Parameters before pushing to Acquisition:', this.parameters);
        this.$store.commit('setParameters', this.parameters);
        this.$router.push({
          path: `/acquisition/${productId}`,
        });
      }
    },

  },
  mounted() {
    this.getProductDetail(this.$route.params.id);
  },

}

</script>
<template>
  <div>
    <AppToolbar></AppToolbar>
    <div class="card-container">
      <pv-card class="card" v-if="product">
        <template #header>
          <img  v-if="product" alt="user header" :src="product.imagen" style="width: 300px; height: auto; margin-right: 20px;" />
        </template>
        <template #title><strong>{{ $t('buy.tittle') }}</strong></template>
        <template #content>
          <div class="content-container">
            <p>{{ $t('buy.subtittle') }}</p>
          </div>
          <div class="input-container">
            <label for="color" class="input-label" >{{ product.parametrosPersonalizacion.parametros[0].nombre }}</label>
            <pv-dropdown v-model="parameter" :options="product.parametrosPersonalizacion.parametros[0].valores.map(v => v.valor)" :placeholder="product.inputText" class="input-field" />
          </div>
          <div class="radio-container flex flex-column gap-3">
            <label for="tamanios" class="input-label">{{ product.parametrosPersonalizacion.parametros[2].nombre }}</label>
            <div v-for="tamanio in product.parametrosPersonalizacion.parametros[2].valores" :key="tamanio.valor" class="flex flex-row align-items-center">
              <pv-radio-button v-model="selectedTamanio" :inputId="tamanio.valor" :value="tamanio.valor" />
              <label :for="tamanio.valor" class="ml-2">{{ tamanio.valor }}</label>
            </div>
          </div>
        </template>
        <template #footer>
        </template>
      </pv-card>

      <pv-card class="second-card" style="width: 20%;" v-if="product">
        <template #header>
        </template>
        <template #title>{{ $t('buy.price') }}</template>
        <template #subtitle>$ {{product.precio}}</template>
        <template #content>
          <div class="button-right">
            <pv-button label="Comprar" class="w-full" style="margin-bottom: 10px;" @click="validateAndBuy(product.id)" />
          </div>
        </template>

        <template #footer>
          <div class="flex flex-column items-center gap-3 mt-1">
            <img alt="user header" src="https://i.pinimg.com/736x/86/cf/a7/86cfa7e4db63b79deb6c11beaeb1fd1b.jpg" style="width: 100px; height: auto; margin-right: 20px;" />
            <p><strong>{{ $t('buy.author') }}</strong> {{product.autor}}</p>
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
  <p v-if="showErrorMessage" class="error-message">Por favor, selecciona los parametros antes de comprar.</p>
</template>


<style>
.error-message {
  color: red;
}
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
