import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModeloMascota } from 'src/app/modelos/mascota.modelo';
import { MascotaService } from 'src/app/servicios/mascota.service';

@Component({
  selector: 'app-buscar-mascota',
  templateUrl: './buscar-mascota.component.html',
  styleUrls: ['./buscar-mascota.component.scss']
})
export class BuscarMascotaComponent implements OnInit {

  listadoMascotas: ModeloMascota[] = [];

  constructor( private mascotaServicio: MascotaService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.ObtenerListadoMascotas();
  }

  fgValidador: FormGroup = this.fb.group({
    'value': ["", Validators.required],
    'property': ["", Validators.required],
  })
  

  ObtenerListadoMascotas(){
    let value = this.fgValidador.controls['value'].value;
    let property = this.fgValidador.controls['property'].value;
    if(value == "" && property == ""){
      this.mascotaServicio.ObtenerMascotas().subscribe((datos: ModeloMascota[]) => {
        this.listadoMascotas = datos;
      })
    }else{
      this.mascotaServicio.ObtenerMascotasFiltro(property, value).subscribe((datos: ModeloMascota[]) => {
        this.listadoMascotas = datos;
      })
    }
    
  }

}
