import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { Game } from '../game/game.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css'],
})
export class GameListComponent implements OnInit {

 gameArray$!: Observable<Game[] | null>;

  constructor(private gameService: GameService) {}
  
  ngOnInit(): void {
    this.gameArray$ = this.gameService.getGames();
  }
}
