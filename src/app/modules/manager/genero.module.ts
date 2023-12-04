import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneroRoutingModule } from './genero-routing.module';
import { GeneroListComponent } from './pages/genero-list/genero-list.component';
import { GeneroComponent } from './pages/genero/genero.component';


@NgModule({
  declarations: [
    GeneroListComponent,
    GeneroComponent
  ],
  imports: [
    CommonModule,
    GeneroRoutingModule
  ]
})
export class GeneroModule { }
