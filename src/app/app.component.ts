import {Component} from '@angular/core';

interface Producto {
   id: number;
   nombre: string;
   precio: number;
   descripcion: string;
   Fecha_Expedicion: string;
   Fecha_vencimiento: string;
 }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
   
   title = 'angular-course';

   productos: Producto[] = [
      {id: 100, nombre: "arroz", precio: 1500, descripcion: 'AAA',  Fecha_Expedicion: '20-10-2023', Fecha_vencimiento: '2023-12-01'},
      {id: 101, nombre: "azucar", precio: 2000, descripcion: 'BBB',  Fecha_Expedicion: '20-10-2023', Fecha_vencimiento: '2023-12-08'},
      {id: 102, nombre: "cafe", precio: 2000, descripcion: 'CCC',  Fecha_Expedicion: '20-10-2023', Fecha_vencimiento: '2023-12-12'},
      {id: 103, nombre: "sal", precio: 1000, descripcion: 'DDD',  Fecha_Expedicion: '20-10-2023', Fecha_vencimiento: '2023-12-10'},
      {id: 104, nombre: "harina", precio: 1800, descripcion: 'EEE',  Fecha_Expedicion: '20-10-2023', Fecha_vencimiento: '2023-12-13'},
      {id: 105, nombre: "pollo", precio: 9200, descripcion: 'FFF',  Fecha_Expedicion: '20-10-2023', Fecha_vencimiento: '2023-12-17'},
   ];

   codigo = "";

   buscarProducto(){
      return this.productos
   }

}
