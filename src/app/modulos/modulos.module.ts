import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioComponent } from './pages/inicio/inicio.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { ContactanosComponent } from './pages/contactanos/contactanos.component';
import { ModulosRoutingModule } from './modulos-routing.module';



@NgModule({
  declarations: [
    InicioComponent,
    NosotrosComponent,
    ServiciosComponent,
    ContactanosComponent
  ],
  imports: [
    CommonModule,
    ModulosRoutingModule
  ],
  exports: [
    InicioComponent,
    NosotrosComponent,
    ServiciosComponent,
    ContactanosComponent
  ]
})
export class ModulosModule { }
