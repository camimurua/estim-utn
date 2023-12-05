import { Component, ViewChild } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { GameFormComponent } from '../../components/game-form/game-form.component';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.css'],
})
export class CreateGameComponent {
  @ViewChild(GameFormComponent) GameFormComponent!: GameFormComponent;

  constructor(private _gameService:GameService){}

  createGame(){
    const formValue = this.GameFormComponent.gameForm.value
    this.GameFormComponent.gameForm.reset()
    this._gameService.createGame(formValue).subscribe()
  }

  get isFormValid(): boolean {
    if (this.GameFormComponent) return this.GameFormComponent.gameForm.valid
    else return false
  }
}
