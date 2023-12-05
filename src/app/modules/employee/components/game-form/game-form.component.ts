import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GameService } from 'src/app/services/game.service';
import { Game } from '../../pages/game/game.component';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})

export class GameFormComponent {
  @Input() game: Game | undefined;
  gameForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private _gameService: GameService){
    this.gameForm = this.formBuilder.group({
      id: [null, Validators.required],
      name: ['', Validators.required],
      cpuRequirements: this.formBuilder.group({
        processor: ['', Validators.required],
        storage: ['', Validators.required],
        memory: ['', Validators.required],
      }),
      price: [null, [Validators.required, Validators.min(0)]],
      genre: this.formBuilder.group({
        name: ['', Validators.required],
        minimumAge: [null, [Validators.required, Validators.min(0)]],
      }),
      gameType: ['', Validators.required],
    });
  }

  ngOnChanges(): void {
    if (this.game) {
      this.gameForm.patchValue(this.game);
    }
  }

  onSubmit(): void {
    const formValue = this.gameForm.value;
    this._gameService.createGame(formValue);
    this.gameForm.reset();
  }
}