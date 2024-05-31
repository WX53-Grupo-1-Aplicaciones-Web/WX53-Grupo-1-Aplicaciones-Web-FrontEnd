<script>
import { useRouter } from 'vue-router';
import AppToolbar from '@/components/the-application-toolbar.component.vue'
import TheApplicationToolbar from '@/components/the-application-toolbar.component.vue'

export default {
  components: { TheApplicationToolbar },
  setup() {
    const router = useRouter();

    const redirectToCatalog = () => {
      router.push('/catalog');
    };

    return {
      redirectToCatalog
    };
  }
};
</script>
<template>
  <the-application-toolbar></the-application-toolbar>

  <div class="center">
    <h1>Página no encontrada</h1>
    <pv-button label="Ir al catálogo" @click="redirectToCatalog"></pv-button>
  </div>
</template>

<style scoped>
.center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>