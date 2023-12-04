import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, forkJoin, mergeMap, switchMap } from 'rxjs';
import { Game } from 'src/app/modules/employee/pages/game/game.component';
import { GameService } from 'src/app/services/game.service';
import { Genero, GeneroService } from 'src/app/services/genero.service';

@Component({
  selector: 'app-genero',
  templateUrl: './genero.component.html',
  styleUrls: ['./genero.component.css'],
})
export class GeneroComponent {
  genero?: Genero;
  games: Game[] = [];
  constructor(
    private generoService: GeneroService,
    private gameService: GameService,
    private activatedRoute: ActivatedRoute
  ) {
    const id = this.activatedRoute.snapshot.params['id'];

    this.generoService.getGeneroById(id).subscribe((genero) => {
      this.genero = genero;
      for (const gameData of genero.relatedGames) {
        const gameId = gameData.gameId;
        this.gameService
          .getGameById(gameId)
          .subscribe((game) => {
            this.games.push(game);
          });
      }
    });
  }
}
