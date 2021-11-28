import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeguridadRoutingModule } from './seguridad-routing.module';
import { IdentificacionComponent } from './identificacion/identificacion.component';
import { RecuperarClaveComponent } from './recuperar-clave/recuperar-clave.component';


@NgModule({

  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  declarations: [
    IdentificacionComponent,
    RecuperarClaveComponent
  ],
  imports: [
    CommonModule,
    SeguridadRoutingModule
  ]
})
export class SeguridadModule { }
