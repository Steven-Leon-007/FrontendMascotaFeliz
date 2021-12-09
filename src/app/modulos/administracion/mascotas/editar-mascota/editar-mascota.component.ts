import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloMascota } from 'src/app/modelos/mascota.modelo';
import { ModeloSolicitudAfiliacion } from 'src/app/modelos/solicitudAfiliacion.modelo';
import { MascotaService } from 'src/app/servicios/mascota.service';

@Component({
  selector: 'app-editar-mascota',
  templateUrl: './editar-mascota.component.html',
  styleUrls: ['./editar-mascota.component.scss']
})
export class EditarMascotaComponent implements OnInit {

  id: string = "";

  fgValidadorSolicitud: FormGroup = this.fb.group({
    'comentario':["", Validators.required]
  })

  fgValidador: FormGroup = this.fb.group({
    'id':["", Validators.required],
    'clienteId':["", Validators.required],
    'nombre':["", Validators.required],
    'estado':["", Validators.required],
    'tipo':["", Validators.required],
    'raza':["", Validators.required],
    'sexo':["", Validators.required],
    'ciudad': ["", Validators.required],
    'fecha':["", Validators.required],
    'imagen':["", Validators.required],
    'fechaSolicitud':["", Validators.required]
  })

  constructor(private fb: FormBuilder,
    private servicioMascota: MascotaService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];

    this.BuscarProducto();
  }

  BuscarProducto(){
    this.servicioMascota.ObtenerMascotaPorId(this.id).subscribe((datos: ModeloMascota) => {
      this.fgValidador.controls["id"].setValue(this.id);
      this.fgValidador.controls["clienteId"].setValue(datos.clienteId);
      this.fgValidador.controls["nombre"].setValue(datos.nombre);
      this.fgValidador.controls["estado"].setValue(datos.estado);
      this.fgValidador.controls["tipo"].setValue(datos.tipo);
      this.fgValidador.controls["raza"].setValue(datos.raza);
      this.fgValidador.controls["sexo"].setValue(datos.sexo);
      this.fgValidador.controls['ciudad'].setValue(datos.ciudad);
      this.fgValidador.controls["fecha"].setValue(datos.fechaNacimiento);
      this.fgValidador.controls["imagen"].setValue(datos.imagen);
      this.fgValidador.controls["fechaSolicitud"].setValue(datos.fechaSolicitud);
    });
  }

  EditarMascota(){
    let nombre = this.fgValidador.controls['nombre'].value;
    let estado = this.fgValidador.controls['estado'].value;
    let tipo = this.fgValidador.controls['tipo'].value;
    let raza = this.fgValidador.controls['raza'].value;
    let sexo = this.fgValidador.controls['sexo'].value;
    let ciudad = this.fgValidador.controls['ciudad'].value;
    let fechaNacimiento = this.fgValidador.controls['fecha'].value;
    let imagen = this.fgValidador.controls['imagen'].value;
    let fechaSolicitud = this.fgValidador.controls['fechaSolicitud'].value;
    let m = new ModeloMascota();
    m.nombre = nombre;
    m.estado = estado;
    m.tipo = tipo;
    m.raza = raza;
    m.sexo = sexo;
    m.ciudad = ciudad;
    m.fechaNacimiento = fechaNacimiento;
    m.imagen = imagen;
    m.fechaSolicitud = fechaSolicitud;
    m.id = this.id;

    this.servicioMascota.ActualizarMascota(m).subscribe((datos: ModeloMascota) => {
      alert("Estado Actualizado correctamente");
    }, (error: any) => {
      alert("Error al Actualizar el Estado")
    })
 }

 delete(){
  if(confirm("¿Está seguro que desea eliminar la solicitud?")){
    let nombre = this.fgValidador.controls['nombre'].value;
    let estado = this.fgValidador.controls['estado'].value;
    let tipo = this.fgValidador.controls['tipo'].value;
    let raza = this.fgValidador.controls['raza'].value;
    let sexo = this.fgValidador.controls['sexo'].value;
    let ciudad = this.fgValidador.controls['ciudad'].value;
    let fechaNacimiento = this.fgValidador.controls['fecha'].value;
    let imagen = this.fgValidador.controls['imagen'].value;
    let fechaSolicitud = this.fgValidador.controls['fechaSolicitud'].value;
    let m = new ModeloMascota();
    m.nombre = nombre;
    m.estado = estado;
    m.tipo = tipo;
    m.raza = raza;
    m.sexo = sexo;
    m.ciudad = ciudad;
    m.fechaNacimiento = fechaNacimiento;
    m.imagen = imagen;
    m.fechaSolicitud = fechaSolicitud;
    m.id = this.id;

    this.servicioMascota.EliminarMascota(this.id).subscribe((datos: ModeloMascota) => {
      alert("¡Solicitud borrada con éxito!");
      this.router.navigate(["/inicio"]);
    }, (error: any) => {
      alert("Error al borrar la solicitud")
    })
  }
 }

 CrearSolicitudAfiliacion(){
  let petName = this.fgValidador.controls['nombre'].value;
  let estado = this.fgValidador.controls['estado'].value;
  let comentario = this.fgValidadorSolicitud.controls['comentario'].value;
  let clienteId = this.fgValidador.controls['clienteId'].value;
  let s = new ModeloSolicitudAfiliacion();
    s.petName = petName;
    s.estado = estado;
    s.comentario = comentario;
    s.clienteId = clienteId;

    this.servicioMascota.CrearSolicitudAfiliacion(s).subscribe((datos: ModeloSolicitudAfiliacion) => {
      alert("Comentario Enviado Correctamente");
    }, (error: any) => {
      alert("Error al enviar el comentario")
    })
 }

 

  

}
