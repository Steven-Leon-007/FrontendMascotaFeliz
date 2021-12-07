import { Component, OnInit } from '@angular/core';
import { ModeloPersona } from 'src/app/modelos/persona.modelo';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-buscar-persona',
  templateUrl: './buscar-persona.component.html',
  styleUrls: ['./buscar-persona.component.scss']
})
export class BuscarPersonaComponent implements OnInit {
  listadoCliente : ModeloPersona[] =[];

  constructor(private personaServicio: PersonaService) { }

  ngOnInit(): void {
    this.ObtenerListadoClientes();
  }

  ObtenerListadoClientes(){
    this.personaServicio.ObtenerClientes().subscribe((datos: ModeloPersona[]) => {
      this.listadoCliente = datos;
    })
  }

}
