import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloEmpleado } from 'src/app/modelos/empleado.modelo';
import { EmpleadoService } from 'src/app/servicios/empleado.service';

@Component({
  selector: 'app-crear-empleado',
  templateUrl: './crear-empleado.component.html',
  styleUrls: ['./crear-empleado.component.scss']
})
export class CrearEmpleadoComponent implements OnInit {

  fgValidador: FormGroup = this.fb.group({
    'correo':["", Validators.required, Validators.email],
    'nombre':["", Validators.required],
    'apellidos':["", Validators.required],
    'telefono':["", Validators.required],
    'ciudad':["", Validators.required]
  })

  constructor(private fb: FormBuilder,
    private servicioEmpleado: EmpleadoService,
    private router :Router) { }

  ngOnInit(): void {
  }

  //siteKey: string = "6LfRn34dAAAAAJi5sEb7ewQCAlyM9iNFccif8_5R";
  
  RegistrarEmpleado(){
    let email = this.fgValidador.controls['correo'].value;
    let nombre = this.fgValidador.controls['nombre'].value;
    let apellidos = this.fgValidador.controls['apellidos'].value;
    let telefono = this.fgValidador.controls['telefono'].value;
    let ciudad = this.fgValidador.controls['ciudad'].value;
    let tipo = "2";
    let e = new ModeloEmpleado();
    e.nombre = nombre;
    e.apellidos = apellidos;
    e.email = email;
    e.ciudad = ciudad;
    e.telefono = telefono;
    e.tipo = tipo;

    this.servicioEmpleado.CrearEmpleado(e).subscribe((datos: ModeloEmpleado) => {
      alert("Asesor registrado correctamente");
      this.router.navigate(["/inicio"]);
    }, (error: any) => {
      alert("Error al registrar el asesor")
    })
  }

}
