import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarEmpleadoComponent } from './empleados/buscar-empleado/buscar-empleado.component';
import { CrearEmpleadoComponent } from './empleados/crear-empleado/crear-empleado.component';
import { EditarEmpleadoComponent } from './empleados/editar-empleado/editar-empleado.component';
import { EliminaEmpleadoComponent } from './empleados/elimina-empleado/elimina-empleado.component';
import { BuscarClienteMascotaComponent } from './mascotas/buscar-cliente-mascota/buscar-cliente-mascota.component';
import { BuscarMascotaComponent } from './mascotas/buscar-mascota/buscar-mascota.component';
import { CrearMascotaComponent } from './mascotas/crear-mascota/crear-mascota.component';
import { EditarMascotaComponent } from './mascotas/editar-mascota/editar-mascota.component';
import { EliminarMascotaComponent } from './mascotas/eliminar-mascota/eliminar-mascota.component';
import { BuscarPersonaComponent } from './personas/buscar-persona/buscar-persona.component';
import { CrearPersonaComponent } from './personas/crear-persona/crear-persona.component';
import { EditarPersonaComponent } from './personas/editar-persona/editar-persona.component';
import { EliminarPersonaComponent } from './personas/eliminar-persona/eliminar-persona.component';
import { BuscarProductoComponent } from './productos/buscar-producto/buscar-producto.component';
import { SolicitudAfiliacionComponent } from './solicitud-afiliacion/solicitud-afiliacion.component';
import { CrearProductoComponent } from './productos/crear-producto/crear-producto.component';
import { EditarProductoComponent } from './productos/editar-producto/editar-producto.component';
import { BuscarPlanComponent } from './planes/buscar-plan/buscar-plan.component';
import { EliminarPlanComponent } from './planes/eliminar-plan/eliminar-plan.component';
import { EditarPlanComponent } from './planes/editar-plan/editar-plan.component';
import { CrearPlanComponent } from './planes/crear-plan/crear-plan.component';

const routes: Routes = [
  {
    path: "personas/crear-persona",
    component: CrearPersonaComponent
  },
  {
    path: "personas/editar-persona",
    component: EditarPersonaComponent
  },
  {
    path: "personas/buscar-persona",
    component: BuscarPersonaComponent
  },
  {
    path: "personas/eliminar-persona",
    component: EliminarPersonaComponent
  },
  {
    path: "mascotas/crear-mascota",
    component: CrearMascotaComponent
  },
  {
    path: "mascotas/editar-mascota/:id",
    component: EditarMascotaComponent
  },
  {
    path: "mascotas/buscar-mascota",
    component: BuscarMascotaComponent
  },
  {
    path: "mascotas/eliminar-mascota",
    component: EliminarMascotaComponent
  },
  {
    path: "mascotas/buscar-cliente-mascota/:id",
    component: BuscarClienteMascotaComponent
  },
  {
    path: "solicitud-afiliacion",
    component: SolicitudAfiliacionComponent
  },
  {
    path: "empleados/crear-empleado",
    component: CrearEmpleadoComponent
  },
  {
    path: "empleados/editar-empleado",
    component: EditarEmpleadoComponent
  },
  {
    path: "empleados/buscar-empleado",
    component: BuscarEmpleadoComponent
  },
  {
    path: "empleados/elimina-empleado",
    component: EliminaEmpleadoComponent
  },
  {
    path: "listar-productos",
    component: BuscarProductoComponent
  },
  {
    path: "crear-producto",
    component: CrearProductoComponent
  },
  {
    path: "editar-producto/:id",
    component: EditarProductoComponent
  },
  {
    path: "planes/crear-plan",
    component: CrearPlanComponent
  },
  {
    path: "planes/editar-plan/:id",
    component: EditarPlanComponent
  },
  {
    path: "planes/buscar-plan",
    component: BuscarPlanComponent
  },
  {
    path: "planes/eliminar-plan",
    component: EliminarPlanComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
