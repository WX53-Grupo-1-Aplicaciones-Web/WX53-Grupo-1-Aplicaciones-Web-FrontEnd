<template>
  <div class="card-container">
  <pv-card class="card">
  <template #header>
      <img alt="user header" src="https://content.emarket.pe/common/collections/content/ed/3a/ed3aa421-2085-464d-98d9-ee37850290c8.png" />
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
                  @click=""
                  outlined
              />
      </div>
  </template>
  </pv-card>
</div>

</template>

<script>
export default{
  data() {
      return {
          ingredient:"",
          value1: 0,
          category: "",
          categories: [
          { name: "Manuel Herrera ", key: "A" },
          { name: "David Williams", key: "M" },
          ],    
          selectedCategories: ['Marketing']
      };
  }
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
