import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloPersona } from 'src/app/modelos/persona.modelo';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-crear-persona',
  templateUrl: './crear-persona.component.html',
  styleUrls: ['./crear-persona.component.scss']
})
export class CrearPersonaComponent implements OnInit {

  fgValidador: FormGroup = this.fb.group({
    'correo':["", Validators.required, Validators.email],
    'nombre':["", Validators.required],
    'apellidos':["", Validators.required],
    'direccion':["", Validators.required],
    'ciudad':["", Validators.required],
    'rol':["", Validators.required]
  })

  constructor(private fb: FormBuilder,
    private servicioPersona: PersonaService) { }

  ngOnInit(): void {
  }

  RegistrarPersona(){
    let email = this.fgValidador.controls['correo'].value;
    let nombre = this.fgValidador.controls['nombre'].value;
    let apellidos = this.fgValidador.controls['apellidos'].value;
    let direccion = this.fgValidador.controls['direccion'].value;
    let ciudad = this.fgValidador.controls['ciudad'].value;
    let rol = this.fgValidador.controls['rol'].value;
    let p = new ModeloPersona();
    p.nombre = nombre;
    p.apellidos = apellidos;
    p.email = email;
    p.direccion = direccion;
    p.ciudad = ciudad;
    p.rol = rol;

    this.servicioPersona.CrearPersona(p).subscribe((datos: ModeloPersona) => {
      alert("Usuario registrado correctamente");
    }, (error: any) => {
      alert("Error al registrar el usuario")
    })
 }
}