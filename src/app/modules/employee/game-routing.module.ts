import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameListComponent } from './pages/game-list/game-list.component';
import { CreateGameComponent } from './pages/create-game/create-game.component';
import { EditGameComponent } from './pages/edit-game/edit-game.component';
import { GameComponent } from './pages/game/game.component';

const routes: Routes = [
  { path: 'crear', component: CreateGameComponent },
  { path: ':id', component: GameComponent },
  { path: ':id/modificar', component: EditGameComponent },
  { path: '', component: GameListComponent },
  {
    path: '**',
    redirectTo: '/juegos',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GameRoutingModule {}
