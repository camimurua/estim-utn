import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Game, GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-games-form',
  templateUrl: './games-form.component.html',
  styleUrls: ['./games-form.component.css']
})

export class GamesFormComponent {
  @Input() game: Game | undefined;
  gameForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private _gameService: GameService){
    this.gameForm = this.formBuilder.group({
      id: ['', Validators.required],
      nameGame: ['', Validators.required],
      reqCpu: this.formBuilder.group({
        memory: ['', Validators.required],
        storage: ['', Validators.required],
      }),
      price: ['', Validators.required],
      genre: this.formBuilder.group({
        name: ['', Validators.required],
        minAge: [Validators.required],
      }),
      gameType: ['', Validators.required]
    });
  }

  ngOnChanges(): void {
    if (this.game) {
      this.gameForm.patchValue(this.game);
    }
  }

  onSubmit(): void {
    const formValue = this.gameForm.value;

    if (this.game) {
      this._gameService.updateGame(formValue);
    } else {
      this._gameService.addGame(formValue);
    }

    this.gameForm.reset();
  }
}
