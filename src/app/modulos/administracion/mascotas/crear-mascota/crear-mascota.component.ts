import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModeloMascota } from 'src/app/modelos/mascota.modelo';
import { MascotaService } from 'src/app/servicios/mascota.service';

@Component({
  selector: 'app-crear-mascota',
  templateUrl: './crear-mascota.component.html',
  styleUrls: ['./crear-mascota.component.scss']
})

export class CrearMascotaComponent implements OnInit {

  startIndex: number = 72;

  fgValidador: FormGroup = this.fb.group({
    'nombre':["", Validators.required],
    'estado':["", Validators.required],
    'tipo':["", Validators.required],
    'raza':["", Validators.required],
    'sexo':["", Validators.required],
    'fecha':["", Validators.required],
    'imagen':["", Validators.required],
    'fechaSolicitud':["", Validators.required]
  })

  constructor(private fb: FormBuilder,
    private servicioMascota: MascotaService) { }

  ngOnInit(): void {
  }

  RegistrarMascota(){
    let nombre = this.fgValidador.controls['nombre'].value;
    let tipo = this.fgValidador.controls['tipo'].value;
    let raza = this.fgValidador.controls['raza'].value;
    let sexo = this.fgValidador.controls['sexo'].value;
    let fechaNacimiento = this.fgValidador.controls['fecha'].value;
    let imagen = this.fgValidador.controls['imagen'].value;
    let fechaSolicitud = this.fgValidador.controls['fechaSolicitud'].value;
    let m = new ModeloMascota();
    m.nombre = nombre;
    m.estado = "pendiente";
    m.tipo = tipo;
    m.raza = raza;
    m.sexo = sexo;
    m.fechaNacimiento = fechaNacimiento;
    m.imagen = imagen;
    m.fechaSolicitud = fechaSolicitud;
    console.log(localStorage);
    var cliente = JSON.stringify(localStorage.getItem('datosSesion')); 
    var clienteId = JSON.parse(cliente);
    alert('Hello '+clienteId.substring(this.startIndex, 96) +'!');
    m.clienteId = clienteId.substring(this.startIndex, 96);

      
    this.servicioMascota.CrearMascota(m).subscribe((datos: ModeloMascota) => {
      alert("Solicitud enviada correctamente");
    }, (error: any) => {
      alert("Error al enviar la solicitud")
    })
 }

}
