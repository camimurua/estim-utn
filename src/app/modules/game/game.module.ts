import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { GamesListComponent } from '../games/components/games-list/games-list.component';
import { GamesFormComponent } from '../games/components/games-form/games-form.component';

@NgModule({
  declarations: [GamesListComponent, GamesFormComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [GamesListComponent, GamesFormComponent],
})
export class GameModule {}