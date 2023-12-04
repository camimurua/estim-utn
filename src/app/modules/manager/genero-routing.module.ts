import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneroComponent } from './pages/genero/genero.component';
import { GeneroListComponent } from './pages/genero-list/genero-list.component';

const routes: Routes = [
  { path: ':id', component: GeneroComponent },
  { path: '', component: GeneroListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeneroRoutingModule {}
