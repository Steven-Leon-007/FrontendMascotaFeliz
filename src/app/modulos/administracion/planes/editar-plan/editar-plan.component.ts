import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloPlan } from 'src/app/modelos/plan.modelo';
import { PlanService } from 'src/app/servicios/plan.service';

@Component({
  selector: 'app-editar-plan',
  templateUrl: './editar-plan.component.html',
  styleUrls: ['./editar-plan.component.scss']
})
export class EditarPlanComponent implements OnInit {

  id: string = "";

  fgValidador: FormGroup = this.fb.group({
    'id':['', Validators.required],
    'nombre':['', Validators.required],
    'descripcion':['', Validators.required],
    'ciudad': ['', Validators.required],
    'precio':['', Validators.required]
  })

  constructor(private fb: FormBuilder,
    private servicioPlan: PlanService,
    private router: Router, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.BuscarPlan();
  }

  BuscarPlan(){
    this.servicioPlan.ObtenerPlanPorId(this.id).subscribe((datos: ModeloPlan) => {
      this.fgValidador.controls["id"].setValue(this.id);
      this.fgValidador.controls["nombre"].setValue(datos.nombre);
      this.fgValidador.controls["descripcion"].setValue(datos.descripcion);
      this.fgValidador.controls["ciudad"].setValue(datos.ciudad);
      this.fgValidador.controls["precio"].setValue(datos.precio);
    })
  }

  EditarPlan(){
    let nombre = this.fgValidador.controls["nombre"].value;
    let descripcion = this.fgValidador.controls["descripcion"].value;
    let ciudad = this.fgValidador.controls["ciudad"].value;
    let precio = parseInt(this.fgValidador.controls["precio"].value);
    let p = new ModeloPlan();
    p.nombre = nombre;
    p.descripcion = descripcion;
    p.precio = precio;
    p.id = this.id;
    p.ciudad = ciudad;
    this.servicioPlan.ActualizarPlan(p).subscribe((datos: ModeloPlan) => {
      alert("Plan actualizado correctamente");
      this.router.navigate(['/administracion/planes/buscar-plan']);
    }, (error: any) => {
      alert("Error actualizando el plan")
    })
  }

  delete(){
    if(confirm("¿Está seguro que desea eliminar el plan?")){
        
      this.servicioPlan.EliminarPlan(this.id).subscribe((datos: ModeloPlan) => {
        alert("¡Plan borrado con éxito!");
        this.router.navigate(["/administracion/planes/buscar-plan"]);
      }, (error: any) => {
        alert("Error al borrar el plan")
      })
    }
   }

}
