import { Component } from '@angular/core';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  constructor(private productosService: ProductosService){}
  productos: any = [];
  categorias: any=[];
  category = 'jewelry';
  ngOnInit(): void{
    this.obtenerProductos();
    this.obtenerCategorias();
  }
  obtenerProductos(){
    this.productosService.getProductos().subscribe(res =>{
      this.productos = res;
    });
  }
  obtenerCategorias(){
    this.productosService.getCategorias().subscribe(res =>{
      this.categorias = res;
    });
  }
  handleChange(ev: any){
    this.category = ev.target.value;
    this.productosService.getCategoria(this.category).subscribe(res=>{
      this.productos = res;
    });
  }
  
}
