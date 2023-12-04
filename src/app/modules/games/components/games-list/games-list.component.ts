import { Component, OnInit } from '@angular/core';
import { Game, GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css']
})
export class GamesListComponent implements OnInit {

  games: Game[] = [];

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.gameService.games$.subscribe((games) => (this.games = games));
  }
  
}
