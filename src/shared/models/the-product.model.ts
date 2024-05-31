export class Product {
  id: any;
  nombre: any;
  descripcion: any;
  precio: any;
  detalles: any;
  detalles_del_artesano: any;
  parametros_personalizacion: {
    Unidades: any[];
    material: any[];
    tamanio: any[];
    gravado: any;
  };
  tamaño: any;
  input_text: any;
  gravado: any;
  categoria: any;
  imagen: any;
  imagenes_detalle: any[];
  autor: any;
  caracteristicas: {
    caracteristica_1: any;
    caracteristica_2: any;
    caracteristica_3: any;
    caracteristica_4: any;
    caracteristica_5: any;
  }[];
  constructor(id:any, nombre:any, descripcion:any, precio:any, detalles:any, detalles_del_artesano:any, parametros_personalizacion:any, tamaño:any, input_text:any, gravado:any, categoria:any, imagen:any, imagenes_detalle:any, autor:any, caracteristicas:any) {
    this.id = id;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio = precio;
    this.detalles = detalles;
    this.detalles_del_artesano = detalles_del_artesano;
    this.parametros_personalizacion = parametros_personalizacion;
    this.tamaño = tamaño;
    this.input_text = input_text;
    this.gravado = gravado;
    this.categoria = categoria;
    this.imagen = imagen;
    this.imagenes_detalle = imagenes_detalle;
    this.autor = autor;
    this.caracteristicas = caracteristicas;
  }
}