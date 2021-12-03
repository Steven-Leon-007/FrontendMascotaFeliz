import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ModeloMascota } from 'src/app/modelos/mascota.modelo';
import { ModeloPersona } from 'src/app/modelos/persona.modelo';
import { MascotaService } from 'src/app/servicios/mascota.service';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-buscar-persona',
  templateUrl: './buscar-persona.component.html',
  styleUrls: ['./buscar-persona.component.scss']
})
export class BuscarPersonaComponent implements OnInit {

  startIndex: number = 72;


  constructor(private fb: FormBuilder,
    private servicioPersona: PersonaService) {   }

  ngOnInit(): void {
    this.ObtenerCliente();
  }


  fgValidador: FormGroup = this.fb.group({
    'id':["", Validators.required],
    'nombre':["", Validators.required],
    'apellidos':["", Validators.required],
    'email':["", Validators.required],
    'direccion':["", Validators.required],
    'ciudad':["", Validators.required],
    'rol':["",Validators.required]
  })
  
  ObtenerCliente(){
    console.log(localStorage);
    var id = JSON.stringify(localStorage.getItem('datosSesion')); 
    var clienteId = JSON.parse(id);
    clienteId = clienteId.substring(this.startIndex, 96);
    this.servicioPersona.ObtenerPersonaMascotaPorId(clienteId).subscribe((datos: ModeloPersona) => {
      this.fgValidador.controls["id"].setValue(clienteId);
      this.fgValidador.controls["nombre"].setValue(datos.nombre);
      this.fgValidador.controls["apellidos"].setValue(datos.apellidos);
      this.fgValidador.controls["email"].setValue(datos.email);
      this.fgValidador.controls["direccion"].setValue(datos.direccion);
      this.fgValidador.controls["ciudad"].setValue(datos.ciudad);
      this.fgValidador.controls["rol"].setValue(datos.rol);
    });
  }
}
