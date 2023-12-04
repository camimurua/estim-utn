import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { isLoggedInGuard } from './guards/is-logged-in.guard';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'juegos',
    canActivate:[isLoggedInGuard],
    loadChildren: () =>
      import('./modules/employee/game.module').then(
        (m) => m.GameModule
      ),
  },
  {
    path: 'generos',
    canActivate:[isLoggedInGuard],
    loadChildren: () =>
      import('./modules/manager/genero.module').then((m) => m.GeneroModule),
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
