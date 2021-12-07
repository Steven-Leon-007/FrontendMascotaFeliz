import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloProducto } from 'src/app/modelos/producto.modelo';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.scss']
})
export class EditarProductoComponent implements OnInit {

  id: string = '';

  fgValidate: FormGroup = this.fb.group({
    'id': ['', Validators.required],
    'nombre': ['', Validators.required],
    'descripcion': ['', Validators.required],
    'precioRegular': ['', Validators.required],
    'precioVenta': ['', Validators.required],
    'ciudad': ['', Validators.required],
    'imagen': ['', Validators.required]


  })
  constructor(private fb: FormBuilder, private servicioProducto: ProductoService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.BuscarProducto();
  }


  BuscarProducto(){
    this.servicioProducto.ObtenerRegistroPorId(this.id).subscribe((datos: ModeloProducto) => {
      this.fgValidate.controls['id'].setValue(this.id);
      this.fgValidate.controls['nombre'].setValue(datos.nombre);
      this.fgValidate.controls['descripcion'].setValue(datos.descripcion);
      this.fgValidate.controls['precioRegular'].setValue(datos.precioRegular);
      this.fgValidate.controls['precioVenta'].setValue(datos.precioVenta);
      this.fgValidate.controls['ciudad'].setValue(datos.ciudad);
      this.fgValidate.controls['imagen'].setValue(datos.imagen);
    });
  }

  EditarProducto() {
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
    p.id = this.id;
    this.servicioProducto.ActualizarProducto(p).subscribe((datos: ModeloProducto) => {
      alert("Producto actualizado correctamente");
      this.router.navigate(['/administracion/listar-productos']);

    }, (error: any) => {
      alert("Error actualizando el producto");
    })
  }

  delete(){
    if(confirm("¿Está seguro que desea eliminar el producto?")){
      let nombre = this.fgValidate.controls['nombre'].value;
      let descripcion = this.fgValidate.controls['descripcion'].value;
      let precioRegular = parseInt(this.fgValidate.controls['precioRegular'].value);
      let precioVenta = parseInt(this.fgValidate.controls['precioVenta'].value);
      let ciudad = this.fgValidate.controls['ciudad'].value;
      let imagen = this.fgValidate.controls['imagen'].value;
      let p = new ModeloProducto();
      p.nombre = nombre;
      p.descripcion = descripcion;
      p.precioRegular = precioRegular;
      p.precioVenta = precioVenta;
      p.ciudad = ciudad;
      p.imagen = imagen;
      p.id = this.id;
  
      this.servicioProducto.EliminarProducto(this.id).subscribe((datos: ModeloProducto) => {
        alert("¡Producto borrada con éxito!");
        this.router.navigate(["/inicio"]);
      }, (error: any) => {
        alert("Error al borrar el producto")
      })
    }
   }
}
