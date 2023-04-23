import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { }

  getProductos(){ //Todos los productos
    return this.http.get('https://fakestoreapi.com/products');
  }
  getCategorias(){ //Todas las categorias
    return this.http.get('https://fakestoreapi.com/products/categories');
  }
  getCategoria(category: string){//Productos por categoria
    return this.http.get('https://fakestoreapi.com/products/category/'+category);
  }
  getProducto(idProducto: number){ //Obtiene producto en particular -- por id
    return this.http.get('https://fakestoreapi.com/products/'+idProducto);
  }
}
