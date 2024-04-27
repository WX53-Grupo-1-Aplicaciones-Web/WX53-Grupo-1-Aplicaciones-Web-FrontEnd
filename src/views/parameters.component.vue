<script>
import { useConfirm } from "primevue/useconfirm";
import { useToast } from "primevue/usetoast";
import { useRouter } from 'vue-router'; 


export default {
  name: "personalizar-card",
  data() {
    return {
      visible: false,
      showSizeSection: false,
      showMaterialSection: false,
      tamanio: 0,
      material: "",
      grabado: "",
      materiales: ["Material 1", "Material 2", "Material 3"],
      color: "",
      colors: ["Rojo", "Azul", "Verde"],
      confirm: null,
      toast: null,
    };
  },
  methods: {
    showTemplate() {
      if (this.confirm) {
        this.confirm.require({
          group: "templating",
          header: "Confirmación",
          message: "Confirme para continuar.",
          icon: "pi pi-exclamation-circle",
          acceptIcon: "pi pi-check",
          rejectIcon: "pi pi-times",
          rejectClass: "p-button-outlined p-button-sm",
          acceptClass: "p-button-sm",
          rejectLabel: "Cancel",
          acceptLabel: "Save",
          accept: () => {
            this.toast.add({
              severity: "info",
              summary: "Confirmed",
              detail: "You have accepted",
              life: 3000,
            });

            this.redirectToAdquisicion();
          },
          reject: () => {
            this.toast.add({
              severity: "error",
              summary: "Rejected",
              detail: "You have rejected",
              life: 3000,
            });
          },
        });
      } else {
        console.error("Confirm service is not initialized.");
      }
    },
    
    redirectToAdquisicion() {
      const router = useRouter();
      router.push('/adquisicion'); 
    },

    toggleSection() {
  if (this.showSizeSection && !this.showMaterialSection && !this.showGrabadoSection) {
    this.showMaterialSection = true;
  } else if (this.showSizeSection && this.showMaterialSection && !this.showGrabadoSection) {
    this.showGrabadoSection = true;
  } else {
    this.showSizeSection = true;
    this.showMaterialSection = true;
    this.showGrabadoSection = true;
  }
},

  },
  mounted() {
    this.confirm = useConfirm();
    this.toast = useToast();
  },
};
</script>


<template>
<pv-card class="card">
    <template #header>
        <img alt="user header" src="https://content.emarket.pe/common/collections/content/ed/3a/ed3aa421-2085-464d-98d9-ee37850290c8.png" />
    </template>
    <template #title><strong>Tu Producto puede personalizarse</strong></template>
    <template #subtitle>Agrega parametros de personalizacion para tu producto</template>
    <template #content>
        <div class="m-0">
            
            <label for="integeronly" class="font-bold block mb-2"> Color </label>
            <pv-dropdown v-model="color" :options="colors" placeholder="Seleccione el color" class="input-width"/>
            
        </div>
        <div v-if="showMaterialSection">
        <label for="integeronly" class="font-bold block mb-2"> Material </label>
        <pv-dropdown v-model="material" :options="materiales" placeholder="Seleccione el material" class="input-width"/>
      </div>

        <div v-if="showSizeSection">
        <label for="integeronly" class="font-bold block mb-2"> Tamaño</label>
            <pv-input-number v-model="tamaño" inputId="integeronly" placeholder="Ingrese el tamaño" class="input-width"/>
        </div>

        <div v-if="showGrabadoSection">
        <label for="integeronly" class="font-bold block mb-2"> Grabado</label>
            <pv-input-text v-model="grabado" placeholder="Escriba el grbado" class="input-width"/>
        </div>
    </template>
    <template #footer>
      <div class="flex gap-3 mt-1">

          <i class="pi pi-times" @click="toggleSection"></i>
      </div>
    </template>
</pv-card>


<pv-confirm-dialog group="templating">
    <template #message="slotProps">
        <div class="flex flex-column align-items-center w-full gap-3 border-bottom-1 surface-border">
            <i :class="slotProps.message.icon" class="text-6xl text-primary-500"></i>
            <p>{{ slotProps.message.message }}</p>
        </div>
    </template>
</pv-confirm-dialog>
<div class="button-container">
  <pv-button @click="showTemplate()" label="Publicar"></pv-button>
</div>

</template>

<style scoped>

.card {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 20px;
    width:100%;
    background-color: #E0EDFF;
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
