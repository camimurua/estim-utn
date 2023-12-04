import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Game } from '../../pages/game/game.component';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})
export class GameFormComponent {

  @Input() isEdit:boolean = false
  @Input() game!:Game

  gameForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.gameForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      country: ['', Validators.required],
      salary: ['', Validators.required],
    });

  }



}
