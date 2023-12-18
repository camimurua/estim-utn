import { Component, ViewChild } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { GameFormComponent } from '../../components/game-form/game-form.component';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.css'],
})
export class CreateGameComponent {
  @ViewChild(GameFormComponent) GameFormComponent!: GameFormComponent;

  constructor(private _gameService:GameService, private router: Router){}

  createGame(){
    const formValue = this.GameFormComponent.gameForm.value;

    //Aviso de creación
    Swal.fire({
      title: 'Juego agregado',
      text: 'El juego se ha dado de alta correctamente.',
      icon: 'success',
      confirmButtonText: 'Aceptar'
    }).then((result) => {
      if (result.isConfirmed) {
        // Redirige al usuario al listado de juegos
        this.router.navigate(['/juegos']);
      }
    });

    this.GameFormComponent.gameForm.reset();
    this._gameService.createGame(formValue).subscribe();
  }


}
