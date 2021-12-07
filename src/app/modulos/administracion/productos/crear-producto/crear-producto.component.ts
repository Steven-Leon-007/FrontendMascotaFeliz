import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloProducto } from 'src/app/modelos/producto.modelo';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.scss']
})
export class CrearProductoComponent implements OnInit {


  fgValidate: FormGroup = this.fb.group({
    'nombre': ['', Validators.required],
    'descripcion': ['', Validators.required],
    'precioRegular': ['', Validators.required],
    'precioVenta': ['', Validators.required],
    'ciudad': ['', Validators.required],
    'imagen': ['', Validators.required]


  })
  constructor(private fb: FormBuilder, private servicioProducto: ProductoService, private router: Router) { }

  ngOnInit(): void {
  }


  GuardarProducto() {
    let nombre = this.fgValidate.controls['nombre'].value;
    let descripcion = this.fgValidate.controls['descripcion'].value;
    let precioRegular = parseInt(this.fgValidate.controls['precioRegular'].value);
    let precioVenta = parseInt(this.fgValidate.controls['precioVenta'].value);
    let ciudad = this.fgValidate.controls['ciudad'].value;
    let imagen = this.fgValidate.controls['imagen'].value;

    let p = new ModeloProducto;
    p.nombre = nombre;
    p.descripcion = descripcion;
    p.precioRegular = precioRegular;
    p.precioVenta = precioVenta;
    p.ciudad = ciudad;
    p.imagen = imagen;

    this.servicioProducto.CrearProducto(p).subscribe((datos: ModeloProducto) => {
      alert("Producto almacenado correctamente");
      this.router.navigate(['/administracion/listar-productos']);

    }, (error: any) => {
      alert("Error almacenando el producto");
    })
  }
}