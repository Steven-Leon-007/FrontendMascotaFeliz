import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModeloPersona } from 'src/app/modelos/persona.modelo';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-buscar-persona',
  templateUrl: './buscar-persona.component.html',
  styleUrls: ['./buscar-persona.component.scss']
})
export class BuscarPersonaComponent implements OnInit {
  listadoCliente : ModeloPersona[] =[];

  constructor(private personaServicio: PersonaService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.ObtenerListadoClientes();
  }

  fgValidador: FormGroup = this.fb.group({
    'value': ["", Validators.required]
  })

  ObtenerListadoClientes(){
      let value = this.fgValidador.controls['value'].value;
      let property = "nombre";
      if(value == ""){
      this.personaServicio.ObtenerClientes().subscribe((datos: ModeloPersona[]) => {
        this.listadoCliente = datos;
      })
    }else{
      this.personaServicio.ObtenerClientesFiltro(property, value).subscribe((datos: ModeloPersona[]) => {
        this.listadoCliente = datos;
      })
    }
  }

}
