import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ModeloPersona } from 'src/app/modelos/persona.modelo';
import { MascotaService } from 'src/app/servicios/mascota.service';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-buscar-cliente-mascota',
  templateUrl: './buscar-cliente-mascota.component.html',
  styleUrls: ['./buscar-cliente-mascota.component.scss']
})
export class BuscarClienteMascotaComponent implements OnInit {

  id: string = "";

  constructor(private fb: FormBuilder,
    private servicioMascota: MascotaService,
    private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    alert(this.id = this.route.snapshot.params["id"])
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

    this.servicioMascota.ObtenerPersonaMascotaPorId(this.id).subscribe((datos: ModeloPersona) => {
      this.fgValidador.controls["nombre"].setValue(datos.nombre);
      this.fgValidador.controls["apellidos"].setValue(datos.apellidos);
      this.fgValidador.controls["email"].setValue(datos.email);
      this.fgValidador.controls["direccion"].setValue(datos.direccion);
      this.fgValidador.controls["ciudad"].setValue(datos.ciudad);
      this.fgValidador.controls["rol"].setValue(datos.rol);
    });
  }

}
