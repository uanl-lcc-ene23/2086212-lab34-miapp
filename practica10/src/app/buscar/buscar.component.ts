import { Component } from '@angular/core';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent {
  constructor(private BuscarService: ProductosService){}

  producto: any = {};
  idProducto: number = 0;

  buscarProducto(){
    this.BuscarService.getProducto(this.idProducto).subscribe(res=>{
      this.producto = res;
      console.log(res)
    })
  }
}
