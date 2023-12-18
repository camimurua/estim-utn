import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameService } from 'src/app/services/game.service';
import { Genero } from 'src/app/services/genero.service';

export interface cpuRequirements {
    processor: string;
    storage: string;
    memory: string;
}

export interface Game {
  id: number;
  name: string;
  cpuRequirements: cpuRequirements;
  price: number;
  genre: Genero;
  gameType: string;
  image: string;
}

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnInit {
  game?: Game;

  gameArray: any[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private gameService: GameService
  ) {
  }
  ngOnInit(): void {
    this.gameService
      .getGameById(this.activatedRoute.snapshot.params['id'])
      .subscribe((res) => (this.game = res));
  }
}
