import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModeloPlan } from 'src/app/modelos/plan.modelo';
import { PlanService } from 'src/app/servicios/plan.service';
import { SeguridadService } from 'src/app/servicios/seguridad.service';

@Component({
  selector: 'app-buscar-plan',
  templateUrl: './buscar-plan.component.html',
  styleUrls: ['./buscar-plan.component.scss']
})
export class BuscarPlanComponent implements OnInit {

  listadoPlanes: ModeloPlan[] = [];
  seInicioSesion: boolean = false;
  noSeInicioSesion: boolean = false;

  constructor(private planServicio: PlanService,
    private seguridadServicio: SeguridadService) { }

  ngOnInit(): void {
    alert(this.seguridadServicio.ObtenerRol())
    if(this.seguridadServicio.ObtenerRol()=="1" || this.seguridadServicio.ObtenerRol()==""){
      this.seInicioSesion = true;
    }else{
      this.noSeInicioSesion = true;
    }
    this.ObtenerListadoPlanes();
  }

  ObtenerListadoPlanes(){
    this.planServicio.ObtenerPlanes().subscribe((datos: ModeloPlan[]) => {
      this.listadoPlanes = datos;
    })
  }

}