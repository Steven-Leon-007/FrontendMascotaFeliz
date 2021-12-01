import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarMascotaComponent } from './mascotas/buscar-mascota/buscar-mascota.component';
import { CrearMascotaComponent } from './mascotas/crear-mascota/crear-mascota.component';
import { EditarMascotaComponent } from './mascotas/editar-mascota/editar-mascota.component';
import { EliminarMascotaComponent } from './mascotas/eliminar-mascota/eliminar-mascota.component';
import { BuscarPersonaComponent } from './personas/buscar-persona/buscar-persona.component';
import { CrearPersonaComponent } from './personas/crear-persona/crear-persona.component';
import { EditarPersonaComponent } from './personas/editar-persona/editar-persona.component';
import { EliminarPersonaComponent } from './personas/eliminar-persona/eliminar-persona.component';

const routes: Routes = [
  {
    path: "personas/crear-persona",
    component: CrearPersonaComponent
  },
  {
    path: "editar-persona",
    component: EditarPersonaComponent
  },
  {
    path: "buscar-persona",
    component: BuscarPersonaComponent
  },
  {
    path: "eliminar-persona",
    component: EliminarPersonaComponent
  },
  {
    path: "mascotas/crear-mascota",
    component: CrearMascotaComponent
  },
  {
    path: "mascotas/editar-mascota",
    component: EditarMascotaComponent
  },
  {
    path: "mascotas/buscar-mascota",
    component: BuscarMascotaComponent
  },
  {
    path: "mascotas/eliminar-mascota",
    component: EliminarMascotaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
