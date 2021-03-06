import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModeloProducto } from 'src/app/modelos/producto.modelo';
import { ProductoService } from 'src/app/servicios/producto.service';
import { SeguridadService } from 'src/app/servicios/seguridad.service';

@Component({
  selector: 'app-buscar-producto',
  templateUrl: './buscar-producto.component.html',
  styleUrls: ['./buscar-producto.component.scss']
})
export class BuscarProductoComponent implements OnInit {

  listadoRegistros: ModeloProducto[] = [];
  seInicioSesion: boolean = false;
  noSeInicioSesion: boolean = false;

  constructor(private productoServicio: ProductoService,
    private fb: FormBuilder,
    private seguridadServicio: SeguridadService) { }

  ngOnInit(): void {
    alert(this.seguridadServicio.ObtenerRol())
    if(this.seguridadServicio.ObtenerRol()=="1" || this.seguridadServicio.ObtenerRol()==""){
      this.seInicioSesion = true;
    }else{
      this.noSeInicioSesion = true;
    }
    this.ObtenerListadoProductos();
  }

  fgValidador: FormGroup = this.fb.group({
    'value': ["", Validators.required]
  })

  ObtenerListadoProductos(){
    let value = this.fgValidador.controls['value'].value;
    let property = "nombre";
    if(value == ""){
    this.productoServicio.ObtenerRegistros().subscribe((datos: ModeloProducto[]) => {
      this.listadoRegistros = datos;
    })
  }else{
    this.productoServicio.ObtenerRegistrosFiltro(property, value).subscribe((datos: ModeloProducto[]) => {
      this.listadoRegistros = datos;
    })
  }
  }
}