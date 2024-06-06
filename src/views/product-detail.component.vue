<script>
import AppToolbar from '@/components/the-application-toolbar.component.vue'
import SearchBar from '@/components/the-product-searching.component.vue'
import TheFooter from '@/components/the-footer.component.vue'
import { ProductCatalogService } from '@/services/the-product-on-catalog.service.js'

export default {
  name: 'TheProductDetail',

  components: {
    TheFooter,
    AppToolbar,
    SearchBar,
  },
  data() {
    return {
      product: null
    };
  },
  methods: {
    async getProductDetail(id) {
      const service = new ProductCatalogService();
      this.product = await service.getProductDetail(id);
    },
    goToBuyProduct(productId) {
      this.$router.push(`/buyProducts/${productId}`);
    }
  },
  created() {
    this.getProductDetail(this.$route.params.id);
  }
}
</script>

<template>
  <div class="product-detail">
    <AppToolbar />
    <SearchBar />

    <div class="product-detail-content">
      <div class="additional-images">
        <div v-for="(image, index) in images" :key="index">
          <img v-if="image" :src="image" :alt="'Imagen adicional ' + (index + 1)" class="additional-image">
        </div>
      </div>
      <div class="product-image-section">
        <img class="product-image" :src="'/'+product.imagen" alt="Imagen del producto">
      </div>
      <div class="product-info">
        <div class="author-info">
          <h2>{{ $t('detail.author') }} <span class="author-name">{{product.autor}}  </span></h2>
          <div class="author-details">
            <img class="author-image" src="../images/craftermanProfile.png" alt="Imagen del autor">
          </div>
        </div>
        <p class="author-description">{{product.detalles_del_artesano}}</p>
        <div class="product-details">
          <h3>{{ $t('detail.product_detail') }}</h3>
          <ul>
            <li>{{ product.caracteristicas[0].caracteristica_1 }}</li>
            <li>{{ product.caracteristicas[1].caracteristica_2 }}</li>
            <li>{{ product.caracteristicas[2].caracteristica_3 }}</li>
            <li>{{ product.caracteristicas[3].caracteristica_4 }}</li>
            <li>{{ product.caracteristicas[4].caracteristica_5 }}</li>

          </ul>
        </div>
      </div>
      <div class="product-info">
        <div class="product-actions">
          <p class="product-price">{{ $t('detail.price') }} {{product.precio}}</p>
          <button class="buy-button" @click="goToBuyProduct(product.id)">{{ $t('detail.buy') }}</button>
          <button class="customize-button" @click="goToBuyProduct(product.id)">{{ $t('detail.customize') }}</button>
        </div>
      </div>
    </div>
  </div>
  <TheFooter class="footer" />
</template>

<style scoped>
.product-image{
  width: 50%;
  height: 90%;
  margin-left: 20%;
}
.product-detail-content {
  display: flex;
  justify-content: space-between;
  padding: 20px;
}

.product-image-section {
  width: 50%;
}

.product-info {
  width: 45%;

}

.author-info {
  display: flex;
  align-items: center;
}

.author-name {
  margin-right: 10px;
}

.author-details {
  display: flex;
  align-items: center;
}

.author-image {
  width: 50px;
  margin-right: 10px;
}
.additional-images {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 20px;
  margin-left:50px;
}

.additional-image {
  width: 100px;
  height: 120px;
  border: 1px solid #000;
}
body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.product-actions {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 100px;

}
.product-detail {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.footer {

}

.buy-button {
  margin-top: 10px;
  padding: 10px 20px;
  border-radius: 20px;
  border:black 1px solid;
  cursor: pointer;
  color: white;
  background-color: #116BC7;
}

.customize-button {
  margin-top: 10px;
  padding: 10px 20px;
  border-radius: 20px;
  border:black 1px solid;
  cursor: pointer;
  color: white;
  background-color: #116BC7;
}

</style>