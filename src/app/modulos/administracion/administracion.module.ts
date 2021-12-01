import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { CrearPersonaComponent } from './personas/crear-persona/crear-persona.component';
import { EditarPersonaComponent } from './personas/editar-persona/editar-persona.component';
import { EliminarPersonaComponent } from './personas/eliminar-persona/eliminar-persona.component';
import { BuscarPersonaComponent } from './personas/buscar-persona/buscar-persona.component';
import { CrearProductoComponent } from './productos/crear-producto/crear-producto.component';
import { EditarProductoComponent } from './productos/editar-producto/editar-producto.component';
import { EliminarProductoComponent } from './productos/eliminar-producto/eliminar-producto.component';
import { BuscarProductoComponent } from './productos/buscar-producto/buscar-producto.component';
import { CrearPlanComponent } from './planes/crear-plan/crear-plan.component';
import { EditarPlanComponent } from './planes/editar-plan/editar-plan.component';
import { EliminarPlanComponent } from './planes/eliminar-plan/eliminar-plan.component';
import { BuscarPlanComponent } from './planes/buscar-plan/buscar-plan.component';
import { SeguridadRoutingModule } from '../seguridad/seguridad-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CrearMascotaComponent } from './mascotas/crear-mascota/crear-mascota.component';
import { BuscarMascotaComponent } from './mascotas/buscar-mascota/buscar-mascota.component';
import { EditarMascotaComponent } from './mascotas/editar-mascota/editar-mascota.component';
import { EliminarMascotaComponent } from './mascotas/eliminar-mascota/eliminar-mascota.component';


@NgModule({
  declarations: [
    CrearPersonaComponent,
    EditarPersonaComponent,
    EliminarPersonaComponent,
    BuscarPersonaComponent,
    CrearProductoComponent,
    EditarProductoComponent,
    EliminarProductoComponent,
    BuscarProductoComponent,
    CrearPlanComponent,
    EditarPlanComponent,
    EliminarPlanComponent,
    BuscarPlanComponent,
    CrearMascotaComponent,
    BuscarMascotaComponent,
    EditarMascotaComponent,
    EliminarMascotaComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule,
    SeguridadRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdministracionModule { }
