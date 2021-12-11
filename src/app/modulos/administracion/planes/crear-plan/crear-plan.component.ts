import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloPlan } from 'src/app/modelos/plan.modelo';
import { PlanService } from 'src/app/servicios/plan.service';

@Component({
  selector: 'app-crear-plan',
  templateUrl: './crear-plan.component.html',
  styleUrls: ['./crear-plan.component.scss']
})
export class CrearPlanComponent implements OnInit {

  fgValidador: FormGroup = this.fb.group({
    'nombre':['', Validators.required],
    'descripcion':['', Validators.required],
    'ciudad':['', Validators.required],
    'precio':['', Validators.required]
  })

  constructor(private fb: FormBuilder,
    private servicioPlan: PlanService,
    private router: Router) { }

  ngOnInit(): void {
  }

  GuardarPlan(){
    let nombre = this.fgValidador.controls["nombre"].value;
    let descripcion = this.fgValidador.controls["descripcion"].value;
    let ciudad = this.fgValidador.controls["ciudad"].value;
    let precio = parseInt(this.fgValidador.controls["precio"].value);
    let p = new ModeloPlan();
    p.nombre = nombre;
    p.descripcion = descripcion;
    p.ciudad = ciudad;
    p.precio = precio;

    this.servicioPlan.CrearPlan(p).subscribe((datos: ModeloPlan) => {
      alert("Plan creado correctamente");
      this.router.navigate(['/administracion/planes/buscar-plan']);
    }, (error: any) => {
      alert("Error almacenando el plan")
    })
  }

}
