import { Component, Input, ViewChild } from '@angular/core';
import { GamesFormComponent } from '../../components/games-form/games-form.component';
import { Game, GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-create-games',
  templateUrl: './create-games.component.html',
  styleUrls: ['./create-games.component.css']
})
export class CreateGamesComponent {
  @ViewChild(GamesFormComponent) gameFormComponent!: GamesFormComponent;
  @Input() game: Game | undefined;

  constructor(private _gameService: GameService){}

  onSubmit(): void {
    const formValue = this.gameFormComponent.gameForm.value;

    if (this.game) {
      this._gameService.updateGame(formValue);
    } else {
      this._gameService.addGame(formValue);
    }

    this.gameFormComponent.gameForm.reset();
  }

}
