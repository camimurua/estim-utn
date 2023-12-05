import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-game',
  templateUrl: './edit-game.component.html',
  styleUrls: ['./edit-game.component.css'],
})
export class EditGameComponent {
  titulo: string = 'Modificar juego:';

  habilitar: boolean = true;
  id!: number;

  constructor(private route: ActivatedRoute) {
    // console.log(this.route.snapshot.params['id']);
  }

  funcionDelBoton() {
    console.log('Funciono');
  }
}
