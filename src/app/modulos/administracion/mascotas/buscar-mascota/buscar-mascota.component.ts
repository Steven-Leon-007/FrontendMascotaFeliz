import { Component, OnInit } from '@angular/core';
import { ModeloMascota } from 'src/app/modelos/mascota.modelo';
import { MascotaService } from 'src/app/servicios/mascota.service';

@Component({
  selector: 'app-buscar-mascota',
  templateUrl: './buscar-mascota.component.html',
  styleUrls: ['./buscar-mascota.component.scss']
})
export class BuscarMascotaComponent implements OnInit {

  listadoMascotas: ModeloMascota[] = [];

  constructor( private mascotaServicio: MascotaService) { }

  ngOnInit(): void {
    this.ObtenerListadoMascotas();
  }

  ObtenerListadoMascotas(){
    this.mascotaServicio.ObtenerMascotas().subscribe((datos: ModeloMascota[]) => {
      this.listadoMascotas = datos;
    })
  }

}
