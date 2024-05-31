import axios from 'axios';

const http = axios.create({
  baseURL: 'http://localhost:3000/'
});

export class ProductApiServices {
  constructor() {
    this.http = http; 
  }

  async publishProduct(productData) {
    try {
      const response = await this.http.post('producto_publicado', productData);
      return response.data;
    } catch (error) {
      console.error('Error al publicar el producto:', error);
      throw error;
    }
  }
  async getProduct(id) {
    try {
      const response = await this.http.get(`producto_publicado/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error getting product:', error);
      throw error;
    }
  }



async getProductCategories() {
  try {
    const response = await this.http.get('productos_caracteristicas');
    return response.data[0].categoria;
  } catch (error) {
    console.error('Error fetching product categories:', error);
    throw error; 
  }
}

async getProductCharacteristics() {
  try {
    const response = await this.http.get('productos_caracteristicas');
    return response.data[0]; 
  } catch (error) {
    console.error('Error fetching product characteristics:', error);
    throw error;
  }
}



async saveProducto(data) {
  try {
    const response = await this.http.post('productos', data);
    return response.data;
  } catch (error) {
    console.error('Error saving product:', error);
    throw error;
  }
}
  async deleteProduct(id) {
    try {
      const response = await this.http.delete(`producto_publicado/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error deleting product:', error);
      throw error;
    }
  }
  async getPublishedProducts() {
    try {
      const response = await this.http.get('producto_publicado');
      return response.data;
    } catch (error) {
      console.error('Error getting published products:', error);
      throw error;
    }
  }

  async saveProduct(productData) {
    try {
      const response = await this.http.post('productos', productData);
      return response.data;
    } catch (error) {
      console.error('Error saving product:', error);
      throw error;
    }
  }
  async saveProductoAux(data) {
    try {
      const response = await this.http.post('producto_aux', data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
