import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModeloMascota } from 'src/app/modelos/mascota.modelo';
import { MascotaService } from 'src/app/servicios/mascota.service';
declare function handleSubmit(): void;


@Component({
  selector: 'app-crear-mascota',
  templateUrl: './crear-mascota.component.html',
  styleUrls: ['./crear-mascota.component.scss']
})

export class CrearMascotaComponent implements OnInit {
  myScriptElement: HTMLScriptElement;

  fgValidador: FormGroup = this.fb.group({
    'nombre': ["", Validators.required],
    'estado': ["", Validators.required],
    'tipo': ["", Validators.required],
    'raza': ["", Validators.required],
    'sexo': ["", Validators.required],
    'fecha': ["", Validators.required],
    'imagen': ["", Validators.required],
    'fechaSolicitud': ["", Validators.required]
  })

  constructor(private fb: FormBuilder,
    private servicioMascota: MascotaService) {
    handleSubmit();
    this.myScriptElement = document.createElement('script');
    this.myScriptElement.src = "assets/js/main-inicio.component.js";
    document.body.appendChild(this.myScriptElement);

  }

  ngOnInit(): void {
    this.servicioMascota.ObtenerIdCliente();
    alert(this.servicioMascota.ObtenerIdCliente())
  }

  RegistrarMascota() {
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
    m.clienteId = this.servicioMascota.ObtenerIdCliente();


    this.servicioMascota.CrearMascota(m).subscribe((datos: ModeloMascota) => {
      alert("Solicitud enviada correctamente");
    }, (error: any) => {
      alert("Error al enviar la solicitud")
    })
  }

}
