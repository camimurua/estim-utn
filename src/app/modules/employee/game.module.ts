import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameFormComponent } from './components/game-form/game-form.component';
import { CreateGameComponent } from './pages/create-game/create-game.component';
import { EditGameComponent } from './pages/edit-game/edit-game.component';
import { GameListComponent } from './pages/game-list/game-list.component';
import { GameRoutingModule } from './game-routing.module';
import { GameComponent } from './pages/game/game.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    GameFormComponent,
    CreateGameComponent,
    EditGameComponent,
    GameListComponent,
    GameComponent,
  ],
  imports: [CommonModule, GameRoutingModule, ReactiveFormsModule],
})
export class GameModule {}
