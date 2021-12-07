import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModeloIdentificar } from 'src/app/modelos/identificar.modelo';
import { SeguridadService } from 'src/app/servicios/seguridad.service';

@Component({
  selector: 'app-barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrls: ['./barra-navegacion.component.scss']
})
export class BarraNavegacionComponent implements OnInit {

  seInicioSesion: boolean = false;
  seInicioSesionAdmin: boolean = false;

  subs: Subscription = new Subscription();

  constructor( private seguridadServicio: SeguridadService) { }

  ngOnInit(): void {
    this.subs = this.seguridadServicio.ObtenerDatosUsuarioEnSesion().subscribe((datos:ModeloIdentificar) => {
      if(this.seguridadServicio.ObtenerRol()=="1"){
        this.seInicioSesion = datos.estaIdentificado;
      }
      else
      {
        this.seInicioSesionAdmin = datos.estaIdentificado;
      }
      
    })
  }

  

}
